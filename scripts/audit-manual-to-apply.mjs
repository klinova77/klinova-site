// scripts/audit-manual-to-apply.mjs
// Usage:
//   node scripts/audit-manual-to-apply.mjs audit-manual.json --out audit-apply.manual.substring.json
// Then:
//   node scripts/audit-cities-apply.mjs audit-apply.manual.substring.json --dry-run
//   node scripts/audit-cities-apply.mjs audit-apply.manual.substring.json --write

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function writeText(p, s) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s, "utf8");
}
function getArgValue(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}
function normalizePathForApply(p) {
  return String(p || "").replace(/\.([0-9]+)(?=\.|$)/g, "[$1]");
}

function pickFindReplace(patch) {
  const find =
    typeof patch.find === "string"
      ? patch.find
      : typeof patch.excerpt === "string"
        ? patch.excerpt
        : "";
  const replace =
    typeof patch.replace === "string"
      ? patch.replace
      : typeof patch.replacement === "string"
        ? patch.replacement
        : "";
  return { find, replace };
}

function isUsable(s) {
  return typeof s === "string" && s.trim().length > 0;
}

async function main() {
  const inArg = process.argv[2] || "audit-manual.json";
  const absIn = path.isAbsolute(inArg) ? inArg : path.join(ROOT, inArg);
  if (!fs.existsSync(absIn)) {
    console.error("Missing input:", absIn);
    process.exit(1);
  }

  const outArg = getArgValue("--out") || "audit-apply.manual.substring.json";
  const absOut = path.isAbsolute(outArg) ? outArg : path.join(ROOT, outArg);

  const manual = readJson(absIn);

  const edits = [];
  for (const f of manual.files || []) {
    const file = f.file; // déjà relatif dans ton collect
    for (const p of f.patches || []) {
      if (!p || !p.path || !p.op) continue;

      // 1) On auto-applique UNIQUEMENT substring (safe via ton apply: unique occurrence)
      if (p.op === "substring") {
        const { find, replace } = pickFindReplace(p);
        if (!isUsable(find)) continue; // pas de find => skip
        // replace peut être "" (suppression), donc pas de trim obligatoire
        edits.push({
          file,
          path: normalizePathForApply(p.path),
          mode: "substring",
          find,
          replace: typeof replace === "string" ? replace : "",
          // optionnel: pour debug humain
          reason: p.reason || "",
          severity: p.severity || "low",
          category: p.category || "other",
        });
      }

      // 2) (Optionnel) setField même si applySafe=false
      // Décommente si tu veux en tenter quelques-uns :
      
      if (p.op === "setField" && typeof p.value === "string" && p.value.trim()) {
        edits.push({
          file,
          path: normalizePathForApply(p.path),
          mode: "setField",
          value: p.value,
          // expected: p.expected || null, // tu peux laisser vide, ton apply resynchronise oldText
        });
      }
      
    }
  }

  const plan = {
    version: 3,
    dryRun: true,
    mode: "substring-only-from-manual",
    maxEditsPerFile: 200,
    edits,
  };

  writeText(absOut, JSON.stringify(plan, null, 2));
  console.log("[ok] wrote", path.relative(ROOT, absOut).replace(/\\/g, "/"));
  console.log("[info] edits =", edits.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});