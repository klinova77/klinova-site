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
],



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




import type { City } from "~/types/geo";

const city: City = {
  name: "Noisy-le-Grand",
  slug: "noisy-le-grand",
  postalCodes: ["93160"],

  customDescription:
    "Noisy-le-Grand, commune dynamique de Seine-Saint-Denis aux portes de Marne-la-Vallée, combine patrimoine architectural d'exception et développement urbain moderne. L'entretien des moquettes, parkings et balcons y représente un enjeu constant pour préserver la qualité du cadre de vie.",

  hubIntro:
    "Klinova accompagne les syndics et gestionnaires de Noisy-le-Grand dans la maintenance globale de leurs copropriétés. Notre proximité géographique et notre connaissance des contraintes locales nous permettent d'intervenir rapidement sur l'ensemble du territoire communal.\n\nNous développons des partenariats durables avec les professionnels de l'immobilier, basés sur la rigueur de nos protocoles et la traçabilité complète de nos interventions. Notre approche intègre les spécificités architecturales et urbanistiques de la commune.\n\n• Protocoles adaptés aux grands ensembles résidentiels (Abraxas, Arènes de Picasso)\n• Gestion coordonnée des interventions dans les quartiers à forte densité\n• Reporting détaillé pour syndics et conseils syndicaux exigeants\n• Respect des contraintes de stationnement et d'accès aux résidences",

  localStats: {
    clientsDepartment: 0,
    satisfaction: "4,9/5",
  },

  citySpecificChallenges: [
    "Encrassement accéléré des moquettes dans les halls d'immeubles dû au fort passage piétonnier et à la proximité des axes de transport",
    "Dépôts de particules fines et salissures urbaines sur les balcons exposés à l'autoroute A4",
    "Prolifération de mousses et algues sur les terrasses des quartiers boisés (Bois Saint-Martin, bords de Marne)",
    "Taches d'hydrocarbures persistantes dans les parkings souterrains des grands ensembles résidentiels",
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  districts: [
    "Butte-Verte",
    "Pavé Neuf",
    "Centre-ville",
    "Champy",
    "Clos aux Biches",
    "Cormiers",
    "Coteaux",
    "Grenouillère",
    "Hauts-Bâtons",
    "La Varenne",
    "Marnois",
    "Mont-d'Est",
    "Montfort",
    "Abraxas",
    "Le Palacio",
    "Les Hêtres",
    "Richardets",
    "Rive-Charmante",
    "Villeflix",
    "Yvris",
  ],

  nearbyCities: [
    "neuilly-plaisance",
    "neuilly-sur-marne",
    "gournay-sur-marne",
    "champs-sur-marne",
    "emerainville",
    "pontault-combault",
    "bry-sur-marne",
    "le-plessis-trevise",
    "villiers-sur-marne",
  ],

  landmarks: [
    "Mairie de Noisy-le-Grand",
    "Gare de Noisy-le-Grand - Mont d'Est (RER A)",
    "Gare de Noisy - Champs (RER A)",
    "Centre commercial régional Arcades",
    "Espaces d'Abraxas",
    "Autoroute A4",
  ],

  faq: [
    {
      question:
        "Intervenez-vous rapidement sur Noisy-le-Grand malgré la densité urbaine ?",
      answer:
        "Nos équipes connaissent parfaitement les accès aux différents quartiers de Noisy-le-Grand. Nous planifions nos interventions en tenant compte des contraintes de circulation, notamment aux heures de pointe près des gares RER. Délai moyen d'intervention : 24 à 48h selon l'urgence.",
    },
    {
      question: "Comment gérez-vous les accès sécurisés dans les copropriétés ?",
      answer:
        "Nos techniciens sont équipés de badges Vigik professionnels et s'adaptent aux systèmes d'interphonie spécifiques. Nous coordonnons systématiquement avec les gardiens ou syndics pour les accès aux parties communes, locaux techniques et parkings souterrains.",
    },
    {
      question: "Le déplacement pour devis est-il facturé depuis Paris ?",
      answer:
        "Non, nous proposons des devis gratuits sur Noisy-le-Grand sans facturation de déplacement. Notre technicien se déplace pour évaluer précisément vos besoins et établir un protocole d'intervention adapté aux spécificités de votre copropriété.",
    },
    {
      question: "Pouvez-vous intervenir en urgence après sinistre ?",
      answer:
        "Oui, nous disposons d'une astreinte pour les interventions urgentes : dégâts des eaux, fin de chantier, événements exceptionnels. Nos équipes peuvent se mobiliser sous 2h pour les urgences avérées, avec matériel professionnel et produits adaptés.",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Des moquettes propres et uniformes dans vos halls et escaliers redonnent immédiatement une image soignée à votre copropriété et renforcent le confort de vos résidents.",
      whyUsBullets: [
        "Connaissance des typologies locales : grands ensembles, pavillonnaire, résidences récentes des quartiers en développement",
        "Matériel professionnel d'injection-extraction et produits adaptés aux différents types de fibres et niveaux d'encrassement",
        "Interventions planifiées en dehors des heures de pointe pour limiter les nuisances aux résidents et faciliter nos accès",
        "Reporting détaillé pour syndics avec recommandations d'entretien préventif et calendrier des interventions suivantes",
      ],
      uniqueIntro:
        "Les moquettes des copropriétés de Noisy-le-Grand subissent un encrassement constant. Dans les halls d'entrée proches des gares RER, les traces de boue et de sel hivernal s'accumulent rapidement. Les escaliers des résidences du Mont d'Est et du Pavé-Neuf montrent des signes d'usure prématurée sur les zones de passage. Les taches, auréoles et ternissement général créent une impression de négligence qui impacte directement l'image de l'immeuble.\n\nCette dégradation visible génère des tensions entre résidents et complique la mission des syndics. Les copropriétaires perçoivent ces salissures comme un manque d'entretien, alors qu'un simple aspirateur ne suffit pas à traiter l'encrassement en profondeur. Un nettoyage professionnel structuré permet de restaurer l'aspect d'origine et d'établir un cycle d'entretien efficace.",
      uniqueDeepDive:
        "Notre intervention débute par un diagnostic complet : identification du type de moquette, évaluation de l'encrassement, repérage des taches spécifiques et analyse des contraintes d'accès. Nous adaptons notre approche aux spécificités architecturales de Noisy-le-Grand, notamment les halls ouverts des Espaces d'Abraxas ou les cages d'escaliers étroites du centre-ville. La préparation inclut la protection des murs, le balisage des zones et l'organisation par étages pour limiter les nuisances.\n\nLe nettoyage s'effectue par injection-extraction à l'eau, avec plusieurs passes sur les zones de fort trafic comme les paliers et les premières marches. Nos machines professionnelles permettent une aspiration immédiate de l'eau sale, réduisant considérablement les temps de séchage. Nous gérons rigoureusement l'évacuation des eaux et l'aération pour un retour à la normale sous 24 heures. Un compte-rendu détaillé accompagne chaque intervention, avec recommandations pour optimiser la fréquence d'entretien selon l'exposition aux salissures urbaines.",
      specificChallenges: [
        "Encrassement accéléré des halls proches des gares RER A où l'affluence piétonne et les intempéries créent des salissures importantes",
        "Séchage délicat dans les sous-sols et rez-de-chaussée des grandes résidences où l'humidité naturelle prolonge les temps de remise en service",
        "Gestion des zones de fort passage dans les escaliers des ensembles Abraxas et Arènes de Picasso nécessitant une approche par phases successives",
        "Adaptation aux moquettes anciennes des copropriétés du centre-ville qui demandent des réglages de pression spécifiques pour éviter les dommages",
      ],
      faqAdditions: [
        {
          question:
            "Les halls d'entrée de notre résidence à Noisy-le-Grand sont très exposés aux salissures. Comment traitez-vous ce problème ?",
          answer:
            "Nous adaptons notre protocole aux halls très fréquentés en renforçant le pré-traitement des zones d'entrée et en multipliant les passes d'extraction. Pour les copropriétés proches des gares ou des axes de circulation, nous recommandons un nettoyage semestriel avec entretien intermédiaire par aspiration renforcée. Notre méthode permet de traiter efficacement les traces de boue, sel et particules urbaines qui s'incrustent dans les fibres.",
        },
        {
          question:
            "Intervenez-vous dans tous les types de copropriétés de Noisy-le-Grand ?",
          answer:
            "Nous travaillons aussi bien dans les petites copropriétés du centre-ville que dans les grands ensembles du Mont d'Est ou du Pavé-Neuf. Notre matériel s'adapte aux escaliers étroits comme aux vastes halls d'entrée. Nous intervenons également dans les bureaux et locaux commerciaux qui équipent leurs sols de moquettes. Chaque intervention est calibrée selon la configuration des lieux et les contraintes d'accès.",
        },
        {
          question:
            "Votre méthode d'injection-extraction risque-t-elle d'endommager nos moquettes anciennes ?",
          answer:
            "Notre technique préserve les fibres grâce à des réglages de pression adaptés à chaque type de moquette. L'injection-extraction permet un nettoyage en profondeur sans brossage agressif. Nous testons systématiquement sur une zone discrète avant intervention et ajustons nos paramètres selon l'état et l'âge du revêtement. Cette méthode prolonge la durée de vie des moquettes en éliminant les particules abrasives incrustées.",
        },
        {
          question:
            "Comment organisez-vous l'intervention pour limiter la gêne des résidents ?",
          answer:
            "Nous planifions nos interventions en concertation avec le syndic, généralement en journée pendant les heures de moindre affluence. Le travail s'effectue par zones successives pour maintenir des accès libres. Nous informons les résidents 48h à l'avance et balisons clairement les zones en cours de traitement. Le séchage rapide permet une remise en circulation sous 24h maximum, souvent beaucoup moins selon les conditions d'aération.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking propre et sécurisé renforce immédiatement l'image de votre copropriété et améliore le confort quotidien de vos résidents à Noisy-le-Grand.",
      whyUsBullets: [
        "Connaissance des parkings types de Noisy-le-Grand : sous-sols des grands ensembles, garages des résidences pavillonnaires",
        "Matériel adapté aux contraintes : autolaveuses compactes, haute pression réglable, produits dégraissants professionnels homologués",
        "Organisation par zones pour maintenir l'accès des résidents et interventions programmées aux heures de moindre affluence",
        "Compte-rendu détaillé avec état des évacuations, recommandations d'entretien et planification des interventions suivantes",
      ],
      uniqueIntro:
        "Les parkings souterrains des copropriétés de Noisy-le-Grand accumulent rapidement poussière noire et traces d'hydrocarbures. La proximité de l'autoroute A4 et l'intensité du trafic urbain génèrent des particules qui se déposent sur les sols et les murs. Les marquages au sol s'estompent, les zones de circulation deviennent glissantes et l'éclairage artificiel révèle un encrassement qui ternit l'ensemble.\n\nCette dégradation crée une impression d'insécurité et d'inconfort chez les résidents. Les copropriétaires perçoivent ces espaces négligés comme un défaut d'entretien qui impacte la valeur de leur bien. Un décrassage professionnel redonne lisibilité aux marquages, sécurise les circulations et restaure un environnement propre qui valorise l'immeuble.",
      uniqueDeepDive:
        "Notre diagnostic initial évalue le type de revêtement, l'état des évacuations d'eau et les contraintes d'accès spécifiques à chaque parking. Nous identifions les zones les plus encrassées, notamment les emplacements proches des rampes d'accès et les aires de manœuvre. La préparation comprend un balayage mécanique complet, l'évacuation des déchets et la mise en place d'une signalisation adaptée pour organiser le travail par zones successives sans bloquer totalement l'accès.\n\nLe nettoyage combine autolaveuse pour les surfaces planes et haute pression contrôlée pour les angles et les zones difficiles d'accès. Les taches d'huile font l'objet d'un traitement spécifique avec des dégraissants professionnels. Nous gérons rigoureusement la récupération des eaux de lavage selon les normes environnementales et coordonnons nos interventions avec les gestionnaires pour maintenir un service minimal. Une inspection finale vérifie la propreté des évacuations et la remise en état des marquages de sécurité.",
      specificChallenges: [
        "Encrassement accéléré lié à la proximité de l'autoroute A4 qui génère des particules de combustion et des poussières routières persistantes",
        "Évacuation difficile des eaux de lavage dans les parkings anciens où les siphons sont insuffisants ou obstrués",
        "Gestion des rotations de véhicules dans les sous-sols des grands ensembles du Mont d'Est où la densité d'occupation limite les zones de travail",
        "Traitement des taches d'hydrocarbures anciennes sur béton poreux nécessitant plusieurs passages avec des temps de contact prolongés",
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi les parkings de Noisy-le-Grand s'encrassent-ils si rapidement ?",
          answer:
            "La proximité de l'autoroute A4 et la circulation urbaine intense génèrent des particules fines qui se déposent sur les véhicules puis au sol. Cette poussière grasse se mélange aux traces d'huile et crée un encrassement tenace. Les parkings fermés accumulent ces polluants sans évacuation naturelle. Un nettoyage professionnel semestriel permet de rompre ce cycle d'encrassement et de maintenir un environnement sain.",
        },
        {
          question:
            "Faut-il évacuer tous les véhicules pendant l'intervention ?",
          answer:
            "Non, nous organisons le travail par zones successives pour maintenir l'usage du parking. Nous coordonnons avec le gestionnaire ou le syndic pour identifier les créneaux les plus favorables et informons les résidents des zones temporairement inaccessibles. Cette méthode permet de nettoyer efficacement sans paralyser complètement l'accès aux véhicules. La durée d'intervention par zone varie selon la superficie et l'encrassement.",
        },
        {
          question:
            "Pouvez-vous éliminer les taches d'huile anciennes et incrustées ?",
          answer:
            "Nous traitons les taches d'hydrocarbures avec des dégraissants professionnels spécifiques, mais les résultats dépendent de l'ancienneté et de la pénétration dans le béton. Les taches récentes disparaissent généralement complètement, tandis que les taches anciennes peuvent laisser une légère trace résiduelle. Nous évaluons chaque situation lors du diagnostic et vous informons des résultats attendus pour éviter toute déception.",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux de lavage ?",
          answer:
            "Nous récupérons systématiquement les eaux souillées avec nos équipements d'aspiration et les évacuons via des filières agréées. Cette approche respecte la réglementation environnementale et évite tout rejet direct dans les réseaux d'eaux pluviales. Nous vérifions également l'état des siphons existants et signalons tout dysfonctionnement qui pourrait compromettre l'évacuation future des eaux de pluie ou de lavage.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS / TERRASSES
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Retrouvez un balcon propre et accueillant où vous aurez de nouveau plaisir à prendre vos repas, recevoir ou simplement vous détendre dans votre logement à Noisy-le-Grand.",
      whyUsBullets: [
        "Connaissance des typologies locales : balcons des grands ensembles, terrasses des résidences récentes, loggias du centre-ville",
        "Produits adaptés aux différents supports et techniques préservant joints, revêtements et étanchéité des balcons",
        "Interventions discrètes en journée avec protection du mobilier et respect des contraintes de voisinage",
        "Conseils personnalisés pour l'entretien courant et la préservation des résultats obtenus",
      ],
      uniqueIntro:
        "Les balcons des appartements de Noisy-le-Grand subissent un encrassement constant qui décourage leur utilisation. Les dépôts de pollution urbaine, renforcés par la proximité de l'autoroute A4, noircissent rapidement les joints et ternissent les revêtements. Les résidus végétaux des nombreux espaces verts se mélangent aux poussières pour former une couche grasse difficile à éliminer. Les traces d'eau persistent après chaque pluie, créant des auréoles disgracieuses.\n\nFace à cette accumulation, beaucoup de résidents renoncent à investir leur balcon, le transformant en simple espace de stockage. L'impression de saleté permanente décourage tout aménagement et prive les occupants d'un véritable espace de vie extérieur. Un nettoyage professionnel structuré permet de retrouver un balcon propre et agréable, redevenu un atout pour le logement.",
      uniqueDeepDive:
        "Notre intervention commence par la protection soigneuse de la porte-fenêtre et des éléments sensibles. Nous déplaçons ou protégeons le mobilier, les plantes et les objets présents avant d'évacuer manuellement les gros dépôts : feuilles, terre, résidus divers. Cette préparation minutieuse évite la dispersion des salissures et facilite le nettoyage des surfaces. Nous adaptons ensuite nos produits au type de revêtement : carrelage, béton, dalles ou bois composite.\n\nLe nettoyage proprement dit combine application de produits spécifiques, brossage adapté et rinçage contrôlé. Nous portons une attention particulière aux joints, angles et garde-corps où l'encrassement est le plus tenace. La gestion de l'eau constitue un point crucial : nous dirigeons systématiquement les écoulements vers l'évacuation prévue et utilisons des techniques qui évitent les coulures le long de la façade. Un dernier rinçage à l'eau claire finalise l'intervention. Nous conseillons ensuite un séchage naturel et prodiguons quelques recommandations d'entretien simple pour prolonger le résultat.",
      specificChallenges: [
        "Encrassement accéléré des balcons exposés à l'autoroute A4 où les particules de combustion se mélangent aux résidus urbains",
        "Gestion délicate de l'évacuation d'eau sur les balcons anciens dépourvus de siphon adapté ou présentant des défauts d'étanchéité",
        "Contraintes de voisinage dans les immeubles denses où le bruit et les projections d'eau doivent être maîtrisés",
        "Traitement des joints très encrassés des balcons orientés nord où l'humidité persistante favorise le développement de mousses et dépôts verts",
      ],
      faqAdditions: [
        {
          question:
            "Le nettoyage haute pression risque-t-il d'endommager mon carrelage ou mes joints ?",
          answer:
            "Nous adaptons systématiquement la pression et l'angle de projection selon le type de revêtement et l'état des joints. Notre méthode privilégie des pressions modérées combinées aux bons produits plutôt qu'un forçage mécanique. Nous testons toujours sur une zone discrète et ajustons nos réglages pour préserver l'intégrité des surfaces. Cette approche garantit un nettoyage efficace sans risquer d'endommager votre balcon.",
        },
        {
          question:
            "Comment évitez-vous que l'eau sale coule chez mes voisins du dessous ?",
          answer:
            "Nous dirigeons systématiquement les écoulements vers l'évacuation prévue à cet effet et utilisons des techniques qui limitent le ruissellement le long de la façade. Notre matériel permet un rinçage maîtrisé et nous intervenons par petites zones pour contrôler les flux d'eau. En cas de balcon sans évacuation adaptée, nous récupérons les eaux sales avec nos équipements d'aspiration pour éviter tout désagrément pour le voisinage.",
        },
        {
          question:
            "Vos produits de nettoyage sont-ils dangereux pour mes plantes et mes animaux ?",
          answer:
            "Nous utilisons des produits biodégradables et adaptons notre choix selon la présence de végétaux ou d'animaux domestiques. Les plantes sont systématiquement protégées pendant l'intervention et nous effectuons un rinçage abondant à l'eau claire pour éliminer tout résidu de produit. Si nécessaire, nous proposons des formulations encore plus douces pour les balcons très végétalisés ou fréquentés par des animaux de compagnie.",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir réutiliser normalement mon balcon ?",
          answer:
            "Le séchage complet varie entre 2 et 6 heures selon les conditions météorologiques et l'exposition du balcon. Vous pouvez généralement circuler prudemment après 1 heure, mais nous recommandons d'attendre le séchage total avant de replacer le mobilier pour éviter les traces. Les balcons exposés au soleil sèchent naturellement plus vite que ceux orientés au nord ou protégés par des auvents.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Retrouvez un balcon parfaitement désinfecté et sain après élimination sécurisée des fientes de pigeons, pour une réutilisation en toute tranquillité à Noisy-le-Grand.",
      whyUsBullets: [
        "Connaissance des secteurs les plus exposés de Noisy-le-Grand : proximité espaces verts, configurations d'immeubles favorisant la nidification",
        "Protocole sécurisé avec EPI complets, produits désinfectants homologués et respect des normes sanitaires strictes",
        "Interventions discrètes pour préserver la tranquillité du voisinage et gestion rigoureuse des déchets contaminés",
        "Conseils personnalisés pour la prévention et recommandations de solutions dissuasives adaptées à chaque configuration",
      ],
      uniqueIntro:
        "Les balcons de Noisy-le-Grand subissent régulièrement l'invasion de pigeons, particulièrement dans les quartiers proches des bords de Marne et des nombreux espaces verts. Les fientes s'accumulent rapidement sur le sol, les garde-corps et parfois les murs, rendant l'espace inutilisable. L'odeur persistante et les risques sanitaires préoccupent légitimement les occupants, tandis que l'aspect répugnant crée souvent des tensions de voisinage.\n\nLa proximité du Bois Saint-Martin et des parcs urbains offre aux pigeons de nombreux sites de nidification, favorisant leur prolifération. Ces oiseaux trouvent dans les balcons des immeubles des espaces protégés pour établir leurs nids. Face à cette contamination, seul un traitement professionnel sécurisé permet d'éliminer les risques sanitaires et de retrouver un balcon sain et utilisable.",
      uniqueDeepDive:
        "Notre intervention débute par la mise en place d'équipements de protection individuelle complets : combinaison, gants étanches, masque respiratoire FFP2 et lunettes de protection. Nous installons des bâches de protection pour limiter la dispersion des contaminants vers l'intérieur du logement et les balcons voisins. L'humidification préalable des fientes sèches évite la formation de poussières potentiellement dangereuses lors du ramassage manuel. Tous les déchets organiques sont conditionnés dans des sacs étanches spécialement conçus pour les déchets contaminés.\n\nLe nettoyage des surfaces s'effectue avec des produits adaptés, suivi d'une désinfection complète utilisant des solutions virucides et bactéricides homologuées. Nous respectons scrupuleusement les temps de contact nécessaires à l'efficacité du traitement. L'évacuation des déchets s'effectue via une filière spécialisée, conformément à la réglementation. Nous recommandons une aération prolongée du balcon et un délai de 24 heures avant réutilisation. Si nécessaire, nous conseillons des solutions de dissuasion pour limiter le retour des pigeons.",
      specificChallenges: [
        "Prolifération importante dans les quartiers bordant les espaces verts où les pigeons trouvent nourriture et sites de nidification favorables",
        "Accès délicat aux balcons d'étage nécessitant des précautions renforcées pour éviter la chute de déchets contaminés",
        "Gestion stricte de l'évacuation des déchets organiques via filière spécialisée conforme à la réglementation sanitaire",
        "Traitement des supports corrodés par l'acidité des fientes nécessitant parfois une remise en état des revêtements et peintures",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un véritable danger sanitaire justifiant l'intervention d'un professionnel ?",
          answer:
            "Oui, les fientes de pigeons peuvent transmettre diverses pathologies par inhalation de poussières ou contact direct. Elles contiennent potentiellement des bactéries, champignons et parasites dangereux pour la santé humaine. Le traitement amateur expose à des risques de contamination par voie respiratoire ou cutanée. Notre protocole sécurisé avec EPI adaptés et produits désinfectants homologués garantit une élimination complète des risques sanitaires.",
        },
        {
          question:
            "Vos produits de désinfection sont-ils sans danger après séchage pour les habitants et animaux domestiques ?",
          answer:
            "Nous utilisons exclusivement des désinfectants homologués qui deviennent inertes après séchage complet. Le respect des temps de contact et du délai d'aération de 24 heures garantit l'innocuité totale pour les occupants et leurs animaux. Nos produits sont spécifiquement choisis pour leur efficacité virucide et bactéricide sans persistance toxique. Nous fournissons toujours les consignes précises de remise en service du balcon.",
        },
        {
          question:
            "L'acidité des fientes peut-elle avoir endommagé définitivement mon carrelage ou mon garde-corps ?",
          answer:
            "Les fientes de pigeons sont effectivement acides et peuvent altérer certains matériaux, particulièrement les métaux et peintures. Nous évaluons systématiquement l'état des supports lors de notre diagnostic et vous informons des dégâts éventuels. Dans la plupart des cas, un nettoyage approprié suffit, mais certaines situations nécessitent une remise en peinture ou un traitement anti-corrosion que nous pouvons coordonner avec des artisans spécialisés.",
        },
        {
          question: "Que devient l'ensemble des déchets récoltés sur mon balcon ?",
          answer:
            "Tous les déchets organiques (fientes, nids, plumes) sont conditionnés dans des contenants étanches et évacués via une filière d'élimination spécialisée agréée pour les déchets potentiellement contaminés. Cette procédure respecte la réglementation sanitaire et environnementale en vigueur. Aucun déchet n'est mélangé aux ordures ménagères classiques. Nous fournissons un bordereau de suivi attestant de la bonne élimination des déchets collectés.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Retrouvez des canapés, tapis et matelas parfaitement propres et assainis qui redonnent tout leur confort à votre intérieur à Noisy-le-Grand.",
      whyUsBullets: [
        "Connaissance des typologies de logements noiséens : appartements familiaux, pavillons avec jardin, contraintes d'accès spécifiques",
        "Matériel portable adapté au domicile et maîtrise des techniques d'injection-extraction pour tous types de textiles",
        "Interventions discrètes en journée avec organisation pour limiter les nuisances et adaptation aux horaires familiaux",
        "Conseils personnalisés d'entretien et recommandations pour préserver la propreté des textiles traités",
      ],
      uniqueIntro:
        "Les canapés, tapis et matelas des logements de Noisy-le-Grand accumulent rapidement les traces du quotidien familial. Entre les enfants qui jouent, les animaux domestiques et les moments de détente, ces textiles concentrent taches diverses, poussières et parfois odeurs persistantes. Les boissons renversées, les traces de nourriture et les accidents d'animaux laissent des marques visibles qui résistent à l'entretien courant. La proximité des espaces verts amplifie l'apport de pollens et particules extérieures.\n\nCette accumulation crée un inconfort quotidien et une gêne lors de la réception d'invités. Malgré un ménage régulier, l'impression de saleté persiste et peut aggraver les problèmes d'allergies. Les acariens prolifèrent dans ces environnements chargés, compromettant la qualité de l'air intérieur. Un nettoyage professionnel en profondeur permet de retrouver des textiles sains et agréables, restaurant le confort de votre intérieur.",
      uniqueDeepDive:
        "Notre intervention commence par un diagnostic précis des textiles concernés : identification des fibres, évaluation des taches et test de solidité des couleurs. Nous adaptons notre approche selon les matériaux rencontrés : coton, laine, synthétiques ou mélanges spécifiques. Le pré-traitement cible les taches tenaces avec des produits enzymatiques pour les souillures organiques et des détachants spécifiques selon la nature des salissures. Cette phase préparatoire conditionne largement la réussite de l'intervention.\n\nLe nettoyage principal s'effectue par injection-extraction contrôlée, technique qui injecte une solution nettoyante puis l'aspire immédiatement avec les salissures dissoutes. La température et la pression sont ajustées selon la fragilité des textiles. Nous portons une attention particulière au séchage en optimisant l'aération de la pièce et en fournissant des conseils précis pour accélérer le processus. Le mobilier peut généralement être réutilisé sous 4 à 8 heures selon les conditions. Nous transmettons des recommandations d'entretien quotidien pour préserver durablement les résultats obtenus.",
      specificChallenges: [
        "Mode de vie familial intensif à Noisy-le-Grand avec jardins favorisant l'apport de terre et pollens dans les intérieurs",
        "Prolifération d'acariens dans les textiles d'appartements parfois peu ventilés des grands ensembles résidentiels",
        "Séchage parfois délicat dans les logements exposés au nord ou les rez-de-chaussée humides des bords de Marne",
        "Taches organiques complexes liées à la présence fréquente d'animaux domestiques dans les foyers noiséens",
      ],
      faqAdditions: [
        {
          question:
            "Votre nettoyage élimine-t-il efficacement les acariens et allergènes de mes textiles ?",
          answer:
            "Notre méthode d'injection-extraction à température contrôlée élimine efficacement les acariens et réduit considérablement la charge allergénique. L'aspiration puissante retire les particules incrustées et les déjections d'acariens responsables des réactions allergiques. Nous recommandons un nettoyage annuel des textiles les plus sollicités pour maintenir un environnement sain, particulièrement dans les chambres d'enfants ou en cas de sensibilités particulières.",
        },
        {
          question:
            "Pouvez-vous traiter les taches d'urine anciennes et les odeurs persistantes d'animaux ?",
          answer:
            "Nous traitons ces problèmes avec des produits enzymatiques spécifiques qui décomposent les molécules responsables des odeurs. Les taches d'urine anciennes nécessitent parfois plusieurs passes avec des temps d'action prolongés. L'efficacité dépend de l'ancienneté et de la pénétration de la souillure dans le textile. Nous évaluons chaque situation et vous informons des résultats attendus pour éviter toute déception.",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir réutiliser mon canapé ou marcher sur le tapis ?",
          answer:
            "Le séchage varie entre 4 et 8 heures selon le type de textile, l'épaisseur et les conditions d'aération de la pièce. Vous pouvez généralement circuler prudemment autour des zones traitées après 2 heures, mais nous recommandons d'attendre le séchage complet avant un usage normal. L'ouverture des fenêtres et l'utilisation du chauffage accélèrent naturellement le processus.",
        },
        {
          question:
            "Dois-je préparer spécialement mon logement avant votre intervention ?",
          answer:
            "Nous demandons simplement de dégager l'accès aux textiles à traiter en déplaçant les objets posés dessus et en libérant un passage pour notre matériel. Il n'est pas nécessaire de nettoyer au préalable, nous nous occupons de l'aspiration préparatoire. Prévoyez simplement un point d'eau accessible et la possibilité d'aérer la pièce pendant et après l'intervention pour optimiser le séchage.",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;



import type { City } from "~/types/geo";

const city: City = {
  name: "Noisy-le-Grand",
  slug: "noisy-le-grand",
  postalCodes: ["93160"],

  customDescription:
    "Desservie par trois gares RER (A et E) et traversée par l’autoroute A4, Noisy-le-Grand concentre de nombreux défis d’entretien. Entre immeubles anciens, copropriétés denses et zones pavillonnaires bordant la Marne, la propreté des parkings, moquettes de halls et balcons reste un enjeu constant.",

  hubIntro:
    "Klinova accompagne les syndics de copropriété, bailleurs et entreprises de Noisy-le-Grand dans la gestion globale de la propreté et de la maintenance courante. Nos équipes interviennent avec méthode, en proximité, dans tous les quartiers de la commune.\n\nNotre fonctionnement repose sur des protocoles éprouvés, une organisation rigoureuse et un reporting clair après chaque intervention. À Noisy-le-Grand, nous construisons un véritable partenariat de confiance avec les gestionnaires et les conseils syndicaux.\n\n• Interventions protocolisées et planifiées : moquettes, parkings, balcons, textiles.\n• Techniciens formés aux accès sécurisés (badges, Vigik, interphone).\n• Zones d’intervention organisées par quartier pour optimiser les déplacements.\n• Suivi des prestations et photos sur demande pour chaque site traité.",

  localStats: {
    clientsDepartment: 0,
    satisfaction: "4,9/5",
  },

  citySpecificChallenges: [
    "Moquettes de halls très fréquentées autour des gares RER (Mont d’Est, Noisy–Champs).",
    "Fientes sur balcons exposés côté Marne ou zones boisées (Yvris, Richardets).",
    "Encrassement des parkings souterrains à cause des résidus d'hydrocarbures et poussières urbaines.",
    "Débordement végétal et mousses sur terrasses dans les quartiers pavillonnaires du sud.",
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  districts: [
    "Butte-Verte",
    "Pavé Neuf",
    "Centre-ville",
    "Champy",
    "Clos aux Biches",
    "Cormiers",
    "Coteaux",
    "Grenouillère",
    "Hauts-Bâtons",
    "La Varenne",
    "Marnois",
    "Mont-d'Est",
    "Montfort",
    "Abraxas",
    "Le Palacio",
    "Les Hêtres",
    "Richardets",
    "Rive-Charmante",
    "Villeflix",
    "Yvris",
    "Les Épinettes",
    "Clos d'Ambert",
    "Île de la Marne",
    "Bas Heurts",
    "Maille Horizon",
  ],

  nearbyCities: [
    "neuilly-sur-marne",
    "neuilly-plaisance",
    "gournay-sur-marne",
    "champs-sur-marne",
    "emerainville",
    "pontault-combault",
    "bry-sur-marne",
    "le-plessis-trevise",
    "villiers-sur-marne",
  ],

  landmarks: [
    "Mairie de Noisy-le-Grand",
    "Gare RER A – Noisy-le-Grand Mont d’Est",
    "Centre commercial Les Arcades",
    "Gare RER A – Noisy–Champs",
    "Gare RER E – Yvris–Noisy-le-Grand",
    "Autoroute A4 (sorties 8, 9 et 10)",
    "Parc départemental du Bois Saint-Martin",
  ],

  faq: [
    {
      question: "Pouvez-vous intervenir rapidement à Noisy-le-Grand ?",
      answer:
        "Oui. Nos équipes couvrent régulièrement Noisy-le-Grand. Un rendez-vous peut être fixé sous 48 à 72 h selon la zone (Mont d’Est, Yvris, Richardets, etc.).",
    },
    {
      question: "Est-ce que vous gérez les accès sécurisés comme les badges Vigik ?",
      answer:
        "Bien sûr. Nos techniciens sont formés à la gestion des Vigik, codes d'accès et interphones. Une procédure stricte garantit la sécurité des lieux.",
    },
    {
      question: "Les devis sont-ils payants si nous sommes éloignés ?",
      answer:
        "Non. Le déplacement est toujours gratuit, même pour une simple évaluation. Nos devis sont réalisés sur site, sans engagement.",
    },
    {
      question: "Comment gérez-vous les contraintes locales (stationnement ou horaires) ?",
      answer:
        "Nous adaptons nos interventions aux contraintes de chaque copropriété : stationnement limité, horaires tôt le matin, créneaux hors présence des occupants.",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Dans une ville aussi fréquentée que Noisy-le-Grand, l’état des moquettes dans les halls et escaliers reflète immédiatement la rigueur de gestion d’un immeuble.",
      whyUsBullets: [
        "Bonne connaissance des résidences autour du Mont d’Est, du Champy et des Richardets.",
        "Méthode d’injection–extraction maîtrisée, résultats visibles dès le premier passage.",
        "Interventions tôt le matin ou en journée selon les contraintes des copropriétés.",
        "Compte-rendu d’intervention disponible sur demande avec photos et remarques techniques.",
      ],
      uniqueIntro:
        "À Noisy-le-Grand, les moquettes sont encore présentes dans de nombreux halls d’entrée, cages d’escalier et couloirs, notamment dans les résidences construites entre les années 1970 et 2000. Ces zones sont soumises à un passage intensif : résidents, livreurs, visiteurs. Résultat : taches incrustées, ternissement général, poussières accumulées dans les angles. Dans les immeubles les plus exposés (proximité des gares, rues passantes), l’effet est rapide.\n\nCe manque d’entretien donne une impression d’abandon, même quand le reste de l’immeuble est bien tenu. Pour les résidents, c’est inconfortable ; pour les gestionnaires, difficile à justifier. Un nettoyage professionnel méthodique, adapté à la configuration du bâtiment, permet de restaurer un aspect net et accueillant en quelques heures seulement.",
      uniqueDeepDive:
        "Avant toute intervention, un diagnostic est réalisé sur place : type de moquette, niveau d’encrassement, présence de taches spécifiques (graisse, boisson, humidité), accessibilité, ascenseurs, horaires d’accès. À Noisy-le-Grand, certains halls sont ouverts sur rue, exposés aux poussières extérieures ; d’autres sont étroits, avec accès contraints. Klinova adapte le protocole en fonction de ces données.\n\nLes zones sont ensuite protégées : bas de murs, pieds de portes, balisage pour éviter toute gêne aux occupants. Le nettoyage s’effectue par injection–extraction à l’eau, avec une solution adaptée au type de fibre. Nos techniciens insistent sur les marches, les paliers de cage d’escalier, les bords de plinthes, souvent oubliés mais très marqués. Les zones de fort passage (proximité ascenseur, entrée principale) reçoivent plusieurs passes.\n\nL’extraction puissante limite le temps de séchage. Une aération est recommandée pendant quelques heures. En copropriété, un nettoyage annuel ou semestriel est conseillé pour maintenir l’image globale de l’immeuble.",
      specificChallenges: [
        "Moquettes très sollicitées dans les halls proches de la gare de Noisy–Mont d’Est.",
        "Accumulation rapide de poussières fines dans les escaliers ouverts sur la rue.",
        "Présence d’humidité résiduelle en rez-de-chaussée dans les bâtiments anciens.",
        "Difficultés d’accès dans certains bâtiments sans ascenseur (quartiers pavillonnaires ou mixtes).",
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage est vraiment utile dans les cages d’escaliers très fréquentées ?",
          answer:
            "Oui. Dans les cages d’escalier de Noisy-le-Grand, le passage fréquent entraîne une accumulation rapide de salissures. Même sans taches visibles, la moquette se ternit et retient les poussières. Le nettoyage régulier améliore l’aspect général, réduit les odeurs et prolonge la durée de vie des matériaux.",
        },
        {
          question:
            "Vous intervenez aussi dans les petites copropriétés ou uniquement les grandes résidences ?",
          answer:
            "Klinova s’adapte à toutes les configurations. Que ce soit un petit immeuble de six logements ou une résidence de plusieurs cages, l’approche reste la même : diagnostic, méthode adaptée, passage précis. Nous intervenons aussi dans des bureaux, crèches ou cabinets médicaux équipés de moquette.",
        },
        {
          question: "Est-ce que le nettoyage par injection abîme la moquette ?",
          answer:
            "Non. Le matériel utilisé est professionnel et conçu pour respecter les fibres textiles. L’eau est injectée sous pression contrôlée, puis immédiatement aspirée. Le séchage prend généralement entre 2 et 6 heures selon la ventilation et l’exposition. La moquette retrouve sa texture sans être fragilisée.",
        },
        {
          question: "Comment se passe l’organisation dans un immeuble occupé ?",
          answer:
            "Nous convenons à l’avance des horaires avec le syndic ou le conseil syndical. Les zones à traiter sont balisées. Les techniciens préviennent les occupants le jour même. L’intervention est rapide, sans nuisance sonore majeure, et chaque passage est optimisé pour limiter la gêne dans les escaliers ou halls.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "À Noisy-le-Grand, un parking propre, sec et lisible améliore la sécurité des usagers tout en valorisant l’image de la copropriété ou de l’entreprise.",
      whyUsBullets: [
        "Connaissance du tissu local : résidences autour de Mont d’Est, quartiers pavillonnaires, zones mixtes.",
        "Matériel pro : autolaveuse, dégraissant, pression maîtrisée selon revêtement.",
        "Interventions tôt le matin ou par zones, gêne minimale pour les occupants.",
        "Compte-rendu disponible sur demande pour syndics ou gestionnaires.",
      ],
      uniqueIntro:
        "À Noisy-le-Grand, les parkings souterrains sous les résidences ou en pied d’immeuble sont soumis à un encrassement rapide. Entre les remontées d’humidité, les poussières fines liées à l’autoroute A4 toute proche, et les traces laissées par les véhicules, les sols se salissent vite. Les taches d’huile, les poussières grasses ou les salissures en pied de murs donnent une impression de négligé.\n\nDans certaines zones comme Mont d’Est ou les Richardets, le trafic quotidien lié aux gares, commerces ou entreprises renforce l’usure. Sans nettoyage régulier, les usagers se plaignent de glissades, de traces persistantes ou d’un manque d’hygiène. Un décrassage structuré et maîtrisé permet de sécuriser les circulations, de redonner de la lisibilité au marquage, et d’améliorer l’image de l’ensemble immobilier.",
      uniqueDeepDive:
        "Chaque intervention débute par un diagnostic technique : revêtement (béton brut, résine, peinture), état des pentes et des siphons, accès pour le matériel, hauteur sous plafond. À Noisy-le-Grand, certains parkings présentent des rampes étroites ou des niveaux complexes, que nous anticipons pour organiser l’intervention sans blocage.\n\nLa première phase consiste à dégager la zone, signaliser l’intervention et balayer les déchets (feuilles, papiers, sable). Le nettoyage est ensuite réalisé à l’autolaveuse, ou en haute pression avec un dégraissant adapté pour les taches d’huile anciennes. Nous traitons systématiquement les pieds de murs, les angles et les rampes d’accès. Les eaux usées sont récupérées ou orientées vers les évacuations existantes, en conformité avec la réglementation.\n\nLorsque le parking est trop grand pour être vidé, l’intervention est découpée par zones, avec rotation des véhicules. Les créneaux matinaux sont souvent privilégiés pour limiter les gênes. Pour les copropriétés exposées (forte circulation ou résidus fréquents), un entretien tous les 6 à 12 mois est recommandé.",
      specificChallenges: [
        "Proximité de l’A4 et du centre commercial : dépôts fréquents de poussières grasses dans les parkings souterrains.",
        "Taches d’huile persistantes sur les rampes en pente ou au niveau des places les plus utilisées.",
        "Rotation des véhicules indispensable dans les copropriétés sans zones de dégagement.",
        "Évacuation parfois complexe dans les vieux parkings sans siphons efficaces.",
      ],
      faqAdditions: [
        {
          question: "Pourquoi les parkings de Noisy-le-Grand s’encrassent-ils aussi vite ?",
          answer:
            "La ville est traversée par l’A4 et compte plusieurs gares très fréquentées. Ces axes amènent beaucoup de circulation, donc de poussières noires, résidus de plaquettes, huiles, sable. Sans nettoyage structuré, les revêtements s’encrassent rapidement et donnent une impression de saleté persistante, même avec un balayage régulier.",
        },
        {
          question: "Est-ce qu’il faut vider tout le parking pour pouvoir nettoyer ?",
          answer:
            "Pas forcément. Dans la majorité des cas, nous organisons une rotation par zones : les copropriétaires déplacent leurs véhicules d’une partie à l’autre. Cela permet de nettoyer sans immobiliser tout le parking. Si besoin, nous intervenons tôt le matin ou en journée creuse pour limiter les désagréments.",
        },
        {
          question: "Est-ce que vous arrivez à enlever toutes les taches d’huile ?",
          answer:
            "Les taches récentes partent bien avec nos produits dégraissants. Pour les taches anciennes ou incrustées dans du béton poreux, une atténuation est possible mais sans garantie d’effacement total. Nous expliquons toujours en amont ce qu’on peut attendre comme résultat selon l’état du sol.",
        },
        {
          question: "Que faites-vous des eaux de lavage ?",
          answer:
            "Elles sont systématiquement récupérées ou dirigées vers les évacuations prévues du parking. Nos produits sont conformes à la réglementation. S’il n’y a pas de siphon efficace, nous mettons en place des solutions de confinement localisées. Le respect des normes reste une priorité sur chaque intervention.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS / TERRASSES
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "À Noisy-le-Grand, un balcon propre et désencombré devient à nouveau un espace de détente agréable et valorisant pour votre logement.",
      whyUsBullets: [
        "Intervention fréquente dans les résidences autour de Mont d’Est, Richardets, Yvris ou Champy.",
        "Méthode douce mais efficace, adaptée aux balcons exposés ou très encrassés.",
        "Créneaux flexibles selon disponibilité, gêne minimale pour l’occupant et les voisins.",
        "Photos avant/après sur demande pour les propriétaires bailleurs ou à distance.",
      ],
      uniqueIntro:
        "Dans de nombreuses résidences de Noisy-le-Grand, les balcons sont peu utilisés faute d’entretien. Poussière noire, dépôt vert sur les dalles, joints noircis, traces de terre ou de pots renversés s’accumulent avec le temps. L’humidité, les particules fines venues de l’A4 ou les feuillages du Bois Saint-Martin accentuent cette sensation de saleté permanente.\n\nProgressivement, le balcon devient un débarras ou un espace dont on se détourne, alors qu’il pourrait être un vrai prolongement du logement. Un nettoyage professionnel en profondeur permet de retrouver un sol propre, des gardes-corps nets, et de réinvestir pleinement cet espace extérieur, sans effort ni risque pour les matériaux.",
      uniqueDeepDive:
        "Chaque intervention commence par la protection de la zone intérieure : bâche devant la porte-fenêtre, ruban sur les menuiseries, protection des prises ou éclairages si besoin. Les meubles, pots et jardinières sont déplacés ou bâchés, selon leur poids et leur sensibilité. Tous les dépôts sont d’abord évacués manuellement : feuilles, terre sèche, résidus de fumée ou de barbecue.\n\nLe nettoyage se fait avec un produit spécifique au support (carrelage, dalle béton, bois composite). Un brossage manuel ou mécanique est effectué, avec une attention particulière sur les joints, les recoins, les garde-corps, et le pied des murs mitoyens. La pression est ajustée pour éviter d’abîmer les matériaux. L’eau est tirée vers l’extérieur ou récupérée, pour éviter toute coulure chez les voisins du dessous.\n\nAprès l’intervention, un séchage naturel est suffisant en quelques heures, selon l’ensoleillement. Nous conseillons ensuite un simple balayage régulier et un nettoyage doux tous les deux à trois mois pour maintenir le résultat.",
      specificChallenges: [
        "Poussières grasses fréquentes côté A4 et autour de la gare de Noisy–Mont d’Est.",
        "Dépôts verts sur dalles exposées à l’ombre, proches des arbres (Yvris, Bois Saint-Martin).",
        "Garde-corps complexes ou anciens, difficiles à nettoyer sans matériel adapté.",
        "Gestion de l’écoulement impérative pour éviter les coulures sur les balcons inférieurs.",
      ],
      faqAdditions: [
        {
          question: "Est-ce que le nettoyage peut endommager les carrelages ou les joints ?",
          answer:
            "Non, nous utilisons des produits professionnels non corrosifs et une pression contrôlée. Le matériel est adapté aux balcons résidentiels. Les joints sont nettoyés mais jamais agressés. S’il y a une fragilité visible (joints très anciens ou décollés), nous adaptons la méthode pour préserver la structure.",
        },
        {
          question: "Que se passe-t-il si l’eau coule chez le voisin du dessous ?",
          answer:
            "C’est justement pour éviter ça que nous tirons systématiquement l’eau vers les évacuations ou utilisons des raclettes manuelles. Lorsqu’il n’y a pas d’évacuation prévue, nous limitons la quantité d’eau et la récupérons si besoin. Le but est de ne laisser aucune coulure visible ni aucune gêne.",
        },
        {
          question: "Est-ce que vos produits sont dangereux pour les plantes ou les animaux ?",
          answer:
            "Non, nous utilisons des nettoyants neutres ou biodégradables compatibles avec les espaces résidentiels. En cas de doute, les plantes sont bâchées ou déplacées temporairement. Une fois le balcon rincé, il peut être réutilisé sans danger pour les animaux de compagnie ou les enfants.",
        },
        {
          question: "Combien de temps faut-il avant de pouvoir réutiliser son balcon ?",
          answer:
            "En général, le balcon est sec et praticable en 1 à 3 heures selon l’exposition. En été ou par temps sec, l’eau s’évapore rapidement. En période plus fraîche ou à l’ombre, il suffit de patienter un peu plus. Nous vous indiquons toujours la durée à prévoir à la fin de l’intervention.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "À Noisy-le-Grand, nous remettons en état des balcons souillés en profondeur : désinfectés, assainis et de nouveau sûrs à utiliser.",
      whyUsBullets: [
        "Connaissance du terrain : secteurs touchés comme le Pavé Neuf, les Richardets, Yvris ou la Butte Verte.",
        "Protocole strict avec équipements professionnels et désinfection complète en toute sécurité.",
        "Intervention rapide avec créneaux adaptés, sans nuisance pour les voisins.",
        "Compte-rendu et photos avant/après possibles sur demande du client ou du syndic.",
      ],
      uniqueIntro:
        "Dans plusieurs quartiers de Noisy-le-Grand, notamment à proximité du parc de la Butte Verte ou autour de la gare RER, les pigeons prolifèrent sur les toitures, corniches ou combles ouverts. Résultat : des balcons entiers se retrouvent recouverts de fientes, parfois sur plusieurs semaines. L’odeur devient forte, l’espace inutilisable, et le risque sanitaire inquiète les occupants. Les tensions avec les voisins ou la copropriété sont fréquentes lorsque rien n’est fait.\n\nDans ce contexte, une simple serpillière ne suffit pas. Seule une intervention professionnelle, sécurisée et respectueuse du voisinage permet de rendre le balcon à nouveau sain, propre et utilisable, tout en éliminant les sources de contamination.",
      uniqueDeepDive:
        "Nos techniciens interviennent avec un protocole strict et un équipement complet : combinaison, gants nitrile, masque à filtres, chaussures étanches. Le sol est protégé à l’intérieur du logement, les accès sécurisés. Le premier geste consiste à humidifier les fientes afin d’éviter leur dispersion sous forme de poussière infectieuse. Les déjections, nids éventuels, plumes ou détritus sont ramassés à la main, puis conditionnés dans des sacs à déchets adaptés, fermés hermétiquement.\n\nLes surfaces sont ensuite nettoyées : sol, plinthes, garde-corps, murs latéraux. Nous appliquons un désinfectant virucide et bactéricide conforme à la norme EN 14476, avec respect strict du temps de contact. Enfin, nous évacuons tous les déchets et la zone est aérée. Le balcon peut être réutilisé en toute sécurité après séchage complet, généralement sous 2 à 4 heures. Si besoin, nous conseillons des solutions anti-intrusion simples pour limiter le retour des pigeons.",
      specificChallenges: [
        "Certains quartiers de Noisy-le-Grand sont plus exposés aux pigeons à cause des parcs et grands arbres.",
        "Les balcons en hauteur rendent le nettoyage plus complexe, surtout avec garde-corps rouillés ou poreux.",
        "Les poussières de fientes sèches présentent un risque infectieux si elles ne sont pas humidifiées.",
        "Les déchets doivent être manipulés avec précaution et évacués dans des sacs fermés, à part.",
      ],
      faqAdditions: [
        {
          question: "Est-ce dangereux de laisser les fientes trop longtemps sans nettoyage ?",
          answer:
            "Oui. Les fientes de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) dangereux pour la santé, notamment par inhalation. Une exposition prolongée augmente les risques pour les personnes fragiles (enfants, personnes âgées, immunodéprimés). Un nettoyage professionnel permet de traiter ces risques en toute sécurité.",
        },
        {
          question: "Vos produits sont-ils sûrs une fois le balcon sec ?",
          answer:
            "Oui. Nous utilisons des désinfectants professionnels conformes aux normes sanitaires en vigueur. Une fois les surfaces sèches et aérées, il n’y a aucun risque pour les habitants, les enfants ou les animaux domestiques. Nous vous informons toujours du délai de réutilisation conseillé à la fin de l’intervention.",
        },
        {
          question: "Est-ce que le nettoyage peut abîmer les murs ou le sol du balcon ?",
          answer:
            "Non. Nous adaptons notre méthode aux matériaux : béton, carrelage, métal, peinture. Si les supports sont déjà altérés par l’acidité des fientes, nous nettoyons sans aggraver les dégâts. En cas de fragilité importante, nous vous alertons avant intervention.",
        },
        {
          question: "Que faites-vous des fientes et déchets ramassés ?",
          answer:
            "Tous les déchets sont conditionnés dans des sacs étanches et hermétiques, séparés des déchets ménagers. Ils sont ensuite évacués selon la filière appropriée. Nous assurons un traitement respectueux des règles d’hygiène et de salubrité, sans jamais laisser de traces sur place.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "À Noisy-le-Grand, vos canapés, tapis et matelas retrouvent fraîcheur, propreté et confort grâce à notre intervention à domicile.",
      whyUsBullets: [
        "Connaissance des logements de Noisy-le-Grand : pavillons, appartements récents, familles avec animaux.",
        "Méthodes et produits adaptés aux textiles délicats, aux taches et aux problématiques d’acariens.",
        "Intervention à domicile rapide, avec gêne minimale et respect des contraintes de chaque pièce.",
        "Possibilité de compte-rendu ou de passage récurrent sur demande (professionnels ou familles sensibles).",
      ],
      uniqueIntro:
        "Dans les logements de Noisy-le-Grand, les textiles d’ameublement sont soumis à rude épreuve : enfants qui jouent, animaux de compagnie, passages fréquents. Résultat : les canapés s’imprègnent de taches de nourriture ou de boisson, les tapis captent la poussière ambiante, et les matelas deviennent peu à peu un refuge pour les acariens. Les odeurs s’installent, les tissus ternissent, et même en nettoyant régulièrement, une sensation d’inconfort ou de saleté peut persister.\n\nAu-delà de l’apparence, c’est aussi une question d’hygiène et de qualité de vie. Un nettoyage professionnel permet de retirer les taches incrustées, les allergènes et les salissures invisibles, pour retrouver un intérieur plus sain et agréable à vivre.",
      uniqueDeepDive:
        "Nous intervenons à domicile sur rendez-vous, avec un matériel adapté et une méthode rigoureuse. Après une inspection des textiles (nature, tissage, état), nous ciblons les taches les plus marquées à l’aide de prétraitements spécifiques : urine, graisses, taches alimentaires. Chaque produit est choisi en fonction du textile, sans agressivité inutile. Le nettoyage se fait ensuite par injection-extraction ou à la mousse sèche selon le support, afin de décoller les salissures en profondeur tout en respectant les fibres.\n\nNous accordons une attention particulière au séchage. Nous conseillons une bonne aération de la pièce et, si nécessaire, nous déplaçons les objets pour garantir une évaporation optimale. Nous intervenons en limitant les nuisances (bruit, humidité) et en respectant les contraintes du logement. En fin d’intervention, nous vous donnons des conseils pour entretenir durablement vos textiles : aspiration régulière, taches à traiter rapidement, protection des zones sensibles.",
      specificChallenges: [
        "À Noisy-le-Grand, de nombreux foyers accueillent enfants et animaux : les tissus sont vite sollicités.",
        "Les acariens, taches organiques et odeurs sont fréquents, notamment dans les chambres peu aérées.",
        "Certains logements manquent de ventilation naturelle, ce qui peut ralentir le séchage.",
        "Nos interventions prennent en compte ces contraintes pour un résultat sûr et durable.",
      ],
      faqAdditions: [
        {
          question: "Est-ce efficace contre les acariens et allergènes ?",
          answer:
            "Oui. Le nettoyage par injection-extraction ou mousse sèche permet d’éliminer une grande partie des allergènes, acariens et poussières incrustées. Nous utilisons des produits adaptés aux textiles et sans résidus nocifs. Le résultat est un textile plus sain, particulièrement utile pour les personnes allergiques ou les enfants sensibles.",
        },
        {
          question: "Pouvez-vous traiter les taches d’urine ou les mauvaises odeurs ?",
          answer:
            "Oui. Nous appliquons un prétraitement spécifique sur les zones concernées, puis procédons à un nettoyage profond. Cela permet d’éliminer les taches organiques et de réduire fortement les odeurs. Dans les cas plus anciens ou imprégnés, un deuxième passage peut être conseillé pour un résultat optimal.",
        },
        {
          question: "Combien de temps faut-il pour que les tissus sèchent complètement ?",
          answer:
            "Cela dépend du textile, de l’humidité ambiante et de l’aération. En général, un canapé ou un matelas met entre 4 et 8 heures à sécher. Nous vous indiquons les précautions à prendre pour faciliter le séchage et éviter toute gêne dans votre quotidien.",
        },
        {
          question: "Dois-je préparer quelque chose avant votre venue ?",
          answer:
            "Oui, dans la mesure du possible, nous vous demandons de libérer l’espace autour du textile à traiter (canapé, tapis, matelas). Un accès facile permet un travail plus efficace. Nous vous rappelons également de prévoir une bonne aération pendant et après l’intervention. Rien d’autre n’est nécessaire, nous apportons tout le matériel.",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;





