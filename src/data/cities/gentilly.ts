import type { City } from "~/types/geo";

const city: City = {
  name: "Gentilly",
  slug: "gentilly",
  postalCodes: ["94250"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Gentilly. Du quartier du Plateau aux résidences du Chaperon Vert, une équipe locale intervient avec des méthodes adaptées au bâti varié de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Pattern : 2 <p> then a <ul>
  hubIntro:
    "<p>Station RER B Gentilly et Campus Sanofi, aux portes du 14e arrondissement : Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de leurs locaux. Notre ancrage local permet une réactivité adaptée aux contraintes d'une commune dense et bien desservie.</p>\n<p class=\"mt-4\">Halls d'immeubles, parkings souterrains, balcons exposés à la pollution de l'A6a : chaque intervention s'organise selon les accès, les horaires et les spécificités du bâti. Un interlocuteur dédié coordonne les passages et transmet un suivi clair après chaque prestation.</p>\n<ul>\n  <li><strong>Coordination terrain :</strong> Prise en compte des digicodes, badges Vigik et présence des gardiens pour fluidifier chaque intervention sans perturber les occupants.</li>\n  <li><strong>Adaptation au stationnement contraint :</strong> Véhicules légers et créneaux horaires choisis pour limiter l'encombrement dans les rues étroites du centre et du Plateau.</li>\n  <li>Suivi structuré : Compte-rendu transmis après passage, planning ajustable selon vos retours et l'évolution des besoins du site.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Dépôts noirs sur balcons</strong> liés à la proximité de l'A6a et du périphérique.",
    "Halls d'immeubles sollicités par le <strong>flux quotidien vers la gare RER</strong>.",
    "Parkings souterrains anciens avec <strong>rampes étroites</strong> au Chaperon Vert.",
    "Stationnement très contraint dans le <strong>tissu pavillonnaire du Plateau</strong>.",
    "Accès sécurisés généralisés : <strong>digicodes, badges Vigik, gardiens</strong>.",
    "Mixité bureaux-logements demandant une <strong>discrétion renforcée</strong> lors des interventions.",
  ],

  // Texte brut uniquement
  districts: [
    "Le Plateau",
    "Val-de-Bièvre",
    "Reine Blanche",
    "Gabriel Péri",
    "Le Chaperon Vert",
    "Centre-Ville Frileuse",
    "Victor Hugo",
  ],

  nearbyCities: [
        "arcueil",
        "montrouge",
        "cachan",
        "villejuif",
        "bagneux",
        "ivry-sur-seine",
        "vitry-sur-seine",
        "charenton-le-pont",
        "alfortville",
        "saint-mande"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Gentilly",
    "Gare RER Gentilly",
    "Campus Sanofi Val de Bièvre",
    "Parc du Coteau de Bièvre",
    "Maison de la Photographie Robert Doisneau",
    "Stade Géo André",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les secteurs où le stationnement est très limité ?",
      answer:
        "<p><strong>Nous utilisons des véhicules compacts et planifions les passages en dehors des heures de pointe. À Gentilly, les créneaux matinaux ou en milieu de journée permettent d'éviter la saturation des rues étroites du centre-ville et du quartier du Plateau. Le matériel est préparé pour limiter les allers-retours.</strong></p>",
    },
    {
      question:
        "Pouvez-vous intervenir dans des résidences équipées de digicodes et badges ?",
      answer:
        "<p><strong>Oui, nous travaillons régulièrement dans des immeubles sécurisés. Avant la première intervention, nous récupérons les accès nécessaires auprès du syndic ou du gardien. Les badges Vigik et codes sont gérés de manière confidentielle pour garantir la sécurité du site.</strong></p>",
    },
    {
      question:
        "Quel délai prévoir pour une première intervention après demande de devis ?",
      answer:
        "<p><strong>Après validation du devis, nous programmons généralement l'intervention sous 5 à 10 jours ouvrés selon la disponibilité du site et la nature des travaux. En cas d'urgence signalée, nous étudions un passage plus rapide en fonction de notre planning.</strong></p>",
    },
    {
      question: "Proposez-vous un suivi écrit après chaque passage ?",
      answer:
        "<p><strong>Un compte-rendu est transmis après intervention, mentionnant les zones traitées, les observations éventuelles et les points à surveiller. Ce document facilite les échanges avec le conseil syndical ou le gestionnaire et permet d'ajuster la fréquence des prestations.</strong></p>",
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
  // Included only services present in bundle.contents.services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en circulation rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des typologies de Gentilly : grands ensembles du Chaperon Vert, résidences récentes du Val de Bièvre.",
        "Matériel injection-extraction adapté aux dalles textiles comme aux velours ras des parties communes.",
        "Interventions planifiées en dehors des heures de fort passage, coordination avec gardiens et syndics.",
      ],
      uniqueIntro:
        "<p>Dans les parties communes de la <strong>Cité du Chaperon Vert</strong>, les moquettes encaissent un passage quotidien dense. Les fibres accumulent poussières fines, traces de semelles et résidus organiques qui ternissent progressivement l'aspect des halls et couloirs. Sans entretien adapté, le velours se tasse et les taches s'incrustent durablement dans la trame textile.</p>\n<p class=\"mt-4\">Sur les grands ensembles et petits collectifs de Gentilly, les supports varient : dalles textiles en bureaux, velours ras en logements. Cette diversité impose un diagnostic préalable pour ajuster la technique d'extraction. Un traitement régulier préserve la tenue des fibres, limite l'encrassement profond et maintient un rendu visuel correct dans les zones de fort trafic.</p>\n<p class=\"mt-4\">Le flux piétons depuis la gare RER B et les bureaux du Val de Bièvre génère un apport constant de particules dans les halls d'immeubles. Une intervention structurée — repérage des zones critiques, protection des plinthes, extraction contrôlée — permet de traiter efficacement ces surfaces sans perturber l'usage des lieux.</p>",
      uniqueDeepDive:
        "<h3>Zones de passage intensif</h3>\n<p>Les halls d'entrée et couloirs concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant injection. Les passes d'extraction se multiplient sur ces surfaces pour déloger les résidus compactés dans les fibres.</p>\n\n<h3>Surfaces intermédiaires et angles</h3>\n<p>Les paliers d'étage et jonctions avec les escaliers reçoivent un traitement ciblé. Les plinthes et bas de murs sont protégés avant intervention. Le détachage ponctuel s'applique sur les marques localisées — café, tanin, traces grasses.</p>\n\n<h3>Gestion de l'humidité résiduelle</h3>\n<p>L'extraction maximale limite le temps de séchage. Selon l'épaisseur du velours et la ventilation naturelle, le délai varie de quelques heures à une demi-journée. Les consignes de non-piétinement sont transmises pour éviter tout transfert de salissures pendant la phase de séchage.</p>",
      specificChallenges: [
        "Halls du Chaperon Vert : <strong>trafic dense</strong> et moquettes anciennes nécessitant passes multiples.",
        "Dalles textiles en bureaux du Val de Bièvre : extraction sans décollement des joints.",
        "Escaliers étroits du centre-ville : <strong>montée du matériel par étapes</strong> avec protection des marches.",
        "Stationnement contraint à Gentilly : <strong>véhicule léger</strong> et créneaux horaires adaptés.",
        "Séchage à surveiller dans les <strong>halls peu ventilés</strong> des immeubles années 60-70.",
      ],
      faqAdditions: [
        {
          question:
            "Avec les escaliers étroits des immeubles du centre-ville de Gentilly, comment organisez-vous la montée du matériel pour traiter une moquette ?",
          answer:
            "<p>Le matériel d'injection-extraction se démonte en éléments transportables. Nous montons par étapes, avec protection des marches et des murs. Les flexibles permettent de travailler depuis un palier sans encombrer la cage d'escalier pendant toute l'intervention.</p>",
        },
        {
          question:
            "Les taches anciennes dans les parties communes du Chaperon Vert sont-elles récupérables sans remplacer la moquette ?",
          answer:
            "<p>La plupart des taches incrustées — café, tanin, traces organiques — s'atténuent fortement avec un détachage ciblé suivi d'une extraction en profondeur. Certaines marques très anciennes peuvent laisser une ombre résiduelle, mais le rendu global s'améliore nettement.</p>",
        },
        {
          question:
            "Quelle méthode recommandez-vous pour des dalles textiles en bureaux du Val de Bièvre ?",
          answer:
            "<p>L'injection-extraction reste la technique adaptée. La pression et le débit sont ajustés pour éviter tout décollement des joints entre dalles. Les passes se font dans le sens de pose, avec aspiration immédiate pour limiter l'humidité résiduelle.</p>",
        },
        {
          question:
            "Combien de temps avant remise en service d'un hall proche de la gare RER Gentilly après nettoyage moquette ?",
          answer:
            "<p>Avec une extraction poussée, le séchage prend généralement entre trois et six heures selon la ventilation du hall. Nous conseillons de limiter le passage pendant ce délai pour éviter tout transfert de salissures sur les fibres encore humides.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et coordination des accès pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès à Gentilly : stationnement dense, rampes étroites, coordination événements au Stade Géo André.",
        "Autolaveuse professionnelle et produits dégraissants adaptés aux revêtements béton ou résine, gestion conforme des eaux usées.",
        "Planification en lien direct avec syndics et gestionnaires, balisage sécurisé et rotation véhicules pour intervention sans blocage.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur les dalles béton, les coulures d'huile marquent les emplacements fixes, et la poussière forme un voile gris sur les rampes d'accès. Dans les parkings proches du <strong>Stade Géo André</strong>, les flux de véhicules lors des événements sportifs accentuent l'encrassement des zones de circulation et des abords immédiats.</p>\n<p class=\"mt-4\">Un sol de parking dégradé renvoie une image négative aux résidents comme aux visiteurs. Les revêtements en <strong>béton brut</strong> des copropriétés ou en résine dans les parkings d'entreprises nécessitent un traitement adapté pour retrouver un aspect propre et sécurisé. Les rampes étroites, fréquentes dans le bâti ancien, demandent une attention particulière pour éviter les surfaces glissantes.</p>\n<p class=\"mt-4\">L'intervention se planifie en coordination avec le syndic ou le gestionnaire. Le stationnement dense à Gentilly impose une organisation rigoureuse : balisage, rotation des véhicules par zones, et créneaux choisis hors pics d'affluence pour limiter la gêne aux usagers.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions le type de revêtement et l'état des évacuations. Le balayage préalable élimine les débris grossiers. La signalétique de balisage est mise en place et les véhicules sont déplacés par zones successives selon le planning convenu avec le gestionnaire.</p>\n\n<h3>Lavage mécanisé et traitement des salissures</h3>\n<p>L'autolaveuse effectue des passes sur les surfaces principales. Les zones critiques — rampes, angles morts, pieds de murs — reçoivent un traitement dégraissant ciblé. Les rigoles et regards sont dégagés pour garantir l'écoulement correct des eaux de lavage, sans rejet sauvage.</p>\n\n<h3>Contrôle et recommandations</h3>\n<p>Une vérification finale confirme l'état des sols et des évacuations. Si demandé, un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention. Un compte-rendu est transmis au syndic avec des préconisations de fréquence adaptées au trafic constaté.</p>",
      specificChallenges: [
        "Parkings souterrains des copropriétés avec rampes étroites et ventilation limitée.",
        "Taches d'huile anciennes incrustées sur béton brut dans les résidences du Chaperon Vert.",
        "Coordination des accès lors d'événements sportifs au Stade Géo André.",
        "Gestion stricte des eaux de lavage pour respecter les évacuations existantes.",
        "Stationnement très contraint imposant une rotation par zones et créneaux décalés.",
      ],
      faqAdditions: [
        {
          question:
            "Comment organisez-vous la rotation des véhicules et le balisage dans le parking du Stade Géo André pendant un événement ?",
          answer:
            "<p>Nous définissons un zonage précis avec le gestionnaire. Les véhicules sont déplacés par secteurs successifs, avec signalétique visible. L'intervention se cale sur les créneaux hors affluence pour éviter tout blocage des usagers ou des visiteurs du stade.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes dans un parking souterrain de copropriété à Gentilly ?",
          answer:
            "<p>Un dégraissant adapté au revêtement béton est appliqué sur les zones marquées. L'autolaveuse effectue plusieurs passes pour désincruster les résidus. Les taches très anciennes peuvent nécessiter un traitement complémentaire, que nous signalons au syndic avec un devis séparé.</p>",
        },
        {
          question:
            "Quelle gestion des eaux de lavage proposez-vous pour un parking en résine proche du Campus Sanofi ?",
          answer:
            "<p>Les eaux sont dirigées vers les évacuations existantes après vérification de leur bon fonctionnement. Aucun rejet sauvage n'est effectué. Si les regards sont obstrués, nous procédons à un dégagement préalable pour garantir un écoulement conforme aux normes.</p>",
        },
        {
          question:
            "Quels créneaux recommandez-vous pour intervenir sur un parking quand il y a marché ou événement au stade ?",
          answer:
            "<p>Nous privilégions les créneaux tôt le matin ou en soirée, hors jours de marché et hors événements sportifs. Le planning est validé avec le syndic ou le gestionnaire pour garantir un accès fluide aux résidents et éviter toute perturbation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Gentilly : traitement des dépôts gras, brossage adapté au support et rinçage contrôlé pour un espace extérieur utilisable rapidement.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux axes passants de Gentilly et des dépôts spécifiques liés au trafic.",
        "Pression ajustée selon le support : béton brut, carrelage ou joints fragiles traités différemment.",
        "Gestion rigoureuse des eaux de rinçage pour éviter toute nuisance aux occupants des étages inférieurs.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur les garde-corps, le carrelage perd son éclat sous une pellicule grasse difficile à déloger. Sur l'avenue Paul Vaillant-Couturier et les axes exposés au trafic routier, cette couche de suie revient en quelques semaines. Le balcon devient un espace qu'on évite plutôt qu'un prolongement du logement.</p>\n<p class=\"mt-4\">Retrouver un sol propre et des surfaces claires change l'usage quotidien. On ressort la table, les plantes reprennent leur place, l'air semble moins chargé. Sur les immeubles des années 60-70 avec balcons béton ou carrelage, le rafraîchissement régulier préserve aussi les joints et limite l'encrassement profond des supports.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic du revêtement et de l'exposition. Protection des menuiseries, déplacement du mobilier, puis traitement adapté à la nature des dépôts. La proximité de l'A6a et du périphérique impose des protocoles anti-pollution spécifiques pour éliminer les résidus gras sans endommager les matériaux.</p>",
      uniqueDeepDive:
        "<h3>Sol propre et joints préservés</h3>\n<p>Le carrelage retrouve sa teinte d'origine, les joints ne présentent plus de traces verdâtres ou noires. Pour y parvenir, un produit dégraissant adapté au support est appliqué après évacuation des débris. Le brossage manuel ou mécanique déloge les incrustations sans attaquer les matériaux.</p>\n\n<h3>Garde-corps et vitrages dégagés</h3>\n<p>Les barreaux métalliques et les surfaces vitrées perdent leur voile grisâtre. Un passage ciblé élimine la suie accumulée sur ces éléments verticaux souvent négligés. Le rinçage contrôlé évite les coulures chez les voisins du dessous.</p>\n\n<h3>Espace prêt à l'usage</h3>\n<p>Le balcon sèche en quelques heures selon la météo. Avant de partir, le mobilier et les plantes sont replacés. Des conseils d'entretien permettent d'espacer les interventions : un simple passage régulier à l'eau claire limite la réapparition rapide des dépôts liés à la pollution atmosphérique.</p>",
      specificChallenges: [
        "Suie grasse liée à la proximité de l'A6a : nécessite un dégraissant adapté avant brossage.",
        "Balcons en étage avec évacuation d'eau contrainte : protocole anti-coulures obligatoire.",
        "Joints de carrelage fragilisés sur immeubles anciens : pression contrôlée indispensable.",
        "Garde-corps métalliques noircis par la pollution : traitement spécifique pour retrouver l'éclat.",
        "Mobilier et plantes à protéger ou déplacer avant intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons de l'avenue Paul Vaillant-Couturier, quelle méthode utilisez-vous pour retirer la suie sans abîmer le carrelage ?",
          answer:
            "<p>Un dégraissant spécifique aux dépôts gras est appliqué avant le brossage. Le produit dissout la pellicule de suie sans attaquer le carrelage ni les joints. Le rinçage se fait à pression modérée pour éviter toute dégradation du support.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux lors du nettoyage d'un balcon en étage sur une façade étroite ?",
          answer:
            "<p>L'eau de rinçage est dirigée vers l'évacuation existante du balcon. Si celle-ci est insuffisante, nous utilisons des raclettes et serpillières pour limiter les écoulements. Les voisins du dessous sont prévenus si nécessaire pour éviter toute gêne.</p>",
        },
        {
          question:
            "Les balcons proches du parc du Coteau accumulent de la mousse, quelle fréquence de traitement conseillez-vous ?",
          answer:
            "<p>L'humidité favorise la repousse des mousses en quelques mois. Un passage annuel au printemps suffit généralement. Pour les expositions nord ou très ombragées, un second traitement à l'automne peut s'avérer utile.</p>",
        },
        {
          question:
            "Pour un balcon avec joints fragiles à Gentilly, quelles techniques sans haute pression préconisez-vous ?",
          answer:
            "<p>Le brossage manuel avec une brosse souple remplace le jet haute pression. Un produit adapté ramollit les salissures avant le passage de la brosse. Le rinçage s'effectue au tuyau basse pression ou au seau pour préserver l'intégrité des joints.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque à Gentilly : proximité du Parc du Coteau, corniches des barres hautes, immeubles anciens du centre.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide systématique après chaque intervention.",
        "Évacuation sécurisée des déchets en sacs étanches, même dans les rues étroites du centre-ville ou les accès contraints des cités.",
      ],
      uniqueIntro:
        "<p>Après quelques mois sans intervention, les balcons exposés aux abords du <strong>Parc du Coteau de Bièvre</strong> accumulent des dépôts de fientes sur les rebords, garde-corps et sols. Les pigeons trouvent refuge sur les corniches et reviennent régulièrement, laissant des traces acides qui s'incrustent dans le béton ou le carrelage. L'odeur persiste, le linge ne peut plus sécher dehors, et l'espace devient inutilisable.</p>\n<p class=\"mt-4\">Sur les <strong>loggias des immeubles anciens</strong> ou les balcons filants des barres des années 60-70, les accès étroits compliquent le nettoyage en autonomie. Les fientes sèches libèrent des particules potentiellement nocives à chaque coup de balai. Un traitement adapté permet de retrouver un balcon sain, sans risque pour les occupants ni les voisins, et de profiter à nouveau de cet espace extérieur.</p>\n<p class=\"mt-4\">L'intervention inclut un diagnostic des zones touchées, la protection de l'intérieur du logement, et une <strong>désinfection obligatoire</strong> après retrait des déjections. Des solutions anti-retour peuvent être proposées selon la configuration des lieux.</p>",
      uniqueDeepDive:
        '<h3>Sécurisation et confinement</h3>\n<p>L\'intervenant porte un équipement complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l\'intérieur du logement ou chez les voisins.</p>\n<p class="mt-4">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées.</p>\n\n<h3>Retrait et nettoyage des supports</h3>\n<p>Les déjections sont collectées manuellement et conditionnées en sacs étanches. Le sol du balcon, le garde-corps, les vitrages et les murs mitoyens sont nettoyés méthodiquement.</p>\n<p class="mt-4">Un produit virucide et bactéricide homologué est appliqué sur l\'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final permet d\'évacuer les résidus de produit. Le balcon reste en aération avant réutilisation.</p>\n<p class="mt-4">Selon la configuration, des pics anti-pigeons ou un filet de protection peuvent être installés sur les rebords et corniches pour limiter le retour des oiseaux.</p>',
      specificChallenges: [
        "Corniches exposées près du Parc du Coteau : accumulation rapide de fientes sur balcons et rebords.",
        "Loggias des barres années 60-70 avec accès étroits compliquant l'évacuation du matériel.",
        "Fientes acides attaquant le béton brut des balcons HLM et le carrelage des résidences récentes.",
        "Nécessité de protéger les voisins pendant l'intervention dans les immeubles à vis-à-vis important.",
        "Stationnement contraint au centre-ville imposant une logistique adaptée pour le matériel de décontamination.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes accumulées sur les corniches proches du Parc du Coteau présentent-elles un risque sanitaire urgent ?",
          answer:
            "<p>Les fientes de pigeons contiennent des agents pathogènes qui se dispersent en séchant. Sur les balcons exposés aux abords du parc, l'accumulation prolongée augmente le risque d'inhalation de particules nocives. Une intervention rapide limite l'exposition et permet de retrouver un espace sain.</p>",
        },
        {
          question:
            "Quelle désinfection appliquez-vous après le retrait des fientes sur une loggia à Gentilly ?",
          answer:
            "<p>Après collecte des déjections, un produit virucide et bactéricide homologué est pulvérisé sur l'ensemble des surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage. Cette étape élimine les agents pathogènes résiduels et sécurise l'espace pour les occupants.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des déchets dans les rues étroites du centre-ville de Gentilly ?",
          answer:
            "<p>Les fientes et matériaux souillés sont conditionnés en sacs étanches dès le retrait. L'intervenant descend le matériel par les accès disponibles, même contraints. Le véhicule stationne au plus proche pour limiter les manipulations. Aucun déchet ne reste sur place après l'intervention.</p>",
        },
        {
          question:
            "Sur les derniers étages des barres du Chaperon Vert, les fientes ont-elles déjà endommagé les supports ?",
          answer:
            "<p>Les fientes acides attaquent progressivement le béton et la peinture des balcons exposés. Sur les étages hauts, l'absence de traitement régulier accélère la dégradation. Un nettoyage suivi d'une désinfection stoppe ce processus et préserve l'état des surfaces pour les années suivantes.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",

      heroDescription:
        "Le nettoyage à domicile de canapés, tapis et matelas à Gentilly réduit acariens, allergènes et particules urbaines liées au RER B et aux axes A6a/Périphérique, restaurant l'hygiène des intérieurs denses aux portes de Paris.",

      whyUsBullets: [
        "Double réalité gentilléenne : Protocole ajusté aux familles (Chaperon Vert, Gabriel-Péri) comme aux jeunes actifs proches du RER B, avec traitement ciblé des textiles très sollicités et des petites surfaces.",
        "Environnement très exposé à la pollution : Injection-extraction à eau chaude pour déloger les allergènes et dépôts fins, avec détergent adapté aux particules noires et grasses liées à l'A6a et au périphérique (Porte de Gentilly).",
        "Organisation efficace malgré les contraintes : Stationnement tendu, digicodes/badges généralisés et escaliers étroits du centre ancien ; intervention planifiée pour limiter la gêne dans les immeubles denses.",
      ],

      uniqueIntro:
        '<p>À Gentilly, les canapés, tapis et matelas accumulent vite des salissures invisibles qui dégradent l’hygiène de l’intérieur. La ville combine des quartiers résidentiels denses (Centre-ville/Frileuse, Reine-Blanche), de grands ensembles (Chaperon Vert, Gabriel-Péri) et des zones plus récentes vers le Val de Bièvre. Dans ces configurations, les textiles captent à la fois les allergènes domestiques (acariens, poussières) et une charge particulaire urbaine plus marquée qu’ailleurs, portée par le trafic de proximité (A6a, périphérique Porte de Gentilly) et les flux du RER B.</p>\n<p class="mt-4">Au quotidien, les symptômes apparaissent souvent sans cause évidente : rhinites au réveil, gêne respiratoire, odeurs persistantes, textiles ternis malgré l’aspirateur. Dans les logements familiaux du Chaperon Vert ou de Gabriel-Péri, l’usage intensif et la promiscuité favorisent l’encrassement rapide des rembourrages. Dans le secteur du Val de Bièvre et autour de la gare RER, la rotation des occupants et la proximité des axes renforcent l’accumulation de particules fines dans les tissus. Un entretien domestique reste superficiel : il ne décroche pas les allergènes incrustés ni les dépôts liés à la pollution urbaine.</p>\n<p class="mt-4">Un nettoyage professionnel à domicile permet de revenir à une hygiène textile saine et durable : extraction en profondeur, neutralisation des sources d’allergènes, amélioration de la qualité de l’air intérieur, et remise en état esthétique des textiles, sans avoir à déplacer le mobilier.</p>',

      uniqueDeepDive:
        '<h3>1. Diagnostic textile et identification des contaminations (allergènes + particules urbaines)</h3>\n<p>Le technicien commence par analyser les textiles : nature du tissu, densité des rembourrages, fragilité, zones d’usage intensif et taches visibles. Il tient compte du contexte local : logements familiaux et textiles très sollicités au Chaperon Vert et à Gabriel-Péri, appartements de jeunes actifs proches du RER B, intérieurs plus récents vers le Val de Bièvre. Cette lecture permet de choisir les produits et le niveau d’extraction adaptés, notamment lorsque les dépôts urbains liés à l’A6a et au périphérique sont présents.</p>\n<h3>2. Pré-traitement ciblé puis injection-extraction à eau chaude</h3>\n<p class="mt-4">Les taches et zones les plus chargées reçoivent un pré-traitement : enzymatique pour les matières organiques, neutralisant d’odeurs si nécessaire, et détergent adapté aux dépôts urbains. L’injection-extraction diffuse ensuite de l’eau chaude au cœur des fibres pour décoller allergènes et particules. L’aspiration puissante retire immédiatement l’eau chargée d’impuretés, permettant un nettoyage en profondeur sans détremper les supports, point important dans les logements denses ou avec accès contraints.</p>\n<h3>3. Extraction finale, séchage maîtrisé et conseils adaptés à Gentilly</h3>\n<p class="mt-4">Une extraction maximale est réalisée pour limiter l’humidité résiduelle et accélérer le séchage. Le séchage complet se fait généralement sous 6 à 10 heures selon la ventilation. Le technicien donne des conseils simples et locaux : aérer aux périodes de moindre circulation, entretenir régulièrement les textiles exposés aux axes A6a/Périphérique, et programmer un nettoyage périodique dans les foyers sensibles ou lorsque le logement est très exposé aux flux (gare RER B).</p>',

      specificChallenges: [
        "Encrassement accéléré en habitat dense : textiles très sollicités dans les quartiers Centre-ville/Frileuse, Chaperon Vert et Gabriel-Péri.",
        "Particules fines et suie urbaine : proximité A6a et périphérique (Porte de Gentilly) favorisant dépôts noirs et odeurs incrustées.",
        "Rotation et flux autour du RER B : apports de poussières extérieures et recontamination plus rapide près de la gare.",
        "Contraintes d'accès et de logistique : stationnement difficile, digicodes/badges fréquents, escaliers étroits du centre ancien.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage est-il efficace contre les acariens dans les logements familiaux du Chaperon Vert ou de Gabriel-Péri ?",
          answer:
            "<p>Oui. L’injection-extraction à eau chaude permet de désincruster en profondeur les allergènes et de retirer une grande partie des acariens et de leurs déjections, souvent concentrés dans les canapés et matelas très utilisés. Dans les foyers où l’usage est intensif (Chaperon Vert, Gabriel-Péri), l’amélioration du confort respiratoire est généralement sensible dans les jours qui suivent.</p>",
        },
        {
          question:
            "Peut-on vraiment enlever les dépôts liés à la pollution de l’A6a et du périphérique ?",
          answer:
            "<p>Oui. Les particules fines et la suie urbaine peuvent s’incruster dans les fibres et ternir les tissus. Le protocole par injection-extraction, associé à un détergent adapté, dissout et extrait ces dépôts invisibles avec l’eau sale. C’est particulièrement utile pour les logements proches des axes A6a/Périphérique et du nord de Gentilly.</p>",
        },
        {
          question:
            "Combien de temps faut-il avant de réutiliser le canapé après l’intervention ?",
          answer:
            "<p>En général, le séchage complet se fait sous 6 à 10 heures selon la ventilation et la saison. Une utilisation légère est possible plus tôt, mais il est préférable d’attendre le séchage total pour retrouver un confort normal et préserver les fibres. Nous conseillons d’aérer régulièrement, idéalement aux heures où la circulation est moindre.</p>",
        },
        {
          question:
            "Intervenez-vous dans les appartements près de la gare RER B Gentilly malgré les contraintes d’accès ?",
          answer:
            "<p>Oui. Nous avons l’habitude des accès par digicode/badge, des escaliers étroits et du stationnement tendu. L’intervention est organisée pour limiter la gêne, notamment dans les immeubles denses autour de la gare et du Centre-ville/Frileuse.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement à Gentilly, avec traitement de chaque pièce et coordination adaptée aux contraintes d'accès pour une restitution dans les délais convenus.",
      whyUsBullets: [
        "Connaissance des typologies locales : T2/T3, parquets anciens et sols PVC des résidences de Gentilly.",
        "Polyvalence technique : traitement adapté à chaque revêtement, finitions soignées sur pièces d'eau et menuiseries.",
        "Organisation calée sur vos contraintes : coordination agence, accès digicode ou gardien, respect strict des délais de remise.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les appartements de la <strong>Cité Gabriel-Péri</strong> présentent souvent des traces tenaces : résidus de peinture sur les plinthes, poussière de plâtre dans les recoins, sols ternis par les passages répétés. Ces dépôts s'accumulent dans les pièces d'eau comme dans les espaces de vie, rendant le logement impropre à une remise de clés sereine.</p>\n<p class=\"mt-4\">Un nettoyage structuré permet de livrer un bien prêt à accueillir un nouveau locataire ou à satisfaire les exigences d'un bailleur. Sur les <strong>parquets anciens du centre-ville</strong> comme sur les sols PVC des résidences sociales, chaque surface retrouve un aspect soigné. Vitres intérieures dégagées, sanitaires détartrés, placards vidés de toute poussière : le logement gagne en clarté et en valeur perçue.</p>\n<p class=\"mt-4\">L'intervention se coordonne avec les agences immobilières ou les gestionnaires locaux. Accès par digicode, passage gardien, horaires imposés : ces paramètres sont intégrés dès la prise de contact pour garantir une exécution fluide et respectueuse des délais de rotation.</p>",
      uniqueDeepDive:
        "<h3>Logement prêt à la remise de clés</h3>\n<p>Un appartement livré propre, sans trace visible de chantier ni résidu d'occupation. Sols lavés, vitres intérieures transparentes, sanitaires désinfectés. Le bien peut être présenté immédiatement à un nouveau locataire ou au propriétaire.</p>\n\n<h3>Traitement méthodique par zones</h3>\n<p>Chaque pièce fait l'objet d'un passage complet. Cuisine : plans de travail, crédence, électroménager. Salle de bain : faïence, joints, robinetterie. Pièces de vie : dépoussiérage plafonds, plinthes, radiateurs. Les placards sont nettoyés intérieurement.</p>\n<p class=\"mt-4\">Les sols reçoivent un traitement adapté au revêtement : aspiration puis lavage sur parquet, décapage léger sur carrelage encrassé, passage humide sur PVC.</p>\n\n<h3>Coordination et accès sécurisé</h3>\n<p>Les informations d'accès (digicode, badge, contact gardien) sont recueillies en amont. L'intervention se cale sur les créneaux validés par l'agence ou le bailleur. Un contrôle qualité clôture chaque prestation avant restitution des clés.</p>",
      specificChallenges: [
        "Fins de chantier dans les logements rénovés de Gabriel-Péri : résidus de peinture et poussière de plâtre à éliminer.",
        "Parquets anciens du centre-ville nécessitant un lavage adapté pour éviter les traces.",
        "Accès par digicode ou gardien : coordination indispensable avec le gestionnaire.",
        "Délais serrés pour les états des lieux imposés par les agences immobilières locales.",
        "Sols PVC des résidences sociales demandant un décrassage sans agression du revêtement.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans la Cité Gabriel-Péri, comment traitez-vous les traces de peinture et la poussière de plâtre ?",
          answer:
            "<p>Les projections de peinture sont grattées manuellement sur les surfaces dures, puis essuyées avec un solvant adapté au support. La poussière de plâtre est aspirée en plusieurs passes avant un lavage humide des sols et des plinthes. Les menuiseries et interrupteurs reçoivent un essuyage minutieux pour éliminer tout voile résiduel.</p>",
        },
        {
          question:
            "Comment coordonnez-vous l'intervention avec une agence immobilière pour un ménage avant état des lieux à Gentilly ?",
          answer:
            "<p>Nous recueillons les coordonnées du gestionnaire dès la demande de devis. Le créneau d'intervention est validé conjointement, en tenant compte des visites programmées. Un point téléphonique ou par mail confirme l'accès et les éventuelles consignes spécifiques. Le compte-rendu de fin de prestation peut être transmis directement à l'agence.</p>",
        },
        {
          question:
            "Quel niveau de propreté livrez-vous pour une remise de clés exigée par un bailleur social à Gentilly ?",
          answer:
            "<p>Le logement est restitué sans trace visible : sols lavés, vitres intérieures transparentes, sanitaires détartrés, placards dépoussiérés. Les pièces d'eau sont désinfectées, les interrupteurs et poignées essuyés. Ce niveau de finition répond aux grilles de contrôle habituellement utilisées par les bailleurs sociaux locaux.</p>",
        },
        {
          question:
            "Si l'accès se fait par digicode ou gardien, quelles informations faut-il transmettre avant l'intervention ?",
          answer:
            "<p>Nous avons besoin du code d'entrée, de l'étage et du numéro de porte, ainsi que du nom et des horaires de présence du gardien si un passage par la loge est requis. Ces éléments sont confirmés la veille de l'intervention pour éviter tout retard le jour J.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
