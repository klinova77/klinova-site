// src/data/cities/index.ts
type City = {
  name: string;
  slug?: string;
  postalCodes?: string[];
  customDescription?: string;
  detailedDescription?: string;
  ctaOverride?: string;
  faq?: { question: string; answer: string }[];
  testimonial?: { text: string; author: string; role: string; building?: string };
  districts?: string[];
  landmarks?: string[];
  specificChallenges?: string[];
  department?: { name: string; slug: string; code?: string }; // ✅ ajouté pour URL


  department?: { name: string; code?: string; slug: string };
  nearbyCities?: string[];
  images?: { heroDesktop?: string; heroMobile?: string };
  services?: { serviceKey: string; uniqueIntro?: string; uniqueDeepDive?: string }[];
};

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
    name: String(input.name),
    slug: input.slug ?? slugify(String(input.name)),
    postalCodes: Array.isArray(input.postalCodes) ? input.postalCodes : [],
    customDescription: input.customDescription ?? '',
    detailedDescription: input.detailedDescription ?? '',
    ctaOverride: input.ctaOverride ?? '',
    faq: Array.isArray(input.faq) ? input.faq : [],
    testimonial: input.testimonial ?? undefined,
    districts: Array.isArray(input.districts) ? input.districts : [],
    landmarks: Array.isArray(input.landmarks) ? input.landmarks : [],
    specificChallenges: Array.isArray(input.specificChallenges) ? input.specificChallenges : [],
    department: input.department ?? undefined,
    
    // 🎯 AJOUTS MANQUANTS :
    services: Array.isArray(input.services) ? input.services : [],
    nearbyCities: Array.isArray(input.nearbyCities) ? input.nearbyCities : [],
    images: input.images ?? undefined,
    cityImage: input.cityImage ?? undefined,
  };



  if (!input.name) {
    throw new Error(`City is missing "name": ${JSON.stringify(input)}`);
  }
  return {
    name: String(input.name),
    slug: input.slug ?? slugify(String(input.name)),
    postalCodes: Array.isArray(input.postalCodes) ? input.postalCodes : [],
    customDescription: input.customDescription ?? '',
    detailedDescription: input.detailedDescription ?? '',
    ctaOverride: input.ctaOverride ?? '',
    faq: Array.isArray(input.faq) ? input.faq : [],
    testimonial: input.testimonial ?? undefined,
    districts: Array.isArray(input.districts) ? input.districts : [],
    landmarks: Array.isArray(input.landmarks) ? input.landmarks : [],
    specificChallenges: Array.isArray(input.specificChallenges) ? input.specificChallenges : [],
    department: input.department ?? undefined,
  };
}

// --- Option A: auto-import de toutes les villes
const modules = import.meta.glob('./*.ts', { eager: true });
const raws = Object.values(modules)
  .map((m: any) => m?.default)
  .filter(Boolean);

const cities: City[] = raws.map(normalizeCity).sort((a, b) =>
  a.slug!.localeCompare(b.slug!)
);

export default cities;      // ✅ indispensable
export type { City };
