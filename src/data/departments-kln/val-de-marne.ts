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
  heroTitle: "Entreprise de nettoyage dans le Val-de-Marne (94)",
  heroKicker: "Copropriétés & pavillons • Réponse rapide",
  heroDescription:
    "Dans le Val-de-Marne, Klinova intervient pour le nettoyage de moquettes (copropriété), canapés/tapis/matelas à domicile, balcons/terrasses et parkings. Méthode, finitions et organisation : une approche de maintenance propre, pensée pour préserver l’image des résidences et le confort des occupants.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/94-val-de-marne-klinova.webp",
        alt: "Résidence et copropriété dans le Val-de-Marne, contexte d’intervention Klinova",
        width: 1200,
        height: 800,
        caption:
          "Résidences denses et halls très fréquentés : la qualité du protocole fait la différence sur la tenue dans le temps.",
      },
    ],
  },

  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Spécificités d’intervention dans le Val-de-Marne (94)",
    items: [
      "Forte densité de copropriétés : halls, paliers et circulations exposés à un encrassement rapide (allées/venues, poussettes, livraisons).",
      "Parkings souterrains fréquents : poussières fines, traces de pneus, zones techniques et contraintes d’accès (rampe, ventilation, horaires).",
      "Habitat mixte (pavillons + collectifs) : organisation différente selon stationnement, ascenseurs, local poubelles, parties communes.",
      "Balcons/terrasses urbains : pollution, dépôts, mousses sur surfaces minérales et zones difficiles d’accès en étage.",
    ],
  },

  // =========================
  // Sections éditoriales
  // =========================
  sections: [
    {
      id: "contexte",
      title: "Val-de-Marne : un département dense où la méthode compte",
      image: "/images/bry-sur-marne-klinova.jpg",
      imageAlt: "Hall d’immeuble et parties communes dans le Val-de-Marne",
      imageCaption:
        "Halls, paliers et cages d’escalier : les zones les plus sensibles pour l’image d’une résidence.",
      html: `
        <p>
          Le <strong>Val-de-Marne (94)</strong> combine des secteurs très urbains au contact de Paris et
          des zones plus résidentielles. Cette densité se traduit par des <strong>parties communes très sollicitées</strong> :
          passages quotidiens, livraisons, poussettes, animaux, travaux ponctuels. Sur moquette, l’encrassement est
          souvent progressif mais tenace : poussières fines, taches localisées, marques de circulation.
        </p>
        <p class="mt-4">
          Notre approche vise la <strong>tenue dans le temps</strong> : protocole stable, passages structurés,
          finitions propres, et organisation adaptée à la copropriété (accès, ascenseur, horaires, nuisances minimisées).
          À domicile, nous intervenons aussi sur les textiles d’ameublement (canapés, tapis, matelas) avec une logique
          similaire : efficacité, contrôle, et rendu net.
        </p>
      `,
    },
    {
      id: "process",
      title: "Une intervention Klinova : diagnostic, protocole, rendu",
      html: `
        <p>
          Chaque prestation démarre par un <strong>diagnostic opérationnel</strong> : nature des surfaces,
          niveau d’encrassement, contraintes d’accès et zones prioritaires. En copropriété, on identifie
          les zones d’impact (entrée, boîtes aux lettres, ascenseur, paliers, angles). Sur textile, on repère
          les taches, auréoles, odeurs et zones de frottement.
        </p>
        <p class="mt-4">
          Le protocole est ensuite appliqué de manière <strong>méthodique</strong> : action mécanique contrôlée,
          produits adaptés, rinçage/neutralisation si nécessaire, puis <strong>finitions</strong> (bords, plinthes,
          seuils, points de contact). L’objectif est un résultat propre, homogène, sans “zones oubliées”.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique (callout)
  // =========================
  logistics:
    "Dans le Val-de-Marne, nous planifions les interventions en tenant compte des contraintes réelles : accès immeuble, stationnement, ascenseur, créneaux syndic/gestionnaire, circulation dans les parties communes. Pour les prestations à domicile (canapé/tapis/matelas), nous confirmons la logistique à l’avance (pièce, accès à l’eau, temps de séchage) afin d’éviter toute mauvaise surprise.",

  // =========================
  // FAQ
  // =========================
  faq: [
    {
      question: "Intervenez-vous partout dans le Val-de-Marne (94) ?",
      answer:
        "Oui. Nous intervenons sur l’ensemble du Val-de-Marne, en appartement comme en pavillon, et en copropriété (parties communes, moquettes, parkings, balcons).",
    },
    {
      question: "Faites-vous le nettoyage de moquettes en parties communes ?",
      answer:
        "Oui. Nous intervenons sur halls, paliers, couloirs et circulations. Le protocole est adapté au niveau d’encrassement et au type de moquette, avec une attention particulière aux zones de passage et aux finitions.",
    },
    {
      question: "Peut-on nettoyer un canapé ou un matelas sans l’abîmer ?",
      answer:
        "Oui, dans la majorité des cas. Nous adaptons le protocole au textile (matière, trame, couleurs, sensibilité) et au type de tache. L’objectif est un nettoyage efficace et contrôlé, sans sur-humidifier.",
    },
    {
      question: "Quels sont les délais et la durée d’intervention ?",
      answer:
        "Cela dépend du type de prestation et du niveau d’encrassement. Nous annonçons un créneau réaliste et une durée estimative après quelques informations (surface, photos si possible).",
    },
    {
      question: "Intervenez-vous sur les parkings souterrains de copropriété ?",
      answer:
        "Oui. Nous réalisons le décrassage des parkings (zones de circulation, places, rampes, zones techniques) en tenant compte des contraintes d’accès, de ventilation et de sécurité.",
    },
  ],

  // =========================
  // Liens internes (villes “phares”)
  // =========================
  internalLinks: [
    { label: "Créteil", href: "/zones-d-intervention/val-de-marne/creteil" },
    { label: "Vincennes", href: "/zones-d-intervention/val-de-marne/vincennes" },
    {
      label: "Saint-Maur-des-Fossés",
      href: "/zones-d-intervention/val-de-marne/saint-maur-des-fosses",
    },
    {
      label: "Nogent-sur-Marne",
      href: "/zones-d-intervention/val-de-marne/nogent-sur-marne",
    },
    { label: "Vitry-sur-Seine", href: "/zones-d-intervention/val-de-marne/vitry-sur-seine" },
  ],

  // =========================
  // SEO override
  // =========================
  seo: {
    title:
      "Entreprise de nettoyage Val-de-Marne (94) : moquettes, canapés, balcons, parkings | Klinova",
    description:
      "Entreprise de nettoyage dans le Val-de-Marne (94) : moquettes de copropriété, canapés/tapis/matelas à domicile, balcons/terrasses, parkings souterrains. Intervention organisée, finitions soignées, devis rapide.",
  },
};
