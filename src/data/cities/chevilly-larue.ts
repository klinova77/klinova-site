import type { City } from "~/types/geo";

const city: City = {
  name: "Chevilly-Larue",
  slug: "chevilly-larue",
  postalCodes: ["94550"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Chevilly-Larue pour l'entretien des parties communes, parkings et espaces extérieurs. Proche du tram T7, notre équipe connaît les contraintes locales et adapte chaque intervention au bâti de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // format : 2 <p> then <ul>
  hubIntro:
    "<p>Au cœur du pôle d'Orly-Rungis, desservie par le tram T7, Chevilly-Larue combine zones d'activités et quartiers résidentiels. Klinova accompagne gestionnaires et occupants avec une organisation pensée pour <strong>ce territoire en mouvement</strong>.</p>\n\n<p class=\"mt-4\">Nos équipes assurent la propreté des halls, le décrassage des sous-sols et l'entretien des espaces extérieurs. Chaque intervention fait l'objet d'un suivi clair, avec reporting disponible pour les donneurs d'ordre qui le souhaitent.</p>\n\n<ul>\n  <li><strong>Coordination locale :</strong> Planification adaptée aux contraintes de stationnement près de la station Chevilly-Larue et aux horaires des résidences des Sorbiers.</li>\n  <li><strong>Matériel adapté au terrain :</strong> Autolaveuses pour parkings souterrains, injection-extraction pour halls moquettés, nettoyeurs haute pression pour extérieurs.</li>\n  <li><strong>Interlocuteur unique :</strong> Un référent dédié assure le lien entre vos attentes et nos techniciens, du devis à la réception des travaux.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Dépôts noirs</strong> sur les balcons et halls exposés à l'axe A6 et au trafic de la N7.",
    "Parkings souterrains des Sorbiers et de La Saussaie sujets aux <strong>traces d'hydrocarbures</strong>.",
    "Halls des résidences proches du tram T7 sollicités par un <strong>flux quotidien important</strong>.",
    "Terrasses et balcons du quartier Larue exposés aux <strong>mousses et pollens</strong> du parc Petit-le-Roy.",
    "Zones d'activités Cerisaie : moquettes de bureaux encrassées par le <strong>passage intensif</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Quartier Larue",
    "Quartier Les Sorbiers",
    "Quartier La Saussaie",
    "Quartier Bretagne",
    "Zone Cerisaie",
  ],

  // Voisins / villes proches (texte brut)
  nearbyCities: [
        "thiais",
        "villejuif",
        "cachan",
        "vitry-sur-seine",
        "arcueil",
        "bagneux",
        "orly",
        "gentilly",
        "choisy-le-roi",
        "ivry-sur-seine"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Chevilly-Larue",
    "Station Métro Chevilly-Larue",
    "Parc Départemental Petit-le-Roy",
    "Zone d'Activités La Cerisaie",
    "Arrêt Tram Moulin Vert",
    "Théâtre André Malraux",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les résidences proches du tram T7 ?",
      answer:
        "<p>Nous planifions les passages en tenant compte des <strong>flux de voyageurs</strong> aux arrêts Moulin Vert ou Bretagne. Pour les halls et parkings, nous privilégions les créneaux matinaux ou en début d'après-midi, quand le stationnement est plus accessible et la gêne pour les résidents réduite.</p>",
    },
    {
      question:
        "Proposez-vous un devis gratuit pour les copropriétés de Chevilly-Larue ?",
      answer:
        "<p>Oui. Nous effectuons une <strong>visite technique préalable</strong> pour évaluer les surfaces, les accès et les contraintes spécifiques. Le devis détaillé est transmis sous 48 heures, sans engagement. Nous intervenons aussi bien dans les grands ensembles que dans les petites copropriétés.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir rapidement en cas de dégradation imprévue ?",
      answer:
        "<p>Nous disposons d'équipes mobilisables sous <strong>24 à 72 heures</strong> selon la nature de l'urgence. Déversement d'huile en parking, souillures dans un hall après sinistre : nous adaptons le planning pour répondre aux situations qui ne peuvent pas attendre l'entretien régulier.</p>",
    },
    {
      question:
        "Comment se passe la coordination avec le gardien ou le syndic ?",
      answer:
        "<p>Avant chaque intervention, nous échangeons avec le <strong>référent sur place</strong> pour confirmer les accès, les horaires et les zones prioritaires. Un compte-rendu est transmis après passage. Cette organisation garantit un suivi clair et évite les incompréhensions.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure
  services: [
    {
      serviceKey: "moquettes",
      // texte brut
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide.",
      // texte brut (3 lignes)
      whyUsBullets: [
        "Connaissance des contraintes locales : bureaux de la Cerisaie, halls collectifs du centre, accès réglementés.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles comme aux velours ras anciens.",
        "Interventions planifiées en dehors des heures de bureau ou en coordination avec le gardien de l'immeuble.",
      ],
      // HTML autorisé (2-3 <p>)
      uniqueIntro:
        "<p>Dans la zone d'activités La Cerisaie, les dalles textiles des bureaux accumulent rapidement poussières fines et traces de passage. Le trafic quotidien des collaborateurs, combiné aux particules transportées depuis l'extérieur, ternit les fibres en quelques semaines. Les couloirs et espaces d'accueil perdent leur aspect professionnel, ce qui peut affecter l'image perçue par les visiteurs et clients.</p>\n\n<p class=\"mt-4\">Les petits collectifs du centre-ville présentent des halls moquettés datant des années 70-80. Ces revêtements velours ras, souvent posés sur des surfaces réduites, concentrent <strong>l'encrassement aux zones de passage</strong> : entrées, paliers d'ascenseur, bas d'escaliers. Un entretien adapté redonne de la tenue aux fibres et prolonge la durée de vie du revêtement sans intervention lourde.</p>\n\n<p class=\"mt-4\">La proximité de l'A6 et du MIN Rungis génère une poussière noire grasse qui se dépose jusque dans les espaces intérieurs. Cette salissure spécifique nécessite un traitement par injection-extraction capable de déloger les particules en profondeur, pas seulement en surface.</p>",
      // HTML autorisé (<h3> + <p>)
      uniqueDeepDive:
        "<h3>1. Zones de circulation intense</h3>\n<p>Les entrées, couloirs et abords d'ascenseurs reçoivent un diagnostic préalable : type de fibre, nature des dépôts, état général. Une aspiration soignée retire les particules libres avant le traitement humide.</p>\n<p class=\"mt-4\">Les protections sont posées sur les plinthes et bas de murs pour éviter tout transfert de produit.</p>\n\n<h3>2. Surfaces de travail et accueil</h3>\n<p>L'injection-extraction cible les dalles textiles des open spaces et salles de réunion. Plusieurs passes sont effectuées sur les zones de trafic pour déloger les salissures incrustées.</p>\n<p class=\"mt-4\">Le détachage ponctuel traite les marques de café, tanin ou traces grasses identifiées lors du diagnostic.</p>\n\n<h3>3. Gestion du séchage</h3>\n<p>L'extraction maximale réduit le taux d'humidité résiduelle. Le temps de séchage varie selon l'épaisseur du revêtement et la ventilation disponible, généralement entre 4 et 8 heures.</p>\n<p class=\"mt-4\">Des consignes de non-piétinement sont transmises pour garantir un résultat homogène sur l'ensemble de la surface traitée.</p>",
      // texte brut uniquement (retirer balises <strong> si présentes)
      specificChallenges: [
        "<strong>Poussière noire grasse</strong> liée au trafic routier A6 et aux flux camions du MIN Rungis.",
        "Halls moquettés des années 70-80 avec <strong>fibres velours ras</strong> sensibles à l'écrasement.",
        "Dalles textiles des bureaux Cerisaie soumises à un <strong>passage quotidien intense</strong>.",
        "<strong>Stationnement contraint</strong> aux abords du Tram T7 pour le déchargement du matériel.",
        "Coordination nécessaire avec gardiens ou gestionnaires pour l'accès aux parties communes.",
      ],
      // faq additions: question + answer (answer HTML allowed)
      faqAdditions: [
        {
          question:
            "Les cages d'escalier étroites du centre-ville : comment faites-vous passer une shampouineuse sans dégâts ?",
          answer:
            "<p>Nous utilisons des équipements compacts conçus pour les accès restreints. La shampouineuse et le flexible d'extraction passent sans forcer dans les escaliers étroits. Les protections murales sont posées avant chaque manipulation pour éviter tout frottement sur les murs ou les plinthes.</p>",
        },
        {
          question:
            "Taches anciennes incrustées dans la moquette des halls copropriétés : quelles solutions efficaces sur place ?",
          answer:
            "<p>Les dépôts anciens nécessitent un pré-traitement ciblé avant l'injection-extraction. Un détachant adapté au type de salissure est appliqué, puis l'extraction en profondeur déloge les résidus. Le résultat dépend de l'ancienneté et de la nature de la tache, mais une amélioration visible est obtenue dans la majorité des cas.</p>",
        },
        {
          question:
            "Pour les bureaux de la Cerisaie, quelle méthode (vapeur vs shampouinage) garantit le meilleur résultat ?",
          answer:
            "<p>L'injection-extraction reste la méthode de référence pour les dalles textiles à fort passage. Elle décolle les salissures en profondeur et les aspire immédiatement. La vapeur convient davantage à un entretien léger ou à des fibres fragiles. Pour un décrassage complet, l'extraction donne un résultat plus durable.</p>",
        },
        {
          question:
            "Avec stationnement limité autour du Tram T7, comment organisez-vous l'arrivée et le matériel pour un nettoyage moquette ?",
          answer:
            "<p>Nous repérons les créneaux de stationnement autorisé ou les emplacements de dépose-minute à proximité. Le matériel est déchargé rapidement puis transporté jusqu'au site. Pour les interventions longues, une coordination préalable avec le gestionnaire permet de réserver un accès ou d'utiliser un local technique temporaire.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Un décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion sécurisée des eaux et balisage pour maintenir l'accès aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains du secteur Sorbiers et des contraintes d'accès en copropriété.",
        "Autolaveuse professionnelle et produits dégraissants adaptés au béton brut, avec gestion stricte des eaux.",
        "Coordination avec le syndic pour le balisage, la rotation des véhicules et le compte-rendu d'intervention.",
      ],
      uniqueIntro:
        "<p>Comment préserver un sol de parking propre quand les véhicules circulent quotidiennement et que les traces d'huile s'accumulent semaine après semaine ? Dans le <strong>quartier Les Sorbiers</strong>, les parkings souterrains des copropriétés subissent un encrassement régulier lié au trafic résidentiel et aux retours de véhicules exposés aux axes routiers environnants.</p>\n\n<p class=\"mt-4\">Un sol de parking décrassé régulièrement limite les remontées de poussière dans les cages d'escalier, réduit les odeurs de carburant et préserve l'aspect général des parties communes. Sur les <strong>revêtements béton brut</strong> fréquents dans les sous-sols anciens, les dépôts graisseux pénètrent rapidement si aucun entretien n'est programmé. Les rampes d'accès et places étroites concentrent souvent les salissures les plus tenaces.</p>\n\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic pour définir les créneaux adaptés, le balisage nécessaire et la rotation éventuelle des véhicules. Un compte-rendu avec photos permet de suivre l'évolution de l'état du sol entre chaque passage.</p>",
      uniqueDeepDive:
        "<h3>1. Sol décrassé et dégraissé sur toute la surface</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des traces d'hydrocarbures, des poussières accumulées et des dépôts noirâtres. Le passage mécanisé à l'autolaveuse combiné à un dégraissant adapté au béton permet de traiter l'ensemble de la dalle en une seule intervention.</p>\n\n<h3>2. Diagnostic préalable et préparation du chantier</h3>\n<p>Avant toute action, nous identifions le type de revêtement, l'état des évacuations et le niveau d'encrassement. Un balayage préalable élimine les débris grossiers. Le balisage sécurise les zones de travail et informe les usagers des restrictions temporaires.</p>\n\n<h3>3. Traitement des zones critiques et gestion des eaux</h3>\n<p>Les rampes d'accès, angles morts et pieds de murs reçoivent un traitement ciblé à la haute pression si nécessaire. Les rigoles et regards sont vérifiés pour garantir une évacuation correcte. Les eaux de lavage sont dirigées vers les points d'écoulement prévus, sans rejet sauvage.</p>",
      specificChallenges: [
        "Parkings souterrains aux Sorbiers avec places étroites et rampes inclinées.",
        "Traces d'huile fréquentes liées aux véhicules exposés aux flux du MIN Rungis.",
        "Revêtements béton brut anciens nécessitant un dégraissage adapté.",
        "Coordination avec les résidents pour la rotation des véhicules pendant l'intervention.",
        "Évacuations parfois encombrées dans les sous-sols des années 70-80.",
      ],
      faqAdditions: [
        {
          question:
            "Comment enlever des taches d'huile anciennes sur le béton d'un parking proche du MIN Rungis ?",
          answer:
            "<p>Les dépôts graisseux liés au trafic camion s'incrustent dans le béton poreux. Nous appliquons un dégraissant alcalin avant le passage de l'autolaveuse. Sur les taches anciennes, un temps de pose prolongé et un brossage mécanique permettent de décoller les résidus sans abîmer le revêtement.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous l'entretien d'un parking souterrain en copropriété comme aux Sorbiers ?",
          answer:
            "<p>Pour un parking résidentiel avec trafic quotidien, un passage trimestriel maintient un niveau de propreté correct. Si le sous-sol présente des problèmes d'humidité ou des traces d'hydrocarbures récurrentes, un rythme bimestriel évite l'accumulation et facilite chaque intervention suivante.</p>",
        },
        {
          question:
            "Quelles méthodes diffèrent entre un parking souterrain et un parking aérien dans la zone Cerisaie ?",
          answer:
            "<p>En souterrain, la ventilation limitée impose une gestion rigoureuse des produits et des eaux de lavage. En aérien, l'enrobé supporte mieux la haute pression mais accumule davantage de poussières et débris végétaux. Le diagnostic initial détermine le matériel et les produits adaptés à chaque configuration.</p>",
        },
        {
          question:
            "Quels sont les horaires recommandés pour nettoyer un parking proche de l'A6 afin de minimiser la gêne ?",
          answer:
            "<p>Les créneaux en journée creuse ou en début de soirée permettent de travailler avec moins de véhicules stationnés. Pour les copropriétés, nous proposons aussi des interventions le samedi matin après concertation avec le syndic. Le balisage informe les résidents des zones temporairement inaccessibles.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon ou loggia, avec traitement adapté au support, gestion contrôlée de l'eau et protection des éléments mitoyens pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux axes passants, loggias orientées vers les espaces verts.",
        "Pression ajustée selon le support, brossage ciblé sur joints et recoins sans risque pour le carrelage ou les dalles.",
        "Organisation pensée pour le voisinage : bâchage anti-coulures, horaires adaptés, remise en place du mobilier avant départ.",
      ],
      uniqueIntro:
        "<p>Le long de l'avenue de Stalingrad et des axes proches de la N7, les balcons accumulent rapidement un voile grisâtre. Les particules de combustion se déposent sur le sol, s'incrustent dans les joints et ternissent les garde-corps. Ce dépôt noirâtre revient semaine après semaine, rendant l'espace peu engageant malgré les tentatives de rinçage au jet.</p>\n\n<p class=\"mt-4\">Sur les loggias vitrées des grands ensembles comme sur les balcons béton des résidences récentes, cette couche grasse finit par adhérer au support. Le carrelage perd son éclat, les dalles sur plots se tachent en profondeur. Sans intervention adaptée, le balcon reste un espace qu'on évite plutôt qu'un prolongement du logement.</p>\n\n<p class=\"mt-4\">Une remise en état structurée permet de retrouver une surface propre et agréable. Le vis-à-vis important dans ces secteurs denses rend d'autant plus appréciable un extérieur soigné, où l'on peut installer table et chaises sans hésitation.</p>",
      uniqueDeepDive:
        "<h3>1. Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries reçoivent une protection pour éviter les projections. Un premier passage enlève feuilles mortes, terre accumulée et débris divers qui encombrent les angles et les seuils.</p>\n\n<h3>2. Traitement du sol et des parois</h3>\n<p>Un produit adapté au support est appliqué : formule dégraissante pour le béton noirci, solution douce pour les dalles sur plots. Le brossage manuel ou mécanique décolle les salissures incrustées. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée.</p>\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée, en orientant le flux pour éviter les coulures chez les voisins du dessous.</p>\n\n<h3>3. Finalisation et conseils</h3>\n<p>Les surfaces sont laissées à sécher naturellement. Avant de partir, nous repositionnons le mobilier et partageons quelques conseils d'entretien courant pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôt noir gras sur les balcons exposés aux axes routiers, difficile à déloger au simple jet.",
        "Loggias fermées nécessitant une évacuation d'eau maîtrisée pour protéger les voisins.",
        "Dalles sur plots en résidences récentes : pression adaptée pour ne pas déplacer les éléments.",
        "Garde-corps anciens et joints fragiles demandant un traitement sans haute pression.",
        "Vis-à-vis dense : intervention discrète et remise en état rapide de l'espace.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyer un balcon en béton carrelé noirci par les émissions sur l'avenue de Stalingrad ?",
          answer:
            "<p>Nous appliquons un dégraissant adapté au carrelage, puis brossons les joints pour décoller les particules incrustées. Le rinçage à pression modérée élimine les résidus sans abîmer les surfaces. Le résultat : un sol débarrassé du voile grisâtre qui s'accumule avec le trafic routier.</p>",
        },
        {
          question:
            "Sur les loggias fermées, comment gérez-vous l'évacuation d'eau sans inonder les voisins ?",
          answer:
            "<p>L'eau de rinçage est orientée vers l'évacuation existante ou récupérée au fur et à mesure. Nous utilisons des quantités limitées et contrôlons le flux pour qu'aucune projection ne déborde sur les balcons inférieurs. Cette précaution est systématique dans les immeubles collectifs.</p>",
        },
        {
          question:
            "Pour un balcon en dalles sur plots en ZAC récentes, quelle méthode de nettoyage évite d'endommager le support ?",
          answer:
            "<p>La pression est réduite pour ne pas déplacer les dalles ni endommager les plots. Le nettoyage combine produit adapté et brossage doux, suivi d'un rinçage contrôlé. Cette approche préserve l'intégrité du support tout en éliminant mousses et dépôts accumulés.</p>",
        },
        {
          question:
            "Peut-on nettoyer un balcon ancien sans haute pression pour préserver joints et garde-corps ?",
          answer:
            "<p>Oui, nous intervenons régulièrement sans haute pression sur les balcons fragiles. Le brossage manuel associé à un produit ciblé suffit à décoller les salissures. Le rinçage s'effectue à basse pression ou au jet simple, en protégeant les éléments sensibles comme les garde-corps en fer forgé.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des zones sensibles à Chevilly-Larue, notamment les résidences proches des espaces verts et parcs.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection par produits homologués.",
        "Évacuation des déchets en sacs étanches et coordination discrète pour limiter la gêne en copropriété.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans intervention, les dépôts s'accumulent sur les garde-corps et le sol. À proximité du <strong>Parc Petit-le-Roy</strong>, les balcons exposés aux arbres et aux espaces verts subissent des salissures régulières. L'odeur s'installe, le linge ne peut plus sécher dehors, et l'espace devient inutilisable.</p>\n\n<p class=\"mt-4\">Sur les <strong>derniers étages des résidences collectives</strong>, les corniches et rebords offrent des perchoirs idéaux. Les fientes s'incrustent dans le béton, attaquent les joints et laissent des traces tenaces sur les vitrages. Le balcon perd son usage quotidien, source de frustration pour les occupants qui renoncent à profiter de cet espace.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon propre et sain. Le protocole inclut le retrait des dépôts, la <strong>désinfection des surfaces</strong> et l'évacuation des déchets en sacs étanches. Des solutions de dissuasion peuvent compléter le traitement pour limiter le retour des oiseaux.</p>",
      uniqueDeepDive:
        '<h3>1. Sécurisation et confinement</h3>\n<p>L\'intervenant porte un équipement complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l\'intérieur du logement ou chez les voisins.</p>\n<p class="mt-4">Les fientes sont humidifiées avant manipulation pour neutraliser les poussières contaminées et éviter leur envol.</p>\n\n<h3>2. Retrait et traitement des supports</h3>\n<p>Les dépôts sont collectés manuellement puis conditionnés en sacs étanches. Le sol, les garde-corps, les vitrages et les murs mitoyens sont nettoyés en profondeur.</p>\n<p class="mt-4">Un produit virucide et bactéricide homologué est appliqué sur l\'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les résidus organiques.</p>\n\n<h3>3. Rinçage et prévention</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation rapide après aération. Les déchets sont évacués de manière sécurisée.</p>\n<p class="mt-4">Si nécessaire, des dispositifs anti-retour peuvent être installés : pics sur les rebords, filets de protection ou gel répulsif sur les corniches.</p>',
      specificChallenges: [
        "Balcons exposés aux arbres du Parc Petit-le-Roy : dépôts fréquents sur garde-corps et sols.",
        "Corniches des grands ensembles offrant des perchoirs aux pigeons, accumulation rapide.",
        "Fientes incrustées dans le béton brut des loggias, nécessitant un traitement en profondeur.",
        "Coordination avec le voisinage pour limiter les nuisances olfactives pendant l'intervention.",
        "Évacuation sécurisée des déchets contaminés en milieu résidentiel dense.",
      ],
      faqAdditions: [
        {
          question:
            "Fientes sèches sur corniches près du Parc Petit-le-Roy : intervention d'urgence possible et délais ?",
          answer:
            "<p>Nous intervenons sous quelques jours selon la disponibilité. Les dépôts anciens sont humidifiés avant retrait pour éviter la dispersion de poussières. Le balcon est ensuite désinfecté et prêt à être réutilisé après une courte période d'aération.</p>",
        },
        {
          question:
            "Quel protocole et quels EPI utilisez-vous pour désinfection après enlèvement de fientes de pigeons ?",
          answer:
            "<p>Nos intervenants portent un masque FFP2, des lunettes de protection, des gants et une combinaison jetable. La zone est confinée par bâchage pour protéger l'intérieur du logement et éviter toute contamination croisée vers les espaces voisins.</p>",
        },
        {
          question:
            "Quels produits garantissent une désinfection efficace des fientes de pigeons sur balcon en béton ?",
          answer:
            "<p>Nous utilisons des produits virucides et bactéricides homologués, adaptés aux supports minéraux. Le temps de contact est respecté pour éliminer les agents pathogènes. Le béton est ensuite rincé, sans risque de dégradation du revêtement.</p>",
        },
        {
          question:
            "Après nettoyage de fientes sur balcons en centre-ville, comment organisez-vous l'évacuation des déchets en copropriété ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès le ramassage. L'évacuation se fait de manière discrète pour limiter la gêne auprès des autres occupants. Aucun déchet contaminé ne reste sur place après notre passage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchissement en profondeur de vos canapés, tapis et matelas à domicile, avec extraction des salissures incrustées et séchage optimisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux du secteur Chérioux et des contraintes d'accès en résidence collective.",
        "Détachage adapté à chaque fibre avec extraction puissante pour un séchage accéléré même sans espace extérieur.",
        "Intervention planifiée selon vos horaires, stationnement anticipé pour limiter la durée sur place.",
      ],
      uniqueIntro:
        "<p>Les traces de café sur l'accoudoir, les auréoles sur les coussins, la teinte grisâtre qui s'installe sur le tapis du salon : dans les logements familiaux proches du <strong>Domaine Chérioux</strong>, ces marques d'usure quotidienne finissent par ternir l'ensemble du mobilier textile. Les enfants, les animaux, les repas pris sur le canapé laissent des dépôts que l'aspirateur ne suffit pas à éliminer.</p>\n\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur aspect d'origine et supprime les odeurs persistantes. Dans les <strong>appartements T2 à T4</strong> qui composent une grande partie du parc résidentiel, canapés en tissu et tapis à poils courts accumulent poussières et allergènes au fil des mois. Retrouver un intérieur frais change le confort au quotidien, surtout pour les foyers avec jeunes enfants ou personnes sensibles.</p>\n\n<p class=\"mt-4\">L'intervention s'organise selon vos disponibilités. La <strong>rotation locative importante</strong> liée au bassin d'emploi Rungis-Orly génère des demandes régulières avant ou après emménagement. Un diagnostic préalable permet d'adapter le traitement au type de textile et à l'état des taches.</p>",
      uniqueDeepDive:
        "<h3>1. Textile assaini et taches atténuées</h3>\n<p>L'objectif est de retrouver une surface propre, débarrassée des résidus incrustés et des odeurs. Pour y parvenir, chaque textile est d'abord identifié : coton, synthétique, velours ras ou microfibre. Un test discret sur une zone cachée confirme la tolérance du tissu au traitement.</p>\n\n<h3>2. Détachage ciblé puis injection-extraction</h3>\n<p>Les taches visibles (café, vin, traces d'animaux) reçoivent un pré-traitement enzymatique adapté. Le nettoyage principal combine injection d'eau et produit actif, puis extraction immédiate. La pression et la température sont ajustées selon la fragilité des fibres pour éviter toute déformation.</p>\n\n<h3>3. Extraction maximale et conseils séchage</h3>\n<p>L'aspiration finale retire le maximum d'humidité. En appartement sans balcon, compter 4 à 8 heures de séchage selon l'épaisseur du textile et l'aération disponible. Des consignes simples vous sont transmises pour accélérer le processus et espacer les prochains entretiens.</p>",
      specificChallenges: [
        "Taches alimentaires fréquentes sur canapés tissu dans les foyers avec enfants.",
        "Accumulation d'acariens et allergènes dans les tapis à poils courts des T3-T4.",
        "Séchage à gérer en appartement sans balcon ni terrasse accessible.",
        "Stationnement camionnette parfois contraint aux abords des résidences.",
        "Demandes régulières liées aux états des lieux avant ou après location.",
      ],
      faqAdditions: [
        {
          question:
            "Le nettoyage canapé élimine-t-il réellement acariens et allergènes dans des logements familiaux ?",
          answer:
            "<p>L'injection-extraction retire une grande partie des acariens, poussières et résidus organiques logés dans les fibres. Dans les appartements familiaux où enfants et animaux partagent le canapé, cette action réduit sensiblement la charge allergène. Le résultat dépend de l'état initial et de la fréquence d'entretien.</p>",
        },
        {
          question:
            "Quel est le temps de séchage attendu après shampouinage d'un canapé tissu en appartement T3 sans balcon ?",
          answer:
            "<p>Comptez généralement entre 4 et 8 heures selon l'épaisseur du tissu et la ventilation du logement. Ouvrir les fenêtres ou utiliser un ventilateur accélère le processus. En hiver, le chauffage modéré aide également. Le canapé reste utilisable dès que la surface est sèche au toucher.</p>",
        },
        {
          question:
            "Comment adaptez-vous la méthode selon le type de tissu (velours ras vs microfibre) d'un canapé ?",
          answer:
            "<p>Un diagnostic préalable identifie la nature des fibres : velours ras, microfibre, coton ou synthétique. La pression d'injection et la température sont ajustées pour éviter toute déformation ou décoloration. Les textiles fragiles reçoivent un traitement plus doux avec test préalable sur zone cachée.</p>",
        },
        {
          question:
            "Pour un tapis très taché, vaut-il mieux un détachage ponctuel ou un nettoyage complet à domicile ?",
          answer:
            "<p>Si les taches sont localisées et récentes, un détachage ciblé peut suffire. En revanche, un tapis uniformément grisâtre ou chargé en poussière nécessite un nettoyage complet par injection-extraction. L'évaluation sur place permet de choisir la solution la plus adaptée à l'état réel du textile.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support — carrelage, dalles ou bois — pour éliminer mousses, dépôts verts et taches tenaces, et retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires de Chevilly-Larue, exposées à l'humidité hivernale et aux dépôts verts récurrents.",
        "Maîtrise des techniques adaptées à chaque support : pression contrôlée sur pierre, nettoyage doux sur bois, traitement anti-mousse durable.",
        "Organisation soignée avec protection du mobilier, gestion de l'écoulement et accès par jardin sans passage intérieur si possible.",
      ],
      uniqueIntro:
        "<p>Après quelques hivers, les terrasses des pavillons du <strong>quartier Larue</strong> changent d'aspect. La mousse s'installe entre les joints, les dalles gravillonnées verdissent, le bois composite perd son éclat d'origine. L'humidité persistante et l'ombre des haies accélèrent cette dégradation progressive, rendant la surface glissante et peu engageante dès les premiers beaux jours.</p>\n\n<p class=\"mt-4\">Retrouver une terrasse nette modifie l'usage de l'espace extérieur. On y installe à nouveau table et chaises sans hésitation, on circule pieds nus sans crainte. Les supports varient selon l'âge des maisons : <strong>carrelage ancien, dalles gravillonnées ou bois composite</strong> sur les rénovations récentes. Chaque matériau réagit différemment aux traitements et nécessite une approche adaptée.</p>\n\n<p class=\"mt-4\">L'intervention commence par un diagnostic du revêtement et de son état. L'accès depuis le jardin ou le rez-de-chaussée conditionne l'organisation du chantier. La gestion de l'eau d'écoulement et la protection des plantations sont intégrées dès la préparation pour éviter tout désagrément.</p>",
      uniqueDeepDive:
        "<h3>1. Préparation et dégagement</h3>\n<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection contre les projections.</p>\n<p class=\"mt-4\">Un balayage préalable retire feuilles mortes, terre accumulée et débris végétaux. Cette étape permet d'évaluer précisément l'étendue des mousses et l'état des joints.</p>\n\n<h3>2. Traitement et nettoyage adapté</h3>\n<p>Un produit spécifique au support est appliqué : formulation pierre pour les dalles, solution douce pour le bois composite. Le brossage — manuel sur les zones fragiles, mécanique sur les surfaces résistantes — déloge les dépôts incrustés.</p>\n<p class=\"mt-4\">La haute pression intervient uniquement sur les matériaux qui la supportent, avec réglage contrôlé pour préserver les joints et éviter l'éclatement des gravillons.</p>\n\n<h3>3. Finition et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants, en protégeant les massifs et plantations adjacentes. Un traitement anti-mousse préventif peut être appliqué selon l'exposition.</p>\n<p class=\"mt-4\">Des recommandations d'entretien saisonnier sont transmises pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "Dalles gravillonnées sensibles à la haute pression : réglage adapté pour ne pas déchausser les gravillons.",
        "Mousses tenaces entre joints sur terrasses ombragées par haies ou murs mitoyens.",
        "Bois composite qui grise et se tache : traitement spécifique sans abrasion.",
        "Accès parfois uniquement par l'intérieur de la maison dans les pavillons mitoyens.",
        "Écoulement d'eau à gérer pour éviter les flaques et protéger les plantations proches.",
      ],
      faqAdditions: [
        {
          question:
            "Quel risque pour une terrasse en dalles gravillonnées du quartier Larue avec un nettoyage haute pression ?",
          answer:
            "<p>Les dalles gravillonnées supportent mal une pression trop forte : les gravillons peuvent se déchausser et la surface perdre son aspect uniforme. Nous réglons la puissance selon le matériau et privilégions un brossage mécanique sur les zones fragiles pour obtenir un résultat propre sans dégradation.</p>",
        },
        {
          question:
            "Quand et comment intervenir pour démoussage d'une terrasse envahie par les mousses ?",
          answer:
            "<p>L'humidité hivernale favorise l'installation des mousses, surtout sur les terrasses exposées au nord ou ombragées par des haies. Nous appliquons un produit de démoussage adapté au support, suivi d'un brossage pour retirer les résidus. Un traitement préventif limite la repousse pendant plusieurs mois.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse conseillez-vous pour une terrasse en pierre exposée au nord ?",
          answer:
            "<p>Sur pierre naturelle ou reconstituée, nous utilisons un anti-mousse à action lente qui pénètre le matériau sans l'agresser. L'application se fait après nettoyage complet. L'effet préventif dure généralement une saison entière, parfois davantage selon l'exposition et l'entretien régulier.</p>",
        },
        {
          question:
            "Haute pression ou nettoyage doux pour une terrasse bois composite : que recommandez-vous ?",
          answer:
            "<p>Le bois composite ne tolère pas la haute pression standard qui peut rayer la surface et altérer la teinte. Nous privilégions un nettoyage basse pression combiné à un produit adapté, suivi d'un rinçage soigné. Cette méthode préserve l'aspect du matériau tout en éliminant les salissures incrustées.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une mise en propreté complète de votre logement, coordonnée selon vos contraintes de remise de clés ou de livraison, pour un résultat conforme aux attentes des agences et propriétaires.",
      whyUsBullets: [
        "Connaissance des typologies locales : collectifs des Sorbiers, pavillons de Larue, livraisons ZAC Anatole France.",
        "Polyvalence sur tous les revêtements : parquet, lino, carrelage, faïence, surfaces vitrées.",
        "Coordination directe avec agences, bailleurs et gardiens pour respecter vos délais de remise.",
      ],
      uniqueIntro:
        "<p>Comment remettre un appartement en état lorsque le délai avant l'état des lieux se compte en jours ? Dans le <strong>secteur Centre-Ville</strong>, à proximité de la médiathèque Boris Vian, la rotation locative génère des demandes régulières de nettoyage complet. Les agences immobilières locales et les bailleurs attendent un logement prêt à la visite, sans traces ni résidus visibles.</p>\n\n<p class=\"mt-4\">Un nettoyage structuré permet de restituer chaque pièce dans un état conforme aux exigences d'un état des lieux sortant. Dans les <strong>collectifs type T2 à T4</strong> ou les pavillons du quartier Larue, les sols varient : lino dans l'habitat social, parquet ou carrelage dans les constructions récentes. Chaque revêtement demande un traitement adapté pour éviter les dégradations et obtenir un rendu homogène.</p>\n\n<p class=\"mt-4\">L'intervention se planifie en fonction de vos impératifs : coordination avec l'agence, récupération des clés auprès du gardien, respect du créneau imposé par le bailleur. Cette organisation limite les allers-retours et garantit une remise du logement dans les temps.</p>",
      uniqueDeepDive:
        "<h3>1. Pièces de vie et chambres</h3>\n<p>Le dépoussiérage commence par les points hauts : plafonds, luminaires, dessus de placards. Les murs et plinthes sont essuyés pour retirer les traces de frottement. Les sols reçoivent un traitement adapté au revêtement : aspiration puis lavage au produit neutre pour le parquet, décrassage renforcé pour le lino ou le carrelage.</p>\n\n<h3>2. Cuisine et sanitaires</h3>\n<p>Les plans de travail, crédences et façades d'électroménager sont dégraissés. L'intérieur du four et du réfrigérateur est nettoyé si demandé. En salle de bain, la faïence, les joints et les sanitaires sont détartrés. Les WC font l'objet d'une désinfection complète.</p>\n\n<h3>3. Finitions et contrôle</h3>\n<p>Les interrupteurs, poignées et radiateurs sont essuyés. Les vitres intérieures sont nettoyées pour un rendu lumineux. Un passage final vérifie l'absence de traces résiduelles. Le logement est aéré avant la remise des clés ou la visite de contrôle.</p>",
      specificChallenges: [
        "Délais serrés entre le départ du locataire et l'état des lieux entrant.",
        "Coordination nécessaire avec les agences locales et les bailleurs sociaux comme Valophis.",
        "Sols variés dans un même logement : lino couloir, carrelage cuisine, parquet chambres.",
        "Accès par digicode ou badge Vigik dans les résidences fermées des Sorbiers ou de la Saussaie.",
        "Stationnement réglementé en centre-ville, à anticiper pour le matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Urgence pour état des lieux près du métro Chevilly-Larue : quel délai d'intervention proposez-vous ?",
          answer:
            "<p>Nous intervenons sous 24 à 48 heures selon la disponibilité. La proximité de la station métro Chevilly-Larue facilite l'accès pour nos équipes. Contactez-nous avec la date de remise des clés : nous ajustons le planning pour respecter votre échéance.</p>",
        },
        {
          question:
            "Quelles différences techniques entre un ménage standard et un nettoyage de fin de chantier en ZAC ?",
          answer:
            "<p>Le nettoyage fin de chantier inclut l'élimination des résidus de travaux : poussière de plâtre, traces de peinture, colle sur les sols. Les surfaces sont décrassées en profondeur avant la remise des clés. Un ménage standard concerne un logement déjà habité, sans ces dépôts spécifiques.</p>",
        },
        {
          question:
            "Comment coordonnez-vous interventions avec agences et bailleurs sociaux lors d'un départ locataire ?",
          answer:
            "<p>Nous récupérons les clés selon vos modalités : auprès du gardien, en agence ou via une boîte à clés sécurisée. Le compte-rendu d'intervention peut être transmis directement au gestionnaire. Cette organisation évite les allers-retours et garantit un logement prêt à la date convenue.</p>",
        },
        {
          question:
            "Que comprend le prix d'un nettoyage état des lieux pour un T3-type dans Chevilly-Larue ?",
          answer:
            "<p>Le devis dépend de la surface, de l'état initial et des prestations demandées : nettoyage complet, vitres intérieures, intérieur électroménager. Pour un T3 standard, comptez une intervention de 3 à 5 heures. Nous établissons un chiffrage précis après description du logement.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
