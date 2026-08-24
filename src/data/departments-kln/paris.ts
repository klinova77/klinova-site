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
  heroTitle: "Nettoyage professionnel à Paris (75)",
  heroKicker: "Tous arrondissements • Devis rapide",
  heroDescription:
  "Immeubles haussmanniens, copropriétés de standing, bureaux et appartements parisiens : Paris impose des standards de propreté élevés. Klinova intervient dans les 20 arrondissements pour redonner éclat à vos moquettes de parties communes, canapés et tapis à domicile, parkings souterrains, balcons et terrasses. Logistique parisienne maîtrisée — stationnement, accès, horaires — pour un résultat impeccable sans perturber votre quotidien.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/75-paris-immeuble-haussmannien.webp",
        alt: "Façade d'immeuble haussmannien à Paris avec balcons en fer forgé et pierre de taille",
        width: 1200,
        height: 800,
        caption:
          "Patrimoine parisien : halls d'entrée, escaliers et parties communes où la propreté reflète le standing de l'immeuble.",
      },
    ],
  },

  // =========================
  // Spécificités terrain (reformulé en expertise)
  // =========================
  challenges: {
    title: "Ce que nous maîtrisons à Paris",
    items: [
      "Copropriétés haussmanniennes : moquettes d'époque, escaliers classés, halls de prestige — protocoles adaptés aux matériaux nobles et aux exigences esthétiques",
      "Logistique parisienne : zones de livraison chronométrées, codes d'entrée, ascenseurs étroits ou absents — nous anticipons chaque contrainte",
      "Horaires sur mesure : coordination avec gardiens et syndics, interventions tôt le matin ou en fin de journée pour préserver la tranquillité des résidents",
      "Textiles nobles à domicile : canapés design, tapis d'exception, velours et soies — diagnostic préalable, test systématique, extraction douce",
      "Parkings souterrains urbains : espaces confinés, ventilation limitée, rampes étroites — équipement adapté et gestion rigoureuse de l'eau",
      "Terrasses et balcons parisiens : pierre naturelle, bois, carrelage haut de gamme — nettoyage respectueux avec finitions parfaites",
    ],
  },

  // =========================
  // Sections éditoriales (optimisées conversion)
  // =========================
  sections: [
    {
      id: "contexte",
      title: "Paris, capitale de l'exigence",
      image: "/images/75-immeubles-parisiens.webp",
      imageAlt: "Vue sur les toits de Paris avec immeubles haussmanniens et cheminées typiques",
      imageCaption:
        "Des façades en pierre de taille aux halls d'entrée : chaque détail compte dans la capitale.",
      html: `
        <p>
          À Paris, la propreté n'est pas un détail — c'est un marqueur de standing. Dans les 
          immeubles haussmanniens, le hall d'entrée est la première impression. Une moquette 
          encrassée, des traces sur les marbres, un escalier négligé : autant de signaux qui 
          ternissent l'image d'une copropriété, quelle que soit la qualité des appartements.
        </p>
        <p class="mt-4">
          Les <strong>parties communes parisiennes</strong> subissent un trafic intense. 
          Résidents, visiteurs, livreurs (et ils sont nombreux), prestataires — les passages 
          se multiplient du matin au soir. Les poussières urbaines fines s'infiltrent, les 
          traces de chaussures s'accumulent aux points de circulation (entrée, boîtes aux 
          lettres, ascenseur, paliers). Sans entretien régulier et rigoureux, la dégradation 
          est rapide.
        </p>
        <p class="mt-4">
          À <strong>domicile</strong>, les exigences sont tout aussi élevées. Les appartements 
          parisiens abritent souvent des pièces de valeur : canapés design, tapis d'Orient ou 
          contemporains, textiles nobles (velours, soies, lins). Un nettoyage mal maîtrisé 
          peut compromettre des investissements de plusieurs milliers d'euros. Quant aux 
          <strong>terrasses et balcons</strong> — rares et précieux dans la capitale — ils 
          méritent un traitement à la hauteur de leur valeur immobilière.
        </p>
        <p class="mt-4">
          Notre approche parisienne intègre toutes ces dimensions : expertise technique sur 
          les matériaux nobles, logistique millimétrée (stationnement, accès, horaires), et 
          discrétion opérationnelle pour intervenir sans perturber la vie de l'immeuble. 
          Nous savons que dans la capitale, le moindre détail compte.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre méthode, adaptée aux contraintes parisiennes",
      html: `
        <p>
          Chaque intervention parisienne commence par un diagnostic qui intègre les spécificités 
          locales. Pour les <strong>parties communes</strong>, nous identifions le type de moquette 
          (d'époque, velours, bouclée, nouée), le niveau d'encrassement zone par zone, et les 
          éventuels éléments classés ou fragiles. Nous repérons aussi les points de circulation 
          intense qui nécessitent un traitement renforcé.
        </p>
        <p class="mt-4">
          La <strong>logistique parisienne</strong> est anticipée en amont. Nous identifions les 
          zones de livraison disponibles et leur durée autorisée (généralement 30-45 minutes), 
          nous organisons l'accès à l'immeuble (codes, étages, ascenseur ou portage), et nous 
          coordonnons les horaires avec le gardien ou le syndic. L'objectif : intervenir 
          efficacement sans bloquer l'entrée ni gêner les résidents.
        </p>
        <p class="mt-4">
          Pour les <strong>textiles à domicile</strong>, nous commençons par un diagnostic 
          matière. Composition exacte, solidité des couleurs, sensibilité à l'eau — tout est 
          vérifié avant le moindre traitement. Un test sur zone discrète est systématique pour 
          les pièces de valeur. Ensuite, nous procédons par étapes : détachage manuel des zones 
          critiques, nettoyage global contrôlé, extraction douce, séchage maîtrisé.
        </p>
        <p class="mt-4">
          Sur les <strong>parkings souterrains</strong>, nous adaptons notre équipement aux 
          espaces confinés et à la ventilation limitée. Nous traitons les zones de circulation, 
          les places, les rampes d'accès et les zones techniques. L'évacuation de l'eau est 
          gérée rigoureusement pour éviter toute stagnation.
        </p>
        <p class="mt-4">
          Chaque prestation se termine par une vérification avec vous. Si un détail vous 
          échappe ou si une zone mérite un second passage, nous le faisons sur place. Nous 
          vous transmettons également des recommandations d'entretien pour prolonger le 
          résultat obtenu.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique (reformulé en avantage client)
  // =========================
  logistics:
    "À Paris, la logistique fait partie de la prestation. Nous anticipons les zones de livraison autorisées, leur durée maximale et le risque de PV. Nous organisons l'accès à l'immeuble — codes, interphones, ascenseurs étroits ou absents — et coordonnons les horaires avec gardiens et syndics. Cette préparation en amont vous garantit une intervention fluide, sans surprise, et un respect strict du timing annoncé.",

  // =========================
  // FAQ optimisée SEO (featured snippets) + conversion + style naturel
  // =========================
  faq: [
    {
      question: "Dans quels arrondissements intervenez-vous ?",
      answer:
        "Dans les 20 arrondissements, sans exception. Du Marais (3e, 4e) à Montmartre (18e), de Saint-Germain (6e) à Belleville (20e), en passant par l'Opéra (9e), République (10e, 11e), l'Étoile (16e, 17e) et tous les autres. Copropriétés, appartements particuliers, bureaux — nous adaptons notre approche à chaque contexte.",
    },
    {
      question: "Comment gérez-vous le stationnement à Paris ?",
      answer:
        "Nous utilisons les zones de livraison autorisées en respectant strictement les durées (30-45 minutes). Nous planifions nos créneaux pour éviter les PV et coordonnons avec le gardien quand un accès au parking privé est possible. Pour les interventions longues, nous organisons des rotations de véhicule. Cette anticipation logistique est intégrée à chaque prestation parisienne.",
    },
    {
      question: "Pouvez-vous nettoyer les moquettes d'immeubles haussmanniens ?",
      answer:
        "C'est même une de nos spécialités. Nous intervenons sur les moquettes d'époque avec un protocole adapté : diagnostic préalable du type de textile (velours, bouclée, nouée main), test sur zone discrète, puis méthode douce (brossage manuel, extraction limitée, séchage contrôlé). Pour les escaliers classés ou les éléments patrimoniaux, la coordination avec le syndic est particulièrement rigoureuse.",
    },
    {
      question: "Nettoyez-vous les canapés et tapis à domicile ?",
      answer:
        "Oui, c'est une prestation fréquente dans les appartements parisiens. Nous traitons les canapés (tissu, cuir, velours), fauteuils, tapis et matelas. Pour les textiles nobles — soies, lins, velours — nous procédons avec la plus grande prudence : diagnostic matière, test préalable, extraction douce, séchage maîtrisé. Le mobilier environnant et les parquets sont systématiquement protégés.",
    },
    {
      question: "Intervenez-vous dans les parkings souterrains parisiens ?",
      answer:
        "Régulièrement. Nous traitons les zones de circulation, places de stationnement, rampes d'accès et zones techniques. Notre équipement est adapté aux espaces confinés et à la ventilation limitée. Nous gérons l'évacuation de l'eau, traitons les traces de pneus et sécurisons les zones glissantes. Tout est coordonné avec le syndic pour choisir les horaires les moins impactants.",
    },
    {
      question: "Proposez-vous le nettoyage de terrasses et balcons ?",
      answer:
        "Oui — et à Paris, ces espaces extérieurs ont une valeur particulière. Nous traitons tous types de surfaces : pierre naturelle, bois, carrelage, dalles composites. Le protocole inclut le décrassage, le traitement des mousses et dépôts, et des finitions soignées. Nous gérons l'écoulement d'eau et prenons en compte les voisins du dessous.",
    },
    {
      question: "Combien coûte un nettoyage de moquette à Paris ?",
      answer:
        "Le tarif dépend de la surface, du type de moquette et du niveau d'encrassement. Pour les parties communes de copropriété, comptez généralement entre 2 et 5 € HT/m². Les moquettes d'époque ou les textiles nobles peuvent nécessiter un protocole spécifique avec un tarif ajusté. Envoyez-nous quelques photos et la superficie — nous vous répondons sous 24h ouvrées.",
    },
  ],

  // =========================
  // Liens internes (arrondissements stratégiques)
  // =========================


  // =========================
  // SEO (title/description optimisés pour CTR)
  // =========================
seo: {
  title: "Entreprise de Nettoyage à Paris (75) | Klinova",
  description:
    "Nettoyage professionnel à Paris : moquettes de copropriété et bureaux, canapés et tapis à domicile, parkings souterrains, terrasses et balcons. Devis gratuit et rapide.",
},

};