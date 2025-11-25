// src/data/services/balcons.config.ts
import type { ServiceConfig } from '~/types/geo';

const balcons: ServiceConfig = {
  key: 'balcons',
  name: 'Nettoyage de balcons',
  defaultDescription:
    "Remise en état de balcons très sales : dépôts urbains, traces d’arrosage, mousses, salissures organiques. Intervention soignée, sans projections chez les voisins.",
  benefits: [
    'Méthodes adaptées aux revêtements (carrelage, béton, pierre, bois composite)',
    'Protocole discret, sans projections vers la façade ou les voisins',
    'Produits professionnels compatibles extérieur, biodégradables',
    'Possibilité de passages réguliers pour l’entretien'
  ],
  process: [
    {
      step: 'Diagnostic & protection',
      description:
        'Repérage des zones sensibles (joints, seuils, garde-corps) et mise en place de protections (portes-fenêtres, écoulements).',
    },
    {
      step: 'Pré-nettoyage',
      description:
        'Balayage, retrait des éléments encombrants, décollement des salissures les plus tenaces.',
    },
    {
      step: 'Nettoyage en profondeur',
      description:
        'Application de produit adapté au support, temps d’action, brossage manuel ou mécanique, rinçage maîtrisé.',
    },
    {
      step: 'Finitions & conseils',
      description:
        'Contrôle visuel avec le client, évacuation des résidus, conseils d’entretien pour garder le balcon propre plus longtemps.',
    },
  ],
  pricing: { from: '150 €', unit: 'balcon' },

  
 faq: [
  {
    question: 'Intervenez-vous sur tous types de balcons et terrasses ?',
    answer:
      'Oui, nous adaptons notre méthode au matériau : carrelage, béton, dalle pierre, bois composite, résine ou revêtement poreux. Nous réalisons toujours un test discret pour ajuster pression, produit et quantité d’eau selon la sensibilité du balcon.'
  },
  {
    question: 'Quels produits utilisez-vous pour nettoyer et désinfecter un balcon ?',
    answer:
      'Nous utilisons un détergent alcalin biodégradable pour décoller la saleté, puis un désinfectant virucide et bactéricides conforme aux normes EN, sans odeur et sans rinçage obligatoire. Les produits sont choisis selon le matériau et les salissures (pollen, dépôts noirs, traces de pots, pollution).'
  },
  {
    question: 'Comment gérez-vous les écoulements d’eau pour éviter de gêner les voisins ?',
    answer:
      'Nous travaillons en quantité d’eau maîtrisée, orientons le rinçage vers l’évacuation prévue, utilisons raclettes et microfibres pour limiter les coulures, et prévenons les voisins si nécessaire. L’objectif est un nettoyage propre, sans nuisance pour l’étage inférieur.'
  },
  {
    question: 'Pouvez-vous traiter les salissures difficiles comme les dépôts noirs, les traces d’arrosage ou la micro-végétation ?',
    answer:
      'Oui. Nous utilisons des brosses adaptées, un prétraitement ciblé et un rinçage contrôlé pour éliminer dépôts noirs, traces d’eau, résidus de pots, algues fines ou poussières incrustées dans les joints. La méthode est ajustée au type de revêtement pour éviter tout risque d’abrasion.'
  },
  {
    question: 'Que faites-vous si le balcon est envahi par les fientes de pigeons ?',
    answer:
      'Nous appliquons d’abord un désinfectant professionnel conforme EN pour neutraliser les agents pathogènes. Les fientes sont humidifiées, retirées en sécurité puis le balcon est nettoyé et désinfecté intégralement. Cette procédure évite la dispersion de poussières et protège l’hygiène du logement.'
  },
  {
    question: 'Faut-il vider complètement le balcon avant votre venue ?',
    answer:
      'Il est préférable de libérer le sol au maximum : plantes, rangements légers, jouets, mobilier. Si certains objets sont lourds ou fragiles, nous adaptons notre intervention mais un espace dégagé permet un nettoyage plus précis et plus homogène.'
  },
  {
    question: 'Intervenez-vous le soir ou le week-end pour limiter la gêne ?',
    answer:
      'Oui, nous pouvons intervenir tôt le matin, en fin de journée ou le week-end selon les contraintes d’accès, le règlement de copropriété et vos disponibilités. Lorsqu’il y a un syndic ou un gardien, nous coordonnons l’horaire à l’avance.'
  }
],

 urls: {
  parent: '/nettoyage-balcons',
},
 
};

export default balcons;
