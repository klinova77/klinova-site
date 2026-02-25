import type { City } from "~/types/geo";

const city: City = {
  name: "Orly",
  slug: "orly",
  postalCodes: ["94310"],

  department: {
    name: "val-de-marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Orly pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux contraintes des grands ensembles comme aux pavillons de la Cité Jardins.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro:
    "<p>Ville aéroportuaire aux quartiers pavillonnaires historiques, Orly concentre des <strong>besoins variés en propreté</strong> : halls d'immeubles collectifs, parkings de résidences, balcons exposés aux retombées atmosphériques. Klinova structure ses interventions pour répondre à cette diversité de bâti.</p>\n<p class=\"mt-4\">Notre équipe coordonne les prestations avec les syndics, gestionnaires et particuliers. Chaque intervention fait l'objet d'un planning adapté aux accès et aux horaires sensibles, avec un suivi transmis sur demande.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Prise en compte des contraintes d'accès spécifiques aux résidences fermées et aux quartiers pavillonnaires, avec adaptation des créneaux horaires.</li>\n  <li><strong>Matériel adapté au terrain :</strong> Équipements dimensionnés selon la configuration des lieux — parkings souterrains étroits, balcons en étage, halls traversants.</li>\n  <li><strong>Suivi et reporting :</strong> Compte-rendu d'intervention disponible pour les gestionnaires et syndics qui souhaitent un historique des prestations réalisées.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls traversants</strong> dans les grands ensembles : salissures rapportées par les flux quotidiens.",
    "Parkings souterrains anciens avec <strong>rampes étroites</strong> et ventilation limitée.",
    "Balcons exposés aux <strong>retombées atmosphériques</strong> liées au trafic routier et aérien.",
    "Résidences fermées nécessitant une <strong>coordination préalable</strong> avec gardiens ou syndics.",
    "Quartiers pavillonnaires avec <strong>accès véhicule restreint</strong> dans les voies étroites.",
  ],

  // Texte brut uniquement
  districts: [
    "Le Vieil Orly",
    "Les Saules",
    "Les Navigateurs",
    "Les Aviateurs",
    "Cité Jardins",
    "La Pierre-au-Prêtre",
    "Quartier Calmette",
  ],
  nearbyCities: [
        "thiais",
        "choisy-le-roi",
        "chevilly-larue",
        "vitry-sur-seine",
        "creteil",
        "alfortville",
        "villejuif",
        "maisons-alfort",
        "cachan",
        "antony"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Orly",
    "Gare Orly Ville",
    "Parc Méliès",
    "Zone Senia",
    "Marché du Vieil Orly",
    "Centre Culturel Aragon-Triolet",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les quartiers où le stationnement est difficile ?",
      answer:
        "<p>Nous repérons en amont les <strong>zones de stationnement autorisées</strong> et les créneaux les moins contraints. Dans le Vieil Orly ou près de la gare, nous privilégions les interventions tôt le matin ou en milieu de journée pour éviter les pics de circulation et faciliter l'accès au matériel.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir dans des résidences avec digicode et gardien ?",
      answer:
        "<p>Oui, nous travaillons régulièrement avec des <strong>résidences sécurisées</strong>. Avant l'intervention, nous récupérons les codes d'accès ou badges nécessaires auprès du syndic ou du gardien. Le créneau est confirmé pour garantir l'ouverture des accès le jour prévu.</p>",
    },
    {
      question: "Quel délai pour une première intervention à Orly ?",
      answer:
        "<p>En général, nous proposons un <strong>premier passage sous 5 à 7 jours ouvrés</strong> après validation du devis. Pour les demandes urgentes — dégradation importante ou état des lieux imminent — nous étudions la possibilité d'un créneau anticipé selon la disponibilité de l'équipe.</p>",
    },
    {
      question:
        "Travaillez-vous avec les bailleurs sociaux présents sur la commune ?",
      answer:
        "<p>Nous intervenons pour des <strong>copropriétés et résidences gérées par différents bailleurs</strong>. Nos méthodes s'adaptent aux cahiers des charges spécifiques : horaires décalés, balisage des zones traitées, reporting post-intervention si demandé par le gestionnaire.</p>",
    },
  ],

  testimonial: {
    // testimonial.text : HTML autorisé si tu l'actives dans ton formatteur (sinon garder texte brut)
    text: "Ville aéroportuaire aux quartiers pavillonnaires historiques (Cité Jardins), desservie par le RER C et le Tram T9.",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template doit rester avec services: [].
  // => Le FORMAT ONLY injecte uniquement les services présents dans l’entrée (bundle/plan/servicesRequested).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide selon les contraintes du site.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et de stationnement sur le secteur Senia et ses abords logistiques.",
        "Matériel d'injection-extraction adapté aux dalles plombantes comme aux velours épais des parties communes.",
        "Interventions planifiées en horaires décalés pour limiter la gêne dans les bureaux ou établissements hôteliers.",
      ],
      uniqueIntro:
        "<p>Dans les locaux de la <strong>Zone Senia</strong>, les moquettes des bureaux et espaces de circulation accumulent rapidement poussières fines et traces de boue. Le trafic logistique environnant ramène des particules grasses qui s'incrustent dans les fibres, ternissant l'aspect général des sols textiles en quelques semaines seulement.</p>\n<p class=\"mt-4\">Sur les <strong>dalles plombantes</strong> fréquentes dans les open spaces ou les velours ras des halls d'hôtels proches de l'aéroport, ces dépôts créent des zones grisâtres aux passages intensifs. L'image professionnelle s'en trouve affectée, et les occupants signalent parfois une sensation de sol \"collant\" ou poussiéreux malgré l'aspiration régulière.</p>\n<p class=\"mt-4\">La rotation élevée dans les hôtels et le flux constant de véhicules sur le secteur génèrent un encrassement récurrent. Une intervention structurée permet de traiter chaque type de revêtement selon sa nature, avec un diagnostic préalable des zones de trafic et des taches spécifiques à cibler.</p>",
      uniqueDeepDive:
        "<h3>Zones de passage intensif</h3>\n<p>Les couloirs, entrées et espaces devant ascenseurs concentrent l'essentiel des salissures. Le diagnostic identifie le type de fibre — bouclée, velours ou dalle plombante — pour adapter la <strong>pression d'injection</strong>. Les protections sont posées sur les plinthes et bas de murs avant traitement.</p>\n\n<h3>Surfaces de travail et espaces ouverts</h3>\n<p>Les open spaces et salles de réunion reçoivent un traitement par injection-extraction sur l'ensemble de la surface. Les taches localisées — café, encre, traces grasses — font l'objet d'un <strong>détachage ciblé</strong> avant le passage général. Plusieurs passes sont effectuées sur les zones les plus sollicitées.</p>\n\n<h3>Séchage et remise en circulation</h3>\n<p>L'extraction maximale de l'eau limite le temps d'humidité résiduelle. Selon l'épaisseur du revêtement et la ventilation du local, le séchage complet intervient sous 4 à 8 heures. Un balisage temporaire permet de maintenir l'activité sur les zones déjà sèches pendant la fin de l'intervention.</p>",
      specificChallenges: [
        "<strong>Boue et poussières grasses</strong> ramenées par le trafic camions de la Zone Senia.",
        "Dalles plombantes en bureaux nécessitant une extraction puissante sans décollement.",
        "Moquettes velours ras des hôtels à traiter <strong>entre deux rotations de chambres</strong>.",
        "Halls de copropriétés proches de la gare Orly Ville <strong>avec passages fréquents</strong>.",
        "Séchage à maîtriser pour reprise rapide des activités professionnelles.",
      ],
      faqAdditions: [
        {
          question:
            "Les escaliers étroits des immeubles proches de la Zone Senia empêchent-ils la montée d'une shampouineuse professionnelle ?",
          answer:
            "<p>Nos équipements sont dimensionnés pour passer dans les cages d'escalier standard des immeubles du secteur. Pour les accès particulièrement contraints, nous utilisons des machines compactes avec flexibles allongés. Le diagnostic préalable permet d'anticiper ces configurations et d'adapter le matériel mobilisé.</p>",
        },
        {
          question:
            "Quelle méthode recommandez-vous pour des dalles plombantes en bureaux de la Zone Senia : injection-extraction ou shampouinage ?",
          answer:
            "<p>L'injection-extraction reste la méthode de référence pour les dalles plombantes. Elle permet une pénétration contrôlée de la solution nettoyante et une aspiration immédiate, sans risque de décollement. Le shampouinage convient davantage aux moquettes collées en plein, mais laisse plus de résidus dans les fibres denses.</p>",
        },
        {
          question:
            "Comment traitez-vous des taches anciennes et incrustées sur moquette de parties communes proches de la gare Orly Ville ?",
          answer:
            "<p>Les taches anciennes font l'objet d'un <strong>pré-traitement</strong> avec un détachant adapté à leur nature — tanin, graisse ou protéine. Après un temps de pose, l'injection-extraction déloge les résidus en profondeur. Certaines marques très anciennes peuvent s'atténuer sans disparaître totalement selon l'état de la fibre.</p>",
        },
        {
          question:
            "Après un nettoyage en hôtel proche de l'aéroport, quel temps de séchage faut-il prévoir avant réutilisation ?",
          answer:
            "<p>Sur un velours ras bien ventilé, le <strong>séchage complet</strong> intervient généralement sous 4 à 6 heures. Pour les moquettes plus épaisses ou les pièces peu aérées, comptez jusqu'à 8 heures. Nous pouvons intervenir en fin de journée pour une remise en service dès le lendemain matin.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et gestion stricte des eaux usées, rotation des véhicules coordonnée avec le syndic pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains des grands ensembles d'Orly, accès coordonnés avec les gardiens sur place.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées, adaptées au béton brut comme à l'enrobé.",
        "Rotation véhicules planifiée avec le syndic, balisage visible, intervention possible en horaires décalés.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur le béton des parkings souterrains du <strong>quartier Les Navigateurs</strong>. Suie, graisse de véhicules, poussières fines : ces dépôts se fixent sur les rampes d'accès et les allées de circulation. Dans les grands ensembles, le trafic quotidien accélère l'encrassement, et les rigoles d'évacuation finissent par se boucher si rien n'est fait.</p>\n<p class=\"mt-4\">Un sol de parking propre change la perception de la résidence. Les copropriétaires constatent moins de plaintes, les gestionnaires disposent d'un état des lieux visuel satisfaisant. Sur les <strong>revêtements béton brut ou enrobé</strong>, le dégraissage régulier évite que les taches d'huile ne s'incrustent définitivement dans la matière poreuse.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en coordination avec le syndic : balisage des zones, rotation des véhicules par secteur, <strong>horaires adaptés hors pics de départs</strong> vers l'aéroport ou les transports. Le compte-rendu photographique permet de suivre l'évolution entre deux passages.</p>",
      uniqueDeepDive:
        "<h3>Sol dégraissé et rampes antidérapantes</h3>\n<p>Le résultat attendu : un béton débarrassé des dépôts gras, des rampes d'accès sécurisées, des rigoles fonctionnelles. Pour y parvenir, nous commençons par un diagnostic du revêtement et de l'état des évacuations.</p>\n<p class=\"mt-4\">Le balayage préalable retire les débris solides avant le passage de l'autolaveuse.</p>\n\n<h3>Traitement mécanisé adapté au support</h3>\n<p>L'autolaveuse associée à un dégraissant professionnel traite les allées de circulation. Sur les zones critiques — pieds de murs, angles morts, rampes inclinées — nous intervenons à la haute pression avec contrôle du débit.</p>\n<p class=\"mt-4\">Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage ni stagnation.</p>\n\n<h3>Coordination et remise en service</h3>\n<p>Le balisage sécurise chaque zone pendant le chantier. La rotation des véhicules s'effectue par secteur, en lien avec le gardien ou le syndic. Une fois le sol sec, nous transmettons un compte-rendu avec recommandations de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Rampes étroites dans les sous-sols anciens des Navigateurs : passage autolaveuse ajusté.",
        "Dépôts de suie aéroportuaire sur les sols proches des axes de circulation.",
        "Rigoles d'évacuation souvent obstruées par graisse et débris accumulés.",
        "Coordination avec gardiens pour rotation des véhicules sans bloquer les résidents.",
        "Horaires d'intervention calés hors pics de départs matinaux vers l'aéroport.",
      ],
      faqAdditions: [
        {
          question:
            "À quelle fréquence faut-il nettoyer les parkings souterrains des grands ensembles comme Les Navigateurs ?",
          answer:
            "<p>Le trafic quotidien et les dépôts de suie liés à la proximité de l'aéroport accélèrent l'encrassement. Un passage trimestriel maintient un sol correct. Pour les copropriétés à fort trafic, un rythme bimestriel évite l'accumulation de graisse sur les rampes et dans les rigoles.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes sur les rampes béton des parkings d'Orly ?",
          answer:
            "<p>Nous appliquons un dégraissant alcalin sur les zones imprégnées, suivi d'un brossage mécanique. La haute pression déloge les résidus incrustés. Sur béton brut poreux, plusieurs passes peuvent être nécessaires. Le résultat dépend de l'ancienneté de la tache, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage lors d'un nettoyage haute pression dans un parking proche de la gare Orly Ville ?",
          answer:
            "<p>Les eaux chargées sont dirigées vers les évacuations existantes du parking. Nous vérifions au préalable que les regards ne sont pas obstrués. Aucun rejet n'est effectué vers la voirie ou les espaces verts. En cas de doute sur le réseau, nous adaptons le volume d'eau utilisé.</p>",
        },
        {
          question:
            "Quels horaires privilégiez-vous pour intervenir dans un parking géré près de l'aéroport sans gêner les usagers ?",
          answer:
            "<p>Les départs vers l'aéroport se concentrent tôt le matin. Nous intervenons plutôt en milieu de matinée ou en début d'après-midi, quand le parking est moins sollicité. Les horaires sont validés avec le syndic ou le gestionnaire pour limiter la gêne aux résidents et aux professionnels.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Orly, avec traitement adapté au support, protection des voisins du dessous et séchage contrôlé pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux retombées routières le long des axes structurants d'Orly.",
        "Pression ajustée selon le support — béton, carrelage ou dalles — pour préserver joints et revêtement.",
        "Gestion rigoureuse des écoulements avec protection des balcons voisins et coordination horaire si nécessaire.",
      ],
      uniqueIntro:
        "<p>Le long de l'Avenue Adrien Raynal et dans les secteurs exposés aux retombées routières, les balcons accumulent rapidement un film gras mêlé de poussières noires. Ce dépôt s'incruste dans les joints, ternit le carrelage et rend la surface glissante après la pluie. Difficile alors de profiter de cet espace extérieur sans avoir l'impression de marcher sur une couche poisseuse.</p>\n<p class=\"mt-4\">Sur les immeubles des années 70-80 comme dans les grands ensembles, le béton brut ou le carrelage vieillissant réagit mal aux tentatives de nettoyage au jet d'eau classique. L'eau ruisselle chez les voisins, les taches reviennent en quelques semaines, et les joints finissent par se dégrader. Un rafraîchissement adapté redonne une surface saine, agréable à l'œil et praticable pieds nus dès les beaux jours.</p>\n<p class=\"mt-4\">La proximité des axes A106 et N7 impose un protocole qui tient compte de cette pollution grasse récurrente. Nous adaptons le traitement au support identifié lors du diagnostic, avec une gestion stricte des écoulements pour éviter tout désagrément aux étages inférieurs.</p>",
      uniqueDeepDive:
        "<h3>Dépôts gras et poussières accumulées</h3>\n<p>Le film noirâtre déposé par la circulation nécessite d'abord un retrait des gros débris — feuilles, terre, résidus divers. Un produit dégraissant adapté au support est appliqué pour décoller les particules incrustées sans attaquer les joints.</p>\n<p class=\"mt-4\">Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries reçoivent une protection pour éviter les projections.</p>\n\n<h3>Brossage et rinçage maîtrisé</h3>\n<p>Le brossage manuel ou mécanique déloge les salissures tenaces sur le carrelage, le béton ou les dalles. Le rinçage s'effectue à pression contrôlée, suffisante pour évacuer les résidus sans fragiliser les joints ni créer de coulures chez les voisins du dessous.</p>\n<p class=\"mt-4\">Le garde-corps et les vitrages sont traités dans la foulée.</p>\n\n<h3>Séchage et conseils d'entretien</h3>\n<p>Une fois le balcon rincé, nous vérifions l'absence de traces résiduelles. Le temps de séchage varie selon l'exposition et la saison. Nous vous indiquons la fréquence de nettoyage recommandée compte tenu de votre environnement direct.</p>",
      specificChallenges: [
        "Dépôts gras récurrents liés à la proximité des axes A106 et N7.",
        "Joints fragilisés sur les balcons béton des immeubles années 70-80.",
        "Risque de coulures chez les voisins du dessous dans les grands ensembles.",
        "Accès parfois contraint par digicode ou absence d'ascenseur dans le Vieil Orly.",
        "Carrelage glissant après la pluie si le film gras n'est pas correctement éliminé.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle méthode utilisez-vous pour un balcon en béton sur l'Avenue Adrien Raynal sans abîmer les joints ?",
          answer:
            "<p>Nous appliquons un dégraissant adapté au béton, suivi d'un brossage manuel ciblé sur les zones encrassées. Le rinçage s'effectue à pression modérée pour évacuer les résidus sans creuser les joints. Cette approche convient aux balcons exposés aux retombées routières fréquentes dans ce secteur.</p>",
        },
        {
          question:
            "Comment gérez-vous l'eau et les coulures lors du nettoyage d'un balcon en étage dans le Vieil Orly ?",
          answer:
            "<p>Nous utilisons des quantités d'eau maîtrisées et orientons le rinçage vers les évacuations existantes. Si nécessaire, nous installons des protections temporaires pour canaliser les écoulements. Les voisins du dessous sont prévenus en amont lorsque l'intervention le justifie.</p>",
        },
        {
          question:
            "Nettoyez-vous différemment une loggia fermée et un balcon ouvert dans les immeubles des années 70 à Orly ?",
          answer:
            "<p>Une loggia fermée retient davantage l'humidité et les odeurs, ce qui impose une ventilation pendant le séchage. Le balcon ouvert sèche plus vite mais accumule plus de poussières. Nous adaptons le produit et le temps de pose selon cette configuration pour un résultat homogène.</p>",
        },
        {
          question:
            "Après nettoyage d'un balcon exposé aux retombées routières, combien de temps avant de pouvoir l'utiliser ?",
          answer:
            "<p>Le séchage complet prend généralement quelques heures selon l'exposition et la météo. En été, un balcon orienté sud peut être praticable en fin de journée. Nous vous indiquons le délai estimé à la fin de l'intervention pour que vous puissiez planifier votre usage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque à Orly : proximité du marché, arbres matures aux Saules, immeubles anciens du centre.",
        "Protocole complet avec EPI adaptés, confinement systématique et désinfection virucide après chaque intervention.",
        "Organisation pensée pour limiter la gêne : bâchage soigné, évacuation des déchets en sacs étanches, coordination avec le voisinage si besoin.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, le garde-corps et parfois les vitres. Près du <strong>Marché du Vieil Orly</strong>, les restes alimentaires attirent les pigeons qui colonisent rapidement les balcons des immeubles environnants. L'odeur devient tenace, le linge étendu se salit, et l'espace extérieur perd toute utilité.</p>\n<p class=\"mt-4\">Les <strong>corniches et derniers étages d'immeubles anciens du Vieil Orly</strong> présentent des accumulations particulièrement difficiles à traiter. Les dépôts acides attaquent le béton, la peinture s'écaille, et les supports métalliques commencent à se corroder. Sans traitement adapté, les dégâts deviennent irréversibles et les risques sanitaires persistent.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable et sain. Le protocole inclut le confinement de la zone, le ramassage sécurisé, la <strong>désinfection systématique</strong> et l'évacuation des déchets contaminés dans des sacs étanches. Des solutions anti-retour peuvent compléter le traitement pour limiter les réinfestations.</p>",
      uniqueDeepDive:
        '<h3>Balcon assaini et désinfecté</h3>\n<p>L\'objectif est de restituer un espace propre, débarrassé des agents pathogènes et des odeurs. La désinfection virucide élimine les risques liés aux bactéries et champignons présents dans les fientes sèches.</p>\n<p class="mt-4">Le rinçage final et le temps d\'aération permettent une réutilisation du balcon sous 24 à 48 heures selon les conditions.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>L\'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour protéger l\'intérieur du logement et éviter les projections vers les voisins.</p>\n<p class="mt-4">Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées. La collecte s\'effectue dans des sacs étanches, conditionnés pour évacuation.</p>\n\n<h3>Traitement des supports et prévention</h3>\n<p>Sol, garde-corps, vitrages et murs mitoyens sont nettoyés puis traités au produit désinfectant homologué. Le temps de contact est respecté avant rinçage.</p>\n<p class="mt-4">Si nécessaire, des pics anti-pigeons ou un gel répulsif peuvent être posés sur les rebords et corniches pour limiter le retour des volatiles.</p>',
      specificChallenges: [
        "Accumulations importantes sur les corniches du Vieil Orly, difficiles d'accès sans équipement adapté.",
        "Risque sanitaire élevé : les fientes sèches libèrent des spores dangereuses si elles ne sont pas humidifiées avant manipulation.",
        "Dégradation accélérée des supports béton et métal par l'acidité des déjections non traitées.",
        "Retour rapide des pigeons sans pose de dispositifs dissuasifs après le nettoyage.",
        "Coordination nécessaire avec les voisins du dessous pour éviter les projections d'eau lors du rinçage.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes accumulées sur ma corniche près du Marché du Vieil Orly représentent-elles un danger sanitaire ?",
          answer:
            "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent provoquer des infections respiratoires. Près du marché, l'abondance de nourriture attire les volatiles et accélère les dépôts. Une intervention rapide avec désinfection limite les risques pour les occupants du logement.</p>",
        },
        {
          question:
            "Quel type de désinfection appliquez-vous après le retrait des fientes sur un balcon à Orly ?",
          answer:
            "<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué sur l'ensemble des surfaces nettoyées. Le temps de contact est respecté avant rinçage pour garantir l'élimination des agents pathogènes. Cette étape est systématique, quel que soit le volume de fientes traité.</p>",
        },
        {
          question:
            "Comment évacuez-vous les déchets contaminés après un assainissement de balcon en immeuble collectif ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches fermés hermétiquement. Nous les évacuons avec notre matériel pour éviter tout contact avec les parties communes. Le bâchage préalable protège également le logement et les balcons voisins pendant l'intervention.</p>",
        },
        {
          question:
            "À quelle fréquence conseillez-vous un traitement pour les balcons exposés aux arbres matures du quartier Les Saules ?",
          answer:
            "<p>Les arbres matures offrent des perchoirs aux pigeons, ce qui augmente les dépôts sur les balcons proches. Sans dispositif dissuasif, un nettoyage tous les six mois peut être nécessaire. La pose de pics ou filets après le premier traitement réduit significativement cette fréquence.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos textiles d'ameublement, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un canapé, tapis ou matelas propre et sain.",
      whyUsBullets: [
        "Connaissance des quartiers pavillonnaires d'Orly et des contraintes d'accès propres aux résidences familiales.",
        "Détachage adapté à chaque fibre avec extraction puissante pour un séchage accéléré.",
        "Organisation anticipée du stationnement et coordination avec les occupants pour une intervention fluide.",
      ],
      uniqueIntro:
        "<p>Comment préserver la propreté d'un canapé quand les repas en famille, les animaux de compagnie et les enfants se succèdent au quotidien ? Dans les pavillons autour du <strong>Parc de la Cloche</strong>, les textiles d'ameublement accumulent taches alimentaires, poils et odeurs sans qu'un simple aspirateur suffise à les éliminer. Le tissu s'imprègne, les fibres retiennent les résidus, et l'aspect général se dégrade progressivement.</p>\n<p class=\"mt-4\">Retrouver un canapé frais et un tapis aux couleurs ravivées change le confort du séjour. Les textiles domestiques variés — canapés non déhoussables, tapis laine ou synthétique — nécessitent une approche adaptée à chaque fibre pour éviter les auréoles ou la décoloration. Un entretien régulier limite aussi la présence d'acariens, particulièrement appréciable pour les foyers avec enfants en bas âge.</p>\n<p class=\"mt-4\">Nous intervenons en tenant compte des contraintes logistiques locales : stationnement difficile dans le Vieil Orly, ascenseurs parfois hors service dans les grands ensembles. Le diagnostic préalable permet d'anticiper ces points et d'organiser une intervention efficace sans mauvaise surprise.</p>",
      uniqueDeepDive:
        "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est de restituer un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus incrustés. Pour y parvenir, nous identifions d'abord la nature du tissu — coton, laine, synthétique, velours — et le type de taches présentes : café, vin, urine, graisse ou encre.</p>\n\n<h3>Traitement ciblé selon les fibres</h3>\n<p>Un pré-traitement enzymatique cible les taches organiques tenaces. Sur les textiles fragiles, un test discret sur zone cachée valide la compatibilité. L'injection-extraction adapte pression et température au support pour déloger les salissures sans abîmer les fibres ni provoquer d'auréoles.</p>\n\n<h3>Extraction et remise en service</h3>\n<p>L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et la ventilation de la pièce, comptez quelques heures avant de réutiliser le mobilier. Nous vous indiquons les consignes d'aération et la fréquence d'entretien recommandée pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Taches alimentaires fréquentes dans les foyers familiaux des pavillons autour du Parc de la Cloche.",
        "Textiles non déhoussables nécessitant une injection-extraction sur place sans démontage.",
        "Stationnement camionnette compliqué dans le Vieil Orly — anticipation indispensable.",
        "Ascenseurs parfois hors service dans les grands ensembles Navigateurs ou Aviateurs.",
        "Présence d'animaux de compagnie générant odeurs et poils incrustés dans les fibres.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle méthode utilisez-vous pour un canapé tissu non déhoussable dans un pavillon près du Parc de la Cloche ?",
          answer:
            "<p>Nous procédons par injection-extraction directement sur place. Après identification du tissu et test sur zone cachée si nécessaire, le nettoyage s'effectue sans démonter le canapé. La pression et la température sont ajustées pour préserver les fibres tout en éliminant les salissures incrustées.</p>",
        },
        {
          question:
            "Pouvez-vous traiter des taches anciennes de café ou de vin sur un tapis dans un pavillon de la Cité Jardins ?",
          answer:
            "<p>Les taches anciennes nécessitent un pré-traitement enzymatique ciblé avant l'extraction. L'efficacité dépend de l'ancienneté et du type de fibre, mais nous obtenons généralement une nette amélioration. Si la tache a altéré la couleur du textile, nous vous le signalons dès le diagnostic.</p>",
        },
        {
          question:
            "Quel temps de séchage prévoir après un nettoyage de canapé pour un logement avec rotation fréquente ?",
          answer:
            "<p>Comptez entre deux et six heures selon l'épaisseur du textile et la ventilation de la pièce. Nous extrayons un maximum d'humidité pour accélérer le séchage. Une bonne aération après notre passage permet de réduire ce délai et de remettre le mobilier en service rapidement.</p>",
        },
        {
          question:
            "Comment organisez-vous une intervention si le stationnement est impossible dans le Vieil Orly ?",
          answer:
            "<p>Nous anticipons ce point dès la prise de rendez-vous. Selon la configuration, nous identifions une place à proximité ou convenons d'un créneau où le stationnement est plus accessible. Le matériel portable permet de rejoindre le logement à pied sur une courte distance si nécessaire.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts verts, pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires d'Orly, souvent exposées à l'humidité des parcs et aux retombées de pollution.",
        "Adaptation du traitement selon le support : pression contrôlée sur dalles, nettoyage doux sur bois composite.",
        "Protection systématique du mobilier et des plantes, gestion de l'évacuation d'eau vers les écoulements existants.",
      ],
      uniqueIntro:
        "<p>Les traces verdâtres et les dépôts noirs sont visibles sur de nombreuses terrasses du quartier <strong>Cité Jardins</strong>. Les dalles gravillonnées, fréquentes sur les pavillons de ce secteur, retiennent l'humidité et favorisent l'apparition de mousses tenaces. Chaque saison accentue le phénomène : la surface devient glissante, peu engageante, et l'espace perd son attrait.</p>\n<p class=\"mt-4\">Un nettoyage adapté redonne à la terrasse son aspect d'origine. Les supports varient selon l'époque du bâti — dalles gravillonnées, bois composite ou carrelage — et chacun nécessite une approche spécifique. Une intervention bien menée élimine les dépôts incrustés, traite les zones colonisées par les lichens, et permet de réutiliser l'espace sans crainte de glissade ou de taches sur le mobilier.</p>\n<p class=\"mt-4\">La proximité des axes routiers et de la zone aéroportuaire génère des retombées de pollution qui noircissent les surfaces exposées. Une intervention structurée prend en compte ces facteurs pour proposer un traitement complet, du diagnostic initial jusqu'aux conseils d'entretien saisonnier.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes — reçoivent une protection pour éviter les projections. Un balayage préalable élimine feuilles, terre et débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour le bois composite, désincrustant pour les dalles minérales. Le brossage — manuel ou mécanique selon la surface — déloge mousses et lichens. La haute pression intervient uniquement sur les matériaux qui la supportent, avec réglage contrôlé pour préserver les joints.</p>\n<p class=\"mt-4\">L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont protégées des projections.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les garde-corps et murets périphériques sont traités si nécessaire. Après séchage, un traitement anti-mousse préventif peut être appliqué pour ralentir la recolonisation. Des recommandations d'entretien saisonnier sont transmises pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "Dalles gravillonnées des pavillons Cité Jardins : porosité favorisant mousse et lichens.",
        "Retombées de pollution noire liées à la proximité de l'A106 et de la zone aéroportuaire.",
        "Accès terrasse parfois uniquement par l'intérieur de la maison : organisation du passage matériel.",
        "Bois composite sensible : pression et produits adaptés pour éviter les dégradations.",
        "Humidité persistante près du Parc de la Cloche : traitement anti-mousse préventif recommandé.",
      ],
      faqAdditions: [
        {
          question:
            "Quel traitement privilégiez-vous pour une terrasse en dalles gravillonnées dans le quartier Cité Jardins ?",
          answer:
            "<p>Les dalles gravillonnées nécessitent un désincrustant adapté aux surfaces poreuses, suivi d'un brossage mécanique. La haute pression est utilisée avec précaution pour ne pas déchausser les gravillons. Un traitement anti-mousse complète l'intervention sur ce type de support fréquent dans les pavillons d'Orly.</p>",
        },
        {
          question:
            "Comment éliminez-vous mousse et lichen sur une terrasse exposée à l'humidité proche d'un parc ?",
          answer:
            "<p>L'humidité favorise une colonisation rapide par les végétaux. Nous appliquons un produit biocide qui détruit mousses et lichens en profondeur, puis procédons au brossage et rinçage. Un traitement préventif limite la réapparition, particulièrement utile pour les terrasses situées près du Parc Méliès ou du Parc de la Cloche.</p>",
        },
        {
          question:
            "Faut-il privilégier haute pression ou nettoyage doux pour une terrasse bois composite à Orly ?",
          answer:
            "<p>Le bois composite supporte mal la haute pression qui peut délaminer la surface ou créer des rayures. Nous utilisons un nettoyage basse pression combiné à un produit spécifique bois composite. Cette approche préserve l'intégrité du matériau tout en éliminant efficacement les dépôts gras et les traces vertes.</p>",
        },
        {
          question:
            "Faut-il déplacer mobilier et plantes avant intervention pour un démoussage de terrasse en pavillon ?",
          answer:
            "<p>Nous prenons en charge le déplacement ou le bâchage du mobilier et des jardinières. Les plantes sensibles sont protégées des projections de produit et d'eau. Cette préparation fait partie de l'intervention et permet de traiter l'intégralité de la surface sans zone oubliée ni dégât collatéral.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, adaptée aux fins de chantier, états des lieux ou grands ménages ponctuels, avec un rendu prêt à habiter.",
      whyUsBullets: [
        "Connaissance des logements locatifs autour des gares RER et des pavillons de Cité Jardins.",
        "Polyvalence sur tous types de sols et de surfaces, du lino au parquet en passant par le carrelage ancien.",
        "Coordination possible avec agences, bailleurs ou artisans pour respecter les délais de remise des clés.",
      ],
      uniqueIntro:
        "<p>Comment rendre un appartement présentable en quelques jours quand les travaux viennent de s'achever ou qu'un locataire libère les lieux ? Autour de la <strong>Gare Les Saules</strong>, la rotation locative génère des demandes régulières : poussières de chantier sur les plinthes, traces de peinture au sol, résidus dans les placards. Les agences et bailleurs attendent un logement impeccable pour la remise des clés.</p>\n<p class=\"mt-4\">Un nettoyage structuré transforme un bien encombré de salissures en espace accueillant. Dans les <strong>T3 et T4</strong> fréquents à Orly, les sols en lino ou parquet retrouvent leur aspect d'origine. Les pièces d'eau, souvent négligées en fin de bail, redeviennent fonctionnelles. Pour les pavillons du quartier Cité Jardins, le travail inclut les surfaces vitrées et les finitions souvent oubliées.</p>\n<p class=\"mt-4\">Les <strong>demandes avant état des lieux</strong> et les fins de chantier représentent l'essentiel des interventions. Chaque situation nécessite un diagnostic préalable pour adapter le protocole aux contraintes du bien et aux attentes du donneur d'ordre.</p>",
      uniqueDeepDive:
        '<h3>Résidus de chantier et poussières fines</h3>\n<p>Les travaux laissent des dépôts sur toutes les surfaces : plafonds, murs, plinthes, intérieurs de placards. Le dépoussiérage commence par les points hauts pour éviter de recontaminer les zones déjà traitées.</p>\n<p class="mt-4">Les sols reçoivent ensuite une aspiration complète avant lavage adapté au revêtement.</p>\n\n<h3>Pièces d\'eau encrassées</h3>\n<p>Cuisine et salle de bain concentrent les traces tenaces : calcaire sur robinetterie, graisses sur crédence, joints noircis. Chaque surface reçoit un traitement ciblé selon sa nature.</p>\n<p class="mt-4">Les sanitaires et l\'électroménager intégré sont nettoyés intégralement pour une remise en service immédiate.</p>\n\n<h3>Finitions et contrôle qualité</h3>\n<p>Interrupteurs, poignées de portes, radiateurs, vitres intérieures : ces détails font la différence lors d\'un état des lieux. Une vérification pièce par pièce garantit l\'absence d\'oublis.</p>\n<p class="mt-4">Le logement est aéré avant restitution pour éliminer les odeurs résiduelles de produits ou de chantier.</p>',
      specificChallenges: [
        "Rotation locative élevée près des gares RER : délais serrés pour les états des lieux.",
        "Poussières de chantier persistantes dans les logements en rénovation à Pierre-au-Prêtre.",
        "Sols variés selon les quartiers : lino en logement social, parquet dans les pavillons anciens.",
        "Stationnement difficile dans le Vieil Orly les jours de marché.",
        "Coordination fréquente avec plusieurs intervenants sur les chantiers de réhabilitation.",
      ],
      faqAdditions: [
        {
          question:
            "Quel est le délai d'intervention pour un nettoyage avant état des lieux près de la Gare Les Saules ?",
          answer:
            "<p>Les demandes urgentes autour de la Gare Les Saules sont fréquentes en raison de la forte rotation locative. Nous pouvons intervenir sous 48 à 72 heures selon la surface du logement et la disponibilité des accès. Un échange préalable permet de caler le créneau avec l'agence ou le propriétaire.</p>",
        },
        {
          question:
            "Quel protocole appliquez-vous pour un nettoyage fin de chantier dans un appartement en rénovation à Orly ?",
          answer:
            "<p>Le protocole commence par l'évacuation des gravats légers et le dépoussiérage complet des surfaces hautes. Les traces de peinture, enduit ou colle sont traitées selon le revêtement. Sols, vitres intérieures et pièces d'eau sont ensuite nettoyés pour un rendu prêt à habiter.</p>",
        },
        {
          question:
            "Quel niveau de propreté garantissez-vous pour une remise clé en main demandée par une agence d'Orly ?",
          answer:
            "<p>Le logement est restitué dans un état permettant une entrée immédiate : sols propres, sanitaires désinfectés, placards vidés et essuyés, vitres intérieures nettoyées. Un contrôle pièce par pièce est effectué avant départ pour éviter tout retour de l'agence.</p>",
        },
        {
          question:
            "Comment coordonnez-vous l'intervention ménage avec les artisans lors d'une remise en état à Pierre-au-Prêtre ?",
          answer:
            "<p>Nous intervenons après la fin des travaux salissants, en accord avec le calendrier du chantier. Si des retouches sont encore prévues, nous adaptons notre passage pour éviter de repasser sur des zones recontaminées. Un contact direct avec le responsable de chantier facilite cette organisation.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
