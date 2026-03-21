import type { City } from "~/types/geo";

const city: City = {
  name: "Suresnes",
  slug: "suresnes",
  postalCodes: ["92150"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Suresnes. Entre la gare Suresnes-Mont-Valérien et les résidences des coteaux, nos équipes s'adaptent aux contraintes d'accès et au relief de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Commune desservie par la gare Suresnes-Mont-Valérien et le tramway T2, située en bordure de Seine face au bois de Boulogne : Suresnes concentre un tissu résidentiel dense et un parc tertiaire actif. Klinova y intervient comme partenaire terrain pour la propreté des immeubles et locaux professionnels.</p>\n<p class=\"mt-4\">Notre organisation repose sur une <strong>coordination étroite</strong> avec syndics, gestionnaires et occupants. Chaque intervention fait l'objet d'un planning adapté aux contraintes du site : horaires décalés, gestion des accès, reporting si demandé.</p>\n<ul>\n  <li><strong>Réactivité locale :</strong> Équipes basées en Île-de-France, délais d'intervention courts sur Suresnes et communes limitrophes du 92.</li>\n  <li><strong>Adaptation au bâti</strong> : Immeubles anciens du centre-ville, résidences récentes ou pavillons sur les hauteurs : méthodes ajustées à chaque configuration.</li>\n  <li><strong>Suivi transparent :</strong> Compte-rendu d'intervention disponible, échanges directs avec l'interlocuteur désigné.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Stationnement contraint</strong> en centre-ville et sur les hauteurs du Mont-Valérien.",
    "Immeubles anciens avec <strong>cages d'escalier étroites</strong> et accès par digicode.",
    "Pollution atmosphérique sur les quais : <strong>dépôts réguliers</strong> sur balcons et garde-corps.",
    "Parkings souterrains fréquents dans les résidences récentes : <strong>ventilation limitée</strong>.",
    "Flux pendulaire important autour de la gare et du tramway T2 : <strong>salissures accélérées</strong> dans les halls.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Mont-Valérien",
    "République",
    "Écluse-Belvédère",
    "Liberté",
    "Cité-Jardins",
  ],
  nearbyCities: [
        "puteaux",
        "rueil-malmaison",
        "nanterre",
        "saint-cloud",
        "neuilly-sur-seine",
        "courbevoie",
        "boulogne-billancourt",
        "sevres",
        "levallois-perret",
        "colombes"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Suresnes",
    "Gare Suresnes-Mont-Valérien",
    "Tram T2 Suresnes-Longchamp",
    "Hôpital Foch",
    "Parc du Château",
    "Mont-Valérien",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous les interventions dans les rues étroites du Mont-Valérien ?",
      answer: "<p>Nos équipes repèrent les <strong>conditions de stationnement</strong> avant chaque passage. Sur les secteurs en pente ou à accès limité, nous privilégions des véhicules compacts et organisons le matériel pour limiter les allers-retours. Le planning tient compte des horaires de moindre affluence.</p>",
    },
    {
      question: "Quel délai pour obtenir un devis après une demande sur Suresnes ?",
      answer: "<p>Un premier retour intervient généralement sous 24 à 48 heures. Si une visite technique est nécessaire — notamment pour les parkings souterrains ou les halls avec contraintes d'accès — nous la programmons rapidement afin de <strong>fournir un chiffrage précis</strong> adapté au site.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur une copropriété ?",
      answer: "<p>Oui, nous traitons les demandes urgentes selon la disponibilité de nos équipes. En cas de <strong>sinistre ou de salissure importante</strong>, nous évaluons la situation par téléphone pour mobiliser une intervention dans les meilleurs délais, en coordination avec le syndic ou le gestionnaire.</p>",
    },
    {
      question: "Comment s'organise la coordination avec un syndic pour plusieurs immeubles ?",
      answer: "<p>Nous proposons un <strong>interlocuteur dédié</strong> qui centralise les échanges. Planning mutualisé, reporting groupé et ajustements en cours de contrat : l'objectif est de simplifier la gestion pour le syndic tout en maintenant un suivi rigoureux sur chaque résidence.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // Services : inclure uniquement ceux demandés
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Une intervention complète sur vos moquettes à Suresnes, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un sol propre et agréable à fouler.",
      whyUsBullets: [
        "Connaissance des immeubles anciens du centre-ville, avec leurs cages parfois étroites et leurs accès contraints.",
        "Matériel d'injection-extraction professionnel, réglé selon le type de fibre et l'épaisseur de la moquette traitée.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des occupants et respecter les contraintes de stationnement.",
      ],
      uniqueIntro: "<p>Autour du <strong>Théâtre Jean Vilar</strong> et dans les secteurs centraux de Suresnes, les moquettes des halls et bureaux absorbent chaque jour poussières, traces de semelles et résidus extérieurs. Les fibres se ternissent progressivement, les zones de passage marquent, et l'aspect général se dégrade sans qu'on s'en aperçoive immédiatement. Dans les copropriétés comme dans les locaux professionnels, ce constat revient souvent après quelques mois d'usage intensif.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux sols textiles leur tenue d'origine. Les <strong>immeubles anciens et petits collectifs</strong> de la ville présentent souvent des moquettes en dalles textiles ou bouclées, sensibles à l'encrassement mais réceptives à un traitement par injection-extraction. Le rendu visuel s'améliore nettement, les odeurs piégées dans les fibres disparaissent, et l'espace retrouve une propreté perceptible dès la fin de l'intervention.</p>\n<p class=\"mt-4\">La proximité de la gare Suresnes-Mont-Valérien et les flux quotidiens vers La Défense renforcent l'enjeu d'hygiène dans les halls et bureaux. Chaque intervention débute par un diagnostic des supports et des taches, suivi d'un plan de traitement adapté aux contraintes d'accès.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\n<p>Les couloirs, entrées et espaces de passage concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le traitement humide. Les protections sont posées sur les plinthes et bas de murs pour éviter toute projection.</p>\n\n<h3>Surfaces à usage intensif</h3>\n<p>Les halls d'accueil, paliers et espaces d'attente reçoivent un traitement par injection-extraction avec plusieurs passes. Le détachage ciblé intervient sur les marques de café, tanin ou traces grasses identifiées lors du diagnostic. Les fibres bouclées ou les dalles textiles bénéficient d'un <strong>réglage de pression adapté</strong>.</p>\n\n<h3>Zones périphériques et finitions</h3>\n<p>Les angles, dessous de mobilier et recoins sont traités avec attention. L'extraction maximale limite le temps de séchage, variable selon l'épaisseur et la ventilation. Des consignes de non-piétinement sont transmises pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "Halls de copropriété à fort passage près des transports, avec <strong>encrassement rapide des fibres</strong>.",
        "Moquettes bouclées ou dalles textiles sensibles aux <strong>taches de tanin et café</strong> dans les bureaux.",
        "Cages d'escalier étroites dans les immeubles anciens, nécessitant un matériel adapté.",
        "Stationnement difficile autour de la gare, imposant une organisation logistique anticipée.",
        "Temps de séchage à maîtriser pour une remise en service rapide des espaces traités.",
      ],
      faqAdditions: [
        {
          question: "Dans les halls proches du Théâtre Jean Vilar, comment intervenez-vous quand les cages d'escalier sont étroites et passantes ?",
          answer: "<p>Nous utilisons un matériel compact adapté aux passages restreints. L'intervention est planifiée en dehors des heures de forte affluence, avec balisage temporaire si nécessaire. Les protections murales sont posées pour éviter tout contact avec les parois, et le séchage est accéléré pour libérer l'accès rapidement.</p>",
        },
        {
          question: "Dans les immeubles anciens du centre-ville, comment traitez-vous les taches incrustées sur des moquettes de copropriété ?",
          answer: "<p>Un diagnostic préalable identifie la nature des taches et l'état des fibres. Les marques anciennes de café, tanin ou graisses reçoivent un <strong>détachage ciblé</strong> avant le passage en injection-extraction. Plusieurs passes sont effectuées sur les zones les plus marquées pour obtenir un résultat homogène sur l'ensemble de la surface.</p>",
        },
        {
          question: "Entre dalles textiles et moquette bouclée, quelle méthode choisissez-vous selon les surfaces rencontrées à Suresnes ?",
          answer: "<p>L'injection-extraction reste la méthode principale, avec un réglage de pression adapté à chaque support. Les dalles textiles supportent un traitement plus appuyé, tandis que les moquettes bouclées nécessitent une approche plus douce pour préserver la tenue des fibres. Le diagnostic initial oriente systématiquement le choix technique.</p>",
        },
        {
          question: "Autour de la gare Suresnes-Mont-Valérien, comment gérez-vous le matériel quand le stationnement est difficile ?",
          answer: "<p>Nous anticipons les contraintes de stationnement en repérant les emplacements disponibles ou en coordonnant avec le gestionnaire de l'immeuble. Le matériel est acheminé en <strong>une seule rotation</strong> pour limiter les allers-retours. Si besoin, l'intervention est calée sur des créneaux où la pression sur le stationnement est moindre.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking par autolaveuse et traitement dégraissant, avec gestion stricte des eaux de lavage et balisage sécurisé pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des parkings souterrains de Suresnes et des contraintes d'accès liées à la densité urbaine.",
        "Autolaveuse adaptée aux surfaces béton, gestion stricte des eaux de lavage vers les évacuations existantes.",
        "Coordination avec syndics pour rotation véhicules, balisage sécurisé et intervention en site occupé.",
      ],
      uniqueIntro: "<p>Les traces de pneus, coulures d'huile et dépôts de poussière marquent progressivement les sols des parkings souterrains. Au niveau du parking Henri IV comme dans les sous-sols des résidences alentour, ces salissures s'accumulent sur le béton et finissent par former un film gras difficile à éliminer sans intervention mécanisée. Les rigoles et regards se chargent également de résidus qui ralentissent l'évacuation des eaux.</p>\n<p class=\"mt-4\">Un sol de parking encrassé donne une impression de négligence dès l'entrée dans l'immeuble. Pour les copropriétés équipées de sous-sols ou parkings souterrains, le décrassage régulier préserve l'aspect des revêtements béton brut ou peint, limite les odeurs et facilite le repérage des places. Les gestionnaires constatent moins de réclamations lorsque les parties communes basses sont maintenues propres.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic ou le gestionnaire. La densité urbaine et le stationnement difficile à Suresnes imposent un balisage rigoureux et une rotation des véhicules planifiée en amont, souvent en site partiellement occupé.</p>",
      uniqueDeepDive: "<h3>Encrassement et revêtement</h3>\n<p>Le premier constat porte sur le type de sol et son niveau de salissure. Béton brut, résine ou peinture ne réagissent pas de la même façon au dégraissant. L'état des évacuations est vérifié pour anticiper la gestion des eaux de lavage.</p>\n<p class=\"mt-4\">Un balayage préalable retire les débris et poussières libres avant le passage mécanisé.</p>\n\n<h3>Traces tenaces et zones critiques</h3>\n<p>Les coulures d'huile anciennes et marques de pneus nécessitent un traitement dégraissant ciblé avant le passage de l'autolaveuse. Les rampes d'accès, angles morts et pieds de murs reçoivent une attention particulière pour éviter les zones oubliées.</p>\n<p class=\"mt-4\">La haute pression complète le lavage mécanisé sur les surfaces très encrassées.</p>\n\n<h3>Évacuation et remise en service</h3>\n<p>Les eaux de lavage sont dirigées vers les regards existants, sans rejet sauvage. Le balisage reste en place jusqu'au séchage suffisant des zones traitées.</p>\n<p class=\"mt-4\">Un conseil de fréquence est transmis au gestionnaire selon le trafic observé.</p>",
      specificChallenges: [
        "Sous-sols fréquents dans les résidences de Suresnes, avec ventilation parfois limitée.",
        "Traces d'huile anciennes sur béton brut nécessitant un dégraissage préalable.",
        "Stationnement difficile imposant une rotation planifiée des véhicules pendant l'intervention.",
        "Rampes d'accès inclinées à traiter pour conserver leur adhérence.",
        "Gestion des eaux de lavage vers les regards existants, sans écoulement vers la voirie.",
      ],
      faqAdditions: [
        {
          question: "Dans le parking Henri IV, comment traitez-vous les taches d'huile anciennes et les traces de pneus au sol ?",
          answer: "<p>Un dégraissant est appliqué sur les zones marquées avant le passage de l'autolaveuse. Le produit agit quelques minutes pour dissoudre les résidus gras. Le lavage mécanisé retire ensuite les traces ramollies. Sur béton brut, plusieurs passes peuvent être nécessaires selon l'ancienneté des dépôts.</p>",
        },
        {
          question: "En sous-sol à Suresnes, comment gérez-vous les eaux de lavage pour nettoyer un parking sans créer d'écoulements ?",
          answer: "<p>L'autolaveuse aspire l'eau sale au fur et à mesure du passage. Le surplus est dirigé vers les regards et rigoles existants. Aucun rejet n'est effectué vers la voirie ou les parties communes. L'état des évacuations est vérifié en amont pour éviter tout refoulement pendant l'intervention.</p>",
        },
        {
          question: "À Suresnes, adaptez-vous votre méthode différemment pour un parking souterrain par rapport à un parking aérien ?",
          answer: "<p>En souterrain, la ventilation réduite impose un temps de séchage plus long et un choix de produits à faible émission. L'éclairage artificiel demande parfois un dépoussiérage des blocs lumineux. En aérien, le séchage est plus rapide mais les rampes exposées aux intempéries nécessitent un traitement antidérapant renforcé.</p>",
        },
        {
          question: "Dans les secteurs denses de Suresnes, comment organisez-vous un balisage efficace pour sécuriser les usagers pendant l'intervention ?",
          answer: "<p>Des cônes et rubans délimitent les zones en cours de traitement. La rotation des véhicules est planifiée avec le syndic pour libérer les places par secteur. Le balisage reste en place jusqu'au séchage suffisant. Les accès piétons sont maintenus ou signalés par un itinéraire alternatif.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion anti-coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Connaissance des expositions suresnoise : balcons côté quais, hauteurs du Mont-Valérien, résidences en cœur de ville.",
        "Pression ajustée selon le support, brossage ciblé sur joints et angles, produits compatibles carrelage et béton.",
        "Protection systématique des voisins du dessous, gestion de l'eau maîtrisée, horaires adaptés aux copropriétés.",
      ],
      uniqueIntro: "<p>Comment préserver un balcon agréable quand les particules du <strong>Quai Marcel Dassault</strong> se déposent semaine après semaine sur le carrelage et les rebords ? À Suresnes, les extérieurs orientés vers les axes passants accumulent une couche grisâtre qui ternit les surfaces et rend le sol glissant par temps humide. Les joints noircissent, le mobilier se couvre d'un film collant, et l'envie de s'installer dehors diminue progressivement.</p>\n<p class=\"mt-4\">Retrouver un espace propre change la perception du logement. Un balcon entretenu devient une pièce supplémentaire, un coin lecture ou un endroit pour le café du matin. Dans les <strong>résidences récentes comme dans les immeubles anciens</strong>, où carrelage grès et béton peint se côtoient, chaque support réagit différemment aux salissures. Un traitement adapté redonne de l'éclat sans fragiliser les matériaux.</p>\n<p class=\"mt-4\">L'intervention prend en compte les contraintes des immeubles collectifs : accès en étage, protection des voisins du dessous, évacuation de l'eau sans débordement. Un diagnostic préalable permet d'anticiper ces points et d'organiser le chantier efficacement.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries reçoivent une protection pour éviter les projections. Un balisage au sol délimite la zone de travail et prévient les coulures vers les balcons inférieurs ou la cour.</p>\n\n<h3>Traitement des surfaces</h3>\n<p>Les gros dépôts sont retirés manuellement : feuilles, terre, débris accumulés dans les angles. Un produit adapté au support est appliqué, suivi d'un brossage mécanique ou manuel selon l'état des joints. Le garde-corps, les vitrages et les murs mitoyens accessibles sont traités dans la foulée.</p>\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée pour préserver les joints et limiter les éclaboussures.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau résiduelle est raclée vers l'évacuation. Le temps de séchage varie selon l'exposition et la saison. Avant de partir, des recommandations d'entretien courant sont transmises pour espacer les interventions futures.</p>",
      specificChallenges: [
        "Dépôts routiers sur les balcons exposés au Quai Marcel Dassault : film gras et particules incrustées.",
        "Joints de carrelage noircis par l'humidité et les mousses sur les étages ombragés.",
        "Gestion des coulures dans les immeubles avec cour intérieure ou balcons superposés.",
        "Accès en étage sur les hauteurs du Mont-Valérien : stationnement et montée du matériel.",
        "Supports variés (grès, béton peint) nécessitant des produits et pressions différenciés.",
      ],
      faqAdditions: [
        {
          question: "Dans les immeubles avec cour intérieure à Suresnes, comment évitez-vous les coulures lors du nettoyage d'un balcon ?",
          answer: "<p>Un balisage est posé avant le début du chantier. L'eau de rinçage est dirigée vers l'évacuation du balcon, et le débit reste contrôlé pour limiter les projections. Si nécessaire, une bâche protège temporairement le balcon du dessous ou la cour.</p>",
        },
        {
          question: "Sur les balcons exposés au Quai Marcel Dassault, comment éliminez-vous les dépôts verts et les mousses tenaces ?",
          answer: "<p>Un produit adapté aux surfaces minérales est appliqué puis laissé agir quelques minutes. Le brossage mécanique décolle les mousses incrustées dans les joints. Le rinçage à pression modérée évacue les résidus sans endommager le carrelage ni disperser les particules.</p>",
        },
        {
          question: "Selon que le balcon soit en carrelage grès ou en béton peint, quelle approche adoptez-vous à Suresnes ?",
          answer: "<p>Le carrelage grès supporte un brossage plus appuyé et un rinçage standard. Le béton peint demande une pression réduite et un produit neutre pour ne pas altérer la couche de finition. Le diagnostic initial permet d'ajuster la méthode dès le départ.</p>",
        },
        {
          question: "Sur les immeubles en hauteur du Mont-Valérien, intervenez-vous sans haute pression pour protéger les supports fragiles ?",
          answer: "<p>Oui, quand les joints sont poreux ou le revêtement ancien, le nettoyage s'effectue à basse pression ou par brossage manuel. Cette approche préserve l'étanchéité et évite de creuser les joints, tout en obtenant un résultat propre et durable.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des surfaces et conseils de protection pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Suresnes, notamment les abords du Parc du Château et les immeubles à corniches.",
        "Protocole complet avec EPI adaptés, confinement systématique et désinfection après chaque collecte.",
        "Évacuation sécurisée des déchets en sacs étanches, coordination avec les occupants pour limiter la gêne pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts s'accumulent sur le sol, les garde-corps et les rebords de fenêtres. Autour du Parc du Château, les abords arborés attirent les volatiles qui élisent domicile sur les corniches voisines. Le balcon devient alors inutilisable : odeur persistante, surfaces glissantes, linge qu'on n'ose plus étendre dehors.</p>\n<p class=\"mt-4\">Les immeubles anciens de Suresnes présentent souvent des moulures et des rebords extérieurs où les fientes s'incrustent durablement. L'acidité des déjections attaque le béton, la peinture et le métal au fil du temps. Un traitement adapté permet de stopper cette dégradation et de redonner au balcon son usage quotidien, sans gêne pour les occupants ni les voisins.</p>\n<p class=\"mt-4\">L'intervention suit un protocole structuré : confinement de la zone, humidification préalable pour neutraliser les poussières, collecte sécurisée, désinfection complète et rinçage. Chaque étape vise à éliminer les agents pathogènes tout en préservant les supports.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, lunettes de protection, gants et combinaison jetable. Un bâchage isole la zone pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les surfaces sont humidifiées avant manipulation afin de neutraliser les poussières contaminées et empêcher leur envol.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Les fientes sont ramassées et conditionnées dans des sacs étanches. Le sol du balcon, les garde-corps, les vitrages et les éventuels murs mitoyens sont nettoyés mécaniquement.</p>\n<p class=\"mt-4\">Un produit désinfectant est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final permet d'évacuer les résidus de produit. Le balcon reste en aération le temps nécessaire avant réutilisation.</p>\n<p class=\"mt-4\">Des solutions de dissuasion peuvent être proposées : pics sur les rebords, filets de protection ou gel répulsif selon la configuration des lieux.</p>",
      specificChallenges: [
        "Corniches et moulures des immeubles anciens propices aux nidifications et dépôts répétés.",
        "Acidité des fientes qui attaque progressivement le béton peint et les garde-corps métalliques.",
        "Nécessité de confiner la zone pour protéger l'intérieur du logement et le voisinage.",
        "Balcons orientés vers les espaces verts où la présence de pigeons reste importante.",
        "Coordination avec les occupants pour définir le délai d'aération avant réutilisation.",
      ],
      faqAdditions: [
        {
          question: "Près du Parc du Château, quels risques sanitaires représentent les fientes accumulées sur un balcon ?",
          answer: "<p>Les déjections de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. À proximité des zones arborées de Suresnes, l'accumulation est souvent rapide. Un assainissement avec désinfection élimine ces risques et permet de réutiliser l'espace en toute sécurité.</p>",
        },
        {
          question: "Quel protocole de sécurité appliquez-vous pour traiter un balcon souillé à Suresnes ?",
          answer: "<p>L'intervenant porte masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion. Les fientes sont humidifiées avant collecte afin de neutraliser les poussières contaminées. Ce protocole protège à la fois l'occupant et le technicien.</p>",
        },
        {
          question: "Quelle désinfection réalisez-vous après le retrait des fientes sur un balcon ?",
          answer: "<p>Un produit virucide et bactéricide homologué est appliqué sur le sol, les garde-corps et les vitrages. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes. Un rinçage final précède la remise en service du balcon après aération.</p>",
        },
        {
          question: "Dans les immeubles anciens de Suresnes, quelles zones surveillez-vous pour éviter le retour des pigeons ?",
          answer: "<p>Les corniches, rebords de fenêtres et moulures décoratives constituent des points de nidification fréquents. Après le nettoyage, nous pouvons recommander l'installation de pics ou de filets sur ces zones sensibles pour limiter le risque de réinfestation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à Suresnes, avec extraction des salissures incrustées et séchage contrôlé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Nous connaissons les logements suresnois, des pavillons de la Cité-Jardins aux appartements du quartier Liberté.",
        "Notre matériel d'injection-extraction s'adapte à chaque textile, du velours fragile au coton résistant.",
        "Intervention sur rendez-vous avec gestion des contraintes d'accès et stationnement propres à Suresnes.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes sur le matelas : dans le quartier <strong>Liberté</strong> comme dans les autres secteurs résidentiels de Suresnes, ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Les familles avec enfants ou animaux constatent souvent que l'aspirateur ne suffit plus à redonner fraîcheur et propreté aux textiles d'ameublement.</p>\n<p class=\"mt-4\">Un canapé détaché retrouve son aspect d'origine, un tapis rafraîchi change l'atmosphère d'une pièce. Dans les logements suresnois, souvent dotés de parquet ou carrelage associés à du mobilier textile, l'entretien régulier des assises et sols souples contribue au confort quotidien. Les allergènes, acariens et poussières incrustées diminuent, l'air intérieur s'améliore.</p>\n<p class=\"mt-4\">Nous intervenons à domicile sur rendez-vous, en tenant compte des contraintes d'accès propres à la commune : digicodes, stationnement limité, rues étroites sur les hauteurs. Chaque intervention commence par un diagnostic textile pour adapter la méthode au tissu et à la nature des taches.</p>",
      uniqueDeepDive: "<h3>Textile propre et assaini</h3>\n<p>Le résultat visé : un canapé sans taches visibles, un tapis aux couleurs ravivées, un matelas débarrassé des odeurs et allergènes. L'extraction en profondeur retire ce que l'aspirateur laisse derrière lui.</p>\n\n<h3>Diagnostic et pré-traitement adapté</h3>\n<p>Avant toute intervention, nous identifions le type de tissu (coton, synthétique, velours, laine) et la nature des salissures (café, vin, urine, graisse). Un test discret sur zone cachée précède le détachage ciblé. Les produits enzymatiques traitent les taches organiques sans agresser les fibres.</p>\n\n<h3>Injection-extraction et séchage</h3>\n<p>La technique d'injection-extraction pénètre le textile pour déloger les résidus incrustés. La pression et la température s'ajustent selon la fragilité du support. Après extraction maximale de l'humidité, nous indiquons le temps de séchage selon l'épaisseur du textile et la ventilation du logement. Le temps de séchage dépend de l'épaisseur du textile et de la ventilation du logement avant réutilisation.</p>",
      specificChallenges: [
        "Taches anciennes de café ou de vin incrustées dans les fibres du canapé.",
        "Odeurs persistantes liées aux animaux de compagnie sur tapis et matelas.",
        "Textiles fragiles (velours, laine) nécessitant une pression contrôlée.",
        "Accès parfois contraints dans les résidences avec digicodes et stationnement limité.",
        "Séchage à anticiper selon la ventilation du logement et l'épaisseur du textile.",
      ],
      faqAdditions: [
        {
          question: "Dans les quartiers résidentiels de Suresnes comme Liberté, comment réduisez-vous les acariens et allergènes sur canapés et tapis ?",
          answer: "<p>L'injection-extraction retire les acariens, poussières et allergènes logés en profondeur dans les fibres. Le traitement atteint des zones inaccessibles à l'aspirateur classique. Après séchage, le textile est assaini et l'air intérieur du logement s'en trouve amélioré, particulièrement appréciable pour les familles avec enfants.</p>",
        },
        {
          question: "Pour les textiles d'ameublement d'un logement à Suresnes, comment adaptez-vous la méthode selon le tissu du canapé ou du tapis ?",
          answer: "<p>Chaque textile réagit différemment. Nous identifions d'abord la matière : coton, synthétique, velours ou laine. La pression d'injection et la température de l'eau s'ajustent en conséquence. Un test préalable sur zone cachée garantit l'absence de décoloration ou de déformation du tissu traité.</p>",
        },
        {
          question: "Avant une intervention à Suresnes, quelles consignes de préparation donnez-vous pour un canapé ou un tapis à domicile ?",
          answer: "<p>Nous demandons simplement de dégager l'accès au mobilier concerné et de retirer les objets posés dessus. Si le stationnement est compliqué dans votre rue, prévenez-nous pour que nous anticipions. Le reste de la préparation (protection du sol, déplacement si nécessaire) est pris en charge par notre équipe.</p>",
        },
        {
          question: "Dans les résidences familiales de Suresnes, quels produits privilégiez-vous pour un canapé ou un tapis avec enfants et animaux ?",
          answer: "<p>Nous utilisons des produits adaptés aux foyers avec enfants et animaux. Après séchage complet, aucun résidu nocif ne subsiste sur le textile. Les formulations enzymatiques traitent efficacement les taches organiques (urine, salive) tout en restant compatibles avec un usage quotidien du mobilier.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Traitement complet de votre terrasse avec adaptation aux supports pierre, bois ou dalles sur plots, élimination des dépôts verts et séchage permettant une réutilisation rapide de votre espace extérieur.",
      whyUsBullets: [
        "Connaissance des configurations de terrasses sur les coteaux de Suresnes, entre rez-de-jardin et maisons individuelles.",
        "Maîtrise des techniques adaptées à chaque support : pierre naturelle, bois traité, composite ou dalles sur plots.",
        "Organisation légère pour accéder aux terrasses en hauteur sans encombrer les passages étroits ni gêner le voisinage.",
      ],
      uniqueIntro: "<p>Dans le secteur du <strong>Mont-Valérien</strong>, les terrasses de maisons et rez-de-jardin accumulent mousses et lichens au fil des saisons. L'exposition aux intempéries, combinée à l'ombre partielle des arbres environnants, favorise l'apparition de dépôts verts qui rendent les surfaces glissantes et peu engageantes. Ces salissures s'incrustent progressivement dans les joints et les pores des matériaux.</p>\n<p class=\"mt-4\">Une terrasse entretenue retrouve son aspect d'origine et redevient un espace de vie agréable. Les <strong>surfaces en pierre, bois ou dalles sur plots</strong> présentes à Suresnes nécessitent chacune une approche adaptée pour préserver leur intégrité tout en éliminant efficacement les dépôts tenaces. Le rendu visuel s'améliore nettement dès la fin de l'intervention.</p>\n<p class=\"mt-4\">Les hauteurs du coteau et les accès parfois étroits orientent nos interventions vers une logistique légère. Nous adaptons le matériel aux contraintes de chaque configuration pour travailler sans encombrer les abords de votre habitation.</p>",
      uniqueDeepDive: "<h3>Surface principale</h3>\n<p>Le revêtement central fait l'objet d'un balayage préalable pour retirer feuilles, terre et débris accumulés. Un produit adapté au support est appliqué : formulation spécifique pour pierre naturelle, traitement doux pour bois ou composite.</p>\n<p class=\"mt-4\">Le brossage mécanique ou manuel décolle les mousses incrustées. La pression d'eau reste contrôlée pour ne pas endommager les joints ni fragiliser les matériaux poreux.</p>\n\n<h3>Éléments périphériques</h3>\n<p>Les garde-corps, murets et escaliers extérieurs reçoivent le même traitement adapté. Ces zones souvent négligées concentrent pourtant humidité et dépôts verts.</p>\n<p class=\"mt-4\">Les margelles et bordures sont nettoyées avec attention aux raccords avec les plantations environnantes.</p>\n\n<h3>Finalisation et protection</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Un traitement anti-mousse préventif peut être appliqué selon l'exposition de votre terrasse.</p>\n<p class=\"mt-4\">Le mobilier extérieur et les jardinières sont replacés après séchage complet de la surface.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'ombre des arbres sur les coteaux du Mont-Valérien.",
        "Supports variés nécessitant une adaptation technique : pierre, bois, dalles sur plots.",
        "Accès parfois étroits sur les hauteurs, logistique de chantier à adapter.",
        "Gestion de l'écoulement d'eau vers les jardins et plantations environnantes.",
        "Joints poreux des terrasses anciennes sensibles à la pression excessive.",
      ],
      faqAdditions: [
        {
          question: "Sur une terrasse en pierre ou en bois du Mont-Valérien, comment évitez-vous d'abîmer le support pendant le nettoyage ?",
          answer: "<p>Chaque matériau reçoit un traitement adapté. La pierre naturelle supporte une pression modérée tandis que le bois nécessite un nettoyage plus doux. Nous testons systématiquement sur une zone discrète avant d'intervenir sur l'ensemble de la surface pour ajuster la méthode.</p>",
        },
        {
          question: "À Suresnes, comment traitez-vous les mousses et lichens sur une terrasse exposée aux hauteurs du coteau ?",
          answer: "<p>L'ombre partielle et l'humidité des coteaux favorisent ces dépôts verts. Nous appliquons un produit qui décolle les mousses sans attaquer le support, suivi d'un brossage mécanique. Un traitement préventif limite la réapparition pendant plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "Pour une terrasse à Suresnes, quel traitement anti-mousse choisissez-vous selon qu'elle soit en pierre, bois ou dalles sur plots ?",
          answer: "<p>Les formulations diffèrent selon la porosité du matériau. La pierre naturelle accepte des produits plus concentrés, le bois requiert une solution respectueuse des fibres. Les dalles sur plots permettent aussi de traiter les supports en dessous où l'humidité stagne.</p>",
        },
        {
          question: "Dans les maisons et rez-de-jardin du Mont-Valérien, pourquoi privilégier un nettoyage doux plutôt qu'une haute pression sur la terrasse ?",
          answer: "<p>La haute pression peut creuser les joints, écailler les surfaces anciennes ou projeter des débris vers les plantations. Un nettoyage doux avec brossage adapté préserve l'intégrité du support tout en obtenant un résultat propre. Cette approche convient particulièrement aux terrasses en bois ou pierre poreuse.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une mise en propreté complète de votre logement, adaptée aux fins de bail, sorties de chantier ou remises en état après sinistre, avec coordination possible auprès des agences et artisans.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Suresnes, des pavillons aux petits collectifs du secteur République.",
        "Polyvalence sur les revêtements : parquet, carrelage, faïence, surfaces peintes ou vitrées.",
        "Planification ajustée aux échéances de bail et coordination directe avec agences ou artisans.",
      ],
      uniqueIntro: "<p>Après plusieurs mois d'occupation ou à la suite de travaux de rénovation, un appartement ou une maison accumule des traces que le ménage courant ne suffit plus à éliminer. Dans le quartier République à Suresnes, les logements en rotation locative présentent souvent des sols encrassés, des vitres opaques et des pièces d'eau marquées par le calcaire. Ces résidus compliquent la restitution du dépôt de garantie ou retardent l'entrée d'un nouveau locataire.</p>\n<p class=\"mt-4\">Un logement remis en état correctement facilite la signature du procès-verbal de sortie et évite les litiges. Dans les immeubles anciens comme dans les pavillons de la commune, les surfaces varient : parquet à traiter avec précaution, carrelage à dégraisser, faïence à détartrer. Chaque configuration demande une approche adaptée pour obtenir un rendu propre et homogène.</p>\n<p class=\"mt-4\">Nous organisons l'intervention en tenant compte des contraintes de calendrier liées aux déménagements ou aux fins de chantier. La coordination avec les artisans, les agences immobilières ou les propriétaires permet de respecter les délais convenus sans multiplier les allers-retours.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>Nous commençons par un état des lieux du logement : nature des surfaces, type d'intervention requis, présence éventuelle de résidus de chantier ou de traces d'humidité. Les déchets volumineux et gravats sont évacués si nécessaire.</p>\n<p class=\"mt-4\">Les zones fragiles sont protégées avant le démarrage des opérations.</p>\n\n<h3>Mise en propreté complète</h3>\n<p>Le dépoussiérage couvre l'ensemble du logement, des plafonds aux plinthes. Les sols sont aspirés puis lavés selon leur revêtement. Les vitres intérieures sont traitées pour retrouver leur transparence.</p>\n<p class=\"mt-4\">Les pièces d'eau font l'objet d'un détartrage des sanitaires, d'un dégraissage des plans de travail et d'un traitement des joints. Les interrupteurs, poignées et radiateurs sont nettoyés.</p>\n\n<h3>Contrôle et remise</h3>\n<p>Nous vérifions chaque pièce pour nous assurer qu'aucune zone n'a été oubliée. Le logement est aéré avant la remise des clés. Un compte-rendu peut être transmis à l'agence ou au propriétaire si demandé.</p>",
      specificChallenges: [
        "Logements en rotation locative nécessitant une remise en état rapide avant état des lieux.",
        "Résidus de peinture ou enduit à retirer après travaux dans les pavillons.",
        "Pièces d'eau marquées par le calcaire dans les immeubles anciens.",
        "Coordination avec les agences immobilières pour respecter les délais de restitution.",
        "Accès par digicode et stationnement limité dans les secteurs denses.",
      ],
      faqAdditions: [
        {
          question: "Dans le quartier République à Suresnes, sous quel délai pouvez-vous intervenir pour une remise en état d'appartement urgente ?",
          answer: "<p>Nous pouvons généralement intervenir rapidement selon la disponibilité. Pour les situations de fin de bail avec une date butoir proche, nous ajustons notre planning afin de respecter l'échéance convenue avec l'agence ou le propriétaire.</p>",
        },
        {
          question: "Après travaux dans un pavillon ou un immeuble ancien à Suresnes, comment adaptez-vous le nettoyage standard ou fin de chantier ?",
          answer: "<p>Le nettoyage fin de chantier inclut l'évacuation des résidus de peinture, enduit ou colle, absents d'un ménage classique. Nous utilisons des techniques de grattage doux et des produits adaptés aux supports pour ne pas endommager les revêtements fraîchement posés.</p>",
        },
        {
          question: "À Suresnes, comment gérez-vous la remise en état d'un appartement ou d'une maison après un dégât des eaux ?",
          answer: "<p>Nous intervenons une fois le sinistre stabilisé. Le protocole comprend l'extraction de l'humidité résiduelle, le traitement des surfaces touchées et un contrôle des zones à risque de moisissure. Un rapport peut être fourni pour l'assurance si nécessaire.</p>",
        },
        {
          question: "Dans les secteurs résidentiels de Suresnes, comment coordonnez-vous votre intervention avec les artisans ou l'agence immobilière ?",
          answer: "<p>Nous échangeons directement avec les interlocuteurs concernés pour caler notre passage après la fin des travaux ou avant l'état des lieux. Cette organisation évite les chevauchements et garantit que le logement soit prêt à la date prévue.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;