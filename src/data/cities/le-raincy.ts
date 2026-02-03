import type { City } from "~/types/geo";

const city: City = {
  name: "Le Raincy",
  slug: "le-raincy",
  postalCodes: ["93340"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // ✅ Ajusté : diagnostic “surfaces / cadre de vie” sans liste de services
  customDescription:
    "Au Raincy, la proximité de la gare Le Raincy – Villemomble – Montfermeil et des axes comme l’avenue de la Résistance favorise un encrassement régulier des surfaces communes et des extérieurs. Dans une ville résidentielle et arborée, l’entretien des revêtements, garde-corps et sols est clé pour préserver l’image des immeubles et le confort au quotidien.",

  // ✅ hubIntro : 2 <p> + <ul>
  hubIntro:
    '\n<p>Le Raincy se distingue par un parc immobilier résidentiel exigeant, où la qualité perçue des parties communes et des extérieurs compte au quotidien. KLINOVA accompagne syndics, conseils syndicaux, gestionnaires et occupants avec une approche rigoureuse, protocolisée et adaptée aux contraintes d’accès et d’occupation.</p>\n<p class="mt-4">Autour de la gare Le Raincy – Villemomble – Montfermeil, avec un stationnement souvent réglementé et des immeubles aux circulations parfois étroites, chaque intervention commence par un diagnostic sur site, un planning clair et un suivi documenté, pour limiter la gêne et sécuriser le résultat.</p>\n<ul>\n  <li><strong>Accessibilité technique :</strong> organisation par zones, gestion des accès (Vigik / gardien), matériel adapté aux circulations étroites, balisage systématique.</li>\n  <li><strong>Réactivité locale :</strong> déplacement gratuit pour devis, créneaux coordonnés avec syndic/gardien, intervention d’urgence possible selon contexte.</li>\n  <li><strong>Protocoles documentés :</strong> compte-rendu d’intervention, traçabilité des produits, recommandations d’entretien selon les supports.</li>\n</ul>\n',

  citySpecificChallenges: [
    "Copropriétés résidentielles et allées arborées : <strong>apports de terre végétale</strong>, feuilles et dépôts verts sur les zones d’entrée.",
    "Proximité gare et axes routiers : <strong>particules fines et salissures de passage</strong> dans les circulations communes.",
    "Extérieurs exposés (garde-corps, dalles, joints) : <strong>noircissement progressif</strong>, mousses et résines végétales selon ombrage.",
    "Sous-sols et parkings anciens : <strong>béton poreux</strong>, traces d’hydrocarbures, ventilation parfois limitée et zones de manœuvre marquées.",
  ],

  // ✅ Quartiers (IRIS INSEE) — 6 au Raincy
  districts: [
    "Chatrian",
    "Hérôld",
    "Nicolas Carnot",
    "Thiellement",
    "Thiers",
    "Valère Lefebvre",
  ],

  nearbyCities: [
        "villemomble",
        "gagny",
        "bondy",
        "livry-gargan",
        "rosny-sous-bois",
        "montfermeil",
        "neuilly-plaisance",
        "neuilly-sur-marne",
        "noisy-le-sec",
        "chelles"
      ],

  landmarks: [
    "Mairie du Raincy",
    "Gare RER E Le Raincy – Villemomble – Montfermeil",
    "Église Notre-Dame du Raincy (Auguste Perret)",
    "Lycée Albert-Schweitzer",
    "Avenue de la Résistance",
    "Avenue Thiers",
  ],

  // ✅ FAQ hub (HTML léger, balises autorisées)
  faq: [
    {
      question:
        "Intervenez-vous rapidement au Raincy malgré les contraintes de circulation autour de la gare ?",
      answer:
        "<p><strong>Oui, avec une planification réaliste.</strong> Nous privilégions des créneaux adaptés aux flux autour de la gare Le Raincy – Villemomble – Montfermeil et aux règles de stationnement, avec du matériel compact pour intervenir proprement sans bloquer les circulations.</p>",
    },
    {
      question:
        "Comment gérez-vous l’accès aux parties communes sécurisées (badge Vigik, gardien, interphone) ?",
      answer:
        "<p><strong>Accès coordonné et sécurisé.</strong> Selon la résidence, l’accès est organisé via Vigik professionnel, gardien ou remise de clés, avec des horaires validés en amont. Les interventions sont balisées et le technicien est identifiable, pour une circulation maîtrisée dans l’immeuble.</p>",
    },
    {
      question:
        "Le déplacement pour établir un devis est-il facturé pour une copropriété située au Raincy ?",
      answer:
        "<p><strong>Non.</strong> Le diagnostic sur site est réalisé sans frais : surfaces, contraintes d’accès, état des supports (textiles, sols, sous-sols, extérieurs) et organisation. Le devis est ensuite transmis sous 48 à 72 heures, sur la base des éléments constatés.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir en urgence après un dégât des eaux ou une zone fortement souillée ?",
      answer:
        "<p><strong>Oui, selon la situation.</strong> En cas de sinistre ou de souillure accidentelle, nous pouvons mobiliser une équipe sous 24 à 48 heures pour une remise en état, avec un protocole clair (sécurisation, traitement, séchage si nécessaire) et un reporting utile au syndic.</p>",
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
        "Le nettoyage par injection-extraction redonne aux moquettes des halls et cages d’escalier une propreté durable, tout en respectant les contraintes d’accès et le rythme des résidences du Raincy.",

      whyUsBullets: [
        "Interventions régulières au Raincy : compréhension des flux, accès, et contraintes de circulation.",
        "Injection-extraction maîtrisée : passes ciblées, produits adaptés aux fibres, extraction puissante.",
        "Organisation par zones : balisage clair, gêne limitée, compte-rendu utile au syndic.",
      ],

      uniqueIntro:
        '\n<p>Les moquettes de parties communes se salissent progressivement : poussières fines, traces de passage, zones tassées dans les escaliers, ternissement dans les halls. Au Raincy, la proximité des axes et de la gare accentue les apports de particules et la fréquence de passage, surtout aux entrées.</p>\n<p class="mt-4">Sur une moquette bouclée ou plus épaisse, la salissure s’installe dans la fibre et l’aspiration classique ne suffit plus. Un nettoyage professionnel structuré permet de retrouver une propreté visible, d’assainir la fibre et de prolonger la durée de vie du revêtement, sans perturber les occupants.</p>\n',

      uniqueDeepDive:
        '\n<p><strong>1) Diagnostic & préparation :</strong> repérage du type de moquette, des taches et des zones de trafic, puis protections (bas de murs), balisage et organisation par étage/cage pour limiter la gêne.</p>\n<p class="mt-4"><strong>2) Injection-extraction :</strong> produit adapté à la fibre, injection sous pression modérée et aspiration immédiate des salissures. Passes supplémentaires sur paliers, entrées et marches les plus sollicitées.</p>\n<p class="mt-4"><strong>3) Séchage & conseils :</strong> extraction maximale pour réduire l’humidité résiduelle, recommandations d’aération et fréquence (souvent 12–18 mois en zones très passantes).</p>\n',

      specificChallenges: [
        "Proximité gare et axes : particules fines et apports de salissures au niveau des entrées et seuils.",
        "<strong>Circulations étroites :</strong> organisation par zones et travail propre pour éviter d’encombrer les passages.",
        "<strong>Moquettes bouclées/épaisses :</strong> passes d’extraction supplémentaires pour retrouver la texture sans saturer le support.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes proches de la gare nécessitent-elles un entretien plus fréquent ?",
          answer:
            "<p><strong>Souvent oui.</strong> Les entrées et paliers exposés aux flux (gare/axes) se salissent plus vite. Après diagnostic, on recommande généralement un cycle plus court sur ces zones, tout en gardant un rythme plus espacé sur les étages moins sollicités.</p>",
        },
        {
          question:
            "Intervenez-vous aussi dans de petites copropriétés ou chez des particuliers ?",
          answer:
            "<p><strong>Oui.</strong> Nous intervenons en petites copropriétés comme en résidences plus importantes, et aussi à domicile lorsque la configuration s’y prête. Le protocole est ajusté au volume réel, aux accès et au type de moquette.</p>",
        },
        {
          question: "La méthode risque-t-elle d’abîmer une moquette ancienne ?",
          answer:
            "<p><strong>Non, si elle est réglée correctement.</strong> Pression, produit et volume d’eau sont adaptés au support. Un test préalable peut être réalisé sur une zone discrète pour valider la tenue des fibres avant traitement complet.</p>",
        },
        {
          question:
            "Les résidents peuvent-ils circuler pendant et après l’intervention ?",
          answer:
            "<p><strong>Oui, avec balisage.</strong> Les zones traitées sont sécurisées pendant l’intervention. Après séchage au toucher, la circulation redevient possible. Le syndic reçoit des consignes claires sur les délais et les zones concernées.</p>",
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
        "Un parking propre, lisible et non glissant améliore la sécurité et le confort de circulation, tout en valorisant durablement les résidences et immeubles du Raincy.",

      whyUsBullets: [
        "Organisation par secteurs : rotation possible, planning clair, balisage et circulation maintenue.",
        "Maîtrise autolaveuse + dégraissage : rampes, angles, zones de manœuvre traitées sans compromis.",
        "Gestion de l’eau : récupération/évacuation adaptée au réseau et aux contraintes du site.",
      ],

      uniqueIntro:
        '\n<p>Dans un parking, l’encrassement s’installe par couches : poussière noire, traces de pneus, taches d’huile et dépôts sur les pieds de murs. Au Raincy, la proximité des axes de circulation accentue ces résidus, surtout aux rampes et zones de manœuvre.</p>\n<p class="mt-4">Quand le sol devient terne et que les marquages perdent en lisibilité, l’impression de confinement augmente et des questions de sécurité apparaissent (glissance, visibilité). Un décrassage complet, bien coordonné, remet le parking au propre sans perturber inutilement les résidents.</p>\n',

      uniqueDeepDive:
        '\n<p><strong>1) Visite technique :</strong> repérage revêtement (béton/peinture/résine), évacuation des eaux, hauteur sous plafond, rampes et points sensibles. Planning transmis au syndic.</p>\n<p class="mt-4"><strong>2) Nettoyage structuré :</strong> balayage/dégagement, puis autolaveuse (brossage + aspiration). Dégraissage ciblé sur huiles et zones de freinage, traitement manuel des angles et bordures.</p>\n<p class="mt-4"><strong>3) Gestion de l’eau & finitions :</strong> récupération immédiate des eaux sales, évacuation via point conforme. Recommandation de fréquence selon rotation et niveau d’exposition.</p>\n',

      specificChallenges: [
        "Axes proches : <strong>dépôt de particules et résidus gras</strong>, encrassement accéléré des rampes.",
        "Sous-sols anciens : béton poreux, taches d’huile incrustées, évacuation parfois limitée.",
        "Organisation résidents : <strong>travail par secteurs</strong> pour limiter les déplacements et maintenir l’accessibilité.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi la poussière de parking devient-elle noire et grasse ?",
          answer:
            "<p><strong>Parce qu’elle mélange plusieurs résidus.</strong> Les particules de freinage, les micro-projections d’hydrocarbures et les traces de pneus se combinent et forment une couche adhérente, surtout sur les zones de manœuvre et de rampe.</p>",
        },
        {
          question: "Faut-il vider complètement le parking pour intervenir ?",
          answer:
            "<p><strong>Non, le travail par zones est souvent possible.</strong> On planifie secteur par secteur avec des consignes de déplacement temporaire. L’objectif est de nettoyer efficacement tout en maintenant un accès raisonnable aux résidents.</p>",
        },
        {
          question:
            "Les taches d’huile anciennes peuvent-elles disparaître totalement ?",
          answer:
            "<p><strong>Pas toujours, mais on peut beaucoup améliorer.</strong> Sur béton poreux, une trace ancienne peut rester légère. Le nettoyage supprime la pellicule grasse, améliore l’aspect et réduit le risque de glissance, avec des attentes fixées au diagnostic.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage si l’évacuation est limitée ?",
          answer:
            "<p><strong>Par récupération et évacuation contrôlée.</strong> L’autolaveuse aspire l’eau sale immédiatement. Si les siphons sont insuffisants, on privilégie la récupération et une évacuation vers un point conforme identifié lors de la visite.</p>",
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
        "Un balcon nettoyé en profondeur retrouve un aspect net et agréable, pour redevenir un vrai espace de vie — propre, utilisable et valorisant — dans les logements du Raincy.",

      whyUsBullets: [
        "Approche sur-mesure : carrelage, béton, dalles, joints et garde-corps traités avec méthode.",
        "Pression contrôlée : pas d’agressif sur joints, rinçage maîtrisé, finitions soignées.",
        "Gestion de l’eau : prévention des coulures, travail par zones, respect du voisinage.",
      ],

      uniqueIntro:
        '\n<p>Avec le temps, un balcon finit par se ternir : joints noircis, dépôts verts à l’ombre, poussière qui s’incruste, traces d’eau et salissures qui reviennent vite. Au Raincy, l’environnement arboré et la pollution des axes renforcent ces dépôts, surtout sur les angles et les zones peu exposées au soleil.</p>\n<p class="mt-4">Résultat : l’espace extérieur est moins agréable, on l’utilise moins, on y stocke plutôt qu’on en profite. Une remise en état professionnelle permet de réinvestir le balcon, de retrouver une surface propre et de repartir sur un entretien simple, sans risque pour les supports.</p>\n',

      uniqueDeepDive:
        '\n<p><strong>1) Protection & préparation :</strong> protection de la porte-fenêtre, déplacement/protection des plantes et mobilier, dégrossissage manuel (feuilles, terre, résidus).</p>\n<p class="mt-4"><strong>2) Nettoyage adapté :</strong> application d’un produit compatible support, brossage, traitement ciblé des joints, nettoyage garde-corps/vitreries/murs mitoyens, rinçage à pression douce et contrôlée.</p>\n<p class="mt-4"><strong>3) Gestion de l’eau & séchage :</strong> orientation vers l’évacuation, travail par petites surfaces pour éviter débordements, conseils de séchage et entretien léger régulier.</p>\n',

      specificChallenges: [
        "Dépôts verts et résines végétales : joints et angles plus difficiles à rattraper sans brossage ciblé.",
        "Balcons superposés : <strong>gestion stricte de l’eau</strong> pour éviter coulures chez les voisins du dessous.",
        "<strong>Supports hétérogènes :</strong> carrelage/dalles/garde-corps à traiter sans abîmer joints et finitions.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à la pression risque-t-il d’abîmer le carrelage ou les joints ?",
          answer:
            "<p><strong>Non, car la pression est contrôlée.</strong> Le résultat vient surtout du produit adapté et du brossage. Le rinçage reste modéré, et les joints fragiles sont traités à la main pour préserver l’intégrité du support.</p>",
        },
        {
          question:
            "L’eau peut-elle couler chez les voisins ou le long de la façade ?",
          answer:
            "<p><strong>On l’anticipe dès le départ.</strong> On repère l’évacuation, on travaille par petites zones et on tire l’eau vers le bon point. Si nécessaire, raclette et chiffons absorbants complètent pour éviter tout débordement.</p>",
        },
        {
          question:
            "Les produits sont-ils compatibles avec les plantes et les animaux ?",
          answer:
            "<p><strong>Oui, après rinçage.</strong> Les plantes sont déplacées/protégées, les produits sont choisis pour être compatibles avec un usage domestique, puis rincés soigneusement. Un délai de réutilisation est conseillé selon l’humidité résiduelle.</p>",
        },
        {
          question: "Quand peut-on réutiliser le balcon après l’intervention ?",
          answer:
            "<p><strong>Dès que c’est sec au toucher.</strong> Le délai dépend de l’exposition et de la ventilation, mais le balcon redevient généralement utilisable le jour même. Le technicien précise un délai réaliste selon le support et la météo.</p>",
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
        "Un balcon fortement souillé par des fientes redevient sain et utilisable après un nettoyage sécurisé et une désinfection contrôlée, avec des précautions strictes pour les occupants et le voisinage.",

      whyUsBullets: [
        "Sécurité sanitaire : EPI, humidification préalable, ramassage et conditionnement propres.",
        "Protocole complet : nettoyage + désinfection avec temps de contact respecté.",
        "Intervention maîtrisée : protection du logement, dispersion limitée, finitions propres.",
      ],

      // ✅ Tu as demandé de “reprendre ce point” : on remet exactement tes 2 paragraphes
      uniqueIntro:
        "\n<p>Au Raincy, les balcons d’immeubles situés à proximité des allées arborées, du parc du lycée Albert Schweitzer ou de combles non sécurisés sont parfois investis par des pigeons qui y nichent durablement. Avec le temps, leurs fientes s’accumulent et forment <strong>une couche compacte de résidus secs</strong>, générant des odeurs persistantes et rendant le balcon difficilement utilisable. Cette pollution organique peut également altérer les revêtements (carrelage, peinture, garde-corps) et favoriser la présence d’insectes ou de micro-organismes liés aux poussières de déjection.</p>\n<p class=\"mt-4\">Face à ce type de situation, une intervention amateur est souvent évitée en raison des contraintes sanitaires et du manque d’équipement adapté. Le traitement des balcons fortement souillés nécessite en effet <strong>un protocole rigoureux</strong> : enlèvement sécurisé des déjections, nettoyage en profondeur, désinfection contrôlée et remise en état des surfaces. Une intervention professionnelle permet de restaurer un balcon sain et fonctionnel, tout en limitant les risques et les nuisances pour les occupants comme pour le voisinage.</p>\n",

      uniqueDeepDive:
        '\n<p><strong>1) Sécurisation :</strong> EPI (combinaison, gants, masque respiratoire adapté, lunettes), protection de l’intérieur par bâches, réduction des projections et poussières.</p>\n<p class="mt-4"><strong>2) Enlèvement & nettoyage :</strong> humidification préalable des fientes sèches, ramassage manuel et conditionnement en sacs étanches, nettoyage des surfaces (sol, garde-corps, murs) avec produit adapté et rinçage contrôlé.</p>\n<p class="mt-4"><strong>3) Désinfection & remise en état :</strong> application d’un désinfectant homologué avec temps de contact respecté, rinçage si nécessaire, aération et délai avant réutilisation. Conseils possibles de dissuasion (pics/filets) selon configuration.</p>\n',

      specificChallenges: [
        "Fientes sèches : <strong>risque de poussières</strong>, humidification préalable indispensable avant enlèvement.",
        "Supports dégradés : joints et peintures pouvant être altérés, nettoyage sans agresser davantage.",
        "Voisinage : <strong>dispersion à éviter</strong>, travail propre, protection et gestion stricte des écoulements.",
      ],

      faqAdditions: [
        {
          question:
            "Faut-il vraiment un professionnel pour nettoyer des fientes importantes ?",
          answer:
            "<p><strong>Oui, dès qu’il y a accumulation.</strong> Le risque principal vient des poussières lors du grattage et du manque d’EPI adaptés. Un protocole pro limite la dispersion, sécurise l’enlèvement et inclut une désinfection contrôlée avec un résultat réutilisable.</p>",
        },
        {
          question:
            "Après désinfection, est-ce sans danger pour les occupants et les animaux ?",
          answer:
            "<p><strong>Oui, en respectant le protocole.</strong> Les produits sont appliqués avec temps de contact, puis les surfaces sont contrôlées et le balcon est aéré. Le technicien indique un délai réaliste avant réutilisation selon l’humidité et la ventilation.</p>",
        },
        {
          question:
            "Les fientes peuvent-elles abîmer le carrelage ou le garde-corps ?",
          answer:
            "<p><strong>Oui, avec le temps.</strong> Les dépôts peuvent ternir, encrasser les joints et attaquer certaines peintures. Le nettoyage stoppe l’aggravation et remet au propre, mais un support déjà altéré peut nécessiter ensuite une remise en peinture ou une reprise des joints.</p>",
        },
        {
          question:
            "Que faites-vous des déchets récupérés (fientes, nids, débris) ?",
          answer:
            "<p><strong>Ils sont évacués proprement.</strong> Les déchets sont conditionnés en sacs étanches fermés et sortis par nos équipes, sans laisser de résidus sur le balcon ni dans les parties communes.</p>",
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
        "Un canapé, un tapis ou un matelas nettoyé en profondeur retrouve une vraie fraîcheur et un confort plus sain, avec une méthode efficace sur les salissures du quotidien et les allergènes.",

      whyUsBullets: [
        "Diagnostic textile : adaptation à la fibre, à l’épaisseur et à la nature des taches.",
        "Injection-extraction performante : aspiration immédiate, réduction de l’humidité, séchage optimisé.",
        "Intervention à domicile : organisation simple, durée maîtrisée, conseils clairs de séchage.",
      ],

      uniqueIntro:
        '\n<p>Dans un logement, les textiles concentrent vite la vie quotidienne : canapés sollicités, tapis marqués, matelas exposés à la transpiration et aux poussières. Avec le temps, taches, odeurs et allergènes s’installent, même si l’on aspire régulièrement.</p>\n<p class="mt-4">Un nettoyage professionnel structuré permet d’extraire en profondeur les salissures fixées dans les fibres, d’améliorer l’hygiène ressentie et de retrouver un textile plus net, plus agréable et plus simple à entretenir au quotidien.</p>\n',

      uniqueDeepDive:
        '\n<p><strong>1) Diagnostic & pré-traitement :</strong> identification de la fibre (coton, laine, synthétique, velours, cuir) et des taches (graisse, vin, urine). Pré-traitement ciblé selon la nature organique ou grasse.</p>\n<p class="mt-4"><strong>2) Nettoyage par injection-extraction :</strong> injection d’une solution adaptée et aspiration immédiate des salissures. Travail par zones, passes croisées, attention aux contours et zones de contact (accoudoirs, assise, coutures).</p>\n<p class="mt-4"><strong>3) Séchage & consignes :</strong> extraction maximale, aération conseillée, délai réaliste avant réutilisation selon épaisseur. Conseils simples pour limiter la réapparition (aspiration, traitement des taches fraîches).</p>\n',

      specificChallenges: [
        "Taches organiques/odeurs : nécessité de pré-traitements enzymatiques et d’une extraction immédiate.",
        "Textiles fragiles (velours/laine) : réglages doux, tests localisés, contrôle de l’humidité.",
        "Séchage : <strong>pièces peu ventilées</strong> ou textiles épais, consignes strictes d’aération après intervention.",
      ],

      // ✅ Tu as fourni cette FAQ : je la remets telle quelle (sans modifier le fond)
      faqAdditions: [
        {
          question:
            "Le nettoyage permet-il vraiment d'éliminer les acariens et de réduire les allergies respiratoires ?",
          answer:
            "Oui, le nettoyage par injection-extraction élimine une grande partie des acariens présents dans les fibres du canapé, du tapis ou du matelas, ainsi que leurs déjections qui sont les principaux responsables des allergies respiratoires. L'eau chaude injectée sous pression décolle les allergènes fixés dans le textile, et l'aspiration puissante les extrait immédiatement avec les salissures. Cette méthode est nettement plus efficace qu'un simple aspirateur domestique qui ne traite que la surface. Toutefois, il est important de comprendre que les acariens se réinstallent progressivement avec le temps, car ils se nourrissent de peaux mortes naturellement produites par les occupants. Un nettoyage professionnel tous les 12 à 18 mois, combiné à une aération régulière et à l'utilisation de housses anti-acariens sur les matelas, permet de maintenir une charge allergénique basse et d'améliorer durablement la qualité de l'air intérieur.",
        },
        {
          question:
            "Les taches d'urine d'animaux et les odeurs tenaces peuvent-elles vraiment disparaître complètement ?",
          answer:
            "Les taches d'urine fraîches se traitent généralement très bien avec un pré-traitement enzymatique suivi d'un nettoyage par injection-extraction. Les enzymes décomposent les molécules organiques responsables de l'odeur et permettent leur extraction complète. En revanche, les urines anciennes qui ont pénétré en profondeur dans la mousse du canapé ou du matelas, voire atteint le bois de l'assise, sont plus difficiles à éliminer totalement. Le nettoyage atténue fortement l'odeur et élimine la quasi-totalité des résidus en surface, mais une imprégnation très ancienne peut laisser une légère odeur résiduelle. Dans ces cas, le technicien évalue honnêtement la situation lors du diagnostic et peut recommander, si nécessaire, le remplacement de la mousse interne ou un traitement complémentaire spécifique. L'objectif est de fixer des attentes réalistes tout en maximisant le résultat possible.",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir réutiliser le canapé ou marcher sur le tapis après le nettoyage ?",
          answer:
            "Le textile peut être légèrement sollicité dès que la surface est sèche au toucher, ce qui prend généralement entre 4 et 6 heures pour un canapé ou un tapis de salon, dans des conditions normales de ventilation et de température. Un matelas, plus épais, nécessite souvent 6 à 8 heures avant d'être parfaitement sec. Il est préférable d'attendre ce délai complet avant de s'asseoir longuement sur le canapé, de marcher pieds nus sur le tapis ou de refaire le lit sur le matelas, afin d'éviter toute réhumidification ou tassement des fibres encore humides. Le technicien conseille d'aérer la pièce pendant et après l'intervention, de maintenir une température ambiante stable et, si possible, de laisser un ventilateur en marche pour accélérer le séchage. En été ou dans une pièce bien ventilée, le séchage est généralement plus rapide qu'en hiver ou dans un logement peu aéré.",
        },
        {
          question:
            "Dois-je préparer quelque chose dans mon logement avant l'arrivée du technicien pour le nettoyage ?",
          answer:
            "La préparation est très simple et limitée. Pour un canapé, il suffit de retirer les coussins décoratifs, plaids et objets posés sur les accoudoirs ou l'assise, et de dégager un espace de circulation d'environ un mètre autour du canapé pour permettre au technicien de travailler confortablement avec son matériel. Pour un tapis, il faut simplement déplacer les meubles légers posés dessus (table basse, lampadaire, plantes) ou signaler au technicien ceux qui sont trop lourds pour qu'il adapte son intervention. Pour un matelas, il est nécessaire de retirer draps, alèse et couette, et de laisser le matelas accessible sur le sommier. Le technicien apporte tout le matériel nécessaire et ne demande qu'un accès à une prise électrique et, idéalement, à un point d'eau pour remplir la cuve de sa machine. Aucune autre préparation n'est requise, et l'intervention se déroule sans gêne majeure pour les occupants du logement.",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Décrassage soigné de votre terrasse en fonction du support, élimination des dépôts végétaux et traitement préventif pour conserver durablement la propreté obtenue.",
      whyUsBullets: [
        "Intervention sur l'ensemble des quartiers raincéens : Plateau, Centre-Mairie, Gare, Nicolas Carnot, Allées de Montfermeil et secteur Thiers.",
        "Protocole ajusté au patrimoine architectural local : terrasses des meulières Belle Époque, dallages des villas bourgeoises, revêtements des constructions plus récentes.",
        "Mise en sécurité systématique des abords : bâchage du mobilier extérieur, protection des massifs et plantations, évacuation contrôlée des eaux de rinçage.",
      ],
      uniqueIntro:
        "<p>Le Raincy, ancienne <strong>ville-parc</strong> née du lotissement d'un domaine princier au XIXe siècle, conserve un caractère résidentiel singulier en Seine-Saint-Denis. Des <strong>meulières bourgeoises</strong> du Plateau aux pavillons du quartier de la Gare, les terrasses témoignent de la diversité architecturale de cette commune souvent surnommée le « petit Neuilly du 93 ».</p>\n\n<p class=\"mt-4\">L'abondante végétation qui fait la réputation de la ville — arbres remarquables, jardins arborés, allées plantées héritées de l'ancien parc à l'anglaise — génère des conditions propices au développement des mousses et lichens sur les surfaces extérieures. L'ombre portée des grands arbres et l'humidité retenue par les feuillages accélèrent l'encrassement des <strong>dalles en pierre</strong>, <strong>béton</strong> ou <strong>carrelage</strong>.</p>\n\n<p class=\"mt-4\">Le diagnostic préalable identifie la nature du revêtement et son état pour déterminer le traitement approprié, qu'il s'agisse d'une terrasse ancienne aux joints fragiles ou d'un aménagement contemporain en grès cérame ou bois composite.</p>",
      uniqueDeepDive:
        "<h3>Évaluation et préparation du chantier</h3>\n<p>Mobilier de jardin, bacs à plantes et objets décoratifs sont déplacés ou bâchés. Les façades et menuiseries adjacentes sont protégées des éclaboussures. Un balayage préliminaire retire feuilles mortes, brindilles et débris organiques accumulés sur le revêtement.</p>\n\n<h3>Décrassage et action mécanique ciblée</h3>\n<p>Le produit de nettoyage est choisi selon le matériau : formule douce pour la pierre des meulières anciennes, solution alcaline pour béton et carrelage minéral, traitement neutre pour bois et composite. Le brossage mécanique déloge les incrustations. Le rinçage s'effectue à pression modérée pour préserver les joints et la texture du support.</p>\n\n<h3>Traitement préventif et recommandations</h3>\n<p>Une protection anti-mousse est appliquée sur les zones ombragées les plus exposées. L'évacuation des eaux est orientée vers les points d'écoulement du jardin. Des conseils d'entretien courant sont communiqués pour prolonger l'effet du nettoyage face à la végétation environnante.</p>",
      specificChallenges: [
        "Pierre et meulière des demeures bourgeoises fin XIXe-début XXe : <strong>matériaux poreux</strong> sensibles aux produits acides.",
        "Terrasses ombragées par les arbres centenaires des jardins raincéens : prolifération accélérée de mousses et algues vertes.",
        "Dallages anciens avec joints rocaillés typiques des meulières : <strong>interstices fragiles</strong> nécessitant un rinçage à basse pression.",
        "Carrelage grès cérame des aménagements récents : <strong>micro-reliefs antidérapants</strong> piégeant les salissures.",
        "Accès via allées privatives parfois étroites dans les propriétés du Plateau et de Nicolas Carnot.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les terrasses des meulières anciennes au Raincy sans abîmer la pierre ?",
          answer:
            "<p>Les meulières raincéennes présentent souvent des terrasses en pierre ou en dalles anciennes avec un jointoiement traditionnel. Nous utilisons un produit à pH neutre qui décolle les salissures biologiques sans attaquer le matériau. Le brossage manuel préserve le rocaillage des joints. Le rinçage à pression réduite évite toute dégradation du support.</p>",
        },
        {
          question:
            "Ma terrasse est très ombragée par les arbres du jardin et reverdit rapidement, que proposez-vous ?",
          answer:
            "<p>L'ombre des grands arbres, caractéristique des jardins du Raincy, favorise effectivement la repousse rapide des mousses. Après le nettoyage, nous appliquons un traitement préventif sur les zones concernées. Un balayage régulier des feuilles mortes et une nouvelle application annuelle permettent de maintenir le résultat malgré l'environnement végétal.</p>",
        },
        {
          question:
            "Intervenez-vous sur les terrasses des propriétés avec accès difficile dans le quartier du Plateau ?",
          answer:
            "<p>Les belles propriétés du Plateau présentent parfois des configurations avec allées étroites ou passages sous porche. Notre équipement portable permet d'intervenir sans difficulté. Le matériel est acheminé manuellement et les produits sont conditionnés pour un transport aisé jusqu'à la zone de travail.</p>",
        },
        {
          question:
            "Quelle est la différence entre un nettoyage haute pression standard et votre prestation sur un carrelage extérieur ?",
          answer:
            "<p>Le carrelage grès cérame texturé retient les dépôts dans ses reliefs antidérapants. Un simple jet haute pression déplace les salissures sans les éliminer en profondeur. Notre protocole associe un produit désincrustant adapté, un brossage mécanique sur les zones encrassées et un rinçage à pression calibrée qui nettoie efficacement les aspérités du revêtement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Remise en état avant état des lieux, après travaux ou déménagement, avec une priorité absolue sur la protection des sols (parquet massif, marbre), la discrétion, et des finitions nettes.",

      whyUsBullets: [
        "Ville-parc et habitat haut de gamme : méthode adaptée aux villas du Plateau et aux résidences de standing (protection sols, finitions).",
        "Organisation “centre commerçant” : accès et stationnement anticipés autour de l’Avenue de la Résistance et du Rond-Point de la Fontaine.",
        "Spécial vitrages & détails visibles : baies vitrées de villas, encadrements, traces basses liées au trafic local et aux flux pendulaires.",
      ],

      uniqueIntro:
        '<p>Au Raincy, le niveau d’exigence est souvent supérieur à la moyenne : villas, demeures de caractère et résidences de standing impliquent un nettoyage <strong>très maîtrisé</strong>, autant sur le résultat que sur la façon de travailler. Entre <strong>l’Avenue de la Résistance</strong> (cœur commerçant) et les rues plus calmes du <strong>Plateau</strong>, on retrouve des matériaux sensibles — parquet massif, carrelage marbré, menuiseries anciennes — où l’excès d’eau, les traces de reprise ou les produits mal adaptés se voient immédiatement.</p>\n<p class="mt-4">Klinova intervient au Raincy pour les remises en état avant état des lieux, après chantier (plâtre/peinture), ou lors d’un déménagement. L’approche reste simple : repérage des surfaces et des contraintes (digicode, gardien, stationnement), traitement des zones à fort impact (cuisine, salle d’eau, sols), puis finitions visibles. Dans une ville marquée par un patrimoine fort comme <strong>Notre-Dame du Raincy</strong>, beaucoup de logements conservent des détails architecturaux et des vitrages qui demandent une attention particulière.</p>\n<p class="mt-4">Le but est un rendu “propre au premier regard” sans abîmer : contrôle des traces sur sols, suppression des dépôts minéraux (calcaire), et reprise des zones de passage. <strong>Le périmètre de l’intervention est toujours défini avant l’intervention.</strong> C’est d’autant plus utile quand l’accès est contraint (centre-ville) ou quand la discrétion est une attente forte du voisinage (secteurs pavillonnaires).</p>',

      uniqueDeepDive:
        "<h3>Protection des sols et gestion du bâti “standing”</h3>\n<p>Au Raincy, la priorité est d’éviter toute dégradation : parquet massif, marbre, menuiseries anciennes, escaliers étroits. Nous adaptons l’humidité, les produits et l’ordre des tâches pour limiter les risques, et nous gardons une logique “protection d’abord” avant d’attaquer les zones techniques. Cette approche est particulièrement adaptée aux villas du Plateau et aux immeubles bourgeois du centre.</p>\n\n<h3>Cuisine / salle d’eau : calcaire, joints et finitions nettes</h3>\n<p>La cuisine et la salle de bain concentrent l’essentiel du contrôle en état des lieux. Nous effectuons un <strong>dégraissage cuisine</strong> ciblé (plans, crédences, façades accessibles selon l’état) et un <strong>détartrage sanitaires</strong> adapté au calcaire du secteur. Les joints de carrelage et zones d’écoulement sont traités avec méthode, en évitant les produits agressifs qui “marquent” les surfaces ou la robinetterie.</p>\n\n<h3>Vitrages, traces de circulation et contrôle final</h3>\n<p>Entre flux pendulaires (RER E) et trafic sur les axes locaux, les vitrages et rebords bas peuvent vite se charger en suie/poussière. Nous terminons par les vitres accessibles, encadrements et poignées, puis un contrôle des points visibles : plinthes, interrupteurs, portes, et sols dans les zones de passage. L’objectif : un rendu homogène, sans reprise apparente, prêt pour une visite ou un état des lieux.</p>",

      specificChallenges: [
        "Matériaux sensibles : <strong>parquet massif, carrelage marbré</strong>, finitions haut de gamme qui demandent une méthode douce et précise.",
        "Stationnement centre-ville : <strong>contraintes autour de l’Avenue de la Résistance</strong> et des rues adjacentes, surtout le samedi.",
        "Relief et logistique : <strong>secteurs en pente vers le Plateau</strong>, gestion du matériel et des accès en villas sécurisées.",
        "Exigence de discrétion : voisinage calme, attente forte sur le bruit, la propreté des circulations et la protection des sols.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous au Raincy pour une remise en état avant état des lieux (93340) ?",
          answer:
            "<p>Oui. Nous cadrons le périmètre (pièces, sols, vitrages accessibles) puis nous traitons les zones les plus contrôlées : cuisine, salle d’eau, sols et finitions visibles. Cela convient bien aux résidences de standing et aux maisons du Plateau.</p>",
        },
        {
          question:
            "Pouvez-vous nettoyer une maison avec parquet massif et surfaces “fragiles” (marbre, boiseries) ?",
          answer:
            "<p>Oui. Nous adaptons l’humidité et les produits pour préserver les matériaux, éviter les auréoles et obtenir un rendu net. La protection des sols fait partie du déroulé, surtout sur les parquets et carrelages marbrés.</p>",
        },
        {
          question:
            "Proposez-vous un nettoyage après travaux (plâtre/peinture) ?",
          answer:
            "<p>Oui. Après travaux, l’enjeu est la poussière fine. Nous structurons le dépoussiérage, puis la remise en état des surfaces, et nous finissons par les détails (plinthes, encadrements, vitrages accessibles) pour un rendu propre et stable.</p>",
        },
        {
          question:
            "Comment gérez-vous le stationnement et les accès en centre-ville ?",
          answer:
            "<p>Le centre peut être contraint (zones bleues/payant). Nous anticipons le créneau, l’accès (digicode, gardien) et l’organisation du matériel pour limiter la gêne, notamment autour de l’Avenue de la Résistance.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
