// Balises autorisées :
// <p>`, `<h3>`, `<ul>`, `<li>`, `<strong>`, <br>, <p class="mt-4">
// dans hubintro / uniqueintro / uniquedeepdive / faq / faqAddition


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
