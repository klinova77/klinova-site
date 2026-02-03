// scripts/strong-tags-batches-klinova.mjs
// ----------------------------------------------------------------------------
// 1) SUBMIT : envoie le job "strong hybrid" en batch (selon scripts/strong-tags-klinova.json)
//    node scripts/strong-tags-batches-klinova.mjs submit
//
// 2) COLLECT : récupère les résultats du batch (quand le statut est "completed")
//    node scripts/strong-tags-batches-klinova.mjs collect --batch batch_xxx
//
// IMPORTANT (Klinova):
// - On n'édite QUE des champs autorisés (ci-dessous)
// - On modifie UNIQUEMENT <strong>...</strong>, aucun autre caractère, aucune autre balise.
//
// Champs autorisés (uniquement) :
// - hubIntro
// - faq[i].answer
// - citySpecificChallenges[i]
// - services[i].uniqueIntro
// - services[i].uniqueDeepDive (max 1 <strong> par section <h3>)
// - services[i].specificChallenges[j]
// - services[i].faqAdditions[j].answer
//
// Règles clés :
// - hubIntro : max 1 <strong> par <li> + hors <li> max 2 pairs
// - faq[].answer & services[].faqAdditions[].answer : EXACTEMENT 1 <strong> au début du 1er <p>
// - citySpecificChallenges[i] : max 1 <strong>
// - services[i].specificChallenges[j] : max 1 <strong>
// - services[i].uniqueIntro : max 2 <strong>
// - services[i].uniqueDeepDive : max 1 <strong> par bloc <h3>
//
// ----------------------------------------------------------------------------

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

function safeJoinUnderRoot(p) {
  return path.isAbsolute(p) ? p : path.join(ROOT, p);
}

const DEFAULT_CONFIG = path.join(ROOT, "scripts", "strong-tags-klinova.json");
const CONFIG_PATH = safeJoinUnderRoot(getArgValue("--config") || DEFAULT_CONFIG);

const TS_CONFIG = path.join(ROOT, "tsconfig.json");

const OUT_DIR = path.join(ROOT, "scripts", ".strong_out_klinova");
const OUT_BATCH_META = path.join(OUT_DIR, "batch-meta.json");
const OUT_INPUT_JSONL = path.join(OUT_DIR, "batch-input.jsonl");
const OUT_OUTPUT_JSONL = path.join(OUT_DIR, "batch-output.jsonl");
const OUT_ERROR_JSONL = path.join(OUT_DIR, "batch-error.jsonl");

const OUT_REPORT_JSON = path.join(ROOT, "strong-report.klinova.json");
const OUT_REPORT_MD = path.join(ROOT, "strong-report.klinova.md");
const OUT_APPLY_SUGGESTED = path.join(ROOT, "strong-apply.klinova.suggested.json");

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
function parseJsonl(text) {
  const out = [];
  for (const line of String(text || "").split("\n")) {
    const s = line.trim();
    if (!s) continue;
    out.push(JSON.parse(s));
  }
  return out;
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
function uniqLowerTrim(arr) {
  const seen = new Set();
  const out = [];
  for (const v of arr || []) {
    const s = String(v ?? "").trim();
    if (!s) continue;
    const k = s.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(s);
  }
  return out;
}

/* =============================================================================
   TS-MORPH READ
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
 * Supports examples (Klinova):
 * - "hubIntro"
 * - "faq[2].answer"
 * - "citySpecificChallenges[1]"
 * - "services[0].uniqueIntro"
 * - "services[3].uniqueDeepDive"
 * - "services[4].specificChallenges[2]"
 * - "services[4].faqAdditions[1].answer"
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

function getArrayAtPath(objLit, basePath) {
  const tokens = parsePathTokens(basePath);
  let cur = objLit;

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
   STRONG / HYBRID VALIDATION
============================================================================= */
function stripStrongTags(s) {
  return String(s ?? "").replace(/<\/?strong>/g, "");
}

// Strict: ONLY canonical tags <strong> and </strong> (no attrs, no spaces, no variants)
function hasOnlyPlainStrongTags(s) {
  const t = String(s ?? "");

  // Reject any opening tag that's not exactly "<strong>"
  // - catches: <strong >, <strong/>, <strong class="x">, <strong\n>, etc.
  if (/<strong(?!>)/i.test(t)) return false;

  // Reject any closing tag that's not exactly "</strong>"
  if (/<\/strong(?!>)/i.test(t)) return false;

  // Reject spaced variants explicitly (extra safety)
  if (/<\s+strong>/i.test(t)) return false;
  if (/<strong\s+>/i.test(t)) return false;
  if (/<\/\s+strong>/i.test(t)) return false;
  if (/<\/strong\s+>/i.test(t)) return false;

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

function normalizeForCompare(s) {
  return String(s ?? "")
    .toLowerCase()
    .replace(/&nbsp;|\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function decodeNbsp(s) {
  return String(s ?? "").replace(/&nbsp;|\u00A0/g, " ");
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

/**
 * Champs autorisés (uniquement)
 */
function isAllowedStrongPathStrict(pathStr) {
  const p = String(pathStr ?? "").trim();

  if (p === "hubIntro") return true;

  if (/^faq\[\d+\]\.answer$/.test(p)) return true;
  if (/^citySpecificChallenges\[\d+\]$/.test(p)) return true;

  if (/^services\[\d+\]\.uniqueIntro$/.test(p)) return true;
  if (/^services\[\d+\]\.uniqueDeepDive$/.test(p)) return true;

  if (/^services\[\d+\]\.specificChallenges\[\d+\]$/.test(p)) return true;
  if (/^services\[\d+\]\.faqAdditions\[\d+\]\.answer$/.test(p)) return true;

  return false;
}

/**
 * Plafonds (pairs <strong>) par champ
 * hubIntro et uniqueDeepDive sont gérés séparément
 */
function maxPairsForPath(pathStr) {
  const p = String(pathStr ?? "");

  // hubIntro : per-li validation
  if (p === "hubIntro") return 999;

  // FAQ answers (ville + services) : EXACTEMENT 1 (et au début)
  if (/^faq\[\d+\]\.answer$/.test(p)) return 1;
  if (/^services\[\d+\]\.faqAdditions\[\d+\]\.answer$/.test(p)) return 1;

  // Challenges : max 1 par item
  if (/^citySpecificChallenges\[\d+\]$/.test(p)) return 1;
  if (/^services\[\d+\]\.specificChallenges\[\d+\]$/.test(p)) return 1;

  // uniqueIntro
  if (/^services\[\d+\]\.uniqueIntro$/.test(p)) return 2;

  // uniqueDeepDive : per-h3 validation
  if (/^services\[\d+\]\.uniqueDeepDive$/.test(p)) return 999;

  return 2;
}

/**
 * Word limits inside <strong>
 */
function strongWordLimitsForPath(pathStr) {
  // Tu peux spécialiser si besoin, mais on garde volontairement simple
  const p = String(pathStr ?? "");
  if (p === "hubIntro") return { min: 2, max: 10 };
  if (/^faq\[\d+\]\.answer$/.test(p)) return { min: 2, max: 10 };
  if (/^services\[\d+\]\.faqAdditions\[\d+\]\.answer$/.test(p)) return { min: 2, max: 10 };
  if (/^services\[\d+\]\.uniqueIntro$/.test(p)) return { min: 2, max: 10 };
  if (/^services\[\d+\]\.uniqueDeepDive$/.test(p)) return { min: 2, max: 10 };
  if (/^citySpecificChallenges\[\d+\]$/.test(p)) return { min: 2, max: 10 };
  if (/^services\[\d+\]\.specificChallenges\[\d+\]$/.test(p)) return { min: 2, max: 10 };
  return { min: 2, max: 10 };
}

function validateStrongWordLimits(pathStr, html) {
  if (!hasOnlyPlainStrongTags(html)) return false;

  const lim = strongWordLimitsForPath(pathStr);
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

/**
 * Forbidden strong segments — built-in list (Klinova)
 * (Tu peux compléter via scripts/strong-tags-klinova.json : forbiddenStrong)
 */
const FORBIDDEN_STRONG_KLINOVA = [
  // === Prix / gratuité / promos
  "devis gratuit",
  "devis offerts",
  "déplacement gratuit",
  "prix",
  "tarif",
  "à partir de",
  "offre",
  "promotion",
  "remise",
  "réduction",
  "%",

  // === Délais / urgence / disponibilité (promesses)
  "sous 24h",
  "sous 48h",
  "sous 72h",
  "24h",
  "48h",
  "72h",
  "le jour même",
  "intervention rapide",
  "en urgence",
  "7j/7",
  "week-end",
  "dimanche",
  "immédiat",
  "dans la journée",
  "sans délai",

  // === Garanties / engagement de résultat
  "garantie",
  "satisfait ou remboursé",
  "résultat garanti",
  "100%",
  "zéro trace",
  "sans trace",
  "comme neuf",

  // === Claims marketing
  "meilleur",
  "n°1",
  "numéro 1",
  "top",
  "leader",
  "expert",
  "spécialiste",
  "professionnel",
  "haut de gamme",
  "premium",

  // === Réglementaire / conformité / certifications
  "conforme",
  "conformité",
  "norme",
  "normes",
  "réglementaire",
  "certifié",
  "certification",
  "attestation",
  "assurance",
  "rc pro",
  "agréé",

  // === Sur-promesses sensibles
  "désinfectant",
  "élimine",
  "élimination",
  "tue",
  "éradique",

  // === Paiement / conditions
  "paiement",
  "acompte",
  "facture",
  "tva",
  "ht",
  "ttc",
];

function validateForbiddenStrongSegments(html, forbiddenList = []) {
  const forbidden = (forbiddenList || []).map(normalizeForCompare).filter(Boolean);
  if (!forbidden.length) return true;

  for (const seg of getStrongSegments(html)) {
    const ns = normalizeForCompare(seg);
    for (const bad of forbidden) {
      if (bad && ns.includes(bad)) return false;
    }
  }
  return true;
}

/**
 * hubIntro : max 1 <strong> par <li> + hors <li> max 2 pairs
 */
function validateHubIntroPerLi(hubIntroHtml) {
  const s = String(hubIntroHtml ?? "");
  if (!s) return true;

  const liRe = /<li>([\s\S]*?)<\/li>/g;
  let m;

  while ((m = liRe.exec(s))) {
    const liBlock = m[0];
    if (countStrongPairs(liBlock) > 1) return false;
  }

  const withoutLi = s.replace(liRe, "");
  if (countStrongPairs(withoutLi) > 2) return false;

  return true;
}

/**
 * faq*.answer & faqAdditions*.answer :
 * - EXACTEMENT 1 <strong>
 * - placé au début du premier <p>
 */
function validateFaqExactlyOneStrongAtBeginning(answerHtml) {
  const s = String(answerHtml ?? "").trim();
  if (!s) return false;

  if (countStrongPairs(s) !== 1) return false;
  if (!/^<p>\s*<strong>/i.test(s)) return false;

  const idxClose = s.indexOf("</strong>");
  if (idxClose === -1) return false;

  return true;
}

/**
 * uniqueDeepDive : max 1 <strong> par section <h3>
 * (la portion avant le 1er <h3> compte aussi comme un bloc, cap=1)
 */
function validatePerH3Max1(html) {
  const s = String(html ?? "");
  const parts = s.split(/(?=<h3>)/g);
  for (const part of parts) {
    if (!part.trim()) continue;
    if (countStrongPairs(part) > 1) return false;
  }
  return true;
}
function getMaxPairsInAnyH3(html) {
  const s = String(html ?? "");
  const parts = s.split(/(?=<h3>)/g);
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

// substring helper: replace exactly one occurrence
function replaceOnce(haystack, needle, replacement) {
  const idx = haystack.indexOf(needle);
  if (idx === -1) return { ok: false, out: haystack, count: 0 };
  const idx2 = haystack.indexOf(needle, idx + needle.length);
  if (idx2 !== -1) return { ok: false, out: haystack, count: 2 };
  const out = haystack.slice(0, idx) + replacement + haystack.slice(idx + needle.length);
  return { ok: true, out, count: 1 };
}

function validateFieldByRules(pathStr, html, forbiddenList) {
  if (!hasOnlyPlainStrongTags(html)) return { ok: false, why: "non_plain_strong" };
  if (hasAdjacentStrong(html)) return { ok: false, why: "adjacent_strong" };

  if (pathStr === "hubIntro") {
    if (!validateHubIntroPerLi(html)) return { ok: false, why: "hubIntro_li_cap" };
  } else if (/^services\[\d+\]\.uniqueDeepDive$/.test(pathStr)) {
    if (!validatePerH3Max1(html)) return { ok: false, why: "uniqueDeepDive_over_h3_cap" };
  } else if (
    /^faq\[\d+\]\.answer$/.test(pathStr) ||
    /^services\[\d+\]\.faqAdditions\[\d+\]\.answer$/.test(pathStr)
  ) {
    if (!validateFaqExactlyOneStrongAtBeginning(html))
      return { ok: false, why: "faq_exactly_one_strong_beginning" };
  } else {
    const pairs = countStrongPairs(html);
    const cap = maxPairsForPath(pathStr);
    if (pairs > cap) return { ok: false, why: `pairs_over_cap(${pairs}>${cap})` };
  }

  if (!validateStrongWordLimits(pathStr, html)) return { ok: false, why: "word_limits" };
  if (!validateForbiddenStrongSegments(html, forbiddenList)) return { ok: false, why: "forbidden_strong" };

  return { ok: true };
}

function validateHybridPatch({ pathStr, expectedFromTs, patch, forbiddenList }) {
  if (!isAllowedStrongPathStrict(pathStr)) return { ok: false, why: "path_not_allowed" };

  const op = String(patch?.op || "").trim();
  const expected = String(patch?.expected ?? "");
  const value = String(patch?.value ?? "");
  const excerpt = String(patch?.excerpt ?? "");
  const replacement = String(patch?.replacement ?? "");

  // expected must match TS exactly
  if (expected !== expectedFromTs) return { ok: false, why: "expected_mismatch" };

  if (op === "setField") {
    if (!value) return { ok: false, why: "empty_value" };
    if (excerpt || replacement) return { ok: false, why: "setfield_has_excerpt" };
    if (!isStrongOnlyEdit(expectedFromTs, value)) return { ok: false, why: "not_strong_only" };

    const vr = validateFieldByRules(pathStr, value, forbiddenList);
    if (!vr.ok) return vr;

    return { ok: true, normalized: { mode: "setField", value } };
  }

  if (op === "substring") {
    if (!excerpt || !replacement) return { ok: false, why: "empty_excerpt_or_replacement" };
    if (value) return { ok: false, why: "substring_has_value" };

    // excerpt must not include strong tags
    if (excerpt.includes("<strong>") || excerpt.includes("</strong>")) {
      return { ok: false, why: "excerpt_contains_strong" };
    }

    // replacement must be excerpt with only strong insertions
    if (stripStrongTags(replacement) !== excerpt) {
      return { ok: false, why: "replacement_not_excerpt_plus_strong" };
    }
    if (!hasOnlyPlainStrongTags(replacement)) return { ok: false, why: "replacement_non_plain_strong" };

    const r = replaceOnce(expectedFromTs, excerpt, replacement);
    if (!r.ok) return { ok: false, why: r.count === 2 ? "excerpt_ambiguous_twice" : "excerpt_not_found" };

    if (stripStrongTags(r.out) !== stripStrongTags(expectedFromTs)) {
      return { ok: false, why: "substring_changed_text" };
    }

    const vr = validateFieldByRules(pathStr, r.out, forbiddenList);
    if (!vr.ok) return vr;

    return { ok: true, normalized: { mode: "substring", excerpt, replacement, computedValue: r.out } };
  }

  return { ok: false, why: "unknown_op" };
}

/* =============================================================================
   OVERLIMIT / VIOLATION SCAN (TS actuel)
============================================================================= */
const OVERCHECK_BASES = ["hubIntro", "faq", "citySpecificChallenges", "services"];

function expandPaths(cityObj, basePath) {
  const out = [];

  if (basePath === "hubIntro") {
    out.push("hubIntro");
    return out;
  }

  if (basePath === "faq") {
    const arr = getArrayAtPath(cityObj, "faq");
    if (!arr) return out;
    arr.getElements().forEach((el, idx) => {
      if (el.getKind() === SyntaxKind.ObjectLiteralExpression) out.push(`faq[${idx}].answer`);
    });
    return out;
  }

  if (basePath === "citySpecificChallenges") {
    const arr = getArrayAtPath(cityObj, "citySpecificChallenges");
    if (!arr) return out;
    arr.getElements().forEach((el, idx) => {
      if (el.getKind() === SyntaxKind.StringLiteral) out.push(`citySpecificChallenges[${idx}]`);
    });
    return out;
  }

  if (basePath === "services") {
    const arr = getArrayAtPath(cityObj, "services");
    if (!arr) return out;

    arr.getElements().forEach((el, si) => {
      if (el.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
      const serviceObj = el.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);

      out.push(`services[${si}].uniqueIntro`);
      out.push(`services[${si}].uniqueDeepDive`);

      const scArr = getArrayAtPath(serviceObj, "specificChallenges");
      if (scArr) {
        scArr.getElements().forEach((sel, sci) => {
          if (sel.getKind() === SyntaxKind.StringLiteral) out.push(`services[${si}].specificChallenges[${sci}]`);
        });
      }

      const faqArr = getArrayAtPath(serviceObj, "faqAdditions");
      if (faqArr) {
        faqArr.getElements().forEach((fel, fi) => {
          if (fel.getKind() === SyntaxKind.ObjectLiteralExpression) out.push(`services[${si}].faqAdditions[${fi}].answer`);
        });
      }
    });

    return out;
  }

  return out;
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
              value: { type: "string" }, // "" allowed
              excerpt: { type: "string" }, // "" allowed
              replacement: { type: "string" }, // "" allowed
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

function buildResponsesBodyStrongHybrid({ model, fileRel, fileContent, rulesText, forbiddenStrong = [] }) {
  const schema = buildHybridPatchSchema();

  const system = `
Tu es un correcteur "STRONG HYBRID" pour des fichiers TypeScript City (Klinova).

Objectif :
- Améliorer la scannabilité en ajoutant/retirant/déplaçant UNIQUEMENT des balises <strong>...</strong>
- SANS modifier aucun caractère du texte hors balises <strong> et </strong>

INTERDICTIONS ABSOLUES :
- Ne modifie AUCUN caractère du texte en dehors des balises <strong> et </strong>.
- Ne touche à AUCUNE autre balise HTML (<p>, <h3>, <ul>, <li>, <br>, classes...).
- N'ajoute aucun mot, ne change aucune ponctuation, aucun espace.
- Pas de nouvelles promesses, pas de réécriture.

CHAMPS AUTORISÉS (uniquement) :
- hubIntro
- faq[i].answer
- citySpecificChallenges[i]
- services[i].uniqueIntro
- services[i].uniqueDeepDive (max 1 <strong> par section <h3>)
- services[i].specificChallenges[j]
- services[i].faqAdditions[j].answer

RÈGLES / LIMITES :
- hubIntro : max 1 <strong> par <li> (évite d’en mettre dans les <p> hors liste)
- faq[i].answer : EXACTEMENT 1 <strong>, placé AU DÉBUT du premier <p>
- services[i].faqAdditions[j].answer : EXACTEMENT 1 <strong>, placé AU DÉBUT du premier <p>
- citySpecificChallenges[i] : max 1 <strong>
- services[i].specificChallenges[j] : max 1 <strong>
- services[i].uniqueIntro : max 2 <strong>
- services[i].uniqueDeepDive : max 1 <strong> par section <h3>

RÈGLES DE SCANNABILITÉ :
- Segment court (2 à 10 mots), concret, terrain, non marketing.
- Jamais deux <strong> collés, jamais une phrase entière en <strong>.
- Si un champ est déjà OK : ne propose rien.

Interdictions dans <strong> (liste fournie) :
${(forbiddenStrong || []).map((s) => `- "${s}"`).join("\n")}

HYBRID OUTPUT (JSON strict) :
Chaque patch DOIT inclure TOUTES les clés : path, op, expected, value, excerpt, replacement, reason

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

SORTIE : Retourne UNIQUEMENT un JSON { "patches": [...] }.
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
   REPORT
============================================================================= */
function toReportMarkdown(report) {
  let md = `# Strong tagger — Klinova report\n\n`;
  md += `Généré : ${report.generatedAt}\n`;
  md += `Total fichiers : ${report.files.length}\n\n`;

  for (const f of report.files) {
    md += `## ${f.slug}\n\n`;

    md += `### Violations / Overlimit (TS actuel)\n\n`;
    if (f.violations?.length) {
      for (const o of f.violations) md += `- \`${o.path}\` — ${o.details}\n`;
      md += `\n`;
    } else {
      md += `✅ Aucun problème détecté\n\n`;
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
    console.error("Missing config:", CONFIG_PATH);
    process.exit(1);
  }

  const cfg = readJson(CONFIG_PATH);

  const citiesDir = safeJoinUnderRoot(cfg.citiesDir || "src/data/cities");
  const model = cfg.model || "gpt-5.2";
  const rulesText = cfg.rulesText || "";

  const forbiddenFromCfg = Array.isArray(cfg.forbiddenStrong) ? cfg.forbiddenStrong.map(String) : [];
  const forbiddenStrong = uniqLowerTrim([...FORBIDDEN_STRONG_KLINOVA, ...forbiddenFromCfg]);

  if (!fs.existsSync(citiesDir)) {
    console.error("citiesDir not found:", citiesDir);
    process.exit(1);
  }

  let files = listTsFiles(citiesDir);

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
    const wanted = new Set(slugs);
    files = files.filter((fp) => wanted.has(path.basename(fp, ".ts")));
  }

  const maxFiles = Number(cfg.maxFiles || 0);
  if (maxFiles > 0) files = files.slice(0, maxFiles);

  console.log("[strong-klinova] citiesDir =", citiesDir);
  console.log("[strong-klinova] files =", files.length);
  if (!files.length) return;

  ensureDir(OUT_DIR);

  const lines = [];
  for (const fp of files) {
    const fileRel = path.relative(ROOT, fp).replace(/\\/g, "/");
    const fileId = path.basename(fp, ".ts");
    const fileContent = fs.readFileSync(fp, "utf8");

    const body = buildResponsesBodyStrongHybrid({
      model,
      fileRel,
      fileContent,
      rulesText,
      forbiddenStrong,
    });

    lines.push(
      JSON.stringify({
        custom_id: `strong_klinova__${fileId}`,
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
    metadata: { job: "strong-tags-hybrid-klinova", createdAt: new Date().toISOString(), model },
  });

  writeText(
    OUT_BATCH_META,
    JSON.stringify({ batch_id: batch.id, input_file_id: fileObj.id, status: batch.status, citiesDir }, null, 2)
  );

  console.log("[done] batch:", batch.id);
  console.log("Next: node scripts/strong-tags-batches-klinova.mjs collect --batch " + batch.id);
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
    console.error("Missing config:", CONFIG_PATH);
    process.exit(1);
  }

  const cfg = readJson(CONFIG_PATH);
  const citiesDir = safeJoinUnderRoot(cfg.citiesDir || "src/data/cities");

  const forbiddenFromCfg = Array.isArray(cfg.forbiddenStrong) ? cfg.forbiddenStrong.map(String) : [];
  const forbiddenStrong = uniqLowerTrim([...FORBIDDEN_STRONG_KLINOVA, ...forbiddenFromCfg]);

  if (!fs.existsSync(citiesDir)) {
    console.error("citiesDir not found:", citiesDir);
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
  console.log("[strong-klinova] status:", batch.status);

  if (!["completed", "expired", "failed", "cancelled"].includes(batch.status)) {
    console.log("[strong-klinova] not ready");
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
    const fileId = String(customId || "").replace(/^strong_klinova__/, "");
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
    const fileId = String(line?.custom_id || "").replace(/^strong_klinova__/, "");
    patchesByFileId.set(fileId, []);
  }

  // Re-select files as submit
  let files = listTsFiles(citiesDir);

  const slugsDirect = Array.isArray(cfg.slugs) ? cfg.slugs.map(String) : [];
  let slugsFromFile = [];
  if (cfg.slugsJsonPath) {
    const p = safeJoinUnderRoot(cfg.slugsJsonPath);
    if (fs.existsSync(p)) slugsFromFile = normalizeSlugsList(readJson(p));
  }
  const slugs = slugsFromFile.length ? slugsFromFile : slugsDirect;
  if (slugs.length) {
    const wanted = new Set(slugs);
    files = files.filter((fp) => wanted.has(path.basename(fp, ".ts")));
  }
  const maxFiles = Number(cfg.maxFiles || 0);
  if (maxFiles > 0) files = files.slice(0, maxFiles);

  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  const report = {
    generatedAt: new Date().toISOString(),
    batch: { id: batch.id, status: batch.status, output_file_id: batch.output_file_id || null },
    files: [],
  };

  const apply = {
    version: 3,
    dryRun: true,
    mode: "strong-hybrid-klinova",
    maxEditsPerFile: 50,
    edits: [],
  };

  for (const fp of files) {
    const fileRel = path.relative(ROOT, fp).replace(/\\/g, "/");
    const fileId = path.basename(fp, ".ts");
    let slug = fileId;

    let cityObj = null;

    try {
      const sf = project.getSourceFile(fp) ?? project.addSourceFileAtPath(fp);
      cityObj = extractCityObject(sf);
    } catch {
      cityObj = null;
    }

    if (!cityObj) {
      report.files.push({ file: fileRel, slug, patches: [], violations: [] });
      continue;
    }

    const slugFromTs = getStringAtPath(cityObj, "slug");
    if (slugFromTs) slug = slugFromTs;

    // 1) Scan TS actuel: violations (uniquement sur champs autorisés)
    const violations = [];
    for (const base of OVERCHECK_BASES) {
      const paths = expandPaths(cityObj, base);
      for (const p of paths) {
        if (!isAllowedStrongPathStrict(p)) continue;

        const val = getStringAtPath(cityObj, p);
        if (typeof val !== "string") continue;

        // On ne scanne que les champs qui contiennent strong OU qui sont soumis à règles strictes (FAQ)
        const needsStrict = /^faq\[\d+\]\.answer$/.test(p) || /^services\[\d+\]\.faqAdditions\[\d+\]\.answer$/.test(p);
        if (!val.includes("<strong>") && !needsStrict) continue;

        // Cas uniqueDeepDive : détail max in any block
        if (/^services\[\d+\]\.uniqueDeepDive$/.test(p) && val.includes("<strong>")) {
          if (!validatePerH3Max1(val)) {
            const maxInAny = getMaxPairsInAnyH3(val);
            violations.push({ path: p, details: `uniqueDeepDive: max pairs dans un bloc <h3> = ${maxInAny} (limit=1)` });
            continue;
          }
        }

        const vr = validateFieldByRules(p, val, forbiddenStrong);
        if (!vr.ok) {
          violations.push({ path: p, details: vr.why });
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

      const verdict = validateHybridPatch({ pathStr, expectedFromTs, patch: p, forbiddenList: forbiddenStrong });
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
        kept.push({
          op,
          path: pathStr,
          excerpt: String(p.excerpt),
          replacement: String(p.replacement),
          reason,
          _note: "",
        });
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

    report.files.push({ file: fileRel, slug, patches: kept, violations });
    console.log(`[strong-klinova] ${slug} -> kept=${kept.length}, violations=${violations.length}`);
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
    console.log("  node scripts/strong-tags-batches-klinova.mjs submit");
    console.log("  node scripts/strong-tags-batches-klinova.mjs collect --batch batch_xxx");
    console.log("  (optionnel) --config scripts/strong-tags-klinova.json");
    process.exit(1);
  }
  if (cmd === "submit") return submitBatch();
  if (cmd === "collect") return collectBatch();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
