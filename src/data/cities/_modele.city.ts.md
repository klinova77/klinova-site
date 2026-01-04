🔒 CONSIGNE DE FORMATAGE – À RESPECTER STRICTEMENT
Objectif

Formatter un contenu existant dans le modèle city.ts sans modifier le texte, mais en corrigeant et normalisant le HTML conformément aux règles ci-dessous.

❌ Ce qui est interdit

❌ Aucune modification du texte :

pas de reformulation

pas d’ajout

pas de suppression

pas de déplacement de phrases

❌ Aucun changement de vocabulaire, de ponctuation ou de casse

❌ Aucun enrichissement sémantique

👉 Le texte brut (mots) doit rester strictement identique à celui fourni.

✅ Ce qui est autorisé (et attendu)

✅ Conversion du Markdown vers HTML :

**texte** → <strong>texte</strong>

titres implicites → <h3>

✅ Mise en conformité structurelle HTML :

ajout / correction des balises <p>, <h3>, <ul>, <li>

ajout de <p class="mt-4"> uniquement pour l’espacement autorisé

✅ Respect strict des règles de balisage <h3> (voir ci-dessous)

✅ Placement du contenu dans les bons champs du modèle (hubIntro, uniqueIntro, uniqueDeepDive, faq, faqAdditions, etc.)

👉 Le balisage peut changer, le texte jamais.

🧱 Balises HTML autorisées

Uniquement dans hubIntro / uniqueIntro / uniqueDeepDive / faq / faqAdditions :

<p>, <h3>, <ul>, <li>, <strong>, <br>, <p class="mt-4">

⚠️ Règles STRICTES pour <h3>

1️⃣ Interdiction absolue d’imbriquer un <h3> dans un <p>

❌

<p><h3>...</h3></p>


✅

<h3>...</h3>


2️⃣ Un <h3> doit être un bloc autonome, jamais collé à une autre balise

❌

</p><h3>...</h3>


✅

</p>
<h3>...</h3>


3️⃣ Après chaque <h3>, il doit y avoir un ou plusieurs <p>, sur des lignes distinctes

4️⃣ <p class="mt-4"> :

réservé uniquement aux paragraphes à partir du 2ᵉ paragraphe sous un même <h3>

❌ jamais utilisé comme wrapper de titre

5️⃣ Pattern STRICT recommandé dans uniqueDeepDive

<h3>1. ...</h3>
<p>Premier paragraphe.</p>

<h3>2. ...</h3>
<p class="mt-4">Premier paragraphe de l’étape 2.</p>

<h3>3. ...</h3>
<p class="mt-4">Premier paragraphe de l’étape 3.</p>

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
