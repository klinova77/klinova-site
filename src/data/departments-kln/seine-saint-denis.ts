import type { DepartmentKln } from "~/types/department-klinova";

export const seineSaintDenis: DepartmentKln = {
  slug: "seine-saint-denis",
  department: {
    name: "Seine-Saint-Denis",
    code: "93",
  },

  // =========================
  // SEO & Hero
  // =========================
  heroTitle: "Entreprise de nettoyage en Seine-Saint-Denis (93)",
  heroKicker: "Copropriétés denses • Intervention organisée",
  heroDescription:
    "En Seine-Saint-Denis, Klinova intervient pour le nettoyage de moquettes (parties communes), canapés/tapis/matelas à domicile, balcons/terrasses et parkings. Méthode, rendement et finitions : une approche de maintenance structurée, adaptée aux immeubles à forte fréquentation et aux contraintes d’accès.",

  // =========================
  // Images
  // =========================
images: {
  items: [
    {
      src: "/images/93-seine-saint-denis-klinova.jpg",
      alt: "Vue aérienne d’une résidence ancienne en Seine-Saint-Denis avec immeubles de faible hauteur et tours en arrière-plan",
      width: 1200,
      height: 800,
      caption:
        "Ensemble résidentiel ancien et hétérogène : contraintes variées d’accès, de matériaux et de surfaces à entretenir.",
    },
  ],
},


  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Spécificités d’intervention en Seine-Saint-Denis (93)",
    items: [
      "Copropriétés et résidences très denses : zones de passage fortement sollicitées (halls, ascenseurs, paliers, cages d’escalier).",
      "Moquettes de parties communes : encrassement rapide par poussières fines, traces de circulation et taches localisées.",
      "Parkings souterrains fréquents : dépôts noirs, traces de pneus, rampes et zones techniques avec contraintes d’accès et de sécurité.",
      "Balcons urbains : pollution, dépôts, mousses sur surfaces minérales et accès parfois complexe (étages, absence de point d’eau).",
    ],
  },

  // =========================
  // Sections éditoriales
  // =========================
  sections: [
    {
      id: "contexte",
     title: "Seine-Saint-Denis : densité, fréquentation et exigences de propreté",
image: "/images/93-seine-saint-denis-klinova.avif",
imageAlt: "Immeubles collectifs en Seine-Saint-Denis",

      imageCaption:
        "Immeubles collectifs : la propreté des circulations et des points de contact est centrale pour le confort et l’image.",
      html: `
        <p>
          La <strong>Seine-Saint-Denis (93)</strong> se caractérise par une forte densité d’habitat collectif et des
          résidences où les circulations sont intensément sollicitées au quotidien. Dans ce contexte, la propreté
          des <strong>halls, paliers, ascenseurs et cages d’escalier</strong> devient un enjeu direct d’image et de confort.
          Sur moquette, les poussières fines et les traces de passage s’installent vite et peuvent donner un rendu terne
          si le protocole n’est pas structuré.
        </p>
        <p class="mt-4">
          Notre approche est pensée pour les sites “à rythme élevé” : une intervention <strong>organisée</strong>,
          avec un diagnostic simple et opérationnel, des passages maîtrisés et des <strong>finitions</strong> (bords,
          angles, zones de contact). À domicile, nous appliquons la même logique sur canapés/tapis/matelas :
          nettoyage contrôlé, rendu homogène, et recommandations claires pour la tenue après intervention.
        </p>
      `,
    },
    {
      id: "process",
      title: "Protocole Klinova : diagnostic, action mécanique, finitions",
      html: `
        <p>
          Chaque prestation commence par un <strong>diagnostic</strong> : surfaces, niveau d’encrassement, taches,
          contraintes d’accès (ascenseur, stationnement, horaires). En copropriété, on priorise les zones d’impact :
          entrée, boîtes aux lettres, ascenseur, paliers, couloirs, seuils. Sur textile, on identifie la matière,
          les zones de frottement, les auréoles et les odeurs éventuelles.
        </p>
        <p class="mt-4">
          Le nettoyage est ensuite réalisé avec une <strong>action mécanique adaptée</strong> et des produits choisis
          selon le support. L’objectif est un résultat propre et durable : pas seulement “faire plus clair”, mais
          retrouver un rendu net et homogène, avec un travail de <strong>finitions</strong> sur les bords et les détails.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique (callout)
  // =========================
  logistics:
    "En Seine-Saint-Denis, la réussite d’une intervention tient souvent à l’organisation : accès immeuble, stationnement, ascenseur, badges, horaires autorisés, circulation dans les parties communes. Nous cadrons ces points en amont pour une intervention fluide et propre. Pour les prestations à domicile (canapé/tapis/matelas), nous confirmons aussi les conditions pratiques (pièce, accès à l’eau, temps de séchage).",

  // =========================
  // FAQ
  // =========================
  faq: [
    {
      question: "Intervenez-vous partout en Seine-Saint-Denis (93) ?",
      answer:
        "Oui. Nous intervenons sur l’ensemble du 93, en appartement comme en pavillon, et en copropriété (moquettes de parties communes, parkings, balcons).",
    },
    {
      question: "Nettoyez-vous les moquettes de halls, paliers et couloirs ?",
      answer:
        "Oui. Nous réalisons le décrassage des moquettes de parties communes avec un protocole adapté au type de moquette, au niveau d’encrassement et aux zones de passage prioritaires.",
    },
    {
      question: "Proposez-vous le nettoyage à domicile des canapés et matelas ?",
      answer:
        "Oui. Nous intervenons à domicile pour nettoyer canapés, tapis et matelas, avec un protocole ajusté au textile et à la nature des taches, sans sur-humidifier.",
    },
    {
      question: "Faites-vous le nettoyage de parkings souterrains en copropriété ?",
      answer:
        "Oui. Nous intervenons sur les zones de circulation, places, rampes et zones techniques, en tenant compte des contraintes de sécurité, d’accès et de ventilation.",
    },
    {
      question: "Quels éléments vous aident à chiffrer rapidement ?",
      answer:
        "Le plus simple : surface ou dimensions, type de support (moquette, béton, textile), photos si possible, et contraintes d’accès (étage, ascenseur, stationnement).",
    },
  ],

  // =========================
  // Liens internes (villes “phares”)
  // =========================
 internalLinks: [
  { label: "Montreuil", href: "/zones-d-intervention/seine-saint-denis/montreuil" },
  { label: "Le Raincy", href: "/zones-d-intervention/seine-saint-denis/le-raincy" },
  { label: "Neuilly-sur-Marne", href: "/zones-d-intervention/seine-saint-denis/neuilly-sur-marne" },
  { label: "Noisy-le-Grand", href: "/zones-d-intervention/seine-saint-denis/noisy-le-grand" },
  { label: "Gagny", href: "/zones-d-intervention/seine-saint-denis/gagny" },
  { label: "Livry-Gargan", href: "/zones-d-intervention/seine-saint-denis/livry-gargan" },
],

  // =========================
  // SEO override
  // =========================
  seo: {
    title:
      "Entreprise de nettoyage Seine-Saint-Denis (93) : moquettes, canapés, balcons, parkings | Klinova",
    description:
      "Entreprise de nettoyage en Seine-Saint-Denis (93) : moquettes de copropriété, canapés/tapis/matelas à domicile, balcons/terrasses, parkings souterrains. Intervention organisée, finitions soignées, devis rapide.",
  },
};
