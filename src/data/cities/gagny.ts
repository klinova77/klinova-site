import type { City } from "~/types/geo";

const city: City = {
  name: "Gagny",
  slug: "gagny",
  postalCodes: ["93220"],

  customDescription:
    "Entre les coteaux pavillonnaires de l’Époque et les grandes copropriétés de l’est de la ville, Gagny présente une diversité de surfaces à entretenir. La proximité des carrières et des nombreux espaces boisés (Arboretum, Bois de l’Étoile) accentue l’exposition des immeubles aux poussières de terre, aux mousses et à l’humidité, exigeant une maintenance technique régulière.",

  hubIntro:
    `<p>Gagny se distingue par une topographie vallonnée et une mixité urbaine forte, alternant zones pavillonnaires calmes (Maison Blanche, Franceville) et ensembles collectifs denses (Jean Moulin, les Peupliers). Pour les syndics et gestionnaires, cela implique de gérer des problématiques variées : l’humidité des sous-sols en pied de coteau, l’encrassement des halls par la végétation environnante ou l’entretien des parkings vieillissants.</p>
    <p class="mt-4">Klinova intervient comme un partenaire de proximité, capable d’adapter ses protocoles à cette réalité locale. Nous déployons des solutions techniques pour rénover les sols encrassés, assainir les moquettes des parties communes et sécuriser les accès véhicules, tout en respectant la tranquillité des zones résidentielles.</p>
    <ul>
      <li><strong>Maîtrise des terrains en pente</strong> : gestion logistique adaptée pour les résidences situées sur les coteaux ou disposant de rampes de parking difficiles.</li>
      <li><strong>Traitements anti-mousse et humidité</strong> : expertise spécifique pour les balcons et terrasses exposés au nord ou proches des étangs.</li>
      <li><strong>Suivi rigoureux</strong> : rapports d’intervention avec photos pour justifier les prestations auprès des copropriétaires exigeants.</li>
    </ul>`,

  citySpecificChallenges: [
    "Apport constant de débris végétaux et de terre dans les halls d'entrée dû à la proximité immédiate des grands parcs (Courbet, Arboretum, Bois de l’Étoile).",
    "Gestion de l'humidité remontante dans les parkings semi-enterrés ou les caves, fréquente dans les quartiers situés en bas des coteaux (proche canal).",
    "Encrassement spécifique des façades et balcons des résidences des années 70/80 (Jean Moulin, Carette) par la pollution atmosphérique et les lichens.",
    "Accessibilité parfois complexe pour les engins de nettoyage dans les petites rues pavillonnaires du quartier des Abbesses ou de Franceville.",
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  districts: [
    "Centre-ville",
    "Maison Blanche",
    "L’Époque",
    "Parc Carette",
    "Le Chénay",
    "Pointe de Gournay",
    "Les Abbesses",
    "Plateau de Franceville",
    "Jean Moulin",
    "Les Peupliers",
  ],

nearbyCities: [
  "neuilly-sur-marne",
  "chelles",
  "gournay-sur-marne",
  "noisy-le-grand",
  "champs-sur-marne",
  "le-raincy",
],


  landmarks: [
    "Hôtel de Ville (Place Foch)",
    "Théâtre André Malraux",
    "Château de Maison-Blanche",
    "Parc Forestier du Bois de l’Étoile",
    "Arboretum de Gagny",
    "Lac de Maison-Blanche",
    "Gare de Gagny (RER E)",
    "Gare du Chénay-Gagny (RER E)",
    "Parc Courbet",
    "Jean Bouin",
  ],

  faq: [
    {
      question: "Vos équipes interviennent-elles dans les quartiers résidentiels excentrés comme Franceville ?",
      answer:
        `<p>Absolument. Notre rayon d'action couvre l'intégralité de Gagny, du centre-ville historique aux quartiers limitrophes de Montfermeil ou Villemomble. Nous sommes équipés pour intervenir aussi bien dans les grandes copropriétés que dans les zones pavillonnaires plus difficiles d'accès.</p>`,
    },
    {
      question: "Comment traitez-vous les problèmes de mousse sur les parkings extérieurs ?",
      answer:
        `<p>À Gagny, l'humidité et la végétation favorisent les dépôts verts. Nous utilisons des traitements fongicides professionnels suivis d'un nettoyage haute pression maîtrisé (avec cloche de lavage pour éviter les projections) afin de décaper les sols sans abîmer l'enrobé ou le béton.</p>`,
    },
    {
      question: "Le déplacement pour un devis est-il facturé ?",
      answer:
        `<p>Non, c'est gratuit. Que vous soyez syndic bénévole à l'Époque ou gestionnaire d'un grand ensemble au Chénay, nous venons sur place évaluer les surfaces (moquettes, parkings, vitrerie) et les contraintes techniques avant de vous remettre une proposition chiffrée.</p>`,
    },
    {
      question: "Proposez-vous des contrats d'entretien annuel ?",
      answer:
        `<p>Oui, nous mettons en place des plannings de maintenance (1 à 2 passages par an pour les parkings et moquettes) adaptés au budget de la copropriété. Cela permet de maintenir un niveau de propreté constant et d'éviter une dégradation irréversible des supports.</p>`,
    },
  ],

  testimonial: {
    text:
      "Notre copropriété près du Parc Carette avait des problèmes récurrents de taches sur les moquettes des couloirs. L'intervention de Klinova a permis de ravoir des zones qu'on pensait irrécupérables. L'équipe a été discrète et très pro.",
    author: "Mme Vasseur",
    role: "Présidente du Conseil Syndical",
    building: "Résidence Les Érables",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Rénovation en profondeur des moquettes de copropriété à Gagny : élimination des taches, odeurs et acariens pour des parties communes saines et accueillantes.",

      whyUsBullets: [
        "Expertise sur les fibres synthétiques des résidences années 70-80.",
        "Traitement puissant par injection-extraction pour les zones de fort trafic.",
        "Détachage spécifique (graisses, tanins, gommes) avant lavage global.",
        "Séchage optimisé pour une remise en service rapide des couloirs.",
      ],

      uniqueIntro:
        `<p>Dans les immeubles de Gagny, notamment les grandes résidences du secteur Jean Moulin ou du Chénay, les moquettes des parties communes sont soumises à rude épreuve. Le passage intensif, combiné aux apports de terre des espaces verts environnants, crée des zones d'usure prématurée et un grisaillement général.</p>
        <p class="mt-4">Un simple aspirateur ne suffit pas à extraire la poussière incrustée ni à raviver les couleurs. Pour les gestionnaires, laisser les moquettes s'encrasser dévalorise le patrimoine et donne une image négligée de la résidence. Notre intervention technique vise à désincruster la fibre en profondeur, redonnant luminosité et hygiène aux halls et circulations.</p>`,

      uniqueDeepDive:
        `<p>Le protocole débute par un diagnostic de la fibre (bouclé, velours, aiguilleté) pour adapter la pression et la température de l'eau. Nous protégeons soigneusement les bas de murs et les portes palières. Les taches tenaces font l'objet d'un pré-traitement manuel avec des agents détachants spécifiques.</p>
        <p class="mt-4">Nous procédons ensuite au nettoyage complet par injection-extraction : la machine propulse une solution nettoyante au cœur de la moquette et l'aspire instantanément avec les salissures. Cette méthode permet de "rincer" la fibre sans détremper la sous-couche. À Gagny, où l'humidité peut être un facteur, nous veillons particulièrement à l'aspiration finale pour garantir un séchage rapide et éviter toute odeur d'humidité.</p>`,

      specificChallenges: [
        "Halls d'entrée souvent carrelés mais tapis d'escaliers et couloirs en moquette nécessitant une transition de nettoyage propre.",
        "Remontée de taches anciennes sur les dalles textiles des bureaux ou copropriétés tertiaires.",
        "Nécessité de traiter de grands linéaires de couloirs dans les ensembles collectifs sans bloquer la circulation des résidents.",
      ],

      faqAdditions: [
        {
          question:
            "La méthode d'injection-extraction est-elle adaptée aux vieilles moquettes ?",
          answer:
            `<p>Oui, c'est souvent la meilleure solution pour rénover sans remplacer. Si la fibre n'est pas limée jusqu'à la trame, le nettoyage va retirer le voile gris et redresser le poil. Cela permet souvent de prolonger la durée de vie du revêtement de plusieurs années.</p>`,
        },
        {
          question:
            "Intervenez-vous le samedi pour ne pas gêner les professions libérales ?",
          answer:
            `<p>Nous savons que de nombreux cabinets médicaux ou bureaux sont installés dans les résidences du centre de Gagny. Nous pouvons planifier l'intervention sur des créneaux horaires adaptés (tôt le matin, fin de journée ou samedi) pour ne pas perturber votre activité.</p>`,
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
        "Nettoyage industriel de parkings à Gagny : décapage des sols, rampes et boxes pour éliminer suies, huiles et poussières nocives.",

      whyUsBullets: [
        "Parc machine adapté aux parkings souterrains bas de plafond.",
        "Utilisation de dégraissants puissants conformes aux normes environnementales.",
        "Nettoyage haute pression des rampes d'accès glissantes.",
        "Planification par zones pour maintenir le stationnement résidentiel.",
      ],

      uniqueIntro:
        `<p>Les parkings des résidences de Gagny, qu'ils soient situés sous les immeubles du centre-ville ou dans les complexes de la Pointe de Gournay, accumulent une pollution spécifique. Poussières de freinage, suies d'échappement et fuites d'huile encrassent les bétons et les résines, rendant les surfaces glissantes et les marquages invisibles.</p>
        <p class="mt-4">Au-delà de l'aspect visuel, un parking sale génère un sentiment d'insécurité et peut provoquer des chutes. L'entretien mécanique régulier est indispensable pour préserver la qualité de l'air (en limitant les poussières volatiles) et assurer la pérennité des revêtements de sol face à l'acidité des hydrocarbures.</p>`,

      uniqueDeepDive:
        `<p>Notre intervention démarre par un dépoussiérage complet (balayage mécanique) pour retirer les gros déchets. Nous traitons ensuite les sols à l'aide d'autolaveuses portées ou accompagnées selon la surface, qui brossent et aspirent simultanément. Les taches d'huile incrustées sont traitées localement.</p>
        <p class="mt-4">Une attention particulière est portée aux rampes d'accès, souvent critiques en hiver ou par temps de pluie. Nous les décapons à la haute pression pour restaurer leur adhérence. La gestion des eaux de lavage est stricte : récupération via l'autolaveuse et évacuation dans les réseaux appropriés, un point crucial pour les copropriétés soucieuses de l'environnement.</p>`,

      specificChallenges: [
        "Parkings sur plusieurs niveaux avec rampes hélicoïdales nécessitant des machines maniables.",
        "Sols en béton brut très poreux dans les résidences anciennes, retenant les taches d'huile en profondeur.",
        "Ventilation parfois insuffisante dans les boxes fermés, demandant une gestion rigoureuse des poussières lors du balayage.",
      ],

      faqAdditions: [
        {
          question:
            "Est-il nécessaire de vider totalement le parking ?",
          answer:
            `<p>L'idéal est un parking vide, mais c'est rarement possible à Gagny. Nous procédons donc par phasage (niveau par niveau ou zone par zone). Nous balisons la zone de travail le temps du nettoyage et du séchage, permettant aux résidents de déplacer leurs véhicules sans devoir les sortir de la résidence.</p>`,
        },
        {
          question:
            "Nettoyez-vous aussi les portes de garage et les tuyauteries ?",
          answer:
            `<p>Le décrassage standard concerne les sols et les rampes. Cependant, sur devis complémentaire, nous pouvons effectuer le dépoussiérage des tuyauteries aériennes, des luminaires et le nettoyage des portes de boxes, ce qui améliore considérablement la luminosité du sous-sol.</p>`,
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
        "Remise en état de vos balcons et terrasses à Gagny : élimination des mousses, lichens et pollution pour des extérieurs propres et sûrs.",

      whyUsBullets: [
        "Technique douce respectueuse des étanchéités et des joints.",
        "Protection intégrale des baies vitrées et de l'intérieur du logement.",
        "Gestion des écoulements d'eau pour éviter les conflits de voisinage.",
        "Intervention efficace sur carrelage, béton, dalles sur plots ou bois.",
      ],

      uniqueIntro:
        `<p>L'environnement verdoyant de Gagny a un revers : la prolifération rapide de mousses et d'algues sur les balcons, en particulier ceux exposés au nord ou situés près des parcs comme le Bois de l'Étoile. Couplés à la pollution urbaine, ces dépôts rendent les sols noirs, glissants et inesthétiques.</p>
        <p class="mt-4">Beaucoup de résidents n'osent plus utiliser leur terrasse ou craignent d'abîmer le revêtement en le nettoyant eux-mêmes. Notre service professionnel permet de décaper les surfaces en profondeur sans risque, redonnant ainsi une véritable pièce supplémentaire à votre appartement.</p>`,

      uniqueDeepDive:
        `<p>Après avoir protégé votre intérieur et déplacé le mobilier, nous retirons manuellement les débris accumulés. Nous appliquons ensuite un nettoyant professionnel adapté au support (fongicide ou dégraissant). Le nettoyage s'effectue par action mécanique ou haute pression maîtrisée, pour ne pas dégrader les joints de carrelage ni rendre le béton poreux.</p>
        <p class="mt-4">Le point crucial en immeuble est la gestion de l'eau. Nous utilisons des aspirateurs à eau ou des systèmes de barrage pour canaliser les flux vers les évacuations, évitant ainsi les coulures disgracieuses sur la façade ou chez les voisins du dessous. Les vitres et garde-corps sont essuyés en fin de chantier.</p>`,

      specificChallenges: [
        "Balcons 'casquette' ou loggias nécessitant une vigilance accrue sur les évacuations d'eau.",
        "Forte présence de lichens incrustés sur les bétons gravillonnés des années 70.",
        "Nécessité de protéger les plantes et aménagements personnels des résidents durant l'intervention.",
      ],

      faqAdditions: [
        {
          question:
            "Utilisez-vous de l'eau de Javel ?",
          answer:
            `<p>Non, nous évitons l'eau de Javel qui est corrosive pour les bétons, toxique pour l'environnement et risque de décolorer les façades en cas de coulure. Nous privilégions des détergents professionnels spécifiques et biodégradables, beaucoup plus sûrs pour votre bâtiment et vos plantations.</p>`,
        },
        {
          question:
            "Pouvez-vous nettoyer les stores bannes en même temps ?",
          answer:
            `<p>Le nettoyage du tissu des stores demande une intervention spécifique différente du sol. Nous pouvons cependant nettoyer les armatures métalliques et le coffre du store lors du nettoyage du balcon pour une finition impeccable.</p>`,
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
        "Décontamination spécialisée des balcons touchés par les pigeons à Gagny : nettoyage, désinfection et évacuation des déchets en toute sécurité.",

      whyUsBullets: [
        "Protocole sanitaire strict (EPI, confinement, désinfection).",
        "Produits virucides et bactéricides homologués.",
        "Nettoyage des traces acides corrosives sur les garde-corps et sols.",
        
      ],

      uniqueIntro:
        `<p>Certains quartiers de Gagny, proches des gares ou des zones pavillonnaires anciennes, sont particulièrement touchés par les nuisances de pigeons. Lorsqu'un balcon est colonisé, l'accumulation de fientes le rend non seulement impraticable à cause de l'odeur et de la saleté, mais présente surtout un risque sanitaire réel (bactéries, parasites).</p>
        <p class="mt-4">Face à une telle situation, un simple nettoyage domestique est déconseillé sans équipement. Klinova intervient pour remettre le logement en état de salubrité, en garantissant la sécurité de l'intervenant et des occupants.</p>`,

      uniqueDeepDive:
        `<p>Nos techniciens interviennent en tenue de protection complète. La première étape consiste à humidifier les zones souillées pour éviter la dispersion de poussières contaminées, puis à gratter et ensacher les fientes et nids. Ces déchets sont traités comme des matières dangereuses.</p>
        <p class="mt-4">Une fois le gros œuvre retiré, nous procédons au lavage et à la désinfection des sols et parois avec des produits biocides puissants. Cette étape est essentielle pour éliminer les pathogènes et les mauvaises odeurs. Le balcon est rendu propre, sain et prêt à être réaménagé (après séchage complet).</p>`,

      specificChallenges: [
        "Accès parfois difficile aux balcons via l'appartement, obligeant à un confinement strict du passage.",
        "Corrosion des garde-corps métalliques par l'acidité des fientes, nécessitant un nettoyage délicat.",
        "Logements vacants ou en succession où l'infestation est ancienne et massive.",
      ],

      faqAdditions: [
        {
          question:
            "Les produits de désinfection sont-ils dangereux pour mes animaux ?",
          answer:
            `<p>Pendant l'application, l'accès au balcon doit être interdit aux animaux. Une fois le protocole terminé, les surfaces rincées et sèches (généralement après 24h), il n'y a plus aucun danger pour vos animaux de compagnie. Le balcon est redevenu sain.</p>`,
        },
        {
          question:
            "Installez-vous des pics anti-pigeons après le nettoyage ?",
          answer:
            `<p>Oui, absolument. Le nettoyage est le moment idéal pour sécuriser la zone. Nous pouvons installer des pics sur les garde-corps ou les appuis de fenêtre pour empêcher les pigeons de se poser à nouveau.</p>`,
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
        "Nettoyage à domicile de canapés, tapis et matelas à Gagny : une solution radicale contre les taches et les acariens.",

      whyUsBullets: [
        "Intervention rapide à domicile sur rendez-vous.",
        "Détachage précis respectant la nature des fibres (tissu, velours, laine).",
        "Élimination des odeurs et des allergènes en profondeur.",
        "Séchage accéléré grâce à une aspiration haute performance.",
      ],

      uniqueIntro:
        `<p>Dans les foyers de Gagny, le mobilier textile est au cœur de la vie de famille. Taches de nourriture, poils d'animaux, poussière et transpiration s'accumulent au fil du temps dans les canapés et matelas. L'aspirateur ne traite que la surface, laissant les allergènes et la saleté incrustés dans le rembourrage.</p>
        <p class="mt-4">Que vous habitiez une maison à Maison Blanche ou un appartement au Chénay, notre service de nettoyage à domicile permet de redonner fraîcheur et hygiène à votre intérieur sans avoir à remplacer votre mobilier. C'est une solution économique et écologique.</p>`,

      uniqueDeepDive:
        `<p>Notre technicien commence par analyser le type de textile pour choisir les produits adaptés. Nous appliquons ensuite une solution nettoyante et détachante, suivie d'un brossage si nécessaire. La phase d'injection-extraction permet de rincer la fibre en profondeur et d'aspirer l'eau sale chargée d'impuretés.</p>
        <p class="mt-4">Ce procédé élimine non seulement les taches visibles mais aussi les acariens et bactéries responsables d'allergies. Pour les matelas, c'est une véritable cure de jouvence hygiénique. Nous laissons le mobilier humide mais non trempé ; il suffit de quelques heures de séchage naturel avant réutilisation.</p>`,

      specificChallenges: [
        "Traitement des odeurs d'urine d'animaux sur les tapis ou canapés, fréquent en pavillon.",
        "Nettoyage de grands canapés d'angle ou panoramiques nécessitant de l'espace pour travailler.",
        "Gestion des tissus délicats (viscose, soie) demandant une expertise technique pour éviter les auréoles.",
      ],

      faqAdditions: [
        {
          question:
            "Combien de temps dure l'intervention pour un canapé ?",
          answer:
            `<p>Pour un canapé 3 places standard, comptez environ 1h30 à 2h d'intervention. Cela inclut la préparation, le détachage, le nettoyage par extraction et le nettoyage de la zone de travail. C'est rapide et efficace.</p>`,
        },
       
      ],

      ctaOverride: "",
    },
  ],
};

export default city;