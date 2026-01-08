// src/data/highlightedCities.ts

import type { City } from "~/types/geo";
import cities from "~/data/cities";

export interface FeaturedCityKln {
  name: string;
  slug: string;
  deptSlug: string;
  deptCode: string;
}

/**
 * Liste ordonnée de villes "stars" (priorité business/SEO).
 * - /home : topCitiesPerDept max par département (prises dans cet ordre)
 *
 * ⚠️ Important : mets chaque slug UNE seule fois.
 * (si tu le dupliques, tu risques d'avoir 2 fois la même ville dans une UI)
 */
export const FEATURED_CITY_SLUGS = [
  // 77 — Seine-et-Marne
  "chelles",
  "bussy-saint-georges",
  "serris",
  "lagny-sur-marne",

  // 93 — Seine-Saint-Denis
  "montreuil",
  "le-raincy",
  "livry-gargan",
  "gagny",

  // 94 — Val-de-Marne
  "vincennes",
  "saint-maur-des-fosses",
  "charenton-le-pont",
  "creteil",
] as const;




/**
 * Backward compat : ancien nom si jamais déjà utilisé ailleurs
 */
export const HIGHLIGHTED_CITY_SLUGS = [...FEATURED_CITY_SLUGS];

export const featuredCities: FeaturedCityKln[] = FEATURED_CITY_SLUGS
  .map((slug) => {
    const city = (cities as City[]).find((c) => c.slug === slug);
    if (!city?.department?.slug || !city?.department?.code) return null;

    return {
      name: city.name,
      slug: city.slug,
      deptSlug: city.department.slug,
      deptCode: city.department.code,
    };
  })
  .filter(Boolean) as FeaturedCityKln[];

/**
 * Footer : liste dédiée (ex: 10) — indépendante de l’ordre global.
 * Mets ici les villes les plus “business” / les plus recherchées.
 */
export const FOOTER_CITY_SLUGS = [
  "vincennes",              // Prestige + volume (94)
  "saint-maur-des-fosses",  // Très haut standing (94)
  "creteil",                // Hub / volume (94)
  "charenton-le-pont",      // Densité + CSP+ (94)

  "montreuil",              // Volume majeur (93)
  "le-raincy",              // Premium (93)
  "noisy-le-grand",         // Pôle central (93/77)

  "chelles",                // Gros volume (77)
  "bussy-saint-georges",    // Val d'Europe (77)
  "meaux",                  // Gros volume (77)
] as const;


export const footerCities: FeaturedCityKln[] = FOOTER_CITY_SLUGS
  .map((slug) => {
    const city = (cities as City[]).find((c) => c.slug === slug);
    if (!city) return null;
    if (!city.department?.slug || !city.department?.code) return null;

    return {
      name: city.name,
      slug: city.slug,
      deptSlug: city.department.slug,
      deptCode: city.department.code,
    };
  })
  .filter(Boolean) as FeaturedCityKln[];
/**
 * Backward compat : si ton code importe encore highlightedCities
 */
export const highlightedCities = featuredCities;
export type HighlightedCity = FeaturedCityKln;
