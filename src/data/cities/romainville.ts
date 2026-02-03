import type { City } from "~/types/geo";

const city: City = {
  name: "Romainville",
  slug: "romainville",
  postalCodes: ["93230"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Romainville pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une équipe réactive, des méthodes adaptées au bâti récent de la ZAC de l'Horloge comme aux résidences du centre-ville.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro:
    "<p>Desservie par le métro 11 (Romainville-Carnot), entre la Corniche des Forts et le pôle Biocitech, Romainville connaît une transformation rapide. Klinova accompagne syndics, gestionnaires et particuliers dans l'entretien régulier de leurs espaces communs et privatifs.</p>\n<p class=\"mt-4\">Notre organisation repose sur une coordination terrain précise : planification des passages, suivi des interventions, reporting si nécessaire. Chaque prestation s'adapte aux contraintes d'accès et aux attentes spécifiques du donneur d'ordre.</p>\n<ul>\n  <li><strong>Réactivité locale :</strong> Équipe basée en Île-de-France, délais d'intervention courts pour les demandes urgentes ou les remises en état après travaux.</li>\n  <li><strong>Adaptation au bâti :</strong> Protocoles ajustés selon la configuration — résidences neuves avec badges Vigik, immeubles anciens du centre, pavillons du Bas-Pays.</li>\n  <li>Coordination simplifiée : Un interlocuteur unique pour organiser les accès, planifier les horaires décalés et limiter la gêne pour les occupants.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Résidences ZAC de l'Horloge</strong> : parkings souterrains en résine, accès badge, livraisons continues.",
    "<strong>Quartier Cachin</strong> : grands ensembles en rénovation, halls ouverts, gardiens présents.",
    "<strong>Centre-ville</strong> : immeubles anciens, escaliers étroits, stationnement très contraint.",
    "<strong>Proximité A3</strong> : dépôts de suie sur balcons et façades côté Trois-Communes.",
    "<strong>Pavillons Bas-Pays</strong> : accès jardins via intérieur, terrasses carrelées ou bois.",
    "<strong>Flux métro 11</strong> : salissures accrues dans les halls proches de Romainville-Carnot.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Bas-Pays",
    "Grands-Champs",
    "Trois-Communes",
    "Marcel Cachin",
    "Youri Gagarine",
    "ZAC de l'Horloge",
  ],
  nearbyCities: [
        "noisy-le-sec",
        "bagnolet",
        "montreuil",
        "bobigny",
        "pantin",
        "rosny-sous-bois",
        "bondy",
        "vincennes",
        "fontenay-sous-bois",
        "saint-mande"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Romainville",
    "Métro Romainville-Carnot",
    "Biocitech",
    "Corniche des Forts",
    "ZAC de l'Horloge",
    "Cinéma Le Trianon",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les résidences sécurisées de Romainville ?",
      answer:
        "<p>Nous récupérons les <strong>badges Vigik</strong> ou codes d'accès en amont auprès du syndic ou du gardien. Pour les résidences récentes de la ZAC de l'Horloge, nous planifions les passages en coordination avec le gestionnaire afin d'éviter les créneaux de forte affluence.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer:
        "<p>Oui, chaque demande fait l'objet d'un <strong>diagnostic préalable</strong> — sur place ou à distance selon la nature du besoin. Le devis détaille les prestations, le matériel mobilisé et les délais estimés. Aucune facturation sans validation écrite.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir en urgence après un sinistre ou un dégât des eaux ?",
      answer:
        "<p>Nous traitons les demandes urgentes sous 24 à 48 heures selon disponibilité. L'équipe évalue l'étendue des dégâts, sécurise la zone si nécessaire et procède à l'<strong>assainissement adapté</strong> — aspiration, séchage, désinfection selon le contexte.</p>",
    },
    {
      question:
        "Comment gérez-vous le stationnement dans les rues étroites du centre-ville ?",
      answer:
        "<p>Nos équipes repèrent les <strong>zones de dépose autorisées</strong> avant chaque intervention. En centre-ville, nous privilégions les créneaux matinaux hors marché et utilisons du matériel compact pour limiter l'encombrement sur la voie publique.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: n'inclure que les services demandés (ou tous si hub demandé)
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une remise en service rapide adaptée à vos contraintes d'activité.",
      whyUsBullets: [
        "Connaissance des typologies de bureaux et copropriétés récentes présentes autour du parc Biocitech.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours épais.",
        "Interventions planifiées en dehors des heures d'activité pour limiter la gêne des occupants.",
      ],
      uniqueIntro:
        "<p>Dans les locaux du parc <strong>Biocitech</strong>, les moquettes des bureaux et espaces de circulation accumulent poussières fines et traces de passage au fil des semaines. Les fibres textiles retiennent particules, résidus de semelles et taches de café qui s'incrustent progressivement dans la trame. Sans entretien adapté, le revêtement perd son aspect d'origine et dégage parfois des odeurs persistantes.</p>\n<p class=\"mt-4\">Un détachage en profondeur redonne aux surfaces leur tenue visuelle et supprime les dépôts organiques responsables des mauvaises odeurs. Dans les <strong>halls de copropriétés récentes</strong> ou les petits collectifs livrés ces dernières années, le ravivage régulier préserve l'image de l'immeuble et limite les réclamations des occupants. Les fibres retrouvent leur souplesse, les couleurs leur netteté.</p>\n<p class=\"mt-4\">L'intervention s'organise après un diagnostic précis du support : type de moquette, nature des taches, configuration des accès. Ce repérage permet d'adapter le matériel aux contraintes du site, notamment pour les locaux à <strong>flux pendulaire important</strong> où la remise en service doit rester rapide.</p>",
      uniqueDeepDive:
        "<h3>Fibres assainies et aspect ravivé</h3>\n<p>L'objectif est d'extraire les salissures profondes tout en préservant la structure textile. Les zones de trafic intense retrouvent une teinte homogène, les taches anciennes sont atténuées ou éliminées selon leur nature.</p>\n\n<h3>Injection-extraction et détachage ciblé</h3>\n<p>Le diagnostic identifie d'abord le type de moquette (bouclée, velours, épaisse ou fine) et la nature des souillures. Une aspiration préalable retire les particules libres. La solution nettoyante est injectée sous pression contrôlée puis immédiatement aspirée avec les résidus dissous. Les taches tenaces reçoivent un traitement localisé avant passage général.</p>\n<p class=\"mt-4\">Les plinthes et bas de murs sont protégés. Un balisage sécurise les accès si nécessaire.</p>\n\n<h3>Gestion du séchage et remise en service</h3>\n<p>L'extraction maximale limite l'humidité résiduelle. Selon l'épaisseur du revêtement et la ventilation du local, le séchage complet intervient sous 4 à 12 heures. Des consignes de non-piétinement sont transmises pour garantir un résultat durable.</p>",
      specificChallenges: [
        "Moquettes de bureaux soumises à un passage quotidien intense dans les locaux tertiaires.",
        "Taches de café et traces de semelles incrustées sur les zones de circulation.",
        "Halls de copropriétés récentes avec fibres épaisses nécessitant une extraction renforcée.",
        "Accès sécurisés (badges, digicodes) imposant une coordination préalable avec le gestionnaire.",
        "Délai de séchage à anticiper pour maintenir l'activité des bureaux ou le passage en parties communes.",
      ],
      faqAdditions: [
        {
          question:
            "Les cages d'escalier du centre-ville de Romainville sont souvent étroites : comment organisez-vous le passage du matériel ?",
          answer:
            "<p>Nous utilisons des équipements compacts et modulables, transportables à la main dans les escaliers sans ascenseur. Le repérage préalable permet d'identifier les contraintes d'accès et de prévoir le matériel adapté. Les protections sont posées sur les marches pour éviter tout frottement lors du déplacement.</p>",
        },
        {
          question:
            "Pour les sièges moquette d'une salle de spectacle, quel délai de remise en service après nettoyage ?",
          answer:
            "<p>L'extraction intensive limite l'humidité résiduelle. Selon la ventilation de la salle et l'épaisseur du tissu, le séchage complet intervient généralement sous 6 à 10 heures. Une intervention en soirée permet une réouverture dès le lendemain matin sans gêne pour la programmation.</p>",
        },
        {
          question:
            "Dans des bureaux techniques comme ceux du parc Biocitech, quelle méthode protège les fibres et les équipements proches ?",
          answer:
            "<p>L'injection-extraction reste la méthode privilégiée : elle évite l'excès d'eau et le risque de détrempage. Les équipements informatiques ou de laboratoire sont protégés par bâchage. La pression d'injection est ajustée selon la densité de la moquette pour préserver la trame textile.</p>",
        },
        {
          question:
            "Comment adaptez-vous la méthode selon l'épaisseur de moquette en parties communes des résidences récentes ?",
          answer:
            "<p>Le diagnostic initial identifie le type de fibre (bouclée, velours ras ou épais). Pour les moquettes épaisses, nous augmentons le temps d'extraction afin de retirer l'humidité en profondeur. Les dalles textiles fines reçoivent un passage plus rapide avec pression réduite pour éviter toute déformation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage mécanisé des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et remise en circulation rapide des places.",
      whyUsBullets: [
        "Connaissance des parkings souterrains de Romainville, de la ZAC de l'Horloge aux résidences du secteur Biocitech.",
        "Autolaveuse professionnelle et produits dégraissants adaptés aux sols béton comme aux revêtements résine récents.",
        "Coordination avec syndics et gestionnaires pour balisage sécurisé et rotation des véhicules sans blocage prolongé.",
      ],
      uniqueIntro:
        "<p>Les traces d'huile, les coulures de graisse et les dépôts de poussière marquent progressivement les sols des parkings souterrains de la <strong>ZAC de l'Horloge</strong> et des résidences récentes de Romainville. Ces salissures s'accumulent dans les zones de circulation, autour des rampes et le long des rigoles d'évacuation, rendant les surfaces glissantes et dégradant l'aspect général des espaces communs.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier permet de retrouver des sols propres et sécurisés. Les revêtements varient selon l'âge des constructions : <strong>béton brut dans les parkings anciens, résine dans les ouvrages récents</strong>. Chaque support nécessite un réglage adapté de la pression et du produit dégraissant pour éviter toute détérioration.</p>\n<p class=\"mt-4\">L'intervention intègre un balisage préalable, une coordination avec le syndic ou le gestionnaire pour organiser la rotation des véhicules, et une gestion rigoureuse des eaux de lavage. Le <strong>trafic lié aux zones commerciales à proximité</strong> impose des créneaux horaires précis pour limiter la gêne aux usagers.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation et places de stationnement</h3>\n<p>Après un balayage préalable des graviers et débris, l'autolaveuse effectue plusieurs passes sur les allées principales et les emplacements. Le dégraissant est dosé selon le niveau d'encrassement constaté lors du diagnostic initial.</p>\n\n<h3>Rampes d'accès et angles critiques</h3>\n<p>Les rampes inclinées reçoivent un traitement spécifique pour préserver l'adhérence du revêtement. Les angles morts, pieds de murs et recoins difficiles d'accès sont traités manuellement à la brosse rotative ou au nettoyeur haute pression.</p>\n\n<h3>Rigoles et évacuations</h3>\n<p>Les rigoles collectrices et regards sont curés pour garantir un écoulement correct. Les eaux de lavage chargées en huile et détergent sont dirigées vers les points d'évacuation conformes, sans rejet sauvage. Un contrôle visuel final vérifie l'état des surfaces et permet d'établir une recommandation de fréquence d'entretien adaptée au trafic du parking.</p>",
      specificChallenges: [
        "Sols résine des constructions récentes nécessitant une pression contrôlée pour éviter les marques.",
        "Rampes d'accès inclinées où l'adhérence doit être préservée après lavage.",
        "Rotation des véhicules à organiser avec le syndic pour libérer les zones par secteur.",
        "Gestion des eaux usées conforme aux évacuations existantes, sans rejet vers la voirie.",
        "Créneaux d'intervention adaptés au flux commercial du Paddock et aux horaires de bureau.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les parkings souterrains de la ZAC de l'Horloge, comment gérez-vous les eaux de lavage et les évacuations techniques ?",
          answer:
            "<p>Les eaux chargées en huile et détergent sont canalisées vers les regards existants après vérification de leur bon fonctionnement. Nous curons les rigoles en amont pour éviter tout refoulement. Aucun rejet n'est effectué vers la voirie ou les espaces communs extérieurs.</p>",
        },
        {
          question:
            "Pour des taches d'huile anciennes sur béton dans le secteur Paddock, quelle méthode appliquez-vous et quel résultat attendre ?",
          answer:
            "<p>Un dégraissant concentré est appliqué sur les zones incrustées avant passage de l'autolaveuse. Les taches récentes disparaissent généralement. Les auréoles anciennes s'atténuent nettement mais peuvent laisser une légère marque résiduelle selon la porosité du béton.</p>",
        },
        {
          question:
            "Avec le flux commercial du Paddock, quels horaires d'intervention et quel balisage proposez-vous pour limiter la gêne ?",
          answer:
            "<p>Les interventions sont programmées en début de matinée ou en soirée, hors pics d'affluence. Un balisage signalétique délimite les zones en cours de lavage. La rotation par secteur permet de maintenir une partie des places accessibles pendant toute la durée du chantier.</p>",
        },
        {
          question:
            "Quelles différences techniques appliquez-vous entre un parking souterrain et un parking aérien récent à Romainville ?",
          answer:
            "<p>En souterrain, la ventilation réduite impose un séchage plus long et une gestion stricte des eaux. En aérien, l'évacuation naturelle simplifie le rinçage mais l'exposition aux intempéries génère davantage de dépôts organiques. Le réglage de pression et le choix du produit s'adaptent à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon à Romainville, avec traitement adapté au support, protection des voisins du dessous et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux axes ou protégés par la Corniche des Forts, chaque configuration est anticipée.",
        "Pression ajustée au support : dalles sur plots, béton peint ou carrelage ancien, le matériel s'adapte pour préserver joints et revêtements.",
        "Gestion rigoureuse de l'eau : bâchage, canalisation des écoulements et coordination avec le voisinage pour une intervention sans nuisance.",
      ],
      uniqueIntro:
        "<p>Dans les résidences de la <strong>ZAC de l'Horloge</strong> comme dans les immeubles du centre-ville de Romainville, les balcons accumulent rapidement poussières noires, traces grises et dépôts verts. L'exposition aux axes passants — notamment l'A3 et l'Avenue de Verdun — dépose un film gras sur les surfaces. Les dalles sur plots des constructions récentes retiennent l'humidité entre les joints, tandis que le béton brut des grands ensembles se tache en profondeur.</p>\n<p class=\"mt-4\">Un balcon encrassé, c'est un espace qu'on n'utilise plus. Les chaises restent pliées, les plantes s'abîment, et l'impression de négligence s'installe. Sur les étages élevés des copropriétés, la gêne visuelle se double d'une frustration : impossible de recevoir dehors ou simplement de prendre l'air sans regarder ces traces tenaces. Le contraste avec un intérieur soigné devient difficile à accepter.</p>\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic du support et de l'encrassement, suivi d'un protocole adapté. Protection des menuiseries, gestion de l'eau pour éviter les coulures chez vos voisins, traitement ciblé : chaque étape vise un résultat visible et durable.</p>",
      uniqueDeepDive:
        "<h3>Dépôts accumulés et surfaces fragiles</h3>\n<p>Le balcon présente souvent des feuilles mortes, de la terre séchée et des résidus divers. Nous commençons par un enlèvement manuel de ces gros dépôts. Les menuiseries et vitrages sont protégés par bâchage. Le mobilier et les plantes sont déplacés ou couverts pour éviter tout contact avec les produits.</p>\n\n<h3>Encrassement incrusté selon le support</h3>\n<p>Sur dalles sur plots, un brossage doux préserve les joints tout en décollant les salissures. Sur béton brut, un produit dégraissant adapté est appliqué avant brossage mécanique. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée. Le rinçage s'effectue à pression contrôlée, orientée vers l'intérieur du balcon.</p>\n\n<h3>Risque de coulures chez les voisins</h3>\n<p>Un dispositif anti-écoulement canalise l'eau de rinçage. Les évacuations sont vérifiées avant intervention. Le séchage est accéléré si nécessaire. Nous terminons par des conseils d'entretien adaptés à votre exposition et au type de revêtement.</p>",
      specificChallenges: [
        "Pollution routière : dépôts noirs liés à l'A3 et à l'Avenue de Verdun sur les balcons exposés.",
        "Dalles sur plots : joints sensibles nécessitant une pression contrôlée dans les résidences récentes.",
        "Étages élevés : accès parfois complexe en copropriété, coordination avec gardien ou syndic.",
        "Voisins du dessous : gestion stricte des écoulements pour éviter toute nuisance.",
        "Loggias fermées : ventilation réduite, séchage à surveiller après intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyer sans endommager les dalles sur plots des balcons de la ZAC de l'Horloge ?",
          answer:
            "<p>Les dalles sur plots des résidences récentes de Romainville présentent des joints ouverts sensibles à la haute pression. Nous utilisons un brossage doux combiné à un rinçage à pression modérée, orienté pour éviter l'infiltration d'eau sous les dalles. Le résultat est propre sans fragiliser le système de pose.</p>",
        },
        {
          question:
            "Pour des dépôts verts et mousse sur balcons exposés nord, quelle solution garantit une élimination durable ?",
          answer:
            "<p>Les balcons orientés nord à Romainville retiennent l'humidité et favorisent mousses et algues. Nous appliquons un traitement anti-mousse après brossage, laissé agir avant rinçage. Cette méthode ralentit la repousse sur plusieurs mois, surtout sur les supports poreux comme le béton brut des grands ensembles.</p>",
        },
        {
          question:
            "Quelles différences de méthode entre nettoyage d'une loggia et d'un balcon ouvert en centre-ville ?",
          answer:
            "<p>Une loggia fermée limite la ventilation naturelle : le séchage prend plus de temps et l'humidité stagne. Nous adaptons le volume d'eau utilisé et vérifions l'évacuation avant intervention. Sur un balcon ouvert, le rinçage peut être plus généreux, mais la protection des voisins du dessous reste identique.</p>",
        },
        {
          question:
            "En cas d'accès difficile à l'étage élevé en copropriété centre-ville, comment s'organise l'intervention ?",
          answer:
            "<p>Dans les immeubles anciens du centre de Romainville, les escaliers étroits et l'absence d'ascenseur compliquent le transport du matériel. Nous prévoyons un équipement léger et modulable. La coordination avec le gardien ou le syndic permet de réserver l'accès et d'éviter toute gêne pour les autres occupants.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des secteurs à risque de Romainville, notamment les abords de la Corniche des Forts et les grands ensembles Cachin.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide certifiée sur chaque intervention.",
        "Organisation pensée pour les copropriétés denses : bâchage, protection des voisins du dessous, évacuation sécurisée des déchets.",
      ],
      uniqueIntro:
        "<p>Après quelques mois d'accumulation, les fientes de pigeons transforment un balcon en espace inutilisable. À Romainville, les secteurs proches de la <strong>Corniche des Forts</strong> et les étages élevés des grands ensembles concentrent une présence aviaire régulière. L'odeur s'installe, les dépôts s'épaississent, et le linge étendu finit par absorber ces nuisances. Ce qui semblait gérable devient une gêne quotidienne difficile à ignorer.</p>\n<p class=\"mt-4\">Les corniches d'immeubles anciens du centre-ville et les toits plats des constructions récentes de la ZAC servent de zones de repos aux pigeons. Les balcons situés en dessous reçoivent les retombées. Le béton se tache durablement, les garde-corps se couvrent de croûtes blanchâtres, et certains occupants renoncent simplement à utiliser cet espace extérieur pourtant précieux.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon sain. Le protocole inclut le retrait sécurisé des déchets, la désinfection des surfaces et des recommandations pour limiter le retour des oiseaux. Chaque étape respecte les contraintes de voisinage propres aux copropriétés denses de Romainville.</p>",
      uniqueDeepDive:
        "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur propre, sans odeur ni risque sanitaire. Les surfaces traitées — sol, garde-corps, vitrages, murs mitoyens — retrouvent un aspect correct. La désinfection élimine les agents pathogènes présents dans les fientes séchées.</p>\n\n<h3>Sécurisation et retrait des dépôts</h3>\n<p>L'intervenant porte un équipement de protection complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est confinée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n\n<h3>Traitement des supports et prévention</h3>\n<p>Après collecte, chaque surface reçoit un produit virucide homologué avec temps de contact respecté. Un rinçage final précède l'aération du balcon. Si des corniches ou rebords favorisent le stationnement des pigeons, des solutions dissuasives — pics ou filets — peuvent être installées pour réduire le risque de réinfestation.</p>",
      specificChallenges: [
        "Balcons des étages élevés exposés aux retombées aviaires régulières près de la Corniche des Forts.",
        "Corniches d'immeubles anciens du centre-ville servant de perchoirs permanents aux pigeons.",
        "Toits plats des constructions ZAC favorisant le stationnement des oiseaux au-dessus des logements.",
        "Copropriétés denses nécessitant une coordination stricte pour éviter les nuisances vers les voisins.",
        "Béton et garde-corps métalliques attaqués par l'acidité des fientes accumulées sur plusieurs mois.",
      ],
      faqAdditions: [
        {
          question:
            "Les balcons proches de la Corniche des Forts sont couverts de fientes : quels risques sanitaires réels et quel délai pour une intervention ?",
          answer:
            "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les secteurs exposés comme les abords de la Corniche des Forts, nous intervenons généralement sous 48 à 72 heures selon la charge de travail. Le port d'EPI et le confinement de la zone limitent tout risque pendant le traitement.</p>",
        },
        {
          question:
            "Après dépose des fientes sur un balcon Place Carnot, quelle désinfection technique appliquez-vous ?",
          answer:
            "<p>Une fois les dépôts retirés et conditionnés en sacs étanches, nous appliquons un produit virucide et bactéricide homologué sur l'ensemble des surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage. Cette étape élimine les agents pathogènes résiduels et neutralise les odeurs persistantes.</p>",
        },
        {
          question:
            "Dans une copropriété Cité Marcel Cachin, comment organisez-vous l'enlèvement des déchets et la coordination avec les voisins ?",
          answer:
            "<p>Avant l'intervention, nous informons les occupants des balcons adjacents pour qu'ils rentrent leur linge et ferment leurs fenêtres. La zone est bâchée pour éviter toute projection. Les déchets sont conditionnés en sacs étanches et évacués directement, sans transit par les parties communes. Le gardien est prévenu si nécessaire.</p>",
        },
        {
          question:
            "Les fientes répétées abîment le béton des balcons à Romainville : quelles solutions contre la corrosion ?",
          answer:
            "<p>L'acidité des fientes attaque progressivement le béton et la peinture des garde-corps métalliques. Après assainissement complet, nous recommandons l'installation de pics ou filets sur les rebords favorisant le stationnement des pigeons. Cette prévention limite la récurrence et protège les supports d'une dégradation accélérée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage ciblé et extraction en profondeur de vos canapés, tapis et matelas, avec séchage optimisé pour retrouver un textile frais et assaini sous 24 à 48 heures.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Romainville, du Bas-Pays aux résidences proches de Place Carnot.",
        "Détachage enzymatique ciblé et extraction textile avec contrôle du séchage selon épaisseur et saison.",
        "Intervention rapide avec gestion des contraintes d'accès en centre-ville et remise en service sous 24-48 heures.",
      ],
      uniqueIntro:
        "<p>Comment préserver la fraîcheur d'un canapé quand les enfants y prennent leur goûter, que le chat s'y installe chaque soir, et que les taches s'accumulent sans qu'on sache vraiment les traiter ? Dans les logements familiaux du centre-ville et du quartier Bas-Pays, près de Place Carnot, ces situations sont fréquentes. Les textiles absorbent poussières, allergènes et odeurs au fil des mois, jusqu'à devenir inconfortables malgré un entretien régulier en surface.</p>\n<p class=\"mt-4\">Un nettoyage en profondeur change la donne : fibres désincrustées, odeurs neutralisées, aspect ravivé. Dans les T2/T3 récents comme dans les appartements anciens avec parquet ou carrelage, le confort du salon s'en trouve transformé. Les personnes sensibles aux acariens respirent mieux, et le mobilier retrouve une seconde jeunesse sans nécessiter de remplacement.</p>\n<p class=\"mt-4\">L'intervention s'adapte à chaque textile et à chaque contrainte d'accès. Diagnostic préalable, test sur zone discrète si besoin, extraction contrôlée : chaque étape vise un résultat durable, que ce soit pour un usage familial intensif ou pour les fauteuils d'une salle d'attente liée au pôle santé local.</p>",
      uniqueDeepDive:
        "<h3>Textile assaini et odeurs neutralisées</h3>\n<p>L'objectif est d'obtenir un textile débarrassé des salissures profondes, des allergènes et des odeurs persistantes. Le résultat se constate dès le séchage : fibres souples, couleurs ravivées, sensation de fraîcheur au toucher.</p>\n\n<h3>Diagnostic et pré-traitement adapté</h3>\n<p>Chaque tissu (coton, velours, synthétique, cuir) réagit différemment. Un diagnostic identifie la nature des taches — café, urine, graisse — et l'état général du textile. Un détachage enzymatique cible les zones critiques. Sur les tissus fragiles, un test discret valide la compatibilité avant traitement complet.</p>\n\n<h3>Injection-extraction et séchage maîtrisé</h3>\n<p>Le traitement principal combine injection d'une solution adaptée et extraction immédiate des résidus. La pression et la température sont ajustées selon l'épaisseur et la sensibilité du textile. L'extraction maximale réduit le temps de séchage à 6-12 heures selon la ventilation. Des consignes précises accompagnent la remise en service pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Taches d'urine animaux fréquentes dans les logements familiaux avec chats ou chiens.",
        "Textiles non déhoussables dans les appartements récents de la ZAC de l'Horloge.",
        "Stationnement difficile en centre-ville près de Place Carnot pour le matériel d'intervention.",
        "Accumulation d'allergènes dans les canapés des familles du quartier Bas-Pays.",
        "Délais serrés pour les fauteuils de cabinets médicaux liés au pôle santé local.",
      ],
      faqAdditions: [
        {
          question:
            "Pour les familles du quartier Bas-Pays, quel impact concret du nettoyage canapé sur la réduction des acariens et des allergènes ?",
          answer:
            "<p>L'extraction en profondeur retire une grande partie des acariens, poussières et squames accumulés dans les fibres. Les personnes sensibles constatent souvent une amélioration du confort respiratoire dans les jours suivant l'intervention. Un entretien régulier, tous les 12 à 18 mois selon l'usage familial, prolonge cet effet.</p>",
        },
        {
          question:
            "Comment traitez-vous des taches d'urine anciennes sur un canapé tissu avec des odeurs persistantes liées aux animaux domestiques ?",
          answer:
            "<p>Un pré-traitement enzymatique cible les composés organiques responsables des odeurs. L'injection-extraction déloge ensuite les résidus incrustés en profondeur. Sur les taches anciennes, plusieurs passages peuvent être nécessaires. Le résultat dépend de l'ancienneté et de la nature du textile, mais l'amélioration est généralement nette dès le séchage.</p>",
        },
        {
          question:
            "Pour un canapé tissu non déhoussable dans un appartement récent, quelle technique préconisez-vous entre vapeur et shampoing ?",
          answer:
            "<p>L'injection-extraction est privilégiée : elle nettoie en profondeur sans détremper le textile. La vapeur seule convient pour un rafraîchissement léger mais n'extrait pas les salissures incrustées. Sur les tissus fragiles ou les velours des résidences récentes, la pression et la température sont ajustées après test sur zone cachée.</p>",
        },
        {
          question:
            "Avec le stationnement limité près de Place Carnot, quelles contraintes logistiques implique une intervention de nettoyage canapé à domicile ?",
          answer:
            "<p>Le matériel portable permet d'intervenir même sans place de stationnement immédiate. En centre-ville de Romainville, nous anticipons les créneaux horaires moins encombrés et prévoyons un temps de manutention adapté. L'intervention reste possible en étage sans ascenseur, avec un équipement conçu pour la mobilité en milieu urbain dense.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, du retrait des dépôts verts au traitement anti-mousse, pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses romainvilloises : zones ombragées du Bas-Pays, expositions ventées du plateau, constructions récentes en ZAC.",
        "Adaptation aux supports rencontrés : pression ajustée pour le bois composite, traitement anti-mousse ciblé sur dalles anciennes.",
        "Protection systématique du mobilier et des plantations, gestion de l'écoulement pour préserver le voisinage et les espaces intérieurs.",
      ],
      uniqueIntro:
        "<p>Les traces vertes s'accumulent sur les dalles, la mousse gagne du terrain entre les joints, et le carrelage devient glissant dès les premières pluies. Dans le quartier <strong>Bas-Pays</strong>, où les pavillons disposent souvent de terrasses ombragées par la végétation environnante, ce phénomène s'installe rapidement d'une saison à l'autre. Les résidences en rez-de-jardin de la <strong>ZAC de l'Horloge</strong> connaissent le même encrassement progressif.</p>\n<p class=\"mt-4\">Une terrasse envahie par les dépôts verts perd son attrait. On hésite à y installer le mobilier, on repousse les repas en extérieur, on finit par délaisser cet espace. Les supports varient selon les constructions : <strong>carrelage ancien sur les pavillons, bois composite sur les attiques récents, dalles sur plots</strong> dans les programmes neufs. Chaque matériau réagit différemment à l'humidité et aux traitements.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver une surface saine et agréable. Le passage depuis le salon, fréquent sur les maisons de ville, impose une organisation soignée pour protéger l'intérieur pendant le nettoyage.</p>",
      uniqueDeepDive:
        "<h3>Préparation et dégagement</h3>\n<p>Le mobilier extérieur est déplacé ou bâché selon sa nature. Les jardinières et plantes sont protégées ou éloignées de la zone de travail. Les baies vitrées et menuiseries reçoivent une protection contre les projections. Un balayage préalable retire feuilles, terre et débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour pierre, bois ou composite. Le brossage manuel ou mécanique décolle mousses et lichens incrustés. La haute pression intervient ensuite, avec une intensité contrôlée selon le matériau. Les joints et surfaces poreuses font l'objet d'une attention particulière pour éviter toute détérioration.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les garde-corps et murets périphériques sont traités. L'eau est évacuée vers les points d'écoulement existants. Un traitement anti-mousse préventif peut être appliqué pour prolonger le résultat. Avant de partir, nous partageons quelques recommandations d'entretien saisonnier adaptées à votre exposition.</p>",
      specificChallenges: [
        "Mousse persistante sur les terrasses ombragées des pavillons du Bas-Pays.",
        "Supports variés à traiter différemment : carrelage, bois composite, dalles sur plots.",
        "Accès fréquent depuis le salon, nécessitant une protection de l'intérieur pendant l'intervention.",
        "Feuillage abondant à proximité de la Corniche des Forts, accélérant l'encrassement saisonnier.",
        "Terrasses en attique sur les programmes neufs : gestion de l'écoulement vers les évacuations.",
      ],
      faqAdditions: [
        {
          question:
            "Pour une terrasse bois composite en attique dans la ZAC de l'Horloge, quelle pression utilisez-vous sans risquer d'abîmer les lames ?",
          answer:
            "<p>Le bois composite supporte mal une pression trop forte. Nous réglons le nettoyeur haute pression à un niveau modéré et maintenons une distance suffisante pour déloger les salissures sans marquer les lames. Un produit adapté aux composites complète le traitement.</p>",
        },
        {
          question:
            "Comment traitez-vous la mousse et le lichen sur une terrasse ombragée dans le Bas-Pays ?",
          answer:
            "<p>Un produit anti-mousse est appliqué avant le passage haute pression pour ramollir les dépôts. Le brossage mécanique déloge ensuite les lichens incrustés. Un traitement préventif peut être posé en fin d'intervention pour freiner la repousse pendant plusieurs mois.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse proposez-vous pour des dalles anciennes afin d'obtenir un effet durable à Romainville ?",
          answer:
            "<p>Après le nettoyage, nous appliquons un produit filmogène qui pénètre les pores de la dalle. Ce traitement limite la réapparition des mousses pendant une à deux saisons selon l'exposition. Il convient aux dalles béton ou pierre naturelle courantes sur les pavillons.</p>",
        },
        {
          question:
            "Avant un nettoyage haute pression sur une terrasse de maison, comment protégez-vous le mobilier et les plantes ?",
          answer:
            "<p>Le mobilier léger est déplacé hors de la zone de travail. Les jardinières et plantations sont bâchées ou éloignées. Les baies vitrées et seuils reçoivent une protection pour éviter les projections. Tout est remis en place une fois la surface sèche.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, avec nettoyage méthodique de chaque pièce et coordination adaptée aux délais de chantier ou d'état des lieux.",
      whyUsBullets: [
        "Connaissance des typologies locales : appartements neufs en ZAC, pavillons du Bas-Pays, logements sociaux rénovés.",
        "Polyvalence sur tous types de sols et finitions, du parquet flottant au carrelage ancien en passant par les résidus de chantier.",
        "Organisation calée sur vos délais : coordination possible avec artisans, agences ou propriétaires, même en intervention rapide.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les appartements autour du métro Romainville-Carnot et les maisons du Bas-Pays présentent souvent un état qui dépasse le simple coup de balai. Poussière de plâtre sur les plinthes, traces de colle au sol, résidus sur les vitres : le logement nécessite une intervention structurée avant d'être habitable ou restituable.</p>\n<p class=\"mt-4\">Dans les logements neufs livrés en ZAC comme dans les grands ensembles rénovés, les surfaces varient — parquet flottant, carrelage ancien, faïence neuve — et demandent un traitement adapté. Un nettoyage complet permet de rendre le bien présentable pour un nouveau locataire, de satisfaire aux exigences d'un propriétaire ou simplement de s'installer dans un espace sain.</p>\n<p class=\"mt-4\">Les demandes concernent souvent des fins de chantier avec délais serrés, des rotations locatives rapides ou des remises en état après sinistre. L'organisation tient compte des contraintes de stationnement pour le matériel et de la coordination éventuelle avec artisans ou agences.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation du logement</h3>\n<p>Avant toute intervention, un état des lieux initial identifie la nature des salissures : poussière de chantier, traces de peinture, résidus d'enduit ou encrassement général. Les surfaces fragiles sont protégées si nécessaire.</p>\n<p class=\"mt-4\">Les éventuels gravats ou déchets volumineux sont évacués pour libérer l'espace de travail.</p>\n\n<h3>Nettoyage pièce par pièce</h3>\n<p>Le dépoussiérage commence par les hauteurs — plafonds, luminaires, plinthes — avant de traiter les sols selon leur revêtement. Les pièces d'eau reçoivent un traitement spécifique : sanitaires, faïence, joints, plans de travail et électroménager.</p>\n<p class=\"mt-4\">Les vitres intérieures sont nettoyées, ainsi que les éléments de détail : interrupteurs, poignées, radiateurs, intérieurs de placards.</p>\n\n<h3>Contrôle et remise du logement</h3>\n<p>Une vérification finale permet de s'assurer que chaque zone répond au niveau attendu. Le logement est aéré avant remise des clés.</p>\n<p class=\"mt-4\">Un compte-rendu peut être transmis si l'intervention s'inscrit dans une coordination avec une agence ou un propriétaire.</p>",
      specificChallenges: [
        "Livraisons continues en ZAC de l'Horloge : interventions fin de chantier fréquentes avec délais courts.",
        "Rotation locative soutenue près du métro Romainville-Carnot : états des lieux à préparer rapidement.",
        "Stationnement camionnette difficile en centre-ville : organisation anticipée du matériel.",
        "Mix de revêtements dans un même logement : parquet neuf, carrelage ancien, sols techniques.",
        "Coordination avec artisans ou agences pour respecter les plannings de remise de clés.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans un appartement livré en ZAC de l'Horloge, quelles étapes diffèrent d'un ménage classique ?",
          answer:
            "<p>Le nettoyage fin de chantier inclut l'élimination des poussières fines de plâtre, le retrait des traces de colle ou d'enduit sur les sols, et le nettoyage des menuiseries neuves. Les vitres intérieures et les éléments de finition reçoivent un traitement spécifique que le ménage courant n'intègre pas.</p>",
        },
        {
          question:
            "Si un état des lieux est prévu sous 48 heures près du métro Romainville-Carnot, pouvez-vous intervenir rapidement ?",
          answer:
            "<p>Nous organisons des interventions en délai court selon la disponibilité de nos équipes. Pour un appartement de type T2 ou T3, une remise en état complète peut être planifiée sous 24 à 48 heures. Le créneau est confirmé après échange sur la surface et l'état du logement.</p>",
        },
        {
          question:
            "Comment coordonnez-vous l'intervention avec des artisans ou une agence immobilière pour une remise en état locative ?",
          answer:
            "<p>Nous pouvons caler notre passage après la fin des travaux ou avant une visite agence. Un contact direct avec l'interlocuteur concerné permet d'ajuster l'horaire et de transmettre un compte-rendu si nécessaire. Cette coordination évite les allers-retours et respecte le planning de remise.</p>",
        },
        {
          question:
            "Pour un T2 ou T3 avant état des lieux, quel niveau de propreté peut-on attendre et comment le vérifier ?",
          answer:
            "<p>L'objectif est un logement prêt à être restitué ou occupé : sols propres, sanitaires détartrés, vitres nettes, placards vidés et essuyés. Un contrôle visuel est effectué avant départ. Sur demande, un compte-rendu écrit ou photographique peut accompagner l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
