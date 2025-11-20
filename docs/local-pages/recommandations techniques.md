# 🔧 Recommandations techniques - Pages locales Klinova

## 🎯 Objectif

Garantir que chaque page locale soit **rapide, indexable et performante** pour maximiser le référencement naturel.

---

## 📱 1. Performance & Core Web Vitals

### A. Largest Contentful Paint (LCP) < 2.5s

**Objectif** : L'élément principal (hero) doit charger rapidement.

**Actions** :
```astro
// ✅ Hero image optimisée
<Image
  src={heroImage}
  alt={`${service.name} professionnel à ${city.name}`}
  loading="eager"                    // Pas de lazy loading pour le hero
  fetchpriority="high"               // Priorité maximale
  decoding="async"                   // Décodage asynchrone
  widths={[640, 768, 1024, 1280, 1536, 1920]}
  sizes="100vw"
  quality={88}                       // Bon compromis qualité/poids
/>
```

**Checklist** :
- [ ] Hero en `eager` + `fetchpriority="high"`
- [ ] Formats modernes (AVIF/WebP) avec fallback JPEG
- [ ] Images dimensionnées correctement (pas de 4000px pour 400px d'affichage)
- [ ] CSS critique inline dans `<head>`
- [ ] Polices système (pas de Google Fonts)

### B. Interaction to Next Paint (INP) < 200ms

**Objectif** : Les interactions utilisateur doivent être fluides.

**Actions** :
```astro
// ✅ CTA sans JavaScript lourd
<a
  href="#contact"
  data-open-popup
  class="inline-flex px-8 py-4 ..."
>
  Demander un devis
</a>

// ❌ ÉVITER onclick avec JS bloquant
<button onclick="heavyFunction()">...</button>
```

**Checklist** :
- [ ] Pas de JS bloquant dans `<head>`
- [ ] Scripts différés avec `defer` ou `type="module"`
- [ ] Événements délégués plutôt qu'attachés individuellement
- [ ] Popups avec HTML/CSS natif (pas de librairie lourde)

### C. Cumulative Layout Shift (CLS) < 0.1

**Objectif** : Éviter les décalages visuels pendant le chargement.

**Actions** :
```astro
// ✅ Dimensions explicites pour images
<Image
  src={heroImage}
  width={1920}
  height={1080}
  alt="..."
/>

// ✅ Espace réservé pour contenu dynamique
<div class="min-h-[400px]">
  <!-- Contenu chargé dynamiquement -->
</div>
```

**Checklist** :
- [ ] Toutes les images ont `width` et `height`
- [ ] Pas de contenu inséré au-dessus du viewport
- [ ] Police système pour éviter FOUT/FOIT
- [ ] Hauteurs minimales pour sections dynamiques

---

## 🔍 2. SEO Technique

### A. Balises meta essentielles

**Structure** :
```astro
---
const pageTitle = `${service.name} à ${city.name} | Intervention Professionnelle – Klinova`;
const description = `${service.defaultDescription} Intervention à ${city.name} et en Île-de-France. Devis gratuit sous 2h.`;
const canonical = `/zones-d-intervention/${citySlug}/${service.key}`;
---

<head>
  <title>{pageTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`https://klinova.fr${canonical}`} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`https://klinova.fr${canonical}`} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={heroImage.src} />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={heroImage.src} />
</head>
```

**Règles** :
- **Title** : 50-60 caractères max, inclure ville + service + marque
- **Description** : 150-160 caractères, inclure CTA ("Devis gratuit", "Intervention rapide")
- **Canonical** : Toujours absolu et HTTPS

### B. Données structurées JSON-LD

**Service Schema** :
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Nettoyage de moquettes",
  "name": "Nettoyage de moquettes à Paris",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Klinova",
    "url": "https://klinova.fr",
    "telephone": "+33676738661",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6 rue d'Armaillé",
      "addressLocality": "Paris",
      "postalCode": "75017",
      "addressCountry": "FR"
    },
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Paris",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "postalCode": "75001",
      "addressCountry": "FR"
    }
  },
  "description": "Nettoyage professionnel de moquettes...",
  "offers": {
    "@type": "Offer",
    "price": "3.00",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "3.00",
      "priceCurrency": "EUR",
      "referenceQuantity": {
        "@type": "QuantitativeValue",
        "value": "1",
        "unitCode": "MTK"
      }
    }
  }
}
```

**FAQPage Schema** :
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien de temps pour nettoyer une moquette ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le nettoyage d'une moquette prend généralement..."
      }
    }
  ]
}
```

**BreadcrumbList Schema** :
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://klinova.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Zones d'intervention",
      "item": "https://klinova.fr/zones-d-intervention"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Paris",
      "item": "https://klinova.fr/zones-d-intervention/paris"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Nettoyage de moquettes",
      "item": "https://klinova.fr/zones-d-intervention/paris/moquettes"
    }
  ]
}
```

### C. Structure HTML sémantique

**Hiérarchie des titres** :
```html
<h1>Nettoyage de moquettes à Paris</h1>

<section>
  <h2>Pourquoi choisir Klinova à Paris ?</h2>
  <!-- Contenu -->
</section>

<section>
  <h2>Comment se déroule l'intervention ?</h2>
  <h3>Étape 1 : Diagnostic</h3>
  <h3>Étape 2 : Prétraitement</h3>
  <!-- ... -->
</section>

<section>
  <h2>Questions fréquentes</h2>
  <h3>Combien de temps pour sécher ?</h3>
  <!-- ... -->
</section>
```

**Règles** :
- [ ] **1 seul H1** par page (titre principal)
- [ ] **H2 pour les sections** principales
- [ ] **H3 pour les sous-sections**
- [ ] Pas de saut de niveau (H2 → H4 interdit)
- [ ] Titres descriptifs (pas "Section 1", "Partie 2")

---

## 🔗 3. Maillage interne

### A. Liens contextuels

**Dans le contenu** :
```astro
<p>
  Klinova intervient également pour le 
  <a href="/nettoyage-parkings" class="text-[#3F8D65] underline">
    nettoyage de parkings
  </a> 
  et le 
  <a href="/nettoyage-balcons" class="text-[#3F8D65] underline">
    nettoyage de balcons
  </a>.
</p>
```

**Vers autres villes** :
```astro
<section>
  <h2>Nous intervenons également dans ces villes</h2>
  <div class="grid md:grid-cols-3 gap-4">
    {otherCitiesForService.map((city) => (
      <a
        href={`/zones-d-intervention/${city.slug}/${service.key}`}
        class="block p-4 border rounded hover:border-[#3F8D65]"
      >
        {service.name} à {city.name}
      </a>
    ))}
  </div>
</section>
```

**Checklist** :
- [ ] Minimum 3 liens internes par page
- [ ] Ancres descriptives (pas "cliquez ici")
- [ ] Liens vers pages complémentaires (pas concurrentes)
- [ ] Attributs `rel` appropriés si nécessaire

### B. Fil d'Ariane (Breadcrumb)

**Implémentation** :
```astro
<nav aria-label="Fil d'Ariane" class="container-responsive py-4">
  <ol class="flex gap-2 text-sm text-[#475569]">
    <li>
      <a href="/" class="hover:text-[#3F8D65]">Accueil</a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <a href="/zones-d-intervention" class="hover:text-[#3F8D65]">
        Zones d'intervention
      </a>
    </li>
    <li aria-hidden="true">/</li>
    <li>
      <a href={`/zones-d-intervention/${citySlug}`} class="hover:text-[#3F8D65]">
        {city.name}
      </a>
    </li>
    <li aria-hidden="true">/</li>
    <li aria-current="page" class="font-medium text-[#1E2939]">
      {service.name}
    </li>
  </ol>
</nav>
```

---

## 📊 4. Analytics & Tracking

### A. Google Analytics 4

**Events personnalisés** :
```javascript
// Dans le composant PopupForm
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'lead_generated',
  service: 'moquettes',
  city: 'paris',
  source: 'citypage-paris-moquettes'
});
```

**Events à tracker** :
- `page_view` : Vue de page (automatique)
- `cta_click` : Clic sur CTA
- `phone_click` : Clic sur numéro de téléphone
- `form_open` : Ouverture du formulaire
- `form_submit` : Envoi du formulaire
- `faq_expand` : Ouverture d'une question FAQ

### B. Google Search Console

**À suivre** :
- **Requêtes** : "nettoyage moquette paris", "nettoyage parking versailles"
- **Positions moyennes** : Objectif top 10 (<= position 10)
- **CTR** : Objectif > 5% pour position 1-3
- **Impressions** : Volume de recherches
- **Pages indexées** : Toutes les pages doivent être indexées

---

## 🚀 5. Optimisations avancées

### A. Lazy loading intelligent

```astro
<!-- Hero : pas de lazy loading -->
<Image src={heroImage} loading="eager" fetchpriority="high" />

<!-- Images dans le contenu : lazy loading -->
<Image src={contentImage} loading="lazy" decoding="async" />

<!-- Images en dessous du pli : lazy loading -->
<Image src={footerImage} loading="lazy" decoding="async" />
```

### B. Préchargement des ressources critiques

```astro
<head>
  <!-- Précharger le hero -->
  <link rel="preload" as="image" href={heroImage.src} />
  
  <!-- Précharger les polices si utilisées -->
  <link rel="preload" href="/fonts/caviar-dreams.woff2" as="font" type="font/woff2" crossorigin />
</head>
```

### C. Cache et CDN

**Headers recommandés** (à configurer sur Vercel) :
```
Cache-Control: public, max-age=31536000, immutable  # Images
Cache-Control: public, max-age=3600                 # Pages HTML
Cache-Control: public, max-age=86400                # CSS/JS
```

---

## ✅ 6. Checklist de validation

### Avant déploiement

#### Technique
- [ ] Lighthouse Score > 90 (Performance, SEO, Accessibility)
- [ ] Core Web Vitals validés (LCP, INP, CLS)
- [ ] Pas d'erreurs console JavaScript
- [ ] Toutes les images ont des `alt` descriptifs
- [ ] Pas de liens cassés (404)

#### SEO
- [ ] Title unique et optimisé
- [ ] Meta description unique
- [ ] H1 unique avec ville + service
- [ ] JSON-LD Service + FAQPage présents
- [ ] Canonical défini
- [ ] Sitemap.xml à jour

#### Contenu
- [ ] Minimum 800 mots de contenu unique
- [ ] Ville mentionnée 7-12 fois naturellement
- [ ] Au moins 3 sections H2
- [ ] FAQ avec minimum 5 questions
- [ ] Pas de duplication avec autres pages

#### Conversion
- [ ] 2 CTA visibles (formulaire + téléphone)
- [ ] Numéro cliquable sur mobile
- [ ] Formulaire fonctionnel
- [ ] Tracking GA4 opérationnel

### Après déploiement

#### Indexation
- [ ] Page indexée dans Google (vérifier Search Console)
- [ ] Pas d'erreurs d'exploration
- [ ] Mobile-friendly test validé
- [ ] Rich results validés (FAQ, Service)

#### Performance
- [ ] PageSpeed Insights > 90
- [ ] GTmetrix Grade A
- [ ] WebPageTest < 3s LCP

---

## 🛠️ 7. Outils de diagnostic

### Performance
```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://klinova.fr/zones-d-intervention/paris/moquettes --view

# WebPageTest API
curl "https://www.webpagetest.org/runtest.php?url=..."
```

### SEO
```bash
# Vérifier les données structurées
curl "https://search.google.com/structured-data/testing-tool"

# Tester les rich results
curl "https://search.google.com/test/rich-results"
```

### Accessibilité
```bash
# axe-core
npm install -g @axe-core/cli
axe https://klinova.fr/zones-d-intervention/paris/moquettes
```

---

## 📈 8. Évolutions recommandées

### Court terme (1 mois)
1. Implémenter **structured data** sur toutes les pages
2. Optimiser **images** (formats AVIF prioritaires)
3. Configurer **rich snippets** dans Search Console
4. Créer **sitemap** dédié pour pages locales

### Moyen terme (3 mois)
1. Ajouter **avis clients** avec schema Review
2. Implémenter **calcul de devis** interactif
3. Créer **pages quartiers** (Paris 16e, etc.)
4. Développer **blog local** (guides par ville)

### Long terme (6 mois)
1. **Réservation en ligne** avec calendrier
2. **Galeries avant/après** avec lightbox
3. **Études de cas** détaillées par ville
4. **Landing pages thématiques** (syndics, hôtels)

---

## 📞 Support technique

### Resources
- **Astro Docs** : https://docs.astro.build
- **Tailwind CSS** : https://tailwindcss.com/docs
- **Google Search Central** : https://developers.google.com/search
- **Web.dev** : https://web.dev/vitals

### Monitoring
- **Google Search Console** : Indexation et erreurs
- **Google Analytics 4** : Trafic et conversions
- **Vercel Analytics** : Performance réelle
- **Sentry** : Erreurs JavaScript (si installé)

---

**Rappel final** : La qualité prime sur la quantité. Mieux vaut 10 pages excellentes que 100 pages médiocres. Google valorise l'expérience utilisateur réelle, pas les pages créées uniquement pour le SEO.