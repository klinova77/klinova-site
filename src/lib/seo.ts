// src/lib/seo.ts — version Klinova (nettoyée et réaliste)
// Gère les titres, descriptions, images OG et noindex automatiques.

export const NOINDEX_PAGES = new Set([
  '/merci', '/merci/',
  '/confirmation', '/confirmation/',
  '/404', '/404/',
  '/admin', '/admin/',
  '/test', '/test/',
  '/dev', '/dev/',
]);

export function shouldNoIndex(pathname: string): boolean {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  if (NOINDEX_PAGES.has(clean) || NOINDEX_PAGES.has(clean + '/')) return true;
  if (
    clean.includes('/admin/') ||
    clean.includes('/test/') ||
    clean.includes('/dev/') ||
    clean.startsWith('/api/')
  ) return true;
  return false;
}

/* ───────────────────────────────────────────────
 * Titre automatique
 * ─────────────────────────────────────────────── */
export function optimizeTitle(title: string): string {
  if (!title) return 'Klinova – Entreprise de nettoyage à Paris et Île-de-France';
  if (title.toLowerCase().includes('klinova')) return title;
  return title.length > 45 ? `${title} | Klinova` : `${title} – Klinova Paris`;
}

/* ───────────────────────────────────────────────
 * Description automatique
 * ─────────────────────────────────────────────── */
export function optimizeDescription(description?: string, pageType?: string): string {
  if (description) return description;

  const defaults: Record<string, string> = {
    home: "Klinova, entreprise de propreté à Paris et en Île-de-France. Nettoyage professionnel de moquettes, parkings et balcons pour particuliers et copropriétés.",
    contact: "Contactez Klinova pour obtenir un devis gratuit de nettoyage à Paris et en Île-de-France. Réponse rapide, intervention rigoureuse et professionnelle.",
    moquettes: "Nettoyage de moquettes et tapis en copropriété ou bureaux à Paris : injection-extraction, brossage, séchage rapide. Devis gratuit.",
    parkings: "Nettoyage complet de parkings souterrains ou extérieurs à Paris : autolaveuse, dégraissage et remise en état professionnelle.",
    balcons: "Nettoyage et désinfection de balcons et garde-corps à Paris : élimination des fientes, lavage haute pression, hygiène durable.",
    balconsFientes: "Traitement et désinfection des balcons infestés de fientes de pigeons à Paris. Intervention sécurisée avec EPI et produits professionnels.",
    terrasses: "Entretien et nettoyage de terrasses à Paris et IDF : décrassage, dégrisage et protection hydrofuge des surfaces minérales.",
    nuisibles: "Traitement professionnel des nuisibles (rats, cafards, punaises de lit) à Paris et en Île-de-France. Interventions certifiées Certibiocide.",
    textiles: "Nettoyage et entretien de textiles d’ameublement à Paris : tissus, rideaux, canapés, moquettes. Méthodes adaptées à chaque fibre.",
    avance: "Découvrez comment bénéficier de l’avance immédiate de crédit d’impôt avec Klinova pour vos prestations de nettoyage à domicile.",
  };

  return defaults[pageType || 'home'];
}

/* ───────────────────────────────────────────────
 * Image OG par défaut selon la page
 * ─────────────────────────────────────────────── */
export function getOgImage(pageType?: string): string {
  const images: Record<string, string> = {
    home: '/images/og/og-home.jpg',
    contact: '/images/og/og-contact.jpg',
    moquettes: '/images/og/og-moquettes.jpg',
    parkings: '/images/og/og-parkings.jpg',
    balcons: '/images/og/og-balcons.jpg',
    balconsFientes: '/images/og/og-balcons-fientes.jpg',
    terrasses: '/images/og/og-terrasses.jpg',
    nuisibles: '/images/og/og-nuisibles.jpg',
    textiles: '/images/og/og-textiles.jpg',
  };
  return images[pageType || 'default'] || '/images/og/og-default.jpg';
}

/* ───────────────────────────────────────────────
 * Build SEO complet (utilisé par SeoBase.astro)
 * ─────────────────────────────────────────────── */
export function buildSeo(input: {
  pathname?: string;
  pageType?: string;
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
  canonical?: string;
  appendBrandToTitle?: boolean;
}) {
  const pathname = input.pathname || '/';
  const noindex =
    typeof input.noindex === 'boolean' ? input.noindex : shouldNoIndex(pathname);

  const baseTitle =
    input.title ||
    guessTitleFromPath(pathname) ||
    'Entreprise de nettoyage à Paris et Île-de-France';

  const title =
    input.appendBrandToTitle === false
      ? baseTitle
      : optimizeTitle(baseTitle);

  const description = optimizeDescription(input.description, input.pageType);
  const ogImage = input.ogImage || getOgImage(input.pageType);
  const canonical = input.canonical || pathname;

  return { title, description, canonical, noindex, ogImage };
}

/* ───────────────────────────────────────────────
 * Génération de titre à partir du chemin
 * ─────────────────────────────────────────────── */
function guessTitleFromPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'Entreprise de nettoyage à Paris';
  const map: Record<string, string> = {
    '/contact': 'Contact',
    '/nettoyage-moquettes': 'Nettoyage de moquettes',
    '/nettoyage-parkings': 'Nettoyage de parkings',
    '/nettoyage-balcons': 'Nettoyage de balcons',
    '/nettoyage-balcons-fientes-pigeons': 'Nettoyage de balcons souillés par des fientes',
    '/nettoyage-terrasses': 'Nettoyage de terrasses',
    '/traitement-nuisibles': 'Traitement des nuisibles',
    '/nettoyage-textiles': 'Nettoyage de textiles d’ameublement',
    '/avance-immediate': 'Avance immédiate de crédit d’impôt',
  };
  const clean = pathname.replace(/\/+$/, '');
  return map[clean] || clean.split('/').pop()?.replace(/[-_]/g, ' ') || '';
}
