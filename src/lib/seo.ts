// src/lib/seo.ts

export const NOINDEX_PAGES = new Set([
  '/merci','/merci/',
  '/traitement-punaises-de-lit-paris','/traitement-punaises-de-lit-paris/',
  '/confirmation','/confirmation/',
  '/404','/404/',
  '/admin','/admin/',
  '/test','/test/',
  '/dev','/dev/',
]);

export function shouldNoIndex(pathname: string): boolean {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  if (NOINDEX_PAGES.has(clean) || NOINDEX_PAGES.has(clean + '/')) return true;
  if (clean.includes('/admin/') || clean.includes('/test/') || clean.includes('/dev/') || clean.startsWith('/api/')) return true;
  return false;
}

export function optimizeTitle(title: string): string {
  if (!title) return 'Stop-Punaises – Traitement punaises de lit à Paris';
  if (title.toLowerCase().includes('stop-punaises')) return title;
  return title.length > 45 ? `${title} | Stop-Punaises` : `${title} - Stop-Punaises Paris`;
}

export function optimizeDescription(description?: string, pageType?: string): string {
  if (description) return description;
  const defaults: Record<string, string> = {
    contact: "Contactez Stop-Punaises pour un devis gratuit de traitement anti-punaises de lit à Paris et Île-de-France. Intervention rapide, méthodes écologiques.",
    tarifs: "Découvrez nos tarifs transparents pour le traitement des punaises de lit à Paris. Devis gratuit, prix fixes, aucun frais caché. À partir de 290€.",
    faq: "Questions fréquentes sur le traitement des punaises de lit : coût, durée, préparation, efficacité. Réponses d'experts Stop-Punaises.",
    protocole: "Guide complet de préparation avant traitement anti-punaises. Instructions détaillées pour maximiser l'efficacité du traitement professionnel.",
    zones: "Zones d'intervention Stop-Punaises en Île-de-France : Paris, petite couronne, grande couronne. Traitement punaises de lit professionnel.",
  };
  return defaults[pageType || 'default'] ||
    "Traitement professionnel des punaises de lit à Paris et Île-de-France. Devis gratuit, intervention rapide, garantie incluse. Certification Certibiocide.";
}

export function getOgImage(pageType?: string): string {
  const images: Record<string, string> = {
    home: '/images/og/og-home.jpg',
    contact: '/images/og/og-contact.jpg',
    tarifs: '/images/og/og-tarifs.jpg',
    faq: '/images/og/og-faq.jpg',
    protocole: '/images/og/og-protocole.jpg',
    zones: '/images/og/og-zones.jpg',
  };
  return images[pageType || 'default'] || '/images/og/og-default.jpg';
}

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
  const noindex = typeof input.noindex === 'boolean' ? input.noindex : shouldNoIndex(pathname);
  const baseTitle = input.title || guessTitleFromPath(pathname) || 'Traitement punaises de lit';
  const title = input.appendBrandToTitle === false ? baseTitle : optimizeTitle(baseTitle);
  const description = optimizeDescription(input.description, input.pageType);
  const ogImage = input.ogImage || getOgImage(input.pageType);
  const canonical = input.canonical || pathname;
  return { title, description, canonical, noindex, ogImage };
}

function guessTitleFromPath(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'Traitement punaises de lit à Paris';
  const map: Record<string, string> = {
    '/contact': 'Contact',
    '/faq-punaises-de-lit': 'FAQ punaises de lit',
    '/protocole-punaises-de-lit': 'Protocole punaises de lit',
    '/nos-tarifs': 'Nos tarifs',
  };
  const clean = pathname.replace(/\/+$/, '');
  return map[clean] || clean.split('/').pop()?.replace(/[-_]/g, ' ') || '';
}

// (Important) pas de export default ici.
