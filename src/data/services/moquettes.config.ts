import type { ServiceConfig } from '~/types/geo';

const moquettesConfig: ServiceConfig = {
  key: 'moquettes',
  name: 'Nettoyage de moquettes',
  defaultDescription: "Nettoyage des moquettes avec détachage ciblé, neutralisation des odeurs et séchage rapide. Résultat homogène et remise en service rapide.",

  benefits: [
    'Extraction haute performance sans sur-mouillage',
    'Produits enzymatiques respectueux de l\'environnement',
    'Séchage accéléré pour remise en service rapide',
    'Traitement spécialisé des taches et auréoles',
    'Protocoles adaptés à chaque type de fibre',
    'Intervention programmée selon vos contraintes'
  ],
  
  process: [
    {
      step: 'Diagnostic et préparation',
      description: 'Évaluation des fibres, identification des taches, protection des zones sensibles et test préalable sur zone cachée'
    },
    {
      step: 'Prétraitement', 
      description: 'Application de pré-spray enzymatique sur les zones critiques et détachage ciblé selon la nature des taches'
    },
    {
      step: 'Nettoyage par injection-extraction',
      description: 'Injection-extraction contrôlée avec régulation d\'humidité pour préserver les fibres et accélérer le séchage'
    },
    {
      step: 'Finitions et séchage',
      description: 'Brossage de finition, ventilation forcée si nécessaire et contrôle qualité avant remise en service'
    }
  ],
  
  equipment: [
    'Extracteurs haute performance',
    'Brosses rotatives adaptées',
    'Produits enzymatiques professionnels', 
    'Ventilateurs de séchage industriels',
    'Détachants spécialisés par type de tache',
    'Équipement de protection des surfaces'
  ],
  
  averageDuration: '3-6 heures selon surface et état',
  
  pricing: {
    from: '10 €',
    unit: 'par m²'
  },
  
  faq: [
    {
      question: 'Combien de temps faut-il pour que la moquette sèche ?',
      answer: 'Grâce à notre technique d\'extraction contrôlée et nos ventilateurs professionnels, le séchage complet est généralement obtenu en 3-6 heures. Les zones peuvent être remises en service progressivement dès 2-3 heures après l\'intervention.'
    },
    {
      question: 'Tous les types de moquettes peuvent-ils être nettoyés ?',
      answer: 'Nous intervenons sur tous types de fibres : synthétiques, laine, aiguilletée, bouclée. Chaque matériau demande une approche différente que nous appliquons après test préalable. Seules certaines fibres très fragiles peuvent nécessiter un nettoyage à sec.'
    },
    {
      question: 'Le nettoyage est-il efficace sur les taches anciennes ?',
      answer: 'Nos produits enzymatiques et nos détachants permettent d\'éliminer la plupart des taches tenaces. Cependant, certaines taches très anciennes ou ayant subi des traitements inadaptés peuvent rester partiellement visibles malgré nos efforts.'
    },
    {
      question: 'À quelle fréquence faut-il faire nettoyer les moquettes ?',
      answer: 'Pour un usage résidentiel normal : 12-18 mois. Pour les zones de fort passage (halls, couloirs de copropriété) : 6-12 mois. Après sinistre ou en cas de taches importantes : intervention dans les meilleurs délais recommandée.'
    },
    {
      question: 'Les produits utilisés sont-ils sans danger ?',
      answer: 'Nous privilégions les produits enzymatiques et écologiques, sans COV nocifs. Nos solutions sont adaptées aux environnements sensibles (crèches, EHPAD) et respectent les normes les plus strictes en matière de sécurité et d\'environnement.'
    }
  ],
  
  urls: {
    parent: '/nettoyage-moquettes'
  },
  
  
};

export default moquettesConfig;