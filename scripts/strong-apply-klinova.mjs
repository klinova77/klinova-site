// scripts/strong-apply-klinova.mjs
// ============================================================================
// APPLY — Strong Hybrid (Klinova City)
//
// Applique les patches générés par :
//   scripts/strong-tags-batches-klinova.mjs  ->  strong-apply.klinova.suggested.json
//
// Usage :
//   node scripts/strong-apply-klinova.mjs strong-apply.klinova.suggested.json --dry-run --verbose
//   node scripts/strong-apply-klinova.mjs strong-apply.klinova.suggested.json --write
//
// Sécurité (Klinova strong-only) :
// - Modes supportés : setField, substring
// - setField : expected optionnel (si présent => check strict sauf --ignore-expected)
// - substring : excerpt doit apparaître EXACTEMENT 1 fois dans le champ (sinon skip)
// - Ne remplace JAMAIS un array entier : il faut un index [i] dans le path (sauf hubIntro qui est une string)
// - Écriture : remplace l'initializer / l'élément par un string literal JSON ("...") (stabilise le format)
// - On NE TOUCHE qu'à des champs autorisés (whitelist Klinova) + on vérifie "strong-only":
//   stripStrong(old) == stripStrong(new) + tags strict <strong> / </strong> sans attribut
//
// MODIFS intégrées :
// - Support des strings TS en "..." ET `...` (NoSubstitutionTemplateLiteral), + concat "a" + "b"
// - Whitelist alignée : support de services[i].serviceChallenges[j] en plus de specificChallenges
// - Sécurité renforcée : blocage explicite de customDescription / heroDescription / services[].heroDescription
// ============================================================================

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import crypto from "node:crypto";
import { Project, SyntaxKind } from "ts-morph";

const ROOT = process.cwd();
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

/* =============================================================================
   IO / CLI
============================================================================= */
function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function writeText(p, s) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s, "utf8");
}
function sha1(s) {
  return crypto.createHash("sha1").update(String(s ?? ""), "utf8").digest("hex");
}
function hasFlag(name) {
  return process.argv.includes(name);
}
function getArgValue(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

/* =============================================================================
   PATH PARSING
============================================================================= */
function normalizePathForApply(p) {
  // Convert ".0" style indices to "[0]" (supports nested)
  // examples:
  //  - services.2.faqAdditions.1.answer -> services[2].faqAdditions[1].answer
  //  - citySpecificChallenges.3 -> citySpecificChallenges[3]
  return String(p || "").replace(/\.([0-9]+)(?=\.|$)/g, "[$1]");
}

function parsePathSegments(p) {
  const segs = [];
  const re = /([a-zA-Z0-9_]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(p))) {
    if (m[1]) segs.push({ kind: "prop", key: m[1] });
    else segs.push({ kind: "idx", index: Number(m[2]) });
  }
  return segs;
}

/* =============================================================================
   KLINOVA ALLOWED PATHS (WHITELIST)
============================================================================= */
function isAllowedKlinovaPath(pathStr) {
  const p = String(pathStr ?? "").trim();
  if (!p) return false;

  // explicit blocks (safety)
  if (p === "customDescription") return false;
  if (p === "heroDescription") return false;
  if (/^services\[\d+\]\.heroDescription$/.test(p)) return false;

  // allowlist
  if (p === "hubIntro") return true;

  if (/^faq\[\d+\]\.answer$/.test(p)) return true;
  if (/^citySpecificChallenges\[\d+\]$/.test(p)) return true;

  if (/^services\[\d+\]\.uniqueIntro$/.test(p)) return true;
  if (/^services\[\d+\]\.uniqueDeepDive$/.test(p)) return true;

  // ✅ aligné avec la réalité terrain : specificChallenges OU serviceChallenges
  if (/^services\[\d+\]\.(specificChallenges|serviceChallenges)\[\d+\]$/.test(p)) return true;

  if (/^services\[\d+\]\.faqAdditions\[\d+\]\.answer$/.test(p)) return true;

  // (optionnel) si un jour tu patches testimonial.text en strong-only, décommente :
  // if (p === "testimonial.text") return true;

  return false;
}

/* =============================================================================
   TS-MORPH SLOT FINDER
============================================================================= */
/**
 * Retourne un "slot" modifiable :
 * - kind: "prop" => PropertyAssignment (setInitializer)
 * - kind: "idx"  => Array element node (replaceWithText)
 *
 * On retourne aussi l'expression actuelle (expr) qui contient la valeur.
 */
function findSlotByPath(objLit, pathStr) {
  const segs = parsePathSegments(pathStr);

  let cur = objLit;
  let lastSlot = null;

  for (const s of segs) {
    if (s.kind === "prop") {
      if (cur.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;

      const pa = cur.getProperty(s.key)?.asKind(SyntaxKind.PropertyAssignment);
      if (!pa) return null;

      lastSlot = { kind: "prop", node: pa };

      const init = pa.getInitializer();
      if (!init) return null;
      cur = init;
      continue;
    }

    // idx
    if (cur.getKind() !== SyntaxKind.ArrayLiteralExpression) return null;

    const el = cur.getElements()[s.index];
    if (!el) return null;

    lastSlot = { kind: "idx", node: el };
    cur = el;
  }

  if (!lastSlot) return null;

  // Interdiction : remplacer un array entier (il faut un index dans le path).
  // Exception : hubIntro est une string => jamais array.
  if (lastSlot.kind === "prop") {
    const init = lastSlot.node.getInitializer();
    if (init && init.getKind() === SyntaxKind.ArrayLiteralExpression) {
      return { slot: lastSlot, expr: init, pointsToWholeArray: true };
    }
  }

  const expr = lastSlot.kind === "prop" ? lastSlot.node.getInitializer() : lastSlot.node;
  return { slot: lastSlot, expr, pointsToWholeArray: false };
}

/**
 * Lit une string "statique" si possible :
 * - "..." (StringLiteral)
 * - `...` (NoSubstitutionTemplateLiteral)
 * - ParenthesizedExpression
 * - "a" + "b" + ... (BinaryExpression +) si les deux côtés sont statiques
 *
 * NOTE : on refuse TemplateExpression (`...${}`) car non déterministe/unsafe
 */
function getStaticStringValue(node) {
  if (!node) return null;

  const s1 = node.asKind(SyntaxKind.StringLiteral);
  if (s1) return s1.getLiteralText();

  const s2 = node.asKind(SyntaxKind.NoSubstitutionTemplateLiteral);
  if (s2) return s2.getLiteralText();

  const te = node.asKind(SyntaxKind.TemplateExpression);
  if (te) return null;

  const par = node.asKind(SyntaxKind.ParenthesizedExpression);
  if (par) return getStaticStringValue(par.getExpression());

  const bin = node.asKind(SyntaxKind.BinaryExpression);
  if (bin && bin.getOperatorToken().getText() === "+") {
    const left = getStaticStringValue(bin.getLeft());
    if (left == null) return null;
    const right = getStaticStringValue(bin.getRight());
    if (right == null) return null;
    return left + right;
  }

  return null;
}

/**
 * Écrit une nouvelle valeur string dans le slot :
 * - prop: setInitializer(JSON.stringify(value))
 * - idx: replaceWithText(JSON.stringify(value))
 */
function setSlotStringValue(slot, value) {
  const txt = JSON.stringify(value);
  if (slot.kind === "prop") {
    slot.node.setInitializer(txt);
    return;
  }
  slot.node.replaceWithText(txt);
}

/* =============================================================================
   STRONG-ONLY SAFETY
============================================================================= */
function stripStrongTags(s) {
  return String(s ?? "").replace(/<\/?strong>/g, "");
}

// Strict: ONLY canonical tags <strong> and </strong> (no attrs, no spaces, no variants)
function hasOnlyPlainStrongTags(s) {
  const t = String(s ?? "");

  // reject any <strong ...> that's not exactly "<strong>"
  if (/<strong(?!>)/i.test(t)) return false;

  // reject any </strong ...> that's not exactly "</strong>"
  if (/<\/strong(?!>)/i.test(t)) return false;

  // extra safety: spaced variants
  if (/<strong\s+>/i.test(t)) return false;
  if (/<\/strong\s+>/i.test(t)) return false;
  if (/<\s+strong>/i.test(t)) return false;
  if (/<\/\s+strong>/i.test(t)) return false;

  return true;
}

function isStrongOnlyEdit(oldText, newText) {
  if (!hasOnlyPlainStrongTags(newText)) return false;
  return stripStrongTags(oldText) === stripStrongTags(newText);
}

/* =============================================================================
   SUBSTRING APPLY
============================================================================= */
function applySubstringOnce(text, excerpt, replacement) {
  if (!excerpt) return { ok: false, newText: text, reason: "excerpt_missing" };
  const idx = text.indexOf(excerpt);
  if (idx === -1) return { ok: false, newText: text, reason: "excerpt_not_found" };

  // ensure unique occurrence
  const count = text.split(excerpt).length - 1;
  if (count !== 1) return { ok: false, newText: text, reason: count === 0 ? "excerpt_not_found" : "excerpt_not_unique" };

  const newText = text.replace(excerpt, replacement);
  if (newText === text) return { ok: false, newText: text, reason: "no_change" };

  return { ok: true, newText, reason: "" };
}

function isSafeMode(mode) {
  return mode === "setField" || mode === "substring";
}

/* =============================================================================
   MAIN
============================================================================= */
async function main() {
  const applyPathArg = process.argv[2] || getArgValue("--apply") || "strong-apply.klinova.suggested.json";
  const absApply = path.isAbsolute(applyPathArg) ? applyPathArg : path.join(ROOT, applyPathArg);

  if (!fs.existsSync(absApply)) {
    console.error("Missing apply file:", absApply);
    process.exit(1);
  }

  if (!fs.existsSync(TS_CONFIG)) {
    console.error("Missing tsconfig:", TS_CONFIG);
    process.exit(1);
  }

  const plan = readJson(absApply);

  const cliDryRun = hasFlag("--dry-run");
  const cliWrite = hasFlag("--write");
  const verbose = hasFlag("--verbose");

  const ignoreExpected = hasFlag("--ignore-expected") || !!plan.ignoreExpected;
  const dryRun = cliWrite ? false : cliDryRun ? true : !!plan.dryRun;

  const maxEditsPerFile = Number(plan.maxEditsPerFile || 50);
  const edits = Array.isArray(plan.edits) ? plan.edits : [];

  if (!edits.length) {
    console.log("[apply] no edits.");
    return;
  }

  // Group edits by file
  const byFile = new Map();
  for (const e of edits) {
    if (!e || !e.file || !e.path) continue;
    const rel = String(e.file);
    const arr = byFile.get(rel) || [];
    arr.push(e);
    byFile.set(rel, arr);
  }

  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  const logs = [];
  const touched = new Set();

  for (const [relFile, fileEditsRaw] of byFile.entries()) {
    const fp = path.isAbsolute(relFile) ? relFile : path.join(ROOT, relFile);

    if (!fs.existsSync(fp)) {
      logs.push({ file: relFile, status: "missing", applied: 0, skipped: fileEditsRaw.length, perEdit: [] });
      continue;
    }

    let sf;
    try {
      sf = project.getSourceFile(fp) ?? project.addSourceFileAtPath(fp);
    } catch (err) {
      logs.push({
        file: relFile,
        status: "parse_fail_sourcefile",
        applied: 0,
        skipped: fileEditsRaw.length,
        note: String(err?.message || err),
        perEdit: [],
      });
      continue;
    }

    const cityVar = sf.getVariableDeclaration("city");
    const rootObj = cityVar?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

    if (!rootObj) {
      logs.push({ file: relFile, status: "parse_fail_city_object", applied: 0, skipped: fileEditsRaw.length, perEdit: [] });
      continue;
    }

    // cap per file
    const fileEdits = fileEditsRaw.slice(0, maxEditsPerFile);

    let applied = 0;
    let skipped = 0;
    const perEdit = [];

    for (const e of fileEdits) {
      const mode = String(e.mode || "").trim();
      if (!isSafeMode(mode)) {
        skipped++;
        perEdit.push({ path: e.path, mode, status: "skipped", reason: "unsupported_mode" });
        continue;
      }

      const pth = normalizePathForApply(String(e.path));

      // Klinova whitelist
      if (!isAllowedKlinovaPath(pth)) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: "path_not_allowed_klinova" });
        continue;
      }

      const found = findSlotByPath(rootObj, pth);
      if (!found) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: "path_not_found" });
        continue;
      }

      if (found.pointsToWholeArray) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: "refuse_replace_whole_array" });
        continue;
      }

      const expr = found.expr;
      const oldText = getStaticStringValue(expr);

      // ===== setField =====
      if (mode === "setField") {
        const value = typeof e.value === "string" ? e.value : "";
        const expected = typeof e.expected === "string" ? e.expected : null;

        if (!value) {
          skipped++;
          perEdit.push({ path: pth, mode, status: "skipped", reason: "value_missing" });
          continue;
        }

        // strong-only safety: if we can read oldText, enforce stripStrong equality
        if (oldText != null && !isStrongOnlyEdit(oldText, value)) {
          skipped++;
          perEdit.push({ path: pth, mode, status: "skipped", reason: "not_strong_only_edit" });
          continue;
        }

        // expected check (optional)
        if (!ignoreExpected && expected != null) {
          if (oldText == null) {
            skipped++;
            perEdit.push({
              path: pth,
              mode,
              status: "skipped",
              reason: "expected_provided_but_value_not_static_string",
            });
            continue;
          }
          if (expected !== oldText) {
            skipped++;
            perEdit.push({
              path: pth,
              mode,
              status: "skipped",
              reason: "expected_mismatch",
              expectedHash: sha1(expected),
              currentHash: sha1(oldText),
            });
            continue;
          }
        }

        if (oldText != null && oldText === value) {
          skipped++;
          perEdit.push({ path: pth, mode, status: "skipped", reason: "no_change" });
          continue;
        }

        if (verbose) {
          console.log(`[apply:setField] ${relFile} :: ${pth}`);
          console.log("  - from:", (oldText ?? "[non-static]").slice?.(0, 200) ?? "[non-static]");
          console.log("  - to  :", value.slice(0, 200).replace(/\s+/g, " "));
        }

        if (!dryRun) {
          setSlotStringValue(found.slot, value);
          touched.add(fp);
        }

        applied++;
        perEdit.push({ path: pth, mode, status: dryRun ? "would_apply" : "applied" });
        continue;
      }

      // ===== substring =====
      if (oldText == null) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: "target_not_static_string" });
        continue;
      }

      const excerpt = typeof e.excerpt === "string" ? e.excerpt : "";
      const replacement = typeof e.replacement === "string" ? e.replacement : "";

      if (!excerpt.trim()) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: "excerpt_missing" });
        continue;
      }

      // apply once + unique check
      const r = applySubstringOnce(oldText, excerpt, replacement);
      if (!r.ok) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: r.reason });
        continue;
      }

      // strong-only safety for substring
      if (!isStrongOnlyEdit(oldText, r.newText)) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: "not_strong_only_edit" });
        continue;
      }

      if (verbose) {
        console.log(`[apply:substring] ${relFile} :: ${pth}`);
        console.log("  - excerpt:", excerpt.slice(0, 140).replace(/\s+/g, " "));
        console.log("  - repl   :", replacement.slice(0, 140).replace(/\s+/g, " "));
      }

      if (!dryRun) {
        setSlotStringValue(found.slot, r.newText);
        touched.add(fp);
      }

      applied++;
      perEdit.push({ path: pth, mode, status: dryRun ? "would_apply" : "applied" });
    }

    if (!dryRun && touched.has(fp)) {
      await sf.save();
    }

    logs.push({ file: relFile, status: "ok", applied, skipped, perEdit });
  }

  const out = {
    at: new Date().toISOString(),
    dryRun,
    ignoreExpected,
    maxEditsPerFile,
    inputApplyFile: path.relative(ROOT, absApply).replace(/\\/g, "/"),
    logs,
  };

  const outPath = path.join(ROOT, "scripts", ".strong_out_klinova", "strong-apply.log.json");
  writeText(outPath, JSON.stringify(out, null, 2));
  console.log("[done] wrote", path.relative(ROOT, outPath).replace(/\\/g, "/"));
  if (dryRun) console.log("[done] dry-run: no files written. Re-run with --write to apply.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
