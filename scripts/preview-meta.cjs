// scripts/preview-meta.cjs
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SERVICES_DIR = path.join(ROOT, 'src', 'data', 'services');
const CITIES_DIR = path.join(ROOT, 'src', 'data', 'cities');

// même logique que dans CityPage
function buildTitle(serviceName, cityName) {
  return `${serviceName} à ${cityName} | Intervention Professionnelle – Klinova`;
}

function buildDescription(service, city) {
  if (service.defaultDescription) {
    const base = service.defaultDescription.replace(/\s+/g, ' ').trim();
    return `${base} Intervention à ${city.name} et en Île-de-France.`;
  }
  return `${service.name} à ${city.name} pour copropriétés, résidences et gestionnaires.`;
}

function listTsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => path.join(dir, f));
}

function parseService(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  const keyMatch = content.match(/key:\s*'([^']+)'/);
  const nameMatch = content.match(/name:\s*'([^']+)'/);
  const defaultDescMatch = content.match(
    /defaultDescription:\s*["'`]([\s\S]*?)["'`],/
  );

  if (!keyMatch || !nameMatch) return null;

  return {
    filePath,
    key: keyMatch[1],
    name: nameMatch[1],
    defaultDescription: defaultDescMatch ? defaultDescMatch[1] : '',
  };
}

function parseCity(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // On cherche le couple name + slug du bloc principal
  const match = content.match(
    /name:\s*'([^']+)',\s*\n\s*slug:\s*'([^']+)'/
  );

  if (!match) return null;

  return {
    filePath,
    name: match[1],
    slug: match[2],
  };
}

// --- LECTURE DES DONNÉES ---

const services = listTsFiles(SERVICES_DIR)
  .map(parseService)
  .filter(Boolean);

const cities = listTsFiles(CITIES_DIR)
  .map(parseCity)
  .filter(Boolean);

// Filtre optionnel par slug de ville : node preview-meta.cjs torcy
const cityFilter = process.argv[2];

console.log('🔍 Aperçu des titles + meta descriptions (pages ville/service)\n');

for (const city of cities) {
  if (cityFilter && city.slug !== cityFilter) continue;

  console.log(`=== Ville : ${city.name} (${city.slug}) ===\n`);

  for (const service of services) {
    const title = buildTitle(service.name, city.name);
    const description = buildDescription(service, city);
    const length = description.replace(/\s+/g, ' ').trim().length;

    console.log(`• Service : ${service.key}`);
    console.log(`  Title : ${title}`);
    console.log(`  Meta  (${length} caractères) : ${description}`);
    console.log('');
  }

  console.log('-------------------------------------------\n');
}

console.log('✅ Aperçu terminé.');
