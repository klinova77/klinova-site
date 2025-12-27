import type { DepartmentKln } from "~/types/department-klinova";

export const paris: DepartmentKln = {
  slug: "paris",
  department: {
    name: "Paris",
    code: "75",
  },

  // =========================
  // SEO & Hero
  // =========================
  heroTitle: "Entreprise de nettoyage professionnel à Paris (75)",
  heroKicker: "Tous arrondissements • Intervention 7j/7 • Devis sous 24h",
  heroDescription:
    "Klinova intervient dans tout Paris pour le nettoyage de moquettes (parties communes de copropriété, bureaux), canapés, tapis et matelas à domicile, balcons, terrasses et parkings souterrains. Nous adaptons nos protocoles aux contraintes parisiennes : accès résidence, stationnement limité, horaires stricts, coordination avec syndics et gardiens.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/75-paris-immeuble-haussmannien.webp",
        alt: "Immeuble haussmannien typique de Paris avec façade en pierre et parties communes",
        width: 1200,
        height: 800,
        caption:
          "Immeubles parisiens : halls d'entrée et parties communes où la propreté reflète directement le standing.",
      },
    ],
  },

  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Contraintes d'intervention à Paris (75)",
    items: [
      "Copropriétés haussmanniennes et immeubles anciens avec moquettes d'époque, escaliers parfois classés et exigences esthétiques élevées",
      "Stationnement critique dans la capitale : zones de livraison limitées, PV rapides, créneaux de déchargement strictement encadrés",
      "Accès aux immeubles souvent complexes : codes d'entrée, interphones, ascenseurs étroits ou absents, étages élevés sans monte-charge",
      "Densité de circulation intense dans les halls et parties communes : résidents, visiteurs, livraisons multiples quotidiennes",
      "Parkings souterrains urbains dans des espaces confinés avec ventilation limitée, rampes étroites et contraintes techniques renforcées",
      "Balcons et terrasses premium avec surfaces nobles (pierre naturelle, bois, carrelage haut de gamme) et vues dégagées nécessitant des finitions parfaites",
      "Horaires d'intervention contraints pour respecter la tranquillité des résidents et éviter les heures de pointe",
    ],
  },

  // =========================
  // Sections éditoriales
  // =========================
  sections: [
    {
      id: "contexte",
    title: "Nettoyage professionnel à Paris : exigences et savoir-faire",
  image: "/images/75-immeubles-parisiens.webp", // URL conservée
  imageAlt: "Vue de façades d'immeubles anciens dans un quartier dense de Paris",
  imageCaption:
    "Patrimoine parisien : l'entretien des immeubles anciens exige une maîtrise des accès complexes et des matériaux d'époque.",

      html: `
        <p>
          Paris présente des défis spécifiques en matière de nettoyage professionnel. Les immeubles 
          haussmanniens et les copropriétés de standing imposent des exigences esthétiques élevées : 
          moquettes d'époque dans les parties communes, escaliers parfois classés au patrimoine, 
          halls d'entrée qui représentent le standing de l'immeuble. Dans ce contexte, la propreté 
          devient un marqueur d'image direct pour les résidents comme pour les visiteurs.
        </p>
        <p class="mt-4">
          Sur les <strong>moquettes de parties communes</strong>, l'encrassement est rapide. Les 
          poussières fines urbaines, les traces de circulation intense (résidents, livraisons multiples 
          quotidiennes, visiteurs) et les taches localisées aux points de passage (entrée, boîtes aux 
          lettres, ascenseur, paliers) s'accumulent rapidement. Sans un protocole rigoureux, le rendu 
          se dégrade et l'image de prestige en pâtit.
        </p>
        <p class="mt-4">
          Notre approche parisienne intègre les contraintes logistiques spécifiques de la capitale. 
          Le stationnement en zone de livraison impose des créneaux stricts avec un risque de PV rapide. 
          L'accès aux immeubles nécessite souvent de gérer des codes d'entrée, des interphones, des 
          ascenseurs étroits ou absents. Les horaires doivent être coordonnés avec le syndic ou le 
          gardien pour préserver la circulation dans l'immeuble. Notre protocole combine efficacité 
          technique et discrétion opérationnelle pour obtenir un résultat impeccable sans perturber 
          le quotidien de la copropriété.
        </p>
        <p class="mt-4">
          À <strong>domicile</strong>, nous appliquons la même exigence pour le nettoyage de canapés, 
          tapis et matelas : diagnostic précis, nettoyage contrôlé, finitions soignées et respect du 
          mobilier et des surfaces environnantes. Sur les <strong>balcons et terrasses</strong>, nous 
          portons une attention particulière aux surfaces nobles (pierre, bois, carrelage haut de gamme) 
          et aux vues dégagées qui nécessitent un rendu parfait.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre protocole d'intervention à Paris : rigueur et adaptation",
      html: `
        <p>
          Chaque prestation parisienne commence par un diagnostic approfondi qui tient compte des 
          spécificités locales. Nous analysons d'abord les <strong>parties communes</strong> : type 
          de moquette (d'époque, velours, bouclée), niveau d'encrassement, zones prioritaires (entrée, 
          ascenseur, paliers, escaliers) et éventuels éléments classés ou fragiles.
        </p>
        <p class="mt-4">
          La <strong>logistique parisienne</strong> fait l'objet d'une attention particulière : nous 
          identifions les zones de livraison disponibles et leur durée autorisée, nous organisons l'accès 
          à l'immeuble (codes, étages, ascenseur), nous coordonnons les horaires avec le gardien ou le 
          syndic et nous planifions l'intervention pour éviter les heures de pointe (8h-9h30 et 18h-19h30).
        </p>
        <p class="mt-4">
          Pour les <strong>textiles à domicile</strong>, nous examinons la nature du tissu (matières 
          nobles, textiles délicats), repérons les zones de frottement et identifions les taches, 
          auréoles ou odeurs éventuelles. Sur les <strong>surfaces extérieures</strong> (balcons, 
          terrasses), nous évaluons les matériaux (pierre naturelle, bois, carrelage premium), l'état 
          d'encrassement et les contraintes d'accès à l'eau.
        </p>
        <p class="mt-4">
          Le protocole de nettoyage est ensuite déployé avec méthode. Nous adaptons l'action mécanique 
          aux matériaux : brossage doux pour les textiles nobles, injection-extraction contrôlée si 
          pertinent. Nous sélectionnons les produits selon les supports et leurs sensibilités, effectuons 
          un rinçage ou une neutralisation minutieux, puis terminons par des finitions irréprochables 
          (bordures, plinthes, angles, seuils, éléments décoratifs).
        </p>
        <p class="mt-4">
          L'objectif parisien est d'obtenir un résultat impeccable et homogène, à la hauteur du standing 
          de l'immeuble, tout en minimisant les nuisances sonores et visuelles pour les résidents. En fin 
          d'intervention, nous effectuons un contrôle qualité systématique, validons le résultat avec vous 
          et vous transmettons des recommandations d'entretien pour préserver le résultat dans le temps.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique
  // =========================
  logistics:
    "À Paris, la logistique conditionne la réussite de l'intervention. Le stationnement en zone de livraison impose des créneaux stricts (30-45 minutes maximum) avec un risque de PV rapide. L'accès aux immeubles nécessite souvent de gérer des codes d'entrée, des interphones et des ascenseurs étroits ou absents (ce qui implique un portage dans les étages). Les horaires doivent être coordonnés avec les gardiens et syndics pour respecter la tranquillité des résidents. Pour les prestations à domicile, nous confirmons en amont la configuration de l'appartement, l'accès à l'eau, le temps de séchage nécessaire et la protection du mobilier.",

  // =========================
  // FAQ optimisée SEO + conversion + style naturel
  // =========================
  faq: [
    {
      question: "Dans quels arrondissements de Paris intervenez-vous ?",
      answer:
        "Nous intervenons dans les 20 arrondissements de Paris, sans exception : du 1er au 20e, Rive Gauche comme Rive Droite. Nous couvrons notamment le Marais (3e, 4e), Saint-Germain (6e), les Champs-Élysées (8e), l'Opéra (9e), République (10e, 11e), Nation (12e), Montparnasse (14e), l'Étoile (16e, 17e), Montmartre (18e), les Buttes-Chaumont (19e) et Belleville (20e). Nous travaillons aussi bien en copropriété (parties communes, parkings) qu'à domicile (textiles, terrasses).",
    },
    {
      question: "Comment gérez-vous les contraintes de stationnement à Paris ?",
      answer:
        "Nous planifions rigoureusement chaque intervention en utilisant les zones de livraison autorisées (durée maximale de 30 à 45 minutes). Nous anticipons les horaires pour éviter les PV et coordonnons avec le gardien lorsqu'un accès au parking privé est possible. Pour les interventions longues, nous organisons des rotations de véhicule si nécessaire. Cette communication préalable systématique nous permet de sécuriser la logistique.",
    },
    {
      question: "Pouvez-vous nettoyer les moquettes d'immeubles haussmanniens anciens ?",
      answer:
        "Nous intervenons effectivement sur les moquettes d'époque et les textiles nobles avec un protocole adapté. Nous commençons par un diagnostic préalable du type de moquette (velours, bouclée, nouée main), puis nous effectuons un test sur une zone discrète. Nous privilégions ensuite une méthode douce (brossage manuel, extraction limitée, séchage contrôlé) et respectons scrupuleusement les éléments classés. Pour les immeubles patrimoniaux, la coordination avec le syndic est particulièrement stricte.",
    },
    {
      question: "Quels sont vos délais pour intervenir à Paris ?",
      answer:
        "Nous vous envoyons un devis gratuit sous 24h après réception des informations (surface, photos, contraintes logistiques). Pour une intervention standard, comptez entre 3 et 7 jours selon nos disponibilités et les créneaux du syndic. Si vous avez une urgence (événement, visite, assemblée générale de copropriété), nous pouvons mobiliser un créneau prioritaire sous 48 à 72h, avec un éventuel supplément selon la situation.",
    },
    {
      question: "Nettoyez-vous les canapés et matelas à domicile dans les appartements parisiens ?",
      answer:
        "Nous nous déplaçons effectivement à domicile pour nettoyer les canapés (tissu, cuir, velours, microfibre), fauteuils, tapis et matelas. Notre protocole s'ajuste aux textiles délicats et aux matériaux nobles (soies, lins, velours). Nous procédons par nettoyage sans sur-humidification, protégeons le mobilier environnant et contrôlons le séchage. L'organisation logistique (accès à l'immeuble, étage, portage si absence d'ascenseur) est toujours anticipée.",
    },
    {
      question: "Intervenez-vous dans les parkings souterrains parisiens ?",
      answer:
        "Nous intervenons régulièrement dans les parkings souterrains et semi-enterrés de la capitale. Nous traitons les zones de circulation, les places de stationnement, les rampes d'accès et les zones techniques. Le protocole est spécifiquement adapté aux espaces confinés : gestion de l'eau et de l'évacuation, traitement des traces de pneus et des dépôts noirs, sécurisation renforcée (glissance, signalisation) en tenant compte de la ventilation limitée. Tout est coordonné avec le syndic pour planifier les horaires et minimiser l'impact sur les résidents.",
    },
    {
      question: "Proposez-vous le nettoyage de balcons et terrasses à Paris ?",
      answer:
        "Nous nettoyons effectivement les balcons, terrasses et loggias parisiennes. Le décrassage porte sur tous types de surfaces (pierre naturelle, bois, carrelage, dalles composites). Nous traitons les mousses et les dépôts, puis assurons des finitions soignées. Une attention particulière est portée aux matériaux nobles et aux vues dégagées. Nous gérons l'eau (protection des évacuations, prise en compte des voisins du dessous) et organisons l'accès via l'appartement si aucun point d'eau extérieur n'est disponible.",
    },
    {
      question: "Quelles informations fournir pour obtenir un devis précis à Paris ?",
      answer:
        "Pour un chiffrage exact, transmettez-nous la surface en m² (ou les dimensions), le type de support (moquette, textile, pierre, béton), des photos si possible (état général, taches spécifiques, contexte) et les contraintes logistiques parisiennes : arrondissement, étage, présence ou absence d'ascenseur, possibilités de stationnement, horaires préférés, coordination avec le gardien ou le syndic. Plus le descriptif est détaillé, plus le devis sera juste et l'intervention optimisée.",
    },
  ],

  // =========================
  // Liens internes (arrondissements stratégiques)
  // =========================
  internalLinks: [
    { label: "Paris 16e", href: "/zones-d-intervention/paris/paris-16" },
    { label: "Paris 17e", href: "/zones-d-intervention/paris/paris-17" },
    { label: "Paris 8e", href: "/zones-d-intervention/paris/paris-8" },
    { label: "Paris 7e", href: "/zones-d-intervention/paris/paris-7" },
    { label: "Paris 15e", href: "/zones-d-intervention/paris/paris-15" },
    { label: "Paris 12e", href: "/zones-d-intervention/paris/paris-12" },
    { label: "Paris 9e", href: "/zones-d-intervention/paris/paris-9" },
    { label: "Paris 11e", href: "/zones-d-intervention/paris/paris-11" },
  ],

  // =========================
  // SEO (title/description optimisés)
  // =========================
  seo: {
    title: "Nettoyage Professionnel Paris (75) - Tous Arrondissements | Klinova",
    description:
      "Entreprise de nettoyage à Paris : moquettes de copropriété, canapés et tapis à domicile, parkings, balcons. Intervention du 1er au 20e arrondissement. Devis gratuit sous 24h. ☎ 06 76 73 86 61",
  },
};
