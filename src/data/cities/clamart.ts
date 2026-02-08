import type { City } from "~/types/geo";

const city: City = {
  name: "Clamart",
  slug: "clamart",
  postalCodes: ["92140"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Clamart pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Du quartier Panorama aux résidences proches de l'Hôpital Percy, une organisation adaptée au bâti local et aux contraintes d'accès.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro: "<p>Siège de l'Hôpital Percy et bordée par le Bois de Clamart, la commune présente des <strong>configurations variées</strong> qui demandent une gestion coordonnée. Klinova s'appuie sur une connaissance précise des secteurs pour organiser ses interventions sans improvisation.</p>\n<p class=\"mt-4\">Propreté des halls, entretien des sous-sols, remise en état des extérieurs : chaque prestation suit un protocole défini. L'équipe adapte ses horaires et son matériel selon les contraintes de chaque site, avec un reporting disponible sur demande.</p>\n<ul>\n  <li><strong>Coordination terrain :</strong> Planification tenant compte des accès Vigik, des horaires de gardiennage et des jours de marché au Trosy pour limiter les blocages.</li>\n  <li><strong>Matériel adapté au bâti :</strong> Équipements dimensionnés pour les parkings résine du quartier Panorama comme pour les sous-sols béton des résidences anciennes.</li>\n  <li><strong>Suivi structuré :</strong> Compte-rendu d'intervention transmis aux syndics et gestionnaires, traçabilité des passages et des points traités.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings résine</strong> du quartier Panorama : entretien régulier pour éviter l'encrassement des revêtements neufs.",
    "Halls des résidences proches de la <strong>gare Transilien</strong> : flux quotidien et poussières à traiter fréquemment.",
    "Balcons exposés sud le long de l'<strong>A86</strong> : dépôts de pollution grasse nécessitant un décrassage adapté.",
    "Sous-sols anciens en <strong>centre-ville</strong> : béton brut, rampes étroites, ventilation parfois limitée.",
    "Copropriétés bordant le <strong>Bois de Clamart</strong> : accumulation de feuilles et mousse sur les extérieurs.",
    "Accès sécurisés <strong>Vigik</strong> généralisés dans les résidences récentes : coordination préalable indispensable.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Gare",
    "Percy / Schneider",
    "Jardin Parisien",
    "Trivaux - La Garenne",
    "Petit Clamart",
    "Panorama",
  ],
  nearbyCities: [
        "chatillon",
        "issy-les-moulineaux",
        "vanves",
        "bagneux",
        "montrouge",
        "cachan",
        "arcueil",
        "gentilly",
        "chevilly-larue",
        "villejuif"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Clamart",
    "Hôpital d'Instruction des Armées Percy",
    "Bois de Clamart",
    "Gare de Clamart",
    "Quartier Panorama",
    "Zone d'Activités du Petit Clamart",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous vos interventions dans les secteurs où le stationnement est difficile ?",
      answer: "<p>En centre-ville et autour de la gare de Clamart, nous repérons les <strong>créneaux de livraison</strong> et les emplacements autorisés avant chaque passage. Le matériel est conditionné pour un déchargement rapide. Si nécessaire, nous décalons l'intervention en début de matinée pour éviter les pics de circulation.</p>",
    },
    {
      question: "Pouvez-vous intervenir dans des résidences équipées de badges Vigik ?",
      answer: "<p>Oui, c'est une configuration courante à Clamart, notamment dans les résidences récentes. Nous récupérons les <strong>accès auprès du syndic ou du gardien</strong> en amont. L'équipe dispose des badges nécessaires pour accéder aux parties communes, parkings et locaux techniques sans solliciter les occupants.</p>",
    },
    {
      question: "Quel délai prévoir pour une première intervention sur un site que vous ne connaissez pas ?",
      answer: "<p>Après réception de la demande, nous réalisons un <strong>repérage rapide</strong> pour évaluer les surfaces, les accès et les contraintes spécifiques. Le délai habituel entre la validation du devis et la première intervention est de 48 à 72 heures, sauf urgence où nous pouvons réduire ce délai.</p>",
    },
    {
      question: "Comment limitez-vous la gêne pour les résidents lors des interventions ?",
      answer: "<p>Nous privilégions les <strong>horaires décalés</strong> : tôt le matin pour les halls et parties communes, journée pour les parkings souterrains. Le balisage est systématique, et l'équipe informe le gardien ou le gestionnaire de l'avancement. Les zones traitées restent accessibles dès séchage.</p>",
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
  // Ici, tous services demandés sont inclus.
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction en profondeur des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des configurations de bureaux et copropriétés à Clamart, du Petit Clamart au quartier Panorama.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours épais.",
        "Interventions planifiées en dehors des heures de présence ou en horaires décalés selon vos contraintes.",
      ],
      uniqueIntro: "<p>Dans la <strong>Zone d'Activités du Petit Clamart</strong>, les moquettes des open spaces et couloirs de bureaux accumulent rapidement poussières fines et traces de passage. Le trafic quotidien des collaborateurs laisse des marques grises sur les zones de circulation, tandis que les salles de réunion conservent des auréoles de café ou de thé difficiles à éliminer avec un simple aspirateur. Ces dépôts s'incrustent dans les fibres et ternissent l'aspect général des locaux.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux <strong>dalles textiles et velours ras</strong> leur aspect d'origine. Les halls d'accueil retrouvent une image soignée, les espaces de travail gagnent en confort visuel. Pour les copropriétés du quartier Panorama équipées de moquettes bouclées dans les parties communes, le ravivage régulier limite les plaintes des résidents et préserve la valeur du bâti.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des horaires de bureaux et des accès contrôlés par digicode ou badge Vigik. Un diagnostic préalable identifie les zones prioritaires, les types de fibres et les taches à traiter spécifiquement avant le passage du matériel d'extraction.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intense</h3>\n<p>Les couloirs et accès principaux concentrent l'essentiel de l'encrassement. Après aspiration préalable, l'injection-extraction cible ces bandes de passage avec plusieurs passes successives. Les fibres compactées par le piétinement retrouvent leur gonflant, les traces grises disparaissent.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les open spaces et bureaux cloisonnés reçoivent un traitement adapté au type de dalle textile. Le <strong>détachage ciblé</strong> intervient sur les auréoles de boissons ou marques de roulettes de siège. Les plinthes et bas de cloisons sont protégés pendant l'opération.</p>\n\n<h3>Halls et parties communes</h3>\n<p>Dans les entrées d'immeubles et paliers, le revêtement subit un trafic mixte (chaussures extérieures, poussettes). L'extraction maximale limite le temps de séchage. Selon l'épaisseur de la moquette et la ventilation du lieu, le sol redevient <strong>praticable sous 4 à 8 heures</strong>. Un balisage temporaire signale les zones humides aux occupants.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux du Petit Clamart : <strong>encrassement rapide</strong> des zones de passage.",
        "Halls de copropriété Panorama : moquettes bouclées exposées aux salissures extérieures.",
        "Accès sécurisés (Vigik, digicode) nécessitant une <strong>coordination préalable</strong> avec le gestionnaire.",
        "Stationnement restreint en centre-ville : organisation logistique à anticiper.",
        "Séchage à maîtriser pour limiter la gêne dans les espaces partagés.",
      ],
      faqAdditions: [
        {
          question: "Avec les escaliers étroits du centre-ville, comment organisez-vous l'acheminement du matériel pour nettoyer une moquette d'immeuble ?",
          answer: "<p>Le matériel d'injection-extraction se démonte en éléments transportables. Pour les cages d'escalier sans ascenseur, nous prévoyons un temps de mise en place adapté et protégeons les marches pendant le passage. La coordination avec le gardien ou le syndic facilite l'accès aux parties communes.</p>",
        },
        {
          question: "Comment traitez-vous des taches anciennes et incrustées dans les moquettes des halls de bureaux du Petit Clamart ?",
          answer: "<p>Un <strong>détachage ciblé</strong> précède l'extraction. Les auréoles de café, traces de semelles ou marques grasses reçoivent un pré-traitement adapté à leur nature. Plusieurs passes d'injection-extraction sur les zones concernées permettent de déloger les résidus profonds. Certaines taches très anciennes peuvent s'atténuer sans disparaître totalement.</p>",
        },
        {
          question: "Quelle méthode recommandez-vous pour les dalles textiles en open space dans la ZA Petit Clamart (shampouinage vs extraction) ?",
          answer: "<p><strong>L'injection-extraction</strong> reste la méthode la plus efficace pour les dalles de bureaux. Elle extrait les salissures en profondeur sans détremper le support. Le shampouinage convient davantage à un entretien léger. Pour les open spaces à fort passage, l'extraction assure un résultat durable et un séchage plus rapide.</p>",
        },
        {
          question: "En cas de stationnement restreint près des immeubles Panorama, quelles contraintes logistiques devez-vous prévoir pour le nettoyage de moquette ?",
          answer: "<p>Nous repérons les possibilités de stationnement avant l'intervention : parking souterrain accessible, place livraison ou créneau autorisé. Le matériel est acheminé en une rotation pour limiter les allers-retours. Si nécessaire, nous décalons l'horaire pour éviter les pics de saturation en fin de journée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Un décrassage complet des sols de parking, avec traitement des zones critiques et gestion stricte des eaux de lavage pour un rendu propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des parkings du secteur Hunebelle et des contraintes d'accès liées aux événements sportifs locaux.",
        "Matériel adapté aux revêtements béton et enrobé, avec gestion rigoureuse des eaux de lavage vers les évacuations.",
        "Intervention planifiée par zones pour maintenir l'accès partiel et balisage sécurisé pendant toute la durée du chantier.",
      ],
      uniqueIntro: "<p>Les traces noires s'accumulent sur le béton des parkings souterrains, particulièrement <strong>autour du Stade Hunebelle</strong> où la rotation des véhicules lors des événements sportifs accélère l'encrassement. Huile moteur, résidus de pneus et poussières grasses forment une couche adhérente que le simple balayage ne suffit pas à éliminer.</p>\n<p class=\"mt-4\">Un sol de parking dégradé pose des problèmes concrets : glissance sur les rampes d'accès, plaintes de copropriétaires, image négative pour les visiteurs. Les <strong>revêtements béton brut ou enrobé</strong>, fréquents dans les résidences anciennes comme dans les zones d'activités, nécessitent un lavage mécanisé adapté à leur porosité et à leur état de surface.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec les syndics et gestionnaires pour limiter la gêne aux usagers. Balisage sécurisé, rotation par zones et créneaux horaires adaptés permettent de maintenir l'accès partiel pendant le chantier.</p>",
      uniqueDeepDive: "<h3>Sol dégraissé et rampes sécurisées</h3>\n<p>Le résultat visé : un revêtement débarrassé des dépôts gras, des rampes antidérapantes et des rigoles dégagées. Pour y parvenir, le diagnostic préalable identifie le type de sol, l'état des évacuations et les zones critiques à traiter en priorité.</p>\n\n<h3>Autolaveuse et haute pression combinées</h3>\n<p>Le balayage préalable retire les débris grossiers. L'autolaveuse effectue ensuite des <strong>passes mécanisées</strong> sur les surfaces planes, tandis que la haute pression associée à un dégraissant professionnel traite les angles morts, pieds de murs et zones tachées. Les rampes inclinées reçoivent une attention particulière pour préserver leur adhérence.</p>\n\n<h3>Eaux maîtrisées et finitions</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention si demandé. Le compte-rendu transmis au gestionnaire inclut les recommandations de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Taches d'huile anciennes <strong>incrustées</strong> dans le béton poreux des parkings souterrains du secteur Gare.",
        "Rampes d'accès en pente nécessitant un <strong>traitement antidérapant</strong> adapté à la topographie vallonnée.",
        "Rotation véhicules à coordonner lors des événements au Stade Hunebelle.",
        "Rigoles et regards parfois obstrués dans les parkings anciens du centre-ville.",
        "Horaires d'intervention à ajuster selon les flux résidentiels et professionnels de la ZA.",
      ],
      faqAdditions: [
        {
          question: "Comment planifiez-vous les interventions de nettoyage compte tenu de la forte rotation véhicules lors des événements au Stade Hunebelle ?",
          answer: "<p>L'intervention se découpe en zones successives, libérées au fur et à mesure. Le balisage temporaire guide les usagers vers les emplacements disponibles. Les créneaux sont calés en dehors des pics d'affluence pour limiter les contraintes de stationnement pendant les événements sportifs.</p>",
        },
        {
          question: "Quelle méthode utilisez-vous pour décrasser des taches d'huile anciennes dans les parkings souterrains proches de la Gare de Clamart ?",
          answer: "<p>Un dégraissant professionnel est appliqué sur les zones imprégnées avant le passage de l'autolaveuse. Pour les taches tenaces <strong>incrustées</strong> dans le béton poreux, un brossage mécanique complète le traitement. Le résultat dépend de l'ancienneté et de la profondeur de pénétration dans le revêtement.</p>",
        },
        {
          question: "Quelles différences d'approche appliquez-vous entre un parking souterrain en ZA et un parking aérien de zone commerciale ?",
          answer: "<p>Le souterrain concentre les dépôts gras et nécessite une gestion stricte des eaux vers les évacuations intérieures. Le parking aérien subit davantage les salissures extérieures et permet un rinçage plus direct. Le matériel et les produits sont adaptés au revêtement : résine, béton brut ou enrobé.</p>",
        },
        {
          question: "Quels créneaux horaires recommandez-vous pour le nettoyage de parking afin de limiter la gêne en secteur centre/gare ?",
          answer: "<p>Les interventions matinales avant 8h ou en début d'après-midi conviennent aux résidences. Pour les parkings d'entreprises, les créneaux de nuit ou de week-end évitent de perturber l'activité. Le planning est validé avec le <strong>syndic ou le gestionnaire</strong> selon les contraintes propres à chaque site.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Clamart, avec traitement adapté au support et gestion des écoulements pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons sud pollués par l'A86, côté bois plus humide et propice aux mousses.",
        "Pression et produits ajustés selon le support — dalles sur plots, carrelage ou béton — pour un résultat sans dégradation.",
        "Protection systématique du voisinage : gestion des écoulements et intervention discrète en copropriété dense.",
      ],
      uniqueIntro: "<p>Dans le <strong>quartier Panorama</strong>, les balcons et loggias des étages moyens accumulent rapidement poussières fines et dépôts verts. L'exposition variable selon l'orientation — plein sud face aux axes routiers ou côté bois — accélère l'encrassement des surfaces. Les traces grises s'incrustent dans les joints, le garde-corps perd son éclat, et l'espace extérieur devient moins agréable à utiliser.</p>\n<p class=\"mt-4\">Un balcon propre change la perception du logement. Les résidences récentes présentent souvent des <strong>dalles sur plots ou du carrelage</strong>, tandis que les immeubles plus anciens conservent du béton brut. Chaque support réagit différemment aux intempéries et à la pollution. Sans intervention adaptée, les mousses s'installent durablement et les taches deviennent plus difficiles à éliminer.</p>\n<p class=\"mt-4\">Notre intervention prend en compte l'exposition du balcon et les contraintes d'accès propres aux copropriétés clamartoises. Nous protégeons le mobilier, les plantes et les menuiseries avant toute action, puis adaptons la pression et les produits au revêtement identifié lors du diagnostic initial.</p>",
      uniqueDeepDive: "<h3>Sol et revêtement principal</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les <strong>gros débris</strong> — feuilles, terre, résidus divers — sont retirés manuellement. Le sol reçoit ensuite un produit adapté : désincrustant pour carrelage, traitement doux pour dalles sur plots, nettoyant alcalin pour béton brut.</p>\n<p class=\"mt-4\">Un brossage mécanique ou manuel déloge les salissures incrustées. Le rinçage s'effectue à pression contrôlée pour préserver les joints et éviter les projections vers les étages inférieurs.</p>\n\n<h3>Garde-corps et éléments verticaux</h3>\n<p>Les barreaux, rambardes et vitrages périphériques sont traités séparément. Un produit adapté au métal ou au verre élimine traces de pollution et coulures. Les murs mitoyens accessibles bénéficient du même soin si nécessaire.</p>\n\n<h3>Séchage et conseils</h3>\n<p>L'eau résiduelle est raclée pour accélérer le séchage. Nous vérifions l'absence de coulures chez les voisins du dessous. Avant de partir, nous partageons quelques conseils d'entretien courant pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Dalles sur plots au quartier Panorama : <strong>nettoyage sans déplacer</strong> les éléments porteurs.",
        "Pollution routière (A86) sur les balcons exposés sud : dépôts gras nécessitant un <strong>dégraissage ciblé</strong>.",
        "Proximité du Bois de Clamart : mousse et humidité persistantes côté nord.",
        "Copropriétés denses : gestion stricte des écoulements pour éviter les plaintes de voisinage.",
        "Étages élevés sans ascenseur en centre ancien : acheminement du matériel adapté.",
      ],
      faqAdditions: [
        {
          question: "Pour les balcons carrelés du quartier Panorama, quelle méthode préconisez-vous pour enlever mousse et salissures sans abîmer les joints ?",
          answer: "<p>Nous appliquons un produit désincrustant à pH contrôlé, suivi d'un brossage manuel sur les joints fragiles. Le rinçage s'effectue à pression modérée pour déloger les résidus sans creuser les interstices. Cette approche préserve l'étanchéité tout en éliminant les dépôts verts installés.</p>",
        },
        {
          question: "Comment éliminez-vous les dépôts de suie et pollution sur les balcons exposés sud le long de l'A86 à Clamart ?",
          answer: "<p>Ces traces grasses nécessitent un <strong>dégraissant alcalin</strong> appliqué avant brossage. La solution dissout les particules de combustion sans attaquer le revêtement. Un rinçage soigné évite les auréoles résiduelles. Sur les balcons très encrassés, un second passage peut être nécessaire pour retrouver la teinte d'origine.</p>",
        },
        {
          question: "Quelle différence de protocole appliquez-vous entre un balcon en dalle sur plots (Panorama) et un balcon en béton brut ?",
          answer: "<p>Les dalles sur plots supportent mal la <strong>haute pression</strong> : nous travaillons avec un jet doux et un brossage ciblé. Le béton brut tolère davantage de pression, mais absorbe les produits — nous dosons donc avec précision. Dans les deux cas, le diagnostic initial détermine la méthode pour éviter toute dégradation.</p>",
        },
        {
          question: "En centre ancien sans ascenseur, comment gérez-vous l'équipement et la sécurité pour nettoyer un balcon en étage élevé ?",
          answer: "<p>Nous utilisons du matériel compact et transportable à la main. L'intervention est planifiée pour limiter les allers-retours dans les escaliers étroits. La sécurité passe par un balisage discret et une gestion rigoureuse des écoulements pour ne pas gêner les occupants des étages inférieurs.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Clamart, notamment les balcons proches des zones boisées et des marchés alimentaires.",
        "Protocole rigoureux avec EPI complets, confinement systématique et produits de désinfection homologués.",
        "Évacuation sécurisée des déchets contaminés et coordination discrète en copropriété pour limiter la gêne.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons situés en bordure du Bois de Clamart accumulent des <strong>couches de fientes</strong> qui s'incrustent dans le béton et les joints. L'odeur s'installe, le linge étendu absorbe les particules, et l'espace extérieur devient inutilisable. Les pigeons reviennent chaque jour aux mêmes endroits, attirés par les arbres proches et les recoins de façade.</p>\n<p class=\"mt-4\">Sur les immeubles anciens du centre-ville, les corniches et garde-corps présentent des anfractuosités où les déjections s'accumulent plus vite qu'ailleurs. Le béton se dégrade sous l'acidité des fientes, la peinture s'écaille, et les voisins du dessous subissent les coulures lors des pluies. Retrouver un balcon propre et sain change le quotidien : plus d'hésitation à ouvrir les fenêtres, plus de gêne vis-à-vis du voisinage.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter le problème en profondeur. Diagnostic de l'état des supports, protection de l'intérieur du logement, désinfection adaptée aux surfaces concernées, et recommandations pour limiter le retour des oiseaux.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est d'éliminer toute trace de fientes et de neutraliser les agents pathogènes présents sur les surfaces. Le sol, le garde-corps, les vitrages et les murs mitoyens retrouvent un état sain, sans odeur résiduelle.</p>\n\n<h3>Sécurisation et confinement préalable</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant manipulation pour neutraliser les <strong>poussières contaminées</strong>.</p>\n\n<h3>Collecte, traitement et rinçage</h3>\n<p>Les déjections sont ramassées et conditionnées en sacs étanches. Un produit virucide et bactéricide est appliqué sur l'ensemble des supports avec un temps de contact respecté. Après rinçage, le balcon nécessite un <strong>délai d'aération</strong> avant réutilisation. Des solutions de dissuasion peuvent être proposées : pics sur les rebords, filets ou gel répulsif selon la configuration.</p>",
      specificChallenges: [
        "Proximité du Bois de Clamart : les balcons des derniers étages subissent une <strong>exposition permanente</strong> aux pigeons.",
        "Corniches et recoins des immeubles anciens du centre favorisent l'accumulation rapide des fientes.",
        "Présence du marché du Trosy : les oiseaux sont attirés par les déchets alimentaires à proximité.",
        "Copropriétés denses : la <strong>gestion des écoulements</strong> et la coordination avec les voisins demandent une organisation précise.",
        "Supports variés (béton brut, carrelage, garde-corps métalliques) nécessitant des produits adaptés à chaque matériau.",
      ],
      faqAdditions: [
        {
          question: "Les balcons proches du Bois de Clamart sont couverts de fientes : quels sont les risques sanitaires à traiter en priorité ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les <strong>voies respiratoires</strong> si les poussières sont inhalées. Sur les balcons exposés aux arbres du Bois de Clamart, l'accumulation est souvent importante. L'assainissement et la désinfection permettent d'éliminer ces risques et de rendre l'espace utilisable.</p>",
        },
        {
          question: "Quelle procédure et quels EPI utilisez-vous pour le traitement des fientes de pigeons sur balcon à Clamart ?",
          answer: "<p>L'intervenant porte masque FFP2, gants, lunettes et combinaison jetable. La zone est <strong>confinée par bâchage</strong> pour protéger l'intérieur du logement. Les fientes sont humidifiées avant collecte pour éviter l'envol de particules. Un produit virucide est ensuite appliqué sur l'ensemble des supports concernés.</p>",
        },
        {
          question: "Après traitement d'un balcon proche du marché du Trosy, quel produit garantit une désinfection efficace sans dégrader le support ?",
          answer: "<p>Nous utilisons des produits virucides et bactéricides homologués, compatibles avec le béton, le carrelage et les garde-corps métalliques. Le temps de contact est respecté avant rinçage. Ces produits éliminent les agents pathogènes sans attaquer les surfaces, même sur les balcons anciens du centre-ville.</p>",
        },
        {
          question: "Comment organisez-vous l'évacuation des déchets contaminés après intervention dans une copropriété du centre-ville ?",
          answer: "<p>Les fientes collectées sont conditionnées en sacs étanches dès le ramassage. L'évacuation se fait discrètement, sans passage par les parties communes ouvertes. En copropriété dense, nous coordonnons l'intervention pour limiter la gêne et respecter les horaires sensibles définis avec le gardien ou le syndic.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et nettoyage en profondeur de vos canapés, tapis et matelas à Clamart, avec extraction des salissures incrustées et séchage maîtrisé pour une remise en usage rapide.",
      whyUsBullets: [
        "Connaissance des typologies résidentielles clamartoises, des grands ensembles aux pavillons familiaux du Jardin Parisien.",
        "Détachage enzymatique adapté à chaque fibre, extraction puissante et contrôle du temps de séchage.",
        "Intervention planifiée selon vos disponibilités, matériel compact pour accès en étage avec ou sans ascenseur.",
      ],
      uniqueIntro: "<p>Comment préserver l'état d'un canapé familial quand les enfants y passent leurs après-midi, que le chien s'y installe régulièrement, et que les taches s'accumulent sans qu'on sache vraiment comment les traiter ? Dans les résidences et les secteurs familiaux de Clamart, les textiles d'assise encaissent un usage intensif. Les traces de café, les auréoles d'humidité et les odeurs persistantes finissent par s'incruster dans les fibres.</p>\n<p class=\"mt-4\">Un nettoyage adapté redonne au tissu sa fraîcheur d'origine et supprime les allergènes accumulés. Dans les <strong>intérieurs T2 à T5</strong>, qu'il s'agisse de parquet ancien ou de sols stratifiés récents, le canapé reste souvent la pièce centrale du salon. Son aspect conditionne l'impression générale du logement, surtout lors d'une visite ou d'un changement de locataire.</p>\n<p class=\"mt-4\">La présence de <strong>cabinets médicaux et salles d'attente</strong> dans le secteur Percy génère également des besoins spécifiques : fauteuils patients, sièges de consultation, mobilier d'accueil. Une intervention structurée permet de traiter chaque textile selon sa nature et son niveau d'encrassement.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'obtenir un tissu débarrassé des salissures visibles et des résidus organiques. Chaque fibre retrouve sa souplesse, les odeurs disparaissent et les couleurs se ravivent. Le diagnostic initial identifie le type de textile (coton, velours, synthétique) et la nature des taches pour adapter le traitement.</p>\n\n<h3>Détachage ciblé puis injection-extraction</h3>\n<p>Un pré-traitement enzymatique cible les taches tenaces (urine, graisse, vin). Un test discret sur zone cachée valide la compatibilité avec le tissu. L'injection-extraction projette une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de salissures. La pression et la température s'ajustent selon la fragilité du textile.</p>\n\n<h3>Extraction maximale et consignes de séchage</h3>\n<p>L'aspiration finale retire le maximum d'humidité pour accélérer le séchage. Selon l'épaisseur du rembourrage et la ventilation de la pièce, comptez entre 4 et 8 heures avant réutilisation. Des conseils d'entretien prolongent la durée de vie du textile entre deux interventions.</p>",
      specificChallenges: [
        "Taches d'origine animale fréquentes dans les foyers proches du Bois de Clamart.",
        "Canapés volumineux dans des appartements T3-T4 parfois sans ascenseur.",
        "Textiles fragiles (velours, lin) nécessitant un test préalable sur zone cachée.",
        "Délai de séchage variable selon ventilation et saison : 4 à 8 heures en moyenne.",
        "Sièges de salles d'attente médicales exigeant une désinfection renforcée.",
      ],
      faqAdditions: [
        {
          question: "Quel traitement technique recommandez-vous pour un canapé tissu des résidences de la Plaine afin de préserver la fibre ?",
          answer: "<p>Nous réalisons d'abord un diagnostic du textile pour identifier la fibre (coton, synthétique, velours). Ensuite, l'injection-extraction adapte pression et température au support. Dans les résidences de la Plaine, les canapés familiaux subissent un usage intensif : le traitement cible les zones d'assise les plus sollicitées.</p>",
        },
        {
          question: "Comment traitez-vous une tache d'urine d'animal sur un canapé tissu dans une maison familiale du Jardin Parisien ?",
          answer: "<p>Un pré-traitement enzymatique décompose les composants organiques de l'urine avant l'extraction. Cette étape neutralise l'odeur en profondeur, pas seulement en surface. Dans les foyers du Jardin Parisien où les animaux de compagnie sont fréquents, ce protocole évite la réapparition des odeurs après séchage.</p>",
        },
        {
          question: "Quel temps de séchage estimez-vous pour un shampouinage de canapé en étage sans ascenseur à Clamart ?",
          answer: "<p>Le séchage dépend de l'épaisseur du rembourrage et de l'aération de la pièce. Comptez entre 4 et 8 heures en conditions normales. En étage sans ascenseur, nous utilisons du matériel compact qui ne ralentit pas l'intervention. Une bonne ventilation après notre passage accélère le processus.</p>",
        },
        {
          question: "Comment préparer le logement (meubles, accès) avant l'intervention de nettoyage de canapé dans le secteur Percy ?",
          answer: "<p>Dégagez l'espace autour du canapé pour faciliter l'accès sur tous les côtés. Retirez coussins amovibles et objets posés sur l'assise. Si vous êtes en étage, vérifiez l'accès (ascenseur ou escalier). Dans le secteur Percy, nous intervenons également dans les cabinets médicaux avec les mêmes consignes de préparation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse à Clamart : traitement des mousses, élimination des dépôts tenaces et protection adaptée au support pour retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des contraintes locales : exposition ombragée côté Bois, humidité persistante sur les terrasses nord du Jardin Parisien.",
        "Adaptation technique à chaque support : pierre, bois composite ou dalles gravillonnées, avec traitement anti-mousse ciblé si nécessaire.",
        "Organisation soignée : protection du mobilier et des plantations, gestion de l'écoulement d'eau sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Les traces verdâtres et les dépôts noircis sont visibles sur de nombreuses terrasses du secteur <strong>Place de la Mairie</strong> et des pavillons du <strong>Jardin Parisien</strong>. L'humidité ambiante, accentuée par la proximité du Bois de Clamart, favorise l'apparition de mousses qui s'étendent progressivement sur les dalles et le bois. Chaque saison ajoute une couche de feuilles mortes, de terre et de résidus organiques qui s'incrustent dans les joints.</p>\n<p class=\"mt-4\">Une terrasse glissante ou terne devient un espace qu'on évite plutôt qu'on investit. Sur les <strong>supports en pierre naturelle</strong> des maisons anciennes comme sur le <strong>bois composite</strong> des résidences récentes, la saleté accumulée altère l'aspect et fragilise les matériaux. Les taches grasses laissées par les barbecues familiaux compliquent encore l'entretien courant.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter chaque type de salissure avec la méthode adaptée. Nous établissons un diagnostic du support, protégeons le mobilier et les plantations, puis appliquons un protocole respectueux des matériaux pour redonner à votre terrasse son aspect d'origine.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les menuiseries et baies vitrées reçoivent une protection pour éviter les projections. Un balayage préalable élimine les feuilles, la terre et les débris accumulés.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Un produit spécifique est appliqué selon la nature de votre terrasse : dégraissant pour les taches de barbecue sur bois composite, traitement anti-mousse pour les dalles gravillonnées ou la pierre naturelle. Le brossage manuel ou mécanique décolle les salissures incrustées. La haute pression intervient uniquement sur les supports qui la tolèrent, avec une puissance contrôlée pour préserver les joints.</p>\n\n<h3>Rinçage et conseils</h3>\n<p>L'eau est évacuée vers les points d'écoulement existants. Les garde-corps et murets périphériques sont également nettoyés. Avant de partir, nous vous indiquons la fréquence d'entretien recommandée selon l'exposition de votre terrasse et la présence d'arbres à proximité.</p>",
      specificChallenges: [
        "Mousses et lichens fréquents sur les terrasses exposées nord, proches du Bois de Clamart.",
        "Supports variés selon les quartiers : pierre naturelle en centre-ville, bois composite dans le neuf.",
        "Taches grasses de barbecue sur les terrasses pavillonnaires du Jardin Parisien.",
        "Accès parfois limité depuis le jardin sur les parcelles mitoyennes.",
        "Feuilles et débris organiques accumulés par la végétation environnante.",
      ],
      faqAdditions: [
        {
          question: "Quelle méthode technique recommandez-vous pour nettoyer une terrasse en pierre fortement encrassée place de la Mairie ?",
          answer: "<p>Sur les terrasses en pierre naturelle du centre-ville, nous appliquons un traitement désincrustant adapté aux matériaux poreux. Le brossage mécanique décolle les salissures sans abîmer la surface. La haute pression n'intervient qu'à puissance réduite pour préserver les joints et éviter les éclats.</p>",
        },
        {
          question: "Comment traitez-vous les mousses et lichens sur une terrasse exposée nord proche du Bois de Clamart ?",
          answer: "<p>Les terrasses ombragées par la végétation du Bois accumulent mousse et lichens plus rapidement. Nous appliquons un traitement anti-mousse après nettoyage, qui agit progressivement pour limiter la repousse. L'effet préventif dure plusieurs mois selon l'exposition et l'humidité ambiante.</p>",
        },
        {
          question: "Quel protocole appliquez-vous pour enlever les traces grasses de barbecue sur une terrasse en bois composite ?",
          answer: "<p>Les résidus de graisse nécessitent un dégraissant spécifique qui n'altère pas les lames composites. Nous laissons agir le produit avant un brossage doux dans le sens des rainures. Le rinçage abondant élimine tout résidu sans laisser de film gras.</p>",
        },
        {
          question: "Quelles contraintes logistiques faut-il prévoir pour le nettoyage d'une terrasse accessible uniquement depuis un jardin mitoyen ?",
          answer: "<p>Nous convenons avec vous d'un créneau adapté pour limiter la gêne. Le matériel est acheminé manuellement si le passage est étroit. L'écoulement d'eau est orienté vers vos propres évacuations pour éviter tout débordement chez les voisins.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement à Clamart, coordonnée selon vos délais, pour une restitution propre et conforme aux exigences d'un état des lieux ou d'une livraison après travaux.",
      whyUsBullets: [
        "Connaissance des typologies locales : appartements récents du quartier Panorama comme meulières du Jardin Parisien.",
        "Polyvalence sur tous types de sols : parquet massif, stratifié, carrelage, carreau de ciment.",
        "Coordination souple avec agences et artisans, créneaux adaptés aux remises de clés.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou quelques années d'occupation, un logement accumule des traces que le ménage courant ne suffit plus à éliminer. Dans le <strong>secteur proche de la Gare de Clamart</strong>, où la rotation locative reste soutenue, les propriétaires et agences font régulièrement face à des remises en état urgentes avant signature d'un nouvel état des lieux.</p>\n<p class=\"mt-4\">Un nettoyage complet transforme la perception du bien : sols débarrassés des résidus de chantier, vitres intérieures sans voile, sanitaires détartrés. Pour les <strong>appartements neufs avec parquet flottant</strong> comme pour les <strong>maisons meulières au parquet massif et carrelage ancien</strong>, chaque surface reçoit un traitement adapté qui préserve les matériaux tout en restituant un aspect soigné.</p>\n<p class=\"mt-4\">L'organisation tient compte des contraintes locales : <strong>stationnement camionnette difficile en centre-ville et secteur Gare</strong>, coordination avec artisans ou agences, délais serrés avant remise des clés. Chaque intervention suit un plan établi en amont pour éviter les allers-retours et respecter vos échéances.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à habiter ou à visiter</h3>\n<p>L'objectif est de restituer un intérieur propre sur l'ensemble des surfaces : sols, murs, plinthes, menuiseries, vitres intérieures. Le résultat permet une remise de clés sans réserve ou une visite locative dans des conditions optimales.</p>\n\n<h3>Diagnostic et séquençage adapté au bien</h3>\n<p>Avant intervention, nous identifions la nature des sols, l'état des pièces d'eau et les éventuels résidus de chantier. Le plan de travail est calé sur vos contraintes horaires et sur les accès disponibles, notamment en cas de coordination avec d'autres intervenants.</p>\n\n<h3>Exécution méthodique pièce par pièce</h3>\n<p>Le dépoussiérage débute par les points hauts. Les pièces humides reçoivent un traitement détartrant et désinfectant. Les sols sont aspirés puis lavés selon leur revêtement. Les finitions incluent interrupteurs, poignées, placards intérieurs et traces résiduelles sur les vitres.</p>",
      specificChallenges: [
        "Rotation locative soutenue près de la Gare de Clamart : délais d'état des lieux souvent serrés.",
        "Livraisons régulières dans le quartier Panorama : nettoyage fin de chantier sur surfaces neuves.",
        "Maisons meulières avec parquet massif et carrelage ancien nécessitant des produits adaptés.",
        "Stationnement camionnette difficile en centre-ville : anticipation logistique indispensable.",
        "Coordination fréquente avec agences immobilières locales pour respecter les plannings de visite.",
      ],
      faqAdditions: [
        {
          question: "Que comprend typiquement un nettoyage fin de chantier pour appartements livrés dans le quartier Panorama ?",
          answer: "<p>L'intervention couvre l'évacuation des poussières de plâtre, le lavage des sols neufs en résine ou parquet flottant, le nettoyage des vitres intérieures et la remise en état des sanitaires. Les traces de peinture ou d'enduit sur les menuiseries sont traitées sans abîmer les finitions.</p>",
        },
        {
          question: "Quel délai d'intervention proposez-vous pour un nettoyage avant état des lieux dans le secteur de la Gare de Clamart ?",
          answer: "<p>Nous intervenons généralement sous 48 à 72 heures selon la taille du logement et la période. En cas d'urgence liée à une remise de clés imminente, un créneau prioritaire peut être organisé après échange sur les accès et le périmètre exact de la prestation.</p>",
        },
        {
          question: "Comment est tarifée une prestation de ménage complet pour un T3 bourgeois avec parquet massif à Clamart ?",
          answer: "<p>Le devis tient compte de la surface, du nombre de pièces, de l'état initial et du type de sols. Un T3 avec parquet ancien demande plus de précautions qu'un logement récent. Le tarif est communiqué après description du bien ou visite rapide si nécessaire.</p>",
        },
        {
          question: "Quels produits et précautions utilisez-vous pour protéger un parquet massif lors d'un nettoyage complet après travaux ?",
          answer: "<p>Nous employons des solutions au pH neutre, sans solvant agressif, appliquées avec des microfibres humides plutôt qu'un lavage à grande eau. Cette méthode préserve la finition du bois tout en éliminant les résidus de chantier sans risque de gonflement ou de traces.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;