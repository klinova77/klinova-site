/**
 * init-interactions.js
 * Chargement conditionnel et différé des interactions Klinova
 * -------------------------------------------------------------
 * Ce script détecte la présence d’éléments interactifs (popup, FAQ, bar flottante, formulaires)
 * et charge dynamiquement leur JS uniquement si nécessaire.
 * Il n’a aucun impact sur le LCP car tout est déclenché après le rendu principal.
 */

console.info('[Klinova] Initialisation des interactions différées…');

/** Utilitaire : lancement paresseux */
function lazyInit(selector, importer, delay = 0) {
  const el = document.querySelector(selector);
  if (!el) return;

  const start = () => {
    importer()
      .then((m) => m?.default?.() || m?.init?.() || console.warn(`[Klinova] Aucun init trouvé pour ${selector}`))
      .catch((err) => console.error(`[Klinova] Échec import ${selector}`, err));
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(start, { timeout: 4000 + delay });
  } else {
    setTimeout(start, 4000 + delay);
  }
}

/* 🧩 Déclencheurs par type d’interaction */
document.addEventListener('DOMContentLoaded', () => {
  // Popup formulaire (globale dans Layout)
  lazyInit('[data-popup-form]', () => import('/scripts/popup-form.js'));

  // FAQ (accordéons)
  lazyInit('[data-faq]', () => import('/scripts/faq.js'), 500);

  // Barre flottante (mobile CTA)
  lazyInit('[data-floating-bar]', () => import('/scripts/floating-bar.js'), 1000);

  // Formulaires améliorés (upload / validation / tracking)
  lazyInit('form[data-enhanced]', () => import('/scripts/forms.js'), 800);

  console.info('[Klinova] Hooks de chargement différé enregistrés ✅');
});
