import type { City } from "~/types/geo";

const city: City = {
  name: "Rosny-sous-Bois",
  slug: "rosny-sous-bois2",
  postalCodes: ["93110"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Rosny-sous-Bois (93110) combine des zones résidentielles et des pôles très fréquentés autour de la gare RER E Rosny-Bois-Perrier. Klinova intervient localement avec une organisation claire, adaptée aux accès, aux usages et aux contraintes de planning.",

  hubIntro: `<p>Entre <strong>Westfield Rosny 2</strong> et le <strong>Plateau d’Avron</strong>, les bâtiments n’ont pas les mêmes rythmes, ni les mêmes contraintes d’entretien. Klinova se positionne comme partenaire terrain, capable de cadrer une action propre, lisible, et simple à suivre au quotidien.</p>
<p class="mt-4">Notre approche : diagnostiquer, organiser, exécuter, puis laisser un site exploitable, avec des consignes concrètes. Quand c’est utile, un compte-rendu peut être fourni (notamment pour les gestionnaires et syndics), sans surcharger le process ni perturber l’activité sur place.</p>
<ul>
  <li><strong>Repérage + cadrage :</strong> on clarifie l’accès, les surfaces, les zones sensibles et l’objectif attendu, puis on planifie l’opération avec une méthode adaptée au lieu et à son usage.</li>
  <li><strong>Exécution propre :</strong> protections, balisage si nécessaire, gestion des nuisances (bruit, humidité, circulation), et fin de passage nette pour éviter l’effet “chantier” dans les parties communes.</li>
  <li><strong>Suivi simple :</strong> conseils d’entretien, points de vigilance et fréquence recommandée selon trafic. Si besoin, on cale un rythme réaliste plutôt qu’une action ponctuelle inefficace.</li>
</ul>`,
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé

  citySpecificChallenges: [
    "Trafic élevé près des pôles commerciaux, avec apports rapides de poussières et traces sur les circulations.",
    "Proximité A86/A3/A103 : dépôts de particules fines qui encrassent plus vite les zones en sous-sol.",
    "Stationnement souvent contraint en centre-ville et près des gares : planification et déchargement à cadrer.",
    "Mix pavillons / résidences récentes : supports et niveaux de fragilité variables selon les secteurs.",
    "Parkings souterrains collectifs à organiser en sécurité avec circulation usagers.",
    "Cohabitation habitat/activités : nécessité de protections et de gestion du voisinage pendant l’opération.",
  ],

  districts: [
    "Centre-ville",
    "Bois Perrier",
    "La Boissière",
    "Les Côteaux / Hauts de Rosny",
    "Plaine Beauval",
    "ZAC Saussaie Beauclair",
  ],
  nearbyCities: [],

  landmarks: [
    "Mairie de Rosny-sous-Bois",
    "Gare RER E Rosny-Bois-Perrier",
    "Westfield Rosny 2",
    "Centre commercial Domus",
    "Échangeur A86/A3 (proximité)",
    "Square Richard Gardebled",
  ],

  faq: [
    {
      question:
        "Comment se déroule une demande d’intervention quand le site est proche d’un pôle très fréquenté comme Rosny 2 ?",
      answer: `<p><strong>On commence par sécuriser l’accès et le créneau.</strong> Autour de Rosny 2, la circulation et les arrivées/livraisons peuvent compliquer la logistique. On confirme les conditions de stationnement, l’itinéraire matériel et l’ordre des zones à traiter, pour éviter les blocages et limiter la gêne.</p>`,
    },
    {
      question:
        "En centre-ville, les zones bleues ou payantes compliquent-elles l’organisation ?",
      answer: `<p><strong>Oui, et c’est anticipé dès le cadrage.</strong> Si le stationnement est contraint, on ajuste l’horaire, le point de déchargement et le volume de matériel amené en une fois. L’objectif est d’éviter les allers-retours inutiles et de garder un déroulé fluide, sans improvisation.</p>`,
    },
    {
      question:
        "Pouvez-vous intervenir rapidement après un incident (salissure importante, dégât des eaux, remise en état urgente) ?",
      answer: `<p><strong>Selon l’accès et la disponibilité du site, oui.</strong> Quand l’enjeu est de remettre un espace en usage, on priorise le diagnostic et une méthode compatible avec le contexte (humidité, circulation, aération). À Rosny-sous-Bois, la proximité des gares peut imposer des créneaux précis : on s’y adapte.</p>`,
    },
    {
      question:
        "Comment coordonnez-vous une opération quand plusieurs parties prenantes sont impliquées (occupants, gardien, gestionnaire) ?",
      answer: `<p><strong>On fixe un point de contact et des règles simples.</strong> Accès, zones à neutraliser, balisage, circulation et fin de passage sont validés avant de démarrer. Cette coordination évite les incompréhensions et protège les usagers, surtout quand habitat et activités se côtoient dans un même secteur.</p>`,
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Retrouver une moquette plus saine et plus présentable, avec un séchage maîtrisé et une méthode adaptée au trafic quotidien des zones de passage.",
      whyUsBullets: [
        "Expertise des sols textiles en secteurs très passants comme Rosny 2 et ses circulations.",
        "Maîtrise injection-extraction et basse humidité, selon dalles textiles ou moquette bouclée.",
        "Organisation adaptée aux flux proches RER E, pour limiter gêne et immobilisation.",
      ],

      uniqueIntro: `<p>Dans la zone tertiaire de Rosny 2 le long du secteur N186, les sols textiles prennent vite les traces de passage, les poussières fines et les taches du quotidien. Le nettoyage moquette Rosny-sous-Bois vise surtout à retrouver un aspect net sur les couloirs, zones d’accueil et espaces de travail, sans immobiliser les lieux plus que nécessaire. Côté bâti, on rencontre souvent des <strong>dalles textiles</strong> dans les bureaux, tandis que les résidences récentes (ZAC) utilisent davantage des moquettes bouclées, avec des fibres et des contraintes de séchage différentes. La proximité des gares RER E (Rosny-sous-Bois / Rosny-Bois-Perrier) renforce les apports de salissures sur les entrées et circulations : un passage structuré limite le ternissement et réduit les odeurs qui s’installent dans la fibre. Klinova intervient en combinant diagnostic, protections, et méthode de remise en état adaptée (profonde ou basse humidité), pour traiter les taches (café, gras) et améliorer l’hygiène textile, avec une remise en service réaliste selon le support et la ventilation.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>On repère le type de fibre, la pose (dalles textiles, moquette bouclée), les zones les plus marquées et les taches à détacher. Protections et balisage sont mis en place selon l’usage des lieux, puis on valide le cheminement matériel et les contraintes d’accès.</p>

<h3>Nettoyage et détachage</h3>
<p>Selon le besoin, on privilégie l’injection-extraction pour un nettoyage profond, ou une approche basse humidité type encapsulation/bonnet pour limiter l’immobilisation. Les zones à fort trafic reçoivent des passes supplémentaires, avec un détachage ciblé pour les taches café ou grasses, afin d’éviter les auréoles.</p>

<h3>Humidité, séchage et recommandations</h3>
<p>L’extraction est poussée au maximum et on ajuste l’aération pour accélérer le séchage sans dégrader les fibres. Près des flux RER E, on organise la remise en service par zones pour limiter la gêne. On termine par des conseils simples sur la fréquence d’entretien et les gestes qui ralentissent l’encrassement.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Dalles textiles très passantes côté bureaux : éviter les auréoles après détachage.",
        "Moquettes bouclées en résidences récentes : humidité et séchage à maîtriser.",
        "Flux près des gares RER E : remise en service par zones pour limiter la gêne.",
        "Zones d’accueil : rendu visuel attendu sans surmouiller ni saturer la fibre.",
        "Traces grasses et café : pré-traitement ciblé pour un aspect homogène.",
      ],

      faqAdditions: [
        {
          question:
            "Dans les bureaux du secteur Rosny 2 le long de la N186, quelle méthode privilégiez-vous pour des dalles textiles très passantes ?",
          answer: `<p>On choisit selon l’état et l’objectif. Pour un encrassement profond, l’injection-extraction est pertinente. Si l’enjeu est une remise en service rapide, une méthode basse humidité (encapsulation/bonnet) peut être plus adaptée, tout en traitant les zones de passage avec des passes supplémentaires.</p>`,
        },
        {
          question:
            "Sur des dalles textiles de bureaux, comment traitez-vous des taches de café ou de gras sans laisser d’auréoles visibles ?",
          answer: `<p>On évite le “sur-produit” et on travaille par étapes : pré-traitement ciblé, action mécanique contrôlée, puis extraction ou récupération adaptée. L’objectif est d’enlever la charge de salissure dans la fibre, pas seulement de déplacer la tache. On ajuste aussi le séchage pour stabiliser le rendu.</p>`,
        },
        {
          question:
            "Près des gares RER E, comment gérez-vous le séchage pour limiter la gêne dans les couloirs et zones d’accueil ?",
          answer: `<p>On segmente le site : zones traitées, zones en circulation, puis on optimise l’extraction et la ventilation. Le séchage dépend du support et du climat, mais l’organisation par secteurs évite de bloquer tout un couloir. On communique aussi des consignes simples d’usage pendant la phase de reprise.</p>`,
        },
        {
          question:
            "Avec le passage quotidien dans la zone Rosny 2, à quelle fréquence recommandez-vous un entretien moquette pour éviter le ternissement ?",
          answer: `<p>La fréquence dépend du trafic et de la couleur de la moquette. Dans les zones d’accueil et couloirs, un entretien régulier évite l’encrassement “incrusté” qui ternit vite. On recommande souvent un rythme plus rapproché sur les axes principaux, et plus espacé sur les bureaux moins sollicités.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Améliorer la lisibilité et la sécurité d’un parking collectif, avec un lavage mécanisé et une gestion stricte des eaux de lavage.",
      whyUsBullets: [
        "Habitude des parkings collectifs du Bois Perrier, avec circulation usagers à sécuriser.",
        "Autolaveuse + dégraissage ciblé, réglés selon béton brut ou résine époxy.",
        "Zonage, balisage et rotation véhicules cadrés pour limiter la gêne d’exploitation.",
      ],

      uniqueIntro: `<p>Après quelques mois sans entretien, un parking collectif cumule poussière noire, traces de pneus et taches d’hydrocarbures, avec une impression d’ensemble vite dégradée. Dans les parkings souterrains des résidences du Bois Perrier, la gestion est souvent collective et la circulation usagers impose une organisation précise : zonage, balisage, et phases de passage pour éviter les blocages. La nature des revêtements varie selon les ensembles : béton brut dans certains grands volumes, résine époxy dans des résidences plus standing, ce qui change les réglages et les produits. À proximité de la jonction A86/A3/A103, les dépôts de particules fines noires accélèrent l’encrassement en sous-sol et rendent les marquages moins lisibles. Le nettoyage parking Rosny-sous-Bois s’aborde donc comme une opération technique et sécurisée : on traite les zones critiques (rampes, angles, pieds de murs, rigoles), on dégraisse là où c’est nécessaire, et on vise un rendu propre compatible avec l’usage quotidien, sans promesses irréalistes.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Diagnostic et organisation</h3>
<p>On identifie le revêtement, les accès, les points d’eau et les contraintes d’évacuation. Un plan de zonage est établi avec balisage et consignes de circulation. Dans les parkings collectifs, on prévoit la rotation véhicules et les zones neutralisées.</p>

<h3>Lavage mécanisé et dégraissage</h3>
<p>Selon l’état, l’autolaveuse assure brossage et aspiration simultanés pour un séchage maîtrisé. Les taches d’huile et de graisse reçoivent un dégraissage ciblé, avec une action mécanique adaptée au béton brut ou à la résine. Les rampes et zones inclinées sont traitées avec prudence.</p>

<h3>Gestion des eaux et fin de passage</h3>
<p>Les eaux de lavage sont gérées strictement selon le site, pour éviter débordements et traces résiduelles. On insiste sur les angles, pieds de murs, rigoles et zones d’accès. Une fois le sol stabilisé, on transmet des recommandations de fréquence, surtout quand les dépôts noirs liés aux axes proches reviennent vite.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Traces d’hydrocarbures anciennes : dégraissage ciblé avant lavage mécanisé.",
        "Revêtements mixtes béton/résine : réglages et chimie à adapter finement.",
        "Proximité A86/A3/A103 : dépôts noirs récurrents, encrassement accéléré.",
        "Rampes et zones inclinées : passage sécurisé, séchage maîtrisé.",
        "Parkings collectifs : balisage et circulation usagers à organiser.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les parkings souterrains du Bois Perrier, comment organisez-vous le balisage et la circulation pendant le lavage mécanisé ?",
          answer: `<p>On travaille par zones, avec un balisage clair et des phases de passage. L’objectif est d’éviter la fermeture totale quand ce n’est pas nécessaire, tout en sécurisant les usagers. On cadre aussi la rotation des véhicules et les accès techniques, pour que l’autolaveuse puisse avancer sans interruption.</p>`,
        },
        {
          question:
            "Selon que le sol est en béton brut ou en résine époxy, comment choisissez-vous entre autolaveuse et haute pression contrôlée ?",
          answer: `<p>Le choix dépend du niveau d’encrassement, des taches et de la configuration. L’autolaveuse est souvent la base pour un lavage régulier et un séchage maîtrisé. La haute pression contrôlée peut compléter sur des zones très marquées ou des reliefs, en restant prudents sur les résines et les points sensibles.</p>`,
        },
        {
          question:
            "Avec le trafic permanent autour de Rosny 2 et Domus, comment obtenez-vous un rendu propre sans marques noires persistantes ?",
          answer: `<p>On combine mécanique et chimie : brossage/aspiration avec autolaveuse, puis traitement ciblé des zones les plus chargées. Les marques noires liées aux dépôts routiers demandent parfois plusieurs cycles d’entretien plutôt qu’un seul passage “miracle”. On propose une fréquence réaliste selon trafic et usage.</p>`,
        },
        {
          question:
            "Avec l’échangeur A86/A3/A103 tout proche, comment traitez-vous les dépôts de particules fines noires incrustées sur le sol ?",
          answer: `<p>On privilégie un décrassage progressif : pré-humidification, détergent adapté, action mécanique, puis aspiration efficace. L’idée est de décoller la charge de particules sans étaler la salissure. Sur les zones très incrustées, on ajuste les passes et on insiste sur les angles et pieds de murs où la suie s’accumule.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Redonner un extérieur propre et agréable, sans abîmer les supports, en gérant l’eau de lavage et les contraintes de voisinage.",
      whyUsBullets: [
        "Connaissance des extérieurs à La Boissière et des zones plus humides vers le Golf de Rosny.",
        "Pression contrôlée et chimie adaptée pour béton peint, grès cérame et dalles sur plots.",
        "Gestion anti-coulures et organisation d’accès, même avec stationnement centre-ville contraint.",
      ],

      uniqueIntro: `<p>Un balcon qui se ternit, des joints qui noircissent, des dépôts verts qui reviennent : visuellement, l’extérieur perd vite son côté “utile”. Dans les secteurs de La Boissière, avec beaucoup d’extérieurs et une exposition aux salissures végétales, la remise en état doit rester douce pour ne pas abîmer les supports. Selon le bâti, on rencontre souvent du <strong>béton peint</strong>, du carrelage grès cérame, ou des dalles sur plots dans le récent, avec des zones fragiles (joints, angles, plinthes). Du côté des résidences proches du Golf de Rosny, l’humidité et les mousses peuvent s’installer dans les aspérités, surtout après une saison humide. Enfin, l’organisation compte : en centre-ville et près des gares, le stationnement en zones bleues ou payantes se gère en amont pour éviter de transformer l’intervention en suite d’allers-retours. Klinova intervient avec une pression contrôlée, des produits adaptés au support, et une gestion de l’eau pensée pour limiter les coulures chez les voisins du dessous, afin que vous puissiez réutiliser l’espace rapidement selon la météo et l’aération.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Protéger et préparer</h3>
<p>On protège menuiseries, bas de façade et zones sensibles, puis on met à l’abri mobilier et plantes. Les gros dépôts sont retirés avant toute action humide. On valide aussi l’évacuation de l’eau et les points où le ruissellement doit être strictement limité.</p>

<h3>Traiter sans agresser le support</h3>
<p>On applique un produit adapté au support, puis brossage et rinçage contrôlé. La pression est ajustée au carrelage, au béton peint ou aux dalles sur plots, avec attention particulière aux joints fragiles. Les garde-corps, vitrages et murs mitoyens sont traités si nécessaire.</p>

<h3>Gérer l’eau et remettre en usage</h3>
<p>On organise la récupération et l’écoulement pour limiter les coulures chez les voisins du dessous. Le séchage dépend de la saison et de l’aération, mais on vise une remise en usage rapide et réaliste. En zones de stationnement compliquées, on planifie pour travailler efficacement, puis on donne des conseils d’entretien pour ralentir le retour des dépôts verts.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Dépôts verts récurrents près des zones végétalisées : traitement sans agresser le support.",
        "Supports variés : béton peint, grès cérame, dalles sur plots, joints fragiles.",
        "Risque de coulures chez voisins du dessous : gestion de l’eau à cadrer.",
        "Stationnement zones bleues/payantes : accès et déchargement à anticiper.",
        "Balcon fermé ou exposé : ajuster rinçage et séchage selon ventilation.",
      ],
      faqAdditions: [
        {
          question:
            "En centre-ville ou près des gares, comment planifiez-vous l’intervention balcon quand le stationnement est en zones bleues ou payantes ?",
          answer: `<p>On cale le créneau et le point de déchargement avant de venir, pour réduire les allers-retours. Le volume de matériel est ajusté, et on privilégie un déroulé continu. Cela évite de perdre du temps sur place et limite la gêne, surtout quand l’accès au pied de l’immeuble est serré.</p>`,
        },
        {
          question:
            "Pour un balcon en béton peint ou en dalles sur plots, quels réglages et produits utilisez-vous pour nettoyer sans abîmer les joints ?",
          answer: `<p>On travaille avec une pression contrôlée et un produit adapté, puis un brossage ciblé sur les zones marquées. Les joints et angles sont traités avec prudence, sans insister au jet “fort” qui peut fragiliser. L’objectif est de décoller la salissure, pas d’user le support.</p>`,
        },
        {
          question:
            "Dans les résidences proches du Golf de Rosny, comment traitez-vous mousses et dépôts verts sur les balcons sans agresser le support ?",
          answer: `<p>On privilégie une action chimique maîtrisée + mécanique, puis rinçage contrôlé. Les dépôts verts demandent souvent un temps d’action et un brossage, plutôt qu’une haute pression agressive. On adapte aussi selon la porosité du support, pour éviter marques et différences de teinte.</p>`,
        },
        {
          question:
            "Dans les terrasses pavillonnaires de La Boissière, comment limitez-vous les ruissellements et protégez-vous les abords pendant le lavage ?",
          answer: `<p>On sécurise les points de fuite de l’eau avant de démarrer : protections, orientation du rinçage, et contrôle des volumes utilisés. Le lavage se fait par zones pour garder la main sur l’écoulement. Cette organisation réduit le risque de coulures et protège les parties sensibles autour de la terrasse.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainir un balcon souillé par des fientes avec des protections adaptées, un retrait maîtrisé, puis une désinfection rigoureuse pour retrouver un usage normal.",
      whyUsBullets: [
        "Habitude des zones arborées type Square Richard Gardebled où les souillures reviennent vite.",
        "EPI, humidification préalable et désinfection virucide/bactéricide appliqués avec méthode.",
        "Bâchage, sacs étanches et gestion voisinage adaptés aux secteurs à sensibilité élevée.",
      ],

      uniqueIntro: `<p>Quand un balcon devient inutilisable à cause des fientes, la vraie question est simple : comment nettoyer sans disperser les poussières et sans laisser une contamination résiduelle sur les surfaces ? Autour du Square Richard Gardebled, les zones arborées attirent souvent les oiseaux, et l’encrassement peut revenir si rien n’est cadré. Sur certains axes avec corniches et reliefs d’immeubles, comme sur l’Avenue Jean Jaurès, les points de perchage favorisent les retours et compliquent le nettoyage des recoins. L’enjeu n’est pas seulement visuel : il faut retirer, nettoyer, puis <strong>désinfecter</strong> avec un produit virucide/bactéricide en respectant le temps de contact. Dans une ville où habitat et activités cohabitent, la sensibilité au voisinage est souvent moyenne à forte : bâchage, gestion des odeurs et protection des abords sont indispensables. Klinova intervient avec des EPI, une humidification préalable pour limiter l’envol de particules, un conditionnement en sacs étanches, puis un nettoyage des supports (sol, garde-corps, vitres, murs mitoyens) avant une remise en usage réaliste après aération.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Sécuriser et contenir</h3>
<p>Objectif : éviter toute dispersion. EPI complets, bâchage et protection des abords sont mis en place. On humidifie avant retrait pour neutraliser les poussières, puis on prépare le conditionnement en sacs étanches pour limiter les manipulations.</p>

<h3>Retirer et nettoyer les surfaces</h3>
<p>Une fois les déchets retirés et emballés, on nettoie les supports en insistant sur les zones d’accroche, les angles et les reliefs. Garde-corps, vitres et murs mitoyens sont traités si souillés. Sur les corniches et recoins, l’action est ciblée pour ne pas étaler la salissure.</p>

<h3>Désinfecter et remettre en usage</h3>
<p>On applique une désinfection virucide/bactéricide avec respect du temps de contact, puis rinçage si nécessaire. L’aération et le délai avant réutilisation sont précisés selon la configuration (balcon ouvert ou plus confiné). En environnement sensible, on organise la fin de passage pour limiter nuisances et retours de salissures.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Zones arborées : retour possible des oiseaux, nécessité d’un assainissement complet.",
        "Corniches et reliefs Avenue Jean Jaurès : recoins difficiles, nettoyage ciblé indispensable.",
        "Humidification préalable : limiter envol de particules pendant le retrait.",
        "Désinfection virucide/bactéricide : temps de contact à respecter strictement.",
        "Sensibilité voisinage : bâchage et gestion des nuisances à cadrer.",
      ],

      faqAdditions: [
        {
          question:
            "Avec une cohabitation habitat et activités, comment organisez-vous le bâchage et l’information voisins lors d’un nettoyage de fientes ?",
          answer: `<p>On prévoit un confinement simple : bâchage, protection des abords et déroulé clair (retrait, nettoyage, désinfection). L’objectif est de limiter poussières et odeurs pendant la phase active. Quand le voisinage est sensible, on privilégie aussi des créneaux où la gêne est réduite et on sécurise la fin de passage.</p>`,
        },
        {
          question:
            "Après un encrassement important près du centre-ville, comment neutralisez-vous les odeurs persistantes une fois les fientes retirées ?",
          answer: `<p>Le retrait ne suffit pas : l’odeur s’accroche aux micro-dépôts et aux aspérités. On nettoie les supports puis on désinfecte avec un produit adapté, en respectant le temps de contact. Une aération correcte est ensuite indispensable. Selon le support, un second passage ciblé peut être conseillé sur les zones imprégnées.</p>`,
        },
        {
          question:
            "Quand un balcon est contaminé près du Square Richard Gardebled, en combien de temps peut-on retrouver un usage normal après nettoyage et désinfection ?",
          answer: `<p>Le délai dépend de la configuration et de l’aération. Après retrait, nettoyage et désinfection, on indique un temps d’aération réaliste avant de réutiliser l’espace, surtout si le balcon est partiellement fermé. L’objectif est que les surfaces soient stables, sans humidité excessive ni résidus, avant reprise d’usage.</p>`,
        },
        {
          question:
            "Sur des balcons exposés aux corniches de l’Avenue Jean Jaurès, quels EPI et quelle désinfection utilisez-vous après retrait des fientes ?",
          answer: `<p>On utilise des EPI complets (au minimum protection respiratoire, gants, lunettes et combinaison) et on travaille avec humidification préalable pour limiter les particules. La désinfection est virucide/bactéricide avec un temps de contact respecté. Les recoins et reliefs sont traités avec soin, car ce sont des zones de rétention.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchir un canapé ou un tapis en profondeur, réduire taches et odeurs, et retrouver un textile plus sain avec un séchage cadré selon l’épaisseur.",
      whyUsBullets: [
        "Habitude des demandes à domicile vers les Côteaux / Hauts de Rosny et zones familiales.",
        "Injection-extraction + détachage ciblé, adaptés aux tissus et aux taches du quotidien.",
        "Organisation propre en habitat dense (Plaine Beauval), avec consignes claires de séchage.",
      ],

      uniqueIntro: `<p>On le voit vite : le canapé s’assombrit sur les accoudoirs, une odeur s’installe, et certaines taches reviennent même après un nettoyage “maison”. Dans le quartier des Côteaux / Hauts de Rosny, les demandes sont souvent liées à la vie familiale : boissons renversées, traces de sébum, odeurs d’animaux, et besoin d’améliorer l’hygiène du textile (acariens/allergènes) sans abîmer la matière. Le mix local de pavillons (La Boissière / Côteaux) et de résidences récentes (ZAC Saussaie Beauclair) implique des textiles variés : canapés tissu, tapis d’entrée, matelas, parfois plus épais et plus longs à sécher. Dans des secteurs denses comme la Plaine Beauval, l’organisation compte aussi : accès, portage et protection des circulations pour travailler proprement. Le nettoyage canapé Rosny-sous-Bois repose sur un diagnostic précis, un détachage ciblé (café, encre, gras) puis une injection-extraction maîtrisée, avec une extraction maximale pour limiter l’humidité résiduelle. L’objectif : un aspect plus net, des odeurs neutralisées, et des consignes simples pour une remise en usage réaliste selon la saison et l’aération.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>On identifie le textile, les zones d’usure et les taches à traiter, puis on protège les abords et on dégage l’accès. Le diagnostic permet d’adapter la méthode aux tissus fragiles et d’anticiper le temps de séchage, surtout sur les textiles épais.</p>

<h3>Pré-traitement et nettoyage profond</h3>
<p>Les taches sont pré-traitées avec un détachage ciblé (café, sébum, graisses, encre) pour éviter de les étaler. Ensuite, l’injection-extraction assure un nettoyage en profondeur, en travaillant par zones et en adaptant l’humidité au support (canapé, tapis, matelas).</p>

<h3>Extraction, séchage et conseils</h3>
<p>On réalise une extraction maximale pour réduire l’humidité résiduelle et faciliter la reprise d’usage. Des consignes de ventilation et d’attente sont données selon la saison et l’épaisseur. On termine par des recommandations de fréquence, utiles quand allergies, enfants ou animaux accélèrent l’encrassement.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Textiles familiaux : taches boisson, sébum, odeurs d’animaux à neutraliser.",
        "Habitat dense Plaine Beauval : protection des circulations et portage à organiser.",
        "Mix pavillons / résidences récentes : textiles variés, épaisseurs différentes.",
        "Allergènes et acariens : nettoyage profond avec séchage maîtrisé.",
        "Taches anciennes : pré-traitement ciblé pour limiter auréoles et reprises.",
      ],
      faqAdditions: [
        {
          question:
            "Dans le quartier des Côteaux, comment réalisez-vous le diagnostic d’un canapé tissu avant injection-extraction et détachage ciblé ?",
          answer: `<p>On observe le type de tissu, la sensibilité à l’eau, les zones d’usure et la nature des taches. Ce diagnostic permet d’ajuster le pré-traitement et le niveau d’humidité, puis d’anticiper le séchage. L’objectif est d’obtenir un rendu homogène sans fragiliser la fibre ni laisser d’auréoles.</p>`,
        },
        {
          question:
            "Dans des appartements denses comme à la Plaine Beauval, comment traitez-vous des taches de sébum ou de boisson sur canapé sans auréoles ?",
          answer: `<p>On commence par un pré-traitement ciblé, puis on travaille par petites zones pour garder la maîtrise. L’injection-extraction enlève la charge de salissure dans la fibre, et l’extraction finale est poussée pour réduire l’humidité résiduelle. Dans les logements denses, on protège aussi les accès pour travailler proprement.</p>`,
        },
        {
          question:
            "Dans un logement pavillonnaire ou une résidence récente, comment neutralisez-vous les odeurs incrustées sur tapis ou matelas après nettoyage ?",
          answer: `<p>On combine nettoyage profond et neutralisation : l’injection-extraction enlève une grande partie des résidus, puis on insiste sur les zones imprégnées (urine, moisi léger, odeurs d’animaux) avec un traitement adapté. Le séchage et l’aération jouent un rôle clé : on donne des consignes concrètes selon la saison.</p>`,
        },
        {
          question:
            "Près des gares où l’accès est plus contraint, quels délais de séchage annoncez-vous pour un canapé ou un matelas après injection-extraction ?",
          answer: `<p>Le délai dépend surtout de l’épaisseur du textile, de la ventilation et de la température. Après extraction maximale, on vise une reprise d’usage rapide mais réaliste, avec des consignes d’aération. Quand l’accès est plus contraint, on anticipe l’organisation pour rester efficace sur place et limiter le temps de présence.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
