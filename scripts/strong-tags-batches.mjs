// scripts/strong-tags-batches.mjs

// node scripts/strong-tags-batches-klinova.mjs submit
// node scripts/strong-tags-batches-klinova.mjs collect --batch batch_xxx


import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import OpenAI from "openai";
import { Project, SyntaxKind } from "ts-morph";

/* =============================================================================
   CLI
============================================================================= */
function getArgValue(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}
function hasArg(name) {
  return process.argv.includes(name);
}

/* =============================================================================
   PATHS
============================================================================= */
const ROOT = process.cwd();
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

const DEFAULT_CONFIG = path.join(ROOT, "scripts", "strong-tags.json");
const CONFIG_PATH = safeJoinUnderRoot(getArgValue("--config") || DEFAULT_CONFIG);

const OUT_DIR = path.join(ROOT, "scripts", ".strong_out");
const OUT_BATCH_META = path.join(OUT_DIR, "batch-meta.json");
const OUT_INPUT_JSONL = path.join(OUT_DIR, "batch-input.jsonl");
const OUT_OUTPUT_JSONL = path.join(OUT_DIR, "batch-output.jsonl");
const OUT_ERROR_JSONL = path.join(OUT_DIR, "batch-error.jsonl");

const OUT_REPORT_JSON = path.join(ROOT, "strong-report.json");
const OUT_REPORT_MD = path.join(ROOT, "strong-report.md");
const OUT_APPLY_SUGGESTED = path.join(ROOT, "strong-apply.suggested.json");

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
      const fp = path.join(d, ent.name);
      if (ent.isDirectory()) walk(fp);
      else if (ent.isFile() && fp.endsWith(".ts")) out.push(fp);
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
  if (!p) return p;
  return path.isAbsolute(p) ? p : path.join(ROOT, p);
}
function toPosixRel(fp) {
  return path.relative(ROOT, fp).replace(/\\/g, "/");
}
function compileMatchers(matchers) {
  // matchers: array of {type:"exact"|"regex", value:string}
  const out = [];
  for (const m of matchers || []) {
    const type = String(m?.type || "").toLowerCase();
    const value = String(m?.value || "");
    if (!value) continue;
    if (type === "exact") out.push({ kind: "exact", value });
    else if (type === "regex") out.push({ kind: "regex", re: new RegExp(value) });
  }
  return out;
}
function matchAny(pathStr, compiled) {
  for (const m of compiled) {
    if (m.kind === "exact" && pathStr === m.value) return true;
    if (m.kind === "regex" && m.re.test(pathStr)) return true;
  }
  return false;
}

/* =============================================================================
   TS-MORPH READ (generic)
============================================================================= */
function parsePathTokens(pathStr) {
  const tokens = [];
  const parts = String(pathStr || "").split(".").filter(Boolean);
  for (const part of parts) {
    const m = part.match(/^([a-zA-Z0-9_$-]+)(\[(\d+)\])?$/);
    tokens.push({
      key: m ? m[1] : part,
      index: m?.[3] != null ? Number(m[3]) : null,
    });
  }
  return tokens;
}
function getPropAssignment(objLit, key) {
  const prop = objLit.getProperty(key);
  if (!prop) return null;
  return prop.asKind(SyntaxKind.PropertyAssignment);
}
function getInitializer(pa) {
  return pa ? pa.getInitializer() : null;
}
function extractCityObject(sf) {
  const cityVar = sf.getVariableDeclaration("city");
  if (!cityVar) return null;
  return cityVar.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
}

/**
 * Read ONLY string literals at a dot/bracket path.
 * Supports:
 * - "customDescription"
 * - "faq[2].answer"
 * - "audiences.particuliers.longText"
 * - "audiences.particuliers.faq[1].answer"
 */
function getStringAtPath(cityObj, pathStr) {
  const tokens = parsePathTokens(pathStr);
  let cur = cityObj;

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!cur) return null;
    if (cur.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;

    const pa = getPropAssignment(cur, t.key);
    const init = getInitializer(pa);
    if (!init) return null;

    // array access
    if (t.index != null) {
      if (init.getKind() !== SyntaxKind.ArrayLiteralExpression) return null;
      const arr = init.asKindOrThrow(SyntaxKind.ArrayLiteralExpression);
      const el = arr.getElements()[t.index];
      if (!el) return null;

      if (i === tokens.length - 1) {
        return el.getKind() === SyntaxKind.StringLiteral ? el.getLiteralText() : null;
      }

      if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
        cur = el.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        continue;
      }
      return null;
    }

    // last token (no index)
    if (i === tokens.length - 1) {
      return init.getKind() === SyntaxKind.StringLiteral ? init.getLiteralText() : null;
    }

    // continue traversal
    if (init.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;
    cur = init.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  }

  return null;
}

function getArrayAtPath(cityObj, basePath) {
  const tokens = parsePathTokens(basePath);
  let cur = cityObj;

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!cur) return null;
    if (cur.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;
    if (t.index != null) return null;

    const pa = getPropAssignment(cur, t.key);
    const init = getInitializer(pa);
    if (!init) return null;

    if (i === tokens.length - 1) {
      if (init.getKind() !== SyntaxKind.ArrayLiteralExpression) return null;
      return init.asKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    }

    if (init.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;
    cur = init.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  }

  return null;
}

/* =============================================================================
   STRONG VALIDATION (config-driven)
============================================================================= */
function stripStrongTags(s) {
  return String(s ?? "").replace(/<\/?strong>/g, "");
}
function hasOnlyPlainStrongTags(s) {
  const t = String(s ?? "");
  if (/<strong\s+[^>]*>/i.test(t)) return false;
  if (/<\/?\s*strong\b/i.test(t) && !/<\/?strong>/.test(t)) return false;
  return true;
}
function hasAdjacentStrong(html) {
  return /<\/strong>\s*<strong>/.test(String(html ?? ""));
}
function countStrongPairs(html) {
  const t = String(html ?? "");
  const opens = (t.match(/<strong>/g) || []).length;
  const closes = (t.match(/<\/strong>/g) || []).length;
  return Math.min(opens, closes);
}
function decodeNbsp(s) {
  return String(s ?? "").replace(/&nbsp;|\u00A0/g, " ");
}
function normalizeForCompare(s) {
  return String(s ?? "")
    .toLowerCase()
    .replace(/&nbsp;|\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function getStrongSegments(html) {
  const s = String(html ?? "");
  const out = [];
  const re = /<strong>([\s\S]*?)<\/strong>/g;
  let m;
  while ((m = re.exec(s))) out.push(m[1] ?? "");
  return out;
}
function countWords(text) {
  const t = decodeNbsp(text)
    .replace(/<[^>]+>/g, "")
    .replace(/[’'"]/g, " ")
    .replace(/[^\p{L}\p{N}\s-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!t) return 0;
  return t.split(" ").filter(Boolean).length;
}
function isSingleWordStrongAllowed(segmentText) {
  const raw = decodeNbsp(segmentText).replace(/<[^>]+>/g, "").trim();
  if (!raw) return false;
  const one = raw.replace(/\s+/g, " ");
  if (one.includes(" ")) return false;

  const hasDigit = /\d/.test(one);
  const isAcronym = /^[A-Z]{2,}$/.test(one);
  const hasHyphen = one.includes("-");
  const longEnough = one.length >= 7;

  return longEnough || hasDigit || isAcronym || hasHyphen;
}

function splitLongTextByH3(longTextHtml) {
  const s = String(longTextHtml ?? "");
  return s.split(/(?=<h3>)/g);
}

function replaceOnce(haystack, needle, replacement) {
  const idx = haystack.indexOf(needle);
  if (idx === -1) return { ok: false, out: haystack, count: 0 };
  const idx2 = haystack.indexOf(needle, idx + needle.length);
  if (idx2 !== -1) return { ok: false, out: haystack, count: 2 };
  const out = haystack.slice(0, idx) + replacement + haystack.slice(idx + needle.length);
  return { ok: true, out, count: 1 };
}

/* =============================================================================
   CONFIG NORMALIZATION
============================================================================= */
function normalizeConfig(cfg) {
  const out = { ...cfg };

  out.projectName = String(cfg.projectName || "Klinova");
  out.model = String(cfg.model || "gpt-5.2");
  out.rulesText = String(cfg.rulesText || "");

  if (!cfg.citiesDir) throw new Error("Config: citiesDir is required");
  out.citiesDir = safeJoinUnderRoot(cfg.citiesDir);

  out.allowedPaths = compileMatchers(cfg.allowedPaths || []);
  out.maxPairs = compileMatchers(cfg.maxPairs || []); // entries with {type, value, max:number}
  out.wordLimits = compileMatchers(cfg.wordLimits || []); // entries with {type, value, min,max}

  out.longTextPerH3Paths = compileMatchers(cfg.longTextPerH3Paths || []);
  out.longTextMaxPairsPerH3 = Number(cfg.longTextMaxPairsPerH3 ?? 1);

  out.forbiddenStrongSegments = Array.isArray(cfg.forbiddenStrongSegments)
    ? cfg.forbiddenStrongSegments.map((s) => normalizeForCompare(s))
    : [];

  out.overcheckBases = Array.isArray(cfg.overcheckBases) ? cfg.overcheckBases : [];
  out.expandRules = Array.isArray(cfg.expandRules) ? cfg.expandRules : [];

  out.maxFiles = Number(cfg.maxFiles || 0);

  out.slugs = Array.isArray(cfg.slugs) ? cfg.slugs.map(String) : [];
  out.slugsJsonPath = cfg.slugsJsonPath ? safeJoinUnderRoot(cfg.slugsJsonPath) : "";

  out.outputDir = cfg.outputDir ? safeJoinUnderRoot(cfg.outputDir) : OUT_DIR;

  return out;
}

function getMaxPairsForPath(pathStr, cfg) {
  // cfg.maxPairs entries: {type, value, max}
  for (const m of cfg._maxPairsCompiled || []) {
    if (m.kind === "exact" && pathStr === m.value) return Number(m.max);
    if (m.kind === "regex" && m.re.test(pathStr)) return Number(m.max);
  }
  return Number(cfg.defaultMaxPairs ?? 2);
}

function getWordLimitsForPath(pathStr, cfg) {
  // cfg.wordLimits entries: {type, value, min, max}
  for (const m of cfg._wordLimitsCompiled || []) {
    if (m.kind === "exact" && pathStr === m.value) return { min: Number(m.min), max: Number(m.max) };
    if (m.kind === "regex" && m.re.test(pathStr)) return { min: Number(m.min), max: Number(m.max) };
  }
  return { min: 2, max: 10 };
}

function validateStrongWordLimits(pathStr, html, cfg) {
  if (!hasOnlyPlainStrongTags(html)) return false;
  const lim = getWordLimitsForPath(pathStr, cfg);
  for (const seg of getStrongSegments(html)) {
    const wc = countWords(seg);
    if (wc === 0) return false;
    if (wc < lim.min) {
      if (!(wc === 1 && isSingleWordStrongAllowed(seg))) return false;
    }
    if (wc > lim.max) return false;
  }
  return true;
}

function validateForbiddenStrongSegments(html, cfg) {
  if (!cfg.forbiddenStrongSegments?.length) return true;
  for (const seg of getStrongSegments(html)) {
    const ns = normalizeForCompare(seg);
    for (const bad of cfg.forbiddenStrongSegments) {
      if (ns.includes(bad)) return false;
    }
  }
  return true;
}

function isAllowedPath(pathStr, cfg) {
  return matchAny(pathStr, cfg._allowedPathsCompiled || []);
}

function isLongTextPerH3Path(pathStr, cfg) {
  return matchAny(pathStr, cfg._longTextPerH3Compiled || []);
}

function validateLongTextPerH3(longTextHtml, cfg) {
  const parts = splitLongTextByH3(longTextHtml);
  for (const part of parts) {
    if (!part.trim()) continue;
    const pairs = countStrongPairs(part);
    if (pairs > cfg.longTextMaxPairsPerH3) return false;
  }
  return true;
}
function getLongTextMaxPairsInAnyH3(longTextHtml) {
  const parts = splitLongTextByH3(longTextHtml);
  let max = 0;
  for (const part of parts) {
    if (!part.trim()) continue;
    const pairs = countStrongPairs(part);
    if (pairs > max) max = pairs;
  }
  return max;
}

function isStrongOnlyEdit(expected, value) {
  const e = String(expected ?? "");
  const v = String(value ?? "");
  if (!hasOnlyPlainStrongTags(v)) return false;
  return stripStrongTags(e) === stripStrongTags(v);
}

function validateHybridPatch({ pathStr, expectedFromTs, patch, cfg }) {
  if (!isAllowedPath(pathStr, cfg)) return { ok: false, why: "path_not_allowed" };

  const op = String(patch?.op || "").trim();
  const expected = String(patch?.expected ?? "");
  const value = String(patch?.value ?? "");
  const excerpt = String(patch?.excerpt ?? "");
  const replacement = String(patch?.replacement ?? "");

  if (expected !== expectedFromTs) return { ok: false, why: "expected_mismatch" };

  const capCheck = (html) => {
    if (!hasOnlyPlainStrongTags(html)) return { ok: false, why: "non_plain_strong" };
    if (hasAdjacentStrong(html)) return { ok: false, why: "adjacent_strong" };

    if (isLongTextPerH3Path(pathStr, cfg)) {
      if (!validateLongTextPerH3(html, cfg)) return { ok: false, why: "longtext_over_h3_cap" };
    } else {
      const pairs = countStrongPairs(html);
      const cap = getMaxPairsForPath(pathStr, cfg);
      if (pairs > cap) return { ok: false, why: `pairs_over_cap(${pairs}>${cap})` };
    }

    if (!validateStrongWordLimits(pathStr, html, cfg)) return { ok: false, why: "word_limits" };
    if (!validateForbiddenStrongSegments(html, cfg)) return { ok: false, why: "forbidden_strong" };

    return { ok: true };
  };

  if (op === "setField") {
    if (!value) return { ok: false, why: "empty_value" };
    if (excerpt || replacement) return { ok: false, why: "setfield_has_excerpt" };
    if (!isStrongOnlyEdit(expectedFromTs, value)) return { ok: false, why: "not_strong_only" };
    const cc = capCheck(value);
    if (!cc.ok) return cc;
    return { ok: true, normalized: { mode: "setField", value } };
  }

  if (op === "substring") {
    if (!excerpt || !replacement) return { ok: false, why: "empty_excerpt_or_replacement" };
    if (value) return { ok: false, why: "substring_has_value" };

    if (excerpt.includes("<strong>") || excerpt.includes("</strong>")) {
      return { ok: false, why: "excerpt_contains_strong" };
    }
    if (stripStrongTags(replacement) !== excerpt) {
      return { ok: false, why: "replacement_not_excerpt_plus_strong" };
    }
    if (!hasOnlyPlainStrongTags(replacement)) return { ok: false, why: "replacement_non_plain_strong" };

    const r = replaceOnce(expectedFromTs, excerpt, replacement);
    if (!r.ok) return { ok: false, why: r.count === 2 ? "excerpt_ambiguous_twice" : "excerpt_not_found" };

    if (stripStrongTags(r.out) !== stripStrongTags(expectedFromTs)) {
      return { ok: false, why: "substring_changed_text" };
    }

    const cc = capCheck(r.out);
    if (!cc.ok) return cc;

    return { ok: true, normalized: { mode: "substring", excerpt, replacement, computedValue: r.out } };
  }

  return { ok: false, why: "unknown_op" };
}

/* =============================================================================
   OVERLIMIT SCAN (config-driven)
============================================================================= */
function expandPathsByRule(cityObj, rule) {
  const out = [];
  const base = String(rule?.base || "").trim();
  const mode = String(rule?.mode || "").trim();

  if (!base || !mode) return out;

  if (mode === "single") {
    out.push(base);
    return out;
  }

  const arr = getArrayAtPath(cityObj, base);
  if (!arr) return out;

  if (mode === "stringArray") {
    arr.getElements().forEach((el, idx) => {
      if (el.getKind() === SyntaxKind.StringLiteral) out.push(`${base}[${idx}]`);
    });
    return out;
  }

  if (mode === "objectField") {
    const field = String(rule?.field || "").trim();
    if (!field) return out;
    arr.getElements().forEach((el, idx) => {
      if (el.getKind() === SyntaxKind.ObjectLiteralExpression) out.push(`${base}[${idx}].${field}`);
    });
    return out;
  }

  return out;
}

function isOverStrongLimit(pathStr, html, cfg) {
  if (isLongTextPerH3Path(pathStr, cfg)) return !validateLongTextPerH3(html, cfg);
  return countStrongPairs(html) > getMaxPairsForPath(pathStr, cfg);
}

/* =============================================================================
   LLM SCHEMA + PROMPT (HYBRID)
============================================================================= */
function buildHybridPatchSchema() {
  return {
    name: "StrongHybridPatchSet",
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
              path: { type: "string" },
              op: { type: "string", enum: ["setField", "substring"] },
              expected: { type: "string" },
              value: { type: "string" },
              excerpt: { type: "string" },
              replacement: { type: "string" },
              reason: { type: "string" },
            },
            required: ["path", "op", "expected", "value", "excerpt", "replacement", "reason"],
          },
        },
      },
      required: ["patches"],
    },
  };
}

function buildRulesSnippetForPrompt(cfg) {
  // Human-readable rules summary injected into system prompt
  const lines = [];
  lines.push(`Champs autorisés :`);
  for (const m of cfg.allowedPathsRaw || []) {
    lines.push(`- ${m.type}:${m.value}`);
  }

  lines.push(`\nPlafonds (pairs <strong>) :`);
  for (const m of cfg.maxPairsRaw || []) {
    lines.push(`- ${m.type}:${m.value} => max ${m.max}`);
  }
  lines.push(`- défaut => max ${Number(cfg.defaultMaxPairs ?? 2)}`);

  if (cfg.longTextPerH3PathsRaw?.length) {
    lines.push(`\nCas spécial "par <h3>" :`);
    for (const m of cfg.longTextPerH3PathsRaw) lines.push(`- ${m.type}:${m.value} => max ${cfg.longTextMaxPairsPerH3} par <h3>`);
  }

  lines.push(`\nLimites mots dans <strong> :`);
  for (const m of cfg.wordLimitsRaw || []) {
    lines.push(`- ${m.type}:${m.value} => ${m.min}-${m.max} mots`);
  }
  lines.push(`- défaut => 2-10 mots (1 mot autorisé si long/digit/acronyme/trait d’union)`);

  if (cfg.forbiddenStrongSegments?.length) {
    lines.push(`\nInterdits dans <strong> :`);
    for (const s of cfg.forbiddenStrongSegmentsRaw || []) lines.push(`- ${s}`);
  }

  return lines.join("\n");
}

function buildResponsesBodyStrongHybrid({ model, fileRel, fileContent, cfg }) {
  const schema = buildHybridPatchSchema();

  const system = `
Tu es un correcteur "STRONG HYBRID" pour des fichiers TypeScript de pages locales (${cfg.projectName}).

Objectif :
- Améliorer la scannabilité en ajoutant/retirant/déplaçant UNIQUEMENT des balises <strong>...</strong>
- SANS modifier aucun caractère du texte hors balises <strong> et </strong>

INTERDICTIONS ABSOLUES :
- Ne modifie AUCUN caractère du texte en dehors des balises <strong> et </strong>.
- Ne touche à AUCUNE autre balise HTML (<p>, <h3>, classes...).
- N'ajoute aucun mot, ne change aucune ponctuation, aucun espace.
- Pas de nouvelles promesses, pas de nouveaux faits, pas de réécriture.

RÈGLES DE SCANNABILITÉ / LIMITES :
${buildRulesSnippetForPrompt(cfg)}

HYBRID OUTPUT (JSON strict) :
Chaque patch DOIT inclure TOUTES les clés :
path, op, expected, value, excerpt, replacement, reason

Règles de remplissage :
- expected : COPIE EXACTE du champ tel qu'il est dans le TS (source ci-dessous)
- Si op="setField" :
  - value = expected avec uniquement ajout/retrait/déplacement de <strong>...</strong>
  - excerpt = "" ; replacement = ""
- Si op="substring" :
  - excerpt = extrait EXACT (8 à 14 mots) présent dans expected (sans <strong>)
  - replacement = EXACTEMENT excerpt mais avec insertion de <strong>...</strong>
  - value = ""
- 1 patch maximum par champ.
- Si tu n'es pas 100% sûr de expected (copie exacte) : ne propose PAS de patch.
- Si un champ est déjà OK : ne propose rien.

SORTIE :
Retourne UNIQUEMENT un JSON { "patches": [...] }.
`.trim();

  const user = `
Fichier: ${fileRel}

rulesText:
${cfg.rulesText}

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
   REPORT
============================================================================= */
function toReportMarkdown(report) {
  let md = `# Strong tagger — report\n\n`;
  md += `Généré : ${report.generatedAt}\n`;
  md += `Total fichiers : ${report.files.length}\n\n`;

  for (const f of report.files) {
    md += `## ${f.slug}\n\n`;

    md += `### Overlimit (TS actuel)\n\n`;
    if (f.overStrong?.length) {
      for (const o of f.overStrong) md += `- \`${o.path}\` — ${o.details}\n`;
      md += `\n`;
    } else {
      md += `✅ Aucun dépassement détecté\n\n`;
    }

    md += `### Patches proposés (kept)\n\n`;
    if (!f.patches?.length) {
      md += `✅ Aucun patch\n\n`;
      continue;
    }

    for (const p of f.patches) {
      md += `- \`${p.path}\` — op=${p.op} — ${p.reason}\n`;
      if (p.op === "setField") {
        md += `  - value: \`${String(p.value).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
      } else {
        md += `  - excerpt: \`${String(p.excerpt).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
        md += `  - replacement: \`${String(p.replacement).replace(/\s+/g, " ").slice(0, 240)}\`\n`;
      }
      if (p._note) md += `  - note: ${p._note}\n`;
    }
    md += `\n`;
  }
  return md;
}

/* =============================================================================
   SUBMIT
============================================================================= */
async function submitBatch() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY");
    process.exit(1);
  }
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error("Missing", CONFIG_PATH);
    process.exit(1);
  }

  const rawCfg = readJson(CONFIG_PATH);
  const cfg = normalizeConfig(rawCfg);

  // keep raw for prompt snippet
  cfg.allowedPathsRaw = rawCfg.allowedPaths || [];
  cfg.maxPairsRaw = rawCfg.maxPairs || [];
  cfg.wordLimitsRaw = rawCfg.wordLimits || [];
  cfg.longTextPerH3PathsRaw = rawCfg.longTextPerH3Paths || [];
  cfg.forbiddenStrongSegmentsRaw = rawCfg.forbiddenStrongSegments || [];

  cfg._allowedPathsCompiled = compileMatchers(rawCfg.allowedPaths || []);
  cfg._longTextPerH3Compiled = compileMatchers(rawCfg.longTextPerH3Paths || []);

  // compile maxPairs / wordLimits as matchers that also carry min/max
  cfg._maxPairsCompiled = (rawCfg.maxPairs || []).map((m) => {
    const type = String(m?.type || "").toLowerCase();
    const value = String(m?.value || "");
    const max = Number(m?.max);
    if (!value || !Number.isFinite(max)) return null;
    if (type === "exact") return { kind: "exact", value, max };
    if (type === "regex") return { kind: "regex", re: new RegExp(value), max };
    return null;
  }).filter(Boolean);

  cfg._wordLimitsCompiled = (rawCfg.wordLimits || []).map((m) => {
    const type = String(m?.type || "").toLowerCase();
    const value = String(m?.value || "");
    const min = Number(m?.min);
    const max = Number(m?.max);
    if (!value || !Number.isFinite(min) || !Number.isFinite(max)) return null;
    if (type === "exact") return { kind: "exact", value, min, max };
    if (type === "regex") return { kind: "regex", re: new RegExp(value), min, max };
    return null;
  }).filter(Boolean);

  if (!fs.existsSync(cfg.citiesDir)) {
    console.error("citiesDir not found:", cfg.citiesDir);
    process.exit(1);
  }

  let files = listTsFiles(cfg.citiesDir);

  // slug filtering
  let slugs = cfg.slugs;
  if (cfg.slugsJsonPath) {
    if (!fs.existsSync(cfg.slugsJsonPath)) {
      console.error("slugsJsonPath not found:", cfg.slugsJsonPath);
      process.exit(1);
    }
    const fromFile = normalizeSlugsList(readJson(cfg.slugsJsonPath));
    if (fromFile.length) slugs = fromFile;
  }
  if (slugs.length) {
    const wanted = new Set(slugs);
    files = files.filter((fp) => wanted.has(path.basename(fp, ".ts")));
  }

  if (cfg.maxFiles > 0) files = files.slice(0, cfg.maxFiles);

  console.log("[strong] config =", toPosixRel(CONFIG_PATH));
  console.log("[strong] projectName =", cfg.projectName);
  console.log("[strong] citiesDir =", cfg.citiesDir);
  console.log("[strong] files =", files.length);
  if (!files.length) return;

  ensureDir(OUT_DIR);

  const lines = [];
  for (const fp of files) {
    const fileRel = toPosixRel(fp);
    const fileId = path.basename(fp, ".ts");
    const fileContent = fs.readFileSync(fp, "utf8");

    const body = buildResponsesBodyStrongHybrid({ model: cfg.model, fileRel, fileContent, cfg });

    lines.push(
      JSON.stringify({
        custom_id: `strong__${fileId}`,
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
    metadata: { job: "strong-tags-hybrid", createdAt: new Date().toISOString(), model: cfg.model, projectName: cfg.projectName },
  });

  writeText(
    OUT_BATCH_META,
    JSON.stringify(
      { batch_id: batch.id, input_file_id: fileObj.id, status: batch.status, citiesDir: cfg.citiesDir, config: toPosixRel(CONFIG_PATH) },
      null,
      2
    )
  );

  console.log("[done] batch:", batch.id);
  console.log("Next: node scripts/strong-tags-batches.mjs collect --batch " + batch.id + " --config " + toPosixRel(CONFIG_PATH));
}

/* =============================================================================
   COLLECT
============================================================================= */
function extractOutputText(respBody) {
  if (!respBody) return null;
  if (typeof respBody.output_text === "string" && respBody.output_text.trim()) return respBody.output_text;

  const out = respBody.output;
  if (Array.isArray(out)) {
    for (const item of out) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;
      for (const c of content) {
        if (c?.type === "output_text" && typeof c.text === "string" && c.text.trim()) return c.text;
        if ((c?.type === "output_json" || c?.type === "json") && c.json) return JSON.stringify(c.json);
      }
    }
  }
  return null;
}

async function collectBatch() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY");
    process.exit(1);
  }
  if (!fs.existsSync(CONFIG_PATH)) {
    console.error("Missing", CONFIG_PATH);
    process.exit(1);
  }

  const rawCfg = readJson(CONFIG_PATH);
  const cfg = normalizeConfig(rawCfg);

  cfg.allowedPathsRaw = rawCfg.allowedPaths || [];
  cfg.maxPairsRaw = rawCfg.maxPairs || [];
  cfg.wordLimitsRaw = rawCfg.wordLimits || [];
  cfg.longTextPerH3PathsRaw = rawCfg.longTextPerH3Paths || [];
  cfg.forbiddenStrongSegmentsRaw = rawCfg.forbiddenStrongSegments || [];

  cfg._allowedPathsCompiled = compileMatchers(rawCfg.allowedPaths || []);
  cfg._longTextPerH3Compiled = compileMatchers(rawCfg.longTextPerH3Paths || []);

  cfg._maxPairsCompiled = (rawCfg.maxPairs || []).map((m) => {
    const type = String(m?.type || "").toLowerCase();
    const value = String(m?.value || "");
    const max = Number(m?.max);
    if (!value || !Number.isFinite(max)) return null;
    if (type === "exact") return { kind: "exact", value, max };
    if (type === "regex") return { kind: "regex", re: new RegExp(value), max };
    return null;
  }).filter(Boolean);

  cfg._wordLimitsCompiled = (rawCfg.wordLimits || []).map((m) => {
    const type = String(m?.type || "").toLowerCase();
    const value = String(m?.value || "");
    const min = Number(m?.min);
    const max = Number(m?.max);
    if (!value || !Number.isFinite(min) || !Number.isFinite(max)) return null;
    if (type === "exact") return { kind: "exact", value, min, max };
    if (type === "regex") return { kind: "regex", re: new RegExp(value), min, max };
    return null;
  }).filter(Boolean);

  if (!fs.existsSync(cfg.citiesDir)) {
    console.error("citiesDir not found:", cfg.citiesDir);
    process.exit(1);
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const batchId =
    getArgValue("--batch") || (fs.existsSync(OUT_BATCH_META) ? readJson(OUT_BATCH_META).batch_id : null);

  if (!batchId) {
    console.error("Missing --batch and no meta file");
    process.exit(1);
  }

  const batch = await openai.batches.retrieve(batchId);
  console.log("[strong] status:", batch.status);

  if (!["completed", "expired", "failed", "cancelled"].includes(batch.status)) {
    console.log("[strong] not ready");
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

  // Map fileId -> raw patches[]
  const patchesByFileId = new Map();

  for (const line of outputLines) {
    const customId = line?.custom_id;
    const fileId = String(customId || "").replace(/^strong__/, "");
    const respBody = line?.response?.body;
    const outputText = extractOutputText(respBody);

    if (!outputText) {
      patchesByFileId.set(fileId, []);
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(outputText);
    } catch {
      patchesByFileId.set(fileId, []);
      continue;
    }

    patchesByFileId.set(fileId, Array.isArray(parsed?.patches) ? parsed.patches : []);
  }

  for (const line of errorLines) {
    const fileId = String(line?.custom_id || "").replace(/^strong__/, "");
    patchesByFileId.set(fileId, []);
  }

  // Re-select files as submit
  let files = listTsFiles(cfg.citiesDir);

  let slugs = cfg.slugs;
  if (cfg.slugsJsonPath && fs.existsSync(cfg.slugsJsonPath)) {
    const fromFile = normalizeSlugsList(readJson(cfg.slugsJsonPath));
    if (fromFile.length) slugs = fromFile;
  }
  if (slugs.length) {
    const wanted = new Set(slugs);
    files = files.filter((fp) => wanted.has(path.basename(fp, ".ts")));
  }
  if (cfg.maxFiles > 0) files = files.slice(0, cfg.maxFiles);

  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  const report = {
    generatedAt: new Date().toISOString(),
    config: toPosixRel(CONFIG_PATH),
    batch: { id: batch.id, status: batch.status, output_file_id: batch.output_file_id || null },
    files: [],
  };

  const apply = {
    version: 3,
    dryRun: true,
    mode: "strong-hybrid",
    maxEditsPerFile: 50,
    edits: [],
  };

  for (const fp of files) {
    const fileRel = toPosixRel(fp);
    const fileId = path.basename(fp, ".ts");
    let slug = fileId;

    let cityObj = null;
    let sf = null;

    try {
      sf = project.getSourceFile(fp) ?? project.addSourceFileAtPath(fp);
      cityObj = extractCityObject(sf);
    } catch {
      cityObj = null;
    }

    if (!cityObj) {
      report.files.push({ file: fileRel, slug, patches: [], overStrong: [] });
      continue;
    }

    const slugFromTs = getStringAtPath(cityObj, "slug");
    if (slugFromTs) slug = slugFromTs;

    // 1) Scan TS actuel: overlimit strong
    const overStrong = [];
    for (const rule of cfg.expandRules) {
      const paths = expandPathsByRule(cityObj, rule);
      for (const p of paths) {
        if (!isAllowedPath(p, cfg)) continue;
        const val = getStringAtPath(cityObj, p);
        if (typeof val !== "string") continue;
        if (!val.includes("<strong>")) continue;

        if (isOverStrongLimit(p, val, cfg)) {
          if (isLongTextPerH3Path(p, cfg)) {
            const maxInAny = getLongTextMaxPairsInAnyH3(val);
            overStrong.push({ path: p, details: `max pairs dans une section <h3> = ${maxInAny} (limit = ${cfg.longTextMaxPairsPerH3})` });
          } else {
            const pairs = countStrongPairs(val);
            const limit = getMaxPairsForPath(p, cfg);
            overStrong.push({ path: p, details: `pairs=${pairs} (limit=${limit})` });
          }
        }
      }
    }

    // 2) Patches issus du batch
    const raw = patchesByFileId.get(fileId) || [];

    const seenPath = new Set();
    const kept = [];

    for (const p of raw) {
      const pathStr = String(p?.path || "").trim();
      if (!pathStr) continue;
      if (seenPath.has(pathStr)) continue;

      const expectedFromTs = getStringAtPath(cityObj, pathStr);
      if (typeof expectedFromTs !== "string") continue;

      const verdict = validateHybridPatch({ pathStr, expectedFromTs, patch: p, cfg });
      if (!verdict.ok) continue;

      seenPath.add(pathStr);

      const op = String(p.op);
      const reason = String(p?.reason || "").slice(0, 220);

      if (op === "setField") {
        kept.push({ op, path: pathStr, value: String(p.value), reason, _note: "" });

        apply.edits.push({
          file: fileRel,
          path: pathStr,
          mode: "setField",
          expected: expectedFromTs,
          value: String(p.value),
          reason: reason || "strong hybrid patch",
        });
      } else {
        kept.push({ op, path: pathStr, excerpt: String(p.excerpt), replacement: String(p.replacement), reason, _note: "" });

        apply.edits.push({
          file: fileRel,
          path: pathStr,
          mode: "substring",
          expected: expectedFromTs,
          excerpt: String(p.excerpt),
          replacement: String(p.replacement),
          reason: reason || "strong hybrid patch",
        });
      }
    }

    report.files.push({ file: fileRel, slug, patches: kept, overStrong });
    console.log(`[strong] ${slug} -> kept=${kept.length}, overStrong=${overStrong.length}`);
  }

  writeText(OUT_REPORT_JSON, JSON.stringify(report, null, 2));
  writeText(OUT_REPORT_MD, toReportMarkdown(report));
  writeText(OUT_APPLY_SUGGESTED, JSON.stringify(apply, null, 2));

  console.log("[done] wrote", OUT_REPORT_JSON);
  console.log("[done] wrote", OUT_REPORT_MD);
  console.log("[done] wrote", OUT_APPLY_SUGGESTED);
}

/* =============================================================================
   MAIN
============================================================================= */
async function main() {
  const cmd = (process.argv[2] || "").toLowerCase();
  if (!cmd || (cmd !== "submit" && cmd !== "collect")) {
    console.log("Usage:");
    console.log("  node scripts/strong-tags-batches.mjs submit --config scripts/strong-tags.klinova.json");
    console.log("  node scripts/strong-tags-batches.mjs collect --batch batch_xxx --config scripts/strong-tags.klinova.json");
    process.exit(1);
  }
  if (cmd === "submit") return submitBatch();
  if (cmd === "collect") return collectBatch();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
