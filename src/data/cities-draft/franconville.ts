import type { City } from "~/types/geo";

const city: City = {
  name: "Franconville",
  slug: "franconville",
  postalCodes: ["95130"],

  department: {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Franconville. Proche de la gare RER C et Transilien H, notre équipe adapte ses interventions aux contraintes du bâti local et aux accès sécurisés.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>À Franconville, au cœur de la communauté d'agglomération Val Parisis, Klinova accompagne syndics, gestionnaires et particuliers dans l'entretien régulier de leurs espaces. Notre présence locale permet une réactivité adaptée aux besoins du terrain.</p>\n<p class=\"mt-4\">Nous coordonnons les interventions de <strong>propreté et de maintenance</strong> en tenant compte des contraintes d'accès, des horaires sensibles et des spécificités de chaque site. Un interlocuteur dédié assure le suivi et le reporting si nécessaire.</p>\n<ul>\n  <li><strong>Planification selon vos contraintes :</strong> Horaires décalés possibles pour limiter la gêne des occupants, coordination avec gardiens ou gestionnaires pour les accès.</li>\n  <li><strong>Équipe locale formée :</strong> Techniciens habitués aux configurations du secteur, des petits collectifs aux résidences avec parkings souterrains.</li>\n  <li><strong>Suivi transparent :</strong> Compte-rendu d'intervention disponible, ajustements rapides en cas de besoin spécifique ou d'urgence ponctuelle.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls ouverts</strong> exposés aux poussières et salissures extérieures, entretien fréquent nécessaire.",
    "Parkings souterrains avec <strong>traces d'huile et résidus de pneus</strong> à traiter régulièrement.",
    "Accès par <strong>digicodes ou badges</strong> : coordination préalable indispensable.",
    "Proximité de la D14 : <strong>dépôts atmosphériques</strong> sur balcons et terrasses.",
    "Stationnement difficile en centre-ville, <strong>créneaux horaires à anticiper</strong>.",
    "Escaliers étroits dans certains collectifs, <strong>matériel adapté</strong> requis.",
  ],

  // Texte brut uniquement
  districts: [
    "Hôtel de Ville",
    "Les Fontaines",
    "Jean Monnet",
    "Quartier de l'Europe",
    "Épine-Guyon",
    "Séquoia de la Gare",
  ],
  nearbyCities: [
    "Le Plessis-Bouchard",
    "Montigny-lès-Cormeilles",
    "Ermont",
    "Saint-Leu-la-Forêt",
    "Sannois",
    "Cormeilles-en-Parisis",
    "Taverny",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Franconville",
    "Gare Franconville-Le Plessis-Bouchard",
    "Parc de la Mairie",
    "Zone commerciale IKEA",
    "D14",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les copropriétés avec digicodes à Franconville ?",
      answer: "<p>Nous récupérons les <strong>codes d'accès ou badges</strong> en amont auprès du syndic ou du gardien. L'équipe intervient aux horaires convenus, sans solliciter les résidents. En cas de modification d'accès, nous ajustons rapidement notre organisation pour maintenir la continuité du service.</p>",
    },
    {
      question: "Quel délai prévoir pour une première intervention sur le secteur ?",
      answer: "<p>Selon la nature de la demande et la disponibilité, nous pouvons généralement <strong>intervenir sous 48 à 72 heures</strong>. Pour les situations urgentes, un passage plus rapide reste possible après échange téléphonique. Le délai exact dépend de l'accessibilité du site et du volume de travail.</p>",
    },
    {
      question: "Proposez-vous un interlocuteur unique pour le suivi des prestations ?",
      answer: "<p>Oui, chaque client dispose d'un <strong>référent dédié</strong> qui centralise les demandes, planifie les passages et transmet les comptes-rendus. Cette organisation simplifie les échanges et permet d'ajuster les interventions selon l'évolution des besoins ou les retours terrain.</p>",
    },
    {
      question: "Comment gérez-vous le stationnement du matériel près de la gare ou en centre-ville ?",
      answer: "<p>Nos équipes repèrent les <strong>zones de dépose autorisées</strong> avant chaque intervention. En secteur contraint, nous privilégions des créneaux horaires où le stationnement reste accessible. Le matériel est déchargé rapidement pour limiter l'encombrement sur la voie publique.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },


  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Une intervention complète sur vos moquettes avec extraction des salissures en profondeur, traitement des zones de passage et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des configurations de halls et copropriétés dans les quartiers résidentiels de Franconville.",
        "Matériel d'injection-extraction professionnel adapté aux moquettes bouclées, velours et dalles textiles.",
        "Planification des créneaux en fonction des accès restreints et du stationnement disponible.",
      ],
      uniqueIntro: "<p>Les traces grises le long des couloirs, les auréoles près des entrées et les fibres tassées aux points de passage : ces marques s'installent progressivement sur les moquettes des halls et bureaux. Dans le <strong>quartier Épine-Guyon</strong>, les copropriétés subissent un encrassement régulier lié aux allées et venues quotidiennes. Les taches de café, les résidus de semelles et les poussières fines s'accumulent sans qu'un simple aspirateur puisse les déloger.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur tenue et leur aspect d'origine. Dans les <strong>petits collectifs</strong> de Franconville, les halls retrouvent une propreté visible dès l'entrée de l'immeuble. Les odeurs persistantes disparaissent, les couleurs se ravivent et l'impression générale s'améliore pour les résidents comme pour les visiteurs.</p>\n<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic préalable et d'un protocole structuré. L'accès par escaliers étroits et la présence de digicodes sont intégrés dès la planification, avec un stationnement anticipé pour le matériel d'injection-extraction.</p>",
      uniqueDeepDive: "<h3>1. Fibres encrassées et taches incrustées</h3>\n<p>Le diagnostic identifie la nature de la moquette : bouclée, velours, épaisse ou fine. Les zones de trafic intense et les taches anciennes sont repérées. Les protections sont posées sur les plinthes et bas de murs avant toute intervention.</p>\n\n<h3>2. Traitement par injection-extraction</h3>\n<p>La méthode consiste à injecter une solution nettoyante dans les fibres puis à l'extraire immédiatement avec les salissures. Les passages sont multipliés sur les zones les plus sollicitées. Un détachage ciblé complète le traitement sur les marques tenaces.</p>\n\n<h3>3. Gestion du séchage et remise en service</h3>\n<p>L'extraction maximale limite le temps de séchage, généralement estimé entre 4 et 8 heures selon l'épaisseur et la ventilation. Des consignes de <strong>non-piétinement</strong> sont transmises pour préserver le résultat. La fréquence d'entretien recommandée dépend du niveau de passage constaté.</p>",
      specificChallenges: [
        "Halls de copropriété avec moquettes soumises au <strong>passage quotidien des résidents</strong>.",
        "<strong>Fibres tassées et grises</strong> sur les zones de circulation malgré l'aspiration régulière.",
        "Accès par escaliers étroits nécessitant un matériel compact et maniable.",
        "Stationnement du véhicule à anticiper dans les secteurs résidentiels denses.",
        "Séchage à coordonner avec les horaires d'occupation des locaux.",
      ],
      faqAdditions: [
        {
          question: "Dans les petits collectifs d'Épine-Guyon, comment intervenez-vous avec des escaliers étroits pour le nettoyage de moquette ?",
          answer: "<p>Nous utilisons un <strong>matériel compact</strong> spécialement conçu pour les accès restreints. Les flexibles et la machine d'extraction sont dimensionnés pour passer dans les cages d'escalier sans bloquer la circulation. Le balisage temporaire limite la gêne pour les résidents pendant l'intervention.</p>",
        },
        {
          question: "Les moquettes des halls de copropriété proches du centre-ville gardent-elles les taches anciennes malgré un entretien régulier ?",
          answer: "<p>Les taches incrustées résistent souvent à l'aspiration classique. Notre méthode par injection-extraction atteint les salissures logées en profondeur dans les fibres. Un détachage préalable est appliqué sur les marques les plus tenaces avant le passage général pour améliorer le résultat.</p>",
        },
        {
          question: "À Franconville, adaptez-vous votre nettoyage de moquette selon qu'il s'agit d'une copropriété, d'un bureau ou d'un logement ?",
          answer: "<p>Chaque contexte implique des contraintes différentes. En copropriété, nous coordonnons avec le syndic et respectons les horaires de passage. En bureau, l'intervention se fait souvent en dehors des heures de travail. À domicile, nous adaptons le créneau aux disponibilités du foyer.</p>",
        },
        {
          question: "Autour de la gare Franconville-Le Plessis-Bouchard, comment gérez-vous le stationnement du matériel pour nettoyer une moquette ?",
          answer: "<p>Le stationnement est anticipé lors de la prise de rendez-vous. Nous identifions les emplacements disponibles ou les accès cour pour positionner le véhicule au plus près. Si nécessaire, le matériel est acheminé à pied sur une courte distance avec un chariot adapté.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et extérieurs, avec autolaveuse et gestion stricte des eaux de lavage, pour des sols dégraissés et sécurisés.",
      whyUsBullets: [
        "Connaissance des accès et contraintes de stationnement autour du quartier Séquoia de la Gare et du centre-ville.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux de lavage selon les normes en vigueur.",
        "Rotation véhicules organisée par zones, balisage sécurisé et intervention possible en horaires décalés.",
      ],
      uniqueIntro: "<p>Autour de la <strong>Mairie de Franconville</strong>, les copropriétés et résidences disposent souvent de parkings souterrains où s'accumulent poussières, traces de pneus et coulures d'huile. Ces dépôts rendent les sols glissants et dégradent progressivement le revêtement. Sans intervention régulière, les rampes d'accès perdent leur adhérence et les rigoles se bouchent, compliquant l'évacuation des eaux de pluie.</p>\n<p class=\"mt-4\">Un lavage mécanisé redonne aux <strong>sous-sols des ensembles résidentiels</strong> un aspect propre et fonctionnel. Les résidents retrouvent un espace plus agréable, les syndics limitent les réclamations liées à la saleté ou aux odeurs, et la durée de vie du béton s'en trouve prolongée. Les zones de circulation redeviennent sûres, y compris pour les piétons.</p>\n<p class=\"mt-4\">Nous coordonnons chaque chantier en tenant compte du <strong>flux de véhicules et du stationnement compliqué</strong> autour du centre-ville. Rotation par zones, balisage visible, horaires adaptés : l'objectif reste de limiter la gêne tout en assurant un décrassage complet.</p>",
      uniqueDeepDive: "<h3>1. Zones de circulation principales</h3>\n<p>Le traitement débute par les allées centrales et les places de stationnement les plus fréquentées. Après un balayage préalable, l'autolaveuse effectue plusieurs passes sur le béton, en combinant aspiration et dégraissant adapté au revêtement.</p>\n<p class=\"mt-4\">Les taches d'huile anciennes reçoivent un traitement ciblé avant le passage mécanisé.</p>\n\n<h3>2. Rampes et angles critiques</h3>\n<p>Les rampes d'accès sont lavées à haute pression avec un produit antidérapant pour préserver l'adhérence. Les angles morts, pieds de murs et rigoles font l'objet d'un décrassage manuel complémentaire.</p>\n<p class=\"mt-4\">L'évacuation des eaux est contrôlée à chaque étape pour éviter tout rejet sauvage.</p>\n\n<h3>3. Finitions et recommandations</h3>\n<p>Les regards sont vérifiés, les blocs lumineux et tuyauteries dépoussiérés si demandé. Un compte-rendu est transmis au syndic ou gestionnaire avec photos avant/après.</p>\n<p class=\"mt-4\">Une fréquence d'entretien est conseillée selon le trafic observé dans le parking.</p>",
      specificChallenges: [
        "Parkings souterrains fréquents dans les copropriétés, avec ventilation limitée et sols encrassés.",
        "Taches d'huile et traces de pneus sur béton brut ou peint, nécessitant un dégraissage adapté.",
        "Rampes d'accès glissantes à traiter avec produit antidérapant pour la sécurité des usagers.",
        "Stationnement compliqué autour du centre-ville, imposant une coordination précise avec le syndic.",
        "Rigoles et regards à déboucher pour garantir l'évacuation correcte des eaux de lavage.",
      ],
      faqAdditions: [
        {
          question: "Dans les parkings souterrains de copropriété à Franconville, traitez-vous les taches d'huile anciennes avant le lavage ?",
          answer: "<p>Les coulures d'huile incrustées reçoivent un dégraissant spécifique avant le passage de l'autolaveuse. Cette étape préalable permet de décoller les résidus sans abîmer le béton. Le résultat est plus homogène et le sol retrouve un aspect propre sur l'ensemble de la surface traitée.</p>",
        },
        {
          question: "Près de la gare et du centre-ville de Franconville, comment gérez-vous les eaux de lavage lors d'un nettoyage de parking ?",
          answer: "<p>L'autolaveuse aspire l'eau au fur et à mesure du passage, limitant les écoulements. Les eaux résiduelles sont dirigées vers les regards existants après vérification de leur bon fonctionnement. Aucun rejet sauvage n'est effectué, conformément aux règles en vigueur pour ce type d'intervention.</p>",
        },
        {
          question: "Dans les parkings souterrains des résidences de Franconville, quelle méthode utilisez-vous selon le revêtement et la configuration ?",
          answer: "<p>Sur béton brut, nous privilégions l'autolaveuse avec dégraissant adapté. Sur sol peint ou résine, la pression et les produits sont ajustés pour préserver le revêtement. Les zones étroites ou encombrées sont traitées manuellement pour garantir un résultat uniforme.</p>",
        },
        {
          question: "À Franconville, faut-il fermer totalement ou partiellement un parking pendant le nettoyage selon la rotation des véhicules ?",
          answer: "<p>Nous organisons généralement une fermeture partielle par zones, avec balisage visible et information préalable des résidents. Cette méthode permet de maintenir l'accès à une partie des places pendant l'intervention. La rotation est planifiée avec le syndic selon le trafic habituel du parking.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement des dépôts incrustés, rinçage maîtrisé et protection du voisinage pour retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des expositions locales, entre axes passants et zones arborées du secteur Hôtel de Ville.",
        "Pression ajustée selon le support — carrelage, béton ou dalles sur plots — pour préserver les joints.",
        "Gestion rigoureuse des écoulements et protection systématique des balcons voisins pendant l'intervention.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement de son balcon quand les dépôts verts s'installent entre les joints et que la poussière forme une pellicule tenace sur le carrelage ? Dans le <strong>quartier Hôtel de Ville</strong>, les balcons orientés vers les espaces arborés ou les voies passantes accumulent rapidement mousses et salissures que le simple jet d'eau ne suffit plus à déloger.</p>\n<p class=\"mt-4\">Un balcon encrassé, c'est un espace qu'on délaisse. Les chaises restent pliées, les plantes s'entassent dans un coin, et l'envie d'y prendre un café disparaît. Sur les <strong>petits collectifs et résidences récentes</strong> de Franconville, les loggias comme les balcons ouverts présentent des revêtements variés — carrelage grès, béton lissé — qui réagissent différemment aux intempéries et nécessitent une approche adaptée.</p>\n<p class=\"mt-4\">L'intervention que nous proposons tient compte de ces particularités. <strong>Proximité de la D14</strong>, exposition aux poussières urbaines : nous évaluons l'état du support avant de définir le protocole, en intégrant la protection des menuiseries et la gestion des écoulements vers les étages inférieurs.</p>",
      uniqueDeepDive: "<h3>1. Un balcon propre et utilisable</h3>\n<p>Le résultat visé : un sol débarrassé des traces vertes, des joints éclaircis, un garde-corps sans coulures. Pour y parvenir, nous commençons par retirer le mobilier ou le protéger sous bâche, puis nous dégageons les gros débris — feuilles mortes, terre accumulée dans les angles.</p>\n\n<h3>2. Traitement adapté au revêtement</h3>\n<p>Carrelage grès ou béton brut ne se traitent pas de la même façon. Nous appliquons un produit ciblé selon le support, suivi d'un brossage manuel ou mécanique sur les zones incrustées. Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles.</p>\n\n<h3>3. Finitions et protection du voisinage</h3>\n<p>Les garde-corps, vitrages et murs mitoyens accessibles sont nettoyés dans la foulée. Nous veillons à canaliser les eaux de rinçage pour éviter les coulures chez vos voisins du dessous. Une fois le séchage amorcé, nous repositionnons votre mobilier et vous transmettons quelques conseils d'entretien courant.</p>",
      specificChallenges: [
        "Dépôts verts incrustés dans les joints de carrelage sur les balcons exposés nord ou ombragés.",
        "Poussières urbaines liées à la proximité de la D14 qui ternissent les surfaces en quelques semaines.",
        "Loggias fermées avec évacuation d'eau limitée, nécessitant un rinçage maîtrisé.",
        "Garde-corps en métal ou verre à traiter sans laisser de traces visibles après séchage.",
        "Coordination avec les occupants des étages inférieurs pour éviter les coulures sur leurs espaces.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons d'immeubles à Franconville, comment traitez-vous les joints de carrelage sans abîmer la surface ?",
          answer: "<p>Nous utilisons une pression modérée et un brossage ciblé sur les joints. Le produit appliqué est choisi en fonction du type de carrelage — grès cérame ou carreaux poreux — pour désincruster les mousses sans fragiliser le revêtement ni élargir les interstices.</p>",
        },
        {
          question: "Les balcons exposés à Franconville accumulent-ils des mousses et dépôts verts malgré un entretien régulier ?",
          answer: "<p>Oui, surtout sur les orientations nord ou les balcons proches d'arbres. L'humidité stagnante favorise la repousse rapide. Nous appliquons un traitement qui ralentit cette réapparition, mais un rafraîchissement annuel reste conseillé selon l'exposition.</p>",
        },
        {
          question: "Dans le quartier Hôtel de Ville, adaptez-vous le nettoyage selon un support en carrelage ou en béton ?",
          answer: "<p>Absolument. Le béton brut supporte un brossage plus appuyé, tandis que le carrelage demande une attention particulière aux joints et aux finitions émaillées. Nous ajustons la pression et le choix du produit en conséquence avant chaque intervention.</p>",
        },
        {
          question: "À Franconville, nettoyez-vous les balcons sans haute pression pour préserver les façades et les joints ?",
          answer: "<p>Quand les joints sont fragiles ou le revêtement ancien, nous privilégions un rinçage basse pression combiné à un brossage manuel. Cette méthode évite de dégrader les surfaces tout en obtenant un résultat propre et durable.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et mise en place de solutions anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Franconville, notamment les cours intérieures et balcons du quartier des Fontaines.",
        "Protocole EPI complet avec confinement systématique et désinfection virucide après chaque intervention.",
        "Organisation adaptée aux contraintes de voisinage, avec évacuation sécurisée et délai d'aération communiqué.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les rebords et garde-corps. Dans le quartier des Fontaines, les cours intérieures et balcons exposés concentrent rapidement ces dépôts. L'odeur devient gênante, le linge étendu absorbe les particules, et l'envie d'utiliser cet espace extérieur disparaît progressivement.</p>\n<p class=\"mt-4\">Sur les petits collectifs et immeubles avec corniches, les supports se dégradent sous l'effet acide des déjections. Le carrelage se ternit, les joints noircissent, la peinture des garde-corps s'écaille. Un traitement adapté redonne un balcon utilisable, sans trace ni odeur résiduelle, et préserve les matériaux d'une détérioration plus profonde.</p>\n<p class=\"mt-4\">L'intervention intègre la gestion des contraintes d'accès et la coordination avec le voisinage pour limiter les nuisances pendant le chantier. La proximité des flux piétons et des zones arborées implique une attention particulière à l'évacuation sécurisée des déchets et au temps d'aération avant réutilisation.</p>",
      uniqueDeepDive: "<h3>1. Sécurisation et confinement</h3>\n<p>L'équipe intervient équipée de masques FFP2, gants, lunettes et combinaisons jetables. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins du dessous.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser l'envol de poussières contaminées.</p>\n\n<h3>2. Nettoyage et désinfection des supports</h3>\n<p>Le ramassage des déjections s'effectue manuellement, avec conditionnement en sacs étanches. Sol, garde-corps, vitrages et murs mitoyens sont ensuite nettoyés.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les résidus organiques.</p>\n\n<h3>3. Rinçage et prévention du retour</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation sous 24 à 48 heures selon ventilation. Les déchets conditionnés sont évacués de manière sécurisée.</p>\n<p class=\"mt-4\">Si souhaité, des dispositifs dissuasifs peuvent être installés : pics sur les rebords ou filets de protection pour limiter le risque de nouvelle colonisation.</p>",
      specificChallenges: [
        "Corniches et rebords des immeubles collectifs particulièrement exposés aux dépôts.",
        "Cours intérieures du quartier des Fontaines propices à l'accumulation de fientes.",
        "Nécessité de protéger les voisins du dessous pendant l'intervention.",
        "Supports variés (carrelage, béton, garde-corps métalliques) nécessitant des traitements adaptés.",
        "Gestion de l'aération et du délai avant réutilisation du balcon.",
      ],
      faqAdditions: [
        {
          question: "En cas de fientes accumulées sur une corniche ou un balcon à Franconville, intervenez-vous rapidement pour limiter le risque sanitaire ?",
          answer: "<p>Nous organisons une intervention sous quelques jours selon disponibilité. Les fientes de pigeons contiennent des agents pathogènes qui justifient un traitement sans attendre. Le confinement et la désinfection sont systématiques pour assainir durablement l'espace concerné.</p>",
        },
        {
          question: "Dans les cours intérieures du quartier des Fontaines, quel protocole EPI appliquez-vous pour le traitement des fientes ?",
          answer: "<p>L'équipe porte masques FFP2, gants, lunettes et combinaisons jetables. La zone est bâchée pour éviter toute dispersion. Les fientes sont humidifiées avant manipulation, puis collectées en sacs étanches. Ce protocole protège les intervenants et les occupants du logement.</p>",
        },
        {
          question: "Après un assainissement de balcon à Franconville, quelle désinfection appliquez-vous sur les supports exposés ?",
          answer: "<p>Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces nettoyées. Le temps de contact recommandé est respecté pour éliminer les agents pathogènes. Cette étape complète le nettoyage mécanique et garantit un espace réellement assaini.</p>",
        },
        {
          question: "Près de la gare de Franconville, comment supprimez-vous les odeurs persistantes après un nettoyage de fientes ?",
          answer: "<p>La désinfection élimine les résidus organiques responsables des odeurs. Un rinçage final et un temps d'aération de 24 à 48 heures permettent de dissiper les dernières traces olfactives. Si l'odeur persiste, un second passage désinfectant peut être envisagé.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Rafraîchissement complet de vos canapés, tapis et matelas à Franconville, avec extraction des taches incrustées et séchage adapté pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux du secteur Séquoia de la Gare et du quartier du Vieux Marché.",
        "Détachage ciblé selon le textile, avec extraction complète et séchage contrôlé pour chaque support.",
        "Organisation de l'accès matériel adaptée aux étages et au stationnement limité près de la gare.",
      ],
      uniqueIntro: "<p>Dans le quartier Séquoia de la Gare, les canapés et tapis des logements familiaux accumulent rapidement poussières, taches de café et résidus liés à la vie quotidienne. Les enfants qui jouent au sol, les animaux qui s'installent sur les assises, les repas pris devant la télévision : chaque usage laisse des traces qui s'incrustent dans les fibres au fil des semaines.</p>\n<p class=\"mt-4\">Un entretien en profondeur change concrètement le confort de votre intérieur. Les odeurs persistantes disparaissent, les couleurs retrouvent leur éclat d'origine, et l'air ambiant gagne en qualité. Dans les appartements et maisons de Franconville, où les textiles d'ameublement sont souvent sollicités par toute la famille, cette remise en état apporte une vraie différence au quotidien.</p>\n<p class=\"mt-4\">Notre intervention commence par un diagnostic précis du textile et des salissures présentes. Nous organisons l'accès du matériel en tenant compte des étages et du stationnement autour du secteur gare, pour une prestation fluide et sans contrainte pour vous.</p>",
      uniqueDeepDive: "<h3>1. Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'obtenir un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus incrustés. Pour y parvenir, nous identifions d'abord la nature du tissu et le type de taches présentes. Un pré-traitement enzymatique cible les zones les plus marquées.</p>\n\n<h3>2. Fibres nettoyées en profondeur</h3>\n<p>Le traitement par injection-extraction permet de déloger les particules enfoncées dans les fibres. La pression et la température sont ajustées selon que le textile soit en coton, laine, synthétique ou velours. Un test discret sur une zone cachée précède toute intervention sur les matières fragiles.</p>\n\n<h3>3. Séchage maîtrisé et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et l'aération disponible, nous vous indiquons le délai avant remise en service. Des recommandations sur la fréquence d'entretien adaptée à votre usage familial complètent l'intervention.</p>",
      specificChallenges: [
        "Taches alimentaires fréquentes sur les canapés des logements familiaux du Séquoia de la Gare.",
        "Textiles variés (coton, synthétique, velours) nécessitant une adaptation du traitement.",
        "Accès matériel à organiser selon les étages dans les petits collectifs et résidences récentes.",
        "Stationnement compliqué autour du secteur gare, anticipation logistique indispensable.",
        "Présence d'animaux domestiques générant odeurs et poils incrustés dans les fibres.",
      ],
      faqAdditions: [
        {
          question: "Dans les logements familiaux du Séquoia de la Gare, le nettoyage de canapé et tapis réduit-il vraiment les acariens ?",
          answer: "<p>L'injection-extraction déloge les acariens et leurs déjections enfouis dans les fibres. Combinée au pré-traitement, cette méthode diminue significativement les allergènes présents dans vos textiles d'ameublement. Les familles avec enfants ou personnes sensibles constatent une amélioration du confort respiratoire après l'intervention.</p>",
        },
        {
          question: "Près de la gare de Franconville, combien de temps faut-il pour sécher un canapé ou un tapis après nettoyage ?",
          answer: "<p>Le temps de séchage varie selon l'épaisseur du textile et l'aération de la pièce. En général, comptez entre quatre et huit heures pour un canapé, parfois davantage pour un tapis épais. Nous effectuons une extraction maximale pour réduire ce délai et vous précisons les conditions optimales de ventilation.</p>",
        },
        {
          question: "À Franconville, comment adaptez-vous la méthode de nettoyage selon le textile du canapé ou du tapis ?",
          answer: "<p>Chaque tissu réagit différemment à la pression et à la température. Avant toute intervention, nous identifions la composition (coton, laine, synthétique, velours) et réalisons un test sur une zone discrète si nécessaire. Les réglages de notre équipement sont ensuite ajustés pour préserver les fibres tout en assurant un détachage efficace.</p>",
        },
        {
          question: "Autour du secteur gare de Franconville, comment organisez-vous l'accès du matériel pour nettoyer canapé et tapis ?",
          answer: "<p>Nous anticipons les contraintes de stationnement et d'accès aux étages avant chaque intervention. Le matériel est transporté de manière à limiter les allers-retours et la gêne dans les parties communes. Si l'immeuble dispose d'un digicode ou d'un badge, nous coordonnons les horaires avec vous pour une prestation fluide.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des expositions locales : terrasses ombragées près du parc ou soumises aux poussières de la D14.",
        "Traitement différencié selon le support : pression contrôlée sur bois, produit anti-mousse sur carrelage poreux.",
        "Protection du mobilier et des plantations, gestion rigoureuse des eaux de rinçage vers les évacuations.",
      ],
      uniqueIntro: "<p>Après quelques saisons, les terrasses exposées aux intempéries changent d'aspect. Dans le secteur de la <strong>gare Franconville-Le Plessis-Bouchard</strong>, les poussières transportées par le trafic quotidien se déposent sur les dalles et les lames de bois. L'humidité fait le reste : mousses et dépôts verts s'installent progressivement, rendant certaines zones glissantes dès les premières pluies d'automne.</p>\n<p class=\"mt-4\">Sur les <strong>terrasses de pavillons et d'appartements en rez-de-chaussée</strong>, qu'elles soient en carrelage ou en bois composite, cette dégradation limite l'usage de l'espace extérieur. Les joints noircissent, les lames perdent leur teinte d'origine, et le mobilier de jardin laisse des traces tenaces. Un entretien adapté redonne à la surface son aspect initial et permet de profiter pleinement de cet espace de vie.</p>\n<p class=\"mt-4\">Notre intervention prend en compte les contraintes propres à chaque configuration. Le long de la <strong>D14</strong>, l'exposition aux particules et à l'humidité ambiante accélère l'encrassement. Nous adaptons le protocole au support et à l'environnement pour un résultat durable.</p>",
      uniqueDeepDive: "<h3>1. Surface principale</h3>\n<p>Le revêtement de sol constitue la zone prioritaire. Nous commençons par débarrasser la terrasse des feuilles mortes, débris et terre accumulés. Un brossage manuel ou mécanique élimine les mousses superficielles avant l'application d'un produit adapté au matériau, qu'il s'agisse de carrelage, pierre naturelle ou bois.</p>\n<p class=\"mt-4\">La pression de rinçage est ajustée selon la porosité du support pour préserver les joints et la structure des lames.</p>\n\n<h3>2. Éléments périphériques</h3>\n<p>Les garde-corps, murets et escaliers extérieurs reçoivent un traitement spécifique. Ces surfaces verticales accumulent souvent des coulures et des dépôts verts moins visibles mais tout aussi tenaces.</p>\n<p class=\"mt-4\">Le mobilier extérieur et les jardinières sont déplacés ou protégés pendant l'intervention.</p>\n\n<h3>3. Gestion des écoulements</h3>\n<p>L'eau de rinçage est dirigée vers les points d'évacuation existants. Nous veillons à protéger les plantations adjacentes et à limiter les projections vers les espaces voisins, particulièrement sur les terrasses en hauteur ou mitoyennes.</p>",
      specificChallenges: [
        "Mousses et lichens qui s'étendent chaque année sur les dalles exposées à l'ombre.",
        "Lames de bois composite grisées par les UV et l'humidité persistante.",
        "Joints de carrelage noircis difficiles à récupérer sans traitement adapté.",
        "Terrasses en rez-de-jardin avec accès matériel parfois contraint par le passage latéral.",
        "Gestion des écoulements vers les plantations ou les espaces mitoyens.",
      ],
      faqAdditions: [
        {
          question: "Sur une terrasse en pierre, bois ou carrelage à Franconville, comment adaptez-vous la méthode sans abîmer le support ?",
          answer: "<p>Chaque matériau réagit différemment à la pression et aux produits. Sur pierre naturelle, nous limitons le jet pour éviter l'érosion. Le bois composite reçoit un traitement doux sans détergent agressif. Le carrelage supporte une pression plus forte, mais nous protégeons systématiquement les joints pour éviter leur dégradation.</p>",
        },
        {
          question: "Dans les terrasses pavillonnaires de Franconville, comment éliminez-vous les mousses et les lichens incrustés ?",
          answer: "<p>Un brossage mécanique retire d'abord les couches superficielles. Nous appliquons ensuite un produit anti-mousse adapté au support, laissé en action avant rinçage. Sur les zones très colonisées, un second passage peut être nécessaire. Le traitement freine la repousse pendant plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "À Franconville, à quelle fréquence faut-il nettoyer une terrasse très exposée à l'humidité et aux salissures ?",
          answer: "<p>Une terrasse ombragée ou proche d'arbres nécessite généralement un entretien annuel, idéalement au printemps avant la saison d'usage. Les surfaces très exposées aux poussières de circulation, comme celles proches de la D14, peuvent demander un rafraîchissement supplémentaire en automne.</p>",
        },
        {
          question: "Pour une terrasse à Franconville, privilégiez-vous un nettoyage doux plutôt qu'une haute pression selon le support ?",
          answer: "<p>La haute pression convient aux surfaces dures et bien jointoyées comme le carrelage grès cérame. Pour le bois, la pierre tendre ou les joints fragiles, nous optons pour une pression réduite associée à un brossage manuel. Cette approche préserve l'intégrité du support tout en éliminant efficacement les salissures.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement après travaux ou avant état des lieux, avec traitement de chaque pièce et finitions soignées pour une restitution sans réserve.",
      whyUsBullets: [
        "Connaissance des configurations résidentielles du quartier Hôtel de Ville et des secteurs pavillonnaires de Franconville.",
        "Polyvalence sur tous types de surfaces : parquet, carrelage, faïence, vitres, avec produits adaptés à chaque support.",
        "Coordination fluide avec agences et propriétaires, gestion autonome des accès pour respecter vos délais de remise.",
      ],
      uniqueIntro: "<p>Comment remettre un appartement en état quand les délais se resserrent entre la fin du chantier et la remise des clés ? Dans le secteur de la <strong>Mairie de Franconville</strong>, les rotations locatives imposent souvent des calendriers serrés. Entre poussières de plâtre, résidus de colle et traces sur les vitres, le logement nécessite une intervention structurée pour répondre aux exigences d'un état des lieux ou d'une entrée locataire.</p>\n<p class=\"mt-4\">Un nettoyage complet transforme l'impression générale du bien. Dans les <strong>appartements T2-T3 et maisons pavillonnaires</strong> qui composent une grande partie du parc résidentiel, chaque surface compte : sols, plinthes, sanitaires, placards intérieurs. Un logement propre facilite la signature, évite les litiges et valorise le bien auprès des futurs occupants.</p>\n<p class=\"mt-4\">Notre organisation tient compte des contraintes locales : <strong>digicodes fréquents, stationnement parfois difficile</strong> aux abords des résidences. Nous coordonnons l'accès avec le propriétaire, l'agence ou le gardien pour intervenir dans les délais convenus, sans retarder la chaîne de remise en état.</p>",
      uniqueDeepDive: "<h3>1. Diagnostic et préparation</h3>\n<p>Avant toute action, nous évaluons l'état du logement : nature des résidus (poussière de chantier, traces de peinture, calcaire), surfaces concernées et niveau de salissure. Les gravats ou déchets éventuels sont évacués pour libérer l'espace de travail.</p>\n\n<h3>2. Nettoyage pièce par pièce</h3>\n<p>Le dépoussiérage commence par les hauteurs : plafonds, luminaires, plinthes. Les sols sont aspirés puis lavés selon leur revêtement. Cuisine et salle de bain font l'objet d'un traitement spécifique : plans de travail, faïences, sanitaires, robinetterie. Les vitres intérieures sont nettoyées pour un rendu lumineux.</p>\n\n<h3>3. Finitions et contrôle</h3>\n<p>Les détails font la différence lors d'un état des lieux : interrupteurs, poignées, intérieurs de placards, radiateurs. Les éventuelles traces de colle ou peinture sont traitées avec des produits adaptés au support. Un contrôle final vérifie chaque pièce avant restitution des clés.</p>",
      specificChallenges: [
        "Délais serrés entre fin de chantier et état des lieux dans les résidences de Franconville.",
        "Résidus de plâtre et poussières fines après travaux dans les appartements T2-T3.",
        "Accès contraints : digicodes, badges et stationnement limité près du centre-ville.",
        "Coordination nécessaire avec artisans ou agences immobilières pour caler l'intervention.",
        "Finitions exigeantes pour éviter les réserves lors de la remise des clés.",
      ],
      faqAdditions: [
        {
          question: "À Franconville, quelle différence faites-vous entre un nettoyage standard et un nettoyage de fin de chantier ?",
          answer: "<p>Le nettoyage fin de chantier traite des salissures spécifiques aux travaux : poussières de plâtre, traces de peinture, résidus de colle sur les sols et menuiseries. Dans les résidences de Franconville, nous adaptons les produits et le temps d'intervention à l'ampleur des travaux réalisés, contrairement à un ménage classique.</p>",
        },
        {
          question: "Après des travaux dans une maison du quartier Épine-Guyon, comment retirez-vous les traces de peinture ou de colle ?",
          answer: "<p>Nous utilisons des solvants doux adaptés au support : parquet, carrelage ou vitrage. Les traces sont ramollies puis retirées sans abîmer la surface. Sur les maisons pavillonnaires de Franconville, nous vérifions systématiquement les encadrements de fenêtres et les plinthes où ces résidus s'accumulent souvent.</p>",
        },
        {
          question: "Comment coordonnez-vous le nettoyage d'appartement avec les artisans ou une agence immobilière à Franconville ?",
          answer: "<p>Nous calons notre intervention après la fin effective des travaux, en lien direct avec l'agence ou le propriétaire. Si les artisans terminent en décalé, nous ajustons notre planning. Cette coordination évite les allers-retours et garantit un logement prêt pour l'état des lieux prévu.</p>",
        },
        {
          question: "Dans les quartiers résidentiels de Franconville, comment gérez-vous l'accès au logement avec digicode et stationnement difficile ?",
          answer: "<p>Nous récupérons les codes d'accès et badges en amont. Pour le stationnement, nous repérons les zones autorisées à proximité ou sollicitons une place réservée si possible. Cette préparation nous permet d'intervenir sans retard, même dans les secteurs denses comme le quartier Hôtel de Ville.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;