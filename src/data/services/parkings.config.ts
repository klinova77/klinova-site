import type { ServiceConfig } from '~/types/geo';

const parkings: ServiceConfig = {
  key: 'parkings',
  name: 'Nettoyage de parkings souterrains',
  defaultDescription:
    "Remise en état des parkings : dégraissant ciblé, autolaveuse forte aspiration, reprise des gîtes d’hydrocarbures, gestion des eaux et remise en service rapide.",
  benefits: [
    'Intervention de nuit possible',
    'Balisage & jalonnement clairs',
    'Gestion des eaux sales maîtrisée',
    'Compte-rendu syndic / gardien'
  ],
  process: [
    { step: 'Pré-visite', description: 'Repérage siphons, pentes, zones sensibles, communication.' },
    { step: 'Dégraissage', description: 'Application alcaline contrôlée et brossage localisé.' },
    { step: 'Autolaveuse', description: 'Aspiration renforcée et rinçages successifs.' },
    { step: 'Finition', description: 'Contrôle flaques, siphons, réouverture par travées.' },
  ],
  averageDuration: 'Nuit entière pour 1–2 niveaux',
  pricing: { from: '1,80 €', unit: 'm²' },
  faq: [
    { q: 'Faut-il libérer les places ?', a: 'Oui, par zones. Nous fournissons l’affichage et le jalonnement.' },
    { q: 'Refaites-vous le marquage ?', a: 'Possible en option selon l’état des lignes.' },
  ],
  patternDefault: 'B',
};

export default parkings;
