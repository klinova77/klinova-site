import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Cloud",
  slug: "saint-cloud",
  postalCodes: ["92210"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Saint-Cloud pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux contraintes des immeubles anciens et aux rues pentues de la commune.",

  // hubIntro : HTML autorisé
  hubIntro: "<p>Commune résidentielle surplombant la Seine, abritant le Domaine national de Saint-Cloud et desservie par la gare de Saint-Cloud (Lignes L et U), Saint-Cloud présente un tissu urbain exigeant. Klinova s'y positionne comme partenaire de proximité pour les syndics, gestionnaires et occupants.</p>\n\n<p class=\"mt-4\">Nos équipes assurent <strong>la propreté et la maintenance</strong> des espaces collectifs et privatifs. Chaque intervention fait l'objet d'une coordination préalable pour respecter les contraintes d'accès, les horaires sensibles et les attentes des donneurs d'ordre.</p>\n\n<ul>\n  <li><strong>Coordination terrain :</strong> Prise en compte des digicodes, badges et présence de gardiens pour fluidifier chaque passage sans perturber les résidents.</li>\n  <li><strong>Adaptation au bâti :</strong> Interventions calibrées selon la configuration des immeubles anciens, petits collectifs ou résidences récentes de la commune.</li>\n  <li><strong>Reporting sur demande :</strong> Compte-rendu d'intervention transmis aux syndics ou gestionnaires pour assurer un suivi transparent des prestations réalisées.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Rues pentues</strong> et stationnement contraint compliquant l'accès des véhicules techniques.",
    "Immeubles anciens avec <strong>escaliers étroits</strong> nécessitant du matériel adapté.",
    "Proximité de l'<strong>A13</strong> générant des dépôts de poussières sur balcons et terrasses.",
    "Présence fréquente de <strong>digicodes et badges</strong> imposant une coordination préalable.",
    "<strong>Quartiers résidentiels calmes</strong> exigeant des interventions discrètes et peu sonores.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre/village",
    "Pasteur/Magenta",
    "Montretout/Coutureau",
    "Coteaux/Bords de Seine",
    "Val d'Or",
    "Hippodrome/Fouilleuse",
  ],
  nearbyCities: [
        "sevres",
        "boulogne-billancourt",
        "suresnes",
        "rueil-malmaison",
        "issy-les-moulineaux",
        "puteaux",
        "nanterre",
        "le-chesnay-rocquencourt",
        "clamart",
        "neuilly-sur-seine"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Saint-Cloud",
    "Domaine national de Saint-Cloud",
    "Gare de Saint-Cloud",
    "Hippodrome de Saint-Cloud",
    "Ligne T2",
    "A13",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous les difficultés de stationnement dans les quartiers de Saint-Cloud ?",
      answer: "<p>Nos équipes repèrent les <strong>zones de dépose</strong> accessibles avant chaque intervention. Sur les secteurs où le stationnement est particulièrement contraint, nous privilégions les créneaux horaires moins denses et coordonnons avec le gardien ou le syndic pour faciliter l'accès au véhicule technique.</p>",
    },
    {
      question: "Pouvez-vous intervenir rapidement en cas de besoin urgent ?",
      answer: "<p>Nous organisons des <strong>interventions sous délai court</strong> selon la nature de la demande et la disponibilité des équipes sur le secteur. Un premier échange permet d'évaluer l'urgence et de proposer un créneau adapté, généralement sous 48 à 72 heures pour les situations prioritaires.</p>",
    },
    {
      question: "Comment se déroule la coordination avec un syndic ou un gestionnaire ?",
      answer: "<p>Un interlocuteur dédié centralise les échanges : <strong>planification des passages</strong>, transmission des accès, ajustements éventuels. Après chaque intervention, un compte-rendu peut être transmis pour assurer la traçabilité et faciliter le suivi auprès du conseil syndical ou des copropriétaires.</p>",
    },
    {
      question: "Les interventions sont-elles adaptées aux immeubles anciens avec escaliers étroits ?",
      answer: "<p>Nos équipes utilisent du <strong>matériel compact et transportable</strong> pour accéder aux étages sans ascenseur ou aux cages d'escalier exiguës. La configuration du bâtiment est systématiquement prise en compte lors du repérage afin d'adapter les équipements et la méthode d'intervention.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // Services : inclure uniquement les services demandés
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Une extraction en profondeur des salissures incrustées dans vos moquettes, avec un séchage maîtrisé pour retrouver un sol textile propre et agréable au quotidien.",
      whyUsBullets: [
        "Connaissance des configurations d'immeubles anciens et de bureaux du secteur Hippodrome et Val d'Or.",
        "Matériel d'injection-extraction professionnel adapté aux moquettes bouclées, velours et dalles textiles.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des résidents ou des collaborateurs.",
      ],
      uniqueIntro: "<p>Dans le secteur Hippodrome/Fouilleuse, on constate que les moquettes des halls d'immeubles et des bureaux accumulent rapidement poussières et traces de passage. Les fibres textiles retiennent <strong>les particules fines</strong>, les résidus de semelles et les taches de café ou de boissons renversées. Sans entretien adapté, le revêtement perd son aspect d'origine et dégage parfois des odeurs persistantes.</p>\n\n<p class=\"mt-4\">Les immeubles anciens et petits collectifs de Saint-Cloud présentent souvent des moquettes bouclées ou en dalles textiles dans les espaces de circulation. Un ravivage régulier redonne de l'éclat aux fibres, améliore le confort sous les pieds et limite les plaintes des occupants. L'image d'un hall propre contribue aussi à valoriser l'ensemble de la copropriété ou du local professionnel.</p>\n\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic précis du support et de la nature des salissures. Nous adaptons le traitement selon l'épaisseur de la moquette, les contraintes d'accès par escaliers étroits et la présence de digicodes. Un plan d'action clair vous est communiqué avant chaque passage.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\n<p>Les entrées de hall et couloirs principaux reçoivent un traitement prioritaire. Nous identifions le type de fibre et les taches présentes, puis appliquons une aspiration préalable pour retirer <strong>les particules en surface</strong>.</p>\n<p class=\"mt-4\">Les plinthes et bas de murs sont protégés avant toute injection de solution nettoyante.</p>\n\n<h3>Surfaces intermédiaires et angles</h3>\n<p>Les zones moins sollicitées bénéficient d'un détachage ciblé sur les marques anciennes. L'injection-extraction permet de déloger <strong>les salissures incrustées</strong> sans saturer le textile.</p>\n<p class=\"mt-4\">Nous insistons sur les angles et les jonctions avec le mobilier fixe, souvent négligés lors d'un simple aspirateur.</p>\n\n<h3>Finalisation et séchage</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon la ventilation du lieu. Nous conseillons d'éviter <strong>le piétinement</strong> pendant cette période.</p>\n<p class=\"mt-4\">Un balisage temporaire peut être mis en place dans les parties communes. La fréquence d'entretien recommandée dépend du trafic quotidien observé.</p>",
      specificChallenges: [
        "Halls d'immeubles anciens avec <strong>escaliers étroits</strong> compliquant l'acheminement du matériel.",
        "Moquettes bouclées retenant davantage les particules fines et nécessitant des passes multiples.",
        "Stationnement difficile à proximité des résidences, imposant une logistique anticipée.",
        "Digicodes et badges limitant les créneaux d'accès aux parties communes.",
        "Taches de tanin ou de café fréquentes dans <strong>les espaces de circulation</strong> à fort trafic.",
      ],
      faqAdditions: [
        {
          question: "Dans les immeubles du secteur Hippodrome/Fouilleuse, comment organisez-vous l'intervention avec des escaliers étroits et un accès limité ?",
          answer: "<p>Nous utilisons du matériel compact et transportable à la main. Le repérage préalable des accès permet de prévoir le temps de manutention. Si nécessaire, nous fractionnons l'intervention sur plusieurs créneaux pour ne pas bloquer les passages trop longtemps.</p>",
        },
        {
          question: "Autour de la gare de Saint-Cloud, comment traitez-vous les taches anciennes et incrustées sur une moquette très sollicitée ?",
          answer: "<p><strong>Un détachage ciblé</strong> précède l'injection-extraction. Nous appliquons un produit adapté à la nature de la tache, puis effectuons plusieurs passes sur les zones marquées. Le résultat dépend de l'ancienneté et du type de fibre, mais l'amélioration visuelle est généralement nette.</p>",
        },
        {
          question: "Dans les copropriétés du Val d'Or, quelle différence faites-vous entre moquette de hall, de bureau et d'appartement ?",
          answer: "<p>Le hall subit <strong>un trafic collectif intense</strong>, nous y appliquons un traitement renforcé. En bureau, l'accent porte sur les zones sous les sièges et les passages fréquents. À domicile, nous adaptons la puissance d'extraction à l'épaisseur du textile et aux contraintes de séchage.</p>",
        },
        {
          question: "À Saint-Cloud, comment gérez-vous le matériel pour une moquette quand le stationnement est difficile et les accès sont contraints ?",
          answer: "<p>Nous anticipons le créneau de stationnement et privilégions les horaires de moindre affluence. Le matériel est acheminé en plusieurs rotations si besoin. Une coordination avec le gardien ou le syndic facilite l'accès et limite les allers-retours inutiles.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et gestion rigoureuse des eaux usées, pour des sous-sols assainis et sécurisés dans les copropriétés.",
      whyUsBullets: [
        "Connaissance des sous-sols de copropriété à Saint-Cloud, notamment dans les quartiers Montretout et Val d'Or.",
        "Autolaveuse professionnelle avec récupération intégrée des eaux de lavage et dégraissant adapté au béton.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et le balisage sécurisé des zones traitées.",
      ],
      uniqueIntro: "<p>Les traces de graisse et les coulures d'huile s'accumulent sur le béton des parkings souterrains, particulièrement dans le <strong>secteur Montretout/Coutureau</strong> où les résidences disposent de sous-sols à forte rotation de véhicules. Ces dépôts noircissent progressivement les allées de circulation et rendent les surfaces glissantes, notamment sur les rampes d'accès.</p>\n\n<p class=\"mt-4\">Un sol de parking encrassé dégrade l'image de la copropriété et complique l'entretien courant. Dans les immeubles anciens et petits collectifs équipés de <strong>sous-sols en béton brut ou résine</strong>, la poussière fine se mêle aux résidus de carburant, créant un film gras difficile à éliminer sans équipement adapté. Les syndics reçoivent alors des signalements récurrents.</p>\n\n<p class=\"mt-4\">Notre intervention s'organise en coordination avec le gestionnaire pour limiter la gêne aux résidents. Le <strong>balisage des zones traitées</strong> et la rotation des véhicules permettent de maintenir l'accès au parking pendant le chantier, avec des horaires choisis selon les contraintes de circulation propres à chaque résidence.</p>",
      uniqueDeepDive: "<h3>Encrassement et huile incrustée</h3>\n<p>Le béton absorbe les projections d'huile moteur au fil des mois. Nous appliquons un dégraissant professionnel sur les zones les plus marquées avant le passage mécanique. Cette pré-imprégnation décolle les résidus sans attaquer le revêtement.</p>\n\n<h3>Poussière et dépôts en suspension</h3>\n<p>L'autolaveuse aspire simultanément l'eau de lavage et les particules décollées. Les rigoles et regards sont dégagés pour garantir l'évacuation correcte des eaux usées. Aucun rejet sauvage : les effluents sont récupérés conformément aux règles en vigueur.</p>\n\n<h3>Rampes et angles difficiles</h3>\n<p>Les pentes d'accès reçoivent un traitement ciblé pour conserver leur adhérence. Les pieds de murs et angles morts, souvent négligés, sont décrassés manuellement. Si demandé, nous dépoussiérons les blocs lumineux et tuyauteries apparentes pour un résultat complet.</p>",
      specificChallenges: [
        "Parkings souterrains avec rampes pentues nécessitant un traitement antidérapant spécifique.",
        "Taches d'huile anciennes incrustées dans le béton brut des résidences du secteur Montretout.",
        "Organisation du balisage pour maintenir la circulation des résidents pendant l'intervention.",
        "Gestion stricte des eaux usées dans les sous-sols équipés de regards et rigoles.",
        "Horaires d'intervention à adapter selon les contraintes de stationnement de chaque copropriété.",
      ],
      faqAdditions: [
        {
          question: "Dans les parkings souterrains de copropriété à Saint-Cloud, comment éliminez-vous les taches d'huile anciennes sur le béton ?",
          answer: "<p>Nous appliquons un dégraissant professionnel en pré-traitement sur les zones marquées. Après un temps de pose, l'autolaveuse décolle et aspire les résidus incrustés. Cette méthode évite de saturer le béton et préserve l'adhérence du sol.</p>",
        },
        {
          question: "Dans le secteur Montretout/Coutureau, comment organisez-vous le balisage d'un parking pour garantir la sécurité des usagers ?",
          answer: "<p>Nous installons une signalétique visible délimitant les zones en cours de traitement. Les allées restent accessibles par rotation, et nous informons le syndic en amont pour prévenir les résidents. Le balisage est ajusté au fur et à mesure de notre progression.</p>",
        },
        {
          question: "Près de la gare de Saint-Cloud, adaptez-vous votre méthode selon qu'il s'agit d'un parking souterrain ou d'un parking aérien ?",
          answer: "<p>En souterrain, nous privilégions l'autolaveuse pour récupérer les eaux usées sans rejet. En extérieur, la haute pression peut compléter le lavage mécanisé si le revêtement le permet. L'évacuation des eaux est toujours contrôlée selon la configuration du site.</p>",
        },
        {
          question: "Dans les sous-sols résidentiels de Saint-Cloud, quels horaires choisissez-vous pour nettoyer un parking sans gêner les circulations ?",
          answer: "<p>Nous intervenons généralement en journée creuse ou en début de soirée, après concertation avec le gestionnaire. Les horaires sont fixés pour éviter les pics de départ et retour des véhicules. Une intervention de nuit reste possible si la copropriété le demande.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement adapté au support, gestion des coulures et protection du mobilier pour retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des expositions spécifiques aux balcons de Saint-Cloud, entre pollution routière et environnement arboré.",
        "Pression adaptée à chaque support — carrelage, béton, dalles sur plots — pour préserver joints et revêtements.",
        "Organisation pensée pour vos voisins : gestion des eaux de rinçage et intervention aux horaires qui vous conviennent.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement d'un balcon quand les dépôts gris s'accumulent sur le sol et les garde-corps ? Dans le <strong>quartier Val d'Or</strong>, les balcons d'immeubles résidentiels captent poussières, pollens et traces de pollution au fil des mois. Les joints noircissent, le carrelage perd son éclat, et l'envie de s'installer dehors diminue progressivement.</p>\n\n<p class=\"mt-4\">Un balcon propre change la perception de l'espace. Sur les <strong>carrelages grès ou béton</strong> fréquents dans les résidences récentes de Saint-Cloud, les salissures incrustées donnent une impression de négligence même quand l'intérieur est impeccable. Après intervention, le sol retrouve sa teinte d'origine, les vitrages laissent passer davantage de lumière, et l'espace redevient accueillant pour les beaux jours.</p>\n\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des <strong>contraintes d'accès en étage</strong> et de l'exposition au vent. Diagnostic du support, protection des plantes et du mobilier, gestion de l'eau pour éviter les désagréments chez vos voisins : chaque étape est anticipée avant de commencer.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous commençons par déplacer ou bâcher le mobilier et les plantes. Les menuiseries sont protégées pour éviter toute projection. Les gros débris — feuilles mortes, terre, résidus divers — sont retirés manuellement avant le traitement.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué sur le sol, les garde-corps et les murs mitoyens accessibles. Le brossage manuel ou mécanique décolle les salissures incrustées. Pour les joints fragiles, nous évitons la haute pression et privilégions une action douce mais efficace.</p>\n<p class=\"mt-4\">Le rinçage est contrôlé pour limiter les coulures vers les balcons inférieurs. Une protection temporaire peut être installée si nécessaire.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les vitrages sont essuyés, le sol sèche naturellement ou avec aide selon la météo. Avant de partir, nous vous indiquons les gestes simples pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Dépôts liés à la proximité de l'A13 : poussières fines et traces grasses sur garde-corps et sols.",
        "Joints de carrelage noircis par l'humidité et les mousses dans les secteurs ombragés.",
        "Accès en étage avec contraintes de stationnement et matériel à monter.",
        "Gestion des coulures pour éviter les désagréments chez les voisins du dessous.",
        "Balcons fermés type loggia nécessitant une ventilation adaptée pendant le séchage.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons carrelés du quartier Val d'Or, comment évitez-vous d'abîmer les joints pendant le nettoyage ?",
          answer: "<p>Nous adaptons la pression et la technique au type de joint. Sur les carrelages grès courants dans ce secteur, un brossage manuel ciblé remplace souvent la haute pression. Le produit utilisé décolle les salissures sans attaquer le mortier, et le rinçage reste modéré pour ne pas creuser les interstices.</p>",
        },
        {
          question: "Près de l'A13 à Saint-Cloud, comment gérez-vous l'eau et les coulures quand vous nettoyez un balcon ?",
          answer: "<p>Nous installons une protection temporaire sur le bord du balcon si nécessaire, et contrôlons le débit de rinçage. L'eau chargée de salissures est dirigée vers l'évacuation existante. Si le balcon inférieur est occupé, nous prévenons les voisins ou intervenons à un moment où cela ne pose pas de problème.</p>",
        },
        {
          question: "Dans les immeubles résidentiels de Saint-Cloud, adaptez-vous la méthode selon un balcon en béton ou en carrelage ?",
          answer: "<p>Oui, le béton brut supporte un brossage plus appuyé et des produits légèrement plus concentrés. Le carrelage demande davantage de précaution sur les joints. Nous vérifions aussi l'état du support avant de choisir entre nettoyage manuel, mécanique ou pression contrôlée.</p>",
        },
        {
          question: "Dans les copropriétés de Saint-Cloud, pourquoi privilégier un nettoyage de balcon sans haute pression ?",
          answer: "<p>La haute pression peut endommager les joints anciens, projeter de l'eau chez les voisins et créer des nuisances sonores. Un brossage adapté avec rinçage modéré donne un résultat équivalent sur la plupart des supports, sans risque pour le revêtement ni gêne pour l'entourage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des surfaces et pose de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des secteurs exposés aux volatiles près des espaces arborés de Saint-Cloud.",
        "Protocole de décontamination avec EPI complets, confinement et désinfection homologuée.",
        "Intervention discrète en copropriété, gestion des accès et évacuation sécurisée des déchets.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons situés à proximité du Domaine national de Saint-Cloud accumulent des dépôts de fientes qui s'incrustent dans les joints et les recoins. Les arbres environnants attirent les volatiles, et les résidents constatent rapidement une odeur persistante, des traces blanchâtres sur le sol et le garde-corps, parfois même sur les vitres. L'espace extérieur devient inutilisable, le linge ne peut plus sécher dehors.</p>\n\n<p class=\"mt-4\">Sur les balcons carrelés ou en béton brut, fréquents dans les immeubles anciens et petits collectifs de Saint-Cloud, les fientes attaquent progressivement les surfaces. L'acidité dégrade les joints, ternit le carrelage et laisse des auréoles difficiles à éliminer avec un simple rinçage. Les occupants hésitent à ouvrir leurs fenêtres, et la gêne vis-à-vis du voisinage s'installe.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de traiter le problème en profondeur. Nous intervenons en tenant compte des contraintes d'accès en copropriété, avec une organisation pensée pour limiter les nuisances sonores et olfactives pendant le traitement.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace utilisable, débarrassé des résidus organiques et des agents pathogènes. Les surfaces retrouvent un aspect propre, l'odeur disparaît, et le balcon peut à nouveau servir au quotidien.</p>\n<p class=\"mt-4\">Pour y parvenir, l'intervention débute par un confinement de la zone et une humidification préalable des dépôts pour éviter la dispersion de poussières contaminées.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Les fientes sont ramassées manuellement puis conditionnées en sacs étanches. Le sol, le garde-corps, les vitrages et les murs mitoyens sont nettoyés avec un produit adapté.</p>\n<p class=\"mt-4\">Une désinfection virucide et bactéricide est appliquée sur l'ensemble des surfaces, avec un temps de contact respecté avant rinçage.</p>\n\n<h3>Protection et prévention</h3>\n<p>Après aération du balcon, nous proposons la pose de pics anti-pigeons sur les rebords ou corniches, voire de filets de protection selon la configuration. Les déchets sont évacués en sacs étanches, sans risque pour les parties communes.</p>",
      specificChallenges: [
        "Proximité du Domaine national : présence d'arbres favorisant le stationnement des pigeons sur les balcons.",
        "Surfaces carrelées ou béton attaquées par l'acidité des fientes si le dépôt persiste.",
        "Accès en copropriété avec digicodes et contraintes horaires à coordonner.",
        "Odeurs persistantes nécessitant une désinfection complète, pas un simple rinçage.",
        "Risque de réinfestation sans dispositif de dissuasion adapté aux rebords et corniches.",
      ],
      faqAdditions: [
        {
          question: "Sur un balcon proche du Domaine national de Saint-Cloud, quels risques sanitaires justifient une intervention rapide contre les fientes ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent se disperser dans l'air une fois sèches. Sur les balcons exposés aux espaces arborés, l'accumulation est souvent plus rapide. Une décontamination évite l'inhalation de particules et protège les occupants, notamment les personnes fragiles.</p>",
        },
        {
          question: "Dans les copropriétés de Saint-Cloud, quels EPI utilisez-vous pour nettoyer et désinfecter un balcon couvert de fientes ?",
          answer: "<p>Nos techniciens portent un masque FFP2, des gants, des lunettes de protection et une combinaison jetable. Ce protocole limite tout contact avec les résidus contaminés et évite la dispersion de poussières vers l'intérieur du logement ou les parties communes de l'immeuble.</p>",
        },
        {
          question: "Sur des balcons carrelés ou en béton à Saint-Cloud, comment assurez-vous l'efficacité de la désinfection après des fientes ?",
          answer: "<p>Après collecte des dépôts et nettoyage des surfaces, nous appliquons un produit virucide et bactéricide homologué. Le temps de contact est respecté avant rinçage pour garantir l'élimination des agents pathogènes. Les joints et recoins sont traités avec la même rigueur que les surfaces planes.</p>",
        },
        {
          question: "Près des espaces arborés de Saint-Cloud, quelles solutions proposez-vous pour limiter le retour des pigeons sur le balcon ?",
          answer: "<p>Selon la configuration, nous installons des pics anti-pigeons sur les rebords et corniches, ou des filets de protection si le balcon est très exposé. Ces dispositifs dissuadent les volatiles sans nuire à l'esthétique. Sans prévention, la réinfestation survient généralement en quelques semaines.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Rafraîchissement complet de vos canapés, tapis et matelas à domicile, avec extraction des taches incrustées et séchage adapté pour retrouver un textile propre et agréable.",
      whyUsBullets: [
        "Connaissance des logements du secteur Fouilleuse et Pasteur/Magenta, avec leurs accès en étage et configurations variées.",
        "Détachage ciblé selon le textile et extraction contrôlée pour un séchage rapide sans résidu.",
        "Organisation pensée pour limiter la gêne, avec transport du matériel adapté aux immeubles sans ascenseur.",
      ],
      uniqueIntro: "<p>Dans le quartier Pasteur/Magenta, les canapés et tapis des logements accumulent au fil des mois poussières, taches de café ou traces laissées par les enfants et animaux. Ces salissures s'incrustent dans les fibres sans qu'on s'en rende compte, jusqu'au jour où l'aspect terne devient visible. Les familles qui reçoivent régulièrement constatent que le textile perd de son éclat malgré les aspirations fréquentes.</p>\n\n<p class=\"mt-4\">Un entretien en profondeur redonne au tissu, au velours ou à la microfibre leur aspect d'origine. Les odeurs piégées dans les fibres disparaissent, le confort s'améliore et l'ensemble du salon retrouve une fraîcheur perceptible. Pour les foyers avec enfants en bas âge ou animaux de compagnie, cette remise en état limite aussi la présence d'allergènes au quotidien.</p>\n\n<p class=\"mt-4\">L'intervention se prépare en tenant compte des contraintes d'accès en étage et du transport du matériel dans les immeubles. Un diagnostic textile précède chaque passage pour adapter la méthode au revêtement concerné.</p>",
      uniqueDeepDive: "<h3>Taches anciennes et fibres encrassées</h3>\n<p>Les salissures incrustées nécessitent un diagnostic préalable. Le technicien identifie la nature du textile et repère les zones marquées par le café, le vin ou les traces d'animaux. Un test discret sur une partie cachée valide la compatibilité du traitement avec le revêtement.</p>\n\n<h3>Détachage ciblé et traitement adapté</h3>\n<p>Un pré-traitement enzymatique cible les taches tenaces avant le passage en injection-extraction. La pression et la température sont ajustées selon que le support soit en coton, en velours ou en microfibre. Cette adaptation préserve les fibres tout en délogeant les résidus profonds.</p>\n\n<h3>Extraction et remise en service</h3>\n<p>L'extraction maximale retire l'eau chargée de salissures. Le séchage varie selon l'épaisseur du textile et la ventilation du logement. Des consignes précises accompagnent la fin d'intervention pour permettre une utilisation rapide du canapé ou du tapis.</p>",
      specificChallenges: [
        "Taches de café ou de vin incrustées depuis plusieurs mois sur canapé tissu.",
        "Velours et microfibre nécessitant une adaptation de pression pour éviter l'écrasement des fibres.",
        "Accès en étage sans ascenseur dans certains immeubles du quartier Pasteur/Magenta.",
        "Présence d'animaux de compagnie générant odeurs et allergènes piégés dans les tapis.",
        "Séchage à anticiper selon la ventilation du logement et l'épaisseur du textile.",
      ],
      faqAdditions: [
        {
          question: "Dans les logements du quartier Pasteur/Magenta, comment le nettoyage de canapés et tapis aide-t-il à réduire les allergènes et la poussière ?",
          answer: "<p>L'injection-extraction déloge les acariens, poussières et poils d'animaux piégés dans les fibres. Après séchage, le textile libère moins de particules dans l'air ambiant. Les foyers avec enfants ou personnes sensibles constatent une amélioration du confort respiratoire au quotidien.</p>",
        },
        {
          question: "À Saint-Cloud, comment adaptez-vous vos produits selon un canapé en tissu, en velours ou en microfibre ?",
          answer: "<p>Un diagnostic préalable identifie la composition du revêtement. Le velours reçoit une pression réduite pour préserver son aspect, tandis que le tissu coton supporte un traitement plus appuyé. La microfibre bénéficie d'un détachage ciblé avec des produits à pH neutre adaptés à sa structure.</p>",
        },
        {
          question: "Dans un appartement de Saint-Cloud, que faut-il préparer avant un nettoyage de canapé ou de tapis en étage ?",
          answer: "<p>Dégager l'accès entre l'entrée et la pièce concernée facilite le passage du matériel. Retirer les coussins et objets posés sur le canapé permet de gagner du temps. Si l'immeuble dispose d'un digicode, transmettre le code d'accès en amont évite toute attente le jour de l'intervention.</p>",
        },
        {
          question: "Dans les immeubles de Saint-Cloud, comment gérez-vous le transport du matériel pour intervenir en étages ?",
          answer: "<p>Le matériel d'injection-extraction reste compact et transportable à la main. En l'absence d'ascenseur, l'équipe monte par les escaliers avec l'équipement nécessaire. Le stationnement est repéré en amont pour limiter les allers-retours et respecter le créneau prévu.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses, pour retrouver un extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des extérieurs résidentiels de Saint-Cloud, exposés aux feuilles et à l'humidité des espaces verdoyants.",
        "Adaptation du traitement selon chaque support — pierre, bois ou carrelage — avec produits et pression calibrés.",
        "Protection du mobilier et des plantations, gestion de l'écoulement pour éviter toute gêne aux abords.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect d'une terrasse quand les feuilles s'accumulent chaque automne et que la mousse gagne du terrain année après année ? Dans le secteur Hippodrome/Fouilleuse, les extérieurs des maisons subissent cette usure progressive : le bois verdit, la pierre se ternit, le carrelage devient glissant par endroits. Ces dépôts ne sont pas qu'esthétiques — ils rendent la surface moins sûre et moins agréable à utiliser.</p>\n\n<p class=\"mt-4\">Une terrasse entretenue change la perception de tout l'espace extérieur. Sur les maisons et rez-de-chaussée de Saint-Cloud, où les terrasses sont souvent en pierre, bois ou carrelage, le nettoyage redonne de la clarté aux matériaux et supprime cette couche verdâtre qui s'installe avec l'humidité. Le sol redevient praticable sans appréhension, le mobilier retrouve sa place naturelle.</p>\n\n<p class=\"mt-4\">L'intervention commence par un diagnostic du support et de son état. Nous adaptons la méthode — pression contrôlée ou traitement doux — selon la porosité du matériau et l'ampleur des dépôts, en protégeant systématiquement les menuiseries et les plantations environnantes.</p>",
      uniqueDeepDive: "<h3>Surface dégagée et matériaux préservés</h3>\n<p>Le résultat visé : une terrasse débarrassée des mousses, lichens et salissures incrustées, avec un support intact. Pour y parvenir, nous commençons par déplacer ou bâcher le mobilier extérieur et les jardinières. Les baies vitrées et portes sont protégées avant toute projection d'eau.</p>\n\n<h3>Traitement ciblé selon le support</h3>\n<p>Le balayage élimine d'abord les gros dépôts — feuilles, terre, débris végétaux. Ensuite, un produit adapté est appliqué : formulation douce pour le bois et la pierre naturelle, dégraissant pour le carrelage. Le brossage manuel ou mécanique déloge les salissures tenaces avant rinçage.</p>\n\n<h3>Finition et conseils d'entretien</h3>\n<p>La haute pression intervient uniquement sur les supports qui la tolèrent, avec réglage adapté pour éviter d'endommager les joints. L'eau est dirigée vers les points d'écoulement existants, en préservant les plantations. Nous vous indiquons ensuite la fréquence d'entretien recommandée selon l'exposition de votre terrasse.</p>",
      specificChallenges: [
        "Mousses et lichens qui s'installent sur les terrasses ombragées proches des zones boisées.",
        "Supports variés — pierre, bois, carrelage — nécessitant chacun une approche différente.",
        "Feuilles et débris végétaux accumulés dans les angles et contre les murets.",
        "Terrasses en pente avec gestion de l'écoulement vers les jardins ou espaces voisins.",
        "Mobilier extérieur et jardinières à déplacer ou protéger pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Sur les terrasses en pierre, bois ou carrelage à Saint-Cloud, comment évitez-vous d'abîmer le support pendant le nettoyage ?",
          answer: "<p>Chaque matériau réagit différemment à la pression et aux produits. Nous testons d'abord sur une zone peu visible, puis ajustons le réglage et la formulation. Le bois reçoit un traitement basse pression, la pierre naturelle un produit neutre, le carrelage supporte un dégraissage plus appuyé si nécessaire.</p>",
        },
        {
          question: "Près du secteur Hippodrome/Fouilleuse, comment traitez-vous les mousses et lichens qui reviennent sur une terrasse ?",
          answer: "<p>Les extérieurs ombragés favorisent ces dépôts verts. Nous appliquons un traitement anti-mousse après le nettoyage mécanique, qui ralentit la repousse pendant plusieurs mois. L'efficacité dépend de l'exposition : une terrasse sous les arbres nécessitera un entretien plus fréquent qu'une surface bien ensoleillée.</p>",
        },
        {
          question: "À Saint-Cloud, adaptez-vous le nettoyage de terrasse selon qu'elle soit en bois, en pierre ou en carrelage ?",
          answer: "<p>Oui, c'est indispensable. Le bois composite ou naturel demande une pression réduite et un séchage surveillé. La pierre calcaire craint les produits acides. Le carrelage grès cérame tolère davantage mais ses joints restent fragiles. Nous identifions le support avant de choisir la méthode.</p>",
        },
        {
          question: "Dans les extérieurs résidentiels de Saint-Cloud, pourquoi choisir un nettoyage doux plutôt qu'une haute pression pour une terrasse ?",
          answer: "<p>La haute pression peut creuser les joints, écailler la pierre tendre ou relever les fibres du bois. Sur les terrasses anciennes ou les matériaux poreux fréquents dans les maisons de Saint-Cloud, un brossage avec produit adapté suivi d'un rinçage modéré préserve le support tout en éliminant efficacement les salissures.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Remise en état complète de votre appartement ou maison à Saint-Cloud, avec nettoyage minutieux de chaque pièce et surfaces prêtes pour une remise de clés ou une installation sereine.",
      whyUsBullets: [
        "Connaissance des logements du centre-ville et des quartiers résidentiels de Saint-Cloud, avec leurs accès parfois contraints.",
        "Polyvalence sur parquets anciens, carrelages et surfaces variées, avec traitement adapté des résidus de chantier.",
        "Organisation souple pour coordonner le passage avec artisans, agences ou propriétaires malgré le stationnement limité.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou un déménagement, un logement du quartier Centre/village accumule poussières fines, résidus de peinture et traces sur les sols. Les parquets se ternissent sous les dépôts, les vitres gardent des voiles de chantier, et chaque pièce nécessite une reprise complète avant d'être habitable ou présentable pour un état des lieux.</p>\n\n<p class=\"mt-4\">Un grand nettoyage structuré transforme ces espaces en logements prêts à accueillir leurs occupants. Dans les immeubles anciens et petits collectifs de Saint-Cloud, où parquets et carrelages dominent, l'intervention redonne leur aspect d'origine aux sols, supprime les traces sur les murs et restitue des pièces d'eau impeccables. Le résultat facilite la validation d'un état des lieux ou permet une installation immédiate.</p>\n\n<p class=\"mt-4\">Nos équipes organisent chaque passage en tenant compte des contraintes locales : stationnement difficile, coordination avec artisans encore présents, récupération des clés auprès du gardien. Chaque intervention suit un plan précis pour couvrir l'ensemble du logement sans oubli.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>L'équipe évalue l'état du logement dès son arrivée : nature des résidus (poussière de plâtre, traces de colle, projections de peinture), type de revêtements et zones prioritaires. Les gravats ou déchets de chantier sont évacués si nécessaire.</p>\n<p class=\"mt-4\">Les surfaces fragiles reçoivent une protection adaptée avant le début des opérations.</p>\n\n<h3>Nettoyage complet des espaces</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes, puis descend vers les sols. Chaque pièce est traitée : aspiration des parquets, lavage des carrelages, nettoyage des vitres intérieures.</p>\n<p class=\"mt-4\">Les pièces d'eau font l'objet d'une attention particulière : sanitaires, faïences, joints et plans de travail sont décrassés en profondeur.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les détails sont repris : interrupteurs, poignées, radiateurs, intérieurs de placards. Les éventuelles traces de peinture ou d'enduit sur les menuiseries sont retirées.</p>\n<p class=\"mt-4\">Un contrôle final vérifie chaque zone avant aération du logement et remise des clés si applicable.</p>",
      specificChallenges: [
        "Stationnement difficile dans les rues étroites du centre : matériel acheminé à pied si nécessaire.",
        "Parquets anciens sensibles aux produits agressifs : nettoyage adapté sans risque pour le bois.",
        "Coordination avec artisans encore présents sur le chantier pour éviter les allers-retours inutiles.",
        "Accès par digicode ou badge fréquent : récupération des clés organisée en amont.",
        "Délais serrés avant état des lieux : intervention planifiée pour respecter la date de remise.",
      ],
      faqAdditions: [
        {
          question: "Dans le centre-ville de Saint-Cloud, quelle différence faites-vous entre un ménage courant et un nettoyage de fin de chantier ?",
          answer: "<p>Un ménage courant entretient un logement déjà propre. Une remise en état après travaux traite les résidus de plâtre, traces de peinture et poussières fines incrustées sur toutes les surfaces. L'intervention est plus longue et mobilise des techniques de décrassage adaptées aux dépôts de chantier.</p>",
        },
        {
          question: "Avant un état des lieux à Saint-Cloud, quel niveau de propreté garantissez-vous pour un appartement ou une maison ?",
          answer: "<p>Nous visons un logement prêt à être validé : sols sans traces, vitres propres, pièces d'eau décrassées, placards nettoyés. Si un point nécessite une repasse après contrôle, nous intervenons rapidement pour corriger avant la remise définitive des clés.</p>",
        },
        {
          question: "À Saint-Cloud, comment coordonnez-vous votre passage avec les artisans ou l'agence lors d'un nettoyage après travaux ?",
          answer: "<p>Nous calons notre intervention une fois les travaux terminés, en lien direct avec le maître d'œuvre ou l'agence. Si des finitions restent en cours, nous adaptons notre planning pour éviter de repasser sur des zones déjà nettoyées. Un contact unique simplifie les échanges.</p>",
        },
        {
          question: "Dans les quartiers résidentiels de Saint-Cloud, comment organisez-vous l'accès au logement quand le stationnement est difficile ?",
          answer: "<p>Nous anticipons les contraintes : récupération des clés chez le gardien ou en agence, acheminement du matériel à pied si le véhicule doit rester éloigné. Les rues pentues et étroites du secteur sont intégrées dans notre organisation pour éviter tout retard.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;