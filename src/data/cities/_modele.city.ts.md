modele de city.ts: format attendu


// Balises autorisées :
// <p>, <h3>, <ul>, <li>, <strong>, <br>, <p class="mt-4">
// dans hubIntro / uniqueIntro / uniqueDeepDive / faq / faqAdditions
//
// Règles IMPORTANTES pour <h3> :
//
// 1) Interdiction absolue d’imbriquer un <h3> dans un <p>
//    ❌ <p><h3>...</h3></p>
//
// 2) Un <h3> doit toujours être un bloc HTML autonome,
//    séparé visuellement et structurellement des paragraphes.
//    → Ne jamais écrire un <h3> “collé” à une autre balise.
//    ❌ </p><h3>...</h3>
//    ✅ </p>
//       <h3>...</h3>
//
// 3) Après chaque <h3>, il doit y avoir un ou plusieurs <p>,
//    placés sur des lignes distinctes (jamais sur la même ligne).
//
// 4) La classe <p class="mt-4"> est réservée uniquement
//    aux paragraphes à partir du 2ᵉ paragraphe sous un même <h3>.
//    → Ne jamais utiliser <p class="mt-4"> comme wrapper de titre.
//
// 5) Pattern STRICT recommandé dans uniqueDeepDive :
//
//    <h3>1. ...</h3>
//    <p>Premier paragraphe.</p>
//
//    <h3>2. ...</h3>
//    <p class="mt-4">Premier paragraphe de l’étape 2.</p>
//
//    <h3>3. ...</h3>
//    <p class="mt-4">Premier paragraphe de l’étape 3.</p>





import type { City } from "~/types/geo";

const city: City = {
  name: "",
  slug: "",
  postalCodes: [""],

   department: {
    name: "",
    code: "",
    slug: "",
  },

  customDescription: "",

  hubIntro: "",
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé 
  

  citySpecificChallenges: [],

 

  districts: [],
  nearbyCities: [],

  landmarks: [],

  faq: [],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription: "",
      whyUsBullets: [],

      
uniqueIntro: "",
// - 2 à 3 paragraphes <p>...</p>
// - HTML autorisé
// - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement




      uniqueDeepDive: "",
      // - 2 ou 3 paragraphes <p>...</p>
       // - HTML autorisé 

      specificChallenges: [],

      faqAdditions: [],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription: "",
      whyUsBullets: [],

uniqueIntro: "",
// - 2 à 3 paragraphes <p>...</p>
// - HTML autorisé
// - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: "",
      // - 2 ou 3 paragraphes <p>...</p>
       // - HTML autorisé 

      specificChallenges: [],
      faqAdditions: [],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription: "",
      whyUsBullets: [],

uniqueIntro: "",
// - 2 à 3 paragraphes <p>...</p>
// - HTML autorisé
// - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement


      uniqueDeepDive: "",
      // - 2 ou 3 paragraphes <p>...</p>
      // - HTML autorisé

      specificChallenges: [],
      faqAdditions: [],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription: "",
      whyUsBullets: [],

uniqueIntro: "",
// - 2 à 3 paragraphes <p>...</p>
// - HTML autorisé
// - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: "",
      // - 2 ou 3 paragraphes <p>...</p>
      // - HTML autorisé

      specificChallenges: [],
      faqAdditions: [],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription: "",
      whyUsBullets: [],

uniqueIntro: "",
// - 2 à 3 paragraphes <p>...</p>
// - HTML autorisé
// - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: "",
      // - 2 ou 3 paragraphes <p>...</p>
      // - HTML autorisé

      specificChallenges: [],
      faqAdditions: [],
      ctaOverride: "",
    },
  ],
};

export default city;
