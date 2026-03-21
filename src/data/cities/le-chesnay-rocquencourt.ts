import type { City } from "~/types/geo";

const city: City = {
  name: "Le Chesnay-Rocquencourt",
  slug: "le-chesnay-rocquencourt",
  postalCodes: ["78150"],

  department: {
    name: "Yvelines",
    code: "78",
    slug: "yvelines",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Le Chesnay-Rocquencourt pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Du secteur Parly 2 aux résidences de Rocquencourt, une équipe locale habituée aux copropriétés et pavillons de la commune intervient pour vous fournir un service de qualité.",

  // hubIntro : HTML autorisé
  hubIntro: "<p>Commune nouvelle abritant le centre commercial Parly 2 et l'Arboretum de Versailles-Chèvreloup, Le Chesnay-Rocquencourt concentre un parc résidentiel dense où la propreté des <strong>espaces communs</strong> demande une organisation rigoureuse. Klinova s'implante localement pour répondre à ces besoins.</p>\n<p class=\"mt-4\">Halls d'immeubles, parkings souterrains, balcons exposés aux poussières des axes routiers : chaque intervention s'adapte aux contraintes du bâti. Coordination avec syndics et gardiens, reporting disponible sur demande, planning ajusté aux horaires des résidents.</p>\n<ul>\n  <li><strong>Proximité terrain :</strong> Équipe basée en Île-de-France, connaissance des accès digicodes et des contraintes de stationnement propres aux résidences du secteur.</li>\n  <li><strong>Méthodes adaptées :</strong> Matériel dimensionné selon les surfaces, protocoles ajustés aux revêtements présents dans les copropriétés et maisons individuelles.</li>\n  <li><strong>Suivi structuré :</strong> Interlocuteur dédié, planification coordonnée avec les gestionnaires, compte-rendu d'intervention transmis si souhaité.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> des grands ensembles : sols béton marqués par le trafic quotidien.",
    "Balcons exposés aux <strong>poussières des axes A13 et RD 307</strong> : encrassement accéléré.",
    "Résidences avec digicodes et badges : coordination accès indispensable avant intervention.",
    "Halls de copropriétés à <strong>fort passage</strong> : moquettes et sols durs sollicités en continu.",
    "Proximité de l'Arboretum : <strong>dépôts végétaux</strong> sur terrasses et balcons exposés.",
  ],

  // Texte brut uniquement
  districts: ["Parly 2", "Le Chesnay (centre)", "Rocquencourt", "Glatigny", "Nouvelle France"],
  nearbyCities: [
        "versailles",
        "sevres",
        "saint-cloud",
        "rueil-malmaison",
        "suresnes",
        "boulogne-billancourt",
        "nanterre",
        "clamart",
        "issy-les-moulineaux",
        "puteaux"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Le Chesnay-Rocquencourt",
    "Centre commercial Parly 2",
    "Arboretum de Versailles-Chèvreloup",
    "Centre Hospitalier de Versailles (site André Mignot)",
    "Autoroute A13",
    "Le Chesnay (centre)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous les accès aux résidences sécurisées par digicode ?",
      answer: "<p>Avant chaque intervention à Le Chesnay-Rocquencourt, nous récupérons les <strong>codes d'accès ou badges</strong> auprès du syndic ou du gardien. Le planning est transmis en amont pour éviter toute attente. En cas de modification de code, une mise à jour rapide est organisée avec le gestionnaire.</p>",
    },
    {
      question: "Quel délai pour obtenir un devis après une demande ?",
      answer: "<p>Un premier retour intervient sous 24 à 48 heures. Si une visite technique s'avère nécessaire — notamment pour les parkings souterrains ou les grandes copropriétés — elle est programmée dans la semaine. Le devis détaille surfaces, fréquence proposée et <strong>modalités d'accès</strong> identifiées.</p>",
    },
    {
      question: "Le stationnement est compliqué près de Parly 2, comment vous organisez-vous ?",
      answer: "<p>Nos équipes repèrent les possibilités de stationnement avant l'intervention : places visiteurs, créneaux horaires moins chargés, accords ponctuels avec le syndic. Le matériel est conditionné pour limiter les allers-retours. En zone dense, nous privilégions les <strong>horaires décalés</strong> pour réduire la gêne.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur une dégradation imprévue ?",
      answer: "<p>Oui, nous traitons les demandes urgentes selon disponibilité. Un premier échange permet d'évaluer la situation — fuite, salissure accidentelle, dégât après travaux. L'intervention est alors planifiée dans les meilleurs délais, avec <strong>confirmation rapide</strong> au donneur d'ordre.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // Services demandés — inclure uniquement ceux présents dans la requête
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes par injection-extraction, avec séchage maîtrisé pour une remise en service rapide adaptée aux contraintes d'accès de votre copropriété ou domicile.",
      whyUsBullets: [
        "Connaissance des résidences du secteur Parly 2 et des contraintes d'accès en copropriété.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées.",
        "Interventions planifiées selon les créneaux validés, acheminement anticipé malgré le stationnement limité.",
      ],
      uniqueIntro: "<p>Dans le contexte résidentiel autour de Parly 2, les moquettes des halls et parties communes encaissent un passage soutenu. Les fibres retiennent poussières fines, traces de semelles et résidus organiques qui s'accumulent semaine après semaine. Un aspirateur classique ne suffit plus à déloger <strong>ce qui s'est incrusté</strong> en profondeur dans la trame textile.</p>\n<p class=\"mt-4\">Les petits collectifs et grands ensembles de Le Chesnay-Rocquencourt présentent souvent des dalles textiles ou moquettes bouclées en circulation. Ces revêtements perdent leur aspect d'origine : teinte ternie, zones de trafic marquées, odeurs persistantes dans les cages d'escalier. Un entretien en profondeur redonne une propreté visible et améliore le confort des résidents comme des visiteurs.</p>\n<p class=\"mt-4\">Le stationnement compliqué et les accès par digicode ou badge imposent une organisation rigoureuse. Chaque intervention est préparée en amont : créneaux validés avec le syndic ou l'occupant, acheminement du matériel anticipé, protections installées avant le moindre traitement.</p>",
      uniqueDeepDive: "<h3>1. Zones de circulation intense</h3>\n<p>Les halls d'entrée et paliers concentrent l'essentiel des salissures. Après aspiration préalable, le traitement par injection-extraction cible ces surfaces à fort passage. Les fibres reçoivent plusieurs passes pour déloger les particules enfoncées dans la trame.</p>\n\n<h3>2. Escaliers et angles</h3>\n<p>Les marches et nez de marche accumulent frottements et traces noires. Le détachage ciblé traite les zones marquées avant l'extraction. Les plinthes et bas de murs sont protégés pour éviter toute projection.</p>\n\n<h3>3. Espaces secondaires et séchage</h3>\n<p>Couloirs d'étage et recoins reçoivent un <strong>traitement adapté</strong> à leur niveau d'encrassement. L'extraction maximale limite le temps de séchage, généralement compris entre 4 et 8 heures selon l'épaisseur du revêtement et la ventilation. Des consignes de non-piétinement sont transmises pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "Halls à <strong>fort passage</strong> autour de Parly 2 : fibres encrassées en profondeur.",
        "Dalles textiles en copropriété : taches anciennes incrustées dans la trame bouclée.",
        "Accès par digicode : coordination nécessaire pour acheminer le matériel.",
        "Stationnement compliqué : organisation en amont pour limiter les allers-retours.",
        "Séchage à anticiper dans les cages d'escalier peu ventilées.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les résidences autour de Parly 2, comment organisez-vous l'intervention sur une moquette avec halls et escaliers étroits ?",
          answer: "<p>Nous validons le créneau avec le <strong>syndic ou le gardien</strong>, puis acheminons le matériel en plusieurs rotations si nécessaire. Les protections sont posées sur les plinthes et angles avant de traiter chaque niveau. L'intervention se déroule par zones pour libérer progressivement les accès aux résidents.</p>",
        },
        {
          question:
            "Dans les petits collectifs de Le Chesnay-Rocquencourt, traitez-vous les taches anciennes sur moquette de circulation ?",
          answer: "<p>Les <strong>taches incrustées</strong> reçoivent un détachage ciblé avant l'injection-extraction. Selon leur nature (tanin, graisse, résidus organiques), nous adaptons le produit et le temps de contact. Les fibres retrouvent une teinte plus homogène, même si certaines marques très anciennes peuvent rester atténuées sans disparaître totalement.</p>",
        },
        {
          question:
            "Avec les digicodes fréquents à Le Chesnay-Rocquencourt, quelle méthode de nettoyage choisissez-vous pour une moquette de copropriété ?",
          answer: "<p>L'injection-extraction reste la méthode principale : elle désincruste en profondeur sans tremper excessivement le revêtement. Pour les accès sécurisés, nous récupérons les codes ou badges en amont. Le matériel est acheminé en une seule montée quand l'ascenseur le permet, sinon par étapes.</p>",
        },
        {
          question:
            "Quand le stationnement est compliqué à Le Chesnay-Rocquencourt, comment gérez-vous le matériel pour nettoyer une moquette ?",
          answer: "<p>Nous repérons les possibilités de stationnement temporaire ou de dépose-minute avant l'intervention. Le matériel est préparé pour limiter les trajets entre le véhicule et l'immeuble. Si nécessaire, un second intervenant assure la rotation pendant que le premier commence le traitement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains avec autolaveuse, traitement des taches d'huile et gestion rigoureuse des eaux usées pour un sol propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès propres aux résidences et copropriétés du Chesnay-Rocquencourt.",
        "Autolaveuse professionnelle et gestion stricte des eaux de lavage conformément aux règles en vigueur.",
        "Rotation véhicules planifiée, balisage sécurisé et créneaux négociés avec le gestionnaire.",
      ],
      uniqueIntro: "<p>Les traces de graisse et les coulures d'huile s'accumulent sur les sols des parkings souterrains, particulièrement dans les secteurs à forte densité résidentielle et commerciale comme celui de l'A13. Ces dépôts rendent les surfaces glissantes, dégradent l'aspect général et compliquent l'entretien courant. Les rampes d'accès concentrent souvent les salissures les plus tenaces, aggravées par le passage répété des véhicules.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier transforme ces espaces : sol dégraissé, meilleure adhérence, image soignée pour les résidents ou visiteurs. Dans les <strong>sous-sols et parkings souterrains</strong> fréquents au Chesnay-Rocquencourt, cette remise en état limite aussi les plaintes liées aux odeurs ou à la poussière accumulée sur les blocs lumineux.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec les gestionnaires pour tenir compte du stationnement compliqué et des flux locaux. Balisage, rotation des véhicules, créneaux adaptés : chaque chantier fait l'objet d'un plan précis avant démarrage.</p>",
      uniqueDeepDive: "<h3>1. Encrassement et huile incrustée</h3>\n<p>Les dépôts graisseux s'infiltrent dans le béton brut ou peint et résistent au balayage classique. Un diagnostic préalable identifie le revêtement, l'état des évacuations et les zones critiques.</p>\n<p class=\"mt-4\">Le balayage mécanique prépare la surface avant application d'un dégraissant adapté aux taches anciennes.</p>\n\n<h3>2. Risque de glissance sur rampes</h3>\n<p>Les rampes concentrent humidité et résidus gras, augmentant le risque de dérapage. L'autolaveuse effectue plusieurs passes avec aspiration immédiate pour éliminer l'eau chargée.</p>\n<p class=\"mt-4\">La gestion des eaux respecte les évacuations existantes, sans rejet vers la voirie.</p>\n\n<h3>3. Zones négligées et finitions</h3>\n<p>Angles morts, pieds de murs et rigoles accumulent poussières et débris. Ces secteurs reçoivent un traitement ciblé à la haute pression si nécessaire.</p>\n<p class=\"mt-4\">Le dépoussiérage des blocs lumineux et tuyauteries complète l'intervention sur demande. Un compte-rendu avec recommandations de fréquence est transmis au syndic ou gestionnaire.</p>",
      specificChallenges: [
        "Parkings souterrains fréquents avec ventilation limitée et sol béton poreux.",
        "Taches d'huile anciennes incrustées nécessitant un dégraissage renforcé.",
        "Stationnement compliqué imposant une coordination stricte pour la rotation des véhicules.",
        "Rampes d'accès exposées aux coulures et à l'humidité, demandant un traitement antidérapant.",
        "Flux de circulation dense autour des pôles commerciaux limitant les créneaux d'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un parking souterrain du Chesnay-Rocquencourt, comment traitez-vous les taches d'huile anciennes sans bloquer l'accès ?",
          answer: "<p>Les taches incrustées reçoivent un dégraissant professionnel avant passage de l'autolaveuse. L'intervention se déroule par zones, avec rotation des véhicules pour maintenir une partie du parking accessible. Le balisage guide les usagers vers les places libres pendant le chantier.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage dans les sous-sols des copropriétés locales ?",
          answer: "<p>L'autolaveuse aspire l'eau chargée au fur et à mesure du passage. Les évacuations existantes sont vérifiées avant démarrage pour éviter tout refoulement. Aucun rejet n'est effectué vers la voirie ou les espaces communs extérieurs.</p>",
        },
        {
          question:
            "Autour de Parly 2, comment organisez-vous le balisage pour limiter la gêne des résidents ?",
          answer: "<p>Le plan d'intervention prévoit une signalétique visible dès l'entrée du parking. Les zones en cours de traitement sont isolées par cônes et rubalise. Les créneaux sont choisis en concertation avec le syndic pour éviter les heures de forte affluence.</p>",
        },
        {
          question:
            "Avec les flux de circulation liés à l'A13 et aux commerces, comment planifiez-vous une fermeture partielle du parking ?",
          answer: "<p>La fermeture s'organise par niveaux ou par travées successives. Les résidents sont prévenus en amont par affichage. L'équipe adapte le rythme d'avancement pour libérer rapidement les zones traitées et réduire la durée de restriction.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon ou loggia, avec traitement adapté au support, protection des voisins contre les coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Balcons exposés aux retombées de l'A13 et aux pollens de l'Arboretum : nous adaptons le traitement à chaque environnement.",
        "Pression ajustée selon le support, produits compatibles carrelage grès et béton peint, brossage ciblé sur les joints.",
        "Organisation pensée pour les copropriétés denses : montée du matériel, gestion des eaux, intervention sans gêne pour les voisins.",
      ],
      uniqueIntro: "<p>Comment préserver un balcon agréable quand la proximité de l'A13 dépose régulièrement un voile grisâtre sur le sol et les garde-corps ? Dans les résidences de <strong>Parly 2</strong> comme dans les immeubles du centre du Chesnay, les dépôts s'accumulent entre deux averses : poussières de circulation, pollens, traces vertes dans les joints. Le carrelage perd son éclat, la loggia devient un espace qu'on évite d'utiliser.</p>\n<p class=\"mt-4\">Un balcon propre change la perception de l'appartement. Les petits collectifs et résidences récentes de Le Chesnay-Rocquencourt disposent souvent de balcons ouverts ou de loggias avec des surfaces en grès cérame ou béton peint. Ces supports encrassés donnent une impression de négligence, même quand l'intérieur est impeccable. Après intervention, l'espace retrouve sa fonction : un prolongement du séjour, utilisable sans hésitation.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte de l'accès en étage, du stationnement du matériel et de la gestion des eaux de rinçage. Un diagnostic préalable permet d'adapter la méthode au revêtement et d'anticiper les protections nécessaires.</p>",
      uniqueDeepDive: "<h3>1. Sol et joints assainis</h3>\n<p>Le carrelage retrouve sa teinte d'origine, les joints sont débarrassés des dépôts verts et des traces noires. Pour y parvenir, nous commençons par évacuer les débris (feuilles, terre, gravillons), puis appliquons un produit adapté au support. Le brossage manuel ou mécanique déloge les salissures incrustées avant un rinçage maîtrisé.</p>\n\n<h3>2. Garde-corps et vitrages traités</h3>\n<p>Les montants métalliques ou vitrés perdent leur aspect terne. Nous les nettoyons avec des produits non agressifs, en protégeant les menuiseries adjacentes. Les murs mitoyens accessibles sont également traités si nécessaire.</p>\n\n<h3>3. Aucune coulure chez les voisins</h3>\n<p>L'eau de rinçage est contrôlée pour éviter tout écoulement sur les balcons inférieurs ou la façade. Nous utilisons une pression adaptée aux joints fragiles et installons des protections si la configuration l'exige. Après séchage, vous récupérez un espace prêt à l'usage, avec nos conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts gris liés à la proximité de l'A13 : traitement régulier nécessaire sur les balcons exposés.",
        "Joints de carrelage colonisés par les mousses dans les loggias peu ventilées.",
        "Accès par badge et étages élevés dans les résidences de Parly 2 : logistique à anticiper.",
        "Gestion des coulures indispensable en copropriété dense pour éviter les plaintes.",
        "Supports variés (grès cérame, béton peint) nécessitant des produits et pressions différenciés.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons ouverts des résidences de Parly 2, comment évitez-vous d'abîmer le carrelage et les joints pendant le nettoyage ?",
          answer: "<p>Nous réglons la pression en fonction du support et de l'état des joints. Sur les carrelages grès cérame fréquents dans ces résidences, un brossage préalable et un produit adapté permettent de déloger les salissures sans fragiliser les finitions. Les joints anciens ou poreux sont traités avec précaution.</p>",
        },
        {
          question:
            "Dans les copropriétés du Chesnay-Rocquencourt, comment gérez-vous l'eau et les coulures lors du nettoyage d'un balcon ?",
          answer: "<p>Nous installons des protections au niveau des évacuations et contrôlons le débit de rinçage. L'objectif est d'éviter tout écoulement sur les balcons inférieurs ou la façade. En cas de configuration délicate, nous utilisons des bâches et travaillons par zones pour limiter les volumes d'eau.</p>",
        },
        {
          question:
            "Au Chesnay-Rocquencourt, adaptez-vous la méthode entre une loggia et un balcon ouvert selon le support ?",
          answer: "<p>Oui. Une loggia fermée retient davantage l'humidité et favorise les mousses dans les angles. Nous insistons sur ces zones avec un traitement anti-dépôts verts. Sur un balcon ouvert, l'exposition aux poussières de circulation demande un rinçage plus appuyé et une attention particulière aux garde-corps.</p>",
        },
        {
          question:
            "Dans les immeubles du Chesnay-Rocquencourt, comment intervenez-vous sur un balcon en étage élevé avec accès par badge ?",
          answer: "<p>Nous coordonnons l'accès avec vous ou le gardien pour récupérer les badges nécessaires. Le matériel est monté en une seule fois pour limiter les allers-retours. L'intervention est planifiée à un horaire compatible avec la vie de l'immeuble, en évitant les créneaux de forte affluence.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et pose de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones arborées du Chesnay-Rocquencourt et des configurations de balcons exposés aux volatiles.",
        "Protocole complet avec EPI adaptés, produits homologués et respect strict des temps de contact pour une désinfection efficace.",
        "Organisation coordonnée avec les occupants et voisins pour limiter la gêne et gérer l'évacuation des déchets contaminés.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons situés à proximité de l'Arboretum de Versailles-Chèvreloup accumulent des déjections qui s'incrustent dans les joints et les rebords. L'odeur devient tenace, le linge étendu absorbe les particules, et l'envie d'utiliser cet espace extérieur disparaît progressivement. Les pigeons reviennent aux mêmes endroits, attirés par les corniches et les garde-corps qui leur offrent des points de repos.</p>\n<p class=\"mt-4\">Dans les immeubles résidentiels du Chesnay-Rocquencourt, les loggias et balcons présentent souvent des surfaces en carrelage grès ou béton peint. Ces matériaux poreux retiennent les salissures et favorisent le développement de moisissures si le nettoyage tarde. Un traitement adapté redonne un aspect propre, supprime les odeurs et limite les risques liés aux agents pathogènes présents dans les fientes.</p>\n<p class=\"mt-4\">Notre intervention prend en compte les contraintes d'accès en copropriété : coordination avec le gardien ou les voisins, protection des espaces mitoyens, et gestion des eaux de rinçage pour éviter toute nuisance.</p>",
      uniqueDeepDive: "<h3>1. Sécurisation et préparation</h3>\n<p>L'intervenant enfile combinaison jetable, masque FFP2, lunettes et gants avant d'accéder au balcon. Un bâchage protège l'intérieur du logement et les surfaces voisines. Les fientes sèches sont humidifiées pour neutraliser les poussières et éviter la dispersion de particules contaminées dans l'air.</p>\n\n<h3>2. Retrait et désinfection</h3>\n<p>Les déjections ramollies sont collectées manuellement puis conditionnées dans des sacs étanches. Le sol, le garde-corps et les vitrages reçoivent ensuite un produit virucide et bactéricide. Le temps de contact est respecté pour éliminer les agents pathogènes. Un rinçage soigneux complète cette phase.</p>\n\n<h3>3. Finition et prévention</h3>\n<p>Après séchage, nous vérifions l'état des supports et proposons, si nécessaire, la pose de pics ou de filets sur les corniches et rebords exposés. Les sacs de déchets sont évacués de manière sécurisée. Un délai d'aération est conseillé avant de réutiliser le balcon.</p>",
      specificChallenges: [
        "Proximité de l'Arboretum : les arbres attirent les pigeons qui nichent sur les corniches voisines.",
        "Loggias semi-fermées où les fientes s'accumulent sans être lessivées par la pluie.",
        "Carrelage grès poreux retenant les salissures et nécessitant une désinfection en profondeur.",
        "Coordination d'accès en copropriété avec digicodes et stationnement limité pour le matériel.",
        "Odeurs persistantes si le traitement tarde, rendant le balcon inutilisable plusieurs semaines.",
      ],
      faqAdditions: [
        {
          question:
            "Près de l'Arboretum de Versailles-Chèvreloup, sous quel délai intervenez-vous pour des fientes de pigeons sur balcon ?",
          answer: "<p>Nous programmons généralement l'intervention sous 48 à 72 heures selon la disponibilité et l'urgence signalée. Les zones proches de l'Arboretum connaissent une pression régulière des volatiles, ce qui justifie une réactivité adaptée pour éviter l'incrustation des déjections dans les supports.</p>",
        },
        {
          question:
            "Dans les immeubles résidentiels du Chesnay-Rocquencourt, quel protocole EPI utilisez-vous pour nettoyer des fientes de pigeons ?",
          answer: "<p>Nos intervenants portent systématiquement masque FFP2, lunettes de protection, gants et combinaison jetable. Ce protocole limite l'exposition aux agents pathogènes présents dans les fientes et garantit une intervention sécurisée, y compris dans les loggias peu ventilées des copropriétés.</p>",
        },
        {
          question:
            "Après les fientes de pigeons dans une loggia du Chesnay-Rocquencourt, quelle désinfection appliquez-vous pour sécuriser le support ?",
          answer: "<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué après le retrait des déjections. Le temps de contact est respecté avant rinçage. Cette étape élimine les agents pathogènes et neutralise les odeurs résiduelles sur le carrelage ou le béton peint.</p>",
        },
        {
          question:
            "Autour des zones arborées du Chesnay-Rocquencourt, comment traitez-vous les corniches et rebords exposés aux fientes ?",
          answer: "<p>Après le nettoyage et la désinfection, nous proposons la pose de pics anti-pigeons ou de filets de protection sur les rebords et corniches. Ces dispositifs dissuadent les volatiles de revenir se poser, réduisant ainsi la fréquence des souillures sur votre balcon.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Vos canapés, tapis et matelas retrouvent fraîcheur et propreté grâce à une extraction en profondeur des taches et allergènes, avec séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des résidences du Chesnay-Rocquencourt et de leurs contraintes d'accès en zone dense.",
        "Détachage ciblé selon la nature du textile et séchage contrôlé pour préserver les fibres.",
        "Intervention planifiée avec gestion du stationnement et acheminement discret du matériel.",
      ],
      uniqueIntro: "<p>Dans les logements familiaux proches de <strong>Parly 2</strong>, les textiles du quotidien accumulent rapidement traces d'usage et salissures invisibles. Canapés sollicités par les enfants, tapis de salon piétinés chaque jour, matelas exposés à l'humidité corporelle : ces surfaces absorbent poussières, acariens et résidus alimentaires sans qu'on s'en aperçoive. Les taches de café ou de jus finissent par s'incruster, et l'odeur de renfermé s'installe progressivement.</p>\n<p class=\"mt-4\">Un détachage en profondeur change concrètement le confort de vie. Les fibres retrouvent leur souplesse, les couleurs se ravivent, et l'air ambiant paraît plus sain. Dans les <strong>appartements et maisons</strong> du Chesnay-Rocquencourt, où le mobilier textile reste central dans l'aménagement intérieur, cette remise en état évite de remplacer prématurément un canapé encore structurellement bon ou un tapis de qualité.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des <strong>accès par badge et du stationnement parfois contraint</strong>. Le matériel est acheminé avec discrétion, et chaque étape est planifiée pour limiter la gêne au strict nécessaire.</p>",
      uniqueDeepDive: "<h3>1. Taches incrustées et fibres encrassées</h3>\n<p>Les salissures anciennes résistent au simple aspirateur. Un diagnostic textile identifie la nature du tissu — coton, synthétique, velours — et le type de tache présente. Un pré-traitement enzymatique cible les zones marquées avant toute action mécanique.</p>\n<p class=\"mt-4\">Un test discret sur une partie cachée vérifie la tenue des couleurs sur les textiles fragiles.</p>\n\n<h3>2. Extraction des résidus en profondeur</h3>\n<p>L'injection-extraction déloge poussières, acariens et particules piégées dans les fibres. La pression et la température s'adaptent selon l'épaisseur et la sensibilité du textile. Cette méthode retire ce qu'un simple shampoing laisse en place.</p>\n\n<h3>3. Séchage et remise en service</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon la saison et l'aération du logement, comptez quelques heures avant de réutiliser le mobilier. Des conseils d'entretien accompagnent l'intervention pour espacer les prochains nettoyages.</p>",
      specificChallenges: [
        "Taches alimentaires sur canapés familiaux : café, jus, traces grasses incrustées dans les fibres.",
        "Acariens et poussières accumulés dans les matelas des chambres, source d'inconfort respiratoire.",
        "Accès par digicode et badge nécessitant une coordination préalable avec les occupants.",
        "Stationnement limité autour de Parly 2 compliquant l'acheminement du matériel.",
        "Textiles variés — velours, coton, synthétique — demandant une adaptation de la méthode.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un logement familial proche de Parly 2, comment réduisez-vous acariens et allergènes sur canapé ou tapis ?",
          answer: "<p>L'injection-extraction déloge les acariens et leurs déjections piégés dans les fibres. La méthode retire également poussières fines et résidus organiques invisibles. Après séchage, l'air ambiant paraît plus sain et le textile retrouve une fraîcheur perceptible au toucher comme à l'odeur.</p>",
        },
        {
          question:
            "Dans les appartements et maisons du Chesnay-Rocquencourt, comment adaptez-vous la méthode au textile du canapé ou du tapis ?",
          answer: "<p>Un diagnostic préalable identifie le tissu : coton, laine, synthétique ou velours. La pression d'injection et la température de l'eau s'ajustent en conséquence. Sur les textiles fragiles, un test discret sur zone cachée précède l'intervention pour vérifier la tenue des couleurs.</p>",
        },
        {
          question:
            "Au Chesnay-Rocquencourt, que faut-il préparer avant le nettoyage d'un canapé quand l'accès au logement est contraint ?",
          answer: "<p>Dégagez l'espace autour du mobilier à traiter et prévoyez l'ouverture du digicode ou badge à l'heure convenue. Si possible, libérez une place de stationnement proche de l'entrée. Ces préparatifs permettent une intervention fluide et limitent le temps de présence dans le logement.</p>",
        },
        {
          question:
            "Avec le stationnement compliqué du Chesnay-Rocquencourt, comment organisez-vous le nettoyage d'un tapis à domicile ?",
          answer: "<p>L'intervention est planifiée en tenant compte des horaires où le stationnement reste accessible. Le matériel compact facilite l'acheminement même sur plusieurs étages. En cas de difficulté persistante, nous convenons ensemble d'un créneau adapté aux contraintes de votre résidence.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des dépôts verts pour retrouver un espace extérieur agréable et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses exposées aux zones arborées du secteur, où mousses et lichens s'installent rapidement.",
        "Choix du traitement selon le revêtement : carrelage, dalles sur plots, pierre naturelle ou béton.",
        "Organisation du chantier avec protection du mobilier, gestion de l'eau et accès planifié.",
      ],
      uniqueIntro: "<p>Les dépôts verts et les traces noirâtres s'installent progressivement sur les terrasses exposées à proximité d'espaces arborés, notamment dans le secteur de l'Arboretum. L'humidité retenue par les feuilles mortes et l'ombre partielle favorisent l'apparition de mousses qui rendent la surface glissante. Ces salissures s'accrochent aux joints et aux interstices, rendant le balayage insuffisant.</p>\n<p class=\"mt-4\">Sur les terrasses en carrelage ou dalles sur plots, en maison ou en logement de rez-de-chaussée, le revêtement perd son aspect d'origine. Les zones de passage se ternissent plus vite, et les coins ombragés accumulent une couche verdâtre difficile à déloger. Sans intervention adaptée, la dégradation s'étend et complique l'entretien courant.</p>\n<p class=\"mt-4\">Un traitement structuré permet de retrouver une surface propre et praticable. La circulation locale et les contraintes d'accès imposent de planifier le transport des équipements et des produits. L'intervention prend en compte le type de revêtement et l'environnement immédiat pour un résultat durable.</p>",
      uniqueDeepDive: "<h3>1. Surface principale</h3>\n<p>Le mobilier extérieur et les jardinières sont déplacés ou protégés. Les gros dépôts — feuilles, terre, débris — sont retirés manuellement avant tout traitement humide. Un produit adapté au support est appliqué sur l'ensemble de la dalle, puis brossé pour décoller mousses et salissures incrustées.</p>\n\n<h3>2. Périphérie et éléments annexes</h3>\n<p>Les garde-corps, murets et escaliers extérieurs reçoivent le même traitement. Les joints et les margelles sont nettoyés au détail. La pression est ajustée selon la porosité du matériau pour éviter toute détérioration.</p>\n\n<h3>3. Évacuation et finition</h3>\n<p>L'eau de rinçage est dirigée vers les points d'écoulement existants. Les plantations proches sont protégées pendant cette phase. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts. Le mobilier est remis en place après séchage.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par la proximité de l'Arboretum et des espaces verts.",
        "Dalles sur plots nécessitant un nettoyage doux pour préserver les joints.",
        "Dépôts de poussières fines liés à la circulation sur l'A13.",
        "Terrasses en rez-de-chaussée avec accès restreint pour le matériel.",
        "Gestion de l'évacuation d'eau sans gêne pour les plantations environnantes.",
      ],
      faqAdditions: [
        {
          question:
            "Sur une terrasse en carrelage ou dalles sur plots à Le Chesnay-Rocquencourt, comment évitez-vous d'abîmer le support ?",
          answer: "<p>Le choix de la pression et du produit dépend du revêtement. Sur les dalles sur plots, nous privilégions un brossage mécanique doux et une pression modérée pour ne pas déloger les joints ni fragiliser les supports poreux. Un test préalable est réalisé sur une zone discrète.</p>",
        },
        {
          question:
            "Près de l'Arboretum de Versailles-Chèvreloup, comment traitez-vous mousses et lichens sur une terrasse ?",
          answer: "<p>Les zones arborées favorisent l'humidité et l'ombre, propices aux dépôts verts. Nous appliquons un produit anti-mousse adapté, laissé en contact avant brossage. Le rinçage contrôlé élimine les résidus sans disperser les spores sur les surfaces voisines.</p>",
        },
        {
          question:
            "Dans les maisons et appartements du Chesnay-Rocquencourt, quel traitement anti-mousse utilisez-vous pour une terrasse ?",
          answer: "<p>Nous sélectionnons un produit préventif compatible avec le matériau : formule douce pour pierre naturelle, traitement plus actif pour béton ou carrelage. L'application en fin d'intervention ralentit la réapparition des mousses pendant plusieurs mois.</p>",
        },
        {
          question:
            "Sur les terrasses du Chesnay-Rocquencourt, préférez-vous un nettoyage doux plutôt que la haute pression selon le revêtement ?",
          answer: "<p>La haute pression convient aux surfaces dures et non poreuses. Pour les dalles sur plots, le bois ou la pierre naturelle, un nettoyage basse pression combiné à un brossage manuel évite les éclats et préserve l'étanchéité des joints.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol au plafond, avec coordination adaptée aux contraintes d'accès et respect des délais convenus pour la remise des clés.",
      whyUsBullets: [
        "Connaissance des résidences du Chesnay-Rocquencourt et des contraintes propres aux logements en rotation locative.",
        "Polyvalence sur tous types de surfaces : parquets anciens, carrelages, faïences, revêtements souples.",
        "Organisation calée sur vos délais : coordination agence, récupération de clés, intervention en journée ou décalée.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable avant un état des lieux quand le planning est serré et que les artisans viennent de partir ? Au Chesnay-Rocquencourt, les secteurs résidentiels du centre comme de Parly 2 concentrent des logements où les rotations locatives et les fins de chantier imposent des délais courts. Entre la poussière de plâtre, les traces de peinture et les sols à remettre en état, le temps manque souvent pour tout traiter correctement.</p>\n<p class=\"mt-4\">Un logement propre facilite la signature du bail, évite les litiges sur le dépôt de garantie et permet une entrée sereine pour le nouvel occupant. Dans les petits collectifs et résidences récentes de la commune, les attentes sont élevées : sols brillants, sanitaires désinfectés, vitres transparentes. Un nettoyage bâclé se voit immédiatement et peut retarder une transaction.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des digicodes, du stationnement difficile et de la coordination avec les agences ou propriétaires. Chaque étape est planifiée pour respecter la date de remise des clés, sans improvisation.</p>",
      uniqueDeepDive: "<h3>1. Logement prêt à habiter</h3>\n<p>L'objectif est de remettre un appartement ou une maison dans un état permettant une entrée immédiate ou une validation d'état des lieux sans réserve. Cela implique des surfaces propres, des sanitaires désinfectés et des vitres intérieures nettoyées.</p>\n\n<h3>2. Traitement méthodique par zones</h3>\n<p>Le dépoussiérage commence par les points hauts : plafonds, luminaires, dessus de placards. Les pièces d'eau reçoivent un traitement spécifique avec détartrage et désinfection. Les sols sont aspirés puis lavés selon leur nature : parquet, carrelage ou revêtement souple.</p>\n<p class=\"mt-4\">En cas de fin de chantier, les traces de peinture, résidus de colle et poussières de plâtre sont traitées avant le nettoyage général.</p>\n\n<h3>3. Contrôle et coordination finale</h3>\n<p>Un passage de vérification couvre les interrupteurs, poignées, plinthes et intérieurs de placards. L'aération du logement est assurée avant la remise des clés. Si un accès par digicode ou badge est nécessaire, la récupération et restitution sont organisées en amont avec le donneur d'ordre.</p>",
      specificChallenges: [
        "Stationnement compliqué autour de Parly 2 et dans les secteurs denses : logistique matériel à anticiper.",
        "Accès par digicode ou badge fréquent dans les résidences récentes : coordination préalable indispensable.",
        "Fins de chantier avec résidus de plâtre et traces de peinture nécessitant un traitement avant nettoyage.",
        "Délais serrés pour les états des lieux : intervention planifiée au jour près.",
        "Surfaces variées dans un même logement : parquet, carrelage, faïence, chaque support demande une méthode adaptée.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les secteurs résidentiels du Chesnay-Rocquencourt, sous quel délai pouvez-vous intervenir pour un nettoyage d'appartement urgent ?",
          answer: "<p>Nous organisons les interventions urgentes sous 24 à 48 heures selon la disponibilité. Pour les états des lieux ou remises de clés pressantes, nous ajustons le planning en fonction de vos contraintes horaires et des accès au logement.</p>",
        },
        {
          question:
            "Après des travaux dans un appartement au Chesnay-Rocquencourt, comment distinguez-vous un nettoyage standard d'une fin de chantier ?",
          answer: "<p>Une fin de chantier inclut le retrait des résidus de plâtre, traces de peinture et poussières fines incrustées. Le nettoyage standard porte sur l'entretien courant. Nous adaptons le protocole et le temps d'intervention selon l'état constaté lors du diagnostic initial.</p>",
        },
        {
          question:
            "Au Chesnay-Rocquencourt, comment traitez-vous un appartement après dégât des eaux avant la remise en location ?",
          answer: "<p>Après un dégât des eaux, nous intervenons une fois le logement asséché. Le nettoyage couvre les traces d'humidité, les dépôts sur les surfaces et la désinfection des zones touchées. Si des moisissures sont apparues, un traitement spécifique est appliqué avant la remise en état générale.</p>",
        },
        {
          question:
            "Dans les immeubles du Chesnay-Rocquencourt, comment organisez-vous le nettoyage d'un logement avec digicode ?",
          answer: "<p>Nous récupérons les codes ou badges en amont auprès du propriétaire, de l'agence ou du gardien. Le stationnement du véhicule et l'acheminement du matériel sont planifiés pour éviter les allers-retours. La restitution des accès est confirmée à la fin de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;