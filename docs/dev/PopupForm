# Guide technique – PopupForm (Klinova)

_ Dernière mise à jour : {{à compléter}} _

---

## 1) Objectif

Popup universel (une seule implémentation) personnalisable par page via des attributs `data-*` posés sur `<body>`. Fallback neutre et sûr si un champ est manquant.

---

## 2) Où est rendu le popup ?

* **`src/components/PopupForm.astro`** : marquage + styles + script.
* **`src/layouts/SiteFrameKlinova.astro`** : insère `<PopupForm />` **une seule fois** et pousse le contexte via `data-*` sur `<body>`.
* **Layouts** qui forwardent le contexte :

  * `Frame.astro` → `SiteFrameKlinova.astro`
  * `LayoutWithCTA.astro` → `BaseLayout.astro` → `SiteFrameKlinova.astro`
  * `LayoutLP.astro` → `FrameLP.astro` (avec `<PopupForm />` si besoin)

> ✅ **Règle d’or :** ne jamais rendre plusieurs `<PopupForm />` sur une même page.

---

## 3) Contexte modifiable (API de page)

Dans la page Astro :

```ts
const popupContext = {
  serviceKey: 'moquette',                 // string court (slug/service)
  serviceLabel: 'Nettoyage de moquette',  // étiquette lisible
  trackingSource: 'popup-moquette',       // identifiant analytics
  presetSubject: 'Devis nettoyage moquette (copro / pro)', // subject par défaut
  title: 'Nettoyage de moquette – Paris', // 1ère ligne du popup (optionnelle)
  subtitle: 'Réponse sous 4h • Possible aujourd\'hui' // 2e ligne (optionnelle)
};
```

Puis passer le contexte au layout :

```astro
<Layout popupContext={popupContext}>
  { /* contenu de page */ }
</Layout>
```

---

## 4) Injection `data-*` sur `<body>`

Fait dans `SiteFrameKlinova.astro` :

```astro
<body
  data-service-key={ctx.serviceKey}
  data-service-label={ctx.serviceLabel}
  data-tracking-source={ctx.trackingSource}
  data-preset-subject={ctx.presetSubject ?? ''}
  data-popup-title={popupContext?.title ?? ''}
  data-popup-subtitle={popupContext?.subtitle ?? ''}
>
```

---

## 5) Lecture côté script (dans PopupForm)

```js
function readPageContext() {
  const b = document.body?.dataset || {};
  return {
    serviceKey: b.serviceKey || 'general',
    serviceLabel: b.serviceLabel || 'Service Klinova',
    trackingSource: b.trackingSource || 'popup-general',
    presetSubject: b.presetSubject || null,
    title: b.popupTitle || null,
    subtitle: b.popupSubtitle || null,
  };
}
```

---

## 6) Règles de fallback (titres)

Dans `openPopupForm()` :

```js
const pc = readPageContext();
const title    = (pc.title    && pc.title.trim())    || 'Contactez-nous';
const subtitle = (pc.subtitle && pc.subtitle.trim()) || 'Réponse sous 4h ouvrées';

popupTitle.querySelector('h2').textContent = title;
const p = popupTitle.querySelector('p');
if (subtitle) {
  p.textContent = subtitle;
  p.style.display = '';
} else {
  p.textContent = '';
  p.style.display = 'none';
}
```

> 🎯 **Variante « zéro texte par défaut »** : remplacer les valeurs par défaut par des chaînes vides, mais **recommander** `Contactez-nous` / `Réponse sous 4h ouvrées` pour robustesse SEO/UX.

---

## 7) Champs « cachés » (hidden inputs)

Alignés avec le back `/api/contact` pour tracer et router :

* `#popup-service-key`  ← `data-service-key`
* `#popup-service-label`← `data-service-label`
* `#popup-subject`      ← `data-preset-subject` **ou** fallback `Devis ${serviceLabel}`

> Utile pour : CRM, routage d’équipe, inbox tagging, reporting acquisition.

---

## 8) Badges de confiance (brand-aware)

Dans `openPopupForm()` :

```js
const brand = document.body?.dataset?.brand || 'klinova';
renderTrustBadges(TRUST_BADGES[brand] || TRUST_BADGES.default);
```

* Prévoir `TRUST_BADGES.klinova`, `TRUST_BADGES.default`, etc.

---

## 9) Triggers & événements

* Triggers auto (timer / scroll / exit) via module interne, désarmés après fermeture/soumission.
* Événements envoyés :

  * `sp:popup_open` (CustomEvent) + `gtag('popup_open')`
  * `sp:popup_close`
  * `form_submit` (conversion)
  * `click_call_alt`

---

## 10) Bonnes pratiques

* **Une seule instance** de `<PopupForm />` par page.
* Toujours forward `popupContext` depuis le layout de page → layout global.
* Ne pas écraser les `data-*` à la main dans des composants enfant.
* Éviter d’inliner un second script qui redéfinit `openPopupForm`.

---

## 11) Débogage rapide

1. Inspecter `<body>` → onglet **Elements** → vérifier `data-popup-title` / `data-popup-subtitle`.
2. Console : `window.openPopupForm('header', { force:true })` pour forcer l’ouverture.
3. Vérifier qu’un seul `<div class="popup-overlay" id="popupOverlay">` est présent dans le DOM.
4. Si textes non mis à jour : vider cache/Hard reload (assets bundlés).

---

## 12) Checklist QA (avant mise en prod)

* [ ] Sur une page avec `popupContext`, le titre & sous-titre s’affichent correctement.
* [ ] Sur la home **sans** `popupContext`, fallback neutre affiché.
* [ ] Les hidden inputs sont correctement remplis (network → `/api/contact`).
* [ ] Le popup s’ouvre via bouton CTA et via triggers auto (si activés).
* [ ] Aucun duplicate `<PopupForm />` dans le DOM.

---

## 13) Extensions possibles

* Support d’icônes par service (`data-icon-set`),
* A/B testing titres via `data-variant`,
* Thèmes CSS (classes `brand--klinova`, etc.),
* Paramètre `disableAutoTriggers` pour LP spécifiques.

---

## 14) Exemples

**Page /nettoyage-moquettes.astro**

```astro
---
import Layout from '../layouts/LayoutWithCTA.astro';
const popupContext = {
  serviceKey: 'moquette',
  serviceLabel: 'Nettoyage de moquette',
  trackingSource: 'popup-moquette',
  presetSubject: 'Devis nettoyage moquette (copro / pro)',
  title: 'Nettoyage de moquette – Paris',
  subtitle: 'Réponse sous 4h • Intervention possible aujourd\'hui'
};
---
<Layout popupContext={popupContext}>
  <!-- contenu -->
</Layout>
```

**LP générique (pas de texte spécifique)**

```astro
<Layout popupContext={{ serviceKey: 'general', trackingSource: 'popup-lp' }}>
  <!-- contenu -->
</Layout>
```

---

## 15) Glossaire

* **Forwarder** : passer les props d’un layout à un autre sans les consommer.
* **Fallback** : valeur par défaut utilisée si la valeur dynamique est absente.
* **Tracking source** : identifiant analytics lisible (ex. `popup-moquette`).
