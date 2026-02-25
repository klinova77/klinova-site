import type { City } from "~/types/geo";

const city: City = {
  name: "Fontenay-aux-Roses",
  slug: "fontenay-aux-roses",
  postalCodes: ["92260"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Fontenay-aux-Roses. Du secteur Parc-Centre aux résidences des Blagis, une équipe locale adapte ses méthodes au bâti varié de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro: "<p>Traversée par la Coulée Verte du Sud Parisien et site historique du CEA, Fontenay-aux-Roses combine habitat résidentiel dense et activité tertiaire. Klinova s'y positionne comme partenaire de proximité pour les syndics, gestionnaires et occupants soucieux d'un cadre de vie entretenu.</p>\n<p class=\"mt-4\">Notre approche repose sur une coordination rigoureuse entre interventions techniques et contraintes d'accès. Reporting disponible sur demande, planification adaptée aux spécificités de chaque copropriété ou site professionnel.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Équipe basée en Île-de-France, délais d'intervention courts pour les demandes urgentes ou les chantiers programmés sur la commune.</li>\n  <li><strong>Adaptation au bâti :</strong> Méthodes ajustées selon les configurations — halls étroits du vieux centre, parkings souterrains des résidences Scarron, ou espaces tertiaires sécurisés.</li>\n  <li>Coordination simplifiée : un interlocuteur unique pour organiser les accès, informer les occupants et assurer le suivi des prestations réalisées.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> fréquents dans les résidences Blagis et Scarron : traces d'huile, poussières de roulement.",
    "Proximité de la <strong>Coulée Verte</strong> : dépôts organiques et mousses sur balcons exposés nord.",
    "Halls d'immeubles anciens du centre avec <strong>escaliers étroits</strong> et revêtements textiles à entretenir.",
    "Flux piétons importants autour de la <strong>gare RER B</strong> : salissures rapides des parties communes.",
    "Rues étroites et zones bleues : <strong>stationnement contraint</strong> pour les véhicules d'intervention.",
    "Accès sécurisés généralisés : coordination préalable avec gardiens ou syndics indispensable.",
  ],

  // Texte brut uniquement
  districts: [
    "Parc-Centre",
    "Les Blagis",
    "Scarron-Sorrières",
    "Ormeaux-Renards",
    "Plateau-Petit-Chambord",
  ],

  nearbyCities: [
    "Châtillon",
    "Bagneux",
    "Bourg-la-Reine",
    "Sceaux",
    "Le Plessis-Robinson",
    "Clamart",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Fontenay-aux-Roses",
    "Gare RER B Fontenay-aux-Roses",
    "CEA Fontenay-aux-Roses",
    "Coulée Verte du Sud Parisien",
    "Parc Sainte-Barbe",
    "Place de la Cavée",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les copropriétés avec gardien à Fontenay-aux-Roses ?",
      answer: "<p>Nous prenons contact avec le gardien ou le syndic en amont pour <strong>définir les créneaux adaptés</strong> et récupérer les accès nécessaires. Cette coordination préalable évite les allers-retours et garantit une intervention fluide, notamment dans les résidences des quartiers Scarron ou Blagis où les accès sont sécurisés par badge.</p>",
    },
    {
      question: "Quel délai prévoir pour une demande de devis sur la commune ?",
      answer: "<p>Après réception de votre demande, nous revenons vers vous sous 24 à 48 heures avec une <strong>proposition détaillée</strong>. Si une visite technique s'avère nécessaire — parking souterrain, surface importante — nous la programmons rapidement pour affiner le chiffrage avant validation.</p>",
    },
    {
      question: "Intervenez-vous en urgence pour des situations imprévues ?",
      answer: "<p>Oui, nous traitons les demandes urgentes selon disponibilité. <strong>Dégât des eaux</strong>, souillure accidentelle dans un hall ou besoin de remise en état rapide : contactez-nous pour évaluer la faisabilité d'une intervention sous 24 à 72 heures selon le type de prestation.</p>",
    },
    {
      question: "Le stationnement pose-t-il problème pour vos équipes en centre-ville de Fontenay-aux-Roses ?",
      answer: "<p>Le secteur autour de la Place de la Cavée et de la gare RER présente effectivement des <strong>contraintes de stationnement</strong>. Nos équipes anticipent ce point en identifiant les emplacements disponibles ou en sollicitant une autorisation temporaire auprès du syndic pour accéder aux cours intérieures.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services
  services: [
    // 1) moquettes
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec un séchage maîtrisé pour limiter l'interruption d'activité dans vos locaux ou parties communes.",
      whyUsBullets: [
        "Connaissance des configurations locales : bureaux tertiaires du secteur CEA, copropriétés du centre et résidences Scarron.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles comme aux moquettes bouclées épaisses.",
        "Interventions planifiées hors heures de bureau ou en coordination avec le gardien pour limiter la gêne.",
      ],
      uniqueIntro: "<p>Dans le secteur du <strong>CEA</strong> et le long de l'axe desservi par le RER B, les bureaux et laboratoires accumulent rapidement poussières fines et traces de passage. Les dalles textiles des open spaces perdent leur tenue, tandis que les couloirs de circulation concentrent un grisaillement progressif difficile à masquer par un simple aspirateur.</p>\n<p class=\"mt-4\">Un entretien régulier redonne aux fibres leur aspect d'origine et limite l'encrassement profond qui finit par altérer la texture. Dans les <strong>petits collectifs des années 60-70</strong>, les escaliers moquettés présentent souvent des taches anciennes sur moquette bouclée : café renversé, traces de chaussures, résidus tenaces. Un détachage ciblé suivi d'une extraction permet de retrouver une propreté visible sans agresser le support.</p>\n<p class=\"mt-4\">Le flux quotidien de salariés et le transit piéton lié à la gare amplifient l'usure des revêtements textiles. Une intervention structurée, avec diagnostic préalable et protections adaptées, garantit un résultat durable tout en respectant vos contraintes d'accès et d'horaires.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\
<p>Les couloirs et halls d'entrée reçoivent le plus fort trafic. Nous commençons par une aspiration approfondie, puis appliquons un pré-détachant sur les zones marquées avant injection-extraction. Les plinthes et bas de murs sont protégés par un film.</p>\
\
<h3>Espaces de travail et bureaux</h3>\
<p>Les dalles textiles des open spaces nécessitent <strong>plusieurs passes croisées</strong> pour déloger les particules incrustées entre les fibres. Le réglage de pression s'adapte à l'épaisseur du revêtement. Les zones sous bureaux, souvent négligées, font l'objet d'une attention particulière.</p>\
\
<h3>Escaliers et parties communes</h3>\
<p>Les marches moquettées concentrent usure et taches anciennes. Chaque marche est traitée individuellement avec <strong>extraction renforcée</strong> sur les nez de marche. Le temps de séchage varie selon la ventilation du lieu : nous indiquons une estimation réaliste et conseillons un balisage temporaire pour éviter le piétinement prématuré.</p>",
      specificChallenges: [
        "<strong>Dalles textiles des bureaux CEA</strong> : encrassement rapide lié au flux de personnel.",
        "Escaliers étroits du vieux centre : accès limité pour le matériel d'extraction.",
        "Moquettes bouclées des copropriétés années 70 : taches anciennes incrustées en profondeur.",
        "<strong>Stationnement compliqué</strong> autour de la Place de la Cavée : organisation logistique à anticiper.",
        "Digicodes généralisés : coordination préalable indispensable avec syndic ou gardien.",
      ],
      faqAdditions: [
        {
          question: "Les dalles textiles des bureaux proches du CEA supportent-elles un nettoyage par injection-extraction sans risque pour les fibres ?",
          answer: "<p>Les dalles textiles professionnelles sont conçues pour résister à l'entretien mécanisé. Nous adaptons la pression d'injection et le débit d'extraction à l'épaisseur du revêtement. <strong>Un test préalable</strong> sur une zone peu visible confirme la bonne tenue des fibres avant de traiter l'ensemble de la surface.</p>",
        },
        {
          question: "Comment éliminer des taches anciennes sur la moquette d'un escalier dans une copropriété du centre-ville ?",
          answer: "<p>Les taches incrustées depuis plusieurs mois nécessitent un pré-traitement ciblé avant extraction. Nous appliquons un détachant adapté à la nature de la salissure, laissons agir, puis procédons à plusieurs passes d'injection-extraction. Sur moquette bouclée, cette méthode décolle les résidus sans déformer la fibre.</p>",
        },
        {
          question: "Quelles contraintes d'accès prévoir pour intervenir dans un hall protégé par digicode près de la gare RER ?",
          answer: "<p>Nous convenons en amont d'un créneau avec le syndic ou le gardien pour obtenir l'accès. Le matériel est acheminé en une seule rotation pour limiter les allers-retours. Si le stationnement est difficile, nous identifions un point de dépose à proximité et organisons le transfert du matériel à pied.</p>",
        },
        {
          question: "Quelle méthode privilégier entre shampouinage et extraction sur moquette bouclée dans des locaux tertiaires ?",
          answer: "<p>L'injection-extraction reste la méthode la plus efficace pour les moquettes bouclées à fort passage. Elle déloge les salissures en profondeur et extrait l'humidité résiduelle, réduisant le temps de séchage. Le shampouinage classique convient davantage à un entretien léger entre deux nettoyages complets.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 2) parkings
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains avec autolaveuse et dégraissant professionnel, gestion stricte des eaux usées et balisage sécurisé pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des accès souterrains du secteur Blagis-Scarron et coordination avec les syndics locaux.",
        "Autolaveuse professionnelle et dégraissants adaptés au béton brut, gestion rigoureuse des eaux usées.",
        "Rotation véhicules planifiée, balisage sécurisé et horaires ajustés pour réduire la gêne aux résidents.",
      ],
      uniqueIntro: "<p>Les traces d'huile, les coulures grasses et les dépôts de poussière sont visibles sur les sols des parkings souterrains du <strong>quartier Les Blagis</strong> et des résidences voisines. Ces salissures s'accumulent au fil des passages quotidiens et finissent par former une couche tenace sur le béton brut. Les rampes d'accès striées concentrent particulièrement les résidus de pneus et les projections d'eau sale.</p>\n<p class=\"mt-4\">Un sol encrassé génère des plaintes de copropriétaires, dégrade l'image de la résidence et complique la lecture des marquages au sol. Dans les <strong>sous-sols des immeubles années 60-70</strong>, l'absence de ventilation naturelle accentue l'impression de négligence. Un lavage mécanisé redonne un aspect propre et facilite la circulation piétonne comme automobile.</p>\n<p class=\"mt-4\">L'intervention se coordonne avec le syndic ou le gestionnaire pour organiser la rotation des véhicules. Le balisage sécurise les zones en cours de traitement et limite les interruptions pour les résidents qui utilisent leur stationnement au quotidien.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>Avant toute action, l'équipe évalue le type de revêtement présent : béton brut, résine ou peinture. L'état des évacuations est vérifié pour anticiper l'écoulement des eaux de lavage.</p>\n<p class=\"mt-4\">Un balayage préalable retire les débris grossiers. Le balisage est installé et la signalétique posée pour sécuriser les usagers pendant le chantier.</p>\n\n<h3>Traitement mécanisé</h3>\n<p>L'autolaveuse effectue plusieurs passes sur les allées de circulation. Un dégraissant adapté est appliqué sur les zones critiques : emplacements marqués par l'huile, pieds de murs et angles morts.</p>\n<p class=\"mt-4\">Les rampes d'accès reçoivent un traitement spécifique pour conserver leur adhérence. Les rigoles sont décrassées afin de garantir un écoulement correct.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Un contrôle visuel valide la propreté obtenue sur l'ensemble du parking.</p>\n<p class=\"mt-4\">Si demandé, un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention. Une fréquence d'entretien est conseillée selon le trafic constaté.</p>",
      specificChallenges: [
        "Parkings souterrains des résidences Scarron et Blagis avec ventilation limitée.",
        "Rampes d'accès striées nécessitant un traitement préservant l'adhérence.",
        "Coordination avec syndics pour organiser la rotation des véhicules par zone.",
        "Béton brut et marquages peints sensibles aux produits trop agressifs.",
        "Gestion stricte des eaux de lavage vers les évacuations existantes.",
      ],
      faqAdditions: [
        {
          question: "Comment éliminer les taches d'huile anciennes dans le parking souterrain de la résidence Scarron sans abîmer le béton ?",
          answer: "<p>Un dégraissant alcalin est appliqué sur les zones imprégnées, puis laissé agir avant passage de l'autolaveuse. Le produit dissout les graisses incrustées sans attaquer le béton brut. Plusieurs passes peuvent être nécessaires sur les taches les plus anciennes pour obtenir un résultat satisfaisant.</p>",
        },
        {
          question: "Quelle gestion des eaux et quels équipements recommandez-vous pour laver la rampe striée de l'avenue de la Division Leclerc ?",
          answer: "<p>L'autolaveuse aspire l'eau au fur et à mesure pour éviter les écoulements incontrôlés. Sur une rampe striée, la pression est ajustée afin de conserver l'adhérence du revêtement. Les eaux usées sont dirigées vers les regards existants, conformément aux règles d'évacuation en vigueur.</p>",
        },
        {
          question: "À quelle fréquence préconisez-vous l'entretien d'un parking selon le trafic résidentiel des Blagis ?",
          answer: "<p>Pour un parking à usage résidentiel courant, un décrassage complet deux à trois fois par an suffit généralement. Si le trafic est plus intense ou si des véhicules utilitaires circulent régulièrement, un passage trimestriel permet de maintenir un sol propre et des marquages lisibles.</p>",
        },
        {
          question: "Quelles différences de protocole entre un parking souterrain et un parking aérien en copropriété locale ?",
          answer: "<p>En souterrain, la ventilation réduite impose un séchage plus long et une gestion stricte des eaux. En aérien, l'évacuation naturelle facilite le rinçage mais expose davantage aux salissures extérieures. Le choix du matériel et la fréquence d'intervention s'adaptent à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 3) balcons
    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Fontenay-aux-Roses : traitement des mousses, nettoyage du carrelage et des garde-corps, avec gestion maîtrisée des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons côté Coulée Verte, façades sur axes passants, loggias ombragées.",
        "Pression ajustée selon le support : grès cérame, béton peint ou joints fragiles traités avec précaution.",
        "Organisation anti-coulures systématique pour préserver les relations de voisinage dans les résidences.",
      ],
      uniqueIntro: "<p>Les traces verdâtres s'accumulent sur les balcons orientés vers la <strong>Coulée Verte du Sud Parisien</strong>. L'humidité persistante et les feuilles mortes favorisent l'apparition de mousses dans les joints, tandis que la pollution de la D906 dépose un voile grisâtre sur les surfaces exposées. Ces dépôts s'incrustent progressivement et résistent au simple jet d'eau.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change l'usage quotidien de cet espace extérieur. Sur les immeubles R+5 à R+8 équipés de <strong>carrelage grès cérame ou béton peint</strong>, un nettoyage adapté redonne de l'éclat aux sols et aux garde-corps acier ternis par les intempéries. L'espace redevient agréable pour s'y installer, sans cette sensation de surface glissante ou négligée.</p>\n<p class=\"mt-4\">Notre intervention prend en compte les contraintes des résidences fontenaysiennes : évacuation contrôlée des eaux pour éviter les coulures chez les voisins du dessous, protection des menuiseries et du mobilier. Un diagnostic préalable permet d'adapter le traitement au support et à l'exposition de votre balcon.</p>",
      uniqueDeepDive: "<h3>Mousses et dépôts verts incrustés</h3>\n<p>Les joints poreux retiennent l'humidité et favorisent la prolifération végétale. Nous appliquons un produit de traitement adapté au support, suivi d'un brossage manuel pour décoller les mousses sans endommager le carrelage ou le béton.</p>\n<p class=\"mt-4\">Un rinçage contrôlé élimine les résidus tout en évitant les projections vers les balcons inférieurs.</p>\n\n<h3>Voile gris et traces de pollution</h3>\n<p>La suie et les particules fines adhèrent aux surfaces exposées côté avenue. Après le retrait des gros dépôts et feuilles mortes, nous traitons le sol et les garde-corps avec une pression adaptée aux joints.</p>\n<p class=\"mt-4\">Les menuiseries et vitrages sont protégés avant toute intervention.</p>\n\n<h3>Séchage et conseils d'entretien</h3>\n<p>Une fois le nettoyage terminé, nous vérifions l'état des joints et signalons d'éventuelles fissures. Le temps de séchage varie selon l'exposition, généralement quelques heures avant de réinstaller mobilier et plantes.</p>\n<p class=\"mt-4\">Nous vous indiquons la fréquence d'entretien recommandée selon l'orientation de votre balcon.</p>",
      specificChallenges: [
        "Mousses tenaces sur les balcons exposés nord, proches des espaces boisés de la Coulée Verte.",
        "Dépôts de pollution sur les façades longeant l'avenue Lombart et la D906.",
        "Gestion des eaux de rinçage sur immeubles R+5 à R+8 pour éviter les nuisances aux étages inférieurs.",
        "Garde-corps acier ternis nécessitant un traitement adapté sans rayure.",
        "Loggias fermées du quartier des Blagis avec ventilation réduite et humidité persistante.",
      ],
      faqAdditions: [
        {
          question: "Comment éliminer les dépôts verts et mousses sur un balcon exposé vers la Coulée Verte à Fontenay-aux-Roses ?",
          answer: "<p>Les balcons orientés vers les espaces boisés accumulent davantage d'humidité. Nous appliquons un traitement anti-mousse adapté au support, suivi d'un brossage manuel des joints. Le rinçage est effectué à pression modérée pour décoller les résidus sans abîmer le carrelage ni projeter d'eau chez vos voisins.</p>",
        },
        {
          question: "Quelles précautions pour nettoyer un balcon en grès cérame dans le secteur de la Place de la Cavée ?",
          answer: "<p>Le grès cérame supporte mal les produits acides et les pressions excessives. Nous utilisons un détergent neutre et une brosse adaptée pour préserver l'émail. Les joints sont traités séparément si nécessaire. Cette approche évite les micro-rayures et conserve l'aspect d'origine du carrelage.</p>",
        },
        {
          question: "Comment gérer l'évacuation des eaux de lavage pour un balcon au cinquième étage en centre-ville ?",
          answer: "<p>Nous installons des protections sur les évacuations et travaillons par zones pour contrôler le débit d'eau. Le rinçage s'effectue progressivement, en vérifiant l'absence de coulures sur les balcons inférieurs. Cette méthode limite les nuisances et préserve les relations de voisinage dans les copropriétés.</p>",
        },
        {
          question: "Quelle différence de protocole entre une loggia fermée et un balcon ouvert dans le quartier des Ormeaux ?",
          answer: "<p>Une loggia fermée retient davantage l'humidité et sèche plus lentement. Nous adaptons la quantité d'eau utilisée et privilégions un séchage assisté si nécessaire. Sur un balcon ouvert, l'évaporation naturelle accélère le processus. Le traitement des supports reste identique, seule l'organisation diffère.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 4) balcons-fientes
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide des supports et pose optionnelle de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque de Fontenay-aux-Roses : secteur Parc Sainte-Barbe, corniches du centre, abords de la gare.",
        "Protocole complet avec EPI adaptés, confinement systématique et désinfection virucide certifiée sur tous les supports.",
        "Gestion rigoureuse de l'évacuation des déchets et coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons situés à proximité du <strong>Parc Sainte-Barbe</strong> ou du secteur gare RER accumulent des dépôts de fientes qui s'incrustent dans les joints et le béton. L'odeur devient perceptible dès l'ouverture de la baie vitrée, le linge étendu absorbe ces effluves, et l'espace extérieur finit par être délaissé faute de pouvoir l'utiliser sereinement.</p>\n<p class=\"mt-4\">Sur les <strong>corniches d'immeubles anciens du centre-ville</strong>, les rebords accessibles et les surfaces en pierre offrent des points de repos idéaux aux volatiles. Les fientes s'accumulent sur garde-corps, carrelage et murs mitoyens, créant des taches blanchâtres difficiles à éliminer sans traitement adapté. Le balcon perd son attrait, et la gêne vis-à-vis des voisins s'installe.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon propre et désinfecté. Le protocole inclut confinement de la zone, ramassage sécurisé, traitement des supports et <strong>évacuation des déchets organiques</strong> dans le respect des contraintes sanitaires.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et supports désinfectés</h3>\n<p>Le résultat visé : un sol débarrassé des dépôts, des garde-corps nettoyés, et une surface traitée avec un produit virucide homologué. L'odeur disparaît, l'espace redevient utilisable sans appréhension.</p>\n\n<h3>Sécurisation et collecte méthodique</h3>\n<p>L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n\n<h3>Traitement et rinçage final</h3>\n<p>Sol, garde-corps, vitrages et éventuels murs mitoyens sont nettoyés puis désinfectés. Le produit bactéricide agit pendant le temps de contact requis avant rinçage. Si souhaité, des pics ou filets anti-pigeons peuvent être posés sur les rebords pour limiter le retour des volatiles. Le balcon reste en aération le temps nécessaire avant réutilisation.</p>",
      specificChallenges: [
        "Proximité du Parc Sainte-Barbe : les balcons exposés subissent des dépôts réguliers de fientes.",
        "Corniches en pierre des immeubles anciens du centre : surfaces poreuses difficiles à désinfecter sans traitement adapté.",
        "Risque de dispersion vers les logements voisins si le confinement n'est pas correctement réalisé.",
        "Évacuation des déchets organiques en sacs étanches : contrainte logistique à anticiper.",
        "Odeurs persistantes si le protocole de désinfection n'est pas respecté intégralement.",
      ],
      faqAdditions: [
        {
          question: "Les fientes accumulées sur les balcons proches du Parc Sainte-Barbe présentent-elles un risque sanitaire nécessitant un confinement ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les balcons exposés près du parc, l'accumulation justifie un confinement de la zone avant toute manipulation. Le bâchage protège l'intérieur du logement et évite la dispersion vers les appartements voisins.</p>",
        },
        {
          question: "Quels équipements et méthodes utilisez-vous pour traiter les fientes incrustées sur les corniches anciennes du centre-ville ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes. Les dépôts sont humidifiés pour éviter l'envol de particules, puis grattés et collectés. Sur les supports en pierre, un nettoyage adapté précède la désinfection pour ne pas endommager le matériau tout en éliminant les résidus.</p>",
        },
        {
          question: "Quelle désinfection appliquez-vous après le nettoyage de fientes sur un balcon situé près de la Coulée Verte ?",
          answer: "<p>Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage. Cette étape élimine les agents microbiens présents dans les fientes et neutralise les risques sanitaires résiduels.</p>",
        },
        {
          question: "Comment organisez-vous l'évacuation des déchets et la coordination avec le voisinage lors d'une intervention en centre-ville ?",
          answer: "<p>Les fientes et résidus sont conditionnés en sacs étanches dès la collecte. L'évacuation s'effectue en fin d'intervention pour limiter les nuisances. Si le balcon jouxte d'autres logements, nous informons les occupants concernés et adaptons les horaires pour réduire la gêne occasionnée.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 5) canapes-tapis
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Intervention à domicile pour redonner fraîcheur et propreté à vos canapés, tapis et matelas, avec extraction des taches et séchage maîtrisé pour une utilisation rapide.",
      whyUsBullets: [
        "Connaissance des logements fontenaisiens, du pavillonnaire des Ormeaux aux appartements du centre-ville.",
        "Détachage enzymatique ciblé et extraction textile adaptée à chaque type de fibre rencontré.",
        "Organisation souple avec gestion du stationnement et intervention rapide pour une remise en service le jour même.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect et l'hygiène d'un canapé quand la vie de famille s'y installe au quotidien ? Autour de la <strong>Place de la Cavée</strong> et dans les rues résidentielles de Fontenay-aux-Roses, les textiles d'ameublement absorbent tout : miettes, poussières, traces laissées par les enfants ou les animaux. Les fibres se ternissent, les odeurs s'installent, et un simple aspirateur ne suffit plus à retrouver un tissu agréable au toucher.</p>\n<p class=\"mt-4\">Un entretien en profondeur change la donne. Les taches anciennes s'estompent, les couleurs retrouvent leur éclat, et l'air ambiant gagne en fraîcheur. Dans les appartements des petits collectifs des années 60-70 comme dans les pavillons du quartier des Ormeaux, ce rafraîchissement redonne au salon son rôle d'espace convivial sans gêne olfactive ni visuelle.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des contraintes d'accès et de <strong>stationnement souvent restreint</strong> près des immeubles. Diagnostic textile, protection des sols, extraction contrôlée : chaque étape vise un résultat durable adapté à votre intérieur.</p>",
      uniqueDeepDive: "<h3>Taches incrustées et odeurs persistantes</h3>\n<p>Les salissures anciennes — café renversé, traces d'animaux, marques grasses — nécessitent un pré-traitement ciblé. Nous identifions la nature du textile (coton, synthétique, velours) et appliquons un détachant adapté sur chaque zone concernée.</p>\n<p class=\"mt-4\">Un test discret sur une partie cachée garantit l'absence de réaction indésirable avant de poursuivre.</p>\n\n<h3>Fibres encrassées en profondeur</h3>\n<p>L'injection-extraction textile déloge les résidus piégés dans l'épaisseur du tissu. La pression et la température sont ajustées selon la fragilité du support pour éviter toute déformation ou décoloration.</p>\n<p class=\"mt-4\">Cette méthode retire bien plus qu'un simple nettoyage de surface : poussières fines, allergènes et particules invisibles sont aspirés.</p>\n\n<h3>Séchage et remise en service</h3>\n<p>L'extraction maximale de l'humidité raccourcit le temps de séchage. Selon l'épaisseur du textile et la ventilation de la pièce, comptez généralement quelques heures avant de réutiliser le mobilier.</p>\n<p class=\"mt-4\">Nous vous indiquons les gestes d'entretien courant et la fréquence recommandée pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés familiaux : café, jus, traces grasses accumulées.",
        "Odeurs persistantes liées à la présence d'animaux domestiques dans les foyers.",
        "Textiles variés (synthétique, laine, velours) nécessitant un diagnostic préalable.",
        "Stationnement restreint rue Boucicaut et autour de la Place de la Cavée.",
        "Séchage à adapter selon la ventilation des appartements en petit collectif.",
      ],
      faqAdditions: [
        {
          question: "Le nettoyage élimine-t-il vraiment les acariens et allergènes des canapés dans les maisons familiales autour de la Place de la Cavée ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur et déloge les acariens, poussières fines et allergènes invisibles. Dans les intérieurs familiaux de Fontenay-aux-Roses, cette méthode améliore sensiblement la qualité de l'air ambiant et le confort des occupants sensibles.</p>",
        },
        {
          question: "Quelle solution proposez-vous pour les taches d'urine et odeurs d'animaux sur les tapis rue Boucicaut ?",
          answer: "<p>Nous appliquons un détachant enzymatique qui décompose les résidus organiques à la source. L'extraction qui suit retire l'humidité chargée en odeurs. Ce traitement neutralise les marques et limite leur réapparition, même sur des taches anciennes.</p>",
        },
        {
          question: "Faut-il privilégier un détachage localisé ou un nettoyage complet pour un canapé tissu taché avenue Lombart ?",
          answer: "<p>Cela dépend de l'étendue des salissures. Un détachage ciblé suffit pour une tache isolée récente. Si le textile présente un encrassement général ou plusieurs zones marquées, un entretien complet garantit un rendu homogène sans auréoles.</p>",
        },
        {
          question: "Comment organisez-vous l'intervention quand le stationnement est difficile près des immeubles rue Boucicaut ?",
          answer: "<p>Nous repérons en amont les possibilités de stationnement et adaptons nos horaires si nécessaire. Le matériel portable permet d'intervenir même avec un véhicule garé à distance raisonnable, sans retarder la prestation ni gêner les résidents.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 6) terrasses
    {
      serviceKey: "terrasses",
      heroDescription: "Traitement complet de votre terrasse à Fontenay-aux-Roses : élimination des mousses, dépôts verts et taches tenaces, avec adaptation au support pour retrouver une surface propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses exposées à l'humidité et aux feuillages de la Coulée Verte à Fontenay-aux-Roses.",
        "Adaptation du traitement selon le support : pression contrôlée sur bois, produit spécifique sur pierre ou dalles plots.",
        "Protection systématique du mobilier et des plantations, gestion de l'évacuation d'eau vers les écoulements existants.",
      ],
      uniqueIntro: "<p>Dans le secteur des <strong>Ormeaux-Renards</strong>, les terrasses pavillonnaires subissent une accumulation progressive de mousses et lichens. La proximité de la <strong>Coulée Verte du Sud Parisien</strong> génère un environnement humide et ombragé propice aux dépôts végétaux. Les feuilles mortes s'accumulent dans les joints, l'eau stagne par endroits, et le revêtement perd son aspect d'origine en quelques saisons seulement.</p>\n<p class=\"mt-4\">Une terrasse envahie par la mousse devient glissante et peu engageante. Les dalles sur plots des <strong>résidences récentes</strong> ou le bois composite des maisons individuelles nécessitent un entretien adapté pour conserver leur tenue. Sans intervention, les dépôts s'incrustent, les joints noircissent, et l'espace extérieur perd sa fonction de lieu de vie agréable.</p>\n<p class=\"mt-4\">Un rafraîchissement structuré permet de retrouver une terrasse praticable et visuellement nette. Diagnostic du support, choix du traitement approprié, protection des éléments environnants : chaque étape vise un résultat durable sans endommager les matériaux.</p>",
      uniqueDeepDive: "<h3>Préparation et diagnostic</h3>\n<p>Le mobilier extérieur, les jardinières et plantes sont déplacés ou protégés par bâchage. Les menuiseries et baies vitrées reçoivent une protection adaptée.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les feuilles, débris et terre accumulés. Le support est identifié : pierre reconstituée, bois composite ou dalles sur plots déterminent le protocole à suivre.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au matériau est appliqué pour décoller mousses et dépôts verts incrustés. Le brossage manuel ou mécanique complète l'action chimique sur les zones tenaces.</p>\n<p class=\"mt-4\">La haute pression intervient uniquement sur les supports compatibles, avec réglage contrôlé pour préserver joints et matériaux poreux. Les escaliers extérieurs et margelles sont traités simultanément.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont rincées si nécessaire.</p>\n<p class=\"mt-4\">Un traitement anti-mousse préventif peut être appliqué selon l'exposition. Des recommandations d'entretien saisonnier vous sont transmises pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'ombre et l'humidité des zones arborées proches de la Coulée Verte.",
        "Dalles sur plots en résidences récentes : intervention sans déplacement ni détérioration des éléments.",
        "Terrasses bois composite du quartier Ormeaux nécessitant une pression adaptée pour éviter l'éclatement des fibres.",
        "Feuilles mortes accumulées dans les joints créant des zones de stagnation propices aux dépôts verts.",
        "Gestion de l'écoulement d'eau sur terrasses RDC pour éviter les désagréments vers les espaces communs.",
      ],
      faqAdditions: [
        {
          question: "Comment traiter la mousse et les lichens sur une terrasse en bois dans le quartier Ormeaux-Renards sans abîmer le matériau ?",
          answer: "<p>Le bois composite ou naturel des terrasses pavillonnaires du secteur Ormeaux reçoit un traitement doux : produit anti-mousse adapté, brossage manuel sur les zones incrustées, puis rinçage à pression modérée. Cette méthode préserve les fibres tout en éliminant les dépôts verts accumulés par l'humidité ambiante.</p>",
        },
        {
          question: "Quel protocole appliquez-vous pour nettoyer des dalles sur plots sans les déplacer en résidences récentes ?",
          answer: "<p>Les dalles sur plots des constructions récentes à Fontenay-aux-Roses sont traitées en place. Le nettoyage s'effectue par application de produit désincrustant, brossage des joints accessibles et rinçage contrôlé. Les plots restent stables, et l'eau est orientée vers les évacuations existantes sans infiltration sous le revêtement.</p>",
        },
        {
          question: "Faut-il éviter la haute pression sur une terrasse en pierre humide et ombragée près de la Coulée Verte ?",
          answer: "<p>La haute pression reste utilisable sur pierre reconstituée, mais avec réglage adapté aux zones exposées à l'humidité permanente. Les joints fragilisés par l'ombre et les dépôts organiques nécessitent une pression réduite. Un traitement préventif anti-mousse prolonge ensuite le résultat sur ces surfaces particulièrement exposées.</p>",
        },
        {
          question: "Quelle est la meilleure période pour un démoussage complet d'une terrasse de maison au Plateau ?",
          answer: "<p>Le printemps et l'automne offrent les meilleures conditions pour traiter les terrasses du secteur Plateau-Petit-Chambord. L'intervention avant ou après la saison des feuilles mortes optimise le résultat. Un créneau est fixé selon vos disponibilités, avec protection préalable du mobilier et des plantations environnantes.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 7) nettoyage-appartement-maison
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement après travaux ou avant état des lieux, avec nettoyage minutieux de chaque pièce et coordination adaptée à vos délais.",
      whyUsBullets: [
        "Connaissance des typologies de logements fontenaisiens : T2/T3 anciens, maisons du Plateau, résidences des Blagis.",
        "Protocoles adaptés aux parquets chêne, carrelages fragiles et sols PVC présents dans le parc local.",
        "Coordination directe avec agences et artisans pour respecter les délais d'état des lieux ou de livraison.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les logements de Fontenay-aux-Roses présentent souvent un état qui nécessite une intervention structurée. Dans les quartiers des Blagis ou du Plateau-Petit-Chambord, les appartements libérés accumulent poussières de chantier, traces sur les vitres et résidus sur les sols. Sans préparation adaptée, la remise des clés devient source de tensions entre locataires, propriétaires et agences.</p>\n<p class=\"mt-4\">Les biens concernés sont majoritairement des T2 et T3, équipés de parquets chêne anciens ou de carrelages qui demandent des protocoles de lavage spécifiques. Un grand ménage réalisé dans les règles permet de restituer un logement prêt à accueillir de nouveaux occupants, sans réserves lors du constat de sortie. Les propriétaires récupèrent un bien valorisé, les locataires évitent les retenues sur caution.</p>\n<p class=\"mt-4\">Klinova organise ces interventions en tenant compte des contraintes de planning : coordination avec les artisans encore présents, synchronisation avec les rendez-vous d'agence, respect des créneaux imposés par les gestionnaires locaux.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à la remise des clés</h3>\n<p>L'objectif est de livrer un appartement ou une maison dans un état conforme aux attentes d'un état des lieux ou d'une entrée locataire. Sols propres, vitres transparentes, sanitaires désinfectés, placards vidés et essuyés.</p>\n<p class=\"mt-4\">Pour y parvenir, nous commençons par un diagnostic de l'ensemble des pièces afin d'identifier les zones prioritaires et les supports à traiter avec précaution.</p>\n\n<h3>Traitement méthodique de chaque espace</h3>\n<p>Le dépoussiérage débute par les parties hautes : plafonds, luminaires, dessus de meubles. Les pièces d'eau reçoivent un traitement complet incluant détartrage et désinfection des sanitaires, nettoyage des faïences et joints.</p>\n<p class=\"mt-4\">La cuisine fait l'objet d'une attention particulière : plans de travail, électroménager, crédence et intérieur des placards.</p>\n\n<h3>Finitions et contrôle avant départ</h3>\n<p>Les sols sont aspirés puis lavés selon leur nature. Les interrupteurs, poignées et radiateurs sont essuyés. Un contrôle final vérifie l'absence de traces résiduelles avant aération du logement.</p>",
      specificChallenges: [
        "Résidus de chantier sur parquets anciens du centre-ville nécessitant un nettoyage sans abrasion.",
        "Rotation locative soutenue aux Blagis imposant des interventions rapides entre deux baux.",
        "Stationnement contraint autour de la Place de la Cavée limitant l'accès pour le matériel.",
        "Coordination agences : créneaux serrés pour les états des lieux en fin de mois.",
        "Digicodes et badges généralisés dans les copropriétés, anticipation des accès indispensable.",
      ],
      faqAdditions: [
        {
          question: "Que comprend précisément un nettoyage fin de chantier pour un appartement rénové en centre-ville ?",
          answer: "<p>L'intervention couvre l'élimination des poussières de plâtre et de peinture sur l'ensemble des surfaces, le lavage des sols adaptés à leur nature, le nettoyage des vitres intérieures et le traitement complet des pièces d'eau. Les traces de colle ou d'enduit sont retirées sans abîmer les supports.</p>",
        },
        {
          question: "Quel protocole suivez-vous pour éliminer traces et moisissures après un dégât des eaux dans une résidence des Blagis ?",
          answer: "<p>Nous procédons d'abord à une évaluation de l'étendue des dégâts. Les surfaces touchées sont nettoyées et traitées avec des produits adaptés pour éliminer les traces d'humidité. Les zones sensibles font l'objet d'une désinfection ciblée. Le séchage est vérifié avant clôture de l'intervention.</p>",
        },
        {
          question: "Comment coordonnez-vous les interventions avec les agences immobilières pour les états des lieux à Fontenay ?",
          answer: "<p>Nous calons nos créneaux en fonction des rendez-vous fixés par l'agence. Un échange préalable permet de confirmer l'heure de libération du logement et le délai disponible avant le constat. Nous transmettons une confirmation d'intervention une fois le nettoyage terminé.</p>",
        },
        {
          question: "Quel niveau de propreté puis-je attendre pour un nettoyage approfondi d'un T2 ou T3 avant remise des clés ?",
          answer: "<p>Le logement est restitué dans un état permettant une entrée immédiate : sols lavés, sanitaires désinfectés, vitres propres, placards essuyés. L'objectif est d'éviter toute réserve lors de l'état des lieux et de faciliter la récupération intégrale du dépôt de garantie.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;