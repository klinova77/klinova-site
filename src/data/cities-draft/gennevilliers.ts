import type { City } from "~/types/geo";

const city: City = {
  name: "Gennevilliers",
  slug: "gennevilliers",
  postalCodes: ["92230"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Gennevilliers. Du quartier du Luth aux abords du port fluvial, une organisation adaptée aux contraintes locales et au bâti collectif de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // format: 2 <p> then <ul>
  hubIntro: "<p>À Gennevilliers, carrefour multimodal desservi par le RER C, le Tram T1 et le Métro 13, Klinova accompagne syndics, gestionnaires et entreprises dans l'entretien régulier de leurs locaux. Une présence terrain qui s'adapte aux rythmes d'activité de la commune.</p>\n<p class=\"mt-4\">Notre approche repose sur des <strong>interventions planifiées</strong>, un suivi rigoureux et une communication directe avec vos interlocuteurs. Chaque prestation fait l'objet d'un compte-rendu si nécessaire, pour garantir transparence et traçabilité.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Nos équipes connaissent les accès aux résidences des Agnettes comme aux bâtiments proches du port. Planification ajustée selon vos contraintes horaires.</li>\n  <li><strong>Méthodes adaptées au terrain :</strong> Matériel dimensionné pour les parkings souterrains, les halls d'immeubles ou les espaces extérieurs exposés aux poussières industrielles.</li>\n  <li><strong>Suivi et reporting :</strong> Points réguliers avec les gestionnaires, remontées d'anomalies, ajustements en cours de contrat si besoin.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Poussières industrielles</strong> liées à l'activité du port et au trafic poids lourds sur la zone.",
    "Halls d'immeubles des Agnettes et du Luth soumis à un <strong>flux quotidien important</strong>.",
    "Parkings souterrains en béton brut nécessitant un <strong>décrassage régulier</strong>.",
    "Balcons exposés aux retombées de l'A86 : dépôts gris persistants.",
    "Accès par <strong>digicode ou badge</strong> dans la majorité des résidences collectives.",
  ],

  // Texte brut uniquement
  districts: [
    "Le Luth",
    "Les Agnettes",
    "Les Grésillons",
    "Fossé de l'Aumône",
    "Le Village",
    "Chandon-Brenu-Sévines",
    "Chevrins-Cité-Jardins",
  ],
  nearbyCities: [
    "Asnières-sur-Seine",
    "Colombes",
    "Villeneuve-la-Garenne",
    "L'Île-Saint-Denis",
    "Épinay-sur-Seine",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Gennevilliers",
    "Port de Gennevilliers",
    "Gare de Gennevilliers (RER C)",
    "Les Grésillons",
    "Tram T1",
    "Métro Ligne 13",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous vos interventions dans les résidences avec digicode ou badge ?",
      answer: "<p>Nous récupérons les accès en amont auprès du syndic ou du gestionnaire. À Gennevilliers, où de nombreux immeubles disposent de <strong>digicodes ou badges</strong>, cette étape est systématique. Nos équipes disposent ainsi d'une autonomie complète pour intervenir aux horaires convenus, sans solliciter les occupants.</p>",
    },
    {
      question: "Quel délai pour une première intervention sur la commune ?",
      answer: "<p>Après validation du devis, nous pouvons généralement intervenir sous <strong>5 à 10 jours ouvrés</strong>. En cas d'urgence (dégradation importante, fin de chantier), un passage plus rapide peut être organisé selon la disponibilité des équipes et la nature de la prestation demandée.</p>",
    },
    {
      question: "Intervenez-vous aussi pour les entreprises situées dans la zone portuaire ?",
      answer: "<p>Oui, nous travaillons avec des <strong>entreprises implantées autour du port de Gennevilliers</strong>. Entretien de locaux, nettoyage de parkings ou remise en état après travaux : nous adaptons nos horaires et notre matériel aux contraintes d'accès et d'activité de ces sites.</p>",
    },
    {
      question: "Comment gérez-vous les demandes urgentes ou imprévues ?",
      answer: "<p>Un interlocuteur dédié traite les demandes urgentes. Selon la nature du besoin — <strong>sinistre, dégradation, état des lieux imprévu</strong> — nous mobilisons une équipe dans les meilleurs délais. La réactivité dépend de la charge en cours, mais nous privilégions toujours une réponse rapide.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },


  // IMPORTANT: Services absents : ne pas les inclure
  services: [
    // 1) moquettes
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes par injection-extraction, avec séchage maîtrisé pour une remise en service rapide de vos espaces professionnels ou résidentiels.",
      whyUsBullets: [
        "Connaissance des typologies de halls et bureaux présents sur Gennevilliers, du Luth aux Grésillons.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles et moquettes épaisses.",
        "Interventions calées selon vos contraintes d'accès par badge et créneaux hors activité.",
      ],
      uniqueIntro: "<p>Dans les bureaux et halls situés autour du <strong>Port de Gennevilliers</strong>, les moquettes subissent un encrassement accéléré. Le trafic logistique intense génère des particules fines qui se déposent quotidiennement sur les fibres textiles. Les zones de passage — accueils, couloirs, espaces d'attente — concentrent des traces grises difficiles à éliminer par simple aspiration. Ces dépôts altèrent progressivement l'aspect des revêtements et dégradent l'image des locaux.</p>\n<p class=\"mt-4\">Un entretien en profondeur redonne aux moquettes leur tenue d'origine. Dans les <strong>grands ensembles comme Le Luth ou Les Agnettes</strong>, les halls d'immeubles équipés de dalles textiles retrouvent une propreté visible dès la fin de l'intervention. Les fibres débarrassées des résidus incrustés offrent un meilleur confort au quotidien et prolongent la durée de vie du revêtement.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des accès par badges et digicodes fréquents sur la commune. Le diagnostic préalable identifie les contraintes de stationnement et les créneaux adaptés pour limiter la gêne des occupants ou des équipes en place.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intense</h3>\n<p>Les couloirs et halls d'entrée reçoivent un traitement prioritaire. L'aspiration préalable retire les particules superficielles avant l'injection d'une solution adaptée au type de fibre. Les passes répétées sur ces surfaces à fort trafic garantissent une <strong>extraction maximale des salissures</strong> accumulées.</p>\n\n<h3>Espaces d'accueil et bureaux</h3>\n<p>Les moquettes des zones d'attente et des open spaces font l'objet d'un <strong>détachage ciblé</strong> sur les taches identifiées — café, encre, traces de semelles. La méthode injection-extraction décolle les résidus sans saturer les fibres. Les plinthes et bas de murs sont protégés pendant toute l'opération.</p>\n\n<h3>Finitions et séchage</h3>\n<p>L'extraction finale retire le maximum d'humidité résiduelle. Le temps de séchage varie selon l'épaisseur du revêtement et la ventilation des locaux — généralement entre 4 et 8 heures. Des consignes de non-piétinement sont transmises pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Poussières industrielles</strong> liées au trafic du Port de Gennevilliers, incrustées dans les fibres.",
        "Halls d'immeubles aux <strong>Agnettes et au Luth</strong> avec moquettes de circulation très sollicitées.",
        "Accès fréquents par <strong>digicodes et badges</strong>, nécessitant une coordination préalable.",
        "Dalles textiles en bureaux exposées aux <strong>traces de semelles et salissures grasses</strong>.",
        "Stationnement contraint imposant une <strong>organisation logistique anticipée</strong>.",
      ],
      faqAdditions: [
        {
          question: "Dans les halls d'immeubles du Luth équipés de badges, comment organisez-vous l'accès pour le nettoyage des moquettes ?",
          answer: "<p>Nous coordonnons l'intervention avec le gardien ou le syndic pour obtenir les accès nécessaires. Le créneau est fixé en amont pour éviter les allers-retours. Le matériel est acheminé en une seule fois, limitant les passages dans les parties communes.</p>",
        },
        {
          question: "Les moquettes situées près du Port de Gennevilliers peuvent-elles retrouver leur aspect malgré des taches anciennes de poussières ?",
          answer: "<p>Les <strong>dépôts accumulés</strong> par le trafic logistique s'incrustent en profondeur mais restent accessibles à l'injection-extraction. Un détachage préalable traite les zones les plus marquées. Le résultat dépend de l'ancienneté des taches et de l'état général des fibres.</p>",
        },
        {
          question: "Dans les copropriétés des Agnettes, comment coordonnez-vous l'intervention avec les occupants ?",
          answer: "<p>Le syndic ou le conseil syndical est informé du planning prévu. Une affiche en hall précise les horaires et les consignes de non-piétinement. L'intervention se déroule généralement en journée, sur des créneaux validés collectivement.</p>",
        },
        {
          question: "Quel temps de séchage prévoir pour une moquette à Gennevilliers avant de pouvoir réutiliser les locaux ?",
          answer: "<p>Le séchage complet prend entre 4 et 8 heures selon l'épaisseur du revêtement et la ventilation disponible. Une <strong>extraction renforcée</strong> réduit l'humidité résiduelle. Les zones traitées peuvent être remises en service dès que les fibres sont sèches au toucher.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 2) parkings
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec autolaveuse et gestion stricte des eaux usées pour des sols propres et sécurisés.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès aux parkings du secteur portuaire et des copropriétés des Agnettes.",
        "Autolaveuse professionnelle et récupération des eaux usées pour un lavage conforme aux exigences techniques.",
        "Balisage sécurisé et rotation des véhicules coordonnée avec le syndic ou le gestionnaire du site.",
      ],
      uniqueIntro: "<p>Les traces de pneus, coulures d'huile et dépôts gras sont visibles sur de nombreux sols de parkings à Gennevilliers. <strong>Autour du Port de Gennevilliers</strong>, le trafic poids lourds et les véhicules utilitaires laissent des marques tenaces sur les revêtements béton. Ces salissures s'accumulent rapidement et rendent les circulations glissantes, notamment sur les rampes d'accès.</p>\n<p class=\"mt-4\">Un sol encrassé dégrade l'image de la copropriété ou de l'entreprise. Les résidents et usagers perçoivent immédiatement un manque d'entretien. Dans les <strong>parkings souterrains avec sols en béton brut ou résine</strong>, la poussière fine se mêle aux graisses et forme une couche difficile à éliminer sans équipement adapté. Les syndics reçoivent alors des signalements récurrents.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter l'ensemble des surfaces en limitant la gêne. La <strong>circulation dense liée à l'A86</strong> impose une coordination précise pour baliser les zones et organiser la rotation des véhicules stationnés.</p>",
      uniqueDeepDive: "<h3>Encrassement général et huile incrustée</h3>\n<p>Les sols chargés en graisses et poussières nécessitent un balayage préalable pour dégager les particules libres. Le diagnostic identifie le type de revêtement et l'état des évacuations.</p>\n<p class=\"mt-4\">Un dégraissant adapté est appliqué sur les zones les plus marquées avant le passage mécanisé.</p>\n\n<h3>Rigoles obstruées et rampes glissantes</h3>\n<p>L'autolaveuse traite les surfaces planes tandis que la haute pression cible les angles morts et pieds de murs. Les rigoles sont dégagées pour garantir l'écoulement correct des eaux.</p>\n<p class=\"mt-4\">Les rampes reçoivent un traitement antidérapant pour limiter les risques de glissade après lavage.</p>\n\n<h3>Gestion des eaux et remise en circulation</h3>\n<p>Les eaux de lavage sont récupérées et évacuées selon les règles en vigueur, sans rejet vers les parties communes. Le balisage reste en place jusqu'au séchage complet.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé par le gestionnaire.</p>",
      specificChallenges: [
        "<strong>Trafic poids lourds</strong> autour du Port laissant des traces d'huile persistantes sur béton.",
        "Parkings souterrains avec <strong>évacuations parfois obstruées</strong> par les résidus de lavage.",
        "Rampes d'accès inclinées nécessitant un <strong>traitement antidérapant</strong> après nettoyage.",
        "Coordination avec les syndics pour <strong>organiser la rotation des véhicules</strong> sans bloquer les résidents.",
        "Zones à <strong>circulation dense près de l'A86</strong> imposant un balisage renforcé pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Dans les parkings près du Port de Gennevilliers, comment traiter les taches d'huile anciennes sur béton ?",
          answer: "<p>Les traces d'huile incrustées reçoivent un dégraissant professionnel avant le passage de l'autolaveuse. Le produit agit plusieurs minutes pour dissoudre les graisses. Un rinçage haute pression complète le traitement sur les zones les plus marquées, avec récupération des eaux usées.</p>",
        },
        {
          question: "Pour un parking souterrain à Gennevilliers, comment gérez-vous les eaux de lavage sans gêner l'immeuble ?",
          answer: "<p>Les eaux sont aspirées par l'autolaveuse au fur et à mesure du passage. Aucun rejet n'est effectué vers les parties communes ou les évacuations non prévues à cet effet. Le sol reste praticable rapidement après l'intervention, sans flaque résiduelle ni risque de remontée d'odeurs.</p>",
        },
        {
          question: "Autour de l'A86 à Gennevilliers, comment assurez-vous le balisage et la sécurité des usagers du parking ?",
          answer: "<p>Des cônes et barrières délimitent les zones en cours de traitement. La signalétique reste visible jusqu'au séchage complet. L'intervention peut être planifiée en horaires décalés pour limiter la gêne aux heures de forte affluence, en accord avec le gestionnaire.</p>",
        },
        {
          question: "À Gennevilliers, quelle méthode choisir entre parking souterrain et parking aérien selon le revêtement ?",
          answer: "<p>En souterrain, l'autolaveuse est privilégiée pour maîtriser les projections et récupérer les eaux. En aérien, la haute pression peut être utilisée plus librement si l'évacuation naturelle le permet. Le diagnostic initial détermine la méthode adaptée au revêtement béton ou résine.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 3) balcons
    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement adapté au support, gestion contrôlée de l'eau et protection des éléments mitoyens pour un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des immeubles collectifs de Gennevilliers et de leur exposition aux poussières urbaines liées à l'A86.",
        "Pression ajustée selon le support — carrelage, béton peint ou dalles — pour un résultat sans dégradation des joints.",
        "Organisation anti-coulures systématique et coordination avec les occupants des étages inférieurs avant chaque intervention.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement d'un balcon quand les dépôts gris s'accumulent semaine après semaine ? Dans le <strong>quartier des Grésillons</strong>, les résidents constatent souvent une couche de poussière tenace sur leur sol extérieur, mêlée à des traces verdâtres le long des joints. Cette salissure persistante transforme un espace de détente en surface négligée qu'on évite d'utiliser.</p>\n<p class=\"mt-4\">Un balcon nettoyé change la perception de l'appartement. Les <strong>balcons en béton peint ou carrelage</strong> des immeubles collectifs retrouvent leur aspect d'origine, les garde-corps redeviennent agréables au toucher, et l'envie de s'installer dehors revient naturellement. Pour les familles, c'est un espace récupéré ; pour les propriétaires, une valorisation visible du logement.</p>\n<p class=\"mt-4\">L'<strong>exposition à la pollution routière liée à l'A86</strong> accélère l'encrassement des surfaces extérieures. Notre intervention prend en compte cette contrainte locale avec un protocole adapté aux dépôts carbonés et aux mousses qui s'installent sur les supports exposés.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous commençons par déplacer ou bâcher le mobilier et les plantes présents sur le balcon. Les menuiseries, fenêtres et portes-fenêtres sont protégées pour éviter toute projection. Cette étape inclut la mise en place de protections pour les balcons situés en dessous afin d'éviter les coulures chez vos voisins.</p>\n\n<h3>Traitement des surfaces</h3>\n<p>Les gros dépôts — feuilles mortes, terre, débris divers — sont retirés manuellement. Un produit adapté au support est appliqué : formulation spécifique pour carrelage, béton ou dalles. Le brossage manuel ou mécanique déloge les salissures incrustées. Le rinçage s'effectue à pression contrôlée, en respectant l'intégrité des joints.</p>\n\n<h3>Finitions et éléments annexes</h3>\n<p>Les garde-corps sont nettoyés, ainsi que les vitrages accessibles et les murs mitoyens si nécessaire. Après séchage, nous vérifions l'ensemble de la surface et vous transmettons des conseils d'entretien pour espacer les interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "<strong>Dépôts carbonés</strong> liés au trafic de l'A86 qui noircissent les surfaces en quelques semaines.",
        "Joints de carrelage poreux sur les balcons des <strong>Grésillons</strong> nécessitant un brossage ciblé.",
        "Gestion de l'eau obligatoire pour éviter les coulures sur les balcons des étages inférieurs.",
        "Mousses vertes installées dans les angles exposés au nord sur les immeubles collectifs.",
        "Garde-corps métalliques encrassés demandant un traitement adapté pour éviter les traces.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons carrelés des immeubles collectifs de Gennevilliers, comment protégez-vous le carrelage et les joints pendant le nettoyage ?",
          answer: "<p>Nous adaptons la pression de rinçage à l'état des joints. Sur les carrelages anciens des immeubles des Grésillons ou du Luth, nous privilégions un brossage manuel avec produit désincrustant plutôt qu'une haute pression qui pourrait fragiliser les joints poreux ou fissurés.</p>",
        },
        {
          question: "Dans les quartiers exposés à la pollution de l'A86, comment éliminez-vous les dépôts verts et mousses sur un balcon ?",
          answer: "<p>Les mousses et dépôts verts liés à l'humidité et aux particules fines reçoivent un traitement spécifique. Nous appliquons un produit antimousse avant brossage, puis rinçons à pression modérée. Cette méthode retarde la réapparition des végétaux sur les surfaces exposées.</p>",
        },
        {
          question: "Dans les pavillons du quartier Chevrins-Cité-Jardins, comment retirez-vous les traces grasses de barbecue sur un balcon ou une loggia ?",
          answer: "<p>Les résidus gras nécessitent un dégraissant adapté au support. Nous l'appliquons localement sur les zones tachées, laissons agir, puis brossons avant rinçage. Sur les loggias fermées, nous contrôlons l'évacuation de l'eau pour éviter toute stagnation.</p>",
        },
        {
          question: "À Gennevilliers, intervenez-vous sans haute pression pour préserver les supports fragiles et les façades ?",
          answer: "<p>Oui, nous proposons un nettoyage basse pression ou manuel sur les balcons dont les joints sont fragilisés ou les supports sensibles. Cette approche convient aux immeubles anciens et évite les projections sur les façades ou chez les voisins.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 4) balcons-fientes
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et pose de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des immeubles exposés autour de l'Écoquartier et des secteurs où les pigeons nichent en hauteur.",
        "Protocole EPI complet avec confinement, humidification préalable et désinfection virucide systématique.",
        "Évacuation des déchets en sacs étanches et coordination avec le gardien pour l'accès aux parties communes.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les garde-corps et le sol du balcon. Dans les immeubles proches de la station Gabriel Péri, les corniches et rebords attirent les pigeons qui reviennent nicher. L'odeur s'installe, le linge étendu absorbe les particules, et l'espace extérieur devient inutilisable. Les tentatives de nettoyage à l'eau claire ne suffisent pas à éliminer les résidus incrustés ni les agents pathogènes présents dans les déjections.</p>\n<p class=\"mt-4\">Sur les balcons et loggias des immeubles collectifs de Gennevilliers, les supports en béton peint ou carrelage se dégradent sous l'effet de l'acidité des fientes. Les taches persistent, la peinture s'écaille, et le métal des garde-corps se corrode. Retrouver un balcon propre permet de réutiliser cet espace sans gêne, d'étendre du linge sans crainte et de recevoir sans embarras vis-à-vis des voisins.</p>\n<p class=\"mt-4\">Notre traitement combine décontamination des surfaces et désinfection complète. Nous intervenons avec un protocole adapté aux contraintes d'accès par badge, fréquentes dans les quartiers desservis par le métro ligne 13.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>Le résultat visé : un sol débarrassé des fientes, des garde-corps nettoyés, des vitrages sans traces, et une surface traitée avec un produit virucide homologué. L'odeur disparaît, les agents pathogènes sont éliminés.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>L'intervention débute par la protection de l'intérieur du logement et le bâchage de la zone. Nos techniciens portent combinaison jetable, masque FFP2, gants et lunettes. Les fientes sont humidifiées pour éviter l'envol de poussières contaminées, puis collectées dans des sacs étanches.</p>\n\n<h3>Traitement des supports et prévention</h3>\n<p>Sol, garde-corps, murs mitoyens et vitrages sont nettoyés puis désinfectés. Le temps de contact du produit bactéricide est respecté avant rinçage. Selon la configuration, nous proposons la pose de pics ou filets anti-pigeons sur les rebords et corniches pour limiter le retour des oiseaux.</p>",
      specificChallenges: [
        "Corniches et rebords des immeubles collectifs favorisent la <strong>nidification des pigeons</strong> toute l'année.",
        "Supports en <strong>béton peint</strong> attaqués par l'acidité des fientes, nécessitant un traitement adapté.",
        "Accès par <strong>digicode ou badge</strong> dans la plupart des résidences, coordination préalable indispensable.",
        "Proximité des voisins imposant un <strong>confinement soigné</strong> pour éviter les nuisances pendant l'intervention.",
        "Risque de <strong>réinfestation rapide</strong> sans pose de dispositifs dissuasifs après nettoyage.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons des immeubles proches de la ligne 13 à Gennevilliers, quels risques sanitaires justifient un assainissement rapide ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui se dispersent en poussières sèches. Dans les immeubles denses autour de Gabriel Péri ou des Agnettes, l'accumulation sur plusieurs semaines augmente l'exposition. Un traitement rapide limite la propagation et permet de réutiliser le balcon sans risque.</p>",
        },
        {
          question: "Dans les immeubles collectifs de Gennevilliers avec accès par badge, quel protocole EPI appliquez-vous pour le nettoyage des fientes ?",
          answer: "<p>Nos techniciens interviennent en combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour protéger l'intérieur du logement. Les fientes sont humidifiées avant collecte pour éviter l'envol de particules contaminées. Ce protocole s'adapte aux contraintes d'accès des résidences sécurisées.</p>",
        },
        {
          question: "Après nettoyage des fientes sur un balcon à Gennevilliers, la désinfection est-elle systématique sur béton peint ou carrelage ?",
          answer: "<p>La désinfection fait partie de chaque intervention. Un produit virucide et bactéricide homologué est appliqué sur le sol, les garde-corps et les vitrages. Le temps de contact est respecté avant rinçage. Cette étape élimine les agents pathogènes et neutralise les odeurs résiduelles.</p>",
        },
        {
          question: "Dans les immeubles de Gennevilliers, comment organisez-vous l'évacuation des déchets après traitement des fientes de pigeons ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès la collecte. Nous évacuons ces déchets en fin d'intervention sans les laisser dans les parties communes. La coordination avec le gardien ou le syndic permet un accès fluide et une sortie discrète des matériaux contaminés.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 5) canapes-tapis
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Gennevilliers, du secteur Chevrins aux résidences proches de Gabriel Péri.",
        "Détachage adapté à chaque textile, avec extraction en profondeur et contrôle du séchage.",
        "Intervention planifiée selon vos disponibilités, remise en service rapide du mobilier traité.",
      ],
      uniqueIntro: "<p>Dans le quartier Chevrins-Cité-Jardins, les canapés et tapis des maisons familiales accumulent rapidement poussières, taches de café et traces laissées par les enfants ou les animaux. Les fibres absorbent ces salissures au fil des mois, et un simple aspirateur ne suffit plus à redonner fraîcheur et propreté aux textiles du salon ou des chambres.</p>\n<p class=\"mt-4\">Un entretien en profondeur change la donne : les couleurs retrouvent leur éclat, les odeurs incrustées disparaissent, et l'assise redevient agréable au quotidien. Dans les logements résidentiels de Gennevilliers, où les sols souples côtoient le carrelage, le mobilier textile concentre souvent l'essentiel des allergènes et des acariens présents dans l'habitat.</p>\n<p class=\"mt-4\">Notre intervention à domicile s'adapte à chaque configuration. Nous évaluons le type de tissu, identifions les zones à traiter en priorité, et organisons le passage selon vos disponibilités, que vous habitiez près de la station Gabriel Péri ou dans un pavillon du secteur pavillonnaire.</p>",
      uniqueDeepDive: "<h3>Taches anciennes et odeurs persistantes</h3>\n<p>Les marques de vin, de graisse ou d'urine animale s'incrustent dans les fibres avec le temps. Nous appliquons un pré-traitement ciblé, enzymatique si nécessaire, après un test discret sur une zone cachée pour les textiles fragiles comme le velours ou la laine.</p>\n\n<h3>Salissures diffuses et allergènes</h3>\n<p>La poussière et les acariens s'accumulent dans l'épaisseur du tissu sans être visibles. L'injection-extraction textile déloge ces particules en profondeur, avec une pression et une température adaptées au type de fibre : coton, synthétique ou cuir.</p>\n\n<h3>Séchage et remise en service</h3>\n<p>L'extraction maximale limite le temps de séchage. Nous vous indiquons le délai avant réutilisation selon l'épaisseur du textile et la ventilation du logement. Quelques conseils d'usage vous aident ensuite à espacer les prochaines interventions.</p>",
      specificChallenges: [
        "<strong>Taches d'enfants ou d'animaux</strong> fréquentes dans les pavillons du quartier Chevrins-Cité-Jardins.",
        "Textiles variés (coton, velours, synthétique) nécessitant un <strong>diagnostic préalable</strong>.",
        "Odeurs incrustées dans les canapés après plusieurs années d'usage familial.",
        "Accès parfois limité dans les immeubles proches de Gabriel Péri : digicodes et escaliers étroits.",
        "Séchage à adapter selon la ventilation et la saison dans les logements résidentiels.",
      ],
      faqAdditions: [
        {
          question: "Pour les familles du quartier Chevrins-Cité-Jardins à Gennevilliers, comment éliminez-vous acariens et allergènes des canapés et tapis ?",
          answer: "<p>L'injection-extraction textile déloge les acariens et poussières logés en profondeur dans les fibres. Le traitement atteint les couches inaccessibles à l'aspirateur classique, ce qui améliore la qualité de l'air intérieur et réduit les sources d'allergie dans les logements familiaux.</p>",
        },
        {
          question: "À Gennevilliers, comment traiter une urine d'animal ou des odeurs persistantes sur canapé et tapis ?",
          answer: "<p>Nous appliquons un pré-traitement enzymatique qui décompose les résidus organiques responsables des odeurs. L'extraction évacue ensuite ces substances en profondeur. Sur les textiles fragiles, un test préalable garantit l'absence de réaction avant de traiter l'ensemble de la surface.</p>",
        },
        {
          question: "Dans les logements résidentiels de Gennevilliers, comment adaptez-vous le nettoyage au textile du canapé ou du tapis ?",
          answer: "<p>Chaque fibre réagit différemment : le coton supporte une extraction plus intense, le velours ou la laine demandent une pression réduite. Nous ajustons la température et le débit selon le diagnostic initial, pour préserver l'aspect et la tenue du textile après séchage.</p>",
        },
        {
          question: "À Gennevilliers, quelle fréquence recommandez-vous pour l'entretien des canapés et tapis selon l'usage du logement ?",
          answer: "<p>Un rafraîchissement annuel convient à un usage courant. Les foyers avec enfants ou animaux gagnent à prévoir une intervention tous les six à huit mois. Nous adaptons nos conseils selon l'intensité d'utilisation et la nature des textiles présents dans votre intérieur.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 6) terrasses
    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses, pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses gennevilloises exposées à l'humidité et aux dépôts liés à l'environnement urbain.",
        "Adaptation du traitement selon le support : pierre naturelle, dalles sur plots, bois ou béton.",
        "Protection systématique du mobilier, des plantes et gestion de l'écoulement vers les évacuations existantes.",
      ],
      uniqueIntro: "<p>Comment préserver l'état d'une terrasse quand l'humidité, les dépôts verts et la pollution s'accumulent saison après saison ? À proximité de la Mairie de Gennevilliers, les pavillons et résidences disposent souvent d'espaces extérieurs exposés aux intempéries et aux particules urbaines. Les dalles deviennent glissantes, la mousse s'installe dans les joints, et le revêtement perd progressivement son aspect d'origine.</p>\n<p class=\"mt-4\">Dans les pavillons du quartier Chevrins-Cité-Jardins, les terrasses en dalles sur plots ou en béton subissent ces dégradations de manière récurrente. Un entretien régulier permet de conserver un sol stable, agréable à utiliser et visuellement soigné. Le traitement des surfaces redonne de la clarté au revêtement et limite la repousse des végétaux indésirables.</p>\n<p class=\"mt-4\">L'environnement urbain dense de Gennevilliers, avec son exposition aux mousses et à la pollution atmosphérique, impose une approche technique adaptée. Chaque intervention débute par un diagnostic du support pour définir la méthode la plus appropriée et protéger les éléments environnants.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries, baies vitrées et seuils de porte reçoivent une protection pour éviter les projections. Un balayage élimine les feuilles mortes, la terre et les débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : pierre, béton, bois ou composite. Le brossage manuel ou mécanique décolle les salissures incrustées et les dépôts verts. Sur les surfaces compatibles, une haute pression contrôlée complète le travail en respectant les joints et les matériaux poreux.</p>\n\n<h3>Finitions et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement, les plantations protégées des ruissellements. Un traitement anti-mousse préventif peut être appliqué selon l'exposition de la terrasse. Avant de partir, nous partageons quelques recommandations pour espacer les prochaines interventions selon la saison et l'environnement.</p>",
      specificChallenges: [
        "<strong>Mousse récurrente</strong> sur les dalles exposées à l'ombre et à l'humidité des pavillons.",
        "Dépôts de pollution atmosphérique liés à la proximité de l'A86 et des zones d'activité.",
        "<strong>Joints fragilisés</strong> nécessitant une pression adaptée pour éviter les infiltrations.",
        "Mobilier de jardin et jardinières à déplacer ou protéger avant intervention.",
        "Écoulement des eaux à gérer pour ne pas impacter les voisins ou les plantations.",
      ],
      faqAdditions: [
        {
          question: "Sur les terrasses en pierre ou en bois des pavillons de Chevrins, comment évitez-vous d'abîmer le support ?",
          answer: "<p>Le choix de la méthode dépend du matériau. Sur la pierre naturelle, nous privilégions un brossage doux et une pression modérée. Pour le bois, le nettoyage se fait dans le sens des fibres avec un produit adapté qui ne dégrade pas la surface ni les finitions existantes.</p>",
        },
        {
          question: "Dans les pavillons de Gennevilliers, comment organisez-vous le nettoyage de terrasse avec mobilier et plantes à protéger ?",
          answer: "<p>Nous déplaçons ou bâchons le mobilier extérieur et les jardinières avant de commencer. Les plantes sensibles sont éloignées de la zone de travail. Cette préparation évite les projections et permet d'accéder à l'ensemble de la surface sans contrainte.</p>",
        },
        {
          question: "À Gennevilliers, quel traitement anti-mousse privilégiez-vous pour une terrasse exposée à l'humidité ?",
          answer: "<p>Après le nettoyage, un produit anti-mousse préventif peut être appliqué sur les zones les plus exposées. Ce traitement ralentit la repousse des végétaux et prolonge la durée entre deux interventions, particulièrement utile sur les terrasses ombragées ou orientées nord.</p>",
        },
        {
          question: "Pour les terrasses de Gennevilliers, quand choisissez-vous un nettoyage doux plutôt qu'une haute pression ?",
          answer: "<p>Le nettoyage doux est recommandé sur les supports fragiles : bois, pierre poreuse, joints anciens ou dalles sur plots. La haute pression contrôlée convient mieux au béton ou au carrelage résistant. Nous adaptons la technique après avoir évalué l'état du revêtement sur place.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 7) nettoyage-appartement-maison
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Remise en état complète de votre logement à Gennevilliers, avec préparation minutieuse de chaque pièce pour un état des lieux ou une entrée locataire sans réserve.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Gennevilliers, des immeubles collectifs du Luth aux pavillons des Chevrins.",
        "Polyvalence sur tous les revêtements et finitions soignées des détails visibles lors d'un état des lieux.",
        "Coordination directe avec agences et artisans pour respecter les délais de remise imposés.",
      ],
      uniqueIntro: "<p>Les traces de calcaire sur les robinetteries, les résidus de peinture le long des plinthes, les dépôts de poussière accumulés dans les placards : ces détails sont visibles dès l'entrée dans un logement après travaux ou déménagement. Dans la <strong>Cité du Luth</strong>, où la rotation locative reste soutenue, ces situations se répètent régulièrement et nécessitent une mise en propreté rapide avant remise des clés.</p>\n<p class=\"mt-4\">Un appartement correctement préparé facilite l'état des lieux et évite les retenues sur caution. Dans les <strong>grands ensembles comme dans les résidences récentes</strong> de Gennevilliers, les surfaces varient mais les exigences restent identiques : sols sans traces, vitres intérieures nettes, sanitaires désinfectés. Le résultat conditionne la première impression du prochain occupant ou du gestionnaire.</p>\n<p class=\"mt-4\">Klinova organise chaque intervention en coordination avec les agences, artisans ou propriétaires. Le planning intègre les contraintes d'accès par digicode, la disponibilité des clés et les délais imposés par la date de remise. Chaque étape est anticipée pour respecter l'échéance fixée.</p>",
      uniqueDeepDive: "<h3>Pièces de vie et circulations</h3>\n<p>Le séjour, les chambres et les couloirs sont dépoussiérés du plafond aux plinthes. Les sols reçoivent un traitement adapté au revêtement : aspiration puis lavage pour le carrelage, nettoyage spécifique pour les sols souples. Les interrupteurs, poignées et radiateurs sont essuyés.</p>\n<p class=\"mt-4\">Les placards sont vidés de leurs résidus et nettoyés intérieurement. Les vitres intérieures sont débarrassées des traces et coulures.</p>\n\n<h3>Cuisine et salle de bain</h3>\n<p>Les plans de travail, crédences et électroménagers sont dégraissés. Les joints et faïences de la salle de bain sont traités pour éliminer le calcaire. Les sanitaires sont désinfectés, la robinetterie détartrée.</p>\n<p class=\"mt-4\">En cas de fin de chantier, les projections de peinture ou d'enduit sur les surfaces sont retirées manuellement.</p>\n\n<h3>Contrôle et remise</h3>\n<p>Un passage final vérifie chaque zone avant validation. L'aération du logement est assurée pour éliminer les odeurs résiduelles. Les clés sont restituées selon les modalités convenues avec le mandataire.</p>",
      specificChallenges: [
        "Accès par <strong>digicode ou badge</strong> dans la plupart des immeubles collectifs de Gennevilliers.",
        "Résidus de chantier fréquents dans les logements récemment rénovés de l'<strong>Écoquartier</strong>.",
        "Délais serrés pour les états des lieux liés à la <strong>rotation locative</strong> soutenue.",
        "Coordination nécessaire avec plusieurs intervenants : agence, artisans, propriétaire.",
        "Poussières industrielles liées à la proximité du <strong>Port de Gennevilliers</strong> sur certains secteurs.",
      ],
      faqAdditions: [
        {
          question: "Dans la Cité du Luth à Gennevilliers, quel délai proposez-vous pour un nettoyage d'appartement en urgence ?",
          answer: "<p>Nous intervenons sous 24 à 48 heures selon la disponibilité et la surface du logement. Pour les situations urgentes liées à un état des lieux imminent, nous ajustons le planning en priorité. La coordination avec le gardien ou l'agence facilite l'accès rapide au logement.</p>",
        },
        {
          question: "À Gennevilliers, comment distinguez-vous un nettoyage standard d'un nettoyage fin de chantier en appartement ?",
          answer: "<p>Le nettoyage fin de chantier inclut le retrait des résidus de peinture, enduit et colle sur les surfaces. Les poussières de plâtre sont aspirées jusque dans les recoins. Ce travail préparatoire précède le nettoyage classique des sols, vitres et sanitaires pour un logement prêt à habiter.</p>",
        },
        {
          question: "Dans les résidences de Gennevilliers, comment traitez-vous un logement après dégât des eaux avant remise en location ?",
          answer: "<p>Nous intervenons après séchage complet des surfaces. Les traces d'humidité sur les murs et sols sont traitées, les moisissures éliminées si présentes. Le nettoyage complet du logement suit pour permettre une remise en état conforme aux attentes du bailleur ou de l'agence.</p>",
        },
        {
          question: "À Gennevilliers, comment coordonnez-vous le nettoyage d'appartement avec l'agence immobilière et les artisans ?",
          answer: "<p>Nous calons notre intervention après la fin des travaux et avant l'état des lieux. Le planning est ajusté en fonction des contraintes de chaque intervenant. La remise des clés et les accès sont organisés en amont pour éviter tout décalage le jour prévu.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;