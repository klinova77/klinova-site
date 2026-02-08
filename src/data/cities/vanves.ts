import type { City } from "~/types/geo";

const city: City = {
  name: "Vanves",
  slug: "vanves",
  postalCodes: ["92170"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Vanves pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une équipe habituée à la densité urbaine du secteur, des méthodes adaptées au bâti ancien comme aux résidences récentes du Plateau.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>Autour de la Gare Vanves-Malakoff et du Parc Frédéric Pic, Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de leurs locaux. Notre présence sur le secteur permet une réactivité adaptée aux contraintes d'une commune où <strong>chaque mètre carré compte</strong>.</p>\n\n<p>Nous assurons la propreté des halls, le décrassage des parkings, la remise en état des balcons et le nettoyage des mobiliers. Chaque intervention fait l'objet d'un suivi rigoureux, avec reporting disponible pour les gestionnaires qui le souhaitent.</p>\n\n<ul>\n  <li><strong>Coordination terrain :</strong> Prise de contact préalable avec gardiens ou gestionnaires pour caler les accès et limiter la gêne aux résidents.</li>\n  <li><strong>Matériel adapté au bâti dense :</strong> Équipements compacts pour escaliers étroits du centre ancien, autolaveuses pour parkings souterrains.</li>\n  <li><strong>Créneaux ajustés :</strong> Interventions tôt le matin ou en journée selon les contraintes de stationnement et de voisinage.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Densité extrême</strong> : stationnement quasi impossible en voirie, coordination indispensable.",
    "Immeubles anciens du Centre Saint-Rémy avec <strong>escaliers étroits</strong> et absence d'ascenseur.",
    "Parkings souterrains très sollicités, <strong>sols béton encrassés</strong> par le trafic quotidien.",
    "Balcons exposés à la <strong>pollution urbaine</strong> et aux fientes (proximité Parc Pic).",
    "Résidences du Plateau avec <strong>règlements de copropriété stricts</strong> sur les nuisances.",
    "Forte rotation locative nécessitant des <strong>remises en état rapides</strong> entre deux occupants.",
  ],

  // Texte brut uniquement
  districts: ["Centre Saint-Rémy", "Le Plateau", "Les Hauts-de-Vanves"],
  nearbyCities: [
        "issy-les-moulineaux",
        "chatillon",
        "montrouge",
        "bagneux",
        "arcueil",
        "clamart",
        "gentilly",
        "cachan",
        "villejuif",
        "ivry-sur-seine"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Vanves",
    "Gare de Vanves-Malakoff",
    "Parc Frédéric Pic",
    "Lycée Michelet",
    "Théâtre de Vanves",
    "Marché couvert de Vanves",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous le stationnement pour vos interventions à Vanves ?",
      answer: "<p>Le stationnement en voirie est saturé sur la commune. Nous privilégions les <strong>créneaux matinaux</strong> et sollicitons l'accès aux parkings souterrains quand c'est possible. Pour les interventions longues, nous organisons un relais véhicule afin de ne pas bloquer les places résidents.</p>",
    },
    {
      question: "Pouvez-vous intervenir dans les immeubles anciens du Centre Saint-Rémy ?",
      answer: "<p>Oui. Nos équipes sont équipées de <strong>matériel compact</strong> pour les cages d'escalier étroites sans ascenseur. Nous adaptons le volume d'eau et les méthodes de séchage pour éviter toute dégradation des sols anciens ou des parties communes sensibles.</p>",
    },
    {
      question: "Comment se passe la prise de rendez-vous avec le gardien ou le syndic ?",
      answer: "<p>Nous contactons systématiquement le <strong>référent désigné</strong> (gardien, gestionnaire ou syndic) avant chaque intervention. Cela permet de récupérer les badges, confirmer les accès et définir les zones prioritaires. Un compte-rendu peut être transmis après passage.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur Vanves ?",
      answer: "<p>Selon la nature de la demande et notre planning, nous pouvons proposer un <strong>passage sous 48 à 72 heures</strong>. Pour les situations nécessitant une réponse rapide (dégât, salissure importante), nous évaluons la faisabilité dès le premier échange téléphonique.</p>",
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
  // => Le template doit rester avec services: [].
  services: [
    // 1) moquettes
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec séchage maîtrisé pour permettre une reprise d'activité rapide dans vos locaux ou parties communes.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès dans les immeubles anciens et bureaux du secteur Lycée Michelet.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours épais.",
        "Interventions planifiées en dehors des heures de bureau ou en soirée selon vos impératifs.",
      ],
      uniqueIntro: "<p>Dans le secteur des bureaux proches du <strong>Lycée Michelet</strong>, les moquettes subissent un passage quotidien soutenu. Couloirs d'open spaces, salles de réunion, halls d'accueil : les fibres accumulent poussières fines, traces de semelles et résidus de boissons. Les dalles textiles grises ou anthracite masquent temporairement l'encrassement, mais la saturation finit par ternir l'ensemble et dégager une odeur de renfermé perceptible dès l'entrée.</p>\n\n<p>Dans les <strong>immeubles anciens et petits collectifs</strong> du centre-ville, les parties communes équipées de moquette présentent des problématiques similaires. Les fibres bouclées ou velours ras des paliers et escaliers retiennent les salissures apportées depuis la rue. Un entretien régulier par injection-extraction redonne de la tenue aux revêtements et améliore sensiblement l'image des espaces partagés.</p>\n\n<p>Pour les locaux professionnels comme pour les copropriétés, nous adaptons nos créneaux aux horaires de bureaux contraignants. Diagnostic préalable, protection des plinthes et mobilier, puis traitement méthodique zone par zone permettent d'obtenir un résultat homogène sans perturber l'activité.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intense</h3>\n<p>Les couloirs et axes de passage concentrent l'essentiel de l'encrassement. Nous commençons par une aspiration approfondie pour retirer les particules libres, puis appliquons un pré-détachant sur les traces marquées. L'injection-extraction s'effectue en <strong>passes croisées</strong> pour atteindre la base des fibres.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les surfaces sous bureaux et autour des tables accumulent moins de trafic mais davantage de taches ponctuelles. Nous traitons chaque zone en adaptant la <strong>pression et le débit</strong> selon l'épaisseur du revêtement. Les angles et plinthes sont protégés avant intervention.</p>\n\n<h3>Halls et paliers</h3>\n<p>Ces espaces de transition nécessitent un séchage rapide pour limiter la gêne. Après extraction maximale de l'humidité, nous ventilons si possible et indiquons un <strong>temps de non-piétinement</strong> adapté à la densité des fibres. Un conseil de fréquence d'entretien est remis en fin d'intervention.</p>",
      specificChallenges: [
        "Moquettes dalles en open space : <strong>passages répétés</strong> qui saturent les fibres en quelques mois.",
        "Escaliers étroits dans l'ancien : acheminement du matériel à adapter selon la configuration.",
        "Taches de café ou tanin <strong>incrustées depuis plusieurs semaines</strong> sur les zones de pause.",
        "Séchage à coordonner avec la reprise d'activité des salariés le lendemain matin.",
        "Parties communes de copropriétés : intervention à planifier hors heures de fort passage.",
      ],
      faqAdditions: [
        {
          question:
            "Comment faites-vous passer le matériel dans les escaliers étroits des immeubles du Centre Saint-Rémy ?",
          answer: "<p>Nous utilisons des équipements compacts et modulables. Les flexibles d'injection-extraction se déploient sur plusieurs mètres depuis un point d'ancrage au rez-de-chaussée ou sur le palier. Cette configuration évite de monter l'ensemble du matériel à chaque étage et limite <strong>l'encombrement dans les cages étroites</strong>.</p>",
        },
        {
          question:
            "Pour une moquette très encrassée dans un open space proche du Lycée Michelet, quelle méthode privilégiez-vous ?",
          answer: "<p>L'injection-extraction reste la technique la plus efficace sur les dalles textiles saturées. Elle permet de déloger les salissures en profondeur sans détremper le support. Pour les fibres fragiles ou les taches grasses anciennes, <strong>un pré-traitement ciblé</strong> précède le passage machine afin d'améliorer le résultat final.</p>",
        },
        {
          question:
            "Après un nettoyage de moquette dans des bureaux du secteur, sous quel délai peut-on réutiliser les locaux ?",

          answer: "<p>Le temps de séchage varie selon l'épaisseur des fibres et la ventilation disponible. En général, comptez entre quatre et huit heures avant de pouvoir circuler normalement. Nous intervenons souvent en fin de journée pour que les sols soient praticables dès le lendemain matin.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches anciennes incrustées sur les moquettes des parties communes du Plateau ?",
          answer: "<p>Les salissures installées depuis plusieurs mois nécessitent un détachage préalable avec un produit adapté à la nature de la tache. Nous laissons agir avant de procéder à l'extraction. Sur certaines fibres synthétiques, plusieurs passes peuvent être nécessaires pour atténuer significativement les marques les plus tenaces.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 2) parkings
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et dégraissant adapté, gestion rigoureuse des eaux de lavage et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains du Plateau et des contraintes d'accès propres à Vanves.",
        "Autolaveuse professionnelle et dégraissants adaptés au béton brut, gestion stricte des eaux usées.",
        "Planification avec le syndic, balisage sécurisé et rotation des véhicules pour limiter la gêne.",
      ],
      uniqueIntro: "<p>Les traces d'huile, les coulures de graisse et la poussière accumulée marquent visiblement les sols des parkings souterrains du <strong>quartier du Plateau</strong> et des résidences avoisinantes. Ces dépôts s'incrustent dans le béton brut au fil des passages quotidiens, rendant les surfaces glissantes et dégradant l'aspect général des parties communes.</p>\n\n<p>Un sol de parking encrassé renvoie une image négative aux copropriétaires et visiteurs. Les rampes d'accès étroites, fréquentes dans le bâti dense de Vanves, concentrent les salissures aux points de friction. Sans intervention régulière, les taches deviennent permanentes et les revêtements se détériorent prématurément.</p>\n\n<p>Klinova organise chaque chantier en coordination avec les syndics et gestionnaires. Nous planifions la rotation des véhicules, balisons les zones traitées et adaptons nos horaires pour réduire l'impact sur les usagers. Un compte-rendu détaillé accompagne chaque intervention.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et sécurisé</h3>\n<p>Le résultat visé : un béton débarrassé des taches d'huile, une surface antidérapante sur les rampes, des rigoles dégagées. Pour y parvenir, nous commençons par un diagnostic du revêtement et de l'état des évacuations afin d'adapter le traitement.</p>\n\n<h3>Traitement mécanisé et dégraissage ciblé</h3>\n<p>L'autolaveuse effectue des passes successives avec un dégraissant professionnel. Les zones critiques — angles morts, pieds de murs, rampes inclinées — reçoivent un traitement renforcé. La gestion des eaux de lavage respecte les évacuations existantes sans rejet vers la voirie.</p>\n\n<h3>Coordination et finalisation</h3>\n<p>Avant l'intervention, nous balisons les accès et organisons le stationnement temporaire des véhicules par rotation. Une fois le sol sec, nous procédons si demandé au dépoussiérage des blocs lumineux et tuyauteries. Le syndic reçoit un rapport avec photos et recommandations de fréquence.</p>",
      specificChallenges: [
        "<strong>Rampes étroites</strong> dans le bâti dense : traitement antidérapant indispensable.",
        "Sols béton brut encrassés par un <strong>trafic quotidien intense</strong> lié au stationnement contraint.",
        "Gestion des eaux de lavage en sous-sol sans rejet vers la voirie.",
        "Coordination avec syndics pour <strong>organiser la rotation des véhicules</strong> pendant l'intervention.",
        "Horaires adaptés pour réduire la gêne aux résidents et commerces voisins.",
      ],
      faqAdditions: [
        {
          question:
            "Comment procédez-vous pour décrasser des taches d'huile anciennes sur le béton des parkings souterrains du Plateau ?",
          answer: "<p>Nous appliquons un dégraissant professionnel sur les zones marquées, puis l'autolaveuse effectue plusieurs passes pour décoller les résidus incrustés. Les taches anciennes nécessitent parfois un temps de pose prolongé avant le rinçage contrôlé.</p>",
        },
        {
          question:
            "Pour un parking souterrain rue Jean Bleuzen, quelle méthode assure la bonne gestion des eaux de lavage ?",
          answer: "<p>Nous vérifions l'état des regards et rigoles avant l'intervention. L'eau chargée est dirigée vers les évacuations existantes. Si nécessaire, nous utilisons une pompe d'aspiration pour éviter tout débordement ou rejet non conforme.</p>",
        },
        {
          question:
            "Quelles plages horaires proposez-vous pour nettoyer un parking proche du Carrefour de l'Insurrection sans gêner les commerces ?",
          answer: "<p>Nous privilégions les créneaux en soirée, la nuit ou tôt le matin selon les contraintes du site. La planification se fait avec le gestionnaire pour éviter les heures de livraison et d'affluence piétonne.</p>",
        },
        {
          question:
            "Quelle différence de méthode appliquez-vous entre un parking souterrain et un parking aérien à Vanves ?",
          answer: "<p>En souterrain, la ventilation limitée impose un séchage plus long et une gestion stricte des eaux. En aérien, l'évacuation naturelle simplifie le rinçage, mais l'exposition aux intempéries demande parfois un traitement anti-mousse complémentaire.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 3) balcons
    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion maîtrisée des eaux pour préserver le voisinage et retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des expositions et contraintes propres aux balcons vanvéens, entre pollution urbaine et vis-à-vis serrés.",
        "Pression adaptée à chaque support — carrelage, béton, bois composite — pour un résultat sans dégradation des joints.",
        "Organisation anti-coulures et coordination avec les occupants pour une intervention discrète, respectueuse du voisinage.",
      ],
      uniqueIntro: "<p>Après quelques saisons, les balcons du secteur <strong>Avenue du Parc</strong> et du <strong>Centre Saint-Rémy</strong> accumulent une couche grisâtre tenace. Les dépôts de pollution se mêlent aux traces de terre rapportées par le vent, aux résidus de feuilles mortes coincés dans les angles. Les joints noircissent, le carrelage perd son éclat, et l'envie de profiter de cet espace diminue au fil des mois.</p>\n\n<p>Sur les immeubles anciens du centre, les petits balcons en fer forgé ou zinc demandent une attention particulière : supports fragiles, évacuation d'eau limitée, vis-à-vis rapproché. Les résidences plus récentes vers le Plateau présentent des balcons filants en béton ou carrelage, souvent exposés plein sud, où la chaleur cuit les salissures et les rend plus difficiles à déloger.</p>\n\n<p>Une intervention structurée permet de traiter chaque surface selon sa nature, de protéger les menuiseries et le mobilier, et de contrôler l'écoulement des eaux pour éviter tout désagrément chez les voisins du dessous. Le balcon redevient un prolongement agréable du logement.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et portes reçoivent une protection pour éviter les projections. Les gros débris — feuilles, terre, graviers — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Un produit spécifique est appliqué selon la nature du sol : dégraissant pour carrelage, solution douce pour béton brut, traitement adapté pour bois composite. Le brossage — manuel ou mécanique selon l'encrassement — décolle les salissures incrustées. Les garde-corps et murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Rinçage contrôlé et séchage</h3>\n<p>Le rinçage s'effectue à pression maîtrisée, orientée vers l'intérieur du balcon pour éviter les coulures chez les voisins. L'eau est récupérée ou dirigée vers les évacuations existantes. Après séchage, des conseils d'entretien courant sont transmis pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Pollution urbaine</strong> : dépôts noirs tenaces sur les balcons exposés côté Carrefour de l'Insurrection.",
        "<strong>Supports variés</strong> : béton brut, carrelage, zinc ou fer forgé selon l'époque de construction.",
        "<strong>Vis-à-vis rapproché</strong> : gestion stricte des projections d'eau pour préserver les voisins.",
        "<strong>Règlements copro</strong> : évacuation des eaux encadrée dans de nombreuses résidences du centre.",
        "<strong>Joints fragiles</strong> : pression contrôlée indispensable sur les balcons carrelés anciens.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un balcon carrelé sur l'Avenue du Parc, comment évitez-vous d'abîmer les joints lors du nettoyage ?",
          answer: "<p>La pression est réglée en fonction de l'état des joints. Sur les carrelages anciens, un brossage manuel complète l'action du produit dégraissant. Le rinçage s'effectue à basse pression, orienté pour ne pas forcer l'eau dans les interstices fragilisés. Les joints très dégradés sont signalés avant intervention.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux sur un balcon du Centre Saint-Rémy où le règlement de copropriété limite les écoulements ?",
          answer: "<p>L'eau de rinçage est dirigée vers les évacuations existantes ou récupérée directement. Des bâches de rétention peuvent être installées pour canaliser les écoulements. Le débit est contrôlé pour éviter tout débordement vers les balcons inférieurs ou la façade, conformément aux exigences du règlement.</p>",
        },
        {
          question:
            "Comment protégez-vous les plantes et le mobilier pendant l'intervention sur un balcon à Vanves ?",
          answer: "<p>Les plantes sont déplacées à l'intérieur ou regroupées et bâchées. Le mobilier léger est rentré, les pièces lourdes sont protégées par une bâche étanche. Les jardinières fixées aux garde-corps sont couvertes pour éviter les projections de produit ou d'eau de rinçage.</p>",
        },
        {
          question:
            "Quelle différence de méthode entre un balcon béton brut et un balcon en bois composite dans les résidences récentes de Vanves ?",
          answer: "<p>Le béton brut supporte un brossage mécanique et des produits alcalins pour désincruster les salissures. Le bois composite demande un traitement plus doux : produit neutre, brosse souple, rinçage à pression réduite. Chaque support est identifié avant intervention pour adapter la méthode et préserver la surface.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 4) balcons-fientes
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et pose optionnelle de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque vanvéennes : abords du Parc Pic, corniches anciennes du centre, derniers étages du Plateau.",
        "Protocole complet avec EPI adaptés, confinement systématique et désinfection virucide certifiée.",
        "Organisation discrète : bâchage soigné, coordination avec le voisinage, évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro: "<p>Les traces blanchâtres et l'odeur persistante sur le sol, les garde-corps ou les rebords de fenêtre signalent une accumulation de fientes de pigeons. À proximité du <strong>Parc Frédéric Pic</strong> et des corniches de l'<strong>Église Saint-Rémy</strong>, ces dépôts s'installent rapidement sur les balcons exposés. Le problème dépasse la simple gêne visuelle : les déjections contiennent des agents pathogènes qui se dispersent en poussières sèches dès qu'on tente de balayer.</p>\n\n<p>Sur les <strong>toits et corniches anciens du centre historique</strong>, les balcons en dernier étage subissent des retours fréquents. La corrosion attaque le béton, les peintures s'écaillent, et le mobilier extérieur devient inutilisable. Sans traitement adapté, l'espace reste condamné et la situation empire à chaque nouvelle visite des volatiles.</p>\n\n<p>Une intervention structurée permet de récupérer votre balcon : diagnostic de l'étendue des souillures, confinement de la zone, collecte sécurisée, désinfection complète et recommandations pour limiter les récidives. Les résidences des <strong>Hauts-de-Vanves</strong> et du <strong>Centre Saint-Rémy</strong> bénéficient d'un accompagnement adapté aux contraintes d'accès locales.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>Les fientes sèches libèrent des particules contaminées au moindre mouvement d'air. L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour protéger l'intérieur du logement et éviter toute dispersion vers les voisins.</p>\n\n<p>Une humidification préalable neutralise les poussières avant manipulation.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Les déjections sont ramassées et conditionnées en sacs étanches. Le sol du balcon, les garde-corps, les vitrages et les éventuels murs mitoyens sont nettoyés méthodiquement.</p>\n\n<p>Un produit virucide et bactéricide homologué est appliqué avec un temps de contact respecté pour éliminer les agents pathogènes. Le rinçage final précède une période d'aération avant réutilisation.</p>\n\n<h3>Prévention et évacuation</h3>\n<p>Des dispositifs de dissuasion peuvent être installés selon la configuration : pics sur les rebords, filets de protection ou gel répulsif.</p>\n\n<p>Les déchets contaminés sont évacués en sacs étanches, sans stockage sur place.</p>",
      specificChallenges: [
        "<strong>Proximité du Parc Frédéric Pic</strong> : les balcons orientés vers les arbres subissent des retours fréquents.",
        "Corniches et toitures anciennes du <strong>Centre Saint-Rémy</strong> favorisant la nidification des pigeons.",
        "Balcons en dernier étage sur le <strong>Plateau</strong> exposés aux dépôts répétés sans protection.",
        "Vis-à-vis important dans les résidences denses : intervention discrète et bâchage indispensables.",
        "Stationnement difficile en voirie saturée : coordination préalable pour accès matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Mon balcon proche du Parc Frédéric Pic est couvert de fientes, quels sont les risques sanitaires réels ?",
          answer: "<p>Les fientes de pigeons contiennent des bactéries, champignons et parasites qui se dispersent en poussières sèches. L'inhalation ou le contact cutané peuvent provoquer des infections respiratoires ou cutanées. Sur les balcons exposés aux zones arborées du parc, l'accumulation rapide aggrave ces risques. Un assainissement avec désinfection virucide élimine ces agents pathogènes.</p>",
        },
        {
          question:
            "Quel protocole de protection utilisez-vous pour désinfecter un balcon souillé près de l'Église Saint-Rémy ?",
          answer: "<p>L'intervenant porte systématiquement un masque FFP2, une combinaison jetable, des gants et des lunettes. La zone est confinée par bâchage avant toute manipulation. Les fientes sont humidifiées pour éviter l'envol de particules, puis collectées en sacs étanches. Ce protocole s'applique sur les balcons proches des corniches anciennes du centre historique.</p>",
        },
        {
          question:
            "Après nettoyage des fientes dans une résidence des Hauts-de-Vanves, quelle désinfection appliquez-vous ?",
          answer: "<p>Un produit virucide et bactéricide homologué est pulvérisé sur l'ensemble des surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage. Cette désinfection élimine les agents pathogènes résiduels. Un délai d'aération est préconisé avant de réutiliser le balcon, généralement quelques heures selon la ventilation.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des déchets contaminés lors d'une intervention en centre-ville de Vanves ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès la collecte. Aucun stockage n'est laissé sur place ni dans les parties communes. L'évacuation est organisée le jour même pour éviter toute nuisance. Dans les rues étroites du Centre Saint-Rémy, nous coordonnons l'accès véhicule en amont pour limiter la gêne.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 5) canapes-tapis
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas à domicile, avec extraction des salissures incrustées et séchage optimisé pour retrouver un mobilier frais et utilisable rapidement.",
      whyUsBullets: [
        "Connaissance des logements vanvéens : appartements denses, accès parfois contraints, mobilier sollicité par la vie quotidienne.",
        "Matériel d'injection-extraction adapté aux textiles fragiles, détachage ciblé selon la nature des taches identifiées.",
        "Intervention planifiée selon vos disponibilités, consignes de séchage transmises pour une remise en usage rapide du mobilier.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect de son canapé ou de ses tapis quand la vie de famille s'installe durablement ? Dans les appartements des <strong>Hauts-de-Vanves</strong> et du <strong>Centre Saint-Rémy</strong>, où la rotation locative reste soutenue, les textiles d'ameublement accumulent taches de café, traces d'animaux et auréoles diverses. Ces marques s'incrustent progressivement dans les fibres, rendant le mobilier terne malgré les tentatives de nettoyage maison.</p>\n\n<p>Le rafraîchissement régulier des canapés et tapis change concrètement le quotidien. Un velours ravivé, une odeur neutralisée, des couleurs qui retrouvent leur éclat : le confort visuel et olfactif du logement s'améliore nettement. Dans les <strong>appartements majoritaires de Vanves</strong>, souvent des studios ou T2 avec ascenseurs étroits, ces textiles représentent une part importante de l'ambiance intérieure.</p>\n\n<p>Notre intervention s'adapte aux contraintes d'accès fréquentes en petite couronne. Diagnostic textile préalable, protection des sols environnants, et consignes de séchage adaptées à chaque configuration : le mobilier retrouve sa propreté sans perturber l'organisation du foyer.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'extraire les salissures profondes tout en préservant l'intégrité des fibres. Chaque textile retrouve sa fraîcheur : odeurs neutralisées, auréoles atténuées ou supprimées, couleurs ravivées. Le résultat dépend de l'ancienneté des taches et du type de tissu.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute action, nous identifions le type de textile (coton, laine, synthétique, velours) et la nature des taches. Un test discret sur zone cachée valide la compatibilité du traitement. Les salissures tenaces reçoivent un détachage enzymatique adapté.</p>\n\n<h3>Injection-extraction et séchage maîtrisé</h3>\n<p>Le traitement principal utilise la technique d'injection-extraction textile. La pression et la température sont ajustées selon la fragilité du support. L'extraction maximale réduit le temps de séchage. Nous transmettons des consignes précises selon l'épaisseur du textile et l'aération disponible dans votre logement.</p>",
      specificChallenges: [
        "<strong>Taches anciennes</strong> sur canapés tissu : café, vin ou traces d'animaux incrustées depuis plusieurs mois.",
        "<strong>Ascenseurs étroits</strong> dans l'ancien : le matériel doit être adapté aux accès contraints.",
        "Appartements sans balcon ni loggia : <strong>séchage optimisé</strong> indispensable pour limiter l'humidité.",
        "<strong>Rotation locative</strong> fréquente : remise en état rapide entre deux occupants.",
        "Textiles variés (velours, laine, synthétique) : chaque fibre nécessite un <strong>traitement adapté</strong>.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyez-vous un canapé tissu non déhoussable dans un appartement des Hauts-de-Vanves ?",
          answer: "<p>Nous intervenons directement sur place avec un équipement portable adapté aux accès contraints. Le canapé est traité in situ par injection-extraction, sans démontage. Un test préalable sur zone cachée garantit la compatibilité du traitement avec votre textile. Le séchage est optimisé selon la ventilation disponible dans votre logement.</p>",
        },
        {
          question:
            "Pour un tapis en laine à Vanves, quel résultat attendre après un nettoyage professionnel à domicile ?",
          answer: "<p>Un tapis en laine correctement entretenu retrouve des couleurs plus vives et une texture assouplie. Les fibres naturelles répondent bien à l'extraction douce. Les acariens et poussières incrustées sont éliminés en profondeur. Le résultat final dépend de l'état initial et de l'ancienneté des salissures présentes.</p>",
        },
        {
          question:
            "Combien de temps sèche un canapé nettoyé dans un appartement sans balcon à Vanves ?",
          answer: "<p>Le temps de séchage varie entre 4 et 8 heures selon l'épaisseur du textile et l'aération du logement. Sans balcon, nous recommandons d'ouvrir les fenêtres ou d'utiliser un ventilateur pour accélérer le processus. L'extraction maximale réalisée pendant l'intervention réduit significativement l'humidité résiduelle.</p>",
        },
        {
          question:
            "Avec un ascenseur étroit au Centre Saint-Rémy, quelles contraintes pour le nettoyage d'un tapis ou canapé ?",
          answer: "<p>Notre matériel est conçu pour les interventions en appartement avec accès restreint. Les équipements portables passent dans les ascenseurs exigus et les cages d'escalier étroites. Nous prévoyons également le stationnement à proximité pour limiter les allers-retours. L'intervention reste fluide malgré ces contraintes fréquentes dans le centre ancien.</p>",
        },
      ],
      ctaOverride: "",
    },

   

    // 7) nettoyage-appartement-maison
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement à Vanves, avec nettoyage minutieux de chaque pièce et coordination adaptée aux délais serrés des états des lieux ou fins de chantier.",
      whyUsBullets: [
        "Connaissance du parc locatif vanvéen et des exigences des agences immobilières locales pour les états des lieux.",
        "Polyvalence sur tous types de sols et finitions, du parquet ancien aux carrelages récents.",
        "Organisation calée sur vos contraintes : créneaux courts, coordination avec gardien ou agence, stationnement anticipé.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou quelques années d'occupation, un appartement du <strong>Centre Saint-Rémy</strong> accumule des traces que le ménage courant ne suffit plus à éliminer. Poussières de chantier incrustées dans les plinthes, résidus de colle sur les sols, joints de salle de bain ternis : ces détails deviennent visibles au moment de rendre les clés ou d'accueillir un nouveau locataire.</p>\n\n<p>Dans les immeubles anciens avec parquets fragiles ou les résidences plus récentes équipées de carrelage, chaque surface demande une attention particulière. Un nettoyage complet améliore l'état général du bien, facilite la validation de l'état des lieux et évite les retenues sur caution. Pour les propriétaires bailleurs, c'est aussi une question d'image auprès des agences et des futurs occupants.</p>\n\n<p>Nous organisons chaque intervention en tenant compte des créneaux courts entre deux locataires et des contraintes de stationnement fréquentes à Vanves. Diagnostic préalable, protection des zones sensibles, coordination avec l'agence ou le propriétaire : tout est planifié pour respecter vos délais.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être remis ou occupé</h3>\n<p>L'objectif est de rendre chaque pièce dans un état de propreté compatible avec un état des lieux ou une entrée locataire. Sols débarrassés de toute trace, vitres intérieures nettes, sanitaires désinfectés.</p>\n\n<p>Pour y parvenir, nous commençons par un diagnostic de l'ensemble du bien : nature des sols, niveau d'encrassement, présence éventuelle de résidus de chantier.</p>\n\n<h3>Traitement adapté à chaque zone</h3>\n<p>Les pièces d'eau reçoivent un nettoyage approfondi des faïences, joints et équipements. La cuisine est dégraissée intégralement, plans de travail et électroménager inclus.</p>\n\n<p>Les sols sont traités selon leur nature : aspiration puis lavage adapté au parquet, au carrelage ou au lino. Les plinthes, interrupteurs et poignées sont systématiquement essuyés.</p>\n\n<h3>Contrôle et remise des clés</h3>\n<p>Avant de quitter le logement, nous vérifions chaque point : placards intérieurs, radiateurs, traces résiduelles. Une aération est assurée pour un séchage optimal. Les clés peuvent être remises directement à l'agence ou au propriétaire si convenu.</p>",
      specificChallenges: [
        "Délais serrés entre <strong>deux locataires</strong> dans un marché locatif tendu.",
        "Parquets anciens du <strong>Centre Saint-Rémy</strong> nécessitant un lavage sans excès d'eau.",
        "Stationnement compliqué obligeant à anticiper le déchargement du matériel.",
        "Résidus de peinture ou d'enduit après travaux de rénovation fréquents dans l'ancien.",
        "Coordination avec agences et propriétaires pour la <strong>remise des clés</strong>.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier d'un appartement au Centre Saint-Rémy, quelles tâches techniques sont incluses par défaut ?",
          answer: "<p>L'intervention couvre le dépoussiérage complet des murs et plafonds, le retrait des traces de peinture ou colle sur les sols, le nettoyage des vitres intérieures et la désinfection des sanitaires. Les placards et radiateurs sont également traités pour un rendu global cohérent.</p>",
        },
        {
          question:
            "Quel niveau de propreté assurez-vous pour un ménage avant état des lieux d'un logement proche de la mairie de Vanves ?",
          answer: "<p>Nous visons un niveau compatible avec une validation d'état des lieux sans réserve : sols sans trace, sanitaires désinfectés, vitres nettes, électroménager dégraissé. Si un point nécessite une repasse, nous intervenons dans les meilleurs délais avant le rendez-vous.</p>",
        },
        {
          question:
            "Comment organisez-vous l'accès et le matériel quand le logement est derrière un digicode et le stationnement difficile rue Antoine Fratacci ?",
          answer: "<p>Nous récupérons les codes ou badges en amont auprès du propriétaire ou de l'agence. Pour le stationnement, nous identifions les créneaux les moins contraignants et prévoyons un déchargement rapide du matériel afin de libérer le véhicule sans gêner la circulation.</p>",
        },
        {
          question:
            "En cas  d'urgence locative à Vanves, quel est votre délai d'intervention pour un nettoyage complet d'appartement ?",
          answer: "<p>Selon la disponibilité de nos équipes et la surface du bien, nous pouvons intervenir sous 24 à 48 heures. Pour les situations très urgentes, un échange téléphonique permet de confirmer rapidement un créneau et d'organiser la coordination avec l'agence ou le gardien.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;