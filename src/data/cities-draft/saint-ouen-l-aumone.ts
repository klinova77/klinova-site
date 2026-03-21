import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Ouen-l'Aumône",
  slug: "saint-ouen-l-aumone",
  postalCodes: ["95310"],

  department: {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Saint-Ouen-l'Aumône. Une organisation adaptée aux contraintes des zones d'activités et des résidences, avec une équipe réactive sur l'ensemble de la commune.",

  // hubIntro : HTML autorisé
  hubIntro: "<p>Saint-Ouen-l'Aumône concentre un tissu dense d'entreprises sur les ZAC des Béthunes et Bellevues, desservi par le RER C et le Transilien H. Klinova accompagne gestionnaires et syndics dans le maintien de la propreté des locaux professionnels comme des résidences.</p>\n<p class=\"mt-4\">Notre approche repose sur une <strong>coordination terrain régulière</strong>, des interventions planifiées selon vos contraintes d'exploitation, et un suivi documenté. Chaque site bénéficie d'un interlocuteur dédié pour ajuster les prestations aux besoins réels.</p>\n<ul>\n  <li><strong>Réactivité locale :</strong> Équipe basée en Île-de-France, capable d'intervenir rapidement sur la commune et les zones d'activités environnantes.</li>\n  <li><strong>Adaptation aux flux :</strong> Horaires décalés possibles pour limiter la gêne dans les halls d'entreprises ou les parties communes résidentielles.</li>\n  <li><strong>Suivi structuré :</strong> Reporting disponible sur demande, traçabilité des passages et remontée des anomalies constatées sur site.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Zones d'activités denses</strong> : trafic poids lourds générant poussières et salissures sur les abords.",
    "Parkings souterrains d'entreprises soumis à un usage intensif quotidien.",
    "Proximité de l'<strong>A15</strong> : dépôts de particules sur balcons et façades exposés.",
    "Halls d'immeubles à fort passage près des gares RER C et Transilien H.",
    "Accès sécurisés fréquents : digicodes et badges à coordonner avant intervention.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Quartier de la Prairie",
    "Quartier de l'Église",
    "Zone d'activités des Béthunes",
    "Zone d'activités des Bellevues",
    "Quartier Liesse",
  ],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Saint-Ouen-l'Aumône",
    "Gare RER C / Transilien H",
    "ZAC des Béthunes",
    "ZAC des Bellevues",
    "Abbaye de Maubuisson",
    "Autoroute A15",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Pouvez-vous intervenir sur les parcs d'activités de Saint-Ouen-l'Aumône en dehors des horaires de bureau ?",
      answer: "<p>Oui, nous proposons des <strong>créneaux décalés</strong> (tôt le matin, en soirée ou le week-end) pour éviter toute perturbation de l'activité. Les modalités d'accès sont définies en amont avec le gestionnaire du site pour garantir une intervention fluide.</p>",
    },
    {
      question: "Comment se déroule la prise de contact pour un devis ?",
      answer: "<p>Après un premier échange téléphonique ou par mail, nous organisons une <strong>visite technique</strong> sur place. Cette étape permet d'évaluer les surfaces, les contraintes d'accès et de proposer un devis adapté sous quelques jours.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur Saint-Ouen-l'Aumône ?",
      answer: "<p>Nous traitons les demandes urgentes selon disponibilité. En cas de sinistre ou de situation nécessitant une <strong>remise en état rapide</strong>, contactez-nous directement pour évaluer la faisabilité d'une intervention dans les meilleurs délais.</p>",
    },
    {
      question: "Comment gérez-vous les accès sécurisés dans les immeubles ou entreprises ?",
      answer: "<p>Nous travaillons régulièrement sur des sites équipés de <strong>digicodes ou badges</strong>. Les modalités d'accès sont convenues avec le donneur d'ordre avant la première intervention, et nos équipes respectent les consignes de sécurité propres à chaque bâtiment.</p>",
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
      heroDescription: "Extraction complète des salissures incrustées dans vos moquettes et dalles textiles, avec un séchage maîtrisé pour une remise en circulation rapide des espaces professionnels ou résidentiels.",
      whyUsBullets: [
        "Connaissance des configurations de bureaux et halls dans les parcs d'activités des Béthunes et Bellevues.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux moquettes épaisses.",
        "Interventions planifiées en dehors des heures de forte affluence pour limiter la gêne des occupants.",
      ],
      uniqueIntro: "<p>Les traces de passage répété apparaissent rapidement sur les dalles textiles des bureaux implantés dans la <strong>ZAC des Béthunes</strong>. Couloirs d'accès, espaces d'accueil, salles de réunion : les fibres accumulent poussières fines, résidus de semelles et taches de café qui ternissent l'aspect général. Dans les halls d'immeubles résidentiels, le constat reste similaire avec des zones de trafic marquées dès l'entrée.</p>\n<p class=\"mt-4\">Un entretien adapté redonne de la tenue aux revêtements et limite les réclamations liées à l'aspect vieilli des sols. Les <strong>petits collectifs et résidences récentes</strong> de Saint-Ouen-l'Aumône présentent souvent des moquettes en bon état structurel, mais dont la surface a perdu son éclat d'origine. Retrouver une propreté visible améliore l'image des locaux et le confort quotidien des occupants.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte de la forte activité logistique et industrielle de la commune. Diagnostic préalable, protection des éléments périphériques et planification horaire permettent de limiter la gêne pour les équipes présentes sur site.</p>",
      uniqueDeepDive: "<h3>Fibres encrassées et taches visibles</h3>\n<p>Les dalles textiles et moquettes bouclées captent les particules fines transportées depuis l'extérieur. L'identification du type de fibre et de la nature des salissures oriente le choix des produits et la température de traitement.</p>\n<p class=\"mt-4\">Une <strong>aspiration préalable</strong> élimine les débris secs avant l'application de la solution nettoyante.</p>\n\n<h3>Traitement par injection-extraction</h3>\n<p>La méthode projette un mélange eau-détergent dans l'épaisseur du revêtement, puis aspire immédiatement les résidus dissous. Les zones de passage intensif reçoivent plusieurs passes pour déloger les dépôts incrustés.</p>\n<p class=\"mt-4\">Un <strong>détachage ciblé</strong> complète l'opération sur les marques tenaces identifiées lors du diagnostic.</p>\n\n<h3>Gestion de l'humidité résiduelle</h3>\n<p>L'extraction puissante limite le taux d'humidité laissé dans les fibres. Selon l'épaisseur du revêtement et la ventilation du local, le séchage complet intervient généralement en quelques heures.</p>\n<p class=\"mt-4\">Des <strong>consignes de non-piétinement</strong> sont transmises pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Dalles textiles des bureaux</strong> soumises à un trafic quotidien soutenu dans les zones d'activités.",
        "Halls d'immeubles avec digicodes et badges nécessitant une coordination préalable.",
        "<strong>Accès véhicule parfois contraint</strong> entre centre-ville et parcs d'activités pour acheminer le matériel.",
        "Fibres encrassées par les poussières fines liées à la proximité de l'A15.",
        "Séchage à anticiper selon la ventilation des locaux et l'occupation des espaces.",
      ],
      faqAdditions: [
        {
          question: "Dans les bureaux des Béthunes, comment nettoyer des dalles textiles sans fragiliser les fibres déjà posées ?",
          answer: "<p>Le <strong>diagnostic préalable</strong> identifie le type de dalle et son état. La méthode par injection-extraction travaille en profondeur sans frottement agressif. La pression et la température sont ajustées pour préserver la structure des fibres tout en éliminant les salissures incrustées.</p>",
        },
        {
          question: "Dans les halls de Saint-Ouen-l'Aumône, combien de temps prévoir avant de remettre la moquette en service ?",
          answer: "<p>Après extraction, le taux d'humidité résiduel reste faible. Selon l'épaisseur du revêtement et la ventilation du hall, comptez quelques heures avant circulation normale. Des consignes de non-piétinement sont communiquées pour garantir un séchage homogène.</p>",
        },
        {
          question: "Autour des zones d'activités, comment gérer l'accès et le stationnement pour intervenir sur une moquette ?",
          answer: "<p>Nous identifions en amont les <strong>contraintes de stationnement</strong> et les horaires de moindre affluence. Le matériel est acheminé de manière à limiter l'encombrement des accès. Une coordination avec le gestionnaire ou le syndic permet d'organiser l'intervention sans perturber l'activité.</p>",
        },
        {
          question: "À Saint-Ouen-l'Aumône, quelles contraintes de matériel faut-il anticiper pour un nettoyage de moquette en zone d'activités ?",
          answer: "<p>Le matériel d'injection-extraction nécessite un accès véhicule à proximité raisonnable. Entre le centre-ville et les parcs d'activités, nous repérons les emplacements disponibles et les accès piétons. L'équipement est ensuite déployé en fonction de la configuration des locaux.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec gestion coordonnée des accès véhicules et traitement mécanisé des sols béton pour un rendu propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès propres aux parcs d'activités et parkings souterrains du secteur.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux de lavage conformément aux exigences locales.",
        "Coordination avec vos équipes pour organiser la rotation des véhicules et le balisage des zones traitées.",
      ],
      uniqueIntro: "<p>Dans la zone des Bellevues et aux abords des parcs d'activités, les parkings d'entreprises accumulent rapidement traces d'huile, poussières de roulement et résidus de carburant. Le trafic poids lourds quotidien accélère l'encrassement des sols, tandis que les <strong>rampes d'accès deviennent glissantes</strong> faute d'entretien régulier. Pour les gestionnaires de sites, ces dégradations posent un problème d'image autant que de sécurité.</p>\n<p class=\"mt-4\">Un lavage mécanisé adapté redonne aux surfaces leur aspect d'origine et limite les risques de chute sur les zones inclinées. Les sous-sols et parkings souterrains, fréquents dans les ensembles bâtis tertiaires de Saint-Ouen-l'Aumône, retrouvent une propreté visible dès la fin de l'intervention. Les copropriétés comme les entreprises bénéficient d'un espace plus accueillant pour leurs usagers.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec vos contraintes d'exploitation : balisage des zones traitées, rotation des véhicules si nécessaire, et horaires décalés pour limiter la gêne. Un compte-rendu détaillé peut être transmis au syndic ou au gestionnaire à l'issue du chantier.</p>",
      uniqueDeepDive: "<h3>Surfaces planes et allées de circulation</h3>\n<p>Le <strong>balayage préalable</strong> élimine graviers et débris avant passage de l'autolaveuse. Le dégraissant est appliqué sur les zones marquées par les écoulements d'huile. Les passes mécanisées couvrent l'ensemble des allées en respectant le sens de circulation habituel.</p>\n\n<h3>Rampes, angles et pieds de murs</h3>\n<p>Les rampes d'accès reçoivent un traitement haute pression pour restaurer l'adhérence du revêtement. Les angles morts et pieds de murs, souvent négligés, sont décrassés manuellement. Les <strong>rigoles et regards</strong> sont dégagés pour garantir l'évacuation correcte des eaux.</p>\n\n<h3>Zones techniques et finitions</h3>\n<p>Les blocs lumineux et tuyauteries apparentes peuvent être dépoussiérés sur demande. Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Une <strong>recommandation de fréquence</strong> d'entretien est formulée selon le niveau de trafic constaté sur votre site.</p>",
      specificChallenges: [
        "<strong>Trafic poids lourds</strong> sur les zones d'activités : encrassement accéléré des sols béton.",
        "<strong>Rampes d'accès rendues glissantes</strong> par les résidus d'huile et la poussière de roulement.",
        "Parkings souterrains avec ventilation limitée : séchage à anticiper dans le planning.",
        "Coordination nécessaire avec les gestionnaires pour limiter la gêne aux usagers.",
        "Rigoles et regards à dégager régulièrement pour éviter les stagnations d'eau.",
      ],
      faqAdditions: [
        {
          question: "Comment traiter des taches d'huile anciennes sur un sol béton brut ou peint dans un parking de Saint-Ouen-l'Aumône ?",
          answer: "<p>Les <strong>taches d'huile incrustées</strong> nécessitent un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Sur béton brut, le produit pénètre plus profondément et demande un temps de pose adapté. Sur revêtement peint, la pression est ajustée pour ne pas altérer la couche de finition. Le résultat dépend de l'ancienneté des traces.</p>",
        },
        {
          question: "Comment gérer les eaux de lavage dans un parking situé près des zones d'activités des Bellevues ?",
          answer: "<p>Les eaux chargées en résidus sont dirigées vers les <strong>évacuations existantes</strong> du parking. Aucun rejet n'est effectué en surface ou vers les espaces extérieurs. Les regards sont vérifiés avant intervention pour garantir un écoulement correct. Cette gestion respecte les contraintes réglementaires applicables aux sites d'activités.</p>",
        },
        {
          question: "Dans les parkings d'entreprises du secteur des Bellevues, comment organiser le balisage pendant le nettoyage ?",
          answer: "<p>Des cônes et une signalétique temporaire délimitent les zones en cours de traitement. Si le parking reste partiellement accessible, une rotation par secteur permet aux usagers de stationner ailleurs. Les horaires d'intervention peuvent être décalés en soirée ou le week-end selon vos contraintes d'exploitation.</p>",
        },
        {
          question: "Quelles différences de méthode entre un parking souterrain et un parking aérien à Saint-Ouen-l'Aumône ?",
          answer: "<p>En souterrain, la ventilation réduite impose un séchage plus long et parfois l'usage de matériel à faible émission. En aérien, l'évacuation des eaux et le séchage naturel simplifient l'intervention. Le diagnostic initial identifie ces paramètres pour adapter le planning et les équipements mobilisés.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion anti-coulures et séchage rapide pour profiter à nouveau de votre extérieur.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux espaces verts et à la pollution routière du secteur.",
        "Pression adaptée à chaque support : carrelage, béton, joints fragiles ou garde-corps vitrés.",
        "Protection systématique des voisins du dessous et gestion de l'eau maîtrisée jusqu'au séchage.",
      ],
      uniqueIntro: "<p>Comment conserver un balcon agréable quand les dépôts s'accumulent semaine après semaine ? Dans le <strong>quartier de la Prairie</strong>, les balcons exposés aux espaces arborés récupèrent pollens, feuilles mortes et traces verdâtres qui s'incrustent progressivement dans les joints. Le carrelage perd son éclat, et l'envie de s'installer dehors diminue au fil des mois.</p>\n<p class=\"mt-4\">Un traitement adapté redonne à cet espace son usage quotidien. Sur les <strong>petits collectifs et grands ensembles</strong> de Saint-Ouen-l'Aumône, les balcons ouverts subissent aussi les retombées de pollution liées à la proximité de l'A15. Le béton ou le carrelage noircit, les garde-corps ternissent. Après intervention, vous retrouvez un sol propre, des surfaces claires et un extérieur où poser table et chaises sans hésitation.</p>\n<p class=\"mt-4\">Notre organisation intègre les contraintes d'accès aux immeubles équipés de <strong>digicodes et badges</strong>. Nous coordonnons le rendez-vous, protégeons le mobilier et les plantes, et veillons à ce que l'eau ne gêne pas les voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Un balcon utilisable dès le lendemain</h3>\n<p>Le résultat visé : un sol débarrassé des dépôts verts, des garde-corps sans traces, et un espace sec prêt à accueillir votre mobilier. Pour y parvenir, nous adaptons la méthode au support présent — carrelage, béton brut ou peint — en évitant toute détérioration des joints.</p>\n\n<h3>Préparation et traitement ciblé</h3>\n<p>Nous déplaçons ou bâchons plantes et mobilier, puis protégeons les menuiseries. Les gros débris sont retirés manuellement avant application d'un produit adapté au revêtement. Le brossage — manuel ou mécanique selon l'état — décolle les salissures incrustées sans agresser la surface.</p>\n\n<h3>Rinçage contrôlé et finitions</h3>\n<p>Le rinçage s'effectue à pression douce pour préserver les joints fragiles. Nous installons des protections anti-coulures vers les balcons inférieurs et la façade. Les garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée. Avant de partir, nous vous transmettons quelques conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts verts récurrents liés aux arbres du quartier de la Prairie.",
        "Retombées de pollution atmosphérique provenant de l'A15 sur les balcons ouverts.",
        "Joints de carrelage fragilisés par l'humidité et les variations de température.",
        "Accès aux immeubles avec digicodes nécessitant une coordination préalable.",
        "Gestion des coulures d'eau pour ne pas gêner les occupants des étages inférieurs.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons carrelés des immeubles du quartier de la Prairie, comment éviter d'abîmer les joints pendant le nettoyage ?",
          answer: "<p>Nous utilisons une pression douce et un brossage adapté pour décoller les salissures sans fragiliser les joints. Le produit appliqué est choisi en fonction du type de carrelage. Cette méthode préserve l'étanchéité tout en retirant efficacement les dépôts verts incrustés.</p>",
        },
        {
          question: "Dans les immeubles de Saint-Ouen-l'Aumône, comment gérez-vous l'eau pour éviter les coulures chez les voisins du dessous ?",
          answer: "<p>Avant de commencer, nous installons des protections sur les bords du balcon et contrôlons le débit de rinçage. L'eau est dirigée vers les évacuations existantes. Cette organisation évite les désagréments pour les occupants des étages inférieurs et protège la façade.</p>",
        },
        {
          question: "Près de la coulée verte, comment retirer les dépôts verts qui reviennent régulièrement sur les balcons exposés ?",
          answer: "<p>Ces dépôts proviennent des spores et de l'humidité ambiante. Nous appliquons un traitement qui décolle les mousses et lichens sans attaquer le support. Un entretien régulier — une à deux fois par an selon l'exposition — limite leur réapparition entre les interventions.</p>",
        },
        {
          question: "Pourquoi privilégier une méthode sans haute pression pour les balcons ouverts des collectifs de Saint-Ouen-l'Aumône ?",
          answer: "<p>La haute pression peut endommager les joints, projeter de l'eau chez les voisins et dégrader certains revêtements. Une pression contrôlée associée à un brossage ciblé offre un résultat équivalent tout en préservant les surfaces et en limitant les nuisances autour de votre logement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour limiter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des secteurs exposés près des étangs de Maubuisson et des espaces arborés de la commune.",
        "Protocole strict avec EPI complets, confinement de la zone et désinfection homologuée sur tous les supports.",
        "Organisation discrète, protection du voisinage et évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons exposés. À proximité des étangs de Maubuisson et des zones arborées, les pigeons trouvent des points de repos sur les garde-corps et corniches. Les souillures sèchent, l'odeur s'installe, et l'espace extérieur devient inutilisable. Le linge étendu absorbe ces effluves tenaces, et ouvrir la baie vitrée devient une source de gêne quotidienne.</p>\n<p class=\"mt-4\">Sur les balcons ouverts des immeubles résidentiels de Saint-Ouen-l'Aumône, le béton et le carrelage subissent une dégradation progressive. L'acidité des fientes attaque les joints, ternit les surfaces et fragilise les revêtements. Retrouver un balcon sain permet de profiter à nouveau de cet espace, d'y installer du mobilier sans crainte et de supprimer cette source de frustration permanente.</p>\n<p class=\"mt-4\">Une intervention structurée commence par un diagnostic des zones touchées. Le traitement inclut le retrait sécurisé des dépôts, la désinfection des supports et des recommandations pour réduire le risque de réinfestation liée aux flux piétons et espaces végétalisés environnants.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>L'intervenant porte un équipement de protection complet : masque FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation. Cette étape neutralise les poussières contaminées et empêche leur envol dans l'air ambiant.</p>\n\n<h3>Retrait et traitement des supports</h3>\n<p>Les dépôts sont collectés manuellement et conditionnés en sacs étanches. Le sol, les garde-corps et les vitrages reçoivent ensuite un nettoyage adapté à chaque matériau.</p>\n<p class=\"mt-4\">Un produit désinfectant virucide et bactéricide est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les résidus organiques.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation rapide. Selon la configuration, des dispositifs dissuasifs peuvent être proposés : pics sur les rebords ou filets de protection.</p>\n<p class=\"mt-4\">Les déchets sont évacués dans leurs contenants étanches, sans risque de contamination des parties communes.</p>",
      specificChallenges: [
        "Proximité des étangs de Maubuisson : environnement favorable aux pigeons cherchant des points de repos.",
        "Balcons ouverts sur corniches et garde-corps : surfaces exposées aux dépôts récurrents.",
        "Acidité des fientes : dégradation progressive du béton, des joints et du carrelage.",
        "Zones végétalisées proches : risque de réinfestation sans dispositif dissuasif adapté.",
        "Odeurs tenaces imprégnant le linge et limitant l'usage de l'espace extérieur.",
      ],
      faqAdditions: [
        {
          question: "Près des espaces arborés comme les étangs de Maubuisson, quels risques sanitaires justifient un assainissement rapide des fientes sur balcon ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes transmissibles par inhalation de poussières sèches. Dans les secteurs végétalisés de Saint-Ouen-l'Aumône, l'accumulation est plus rapide. Un traitement précoce limite l'exposition et évite que les souillures n'attaquent durablement les supports du balcon.</p>",
        },
        {
          question: "Sur les corniches et garde-corps des immeubles de Saint-Ouen-l'Aumône, quel protocole de sécurité appliquez-vous pour retirer les fientes ?",
          answer: "<p>L'intervenant porte systématiquement masque FFP2, gants, lunettes et combinaison jetable. La zone est confinée par bâchage avant toute manipulation. Les fientes sont humidifiées pour neutraliser les particules volatiles, puis collectées en sacs étanches sans dispersion vers l'intérieur ou le voisinage.</p>",
        },
        {
          question: "Comment assurez-vous une désinfection efficace après des fientes de pigeons sur un balcon exposé à Saint-Ouen-l'Aumône ?",
          answer: "<p>Après le retrait des dépôts, un produit virucide et bactéricide homologué est appliqué sur le sol, les garde-corps et les vitrages. Le temps de contact recommandé est respecté pour éliminer les agents pathogènes. Un rinçage final permet une réutilisation du balcon après séchage.</p>",
        },
        {
          question: "Quelles zones de Saint-Ouen-l'Aumône présentent un risque accru de fientes sur balcon en raison des espaces végétalisés ?",
          answer: "<p>Les balcons situés à proximité des étangs de Maubuisson, du parc Le Nôtre ou de la coulée verte sont plus exposés. Les pigeons y trouvent nourriture et abris, puis se posent sur les garde-corps et corniches des immeubles voisins. Des dispositifs dissuasifs réduisent ce risque après le nettoyage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un intérieur sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Saint-Ouen-l'Aumône, du quartier de la Prairie aux résidences du centre.",
        "Détachage adapté à chaque textile avec extraction contrôlée pour un séchage rapide.",
        "Organisation souple pour intervenir selon vos disponibilités, y compris en rotation locative.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans le <strong>quartier de l'Église</strong> comme dans les autres secteurs résidentiels de Saint-Ouen-l'Aumône, les familles constatent que l'aspirateur ne suffit plus à redonner fraîcheur aux textiles d'ameublement.</p>\n<p class=\"mt-4\">Un canapé encrassé ou un tapis taché modifie l'atmosphère d'une pièce. Dans les <strong>pavillons et résidences récentes</strong> de la commune, où les enfants jouent au sol et les animaux partagent le quotidien, l'entretien régulier des tissus améliore le confort et réduit la présence d'acariens. Le rendu visuel retrouvé valorise aussi l'espace de vie.</p>\n<p class=\"mt-4\">Avant chaque intervention, nous évaluons l'état des textiles et identifions les taches à traiter. Cette approche permet d'adapter le détachage et l'extraction aux contraintes du logement, notamment lors de <strong>rotations locatives</strong> où la remise en état doit s'organiser rapidement.</p>",
      uniqueDeepDive: "<h3>Diagnostic et pré-traitement</h3>\n<p>Nous commençons par identifier le type de tissu : coton, synthétique, velours ou fibres mélangées. Chaque tache fait l'objet d'un repérage précis. Un test discret sur une zone cachée valide la compatibilité du traitement avec le textile.</p>\n<p class=\"mt-4\">Les salissures localisées reçoivent un détachage ciblé. Les produits enzymatiques interviennent sur les traces organiques comme l'urine ou les résidus alimentaires.</p>\n\n<h3>Injection-extraction en profondeur</h3>\n<p>Le nettoyage principal utilise la technique d'injection-extraction. L'eau et le détergent pénètrent dans les fibres, puis sont aspirés avec les salissures délogées. La pression et la température s'ajustent selon la fragilité du support.</p>\n<p class=\"mt-4\">Cette méthode retire ce que l'aspiration classique laisse en place : poussières incrustées, acariens, résidus gras.</p>\n\n<h3>Extraction finale et séchage</h3>\n<p>L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et la ventilation du logement, comptez quelques heures avant réutilisation. Nous vous indiquons les gestes à adopter pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Taches d'enfants et d'animaux fréquentes dans les pavillons familiaux de la commune.",
        "Textiles variés (velours, coton, synthétique) nécessitant une adaptation du traitement.",
        "Contraintes d'accès en logement occupé : coordination avec les horaires des occupants.",
        "Remise en état rapide attendue lors des rotations locatives avant nouvelle occupation.",
        "Séchage à anticiper selon la ventilation du logement et l'épaisseur des tissus.",
      ],
      faqAdditions: [
        {
          question: "Dans les pavillons de Saint-Ouen-l'Aumône, comment éliminer acariens et allergènes d'un canapé ou d'un tapis ?",
          answer: "<p>L'injection-extraction retire les acariens logés en profondeur, là où l'aspirateur n'atteint pas. Les fibres sont nettoyées jusqu'à la base, ce qui réduit la charge allergène. Pour les foyers avec enfants ou personnes sensibles, cette méthode améliore la qualité de l'air intérieur de façon concrète.</p>",
        },
        {
          question: "À Saint-Ouen-l'Aumône, combien de temps faut-il prévoir pour faire sécher un canapé ou un tapis après nettoyage ?",
          answer: "<p>Le séchage varie selon l'épaisseur du textile et l'aération du logement. Un canapé en tissu fin sèche en quelques heures, un tapis épais peut demander une demi-journée. Nous optimisons l'extraction pour réduire ce délai, et vous conseillons sur la ventilation à maintenir.</p>",
        },
        {
          question: "Dans une résidence récente de Saint-Ouen-l'Aumône, comment adapter le nettoyage d'un canapé ou d'un tapis au textile ?",
          answer: "<p>Chaque matière réagit différemment : le velours demande une pression réduite, le coton supporte un traitement plus appuyé. Nous identifions la composition avant intervention et ajustons température et dosage. Un test préalable sur zone discrète évite toute mauvaise surprise.</p>",
        },
        {
          question: "À Saint-Ouen-l'Aumône, comment organiser l'accès à un logement pour nettoyer canapé et tapis sans gêner les occupants ?",
          answer: "<p>Nous fixons le créneau selon vos disponibilités et la configuration du logement. En cas de rotation locative, l'intervention peut se caler entre deux occupations. Les digicodes ou badges d'accès sont gérés en amont pour éviter toute perte de temps le jour prévu.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts verts, et protection des plantations environnantes.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires exposées à l'humidité du secteur Le Nôtre et de la Prairie.",
        "Adaptation du traitement selon le support : pression contrôlée sur bois, brossage renforcé sur béton.",
        "Protection systématique du mobilier et des jardinières, gestion de l'eau vers les évacuations existantes.",
      ],
      uniqueIntro: "<p>Dans le secteur du <strong>parc Le Nôtre</strong> et les zones pavillonnaires alentour, les terrasses accumulent rapidement mousses, lichens et dépôts organiques. L'humidité liée à la proximité de l'Oise favorise ces formations verdâtres qui rendent les surfaces glissantes et peu engageantes. Chaque saison apporte son lot de feuilles mortes, de terre et de résidus qui s'incrustent dans les joints et les pores du matériau.</p>\n<p class=\"mt-4\">Les <strong>pavillons de Saint-Ouen-l'Aumône</strong> présentent des terrasses en bois, béton ou dalles sur plots, chacune nécessitant une approche différente. Un traitement inadapté peut endommager les fibres du bois ou dégrader les joints entre dalles. Retrouver une surface propre et sécurisée permet de profiter pleinement de cet espace extérieur dès les beaux jours.</p>\n<p class=\"mt-4\">La <strong>proximité des espaces verts</strong> et l'environnement humide local imposent un entretien régulier. Une intervention structurée intègre diagnostic du support, protection du mobilier et des jardinières, puis traitement ciblé selon le matériau identifié.</p>",
      uniqueDeepDive: "<h3>Surface assainie et sécurisée</h3>\n<p>L'objectif est d'obtenir une terrasse débarrassée des mousses, lichens et dépôts glissants. Le rendu final dépend du support : le bois retrouve sa teinte d'origine, le béton sa clarté, les dalles leur aspect uniforme.</p>\n<p class=\"mt-4\">Avant toute action, le mobilier extérieur et les plantes sont déplacés ou protégés. Les menuiseries et baies vitrées sont bâchées pour éviter les projections.</p>\n\n<h3>Traitement adapté au matériau</h3>\n<p>Après balayage des débris et feuilles, un produit spécifique est appliqué selon la nature du support. Le bois reçoit un traitement doux sans pression excessive. Le béton et les dalles supportent un brossage mécanique suivi d'un rinçage contrôlé.</p>\n<p class=\"mt-4\">Les zones fortement colonisées par les mousses bénéficient d'un traitement anti-mousse préventif pour ralentir leur réapparition.</p>\n\n<h3>Gestion de l'eau et séchage</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations sont préservées des produits utilisés. Le temps de séchage varie selon la météo et le matériau traité.</p>",
      specificChallenges: [
        "Mousses persistantes sur les terrasses exposées nord, favorisées par l'humidité locale.",
        "Supports variés dans les pavillons : bois, béton, dalles sur plots nécessitant des méthodes distinctes.",
        "Joints poreux entre dalles qui retiennent terre et dépôts organiques saison après saison.",
        "Protection des plantations et jardinières pendant le traitement et le rinçage.",
        "Gestion de l'écoulement d'eau sur terrasses en RDC avec jardin attenant.",
      ],
      faqAdditions: [
        {
          question: "Dans les maisons de Saint-Ouen-l'Aumône, comment nettoyer une terrasse en bois sans risquer de l'abîmer ?",
          answer: "<p>Le bois nécessite une pression réduite et un produit adapté aux fibres. Nous évitons les jets trop puissants qui soulèvent les éclats et fragilisent la surface. Un brossage doux complète le rinçage pour éliminer les résidus incrustés sans endommager le matériau.</p>",
        },
        {
          question: "Près du parc Le Nôtre, comment traiter les mousses et lichens qui reviennent chaque année sur ma terrasse ?",
          answer: "<p>Après nettoyage mécanique, un traitement anti-mousse est appliqué pour freiner la recolonisation. L'humidité du secteur favorise ces formations, mais un entretien annuel limite leur développement. Le produit agit en profondeur dans les pores du support.</p>",
        },
        {
          question: "Quelle différence de méthode appliquez-vous entre une terrasse en béton et une terrasse en dalles sur plots ?",
          answer: "<p>Le béton supporte un brossage appuyé et une pression plus forte. Les dalles sur plots demandent une attention particulière aux joints et aux espaces entre éléments. Nous adaptons l'intensité du traitement pour éviter de déplacer ou fissurer les dalles.</p>",
        },
        {
          question: "Dans les pavillons du quartier de la Prairie, vaut-il mieux un nettoyage doux ou la haute pression ?",
          answer: "<p>Cela dépend du support et de son état. Le bois et les matériaux poreux nécessitent un traitement doux. Le béton et le carrelage tolèrent une pression plus élevée. Nous évaluons la surface avant intervention pour choisir la méthode appropriée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux finitions, pour une restitution propre et prête à l'usage après travaux, déménagement ou rotation locative.",
      whyUsBullets: [
        "Connaissance des typologies de logements présentes à Saint-Ouen-l'Aumône, du pavillon à la résidence récente.",
        "Polyvalence sur tous types de surfaces et finitions, y compris après travaux ou sinistre.",
        "Coordination avec agences et propriétaires, créneaux adaptés aux contraintes d'accès et de stationnement.",
      ],
      uniqueIntro: "<p>Comment remettre un logement en état lorsque les délais se resserrent entre deux locataires ou après un chantier ? Dans le centre-ville de Saint-Ouen-l'Aumône, les agences immobilières et les particuliers font face à des calendriers serrés où chaque jour compte. Entre la fin des travaux et la remise des clés, le nettoyage complet du bien devient une étape décisive pour éviter les litiges ou les retards.</p>\n<p class=\"mt-4\">Un appartement ou une maison correctement préparé facilite l'état des lieux et rassure le futur occupant. Sur les petits collectifs, les pavillons ou les résidences récentes présents à Saint-Ouen-l'Aumône, les configurations varient : surfaces, revêtements, accès aux pièces d'eau. Une intervention adaptée permet de traiter chaque zone sans oublier les détails qui font la différence lors de la visite de contrôle.</p>\n<p class=\"mt-4\">La coordination avec les artisans, les agences ou les propriétaires nécessite une organisation rigoureuse. Accès par digicode, créneaux imposés, stationnement parfois contraint : ces paramètres sont intégrés dès la prise de contact pour garantir une intervention fluide.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation du logement</h3>\n<p>L'intervention débute par un état des lieux rapide : nature du bien, type de nettoyage requis (fin de chantier, état des lieux, grand ménage), surfaces à traiter. Les résidus de travaux ou les encombrants résiduels sont évacués si nécessaire.</p>\n<p class=\"mt-4\">Les zones fragiles sont repérées et protégées avant le démarrage des opérations.</p>\n\n<h3>Nettoyage complet des espaces</h3>\n<p>Le dépoussiérage couvre l'ensemble du logement : plafonds, murs, plinthes, radiateurs. Les sols sont aspirés puis lavés selon leur revêtement. Les pièces d'eau reçoivent un traitement approfondi : sanitaires, faïences, joints, plans de travail, électroménager.</p>\n<p class=\"mt-4\">Les vitres intérieures, interrupteurs, poignées et placards sont nettoyés pour un rendu soigné.</p>\n\n<h3>Contrôle et remise du logement</h3>\n<p>Un passage final vérifie chaque pièce. Les traces résiduelles de peinture ou de colle sont traitées si le contexte l'exige. Le logement est aéré avant restitution, prêt pour l'état des lieux ou l'arrivée du nouvel occupant.</p>",
      specificChallenges: [
        "Délais serrés entre fin de chantier et remise des clés dans les logements du centre-ville.",
        "Configurations variées : appartements, pavillons, résidences récentes avec accès parfois contraints.",
        "Résidus de travaux (peinture, enduit, colle) nécessitant un traitement adapté selon les surfaces.",
        "Coordination avec artisans ou agences pour respecter le calendrier de rotation locative.",
        "Accès par digicode et stationnement limité à anticiper dès la planification.",
      ],
      faqAdditions: [
        {
          question: "Dans le centre-ville de Saint-Ouen-l'Aumône, sous quel délai pouvez-vous intervenir pour un nettoyage d'appartement ou de maison ?",
          answer: "<p>Nous organisons les interventions en fonction de vos contraintes. Pour une remise en état urgente avant état des lieux, un créneau peut généralement être proposé dans les meilleurs délais selon la surface et la disponibilité. La coordination avec l'agence ou le propriétaire est assurée dès la prise de contact.</p>",
        },
        {
          question: "Quelle différence entre un nettoyage standard et un nettoyage de fin de chantier dans un appartement à Saint-Ouen-l'Aumône ?",
          answer: "<p>Le nettoyage fin de chantier inclut l'évacuation des résidus de travaux, le traitement des traces de peinture, enduit ou colle sur les surfaces. Il couvre également un dépoussiérage complet des plafonds et murs, souvent négligé dans un ménage classique. Le niveau de finition est adapté aux exigences d'un état des lieux.</p>",
        },
        {
          question: "Comment gérer un nettoyage d'appartement après un dégât des eaux à Saint-Ouen-l'Aumône ?",
          answer: "<p>Après un dégât des eaux, l'intervention porte sur l'élimination des traces d'humidité, le nettoyage des surfaces touchées et la vérification des zones à risque de moisissure. Le protocole est adapté selon l'ampleur du sinistre et les revêtements concernés. Une ventilation renforcée accompagne la remise en état.</p>",
        },
        {
          question: "Quelles contraintes d'accès faut-il prévoir pour nettoyer un logement à Saint-Ouen-l'Aumône ?",
          answer: "<p>Les accès par digicode ou badge sont fréquents, notamment dans les résidences récentes. Le stationnement peut être limité dans certains secteurs du centre-ville. Ces éléments sont recueillis lors de la prise de rendez-vous pour organiser l'intervention sans retard ni difficulté logistique.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;