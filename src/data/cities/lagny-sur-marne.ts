// src/data/cities/lagny-sur-marne.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Lagny-sur-Marne",
  slug: "lagny-sur-marne",
  postalCodes: ["77400"],

  customDescription:
    "À Lagny-sur-Marne, la proximité de la gare de Lagny-Thorigny (ligne P du Transilien) et des axes comme la Francilienne ou la RD 934 génère un trafic constant, impactant la propreté des halls d'immeubles, des parkings souterrains et des balcons. Les copropriétés et résidences près des bords de Marne ou du centre-ville nécessitent un entretien régulier des moquettes, des sols et des espaces extérieurs pour préserver le cadre de vie.",

  hubIntro: `<p>Partenaire de confiance pour la maintenance immobilière à Lagny-sur-Marne, Klinova accompagne les syndics de copropriété et les gestionnaires dans la préservation de leur patrimoine. Nous assurons une gestion globale de l'hygiène, intervenant avec la même rigueur technique sur les bâtisses historiques du centre-ville que sur les résidences récentes des coteaux.</p>
<p class="mt-4">Notre approche repose sur une proximité opérationnelle forte, garantissant réactivité et suivi personnalisé pour chaque immeuble. Que ce soit pour des prestations récurrentes ou des remises en état après travaux, nous déployons des protocoles d'hygiène stricts et un reporting transparent pour faciliter le travail des conseils syndicaux et des professionnels.</p>
<ul>
  <li><strong>Protocoles techniques adaptés</strong> aux contraintes locales, notamment l'humidité des bords de Marne.</li>
  <li><strong>Gestion autonome des accès</strong> via clés et badges Vigik pour des interventions fluides.</li>
  <li><strong>Équipes formées</strong> au respect de la tranquillité des résidents et aux normes de sécurité.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement accéléré des parkings souterrains et aériens près de la gare de Lagny-Thorigny et des axes routiers (hydrocarbures, poussières fines, traces de pneus).",
    "Usure prématurée des moquettes et sols dans les halls à fort passage (gare, centre-ville, résidences proches de la Francilienne).",
    "Prolifération de mousses, lichens et dépôts verts sur balcons, terrasses et allées en raison de l'hygrométrie élevée liée à la proximité de la Marne.",
    "Accumulation de fientes de pigeons sur les balcons, garde-corps et appuis de fenêtres, notamment dans le centre ancien et près de l'abbatiale.",
    "Contraintes d'accès logistique pour les engins de nettoyage dans les ruelles étroites, zones piétonnes et parkings aux rampes pentues.",
    "Gestion fine des eaux de lavage (parkings, balcons) pour respecter les réseaux existants et l'environnement en bord de Marne.",
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  districts: [
    "Centre-ville / Quartier de l'abbatiale",
    "Quartier de la Gare (Lagny-Thorigny)",
    "Les Hauts de Lagny",
    "Quartier Saint-Jean",
    "Quartier Saint-Laurent",
    "Quartier des Heurteaux",
    "Quartier du Fort-du-Bois",
    "Quartier de l'Orme Bossu",
    "Quartier des Touvents",
    "Quartier de la Grande Voirie",
    "Orly Parc",
    "Zone industrielle de la Francilienne",
  ],

 nearbyCities: [
        "torcy",
        "bussy-saint-georges",
        "vaires-sur-marne",
        "serris",
        "claye-souilly",
        "chelles"
      ],

  landmarks: [
    "Mairie de Lagny-sur-Marne (Hôtel de Ville, ancien cloître de l'abbaye Saint-Pierre)",
    "Abbatiale Notre-Dame-des-Ardents-et-Saint-Pierre",
    "Fontaine Saint-Fursy (place de la Fontaine)",
    "Gare de Lagny-Thorigny (ligne P du Transilien)",
    "Bords de Marne",
    "Parc des Sports de Lagny-sur-Marne",
    "Base nautique de Lagny",
    "Centre commercial des Quatre Arpents",
  ],

  faq: [
    {
      question: "Comment se déroule une intervention de nettoyage à Lagny-sur-Marne ?",
      answer:
        "<p><strong>À Lagny-sur-Marne, l'intervention commence par l'identification des accès</strong> (ascenseur, stationnement, rampes de parking) et un échange avec le gardien, le syndic ou l'occupant pour valider les zones prioritaires. Nous protégeons les surfaces sensibles, réalisons le nettoyage prévu puis effectuons un tour de contrôle final avec, si besoin, quelques conseils d'entretien adaptés au site.</p>",
    },
    {
      question: "Que faut-il préparer avant votre venue à Lagny-sur-Marne ?",
      answer:
        "<p><strong>Rien de très contraignant.</strong> Sur les balcons, le fait de déplacer quelques objets facilite le traitement des angles et des évacuations. Pour les moquettes ou tapis, dégager les petits objets au sol est un plus, mais ce n'est pas obligatoire. Dans les parkings, il peut être utile d'anticiper le déplacement de certains véhicules, mais nous restons capables de nous adapter à la configuration réelle le jour J.</p>",
    },
    {
      question: "Pouvez-vous intervenir en horaires décalés à Lagny-sur-Marne ?",
      answer:
        "<p><strong>Oui, en complément des créneaux habituels en semaine,</strong> nous pouvons intervenir en horaires décalés ou le samedi pour les parkings, halls ou locaux professionnels lorsque la gêne doit être minimale. Les horaires sont définis avec vous ou le syndic en fonction des contraintes de la résidence ou du site.</p>",
    },
  ],

  testimonial: {
    text:
      "Klinova a remis en état les moquettes et le parking d'une résidence de Lagny-sur-Marne avec un suivi très clair pour le conseil syndical.",
    author: "C. Dupuis",
    role: "Gestionnaire de copropriété",
    building: "Résidence des Hauts de Lagny",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Retrouvez des fibres éclatantes et assainies, sans taches ni allergènes, pour valoriser l'image de vos bureaux, parties communes ou le confort de votre domicile à Lagny-sur-Marne.",
      whyUsBullets: [
        "Expertise locale des immeubles de Lagny-sur-Marne, des quartiers de la gare aux résidences des Hauts de Lagny.",
        "Méthode d'injection-extraction avec matériel professionnel, pour un résultat durable sans résidus.",
        "Logistique optimisée avec interventions aux heures creuses et gestion sécurisée des accès.",
        "Reporting photo et écrit détaillé pour le syndic, avec conseils d'entretien post-intervention.",
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les moquettes des halls, paliers et cages d'escaliers subissent un encrassement constant : traces de chaussures, poussières fines apportées par la proximité de la gare de Lagny-Thorigny et des axes comme la Francilienne, ainsi que les taches liées aux allers-retours des résidents. Les copropriétés des quartiers du centre-ville ou des Hauts de Lagny, souvent très fréquentées, voient leurs moquettes s'user prématurément, perdant leur aspect d'origine et donnant une impression de négligence. Les fibres ternissent, les bordures s’encrassent et certaines zones deviennent carrément grises malgré l'aspirateur quotidien.</p>
<p class="mt-4">Pour les syndics et gestionnaires, cela se traduit par des remarques récurrentes des occupants lors des AG et une dégradation de l'image de l'immeuble. Les résidents se plaignent de l'aspect sale, certains locataires potentiels sont même rebutés lors des visites. <strong>Un nettoyage professionnel régulier permet de restaurer l'éclat des moquettes,</strong> d'éliminer les salissures incrustées et de prolonger leur durée de vie, tout en améliorant le cadre de vie des résidents et la valorisation du patrimoine immobilier.</p>`,

      uniqueDeepDive: `<h3>1. État des lieux et identification des contraintes</h3>
<p>Évaluation sur place de l'état général des moquettes, nature des taches (graisse, boue, traces de chaussures), niveau d'usure et contraintes d'accès (escaliers étroits, ascenseurs, halls donnant sur la rue). <strong>Identification des zones de fort passage,</strong> typiques des immeubles près de la gare ou des axes routiers, où l'encrassement est plus marqué.</p>

<h3>2. Protection, traitement et extraction puissante</h3>
<p>Protection des plinthes, balisage des zones en cours de traitement et organisation par étage pour limiter la gêne. <strong>Injection-extraction à l'eau adaptée aux moquettes des copropriétés,</strong> avec plusieurs passes sur les zones critiques comme les devants d'ascenseur et les paliers. Le séchage est optimisé par une extraction puissante et une aération contrôlée, pour un retour à la normale en 4 à 6 heures.</p>

<h3>3. Adaptation locale et recommandations</h3>
<p>Ajustement des protocoles aux spécificités locales : humidité en rez-de-chaussée des immeubles en bord de Marne, moquettes anciennes des résidences des années 70-80. <strong>Fréquence de nettoyage recommandée : tous les 12 à 18 mois</strong> pour les parties communes très sollicitées, afin de maintenir un résultat optimal et éviter le remplacement prématuré.</p>`,

      specificChallenges: [
        "Fort passage dans les halls des copropriétés proches de la gare de Lagny-Thorigny, accélérant l'usure des moquettes.",
        "Poussières fines et particules liées à la circulation sur la Francilienne, incrustées dans les fibres.",
        "Humidité en rez-de-chaussée pour les immeubles en bord de Marne, favorisant les taches tenaces.",
        "Moquettes anciennes dans les résidences des années 70-80, nécessitant des soins adaptés pour éviter l'effilochage.",
      ],

      faqAdditions: [
        {
          question:
            "Nos immeubles près de la gare de Lagny-Thorigny ont des halls très fréquentés. Comment gérez-vous les flux de passage pendant le nettoyage ?",
          answer:
            "<p><strong>Nous intervenons aux heures creuses, généralement en milieu de journée,</strong> et organisons le traitement par zones pour laisser un accès partiel. Les résidents sont informés à l'avance via des affiches dans les halls, et nos techniciens balisent les espaces en cours de nettoyage pour éviter tout incident.</p>",
        },
        {
          question:
            "Intervenez-vous aussi dans les petites copropriétés ou uniquement dans les grandes résidences ?",
          answer:
            "<p><strong>Nous intervenons dans tous les types de bâtiments,</strong> des petites copropriétés de 10 lots aux grandes résidences de 100 logements. Nos protocoles s'adaptent à la taille des escaliers, à la configuration des halls et aux contraintes spécifiques, par exemple des ascenseurs étroits dans les immeubles anciens.</p>",
        },
        {
          question:
            "Est-ce que votre méthode de nettoyage abîme les moquettes, surtout si elles sont anciennes ?",
          answer:
            "<p><strong>Non, notre méthode d'injection-extraction est conçue pour préserver les fibres, même fragiles.</strong> Nous ajustons la pression et la température de l'eau en fonction du type de moquette, et utilisons des produits adaptés pour éviter tout dommage. Les moquettes anciennes des résidences des années 70-80 sont traitées avec une attention particulière.</p>",
        },
        {
          question:
            "Comment se passe l'organisation avec les résidents ? Faut-il prévoir une absence pendant l'intervention ?",
          answer:
            "<p><strong>Aucune absence n'est nécessaire.</strong> Nous informons les résidents 48 heures à l'avance par voie d'affichage, et nos techniciens veillent à limiter la gêne en termes de bruit et d'accès. Les interventions sont planifiées pour durer entre 2 et 4 heures par cage d'escalier, avec un séchage rapide.</p>",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking souterrain ou aérien à Lagny-sur-Marne impeccable, sécurisé et sans traces d'huile, pour une circulation fluide et une image valorisante de votre résidence ou entreprise.",
      whyUsBullets: [
        "Expertise des parkings de Lagny-sur-Marne, des résidences aux zones commerciales proches de la Francilienne.",
        "Matériel professionnel adapté (autolaveuse, haute pression) et produits dégraissants homologués.",
        "Interventions planifiées par zones avec horaires flexibles pour limiter la gêne des usagers.",
        "Compte-rendu photo et écrit pour le syndic ou le gestionnaire, avec recommandations d'entretien.",
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les parkings souterrains des résidences et les parkings aériens des zones commerciales ou proches de la gare de Lagny-Thorigny subissent un encrassement rapide : poussière noire collante, taches d'huile, marquages effacés et murs salis par les frottements. La proximité de la Francilienne et des axes routiers comme la RD 934 aggrave la situation, avec des dépôts de particules fines et des résidus de pneus qui s'accumulent. Le béton noircit, les siphons se bouchent et l'odeur d'hydrocarbures devient persistante.</p>
<p class="mt-4">Ces salissures, combinées à un éclairage souvent faible, créent une impression d'insécurité et de négligence, tout en augmentant les risques de glissade sur les rampes. Les résidents se plaignent de salir leurs chaussures et leurs véhicules. <strong>Un nettoyage professionnel complet permet de restaurer la lisibilité des marquages,</strong> d'éliminer les dépôts glissants et de redonner une image propre et rassurante aux usagers, qu'il s'agisse de résidents, de clients ou d'employés.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique et organisation par zones</h3>
<p>Évaluation du revêtement (béton, peinture, résine), efficacité des siphons, hauteur sous plafond et accès pour les véhicules de nettoyage. <strong>Identification des zones critiques</strong> : rampes étroites, angles mal ventilés, typiques des parkings souterrains des résidences près du centre-ville ou des Hauts de Lagny. Planification de la rotation des véhicules par zones en coordination avec le syndic.</p>

<h3>2. Balayage, dégraissage et lavage mécanique</h3>
<p>Balayage mécanique pour éliminer les gros dépôts, suivi d'un dégagement des déchets. <strong>Autolaveuse pour les surfaces larges</strong> et haute pression contrôlée avec dégraissant professionnel pour les taches d'huile tenaces. Les eaux de lavage sont récupérées et évacuées selon la réglementation, sans risque pour les réseaux.</p>

<h3>3. Horaires adaptés et recommandations</h3>
<p>Interventions tôt le matin ou en journée creuse pour minimiser la gêne. <strong>Décrassage complet recommandé une à deux fois par an</strong> pour les parkings très exposés, comme ceux des zones commerciales ou proches des axes routiers (Francilienne, RD 934), afin de maintenir sécurité et propreté.</p>`,

      specificChallenges: [
        "Poussière noire grasse et résidus de pneus dans les parkings souterrains, liés à la circulation dense sur la Francilienne et la RD 934.",
        "Taches d'huile persistantes et marquages effacés dans les parkings aériens des zones commerciales ou près de la gare.",
        "Rampes étroites et bas plafonds dans les parkings anciens, compliquant l'accès des machines.",
        "Ventilation limitée dans les parkings souterrains, nécessitant une gestion stricte des eaux de lavage et des produits utilisés.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi nos parkings souterrains à Lagny-sur-Marne sont-ils toujours couverts de poussière noire, même après un nettoyage ?",
          answer:
            "<p><strong>Cette poussière provient des particules fines liées à la circulation dense sur la Francilienne</strong> et les axes routiers proches. Elle est grasse et adhère aux sols. Notre méthode combine balayage mécanique et dégraissant professionnel pour éliminer ces dépôts en profondeur, avec une fréquence adaptée d'une à deux fois par an pour maintenir le résultat.</p>",
        },
        {
          question:
            "Faut-il vider entièrement le parking pour le nettoyage, ou pouvez-vous travailler par zones ?",
          answer:
            "<p><strong>Nous organisons toujours le nettoyage par zones,</strong> en coordination avec le syndic ou le gestionnaire. Cela permet de laisser une partie des places accessibles et de limiter la gêne. Une signalisation claire est mise en place pour guider les usagers pendant l'intervention.</p>",
        },
        {
          question:
            "Les taches d'huile anciennes dans notre parking aérien peuvent-elles vraiment disparaître ?",
          answer:
            "<p><strong>Les taches anciennes sont traitées avec des dégraissants professionnels</strong> et une haute pression contrôlée. Si le revêtement n'est pas poreux, nous parvenons à atténuer voire à supprimer ces traces. En revanche, sur un béton très abîmé, nous pouvons proposer des solutions complémentaires comme le rebouchage ou un marquage.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage, surtout dans les parkings souterrains sans évacuation adaptée ?",
          answer:
            "<p>Nous récupérons les eaux avec l’autolaveuse et organisons l’évacuation selon les points disponibles sur site (siphons, regards, zones prévues), afin d’éviter tout écoulement incontrôlé et tout encrassement des réseaux. Aucun résidu n'est laissé dans les siphons ou les réseaux non adaptés.</p>",
        },
      ],
      ctaOverride: "",
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
        "Produits et outils professionnels adaptés à chaque type de support, sans risque d'abîmer les surfaces.",
        "Interventions discrètes avec protection des accès, gestion des écoulements et gêne minimale pour le voisinage.",
        "Conseils pratiques après intervention pour préserver la propreté et faciliter l'entretien au quotidien.",
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les balcons et terrasses des appartements subissent les dépôts de poussière fine liée à la circulation sur la Francilienne, les feuilles et dépôts verts des arbres des quartiers résidentiels, ainsi que les traces de terre et de graisse après un barbecue ou des jardinières. Les joints noircissent progressivement, les angles s'encrassent et les garde-corps deviennent collants au toucher, rendant l'espace extérieur peu attrayant. Dans les immeubles près des bords de Marne, l'humidité favorise même l'apparition de mousses verdâtres qui rendent les sols glissants.</p>
<p class="mt-4">Les occupants finissent par délaisser leur balcon, qui devient un simple lieu de stockage plutôt qu'un espace de détente pour prendre le café du matin ou profiter des beaux jours. Vous n'osez plus y inviter des amis, votre mobilier reste bâché et cet espace précieux est gâché. <strong>Un nettoyage professionnel permet de redonner à ces surfaces leur aspect d'origine,</strong> en éliminant les salissures incrustées et en protégeant les matériaux. Ainsi, le balcon redevient un lieu agréable, valorisant le logement et incitant à en profiter pleinement comme un véritable prolongement de votre intérieur.</p>`,

      uniqueDeepDive: `<h3>1. Protection des accès et enlèvement des gros dépôts</h3>
<p>Protection des accès (porte-fenêtre, menuiseries) avec des bâches et rubans adhésifs. <strong>Déplacement ou protection des meubles, plantes et objets présents sur le balcon.</strong> Enlèvement manuel des gros dépôts comme les feuilles, la terre et les résidus de jardinières avant toute phase humide.</p>

<h3>2. Application de produits et brossage méthodique</h3>
<p>Application d'un produit nettoyant adapté au support (carrelage, béton, bois composite ou dalles). <strong>Brossage méthodique des surfaces</strong> avec attention particulière aux joints, angles et garde-corps, souvent très encrassés. Pression d'eau douce et maîtrisée pour préserver les matériaux et garantir un résultat uniforme.</p>

<h3>3. Rinçage contrôlé et conseils d'entretien</h3>
<p>Rinçage contrôlé pour éviter les coulures sur la façade ou chez les voisins du dessous. <strong>Séchage en 2 à 4 heures selon l'ensoleillement.</strong> Recommandations pour un entretien simple : balayage régulier, usage de produits adaptés et nettoyage complet annuel au printemps pour conserver un balcon agréable toute l'année.</p>`,

      specificChallenges: [
        "Dépôts de poussière fine et pollution liés à la proximité de la Francilienne et des axes routiers, encrassant rapidement les balcons.",
        "Joints noircis et dépôts verts tenaces sur les balcons exposés aux arbres ou aux jardinières, nécessitant des produits spécifiques.",
        "Gestion de l'eau pour éviter les coulures sur les façades ou chez les voisins, surtout dans les immeubles anciens aux évacuations peu efficaces.",
        "Balcons étroits ou avec garde-corps complexes, rendant l'accès et le nettoyage plus techniques.",
      ],

      faqAdditions: [
        {
          question:
            "Le recours à une pression d'eau pour le nettoyage peut-il fragiliser le carrelage ou les joints de mon balcon ?",
          answer:
            "<p><strong>Nous travaillons toujours avec une pression maîtrisée,</strong> ajustée au type de revêtement et à l'état des joints. Sur les balcons anciens ou fragilisés, nous réduisons la puissance et privilégions le brossage manuel avec des produits adaptés pour éviter toute détérioration.</p>",
        },
        {
          question:
            "Concrètement, comment faites-vous pour limiter les coulures d'eau chez les voisins du dessous ?",
          answer:
            "<p><strong>Nous organisons le rinçage par petites zones</strong> en dirigeant l'eau vers les évacuations du balcon. Des raclettes et des microfibres permettent de récupérer l'excédent d'eau, et nous protégeons au besoin certaines zones sensibles avec des bâches afin d'éviter les projections.</p>",
        },
        {
          question:
            "Les produits de nettoyage que vous utilisez sont-ils compatibles avec la présence de plantes et d'animaux sur le balcon ?",
          answer:
            "<p><strong>Oui, nous privilégions des produits à faible impact,</strong> soigneusement rincés en fin d'intervention. Si vous avez des plantes sensibles ou des animaux, nous l'anticipons au départ pour adapter la chimie, protéger les pots et éviter tout contact direct avec les produits.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que mon balcon soit de nouveau utilisable après votre passage ?",
          answer:
            "<p><strong>En règle générale, comptez entre 2 et 4 heures de séchage,</strong> selon l'ensoleillement et la circulation d'air. Nous vous indiquons en fin d'intervention le délai recommandé avant de remettre en place le mobilier ou de marcher à nouveau sur les surfaces.</p>",
        },
      ],
      ctaOverride: "",
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
        "Compte-rendu détaillé avec photos et conseils pour limiter les récidives et mettre en place des mesures dissuasives.",
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les balcons des étages élevés, les loggias et les cours intérieures des immeubles sont souvent envahis par les fientes de pigeons, attirés par les grands arbres des parcs et les corniches des bâtiments historiques près de l'abbatiale. Ces dépôts, en plus d'être inesthétiques et de dégager des odeurs fortes, peuvent transmettre des maladies et rendent l'espace extérieur totalement inutilisable. Les dalles deviennent glissantes, les garde-corps sont recouverts d'une couche épaisse et l'odeur pénètre même dans le logement.</p>
<p class="mt-4">Les occupants subissent une gêne quotidienne insupportable, avec parfois des tensions entre voisins ou avec la copropriété, notamment lorsque les fientes s'accumulent sur les garde-corps ou les vitres. Vous n'osez plus ouvrir votre porte-fenêtre, vous craignez pour la santé de vos enfants et vous êtes dégoûté de cet espace qui devrait être agréable. <strong>Un nettoyage professionnel est indispensable</strong> pour éliminer ces salissures en profondeur, désinfecter les surfaces avec des produits virucides adaptés et restaurer un environnement sain. Sans intervention spécialisée, le problème persiste et s'aggrave, compromettant le confort et la sécurité des résidents.</p>`,

      uniqueDeepDive: `<h3>1. Mise en place des protections sanitaires</h3>
<p>Nos techniciens portent des combinaisons, gants, masques <strong>FFP3</strong> et lunettes pour éviter tout contact avec les poussières contaminées. <strong>Le balcon est isolé avec des bâches</strong> pour protéger l'intérieur du logement et limiter la dispersion des particules vers les pièces de vie.</p>

<h3>2. Humidification, ramassage et conditionnement</h3>
<p>Les fientes sèches sont humidifiées avant d'être ramassées manuellement avec des outils dédiés, puis conditionnées dans des sacs étanches prévus pour les déchets contaminés. <strong>Aucun résidu n'est laissé sur place</strong> ni jeté dans les ordures ménagères de la résidence.</p>

<h3>3. Nettoyage, désinfection virucide et aération</h3>
<p>Nettoyage des surfaces (sol, garde-corps, murs) avec des produits adaptés. <strong>Désinfection avec un virucide et bactéricide homologué,</strong> en respectant scrupuleusement le temps de contact nécessaire (15 à 20 minutes). Rinçage final, puis aération complète pendant 24 heures avant toute réutilisation. Installation possible de picots ou de filets anti-pigeons pour limiter les retours.</p>`,

      specificChallenges: [
        "Balcons des étages élevés et loggias des immeubles proches des parcs ou de la Marne, particulièrement exposés aux fientes de pigeons.",
        "Poussières de fientes sèches très volatiles, nécessitant une humidification préalable pour éviter toute dispersion.",
        "Corrosion des supports métalliques comme les garde-corps et rambardes due à l'acidité des fientes, exigeant un nettoyage et une protection adaptés.",
        "Évacuation des déchets contaminés, dans le respect des normes sanitaires et environnementales.",
      ],

      faqAdditions: [
        {
          question:
            "Quels sont les risques sanitaires liés aux fientes de pigeons sur un balcon ?",
          answer:
            "<p><strong>Les fientes de pigeons peuvent transmettre des maladies</strong> comme la cryptococcose ou la salmonellose et provoquer des allergies. Elles dégagent aussi des spores dangereuses en séchant. Un nettoyage professionnel avec désinfection est indispensable pour éliminer ces risques et rendre le balcon sûr.</p>",
        },
        {
          question:
            "Les produits utilisés pour la désinfection sont-ils sans danger pour les habitants et les animaux après séchage ?",
          answer:
            "<p><strong>Oui, nous utilisons des produits virucides et bactéricides homologués,</strong> qui ne présentent aucun danger une fois secs. Après rinçage et aération, les surfaces sont parfaitement sûres pour les occupants et les animaux domestiques.</p>",
        },
        {
          question:
            "Est-ce que le nettoyage peut abîmer la peinture ou le béton du balcon ?",
          answer:
            "<p><strong>Non, nos méthodes et produits sont adaptés à tous les supports</strong> comme la peinture, le béton ou le métal. Nous testons systématiquement les produits sur une petite zone avant application et utilisons des outils non abrasifs pour préserver l'intégrité des surfaces.</p>",
        },
        {
          question:
            "Que deviennent les fientes et les nids après le nettoyage ?",
          answer:
            "<p><strong>L'enlèvement des déchets est total :</strong> rien n'est laissé sur votre balcon ni jeté dans les locaux poubelles de la résidence. Tout est conditionné hermétiquement et évacué vers une filière de traitement agréée pour les déchets biologiques à risque.</p>",
        },
      ],
      ctaOverride: "",
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
        "Méthode d'injection-extraction et produits spécifiques pour chaque type de textile et de tache.",
        "Interventions discrètes à domicile, avec respect des espaces de vie et gêne minimale.",
        "Conseils pratiques après intervention pour un entretien durable et efficace des textiles.",
      ],

      uniqueIntro: `<p>À Lagny-sur-Marne, les canapés, tapis et matelas des logements subissent les traces de la vie quotidienne : taches de boissons renversées lors des repas en famille, traces de nourriture ou de graisse, poussière accumulée venue des axes routiers proches, poils d'animaux et parfois des odeurs tenaces qui ne partent pas malgré l'aération. Les familles avec enfants ou animaux domestiques, ainsi que les logements proches de la Francilienne ou des parcs, sont particulièrement exposés à ces salissures. Les tissus s'encrassent progressivement, les couleurs ternissent et certaines taches finissent par paraître indélébiles.</p>
<p class="mt-4">Même avec un entretien régulier, les textiles s'encrassent en profondeur, abritant acariens et allergènes invisibles mais bien présents, ce qui peut causer des gênes respiratoires ou des allergies. Vous finissez par éviter de vous asseoir sur certaines parties du canapé, vous hésitez à recevoir des invités par gêne de l'aspect taché et vous vous réveillez parfois avec le nez qui coule à cause des acariens. <strong>Un nettoyage professionnel permet d'éliminer ces saletés incrustées,</strong> de désodoriser et d'assainir les textiles en profondeur, redonnant ainsi un cadre de vie plus sain et plus agréable. Cela permet aussi de prolonger la durée de vie des tissus et de retrouver le plaisir de s'installer sur un canapé ou un tapis vraiment propre.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic des textiles et pré-traitement ciblé</h3>
<p>Identification précise des textiles (coton, laine, synthétique, velours, cuir) et des taches selon leur nature (graisse, vin, urine) et leur ancienneté. <strong>Application d'un pré-traitement ciblé sur les zones les plus salies,</strong> en utilisant des produits adaptés à chaque type de fibre et de tache. Pour les textiles délicats ou les matelas, ajustement des méthodes pour éviter tout dommage.</p>

<h3>2. Injection-extraction et élimination en profondeur</h3>
<p>Nettoyage par injection-extraction à l'eau : technique qui permet d'extraire les saletés en profondeur tout en limitant l'humidité résiduelle. <strong>Plusieurs passes sur les zones critiques</strong> (accoudoirs, assises, passages de tapis) pour un résultat homogène. Élimination simultanée des acariens, poussières et allergènes responsables d'inconfort respiratoire.</p>

<h3>3. Aération optimale et conseils d'entretien</h3>
<p>Aération optimale pour accélérer le séchage, généralement en 4 à 6 heures selon la ventilation de la pièce. <strong>Adaptation aux contraintes du logement</strong> (espace réduit, accès, nécessité de limiter le bruit). Conseils d'entretien pour préserver la propreté des textiles entre deux nettoyages professionnels : aspiration hebdomadaire, traitement immédiat des taches fraîches.</p>`,

      specificChallenges: [
        "Logements familiaux avec enfants et animaux à Lagny-sur-Marne, où les taches organiques et les acariens s'accumulent rapidement.",
        "Tissus fragiles ou matelas anciens nécessitant des soins adaptés pour éviter les dégradations.",
        "Pièces peu ventilées ou humides, ralentissant le séchage et exigeant une gestion rigoureuse de l'aération.",
        "Odeurs tenaces liées aux animaux ou à l'humidité, nécessitant des traitements spécifiques pour une élimination durable.",
      ],

      faqAdditions: [
        {
          question:
            "Votre méthode de nettoyage permet-elle réellement de diminuer la présence d'acariens et d'allergènes dans les canapés, tapis et matelas ?",
          answer:
            "<p><strong>Oui, le nettoyage par injection-extraction que nous utilisons à Lagny-sur-Marne agit en profondeur dans les fibres.</strong> Il permet d'évacuer une grande partie des poussières, acariens et allergènes accumulés, ce qui améliore nettement la qualité de l'air intérieur, notamment dans les pièces de vie et les chambres.</p>",
        },
        {
          question:
            "Pouvez-vous éliminer les taches et odeurs d'urine sur un matelas ou un canapé ?",
          answer:
            "<p><strong>Oui, nous utilisons des produits enzymatiques spécifiques</strong> pour décomposer les taches et neutraliser les odeurs d'urine. Ces traitements agissent en profondeur sans abîmer les tissus, pour un résultat durable et une hygiène retrouvée.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que le canapé ou le tapis soit de nouveau utilisable ?",
          answer:
            "<p><strong>Le temps de séchage varie entre 4 et 6 heures,</strong> selon la ventilation de la pièce et le type de textile. Nous vous indiquons précisément ce délai après l'intervention et conseillons d'attendre que les surfaces soient parfaitement sèches avant de les réutiliser.</p>",
        },
        {
          question:
            "L'accès à mon immeuble dans le centre historique de Lagny est difficile, est-ce un problème ?",
          answer:
            "<p><strong>Non, notre matériel est portable et compact.</strong> Si le stationnement est éloigné (rues piétonnes vers la Place de la Fontaine), nous pouvons transporter l'équipement à pied jusqu'à votre appartement sans difficulté.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
