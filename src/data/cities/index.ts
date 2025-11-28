// src/data/cities/index.ts

import type { City } from '~/types/geo';

const slugify = (v: string) =>
  v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

function normalizeCity(input: any): City {
  if (!input || typeof input !== 'object') {
    throw new Error(`City object invalid: ${JSON.stringify(input)}`);
  }
  if (!input.name) {
    throw new Error(`City is missing "name": ${JSON.stringify(input)}`);
  }

  return {
    // Champs obligatoires
    name: String(input.name),
    slug: input.slug ?? slugify(String(input.name)),
    postalCodes: Array.isArray(input.postalCodes) ? input.postalCodes : [],

    // Champs optionnels texte
    customDescription: input.customDescription ?? '',
    detailedDescription: input.detailedDescription ?? '',
    ctaOverride: input.ctaOverride ?? '',

    // FAQ & témoignage
    faq: Array.isArray(input.faq) ? input.faq : [],
    testimonial: input.testimonial ?? undefined,

    // Contexte local
    districts: Array.isArray(input.districts) ? input.districts : [],
    landmarks: Array.isArray(input.landmarks) ? input.landmarks : [],
    specificChallenges: Array.isArray(input.specificChallenges)
      ? input.specificChallenges
      : [],

    // 🆕 Pourquoi nous choisir
    whyUsBullets: Array.isArray(input.whyUsBullets)
      ? input.whyUsBullets
      : [],

    // Département & voisinage
    department: input.department ?? undefined,
    nearbyCities: Array.isArray(input.nearbyCities)
      ? input.nearbyCities
      : [],

    // Images
    images: input.images ?? undefined,
    cityImage: input.cityImage ?? undefined,

    // Services locaux
    services: Array.isArray(input.services) ? input.services : [],
  };
}

// --- Auto-import de toutes les villes
const modules = import.meta.glob('./*.ts', { eager: true });
const raws = Object.values(modules)
  .map((m: any) => m?.default)
  .filter(Boolean);

const cities: City[] = raws.map(normalizeCity).sort((a, b) =>
  (a.slug ?? '').localeCompare(b.slug ?? '')
);

export default cities;
