// src/data/cities/gournay-sur-marne.ts
// Balises autorisées :
// <p>, <h3>, <ul>, <li>, <strong>, <br>, <p class="mt-4">
// dans hubIntro / uniqueIntro / uniqueDeepDive / faq / faqAdditions

import type { City } from "~/types/geo";

const city: City = {
  name: "Gournay-sur-Marne",
  slug: "gournay-sur-marne",
  postalCodes: ["93460"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Commune pavillonnaire de Seine-Saint-Denis située au carrefour de Chelles, Noisy-le-Grand et Neuilly-sur-Marne, Gournay-sur-Marne bénéficie de la proximité des axes D104 et RN34 ainsi que de la gare RER E Chelles-Gournay. Le tissu local, composé majoritairement de maisons individuelles et de petites copropriétés, nécessite un entretien régulier des surfaces communes et privatives pour préserver un cadre de vie calme et résidentiel.",

  hubIntro: `<p>Située entre Chelles et Neuilly-sur-Marne, Gournay-sur-Marne présente des besoins d’entretien spécifiques liés à son caractère résidentiel et à la proximité immédiate de la Marne. Klinova accompagne les syndics, gestionnaires et propriétaires dans la maintenance immobilière, avec des interventions adaptées aux typologies locales.</p>
<p class="mt-4">Notre approche repose sur une organisation rigoureuse, une bonne connaissance du secteur et des méthodes éprouvées pour assurer une propreté durable des parties communes, parkings, balcons et espaces intérieurs. Chaque intervention est cadrée en amont et suivie d’un compte-rendu clair à destination du gestionnaire.</p>
<ul>
  <li><strong>Organisation adaptée :</strong> prise en compte des contraintes d’accès, de stationnement et des horaires en zone résidentielle.</li>
  <li><strong>Protocoles ajustés :</strong> méthodes adaptées aux maisons, petites copropriétés et résidences collectives.</li>
  <li><strong>Suivi clair :</strong> reporting factuel après intervention, avec photos avant/après si demandé.</li>
  <li><strong>Réactivité locale :</strong> interventions planifiées efficacement sur Gournay-sur-Marne et les communes voisines.</li>
</ul>`,

  citySpecificChallenges: [
    "Humidité et dépôts verts sur balcons et terrasses liés à la proximité de la Marne.",
    "Encrassement des halls et entrées par les résidus terreux provenant des jardins privatifs.",
    "Salissures spécifiques dans les parkings dues aux flux réguliers vers les axes D104 et RN34.",
    "Présence de fientes sur balcons et toitures donnant sur des zones arborées ou espaces verts.",
  ],

  districts: [
    "Centre-ville",
    "Bords de Marne",
    "Secteur Pont de Gournay",
    "Zone pavillonnaire nord",
    "Zone pavillonnaire sud",
  ],

 nearbyCities: [
  "noisy-le-grand",
  "champs-sur-marne",
  "chelles",
  "neuilly-sur-marne",
  "gagny",
],

  landmarks: [
    "Mairie de Gournay-sur-Marne",
    "Église Saint-Arnoult",
    "Pont de Gournay",
    "Avenue du Maréchal Joffre (D104)",
    "Bords de Marne",
    "Complexe sportif Jean-Claude Bouttier",
  ],

  faq: [
    {
      question: "Intervenez-vous rapidement sur le secteur de Gournay-sur-Marne ?",
      answer:
        "Oui. Nous intervenons régulièrement à Gournay-sur-Marne et dans les communes limitrophes. Les prestations programmées sont généralement planifiées sous 48 heures, et les situations urgentes sont traitées selon disponibilité.",
    },
    {
      question: "Comment gérez-vous les accès sécurisés en copropriété ?",
      answer:
        "Les accès (Vigik, badges, clés ou codes) sont définis en amont avec le syndic, le gardien ou un référent. Une procédure simple est mise en place pour garantir une intervention fluide, sans allers-retours inutiles.",
    },
    {
      question: "Les déplacements pour établir un devis sont-ils gratuits ?",
      answer:
        "Oui. Les déplacements pour diagnostic et devis sont gratuits sur Gournay-sur-Marne. La visite permet d’évaluer précisément les surfaces, les contraintes et de proposer une intervention adaptée.",
    },
    {
      question: "Comment gérez-vous les contraintes de stationnement en zone pavillonnaire ?",
      answer:
        "Nous anticipons les contraintes locales et planifions les interventions aux horaires les plus adaptés. Lorsque nécessaire, nous échangeons en amont avec le gestionnaire pour organiser le déchargement du matériel.",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",

      heroDescription:
        "Un nettoyage professionnel des moquettes redonne éclat et propreté aux parties communes, valorisant l’image de votre copropriété et le confort quotidien des résidents de Gournay-sur-Marne.",

      whyUsBullets: [
        "Méthode adaptée aux petites copropriétés et résidences collectives du secteur.",
        "Injection-extraction professionnelle pour un nettoyage en profondeur sans dégrader les fibres.",
        "Organisation discrète avec balisage et maintien des circulations lorsque c’est possible.",
        "Recommandations d’entretien claires pour stabiliser la propreté dans le temps.",
      ],

      uniqueIntro: `<p>Les moquettes des parties communes à Gournay-sur-Marne subissent un encrassement progressif lié au passage quotidien des résidents et aux spécificités locales. Dans les halls d’entrée donnant sur des axes fréquentés comme l’avenue du Maréchal Joffre ou à proximité de la gare RER E Chelles-Gournay, les salissures s’accumulent rapidement : boue, poussières urbaines et taches diverses ternissent l’aspect général.</p>
<p class="mt-4">Avec le temps, cette dégradation visuelle impacte directement l’image de l’immeuble et le ressenti des occupants. Les conseils syndicaux et gestionnaires sont régulièrement sollicités sur l’état des parties communes. Un nettoyage professionnel structuré permet de restaurer un rendu homogène, d’améliorer l’hygiène et de prolonger la durée de vie des revêtements textiles.</p>`,

      uniqueDeepDive: `<p>Notre intervention débute par un diagnostic précis des surfaces à traiter : type de moquette, niveau d’encrassement, zones de passage intensif et contraintes d’accès propres aux copropriétés de Gournay-sur-Marne. Cette phase permet d’adapter la méthode, les réglages et l’organisation du chantier à la configuration réelle des parties communes.</p>
<p class="mt-4">Nous prenons en compte les situations courantes du bâti local : halls de taille réduite, cages d’escalier étroites, escaliers tournants ou paliers exigus. Les bas de murs et zones sensibles sont protégés, et un balisage clair est mis en place afin de sécuriser l’intervention tout en maintenant la circulation des résidents lorsque c’est possible.</p>
<p class="mt-4">Le nettoyage est réalisé par injection-extraction, une méthode qui permet de désincruster les fibres en profondeur sans les détériorer. Les zones les plus sollicitées (entrées, boîtes aux lettres, premières marches) font l’objet de passages renforcés. L’extraction immédiate des eaux chargées limite fortement l’humidité résiduelle et favorise un séchage rapide, généralement en quelques heures selon la ventilation des lieux.</p>`,

      specificChallenges: [
        "Humidité ambiante liée à la proximité de la Marne, pouvant ralentir le séchage des moquettes en rez-de-chaussée si l’extraction n’est pas correctement maîtrisée.",
        "Encrassement accéléré des halls donnant directement sur des axes de circulation, avec apports fréquents de boue, sable et poussières urbaines.",
        "Présence de moquettes anciennes ou fragilisées nécessitant des réglages précis et un test préalable pour préserver fibres et colles.",
        "Apports saisonniers de pollens, poussières fines et résidus terreux issus des jardins et espaces verts environnants.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des petites copropriétés de Gournay-sur-Marne nécessitent-elles un traitement particulier ?",
          answer:
            "Oui. Les petites copropriétés et résidences de Gournay-sur-Marne présentent souvent des zones de passage concentrées. Notre méthode d’injection-extraction est ajustée pour traiter efficacement ces surfaces, avec un matériel adapté aux contraintes d’accès et aux superficies réduites.",
        },
        {
          question: "Intervenez-vous dans tous types de bâtiments à Gournay-sur-Marne ?",
          answer:
            "Nous intervenons dans les halls, cages d’escalier, paliers et locaux professionnels de toutes tailles. Les contraintes d’accès et de stationnement sont analysées en amont afin d’organiser une intervention fluide et adaptée au site.",
        },
        {
          question: "Le nettoyage par injection-extraction peut-il abîmer une moquette ancienne ?",
          answer:
            "Non, lorsque la méthode est correctement réglée. Un diagnostic et un test préalable permettent d’adapter pression, température et produits selon l’état du revêtement. L’extraction immédiate limite l’humidité et préserve la structure de la moquette.",
        },
        {
          question: "Comment limitez-vous la gêne pour les résidents pendant l’intervention ?",
          answer:
            "Les interventions sont planifiées aux heures de moindre passage lorsque c’est possible. Un balisage clair est mis en place, et le travail peut être organisé par zones ou par niveaux afin de maintenir les circulations essentielles pendant le nettoyage.",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "parkings",

      heroDescription:
        "Un parking proprement entretenu améliore la sécurité quotidienne des résidents, la lisibilité des marquages au sol et l’image générale des copropriétés de Gournay-sur-Marne.",

      whyUsBullets: [
        "Connaissance des parkings résidentiels locaux : contraintes d’accès, typologies de revêtements, évacuations.",
        "Matériel professionnel adapté : autolaveuse compacte, haute pression contrôlée, dégraissants ciblés.",
        "Organisation par zones permettant de maintenir un accès véhicules pendant l’intervention.",
        "Compte-rendu photographique détaillé avec recommandations d’entretien préventif.",
      ],

      uniqueIntro: `<p>Les parkings souterrains et aériens de Gournay-sur-Marne accumulent rapidement salissures et dépôts liés à la circulation automobile. La proximité de l’avenue du Maréchal Joffre et des axes vers Chelles génère un encrassement par particules fines et hydrocarbures. Les sols en béton ou en résine présentent des taches d’huile persistantes, une poussière grasse qui adhère aux chaussures et des marquages au sol progressivement effacés.</p>
<p class="mt-4">Cette dégradation crée une impression d’insalubrité et peut générer des risques de glissade, notamment aux abords des rampes d’accès. Lors des assemblées générales, ces espaces sont fréquemment cités comme points de gêne par les résidents. Un décrassage professionnel redonne propreté, sécurité et lisibilité à ces zones de passage quotidien tout en valorisant le patrimoine immobilier.</p>`,

      uniqueDeepDive: `<p>L’intervention débute par un diagnostic technique précis : nature du revêtement (béton brut, peinture, résine), état des marquages, fonctionnement des évacuations et contraintes d’accès propres aux parkings de Gournay-sur-Marne. Le chantier est ensuite organisé par zones successives afin de maintenir un accès véhicules minimal, en coordination avec le syndic et après information des résidents.</p>
<p class="mt-4">Le nettoyage repose sur une autolaveuse professionnelle combinant brossage mécanique et aspiration immédiate. Les zones fortement encrassées (taches d’hydrocarbures, rampes, pieds de murs) font l’objet d’un traitement renforcé avec des dégraissants adaptés et, si nécessaire, un passage haute pression contrôlé. Cette organisation permet un nettoyage efficace tout en maîtrisant l’évacuation des eaux et des résidus. La fréquence d’intervention est ensuite ajustée selon le niveau de fréquentation et l’exposition du site.</p>`,

      specificChallenges: [
        "Encrassement accéléré des parkings donnant sur l’avenue du Maréchal Joffre par dépôts de particules fines issues de la circulation.",
        "Taches d’hydrocarbures anciennes sur béton poreux nécessitant des traitements dégraissants ciblés et un temps de contact adapté.",
        "Évacuations d’eau parfois limitées dans certains parkings résidentiels, imposant une gestion rigoureuse des eaux de lavage.",
        "Hauteur sous plafond réduite dans les parkings de copropriété, nécessitant l’usage d’équipements compacts et maîtrisés.",
      ],

      faqAdditions: [
        {
          question: "Pourquoi les parkings de Gournay-sur-Marne s’encrassent-ils rapidement ?",
          answer:
            "La circulation quotidienne vers la gare RER E et les axes routiers voisins génère un dépôt constant de particules fines et de résidus liés aux pneumatiques et aux moteurs. Ces éléments se déposent progressivement sur les sols des parkings lors des manœuvres, formant une couche grasse accentuée par l’humidité ambiante proche de la Marne.",
        },
        {
          question: "Faut-il vider complètement le parking pendant l’intervention ?",
          answer:
            "Non. Le nettoyage est organisé par zones successives afin de permettre aux résidents de conserver l’accès à leurs véhicules. Cette organisation est définie en amont avec le syndic pour optimiser la rotation des stationnements et limiter la gêne.",
        },
        {
          question: "Les taches d’huile anciennes peuvent-elles être totalement éliminées ?",
          answer:
            "Les taches récentes sont généralement éliminées complètement. Pour les taches anciennes profondément imprégnées dans le béton, une atténuation très nette est obtenue, même si une légère trace peut subsister. Dans tous les cas, la surface est assainie, non glissante et plus facile à entretenir par la suite.",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans les parkings ?",
          answer:
            "Avant chaque intervention, nous identifions les points d’évacuation disponibles. Les eaux sont dirigées vers les zones prévues ou récupérées lorsque la configuration l’impose. Cette organisation permet un nettoyage maîtrisé, sans écoulement incontrôlé ni nuisance pour les installations du site.",
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
        "Un balcon nettoyé avec méthode retrouve son confort d’usage et redevient un véritable espace de vie extérieur pour les habitants de Gournay-sur-Marne.",

      whyUsBullets: [
        "Interventions adaptées aux balcons d’immeubles collectifs et d’habitats pavillonnaires.",
        "Méthodes respectueuses des supports : carrelage, béton, dalles, bois composite.",
        "Gestion rigoureuse de l’eau pour éviter toute gêne du voisinage.",
        "Finitions soignées sur les zones visibles : joints, angles, garde-corps.",
      ],

      uniqueIntro: `<p>À Gournay-sur-Marne, les balcons et terrasses s’encrassent progressivement sous l’effet combiné des poussières extérieures, des dépôts naturels et de l’humidité ambiante. Feuilles mortes, terre issue des jardinières, traces de pollution et dépôts verts finissent par ternir les sols, noircir les joints et altérer l’aspect des garde-corps.</p>
<p class="mt-4">Avec le temps, cet encrassement transforme le balcon en espace peu accueillant, souvent délaissé par les occupants. Une remise en état professionnelle permet de redonner un aspect propre et homogène aux surfaces, et de réinvestir pleinement cet extérieur comme un véritable prolongement du logement.</p>`,

      uniqueDeepDive: `<p>L’intervention débute par la protection des menuiseries, seuils et accès intérieurs. Les meubles, plantes et objets présents sur le balcon sont déplacés ou protégés afin de libérer les surfaces à traiter. Les dépôts importants (feuilles, terre, résidus divers) sont retirés manuellement avant toute phase humide, afin d’éviter d’étaler la saleté ou d’obstruer les évacuations.</p>
<p class="mt-4">Le nettoyage est ensuite réalisé avec des produits professionnels adaptés au support, associés à un brossage ciblé des joints, angles et zones encrassées. Si nécessaire, une pression modérée et contrôlée est utilisée, toujours en privilégiant la préservation des joints et des revêtements. La gestion de l’eau est centrale : raclage, orientation du flux vers l’évacuation et, si besoin, récupération ponctuelle afin d’éviter toute coulure sur les façades ou les balcons inférieurs. Après séchage, généralement en quelques heures selon l’exposition, le balcon est rendu propre, sain et immédiatement réutilisable.</p>`,

      specificChallenges: [
        "Dépôts de poussières fines et résidus extérieurs qui ternissent rapidement les surfaces exposées.",
        "Développement de mousses et d’algues favorisé par l’humidité, notamment dans les zones ombragées.",
        "Gestion délicate de l’eau en immeuble collectif pour éviter coulures et nuisances pour le voisinage.",
        "Accès parfois restreints nécessitant un matériel compact et une organisation précise.",
      ],

      faqAdditions: [
        {
          question: "Le nettoyage peut-il abîmer le carrelage ou les joints de mon balcon ?",
          answer:
            "Non. Nous adaptons systématiquement la méthode au support et à l’état des joints. Le nettoyage privilégie l’action chimique adaptée et le brossage. Une pression douce et contrôlée n’est utilisée qu’en complément, après test sur zone discrète, afin de préserver l’intégrité des surfaces.",
        },
        {
          question: "Comment évitez-vous que l’eau de lavage coule chez les voisins du dessous ?",
          answer:
            "La quantité d’eau est strictement maîtrisée. Le flux est orienté vers l’évacuation existante et contrôlé en continu. En cas d’évacuation insuffisante, nous utilisons des raclettes ou une aspiration ponctuelle pour éviter toute coulure ou infiltration.",
        },
        {
          question: "Les produits utilisés présentent-ils un risque pour les plantes ou les animaux ?",
          answer:
            "Les plantes sont protégées ou déplacées pendant l’intervention, puis remises en place après rinçage. Les produits professionnels sont soigneusement rincés et les surfaces laissées propres et sèches avant réutilisation normale du balcon.",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser le balcon ?",
          answer:
            "Le séchage prend le plus souvent quelques heures, selon l’exposition et la ventilation. Dès que les surfaces sont sèches au toucher, le balcon peut être réutilisé. Pour les supports plus poreux, nous pouvons recommander un délai un peu plus long avant de replacer du mobilier lourd.",
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
        "Une décontamination professionnelle élimine fientes et germes, permettant aux habitants de Gournay-sur-Marne de retrouver un balcon sain et utilisable sans risque sanitaire.",

      whyUsBullets: [
        "Intervention sécurisée : protection de l’intérieur, EPI adaptés et méthode propre pour éviter la dispersion des poussières.",
        "Ramassage contrôlé : humidification maîtrisée, grattage/collecte progressive et conditionnement étanche des déchets.",
        "Nettoyage + désinfection : sol, garde-corps, murs et points de contact traités avec une finition réellement réutilisable.",
        "Respect du voisinage : gestion stricte de l’eau et des écoulements pour éviter coulures, projections et nuisances.",
      ],

      uniqueIntro:
        `<p>À Gournay-sur-Marne, les balcons souillés par des fientes de pigeons sont un problème récurrent, notamment à proximité des espaces verts et des abords de la Marne, où les oiseaux trouvent facilement des zones de repos et de nidification. Quand la situation s’installe, l’extérieur devient vite inutilisable&nbsp;: odeurs, traces tenaces, surfaces glissantes, et risque sanitaire important lié aux poussières sèches.</p>` +
        `<p class="mt-4">Au-delà de l’aspect visuel, le sujet se gère comme une remise au propre sécurisée&nbsp;: éviter de remettre des particules en suspension, collecter proprement, puis nettoyer et désinfecter les surfaces. L’objectif est simple&nbsp;: récupérer un balcon sain, sans créer de nuisance pour l’intérieur du logement ni pour le voisinage.</p>`,

      uniqueDeepDive:
        `<p>Nous commençons par protéger l’accès intérieur (porte-fenêtre, seuil, zone de passage) et par isoler la zone de travail de manière légère pour limiter les poussières. Les techniciens interviennent avec des EPI adaptés (combinaison, gants, protection respiratoire) et procèdent à une humidification contrôlée des fientes sèches avant toute manipulation, afin d’éviter la dispersion.</p>` +
        `<p class="mt-4">Les fientes, nids et débris sont ensuite retirés progressivement (grattage/ramassage), puis conditionnés dans des sacs étanches. Nous réalisons ensuite un nettoyage complet des surfaces (sol, angles, garde-corps, appuis) et terminons par une désinfection avec un produit adapté, en respectant un temps de pose suffisant. Le rinçage et la gestion de l’eau sont maîtrisés (raclette/aspiration si besoin) pour laisser un résultat propre, net, et réutilisable après séchage.</p>`,

      specificChallenges: [
        "Proximité d’espaces verts et des bords de Marne : présence d’oiseaux plus régulière et salissures qui s’installent sur la durée.",
        "Fientes très sèches : poussières volatiles à maîtriser par humidification contrôlée et collecte progressive.",
        "Supports poreux (béton brut, joints, seuils) : nettoyage plus délicat pour désincruster sans abîmer le support.",
        "Contrainte de voisinage en immeuble : écoulements à contrôler strictement pour éviter coulures sur façade et balcons inférieurs.",
      ],

      faqAdditions: [
        {
          question: "Puis-je nettoyer moi-même les fientes de pigeons sur mon balcon ?",
          answer:
            "Bien que possible, cette opération est fortement déconseillée lorsque les fientes sont sèches et en quantité : le risque principal, c’est de remettre des poussières en suspension. Une intervention pro vise justement à sécuriser la zone, à humidifier de façon maîtrisée, puis à collecter et désinfecter sans disperser.",
        },
        {
          question: "Les produits de désinfection sont-ils sans danger après séchage ?",
          answer:
            "Oui, une fois le protocole terminé (désinfection + rinçage si nécessaire) et après séchage complet, les surfaces redeviennent utilisables normalement. Sur place, on vous donne une consigne simple de délai de séchage selon la météo et l’aération.",
        },
        {
          question: "Les fientes risquent-elles d’avoir endommagé mon balcon ?",
          answer:
            "Oui, c’est possible : l’acidité des fientes peut corroder certains métaux, marquer des carrelages, ou laisser des auréoles sur béton/joints si ça a stagné longtemps. Le nettoyage stoppe la dégradation en cours et remet au propre, mais ne “répare” pas toujours une attaque chimique ancienne du matériau.",
        },
        {
          question: "Que faites-vous des fientes et nids récupérés ?",
          answer:
           "L'évacuation est totale et sécurisée : aucun résidu n'est laissé sur place ni jeté dans les bacs de l'immeuble. Les déchets biologiques sont emballés hermétiquement et transportés vers une déchetterie pour garantir une hygiène irréprochable.",
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
        "Un nettoyage professionnel à domicile redonne fraîcheur et hygiène à vos canapés, tapis et matelas, restaurant le confort quotidien de votre foyer à Gournay-sur-Marne.",

      whyUsBullets: [
        "Intervention à domicile adaptée aux logements pavillonnaires et appartements de Gournay-sur-Marne.",
        "Injection-extraction maîtrisée : nettoyage en profondeur avec humidité contrôlée et séchage optimisé.",
        "Organisation discrète : protection des sols, intervention soignée, respect de la vie familiale.",
        "Conseils simples pour prolonger la propreté des textiles au quotidien.",
      ],

      uniqueIntro: `<p>Dans les logements familiaux de Gournay-sur-Marne, canapés, tapis et matelas sont fortement sollicités : enfants, animaux domestiques, repas pris au salon et usages intensifs du quotidien. Les taches visibles s’installent progressivement — boissons renversées, traces alimentaires, salissures organiques — tandis que poussières et acariens s’accumulent en profondeur dans les fibres textiles.</p>
<p class="mt-4">Avec le temps, ces encrassements créent un inconfort : odeurs persistantes, aspect terni, sensation de textile “sale” malgré l’aspiration régulière. Dans certains logements peu ventilés ou en rez-de-jardin, l’humidité ambiante peut accentuer ces désagréments. Un nettoyage professionnel à domicile permet de retrouver des textiles plus propres, plus agréables à utiliser, sans avoir à remplacer le mobilier.</p>`,

      uniqueDeepDive: `<p>L’intervention débute par un diagnostic précis : identification des fibres (coton, laine, synthétique, velours), repérage des zones les plus sollicitées et analyse des taches selon leur nature et leur ancienneté. Cette étape permet d’adapter les réglages et les produits pour respecter la structure du textile.</p>
<p class="mt-4">Les zones marquées font l’objet d’un pré-traitement ciblé, notamment avec des solutions enzymatiques pour les salissures organiques. Le nettoyage principal est réalisé par injection–extraction : la solution nettoyante est injectée au cœur des fibres puis immédiatement aspirée avec les salissures dissoutes. L’humidité est maîtrisée pour protéger les rembourrages et faciliter le séchage. En fin d’intervention, nous donnons des consignes simples d’aération afin d’optimiser le temps de séchage, généralement compris entre 4 et 8 heures selon l’épaisseur du textile et la ventilation du logement.</p>`,

      specificChallenges: [
        "Humidité résiduelle dans certains logements proches des bords de Marne ou en rez-de-jardin, ralentissant le séchage des textiles épais.",
        "Présence fréquente d’animaux domestiques : poils incrustés, odeurs spécifiques et taches organiques nécessitant un pré-traitement adapté.",
        "Textiles volumineux (canapés profonds, matelas épais) demandant une extraction maximale pour limiter l’humidité résiduelle.",
        "Pièces de vie ou logements anciens peu ventilés : nécessité d’adapter la méthode et de conseiller une aération renforcée après intervention.",
      ],

      faqAdditions: [
        {
          question: "Le nettoyage permet-il d’éliminer les acariens et allergènes ?",
          answer:
            "Le nettoyage par injection–extraction réduit fortement la charge allergène en retirant poussières, squames et résidus accumulés dans les fibres. Cela améliore nettement le confort d’usage et la qualité de l’air intérieur, sans se substituer à un traitement anti-acarien spécifique en cas d’allergies sévères.",
        },
        {
          question: "Pouvez-vous traiter les odeurs d’urine ou les taches anciennes ?",
          answer:
            "Oui, lorsque c’est techniquement possible. Les odeurs d’origine organique font l’objet d’un pré-traitement enzymatique ciblé. L’efficacité dépend toutefois de la profondeur de pénétration dans les mousses et de l’ancienneté de la tache. Nous donnons toujours un avis honnête lors du diagnostic.",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser le canapé ou le tapis ?",
          answer:
            "En moyenne, le délai est de 4 à 6 heures pour un canapé standard avec une bonne aération, et jusqu’à 8 heures pour les textiles épais ou par temps humide. Les tapis fins sèchent généralement plus rapidement. Nous adaptons nos conseils selon la configuration de votre logement.",
        },
        {
          question: "Dois-je préparer quelque chose avant votre venue ?",
          answer:
            "Il suffit de dégager l’accès aux textiles à traiter (tables basses, objets fragiles) et, si possible, de prévoir une autre pièce pour les animaux pendant l’intervention. Nous protégeons les sols et nous occupons du reste.",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
