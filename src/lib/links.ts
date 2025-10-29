// src/lib/links.ts
// -----------------------------------------------------------
// Centralisation de tous les liens + helpers
// -----------------------------------------------------------

import { PHONE_E164, PHONE_DISPLAY, toTelHref } from '~/lib/phone';

export const SITE_URL = 'https://klinova.fr' as const;

// Helpers de base
export const toAbsolute = (url: string) =>
  url.startsWith('http') ? url : `${SITE_URL}${url}`;

export const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

export const linkAttrs = (href: string) => ({
  target: '_top',
  rel: isExternalUrl(href) ? 'noopener noreferrer' : 'noopener',
});

// -----------------------------------------------------------
// 📈 UTM – paramètres de tracking (Google Analytics / Ads)
// -----------------------------------------------------------
export const withUtm = (
  url: string,
  opts?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
    absolute?: boolean;
  }
) => {
  const {
    source = 'cta',
    medium = 'website',
    campaign,
    content,
    term,
    absolute = false,
  } = opts || {};

  const sep = url.includes('?') ? '&' : '?';
  const u =
    `${url}${sep}utm_source=${encodeURIComponent(source)}` +
    `&utm_medium=${encodeURIComponent(medium)}` +
    (campaign ? `&utm_campaign=${encodeURIComponent(campaign)}` : '') +
    (content ? `&utm_content=${encodeURIComponent(content)}` : '') +
    (term ? `&utm_term=${encodeURIComponent(term)}` : '');

  return absolute ? toAbsolute(u) : u;
};

// -----------------------------------------------------------
// 🔗 Liens principaux du site Klinova
// -----------------------------------------------------------

export const LINKS = {
  // Pages principales
  home: '/' as const,
  services: '/#services' as const,
  methode: '/#methode' as const,
  zones: '/#zones' as const,
  references: '/references' as const,
  contactPage: '/contact' as const,
  aPropos: '/a-propos' as const,

  // Pages services
  moquettes: '/nettoyage-moquettes' as const,
  parkings: '/nettoyage-parkings' as const,
  balcons: '/nettoyage-balcons' as const,
  terrasses: '/nettoyage-terrasses' as const,
  nuisibles: '/traitement-nuisibles' as const,
  textiles: '/nettoyage-textiles' as const, 

  // Légales
  mentions: '/mentions-legales' as const,
  cgv: '/cgv' as const,
  confidentialite: '/politique-de-confidentialite' as const,

  // Ancres utiles
  devisForm: '/contact#formulaire' as const,
  contactCoord: '/contact#coordonnees' as const,

  // Externes
  avisGoogle: 'https://g.page/r/XXXXXXXX/review' as const, // (à remplacer)
  linkedin: 'https://www.linkedin.com/company/klinova' as const,

  // Téléphone
  phone: toTelHref(PHONE_E164) as const, // "tel:+33676738661"
} as const;

export type Links = typeof LINKS;
export { PHONE_E164, PHONE_DISPLAY };

// -----------------------------------------------------------
// ⚓ Helpers d’ancres
// -----------------------------------------------------------

/**
 * Crée un lien vers une section (#ancre) d'une page donnée.
 * @example createAnchorLink('/contact', 'formulaire') → "/contact#formulaire"
 * @example createAnchorLink('/', 'formulaire') → "/#formulaire"
 */
export const createAnchorLink = (page: string, anchor: string) =>
  page === '/' ? `/#${anchor}` : `${page}#${anchor}`;

/**
 * Raccourci typé : permet d’utiliser directement les clés de LINKS
 * @example anchorOn('contactPage', 'formulaire') → "/contact#formulaire"
 */
export const anchorOn = (key: keyof typeof LINKS, anchor: string) =>
  createAnchorLink(LINKS[key], anchor);
