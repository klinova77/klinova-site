// scripts/validate-meta.cjs
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SERVICES_DIR = path.join(ROOT, 'src', 'data', 'services');
const CITIES_DIR = path.join(ROOT, 'src', 'data', 'cities');

// Limite recommandée pour les meta descriptions
const META_LIMIT = 160;

function checkLength(label, text, filePath) {
  if (!text) return;
  const normalized = text.replace(/\s+/g, ' ').trim();
  const length = normalized.length;

  if (length > META_LIMIT) {
    console.warn(
      `⚠️ ${label} trop longue (${length} caractères) dans ${filePath}\n` +
        `   → "${normalized.slice(0, 120)}..."`
    );
  }
}

function validateService(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  const defaultDescMatch = content.match(
    /defaultDescription:\s*['"`]([\s\S]*?)['"`],?/
  );
  if (defaultDescMatch) {
    checkLength('defaultDescription', defaultDescMatch[1], filePath);
  }
}

function validateCity(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  const customDescMatch = content.match(
    /customDescription:\s*['"`]([\s\S]*?)['"`],?/
  );
  if (customDescMatch) {
    checkLength('customDescription', customDescMatch[1], filePath);
  }
}

function listTsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => path.join(dir, f));
}

console.log('🔍 Vérification des meta descriptions (services + villes)...');

for (const file of listTsFiles(SERVICES_DIR)) {
  validateService(file);
}

for (const file of listTsFiles(CITIES_DIR)) {
  validateCity(file);
}

console.log('✅ Vérification terminée.');
