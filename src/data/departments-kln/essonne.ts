import type { DepartmentKln } from "~/types/department-klinova";

export const essonne: DepartmentKln = {
  slug: "essonne",
  department: {
    name: "Essonne",
    code: "91",
  },

  // =========================
  // SEO & Hero
  // =========================
  heroTitle: "Entreprise de nettoyage professionnel en Essonne (91)",
  heroKicker: "Évry, Massy, Palaiseau, Corbeil • Devis sous 24h",
  heroDescription:
    "Klinova intervient dans toute l'Essonne pour le nettoyage de moquettes (copropriétés, bureaux), canapés, tapis et matelas à domicile, balcons, terrasses et parkings. Du plateau de Saclay aux villes nouvelles, nous adaptons nos interventions aux spécificités de chaque territoire : zones d'activité tertiaire, quartiers résidentiels récents, secteurs pavillonnaires étendus.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/91-essonne-quartier-moderne.webp",
        alt: "Vue d'une ville nouvelle en Essonne avec immeubles modernes et espaces verts",
        width: 1200,
        height: 800,
        caption:
          "Villes nouvelles d'Essonne : des ensembles résidentiels modernes nécessitant un entretien régulier des parties communes.",
      },
    ],
  },

  // =========================
  // Spécificités terrain
  // =========================
  challenges: {
    title: "Spécificités d'intervention en Essonne (91)",
    items: [
      "Département contrasté combinant villes nouvelles (Évry-Courcouronnes, Massy), zones d'activité tertiaire (plateau de Saclay, Courtabœuf) et secteurs pavillonnaires étendus",
      "Copropriétés récentes avec matériaux modernes nécessitant des protocoles adaptés pour préserver l'état d'origine",
      "Zones d'activité économique avec bureaux et espaces tertiaires demandant des interventions hors horaires de travail et une coordination facility management",
      "Habitat pavillonnaire dominant dans plusieurs secteurs, impliquant des interventions individuelles avec accès jardins, allées privées et stationnement résidentiel",
      "Balcons et terrasses en zones péri-urbaines exposés à la fois à la pollution urbaine et aux salissures végétales (pollens, feuilles, mousses)",
      "Distances importantes entre interventions nécessitant une organisation géographique par secteurs pour optimiser les tournées",
    ],
  },

  // =========================
  // Sections éditoriales
  // =========================
  sections: [
    {
      id: "contexte",
      title: "Essonne : un territoire aux multiples visages",
      image: "/images/91-essonne-zone-pavillonaire.webp",
      imageAlt: "Quartier moderne en Essonne avec espaces résidentiels et commerciaux",
      imageCaption:
        "Ensembles résidentiels essonniens : des configurations variées demandant des approches différenciées.",
      html: `
        <p>
          L'<strong>Essonne</strong> se caractérise par une grande diversité de situations. Les villes 
          nouvelles comme Évry-Courcouronnes ou Massy concentrent des ensembles résidentiels modernes 
          avec des parties communes récentes. Le plateau de Saclay et la zone d'activité de Courtabœuf 
          regroupent des bureaux et des espaces tertiaires. Au sud et à l'ouest du département, l'habitat 
          pavillonnaire domine largement, avec des maisons individuelles, des jardins et des terrasses.
        </p>
        <p class="mt-4">
          Cette diversité se traduit par des besoins de nettoyage très différents. Dans les copropriétés 
          récentes, l'enjeu est de préserver les matériaux modernes (moquettes techniques, sols composites) 
          et de maintenir l'image des résidences. Dans les zones tertiaires, il faut gérer les contraintes 
          horaires (interventions en soirée ou le week-end) et les volumes importants. Dans l'habitat 
          pavillonnaire, la demande porte davantage sur les textiles à domicile (canapés, tapis, matelas) 
          et les surfaces extérieures (terrasses, allées, balcons).
        </p>
        <p class="mt-4">
          Pour couvrir efficacement ce territoire étendu, nous organisons nos interventions par grands 
          secteurs : Nord-Essonne (Massy, Palaiseau, Orsay), Centre-Essonne (Évry, Corbeil-Essonnes, 
          Grigny), Sud-Essonne (Étampes, La Ferté-Alais) et Ouest-Essonne (Arpajon, Montlhéry). Cette 
          organisation nous permet de vous proposer des créneaux cohérents et de limiter les temps de 
          déplacement.
        </p>
      `,
    },
    {
      id: "process",
      title: "Une méthode adaptée à chaque contexte",
      html: `
        <p>
          Avant chaque intervention, nous évaluons trois dimensions. D'abord, le <strong>type de site</strong> : 
          s'agit-il d'une copropriété récente avec des matériaux sensibles, d'un pavillon avec des textiles 
          et des surfaces extérieures, ou d'un espace tertiaire avec des contraintes horaires spécifiques ? 
          Ensuite, le <strong>niveau de sollicitation</strong> : un hall d'immeuble très fréquenté ne se 
          traite pas comme un salon de maison individuelle. Enfin, les <strong>contraintes pratiques</strong> : 
          accès, stationnement, eau, électricité, horaires possibles.
        </p>
        <p class="mt-4">
          Pour les <strong>copropriétés et bureaux</strong>, l'intervention suit une logique de zones. 
          Nous démarrons par les espaces à fort impact visuel (halls d'entrée, zones d'accueil), poursuivons 
          par les circulations (couloirs, paliers) et terminons par les espaces techniques (locaux, parkings). 
          Chaque zone fait l'objet d'un traitement complet : aspiration ou balayage préalable, nettoyage 
          mécanique adapté au support, rinçage si nécessaire, puis finitions sur tous les détails (bordures, 
          angles, jonctions).
        </p>
        <p class="mt-4">
          Pour les <strong>interventions à domicile</strong>, nous privilégions la précision. Un canapé 
          ou un tapis demande une analyse textile préalable (composition, solidité des couleurs, sensibilité 
          à l'eau), un test sur zone discrète si nécessaire, puis un traitement progressif : détachage manuel 
          des zones problématiques, nettoyage global maîtrisé, extraction sans excès d'eau, séchage contrôlé. 
          Pour les terrasses et balcons, nous adaptons la méthode au matériau (bois, pierre, composite, 
          carrelage) et à l'état d'encrassement.
        </p>
        <p class="mt-4">
          Chaque prestation se termine par une vérification visuelle avec vous, et nous vous remettons 
          systématiquement quelques conseils d'entretien pour préserver le résultat obtenu.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique
  // =========================
  logistics:
    "L'Essonne étant un département étendu, nous planifions nos interventions par grands secteurs géographiques pour optimiser nos déplacements et vous garantir des créneaux réalistes. Selon la nature de la prestation (copropriété, pavillon, bureau), nous anticipons les spécificités : badges et horaires pour les immeubles, accès jardins et allées pour les pavillons, coordination facility pour les espaces tertiaires. Cette organisation préalable nous permet d'arriver avec le bon matériel et de respecter le timing annoncé.",

  // =========================
  // FAQ optimisée SEO + conversion + style naturel + anti-duplicate
  // =========================
  faq: [
    {
      question: "Quelles sont les principales villes de l'Essonne où vous travaillez ?",
      answer:
        "Nous travaillons sur l'ensemble du département. Nos interventions les plus fréquentes se situent à Évry-Courcouronnes, Massy, Palaiseau, Corbeil-Essonnes, Sainte-Geneviève-des-Bois, Viry-Châtillon, Grigny, Athis-Mons, Brétigny-sur-Orge, Étampes et leurs environs. Que vous soyez en ville nouvelle, en zone pavillonnaire ou sur le plateau de Saclay, nous organisons nos tournées pour vous proposer un créneau cohérent.",
    },
    {
      question: "Travaillez-vous aussi dans les bureaux et espaces d'activité du plateau de Saclay ?",
      answer:
        "Nous réalisons effectivement des prestations dans les zones d'activité tertiaire, notamment sur le plateau de Saclay et à Courtabœuf. Pour ne pas perturber l'activité des entreprises, nous intervenons généralement en soirée ou le week-end. Nous coordonnons avec les responsables de site ou le facility management pour gérer les accès, respecter les consignes de sécurité et assurer une remise en état rapide des espaces (séchage accéléré des moquettes pour une réouverture le lendemain matin).",
    },
    {
      question: "Comment gérez-vous les interventions dans l'habitat pavillonnaire ?",
      answer:
        "Dans les pavillons, la logistique est différente de celle des copropriétés. Nous confirmons en amont l'accès au jardin ou à l'allée, le stationnement à proximité, et la configuration intérieure si nous intervenons sur des textiles. Pour les canapés et tapis, nous protégeons systématiquement les sols et les meubles environnants. Pour les terrasses et balcons, nous vérifions l'accès à un point d'eau extérieur ou nous organisons l'acheminement depuis l'intérieur. L'avantage du pavillon est que vous n'avez pas de contraintes de syndic ou d'horaires collectifs : nous fixons ensemble le créneau qui vous convient.",
    },
    {
      question: "Vos délais d'intervention sont-ils les mêmes partout dans le département ?",
      answer:
        "Les délais peuvent légèrement varier selon votre secteur géographique et nos tournées en cours. En règle générale, nous vous envoyons un devis sous 24h et planifions l'intervention entre 3 et 7 jours. Pour les secteurs plus éloignés (sud ou ouest du département), nous regroupons parfois les interventions sur une même journée ou demi-journée, ce qui peut décaler un peu le planning. Dans tous les cas, nous vous communiquons un créneau précis dès la validation du devis.",
    },
    {
      question: "Quelles différences entre le nettoyage d'une moquette en copropriété et celui d'un tapis à domicile ?",
      answer:
        "La moquette en copropriété est généralement de type technique (bouclée, résistante au trafic), fixée au sol, et soumise à un passage quotidien important. Le nettoyage vise alors la durabilité : on privilégie une méthode qui tient dans le temps, avec un séchage maîtrisé pour ne pas gêner la circulation. Le tapis à domicile, lui, est souvent de facture plus fine (laine, soie, synthétique délicat), non fixé, et exposé à des salissures ponctuelles (renversements, taches alimentaires, poils d'animaux). Le traitement est alors plus précis, plus doux, avec un test préalable et un rinçage très soigné pour éviter les auréoles.",
    },
    {
      question: "Proposez-vous des contrats d'entretien régulier pour les copropriétés ?",
      answer:
        "Tout à fait. Pour les copropriétés qui souhaitent maintenir un niveau de propreté constant, nous mettons en place des contrats récurrents (trimestriel, semestriel, annuel). Cela permet de bénéficier de tarifs dégressifs, d'une planification anticipée et d'un suivi régulier. Nous établissons un calendrier avec le syndic, adaptons le protocole si nécessaire selon les retours, et intervenons aux mêmes créneaux pour ne pas perturber la vie de la copropriété. Ce type de contrat convient aussi aux bureaux et espaces tertiaires.",
    },
    {
      question: "Comment préparer une intervention de nettoyage de terrasse ou de balcon ?",
      answer:
        "L'idéal est de dégager la terrasse ou le balcon (meubles de jardin, pots, objets divers) pour que nous puissions traiter toute la surface. Si vous avez un point d'eau extérieur, indiquez-le nous à l'avance. Sinon, nous utiliserons l'eau via l'intérieur du logement. Pensez aussi à vérifier que les voisins du dessous (si vous êtes en appartement) ne seront pas gênés par l'écoulement d'eau. Nous vous donnons toutes ces consignes au moment de la prise de rendez-vous pour que tout se passe bien le jour J.",
    },
  ],

  // =========================
  // Liens internes (villes principales par secteur)
  // =========================
  internalLinks: [
   
  ],

  // =========================
  // SEO (title/description optimisés)
  // =========================
  seo: {
    title: "Nettoyage Professionnel Essonne (91) | Klinova",
    description:
      "Entreprise de nettoyage en Essonne : moquettes copropriété, canapés et tapis domicile, parkings, terrasses. Intervention Évry, Massy, Palaiseau, Corbeil. Devis gratuit sous 24h. ☎ 06 76 73 86 61",
  },
};