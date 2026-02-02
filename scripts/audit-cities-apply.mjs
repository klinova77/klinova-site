// scripts/audit-cities-apply.mjs
// ============================================================================
// APPLY — MODE A / AUTO SAFE (Klinova City)

  // Usage:
  //   node scripts/audit-cities-apply.mjs audit-apply.suggested.json --dry-run
  //   node scripts/audit-cities-apply.mjs audit-apply.suggested.json --write
//
// Applique automatiquement uniquement :
//  1) setField (expected optionnel) ✅
//  2) substring (typo mécanique)    ✅ seulement si excerpt unique
//
// Supporte la lecture des strings "statiques" même si elles sont concaténées :
//   "..." + "..." + ...
//
// IMPORTANT (Klinova):
// - Les champs HTML (hubIntro, uniqueIntro, uniqueDeepDive, faq[].answer, etc.)
//   sont souvent en template literals/backticks multi-lignes.
//   -> On sait les LIRE (NoSubstitutionTemplateLiteral) et les RÉÉCRIRE en
//      string literal JSON ("...") pour stabiliser le format,
//      MAIS uniquement si le contenu est statique (pas de ${}).
//
// Sécurité :
// - Ne modifie PAS un array entier : il faut un index [i] dans le path.
// - Substring : excerpt doit apparaître exactement 1 fois dans le champ.
// - Si expected fourni et mismatch : skip (sauf --ignore-expected).
// ============================================================================

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import crypto from "node:crypto";
import { Project, SyntaxKind } from "ts-morph";

const ROOT = process.cwd();
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

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

// path style: "services[2].uniqueIntro" or "faq[0].answer"
function parsePathSegments(p) {
  const segs = [];
  const re = /([a-zA-Z0-9_$-]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(p))) {
    if (m[1]) segs.push({ kind: "prop", key: m[1] });
    else segs.push({ kind: "idx", index: Number(m[2]) });
  }
  return segs;
}

function normalizePathForApply(p) {
  // Convert ".0" style indices to "[0]" (supports nested)
  // examples:
  //  - services.2.faqAdditions.0.answer -> services[2].faqAdditions[0].answer
  //  - whyUsBullets.1 -> whyUsBullets[1]
  return String(p || "").replace(/\.([0-9]+)(?=\.|$)/g, "[$1]");
}

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
  /** @type {{ kind: "prop", node: any } | { kind: "idx", node: any } | null} */
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
  if (lastSlot.kind === "prop") {
    const init = lastSlot.node.getInitializer();
    if (init && init.getKind() === SyntaxKind.ArrayLiteralExpression) {
      return { slot: lastSlot, expr: init, pointsToWholeArray: true };
    }
  }

  // expr = expression courante du slot
  const expr =
    lastSlot.kind === "prop" ? lastSlot.node.getInitializer() : lastSlot.node;

  return { slot: lastSlot, expr, pointsToWholeArray: false };
}

/**
 * Lit une string "statique" si possible :
 * - "..." (StringLiteral)
 * - `...` (NoSubstitutionTemplateLiteral)
 * - ParenthesizedExpression
 * - "a" + "b" + ... (BinaryExpression +) si les deux côtés sont statiques
 *
 * REFUSE :
 * - TemplateExpression (`a ${b} c`) -> retourne null (non statique)
 */
function getStaticStringValue(node) {
  if (!node) return null;

  const s1 = node.asKind(SyntaxKind.StringLiteral);
  if (s1) return s1.getLiteralText();

  const s2 = node.asKind(SyntaxKind.NoSubstitutionTemplateLiteral);
  if (s2) return s2.getLiteralText();

  // TemplateExpression => non statique
  if (node.asKind(SyntaxKind.TemplateExpression)) return null;

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
 * - idx:  replaceWithText(JSON.stringify(value))
 */
function setSlotStringValue(slot, value) {
  const txt = JSON.stringify(value);

  if (slot.kind === "prop") {
    slot.node.setInitializer(txt);
    return;
  }
  // idx
  slot.node.replaceWithText(txt);
}

function applySubstringOnce(text, excerpt, replacement) {
  if (!excerpt) return { ok: false, newText: text, reason: "excerpt_missing" };
  const idx = text.indexOf(excerpt);
  if (idx === -1) return { ok: false, newText: text, reason: "excerpt_not_found" };
  const newText = text.replace(excerpt, replacement);
  if (newText === text) return { ok: false, newText: text, reason: "no_change" };
  return { ok: true, newText, reason: "" };
}

function isSafeMode(mode) {
  return mode === "setField" || mode === "substring";
}

async function main() {
  // Usage:
  //   node scripts/audit-cities-apply.mjs audit-apply.suggested.json --dry-run
  //   node scripts/audit-cities-apply.mjs audit-apply.suggested.json --write
  const applyPathArg = process.argv[2] || getArgValue("--apply") || "audit-apply.json";
  const absApply = path.isAbsolute(applyPathArg) ? applyPathArg : path.join(ROOT, applyPathArg);

  if (!fs.existsSync(absApply)) {
    console.error("Missing apply file:", absApply);
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
      logs.push({ file: relFile, status: "missing", applied: 0, skipped: fileEditsRaw.length });
      continue;
    }

    const sf = project.addSourceFileAtPath(fp);
    const cityVar = sf.getVariableDeclaration("city");
    const rootObj = cityVar?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

    if (!rootObj) {
      logs.push({ file: relFile, status: "parse_fail_city_object", applied: 0, skipped: fileEditsRaw.length });
      continue;
    }

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

      // ----------------------------------------------------------------------
      // setField
      // ----------------------------------------------------------------------
      if (mode === "setField") {
        const value = typeof e.value === "string" ? e.value : "";
        const expected = typeof e.expected === "string" ? e.expected : null;

        if (!value) {
          skipped++;
          perEdit.push({ path: pth, mode, status: "skipped", reason: "value_missing" });
          continue;
        }

        // expected check (si fourni)
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
          console.log("  - from:", (oldText ?? "[non-static]").slice?.(0, 180) ?? "[non-static]");
          console.log("  - to  :", value.slice(0, 180).replace(/\s+/g, " "));
        }

        if (!dryRun) {
          setSlotStringValue(found.slot, value);
          touched.add(fp);
        }

        applied++;
        perEdit.push({ path: pth, mode, status: dryRun ? "would_apply" : "applied" });
        continue;
      }

      // ----------------------------------------------------------------------
      // substring (typo mécanique) — target doit être statique
      // ----------------------------------------------------------------------
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

      const count = oldText.split(excerpt).length - 1;
      if (count !== 1) {
        skipped++;
        perEdit.push({
          path: pth,
          mode,
          status: "skipped",
          reason: count === 0 ? "excerpt_not_found" : "excerpt_not_unique",
          count,
        });
        continue;
      }

      const r = applySubstringOnce(oldText, excerpt, replacement);
      if (!r.ok) {
        skipped++;
        perEdit.push({ path: pth, mode, status: "skipped", reason: r.reason });
        continue;
      }

      if (verbose) {
        console.log(`[apply:substring] ${relFile} :: ${pth}`);
        console.log("  - excerpt:", excerpt.slice(0, 120).replace(/\s+/g, " "));
        console.log("  - repl   :", replacement.slice(0, 120).replace(/\s+/g, " "));
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

  const outPath = path.join(ROOT, "scripts", ".audit_out", "audit-apply.log.json");
  writeText(outPath, JSON.stringify(out, null, 2));
  console.log("[done] wrote", path.relative(ROOT, outPath).replace(/\\/g, "/"));
  if (dryRun) console.log("[done] dry-run: no files written. Re-run with --write to apply.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
