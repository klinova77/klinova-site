import type { ServiceConfig } from '~/types/geo';

const canapesTapis: ServiceConfig = {
  key: 'canapes-tapis',
  name: 'Nettoyage de canapés, tapis et matelas',
  defaultDescription:
    "Nettoyage à domicile : test couleurs, pré-spray enzymatique, brossage doux, extraction à faible humidité. Méthodes adaptées aux fibres naturelles.",

  benefits: [
    'Faible humidité',
    'Additifs neutralisants d’odeurs',
    'Compatibilité animaux/enfants',
    'Conseils d’entretien',
  ],

  process: [
    {
      step: 'Diagnostic textile',
      description: 'Test de solidité des couleurs et analyse des fibres pour adapter le traitement.',
    },
    {
      step: 'Pré-traitement ciblé',
      description: 'Application enzymatique sur les taches, brossage souple pour préparation.',
    },
    {
      step: 'Nettoyage par extraction',
      description: 'Injection-extraction avec pression maîtrisée, passes croisées anti-auréoles.',
    },
    {
      step: 'Finitions & conseils',
      description: "Neutralisation d'odeurs, séchage optimisé et recommandations d'entretien.",
    },
  ],

  pricing: { from: '80 €', unit: 'canapé 2 places' },

  faq: [
    {
      question: 'Faut-il préparer quelque chose avant votre intervention sur le canapé ou le tapis ?',
      answer:
        'Rien d’obligatoire. Il suffit de dégager légèrement l’espace autour du canapé ou du tapis pour faciliter l’accès. Si des objets sont fragiles ou sensibles à l’humidité, il est préférable de les déplacer. Nous nous chargeons du reste, y compris de la protection du sol si nécessaire.',
    },
    {
      question: 'Combien de temps faut-il pour que le canapé ou le tapis sèche après le nettoyage ?',
      answer:
        'Le séchage complet prend généralement entre 4 et 8 heures selon la fibre, l’aération du logement et l’humidité ambiante. Nous utilisons un niveau d’humidité contrôlé pour limiter les temps de séchage et vous pouvez accélérer le processus en aérant la pièce ou en laissant tourner la ventilation.',
    },
    {
      question: 'Les taches anciennes ou les mauvaises odeurs peuvent-elles être éliminées ?',
      answer:
        'Nous traitons les taches avec des produits enzymatiques et des techniques adaptées à chaque fibre. La majorité des taches récentes partent très bien ; les taches anciennes ou prétraitées avec des produits inadaptés peuvent laisser une trace résiduelle. Pour les odeurs (animaux, tabac, humidité), le nettoyage en profondeur améliore nettement la situation, mais certaines odeurs très incrustées peuvent nécessiter plusieurs traitements.',
    },
    {
      question: 'Le nettoyage est-il sans danger pour les tissus délicats ou les couleurs ?',
      answer:
        'Oui. Nous réalisons systématiquement un test sur une zone discrète pour vérifier la tenue des couleurs et la réaction du tissu. La méthode est ajustée selon la fibre : microfibre, velours, coton, laine, tapis bouclé, tapis épais. Aucun produit agressif n’est utilisé et les tissus sensibles sont nettoyés avec un minimum d’humidité.',
    },
    {
      question: 'Intervenez-vous le soir ou le week-end si je ne suis pas disponible en journée ?',
      answer:
        'Oui. Nous pouvons intervenir tôt le matin, en soirée ou le week-end selon vos contraintes. Les créneaux sont organisés avec vous à l’avance pour limiter toute gêne et garantir des conditions de travail adaptées.',
    },
    {
      question: 'Puis-je utiliser mon canapé ou marcher sur le tapis juste après le nettoyage ?',
      answer:
        'Vous pouvez circuler brièvement si nécessaire, mais il est recommandé d’attendre la fin du séchage pour retrouver un confort optimal et éviter de réencrasser la fibre. Pour les matelas, un délai d’environ 6 heures est conseillé avant de remettre les draps.',
    },
  ],

  urls: {
    parent: '/nettoyage-canapes-tapis-matelas',
  },
};

export default canapesTapis;
