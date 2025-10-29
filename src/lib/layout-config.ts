// src/lib/layout-config.ts
export type StickyShowAfter = 'immediate' | 'scroll';

export interface BottomBarConfig {
  stickyEnabled: boolean;
  stickyShowAfter?: StickyShowAfter;
  stickyMobileOnly?: boolean;
  stickyVariant?: 'orange' | 'white' | 'blue';
  heroSentinelId?: string;
}

const LEGAL_PREFIXES = [
  '/cgv', '/mentions', '/confidentialite', '/privacy'
];

export function getBottomBarConfigForPath(pathname: string): BottomBarConfig {
  const p = (pathname || '/').replace(/\/+$/, '') || '/';

  // Accueil : CTA au-dessus → afficher la bottom bar après scroll
  if (p === '/') {
    return {
      stickyEnabled: true,
      stickyShowAfter: 'scroll',
      stickyMobileOnly: true,
      stickyVariant: 'orange',
      heroSentinelId: 'hero-end-sentinel',
    };
  }

  // Contact & pages légales : désactivée
  if (p.startsWith('/contact') || LEGAL_PREFIXES.some(pref => p.startsWith(pref))) {
    return { stickyEnabled: false };
  }

  // Tout le reste (FAQ, Protocole, À propos, Services internes…) : immédiate
  return {
    stickyEnabled: true,
    stickyShowAfter: 'immediate',
    stickyMobileOnly: true,
    stickyVariant: 'white',
  };
}
// src/lib/layout-config.ts
export type StickyMode = 'immediate' | 'scroll' | 'off';

// Pages où la bottom bar est désactivée (contact + légales)
const OFF_PREFIXES = ['/contact', '/cgv', '/mentions', '/confidentialite', '/privacy'];

/**
 * Liste BLANCHE des pages "scroll" : la bottom bar n'apparaît qu'après
 * avoir dépassé le hero. Tout ce qui n'est pas ici => "immediate" (par défaut).
 *
 * Ajoute ici :
 *  - '/' (home)
 *  - vos LP exactes (ex: '/desinsectisation-punaises-paris')
 *  - ou des motifs regex/prefixes pour des familles de LP (ex: /^\/lp\//)
 */
const SCROLL_WHITELIST: (string | RegExp)[] = [
  '/',                 // home
  /^\/lp\//,           // ex: /lp/… (si tu ranges tes LP dans /lp/)
  /^\/desinsectisation-/, // ex: /desinsectisation-punaises-paris
  // '/traitement-punaises-idf',  // exemple d’URL exacte
];

// Normalise le path (retire les / finaux, garde au moins '/')
function norm(pathname: string): string {
  const p = (pathname || '/').replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

function isOff(p: string): boolean {
  return OFF_PREFIXES.some(pref => p.startsWith(pref));
}

function isInWhitelist(p: string): boolean {
  return SCROLL_WHITELIST.some(rule => {
    if (typeof rule === 'string') return p === rule;       // match exact
    return rule.test(p);                                    // match regex
  });
}

export function inferStickyMode(pathname: string): StickyMode {
  const p = norm(pathname);

  if (isOff(p)) return 'off';         // contact + légales
  if (isInWhitelist(p)) return 'scroll'; // uniquement home + LP listées
  return 'immediate';                 // tout le reste (protocole, FAQ, à-propos…)
}
