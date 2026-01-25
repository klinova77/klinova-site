

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

hubIntro: `<p>Située entre Chelles et Neuilly-sur-Marne, Gournay-sur-Marne présente des besoins d'entretien spécifiques liés à son caractère résidentiel et à la proximité immédiate de la Marne. Klinova accompagne les syndics, gestionnaires et propriétaires dans la maintenance immobilière, avec des interventions adaptées aux typologies locales.</p>
<p class="mt-4">Notre approche repose sur une organisation rigoureuse, une bonne connaissance du secteur et des méthodes éprouvées pour assurer une propreté durable des parties communes, parkings, balcons et espaces intérieurs. Chaque intervention est cadrée en amont et suivie d'un compte-rendu clair à destination du gestionnaire.</p>
<ul>
  <li><strong>Organisation adaptée :</strong> prise en compte des contraintes d'accès, de stationnement et des horaires en zone résidentielle.</li>
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
        "champs-sur-marne",
        "neuilly-sur-marne",
        "chelles",
        "gagny",
        "noisy-le-grand",
        "montfermeil",
        "villiers-sur-marne",
        "vaires-sur-marne",
        "neuilly-plaisance",
        "emerainville"
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
        "<p><strong>Oui, nous intervenons régulièrement à Gournay-sur-Marne et dans les communes limitrophes.</strong> Les prestations programmées sont généralement planifiées sous 48 heures, et les situations urgentes sont traitées selon disponibilité.</p>",
    },
    {
      question: "Comment gérez-vous les accès sécurisés en copropriété ?",
      answer:
        "<p><strong>Les accès (Vigik, badges, clés ou codes) sont définis en amont avec le syndic,</strong> le gardien ou un référent. Une procédure simple est mise en place pour garantir une intervention fluide, sans allers-retours inutiles.</p>",
    },
    {
      question: "Les déplacements pour établir un devis sont-ils gratuits ?",
      answer:
        "<p><strong>Oui, les déplacements pour diagnostic et devis sont gratuits sur Gournay-sur-Marne.</strong> La visite permet d'évaluer précisément les surfaces, les contraintes et de proposer une intervention adaptée.</p>",
    },
    {
      question: "Comment gérez-vous les contraintes de stationnement en zone pavillonnaire ?",
      answer:
        "<p><strong>Nous anticipons les contraintes locales</strong> et planifions les interventions aux horaires les plus adaptés. Lorsque nécessaire, nous échangeons en amont avec le gestionnaire pour organiser le déchargement du matériel.</p>",
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
        "Un nettoyage professionnel des moquettes redonne éclat et propreté aux parties communes, valorisant l'image de votre copropriété et le confort quotidien des résidents de Gournay-sur-Marne.",

      whyUsBullets: [
        "Méthode adaptée aux petites copropriétés et résidences collectives du secteur.",
        "Injection-extraction professionnelle pour un nettoyage en profondeur sans dégrader les fibres.",
        "Organisation discrète avec balisage et maintien des circulations lorsque c'est possible.",
        "Recommandations d'entretien claires pour stabiliser la propreté dans le temps.",
      ],

      uniqueIntro: `<p>Les moquettes des parties communes à Gournay-sur-Marne subissent un encrassement progressif lié au passage quotidien des résidents et aux spécificités locales. Dans les halls d'entrée donnant sur des axes fréquentés comme l'avenue du Maréchal Joffre ou à proximité de la gare RER E Chelles-Gournay, les salissures s'accumulent rapidement : boue transportée depuis les jardins, poussières urbaines issues du trafic routier et taches diverses qui ternissent l'aspect général. Les fibres retiennent ces dépôts en profondeur, créant un voile gris que l'aspirateur domestique ne parvient pas à éliminer.</p>
<p class="mt-4">Avec le temps, cette dégradation visuelle impacte directement l'image de l'immeuble et le ressenti des occupants. Les conseils syndicaux et gestionnaires sont régulièrement sollicités lors des AG sur l'état des parties communes. Les résidents se plaignent de l'aspect négligé, de l'odeur d'humidité et certains locataires potentiels sont même rebutés lors des visites. <strong>Un nettoyage professionnel structuré permet de restaurer un rendu homogène,</strong> d'améliorer l'hygiène des circulations, de prolonger la durée de vie des revêtements textiles et de valoriser immédiatement le patrimoine sans nécessiter un remplacement coûteux.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic et adaptation au bâti local</h3>
<p>Analyse des surfaces à traiter : type de moquette (bouclé, velours, aiguilleté), niveau d'encrassement, zones de passage intensif (halls, boîtes aux lettres, premières marches) et contraintes d'accès propres aux copropriétés de Gournay-sur-Marne. <strong>Nous prenons en compte les situations courantes du bâti local</strong> : halls de taille réduite, cages d'escalier étroites, escaliers tournants ou paliers exigus.</p>

<h3>2. Protection et traitement par injection-extraction</h3>
<p>Les bas de murs et zones sensibles sont protégés, et un balisage clair est mis en place afin de sécuriser l'intervention tout en maintenant la circulation des résidents lorsque c'est possible. <strong>Le nettoyage est réalisé par injection-extraction</strong> : une solution nettoyante est injectée au cœur des fibres puis immédiatement aspirée avec les salissures. Les zones les plus sollicitées font l'objet de passages renforcés pour un résultat homogène.</p>

<h3>3. Extraction optimisée et séchage rapide</h3>
<p>L'extraction immédiate des eaux chargées limite fortement l'humidité résiduelle et favorise un séchage rapide, généralement en 4 à 6 heures selon la ventilation des lieux. <strong>À Gournay-sur-Marne, où l'humidité ambiante liée à la Marne peut être un facteur,</strong> nous veillons particulièrement à l'aspiration finale pour éviter toute odeur d'humidité. Fréquence recommandée : nettoyage professionnel tous les 12 à 18 mois pour les halls et couloirs à fort trafic.</p>`,

      specificChallenges: [
        "Humidité ambiante liée à la proximité de la Marne, pouvant ralentir le séchage des moquettes en rez-de-chaussée si l'extraction n'est pas correctement maîtrisée.",
        "Encrassement accéléré des halls donnant directement sur des axes de circulation, avec apports fréquents de boue, sable et poussières urbaines.",
        "Présence de moquettes anciennes ou fragilisées nécessitant des réglages précis et un test préalable pour préserver fibres et colles.",
        "Apports saisonniers de pollens, poussières fines et résidus terreux issus des jardins et espaces verts environnants.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des petites copropriétés de Gournay-sur-Marne nécessitent-elles un traitement particulier ?",
          answer:
            "<p><strong>Oui, les petites copropriétés présentent souvent des zones de passage concentrées.</strong> Notre méthode d'injection-extraction est ajustée pour traiter efficacement ces surfaces, avec un matériel adapté aux contraintes d'accès et aux superficies réduites.</p>",
        },
        {
          question: "Intervenez-vous dans tous types de bâtiments à Gournay-sur-Marne ?",
          answer:
            "<p><strong>Nous intervenons dans les halls, cages d'escalier, paliers et locaux professionnels de toutes tailles.</strong> Les contraintes d'accès et de stationnement sont analysées en amont afin d'organiser une intervention fluide et adaptée au site.</p>",
        },
        {
          question: "Le nettoyage par injection-extraction peut-il abîmer une moquette ancienne ?",
          answer:
            "<p><strong>Non, lorsque la méthode est correctement réglée.</strong> Un diagnostic et un test préalable permettent d'adapter pression, température et produits selon l'état du revêtement. L'extraction immédiate limite l'humidité et préserve la structure de la moquette.</p>",
        },
        {
          question: "Comment limitez-vous la gêne pour les résidents pendant l'intervention ?",
          answer:
            "<p><strong>Les interventions sont planifiées aux heures de moindre passage lorsque c'est possible.</strong> Un balisage clair est mis en place, et le travail peut être organisé par zones ou par niveaux afin de maintenir les circulations essentielles pendant le nettoyage.</p>",
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
        "Un parking proprement entretenu améliore la sécurité quotidienne des résidents, la lisibilité des marquages au sol et l'image générale des copropriétés de Gournay-sur-Marne.",

      whyUsBullets: [
        "Connaissance des parkings résidentiels locaux : contraintes d'accès, typologies de revêtements, évacuations.",
        "Matériel professionnel adapté : autolaveuse compacte, haute pression contrôlée, dégraissants ciblés.",
        "Organisation par zones permettant de maintenir un accès véhicules pendant l'intervention.",
        "Compte-rendu photographique détaillé avec recommandations d'entretien préventif.",
      ],

      uniqueIntro: `<p>Les parkings souterrains et aériens de Gournay-sur-Marne accumulent rapidement salissures et dépôts liés à la circulation automobile quotidienne. La proximité de l'avenue du Maréchal Joffre (D104) et des flux vers Chelles génère un encrassement constant par particules fines de freinage, résidus de pneus et hydrocarbures. Les sols en béton ou en résine présentent des taches d'huile persistantes, une poussière grasse qui adhère aux chaussures et des marquages au sol progressivement effacés par l'usure.</p>
<p class="mt-4">Cette dégradation crée une impression d'insalubrité et peut générer des risques de glissade, notamment aux abords des rampes d'accès où l'humidité ambiante liée à la Marne accentue le phénomène. Lors des assemblées générales, ces espaces sont fréquemment cités comme points de gêne par les résidents qui se plaignent de salir leurs véhicules et leurs chaussures. Certains copropriétaires craignent même pour leur sécurité. <strong>Un décrassage professionnel redonne propreté, sécurité et lisibilité</strong> à ces zones de passage quotidien tout en valorisant le patrimoine immobilier et en répondant aux attentes légitimes des occupants.</p>`,

      uniqueDeepDive: `<h3>1. Analyse technique et organisation par zones</h3>
<p>Évaluation du revêtement (béton brut, peinture, résine), état des marquages, fonctionnement des évacuations et contraintes d'accès propres aux parkings de Gournay-sur-Marne. <strong>Le chantier est ensuite organisé par zones successives</strong> afin de maintenir un accès véhicules minimal, en coordination avec le syndic et après information des résidents.</p>

<h3>2. Décrassage mécanique et traitement des taches</h3>
<p>Balayage préalable pour retirer les gros déchets, graviers et feuilles. Application ciblée de dégraissant professionnel sur les taches d'hydrocarbures anciennes avec temps de contact adapté (10 à 15 minutes) pour dissoudre les résidus huileux. <strong>L'autolaveuse professionnelle combine ensuite brossage mécanique et aspiration immédiate</strong> pour un nettoyage homogène et maîtrisé.</p>

<h3>3. Finitions haute pression et gestion des eaux</h3>
<p>Les zones fortement encrassées (rampes d'accès, pieds de murs, virages) reçoivent si nécessaire un passage haute pression contrôlé pour restaurer l'adhérence. <strong>L'évacuation des eaux de lavage est strictement encadrée</strong> : récupération via l'autolaveuse et direction vers les réseaux appropriés. Contrôle final de la propreté et vérification de l'absence de flaques résiduelles. Fréquence recommandée : 1 à 2 décrassages annuels selon le trafic et l'exposition à l'humidité.</p>`,

      specificChallenges: [
        "Encrassement accéléré des parkings donnant sur l'avenue du Maréchal Joffre par dépôts de particules fines issues de la circulation.",
        "Taches d'hydrocarbures anciennes sur béton poreux nécessitant des traitements dégraissants ciblés et un temps de contact adapté.",
        "Évacuations d'eau parfois limitées dans certains parkings résidentiels, imposant une gestion rigoureuse des eaux de lavage.",
        "Hauteur sous plafond réduite dans les parkings de copropriété, nécessitant l'usage d'équipements compacts et maîtrisés.",
      ],

      faqAdditions: [
        {
          question: "Pourquoi les parkings de Gournay-sur-Marne s'encrassent-ils rapidement ?",
          answer:
            "<p><strong>La circulation quotidienne vers la gare RER E et les axes routiers voisins génère un dépôt constant.</strong> Les particules fines et résidus liés aux pneumatiques et moteurs se déposent progressivement lors des manœuvres, formant une couche grasse accentuée par l'humidité ambiante proche de la Marne.</p>",
        },
        {
          question: "Faut-il vider complètement le parking pendant l'intervention ?",
          answer:
            "<p><strong>Non, le nettoyage est organisé par zones successives</strong> afin de permettre aux résidents de conserver l'accès à leurs véhicules. Cette organisation est définie en amont avec le syndic pour optimiser la rotation des stationnements et limiter la gêne.</p>",
        },
        {
          question: "Les taches d'huile anciennes peuvent-elles être totalement éliminées ?",
          answer:
            "<p><strong>Les taches récentes sont généralement éliminées complètement.</strong> Pour les taches anciennes profondément imprégnées dans le béton, une atténuation très nette est obtenue, même si une légère trace peut subsister. Dans tous les cas, la surface est assainie, non glissante et plus facile à entretenir.</p>",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans les parkings ?",
          answer:
            "<p><strong>Avant chaque intervention, nous identifions les points d'évacuation disponibles.</strong> Les eaux sont dirigées vers les zones prévues ou récupérées lorsque la configuration l'impose. Cette organisation permet un nettoyage maîtrisé, sans écoulement incontrôlé ni nuisance pour les installations.</p>",
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
        "Un balcon nettoyé avec méthode retrouve son confort d'usage et redevient un véritable espace de vie extérieur pour les habitants de Gournay-sur-Marne.",

      whyUsBullets: [
        "Interventions adaptées aux balcons d'immeubles collectifs et d'habitats pavillonnaires.",
        "Méthodes respectueuses des supports : carrelage, béton, dalles, bois composite.",
        "Gestion rigoureuse de l'eau pour éviter toute gêne du voisinage.",
        "Finitions soignées sur les zones visibles : joints, angles, garde-corps.",
      ],

      uniqueIntro: `<p>À Gournay-sur-Marne, les balcons et s'encrassent progressivement sous l'effet combiné des poussières extérieures, des dépôts naturels et de l'humidité ambiante liée à la proximité de la Marne. Feuilles mortes venues des arbres environnants, terre issue des jardinières, traces de pollution atmosphérique et dépôts verts finissent par ternir les sols, noircir les joints et altérer l'aspect des garde-corps. Dans les zones pavillonnaires nord et sud, les balcons donnant sur des jardins accumulent également des résidus végétaux transportés par le vent.</p>
<p class="mt-4">Avec le temps, cet encrassement transforme le balcon en espace peu accueillant, souvent délaissé par les occupants. Vous finissez par ne plus y sortir votre café du matin, votre mobilier reste bâché toute l'année et vous renoncez à profiter de cet extérieur pourtant précieux. Les enfants n'osent plus y jouer par peur de se salir. <strong>Une remise en état professionnelle permet de redonner un aspect propre et homogène aux surfaces,</strong> de retrouver le plaisir d'un vrai espace de détente et de réinvestir pleinement cet extérieur comme un véritable prolongement du logement, valorisant par la même occasion votre bien immobilier.</p>`,

      uniqueDeepDive: `<h3>1. Préparation et protection des accès</h3>
<p>Protection soigneuse des menuiseries, seuils et accès intérieurs pour éviter toute infiltration. <strong>Les meubles, plantes et objets présents sur le balcon sont déplacés ou protégés</strong> afin de libérer les surfaces à traiter. Les dépôts importants (feuilles, terre, résidus divers) sont retirés manuellement avant toute phase humide, pour éviter d'étaler la saleté ou d'obstruer les évacuations.</p>

<h3>2. Application et action mécanique ciblée</h3>
<p>Application de produits professionnels adaptés au support (fongicides pour les mousses, dégraissants pour les traces de barbecue), associés à un brossage ciblé des joints, angles et zones encrassées. <strong>Si nécessaire, une pression modérée et contrôlée est utilisée,</strong> toujours en privilégiant la préservation des joints et des revêtements. Les garde-corps (verre, aluminium, acier) sont traités séparément avec des produits non abrasifs.</p>

<h3>3. Maîtrise de l'eau et finitions</h3>
<p>La gestion de l'eau est centrale : raclage systématique, orientation du flux vers l'évacuation et, si besoin, récupération ponctuelle afin d'éviter toute coulure sur les façades ou les balcons inférieurs. <strong>Après séchage (généralement en quelques heures selon l'exposition),</strong> le balcon est rendu propre, sain et immédiatement réutilisable. Les vitres et garde-corps sont essuyés pour une finition impeccable. Recommandation : nettoyage annuel au printemps pour conserver un balcon agréable toute l'année.</p>`,

      specificChallenges: [
        "Dépôts de poussières fines et résidus extérieurs qui ternissent rapidement les surfaces exposées.",
        "Développement de mousses et d'algues favorisé par l'humidité, notamment dans les zones ombragées proche de la Marne.",
        "Gestion délicate de l'eau en immeuble collectif pour éviter coulures et nuisances pour le voisinage.",
        "Accès parfois restreints nécessitant un matériel compact et une organisation précise.",
      ],

      faqAdditions: [
        {
          question: "Le nettoyage peut-il abîmer le carrelage ou les joints de mon balcon ?",
          answer:
            "<p><strong>Non, nous adaptons systématiquement la méthode au support et à l'état des joints.</strong> Le nettoyage privilégie l'action chimique adaptée et le brossage. Une pression douce et contrôlée n'est utilisée qu'en complément, après test sur zone discrète, pour préserver l'intégrité des surfaces.</p>",
        },
        {
          question: "Comment évitez-vous que l'eau de lavage coule chez les voisins du dessous ?",
          answer:
            "<p><strong>La quantité d'eau est strictement maîtrisée et le flux orienté vers l'évacuation existante.</strong> En cas d'évacuation insuffisante, nous utilisons des raclettes ou une aspiration ponctuelle pour éviter toute coulure ou infiltration qui pourrait gêner le voisinage.</p>",
        },
        {
          question: "Les produits utilisés présentent-ils un risque pour les plantes ou les animaux ?",
          answer:
            "<p><strong>Les plantes sont protégées ou déplacées pendant l'intervention,</strong> puis remises en place après rinçage. Les produits professionnels sont soigneusement rincés et les surfaces laissées propres et sèches avant réutilisation normale du balcon.</p>",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser le balcon ?",
          answer:
            "<p><strong>Le séchage prend le plus souvent quelques heures,</strong> selon l'exposition et la ventilation. Dès que les surfaces sont sèches au toucher, le balcon peut être réutilisé. Pour les supports plus poreux, nous pouvons recommander un délai un peu plus long avant de replacer du mobilier lourd.</p>",
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
        "Intervention sécurisée : protection de l'intérieur, EPI adaptés et méthode propre pour éviter la dispersion des poussières.",
        "Ramassage contrôlé : humidification maîtrisée, grattage/collecte progressive et conditionnement étanche des déchets.",
        "Nettoyage + désinfection : sol, garde-corps, murs et points de contact traités avec une finition réellement réutilisable.",
        "Respect du voisinage : gestion stricte de l'eau et des écoulements pour éviter coulures, projections et nuisances.",
      ],

      uniqueIntro: `<p>À Gournay-sur-Marne, les balcons souillés par des fientes de pigeons sont un problème récurrent, notamment à proximité des espaces verts et des bords de la Marne, où les oiseaux trouvent facilement des zones de repos et de nidification. Les immeubles proches du Pont de Gournay ou donnant sur les zones arborées offrent des corniches et des retraits propices à l'installation des colonies. Quand la situation s'installe durablement, l'extérieur devient vite inutilisable : odeurs fortes et persistantes, traces tenaces sur les dalles et garde-corps, surfaces glissantes et dangereuses, et surtout risque sanitaire important lié aux poussières sèches qui se dispersent au moindre courant d'air.</p>
<p class="mt-4">Au-delà de l'aspect visuel repoussant qui décourage toute utilisation, les fientes contiennent des bactéries, champignons et parasites nocifs pour la santé humaine. Vous n'osez plus ouvrir votre porte-fenêtre, l'odeur est insupportable et vous craignez pour votre santé et celle de vos enfants. Une tentative de nettoyage domestique sans équipement adapté expose à des risques respiratoires. <strong>Le sujet se gère comme une remise au propre sécurisée</strong> : éviter de remettre des particules en suspension, collecter proprement les déchets contaminés, puis nettoyer et désinfecter les surfaces avec des produits virucides adaptés. L'objectif est simple : récupérer un balcon sain, utilisable en toute sécurité, sans créer de nuisance pour l'intérieur du logement ni pour le voisinage.</p>`,

      uniqueDeepDive: `<h3>1. Confinement et protection sanitaire</h3>
<p>Protection de l'accès intérieur (porte-fenêtre, seuil, zone de passage) pour limiter la dispersion des poussières vers le logement. <strong>Les techniciens interviennent avec des EPI complets</strong> : combinaison jetable, gants épais, masque respiratoire de type FFP3 et lunettes de protection pour éviter tout contact avec les agents pathogènes.</p>

<h3>2. Humidification et ramassage progressif</h3>
<p>Humidification contrôlée des fientes sèches avant toute manipulation, afin d'éviter la dispersion de poussières infectieuses dans l'air. <strong>Les fientes, nids et débris sont ensuite retirés progressivement</strong> (grattage manuel avec outils dédiés, ramassage soigneux), puis conditionnés dans des sacs étanches prévus pour les déchets contaminés, en aucun cas jetés dans les ordures ménagères classiques.</p>

<h3>3. Nettoyage, désinfection et finitions</h3>
<p>Nettoyage complet des surfaces (sol, angles, garde-corps, appuis, murs mitoyens) avec des produits biocides puissants qui dissolvent les résidus organiques incrustés. <strong>Application d'un produit virucide et bactéricide homologué</strong> avec respect strict du temps de contact préconisé pour garantir l'élimination des agents pathogènes. Rinçage final maîtrisé pour retirer les résidus chimiques. Le balcon est laissé en aération complète pendant 24 heures avant toute réutilisation. Installation possible de pics ou de filets anti-pigeons pour prévenir une récidive.</p>`,

      specificChallenges: [
        "Proximité d'espaces verts et des bords de Marne : présence d'oiseaux plus régulière et salissures qui s'installent sur la durée.",
        "Fientes très sèches : poussières de fientes de volatiles à maîtriser par humidification contrôlée et collecte progressive.", 
        "Supports poreux (béton brut, joints, seuils) : nettoyage plus délicat pour désincruster sans abîmer le support.",
        "Contrainte de voisinage en immeuble : écoulements à contrôler strictement pour éviter coulures sur façade et balcons inférieurs.",
      ],

      faqAdditions: [
        {
          question: "Puis-je nettoyer moi-même les fientes de pigeons sur mon balcon ?",
          answer:
            "<p><strong>Bien que possible, cette opération est fortement déconseillée lorsque les fientes sont sèches et en quantité.</strong> Le risque principal est de remettre des poussières en suspension. Une intervention professionnelle vise justement à sécuriser la zone, à humidifier de façon maîtrisée, puis à collecter et désinfecter sans disperser.</p>",
        },
        {
          question: "Les produits de désinfection sont-ils sans danger après séchage ?",
          answer:
            "<p><strong>Oui, une fois le protocole terminé</strong> (désinfection + rinçage si nécessaire) et après séchage complet, les surfaces redeviennent utilisables normalement. Sur place, on vous donne une consigne simple de délai de séchage selon la météo et l'aération.</p>",
        },
        {
          question: "Les fientes risquent-elles d'avoir endommagé mon balcon ?",
          answer:
            "<p><strong>Oui, c'est possible : l'acidité des fientes peut corroder certains métaux,</strong> marquer des carrelages, ou laisser des auréoles sur béton/joints si ça a stagné longtemps. Le nettoyage stoppe la dégradation en cours et remet au propre, mais ne répare pas toujours une attaque chimique ancienne du matériau.</p>",
        },
        {
          question: "Que faites-vous des fientes et nids récupérés ?",
          answer:
            "<p><strong>L'évacuation est totale et sécurisée :</strong> aucun résidu n'est laissé sur place ni jeté dans les bacs de l'immeuble. Les déchets biologiques sont emballés hermétiquement et transportés en déchetterie selon les normes sanitaires pour garantir une hygiène irréprochable.</p>",
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

      uniqueIntro: `<p>Dans les logements familiaux de Gournay-sur-Marne, qu'il s'agisse de maisons pavillonnaires avec jardin ou d'appartements en petites copropriétés, canapés, tapis et matelas sont fortement sollicités au quotidien. Les enfants qui jouent, les animaux domestiques qui rentrent de l'extérieur, les repas pris au salon et les utilisations intensives de la vie de famille laissent leurs marques. Les taches visibles s'installent progressivement — boissons renversées, traces alimentaires, salissures organiques — tandis que poussières, acariens et leurs déjections s'accumulent en profondeur dans les fibres textiles, invisibles mais bien présents.</p>
<p class="mt-4">Avec le temps, ces encrassements créent un véritable inconfort : odeurs persistantes qui ne partent pas malgré l'aération, aspect terni qui donne une impression de négligence, sensation de textile "sale" malgré l'aspiration régulière. Dans certains logements peu ventilés ou en rez-de-jardin proche de la Marne, l'humidité ambiante peut même accentuer ces désagréments. Les personnes allergiques souffrent davantage car les acariens prolifèrent dans ces environnements chargés. Certaines familles hésitent même à recevoir des invités par gêne de l'aspect taché de leur canapé. <strong>Un nettoyage professionnel à domicile permet de retrouver des textiles plus propres, plus agréables à utiliser et plus sains pour toute la famille,</strong> sans avoir à remplacer le mobilier, une solution économique et écologique qui prolonge la durée de vie de vos investissements de plusieurs années.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic personnalisé et pré-traitement</h3>
<p>Identification précise des fibres (coton, laine, synthétique, velours, microfibre), repérage des zones les plus sollicitées (accoudoirs, assises, passages de tapis) et analyse des taches selon leur nature et leur ancienneté. <strong>Cette étape permet d'adapter les réglages et les produits</strong> pour respecter la structure du textile. Test préalable sur zone discrète pour les tissus fragiles ou fortement teintés.</p>

<h3>2. Injection-extraction professionnelle</h3>
<p>Les zones marquées font l'objet d'un pré-traitement ciblé avec des solutions enzymatiques pour les salissures organiques (urine, vomissures, taches alimentaires). <strong>Le nettoyage principal est réalisé par injection-extraction</strong> : la solution nettoyante est injectée au cœur des fibres puis immédiatement aspirée avec les salissures dissoutes, les acariens et leurs déjections. L'humidité est strictement maîtrisée pour protéger les rembourrages et faciliter le séchage.</p>

<h3>3. Extraction maximale et conseils de séchage</h3>
<p>L'aspiration puissante de notre équipement retire l'essentiel de l'humidité : le mobilier reste légèrement humide mais non trempé. <strong>En fin d'intervention, nous donnons des consignes simples d'aération</strong> (ouverture des fenêtres, chauffage modéré si besoin) afin d'optimiser le temps de séchage, généralement compris entre 4 et 8 heures selon l'épaisseur du textile et la ventilation du logement. Conseils d'entretien régulier pour prolonger le résultat et retarder le prochain nettoyage professionnel.</p>`,

      specificChallenges: [
        "Humidité résiduelle dans certains logements proches des bords de Marne ou en rez-de-jardin, ralentissant le séchage des textiles épais.",
        "Présence fréquente d'animaux domestiques : poils incrustés, odeurs spécifiques et taches organiques nécessitant un pré-traitement adapté.",
        "Textiles volumineux (canapés profonds, matelas épais) demandant une extraction maximale pour limiter l'humidité résiduelle.",
        "Pièces de vie ou logements anciens peu ventilés : nécessité d'adapter la méthode et de conseiller une aération renforcée après intervention.",
      ],

      faqAdditions: [
        {
          question: "Le nettoyage permet-il d'éliminer les acariens et allergènes ?",
          answer:
            "<p><strong>Le nettoyage par injection-extraction réduit fortement la charge allergène</strong> en retirant poussières, squames et résidus accumulés dans les fibres. Cela améliore nettement le confort d'usage et la qualité de l'air intérieur, sans se substituer à un traitement anti-acarien spécifique en cas d'allergies sévères.</p>",
        },
        {
          question: "Pouvez-vous traiter les odeurs d'urine ou les taches anciennes ?",
          answer:
            "<p><strong>Oui, lorsque c'est techniquement possible.</strong> Les odeurs d'origine organique font l'objet d'un pré-traitement enzymatique ciblé. L'efficacité dépend toutefois de la profondeur de pénétration dans les mousses et de l'ancienneté de la tache. Nous donnons toujours un avis honnête lors du diagnostic.</p>",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser le canapé ou le tapis ?",
          answer:
            "<p><strong>En moyenne, le délai est de 4 à 6 heures pour un canapé standard</strong> avec une bonne aération, et jusqu'à 8 heures pour les textiles épais ou par temps humide. Les tapis fins sèchent généralement plus rapidement. Nous adaptons nos conseils selon la configuration de votre logement.</p>",
        },
        {
          question: "Dois-je préparer quelque chose avant votre venue ?",
          answer:
            "<p><strong>Il suffit de dégager l'accès aux textiles à traiter</strong> (tables basses, objets fragiles) et, si possible, de prévoir une autre pièce pour les animaux pendant l'intervention. Nous protégeons les sols et nous occupons du reste.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Restauration complète de votre terrasse avec identification du revêtement, suppression des mousses et salissures, et application d'un traitement protecteur adapté aux conditions locales.",
      whyUsBullets: [
        "Intervention sur l'ensemble du territoire gournaysien : secteurs Centre-Ville, Bords de Marne, Bel-Air et quartiers pavillonnaires résidentiels.",
        "Expertise adaptée aux propriétés locales : terrasses des pavillons traditionnels, dallages des maisons en meulière, aménagements contemporains des constructions récentes.",
        "Précautions renforcées pour les jardins : bâchage du mobilier extérieur, protection des végétaux et massifs fleuris, gestion maîtrisée des eaux de rinçage.",
      ],
      uniqueIntro: `<p>Gournay-sur-Marne, plus petite commune de Seine-Saint-Denis avec ses 1,68 km², conserve un caractère de <strong>village résidentiel</strong> prisé aux portes de la Seine-et-Marne. Cette enclave verdoyante, bordée par la <strong>Marne</strong> et le <strong>canal de Chelles</strong>, abrite un parc immobilier majoritairement pavillonnaire où les terrasses constituent un prolongement naturel de l'habitat.</p>

<p class="mt-4">La proximité immédiate de la rivière et du <strong>parc départemental de la Haute-Île</strong> (65 hectares de zone humide classée Natura 2000) génère un taux d'humidité favorable au développement des mousses, algues et lichens. Les terrasses exposées nord ou ombragées par les arbres des jardins gournaysiens subissent un encrassement accéléré, rendant les surfaces glissantes et altérant leur aspect.</p>

<p class="mt-4">L'évaluation initiale identifie le type de revêtement — <strong>dalles béton</strong>, <strong>carrelage</strong>, <strong>pierre</strong> ou <strong>bois composite</strong> — et détermine le protocole le mieux adapté pour retrouver une surface propre sans compromettre l'intégrité du support.</p>`,
      uniqueDeepDive: `<h3>T1: Reconnaissance du site et préparation</h3>
<p>Mobilier de jardin, jardinières et éléments décoratifs sont déplacés ou protégés. Les façades, menuiseries et plantations adjacentes sont bâchées pour éviter les projections. Un balayage soigneux élimine feuilles, débris végétaux et terre accumulée sur le revêtement.</p>

<h3>T2: Traitement adapté au support</h3>
<p>Le produit nettoyant est sélectionné selon le matériau : formule alcaline pour béton et carrelage minéral, solution neutre pour pierre naturelle, traitement spécifique pour bois et composite. L'action mécanique par brossage déloge les incrustations tenaces. Le rinçage s'effectue à pression ajustée pour respecter les joints et la surface.</p>

<h3>T3: Protection et conseils d'entretien</h3>
<p>Un traitement préventif anti-mousse est appliqué sur les zones les plus exposées à l'humidité ambiante. L'évacuation des eaux est dirigée vers les points d'écoulement du jardin. Des recommandations d'entretien saisonnier sont transmises pour prolonger le résultat face à l'environnement humide des bords de Marne.</p>`,
      specificChallenges: [
        "Humidité permanente liée à la Marne et au canal de Chelles : prolifération rapide des mousses et algues vertes sur toutes les surfaces.",
        "Pavillons traditionnels avec terrasses en dalles béton années 60-80 : joints fragilisés par les cycles gel-dégel.",
        "Meulières rénovées avec dallages anciens : supports poreux nécessitant des produits à pH contrôlé.",
        "Carrelage grès cérame des aménagements récents : micro-reliefs antidérapants retenant les salissures.",
        "Jardins arborés typiques des propriétés gournaysiennes : ombre favorisant l'encrassement et accès parfois contraints.",
      ],
      faqAdditions: [
        {
          question:
            "Ma terrasse à Gournay reverdit très vite à cause de l'humidité des bords de Marne, que pouvez-vous faire ?",
          answer:
            "<p>La proximité de la Marne et du canal de Chelles génère effectivement une humidité propice au développement rapide des mousses et algues. Après le nettoyage complet, nous appliquons un traitement préventif qui freine significativement cette repousse. Un balayage régulier des débris végétaux et une nouvelle application annuelle permettent de maintenir le résultat plus longtemps malgré l'environnement humide.</p>",
        },
        {
          question:
            "Comment traitez-vous les terrasses des pavillons anciens avec des dalles béton vieillissantes ?",
          answer:
            "<p>Les dalles béton des pavillons années 60-80 présentent souvent une porosité variable et des joints fragilisés par le temps. Nous utilisons un produit alcalin adapté qui désincruste les salissures sans attaquer le matériau. La pression de rinçage est calibrée pour nettoyer efficacement sans dégrader les joints existants.</p>",
        },
        {
          question:
            "Intervenez-vous sur les terrasses des propriétés avec jardin arboré et accès étroit ?",
          answer:
            "<p>Les propriétés gournaysiennes disposent souvent de jardins plantés avec des accès par allées étroites ou passages latéraux. Notre équipement portable permet d'intervenir sans difficulté dans ces configurations. Le matériel est acheminé manuellement et les produits sont conditionnés pour un transport aisé jusqu'à la zone de travail.</p>",
        },
        {
          question:
            "Quelle précaution prenez-vous pour les plantations lors du nettoyage de terrasse ?",
          answer:
            "<p>Les jardins fleuris de Gournay — commune labellisée Villes et Villages Fleuris — méritent une attention particulière. Nous bâchons systématiquement les massifs et jardinières à proximité de la zone de travail. Les produits utilisés sont sélectionnés pour leur faible impact environnemental et le rinçage est orienté vers les zones d'écoulement existantes, à l'écart des plantations.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "Remise en état d’appartements et de maisons à Gournay-sur-Marne, avant remise des clés ou après déménagement, avec une intervention structurée et un soin particulier des surfaces vitrées (vérandas, baies).",

  whyUsBullets: [
    "Approche adaptée au cadre “bords de Marne” : villas, parquet bois, terre cuite et pièces humides à traiter sans excès d’eau.",
    "Organisation fluide sans gare intra-muros : coordination d’accès avec Chelles-Gournay/Noisy-Champs et créneaux optimisés.",
    "Finitions utiles pour l’état des lieux : cuisine, sanitaires, points de contact, vitres accessibles et contrôle visuel final.",
  ],

  uniqueIntro: `<p>Gournay-sur-Marne a une configuration à part : une petite commune résidentielle, entre la Place de la Libération et les Bords de Marne, où l’on attend une intervention discrète et précise. Ici, les demandes portent souvent sur une remise en état après déménagement, une préparation avant remise des clés, ou un logement qui a peu vécu pendant un moment et qui doit redevenir net, sans “sur-traiter” les matériaux.</p>
<p class="mt-4">Entre les villas avec parquet bois et véranda, les maisons plus récentes, et quelques résidences R+2/R+3 en centre, les surfaces ne réagissent pas pareil : traces sur les vitrages, plinthes marquées, dépôts calcaires dans la salle de bain, cuisine à remettre au propre sur les zones accessibles. Sur les bords de l’eau, l’humidité impose aussi une méthode maîtrisée pour éviter les reprises ou les odeurs d’humide après passage.</p>
<p class="mt-4">Pour un <strong>nettoyage appartement maison Gournay-sur-Marne</strong>, Klinova applique un cadre clair : <strong>selon l’état réel du logement, une visite technique peut être nécessaire.</strong> On définit le périmètre, on cale l’accès (clé, badge, stationnement), puis on déroule une remise en état par pièces, avec un contrôle final pour livrer un résultat propre et cohérent.</p>`,

  uniqueDeepDive: `<h3>T1 : Cadrage et repérage du logement</h3>
<p>Nous commençons par identifier le contexte (logement vide, avant état des lieux, remise en état du logement après période d’inoccupation) et les matériaux : parquet, carrelage, terre cuite, vitrages (baies, petits carreaux, véranda). Nous anticipons aussi les contraintes de Gournay : stationnement plus tendu autour de la Place de la Libération et circulation vers le Pont de Gournay aux heures chargées.</p>

<h3>T2 : Intervention par zones, avec priorité aux pièces d’eau</h3>
<p>Nous procédons de haut en bas : dépoussiérage des surfaces, plinthes, menuiseries, puis traitement des sols selon le revêtement. La cuisine est remise au propre avec un <strong>dégraissage cuisine</strong> ciblé sur les éléments accessibles (plans, crédences, façades selon l’état). La salle de bain et les sanitaires reçoivent un <strong>détartrage sanitaires</strong> adapté (robinetterie, parois, joints). Les points de contact (poignées, interrupteurs) et les vitres accessibles sont inclus pour un rendu homogène. <strong>Débarras léger si nécessaire</strong>, uniquement pour libérer les zones à traiter.</p>

<h3>T3 : Finitions, aération et contrôle</h3>
<p>Nous terminons par un contrôle visuel pièce par pièce, et une aération conseillée pour limiter l’humidité résiduelle, particulièrement utile près des Bords de Marne. L’objectif est de sécuriser un <strong>nettoyage avant état des lieux</strong> ou un <strong>nettoyage après déménagement</strong>, sans promesse absolue : l’intervention vise un rendu propre, lisible et conforme au périmètre défini.</p>`,

  specificChallenges: [
    "Cadre bords de Marne : humidité plus sensible, besoin de techniques maîtrisées et de conseils d’aération.",
    "Vitrages fréquents (vérandas, baies) : finition sans traces sur vitres accessibles et rebords.",
    "Centre-ville compact : stationnement plus compliqué autour de la Place de la Libération, surtout jours de marché.",
    "Accès et circulation : bouchons possibles au Pont de Gournay vers Chelles, à anticiper dans le créneau.",
  ],

  faqAdditions: [
    {
      question:
        "Quelle prestation recommandez-vous pour préparer une maison des Bords de Marne avant remise des clés ?",
      answer: `<p>Nous proposons une remise en état du logement structurée : sols et plinthes, cuisine (zones accessibles), salle de bain et sanitaires, points de contact et vitres accessibles. Le périmètre est défini avant l’intervention, ce qui permet d’aller à l’essentiel pour un rendu net et cohérent le jour de la remise.</p>`,
    },
    {
      question:
        "Traitez-vous les vérandas et grandes baies vitrées que l’on trouve souvent à Gournay ?",
      answer: `<p>Oui, sur les vitres accessibles. Nous intégrons un passage soigné sur les vitrages et les rebords, avec des produits adaptés pour limiter les traces. Pour les hauteurs ou accès spécifiques, on le précise au moment du cadrage.</p>`,
    },
    {
      question:
        "Intervenez-vous sur un appartement en résidence en centre-ville avant état des lieux ?",
      answer: `<p>Oui. Nous calons l’accès (clé, badge/digicode) et planifions l’intervention en tenant compte du stationnement autour de la Place de la Libération. L’objectif est un <strong>nettoyage avant état des lieux</strong> propre et homogène, avec contrôle visuel final.</p>`,
    },
    {
      question:
        "Comment évitez-vous l’humidité résiduelle après intervention, surtout près de la Marne ?",
      answer: `<p>Nous privilégions des techniques qui limitent l’eau sur les sols et recommandons une aération en fin d’intervention. Cela aide à retrouver un logement confortable rapidement, notamment quand l’air est plus humide sur les Bords de Marne.</p>`,
    },
  ],

  ctaOverride: "",
},




  ],
};

export default city;

