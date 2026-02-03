import type { City } from "~/types/geo";

const city: City = {
  name: "Bondy",
  slug: "bondy",
  postalCodes: ["93140"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Bondy. Une équipe réactive, des interventions coordonnées entre la gare RER E et les quartiers résidentiels, pour une propreté durable adaptée au tissu urbain local.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro:
    "<p>Au carrefour du RER E et du Tram T4, proche de l'Hôpital Jean Verdier, Bondy concentre des besoins variés en propreté. Klinova s'y positionne comme partenaire terrain, capable d'intervenir aussi bien dans les résidences que sur les espaces techniques ou extérieurs.</p>\n\n<p class=\"mt-4\">Notre approche repose sur une organisation claire : planification des passages, adaptation aux contraintes d'accès, suivi régulier. Chaque intervention fait l'objet d'un compte-rendu si demandé, pour une traçabilité complète auprès des gestionnaires ou occupants.</p>\n\n<ul>\n  <li><strong>Coordination locale :</strong> Nos équipes connaissent les spécificités du secteur gare et des quartiers nord, ce qui permet d'anticiper les difficultés de stationnement et d'accès.</li>\n  <li><strong>Polyvalence des prestations :</strong> Parties communes, parkings souterrains, balcons ou mobilier intérieur : un seul interlocuteur pour centraliser vos demandes.</li>\n  <li><strong>Réactivité adaptée :</strong> Intervention sous 48 à 72h selon disponibilité, avec créneaux décalés possibles pour limiter la gêne des occupants.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution routière A3/N3</strong> : dépôts noirs récurrents sur balcons et façades exposées.",
    "Halls d'immeubles à fort passage près de la <strong>gare RER E</strong>, salissures quotidiennes.",
    "Parkings souterrains anciens avec <strong>rampes étroites</strong> et ventilation limitée.",
    "Quartiers pavillonnaires sud : terrasses soumises aux <strong>mousses et lichens</strong> en zone ombragée.",
    "Résidences récentes Rives de l'Ourcq : <strong>dalles sur plots</strong> nécessitant un nettoyage adapté.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Quartier de la Gare",
    "Le Mainguy",
    "La Noue Caillet",
    "Terre-Saint-Blaise",
    "Les Merisiers",
    "Quartier du Canal / Rives de l'Ourcq",
  ],
  nearbyCities: [
        "noisy-le-sec",
        "villemomble",
        "le-raincy",
        "bobigny",
        "rosny-sous-bois",
        "romainville",
        "livry-gargan",
        "neuilly-plaisance",
        "gagny",
        "montreuil"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Bondy",
    "Gare de Bondy",
    "Hôpital Jean Verdier",
    "Canal de l'Ourcq (Rives de l'Ourcq)",
    "Pont de Bondy",
    "Bois de Bondy",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les quartiers où le stationnement est compliqué ?",
      answer:
        "<p>Nous repérons en amont les <strong>zones de stationnement autorisées</strong> et privilégions les créneaux matinaux avant saturation. En centre-ville de Bondy ou près de la gare, nos équipes utilisent du matériel compact pour limiter l'encombrement et accélérer la mise en place.</p>",
    },
    {
      question: "Pouvez-vous intervenir rapidement en cas de besoin urgent ?",
      answer:
        "<p>Selon la nature de la demande et notre planning, nous proposons des <strong>créneaux sous 24 à 48h</strong> pour les situations prioritaires. Un premier échange téléphonique permet d'évaluer l'urgence et de confirmer la faisabilité d'une intervention rapide sur Bondy.</p>",
    },
    {
      question:
        "Comment se passe la coordination avec un syndic ou un gestionnaire ?",
      answer:
        "<p>Nous établissons un <strong>contact direct avec le référent désigné</strong> : transmission des dates d'intervention, accès aux parties communes, remontée d'informations après passage. Un reporting écrit peut être fourni si le gestionnaire le souhaite, pour assurer un suivi clair.</p>",
    },
    {
      question:
        "Intervenez-vous aussi bien dans les immeubles collectifs que dans les pavillons ?",
      answer:
        "<p>Oui. À Bondy, nous traitons aussi bien les <strong>résidences des quartiers nord</strong> que les maisons individuelles du secteur sud. Chaque configuration implique des contraintes différentes — accès, surface, matériaux — que nous intégrons dès la préparation du chantier.</p>",
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
  // => Le template doit rester avec services: [].
  // => Le FORMAT ONLY injecte uniquement les services présents dans l’entrée (bundle/plan/servicesRequested).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des configurations de bureaux et halls du secteur Gallieni, avec adaptation aux accès parfois contraints.",
        "Matériel d'injection-extraction professionnel calibré selon l'épaisseur et la densité des fibres traitées.",
        "Interventions planifiées en dehors des heures d'affluence pour limiter la gêne et accélérer la remise en service.",
      ],
      uniqueIntro:
        "<p>Dans les locaux professionnels bordant l'<strong>Avenue Gallieni</strong>, les moquettes absorbent quotidiennement poussières fines et résidus de semelles. Le passage répété des visiteurs et collaborateurs laisse des traces grises sur les zones de circulation, particulièrement aux entrées et devant les postes d'accueil. Ces dépôts s'accumulent dans les fibres sans que l'aspirateur classique puisse les déloger.</p>\n\n<p class=\"mt-4\">Les <strong>bureaux administratifs et cabinets médicaux</strong> du secteur Jean Verdier ou du centre-ville présentent souvent des moquettes en dalles textiles ou velours ras. Ces revêtements, choisis pour leur confort acoustique, retiennent aussi les taches de café, les auréoles et les odeurs si l'entretien reste superficiel. Un traitement adapté redonne un aspect uniforme et supprime les zones ternies qui nuisent à l'image professionnelle.</p>\n\n<p class=\"mt-4\">Face à la <strong>fréquentation piétonne soutenue</strong> autour des axes commerçants, une intervention structurée permet de traiter chaque zone selon son niveau d'encrassement. Diagnostic préalable, protection des éléments fixes et extraction contrôlée garantissent un résultat durable sans perturber l'activité.</p>",
      uniqueDeepDive:
        "<h3>Zones de passage intensif</h3>\n<p>Les entrées, couloirs et espaces d'accueil concentrent l'essentiel des salissures. Après identification du type de fibre, nous appliquons un pré-détachant sur les traces marquées avant injection-extraction. Les passes sont multipliées sur ces surfaces à fort piétinement pour désincruster les particules en profondeur.</p>\n\n<h3>Espaces de travail et bureaux</h3>\n<p>Les dalles textiles sous les postes de travail reçoivent un traitement ciblé. Protection des plinthes et pieds de mobilier, puis extraction méthodique rangée par rangée. Les taches localisées font l'objet d'un détachage spécifique selon leur nature.</p>\n\n<h3>Halls et parties communes</h3>\n<p>Dans les petits collectifs du centre-ville, les escaliers et paliers nécessitent une approche adaptée aux contraintes d'espace. Aspiration préalable des fibres, injection de solution nettoyante, puis extraction maximale pour réduire le temps de séchage. Balisage temporaire si le passage doit être maintenu pendant l'intervention.</p>",
      specificChallenges: [
        "Poussières urbaines liées au trafic de l'Avenue Gallieni, incrustées dans les fibres des halls d'entrée.",
        "Dalles textiles des bureaux administratifs soumises à un piétinement quotidien concentré sur les mêmes zones.",
        "Escaliers étroits dans les immeubles anciens du centre-ville, nécessitant un matériel compact.",
        "Stationnement limité à proximité des locaux professionnels, imposant une logistique anticipée.",
        "Temps de séchage à maîtriser pour permettre une reprise d'activité sous 24 heures.",
      ],
      faqAdditions: [
        {
          question:
            "Avec les escaliers étroits du centre-ville, comment organisez-vous le passage du matériel pour shampouinage de moquette ?",
          answer:
            "<p>Nous utilisons des équipements compacts et modulables, transportables par sections. Le repérage préalable des accès permet d'anticiper les manœuvres. Si nécessaire, nous intervenons en binôme pour faciliter la montée du matériel sans abîmer les murs ni les rampes.</p>",
        },
        {
          question:
            "Après un nettoyage en profondeur d'une moquette de bureau sur l'Avenue Gallieni, combien de temps avant remise en service ?",
          answer:
            "<p>Le séchage dépend de l'épaisseur des fibres et de la ventilation du local. En général, comptez entre 4 et 8 heures pour un passage léger, 12 à 24 heures pour une utilisation normale. Nous optimisons l'extraction pour réduire ce délai au maximum.</p>",
        },
        {
          question:
            "Comment protégez-vous plinthes et angles lors d'un décapage ou shampouinage sur les moquettes de halls rénovés ?",
          answer:
            "<p>Des protections plastifiées sont posées le long des plinthes et bas de murs avant toute injection. Les angles et jonctions avec d'autres revêtements sont isolés pour éviter les projections. Cette précaution préserve les finitions et évite les traces d'humidité sur les surfaces adjacentes.</p>",
        },
        {
          question:
            "Si le stationnement est compliqué près de la Mairie, comment planifiez-vous la livraison et le rangement du matériel ?",
          answer:
            "<p>Nous identifions à l'avance les possibilités de dépose rapide ou les emplacements autorisés à proximité. Le matériel est préparé pour un déchargement efficace. Si besoin, nous coordonnons avec le gestionnaire du site pour réserver un accès temporaire le temps de l'installation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et gestion stricte des eaux de lavage, balisage sécurisé et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès sur les parkings proches des axes routiers bondynois et des zones de stationnement saturées.",
        "Autolaveuse adaptée aux surfaces béton et enrobé, gestion rigoureuse des eaux de lavage conformément aux évacuations existantes.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro:
        "<p>Les traces noires sur les sols de parking se repèrent vite : coulures d'huile près des places, dépôts gras le long des rampes, poussière accumulée dans les angles. <strong>À proximité de l'A3</strong>, les parkings de transit subissent un encrassement accéléré par les particules automobiles et la suie des poids lourds qui circulent quotidiennement sur cet axe.</p>\n\n<p class=\"mt-4\">Un sol de parking dégradé complique la circulation des véhicules et donne une impression de négligence aux copropriétaires ou aux clients. Les <strong>parkings souterrains de résidences récentes</strong> comme les aériens de zones commerciales présentent des revêtements béton ou enrobé qui retiennent les salissures si l'entretien n'est pas régulier. Les syndics reçoivent alors des signalements sur l'état des parties communes.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de traiter l'ensemble des surfaces sans perturber l'accès aux véhicules. Le <strong>trafic routier élevé et les flux de livraison</strong> génèrent un encrassement constant : la gestion des eaux de lavage et la coordination des horaires deviennent des points clés pour mener le chantier efficacement.</p>",
      uniqueDeepDive:
        "<h3>Sol décrassé et circulation rétablie</h3>\n<p>L'objectif est de retrouver un revêtement propre, débarrassé des taches d'huile et des dépôts gras, avec des marquages au sol à nouveau lisibles. Pour y parvenir, nous commençons par un diagnostic du revêtement et de l'état des évacuations.</p>\n\n<p class=\"mt-4\">Un balayage préalable élimine les débris et poussières avant le passage de l'autolaveuse ou du nettoyeur haute pression avec dégraissant adapté.</p>\n\n<h3>Traitement ciblé des zones critiques</h3>\n<p>Les rampes d'accès reçoivent un traitement antidérapant, les angles morts et pieds de murs sont décrassés manuellement. Les rigoles sont dégagées pour garantir l'écoulement correct des eaux.</p>\n\n<p class=\"mt-4\">Le balisage sécurisé et la signalétique temporaire protègent les usagers pendant toute la durée du chantier.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont récupérées et évacuées dans le respect des points de rejet autorisés. Un dépoussiérage aérien des blocs lumineux ou tuyauteries peut compléter l'intervention si demandé.</p>\n\n<p class=\"mt-4\">Nous transmettons ensuite une recommandation de fréquence adaptée au trafic constaté.</p>",
      specificChallenges: [
        "Dépôts de suie et particules automobiles sur les parkings exposés au trafic de l'A3.",
        "Taches d'huile anciennes incrustées dans le béton brut des souterrains de copropriété.",
        "Gestion des eaux de lavage à organiser selon les évacuations disponibles sur site.",
        "Rotation des véhicules à coordonner avec le syndic pour libérer les zones par secteur.",
        "Rampes d'accès glissantes nécessitant un traitement antidérapant après décrassage.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un parking proche de l'A3, quelles contraintes d'organisation et d'horaires recommandez-vous pour intervenir sans gêner le trafic ?",
          answer:
            "<p>Nous définissons un zonage par secteur avec le syndic ou le gestionnaire. Les résidents sont informés en amont pour déplacer leur véhicule sur les emplacements libérés. Le balisage sécurisé délimite la zone en cours de traitement et permet de maintenir une circulation partielle pendant l'intervention.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'huile incrustées sur un sol de parking exposé au trafic routier intense ?",
          answer:
            "<p>Les taches récentes partent généralement au premier passage avec dégraissant et autolaveuse. Les taches anciennes incrustées nécessitent parfois plusieurs passes ou un traitement localisé plus concentré. Le résultat dépend de l'ancienneté et de la porosité du revêtement, mais l'aspect général est nettement amélioré.</p>",
        },
        {
          question:
            "Quelle méthode et quel traitement des eaux de lavage préconisez-vous pour un parking de copropriété à Bondy ?",
          answer:
            "<p>Nous vérifions d'abord l'état des regards et rigoles pour identifier les points d'évacuation autorisés. Les eaux chargées sont dirigées vers ces évacuations ou récupérées si nécessaire. Aucun rejet sauvage n'est effectué : la gestion des eaux fait partie intégrante du protocole.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous un entretien de balayage mécanique sur un parking près d'Avenue Gallieni ?",
          answer:
            "<p>Pour un parking à fort trafic, un décrassage complet tous les trois à six mois limite l'accumulation de salissures et préserve l'état du revêtement. Entre deux interventions, un balayage mécanique mensuel peut suffire à maintenir un niveau de propreté acceptable selon le flux constaté.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement des dépôts incrustés, protection des menuiseries et gestion maîtrisée des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons côté canal, façades sur axes passants, vis-à-vis fréquents.",
        "Pression ajustée selon le support, brossage manuel sur joints fragiles, produits non agressifs.",
        "Protection systématique du voisinage, gestion des eaux maîtrisée, intervention discrète en journée.",
      ],
      uniqueIntro:
        "<p>Dans le secteur des <strong>Rives de l'Ourcq</strong>, les balcons et loggias des résidences récentes accumulent rapidement poussières de chantier, traces de pollution et dépôts organiques portés par le vent. Les occupants constatent souvent un voile grisâtre sur le carrelage, des joints qui verdissent, un garde-corps qui colle sous les doigts. L'espace extérieur perd son attrait, on hésite à y installer table ou plantes.</p>\n\n<p class=\"mt-4\">Retrouver un balcon propre, c'est récupérer ces quelques mètres carrés de respiration. Les <strong>balcons en béton ou carrelage</strong>, fréquents dans les petits collectifs et programmes neufs, supportent bien un traitement adapté. Le sol redevient agréable pieds nus, le mobilier ne se salit plus au contact, les vitres du garde-corps laissent passer la lumière sans filtre de crasse.</p>\n\n<p class=\"mt-4\">Notre intervention commence par un diagnostic du support et de l'exposition. Nous identifions les zones sensibles — joints fragiles, évacuation d'eau, proximité du voisin du dessous — pour adapter le protocole et limiter toute nuisance.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Nous déplaçons le mobilier et les plantes vers l'intérieur ou les bâchons sur place. Les menuiseries — fenêtres, portes-fenêtres, seuils — reçoivent une protection pour éviter les projections. Un dispositif anti-coulures est installé en périphérie du balcon afin de préserver le voisin du dessous.</p>\n\n<h3>Traitement du sol et des surfaces</h3>\n<p>Les gros dépôts (feuilles, terre, débris) sont retirés manuellement. Un produit adapté au support — carrelage, béton, dalles — est appliqué puis brossé. Le garde-corps, les vitrages et les murs mitoyens accessibles sont traités dans la foulée. Le rinçage s'effectue à pression contrôlée, douce sur les joints pour ne pas les dégrader.</p>\n\n<h3>Séchage et conseils</h3>\n<p>L'eau résiduelle est raclée vers l'évacuation. Nous vérifions l'absence de traces et laissons sécher naturellement. Avant de partir, nous vous indiquons la fréquence d'entretien recommandée selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Poussières de chantier liées aux travaux du Grand Paris sur les balcons des Rives de l'Ourcq.",
        "Dépôts verts et mousses persistants sur les loggias ombragées exposées au canal.",
        "Joints de carrelage sensibles nécessitant un rinçage à pression contrôlée.",
        "Gestion des coulures obligatoire en copropriété pour préserver le linge et les balcons voisins.",
        "Vis-à-vis nombreux imposant une intervention rapide et sans nuisance sonore prolongée.",
      ],
      faqAdditions: [
        {
          question:
            "Quel procédé évitez-vous pour nettoyer un balcon en carrelage aux Rives de l'Ourcq afin de ne pas abîmer les joints ?",
          answer:
            "<p>Nous évitons la haute pression directe sur les joints. Le carrelage est brossé avec un produit adapté, puis rincé à pression douce et contrôlée. Cette méthode préserve l'étanchéité tout en éliminant les salissures incrustées par les poussières de chantier fréquentes dans ce secteur.</p>",
        },
        {
          question:
            "Comment traitez-vous les dépôts de mousse sur un balcon exposé au canal et à l'humidité ?",
          answer:
            "<p>Les mousses et dépôts verts sont d'abord décollés mécaniquement par brossage. Un produit anti-mousse est ensuite appliqué pour ralentir la repousse. Sur les loggias ombragées proches du canal, nous recommandons un entretien bisannuel pour limiter le retour de ces salissures organiques.</p>",
        },
        {
          question:
            "Comment évitez-vous les coulures chez le voisin du dessous lors du nettoyage d'un balcon en étage à Bondy ?",
          answer:
            "<p>Avant de commencer, nous installons des protections en périphérie du balcon pour canaliser l'eau vers l'évacuation. Le rinçage est effectué par zones, avec un raclage immédiat. Cette organisation évite les projections sur le linge étendu ou le mobilier du voisin situé en dessous.</p>",
        },
        {
          question:
            "Quelles méthodes différez-vous selon le support (béton vs carrelage) pour un balcon à Bondy ?",
          answer:
            "<p>Le béton brut supporte un brossage plus appuyé et un rinçage à pression modérée. Le carrelage demande davantage de précaution sur les joints : pression réduite, produit non acide. Nous identifions le support dès le diagnostic pour choisir la technique et le dosage appropriés.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones exposées à Bondy, notamment les immeubles proches du Bois et des cours intérieures.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide homologuée.",
        "Évacuation sécurisée des déchets et conseils de prévention pour limiter les réinfestations.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons des immeubles proches du <strong>Bois de Bondy</strong>. Les oiseaux nichent dans les arbres environnants et reviennent chaque jour sur les mêmes corniches, garde-corps et rebords de fenêtres. L'odeur s'installe, le sol devient glissant, et l'espace extérieur perd toute utilité.</p>\n\n<p class=\"mt-4\">Les <strong>derniers étages des bâtiments anciens</strong> avec cours intérieures concentrent souvent les dégâts les plus importants. Le béton et la peinture subissent une attaque acide progressive. Les locataires hésitent à étendre du linge ou à utiliser leur balcon, même par beau temps. La gêne devient quotidienne.</p>\n\n<p class=\"mt-4\">À Bondy, la proximité des marchés et des espaces verts accentue parfois le phénomène. Une intervention structurée permet de retrouver un balcon sain : diagnostic de l'ampleur des souillures, protection du logement pendant le traitement, et recommandations pour limiter les retours.</p>",
      uniqueDeepDive:
        '<h3>Sécurisation et confinement de la zone</h3>\n<p>L\'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes de protection. Le balcon est isolé par bâchage pour éviter toute dispersion vers l\'intérieur du logement ou chez les voisins.</p>\n\n<p class="mt-4">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Les dépôts sont ramassés et conditionnés dans des sacs étanches. Le sol, les garde-corps, les vitrages et les murs mitoyens sont ensuite nettoyés mécaniquement.</p>\n\n<p class="mt-4">Un produit désinfectant virucide et bactéricide est appliqué sur l\'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes.</p>\n\n<h3>Rinçage et prévention du retour</h3>\n<p>Après rinçage, le balcon reste en aération le temps nécessaire avant réutilisation. Des solutions de dissuasion peuvent être proposées : pics sur les rebords, filets de protection ou gel répulsif selon la configuration.</p>\n\n<p class="mt-4">Les déchets sont évacués en sacs étanches.</p>',
      specificChallenges: [
        "Balcons exposés au Bois de Bondy : oiseaux nicheurs et retours fréquents sur les mêmes points.",
        "Corniches et derniers étages des immeubles anciens particulièrement touchés par les accumulations.",
        "Dégradation progressive des peintures et du béton sous l'effet acide des fientes.",
        "Nécessité de protéger les voisins du dessous pendant l'intervention.",
        "Odeurs tenaces nécessitant une désinfection complète, pas un simple rinçage.",
      ],
      faqAdditions: [
        {
          question:
            "Des fientes importantes sur mon balcon côté Bois de Bondy : intervenez-vous en urgence et comment gérez-vous les risques sanitaires ?",
          answer:
            "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières. Nous intervenons sous quelques jours selon l'urgence. Le port d'EPI et l'humidification préalable limitent tout risque de dispersion pendant le traitement.</p>",
        },
        {
          question:
            "Quel protocole et quels EPI utilisez-vous pour le nettoyage et la désinfection de fientes de pigeons sur un balcon ?",
          answer:
            "<p>L'intervenant porte masque FFP2, combinaison, gants et lunettes. La zone est confinée par bâchage. Après collecte des dépôts, un désinfectant virucide homologué est appliqué avec respect du temps de contact avant rinçage final.</p>",
        },
        {
          question:
            "Les fientes ont attaqué la peinture de ma corniche : proposez-vous un diagnostic et remise en état après nettoyage ?",
          answer:
            "<p>Nous constatons l'état des supports après assainissement et signalons les zones dégradées. L'acidité des fientes peut corroder béton, métal et peinture. Un traitement préventif peut être recommandé pour protéger les surfaces fragilisées.</p>",
        },
        {
          question:
            "Qui prend en charge l'évacuation des résidus après désinfection d'un balcon en copropriété à Bondy ?",
          answer:
            "<p>L'évacuation des déchets fait partie de notre intervention. Les fientes et matériaux souillés sont conditionnés en sacs étanches et emportés par nos équipes. Aucun résidu ne reste sur place après notre passage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas à Bondy, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un mobilier sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de la Noue Caillet et des contraintes d'accès en étage.",
        "Détachage enzymatique adapté aux taches d'animaux et séchage contrôlé pour éviter les auréoles.",
        "Organisation souple pour intervenir rapidement et libérer votre mobilier dans la journée.",
      ],
      uniqueIntro:
        "<p>Comment préserver un canapé ou un tapis quand la vie de famille s'y installe durablement ? Dans le <strong>quartier de la Noue Caillet</strong>, les logements accueillent souvent enfants, repas partagés et animaux de compagnie. Les fibres absorbent ce quotidien : miettes, traces de boissons, poils, et parfois des accidents plus tenaces. Le tissu se ternit, les odeurs s'installent sans qu'on s'en rende compte immédiatement.</p>\n\n<p class=\"mt-4\">Un rafraîchissement régulier change la perception de votre intérieur. Les couleurs retrouvent leur éclat, les allergènes diminuent, et l'atmosphère devient plus agréable pour toute la famille. Dans les <strong>appartements T2 à T4 des grands ensembles</strong>, où l'espace est optimisé, un canapé propre fait toute la différence au quotidien. Les visiteurs le remarquent, les occupants le ressentent.</p>\n\n<p class=\"mt-4\">Notre intervention s'adapte aux contraintes locales : <strong>présence fréquente d'animaux domestiques</strong>, textiles variés, et accès parfois compliqués par des ascenseurs réduits. Nous évaluons chaque pièce avant d'agir, pour un résultat adapté à votre mobilier et à votre usage réel.</p>",
      uniqueDeepDive:
        "<h3>Un textile assaini et des couleurs ravivées</h3>\n<p>L'objectif est de restituer un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus invisibles. Les fibres retrouvent leur souplesse, les teintes leur netteté. Les odeurs incrustées disparaissent progressivement après séchage complet.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Chaque textile est examiné : nature du tissu, type de taches, zones d'usure. Un test discret sur une partie cachée permet de valider la méthode. Les taches tenaces reçoivent un traitement enzymatique adapté avant le passage général.</p>\n\n<p class=\"mt-4\">Le détachage cible les auréoles de café, traces grasses ou accidents d'animaux sans agresser les fibres fragiles.</p>\n\n<h3>Injection-extraction et consignes de séchage</h3>\n<p>Le procédé injecte une solution nettoyante puis aspire immédiatement l'eau chargée de salissures. La pression et la température sont ajustées selon le textile. Nous indiquons le délai de séchage selon l'épaisseur et la ventilation disponible, généralement entre 4 et 8 heures pour une remise en service confortable.</p>",
      specificChallenges: [
        "Taches d'urine et odeurs animales fréquentes dans les foyers avec chiens ou chats.",
        "Textiles non déhoussables nécessitant une extraction sans surmouillage.",
        "Ascenseurs réduits dans les grands ensembles compliquant l'accès du matériel.",
        "Canapés familiaux sollicités quotidiennement par enfants et repas.",
        "Allergènes accumulés dans les fibres épaisses des tapis de salon.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé tissu en maison de famille à la Noue Caillet, pouvez-vous éliminer acariens et allergènes efficacement ?",
          answer:
            "<p>L'injection-extraction déloge les acariens et leurs déjections des fibres profondes. Combinée à un séchage rapide, cette méthode réduit significativement la charge allergène. Les familles avec enfants ou personnes sensibles constatent une amélioration du confort respiratoire après intervention.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'urine et les odeurs tenaces sur un tapis après animaux domestiques ?",
          answer:
            "<p>Un pré-traitement enzymatique cible les composés organiques responsables des odeurs. L'extraction retire ensuite les résidus en profondeur. Selon l'ancienneté de la tache, un second passage peut être nécessaire. Le textile retrouve une odeur neutre après séchage complet.</p>",
        },
        {
          question:
            "Quel procédé utilisez-vous pour un canapé non déhoussable afin d'éviter surmouillage et rétrécissement ?",
          answer:
            "<p>Nous ajustons la pression d'injection et la quantité d'eau selon le tissu. L'extraction immédiate limite l'humidité résiduelle. Un test préalable sur zone cachée confirme la tolérance du textile. Cette précaution évite les auréoles et préserve la forme du rembourrage.</p>",
        },
        {
          question:
            "Avec un accès difficile et ascenseur souvent en panne, comment organisez-vous l'intervention pour nettoyer un grand tapis ?",
          answer:
            "<p>Nous vérifions l'accessibilité avant le rendez-vous et adaptons le matériel transporté. Si l'ascenseur est indisponible, nous montons l'équipement par les escaliers. L'intervention se déroule sur place, sans déplacement du tapis, pour limiter les contraintes et respecter le délai convenu.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse à Bondy, avec traitement adapté au support et élimination des dépôts verts pour retrouver un extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des expositions variables à Bondy : zones ombragées près du Bois, terrasses ensoleillées en pavillon, humidité du Canal.",
        "Maîtrise des supports locaux : carrelage, dalles béton, bois composite, avec produits et pression ajustés à chaque matériau.",
        "Déplacement soigné du mobilier et des plantes, gestion de l'écoulement sans nuisance pour le jardin ou les voisins.",
      ],
      uniqueIntro:
        "<p>Les traces verdâtres et les dépôts noirs sont visibles sur de nombreuses terrasses du <strong>quartier des Merisiers</strong>, où les pavillons disposent souvent d'espaces extérieurs exposés aux intempéries et à l'ombre des jardins voisins. Ces surfaces deviennent glissantes après la pluie, et les joints s'encrassent progressivement jusqu'à donner un aspect négligé à l'ensemble.</p>\n\n<p class=\"mt-4\">Sur les <strong>terrasses en carrelage, dalles béton ou bois composite</strong>, le résultat d'un entretien adapté change l'usage quotidien : un sol redevenu antidérapant, des couleurs ravivées, un espace où l'on peut à nouveau recevoir ou simplement profiter des beaux jours sans hésitation. Les mousses incrustées et les taches grasses disparaissent, redonnant à l'extérieur son rôle d'extension du logement.</p>\n\n<p class=\"mt-4\">Notre intervention prend en compte la <strong>pollution atmosphérique liée aux axes A3 et N3</strong>, ainsi que l'humidité persistante près du Canal ou du Bois. Chaque terrasse fait l'objet d'un diagnostic préalable pour adapter la pression et les produits au revêtement en place.</p>",
      uniqueDeepDive:
        '<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés selon leur poids et leur fragilité. Les menuiseries, baies vitrées et seuils de porte reçoivent une protection pour éviter les projections.</p>\n\n<p class="mt-4">Un balayage préalable élimine feuilles mortes, terre accumulée et débris divers avant tout traitement humide.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formule dégraissante pour le carrelage, traitement doux pour le bois composite, anti-mousse pour les dalles poreuses. Le brossage manuel ou mécanique déloge les salissures incrustées dans les joints et les reliefs.</p>\n\n<p class="mt-4">La haute pression intervient ensuite avec un réglage contrôlé selon la résistance du matériau, en préservant l\'étanchéité des joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L\'eau est dirigée vers les points d\'écoulement existants, en protégeant les plantations adjacentes. Garde-corps et murets périphériques sont également traités.</p>\n\n<p class="mt-4">Avant de partir, nous indiquons la fréquence d\'entretien recommandée selon l\'exposition de votre terrasse.</p>',
      specificChallenges: [
        "Mousses tenaces sur les terrasses proches du Canal ou du Bois de Bondy, favorisées par l'humidité ambiante.",
        "Noircissement accéléré des surfaces exposées aux retombées de l'A3 et de l'avenue Gallieni.",
        "Joints de carrelage encrassés qui retiennent l'eau et favorisent le développement des lichens.",
        "Accès par le jardin dans les pavillons du Mainguy ou des Merisiers, nécessitant une organisation adaptée.",
        "Bois composite sensible aux pressions élevées : réglage fin indispensable pour éviter les marques.",
      ],
      faqAdditions: [
        {
          question:
            "Pour une terrasse en carrelage au Merisiers, quelle méthode préconisez-vous pour un décrassage sans abîmer les joints ?",
          answer:
            "<p>Nous appliquons d'abord un produit désincrustant qui ramollit les dépôts sans attaquer le mortier des joints. Le brossage mécanique déloge ensuite les salissures, puis la haute pression à réglage modéré rince l'ensemble. Les joints restent intacts et le carrelage retrouve son aspect d'origine.</p>",
        },
        {
          question:
            "Ma terrasse proche du Canal est envahie de mousse : proposez-vous démoussage et traitement anti-repousse durable ?",
          answer:
            "<p>Après élimination mécanique des mousses et lichens, nous appliquons un traitement préventif qui freine la recolonisation pendant plusieurs mois. L'humidité persistante près du Canal favorise ces dépôts verts : un entretien annuel prolonge l'efficacité du traitement et maintient la surface praticable.</p>",
        },
        {
          question:
            "Faut-il déplacer mobilier et jardinières avant intervention, ou vos équipes s'en chargent-elles pour une terrasse pavillonnaire ?",
          answer:
            "<p>Nos équipes s'en chargent au début de l'intervention. Tables, chaises et pots sont déplacés ou protégés par bâchage selon leur poids. Nous les repositionnons une fois le séchage suffisant, pour que vous retrouviez votre terrasse prête à l'usage sans manipulation de votre part.</p>",
        },
        {
          question:
            "Quel est le temps de séchage estimé après un nettoyage haute pression d'une terrasse carrelée à Bondy ?",
          answer:
            "<p>En conditions normales, comptez entre deux et quatre heures selon l'exposition au soleil et la ventilation. Une terrasse orientée sud sèche plus vite qu'un espace ombragé par des arbres. Nous intervenons de préférence le matin pour optimiser le séchage avant la fin de journée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux plafonds, pour une restitution impeccable lors d'un état des lieux ou après des travaux de rénovation.",
      whyUsBullets: [
        "Connaissance du parc locatif bondynois et des contraintes liées aux rotations fréquentes entre locataires.",
        "Polyvalence sur tous types de surfaces : carrelage, parquet, faïence, vitres et équipements sanitaires.",
        "Coordination fluide avec agences et bailleurs pour respecter les délais serrés d'état des lieux.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou à l'approche d'un changement de locataire, un logement accumule poussières fines, résidus de chantier et traces d'usage sur toutes les surfaces. Dans le secteur de l'Esplanade Claude-Fuzier et autour du centre-ville, les rotations locatives s'enchaînent à un rythme soutenu, laissant peu de marge entre deux occupants pour remettre un appartement en ordre.</p>\n\n<p class=\"mt-4\">Un nettoyage complet avant remise des clés évite les litiges lors de l'état des lieux et facilite l'entrée du prochain occupant. À Bondy, la mixité du parc immobilier — studios, T2 à T4 en collectif, pavillons avec jardin au sud — impose une adaptation constante des méthodes selon la configuration et les matériaux présents.</p>\n\n<p class=\"mt-4\">L'intervention se coordonne avec les agences immobilières locales, les bailleurs sociaux ou directement avec les propriétaires. Un diagnostic préalable permet de calibrer les moyens nécessaires et de respecter les délais imposés par le calendrier de location ou la fin de chantier.</p>",
      uniqueDeepDive:
        "<h3>Pièces de vie et chambres</h3>\n<p>Le dépoussiérage commence par les plafonds, luminaires et plinthes avant de traiter les murs et menuiseries. Les sols reçoivent un traitement adapté au revêtement : aspiration puis lavage pour le carrelage, nettoyage spécifique pour le parquet. Les placards sont vidés et essuyés intérieurement.</p>\n\n<h3>Cuisine et pièces d'eau</h3>\n<p>Plans de travail, crédence et électroménager sont dégraissés méthodiquement. La salle de bain fait l'objet d'un détartrage des sanitaires, faïences et joints. Les WC sont désinfectés. Les traces de calcaire et résidus de savon disparaissent des parois de douche.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Interrupteurs, poignées de portes et radiateurs sont nettoyés un à un. Les vitres intérieures retrouvent leur transparence. En cas de fin de chantier, les traces de peinture ou d'enduit sur les encadrements sont retirées. Un contrôle visuel finalise l'intervention avant restitution des clés.</p>",
      specificChallenges: [
        "Délais courts entre deux locataires dans les résidences du centre-ville.",
        "Poussières de chantier persistantes sur les programmes neufs des Rives de l'Ourcq.",
        "Stationnement contraint autour de la gare RER E pour le matériel d'intervention.",
        "Coordination nécessaire avec gardiens et syndics dans les grands ensembles.",
        "Sols variés selon les quartiers : carrelage ancien, parquet rénové ou revêtements récents.",
      ],
      faqAdditions: [
        {
          question:
            "J'ai un état des lieux imminent près de la Mairie : quel est votre délai d'intervention pour un nettoyage complet ?",
          answer:
            "<p>Nous intervenons généralement sous 48 à 72 heures selon la surface du logement et la disponibilité des accès. Pour les situations très urgentes en centre-ville de Bondy, un créneau rapproché peut être organisé après échange téléphonique pour confirmer les contraintes horaires et le niveau de nettoyage attendu.</p>",
        },
        {
          question:
            "Pour un ménage fin de chantier dans la ZAC des Rives de l'Ourcq, quelles méthodes utilisez-vous pour poussières et traces de peinture ?",
          answer:
            "<p>L'intervention débute par l'évacuation des résidus grossiers puis un dépoussiérage complet des surfaces hautes vers le sol. Les traces de peinture, enduit ou colle sur les menuiseries et vitres sont retirées manuellement. Le lavage des sols termine l'opération pour un logement prêt à accueillir ses occupants.</p>",
        },
        {
          question:
            "Quel niveau de propreté garantissez-vous pour une remise en état avant entrée d'un nouveau locataire à Bondy ?",
          answer:
            "<p>L'objectif est un logement propre et fonctionnel, sans traces ni poussières visibles sur les surfaces courantes. Sanitaires, cuisine et sols sont traités pour permettre une installation immédiate. En cas de point non conforme relevé lors du contrôle, une repasse ciblée est effectuée.</p>",
        },
        {
          question:
            "Travaillez-vous en coordination avec les agences immobilières locales et bailleurs pour les remises en état à Bondy ?",
          answer:
            "<p>Oui, nous collaborons régulièrement avec les agences locales et Bondy Habitat pour les remises en état entre deux locations. La transmission des clés, les créneaux d'accès et les comptes-rendus d'intervention sont organisés directement avec le gestionnaire concerné pour fluidifier le processus de relocation.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
