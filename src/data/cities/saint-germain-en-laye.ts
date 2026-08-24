import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Germain-en-Laye",
  slug: "saint-germain-en-laye",
  postalCodes: ["78100", "78112"],

  department: {
    name: "Yvelines",
    code: "78",
    slug: "yvelines",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Saint-Germain-en-Laye. Du centre-ville aux résidences du quartier Alsace-Pereire, une organisation adaptée aux contraintes d'accès et au stationnement difficile de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 paragraphes then a list
  hubIntro: "<p>Terminus du RER A et site du Château, Saint-Germain-en-Laye concentre un parc immobilier varié où la propreté des espaces communs demande une <strong>coordination rigoureuse</strong>. Klinova s'implante comme partenaire terrain pour les syndics, gestionnaires et occupants de la commune.</p>\n<p class=\"mt-4\">Notre équipe intervient sur l'ensemble des prestations de propreté et maintenance\u0000a0: halls, escaliers, parkings souterrains, balcons, terrasses. Un interlocuteur dédié coordonne les passages selon vos contraintes d'accès et peut fournir un reporting régulier sur demande.</p>\n<ul>\n  <li><strong>Coordination accès :</strong> Gestion des digicodes et badges pour chaque immeuble, planification des créneaux avec gardiens ou syndics selon les résidences.</li>\n  <li><strong>Stationnement anticipé :</strong> Repérage préalable des zones de dépose matériel en centre-ville, adaptation aux rues étroites et sens uniques du cœur historique.</li>\n  <li><strong>Discrétion résidentielle :</strong> Horaires ajustés pour limiter la gêne dans les quartiers calmes comme Pontel ou Rotondes-Saint-Léger, matériel silencieux privilégié.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Halls d'immeubles anciens avec <strong>escaliers étroits</strong> limitant le passage de matériel volumineux.",
    "Parkings souterrains en centre-ville nécessitant une <strong>gestion des eaux de lavage</strong> conforme.",
    "Stationnement contraint autour de la <strong>gare RER A</strong> imposant un repérage préalable.",
    "Résidences avec digicodes multiples exigeant une <strong>coordination syndic</strong> systématique.",
    "Balcons exposés côté <strong>forêt domaniale</strong> accumulant pollens et dépôts organiques.",
    "Quartiers résidentiels calmes demandant des <strong>horaires d'intervention discrets</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Cœur de ville",
    "Alsace-Pereire",
    "Lycée International",
    "Rotondes-Saint-Léger",
    "Pontel",
  ],
  nearbyCities: [
        "houilles",
        "nanterre",
        "rueil-malmaison",
        "herblay-sur-seine",
        "colombes",
        "suresnes",
        "argenteuil",
        "franconville",
        "puteaux",
        "le-chesnay-rocquencourt"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Saint-Germain-en-Laye",
    "Château de Saint-Germain-en-Laye",
    "Gare de Saint-Germain-en-Laye",
    "Tram T13",
    "Place Charles de Gaulle",
    "Domaine national de Saint-Germain-en-Laye",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous les accès aux immeubles avec digicode à Saint-Germain-en-Laye ?",
      answer: "<p>Nous récupérons les <strong>codes ou badges</strong> en amont auprès du syndic ou du gestionnaire. Chaque intervention est planifiée avec un créneau validé. En cas de changement de code, notre équipe dispose d'un contact direct pour éviter tout retard sur site.</p>",
    },
    {
      question: "Quel délai pour une première intervention sur la commune ?",
      answer: "<p>Après validation du devis, nous programmons le premier passage selon la disponibilité de nos équipes. Pour une urgence (dégât, remise en état avant état des lieux), un créneau prioritaire peut être organisé selon disponibilité de l'équipe secteur Yvelines.</p>",
    },
    {
      question: "Le stationnement en centre-ville complique-t-il vos interventions ?",
      answer: "<p>Nous anticipons cette contrainte lors du repérage. L'équipe identifie les <strong>zones de dépose autorisées</strong>, les créneaux moins encombrés et adapte le matériel transporté. Si nécessaire, nous décalons l'horaire pour éviter les pics de circulation autour de la place Charles de Gaulle.</p>",
    },
    {
      question: "Proposez-vous un suivi régulier pour les copropriétés ?",
      answer: "<p>Oui. Un <strong>reporting périodique</strong> peut être transmis au syndic ou au conseil syndical : dates de passage, prestations réalisées, observations terrain. Ce suivi facilite la gestion et permet d'ajuster la fréquence si l'état des parties communes l'exige.</p>",
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
      heroDescription: "Extraction des salissures incrustées dans vos moquettes par injection-extraction, avec séchage maîtrisé pour limiter l'indisponibilité des espaces traités.",
      whyUsBullets: [
        "Connaissance des configurations résidentielles du secteur Lycée International et des accès contraints en centre-ville.",
        "Matériel d'injection-extraction adapté aux moquettes bouclées, velours et dalles textiles des parties communes.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des résidents et respecter les contraintes de stationnement.",
      ],
      uniqueIntro: "<p>Dans le quartier <strong>Alsace-Pereire</strong>, les halls d'entrée et escaliers des résidences accumulent rapidement poussières et traces de passage. Le tissu résidentiel dense, proche du centre, concentre un trafic piéton régulier qui marque les fibres textiles. Les taches de café, les résidus terreux rapportés de l'extérieur et les salissures grasses s'incrustent progressivement, ternissant l'aspect général des revêtements.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux moquettes leur aspect d'origine et améliore le confort des occupants. Dans les <strong>immeubles anciens et petits collectifs</strong> de Saint-Germain-en-Laye, les fibres bouclées ou velours des parties communes retrouvent leur tenue après extraction des salissures profondes. Les plaintes liées aux odeurs ou à l'aspect négligé diminuent, et l'image de la copropriété s'en trouve valorisée.</p>\n<p class=\"mt-4\">L'intervention débute par un diagnostic précis du support et des contraintes d'accès. Les digicodes, halls étroits et stationnement limité en zone dense sont anticipés pour organiser le chantier sans gêne excessive pour les résidents.</p>",
      uniqueDeepDive: "<h3>1. Zones de circulation principale</h3>\n<p>Les halls d'entrée et paliers concentrent l'essentiel du trafic. Le diagnostic identifie le type de moquette — bouclée, velours, épaisse ou fine — et la nature des taches présentes. Une aspiration préalable retire les particules libres avant le traitement humide.</p>\n<p class=\"mt-4\">Les protections sont posées sur les <strong>plinthes et bas de murs</strong> pour éviter toute projection.</p>\n\n<h3>2. Escaliers et passages étroits</h3>\n<p>Les marches et couloirs reçoivent plusieurs passes d'injection-extraction. Le matériel compact s'adapte aux configurations resserrées des immeubles anciens. Les zones de fort passage bénéficient d'un détachage ciblé sur les taches tenaces.</p>\n<p class=\"mt-4\">L'<strong>extraction maximale</strong> limite le temps de séchage et permet une remise en circulation rapide.</p>\n\n<h3>3. Finitions et séchage</h3>\n<p>Les angles et jonctions avec les murs sont vérifiés. Le temps de séchage estimé dépend de l'épaisseur du revêtement et de la ventilation naturelle. Des consignes de non-piétinement sont transmises pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "Escaliers étroits dans les immeubles anciens : matériel compact indispensable.",
        "Moquettes bouclées des halls sensibles à l'eau : extraction renforcée obligatoire.",
        "Stationnement limité en centre-ville : coordination préalable avec le syndic.",
        "Digicodes et badges : accès anticipé pour éviter les retards d'intervention.",
        "Taches anciennes sur fibres velours : détachage ciblé avant injection-extraction.",
      ],
      faqAdditions: [
        {
          question: "Dans les immeubles anciens d'Alsace-Pereire, comment gérez-vous les escaliers étroits pour nettoyer une moquette ?",
          answer: "<p><strong>Le matériel d'injection-extraction</strong> utilisé est compact et maniable. Les flexibles et buses s'adaptent aux passages resserrés. Les protections sont posées sur les plinthes et angles avant chaque passe. L'organisation prévoit un balisage temporaire pour sécuriser la zone pendant le séchage.</p>",
        },
        {
          question: "Dans les halls du centre-ville, combien de temps faut-il pour faire disparaître les odeurs persistantes sur moquette ?",
          answer: "<p>L'extraction en profondeur retire les résidus organiques responsables des odeurs. Le séchage complet, variable selon l'épaisseur et la ventilation, prend généralement douze à vingt-quatre heures. Les fibres retrouvent une fraîcheur durable dès que l'humidité résiduelle s'évapore.</p>",
        },
        {
          question: "Dans les petits collectifs de Saint-Germain-en-Laye, comment protégez-vous les plinthes et angles pendant le nettoyage de moquette ?",
          answer: "<p>Des protections plastiques ou adhésives sont appliquées sur les bas de murs et plinthes avant le traitement. Les buses d'injection sont orientées pour éviter les projections. Les angles sont traités manuellement avec précaution pour ne pas détériorer les finitions murales.</p>",
        },
        {
          question: "Dans les résidences de Saint-Germain-en-Laye, comment adaptez-vous le nettoyage selon l'épaisseur et le type de moquette ?",
          answer: "<p>Le diagnostic initial identifie la structure du revêtement : bouclée, velours, fine ou épaisse. <strong>La pression d'injection et le débit d'extraction</strong> sont ajustés en conséquence. Les moquettes épaisses nécessitent des passes supplémentaires pour atteindre les salissures profondes sans saturer les fibres.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et gestion stricte des eaux usées, coordination des accès pour limiter la gêne aux résidents et usagers.",
      whyUsBullets: [
        "Connaissance des accès contraints et des parkings souterrains du centre-ville de Saint-Germain-en-Laye.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées, adaptées aux sols béton ou résine.",
        "Rotation véhicules organisée, balisage sécurisé et reporting transmis au syndic après chaque intervention.",
      ],
      uniqueIntro: "<p>Les traces de graisse et les coulures d'huile marquent durablement les sols des parkings souterrains autour de la <strong>Place Charles de Gaulle</strong> et dans le secteur central de Saint-Germain-en-Laye. Ces dépôts s'accumulent sur le béton ou la résine, rendant les surfaces glissantes et dégradant l'image des parties communes. Les rigoles s'encrassent, les rampes perdent leur adhérence, et les réclamations des copropriétaires se multiplient.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux sous-sols et parkings souterrains des résidences récentes une propreté visible dès la fin de l'intervention. Les gestionnaires disposent d'un compte-rendu précis, les usagers retrouvent un espace propre et sécurisé. L'entretien programmé évite les dégradations coûteuses et les fermetures prolongées.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte du <strong>stationnement compliqué</strong> et des rues étroites du centre-ville. Rotation des véhicules, balisage adapté, horaires décalés : chaque chantier intègre les contraintes de circulation pour limiter la gêne aux résidents.</p>",
      uniqueDeepDive: "<h3>1. Encrassement et revêtement</h3>\n<p>Les dépôts d'huile et de graisse s'incrustent différemment selon le type de sol. Un diagnostic préalable identifie l'état du béton brut ou de la résine, le niveau d'encrassement et la capacité des évacuations. Cette analyse oriente le choix du matériel et du dégraissant adapté.</p>\n\n<h3>2. Traitement mécanisé et zones critiques</h3>\n<p>L'autolaveuse effectue des passes régulières sur l'ensemble de la surface. Les rampes d'accès, angles morts et pieds de murs reçoivent un traitement ciblé à haute pression. Les rigoles sont dégagées pour garantir l'<strong>écoulement correct des eaux de lavage</strong>, sans rejet sauvage ni stagnation.</p>\n\n<h3>3. Coordination et remise en service</h3>\n<p>Le balisage sécurise les usagers pendant l'intervention. La rotation des véhicules s'organise par zones pour maintenir un accès partiel au parking. En fin de chantier, un dépoussiérage des blocs lumineux peut être réalisé si demandé. Un conseil de fréquence est transmis au gestionnaire selon le trafic constaté.</p>",
      specificChallenges: [
        "Parkings souterrains des résidences récentes : <strong>ventilation limitée</strong> et sols en résine sensibles.",
        "Taches d'huile anciennes sur béton brut nécessitant un <strong>dégraissage appuyé</strong>.",
        "Rampes d'accès inclinées à traiter pour conserver l'adhérence antidérapante.",
        "Stationnement compliqué en centre-ville imposant une rotation par zones.",
        "Rigoles et regards à dégager pour éviter les stagnations d'eau.",
      ],
      faqAdditions: [
        {
          question: "Dans les sous-sols de résidences de Saint-Germain-en-Laye, comment traitez-vous les taches d'huile anciennes sur un parking ?",
          answer: "<p><strong>Les taches d'huile incrustées</strong> dans le béton brut ou la résine reçoivent un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Plusieurs passes mécanisées permettent de décoller les résidus sans abîmer le revêtement. Le résultat dépend de l'ancienneté des dépôts, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question: "Près de la Place Charles de Gaulle, comment organisez-vous le balisage pour nettoyer un parking sans gêner les usagers ?",
          answer: "<p>Le balisage délimite les zones en cours de traitement avec une signalétique visible. Les usagers conservent un accès partiel au parking pendant l'intervention. La rotation s'effectue par secteurs successifs, en coordination avec le gestionnaire, pour limiter la gêne et sécuriser les déplacements piétons.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, quelle méthode choisissez-vous selon qu'il s'agit d'un parking souterrain ou aérien ?",
          answer: "<p><strong>En souterrain, la ventilation limitée</strong> impose un matériel adapté et une gestion stricte des eaux de lavage vers les évacuations existantes. En aérien, la haute pression peut être utilisée plus librement. Le diagnostic initial oriente le choix du protocole selon le revêtement et les contraintes d'accès.</p>",
        },
        {
          question: "Dans le centre-ville de Saint-Germain-en-Laye, pouvez-vous nettoyer un parking avec une fermeture partielle seulement ?",
          answer: "<p>Oui, l'intervention s'organise par zones pour maintenir un accès aux véhicules. Le balisage sécurise les secteurs en cours de traitement. Les horaires peuvent être adaptés en soirée ou le week-end pour réduire la gêne. Le gestionnaire reçoit un planning précis avant le démarrage du chantier.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion des coulures et protection du voisinage pour un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Interventions adaptées aux balcons exposés du quartier Pontel et des résidences environnantes.",
        "Pression ajustée selon le support — carrelage, béton, joints fragiles — pour un résultat sans dégât.",
        "Organisation discrète avec protection du voisinage et gestion rigoureuse des écoulements.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement d'un balcon quand <strong>les dépôts verts s'incrustent entre les joints</strong> et que la poussière urbaine ternit le carrelage saison après saison ? Dans le quartier Rotondes-Saint-Léger, les appartements avec balcons exposés subissent cette accumulation progressive qui rend l'espace peu engageant. Les feuilles mortes venues de la forêt proche, les traces de pollen au printemps et les résidus de pollution finissent par former une couche tenace sur les surfaces.</p>\n<p class=\"mt-4\">Retrouver un balcon agréable change le quotidien : un sol net, des garde-corps sans coulures grises, un espace où poser une table sans hésiter. Dans les résidences récentes et petits collectifs de Saint-Germain-en-Laye, les balcons en carrelage ou béton méritent un traitement adapté qui respecte les joints et ravive l'aspect d'origine. Le confort visuel rejaillit sur l'envie d'utiliser cet espace extérieur.</p>\n<p class=\"mt-4\">Notre intervention suit un plan précis : diagnostic du support, protection des éléments sensibles, traitement adapté. L'accès en étage et la gêne minimale sont anticipés pour respecter le calme résidentiel de la ville.</p>",
      uniqueDeepDive: "<h3>1. Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et portes reçoivent une protection pour éviter les projections. Les gros dépôts visibles — feuilles, terre, débris — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>2. Traitement du sol et des surfaces</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour carrelage grès, béton ou dalles. Le brossage manuel ou mécanique décolle les salissures incrustées. Le rinçage s'effectue avec une pression contrôlée, douce sur les joints fragiles. Les garde-corps et murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>3. Gestion de l'eau et finalisation</h3>\n<p>Un <strong>dispositif anti-coulures</strong> protège les voisins du dessous et la façade pendant le rinçage. L'eau est canalisée vers les évacuations existantes. Après séchage, le mobilier reprend sa place. Des conseils d'entretien vous sont transmis pour espacer les interventions futures.</p>",
      specificChallenges: [
        "Dépôts verts incrustés dans les <strong>joints des balcons carrelés</strong> en résidence.",
        "Gestion des coulures vers les <strong>étages inférieurs</strong> dans les petits collectifs.",
        "Traces de pollution urbaine sur les garde-corps exposés côté rue.",
        "Supports variés — béton brut, carrelage grès — nécessitant des traitements distincts.",
        "Accès en étage avec matériel adapté et intervention silencieuse.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons carrelés des résidences de Saint-Germain-en-Laye, comment évitez-vous d'abîmer les joints pendant le nettoyage ?",
          answer: "<p><strong>La pression est réglée</strong> en fonction de l'état des joints. Sur les carrelages grès fréquents dans les résidences récentes, nous utilisons une pression douce combinée à un brossage manuel ciblé. Les joints fragilisés sont traités sans projection directe pour préserver leur étanchéité.</p>",
        },
        {
          question: "Dans les appartements en étage de Saint-Germain-en-Laye, comment gérez-vous l'eau et les coulures pendant le nettoyage du balcon ?",
          answer: "<p>Un dispositif de récupération canalise l'eau vers les évacuations existantes. Les bords du balcon sont protégés pour éviter les écoulements chez les voisins du dessous. Cette organisation est systématique dans les petits collectifs où la proximité entre étages impose une vigilance particulière.</p>",
        },
        {
          question: "Sur les balcons de pavillons à Saint-Germain-en-Laye, comment retirez-vous les traces grasses laissées après un barbecue ?",
          answer: "<p>Un dégraissant adapté au support est appliqué sur les zones concernées avant brossage. Le produit agit quelques minutes pour dissoudre les résidus de cuisson. Le rinçage élimine ensuite les graisses sans laisser de film, même sur les dalles poreuses ou le béton brut.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, comment nettoyez-vous un balcon sans haute pression quand le support est sensible ?",
          answer: "<p><strong>Le brossage manuel</strong> avec un produit adapté remplace la haute pression sur les supports fragiles. Cette méthode convient aux joints anciens ou aux dalles sur plots. Le rinçage s'effectue à basse pression ou au jet classique pour un résultat efficace sans risque de dégradation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon contaminé par les fientes de pigeons, avec désinfection des supports et mise en place de solutions anti-retour adaptées à votre configuration.",
      whyUsBullets: [
        "Connaissance des zones exposées autour du domaine national et des secteurs arborés de Saint-Germain-en-Laye.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection homologuée sur tous les supports.",
        "Intervention discrète avec gestion des accès en centre-ville et évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, <strong>les fientes s'accumulent sur le sol</strong>, le garde-corps et les rebords de fenêtre. Dans les secteurs proches du domaine national ou des grands arbres du centre-ville, les balcons exposés subissent des dépôts réguliers qui finissent par imprégner les joints et tacher durablement le carrelage. L'odeur persiste, le linge ne peut plus sécher dehors, et l'espace devient inutilisable.</p>\n<p class=\"mt-4\">Sur les immeubles anciens comme sur les résidences récentes de Saint-Germain-en-Laye, les supports extérieurs — béton, carrelage grès, garde-corps métalliques — se dégradent sous l'effet de l'acidité des déjections. Les traces s'incrustent, la peinture s'écaille, et la corrosion s'installe si rien n'est fait. Retrouver un balcon propre et utilisable change le quotidien : aérer sans gêne, profiter de l'extérieur, recevoir sans embarras.</p>\n<p class=\"mt-4\">Notre intervention suit un protocole structuré : diagnostic de l'étendue des dépôts, confinement de la zone, traitement des supports et désinfection complète. Nous adaptons l'organisation aux contraintes d'accès fréquentes en centre-ville — digicodes, stationnement limité — pour intervenir sans perturber le voisinage.</p>",
      uniqueDeepDive: "<h3>1. Contamination visible — Sécurisation et confinement</h3>\n<p>Les fientes sèches libèrent des particules nocives au moindre mouvement d'air. Avant toute manipulation, nous équipons nos techniciens de masques FFP2, gants, lunettes et combinaisons jetables. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou les balcons voisins.</p>\n<p class=\"mt-4\">Une <strong>humidification préalable</strong> neutralise les poussières contaminées et empêche leur envol pendant le ramassage.</p>\n\n<h3>2. Dépôts incrustés — Nettoyage et collecte sécurisée</h3>\n<p>Les fientes sont collectées manuellement puis conditionnées en sacs étanches. Le sol, le garde-corps, les vitrages et les murs mitoyens sont ensuite traités selon leur état. Les supports poreux nécessitent un travail plus approfondi pour déloger les résidus incrustés dans les joints.</p>\n\n<h3>3. Risque de réinfestation — Désinfection et dissuasion</h3>\n<p>Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces, avec respect du temps de contact. Après rinçage et aération, nous pouvons installer des dispositifs anti-retour — pics sur les rebords, filets de protection — selon la configuration de votre balcon.</p>",
      specificChallenges: [
        "Proximité du domaine national : balcons exposés aux <strong>dépôts réguliers</strong> liés aux colonies de pigeons.",
        "Immeubles anciens avec <strong>corniches et rebords</strong> propices à la nidification des oiseaux.",
        "Supports variés — carrelage, béton, métal — nécessitant des traitements différenciés.",
        "Accès en centre-ville avec digicodes et stationnement contraint à anticiper.",
        "Odeurs persistantes sur loggias semi-fermées demandant une aération prolongée après traitement.",
      ],
      faqAdditions: [
        {
          question: "Sur un balcon proche du domaine national à Saint-Germain-en-Laye, quels sont les risques sanitaires liés aux fientes de pigeons ?",
          answer: "<p><strong>Les fientes de pigeons</strong> peuvent contenir des agents pathogènes — bactéries, champignons, parasites — qui se dispersent dans l'air une fois sèches. Sur les balcons exposés près des grands arbres du domaine, l'accumulation régulière augmente le risque d'inhalation lors de l'ouverture des fenêtres ou du séchage du linge.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, quels EPI et quel protocole de sécurité utilisez-vous pour nettoyer des fientes de pigeons sur un balcon ?",
          answer: "<p>Nos techniciens portent masque FFP2, lunettes de protection, gants et combinaison jetable. La zone est confinée par bâchage avant toute manipulation. Une humidification préalable empêche l'envol des particules contaminées pendant le ramassage et le traitement des supports.</p>",
        },
        {
          question: "Après un nettoyage de fientes sur un balcon à Saint-Germain-en-Laye, pourquoi la désinfection des supports est-elle obligatoire ?",
          answer: "<p>Le simple retrait des fientes ne suffit pas à éliminer les agents pathogènes présents sur les surfaces. Nous appliquons un produit virucide et bactéricide homologué avec un temps de contact respecté. Cette étape garantit l'assainissement complet du balcon avant sa remise en service.</p>",
        },
        {
          question: "Autour du Château de Saint-Germain-en-Laye, quelles zones extérieures sont les plus exposées aux fientes de pigeons sur les balcons ?",
          answer: "<p>Les balcons orientés vers les grands arbres, les <strong>corniches d'immeubles anciens</strong> et les rebords de fenêtre offrent des perchoirs aux pigeons. Les secteurs proches du domaine national et des espaces arborés du centre-ville présentent une exposition plus forte, avec des dépôts récurrents si aucune dissuasion n'est installée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Saint-Germain-en-Laye, du secteur Rotondes aux résidences proches du Domaine national.",
        "Détachage ciblé selon le textile et extraction poussée pour un séchage rapide et une remise en service le jour même.",
        "Coordination d'accès simplifiée, gestion du stationnement en centre-ville et intervention discrète adaptée aux contraintes résidentielles.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, <strong>les auréoles sur le tapis du salon</strong>, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans le secteur des Rotondes comme dans les autres quartiers résidentiels de Saint-Germain-en-Laye, les textiles d'ameublement absorbent poussières, allergènes et taches au fil des mois.</p>\n<p class=\"mt-4\">Un nettoyage adapté redonne aux fibres leur aspect d'origine et améliore sensiblement le confort au quotidien. Dans les petits collectifs et pavillons de la ville, où les familles passent du temps sur ces surfaces, l'entretien régulier évite que les salissures ne s'incrustent durablement. Le rendu visuel s'améliore, les odeurs disparaissent, et l'hygiène générale du logement progresse.</p>\n<p class=\"mt-4\">Notre intervention commence par un diagnostic du textile et de la nature des taches. Nous adaptons ensuite le traitement selon le tissu — coton, laine, synthétique ou velours — et organisons l'accès au logement en tenant compte des contraintes de stationnement fréquentes en centre-ville.</p>",
      uniqueDeepDive: "<h3>1. Textile propre et assaini</h3>\n<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des taches visibles, des odeurs et des allergènes accumulés. Le résultat dépend de l'ancienneté des salissures et du type de fibre, mais l'amélioration est perceptible dès le séchage terminé.</p>\n\n<h3>2. Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute action, nous identifions le textile (coton, laine, synthétique, velours) et la nature des taches (café, vin, urine, graisse). Un test discret sur zone cachée permet de valider la méthode. Les taches tenaces reçoivent un détachage enzymatique localisé.</p>\n\n<h3>3. Injection-extraction et séchage</h3>\n<p>Le traitement principal utilise la technique d'injection-extraction textile, avec pression et température adaptées aux fibres fragiles. L'extraction maximale réduit le temps de séchage. Nous vous indiquons le délai avant remise en service selon l'épaisseur du textile et l'aération disponible, généralement quelques heures.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés familiaux nécessitant un pré-traitement enzymatique adapté.",
        "Textiles variés (velours, laine, synthétique) demandant une <strong>adaptation de pression</strong> et température.",
        "Stationnement difficile en centre-ville imposant une organisation logistique précise.",
        "Séchage à optimiser selon <strong>l'aération du logement</strong> pour une remise en service rapide.",
        "Présence d'animaux ou d'enfants nécessitant des produits compatibles après intervention.",
      ],
      faqAdditions: [
        {
          question: "Dans les logements familiaux du secteur Lycée International, comment éliminez-vous acariens et allergènes d'un canapé ou d'un tapis ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur et déloge les acariens, poussières et allergènes accumulés. Le traitement améliore l'hygiène du textile sans laisser de résidus. Pour les foyers avec enfants ou personnes sensibles, cette méthode réduit significativement la charge allergénique présente dans les rembourrages.</p>",
        },
        {
          question: "Dans un appartement à Saint-Germain-en-Laye, combien de temps faut-il attendre avant de réutiliser un canapé ou un tapis ?",
          answer: "<p><strong>Le délai varie selon l'épaisseur du textile</strong> et l'aération du logement. En général, comptez entre deux et six heures pour un canapé, parfois davantage pour un matelas épais. Nous vous donnons une estimation précise après l'extraction et des conseils pour accélérer le séchage si nécessaire.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, comment adaptez-vous votre nettoyage selon le textile et le rembourrage du canapé ou du tapis ?",
          answer: "<p>Chaque fibre réagit différemment : le coton supporte une extraction plus poussée, la laine demande une température contrôlée, le velours nécessite un brossage dans le sens du poil. Nous testons systématiquement sur une zone cachée avant d'intervenir sur l'ensemble de la surface.</p>",
        },
        {
          question: "Dans une maison familiale de Saint-Germain-en-Laye, à quelle fréquence faut-il nettoyer un canapé ou un tapis très utilisé ?",
          answer: "<p><strong>Pour un usage quotidien avec enfants ou animaux</strong>, un entretien annuel permet de maintenir l'hygiène et l'aspect du textile. Si des taches apparaissent régulièrement ou si des odeurs persistent, un rafraîchissement tous les six mois évite que les salissures ne s'incrustent durablement dans les fibres.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts verts, pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses exposées en secteur boisé, où mousses et lichens s'installent rapidement toute l'année.",
        "Traitement différencié selon le support avec produits anti-mousse adaptés à la pierre, au bois ou au composite.",
        "Organisation respectueuse du voisinage avec gestion des eaux et protection systématique des plantations environnantes.",
      ],
      uniqueIntro: "<p>Dans le <strong>quartier Pontel</strong>, les terrasses des pavillons accumulent rapidement mousses, lichens et dépôts organiques. L'exposition aux arbres environnants et l'humidité persistante créent des conditions propices à ces formations végétales. Les dalles deviennent glissantes, le bois verdit, la pierre se ternit. Chaque saison ajoute une couche supplémentaire difficile à retirer sans méthode adaptée.</p>\n<p class=\"mt-4\">Sur les terrasses en pierre, bois ou carrelage fréquentes dans les résidences de Saint-Germain-en-Laye, un entretien régulier permet de conserver l'aspect d'origine et d'éviter les dégradations durables. Les joints s'encrassent, les surfaces poreuses absorbent les salissures, le mobilier laisse des traces. Retrouver une terrasse accueillante change l'usage quotidien de cet espace extérieur.</p>\n<p class=\"mt-4\">L'intervention se prépare en tenant compte des <strong>accès et du stationnement en secteur résidentiel calme</strong>. Diagnostic du support, protection des plantations et menuiseries, choix de la technique appropriée : chaque étape est planifiée pour un résultat durable sans risque pour les matériaux.</p>",
      uniqueDeepDive: "<h3>1. Sol principal et joints</h3>\n<p>Le revêtement est d'abord débarrassé des feuilles, terre et débris accumulés. Un produit adapté au support traite ensuite les mousses et dépôts verts incrustés. Le brossage mécanique ou manuel décolle les salissures tenaces des joints et des surfaces poreuses.</p>\n<p class=\"mt-4\">La <strong>pression est ajustée</strong> selon le matériau : contrôlée sur bois et pierre naturelle, plus soutenue sur carrelage ou béton.</p>\n\n<h3>2. Éléments périphériques</h3>\n<p>Les garde-corps, murets et escaliers extérieurs reçoivent le même traitement. Ces zones souvent négligées concentrent humidité et salissures. Les margelles, si présentes, sont nettoyées avec précaution pour préserver leur finition.</p>\n\n<h3>3. Évacuation et séchage</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations et jardinières sont protégées tout au long de l'intervention. Un temps de séchage permet de vérifier le résultat avant remise en place du mobilier extérieur.</p>",
      specificChallenges: [
        "Mousses tenaces sur les terrasses ombragées par la végétation environnante.",
        "Supports variés nécessitant une <strong>adaptation de la pression</strong> et des produits utilisés.",
        "Joints poreux qui retiennent l'humidité et favorisent le verdissement rapide.",
        "Accès parfois contraints dans les jardins de pavillons avec stationnement limité.",
        "Protection des <strong>plantations et mobilier</strong> pendant toute la durée de l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Sur une terrasse en pierre, bois ou carrelage à Saint-Germain-en-Laye, comment évitez-vous d'abîmer le support pendant le nettoyage ?",
          answer: "<p><strong>Chaque matériau reçoit un traitement spécifique</strong>. La pression est réduite sur le bois pour éviter l'éclatement des fibres, contrôlée sur la pierre naturelle pour préserver les joints. Le carrelage supporte une action plus directe. Un test préalable sur une zone discrète valide toujours la méthode retenue.</p>",
        },
        {
          question: "Dans le quartier Pontel à Saint-Germain-en-Laye, comment éliminez-vous mousses et lichens sur une terrasse exposée ?",
          answer: "<p>Un produit anti-mousse adapté au support est appliqué après le retrait des gros dépôts. Le brossage mécanique décolle les formations végétales incrustées. Sur les terrasses ombragées par les arbres du secteur, un traitement préventif peut être proposé pour ralentir la réapparition saisonnière.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, comment traitez-vous aussi les escaliers et margelles autour d'une terrasse ?",
          answer: "<p>Ces éléments périphériques sont intégrés à l'intervention. Les escaliers extérieurs, souvent glissants, reçoivent le même traitement anti-mousse que le sol principal. Les margelles sont nettoyées avec précaution pour conserver leur finition, en adaptant la pression selon leur matériau.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, quand choisissez-vous la haute pression ou un nettoyage doux pour une terrasse ?",
          answer: "<p>Le choix dépend du support et de son état. La haute pression convient au béton et au carrelage résistant. <strong>Le bois composite ou naturel</strong>, la pierre poreuse et les joints fragiles nécessitent une approche douce avec brossage et produits adaptés. Le diagnostic initial détermine la méthode appropriée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une mise en propreté complète de votre logement après travaux, déménagement ou avant état des lieux, avec traitement adapté de chaque pièce et surface pour une remise des clés sereine.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Saint-Germain-en-Laye, du centre historique aux résidences récentes.",
        "Polyvalence sur parquets anciens, carrelages et surfaces techniques des pièces d'eau.",
        "Coordination souple avec agences, artisans ou propriétaires selon vos délais de remise.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou un déménagement, un appartement du <strong>quartier Cœur de ville</strong> accumule poussières de chantier, traces sur les vitres et résidus dans les pièces d'eau. Les délais serrés avant remise des clés ou état des lieux laissent peu de marge pour un ménage approfondi, surtout quand artisans et déménageurs se succèdent.</p>\n<p class=\"mt-4\">Un logement propre facilite la validation de l'état des lieux et évite les retenues sur caution. Dans les appartements anciens avec parquets ou les résidences récentes carrelées, chaque surface demande un traitement adapté. Les placards, plinthes et interrupteurs souvent négligés font pourtant partie des points de contrôle.</p>\n<p class=\"mt-4\">Nous organisons notre passage en coordination avec vos contraintes : <strong>fin de chantier avec évacuation des gravats</strong>, intervention entre deux rendez-vous agence, ou préparation avant l'arrivée des nouveaux occupants. Le planning s'ajuste selon l'accès au logement et les disponibilités de chacun.</p>",
      uniqueDeepDive: "<h3>1. Diagnostic et préparation</h3>\n<p>Nous évaluons l'état du logement : nature de l'intervention, surfaces concernées, présence de résidus de chantier ou traces d'usage. Les gravats et déchets volumineux sont évacués si nécessaire.</p>\n<p class=\"mt-4\">Les <strong>zones fragiles</strong> reçoivent une protection adaptée avant le début du nettoyage.</p>\n\n<h3>2. Traitement pièce par pièce</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes. Les sols sont aspirés puis lavés selon leur revêtement. Cuisine et salle de bain font l'objet d'un traitement spécifique : sanitaires, faïences, plans de travail, électroménager.</p>\n<p class=\"mt-4\">Les vitres intérieures sont nettoyées. Interrupteurs, poignées et radiateurs sont dégraissés.</p>\n\n<h3>3. Contrôle et remise</h3>\n<p>Chaque pièce est vérifiée : placards intérieurs, traces de peinture ou colle résiduelles, finitions. Le logement est aéré avant la remise des clés.</p>\n<p class=\"mt-4\">Un point rapide avec vous ou l'agence permet de valider la prestation.</p>",
      specificChallenges: [
        "Poussières de chantier infiltrées dans placards et recoins des appartements anciens.",
        "Traces de peinture ou enduit sur parquets et carrelages à traiter sans abîmer le support.",
        "Coordination avec les délais serrés des états des lieux en centre-ville.",
        "Accès par digicode et stationnement limité près de la Place Charles de Gaulle.",
        "Pièces d'eau à remettre en état complet avant contrôle agence ou propriétaire.",
      ],
      faqAdditions: [
        {
          question: "Dans le centre-ville de Saint-Germain-en-Laye, quelle différence faites-vous entre un nettoyage standard et un nettoyage de fin de chantier ?",
          answer: "<p><strong>Le nettoyage fin de chantier</strong> inclut l'évacuation des gravats légers, le traitement des traces de peinture ou enduit, et un dépoussiérage complet des surfaces verticales. Le nettoyage standard se concentre sur l'entretien courant sans ces résidus de travaux.</p>",
        },
        {
          question: "À Saint-Germain-en-Laye, comment adaptez-vous le devis selon la surface d'un appartement ancien ou récent ?",
          answer: "<p>Nous évaluons la configuration lors d'un échange préalable : nombre de pièces, état des sols, <strong>présence de moulures ou recoins</strong> dans les logements anciens. La surface et le type de revêtement déterminent le temps d'intervention et les méthodes employées.</p>",
        },
        {
          question: "Après un dégât des eaux dans une maison à Saint-Germain-en-Laye, quel nettoyage réalisez-vous avant la remise en état ?",
          answer: "<p>Nous intervenons une fois le logement asséché pour éliminer les dépôts, traiter les traces d'humidité sur les surfaces accessibles et préparer les sols et murs avant d'éventuels travaux de rénovation. Les zones touchées sont nettoyées et ventilées.</p>",
        },
        {
          question: "Lors d'un déménagement à Saint-Germain-en-Laye, comment coordonnez-vous votre passage avec les artisans ou l'agence ?",
          answer: "<p>Nous calons notre intervention après le départ des déménageurs ou la fin des travaux, en lien direct avec vous ou l'agence. Les horaires s'ajustent selon les contraintes d'accès et la date de l'état des lieux prévu.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;