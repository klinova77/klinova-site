import type { City } from "~/types/geo";

const city: City = {
  name: "Cergy",
  slug: "cergy",
  postalCodes: ["95000"],

  department: {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Cergy pour l'entretien des parties communes, parkings et espaces extérieurs. Entre la gare de Cergy-Préfecture et les résidences du Grand Centre, une équipe locale assure propreté et maintenance adaptées au bâti de la ville nouvelle.",

  // hubIntro : HTML autorisé
  hubIntro: "<p>Siège de la préfecture du Val-d'Oise et pôle universitaire CY Cergy Paris, Cergy concentre des flux importants entre zones administratives, campus et quartiers résidentiels. Klinova s'y positionne comme partenaire terrain pour la gestion globale de la propreté.</p>\n\n<p>Halls d'immeubles, parkings souterrains, espaces extérieurs : chaque intervention s'organise selon les <strong>contraintes d'accès</strong> et les horaires adaptés. Reporting disponible pour les gestionnaires qui le souhaitent, coordination directe avec syndics et entreprises.</p>\n\n<ul>\n  <li><strong>Équipe locale dédiée :</strong> Techniciens formés aux spécificités du bâti cergypontain, disponibles pour des interventions régulières ou ponctuelles selon vos besoins.</li>\n  <li><strong>Gestion des accès :</strong> Digicodes, badges, parkings sécurisés — nous nous adaptons aux contraintes de chaque résidence ou site professionnel.</li>\n  <li><strong>Coordination simplifiée :</strong> Un interlocuteur unique pour planifier, ajuster les créneaux et assurer le suivi des prestations sur l'ensemble de vos sites.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls ouverts</strong> exposés aux poussières et salissures liées au trafic piétonnier intense.",
    "Parkings souterrains avec <strong>traces de pneus</strong> et résidus d'huile accumulés.",
    "Résidences récentes équipées de <strong>digicodes et badges</strong> nécessitant coordination préalable.",
    "Proximité A15 : <strong>dépôts de pollution atmosphérique</strong> sur balcons et façades.",
    "Flux quotidien important autour des <strong>gares RER A</strong> générant usure accélérée des sols communs.",
  ],

  // Texte brut uniquement
  districts: [
    "Cergy-Préfecture",
    "Cergy-Saint-Christophe",
    "Cergy-le-Haut",
    "Cergy-Village",
    "Axe Majeur-Horloge",
  ],
  nearbyCities: [
        "herblay-sur-seine",
        "saint-germain-en-laye",
        "franconville",
        "houilles",
        "argenteuil",
        "nanterre",
        "colombes",
        "rueil-malmaison",
        "gennevilliers",
        "courbevoie"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Cergy",
    "Gare de Cergy-Préfecture",
    "Université CY Cergy Paris",
    "Préfecture du Val-d'Oise",
    "Axe Majeur",
    "Port de Cergy",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les résidences avec accès sécurisé ?",
      answer: "<p>Nous récupérons les <strong>codes d'accès ou badges</strong> en amont auprès du syndic ou du gestionnaire. Les techniciens interviennent aux horaires convenus, sans solliciter les résidents. À Cergy, où les digicodes sont fréquents, cette organisation évite toute perte de temps le jour J.</p>",
    },
    {
      question: "Quel délai pour obtenir un devis après une demande ?",
      answer: "<p>Nous répondons rapidement après réception de votre demande. Si une visite technique est nécessaire — notamment pour les parkings souterrains ou les grands ensembles — nous la planifions rapidement pour établir un chiffrage précis.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur un sinistre ou une dégradation ?",
      answer: "<p>Oui, nous proposons des <strong>créneaux prioritaires</strong> pour les situations urgentes : dégât des eaux, souillures importantes, remise en état avant visite. Le délai dépend de la disponibilité de nos équipes.</p>",
    },
    {
      question: "Comment se passe la coordination avec notre syndic ou gestionnaire ?",
      answer: "<p>Un <strong>interlocuteur dédié</strong> assure le lien avec votre syndic : planification, ajustements de créneaux, reporting si demandé. À Cergy, nous travaillons régulièrement avec des copropriétés et adaptons notre organisation à chaque mode de gestion.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // SERVICES (seulement ceux demandés)
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans les fibres textiles, séchage maîtrisé et remise en service rapide pour bureaux, halls de copropriétés et espaces d'accueil.",
      whyUsBullets: [
        "Connaissance des configurations du Grand Centre : halls ouverts, bureaux cloisonnés, résidences à digicodes.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées ou velours.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des occupants et respecter les délais de séchage.",
      ],
      uniqueIntro: "<p>Les traces grises le long des circulations, les auréoles près des entrées et le ternissement général des fibres signalent un encrassement progressif des moquettes. Dans le <strong>secteur Grand Centre</strong>, où bureaux et halls accueillent un passage quotidien soutenu, ces marques apparaissent rapidement sur les dalles textiles et les revêtements bouclés des zones de réception.</p>\n\n<p>Un sol textile propre modifie immédiatement la perception d'un espace : couloirs plus lumineux, salles d'attente plus accueillantes, plaintes de résidents ou collaborateurs en baisse. Les <strong>petits collectifs et résidences récentes</strong> de Cergy présentent souvent des moquettes en parties communes qui, une fois détachées et ravivées, retrouvent leur aspect d'origine et prolongent leur durée de vie.</p>\n\n<p>L'intervention débute par un diagnostic du support — velours, bouclé, épaisseur variable — et des salissures présentes. Chaque étape est planifiée en tenant compte des digicodes fréquents et des contraintes de stationnement propres aux zones denses, pour limiter la gêne et assurer un résultat homogène.</p>",
      uniqueDeepDive: "<h3>Fibres assainies et teinte ravivée</h3>\n<p>L'objectif est d'extraire les particules logées en profondeur et de redonner aux fibres leur souplesse initiale. Le diagnostic préalable identifie le type de moquette — bouclée, velours, épaisseur variable — ainsi que la nature des taches : café, tanin, résidus gras ou marques anciennes.</p>\n\n<h3>Injection-extraction et détachage ciblé</h3>\n<p>Une solution adaptée au support est injectée sous pression contrôlée, puis immédiatement aspirée avec les salissures dissoutes. Les zones de fort passage reçoivent plusieurs passes. Les taches résistantes font l'objet d'un <strong>traitement localisé</strong> avant extraction.</p>\n\n<p class=\"mt-4\">Plinthes et bas de murs sont protégés pour éviter tout transfert d'humidité.</p>\n\n<h3>Séchage maîtrisé et consignes de reprise</h3>\n<p>L'extraction maximale limite le temps de séchage, généralement compris entre 4 et 12 heures selon l'épaisseur et la ventilation du local. Une période de non-piétinement est indiquée pour préserver le résultat. La fréquence d'entretien recommandée dépend du trafic constaté.</p>",
      specificChallenges: [
        "<strong>Dalles textiles</strong> des bureaux du Grand Centre soumises à un passage quotidien intense.",
        "Halls de copropriétés avec digicodes nécessitant une coordination préalable.",
        "Moquettes bouclées ou velours dans les résidences récentes, sensibles aux méthodes inadaptées.",
        "Stationnement contraint en zone dense imposant une logistique matériel anticipée.",
        "Poussières et particules fines liées à la proximité des axes routiers et des gares RER.",
      ],
      faqAdditions: [
        {
          question: "Dans les immeubles du Grand Centre équipés de digicodes, comment organisez-vous l'accès pour intervenir sur la moquette ?",
          answer: "<p>Nous convenons d'un créneau avec le syndic ou le gestionnaire, qui transmet les <strong>codes ou prévoit une ouverture</strong>. Le matériel est acheminé en une seule rotation pour limiter les allers-retours. Cette coordination évite toute attente sur place et garantit le respect des horaires convenus.</p>",
        },
        {
          question: "Les moquettes des bureaux proches de la gare de Cergy-Préfecture retiennent-elles davantage les salissures anciennes ?",
          answer: "<p>Le flux piétonnier quotidien apporte poussières et résidus qui s'incrustent dans les fibres au fil des semaines. Un détachage ciblé précède l'extraction pour traiter les marques tenaces. Plusieurs passes sur les zones de circulation permettent de déloger les particules accumulées en profondeur.</p>",
        },
        {
          question: "Quelle différence de méthode appliquez-vous entre une moquette de copropriété et une moquette de bureaux à Cergy ?",
          answer: "<p>En copropriété, l'intervention porte souvent sur des <strong>escaliers ou des halls</strong> à trafic variable, avec des créneaux adaptés aux résidents. En bureaux, la surface est généralement plus homogène et l'intervention se déroule hors heures d'activité. Le protocole d'injection-extraction reste identique, seule l'organisation diffère.</p>",
        },
        {
          question: "Quand le stationnement est difficile près de Cergy-Préfecture, comment gérez-vous le matériel pour le nettoyage de moquette ?",
          answer: "<p>Nous identifions en amont les possibilités de stationnement temporaire ou d'accès livraison. Le matériel est regroupé sur chariot pour réduire les trajets. Si nécessaire, l'intervention est planifiée tôt le matin ou en fin de journée, lorsque la pression sur le stationnement diminue.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec gestion coordonnée des accès et traitement des zones critiques pour un sol assaini sans perturber la rotation des véhicules.",
      whyUsBullets: [
        "Connaissance des accès sécurisés et parkings souterrains des résidences de Cergy, avec adaptation aux contraintes de badges.",
        "Autolaveuse et haute pression combinées, gestion stricte des eaux de lavage vers les évacuations existantes.",
        "Balisage par zones, rotation véhicules coordonnée avec le gestionnaire, intervention possible en horaires décalés.",
      ],
      uniqueIntro: "<p>Dans les secteurs proches de la gare de Cergy-le-Haut, les parkings souterrains accumulent rapidement traces de pneus, coulures d'huile et poussières fines. Le passage quotidien des résidents et usagers amplifie l'encrassement, surtout sur les <strong>rampes d'accès</strong> et aux abords des places les plus sollicitées. Sans intervention régulière, le sol perd en adhérence et les odeurs de graisse stagnent dans les niveaux inférieurs.</p>\n\n<p>Pour les syndics et gestionnaires, un parking propre limite les réclamations et préserve l'image de la résidence. Les sous-sols des ensembles résidentiels récents présentent souvent des revêtements béton brut ou peint qui retiennent les salissures dans leurs pores. Un lavage mécanisé adapté redonne un aspect net et facilite l'entretien courant entre deux passages.</p>\n\n<p>Klinova organise chaque intervention en tenant compte des contraintes d'accès sécurisé et du stationnement compliqué propre aux zones denses. Balisage, rotation par zones, coordination avec le gardien ou le gestionnaire : chaque étape vise à limiter la gêne tout en garantissant un résultat visible dès la fin du chantier.</p>",
      uniqueDeepDive: "<h3>Encrassement et huile incrustée</h3>\n<p>Les dépôts gras et traces de pneus s'accumulent sur le béton brut ou peint. Nous réalisons un diagnostic du revêtement et repérons les zones critiques : <strong>rampes, angles morts, rigoles obstruées</strong>. Un balayage préalable élimine les débris avant tout traitement humide.</p>\n\n<h3>Passes mécanisées et dégraissage</h3>\n<p>L'autolaveuse ou la haute pression associée à un dégraissant adapté déloge les salissures incrustées. Les rampes reçoivent une attention particulière pour préserver leur adhérence. La gestion des eaux de lavage respecte les évacuations existantes, sans rejet vers la voirie.</p>\n\n<h3>Coordination et remise en service</h3>\n<p>Le balisage sécurise chaque zone traitée pendant le séchage. La rotation des véhicules s'organise par secteur pour maintenir l'accès aux résidents. En fin d'intervention, nous transmettons un compte rendu au syndic avec recommandations de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Sous-sols sécurisés avec digicodes et badges : coordination préalable indispensable.",
        "Béton brut ou peint selon les résidences : méthode ajustée au revêtement.",
        "Rampes d'accès à fort passage : traitement antidérapant prioritaire.",
        "Stationnement dense : rotation par secteur pour limiter la gêne aux résidents.",
        "Rigoles et regards parfois obstrués : vérification systématique avant lavage.",
      ],
      faqAdditions: [
        {
          question: "Dans les parkings souterrains des résidences récentes de Cergy, comment traitez-vous les taches d'huile anciennes ?",
          answer: "<p>Les coulures d'huile incrustées dans le béton brut ou peint nécessitent un <strong>dégraissant appliqué</strong> avant le passage de l'autolaveuse. Nous insistons sur les places les plus sollicitées et les abords des rampes. Le résultat dépend de l'ancienneté des dépôts, mais l'aspect général s'améliore nettement dès la première intervention.</p>",
        },
        {
          question: "Dans un parking sécurisé avec badges à Cergy, comment organisez-vous le balisage des usagers pendant l'intervention ?",
          answer: "<p>Nous posons une <strong>signalétique visible à chaque accès</strong> et délimitons les zones en cours de traitement. La coordination avec le gardien ou le gestionnaire permet d'informer les résidents en amont. Le balisage reste en place jusqu'au séchage complet pour éviter tout risque de glissade.</p>",
        },
        {
          question: "Entre un parking souterrain et un parking aérien à Cergy, adaptez-vous la méthode selon le béton brut ou peint ?",
          answer: "<p>Le béton brut absorbe davantage les salissures et demande un dégraissage plus appuyé. Le béton peint supporte mieux la haute pression mais nécessite un réglage adapté pour préserver le revêtement. Nous ajustons le matériel et les produits après diagnostic du sol.</p>",
        },
        {
          question: "Dans les parkings de Cergy, faut-il prévoir une fermeture partielle pour nettoyer sans gêner les véhicules ?",
          answer: "<p>Une fermeture totale est rarement nécessaire. Nous procédons par rotation de zones : un secteur est traité pendant que les autres restent accessibles. Cette organisation limite la gêne et permet aux résidents de continuer à stationner pendant l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion des eaux de rinçage pour préserver façades et voisinage.",
      whyUsBullets: [
        "Connaissance des extérieurs exposés à Cergy, entre humidité du Port et pollution des axes urbains.",
        "Pression ajustée selon le support : carrelage, béton brut ou joints fragiles traités différemment.",
        "Protection systématique des façades et coordination avec le voisinage pour éviter tout désagrément.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement d'un balcon quand les dépôts gris s'accumulent sur le carrelage et que les joints noircissent mois après mois ? Près du <strong>Port de Cergy</strong>, les extérieurs résidentiels subissent à la fois l'humidité ambiante et les poussières urbaines. Le sol devient glissant, les garde-corps perdent leur éclat, et l'envie d'installer une table ou quelques plantes s'estompe face à l'ampleur du nettoyage à prévoir.</p>\n\n<p>Sur les <strong>résidences récentes et petits collectifs</strong> de la ville, les balcons en béton ou carrelage présentent souvent des traces tenaces que le simple jet d'eau ne suffit pas à déloger. Retrouver une surface propre et agréable au toucher change la perception de cet espace : un coin repas redevient accueillant, les jardinières retrouvent leur place sans crainte de salir davantage.</p>\n\n<p>L'<strong>exposition aux axes de circulation</strong> et la densité urbaine accentuent l'encrassement. Une intervention structurée permet de traiter chaque surface selon son état, en protégeant menuiseries et voisinage des éclaboussures.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et seuils reçoivent une protection pour éviter les projections. Les gros débris — feuilles mortes, terre, gravillons — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Un produit spécifique au carrelage ou au béton est appliqué sur le sol et les joints. Le brossage, manuel ou mécanique selon l'encrassement, décolle les dépôts verts et les traces grises incrustées. Les garde-corps et vitrages sont traités séparément. Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles.</p>\n\n<h3>Gestion des eaux et séchage</h3>\n<p>Les eaux de rinçage sont canalisées pour éviter les coulures sur la façade et chez les voisins du dessous. Une vérification finale permet de s'assurer qu'aucune zone n'a été oubliée. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts verts récurrents sur balcons exposés côté Port de Cergy.",
        "Joints de carrelage noircis par l'humidité et la pollution urbaine.",
        "Risque de coulures sur façades et chez les voisins en étage inférieur.",
        "Mobilier et plantes à déplacer ou protéger avant intervention.",
        "Surfaces glissantes nécessitant un traitement antidérapant adapté.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons carrelés des résidences récentes de Cergy, comment protégez-vous le carrelage et les joints ?",
          answer: "<p>Le produit utilisé est sélectionné selon la nature du carrelage et l'état des joints. Le brossage reste manuel sur les zones fragiles, et la pression de rinçage est réduite pour ne pas déchausser les joints. Une vérification visuelle finale permet de s'assurer qu'aucune surface n'a été fragilisée.</p>",
        },
        {
          question: "Dans une copropriété de Cergy, comment évitez-vous les coulures d'eau sur les façades et chez les voisins ?",
          answer: "<p>Les eaux de rinçage sont dirigées vers l'évacuation du balcon ou récupérées au fur et à mesure. Des protections sont posées sur les rebords pour limiter les projections. Si nécessaire, les voisins des étages inférieurs sont prévenus avant l'intervention pour qu'ils puissent rentrer leur linge ou fermer leurs fenêtres.</p>",
        },
        {
          question: "Au Port de Cergy, les balcons exposés prennent-ils plus vite des dépôts verts et des mousses ?",
          answer: "<p>L'humidité ambiante et la proximité de zones végétalisées favorisent effectivement l'apparition de mousses et de dépôts verts. Un traitement adapté permet de les éliminer en profondeur. Selon l'exposition, un entretien annuel ou bisannuel suffit généralement à maintenir un sol propre et non glissant.</p>",
        },
        {
          question: "Sur les balcons de Cergy, utilisez-vous une méthode sans haute pression pour préserver les surfaces sensibles ?",
          answer: "<p>Oui, lorsque les joints sont anciens ou que le support est fragile, le nettoyage s'effectue par brossage manuel et rinçage à basse pression. Cette approche évite tout risque de dégradation tout en éliminant efficacement les salissures incrustées. Le résultat reste comparable à une intervention classique.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon contaminé par les fientes de pigeons, avec désinfection des supports et pose de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones exposées à Cergy, notamment les façades du Grand Centre et les résidences en hauteur.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide après chaque intervention.",
        "Organisation discrète, protection du voisinage pendant le traitement et évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons du <strong>quartier Grand Centre</strong>. Les corniches et garde-corps deviennent des zones de repos privilégiées pour les pigeons, laissant derrière eux des traces acides qui attaquent le béton et la peinture. L'odeur s'installe, le linge étendu absorbe les effluves, et l'espace extérieur devient inutilisable.</p>\n\n<p>Dans les <strong>immeubles collectifs et résidences récentes</strong> de Cergy, les balcons exposés en hauteur subissent particulièrement ces nuisances. Les surfaces carrelées ou bétonnées se tachent durablement si le traitement tarde. Au-delà de l'aspect visuel, les agents pathogènes présents dans les déjections représentent un risque pour les occupants, notamment les personnes fragiles.</p>\n\n<p>La <strong>proximité d'espaces arborés</strong> favorise l'installation des volatiles sur les façades urbaines. Une décontamination structurée permet de retrouver un balcon propre et d'envisager des solutions préventives pour limiter les retours.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement de la zone</h3>\n<p>L'intervenant porte une combinaison jetable, un masque FFP2, des gants et des lunettes de protection. Le balcon est isolé par bâchage pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées et empêcher leur envol.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Les déjections sont ramassées et conditionnées en sacs étanches. Le sol, le garde-corps, les vitrages et les murs mitoyens sont nettoyés méthodiquement.</p>\n\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes avant rinçage.</p>\n\n<h3>Prévention et remise en service</h3>\n<p>Selon la configuration, des pics anti-pigeons ou un filet de protection peuvent être installés sur les corniches et rebords exposés.</p>\n\n<p class=\"mt-4\">Après aération, le balcon redevient utilisable. Les déchets sont évacués en sacs étanches.</p>",
      specificChallenges: [
        "Corniches exposées dans le centre urbain, zones de repos privilégiées des pigeons.",
        "Balcons en hauteur des résidences récentes, difficiles d'accès pour un nettoyage régulier.",
        "Proximité d'espaces arborés favorisant l'installation durable des volatiles.",
        "Surfaces béton et carrelage attaquées par l'acidité des fientes si le traitement tarde.",
        "Gêne olfactive pour les occupants et impossibilité d'utiliser l'espace extérieur.",
      ],
      faqAdditions: [
        {
          question: "Quels risques sanitaires présentent les fientes accumulées sur les corniches du centre de Cergy ?",
          answer: "<p>Les déjections de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les voies respiratoires. Sur les balcons exposés du quartier Grand Centre, l'accumulation prolongée augmente le risque d'inhalation de poussières contaminées, surtout par temps sec et venteux.</p>",
        },
        {
          question: "Quels équipements de protection utilisez-vous dans les immeubles collectifs de Cergy ?",
          answer: "<p>Nos intervenants portent systématiquement un masque FFP2, des gants, des lunettes et une combinaison jetable. Dans les résidences avec balcons mitoyens, un bâchage de confinement protège également les logements voisins pendant toute la durée du traitement.</p>",
        },
        {
          question: "Comment assurez-vous la désinfection après nettoyage sur un balcon exposé à Cergy ?",
          answer: "<p>Après le ramassage des fientes, un produit virucide et bactéricide homologué est appliqué sur le sol, le garde-corps et les vitrages. Le temps de contact est respecté avant rinçage pour garantir l'élimination des agents pathogènes présents sur les surfaces traitées.</p>",
        },
        {
          question: "Quelles solutions anti-retour proposez-vous pour les balcons proches des zones arborées de Cergy ?",
          answer: "<p>Selon la configuration du balcon, nous pouvons installer des pics anti-pigeons sur les rebords et corniches, ou poser un filet de protection. Ces dispositifs dissuasifs limitent efficacement le retour des volatiles sans nuire à l'esthétique de la façade.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Rafraîchissement complet de vos canapés, tapis et matelas à Cergy, avec extraction des taches incrustées et séchage maîtrisé pour retrouver un mobilier sain.",
      whyUsBullets: [
        "Interventions régulières dans les quartiers résidentiels de Cergy, du Boulevard de l'Oise aux secteurs pavillonnaires.",
        "Détachage ciblé selon la nature des taches et extraction textile adaptée à chaque type de fibre.",
        "Créneaux souples pour limiter la gêne, consignes de séchage précises selon votre logement.",
      ],
      uniqueIntro: "<p>Le long du <strong>Boulevard de l'Oise</strong>, dans les secteurs résidentiels de Cergy, les canapés et tapis accumulent au fil des mois ce que le quotidien dépose : miettes, poussières fines, traces de boissons renversées. Les familles avec enfants constatent des auréoles sur les assises, des odeurs persistantes dans les fibres. Les propriétaires d'animaux retrouvent poils et salissures incrustés malgré les aspirations régulières.</p>\n\n<p>Dans l'<strong>habitat mixte cergyssois</strong> — appartements en petits collectifs, pavillons ou résidences récentes — un détachage en profondeur change la donne. Les textiles retrouvent leur aspect d'origine, les odeurs disparaissent, et l'environnement intérieur gagne en fraîcheur. Pour les personnes sensibles aux acariens, c'est aussi une question de confort respiratoire au quotidien.</p>\n\n<p>Nous intervenons à domicile avec un diagnostic préalable du tissu et de la nature des taches. Chaque intervention s'adapte au <strong>contexte familial et résidentiel</strong>, avec des consignes claires sur le séchage selon l'épaisseur du textile et la ventilation disponible.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'obtenir un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus organiques. Les fibres retrouvent leur souplesse, les couleurs leur éclat, sans auréoles résiduelles.</p>\n\n<p class=\"mt-4\">Pour y parvenir, nous identifions d'abord le type de tissu — coton, synthétique, velours ou laine — et la nature des taches présentes.</p>\n\n<h3>Traitement adapté à chaque textile</h3>\n<p>Un pré-traitement enzymatique cible les taches organiques tenaces : urine, café, vin, graisse. Un test discret sur zone cachée vérifie la réaction du tissu avant intervention complète.</p>\n\n<p class=\"mt-4\">L'injection-extraction textile déloge les salissures en profondeur. La pression et la température sont ajustées selon la fragilité du support pour éviter toute dégradation.</p>\n\n<h3>Séchage et remise en service</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et la ventilation du logement, comptez entre 4 et 8 heures avant utilisation.</p>\n\n<p class=\"mt-4\">Nous transmettons des conseils d'entretien pour espacer les interventions futures.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés familiaux : café, jus, traces d'enfants accumulées.",
        "Textiles variés dans l'habitat cergyssois : velours, coton, synthétique nécessitant des réglages distincts.",
        "Odeurs persistantes liées aux animaux de compagnie dans les fibres profondes.",
        "Séchage à anticiper selon la ventilation des appartements en collectif.",
        "Accès parfois contraints par digicodes et stationnement limité autour du Boulevard de l'Oise.",
      ],
      faqAdditions: [
        {
          question: "Dans les logements familiaux de Cergy, le nettoyage canapé-tapis réduit-il vraiment les acariens et allergènes ?",
          answer: "<p>L'injection-extraction déloge les acariens, leurs déjections et les allergènes accumulés dans les fibres. Dans les appartements cergyssois où vivent enfants et personnes sensibles, cette action améliore sensiblement la qualité de l'air intérieur et le confort respiratoire au quotidien.</p>",
        },
        {
          question: "En appartement à Cergy avec parquet ou lino au sol, combien de temps faut-il pour que canapé et tapis sèchent ?",
          answer: "<p>Après extraction maximale, le séchage prend généralement 4 à 8 heures selon l'épaisseur du textile et l'aération disponible. Sur parquet ou lino, nous protégeons le sol pendant l'intervention. Une bonne ventilation accélère le processus.</p>",
        },
        {
          question: "Dans l'habitat mixte de Cergy, adaptez-vous vos produits selon le textile du canapé ou du tapis ?",
          answer: "<p>Chaque tissu — coton, laine, synthétique, velours — réagit différemment. Nous ajustons la température, la pression et les produits utilisés après diagnostic. Un test sur zone cachée précède toute intervention sur textile fragile ou délicat.</p>",
        },
        {
          question: "Autour du Boulevard de l'Oise à Cergy, comment préparer le logement avant un nettoyage de canapé à domicile ?",
          answer: "<p>Dégagez l'accès au mobilier concerné et retirez coussins amovibles et objets posés. Prévoyez un espace de stationnement si possible. Nous gérons le reste : protection des sols adjacents, installation du matériel et gestion des eaux usées.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts verts, et séchage permettant une réutilisation rapide de votre espace extérieur.",
      whyUsBullets: [
        "Connaissance des configurations de jardins à Cergy-Village, avec leurs terrasses ombragées propices aux mousses.",
        "Adaptation du traitement selon le support : pierre, bois composite, dalles sur plots ou béton.",
        "Protection systématique du mobilier extérieur et des plantations, avec évacuation maîtrisée des eaux de rinçage.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect d'une terrasse quand les mousses s'installent chaque automne et que les feuilles décomposées laissent des traces tenaces ? À <strong>Cergy-Village</strong>, les maisons avec jardin disposent souvent d'espaces extérieurs exposés à l'humidité et aux dépôts organiques. Sans entretien régulier, le revêtement devient glissant et perd son attrait initial.</p>\n\n<p>Sur les <strong>pavillons et maisons individuelles</strong> de la commune, les terrasses en dalles sur plots, bois composite ou pierre naturelle subissent des agressions différentes. Les lichens s'accrochent aux joints, la mousse verdit les zones ombragées, et les taches grasses de barbecue s'incrustent dans les matériaux poreux. Un rafraîchissement adapté redonne à ces surfaces leur aspect d'origine et prolonge leur durée de vie.</p>\n\n<p>L'intervention prend en compte les <strong>accès parfois étroits autour des jardins</strong> et la protection des plantations environnantes. Chaque support reçoit un traitement spécifique, avec gestion de l'évacuation des eaux vers les points d'écoulement existants.</p>",
      uniqueDeepDive: "<h3>Surface principale</h3>\n<p>Le revêtement central fait l'objet d'un balayage préalable pour retirer feuilles, terre et débris accumulés. Un produit adapté au matériau est appliqué : formule douce pour le bois composite, détergent alcalin pour la pierre, traitement spécifique pour les dalles sur plots.</p>\n\n<p class=\"mt-4\">Le brossage mécanique ou manuel déloge les mousses et dépôts verts incrustés dans les joints et les aspérités.</p>\n\n<h3>Bordures et éléments annexes</h3>\n<p>Les murets, garde-corps et escaliers extérieurs reçoivent le même soin. Ces zones accumulent souvent davantage d'humidité et de salissures que la surface principale.</p>\n\n<p class=\"mt-4\">Les margelles et seuils de porte-fenêtre sont traités pour éviter les coulures vers l'intérieur lors du rinçage.</p>\n\n<h3>Rinçage et finition</h3>\n<p>La pression de rinçage est calibrée selon le support pour préserver les joints et les matériaux poreux. L'eau est dirigée vers les évacuations existantes, en protégeant les massifs et jardinières adjacents.</p>\n\n<p class=\"mt-4\">Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts.</p>",
      specificChallenges: [
        "Dalles sur plots nécessitant un nettoyage sans déstabiliser la structure.",
        "Mousses et lichens tenaces dans les zones ombragées des jardins.",
        "Accès étroits entre maison et clôture compliquant le passage du matériel.",
        "Protection des plantations et massifs adjacents pendant le rinçage.",
        "Taches de barbecue incrustées sur pierre poreuse ou béton.",
      ],
      faqAdditions: [
        {
          question: "Sur une terrasse de Cergy en pierre, bois composite ou dalles sur plots, comment évitez-vous d'abîmer le support ?",
          answer: "<p>Chaque matériau reçoit un traitement adapté. Le bois composite supporte mal la haute pression : nous privilégions un brossage doux avec produit spécifique. La pierre naturelle tolère davantage de pression, mais les joints restent protégés. Les dalles sur plots sont nettoyées sans déplacer les éléments.</p>",
        },
        {
          question: "Dans les jardins de Cergy-Village, comment traitez-vous les mousses et l'humidité persistante sur les terrasses ?",
          answer: "<p>Les zones ombragées favorisent la prolifération des mousses. Nous appliquons un produit décollant avant brossage mécanique, puis un traitement anti-mousse après rinçage. Cette approche retarde la réapparition des dépôts verts de plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "À Cergy, appliquez-vous un traitement anti-mousse préventif après le nettoyage d'une terrasse extérieure ?",
          answer: "<p>Oui, sur demande ou si la configuration le justifie. Ce traitement forme une barrière qui limite la repousse des mousses et lichens. Son efficacité dépend de l'exposition au soleil et de l'humidité ambiante, mais il prolonge visiblement la propreté obtenue.</p>",
        },
        {
          question: "Pour les terrasses de Cergy, privilégiez-vous un nettoyage doux plutôt qu'une haute pression sur les matériaux sensibles ?",
          answer: "<p>Absolument. Le bois composite, les joints de dalles et certaines pierres tendres ne supportent pas une pression élevée. Nous adaptons la méthode : brossage manuel ou mécanique doux, produit adapté, et rinçage à pression modérée pour préserver l'intégrité du revêtement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux finitions, pour une restitution impeccable lors d'un état des lieux ou après travaux.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Cergy, des studios aux maisons, pour adapter chaque intervention.",
        "Polyvalence sur tous les revêtements — parquet, carrelage, lino — avec des produits adaptés à chaque support.",
        "Coordination directe avec agences, propriétaires ou artisans pour respecter vos délais de restitution.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'une remise de clés, un logement accumule poussières fines, traces de passage et résidus tenaces. Dans le secteur de l'<strong>Axe Majeur-Horloge</strong>, où la rotation locative reste soutenue, ces situations se répètent régulièrement et nécessitent une préparation rigoureuse avant chaque nouvelle occupation.</p>\n\n<p>Un logement correctement préparé facilite les démarches avec l'agence ou le propriétaire, évite les retenues sur caution et offre un cadre sain dès l'entrée. Dans les <strong>résidences récentes comme dans les grands ensembles</strong> de Cergy, les surfaces variées — parquet, carrelage, lino — demandent un traitement adapté pour retrouver leur aspect d'origine.</p>\n\n<p>Klinova structure chaque intervention autour d'un diagnostic initial, d'un plan de travail précis et d'une coordination avec les parties concernées. La <strong>rotation locative et les fins de chantier</strong> fréquentes sur la commune impliquent des délais serrés : notre organisation s'adapte à ces contraintes pour respecter vos échéances.</p>",
      uniqueDeepDive: "<h3>Évaluation et préparation du logement</h3>\n<p>Un premier passage permet d'identifier l'état général, les zones critiques et le type de surfaces présentes. Si l'intervention suit des travaux, nous évacuons les gravats légers et protégeons les éléments fragiles avant de commencer.</p>\n\n<h3>Nettoyage complet des espaces</h3>\n<p>Le dépoussiérage débute par les plafonds, murs et plinthes, puis se poursuit sur l'ensemble des sols. Les pièces d'eau reçoivent un traitement spécifique : sanitaires, faïences, joints et plans de travail sont décrassés méthodiquement. Les vitres intérieures sont également traitées.</p>\n\n<h3>Finitions et contrôle avant restitution</h3>\n<p>Les détails font la différence lors d'un état des lieux : interrupteurs, poignées, radiateurs et intérieurs de placards sont nettoyés. Un contrôle final vérifie chaque pièce. Le logement est aéré pour garantir une atmosphère saine à la remise des clés.</p>",
      specificChallenges: [
        "Accès sécurisés par digicode ou badge dans la majorité des résidences de Cergy.",
        "Poussières de chantier incrustées sur les sols fragiles après travaux de rénovation.",
        "Délais serrés entre la fin des travaux et la remise des clés au nouveau locataire.",
        "Stationnement limité dans les zones denses, nécessitant une organisation logistique anticipée.",
        "Pièces d'eau à remettre en état complet pour satisfaire aux exigences des états des lieux.",
      ],
      faqAdditions: [
        {
          question: "Dans les résidences récentes de Cergy, quel délai proposez-vous pour un nettoyage avant un état des lieux ?",
          answer: "<p>Nous intervenons selon la surface et la disponibilité. Pour les situations urgentes liées à une remise de clés imminente, un créneau prioritaire peut être organisé après échange téléphonique afin de respecter votre échéance.</p>",
        },
        {
          question: "Après une fin de chantier à Cergy, quelles différences faites-vous entre un nettoyage standard et un nettoyage approfondi ?",
          answer: "<p>Le nettoyage fin de chantier inclut l'évacuation des résidus de travaux, le retrait des traces de peinture ou d'enduit sur les surfaces, et un dépoussiérage complet des plafonds aux plinthes. Un nettoyage standard se concentre sur l'entretien courant sans traitement des salissures liées aux travaux.</p>",
        },
        {
          question: "Dans un appartement de Cergy, comment intervenez-vous après un dégât des eaux sur des sols fragiles ?",
          answer: "<p>Nous commençons par évaluer l'étendue des dégâts et le type de revêtement concerné — parquet, carrelage ancien ou lino. Le nettoyage s'effectue avec des produits adaptés pour éviter toute dégradation supplémentaire, en insistant sur les zones humides susceptibles de développer des moisissures.</p>",
        },
        {
          question: "À Cergy, comment gérez-vous l'accès au logement quand il faut un digicode et que le stationnement est compliqué ?",
          answer: "<p>Les codes d'accès et informations de stationnement sont recueillis en amont lors de la prise de rendez-vous. Nos équipes anticipent les contraintes de parking dans les zones denses et s'organisent pour limiter les allers-retours entre le véhicule et le logement.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;