// src/data/cities/lagny-sur-marne.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Lagny-sur-Marne",
  slug: "lagny-sur-marne",
  postalCodes: ["77400"],

  customDescription:
    "À Lagny-sur-Marne, la proximité de la gare de Lagny-Thorigny (ligne P du Transilien) et des axes comme la Francilienne ou la RD 934 génère un trafic constant, impactant la propreté des halls d’immeubles, des parkings souterrains et des balcons. Les copropriétés et résidences près des bords de Marne ou du centre-ville nécessitent un entretien régulier des moquettes, des sols et des espaces extérieurs pour préserver le cadre de vie.",

  // ✅ HUBINTRO = version A
  hubIntro: `<p>Partenaire de confiance pour la maintenance immobilière à Lagny-sur-Marne, Klinova accompagne les syndics de copropriété et les gestionnaires dans la préservation de leur patrimoine. Nous assurons une gestion globale de l’hygiène, intervenant avec la même rigueur technique sur les bâtisses historiques du centre-ville que sur les résidences récentes des coteaux.</p>
<p class="mt-4">Notre approche repose sur une proximité opérationnelle forte, garantissant réactivité et suivi personnalisé pour chaque immeuble. Que ce soit pour des prestations récurrentes ou des remises en état après travaux, nous déployons des protocoles d’hygiène stricts et un reporting transparent pour faciliter le travail des conseils syndicaux et des professionnels.</p>
<ul>
  <li>Protocoles techniques adaptés aux contraintes locales, notamment l’humidité des bords de Marne.</li>
  <li>Gestion autonome des accès via clés et badges Vigik pour des interventions fluides.</li>
  <li>Équipes formées au respect de la tranquillité des résidents et aux normes de sécurité.</li>
</ul>`,

  // ✅ Challenges fusionnés A+B (sans doublons inutiles)
  citySpecificChallenges: [
    "Encrassement accéléré des parkings souterrains et aériens près de la gare de Lagny-Thorigny et des axes routiers (hydrocarbures, poussières fines, traces de pneus).",
    "Usure prématurée des moquettes et sols dans les halls à fort passage (gare, centre-ville, résidences proches de la Francilienne).",
    "Prolifération de mousses, lichens et dépôts verts sur balcons, terrasses et allées en raison de l’hygrométrie élevée liée à la proximité de la Marne.",
    "Accumulation de fientes de pigeons sur les balcons, garde-corps et appuis de fenêtres, notamment dans le centre ancien et près de l’abbatiale.",
    "Contraintes d’accès logistique pour les engins de nettoyage dans les ruelles étroites, zones piétonnes et parkings aux rampes pentues.",
    "Gestion fine des eaux de lavage (parkings, balcons) pour respecter les réseaux existants et l’environnement en bord de Marne."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  // ✅ DISTRICTS = fusion A+B + ajout Saint-Laurent
  districts: [
    "Centre-ville / Quartier de l’abbatiale",
    "Quartier de la Gare (Lagny-Thorigny)",
    "Les Hauts de Lagny",
    "Quartier Saint-Jean",
    "Quartier Saint-Laurent",
    "Quartier des Heurteaux",
    "Quartier du Fort-du-Bois",
    "Quartier de l’Orme Bossu",
    "Quartier des Touvents",
    "Quartier de la Grande Voirie",
    "Orly Parc",
    "Zone industrielle de la Francilienne"
  ],

  // ✅ nearbyCities repris de A (slugs)
  nearbyCities: [
  "vaires-sur-marne",
  "chelles",
  "torcy",
  "champs-sur-marne",
],


  // ✅ LANDMARKS = fusion A+B
  landmarks: [
    "Mairie de Lagny-sur-Marne (Hôtel de Ville, ancien cloître de l’abbaye Saint-Pierre)",
    "Abbatiale Notre-Dame-des-Ardents-et-Saint-Pierre",
    "Fontaine Saint-Fursy (place de la Fontaine)",
    "Gare de Lagny-Thorigny (ligne P du Transilien)",
    "Bords de Marne",
    "Parc des Sports de Lagny-sur-Marne",
    "Base nautique de Lagny",
    "Centre commercial des Quatre Arpents"
  ],

  // ✅ FAQ racine : reprise de l’ancien fichier Lagny (Réécrite proprement)
  faq: [
    {
      question: "Comment se déroule une intervention de nettoyage à Lagny-sur-Marne ?",
      answer:
        "À Lagny-sur-Marne, l’intervention commence par l’identification des accès (ascenseur, stationnement, rampes de parking) et un échange avec le gardien, le syndic ou l’occupant pour valider les zones prioritaires. Nous protégeons les surfaces sensibles, réalisons le nettoyage prévu puis effectuons un tour de contrôle final avec, si besoin, quelques conseils d’entretien adaptés au site."
    },
    {
      question: "Que faut-il préparer avant votre venue à Lagny-sur-Marne ?",
      answer:
        "Rien de très contraignant. Sur les balcons, le fait de déplacer quelques objets facilite le traitement des angles et des évacuations. Pour les moquettes ou tapis, dégager les petits objets au sol est un plus, mais ce n’est pas obligatoire. Dans les parkings, il peut être utile d’anticiper le déplacement de certains véhicules, mais nous restons capables de nous adapter à la configuration réelle le jour J."
    },
    {
      question: "Pouvez-vous intervenir en horaires décalés à Lagny-sur-Marne ?",
      answer:
        "Oui. En complément des créneaux habituels en semaine, nous pouvons intervenir en horaires décalés ou le samedi pour les parkings, halls ou locaux professionnels lorsque la gêne doit être minimale. Les horaires sont définis avec vous ou le syndic en fonction des contraintes de la résidence ou du site."
    }
  ],

  // ✅ Testimonial : version A, plus concrète
  testimonial: {
    text:
      "Klinova a remis en état les moquettes et le parking d’une résidence de Lagny-sur-Marne avec un suivi très clair pour le conseil syndical.",
    author: "C. Dupuis",
    role: "Gestionnaire de copropriété",
    building: "Résidence des Hauts de Lagny"
  },

  ctaOverride: "",

  // ✅ Services : on garde la structure très riche de B, avec ajustements anti-duplication
  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Retrouvez des fibres éclatantes et assainies, sans taches ni allergènes, pour valoriser l’image de vos bureaux, parties communes ou le confort de votre domicile à Lagny-sur-Marne.",
      whyUsBullets: [
        "Expertise locale des immeubles de Lagny-sur-Marne, des quartiers de la gare aux résidences des Hauts de Lagny.",
        "Méthode d’injection-extraction avec matériel professionnel, pour un résultat durable sans résidus.",
        "Logistique optimisée avec interventions aux heures creuses et gestion sécurisée des accès.",
        "Reporting photo et écrit détaillé pour le syndic, avec conseils d’entretien post-intervention."
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les moquettes des halls, paliers et cages d’escaliers subissent un encrassement constant : traces de chaussures, poussières fines apportées par la proximité de la gare de Lagny-Thorigny et des axes comme la Francilienne, ainsi que les taches liées aux allers-retours des résidents. Les copropriétés des quartiers du centre-ville ou des Hauts de Lagny, souvent très fréquentées, voient leurs moquettes s’user prématurément, perdant leur aspect d’origine et donnant une impression de négligence. Pour les syndics et gestionnaires, cela se traduit par des remarques récurrentes des occupants et une dégradation de l’image de l’immeuble.</p>
<p class="mt-4">Un nettoyage professionnel régulier permet de restaurer l’éclat des moquettes, d’éliminer les salissures incrustées et de prolonger leur durée de vie, tout en améliorant le cadre de vie des résidents et la valorisation du patrimoine immobilier.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic précis sur place : état général des moquettes, nature des taches (graisse, boue, traces de chaussures), niveau d’usure et contraintes d’accès (escaliers étroits, ascenseurs, halls ouverts sur rue). Nous identifions aussi les zones de fort passage, typiques des immeubles près de la gare ou des axes routiers, où l’encrassement est plus marqué.</p>
<p>La préparation est essentielle : protection des plinthes, balisage des zones en cours de traitement et organisation par étage pour limiter la gêne. Nous utilisons une méthode d’injection-extraction à l’eau, adaptée aux moquettes des copropriétés, avec plusieurs passes sur les zones critiques comme les devants d’ascenseur et les paliers. Le séchage est optimisé par une extraction puissante et une aération contrôlée, pour un retour à la normale en 4 à 6 heures. Nous adaptons nos protocoles aux spécificités locales, comme l’humidité en rez-de-chaussée ou les moquettes anciennes des immeubles des années 70-80. Enfin, nous conseillons une fréquence de nettoyage tous les 12 à 18 mois pour les parties communes très sollicitées, afin de maintenir un résultat optimal.</p>`,

      specificChallenges: [
        "Fort passage dans les halls des copropriétés proches de la gare de Lagny-Thorigny, accélérant l’usure des moquettes.",
        "Poussières fines et particules liées à la circulation sur la Francilienne, incrustées dans les fibres.",
        "Humidité en rez-de-chaussée pour les immeubles en bord de Marne, favorisant les taches tenaces.",
        "Moquettes anciennes dans les résidences des années 70-80, nécessitant des soins adaptés pour éviter l’effilochage."
      ],

      faqAdditions: [
        {
          question:
            "Nos immeubles près de la gare de Lagny-Thorigny ont des halls très fréquentés. Comment gérez-vous les flux de passage pendant le nettoyage ?",
          answer:
            "Nous intervenons aux heures creuses, généralement en milieu de journée, et organisons le traitement par zones pour laisser un accès partiel. Les résidents sont informés à l’avance via des affiches dans les halls, et nos techniciens balisent les espaces en cours de nettoyage pour éviter tout incident."
        },
        {
          question:
            "Intervenez-vous aussi dans les petites copropriétés ou uniquement dans les grandes résidences ?",
          answer:
            "Nous intervenons dans tous les types de bâtiments, des petites copropriétés de 10 lots aux grandes résidences de 100 logements. Nos protocoles s’adaptent à la taille des escaliers, à la configuration des halls et aux contraintes spécifiques, par exemple des ascenseurs étroits dans les immeubles anciens."
        },
        {
          question:
            "Est-ce que votre méthode de nettoyage abîme les moquettes, surtout si elles sont anciennes ?",
          answer:
            "Non, notre méthode d’injection-extraction est conçue pour préserver les fibres, même fragiles. Nous ajustons la pression et la température de l’eau en fonction du type de moquette, et utilisons des produits adaptés pour éviter tout dommage. Les moquettes anciennes des résidences des années 70-80 sont traitées avec une attention particulière."
        },
        {
          question:
            "Comment se passe l’organisation avec les résidents ? Faut-il prévoir une absence pendant l’intervention ?",
          answer:
            "Aucune absence n’est nécessaire. Nous informons les résidents 48 heures à l’avance par voie d’affichage, et nos techniciens veillent à limiter la gêne en termes de bruit et d’accès. Les interventions sont planifiées pour durer entre 2 et 4 heures par cage d’escalier, avec un séchage rapide pour un retour à la normale dans la journée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking souterrain ou aérien à Lagny-sur-Marne impeccable, sécurisé et sans traces d’huile, pour une circulation fluide et une image valorisante de votre résidence ou entreprise.",
      whyUsBullets: [
        "Expertise des parkings de Lagny-sur-Marne, des résidences aux zones commerciales proches de la Francilienne.",
        "Matériel professionnel adapté (autolaveuse, haute pression) et produits dégraissants homologués.",
        "Interventions planifiées par zones avec horaires flexibles pour limiter la gêne des usagers.",
        "Compte-rendu photo et écrit pour le syndic ou le gestionnaire, avec recommandations d’entretien."
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les parkings souterrains des résidences et les parkings aériens des zones commerciales ou proches de la gare de Lagny-Thorigny subissent un encrassement rapide : poussière noire collante, taches d’huile, marquages effacés et murs salis par les frottements. La proximité de la Francilienne et des axes routiers comme la RD 934 aggrave la situation, avec des dépôts de particules fines et des résidus de pneus qui s’accumulent. Ces salissures, combinées à un éclairage souvent faible, créent une impression d’insécurité et de négligence, tout en augmentant les risques de glissade.</p>
<p class="mt-4">Un nettoyage professionnel complet permet de restaurer la lisibilité des marquages, d’éliminer les dépôts glissants et de redonner une image propre et rassurante aux usagers, qu’il s’agisse de résidents, de clients ou d’employés.</p>`,

      uniqueDeepDive: `<p>Notre intervention débute par un diagnostic technique : état du revêtement (béton, peinture, résine), efficacité des siphons, hauteur sous plafond et accès pour les véhicules de nettoyage. Nous identifions aussi les zones critiques, comme les rampes étroites ou les angles mal ventilés, typiques des parkings souterrains des résidences près du centre-ville ou des Hauts de Lagny.</p>
<p>La préparation inclut un balayage mécanique pour éliminer les gros dépôts, suivi d’un dégagement des déchets et d’une signalisation claire pour organiser la rotation des véhicules par zones. Nous utilisons une autolaveuse pour les surfaces larges et une haute pression contrôlée avec dégraissant professionnel pour les taches d’huile tenaces. Les eaux de lavage sont récupérées et évacuées selon la réglementation, sans risque pour les réseaux. Nous adaptons nos horaires pour intervenir tôt le matin ou en journée creuse, minimisant ainsi la gêne. Enfin, nous recommandons un décrassage complet une à deux fois par an pour les parkings très exposés, comme ceux des zones commerciales ou proches des axes routiers.</p>`,

      specificChallenges: [
        "Poussière noire grasse et résidus de pneus dans les parkings souterrains, liés à la circulation dense sur la Francilienne et la RD 934.",
        "Taches d’huile persistantes et marquages effacés dans les parkings aériens des zones commerciales ou près de la gare.",
        "Rampes étroites et bas plafonds dans les parkings anciens, compliquant l’accès des machines.",
        "Ventilation limitée dans les parkings souterrains, nécessitant une gestion stricte des eaux de lavage et des produits utilisés."
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi nos parkings souterrains à Lagny-sur-Marne sont-ils toujours couverts de poussière noire, même après un nettoyage ?",
          answer:
            "Cette poussière provient des particules fines liées à la circulation dense sur la Francilienne et les axes routiers proches. Elle est grasse et adhère aux sols. Notre méthode combine balayage mécanique et dégraissant professionnel pour éliminer ces dépôts en profondeur, avec une fréquence adaptée d’une à deux fois par an pour maintenir le résultat."
        },
        {
          question:
            "Faut-il vider entièrement le parking pour le nettoyage, ou pouvez-vous travailler par zones ?",
          answer:
            "Nous organisons toujours le nettoyage par zones, en coordination avec le syndic ou le gestionnaire. Cela permet de laisser une partie des places accessibles et de limiter la gêne. Une signalisation claire est mise en place pour guider les usagers pendant l’intervention."
        },
        {
          question:
            "Les taches d’huile anciennes dans notre parking aérien peuvent-elles vraiment disparaître ?",
          answer:
            "Les taches anciennes sont traitées avec des dégraissants professionnels et une haute pression contrôlée. Si le revêtement n’est pas poreux, nous parvenons à atténuer voire à supprimer ces traces. En revanche, sur un béton très abîmé, nous pouvons proposer des solutions complémentaires comme le rebouchage ou un marquage pour masquer les résidus."
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage, surtout dans les parkings souterrains sans évacuation adaptée ?",
          answer:
            "Nous utilisons des autolaveuses équipées de systèmes de récupération des eaux usées, conformes à la réglementation. Les eaux sont évacuées vers des filières dédiées ou, si nécessaire, traitées sur place avant rejet. Aucun résidu n’est laissé dans les siphons ou les réseaux non adaptés."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Un balcon ou une terrasse à Lagny-sur-Marne retrouvant toute sa propreté, prêt à être utilisé sans gêne, pour des moments agréables en extérieur.",
      whyUsBullets: [
        "Connaissance des balcons à Lagny-sur-Marne, des résidences près de la Francilienne aux immeubles en bord de Marne.",
        "Produits et outils professionnels adaptés à chaque type de support, sans risque d’abîmer les surfaces.",
        "Interventions discrètes avec protection des accès, gestion des écoulements et gêne minimale pour le voisinage.",
        "Conseils pratiques après intervention pour préserver la propreté et faciliter l’entretien au quotidien."
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les balcons et terrasses des appartements subissent les dépôts de poussière fine liée à la circulation sur la Francilienne, les feuilles et dépôts verts des arbres des quartiers résidentiels, ainsi que les traces de terre et de graisse après un barbecue ou des jardinières. Les joints noircissent, les angles s’encrassent et les garde-corps deviennent collants, rendant l’espace extérieur peu attrayant. Les occupants finissent par délaisser leur balcon, qui devient un simple lieu de stockage plutôt qu’un espace de détente.</p>
<p class="mt-4">Un nettoyage professionnel permet de redonner à ces surfaces leur aspect d’origine, en éliminant les salissures incrustées et en protégeant les matériaux. Ainsi, le balcon redevient un lieu agréable, valorisant le logement et incitant à en profiter pleinement.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence par la protection des accès (porte-fenêtre, menuiseries) avec des bâches et des rubans adhésifs, ainsi que le déplacement ou la protection des meubles, plantes et objets présents sur le balcon. Nous procédons ensuite à l’enlèvement manuel des gros dépôts comme les feuilles, la terre et les résidus de jardinières, avant d’appliquer un produit nettoyant adapté au support (carrelage, béton, bois composite ou dalles).</p>
<p>Le nettoyage est réalisé avec un brossage méthodique des surfaces, suivi d’un rinçage contrôlé pour éviter les coulures sur la façade ou chez les voisins du dessous. Une attention particulière est portée aux joints, angles et garde-corps, souvent très encrassés. Nous utilisons une pression d’eau douce et maîtrisée pour préserver les matériaux et garantir un résultat uniforme. Enfin, nous conseillons un temps de séchage de 2 à 4 heures selon l’ensoleillement, et fournissons des recommandations pour un entretien simple, comme le balayage régulier et l’usage de produits adaptés.</p>`,

      specificChallenges: [
        "Dépôts de poussière fine et pollution liés à la proximité de la Francilienne et des axes routiers, encrassant rapidement les balcons.",
        "Joints noircis et dépôts verts tenaces sur les balcons exposés aux arbres ou aux jardinières, nécessitant des produits spécifiques.",
        "Gestion de l’eau pour éviter les coulures sur les façades ou chez les voisins, surtout dans les immeubles anciens aux évacuations peu efficaces.",
        "Balcons étroits ou avec garde-corps complexes, rendant l’accès et le nettoyage plus techniques."
      ],

      faqAdditions: [
        {
          question:
            "Le recours à une pression d’eau pour le nettoyage peut-il fragiliser le carrelage ou les joints de mon balcon ?",
          answer:
            "Nous travaillons toujours avec une pression maîtrisée, ajustée au type de revêtement et à l’état des joints. Sur les balcons anciens ou fragilisés, nous réduisons la puissance et privilégions le brossage manuel avec des produits adaptés pour éviter toute détérioration."
        },
        {
          question:
            "Concrètement, comment faites-vous pour limiter les coulures d’eau chez les voisins du dessous ?",
          answer:
            "Nous organisons le rinçage par petites zones en dirigeant l’eau vers les évacuations du balcon. Des raclettes et des microfibres permettent de récupérer l’excédent d’eau, et nous protégeons au besoin certaines zones sensibles avec des bâches afin d’éviter les projections."
        },
        {
          question:
            "Les produits de nettoyage que vous utilisez sont-ils compatibles avec la présence de plantes et d’animaux sur le balcon ?",
          answer:
            "Oui, nous privilégions des produits à faible impact, soigneusement rincés en fin d’intervention. Si vous avez des plantes sensibles ou des animaux, nous l’anticipons au départ pour adapter la chimie, protéger les pots et éviter tout contact direct avec les produits."
        },
        {
          question:
            "Combien de temps faut-il pour que mon balcon soit de nouveau utilisable après votre passage ?",
          answer:
            "En règle générale, comptez entre 2 et 4 heures de séchage, selon l’ensoleillement et la circulation d’air. Nous vous indiquons en fin d’intervention le délai recommandé avant de remettre en place le mobilier ou de marcher à nouveau sur les surfaces."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Un balcon à Lagny-sur-Marne entièrement désinfecté, débarrassé des fientes de pigeons et des odeurs, enfin sécurisé et utilisable sans risque pour votre santé.",
      whyUsBullets: [
        "Connaissance des immeubles de Lagny-sur-Marne, des balcons en étage aux cours intérieures proches des parcs et de la Marne.",
        "Protocole sécurisé incluant équipements de protection, produits virucides et gestion des déchets contaminés.",
        "Interventions discrètes avec protection des accès et du voisinage, pour une gêne minimale.",
        "Compte-rendu détaillé avec photos et conseils pour limiter les récidives et mettre en place des mesures dissuasives."
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les balcons des étages élevés, les loggias et les cours intérieures des immeubles sont souvent envahis par les fientes de pigeons, attirés par les grands arbres des parcs et les corniches des bâtiments. Ces dépôts, en plus d’être inesthétiques, dégagent des odeurs fortes et peuvent transmettre des maladies, rendant l’espace extérieur inutilisable. Les occupants subissent une gêne quotidienne, avec parfois des tensions entre voisins ou avec la copropriété, notamment lorsque les fientes s’accumulent sur les garde-corps ou les vitres.</p>
<p class="mt-4">Un nettoyage professionnel est indispensable pour éliminer ces salissures en profondeur, désinfecter les surfaces et restaurer un environnement sain. Sans intervention adaptée, le problème persiste et s’aggrave, compromettant le confort et la sécurité des résidents.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence par la mise en place de protections strictes : nos techniciens portent des combinaisons, gants, masques FFP2 et lunettes pour éviter tout contact avec les poussières contaminées. Le balcon est isolé avec des bâches pour protéger l’intérieur du logement et limiter la dispersion des particules. Les fientes sèches sont humidifiées avant d’être ramassées manuellement, puis conditionnées dans des sacs étanches dédiés aux déchets contaminés.</p>
<p>Le nettoyage des surfaces (sol, garde-corps, murs) est réalisé avec des produits adaptés, suivis d’une désinfection avec un virucide et bactéricide homologué, en respectant scrupuleusement le temps de contact nécessaire. Après rinçage, le balcon est aéré pendant 24 heures avant toute réutilisation. Nous évacuons les déchets selon une filière spécialisée et pouvons conseiller des solutions de dissuasion, comme des picots ou des filets, pour limiter les retours de pigeons.</p>`,

      specificChallenges: [
        "Balcons des étages élevés et loggias des immeubles proches des parcs ou de la Marne, particulièrement exposés aux fientes de pigeons.",
        "Poussières de fientes sèches très volatiles, nécessitant une humidification préalable pour éviter toute dispersion.",
        "Corrosion des supports métalliques comme les garde-corps et rambardes due à l’acidité des fientes, exigeant un nettoyage et une protection adaptés.",
        "Évacuation des déchets contaminés selon une filière spécialisée, pour respecter les normes sanitaires et environnementales."
      ],

      faqAdditions: [
        {
          question:
            "Quels sont les risques sanitaires liés aux fientes de pigeons sur un balcon ?",
          answer:
            "Les fientes de pigeons peuvent transmettre des maladies comme la cryptococcose ou la salmonellose et provoquer des allergies. Elles dégagent aussi des spores dangereuses en séchant. Un nettoyage professionnel avec désinfection est indispensable pour éliminer ces risques et rendre le balcon sûr."
        },
        {
          question:
            "Les produits utilisés pour la désinfection sont-ils sans danger pour les habitants et les animaux après séchage ?",
          answer:
            "Oui, nous utilisons des produits virucides et bactéricides homologués, qui ne présentent aucun danger une fois secs. Après rinçage et aération, les surfaces sont parfaitement sûres pour les occupants et les animaux domestiques."
        },
        {
          question:
            "Est-ce que le nettoyage peut abîmer la peinture ou le béton du balcon ?",
          answer:
            "Non, nos méthodes et produits sont adaptés à tous les supports comme la peinture, le béton ou le métal. Nous testons systématiquement les produits sur une petite zone avant application et utilisons des outils non abrasifs pour préserver l’intégrité des surfaces."
        },
        {
          question:
            "Que deviennent les fientes et les nids après le nettoyage ?",
          answer:
            "Les fientes et nids sont conditionnés dans des sacs étanches dédiés aux déchets contaminés, puis évacués vers une filière spécialisée. Aucun déchet n’est jeté dans les poubelles classiques, conformément à la réglementation sanitaire."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Des canapés, tapis et matelas à Lagny-sur-Marne retrouvant fraîcheur, propreté et confort, pour un intérieur sain et agréable à vivre au quotidien.",
      whyUsBullets: [
        "Expertise des logements de Lagny-sur-Marne, des résidences familiales aux appartements en centre-ville.",
        "Méthode d’injection-extraction et produits spécifiques pour chaque type de textile et de tache.",
        "Interventions discrètes à domicile, avec respect des espaces de vie et gêne minimale.",
        "Conseils pratiques après intervention pour un entretien durable et efficace des textiles."
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les canapés, tapis et matelas des logements subissent les traces de la vie quotidienne : taches de boissons, de nourriture ou de graisse, poussière accumulée, poils d’animaux et parfois des odeurs tenaces. Les familles avec enfants ou animaux domestiques, ainsi que les logements proches des axes routiers ou des parcs, sont particulièrement exposés à ces salissures. Même avec un entretien régulier, les textiles s’encrassent en profondeur, abritant acariens et allergènes, ce qui peut causer des gênes respiratoires ou des allergies.</p>
<p class="mt-4">Un nettoyage professionnel permet d’éliminer ces saletés incrustées, de désodoriser et d’assainir les textiles, redonnant ainsi un cadre de vie plus sain et plus agréable. Cela permet aussi de prolonger la durée de vie des tissus et de retrouver le plaisir de s’installer sur un canapé ou un tapis propre.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic précis des textiles (coton, laine, synthétique, velours, cuir) et des taches comme la graisse, le vin ou l’urine. Nous appliquons ensuite un pré-traitement ciblé sur les zones les plus salies, en utilisant des produits adaptés à chaque type de fibre et de tache. Pour les textiles délicats ou les matelas, nous ajustons les méthodes pour éviter tout dommage.</p>
<p>Le nettoyage est réalisé par injection-extraction à l’eau, une technique qui permet d’extraire les saletés en profondeur tout en limitant l’humidité résiduelle. Nous veillons à une aération optimale pour accélérer le séchage, généralement en 4 à 6 heures selon la ventilation de la pièce. Nos techniciens adaptent leur intervention aux contraintes du logement, comme l’espace réduit, l’accès ou la nécessité de limiter le bruit, et fournissent des conseils d’entretien pour préserver la propreté des textiles entre deux nettoyages.</p>`,

      specificChallenges: [
        "Logements familiaux avec enfants et animaux à Lagny-sur-Marne, où les taches organiques et les acariens s’accumulent rapidement.",
        "Tissus fragiles ou matelas anciens nécessitant des soins adaptés pour éviter les dégradations.",
        "Pièces peu ventilées ou humides, ralentissant le séchage et exigeant une gestion rigoureuse de l’aération.",
        "Odeurs tenaces liées aux animaux ou à l’humidité, nécessitant des traitements spécifiques pour une élimination durable."
      ],

      faqAdditions: [
        {
          question:
            "Votre méthode de nettoyage permet-elle réellement de diminuer la présence d’acariens et d’allergènes dans les canapés, tapis et matelas ?",
          answer:
            "Oui, le nettoyage par injection-extraction que nous utilisons à Lagny-sur-Marne agit en profondeur dans les fibres. Il permet d’évacuer une grande partie des poussières, acariens et allergènes accumulés, ce qui améliore nettement la qualité de l’air intérieur, notamment dans les pièces de vie et les chambres."
        },
        {
          question:
            "Pouvez-vous éliminer les taches et odeurs d’urine sur un matelas ou un canapé ?",
          answer:
            "Oui, nous utilisons des produits enzymatiques spécifiques pour décomposer les taches et neutraliser les odeurs d’urine. Ces traitements agissent en profondeur sans abîmer les tissus, pour un résultat durable et une hygiène retrouvée."
        },
        {
          question:
            "Combien de temps faut-il pour que le canapé ou le tapis soit de nouveau utilisable ?",
          answer:
            "Le temps de séchage varie entre 4 et 6 heures, selon la ventilation de la pièce et le type de textile. Nous vous indiquons précisément ce délai après l’intervention et conseillons d’attendre que les surfaces soient parfaitement sèches avant de les réutiliser."
        },
        {
          question:
            "Que dois-je faire pour préparer mon logement avant votre intervention ?",
          answer:
            "Il suffit de dégager les objets fragiles ou personnels autour du canapé, tapis ou matelas à nettoyer. Nous nous chargeons du reste : protection des sols, déplacement des meubles légers si nécessaire et installation du matériel. Aucune préparation complexe n’est requise."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;
