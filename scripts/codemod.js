// D:\Klinova-site\scripts\codemod.js
import path from "node:path";
import { Project, SyntaxKind } from "ts-morph";

const ROOT = process.cwd();
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

function escapeForDoubleQuotes(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r\n/g, "\n")
    .replace(/\n/g, "\\n");
}


const project = new Project({ tsConfigFilePath: TS_CONFIG });

// ✅ CIBLE : uniquement les cities
const files = project.getSourceFiles("src/data/cities-draft/**/*.ts");

let changedFiles = 0;
const dangerous = [];

for (const sf of files) {
  let fileChanged = false;

  // `...` sans ${}
  const noSubs = sf.getDescendantsOfKind(
    SyntaxKind.NoSubstitutionTemplateLiteral
  );
  for (const node of noSubs) {
    const raw = node.getLiteralValue();
    const escaped = escapeForDoubleQuotes(raw);
    node.replaceWithText(`"${escaped}"`);
    fileChanged = true;
  }

  // `...${...}...` => on log, on ne touche pas
  const templExpr = sf.getDescendantsOfKind(SyntaxKind.TemplateExpression);
  if (templExpr.length) {
    dangerous.push(sf.getFilePath());
  }

if (fileChanged) {
  changedFiles++;
}

}

await project.save();

console.log(`✅ Files changed: ${changedFiles}`);
if (dangerous.length) {
  console.log(`⚠️ Fichiers avec TemplateExpression (\${}):`);
  for (const f of dangerous) console.log(`- ${f}`);
}
