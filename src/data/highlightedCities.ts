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
  "meaux",
  "bussy-saint-georges",
  "lagny-sur-marne",
  "torcy",

  // 93 — Seine-Saint-Denis
  "montreuil",  
  "noisy-le-grand",
  "le-raincy",
  "villepinte",
  "bobigny",

  // 94 — Val-de-Marne
  "creteil",
  "vincennes",
  "saint-maur-des-fosses",
  "ivry-sur-seine",
  "le-perreux-sur-mrne",

  // 92

   "Boulogne-Billancourt",
  "Neuilly-sur-Seine",
  "Nanterre",
  "Courbevoie",
  "Sceaux",

  // 95

  "cergy",
  "argenteuil",
  "franconville",
  "herblay-sur-seine",

  // 78 

  "verseailles",
  "saint-germain-en-laye",
  "houilles",


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

   "verseailles",
  "saint-germain-en-laye",
  "houilles",
  // 94 — Val-de-Marne (volume + notoriété)
          // Hub / volume
           // Densité + demandes variées
  "saint-maur-des-fosses",   // Standing + pavillonnaire
  "vincennes",               // Notoriété + CSP+

  // 93 — Seine-Saint-Denis (volume + mix habitats)
  "montreuil",  
  "chelles",             // Volume majeur
        // Très gros volume + mix
                 // Densité + copro / appart
              // Surfaces + pavillons + zones pro

  // 77 — Seine-et-Marne (surfaces + pavillons)
               // Base arrière / volume
  "meaux",                   // Gros volume + grandes surfaces
  "bussy-saint-georges",     // Ville récente / standing
          
  "Boulogne-Billancourt",
  "Neuilly-sur-Seine",
  "Nanterre",

   "cergy",
  "argenteuil",
  "franconville",

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
