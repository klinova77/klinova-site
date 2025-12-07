import type { ServiceConfig } from '~/types/geo';

const parkings: ServiceConfig = {
  key: 'parkings',
  name: 'Nettoyage de parkings',
   
  defaultDescription: "Nettoyage et dégraissage de parkings souterrains ou extérieurs avec balayage mécanique, autolaveuse et reprise ciblée des taches d’hydrocarbure.",

    benefits: [
    'Intervention de nuit possible',
    'Balisage & jalonnement clairs',
    'Gestion des eaux sales maîtrisée',
    'Compte-rendu syndic / gardien'
  ],
  process: [
    { step: 'Pré-visite', description: 'Repérage siphons, pentes, zones sensibles, communication.' },
    { step: 'Dégraissage', description: "Application d'un nettoyant alcalin sur les taches d'huile et brossage localisé." },
    { step: 'Autolaveuse', description: 'Lavage, aspiration renforcée et rinçage.' },
    { step: 'Finition', description: 'Contrôle des siphons, suppression des flaques résiduelles, réouverture progressive par zones.', },
  ],
  averageDuration: 'Nuit entière pour 1–2 niveaux',
  pricing: { from: '1 €', unit: 'm²' },
faq: [
  {
    question: 'Faut-il libérer toutes les places avant le nettoyage du parking ?',
    answer: 'Idéalement, nous travaillons par zones : une partie du parking est libérée pendant l’intervention pendant que le reste reste accessible. Nous fournissons le balisage et, si besoin, un modèle d’affichage pour prévenir les résidents ou usagers quelques jours avant le chantier.'
  },
  {
    question: 'Combien de temps le parking reste-t-il indisponible après votre passage ?',
    answer: 'Pour un parking classique de résidence, comptez en général entre 5 et 8 heures d’intervention selon la surface et l’encrassement. Grâce à l’aspiration immédiate des eaux et à la ventilation, les zones traitées peuvent souvent être réouvertes 2 à 4 heures après la fin du nettoyage.'
  },
  {
    question: 'Quels matériels utilisez-vous pour nettoyer un parking ?',
    answer: 'Nous combinons autolaveuse, monobrosse et outils manuels. L’autolaveuse est utilisée pour les grandes allées et les zones dégagées, la monobrosse pour les rampes et les zones très encrassées, et des outils manuels pour les pieds de poteaux, caniveaux et recoins difficiles d’accès.'
  },
  {
    question: 'Les produits utilisés sont-ils agressifs pour le sol ou l’environnement ?',
    answer: 'Nous utilisons des dégraissants alcalins professionnels spécifiquement formulés pour les sols béton et les polluants de type hydrocarbures. Le pH est contrôlé pour ne pas abîmer les revêtements, et les eaux de lavage sont récupérées par aspiration puis évacuées dans le respect des normes environnementales en vigueur.'
  },
  {
    
  question: 'Peut-on nettoyer un parking même s’il n’y a pas d’évacuation d’eau prévue ?',
  answer: `Oui. En l’absence de siphon ou d’évacuation directe, nous adaptons notre méthode avec une récupération complète des eaux par aspiration. Les eaux usées sont ensuite transférées dans des contenants adaptés, puis évacuées selon les consignes du site ou emportées par nos soins si nécessaire.`


  },
  {
    question: 'Proposez-vous des contrats d’entretien régulier pour les parkings ?',
    answer: 'Oui, nous pouvons mettre en place un contrat d’entretien avec 1 à 4 passages par an selon le trafic, la ventilation et l’usage du parking. Cela permet de garder un sol propre, de limiter les dépôts gras et de réduire le coût des gros nettoyages ponctuels.'
  },
  {
    question: 'Intervenez-vous en horaires décalés ou après sinistre ?',
    answer: 'Pour limiter la gêne, nous pouvons intervenir tôt le matin, en soirée ou le week-end, en particulier sur les parkings de bureaux ou les grands ensembles. Après sinistre (incendie, dégât des eaux, fuite importante), un diagnostic rapide est possible afin de coordonner l’intervention avec le gestionnaire et l’assurance.'
  }
],

urls: {
    parent: '/nettoyage-parkings',
  },
 
};

export default parkings;
