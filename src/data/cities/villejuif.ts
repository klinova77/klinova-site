import type { City } from "~/types/geo";

const city: City = {
  name: "Villejuif",
  slug: "villejuif",
  postalCodes: ["94800"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Villejuif pour la propreté des parties communes, parkings et espaces extérieurs. Entre le pôle hospitalier Gustave Roussy et les quartiers résidentiels, nos équipes s'adaptent aux contraintes d'accès et aux rythmes de chaque copropriété.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: `<p>Au pied de l'Institut Gustave Roussy et du terminus du métro 7, Villejuif concentre des flux importants et des configurations variées. Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de leurs espaces communs et privatifs.</p>
<p class="mt-4">Notre organisation repose sur une coordination terrain rigoureuse : planification des passages, adaptation aux contraintes de stationnement, reporting si demandé. Chaque intervention tient compte du bâti existant et des usages réels du site.</p>
<ul>
  <li><strong>Réactivité locale :</strong> Équipes basées en Île-de-France, capables d'intervenir rapidement sur les secteurs denses comme Léo Lagrange ou les abords de l'hôpital Paul Brousse.</li>
  <li> <strong>Adaptation au bâti :</strong> Résidences années 70, constructions récentes de la ZAC Campus Grand Parc ou pavillons des Barmonts : méthodes ajustées à chaque configuration.</li>
  <li><strong>Coordination simplifiée :</strong> Un interlocuteur unique pour planifier les interventions, gérer les accès (badges, gardiens) et limiter la gêne pour les occupants.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Stationnement tendu</strong> autour des métros et du pôle hospitalier, accès véhicule à anticiper.",
    "Grands ensembles des Lozaits et Lebon-Lamartine : halls à fort passage, sols encrassés rapidement.",
    "Résidences récentes ZAC Campus Grand Parc : parkings souterrains neufs, revêtements résine à entretenir.",
    "Pollution N7 et A6 : dépôts noirs sur balcons et façades des quartiers ouest.",
    "Présence de <strong>gardiens et badges Vigik</strong> fréquente, coordination nécessaire pour chaque accès.",
  ],

  districts: [
    "Centre-ville",
    "Quartier Nord / Léo Lagrange",
    "Quartier Sud / Auguste Delaune",
    "Les Lozaits",
    "Lebon - Lamartine",
    "Les Barmonts",
    "Campus Grand Parc / IGR",
  ],
  nearbyCities: [
    "Le Kremlin-Bicêtre",
    "Ivry-sur-Seine",
    "Vitry-sur-Seine",
    "L'Haÿ-les-Roses",
    "Cachan",
    "Arcueil",
  ],

  landmarks: [
    "Mairie de Villejuif",
    "Institut Gustave Roussy",
    "Hôpital Paul Brousse",
    "Parc des Hautes-Bruyères",
    "Métro Villejuif - Louis Aragon",
    "Parc du 8 Mai 1945",
  ],

  faq: [
    {
      question:
        "Q1 : Comment organisez-vous les interventions dans les secteurs où le stationnement est difficile ?",
      answer:
        "<p>Nous repérons les contraintes en amont : zones bleues, proximité des métros, jours de marché. Nos équipes adaptent leurs <strong>horaires d'arrivée</strong> et utilisent des véhicules adaptés. À Villejuif, le stationnement autour des stations Léo Lagrange ou Louis Aragon nécessite souvent un passage tôt le matin.</p>",
    },
    {
      question:
        "Q2 : Pouvez-vous intervenir dans des résidences avec gardien ou système de badges ?",
      answer:
        "<p>Oui, c'est courant dans les copropriétés de Villejuif. Nous récupérons les <strong>badges Vigik</strong> ou coordonnons directement avec le gardien pour accéder aux parties communes, caves ou parkings souterrains. Le syndic reste informé du planning prévu.</p>",
    },
    {
      question: "Q3 : Quel délai pour obtenir un devis après une demande ?",
      answer:
        "<p>Nous répondons généralement sous 24 à 48 heures. Pour les demandes concernant des <strong>copropriétés ou locaux professionnels</strong>, un passage sur site peut être proposé afin d'évaluer les surfaces, l'état des sols et les contraintes d'accès spécifiques.</p>",
    },
    {
      question: "Q4 : Proposez-vous un suivi ou un reporting après intervention ?",
      answer:
        "<p>Oui, principalement pour les gestionnaires et syndics. Nous pouvons fournir un <strong>compte-rendu d'intervention</strong> avec photos avant/après si demandé. Cela facilite le suivi pour les copropriétés ou les bailleurs qui gèrent plusieurs lots à Villejuif.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées et détachage ciblé pour des moquettes assainies, avec un temps de séchage maîtrisé permettant une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des configurations d'immeubles autour du métro Louis Aragon et des accès restreints en centre-ville.",
        "Matériel d'injection-extraction adapté aux dalles textiles comme aux velours épais, avec détachants spécifiques selon les fibres.",
        "Planification des créneaux hors affluence, protection des zones adjacentes et consignes de non-piétinement transmises aux occupants.",
      ],
      uniqueIntro: `<p>Les traces de passage répété sont visibles sur les moquettes dès l'entrée des halls et couloirs. Autour de la station Métro Villejuif - Louis Aragon, le flux quotidien de visiteurs, patients et résidents laisse des marques grises le long des zones de circulation. Les fibres s'écrasent, les taches de café ou de boue sèchent et s'incrustent progressivement dans le textile.</p>
<p class="mt-4">Dans les immeubles des années 70-90, les halls d'entrée conservent souvent des moquettes d'origine ou remplacées par des dalles textiles. Ces revêtements encaissent un trafic soutenu sans entretien adapté. Le rendu visuel se dégrade, l'odeur de renfermé s'installe, et les copropriétaires ou gestionnaires reçoivent des remarques. Un ravivage en profondeur redonne de la tenue aux fibres et supprime les auréoles visibles.</p>
<p class="mt-4">La proximité des établissements de santé impose des contraintes horaires précises. Les interventions se planifient en journée, hors pics de fréquentation, avec protection des plinthes et balisage des accès le temps du séchage.</p>`,
      uniqueDeepDive: `<h3>Fibres assainies et taches éliminées</h3>
<p>L'objectif est d'obtenir une moquette débarrassée des salissures incrustées, avec des fibres redressées et un rendu homogène. Les zones de passage intensif retrouvent leur aspect d'origine, sans auréoles ni traces grises persistantes.</p>

<h3>Diagnostic et préparation du support</h3>
<p>Avant toute intervention, le type de moquette est identifié : bouclée, velours, épaisse ou fine. Les taches sont repérées selon leur nature — tanin, graisses, traces anciennes. Les plinthes et bas de murs reçoivent une protection. Une aspiration préalable retire les particules libres.</p>

<h3>Injection-extraction et gestion du séchage</h3>
<p>Le traitement repose sur la méthode injection-extraction : une solution nettoyante pénètre les fibres, puis l'eau chargée de salissures est aspirée immédiatement. Les zones de trafic reçoivent plusieurs passes. Le détachage ciblé complète l'intervention sur les marques résistantes. L'extraction maximale réduit le temps de séchage, généralement estimé entre 4 et 8 heures selon l'épaisseur et la ventilation du local.</p>`,
      specificChallenges: [
        "Halls à fort passage près du terminus métro : fibres écrasées et traces grises concentrées sur les premiers mètres.",
        "Moquettes des années 70-90 dans les copropriétés : supports parfois fragiles nécessitant un réglage de pression adapté.",
        "Taches anciennes incrustées depuis plusieurs mois : détachage ciblé indispensable avant extraction.",
        "Stationnement limité en centre-ville : organisation du chargement et déchargement du matériel à anticiper.",
        "Contraintes horaires autour des établissements de santé : interventions planifiées hors pics de fréquentation.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Dans les immeubles du centre-ville aux escaliers étroits, comment transportez-vous le matériel de nettoyage ?",
          answer:
            "<p>Le matériel d'injection-extraction se compose d'éléments modulables, transportables à la main dans les cages d'escalier sans ascenseur. Les flexibles et la cuve se montent sur place. Les protections de sol sont posées avant chaque passage pour éviter les traces sur les marches.</p>",
        },
        {
          question:
            "Q2 : Les halls du quartier des Lozaits présentent des taches anciennes sur moquette. Quelles techniques utilisez-vous ?",
          answer:
            "<p>Les taches incrustées depuis plusieurs mois reçoivent un pré-traitement avec un détachant adapté à leur nature — tanin, graisse ou terre. Après un temps de pose, l'injection-extraction retire la salissure en profondeur. Plusieurs passes sont effectuées sur les zones les plus marquées.</p>",
        },
        {
          question:
            "Q3 : Comment adaptez-vous la méthode selon le type de moquette dans les bureaux proches des hôpitaux ?",
          answer:
            "<p>Le diagnostic préalable identifie la structure des fibres : bouclées, velours ras ou épaisses. La pression d'injection et le débit d'extraction sont ajustés pour éviter toute détérioration. Les dalles textiles collées reçoivent un traitement différent des moquettes tendues sur thibaude.</p>",
        },
        {
          question:
            "Q4 : Avec le stationnement difficile autour du métro Louis Aragon, comment organisez-vous la livraison du matériel ?",
          answer:
            "<p>Le créneau d'intervention est fixé en amont avec le gardien ou le gestionnaire pour identifier un point de dépose temporaire. Le matériel est déchargé rapidement, puis le véhicule stationné sur un emplacement autorisé à proximité. Cette organisation évite les allers-retours et limite la gêne.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking, traitement des taches d'huile et gestion rigoureuse des eaux de lavage, avec balisage sécurisé et coordination des accès véhicules.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès spécifiques aux parkings du secteur Campus Grand Parc et des résidences villejuifoises.",
        "Autolaveuses professionnelles et gestion stricte des eaux de lavage conformément aux exigences des copropriétés.",
        "Coordination préalable avec syndics et gestionnaires pour organiser la rotation des véhicules sans bloquer les usagers.",
      ],
      uniqueIntro: `<p>Comment maintenir un parking en bon état quand le trafic ne faiblit jamais ? Dans le secteur de la <strong>ZAC Campus Grand Parc</strong>, les sous-sols accueillent quotidiennement des flux liés aux établissements de santé et aux résidences neuves. Les traces de pneus s'accumulent, les coulures d'huile marquent le béton, et la poussière forme un voile grisâtre sur les rampes d'accès.</p>
<p class="mt-4">Un parking encrassé dégrade l'image d'une copropriété ou d'un site professionnel. Les revêtements varient selon l'époque de construction : <strong>béton brut dans les souterrains des années 70-80</strong>, résine ou enrobé dans les programmes récents. Chaque surface réagit différemment aux salissures et nécessite une approche adaptée pour retrouver un aspect propre et sécurisé.</p>
<p class="mt-4">La rotation élevée des véhicules, notamment autour des pôles hospitaliers, génère un encrassement rapide. Une intervention structurée permet de traiter l'ensemble des zones sans perturber l'accès des usagers, avec un balisage clair et une coordination préalable avec le gestionnaire.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation du chantier</h3>
<p>Avant toute intervention, nous identifions le type de revêtement et l'état des évacuations. Le niveau d'encrassement oriente le choix des produits dégraissants. Un balisage sécurisé est installé et le zonage véhicules organisé avec le syndic ou le gestionnaire pour permettre une rotation fluide.</p>

<h3>Traitement mécanisé des surfaces</h3>
<p>L'autolaveuse effectue des passes sur les zones de circulation. Les secteurs critiques reçoivent un traitement ciblé : rampes d'accès pour préserver l'adhérence, angles morts, pieds de murs et rigoles où les dépôts s'accumulent. Sur les taches d'huile anciennes, un dégraissant spécifique est appliqué avant le passage mécanique.</p>

<h3>Gestion des eaux et finalisation</h3>
<p>Les eaux de lavage sont récupérées et dirigées vers les évacuations prévues, sans rejet sauvage. Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé. Nous transmettons ensuite une recommandation de fréquence adaptée au trafic constaté.</p>`,
      specificChallenges: [
        "Revêtements mixtes entre parkings anciens (béton brut) et constructions récentes (résine, enrobé).",
        "Taches d'huile incrustées dans les sous-sols des résidences années 70-80.",
        "Trafic soutenu lié aux établissements de santé : rotation véhicules à coordonner.",
        "Rampes d'accès étroites nécessitant un traitement antidérapant soigné.",
        "Gestion des eaux de lavage conforme aux évacuations existantes.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Sur les parkings souterrains des résidences années 70-80 à Villejuif, comment traitez-vous les taches d'huile fortement incrustées ?",
          answer:
            "<p>Nous appliquons un dégraissant adapté au béton brut avant le passage de l'autolaveuse. Le produit agit plusieurs minutes pour décoller les résidus huileux. Les passes mécaniques extraient ensuite les salissures ramollies. Sur les taches anciennes, un second traitement localisé peut être nécessaire pour obtenir un résultat satisfaisant.</p>",
        },
        {
          question:
            "Q2 : À la ZAC Campus Grand Parc, quelles méthodes employez-vous pour gérer les eaux de lavage des parkings ?",
          answer:
            "<p>Les eaux sont canalisées vers les regards et rigoles existants. Nous vérifions au préalable l'état des évacuations pour éviter tout engorgement. Aucun rejet sauvage n'est effectué : les eaux chargées restent dans le circuit prévu. Cette gestion respecte les exigences des copropriétés et des gestionnaires de la zone.</p>",
        },
        {
          question:
            "Q3 : Quelles différences de méthode appliquez-vous entre parkings souterrains et aériens près des établissements de santé ?",
          answer:
            "<p>En souterrain, l'éclairage limité impose un diagnostic visuel minutieux et un dépoussiérage des blocs lumineux. En aérien, les intempéries génèrent davantage de dépôts organiques. Le choix de pression et de produits s'adapte au revêtement : béton poreux ou enrobé lisse. La ventilation diffère aussi, ce qui influence le temps de séchage.</p>",
        },
        {
          question:
            "Q4 : Pour les parkings hospitaliers très fréquentés à Villejuif, proposez-vous des plages horaires spécifiques ?",
          answer:
            "<p>Nous intervenons en horaires décalés : tôt le matin, en soirée ou le week-end selon les flux de visiteurs. La coordination avec le gestionnaire permet de définir les créneaux les moins contraignants. Un balisage clair sécurise les zones en cours de traitement pendant que le reste du parking reste accessible.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Villejuif : traitement des dépôts, nettoyage des garde-corps et gestion maîtrisée de l'eau pour un espace extérieur utilisable sans gêne pour le voisinage.",
      whyUsBullets: [
        "Balcons exposés à la pollution de l'Avenue de Paris : nous adaptons le traitement à ce niveau d'encrassement spécifique.",
        "Pression ajustée selon le support, brossage ciblé sur les joints, produits compatibles béton et carrelage.",
        "Protection systématique des voisins du dessous, gestion de l'eau maîtrisée, intervention discrète en journée.",
      ],
      uniqueIntro: `<p>Le long de l'<strong>Avenue de Paris</strong>, les balcons accumulent rapidement un voile grisâtre. Suies, particules fines et poussières de circulation se déposent sur le sol, les garde-corps, les rebords. En quelques mois, le carrelage perd son aspect d'origine, les joints noircissent, et l'envie de profiter de cet espace diminue. Ce n'est pas une question d'entretien négligé : c'est l'environnement urbain qui impose ce rythme.</p>
<p class="mt-4">Sur les <strong>balcons béton des cités</strong> comme sur les <strong>carrelages des pavillons</strong>, les conséquences sont les mêmes : une surface terne, parfois glissante, qui donne l'impression d'un extérieur mal entretenu. Les plantes jaunissent sous la couche de crasse, le mobilier se salit plus vite. Retrouver un balcon propre, c'est aussi retrouver l'usage réel de ces quelques mètres carrés.</p>
<p class="mt-4">L'intervention prend en compte le <strong>vis-à-vis fréquent</strong> et la proximité des voisins. Chaque étape est pensée pour limiter les projections, contrôler l'évacuation de l'eau et protéger les éléments sensibles avant de commencer.</p>`,
      uniqueDeepDive: `<h3>Sol et joints</h3>
<p>Le carrelage ou le béton est d'abord débarrassé des débris visibles : feuilles mortes, terre, résidus divers. Un produit adapté au support est appliqué, puis brossé manuellement ou mécaniquement selon l'encrassement. Les joints reçoivent une attention particulière pour éviter toute dégradation lors du rinçage.</p>

<h3>Garde-corps et vitrages</h3>
<p>Les barreaux métalliques ou les parois vitrées sont traités séparément. Le nettoyage élimine les traces de pollution sans rayer les surfaces. Les fixations et rebords sont également essuyés pour un rendu homogène sur l'ensemble du balcon.</p>

<h3>Murs mitoyens et évacuation</h3>
<p>Les parois latérales accessibles sont rafraîchies si leur état le permet. L'eau de rinçage est contrôlée tout au long de l'intervention : bâches de protection, aspiration, orientation du flux. Le séchage est accéléré pour permettre une remise en service rapide de l'espace.</p>`,
      specificChallenges: [
        "Noircissement accéléré sur les balcons proches de la N7 : suies et particules fines incrustées.",
        "Joints fragilisés sur les carrelages anciens nécessitant un rinçage basse pression.",
        "Vis-à-vis rapproché dans les résidences denses : gestion des projections indispensable.",
        "Évacuation d'eau à contrôler pour éviter les coulures chez les voisins du dessous.",
        "Mobilier et plantes à déplacer ou protéger avant toute intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Comment nettoyer un balcon en béton fortement noirci par la pollution le long de l'Avenue de Paris sans abîmer les joints ?",
          answer:
            "<p>Le béton encrassé par les suies de circulation nécessite un produit désincrustant appliqué avant brossage. Les joints sont traités avec une pression réduite pour éviter leur effritement. Le rinçage est orienté vers le point d'évacuation, sans stagnation prolongée sur les zones fragiles.</p>",
        },
        {
          question:
            "Q2 : Sur des balcons mitoyens, comment gérez-vous l'eau de lavage pour éviter les coulures chez le voisin du dessous ?",
          answer:
            "<p>Des bâches de protection sont installées en périphérie avant le début du nettoyage. L'eau est dirigée vers le point d'évacuation du balcon, avec aspiration si nécessaire. Le débit est contrôlé pour limiter les projections latérales et verticales tout au long de l'intervention.</p>",
        },
        {
          question:
            "Q3 : Quelles techniques préconisez-vous pour éliminer dépôts verts et mousses sur balcons ombragés sans détériorer le support ?",
          answer:
            "<p>Les mousses sont d'abord décollées mécaniquement à la brosse dure. Un traitement adapté est ensuite appliqué pour freiner la repousse. Le rinçage reste modéré pour ne pas fragiliser les joints ni disperser les résidus vers les zones voisines.</p>",
        },
        {
          question:
            "Q4 : Dans les copropriétés anciennes de Villejuif, quelles alternatives à la haute pression utilisez-vous pour nettoyer un balcon carrelé ?",
          answer:
            "<p>Le brossage manuel combiné à un produit dégraissant remplace efficacement la haute pression sur les carrelages fragiles. Cette méthode préserve les joints et limite le bruit. Le séchage est accéléré par essuyage pour permettre une utilisation rapide du balcon.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils pour limiter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des zones à risque à Villejuif, notamment les immeubles proches des parcs et espaces verts.",
        "Protocole complet avec EPI adaptés, confinement systématique et désinfection virucide homologuée.",
        "Évacuation des déchets en sacs étanches et coordination avec le voisinage pour limiter les nuisances.",
      ],
      uniqueIntro: `<p>Après quelques semaines sans intervention, un balcon exposé aux pigeons devient difficile à utiliser. Les résidences situées à proximité du <strong>Parc des Hautes-Bruyères</strong> connaissent particulièrement ce phénomène : les oiseaux s'installent sur les corniches, les garde-corps, et laissent des dépôts qui s'accumulent rapidement. L'odeur s'installe, le sol devient glissant, et l'espace extérieur perd toute utilité.</p>
<p class="mt-4">Les supports en béton ou en pierre, fréquents sur les immeubles des années 70-80 à Villejuif, absorbent l'acidité des fientes. Sans traitement, les taches s'incrustent et les matériaux se dégradent. Un balcon régulièrement souillé génère aussi une gêne vis-à-vis du voisinage, notamment dans les résidences où les espaces extérieurs se font face.</p>
<p class="mt-4">Une intervention structurée permet de retrouver un balcon utilisable : diagnostic de l'état des surfaces, confinement de la zone, nettoyage des dépôts, désinfection complète et recommandations pour limiter le retour des pigeons. Le protocole s'adapte à la configuration du logement et aux contraintes d'accès propres aux copropriétés denses.</p>`,
      uniqueDeepDive: `<h3>Balcon assaini et désinfecté</h3>
<p>L'objectif est de rendre l'espace réutilisable sans risque. Les fientes sont retirées, les supports nettoyés en profondeur, et un produit virucide homologué élimine les agents pathogènes présents sur le sol, le garde-corps et les parois.</p>

<h3>Confinement et protection préalables</h3>
<p>Avant toute manipulation, la zone est bâchée pour éviter la dispersion des poussières contaminées. L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. Les fientes sont humidifiées pour neutraliser les particules volatiles.</p>

<h3>Collecte, rinçage et recommandations</h3>
<p>Les dépôts sont ramassés et conditionnés en sacs étanches pour évacuation sécurisée. Le balcon est rincé après application du désinfectant, avec un temps de contact respecté. Selon la configuration, des solutions de dissuasion sont proposées : pics sur les rebords, filets de protection ou gel répulsif pour limiter le retour des pigeons.</p>`,
      specificChallenges: [
        "Proximité du Parc des Hautes-Bruyères : balcons exposés aux pigeons nichant dans les arbres.",
        "Supports en béton des grands ensembles sensibles à l'acidité des fientes.",
        "Vis-à-vis important dans les résidences denses : gêne olfactive pour les voisins.",
        "Accès parfois limité aux derniers étages sans ascenseur dans le centre ancien.",
        "Nécessité de coordonner l'évacuation des déchets avec les règles de la copropriété.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Face à des fientes abondantes sur un balcon donnant sur le Parc des Hautes-Bruyères, quelle intervention proposez-vous en urgence ?",
          answer:
            "<p>Nous intervenons rapidement avec un protocole complet : confinement de la zone, port d'EPI, humidification des dépôts pour éviter la dispersion, puis ramassage et désinfection. L'objectif est de rendre le balcon utilisable sous 24 à 48 heures selon l'ampleur des dépôts.</p>",
        },
        {
          question:
            "Q2 : Quels équipements de protection et quel protocole suivez-vous pour le nettoyage d'un balcon souillé par les pigeons ?",
          answer:
            "<p>L'intervenant porte un masque FFP2, une combinaison jetable, des gants et des lunettes. La zone est bâchée, les fientes humidifiées avant manipulation. Ce protocole limite les risques d'inhalation de particules contaminées et protège également l'intérieur du logement.</p>",
        },
        {
          question:
            "Q3 : Quels produits désinfectants utilisez-vous pour traiter des fientes sur des rebords en béton à Villejuif ?",
          answer:
            "<p>Nous appliquons un désinfectant virucide et bactéricide homologué, adapté aux supports minéraux. Le temps de contact est respecté avant rinçage. Ce traitement élimine les agents pathogènes tout en préservant l'intégrité du béton ou de la pierre.</p>",
        },
        {
          question:
            "Q4 : Comment organisez-vous la collecte et l'évacuation des déchets contaminés après un assainissement en copropriété ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches fermés sur place. L'évacuation se fait en fin d'intervention pour limiter les nuisances dans les parties communes. Nous adaptons les horaires si la copropriété impose des créneaux spécifiques.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à Villejuif, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Connaissance des logements du secteur Lebon-Lamartine, où rotations locatives et usages familiaux sollicitent fortement les textiles.",
        "Détachage adapté à chaque fibre, extraction complète et séchage contrôlé pour un résultat durable sans risque pour le tissu.",
        "Organisation souple pour intervenir dans les immeubles sans ascenseur, avec matériel transportable et remise en service rapide.",
      ],
      uniqueIntro: `<p>Comment préserver la propreté d'un canapé quand les enfants y prennent leur goûter, que le chat s'y installe chaque soir, ou que les colocataires se succèdent d'une année sur l'autre ? Dans le <strong>quartier Lebon-Lamartine</strong>, où se côtoient familles et étudiants en location, les textiles d'ameublement accumulent taches alimentaires, poils d'animaux et odeurs tenaces bien plus vite qu'ailleurs.</p>
<p class="mt-4">Un canapé taché ou un tapis grisâtre modifie l'atmosphère d'un séjour. Les fibres retiennent poussières et allergènes, l'odeur persiste malgré les aérations. Dans les <strong>appartements T2 à T4</strong> courants ici, souvent desservis par de petits immeubles sans ascenseur, le mobilier reste en place des années sans entretien profond. Le confort visuel et respiratoire s'en ressent.</p>
<p class="mt-4">Une intervention structurée permet de traiter chaque textile selon sa nature. Diagnostic du tissu, pré-traitement des zones souillées, extraction en profondeur : le protocole s'adapte à l'état réel du mobilier et aux contraintes d'accès de votre logement.</p>`,
      uniqueDeepDive: `<h3>Identifier le textile et les salissures</h3>
<p>Chaque tissu réagit différemment. Coton, velours, synthétique ou laine : un test discret sur zone cachée détermine la tolérance aux produits. Les taches sont repérées selon leur nature — café renversé, traces d'urine animale, auréoles grasses — pour adapter le détachage.</p>

<h3>Traiter les zones critiques avant extraction</h3>
<p>Les salissures incrustées nécessitent un pré-traitement ciblé. Un détachant enzymatique neutralise les odeurs organiques. Les fibres fragiles reçoivent une attention particulière pour éviter décoloration ou détérioration.</p>

<h3>Extraire et maîtriser le séchage</h3>
<p>La machine aspire l'eau chargée de résidus en profondeur. Le temps de séchage varie selon l'épaisseur du textile et l'aération disponible — généralement quelques heures en été, davantage en hiver. Des consignes précises vous permettent de réutiliser votre mobilier dans les meilleures conditions, avec une fréquence d'entretien recommandée selon l'usage quotidien.</p>`,
      specificChallenges: [
        "Taches alimentaires récurrentes sur canapés de familles avec enfants dans les T3-T4 du quartier.",
        "Odeurs d'animaux persistantes dans les fibres, fréquentes en location meublée étudiante.",
        "Accès par escaliers étroits sans ascenseur dans certains immeubles anciens du secteur.",
        "Stationnement limité pour décharger le matériel d'intervention en zone résidentielle dense.",
        "Textiles non déhoussables nécessitant un traitement sur place sans déplacement du mobilier.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Comment éliminez-vous acariens et allergènes d'un canapé tissu dans un appartement familial du quartier Lebon-Lamartine ?",
          answer:
            "<p>L'injection-extraction atteint les fibres en profondeur, là où se logent acariens et poussières. L'aspiration puissante retire ces particules avec l'eau de rinçage. Dans les logements familiaux du secteur, où les enfants passent du temps sur le canapé, cette méthode améliore sensiblement la qualité de l'air intérieur après séchage complet.</p>",
        },
        {
          question:
            "Q2 : En cas d'urine et odeurs persistantes sur un canapé en location meublée, quelles méthodes neutralisent efficacement l'odeur ?",
          answer:
            "<p>Un détachant enzymatique décompose les composés organiques responsables de l'odeur avant extraction. Le traitement pénètre jusqu'au rembourrage si nécessaire. Pour les locations étudiantes avec animaux, cette approche évite que l'odeur ne réapparaisse après quelques jours, même sur des taches anciennes.</p>",
        },
        {
          question:
            "Q3 : Pour un canapé non déhoussable, quelles techniques employez-vous pour un détachage en profondeur sans détériorer le tissu ?",
          answer:
            "<p>Un test préalable sur zone discrète vérifie la réaction du textile. La pression et la température sont ajustées selon la fibre — velours, coton ou synthétique. L'extraction contrôlée retire les salissures sans gorger le rembourrage, préservant la tenue et les couleurs du revêtement.</p>",
        },
        {
          question:
            "Q4 : Comment se déroule la préparation du logement et la gestion d'accès pour intervenir dans un immeuble sans ascenseur ?",
          answer:
            "<p>Le matériel est conçu pour être transporté à la main dans les escaliers étroits. Côté préparation, il suffit de dégager l'espace autour du mobilier à traiter. L'intervention reste concentrée sur une demi-journée maximum, avec consignes de séchage adaptées à la ventilation disponible dans votre appartement.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des dépôts verts pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des configurations locales : terrasses de pavillons ombragés, attiques d'immeubles récents, expositions variables selon les quartiers.",
        "Diagnostic préalable du support pour choisir entre brossage manuel, pression contrôlée ou traitement anti-mousse adapté aux dalles ou au bois.",
        "Organisation anticipée : déplacement du mobilier, protection des plantations, gestion de l'évacuation d'eau sans gêne pour le voisinage.",
      ],
      uniqueIntro: `<p>Dans les secteurs pavillonnaires proches de l'Avenue de la République et autour du centre-ville, les terrasses accumulent au fil des saisons un voile grisâtre, des mousses en bordure et des taches tenaces près des zones de repas. L'exposition aux intempéries, combinée à l'ombre partielle de certaines parcelles, accélère l'apparition de dépôts verts qui rendent le sol glissant et peu engageant.</p>
<p class="mt-4">Une terrasse entretenue change la perception de l'espace extérieur. Les dalles gravillonnées, le carrelage ou le bois composite retrouvent leur aspect d'origine, sans cette pellicule terne qui s'installe progressivement. Les joints redeviennent visibles, le mobilier peut être repositionné sans laisser de traces, et l'ensemble gagne en confort d'usage pour les beaux jours.</p>
<p class="mt-4">L'intervention commence par un diagnostic du support pour adapter la méthode. Certains matériaux nécessitent un brossage manuel, d'autres supportent une pression contrôlée. Le mobilier et les jardinières sont déplacés ou protégés, et l'évacuation de l'eau est anticipée pour préserver les plantations environnantes.</p>`,
      uniqueDeepDive: `<h3>Surface débarrassée et support identifié</h3>
<p>Le résultat final dépend d'abord de la préparation. Feuilles mortes, terre accumulée et débris sont enlevés manuellement. Le type de revêtement est vérifié pour déterminer si le bois nécessite un traitement doux ou si le carrelage peut recevoir une pression plus soutenue.</p>
<p class="mt-4">Les menuiseries et baies vitrées sont protégées avant toute application de produit.</p>

<h3>Traitement ciblé et élimination des dépôts</h3>
<p>Un produit adapté au support est appliqué sur les zones encrassées. Le brossage mécanique ou manuel déloge les mousses incrustées dans les joints et les micro-anfractuosités.</p>
<p class="mt-4">Pour les dalles gravillonnées, un rinçage progressif évite de déchausser les gravillons tout en éliminant les résidus de traitement.</p>

<h3>Rinçage maîtrisé et conseils d'entretien</h3>
<p>L'eau est dirigée vers les points d'écoulement existants. Les garde-corps et murets périphériques sont nettoyés dans la même intervention.</p>
<p class="mt-4">Un temps de séchage est respecté avant la remise en place du mobilier. Des recommandations saisonnières sont transmises pour espacer les interventions futures.</p>`,
      specificChallenges: [
        "Dalles gravillonnées sensibles à la haute pression : brossage adapté pour préserver l'intégrité du revêtement.",
        "Mousses persistantes dans les zones ombragées des pavillons : traitement préventif après nettoyage.",
        "Bois composite sur terrasses récentes : méthode douce pour éviter rayures et décoloration.",
        "Mobilier et jardinières à déplacer ou protéger avant intervention.",
        "Évacuation d'eau à anticiper pour préserver plantations et éviter écoulements chez les voisins.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Comment évaluez-vous le risque d'endommagement sur les terrasses en bois ou dalles des immeubles récents à Villejuif ?",
          answer:
            "<p>Avant toute intervention, nous identifions le type de support : bois composite, dalles sur plots ou carrelage. Chaque matériau réagit différemment à la pression et aux produits. Cette vérification permet d'adapter la méthode pour obtenir un résultat propre sans altérer la surface ni les joints.</p>",
        },
        {
          question:
            "Q2 : Quelles techniques utilisez-vous pour éliminer mousses et lichens sur les terrasses pavillonnaires des quartiers ombragés ?",
          answer:
            "<p>Les dépôts verts sont d'abord ramollis avec un produit adapté, puis éliminés par brossage. Sur les dalles gravillonnées fréquentes dans les pavillons, nous évitons la haute pression directe. Un traitement préventif peut être appliqué pour ralentir la réapparition des mousses selon l'exposition de la terrasse.</p>",
        },
        {
          question:
            "Q3 : Quel traitement anti-mousse recommandez-vous pour les dalles gravillonnées courantes dans les constructions villejuifoises ?",
          answer:
            "<p>Nous utilisons un produit biocide compatible avec les revêtements poreux. Il agit en profondeur sans dégrader les gravillons ni modifier leur teinte. L'application se fait après le nettoyage principal, sur surface sèche, pour une efficacité prolongée sur plusieurs mois selon les conditions météo.</p>",
        },
        {
          question:
            "Q4 : Comment organisez-vous le déplacement du mobilier et des plantes lors du nettoyage d'une terrasse de pavillon ?",
          answer:
            "<p>Le mobilier léger est déplacé en début d'intervention. Les jardinières lourdes ou fragiles sont bâchées sur place. Nous vérifions les points d'écoulement pour diriger l'eau sans noyer les plantations. Le mobilier est repositionné une fois la surface suffisamment sèche pour éviter les traces.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux finitions, pour une restitution impeccable lors d'un état des lieux ou après travaux.",
      whyUsBullets: [
        "Connaissance des copropriétés villejuifoises et des contraintes d'accès propres aux résidences du quartier des Lozaits.",
        "Polyvalence sur tous types de sols et finitions, du parquet ancien au carrelage récent.",
        "Coordination fluide avec agences et artisans, créneaux ajustés aux délais de rotation locative.",
      ],
      uniqueIntro: `<p>Après plusieurs années d'occupation ou quelques semaines de chantier, un appartement accumule des traces que le ménage courant ne suffit pas à éliminer. Dans le quartier des Lozaits, où la rotation locative reste soutenue, les agences immobilières et propriétaires font face à des délais serrés entre deux locataires. Poussières incrustées dans les plinthes, résidus de peinture sur les menuiseries, joints de salle de bain ternis : chaque détail compte lors de la remise des clés.</p>
<p class="mt-4">Un logement préparé avec soin facilite la signature du bail suivant et évite les litiges sur l'état des lieux. Dans les appartements T2 à T4 qui dominent le parc villejuifois, les sols varient du parquet flottant au carrelage ancien, chacun nécessitant un traitement adapté. Une mise en propreté rigoureuse valorise le bien et rassure le futur occupant dès la première visite.</p>
<p class="mt-4">Notre intervention s'organise autour d'un diagnostic préalable, d'un planning calé sur vos contraintes et d'un contrôle final avant restitution. Nous nous adaptons aux créneaux imposés par les agences locales et aux difficultés de stationnement fréquentes près des stations de métro.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Nous évaluons l'état général du logement : nature des sols, présence de résidus de chantier, zones à traiter en priorité. Les surfaces fragiles sont protégées, les gravats ou déchets évacués si nécessaire.</p>
<p class="mt-4">Le planning est validé avec vous ou l'agence pour respecter la date de remise des clés.</p>

<h3>Nettoyage complet</h3>
<p>Dépoussiérage des plafonds, murs et plinthes, puis aspiration et lavage des sols selon leur revêtement. Les pièces d'eau reçoivent un traitement spécifique : détartrage des sanitaires, dégraissage des plans de travail, nettoyage des faïences et joints.</p>
<p class="mt-4">Les vitres intérieures, interrupteurs, poignées et placards sont traités pour un rendu homogène.</p>

<h3>Contrôle et restitution</h3>
<p>Chaque pièce est inspectée avant votre validation. Les retouches éventuelles sont effectuées immédiatement. Le logement est aéré pour garantir une atmosphère saine lors de la visite ou de l'état des lieux.</p>`,
      specificChallenges: [
        "Rotation locative soutenue dans les grands ensembles : délais courts entre deux locataires.",
        "Sols variés (parquet, carrelage, lino) nécessitant des produits et techniques adaptés.",
        "Stationnement difficile près des stations de métro, organisation logistique anticipée.",
        "Coordination avec agences immobilières et artisans pour respecter les dates de visite.",
        "Résidus de chantier fréquents sur la ZAC Campus Grand Parc : évacuation et nettoyage fin de travaux.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Quel délai d'intervention proposez-vous pour un ménage d'état des lieux dans le quartier des Lozaits entre deux locataires ?",
          answer:
            "<p>Nous intervenons généralement sous 48 à 72 heures, parfois moins selon la disponibilité. La rotation locative importante dans ce secteur nous a habitués à caler des créneaux serrés en coordination directe avec les agences ou les propriétaires.</p>",
        },
        {
          question:
            "Q2 : Quelle différence de protocole appliquez-vous entre un ménage standard et un nettoyage fin de chantier sur la ZAC Campus Grand Parc ?",
          answer:
            "<p>Un ménage standard porte sur les surfaces courantes et les équipements. En fin de chantier, nous ajoutons l'évacuation des gravats légers, le retrait des films de protection, le décapage des traces de peinture ou d'enduit et un dépoussiérage renforcé des menuiseries.</p>",
        },
        {
          question:
            "Q3 : Après un dégât des eaux dans un appartement ancien, quelles opérations réalisez-vous pour assainir les sols ?",
          answer:
            "<p>Nous commençons par aspirer l'eau résiduelle, puis nous traitons les zones humides avec des produits adaptés au support. Les plinthes et bas de murs sont nettoyés pour limiter le développement de moisissures. Un temps de séchage et une aération complètent l'intervention.</p>",
        },
        {
          question:
            "Q4 : Comment coordonnez-vous l'intervention avec l'agence immobilière et les artisans pour une remise en état avant visite d'acheteurs ?",
          answer:
            "<p>Nous échangeons directement avec l'agence pour fixer un créneau compatible avec la fin des travaux. Si des artisans sont encore présents, nous adaptons notre passage pour intervenir après leur départ et garantir un logement prêt à être visité.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;