// src/data/cities/nogent-sur-marne.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Nogent-sur-Marne",
  slug: "nogent-sur-marne",
  postalCodes: ["94130"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription:
    "Commune de très haut standing aux bords de Marne, Nogent-sur-Marne combine un patrimoine architectural exceptionnel (villas Art Déco, meulières de prestige, maisons d'architectes) et une topographie en déclivité. L'humidité de la Marne, la végétation du Bois de Vincennes et la pollution de l'A4 imposent un entretien spécialisé des surfaces nobles pour préserver la valeur patrimoniale des biens.",

  hubIntro:
    "<p>Nogent-sur-Marne réunit un patrimoine immobilier d'exception nécessitant des protocoles de maintenance adaptés aux matériaux nobles et fragiles. <strong>Klinova intervient en partenariat avec les propriétaires de maisons de prestige et les syndics de copropriétés</strong> pour préserver meulières, pierres de taille, ferronneries d'art et joints à la chaux, en tenant compte des contraintes topographiques et environnementales spécifiques aux bords de Marne.</p>\n<p>Nos équipes connaissent les spécificités locales : humidité constante générant lichens et mousses sur les façades, pollens et sève du Bois de Vincennes, pollution noire de l'A4 sur les balcons du bas de ville, rues en pente raide vers la Marne. Nous déployons des véhicules compacts adaptés aux impasses étroites des berges et des méthodes douces (basse pression, vapeur) pour préserver les matériaux patrimoniaux typiques de Nogent.</p>\n<p class=\"mt-4\"><strong>Points clés de notre intervention :</strong></p>\n<ul>\n  <li><strong>Préservation du patrimoine architectural</strong> : Protocoles basse pression et vapeur pour meulières fragiles et joints à la chaux, méthodes adaptées aux corniches Art Déco travaillées, respect des ferronneries d'art et pierres de taille nécessitant une expertise spécifique.</li>\n  <li><strong>Maîtrise des contraintes topographiques</strong> : Véhicules compacts type L1H1 pour accès aux impasses étroites des bords de Marne, sécurisation du matériel dans les rues en pente raide, planification tenant compte du stationnement complexe du centre-ville.</li>\n  <li><strong>Traitement des salissures environnementales</strong> : Protocoles anti-mousse renforcés pour l'humidité de la Marne, élimination des pollens et sève du Bois, dégraissant pour pollution noire de l'A4, recommandations de fréquence adaptées à chaque exposition.</li>\n</ul>",

  citySpecificChallenges: [
    "<strong>Humidité constante de la Marne</strong> générant développement massif de lichens blancs et mousses vertes sur façades en pierre de taille et murets, particulièrement dans les quartiers du Port et Sous la Lune",
    "<strong>Pollution végétale du Bois de Vincennes</strong> produisant pollens printaniers collants et sève sur vitrages et terrasses des résidences du Plateau et du quartier Voisins du Bois",
    "Topographie en déclivité avec rues en pente raide vers la Marne nécessitant sécurisation du matériel et véhicules compacts pour accès aux impasses étroites des berges",
    "<strong>Matériaux patrimoniaux fragiles</strong> (meulières, joints à la chaux, corniches Art Déco, ferronneries d'art) exigeant protocoles basse pression et vapeur pour préserver la valeur architecturale exceptionnelle",
  ],

  districts: [
    // Quartiers officiels (Ville de Nogent-sur-Marne)
    "Le Bois Baltard",
    "Les Viselets",
    "Village",
    "Marne Beauté",
    "Plaisance Mairie",

    // Quartiers d’usage / conseils de quartier (libellés couramment utilisés)
    "Le bois – Porte de Nogent",
    "Plaisance",
    "Nogent Village",
    "Le Port sous la Lune",
    "Beauté – Baltard",
  ],

  nearbyCities: [
        "fontenay-sous-bois",
        "le-perreux-sur-marne",
        "joinville-le-pont",
        "vincennes",
        "champigny-sur-marne",
        "neuilly-plaisance",
        "montreuil",
        "rosny-sous-bois",
        "saint-maur-des-fosses",
        "saint-mande"
      ],

  landmarks: [
    "Mairie de Nogent-sur-Marne",
    "Le Pavillon Baltard",
    "Gare de Nogent-sur-Marne (RER A)",
    "Gare de Nogent - Le Perreux (RER E)",
    "Le Port de Plaisance",
    "Le Viaduc de Nogent",
    "Scène Nationale Watteau",
    "Bois de Vincennes (limitrophe)",
  ],

  faq: [
    {
      question:
        "Vos méthodes sont-elles vraiment adaptées aux meulières et maisons Art Déco de Nogent ?",
      answer:
        "<p><strong>Oui, nous utilisons exclusivement des protocoles basse pression et vapeur</strong> pour les matériaux patrimoniaux fragiles. Les meulières et joints à la chaux ne tolèrent aucune haute pression agressive qui déchausserait les pierres. Les corniches Art Déco travaillées et ferronneries d'art nécessitent un nettoyage manuel ou à la vapeur pour préserver les détails architecturaux. Cette expertise spécifique est indispensable à Nogent où le patrimoine architectural exceptionnel représente la valeur principale des biens.</p>",
    },
    {
      question:
        "Intervenez-vous dans les impasses privées étroites menant aux berges de la Marne ?",
      answer:
        "<p><strong>Oui, nous utilisons des véhicules compacts type L1H1 ou Berlingo</strong> spécialement dimensionnés pour accéder aux impasses sinueuses et étroites du Port et du secteur Sous la Lune. Nous effectuons systématiquement une visite préalable pour repérer les contraintes (largeur, virages, déclivité vers la Marne) et valider la faisabilité technique. Pour les accès impossibles en véhicule, nous utilisons du matériel portable avec tuyaux longue distance pour atteindre les propriétés riveraines.</p>",
    },
    {
      question:
        "Comment gérez-vous le stationnement dans le centre-ville et les rues en pente vers la Marne ?",
      answer:
        "<p><strong>Nous planifions chaque intervention en repérant les zones de stationnement temporaire</strong> (dépose minute, emplacements livraison) dans le centre-ville dense et autour du marché. Pour les interventions dans les rues en pente raide vers la Marne (Avenue de Joinville), nous sécurisons systématiquement le matériel dans les véhicules pour éviter toute chute ou glissement. Cette rigueur logistique est essentielle dans la topographie nogentaise particulièrement contraignante.</p>",
    },
    {
      question:
        "Le déplacement pour diagnostic est-il gratuit même pour les propriétés isolées des bords de Marne ?",
      answer:
        "<p><strong>Oui, le diagnostic sur site reste gratuit</strong> quel que soit le quartier (Centre-Ville, Plateau, Port, Sous la Lune, Beauté-Baltard, Plaisance). Le technicien évalue les matériaux patrimoniaux, identifie les contraintes environnementales (humidité, mousses, pollution végétale ou atmosphérique) et remet un chiffrage détaillé sous 48h adapté aux spécificités de votre bien. Cette expertise préalable garantit le choix des méthodes adaptées à la préservation du patrimoine nogentais.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Le nettoyage professionnel des moquettes à Nogent-sur-Marne préserve l'élégance des halls et escaliers des copropriétés de standing tout en gérant l'humidité de la Marne qui favorise l'encrassement et les odeurs.",

      whyUsBullets: [
        "Connaissance de l'environnement nogentais spécifique : Intervention régulière dans les copropriétés du Port, du Plateau et du centre-ville, avec maîtrise de l'humidité de la Marne et des salissures végétales du Bois.",
        "Extraction maximale pour environnement humide : Machines d'injection-extraction à aspiration renforcée pour limiter l'humidité résiduelle critique, détergents adaptés aux pollens collants, séchage surveillé dans les zones exposées à la Marne.",
        "Adaptation aux contraintes topographiques : Véhicules compacts pour impasses étroites des berges, sécurisation du matériel dans les rues en pente, planification tenant compte du stationnement complexe du centre-ville et du marché.",
      ],

      uniqueIntro:
        "<p>Les copropriétés nogentaises, qu'elles surplombent la Marne depuis le Plateau ou occupent les bords immédiats de l'eau au Port, subissent un encrassement progressif de leurs moquettes lié à l'environnement particulier de la commune. L'humidité constante de la rivière imprègne l'air et pénètre les halls d'entrée, favorisant l'incrustation des salissures dans les fibres. Les pollens collants et la sève du Bois de Vincennes se déposent au printemps sur les semelles des résidents du quartier Voisins du Bois, puis s'incrustent dans les moquettes des parties communes. La pollution noire de l'A4 affecte les immeubles du bas de ville, ajoutant des particules grasses aux salissures habituelles.</p>\n<p class=\"mt-4\">Les copropriétaires constatent cette dégradation spécifique : les seuils d'entrée restent humides plus longtemps après la pluie, les zones de passage forment des traînées grises tenaces, une légère odeur de renfermé apparaît dans les cages d'escalier mal ventilées, particulièrement dans les immeubles proches de la Marne. Les conseils syndicaux reçoivent des remarques sur l'aspect négligé des parties communes, qui contraste avec le standing architectural des résidences nogentaises. Cette impression nuit à l'image de prestige des copropriétés et au confort quotidien des résidents habitués à un environnement soigné.</p>\n<p class=\"mt-4\">Un nettoyage professionnel adapté à l'environnement nogentais inverse cette dynamique. Il extrait les salissures aggravées par l'humidité, élimine les dépôts végétaux collants et ravive les couleurs d'origine. <strong>L'extraction puissante limite l'humidité résiduelle critique</strong> dans cet environnement déjà humide. Les résidents retrouvent des parties communes accueillantes, dignes du standing de leur adresse aux bords de Marne.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic adapté à l'environnement humide</h3>\n<p>Le technicien examine l'état de la moquette (fibres synthétiques ou laine, bouclées ou velours), identifie les salissures typiques (particules végétales collantes, traces d'humidité, boue séchée, pollution noire pour le bas de ville) et repère les zones critiques (seuils exposés à l'humidité constante, paliers du rez-de-chaussée près des halls ouverts sur jardin). Il note les contraintes d'accès : rues en pente raide vers la Marne nécessitant la sécurisation du matériel, stationnement complexe dans le centre-ville, impasses étroites des bords de Marne imposant parfois un véhicule compact. Cette analyse détermine la puissance d'extraction nécessaire, <strong>point critique pour limiter l'humidité résiduelle</strong> dans cet environnement déjà saturé.</p>\n\n<h3>Injection-extraction avec extraction maximale anti-humidité</h3>\n<p>La machine pulvérise un mélange d'eau chaude et de détergent au cœur des fibres, délogeant les particules végétales collantes du Bois de Vincennes et les salissures aggravées par l'humidité ambiante. <strong>L'aspiration immédiate et puissante retire l'eau sale avant saturation du support</strong>, point absolument critique dans l'environnement humide nogentais où un excès d'humidité résiduelle favoriserait le développement d'odeurs de moisi. Sur les zones très encrassées (entrées des immeubles du Port exposées aux remontées d'humidité, seuils des résidences du Plateau accumulation de pollens), plusieurs passages successifs extraient les salissures tenaces. Le détergent est sélectionné pour sa capacité à dissoudre les dépôts végétaux collants typiques de l'environnement forestier proche.</p>\n\n<h3>Séchage renforcé et conseils environnementaux</h3>\n<p>Le séchage complet intervient sous 8 à 12 heures dans l'environnement humide nogentais, durée supérieure aux zones urbaines sèches. Le technicien conseille impérativement d'aérer les cages d'escalier en ouvrant les fenêtres et portes pour favoriser la circulation d'air, et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés des bords de Marne (Port, Sous la Lune) particulièrement exposées à l'humidité, un nettoyage annuel maintient la propreté et prévient les odeurs. Les immeubles du Plateau peuvent espacer à 18 mois. Les résidences proches du Bois nécessitent un traitement au printemps, après la chute des pollens, pour éliminer les dépôts végétaux avant qu'ils ne s'incrustent définitivement.</p>",

      specificChallenges: [
        "<strong>Humidité constante de la Marne</strong> : Les copropriétés des bords de l'eau retiennent l'humidité ambiante qui ralentit le séchage et favorise le développement d'odeurs de moisi si l'extraction n'est pas suffisamment puissante.",
        "<strong>Pollens et sève collants du Bois de Vincennes</strong> : Les résidences du Plateau et du quartier Voisins du Bois accumulent au printemps des dépôts végétaux qui s'incrustent profondément dans les fibres et nécessitent un détergent spécifique et plusieurs passes d'extraction.",
        "<strong>Accès difficiles aux propriétés des berges</strong> : Les impasses privées étroites et sinueuses menant aux bords de Marne imposent des véhicules compacts type L1H1 et une planification logistique rigoureuse pour atteindre les copropriétés riveraines.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles proches de la Marne nécessitent-elles un entretien particulier ?",
          answer:
            "<p>Oui, l'humidité constante des bords de Marne ralentit considérablement le séchage et favorise le développement d'odeurs de moisi si l'extraction n'est pas suffisamment puissante. Nous adaptons notre protocole : <strong>extraction maximale</strong>, aération impérative sur 12 heures, et recommandons un nettoyage annuel pour les copropriétés du Port et du secteur Sous la Lune. Les immeubles du Plateau, moins exposés à l'humidité directe, peuvent espacer les interventions tous les 18 mois. Cette fréquence permet de compenser l'environnement particulièrement humide de Nogent.</p>",
        },
        {
          question:
            "Intervenez-vous dans les petites copropriétés des impasses privées menant aux berges ?",
          answer:
            "<p>Absolument. Nous utilisons des véhicules compacts type L1H1 ou Berlingo spécialement dimensionnés pour accéder aux impasses étroites et sinueuses du Port et des bords de Marne. Le matériel peut également être transporté manuellement avec des tuyaux de 50 mètres si l'accès véhicule est impossible. Nous effectuons systématiquement une visite préalable pour valider la faisabilité technique et organiser l'intervention dans ces configurations particulières typiques des propriétés riveraines nogentaises.</p>",
        },
        {
          question:
            "Les pollens du Bois de Vincennes abîment-ils définitivement les moquettes ?",
          answer:
            "<p>Les <strong>pollens collants du printemps</strong> s'incrustent rapidement dans les fibres et peuvent former des taches jaunâtres permanentes s'ils ne sont pas traités dans les premiers mois. Un nettoyage professionnel en mai-juin, juste après la période de pollinisation, extrait ces particules végétales avant qu'elles ne s'oxydent et ne marquent définitivement les fibres. C'est la période idéale pour les copropriétés du Plateau et du quartier Voisins du Bois, directement exposées à la végétation dense du Bois.</p>",
        },
        {
          question:
            "Comment organisez-vous l'accès dans les rues en pente vers la Marne ?",
          answer:
            "<p>Nous sécurisons systématiquement le matériel dans les véhicules pour éviter toute chute ou glissement lors du stationnement en déclivité sur les rues comme l'Avenue de Joinville. Le déchargement s'effectue méthodiquement avec des cales de roue et des sangles de maintien. Cette rigueur logistique est indispensable dans la topographie nogentaise où la forte déclivité entre le plateau et les bords de Marne impose des précautions particulières absentes dans les communes plates.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Le nettoyage professionnel des parkings nogentais élimine mousses, lichens et taches d'huile tout en gérant l'humidité constante de la Marne qui favorise le développement de dépôts biologiques sur les sols en béton.",

      whyUsBullets: [
        "Maîtrise des parkings en environnement humide : Intervention régulière dans les sous-sols des copropriétés du Port, du Plateau et du centre-ville, avec expertise des problématiques biologiques liées à l'humidité de la Marne.",
        "Protocole anti-mousse renforcé : Traitement curatif et préventif contre mousses et lichens, produits professionnels adaptés aux environnements saturés d'humidité, brossage vigoureux pour éliminer les dépôts biologiques tenaces.",
        "Adaptation aux contraintes topographiques : Sécurisation du matériel dans les rampes en pente, véhicules compacts pour accès depuis rues en déclivité, organisation logistique tenant compte du stationnement complexe du centre-ville.",
      ],

      uniqueIntro:
        "<p>Les parkings souterrains et semi-enterrés des copropriétés nogentaises présentent un encrassement spécifique lié à l'environnement humide des bords de Marne. <strong>L'hygrométrie élevée</strong> génère un développement rapide de mousses vertes et de lichens blancs sur les sols en béton, particulièrement dans les zones mal ventilées ou en rez-de-jardin des propriétés du Port et du secteur Sous la Lune. Les rampes d'accès deviennent glissantes, les angles et pieds de poteaux se couvrent d'une pellicule verdâtre, les siphons se bouchent avec des dépôts organiques. Les taches d'huile se multiplient et s'étendent dans le béton poreux saturé d'humidité.</p>\n<p class=\"mt-4\">Les copropriétaires des immeubles de standing du Plateau ou du centre-ville constatent cette dégradation qui contraste avec la qualité architecturale de leurs résidences. Les marquages au sol se ternissent rapidement sous l'effet combiné de l'humidité et de la pollution atmosphérique, l'odeur de renfermé s'installe dans les parkings fermés, la sensation d'insécurité augmente avec les zones glissantes. Les conseils syndicaux reçoivent des demandes d'intervention, mais la coordination semble complexe dans des copropriétés de prestige où les résidents sont attachés à leur confort et leur sécurité.</p>\n<p class=\"mt-4\">Un décrassage technique structuré résout ces problématiques environnementales. Il élimine les dépôts biologiques favorisés par l'humidité, traite les taches d'huile incrustées et restaure la propreté des sols. L'intervention devient un acte de maintenance préventive indispensable pour préserver la sécurité et le standing des copropriétés nogentaises face à un environnement particulièrement propice à l'encrassement biologique.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic technique et évaluation de l'humidité</h3>\n<p>Le technicien visite le parking pour identifier le type de revêtement (béton brut poreux typique des parkings anciens, peinture de sol, résine dans les parkings rénovés), évaluer le taux d'humidité ambiante et repérer les zones à développement biologique (mousses vertes sur rampes, lichens blancs dans les angles mal ventilés, dépôts organiques autour des siphons). Il vérifie l'état des évacuations souvent obstruées par les débris végétaux et mesure les contraintes d'accès (rampes en pente, hauteur sous plafond, accès depuis rues en déclivité). Cette analyse détermine le choix du traitement : <strong>anti-mousse curatif obligatoire</strong>, dégraissant adapté au béton saturé d'humidité, puissance de brossage nécessaire pour éliminer les lichens tenaces.</p>\n\n<h3>Décrassage par autolaveuse et traitement anti-mousse</h3>\n<p>Le balayage mécanique élimine d'abord les débris végétaux, feuilles mortes et dépôts organiques accumulés. Un traitement anti-mousse professionnel est appliqué sur l'ensemble du parking, avec un temps de contact prolongé (20-30 minutes) pour tuer les mousses et lichens en profondeur. L'autolaveuse brosse ensuite vigoureusement le sol avec un mélange d'eau chaude et de dégraissant, puis aspire immédiatement les eaux sales chargées de dépôts biologiques. Les taches d'huile anciennes, particulièrement tenaces dans le béton poreux saturé d'humidité, reçoivent un traitement localisé intensif avec un détergent spécifique et de la haute pression contrôlée. Les rampes, zones critiques pour la sécurité car naturellement glissantes, sont traitées avec une attention particulière. <strong>Les siphons sont dégagés manuellement</strong> pour garantir l'évacuation efficace.</p>\n\n<h3>Assèchement et recommandations anti-humidité</h3>\n<p><strong>L'extraction puissante limite l'eau résiduelle</strong>, mais le séchage reste plus long dans l'environnement humide nogentais. Le technicien recommande impérativement d'aérer le parking pendant 24 heures après l'intervention pour évacuer l'humidité résiduelle. Pour les parkings des bords de Marne particulièrement exposés, un traitement anti-mousse préventif peut être appliqué après séchage pour ralentir la recolonisation biologique. La fréquence d'intervention doit être adaptée : décrassage annuel pour les parkings très humides du Port et Sous la Lune, tous les 18 mois pour les parkings du Plateau mieux ventilés. Cette maintenance régulière est indispensable pour compenser l'hygrométrie constante de l'environnement nogentais.</p>",

      specificChallenges: [
        "<strong>Développement biologique massif</strong> lié à l'humidité : Les parkings des bords de Marne développent rapidement mousses vertes et lichens blancs sur les sols en béton, créant des zones glissantes dangereuses nécessitant un traitement anti-mousse professionnel.",
        "<strong>Béton poreux saturé d'humidité</strong> : Les sols des parkings anciens absorbent l'humidité ambiante et retiennent profondément les taches d'huile, exigeant un traitement localisé intensif avec dégraissant spécifique et haute pression.",
        "<strong>Siphons obstrués par dépôts organiques</strong> : L'humidité favorise l'accumulation de débris végétaux et de dépôts biologiques dans les évacuations, nécessitant un dégagement manuel systématique avant le lavage pour éviter refoulement et stagnation.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings proches de la Marne développent-ils autant de mousses et de lichens ?",
          answer:
            "<p><strong>L'hygrométrie élevée des bords de Marne</strong> génère un environnement idéal pour le développement biologique rapide. Les sols en béton poreux retiennent l'humidité constante et favorisent la prolifération de mousses vertes sur les rampes et de lichens blancs dans les angles mal ventilés. Ces dépôts rendent les surfaces glissantes et dangereuses. Nous appliquons un traitement anti-mousse curatif professionnel avec temps de contact prolongé, puis un brossage vigoureux pour éliminer les organismes en profondeur. Un traitement préventif après séchage ralentit la recolonisation pendant 12 à 18 mois.</p>",
        },
        {
          question:
            "Votre matériel peut-il accéder aux parkings des propriétés des bords de Marne ?",
          answer:
            "<p>Oui, nous utilisons des véhicules compacts type L1H1 adaptés aux impasses étroites et sinueuses menant aux berges. Pour les accès depuis les rues en forte déclivité vers la Marne, nous sécurisons systématiquement le matériel avec des cales et sangles pour éviter tout glissement. Nous effectuons une visite préalable pour mesurer les contraintes (pente, largeur, virages) et valider la faisabilité technique. Cette adaptation logistique est indispensable dans la topographie nogentaise particulièrement contraignante.</p>",
        },
        {
          question:
            "Les taches d'huile dans le béton humide peuvent-elles être éliminées ?",
          answer:
            "<p>Les taches récentes partent efficacement avec un dégraissant professionnel et de l'eau chaude. Les <strong>taches anciennes</strong>, imprégnées profondément dans le béton poreux saturé d'humidité, s'atténuent fortement mais peuvent laisser une trace résiduelle grisâtre. L'humidité constante aggrave la pénétration des hydrocarbures dans le béton. Nous appliquons plusieurs passes avec un détergent spécifique, un temps de contact prolongé et de la haute pression contrôlée pour obtenir le meilleur résultat possible sans altérer le support. L'amélioration reste très visible même si l'élimination totale n'est pas garantie.</p>",
        },
        {
          question:
            "Quelle fréquence d'intervention recommandez-vous pour un parking nogentais ?",
          answer:
            "<p>Cela dépend fortement de l'exposition à l'humidité. Les parkings des bords de Marne (Port, Sous la Lune) particulièrement exposés nécessitent un décrassage annuel pour maintenir la sécurité et éviter l'accumulation de dépôts biologiques glissants. Les parkings du Plateau ou du centre-ville, mieux ventilés et moins exposés à l'humidité directe, peuvent espacer les interventions tous les 18 mois. Cette fréquence adaptée est indispensable pour compenser l'hygrométrie constante de l'environnement nogentais, bien supérieure aux communes éloignées des cours d'eau.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Le nettoyage professionnel des balcons à Nogent-sur-Marne préserve les matériaux patrimoniaux nobles tout en éliminant mousses, lichens et dépôts végétaux favorisés par l'humidité de la Marne et la proximité du Bois.",

      whyUsBullets: [
        "Expertise des matériaux patrimoniaux nogentais : Intervention régulière sur meulières, pierres de taille, joints à la chaux, corniches Art Déco et ferronneries d'art, avec protocoles basse pression et vapeur préservant l'intégrité architecturale.",
        "Traitement anti-mousse adapté à l'environnement humide : Produits professionnels curatifs et préventifs contre mousses et lichens, méthodes douces pour supports poreux fragiles, application adaptée aux pierres anciennes sensibles à l'humidité de la Marne.",
        "Préservation de la valeur patrimoniale : Méthodes validées pour matériaux nobles (meulières de prestige, ferronneries d'art), respect des joints à la chaux friables, finitions soignées conformes au standing architectural exceptionnel de Nogent.",
      ],

      uniqueIntro:
        "<p>Les propriétaires de maisons de prestige et d'appartements nogentais négligent souvent l'entretien de leurs balcons, découragés par la rapidité avec laquelle les salissures réapparaissent. <strong>L'humidité constante de la Marne</strong> combinée à l'ombre portée de la végétation dense crée un environnement particulièrement propice au développement biologique. Les mousses vertes envahissent les dalles en pierre naturelle, les lichens blancs se fixent sur les murets et garde-corps, les pollens collants du Bois de Vincennes se déposent au printemps sur toutes les surfaces horizontales. Les propriétés du Port et du secteur Sous la Lune sont particulièrement exposées à cette dégradation accélérée.</p>\n<p class=\"mt-4\">Après une saison, les balcons des villas Art Déco et des copropriétés de standing présentent une dégradation visible : pierres de taille couvertes de dépôts verdâtres, joints noircis par l'humidité, garde-corps en ferronnerie d'art ternis, traces d'eau de pluie qui marquent les enduits clairs. Cette dégradation contraste fortement avec l'architecture soignée et le prestige des adresses nogentaises. Les propriétaires hésitent à intervenir : crainte d'endommager les matériaux patrimoniaux fragiles (meulières, joints à la chaux, ferronneries d'art), incertitude sur les méthodes adaptées aux supports nobles, inquiétude face aux dépôts biologiques qui reviennent rapidement dans cet environnement humide.</p>\n<p class=\"mt-4\">Un nettoyage professionnel avec protocole technique adapté résout ces problématiques patrimoniales. Il élimine les dépôts biologiques sans altérer les supports fragiles, applique les traitements anti-mousse préventifs et restitue l'aspect d'origine. L'intervention devient un acte de préservation du patrimoine architectural, indispensable pour maintenir la valeur des biens d'exception nogentais dans un environnement particulièrement exigeant.</p>",

      uniqueDeepDive:
        "<h3>Identification des matériaux patrimoniaux et diagnostic environnemental</h3>\n<p>Le technicien identifie précisément les matériaux présents : pierres de taille des balcons haussmanniens et Art Déco, meulières des villas de prestige, joints à la chaux des maisons anciennes, ferronneries d'art des garde-corps, pierres préfabriquées des copropriétés 1970-2000. Il repère les problématiques spécifiques (mousses vertes sur pierres en exposition nord vers la Marne, lichens blancs sur murets anciens, pollens collants sur surfaces horizontales des propriétés proches du Bois, pollution noire de l'A4 sur balcons du bas de ville) et évalue les contraintes d'accès (rues en pente, impasses étroites des berges). Cette analyse détermine la méthode : <strong>basse pression ou vapeur obligatoire</strong> pour matériaux fragiles, anti-mousse adapté aux supports poreux, traitement préventif pour ralentir la recolonisation.</p>\n\n<h3>Traitement anti-mousse et nettoyage basse pression</h3>\n<p>Pour les supports patrimoniaux (meulières, pierres de taille avec joints à la chaux, corniches Art Déco), un traitement anti-mousse professionnel est appliqué en premier pour tuer les organismes biologiques en profondeur. Après un <strong>temps de contact</strong> de 20 à 30 minutes, le nettoyage s'effectue exclusivement à la vapeur ou à très basse pression (30-50 bars maximum) pour éviter tout déchaussement des pierres ou dégradation des joints friables. Le brossage manuel complète l'action sur les zones sensibles. Pour les pierres préfabriquées des copropriétés plus récentes, une pression modérée (80-100 bars) peut être appliquée. Les ferronneries d'art sont nettoyées manuellement à l'éponge ou au chiffon microfibre pour préserver les détails et les finitions. Les pollens collants du Bois nécessitent un détergent spécifique avant rinçage.</p>\n\n<h3>Traitement préventif et recommandations patrimoniales</h3>\n<p>Après rinçage et séchage (4 à 6 heures selon exposition), un traitement anti-mousse préventif peut être appliqué sur les pierres poreuses pour ralentir la recolonisation biologique pendant 12 à 18 mois. Le technicien conseille une inspection régulière des joints à la chaux qui se dégradent avec l'humidité constante, un balayage après les chutes de pollens du Bois au printemps, et un nettoyage professionnel annuel pour les propriétés des bords de Marne très exposées à l'humidité. Les villas du Plateau peuvent espacer à 18 mois. Cette fréquence adaptée préserve les matériaux patrimoniaux fragiles tout en maintenant l'aspect soigné attendu dans les résidences d'exception nogentaises.</p>",

      specificChallenges: [
        "<strong>Développement biologique massif</strong> lié à l'humidité : Les balcons des propriétés proches de la Marne développent rapidement mousses vertes et lichens blancs sur pierres et murets, nécessitant un traitement anti-mousse renforcé et des méthodes préservant les supports poreux.",
        "Matériaux patrimoniaux fragiles : Les meulières, joints à la chaux et corniches Art Déco ne tolèrent aucune haute pression agressive, imposant des protocoles basse pression ou vapeur et une expertise spécifique pour préserver l'intégrité architecturale.",
        "Pollens collants du Bois de Vincennes : Les propriétés du Plateau et du quartier Voisins du Bois accumulent au printemps des dépôts végétaux tenaces nécessitant un détergent spécifique et un rinçage méticuleux pour éliminer sans endommager les supports nobles.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager les meulières et joints à la chaux de ma villa ?",
          answer:
            "<p>Non, nous n'utilisons jamais de haute pression sur les matériaux patrimoniaux fragiles. Pour les meulières et joints à la chaux typiques des villas nogentaises de prestige, nous travaillons exclusivement à la vapeur ou à très basse pression (30-50 bars maximum) après application d'un anti-mousse qui fait le travail en profondeur. Le brossage manuel complète l'action dans les zones sensibles. Cette méthode douce préserve l'intégrité des pierres et des joints friables tout en éliminant efficacement mousses et lichens. C'est l'expertise indispensable pour le patrimoine architectural exceptionnel de Nogent.</p>",
        },
        {
          question:
            "Mon balcon donnant sur la Marne se couvre de mousses en quelques mois, est-ce normal ?",
          answer:
            "<p>Oui, c'est lié à l'hygrométrie constante des bords de Marne. L'humidité ambiante permanente combinée à l'ombre portée de la végétation crée un environnement idéal pour le développement biologique rapide. Les mousses vertes et lichens blancs colonisent rapidement les pierres poreuses. Nous appliquons un traitement anti-mousse curatif lors du nettoyage, puis un traitement préventif après séchage qui ralentit la recolonisation pendant 12 à 18 mois. Un nettoyage professionnel annuel est recommandé pour les propriétés du Port et du secteur Sous la Lune particulièrement exposées à l'humidité directe.</p>",
        },
        {
          question:
            "Les pollens du Bois de Vincennes peuvent-ils tacher définitivement mes pierres de taille ?",
          answer:
            "<p>Les <strong>pollens collants du printemps</strong> s'incrustent dans les pores des pierres naturelles et peuvent créer des taches jaunâtres persistantes s'ils ne sont pas traités rapidement. Un nettoyage professionnel en mai-juin, juste après la période de pollinisation, élimine ces dépôts végétaux avant qu'ils ne s'oxydent et ne marquent définitivement la pierre. C'est particulièrement important pour les propriétés du Plateau et du quartier Voisins du Bois directement exposées à la végétation dense du Bois. Le traitement préventif appliqué après nettoyage forme également une barrière qui limite l'incrustation des pollens l'année suivante.</p>",
        },
        {
          question:
            "Comment préservez-vous les ferronneries d'art de mes garde-corps Art Déco ?",
          answer:
            "<p>Les <strong>ferronneries d'art</strong> typiques des villas Art Déco nogentaises sont nettoyées exclusivement à la main avec des éponges douces ou des chiffons microfibre, jamais à la pression. Nous utilisons un détergent neutre qui élimine les dépôts sans agresser les finitions (peinture, vernis, patine). Les détails architecturaux (volutes, motifs floraux, ornements) sont brossés délicatement pour préserver leur intégrité. Si la ferronnerie présente des traces de corrosion liées à l'humidité constante, nous le signalons pour qu'un traitement antirouille complémentaire puisse être envisagé. Cette attention particulière est indispensable pour préserver la valeur patrimoniale des éléments architecturaux d'exception nogentais.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par des fientes de pigeons à Nogent-sur-Marne éliminent les risques sanitaires selon un protocole strict tout en préservant les matériaux patrimoniaux fragiles typiques des résidences de prestige.",

      whyUsBullets: [
        "Double expertise sanitaire et patrimoniale : Protocole EPI complet pour sécurité sanitaire combiné à maîtrise des méthodes basse pression et vapeur pour préserver meulières, joints à la chaux, corniches Art Déco et ferronneries d'art.",
        "Désinfection compatible avec matériaux anciens : Sélection rigoureuse de produits virucides/bactéricides homologués à pH neutre, compatibles avec pierres anciennes, joints friables et ferronneries corrodées, préservant l'intégrité patrimoniale après désinfection.",
        "Préservation de la valeur architecturale : Humidification préalable obligatoire, ramassage méthodique, nettoyage adapté à chaque support noble, proposition de solutions anti-pigeons discrètes respectant l'esthétique Art Déco et l'architecture de prestige nogentaise.",
      ],

      uniqueIntro:
        "<p>Les propriétaires nogentais découvrent parfois avec stupeur l'ampleur de la contamination de leur balcon après une absence prolongée ou une période d'inutilisation. Les pigeons, attirés par l'architecture Art Déco avec ses corniches travaillées, les avancées de toit des villas de prestige et la végétation dense du Bois de Vincennes, colonisent rapidement les balcons tranquilles des propriétés du Plateau et des bords de Marne. Les résidences secondaires, nombreuses à Nogent en raison de la qualité de vie exceptionnelle, présentent des espaces extérieurs particulièrement vulnérables. Les fientes s'accumulent en couches épaisses sur les pierres de taille, les meulières anciennes et les garde-corps en ferronnerie d'art, formant une croûte durcie qui dégage une odeur insupportable.</p>\n<p class=\"mt-4\">Sans intervention rapide, la situation se dégrade dangereusement sur le plan sanitaire et patrimonial. L'acidité des fientes corrode les ferronneries d'art anciennes, attaque les joints à la chaux friables des meulières, crée des taches brunâtres permanentes sur les pierres de taille claires, et érode les corniches Art Déco travaillées. L'humidité constante de la Marne aggrave la dégradation en maintenant les fientes humides plus longtemps, accélérant leur action corrosive. Les fientes sèches se transforment en poussière volatile qui pénètre l'intérieur par les portes-fenêtres, contaminant les espaces de vie. Les occupants redoutent les risques sanitaires (cryptococcose, histoplasmose, salmonellose), certains développent des symptômes respiratoires sans comprendre l'origine.</p>\n<p class=\"mt-4\">Les tentatives de nettoyage domestique aggravent doublement le problème : balayer à sec disperse les poussières pathogènes, utiliser une haute pression classique endommage irrémédiablement les matériaux patrimoniaux fragiles (meulières, joints à la chaux, ferronneries). Ce type de contamination nécessite un protocole professionnel strict doublement exigeant : <strong>équipements de protection intégrale</strong> pour la sécurité sanitaire, méthodes basse pression et vapeur pour préserver les matériaux nobles, désinfection homologuée compatible avec les supports anciens. Seule cette double expertise garantit la récupération d'un balcon propre, désinfecté et préservé dans sa valeur patrimoniale exceptionnelle.</p>",

      uniqueDeepDive:
        "<h3>Protection intégrale et confinement du chantier patrimonial</h3>\n<p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de protection étanches. Ces équipements de protection individuelle sont obligatoires face aux pathogènes présents dans les fientes (salmonelles, cryptocoques, histoplasma, chlamydia psittaci). Des bâches étanches protègent les portes-fenêtres, vérandas, jardins d'hiver et murs intérieurs, créant un confinement strict qui empêche toute dispersion vers l'intérieur de la propriété de prestige. Les fientes sèches sont ensuite humidifiées abondamment au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules contaminées lors du ramassage manuel. Cette humidification préalable est particulièrement critique dans l'environnement nogentais venteux des bords de Marne.</p>\n\n<h3>Ramassage méthodique et nettoyage adapté aux matériaux nobles</h3>\n<p>Les fientes, nids, plumes et débris organiques sont ramassés manuellement zone par zone à l'aide de pelles et racloirs, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour déchets contaminés. Cette phase s'effectue méthodiquement pour éviter toute dispersion. Les surfaces sont ensuite nettoyées selon le type de support : nettoyage à la vapeur ou très basse pression (30-50 bars) avec produit neutre (pH 7) pour les meulières et joints à la chaux afin de ne pas aggraver les dommages acides causés par les fientes, méthode douce manuelle pour les ferronneries d'art anciennes déjà corrodées, pression modérée pour les pierres préfabriquées plus résistantes. Le brossage manuel élimine la couche organique résiduelle avant rinçage contrôlé, <strong>point absolument critique</strong> pour préserver l'intégrité des matériaux patrimoniaux fragiles.</p>\n\n<h3>Désinfection virucide compatible avec le patrimoine</h3>\n<p>Un produit désinfectant virucide et bactéricide homologué, rigoureusement sélectionné pour sa compatibilité avec les matériaux anciens (pH neutre, pas d'agents chlorés agressifs), est appliqué sur l'ensemble du balcon : sol, garde-corps, angles, murs. Le temps de contact réglementaire (10 à 15 minutes) est strictement respecté pour garantir la neutralisation des agents pathogènes. Après rinçage final à basse pression pour protéger les supports fragiles, le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité. Le technicien conseille d'inspecter régulièrement les corniches Art Déco et avancées architecturales, et peut proposer la pose de solutions anti-pigeons (pics discrets, filets) adaptées à l'architecture de prestige pour prévenir une recolonisation qui endommagerait de nouveau les matériaux patrimoniaux coûteux et irremplaçables.</p>",

      specificChallenges: [
        "Architecture Art Déco propice à la nidification : Les corniches travaillées, avancées de toit et éléments décoratifs des villas de prestige du Plateau offrent de nombreux points de nidification, accélérant la colonisation des balcons exposés.",
        "Corrosion accélérée des matériaux patrimoniaux : L'acidité des fientes attaque rapidement les ferronneries d'art anciennes, érode les joints à la chaux friables, crée des taches permanentes sur pierres de taille, nécessitant une intervention urgente pour limiter les dégâts irréversibles.",
        "Humidité de la Marne aggravant la dégradation : L'environnement humide maintient les fientes humides plus longtemps, accélérant leur action corrosive sur les matériaux poreux et les métaux anciens, rendant les dommages patrimoniaux plus rapides et plus graves.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un danger sanitaire réel dans une villa de prestige ?",
          answer:
            "<p>Oui, la qualité architecturale de la propriété ne change rien aux risques sanitaires. Les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer infections respiratoires graves, mycoses pulmonaires ou troubles gastro-intestinaux. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées dans les espaces confinés des villas et appartements. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires, quelle que soit la valeur de la propriété.</p>",
        },
        {
          question:
            "Le nettoyage peut-il endommager les meulières anciennes et les ferronneries d'art de ma villa ?",
          answer:
            "<p>Non, si le protocole est rigoureusement adapté aux matériaux patrimoniaux. Nous n'utilisons jamais de haute pression classique sur les supports fragiles. Pour les meulières et joints à la chaux, nous travaillons exclusivement à la vapeur ou très basse pression (30-50 bars) après traitement anti-mousse. Les ferronneries d'art sont nettoyées manuellement pour préserver les détails et finitions déjà fragilisés par la corrosion acide des fientes. Les produits désinfectants sont sélectionnés pour leur pH neutre, évitant toute aggravation des dommages. Cette double expertise sanitaire et patrimoniale est absolument indispensable pour les résidences d'exception nogentaises.</p>",
        },
        {
          question:
            "Les fientes ont-elles déjà causé des dégâts irréversibles sur les matériaux anciens de mon balcon ?",
          answer:
            "<p>Cela dépend de l'ancienneté de la contamination. Sur les ferronneries d'art, l'acidité provoque une corrosion profonde qui altère définitivement les finitions anciennes et nécessite souvent une restauration par un ferronnier spécialisé après nettoyage. Sur les meulières et joints à la chaux, elle érode la surface, déchausse les pierres et fragilise structurellement les joints. Sur les pierres de taille claires, elle crée des taches brunâtres qui pénètrent profondément et peuvent rester visibles même après traitement professionnel. L'humidité constante de la Marne aggrave tous ces processus. Une intervention rapide (premières semaines) limite considérablement les dégâts, mais les contaminations anciennes (plusieurs mois) laissent souvent des dommages permanents nécessitant une restauration patrimoniale complémentaire coûteuse.</p>",
        },
        {
          question:
            "Comment éviter que les pigeons ne reviennent endommager les éléments architecturaux de ma propriété ?",
          answer:
            "<p>Nous proposons la pose de solutions anti-pigeons adaptées à l'architecture Art Déco et aux villas de prestige : pics discrets en acier inoxydable sur les corniches travaillées, filets transparents quasi-invisibles pour les loggias, répulsifs visuels pour les avancées de toit. Ces dispositifs sont installés en respectant l'intégrité esthétique des éléments architecturaux et peuvent être retirés sans laisser de traces si nécessaire. L'inspection régulière des points d'accès (corniches, éléments décoratifs, structures ornementales) et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive et de nouveaux dégâts patrimoniaux coûteux et parfois irréversibles sur les matériaux nobles et anciens.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Nogent-sur-Marne élimine acariens et allergènes favorisés par l'humidité de la Marne, restaurant l'hygiène des intérieurs de prestige.",

      whyUsBullets: [
        "Connaissance de l'environnement humide nogentais : Intervention régulière dans les villas et appartements du Port, du Plateau et du centre-ville, avec maîtrise des problématiques d'acariens favorisées par l'humidité constante de la Marne.",
        "Protocole anti-acariens renforcé pour environnement humide : Injection-extraction à eau chaude (65-70°C) tuant les acariens, extraction maximale critique pour limiter l'humidité résiduelle, produits hypoallergéniques sans danger pour foyers de prestige.",
        "Adaptation aux contraintes d'accès : Véhicules compacts pour impasses étroites des bords de Marne, intervention en journée ou week-end, organisation respectant le standing et la discrétion attendus dans les propriétés d'exception.",
      ],

      uniqueIntro:
        "<p>Dans les villas et appartements nogentais, les textiles d'ameublement accumulent silencieusement des salissures invisibles aggravées par l'environnement particulier des bords de Marne. L'humidité constante de la rivière pénètre les intérieurs par les fenêtres et portes-fenêtres, créant un environnement propice à la prolifération des acariens dans les matelas, canapés et tapis. Ces organismes microscopiques se nourrissent de squames humaines et déposent leurs déjections allergisantes qui s'accumulent au fil des mois. L'hygrométrie élevée ralentit l'évaporation naturelle de l'humidité des textiles, maintenant un taux d'humidité idéal pour leur multiplication rapide.</p>\n<p class=\"mt-4\">Les familles du Plateau ou des bords de Marne constatent des symptômes sans en identifier la cause environnementale : rhinites matinales persistantes aggravées par l'humidité ambiante, éternuements répétés au réveil, irritations cutanées inexpliquées, asthme qui s'intensifie pendant les périodes humides. Les enfants développent des réactions allergiques, les personnes sensibles respirent difficilement la nuit dans les chambres donnant sur la Marne. Les pollens collants du Bois de Vincennes pénètrent au printemps par les fenêtres ouvertes et s'incrustent dans les fibres, ajoutant une charge allergénique supplémentaire. Les taches visibles s'ajoutent au problème sanitaire invisible : traces de vie familiale, auréoles d'humidité dans les propriétés proches de l'eau, odeurs de renfermé dans les textiles qui ne sèchent jamais complètement.</p>\n<p class=\"mt-4\">Un nettoyage professionnel à domicile change radicalement la situation sanitaire. L'injection-extraction à eau chaude tue les acariens qui prolifèrent dans l'humidité nogentaise, extrait leurs déjections et les allergènes accumulés (pollens du Bois, particules organiques). Les taches disparaissent, les odeurs d'humidité s'estompent, les fibres retrouvent leur souplesse. L'intervention devient un acte de prévention sanitaire indispensable, particulièrement important dans l'environnement humide des bords de Marne où la qualité de l'air intérieur est directement menacée par les conditions extérieures favorisant la prolifération biologique.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic textile et identification des contaminations environnementales</h3>\n<p>Le technicien examine chaque élément à traiter : type de tissu (coton, lin, velours, laine naturelle dans les intérieurs de prestige), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles (auréoles d'humidité, traces de vie familiale) et interroge les occupants sur les problèmes rencontrés : allergies respiratoires aggravées, proximité de la Marne, exposition aux pollens du Bois, sensation d'humidité persistante dans les textiles. Cette analyse permet de sélectionner le protocole adapté : <strong>température élevée (65-70°C) obligatoire</strong> pour tuer les acariens qui prolifèrent dans l'humidité, extraction maximale critique pour éliminer l'eau résiduelle dans cet environnement déjà saturé, détergent spécifique pour pollens collants si la propriété est proche du Bois.</p>\n\n<h3>Pré-traitement ciblé et injection-extraction thermique</h3>\n<p>Les taches tenaces et zones d'humidité reçoivent un pré-traitement spécifique : détachant enzymatique pour matières organiques, neutralisant d'odeurs pour les zones imprégnées par l'humidité ambiante, traitement anti-acariens préalable pour les textiles très contaminés. Après un temps de pose, la machine d'injection-extraction pulvérise un mélange d'eau chaude (65-70°C) et de détergent hypoallergénique au cœur des fibres. Cette température élevée est indispensable pour tuer les acariens adultes, larves et œufs qui prolifèrent dans l'environnement humide nogentais. <strong>L'aspiration immédiate et puissante retire l'eau sale</strong> chargée de particules, d'acariens morts, de leurs déjections allergisantes et des pollens du Bois incrustés. Le technicien effectue plusieurs passages sur les zones très sollicitées et sur les textiles des propriétés proches de la Marne où la contamination biologique est maximale.</p>\n\n<h3>Extraction maximale et conseils anti-humidité</h3>\n<p><strong>L'extraction puissante est absolument critique</strong> pour limiter l'humidité résiduelle dans les rembourrages, point essentiel dans l'environnement nogentais déjà saturé d'humidité. Le séchage complet intervient sous 6 à 10 heures selon la ventilation et l'exposition de la propriété. Le technicien conseille impérativement d'aérer la pièce en ouvrant largement les fenêtres pour évacuer l'humidité, d'orienter un ventilateur vers les textiles traités et d'attendre le séchage total avant réutilisation. Pour limiter la recontamination dans l'environnement humide nogentais, il recommande un aspirateur hebdomadaire avec filtre HEPA capturant acariens et pollens, l'utilisation de housses anti-acariens sur les matelas (indispensable pour les propriétés des bords de Marne), la fermeture des fenêtres pendant les pics de pollens du Bois au printemps, et un nettoyage professionnel annuel pour les foyers exposés à l'humidité ou avec personnes allergiques.</p>",

      specificChallenges: [
        "Prolifération d'acariens favorisée par l'humidité : L'environnement humide constant des bords de Marne accélère la multiplication des acariens dans les matelas et canapés, nécessitant un traitement thermique rigoureux et une extraction maximale pour éliminer durablement ces allergènes.",
        "Humidité résiduelle dans les textiles : Les propriétés proches de la Marne présentent des textiles qui ne sèchent jamais complètement naturellement, favorisant le développement d'odeurs de renfermé et la recontamination rapide par les acariens si l'extraction n'est pas suffisamment puissante.",
        "Pollens collants du Bois de Vincennes : Les résidences du Plateau et du quartier Voisins du Bois accumulent au printemps des pollens allergisants qui s'incrustent dans les canapés et tapis, aggravant les symptômes respiratoires et nécessitant une extraction renforcée.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il les acariens qui prolifèrent dans l'humidité des bords de Marne ?",
          answer:
            "<p>Oui, l'injection-extraction à eau chaude (65-70°C) tue les acariens adultes, larves et œufs par choc thermique. Cette température est particulièrement importante à Nogent où l'humidité constante de la Marne favorise leur prolifération rapide dans les matelas et canapés. L'aspiration puissante retire ensuite les acariens morts et leurs déjections allergisantes. Les familles des bords de Marne (Port, Sous la Lune) constatent généralement une amélioration notable des symptômes (rhinites, éternuements, irritations) sous 48 à 72h. Pour maintenir ce résultat dans l'environnement humide nogentais, nous recommandons impérativement un nettoyage annuel et l'utilisation de housses anti-acariens sur les matelas.</p>",
        },
        {
          question:
            "Mon matelas sent l'humidité malgré les aérations régulières, est-ce récupérable ?",
          answer:
            "<p>Oui, l'odeur d'humidité provient des acariens, moisissures et bactéries qui se développent dans les rembourrages saturés par l'hygrométrie ambiante des bords de Marne. L'injection-extraction à eau chaude élimine ces organismes et leurs déchets odorants. Le neutralisant d'odeurs appliqué en pré-traitement complète l'action. L'extraction maximale retire l'humidité accumulée dans les fibres. Le résultat est immédiatement perceptible après séchage complet. Pour éviter le retour rapide des odeurs dans l'environnement humide nogentais, aérez quotidiennement la chambre, utilisez une housse anti-acariens et renouvelez le nettoyage annuellement.</p>",
        },
        {
          question:
            "Combien de temps avant de pouvoir réutiliser mon canapé dans une propriété proche de la Marne ?",
          answer:
            "<p>Le séchage complet intervient sous 6 à 10 heures à Nogent, durée supérieure aux zones urbaines sèches en raison de l'humidité ambiante constante. Vous pouvez vous asseoir légèrement sur les accoudoirs dès 3 à 4h, mais évitez de vous installer complètement avant séchage total pour ne pas écraser les fibres humides. Aérez impérativement la pièce en ouvrant largement les fenêtres, orientez un ventilateur vers le canapé. Pour les propriétés du Port ou Sous la Lune particulièrement exposées à l'humidité, privilégiez une intervention par temps sec et venteux pour optimiser le séchage.</p>",
        },
        {
          question:
            "Le nettoyage élimine-t-il aussi les pollens du Bois de Vincennes incrustés dans mes textiles ?",
          answer:
            "<p>Oui, l'injection-extraction avec détergent spécifique dissout et extrait les pollens collants qui se sont incrustés dans les fibres des canapés et tapis près des fenêtres. Ces pollens, particulièrement abondants au printemps dans les propriétés du Plateau et du quartier Voisins du Bois, sont une source importante d'allergies respiratoires. L'aspiration puissante retire ces particules allergisantes ainsi que les acariens. Pour limiter la recontamination rapide, nous recommandons de fermer les fenêtres pendant les pics de pollinisation (avril-mai) et d'effectuer un nettoyage professionnel juste après cette période pour éliminer les dépôts avant qu'ils ne s'incrustent définitivement.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage et remise en état de terrasses à Nogent-sur-Marne : élimination des mousses, traces noires et salissures extérieures pour sublimer les sols et retrouver un espace extérieur net et élégant.",
      whyUsBullets: [
        "Intervention dans tous les quartiers nogentais : bords de Marne, Beauté Baltard, Centre, Plaisance, Viselets, zones pavillonnaires et résidentielles.",
        "Expertise des terrasses de standing : sols extérieurs exposés à l’humidité, à la végétation et à un usage régulier.",
        "Prestation minutieuse et valorisante : protection du mobilier, respect des façades et nettoyage précis pour un rendu visuel haut de gamme.",
      ],
      uniqueIntro:
        '<p><strong>Nogent-sur-Marne</strong>, commune prisée du Val-de-Marne, est reconnue pour son cadre résidentiel de qualité, ses villas, ses maisons de caractère et ses résidences élégantes, notamment le long des <strong>bords de Marne</strong>. Les terrasses y constituent un véritable prolongement de l’espace de vie.</p>\n\n<p class="mt-4">La proximité de la Marne, les jardins arborés et les zones ombragées favorisent toutefois l’apparition de <strong>mousses, algues, traces noires</strong> et dépôts organiques sur les sols extérieurs. Même dans un environnement soigné, ces salissures altèrent rapidement l’esthétique des terrasses.</p>\n\n<p class="mt-4">À Nogent-sur-Marne, les terrasses sont réalisées en <strong>dalles béton</strong>, <strong>carrelage extérieur</strong>, <strong>pierre naturelle ou reconstituée</strong>, <strong>bois</strong> ou <strong>bois composite</strong>. Chaque matériau requiert une approche spécifique pour un nettoyage efficace et un rendu visuel harmonieux.</p>',
      uniqueDeepDive:
        "<h3>Préparation soignée de la terrasse</h3>\n<p>Le mobilier, les pots et les éléments décoratifs sont déplacés ou protégés. Les abords immédiats — façades, garde-corps, menuiseries — sont sécurisés afin d’assurer une intervention propre et maîtrisée, y compris sur des terrasses ouvertes sur le jardin ou les berges.</p>\n\n<h3>Nettoyage ciblé et approfondi du revêtement</h3>\n<p>La méthode est choisie selon le sol : solution performante pour dalles béton et carrelages extérieurs, protocole spécifique pour pierre, bois ou composite. Un brossage mécanique précis permet de décoller les salissures incrustées, biofilms et zones noircies. Le rinçage est réalisé de façon contrôlée pour un résultat net et homogène.</p>\n\n<h3>Mise en valeur esthétique et confort d’usage</h3>\n<p>Une attention particulière est portée aux zones de passage et aux surfaces les plus exposées à l’humidité. Le nettoyage améliore sensiblement la clarté du sol et l’aspect général de la terrasse, renforçant le confort d’utilisation et la valorisation de l’espace extérieur.</p>",
      specificChallenges: [
        "Terrasses situées en bord de Marne : humidité constante favorisant mousses et traces verdâtres.",
        "Jardins arborés et haies denses : dépôts organiques et encrassement accéléré des sols.",
        "Dalles béton et carrelages extérieurs ternis par le temps : zones foncées et aspect irrégulier.",
        "Terrasses partiellement couvertes ou orientées nord : séchage lent et surfaces glissantes.",
        "Bois et composite exposés aux intempéries : perte d’éclat et salissures incrustées.",
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi les terrasses de Nogent-sur-Marne se salissent-elles malgré un cadre résidentiel soigné ?",
          answer:
            "<p>La <strong>proximité de la Marne</strong>, l’ombre des jardins et l’humidité ambiante favorisent l’apparition de <strong>mousses, algues et traces noires</strong>. Sans nettoyage ciblé, ces salissures s’installent progressivement, même dans les quartiers les plus entretenus.</p>",
        },
        {
          question:
            "Le nettoyage permet-il de redonner de l’éclat à une terrasse ancienne ou ternie ?",
          answer:
            "<p>Oui. Un nettoyage en profondeur permet d’<strong>éclaircir les surfaces</strong>, d’uniformiser l’aspect du sol et de retrouver une terrasse visuellement plus <strong>élégante et agréable</strong> à l’usage.</p>",
        },
        {
          question:
            "Intervenez-vous sur les terrasses de maisons de standing et de résidences ?",
          answer:
            "<p>Oui. Nous intervenons sur les terrasses de <strong>maisons individuelles, villas et résidences</strong>, avec une organisation adaptée aux contraintes et aux attentes de chaque site.</p>",
        },
        {
          question:
            "Une terrasse très encrassée peut-elle retrouver un bel aspect sans travaux ?",
          answer:
            "<p>Oui. Même très encrassée, une terrasse peut retrouver un aspect <strong>nettement plus propre et valorisé</strong> grâce à un nettoyage méthodique, sans remplacement du revêtement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "À Nogent-sur-Marne, intervention précise dans des appartements et maisons souvent anciens : parquets, pièces d’eau et vitrages traités avec soin, en particulier avant vente ou état des lieux.",

      whyUsBullets: [
        "Approche “standing” : protection des sols (parquet massif, pierre naturelle), finitions soignées (plinthes, menuiseries, robinetterie, vitres) et contrôle visuel pièce par pièce.",
        "Organisation adaptée au terrain : centre-ville saturé + sens uniques, pentes des coteaux, et accès résidences privées (digicodes, gardiens).",
        "Gestion des nuisances urbaines typiques : traces de pollution sur vitrages/balcons (A4 / viaduc) et poussières de flux autour des gares RER A/RER E.",
      ],

      uniqueIntro:
        '<p>À Nogent-sur-Marne, le nettoyage “classique” ne suffit pas : la ville combine un <strong>niveau d’exigence élevé</strong> et un terrain très concret à gérer. Entre le Village (centre) dense, les <strong>coteaux</strong> qui imposent des montées et des accès parfois serrés, et les bords de Marne plus ouverts, l’intervention doit être préparée comme un chantier court : ordre des tâches, protection, finitions.</p>\n<p class="mt-4">Le bâti est majoritairement <strong>ancien de standing</strong> (pierre, immeubles bourgeois, meulières), avec des résidences privées où les digicodes, interphones et parfois les gardiens sont la norme. Les sols y sont souvent plus sensibles : parquet massif, carrelage haut de gamme, pierre naturelle. L’objectif est donc double : remettre propre, mais surtout <strong>ne rien marquer</strong> (rayures, traces de produit, reprises visibles sur les vitres).</p>\n<p class="mt-4">Enfin, Nogent a ses marqueurs : le <strong>Pavillon Baltard</strong> et le <strong>port de plaisance</strong> structurent des zones de flux, tandis que le <strong>viaduc de Nogent</strong> (A4) et les grands axes amènent une pollution qui se voit vite sur balcons et vitrages. C’est typiquement une ville où la différence se fait sur les détails : finitions, transparence des vitres, et rendu “net” dans la cuisine/salle d’eau.</p>',

      uniqueDeepDive:
        "<h3>Le Village / Baltard — finitions, accès serrés et stationnement</h3>\n<p>Le centre nogentais est dense : sens uniques, stationnement tendu, accès parfois étroits dans l’ancien. Pour un fin de bail ou une remise en état, on privilégie un déroulé rapide et lisible : cuisine/salle d’eau en premier, surfaces, puis sols, avant de verrouiller les finitions (plinthes, portes, interrupteurs, inox/robinetterie). C’est aussi la zone où l’organisation “déchargement court + stationnement” fait gagner le plus de temps.</p>\n\n<h3>Plaisance / Viselets — maisons et parquet massif</h3>\n<p>Dans ces secteurs résidentiels, on trouve plus de pavillons, de meulières et de grands volumes. La priorité est la protection : chaussures propres, patins si nécessaire, et une gestion des sols en plusieurs passes (aspiration, lavage adapté, séchage/contrôle) pour éviter toute trace. Les demandes typiques sont le grand ménage avant emménagement, ou l’après-travaux léger avec beaucoup de poussière fine.</p>\n\n<h3>Le Port / bords de Marne — vitrages, humidité et balcons</h3>\n<p>Près de l’eau, les vitrages et extérieurs marquent davantage : film, traces minérales, salissures ramenées par les allées et venues du week-end. On traite les vitres accessibles et les garde-corps avec une méthode qui évite les reprises, puis on sécurise les zones de passage (entrée, séjour, cuisine). C’est un secteur où le rendu “clair” est immédiatement visible — et très apprécié.</p>",

      specificChallenges: [
        "Stationnement très compliqué en centre-ville et autour des gares : nécessité d’anticiper l’arrivée et le déchargement.",
        "Coteaux de Nogent : pentes marquées qui compliquent le transport de matériel et la logistique sur maisons en hauteur.",
        "Bâti ancien de standing : escaliers étroits et absence d’ascenseur dans certains immeubles du centre.",
        "Résidences privées : digicodes/badges/interphones et gardiens fréquents (organisation d’accès à prévoir).",
        "Pollution A4 / viaduc de Nogent : suie et dépôts sur vitrages/balcons, surtout côté axes.",
        "Matériaux sensibles : parquet massif, pierre naturelle, carrelage haut de gamme → risque de traces/rayures si méthode inadaptée.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous à Nogent-sur-Marne (94130) pour un nettoyage de fin de bail / état des lieux ?",
          answer:
            "<p>Oui. On cible un rendu “état des lieux” : cuisine et salle d’eau (dégraissage, calcaire, joints), sols, vitres accessibles, puis finitions visibles (plinthes, portes, interrupteurs). À Nogent, on anticipe surtout le stationnement en centre et l’accès en résidence privée (digicode, gardien).</p>",
        },
        {
          question:
            "Pouvez-vous nettoyer après des travaux dans une meulière (quartier Plaisance) ?",
          answer:
            "<p>Oui. Après travaux, la difficulté est la poussière fine (ponçage, plâtre). On procède par étapes : dépoussiérage minutieux (surfaces/menuiseries), puis sols, puis finitions. Sur parquet massif, on adapte produits et dosage pour éviter toute trace et protéger le bois.</p>",
        },
        {
          question:
            "Faites-vous les vitres et garde-corps, notamment vers le Port et les bords de Marne ?",
          answer:
            "<p>Oui, sur les vitrages accessibles. Dans ces zones, on rencontre plus de film et de traces minérales : on traite vitres et garde-corps avec une méthode sans reprises, puis on contrôle le rendu à la lumière pour un résultat net.</p>",
        },
        {
          question:
            "Le centre est difficile pour se garer : comment gérez-vous la logistique ?",
          answer:
            "<p>On planifie l’arrivée et le déchargement (créneau, parking souterrain si nécessaire), puis on optimise l’ordre des pièces pour limiter les allers-retours. C’est souvent ce qui fait la différence sur la ponctualité et le temps réellement passé à nettoyer.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
