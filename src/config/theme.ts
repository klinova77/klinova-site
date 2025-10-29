// 🎨 CONFIGURATION GLOBALE DES COULEURS DU SITE
// Change cette valeur pour modifier tous les boutons


// src/config/theme.ts

export const SITE_THEME = {
  action: 'blue-deep' as const,
  bgStyle: 'vibrant' as const, // ⚠️ Pas "backgroundStyle", mais "bgStyle"
} as const;

export type ThemeAction = 'blue' | 'amber' | 'green' | 'blue-deep';
export type BgStyle = 'soft' | 'vibrant' | 'minimal' | 'test';