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
    'Conseils d’entretien'
  ],
  process: [
    { step: 'Test', description: 'Solidité des couleurs et repérage des zones d’assise.' },
    { step: 'Pré-spray', description: 'Enzymatique ciblé, brossage souple.' },
    { step: 'Extraction', description: 'Pression maîtrisée, passes croisées anti-auréoles.' },
    { step: 'Finitions', description: 'Neutralisation d’odeurs, conseils de séchage.' },
  ],
  pricing: { from: '80 €', unit: 'canapé 2 places' },
  faq: [
    { q: 'Temps de séchage ?', a: '2–4 h avec aération ; microfibres souvent plus rapides.' },
  ],
  patternDefault: 'A',
};

export default canapesTapis;
