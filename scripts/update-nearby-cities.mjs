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
// # Reset cache puis recalcul complet
// node .\scripts\update-nearby-cities.mjs --reset-cache --all
//
// # Reset cache uniquement
// node .\scripts\update-nearby-cities.mjs --reset-cache
//
// # Exécuter depuis n’importe où (chemin complet)
// node "D:\Klinova-site\scripts\update-nearby-cities.mjs" --all
//
// ─────────────────────────────────────────────────────────────────────────────
// EXCLUSIONS (pour figer certaines villes / éviter Paris-* etc.)
// ─────────────────────────────────────────────────────────────────────────────
//
// Fichier : scripts/nearby-skip.json
// {
//   "skipCities": ["paris-10", "paris-11", ...],
//   "skipIfNearbyIncludesPrefixes": ["paris-"]
// }
//
// - skipCities : ne touche jamais à ces villes (slug exact)
// - skipIfNearbyIncludesPrefixes : si la ville a déjà un nearbyCities contenant un slug
//   qui commence par un des préfixes, on ne la recalculera pas
//
// ─────────────────────────────────────────────────────────────────────────────

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
const ROOT = path.resolve(__dirname, "..");

/* ──────────────────────────────────────────────────────────────
   CLI flags
────────────────────────────────────────────────────────────── */
const ARGS = new Set(process.argv.slice(2));
const FORCE_ALL = ARGS.has("--all") || ARGS.has("-a");
const RESET_CACHE = ARGS.has("--reset-cache");

console.log("[info] FORCE_ALL =", FORCE_ALL);
console.log("[info] RESET_CACHE =", RESET_CACHE);

/* ──────────────────────────────────────────────────────────────
   ✅ ADAPTATION KLINOVA
────────────────────────────────────────────────────────────── */
const CITIES_DIR = path.join(ROOT, "src", "data", "cities");
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
const NEARBY_COUNT = 10;
const RADII_M = [20000, 30000, 40000, 60000, 80000];

const CACHE_FILE = path.join(ROOT, ".cache-nearby-cities.json");
const SKIP_FILE = path.join(ROOT, "scripts", "nearby-skip.json");

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

function getFirstArrayStringProp(obj, propName) {
  const prop = obj.getProperty(propName);
  const arr = prop?.getFirstDescendantByKind(SyntaxKind.ArrayLiteralExpression);
  if (!arr) return undefined;
  const el0 = arr.getElements?.()[0];
  return el0?.asKind?.(SyntaxKind.StringLiteral)?.getLiteralText?.();
}

function getStringArrayProp(obj, propName) {
  const prop = obj.getProperty(propName);
  const assign = prop?.asKind(SyntaxKind.PropertyAssignment);
  const init = assign?.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!init) return [];
  return init
    .getElements()
    .map((el) => el.asKind(SyntaxKind.StringLiteral)?.getLiteralText())
    .filter(Boolean);
}

function readSkipConfig() {
  const fallback = { skipCities: [], skipIfNearbyIncludesPrefixes: [] };
  if (!fs.existsSync(SKIP_FILE)) return fallback;
  try {
    const raw = JSON.parse(fs.readFileSync(SKIP_FILE, "utf8"));
    return {
      skipCities: Array.isArray(raw.skipCities) ? raw.skipCities : [],
      skipIfNearbyIncludesPrefixes: Array.isArray(raw.skipIfNearbyIncludesPrefixes)
        ? raw.skipIfNearbyIncludesPrefixes
        : [],
    };
  } catch {
    return fallback;
  }
}

function shouldSkipCity({ citySlug, existingNearby, skipCities, skipPrefixes }) {
  if (skipCities.includes(citySlug)) return true;
  if (skipPrefixes.length) {
    for (const s of existingNearby) {
      if (skipPrefixes.some((p) => s.startsWith(p))) return true;
    }
  }
  return false;
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
async function geocodeCityOverpass(cityName, postalCode) {
  const qName = cityName.replace(/"/g, '\\"');
  const qPost = postalCode ? String(postalCode).replace(/"/g, '\\"') : null;

  // 1) ✅ Tentative la plus fiable : name + postal_code / addr:postcode
  if (qPost) {
    const tokenRe = `(^|;)${qPost}(;|$)`;

    const queryPost = `
[out:json][timeout:25];
area["ISO3166-1"="FR"][admin_level=2]->.fr;
(
  relation(area.fr)["boundary"="administrative"]["admin_level"="8"]["name"="${qName}"]["postal_code"~"${tokenRe}"];
  relation(area.fr)["boundary"="administrative"]["admin_level"="8"]["name"="${qName}"]["addr:postcode"="${qPost}"];
);
out center tags 10;
`;
    const { json } = await overpassPost(queryPost, { triesPerEndpoint: 3, timeoutMs: 35000 });
    const el = (json.elements ?? []).find((e) => e.center?.lat && e.center?.lon);
    if (el) return { lat: Number(el.center.lat), lon: Number(el.center.lon) };
  }

  // 2) Fallback : name only
  const queryNameOnly = `
[out:json][timeout:25];
area["ISO3166-1"="FR"][admin_level=2]->.fr;
(
  relation(area.fr)["boundary"="administrative"]["admin_level"="8"]["name"="${qName}"];
);
out center tags 10;
`;
  const { json } = await overpassPost(queryNameOnly, { triesPerEndpoint: 3, timeoutMs: 35000 });
  const el = (json.elements ?? []).find((e) => e.center?.lat && e.center?.lon);

  if (!el) throw new Error("No Overpass geocode result for " + cityName);
  return { lat: Number(el.center.lat), lon: Number(el.center.lon) };
}

async function overpassNearbyMunicipalities(center, radiusM) {
  const query = `
[out:json][timeout:25];
(
  relation
    ["boundary"="administrative"]
    ["admin_level"="8"]
    (around:${radiusM},${center.lat},${center.lon});
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

  // Cache
  let cache = readJson(CACHE_FILE, {});
  if (RESET_CACHE) {
    cache = {};
    writeJson(CACHE_FILE, cache);
    console.log("[info] cache reset:", CACHE_FILE);
  }

  // Exclusions
  const { skipCities, skipIfNearbyIncludesPrefixes } = readSkipConfig();
  console.log("[info] skipCities =", skipCities.length);
  console.log(
    "[info] skipPrefixes =",
    skipIfNearbyIncludesPrefixes.join(", ") || "(none)"
  );

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
    const postalCode = getFirstArrayStringProp(obj, "postalCodes");

    if (!cityName || !citySlug) continue;

    // ✅ Skip list / prefixes
    const existingNearby = getStringArrayProp(obj, "nearbyCities");
    if (
      shouldSkipCity({
        citySlug,
        existingNearby,
        skipCities,
        skipPrefixes: skipIfNearbyIncludesPrefixes,
      })
    ) {
      console.log(`[skip] ${citySlug} (excluded)`);
      continue;
    }

    // Cache utilisable seulement si NEARBY_COUNT villes valides (couvertes) encore présentes
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
      // 1) centre ville (✅ désambiguïsation par code postal)
      const center = await geocodeCityOverpass(cityName, postalCode);
      console.log(
        `[debug] ${citySlug} postal=${postalCode ?? "?"} center=(${center.lat},${center.lon})`
      );

      // 2) communes autour avec fallback sur rayons croissants
      let covered = [];

      for (const radiusM of RADII_M) {
        const raw = await overpassNearbyMunicipalities(center, radiusM);

        const candidates = raw
          .map((c) => ({
            name: c.name,
            slug: c.slug,
            distanceKm: Number(
              haversineKm(center, { lat: c.lat, lon: c.lon }).toFixed(2)
            ),
          }))
          .filter((c) => c.slug && c.slug !== citySlug)
          .sort((a, b) => {
            if (a.distanceKm !== b.distanceKm) return a.distanceKm - b.distanceKm;
            return a.name.localeCompare(b.name, "fr", { sensitivity: "base" });
          });

        covered = candidates.filter((c) => allowedSlugsSet.has(c.slug));

        console.log(
          `[debug] ${citySlug} radius=${radiusM}m candidates=${candidates.length} covered=${covered.length}`
        );

        if (covered.length >= NEARBY_COUNT) break;
      }

      if (covered.length < NEARBY_COUNT) {
        console.warn(
          `[warn] ${citySlug}: only ${covered.length} covered nearby cities found (max radius ${RADII_M[RADII_M.length - 1]}m)`
        );
        continue;
      }

      const picked = covered.slice(0, NEARBY_COUNT).map((c) => c.slug);

      // 3) rewrite + cache
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
