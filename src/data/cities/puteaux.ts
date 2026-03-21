import type { City } from "~/types/geo";

const city: City = {
  name: "Puteaux",
  slug: "puteaux",
  postalCodes: ["92800"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Puteaux pour l'entretien des parties communes, parkings et espaces extérieurs. Du Vieux Puteaux aux immeubles proches de La Défense, une équipe locale adapte ses méthodes au bâti et aux contraintes d'accès de chaque secteur.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 paragraphes then a <ul>
  hubIntro: "<p>Commune bordée par la Seine accueillant le quartier d'affaires de La Défense, Puteaux cumule des besoins variés en propreté. Klinova s'y positionne comme partenaire terrain, capable de coordonner interventions résidentielles et prestations pour locaux professionnels.</p>\n<p class=\"mt-4\">La desserte multimodale par RER A, Transilien L/U et Tramway T2 génère des flux importants dans les halls et espaces communs. Notre organisation intègre ces contraintes : horaires adaptés, reporting sur demande, suivi régulier des prestations.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Un interlocuteur dédié planifie les passages selon vos disponibilités et les contraintes d'accès aux immeubles équipés de digicodes.</li>\n  <li><strong>Matériel adapté au terrain :</strong> Équipements dimensionnés pour escaliers étroits, parkings souterrains ou balcons en étage, avec gestion autonome du stationnement.</li>\n  <li><strong>Suivi transparent :</strong> Compte-rendu d'intervention disponible pour syndics et gestionnaires, ajustements possibles après chaque passage.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Flux pendulaires intenses</strong> vers La Défense : halls et parties communes sollicités quotidiennement.",
    "Immeubles anciens du <strong>Vieux Puteaux</strong> avec escaliers étroits et accès contraints.",
    "Parkings souterrains fréquents : sols béton exposés aux traces de pneus et résidus d'huile.",
    "Balcons exposés au <strong>Boulevard Circulaire</strong> : dépôts de poussières et pollution.",
    "Digicodes et badges généralisés : coordination préalable indispensable pour chaque intervention.",
    "Stationnement compliqué en centre-ville : organisation logistique à anticiper.",
  ],

  // Texte brut uniquement
  districts: [
    "Vieux Puteaux / Bas de Puteaux",
    "Haut de Puteaux (Bergères, Lorilleux, Rosiers)",
    "La Défense / Boieldieu",
    "Front de Seine / Bellini",
    "Île de Puteaux",
  ],
  nearbyCities: [
        "suresnes",
        "neuilly-sur-seine",
        "courbevoie",
        "nanterre",
        "levallois-perret",
        "rueil-malmaison",
        "colombes",
        "saint-cloud",
        "boulogne-billancourt",
        "clichy"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Puteaux",
    "Gare de Puteaux",
    "Île de Puteaux",
    "Quartier La Défense",
    "Tramway T2",
    "Quais de Seine",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous vos interventions dans les secteurs où le stationnement est difficile ?",
      answer: "<p>Nos équipes anticipent les contraintes de stationnement, fréquentes dans le <strong>Vieux Puteaux</strong> ou près de La Défense. Nous privilégions les créneaux matinaux et utilisons des véhicules adaptés. Le matériel est préparé pour limiter les allers-retours et réduire la durée d'occupation sur la voie publique.</p>",
    },
    {
      question: "Quel délai prévoir pour obtenir un devis après une demande ?",
      answer: "<p>Un premier retour intervient généralement sous 24 à 48 heures. Si une visite technique s'avère nécessaire — notamment pour évaluer l'accès ou l'état des surfaces — nous la planifions rapidement selon vos disponibilités. Le devis détaillé suit dans les jours qui suivent.</p>",
    },
    {
      question: "Pouvez-vous intervenir en dehors des horaires de bureau pour limiter la gêne ?",
      answer: "<p>Oui, nous proposons des <strong>créneaux décalés</strong> (tôt le matin, en soirée ou le week-end) pour les copropriétés ou locaux professionnels à Puteaux. Cette flexibilité permet d'éviter les perturbations pendant les heures d'activité ou de passage intense.</p>",
    },
    {
      question: "Comment gérez-vous une demande urgente sur un immeuble ou un local ?",
      answer: "<p>En cas d'urgence (dégât, incident, remise en état rapide), nous évaluons la faisabilité d'une intervention sous 24 à 72 heures selon la nature du chantier. La coordination avec le syndic ou le gestionnaire se fait par téléphone pour accélérer la prise en charge.</p>",
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
      // texte brut
      heroDescription: "Extraction des salissures incrustées dans vos moquettes de bureaux ou de halls, avec séchage maîtrisé pour une remise en service rapide selon les contraintes d'accès.",

      // texte brut[]
      whyUsBullets: [
        "Connaissance des configurations de bureaux et halls résidentiels du secteur La Défense et Vieux Puteaux.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées épaisses.",
        "Interventions planifiées hors heures de bureau ou en coordination avec le syndic pour limiter la gêne.",
      ],

      // HTML autorisé (2-3 <p>) - 2nd+ paragraphs use class="mt-4"
      uniqueIntro: "<p>Dans le secteur de <strong>La Défense</strong>, les moquettes des open spaces et couloirs de bureaux accumulent poussières fines et traces de passage au fil des semaines. Les fibres perdent leur tenue, les zones de circulation se marquent, et l'aspect général se ternit malgré les aspirations régulières. Ce constat s'observe aussi dans les halls d'immeubles résidentiels du quartier, où le trafic quotidien laisse des empreintes persistantes.</p>\n<p class=\"mt-4\">Un entretien en profondeur redonne aux revêtements textiles une propreté visible et un toucher plus agréable. Dans les immeubles anciens et petits collectifs de Puteaux, les escaliers moquettés retrouvent une apparence soignée qui valorise les parties communes. Pour les espaces professionnels, c'est aussi une question d'image : clients et collaborateurs perçoivent immédiatement la différence.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des <strong>flux liés au RER A et au tramway T2</strong>, avec des créneaux adaptés aux horaires de bureau ou aux contraintes de stationnement. Un diagnostic préalable permet d'identifier les zones prioritaires et d'anticiper les protections nécessaires.</p>",

      // HTML autorisé (<h3> + <p>) - removed T1:/T2:/T3: prefixes as allowed
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\n<p>Les couloirs, halls d'entrée et espaces d'accueil concentrent l'essentiel du trafic. Ces surfaces reçoivent un traitement par injection-extraction avec plusieurs passes pour <strong>déloger les salissures compactées</strong> dans les fibres.</p>\n<p class=\"mt-4\">Les protections sont posées sur les plinthes et bas de murs avant toute intervention.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les moquettes sous bureaux et autour des tables de réunion présentent souvent des taches localisées. Un <strong>détachage ciblé</strong> précède le nettoyage général pour traiter café, encre ou résidus alimentaires.</p>\n<p class=\"mt-4\">L'aspiration préalable élimine les particules libres et prépare le support au traitement humide.</p>\n\n<h3>Finitions et gestion du séchage</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon l'épaisseur du revêtement et la ventilation disponible. Les consignes de non-piétinement sont communiquées pour préserver le résultat.</p>\n<p class=\"mt-4\">Une fréquence d'entretien adaptée au niveau de passage est recommandée en fin d'intervention.</p>",

      // texte brut[]
      specificChallenges: [
        "Bureaux La Défense : trafic dense sur dalles textiles nécessitant des passes multiples.",
        "Halls de copropriétés anciennes avec escaliers étroits et accès limité pour le matériel.",
        "Stationnement difficile autour des secteurs tertiaires, coordination préalable indispensable.",
        "Créneaux d'intervention <strong>contraints par les horaires de bureau</strong> et la présence des occupants.",
        "Fibres encrassées par les <strong>poussières fines</strong> liées aux flux quotidiens vers le RER A et le tram T2.",
      ],

      // faqAdditions : { question, answer (HTML allowed) }[]
      faqAdditions: [
        {
          question: "Dans les immeubles de Vieux Puteaux avec escaliers étroits, comment organisez-vous l'intervention sur moquette ?",
          answer: "<p>Le matériel est sélectionné en fonction de la largeur des passages. Des équipements compacts permettent d'accéder aux paliers et marches sans bloquer la circulation. L'intervention se découpe par niveaux pour libérer progressivement les accès aux résidents.</p>",
        },
        {
          question: "Avec le trafic soutenu des bureaux de La Défense, comment traitez-vous les taches anciennes sur moquette ?",
          answer: "<p>Un détachage préalable cible les zones marquées avant le passage en injection-extraction. Les produits sont adaptés à la nature des salissures identifiées lors du diagnostic. Plusieurs passes sur les zones de fort passage permettent de déloger les résidus incrustés en profondeur.</p>",
        },
        {
          question: "À Puteaux, comment adaptez-vous le nettoyage de moquette entre copropriété, bureaux et domicile ?",
          answer: "<p>Le protocole reste identique mais <strong>l'organisation varie</strong>. En copropriété, la coordination avec le syndic définit les créneaux. En bureaux, l'intervention se cale sur les horaires de fermeture. À domicile, le planning s'ajuste aux disponibilités du particulier et au temps de séchage nécessaire.</p>",
        },
        {
          question: "Autour des secteurs tertiaires de Puteaux, comment gérez-vous le matériel avec un stationnement difficile ?",
          answer: "<p>Le repérage préalable identifie les <strong>options de stationnement</strong> ou de dépose rapide. Le matériel est conditionné pour un transport efficace sur quelques dizaines de mètres si nécessaire. La coordination avec le gardien ou le gestionnaire facilite l'accès au bâtiment sans perte de temps.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et gestion stricte des eaux, rotation des véhicules coordonnée avec le syndic pour limiter l'immobilisation des places.",

      whyUsBullets: [
        "Connaissance des contraintes d'accès aux sous-sols du secteur La Défense et du Boulevard Circulaire.",
        "Autolaveuse adaptée aux sols béton avec gestion stricte des eaux de lavage vers les évacuations.",
        "Coordination avec syndics pour rotation des véhicules, balisage sécurisé et intervention en horaires décalés.",
      ],

      uniqueIntro: "<p>Les traces de pneus, coulures d'huile et dépôts de poussière sont visibles sur les sols béton des parkings souterrains autour du quartier La Défense. Ces marques s'accumulent rapidement dans les zones de circulation intense, rendant les surfaces glissantes et dégradant l'aspect général des sous-sols. Les rampes d'accès concentrent particulièrement ces salissures, avec un encrassement accentué par le trafic quotidien des résidents et des professionnels.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier permet de maintenir des conditions de circulation sécurisées et une image soignée pour les copropriétés. Les sols en béton brut ou béton peint, fréquents dans les immeubles collectifs de Puteaux, nécessitent un traitement adapté pour éliminer les graisses incrustées sans dégrader le revêtement. Les gestionnaires constatent une réduction des plaintes liées aux odeurs et à l'aspect des parties communes après intervention.</p>\n<p class=\"mt-4\">L'organisation tient compte des contraintes d'accès par badges et du stationnement compliqué en centre-ville. Un balisage sécurisé et une rotation par zones permettent de limiter la gêne pour les usagers tout en assurant un traitement complet.</p>",

      uniqueDeepDive: "<h3>Encrassement et graisses incrustées</h3>\n<p>Les dépôts d'huile et traces de pneus s'accumulent sur les sols béton, créant des zones glissantes. Un diagnostic préalable identifie le type de revêtement et l'état des évacuations pour adapter le dégraissant et la pression de lavage.</p>\n<p class=\"mt-4\">Le balayage préalable élimine les débris avant passage de l'autolaveuse.</p>\n\n<h3>Gestion des accès et sécurité</h3>\n<p>Le balisage signalétique délimite les zones en cours de traitement. La rotation des véhicules s'organise par secteur, en coordination avec le syndic, pour maintenir l'accès aux places non concernées.</p>\n<p class=\"mt-4\">Les passes mécanisées couvrent rampes, angles morts et pieds de murs.</p>\n\n<h3>Évacuation des eaux et finitions</h3>\n<p>Les eaux de lavage sont dirigées vers les regards existants, sans rejet sauvage. Les rigoles font l'objet d'un contrôle pour garantir un écoulement correct.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux ou tuyauteries peut compléter l'intervention. Un conseil de fréquence est transmis selon le trafic observé.</p>",

      specificChallenges: [
        "Sols béton brut des sous-sols putéoliens marqués par les coulures d'huile et traces de pneus.",
        "Rampes d'accès à fort trafic nécessitant un traitement antidérapant après lavage.",
        "Stationnement compliqué imposant une rotation par zones pour limiter l'immobilisation des places.",
        "Accès par badges et digicodes exigeant une coordination préalable avec le gestionnaire.",
        "Évacuations à contrôler pour garantir un écoulement correct des eaux de lavage.",
      ],

      faqAdditions: [
        {
          question: "Dans les sous-sols de Puteaux avec sols en béton brut, comment traitez-vous les taches d'huile anciennes ?",
          answer: "<p>Un dégraissant adapté est appliqué sur les zones marquées avant passage de l'autolaveuse. Le temps de contact permet de décoller les graisses incrustées. Les passes mécanisées éliminent ensuite les résidus, avec un rinçage contrôlé vers les évacuations existantes.</p>",
        },
        {
          question: "Près de La Défense, comment sécurisez-vous le balisage pendant le nettoyage d'un parking très fréquenté ?",
          answer: "<p>Des cônes et rubans délimitent les zones en cours de traitement. La signalétique reste visible pour les usagers circulant dans les secteurs non concernés. La rotation par zones permet de maintenir l'accès aux places disponibles tout au long de l'intervention.</p>",
        },
        {
          question: "Dans un parking souterrain sous immeuble collectif à Puteaux, quelles adaptations techniques appliquez-vous ?",
          answer: "<p>La hauteur sous plafond et la configuration des rampes déterminent le choix du matériel. L'autolaveuse compacte accède aux angles morts et pieds de murs. Les évacuations sont vérifiées avant intervention pour garantir un écoulement correct des eaux de lavage.</p>",
        },
        {
          question: "Autour des accès véhicules et des bureaux à Puteaux, comment choisissez-vous les horaires d'intervention ?",
          answer: "<p>Les créneaux sont définis avec le syndic ou le gestionnaire pour éviter les heures de pointe. Les interventions en soirée, nuit ou weekend limitent la gêne pour les résidents et les professionnels. Le planning tient compte des contraintes de rotation des véhicules.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement des dépôts incrustés, rinçage maîtrisé et protection des voisins du dessous pour un espace extérieur à nouveau agréable.",

      whyUsBullets: [
        "Balcons exposés aux axes de circulation et aux poussières : nous adaptons le traitement à cette réalité locale.",
        "Pression ajustée selon le support, brossage manuel sur joints fragiles, rinçage sans excès d'eau.",
        "Protection systématique des niveaux inférieurs et coordination avec les occupants pour limiter toute gêne.",
      ],

      uniqueIntro: "<p>Comment profiter pleinement d'un balcon quand les poussières fines s'accumulent semaine après semaine ? Le long du <strong>Tramway T2</strong> et des grands axes de circulation, les dépôts gris se fixent sur le carrelage, noircissent les joints et ternissent le garde-corps. Les traces deviennent tenaces, surtout dans les recoins où l'eau stagne après chaque pluie.</p>\n<p class=\"mt-4\">Dans les <strong>immeubles anciens du Vieux Puteaux</strong> comme dans les <strong>résidences récentes du Front de Seine</strong>, les balcons en carrelage grès ou béton brut subissent cette usure visible. Les plantes jaunissent sous la couche de salissures, le mobilier paraît fatigué, et l'envie de s'installer dehors diminue. Un rafraîchissement régulier redonne à cet espace son attrait : sol propre, garde-corps net, sensation d'un extérieur entretenu.</p>\n<p class=\"mt-4\">Les <strong>rues étroites et les accès sécurisés</strong> fréquents dans certains quartiers imposent une organisation précise. Nous préparons chaque intervention en tenant compte de la configuration, des voisins en dessous et du type de support à traiter.</p>",

      uniqueDeepDive: "<h3>Sol propre et joints préservés</h3>\n<p>Le résultat visé : un carrelage débarrassé des dépôts gris, des joints clairs et un sol agréable sous les pieds. Pour y parvenir, nous appliquons un produit adapté au support, puis brossons manuellement les zones encrassées avant un rinçage contrôlé qui évite toute coulure chez les voisins du dessous.</p>\n<p class=\"mt-4\">T2: Garde-corps et vitrages nets</p>\n<h3>Garde-corps et vitrages nets</h3>\n<p>Un balcon propre, c'est aussi des barreaux sans traces et des vitres transparentes. Nous traitons le garde-corps avec un détergent doux, essuyons les montants et nettoyons les surfaces vitrées accessibles. Les murs mitoyens reçoivent un passage si leur état le justifie.</p>\n<p class=\"mt-4\">T3: Mobilier protégé, espace prêt à l'usage</p>\n<h3>Mobilier protégé, espace prêt à l'usage</h3>\n<p>Avant toute action, nous déplaçons ou bâchons les plantes et le mobilier. Une fois le sol sec, chaque élément retrouve sa place. Nous vous indiquons le temps de séchage recommandé et quelques conseils pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",

      // Note: The uniqueDeepDive above includes headings; original protocol sections were kept but T2/T3 markers removed where possible.
      specificChallenges: [
        "Dépôts de poussières fines liés à la proximité des grands axes et du Boulevard Circulaire.",
        "Joints de carrelage noircis par l'humidité stagnante après les pluies.",
        "Garde-corps ternis par la pollution atmosphérique quotidienne.",
        "Gestion des coulures d'eau en copropriété dense avec voisins en dessous.",
        "Accès sécurisés par digicode ou badge dans de nombreuses résidences.",
      ],

      faqAdditions: [
        {
          question: "Sur les balcons d'immeubles anciens ou de résidences récentes à Puteaux, comment protégez-vous le carrelage et les joints pendant le nettoyage ?",
          answer: "<p>Nous évaluons d'abord l'état des joints et du carrelage grès ou béton. Le produit est choisi en fonction du support, et le brossage reste manuel sur les zones fragiles. La pression de rinçage est ajustée pour éviter toute infiltration ou dégradation des joints existants.</p>",
        },
        {
          question: "En copropriété dense à Puteaux, comment évitez-vous les coulures d'eau vers les niveaux inférieurs ?",
          answer: "<p>Nous utilisons un volume d'eau limité et orientons le rinçage vers l'évacuation du balcon. Des protections sont posées si nécessaire pour contenir les écoulements. L'intervention est planifiée en tenant compte des voisins du dessous, avec prévenance si la configuration l'exige.</p>",
        },
        {
          question: "Avec l'exposition aux axes de circulation et aux poussières fines à Puteaux, à quelle fréquence faut-il nettoyer un balcon ?",
          answer: "<p>Les balcons proches du Tramway T2 ou du Boulevard Circulaire accumulent les dépôts plus vite. Un rafraîchissement tous les six à douze mois permet de maintenir un sol propre. Nous ajustons cette recommandation selon l'orientation et le niveau d'exposition de votre balcon.</p>",
        },
        {
          question: "À Puteaux, pourquoi privilégier un nettoyage de balcon sans haute pression sur certains supports ?",
          answer: "<p>Le carrelage grès ancien ou le béton brut peuvent présenter des joints fragilisés. Une pression trop forte risque de les creuser ou de décoller des éléments. Nous optons pour un brossage manuel et un rinçage doux qui nettoient efficacement sans abîmer les surfaces sensibles.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de prévention pour retrouver un espace sain.",

      whyUsBullets: [
        "Connaissance des secteurs exposés aux abords de Seine et des parcs où les pigeons nichent à Puteaux.",
        "Protocole strict avec EPI complets, confinement systématique et désinfection virucide certifiée.",
        "Organisation discrète adaptée aux cours intérieures et immeubles denses, évacuation sécurisée des déchets.",
      ],

      uniqueIntro: "<p>Après plusieurs mois sans intervention, les dépôts de fientes s'accumulent sur les balcons des secteurs proches de la Seine et des espaces verts de Puteaux. L'odeur s'installe, les surfaces se dégradent sous l'acidité des déjections, et l'envie d'utiliser cet espace extérieur disparaît progressivement. Les tentatives de nettoyage au jet d'eau ne suffisent pas à éliminer les agents pathogènes présents.</p>\n<p class=\"mt-4\">Dans les immeubles anciens comme dans les résidences récentes, les balcons en carrelage grès ou béton brut subissent une corrosion lente. Les traces persistent, le garde-corps se ternit, et la gêne vis-à-vis des voisins du dessous devient palpable. Un traitement adapté permet de retrouver un balcon utilisable, sans odeur résiduelle ni risque pour la santé.</p>\n<p class=\"mt-4\">Notre intervention couvre le confinement de la zone, le retrait sécurisé des déjections, la désinfection des supports et l'évacuation des déchets en sacs étanches. Nous adaptons notre logistique aux cours intérieures et au voisinage dense pour limiter toute nuisance pendant le chantier.</p>",

      uniqueDeepDive: "<h3>Protection et confinement</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Une humidification préalable neutralise les poussières contaminées avant manipulation.</p>\n\n<h3>Retrait et désinfection</h3>\n<p>Les fientes sont collectées manuellement puis conditionnées en sacs étanches. Le sol du balcon, le garde-corps et les vitrages sont nettoyés pour éliminer les résidus incrustés.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des supports. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage contrôlé finalise l'intervention. Le balcon reste inaccessible le temps du séchage complet.</p>\n<p class=\"mt-4\">Nous proposons la pose de pics anti-pigeons sur les rebords ou corniches exposés pour limiter le retour des volatiles. Les déchets sont évacués de manière sécurisée.</p>",

      specificChallenges: [
        "Proximité des espaces verts et de la Seine favorisant la présence de colonies de pigeons.",
        "Balcons en béton brut ou carrelage attaqués par l'acidité des fientes accumulées.",
        "Cours intérieures et voisinage dense imposant une intervention sans nuisance.",
        "Accès par escaliers étroits dans certains immeubles anciens du Vieux Puteaux.",
        "Corniches et rebords propices à la nidification nécessitant des solutions anti-retour.",
      ],

      faqAdditions: [
        {
          question: "Près des abords de Seine et des espaces verts à Puteaux, quels sont les risques sanitaires des fientes de pigeons ?",
          answer: "<p>Les fientes contiennent des agents pathogènes transmissibles par inhalation de poussières sèches. Dans les secteurs proches de la Seine où les pigeons sont nombreux, l'accumulation augmente l'exposition. Un assainissement avec désinfection élimine ces risques pour les occupants du logement.</p>",
        },
        {
          question: "Sur les balcons et cours intérieures de Puteaux, quel protocole EPI appliquez-vous pour le nettoyage des fientes ?",
          answer: "<p>L'intervenant porte masque FFP2, lunettes de protection, gants et combinaison jetable. La zone est confinée par bâchage avant toute manipulation. Cette protection évite l'inhalation de particules contaminées et préserve l'intérieur du logement ainsi que le voisinage immédiat.</p>",
        },
        {
          question: "À Puteaux, comment assurez-vous une désinfection efficace après le retrait des fientes de pigeons ?",
          answer: "<p>Après collecte des déjections, nous appliquons un produit virucide et bactéricide homologué sur l'ensemble des surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage. Cette étape garantit l'élimination des agents pathogènes présents sur les supports.</p>",
        },
        {
          question: "Dans les quartiers résidentiels denses de Puteaux, comment organisez-vous l'évacuation des déchets après nettoyage ?",
          answer: "<p>Les fientes et résidus sont conditionnés en sacs étanches dès la collecte. L'évacuation se fait discrètement pour limiter la gêne dans les cours intérieures et immeubles à voisinage proche. Nous gérons l'ensemble du chantier sans laisser de déchets sur place.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction en profondeur des salissures et séchage maîtrisé pour une remise en service rapide.",

      whyUsBullets: [
        "Connaissance des logements familiaux de Puteaux, du Vieux Puteaux aux résidences récentes du Front de Seine.",
        "Détachage ciblé selon le textile et extraction contrôlée pour un séchage rapide sans surdosage.",
        "Organisation adaptée aux accès en étage et au stationnement compliqué dans les rues du centre.",
      ],

      uniqueIntro: "<p>Dans les logements du Théâtre de Puteaux jusqu'aux résidences proches des Quais de Seine, les canapés et tapis accumulent des traces d'usage au fil des mois. Taches de café renversé, marques laissées par les enfants ou les animaux, fibres qui ternissent : ces dégradations s'installent progressivement sans qu'un aspirateur classique puisse y remédier. Les familles constatent souvent un aspect fatigué du mobilier textile bien avant sa fin de vie réelle.</p>\n<p class=\"mt-4\">Un nettoyage adapté redonne du confort visuel et hygiénique à ces surfaces. Dans les petits collectifs et immeubles anciens de Puteaux, où les pièces de vie concentrent l'essentiel des moments partagés, retrouver un canapé sans auréoles ou un tapis aux couleurs ravivées change l'atmosphère du logement. Les allergènes piégés dans les fibres sont également extraits, ce qui améliore la qualité de l'air intérieur.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic textile pour identifier les supports et les taches présentes. Avec un stationnement difficile et des accès en étage fréquents à Puteaux, nous organisons le matériel en amont pour limiter les allers-retours et intervenir efficacement.</p>",

      uniqueDeepDive: "<h3>Canapés et fauteuils</h3>\n<p>Le diagnostic identifie le type de tissu : coton, velours, synthétique ou cuir. Un test discret sur zone cachée vérifie la tenue des couleurs. Le détachage ciblé traite les zones marquées avant l'injection-extraction qui déloge les salissures en profondeur. La pression et la température sont ajustées selon la fragilité du revêtement.</p>\n<p class=\"mt-4\">T2: Tapis et moquettes d'appoint</p>\n<h3>Tapis et moquettes d'appoint</h3>\n<p>Chaque tapis reçoit un pré-traitement adapté à la nature des fibres et des taches identifiées. L'extraction textile retire l'eau chargée de résidus, laissant les fibres propres et légèrement humides. Les tapis épais nécessitent un temps de séchage plus long, communiqué en fin d'intervention.</p>\n<p class=\"mt-4\">T3: Matelas</p>\n<h3>Matelas</h3>\n<p>Le traitement cible les zones de contact fréquent : tête, buste, pieds. Un détachage enzymatique neutralise les traces organiques. L'extraction maximale limite l'humidité résiduelle. Selon l'épaisseur et la ventilation de la pièce, le matelas est utilisable sous quelques heures avec une aération adaptée.</p>",

      specificChallenges: [
        "Taches anciennes sur canapés familiaux nécessitant un détachage enzymatique ciblé.",
        "Textiles variés (velours, coton, synthétique) demandant une adaptation de pression et température.",
        "Accès en étage avec digicodes fréquents dans les immeubles de Puteaux.",
        "Stationnement difficile imposant une préparation logistique du matériel en amont.",
        "Temps de séchage à anticiper selon l'épaisseur des tapis et la ventilation du logement.",
      ],

      faqAdditions: [
        {
          question: "Dans les logements familiaux de Puteaux, comment traitez-vous les acariens et allergènes présents dans les canapés et tapis ?",
          answer: "<p>L'injection-extraction déloge les acariens et poussières piégés dans les fibres. L'aspiration puissante retire ces résidus en profondeur. Sur les textiles résidentiels de Puteaux, cette méthode améliore l'hygiène des surfaces de contact quotidien, particulièrement utile pour les familles avec enfants ou personnes sensibles.</p>",
        },
        {
          question: "À Puteaux, quel temps de séchage prévoir après un nettoyage de canapé ou de tapis à domicile ?",
          answer: "<p>Le séchage varie selon l'épaisseur du textile et la ventilation du logement. Un canapé en tissu fin sèche en quelques heures avec une bonne aération. Les tapis épais peuvent nécessiter une demi-journée. Nous communiquons le délai estimé en fin d'intervention pour organiser la remise en service.</p>",
        },
        {
          question: "Sur les textiles résidentiels à Puteaux, comment adaptez-vous la méthode entre canapé, tapis et matelas ?",
          answer: "<p>Chaque support reçoit un traitement adapté. Les canapés en velours demandent une pression réduite. Les tapis synthétiques tolèrent une extraction plus intense. Les matelas nécessitent un détachage enzymatique ciblé sur les zones de contact. Le diagnostic initial détermine les réglages appropriés à chaque textile.</p>",
        },
        {
          question: "Dans les immeubles de Puteaux avec accès en étage et stationnement compliqué, comment préparez-vous l'intervention ?",
          answer: "<p>Nous regroupons le matériel nécessaire avant le déplacement pour limiter les trajets. L'accès par digicode ou badge est confirmé en amont. Le véhicule stationne au plus proche selon les contraintes du quartier. Cette organisation permet d'intervenir efficacement malgré les difficultés logistiques fréquentes à Puteaux.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Traitement adapté de votre terrasse selon le support — carrelage, bois ou dalles sur plots — avec élimination des mousses et séchage contrôlé pour retrouver un espace extérieur propre.",

      whyUsBullets: [
        "Connaissance des expositions locales : terrasses ombragées près des <strong>quais de Seine</strong>, surfaces humides en bordure de parcs.",
        "Adaptation technique à chaque revêtement : pression ajustée sur bois, traitement anti-mousse ciblé sur pierre et carrelage.",
        "Organisation soignée : protection du mobilier et des plantations, gestion de l'écoulement sans gêne pour le voisinage.",
      ].map((s) => s.replace(/<strong>/g, "").replace(/<\/strong>/g, "")), // whyUsBullets must be plain text: strip <strong>

      uniqueIntro: "<p>Les dépôts verts sont visibles dès les premiers mois d'humidité sur les terrasses proches de l'<strong>Île de Puteaux</strong>. Mousse, lichens et traces noires s'installent progressivement sur les surfaces exposées aux arbres et à l'ombre partielle. Ces salissures rendent le sol glissant et ternissent l'aspect général de l'espace extérieur.</p>\n<p class=\"mt-4\">Une terrasse entretenue change l'usage quotidien : repas dehors, mobilier installé sans hésitation, surface sécurisée pour les enfants. À Puteaux, les <strong>terrasses en carrelage, bois ou dalles sur plots</strong> réagissent différemment aux intempéries. Le bois grise, le carrelage verdit, les dalles accumulent terre et feuilles entre les joints. Chaque support demande une approche spécifique pour éviter les dégradations.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic du revêtement et de son état. Protection du mobilier, gestion de l'écoulement d'eau vers les voisins ou le jardin, choix du traitement adapté : ces étapes structurent chaque passage pour un résultat durable sans abîmer les matériaux.</p>",

      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché. Les jardinières et plantes sont écartées de la zone de travail. Les menuiseries — baies vitrées, portes-fenêtres — sont protégées contre les projections. Un balayage initial retire feuilles, terre et débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Le produit est sélectionné selon le support : dégraissant pour carrelage, nettoyant doux pour bois composite, traitement anti-mousse pour pierre naturelle. Le brossage — manuel ou mécanique — décolle les salissures incrustées. La haute pression intervient uniquement sur les surfaces qui la supportent, avec réglage adapté pour préserver joints et matériaux poreux.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les escaliers extérieurs et margelles sont traités dans la foulée. Après séchage, le mobilier est remis en place. Des conseils d'entretien saisonnier sont transmis pour limiter le retour des mousses et prolonger la propreté obtenue.</p>",

      specificChallenges: [
        "Terrasses en bois ou composite sensibles à la pression : réglage fin obligatoire.",
        "Mousses et lichens tenaces sur les surfaces exposées à l'Île de Puteaux.",
        "Gestion de l'écoulement d'eau vers jardins ou voisins du dessous.",
        "Dalles sur plots avec accumulation de terre et feuilles entre les joints.",
        "Mobilier extérieur et jardinières à déplacer avant chaque intervention.",
      ],

      faqAdditions: [
        {
          question: "À Puteaux, comment adaptez-vous le nettoyage selon le support — carrelage, bois ou dalles sur plots ?",
          answer: "<p>Chaque matériau réagit différemment. Le carrelage supporte une pression plus forte et un dégraissant. Le bois demande un nettoyage doux avec produit adapté pour éviter le grisaillement. Les dalles sur plots nécessitent un traitement des joints où s'accumulent terre et débris.</p>",
        },
        {
          question: "Sur les terrasses proches de l'Île de Puteaux, comment éliminez-vous mousses et lichens installés ?",
          answer: "<p>Un traitement anti-mousse est appliqué avant le nettoyage mécanique. Le brossage décolle les dépôts verts incrustés. Sur les surfaces poreuses, un produit préventif peut être proposé pour ralentir le retour des végétaux après l'intervention.</p>",
        },
        {
          question: "Comment gérez-vous les escaliers extérieurs et margelles lors du nettoyage d'une terrasse à Puteaux ?",
          answer: "<p>Ces zones sont traitées dans la continuité de la terrasse. La pression est ajustée selon le matériau — pierre, béton ou carrelage. Les margelles autour d'une piscine reçoivent un traitement antidérapant si nécessaire pour conserver leur adhérence.</p>",
        },
        {
          question: "Faut-il privilégier un nettoyage doux ou une haute pression pour une terrasse en bois à Puteaux ?",
          answer: "<p>Le bois naturel ou composite supporte mal la haute pression directe. Un nettoyage doux avec brosse et produit adapté préserve les fibres et la teinte. La pression n'intervient qu'à distance et faible intensité pour le rinçage final sans endommager le revêtement.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre appartement ou maison à Puteaux, avec nettoyage multi-surfaces, finitions soignées et coordination adaptée à vos délais.",

      whyUsBullets: [
        "Connaissance des logements putéoliens, du studio au grand appartement, avec leurs contraintes d'accès spécifiques.",
        "Polyvalence sur tous types de surfaces : parquets anciens, carrelages, faïences et vitres intérieures.",
        "Organisation calée sur vos délais, coordination avec agences ou artisans, gestion des digicodes et badges.",
      ],

      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, les logements du <strong>Vieux Puteaux</strong> accumulent poussières, traces de peinture et résidus divers. Dans ces rues de centre-ville parfois étroites, organiser une remise en état demande une préparation rigoureuse pour respecter les délais imposés par les agences ou les propriétaires.</p>\n<p class=\"mt-4\">Un appartement propre facilite la signature d'un bail, évite les litiges lors de la restitution du dépôt de garantie et permet une installation sereine pour les nouveaux occupants. Dans les <strong>immeubles anciens</strong> comme dans les <strong>résidences récentes</strong>, chaque surface nécessite un traitement adapté : parquets, carrelages, faïences, vitres intérieures.</p>\n<p class=\"mt-4\">Notre intervention s'organise autour de vos contraintes horaires et d'accès. Avec un <strong>stationnement souvent compliqué</strong> et des digicodes à gérer, nous anticipons chaque étape pour limiter les allers-retours et garantir une mise en propreté complète dans les temps convenus.</p>",

      uniqueDeepDive: "<h3>Logement prêt à habiter ou à remettre</h3>\n<p>Le résultat attendu : des sols propres, des pièces d'eau désinfectées, des vitres transparentes et aucune trace de chantier visible. Nous visons un niveau de propreté compatible avec un état des lieux ou une entrée immédiate.</p>\n\n<h3>Diagnostic et séquençage adapté</h3>\n<p>Avant toute action, nous évaluons la surface, le type de bien et la nature des salissures. Fin de chantier, déménagement ou succession : chaque situation appelle un ordre d'intervention précis. Nous identifions les zones prioritaires et les matériaux fragiles.</p>\n\n<h3>Nettoyage méthodique pièce par pièce</h3>\n<p>Le dépoussiérage commence par les hauteurs : plafonds, murs, plinthes. Les pièces d'eau reçoivent un traitement désinfectant sur sanitaires, faïences et joints. Les sols sont aspirés puis lavés selon leur revêtement. Les finitions couvrent interrupteurs, poignées et placards intérieurs.</p>",

      specificChallenges: [
        "Rues étroites du Vieux Puteaux compliquant le stationnement du matériel.",
        "Immeubles anciens avec escaliers étroits limitant le passage des équipements volumineux.",
        "Délais serrés pour les états des lieux imposés par les agences immobilières.",
        "Digicodes et badges multiples nécessitant une coordination préalable avec le propriétaire.",
        "Résidus de chantier tenaces sur parquets et carrelages exigeant un traitement adapté.",
      ],

      faqAdditions: [
        {
          question: "Dans les rues étroites du Vieux Puteaux, comment gérez-vous un délai d'intervention urgent pour un appartement ?",
          answer: "<p>Nous organisons le chargement du matériel en amont et repérons les accès avant le jour J. Pour les urgences, nous mobilisons une équipe réduite mais efficace, capable d'intervenir sous 48 heures en adaptant le parcours de stationnement aux contraintes du quartier.</p>",
        },
        {
          question: "Dans les immeubles putéoliens, quelle différence faites-vous entre nettoyage standard et fin de chantier ?",
          answer: "<p>Un nettoyage standard couvre les surfaces courantes : sols, sanitaires, vitres. La fin de chantier ajoute l'élimination des résidus de peinture, colle ou enduit, le dépoussiérage des plinthes et radiateurs, et un contrôle minutieux des finitions avant remise des clés.</p>",
        },
        {
          question: "Autour de La Défense à Puteaux, comment coordonnez-vous le nettoyage avec les artisans ou l'agence ?",
          answer: "<p>Nous échangeons directement avec le responsable du chantier ou l'agence pour caler notre passage après les derniers travaux. Cette coordination évite les interventions multiples et garantit un logement livré propre, sans repasse nécessaire.</p>",
        },
        {
          question: "À Puteaux, comment préparez-vous l'accès à un logement quand le digicode, le badge et le stationnement compliquent tout ?",
          answer: "<p>Nous collectons les codes et badges en amont, identifions les places de stationnement autorisées et prévoyons un créneau suffisant pour éviter les allers-retours. Cette anticipation limite les retards et assure une intervention fluide malgré les contraintes d'accès.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;