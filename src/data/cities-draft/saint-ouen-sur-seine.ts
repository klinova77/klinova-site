import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Ouen-sur-Seine",
  slug: "saint-ouen-sur-seine",
  postalCodes: ["93400"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Saint-Ouen-sur-Seine. Du secteur des Docks aux immeubles du Vieux-Saint-Ouen, une équipe locale adapte ses interventions aux contraintes de chaque bâtiment.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Desservie par les lignes 13 et 14 du métro ainsi que le RER C, Saint-Ouen-sur-Seine concentre des flux importants entre résidences, bureaux et commerces. Klinova s'appuie sur cette connaissance du terrain pour coordonner les interventions avec les gestionnaires locaux.</p>\n<p class=\"mt-4\">Nos équipes prennent en charge la propreté des halls, sous-sols et extérieurs selon un planning adapté aux contraintes d'accès. <strong>Un interlocuteur dédié assure le suivi</strong> et transmet les comptes rendus après chaque passage.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Présence régulière sur Plaine Commune, délais d'intervention courts pour les demandes urgentes ou les remises en état ponctuelles.</li>\n  <li><strong>Adaptation au bâti :</strong> Protocoles ajustés selon la configuration — halls ouverts, digicodes, parkings en sous-sol ou résidences récentes des Docks.</li>\n  <li><strong>Coordination gestionnaires :</strong> Échanges directs avec syndics et bailleurs pour planifier les passages sans gêner les occupants ni les visiteurs du Marché aux Puces.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Flux piétons importants</strong> autour du Marché aux Puces les jours d'ouverture.",
    "Stationnement contraint dans les quartiers denses du <strong>Vieux-Saint-Ouen</strong>.",
    "Halls avec digicodes et badges fréquents dans les <strong>résidences récentes des Docks</strong>.",
    "Parkings souterrains en béton brut exposés aux remontées d'humidité.",
    "Balcons orientés Seine soumis aux <strong>dépôts de pollution urbaine</strong>.",
    "Coordination nécessaire avec les événements du <strong>Stade Bauer</strong> pour certains immeubles proches.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville-Cordon",
    "Les Docks",
    "Vieux-Saint-Ouen",
    "Debain-Michelet-Bauer",
    "Garibaldi-Les-Puces",
    "Arago-Pasteur-Zola-Hugo",
  ],
  nearbyCities: [
    "Paris",
    "Clichy",
    "L'Île-Saint-Denis",
    "Saint-Denis",
    "Villeneuve-la-Garenne",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Saint-Ouen-sur-Seine",
    "Marché aux Puces",
    "Stade Bauer",
    "Grand Parc des Docks",
    "Gare de Saint-Ouen",
    "Les Docks",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les copropriétés proches du Marché aux Puces ?",
      answer: "<p>Les jours de marché génèrent un <strong>flux piéton important</strong> dans le quartier Garibaldi-Les-Puces. Nous planifions les passages en dehors des pics d'affluence, généralement en début de semaine ou tôt le matin. Le matériel reste discret et les accès sont libérés rapidement pour ne pas gêner les résidents.</p>",
    },
    {
      question: "Quel délai prévoir pour une première intervention à Saint-Ouen-sur-Seine ?",
      answer: "<p>Notre présence régulière sur le territoire de <strong>Plaine Commune</strong> permet une prise en charge sous 48 à 72 heures pour les demandes courantes. En cas d'urgence — dégât des eaux, souillure accidentelle — nous pouvons intervenir le jour même selon disponibilité des équipes.</p>",
    },
    {
      question:
        "Comment gérez-vous les accès dans les résidences avec digicode ou badge ?",
      answer: "<p>Avant chaque intervention, nous récupérons les <strong>codes ou badges nécessaires</strong> auprès du syndic ou du gardien. Les équipes notent les horaires d'ouverture des halls et s'adaptent aux contraintes de chaque résidence, notamment dans les immeubles récents du secteur des Docks.</p>",
    },
    {
      question: "Proposez-vous un suivi après les interventions ?",
      answer: "<p>Un compte rendu est transmis au gestionnaire après chaque passage : <strong>zones traitées, observations terrain, points d'attention</strong> pour la suite. Ce reporting facilite le suivi dans la durée et permet d'ajuster la fréquence si nécessaire.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride:
    "Commune desservie par les lignes 13 et 14 du métro et le RER C et siège du Marché aux Puces et du Stade Bauer.",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes par injection-extraction, avec séchage maîtrisé pour une remise en service rapide selon le type de fibres.",
      whyUsBullets: [
        "Connaissance des typologies de bâti à Saint-Ouen-sur-Seine, des immeubles anciens aux résidences du secteur des Docks.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux moquettes bouclées épaisses.",
        "Interventions planifiées en horaires décalés pour limiter la gêne dans les halls et espaces de travail.",
      ],
      uniqueIntro: "<p>Les traces grises le long des circulations, les auréoles de café près des postes de travail, les fibres tassées aux entrées : dans le secteur des Docks, ces marques d'usure apparaissent sur les dalles textiles des bureaux comme sur les moquettes bouclées des halls d'immeubles. <strong>Le passage répété fixe poussières et résidus</strong> en profondeur, au-delà de ce qu'un aspirateur peut extraire.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur tenue et leur aspect d'origine. Dans les immeubles anciens du Vieux-Saint-Ouen ou les résidences récentes du centre-ville, la différence se constate dès le séchage : couleurs ravivées, texture souple, odeurs de renfermé dissipées. Pour les copropriétés, c'est aussi une question d'image auprès des résidents et visiteurs.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des contraintes d'accès : digicodes, halls à passage fréquent, stationnement limité dans les quartiers denses. Un diagnostic préalable permet d'adapter le matériel et le planning aux spécificités de chaque site.</p>",
      uniqueDeepDive: "<h3>1. Diagnostic et préparation</h3>\n<p>Avant toute intervention, nous identifions le type de moquette — bouclée, velours, dalles textiles — et la nature des taches présentes. Les zones de fort passage sont repérées pour adapter le nombre de passes.</p>\n<p class=\"mt-4\">Les plinthes et bas de murs sont protégés. Si l'intervention concerne des parties communes, un balisage temporaire limite les passages pendant le traitement.</p>\n\n<h3>2. Traitement par injection-extraction</h3>\n<p>La solution de nettoyage est injectée dans les fibres puis immédiatement aspirée avec les salissures décollées. Les zones de circulation reçoivent plusieurs passes pour extraire les résidus accumulés en profondeur.</p>\n<p class=\"mt-4\">Les taches tenaces — tanin, graisses, marques anciennes — font l'objet d'un détachage ciblé avant ou pendant le passage principal.</p>\n\n<h3>3. Extraction et séchage</h3>\n<p>L'aspiration finale retire le maximum d'humidité résiduelle. Le temps de séchage varie selon l'épaisseur des fibres et la ventilation du local, généralement entre 4 et 12 heures.</p>\n<p class=\"mt-4\">Nous indiquons les consignes de non-piétinement et la fréquence d'entretien adaptée à l'usage du lieu.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux du secteur Docks : <strong>passages fréquents, taches de café</strong> et traces de semelles.",
        "Moquettes bouclées des halls avec digicodes : accès à coordonner, balisage nécessaire.",
        "Stationnement difficile dans les quartiers denses : organisation du matériel en amont.",
        "Fibres épaisses des résidences récentes : <strong>temps de séchage à anticiper</strong> selon la ventilation.",
        "Taches anciennes incrustées dans les immeubles du Vieux-Saint-Ouen : détachage ciblé requis.",
      ],
      faqAdditions: [
        {
          question:
            "Comment organisez-vous le nettoyage de moquette dans un immeuble du centre-ville avec digicode et hall étroit ?",
          answer: "<p>Nous convenons d'un créneau avec le syndic ou le gardien pour accéder sans bloquer les résidents. <strong>Le matériel compact passe par les accès standards</strong>. Un balisage temporaire sécurise la zone traitée pendant le séchage, et nous adaptons les horaires pour limiter la gêne aux heures de passage.</p>",
        },
        {
          question:
            "Que faites-vous pour des taches anciennes sur une moquette de bureau située dans le secteur des Docks ?",
          answer: "<p>Les taches incrustées — café, tanin, résidus gras — reçoivent un pré-traitement ciblé avant le passage en injection-extraction. Selon l'ancienneté et la nature de la fibre, plusieurs applications peuvent être nécessaires. Le résultat dépend de l'état initial, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question:
            "Quelle méthode conseillez-vous selon qu'il s'agit d'une copropriété, d'un bureau ou d'un logement à Saint-Ouen-sur-Seine ?",
          answer: "<p>En copropriété, nous privilégions des créneaux hors heures de pointe avec <strong>balisage des parties communes</strong>. Pour les bureaux, l'intervention se fait souvent en fin de journée ou le week-end. À domicile, nous adaptons le planning à vos contraintes et veillons à un séchage rapide pour la remise en usage.</p>",
        },
        {
          question:
            "Comment gérez-vous le matériel quand le stationnement est difficile dans les quartiers denses de Saint-Ouen-sur-Seine ?",
          answer: "<p>Nous repérons les possibilités de stationnement en amont et prévoyons un équipement transportable sur courte distance si nécessaire. Dans les secteurs où le stationnement est très contraint, nous coordonnons avec le client ou le gardien pour un accès temporaire au plus près de l'entrée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec autolaveuse et gestion stricte des eaux de lavage, pour des sols assainis et une circulation sécurisée.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès en zone urbaine dense, notamment autour des copropriétés proches du centre-ville.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux de lavage conformément aux exigences des syndics.",
        "Rotation des véhicules planifiée avec le gestionnaire, balisage sécurisé et intervention sur créneaux validés.",
      ],
      uniqueIntro: "<p>Comment préserver la propreté d'un parking quand les véhicules y circulent quotidiennement et que les traces d'huile s'accumulent au fil des mois ? Autour du <strong>Stade Bauer</strong>, les flux événementiels amplifient l'encrassement des sols. Les rampes d'accès noircissent, les rigoles se bouchent, et les résidents ou usagers constatent une dégradation progressive des espaces communs.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier transforme l'aspect général du parking. Les sols en <strong>béton brut ou en résine</strong>, fréquents dans les résidences récentes et les grands ensembles de la ville, retrouvent leur adhérence. Les odeurs de carburant s'estompent, les plaintes diminuent, et la copropriété affiche un espace souterrain entretenu.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic ou le gestionnaire. La <strong>proximité d'axes routiers</strong> et la difficulté de stationnement imposent des créneaux adaptés. Balisage, rotation des véhicules, évacuation des eaux : chaque étape fait l'objet d'un plan validé avant le démarrage du chantier.</p>",
      uniqueDeepDive: "<h3>1. Encrassement et revêtement</h3>\n<p>Les dépôts d'huile, de graisse et de poussière s'incrustent différemment selon le support. Un diagnostic préalable identifie le type de sol et l'état des évacuations. Le balayage mécanique élimine les débris avant toute application de produit.</p>\n\n<h3>2. Traitement des zones critiques</h3>\n<p>Les rampes inclinées, les angles morts et les pieds de murs concentrent les salissures tenaces. L'autolaveuse associée à un dégraissant adapté traite ces surfaces en passes successives. La haute pression intervient sur les zones les plus encrassées sans endommager le revêtement.</p>\n\n<h3>3. Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Les rigoles et regards sont vérifiés pour garantir un écoulement correct. Un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention si demandé. Le compte-rendu précise la fréquence recommandée selon le trafic constaté.</p>",
      specificChallenges: [
        "Parkings en béton brut ou résine nécessitant un réglage de pression adapté.",
        "Flux événementiels autour du Stade Bauer imposant des créneaux décalés.",
        "Stationnement compliqué en surface obligeant à coordonner l'accès du matériel.",
        "Rampes inclinées et angles morts concentrant les dépôts de graisse.",
        "Évacuations à vérifier systématiquement pour éviter les stagnations.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous des taches d'huile anciennes dans un parking situé près du Stade Bauer à Saint-Ouen-sur-Seine ?",
          answer: "<p>Les taches d'huile incrustées nécessitent un dégraissant appliqué en prétraitement. L'autolaveuse passe ensuite sur la zone pour décoller les résidus. Plusieurs passes peuvent être requises selon l'ancienneté des dépôts. Le résultat dépend aussi du type de revêtement présent.</p>",
        },
        {
          question:
            "Comment assurez-vous le balisage et la sécurité des usagers pendant un lavage de parking en zone urbaine dense ?",
          answer: "<p>Un balisage signalétique délimite les zones en cours de traitement. Les résidents sont informés en amont par le syndic ou le gestionnaire. L'intervention progresse par secteurs pour maintenir une circulation partielle. Les accès piétons restent sécurisés tout au long du chantier.</p>",
        },
        {
          question:
            "Quelle différence de méthode appliquez-vous entre un parking souterrain et un parking aérien dans le secteur des Docks ?",
          answer: "<p>En souterrain, la ventilation et l'éclairage conditionnent l'organisation du chantier. En aérien, l'exposition aux intempéries modifie le type d'encrassement. Le matériel reste identique, mais les réglages de pression et les produits varient selon le support et l'environnement.</p>",
        },
        {
          question:
            "Peut-on prévoir une fermeture partielle d'un parking de copropriété pendant le décrassage à Saint-Ouen-sur-Seine ?",
          answer: "<p>Une fermeture partielle est souvent préférable pour garantir l'efficacité du lavage. La rotation des véhicules s'organise avec le gestionnaire. Les créneaux sont définis pour limiter la gêne aux résidents. Une fermeture totale reste possible si la copropriété le valide.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion anti-coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Balcons exposés aux vents du parc ou encaissés entre immeubles : nous adaptons la méthode à chaque configuration.",
        "Pression ajustée selon le support, brossage ciblé sur joints et recoins, produits compatibles carrelage grès et béton.",
        "Intervention discrète avec gestion stricte des eaux de rinçage pour préserver le voisinage en étage.",
      ],
      uniqueIntro: "<p>Dans le périmètre du <strong>Grand Parc des Docks</strong>, les balcons des résidences récentes accumulent poussières fines, pollens et dépôts urbains portés par le vent. Les dalles se ternissent, les joints verdissent, et l'espace perd son attrait. Ce qui devait être un prolongement agréable du logement devient une surface qu'on évite d'utiliser, faute de temps ou de méthode adaptée pour en venir à bout.</p>\n<p class=\"mt-4\">Retrouver un balcon propre, c'est récupérer des mètres carrés de vie. Les <strong>carrelages grès</strong> et <strong>bétons peints</strong> présents aussi bien dans les immeubles anciens que dans les constructions récentes retrouvent leur teinte d'origine. Les garde-corps redeviennent nets, les coins oubliés sont traités. L'envie de poser une table, d'installer quelques plantes ou simplement de prendre l'air revient naturellement.</p>\n<p class=\"mt-4\">L'intervention s'adapte aux contraintes d'accès en étage : badges, halls ouverts, voisinage proche. Chaque étape est pensée pour limiter les nuisances et protéger les surfaces mitoyennes.</p>",
      uniqueDeepDive: "<h3>1. Sol et revêtement</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les gros débris — feuilles mortes, terre accumulée — sont retirés manuellement. Le carrelage ou le béton reçoit ensuite un produit adapté au support, suivi d'un brossage qui déloge les salissures incrustées dans les joints. Le rinçage s'effectue à pression douce pour préserver l'étanchéité.</p>\n\n<h3>2. Garde-corps et vitrages</h3>\n<p>Les barreaux métalliques ou les panneaux vitrés sont traités séparément. Les traces de pollution, coulures et projections disparaissent. Les fixations et angles sont nettoyés au détail pour un rendu homogène sur l'ensemble de la structure.</p>\n\n<h3>3. Murs mitoyens et finitions</h3>\n<p>Les parois accessibles reçoivent un passage adapté à leur revêtement. L'eau est contrôlée pour éviter toute coulure chez les voisins du dessous. Une fois le rinçage terminé, le séchage naturel ou assisté permet une remise en service rapide. Des conseils d'entretien sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts verts persistants sur les balcons proches du Grand Parc des Docks.",
        "Carrelage grès aux joints poreux nécessitant un traitement sans haute pression.",
        "Accès en étage avec badges et digicodes imposant une coordination préalable.",
        "Gestion des coulures d'eau pour éviter les projections chez les voisins du dessous.",
        "Mobilier et plantes à protéger ou déplacer avant intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyez-vous un balcon en carrelage grès sans abîmer les joints dans une résidence récente de Saint-Ouen-sur-Seine ?",
          answer: "<p>Le carrelage grès reçoit un produit désincrustant adapté, appliqué avant brossage manuel ou mécanique doux. La pression de rinçage reste modérée pour ne pas creuser les joints. Cette approche préserve l'étanchéité tout en éliminant les salissures accumulées entre les carreaux.</p>",
        },
        {
          question:
            "Comment gérez-vous l'eau et les coulures lors du nettoyage d'un balcon en étage dans un immeuble dense ?",
          answer: "<p>L'eau de rinçage est maîtrisée par un débit contrôlé et une raclette en bordure. Les écoulements sont dirigés vers l'évacuation du balcon. Si nécessaire, une bâche protège temporairement la façade ou le balcon inférieur pour éviter toute projection chez vos voisins.</p>",
        },
        {
          question:
            "Que faites-vous contre les mousses et dépôts verts sur un balcon exposé près du Grand Parc des Docks ?",
          answer: "<p>Les mousses sont d'abord grattées mécaniquement, puis traitées avec un produit anti-végétal adapté au support. Le brossage déloge les résidus incrustés dans les aspérités. Un rinçage soigné finalise l'intervention et retarde la réapparition des dépôts verts liés à l'humidité ambiante.</p>",
        },
        {
          question:
            "Pourquoi évitez-vous la haute pression pour nettoyer un balcon d'immeuble à Saint-Ouen-sur-Seine ?",
          answer: "<p>La haute pression peut endommager les joints, décoller les revêtements fragiles et projeter de l'eau chez les voisins. Nous privilégions une pression douce combinée à un brossage efficace. Cette méthode respecte les matériaux tout en obtenant un résultat visible sur carrelage comme sur béton peint.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des surfaces et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Saint-Ouen-sur-Seine, notamment les balcons proches des espaces verts et des toitures anciennes.",
        "Protocole strict avec EPI complets, confinement systématique et désinfection virucide après chaque intervention.",
        "Coordination avec les occupants et le voisinage pour limiter les nuisances pendant l'opération et évacuer les déchets en toute discrétion.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les garde-corps et le sol. Près du <strong>Grand Parc des Docks</strong>, les zones arborées attirent les pigeons qui trouvent refuge sur les corniches et rebords des immeubles voisins. L'odeur devient tenace, le linge étendu se salit, et l'envie d'utiliser cet espace extérieur disparaît progressivement.</p>\n<p class=\"mt-4\">Les balcons des <strong>immeubles anciens comme des résidences récentes</strong> présentent des recoins propices à l'installation des oiseaux. Les surfaces poreuses — béton peint, carrelage grès — absorbent les souillures et compliquent le nettoyage superficiel. Sans traitement adapté, les acides contenus dans les déjections attaquent les matériaux et laissent des traces durables.</p>\n<p class=\"mt-4\">La <strong>densité urbaine de Saint-Ouen-sur-Seine</strong> et la sensibilité des accès en copropriété imposent une intervention encadrée. Un diagnostic préalable permet d'évaluer l'ampleur des dépôts, de protéger le voisinage pendant l'opération, et de proposer des solutions de dissuasion adaptées à la configuration du balcon.</p>",
      uniqueDeepDive: "<h3>1. Sécurisation et confinement de la zone</h3>\n<p>Les fientes sèches libèrent des particules potentiellement nocives. L'intervenant porte un équipement complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Une humidification préalable neutralise les poussières avant manipulation.</p>\n\n<h3>2. Collecte et traitement des surfaces</h3>\n<p>Les dépôts sont ramassés et conditionnés dans des sacs étanches. Le sol, les garde-corps et les vitrages sont nettoyés avec un produit adapté aux supports présents sur votre balcon.</p>\n<p class=\"mt-4\">La désinfection intervient ensuite avec un virucide-bactéricide homologué, appliqué avec un temps de contact suffisant pour éliminer les agents pathogènes.</p>\n\n<h3>3. Rinçage et prévention du retour</h3>\n<p>Un rinçage soigneux précède l'aération du balcon. Selon la configuration, des pics anti-pigeons ou un filet de protection peuvent être installés sur les rebords et corniches.</p>\n<p class=\"mt-4\">Les déchets sont évacués dans leurs contenants étanches.</p>",
      specificChallenges: [
        "Balcons exposés aux zones arborées des Docks : accumulation rapide de fientes.",
        "Corniches et garde-corps des immeubles anciens difficiles d'accès pour un nettoyage complet.",
        "Risque de dispersion des particules vers les logements voisins en copropriété dense.",
        "Surfaces poreuses (béton peint, carrelage grès) qui retiennent les souillures et les odeurs.",
        "Nécessité de coordonner l'intervention avec les contraintes d'accès par digicode ou badge.",
      ],
      faqAdditions: [
        {
          question:
            "Quels sont les risques sanitaires quand des fientes s'accumulent sur un balcon exposé près du Grand Parc des Docks ?",
          answer: "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les balcons proches des espaces verts, l'accumulation est souvent plus rapide. Un assainissement avec désinfection permet d'éliminer ces risques et de retrouver un espace utilisable en toute sécurité.</p>",
        },
        {
          question:
            "Quel protocole de sécurité et quels EPI utilisez-vous pour intervenir en copropriété dense à Saint-Ouen-sur-Seine ?",
          answer: "<p>Chaque intervenant porte masque FFP2, lunettes de protection, gants et combinaison jetable. La zone est confinée par bâchage pour éviter toute dispersion vers l'intérieur ou chez les voisins. Cette organisation est adaptée aux contraintes d'accès fréquentes dans les immeubles de la commune.</p>",
        },
        {
          question:
            "Comment se déroule la désinfection des surfaces de balcon après le retrait des fientes ?",
          answer: "<p>Après collecte des dépôts et nettoyage des supports, un produit virucide-bactéricide homologué est appliqué sur le sol, les garde-corps et les vitrages. Le temps de contact est respecté avant rinçage. Cette étape garantit l'élimination des agents pathogènes présents dans les souillures.</p>",
        },
        {
          question:
            "Comment évitez-vous les odeurs persistantes après le traitement d'un balcon donnant vers les Docks ?",
          answer: "<p>L'humidification préalable limite la dispersion des particules odorantes. La désinfection neutralise les composés organiques responsables des mauvaises odeurs. Un rinçage soigneux et une aération suffisante avant réutilisation complètent le protocole pour un résultat durable.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas à Saint-Ouen-sur-Seine, avec extraction des salissures et séchage adapté pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Interventions régulières dans les quartiers résidentiels de Saint-Ouen-sur-Seine, du Vieux-Saint-Ouen au secteur Docks.",
        "Détachage ciblé sur chaque type de tache, extraction puissante et séchage accéléré pour limiter l'attente.",
        "Organisation adaptée aux accès difficiles et au stationnement contraint en centre-ville.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans le centre-ville de Saint-Ouen-sur-Seine, les logements occupés par des familles ou des locataires voient leur mobilier textile sollicité en permanence. Enfants, animaux, repas devant la télé — chaque usage laisse une empreinte.</p>\n<p class=\"mt-4\">Un canapé en tissu ou en velours retrouve son aspect d'origine après une intervention ciblée. Les fibres dégagées des résidus reprennent leur souplesse, les couleurs reviennent. Pour les foyers sensibles aux acariens, le gain se ressent aussi sur le confort respiratoire. Les tapis épais et les matelas bénéficient du même traitement, adapté à leur épaisseur et à leur composition.</p>\n<p class=\"mt-4\">Les contraintes d'accès et de stationnement en ville dense orientent l'organisation de chaque passage. Le matériel arrive en utilitaire léger, les protections sont posées au sol, et le mobilier reste sur place pendant toute l'opération.</p>",
      uniqueDeepDive: "<h3>1. Textile propre et assaini</h3>\n<p>L'objectif est de restituer un canapé, un tapis ou un matelas débarrassé des taches visibles, des odeurs et des allergènes. Le résultat dépend de l'ancienneté des salissures et du type de fibre, mais le rendu est toujours perceptible dès la fin du séchage.</p>\n\n<h3>2. Diagnostic et pré-traitement</h3>\n<p>Chaque textile est examiné : coton, velours, synthétique ou laine. Un test discret sur zone cachée confirme la tolérance du tissu. Les taches identifiées — café, vin, urine, graisse — reçoivent un détachant adapté, enzymatique si nécessaire, avant le passage en machine.</p>\n\n<h3>3. Injection-extraction et séchage</h3>\n<p>Le nettoyage principal combine injection d'eau et aspiration immédiate. La pression et la température sont ajustées selon la fragilité du support. L'extraction maximale limite le temps de séchage. Selon l'épaisseur du mobilier et l'aération du logement, comptez quelques heures avant réutilisation. Des conseils d'entretien sont transmis en fin d'intervention.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés en tissu ou velours dans les logements du centre-ville.",
        "Odeurs persistantes liées aux animaux ou à l'humidité dans les appartements occupés.",
        "Acariens et allergènes accumulés dans les matelas et tapis épais des chambres.",
        "Accès et stationnement compliqués dans les rues étroites autour du Marché aux Puces.",
        "Séchage à anticiper selon la ventilation et la saison dans les pièces de vie.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les acariens et allergènes sur un canapé ou un tapis dans un logement du centre-ville de Saint-Ouen-sur-Seine ?",
          answer: "<p>L'injection-extraction à haute température élimine une grande partie des acariens et de leurs déjections. L'aspiration puissante retire les résidus en profondeur. Pour les foyers sensibles, cette opération améliore le confort respiratoire dès le séchage terminé. La fréquence recommandée dépend de la présence d'animaux ou d'enfants.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour le séchage après le nettoyage d'un canapé ou d'un tapis dans un appartement occupé à Saint-Ouen ?",
          answer: "<p>Le délai varie selon l'épaisseur du textile et l'aération de la pièce. En général, comptez entre deux et six heures pour un canapé en tissu, davantage pour un matelas épais. Ouvrir les fenêtres ou activer un ventilateur accélère le processus. Le mobilier reste utilisable dès qu'il est sec au toucher.</p>",
        },
        {
          question:
            "Comment adaptez-vous le nettoyage à un canapé en tissu ou en velours dans les logements de Saint-Ouen-sur-Seine ?",
          answer: "<p>Un diagnostic préalable identifie la nature du textile. Le velours demande une pression réduite et une température modérée pour préserver son aspect. Le tissu coton supporte un traitement plus appuyé. Un test sur zone cachée confirme la tolérance avant de traiter l'ensemble de l'assise et des accoudoirs.</p>",
        },
        {
          question:
            "Comment préparez-vous une intervention canapé-tapis quand l'accès et le stationnement sont compliqués à Saint-Ouen-sur-Seine ?",
          answer: "<p>Le matériel arrive en utilitaire léger, plus facile à garer dans les rues étroites du centre-ville ou près du Marché aux Puces. Les horaires sont ajustés pour éviter les pics de circulation. Si l'immeuble dispose d'un digicode ou d'un badge, les informations sont transmises en amont pour fluidifier l'accès.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement des mousses, nettoyage adapté au support et protection du mobilier pour retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des expositions urbaines et des problématiques de mousse liées à la proximité des espaces verts.",
        "Méthodes ajustées selon le revêtement : pression maîtrisée sur bois, brossage renforcé sur dalles minérales.",
        "Organisation pensée pour les immeubles : protection des voisins, gestion des accès et du mobilier.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement de sa terrasse quand les dépôts verts s'installent saison après saison ? Autour du <strong>Grand Parc des Docks</strong>, les résidences récentes disposent souvent d'espaces extérieurs exposés aux intempéries et à l'humidité ambiante. Les mousses gagnent du terrain, les dalles deviennent glissantes, et l'envie de s'installer dehors diminue progressivement.</p>\n<p class=\"mt-4\">Retrouver une terrasse propre change la perception de son logement. Les <strong>dalles sur plots</strong> ou le <strong>bois composite</strong>, fréquents dans les constructions récentes de Saint-Ouen-sur-Seine, retrouvent leur aspect d'origine une fois débarrassés des lichens et salissures accumulées. L'espace redevient accueillant, sûr pour circuler, agréable pour recevoir ou simplement prendre l'air.</p>\n<p class=\"mt-4\">Avant chaque intervention, nous évaluons l'état du revêtement et les contraintes d'accès. En immeuble, la gestion des étages, le passage par les parties communes et la protection des voisins du dessous font partie de la préparation. Chaque chantier est organisé pour limiter les désagréments et garantir un travail soigné.</p>",
      uniqueDeepDive: "<h3>1. Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché selon sa nature. Les jardinières et plantes sont mises à l'abri. Les menuiseries, baies vitrées et seuils de portes reçoivent une protection pour éviter tout risque de projection.</p>\n<p class=\"mt-4\">Les gros débris, feuilles mortes et terre accumulée sont retirés manuellement avant le traitement.</p>\n\n<h3>2. Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué pour décoller mousses et dépôts incrustés. Le brossage, manuel ou mécanique selon l'état, permet d'atteindre les joints et recoins. Sur bois composite, la pression reste contrôlée pour préserver les fibres.</p>\n<p class=\"mt-4\">Les garde-corps et murets périphériques sont traités dans la même intervention.</p>\n\n<h3>3. Rinçage et remise en place</h3>\n<p>L'eau est dirigée vers les points d'évacuation existants. Les écoulements sont surveillés pour éviter tout débordement vers les étages inférieurs ou les plantations. Une fois le séchage amorcé, le mobilier reprend sa place et vous récupérez votre espace extérieur.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'humidité et la proximité du Grand Parc des Docks.",
        "Dalles sur plots nécessitant un nettoyage sans déplacement des éléments.",
        "Bois composite sensible à la pression : réglage adapté pour éviter les marques.",
        "Gestion des écoulements d'eau en terrasse d'étage pour protéger les voisins.",
        "Accès par parties communes avec digicode et coordination préalable.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyez-vous une terrasse en pierre ou en bois composite sans abîmer le support ?",
          answer: "<p>Chaque matériau reçoit un traitement spécifique. Sur pierre, un brossage appuyé et une pression modérée suffisent. Sur bois composite, courant dans les résidences récentes de Saint-Ouen-sur-Seine, nous réduisons la pression et privilégions un produit doux pour préserver l'aspect des lames.</p>",
        },
        {
          question:
            "Comment éliminez-vous les mousses et lichens sur une terrasse exposée près du Grand Parc des Docks ?",
          answer: "<p>L'humidité ambiante favorise ces dépôts verts. Nous appliquons un traitement anti-mousse avant le nettoyage mécanique. Le brossage décroche les lichens incrustés, puis un rinçage évacue les résidus. Un traitement préventif peut être proposé pour ralentir la réapparition.</p>",
        },
        {
          question:
            "Faut-il privilégier la haute pression ou un nettoyage doux pour une terrasse en dalles sur plots ?",
          answer: "<p>Les dalles sur plots supportent généralement une pression contrôlée, mais les joints et l'étanchéité sous-jacente imposent de la prudence. Nous adaptons le réglage selon l'état du revêtement et l'ancienneté de la pose pour éviter toute infiltration ou déplacement des dalles.</p>",
        },
        {
          question:
            "À quelle fréquence faut-il nettoyer une terrasse exposée au contexte urbain dense de Saint-Ouen-sur-Seine ?",
          answer: "<p>Un entretien annuel, idéalement au printemps, permet de retirer les dépôts hivernaux avant la belle saison. Les terrasses ombragées ou proches d'arbres peuvent nécessiter une intervention supplémentaire à l'automne pour éviter l'accumulation de feuilles et l'apparition de mousse.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Remise en état complète de votre logement après travaux ou avant état des lieux, avec traitement de chaque pièce et coordination adaptée à vos contraintes d'accès.",
      whyUsBullets: [
        "Connaissance du parc immobilier de Saint-Ouen-sur-Seine, des immeubles anciens aux résidences récentes des Docks.",
        "Polyvalence sur tous types de sols et surfaces : parquet, carrelage, faïence, vitres intérieures.",
        "Coordination directe avec agences, artisans ou propriétaires pour caler l'intervention au bon moment.",
      ],
      uniqueIntro: "<p>Autour de la Mairie de Saint-Ouen-sur-Seine et dans les rues adjacentes, les logements libérés après travaux ou en fin de bail présentent souvent un état qui complique la remise des clés. Poussières de plâtre sur les plinthes, résidus de colle au sol, traces sur les vitres : ces détails retardent les signatures et génèrent des allers-retours inutiles entre locataires, propriétaires et agences.</p>\n<p class=\"mt-4\">Un grand nettoyage structuré permet de lever ces blocages. Dans les appartements anciens comme dans les résidences récentes du secteur, l'intervention couvre l'ensemble des surfaces — parquets, carrelages, faïences — pour un rendu conforme aux attentes d'un état des lieux. Les pièces d'eau retrouvent leur propreté, les sols leur aspect d'origine, et l'ensemble du logement peut être présenté sans réserve.</p>\n<p class=\"mt-4\">La prise de rendez-vous intègre les contraintes d'accès fréquentes à Saint-Ouen-sur-Seine : digicodes, badges, stationnement limité. La coordination avec artisans ou gestionnaires s'organise en amont pour éviter les décalages de planning.</p>",
      uniqueDeepDive: "<h3>1. Pièces de vie et circulations</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes pour éliminer les particules fines accumulées pendant les travaux. Les sols reçoivent ensuite un traitement adapté au revêtement : aspiration puis lavage sur parquet ou carrelage. Les interrupteurs, poignées et radiateurs sont nettoyés pour supprimer les traces de doigts et de chantier.</p>\n\n<h3>2. Cuisine et salle de bain</h3>\n<p>Les plans de travail, crédences et électroménager sont dégraissés. La faïence et les joints de la salle de bain font l'objet d'un détartrage. Les sanitaires — lavabo, douche, WC — sont désinfectés. Les placards intérieurs sont vidés de toute poussière résiduelle.</p>\n\n<h3>3. Finitions et contrôle</h3>\n<p>Les vitres intérieures sont nettoyées pour un rendu lumineux. Les éventuelles traces de peinture ou d'enduit sur les menuiseries sont traitées. Un contrôle pièce par pièce valide la conformité avant remise des clés ou visite de l'agence.</p>",
      specificChallenges: [
        "Accès aux immeubles souvent par digicode ou badge, à anticiper avant intervention.",
        "Stationnement contraint dans le tissu urbain dense, véhicule positionné au plus proche.",
        "Résidus de chantier variés selon les corps de métier intervenus (peinture, plâtre, colle).",
        "Délais serrés entre fin de travaux et état des lieux, planning à coordonner.",
        "Logements traversants ou en étage élevé nécessitant une organisation du matériel adaptée.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle différence entre un nettoyage standard et une remise en état fin de chantier dans un appartement proche de la mairie ?",
          answer: "<p>Le nettoyage fin de chantier inclut le traitement des résidus spécifiques aux travaux : poussières de plâtre, traces de peinture, colle sur les sols. L'intervention est plus complète qu'un ménage classique et couvre l'ensemble des surfaces, y compris plinthes, interrupteurs et placards intérieurs.</p>",
        },
        {
          question:
            "Comment traitez-vous les traces de peinture ou de colle après travaux dans un logement à Saint-Ouen-sur-Seine ?",
          answer: "<p>Les traces sont identifiées lors du diagnostic initial. Selon le support — parquet, carrelage, menuiserie — nous utilisons des produits adaptés et des techniques de grattage doux pour retirer les résidus sans abîmer la surface. Le résultat est contrôlé avant validation.</p>",
        },
        {
          question:
            "Intervenez-vous après un dégât des eaux dans un appartement du centre-ville ?",
          answer: "<p>Oui, sous réserve que le sinistre soit stabilisé et l'assèchement terminé. Nous prenons en charge le nettoyage des surfaces touchées, l'élimination des traces d'humidité visibles et la remise en propreté générale du logement avant réintégration ou visite d'expertise.</p>",
        },
        {
          question:
            "Comment coordonnez-vous le nettoyage avec les artisans ou l'agence après travaux dans le secteur des Docks ?",
          answer: "<p>Nous calons l'intervention une fois les travaux achevés, en lien direct avec le chef de chantier ou le gestionnaire. Le créneau est confirmé la veille pour éviter tout décalage. Si l'agence doit récupérer les clés, nous adaptons l'horaire de fin en conséquence.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;