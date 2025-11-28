import type { City } from '~/types/geo';

/**
 * Configuration détaillée pour la ville de Noisy-le-Grand (93160).
 * Toutes les descriptions ont été revues pour améliorer la cohérence
 * éditoriale et l’intégration avec le composant CityPage.
 */

const noisyLeGrand: City = {
  name: 'Noisy-le-Grand',
  slug: 'noisy-le-grand',
  postalCodes: ['93160'],

  customDescription:
    'À la croisée des dynamiques de l’Est parisien, Noisy-le-Grand combine des quartiers d’affaires (Mont d’Est) et de grandes résidences, où l’entretien régulier des parties communes et des parkings est un enjeu majeur de qualité de vie.',

  department: {
    name: 'Seine-Saint-Denis',
    code: '93',
    slug: 'seine-saint-denis',
  },

  districts: [
    'Mont d’Est',
    'Pavé Neuf',
    'Centre-Ville',
    'Maille-Horizon',
    'Buttes-Halage',
  ],

  nearbyCities: [
    'chelles',
    'torcy',
    'neuilly-sur-marne',
    'noisiel',
    'lagny-sur-marne',
  ],

  ctaOverride: '',

  landmarks: [
    'Centre commercial Les Arcades',
    'Gare RER A Noisy-le-Grand Mont d’Est',
    'Mairie de Noisy-le-Grand',
    'Maille-Horizon Nord',
    'Esplanade du Mont d’Est',
  ],

  specificChallenges: [
    'Environnement tertiaire et résidentiel dense (Mont d’Est) avec des moquettes en zones de circulation et bureaux soumises à une usure importante.',
    'Parkings souterrains et aériens à forte fréquentation (Arcades, RER A) exigeant une organisation précise pour ne pas impacter les flux véhicules et piétons.',
    'Terrasses et balcons sur Maille-Horizon exposés aux intempéries, nécessitant une gestion stricte des écoulements pour éviter les désagréments aux étages inférieurs.',
    'Loggias plus abritées (Pavé Neuf) où les dépôts fins (poussières, pollens) s’accumulent et s’incrustent dans les joints et les revêtements poreux.',
    'Nécessité d’interventions en horaires décalés (tôt le matin ou en soirée) pour minimiser la gêne dans les halls, parkings et locaux commerciaux.',
  ],

  whyUsBullets: [
    'Nous maîtrisons les protocoles adaptés aux moquettes très sollicitées des immeubles récents autour du Mont d’Est, garantissant longévité des fibres.',
    'Nous organisons nos interventions dans les parkings (Arcades, RER A) avec des <strong>horaires décalés</strong> et un <strong>balisage sécurisé</strong> des zones de travail.',
    'Nous garantissons la <strong>maîtrise des écoulements</strong> d’eau sur les terrasses exposées (Maille-Horizon) pour éviter tout ruissellement chez les voisins du dessous.',
    'Nous appliquons des protocoles sanitaires stricts pour les balcons souillés par les fientes dans les grands ensembles, incluant EPI et désinfection professionnelle.',
    'Nous proposons des <strong>créneaux flexibles</strong> en soirée ou le samedi afin de réduire l’impact sur les résidences, bureaux et commerces de Noisy-le-Grand.',
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },

faq: [
  {
    question: 'Comment se déroule une intervention à Noisy-le-Grand ?',
    answer:
      'Nous commençons par une reconnaissance rapide des accès, un échange avec vous ou le syndic, puis la validation des zones à traiter. Des protections sont installées si besoin, et l’intervention est réalisée dans le respect des lieux. Un contrôle final a lieu avant notre départ, avec possibilité de compte rendu ou photos sur demande.',
  },
  {
    question: 'Faut-il prévoir une préparation avant votre venue ?',
    answer:
      'Ce n’est pas indispensable. Si possible, libérer les zones concernées et nous transmettre les codes ou consignes d’accès facilite notre intervention. Nous nous adaptons à chaque site : présence d’occupants, contraintes horaires, circulation ou stationnement.',
  },
  {
    question: 'Intervenez-vous uniquement en semaine à Noisy-le-Grand ?',
    answer:
      'Pas uniquement. Nous privilégions les interventions en semaine, mais proposons aussi des créneaux tôt le matin, en soirée ou le week-end si cela limite les nuisances ou facilite l’organisation. Les horaires sont définis avec vous à l’avance.',
  },
]



  services: [
    {
      serviceKey: 'moquettes',
      heroDescription:
        'Nettoyage de moquettes professionnelles et résidentielles à Noisy-le-Grand : élimination des taches incrustées et entretien en profondeur des fibres textiles.',
      uniqueIntro: `<p>À Noisy-le-Grand, les moquettes sont courantes dans les bureaux (Mont d’Est, Côté Gare) comme dans les résidences récentes. Le trafic quotidien, les taches localisées ou les auréoles après incident altèrent leur aspect.</p><p>Nous proposons des créneaux adaptés aux contraintes des sites : <strong>avant 9h, après 19h ou le week-end</strong>, sans interruption d’activité.</p>`,
      uniqueDeepDive: `<p>Notre intervention débute par un repérage technique : type de fibres, niveau d’encrassement, accessibilité (ascenseurs, open-spaces). Cette analyse conditionne le choix des méthodes :</p><ul><li>Prétraitement localisé des taches + brossage mécanique pour décoller les salissures.</li><li><strong>Encapsulation</strong> (séchage rapide 1–2 h) pour les surfaces entretenues régulièrement.</li><li><strong>Injection-extraction contrôlée</strong> pour les moquettes plus encrassées ou anciennes.</li><li>Protocole spécifique après dégât des eaux : contrôle de l’humidité, traitement des auréoles, séchage renforcé.</li></ul><p>Bonnes pratiques : tapis de propreté aux accès, aspiration fréquente, éviter les produits ménagers qui saturent les fibres.</p>`,
      ctaOverride: '',
    },
    {
      serviceKey: 'parkings',
      heroDescription:
        'Nettoyage complet des parkings à Noisy-le-Grand : élimination des poussières, hydrocarbures et taches persistantes dans les sous-sols résidentiels et commerciaux.',
      uniqueIntro: `<p>Les parkings proches du RER A ou du centre commercial Les Arcades supportent un trafic dense et continu. Nous adaptons notre logistique aux contraintes de sécurité et de circulation, en planifiant l’intervention par zones (zones piétonnes, accès véhicules).</p><p>Notre priorité : garantir propreté, accessibilité et respect du planning établi avec la copropriété ou le syndic.</p>`,
      uniqueDeepDive: `<p>Notre protocole de nettoyage comprend :</p><ul><li><strong>Balayage mécanique</strong> initial pour éliminer les débris secs.</li><li>Application d’un <strong>dégraissant professionnel</strong> sur les zones souillées.</li><li><strong>Lavage à l’autolaveuse</strong> avec aspiration intégrée pour un sol propre et non glissant.</li><li>Finition manuelle : taches d’huile, siphons, angles inaccessibles.</li></ul><p>Une signalétique provisoire est mise en place, avec affichage <strong>72 h avant</strong> pour prévenir les usagers. Fréquence recommandée : semestrielle pour les parkings très fréquentés.</p>`,
      ctaOverride: '',
    },
    {
      serviceKey: 'balcons',
      heroDescription:
        'Nettoyage expert des balcons et terrasses à Noisy-le-Grand : élimination des salissures, algues et dépôts liés aux intempéries.',
      uniqueIntro: `<p>À Noisy-le-Grand, les balcons varient selon les quartiers : loggias abritées au Pavé Neuf, grandes terrasses exposées à Maille-Horizon. Chaque configuration nécessite un choix précis de produits et un contrôle des écoulements.</p><p>Nous intervenons sur les dalles, les carrelages, les gardes-corps et les vitrages attenants.</p>`,
      uniqueDeepDive: `<p>Le nettoyage suit un protocole adapté :</p><ul><li>Dépoussiérage à sec pour préparer les surfaces.</li><li>Nettoyage avec un <strong>détergent au pH adapté</strong>.</li><li>Brossage manuel ou mécanique selon le support, puis <strong>rinçage maîtrisé</strong>.</li><li>Finition : vitres, garde-corps, seuils, pour un rendu net et sans traces.</li></ul><p>En cas de mousses ou lichens, nous appliquons un <strong>biocide professionnel</strong> autorisé. Pour les matériaux sensibles comme le grès clair, nous évitons les acides et privilégions un pH neutre.</p>`,
      ctaOverride: '',
    },
    {
      serviceKey: 'balcons-fientes',
      heroDescription:
        'Nettoyage et désinfection des balcons souillés par des fientes à Noisy-le-Grand.',
      uniqueIntro: `<p>Dans certains secteurs (résidences proches des parcs, immeubles à corniches), les balcons sont rapidement souillés par des fientes de pigeons. Ces dépôts posent un risque sanitaire, notamment pour les enfants, les personnes fragiles ou les animaux.</p><p>Nous appliquons un protocole strict, avec EPI, produits désinfectants certifiés, et évacuation des déchets biologiques.</p>`,
      uniqueDeepDive: `<p>Les zones traitées incluent garde-corps (dessus/dessous), appuis, coffres, vitrages. Le protocole :</p><ul><li><strong>Pré-désinfection</strong> avec un produit fongicide/bactéricide (temps de contact respecté).</li><li>Retrait des fientes par raclage ou <strong>aspiration HEPA</strong> (aspirateur avec filtre absolu).</li><li>Nettoyage humide du support, compatible avec les matériaux sensibles.</li><li><strong>Désinfection finale</strong> de la zone + rinçage éventuel.</li></ul><p>Ne pas balayer ou arroser avant notre passage. Sur demande, nous pouvons proposer la pose de <strong>pics ou répulsifs anti-oiseaux</strong>, si autorisée par la copropriété.</p>`,
      ctaOverride: '',
    },
    {
      serviceKey: 'canapes-tapis',
      heroDescription:
        'Nettoyage à domicile des canapés et tapis à Noisy-le-Grand : traitement des taches, auréoles et allergènes.',
      uniqueIntro: `<p>Nous intervenons sur les canapés en tissu tachés (boissons, auréoles, sébum) et les tapis en fibres synthétiques ou naturelles. Un diagnostic préalable permet d’ajuster les produits et techniques selon les matières et couleurs.</p><p>Notre objectif : <strong>un séchage rapide et un usage possible dans la journée</strong>.</p>`,
      uniqueDeepDive: `<p>Canapés :</p><ul><li>Test de compatibilité couleur et tissu.</li><li>Application d’un pré-spray ciblé, brossage doux, puis <strong>extraction maîtrisée</strong>.</li><li>Sur les microfibres, passages croisés pour éviter les auréoles.</li></ul><p>Tapis :</p><ul><li>Ajustement de l’humidité selon la fibre (laine, viscose, jute = faible injection).</li><li>Nettoyage en surface ou en profondeur selon l’épaisseur et le support.</li></ul><p>Conseils : surélever l’assise après intervention. Ne pas utiliser de détachant ménager qui risque de fixer les taches.</p>`,
      ctaOverride: '',
    },
  ],
};

export default noisyLeGrand;
