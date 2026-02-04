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
  heroTitle: "Nettoyage professionnel en Essonne (91)",
  heroKicker: "Évry • Massy • Plateau de Saclay • Devis sous 24h",
  heroDescription:
    "Des villes nouvelles aux zones pavillonnaires, Klinova intervient dans toute l'Essonne pour redonner un coup d'éclat à vos espaces : moquettes de copropriété, canapés et tapis à domicile, terrasses encrassées, parkings souterrains. Notre organisation par secteurs géographiques garantit des délais courts et des créneaux adaptés, que vous soyez syndic à Évry, particulier à Brétigny ou facility manager sur le plateau de Saclay.",

  // =========================
  // Images
  // =========================
  images: {
    items: [
      {
        src: "/images/91-essonne-quartier-moderne.webp",
        alt: "Résidence moderne en Essonne avec parties communes et espaces verts entretenus",
        width: 1200,
        height: 800,
        caption:
          "Copropriétés essonniennes : halls lumineux, moquettes techniques et espaces collectifs à maintenir impeccables.",
      },
    ],
  },

  // =========================
  // Spécificités terrain (reformulé en atouts)
  // =========================
  challenges: {
    title: "Ce qui rend l'Essonne unique pour nos interventions",
    items: [
      "Villes nouvelles (Évry-Courcouronnes, Massy) avec des copropriétés récentes et des matériaux modernes que nous savons traiter sans risque",
      "Plateau de Saclay et zone de Courtabœuf : interventions hors horaires de bureau, coordination facility management, séchage express pour réouverture le lendemain",
      "Vastes zones pavillonnaires où nous intervenons directement chez vous pour canapés, tapis, matelas et terrasses — sans contrainte de syndic",
      "Balcons et terrasses exposés à la pollution urbaine ET aux salissures végétales : nous adaptons le protocole (haute pression, brossage, traitement anti-mousse)",
      "Territoire étendu que nous couvrons grâce à une organisation par tournées géographiques : Nord-91, Centre-91, Sud-91, Ouest-91",
    ],
  },

  // =========================
  // Sections éditoriales (optimisées conversion)
  // =========================
  sections: [
    {
      id: "contexte",
      title: "L'Essonne, un département aux mille visages",
      image: "/images/91-essonne-zone-pavillonaire.webp",
      imageAlt: "Quartier pavillonnaire en Essonne avec maisons individuelles et jardins",
      imageCaption:
        "Du pavillon individuel à la résidence collective : chaque configuration appelle une méthode de nettoyage spécifique.",
      html: `
        <p>
          L'<strong>Essonne</strong> mêle des réalités très différentes. À Massy ou Palaiseau, vous 
          trouverez des copropriétés récentes aux halls soignés et aux moquettes techniques. Sur le 
          plateau de Saclay, des espaces tertiaires accueillent chercheurs et entreprises qui exigent 
          une propreté irréprochable. Plus au sud, vers Étampes ou Brétigny, l'habitat pavillonnaire 
          domine — avec des demandes centrées sur les textiles d'intérieur et les terrasses.
        </p>
        <p class="mt-4">
          Cette diversité, nous la connaissons bien. Elle nous oblige à adapter nos protocoles, nos 
          horaires et notre matériel à chaque situation. C'est aussi ce qui rend notre métier intéressant : 
          traiter une moquette de hall d'immeuble n'a rien à voir avec nettoyer un canapé en lin dans 
          un pavillon, et encore moins avec décaper une terrasse en pierre reconstituée envahie de mousse.
        </p>
        <p class="mt-4">
          Pour vous répondre efficacement, nous avons structuré notre couverture en quatre secteurs : 
          <strong>Nord-Essonne</strong> (Massy, Palaiseau, Orsay, Verrières-le-Buisson), <strong>Centre-Essonne</strong> 
          (Évry-Courcouronnes, Corbeil, Grigny, Ris-Orangis), <strong>Sud-Essonne</strong> (Étampes, 
          Dourdan, La Ferté-Alais) et <strong>Ouest-Essonne</strong> (Arpajon, Montlhéry, Longjumeau). 
          Quand vous nous contactez, nous vous proposons un créneau cohérent avec nos tournées en cours.
        </p>
      `,
    },
    {
      id: "process",
      title: "Notre méthode, du diagnostic à la finition",
      html: `
        <p>
          Chaque intervention démarre par une évaluation rapide mais précise. Nous identifions d'abord 
          le <strong>type de site</strong> : copropriété avec syndic, pavillon individuel ou espace 
          professionnel ? Ensuite, nous évaluons le <strong>niveau d'encrassement</strong> : simple 
          entretien courant ou remise en état après plusieurs années sans nettoyage ? Enfin, nous 
          anticipons les <strong>contraintes pratiques</strong> : accès badge, stationnement, point 
          d'eau, horaires imposés.
        </p>
        <p class="mt-4">
          <strong>En copropriété ou en bureau</strong>, nous procédons par zones. Le hall et l'accueil 
          sont traités en priorité — c'est l'image de l'immeuble. Viennent ensuite les couloirs et 
          paliers, puis les espaces secondaires (locaux techniques, parkings si inclus). Sur chaque 
          zone, le protocole reste le même : aspiration ou balayage, nettoyage mécanique adapté au 
          support, rinçage si nécessaire, finitions soignées sur les bordures et les angles.
        </p>
        <p class="mt-4">
          <strong>À domicile</strong>, nous privilégions la prudence. Avant de traiter un canapé ou 
          un tapis, nous analysons la composition textile, testons une zone discrète, puis avançons 
          progressivement : détachage manuel des zones critiques, nettoyage global sans excès d'eau, 
          extraction soignée, séchage contrôlé. Pour les terrasses, nous adaptons la pression et les 
          produits au matériau (bois, pierre, composite, carrelage) — pas question d'abîmer une surface 
          en voulant la nettoyer.
        </p>
        <p class="mt-4">
          À la fin de chaque prestation, nous faisons le tour avec vous pour valider le résultat. 
          Si un détail vous échappe ou si une zone mérite un second passage, nous le faisons sur 
          place. Nous vous laissons également quelques conseils d'entretien pour prolonger le bénéfice 
          de notre intervention.
        </p>
      `,
    },
  ],

  // =========================
  // Logistique (reformulé en avantage client)
  // =========================
  logistics:
    "L'Essonne est vaste, mais notre organisation par tournées géographiques nous permet de vous proposer des créneaux réalistes sans surcoût de déplacement. Selon votre type de prestation, nous anticipons les spécificités : coordination avec le syndic pour les copropriétés, accès jardin et point d'eau pour les pavillons, horaires décalés pour les bureaux. Cette préparation en amont vous garantit une intervention fluide et un timing respecté.",

  // =========================
  // FAQ optimisée SEO (featured snippets) + conversion + style naturel
  // =========================
  faq: [
    {
      question: "Dans quelles villes de l'Essonne intervenez-vous ?",
      answer:
        "Nous couvrons l'ensemble du département. Nos interventions les plus fréquentes ont lieu à Évry-Courcouronnes, Massy, Palaiseau, Corbeil-Essonnes, Sainte-Geneviève-des-Bois, Viry-Châtillon, Grigny, Athis-Mons, Brétigny-sur-Orge et Étampes. Nos tournées par secteur (Nord, Centre, Sud, Ouest) nous permettent de desservir aussi les communes plus petites avec des délais cohérents.",
    },
    {
      question: "Intervenez-vous dans les bureaux du plateau de Saclay ?",
      answer:
        "Oui, nous réalisons régulièrement des prestations sur le plateau de Saclay et dans la zone de Courtabœuf. Pour ne pas perturber l'activité, nous intervenons en soirée ou le week-end. Nous nous coordonnons avec le facility management pour les accès, les consignes de sécurité et le séchage accéléré des moquettes — l'objectif étant une réouverture normale le lendemain matin.",
    },
    {
      question: "Comment se passe une intervention dans un pavillon ?",
      answer:
        "C'est plus simple qu'en copropriété : pas de syndic, pas de contrainte horaire collective. Nous fixons ensemble le créneau qui vous arrange. Avant notre venue, nous confirmons l'accès (jardin, allée, stationnement) et le point d'eau disponible. Sur place, nous protégeons vos sols et meubles, puis nous traitons les textiles ou surfaces concernés avec le même niveau d'exigence qu'en immeuble.",
    },
    {
      question: "Quel est votre délai d'intervention en Essonne ?",
      answer:
        "Nous envoyons un devis sous 24 heures. L'intervention est généralement planifiée entre 3 et 7 jours selon votre secteur et nos tournées en cours. Pour les zones plus éloignées (sud ou ouest du département), nous regroupons parfois plusieurs interventions sur une même journée, ce qui peut légèrement décaler le planning — mais nous vous communiquons toujours un créneau précis dès validation.",
    },
    {
  question: "Y a-t-il des frais de déplacement en Essonne ?",
  answer:
    "En pratique, non : notre organisation par tournées géographiques nous permet de proposer des créneaux cohérents sans surcoût de déplacement. Lors de la prise de contact, nous calons simplement l’intervention sur le secteur concerné (Nord, Centre, Sud, Ouest) pour optimiser la logistique.",
},

    {
      question: "Quelle différence entre le nettoyage d'une moquette de copropriété et d'un tapis à domicile ?",
      answer:
        "La moquette de copropriété est technique, fixée au sol, conçue pour résister au passage intensif. Nous privilégions une méthode durable avec séchage maîtrisé pour ne pas gêner la circulation. Le tapis à domicile est souvent plus délicat (laine, soie, fibres fines), exposé à des salissures ponctuelles. Le traitement est alors plus minutieux : test préalable, détachage ciblé, rinçage soigné pour éviter les auréoles.",
    },
    {
      question: "Proposez-vous des contrats d'entretien pour les copropriétés ?",
      answer:
        "Oui. Pour les copropriétés qui souhaitent maintenir un niveau de propreté constant, nous proposons des contrats récurrents (trimestriel, semestriel ou annuel). Cela inclut un calendrier prédéfini avec le syndic, des tarifs dégressifs et un suivi régulier. Ce type de contrat convient aussi aux entreprises et aux espaces tertiaires.",
    },
    {
      question: "Comment préparer le nettoyage d'une terrasse ou d'un balcon ?",
      answer:
        "L'idéal est de dégager la surface (meubles, pots, objets) pour que nous puissions traiter l'ensemble. Si vous avez un point d'eau extérieur, signalez-le nous à l'avance. En appartement, pensez à prévenir vos voisins du dessous pour l'écoulement d'eau. Nous vous donnons toutes ces consignes lors de la prise de rendez-vous pour que le jour J se passe sans accroc.",
    },
    {
      question: "Combien coûte un nettoyage de moquette en Essonne ?",
      answer:
        "Le tarif dépend de la surface, du niveau d'encrassement et du type de moquette. Pour une copropriété, comptez généralement entre 2 et 4 € HT/m² selon le volume et la fréquence. Pour un devis précis, envoyez-nous quelques photos et la superficie approximative — nous vous répondons sous 24 heures.",
    },
  ],

  // =========================
  // Liens internes (villes principales par secteur)
  // =========================


  // =========================
  // SEO (title/description optimisés pour CTR)
  // =========================
 seo: {
  title: "Entreprise de Nettoyage en Essonne (91) | Klinova",
  description:
    "Nettoyage professionnel dans le 91 : moquettes en copropriété et bureaux, canapés et tapis à domicile, parkings, terrasses, balcons. Devis gratuit sous 24h.",
},
};