import type { ServiceConfig } from '~/types/geo';

const canapesTapis: ServiceConfig = {
  key: 'canapes-tapis',
  name: 'Nettoyage de canapés, tapis et matelas',
   urls: {
    parent: '/nettoyage-canapes-tapis-matelas',
  },
  defaultDescription:
    "Nettoyage de canapés, tapis et matelas avec traitement ciblé des taches et neutralisation des odeurs.",

  ctaOverride: 'réserver une intervention',

  benefits: [
    'Faible humidité',
    'Additifs neutralisants d’odeurs: technologie O.N.T',
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
      description: "Application d'un détergent enzymatique ou alcalin sur les taches, brossage souple pour préparation.",
    },
    {
      step: 'Nettoyage par injection-extraction',
      description: 'Injection-extraction avec pression maîtrisée, passes croisées anti-auréoles.',
    },
    {
      step: 'Finitions et conseils',
      description: "Neutralisation d'odeurs, séchage optimisé et recommandations d'entretien.",
    },
  ],

  pricing: { from: '80 €', unit: 'canapé 2 places' },

  faq: [

     {
      question: 'Intervenez-vous le soir ou le week-end si je ne suis pas disponible en journée ?',
      answer:
        'Oui. Nous pouvons intervenir tôt le matin, en soirée ou le week-end selon vos contraintes. Les créneaux sont organisés avec vous à l’avance pour limiter toute gêne et garantir des conditions de travail adaptées.',
    },
     {
      question: 'Les taches anciennes ou les mauvaises odeurs peuvent-elles être éliminées ?',
      answer:
        'Nous traitons les taches avec des détachants professionnels et des techniques adaptées à chaque fibre. La majorité des taches récentes partent très bien. Les taches anciennes, surtout si elles ont été mal traitées, peuvent laisser une marque. Pour les odeurs (urine, tabac, humidité), le nettoyage en profondeur et nos neutralisateurs d\'odeurs améliorent nettement la situation, mais certaines odeurs très incrustées peuvent nécessiter plusieurs traitements.',
    },
    {
      question: 'Faut-il préparer quelque chose avant votre intervention sur le canapé ou le tapis ?',
      answer:
        'Rien d’obligatoire. Il suffit de dégager légèrement l’espace autour du canapé ou du tapis pour faciliter l’accès. Si des objets sont fragiles ou sensibles à l’humidité, il est préférable de les déplacer. Nous nous chargeons du reste, y compris de la protection du sol si nécessaire.',
    },
    {
      question: 'Combien de temps faut-il pour que le canapé ou le tapis sèche après le nettoyage ?',
      answer:
        'Le séchage complet prend généralement entre 4 et 8 heures selon la fibre, l’aération du logement et l’humidité ambiante.',
    },
    {
      question: 'Les taches anciennes ou les mauvaises odeurs peuvent-elles être éliminées ?',
      answer:
        'Nous traitons les taches avec des détachants professionnels et des techniques adaptées à chaque fibre. La majorité des taches récentes partent très bien. Les taches anciennes, surtout si elles ont été mal traitées, peuvent laisser une marque. Pour les odeurs (urine, tabac, humidité), le nettoyage en profondeur et nos neutralisateurs d\'odeurs améliorent nettement la situation, mais certaines odeurs très incrustées peuvent nécessiter plusieurs traitements.',
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

 
};

export default canapesTapis;
