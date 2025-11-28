// src/data/services/balcons.config.ts
import type { ServiceConfig } from '~/types/geo';

const balcons: ServiceConfig = {
  key: 'balcons',
  name: 'Nettoyage de balcons',
  defaultDescription:
    "Remise en état et entretien de balcons : élimination des dépôts, traces noires, mousses, et salissures organiques. Intervention soignée, sans projections chez les voisins.",
  benefits: [
    'Méthodes adaptées aux revêtements (carrelage, béton, pierre, bois composite)',
    'Protocole discret, sans projections vers la façade ou les voisins',
    'Produits professionnels compatibles extérieur et biodégradables',
    'Possibilité d’entretien régulier'
  ],
  process: [
    {
      step: 'Diagnostic & protection',
      description:
        'Repérage des zones sensibles (joints, seuils...) et mise en place de protections (portes-fenêtres, écoulements).',
    },
    {
      step: 'Pré-nettoyage',
      description:
        'Balayage, retrait des éléments encombrants, décollement des salissures les plus tenaces.',
    },
    {
      step: 'Nettoyage en profondeur',
      description:
        'Application d\'un détergent adapté au support, brossage manuel ou mécanique, rinçage maîtrisé.',
    },
    {
      step: 'Finitions et conseils',
      description:
        'Contrôle visuel avec le client, évacuation des résidus, conseils d’entretien pour garder le balcon propre plus longtemps.',
    },
  ],
  pricing: { from: '150 €', unit: 'balcon' },

  
 faq: [
  {
    question: 'Intervenez-vous sur tous types de balcons et terrasses ?',
    answer:
      'Oui, nous adaptons notre méthode au revêtement : carrelage, béton, dalle pierre, bois composite, résine ou revêtement poreux. Nous réalisons toujours un test discret pour ajuster pression, produit et quantité d’eau selon la surface.'
  },
  {
    question: 'Quels produits utilisez-vous pour nettoyer et désinfecter un balcon ?',
    answer:
      'Nous utilisons un détergent alcalin biodégradable pour décoller la saleté, puis un désinfectant virucide et bactéricide conforme aux normes EN1276, EN13697 et EN1650, sans odeur et sans rinçage obligatoire. Les produits sont choisis selon le matériau et les salissures (pollen, dépôts noirs, traces de pots, pollution).'
  },
  {
    question: 'Comment gérez-vous les écoulements d’eau pour éviter de gêner les voisins ?',
    answer:
      'Nous travaillons en quantité d’eau maîtrisée, orientons le rinçage vers l’évacuation prévue ou utilisons des aspirateurs à eau. Nous utilisons aussi des raclettes et microfibres pour limiter les coulures, et prévenons les voisins si nécessaire. L’objectif est un nettoyage propre, sans nuisance pour les étages inférieurs.'
  },
  {
    question: 'Pouvez-vous traiter les salissures difficiles comme les dépôts noirs, les traces d’arrosage ou la micro-végétation ?',
    answer:
      'Oui. Nous utilisons des brosses adaptées, un prétraitement ciblé et un rinçage contrôlé pour éliminer dépôts noirs, traces d’eau, résidus de pots, algues fines ou poussières incrustées dans les joints. La méthode est ajustée au type de revêtement pour éviter tout risque d’abrasion.'
  },
  {
    question: 'Que faites-vous si le balcon est envahi par les fientes de pigeons ?',
    answer:
      'Nous appliquons d’abord un désinfectant professionnel conforme EN1276, EN13697 et EN1650 pour neutraliser les agents pathogènes. Les fientes sont humidifiées, retirées en sécurité puis le balcon est nettoyé et désinfecté intégralement. Cette procédure évite la dispersion de poussières et protège l’hygiène du logement.'
  },
  {
    question: 'Faut-il vider complètement le balcon avant votre venue ?',
answer:
  'Il est recommandé de dégager au maximum le sol : plantes, rangements légers, jouets, mobilier. Cela permet un nettoyage homogène et sans gêne. Si certains objets sont lourds, fragiles ou destinés à être jetés, nous pouvons nous charger de leur enlèvement sur simple demande.'

  },
  {
    question: 'Intervenez-vous le soir ou le week-end pour limiter la gêne ?',
    answer:
      'Oui, nous pouvons intervenir tôt le matin, en fin de journée ou le week-end selon les contraintes d’accès et vos disponibilités.'
  }
],

 urls: {
  parent: '/nettoyage-balcons',
},
 
};

export default balcons;
