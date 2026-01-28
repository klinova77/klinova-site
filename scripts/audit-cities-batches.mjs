// scripts/audit-cities-batches.mjs
// ----------------------------------------------------------------------------
// 1) SUBMIT : envoie l’audit en batch (selon scripts/audit-cities.json)
//    - Si slugs=[] et slugsJsonPath="" : envoie TOUS les fichiers .ts du dossier citiesDir (y compris sous-dossiers)
//    - Génère : scripts/.audit_out/batch-meta.json + scripts/.audit_out/batch-input.jsonl
// node scripts/audit-cities-batches.mjs submit
//
// 2) COLLECT : récupère les résultats du batch (quand le statut est "completed")
//    - Utilise le batch_id de --batch (ou batch-meta.json)
//    - Génère : audit-report.json + audit-report.md + audit-summary.md
//    - Génère : audit-apply.suggested.json (SAFE setField uniquement)
// node scripts/audit-cities-batches.mjs collect --batch batch_xxx
//
// (Optionnel) COLLECT sans --batch => lit scripts/.audit_out/batch-meta.json
// node scripts/audit-cities-batches.mjs collect
//
// ----------------------------------------------------------------------------
// Notes importantes (Klinova City):
// - On AUTORISE les template literals/backticks sur les champs HTML (hubIntro, uniqueIntro, uniqueDeepDive, faq.answer, etc.).
// - On AUTORISE les retours ligne dans ces champs HTML.
// - On reste conservateur : on ne propose des patches LLM que si c’est sûr et minimal.
// - L’apply.suggested.json ne contient QUE du setField (pas de substring).
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
const OUT_SUMMARY_MD = path.join(ROOT, "audit-summary.md");
const OUT_APPLY_SUGGESTED = path.join(ROOT, "audit-apply.suggested.json");

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
function getStringLiteralText(node) {
  return node?.asKind(SyntaxKind.StringLiteral)?.getLiteralText?.() ?? null;
}
function getTemplateLiteralText(node) {
  // NoSubstitutionTemplateLiteral => `...`
  if (!node) return null;
  if (node.getKind?.() === SyntaxKind.NoSubstitutionTemplateLiteral) {
    return node.getLiteralText?.() ?? null;
  }
  // TemplateExpression => `a ${b} c` (we do NOT try to resolve; treat as non-safe)
  return null;
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

function findDuplicateTopLevelKeys(obj) {
  const counts = new Map();
  for (const prop of obj.getProperties()) {
    const pa = prop.asKind(SyntaxKind.PropertyAssignment);
    if (!pa) continue;
    const name = pa.getName();
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  return Array.from(counts.entries())
    .filter(([, c]) => c > 1)
    .map(([k, c]) => ({ key: k, count: c }));
}

/* =============================================================================
   LOCAL AUDIT (conservateur, adapté à City Klinova)
============================================================================= */

// Champs où backticks et retours ligne sont NORMAUX (HTML long, multi-lignes).
// => on ne doit pas déclencher d'alerte "template string" / "\n" sur eux.
const HTML_FIELDS_ALLOW_BACKTICKS = new Set([
  "hubIntro",
  "uniqueIntro",
  "uniqueDeepDive",
  "answer", // faq[].answer / faqAdditions[].answer
]);

// On autorise aussi les retours ligne si le champ est *typiquement* HTML.
// (Même si c'est stocké en "..." avec \n, ou en `...` multi-lignes)
function isHtmlishField(propName) {
  if (HTML_FIELDS_ALLOW_BACKTICKS.has(propName)) return true;
  // champs connus côté services
  if (propName === "uniqueIntro" || propName === "uniqueDeepDive") return true;
  // hubIntro au niveau city
  if (propName === "hubIntro") return true;
  return false;
}

function addIssue(issues, it) {
  issues.push({
    severity: it.severity,
    category: it.category,
    path: it.path,
    message: it.message,
    excerpt: it.excerpt ?? "",
    replacement: it.replacement ?? "",
    recommendation: it.recommendation ?? "",
  });
}

function scanTextSimple(text) {
  const found = [];

  // 1) Double espace
  const idxDouble = text.indexOf("  ");
  if (idxDouble !== -1) {
    const excerpt = text.slice(Math.max(0, idxDouble - 25), idxDouble + 25);
    const replacement = excerpt.replace(/ {2,}/g, " ");
    found.push({
      message: "Double espace détecté.",
      excerpt,
      replacement,
    });
  }

  // 2) Espace avant virgule/point
  const m = text.match(/\s+[,\.]/);
  if (m && m.index != null) {
    const idx = m.index;
    const excerpt = text.slice(Math.max(0, idx - 25), idx + 25);
    const replacement = excerpt.replace(/\s+([,\.])/g, "$1");
    found.push({
      message: "Espace(s) avant ponctuation détecté(s) (typo FR).",
      excerpt,
      replacement,
    });
  }

  // 3) Parenthèses "( " ou " )"
  const m2 = text.match(/\(\s+|\s+\)/);
  if (m2 && m2.index != null) {
    const idx = m2.index;
    const excerpt = text.slice(Math.max(0, idx - 25), idx + 25);
    const replacement = excerpt.replace(/\(\s+/g, "(").replace(/\s+\)/g, ")");
    found.push({
      message: "Espace incorrect près d’une parenthèse détecté.",
      excerpt,
      replacement,
    });
  }

  return found;
}

// Convention: on garde l'alerte "guillemets simples" si c'est un vrai string literal.
// (Mais on ne tente pas de corriger automatiquement : report only.)
function hasSingleQuoteInRawStringLiteral(node) {
  const raw = node.getText();
  return raw.startsWith("'") || raw.endsWith("'");
}

function localAuditConservative(cityObj) {
  const issues = [];

  // A) Duplicate top-level keys
  const dupes = findDuplicateTopLevelKeys(cityObj);
  for (const d of dupes) {
    addIssue(issues, {
      severity: "high",
      category: "consistency",
      path: d.key,
      message: `Duplicate top-level key "${d.key}" (${d.count} occurrences).`,
      recommendation: "Supprimer la clé en double (risque de comportement inattendu).",
    });
  }

  // B) StringLiteral audits (texte brut ou HTML encodé)
  const stringLits = cityObj.getDescendantsOfKind(SyntaxKind.StringLiteral);
  for (const lit of stringLits) {
    const text = lit.getLiteralText();
    const parentProp = lit.getFirstAncestorByKind(SyntaxKind.PropertyAssignment);
    const propName = parentProp ? parentProp.getName() : "unknown";

    // 1) micro-typo
    for (const f of scanTextSimple(text)) {
      addIssue(issues, {
        severity: "medium",
        category: "style",
        path: propName,
        message: f.message,
        excerpt: f.excerpt,
        replacement: f.replacement,
        recommendation: "Nettoyage typographique (rendu plus premium).",
      });
    }

    // 2) retours ligne : autorisés pour champs HTML-ish
    if (!isHtmlishField(propName) && text.includes("\n")) {
      addIssue(issues, {
        severity: "high",
        category: "consistency",
        path: propName,
        message: "Retour à la ligne détecté dans un champ non-HTML (risque format / rendu).",
        excerpt: text.slice(0, 160).replace(/\s+/g, " "),
        replacement: "Remplacer les retours ligne par des espaces (ou basculer en champ HTML si prévu).",
        recommendation: "Éviter \\n dans les champs texte brut.",
      });
    }

    // 3) guillemets simples sur le literal
    if (hasSingleQuoteInRawStringLiteral(lit)) {
      addIssue(issues, {
        severity: "high",
        category: "consistency",
        path: propName,
        message: "String avec guillemets simples détectée (préférence: guillemets doubles).",
        excerpt: lit.getText().slice(0, 160),
        replacement: "Convertir en guillemets doubles.",
        recommendation: "Uniformiser pour faciliter les diffs.",
      });
    }
  }

  // C) Template strings/backticks : on ne flag QUE si c’est un template literal
  //     sur un champ non HTML-ish (ex: customDescription en `...`).
  const tmplLits = cityObj.getDescendantsOfKind(SyntaxKind.NoSubstitutionTemplateLiteral);
  for (const lit of tmplLits) {
    const parentProp = lit.getFirstAncestorByKind(SyntaxKind.PropertyAssignment);
    const propName = parentProp ? parentProp.getName() : "unknown";

    if (isHtmlishField(propName)) continue;

    addIssue(issues, {
      severity: "high",
      category: "consistency",
      path: propName,
      message: "Template literal/backticks détectés dans un champ non-HTML (risque conventions).",
      excerpt: lit.getText().slice(0, 160).replace(/\s+/g, " "),
      replacement: "Remplacer par une string en guillemets doubles.",
      recommendation: "Réserver les backticks aux champs HTML multi-lignes.",
    });
  }

  // D) TemplateExpression (`...${}...`) : on signale (non patchable automatiquement)
  const tmplExpr = cityObj.getDescendantsOfKind(SyntaxKind.TemplateExpression);
  for (const node of tmplExpr) {
    const parentProp = node.getFirstAncestorByKind(SyntaxKind.PropertyAssignment);
    const propName = parentProp ? parentProp.getName() : "unknown";

    // Si tu utilises réellement ${} dans data, c'est souvent un accident pour du contenu statique.
    // On signale, même dans HTML, parce que ça peut casser la build si c'est non voulu.
    addIssue(issues, {
      severity: "high",
      category: "consistency",
      path: propName,
      message: "TemplateExpression (`...${}...`) détectée (contenu potentiellement non statique / fragile).",
      excerpt: node.getText().slice(0, 180).replace(/\s+/g, " "),
      replacement: "",
      recommendation: "Vérifier si ${...} est intentionnel. Sinon, convertir en texte statique.",
    });
  }

  return issues;
}

/* =============================================================================
   LLM AUDIT (BATCH) — PATCHES setField uniquement
============================================================================= */
function buildPatchSchema() {
  return {
    name: "CityPatchSet",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        patches: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              severity: { type: "string", enum: ["high", "medium", "low"] },
              category: {
                type: "string",
                enum: ["orthographe", "style", "seo", "legal", "consistency", "factual_suspect"],
              },
              path: { type: "string" },
              expected: { type: "string" },
              value: { type: "string" },
              reason: { type: "string" },
            },
            required: ["severity", "category", "path", "expected", "value", "reason"],
          },
        },
      },
      required: ["patches"],
    },
  };
}

function buildResponsesBody({ model, fileRel, fileContent, rulesText }) {
  const schema = buildPatchSchema();

  const system = `
Tu es relecteur-correcteur + auditeur qualité SEO/conversion pour des pages locales (Klinova) stockées dans un fichier TypeScript (type City).

Objectif : proposer des CORRECTIONS SÛRES sous forme de PATCHES "setField" (champ entier).
Interdiction : ne propose JAMAIS de remplacement partiel (substring) et ne réécris pas tout.

Principe central (anti-travers) :
- Tu ne proposes un patch QUE s'il y a une erreur claire, une incohérence, une faute, une répétition manifeste, un problème de typographie, ou un risque évident (SEO/qualité).
- Si c'est une préférence de style : PAS DE PATCH.

Ce que tu n'as PAS le droit d'introduire :
- Aucun nouveau fait local, quartier, lieu, chiffre, promesse.
- Aucun ajout de nuance juridique ("selon conditions", "sous réserve", etc.) sauf si le texte actuel est manifestement illégal/trompeur et que la correction est MINIMALE.
- Aucun changement de sens.

Règles de sortie :
1) Tu lis le TS fourni.
2) Pour chaque correction, tu produis un objet patch :
   - path : ex "customDescription" ou "services[2].uniqueIntro" ou "faq[0].answer"
   - expected : la VALEUR ACTUELLE EXACTE (contenu du champ, sans guillemets TS)
   - value : la nouvelle valeur complète (string), corrigée
   - reason : une phrase courte
3) Si tu n’es pas certain à 100% de expected : N’ÉMETS PAS de patch.
4) Tu ne touches qu’aux champs texte (strings). N’édite pas la structure TS, ni les clés, ni l’ordre.
5) Ne casse pas le HTML : si tu touches un champ HTML, conserve les balises existantes et corrige minimalement.

Cadre "conservative edits" :
- Correction minimale : corriger l’erreur, ne pas paraphraser.
- Longueur : +/- 10% max.
- 1 patch max par champ.
- Si plusieurs micro-erreurs dans un même champ : fais UN patch global uniquement si tu es sûr du expected.

Format :
- Retourne UNIQUEMENT un JSON object conforme au schema (pas de texte, pas de markdown).
- Si aucun patch sûr : {"patches": []}
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
    temperature: 0,
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
   REPORTING
============================================================================= */
function normalizeIssueForReport(it) {
  return {
    severity: it.severity,
    category: it.category ?? "consistency",
    path: it.path,
    message: it.message,
    excerpt: it.excerpt ?? "",
    replacement: it.replacement ?? "",
    recommendation: it.recommendation ?? "",
  };
}

function normalizePatchForReport(p) {
  const severity = p?.severity ?? "low";
  const category = p?.category ?? "consistency";
  const path = p?.path ?? "";

  const isPatch =
    typeof p?.expected === "string" &&
    typeof p?.value === "string" &&
    typeof p?.reason === "string";

  return {
    severity,
    category,
    path,
    expected: isPatch ? p.expected : null,
    value: isPatch ? p.value : null,
    reason: isPatch ? p.reason : null,
    _kind: isPatch ? "patch" : "unknown",
  };
}

function toMarkdown(report) {
  let md = `# Audit City — Klinova\n\n`;
  md += `Généré : ${report.generatedAt}\n`;
  md += `Total fichiers : ${report.files.length}\n\n`;

  for (const f of report.files) {
    md += `## ${f.slug} — ${f.file}\n\n`;

    const local = (f.localIssues || []).map(normalizeIssueForReport);
    const patches = (f.gptPatches || []).map(normalizePatchForReport).filter((x) => x._kind === "patch");

    if (!local.length && !patches.length) {
      md += `✅ Aucun problème détecté.\n\n`;
      continue;
    }

    if (local.length) {
      md += `### Local issues\n\n`;
      for (const it of local) {
        md += `- **${String(it.severity).toUpperCase()}** — ${it.category} — \`${it.path}\`\n`;
        md += `  - ${it.message}\n`;
        if (it.replacement) md += `  - Remplacement: \`${String(it.replacement).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
        if (it.recommendation) md += `  - Reco: ${it.recommendation}\n`;
        if (it.excerpt) md += `  - Extrait: \`${String(it.excerpt).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
      }
      md += `\n`;
    }

    if (patches.length) {
      md += `### GPT patches (setField)\n\n`;
      for (const p of patches) {
        md += `- **${String(p.severity).toUpperCase()}** — ${p.category} — \`${p.path}\`\n`;
        md += `  - Reason: ${p.reason}\n`;
        md += `  - Expected: \`${String(p.expected).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
        md += `  - Value: \`${String(p.value).replace(/\s+/g, " ").slice(0, 220)}\`\n`;
      }
      md += `\n`;
    }
  }
  return md;
}

function toSummaryMarkdown(report) {
  const rows = [];
  const allowed = new Set(["orthographe", "style", "seo", "legal", "factual_suspect", "consistency"]);
  const sevRank = { high: 0, medium: 1, low: 2 };

  for (const f of report.files) {
    for (const p of f.gptPatches || []) {
      const pp = normalizePatchForReport(p);
      if (pp._kind !== "patch") continue;
      if ((pp.severity === "high" || pp.severity === "medium") && allowed.has(pp.category)) {
        rows.push({
          slug: f.slug,
          severity: pp.severity,
          category: pp.category,
          path: pp.path,
          reason: pp.reason || "",
        });
      }
    }
    for (const it of f.localIssues || []) {
      const n = normalizeIssueForReport(it);
      if ((n.severity === "high" || n.severity === "medium") && allowed.has(n.category)) {
        rows.push({
          slug: f.slug,
          severity: n.severity,
          category: n.category,
          path: n.path,
          reason: n.message || "",
        });
      }
    }
  }

  rows.sort((a, b) => (sevRank[a.severity] ?? 9) - (sevRank[b.severity] ?? 9) || a.slug.localeCompare(b.slug));

  let md = `# Audit — Synthèse (HIGH / MEDIUM)\n\n`;
  md += `Généré : ${report.generatedAt}\n`;
  md += `Total items HIGH/MEDIUM : ${rows.length}\n\n`;

  if (!rows.length) {
    md += `✅ Aucun problème HIGH/MEDIUM.\n`;
    return md;
  }

  for (const r of rows) {
    md += `- **${r.severity.toUpperCase()}** — ${r.slug} — ${r.category} — \`${r.path}\`\n`;
    md += `  - ${r.reason}\n`;
  }

  md += `\n`;
  return md;
}

/* =============================================================================
   APPLY SUGGESTED (SAFE) — setField UNIQUEMENT
   - expected est recalculé depuis TS au moment du collect
   - drop si path non résoluble en string / template literal simple
============================================================================= */
function isUsableString(s) {
  if (s == null) return false;
  const t = String(s);
  if (!t.trim()) return false;
  if (t.length > 50000) return false;
  return true;
}

function isPatchActionable(p) {
  if (!p) return false;
  // Tu peux ajuster: pour l’auto-apply je limite aux high/medium
  if (!(p.severity === "high" || p.severity === "medium")) return false;

  const catOk = new Set(["orthographe", "style", "seo", "legal", "consistency", "factual_suspect"]);
  if (!catOk.has(p.category)) return false;

  if (!isUsableString(p.path)) return false;
  if (!isUsableString(p.value)) return false;
  if (!isUsableString(p.reason)) return false;

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

    for (const raw of f.gptPatches ?? []) {
      const p = normalizePatchForReport(raw);
      if (p._kind !== "patch") continue;
      if (!isPatchActionable(p)) continue;

      if (!cityObj) continue;

      const expectedFromTs = getTextAtPath(cityObj, p.path);
      if (!isUsableString(expectedFromTs)) continue;

      // value est fourni par le modèle. expected est remplacé par expectedFromTs (sûreté).
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

  // ✅ ton correctif : default = src/data/cities
  const citiesDirRaw = cfg.citiesDir || "src/data/cities";
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

  // ✅ ton correctif : default = src/data/cities
  const citiesDirRaw = cfg.citiesDir || "src/data/cities";
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

  if (!["completed", "expired", "failed", "cancelled"].includes(batch.status)) {
    console.log("[info] not ready yet. Re-run collect when status is completed/expired/failed/cancelled.");
    return;
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

  // Map fileId -> patches[]
  const gptPatchesByFileId = new Map();

  for (const line of outputLines) {
    const customId = line?.custom_id;
    const fileId = String(customId || "").replace(/^audit__/, "");
    const respBody = line?.response?.body;

    const outputText = extractOutputTextFromResponsesBody(respBody);
    if (!outputText) {
      gptPatchesByFileId.set(fileId, []);
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(outputText);
    } catch {
      gptPatchesByFileId.set(fileId, [
        {
          severity: "high",
          category: "consistency",
          path: "api",
          expected: "",
          value: "",
          reason: "Model returned non-JSON output (should be json_schema).",
        },
      ]);
      continue;
    }

    const patches = Array.isArray(parsed?.patches) ? parsed.patches : [];
    gptPatchesByFileId.set(fileId, patches);
  }

  for (const line of errorLines) {
    const customId = line.custom_id;
    const fileId = String(customId || "").replace(/^audit__/, "");

    const err = line?.error ?? line?.response?.body?.error ?? line?.response?.error ?? {};

    gptPatchesByFileId.set(fileId, [
      {
        severity: "high",
        category: "consistency",
        path: "api",
        expected: "",
        value: "",
        reason: `Batch request errored: ${err.code || err.type || "unknown"} — ${err.message || "no message"}`,
      },
    ]);
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
    mode: "klinova-city-audit-patches",
    batch: {
      id: batch.id,
      status: batch.status,
      output_file_id: batch.output_file_id || null,
      error_file_id: batch.error_file_id || null,
      endpoint: batch.endpoint,
    },
    files: [],
  };

  for (const fp of files) {
    const fileRel = path.relative(ROOT, fp).replace(/\\/g, "/");
    const fileId = path.basename(fp, ".ts");
    let displaySlug = fileId;

    let localIssues = [];
    let cityObj = null;

    try {
      const sf = project.addSourceFileAtPath(fp);
      cityObj = extractCityObject(sf);

      if (!cityObj) {
        localIssues = [
          {
            severity: "high",
            category: "consistency",
            path: "city",
            message: "Impossible de parser l'objet city (ts-morph).",
            excerpt: "",
            replacement: "",
            recommendation: "Vérifier la structure const city: City = {...}.",
          },
        ];
      } else {
        const slugText = getTextAtPath(cityObj, "slug");
        if (slugText) displaySlug = slugText;
        localIssues = localAuditConservative(cityObj);
      }
    } catch (e) {
      localIssues = [
        {
          severity: "high",
          category: "consistency",
          path: "file",
          message: `Erreur parsing local: ${String(e?.message || e)}`,
          excerpt: "",
          replacement: "",
          recommendation: "Corriger le TS pour permettre l'audit.",
        },
      ];
    }

    const rawPatches = gptPatchesByFileId.get(fileId) || [];
    const gptPatches = [];

    for (const p of rawPatches) {
      const pp = normalizePatchForReport(p);
      if (pp._kind !== "patch") continue;

      const expectedFromTs = cityObj ? getTextAtPath(cityObj, pp.path) : null;

      const out = {
        ...pp,
        _expectedFromTs: expectedFromTs ?? "",
      };

      if (expectedFromTs && pp.expected && String(pp.expected) !== String(expectedFromTs)) {
        out._note = "GPT expected != TS value (expected re-sync in apply suggested).";
      }

      gptPatches.push(out);
    }

    report.files.push({
      file: fileRel,
      fileId,
      slug: displaySlug,
      localIssues,
      gptPatches,
    });

    console.log(`[ok] ${displaySlug} (${fileId}) -> local=${localIssues.length}, gptPatches=${gptPatches.length}`);
  }

  writeText(OUT_REPORT_JSON, JSON.stringify(report, null, 2));
  writeText(OUT_REPORT_MD, toMarkdown(report));
  writeText(OUT_SUMMARY_MD, toSummaryMarkdown(report));

  const applySuggested = buildSuggestedApply(report);
  writeText(OUT_APPLY_SUGGESTED, JSON.stringify(applySuggested, null, 2));

  console.log("[done] Wrote", OUT_APPLY_SUGGESTED);
  console.log("[done] Wrote", OUT_REPORT_JSON);
  console.log("[done] Wrote", OUT_REPORT_MD);
  console.log("[done] Wrote", OUT_SUMMARY_MD);
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
