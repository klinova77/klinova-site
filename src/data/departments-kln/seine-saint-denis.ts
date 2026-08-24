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
  heroTitle: "Nettoyage professionnel en Seine-Saint-Denis (93)",
  heroKicker: "Montreuil • Saint-Denis • Pantin • Noisy-le-Grand • Devis rapide",
  heroDescription:
    "Habitat collectif dense, circulations intenses, copropriétés à fort trafic : la Seine-Saint-Denis demande des protocoles robustes qui tiennent dans le temps. Klinova intervient dans tout le 93 pour redonner éclat aux moquettes de parties communes, canapés et tapis à domicile, parkings souterrains et balcons urbains. Organisation rigoureuse, finitions soignées, résultat durable.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/93-seine-saint-denis-klinova.jpg",
        alt: "Ensemble résidentiel en Seine-Saint-Denis avec immeubles collectifs et espaces verts",
        width: 1200,
        height: 800,
        caption:
          "Résidences du 93 : des parties communes très sollicitées qui méritent un entretien professionnel régulier.",
      },
    ],
  },

  // =========================
  // Spécificités terrain (reformulé en expertise)
  // =========================
  challenges: {
    title: "Ce que nous maîtrisons en Seine-Saint-Denis",
    items: [
      "Copropriétés à fort trafic : halls, paliers, escaliers et ascenseurs sollicités du matin au soir — protocoles conçus pour durer",
      "Moquettes de parties communes encrassées rapidement : poussières urbaines, traces de circulation, salissures localisées — méthode à rendement maîtrisé",
      "Parkings souterrains avec dépôts noirs et traces de pneus : autolaveuses, gestion de l'eau, sécurisation des zones glissantes",
      "Balcons urbains exposés à la pollution : décrassage des dalles minérales, traitement des mousses, finitions soignées",
      "Terrasses et cours intérieures : dépôts, mousses, zones ombragées — décrassage + finitions soignées sans abîmer les supports",
      "Logistique serrée : badges, horaires stricts, stationnement limité — nous anticipons chaque contrainte avec le syndic",
    ],
  },

  // =========================
  // Sections éditoriales (optimisées conversion)
  // =========================
  sections: [
    {
      id: "contexte",
      title: "Le 93, un département où la propreté compte double",
      image: "/images/93-seine-saint-denis-klinova.avif",
      imageAlt: "Vue d'immeubles collectifs en Seine-Saint-Denis avec espaces communs",
      imageCaption:
        "Habitat collectif dense : la propreté des circulations conditionne le confort quotidien et l'image de la copropriété.",
      html: `
        <p>
          En <strong>Seine-Saint-Denis</strong>, les parties communes travaillent dur. Halls 
          d'entrée, paliers, cages d'escalier, ascenseurs — tout est sollicité du matin au soir 
          par les résidents, les visiteurs, les livreurs. Dans ce contexte de forte fréquentation, 
          la propreté n'est pas un détail : c'est un marqueur direct de la qualité de vie dans 
          l'immeuble.
        </p>
        <p class="mt-4">
          Les <strong>moquettes de parties communes</strong> encaissent le plus gros de la charge. 
          Poussières fines urbaines, traces de semelles, salissures aux points de passage (entrée, 
          boîtes aux lettres, ascenseur) — l'encrassement est rapide, souvent en quelques semaines. 
          Un nettoyage superficiel ne suffit pas : il faut des protocoles qui extraient la saleté 
          en profondeur et qui tiennent dans le temps.
        </p>
        <p class="mt-4">
          C'est exactement notre approche. Nous privilégions des <strong>méthodes à rendement 
          maîtrisé</strong> — efficaces sur les grandes surfaces, mais sans sacrifier les finitions. 
          Bordures, angles, seuils, zones de contact visuel : chaque détail compte pour un résultat 
          qui se voit et qui dure.
        </p>
        <p class="mt-4">
          À <strong>domicile</strong>, nous appliquons la même rigueur pour les canapés, tapis et 
          matelas. Diagnostic précis, nettoyage contrôlé, séchage maîtrisé, recommandations 
          d'entretien. L'objectif : un résultat homogène qui prolonge la durée de vie de vos 
          textiles.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre méthode, conçue pour les copropriétés à fort trafic",
      html: `
        <p>
          Chaque intervention en Seine-Saint-Denis commence par un <strong>diagnostic 
          opérationnel</strong>. En copropriété, nous identifions les zones à fort passage 
          (entrée, boîtes aux lettres, ascenseur, paliers), analysons le type de moquette 
          (bouclée, velours, aiguilletée) et évaluons le niveau d'encrassement zone par zone.
        </p>
        <p class="mt-4">
          La <strong>logistique</strong> est anticipée en amont. Nous coordonnons avec le syndic 
          ou le gardien pour caler les horaires (souvent tôt le matin ou en fin de journée), 
          gérer les badges d'accès et identifier les possibilités de stationnement. L'objectif : 
          intervenir efficacement sans bloquer les circulations ni gêner les résidents.
        </p>
        <p class="mt-4">
          Le <strong>protocole de nettoyage</strong> combine action mécanique et finitions 
          systématiques. Sur les moquettes, nous procédons par zones : aspiration préalable, 
          détachage ciblé des points critiques, nettoyage mécanique (injection-extraction ou 
          monobrosse selon le support), rinçage sans résidu, séchage contrôlé. Et toujours : 
          finitions bordures, angles, seuils — tout ce qui fait la différence visuellement.
        </p>
        <p class="mt-4">
          Pour les <strong>textiles à domicile</strong>, nous commençons par un diagnostic 
          matière. Nature du tissu, zones de frottement, taches et odeurs éventuelles — tout 
          est identifié avant le moindre traitement. Ensuite, nous procédons par étapes : 
          détachage manuel, nettoyage global contrôlé, extraction douce, séchage maîtrisé.
        </p>
        <p class="mt-4">
          À la fin de chaque prestation, nous validons le résultat avec vous ou le gestionnaire. 
          Si un détail mérite un second passage, nous le traitons sur place. Et nous vous 
          transmettons des recommandations d'entretien pour prolonger le bénéfice de notre 
          intervention.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique (reformulé en avantage client)
  // =========================
  logistics:
    "En Seine-Saint-Denis, la logistique fait partie de la prestation. Nous anticipons les badges d'accès, les horaires stricts imposés par les copropriétés et les contraintes de stationnement. Pour les interventions à domicile, nous confirmons la configuration de la pièce, l'accès à l'eau et les conditions de séchage. Cette préparation en amont vous garantit une intervention fluide et un résultat à la hauteur.",

  // =========================
  // FAQ optimisée SEO (featured snippets) + conversion + style naturel
  // =========================
  faq: [
    {
      question: "Quelles villes de Seine-Saint-Denis couvrez-vous ?",
      answer:
        "Tout le département. Nos interventions les plus fréquentes ont lieu à Montreuil, Saint-Denis, Aubervilliers, Pantin, Noisy-le-Grand, Bondy, Le Raincy, Gagny, Livry-Gargan, Neuilly-sur-Marne, Villemomble et Rosny-sous-Bois. Copropriétés, appartements particuliers — nous adaptons notre approche à chaque contexte.",
    },
    {
      question: "Comment nettoyez-vous les moquettes de parties communes ?",
      answer:
        "Nous adaptons le protocole au type de moquette et au niveau d'encrassement. L'intervention comprend aspiration préalable, détachage ciblé, nettoyage mécanique (injection-extraction ou monobrosse), rinçage sans résidu et séchage contrôlé. Nous travaillons par zones et terminons toujours par des finitions systématiques : bordures, angles, seuils. Tout est coordonné avec le syndic pour limiter la gêne des résidents.",
    },
    {
      question: "Intervenez-vous à domicile pour les canapés et matelas ?",
      answer:
        "Oui, c'est une prestation courante dans le 93. Nous traitons les canapés (tissu, microfibre, velours), tapis et matelas. Le protocole s'adapte à la nature du textile et au type de taches (organiques, graisses, auréoles) ou d'odeurs (animaux, tabac, humidité). Nettoyage sans sur-humidification, séchage contrôlé, finitions homogènes.",
    },
    {
      question: "Nettoyez-vous les parkings souterrains de copropriété ?",
      answer:
        "Régulièrement. Nous traitons les zones de circulation, places de stationnement, rampes et zones techniques. Le protocole inclut la gestion de l'eau et de l'évacuation, le traitement des traces de pneus et dépôts noirs, et la sécurisation des zones glissantes. Tout est coordonné avec le syndic pour choisir les horaires les moins impactants.",
    },
    {
      question: "Combien de temps dure le séchage d'une moquette ?",
      answer:
        "En conditions normales, comptez 6 à 12 heures selon l'épaisseur de la moquette et la ventilation. Notre méthode limite l'eau résiduelle grâce à une extraction poussée et des passes contrôlées. Nous vous donnons des consignes de ventilation précises pour optimiser le séchage.",
    },
    {
      question: "Proposez-vous des contrats d'entretien récurrent ?",
      answer:
        "Oui. Pour les copropriétés qui souhaitent maintenir un niveau de propreté constant, nous proposons des contrats trimestriels, semestriels ou annuels. Cela inclut un calendrier prédéfini avec le syndic, des tarifs dégressifs et un suivi régulier. Ce type de formule est particulièrement adapté aux immeubles à fort trafic.",
    },
    {
      question: "Combien coûte un nettoyage de moquette en Seine-Saint-Denis ?",
      answer:
        "Le tarif dépend de la surface, du type de moquette et du niveau d'encrassement. Pour les parties communes de copropriété, comptez généralement entre 2 et 4 € HT/m². Les contrats récurrents bénéficient de tarifs dégressifs. Envoyez-nous quelques photos et la superficie — nous répondons sous 24h ouvrées.",
    },
  ],

  // =========================
  // Liens internes (villes principales)
  // =========================


  // =========================
  // SEO (title/description optimisés pour CTR)
  // =========================


seo: {
  title: "Entreprise de Nettoyage en Seine-Saint-Denis (93) | Klinova",
  description:
    "Nettoyage professionnel dans le 93 : moquettes en copropriété et bureaux, canapés et tapis à domicile, parkings, terrasses, balcons. Devis gratuit et rapide.",
},
};