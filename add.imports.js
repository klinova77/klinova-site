import fs from 'fs';
import path from 'path';

const PAGES_DIR = './src/pages';
const IMPORT_LINE = `import Button from '~/components/UI/Button.astro';`;

// Fonction récursive pour parcourir toutes les pages
function addImportToAstroFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      addImportToAstroFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Ne rien faire si déjà importé
      if (content.includes(IMPORT_LINE)) continue;

      // Trouver la première ligne après les ---
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        const before = content.slice(0, frontmatterEnd + 3);
        const after = content.slice(frontmatterEnd + 3);
        content = `${before}\n${IMPORT_LINE}\n${after}`;
      } else {
        // Sinon ajouter tout en haut
        content = `---\n${IMPORT_LINE}\n---\n${content}`;
      }

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Import ajouté à : ${fullPath}`);
    }
  }
}

addImportToAstroFiles(PAGES_DIR);
console.log('🧩 Tous les imports Button ont été ajoutés.');
