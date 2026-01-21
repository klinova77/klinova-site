// scripts/update-nearby-cities.mjs
//
// ─────────────────────────────────────────────────────────────────────────────
// COMMANDES (Windows / PowerShell)
// ─────────────────────────────────────────────────────────────────────────────
//
// # Mode normal : met à jour nearbyCities en utilisant le cache si possible
// node .\scripts\update-nearby-cities.mjs
//
// # Force recalcul de TOUTES les villes (ignore le cache existant)
// node .\scripts\update-nearby-cities.mjs --all
// node .\scripts\update-nearby-cities.mjs -a
//
// # Exécuter depuis n’importe où (chemin complet)
// node "D:\Klinova-site\scripts\update-nearby-cities.mjs" --all
//

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { Project, SyntaxKind } from "ts-morph";

/* ──────────────────────────────────────────────────────────────
   ROOT robuste (depuis l'emplacement du script)
────────────────────────────────────────────────────────────── */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Si scripts/ est bien à la racine du repo, ROOT = parent de scripts/
const ROOT = path.resolve(__dirname, "..");

const ARGS = new Set(process.argv.slice(2));
const FORCE_ALL = ARGS.has("--all") || ARGS.has("-a");
console.log("[info] FORCE_ALL =", FORCE_ALL);

/* ──────────────────────────────────────────────────────────────
   ✅ ADAPTATION KLINOVA
────────────────────────────────────────────────────────────── */
const CITIES_DIR = path.join(ROOT, "src", "data", "cities"); // <-- ton chemin
const TS_CONFIG = path.join(ROOT, "tsconfig.json");

/* ──────────────────────────────────────────────────────────────
   Overpass endpoints (fallback)
────────────────────────────────────────────────────────────── */
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.nchc.org.tw/api/interpreter",
  "https://overpass.openstreetmap.ru/api/interpreter",
];

/* ──────────────────────────────────────────────────────────────
   Comportement
────────────────────────────────────────────────────────────── */
const NEARBY_COUNT = 6;
const RADIUS_M = 12000; // ajuste si besoin
const CACHE_FILE = path.join(ROOT, ".cache-nearby-cities.json");

// UA propre
const USER_AGENT = "KlinovaLocalSEO/1.0 (contact: contact@klinova.fr)";

// Throttle global
const BASE_THROTTLE_MS = 900;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function slugify(fr) {
  return fr
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function haversineKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2), "utf8");
}

function listTsFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.isFile() && p.endsWith(".ts")) out.push(p);
    }
  };
  walk(dir);
  return out;
}

function getSourceFile(project, filePath) {
  return project.getSourceFile(filePath) ?? project.addSourceFileAtPath(filePath);
}

function getStringProp(obj, propName) {
  return obj
    .getProperty(propName)
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralText();
}

/* ──────────────────────────────────────────────────────────────
   Robust fetch helpers
────────────────────────────────────────────────────────────── */
function isRetryableStatus(status) {
  return status === 429 || status === 503 || status === 504;
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

async function overpassPost(query, { triesPerEndpoint = 3, timeoutMs = 35000 } = {}) {
  let lastErr;

  for (const endpoint of OVERPASS_ENDPOINTS) {
    for (let attempt = 1; attempt <= triesPerEndpoint; attempt++) {
      await sleep(BASE_THROTTLE_MS + Math.floor(Math.random() * 250));

      try {
        const res = await fetchWithTimeout(
          endpoint,
          {
            method: "POST",
            headers: {
              "User-Agent": USER_AGENT,
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: "data=" + encodeURIComponent(query),
          },
          timeoutMs
        );

        if (res.ok) return { endpoint, json: await res.json() };

        if (isRetryableStatus(res.status)) {
          const backoff = 1200 * attempt + Math.floor(Math.random() * 400);
          await sleep(backoff);
          continue;
        }

        throw new Error(`Overpass HTTP ${res.status} at ${endpoint}`);
      } catch (e) {
        lastErr = e;
        const backoff = 1200 * attempt + Math.floor(Math.random() * 400);
        await sleep(backoff);
      }
    }
  }

  throw lastErr ?? new Error("Overpass request failed on all endpoints");
}

/* ──────────────────────────────────────────────────────────────
   Overpass queries
────────────────────────────────────────────────────────────── */
async function geocodeCityOverpass(cityName) {
  const qName = cityName.replace(/"/g, '\\"');

  const query = `
[out:json][timeout:25];
area["ISO3166-1"="FR"][admin_level=2]->.fr;
(
  relation(area.fr)["boundary"="administrative"]["admin_level"="8"]["name"="${qName}"];
);
out center tags 1;
`;

  const { json } = await overpassPost(query, { triesPerEndpoint: 3, timeoutMs: 35000 });
  const el = (json.elements ?? []).find((e) => e.center?.lat && e.center?.lon);

  if (!el) throw new Error(`No Overpass geocode result for ${cityName}`);
  return { lat: Number(el.center.lat), lon: Number(el.center.lon) };
}

async function overpassNearbyMunicipalities(center) {
  const query = `
[out:json][timeout:25];
(
  relation
    ["boundary"="administrative"]
    ["admin_level"="8"]
    (around:${RADIUS_M},${center.lat},${center.lon});
);
out center tags;
`;

  const { json } = await overpassPost(query, { triesPerEndpoint: 3, timeoutMs: 35000 });

  const candidates = (json.elements ?? [])
    .map((el) => {
      const name = el.tags?.name;
      const lat = el.center?.lat;
      const lon = el.center?.lon;
      if (!name || typeof lat !== "number" || typeof lon !== "number") return null;
      return { name, slug: slugify(name), lat, lon };
    })
    .filter(Boolean);

  return candidates;
}

/* ──────────────────────────────────────────────────────────────
   ts-morph writer
────────────────────────────────────────────────────────────── */
async function updateNearbyCitiesInFile(project, filePath, slugs) {
  const sf = getSourceFile(project, filePath);

  const cityVar = sf.getVariableDeclaration("city");
  if (!cityVar) return false;

  const obj = cityVar.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  if (!obj) return false;

  const nearbyProp = obj.getProperty("nearbyCities");
  if (!nearbyProp) return false;

  const assign = nearbyProp.asKindOrThrow(SyntaxKind.PropertyAssignment);

  const newArr = `[\n  ${slugs.map((s) => `"${s}"`).join(",\n  ")}\n]`;
  assign.setInitializer(newArr);

  await sf.save();
  return true;
}

/* ──────────────────────────────────────────────────────────────
   main
────────────────────────────────────────────────────────────── */
async function main() {
  console.log("ROOT =", ROOT);
  console.log("CITIES_DIR =", CITIES_DIR);

  if (!fs.existsSync(CITIES_DIR)) {
    console.error("CITIES_DIR not found:", CITIES_DIR);
    process.exit(1);
  }
  if (!fs.existsSync(TS_CONFIG)) {
    console.error("tsconfig.json not found:", TS_CONFIG);
    process.exit(1);
  }

  const cache = readJson(CACHE_FILE, {});
  const files = listTsFiles(CITIES_DIR);

  // allowedSlugsSet = toutes les villes déjà couvertes par des city.ts
  const projectScan = new Project({ tsConfigFilePath: TS_CONFIG });
  const allowedSlugsSet = new Set();

  for (const f of files) {
    const sf = getSourceFile(projectScan, f);
    const cityVar = sf.getVariableDeclaration("city");
    const obj = cityVar?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!obj) continue;
    const slug = getStringProp(obj, "slug");
    if (slug) allowedSlugsSet.add(slug);
  }

  console.log(`[info] Allowed slugs count = ${allowedSlugsSet.size}`);

  const project = new Project({ tsConfigFilePath: TS_CONFIG });

  for (const f of files) {
    const sf = getSourceFile(project, f);
    const cityVar = sf.getVariableDeclaration("city");
    const obj = cityVar?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!obj) continue;

    const cityName = getStringProp(obj, "name");
    const citySlug = getStringProp(obj, "slug");
    if (!cityName || !citySlug) continue;

    // Cache utilisable seulement si 6 villes valides (couvertes) encore présentes
    if (!FORCE_ALL && Array.isArray(cache[citySlug])) {
      const cached = cache[citySlug]
        .filter((s) => s && s !== citySlug && allowedSlugsSet.has(s))
        .slice(0, NEARBY_COUNT);

      if (cached.length === NEARBY_COUNT) {
        const ok = await updateNearbyCitiesInFile(project, f, cached);
        if (ok) console.log(`[cache] ${citySlug} -> ${cached.join(", ")}`);
        continue;
      }
    }

    try {
      // 1) centre ville
      const center = await geocodeCityOverpass(cityName);

      // 2) communes autour
      const raw = await overpassNearbyMunicipalities(center);

      // 3) distance + tri
      const candidates = raw
        .map((c) => ({
          name: c.name,
          slug: c.slug,
          distanceKm: Number(
            haversineKm(center, { lat: c.lat, lon: c.lon }).toFixed(2)
          ),
        }))
        .filter((c) => c.slug && c.slug !== citySlug)
        .sort((a, b) => a.distanceKm - b.distanceKm);

      // 4) filtrage : uniquement villes couvertes
      const covered = candidates.filter((c) => allowedSlugsSet.has(c.slug));

      if (covered.length < NEARBY_COUNT) {
        console.warn(
          `[warn] ${citySlug}: only ${covered.length} covered nearby cities found within ${RADIUS_M}m`
        );
        continue;
      }

      // 5) pick deterministe
      const picked = covered.slice(0, NEARBY_COUNT).map((c) => c.slug);

      // 6) rewrite + cache
      const ok = await updateNearbyCitiesInFile(project, f, picked);
      if (ok) {
        cache[citySlug] = picked;
        writeJson(CACHE_FILE, cache);
        console.log(`[ok] ${citySlug} -> ${picked.join(", ")}`);
      } else {
        console.log(`[skip] ${citySlug} (no nearbyCities prop)`);
      }
    } catch (e) {
      console.warn(`[error] ${citySlug}: ${e?.message ?? String(e)}`);
    }
  }

  console.log("[done]");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
