import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Denis",
  slug: "saint-denis",
  postalCodes: ["93200"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Saint-Denis. De La Plaine aux immeubles du centre-ville, une organisation adaptée aux contraintes d'accès et au rythme de cette commune dense.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class=\"mt-4\">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>Siège de la Basilique-Cathédrale et du Stade de France, au cœur de la Plaine Saint-Denis : la commune cumule patrimoine historique, équipements majeurs et forte densité résidentielle. Klinova y intervient comme partenaire terrain pour syndics, gestionnaires et occupants.</p>\n<p class=\"mt-4\">Nos équipes coordonnent les interventions de propreté et de maintenance selon les accès, les horaires et les contraintes propres à chaque site. Un interlocuteur dédié assure le suivi et transmet les comptes rendus si nécessaire.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Présence régulière sur Saint-Denis, délais d'intervention courts pour les demandes urgentes ou programmées.</li>\n  <li><strong>Gestion des accès :</strong> Coordination avec gardiens, digicodes et badges pour intervenir sans perturber les occupants.</li>\n  <li><strong>Adaptation au bâti :</strong> Méthodes ajustées selon l'ancienneté des immeubles, la configuration des halls ou des sous-sols.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls ouverts</strong> exposés aux passages fréquents et aux salissures extérieures.",
    "Parkings souterrains soumis aux <strong>dépôts de poussières</strong> et traces de pneus.",
    "Balcons et façades impactés par la <strong>pollution de l'A1</strong> et les poussières urbaines.",
    "Escaliers étroits dans les immeubles anciens, accès matériel à adapter.",
    "Stationnement contraint en centre-ville, créneaux d'intervention à anticiper.",
  ],

  // Texte brut uniquement
  districts: [
    "La Plaine Saint-Denis",
    "Centre-ville",
    "Franc-Moisin",
    "Pleyel",
    "Porte de Paris",
  ],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Saint-Denis",
    "Basilique-Cathédrale de Saint-Denis",
    "Stade de France",
    "Cité du Cinéma",
    "Gare de Saint-Denis",
    "Canal Saint-Denis",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les immeubles avec digicode à Saint-Denis ?",
      answer: "<p>Nous récupérons les <strong>codes d'accès ou badges</strong> en amont auprès du syndic ou du gestionnaire. Nos techniciens disposent des informations nécessaires pour accéder aux parties communes, halls et parkings sans solliciter les occupants à chaque passage.</p>",
    },
    {
      question: "Quel délai prévoir pour une intervention urgente ?",
      answer: "<p>Selon la nature de la demande et la disponibilité, nous pouvons intervenir <strong>sous 24 à 48 heures</strong> sur Saint-Denis. Pour les situations critiques (dégât des eaux, souillure importante), un passage en journée est souvent possible après échange téléphonique.</p>",
    },
    {
      question:
        "Comment gérez-vous le stationnement dans les zones denses du centre-ville ?",
      answer: "<p>Nos équipes repèrent les <strong>emplacements autorisés</strong> ou utilisent les accès parkings quand c'est possible. Pour les interventions longues, nous privilégions les créneaux matinaux afin de limiter les contraintes liées à la circulation.</p>",
    },
    {
      question: "Proposez-vous un suivi ou un compte rendu après intervention ?",
      answer: "<p>Oui, un <strong>reporting</strong> peut être transmis après chaque passage ou de façon périodique selon vos besoins. Photos avant/après, observations terrain et points d'attention sont consignés pour faciliter le suivi avec le syndic ou le gestionnaire.</p>",
    },
  ],

  testimonial: {
    text:
      "Siège de la Basilique-Cathédrale et du Stade de France, au cœur de la Plaine Saint-Denis.",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template doit rester avec services: [].
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Une extraction en profondeur des salissures incrustées dans vos moquettes, avec un séchage maîtrisé pour retrouver des sols propres et circulables rapidement.",
      whyUsBullets: [
        "Connaissance des configurations variées entre immeubles anciens du centre et résidences récentes de la Plaine.",
        "Matériel d'injection-extraction adapté aux moquettes bouclées comme aux dalles textiles de bureaux.",
        "Interventions planifiées en horaires décalés pour limiter la gêne dans les halls à fort passage.",
      ],
      uniqueIntro: "<p>Dans les bureaux et halls de copropriété autour de la <strong>Plaine Saint-Denis</strong> et du centre-ville, les moquettes encaissent un passage quotidien soutenu. Poussières ramenées depuis les trottoirs, traces de semelles humides, taches de café oubliées près des machines : les fibres s'encrassent progressivement, même avec un aspirateur régulier. Les zones de circulation intense — entrées, couloirs, paliers — perdent leur aspect d'origine bien avant le reste de la surface.</p>\n<p class=\"mt-4\">Un revêtement textile grisé ou taché modifie l'impression générale d'un espace. Dans les <strong>immeubles anciens</strong>, les <strong>petits collectifs</strong> ou les <strong>grands ensembles</strong> équipés de moquettes de circulation, cette dégradation visuelle peut générer des remarques de résidents ou donner une image négative à des visiteurs professionnels. Retrouver une teinte homogène et des fibres souples change la perception du lieu dès l'entrée.</p>\n<p class=\"mt-4\">L'intervention que nous proposons commence par un diagnostic du support et des salissures. Nous adaptons ensuite le traitement aux contraintes d'accès — <strong>escaliers étroits</strong>, <strong>halls ouverts</strong>, <strong>stationnement difficile</strong> — pour limiter la gêne et garantir un résultat durable.</p>",
      uniqueDeepDive: "<h3>1. Identifier le support et les salissures</h3>\n<p>Avant toute action, nous examinons la moquette : bouclée, velours, épaisse ou fine. Nous repérons les taches (café, tanin, graisses, marques anciennes) et notons les contraintes d'accès — cages étroites, digicodes, absence de place pour stationner à proximité.</p>\n\n<h3>2. Protéger et traiter en profondeur</h3>\n<p>Les plinthes, bas de murs et mobilier proche sont protégés. Si nécessaire, une aspiration préalable retire les particules libres. L'injection-extraction projette une solution adaptée dans les fibres puis aspire immédiatement l'eau chargée de salissures. Les zones de fort passage reçoivent plusieurs passes. Un détachage ciblé complète le traitement sur les marques résistantes.</p>\n\n<h3>3. Maîtriser l'humidité et finaliser</h3>\n<p>L'extraction est poussée au maximum pour réduire le temps de séchage. Nous indiquons une durée estimée selon l'épaisseur du textile et la ventilation du lieu, avec une consigne de non-piétinement temporaire. Un conseil de fréquence d'entretien est donné pour prolonger le résultat.</p>",
      specificChallenges: [
        "Moquettes de halls soumises au flux quotidien vers le métro et le RER.",
        "Fibres encrassées par les poussières urbaines liées à la proximité de l'A1.",
        "Accès parfois contraint par des escaliers étroits dans les immeubles anciens.",
        "Stationnement difficile imposant une organisation logistique anticipée.",
        "Taches anciennes incrustées dans les grands ensembles à fort trafic.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les immeubles du centre-ville avec cages d'escalier étroites, comment intervenez-vous sans abîmer la moquette ?",
          answer: "<p>Nous utilisons un matériel compact adapté aux passages resserrés. La pression d'injection est ajustée selon l'épaisseur et la fragilité des fibres. Les angles et marches reçoivent un traitement manuel pour éviter toute détérioration du support ou des plinthes adjacentes.</p>",
        },
        {
          question:
            "Avec des halls ouverts vers la Plaine Saint-Denis, combien de temps faut-il pour remettre une moquette en circulation ?",
          answer: "<p>Le séchage dépend de l'épaisseur du textile et de la ventilation du hall. En général, comptez entre 4 et 8 heures avant de pouvoir circuler normalement. Nous maximisons l'extraction pour raccourcir ce délai et vous indiquons une heure de remise en service estimée.</p>",
        },
        {
          question:
            "Quand le stationnement est difficile à Saint-Denis, comment organisez-vous le matériel pour nettoyer une moquette de copropriété ?",
          answer: "<p>Nous repérons en amont les possibilités de stationnement ou de dépose rapide. Le matériel est conditionné pour être transporté à pied si nécessaire. Cette anticipation évite les retards et permet de respecter le créneau convenu avec le syndic ou les résidents.</p>",
        },
        {
          question:
            "Dans les halls de grands ensembles à Saint-Denis, comment traitez-vous les taches anciennes et incrustées sur moquette ?",
          answer: "<p>Les marques anciennes reçoivent un détachage ciblé avant l'injection-extraction générale. Nous appliquons un produit adapté au type de tache — tanin, graisse, pigment — puis laissons agir avant de procéder au lavage. Certaines traces très anciennes peuvent s'atténuer sans disparaître totalement.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec traitement mécanisé des sols, dégraissage ciblé et gestion stricte des eaux de lavage pour un résultat durable.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès dans les sous-sols de La Plaine et du centre-ville de Saint-Denis.",
        "Autolaveuse professionnelle et gestion stricte des eaux de lavage, sans rejet sauvage.",
        "Rotation véhicules planifiée avec le syndic, balisage sécurisé et intervention possible en horaires décalés.",
      ],
      uniqueIntro: "<p>Les traces d'huile et les dépôts de graisse sont visibles sur une grande partie des sols de parking à Saint-Denis. Dans le secteur de <strong>La Plaine Saint-Denis</strong>, où se concentrent immeubles tertiaires et résidences, les sous-sols accumulent rapidement poussières fines, résidus de pneus et coulures de véhicules. Ces salissures s'incrustent dans le revêtement et rendent les surfaces glissantes, notamment sur les rampes d'accès.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux parkings une propreté visible et limite les risques de chute. Sur les <strong>sols en béton brut ou béton peint</strong>, fréquents dans les copropriétés et bâtiments d'entreprise, le dégraissage ciblé permet de traiter les zones critiques sans endommager le revêtement. Les gestionnaires constatent également une réduction des plaintes liées aux odeurs et à l'aspect général des sous-sols.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic ou le responsable de site. Le <strong>stationnement compliqué</strong> et la circulation dense imposent un balisage rigoureux et une rotation des véhicules planifiée en amont.</p>",
      uniqueDeepDive: "<h3>1. Zones de circulation principales</h3>\n<p>Le sol des allées centrales reçoit un balayage préalable pour retirer graviers et débris. L'autolaveuse effectue ensuite plusieurs passes avec un dégraissant adapté au type de revêtement, béton brut ou peint. Les eaux de lavage sont aspirées au fur et à mesure pour éviter tout rejet vers les évacuations non prévues.</p>\n\n<h3>2. Rampes et angles morts</h3>\n<p>Les rampes d'accès font l'objet d'un traitement spécifique pour préserver l'adhérence du revêtement. La haute pression intervient sur les zones encrassées en pied de mur et dans les angles où l'autolaveuse ne passe pas. Les rigoles et regards sont dégagés pour garantir un écoulement correct.</p>\n\n<h3>3. Finitions et recommandations</h3>\n<p>Un passage final permet de vérifier l'état des surfaces traitées. Si demandé, le dépoussiérage des blocs lumineux et tuyauteries complète l'intervention. Un compte-rendu est transmis au gestionnaire avec une préconisation de fréquence adaptée au trafic du parking.</p>",
      specificChallenges: [
        "Sous-sols denses autour de La Plaine : accès restreints et rotation véhicules à organiser.",
        "Revêtements béton brut ou peint nécessitant un dégraissage adapté sans dégradation.",
        "Stationnement compliqué en surface : coordination indispensable pour le matériel.",
        "Rampes d'accès à traiter avec précaution pour conserver l'adhérence.",
        "Gestion des eaux de lavage conforme aux évacuations existantes.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les parkings souterrains proches de La Plaine Saint-Denis, comment retirez-vous les taches d'huile anciennes ?",
          answer: "<p>Les taches d'huile incrustées sont traitées avec un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Sur béton brut, plusieurs passes peuvent être nécessaires. Le résultat dépend de l'ancienneté et de la porosité du revêtement, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question:
            "À Saint-Denis, comment gérez-vous les eaux de lavage dans un parking souterrain sans gêner l'accès des usagers ?",
          answer: "<p>L'autolaveuse aspire les eaux au fur et à mesure du lavage. Nous vérifions l'état des regards et rigoles avant intervention pour garantir un écoulement correct. Le balisage délimite les zones en cours de traitement, permettant aux usagers de circuler sur les parties sèches.</p>",
        },
        {
          question:
            "Dans un parking de Saint-Denis avec circulation dense, comment sécurisez-vous le balisage pendant l'intervention ?",
          answer: "<p>Des cônes et barrières signalétiques délimitent chaque zone traitée. La rotation des véhicules est planifiée en amont avec le gestionnaire. Sur les parkings à fort trafic, l'intervention peut être fractionnée par niveaux ou réalisée en horaires creux.</p>",
        },
        {
          question:
            "À Saint-Denis, adaptez-vous votre nettoyage entre parking souterrain de copropriété et parking d'entreprise ?",
          answer: "<p>Le diagnostic initial identifie le type de revêtement et le niveau d'encrassement. En copropriété, la coordination passe par le syndic et la rotation des véhicules résidents. En entreprise, les horaires sont souvent plus souples et le matériel peut intervenir sur des surfaces plus étendues en une seule session.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon, du sol aux garde-corps, avec gestion anti-coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Balcons exposés aux poussières urbaines et à la pollution routière : nous adaptons le traitement à ces conditions.",
        "Pression ajustée selon le support, produits compatibles carrelage grès et béton, brossage sans dégradation des joints.",
        "Organisation pensée pour les immeubles denses : protection des voisins, gestion des écoulements, intervention discrète.",
      ],
      uniqueIntro: "<p>Comment préserver un balcon agréable quand la pollution de l'A1 et les poussières urbaines s'accumulent semaine après semaine ? Dans les quartiers résidentiels proches de la Mairie de Saint-Denis, les dépôts gris ternissent rapidement les surfaces. Le carrelage perd son éclat, les joints noircissent, et l'espace extérieur devient un recoin qu'on évite plutôt qu'un prolongement du logement.</p>\n<p class=\"mt-4\">Sur les immeubles anciens comme sur les résidences récentes, le béton brut ou le carrelage grès réagit différemment aux intempéries et aux salissures. Les mousses s'installent dans les zones ombragées, les traces de calcaire marquent les écoulements d'eau. Un balcon encrassé, c'est un espace perdu au quotidien, une frustration chaque fois qu'on ouvre la porte-fenêtre.</p>\n<p class=\"mt-4\">Une intervention structurée redonne à cet extérieur son usage réel. Diagnostic du support, protection des menuiseries et du mobilier, traitement adapté aux matériaux présents. En zone dense avec accès d'étage fréquent, la gestion de l'eau et des coulures fait partie intégrante du travail.</p>",
      uniqueDeepDive: "<h3>1. Surface débarrassée et prête à l'usage</h3>\n<p>Le résultat visé : un sol propre, des garde-corps sans traces, des joints désincrustés. Pour y parvenir, on commence par dégager le balcon. Mobilier déplacé ou bâché, plantes protégées, menuiseries couvertes pour éviter les projections.</p>\n<p class=\"mt-4\">Les gros dépôts sont retirés manuellement : feuilles mortes, terre accumulée, débris divers.</p>\n\n<h3>2. Traitement ciblé selon le support</h3>\n<p>Carrelage grès, béton brut ou dalles : chaque matériau reçoit un produit adapté. Le brossage manuel ou mécanique déloge les salissures incrustées. Sur les zones vertes ou mousseuses, un traitement spécifique agit avant rinçage.</p>\n<p class=\"mt-4\">La pression reste contrôlée pour préserver les joints. Les garde-corps et vitrages sont nettoyés sans laisser de traces.</p>\n\n<h3>3. Rinçage maîtrisé et séchage</h3>\n<p>L'eau est gérée pour éviter les coulures chez les voisins du dessous. Les écoulements sont orientés, la façade protégée. Après séchage, quelques conseils d'entretien permettent de maintenir le résultat plus longtemps.</p>",
      specificChallenges: [
        "Dépôts gris liés à la proximité de l'A1 sur les balcons exposés côté rue.",
        "Joints de carrelage noircis par l'humidité et les mousses dans les zones ombragées.",
        "Gestion des coulures obligatoire en immeuble collectif dense.",
        "Accès par étage avec stationnement difficile à proximité.",
        "Supports variés selon l'époque de construction : béton brut, carrelage, dalles.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons carrelés du centre-ville de Saint-Denis, comment évitez-vous d'abîmer les joints pendant le nettoyage ?",
          answer: "<p>La pression est systématiquement adaptée à l'état des joints. Sur les carrelages grès fréquents dans le centre-ville, nous privilégions un brossage mécanique doux combiné à un produit désincrustant. Le jet haute pression n'intervient qu'en finition, à distance contrôlée, pour ne pas creuser les joints fragilisés par le temps.</p>",
        },
        {
          question:
            "Dans un immeuble dense à Saint-Denis, comment gérez-vous l'eau et les coulures lors du nettoyage de balcon ?",
          answer: "<p>Avant de commencer, nous identifions les points d'écoulement et protégeons les zones sensibles. L'eau est orientée vers les évacuations existantes, jamais projetée vers la façade ou les balcons voisins. En cas de risque, des bâches de protection sont installées pour éviter toute nuisance aux occupants des étages inférieurs.</p>",
        },
        {
          question:
            "Sur les balcons exposés à Saint-Denis, comment retirez-vous les dépôts verts et les mousses installées ?",
          answer: "<p>Les mousses et dépôts verts reçoivent un traitement préalable qui les décolle du support. Après un temps de pose adapté, le brossage retire la couche végétale sans agresser le carrelage ou le béton. Le rinçage élimine les résidus. Sur les zones très exposées à l'humidité, nous conseillons une fréquence d'entretien adaptée.</p>",
        },
        {
          question:
            "Dans les résidences récentes de Saint-Denis, comment nettoyez-vous les balcons avec garde-corps et vitrages sans traces ?",
          answer: "<p>Les garde-corps métalliques ou vitrés sont traités avec des produits non abrasifs et essuyés pour éviter les traces de séchage. Sur les vitrages, nous utilisons une raclette professionnelle après application d'un détergent neutre. Le résultat : des surfaces transparentes et des montants propres, sans auréoles ni coulures visibles.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et pose de dispositifs anti-retour pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des zones exposées à Saint-Denis, notamment près du canal et des axes passants.",
        "Protocole complet avec EPI, confinement et désinfection virucide adaptée aux supports locaux.",
        "Organisation discrète en immeuble dense, évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts s'accumulent sur les rebords et le sol du balcon. Près du canal et des corniches du centre-ville, les oiseaux trouvent des points de repos réguliers. Les fientes sèchent, durcissent, et l'odeur persiste même fenêtres fermées. Impossible d'étendre du linge ou de profiter de cet espace sans ressentir une gêne immédiate.</p>\n<p class=\"mt-4\">Sur les balcons en béton brut ou carrelés, fréquents dans les immeubles collectifs de Saint-Denis, les résidus s'incrustent dans les joints et les micro-fissures. Le nettoyage à l'eau seule ne suffit plus. Les traces reviennent, la surface reste terne, et l'inquiétude sanitaire s'installe. Un traitement adapté permet de retrouver un sol propre, une atmosphère assainie, et la possibilité d'utiliser à nouveau cet espace au quotidien.</p>\n<p class=\"mt-4\">Dans une ville dense et très circulée, l'intervention doit intégrer un protocole sanitaire renforcé. Confinement de la zone, protection du logement, aération contrôlée : chaque étape vise à limiter la dispersion des particules et à garantir un résultat durable.</p>",
      uniqueDeepDive: "<h3>1. Sécurisation et confinement</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, gants, lunettes, combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Une humidification préalable neutralise les poussières sèches avant manipulation.</p>\n\n<h3>2. Collecte et désinfection</h3>\n<p>Les fientes sont ramassées manuellement et conditionnées en sacs étanches. Le sol, le garde-corps et les vitrages sont nettoyés avec un produit virucide homologué.</p>\n<p class=\"mt-4\">Le temps de contact est respecté pour éliminer les agents pathogènes présents sur les supports béton ou carrelés.</p>\n\n<h3>3. Rinçage et prévention</h3>\n<p>Un rinçage final permet d'évacuer les résidus de produit. Le balcon reste en aération le temps nécessaire avant réutilisation.</p>\n<p class=\"mt-4\">Si souhaité, des pics ou filets anti-pigeons peuvent être posés sur les rebords et corniches pour limiter le retour des oiseaux. Les déchets sont évacués en sacs étanches.</p>",
      specificChallenges: [
        "Balcons proches du canal souvent exposés aux passages réguliers de pigeons.",
        "Supports béton ou carrelés où les fientes s'incrustent dans les joints.",
        "Immeubles denses nécessitant un confinement rigoureux pendant l'intervention.",
        "Odeurs persistantes si le traitement n'inclut pas de désinfection complète.",
        "Risque de réinfestation sans pose de dispositifs dissuasifs après nettoyage.",
      ],
      faqAdditions: [
        {
          question:
            "Sur un balcon proche du canal à Saint-Denis, quels sont les risques sanitaires quand les fientes s'accumulent ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui peuvent se disperser sous forme de poussières sèches. Sur un balcon exposé près du canal, l'accumulation régulière aggrave le risque. Un assainissement avec désinfection virucide élimine ces agents et rend l'espace à nouveau utilisable en sécurité.</p>",
        },
        {
          question:
            "À Saint-Denis, quel protocole EPI utilisez-vous pour nettoyer des fientes de pigeons sur un balcon en immeuble dense ?",
          answer: "<p>L'intervenant porte masque FFP2, gants, lunettes et combinaison jetable. La zone est confinée par bâchage pour éviter toute dispersion vers le logement ou les voisins. Cette organisation limite les nuisances dans les immeubles à forte densité et garantit une intervention maîtrisée.</p>",
        },
        {
          question:
            "Sur un balcon en béton ou carrelé à Saint-Denis, comment assurez-vous la désinfection après les fientes de pigeons ?",
          answer: "<p>Après collecte des fientes, un produit virucide homologué est appliqué sur le sol, le garde-corps et les vitrages. Le temps de contact est respecté pour éliminer les agents pathogènes. Les joints et micro-fissures du béton ou du carrelage sont traités pour éviter toute persistance de contamination.</p>",
        },
        {
          question:
            "Dans les zones ouvertes de Saint-Denis, quelles parties de balcon sont les plus exposées aux fientes de pigeons ?",
          answer: "<p>Les rebords, corniches et garde-corps constituent les premiers points de repos des oiseaux. Près des axes passants et des espaces ouverts, ces zones accumulent rapidement les dépôts. Un nettoyage ciblé suivi d'une pose de pics ou filets réduit significativement le risque de réinfestation.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchissement complet de vos canapés, tapis et matelas par injection-extraction, avec détachage ciblé et séchage optimisé pour retrouver un intérieur sain rapidement.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Saint-Denis, du quartier Pleyel aux résidences du centre-ville.",
        "Détachage ciblé selon la nature des taches et séchage optimisé pour chaque type de textile.",
        "Organisation anticipée des accès en étage et du stationnement pour une intervention fluide.",
      ],
      uniqueIntro: "<p>Dans les logements du quartier Pleyel et des secteurs résidentiels du centre, les canapés et tapis accumulent au fil des mois poussières, taches alimentaires et résidus liés à la vie quotidienne. Les familles avec enfants ou animaux constatent souvent des auréoles persistantes, des odeurs diffuses ou un aspect terne qui s'installe malgré les aspirations régulières.</p>\n<p class=\"mt-4\">Un entretien en profondeur redonne aux textiles leur fraîcheur d'origine. Les fibres retrouvent leur souplesse, les couleurs gagnent en éclat et l'atmosphère intérieure s'améliore sensiblement. Dans les appartements de Saint-Denis, où les surfaces textiles côtoient des espaces de vie familiaux, cette remise en état apporte un confort visible dès la fin de l'intervention.</p>\n<p class=\"mt-4\">Chaque passage débute par un diagnostic du tissu et des salissures présentes. Les contraintes d'accès en étage et le stationnement en zone dense sont anticipés pour organiser l'intervention sans perte de temps ni gêne prolongée.</p>",
      uniqueDeepDive: "<h3>1. Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'obtenir une surface débarrassée des salissures incrustées, des allergènes et des odeurs. Le résultat se traduit par un toucher plus agréable et un aspect ravivé, que ce soit sur un canapé en coton, un tapis en laine ou un matelas synthétique.</p>\n\n<h3>2. Diagnostic et pré-traitement adapté</h3>\n<p>Avant toute action, le type de tissu est identifié : velours, fibres naturelles ou synthétiques. Un test discret sur zone cachée valide la compatibilité du traitement. Les taches tenaces reçoivent un détachage enzymatique ciblé selon leur nature — café, vin, urine ou graisse.</p>\n\n<h3>3. Injection-extraction et séchage maîtrisé</h3>\n<p>Le traitement principal combine injection d'une solution adaptée et extraction immédiate des résidus. La pression et la température sont modulées selon la fragilité du textile. L'extraction maximale réduit le temps de séchage, généralement compris entre quelques heures et une demi-journée selon l'épaisseur et l'aération disponible.</p>",
      specificChallenges: [
        "Taches alimentaires fréquentes dans les intérieurs familiaux autour de Pleyel.",
        "Textiles variés nécessitant un diagnostic préalable avant traitement.",
        "Accès en étage sans ascenseur dans certains immeubles du centre-ville.",
        "Stationnement limité imposant une organisation logistique rigoureuse.",
        "Séchage à adapter selon la ventilation disponible dans les appartements.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les logements familiaux de Pleyel ou du centre-ville, comment éliminez-vous acariens et allergènes d'un canapé ou d'un tapis ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur pour déloger acariens, poussières et résidus allergènes. La solution utilisée est adaptée aux textiles résidentiels et sans danger pour les occupants après séchage complet. Les familles avec enfants ou animaux constatent une amélioration de l'air ambiant.</p>",
        },
        {
          question:
            "À Saint-Denis, combien de temps faut-il pour sécher un canapé ou un tapis après un nettoyage à domicile ?",
          answer: "<p>Le temps de séchage varie selon l'épaisseur du textile et l'aération du logement. En général, comptez entre trois et huit heures. Une extraction maximale pendant l'intervention réduit ce délai. Nous conseillons d'ouvrir les fenêtres ou d'utiliser un ventilateur pour accélérer le processus.</p>",
        },
        {
          question:
            "Dans un appartement de Saint-Denis, comment adaptez-vous votre méthode au textile d'un canapé ou d'un tapis ?",
          answer: "<p>Chaque tissu reçoit un traitement spécifique. Le coton et le synthétique supportent une extraction plus appuyée, tandis que la laine ou le velours nécessitent une pression réduite et une température contrôlée. Un test préalable sur zone discrète confirme la compatibilité avant de traiter l'ensemble.</p>",
        },
        {
          question:
            "À Saint-Denis, comment gérez-vous l'accès en étage et le stationnement pour nettoyer un canapé ou un tapis ?",
          answer: "<p>Nous anticipons les contraintes de la zone dense : repérage du stationnement, prise en compte des digicodes et montée du matériel en étage. L'équipement est conçu pour être transportable facilement. Cette organisation évite les retards et limite la gêne pour les occupants de l'immeuble.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support — carrelage, béton ou dalle — et élimination des mousses, lichens et dépôts tenaces pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des configurations terrasses dans les ZAC et résidences récentes de Saint-Denis, exposées à l'humidité urbaine.",
        "Méthodes ajustées selon le support — carrelage, béton, dalle — avec traitement anti-mousse ciblé si nécessaire.",
        "Organisation incluant déplacement du mobilier, protection des plantes et gestion de l'écoulement sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Comment préserver une terrasse quand l'humidité et les dépôts verts s'installent saison après saison ? Dans les <strong>secteurs récents et ZAC de Saint-Denis</strong>, les toits-terrasses et rez-de-chaussée subissent une exposition prolongée aux intempéries. Les mousses colonisent les joints, le carrelage devient glissant, et l'espace perd son attrait initial malgré un entretien régulier.</p>\n<p class=\"mt-4\">Sur les <strong>supports en carrelage ou béton</strong> fréquents dans ces résidences, les salissures s'incrustent différemment selon la porosité du matériau. Un traitement adapté permet de retrouver une surface propre, moins glissante, et d'espacer les interventions futures. L'aspect visuel s'améliore, et l'usage quotidien redevient agréable sans crainte de chute.</p>\n<p class=\"mt-4\">L'intervention prend en compte les <strong>contraintes d'accès en immeubles denses</strong> : déplacement du mobilier, protection des jardinières, gestion de l'écoulement des eaux vers les points prévus. Chaque étape suit un ordre précis pour limiter la gêne et garantir un résultat durable.</p>",
      uniqueDeepDive: "<h3>1. Sol principal et joints</h3>\n<p>Le revêtement fait l'objet d'un balayage préalable pour retirer feuilles, terre et débris accumulés. Un produit adapté au support — carrelage grès ou béton — est appliqué sur l'ensemble de la surface. Le brossage mécanique déloge les mousses incrustées dans les joints sans fragiliser le matériau.</p>\n\n<h3>2. Éléments verticaux et périphériques</h3>\n<p>Les murets, garde-corps et éventuels escaliers extérieurs reçoivent le même traitement. La pression est ajustée selon l'état de chaque zone pour éviter toute dégradation. Les margelles ou bordures sont traitées avec attention aux raccords.</p>\n\n<h3>3. Rinçage et gestion des eaux</h3>\n<p>L'eau de rinçage est orientée vers les points d'écoulement existants. Les plantations proches sont protégées pendant cette phase. Si la terrasse surplombe un espace voisin, des précautions supplémentaires limitent les projections. Le séchage naturel s'effectue en quelques heures selon la météo.</p>",
      specificChallenges: [
        "Mousses et lichens qui colonisent les joints des terrasses exposées à l'ombre ou à l'humidité.",
        "Supports en béton poreux nécessitant un traitement adapté pour éviter les infiltrations.",
        "Mobilier extérieur et jardinières à déplacer ou protéger avant chaque intervention.",
        "Gestion de l'écoulement des eaux vers les points prévus dans les immeubles denses.",
        "Terrasses en hauteur ou toits-terrasses avec contraintes d'accès et protection du voisinage.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les ZAC de Saint-Denis, comment traitez-vous une terrasse en carrelage ou en béton sans abîmer le support ?",
          answer: "<p>Le choix de la méthode dépend de la porosité du matériau. Sur carrelage grès, un brossage mécanique avec produit adapté suffit généralement. Sur béton plus poreux, la pression est réduite et le traitement anti-mousse appliqué en finition pour limiter la réapparition des dépôts verts.</p>",
        },
        {
          question:
            "Sur une terrasse de Saint-Denis, comment organisez-vous le déplacement du mobilier et des plantes avant l'intervention ?",
          answer: "<p>Le mobilier léger est déplacé vers une zone protégée de la terrasse. Les jardinières lourdes sont bâchées sur place si leur déplacement n'est pas possible. Cette préparation permet d'accéder à l'ensemble de la surface et d'éviter les projections sur les éléments fragiles.</p>",
        },
        {
          question:
            "À Saint-Denis, comment traitez-vous les mousses et l'humidité qui reviennent régulièrement sur une terrasse exposée ?",
          answer: "<p>Après le retrait mécanique des mousses, un traitement préventif peut être appliqué selon l'exposition de la terrasse. Les zones ombragées ou mal ventilées nécessitent parfois une fréquence d'entretien plus rapprochée, généralement une à deux fois par an selon les conditions.</p>",
        },
        {
          question:
            "Sur une terrasse carrelée ou béton à Saint-Denis, quand privilégiez-vous un traitement doux plutôt qu'une méthode plus puissante ?",
          answer: "<p>Le traitement doux convient aux supports récents ou aux joints fragiles. La haute pression est réservée aux bétons épais et aux salissures tenaces. L'état du revêtement est évalué avant intervention pour adapter la technique et préserver l'intégrité du matériau.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol au plafond, avec coordination adaptée aux contraintes d'accès et respect des délais pour état des lieux ou fin de chantier.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Saint-Denis, du studio ancien aux résidences récentes de La Plaine.",
        "Polyvalence sur tous types de surfaces : parquet, carrelage, faïence, vitres et équipements sanitaires.",
        "Coordination avec agences et propriétaires pour respecter les créneaux d'état des lieux malgré les accès contraints.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les logements du centre-ville de Saint-Denis et des secteurs proches de la Basilique accumulent poussières de chantier, traces de peinture et résidus divers. Les propriétaires comme les agences immobilières se retrouvent face à un délai serré pour rendre un appartement prêt à la remise des clés, sans disposer du temps ni du matériel adapté.</p>\n<p class=\"mt-4\">Un nettoyage complet transforme un logement encombré de salissures en espace habitable. Dans les studios, T2 et T3 des immeubles anciens comme des résidences récentes, chaque surface retrouve un aspect propre : sols débarrassés des dépôts, vitres dégagées, pièces d'eau assainies. Le résultat facilite la signature du bail ou la restitution du dépôt de garantie.</p>\n<p class=\"mt-4\">Face aux demandes liées aux fins de chantier et aux déménagements, avec des accès parfois contraints par digicodes et stationnement limité, une préparation rigoureuse permet de respecter les créneaux imposés tout en assurant un travail minutieux.</p>",
      uniqueDeepDive: "<h3>1. Diagnostic et préparation</h3>\n<p>Avant toute action, un état des lieux initial identifie la nature des salissures : poussière de plâtre, traces d'enduit, résidus de colle. Les surfaces fragiles sont protégées si nécessaire.</p>\n<p class=\"mt-4\">Les gravats ou déchets de chantier sont évacués pour libérer l'espace de travail.</p>\n\n<h3>2. Nettoyage complet des pièces</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes avant de traiter les sols selon leur revêtement. Les pièces d'eau reçoivent une attention particulière : sanitaires, faïence, joints, plans de travail et électroménager.</p>\n<p class=\"mt-4\">Les vitres intérieures sont nettoyées pour laisser entrer la lumière.</p>\n\n<h3>3. Finitions et contrôle</h3>\n<p>Les détails font la différence : interrupteurs, poignées, radiateurs, intérieurs de placards. Les éventuelles traces de peinture ou colle sur les menuiseries sont traitées.</p>\n<p class=\"mt-4\">Un contrôle final vérifie chaque zone avant aération du logement et remise des clés si applicable.</p>",
      specificChallenges: [
        "Digicodes et badges fréquents dans les immeubles du centre-ville, nécessitant une coordination préalable.",
        "Stationnement limité en zone dense, imposant une logistique adaptée pour le matériel.",
        "Résidus de chantier variés selon les travaux : plâtre, peinture, colle, enduit à traiter spécifiquement.",
        "Délais serrés pour les états des lieux avec rotation locative importante sur certains secteurs.",
        "Surfaces multiples dans un même logement : parquet ancien, carrelage, faïence, nécessitant des produits adaptés.",
      ],
      faqAdditions: [
        {
          question:
            "Après un déménagement dans le centre-ville de Saint-Denis, sous quel délai pouvez-vous intervenir pour un nettoyage complet ?",
          answer: "<p>Selon la disponibilité et la surface du logement, nous pouvons généralement intervenir sous 48 à 72 heures. Pour les situations urgentes liées à un état des lieux imminent, nous étudions chaque demande afin de proposer un créneau adapté aux contraintes de remise des clés.</p>",
        },
        {
          question:
            "À Saint-Denis, comment adaptez-vous un nettoyage de fin de chantier dans un studio, un T2 ou un T3 ?",
          answer: "<p>Le protocole reste identique mais le temps d'intervention varie selon la surface et l'ampleur des travaux réalisés. Un studio avec peu de résidus sera traité en quelques heures, tandis qu'un T3 après rénovation complète nécessitera une journée pour couvrir toutes les pièces et finitions.</p>",
        },
        {
          question:
            "Pour un état des lieux à Saint-Denis, quel niveau de propreté visez-vous dans un appartement ou une maison ?",
          answer: "<p>L'objectif est un logement prêt à être habité : sols sans traces, vitres propres, sanitaires assainis, placards vidés et nettoyés. Ce niveau permet de faciliter la restitution du dépôt de garantie ou l'entrée d'un nouveau locataire sans réserve sur la propreté.</p>",
        },
        {
          question:
            "Dans les immeubles de Saint-Denis avec digicodes et stationnement compliqué, comment préparez-vous l'accès au logement ?",
          answer: "<p>Nous recueillons en amont les codes d'accès, horaires d'ouverture du hall et consignes particulières. Pour le stationnement, nous identifions les zones de dépose autorisées ou les créneaux moins contraints afin d'acheminer le matériel sans retarder le début de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;