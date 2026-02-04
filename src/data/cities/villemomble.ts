import type { City } from "~/types/geo";

const city: City = {
  name: "Villemomble",
  slug: "villemomble",
  postalCodes: ["93250"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Klinova intervient à Villemomble pour l'entretien des parties communes, des parkings et des espaces extérieurs. Entre la gare RER E et les quartiers pavillonnaires des Coquetiers, une équipe locale adaptée aux contraintei résidentiel.",

  hubIntro:
    "<p>Desservie par le RER E et le Tram T4, au pied du Plateau d'Avron, Villemomble associe tissu pavillonnaire dense et résidences collectives. Klinova y assure un accompagnement régulier, calibré sur les rythmes de la commune et les attentes des gestionnaires locaux.</p>\n\n<p><strong>Propreté des halls, entretien des sous-sols</strong>, remise en état des extérieurs : chaque intervention s'organise en fonction des accès, des horaires sensibles et des contraintes de stationnement propres à chaque secteur.</p>\n\n<ul>\n  <li><strong>Coordination terrain :</strong> Planification adaptée aux créneaux calmes, en lien avec syndics et gardiens pour limiter la gêne aux résidents.</li>\n  <li><strong>Matériel ajusté :</strong> Équipements dimensionnés pour les escaliers étroits des pavillons comme pour les parkings souterrains des résidences.</li>\n  <li><strong>Suivi structuré :</strong> Reporting disponible sur demande, points réguliers avec les donneurs d'ordre pour ajuster les fréquences.</li>\n</ul>",

  citySpecificChallenges: [
    "<strong>Stationnement contraint</strong> autour de la gare RER E et du centre-ville, nécessitant des créneaux décalés.",
    "Résidences années 70-90 avec <strong>parkings souterrains</strong> aux rampes étroites et ventilation limitée.",
    "Quartiers pavillonnaires (Coquetiers, Époque) : passages souvent <strong>sans accès latéral</strong>, matériel à transiter par l'intérieur.",
    "Axes passants (Avenue du Raincy, Grande Rue) générant <strong>dépôts noirs</strong> sur balcons et façades.",
    "Proximité du Parc de la Garenne : <strong>feuilles mortes et déjections</strong> sur terrasses et parties communes.",
  ],

  districts: [
    "Centre-ville - Orangerie",
    "Les Coquetiers",
    "Parc Carette",
    "Église",
    "Époque - Saint-Exupéry",
    "Plateau d'Avron - Mairie",
    "Les Marnaudes - La Fosse aux Bergers",
  ],

  nearbyCities: [
        "le-raincy",
        "rosny-sous-bois",
        "neuilly-plaisance",
        "bondy",
        "gagny",
        "neuilly-sur-marne",
        "noisy-le-sec",
        "livry-gargan",
        "montfermeil",
        "fontenay-sous-bois"
      ],

  landmarks: [
    "Mairie de Villemomble",
    "Gare du Raincy - Villemomble - Montfermeil",
    "Station Tram T4 Les Coquetiers",
    "Parc de la Garenne",
    "Plateau d'Avron - Mairie",
    "Théâtre Georges Brassens",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les secteurs où le stationnement est saturé ?",
      answer:
        "<p><strong>Autour de la gare et en centre-ville</strong>, nous privilégions des créneaux matinaux avant le pic de circulation. Le matériel est chargé en véhicule compact, et nous identifions en amont les zones de dépose autorisées. Si besoin, un opérateur reste au véhicule pendant que l'autre intervient.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir rapidement en cas de dégradation imprévue ?",
      answer:
        "<p>Oui. Pour les situations urgentes — souillure accidentelle, dégât des eaux, incident en parking — nous réorganisons le planning sous <strong>24 à 48 heures</strong> selon disponibilité. Un contact direct avec le gestionnaire permet de valider le périmètre avant déplacement.</p>",
    },
    {
      question:
        "Comment se passe la prise de contact pour un devis à Villemomble ?",
      answer:
        "<p><strong>Un premier échange téléphonique ou par mail</strong> permet de cerner le besoin. Si nécessaire, nous programmons une visite technique pour évaluer les surfaces, les accès et les contraintes horaires. Le devis détaillé suit sous quelques jours, sans engagement.</p>",
    },
    {
      question: "Travaillez-vous avec les syndics et bailleurs du secteur ?",
      answer:
        "<p>Oui, nous collaborons régulièrement avec des syndics et gestionnaires en Seine-Saint-Denis. Nous adaptons nos <strong>modalités de facturation</strong> et de reporting à leurs process internes, et assurons un interlocuteur dédié pour le suivi des interventions récurrentes.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride:
    "Desservie par le RER E et le Tram T4, au pied du Plateau d'Avron",

  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des fibres textiles, élimination des salissures incrustées et séchage contrôlé pour une remise en circulation rapide de vos espaces.",
      whyUsBullets: [
        "Connaissance des configurations locales : halls étroits du centre-ville, accès contraints des immeubles anciens de Villemomble.",
        "Matériel d'injection-extraction professionnel adapté aux fibres textiles denses comme aux revêtements fins des parties communes.",
        "Interventions planifiées en dehors des heures de forte affluence pour limiter la gêne des occupants et usagers.",
      ],
      uniqueIntro:
        "<p>Dans le secteur du <strong>centre-ville et de l'Avenue du Raincy</strong>, les moquettes des cabinets libéraux et des halls d'entrée accumulent rapidement poussières fines et traces de passage. Les allées et venues quotidiennes déposent des résidus que l'aspiration seule ne suffit pas à déloger. Les fibres se ternissent, les zones de circulation se marquent, et l'aspect général se dégrade en quelques mois seulement.</p>\n\n<p class=\"mt-4\">Dans les <strong>parties communes d'immeubles anciens et de petits collectifs</strong>, le revêtement textile subit une usure accélérée. Les escaliers étroits concentrent le piétinement sur des surfaces réduites. Un entretien adapté redonne de la tenue aux fibres, améliore le confort visuel et limite les plaintes des occupants concernant l'hygiène des espaces partagés.</p>\n\n<p class=\"mt-4\">Le flux piéton lié à la gare RER E ramène quotidiennement poussières extérieures et particules fines dans les halls proches. Une intervention structurée, avec diagnostic préalable et protections adaptées, permet de traiter efficacement ces revêtements sans perturber l'activité des lieux.</p>",
      uniqueDeepDive:
        "<h3>Zones de passage intensif</h3>\n<p>Les entrées et couloirs concentrent l'essentiel des salissures. Après aspiration préalable, le traitement par injection-extraction cible ces surfaces en priorité. Plusieurs passes successives délogent les particules incrustées dans les fibres bouclées ou velours.</p>\n\n<h3>Surfaces périphériques et angles</h3>\n<p>Les abords de plinthes et les recoins accumulent poussières et résidus moins visibles. Un détachage ciblé traite les taches localisées avant le passage général. Les protections installées sur les bas de murs évitent les projections.</p>\n\n<h3>Séchage et remise en circulation</h3>\n<p><strong>L'extraction maximale de l'humidité</strong> réduit le temps de séchage à quelques heures selon l'épaisseur du revêtement et la ventilation du local. Des consignes de non-piétinement temporaire sont communiquées pour préserver le résultat. La fréquence d'entretien recommandée dépend du niveau de passage constaté.</p>",
      specificChallenges: [
        "Halls d'immeubles anciens avec <strong>escaliers étroits</strong> compliquant l'acheminement du matériel.",
        "Moquettes de bureaux et cabinets soumises à un <strong>piétinement quotidien intense</strong> près de la gare.",
        "Revêtements textiles des parties communes marqués par les <strong>poussières ramenées des axes passants</strong>.",
        "Stationnement difficile en centre-ville nécessitant une organisation logistique anticipée.",
        "Fibres ternies par <strong>l'accumulation de résidus</strong> que l'aspiration régulière ne suffit pas à éliminer.",
      ],
      faqAdditions: [
        {
          question:
            "Comment acheminer le matériel dans les cages d'escalier étroites des immeubles du centre-ville de Villemomble ?",
          answer:
            "<p>Nous utilisons des <strong>équipements compacts et modulables</strong>, transportables par sections dans les passages réduits. Le repérage préalable permet d'identifier les contraintes d'accès et d'organiser l'intervention sans encombrer les circulations ni gêner les résidents aux heures de passage.</p>",
        },
        {
          question:
            "Quelle méthode privilégier pour les moquettes de bureaux situés près de la gare RER E, injection-extraction ou encapsulation ?",
          answer:
            "<p>L'injection-extraction reste la technique la plus efficace pour extraire les salissures profondes accumulées par le flux quotidien de navetteurs. Elle convient aux fibres denses des espaces professionnels et permet un séchage maîtrisé compatible avec une reprise d'activité rapide.</p>",
        },
        {
          question:
            "Comment traiter des taches anciennes incrustées sur une moquette d'entrée très fréquentée, comme celles de la Grande Rue ?",
          answer:
            "<p>Un pré-détachage ciblé est appliqué sur les zones marquées avant le traitement général. Les produits utilisés agissent sur les résidus organiques et minéraux sans altérer les fibres. Plusieurs passes d'extraction permettent de réduire significativement les traces, même anciennes.</p>",
        },
        {
          question:
            "Après intervention sur la moquette d'une salle comme celle du Théâtre Georges Brassens, quel délai avant remise en service ?",
          answer:
            "<p><strong>Le temps de séchage varie selon l'épaisseur du revêtement</strong> et la ventilation du lieu. En conditions normales, comptez entre quatre et huit heures avant de pouvoir circuler à nouveau. Nous communiquons un créneau précis après évaluation sur place.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parkings souterrains et aériens, avec gestion rigoureuse des eaux de lavage et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès aux parkings souterrains des résidences villemomblaises et des parkings publics secteur stade.",
        "Autolaveuse adaptée aux surfaces béton et enrobé, gestion stricte des eaux de lavage conformément aux évacuations existantes.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation véhicules et le balisage sans bloquer l'accès aux résidents.",
      ],
      uniqueIntro:
        "<p>Les traces d'huile et les dépôts de suie sont visibles sur de nombreux sols de parkings à Villemomble, notamment dans les <strong>résidences des Marnaudes</strong> et aux abords des parkings relais proches de la gare. Ces salissures s'accumulent au fil des mois, rendant les surfaces glissantes et dégradant l'aspect général des espaces de stationnement.</p>\n\n<p class=\"mt-4\">Un sol de parking encrassé génère des remontées régulières auprès des syndics : plaintes de copropriétaires, risques de chute sur les rampes, image dégradée des parties communes. Dans les <strong>parkings souterrains en béton des résidences années 70-90</strong>, l'absence d'entretien régulier accentue l'incrustation des graisses et complique les interventions ultérieures.</p>\n\n<p class=\"mt-4\">Avec un trafic important lié aux navetteurs RER, les parkings de Villemomble subissent une rotation véhicules soutenue. Une intervention structurée permet de coordonner le lavage avec les horaires de faible affluence, d'organiser le balisage et de restituer des sols propres sans perturber l'usage quotidien.</p>",
      uniqueDeepDive:
        "<h3>Sol dégraissé et sécurisé</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des huiles, graisses et poussières accumulées. Le diagnostic initial identifie le type de sol (béton brut, résine, enrobé) et l'état des évacuations pour adapter le traitement.</p>\n\n<p>Un balayage préalable élimine les débris grossiers avant l'application du dégraissant.</p>\n\n<h3>Lavage mécanisé par zones</h3>\n<p>L'autolaveuse ou la haute pression traite les surfaces par passes successives. Les zones critiques (rampes d'accès, angles morts, pieds de murs, rigoles) reçoivent une attention particulière pour éviter les résidus glissants.</p>\n\n<p>La rotation des véhicules est organisée en amont avec le gestionnaire pour libérer les zones à traiter.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Le balisage sécurise les zones humides pendant le séchage.</p>\n\n<p>Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé. Un compte-rendu avec recommandations de fréquence est transmis au syndic.</p>",
      specificChallenges: [
        "Huiles incrustées sur sols béton des parkings souterrains résidences Marnaudes.",
        "Rampes d'accès étroites dans les copropriétés années 70-90 nécessitant un traitement antidérapant.",
        "Coordination rotation véhicules avec les navetteurs RER aux horaires de pointe.",
        "Gestion des eaux de lavage dans les souterrains sans évacuation directe vers l'extérieur.",
        "Balisage sécurisé des zones humides pour maintenir l'accès piéton aux résidents.",
      ],
      faqAdditions: [
        {
          question:
            "Comment gérer les eaux de lavage dans les parkings souterrains des résidences des Marnaudes ?",
          answer:
            "<p>Les eaux chargées en dégraissant sont orientées vers les <strong>regards et rigoles existants</strong>. Nous vérifions leur état avant intervention pour éviter tout engorgement. Aucun rejet n'est effectué vers l'extérieur ou les parties communes. Le syndic reçoit un compte-rendu précisant les volumes traités et l'état des évacuations.</p>",
        },
        {
          question:
            "Quels traitements pour enlever les taches d'huile anciennes sur les sols béton des parkings proches de la gare ?",
          answer:
            "<p>Un <strong>dégraissant alcalin</strong> est appliqué sur les zones marquées, suivi d'un temps de contact adapté à l'ancienneté des dépôts. L'autolaveuse ou la haute pression déloge ensuite les résidus incrustés. Plusieurs passes peuvent être nécessaires sur les taches les plus tenaces. Le résultat dépend de l'état initial du revêtement.</p>",
        },
        {
          question:
            "Quels horaires sont recommandés pour les interventions sur le parking du stade Georges Pompidou ?",
          answer:
            "<p>Les créneaux en journée hors événements sportifs ou en début de matinée limitent la gêne. Nous consultons le planning d'occupation avec le gestionnaire pour éviter les jours de matchs ou d'entraînements. Les interventions de nuit restent possibles si le parking est éclairé et accessible.</p>",
        },
        {
          question:
            "Faut-il adapter les méthodes selon parking aérien ou souterrain à Villemomble ?",
          answer:
            "<p>Oui. Les parkings souterrains en béton nécessitent une gestion stricte des eaux et une ventilation suffisante pour le séchage. Les parkings aériens en enrobé supportent mieux la haute pression mais exposent davantage aux salissures atmosphériques. Le diagnostic initial détermine le matériel et les produits adaptés à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement des supports, protection des menuiseries et gestion maîtrisée des eaux pour un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons côté parcs arborés ou façades sur axes passants, chaque situation est évaluée.",
        "Pression ajustée selon le support et l'état des joints, avec produits adaptés au carrelage, béton ou dalles.",
        "Organisation anti-coulures systématique et coordination avec les occupants pour limiter la gêne pendant l'intervention.",
      ],
      uniqueIntro:
        "<p>Dans les quartiers pavillonnaires comme Les Coquetiers ou dans les résidences du centre-ville, les balcons accumulent rapidement un <strong>voile grisâtre</strong>. La proximité de l'Avenue du Raincy et des axes passants dépose chaque semaine une fine couche de particules sur les garde-corps et les sols. Les occupants finissent par éviter cet espace, faute de pouvoir s'y installer sans salir vêtements ou mobilier.</p>\n\n<p class=\"mt-4\">Sur les balcons filants des immeubles années 60-70 ou les loggias des résidences plus récentes, les joints noircissent et les dépôts verts s'installent dès que l'humidité persiste. Un simple coup de balai ne suffit plus : la crasse s'incruste, le carrelage perd son aspect d'origine, et l'envie de profiter de l'extérieur disparaît progressivement.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable. Diagnostic du support, choix du produit adapté, rinçage contrôlé sans gêner les voisins du dessous : chaque étape est pensée pour un résultat durable, même sur les façades exposées aux poussières routières de la N302 ou de l'Avenue de Rosny.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et seuils reçoivent une protection pour éviter toute projection. Les gros débris, feuilles mortes et terre accumulée sont retirés manuellement avant le traitement.</p>\n\n<h3>Nettoyage et traitement adapté</h3>\n<p>Un produit est sélectionné selon le support : carrelage, béton brut ou dalles. Le <strong>brossage, manuel ou mécanique</strong>, désincruste les salissures tenaces. Le garde-corps, les vitrages accessibles et les murs mitoyens sont traités dans la foulée. Si nécessaire, une pression douce est appliquée en contrôlant l'impact sur les joints.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>Le rinçage s'effectue avec une <strong>gestion stricte des écoulements</strong> pour éviter les coulures chez les voisins du dessous. La façade est protégée des projections. Après séchage, des conseils d'entretien sont transmis pour espacer les prochaines interventions et préserver le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Dépôts noirs</strong> sur balcons exposés à l'Avenue du Raincy et aux axes passants.",
        "Mousses et <strong>traces vertes persistantes</strong> sur les balcons ombragés côté Parc de la Garenne.",
        "Joints de carrelage fragilisés sur les balcons filants des immeubles années 60-70.",
        "Accès nacelle difficile dans les rues étroites du centre-ville, intervention depuis l'intérieur privilégiée.",
        "Gestion des eaux de rinçage pour éviter les coulures chez les voisins en copropriété.",
      ],
      faqAdditions: [
        {
          question:
            "Quel protocole pour nettoyer sans abîmer les joints de carrelage sur les balcons du Plateau d'Avron ?",
          answer:
            "<p>Le carrelage est d'abord testé sur une zone discrète. La <strong>pression est réglée</strong> pour déloger les salissures sans creuser les joints. Un brossage manuel complète le passage sur les zones fragiles. Le rinçage final est contrôlé pour ne pas saturer les joints d'eau.</p>",
        },
        {
          question:
            "Comment gérer l'eau et éviter les coulures sur les balcons donnant sur Avenue de Rosny ?",
          answer:
            "<p>Un bâchage est posé en périphérie du balcon avant le rinçage. L'eau est <strong>dirigée vers l'évacuation</strong> existante ou aspirée au fur et à mesure. Les façades et balcons inférieurs sont surveillés pendant toute l'intervention pour stopper immédiatement en cas de débordement.</p>",
        },
        {
          question:
            "Comment éliminer dépôts verts et mousses sur balcons exposés au Parc de la Garenne ?",
          answer:
            "<p>Un produit anti-mousse est appliqué et laissé agir avant brossage. Les zones les plus incrustées sont traitées mécaniquement. Le rinçage élimine les résidus sans disperser les spores. Un traitement préventif peut être proposé pour ralentir la réapparition.</p>",
        },
        {
          question:
            "Pour balcons d'étage en centre-ville avec rue étroite, quelle organisation pour intervenir sans nacelle ?",
          answer:
            "<p>L'intervention se fait depuis l'intérieur du logement. Le matériel est monté par les parties communes après accord du gardien ou du syndic. Les horaires sont calés pour limiter la gêne dans les escaliers. Aucune occupation de voirie n'est nécessaire.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque villemombloise : proximité des parcs, immeubles anciens du centre, résidences avec cours intérieures.",
        "Protocole complet avec EPI adapté, confinement de la zone et désinfection virucide respectant les temps de contact.",
        "Organisation discrète : bâchage pour protéger voisins et intérieur, évacuation sécurisée des déchets en sacs étanches.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans utilisation, un balcon exposé aux passages de pigeons accumule rapidement des déjections. À Villemomble, les logements situés à proximité du Parc Jean Mermoz ou donnant sur le <strong>Parc de la Garenne</strong> subissent particulièrement ce phénomène. L'odeur s'installe, les traces s'incrustent sur le sol et le garde-corps, et l'espace extérieur devient inutilisable.</p>\n\n<p class=\"mt-4\">Les <strong>corniches et rebords des immeubles anciens</strong> du centre-ville, ainsi que les toits plats des résidences années 70 du quartier Les Marnaudes, offrent des points de repos idéaux pour ces oiseaux. Les fientes s'accumulent sur les balcons en contrebas, attaquant progressivement le béton, la peinture et les éléments métalliques.</p>\n\n<p class=\"mt-4\">Les balcons peu utilisés et les cours intérieures favorisent cette accumulation sans qu'on s'en aperçoive immédiatement. Une intervention structurée permet de retrouver un espace sain : diagnostic de l'étendue des souillures, traitement adapté aux supports, et désinfection pour éliminer les agents pathogènes présents dans les déjections.</p>",
      uniqueDeepDive:
        "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace utilisable, débarrassé des souillures visibles et des risques sanitaires liés aux fientes. Le sol, le garde-corps, les vitrages et les murs mitoyens sont traités. Un produit virucide homologué élimine les agents pathogènes avec un temps de contact respecté.</p>\n\n<h3>Sécurisation et confinement préalable</h3>\n<p>L'intervenant porte EPI complet : masque FFP2, gants, lunettes et combinaison jetable. La <strong>zone est bâchée</strong> pour protéger l'intérieur du logement et limiter la dispersion vers les voisins. Une humidification neutralise les poussières contaminées avant toute manipulation.</p>\n\n<h3>Collecte, nettoyage et évacuation</h3>\n<p>Les fientes sont ramassées et conditionnées en sacs étanches. Les supports sont nettoyés selon leur nature : <strong>pression contrôlée sur béton</strong>, traitement doux sur peinture ou métal. Après rinçage final, un délai d'aération est respecté avant réutilisation. Des solutions de dissuasion (pics, filets) peuvent être proposées pour limiter le retour des pigeons.</p>",
      specificChallenges: [
        "Balcons côté Parc de la Garenne : exposition directe aux passages de pigeons nichant dans les arbres.",
        "Corniches des immeubles anciens Grande Rue : rebords propices à <strong>l'accumulation de fientes</strong> sur les balcons en contrebas.",
        "Résidences Les Marnaudes : cours intérieures peu ventilées où les déjections s'accumulent sans être remarquées.",
        "Toits plats années 70 : points de repos favoris des pigeons, souillures régulières sur les derniers étages.",
        "Balcons peu utilisés : accumulation progressive nécessitant une désinfection approfondie avant remise en service.",
      ],
      faqAdditions: [
        {
          question:
            "Quels risques sanitaires justifient une intervention urgente sur les balcons proches du Parc Jean Mermoz ?",
          answer:
            "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les <strong>voies respiratoires</strong>. Sur les balcons exposés aux oiseaux du Parc Jean Mermoz, l'accumulation crée un environnement propice à leur prolifération. Une désinfection rapide limite les risques pour les occupants.</p>",
        },
        {
          question:
            "Quel équipement et protocole appliquez-vous pour traiter les fientes sur les corniches anciennes de la Grande Rue ?",
          answer:
            "<p>L'intervenant porte masque FFP2, gants, lunettes et combinaison jetable. Sur les corniches des immeubles anciens, nous humidifions d'abord pour éviter la dispersion des poussières. Le nettoyage respecte les supports fragiles, suivi d'une désinfection avec produit homologué.</p>",
        },
        {
          question:
            "Quelle solution de désinfection utilisez-vous sur les balcons donnant sur le Parc de la Garenne ?",
          answer:
            "<p>Nous appliquons un produit virucide et bactéricide homologué, avec un temps de contact respecté selon les recommandations du fabricant. Cette désinfection élimine les agents pathogènes présents dans les fientes accumulées sur les balcons exposés aux oiseaux du parc.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des déchets sur les balcons donnant sur cour intérieure aux Marnaudes ?",
          answer:
            "<p>Les fientes sont collectées et conditionnées en <strong>sacs étanches</strong> pour éviter toute dispersion. Dans les résidences Les Marnaudes avec cours intérieures, nous organisons le passage par les parties communes en protégeant les zones traversées. L'évacuation se fait de manière sécurisée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Vos canapés, tapis et matelas retrouvent fraîcheur et propreté grâce à une extraction en profondeur des salissures, avec un séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Nous connaissons les intérieurs villemomblois, des pavillons meulières aux appartements proches de la gare RER E.",
        "Détachage ciblé et injection-extraction textile adaptée à chaque fibre, du coton au velours.",
        "Intervention planifiée selon vos disponibilités, matériel transporté à domicile, remise en service sous 24 heures.",
      ],
      uniqueIntro:
        "<p>Comment préserver la propreté d'un canapé familial quand enfants et animaux partagent le quotidien ? Dans les pavillons des Coquetiers ou de l'Époque, les textiles d'ameublement absorbent poussières, miettes et poils au fil des semaines. Les taches de café, les traces laissées par les animaux domestiques ou les accidents du quotidien finissent par s'incruster dans les fibres.</p>\n\n<p class=\"mt-4\">Un entretien régulier redonne du confort à votre intérieur. Les salons équipés de canapés tissu non déhoussables ou de tapis en laine retrouvent un aspect soigné, sans odeurs persistantes. Pour les professions libérales installées en centre-ville, les fauteuils de salle d'attente bénéficient également d'un rafraîchissement qui améliore l'image auprès des patients ou clients.</p>\n\n<p class=\"mt-4\">L'intervention commence par un diagnostic textile pour adapter le traitement à chaque support. Qu'il s'agisse d'un velours fragile ou d'un synthétique résistant, la méthode et la pression sont ajustées. Le matériel est acheminé jusqu'à votre domicile, même dans les rues étroites des quartiers pavillonnaires.</p>",
      uniqueDeepDive:
        "<h3>Textile propre et assaini</h3>\n<p>L'objectif est d'extraire les salissures incrustées tout en préservant les fibres. Chaque textile réagit différemment : un canapé en coton supporte une extraction plus appuyée qu'un velours délicat. Le résultat visé est une surface nette, sans auréoles ni résidus de produit.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute injection, un <strong>test discret sur une zone cachée</strong> permet de vérifier la tenue des couleurs. Les taches identifiées (café, vin, urine, graisse) reçoivent un détachant adapté, enzymatique si nécessaire. Cette étape évite les mauvaises surprises et prépare le textile au nettoyage principal.</p>\n\n<h3>Injection-extraction et séchage</h3>\n<p>Le procédé combine injection d'une solution nettoyante et aspiration immédiate. La pression et la température sont modulées selon l'épaisseur du tissu. Après <strong>extraction maximale de l'humidité</strong>, des consignes de ventilation vous sont transmises. Selon la saison et l'aération disponible, comptez quelques heures avant de réutiliser votre canapé ou tapis.</p>",
      specificChallenges: [
        "<strong>Taches d'animaux</strong> fréquentes dans les pavillons familiaux des Coquetiers et de l'Époque.",
        "Canapés tissu non déhoussables difficiles à entretenir sans matériel professionnel.",
        "Accès parfois étroit dans les maisons meulières pour <strong>acheminer l'équipement</strong>.",
        "Tapis laine sensibles nécessitant un réglage précis de température et pression.",
        "Séchage à adapter selon l'aération variable des logements anciens.",
      ],
      faqAdditions: [
        {
          question:
            "Comment adaptez-vous la méthode de nettoyage selon le textile des canapés dans les pavillons du quartier Les Coquetiers ?",
          answer:
            "<p>Chaque tissu est testé avant intervention. Un coton résistant supporte une extraction appuyée, tandis qu'un velours ou une fibre fragile nécessite une <strong>pression réduite</strong> et une température modérée. Cette adaptation préserve les couleurs et la texture d'origine.</p>",
        },
        {
          question:
            "Après le nettoyage d'un canapé, combien de temps faut-il pour réduire les allergènes dans un salon familial avec enfants et animaux ?",
          answer:
            "<p>L'extraction en profondeur élimine une grande partie des acariens et poils incrustés dès l'intervention. L'amélioration est perceptible immédiatement après séchage complet, généralement sous quelques heures selon la ventilation du logement.</p>",
        },
        {
          question:
            "Quel est le temps de séchage moyen pour un canapé nettoyé dans un appartement proche de la gare du Raincy-Villemomble ?",
          answer:
            "<p>Comptez entre 4 et 8 heures selon l'épaisseur du tissu et l'<strong>aération disponible</strong>. Dans un appartement bien ventilé, le séchage est souvent plus rapide. Nous vous transmettons des consignes précises pour accélérer la remise en service.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches anciennes sur un tapis laine dans un logement du secteur Grande Rue ?",
          answer:
            "<p>Les taches incrustées reçoivent un pré-traitement enzymatique adapté à leur nature (café, vin, graisse). La laine étant sensible, la température et le temps de contact sont ajustés. Certaines marques très anciennes peuvent s'atténuer sans disparaître totalement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse : traitement des mousses, nettoyage adapté au support et protection du mobilier extérieur pour retrouver un espace agréable dès les beaux jours.",
      whyUsBullets: [
        "Connaissance des terrasses ombragées par la végétation dense des secteurs Coquetiers et Parc de la Garenne.",
        "Adaptation du protocole selon le support : pression contrôlée sur bois, traitement anti-mousse ciblé sur dalles gravillonnées.",
        "Organisation du passage matériel par l'intérieur et protection systématique des plantations avant intervention.",
      ],
      uniqueIntro:
        "<p>Les dépôts verts s'installent progressivement sur les dalles et le bois des terrasses. Dans les <strong>quartiers pavillonnaires du Plateau d'Avron et des Coquetiers</strong>, l'humidité persistante sous les arbres accélère la formation de mousses et de lichens. Les joints noircissent, le carrelage devient glissant après la pluie, et l'espace extérieur perd son attrait au fil des saisons.</p>\n\n<p class=\"mt-4\">Un décrassage régulier redonne à la terrasse sa fonction première : un prolongement du salon vers le jardin, utilisable sans appréhension. Les <strong>supports varient selon l'âge du bâti</strong> — dalles gravillonnées sur les constructions anciennes, bois composite ou carrelage sur les pavillons rénovés — et chaque matériau demande une approche différente pour éviter les dégradations.</p>\n\n<p class=\"mt-4\">L'intervention prend en compte les contraintes d'accès fréquentes à Villemomble : passage du matériel par l'intérieur de la maison lorsque la mitoyenneté bloque l'accès latéral, protection des plantations et gestion de l'écoulement vers les points de drainage existants.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier de jardin, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection contre les projections. Un balayage préalable élimine feuilles mortes, terre et débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour le bois, dégraissant pour le carrelage, traitement anti-mousse sur les dalles poreuses. Le <strong>brossage — manuel ou mécanique</strong> selon la surface — décolle les salissures incrustées. La haute pression intervient uniquement sur les matériaux qui la supportent, avec réglage de l'intensité pour préserver les joints.</p>\n\n<h3>Rinçage et remise en place</h3>\n<p>L'eau est dirigée vers les <strong>points d'écoulement</strong> pour éviter les stagnations. Les garde-corps et murets périphériques sont nettoyés dans la foulée. Une fois le séchage suffisant, le mobilier reprend sa place et vous recevez des conseils d'entretien saisonnier pour prolonger le résultat.</p>",
      specificChallenges: [
        "Mousses tenaces sur terrasses exposées nord, fréquentes dans les jardins arborés.",
        "Dalles gravillonnées sensibles à la haute pression : <strong>réglage indispensable</strong> pour éviter l'arrachement.",
        "<strong>Accès latéral souvent bloqué</strong> par la mitoyenneté : passage du matériel par la maison.",
        "Feuilles mortes et humidité persistante à proximité du Parc de la Garenne.",
        "Écoulement des eaux à gérer pour éviter les infiltrations vers les fondations.",
      ],
      faqAdditions: [
        {
          question:
            "Quel protocole appliquez-vous pour nettoyer une terrasse bois sans abîmer les lames dans les pavillons du Plateau d'Avron ?",
          answer:
            "<p>Le bois reçoit un <strong>lavage basse pression</strong> avec une buse adaptée, jamais de jet direct à forte intensité. Un produit dégrisant est appliqué si les lames ont grisé. Le sens des fibres est respecté lors du brossage pour éviter l'écaillage, et le séchage complet est attendu avant toute remise en circulation.</p>",
        },
        {
          question:
            "Comment éliminer mousses et lichens sur les terrasses proches du Parc de la Garenne ?",
          answer:
            "<p>L'ombre et l'humidité favorisent ces dépôts verts. Un traitement anti-mousse est pulvérisé après le nettoyage mécanique, puis laissé agir plusieurs jours. Ce produit freine la repousse pendant plusieurs mois. Un second passage peut être proposé en fin de saison humide si l'exposition reste défavorable.</p>",
        },
        {
          question:
            "Haute pression ou lavage doux pour dalles gravillonnées : que préconisez-vous sur les terrasses pavillonnaires ?",
          answer:
            "<p>Les dalles gravillonnées perdent leurs granulats sous un jet trop puissant. Nous privilégions une pression modérée combinée à un brossage rotatif. Les joints sont traités séparément si nécessaire. Cette approche préserve l'aspect d'origine tout en éliminant les salissures incrustées entre les reliefs.</p>",
        },
        {
          question:
            "Quelle est la meilleure saison pour un décrassage complet de terrasse à Villemomble ?",
          answer:
            "<p>Le printemps — entre mars et mai — offre des conditions idéales : températures douces, sol ressuyé après l'hiver, et terrasse prête pour la belle saison. L'automne convient aussi pour éliminer les dépôts de feuilles avant l'humidité hivernale. Nous évitons les périodes de gel ou de fortes pluies.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux ou avant état des lieux, avec traitement adapté à chaque surface pour une restitution dans les délais.",
      whyUsBullets: [
        "Connaissance des typologies locales : meulières du quartier de l'Époque, collectifs années 70, pavillons familiaux.",
        "Polyvalence sur les supports : parquet massif, carrelage ancien, faïence, vitres intérieures traitées avec produits adaptés.",
        "Organisation calée sur vos contraintes : intervention possible en 24-48h, coordination directe avec agence ou propriétaire.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou une longue période d'occupation, un appartement ou une maison accumule des traces que le ménage courant ne suffit pas à éliminer. Dans la zone de rotation locative autour de la <strong>Gare du Raincy - Villemomble - Montfermeil</strong>, les demandes de remise en état se multiplient entre deux locataires, souvent avec des délais serrés imposés par les agences.</p>\n\n<p class=\"mt-4\">Les pavillons 1930, appartements T2/T3 et maisons meulières présentent des surfaces variées : parquets massifs, carrelages anciens, faïences de salle de bain. Chaque support demande un traitement distinct pour éviter les dégradations. Un logement correctement préparé facilite l'état des lieux et limite les litiges sur le dépôt de garantie.</p>\n\n<p class=\"mt-4\">Qu'il s'agisse d'un ménage fin de chantier avec résidus d'enduit et poussière de plâtre, ou d'une préparation avant emménagement, l'intervention suit un diagnostic initial. Les pièces d'eau, les vitres intérieures et les placards sont traités selon un ordre précis pour une restitution conforme aux attentes.</p>",
      uniqueDeepDive:
        "<h3>Logement prêt à habiter ou à relouer</h3>\n<p>L'objectif est un bien propre sur l'ensemble des surfaces : sols sans traces, vitres transparentes, sanitaires détartrés, placards vidés et essuyés. Le résultat permet une remise des clés sans réserve ou un emménagement immédiat.</p>\n\n<h3>Diagnostic et séquençage adapté</h3>\n<p>Avant toute action, un tour du logement identifie la nature des salissures : poussière de chantier, calcaire incrusté, traces de colle ou résidus gras. Le plan d'intervention est ajusté selon les surfaces présentes et le délai disponible.</p>\n\n<h3>Traitement par zones et contrôle final</h3>\n<p>Le travail commence par les pièces sèches (<strong>dépoussiérage plafonds, murs, plinthes</strong>) puis les pièces d'eau (désinfection sanitaires, nettoyage faïences). Les sols sont traités en dernier selon leur nature. Un contrôle visuel clôture l'intervention avant aération du logement.</p>",
      specificChallenges: [
        "Délais courts entre deux locataires dans les appartements proches de la gare RER E.",
        "Résidus d'enduit et poussière fine après rénovation de pavillons anciens.",
        "Parquets massifs des maisons meulières nécessitant un traitement sans excès d'eau.",
        "Stationnement limité en centre-ville pour le chargement du matériel.",
        "Coordination avec artisans ou agences pour respecter la date de remise des clés.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle différence entre un ménage standard et un nettoyage fin de chantier dans un pavillon ancien du quartier de l'Époque ?",
          answer:
            "<p>Le ménage fin de chantier inclut l'élimination des <strong>résidus de travaux</strong> : poussière de plâtre, traces de peinture, colle sur les sols. Les surfaces sont traitées en profondeur, y compris les recoins et les menuiseries, ce qu'un ménage courant ne couvre pas.</p>",
        },
        {
          question:
            "Quel délai d'intervention pour un nettoyage urgent avant état des lieux près de la Gare du Raincy - Villemomble ?",
          answer:
            "<p>Selon la disponibilité et la surface du bien, une intervention peut être planifiée sous 24 à 48 heures. Pour les demandes très urgentes, un <strong>échange préalable</strong> permet d'évaluer la faisabilité et d'ajuster le planning en conséquence.</p>",
        },
        {
          question:
            "Quel niveau de propreté obtenu pour un appartement T2 ou T3 avant remise des clés en relocation ?",
          answer:
            "<p>L'objectif est un logement sans traces visibles : sols propres, sanitaires détartrés, vitres intérieures nettoyées, placards essuyés. Le résultat vise à éviter toute retenue sur le dépôt de garantie lors de l'état des lieux de sortie.</p>",
        },
        {
          question:
            "Quels produits et précautions pour les parquets massifs des maisons meulières à Villemomble ?",
          answer:
            "<p>Les parquets anciens sont traités avec des produits à pH neutre et un minimum d'eau pour éviter le gonflement du bois. L'aspiration précède le lavage, et le séchage est contrôlé pour préserver l'état du revêtement.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
