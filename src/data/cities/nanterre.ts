import type { City } from "~/types/geo";

const city: City = {
  name: "Nanterre",
  slug: "nanterre",
  postalCodes: ["92000"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Nanterre pour la propreté des parties communes, parkings souterrains et espaces extérieurs. Du secteur Préfecture aux résidences du Parc Sud, une équipe locale adapte ses méthodes aux contraintes de chaque bâti.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Préfecture des Hauts-de-Seine et siège de l'Université Paris Nanterre, la commune concentre des enjeux de propreté très variés. Klinova y accompagne syndics, gestionnaires et occupants avec une organisation pensée pour chaque secteur.</p>\
<p class=\"mt-4\">Halls traversants, parkings en sous-sol, balcons exposés aux axes routiers : nous adaptons nos interventions aux <strong>réalités du terrain</strong>. Un interlocuteur dédié coordonne les passages et assure le suivi des prestations.</p>\
<ul>\
  <li><strong>Coordination locale :</strong> Planification des créneaux selon les contraintes d'accès, présence gardien et disponibilité des espaces communs.</li>\
  <li><strong>Matériel adapté :</strong> Équipements dimensionnés pour les parkings souterrains comme pour les cages d'escalier étroites du centre ancien.</li>\
  <li><strong>Suivi régulier :</strong> Reporting disponible sur demande pour les gestionnaires, ajustements possibles selon retours terrain.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> fréquents sous les dalles du secteur Préfecture : ventilation et évacuation des eaux à anticiper.",
    "Halls ouverts dans les grands ensembles du <strong>Parc Sud</strong> : salissures rapides liées au passage.",
    "Pollution routière (A86, D914) visible sur les <strong>balcons et garde-corps</strong> des étages élevés.",
    "Stationnement contraint en centre-ville : créneaux et véhicules à adapter.",
    "Forte rotation locative près de l'<strong>Université</strong> : pics de demande en fin de bail (juin, septembre).",
    "Digicodes et badges généralisés : coordination préalable indispensable.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Vieux-Pont - Sainte-Geneviève",
    "La Boule - Champs Pierreux",
    "Plateau - Mont-Valérien",
    "Parc Sud",
    "Parc Nord",
    "Université",
    "Chemin de l'Île",
    "Petit Nanterre",
    "Mont-Valérien",
  ],
  nearbyCities: [
        "rueil-malmaison",
        "courbevoie",
        "colombes",
        "neuilly-sur-seine",
        "levallois-perret",
        "asnieres-sur-seine",
        "boulogne-billancourt",
        "issy-les-moulineaux",
        "vanves",
        "malakoff"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Nanterre",
    "Université Paris Nanterre",
    "Paris La Défense Arena",
    "Parc André Malraux",
    "Tours Aillaud (Tours Nuages)",
    "Préfecture des Hauts-de-Seine",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les résidences avec gardien ?",
      answer: "<p>Nous prenons contact en amont avec le gardien ou le gestionnaire pour <strong>définir les créneaux adaptés</strong>. Les accès sont coordonnés selon les horaires de présence et les contraintes de la résidence. À Nanterre, cette organisation est fréquente dans les secteurs Parc Sud et Parc Nord.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur la commune ?",
      answer: "<p>Oui, nous pouvons mobiliser une équipe sous <strong>24 à 48 heures</strong> selon la nature de la demande et la disponibilité des accès. Le délai exact dépend du type d'intervention et des contraintes logistiques du site concerné.</p>",
    },
    {
      question: "Le stationnement est difficile près de la Préfecture, comment procédez-vous ?",
      answer: "<p>Nos équipes repèrent les possibilités de stationnement avant chaque intervention. En zone contrainte, nous privilégions des <strong>véhicules compacts</strong> ou des créneaux horaires où le stationnement est plus accessible. Une coordination avec le gestionnaire facilite l'organisation.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer: "<p>Chaque demande fait l'objet d'un <strong>échange préalable</strong> pour évaluer les surfaces, l'état des lieux et les contraintes d'accès. Le devis est transmis après cette étape, sans engagement. Nous pouvons nous déplacer si une visite technique s'avère nécessaire.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction en profondeur des salissures incrustées dans vos moquettes et dalles textiles, avec séchage accéléré pour une reprise d'activité rapide dans vos locaux.",
      whyUsBullets: [
        "Connaissance des contraintes propres aux bâtiments tertiaires du secteur Préfecture et de leurs exigences d'accueil.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées des bureaux.",
        "Interventions planifiées en dehors des heures d'ouverture pour limiter toute perturbation des équipes.",
      ],
      uniqueIntro: "<p>Les traces de passage s'accumulent rapidement sur les dalles textiles des halls et couloirs du <strong>secteur Préfecture</strong>. Café renversé, semelles humides, poussière fine : ces dépôts quotidiens ternissent les fibres et créent des zones grisâtres visibles dès l'entrée. Dans les bâtiments administratifs à fort flux, l'usure devient flagrante en quelques semaines seulement.</p>\
<p class=\"mt-4\">Un entretien adapté redonne aux <strong>moquettes en dalles</strong> leur aspect d'origine et prolonge leur durée de vie. Les collaborateurs retrouvent un environnement de travail soigné, les visiteurs perçoivent immédiatement le niveau d'exigence des lieux. Pour les gestionnaires, c'est aussi moins de réclamations et un patrimoine mieux préservé.</p>\
<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic précis des zones à fort passage — accès piétons, circulations principales, espaces d'attente. Nous adaptons le protocole selon l'état des fibres, les contraintes horaires et les impératifs de continuité d'activité propres aux sites recevant du public.</p>",
      uniqueDeepDive: "<h3>1. Zones de circulation principale</h3>\
<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. Nous commençons par une aspiration renforcée pour éliminer les particules libres, puis appliquons le traitement par <strong>injection-extraction</strong> sur ces surfaces à fort trafic.</p>\
<p class=\"mt-4\">Les plinthes et angles sont protégés avant chaque passage de machine.</p>\
\
<h3>2. Espaces de travail et bureaux</h3>\
<p>Les dalles textiles sous les postes de travail reçoivent un <strong>détachage ciblé</strong> sur les taches de café ou d'encre. L'injection-extraction permet d'extraire les résidus incrustés sans détremper le support.</p>\
<p class=\"mt-4\">Le mobilier léger est déplacé puis repositionné après séchage.</p>\
\
<h3>3. Zones d'attente et accueil</h3>\
<p>Ces espaces visibles nécessitent un <strong>rendu impeccable</strong>. Nous effectuons des passes supplémentaires et contrôlons l'homogénéité du résultat. Le temps de séchage est estimé selon la ventilation disponible — généralement deux à quatre heures pour une remise en service rapide.</p>",
      specificChallenges: [
        "<strong>Dalles textiles</strong> des halls administratifs soumises à un piétinement quotidien intense.",
        "Taches de café et traces de semelles incrustées dans les fibres des zones d'attente.",
        "Accès aux étages parfois contraint par des <strong>escaliers étroits</strong> dans les bâtiments anciens du centre.",
        "Coordination nécessaire avec les services de sécurité pour intervenir hors horaires d'ouverture.",
        "Séchage à maîtriser pour permettre une reprise d'activité rapide dans les bureaux.",
      ],
      faqAdditions: [
        {
          question: "Les moquettes des halls de la Préfecture sont fragiles : quelle méthode évite d'abîmer les dalles textiles ?",
          answer: "<p>Nous utilisons l'injection-extraction à basse pression, adaptée aux dalles textiles collées. Cette technique nettoie en profondeur sans décoller les fibres ni détremper le support. Un test préalable sur une zone discrète permet de valider la compatibilité avec le revêtement en place.</p>",
        },
        {
          question: "Après shampouinage, combien de temps avant que les bureaux proches de La Défense puissent rouvrir ?",
          answer: "<p>Le temps de séchage varie selon l'épaisseur des fibres et la ventilation des locaux. En général, comptez deux à quatre heures pour une moquette standard. Nous optimisons l'extraction pour réduire <strong>l'humidité résiduelle</strong> et accélérer la remise en service de vos espaces de travail.</p>",
        },
        {
          question: "Comment organisez-vous l'accès au matériel pour une moquette d'étage si l'immeuble a des escaliers étroits ?",
          answer: "<p>Notre équipement est modulable et transportable manuellement. Pour les immeubles du centre-ville avec des cages d'escalier réduites, nous utilisons des <strong>machines compactes</strong> et des rallonges de tuyaux. La configuration est définie lors du diagnostic pour éviter toute perte de temps le jour de l'intervention.</p>",
        },
        {
          question: "Comment protégez-vous plinthes et angles lors du nettoyage intensif des moquettes en Préfecture ?",
          answer: "<p>Avant chaque passage, nous posons des protections adhésives sur les plinthes et les bas de murs. Les angles sont traités manuellement avec une buse adaptée pour éviter les projections. Cette précaution préserve les finitions et garantit un rendu soigné sur l'ensemble de la surface.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec traitement des taches d'huile, gestion rigoureuse des eaux usées et coordination adaptée aux contraintes d'accès de chaque résidence.",
      whyUsBullets: [
        "Connaissance des parkings souterrains nanterriens, de la Préfecture aux résidences du Parc Sud.",
        "Autolaveuse professionnelle et gestion stricte des eaux usées selon les normes en vigueur.",
        "Coordination avec syndics pour rotation véhicules, balisage et intervention en horaires décalés.",
      ],
      uniqueIntro: "<p>Comment maintenir un parking propre et sécurisé quand le trafic varie entre flux quotidien de copropriétaires et afflux massif lors des événements à la <strong>Paris La Défense Arena</strong> ? Les sols encaissent huile moteur, traces de pneus et poussières fines qui s'accumulent rapidement sur le béton ou la résine. Sans intervention régulière, les rampes deviennent glissantes et les odeurs de graisse persistent dans les niveaux souterrains.</p>\
<p class=\"mt-4\">Un lavage mécanisé adapté redonne aux surfaces leur adhérence et leur aspect d'origine. Les copropriétés des <strong>grands ensembles comme le Parc Sud</strong> constatent une amélioration immédiate du confort d'usage : moins de traces au sol, meilleure visibilité des marquages, réduction des plaintes liées aux odeurs. Pour les gestionnaires, c'est aussi un argument concret lors des assemblées générales.</p>\
<p class=\"mt-4\">Chaque intervention commence par un diagnostic du revêtement et de l'état des évacuations. Le balisage sécurise les usagers pendant le chantier, et la rotation des véhicules s'organise en amont avec le syndic pour limiter la gêne.</p>",
      uniqueDeepDive: "<h3>1. Sol dégraissé et adhérent</h3>\
<p>Le résultat visé : un revêtement débarrassé des films gras, avec une surface <strong>antidérapante</strong> sur les rampes et les zones de circulation. Pour y parvenir, l'autolaveuse effectue plusieurs passes mécanisées après application d'un dégraissant adapté au support — béton brut ou résine.</p>\
\
<h3>2. Eaux maîtrisées et évacuations dégagées</h3>\
<p>Aucun rejet sauvage : les eaux de lavage sont aspirées ou dirigées vers les regards existants après vérification de leur bon fonctionnement. Les rigoles et caniveaux sont curés si nécessaire pour garantir un écoulement correct lors des prochaines interventions.</p>\
\
<h3>3. Zones critiques traitées en priorité</h3>\
<p>Les angles morts, pieds de murs et rampes d'accès concentrent souvent les dépôts les plus tenaces. Ces secteurs reçoivent un traitement ciblé à la <strong>haute pression</strong> avant le passage de l'autolaveuse. Si demandé, un dépoussiérage des blocs lumineux et tuyauteries complète l'assainissement général du parking.</p>",
      specificChallenges: [
        "<strong>Parkings événementiels</strong> près de l'Arena : pics de salissure après chaque concert ou match.",
        "Sous-sols des grands ensembles avec <strong>ventilation limitée</strong> et odeurs persistantes.",
        "Revêtements mixtes (béton brut, résine) nécessitant des réglages machine différents.",
        "Rampes d'accès inclinées où l'adhérence doit rester optimale toute l'année.",
        "Coordination accès avec gardiens et syndics pour <strong>limiter la gêne</strong> aux résidents.",
      ],
      faqAdditions: [
        {
          question: "Les taches d'huile anciennes dans les parkings proches de la Paris La Défense Arena peuvent-elles être éliminées ?",
          answer: "<p>Les dépôts d'huile incrustés nécessitent un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Sur les sols en béton brut fréquents dans ce secteur, plusieurs passes peuvent être requises pour dissoudre les couches successives. Le résultat dépend de l'ancienneté des taches, mais l'amélioration reste visible dès la première intervention.</p>",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans un parking souterrain du Parc Sud ?",
          answer: "<p>Avant toute intervention, nous vérifions l'état des regards et rigoles pour garantir un écoulement correct. Les eaux chargées sont aspirées ou dirigées vers les évacuations existantes, jamais rejetées en surface. Dans les sous-sols mal ventilés de ces résidences, cette gestion stricte évite aussi la stagnation d'humidité et les odeurs résiduelles.</p>",
        },
        {
          question: "Quelle fréquence de nettoyage recommandez-vous pour un parking à forte rotation événementielle ?",
          answer: "<p>Après une série de concerts ou matchs à l'Arena, un <strong>décrassage complet</strong> tous les deux à trois mois maintient le sol en bon état. Entre les événements majeurs, un passage d'entretien mensuel suffit généralement. La fréquence s'ajuste selon le volume de véhicules et les retours du gestionnaire sur l'encrassement constaté.</p>",
        },
        {
          question: "Quelles différences de méthode appliquez-vous entre un parking souterrain et un parking aérien à Nanterre ?",
          answer: "<p>En souterrain, la ventilation réduite impose un séchage plus long et une attention particulière aux odeurs de produit. L'éclairage artificiel demande aussi un contrôle visuel plus minutieux. En aérien, les intempéries facilitent le rinçage naturel mais exposent davantage aux dépôts de suie liés à la circulation sur l'A86 toute proche.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Nanterre : traitement des dépôts, nettoyage du sol et des garde-corps, avec gestion maîtrisée des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des contraintes locales : balcons exposés aux axes passants et aux poussières de chantier à Nanterre.",
        "Pression ajustée selon le support, traitement ciblé des garde-corps métal et des joints fragiles.",
        "Organisation pensée pour limiter les coulures chez vos voisins et respecter les horaires de la copropriété.",
      ],
      uniqueIntro: "<p>Le long de l'Avenue Frédéric et Irène Joliot-Curie, les balcons accumulent rapidement un voile grisâtre. La circulation dense y dépose chaque semaine une fine couche de suie qui s'incruste dans les joints et ternit les surfaces. Ce film noirâtre finit par adhérer au carrelage, rendant tout coup de balai inefficace. Vous constatez que l'espace perd son attrait sans comprendre pourquoi le simple arrosage ne suffit plus.</p>\
<p class=\"mt-4\">Sur les résidences récentes comme sur les immeubles en béton peint équipés de garde-corps métal ou verre, cette salissure progressive transforme un lieu de détente en surface négligée. Les plantes jaunissent sous la poussière, le mobilier colle, et l'envie de profiter de l'extérieur diminue. Un balcon propre change la perception de votre logement et redonne envie d'y passer du temps.</p>\
<p class=\"mt-4\">Entre les chantiers des ZAC environnantes et le trafic quotidien, les dépôts reviennent vite. Une intervention structurée permet de retrouver un <strong>sol net</strong>, des parois claires et un espace utilisable sans craindre les coulures chez vos voisins du dessous.</p>",
      uniqueDeepDive: "<h3>1. Préparation et protection</h3>\
<p>Le mobilier est déplacé ou bâché, les plantes mises à l'abri. Les menuiseries reçoivent une protection pour éviter toute projection. Nous vérifions l'état des joints et du support afin d'adapter la pression et les produits utilisés.</p>\
\
<h3>2. Traitement et nettoyage</h3>\
<p>Les gros dépôts sont retirés manuellement avant application d'un produit adapté au carrelage ou au béton. Le brossage cible les zones encrassées, notamment les angles et les joints où la suie s'accumule. Le garde-corps et les vitrages sont traités dans la foulée. Un <strong>rinçage contrôlé</strong> évite les écoulements vers les balcons inférieurs.</p>\
\
<h3>3. Finalisation et conseils</h3>\
<p>Après séchage, nous remettons le mobilier en place et vérifions l'absence de traces résiduelles. Vous recevez des recommandations simples pour espacer les prochaines interventions selon l'exposition de votre balcon à la pollution routière.</p>",
      specificChallenges: [
        "<strong>Dépôts de suie</strong> liés à la circulation sur l'Avenue Joliot-Curie, incrustés dans les joints.",
        "Poussières de chantier provenant des ZAC voisines, salissant rapidement les surfaces nettoyées.",
        "Garde-corps en métal ou verre nécessitant un traitement sans rayure ni coulure.",
        "Gestion des <strong>eaux de rinçage</strong> pour éviter tout désagrément aux occupants des étages inférieurs.",
        "Balcons en béton peint sensibles aux produits trop agressifs.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyer un balcon fortement noirci par la pollution sur l'Avenue Joliot-Curie sans abîmer le carrelage ?",
          answer: "<p>Nous appliquons un produit dégraissant adapté au type de carrelage, suivi d'un <strong>brossage manuel</strong> sur les zones encrassées. La pression de rinçage reste modérée pour préserver les joints. Cette méthode retire le voile de suie sans fragiliser le support ni provoquer d'éclats.</p>",
        },
        {
          question: "Lors d'un nettoyage de balcon en ZAC, comment gérez-vous les coulures et l'évacuation des eaux de lavage ?",
          answer: "<p>Avant de commencer, nous protégeons le rebord et orientons l'écoulement vers une zone contrôlée. Le rinçage s'effectue par petites quantités pour limiter le volume d'eau. Si nécessaire, nous utilisons un <strong>aspirateur à eau</strong> afin d'éviter toute gêne pour les voisins situés en dessous.</p>",
        },
        {
          question: "Sur les balcons des résidences étudiantes proches de l'Université, comment éliminez-vous les dépôts verts et mousses incrustées ?",
          answer: "<p>Un traitement anti-mousse est appliqué après retrait manuel des amas végétaux. Le produit agit quelques minutes avant brossage et rinçage. Sur les surfaces poreuses, nous conseillons un traitement préventif pour ralentir la réapparition des mousses liée à l'humidité ambiante.</p>",
        },
        {
          question: "Comment planifiez-vous l'accès et la sécurité pour nettoyer un balcon en étage élevé dans une tour ?",
          answer: "<p>Nous intervenons depuis l'intérieur du logement, sans nacelle ni échafaudage. Le matériel est monté par l'ascenseur ou l'escalier selon les règles de la copropriété. Les protections sont renforcées sur le garde-corps pour éviter toute chute d'objet pendant l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et retrait sécurisé des déchets pour retrouver un espace utilisable.",
      whyUsBullets: [
        "Connaissance des immeubles de grande hauteur nanterriens où les pigeons colonisent corniches et garde-corps exposés.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide après chaque retrait de fientes.",
        "Organisation pensée pour limiter les nuisances : bâchage, évacuation en sacs étanches, coordination avec le voisinage si nécessaire.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les rebords et corniches des <strong>Tours Aillaud</strong> et des grands immeubles du secteur Parc Sud accumulent des dépôts de fientes qui s'incrustent. L'odeur devient persistante, le garde-corps se couvre d'une couche grisâtre, et l'usage du balcon se limite à ouvrir la porte pour constater les dégâts. Les occupants finissent par renoncer à utiliser cet espace extérieur.</p>\
<p class=\"mt-4\">Sur les <strong>façades et garde-corps métalliques</strong> des tours nanterriennes, les fientes attaquent les peintures et provoquent une corrosion visible en quelques mois. Le linge ne peut plus sécher dehors, les plantes dépérissent, et la gêne vis-à-vis des voisins s'installe quand les odeurs traversent les étages. Récupérer un balcon propre change le quotidien : aérer sans hésiter, profiter d'un café dehors, recevoir sans embarras.</p>\
<p class=\"mt-4\">La proximité du Parc André Malraux favorise la présence régulière de pigeons sur les rebords exposés. Une intervention structurée permet de traiter le problème à la source : retrait sécurisé, désinfection complète, et conseils pour limiter le retour des oiseaux.</p>",
      uniqueDeepDive: "<h3>1. Sécurisation et confinement de la zone</h3>\
<p>L'intervenant arrive équipé : masque FFP2, combinaison jetable, gants et lunettes de protection. Avant tout contact avec les fientes, la zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\
<p class=\"mt-4\">Une <strong>humidification préalable</strong> neutralise les poussières et empêche l'envol de particules contaminées pendant le ramassage.</p>\
\
<h3>2. Retrait des fientes et traitement des supports</h3>\
<p>Les dépôts sont collectés manuellement puis conditionnés en sacs étanches. Le sol du balcon, les garde-corps et les vitrages reçoivent ensuite un nettoyage adapté à chaque matériau.</p>\
<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les résidus organiques.</p>\
\
<h3>3. Rinçage et recommandations anti-retour</h3>\
<p>Un <strong>rinçage final</strong> prépare le balcon à une réutilisation rapide, après un court délai d'aération. Si les rebords ou corniches favorisent le retour des pigeons, des solutions de dissuasion peuvent être envisagées : pics, filets ou gel répulsif selon la configuration.</p>",
      specificChallenges: [
        "<strong>Tours de grande hauteur</strong> : corniches et rebords difficiles d'accès, colonisation récurrente par les pigeons.",
        "Garde-corps métalliques attaqués par l'acidité des fientes, nécessitant un traitement rapide pour éviter la corrosion.",
        "Proximité du <strong>Parc André Malraux</strong> : présence régulière d'oiseaux sur les balcons des résidences alentour.",
        "Immeubles collectifs du Parc Sud : coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
        "Odeurs persistantes si le nettoyage tarde, rendant l'espace extérieur inutilisable plusieurs semaines.",
      ],
      faqAdditions: [
        {
          question: "Les fientes accumulées sur les rebords des Tours Aillaud représentent-elles un risque sanitaire justifiant une intervention rapide ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui peuvent provoquer des troubles respiratoires en cas d'inhalation de poussières. Sur les rebords exposés des tours nanterriennes, l'accumulation favorise la <strong>prolifération bactérienne</strong>. Une intervention dans les jours suivant le constat limite les risques pour les occupants.</p>",
        },
        {
          question: "Quels équipements et protocoles techniques utilisez-vous pour retirer et désinfecter les fientes sur les garde-corps métalliques des grands immeubles ?",
          answer: "<p>L'intervenant porte un masque FFP2, une combinaison jetable, des gants et des lunettes. Après humidification pour fixer les poussières, les fientes sont retirées puis les garde-corps reçoivent un produit virucide homologué. Le temps de contact est respecté avant rinçage pour garantir l'élimination des agents pathogènes.</p>",
        },
        {
          question: "Quelle méthode de désinfection appliquez-vous sur les balcons proches du Parc André Malraux après retrait des fientes ?",
          answer: "<p>Après collecte des dépôts en sacs étanches, un produit bactéricide et virucide est pulvérisé sur le sol, les garde-corps et les vitrages. Le temps d'action est respecté avant rinçage. Cette désinfection élimine les résidus organiques et réduit les odeurs résiduelles pour une réutilisation rapide du balcon.</p>",
        },
        {
          question: "Comment organisez-vous l'évacuation des déchets et la coordination avec le voisinage lors d'un nettoyage fientes dans les immeubles collectifs du Parc Sud ?",
          answer: "<p>Les fientes sont conditionnées en <strong>sacs étanches</strong> dès le ramassage pour éviter toute dispersion. Si l'intervention concerne un balcon en étage, le bâchage protège les voisins du dessous. L'évacuation se fait en fin d'intervention, et nous informons les occupants proches si des nuisances temporaires sont prévisibles.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Un détachage en profondeur de vos canapés, tapis et matelas avec extraction des salissures incrustées et séchage contrôlé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Interventions régulières dans les résidences étudiantes et logements familiaux du secteur Université et Plateau.",
        "Détachage enzymatique adapté à chaque fibre, extraction puissante et séchage accéléré pour une remise en service rapide.",
        "Organisation souple en zones à stationnement contraint, créneaux ajustés selon vos disponibilités.",
      ],
      uniqueIntro: "<p>Comment préserver la fraîcheur d'un canapé quand le quotidien s'y installe ? Dans les <strong>studios et logements proches de la gare de Nanterre-Université</strong>, les textiles d'ameublement absorbent rapidement poussières, taches de café et résidus alimentaires. Les colocations étudiantes cumulent les passages, et les fibres finissent par ternir bien avant l'usure normale du tissu.</p>\
<p class=\"mt-4\">Un rafraîchissement adapté redonne au salon son aspect d'origine. Les <strong>canapés en tissu synthétique ou en laine</strong>, fréquents dans le parc résidentiel nanterrien, retrouvent leurs couleurs et leur souplesse. Les odeurs persistantes disparaissent, et le confort s'améliore dès le séchage terminé. Pour les familles avec animaux sur le secteur Plateau, c'est aussi l'assurance d'éliminer poils incrustés et allergènes accumulés.</p>\
<p class=\"mt-4\">L'intervention s'organise selon vos contraintes. En centre-ville ou près des gares, où le stationnement reste difficile, nous adaptons nos créneaux et notre logistique pour limiter toute gêne. Diagnostic textile, traitement ciblé, extraction : chaque étape suit un protocole structuré.</p>",
      uniqueDeepDive: "<h3>1. Textile propre et assaini</h3>\
<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des taches visibles et des résidus invisibles. Les fibres retrouvent leur souplesse, les couleurs leur éclat. Les allergènes et acariens sont extraits en profondeur.</p>\
\
<h3>2. Diagnostic et pré-traitement</h3>\
<p>Avant toute action, nous identifions le type de tissu : coton, synthétique, velours ou laine. Un test discret sur zone cachée valide la compatibilité du traitement. Les taches tenaces — café, vin, urine — reçoivent un détachage enzymatique ciblé.</p>\
\
<h3>3. Injection-extraction et séchage</h3>\
<p>Le nettoyage principal combine injection d'une solution adaptée et extraction immédiate des salissures. La pression et la température s'ajustent selon la fragilité du textile. Après passage, nous maximisons l'extraction pour réduire le <strong>temps de séchage</strong>. Selon l'épaisseur du tissu et l'aération du logement, comptez quelques heures avant remise en service complète.</p>",
      specificChallenges: [
        "<strong>Studios étudiants</strong> autour de l'Université : textiles sollicités, taches fréquentes, rotation locative.",
        "Canapés en <strong>tissu synthétique ou laine</strong> : traitement différencié pour éviter décoloration.",
        "Logements avec <strong>animaux</strong> sur le Plateau : poils incrustés, odeurs persistantes à neutraliser.",
        "Accès en <strong>centre-ville et gare</strong> : stationnement limité, intervention planifiée en amont.",
        "Matelas en colocation : accumulation d'acariens et allergènes entre deux locataires.",
      ],
      faqAdditions: [
        {
          question: "Un canapé de studio étudiant près de l'Université peut-il être débarrassé durablement des acariens et allergènes ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur et déloge acariens, poussières et allergènes accumulés. Sur les textiles synthétiques courants dans ces logements, le traitement élimine efficacement ces résidus. Pour un effet durable, nous recommandons un <strong>entretien tous les douze à dix-huit mois</strong> selon l'usage.</p>",
        },
        {
          question: "Comment traitez-vous les taches d'urine et odeurs d'animaux sur un canapé tissu dans un logement du secteur Plateau ?",
          answer: "<p>Nous appliquons un <strong>pré-traitement enzymatique</strong> qui décompose les composés organiques responsables des odeurs. L'extraction retire ensuite les résidus en profondeur. Sur les tissus laine ou synthétiques fréquents à Nanterre, cette méthode neutralise les marques sans altérer la fibre ni laisser d'auréole.</p>",
        },
        {
          question: "Quelle méthode privilégiez-vous selon le textile pour éviter toute décoloration sur un canapé en laine ou synthétique ?",
          answer: "<p>Chaque tissu reçoit un diagnostic préalable. Sur la laine, nous réduisons température et pression pour préserver la fibre. Les synthétiques supportent un traitement plus appuyé. Un test sur zone cachée valide systématiquement la compatibilité avant de lancer le nettoyage complet.</p>",
        },
        {
          question: "En cas d'accès difficile près de la gare de Nanterre-Ville, comment organisez-vous l'intervention à domicile ?",
          answer: "<p>Nous repérons les contraintes de stationnement en amont et ajustons le créneau horaire. En zone à accès limité, nous privilégions des plages moins encombrées et préparons le matériel pour une installation rapide. L'intervention reste fluide malgré les restrictions de circulation du centre.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription: "Traitement complet de votre terrasse avec adaptation au support — dalles, bois ou pierre — pour éliminer mousses, dépôts verts et taches tenaces, et retrouver un espace extérieur utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses nanterriennes : dalles sur plots en ZAC, bois sur pavillons du Plateau, carrelage en résidences anciennes.",
        "Produits et pressions ajustés à chaque support pour éliminer mousses et dépôts sans fragiliser les matériaux.",
        "Déplacement soigné du mobilier, protection des plantations et gestion de l'écoulement vers les évacuations existantes.",
      ],
      uniqueIntro: "<p>Dans le secteur des Terrasses et de la ZAC Seine-Arche, les toits-terrasses équipés de dalles sur plots accumulent rapidement dépôts organiques et salissures atmosphériques. L'exposition aux particules urbaines, combinée aux résidus végétaux portés par le vent, crée une couche grisâtre qui rend le sol glissant et peu engageant. Ces surfaces perdent leur aspect d'origine en quelques saisons sans entretien adapté.</p>\n<p class=\"mt-4\">Un rafraîchissement régulier redonne à la terrasse son rôle d'espace de vie extérieur. Les dalles sur plots, carrelages ou lames bois présents sur les résidences nanterriennes nécessitent chacun une approche spécifique pour éviter toute détérioration. Le résultat se traduit par une surface propre, antidérapante et agréable à utiliser dès les beaux jours.</p>\n<p class=\"mt-4\">Notre intervention débute par un diagnostic du support et de son état. Nous identifions les zones à traiter en priorité, protégeons le mobilier et les plantations, puis appliquons un protocole calibré selon le matériau. Un compte-rendu vous est remis à l'issue du chantier.</p>",
      uniqueDeepDive: "<h3>1. Préparation et protection</h3>\
<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection pour éviter les projections.</p>\
<p class=\"mt-4\">Un <strong>balayage préalable</strong> élimine feuilles mortes, terre et débris accumulés entre les dalles ou dans les interstices du bois.</p>\
\
<h3>2. Traitement adapté au support</h3>\
<p>Un produit désincrustant est appliqué selon la nature du revêtement : formule douce pour le bois composite, solution anti-mousse pour la pierre ou le carrelage. Le <strong>brossage manuel</strong> ou mécanique décolle les dépôts verts incrustés.</p>\
<p class=\"mt-4\">Sur les zones ombragées sujettes aux lichens, un traitement préventif prolonge l'effet du nettoyage.</p>\
\
<h3>3. Rinçage et finalisation</h3>\
<p>Le rinçage s'effectue à pression contrôlée pour préserver joints et matériaux poreux. L'eau est dirigée vers les points d'écoulement existants, en veillant à protéger les plantations environnantes.</p>\
<p class=\"mt-4\">Après séchage, nous repositionnons le mobilier et vous transmettons des conseils d'entretien saisonnier pour maintenir le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Dalles sur plots</strong> en ZAC Seine-Arche : nettoyage sans déplacement ni décalage des éléments.",
        "Terrasses bois du <strong>Mont-Valérien</strong> exposées à l'ombre : mousses et lichens récurrents.",
        "Pollution urbaine liée à l'A86 : dépôts gras sur carrelages et garde-corps.",
        "Accès parfois contraint en résidence avec digicode et stationnement limité.",
        "Mobilier et plantes à protéger pendant l'intervention sur les toits-terrasses.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyer des dalles sur plots sur Les Terrasses sans décaler les plots ni abîmer les joints ?",
          answer: "<p>Nous travaillons à pression modérée et orientons le jet parallèlement aux joints pour éviter tout déplacement. Le produit désincrustant agit en surface sans s'infiltrer sous les dalles. Cette méthode préserve la <strong>stabilité du système</strong> tout en éliminant mousses et salissures accumulées entre les éléments.</p>",
        },
        {
          question: "Quelle solution recommandez-vous pour éliminer mousses et lichens incrustés sur une terrasse ombragée du Mont-Valérien ?",
          answer: "<p>Un traitement anti-mousse concentré est appliqué après brossage mécanique des zones les plus touchées. Le produit agit sur plusieurs jours et détruit les <strong>racines du lichen</strong>. Un passage préventif en fin de saison humide limite la réapparition sur ces surfaces peu exposées au soleil.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous un entretien de terrasse dans une résidence exposée à la pollution urbaine ?",
          answer: "<p>Pour les terrasses proches de l'A86 ou des axes passants, un nettoyage annuel au printemps suffit généralement. Si la terrasse est ombragée ou proche d'arbres, un second passage à l'automne prévient l'accumulation de dépôts organiques avant l'hiver.</p>",
        },
        {
          question: "Faut-il éviter la haute pression sur une terrasse bois ou pierre dans les pavillons du Plateau ?",
          answer: "<p>Sur le bois, nous privilégions une pression réduite et un brossage doux pour ne pas écarter les fibres. Sur la pierre, le jet est éloigné et orienté en biais. Ces précautions évitent l'érosion du matériau tout en assurant un résultat propre et durable.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement à Nanterre, avec traitement de chaque pièce et coordination adaptée aux contraintes de délai pour état des lieux ou fin de chantier.",
      whyUsBullets: [
        "Connaissance des typologies de logements nanterriens, des studios étudiants aux appartements familiaux du Plateau.",
        "Polyvalence sur tous types de sols et surfaces, avec produits adaptés aux parquets fragiles comme aux carrelages.",
        "Intervention calée sur vos contraintes de remise de clés, en lien direct avec agences ou propriétaires.",
      ],
      uniqueIntro: "<p>Les traces de poussière sur les plinthes, les résidus de colle près des fenêtres, les éclaboussures sur la faïence de salle de bain : autant de détails visibles dès l'entrée dans un logement après travaux ou en fin de bail. <strong>Autour de la Gare de Nanterre-Ville</strong>, où les rotations locatives restent fréquentes, ces constats se répètent à chaque changement d'occupant. Un nettoyage partiel laisse souvent des zones oubliées qui compromettent l'état des lieux.</p>\n<p class=\"mt-4\">Un logement propre facilite la restitution du dépôt de garantie et accélère la relocation. Dans les appartements récents comme dans les immeubles anciens du centre, <strong>les sols varient du PVC au parquet en passant par le carrelage</strong>. Chaque revêtement demande un traitement adapté pour éviter les traces ou les dégradations. Le résultat attendu : un intérieur prêt à accueillir le prochain occupant sans réserve.</p>\n<p class=\"mt-4\">L'intervention se structure autour d'un diagnostic initial et d'un plan de passage par zones. <strong>La coordination avec les agences immobilières</strong> permet de caler l'intervention avant la remise des clés, en tenant compte des contraintes horaires et des accès par digicode.</p>",
      uniqueDeepDive: "<h3>1. Pièces de vie et chambres</h3>\
<p>Le dépoussiérage commence par les plafonds, murs et plinthes. Les sols reçoivent un traitement adapté au revêtement : aspiration puis lavage pour le carrelage, nettoyage à sec ou humide contrôlé pour le parquet.</p>\
<p class=\"mt-4\">Les placards sont vidés et nettoyés intérieurement. Les interrupteurs, poignées et radiateurs sont dégraissés.</p>\
\
<h3>2. Cuisine et salle de bain</h3>\
<p>Les plans de travail, crédences et électroménagers sont dégraissés. La faïence et les joints de la salle de bain reçoivent un traitement <strong>anti-calcaire</strong>. Les sanitaires sont désinfectés.</p>\
<p class=\"mt-4\">Les traces de peinture ou d'enduit résiduelles sont retirées manuellement sur les surfaces fragiles.</p>\
\
<h3>3. Vitres et finitions</h3>\
<p>Les vitres intérieures sont nettoyées sans traces. Un <strong>contrôle qualité</strong> pièce par pièce permet de vérifier chaque zone avant la remise des clés.</p>\
<p class=\"mt-4\">L'aération du logement finalise l'intervention pour un intérieur prêt à la visite ou à l'emménagement.</p>",
      specificChallenges: [
        "<strong>Rotations locatives fréquentes</strong> autour de la gare de Nanterre-Ville, avec délais serrés pour les états des lieux.",
        "Logements neufs en ZAC nécessitant un <strong>nettoyage fin de chantier</strong> avant livraison.",
        "Accès par digicode et coordination avec gardiens dans les résidences du Parc Sud.",
        "Sols variés (PVC, parquet, carrelage) demandant des <strong>techniques différenciées</strong> par pièce.",
        "Stationnement difficile en centre-ville, anticipation logistique indispensable.",
      ],
      faqAdditions: [
        {
          question: "Quel délai proposez-vous pour un nettoyage complet avant état des lieux près de la Gare de Nanterre-Ville ?",
          answer: "<p>Nous intervenons sous 24 à 48 heures selon la surface et la disponibilité. Pour les états des lieux urgents dans le secteur de Nanterre-Ville, nous adaptons notre planning en coordination avec l'agence ou le propriétaire pour respecter la date de remise des clés.</p>",
        },
        {
          question: "Quelle différence entre un ménage standard et une remise en état après travaux dans un appartement neuf de la ZAC Hoche ?",
          answer: "<p>Le nettoyage fin de chantier inclut le retrait des <strong>résidus de peinture</strong>, colle et enduit sur les surfaces. Les vitres, menuiseries et sols reçoivent un traitement approfondi. Un ménage standard se concentre sur l'entretien courant sans intervention sur les traces de travaux.</p>",
        },
        {
          question: "Comment traitez-vous un appartement du Parc Sud après un dégât des eaux ?",
          answer: "<p>Nous commençons par évaluer l'étendue des zones touchées. Le nettoyage cible les surfaces impactées par l'humidité, avec extraction de l'eau résiduelle si nécessaire. Une ventilation prolongée complète l'intervention pour limiter les risques de moisissures.</p>",
        },
        {
          question: "Comment coordonnez-vous l'intervention avec une agence immobilière pour un état des lieux à Nanterre ?",
          answer: "<p>Nous échangeons directement avec l'agence pour caler la date et l'heure d'intervention. L'accès au logement est organisé en amont, que ce soit par remise de clés ou passage par le gardien. Un compte-rendu peut être transmis après l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;