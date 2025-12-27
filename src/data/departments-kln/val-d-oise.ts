import type { DepartmentKln } from "~/types/department-klinova";

export const valDOise: DepartmentKln = {
  slug: "val-d-oise",
  department: {
    name: "Val-d'Oise",
    code: "95",
  },

  // =========================
  // SEO & Hero
  // =========================
  heroTitle: "Entreprise de nettoyage professionnel dans le Val-d'Oise (95)",
  heroKicker: "Cergy, Pontoise, Argenteuil, Sarcelles • Devis sous 24h",
  heroDescription:
    "Klinova intervient dans tout le Val-d'Oise pour le nettoyage de moquettes (parties communes de copropriété, locaux professionnels), canapés, tapis et matelas à domicile, balcons, terrasses et parkings souterrains. Nous organisons nos interventions par secteurs géographiques pour garantir réactivité et disponibilité sur l'ensemble du département.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/95-val-d-oise-residence-moderne.webp",
        alt: "Résidence collective moderne dans le Val-d'Oise avec espaces communs et parkings",
        width: 1200,
        height: 800,
        caption:
          "Copropriétés Val-d'Oise : habitat dense et zones pavillonnaires nécessitant adaptation des protocoles.",
      },
    ],
  },

  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Contraintes d'intervention dans le Val-d'Oise (95)",
    items: [
      "Département étendu (1 246 km²) nécessitant une organisation par secteurs géographiques pour optimiser les trajets et tenir des délais cohérents",
      "Typologie d'habitat très variée : grands ensembles urbains (Argenteuil, Sarcelles), villes moyennes (Cergy-Pontoise, Ermont), zones pavillonnaires étendues (vallée de Montmorency, Vexin)",
      "Moquettes de parties communes soumises à des niveaux d'encrassement différents selon la densité urbaine et le type de fréquentation",
      "Parkings souterrains de tailles variables, des petits parkings résidentiels aux grands ensembles avec rampes hélicoïdales et zones techniques",
      "Textiles d'ameublement très sollicités dans les zones résidentielles familiales : taches alimentaires récurrentes, odeurs d'animaux, usure quotidienne",
      "Balcons et terrasses exposés à des contraintes différentes selon le secteur : pollution urbaine pour les zones denses, mousses et végétation pour les secteurs pavillonnaires",
      "Logistique adaptée au contexte : accès copropriétés avec badges et ascenseurs, zones pavillonnaires avec allées privées et portails",
    ],
  },

  // =========================
  // Sections éditoriales
  // =========================
  sections: [
    {
      id: "contexte",
      title: "Val-d'Oise : un territoire diversifié qui impose des protocoles adaptés",
      image: "/images/95-val-d-oise-residence-moderne.webp",
      imageAlt: "Hall d'entrée de copropriété dans le Val-d'Oise avec moquette et circulations",
      imageCaption:
        "Parties communes 95 : la propreté reste essentielle pour le confort quotidien et l'image résidentielle.",
      html: `
        <p>
          Le <strong>Val-d'Oise</strong> se distingue par sa diversité territoriale. Les grands ensembles 
          urbains comme Argenteuil, Sarcelles ou Garges-lès-Gonesse concentrent des copropriétés denses où 
          les parties communes (halls, paliers, cages d'escalier) subissent un trafic quotidien important. 
          Les villes moyennes telles que Cergy-Pontoise, Ermont ou Franconville combinent habitat collectif 
          et zones pavillonnaires. Enfin, les secteurs résidentiels de la vallée de Montmorency ou du Vexin 
          privilégient les maisons individuelles avec jardins et terrasses.
        </p>
        <p class="mt-4">
          Cette hétérogénéité se reflète directement dans nos interventions. Sur les <strong>moquettes 
          de copropriété</strong>, l'encrassement varie sensiblement : poussières fines et traces de 
          circulation dans les secteurs urbains denses, salissures plus terreuses et végétales dans les 
          zones résidentielles. Sans un protocole ajusté au contexte et au niveau de sollicitation, le 
          résultat ne tient pas dans le temps et les interventions doivent être répétées plus fréquemment.
        </p>
        <p class="mt-4">
          À <strong>domicile</strong>, nous constatons que les textiles d'ameublement reflètent une 
          utilisation familiale intensive. Les canapés, tapis et matelas accumulent les taches alimentaires 
          quotidiennes, les odeurs d'animaux domestiques, les auréoles d'usage et subissent une usure 
          prématurée sur les zones de frottement. Notre objectif est de les remettre à neuf : détachage 
          précis, extraction en profondeur, désodorisation si nécessaire et rinçage complet pour éviter 
          qu'ils ne se salissent à nouveau trop rapidement.
        </p>
        <p class="mt-4">
          Pour couvrir efficacement le département, nous planifions nos interventions par secteurs : 
          Est 95 (Sarcelles, Garges, Gonesse), Ouest 95 (Argenteuil, Bezons, Cormeilles), vallée de 
          l'Oise (Cergy-Pontoise, Éragny) et vallée de Montmorency (Montmorency, Enghien, Soisy). 
          Cette organisation nous permet de limiter les temps de trajet et de vous proposer des créneaux 
          cohérents, que vous soyez en copropriété ou en pavillon.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre protocole d'intervention : diagnostic contextuel et méthode sur mesure",
      html: `
        <p>
          Chaque prestation dans le Val-d'Oise commence par un diagnostic qui prend en compte les 
          spécificités locales. Nous identifions d'abord le type de surface à traiter et son niveau 
          d'encrassement, puis nous évaluons les contraintes d'accès et les priorités opérationnelles.
        </p>
        <p class="mt-4">
          Pour les <strong>parties communes de copropriété</strong>, nous analysons le type de moquette 
          (bouclée, velours, aiguilletée), repérons les zones à forte fréquentation (entrée, ascenseur, 
          paliers) et adaptons notre méthode au contexte urbain ou résidentiel. Sur les <strong>textiles 
          à domicile</strong>, nous examinons la nature du tissu, les zones de frottement, les taches 
          spécifiques et les éventuelles odeurs pour calibrer notre intervention.
        </p>
        <p class="mt-4">
          Pour les <strong>parkings souterrains</strong>, nous tenons compte de la surface (petit parking 
          résidentiel ou grand ensemble), du type de sol (béton, enrobé) et des contraintes techniques 
          (ventilation, évacuation de l'eau). Sur les <strong>balcons et terrasses</strong>, nous adaptons 
          notre méthode selon le matériau (carrelage, bois, pierre), l'exposition (pollution urbaine ou 
          végétation) et l'accès à l'eau.
        </p>
        <p class="mt-4">
          Le protocole de nettoyage proprement dit combine plusieurs étapes : pré-aspiration ou balayage, 
          détachage ciblé des zones sensibles, nettoyage mécanique adapté au support (injection-extraction 
          pour les moquettes, extraction douce pour les textiles délicats, autolaveuse pour les parkings), 
          rinçage sans résidu et séchage maîtrisé. Nous terminons systématiquement par les finitions : 
          bordures, angles, plinthes et points de contact.
        </p>
        <p class="mt-4">
          À l'issue de l'intervention, nous effectuons un contrôle visuel, validons le résultat avec vous 
          et vous transmettons des recommandations d'entretien adaptées à votre situation (fréquences 
          optimales, points sensibles à surveiller, protections éventuelles). Pour les copropriétés qui 
          souhaitent mettre en place un suivi régulier, nous proposons des contrats récurrents avec un 
          ajustement du protocole si besoin.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique
  // =========================
  logistics:
    "Dans le Val-d'Oise, nous planifions nos interventions par secteurs géographiques pour optimiser les trajets et vous garantir des créneaux cohérents. Que vous soyez en copropriété (avec badges d'accès, ascenseurs, stationnement visiteurs) ou en pavillon (avec allées privées, portails, stationnement résidentiel), nous anticipons les contraintes logistiques en amont pour que l'intervention se déroule dans les meilleures conditions.",

  // =========================
  // FAQ optimisée SEO + conversion + style naturel
  // =========================
  faq: [
    {
      question: "Dans quelles villes du Val-d'Oise intervenez-vous ?",
      answer:
        "Nous couvrons l'ensemble du département : Argenteuil, Sarcelles, Cergy, Pontoise, Ermont, Franconville… et toutes les communes du Val-d’Oise. Nous intervenons aussi bien en copropriété qu'à domicile ou en pavillon.",
    },
    {
      question: "Comment organisez-vous vos interventions sur un département aussi étendu ?",
      answer:
        "Nous travaillons par secteurs géographiques : Est 95 (Sarcelles, Garges, Gonesse), Ouest 95 (Argenteuil, Bezons, Cormeilles), vallée de l'Oise (Cergy-Pontoise, Éragny) et vallée de Montmorency (Montmorency, Enghien, Soisy). Cette organisation nous permet de limiter les temps de trajet et de vous proposer des créneaux réalistes. Une fois que vous nous contactez, nous vous répondons sous 24h et planifions l'intervention sous 3 à 7 jours selon le secteur.",
    },
    {
      question: "Faites-vous le nettoyage des moquettes de parties communes en copropriété ?",
      answer:
        "Tout à fait. Nous intervenons sur les halls d'entrée, paliers, couloirs et cages d'escalier. Notre protocole s'adapte au type de moquette (bouclée, velours, aiguilletée) et au niveau d'encrassement. Nous travaillons méthodiquement par zones et terminons toujours par les finitions (bordures, angles, plinthes) pour un rendu homogène. La coordination avec le syndic ou le gardien nous permet de minimiser la gêne pour les résidents.",
    },
    {
      question: "Nettoyez-vous les canapés, tapis et matelas à domicile ?",
      answer:
        "C'est effectivement l'une de nos prestations principales. Nous nous déplaçons chez vous pour nettoyer canapés, fauteuils, tapis et matelas. Le protocole varie selon le textile et le type de taches (alimentaires, grasses, organiques). Nous procédons par détachage manuel précis, extraction douce adaptée au tissu, rinçage complet et, si nécessaire, désodorisation (pour les odeurs d'animaux, d'humidité ou de tabac). Le tout sans sur-humidifier et avec un séchage contrôlé.",
    },
    {
      question: "Proposez-vous le nettoyage de parkings souterrains dans le Val-d'Oise ?",
      answer:
        "Nous intervenons régulièrement dans les parkings souterrains et semi-enterrés de copropriétés. Nous traitons les zones de circulation, les places de stationnement, les rampes d'accès et les zones techniques. Selon la surface, nous utilisons une autolaveuse ou une monobrosse, nous traitons les traces de pneus et les dépôts noirs, puis nous gérons l'évacuation de l'eau et la sécurisation (signalisation, prévention de la glissance). Tout est coordonné avec le syndic pour limiter l'impact sur les résidents.",
    },
    {
      question: "Intervenez-vous aussi sur les balcons et terrasses de maisons et appartements ?",
      answer:
        "Nous nettoyons effectivement les balcons et terrasses, qu'ils soient en appartement ou en pavillon. Le décrassage porte sur tous types de surfaces (carrelage, dalles, bois, pierre). Nous traitons les mousses et les dépôts (pollution urbaine ou végétation selon le secteur), puis nous rinçons et finissons soigneusement. Si nécessaire, nous adaptons la méthode (haute pression ajustée ou brossage manuel pour les surfaces fragiles) et nous protégeons les évacuations et les voisins du dessous.",
    },
    {
      question: "Quels sont vos délais et vos tarifs dans le Val-d'Oise ?",
      answer:
        "Nous vous envoyons un devis gratuit sous 24h dès que vous nous transmettez quelques informations : surface en m², photos si possible et adresse exacte pour identifier le secteur géographique. Les tarifs varient selon le type de prestation (moquettes de parties communes, textiles à domicile, parkings, extérieurs). L'intervention a généralement lieu sous 3 à 7 jours selon le secteur et nos disponibilités. Pour les copropriétés qui souhaitent mettre en place un contrat récurrent (trimestriel, semestriel), nous proposons des tarifs dégressifs.",
    },
    {
      question: "Comment préparer votre venue dans une copropriété ou un pavillon ?",
      answer:
        "En copropriété, il suffit de dégager l'accès aux zones à traiter, de prévoir les badges ou codes d'entrée et, si possible, de coordonner avec le gardien. Communiquez-nous également les horaires autorisés et les contraintes de stationnement visiteurs. En pavillon, pensez à libérer les surfaces extérieures (terrasses, balcons) et à prévoir un accès à l'eau si nécessaire. Pour les canapés et tapis, dégagez un peu l'espace autour pour que nous puissions travailler confortablement. Nous vous envoyons une petite checklist lors de la confirmation du rendez-vous.",
    },
  ],

  // =========================
  // Liens internes (villes stratégiques par secteur)
  // =========================
  internalLinks: [
   
  ],

  // =========================
  // SEO (title/description optimisés)
  // =========================
  seo: {
    title: "Nettoyage Professionnel Val-d'Oise (95) | Klinova",
    description:
      "Entreprise de nettoyage dans le Val-d'Oise : moquettes de copropriété, canapés et tapis à domicile, parkings, balcons. Intervention à Cergy, Argenteuil, Sarcelles, Pontoise. Devis gratuit sous 24h. ☎ 06 76 73 86 61",
  },
};