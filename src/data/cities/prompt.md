// TEMPLATE CITY – Modèle strict pour génération IA
//
// 🎯 OBJECTIF
// Produire un contenu factuel, concret, orienté nettoyage professionnel pour une VILLE donnée.
// Le résultat doit être un objet TypeScript strictement conforme au canevas ci-dessous.
//
// ------------------------------------------------------------
// RÈGLES STRUCTURELLES — À RESPECTER STRICTEMENT
// ------------------------------------------------------------
// - Ne JAMAIS :
//   • ajouter / retirer / renommer une clé
//   • changer un type (string -> array, etc.)
//   • modifier l’ordre des clés
//   • inventer de nouvelles sections
// - Ne JAMAIS modifier les 5 services standards :
//     moquettes / parkings / balcons / balcons-fientes / canapes-tapis
//
// - Tu dois uniquement :
//   • remplir les champs vides ou réécrire les textes existants si demandé
//   • conserver exactement la structure du tableau services[]
//   • garder la structure de faq, testimonial, department, etc.
//
// ------------------------------------------------------------
// STYLE & TON (POUR TOUS LES CHAMPS TEXTE)
// ------------------------------------------------------------
// - Français clair, professionnel, sans ton commercial agressif.
// - Ton “terrain” : concret, technique, crédible, centré sur le nettoyage réel.
// - PAS de brochure touristique.
// - PAS d’affirmations pseudo-scientifiques ou spéculatives :
//   “crues régulières”, “nappe phréatique”, “normes environnementales strictes”, etc.
// - PAS de superlatifs non justifiés (“le plus”, “toujours”, “systématiquement”…).
// - Localiser seulement si c’est neutre (quartiers, types d’immeubles, repères urbains).
// - HTML léger UNIQUEMENT dans les champs qui l’autorisent : <p>, <h3>, <ul>/<li>, <strong>.
// - Interdit partout : <img>, <script>, <style>, données pseudo-factuelles.
//
// ------------------------------------------------------------
// FORMATAGE HTML (LISIBILITÉ DANS LE CODE) – OBLIGATOIRE
// ------------------------------------------------------------
// S’applique UNIQUEMENT à : services[].uniqueIntro et services[].uniqueDeepDive.
//
// - Utiliser des backticks (`...`) pour les chaînes contenant du HTML.
// - Mettre un retour à la ligne après chaque balise fermante </p>, </h3> et </ul>.
// - Chaque <li> doit être sur sa propre ligne, entre <ul> et </ul>.
// - IMPORTANT : INTERDIT de produire tout le HTML sur une seule ligne.
//   Le HTML doit rester lisible pour un développeur humain.
//
// Exemple de format attendu (à IMITER) :
//
// uniqueIntro: `<p>À [NOM DE LA VILLE], les balcons sont souvent utilisés comme de véritables extensions du logement.</p>
// <p>Ils se salissent vite à cause des dépôts de poussière et des micro-végétations.</p>
// <p>Nous adaptons nos méthodes aux revêtements et à la configuration des résidences.</p>`,
//
// uniqueDeepDive: `<h3>Un protocole soigné pour votre balcon</h3>
// <p>Nous utilisons un matériel adapté, basse pression ou vapeur, pour éviter les projections.</p>
// <p>Le protocole comprend :</p>
// <ul>
//   <li>Protection des zones sensibles (portes-fenêtres, garde-corps).</li>
//   <li>Nettoyage du sol, des joints et des bordures.</li>
//   <li>Élimination des mousses, poussières et taches organiques.</li>
// </ul>
// <p>Les eaux sont évacuées de manière contrôlée pour ne pas gêner le voisinage.</p>`,
//
// ------------------------------------------------------------
// DÉFINITION DE CHAQUE CHAMP
// ------------------------------------------------------------
//
// - name / slug / postalCodes :
//     • valeurs exactes de la ville ciblée
//
// customDescription :
// - 1 ou 2 phrases 
// - 20–40 mots
// - TON : descriptif, neutre, **sans argument commercial**
// - Contenu : type de ville + contexte urbain + motifs généraux pouvant influencer l’entretien,
//   MAIS SANS parler des services (pas "nous nettoyons", pas "spécialisés", pas "entretien").
//   Exemples de structure :
//     • « Ville résidentielle située en bord de Marne, [NOM DE LA VILLE] réunit quartiers familiaux, espaces verts et ensembles collectifs récents. »
//     
// - districts :
//     • 3–8 quartiers pertinents (liste simple, pas de descriptions)
//
// - nearbyCities :
//     • 5 ou 6 villes à proximité
//     • slugs simples, sans contexte (ex: "noisiel", "torcy")
//
// - landmarks :
//     • 3–6 repères locaux (gare, parc, centre commercial…)
//     • PAS de descriptions, uniquement les noms
//     • Toujours inclure “Mairie de [NOM DE LA VILLE]” comme repère local.
//
// - specificChallenges :
//     • 3–6 phrases, 15–30 mots chacune
//     • contraintes locales PLAUSIBLES en matière de nettoyage
//     • pas d’explication pseudo-scientifique, pas de phénomènes naturels spéculatifs
//
//
// - whyUsBullets :
//     • 3 à 5 phrases
//     • 15–25 mots chacune
//     • ton orienté avantages : pourquoi confier le nettoyage à Klinova dans cette ville
//     • structure conseillée : commencer souvent par "Nous..." ou "Klinova..."
//     • pas de doublon mot pour mot avec specificChallenges
//
//
// - testimonial :
//     • LAISSER STRICTEMENT VIDE pour l’instant
//     • Ne pas inventer de texte, laisser les 4 champs en chaîne vide ''.
//
// - ctaOverride :
//     • LAISSER STRICTEMENT VIDE pour l’instant
//
//
// - faq (3 items) :
//     • 60–120 mots / réponse
//     • ton informatif, structuré, basé sur les étapes concrètes du travail
//     • PAS de promesses extrêmes (“garanti X mois”, “urgence 24h/24”)
//     • IMPORTANT :
//         – Remplacer [NOM DE LA VILLE] par le vrai nom (Noisiel, Torcy, etc.).
//         – Mentionner clairement que nous pouvons intervenir en journée,
//           le soir ou le week-end si nécessaire.
//         – Ne pas utiliser de balises HTML (<p>, <br>, etc.) dans les réponses.
//
// ------------------------------------------------------------
// NOUVEAU : heroDescription (PAR SERVICE)
// ------------------------------------------------------------
// - Champ heroDescription ajouté dans chaque entrée du tableau services[].
// - C’est le texte utilisé dans le HERO de la page locale.
//
// RÈGLES STRICTES HERO :
//     • 1 seule phrase
//     • 14–22 mots
//     • sans HTML
//     • ton terrain, professionnel, crédible
//     • doit parler du SERVICE dans la VILLE
//     • évoquer 1 PROBLÈME local plausible lié au service (trafic, poussières, passages, résidences, zones commerciales…)
//     • pas de marketing (“meilleur”, “expert”, “premium”), pas de spéculation climatique
//     • ne pas copier uniqueIntro ; produire une formulation dédiée
//
// Exemple : “À Torcy, les parkings des résidences récentes accumulent rapidement poussières et traces d’huile.”
//
// ------------------------------------------------------------
// SERVICES[].uniqueIntro
// ------------------------------------------------------------
//     • 100–160 mots, avec HTML léger (<p>, <ul>/<li>, <strong> autorisés).
//     • Respecter le FORMATAGE HTML décrit plus haut (retours à la ligne).
//     • Décrire les SITUATIONS LOCALES typiques pour CE service dans CETTE ville.
//     • Pas de protocole, uniquement le contexte/enjeux.
//
// ------------------------------------------------------------
// SERVICES[].uniqueDeepDive
// ------------------------------------------------------------
//     • 150–250 mots.
//     • HTML léger uniquement (<p>, <ul>, <li>, <strong>).
//     • STRUCTURE OBLIGATOIRE :
//           <p>1 paragraphe bref de contexte local</p>
//           <ul>
//             <li>étape / matériel / action</li>
//             <li>étape / matériel / action</li>
//             <li>étape / matériel / action</li>
//             <li>étape / contrainte locale</li>
//           </ul>
//           <p>1 paragraphe final : conseils pratiques ou précautions</p>
//     • Le contenu doit décrire un protocole terrain réel
//       pour CE service dans CETTE ville.
//     • Détail attendu : accès, matériel, étapes, contraintes,
//       précautions, points techniques concrets.
//     • ZERO : phénomènes naturels spéculatifs, météo exagérée,
//       discours commercial, superlatifs.
//     • STYLE : technique, concret, crédible, “terrain”.
//     • Ton neutre et professionnel.
// ------------------------------------------------------------

//
// ------------------------------------------------------------
// STRUCTURE INTANGIBLE — À NE PAS MODIFIER
// ------------------------------------------------------------

import type { City } from '~/types/geo';

const TEMPLATE_CITY: City = {
  name: '',
  slug: '',
  postalCodes: [],

  customDescription: '',

  department: {
    name: '',
    code: '',
    slug: ''
  },

  districts: [],
  nearbyCities: [],

  landmarks: [],

  specificChallenges: [],

  whyUsBullets: [],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: ''
  },

  faq: [
    {
      question: 'Comment se déroule une intervention de nettoyage à [NOM DE LA VILLE] ?',
      answer: '… réponse transversale valable pour tous les services …'
    },
    {
      question: 'Faut-il préparer quelque chose avant votre venue à [NOM DE LA VILLE] ?',
      answer: '…'
    },
    {
      question: 'Intervenez-vous plutôt en journée, le soir ou le week-end à [NOM DE LA VILLE] ?',
      answer: '…'
    }
  ],

services: [
  {
    serviceKey: 'moquettes',
    heroDescription: ``,
    uniqueIntro: ``,
    uniqueDeepDive: ``,
    ctaOverride: ``
  },
  {
    serviceKey: 'parkings',
    heroDescription: ``,
    uniqueIntro: ``,
    uniqueDeepDive: ``,
    ctaOverride: ``
  },
  {
    serviceKey: 'balcons',
    heroDescription: ``,
    uniqueIntro: ``,
    uniqueDeepDive: ``,
    ctaOverride: ``
  },
  {
    serviceKey: 'balcons-fientes',
    heroDescription: ``,
    uniqueIntro: ``,
    uniqueDeepDive: ``,
    ctaOverride: ``
  },
  {
    serviceKey: 'canapes-tapis',
    heroDescription: ``,
    uniqueIntro: ``,
    uniqueDeepDive: ``,
    ctaOverride: ``
  }
]

};

export default TEMPLATE_CITY;
