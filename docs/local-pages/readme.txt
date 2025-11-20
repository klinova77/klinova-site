📚 Guide d'utilisation - Système de pages locales Klinova
🎯 Page 1 : Vue d'ensemble du système
Architecture générale
Votre système génère automatiquement des pages localisées comme /zones-d-intervention/paris/paris/moquettes en combinant :

Villes (~/data/cities/) → Données géographiques + contenu spécialisé
Services (~/data/services/) → Configurations des prestations
Composant (CityPage.astro) → Template qui affiche tout

Flux de données
1. Fichier ville (ex: chelles.ts) → contient uniqueIntro/uniqueDeepDive
2. Index cities (~/data/cities/index.ts) → normalise et exporte
3. generateCityPaths() → crée les URLs
4. CityPage.astro → reçoit les données et affiche
Rôle de geo.ts
~/types/geo.ts = Contrat de données 📋

Définit les types TypeScript pour tout le système
Assure la cohérence entre villes, services et composant
Évite les erreurs de frappe et bugs runtime
Obligatoire : sans lui, rien ne fonctionne !


🏙️ Page 2 : Structure des fichiers de villes
Localisation : ~/data/cities/chelles.ts
typescriptconst chelles: City = {
  name: 'Chelles',
  slug: 'chelles', 
  department: { name: 'Seine-et-Marne', code: '77', slug: 'seine-et-marne' },
  
  // ✨ CONTENU SPÉCIALISÉ PAR SERVICE
  services: [
    {
      serviceKey: 'moquettes',           // ← Clé qui lie au service
      uniqueIntro: `Texte spécifique...`, // ← Affiché dans section description
      uniqueDeepDive: `Détails tech...`,  // ← Affiché dans section approfondissement
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `Autre texte...`,
      uniqueDeepDive: `Autres détails...`,
    }
  ]
};
Propriétés disponibles par ville

districts → Quartiers (badges)
landmarks → Points de repère
testimonial → Témoignage client
faq → Questions spécifiques à la ville
specificChallenges → Défis locaux


🛠️ Page 3 : Chemin des données vers l'affichage
Étape 1 : Normalisation
typescript// ~/data/cities/index.ts
function normalizeCity(input: any): City {
  return {
    // ... autres propriétés
    services: Array.isArray(input.services) ? input.services : [], // ← CRUCIAL !
  };
}
Étape 2 : Injection dans le composant
typescript// CityPage.astro - ligne ~67
const cityNote: CityServiceNote | undefined = city.services?.find(
  (s: CityServiceNote) => s.serviceKey === service.key  // ← Trouve le bon service
);
Étape 3 : Affichage conditionnel
astro<!-- Section Description (ligne ~320) -->
{(cityNote?.uniqueIntro || city.detailedDescription) && (
  <section>
    {cityNote?.uniqueIntro && <p set:html={cityNote.uniqueIntro} />}
  </section>
)}

<!-- Section Approfondissement (ligne ~420) -->
{cityNote?.uniqueDeepDive && (
  <section>
    <div set:html={cityNote.uniqueDeepDive} />
  </section>
)}

➕ Page 4 : Comment ajouter une nouvelle variable
1. Modifier le type dans geo.ts
typescript// ~/types/geo.ts
export interface CityServiceLocal {
  serviceKey: ServiceKey;
  uniqueIntro?: string;
  uniqueDeepDive?: string;
  nouvellePropriete?: string;  // ← AJOUTER ICI
}
2. Ajouter dans le fichier ville
typescript// ~/data/cities/chelles.ts
services: [
  {
    serviceKey: 'moquettes',
    uniqueIntro: `...`,
    nouvellePropriete: `Mon nouveau contenu !`, // ← AJOUTER ICI
  }
]
3. Afficher dans le composant
astro<!-- CityPage.astro - où vous voulez l'afficher -->
{cityNote?.nouvellePropriete && (
  <section>
    <h2>Ma nouvelle section</h2>
    <div set:html={cityNote.nouvellePropriete} />
  </section>
)}
```

### **⚠️ Important : Toujours respecter l'ordre !**
1. Type → 2. Données → 3. Affichage

---

## 🚀 **Page 5 : Bonnes pratiques et troubleshooting**

### **✅ Bonnes pratiques**
- **Testez toujours** après modification de geo.ts
- **Un service = une section** pour la clarté
- **HTML autorisé** dans uniqueIntro/uniqueDeepDive avec `set:html`
- **Gardez la cohérence** entre villes (même structure)

### **🔧 Résolution des problèmes courants**

**Problème** : `uniqueIntro` ne s'affiche pas
**Solution** : Vérifiez que :
1. `serviceKey` correspond exactement (`'moquettes'` pas `'Moquettes'`)
2. `normalizeCity()` copie bien `input.services`
3. Condition `cityNote?.uniqueIntro` est présente

**Problème** : Erreur TypeScript 
**Solution** : `geo.ts` pas à jour → ajoutez la propriété manquante

**Problème** : Page 404
**Solution** : `generateCityPaths()` ne trouve pas la ville → vérifiez l'export dans `cities/index.ts`

### **📁 Structure finale recommandée**
```
~/types/geo.ts           ← Contrats TypeScript
~/data/cities/index.ts   ← Export des villes
~/data/cities/chelles.ts ← Données Chelles  
~/data/cities/paris.ts   ← Données Paris
~/components/CityPage.astro ← Template d'affichage
🎯 Pour aller plus loin

Ajoutez des images par ville (cityImage)
Créez des FAQ spécialisées (faqAdditions)
Implémentez des études de cas (caseStudy)

Votre système est maintenant opérationnel ! 🚀