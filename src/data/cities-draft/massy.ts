import type { City } from "~/types/geo";

const city: City = {
  name: "Massy",
  slug: "massy",
  postalCodes: ["91300"],

  department: {
    name: "Essonne",
    code: "91",
    slug: "essonne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Massy pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Entre la gare TGV et les résidences du quartier Atlantis, nos équipes s'adaptent aux contraintes d'accès et aux flux quotidiens de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Pôle multimodal majeur avec les gares TGV et RER, au cœur de la dynamique technologique de Paris-Saclay : Massy concentre des enjeux de propreté variés. Klinova accompagne syndics, gestionnaires et entreprises avec une organisation calibrée sur les réalités du terrain.</p>\n<p class=\"mt-4\">Halls d'immeubles, parkings souterrains, espaces extérieurs : chaque intervention suit un <strong>protocole adapté au bâti</strong> et aux contraintes d'accès. Reporting disponible, coordination avec gardiens ou prestataires existants selon vos besoins.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Équipes positionnées en Essonne, délais d'intervention courts entre Atlantis, le centre-ville et les zones pavillonnaires.</li>\n  <li><strong>Gestion des accès :</strong> Digicodes, badges, créneaux décalés : nous intégrons vos contraintes dès la planification pour limiter les allers-retours.</li>\n  <li><strong>Suivi transparent :</strong> Compte-rendu après chaque passage, photos avant/après si demandé, interlocuteur unique pour simplifier les échanges.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> sous les résidences Atlantis : traces de pneus et poussières fines liées au trafic.",
    "Halls d'immeubles proches des gares RER B et C soumis à un <strong>flux piéton quotidien intense</strong>.",
    "Balcons exposés aux retombées de pollution des axes A10 et A126.",
    "Digicodes et badges systématiques : <strong>coordination accès</strong> indispensable avant chaque intervention.",
    "Résidences récentes du quartier Opéra avec dalles sur plots nécessitant un nettoyage adapté.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Quartier Atlantis",
    "Quartier Vilmorin",
    "Quartier Opéra",
    "Zone pavillonnaire",
  ],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Massy",
    "Gare de Massy-Palaiseau",
    "Gare de Massy TGV",
    "Quartier Atlantis",
    "Opéra de Massy",
    "Parc Georges Brassens",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment gérez-vous le stationnement dans les zones denses autour de la gare ?",
      answer: "<p>Nos équipes repèrent les emplacements disponibles en amont et privilégient les <strong>créneaux tôt le matin</strong> ou en journée creuse. Si nécessaire, nous coordonnons avec le syndic pour réserver un accès temporaire. L'objectif : éviter toute perte de temps et commencer l'intervention à l'heure prévue.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur une copropriété à Massy ?",
      answer: "<p>Oui, nous traitons les demandes urgentes dans les meilleurs délais selon la nature du chantier. Un premier échange téléphonique permet d'évaluer la situation, puis nous mobilisons une équipe disponible. Pour les <strong>dégradations importantes</strong>, un passage de diagnostic peut précéder l'intervention complète.</p>",
    },
    {
      question:
        "Comment se passe la coordination avec un gardien ou un gestionnaire sur place ?",
      answer: "<p>Nous prenons contact en amont pour caler les horaires, récupérer les accès et définir les zones prioritaires. Le jour J, notre chef d'équipe <strong>échange directement</strong> avec l'interlocuteur sur site. Un compte-rendu est transmis après chaque passage pour assurer le suivi.</p>",
    },
    {
      question: "Le devis inclut-il le déplacement sur Massy ?",
      answer: "<p>Le déplacement est intégré dans notre tarification, sans surcoût masqué. Nous intervenons sur l'ensemble de l'Essonne et adaptons nos tournées pour <strong>regrouper les chantiers</strong> par secteur. Le devis détaille clairement les prestations, surfaces et fréquences prévues.</p>",
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
    // 1) moquettes
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec un séchage maîtrisé pour une remise en circulation rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des configurations du quartier Atlantis et des accès sécurisés des immeubles de Massy.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux moquettes épaisses.",
        "Interventions planifiées en dehors des heures de pointe pour limiter la gêne dans les espaces partagés.",
      ],
      uniqueIntro: "<p>Dans le quartier Atlantis et les secteurs tertiaires proches de la gare, la circulation piétonne quotidienne laisse des traces visibles sur les revêtements textiles. Les dalles de moquette des halls d'entrée et des couloirs de bureaux accumulent poussières fines, résidus de semelles et taches de café en quelques semaines seulement. Ce <strong>grisaillement progressif</strong> altère l'aspect des espaces d'accueil et des zones de passage.</p>\n<p class=\"mt-4\">Dans les petits collectifs et grands ensembles de Massy, les parties communes équipées de textile souffrent du même phénomène. Un entretien adapté redonne de la netteté aux fibres, améliore le confort visuel des occupants et limite les remarques lors des assemblées de copropriété. Pour les cabinets médicaux ou salles d'attente, la propreté du sol participe directement à l'image perçue par les patients.</p>\n<p class=\"mt-4\">Compte tenu du stationnement difficile en zone gare et des accès par digicode fréquents, chaque intervention est préparée en amont : repérage des contraintes, choix du créneau horaire, protection des éléments adjacents avant le début du travail.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\n<p>Les entrées, couloirs et espaces d'accueil reçoivent un diagnostic préalable : identification du type de fibre, repérage des taches localisées et évaluation de l'encrassement général. Une aspiration approfondie précède le traitement pour éliminer les particules libres.</p>\n<p class=\"mt-4\">L'injection-extraction cible ensuite ces surfaces à fort trafic avec plusieurs passes successives jusqu'à obtenir une eau de rinçage claire.</p>\n\n<h3>Surfaces secondaires et angles</h3>\n<p>Les zones moins sollicitées bénéficient d'un traitement adapté à leur état réel. Les plinthes et bas de murs sont protégés avant application du produit. Le détachage ciblé intervient sur les marques tenaces identifiées lors du diagnostic.</p>\n\n<h3>Gestion du séchage par secteur</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon l'épaisseur du textile et la ventilation disponible. Des <strong>consignes de non-piétinement</strong> sont communiquées pour chaque zone traitée, permettant une reprise progressive de l'activité sans compromettre le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Poussières fines</strong> liées au trafic RER/TGV qui s'incrustent rapidement dans les fibres textiles.",
        "Halls d'immeubles avec digicodes et badges nécessitant une coordination préalable.",
        "Dalles textiles de bureaux soumises à un <strong>passage quotidien intense</strong> autour de la gare.",
        "Stationnement contraint en zone dense imposant une logistique véhicule anticipée.",
        "Moquettes de salles d'attente exposées aux taches de café et traces de semelles.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les petits collectifs du quartier Atlantis, comment faites-vous passer le matériel dans des escaliers étroits ?",
          answer: "<p>Le matériel d'injection-extraction utilisé reste compact et maniable. Pour les cages d'escalier des collectifs d'Atlantis, nous privilégions des équipements modulables avec flexibles allongés. Le repérage préalable permet d'identifier les passages les plus contraints et d'adapter la configuration du matériel en conséquence.</p>",
        },
        {
          question:
            "Les moquettes proches de la gare TGV et du RER accumulent-elles davantage de salissures incrustées ?",
          answer: "<p>Les fibres textiles situées dans les halls ou bureaux à proximité du pôle multimodal captent effectivement plus de particules fines et de résidus de semelles. Le <strong>flux quotidien de voyageurs</strong> accentue l'encrassement. Un traitement par injection-extraction avec passes multiples permet de déloger ces dépôts même anciens.</p>",
        },
        {
          question:
            "Faut-il prévoir une méthode différente entre copropriété et bureaux autour d'Atlantis à Massy ?",
          answer: "<p>Les contraintes diffèrent principalement sur les horaires et la coordination. En copropriété, l'intervention s'organise avec le syndic ou le gardien pour informer les résidents. En bureaux, le créneau est calé hors heures d'activité. La <strong>méthode technique reste similaire</strong>, ajustée selon le type de fibre rencontré.</p>",
        },
        {
          question:
            "Le stationnement difficile près de la gare de Massy complique-t-il l'intervention sur moquette ?",
          answer: "<p>La zone gare impose une anticipation logistique : repérage des emplacements autorisés, coordination avec le gestionnaire si parking privé, choix d'un créneau où le stationnement reste accessible. Cette préparation évite les retards et garantit que le matériel arrive à pied d'œuvre sans difficulté.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 2) parkings
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec gestion coordonnée des accès et traitement mécanisé des sols béton pour un résultat durable.",
      whyUsBullets: [
        "Connaissance des copropriétés du centre et des contraintes d'accès par badges fréquentes à Massy.",
        "Autolaveuse professionnelle et gestion stricte des eaux de lavage vers les évacuations existantes.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la fermeture des niveaux.",
      ],
      uniqueIntro: "<p>Les traces de pneus, coulures d'huile et dépôts de poussière marquent progressivement les sols des parkings souterrains. <strong>Dans le secteur de l'Opéra et les copropriétés du centre de Massy</strong>, ces salissures s'accumulent sur le béton brut ou peint, rendant les circulations moins lisibles et les espaces moins accueillants pour les résidents.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier permet de retrouver des sols propres et des marquages au sol visibles. Les <strong>sous-sols fréquents dans le bâti dense de la ville</strong> bénéficient d'un traitement adapté qui limite les odeurs de confinement et redonne aux parties communes une image soignée, appréciée des copropriétaires comme des gestionnaires.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic : <strong>balisage des zones, rotation des véhicules par niveau, accès par badges</strong>. Chaque chantier fait l'objet d'un planning précis pour limiter la gêne et permettre une remise en circulation rapide des places.</p>",
      uniqueDeepDive: "<h3>Encrassement et accès restreints</h3>\n<p>Les parkings souterrains concentrent huiles, graisses et poussières sur des surfaces difficiles à évacuer. Nous réalisons un diagnostic du revêtement et vérifions l'état des évacuations avant toute intervention.</p>\n<p class=\"mt-4\">Le balisage sécurise les zones de travail. La rotation des véhicules s'organise par niveau ou par tranche horaire selon les contraintes du site.</p>\n\n<h3>Traitement mécanisé et dégraissage</h3>\n<p>L'autolaveuse effectue plusieurs passes sur le béton, combinée à un dégraissant adapté pour les zones critiques. Les rampes d'accès reçoivent un traitement antidérapant spécifique.</p>\n<p class=\"mt-4\">Les angles morts, pieds de murs et rigoles font l'objet d'un passage ciblé. Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage.</p>\n\n<h3>Finalisation et remise en service</h3>\n<p>Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé. Le syndic reçoit un compte-rendu avec photos et recommandations de fréquence adaptées au trafic constaté.</p>",
      specificChallenges: [
        "Parkings souterrains avec ventilation limitée et sols encrassés par les huiles moteur.",
        "Accès par badges et digicodes nécessitant une coordination préalable avec le gestionnaire.",
        "Stationnement compliqué en zone dense : rotation des véhicules à planifier par tranche.",
        "Rampes d'accès inclinées demandant un traitement antidérapant après lavage.",
        "Rigoles et regards parfois obstrués, à vérifier avant évacuation des eaux de lavage.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les sous-sols de copropriété à Massy, comment traitez-vous les traces d'huile anciennes sur le béton ?",
          answer: "<p>Les traces d'huile incrustées reçoivent un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Plusieurs passes mécanisées permettent de décoller les résidus. Le résultat dépend de l'ancienneté des taches, mais l'aspect général du sol s'améliore nettement après traitement.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage dans les parkings souterrains de Massy sans gêner les résidents ?",
          answer: "<p>Les eaux sont dirigées vers les évacuations existantes du parking. Nous vérifions l'état des regards et rigoles avant intervention pour éviter tout refoulement. Le balisage des zones humides limite les risques de glissade pendant le séchage. Aucun rejet sauvage n'est effectué.</p>",
        },
        {
          question:
            "Intervenez-vous différemment sur un parking souterrain et un parking aérien autour de la gare de Massy ?",
          answer: "<p>En souterrain, la ventilation limitée impose un séchage plus long et une attention particulière aux odeurs. En aérien, les salissures liées aux intempéries et feuilles mortes s'ajoutent aux traces de pneus. Le matériel et les produits restent similaires, mais l'organisation du chantier s'adapte à chaque configuration.</p>",
        },
        {
          question:
            "Peut-on organiser une fermeture partielle du parking en copropriété dense à Massy pendant le nettoyage ?",
          answer: "<p>Oui, nous travaillons par zones ou par niveaux pour libérer progressivement les places. Le syndic communique le planning aux résidents en amont. Cette rotation permet de maintenir un accès minimum tout au long de l'intervention, même dans les copropriétés à forte densité de véhicules.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 3) balcons
    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au carrelage ou béton, protection des voisins contre les coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons orientés vers les axes routiers ou les espaces verts de Vilgenis.",
        "Pression ajustée selon le support, brossage manuel sur joints fragiles, produits non agressifs pour le carrelage.",
        "Organisation anticipée : créneau validé, matériel compact, protection systématique des voisins contre les coulures.",
      ],
      uniqueIntro: "<p>Comment préserver un balcon agréable quand les poussières fines des axes routiers se déposent semaine après semaine ? Dans le quartier Vilmorin et les zones résidentielles exposées à la circulation, les surfaces extérieures accumulent un voile grisâtre qui ternit le carrelage et s'incruste dans les joints. Les feuilles mortes venues du parc de Vilgenis ajoutent des dépôts organiques qui favorisent l'apparition de mousses dès les premiers jours humides.</p>\n<p class=\"mt-4\">Les résidences récentes et petits collectifs de Massy proposent souvent des balcons carrelés ou en béton brut. Ces supports, exposés aux intempéries et à la pollution, perdent leur aspect d'origine en quelques saisons. Un nettoyage adapté redonne de la clarté à l'espace, supprime les traces tenaces et permet de réinstaller table et chaises sans appréhension. Le confort visuel retrouvé change la perception de ces mètres carrés précieux.</p>\n<p class=\"mt-4\">Compte tenu de la circulation dense autour des gares et du stationnement difficile, nous organisons chaque intervention en amont : créneaux confirmés, matériel compact, gestion de l'eau maîtrisée pour éviter toute gêne aux voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous déplaçons le mobilier et les plantes vers l'intérieur ou sous bâche. Les menuiseries, fenêtres et portes-fenêtres sont protégées pour éviter les projections. Un dispositif anti-coulures est installé en périphérie afin de préserver la façade et le balcon du voisin situé en dessous.</p>\n\n<h3>Traitement des surfaces</h3>\n<p>Les gros dépôts, feuilles et débris sont retirés manuellement. Un produit adapté au support — carrelage grès ou béton — est appliqué puis brossé pour déloger les salissures incrustées et les traces vertes. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée. Le rinçage s'effectue à pression contrôlée, sans endommager les joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau résiduelle est raclée pour accélérer le séchage. Nous vérifions l'état des vitrages attenants et les nettoyons si nécessaire. Avant de partir, nous partageons quelques conseils d'entretien pour espacer les interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Dépôts de poussières fines liés à la proximité des axes A10 et A126.",
        "Mousses et traces vertes favorisées par l'humidité près du parc de Vilgenis.",
        "Joints de carrelage sensibles sur les résidences récentes du quartier Atlantis.",
        "Gestion des coulures en étage pour préserver les voisins du dessous.",
        "Stationnement difficile autour des gares, nécessitant une logistique adaptée.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons carrelés des résidences récentes de Massy, comment protégez-vous les joints fragiles ?",
          answer: "<p>Nous adaptons la pression de rinçage et privilégions un brossage manuel sur les zones sensibles. Le produit utilisé est formulé pour désincruster sans attaquer les joints. Cette approche préserve l'étanchéité du carrelage tout en éliminant les salissures accumulées au fil des mois.</p>",
        },
        {
          question:
            "Dans les quartiers résidentiels proches de Vilmorin, comment évitez-vous les coulures lors du nettoyage d'un balcon en étage ?",
          answer: "<p>Un dispositif de rétention est installé en périphérie avant toute projection d'eau. Nous contrôlons le débit et raclons immédiatement les excédents. Cette méthode empêche l'eau chargée de salissures de s'écouler sur la façade ou le balcon du voisin situé en dessous.</p>",
        },
        {
          question:
            "Autour du parc de Vilgenis, comment retirez-vous les dépôts verts et les mousses sur les balcons ?",
          answer: "<p>Un produit adapté est appliqué pour ramollir les mousses et lichens. Après un temps de pose, nous brossons mécaniquement puis rinçons à pression modérée. Les traces vertes disparaissent et le support retrouve sa teinte d'origine, même sur les bétons poreux.</p>",
        },
        {
          question:
            "À Massy, nettoyez-vous les balcons sans haute pression pour préserver le carrelage et les supports ?",
          answer: "<p>Oui, lorsque le support ou les joints sont fragiles, nous intervenons sans haute pression. Le brossage manuel combiné à un rinçage doux suffit à éliminer les salissures courantes. Cette méthode convient particulièrement aux carrelages grès et aux dalles sur plots des résidences récentes.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 4) balcons-fientes
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon contaminé par les fientes de pigeons, avec désinfection des supports et solutions de dissuasion pour éviter le retour des volatiles.",
      whyUsBullets: [
        "Connaissance des zones à risque de Massy, notamment près des lignes RER et des espaces arborés où les pigeons nichent.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection homologuée pour éliminer les agents pathogènes.",
        "Coordination avec les copropriétés pour l'accès par badge et évacuation des déchets en sacs étanches sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les garde-corps et le sol du balcon. Dans les secteurs proches de la ligne RER B et des espaces plantés de Massy, les pigeons trouvent des points de repos réguliers sur les corniches et rebords. Les dépôts deviennent épais, l'odeur s'installe, et le balcon finit par rester fermé faute de pouvoir l'utiliser sereinement.</p>\n<p class=\"mt-4\">Un traitement adapté permet de retrouver un espace extérieur sain. Dans les immeubles collectifs avec corniches et loggias, les supports béton ou carrelage subissent une corrosion progressive si les fientes restent en place. La désinfection élimine les agents pathogènes, et le nettoyage redonne un aspect propre aux surfaces. Le balcon redevient un prolongement du logement, sans gêne olfactive ni visuelle.</p>\n<p class=\"mt-4\">L'intervention intègre la coordination avec la copropriété lorsque l'accès par badges est requis. Le confinement de la zone protège l'intérieur du logement pendant le travail, et l'évacuation des déchets en sacs étanches garantit une fin de chantier sans trace de contamination.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est d'éliminer toute trace de contamination et de rendre le balcon utilisable. Les fientes sont retirées après humidification pour éviter la dispersion de poussières. Le sol, le garde-corps et les vitrages sont nettoyés, puis un produit virucide et bactéricide est appliqué avec un temps de contact suffisant.</p>\n\n<h3>Confinement et protection pendant l'intervention</h3>\n<p>L'équipe porte une combinaison jetable, un masque FFP2, des gants et des lunettes. La zone est bâchée pour isoler le balcon de l'intérieur du logement. Cette précaution limite tout risque de transfert de particules vers les pièces de vie.</p>\n\n<h3>Dissuasion et évacuation sécurisée</h3>\n<p>Après rinçage et aération, des dispositifs anti-retour peuvent être posés : pics sur les rebords ou filets de protection selon la configuration. Les déchets collectés sont conditionnés en sacs étanches et évacués. Le balcon est prêt à être réutilisé après un court délai de séchage.</p>",
      specificChallenges: [
        "Corniches et loggias des immeubles collectifs offrent des points de repos aux pigeons.",
        "Accumulation rapide des fientes sur les balcons exposés près des zones arborées.",
        "Coordination nécessaire avec la copropriété pour l'accès par badge et la gestion des déchets.",
        "Supports béton et carrelage fragilisés par l'acidité des dépôts laissés sans traitement.",
        "Odeurs persistantes si le nettoyage n'inclut pas une désinfection complète.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons proches des zones arborées de Massy, quels sont les risques sanitaires liés aux fientes de pigeons ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui peuvent provoquer des infections respiratoires ou cutanées. Sur les balcons exposés près des espaces plantés, l'accumulation est souvent plus rapide. Un assainissement avec désinfection élimine ces risques et permet de réutiliser l'espace en toute sécurité.</p>",
        },
        {
          question:
            "Quel protocole EPI appliquez-vous pour enlever des fientes de pigeons en copropriété à Massy ?",
          answer: "<p>L'équipe intervient avec masque FFP2, gants, lunettes et combinaison jetable. La zone est confinée par bâchage pour protéger l'intérieur du logement. En copropriété, la coordination avec le syndic ou le gardien permet d'organiser l'accès par badge et d'informer les voisins si nécessaire.</p>",
        },
        {
          question:
            "Après une contamination par pigeons à Massy, quelle désinfection appliquez-vous sur le balcon ?",
          answer: "<p>Après le retrait des fientes et le nettoyage des supports, un produit virucide et bactéricide homologué est appliqué. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes. Un rinçage final et un délai d'aération permettent de rendre le balcon utilisable rapidement.</p>",
        },
        {
          question:
            "Les corniches et cours intérieures de Massy sont-elles des zones à risque pour les fientes de pigeons ?",
          answer: "<p>Les corniches, rebords de fenêtres et cours intérieures des immeubles collectifs constituent des zones de repos privilégiées pour les pigeons. Les balcons situés en dessous reçoivent des dépôts réguliers. Après nettoyage, la pose de pics ou de filets limite fortement le retour des volatiles sur ces points.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 5) canapes-tapis
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Massy et de leurs textiles d'intérieur sollicités au quotidien.",
        "Détachage adapté à chaque fibre avec extraction puissante et séchage accéléré.",
        "Organisation souple pour intervenir rapidement malgré les contraintes de stationnement en zone résidentielle.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans la <strong>zone pavillonnaire de Massy</strong> et les quartiers résidentiels alentour, les textiles d'intérieur absorbent poussières, allergènes et résidus liés à la vie de famille. Le passage répété, les enfants, les animaux domestiques laissent des traces que l'aspirateur seul ne suffit pas à éliminer.</p>\n<p class=\"mt-4\">Retrouver un canapé aux couleurs ravivées ou un tapis débarrassé de ses taches anciennes change l'atmosphère d'une pièce. Dans les <strong>pavillons et résidences récentes</strong> de Massy, où les usages familiaux sollicitent fortement les textiles, un entretien adapté préserve leur aspect et prolonge leur durée de vie. Les fibres retrouvent leur souplesse, les odeurs disparaissent, le confort revient.</p>\n<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic précis du textile et de ses taches. <strong>Le stationnement parfois contraint</strong> dans certains secteurs est anticipé pour faciliter l'accès du matériel et limiter la gêne lors du passage à domicile.</p>",
      uniqueDeepDive: "<h3>Identification des taches et du textile</h3>\n<p>Chaque tissu réagit différemment : coton, synthétique, velours ou laine demandent une approche spécifique. Nous repérons la nature des salissures — café, vin, urine, graisse — et testons sur une zone discrète si le textile présente une fragilité particulière.</p>\n\n<h3>Traitement ciblé et extraction</h3>\n<p>Les taches tenaces reçoivent un pré-traitement enzymatique adapté avant le passage en injection-extraction. Cette technique propulse une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de résidus. La pression et la température sont ajustées selon l'épaisseur et la sensibilité du support.</p>\n\n<h3>Séchage et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage, généralement compris entre quelques heures et une journée selon la ventilation du logement. Nous vous indiquons comment aérer efficacement et à quelle fréquence prévoir un rafraîchissement pour maintenir vos textiles en bon état.</p>",
      specificChallenges: [
        "Taches anciennes incrustées dans les fibres des canapés familiaux.",
        "Présence d'acariens et allergènes dans les matelas des chambres d'enfants.",
        "Odeurs persistantes liées aux animaux domestiques sur les tapis.",
        "Accès au logement parfois compliqué par le stationnement limité en zone dense.",
        "Textiles variés nécessitant une adaptation du traitement selon la fibre.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les pavillons familiaux de Massy, le nettoyage canapé-tapis réduit-il vraiment les acariens et les allergènes ?",
          answer: "<p>L'injection-extraction déloge les acariens, leurs déjections et les poussières fines accumulées dans les fibres. Après séchage, le textile retrouve une hygiène améliorée, particulièrement appréciable dans les chambres d'enfants ou les pièces de vie où les allergènes se concentrent.</p>",
        },
        {
          question:
            "À Massy, comment adaptez-vous votre méthode aux textiles des canapés et tapis en logement résidentiel ?",
          answer: "<p>Nous identifions d'abord le type de fibre — coton, laine, synthétique, velours — puis ajustons la pression et la température de traitement. Un test sur zone cachée précède toute intervention sur un textile fragile, garantissant un résultat sans risque de décoloration.</p>",
        },
        {
          question:
            "Dans une maison de Massy, que faut-il préparer avant un nettoyage de canapé ou de tapis à domicile ?",
          answer: "<p>Dégagez l'accès au mobilier concerné et prévoyez un espace pour déposer les coussins amovibles. Si le stationnement est contraint, indiquez-nous un créneau adapté pour faciliter le déchargement du matériel et limiter la durée d'intervention.</p>",
        },
        {
          question:
            "Dans la zone pavillonnaire de Massy, vos produits restent-ils adaptés aux enfants et aux animaux ?",
          answer: "<p>Les solutions utilisées sont conçues pour être sans danger une fois le textile sec. Nous recommandons simplement d'attendre la fin du séchage avant de laisser enfants ou animaux reprendre contact avec le canapé, le tapis ou le matelas traité.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 6) terrasses
    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support — dalles, bois composite ou pierre — pour éliminer mousses, dépôts verts et taches tenaces sans risque d'abîmer les matériaux.",
      whyUsBullets: [
        "Connaissance des terrasses massicoises exposées à l'humidité des secteurs végétalisés proches des parcs.",
        "Traitement anti-mousse adapté à chaque support — bois composite, dalles sur plots, pierre naturelle.",
        "Protection systématique du mobilier et des plantations, gestion de l'eau sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Dans les secteurs proches du <strong>parc de Vilgenis</strong> ou du parc Georges Brassens, les terrasses subissent une exposition particulière. L'humidité ambiante, les feuilles mortes et l'ombre partielle favorisent l'apparition de mousses et de dépôts verts qui s'installent progressivement. Les dalles deviennent glissantes, le bois composite perd son aspect d'origine, et l'espace extérieur se transforme en zone peu engageante.</p>\n<p class=\"mt-4\">Les <strong>pavillons et rez-de-chaussée</strong> équipés de terrasses en dalles sur plots, bois ou pierre naturelle nécessitent un traitement adapté à chaque matériau. Un entretien régulier redonne à cet espace sa fonction première : un prolongement agréable du logement, utilisable sans crainte de glissade ni de salissures ramenées à l'intérieur.</p>\n<p class=\"mt-4\">Le <strong>stationnement compliqué</strong> en zone dense et les accès parfois contraints sont anticipés lors de la préparation. L'intervention inclut le déplacement du mobilier, la protection des plantations et une gestion de l'eau adaptée à la configuration de votre extérieur.</p>",
      uniqueDeepDive: "<h3>Surface principale et joints</h3>\n<p>Le sol de la terrasse est d'abord débarrassé des gros dépôts — feuilles, terre accumulée, débris végétaux. Un brossage permet de décoller les mousses installées dans les joints et les zones poreuses.</p>\n<p class=\"mt-4\">Le produit de traitement est sélectionné selon le support : formulation douce pour le bois composite, solution adaptée aux dalles en pierre ou au carrelage extérieur.</p>\n\n<h3>Bordures et éléments verticaux</h3>\n<p>Les garde-corps, murets et marches d'escalier extérieur reçoivent le même traitement. Ces zones accumulent souvent des traces vertes et des coulures que le nettoyage de la surface seule ne suffit pas à éliminer.</p>\n<p class=\"mt-4\">La pression est contrôlée pour éviter toute dégradation des joints ou des matériaux poreux.</p>\n\n<h3>Mobilier et plantations</h3>\n<p>Le mobilier extérieur est déplacé ou protégé. Les jardinières et plantes sont bâchées pour éviter tout contact avec les produits de traitement.</p>\n<p class=\"mt-4\">L'eau est dirigée vers les points d'écoulement existants, sans ruissellement vers les espaces voisins.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'humidité des secteurs proches des parcs de Massy.",
        "Supports variés — dalles sur plots, bois composite, pierre — nécessitant des produits différenciés.",
        "Stationnement compliqué en zone dense, matériel à acheminer jusqu'à l'espace extérieur.",
        "Protection des plantations et jardinières pendant le traitement.",
        "Gestion de l'eau sans ruissellement vers les terrasses ou balcons voisins.",
      ],
      faqAdditions: [
        {
          question:
            "Sur une terrasse en pierre ou en bois composite à Massy, comment évitez-vous d'abîmer le support ?",
          answer: "<p>Chaque matériau reçoit un traitement spécifique. Le bois composite est nettoyé avec une pression réduite et un produit non agressif. La pierre naturelle supporte un brossage plus appuyé, mais les joints restent protégés. Nous vérifions toujours l'état du support avant d'intervenir pour adapter la méthode.</p>",
        },
        {
          question:
            "Dans les secteurs végétalisés près de Vilgenis, comment traitez-vous les mousses et lichens sur terrasse ?",
          answer: "<p>L'humidité ambiante favorise ces dépôts verts. Après un brossage mécanique pour décoller les couches installées, un traitement anti-mousse est appliqué. Il agit en profondeur pour ralentir la réapparition. Sur les zones très exposées, nous recommandons un entretien saisonnier.</p>",
        },
        {
          question:
            "À Massy, quel traitement anti-mousse appliquez-vous sur une terrasse de pavillon ou de rez-de-chaussée ?",
          answer: "<p>Le produit est choisi selon le support et le niveau d'envahissement. Sur dalles ou pierre, une formulation à action prolongée limite la repousse pendant plusieurs mois. Sur bois composite, nous privilégions un traitement doux compatible avec les finitions d'origine.</p>",
        },
        {
          question:
            "Sur les terrasses de Massy, privilégiez-vous un nettoyage doux plutôt qu'un lavage haute pression ?",
          answer: "<p>La haute pression n'est pas systématique. Sur bois composite ou joints fragiles, un nettoyage basse pression combiné à un brossage manuel donne un meilleur résultat sans risque. La haute pression reste réservée aux supports résistants comme le béton ou le carrelage extérieur épais.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 7) nettoyage-appartement-maison
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre appartement ou maison, du sol aux finitions, pour une restitution impeccable après travaux, déménagement ou sinistre.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Massy, du collectif récent au pavillon, pour adapter chaque intervention.",
        "Polyvalence sur tous les supports — carrelage, parquet, faïence — et maîtrise des finitions post-chantier.",
        "Organisation calée sur vos contraintes : digicode, créneau serré, coordination avec agence ou artisans.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou un déménagement précipité, les logements situés autour de la gare de Massy-Palaiseau accumulent poussières de chantier, traces de passage et résidus tenaces. Les agences immobilières et les propriétaires constatent souvent un écart important entre l'état réel du bien et les exigences d'un état des lieux réussi. Sans intervention structurée, la remise des clés devient source de litiges ou de retenues sur caution.</p>\n<p class=\"mt-4\">Dans les appartements en petits collectifs et les résidences récentes de Massy, un grand ménage adapté transforme l'impression générale du logement. Sols débarrassés des voiles de ciment, vitres intérieures dégagées, pièces d'eau désinfectées : chaque détail compte pour faciliter la signature ou l'entrée d'un nouveau locataire. Les bailleurs y gagnent en sérénité, les occupants en confort immédiat.</p>\n<p class=\"mt-4\">Nous coordonnons chaque intervention en tenant compte des contraintes d'accès par digicode et du stationnement difficile fréquent dans les zones denses. Un diagnostic préalable permet d'ajuster le temps de présence et les moyens mobilisés selon la surface et la nature des salissures.</p>",
      uniqueDeepDive: "<h3>Logement prêt à habiter</h3>\n<p>L'objectif est de rendre chaque pièce utilisable sans nettoyage complémentaire. Sols propres, surfaces désinfectées, vitres transparentes : le résultat doit permettre une remise de clés sereine ou une installation immédiate.</p>\n<p class=\"mt-4\">Pour y parvenir, nous commençons par un état des lieux visuel afin d'identifier les zones prioritaires et les résidus spécifiques (peinture, colle, calcaire).</p>\n\n<h3>Traitement méthodique des surfaces</h3>\n<p>Le dépoussiérage débute par les points hauts — plafonds, luminaires, dessus de placards — avant de descendre vers les plinthes et les sols. Les pièces d'eau reçoivent un traitement désinfectant sur sanitaires, faïences et joints.</p>\n<p class=\"mt-4\">Les sols sont aspirés puis lavés selon leur nature : carrelage, parquet ou revêtement souple.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Interrupteurs, poignées, radiateurs et intérieurs de placards sont nettoyés un à un. Un passage final permet de vérifier l'absence de traces résiduelles et d'aérer le logement avant restitution.</p>",
      specificChallenges: [
        "Résidus de chantier sur sols et menuiseries dans les appartements neufs ou rénovés.",
        "Accès par digicode et badge nécessitant une coordination préalable avec le propriétaire ou l'agence.",
        "Stationnement limité près du centre-ville, imposant une logistique adaptée pour le matériel.",
        "Délais serrés avant état des lieux, exigeant une intervention rapide et complète.",
        "Pièces d'eau entartrées après plusieurs mois d'inoccupation ou de travaux.",
      ],
      faqAdditions: [
        {
          question:
            "Près de la gare de Massy-Palaiseau, pouvez-vous intervenir rapidement pour un appartement ou une maison ?",
          answer: "<p>Nous organisons des créneaux dans des délais courts selon la surface et la disponibilité. La proximité de la gare facilite l'accès de nos équipes, et nous ajustons le planning pour respecter la date de remise des clés fixée avec l'agence ou le propriétaire.</p>",
        },
        {
          question:
            "À Massy, quelle différence faites-vous entre un ménage standard et un nettoyage de fin de chantier ?",
          answer: "<p>Un ménage standard porte sur l'entretien courant. Le nettoyage fin de chantier inclut l'élimination des voiles de ciment, des traces de peinture et des poussières fines infiltrées dans les moindres recoins. Les temps d'intervention et les produits utilisés diffèrent sensiblement.</p>",
        },
        {
          question:
            "Après un dégât des eaux dans un appartement à Massy, quelles zones traitez-vous en priorité ?",
          answer: "<p>Nous ciblons d'abord les surfaces touchées par l'humidité : plinthes, bas de murs, sols et placards. Un séchage contrôlé et un traitement des traces résiduelles permettent de limiter les risques de moisissures et de restituer un logement sain.</p>",
        },
        {
          question:
            "Avec digicode et stationnement difficile à Massy, comment organisez-vous l'accès au logement pour le ménage ?",
          answer: "<p>Nous récupérons les codes ou badges en amont et repérons les possibilités de stationnement à proximité. Si nécessaire, nous convenons d'un créneau où un gardien ou un contact sur place peut faciliter l'entrée et la sortie du matériel.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;