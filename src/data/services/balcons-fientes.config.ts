import type { ServiceConfig } from '~/types/geo';

const balconsFientes: ServiceConfig = {
  key: 'balcons-fientes',
  name: 'Balcons – fientes de pigeons (désinfection)',
  defaultDescription:
    "Protocole sanitaire complet : EPI, pré-désinfection, retrait des fientes, nettoyage support, désinfection finale, gestion des déchets. Prévention possible (pics/effaroucheurs).",
  benefits: [
    'EPI & protocole sanitaire',
    'Désinfection avant & après',
    'Aspiration HEPA',
    'Prévention anti-perchoirs'
  ],
  process: [
    { step: 'Sécurisation', description: 'EPI, périmètre et pré-désinfection (temps de contact).' },
    { step: 'Retrait', description: 'Raclage + aspiration HEPA des résidus.' },
    { step: 'Nettoyage', description: 'Produit compatible support, rinçage maîtrisé.' },
    { step: 'Désinfection', description: 'Traitement final et évacuation des déchets.' },
  ],
  pricing: { from: '240 €', unit: 'intervention' },

 faq: [
  {
    question: 'Est-ce dangereux pour la santé de nettoyer soi-même des fientes de pigeons ?',
    answer:
      'Oui, les fientes sèches peuvent contenir des bactéries, champignons et parasites qui se diffusent en poussières. Nous travaillons avec équipements de protection (masques, gants, combinaisons) et un protocole encadré pour éviter l’inhalation ou la projection vers les voisins.'
  },
  {
    question: 'Quels produits utilisez-vous pour désinfecter mon balcon ?',
    answer:
      'Nous utilisons un détergent désinfectant professionnel prêt à l’emploi, sans odeur, conforme aux normes EN1276, EN13697, EN1650 et EN13697. Il permet de nettoyer et désinfecter en une seule étape, sans rinçage obligatoire, tout en restant compatible avec la plupart des sols de balcon.'
  },
  {
    question: 'Faut-il vider complètement le balcon avant votre intervention ?',
    answer:
      'Idéalement, il faut dégager au maximum le sol : meubles légers, bacs, jouets, textile extérieur. Si certains éléments sont lourds ou difficiles à déplacer, nous nous adaptons et travaillons autour, mais plus l’espace est dégagé, plus le nettoyage est efficace et homogène.'
  },
  {
    question: 'Comment évitez-vous que les saletés et produits coulent chez les voisins du dessous ?',
    answer:
      'Nous humidifions d’abord les fientes pour limiter les poussières, puis nous travaillons en quantité d’eau maîtrisée. Quand c’est possible, nous orientons les eaux vers l’évacuation prévue et utilisons raclettes et microfibres pour limiter les coulures. L’objectif est de remettre le balcon au propre sans gêner les voisins.'
  },
  {
    question: 'Au bout de combien de temps puis-je réutiliser mon balcon après votre passage ?',
    answer:
      'En général, le balcon peut être réutilisé dès que les surfaces sont sèches, soit quelques heures après l’intervention selon la météo et l’aération. Le produit que nous utilisons est sans odeur et ne laisse pas de résidus gras : une fois sec, l’espace est de nouveau praticable normalement.'
  },
  {
    question: 'Pouvez-vous aussi prévenir le retour des pigeons après le nettoyage ?',
    answer:
      'Le nettoyage et la désinfection sont notre cœur de mission. Selon les cas, nous pouvons vous conseiller sur les dispositifs anti-pigeons à installer (pics, filets, etc.) ou vous orienter vers un prestataire spécialisé pour la pose. L’important est de traiter d’abord proprement l’existant avant de mettre en place des solutions de prévention.'
  }
],

urls: {
  parent: '/nettoyage-balcons-fientes-pigeons',
},

  
};

export default balconsFientes;
