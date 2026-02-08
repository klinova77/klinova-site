// scripts/audit-cities-batches.mjs
// ----------------------------------------------------------------------------
// 1) SUBMIT : envoie l’audit en batch (selon scripts/audit-cities.json)
// node scripts/audit-cities-batches.mjs submit
//
// 2) COLLECT : récupère les résultats
// node scripts/audit-cities-batches.mjs collect --batch batch_xxx
//
// Sorties :
// - audit-report.json / audit-report.md (global)
// - audit-apply.suggested.json : uniquement applySafe=true (setField only)
// - audit-manual.json : uniquement applySafe=false (patches + issues)
// - audit-manual.md : version lisible (triée)
// ----------------------------------------------------------------------------

import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import OpenAI from "openai";
import { Project, SyntaxKind } from "ts-morph";

/* =============================================================================
   CONFIG / PATHS
============================================================================= */
const ROOT = process.cwd();
const CONFIG_PATH = path.join(ROOT, "scripts", "audit-cities.json");
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

const OUT_DIR = path.join(ROOT, "scripts", ".audit_out");
const OUT_BATCH_META = path.join(OUT_DIR, "batch-meta.json");
const OUT_INPUT_JSONL = path.join(OUT_DIR, "batch-input.jsonl");
const OUT_OUTPUT_JSONL = path.join(OUT_DIR, "batch-output.jsonl");
const OUT_ERROR_JSONL = path.join(OUT_DIR, "batch-error.jsonl");

const OUT_REPORT_JSON = path.join(ROOT, "audit-report.json");
const OUT_REPORT_MD = path.join(ROOT, "audit-report.md");
const OUT_APPLY_SUGGESTED = path.join(ROOT, "audit-apply.suggested.json");

// NEW: manual review outputs
const OUT_MANUAL_JSON = path.join(ROOT, "audit-manual.json");
const OUT_MANUAL_MD = path.join(ROOT, "audit-manual.md");

/* =============================================================================
   HELPERS
============================================================================= */
function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}
function writeText(p, s) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, s, "utf8");
}
function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function listTsFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.isFile() && p.endsWith(".ts")) out.push(p);
    }
  };
  walk(dir);
  return out;
}
function normalizeSlugsList(input) {
  if (!input) return [];
  if (Array.isArray(input)) return input.map(String);
  if (typeof input === "object" && Array.isArray(input.slugs)) return input.slugs.map(String);
  return [];
}
function getArgValue(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}
function parseJsonl(text) {
  const out = [];
  for (const line of text.split("\n")) {
    const s = line.trim();
    if (!s) continue;
    out.push(JSON.parse(s));
  }
  return out;
}
function safeJoinUnderRoot(p) {
  return path.isAbsolute(p) ? p : path.join(ROOT, p);
}

/* =============================================================================
   TS-MORPH EXTRACTION
============================================================================= */
function extractCityObject(sf) {
  const cityVar = sf.getVariableDeclaration("city");
  if (!cityVar) return null;
  return cityVar.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
}

function getPropAssignment(objLit, key) {
  const prop = objLit.getProperty(key);
  if (!prop) return null;
  return prop.asKind(SyntaxKind.PropertyAssignment);
}
function getInitializer(pa) {
  if (!pa) return null;
  return pa.getInitializer();
}

/**
 * Parse path like:
 *  - "customDescription"
 *  - "services[2].uniqueIntro"
 *  - "services[2].faqAdditions[0].answer"
 *  - "faq[1].answer"
 */
function parsePathTokens(pathStr) {
  const tokens = [];
  const parts = String(pathStr || "").split(".").filter(Boolean);
  for (const part of parts) {
    const m = part.match(/^([a-zA-Z0-9_$-]+)(\[(\d+)\])?$/);
    if (!m) {
      tokens.push({ key: part, index: null });
      continue;
    }
    tokens.push({ key: m[1], index: m[3] != null ? Number(m[3]) : null });
  }
  return tokens;
}

/**
 * Returns text content for a given path if it resolves to:
 * - StringLiteral "..."
 * - NoSubstitutionTemplateLiteral `...`
 *
 * IMPORTANT: returns null for TemplateExpression (with ${}).
 */
function getTextAtPath(cityObj, pathStr) {
  const tokens = parsePathTokens(pathStr);
  let cur = cityObj;

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!cur) return null;

    if (cur.getKind?.() === SyntaxKind.ObjectLiteralExpression) {
      const pa = getPropAssignment(cur, t.key);
      const init = getInitializer(pa);
      if (!init) return null;

      if (t.index != null) {
        if (init.getKind() !== SyntaxKind.ArrayLiteralExpression) return null;
        const arr = init.asKindOrThrow(SyntaxKind.ArrayLiteralExpression);
        const el = arr.getElements()[t.index];
        if (!el) return null;

        if (i === tokens.length - 1) {
          if (el.getKind() === SyntaxKind.StringLiteral) return el.getLiteralText();
          if (el.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) return el.getLiteralText();
          return null;
        }

        if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
          cur = el.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
          continue;
        }
        return null;
      }

      if (i === tokens.length - 1) {
        if (init.getKind() === SyntaxKind.StringLiteral) return init.getLiteralText();
        if (init.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) return init.getLiteralText();
        return null;
      }

      if (init.getKind() === SyntaxKind.ObjectLiteralExpression) {
        cur = init.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        continue;
      }

      return null;
    }

    return null;
  }

  return null;
}

/* =============================================================================
   LLM AUDIT (BATCH) — issues[] + patches[]
============================================================================= */
function buildAuditSchema() {
  return {
    name: "CityAuditResult",
    
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        issues: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              severity: { type: "string", enum: ["high", "medium", "low"] },
              category: {
                type: "string",
                enum: ["orthographe", "style", "seo", "legal", "consistency", "factual_suspect", "other"],
              },
              path: { type: "string" },
              message: { type: "string" },
              evidence: { type: "string" },
              recommendation: { type: "string" },
            },
            required: ["severity", "category", "path", "message", "evidence", "recommendation"],
          },
        },

        patches: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              op: { type: "string", enum: ["setField", "substring"] },
              applySafe: { type: "boolean" },
              severity: { type: "string", enum: ["high", "medium", "low"] },
              category: {
                type: "string",
                enum: ["orthographe", "style", "seo", "legal", "consistency", "factual_suspect", "other"],
              },
              path: { type: "string" },
              reason: { type: "string" },

              // Always required (empty string when irrelevant)
              expected: { type: "string" },
              value: { type: "string" },
              find: { type: "string" },
              replace: { type: "string" },
              context: { type: "string" },
            },

            // IMPORTANT: strict schema requires required includes ALL keys in properties
            required: [
              "op",
              "applySafe",
              "severity",
              "category",
              "path",
              "reason",
              "expected",
              "value",
              "find",
              "replace",
              "context",
            ],
          },
        },
      },
      required: ["issues", "patches"],
    },
  };
}


function buildResponsesBody({ model, fileRel, fileContent, rulesText }) {
  const schema = buildAuditSchema();

  const system = `
Tu es auditeur qualité (orthographe / style / SEO / legal / cohérence / fact-check prudent) pour des pages locales Klinova stockées dans un fichier TypeScript.

Objectif :
1) Remonter TOUT ce qui cloche (même si tu n'es pas 100% certain) dans issues[].
2) Proposer des corrections dans patches[].

Règle d'or :
- Tu peux être "large" dans issues[].
- Tu ne mets applySafe=true dans patches[] QUE si la correction est certaine, minimale, et ne change pas le sens.

Contraintes fortes :
- Tu n'inventes AUCUN fait local (quartier, axe, chiffre, promesse, délai).
- Tu n'ajoutes pas de nouvelles promesses ("sous 24h", "urgence", etc.).
- Tu ne changes pas le sens.
- Pas de réécriture : correction minimale.

Patches :
- op="setField": tu donnes expected (valeur actuelle exacte) et value (valeur corrigée complète).
- op="substring": tu donnes find/replace + un petit context (extrait autour) ; mets applySafe=false (car on relira).

Important :
- Si tu n'es pas certain de expected EXACT: n'émet PAS de patch setField.
- En cas de doute : issue plutôt que patch.
- Dans les champs HTML : ne casse pas les balises ; correction minimale.

IMPORTANT (schema strict):
- Tous les champs du patch sont requis.
- Si op="setField": remplis expected + value, et mets find/replace/context à "".
- Si op="substring": remplis find + replace + context, et mets expected/value à "".


Format :
- Retourne UNIQUEMENT un JSON conforme au schéma.
`.trim();

  const user = `
Fichier: ${fileRel}

rulesText:
${rulesText}

Contenu TS:
${fileContent}
`.trim();

  return {
    model,
    input: [
      { role: "system", content: [{ type: "input_text", text: system }] },
      { role: "user", content: [{ type: "input_text", text: user }] },
    ],
    temperature: 0.2, // un peu plus "large" pour détecter des issues
    text: {
      format: {
        type: "json_schema",
        name: schema.name,
        schema: schema.schema,
        strict: true,
      },
    },
  };
}

/* =============================================================================
   NORMALIZATION
============================================================================= */
function normalizePatch(p) {
  const op = p?.op;
  if (op !== "setField" && op !== "substring") return null;

  return {
    op,
    applySafe: Boolean(p?.applySafe),
    severity: p?.severity ?? "low",
    category: p?.category ?? "other",
    path: p?.path ?? "",
    reason: p?.reason ?? "",
    expected: typeof p?.expected === "string" ? p.expected : "",
    value: typeof p?.value === "string" ? p.value : "",
    find: typeof p?.find === "string" ? p.find : "",
    replace: typeof p?.replace === "string" ? p.replace : "",
    context: typeof p?.context === "string" ? p.context : "",
  };
}

function normalizeIssue(it) {
  return {
    severity: it?.severity ?? "low",
    category: it?.category ?? "other",
    path: it?.path ?? "",
    message: it?.message ?? "",
    evidence: it?.evidence ?? "",
    recommendation: it?.recommendation ?? "",
  };
}

/* =============================================================================
   REPORTING (md)
============================================================================= */
function toReportMarkdown(report) {
  let md = `# Audit City — Klinova\n\n`;
  md += `Généré : ${report.generatedAt}\n`;
  md += `Total fichiers : ${report.files.length}\n\n`;

  for (const f of report.files) {
    md += `## ${f.slug} — ${f.file}\n\n`;

    const issues = f.gptIssues || [];
    const patches = f.gptPatches || [];

    if (!issues.length && !patches.length) {
      md += `✅ Rien à signaler.\n\n`;
      continue;
    }

    if (issues.length) {
      md += `### Issues\n\n`;
      for (const it of issues) {
        md += `- **${it.severity.toUpperCase()}** — ${it.category} — \`${it.path}\`\n`;
        md += `  - ${it.message}\n`;
        if (it.evidence) md += `  - Evidence: \`${String(it.evidence).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
        if (it.recommendation) md += `  - Reco: ${it.recommendation}\n`;
      }
      md += `\n`;
    }

    if (patches.length) {
      md += `### Patches\n\n`;
      for (const p of patches) {
        md += `- **${p.severity.toUpperCase()}** — ${p.category} — \`${p.path}\` — op=${p.op} — applySafe=${p.applySafe}\n`;
        md += `  - Reason: ${p.reason}\n`;
        if (p.op === "setField") {
          md += `  - Expected: \`${String(p.expected).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
          md += `  - Value: \`${String(p.value).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
        } else {
          md += `  - find/replace: \`${String(p.find).slice(0, 120)}\` → \`${String(p.replace).slice(0, 120)}\`\n`;
          if (p.context) md += `  - context: \`${String(p.context).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
        }
      }
      md += `\n`;
    }
  }

  return md;
}

function toManualMarkdown(manual) {
  const sevRank = { high: 0, medium: 1, low: 2 };
  const items = [];

  for (const f of manual.files) {
    for (const it of f.issues) {
      items.push({ kind: "issue", slug: f.slug, file: f.file, ...it });
    }
    for (const p of f.patches) {
      items.push({ kind: "patch", slug: f.slug, file: f.file, ...p });
    }
  }

  items.sort(
    (a, b) =>
      (sevRank[a.severity] ?? 9) - (sevRank[b.severity] ?? 9) ||
      a.slug.localeCompare(b.slug) ||
      a.path.localeCompare(b.path)
  );

  let md = `# Audit — Manuel (applySafe=false)\n\n`;
  md += `Généré : ${manual.generatedAt}\n`;
  md += `Total items : ${items.length}\n\n`;

  for (const x of items) {
    if (x.kind === "issue") {
      md += `- **ISSUE ${x.severity.toUpperCase()}** — ${x.slug} — ${x.category} — \`${x.path}\`\n`;
      md += `  - ${x.message}\n`;
      if (x.evidence) md += `  - Evidence: \`${String(x.evidence).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
      if (x.recommendation) md += `  - Reco: ${x.recommendation}\n`;
    } else {
      md += `- **PATCH ${x.severity.toUpperCase()}** — ${x.slug} — ${x.category} — \`${x.path}\` — op=${x.op}\n`;
      md += `  - ${x.reason}\n`;
      if (x.op === "setField") {
        md += `  - Expected: \`${String(x.expected).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
        md += `  - Value: \`${String(x.value).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
      } else {
        md += `  - find/replace: \`${String(x.find).slice(0, 120)}\` → \`${String(x.replace).slice(0, 120)}\`\n`;
        if (x.context) md += `  - context: \`${String(x.context).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
      }
    }
  }

  md += `\n`;
  return md;
}

/* =============================================================================
   APPLY SUGGESTED — applySafe=true ONLY + validations
============================================================================= */
function isUsableString(s) {
  if (s == null) return false;
  const t = String(s);
  if (!t.trim()) return false;
  if (t.length > 50000) return false;
  return true;
}

function isPatchAutoApplicable(p) {
  // strict: auto apply uniquement setField + applySafe
  if (!p) return false;
  if (p.applySafe !== true) return false;
  if (p.op !== "setField") return false;

  const catOk = new Set(["orthographe", "style", "seo", "legal", "consistency"]);
  if (!catOk.has(p.category)) return false;

  if (!isUsableString(p.path)) return false;
  if (!isUsableString(p.value)) return false;
  if (!isUsableString(p.reason)) return false;

  // expected peut être vide côté modèle, car on resync depuis TS.
  return true;
}

function buildSuggestedApply(report) {
  const edits = [];
  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  for (const f of report.files) {
    const abs = path.isAbsolute(f.file) ? f.file : path.join(ROOT, f.file);

    let cityObj = null;
    try {
      const sf = project.addSourceFileAtPath(abs);
      cityObj = extractCityObject(sf);
    } catch {
      cityObj = null;
    }
    if (!cityObj) continue;

    for (const raw of f.gptPatches ?? []) {
      const p = normalizePatch(raw);
      if (!p) continue;
      if (!isPatchAutoApplicable(p)) continue;

      const expectedFromTs = getTextAtPath(cityObj, p.path);
      if (!isUsableString(expectedFromTs)) continue;

      edits.push({
        file: f.file,
        path: String(p.path),
        mode: "setField",
        expected: String(expectedFromTs),
        value: String(p.value),
        reason: String(p.reason || ""),
      });
    }
  }

  return {
    version: 3,
    dryRun: true,
    mode: "setField-only",
    maxEditsPerFile: 50,
    edits,
  };
}

/* =============================================================================
   RESPONSES OUTPUT TEXT EXTRACTION
============================================================================= */
function extractOutputTextFromResponsesBody(respBody) {
  if (!respBody) return null;

  if (typeof respBody.output_text === "string" && respBody.output_text.trim()) {
    return respBody.output_text;
  }

  const out = respBody.output;
  if (Array.isArray(out)) {
    for (const item of out) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;

      for (const c of content) {
        if (c?.type === "output_text" && typeof c.text === "string" && c.text.trim()) {
          return c.text;
        }
        if (c?.type === "output_json" && c.json) {
          return JSON.stringify(c.json);
        }
        if (c?.type === "json" && c.json) {
          return JSON.stringify(c.json);
        }
      }
    }
  }

  return null;
}

/* =============================================================================
   MAIN FLOW
============================================================================= */
async function submitBatch() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in env/.env");
    process.exit(1);
  }
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`Missing ${CONFIG_PATH}. Create scripts/audit-cities.json first.`);
    process.exit(1);
  }

  const cfg = readJson(CONFIG_PATH);

  const citiesDirRaw = cfg.citiesDir || "src/data/cities-draft";
  const citiesDir = safeJoinUnderRoot(citiesDirRaw);

  const model = cfg.model || "gpt-5.2";
  const rulesText = cfg.rulesText || "Klinova City rules/context (internal).";

  if (!fs.existsSync(citiesDir)) {
    console.error("citiesDir not found:", citiesDir);
    process.exit(1);
  }

  let files = listTsFiles(citiesDir);

  const maxFiles = Number(cfg.maxFiles || 0);
  const slugsDirect = Array.isArray(cfg.slugs) ? cfg.slugs.map(String) : [];
  let slugsFromFile = [];
  if (cfg.slugsJsonPath) {
    const p = safeJoinUnderRoot(cfg.slugsJsonPath);
    if (!fs.existsSync(p)) {
      console.error("slugsJsonPath not found:", p);
      process.exit(1);
    }
    slugsFromFile = normalizeSlugsList(readJson(p));
  }
  const slugs = slugsFromFile.length ? slugsFromFile : slugsDirect;

  if (slugs.length) {
    const wanted = new Set(slugs.map(String));
    files = files.filter((fp) => wanted.has(path.basename(fp, ".ts")));
  }
  if (maxFiles > 0) files = files.slice(0, maxFiles);

  console.log("[info] citiesDir =", citiesDir);
  console.log("[info] files selected =", files.length);




  if (!files.length) {
    console.log("[info] no files selected; exiting.");
    return;
  }

  ensureDir(OUT_DIR);

  const lines = [];
  for (const fp of files) {
    const fileRel = path.relative(ROOT, fp).replace(/\\/g, "/");
    const fileId = path.basename(fp, ".ts");
    const fileContent = fs.readFileSync(fp, "utf8");

    const body = buildResponsesBody({ model, fileRel, fileContent, rulesText });

    lines.push(
      JSON.stringify({
        custom_id: `audit__${fileId}`,
        method: "POST",
        url: "/v1/responses",
        body,
      })
    );
  }

  writeText(OUT_INPUT_JSONL, lines.join("\n") + "\n");
  console.log("[ok] wrote", OUT_INPUT_JSONL);

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const fileObj = await openai.files.create({
    file: fs.createReadStream(OUT_INPUT_JSONL),
    purpose: "batch",
  });

  const batch = await openai.batches.create({
    input_file_id: fileObj.id,
    endpoint: "/v1/responses",
    completion_window: "24h",
    metadata: {
      job: "audit-cities-klinova",
      createdAt: new Date().toISOString(),
      model,
    },
  });

  writeText(
    OUT_BATCH_META,
    JSON.stringify(
      {
        batch_id: batch.id,
        input_file_id: fileObj.id,
        endpoint: batch.endpoint,
        status: batch.status,
        created_at: batch.created_at,
        citiesDir,
      },
      null,
      2
    )
  );

  console.log("[done] batch created:", batch.id);
  console.log("[info] saved meta:", OUT_BATCH_META);
  console.log("\nNext:\n  node scripts/audit-cities-batches.mjs collect --batch " + batch.id);
}

async function collectBatch() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in env/.env");
    process.exit(1);
  }
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`Missing ${CONFIG_PATH}. Create scripts/audit-cities.json first.`);
    process.exit(1);
  }

  const cfg = readJson(CONFIG_PATH);

  const citiesDirRaw = cfg.citiesDir || "src/data/cities-draft";
  const citiesDir = safeJoinUnderRoot(citiesDirRaw);

  if (!fs.existsSync(citiesDir)) {
    console.error("citiesDir not found:", citiesDir);
    process.exit(1);
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const batchId =
    getArgValue("--batch") || (fs.existsSync(OUT_BATCH_META) ? readJson(OUT_BATCH_META).batch_id : null);

  if (!batchId) {
    console.error("Missing --batch batch_xxx and no scripts/.audit_out/batch-meta.json found.");
    process.exit(1);
  }

  const batch = await openai.batches.retrieve(batchId);
  console.log("[info] batch status:", batch.status);

  const isFinal = ["completed", "expired", "failed", "cancelled"].includes(batch.status);
  if (!isFinal) {
    console.log("[info] batch not final yet; will still download output/error files if available.");
  }


  ensureDir(OUT_DIR);

  let outputLines = [];
  let errorLines = [];

  if (batch.output_file_id) {
    const fileResponse = await openai.files.content(batch.output_file_id);
    const text = await fileResponse.text();
    writeText(OUT_OUTPUT_JSONL, text);
    outputLines = parseJsonl(text);
    console.log("[ok] downloaded output:", OUT_OUTPUT_JSONL);
  } else {
    console.log("[warn] no output_file_id on batch.");
  }

  if (batch.error_file_id) {
    const errResponse = await openai.files.content(batch.error_file_id);
    const errText = await errResponse.text();
    writeText(OUT_ERROR_JSONL, errText);
    errorLines = parseJsonl(errText);
    console.log("[ok] downloaded error:", OUT_ERROR_JSONL);
  }
  if (errorLines.length) {
    const byMsg = new Map();
    for (const line of errorLines) {
      const err = line?.error ?? line?.response?.body?.error ?? line?.response?.error ?? {};
      const key = `${err.code || err.type || "unknown"} :: ${err.message || "no_message"}`;
      byMsg.set(key, (byMsg.get(key) || 0) + 1);
    }

    console.log("\n[debug] error summary (top 10):");
    for (const [k, n] of Array.from(byMsg.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10)) {
      console.log(`  - ${n}x ${k}`);
    }
    console.log("");
  }


  // Map fileId -> {issues, patches}
  const gptByFileId = new Map();

  for (const line of outputLines) {
    const customId = line?.custom_id;
    const fileId = String(customId || "").replace(/^audit__/, "");
    const respBody = line?.response?.body;

    const outputText = extractOutputTextFromResponsesBody(respBody);
    if (!outputText) {
      gptByFileId.set(fileId, { issues: [], patches: [] });
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(outputText);
    } catch {
      gptByFileId.set(fileId, {
        issues: [
          {
            severity: "high",
            category: "consistency",
            path: "api",
            message: "Model returned non-JSON output (should be json_schema).",
            evidence: String(outputText).slice(0, 180),
            recommendation: "Vérifier le schéma et le parsing.",
          },
        ],
        patches: [],
      });
      continue;
    }

    const issues = Array.isArray(parsed?.issues) ? parsed.issues.map(normalizeIssue) : [];
    const patches = Array.isArray(parsed?.patches) ? parsed.patches.map(normalizePatch).filter(Boolean) : [];
    gptByFileId.set(fileId, { issues, patches });
  }

  for (const line of errorLines) {
    const customId = line.custom_id;
    const fileId = String(customId || "").replace(/^audit__/, "");
    const err = line?.error ?? line?.response?.body?.error ?? line?.response?.error ?? {};

    gptByFileId.set(fileId, {
      issues: [
        {
          severity: "high",
          category: "consistency",
          path: "api",
          message: `Batch request errored: ${err.code || err.type || "unknown"}`,
          evidence: err.message || "no message",
          recommendation: "Vérifier la requête batch / modèle / quota.",
        },
      ],
      patches: [],
    });
  }

  // Resélection fichiers (même logique submit)
  let files = listTsFiles(citiesDir);

  const slugsDirect = Array.isArray(cfg.slugs) ? cfg.slugs.map(String) : [];
  let slugsFromFile = [];
  if (cfg.slugsJsonPath) {
    const p = safeJoinUnderRoot(cfg.slugsJsonPath);
    if (fs.existsSync(p)) slugsFromFile = normalizeSlugsList(readJson(p));
  }
  const slugs = slugsFromFile.length ? slugsFromFile : slugsDirect;

  if (slugs.length) {
    const wanted = new Set(slugs.map(String));
    files = files.filter((fp) => wanted.has(path.basename(fp, ".ts")));
  }
  const maxFiles = Number(cfg.maxFiles || 0);
  if (maxFiles > 0) files = files.slice(0, maxFiles);

  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "klinova-city-audit-patches-v2",
    batch: {
      id: batch.id,
      status: batch.status,
      output_file_id: batch.output_file_id || null,
      error_file_id: batch.error_file_id || null,
      endpoint: batch.endpoint,
    },
    files: [],
  };

  // manual-only structure
  const manual = {
    generatedAt: new Date().toISOString(),
    mode: "klinova-city-audit-manual",
    files: [],
  };

  for (const fp of files) {
    const fileRel = path.relative(ROOT, fp).replace(/\\/g, "/");
    const fileId = path.basename(fp, ".ts");
    let displaySlug = fileId;

    let cityObj = null;
    try {
      const sf = project.addSourceFileAtPath(fp);
      cityObj = extractCityObject(sf);
      const slugText = cityObj ? getTextAtPath(cityObj, "slug") : null;
      if (slugText) displaySlug = slugText;
    } catch {
      cityObj = null;
    }

    const gpt = gptByFileId.get(fileId) || { issues: [], patches: [] };
    const gptIssues = gpt.issues || [];
    const gptPatches = gpt.patches || [];

    report.files.push({
      file: fileRel,
      fileId,
      slug: displaySlug,
      gptIssues,
      gptPatches,
    });

    // Split manual: applySafe=false OR op=substring always goes manual
    const manualIssues = gptIssues; // issues are always manual by definition
    const manualPatches = gptPatches.filter((p) => !p.applySafe || p.op !== "setField");

    if (manualIssues.length || manualPatches.length) {
      manual.files.push({
        file: fileRel,
        fileId,
        slug: displaySlug,
        issues: manualIssues,
        patches: manualPatches,
      });
    }

    const autoCount = gptPatches.filter((p) => isPatchAutoApplicable(p)).length;
    console.log(`[ok] ${displaySlug} -> issues=${gptIssues.length}, patches=${gptPatches.length}, auto=${autoCount}`);
  }

  // Write outputs
  writeText(OUT_REPORT_JSON, JSON.stringify(report, null, 2));
  writeText(OUT_REPORT_MD, toReportMarkdown(report));

  // apply safe only
  const applySuggested = buildSuggestedApply(report);
  writeText(OUT_APPLY_SUGGESTED, JSON.stringify(applySuggested, null, 2));

  // manual only
  writeText(OUT_MANUAL_JSON, JSON.stringify(manual, null, 2));
  writeText(OUT_MANUAL_MD, toManualMarkdown(manual));

  console.log("[done] Wrote", OUT_APPLY_SUGGESTED);
  console.log("[done] Wrote", OUT_MANUAL_JSON);
  console.log("[done] Wrote", OUT_MANUAL_MD);
  console.log("[done] Wrote", OUT_REPORT_JSON);
  console.log("[done] Wrote", OUT_REPORT_MD);
}

async function main() {
  const cmd = (process.argv[2] || "").toLowerCase();
  if (!cmd || (cmd !== "submit" && cmd !== "collect")) {
    console.log("Usage:");
    console.log("  node scripts/audit-cities-batches.mjs submit");
    console.log("  node scripts/audit-cities-batches.mjs collect --batch batch_xxx");
    process.exit(1);
  }

  if (!fs.existsSync(CONFIG_PATH)) {
    console.error(`Missing ${CONFIG_PATH}.`);
    process.exit(1);
  }

  if (cmd === "submit") return submitBatch();
  if (cmd === "collect") return collectBatch();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
