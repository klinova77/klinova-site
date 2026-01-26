// src/lib/nav.ts
// -----------------------------------------------------------
// 🌐 Structure de navigation – Klinova.fr
// -----------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  enabled?: boolean; // ✅ permet de masquer un lien sans le supprimer
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
// ⚠️ Seuls les services actuellement en ligne sont "enabled:true"
// Les autres sont conservés mais masqués jusqu’à publication.
export const NAV_SERVICES: NavLink[] = [
  { label: 'Nettoyage de moquettes', href: '/nettoyage-moquettes', enabled: true },
  { label: 'Nettoyage fientes de pigeons', href: '/nettoyage-balcons-fientes-pigeons', enabled: true },
  { label: 'Nettoyage de parkings', href: '/nettoyage-parkings', enabled: true },
  { label: 'Nettoyage de terrasses', href: '/nettoyage-terrasses', enabled: true },
  { label: 'Nettoyage de balcons', href: '/nettoyage-balcons', enabled: true },
  { label: 'Grand ménage & remise en état', href: '/nettoyage-appartement-maison', enabled: true },
  { label: 'Nettoyage de canapés, tapis et matelas', href: '/nettoyage-canapes-tapis-matelas', enabled: true },
  
   
  
  
 

  // 🚧 Pages prévues mais pas encore prêtes :
  
  { label: 'Nettoyage de terrasses', href: '/nettoyage-terrasses', enabled: false },
  { label: 'Traitement nuisibles', href: '/traitement-nuisibles', enabled: false },
];

// -----------------------------------------------------------
// 🦶 Liens du footer
// -----------------------------------------------------------
// On garde tout ici, même les pages non prêtes (elles peuvent être
// noindexées ou afficher un message “en cours de création” si besoin).
export const NAV_FOOTER: NavLink[] = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Avance immédiate', href: '/avance-immediate', enabled: false }, // ⚠️ à créer plus tard
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  
];
