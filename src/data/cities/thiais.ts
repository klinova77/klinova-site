const city = {
  name: "Thiais",
  slug: "thiais",
  postalCodes: ["94320"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Thiais pour l'entretien des parties communes, parkings et espaces extérieurs. Au carrefour de l'A86 et de la N7, nos équipes connaissent les contraintes d'accès liées aux copropriétés denses et aux zones commerciales.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro:
    "<p>À proximité immédiate de Belle Épine et de l'aéroport d'Orly, Thiais concentre des flux importants qui sollicitent fortement les espaces communs. Klinova accompagne syndics, gestionnaires et occupants avec une organisation calibrée pour ce territoire.</p>\n<p class=\"mt-4\">Nos interventions couvrent la propreté des halls, le décrassage des parkings souterrains et l'entretien des extérieurs. Chaque prestation s'adapte aux contraintes horaires et d'accès, avec un suivi clair transmis aux donneurs d'ordre.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Planification tenant compte des pics de circulation A86/N7 et des horaires sensibles des résidences du quartier Grignon.</li>\n  <li><strong>Matériel adapté :</strong> Équipements dimensionnés pour les grandes surfaces comme pour les cages d'escalier étroites des copropriétés anciennes.</li>\n  <li>Reporting structuré : Compte-rendu d'intervention transmis au syndic ou gestionnaire, photos avant/après sur demande.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution routière A86/N7</strong> : dépôts noirs sur balcons et façades, nettoyage régulier nécessaire.",
    "Parkings souterrains des résidences Grignon : béton brut encrassé par le trafic quotidien.",
    "<strong>Flux piétons Belle Épine</strong> : halls d'entrée des copropriétés voisines sollicités en permanence.",
    "Accès digicodes et badges fréquents : coordination préalable indispensable avec gardiens ou syndics.",
    "Stationnement saturé en centre-ville : intervention planifiée tôt le matin ou en soirée.",
    "Proximité Parc de l'Europe : fientes et débris végétaux sur balcons des derniers étages.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Grignon",
    "Belle Épine",
    "Quartier Sud / Orly",
    "Les Grands Champs",
    "Zone Sénia",
  ],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Thiais",
    "Centre Commercial Belle Épine",
    "Thiais Village",
    "Gare Pont de Rungis - Aéroport d'Orly",
    "Cimetière Parisien de Thiais",
    "Parc de l'Europe",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les secteurs à fort trafic comme Belle Épine ou la zone Sénia ?",
      answer:
        "<p>Nous planifions les passages en dehors des <strong>heures de pointe</strong> pour limiter la gêne. Pour les copropriétés proches des axes commerciaux, l'intervention débute tôt le matin ou en soirée. Le balisage et la coordination avec le gardien permettent de sécuriser l'accès sans perturber les résidents.</p>",
    },
    {
      question: "Quel délai prévoir pour obtenir un devis après une demande ?",
      answer:
        "<p>Un premier retour intervient sous 24 à 48 heures. Si une visite technique s'impose — parking souterrain, grande surface vitrée, état dégradé — nous la programmons rapidement. Le devis détaillé précise les <strong>étapes, délais et conditions d'accès</strong> nécessaires à l'intervention.</p>",
    },
    {
      question:
        "Le stationnement est compliqué à Thiais, comment gérez-vous l'acheminement du matériel ?",
      answer:
        "<p>Nos équipes repèrent les possibilités de stationnement avant chaque intervention : accès parking résidentiel, zone de livraison ou créneau autorisé. Pour les secteurs saturés comme le centre-ville ou Grignon, nous privilégions des <strong>véhicules compacts</strong> et adaptons les horaires d'arrivée.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir en urgence sur une dégradation imprévue ?",
      answer:
        "<p>Oui, nous traitons les demandes urgentes — fuite ayant souillé un hall, dégât localisé avant visite — avec une <strong>réactivité sous 24 à 72 heures</strong> selon disponibilité. Le syndic ou le particulier reçoit une confirmation rapide et un créneau adapté aux contraintes d'accès.</p>",
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
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et configurations des bureaux de la Zone Sénia à Thiais.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et velours des locaux tertiaires.",
        "Interventions planifiées en dehors des heures d'activité pour limiter toute perturbation des équipes.",
      ],
      uniqueIntro:
        "<p>Dans la <strong>Zone d'activité Sénia</strong>, les bureaux et locaux tertiaires accueillent un flux constant de collaborateurs et visiteurs. Les dalles textiles des couloirs et les velours ras des salles de réunion accumulent poussières fines, traces de semelles et résidus de boissons. Sans entretien adapté, ces fibres perdent leur tenue et ternissent l'image des espaces professionnels.</p>\n<p class=\"mt-4\">Les parties communes des petits collectifs et halls d'entrée subissent le même encrassement progressif. Les moquettes bouclées ou velours des escaliers retiennent les particules transportées depuis l'extérieur. Un détachage régulier préserve l'aspect soigné des lieux et limite l'usure prématurée des revêtements.</p>\n<p class=\"mt-4\">Le trafic piéton intense généré par les commerces environnants et la proximité aéroportuaire accélère l'encrassement. Une intervention structurée — diagnostic des fibres, protection des plinthes, extraction en profondeur — permet de retrouver des surfaces propres sans perturber l'activité des occupants.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation intense</h3>\n<p>Les couloirs et halls d'accueil concentrent l'essentiel des passages. Nous identifions d'abord le type de moquette — dalles textiles, velours ras ou bouclé — puis appliquons plusieurs passes d'injection-extraction sur ces surfaces très sollicitées. Les bas de murs et plinthes sont protégés avant traitement.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les open-spaces et salles de réunion présentent souvent des taches localisées : café, tanin, traces grasses. Un détachage ciblé précède le nettoyage général. L'aspiration préalable retire les particules sèches avant l'injection de solution nettoyante.</p>\n\n<h3>Finitions et gestion du séchage</h3>\n<p>Après extraction maximale de l'humidité, nous vérifions l'homogénéité du rendu sur l'ensemble des surfaces traitées. Le temps de séchage varie selon l'épaisseur des fibres et la ventilation des locaux — généralement deux à quatre heures pour une remise en service rapide. Des consignes de non-piétinement temporaire sont transmises.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux Sénia encrassées par le passage quotidien des collaborateurs.",
        "Velours ras des salles de réunion marqué par taches de café et traces de semelles.",
        "Halls d'entrée exposés aux poussières fines liées au trafic routier A86 et N7.",
        "Escaliers étroits des petits collectifs nécessitant un matériel compact et maniable.",
        "Temps de séchage à maîtriser pour une reprise d'activité sous quelques heures.",
      ],
      faqAdditions: [
        {
          question:
            "Les halls de la Zone Sénia sont parfois étroits : comment organisez-vous l'accès du matériel pour nettoyer la moquette ?",
          answer:
            "<p>Nous utilisons des équipements compacts adaptés aux passages resserrés. Le matériel d'injection-extraction est acheminé par étapes, avec balisage temporaire si nécessaire. La coordination préalable avec le gestionnaire permet de définir les créneaux d'intervention les moins contraignants pour les occupants des bureaux.</p>",
        },
        {
          question:
            "Après un nettoyage de moquette dans un local commercial proche de la Zone Sénia, combien de temps avant réutilisation complète ?",
          answer:
            "<p>Le séchage dépend de l'épaisseur des fibres et de la ventilation du local. En général, comptez deux à quatre heures pour une remise en service. Nous procédons à une extraction maximale de l'humidité et pouvons intervenir en soirée pour que les espaces soient opérationnels dès le lendemain matin.</p>",
        },
        {
          question:
            "Pour les bureaux de la Zone Sénia, que privilégier entre injection-extraction et encapsulation pour des taches incrustées ?",
          answer:
            "<p>L'injection-extraction reste la méthode la plus efficace sur les salissures profondes : elle injecte une solution nettoyante puis aspire immédiatement les résidus. L'encapsulation convient davantage à un entretien régulier sur des moquettes peu encrassées. Nous adaptons le procédé après diagnostic du revêtement.</p>",
        },
        {
          question:
            "Les moquettes épaisses des open-spaces de la Zone Sénia risquent-elles d'être abîmées par certains procédés ?",
          answer:
            "<p>Le diagnostic initial identifie la nature des fibres — bouclées, velours, synthétiques ou naturelles. Nous ajustons la pression d'injection et la température de la solution pour préserver la tenue du revêtement. Les moquettes épaisses supportent bien l'injection-extraction lorsque les réglages sont adaptés à leur structure.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et gestion stricte des eaux usées, pour des surfaces circulables et sécurisées dès la fin d'intervention.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès aux parkings d'équipements publics et copropriétés denses à Thiais.",
        "Autolaveuse professionnelle et protocole de gestion des eaux conforme aux exigences des gestionnaires.",
        "Planification en amont avec balisage sécurisé et rotation véhicules pour limiter la gêne aux usagers.",
      ],
      uniqueIntro:
        "<p>Comment maintenir un parking propre et sécurisé quand les véhicules y circulent en continu, entre événements sportifs et flux quotidiens ? Autour du <strong>Palais Omnisports de Thiais</strong>, les aires de stationnement subissent un trafic soutenu qui laisse des traces : huile moteur, poussières de freinage, résidus de pneus. Sans intervention régulière, ces dépôts s'accumulent et rendent les surfaces glissantes.</p>\n<p class=\"mt-4\">Un lavage mécanisé adapté au <strong>béton brut</strong> ou aux zones de rampes permet de retrouver un sol circulable sans risque. Les gestionnaires constatent moins de plaintes liées aux odeurs ou à l'aspect dégradé des sous-sols. Les copropriétés comme les équipements publics gagnent en image et en sécurité pour les usagers.</p>\n<p class=\"mt-4\">Avec la proximité de l'A86 et de la N7, les particules fines et suies grasses pénètrent jusque dans les parkings couverts. Une coordination précise — balisage, rotation des véhicules, créneaux adaptés — garantit un chantier fluide sans bloquer l'accès aux résidents ou visiteurs.</p>",
      uniqueDeepDive:
        "<h3>Sol dégraissé et circulable</h3>\n<p>Le résultat attendu : une surface débarrassée des nappes d'huile, des traces de pneus et des dépôts gras. Pour y parvenir, un diagnostic préalable identifie le type de revêtement et l'état des évacuations.</p>\n<p class=\"mt-4\">Un balayage mécanique élimine les débris avant l'application d'un dégraissant adapté au béton ou à la résine.</p>\n\n<h3>Passes mécanisées et zones critiques</h3>\n<p>L'autolaveuse effectue plusieurs passes sur l'ensemble de la surface. Les rampes d'accès reçoivent un traitement antidérapant renforcé.</p>\n<p class=\"mt-4\">Les angles morts, pieds de murs et rigoles sont traités manuellement pour ne laisser aucune zone encrassée.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont récupérées et dirigées vers les évacuations conformes, sans rejet sauvage. Un dépoussiérage des blocs lumineux ou tuyauteries peut compléter l'intervention si demandé.</p>\n<p class=\"mt-4\">Un compte-rendu précise l'état constaté et la fréquence recommandée selon le trafic observé.</p>",
      specificChallenges: [
        "Trafic événementiel au Palais Omnisports générant pics de salissures sur les aires de stationnement.",
        "Dépôts d'huile et poussières routières liés à la proximité de l'A86 et de la N7.",
        "Rampes d'accès étroites dans certaines copropriétés nécessitant un traitement antidérapant ciblé.",
        "Coordination avec syndics et gestionnaires pour intervenir sans bloquer les accès résidents.",
        "Gestion stricte des eaux usées pour respecter les évacuations existantes.",
      ],
      faqAdditions: [
        {
          question:
            "Comment gérez-vous les eaux de lavage dans les parkings proches du Palais Omnisports pour éviter tout rejet non conforme ?",
          answer:
            "<p>Les eaux chargées en huile et dégraissant sont dirigées vers les regards existants après vérification de leur état. Nous n'évacuons jamais vers des zones non prévues. Un contrôle visuel des rigoles précède chaque intervention pour adapter le débit de l'autolaveuse aux capacités d'écoulement du site.</p>",
        },
        {
          question:
            "Les taches d'huile anciennes sur les rampes du Palais Omnisports partent-elles avec un lavage standard ?",
          answer:
            "<p>Les dépôts récents s'éliminent avec le dégraissant habituel. Pour les nappes incrustées depuis plusieurs mois, un décapant spécifique est appliqué avant le passage mécanisé. Nous évaluons l'ancienneté des traces lors du diagnostic pour adapter le protocole et éviter plusieurs interventions inutiles.</p>",
        },
        {
          question:
            "Quels créneaux recommandez-vous pour intervenir sur le parking du Palais Omnisports sans gêner les événements ?",
          answer:
            "<p>Nous privilégions les matinées en semaine ou les lendemains de manifestations sportives, quand le parking se vide. Une coordination préalable avec le gestionnaire permet de caler l'intervention sur un créneau où le flux de véhicules reste faible, limitant ainsi le balisage nécessaire.</p>",
        },
        {
          question:
            "Quelle différence de méthode entre le parking souterrain et l'aire aérienne du Palais Omnisports ?",
          answer:
            "<p>En souterrain, l'autolaveuse travaille en circuit fermé avec aspiration immédiate pour éviter les flaques résiduelles. À l'extérieur, la haute pression peut compléter le lavage sur les zones très encrassées. La ventilation naturelle accélère le séchage en aérien, alors qu'en sous-sol nous adaptons le débit pour limiter l'humidité persistante.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Thiais : traitement des dépôts, nettoyage des garde-corps et gestion maîtrisée des eaux pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux axes routiers, loggias en cœur d'îlot, étages élevés à Grignon.",
        "Pression ajustée selon le support — carrelage, béton, dalles — et l'état des joints pour éviter toute dégradation.",
        "Gestion rigoureuse des eaux de rinçage et coordination avec le voisinage pour une intervention sans réclamation.",
      ],
      uniqueIntro:
        "<p>Après quelques saisons d'exposition aux particules de l'A86 et de la N7, les balcons du <strong>quartier de Grignon</strong> accumulent une couche grisâtre difficile à déloger. Les dépôts verts s'installent dans les joints, les traces noires marquent le sol près des garde-corps, et l'espace perd son attrait. Les occupants finissent par éviter ce coin extérieur pourtant précieux en appartement.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change le quotidien : on y prend à nouveau le café, on y installe quelques plantes, on ouvre les portes sans hésiter. Sur les supports en béton brut ou carrelage fréquents dans les résidences des années 70-80, un traitement adapté redonne un aspect net sans fragiliser les matériaux. Les voisins du dessous apprécient aussi l'absence de coulures.</p>\n<p class=\"mt-4\">Notre intervention commence par un diagnostic du revêtement et de l'exposition. Nous protégeons les menuiseries, déplaçons le mobilier, puis appliquons un protocole calibré selon l'état constaté. Les contraintes de copropriété sont anticipées pour limiter toute gêne.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les fenêtres et portes reçoivent une protection pour éviter les projections. Les gros débris — feuilles mortes, terre accumulée — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formule douce pour carrelage, solution désincrustante pour béton. Le brossage — manuel ou mécanique selon l'encrassement — déloge mousses et dépôts noirs. Les garde-corps et murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Rinçage et séchage</h3>\n<p>Le rinçage s'effectue à pression contrôlée pour préserver les joints. Un système anti-coulures protège les balcons inférieurs et la façade. Après évacuation de l'eau résiduelle, le séchage naturel permet une réutilisation sous quelques heures. Nous transmettons des conseils d'entretien pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts noirs liés à la pollution A86/N7 incrustés sur béton et garde-corps.",
        "Mousses et lichens dans les joints de carrelage des loggias à Grignon.",
        "Étages élevés nécessitant une logistique adaptée et accord préalable de la copropriété.",
        "Risque de coulures chez les voisins du dessous en résidence dense.",
        "Mobilier et plantes à protéger ou déplacer avant intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Les balcons du quartier Grignon accumulent dépôts verts : quel protocole pour éliminer mousse et pollutions tenaces ?",
          answer:
            "<p>Nous appliquons un produit désincrustant adapté au béton ou au carrelage, suivi d'un brossage mécanique ciblé sur les zones vertes. Le rinçage à pression modérée évite d'endommager les joints tout en éliminant les résidus. Sur les balcons très exposés de Grignon, ce traitement redonne un aspect net en une seule intervention.</p>",
        },
        {
          question:
            "Comment nettoyer un balcon carrelé à Grignon sans abîmer les joints ni décaper les carreaux ?",
          answer:
            "<p>Le choix du produit et de la pression dépend de l'état des joints. Sur carrelage ancien, nous privilégions un brossage manuel avec solution douce, puis un rinçage basse pression. Les joints fragilisés sont traités avec précaution pour éviter tout déchaussement. Le résultat reste homogène sans altérer la surface.</p>",
        },
        {
          question:
            "Pour les balcons en étage élevé à Grignon, quelles contraintes d'accès devez-vous anticiper ?",
          answer:
            "<p>Nous vérifions la disponibilité de l'ascenseur pour le matériel et l'accord du syndic si nécessaire. L'intervention est planifiée pour limiter la gêne dans les parties communes. En copropriété, nous informons les voisins concernés par d'éventuelles projections ou bruits ponctuels.</p>",
        },
        {
          question:
            "Faut-il adapter la méthode selon balcon ouvert ou loggia fermée dans les résidences de Grignon ?",
          answer:
            "<p>Oui. Une loggia fermée retient davantage l'humidité et favorise les moisissures sur les murs latéraux. Nous ajustons le traitement en conséquence : produit anti-mousse renforcé, attention particulière aux angles. Sur balcon ouvert, l'évacuation de l'eau est plus simple mais la pollution atmosphérique souvent plus marquée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des immeubles exposés aux espaces verts de Thiais, notamment autour du Parc de l'Europe.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide systématique.",
        "Évacuation des déchets contaminés en sacs étanches, intervention discrète pour limiter la gêne en copropriété.",
      ],
      uniqueIntro:
        "<p>Les traces blanchâtres et croûtes grises sont visibles sur de nombreux balcons à Thiais, particulièrement dans les <strong>bâtiments proches du Parc de l'Europe</strong> et des abords du Cimetière Parisien. Ces zones arborées attirent les pigeons qui élisent domicile sur les corniches et garde-corps. Les fientes s'accumulent, dégagent une odeur persistante et rendent l'espace inutilisable pendant des semaines.</p>\n<p class=\"mt-4\">Sur les balcons en béton ou carrelage des derniers étages, la situation empire rapidement. Les résidus acides attaquent les joints, décolorent les surfaces et imprègnent le linge étendu. L'inconfort dépasse la simple gêne visuelle : impossible d'ouvrir les fenêtres sans que l'odeur entre, impossible de profiter de l'extérieur sans craindre le contact.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon sain. Le traitement inclut confinement de la zone, collecte des déchets, nettoyage des supports et désinfection complète pour éliminer les agents pathogènes. La proximité des espaces verts à Thiais justifie souvent l'installation de dispositifs anti-retour.</p>",
      uniqueDeepDive:
        '<h3>Sécurisation et confinement</h3>\n<p>L\'intervenant porte masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l\'intérieur du logement ou chez les voisins.</p>\n<p class="mt-4">Les fientes sèches sont humidifiées avant manipulation. Cette étape neutralise les poussières contaminées et empêche leur envol.</p>\n\n<h3>Collecte et nettoyage des supports</h3>\n<p>Les dépôts sont ramassés et conditionnés dans des sacs étanches. Sol, garde-corps, vitrages et murs mitoyens sont ensuite traités au jet basse pression.</p>\n<p class="mt-4">Les résidus incrustés sur béton ou carrelage nécessitent parfois un brossage mécanique ciblé.</p>\n\n<h3>Désinfection et prévention</h3>\n<p>Un produit virucide et bactéricide homologué est appliqué sur l\'ensemble des surfaces. Le temps de contact est respecté avant rinçage final.</p>\n<p class="mt-4">Si le risque de retour est identifié, des pics anti-pigeons ou filets de protection peuvent être posés sur les rebords exposés. Les déchets conditionnés sont évacués de manière sécurisée.</p>',
      specificChallenges: [
        "Balcons des derniers étages particulièrement exposés aux pigeons nichant dans les arbres du Parc de l'Europe.",
        "Fientes acides qui attaquent les joints de carrelage et décolorent le béton des garde-corps.",
        "Odeur tenace imprégnant le linge et empêchant l'ouverture des fenêtres pendant plusieurs jours.",
        "Nécessité de protéger les voisins du dessous lors du rinçage et de l'évacuation des eaux.",
        "Risque de réinfestation rapide sans installation de dispositifs dissuasifs adaptés.",
      ],
      faqAdditions: [
        {
          question:
            "Des fientes abondantes sur un balcon proche du Parc de l'Europe : quels risques sanitaires et premières mesures à prendre ?",
          answer:
            "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières. Évitez de balayer à sec et ne touchez pas les dépôts sans protection. Fermez les fenêtres et contactez un professionnel équipé pour un assainissement sécurisé avec désinfection.</p>",
        },
        {
          question:
            "Pour un balcon exposé près du Parc de l'Europe, quels équipements de protection utilisez-vous lors du traitement ?",
          answer:
            "<p>L'intervenant porte systématiquement un masque FFP2, des gants étanches, des lunettes de protection et une combinaison jetable. La zone est confinée par bâchage avant toute manipulation. Ces précautions évitent la dispersion des particules contaminées vers l'intérieur ou les logements voisins.</p>",
        },
        {
          question:
            "Après nettoyage des fientes sur un balcon à Thiais, quelle méthode de désinfection garantit l'élimination des agents pathogènes ?",
          answer:
            "<p>Un produit virucide et bactéricide homologué est pulvérisé sur l'ensemble des surfaces nettoyées. Le temps de contact recommandé est respecté avant rinçage. Cette étape élimine les micro-organismes résiduels et neutralise les odeurs persistantes liées à la contamination organique.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets après désinfection d'un balcon contaminé par fientes à Thiais ?",
          answer:
            "<p>Les fientes collectées et les équipements jetables sont conditionnés dans des sacs étanches fermés hermétiquement. Ces déchets sont évacués par nos soins en fin d'intervention. Aucun résidu contaminé ne reste sur place, et le balcon peut être réutilisé après le délai d'aération indiqué.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des résidences familiales de Thiais et des textiles courants dans les intérieurs locaux.",
        "Matériel d'injection-extraction adapté aux tissus fragiles, détachage ciblé selon la nature des taches.",
        "Organisation souple pour gérer les contraintes d'accès et permettre une remise en service rapide du mobilier.",
      ],
      uniqueIntro:
        "<p>Comment préserver la fraîcheur d'un canapé familial quand les enfants y passent leurs après-midi et que le chat s'y installe chaque soir ? Dans les résidences comme <strong>Les Grands Champs</strong> et les secteurs pavillonnaires de Thiais, les textiles d'ameublement encaissent un usage quotidien intense. Taches de goûter, poils d'animaux, auréoles de transpiration : les fibres absorbent tout, et un simple coup d'aspirateur ne suffit plus.</p>\n<p class=\"mt-4\">Un canapé encrassé change l'atmosphère d'un salon. Les couleurs ternissent, les odeurs s'installent, et l'envie de s'y poser diminue. Dans les appartements T3 ou T4 où le séjour sert aussi de salle de jeux, le mobilier textile vieillit vite. Un rafraîchissement en profondeur redonne du confort visible : assise plus nette, odeurs neutralisées, aspect ravivé.</p>\n<p class=\"mt-4\">L'intervention s'adapte aux contraintes d'accès fréquentes à Thiais : ascenseurs parfois étroits, stationnement limité en centre-ville. Nous organisons le passage en tenant compte de ces réalités pour limiter la gêne et assurer un séchage dans les meilleures conditions.</p>",
      uniqueDeepDive:
        "<h3>Textile propre et odeurs neutralisées</h3>\n<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus invisibles. Les fibres retrouvent leur souplesse, les couleurs leur éclat, et les odeurs tenaces disparaissent.</p>\n<p class=\"mt-4\">Pour y parvenir, nous commençons par identifier le type de tissu : coton, velours, laine ou synthétique. Un test discret sur zone cachée valide la compatibilité du traitement.</p>\n\n<h3>Détachage ciblé et traitement adapté</h3>\n<p>Les taches identifiées — café, urine, graisse — reçoivent un pré-traitement enzymatique si nécessaire. L'injection-extraction textile déloge ensuite les salissures en profondeur sans détremper le support.</p>\n<p class=\"mt-4\">La pression et la température sont ajustées selon la fragilité du tissu. Un velours ne se traite pas comme un coton épais.</p>\n\n<h3>Extraction et conseils de séchage</h3>\n<p>L'aspiration puissante retire le maximum d'humidité. Nous indiquons le délai de séchage selon l'épaisseur du textile et la ventilation de la pièce.</p>\n<p class=\"mt-4\">Des conseils d'entretien prolongent le résultat : fréquence de passage, gestes à éviter entre deux interventions.</p>",
      specificChallenges: [
        "Taches d'animaux fréquentes dans les pavillons : urine, poils incrustés, odeurs persistantes.",
        "Canapés familiaux sollicités quotidiennement : auréoles, traces de goûter, usure accélérée des fibres.",
        "Accès parfois contraint par des ascenseurs étroits ou des escaliers dans les résidences.",
        "Stationnement difficile en centre-ville de Thiais pour le matériel d'intervention.",
        "Textiles variés (velours, laine, synthétique) nécessitant un diagnostic avant traitement.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé en tissu non déhoussable aux Grands Champs, quelles techniques permettent un nettoyage en profondeur sans abîmer le textile ?",
          answer:
            "<p>Nous réalisons d'abord un test sur une zone cachée pour vérifier la tenue des couleurs. L'injection-extraction à basse pression déloge les salissures sans détremper le tissu. La température est ajustée selon la fibre : plus douce sur velours, plus franche sur coton épais. Le textile reste intact et retrouve sa netteté.</p>",
        },
        {
          question:
            "Après un nettoyage professionnel du canapé familial, combien de temps faut-il attendre avant de pouvoir s'y asseoir à nouveau ?",
          answer:
            "<p>Le séchage dépend de l'épaisseur du tissu et de l'aération de la pièce. En général, comptez entre 4 et 8 heures pour un canapé standard. Nous conseillons d'ouvrir les fenêtres ou d'activer la ventilation pour accélérer le processus. Un textile bien extrait sèche plus vite qu'un textile détrempé.</p>",
        },
        {
          question:
            "En cas d'urine d'animal incrustée sur un tapis, comment neutraliser les odeurs et récupérer le textile ?",
          answer:
            "<p>L'urine pénètre en profondeur et laisse des cristaux odorants dans les fibres. Un pré-traitement enzymatique casse ces molécules avant l'extraction. L'injection-extraction retire ensuite les résidus en profondeur. Si la tache est ancienne, plusieurs passages peuvent être nécessaires pour un résultat satisfaisant.</p>",
        },
        {
          question:
            "Si l'ascenseur est hors service dans une résidence comme Les Grands Champs, comment s'organise l'intervention pour un canapé à l'étage ?",
          answer:
            "<p>Nous montons le matériel par les escaliers si l'accès le permet. Le poids de l'équipement reste gérable pour deux intervenants. En cas d'étage élevé ou d'escalier très étroit, nous évaluons la faisabilité avant le rendez-vous. Aucun frais supplémentaire n'est appliqué sans accord préalable.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse à Thiais, avec traitement adapté au support et élimination des dépôts verts, mousses et salissures tenaces pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des contraintes locales : terrasses exposées à la pollution routière de l'A86 et de la N7, dépôts spécifiques à traiter.",
        "Maîtrise des supports variés : pierre, carrelage, bois, composite — pression et produits ajustés pour chaque matériau sans dégradation.",
        "Organisation soignée : protection du mobilier et des plantes, gestion de l'évacuation d'eau, respect du voisinage en copropriété.",
      ],
      uniqueIntro:
        "<p>Dans les secteurs proches de l'<strong>Avenue de Versailles</strong> et des axes à fort trafic, les terrasses accumulent un voile grisâtre caractéristique. Les particules fines se déposent sur la pierre, le carrelage ou le bois, formant une couche adhérente que le simple jet d'eau ne décolle pas. À cela s'ajoutent les feuilles mortes, les résidus organiques et, dans les zones ombragées, une mousse qui gagne du terrain chaque saison.</p>\n<p class=\"mt-4\">Sur les dalles sur plots des résidences récentes comme sur les terrasses en pierre des pavillons, le résultat est le même : un sol devenu glissant, terne, peu engageant. L'espace extérieur perd son attrait, on hésite à y installer le mobilier ou à recevoir. Le bois composite verdit, le carrelage se tache, la pierre se patine d'une couche sombre difficile à identifier.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver l'aspect d'origine. Le diagnostic préalable identifie le support, son état, les zones à traiter en priorité. La méthode s'adapte : pression contrôlée sur matériaux résistants, nettoyage doux sur surfaces poreuses ou fragiles.</p>",
      uniqueDeepDive:
        '<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché. Les jardinières et plantes sont écartées de la zone de travail. Les menuiseries — baies vitrées, portes, seuils — reçoivent une protection pour éviter les projections.</p>\n<p class="mt-4">Un balayage élimine les gros dépôts : feuilles, terre, débris végétaux accumulés dans les angles et contre les murets.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Le produit est sélectionné selon le support identifié. Pierre naturelle, carrelage, bois ou composite : chaque matériau reçoit un traitement adapté. Le brossage — manuel ou mécanique — décolle les salissures incrustées et les dépôts verts.</p>\n<p class="mt-4">Sur les surfaces compatibles, une haute pression contrôlée complète l\'action. Les joints et matériaux poreux sont traités avec précaution pour préserver leur intégrité.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L\'eau est évacuée vers les points d\'écoulement existants. Les plantations voisines sont préservées. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts.</p>\n<p class="mt-4">Des conseils d\'entretien saisonnier sont transmis pour prolonger le résultat obtenu.</p>',
      specificChallenges: [
        "Noircissement accéléré sur les terrasses exposées aux axes routiers (Avenue de Versailles, N7).",
        "Mousse et lichens persistants dans les zones ombragées des quartiers pavillonnaires.",
        "Supports mixtes : dalles sur plots, pierre naturelle et bois composite demandent des méthodes distinctes.",
        "Gestion de l'eau délicate sur les terrasses en étage ou en copropriété dense.",
        "Mobilier et plantes à protéger avant intervention sur les terrasses aménagées.",
      ],
      faqAdditions: [
        {
          question:
            "Ma terrasse en pierre proche de l'Avenue de Versailles est noircie par la pollution : comment la nettoyer sans abîmer le matériau ?",
          answer:
            "<p>La pierre naturelle exposée au trafic routier accumule des particules fines qui pénètrent en surface. Un nettoyage basse pression associé à un produit désincrustant adapté permet de retirer ce voile sans attaquer la pierre. La pression est ajustée selon la porosité du matériau pour éviter toute dégradation.</p>",
        },
        {
          question:
            "Ma terrasse développe de la mousse chaque année malgré les nettoyages : quel traitement pour éviter que ça revienne ?",
          answer:
            "<p>Les zones humides et ombragées favorisent la repousse rapide des mousses et lichens. Après le nettoyage mécanique, un traitement anti-mousse préventif est appliqué. Ce produit ralentit la réapparition des dépôts verts pendant plusieurs mois, selon l'exposition et les conditions climatiques locales.</p>",
        },
        {
          question:
            "Faut-il utiliser la haute pression sur une terrasse en dalles très encrassée ou privilégier un nettoyage plus doux ?",
          answer:
            "<p>Cela dépend du type de dalles et de leur état. Les dalles béton ou carrelage supportent généralement une pression contrôlée. Les dalles gravillonnées ou les joints fragiles nécessitent une approche plus douce. Le diagnostic initial permet de choisir la méthode adaptée sans risquer d'endommager la surface.</p>",
        },
        {
          question:
            "Pour la terrasse d'un restaurant à Thiais Village, comment gérer le mobilier et les plantes pendant l'intervention ?",
          answer:
            "<p>Le mobilier est déplacé ou regroupé et bâché pour le protéger des projections. Les jardinières sont écartées de la zone de travail. L'intervention peut être planifiée en dehors des heures d'ouverture pour limiter la gêne. Le mobilier est remis en place une fois le séchage suffisant.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux, déménagement ou avant état des lieux, avec traitement de chaque pièce et contrôle qualité avant remise des clés.",
      whyUsBullets: [
        "Connaissance des copropriétés et pavillons du secteur, habitude des rotations locatives liées à la zone aéroportuaire.",
        "Polyvalence sur tous types de sols et finitions : carrelage, parquet, faïence, surfaces peintes récemment.",
        "Réactivité sous 48 à 72h, coordination directe avec agences et artisans pour respecter vos échéances.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines de travaux ou une rotation locative rapide, un appartement accumule poussières de chantier, traces de colle et résidus sur toutes les surfaces. Dans les secteurs proches de la <strong>Gare Pont de Rungis - Aéroport d'Orly</strong>, la demande de remise en état reste soutenue : personnel aéroportuaire en mobilité, locataires en turnover fréquent, propriétaires pressés par les délais d'agence.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite l'état des lieux et évite les litiges sur le dépôt de garantie. Dans les appartements T2/T3 en copropriétés comme dans les maisons pavillonnaires du secteur, les sols carrelage et parquets récents demandent un traitement adapté pour éliminer voiles de ciment, projections de peinture et poussières fines sans abîmer les finitions.</p>\n<p class=\"mt-4\">L'intervention couvre l'ensemble du bien : pièces de vie, cuisine, sanitaires, placards. La coordination avec agences immobilières ou artisans permet de respecter les délais serrés imposés par la rotation locative, tout en garantissant un niveau de propreté conforme aux attentes d'un état des lieux sortant.</p>",
      uniqueDeepDive:
        '<h3>Pièces de vie et chambres</h3>\n<p>Le dépoussiérage commence par les plafonds, luminaires et plinthes avant de traiter murs et surfaces verticales. Les sols reçoivent une aspiration complète puis un lavage adapté au revêtement : eau claire sur carrelage, produit neutre sur parquet flottant.</p>\n<p class="mt-4">Les interrupteurs, poignées et radiateurs sont nettoyés individuellement. Les placards sont vidés de leurs résidus et essuyés intérieurement.</p>\n\n<h3>Cuisine et pièces d\'eau</h3>\n<p>Plans de travail, crédence et électroménager sont dégraissés. La faïence et les joints de salle de bain reçoivent un traitement anticalcaire. Les sanitaires sont désinfectés, robinetterie comprise.</p>\n<p class="mt-4">Les traces de silicone ou de mastic récent sont retirées délicatement sans endommager les supports.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les vitres intérieures sont nettoyées sur les deux faces accessibles. Les éventuelles traces de peinture ou colle sur sols et menuiseries sont traitées avec solvant adapté.</p>\n<p class="mt-4">Un contrôle pièce par pièce valide le niveau de propreté avant remise des clés ou passage de l\'agence.</p>',
      specificChallenges: [
        "Délais serrés imposés par les agences pour les états des lieux en zone à forte rotation.",
        "Résidus de chantier tenaces : voiles de ciment, projections de peinture, traces de colle sur parquets neufs.",
        "Coordination nécessaire avec artisans encore présents ou gardiens de copropriété pour accès au logement.",
        "Sols fragiles (parquet flottant récent) demandant des produits neutres et un séchage contrôlé.",
        "Attentes élevées des propriétaires bailleurs habitués aux standards locatifs du secteur Orly-Rungis.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans un appartement proche de la gare Pont de Rungis, quelles différences avec un ménage classique ?",
          answer:
            "<p>Le protocole fin de chantier inclut le retrait des voiles de ciment, des projections de peinture et des résidus de colle. Chaque surface est traitée avec des produits adaptés au support. Un ménage classique se limite au dépoussiérage et lavage courant, sans traitement des traces de travaux.</p>",
        },
        {
          question:
            "Si l'agence demande une intervention urgente après état des lieux près de la gare, quels sont vos délais réels ?",
          answer:
            "<p>Nous intervenons généralement sous 48 à 72 heures selon la taille du logement et notre planning. Pour les demandes très urgentes liées à une remise de clés imminente, un créneau prioritaire peut être proposé après échange téléphonique avec l'agence ou le propriétaire.</p>",
        },
        {
          question:
            "Comment calculez-vous le tarif pour la remise en état d'un appartement T3 ou T4 à Thiais avant état des lieux ?",
          answer:
            "<p>Le devis tient compte de la surface, du nombre de pièces, de l'état général et du type d'intervention demandé. Un appartement après travaux nécessite plus de temps qu'un logement simplement libéré. Nous établissons un chiffrage après description précise ou visite rapide si nécessaire.</p>",
        },
        {
          question:
            "Après travaux avec traces de peinture ou colle sur les sols, quel niveau de propreté puis-je attendre ?",
          answer:
            "<p>L'objectif est un logement prêt pour l'état des lieux : sols sans traces visibles, surfaces propres, sanitaires désinfectés. Les résidus de peinture et colle sont retirés avec solvants adaptés. Le résultat dépend de l'état initial, mais nous visons un rendu conforme aux attentes d'une agence ou d'un bailleur.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
