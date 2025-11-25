// TEMPLATE CITY – Modèle strict pour génération IA
//
// 🎯 OBJECTIF
// Produire un contenu factuel, concret, orienté nettoyage professionnel.
// Style = terrain, technique, sans exagération, sans affabuler sur des phénomènes climatiques
// ou géologiques (pas de crues systématiques, nappe phréatique, normes environnementales “strictes”, etc.).
//
// ------------------------------------------------------------
// RÈGLES STRUCTURELLES — À RESPECTER STRICTEMENT
// ------------------------------------------------------------
// - Ne JAMAIS :
//   • ajouter / retirer / renommer une clé
//   • changer un type (string -> array, etc.)
//   • inventer de nouvelles sections
// - Ne JAMAIS modifier les 5 services standards :
//     moquettes / parkings / balcons / balcons-fientes / canapes-tapis
//
// ------------------------------------------------------------
// CONTRAINTES DE CONTENU — OBLIGATOIRES
// ------------------------------------------------------------
// STYLE & TON
// - Français clair, professionnel, sans ton commercial agressif.
// - Ton “terrain” : concret, technique, crédible, centré sur le nettoyage réel.
// - PAS de brochure touristique.
// - PAS d’affirmations ciblées sur géologie, hydraulique, “crues régulières”, “nappe phréatique”, etc.
// - PAS de superlatifs (“le plus”, “toujours”, “régulièrement”, “très fréquemment”) sans base réelle.
// - Localiser seulement si c’est neutre (quartiers, types d’immeubles, repères urbains).
// - HTML léger UNIQUEMENT : <p>, <h3>, <ul>/<li>, <strong>.
// - Interdit : <img>, <script>, <style>, données pseudo-factuelles.
//
// CONTENU PAR CHAMP
// ------------------------------------------------------------
// - name / slug / postalCodes : valeurs exactes
//
// - customDescription :
//     • 1 phrase
//     • 15–25 mots
//     • ton descriptif simple : type de ville + besoins en nettoyage
//
// - districts : 3–8 quartiers pertinents (pas de descriptions inutiles)
//
// - nearbyCities : slugs simples (pas de contexte)
//
// - landmarks :
//     • 3–6 repères locaux (gare, parc, centre commercial…)
//     • PAS de descriptions (juste les noms)
//
// - specificChallenges :
//     • 3–6 phrases, 15–30 mots chacune
//     • contraintes locales plausibles en matière de nettoyage
//     • PAS d’explication technique, PAS de phénomènes “scientifiques”
//
// - testimonial :
//     • LAISSER VIDE (ne pas remplir pour l'instant)
//
// - faq (3 items) :
//     • 60–120 mots / réponse
//     • ton informatif, structuré, basé sur les étapes concrètes du travail
//     • PAS de promesses extrêmes (“garanti X mois”, “urgence 24h/24”)
Remplace [NOM DE LA VILLE] par le vrai nom (Noisiel, Torcy, etc.) dans les questions et réponse (indique qu'on peut intervenir le soir ou le week end si c'est nécessaire, et grosso modo u'on s'adapte aux contraintes du clients pour les 3 questions, mais formule le correctement) et ne met pas de <p> pour les réponses
//
// - services[].uniqueIntro :
//     • 100–160 mots
//     • HTML léger
//     • décrire les situations locales typiques : types d’immeubles, types de clients, configuration des surfaces
//     • PAS d’affirmations non mesurables (“crues”, “normes strictes”, “nappe phréatique”, etc.)
//
// - services[].uniqueDeepDive :
//     • 150–250 mots
//     • HTML léger
//     • expliquer COMMENT le nettoyage se déroule concrètement dans cette ville:
//         – accès
//         – matériels
//         – étapes
//         – précautions typiques (voisinage, escaliers étroits, revêtements sensibles, etc.)
//     • PAS de phénomènes naturels spéculatifs
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
  ctaOverride: '',

  landmarks: [],

  specificChallenges: [],

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
      uniqueIntro: ``,
      uniqueDeepDive: ``
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: ``,
      uniqueDeepDive: ``
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: ``,
      uniqueDeepDive: ``
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: ``,
      uniqueDeepDive: ``
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: ``,
      uniqueDeepDive: ``
    }
  ]
};

export default TEMPLATE_CITY;
