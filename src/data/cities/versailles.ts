import type { City } from "~/types/geo";

const city: City = {
  name: "Versailles",
  slug: "versailles",
  postalCodes: ["78000"],

  department: {
    name: "Yvelines",
    code: "78",
    slug: "yvelines",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Versailles. Du quartier Notre-Dame aux résidences proches de la gare Chantiers, une organisation adaptée au bâti historique et aux contraintes d'accès de la préfecture des Yvelines.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Siège du Château de Versailles et préfecture des Yvelines, desservie par trois gares majeures : la ville concentre un patrimoine bâti exigeant et des flux quotidiens importants. Klinova s'y positionne comme partenaire terrain pour syndics, gestionnaires et occupants.</p>\n\n<p class=\"mt-4\">Propreté des communs, entretien des parkings souterrains, remise en état des extérieurs : chaque intervention s'organise selon les contraintes du site. <strong>Coordination avec gardiens</strong>, planification hors heures de pointe, reporting sur demande.</p>\n\n<ul>\n  <li><strong>Planification adaptée :</strong> Interventions calées sur les horaires d'occupation, en lien avec gardiens ou gestionnaires, pour limiter la gêne dans les halls et cages d'escalier.</li>\n  <li><strong>Accès sécurisés :</strong> Gestion des digicodes, badges et consignes spécifiques aux résidences du centre-ville ou des quartiers périphériques comme Montreuil.</li>\n  <li><strong>Stationnement anticipé :</strong> Repérage préalable des zones de livraison et créneaux autorisés, notamment autour de l'avenue de Paris et du secteur Chantiers.</li>\n</ul>",

  citySpecificChallenges: [
    "<strong>Immeubles anciens</strong> avec escaliers étroits et accès par digicode fréquents.",
    "Stationnement contraint en centre-ville, nécessitant un repérage préalable.",
    "Flux importants autour des <strong>trois gares</strong> : poussières et salissures accélérées dans les halls.",
    "Présence de gardiens ou concierges : coordination indispensable avant intervention.",
    "Parkings souterrains fréquents dans les copropriétés et résidences récentes.",
    "Pollution atmosphérique liée à l'A86 et la N12 : dépôts fins sur balcons et terrasses.",
  ],

  // Texte brut uniquement
  districts: [
    "Notre-Dame",
    "Saint-Louis",
    "Montreuil",
    "Bernard de Jussieu-Petit-Bois-Picardie",
    "Satory",
  ],

  // Villes limitrophes — sources FACTS
  nearbyCities: [
        "le-chesnay-rocquencourt",
        "sevres",
        "saint-cloud",
        "rueil-malmaison",
        "clamart",
        "boulogne-billancourt",
        "suresnes",
        "issy-les-moulineaux",
        "nanterre",
        "puteaux"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Versailles",
    "Château de Versailles",
    "Gare Versailles Chantiers",
    "Gare Versailles Château Rive Gauche",
    "Gare Versailles Rive Droite",
    "Versailles Grand Parc",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les immeubles anciens du centre de Versailles ?",
      answer: "<p>Nous effectuons un repérage préalable pour identifier les <strong>contraintes d'accès</strong> : escaliers étroits, digicodes, présence de gardien. L'intervention est ensuite planifiée en coordination avec le syndic ou le gestionnaire, sur des créneaux adaptés à l'occupation du bâtiment.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur la commune ?",
      answer: "<p>Oui, nous pouvons mobiliser une équipe selon la nature de la demande. Pour les situations critiques (dégât des eaux, souillures importantes), un <strong>premier passage</strong> est organisé avant planification complète si nécessaire.</p>",
    },
    {
      question: "Le stationnement est difficile à Versailles : comment gérez-vous ce point ?",
      answer: "<p>Nous identifions en amont les <strong>zones de livraison</strong> et créneaux autorisés à proximité du site. Pour les interventions longues, nous anticipons les contraintes du centre historique et privilégions les horaires de moindre affluence.</p>",
    },
    {
      question: "Proposez-vous un suivi ou un reporting après intervention ?",
      answer: "<p>Sur demande, nous transmettons un <strong>compte-rendu d'intervention</strong> : date, périmètre traité, observations éventuelles. Ce reporting est particulièrement utile pour les syndics ou gestionnaires gérant plusieurs lots sur Versailles.</p>",
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
      heroDescription: "Extraction des salissures incrustées dans vos moquettes à Versailles, avec un séchage maîtrisé pour limiter l'interruption d'usage dans vos locaux ou parties communes.",
      whyUsBullets: [
        "Connaissance des copropriétés versaillaises et de leurs configurations d'escaliers étroits ou halls anciens.",
        "Matériel d'injection-extraction dimensionné pour traiter fibres bouclées comme velours sans risque de détérioration.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des résidents et respecter les accès contrôlés.",
      ],
      uniqueIntro: "<p>Les traces de passage marquent rapidement les fibres textiles, surtout dans le <strong>quartier Notre-Dame</strong> où les copropriétés anciennes conservent des moquettes dans les halls et escaliers. Taches de café, résidus de semelles, poussières fines : ces dépôts s'accumulent et ternissent l'aspect général sans qu'un aspirateur classique puisse les déloger.</p>\n\n<p class=\"mt-4\">Dans les <strong>immeubles anciens et petits collectifs</strong> de Versailles, le revêtement textile joue un rôle d'amortissement sonore et de confort visuel. Une moquette grisée ou tachée dégrade l'image des parties communes, génère des remarques de copropriétaires et complique la location ou la vente. Un entretien en profondeur redonne de l'éclat aux fibres et prolonge leur durée de vie.</p>\n\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des escaliers étroits, digicodes et contraintes de stationnement fréquents dans le centre historique. Chaque chantier fait l'objet d'un diagnostic préalable pour adapter le matériel et planifier les protections nécessaires.</p>",
      uniqueDeepDive: "<h3>1. Identifier le support et les salissures</h3>\n<p>Le diagnostic distingue moquette bouclée, velours ou dalle textile, puis repère les zones de trafic intense et les taches spécifiques. Cette analyse oriente le choix des produits et la pression d'injection adaptée aux fibres.</p>\n\n<h3 class=\"mt-4\">2. Traiter en profondeur sans détremper</h3>\n<p>La méthode injection-extraction projette une solution nettoyante dans l'épaisseur du textile, puis aspire immédiatement l'eau chargée de résidus. Les passes se concentrent sur les seuils, couloirs et paliers où l'encrassement est le plus visible. Un détachage ciblé complète le traitement sur les marques tenaces.</p>\n\n<h3 class=\"mt-4\">3. Maîtriser l'humidité résiduelle</h3>\n<p>L'extraction maximale limite le temps de séchage à quelques heures selon la ventilation. Les plinthes et bas de murs sont protégés pendant l'opération. Un balisage temporaire évite le piétinement prématuré et préserve le résultat obtenu.</p>",
      specificChallenges: [
        "Escaliers étroits dans les immeubles anciens : acheminement du matériel adapté.",
        "Moquettes bouclées sensibles au brossage trop agressif : réglage de pression indispensable.",
        "Stationnement difficile en centre-ville : coordination préalable pour le véhicule d'intervention.",
        "Digicodes et badges : planification des accès avec le syndic ou le gardien.",
        "Temps de séchage variable selon ventilation des parties communes.",
      ],
      faqAdditions: [
        {
          question: "Dans les immeubles anciens du quartier Notre-Dame, comment traitez-vous une moquette fragile sans abîmer le support ?",
          answer: "<p>Le diagnostic préalable identifie le type de fibre et son état. La pression d'injection est réduite sur les textiles délicats, et le brossage reste superficiel pour éviter d'effilocher les boucles. Les plinthes et seuils sont protégés avant toute projection.</p>",
        },
        {
          question: "À Saint-Louis, comment traitez-vous des taches anciennes et incrustées sur une moquette de copropriété ?",
          answer: "<p>Un pré-détachage cible les marques tenaces avant le passage en injection-extraction. Plusieurs passes successives délogent les résidus profonds. Certaines taches très anciennes peuvent s'atténuer sans disparaître totalement, selon l'ancienneté et la nature du dépôt.</p>",
        },
        {
          question: "Près de Versailles Chantiers, quelle différence faites-vous entre moquette de copropriété, de bureau et de cabinet médical ?",
          answer: "<p>En copropriété, l'intervention se cale sur les horaires de moindre passage. En bureau, le séchage rapide permet une reprise d'activité le lendemain. En cabinet médical, les produits utilisés respectent les exigences d'hygiène et le mobilier est protégé.</p>",
        },
        {
          question: "Autour de l'avenue de Paris, comment gérez-vous le stationnement et le matériel pour une intervention moquette ?",
          answer: "<p>Le véhicule est positionné au plus près de l'entrée après repérage des places disponibles ou accord avec le gardien. Le matériel compact passe par les escaliers étroits si l'ascenseur est absent ou trop petit. La durée de stationnement est optimisée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains avec autolaveuse, dégraissage des zones critiques et gestion rigoureuse des eaux de lavage pour un sol assaini et sécurisé.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès dans les sous-sols versaillais, du centre historique au quartier Montreuil.",
        "Autolaveuse professionnelle et gestion stricte des eaux de lavage, conformément aux exigences des copropriétés.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la fermeture du parking.",
      ],
      uniqueIntro: "<p>Comment maintenir un parking souterrain propre quand les véhicules y circulent quotidiennement et que les traces d'huile s'accumulent au fil des mois ? Dans le <strong>secteur de Montreuil</strong> comme autour des pôles de mobilité versaillais, les sous-sols subissent un encrassement progressif que le simple balayage ne suffit pas à traiter. Graisse, poussières fines et résidus de pneus finissent par ternir les sols et compromettre l'adhérence sur les rampes.</p>\n\n<p class=\"mt-4\">Pour les syndics et gestionnaires, un parking négligé génère des plaintes récurrentes et dégrade l'image de la résidence. Sur les <strong>revêtements en béton brut ou béton peint</strong> fréquents dans les copropriétés versaillaises, les salissures incrustées deviennent difficiles à éliminer sans équipement adapté. Un lavage mécanisé régulier redonne un aspect net et limite les risques de glissade.</p>\n\n<p class=\"mt-4\">Klinova organise chaque intervention en coordination avec le donneur d'ordre : diagnostic préalable, balisage sécurisé et <strong>horaires adaptés aux flux de véhicules</strong> pour réduire la gêne des résidents.</p>",
      uniqueDeepDive: "<h3>1. Préparation et sécurisation</h3>\n<p>Avant toute intervention, nos équipes réalisent un diagnostic du revêtement et vérifient l'état des évacuations. Le parking est ensuite balisé avec une signalétique claire pour orienter les usagers vers les zones accessibles.</p>\n\n<p class=\"mt-4\">Un balayage préalable élimine les débris grossiers. Si nécessaire, une rotation des véhicules est organisée en lien avec le syndic ou le gestionnaire.</p>\n\n<h3 class=\"mt-4\">2. Lavage mécanisé et dégraissage</h3>\n<p>L'autolaveuse effectue plusieurs passes sur l'ensemble des surfaces. Les zones critiques — rampes d'accès, angles morts, pieds de murs et rigoles — reçoivent un traitement renforcé au dégraissant.</p>\n\n<p class=\"mt-4\">Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage ni stagnation.</p>\n\n<h3 class=\"mt-4\">3. Contrôle et recommandations</h3>\n<p>Une vérification finale permet de s'assurer que les rigoles sont dégagées et que le sol a retrouvé son adhérence. Un dépoussiérage des blocs lumineux ou tuyauteries peut être réalisé sur demande.</p>\n\n<p class=\"mt-4\">Un compte-rendu est transmis avec une préconisation de fréquence adaptée au trafic constaté.</p>",
      specificChallenges: [
        "Stationnement difficile en centre-ville : intervention planifiée avec le gestionnaire.",
        "Sous-sols en béton brut nécessitant un dégraissage adapté pour préserver le revêtement.",
        "Rampes inclinées à traiter avec attention pour maintenir l'adhérence antidérapante.",
        "Balisage obligatoire pour sécuriser les usagers pendant le lavage mécanisé.",
        "Gestion des eaux de lavage vers les évacuations existantes, sans stagnation.",
      ],
      faqAdditions: [
        {
          question: "Comment éliminez-vous les taches d'huile anciennes dans les parkings souterrains de Versailles ?",
          answer: "<p>Les traces d'huile incrustées sur le béton brut ou peint sont traitées avec un dégraissant professionnel avant le passage de l'autolaveuse. Plusieurs passes ciblées permettent de décoller les résidus sans abîmer le revêtement. Le résultat dépend de l'ancienneté des taches, mais l'aspect général est nettement amélioré.</p>",
        },
        {
          question: "Comment organisez-vous le balisage lors du nettoyage d'un parking près de la gare Versailles Chantiers ?",
          answer: "<p>Une signalétique temporaire est installée aux entrées et sorties pour orienter les usagers vers les zones non concernées par l'intervention. Le balisage est ajusté au fur et à mesure de l'avancement du chantier. Cette organisation limite les interruptions et sécurise les passages piétons comme véhicules.</p>",
        },
        {
          question: "Quels horaires privilégiez-vous pour intervenir dans le centre historique de Versailles ?",
          answer: "<p>Les créneaux en début de matinée ou en soirée sont souvent retenus pour réduire la gêne des résidents et des visiteurs. L'horaire précis est défini avec le syndic ou le gestionnaire selon les contraintes de la copropriété. Une intervention de nuit reste possible si le parking le permet.</p>",
        },
        {
          question: "Comment adaptez-vous le nettoyage sur un revêtement en béton brut ou peint ?",
          answer: "<p>Le diagnostic initial identifie le type de sol et son état. Sur béton brut, l'autolaveuse est réglée pour éviter toute dégradation de surface. Sur béton peint, le dégraissant utilisé est compatible avec la finition pour préserver l'adhérence et l'aspect du revêtement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement adapté au support et gestion anti-coulures pour un espace extérieur propre sans gêne pour le voisinage.",
      whyUsBullets: [
        "Connaissance des immeubles versaillais, de leurs balcons exposés et des contraintes d'accès en étage.",
        "Pression ajustée selon le support, brossage adapté aux joints fragiles, produits compatibles pierre et carrelage.",
        "Protection systématique contre les coulures, coordination avec le voisinage et intervention aux horaires convenus.",
      ],
      uniqueIntro: "<p>Dans le quartier Saint-Louis, les balcons accumulent rapidement poussières fines, dépôts verts et traces de pollution. L'exposition aux arbres environnants et au trafic de l'avenue de Paris laisse des marques tenaces sur les sols et garde-corps. Après quelques saisons sans entretien, les joints noircissent, les surfaces deviennent glissantes et l'espace perd son attrait.</p>\n\n<p class=\"mt-4\">Sur les immeubles anciens comme sur les résidences récentes, les supports varient : pierre, carrelage ou béton demandent chacun une approche différente. Un balcon encrassé donne une impression de négligence visible depuis la rue. À l'inverse, un espace extérieur propre invite à profiter des beaux jours, à installer du mobilier, à recevoir sans gêne.</p>\n\n<p class=\"mt-4\">Nous adaptons chaque intervention aux contraintes d'accès en étage et à la sensibilité du voisinage. Avant de commencer, nous identifions le type de revêtement, l'état des joints et les éléments à protéger. Cette préparation permet un travail efficace, sans mauvaise surprise pour vous ni pour les occupants du dessous.</p>",
      uniqueDeepDive: "<h3>1. Sol et revêtement</h3>\n<p>Nous commençons par dégager le mobilier et les plantes, puis retirons les gros débris accumulés. Le sol reçoit ensuite un produit adapté à sa nature : détergent doux pour carrelage, traitement spécifique pour pierre ou béton. Le brossage manuel ou mécanique déloge les salissures incrustées dans les joints.</p>\n\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée pour préserver l'étanchéité des joints sans projeter d'eau chez les voisins.</p>\n\n<h3 class=\"mt-4\">2. Garde-corps et vitrages</h3>\n<p>Les barreaux et rampes sont dégraissés puis essuyés pour éliminer les traces de pollution. Si le balcon comporte des parois vitrées, nous les nettoyons des deux côtés accessibles.</p>\n\n<p class=\"mt-4\">Les murs mitoyens reçoivent un passage si leur état le justifie et si l'accès le permet.</p>\n\n<h3 class=\"mt-4\">3. Séchage et conseils</h3>\n<p>Nous vérifions l'écoulement de l'eau vers les évacuations et séchons les zones sensibles. Avant de partir, nous vous indiquons la fréquence d'entretien recommandée selon l'exposition de votre balcon et les essences d'arbres à proximité.</p>",
      specificChallenges: [
        "Dépôts verts fréquents sur les balcons exposés aux arbres du quartier Saint-Louis.",
        "Joints de carrelage noircis par la pollution liée au trafic de l'avenue de Paris.",
        "Supports variés selon les immeubles : pierre, carrelage ou béton demandent des produits distincts.",
        "Gestion de l'eau indispensable pour éviter les coulures chez les voisins du dessous.",
        "Accès parfois contraignant dans les résidences avec digicode et escaliers étroits.",
      ],
      faqAdditions: [
        {
          question: "Dans les balcons du quartier Saint-Louis, comment protégez-vous les carrelages et les joints pendant le nettoyage ?",
          answer: "<p>Nous ajustons la pression de rinçage pour ne pas déchausser les joints. Sur les carrelages anciens, le brossage reste manuel et le produit utilisé respecte les surfaces poreuses. Les menuiseries et seuils sont protégés avant toute projection d'eau.</p>",
        },
        {
          question: "Sur les balcons exposés du centre-ville, comment retirez-vous les dépôts verts et les mousses sans abîmer la surface ?",
          answer: "<p>Un produit anti-mousse adapté au support est appliqué puis laissé agir. Le brossage mécanique déloge les résidus sans rayer. Le rinçage contrôlé évite de disperser les spores sur les surfaces voisines ou chez les occupants du dessous.</p>",
        },
        {
          question: "Selon que le balcon soit en pierre, carrelage ou béton à Versailles, quelle méthode adaptez-vous ?",
          answer: "<p>La pierre reçoit un traitement doux sans acide, le carrelage supporte un brossage plus appuyé, le béton brut tolère une pression légèrement supérieure. Nous identifions le matériau avant de choisir le produit et la technique de rinçage appropriés.</p>",
        },
        {
          question: "Avec des garde-corps et vitrages en façade résidentielle, comment intervenez-vous sans risque de projection ?",
          answer: "<p>Les garde-corps sont nettoyés à la main avec un chiffon et un dégraissant. Les vitrages reçoivent un passage à la raclette après application de produit. Nous orientons le rinçage vers l'intérieur du balcon pour limiter les éclaboussures vers la rue ou les voisins.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des surfaces et pose de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Versailles, notamment les zones résidentielles proches des espaces verts et corniches anciennes.",
        "Équipement complet FFP2, combinaison jetable et produits virucides homologués pour une décontamination efficace.",
        "Intervention discrète avec bâchage, gestion des déchets en sacs étanches et coordination avec le voisinage si nécessaire.",
      ],
      uniqueIntro: "<p>Après quelques semaines d'accumulation, les fientes de pigeons transforment un balcon en zone inutilisable. Dans le quartier Satory comme dans les secteurs résidentiels proches du centre, les dépôts s'épaississent sur les garde-corps et les sols. L'odeur s'installe, le linge ne peut plus sécher dehors, et chaque tentative de nettoyage maison ne fait que déplacer le problème sans l'éliminer.</p>\n\n<p class=\"mt-4\">Sur les balcons et loggias des immeubles versaillais, les surfaces en pierre, carrelage ou béton absorbent les acides contenus dans les déjections. Les taches s'incrustent, les joints noircissent, et la dégradation s'accélère avec chaque nouvelle couche. Retrouver un extérieur propre permet de réutiliser cet espace au quotidien, d'y installer à nouveau du mobilier, et d'éviter les remarques du voisinage.</p>\n\n<p class=\"mt-4\">Une intervention structurée commence par un diagnostic de l'état des supports et du niveau de contamination. L'accès est encadré, les déchets sont conditionnés dans des sacs étanches, et la désinfection finale élimine les agents pathogènes présents dans les résidus organiques.</p>",
      uniqueDeepDive: "<h3>1. Surfaces assainies et désinfectées</h3>\n<p>L'objectif est de rendre le balcon réutilisable sans risque sanitaire. Les fientes sont retirées intégralement, les supports nettoyés en profondeur, et un produit virucide élimine les agents pathogènes. Le temps de contact est respecté avant rinçage.</p>\n\n<h3 class=\"mt-4\">2. Confinement et protection préalables</h3>\n<p>Avant toute manipulation, l'équipe porte FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées pour neutraliser les poussières contaminées.</p>\n\n<h3 class=\"mt-4\">3. Collecte sécurisée et dissuasion</h3>\n<p>Les déjections sont ramassées et conditionnées en sacs étanches, puis évacuées. Le sol, les garde-corps et les vitrages sont traités. Si les corniches ou rebords favorisent le retour des pigeons, des pics ou filets peuvent être posés pour limiter les récidives.</p>",
      specificChallenges: [
        "Accumulations épaisses sur balcons exposés aux corniches et toitures anciennes du centre-ville.",
        "Surfaces en pierre ou carrelage attaquées par l'acidité des fientes, nécessitant un traitement adapté.",
        "Accès aux étages avec digicode et coordination préalable pour le bâchage des zones mitoyennes.",
        "Odeurs persistantes après nettoyage superficiel, exigeant une désinfection complète.",
        "Risque de réinfestation rapide sans pose de dispositifs anti-retour sur les rebords.",
      ],
      faqAdditions: [
        {
          question: "Sur un balcon proche du Château de Versailles, quels risques sanitaires prenez-vous en charge avant tout nettoyage ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les voies respiratoires. Avant toute intervention dans ce secteur touristique, nous sécurisons la zone, portons les EPI adaptés et humidifions les dépôts pour éviter la dispersion de particules contaminées dans l'air.</p>",
        },
        {
          question: "Dans une copropriété de Versailles, quels EPI et quel protocole de sécurité appliquez-vous pour des fientes de pigeons ?",
          answer: "<p>Nos équipes portent masque FFP2, gants, lunettes de protection et combinaison jetable. La zone est confinée par bâchage pour protéger l'intérieur du logement et les espaces voisins. Cette procédure s'applique systématiquement, que le balcon soit en étage élevé ou en rez-de-chaussée.</p>",
        },
        {
          question: "En centre-ville de Versailles, quelle désinfection appliquez-vous après retrait des fientes de pigeons ?",
          answer: "<p>Après collecte des déjections, nous appliquons un produit virucide et bactéricide homologué sur l'ensemble des surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage final. Cette étape élimine les agents pathogènes résiduels et supprime les odeurs à la source.</p>",
        },
        {
          question: "Après nettoyage des fientes sur balcons et loggias, comment supprimez-vous les odeurs résiduelles ?",
          answer: "<p>Les odeurs proviennent des résidus organiques incrustés dans les joints et les pores des matériaux. La désinfection en profondeur, combinée au rinçage, neutralise ces sources. Sur les surfaces poreuses comme la pierre, un second passage peut être nécessaire pour un résultat complet.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à Versailles, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Connaissance des logements versaillais, du quartier Montreuil aux résidences du centre historique.",
        "Détachage adapté à chaque textile avec extraction contrôlée pour préserver les fibres.",
        "Organisation souple pour accéder aux étages sans ascenseur et gérer le stationnement limité.",
      ],
      uniqueIntro: "<p>Les taches de café sur l'accoudoir, les auréoles sur le tapis du salon, les traces laissées par les enfants ou les animaux : ces marques s'accumulent au fil des mois sur vos textiles d'intérieur. Dans le <strong>quartier Montreuil</strong> comme dans les autres secteurs résidentiels de Versailles, les canapés et tapis subissent un usage quotidien qui finit par ternir leur aspect et retenir poussières et allergènes.</p>\n\n<p class=\"mt-4\">Un nettoyage en profondeur redonne de l'éclat aux fibres et élimine les résidus incrustés que l'aspirateur ne capte pas. Dans les <strong>immeubles anciens et petits collectifs</strong> versaillais, où les pièces de vie accueillent souvent du mobilier en tissu ou en cuir, cette remise en état améliore le confort au quotidien et prolonge la durée de vie de vos assises et revêtements.</p>\n\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des <strong>contraintes d'accès en étage et du stationnement difficile</strong> propres au centre-ville. Un diagnostic textile précède le traitement, et des consignes de séchage adaptées vous permettent de réutiliser rapidement votre mobilier.</p>",
      uniqueDeepDive: "<h3>1. Taches anciennes et odeurs persistantes</h3>\n<p>Les salissures incrustées nécessitent un diagnostic préalable. Nous identifions la nature du textile et le type de tache pour choisir le traitement adapté.</p>\n\n<p class=\"mt-4\">Un pré-détachage ciblé est appliqué sur les zones marquées. Les produits enzymatiques traitent efficacement les traces organiques comme l'urine ou les résidus alimentaires.</p>\n\n<h3 class=\"mt-4\">2. Fibres encrassées et allergènes accumulés</h3>\n<p>L'injection-extraction textile déloge les poussières et acariens piégés en profondeur. La pression et la température sont ajustées selon la fragilité du tissu, du velours ou du cuir.</p>\n\n<p class=\"mt-4\">Cette méthode retire l'eau chargée de salissures sans détremper le rembourrage.</p>\n\n<h3 class=\"mt-4\">3. Séchage et remise en service</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et la ventilation de la pièce, comptez quelques heures avant de réutiliser votre canapé ou de remarcher sur le tapis.</p>\n\n<p class=\"mt-4\">Nous vous transmettons des conseils d'entretien pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Taches anciennes sur canapé tissu : pré-traitement enzymatique avant extraction.",
        "Accès en étage sans ascenseur : matériel portable adapté aux escaliers étroits.",
        "Stationnement difficile en centre-ville : anticipation du créneau et coordination avec le client.",
        "Séchage en appartement peu ventilé : consignes précises pour éviter les odeurs d'humidité.",
        "Textiles fragiles (velours, cuir) : réglage de pression et température sur mesure.",
      ],
      faqAdditions: [
        {
          question: "Dans un appartement du quartier Montreuil, comment réduisez-vous les acariens et allergènes présents sur un canapé ou un tapis ?",
          answer: "<p>L'injection-extraction déloge les acariens et poussières piégés dans les fibres. L'aspiration puissante retire ces résidus en profondeur, ce qu'un simple aspirateur domestique ne permet pas. Après séchage, l'air ambiant est plus sain et les personnes sensibles respirent mieux.</p>",
        },
        {
          question: "Dans un logement résidentiel versaillais, combien de temps faut-il prévoir pour le séchage d'un canapé ou d'un tapis ?",
          answer: "<p>Le délai varie selon l'épaisseur du textile et l'aération de la pièce. En général, comptez entre deux et six heures pour un canapé, un peu moins pour un tapis fin. Nous conseillons d'ouvrir les fenêtres ou d'activer la ventilation pour accélérer le processus.</p>",
        },
        {
          question: "À Versailles, comment préparer le logement avant le nettoyage d'un canapé ou d'un tapis ?",
          answer: "<p>Dégagez l'espace autour du mobilier pour faciliter l'accès. Retirez les coussins amovibles et signalez les taches spécifiques à traiter. Si le stationnement est compliqué, indiquez-nous un créneau où une place se libère plus facilement près de l'entrée.</p>",
        },
        {
          question: "Avec un accès en étage et un stationnement difficile à Versailles, comment organisez-vous l'intervention sur un canapé ou un tapis ?",
          answer: "<p>Nous utilisons du matériel portable conçu pour les escaliers étroits des immeubles anciens. Le rendez-vous est calé sur un créneau où le stationnement est moins tendu. Une fois sur place, l'intervention se déroule sans encombrer les parties communes.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses, pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses versaillaises exposées aux arbres et à l'humidité du secteur.",
        "Méthodes adaptées à chaque support : pierre, bois, composite, avec traitement anti-mousse ciblé.",
        "Protection systématique du mobilier et des plantes, gestion de l'eau sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect d'une terrasse quand l'humidité, les feuilles et les dépôts verts s'accumulent saison après saison ? Le long de l'avenue de Paris et dans les quartiers résidentiels de Versailles, les espaces extérieurs subissent un encrassement progressif qui rend les surfaces glissantes et ternes. Pierre, bois ou carrelage : chaque matériau réagit différemment aux intempéries et aux salissures organiques.</p>\n\n<p class=\"mt-4\">Sur les maisons, rez-de-chaussée ou toits-terrasses, les terrasses en pierre, carrelage ou bois présentent des contraintes spécifiques. Les joints poreux retiennent l'humidité, le bois composite verdit sous l'ombre des arbres, la pierre naturelle se couvre de lichens. Un entretien adapté au support permet de retrouver une surface nette, sans risque d'altération des matériaux.</p>\n\n<p class=\"mt-4\">L'intervention commence par un diagnostic du revêtement et de son état. Nous adaptons la méthode de traitement selon la nature du support, la présence de mobilier extérieur et les conditions météo. Chaque étape vise un résultat durable, avec des conseils pour espacer les prochains entretiens.</p>",
      uniqueDeepDive: "<h3>1. Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés pour dégager la surface. Les menuiseries et baies vitrées sont protégées contre les projections.</p>\n\n<p class=\"mt-4\">Un balayage préalable élimine les gros dépôts : feuilles mortes, terre, débris végétaux et mousse superficielle.</p>\n\n<h3 class=\"mt-4\">2. Traitement du support</h3>\n<p>Un produit adapté est appliqué selon le matériau : dégraissant pour carrelage, nettoyant doux pour pierre naturelle, traitement spécifique pour bois ou composite. Le brossage manuel ou mécanique décolle les salissures incrustées.</p>\n\n<p class=\"mt-4\">Si le support le permet, un passage haute pression contrôlée complète le nettoyage. Les joints et matériaux poreux sont traités avec précaution pour éviter toute détérioration.</p>\n\n<h3 class=\"mt-4\">3. Finalisation et conseils</h3>\n<p>Les garde-corps, murets et escaliers extérieurs sont nettoyés. L'eau est évacuée vers les points d'écoulement existants, en protégeant les plantations adjacentes.</p>\n\n<p class=\"mt-4\">Après séchage, nous transmettons des recommandations d'entretien saisonnier pour limiter la réapparition des mousses et dépôts verts.</p>",
      specificChallenges: [
        "Mousses et lichens sur terrasses ombragées par les arbres du secteur.",
        "Supports variés (pierre, bois, composite) nécessitant des traitements différenciés.",
        "Gestion du mobilier extérieur et des jardinières avant intervention.",
        "Évacuation de l'eau maîtrisée pour protéger les plantations et le voisinage.",
        "Stationnement compliqué en centre-ville, organisation logistique anticipée.",
      ],
      faqAdditions: [
        {
          question: "Sur les terrasses en pierre le long de l'avenue de Paris, comment évitez-vous d'abîmer le support pendant le nettoyage ?",
          answer: "<p>Nous adaptons la pression et le produit à la nature de la pierre. Les surfaces poreuses ou fragiles sont traitées avec un nettoyant doux et un brossage manuel, sans haute pression agressive. Les joints sont préservés pour éviter toute infiltration ultérieure.</p>",
        },
        {
          question: "Sur une terrasse exposée à Versailles, comment éliminez-vous mousses et lichens sans détériorer la surface ?",
          answer: "<p>Un traitement anti-mousse est appliqué après le nettoyage principal. Le produit agit en profondeur pour décoller les dépôts verts sans attaquer le matériau. Sur bois ou pierre naturelle, nous privilégions des formules respectueuses du support.</p>",
        },
        {
          question: "À Versailles, quelle fréquence recommandez-vous pour l'entretien d'une terrasse exposée aux arbres et aux salissures ?",
          answer: "<p>Une intervention annuelle suffit généralement pour les terrasses peu ombragées. En présence d'arbres ou d'une exposition nord, un passage tous les six à huit mois limite l'accumulation de mousses et maintient la surface praticable.</p>",
        },
        {
          question: "Sur une terrasse en pierre ou en bois à Versailles, utilisez-vous un nettoyage doux plutôt qu'une haute pression ?",
          answer: "<p>Oui, selon le matériau. Le bois et la pierre tendre sont nettoyés à basse pression ou par brossage pour éviter les éclats et l'usure prématurée. La haute pression est réservée aux surfaces résistantes comme le carrelage ou le béton.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement après travaux, avant état des lieux ou suite à un sinistre, avec coordination adaptée aux contraintes d'accès versaillaises.",
      whyUsBullets: [
        "Connaissance des typologies versaillaises, de l'immeuble ancien du quartier Saint-Louis aux pavillons de Montreuil.",
        "Polyvalence sur parquet, carrelage, pierre et menuiseries pour un rendu homogène sur l'ensemble du logement.",
        "Coordination anticipée avec agences, gardiens et propriétaires pour respecter les délais de remise des clés.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les appartements du quartier Bernard de Jussieu-Petit-Bois-Picardie accumulent poussières de chantier, traces d'enduit et résidus divers sur chaque surface. Les délais se resserrent, le logement doit être rendu propre, et le temps manque pour traiter chaque pièce avec la rigueur attendue par une agence ou un propriétaire exigeant.</p>\n\n<p class=\"mt-4\">Un logement correctement préparé facilite la remise des clés et évite les réserves. Dans les immeubles anciens comme dans les résidences récentes de Versailles, les parquets, carrelages et menuiseries demandent un traitement adapté pour retrouver un aspect soigné. Les pièces d'eau, souvent négligées en fin de chantier, concentrent les traces les plus visibles.</p>\n\n<p class=\"mt-4\">Notre intervention couvre l'ensemble du logement selon un plan structuré. Nous anticipons les contraintes d'accès fréquentes à Versailles — digicodes, badges, coordination avec gardien — pour intervenir dans les délais convenus sans improvisation de dernière minute.</p>",
      uniqueDeepDive: "<h3>1. Logement prêt à la remise des clés</h3>\n<p>L'objectif est un appartement ou une maison où chaque surface — sols, vitres, sanitaires, placards — présente un niveau de propreté conforme aux attentes d'un état des lieux ou d'une entrée locataire.</p>\n\n<p class=\"mt-4\">Nous commençons par un diagnostic rapide pour identifier les zones prioritaires et adapter notre organisation au type de bien.</p>\n\n<h3 class=\"mt-4\">2. Traitement complet par zone</h3>\n<p>Le dépoussiérage débute par les hauteurs : plafonds, murs, plinthes. Les sols reçoivent ensuite une aspiration puis un lavage adapté au revêtement. Cuisine et salle de bain font l'objet d'un détartrage et d'un dégraissage ciblés.</p>\n\n<p class=\"mt-4\">Les finitions — interrupteurs, poignées, radiateurs, intérieurs de placards — sont traitées en dernier pour éviter toute recontamination.</p>\n\n<h3 class=\"mt-4\">3. Contrôle et ventilation</h3>\n<p>Avant de quitter le logement, nous vérifions chaque pièce selon une liste de points. Une aération complète finalise l'intervention pour un intérieur sain et prêt à accueillir ses occupants.</p>",
      specificChallenges: [
        "Stationnement limité en centre-ville historique : véhicule d'intervention positionné en amont.",
        "Accès par digicode et badge fréquents dans les résidences versaillaises.",
        "Parquets anciens sensibles nécessitant un lavage adapté sans excès d'eau.",
        "Délais serrés avant état des lieux : organisation calée sur vos contraintes.",
        "Traces de peinture ou d'enduit après travaux à traiter sans abîmer les supports.",
      ],
      faqAdditions: [
        {
          question: "Dans le quartier Bernard de Jussieu-Petit-Bois-Picardie, comment organisez-vous une intervention urgente avant état des lieux ?",
          answer: "<p>Nous nous adaptons selon la surface et la disponibilité de nos équipes. Pour les situations urgentes, un créneau prioritaire peut être organisé après échange téléphonique, en tenant compte des contraintes d'accès propres à ce secteur résidentiel.</p>",
        },
        {
          question: "Dans les résidences versaillaises, quelle différence faites-vous entre un ménage standard et un nettoyage de fin de chantier ?",
          answer: "<p>Le ménage standard concerne un logement occupé ou vide sans travaux récents. La remise en état après chantier inclut l'élimination des poussières fines, le retrait des traces de peinture ou d'enduit, et un traitement approfondi des sols et menuiseries souvent recouverts de résidus.</p>",
        },
        {
          question: "Dans un appartement ancien de Versailles, comment intervenez-vous après un dégât des eaux ?",
          answer: "<p>Nous commençons par évaluer l'étendue des zones touchées. Le nettoyage porte sur les surfaces impactées — sols, plinthes, bas de murs — avec un séchage favorisé par ventilation. Si des traces d'humidité persistent, nous vous orientons vers un diagnostic complémentaire.</p>",
        },
        {
          question: "À Versailles, comment organisez-vous l'accès au logement quand il faut un digicode, un badge ou passer par un gardien ?",
          answer: "<p>Les modalités d'accès sont confirmées avant l'intervention : code, badge temporaire ou rendez-vous avec le gardien. Cette coordination évite tout retard le jour J et garantit une prise en charge fluide du logement dès notre arrivée.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;