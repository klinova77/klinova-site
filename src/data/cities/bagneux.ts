import type { City } from "~/types/geo";

const city: City = {
  name: "Bagneux",
  slug: "bagneux",
  postalCodes: ["92220"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Bagneux. Du quartier de la Pierre Plate aux résidences neuves de l'écoquartier O'Mathurins, une équipe réactive et des méthodes adaptées au bâti local.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro:
    "<p>Terminus du Métro 4 et futur hub du Grand Paris Express, Bagneux connaît une transformation urbaine intense. Klinova accompagne syndics, gestionnaires et occupants dans le maintien de la propreté des immeubles et espaces communs, malgré les contraintes liées aux chantiers et à la densification.</p>\n<p class=\"mt-4\">Notre organisation repose sur une connaissance fine des accès, des typologies de bâti et des horaires adaptés à chaque secteur. Reporting disponible sur demande, coordination avec gardiens et gestionnaires pour limiter les interruptions.</p>\n<ul>\n  <li><strong>Réactivité locale :</strong> Équipes basées en Île-de-France, capables d'intervenir rapidement entre le centre-ville et les grands ensembles des Tertres ou de la Pierre Plate.</li>\n  <li><strong>Adaptation au bâti :</strong> Protocoles ajustés selon l'ancienneté des parkings souterrains, la configuration des halls ou les matériaux des balcons récents.</li>\n  <li><strong>Coordination terrain :</strong> Prise en compte des digicodes, badges Vigik et présence de gardiens pour des interventions sans friction.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Poussières de chantier</strong> omniprésentes liées aux travaux du Grand Paris Express et aux livraisons de programmes neufs.",
    "Parkings souterrains anciens dans les <strong>grands ensembles</strong> (Tertres, Pierre Plate) nécessitant un décapage régulier.",
    "Balcons et loggias exposés à la <strong>pollution de la N20</strong> et aux particules fines.",
    "Accès immeubles souvent contraints : <strong>digicodes, badges Vigik</strong>, coordination avec gardiens indispensable.",
    "Stationnement saturé en centre-ville et autour du <strong>métro Lucie Aubrac</strong>, créneaux d'intervention à anticiper.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville / Mairie",
    "Pierre Plate / Les Musiciens",
    "Les Tertres / Les Cuverons",
    "Champ des Oiseaux",
    "Bas-Longchamps",
    "O'Mathurins (Écoquartier)",
    "Victor Hugo (ZAC)",
    "Les Coutures",
  ],
  nearbyCities: [
        "cachan",
        "arcueil",
        "montrouge",
        "gentilly",
        "villejuif",
        "chevilly-larue",
        "ivry-sur-seine",
        "vitry-sur-seine",
        "thiais",
        "charenton-le-pont"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Bagneux",
    "Métro Bagneux - Lucie Aubrac (Terminus Ligne 4)",
    "Cimetière parisien de Bagneux",
    "Parc François Mitterrand",
    "Écoquartier O'Mathurins",
    "Avenue Aristide Briand (N20)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les quartiers où le stationnement est difficile ?",
      answer:
        "<p>Nous repérons en amont les <strong>zones de stationnement accessibles</strong> et adaptons nos créneaux horaires. À Bagneux, notamment autour du métro Lucie Aubrac et de l'avenue Aristide Briand, nous privilégions les interventions tôt le matin ou en milieu de journée pour éviter la saturation de la voirie.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir dans des résidences avec gardien ou accès par badge ?",
      answer:
        "<p>Oui, c'est fréquent à Bagneux. Nous coordonnons avec le gardien ou le syndic pour récupérer les <strong>accès nécessaires</strong> (badge Vigik, code). Les horaires sont calés pour limiter la gêne des résidents et respecter les consignes de chaque copropriété.</p>",
    },
    {
      question: "Quel délai prévoir pour obtenir un devis après une demande ?",
      answer:
        "<p>Nous répondons généralement sous <strong>24 à 48 heures</strong>. Si une visite technique est nécessaire — par exemple pour évaluer l'état d'un parking souterrain ou la surface d'un balcon — nous la planifions rapidement selon vos disponibilités.</p>",
    },
    {
      question:
        "Intervenez-vous en urgence si une dégradation survient dans les parties communes ?",
      answer:
        "<p>Nous traitons les demandes urgentes en priorité, selon la nature du problème et notre planning. Pour une <strong>salissure importante</strong> ou un incident ponctuel, contactez-nous directement : nous évaluons la faisabilité d'une intervention rapide.</p>",
    },
  ],

  testimonial: {
    text: "Terminus du Métro 4 et futur hub du Grand Paris Express",
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
        "Extraction des salissures incrustées dans vos moquettes à Bagneux, avec séchage maîtrisé pour une remise en service rapide des espaces professionnels et résidentiels.",
      whyUsBullets: [
        "Connaissance des équipements culturels et bureaux du centre-ville de Bagneux, avec leurs contraintes d'accès spécifiques.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours ras des parties communes.",
        "Interventions planifiées en dehors des heures d'ouverture pour les salles recevant du public.",
      ],
      uniqueIntro:
        "<p>Les traces de passage se concentrent aux mêmes endroits : entrées de bureaux, couloirs d'accueil, zones de circulation intensive. Au Théâtre Victor Hugo et dans les locaux culturels du centre-ville, les fibres textiles captent <strong>poussières fines et résidus de semelles</strong> à chaque représentation ou réunion. Ces dépôts s'accumulent en surface avant de migrer vers la base du velours.</p>\n<p class=\"mt-4\">Dans les petits collectifs et résidences récentes équipées de moquettes, le grisaillement progressif altère l'aspect général des parties communes. Les dalles textiles des bureaux perdent leur uniformité, les velours ras des halls se ternissent. Un entretien régulier par injection-extraction redonne de la profondeur aux couleurs et prolonge la durée de vie du revêtement.</p>\n<p class=\"mt-4\">Le flux piéton élevé sur les axes proches de la N20 et autour des pôles culturels génère une usure localisée qu'un simple aspirateur ne suffit pas à traiter. Une intervention structurée permet d'extraire les particules enfouies tout en préservant la tenue des fibres.</p>",
      uniqueDeepDive:
        "<h3>1. Fibres assainies et couleurs ravivées</h3>\n<p>L'objectif est d'obtenir une moquette débarrassée des salissures profondes, avec un rendu visuel homogène sur l'ensemble de la surface traitée. Les zones de trafic retrouvent une teinte proche de l'état initial.</p>\n\n<h3>2. Diagnostic et préparation adaptés au support</h3>\n<p>Avant toute action, nous identifions le type de moquette : bouclée, velours, épaisse ou fine. Les plinthes et bas de murs reçoivent une protection. Une aspiration préalable retire les particules libres et prépare le textile à recevoir le traitement.</p>\n<p class=\"mt-4\">L'injection-extraction constitue la méthode principale. Une solution nettoyante pénètre les fibres sous pression contrôlée, puis l'aspiration puissante extrait l'eau chargée de salissures. Les passes sont multipliées sur les zones de fort passage.</p>\n\n<h3>3. Gestion du séchage et consignes</h3>\n<p>L'extraction maximale limite le temps de séchage, généralement compris entre 4 et 8 heures selon l'épaisseur et la ventilation du local. Nous indiquons les zones à ne pas piétiner et recommandons une fréquence d'entretien adaptée à l'usage.</p>",
      specificChallenges: [
        "Moquettes des équipements publics soumises à un <strong>passage intensif</strong> après chaque événement.",
        "Dalles textiles des bureaux d'O'Mathurins exposées aux <strong>poussières de chantier</strong> environnantes.",
        "<strong>Escaliers étroits du centre ancien</strong> compliquant l'acheminement du matériel d'extraction.",
        "Velours ras des halls de résidences récentes nécessitant un <strong>séchage rapide</strong> pour limiter la gêne.",
        "Taches de tanin et café <strong>incrustées</strong> dans les espaces d'accueil à fort trafic.",
      ],
      faqAdditions: [
        {
          question:
            "Avec les escaliers étroits du centre-ville, comment acheminez-vous les machines jusqu'aux locaux du Théâtre Victor Hugo ?",
          answer:
            "<p>Nous utilisons des équipements compacts et modulables, transportables en plusieurs voyages si nécessaire. Le repérage préalable des accès permet d'anticiper les difficultés et d'organiser l'intervention sans bloquer les circulations ni abîmer les murs des cages d'escalier.</p>",
        },
        {
          question:
            "Après une représentation au Théâtre Victor Hugo, combien de temps avant que la moquette soit de nouveau utilisable ?",
          answer:
            "<p>Le séchage dure généralement entre 4 et 6 heures selon la ventilation de la salle. En programmant l'intervention en fin de soirée, la moquette est praticable dès le lendemain matin, sans odeur résiduelle ni sensation d'humidité au toucher.</p>",
        },
        {
          question:
            "Comment protégez-vous les plinthes et angles dans les petits bureaux du quartier O'Mathurins ?",
          answer:
            "<p>Des protections plastifiées sont posées le long des plinthes et aux angles avant le début du traitement. Cette précaution évite les projections et les traces d'humidité sur les finitions murales, particulièrement dans les espaces récents aux matériaux sensibles.</p>",
        },
        {
          question:
            "Quelle méthode privilégiez-vous pour une moquette de médiathèque par rapport à celle d'un bureau ?",
          answer:
            "<p>L'injection-extraction reste la base dans les deux cas. Pour une médiathèque à fort passage, nous augmentons le nombre de passes sur les zones de circulation. Dans un bureau, l'accent porte sur le détachage ciblé des postes de travail et le séchage rapide pour limiter l'interruption d'activité.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parkings souterrains et aériens, avec gestion stricte des eaux de lavage et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès propres aux sous-sols des copropriétés de Bagneux, notamment secteur Pierre Plate.",
        "Autolaveuses professionnelles et protocole strict de récupération des eaux usées conformes aux exigences des syndics.",
        "Coordination préalable avec gestionnaires pour organiser la rotation véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro:
        "<p>Après plusieurs années d'usage intensif, les parkings souterrains du <strong>quartier Pierre Plate</strong> accumulent huile moteur, traces de pneus et poussières de chantier. Ces dépôts s'incrustent dans le béton, assombrissent les circulations et rendent les marquages au sol difficilement lisibles. Les rampes d'accès deviennent glissantes, les rigoles se bouchent progressivement.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux sous-sols une propreté visible dès la fin de l'intervention. Les copropriétaires constatent des circulations plus claires, des places mieux délimitées. Les gestionnaires reçoivent moins de signalements concernant l'état général. Dans les <strong>grands ensembles aux revêtements béton brut</strong>, le décrassage préserve aussi la durabilité du sol en évitant l'encrassement profond.</p>\n<p class=\"mt-4\">Klinova organise chaque chantier en tenant compte du <strong>trafic pendulaire</strong> et des contraintes propres aux résidences. Balisage sécurisé, rotation des véhicules par zones, récupération contrôlée des eaux usées : l'intervention se déroule sans bloquer l'accès aux résidents plus longtemps que nécessaire.</p>",
      uniqueDeepDive:
        "<h3>1. Diagnostic et préparation du site</h3>\n<p>Avant toute intervention, nos équipes inspectent le revêtement, identifient les zones critiques et vérifient l'état des évacuations. Le balisage est installé pour sécuriser les passages piétons et véhicules.</p>\n<p class=\"mt-4\">Un balayage préalable élimine graviers et débris. La rotation des véhicules est planifiée avec le syndic ou le gestionnaire pour libérer les zones par secteurs successifs.</p>\n\n<h3>2. Traitement mécanisé et dégraissage</h3>\n<p>L'autolaveuse effectue plusieurs passes sur les surfaces planes. Les taches d'huile anciennes reçoivent un dégraissant adapté avant passage machine. Rampes, angles morts et pieds de murs sont traités manuellement ou à haute pression contrôlée.</p>\n<p class=\"mt-4\">Les rigoles et regards font l'objet d'un curage pour rétablir l'écoulement normal.</p>\n\n<h3>3. Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont aspirées ou dirigées vers les évacuations conformes. Aucun rejet sauvage n'est toléré. Un dépoussiérage des blocs lumineux peut compléter l'intervention si demandé.</p>\n<p class=\"mt-4\">Un compte-rendu avec recommandations de fréquence est transmis au donneur d'ordre.</p>",
      specificChallenges: [
        "Sous-sols anciens avec béton brut encrassé nécessitant un décapage adapté.",
        "Rampes d'accès étroites et inclinées demandant un traitement antidérapant spécifique.",
        "Gestion des eaux de lavage conforme aux évacuations existantes.",
        "Coordination avec les résidents pour libérer les places par zones successives.",
        "Poussières de chantier liées aux travaux du Grand Paris à éliminer régulièrement.",
      ],
      faqAdditions: [
        {
          question:
            "Comment gérez-vous les eaux de lavage dans les parkings souterrains du quartier Pierre Plate ?",
          answer:
            "<p>Les eaux chargées sont aspirées par l'autolaveuse ou dirigées vers les regards existants. Nous vérifions au préalable l'état des évacuations pour éviter tout engorgement. Aucun rejet n'est effectué hors circuit prévu. Cette gestion stricte répond aux exigences des syndics et préserve les parties communes.</p>",
        },
        {
          question:
            "Pouvez-vous traiter les taches d'huile anciennes visibles dans les parkings des grands ensembles ?",
          answer:
            "<p>Les dépôts d'huile incrustés reçoivent un dégraissant professionnel avant passage de l'autolaveuse. Plusieurs passes peuvent être nécessaires selon l'ancienneté des taches. Le résultat dépend de l'état du béton, mais l'aspect général s'améliore nettement. Nous indiquons les limites prévisibles lors du diagnostic.</p>",
        },
        {
          question:
            "Quelle fréquence de nettoyage recommandez-vous pour un parking proche de la N20 ?",
          answer:
            "<p>Le trafic pendulaire et les poussières liées aux axes routiers justifient généralement deux à quatre interventions annuelles. La fréquence exacte dépend du nombre de véhicules et de l'exposition aux salissures extérieures. Nous ajustons nos recommandations après constat sur site et retour du gestionnaire.</p>",
        },
        {
          question:
            "Quelles plages horaires proposez-vous pour intervenir dans un parking de copropriété ?",
          answer:
            "<p>Nous privilégions les créneaux en journée creuse ou en soirée selon les habitudes des résidents. Les interventions de nuit restent possibles si le règlement de copropriété l'autorise. La planification est validée avec le syndic pour informer les occupants et organiser la rotation des véhicules sans blocage prolongé.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Bagneux : sols, garde-corps et vitrages traités avec gestion des coulures pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions à Bagneux : pollution N20, poussières de chantiers, vis-à-vis fréquents en zone dense.",
        "Pression adaptée à chaque revêtement — dalles récentes, béton ancien, carrelage — pour préserver joints et finitions.",
        "Gestion stricte des écoulements : protection des voisins du dessous et de la façade pendant toute l'intervention.",
      ],
      uniqueIntro:
        "<p>Du côté de la <strong>ZAC Victor Hugo</strong>, les balcons récents accumulent rapidement une fine couche grise. Les dalles perdent leur éclat, les joints noircissent, et le mobilier extérieur se couvre d'un voile collant qu'un simple coup de balai ne suffit pas à déloger. Cette usure visuelle s'installe en quelques mois seulement, transformant un espace agréable en surface négligée.</p>\n<p class=\"mt-4\">Sur les <strong>constructions récentes comme sur les grands ensembles en béton brut</strong>, le constat reste le même : sans intervention adaptée, les dépôts s'incrustent dans les pores du revêtement. Le balcon devient un prolongement oublié du logement, utilisé uniquement pour stocker ce qui encombre l'intérieur. Retrouver un sol propre et des garde-corps nets change la perception de cet espace — et l'envie de s'y installer.</p>\n<p class=\"mt-4\">La <strong>pollution liée à l'Avenue Aristide Briand</strong> et les poussières de chantiers omniprésentes à Bagneux accélèrent ce phénomène. Une intervention structurée permet de traiter chaque surface selon sa nature, en protégeant les voisins des écoulements.</p>",
      uniqueDeepDive:
        '<h3>1. Dépôts incrustés et joints encrassés</h3>\n<p>Les feuilles mortes, résidus de pollution et poussières de chantier forment une couche compacte sur le sol. Nous commençons par dégager ces accumulations avant d\'appliquer un produit adapté au support — carrelage, béton ou dalles sur plots.</p>\n<p class="mt-4">Le brossage manuel ou mécanique déloge les salissures sans agresser les joints. Un rinçage contrôlé évite toute coulure vers les étages inférieurs.</p>\n\n<h3>2. Garde-corps et vitrages ternis</h3>\n<p>Les barreaux métalliques et les parois vitrées captent la pollution urbaine. Nous traitons ces éléments avec des produits non abrasifs qui respectent les finitions.</p>\n<p class="mt-4">Les murs mitoyens accessibles sont également nettoyés pour un rendu homogène sur l\'ensemble du balcon.</p>\n\n<h3>3. Séchage et protection du voisinage</h3>\n<p>Avant intervention, nous protégeons les menuiseries et déplaçons le mobilier. L\'eau de rinçage est canalisée pour ne pas atteindre la façade ni les balcons voisins.</p>\n<p class="mt-4">Le séchage naturel permet une réutilisation rapide de l\'espace, généralement sous quelques heures selon l\'exposition.</p>',
      specificChallenges: [
        "Dépôts noirs liés au trafic de l'Avenue Aristide Briand sur les garde-corps et rebords.",
        "Poussières de chantier omniprésentes à Bagneux qui s'incrustent dans les joints des dalles récentes.",
        "Loggias fermées dans les tours des Tertres nécessitant une ventilation adaptée pendant le séchage.",
        "Étages élevés avec contraintes d'accès et sensibilité accrue aux coulures vers le voisinage.",
        "Supports variés sur un même immeuble : béton brut, carrelage, dalles sur plots.",
      ],
      faqAdditions: [
        {
          question:
            "Le nettoyage risque-t-il d'abîmer le carrelage récent de mon balcon à la ZAC Victor Hugo ?",
          answer:
            "<p>Nous adaptons la pression et les produits au type de revêtement. Sur les dalles et carrelages récents fréquents dans ce quartier, nous privilégions un brossage doux et un rinçage contrôlé qui préservent les joints sans altérer la surface. Un test préalable permet de valider la méthode.</p>",
        },
        {
          question:
            "Comment gérez-vous l'eau de rinçage sur un balcon donnant sur l'Avenue Aristide Briand ?",
          answer:
            "<p>Nous canalisons les écoulements pour éviter toute projection vers la voirie ou les balcons inférieurs. Des protections sont installées en périphérie, et le rinçage s'effectue par petites quantités. Cette précaution limite les désagréments pour le voisinage et la façade de l'immeuble.</p>",
        },
        {
          question:
            "Intervenez-vous différemment sur une loggia fermée par rapport à un balcon ouvert dans les tours des Tertres ?",
          answer:
            "<p>Une loggia vitrée demande une attention particulière au séchage et à la ventilation. Nous ouvrons les accès pendant et après l'intervention pour accélérer l'évacuation de l'humidité. Le traitement des vitrages intérieurs complète le nettoyage du sol et des garde-corps.</p>",
        },
        {
          question:
            "Pouvez-vous nettoyer mon balcon sans utiliser de haute pression pour protéger le revêtement ?",
          answer:
            "<p>Oui, nous proposons un protocole sans haute pression adapté aux supports fragiles ou aux joints récents. Le brossage manuel combiné à des produits désincrustants offre un résultat équivalent sur les salissures courantes, sans risque pour les finitions de votre balcon.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide des surfaces et mise en place de solutions anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque à Bagneux : proximité des parcs, cimetière, grands ensembles avec corniches exposées.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide homologuée.",
        "Évacuation sécurisée des déchets contaminés et coordination avec le voisinage pour limiter les nuisances.",
      ],
      uniqueIntro:
        "<p>Comment profiter de son balcon quand les fientes s'accumulent semaine après semaine ? Sur les immeubles donnant sur le <strong>Parc François Mitterrand</strong> ou à proximité du Cimetière parisien, la présence massive de pigeons transforme les espaces extérieurs en zones inutilisables. L'odeur persiste, le sol se dégrade, et chaque tentative de nettoyage à l'eau ne fait que repousser le problème de quelques jours.</p>\n<p class=\"mt-4\">Les loggias et corniches des <strong>grands ensembles comme les Tertres ou la Pierre Plate</strong> présentent des configurations qui favorisent la nidification. Les fientes attaquent le béton, rongent les peintures et laissent des traces tenaces sur les garde-corps métalliques. Sans traitement adapté, la dégradation s'accélère et les risques sanitaires augmentent.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon propre et désinfecté. Le protocole inclut le retrait sécurisé des déjections, la décontamination des surfaces et l'évacuation des déchets dans des conditions qui protègent aussi bien l'occupant que le voisinage.</p>",
      uniqueDeepDive:
        "<h3>1. Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace utilisable, débarrassé des agents pathogènes. Les surfaces retrouvent leur aspect d'origine, l'odeur disparaît et les supports cessent de se dégrader sous l'effet acide des fientes.</p>\n\n<h3>2. Confinement et retrait sécurisé</h3>\n<p>L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n\n<h3>3. Désinfection et prévention</h3>\n<p>Après nettoyage du sol, des garde-corps et des vitrages, un produit virucide homologué est appliqué avec temps de contact respecté. Un rinçage final précède la remise en service du balcon. Si nécessaire, des pics ou filets anti-pigeons peuvent être posés sur les rebords et corniches pour limiter le retour des oiseaux.</p>",
      specificChallenges: [
        "Balcons exposés aux espaces verts denses subissent des accumulations rapides de fientes.",
        "Les loggias des grands ensembles offrent des recoins propices à la nidification.",
        "Fientes acides qui attaquent béton, peintures et garde-corps métalliques si non traitées.",
        "Risque de dispersion de poussières contaminées vers les logements voisins pendant l'intervention.",
        "Coordination nécessaire avec la copropriété pour l'évacuation des déchets en sacs étanches.",
      ],
      faqAdditions: [
        {
          question:
            "Les balcons donnant sur le Parc François Mitterrand sont couverts de fientes : quels risques sanitaires et dans quel délai intervenez-vous ?",
          answer:
            "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent provoquer des infections respiratoires. La proximité du parc attire les oiseaux en nombre. Nous intervenons généralement sous 48 à 72 heures pour stopper l'accumulation et assainir l'espace.</p>",
        },
        {
          question:
            "Quel protocole et quels EPI utilisez-vous pour la désinfection sur les loggias des grands ensembles à Bagneux ?",
          answer:
            "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes. La loggia est confinée par bâchage pour protéger l'intérieur et les voisins. Les fientes sont humidifiées avant ramassage, puis un désinfectant virucide est appliqué sur toutes les surfaces avec temps de contact respecté.</p>",
        },
        {
          question:
            "Après retrait des fientes sur un balcon proche du cimetière parisien, quelle désinfection garantissez-vous pour éliminer germes et spores ?",
          answer:
            "<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué après nettoyage complet des surfaces. Le temps de contact est respecté avant rinçage final. Cette désinfection élimine les agents pathogènes présents dans les résidus organiques et réduit les risques sanitaires.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets contaminés et la coordination avec les voisins en copropriété dense ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès le ramassage. L'évacuation se fait de manière sécurisée pour éviter toute dispersion dans les parties communes. En immeuble dense, nous informons le voisinage immédiat et adaptons les horaires pour limiter les nuisances.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à Bagneux, avec extraction des salissures en profondeur et séchage maîtrisé pour une utilisation rapide.",
      whyUsBullets: [
        "Interventions régulières dans les foyers du Bas-Longchamps et des quartiers pavillonnaires de Bagneux.",
        "Détachage ciblé et extraction textile avec réglages adaptés à chaque type de fibre.",
        "Organisation souple pour gérer le stationnement contraint et limiter le temps d'immobilisation du mobilier.",
      ],
      uniqueIntro:
        "<p>Les traces grises sur l'assise du canapé, les auréoles au centre du tapis, les odeurs persistantes dans le matelas : ces signes d'usure s'accumulent dans les intérieurs du <strong>quartier Bas-Longchamps</strong> où les familles sollicitent quotidiennement leur mobilier textile. Enfants, animaux de compagnie, repas pris sur le canapé — chaque usage laisse des résidus que l'aspirateur seul ne retire pas.</p>\n<p class=\"mt-4\">Un entretien en profondeur change la perception de l'espace. Dans les <strong>appartements T3 et T4</strong> qui dominent le parc résidentiel, le canapé occupe souvent la pièce principale. Quand les fibres retrouvent leur souplesse et leurs couleurs d'origine, c'est tout le salon qui paraît plus lumineux. Les allergènes piégés dans les textiles — acariens, poils, poussières fines — sont extraits, ce qui améliore le confort respiratoire au quotidien.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des <strong>contraintes d'accès</strong> propres aux rues étroites et au stationnement limité. Diagnostic textile, détachage ciblé, extraction complète : chaque étape est planifiée pour limiter la gêne et permettre une remise en service rapide du mobilier.</p>",
      uniqueDeepDive:
        "<h3>1. Diagnostic et préparation</h3>\n<p>Chaque pièce textile est examinée : type de tissu (coton, synthétique, velours), nature des taches visibles, zones d'usure. Un test discret sur une partie cachée permet de valider la méthode adaptée aux fibres fragiles.</p>\n<p class=\"mt-4\">Les surfaces environnantes sont protégées avant le début du travail.</p>\n\n<h3>2. Traitement des assises et surfaces horizontales</h3>\n<p>Le détachage enzymatique cible les salissures organiques — urine, café, traces alimentaires. L'injection-extraction pénètre ensuite dans l'épaisseur du textile pour déloger les résidus incrustés.</p>\n<p class=\"mt-4\">La pression et la température sont ajustées selon la densité du tissu pour préserver les couleurs.</p>\n\n<h3>3. Tapis, matelas et finitions</h3>\n<p>Les tapis reçoivent le même protocole, avec une attention particulière aux bordures où la poussière s'accumule. Les matelas sont traités sur les deux faces quand l'accès le permet.</p>\n<p class=\"mt-4\">L'extraction finale retire le maximum d'humidité. Les consignes de séchage sont adaptées à la saison et à la ventilation du logement.</p>",
      specificChallenges: [
        "Taches d'urine animaux fréquentes dans les foyers avec enfants et animaux de compagnie.",
        "Textiles variés (velours, coton, synthétique) nécessitant des réglages spécifiques de pression.",
        "Logements T3/T4 où le canapé est la pièce maîtresse — séchage rapide indispensable.",
        "Rues étroites du quartier Bas-Longchamps : stationnement anticipé pour le matériel.",
        "Allergènes piégés dans les fibres épaisses des tapis et matelas familiaux.",
      ],
      faqAdditions: [
        {
          question:
            "Quel résultat attendre contre les acariens après le nettoyage d'un canapé dans une maison du Bas-Longchamps ?",
          answer:
            "<p>L'extraction en profondeur retire une grande partie des acariens, de leurs déjections et des poussières fines piégées dans les fibres. Dans les foyers familiaux où le mobilier est très sollicité, cela améliore sensiblement le confort respiratoire. Le résultat dépend de l'état initial et de l'épaisseur du textile.</p>",
        },
        {
          question:
            "Pouvez-vous traiter les taches et odeurs d'urine d'animaux sur un tapis ou un canapé utilisé en famille ?",
          answer:
            "<p>Oui, le détachage enzymatique cible spécifiquement les composés organiques responsables des odeurs. L'injection-extraction déloge ensuite les résidus en profondeur. Sur des taches anciennes ou répétées, plusieurs passages peuvent être nécessaires pour atténuer durablement l'odeur.</p>",
        },
        {
          question:
            "Comment adaptez-vous la méthode de nettoyage selon le textile et les sols fragiles d'un appartement T3 ou T4 ?",
          answer:
            "<p>Le diagnostic initial identifie le type de fibre et l'état du tissu. La pression d'injection et la température sont ajustées pour éviter toute déformation ou décoloration. Les sols environnants (parquet flottant, lino) sont protégés avant l'intervention pour prévenir les traces d'humidité.</p>",
        },
        {
          question:
            "Que dois-je préparer avant votre arrivée, sachant que le stationnement est compliqué dans mon quartier ?",
          answer:
            "<p>Dégagez l'accès autour du canapé ou du tapis et prévoyez un espace pour poser le matériel. Si possible, indiquez-nous une place de stationnement proche ou un créneau horaire où la voirie est moins encombrée. Nous adaptons l'heure d'intervention pour limiter les contraintes.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse à Bagneux, avec traitement adapté au support et application anti-mousse pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des configurations locales : terrasses ombragées, proximité d'arbres, expositions variables selon les quartiers de Bagneux.",
        "Maîtrise des supports : bois composite, pierre naturelle, carrelage — chaque matériau reçoit un traitement adapté à sa porosité.",
        "Organisation soignée : protection du mobilier et des plantations, gestion de l'écoulement sans gêne pour le voisinage.",
      ],
      uniqueIntro:
        "<p>Après quelques saisons, les terrasses des résidences de l'écoquartier O'Mathurins ou des pavillons du secteur Bas-Longchamps présentent souvent les mêmes signes : dépôts verts sur les lames, joints noircis, surface devenue glissante par temps humide. Les feuilles accumulées et l'ombrage favorisent l'apparition de mousse qui s'étend progressivement si rien n'est fait.</p>\n<p class=\"mt-4\">Une terrasse encrassée perd son attrait. On hésite à y installer le mobilier, à recevoir dehors. Les supports varient selon l'époque de construction : bois composite sur les attiques récents, carrelage ou dalles gravillonnées sur les maisons plus anciennes. Chaque matériau réagit différemment aux intempéries et nécessite un traitement spécifique pour éviter toute dégradation.</p>\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic préalable du revêtement et de son état. Nous adaptons la méthode — pression contrôlée ou nettoyage doux — puis appliquons un traitement préventif contre la repousse des mousses et lichens.</p>",
      uniqueDeepDive:
        "<h3>1. Préparation et protection</h3>\n<p>Nous déplaçons le mobilier extérieur et protégeons les jardinières, plantes et menuiseries adjacentes. Un balayage élimine les gros débris : feuilles mortes, terre, résidus organiques. Cette étape permet d'évaluer l'étendue des dépôts verts et l'état des joints.</p>\n\n<h3>2. Nettoyage adapté au support</h3>\n<p>Le traitement varie selon le matériau. Sur bois composite, nous utilisons une pression modérée et un produit non agressif pour préserver les lames. Sur carrelage ou pierre, un brossage mécanique complète l'action de l'eau. Les garde-corps et escaliers extérieurs sont traités dans la foulée.</p>\n\n<h3>3. Traitement anti-mousse et séchage</h3>\n<p>Une solution préventive est appliquée sur l'ensemble de la surface pour freiner la repousse des mousses et lichens. L'eau est dirigée vers les points d'écoulement existants. Nous vérifions que rien ne stagne avant de remettre le mobilier en place et de vous indiquer le délai de séchage complet.</p>",
      specificChallenges: [
        "Lames composites des attiques O'Mathurins sensibles à une pression trop forte.",
        "Mousse tenace sur dalles gravillonnées des pavillons de Bas-Longchamps exposés à l'ombre.",
        "Joints noircis entre carreaux nécessitant un brossage ciblé avant rinçage.",
        "Gestion de l'eau sur terrasses en hauteur pour éviter les coulures chez les voisins.",
        "Mobilier et jardinières à déplacer ou bâcher avant toute intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyez-vous une terrasse en bois composite dans le quartier O'Mathurins sans abîmer les lames ?",
          answer:
            "<p>Nous utilisons une pression modérée et un produit adapté aux surfaces composites. Le jet reste à distance suffisante pour déloger les salissures sans marquer le revêtement. Cette approche préserve l'aspect d'origine des lames tout en éliminant les dépôts verts accumulés.</p>",
        },
        {
          question:
            "Quel traitement proposez-vous contre la mousse sur une terrasse ombragée à Bas-Longchamps ?",
          answer:
            "<p>Après le nettoyage, nous appliquons une solution anti-mousse qui agit en profondeur et freine la repousse pendant plusieurs mois. Sur les zones très exposées à l'humidité et au feuillage, nous recommandons un renouvellement annuel pour maintenir la surface praticable.</p>",
        },
        {
          question:
            "À quelle fréquence faut-il renouveler le traitement anti-mousse compte tenu du climat local ?",
          answer:
            "<p>En général, une application par an suffit pour les terrasses bien exposées. Pour celles situées sous couvert végétal ou orientées au nord, un passage tous les huit à dix mois limite efficacement le retour des lichens et dépôts verts.</p>",
        },
        {
          question:
            "Utilisez-vous la haute pression ou un nettoyage doux sur une terrasse en pierre d'un attique ?",
          answer:
            "<p>Cela dépend de la porosité du matériau. Sur pierre naturelle tendre, nous privilégions un nettoyage doux avec brossage mécanique. Sur carrelage ou pierre reconstituée, une pression contrôlée accélère le travail sans risque d'endommager les joints.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, avec traitement adapté à chaque surface et coordination souple pour respecter vos délais de remise de clés ou de livraison.",
      whyUsBullets: [
        "Connaissance du parc locatif bagnolais et des attentes des agences du secteur Aristide Briand.",
        "Traitement différencié selon les revêtements : parquet, carrelage, lino, faïence.",
        "Planification calée sur vos contraintes horaires et coordination possible avec artisans ou gestionnaires.",
      ],
      uniqueIntro:
        "<p>Comment rendre un appartement impeccable quand les délais se comptent en jours et que chaque pièce porte encore les traces du chantier ou du locataire précédent ? Sur l'Avenue Aristide Briand et ses rues adjacentes, la rotation locative soutenue impose des remises en état fréquentes, souvent calées entre deux rendez-vous d'agence. Les résidus de peinture, la poussière de plâtre ou les sols encrassés ne laissent pas de marge d'erreur.</p>\n<p class=\"mt-4\">Un logement propre facilite la signature, évite les litiges sur l'état des lieux et valorise le bien dès la première visite. Dans les T3 et T4 qui dominent le parc bagnolais, les surfaces à traiter varient : parquet flottant sensible aux excès d'eau, carrelage de salle de bain, lino des pièces de vie. Chaque revêtement demande une approche spécifique pour un rendu homogène.</p>\n<p class=\"mt-4\">Une intervention structurée permet de respecter les créneaux imposés par les agences ou les artisans. Le stationnement contraint en centre-ville et la présence fréquente de digicodes exigent une organisation anticipée pour éviter les retards.</p>",
      uniqueDeepDive:
        "<h3>1. Poussières et résidus de chantier</h3>\n<p>Les surfaces verticales accumulent souvent des dépôts fins après travaux. Le dépoussiérage commence par les plafonds, descend vers les murs et les plinthes. Les gravats résiduels ou emballages sont évacués avant tout lavage.</p>\n\n<h3>2. Pièces d'eau et finitions</h3>\n<p>Cuisine et salle de bain concentrent les traces tenaces : calcaire sur robinetterie, projections sur crédence, joints ternis. Le traitement cible chaque élément sans agresser les surfaces fragiles. Interrupteurs, poignées et radiateurs sont essuyés pour supprimer les empreintes.</p>\n\n<h3>3. Sols et contrôle final</h3>\n<p>L'aspiration précède un lavage adapté au revêtement : eau tiède sur carrelage, produit neutre sur parquet flottant, détachant doux sur lino. Les vitres intérieures sont nettoyées si incluses dans la prestation. Un passage de vérification garantit l'absence de zones oubliées avant la remise des clés.</p>",
      specificChallenges: [
        "Délais serrés entre fin de chantier et état des lieux sur un marché locatif tendu.",
        "Stationnement camionnette difficile le long de la N20 et dans les rues adjacentes.",
        "Accès fréquent par digicode ou badge Vigik dans les copropriétés sociales.",
        "Sols variés dans un même logement : parquet flottant, carrelage, lino.",
        "Coordination nécessaire avec artisans ou agence pour éviter les chevauchements.",
      ],
      faqAdditions: [
        {
          question:
            "Quelles méthodes employez-vous pour un nettoyage fin de chantier dans un appartement livré près du métro Lucie Aubrac ?",
          answer:
            "<p>Nous commençons par évacuer les résidus de chantier puis dépoussiérons l'ensemble des surfaces avant lavage. Les traces de peinture ou d'enduit sont traitées avec des produits adaptés au support. Le protocole s'ajuste selon l'état constaté à l'arrivée.</p>",
        },
        {
          question:
            "Comment établissez-vous le prix pour un nettoyage état des lieux d'un T3 ou T4 à Bagneux ?",
          answer:
            "<p>Le tarif dépend de la surface, du niveau d'encrassement et des prestations demandées. Un T3 standard nécessite généralement trois à quatre heures d'intervention. Nous transmettons un devis après description du bien et des travaux éventuels réalisés.</p>",
        },
        {
          question:
            "Comment coordonnez-vous votre intervention avec artisans et agence immobilière sur l'Avenue Aristide Briand ?",
          answer:
            "<p>Nous calons notre passage après la fin des travaux pour éviter de repasser. Si l'agence impose un créneau précis, nous adaptons nos horaires. Un contact direct avec le gestionnaire permet d'ajuster en cas de décalage de planning.</p>",
        },
        {
          question:
            "Quelles contraintes d'accès devez-vous anticiper pour un état des lieux en copropriété avec digicode ou Vigik ?",
          answer:
            "<p>Nous récupérons les codes ou badges en amont pour éviter toute attente le jour J. Si un gardien est présent, nous convenons d'un créneau avec lui. Cette organisation garantit un démarrage à l'heure prévue.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
