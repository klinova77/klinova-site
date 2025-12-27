import type { DepartmentKln } from "~/types/department-klinova";

export const valDeMarne: DepartmentKln = {
  slug: "val-de-marne",
  department: {
    name: "Val-de-Marne",
    code: "94",
  },

  // =========================
  // SEO & Hero
  // =========================
  heroTitle: "Entreprise de nettoyage professionnel dans le Val-de-Marne (94)",
  heroKicker: "Vincennes, Créteil, Saint-Maur • Devis gratuit sous 24h",
  heroDescription:
    "Klinova intervient dans tout le Val-de-Marne pour le nettoyage de moquettes (parties communes de copropriété), canapés, tapis et matelas à domicile, balcons, terrasses et parkings souterrains. Nous adaptons nos protocoles aux contraintes urbaines : accès résidence, coordination avec les syndics, finitions soignées pour préserver l'image des lieux.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/94-val-de-marne-klinova.webp",
        alt: "Résidence moderne dans le Val-de-Marne avec parties communes et espaces collectifs",
        width: 1200,
        height: 800,
        caption:
          "Copropriétés Val-de-Marne : des halls et circulations à forte fréquentation nécessitant des protocoles de maintenance structurés.",
      },
    ],
  },

  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Contraintes d'intervention dans le Val-de-Marne (94)",
    items: [
      "Densité résidentielle élevée avec halls d'entrée, paliers et circulations soumis à un trafic quotidien intense (résidents, livraisons, poussettes, animaux domestiques)",
      "Nombreux parkings souterrains avec poussières fines, traces de pneus, rampes d'accès et zones techniques nécessitant des contraintes de ventilation et horaires stricts",
      "Habitat mixte combinant collectif dense et zones pavillonnaires, imposant des protocoles différenciés selon la configuration (ascenseur, stationnement, local poubelles, accès parties communes)",
      "Balcons et terrasses urbains exposés à la pollution atmosphérique, aux dépôts carbonés et aux mousses sur surfaces minérales, avec des accès parfois complexes en étages élevés sans point d'eau",
      "Coordination logistique serrée : badges d'immeuble, créneaux syndic ou gestionnaire, horaires autorisés, circulation des résidents à préserver",
    ],
  },

  // =========================
  // Sections éditoriales
  // =========================
  sections: [
    {
      id: "contexte",
   title: "Val-de-Marne : densité urbaine et exigences de propreté",
  image: "/images/94-val-de-marne-klinova.jpg", // URL conservée
  imageAlt: "Rue de centre-ville dans le Val-de-Marne avec immeubles résidentiels de faible hauteur",
  imageCaption:
    "Centres-villes du 94 : un entretien rigoureux des immeubles de standing pour préserver le cadre de vie des résidents.",
      html: `
        <p>
          Le <strong>Val-de-Marne</strong> présente une forte densité résidentielle, particulièrement 
          dans les communes limitrophes de Paris comme Vincennes, Charenton-le-Pont ou Saint-Mandé, 
          ainsi que dans les pôles urbains structurants tels que Créteil ou Vitry-sur-Seine. Cette 
          configuration génère une sollicitation intense des parties communes : passages quotidiens 
          multiples, livraisons e-commerce, poussettes, animaux domestiques et interventions 
          techniques ponctuelles.
        </p>
        <p class="mt-4">
          Sur les <strong>moquettes de parties communes</strong>, l'encrassement est progressif mais 
          tenace. Les poussières fines urbaines, les taches localisées (boue, liquides) et les marques 
          de circulation aux points de friction s'accumulent rapidement. Sans un protocole structuré, 
          le rendu se dégrade et l'image de la résidence en pâtit directement.
        </p>
        <p class="mt-4">
          Notre approche privilégie la tenue dans le temps : un protocole reproductible, des passages 
          méthodiques par zones, des finitions systématiques (bordures, plinthes, seuils) et une 
          organisation coordonnée avec le syndic ou le gestionnaire (accès, ascenseur, horaires, 
          minimisation des nuisances). À <strong>domicile</strong>, nous appliquons la même logique 
          pour les textiles d'ameublement (canapés, tapis, matelas) : efficacité, contrôle et rendu net.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre protocole d'intervention : diagnostic, action et contrôle qualité",
      html: `
        <p>
          Chaque prestation débute par un diagnostic opérationnel structuré. Nous identifions les 
          <strong>zones d'impact prioritaires</strong> dans les parties communes (entrée, boîtes aux 
          lettres, ascenseur, paliers, angles), analysons le type de moquette, évaluons le niveau 
          d'encrassement et repérons les taches localisées.
        </p>
        <p class="mt-4">
          Pour les <strong>textiles à domicile</strong>, nous examinons la nature du tissu (coton, 
          synthétique, microfibre, velours), identifions les zones de frottement et détectons les 
          auréoles ou odeurs éventuelles (animaux, humidité, tabac). Les <strong>contraintes 
          logistiques</strong> sont également évaluées : accès à l'immeuble, stationnement, ascenseur, 
          créneaux autorisés, circulation des résidents.
        </p>
        <p class="mt-4">
          Le protocole de nettoyage est ensuite appliqué méthodiquement. Nous procédons par action 
          mécanique contrôlée (brossage, injection-extraction si pertinent), utilisons des produits 
          adaptés au support, effectuons un rinçage ou une neutralisation selon la nécessité, puis 
          terminons par des finitions systématiques (bordures, plinthes, seuils, points de contact). 
          L'objectif est d'obtenir un résultat propre et homogène, sans zones négligées.
        </p>
        <p class="mt-4">
          En fin d'intervention, nous effectuons un contrôle visuel qualité, validons le résultat 
          avec vous ou le gestionnaire, et vous transmettons des recommandations d'entretien courant 
          pour maintenir le résultat (fréquences adaptées, protections à envisager, points sensibles 
          à surveiller).
        </p>
      `,
    },
  ],

  // =========================
  // Logistique
  // =========================
  logistics:
    "Dans le Val-de-Marne, nous planifions les interventions en intégrant toutes les contraintes réelles : accès à l'immeuble (badges, interphones), stationnement (zones souvent limitées), ascenseur (capacité, fréquentation), créneaux syndic ou gestionnaire, circulation dans les parties communes. Pour les prestations à domicile (canapés, tapis, matelas), nous confirmons également la logistique en amont : configuration de la pièce, accès à l'eau, temps de séchage nécessaire et ventilation disponible. Une organisation anticipée garantit une intervention fluide.",

  // =========================
  // FAQ optimisée SEO + conversion + style naturel
  // =========================
  faq: [
    {
      question: "Dans quelles villes du Val-de-Marne intervenez-vous ?",
      answer:
        "Nous couvrons l'ensemble du département : Créteil, Vincennes, Saint-Maur-des-Fossés, Vitry-sur-Seine, Champigny-sur-Marne, Nogent-sur-Marne, Fontenay-sous-Bois, Charenton-le-Pont, Saint-Mandé, Ivry-sur-Seine, Maisons-Alfort, Alfortville et toutes les communes environnantes. Nous intervenons aussi bien en copropriété (parties communes, parkings) qu'à domicile (textiles d'ameublement).",
    },
    {
      question: "Comment nettoyez-vous les moquettes de halls, paliers et couloirs ?",
      answer:
        "Nous adaptons notre protocole au type de moquette (bouclée, velours, aiguilletée) et au niveau d'encrassement. L'intervention comprend une pré-aspiration haute puissance, un détachage ciblé, une injection-extraction contrôlée si nécessaire, un rinçage sans résidu et un séchage maîtrisé. Nous travaillons méthodiquement par zones et terminons toujours par des finitions systématiques (bordures, plinthes, seuils, angles). L'organisation est coordonnée avec le syndic ou le gardien pour minimiser la gêne des résidents.",
    },
    {
      question: "Le nettoyage d'un canapé ou d'un matelas risque-t-il d'abîmer le textile ?",
      answer:
        "Non, si le protocole est bien adapté. Nous ajustons notre méthode selon le textile (matière, trame, couleurs, sensibilité), le type de tache (organique, grasse, auréole) et le niveau d'encrassement. L'objectif est d'obtenir un nettoyage efficace et contrôlé, sans sur-humidification ni décoloration. Si nécessaire, nous effectuons un test préalable sur une zone discrète.",
    },
    {
      question: "Quels sont vos délais et durées d'intervention dans le Val-de-Marne ?",
      answer:
        "Les délais et durées varient selon le type de prestation et le niveau d'encrassement. Après réception de quelques informations (surface en m², photos si possible, contraintes logistiques), nous vous communiquons un créneau réaliste et une durée estimative. Pour les prestations standard, comptez un devis sous 24h et une intervention sous 3 à 7 jours selon nos disponibilités.",
    },
    {
      question: "Nettoyez-vous les parkings souterrains de copropriété dans le Val-de-Marne ?",
      answer:
        "Nous intervenons effectivement dans les parkings souterrains et aériens. Nous traitons les zones de circulation, les places de stationnement, les rampes d'accès et les zones techniques. Le protocole est spécifique : gestion de l'eau et de son évacuation, traitement des traces de pneus et des dépôts noirs, sécurisation (prévention de la glissance, signalisation) et respect des contraintes de ventilation. Tout est coordonné avec le syndic pour une planification optimale.",
    },
    {
      question: "Combien de temps faut-il pour qu'une moquette sèche après le nettoyage ?",
      answer:
        "Le temps de séchage varie entre 6 et 12 heures en conditions standard, selon l'épaisseur de la moquette, la ventilation et la température ambiante. Notre méthode limite l'eau résiduelle grâce à une extraction poussée et des passes contrôlées. Nous vous fournissons également des consignes de ventilation précises pour optimiser le séchage et éviter toute ré-humidification.",
    },
  ],

  // =========================
  // Liens internes (villes principales + ajouts stratégiques)
  // =========================
  internalLinks: [
   { label: "Vincennes", href: "/zones-d-intervention/val-de-marne/vincennes" },
    { label: "Saint-Maur", href: "/zones-d-intervention/val-de-marne/saint-maur-des-fosses" },
    { label: "Nogent-sur-Marne", href: "/zones-d-intervention/val-de-marne/nogent-sur-marne" },
    { label: "Charenton", href: "/zones-d-intervention/val-de-marne/charenton-le-pont" },
    { label: "Fontenay", href: "/zones-d-intervention/val-de-marne/fontenay-sous-bois" },
    { label: "Saint-Mandé", href: "/zones-d-intervention/val-de-marne/saint-mande" },
  ],

  // =========================
  // SEO (title/description optimisés)
  // =========================
  seo: {
    title: "Nettoyage Professionnel Val-de-Marne (94) | Klinova",
    description:
      "Entreprise de nettoyage dans le Val-de-Marne : moquettes de copropriété, canapés et tapis à domicile, parkings, balcons. Intervention à Créteil, Vincennes, Saint-Maur. Devis gratuit sous 24h. ☎ 06 76 73 86 61",
  },
};
