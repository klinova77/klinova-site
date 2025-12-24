
// src/data/cities/champs-sur-marne.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Champs-sur-Marne",
  slug: "champs-sur-marne",
  postalCodes: ["77420"],

  customDescription:
  "Entre la Cité Descartes et les quartiers résidentiels proches des bords de Marne, Champs-sur-Marne combine flux quotidiens, espaces verts et zones d’humidité. Cette configuration accélère l’encrassement des parties communes et des extérieurs, et demande une maintenance régulière, planifiée et traçable pour garder des immeubles propres et accueillants.",

  hubIntro: `<p><strong>Pour les syndics de copropriété et les gestionnaires de patrimoine à Champs-sur-Marne</strong>, la diversité du parc immobilier, allant des résidences étudiantes de la Cité Descartes aux ensembles familiaux du Nesles, impose une stratégie de maintenance immobilière flexible. Klinova agit comme votre partenaire technique de terrain, assurant une propreté constante des parties communes et des extérieurs, adaptée aux pics d'activité liés aux rentrées universitaires ou aux saisons humides.</p>
<p class="mt-4">Nous garantissons une gestion globale de l'hygiène de vos bâtiments grâce à des processus éprouvés et une communication fluide avec les conseils syndicaux. Notre expertise couvre aussi bien la rénovation des sols de parkings souterrains que l'entretien courant des halls d'entrée, avec un souci constant de traçabilité.</p>
<ul>
  <li><strong>Mise en œuvre de protocoles de nettoyage intensif</strong> pour les zones à fort turn-over (résidences étudiantes, locatif).</li>
  <li><strong>Gestion sécurisée des accès</strong> (badges Vigik, clés) pour fluidifier les interventions dans les grandes copropriétés.</li>
  <li><strong>Reporting systématique après intervention</strong> pour assurer le suivi technique auprès des gestionnaires.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement rapide des moquettes et sols des halls d'entrée dans les zones à forte densité étudiante (Cité Descartes) dû aux déménagements fréquents et au trafic piéton intense.",
    "Prolifération de mousses et dépôts verts sur les balcons et façades des résidences situées à proximité immédiate des zones boisées (Bois de Grâce) et des plans d'eau.",
    "Accumulation de poussières et de résidus urbains dans les parkings souterrains des grands ensembles construits dans les années 70-80 (Le Nesles, Pablo Picasso), nécessitant un dégraissage mécanique puissant.",
    "Gestion de l'humidité remontante dans les parties basses des immeubles proches des bords de Marne et des étangs, favorisant les odeurs de renfermé dans les parties communes.",
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  districts: [
    "Centre-ville (Vieux Champs)",
    "Bois de Grâce",
    "Bords de Marne",
    "Pablo Picasso",
    "Le Nesles (Les Pyramides)",
    "Le Luzard",
    "Cité Descartes",
  ],

  nearbyCities: [
    "gournay-sur-marne",
    "chelles",
    "noisy-le-grand",
    "vaires-sur-marne",
    "torcy",
  ],

  landmarks: [
    "Mairie de Champs-sur-Marne",
    "Château de Champs-sur-Marne",
    "Gare RER Noisy-Champs",
    "Cité Descartes (École des Ponts, ESIEE, Université Gustave Eiffel)",
    "Église Saint-Loup",
    "Bords de Marne",
  ],

  faq: [
    {
      question:
        "Êtes-vous en mesure d'intervenir rapidement près de la Cité Descartes pour des remises en état urgentes ?",
      answer:
        "<p><strong>Oui, notre organisation est calibrée pour ce secteur dynamique.</strong> Que ce soit pour une fin de chantier ou un nettoyage après sinistre dans une résidence proche du Boulevard Newton ou de la gare Noisy-Champs, nous déployons une équipe technique sous 24 à 48 heures pour assurer la continuité de service.</p>",
      category: "Interventions",
    },
    {
      question:
        "Comment gérez-vous le nettoyage des parkings dans les quartiers denses comme le Bois de Grâce ?",
      answer:
        "<p><strong>Nous planifions les interventions en concertation avec le syndic.</strong> Le stationnement étant tendu dans ces zones résidentielles, nous procédons par zones balisées ou sur des créneaux horaires spécifiques pour minimiser la gêne tout en garantissant un décrassage complet (autolaveuse, haute pression).</p>",
      category: "Parkings",
    },
    {
      question:
        "Les devis pour le nettoyage de moquettes ou de balcons sont-ils payants ?",
      answer:
        "<p><strong>Non, le déplacement est toujours gratuit.</strong> Que vous soyez situé dans le Vieux Champs ou près des Pyramides du Nesles, nous venons sur place pour évaluer l'état des surfaces et vous remettre un chiffrage précis sans aucun engagement de votre part.</p>",
      category: "Devis",
    },
    {
      question:
        "Avez-vous l'habitude de travailler avec les systèmes d'accès des grandes résidences (Vigik) ?",
      answer:
        "<p><strong>C'est notre quotidien.</strong> Nous collaborons avec les gestionnaires d'immeubles pour la gestion des pass et badges Vigik. Nos équipes sont autonomes pour accéder aux parties communes et aux locaux techniques, simplifiant ainsi la logistique pour le conseil syndical.</p>",
      category: "Accès & logistique",
    },
  ],

  testimonial: {
    text:
      "Klinova a remis à niveau nos halls et parkings à Champs-sur-Marne avec une grande rigueur. Planning respecté, communication fluide avec le conseil syndical et résultats visibles immédiatement.",
    author: "Conseil syndical d'une copropriété du Nesles",
    role: "Copropriétaire référent",
    building: "Résidence au Nesles, Champs-sur-Marne",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Des sols textiles rénovés et sains, débarrassés des traces de passage intensif, pour valoriser l'image de vos résidences étudiantes et copropriétés à Champs-sur-Marne.",
      whyUsBullets: [
        "Connaissance pointue des résidences étudiantes de la Cité Descartes et des grands ensembles du Nesles.",
        "Matériel d'injection-extraction industriel pour traiter de grandes surfaces rapidement.",
        "Planification flexible adaptée aux périodes de vacance scolaire ou aux horaires de bureau.",
      ],

      uniqueIntro: `<p>Les résidences de Champs-sur-Marne, qu'il s'agisse des ensembles familiaux du quartier du Nesles ou des logements étudiants de la Cité Descartes, sont soumises à un trafic piétonnier dense. Les moquettes des couloirs, halls et escaliers accumulent rapidement la poussière, les traces de boue provenant des espaces verts et les taches accidentelles.</p>
<p class="mt-4">Visuellement, cela se traduit par des chemins grisâtres au centre des circulations et un ternissement général qui donne une impression de vétusté prématurée. <strong>Une maintenance technique par injection-extraction</strong> permet de désincruster ces polluants en profondeur, prolongeant la durée de vie du revêtement et restaurant un cadre de vie agréable.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique sur place</h3>
<p>Nous évaluons la composition de la fibre (souvent synthétique dans les constructions des années 80) et repérons les zones critiques. <strong>Protection systématique des plinthes et bas de portes</strong> pour éviter toute dégradation par l'humidité.</p>

<h3>2. Injection-extraction à haute pression</h3>
<p>Une solution détergente est injectée pour dissoudre les salissures, puis immédiatement aspirée. Nous insistons sur les zones de piétinement intense (sorties d'ascenseurs, entrées d'immeubles) en multipliant les passes pour redresser la fibre. <strong>Logistique adaptée aux longs linéaires</strong> de couloirs dans les résidences type Pyramides.</p>

<h3>3. Séchage optimisé et recommandations</h3>
<p>L'aspiration puissante laisse une humidité résiduelle minime. Le séchage est facilité par une ventilation naturelle lorsque c'est possible. <strong>Fréquence recommandée : 12 à 18 mois</strong> pour les copropriétés à fort trafic, à ajuster selon l'intensité des emménagements.</p>`,

      specificChallenges: [
        "Le fort turnover dans les résidences étudiantes de la Cité Descartes entraîne des taches fréquentes (alimentaires, boissons) et des traces de valises nécessitant un détachage ciblé.",
        "La proximité des zones boisées favorise l'apport de terre et d'humus dans les halls, incrustant les fibres des tapis d'entrée.",
        "Les longs couloirs des immeubles des années 70-80 (quartier Pablo Picasso) exigent une logistique spécifique pour l'alimentation en eau et l'électricité sur de grandes distances.",
      ],

      faqAdditions: [
        {
          question:
            "Comment gérez-vous les taches spécifiques liées aux résidences étudiantes (chewing-gums, boissons sucrées) ?",
          answer:
            "<p><strong>Nous appliquons des traitements ciblés.</strong> Pour les chewing-gums, traitement cryogénique ou solvant spécifique qui durcit la gomme pour la décoller sans arracher la fibre. Pour les boissons sucrées, notre injection-extraction à l'eau chaude dissout les sucres et élimine l'aspect poisseux.</p>",
        },
        {
          question:
            "Intervenez-vous aussi dans les locaux d'entreprises et les bureaux du campus ?",
          answer:
            "<p><strong>Oui, nous assurons l'entretien pour les professionnels.</strong> Nous savons que la disponibilité des locaux est cruciale. Nous pouvons programmer nos interventions tôt le matin, en soirée ou le week-end pour ne pas impacter l'activité des bureaux ou l'accès aux salles de cours.</p>",
        },
        {
          question:
            "Le nettoyage peut-il raviver une moquette installée il y a plus de 10 ans ?",
          answer:
            "<p><strong>L'usure mécanique irréversible mise à part,</strong> l'injection-extraction retire le voile gris de pollution et les taches. Cela redonne de la couleur et un aspect propre immédiat, prolongeant la durée de vie du revêtement de quelques années avant son remplacement nécessaire.</p>",
        },
        {
          question:
            "Avez-vous besoin d'un accès à l'eau dans les étages pour nettoyer les couloirs ?",
          answer:
            "<p><strong>Idéalement, oui.</strong> L'accès à un point d'eau (local ménage, robinet de service) à chaque étage facilite l'intervention et réduit la longueur des tuyaux. Si les points d'eau sont rares, nous adaptons notre équipement avec des machines à grands réservoirs pour travailler en autonomie.</p>",
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
        "Assurez la sécurité de vos parkings souterrains ou aériens à Champs-sur-Marne grâce à un décrassage technique éliminant huiles et poussières pour un environnement sain et accueillant.",
      whyUsBullets: [
        "Expertise des grands volumes de stationnement, des parkings bureaux de Descartes aux sous-sols du Nesles.",
        "Parc matériel complet incluant autolaveuses performantes pour un rendement élevé et séchage rapide.",
        "Coordination avec syndics et gestionnaires pour gérer la rotation des véhicules sans bloquer les accès.",
      ],

      uniqueIntro: `<p>Au sein des grands ensembles résidentiels du Val-Maubuée ou des parcs d'activités de la Cité Descartes, les parkings subissent une sollicitation intense. La proximité de l'autoroute A4 et de la A199 génère un dépôt continu de particules fines qui noircissent les sols et les murs.</p>
<p class="mt-4">Dans les copropriétés denses comme celles du quartier Pablo Picasso ou du Nesles, les fuites d'huile et les traces de pneumatiques s'accumulent, rendant les surfaces glissantes et les marquages au sol illisibles. <strong>Cet encrassement compromet la sécurité des usagers</strong> (risque de chute, mauvaise visibilité) et nuit à l'esthétique de l'immeuble.</p>`,

      uniqueDeepDive: `<h3>1. Audit complet et préparation</h3>
<p>Nous évaluons la nature du revêtement, l'état des siphons de sol, la hauteur sous poutre et la ventilation. <strong>Balayage mécanique des allées</strong> pour retirer déchets volatils et sables abrasifs. Organisation par secteurs balisés pour permettre une rotation fluide des véhicules.</p>

<h3>2. Décrassage mécanique intensif</h3>
<p>Nettoyage avec autolaveuses industrielles qui brossent le sol avec une solution dégraissante et aspirent instantanément les résidus. Les zones critiques comme les rampes d'accès sont traitées à la haute pression eau chaude pour un décapage ciblé. <strong>Attention particulière aux angles et piliers.</strong></p>

<h3>3. Gestion stricte des effluents</h3>
<p>Les eaux de lavage chargées d'hydrocarbures sont récupérées par nos machines et ne sont jamais rejetées dans le réseau pluvial, conformément aux réglementations environnementales. <strong>Fréquence recommandée : 1 à 2 passages annuels</strong> pour garantir la pérennité des installations.</p>`,

      specificChallenges: [
        "La densité de circulation autour du campus Descartes et des axes autoroutiers accélère le dépôt de suies grasses sur les sols et les murs.",
        "Les parkings des résidences des années 70-80 présentent souvent des bétons bruts devenus poreux qui absorbent les huiles, nécessitant un traitement de fond.",
        "La gestion de la ventilation et de l'éclairage dans les niveaux inférieurs profonds est cruciale pour assurer un séchage efficace et la sécurité des équipes.",
      ],

      faqAdditions: [
        {
          question:
            "La poussière noire revient-elle rapidement après le nettoyage dans ce secteur ?",
          answer:
            "<p><strong>La proximité de l'A4 et de la A199 favorise effectivement le dépôt de particules fines.</strong> Cependant, notre nettoyage mécanique extrait la crasse incrustée dans les pores du béton, ce que le balayage seul ne peut faire. Cela retarde considérablement le noircissement visible (6 à 12 mois).</p>",
        },
        {
          question:
            "Comment organisez-vous le nettoyage si le parking est plein en journée ?",
          answer:
            "<p><strong>Nous procédons par phasage.</strong> Nous découpons le plateau en plusieurs zones de travail. Nous traitons une zone libérée et balisée pendant que les véhicules stationnent ailleurs, puis nous inversons. Cette méthode maintient l'activité opérationnelle durant le chantier.</p>",
        },
        {
          question:
            "Pouvez-vous nettoyer les rampes d'accès très pentues et glissantes ?",
          answer:
            "<p><strong>Oui, c'est une priorité de sécurité.</strong> Les rampes accumulent les résidus de freinage et les huiles, devenant dangereuses par temps humide. Nous utilisons un traitement haute pression couplé à un dégraissant puissant pour décaper le revêtement antidérapant sans l'abîmer.</p>",
        },
        {
          question:
            "Est-ce que le lavage à grande eau risque d'inonder les sous-sols ?",
          answer:
            "<p><strong>Nous ne pratiquons pas de lavage à grande eau incontrôlé.</strong> Nos autolaveuses injectent la solution nettoyante et l'aspirent quasi-simultanément. Le sol est laissé propre et quasiment sec. Nous nous assurons du bon fonctionnement des pompes de relevage pour éviter toute stagnation.</p>",
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
        "Réappropriez-vous votre terrasse ou balcon à Champs-sur-Marne grâce à un nettoyage technique éliminant mousses et pollution pour un extérieur impeccable et immédiatement utilisable.",
      whyUsBullets: [
        "Maîtrise des contraintes liées à la proximité des bois et de la Marne à Champs-sur-Marne.",
        "Utilisation de nettoyeurs haute pression réglables pour préserver l'intégrité des carrelages et bétons.",
        "Gestion stricte des eaux de rinçage pour éviter tout conflit de voisinage en résidence collective.",
      ],

      uniqueIntro: `<p>L'exposition aux espaces verts comme le Bois de Grâce, combinée à la densité urbaine de Champs-sur-Marne, crée des conditions propices à l'encrassement des extérieurs. Les résidents des quartiers du Nesles ou des Bords de Marne constatent souvent l'apparition rapide de mousses glissantes, de lichens et d'un voile noir lié à la pollution atmosphérique sur leurs balcons.</p>
<p class="mt-4">Cet état de saleté, marqué par des joints noircis et des dalles ternies, dissuade l'utilisation de cet espace qui finit par être délaissé. Au-delà de l'aspect visuel, ces dépôts peuvent rendre le sol dangereux. <strong>Une remise en état professionnelle permet de décaper les surfaces en profondeur</strong> sans risque pour l'étanchéité, redonnant ainsi tout son attrait à votre logement.</p>`,

      uniqueDeepDive: `<h3>1. Mise en sécurité et préparation</h3>
<p>Nous protégeons soigneusement les baies vitrées, les menuiseries et les zones de passage avec des bâches étanches. Nous déplaçons ou couvrons le mobilier et les végétaux pour éviter toute projection. <strong>Retrait manuel des amas de feuilles, terre et débris</strong> accumulés dans les angles et les gouttières.</p>

<h3>2. Décapage et nettoyage des surfaces</h3>
<p>Application d'un détergent professionnel adapté au matériau (béton, carrelage, bois) pour dissoudre les salissures organiques et atmosphériques. Brossage mécanique suivi d'un rinçage à la haute pression contrôlée. <strong>Buses spécifiques pour nettoyer efficacement</strong> sans agresser les joints ni fragiliser les supports anciens.</p>

<h3>3. Maîtrise de l'eau et finitions</h3>
<p>Nous canalisons les flux vers les évacuations à l'aide de raclettes et utilisons un aspirateur à eau industriel si nécessaire pour prévenir tout écoulement chez les voisins du dessous ou sur la façade. <strong>Essuyage des garde-corps et des vitres.</strong> Nous vous donnons les consignes pour le séchage optimal.</p>`,

      specificChallenges: [
        "La proximité immédiate des zones boisées favorise une accumulation rapide de feuilles et de mousses nécessitant un traitement fongicide.",
        "Les balcons des immeubles construits dans les années 80 (quartier des Pyramides) présentent parfois des bétons devenus poreux qui absorbent la pollution.",
        "L'évacuation des eaux sur les loggias fermées ou mal drainées impose l'usage systématique d'aspirateurs à liquides pour éviter les débordements.",
      ],

      faqAdditions: [
        {
          question:
            "Le passage du nettoyeur haute pression peut-il décoller les joints de mon carrelage ?",
          answer:
            "<p><strong>C'est un risque si le matériel est mal utilisé.</strong> Chez Klinova, nous réglons la pression en fonction de l'état de vos joints et de la dureté du carrelage. Nous utilisons des jets plats qui nettoient par balayage plutôt que par impact direct, préservant ainsi les joints.</p>",
        },
        {
          question:
            "Comment faites-vous pour ne pas inonder le balcon du voisin du dessous ?",
          answer:
            "<p><strong>Nous sommes très vigilants sur ce point crucial.</strong> Nous n'inondons pas le balcon ; nous utilisons l'eau avec parcimonie pour le rinçage. Nos techniciens dirigent l'eau vers les évacuations pluviales avec des raclettes et aspirent l'excédent immédiatement si nécessaire.</p>",
        },
        {
          question:
            "Vos produits de nettoyage sont-ils nocifs pour mes plantes de balcon ?",
          answer:
            "<p><strong>Nous privilégions des produits efficaces mais respectueux.</strong> Avant d'appliquer le détergent, nous déplaçons vos pots ou les protégeons sous des bâches hermétiques. Une fois le rinçage terminé, il ne reste plus de résidus actifs. Vos plantes peuvent retrouver leur place sans risque.</p>",
        },
        {
          question:
            "Quand puis-je réutiliser ma terrasse après votre départ ?",
          answer:
            "<p><strong>Le temps de séchage dépend de l'ensoleillement et du vent.</strong> Sur des surfaces non poreuses comme le carrelage, cela peut prendre 1 à 2 heures. Sur du béton ou du bois, comptez 3 à 4 heures. Attendez que le sol soit parfaitement sec avant de remettre les tapis ou le mobilier lourd.</p>",
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
        "Bénéficiez d'une décontamination totale de votre balcon à Champs-sur-Marne, éliminant fientes et agents pathogènes pour retrouver un espace extérieur sain, sans odeurs ni risques pour votre santé.",
      whyUsBullets: [
        "Connaissance des zones de nidification proches des espaces boisés et du campus Descartes.",
        "Application rigoureuse de produits désinfectants virucides pour éradiquer tout risque bactériologique.",
        "Mise en place de protections étanches pour préserver votre intérieur lors du passage des techniciens.",
      ],

      uniqueIntro: `<p>Avec près de 50 % de son territoire couvert d'espaces verts et boisés, comme le Parc du Château, Champs-sur-Marne offre un cadre idéal... pour les pigeons. Ces volatiles trouvent refuge sur les corniches et balcons des immeubles, notamment dans les quartiers denses comme le Nesles ou les résidences du Bois de Grâce.</p>
<p class="mt-4">L'accumulation rapide de fientes transforme les loggias en zones insalubres : l'odeur devient insupportable, le sol glissant, et l'aspect visuel repoussant condamne l'accès à l'extérieur. <strong>Au-delà de la gêne olfactive, cette situation pose un grave problème de santé publique.</strong> Les déjections séchées se transforment en poussières volatiles chargées de bactéries et de champignons, risquant de contaminer l'air intérieur du logement.</p>`,

      uniqueDeepDive: `<h3>1. Protection et mise en sécurité</h3>
<p>Nos techniciens interviennent équipés de combinaisons intégrales, de gants et de masques respiratoires <strong>FFP2</strong> pour se protéger des agents pathogènes. Nous confinons la zone de travail pour éviter toute propagation de contaminants vers l'intérieur de l'appartement. <strong>Humidification préalable des fientes</strong> pour empêcher la formation de poussières nocives.</p>

<h3>2. Ramassage et nettoyage technique</h3>
<p>Grattage manuel et évacuation des déjections et nids dans des sacs hermétiques à double épaisseur, destinés aux déchets à risques. Nettoyage technique des sols, garde-corps et murs à l'aide de détergents professionnels pour éliminer les résidus organiques incrustés.</p>

<h3>3. Désinfection virucide et finitions</h3>
<p>Pulvérisation d'un produit virucide et bactéricide homologué, avec un temps de pose strict pour assurer la destruction des germes. Rinçage des surfaces à l'eau claire en contrôlant les écoulements. <strong>Les déchets sont évacués par nos soins en toute sécurité.</strong> Nous recommandons d'aérer l'espace pendant 24 heures avant de le réinvestir.</p>`,

      specificChallenges: [
        "La forte présence de végétation autour des résidences du Luzard et du Bois de Grâce favorise une recolonisation rapide nécessitant une désinfection profonde.",
        "L'acidité des fientes accumulées attaque le béton des balcons des Pyramides (quartier du Nesles), demandant un nettoyage précautionneux.",
        "L'évacuation des déchets depuis les étages élevés sans ascenseur impose un conditionnement ultra-sécurisé pour traverser les parties communes.",
      ],

      faqAdditions: [
        {
          question:
            "Quels sont les risques si je nettoie mon balcon moi-même ?",
          answer:
            "<p><strong>Le danger principal réside dans l'inhalation de poussières de fientes sèches,</strong> vectrices de maladies comme l'ornithose ou la salmonellose. Sans équipement de protection respiratoire professionnel (masque FFP2/FFP3) et sans combinaison, vous vous exposez directement à ces agents pathogènes.</p>",
        },
        {
          question:
            "Vos produits laissent-ils des résidus toxiques pour mes animaux ?",
          answer:
            "<p><strong>Les désinfectants sont puissants au moment de l'application,</strong> mais ils sont conçus pour ne pas laisser de résidus nocifs après rinçage et séchage. Une fois que le balcon est sec (généralement 24h après l'intervention), il redevient un espace sûr pour vos animaux de compagnie.</p>",
        },
        {
          question:
            "Est-ce que les fientes peuvent endommager la structure de mon balcon ?",
          answer:
            "<p><strong>Oui, l'acide urique contenu dans les fientes est très corrosif.</strong> À long terme, il attaque la peinture des garde-corps métalliques, dégrade les joints de carrelage et peut même rendre le béton poreux et friable. Notre intervention stoppe cette corrosion en éliminant la source d'acidité.</p>",
        },
        {
          question:
            "Où jetez-vous les déchets récupérés sur mon balcon ?",
          answer:
            "<p><strong>Aucun déchet n'est laissé sur place.</strong> Les résidus sont emballés dans des sacs hermétiques sécurisés et évacués par nos techniciens pour garantir une sécurité totale, conformément aux normes sanitaires en vigueur.</p>",
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
        "Retrouvez le confort d'un intérieur sain à Champs-sur-Marne grâce à un nettoyage en profondeur de vos canapés et matelas, éliminant taches et allergènes pour le bien-être de toute la famille ou de vos locataires.",
      whyUsBullets: [
        "Disponibilité adaptée aux rythmes des familles du Bois de Grâce et des étudiants du campus Descartes.",
        "Élimination certifiée des acariens et bactéries grâce à une méthode d'extraction puissante et hygiénique.",
        "Intervention soignée avec protection des sols environnants pour un chantier propre dans votre salon.",
      ],

      uniqueIntro: `<p>Au cœur des quartiers résidentiels comme le Luzard ou dans les pavillons des Bords de Marne, le mobilier textile subit les assauts du quotidien. Les canapés accueillent les soirées en famille, les animaux de compagnie s'installent sur les tapis, et les matelas emmagasinent chaque nuit transpiration et poussières.</p>
<p class="mt-4">Cette accumulation finit par créer des auréoles disgracieuses, ternir les tissus et surtout favoriser le développement d'acariens, sources fréquentes d'allergies respiratoires. Pour les nombreux étudiants de la Cité Descartes, récupérer un clic-clac ou un matelas de seconde main nécessite souvent une remise en état sanitaire. <strong>Une intervention professionnelle à domicile permet de désincruster la fibre,</strong> de neutraliser les odeurs et de redonner une sensation de fraîcheur indispensable à votre confort.</p>`,

      uniqueDeepDive: `<h3>1. Inspection et pré-traitement ciblé</h3>
<p>Notre technicien identifie la composition des fibres (coton, microfibre, velours) et la nature des taches (café, graisse, sébum). Cette étape détermine le choix des produits et la température de l'eau pour éviter tout risque de décoloration. <strong>Application d'un pré-traitement détachant</strong> sur les zones les plus souillées (accoudoirs, assises) pour dissoudre la crasse.</p>

<h3>2. Injection-extraction en profondeur</h3>
<p>Notre machine propulse une solution nettoyante au cœur du rembourrage et l'aspire immédiatement, emportant avec elle les saletés et les allergènes. Nous modulons notre technique en fonction de la fragilité du support, réduisant la pression pour les tapis anciens ou les tissus délicats. <strong>L'extraction de l'eau est maximisée</strong> pour laisser le mobilier le moins humide possible.</p>

<h3>3. Séchage et conseils d'entretien</h3>
<p>Nous vous donnons des consignes précises pour la ventilation de la pièce afin d'assurer un séchage complet rapide, un point essentiel dans les appartements parfois difficiles à aérer en hiver. <strong>Conseils pratiques</strong> pour traiter les taches accidentelles futures sans fixer la saleté.</p>`,

      specificChallenges: [
        "La forte densité de population étudiante implique souvent le nettoyage de mobilier très sollicité ou récupéré, nécessitant une désinfection renforcée.",
        "L'humidité ambiante proche des étangs et de la Marne peut compliquer le séchage dans les logements en rez-de-chaussée, imposant une aspiration rigoureuse.",
        "Le traitement des taches organiques (urine, nourriture) sur les matelas demande l'usage de produits enzymatiques spécifiques pour détruire les odeurs.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage permet-il d'éliminer totalement les acariens de mon matelas ?",
          answer:
            "<p><strong>Oui, l'injection-extraction est la méthode la plus radicale contre les acariens.</strong> Contrairement à l'aspirateur qui ne retire que la poussière de surface, notre machine lave la fibre et la mousse en profondeur, aspirant les acariens vivants, morts et leurs déjections, soulageant les personnes souffrant d'allergies.</p>",
        },
        {
          question:
            "Est-ce que les mauvaises odeurs de tabac ou de cuisine partent avec le nettoyage ?",
          answer:
            "<p><strong>Les odeurs sont piégées dans les fibres par les graisses et la poussière.</strong> En nettoyant le textile en profondeur, nous éliminons la source de l'odeur. Nous utilisons des produits professionnels contenant des neutralisants d'odeurs qui laissent un parfum frais et discret.</p>",
        },
        {
          question:
            "Quand pourrai-je utiliser mon canapé après votre passage ?",
          answer:
            "<p><strong>Le temps de séchage varie selon le type de tissu et la ventilation.</strong> En moyenne, il faut compter entre 4 et 8 heures de séchage naturel. Nous recommandons de ne pas couvrir le meuble et de laisser l'air circuler. Si nous intervenons le matin, votre canapé est généralement prêt pour la soirée.</p>",
        },
        {
          question:
            "Dois-je vider la pièce avant que vous veniez nettoyer le tapis ?",
          answer:
            "<p><strong>Il n'est pas nécessaire de vider la pièce.</strong> Retirez simplement les petits objets fragiles (vases, lampadaires) et les chaises sur le tapis. Pour les meubles lourds comme les tables massives ou les canapés, nous pouvons nettoyer autour ou les déplacer légèrement si l'espace le permet.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
 

