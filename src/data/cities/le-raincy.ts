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
  hubIntro: `
<p>Le Raincy se distingue par un parc immobilier résidentiel exigeant, où la qualité perçue des parties communes et des extérieurs compte au quotidien. KLINOVA accompagne syndics, conseils syndicaux, gestionnaires et occupants avec une approche rigoureuse, protocolisée et adaptée aux contraintes d’accès et d’occupation.</p>
<p class="mt-4">Autour de la gare Le Raincy – Villemomble – Montfermeil, avec un stationnement souvent réglementé et des immeubles aux circulations parfois étroites, chaque intervention commence par un diagnostic sur site, un planning clair et un suivi documenté, pour limiter la gêne et sécuriser le résultat.</p>
<ul>
  <li><strong>Accessibilité technique :</strong> organisation par zones, gestion des accès (Vigik / gardien), matériel adapté aux circulations étroites, balisage systématique.</li>
  <li><strong>Réactivité locale :</strong> déplacement gratuit pour devis sous 48h, créneaux coordonnés avec syndic/gardien, intervention d’urgence possible selon contexte.</li>
  <li><strong>Protocoles documentés :</strong> compte-rendu d’intervention, traçabilité des produits, recommandations d’entretien selon les supports.</li>
</ul>
`,

  citySpecificChallenges: [
    "Copropriétés résidentielles et allées arborées : apports de terre végétale, feuilles et dépôts verts sur les zones d’entrée.",
    "Proximité gare et axes routiers : particules fines et salissures de passage dans les circulations communes.",
    "Extérieurs exposés (garde-corps, dalles, joints) : noircissement progressif, mousses et résines végétales selon ombrage.",
    "Sous-sols et parkings anciens : béton poreux, traces d’hydrocarbures, ventilation parfois limitée et zones de manœuvre marquées.",
  ],

  // ✅ Quartiers (IRIS INSEE) — 6 au Raincy
  districts: ["Chatrian", "Hérôld", "Nicolas Carnot", "Thiellement", "Thiers", "Valère Lefebvre"],

  nearbyCities: [
  "neuilly-sur-marne",
  "gagny",
  "montfermeil",
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
      question: "Intervenez-vous rapidement au Raincy malgré les contraintes de circulation autour de la gare ?",
      answer:
        `<p><strong>Oui, avec une planification réaliste.</strong> Nous privilégions des créneaux adaptés aux flux autour de la gare Le Raincy – Villemomble – Montfermeil et aux règles de stationnement, avec du matériel compact pour intervenir proprement sans bloquer les circulations.</p>`,
    },
    {
      question: "Comment gérez-vous l’accès aux parties communes sécurisées (badge Vigik, gardien, interphone) ?",
      answer:
        `<p><strong>Accès coordonné et sécurisé.</strong> Selon la résidence, l’accès est organisé via Vigik professionnel, gardien ou remise de clés, avec des horaires validés en amont. Les interventions sont balisées et le technicien est identifiable, pour une circulation maîtrisée dans l’immeuble.</p>`,
    },
    {
      question: "Le déplacement pour établir un devis est-il facturé pour une copropriété située au Raincy ?",
      answer:
        `<p><strong>Non.</strong> Le diagnostic sur site est réalisé sans frais : surfaces, contraintes d’accès, état des supports (textiles, sols, sous-sols, extérieurs) et organisation. Le devis est ensuite transmis sous 48 à 72 heures, sur la base des éléments constatés.</p>`,
    },
    {
      question: "Pouvez-vous intervenir en urgence après un dégât des eaux ou une zone fortement souillée ?",
      answer:
        `<p><strong>Oui, selon la situation.</strong> En cas de sinistre ou de souillure accidentelle, nous pouvons mobiliser une équipe sous 24 à 48 heures pour une remise en état, avec un protocole clair (sécurisation, traitement, séchage si nécessaire) et un reporting utile au syndic.</p>`,
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

      uniqueIntro: `
<p>Les moquettes de parties communes se salissent progressivement : poussières fines, traces de passage, zones tassées dans les escaliers, ternissement dans les halls. Au Raincy, la proximité des axes et de la gare accentue les apports de particules et la fréquence de passage, surtout aux entrées.</p>
<p class="mt-4">Sur une moquette bouclée ou plus épaisse, la salissure s’installe dans la fibre et l’aspiration classique ne suffit plus. Un nettoyage professionnel structuré permet de retrouver une propreté visible, d’assainir la fibre et de prolonger la durée de vie du revêtement, sans perturber les occupants.</p>
`,

      uniqueDeepDive: `
<p><strong>1) Diagnostic & préparation :</strong> repérage du type de moquette, des taches et des zones de trafic, puis protections (bas de murs), balisage et organisation par étage/cage pour limiter la gêne.</p>
<p class="mt-4"><strong>2) Injection-extraction :</strong> produit adapté à la fibre, injection sous pression modérée et aspiration immédiate des salissures. Passes supplémentaires sur paliers, entrées et marches les plus sollicitées.</p>
<p class="mt-4"><strong>3) Séchage & conseils :</strong> extraction maximale pour réduire l’humidité résiduelle, recommandations d’aération et fréquence (souvent 12–18 mois en zones très passantes).</p>
`,

      specificChallenges: [
        "Proximité gare et axes : particules fines et apports de salissures au niveau des entrées et seuils.",
        "Circulations étroites : organisation par zones et travail propre pour éviter d’encombrer les passages.",
        "Moquettes bouclées/épaisses : passes d’extraction supplémentaires pour retrouver la texture sans saturer le support.",
      ],

      faqAdditions: [
        {
          question: "Les moquettes proches de la gare nécessitent-elles un entretien plus fréquent ?",
          answer:
            `<p><strong>Souvent oui.</strong> Les entrées et paliers exposés aux flux (gare/axes) se salissent plus vite. Après diagnostic, on recommande généralement un cycle plus court sur ces zones, tout en gardant un rythme plus espacé sur les étages moins sollicités.</p>`,
        },
        {
          question: "Intervenez-vous aussi dans de petites copropriétés ou chez des particuliers ?",
          answer:
            `<p><strong>Oui.</strong> Nous intervenons en petites copropriétés comme en résidences plus importantes, et aussi à domicile lorsque la configuration s’y prête. Le protocole est ajusté au volume réel, aux accès et au type de moquette.</p>`,
        },
        {
          question: "La méthode risque-t-elle d’abîmer une moquette ancienne ?",
          answer:
            `<p><strong>Non, si elle est réglée correctement.</strong> Pression, produit et volume d’eau sont adaptés au support. Un test préalable peut être réalisé sur une zone discrète pour valider la tenue des fibres avant traitement complet.</p>`,
        },
        {
          question: "Les résidents peuvent-ils circuler pendant et après l’intervention ?",
          answer:
            `<p><strong>Oui, avec balisage.</strong> Les zones traitées sont sécurisées pendant l’intervention. Après séchage au toucher, la circulation redevient possible. Le syndic reçoit des consignes claires sur les délais et les zones concernées.</p>`,
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

      uniqueIntro: `
<p>Dans un parking, l’encrassement s’installe par couches : poussière noire, traces de pneus, taches d’huile et dépôts sur les pieds de murs. Au Raincy, la proximité des axes de circulation accentue ces résidus, surtout aux rampes et zones de manœuvre.</p>
<p class="mt-4">Quand le sol devient terne et que les marquages perdent en lisibilité, l’impression de confinement augmente et des questions de sécurité apparaissent (glissance, visibilité). Un décrassage complet, bien coordonné, remet le parking au propre sans perturber inutilement les résidents.</p>
`,

      uniqueDeepDive: `
<p><strong>1) Visite technique :</strong> repérage revêtement (béton/peinture/résine), évacuation des eaux, hauteur sous plafond, rampes et points sensibles. Planning transmis au syndic.</p>
<p class="mt-4"><strong>2) Nettoyage structuré :</strong> balayage/dégagement, puis autolaveuse (brossage + aspiration). Dégraissage ciblé sur huiles et zones de freinage, traitement manuel des angles et bordures.</p>
<p class="mt-4"><strong>3) Gestion de l’eau & finitions :</strong> récupération immédiate des eaux sales, évacuation via point conforme. Recommandation de fréquence selon rotation et niveau d’exposition.</p>
`,

      specificChallenges: [
        "Axes proches : dépôt de particules et résidus gras, encrassement accéléré des rampes.",
        "Sous-sols anciens : béton poreux, taches d’huile incrustées, évacuation parfois limitée.",
        "Organisation résidents : travail par secteurs pour limiter les déplacements et maintenir l’accessibilité.",
      ],

      faqAdditions: [
        {
          question: "Pourquoi la poussière de parking devient-elle noire et grasse ?",
          answer:
            `<p><strong>Parce qu’elle mélange plusieurs résidus.</strong> Les particules de freinage, les micro-projections d’hydrocarbures et les traces de pneus se combinent et forment une couche adhérente, surtout sur les zones de manœuvre et de rampe.</p>`,
        },
        {
          question: "Faut-il vider complètement le parking pour intervenir ?",
          answer:
            `<p><strong>Non, le travail par zones est souvent possible.</strong> On planifie secteur par secteur avec des consignes de déplacement temporaire. L’objectif est de nettoyer efficacement tout en maintenant un accès raisonnable aux résidents.</p>`,
        },
        {
          question: "Les taches d’huile anciennes peuvent-elles disparaître totalement ?",
          answer:
            `<p><strong>Pas toujours, mais on peut beaucoup améliorer.</strong> Sur béton poreux, une trace ancienne peut rester légère. Le nettoyage supprime la pellicule grasse, améliore l’aspect et réduit le risque de glissance, avec des attentes fixées au diagnostic.</p>`,
        },
        {
          question: "Comment gérez-vous les eaux de lavage si l’évacuation est limitée ?",
          answer:
            `<p><strong>Par récupération et évacuation contrôlée.</strong> L’autolaveuse aspire l’eau sale immédiatement. Si les siphons sont insuffisants, on privilégie la récupération et une évacuation vers un point conforme identifié lors de la visite.</p>`,
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

      uniqueIntro: `
<p>Avec le temps, un balcon finit par se ternir : joints noircis, dépôts verts à l’ombre, poussière qui s’incruste, traces d’eau et salissures qui reviennent vite. Au Raincy, l’environnement arboré et la pollution des axes renforcent ces dépôts, surtout sur les angles et les zones peu exposées au soleil.</p>
<p class="mt-4">Résultat : l’espace extérieur est moins agréable, on l’utilise moins, on y stocke plutôt qu’on en profite. Une remise en état professionnelle permet de réinvestir le balcon, de retrouver une surface propre et de repartir sur un entretien simple, sans risque pour les supports.</p>
`,

      uniqueDeepDive: `
<p><strong>1) Protection & préparation :</strong> protection de la porte-fenêtre, déplacement/protection des plantes et mobilier, dégrossissage manuel (feuilles, terre, résidus).</p>
<p class="mt-4"><strong>2) Nettoyage adapté :</strong> application d’un produit compatible support, brossage, traitement ciblé des joints, nettoyage garde-corps/vitreries/murs mitoyens, rinçage à pression douce et contrôlée.</p>
<p class="mt-4"><strong>3) Gestion de l’eau & séchage :</strong> orientation vers l’évacuation, travail par petites surfaces pour éviter débordements, conseils de séchage et entretien léger régulier.</p>
`,

      specificChallenges: [
        "Dépôts verts et résines végétales : joints et angles plus difficiles à rattraper sans brossage ciblé.",
        "Balcons superposés : gestion stricte de l’eau pour éviter coulures chez les voisins du dessous.",
        "Supports hétérogènes : carrelage/dalles/garde-corps à traiter sans abîmer joints et finitions.",
      ],

      faqAdditions: [
        {
          question: "Le nettoyage à la pression risque-t-il d’abîmer le carrelage ou les joints ?",
          answer:
            `<p><strong>Non, car la pression est contrôlée.</strong> Le résultat vient surtout du produit adapté et du brossage. Le rinçage reste modéré, et les joints fragiles sont traités à la main pour préserver l’intégrité du support.</p>`,
        },
        {
          question: "L’eau peut-elle couler chez les voisins ou le long de la façade ?",
          answer:
            `<p><strong>On l’anticipe dès le départ.</strong> On repère l’évacuation, on travaille par petites zones et on tire l’eau vers le bon point. Si nécessaire, raclette et chiffons absorbants complètent pour éviter tout débordement.</p>`,
        },
        {
          question: "Les produits sont-ils compatibles avec les plantes et les animaux ?",
          answer:
            `<p><strong>Oui, après rinçage.</strong> Les plantes sont déplacées/protégées, les produits sont choisis pour être compatibles avec un usage domestique, puis rincés soigneusement. Un délai de réutilisation est conseillé selon l’humidité résiduelle.</p>`,
        },
        {
          question: "Quand peut-on réutiliser le balcon après l’intervention ?",
          answer:
            `<p><strong>Dès que c’est sec au toucher.</strong> Le délai dépend de l’exposition et de la ventilation, mais le balcon redevient généralement utilisable le jour même. Le technicien précise un délai réaliste selon le support et la météo.</p>`,
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
      uniqueIntro: `
<p>Au Raincy, les balcons d’immeubles situés à proximité des allées arborées, du parc du lycée Albert Schweitzer ou de combles non sécurisés sont parfois investis par des pigeons qui y nichent durablement. Avec le temps, leurs fientes s’accumulent et forment une couche compacte de résidus secs, générant des odeurs persistantes et rendant le balcon difficilement utilisable. Cette pollution organique peut également altérer les revêtements (carrelage, peinture, garde-corps) et favoriser la présence d’insectes ou de micro-organismes liés aux poussières de déjection.</p>
<p class="mt-4">Face à ce type de situation, une intervention amateur est souvent évitée en raison des contraintes sanitaires et du manque d’équipement adapté. Le traitement des balcons fortement souillés nécessite en effet un protocole rigoureux : enlèvement sécurisé des déjections, nettoyage en profondeur, désinfection contrôlée et remise en état des surfaces. Une intervention professionnelle permet de restaurer un balcon sain et fonctionnel, tout en limitant les risques et les nuisances pour les occupants comme pour le voisinage.</p>
`,

      uniqueDeepDive: `
<p><strong>1) Sécurisation :</strong> EPI (combinaison, gants, masque respiratoire adapté, lunettes), protection de l’intérieur par bâches, réduction des projections et poussières.</p>
<p class="mt-4"><strong>2) Enlèvement & nettoyage :</strong> humidification préalable des fientes sèches, ramassage manuel et conditionnement en sacs étanches, nettoyage des surfaces (sol, garde-corps, murs) avec produit adapté et rinçage contrôlé.</p>
<p class="mt-4"><strong>3) Désinfection & remise en état :</strong> application d’un désinfectant homologué avec temps de contact respecté, rinçage si nécessaire, aération et délai avant réutilisation. Conseils possibles de dissuasion (pics/filets) selon configuration.</p>
`,

      specificChallenges: [
        "Fientes sèches : risque de poussières, humidification préalable indispensable avant enlèvement.",
        "Supports dégradés : joints et peintures pouvant être altérés, nettoyage sans agresser davantage.",
        "Voisinage : dispersion à éviter, travail propre, protection et gestion stricte des écoulements.",
      ],

      faqAdditions: [
        {
          question: "Faut-il vraiment un professionnel pour nettoyer des fientes importantes ?",
          answer:
            `<p><strong>Oui, dès qu’il y a accumulation.</strong> Le risque principal vient des poussières lors du grattage et du manque d’EPI adaptés. Un protocole pro limite la dispersion, sécurise l’enlèvement et inclut une désinfection contrôlée avec un résultat réutilisable.</p>`,
        },
        {
          question: "Après désinfection, est-ce sans danger pour les occupants et les animaux ?",
          answer:
            `<p><strong>Oui, en respectant le protocole.</strong> Les produits sont appliqués avec temps de contact, puis les surfaces sont contrôlées et le balcon est aéré. Le technicien indique un délai réaliste avant réutilisation selon l’humidité et la ventilation.</p>`,
        },
        {
          question: "Les fientes peuvent-elles abîmer le carrelage ou le garde-corps ?",
          answer:
            `<p><strong>Oui, avec le temps.</strong> Les dépôts peuvent ternir, encrasser les joints et attaquer certaines peintures. Le nettoyage stoppe l’aggravation et remet au propre, mais un support déjà altéré peut nécessiter ensuite une remise en peinture ou une reprise des joints.</p>`,
        },
        {
          question: "Que faites-vous des déchets récupérés (fientes, nids, débris) ?",
          answer:
            `<p><strong>Ils sont évacués proprement.</strong> Les déchets sont conditionnés en sacs étanches fermés et sortis par nos équipes, sans laisser de résidus sur le balcon ni dans les parties communes.</p>`,
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

      uniqueIntro: `
<p>Dans un logement, les textiles concentrent vite la vie quotidienne : canapés sollicités, tapis marqués, matelas exposés à la transpiration et aux poussières. Avec le temps, taches, odeurs et allergènes s’installent, même si l’on aspire régulièrement.</p>
<p class="mt-4">Un nettoyage professionnel structuré permet d’extraire en profondeur les salissures fixées dans les fibres, d’améliorer l’hygiène ressentie et de retrouver un textile plus net, plus agréable et plus simple à entretenir au quotidien.</p>
`,

      uniqueDeepDive: `
<p><strong>1) Diagnostic & pré-traitement :</strong> identification de la fibre (coton, laine, synthétique, velours, cuir) et des taches (graisse, vin, urine). Pré-traitement ciblé selon la nature organique ou grasse.</p>
<p class="mt-4"><strong>2) Nettoyage par injection-extraction :</strong> injection d’une solution adaptée et aspiration immédiate des salissures. Travail par zones, passes croisées, attention aux contours et zones de contact (accoudoirs, assise, coutures).</p>
<p class="mt-4"><strong>3) Séchage & consignes :</strong> extraction maximale, aération conseillée, délai réaliste avant réutilisation selon épaisseur. Conseils simples pour limiter la réapparition (aspiration, traitement des taches fraîches).</p>
`,

      specificChallenges: [
        "Taches organiques/odeurs : nécessité de pré-traitements enzymatiques et d’une extraction immédiate.",
        "Textiles fragiles (velours/laine) : réglages doux, tests localisés, contrôle de l’humidité.",
        "Séchage : pièces peu ventilées ou textiles épais, consignes strictes d’aération après intervention.",
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
  ],
};

export default city;
