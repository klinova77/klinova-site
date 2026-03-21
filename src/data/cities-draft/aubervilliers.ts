import type { City } from "~/types/geo";

const city: City = {
  name: "Aubervilliers",
  slug: "aubervilliers",
  postalCodes: ["93300"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Aubervilliers. Du secteur Mairie jusqu'aux abords du canal Saint-Denis, une équipe locale intervient avec des méthodes adaptées au bâti dense de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>Terminus de la ligne 12 à la Mairie et traversée par le canal Saint-Denis : Aubervilliers concentre des flux importants sur un tissu urbain dense. Klinova s'y positionne comme partenaire terrain pour les syndics, gestionnaires et occupants qui recherchent un <strong>interlocuteur réactif</strong>.</p>\n<p class=\"mt-4\">Propreté des communs, maintenance des sols techniques, remise en état d'espaces extérieurs : chaque intervention suit un protocole adapté aux contraintes d'accès et au planning des occupants. Un reporting peut être mis en place sur demande pour les gestionnaires.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Prise en compte des difficultés de stationnement et des accès par digicode. Horaires calés selon les usages du bâtiment.</li>\n  <li><strong>Méthodes explicites :</strong> Chaque prestation détaille les étapes, le matériel utilisé et les délais de remise en service selon l'état initial.</li>\n  <li><strong>Suivi adapté :</strong> Compte-rendu d'intervention disponible, planification récurrente possible pour les copropriétés et locaux professionnels.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls ouverts</strong> exposés aux poussières urbaines et aux passages fréquents.",
    "Accès par <strong>digicode ou badge</strong> nécessitant une coordination préalable.",
    "Stationnement contraint dans les secteurs denses proches des stations de métro.",
    "Pollution atmosphérique liée à la <strong>proximité des axes A86 et A1</strong>.",
    "Grands ensembles avec cages d'escalier étroites et parkings en sous-sol.",
    "Résidences récentes aux matériaux variés demandant des <strong>protocoles adaptés</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville / Mairie",
    "Landy",
    "Maladrerie-Emile Dubois",
    "Porte d'Aubervilliers",
    "Fort d'Aubervilliers",
  ],
  nearbyCities: ["Saint-Denis", "La Courneuve", "Pantin", "Paris"],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Aubervilliers",
    "Canal Saint-Denis",
    "Fort d'Aubervilliers",
    "Station Aimé Césaire",
    "Théâtre de la Commune",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment se déroule la prise de rendez-vous pour une intervention à Aubervilliers ?",
      answer: "<p>Un premier échange permet de préciser le type de surface, l'accès au site et les contraintes horaires. Pour les immeubles avec <strong>digicode ou badge</strong>, nous organisons la remise des accès en amont. Le créneau est confirmé sous 48 heures selon disponibilité.</p>",
    },
    {
      question: "Le stationnement est compliqué dans ma rue, comment gérez-vous ce point ?",
      answer: "<p>Nos équipes anticipent les difficultés de stationnement fréquentes à Aubervilliers. Selon le secteur, nous privilégions des <strong>créneaux en début de matinée</strong> ou identifions une zone de dépose à proximité. Le matériel est acheminé à pied si nécessaire.</p>",
    },
    {
      question: "Proposez-vous un suivi régulier pour les copropriétés ?",
      answer: "<p>Oui. Après une première intervention, nous pouvons établir un <strong>calendrier d'entretien</strong> adapté à la fréquentation du bâtiment. Les passages sont planifiés en concertation avec le syndic ou le conseil syndical, avec reporting transmis après chaque intervention.</p>",
    },
    {
      question: "Quel délai prévoir pour une demande urgente ?",
      answer: "<p>En cas de besoin rapide — dégât, salissure accidentelle — nous évaluons la faisabilité d'une intervention sous <strong>24 à 72 heures</strong> selon la nature du chantier et la disponibilité des équipes sur le secteur d'Aubervilliers.</p>",
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
  // => Le FORMAT ONLY injecte uniquement les services présents dans l'entrée (bundle/plan/servicesRequested).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec un séchage maîtrisé pour une remise en service rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des typologies de bâti autour du centre-ville et du secteur Fort d'Aubervilliers, avec leurs contraintes d'accès spécifiques.",
        "Matériel d'injection-extraction professionnel adapté aux moquettes bouclées comme aux dalles textiles de bureaux.",
        "Organisation des interventions en horaires décalés pour limiter la gêne dans les halls et espaces de travail occupés.",
      ],
      uniqueIntro: "<p>Dans le <strong>secteur Mairie et centre-ville d'Aubervilliers</strong>, les moquettes des bureaux et halls d'immeubles subissent un passage quotidien soutenu. Les fibres accumulent poussières urbaines, traces de semelles et résidus apportés depuis l'extérieur. Sans entretien adapté, le textile se ternit et les taches s'incrustent progressivement dans la trame.</p>\n<p class=\"mt-4\">Les immeubles anciens et grands ensembles de la commune présentent souvent des revêtements textiles en parties communes ou dans les locaux professionnels. Une moquette encrassée dégrade l'image d'un hall d'accueil ou d'un open space. Le détachage régulier préserve l'aspect visuel et prolonge la durée de vie du support, évitant un remplacement prématuré.</p>\n<p class=\"mt-4\">L'intervention repose sur un diagnostic préalable : identification du type de fibre, repérage des zones de trafic intense et des taches spécifiques. Le plan de traitement tient compte des <strong>contraintes de stationnement</strong> liées à la proximité des lignes de métro 7 et 12, avec une organisation adaptée pour acheminer le matériel sans perturber les occupants.</p>",
      uniqueDeepDive: "<h3>Zones de passage principal</h3>\n<p>Les couloirs et entrées concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le traitement humide. L'injection-extraction cible ces surfaces à fort trafic avec plusieurs passes successives pour déloger les résidus incrustés.</p>\n\n<h3>Surfaces secondaires et angles</h3>\n<p>Les espaces sous mobilier et les bordures de plinthes nécessitent une <strong>attention particulière</strong>. La buse adaptée permet d'atteindre les recoins sans risquer de mouiller les bas de murs. Le détachage localisé traite les marques de café ou de tanin identifiées lors du diagnostic.</p>\n\n<h3>Finalisation et contrôle du séchage</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon l'épaisseur du textile et la ventilation disponible. Les zones traitées restent balisées jusqu'à séchage complet. Une <strong>recommandation de fréquence d'entretien</strong> est transmise en fonction de l'usage observé.</p>",
      specificChallenges: [
        "Halls d'immeubles anciens avec moquettes exposées au flux quotidien des résidents.",
        "Dalles textiles en bureaux soumises aux passages répétés et aux roulettes de sièges.",
        "Stationnement limité nécessitant une préparation logistique pour le matériel d'extraction.",
        "Taches de café et <strong>traces de semelles incrustées</strong> dans les zones de circulation intense.",
        "Séchage à coordonner avec les horaires d'occupation des locaux professionnels.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les halls d'immeubles autour de la Mairie d'Aubervilliers, comment organisez-vous le passage du matériel sans gêner les occupants ?",
          answer: "<p>Le matériel est acheminé en dehors des heures de pointe. Les câbles et flexibles sont sécurisés le long des murs pour dégager le passage. Un <strong>balisage temporaire</strong> signale la zone en cours de traitement, permettant aux résidents de circuler sans risque ni attente prolongée.</p>",
        },
        {
          question:
            "Dans les immeubles anciens du centre-ville d'Aubervilliers, comment traitez-vous les taches incrustées sur moquette ?",
          answer: "<p>Un <strong>pré-détachage</strong> cible les marques anciennes avant le passage en injection-extraction. Les produits sont adaptés à la nature de la tache identifiée lors du diagnostic. Plusieurs passes sur les zones concernées permettent de déloger les résidus sans fragiliser les fibres du textile.</p>",
        },
        {
          question:
            "Dans les copropriétés de la Maladrerie-Emile Dubois, quelle différence faites-vous entre un nettoyage de moquette en copropriété et en bureau ?",
          answer: "<p>En copropriété, l'intervention se concentre sur les parties communes avec une coordination via le syndic ou le gardien. En bureau, le planning s'adapte aux horaires d'activité et aux contraintes de remise en service rapide des postes de travail.</p>",
        },
        {
          question:
            "Avec le stationnement compliqué près des lignes 7 et 12, comment préparez-vous l'intervention pour une moquette à Aubervilliers ?",
          answer: "<p>Le repérage préalable identifie les possibilités de stationnement temporaire ou de dépose rapide. Le matériel est conditionné pour un transport efficace sur quelques dizaines de mètres si nécessaire. Cette anticipation évite les retards et garantit le respect du créneau prévu.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec traitement des taches d'huile, lavage mécanisé et gestion rigoureuse des eaux usées pour un sol assaini.",
      whyUsBullets: [
        "Connaissance des parkings collectifs du secteur Porte d'Aubervilliers et de leurs contraintes d'accès spécifiques.",
        "Autolaveuse professionnelle et dégraissants adaptés aux revêtements béton, avec gestion stricte des eaux usées.",
        "Coordination avec syndics pour rotation des véhicules, balisage sécurisé et intervention en horaires décalés si nécessaire.",
      ],
      uniqueIntro: "<p>Les traces noires de pneus s'accumulent sur les allées de circulation, tandis que des auréoles d'huile marquent durablement les places de stationnement. Dans le secteur de la <strong>Porte d'Aubervilliers</strong>, les parkings collectifs subissent un flux de véhicules soutenu qui accélère l'encrassement des sols. Les rampes d'accès deviennent glissantes, les rigoles se bouchent progressivement.</p>\n<p class=\"mt-4\">Un sol de parking dégradé renvoie une image négative aux résidents et visiteurs. Les revêtements en <strong>béton brut ou béton peint</strong>, fréquents dans les structures souterraines d'Aubervilliers, absorbent les graisses si elles ne sont pas traitées régulièrement. Les copropriétés reçoivent des remarques, les gestionnaires constatent une dégradation accélérée des marquages au sol.</p>\n<p class=\"mt-4\">La <strong>proximité des axes A86 et A1</strong> impose une organisation rigoureuse pour intervenir sans bloquer les accès. Nous coordonnons le balisage, la rotation des véhicules et le traitement par zones pour limiter la gêne. Un compte-rendu détaillé accompagne chaque intervention.</p>",
      uniqueDeepDive: "<h3>Encrassement général et résidus de circulation</h3>\n<p>Le balayage préalable élimine graviers, poussières et débris accumulés. Nous identifions le type de revêtement et l'état des évacuations avant toute action. Un balisage sécurisé délimite les zones en cours de traitement.</p>\n\n<h3>Taches d'huile et graisses incrustées</h3>\n<p>L'autolaveuse combinée au dégraissant adapté traite les surfaces en passes mécanisées. Les zones critiques reçoivent un traitement ciblé : pieds de murs, angles morts, emplacements les plus sollicités. Les rampes bénéficient d'une attention particulière pour préserver leur adhérence.</p>\n\n<h3>Eaux de lavage et rigoles obstruées</h3>\n<p>La gestion des eaux respecte les évacuations existantes, sans rejet sauvage. Les rigoles et regards sont dégagés pour rétablir un écoulement correct. Si demandé, un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention. Nous transmettons des recommandations de fréquence adaptées au trafic constaté.</p>",
      specificChallenges: [
        "Flux véhicules important près de la Porte d'Aubervilliers, nécessitant un balisage rigoureux.",
        "Revêtements béton brut absorbant les huiles si le traitement tarde.",
        "Rampes d'accès inclinées devenant glissantes sans dégraissage régulier.",
        "Rigoles et regards à dégager pour éviter les stagnations d'eau.",
        "Coordination accès indispensable avec les gestionnaires pour limiter la gêne.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les parkings proches de la Porte d'Aubervilliers, comment traitez-vous les traces d'huile anciennes ?",
          answer: "<p>Les taches d'huile incrustées dans le béton reçoivent un dégraissant concentré avant le passage de l'autolaveuse. Nous insistons sur les emplacements les plus marqués avec plusieurs passes si nécessaire. Le résultat dépend de l'ancienneté des dépôts, mais l'amélioration visuelle reste significative.</p>",
        },
        {
          question:
            "À Aubervilliers, comment gérez-vous les eaux de lavage dans un parking collectif sans perturber la circulation ?",
          answer: "<p>L'autolaveuse aspire les eaux au fur et à mesure du lavage. Nous vérifions l'état des évacuations avant intervention pour garantir un écoulement correct. Le zonage par secteurs permet de maintenir une partie du parking accessible pendant le traitement.</p>",
        },
        {
          question:
            "Près des axes A86 et A1, comment organisez-vous le balisage pour assurer la sécurité des usagers pendant le nettoyage ?",
          answer: "<p>Nous installons une signalétique visible délimitant les zones en cours de traitement. La rotation s'effectue par secteurs pour que les résidents puissent stationner ailleurs temporairement. Les horaires d'intervention sont définis avec le gestionnaire pour réduire les conflits d'accès.</p>",
        },
        {
          question:
            "Dans les parkings des zones d'activités d'Aubervilliers, faut-il prévoir une fermeture totale ou partielle pendant l'intervention ?",
          answer: "<p>Une fermeture partielle suffit dans la plupart des cas. Nous traitons le parking par zones successives, libérant chaque secteur après séchage. Pour les parkings à fort trafic, une intervention en horaires décalés ou le week-end limite davantage la gêne.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion contrôlée de l'eau pour préserver la façade et le voisinage.",
      whyUsBullets: [
        "Connaissance des configurations de balcons dans les résidences d'Aubervilliers, de la Maladrerie à la Porte d'Aubervilliers.",
        "Pression ajustée selon le support et l'état des joints, pour un résultat propre sans dégradation.",
        "Organisation pensée pour limiter les nuisances : protection façade, gestion des écoulements, coordination avec les occupants.",
      ],
      uniqueIntro: "<p>Comment profiter d'un balcon quand les dépôts s'accumulent semaine après semaine ? Dans le <strong>quartier Maladrerie-Emile Dubois</strong>, où les balcons sont intégrés à un tissu résidentiel dense, la pollution urbaine et les particules fines laissent rapidement un voile grisâtre sur les surfaces. Les joints noircissent, le carrelage perd son éclat, et l'espace extérieur devient un endroit qu'on évite plutôt qu'on apprécie.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change la perception du logement. Les <strong>résidences récentes et grands ensembles</strong> d'Aubervilliers présentent souvent des balcons en carrelage grès ou béton brut, parfois des loggias ouvertes. Ces configurations accumulent feuilles mortes, mousses et traces noires qui s'incrustent si rien n'est fait. Un traitement adapté redonne un espace agréable, utilisable au quotidien.</p>\n<p class=\"mt-4\">L'intervention prend en compte l'<strong>exposition urbaine marquée</strong> et les contraintes d'accès en étage. Chaque surface est évaluée avant le choix de la méthode, pour un résultat visible sans risque pour les matériaux ni gêne pour les voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries — fenêtres, portes, seuils — reçoivent une protection pour éviter les projections. Les gros dépôts (feuilles, terre, débris) sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement des surfaces</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour carrelage grès, béton brut ou dalles. Le brossage manuel ou mécanique déloge les salissures incrustées. Le rinçage s'effectue avec une pression contrôlée, adaptée à l'état des joints. Les garde-corps, vitrages et murs mitoyens accessibles sont également traités.</p>\n\n<h3>Gestion de l'eau et finalisation</h3>\n<p>Un dispositif anti-coulures protège la façade et les balcons voisins. L'eau est dirigée vers les évacuations existantes. Après séchage, le mobilier est remis en place. Des conseils d'entretien vous sont transmis pour espacer les interventions futures.</p>",
      specificChallenges: [
        "Pollution atmosphérique liée à la proximité de l'A86 et des axes urbains, accélérant l'encrassement.",
        "Balcons en béton brut ou carrelage grès nécessitant des produits et pressions adaptés.",
        "Gestion des coulures en façade dans les grands ensembles à plusieurs étages.",
        "Stationnement difficile compliquant l'acheminement du matériel pour les interventions.",
        "Présence de mousses et dépôts verts sur les balcons exposés nord ou proches du canal.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons des grands ensembles d'Aubervilliers, comment évitez-vous d'abîmer le carrelage et les joints ?",
          answer: "<p>La pression est réglée en fonction de l'état des joints et du type de carrelage. Sur les grands ensembles, nous privilégions un brossage mécanique combiné à un rinçage modéré. Les joints fragilisés sont traités avec précaution pour éviter tout déchaussement ou infiltration.</p>",
        },
        {
          question:
            "Dans le quartier Maladrerie, comment gérez-vous l'eau pour éviter les coulures sur la façade pendant le nettoyage ?",
          answer: "<p>Un système de bâches et de récupération est installé avant l'intervention. L'eau est dirigée vers les évacuations du balcon. Cette organisation protège la façade et les balcons des étages inférieurs, particulièrement dans les résidences denses de la Maladrerie.</p>",
        },
        {
          question:
            "Près du canal Saint-Denis, comment retirez-vous les mousses et dépôts verts sur un balcon exposé ?",
          answer: "<p>Les balcons proches du canal accumulent davantage d'humidité, favorisant mousses et lichens. Un traitement spécifique est appliqué avant brossage pour décoller ces dépôts. Le rinçage contrôlé élimine les résidus sans disperser les spores sur les surfaces voisines.</p>",
        },
        {
          question:
            "Dans les résidences d'Aubervilliers, pourquoi éviter la haute pression pour nettoyer un balcon ?",
          answer: "<p>La haute pression peut endommager les joints, écailler le carrelage ou projeter de l'eau chez les voisins. Sur les balcons des résidences récentes comme des grands ensembles, nous utilisons une pression douce ou un brossage manuel, plus sûrs pour les matériaux et le voisinage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de dissuasion pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des zones exposées aux nuisances aviaires près du canal Saint-Denis et des secteurs résidentiels denses.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide sur tous types de supports.",
        "Évacuation sécurisée des déchets en sacs étanches et coordination discrète pour limiter la gêne auprès des voisins.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons exposés du secteur du <strong>canal Saint-Denis</strong>. Les pigeons trouvent refuge sur les corniches et garde-corps, laissant des traces qui s'incrustent dans le béton et le carrelage. L'odeur devient gênante, le sol glissant, et l'usage du balcon se réduit progressivement.</p>\n<p class=\"mt-4\">Les <strong>immeubles résidentiels</strong> avec balcons ouverts ou loggias subissent particulièrement ces nuisances. Les supports en grès ou béton brut absorbent les salissures acides, provoquant des taches durables et une dégradation visible des revêtements. Sans traitement, les fientes sèchent et libèrent des particules fines lors du balayage, ce qui complique un nettoyage classique.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable. Le diagnostic préalable identifie l'étendue des dépôts, l'état des supports et les points d'accès des oiseaux. La proximité des <strong>espaces ouverts et de la voie d'eau</strong> favorise la présence régulière de volatiles, rendant la prévention indispensable après chaque traitement.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est d'éliminer toute trace de fientes et de neutraliser les agents pathogènes présents sur les surfaces. Le sol, le garde-corps et les vitrages retrouvent un aspect propre, sans odeur résiduelle.</p>\n<p class=\"mt-4\">Les supports en béton ou carrelage sont traités avec un produit virucide homologué, appliqué après rinçage pour garantir son efficacité.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, la zone est bâchée pour éviter la dispersion des particules. L'équipe porte combinaison jetable, masque FFP2, gants et lunettes de protection.</p>\n<p class=\"mt-4\">Les fientes sont humidifiées pour neutraliser les poussières, puis ramassées et conditionnées en sacs étanches. Cette étape protège aussi l'intérieur du logement et le voisinage.</p>\n\n<h3>Rinçage et recommandations anti-retour</h3>\n<p>Après désinfection, un rinçage complet permet l'aération du balcon. Un délai de séchage est conseillé avant réutilisation.</p>\n<p class=\"mt-4\">Des solutions de dissuasion peuvent être proposées : pics sur les rebords, filets de protection ou gel répulsif selon la configuration.</p>",
      specificChallenges: [
        "Balcons exposés au canal Saint-Denis : dépôts fréquents liés à la proximité de l'eau.",
        "Supports en béton brut ou carrelage grès : absorption des salissures acides et taches durables.",
        "Accès par digicodes et badges : coordination préalable nécessaire avec les occupants.",
        "Présence de corniches et garde-corps favorisant le perchage régulier des pigeons.",
        "Densité urbaine élevée : intervention discrète pour limiter les nuisances olfactives auprès du voisinage.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons exposés au canal Saint-Denis, quels risques sanitaires impose la présence de fientes de pigeons ?",
          answer: "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les balcons proches du canal, l'humidité favorise la prolifération bactérienne. Un assainissement avec désinfection virucide élimine ces risques et permet de réutiliser l'espace en toute sécurité.</p>",
        },
        {
          question:
            "Dans les immeubles résidentiels d'Aubervilliers, quels EPI utilisez-vous pour sécuriser un nettoyage de fientes de pigeons ?",
          answer: "<p>L'équipe intervient avec masque FFP2, lunettes de protection, gants et combinaison jetable. Ces équipements évitent tout contact direct et protègent des particules fines libérées lors du ramassage. Le bâchage de la zone complète le dispositif pour confiner les poussières pendant l'intervention.</p>",
        },
        {
          question:
            "Sur des supports en béton ou carrelage, comment assurez-vous une désinfection obligatoire après les fientes de pigeons ?",
          answer: "<p>Après collecte et nettoyage des surfaces, un produit virucide et bactéricide homologué est appliqué sur le sol, le garde-corps et les vitrages. Le temps de contact est respecté avant rinçage final. Cette étape neutralise les agents pathogènes et supprime les odeurs résiduelles sur béton comme sur carrelage grès.</p>",
        },
        {
          question:
            "Près du canal Saint-Denis, quelles solutions mettez-vous en place pour limiter le retour des pigeons sur le balcon ?",
          answer: "<p>Selon la configuration du balcon, plusieurs dispositifs peuvent être installés : pics anti-pigeons sur les rebords et corniches, filets de protection pour les loggias, ou gel répulsif sur les zones de perchage. Ces solutions réduisent significativement les risques de réinfestation après le traitement initial.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Intervention à domicile pour rafraîchir vos canapés, tapis et matelas : extraction des taches incrustées, traitement anti-acariens et séchage optimisé pour retrouver un mobilier sain.",
      whyUsBullets: [
        "Connaissance des logements du centre-ville d'Aubervilliers et de leurs contraintes d'accès quotidiennes.",
        "Détachage adapté à chaque textile avec extraction contrôlée pour un séchage rapide.",
        "Organisation souple : gestion des digicodes, créneaux compatibles avec votre emploi du temps.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent dans les logements proches du <strong>Théâtre de la Commune</strong> et du centre-ville d'Aubervilliers. Familles avec enfants, propriétaires d'animaux ou locataires en rotation régulière, chacun constate que les textiles d'ameublement absorbent bien plus que ce qu'un aspirateur peut retirer.</p>\n<p class=\"mt-4\">Dans les appartements équipés de tissus d'usage courant — coton, synthétique ou velours — la poussière fine et les allergènes s'incrustent en profondeur. Le confort visuel se dégrade, les odeurs s'installent, et le mobilier perd de son attrait. Un détachage ciblé suivi d'une extraction complète redonne aux fibres leur souplesse et leur fraîcheur, tout en réduisant la présence d'acariens.</p>\n<p class=\"mt-4\">Nos interventions s'adaptent aux contraintes d'accès fréquentes à Aubervilliers : digicodes, badges, stationnement limité. Nous organisons chaque passage pour limiter la gêne et garantir une remise en service rapide de votre mobilier.</p>",
      uniqueDeepDive: "<h3>Diagnostic textile et repérage des taches</h3>\n<p>Chaque tissu réagit différemment selon sa composition. Nous identifions d'abord la nature des fibres — coton, laine, synthétique, velours — et localisons les taches visibles : café, vin, urine, graisse. Un test discret sur une zone cachée permet de valider la méthode avant de poursuivre.</p>\n\n<h3>Pré-traitement et détachage ciblé</h3>\n<p>Les salissures tenaces nécessitent un traitement enzymatique adapté. Nous appliquons un produit spécifique sur chaque zone marquée, en respectant le temps de pose nécessaire pour décoller les résidus sans agresser le textile.</p>\n\n<h3>Injection-extraction et séchage</h3>\n<p>Le passage en injection-extraction retire la solution de nettoyage chargée de salissures. La pression et la température sont ajustées selon l'épaisseur du tissu. Après extraction maximale, nous indiquons le délai de séchage — généralement quelques heures selon la ventilation du logement — et les précautions d'usage avant remise en service complète.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés familiaux : café, jus, traces d'animaux incrustées depuis des mois.",
        "Tissus variés dans un même logement : velours salon, coton chambre, synthétique bureau.",
        "Accès avec digicode et badge : coordination préalable indispensable.",
        "Séchage à adapter selon la ventilation et la saison, surtout en appartement sans terrasse.",
        "Présence d'enfants ou d'animaux : produits compatibles et remise en service rapide attendue.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les logements du centre-ville d'Aubervilliers, comment traitez-vous les acariens présents dans un canapé ou un tapis ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur, là où les acariens et leurs déjections s'accumulent. Le passage répété déloge ces allergènes invisibles. Après séchage, la charge allergène est sensiblement réduite, ce qui améliore le confort respiratoire dans les pièces de vie.</p>",
        },
        {
          question:
            "À Aubervilliers, combien de temps faut-il prévoir pour le séchage d'un canapé ou d'un tapis après intervention ?",
          answer: "<p>Le délai varie selon l'épaisseur du textile et l'aération du logement. En général, comptez entre trois et six heures pour un canapé, parfois davantage pour un tapis épais. Nous conseillons d'ouvrir les fenêtres ou d'utiliser un ventilateur pour accélérer le processus.</p>",
        },
        {
          question:
            "Dans les appartements d'Aubervilliers, comment adaptez-vous la méthode au type de tissu du canapé ou du tapis ?",
          answer: "<p>Nous ajustons la pression d'injection et la température de l'eau selon la fibre : plus douce pour la laine ou le velours, plus soutenue pour le synthétique résistant. Un test préalable sur zone cachée confirme la tolérance du textile avant traitement complet.</p>",
        },
        {
          question:
            "Avec des digicodes et badges fréquents à Aubervilliers, comment préparez-vous l'accès pour un nettoyage canapé ou tapis ?",
          answer: "<p>Nous recueillons les informations d'accès lors de la prise de rendez-vous : codes, badges, interphone. Le jour de l'intervention, notre technicien arrive équipé et autonome. Si le stationnement est contraint, nous anticipons pour éviter tout retard.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement des mousses, nettoyage adapté au support et protection du mobilier pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses exposées à l'humidité du canal et à la pollution urbaine d'Aubervilliers.",
        "Méthodes différenciées selon le support : carrelage, dalles sur plots, pierre naturelle ou béton.",
        "Protection systématique du mobilier et des plantations, gestion de l'eau maîtrisée en milieu dense.",
      ],
      uniqueIntro: "<p>Le long du <strong>canal Saint-Denis</strong>, les terrasses subissent une exposition particulière : humidité ambiante, dépôts de pollution et développement rapide de mousses sur les surfaces carrelées ou en dalles. Ces accumulations verdâtres rendent le sol glissant et donnent à l'espace extérieur un aspect négligé qui décourage son utilisation.</p>\n<p class=\"mt-4\">Sur les <strong>terrasses en carrelage ou dalles sur plots</strong>, fréquentes dans les résidences récentes d'Aubervilliers, les joints et interstices retiennent l'humidité. La mousse s'y installe durablement, et un simple jet d'eau ne suffit pas à l'éliminer. Le résultat : une terrasse qu'on hésite à utiliser, un mobilier qu'on laisse rangé, un espace de vie extérieur qui perd sa fonction.</p>\n<p class=\"mt-4\">Notre intervention redonne à votre terrasse son aspect d'origine. Nous adaptons la méthode au support, protégeons vos plantations et mobilier, et gérons l'évacuation de l'eau dans un <strong>contexte urbain dense</strong> où le stationnement du matériel demande une organisation précise.</p>",
      uniqueDeepDive: "<h3>Surface débarrassée et protégée</h3>\n<p>Avant toute action sur le revêtement, nous déplaçons ou bâchons le mobilier extérieur et les jardinières. Les baies vitrées et menuiseries sont protégées pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage élimine les feuilles mortes, terre et débris accumulés dans les angles et contre les murets.</p>\n\n<h3>Traitement adapté au revêtement</h3>\n<p>Sur carrelage ou dalles sur plots, nous appliquons un produit désincrustant qui décolle mousses et lichens sans attaquer les joints. Le brossage mécanique déloge les dépôts tenaces.</p>\n<p class=\"mt-4\">La pression est contrôlée selon le matériau : plus douce sur les joints poreux, plus soutenue sur les surfaces lisses et résistantes.</p>\n\n<h3>Finition et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les garde-corps et murets périphériques sont traités dans la même intervention.</p>\n<p class=\"mt-4\">Nous vous indiquons la fréquence d'entretien adaptée à l'exposition de votre terrasse et aux essences d'arbres environnantes.</p>",
      specificChallenges: [
        "Mousses persistantes sur les terrasses ombragées proches du canal Saint-Denis.",
        "Dalles sur plots avec joints ouverts qui retiennent l'humidité et favorisent les dépôts verts.",
        "Stationnement contraint pour le matériel dans les rues résidentielles denses.",
        "Gestion des écoulements d'eau à coordonner avec les voisins en habitat collectif.",
        "Pollution atmosphérique liée aux axes routiers qui noircit les surfaces claires.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les terrasses en pierre ou bois exposées au canal Saint-Denis, comment évitez-vous d'abîmer le support ?",
          answer: "<p>Nous adaptons la pression et le produit au matériau. Sur pierre poreuse ou bois, nous privilégions un nettoyage basse pression avec brossage manuel. Les joints fragiles sont traités séparément pour éviter tout déchaussement ou érosion du revêtement.</p>",
        },
        {
          question:
            "À Aubervilliers, comment retirez-vous les mousses et lichens qui s'accumulent sur une terrasse urbaine ?",
          answer: "<p>Un produit désincrustant est appliqué puis laissé agir avant brossage mécanique. Cette méthode décolle les végétaux sans gratter le support. Sur les zones très envahies, un traitement préventif limite la repousse pendant plusieurs mois.</p>",
        },
        {
          question:
            "Sur des dalles sur plots à Aubervilliers, quel traitement anti-mousse appliquez-vous pour éviter d'endommager la terrasse ?",
          answer: "<p>Nous utilisons un anti-mousse biodégradable qui agit en profondeur sans corroder les plots ni les joints. Le produit est rincé après action, et l'eau s'évacue naturellement par les interstices vers le système de drainage existant.</p>",
        },
        {
          question:
            "Près des immeubles d'Aubervilliers, pourquoi privilégier un nettoyage doux plutôt qu'une haute pression sur terrasse ?",
          answer: "<p>La haute pression projette de l'eau et des résidus qui peuvent atteindre les balcons voisins ou les façades. En contexte collectif, un nettoyage contrôlé avec brossage limite ces nuisances tout en obtenant un résultat équivalent sur la plupart des supports.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux finitions, pour une restitution impeccable après travaux, déménagement ou rotation locative.",
      whyUsBullets: [
        "Connaissance du parc locatif d'Aubervilliers, du secteur Maladrerie aux abords de la Porte d'Aubervilliers.",
        "Traitement adapté à chaque revêtement : parquet, carrelage ancien, lino, avec produits appropriés.",
        "Coordination avec agences et artisans, gestion des accès par digicode et créneaux calés sur vos délais.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou un déménagement précipité, les appartements du quartier Maladrerie-Emile Dubois accumulent poussières de chantier, traces de peinture et résidus tenaces. Les agences immobilières qui gèrent la rotation locative dans ce secteur connaissent bien cette situation : un logement rendu dans cet état retarde la remise des clés et complique les états des lieux.</p>\n<p class=\"mt-4\">Dans les immeubles d'Aubervilliers, qu'il s'agisse de parquet ancien, de carrelage ou de lino, chaque revêtement nécessite un traitement adapté. Un nettoyage complet redonne au logement son aspect d'origine, facilite la signature du bail et évite les litiges sur le dépôt de garantie. Pour les propriétaires comme pour les locataires, c'est un gain de temps et de sérénité.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des contraintes d'accès fréquentes à Aubervilliers : digicodes, badges d'entrée et stationnement limité. Le planning est calé selon vos impératifs, avec une coordination directe si une agence ou un artisan est impliqué.</p>",
      uniqueDeepDive: "<h3>Pièces de vie et chambres</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes pour éliminer les résidus de chantier ou la poussière accumulée. Les sols sont ensuite aspirés puis lavés selon leur nature : parquet, carrelage ou lino reçoivent chacun un traitement spécifique.</p>\n<p class=\"mt-4\">Les interrupteurs, poignées et radiateurs sont nettoyés. L'intérieur des placards est également traité pour une remise en état complète.</p>\n\n<h3>Cuisine et pièces d'eau</h3>\n<p>Les plans de travail, crédences et électroménagers sont dégraissés. La salle de bain fait l'objet d'un détartrage des sanitaires et d'un nettoyage des joints de faïence.</p>\n<p class=\"mt-4\">Les WC sont désinfectés. Les traces de calcaire et les dépôts sont éliminés sur l'ensemble des surfaces.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les vitres intérieures sont nettoyées. Les éventuelles traces de peinture ou de colle sur les sols et menuiseries sont retirées avec précaution.</p>\n<p class=\"mt-4\">Un contrôle final vérifie chaque pièce avant aération du logement et remise des clés si applicable.</p>",
      specificChallenges: [
        "Résidus de chantier sur parquet ou lino nécessitant un retrait minutieux sans abîmer le support.",
        "Accès aux immeubles par digicode et badge, coordination préalable indispensable.",
        "Stationnement difficile dans le quartier Maladrerie, anticipation du matériel à transporter.",
        "Délais serrés pour les états des lieux, intervention calée sur la date de remise des clés.",
        "Poussières urbaines liées à la proximité des axes routiers, nettoyage renforcé des vitres et surfaces.",
      ],
      faqAdditions: [
        {
          question:
            "Dans le quartier Maladrerie, sous quel délai pouvez-vous intervenir pour un nettoyage d'appartement avant état des lieux ?",
          answer: "<p>Nous intervenons généralement sous 48 à 72 heures selon la disponibilité. Pour une urgence liée à une remise de clés imminente dans le secteur Maladrerie-Emile Dubois, nous ajustons le planning pour respecter votre échéance. Un échange préalable permet de confirmer le créneau.</p>",
        },
        {
          question:
            "Dans les logements d'Aubervilliers, quelle différence faites-vous entre un ménage standard et un nettoyage de fin de chantier ?",
          answer: "<p>Un ménage standard traite la poussière courante et les surfaces visibles. Le nettoyage fin de chantier va plus loin : retrait des traces de peinture, enduit ou colle sur les sols et menuiseries, dépoussiérage complet des plafonds aux plinthes, et traitement adapté au parquet, carrelage ou lino.</p>",
        },
        {
          question:
            "À Aubervilliers, comment adaptez-vous le devis d'un nettoyage d'appartement ou de maison selon la surface et les contraintes d'accès ?",
          answer: "<p>Le devis tient compte de la surface, du type d'intervention et des conditions d'accès. Dans les immeubles avec digicode, badge ou stationnement limité, nous intégrons le temps de manutention. Un échange préalable permet d'évaluer précisément les besoins et d'ajuster l'organisation.</p>",
        },
        {
          question:
            "Dans un appartement d'Aubervilliers avec parquet ou lino, comment intervenez-vous après un dégât des eaux ?",
          answer: "<p>Après un dégât des eaux, nous évaluons l'état des revêtements avant toute action. Le parquet ou le lino gonflé nécessite un séchage préalable. Nous procédons ensuite au nettoyage des surfaces touchées, au traitement des traces d'humidité et à la désinfection si nécessaire pour limiter les moisissures.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;