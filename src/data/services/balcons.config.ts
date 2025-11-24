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
      q: 'Est-ce que vous utilisez un nettoyeur haute pression ?',
      a: "Pas systématiquement. Nous privilégions des méthodes adaptées au type de balcon et à l’étanchéité. La haute pression peut fragiliser certains joints ou causer des infiltrations. Nous choisissons toujours la technique la plus sûre pour votre support.",
    },
    {
      q: 'Faut-il vider le balcon avant votre venue ?',
      a: "Idéalement, oui : retirer les objets fragiles (plantes, déco, petits meubles) facilite le travail et permet un résultat plus homogène. Si ce n’est pas possible, nous pouvons vous aider à déplacer certains éléments sur place.",
    },
  ],
  patternDefault: 'B',
};

export default balcons;
