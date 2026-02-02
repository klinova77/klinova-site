// scripts/apply-strong-tags-klinova.mjs
// Usage:
//   node scripts/apply-strong-tags-klinova.mjs --dry-run
//   node scripts/apply-strong-tags-klinova.mjs
//   node scripts/apply-strong-tags-klinova.mjs --dry-run --limit 20
//   node scripts/apply-strong-tags-klinova.mjs --in strong-apply.klinova.suggested.json
//   node scripts/apply-strong-tags-klinova.mjs --only montfermeil,chelles

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import crypto from "node:crypto";
import { Project, SyntaxKind } from "ts-morph";

/* =============================================================================
   PATHS
============================================================================= */
const ROOT = process.cwd();
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

const APPLY_FILE_DEFAULT = path.join(ROOT, "strong-apply.klinova.suggested.json");
const OUT_REPORT_JSON = path.join(ROOT, "strong-apply.klinova.report.json");
const OUT_REPORT_MD = path.join(ROOT, "strong-apply.klinova.report.md");

/* =============================================================================
   HELPERS
============================================================================= */
function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function writeText(p, s) {
  fs.writeFileSync(p, s, "utf8");
}
function sha1(s) {
  return crypto.createHash("sha1").update(String(s ?? ""), "utf8").digest("hex");
}
function getArgFlag(name) {
  return process.argv.includes(name);
}
function getArgValue(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

/* =============================================================================
   TS-MORPH PATH ACCESS
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
  return pa ? pa.getInitializer() : null;
}

/**
 * Supports fields stored as:
 * - "..." (StringLiteral)
 * - `...` (NoSubstitutionTemplateLiteral)
 *
 * Returns { node, text } where:
 * - node: the literal node (StringLiteral or NoSubstitutionTemplateLiteral)
 * - text: literalText (no quotes/backticks)
 */
function getStringNodeAtPath(cityObj, pathStr) {
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
        if (
          el.getKind() !== SyntaxKind.StringLiteral &&
          el.getKind() !== SyntaxKind.NoSubstitutionTemplateLiteral
        ) {
          return null;
        }
        return { node: el, text: el.getLiteralText() };
      }

      if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
        cur = el.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        continue;
      }
      return null;
    }

    // last token
    if (i === tokens.length - 1) {
      const k = init.getKind();
      if (k !== SyntaxKind.StringLiteral && k !== SyntaxKind.NoSubstitutionTemplateLiteral) return null;
      return { node: init, text: init.getLiteralText() };
    }

    // continue
    if (init.getKind() !== SyntaxKind.ObjectLiteralExpression) return null;
    cur = init.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  }

  return null;
}

/* =============================================================================
   STRONG-ONLY SAFETY (apply-time)
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
function isStrongOnlyEdit(expected, value) {
  const e = String(expected ?? "");
  const v = String(value ?? "");
  if (!hasOnlyPlainStrongTags(v)) return false;
  return stripStrongTags(e) === stripStrongTags(v);
}

// Replace exactly one occurrence
function replaceOnce(haystack, needle, replacement) {
  const idx = haystack.indexOf(needle);
  if (idx === -1) return { ok: false, out: haystack, count: 0 };
  const idx2 = haystack.indexOf(needle, idx + needle.length);
  if (idx2 !== -1) return { ok: false, out: haystack, count: 2 };
  const out = haystack.slice(0, idx) + replacement + haystack.slice(idx + needle.length);
  return { ok: true, out, count: 1 };
}

function validateSubstringEdit(expectedFromTs, excerpt, replacement) {
  const ex = String(excerpt ?? "");
  const rep = String(replacement ?? "");

  if (!ex.trim() || !rep.trim()) return { ok: false, reason: "empty_excerpt_or_replacement" };

  // excerpt must be plain (no strong)
  if (ex.includes("<strong>") || ex.includes("</strong>")) {
    return { ok: false, reason: "excerpt_contains_strong" };
  }

  // replacement must be excerpt + only strong tags
  if (!hasOnlyPlainStrongTags(rep)) return { ok: false, reason: "replacement_non_plain_strong" };
  if (stripStrongTags(rep) !== ex) return { ok: false, reason: "replacement_not_excerpt_plus_strong" };

  // excerpt must appear once
  const r = replaceOnce(expectedFromTs, ex, rep);
  if (!r.ok) return { ok: false, reason: r.count === 2 ? "excerpt_ambiguous_twice" : "excerpt_not_found" };

  // final must still be strong-only vs expected
  if (!isStrongOnlyEdit(expectedFromTs, r.out)) return { ok: false, reason: "substring_not_strong_only" };

  return { ok: true, value: r.out };
}

/* =============================================================================
   REPORTING
============================================================================= */
function toMd(report) {
  let md = `# Strong apply — Klinova report\n\n`;
  md += `Généré : ${report.generatedAt}\n`;
  md += `Dry-run : ${report.dryRun}\n`;
  md += `Total edits (selected) : ${report.totalEdits}\n`;
  md += `Applied : ${report.applied}\n`;
  md += `Would apply : ${report.wouldApply}\n`;
  md += `Skipped : ${report.skipped}\n`;
  md += `Errors : ${report.errors}\n\n`;

  for (const f of report.files) {
    md += `## ${f.file}\n\n`;
    for (const it of f.items) {
      const icon =
        it.status === "applied"
          ? "✅"
          : it.status === "would_apply"
            ? "🟦"
            : it.status === "skipped"
              ? "⏭️"
              : "❌";

      md += `- ${icon} \`${it.path}\` — ${it.status}`;
      if (it.mode) md += ` (mode=${it.mode})`;
      if (it.reason) md += ` — ${it.reason}`;
      md += `\n`;
      if (it.note) md += `  - note: ${it.note}\n`;
    }
    md += `\n`;
  }

  return md;
}

/* =============================================================================
   MAIN
============================================================================= */
async function main() {
  const dryRun = getArgFlag("--dry-run") || getArgFlag("--dryrun") || false;
  const limit = Number(getArgValue("--limit") || 0);

  const inPath = getArgValue("--in") || APPLY_FILE_DEFAULT;
  const onlyCsv = getArgValue("--only") || "";
  const only = new Set(onlyCsv.split(",").map((s) => s.trim()).filter(Boolean));

  if (!fs.existsSync(inPath)) {
    console.error("Missing", inPath);
    process.exit(1);
  }
  if (!fs.existsSync(TS_CONFIG)) {
    console.error("Missing", TS_CONFIG);
    process.exit(1);
  }

  const apply = readJson(inPath);

  const edits = Array.isArray(apply?.edits) ? apply.edits : [];
  const selectedAll = limit > 0 ? edits.slice(0, limit) : edits;

  // filter by --only
  const selected = [];
  for (const e of selectedAll) {
    const file = String(e?.file || "").trim();
    if (!file) continue;
    const slug = path.basename(file, ".ts");
    if (only.size && !only.has(slug)) continue;
    selected.push(e);
  }

  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  // group edits by file
  const byFile = new Map();
  for (const e of selected) {
    const file = String(e.file || "").trim();
    if (!file) continue;
    if (!byFile.has(file)) byFile.set(file, []);
    byFile.get(file).push(e);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun,
    totalEdits: selected.length,
    applied: 0,
    wouldApply: 0,
    skipped: 0,
    errors: 0,
    files: [],
  };

  for (const [fileRel, fileEdits] of byFile.entries()) {
    const abs = path.isAbsolute(fileRel) ? fileRel : path.join(ROOT, fileRel);
    const fileReport = { file: fileRel, items: [] };

    if (!fs.existsSync(abs)) {
      for (const e of fileEdits) {
        fileReport.items.push({
          path: e?.path || "",
          status: "error",
          mode: e?.mode || "",
          reason: "file_not_found",
        });
        report.errors++;
      }
      report.files.push(fileReport);
      continue;
    }

    let sf;
    try {
      // Ensure we don't add duplicates if multiple edits hit same file
      sf = project.getSourceFile(abs) ?? project.addSourceFileAtPath(abs);
    } catch (err) {
      for (const e of fileEdits) {
        fileReport.items.push({
          path: e?.path || "",
          status: "error",
          mode: e?.mode || "",
          reason: "ts_parse_failed",
          note: String(err?.message || err),
        });
        report.errors++;
      }
      report.files.push(fileReport);
      continue;
    }

    const cityObj = extractCityObject(sf);
    if (!cityObj) {
      for (const e of fileEdits) {
        fileReport.items.push({
          path: e?.path || "",
          status: "error",
          mode: e?.mode || "",
          reason: "city_object_not_found",
        });
        report.errors++;
      }
      report.files.push(fileReport);
      continue;
    }

    // apply edits in-file
    for (const e of fileEdits) {
      const pathStr = String(e?.path || "").trim();
      const mode = String(e?.mode || "setField").trim(); // setField | substring
      const expectedInApply = String(e?.expected ?? "");

      if (!pathStr) {
        fileReport.items.push({ path: "", status: "skipped", mode, reason: "empty_path" });
        report.skipped++;
        continue;
      }

      const target = getStringNodeAtPath(cityObj, pathStr);
      if (!target) {
        fileReport.items.push({ path: pathStr, status: "skipped", mode, reason: "path_not_resolved" });
        report.skipped++;
        continue;
      }

      const expectedFromTs = target.text;

      // Safety 1: apply.expected must match TS exactly (strict)
      if (expectedInApply && expectedInApply !== expectedFromTs) {
        fileReport.items.push({
          path: pathStr,
          status: "skipped",
          mode,
          reason: "expected_mismatch",
          note: `apply.expected sha1=${sha1(expectedInApply)} != ts sha1=${sha1(expectedFromTs)}`,
        });
        report.skipped++;
        continue;
      }

      // Compute new value depending on mode
      let newValue = null;

      if (mode === "setField") {
        const proposed = String(e?.value ?? "");
        if (!proposed) {
          fileReport.items.push({ path: pathStr, status: "skipped", mode, reason: "empty_value" });
          report.skipped++;
          continue;
        }
        if (!isStrongOnlyEdit(expectedFromTs, proposed)) {
          fileReport.items.push({ path: pathStr, status: "skipped", mode, reason: "not_strong_only_edit" });
          report.skipped++;
          continue;
        }
        newValue = proposed;
      } else if (mode === "substring") {
        const excerpt = String(e?.excerpt ?? "");
        const replacement = String(e?.replacement ?? "");
        const v = validateSubstringEdit(expectedFromTs, excerpt, replacement);
        if (!v.ok) {
          fileReport.items.push({ path: pathStr, status: "skipped", mode, reason: v.reason });
          report.skipped++;
          continue;
        }
        newValue = v.value;
      } else {
        fileReport.items.push({ path: pathStr, status: "skipped", mode, reason: "unknown_mode" });
        report.skipped++;
        continue;
      }

      // Apply to node (string literal or backtick literal)
      if (!dryRun) {
        // setLiteralValue works on both StringLiteral and NoSubstitutionTemplateLiteral
        target.node.setLiteralValue(newValue);
      }

      fileReport.items.push({
        path: pathStr,
        status: dryRun ? "would_apply" : "applied",
        mode,
        reason: dryRun ? "dry_run" : String(e?.reason || "strong patch").slice(0, 160),
      });

      if (dryRun) report.wouldApply++;
      else report.applied++;
    }

    if (!dryRun) {
      await sf.save();
    }

    report.files.push(fileReport);
  }

  writeText(OUT_REPORT_JSON, JSON.stringify(report, null, 2));
  writeText(OUT_REPORT_MD, toMd(report));

  console.log("[done] report:", OUT_REPORT_JSON);
  console.log("[done] report:", OUT_REPORT_MD);
  if (dryRun) console.log("[info] dry-run mode: no TS files modified.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
