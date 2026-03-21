import type { City } from "~/types/geo";

const city: City = {
  name: "Rueil-Malmaison",
  slug: "rueil-malmaison",
  postalCodes: ["92500"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Rueil-Malmaison. Du quartier d'affaires Rueil-sur-Seine aux résidences de Buzenval, une équipe locale coordonne chaque intervention selon les contraintes d'accès et les attentes des gestionnaires.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Entre le pôle tertiaire de Rueil-sur-Seine et les secteurs pavillonnaires proches du bois de Saint-Cucufa, Klinova accompagne syndics, gestionnaires et occupants dans <strong>l'entretien courant de leurs locaux</strong>. Une présence régulière, des interlocuteurs identifiés, une coordination adaptée à chaque site.</p>\
<p class=\"mt-4\">Nos équipes prennent en charge le nettoyage des sols, l'entretien des parkings souterrains, la remise en état des balcons et le traitement des surfaces textiles. Chaque intervention fait l'objet d'un suivi, avec reporting disponible pour les donneurs d'ordre qui le souhaitent.</p>\
<ul>\
  <li><strong>Planification selon vos contraintes :</strong> Horaires décalés pour les bureaux de Rueil-sur-Seine, créneaux coordonnés avec les gardiens dans les résidences du Centre-ville ou de Plaine-Gare.</li>\
  <li><strong>Matériel adapté au bâti local :</strong> Autolaveuses compactes pour les parkings souterrains, injection-extraction pour les moquettes de halls, nettoyage basse pression sur les balcons en copropriété.</li>\
  <li><strong>Interlocuteur unique :</strong> Un référent suit votre dossier, centralise les demandes et ajuste les interventions selon l'évolution de vos besoins.</li>\
</ul>",

  // citySpecificChallenges : HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution A86/N13</strong> : dépôts de suies sur les balcons et façades des immeubles exposés.",
    "Parkings souterrains fréquents en zone tertiaire : sols résine ou béton peint à entretenir régulièrement.",
    "Halls d'immeubles proches de la gare RER A soumis à un <strong>flux piéton quotidien intense</strong>.",
    "Résidences de standing avec moquettes en parties communes : entretien discret en horaires décalés.",
    "Secteurs pavillonnaires (Buzenval, Saint-Cucufa) : débris végétaux et mousses sur terrasses et balcons.",
    "Écoquartier de l'Arsenal : <strong>bâti récent</strong> avec dalles sur plots et bois composite à traiter avec précaution.",
  ],

  districts: [
    "Rueil-sur-Seine",
    "Plaine-Gare",
    "Centre-ville",
    "Buzenval",
    "Saint-Cucufa",
    "Arsenal",
    "Mont-Valérien",
    "Richelieu",
    "Belle Rive",
    "Les Mazurières",
    "Plateau",
    "Jonchère-Malmaison",
  ],

  nearbyCities: [
        "suresnes",
        "nanterre",
        "saint-cloud",
        "puteaux",
        "sevres",
        "boulogne-billancourt",
        "houilles",
        "courbevoie",
        "neuilly-sur-seine",
        "le-chesnay-rocquencourt"
      ],

  landmarks: [
    "Mairie de Rueil-Malmaison",
    "Château de la Malmaison",
    "Gare RER A Rueil-Malmaison",
    "Bois de Saint-Cucufa",
    "Quartier Rueil-sur-Seine",
    "Bords de Seine (Chemin des Impressionnistes)",
  ],

  faq: [
    {
      question: "Comment organisez-vous les interventions dans les immeubles avec gardien à Rueil-Malmaison ?",
      answer: "<p>Nous prenons contact avec le gardien ou le gestionnaire en amont pour <strong>définir les créneaux d'accès</strong> et les modalités de remise des clés ou badges. Les horaires sont ajustés selon les contraintes du site : passage des résidents, livraisons, ou jours de marché sur la place Jean Jaurès.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur un dégât ou une salissure importante ?",
      answer: "<p>Oui, nous disposons d'équipes mobilisables selon la nature de la demande et nos disponibilités. Un premier diagnostic téléphonique permet d'évaluer le matériel nécessaire et de <strong>planifier l'intervention</strong> dans les meilleurs délais.</p>",
    },
    {
      question: "Comment se déroule l'établissement d'un devis pour un immeuble ou un local professionnel ?",
      answer: "<p>Nous réalisons une visite technique gratuite pour évaluer les surfaces, les contraintes d'accès et l'état des supports. Le devis détaille ensuite les prestations, la fréquence proposée et les <strong>conditions d'intervention</strong>. Aucun engagement n'est requis avant validation écrite de votre part.</p>",
    },
    {
      question: "Gérez-vous le stationnement de vos véhicules lors des interventions en centre-ville ?",
      answer: "<p>Nos techniciens anticipent les difficultés de stationnement, notamment dans le <strong>secteur Gare</strong> ou autour du Centre-ville historique. Nous privilégions les véhicules utilitaires compacts et coordonnons si besoin avec le gestionnaire pour accéder aux cours intérieures ou aux emplacements réservés.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: inclure uniquement les services demandés
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une reprise d'activité rapide dans vos locaux.",
      whyUsBullets: [
        "Connaissance des immeubles tertiaires de Rueil-sur-Seine et de leurs contraintes d'accès sécurisé.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes velours.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des équipes en place.",
      ],
      uniqueIntro: "<p>Les traces de passage sont visibles dès l'entrée des bureaux du <strong>quartier Rueil-sur-Seine</strong> : zones de circulation grisâtres, auréoles près des postes de travail, fibres tassées dans les couloirs. Ces marques s'accumulent rapidement dans les espaces tertiaires à fort trafic, où les dalles textiles encaissent des centaines de passages quotidiens. Les salissures s'incrustent progressivement, rendant l'aspiration seule insuffisante.</p>\
<p class=\"mt-4\">Un entretien en profondeur redonne aux <strong>moquettes de bureaux et petits collectifs</strong> leur aspect d'origine. Les fibres retrouvent leur souplesse, les teintes redeviennent homogènes, et l'atmosphère des locaux gagne en qualité. Pour les sièges sociaux comme pour les cabinets du centre-ville, cette remise en état améliore l'image perçue par les visiteurs et le confort des équipes.</p>\
<p class=\"mt-4\">L'intervention s'organise en tenant compte des accès sécurisés par digicodes et des contraintes horaires propres aux environnements professionnels. Un diagnostic préalable identifie les zones prioritaires, les types de taches et les précautions à prendre selon la configuration des lieux.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\
<p>Les couloirs et halls d'accueil concentrent l'essentiel du piétinement. Ces surfaces reçoivent un traitement par injection-extraction avec plusieurs passes successives. Les fibres compactées sont brossées mécaniquement pour déloger les particules enfoncées.</p>\
\
<h3>Espaces de travail et salles de réunion</h3>\
<p>Les open-spaces et bureaux cloisonnés présentent des salissures localisées : taches de café près des postes, auréoles sous les sièges à roulettes. <strong>Un détachage ciblé</strong> précède le lavage général. Les plinthes et pieds de mobilier sont protégés avant intervention.</p>\
\
<h3>Escaliers et zones techniques</h3>\
<p>Les marches moquettées et les accès aux étages subissent une usure concentrée sur les nez de marche. Le traitement adapte la pression d'extraction à l'épaisseur du revêtement. <strong>L'humidité résiduelle est contrôlée</strong> pour permettre une circulation rapide après séchage, généralement sous 4 à 8 heures selon la ventilation des locaux.</p>",
      specificChallenges: [
        "<strong>Dalles textiles des bureaux Rueil-sur-Seine</strong> : fibres denses nécessitant une extraction puissante.",
        "Accès par badges et digicodes généralisés dans les immeubles tertiaires.",
        "Coordination avec les gestionnaires pour intervenir hors heures d'activité.",
        "<strong>Zones de passage intensif</strong> entre gare RER A et pôle d'affaires à traiter en priorité.",
        "Séchage maîtrisé pour remise en service rapide des espaces de travail.",
      ],
      faqAdditions: [
        {
          question: "Nos bureaux à Rueil-sur-Seine ont des escaliers étroits : comment gérez‑vous le transport du matériel pour nettoyer la moquette ?",
          answer: "<p>Le matériel d'injection-extraction se compose d'<strong>éléments modulables</strong>, transportables manuellement dans les cages d'escalier des immeubles tertiaires. Les flexibles permettent d'atteindre les étages depuis un point central, limitant les allers-retours. La configuration est évaluée lors du diagnostic pour adapter l'organisation.</p>",
        },
        {
          question: "Après shampouinage en open-space Rueil-sur-Seine, en combien de temps les locaux sont‑ils réutilisables sans humidité résiduelle ?",
          answer: "<p>Le temps de séchage varie selon <strong>l'épaisseur des dalles textiles</strong> et la ventilation des bureaux. En conditions normales, comptez 4 à 8 heures pour une reprise d'activité confortable. Une extraction maximale en fin d'intervention réduit l'humidité résiduelle et accélère le processus.</p>",
        },
        {
          question: "Pour des dalles textiles de bureaux à Rueil, quelle méthode limite le risque d'abîmer les fibres tout en nettoyant efficacement ?",
          answer: "<p>L'injection-extraction reste la technique la plus adaptée aux dalles textiles professionnelles. La pression et la température sont ajustées selon la densité des fibres. Un test préalable sur une zone peu visible confirme la compatibilité avant traitement général de la surface.</p>",
        },
        {
          question: "Quelle différence pratique existe‑t‑il entre shampouinage et extraction vapeur pour les moquettes de bureaux à Rueil ?",
          answer: "<p>Le shampouinage par injection-extraction projette une solution nettoyante puis l'aspire avec les salissures dissoutes. L'extraction vapeur utilise la chaleur pour décoller les particules. Pour les dalles textiles de bureaux, l'injection-extraction offre généralement un meilleur compromis entre efficacité et temps de séchage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens à Rueil-Malmaison, avec gestion des eaux conforme et coordination adaptée aux contraintes d'accès des copropriétés et sites tertiaires.",
      whyUsBullets: [
        "Connaissance des parkings de Rueil-Malmaison, qu'ils soient tertiaires à Rueil-sur-Seine ou résidentiels en copropriété.",
        "Autolaveuse professionnelle et protocole strict de gestion des eaux, adapté aux exigences locales.",
        "Coordination avec syndics et gestionnaires pour planifier l'intervention sans bloquer l'accès des usagers.",
      ],
      uniqueIntro: "<p>Comment maintenir un parking propre quand le trafic ne faiblit jamais ? Au <strong>Centre Commercial E.Leclerc de Rueil-Malmaison</strong>, les véhicules se succèdent du matin au soir. Les traces de pneus, les coulures d'huile et les poussières de freinage s'accumulent sur les allées de circulation. Sans intervention régulière, le sol perd son adhérence et l'image du site se dégrade.</p>\n<p class=\"mt-4\">Un lavage mécanisé redonne aux surfaces leur aspect d'origine. Les <strong>sols en béton peint ou résine</strong>, fréquents dans les parkings tertiaires et les copropriétés locales, retrouvent leur netteté. Les résidents ou clients perçoivent immédiatement la différence : un espace soigné inspire confiance et limite les réclamations auprès du gestionnaire.</p>\n<p class=\"mt-4\">La proximité de l'A86 et de la N13 génère un dépôt constant de suies et particules fines sur les niveaux aériens comme souterrains. Chaque chantier intègre donc un plan de <strong>gestion des eaux de lavage</strong> pour éviter tout rejet non conforme et préserver les évacuations existantes.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et circulation sécurisée</h3>\n<p>L'objectif est de restituer un revêtement propre, antidérapant et visuellement homogène. Les taches d'huile anciennes disparaissent, les marquages au sol redeviennent lisibles, et les usagers circulent sans risque de glissade.</p>\n\n<h3>Diagnostic et préparation du site</h3>\n<p>Avant toute action, nous identifions le type de revêtement — béton brut, peinture ou résine — et l'état des regards d'évacuation. Un balayage préalable élimine les débris grossiers. Le balisage sécurise les zones de travail et oriente la rotation des véhicules si le parking reste partiellement accessible.</p>\n\n<h3>Lavage mécanisé et gestion des eaux</h3>\n<p>L'autolaveuse traite les surfaces planes tandis que la haute pression associée à un dégraissant cible les zones critiques : rampes, angles morts, pieds de murs et rigoles. Les eaux de lavage sont dirigées vers les évacuations prévues, sans rejet sauvage. Un dépoussiérage des blocs lumineux ou tuyauteries complète l'intervention si nécessaire.</p>",
      specificChallenges: [
        "Dépôts de suies liés à l'A86 : les parkings aériens noircissent rapidement sans entretien régulier.",
        "Taches d'huile anciennes sur béton peint : un dégraissant ciblé est indispensable pour les éliminer.",
        "Rotation des véhicules en parking commercial : le balisage permet de travailler par zones successives.",
        "Évacuations parfois obstruées dans les copropriétés anciennes : diagnostic préalable obligatoire.",
        "Rampes d'accès glissantes après pluie : le traitement antidérapant sécurise la circulation.",
      ],
      faqAdditions: [
        {
          question: "Le parking du centre commercial a des taches d'huile anciennes : quelle méthode élimine ces traces tenaces efficacement ?",
          answer: "<p>Nous appliquons un dégraissant professionnel sur chaque zone souillée avant le passage de l'autolaveuse. Le produit agit quelques minutes, puis la brosse rotative décolle les résidus incrustés. Les taches les plus tenaces peuvent nécessiter un second passage ciblé à la haute pression.</p>",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans un parking souterrain en zone tertiaire à Rueil-Malmaison ?",
          answer: "<p>Avant l'intervention, nous vérifions l'état des regards et rigoles. Les eaux chargées sont dirigées vers les évacuations prévues, jamais rejetées en surface ou dans le réseau pluvial. Si le système d'évacuation est limité, nous adaptons le débit et travaillons par sections pour éviter tout débordement.</p>",
        },
        {
          question: "Pour un parking de centre commercial, quels horaires d'intervention minimisent la gêne pour la clientèle et le personnel ?",
          answer: "<p>Nous privilégions les créneaux de nuit ou tôt le matin, avant l'ouverture des magasins. Si une fermeture totale n'est pas possible, le chantier se déroule par zones balisées, permettant aux véhicules de stationner sur les secteurs non concernés. La coordination se fait directement avec le gestionnaire du site.</p>",
        },
        {
          question: "Intervenez-vous différemment sur parking souterrain et aérien à Rueil, notamment pour évacuation poussières et ventilation ?",
          answer: "<p>En souterrain, la ventilation limitée impose un travail par sections pour éviter la stagnation de l'humidité. En aérien, l'exposition aux intempéries et aux suies de l'A86 nécessite souvent un balayage renforcé avant le lavage. Le matériel reste identique, mais le séquençage s'adapte à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon ou loggia, avec traitement des dépôts incrustés, protection des menuiseries et gestion contrôlée des eaux de rinçage pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des contraintes locales : loggias de l'Arsenal, balcons exposés aux dépôts liés à l'A86 et aux espaces verts proches.",
        "Maîtrise des supports récents : pression ajustée sur dalles plots, produits compatibles carrelage grès, traitement joints sans dégradation.",
        "Organisation respectueuse du voisinage : gestion anti-coulures, coordination avec gardiens, intervention planifiée selon vos disponibilités.",
      ],
      uniqueIntro: "<p>Dans le secteur de l'écoquartier de l'Arsenal, les loggias et balcons récents accumulent rapidement poussières fines et traces verdâtres. L'exposition aux particules liées à la proximité de l'A86 laisse un voile grisâtre sur les surfaces, tandis que l'humidité favorise l'apparition de mousses dans les angles. Ces dépôts s'incrustent progressivement dans les joints et ternissent l'aspect général de l'espace extérieur.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change l'usage quotidien : on sort plus volontiers, on installe table et chaises sans hésitation. Sur les résidences récentes équipées de carrelage grès ou de dalles sur plots, un entretien adapté préserve aussi la longévité des matériaux. Les traces tenaces disparaissent, les joints retrouvent leur teinte d'origine, et l'ensemble redevient agréable à utiliser dès les premiers beaux jours.</p>\n<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic initial, d'une protection systématique des menuiseries et plantes, puis d'un protocole de traitement ajusté au support. Les règlements de copropriété imposant souvent des restrictions sur le rejet d'eau sont pris en compte dès la planification.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Avant toute action, le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et portes-fenêtres reçoivent une protection pour éviter les projections. Les gros débris, feuilles mortes et terre accumulée sont retirés manuellement.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué sur le carrelage grès ou les dalles. Le brossage, manuel ou mécanique selon l'état, décolle les dépôts verts et les salissures incrustées dans les joints. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée.</p>\n<p class=\"mt-4\">Les vitrages de loggia bénéficient d'un passage spécifique si nécessaire.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>Le rinçage s'effectue à pression contrôlée pour respecter les joints fragiles. L'eau est gérée de manière à éviter les coulures chez les voisins du dessous, conformément aux exigences fréquentes des règlements de copropriété. Un temps de séchage est respecté avant la remise en place du mobilier, accompagné de conseils d'entretien pour prolonger le résultat.</p>",
      specificChallenges: [
        "Dépôts verts fréquents sur les balcons proches du Parc de l'Amitié et des zones boisées.",
        "Règlements de copropriété à l'Arsenal limitant souvent le rejet d'eau en façade.",
        "Dalles sur plots en résidences récentes nécessitant une pression contrôlée pour préserver les joints.",
        "Accès via paliers d'étage avec digicodes : coordination préalable indispensable.",
        "Pollution routière (A86, N13) laissant un voile grisâtre sur les surfaces exposées.",
      ],
      faqAdditions: [
        {
          question: "Sur les loggias de l'Arsenal, comment nettoyez-vous le carrelage sans abîmer les joints ni la finition ?",
          answer: "<p>Nous utilisons un produit au pH neutre adapté au carrelage grès, appliqué avant un brossage mécanique doux. La pression de rinçage reste modérée pour préserver l'intégrité des joints. Cette approche évite les micro-fissures tout en éliminant efficacement les salissures incrustées sur ces surfaces récentes.</p>",
        },
        {
          question: "Si le règlement de copropriété interdit le rejet d'eau, quelles méthodes d'entretien de balcon utilisez-vous à l'Arsenal ?",
          answer: "<p>Nous adaptons notre méthode avec un rinçage minimal et une aspiration immédiate des eaux résiduelles. Des bâches de récupération canalisent les écoulements pour éviter toute projection vers les étages inférieurs. Cette organisation respecte les contraintes fréquentes dans les résidences récentes tout en garantissant un résultat satisfaisant.</p>",
        },
        {
          question: "Les balcons proches du Parc de l'Amitié accumulent mousse : quel traitement préventif conseillez-vous pour limiter la réapparition ?",
          answer: "<p>Après le retrait des dépôts verts, nous appliquons un traitement anti-mousse à effet rémanent qui freine la réapparition pendant plusieurs mois. Un entretien saisonnier, idéalement au printemps et à l'automne, limite l'incrustation. L'exposition ombragée de certains balcons proches des espaces verts justifie cette régularité.</p>",
        },
        {
          question: "Pour des dalles sur plots en résidence récente, pourquoi éviter le nettoyage à haute pression sur le balcon et quelles alternatives ?",
          answer: "<p>La haute pression risque de déplacer les dalles ou d'endommager les joints périphériques. Nous privilégions un brossage mécanique combiné à un rinçage basse pression, suffisant pour déloger les salissures sans fragiliser le système de pose. Cette méthode préserve la stabilité des dalles tout en obtenant un rendu propre et uniforme.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour limiter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Rueil-Malmaison, notamment les immeubles riverains de la Seine et des parcs.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide certifiée.",
        "Évacuation sécurisée des déchets et coordination discrète pour limiter la gêne auprès du voisinage.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons exposés aux populations d'oiseaux. Le long des <strong>bords de Seine et du Chemin des Impressionnistes</strong>, les pigeons trouvent des points de repos sur les garde-corps et rebords de fenêtres. Les résidents constatent alors des couches épaisses, une odeur persistante qui imprègne le linge étendu, et une gêne croissante à utiliser cet espace extérieur.</p>\n<p class=\"mt-4\">Les <strong>corniches et façades anciennes du centre-ville</strong> subissent également ces dégradations. L'acidité des fientes attaque progressivement le béton, la peinture et les joints. Au-delà de l'aspect visuel dégradé, c'est la possibilité de profiter de son balcon qui disparaît : impossible d'y installer une table, d'y faire sécher du linge ou simplement d'ouvrir les fenêtres sans appréhension.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un espace sain. La <strong>proximité des parcs et berges</strong> nécessite un traitement adapté incluant désinfection complète et évacuation sécurisée des déchets contaminés.</p>",
      uniqueDeepDive: "<h3>Protection et confinement de la zone</h3>\n<p>L'équipe arrive équipée de combinaisons jetables, masques FFP2, lunettes et gants. Le balcon est bâché pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sèches libèrent des particules en suspension. L'humidification préalable neutralise ce risque avant toute manipulation.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Les dépôts sont ramassés manuellement et conditionnés en sacs étanches. Le sol, les garde-corps, les vitrages et murs mitoyens sont ensuite traités.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les résidus organiques.</p>\n\n<h3>Rinçage et recommandations</h3>\n<p>Un rinçage contrôlé finalise l'intervention. Un délai d'aération est conseillé avant de réutiliser le balcon.</p>\n<p class=\"mt-4\">Si nécessaire, nous proposons l'installation de pics anti-pigeons sur les rebords ou de filets de protection pour limiter les retours. Les déchets sont évacués dans le respect des normes sanitaires.</p>",
      specificChallenges: [
        "Balcons côté Seine : exposition permanente aux populations de pigeons nichant sur les berges.",
        "Corniches anciennes du centre-ville fragilisées par l'acidité des fientes accumulées.",
        "Règlements de copropriété restreignant les rejets d'eau en façade lors du rinçage.",
        "Nécessité de protéger l'intérieur du logement pendant le confinement et l'humidification.",
        "Coordination avec le voisinage pour éviter les nuisances olfactives durant l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Des fientes abondantes sur un balcon côté Seine : quelles sont les premières mesures d'urgence que vous mettez en place ?",
          answer: "<p>Nous sécurisons d'abord la zone avec un bâchage complet pour éviter toute dispersion vers l'intérieur. L'humidification immédiate des dépôts empêche l'envol de particules contaminées. L'équipe intervient en tenue de protection intégrale avant de procéder au ramassage et à la désinfection.</p>",
        },
        {
          question: "Pour le nettoyage de fientes sur corniches anciennes, quels EPI et protocoles appliquez‑vous pour protéger l'équipe et le voisinage ?",
          answer: "<p>Chaque intervenant porte combinaison jetable, masque FFP2, lunettes et gants. Le périmètre est confiné pour éviter toute projection vers les logements voisins. Les fientes sont humidifiées avant manipulation, puis collectées en sacs étanches. Ce protocole limite les risques d'inhalation pour tous.</p>",
        },
        {
          question: "Après nettoyage des fientes sur balcon riverain, quelle désinfection réalisez‑vous pour éliminer risques sanitaires résiduels ?",
          answer: "<p>Nous appliquons un produit virucide et bactéricide homologué sur l'ensemble des surfaces traitées. Le temps de contact recommandé par le fabricant est respecté pour garantir l'élimination des agents pathogènes. Un rinçage contrôlé finalise l'opération avant la remise en service du balcon.</p>",
        },
        {
          question: "Sur une façade marché/zone piétonne, comment organisez‑vous l'évacuation des déchets suite au nettoyage de fientes ?",
          answer: "<p>Les déchets sont conditionnés en sacs étanches dès leur collecte. Nous planifions l'évacuation en dehors des horaires de marché pour éviter toute gêne. Le véhicule stationne au plus près du point d'intervention, et les sacs sont transportés sans transit par les espaces publics fréquentés.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Rafraîchissement complet de vos canapés, tapis et matelas à domicile, avec extraction des salissures profondes et séchage maîtrisé pour retrouver un intérieur sain.",
      whyUsBullets: [
        "Connaissance des résidences collectives et pavillons de Rueil-Malmaison, accès coordonné avec gardiens ou particuliers.",
        "Détachage ciblé selon nature des taches et type de fibre, extraction contrôlée pour un séchage rapide.",
        "Intervention planifiée avec véhicule adapté, remise en service du mobilier après séchage complet selon conditions.",
      ],
      uniqueIntro: "<p>Dans les résidences collectives comme La Fouilleuse ou les pavillons des secteurs limitrophes, les textiles d'ameublement accumulent au fil des mois poussières, traces d'usage et parfois odeurs tenaces. Un canapé utilisé quotidiennement par toute la famille finit par montrer des zones grisées sur les accoudoirs, des auréoles sur les assises. Les tapis des entrées ou des chambres d'enfants subissent le même sort, piégeant allergènes et résidus invisibles à l'œil nu.</p>\n<p class=\"mt-4\">Retrouver des textiles propres change le confort au quotidien. Les couleurs reviennent, l'odeur de renfermé disparaît, et les personnes sensibles respirent mieux. Dans les logements familiaux de Rueil-Malmaison, souvent des T3 ou plus grands, ces surfaces représentent des mètres carrés importants qu'un simple aspirateur ne suffit pas à assainir en profondeur.</p>\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic textile préalable, un détachage adapté à chaque fibre, puis une extraction qui retire l'eau sale sans détremper. Le stationnement parfois contraint en centre-ville nous amène à prévoir un véhicule léger et une manutention adaptée pour accéder rapidement à votre domicile.</p>",
      uniqueDeepDive: "<h3>Assises et accoudoirs</h3>\n<p>Les zones de contact fréquent concentrent les salissures corporelles et les taches alimentaires. Nous identifions d'abord le type de tissu — coton, synthétique, velours — puis appliquons un pré-traitement enzymatique sur les marques visibles. L'injection-extraction retire ensuite la solution chargée de résidus sans gorger le rembourrage.</p>\n\n<h3>Tapis et surfaces au sol</h3>\n<p>Les fibres des tapis retiennent poussières fines et allergènes en profondeur. Après aspiration minutieuse, nous traitons les taches localisées avant de passer l'ensemble à l'extraction. La pression et la température sont ajustées selon l'épaisseur et la composition du textile pour éviter toute déformation.</p>\n\n<h3>Matelas et finitions</h3>\n<p>Le matelas reçoit un traitement similaire, avec une attention particulière aux bordures et aux coutures où s'accumulent acariens et cellules mortes. Une fois l'extraction terminée, nous vérifions le taux d'humidité résiduel et vous indiquons le délai de séchage selon la ventilation de la pièce.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés familiaux : café, jus, traces d'animaux incrustées depuis des mois.",
        "Tapis épais dans les séjours : fibres denses qui retiennent poussières et allergènes en profondeur.",
        "Accès parfois contraint en centre-ville : stationnement limité, nécessité d'un véhicule léger.",
        "Textiles variés dans un même logement : adapter la méthode à chaque support sans risque de décoloration.",
        "Séchage à anticiper selon la saison et la ventilation de l'appartement.",
      ],
      faqAdditions: [
        {
          question: "Comment votre prestation élimine‑t‑elle les acariens et allergènes sur un canapé tissu en résidence collective ?",
          answer: "<p>L'injection-extraction atteint les couches profondes du rembourrage où se logent acariens et poussières fines. La solution nettoyante déloge ces particules, puis l'aspiration puissante les évacue avec l'eau sale. Après séchage complet, le textile retrouve une hygiène améliorée, appréciable pour les occupants sensibles.</p>",
        },
        {
          question: "En cas de tache d'urine ancienne sur canapé, quelle méthode garantit la neutralisation des odeurs à long terme ?",
          answer: "<p>Nous appliquons un pré-traitement enzymatique qui décompose les composés organiques responsables de l'odeur. L'extraction retire ensuite les résidus en profondeur. Cette approche évite que l'odeur réapparaisse après quelques jours, contrairement à un simple masquage par parfum.</p>",
        },
        {
          question: "Comment adaptez‑vous la méthode selon textile (laine, synthétique) pour nettoyer canapé sans décoloration ?",
          answer: "<p>Avant toute intervention, nous testons la réaction du tissu sur une zone cachée. La température de l'eau et la pression d'injection sont ensuite ajustées : plus douces pour la laine ou le velours, plus soutenues pour les synthétiques résistants. Cette précaution préserve les couleurs et la texture d'origine.</p>",
        },
        {
          question: "Pour un tapis très taché en résidence, proposez‑vous un détachage local ou un nettoyage complet, et pourquoi ?",
          answer: "<p>Cela dépend de l'étendue des salissures. Si les taches sont concentrées sur quelques zones, un détachage ciblé suffit souvent. Quand l'ensemble du tapis présente un voile grisé ou des odeurs diffuses, le nettoyage complet par injection-extraction donne un résultat homogène et plus durable.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse à Rueil-Malmaison, avec traitement adapté au support et application anti-mousse pour un extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses ombragées près du Bois de Saint-Cucufa, sujettes aux mousses persistantes.",
        "Adaptation du traitement selon le support : pression ajustée sur bois, décapage doux sur pierre poreuse.",
        "Protection systématique du mobilier et des végétaux, gestion de l'écoulement sans nuisance pour le voisinage.",
      ],
      uniqueIntro: "<p>Les dépôts verts et traces sombres s'accumulent sur les terrasses des secteurs proches du <strong>Bois de Saint-Cucufa</strong>, où l'ombre persistante favorise l'apparition de mousses et lichens. Ces salissures rendent les surfaces glissantes et altèrent progressivement l'aspect du revêtement, qu'il s'agisse de lames ou de dalles posées sur plots.</p>\n<p class=\"mt-4\">Un nettoyage adapté redonne à votre espace extérieur son aspect d'origine et supprime les zones à risque de glissade. Sur les <strong>supports variés présents localement — bois composite, pierre naturelle, dalles sur plots</strong> — chaque matériau nécessite une approche spécifique pour éviter toute dégradation. Le résultat : une terrasse agréable à utiliser dès les beaux jours, sans crainte pour les enfants ou les invités.</p>\n<p class=\"mt-4\">L'intervention tient compte de l'<strong>exposition et de la saisonnalité</strong>, avec un accès adapté selon qu'il s'agisse d'un jardin privatif ou d'un toit-terrasse. Un diagnostic préalable permet d'identifier les zones les plus touchées et de définir le traitement approprié.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier de jardin et les jardinières sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection pour éviter les projections. Un balayage préalable élimine feuilles mortes, terre et débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour le bois composite, désincrustant pour la pierre naturelle. Le brossage — manuel ou mécanique selon la surface — décolle mousses et salissures incrustées. La haute pression contrôlée intervient uniquement sur les matériaux qui la supportent.</p>\n\n<h3>Rinçage et finition</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants, en protégeant les plantations adjacentes. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts. La terrasse sèche naturellement et retrouve un usage normal sous quelques heures selon les conditions météo.</p>",
      specificChallenges: [
        "Mousses tenaces sur les terrasses exposées nord, proches des zones boisées de Saint-Cucufa.",
        "Lames en bois composite qui noircissent et deviennent glissantes après l'hiver.",
        "Dalles en pierre naturelle poreuse nécessitant un nettoyage sans haute pression agressive.",
        "Accès parfois contraint sur les toits-terrasses des résidences récentes de l'Arsenal.",
        "Gestion de l'écoulement d'eau sur terrasses surélevées pour éviter les coulures chez les voisins.",
      ],
      faqAdditions: [
        {
          question: "Ma terrasse en bois composite près du Bois de Saint‑Cucufa noircit : quelle méthode de nettoyage préconisez‑vous sans l'abîmer ?",
          answer: "<p>Le bois composite supporte mal la haute pression directe. Nous appliquons un nettoyant spécifique qui décolle les dépôts organiques, suivi d'un brossage mécanique doux. Le rinçage s'effectue à pression modérée pour préserver les lames et leur finition d'origine.</p>",
        },
        {
          question: "Les dalles de terrasse colonisées par mousse nécessitent quel traitement anti‑mousse durable dans les secteurs ombragés ?",
          answer: "<p>Après décapage des mousses existantes, nous appliquons un traitement anti-mousse préventif qui freine la recolonisation pendant plusieurs mois. Ce produit agit progressivement et limite le retour des dépôts verts, particulièrement utile sur les zones peu ensoleillées.</p>",
        },
        {
          question: "Sur terrasse en pierre naturelle, faut‑il éviter la haute pression et quelles alternatives proposez‑vous pour décapage doux ?",
          answer: "<p>La pierre poreuse peut se dégrader sous une pression trop forte. Nous privilégions un décapage chimique doux associé à un brossage manuel, puis un rinçage à pression contrôlée. Cette méthode préserve la texture et l'intégrité du matériau sans creuser les joints.</p>",
        },
        {
          question: "Quelle est la meilleure période pour un démoussage efficace de terrasse à Rueil afin d'éviter reprise rapide de la mousse ?",
          answer: "<p>Le printemps reste la période idéale : les mousses sont gorgées d'humidité et se décollent plus facilement. Intervenir avant l'été permet de profiter pleinement de votre extérieur pendant la belle saison et d'appliquer un traitement préventif efficace.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux vitres, avec coordination des accès et respect des délais imposés par l'agence ou le propriétaire.",
      whyUsBullets: [
        "Connaissance des typologies locales : appartements anciens du centre, programmes neufs de l'Arsenal, maisons de Buzenval.",
        "Polyvalence sur tous les supports : parquet, carrelage, pierre, grandes surfaces vitrées, sans risque de dégradation.",
        "Coordination fluide avec agences et artisans : récupération de clés, passage après travaux, remise dans les délais.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable en quelques heures quand l'état des lieux approche et que les derniers travaux viennent de s'achever ? Sur l'axe de l'avenue Napoléon Bonaparte et dans les secteurs proches de la gare, les rotations locatives s'enchaînent. Les agences immobilières attendent un logement prêt à la visite, sans traces de peinture ni poussière de chantier sur les plinthes.</p>\n<p class=\"mt-4\">Un nettoyage complet transforme un bien livré brut en espace habitable. Les parquets massifs du centre-ville retrouvent leur éclat, les carrelages des résidences récentes perdent leur voile de ciment, et les grandes baies vitrées de l'écoquartier laissent enfin passer la lumière. Le locataire entrant découvre un logement propre, le propriétaire évite les litiges sur l'état de sortie.</p>\n<p class=\"mt-4\">L'intervention se cale sur vos contraintes : récupération des clés auprès du gardien, passage après les artisans, remise des accès à l'agence. Chaque étape est planifiée pour tenir le délai convenu, même avec un digicode à gérer et un marché locatif qui n'attend pas.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à habiter</h3>\n<p>Le résultat attendu : sols sans traces, vitres transparentes, sanitaires désinfectés, placards vidés de toute poussière. Le bien peut accueillir un état des lieux ou une première visite sans réserve.</p>\n\n<h3>Diagnostic et préparation ciblée</h3>\n<p>Avant toute action, nous identifions la nature de l'intervention : fin de chantier avec résidus de peinture, état des lieux avec nettoyage approfondi, ou remise en état après sinistre. Les surfaces fragiles sont protégées, les gravats évacués si nécessaire.</p>\n\n<h3>Nettoyage méthodique par zone</h3>\n<p>Les pièces d'eau passent en premier : sanitaires détartrés, faïences dégraissées, robinetterie polie. Puis les pièces sèches : dépoussiérage des plafonds aux plinthes, lavage des sols adapté au revêtement, vitres intérieures. Les finitions concernent poignées, interrupteurs et intérieurs de placards. Un contrôle final garantit qu'aucun détail n'a été oublié.</p>",
      specificChallenges: [
        "Résidus de chantier sur parquet massif : décapage doux sans altérer la finition.",
        "Voile de ciment sur carrelage neuf : traitement acide contrôlé avant remise des clés.",
        "Accès par digicode et gardien : coordination préalable indispensable.",
        "Grandes baies vitrées de l'écoquartier : nettoyage intérieur complet, séchage sans traces.",
        "Délai serré avant état des lieux : intervention planifiée au plus près de la date.",
      ],
      faqAdditions: [
        {
          question: "Pour un nettoyage fin de chantier livré à l'Arsenal, quelles étapes garantissent remise en état prête à la visite d'état des lieux ?",
          answer: "<p>Nous commençons par l'évacuation des gravats et la protection des sols. Puis vient le dépoussiérage complet, le retrait des traces de peinture et d'enduit, le lavage des sols adapté au revêtement, et le nettoyage des vitres. Un contrôle final vérifie chaque pièce avant remise des clés.</p>",
        },
        {
          question: "Comment estimez-vous le tarif pour un état des lieux sur un appartement avenue Napoléon Bonaparte de 80 m² ?",
          answer: "<p>Nous évaluons la surface, le type d'intervention (fin de chantier, état des lieux, sinistre) et l'état général du bien. Un appartement de 80 m² en sortie de travaux demande plus de temps qu'un grand ménage classique. Le devis détaille chaque poste pour une estimation transparente.</p>",
        },
        {
          question: "Après un dégât des eaux dans un appartement, quelles interventions prioritaires réalisez‑vous pour limiter dommages et odeurs ?",
          answer: "<p>L'extraction de l'eau résiduelle passe en premier, suivie du séchage accéléré des surfaces. Nous traitons ensuite les zones touchées par l'humidité pour prévenir les moisissures. Une désinfection ciblée élimine les odeurs persistantes et prépare le logement à une remise en état complète.</p>",
        },
        {
          question: "Lors d'un ménage fin de chantier, comment coordonnez‑vous l'intervention avec l'agence immobilière et les artisans sur place ?",
          answer: "<p>Nous calons notre passage après la fin des travaux, en lien direct avec l'agence ou le propriétaire. La récupération des clés ou du code d'accès est organisée en amont. Si des retouches sont encore en cours, nous adaptons notre planning pour intervenir dès que le logement est libéré.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;