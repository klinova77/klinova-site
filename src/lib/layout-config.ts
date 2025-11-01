// src/lib/layout-config.ts — version Klinova
// Gère le comportement d’affichage de la barre CTA flottante (mobile).

export type StickyMode = 'immediate' | 'scroll' | 'off';

/* Pages où la bottom bar est désactivée (contact + légales) */
const OFF_PREFIXES = [
  '/contact',
  '/cgv',
  '/mentions',
  '/confidentialite',
  '/privacy',
];

/**
 * Liste BLANCHE des pages où la barre s’affiche après le scroll
 * (donc uniquement après le hero).
 *
 * Typiquement :
 *  - "/" → page d’accueil
 *  - éventuellement certaines LP express plus longues
 */
const SCROLL_WHITELIST: (string | RegExp)[] = [
  '/', // home Klinova
];

/* Normalise le path (retire les / finaux, garde au moins "/") */
function norm(pathname: string): string {
  const p = (pathname || '/').replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

function isOff(p: string): boolean {
  return OFF_PREFIXES.some((pref) => p.startsWith(pref));
}

function isInWhitelist(p: string): boolean {
  return SCROLL_WHITELIST.some((rule) => {
    if (typeof rule === 'string') return p === rule; // match exact
    return rule.test(p); // match regex
  });
}

/**
 * Retourne le mode d’affichage de la barre CTA :
 * - "off"       → pas de barre
 * - "scroll"    → affichée après le hero
 * - "immediate" → visible dès le chargement
 */
export function inferStickyMode(pathname: string): StickyMode {
  const p = norm(pathname);

  if (isOff(p)) return 'off'; // contact + légales
  if (isInWhitelist(p)) return 'scroll'; // home
  return 'immediate'; // pages services, etc.
}
