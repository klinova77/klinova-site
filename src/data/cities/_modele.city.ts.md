CONSIGNE DE FORMATAGE V2 — CITY.TS (KLINOVA) — “FORMAT ONLY”
0) Principe non négociable (immutabilité du texte)

Le texte (suite de caractères lisibles) doit rester strictement identique à l’entrée :

pas de reformulation

pas d’ajout / suppression

pas de déplacement de phrases

pas de changement de ponctuation/casse

Seules les balises et la mise en forme TypeScript peuvent changer.

Exceptions techniques tolérées (sans changer les “mots”) :

échappement TS (\", \n) si nécessaire

ajout/suppression de retours à la ligne uniquement pour structurer le HTML (les mots restent identiques)

1) Où le HTML est autorisé (et interdit)
Champs SANS HTML (texte brut uniquement)

name, slug, postalCodes, department.*

customDescription (strictement sans balises)

citySpecificChallenges[], districts[], nearbyCities[], landmarks[]

testimonial.author|role|building (texte brut)

heroDescription, whyUsBullets[], specificChallenges[] (texte brut)

Champs AVEC HTML autorisé

Uniquement :

hubIntro

services[].uniqueIntro

services[].uniqueDeepDive

faq[].answer

services[].faqAdditions[].answer

testimonial.text (si tu veux l’autoriser : sinon tu le gardes brut)

2) Balises HTML autorisées (liste fermée)

Dans les champs HTML (ci-dessus), seulement :
<p>, <p class="mt-4">, <h3>, <ul>, <li>, <strong>, <br>

Tout autre tag rencontré dans l’entrée :

soit converti vers une alternative autorisée (ex : **x** → <strong>x</strong>)

soit retiré en gardant le texte interne identique (ex : <span>texte</span> → texte)

3) Règles STRICTES pour <h3>

Jamais de <h3> dans un <p>

Un <h3> est seul sur sa ligne (bloc autonome)

Après chaque <h3> : au moins un <p>, sur des lignes distinctes

Un bloc <h3> ne peut pas être suivi directement d’un <ul> : il faut au moins un <p> avant la liste

✅ Exemple valide :

<h3>1. Titre</h3>
<p>Paragraphe.</p>
<ul>
  <li>Point</li>
</ul>

4) Règle UNIQUE et cohérente pour <p class="mt-4">

mt-4 sert uniquement à espacer des paragraphes d’un même bloc.

Dans un bloc de paragraphes :

1er paragraphe : <p>…</p>

2e et suivants : <p class="mt-4">…</p>

Donc : jamais mt-4 sur le premier paragraphe d’un bloc (sauf si tu assumes un “bloc” qui commence au 2e paragraphe… mais c’est illogique et source d’erreurs).

5) Format exact attendu par champ
5.1 hubIntro (pattern imposé)

Obligatoire :

<p>…</p>

<p class="mt-4">…</p>

<ul>…</ul> avec li (1 à 6 items, selon contenu)

✅ Structure :

<p>...</p>
<p class="mt-4">...</p>
<ul>
  <li>...</li>
</ul>

5.2 uniqueIntro (services)

2 à 3 paragraphes

1er en <p>, suivants en <p class="mt-4">

5.3 uniqueDeepDive (services)

Recommandation : 3 sections (souvent “1/2/3”), mais tu peux en avoir 2 ou 4 si le contenu source l’impose.

Chaque section :

<h3>…</h3>

puis au moins un <p>…</p>

paragraphes supplémentaires → mt-4

listes autorisées mais jamais directement après <h3>

✅ Pattern recommandé (corrigé, cohérent) :

<h3>1. ...</h3>
<p>Premier paragraphe.</p>
<p class="mt-4">Deuxième paragraphe (si présent).</p>

<h3>2. ...</h3>
<p>Premier paragraphe.</p>

<h3>3. ...</h3>
<p>Premier paragraphe.</p>

5.4 faq[].answer et faqAdditions[].answer

Contenu au minimum : un <p>…</p>

Si plusieurs paragraphes : 1er <p>, suivants mt-4

<h3> est interdit dans les answers FAQ (sinon tu te retrouves avec des “titres” dans des réponses accordion — rarement souhaitable)

6) Conversion Markdown → HTML (sans changer les mots)

Conversions autorisées :

**texte** → <strong>texte</strong>

listes markdown - item → <ul><li>item</li></ul> (en respectant l’ordre)

“titres implicites” (si le contenu source a clairement un titre isolé) :

ligne seule type 1. ... ou Étape 1 – ... → <h3>...</h3>

Interdictions :

inventer des titres

renommer un titre

“résumer” un paragraphe en liste, ou l’inverse, si ça modifie l’ordre/texte

7) Normalisation TypeScript (pour éviter les diffs pourris)

Règles simples (fortement conseillées) :

Backticks obligatoires pour tous les champs HTML (hubIntro, uniqueIntro, uniqueDeepDive, answer, etc.)

même si c’est une seule ligne (ça évite les guillemets cassés)

Strings non-HTML : guillemets doubles "..." (comme ton exemple)

Indentation : 2 espaces

Virgules finales : toujours (style Prettier)

HTML multi-ligne : tu mets les balises sur leurs lignes (lisible + conforme à tes règles <h3>)

✅ Exemple (answer FAQ) :

answer: `<p><strong>Oui...</strong> ...</p>`,

8) Checklist de validation (avant de “considérer OK”)

 Aucun mot modifié (même ponctuation/casse)

 customDescription sans balises

 Dans champs HTML : seulement tags autorisés

 Aucun <h3> dans <p>

 Après chaque <h3> : au moins un <p>

 mt-4 uniquement à partir du 2e paragraphe d’un bloc

 hubIntro = 2 <p> puis <ul>

GABARIT CITY.TS — INCHANGÉ (structure immuable)

À partir de import type { City } ... jusqu’à export default city; :

✅ garder exactement la même structure (mêmes clés, même ordre, mêmes objets imbriqués)

✅ uniquement remplacer les valeurs ("", []) par le contenu fourni

❌ ne pas supprimer les commentaires si tu veux qu’ils servent de garde-fou

Règle de chaînes :

Champs HTML → backticks `...`

Champs texte brut → guillemets doubles "..."


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
// - Sections structurées en <h3> + <p>
// - Après chaque <h3> : au moins un <p>
// - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
// - Listes <ul><li> autorisées, mais jamais directement après <h3>


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
// - Sections structurées en <h3> + <p>
// - Après chaque <h3> : au moins un <p>
// - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
// - Listes <ul><li> autorisées, mais jamais directement après <h3>


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
// - Sections structurées en <h3> + <p>
// - Après chaque <h3> : au moins un <p>
// - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
// - Listes <ul><li> autorisées, mais jamais directement après <h3>


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
// - Sections structurées en <h3> + <p>
// - Après chaque <h3> : au moins un <p>
// - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
// - Listes <ul><li> autorisées, mais jamais directement après <h3>


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
// - Sections structurées en <h3> + <p>
// - Après chaque <h3> : au moins un <p>
// - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
// - Listes <ul><li> autorisées, mais jamais directement après <h3>


      specificChallenges: [],
      faqAdditions: [],
      ctaOverride: "",
    },
  ],
};

export default city;
