import type { City } from "~/types/geo";

const city: City = {
  name: "Vaires-sur-Marne",
  slug: "vaires-sur-marne",
  postalCodes: ["77360"],

  customDescription:
    "Située entre le canal de Chelles et la Marne, Vaires-sur-Marne combine une forte hygrométrie et un trafic dense lié à la gare et à la D934. L’entretien des moquettes de copropriété, le dégraissage des parkings et le nettoyage des balcons exposés aux mousses sont des demandes constantes pour préserver le bâti face à ces contraintes locales.",

  hubIntro:
    "<p>Pour les syndics de copropriété et les gestionnaires de patrimoine à Vaires-sur-Marne, la préservation des immeubles face à l’humidité des bords de Marne et à l’activité urbaine est un enjeu technique quotidien. Klinova se positionne comme votre partenaire de maintenance immobilière, assurant une gestion globale de la propreté, des parkings souterrains aux parties communes, en passant par les extérieurs privatifs.</p><p class=\"mt-4\">Nous intervenons avec une rigueur opérationnelle adaptée aux spécificités locales, garantissant un reporting précis après chaque prestation. Notre structure nous permet de répondre aux exigences des conseils syndicaux avec des solutions éprouvées pour l’hygiène et la rénovation des surfaces.</p><ul><li>Mise en place de protocoles stricts contre les encrassements récurrents (mousses, hydrocarbures, fientes).</li><li>Interventions planifiées ou ponctuelles, selon les contraintes horaires des résidences.</li><li>Équipe formée pour les milieux résidentiels et zones sensibles (hall, cage, balcon, parking).</li><li>Suivi administratif clair, devis rapide et reporting après prestation.</li></ul>",

  citySpecificChallenges: [
    "Mousses et dépôts verts fréquents sur les balcons exposés aux bords de Marne.",
    "Particules fines et poussières ferroviaires autour de la gare de Vaires-Torcy.",
    "Parkings souterrains avec humidité persistante et zones mal ventilées.",
    "Fort passage dans les halls des résidences proches de la D934 et des écoles."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: [
    "Centre-ville",
    "Square Paul-Algis",
    "Les Pêcheurs",
    "ZAC des Pêcheurs",
    "Cité EDF",
    "Bois de Vaires",
    "Cité de la Gare",
    "Parc de l'Aulnay",
    "République",
    "Quartier du Canal"
  ],

nearbyCities: [
  "torcy",
  "champs-sur-marne",
  "chelles",
  "gournay-sur-marne",
  "lagny-sur-marne",
  "bussy-saint-georges",
],

  landmarks: [
    "Mairie de Vaires-sur-Marne",
    "Gare de Vaires – Torcy",
    "Île de loisirs de Vaires-Torcy",
    "D934 (axe routier majeur)",
    "Parc de l’Aulnay",
    "Église Sainte-Jeanne-d’Arc de Vaires-sur-Marne"
  ],

  faq: [
    {
      question: "Pouvez-vous intervenir rapidement à Vaires-sur-Marne en cas d'urgence ?",
      answer:
        "Oui. Nous sommes organisés pour répondre sous 24 à 48 h en cas de sinistre ou de fin de chantier. Nos équipes peuvent mobiliser du matériel professionnel en urgence à Vaires-sur-Marne selon les disponibilités."
    },
    {
      question: "La gestion des accès Vigik ou des clés est-elle bien encadrée ?",
      answer:
        "Tous nos intervenants suivent un protocole strict pour la gestion sécurisée des accès. Une fiche d’entrée/sortie est systématiquement utilisée pour les badges, Vigik ou jeux de clés confiés."
    },
    {
      question: "Est-ce que le déplacement pour un devis est payant ?",
      answer:
        "Non. Même à Vaires-sur-Marne, tous nos déplacements pour devis sont gratuits, qu’il s’agisse d’un hall de copropriété ou d’un balcon à traiter chez un particulier."
    },
    {
      question:
        "Vos équipes s’adaptent-elles aux contraintes locales comme le stationnement difficile ?",
      answer:
        "Oui. Vaires présente parfois des contraintes de stationnement. Nous anticipons cela en repérant les accès à l’avance et en adaptant nos horaires si nécessaire, par exemple avec des interventions tôt le matin."
    }
  ],

  testimonial: {
    text:
      "Klinova a remis à niveau les moquettes et le parking d’une copropriété à Vaires-sur-Marne, avec un chantier bien organisé et un retour très positif des résidents.",
    author: "S. Dupont",
    role: "Gestionnaire de copropriété",
    building: "Résidence Parc de l'Aulnay"
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Des moquettes propres et bien entretenues dans les halls, escaliers et paliers renforcent l’image des copropriétés à Vaires-sur-Marne, face à l’humidité et au passage fréquent des résidents.",
      whyUsBullets: [
        "Connaissance des contraintes propres aux résidences de la ZAC des Pêcheurs ou du Parc de l’Aulnay.",
        "Méthode professionnelle par injection-extraction, adaptée à la fibre et au niveau d’encrassement.",
        "Interventions planifiées tôt le matin ou sur créneaux sans passage pour limiter la gêne.",
        "Compte-rendu de fin d’intervention pour le syndic ou le gestionnaire, avec retour visuel possible."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, de nombreux halls d’immeubles sont recouverts de moquettes soumises à une forte sollicitation quotidienne : passages répétés, poussières extérieures, traces de chaussures, taches d’usage. C’est aussi le cas des paliers, escaliers et couloirs dans les cages d’escalier, notamment dans les résidences des quartiers comme le Parc de l’Aulnay, les Pêcheurs ou la cité de la Gare.</p><p class=\"mt-4\">Avec le temps, les fibres ternissent, les taches s’installent et les moquettes perdent leur fonction d’accueil visuel. Cela peut générer un inconfort pour les résidents et nuire à l’image du syndic ou du bailleur. Un nettoyage professionnel bien structuré, avec du matériel adapté et une méthode rigoureuse, permet de redonner une propreté visible dès les premières marches.</p>",
      uniqueDeepDive:
        "<p>Chaque intervention débute par un diagnostic complet de l’état des moquettes : type de fibre, niveau d’encrassement, nature des taches, circulation dans les cages, contraintes d’accès ou d’ascenseur. Nos équipes adaptent leur protocole à la configuration locale, qu’il s’agisse de cages étroites dans les résidences anciennes ou de halls donnant sur rue dans les constructions plus récentes.</p><p class=\"mt-4\">La préparation inclut la protection des plinthes et des bas de murs, la sécurisation des zones de travail, le balisage des escaliers et la coordination avec les résidents ou gardiens si besoin. Le nettoyage se fait par injection-extraction à l’eau chaude, avec plusieurs passes sur les zones les plus sollicitées (accès d’entrée, devant les boîtes aux lettres, paliers intermédiaires). Le séchage est optimisé par extraction puissante et aération. Nous conseillons une fréquence d’entretien tous les 12 à 18 mois selon la fréquentation.</p>",
      specificChallenges: [
        "Moquettes régulièrement exposées aux salissures extérieures dans les halls proches de la D934.",
        "Présence de poussières fines en provenance de la gare de Vaires-Torcy et des axes routiers proches.",
        "Nombreux escaliers en moquette dans les résidences sans ascenseur, rendant le nettoyage plus complexe.",
        "Humidité fréquente en rez-de-chaussée, avec des délais de séchage à anticiper."
      ],
      faqAdditions: [
      
        {
          question:
            "Vous intervenez aussi dans les petites copropriétés ou les immeubles avec peu de lots ?",
          answer:
            "Bien sûr. À Vaires-sur-Marne, nous travaillons aussi bien dans de grandes résidences comme celles du quartier du Parc de l’Aulnay que dans des immeubles plus modestes de 6 à 12 logements. Le protocole est toujours adapté à la configuration des lieux, quelle que soit leur taille."
        },
        {
          question:
            "Est-ce que votre méthode peut abîmer la moquette ou accélérer son usure ?",
          answer:
            "Non, nous utilisons une méthode par injection-extraction à eau chaude, respectueuse des fibres. Le réglage de la pression et de la température est adapté selon le type de moquette. Ce procédé nettoie en profondeur sans altérer la trame. Le temps de séchage varie entre 4 et 8 heures selon la ventilation."
        },
        {
          question:
            "Comment organisez-vous l’intervention pour limiter la gêne dans l’immeuble ?",
          answer:
            "Nous planifions l’intervention avec le syndic ou le gardien en tenant compte des horaires de passage. Les cages sont nettoyées cage par cage, et nous informons les résidents si nécessaire. Le balisage est systématique pour éviter les glissades, et nous respectons les règles de bon voisinage."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking propre et bien entretenu à Vaires-sur-Marne rassure les usagers, limite les glissades et valorise immédiatement l’image de l’immeuble ou de l’entreprise.",
      whyUsBullets: [
        "Connaissance du contexte local (D934, ZAC, parkings près de la gare).",
        "Autolaveuses professionnelles et dégraissants adaptés aux revêtements de sol et taches tenaces.",
        "Travail par zones, tôt le matin ou en faible affluence pour limiter l’impact.",
        "Remise d’un compte-rendu avec photos avant/après sur demande du syndic ou du gestionnaire."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, les parkings souterrains et aériens subissent un encrassement rapide lié au passage intensif, à la proximité de la D934 et aux va-et-vient quotidiens vers la gare de Vaires-Torcy. Poussière noire, traces de pneus, taches d’huile, marquages à peine visibles, murs salis… Ces dégradations génèrent une impression de négligence et peuvent être source d’inconfort ou d’insécurité, en particulier en période humide ou dans les zones peu éclairées.</p><p class=\"mt-4\">Dans les copropriétés, les commerces ou les parkings d’entreprises, un entretien professionnel permet d’assainir l’ensemble des surfaces, de sécuriser les déplacements, de restaurer la lisibilité des circulations et de redonner une image maîtrisée de la gestion du site. Klinova assure des prestations techniques adaptées aux contraintes du terrain.</p>",
      uniqueDeepDive:
        "<p>Chaque intervention débute par un diagnostic approfondi : état des sols (béton brut, peinture ou résine), niveau d’encrassement, efficacité de l’évacuation des eaux, configuration des rampes et hauteur sous plafond. Nous évaluons aussi les contraintes de rotation des véhicules et les éventuelles coupures d’accès. Cette phase permet de planifier l’intervention par zones pour limiter la gêne.</p><p class=\"mt-4\">Après un balayage mécanique ou manuel selon les cas, les zones sont dégagées et balisées. Le nettoyage est réalisé à l’autolaveuse pour les grandes surfaces planes, avec application de dégraissant si nécessaire. Pour les zones complexes (coins, pieds de murs, rampes), nous utilisons une méthode à haute pression contrôlée. Les eaux de lavage sont strictement récupérées ou dirigées vers les réseaux adaptés. En zone humide ou peu ventilée, le séchage est anticipé. Nous recommandons un nettoyage approfondi une à deux fois par an, selon l’usage.</p>",
      specificChallenges: [
        "Circulation dense liée à la gare de Vaires-Torcy, générant poussières et hydrocarbures dans les zones d’entrée.",
        "Taches grasses et noires persistantes dans les rampes souterraines exposées au trafic quotidien.",
        "Parkings avec rampes étroites et peu ventilés, rendant la gestion des fumées et du séchage plus complexe.",
        "Besoin fréquent de travailler en rotation pour ne pas bloquer les accès aux résidents ou aux usagers."
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi nos parkings sont-ils en permanence recouverts de poussière noire ?",
          answer:
            "La proximité immédiate de la D934, des axes de bus et de la gare de Vaires-Torcy expose les parkings à un encrassement régulier par des particules fines, issues à la fois des pneus, des moteurs et de l’environnement routier. Ces poussières se déposent en continu sur les sols, les murs et les équipements. Un nettoyage technique permet de restaurer une propreté visible."
        },
        {
          question:
            "Est-ce qu’il faut entièrement vider le parking pour intervenir ?",
          answer:
            "Non, nous pouvons intervenir par zones en organisant une rotation des véhicules. Cela permet de limiter les désagréments pour les résidents ou les utilisateurs. Lors du diagnostic, nous déterminons les zones à nettoyer en priorité et nous balisons chaque phase d’intervention pour garantir la sécurité et l’efficacité du chantier."
        },
        {
          question:
            "Pouvez-vous enlever les anciennes taches d’huile incrustées ?",
          answer:
            "Nous utilisons des dégraissants professionnels performants, mais certaines taches très anciennes, notamment sur béton poreux, peuvent laisser une trace visuelle même après traitement. Dans la plupart des cas, nous parvenons à atténuer fortement les taches et à restaurer une propreté générale satisfaisante. Le diagnostic permet d’évaluer cela en amont."
        },
        {
          question: "Que faites-vous des eaux de lavage ?",
          answer:
            "Les eaux issues du nettoyage sont gérées selon les règles en vigueur. Soit elles sont dirigées vers le réseau des eaux usées si un raccordement est présent, soit elles sont récupérées par l’autolaveuse ou évacuées via une filière spécialisée en cas de pollution. Aucun rejet sauvage n’est effectué. Nous sommes très stricts sur la conformité environnementale."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Retrouver un balcon propre, sec et agréable à utiliser à Vaires-sur-Marne transforme instantanément la perception de son logement.",
      whyUsBullets: [
        "Bonne connaissance des résidences exposées à la Marne ou au bois de Vaires.",
        "Méthode adaptée à chaque sol, sans agression des joints ni des surfaces fragiles.",
        "Travail en journée ou sur créneau calme pour limiter toute gêne aux voisins.",
        "Compte-rendu d’intervention possible avec recommandations d’entretien en fin de chantier."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, les balcons sont souvent exposés aux dépôts verts, à la poussière urbaine, aux traces d’eau stagnante ou encore aux résidus de terre et de végétation. L’environnement local — humidité liée à la Marne, pollen, proximité de la voie ferrée ou du bois de Vaires — accentue ces encrassements.</p><p class=\"mt-4\">Peu à peu, l’espace perd son usage : le sol devient glissant, les joints noircissent, et la saleté semble s’incruster durablement. Résultat : le balcon reste inutilisé, comme à l’abandon. Un nettoyage professionnel complet permet de remettre les surfaces en état et de rendre au balcon sa fonction de lieu de vie extérieur.</p>",
      uniqueDeepDive:
        "<p>L’intervention commence par une préparation soignée : protection de la porte-fenêtre et des encadrements, déplacement ou bâchage du mobilier, des bacs de plantes et des objets personnels. Nous procédons ensuite à l’enlèvement manuel des résidus visibles : feuilles mortes, terre, résidus de jardinière, traces de graisse ou d’eau stagnante.</p><p class=\"mt-4\">Le nettoyage est réalisé avec des produits adaptés au type de sol (carrelage, dalle béton, bois composite) pour respecter les surfaces. Nous insistons sur les joints, les angles, les pieds de murs, ainsi que les garde-corps et vitres. La gestion de l’eau est maîtrisée pour éviter les coulures : raclette, aspiration manuelle ou chiffon absorbant selon la configuration. Le client reçoit des conseils simples pour maintenir l’entretien : balayage régulier, nettoyage léger en fin d’hiver, et aération après pluie.</p>",
      specificChallenges: [
        "Les balcons proches de la Marne ou de la D934 accumulent poussières, humidité et mousses vertes.",
        "Sols poreux dans certaines résidences des années 70, nécessitant des rinçages contrôlés.",
        "Garde-corps complexes en verre ou métal peint à nettoyer sans altération.",
        "Coulures à éviter systématiquement vers les balcons du dessous, avec gestion par raclette et bâchage."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage peut endommager le carrelage ou les joints ?",
          answer:
            "Non, nos produits sont choisis pour respecter les surfaces. Nous adaptons la pression et le dosage selon le type de sol. Le nettoyage ne fragilise ni les joints ni les carrelages s’ils sont déjà en bon état. En cas de fissure ou de fragilité, nous vous alertons en amont et adaptons la méthode."
        },
        {
          question: "Et si l’eau coule chez le voisin du dessous ?",
          answer:
            "C’est justement ce que nous évitons. Lors de l’intervention, l’eau est canalisée vers l’intérieur du balcon ou absorbée. Si nécessaire, nous utilisons raclette, serpillière ou aspiration pour éviter toute coulure vers les niveaux inférieurs. Notre protocole est prévu pour les configurations en étage."
        },
        {
          question:
            "Utilisez-vous des produits dangereux pour les plantes ou les animaux ?",
          answer:
            "Non. Nous utilisons des nettoyants dilués et rincés soigneusement, sans substances nocives pour les plantes ou les animaux domestiques. Si vous avez des bacs potagers ou des herbes aromatiques, il suffit de nous le signaler : nous les protégerons ou les déplacerons pendant le nettoyage."
        },
        {
          question: "Quand peut-on réutiliser le balcon après votre passage ?",
          answer:
            "En général, le sol est sec et praticable dans les 2 à 4 heures après notre passage, selon l’ensoleillement et le type de surface. Nous vous signalons les zones encore humides et vous donnons les consignes nécessaires. Il est tout à fait possible de réinstaller votre mobilier dans la journée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Après intervention, le balcon redevient sain, désinfecté et sûr à utiliser à Vaires-sur-Marne, même après une accumulation importante de fientes et de débris.",
      whyUsBullets: [
        "Bonne connaissance des résidences proches du bois de Vaires ou des zones arborées sensibles.",
        "Protocole strict avec EPI, désinfection homologuée et gestion sanitaire sécurisée.",
        "Organisation discrète, créneaux adaptés et intervention en étage sans gêne pour les voisins.",
        "Compte-rendu possible incluant photos et recommandations de prévention."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, de nombreux balcons sont exposés aux passages réguliers des pigeons attirés par les grands arbres, les toitures accessibles et les zones calmes en hauteur. Les fientes s’accumulent rapidement : odeurs fortes, salissures épaisses, traces corrosives, poussières sèches et parfois présence de nids. Le balcon devient inutilisable et source d’inquiétude pour l’occupant, notamment en raison des risques sanitaires liés aux micro-organismes contenus dans les déjections.</p><p class=\"mt-4\">Ces situations peuvent aussi créer des tensions au sein de la copropriété, surtout lorsque les nuisances touchent plusieurs logements. Un traitement professionnel, sécurisé et complet est indispensable pour remettre les surfaces en état et garantir une désinfection conforme.</p>",
      uniqueDeepDive:
        "<p>L’intervention débute par la mise en place d’équipements de protection individuelle : combinaison, gants, masque respiratoire et lunettes. Nous protégeons l’intérieur du logement avec des bâches afin d’éviter toute dispersion de poussières. Avant toute manipulation, les fientes sèches sont légèrement humidifiées pour limiter la remise en suspension des particules. Les déchets (fientes, plumes, nids) sont ensuite retirés manuellement et conditionnés dans des sacs spécifiques destinés aux déchets contaminés.</p><p class=\"mt-4\">Le nettoyage du sol, des murs, du garde-corps et des vitres se fait avec des produits adaptés, parfois associés à une pression modérée selon le support. Une désinfection complète est appliquée avec un virucide/bactéricide homologué, en respectant rigoureusement le temps de contact. Une fois l’intervention terminée, nous recommandons d’aérer quelques heures et d’attendre 24 h avant de réutiliser le balcon. Des solutions de dissuasion peuvent être proposées selon la configuration.</p>",
      specificChallenges: [
        "Fientes plus fréquentes autour des résidences proches du bois de Vaires et des couloirs de vol.",
        "Accès en étage parfois complexe, nécessitant une sécurisation complète et un confinement des poussières.",
        "Présence de dépôts corrosifs sur garde-corps métalliques nécessitant un nettoyage prudent.",
        "Déchets contaminés soumis à filière contrôlée, nécessitant une évacuation stricte et traçable."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce vraiment nécessaire de faire intervenir un professionnel pour des fientes de pigeons ?",
          answer:
            "Oui, car les fientes peuvent contenir des micro-organismes potentiellement dangereux lorsqu’elles sont sèches et remises en suspension. Un professionnel utilise des protections adaptées, maîtrise l’humidification préalable et applique une désinfection homologuée. Cela garantit la sécurité des occupants et évite toute exposition inutile."
        },
        {
          question:
            "Les produits de désinfection sont-ils sûrs pour les habitants et les animaux une fois secs ?",
          answer:
            "Oui. Les produits que nous utilisons sont homologués pour un usage en milieu résidentiel. Ils nécessitent simplement un temps de contact puis un séchage complet. Une fois la surface sèche, il n’y a plus de risque pour les adultes, enfants ou animaux. Nous recommandons d’aérer quelques heures après l’intervention."
        },
        {
          question:
            "Les fientes peuvent-elles endommager durablement le sol ou les garde-corps ?",
          answer:
            "Les fientes sont corrosives et peuvent provoquer des traces ou une dégradation légère lorsqu’elles stagnent longtemps. Le nettoyage et la désinfection stoppent cette action. Nous évaluons toujours l’état des supports avant d’intervenir et adaptons le nettoyage pour éviter d’aggraver une fragilité préexistante."
        },
        {
          question: "Que deviennent les déchets retirés du balcon ?",
          answer:
            "Tout est emporté par nos soins dans des emballages étanches. Nous ne laissons rien dans les conteneurs de la résidence ni sur le trottoir. L'évacuation est gérée en externe pour garantir une propreté absolue des lieux."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "À Vaires-sur-Marne, retrouver des canapés, tapis et matelas propres et désodorisés change immédiatement l’ambiance du logement et le confort du quotidien.",
      whyUsBullets: [
        "Interventions à domicile fréquentes dans les pavillons de la cité EDF ou du centre-ville.",
        "Méthode douce mais efficace, adaptée aux tissus fragiles ou encrassés.",
        "Horaires souples, passage rapide et intervention en toute discrétion à domicile.",
        "Suivi possible après traitement si une reprise partielle est nécessaire."
      ],
      uniqueIntro:
        "<p>Dans les appartements et pavillons de Vaires-sur-Marne, les canapés, tapis et matelas sont soumis à rude épreuve : enfants, animaux, petits accidents, va-et-vient quotidien. Rapidement, les textiles accumulent poussières, poils, taches de nourriture ou de boisson, parfois des odeurs persistantes ou des traces d’urine.</p><p class=\"mt-4\">Même dans un logement bien tenu, ces éléments donnent une impression de saleté permanente et peuvent provoquer des gênes vis-à-vis des invités ou des réactions allergiques. Un nettoyage professionnel permet de retirer les allergènes, de détacher les textiles en profondeur et de rendre les surfaces saines et agréables à utiliser à nouveau.</p>",
      uniqueDeepDive:
        "<p>L’intervention débute par un diagnostic du mobilier ou des tapis à nettoyer : nature du textile (synthétique, laine, velours, microfibre…), état général, type et origine des taches. Nous appliquons ensuite des produits ciblés sur les zones problématiques : dégraissant textile, enzymatique pour urine ou produits spécifiques selon la fibre.</p><p class=\"mt-4\">Le nettoyage principal se fait par injection-extraction à l’eau tiède ou chaude, avec aspiration immédiate de l’eau sale. Le processus respecte les textiles fragiles et permet un séchage rapide. L’intervention est discrète, avec un matériel adapté aux contraintes du domicile (bruit modéré, travail en étage ou sans ascenseur). Nous conseillons d’aérer la pièce ensuite et de limiter l’usage des surfaces pendant quelques heures. Des gestes simples d’entretien peuvent prolonger les effets : aspirateur régulier, plaid de protection, aération des matelas.</p>",
      specificChallenges: [
        "Canapés et tapis souvent exposés aux poils et salissures dans les logements avec animaux.",
        "Tissus sensibles ou anciens nécessitant une méthode douce et un prétraitement ciblé.",
        "Odeurs persistantes dans les chambres mal ventilées ou les rez-de-chaussée humides.",
        "Séchage parfois plus lent en hiver dans les logements peu aérés ou peu exposés."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que votre nettoyage élimine les acariens et les allergènes ?",
          answer:
            "Oui. Le nettoyage par injection-extraction combiné à l’aspiration permet de retirer une grande partie des poussières fines, des squames et des acariens. Cela assainit les matelas, les canapés et les tapis. Nous recommandons de répéter ce type de nettoyage au moins une fois par an pour les personnes allergiques."
        },
        {
          question:
            "Peut-on vraiment retirer les taches d’urine ou les odeurs persistantes ?",
          answer:
            "Nous utilisons un prétraitement enzymatique spécifique pour les taches organiques (urine, vomi, graisse). Dans la majorité des cas, les odeurs sont fortement réduites, voire supprimées. Certaines anciennes taches peuvent laisser une trace visuelle, mais l’hygiène est restaurée. Le diagnostic initial permet de fixer des attentes réalistes."
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser le canapé ou le tapis ?",
          answer:
            "Prévoyez une indisponibilité de quelques heures. Bien que l'extraction mécanique retire l'essentiel de l'eau, une ventilation active (fenêtres ouvertes) est nécessaire pour sécher les fibres en profondeur avant de vous rasseoir."
        },
        {
          question:
            "Faut-il préparer quelque chose avant votre venue ?",
          answer:
            "Il suffit de dégager l’accès à la pièce et de retirer les objets personnels sur le canapé ou autour du tapis. Si possible, prévoyez une aération de la pièce pendant et après l’intervention. Nous apportons tout le matériel nécessaire et protégeons les zones proches si besoin."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;
