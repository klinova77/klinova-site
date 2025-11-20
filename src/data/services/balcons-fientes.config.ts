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
    { q: 'Pose de pics incluse ?', a: 'En option, après accord copropriété. Étude sur place.' },
  ],
  patternDefault: 'C',
};

export default balconsFientes;
