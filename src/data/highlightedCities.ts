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
  // ✅ 77 – Seine-et-Marne (Pôles dynamiques et touristiques)
  "serris",              // Val d'Europe / Prestige
  "meaux",               // Volume et autorité départementale
  "bussy-saint-georges", // Clientèle familiale et active

  // ✅ 93 – Seine-Saint-Denis (Zones denses et Lofts)
  "montreuil",           // Ville phare, secteur en mutation
  "le-raincy",           // Le "Petit Neuilly" du 93 (Prestige)
  "noisy-le-grand",      // Carrefour stratégique de l'Est

  // ✅ 94 – Val-de-Marne (Le triangle d'or du Bois de Vincennes)
  "vincennes",           // La vitrine premium numéro 1
  "saint-maur-des-fosses",// Patrimoine et très haut standing
  "charenton-le-pont"    // Densité et appartements de luxe
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
  "vincennes",          // Incontournable (Prestige + Volume)
  "montreuil",          // Énorme bassin de population (93)
  "saint-maur-des-fosses", // Très haut standing (94)
  "meaux",              // Capitale locale (77), gros volume
  "noisy-le-grand",     // Pôle central entre 93 et 77
  "fontenay-sous-bois", // Ville stratégique (Haut/Bas Fontenay)
  "bussy-saint-georges",// Ville "neuve" très demandeuse en nettoyage
  "chelles",            // Gros volume de recherche (77)
  "nogent-sur-marne",   // Haut standing Bords de Marne
  "charenton-le-pont"   // Très haute densité, cible CSP+
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
