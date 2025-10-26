// src/lib/nav.ts
// -----------------------------------------------------------
// Structure de navigation – Klinova.fr
// -----------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// -----------------------------------------------------------
// 🧭 Navigation principale (Header)
// -----------------------------------------------------------
export const NAV_MAIN: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
];

// -----------------------------------------------------------
// 🧹 Sous-menu Services (dropdown ou page dédiée)
// -----------------------------------------------------------
export const NAV_SERVICES: NavLink[] = [
  { label: 'Nettoyage de moquettes', href: '/nettoyage-moquettes' },
  { label: 'Nettoyage de parkings', href: '/nettoyage-parkings' },
  { label: 'Balcons & fientes de pigeons', href: '/nettoyage-balcons' },
  { label: 'Nettoyage de textiles', href: '/nettoyage-textiles' },
  { label: 'Nettoyage de terrasses', href: '/nettoyage-terrasses' },
  { label: 'Traitement nuisibles', href: '/traitement-nuisibles' },
 

];

// -----------------------------------------------------------
// 🦶 Liens du footer
// -----------------------------------------------------------
export const NAV_FOOTER: NavLink[] = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Avance immédiate', href: '/avance-immediate' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
];
