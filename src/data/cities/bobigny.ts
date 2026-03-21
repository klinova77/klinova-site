import type { City } from "~/types/geo";

const city: City = {
  name: "Bobigny",
  slug: "bobigny",
  postalCodes: ["93000"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Bobigny pour l’entretien des parties communes, parkings souterrains et abords d’immeubles, avec une organisation adaptée aux accès sécurisés et aux contraintes des ensembles résidentiels comme des sites administratifs.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro:
    "<p>À Bobigny, préfecture de la Seine-Saint-Denis et terminus du Métro 5, Klinova accompagne <strong>syndics, gestionnaires et occupants</strong> dans la gestion quotidienne de la propreté. Notre équipe connaît les spécificités du parc immobilier local, des tours administratives aux résidences des quartiers Paul Eluard ou Karl Marx.</p>\n<p class=\"mt-4\">Nous assurons l'entretien régulier ou ponctuel des espaces partagés : halls, parkings, locaux techniques. Chaque intervention fait l'objet d'une coordination préalable pour limiter la gêne et respecter les contraintes d'accès propres aux bâtiments publics comme aux copropriétés.</p>\n<ul>\n  <li><strong>Coordination avec gardiens et gestionnaires :</strong> Prise de contact systématique avant intervention pour définir horaires, accès et zones prioritaires selon l'occupation des lieux.</li>\n  <li><strong>Matériel adapté au bâti local :</strong> Autolaveuses compactes pour parkings souterrains étroits, équipements silencieux pour les interventions en journée dans les halls.</li>\n  <li><strong>Reporting sur demande :</strong> Compte-rendu d'intervention transmis aux syndics ou services généraux, avec photos avant/après si nécessaire.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains sous dalles</strong> : rampes étroites et ventilation limitée dans les résidences années 70-80.",
    "<strong>Halls à fort passage</strong> : flux quotidien important autour du terminus Métro 5 et de la gare routière.",
    "<strong>Pollution routière marquée</strong> : dépôts noirs sur balcons et façades liés à la proximité de l'A86 et de la N3.",
    "<strong>Accès réglementés</strong> : badges et digicodes systématiques dans les résidences récentes et bâtiments administratifs.",
    "<strong>Stationnement contraint</strong> : peu de places disponibles autour de la Préfecture et du centre-ville en journée.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville / Karl Marx",
    "Jean Rostand",
    "Paul Eluard",
    "Pierre Semard",
    "L'Abreuvoir",
    "Pont de Pierre",
    "Édouard Vaillant",
    "La Ferme",
  ],
  nearbyCities: [
        "noisy-le-sec",
        "romainville",
        "pantin",
        "bondy",
        "les-lilas",
        "le-blanc-mesnil",
        "aubervilliers",
        "bagnolet",
        "montreuil",
        "rosny-sous-bois"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Bobigny",
    "Préfecture de la Seine-Saint-Denis",
    "Métro Bobigny - Pablo Picasso",
    "Hôpital Avicenne (AP-HP)",
    "Parc de la Bergère",
    "Canal de l'Ourcq",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les immeubles avec gardien ?",
      answer:
        "<p>Nous prenons contact avec le gardien ou le gestionnaire en amont pour convenir des horaires et des accès. <strong>Cette coordination est particulièrement utile</strong> dans les grands ensembles où les entrées sont sécurisées (badge, digicode) et où certains locaux techniques nécessitent une ouverture dédiée.</p>",
    },
    {
      question: "Pouvez-vous intervenir en dehors des heures de bureau ?",
      answer:
        "<p>Oui, nous proposons des créneaux tôt le matin ou en fin de journée selon les sites. Cela permet de travailler sans gêner les flux d’usagers et de limiter les contraintes d’accès, notamment pour les parkings et les halls à forte fréquentation.</p>",
    },
    {
      question: "Quel délai pour obtenir un devis après une demande ?",
      answer:
        "<p>Le devis est généralement transmis sous <strong>24 à 48 heures</strong> après réception des informations nécessaires. Si une visite technique est utile, elle est planifiée rapidement pour confirmer les surfaces, l’état des sols et les conditions d’accès.</p>",
    },
    {
      question:
        "Intervenez-vous pour des besoins ponctuels ou uniquement en contrat régulier ?",
      answer:
        "<p>Les deux formules sont possibles. Nous pouvons intervenir ponctuellement (décrassage de parking, remise en état) ou mettre en place un entretien récurrent des parties communes, avec une fréquence ajustée au niveau de passage et aux attentes du gestionnaire.</p>",
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
  // => Le template must include only requested services. Request includes hub => include all services.
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage contrôlé pour une remise en circulation rapide des espaces professionnels ou résidentiels.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès aux bâtiments administratifs de Bobigny et des typologies de revêtements présents.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux moquettes velours épaisses.",
        "Interventions planifiées hors heures d'ouverture au public pour limiter la gêne dans les espaces à forte fréquentation.",
      ],
      uniqueIntro:
        "<p>Dans la zone administrative autour du <strong>Métro Bobigny - Pablo Picasso</strong>, les moquettes des bureaux et halls d'accueil accumulent rapidement poussières et traces de passage. Le flux quotidien vers les services publics ramène boue, particules fines et résidus qui s'incrustent dans les fibres. Les dalles textiles des couloirs perdent leur aspect d'origine en quelques mois d'utilisation intensive.</p>\n<p class=\"mt-4\">Les <strong>halls administratifs équipés de dalles textiles</strong> et les bureaux avec moquettes velours présentent des besoins différents mais une même exigence : retrouver un rendu propre sans interrompre l'activité. Un entretien régulier préserve l'image professionnelle des lieux et prolonge la durée de vie des revêtements. Les taches de café, les marques de semelles et le grisaillement général disparaissent après un traitement adapté.</p>\n<p class=\"mt-4\">Le passage piétonnier lié aux services publics génère une usure concentrée sur les zones de circulation. Une intervention structurée permet d'identifier les secteurs prioritaires, de protéger le mobilier environnant et de planifier le séchage selon les contraintes horaires du site.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation intensive</h3>\n<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. <strong>L'aspiration préalable retire les particules libres</strong> avant le traitement humide. Les passes d'injection-extraction sont multipliées sur ces surfaces à fort trafic pour déloger les résidus incrustés en profondeur.</p>\n\n<h3>Espaces de travail et bureaux</h3>\n<p>Les dalles textiles sous les postes de travail reçoivent un détachage ciblé sur les zones de roulettes et les taches localisées. <strong>La pression d'injection est adaptée à l'épaisseur</strong> du revêtement. Les plinthes et bas de cloisons sont protégés pendant l'opération.</p>\n\n<h3>Zones d'attente et accueil</h3>\n<p>Les moquettes velours des espaces visiteurs nécessitent une extraction soignée pour éviter l'auréolage. <strong>Le séchage est accéléré par ventilation</strong> si les horaires d'ouverture l'imposent. Un temps de non-piétinement de quelques heures garantit un résultat homogène sur l'ensemble de la surface traitée.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux administratifs encrassées par le passage quotidien des usagers.",
        "<strong>Poussières de chantier</strong> du quartier Cœur de Ville qui s'infiltrent dans les halls.",
        "<strong>Contraintes horaires strictes</strong> imposant des interventions en dehors des heures d'ouverture au public.",
        "<strong>Moquettes velours des salles d'attente</strong> marquées par les taches de café et traces de semelles.",
        "Accès par escaliers étroits dans certaines copropriétés sociales nécessitant un matériel adapté.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les immeubles sociaux aux escaliers étroits, comment procédez-vous pour transporter le shampouineur sans gêner les habitants ?",
          answer:
            "<p>Notre équipement est modulable et se décompose en éléments transportables à la main. Dans les copropriétés où les ascenseurs sont absents ou en panne, <strong>nous montons le matériel par étapes</strong> sans encombrer les paliers. L'intervention est organisée pour limiter les allers-retours et réduire la gêne pour les résidents.</p>",
        },
        {
          question:
            "Pour les moquettes des halls de la Préfecture, quel résultat de propreté attendez-vous et quel temps de remise en service ?",
          answer:
            "<p>Les dalles textiles retrouvent leur teinte d'origine après extraction des salissures accumulées. Le grisaillement disparaît et les taches de passage s'estompent. Le séchage contrôlé permet une remise en circulation des espaces sous quelques heures selon la ventilation disponible sur site.</p>",
        },
        {
          question:
            "Quelle méthode technique recommandez-vous pour dalles textiles en bureaux versus velours ras en résidence privée à Bobigny ?",
          answer:
            "<p>Les dalles textiles supportent une pression d'injection plus élevée et sèchent rapidement grâce à leur faible épaisseur. <strong><strong>Le velours ras demande une extraction plus douce</strong></strong> pour éviter l'écrasement des fibres. Nous adaptons le réglage du matériel selon le type de revêtement identifié lors du diagnostic initial.</p>",
        },
        {
          question:
            "Avec les poussières de chantier du Cœur de Ville, quel comparatif de méthodes (vapeur vs sec) garantira un meilleur détachage ?",
          answer:
            "<p>Les particules fines de chantier s'incrustent profondément et résistent aux traitements à sec. L'injection-extraction humide est préférable car elle déloge les résidus incrustés. Plusieurs passes peuvent être nécessaires pour atteindre le niveau de propreté attendu.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et balisage sécurisé pour maintenir l'accès des usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès spécifiques aux parkings de la ZI des Vignes et des résidences proches du Canal de l'Ourcq.",
        "Autolaveuse professionnelle et produits dégraissants adaptés aux sols béton ou résine, avec gestion rigoureuse des eaux usées.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation des véhicules et intervenir sur créneaux à faible affluence.",
      ],
      uniqueIntro:
        "<p>Les traces d'huile, les coulures de graisse et les dépôts de poussière noire sont visibles sur la plupart des sols de parkings à Bobigny. Dans les zones d'activités comme la <strong>ZI des Vignes</strong> ou aux abords du Canal de l'Ourcq, le passage régulier de véhicules utilitaires et de poids lourds laisse des marques tenaces sur le béton. Ces salissures s'accumulent rapidement et dégradent l'aspect général des espaces de stationnement.</p>\n<p class=\"mt-4\">Pour les copropriétés et gestionnaires, un sol encrassé renvoie une image négative aux résidents et visiteurs. Les <strong>parkings souterrains sous dalles</strong>, fréquents dans les résidences récentes de Bobigny, concentrent poussières et résidus de carburant faute de ventilation naturelle. Un lavage mécanisé régulier permet de retrouver un sol propre et de limiter les risques de glissance.</p>\n<p class=\"mt-4\">Klinova coordonne chaque intervention avec le syndic ou le gestionnaire : diagnostic préalable du revêtement, planification des créneaux horaires adaptés au trafic pendulaire des bureaux, et organisation de la rotation des véhicules pour limiter la gêne.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions le type de revêtement présent : béton brut, résine ou peinture. <strong>L'état des évacuations est contrôlé</strong> pour garantir l'écoulement correct des eaux de lavage.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les débris grossiers. Le balisage est installé et la rotation des véhicules organisée avec le gestionnaire pour sécuriser chaque zone traitée.</p>\n\n<h3>Lavage mécanisé et dégraissage</h3>\n<p>L'autolaveuse effectue plusieurs passes sur l'ensemble de la surface. <strong>Un dégraissant adapté au support</strong> est appliqué sur les zones critiques : emplacements marqués par l'huile, pieds de murs, angles morts.</p>\n<p class=\"mt-4\">Les rampes d'accès reçoivent un traitement spécifique pour conserver leur adhérence. Les rigoles et regards sont dégagés pour assurer une évacuation conforme.</p>\n\n<h3>Contrôle et recommandations</h3>\n<p>Les eaux de lavage sont dirigées vers les réseaux prévus, sans rejet sauvage. <strong>Un dépoussiérage des blocs lumineux</strong> ou tuyauteries peut être réalisé sur demande.</p>\n<p class=\"mt-4\">Un compte-rendu est transmis au donneur d'ordre avec nos préconisations de fréquence selon le niveau de trafic constaté.</p>",
      specificChallenges: [
        "<strong>Taches d'huile récurrentes</strong> sur les sols béton des parkings en zone d'activités.",
        "<strong>Rampes d'accès étroites</strong> nécessitant un traitement antidérapant après lavage.",
        "Parkings souterrains sous dalles avec ventilation limitée et accumulation de poussières.",
        "Coordination indispensable avec les gestionnaires pour organiser la rotation des véhicules.",
        "<strong>Gestion des eaux de lavage</strong> conforme aux réseaux d'évacuation existants.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes sur les dalles béton du parking de la ZI des Vignes pour éviter reprises ?",
          answer:
            "<p>Nous appliquons un dégraissant professionnel sur chaque zone marquée avant le passage de l'autolaveuse. Les taches incrustées reçoivent un temps de pose prolongé. Cette méthode permet d'éliminer la majorité des résidus sans abîmer le revêtement, même sur des salissures de plusieurs mois.</p>",
        },
        {
          question:
            "Pour un parking souterrain de copropriété, quelle gestion des eaux de lavage préconisez-vous pour respecter les filières d'évacuation ?",
          answer:
            "<p>Avant l'intervention, nous vérifions l'état des regards et rigoles pour garantir un écoulement correct. Les eaux chargées sont dirigées vers les réseaux d'évacuation existants, sans rejet vers la voirie. Cette organisation respecte les contraintes réglementaires et évite tout refoulement dans les parties communes.</p>",
        },
        {
          question:
            "Sur la rampe d'accès d'un parking proche du Canal de l'Ourcq, quelles méthodes antiglisse et de décapage utilisez-vous ?",
          answer:
            "<p>La rampe est traitée avec une pression adaptée pour ne pas lisser le support. Nous évitons les produits laissant un film glissant et contrôlons l'adhérence après séchage. Si nécessaire, un rinçage complémentaire est effectué pour éliminer tout résidu de dégraissant.</p>",
        },
        {
          question:
            "Intervenez-vous en horaires décalés pour le nettoyage des parkings desservant l'Hôpital Avicenne afin de limiter la gêne ?",
          answer:
            "<p>Oui, nous proposons des créneaux en soirée, la nuit ou le week-end selon les contraintes du site. <strong><strong>La planification est validée avec le gestionnaire</strong></strong> pour éviter les heures de forte affluence. Le balisage sécurise les zones en cours de traitement pendant toute la durée de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Bobigny : traitement des dépôts, nettoyage des garde-corps et gestion maîtrisée de l'eau pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux axes N3 et A86, loggias proches du Parc de la Bergère.",
        "Pression adaptée selon le support — béton brut, dalles sur plots ou carrelage — pour préserver joints et revêtements.",
        "Organisation anti-coulures systématique et coordination avec les occupants des étages inférieurs avant intervention.",
      ],
      uniqueIntro:
        "<p>Après quelques saisons, les balcons des grands ensembles comme ceux du quartier Karl Marx ou Paul Eluard accumulent une couche grisâtre tenace. La proximité des axes routiers — notamment l'Avenue Jean Jaurès et la N3 — dépose un film de particules fines qui s'incruste dans les pores du béton. <strong>Les joints noircissent, le sol colle sous les pieds</strong>, et l'envie de profiter de cet espace diminue progressivement.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change la perception du logement. Les supports en béton brut des constructions années 60-70 ou les dalles sur plots des résidences plus récentes retrouvent leur aspect d'origine. Le garde-corps redevient net, les vitres attenantes laissent passer la lumière sans voile gris. C'est un espace récupéré, utilisable pour une table, des plantes, ou simplement pour prendre l'air.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic du support et de l'exposition. Chaque balcon présente des contraintes différentes : étage élevé, voisins en dessous, mobilier à protéger. Un plan d'action adapté permet d'intervenir efficacement sans créer de nuisances.</p>",
      uniqueDeepDive:
        "<h3>Un sol débarrassé des dépôts et un garde-corps net</h3>\n<p>Le résultat visé : un balcon où l'on peut marcher pieds nus sans sensation de crasse, avec des surfaces uniformes et des joints éclaircis. Pour y parvenir, le sol est d'abord débarrassé des gros débris — feuilles mortes, terre accumulée, résidus divers. <strong>Le garde-corps et les vitrages attenants</strong> sont traités dans la foulée.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Sur béton brut, <strong>un produit désincrustant est appliqué</strong> puis brossé mécaniquement pour déloger les particules de pollution. Sur dalles ou carrelage, la pression est ajustée pour préserver les joints. Les plantes et le mobilier sont déplacés ou bâchés avant toute projection d'eau.</p>\n\n<h3>Rinçage contrôlé et protection voisinage</h3>\n<p>L'eau de rinçage est gérée pour éviter les coulures chez les voisins du dessous. <strong>Des protections sont posées en périphérie</strong> si nécessaire. Le séchage est accéléré par raclage, et des conseils d'entretien sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "<strong>Noircissement accéléré</strong> par la pollution des axes N3 et A86 sur les balcons exposés côté rue.",
        "<strong>Béton brut poreux</strong> des barres années 60-70 nécessitant un traitement désincrustant adapté.",
        "Loggias semi-fermées avec accumulation de dépôts verts liée à la végétation du Parc de la Bergère.",
        "<strong>Étages élevés dans les tours</strong> imposant une logistique d'accès et de gestion du matériel.",
        "Densité d'occupation exigeant une coordination stricte pour éviter les nuisances aux voisins.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyez-vous un balcon en béton brut à Karl Marx fortement noircit par la circulation sur la N3 sans abîmer le support ?",
          answer:
            "<p>Le béton brut est poreux et retient les particules de pollution. Nous appliquons un produit désincrustant non acide, laissé agir quelques minutes, puis brossé mécaniquement. Le rinçage se fait à pression modérée pour ne pas creuser la surface. Les joints sont traités séparément si nécessaire.</p>",
        },
        {
          question:
            "Quelle gestion de l'eau et quelles protections mettez-vous en place pour éviter coulures chez les voisins du dessous ?",
          answer:
            "<p>Avant de commencer, <strong>nous installons des protections en périphérie du balcon</strong> — bâches ou raclettes de retenue. L'eau est dirigée vers l'évacuation existante ou récupérée. Si le balcon n'a pas de siphon, nous travaillons par zones avec un minimum d'eau et un raclage immédiat.</p>",
        },
        {
          question:
            "Sur des loggias proches du Parc de la Bergère, comment traitez-vous les dépôts verts et mousses incrustées sans détériorer les joints ?",
          answer:
            "<p>Les mousses et dépôts verts sont d'abord grattés à sec pour retirer l'épaisseur. Un traitement anti-mousse est ensuite appliqué sur les zones concernées. Le brossage reste manuel autour des joints fragiles. Le rinçage final élimine les résidus sans pression excessive.</p>",
        },
        {
          question:
            "Pour un balcon au dernier étage d'une tour, quelles solutions d'accès proposez-vous pour intervenir en sécurité et rapidité ?",
          answer:
            "<p><strong><strong>Le matériel est monté en plusieurs rotations</strong></strong> si l'ascenseur est disponible, ou conditionné pour un portage escalier. L'intervention est planifiée pour limiter les allers-retours. Sur place, nous travaillons avec un équipement compact adapté aux espaces réduits et aux contraintes d'évacuation d'eau en hauteur.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque à Bobigny : proximité du Parc de la Bergère, tours avec corniches exposées, cours intérieures.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection homologuée pour éliminer les risques sanitaires.",
        "Organisation pensée pour limiter la gêne : bâchage voisins, évacuation sécurisée des déchets, délai de réutilisation communiqué.",
      ],
      uniqueIntro:
        "<p>Les traces blanchâtres et croûtes sèches sont visibles sur de nombreux balcons orientés vers le <strong>Parc de la Bergère</strong> et les alignements d'arbres qui bordent les avenues. Ces dépôts s'accumulent sur les garde-corps, le sol et parfois les vitrages, rendant l'espace inutilisable. L'odeur persiste, le linge ne peut plus sécher dehors, et la gêne vis-à-vis du voisinage s'installe.</p>\n<p class=\"mt-4\">Sur les <strong>corniches et rebords en béton des tours</strong>, les pigeons trouvent des perchoirs idéaux aux derniers étages. Les fientes attaquent progressivement les surfaces, provoquant des taches tenaces et une dégradation des peintures. Au-delà de l'aspect visuel, ces déjections contiennent des agents pathogènes qui justifient un traitement adapté plutôt qu'un simple rinçage.</p>\n<p class=\"mt-4\">Notre intervention structure chaque étape : diagnostic de l'ampleur des dépôts, protection de votre intérieur, collecte sécurisée, désinfection des supports et recommandations pour limiter le retour. Les zones à risque autour des marchés alimentaires et des cours intérieures nécessitent une attention particulière que nous intégrons dès la préparation du chantier.</p>",
      uniqueDeepDive:
        "<h3>Sécurisation et confinement</h3>\n<p>Les fientes sèches libèrent des particules nocives lorsqu'elles sont déplacées. Nous intervenons équipés de masques FFP2, gants, lunettes et combinaisons jetables. <strong>Le balcon est bâché</strong> pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins du dessous.</p>\n<p class=\"mt-4\">L'humidification préalable neutralise les poussières avant manipulation.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p><strong>Les dépôts sont ramassés et conditionnés</strong> en sacs étanches. Le sol, les garde-corps, les vitrages et murs mitoyens sont ensuite nettoyés pour éliminer les résidus incrustés.</p>\n<p class=\"mt-4\">Une désinfection virucide et bactéricide est appliquée sur l'ensemble des surfaces, avec respect du temps de contact nécessaire à l'élimination des agents pathogènes.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation après aération. <strong>Nous évacuons les déchets contaminés</strong> dans le respect des règles sanitaires.</p>\n<p class=\"mt-4\">Si nécessaire, nous proposons la pose de pics anti-pigeons sur les rebords ou de filets de protection pour limiter les retours.</p>",
      specificChallenges: [
        "Perchoirs fréquents sur les corniches en béton des tours aux derniers étages.",
        "<strong>Accumulation rapide</strong> près des alignements d'arbres et du Parc de la Bergère.",
        "<strong>Risque de dispersion</strong> vers les voisins du dessous dans les immeubles denses.",
        "<strong>Dégradation des peintures</strong> et supports par l'acidité des fientes non traitées.",
        "<strong>Présence accrue d'oiseaux</strong> autour des marchés alimentaires du quartier.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes couvrent un balcon côté Parc de la Bergère : quelles sont les urgences sanitaires et étapes immédiates de prise en charge ?",
          answer:
            "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Évitez de balayer à sec et contactez-nous pour un assainissement sécurisé. Nous intervenons avec confinement et désinfection pour rendre l'espace utilisable sans risque pour votre famille.</p>",
        },
        {
          question:
            "Quel protocole EPI et quels produits utilisez-vous pour désinfecter rebords en béton attaqués par fientes de pigeons ?",
          answer:
            "<p><strong>Nos équipes portent masques FFP2, gants, lunettes</strong> et combinaisons jetables. Après humidification pour éviter l'envol de particules, nous appliquons un produit virucide et bactéricide homologué sur le béton. Le temps de contact est respecté avant rinçage pour garantir l'élimination des agents pathogènes.</p>",
        },
        {
          question:
            "Après enlèvement des fientes sur une loggia, quelle désinfection obligatoire appliquez-vous pour rendre l'espace sain aux habitants ?",
          answer:
            "<p>Une fois les dépôts collectés, <strong>nous traitons l'ensemble des surfaces</strong> avec un désinfectant à spectre large. Ce produit élimine bactéries et virus présents dans les résidus. Après le temps de contact requis, un rinçage et une aération permettent de réutiliser la loggia en toute sécurité.</p>",
        },
        {
          question:
            "Comment évacuez-vous les déchets contaminés (fientes) en respectant la réglementation et sans gêner la voie publique à Bobigny ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès la collecte. Nous les transportons directement vers notre véhicule sans stockage sur les parties communes. Cette organisation limite les nuisances pour le voisinage et respecte les contraintes de stationnement en centre-ville.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos canapés, tapis et matelas, avec détachage ciblé et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des logements balbyniens, des grands ensembles aux pavillons du secteur Pierre Semard.",
        "Détachage adapté à chaque fibre avec extraction maximale et temps de séchage maîtrisé.",
        "Intervention planifiée selon vos disponibilités, matériel compact pour accès en étage sans ascenseur.",
      ],
      uniqueIntro:
        "<p>Comment préserver la propreté d'un canapé familial quand les enfants y passent leurs soirées, que le chat s'y installe chaque matin, et que les taches de café ou de jus s'accumulent au fil des semaines ? Dans les logements du quartier Paul Eluard comme dans les studios proches du campus universitaire, <strong>les textiles d'ameublement absorbent tout</strong> : poussières, allergènes, odeurs persistantes. Le passage régulier ne suffit plus à masquer l'encrassement.</p>\n<p class=\"mt-4\">Un entretien en profondeur change la donne au quotidien. Les tissus synthétiques courants dans les foyers balbyniens retrouvent leur souplesse, les couleurs se ravivent, et l'air intérieur gagne en fraîcheur. Pour les salles d'attente des cabinets médicaux ou juridiques autour de l'Hôpital Avicenne et du Tribunal, c'est aussi une question d'image : des assises propres rassurent les visiteurs.</p>\n<p class=\"mt-4\">Notre intervention s'adapte à chaque textile et à chaque contrainte d'accès. Diagnostic préalable, test sur zone discrète si nécessaire, puis traitement adapté à l'épaisseur et à la nature du tissu.</p>",
      uniqueDeepDive:
        "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'extraire les salissures profondes, neutraliser les odeurs et redonner aux fibres leur aspect d'origine. Sur un canapé taché par des traces d'urine animale ou un tapis marqué par des années de passage, le résultat se voit immédiatement : couleurs ravivées, toucher plus souple, odeurs disparues.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute action, nous identifions le type de tissu (coton, synthétique, velours, similicuir) et la nature des taches. Un détachage enzymatique est appliqué sur les zones critiques. Pour les textiles fragiles, un test discret sur partie cachée garantit l'absence de réaction.</p>\n\n<h3>Injection-extraction et séchage contrôlé</h3>\n<p>Le traitement principal utilise la technique d'injection-extraction : solution nettoyante injectée dans les fibres, puis aspirée avec les salissures. La pression et la température sont ajustées selon l'épaisseur du textile. Nous vous indiquons le délai de séchage selon la saison et l'aération disponible.</p>",
      specificChallenges: [
        "<strong>Taches anciennes</strong> sur canapés familiaux des grands ensembles : café, jus, traces d'animaux.",
        "<strong>Textiles synthétiques sensibles</strong> nécessitant un réglage précis de température et pression.",
        "Studios étudiants proches du campus avec rotation locative fréquente et encrassement rapide.",
        "Accès en étage sans ascenseur dans certaines résidences du quartier Paul Eluard.",
        "<strong>Salles d'attente médicales</strong> exigeant une remise en service rapide entre deux journées.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé familial infesté d'acariens à Bobigny centre, quel résultat d'assainissement pouvez-vous garantir et en combien de temps ?",
          answer:
            "<p><strong>L'extraction par injection-aspiration retire la majorité</strong> des acariens, poussières et allergènes logés dans les fibres. Sur les canapés des logements proches du métro Pablo Picasso, nous constatons une amélioration nette de la qualité de l'air intérieur dès le séchage terminé, généralement sous 4 à 8 heures selon l'épaisseur du tissu.</p>",
        },
        {
          question:
            "Nettoyez-vous les canapés des salles d'attente d'Avicenne sur site et quel est le temps de séchage moyen ?",
          answer:
            "<p>Oui, nous traitons les assises des cabinets médicaux et juridiques du secteur. Le séchage varie selon le revêtement : comptez 3 à 5 heures pour du similicuir, 6 à 10 heures pour du tissu épais. Nous pouvons intervenir en fin de journée pour une remise en service le lendemain matin.</p>",
        },
        {
          question:
            "Comment procédez-vous pour un canapé en tissu non déhoussable dans un studio étudiant proche de l'IUT sans démontage complet ?",
          answer:
            "<p>Nous travaillons directement sur place sans démontage. Après identification du tissu, le détachage cible les zones marquées puis l'injection-extraction traite l'ensemble de l'assise. Le matériel compact passe dans les escaliers étroits des résidences étudiantes. Aucun transport du meuble n'est nécessaire.</p>",
        },
        {
          question:
            "En secteur Pierre Semard, quelles consignes logistiques donnez-vous pour l'arrivée du technicien et du matériel volumineux ?",
          answer:
            "<p>Nous demandons une place de stationnement à proximité immédiate ou l'autorisation de stationner brièvement devant l'entrée. <strong>Le matériel tient sur un chariot roulant</strong>. Si l'accès se fait par un jardin ou une allée étroite, prévenez-nous pour adapter l'organisation. Un créneau de 15 minutes suffit pour l'installation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux, déménagement ou rotation locative, avec nettoyage minutieux de chaque pièce pour une restitution impeccable.",
      whyUsBullets: [
        "Connaissance des typologies locales : grands ensembles, pavillons Pierre Semard, résidences neuves du quartier Jean Rostand.",
        "Polyvalence sur tous types de sols et finitions, du lino ancien au parquet flottant récent.",
        "Organisation calée sur les délais serrés des bailleurs et coordination possible avec agences ou artisans.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou une succession de locataires, un appartement accumule des traces que le ménage courant ne suffit pas à éliminer. Poussière de plâtre incrustée dans les angles, résidus de colle sur les plinthes, sols ternis par les passages répétés : ces marques persistent et compliquent la remise en état. Dans les secteurs proches du <strong>Stade Henri Wallon</strong> et de la <strong>Cité Karl Marx</strong>, les rotations locatives fréquentes amplifient ce besoin de préparation soignée avant chaque nouvelle occupation.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite l'état des lieux et évite les litiges. Les biens mixtes de Bobigny — grands ensembles avec lino ou PVC, résidences récentes équipées de parquet flottant et carrelage — demandent des techniques adaptées à chaque revêtement. Le résultat : des surfaces assainies, des pièces d'eau détartrées, des vitres transparentes.</p>\n<p class=\"mt-4\">L'intervention s'organise selon un diagnostic préalable : nature du chantier, état général, délai de restitution. Chaque étape est planifiée pour respecter les contraintes des bailleurs sociaux et des agences qui gèrent une partie importante du parc locatif local.</p>",
      uniqueDeepDive:
        "<h3>Un logement prêt à habiter</h3>\n<p>L'objectif est de restituer un bien propre, sans traces de chantier ni résidus d'occupation précédente. Sols nettoyés selon leur nature, vitres intérieures dégagées, sanitaires détartrés : <strong>chaque élément visible est traité</strong> pour permettre une remise des clés sans réserve.</p>\n\n<h3>Préparation et nettoyage général</h3>\n<p>Le diagnostic initial identifie les zones critiques : traces de peinture, joints encrassés, placards poussiéreux. <strong>L'intervention débute par le dépoussiérage complet</strong> des plafonds aux plinthes, suivi de l'aspiration et du lavage des sols adaptés au revêtement. Les pièces d'eau reçoivent un traitement spécifique : faïence, robinetterie, évacuations.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les détails font la différence lors de l'état des lieux : interrupteurs, poignées, radiateurs, intérieurs de placards. <strong>Un contrôle final vérifie chaque point</strong> avant aération du logement. Le compte-rendu d'intervention peut être transmis au donneur d'ordre si nécessaire.</p>",
      specificChallenges: [
        "<strong>Résidus de chantier</strong> fréquents dans les programmes Cœur de Ville en cours de livraison.",
        "<strong>Sols mixtes</strong> (lino, carrelage, parquet) nécessitant des techniques de lavage différenciées.",
        "<strong>Rotations locatives rapides</strong> autour du campus universitaire et du métro Pablo Picasso.",
        "Stationnement contraint en centre-ville, planification du matériel indispensable.",
        "Coordination avec les bailleurs sociaux pour respecter les créneaux d'état des lieux.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans le nouveau Cœur de Ville, quels protocoles et quel délai garantissez-vous avant remise des clés ?",
          answer:
            "<p>Le nettoyage fin de chantier inclut l'élimination des poussières de plâtre, des traces de peinture et des résidus de colle absents d'un ménage classique. Dans les programmes neufs livrés autour de Cœur de Ville, <strong>ces dépôts sont systématiques</strong> et demandent un protocole renforcé avant la remise des clés.</p>",
        },
        {
          question:
            "Quel délai d'intervention proposez-vous pour un nettoyage état des lieux urgent demandé par un bailleur social à Bobigny ?",
          answer:
            "<p>Nous pouvons intervenir sous 48 à 72 heures selon la surface et la disponibilité du logement. Pour les bailleurs sociaux gérant un volume important de rotations, un planning récurrent peut être mis en place afin de sécuriser les créneaux d'intervention.</p>",
        },
        {
          question:
            "Comment établissez-vous un devis pour un appartement T3 avec sols mixtes (lino et parquet) dans une résidence réhabilitée ?",
          answer:
            "<p><strong>Le devis tient compte de la surface totale</strong>, du nombre de pièces d'eau et des types de revêtements présents. Un T3 combinant lino dans les chambres et carrelage en cuisine nécessite des produits et temps de séchage différents, intégrés dans l'estimation.</p>",
        },
        {
          question:
            "Comment coordonnez-vous vos interventions avec les artisans lors d'un nettoyage après travaux dans le Cœur de Ville ?",
          answer:
            "<p>Nous intervenons après la fin des travaux salissants, en accord avec le maître d'œuvre ou l'entreprise générale. Un échange préalable permet de caler la date d'intervention et d'éviter les reprises si des finitions restent à réaliser.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
