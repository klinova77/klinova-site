import type { City } from "~/types/geo";

const city: City = {
  name: "Choisy-le-Roi",
  slug: "choisy-le-roi",
  postalCodes: ["94600"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Choisy-le-Roi pour l'entretien des parties communes, parkings et espaces extérieurs. Entre le quartier du Port et les pavillons des Gondoles, une équipe locale adaptée aux contraintes d'une ville sur deux rives.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : <p>...</p> <p class="mt-4">...</p> <ul>...</ul>
  hubIntro:
    "<p>Au carrefour du RER C et du Tram T9, Choisy-le-Roi concentre des flux quotidiens importants sur ses deux rives. Klinova accompagne syndics, gestionnaires et occupants dans la gestion régulière de la propreté, avec une <strong>organisation pensée pour ce territoire</strong> en mutation.</p>\n<p class=\"mt-4\">Parties communes, sous-sols, balcons ou espaces extérieurs : chaque intervention s'adapte au bâti concerné. Reporting disponible sur demande, planification ajustée aux contraintes d'accès et aux horaires de la copropriété ou du site.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Prise en compte des jours de marché, des livraisons en zone Port et des accès restreints près de la gare pour limiter les blocages.</li>\n  <li><strong>Adaptation au bâti :</strong> Résidences récentes avec parkings souterrains, immeubles anciens du centre, pavillons rive droite — chaque configuration a son protocole.</li>\n  <li><strong>Suivi et transparence :</strong> Compte-rendu d'intervention transmis aux gestionnaires, photos avant/après disponibles selon le contrat établi.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> fréquents dans les résidences du Port : sols béton encrassés par le trafic quotidien.",
    "Stationnement saturé autour de la <strong>gare RER C</strong> : coordination véhicule indispensable.",
    "Balcons exposés à la <strong>pollution du Pont de Choisy</strong> et de l'A86 : dépôts noirs récurrents.",
    "Immeubles hauts aux Navigateurs : <strong>fientes sur corniches</strong> et rebords difficiles d'accès.",
    "Quartier des Gondoles : <strong>terrasses pavillonnaires</strong> sujettes à la mousse (proximité Seine).",
    "Jours de marché (jeudi/dimanche) : accès centre-ville <strong>fortement perturbé</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Les Gondoles Nord",
    "Les Gondoles Sud",
    "Quartier du Port",
    "Les Navigateurs",
    "Briand-Pelloutier",
    "Quartier du Roi",
  ],
  nearbyCities: [
        "thiais",
        "orly",
        "creteil",
        "vitry-sur-seine",
        "alfortville",
        "maisons-alfort",
        "chevilly-larue",
        "rungis",
        "villejuif",
        "ivry-sur-seine"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Choisy-le-Roi",
    "Gare de Choisy-le-Roi (RER C)",
    "Parc des Gondoles",
    "Pont de Choisy",
    "Quartier du Port",
    "Tramway T9 (arrêt Rouget de Lisle)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Intervenez-vous rapidement en cas de besoin urgent sur Choisy-le-Roi ?",
      answer:
        "<p>Oui, notre équipe basée en Île-de-France peut se mobiliser sous <strong>24 à 48 heures</strong> selon la nature de la demande. Pour les situations critiques (dégât des eaux, souillure importante), nous priorisons l'intervention afin de limiter la gêne pour les occupants ou usagers du site.</p>",
    },
    {
      question: "Comment se passe la prise de rendez-vous pour un devis ?",
      answer:
        "<p>Nous organisons une visite technique sur place pour évaluer les surfaces, les accès et les contraintes spécifiques. À Choisy-le-Roi, cela inclut souvent la <strong>vérification du stationnement</strong> près du chantier et la coordination avec le gardien ou le syndic. Le devis est transmis sous 48 heures après passage.</p>",
    },
    {
      question: "Pouvez-vous intervenir en dehors des heures de bureau ?",
      answer:
        "<p>Oui, nous proposons des créneaux en <strong>horaires décalés</strong> (tôt le matin, soirée) pour les sites où la présence de personnel ou de résidents complique l'accès en journée. C'est fréquent pour les parkings souterrains ou les halls d'immeubles à fort passage.</p>",
    },
    {
      question: "Travaillez-vous avec les syndics et bailleurs sociaux ?",
      answer:
        "<p>Nous collaborons régulièrement avec des <strong>syndics professionnels</strong> et des bailleurs pour des interventions ponctuelles ou récurrentes. Facturation claire, reporting adapté aux exigences de gestion, et souplesse sur les plannings de rotation des locataires ou copropriétaires.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne sont inclus que ceux demandés)
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec traitement adapté aux fibres et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des typologies de bâti du Quartier du Port et des copropriétés du centre pour adapter chaque intervention.",
        "Matériel d'injection-extraction professionnel calibré selon la densité et la nature des fibres traitées.",
        "Créneaux planifiés en dehors des heures de passage pour limiter la gêne des occupants et résidents.",
      ],
      uniqueIntro:
        "<p>Dans le <strong>Quartier du Port</strong>, les parties communes des résidences récentes accumulent rapidement poussières et traces de passage. Les bureaux proches des programmes neufs subissent le même phénomène : couloirs fréquentés, zones d'attente sollicitées, fibres qui ternissent malgré l'aspiration régulière. Le trafic quotidien laisse des dépôts que le simple entretien courant ne suffit pas à éliminer.</p>\n<p class=\"mt-4\">Les dalles textiles installées dans les halls d'immeubles récents et le velours ras des copropriétés années 70 réagissent différemment aux salissures. Sans traitement adapté, les fibres s'encrassent en profondeur, l'aspect visuel se dégrade et les odeurs persistent. Un entretien par injection-extraction redonne aux revêtements leur tenue d'origine et prolonge leur durée de vie.</p>\n<p class=\"mt-4\">Le <strong>fort trafic piéton autour de la gare RER C</strong> amplifie ces contraintes pour les locaux situés à proximité. Une intervention structurée permet d'adapter le protocole au type de moquette, de protéger les éléments adjacents et de garantir un séchage compatible avec la reprise d'activité.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation intensive</h3>\n<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. Après diagnostic du type de fibre, une aspiration préalable retire les particules libres. Le traitement par <strong>injection-extraction</strong> cible ensuite les zones de passage où l'encrassement est le plus marqué.</p>\n\n<h3>Surfaces intermédiaires et paliers</h3>\n<p>Les espaces de transition reçoivent un détachage ciblé sur les taches identifiées. Les passes successives permettent d'extraire les résidus incrustés sans saturer le support. Les plinthes et bas de murs sont protégés pendant toute l'opération.</p>\n\n<h3>Zones périphériques et finitions</h3>\n<p>Les angles, dessous de mobilier et recoins font l'objet d'un traitement complémentaire. L'extraction maximale de l'humidité réduit le temps de séchage. Selon l'épaisseur du revêtement et la ventilation disponible, comptez entre 4 et 8 heures avant piétinement normal.</p>",
      specificChallenges: [
        "Dalles textiles des halls récents : <strong>encrassement rapide</strong> malgré l'aspect neuf.",
        "Velours ras des copropriétés années 70 : <strong>fibres compactées</strong> retenant poussières et odeurs.",
        "Accès aux cages d'escalier étroites du centre nécessitant <strong>du matériel compact</strong>.",
        "Stationnement contraint près de la gare imposant <strong>une logistique anticipée</strong>.",
        "Coordination avec syndics et gestionnaires pour <strong>intervenir sans perturber les résidents</strong>.",
      ],
      faqAdditions: [
        {
          question:
            "Les cages d'escalier étroites du centre-ville près de la gare compliquent l'accès : comment procédez-vous pour nettoyer la moquette ?",
          answer:
            "<p>Nous utilisons du matériel compact adapté aux passages restreints. Les tuyaux et buses sont dimensionnés pour manœuvrer dans les angles serrés. L'intervention se fait par sections successives afin de ne pas encombrer les circulations et de permettre aux résidents d'accéder à leur logement.</p>",
        },
        {
          question:
            "Une moquette de palier au Quartier du Port présente des taches anciennes : quelles solutions pour une remise en état durable ?",
          answer:
            "<p>Un pré-traitement enzymatique est appliqué sur les zones marquées avant l'injection-extraction. Cette méthode décolle les résidus incrustés sans agresser les fibres. Selon l'ancienneté des taches, plusieurs passes peuvent être nécessaires pour obtenir un rendu homogène et prolonger la tenue du revêtement.</p>",
        },
        {
          question:
            "Pour des dalles textiles en bureaux administratifs, quelle méthode offre le meilleur résultat sans risque pour le support ?",
          answer:
            "<p><strong>L'injection-extraction</strong> reste la technique la plus adaptée aux dalles textiles. Elle limite l'apport d'eau tout en assurant une extraction efficace des salissures. La vapeur seule convient aux désinfections légères mais ne retire pas les particules incrustées. Nous ajustons la pression et le débit selon la densité du tissage.</p>",
        },
        {
          question:
            "Avec un stationnement saturé près de la gare RER C, comment organisez-vous la logistique pour intervenir sur les moquettes ?",
          answer:
            "<p>Nous repérons en amont les <strong>possibilités de stationnement</strong> ou de dépose rapide. Le matériel est conditionné pour un transport efficace sur courte distance. Les créneaux d'intervention sont calés en dehors des pics de circulation afin de réduire les contraintes d'accès et de respecter les délais convenus.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parkings souterrains et aériens, avec traitement des taches d'huile, gestion rigoureuse des eaux usées et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès propres aux sous-sols du Port et aux parkings aériens des Gondoles.",
        "Autolaveuse professionnelle et gestion stricte des eaux usées pour respecter les évacuations existantes.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur les sols des parkings souterrains du Quartier du Port comme sur les emplacements aériens des Gondoles. Suie, projections d'huile moteur, poussière de pneus : ces dépôts s'incrustent dans le béton brut ou l'enrobé au fil des passages quotidiens. Les <strong>rampes d'accès</strong> concentrent souvent les salissures les plus tenaces, rendant certaines zones glissantes par temps humide.</p>\n<p class=\"mt-4\">Un sol de parking encrassé renvoie une image négative de la résidence. Les copropriétaires signalent des odeurs persistantes, les gestionnaires reçoivent des plaintes sur l'état des sous-sols. Les revêtements béton brut en souterrain et enrobé en surface réagissent différemment aux traitements : adapter la méthode évite d'endommager le support tout en obtenant un résultat visible.</p>\n<p class=\"mt-4\">Le trafic automobile intensif lié aux axes proches génère un encrassement rapide. Une intervention programmée permet de coordonner le balisage, la rotation des véhicules et le lavage mécanisé sans bloquer l'accès aux résidents plus longtemps que nécessaire.</p>",
      uniqueDeepDive:
        "<h3>Sol décrassé et rampes sécurisées</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des <strong>graisses, huiles</strong> et poussières incrustées. Les rampes retrouvent leur adhérence, les zones de circulation leur aspect propre. Le résultat se constate dès la fin du passage : sol uniforme, sans traces résiduelles ni flaques stagnantes.</p>\n\n<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute action, le technicien identifie le type de revêtement et l'état des évacuations. Un balayage préalable élimine les débris. Le balisage sécurise les zones de travail pendant que la rotation des véhicules s'organise avec le gestionnaire pour libérer les emplacements par secteur.</p>\n\n<h3>Lavage mécanisé et gestion des eaux</h3>\n<p>L'autolaveuse ou la haute pression associée à un dégraissant adapté traite les surfaces. Les angles morts, pieds de murs et rigoles reçoivent une attention particulière. Les eaux de lavage sont collectées et dirigées vers les évacuations conformes, sans rejet sauvage. Un dépoussiérage aérien des blocs lumineux peut compléter l'intervention si demandé.</p>",
      specificChallenges: [
        "Sous-sols du Quartier du Port : <strong><strong>rampes étroites et ventilation limitée</strong></strong> imposent un matériel adapté.",
        "Taches d'huile anciennes sur béton brut : dégraissant ciblé avant passage mécanisé.",
        "Parkings aériens aux Gondoles : enrobé exposé aux intempéries, traitement différent du souterrain.",
        "Gestion des eaux de lavage en copropriété : collecte obligatoire, pas de rejet vers la voirie.",
        "Coordination horaires : éviter les créneaux de forte rotation véhicules matin et soir.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle différence de méthode entre un parking souterrain du Quartier du Port et un parking aérien aux Gondoles ?",
          answer:
            "<p>Le souterrain sous dalle présente un <strong>béton brut sensible</strong> aux produits agressifs : on privilégie un dégraissant neutre et une autolaveuse à faible pression. En aérien, l'enrobé supporte mieux la haute pression, ce qui accélère le décrassage des zones exposées aux intempéries et à la poussière de circulation.</p>",
        },
        {
          question:
            "Des taches d'huile anciennes marquent la rampe d'accès proche de l'A86 : quel procédé utilisez-vous ?",
          answer:
            "<p>Un dégraissant alcalin est appliqué en prétraitement sur les zones imprégnées. Après un temps de contact adapté, le passage de l'autolaveuse ou de la haute pression déloge les résidus incrustés. Les rampes retrouvent leur adhérence sans risque de glissance résiduelle après séchage.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage lors d'une intervention en sous-sol de copropriété ?",
          answer:
            "<p>Les eaux chargées sont dirigées vers les regards existants après vérification de leur état. Si les évacuations sont obstruées ou non conformes, on procède à une aspiration pour éviter tout rejet sauvage. Le syndic reçoit un compte-rendu précisant les volumes traités et l'état des canalisations.</p>",
        },
        {
          question:
            "Pour un parking proche du marché du Centre, quels horaires privilégier afin de limiter la gêne ?",
          answer:
            "<p>Les jeudis et dimanches matins sont à éviter en raison de l'affluence liée au marché. On recommande une intervention en début d'après-midi ou en soirée, après concertation avec le gestionnaire pour informer les résidents et organiser le déplacement temporaire des véhicules concernés.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Choisy-le-Roi : traitement des dépôts, brossage adapté au support et rinçage contrôlé pour un espace extérieur à nouveau agréable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons ombragés du Centre, loggias ensoleillées du Port, béton des Navigateurs.",
        "Pression ajustée selon le support et l'état des joints, brossage manuel complémentaire si nécessaire.",
        "Gestion stricte des eaux de rinçage et coordination avec les voisins pour éviter toute nuisance.",
      ],
      uniqueIntro:
        "<p>Dans le secteur du Centre-Ville et le long de l'avenue Anatole France, les balcons accumulent rapidement une couche grisâtre. La circulation dense sur cet axe structurant dépose un <strong>film de particules fines</strong> qui s'incruste dans les joints et ternit les surfaces. Les dépôts verts s'installent dès que l'humidité persiste, surtout sur les expositions nord ou à l'ombre des bâtiments voisins.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change la perception de l'espace. Les loggias profondes du Quartier du Port ou les balcons en béton brut des grands ensembles redeviennent des prolongements du logement plutôt que des zones délaissées. Le carrelage des pavillons retrouve sa teinte d'origine, le mobilier peut être réinstallé sans crainte de salir coussins ou pieds de chaises.</p>\n<p class=\"mt-4\">L'intervention est organisée en tenant compte des contraintes d'accès par digicode et des règles d'évacuation d'eau propres à chaque copropriété. Un diagnostic préalable permet d'adapter la méthode au support et à l'environnement immédiat.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries — fenêtres, portes-fenêtres, seuils — reçoivent une protection pour éviter les projections. Les gros débris (feuilles mortes, terre accumulée) sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce sur carrelage, solution désincrustante sur béton brut. Le <strong>brossage — manuel ou mécanique</strong> selon l'état — déloge les salissures incrustées dans les joints et sur les dalles. Le garde-corps, les vitrages latéraux et les murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles. L'eau est dirigée vers l'évacuation sans coulures chez les voisins du dessous. Après séchage, quelques conseils d'entretien courant sont transmis pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Pollution routière sur les balcons proches du Pont de Choisy : <strong><strong>film gras à traiter en profondeur</strong></strong>.",
        "Loggias du Quartier du Port avec évacuation intégrée : <strong>rinçage à adapter</strong> pour éviter les refoulements.",
        "Béton brut poreux sur les grands ensembles des Navigateurs : brossage renforcé nécessaire.",
        "Accès par digicode et étages élevés sans ascenseur dans certains immeubles anciens du Centre.",
        "Dépôts verts persistants sur les expositions nord, aggravés par l'humidité de la Seine.",
      ],
      faqAdditions: [
        {
          question:
            "Balcons en béton des grands ensembles (Navigateurs) : quelles précautions techniques pour nettoyer sans abîmer le support ?",
          answer:
            "<p><strong>Le béton brut est poreux</strong> et peut se dégrader sous une pression trop forte. Nous utilisons un brossage mécanique adapté et une pression modérée. Le produit désincrustant agit en profondeur avant rinçage, ce qui limite l'agression mécanique tout en éliminant les salissures incrustées.</p>",
        },
        {
          question:
            "Balcon fortement encrassé par la pollution routière près du Pont de Choisy : quelle méthode recommandez-vous ?",
          answer:
            "<p>Les dépôts gras liés au trafic nécessitent un dégraissant spécifique appliqué avant brossage. La surface est ensuite rincée à pression contrôlée. Sur carrelage ou béton, ce traitement retire le film noirâtre sans endommager les joints ni les finitions.</p>",
        },
        {
          question:
            "Que prévoir concernant l'évacuation des eaux et le risque de coulures pour un balcon rue Anatole France ?",
          answer:
            "<p>Avant de commencer, nous repérons le point d'évacuation et protégeons les abords. Le rinçage est orienté vers la <strong>descente d'eau</strong>, avec un débit maîtrisé. Si le balcon surplombe un autre espace, nous prévenons les occupants et installons une protection temporaire.</p>",
        },
        {
          question:
            "Intervention sur balcon en loggia au 6ème étage du Port : comment procédez-vous sans nacelle ?",
          answer:
            "<p>L'intervention se fait depuis l'intérieur du logement. Le matériel — aspirateur, brosses, nettoyeur basse pression — est monté par l'équipe. L'accès par digicode est coordonné en amont. Aucun équipement extérieur n'est nécessaire pour ce type de configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque de Choisy-le-Roi : abords du Parc des Gondoles, bords de Seine, corniches du centre ancien.",
        "Protocole complet avec EPI adaptés, confinement de la zone et désinfection virucide homologuée.",
        "Organisation pensée pour limiter la gêne : bâchage discret, évacuation des déchets en sacs étanches, intervention rapide.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, le garde-corps et les rebords de fenêtres. À proximité du <strong>Parc des Gondoles</strong> ou le long des <strong>bords de Seine</strong>, les pigeons trouvent des points de repos favorables sur les corniches et balcons exposés. L'odeur devient tenace, le linge étendu se salit, et l'espace extérieur perd toute utilité.</p>\n<p class=\"mt-4\">Sur les derniers étages des grands ensembles comme Les Navigateurs ou les corniches des immeubles anciens du centre, les dépôts s'incrustent dans le béton et attaquent les peintures. Les acides contenus dans les déjections dégradent progressivement les supports. Retrouver un balcon utilisable suppose un traitement en profondeur, pas un simple rinçage.</p>\n<p class=\"mt-4\">L'intervention débute par un diagnostic visuel pour évaluer l'étendue des souillures et l'état des surfaces. Nous adaptons le protocole selon la configuration : loggia fermée nécessitant un confinement renforcé, ou balcon ouvert avec protection des voisins. Un compte-rendu précise les zones traitées et les recommandations de prévention.</p>",
      uniqueDeepDive:
        "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur propre, sans odeur ni risque sanitaire. Les fientes sont <strong>intégralement retirées</strong> du sol, du garde-corps et des vitrages. Une désinfection virucide et bactéricide élimine les agents pathogènes. Le balcon redevient utilisable après un délai d'aération de quelques heures.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, l'équipe porte combinaison jetable, masque FFP2, gants et lunettes de protection. Une bâche isole la zone pour éviter la dispersion de poussières contaminées vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées puis collectées dans des sacs étanches.</p>\n\n<h3>Traitement des supports et prévention</h3>\n<p>Chaque surface reçoit un nettoyage adapté : sol béton, métal du garde-corps, vitrage. Le produit désinfectant agit pendant le temps de contact requis avant rinçage. Nous proposons ensuite des solutions anti-retour — pics sur les rebords, filets de protection — pour limiter la réinstallation des pigeons.</p>",
      specificChallenges: [
        "Proximité du Parc des Gondoles : <strong>pigeons et oiseaux</strong> trouvent refuge dans les arbres et nichent sur les balcons voisins.",
        "Corniches anciennes du centre-ville souvent colonisées, avec fientes incrustées difficiles à déloger.",
        "Derniers étages des Navigateurs : exposition maximale aux nuisibles, accumulations importantes sur garde-corps.",
        "Loggias du Quartier du Port parfois fermées : <strong>confinement renforcé</strong> nécessaire pour éviter dispersion des poussières.",
        "Odeurs persistantes si le traitement se limite au rinçage sans désinfection adaptée.",
      ],
      faqAdditions: [
        {
          question:
            "Des fientes se sont accumulées sur le rebord de ma fenêtre près du centre-ville : quels risques sanitaires et que faire en urgence ?",
          answer:
            "<p>Les fientes de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) susceptibles de provoquer des infections respiratoires. En attendant l'intervention, évitez de manipuler les dépôts à <strong>mains nues</strong> et aérez sans balayer à sec. Nous intervenons rapidement pour retirer les souillures et désinfecter la zone concernée.</p>",
        },
        {
          question:
            "Sur les balcons exposés aux pigeons le long des bords de Seine, quels équipements de protection utilisez-vous ?",
          answer:
            "<p>L'équipe porte systématiquement masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour confiner les poussières. Les fientes sont humidifiées avant collecte afin d'éviter toute dispersion de particules contaminées vers l'intérieur du logement ou les balcons voisins.</p>",
        },
        {
          question:
            "Après le retrait des fientes sur les corniches anciennes du centre, quelle désinfection appliquez-vous ?",
          answer:
            "<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué sur l'ensemble des surfaces nettoyées. Le <strong>temps de contact</strong> est respecté avant rinçage pour garantir l'élimination des agents pathogènes. Cette étape est indispensable sur les supports poreux comme le béton ou la pierre ancienne.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des déchets lors d'une intervention sur un immeuble du Quartier du Port ?",
          answer:
            "<p>Les fientes collectées sont conditionnées dans des sacs étanches fermés hermétiquement. Nous les évacuons avec notre matériel, sans laisser de résidus dans les parties communes. Cette organisation limite les nuisances pour les voisins et garantit une intervention propre du début à la fin.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et nettoyage en profondeur de vos canapés, tapis et matelas à Choisy-le-Roi, avec extraction des salissures incrustées et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Choisy-le-Roi, des pavillons des Gondoles aux appartements du centre ancien.",
        "Matériel d'injection-extraction textile avec réglages adaptés aux fibres délicates et détachage enzymatique ciblé.",
        "Organisation pensée pour les accès contraints : anticipation du stationnement et intervention rapide pour limiter l'indisponibilité du mobilier.",
      ],
      uniqueIntro:
        "<p>Comment préserver la fraîcheur d'un canapé quand la vie de famille s'y installe au quotidien ? Dans les zones résidentielles comme le quartier des Gondoles Sud ou Briand-Pelloutier, les <strong>textiles d'ameublement</strong> absorbent les traces du quotidien : taches de boissons renversées, marques laissées par les animaux, poussières qui s'accumulent dans les fibres. Ces salissures s'incrustent progressivement et finissent par altérer l'aspect général du mobilier.</p>\n<p class=\"mt-4\">Un entretien adapté redonne au canapé ou au tapis son confort d'origine. Les couleurs retrouvent leur éclat, les odeurs persistantes disparaissent, et l'assise redevient agréable. Dans les logements locatifs équipés de canapés tissu non déhoussables, ce rafraîchissement permet aussi de maintenir un intérieur accueillant sans remplacer le mobilier.</p>\n<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic textile précis. Nous identifions la nature des fibres, repérons les zones à traiter en priorité, et adaptons la méthode selon l'épaisseur du tissu. Le stationnement parfois difficile en centre-ville est anticipé pour garantir un accès fluide avec notre matériel.</p>",
      uniqueDeepDive:
        "<h3>Textile propre et assaini</h3>\n<p>L'objectif est d'extraire les salissures incrustées tout en préservant les fibres. Le résultat visé : un canapé ou tapis débarrassé des taches visibles, des résidus organiques et des odeurs persistantes, avec des couleurs ravivées.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute action, nous identifions le <strong>type de tissu</strong> (coton, synthétique, velours) et la nature des taches. Un test discret sur zone cachée valide la compatibilité du traitement. Les zones marquées reçoivent un détachage enzymatique adapté aux souillures organiques comme l'urine ou les résidus alimentaires.</p>\n\n<h3>Injection-extraction et séchage</h3>\n<p>Le traitement principal utilise la technique d'injection-extraction : l'eau et le produit nettoyant pénètrent les fibres, puis sont aspirés avec les salissures dissoutes. La pression et la température s'ajustent selon la fragilité du textile. L'extraction maximale réduit le temps de séchage. Nous vous indiquons le délai de remise en service selon l'épaisseur et la ventilation du logement.</p>",
      specificChallenges: [
        "Canapés tissu non déhoussables fréquents dans les appartements locatifs proches du RER C.",
        "<strong><strong>Taches d'animaux et odeurs persistantes</strong></strong> dans les foyers familiaux du quartier des Gondoles.",
        "<strong>Escaliers étroits</strong> dans le centre ancien compliquant l'accès avec le matériel d'extraction.",
        "Stationnement limité en centre-ville nécessitant une organisation logistique anticipée.",
        "Textiles variés selon les logements : velours, coton, synthétique demandant des réglages spécifiques.",
      ],
      faqAdditions: [
        {
          question:
            "Canapé en tissu non déhoussable dans un appartement locatif proche du RER : quelle méthode utilisez-vous ?",
          answer:
            "<p>Pour les canapés non déhoussables, nous procédons par <strong>injection-extraction</strong> directement sur le tissu en place. Cette technique permet de nettoyer en profondeur sans démonter l'assise. La pression et la température sont ajustées selon la fibre identifiée lors du diagnostic initial, qu'il s'agisse de coton, synthétique ou velours.</p>",
        },
        {
          question:
            "Pour réduire les acariens et allergènes dans un canapé familial du quartier des Gondoles, quel résultat peut-on attendre après nettoyage pro ?",
          answer:
            "<p>L'extraction mécanique déloge les acariens et leurs déjections logés dans les fibres. Le passage en profondeur aspire également les poussières fines et résidus organiques. Après séchage complet, le textile présente une charge allergénique nettement diminuée. Pour les foyers sensibles, nous recommandons un entretien régulier adapté à l'usage quotidien.</p>",
        },
        {
          question:
            "Accès compliqué et stationnement difficile en centre-ville : comment organisez-vous l'intervention ?",
          answer:
            "<p>Nous anticipons les contraintes d'accès dès la prise de rendez-vous. Pour les immeubles anciens avec escaliers étroits, le matériel est adapté en conséquence. Le créneau d'intervention tient compte des horaires de stationnement autorisé. Cette préparation évite les retards et garantit une intervention fluide malgré la configuration du quartier.</p>",
        },
        {
          question:
            "Taches et odeur d'urine animale sur un canapé : quel niveau d'élimination et séchage garantissez-vous ?",
          answer:
            "<p>Les <strong>souillures organiques</strong> comme l'urine nécessitent un pré-traitement enzymatique qui décompose les résidus en profondeur. L'extraction retire ensuite les substances dissoutes. L'odeur disparaît progressivement avec le séchage complet. Sur taches récentes, le résultat est généralement excellent. Sur marques anciennes, une amélioration significative reste visible même si une légère trace peut subsister.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts verts, et application d'un produit préventif pour prolonger la propreté.",
      whyUsBullets: [
        "Connaissance des terrasses exposées à l'humidité de la Seine et des configurations pavillonnaires des Gondoles.",
        "Maîtrise des traitements selon support : pression adaptée sur carrelage, méthode douce sur bois composite, produit anti-mousse ciblé.",
        "Déplacement et protection du mobilier inclus, gestion de l'évacuation d'eau sans impact sur les plantations ni le voisinage.",
      ],
      uniqueIntro:
        "<p>Les traces verdâtres s'installent progressivement sur les dalles et le carrelage des terrasses du <strong>Quartier des Gondoles</strong> comme sur celles des résidences récentes du Port. L'humidité liée à la proximité de la Seine favorise le développement de mousses et lichens qui rendent les surfaces glissantes et ternes. Chaque saison ajoute une couche supplémentaire de dépôts que le simple jet d'eau ne suffit plus à déloger.</p>\n<p class=\"mt-4\">Une terrasse encrassée perd son attrait et devient un espace qu'on évite plutôt qu'on investit. Sur les carrelages anciens ou les dalles gravillonnées des pavillons, les joints se noircissent ; sur le bois composite des constructions neuves, les fibres se ternissent. Retrouver une surface saine et agréable à l'œil change l'usage quotidien de cet espace extérieur.</p>\n<p class=\"mt-4\">Notre intervention s'adapte à chaque configuration : exposition plein sud ou zone ombragée, terrasse de plain-pied ou en attique. Un diagnostic préalable permet de choisir la méthode et le produit adaptés au support, avec protection systématique du mobilier et des plantations.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le <strong>mobilier extérieur</strong> et les jardinières sont déplacés ou bâchés. Les menuiseries, baies vitrées et seuils de porte reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les feuilles mortes, la terre accumulée et les débris organiques qui masquent l'état réel du support.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au matériau est appliqué : formule douce pour le bois composite, solution désincrustante pour le carrelage ou la pierre. Le brossage manuel ou mécanique décolle les mousses et lichens installés.</p>\n<p class=\"mt-4\">Sur les supports résistants, une haute pression contrôlée complète le travail en respectant les joints et les matériaux poreux.</p>\n\n<h3>Finition et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts.</p>\n<p class=\"mt-4\">Avant de partir, nous indiquons la fréquence d'entretien recommandée selon l'exposition et l'environnement de votre terrasse.</p>",
      specificChallenges: [
        "<strong>Mousses tenaces</strong> sur dalles exposées à l'humidité des bords de Seine.",
        "Carrelage ancien avec joints poreux nécessitant un traitement adapté.",
        "Terrasses en bois composite sensibles à la pression excessive.",
        "Mobilier de jardin et jardinières à protéger ou déplacer avant intervention.",
        "Évacuation d'eau à gérer sur terrasses de plain-pied ou en attique.",
      ],
      faqAdditions: [
        {
          question:
            "Ma terrasse proche de la Seine est couverte de mousse verte : quel traitement permet d'éviter que ça revienne chaque année ?",
          answer:
            "<p>Après le nettoyage en profondeur, nous appliquons un <strong>produit anti-mousse préventif</strong> qui freine la réapparition des dépôts verts. L'efficacité dépend de l'exposition et de l'humidité ambiante. Sur les terrasses proches de la Seine, un entretien annuel reste conseillé pour maintenir le résultat dans la durée.</p>",
        },
        {
          question:
            "Sur les dalles carrelées d'un pavillon aux Gondoles, quel produit utilisez-vous sans risquer d'abîmer le carrelage ?",
          answer:
            "<p>Nous sélectionnons un désincrustant adapté au type de carrelage : formule neutre sur les surfaces émaillées, produit légèrement acide sur les dalles minérales résistantes. Le brossage mécanique complète l'action chimique. Les joints sont traités avec précaution pour éviter toute dégradation.</p>",
        },
        {
          question:
            "Faut-il utiliser la haute pression sur une terrasse en bois composite ou existe-t-il une méthode plus douce ?",
          answer:
            "<p><strong>Le bois composite</strong> supporte mal la haute pression qui peut altérer les fibres et créer des zones rugueuses. Nous privilégions un nettoyage basse pression associé à un produit adapté. Cette méthode préserve l'aspect du matériau tout en éliminant efficacement les salissures et les mousses superficielles.</p>",
        },
        {
          question:
            "Dois-je enlever moi-même le mobilier et les plantes avant votre passage ou vous en chargez-vous ?",
          answer:
            "<p>Nous prenons en charge le déplacement du mobilier léger et la protection des jardinières. Si des éléments lourds ou fragiles nécessitent une attention particulière, nous vous prévenons en amont. L'objectif est de vous libérer de cette contrainte tout en protégeant vos équipements pendant l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre appartement ou maison à Choisy-le-Roi, avec traitement de chaque pièce et finitions soignées pour une restitution ou une entrée dans les lieux sans mauvaise surprise.",
      whyUsBullets: [
        "Connaissance des typologies locales : appartements neufs du Port, pavillons des Gondoles, logements anciens du centre.",
        "Polyvalence sur les surfaces : parquet, carrelage, lino, faïence, traitement adapté à chaque revêtement.",
        "Coordination avec agences et propriétaires pour respecter les délais d'état des lieux ou de livraison.",
      ],
      uniqueIntro:
        "<p>Après plusieurs mois de location ou à la fin d'un chantier de rénovation, un logement accumule des traces que le ménage courant ne suffit pas à effacer. Autour du tramway T9 et de la gare RER C, la rotation locative génère des besoins réguliers de remise en état avant ou après état des lieux. Les <strong>résidus de peinture</strong>, les joints de salle de bain ternis ou les sols encrassés deviennent alors des points de friction entre locataires, propriétaires et agences.</p>\n<p class=\"mt-4\">Dans les programmes récents du Quartier du Port comme dans les maisons des Gondoles, les attentes diffèrent selon le type de bien. Un T2 livré neuf nécessite un dépoussiérage minutieux des plinthes et interrupteurs, tandis qu'une maison ancienne demande un traitement adapté du parquet ou du carrelage d'époque. Une intervention structurée évite les reprises et accélère la remise des clés.</p>\n<p class=\"mt-4\">Nous organisons chaque prestation en fonction du calendrier imposé par l'agence ou le propriétaire, avec un diagnostic préalable pour identifier les points critiques et adapter le matériel aux surfaces présentes.</p>",
      uniqueDeepDive:
        "<h3>Un logement prêt à être restitué ou occupé</h3>\n<p>L'objectif est de rendre chaque pièce dans un état conforme aux exigences d'un état des lieux ou d'une première occupation. Sols propres, sanitaires détartrés, vitres intérieures sans traces, placards vidés et nettoyés.</p>\n\n<h3>Diagnostic et traitement par zone</h3>\n<p>Nous commençons par un tour du logement pour repérer les <strong>résidus de chantier</strong>, les taches incrustées ou les zones oubliées. La cuisine et la salle de bain reçoivent un traitement spécifique : dégraissage des plans de travail, détartrage de la robinetterie, nettoyage des joints. Les pièces de vie sont dépoussiérées du plafond aux plinthes avant le lavage des sols.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Interrupteurs, poignées de portes, radiateurs et intérieurs de placards sont passés en revue. Un contrôle final permet de vérifier l'absence de traces résiduelles. Le logement est ensuite aéré pour une remise en service rapide selon le planning convenu avec le donneur d'ordre.</p>",
      specificChallenges: [
        "Résidus de chantier dans les appartements neufs du Quartier du Port : <strong><strong>colle, enduit, poussière de plâtre</strong></strong>.",
        "Rotation locative soutenue près du RER C et du T9 : <strong>délais serrés</strong> pour les états des lieux.",
        "Accès parfois contraints dans le centre ancien : escaliers étroits, absence d'ascenseur.",
        "Stationnement difficile à proximité de la gare : organisation logistique à anticiper.",
        "Diversité des sols selon les quartiers : parquet dans les maisons, carrelage ou lino dans le collectif.",
      ],
      faqAdditions: [
        {
          question:
            "Nettoyage après chantier sur appartement neuf du Port : quelles tâches spécifiques (peinture, colle) traitez-vous ?",
          answer:
            "<p>Nous retirons les résidus de peinture sur les encadrements, les <strong>traces de colle</strong> sur les sols et la poussière de plâtre accumulée dans les placards et sur les plinthes. Les vitres intérieures et les sanitaires sont également nettoyés pour une livraison conforme aux attentes du promoteur ou du propriétaire.</p>",
        },
        {
          question:
            "Pour un nettoyage avant état des lieux proche du T9, comment coordonnez-vous l'intervention avec l'agence et le propriétaire ?",
          answer:
            "<p>Nous calons la date et l'heure directement avec l'agence ou le gestionnaire, en tenant compte du <strong>créneau de l'état des lieux</strong>. Les clés peuvent être récupérées en agence ou auprès du gardien. Un compte rendu est transmis si nécessaire pour confirmer la réalisation de la prestation.</p>",
        },
        {
          question:
            "Quel niveau de propreté (détail) garantissez-vous pour une remise en location dans un appartement près du RER C ?",
          answer:
            "<p>Nous visons un logement prêt à être occupé : sols lavés, sanitaires détartrés, cuisine dégraissée, vitres intérieures propres, placards vidés et essuyés. Le niveau de finition correspond aux standards attendus lors d'un état des lieux d'entrée, sans traces ni résidus visibles.</p>",
        },
        {
          question:
            "Appartement au troisième étage sans ascenseur dans le centre : quelles options logistiques proposez-vous ?",
          answer:
            "<p>Nous adaptons le matériel transporté pour limiter les allers-retours. L'équipe monte l'essentiel en une fois et organise l'intervention de manière à ne pas bloquer les parties communes. Le stationnement est anticipé pour éviter les contraintes liées aux rues étroites du centre ancien.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
