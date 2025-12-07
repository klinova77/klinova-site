// src/data/cities/champs-sur-marne.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Champs-sur-Marne",
  slug: "champs-sur-marne",
  postalCodes: ["77420"],

  customDescription:
    "Marquée par la présence du campus de la Cité Descartes et de nombreux espaces verts comme le Bois de Grâce, Champs-sur-Marne alterne zones à forte densité étudiante et quartiers résidentiels calmes. Cette configuration exige un entretien rigoureux des moquettes de halls soumises à un fort trafic, ainsi qu'un traitement anti-mousse régulier pour les balcons et terrasses exposés à l'humidité des bords de Marne.",

  hubIntro: `<p>
<strong>Pour les syndics de copropriété et les gestionnaires de patrimoine à Champs-sur-Marne</strong>, la diversité du parc immobilier, allant des résidences étudiantes de la Cité Descartes aux ensembles familiaux du Nesles, impose une stratégie de maintenance immobilière flexible. Klinova agit comme votre partenaire technique de terrain, assurant une propreté constante des parties communes et des extérieurs, adaptée aux pics d'activité liés aux rentrées universitaires ou aux saisons humides.
</p>
<p class="mt-4">
Nous garantissons une gestion globale de l'hygiène de vos bâtiments grâce à des processus éprouvés et une communication fluide avec les conseils syndicaux. Notre expertise couvre aussi bien la rénovation des sols de parkings souterrains que l'entretien courant des halls d'entrée, avec un souci constant de traçabilité.
</p>
<ul>
  <li>Mise en œuvre de protocoles de nettoyage intensif pour les zones à fort turn-over (résidences étudiantes, locatif).</li>
  <li>Gestion sécurisée des accès (badges Vigik, clés) pour fluidifier les interventions dans les grandes copropriétés.</li>
  <li>Reporting systématique après intervention pour assurer le suivi technique auprès des gestionnaires.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement rapide des moquettes et sols des halls d'entrée dans les zones à forte densité étudiante (Cité Descartes) dû aux déménagements fréquents et au trafic piéton intense.",
    "Prolifération de mousses et dépôts verts sur les balcons et façades des résidences situées à proximité immédiate des zones boisées (Bois de la Grange, Bois de Grâce) et des plans d'eau.",
    "Accumulation de poussières et de résidus urbains dans les parkings souterrains des grands ensembles construits dans les années 70-80 (Le Nesles, Pablo Picasso), nécessitant un dégraissage mécanique puissant.",
    "Gestion de l'humidité remontante dans les parties basses des immeubles proches des bords de Marne et des étangs, favorisant les odeurs de renfermé dans les parties communes."
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
  "noisy-le-grand",
  "torcy",
  "gagny",
  "chelles",
  "neuilly-sur-marne",
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
        `<p>Oui, notre organisation est calibrée pour répondre aux besoins réactifs de ce secteur dynamique. Que ce soit pour une fin de chantier ou un nettoyage après sinistre dans une résidence proche du Boulevard Newton ou de la gare Noisy-Champs, nous pouvons déployer une équipe technique sous 24 à 48 heures pour assurer la continuité de service.</p>`,
      category: "Interventions",
    },
    {
      question:
        "Comment gérez-vous le nettoyage des parkings dans les quartiers denses comme le Bois de Grâce ?",
      answer:
        `<p>Nous savons que le stationnement est tendu dans ces zones résidentielles. Nous planifions nos interventions de décrassage (autolaveuse, haute pression) en concertation avec le syndic, en procédant par zones balisées ou sur des créneaux horaires spécifiques pour minimiser la gêne occasionnée aux résidents tout en garantissant un résultat optimal.</p>`,
      category: "Parkings",
    },
    {
      question:
        "Les devis pour le nettoyage de moquettes ou de balcons sont-ils payants ?",
      answer:
        `<p>Non, le déplacement de nos techniciens pour évaluer l'état des surfaces à Champs-sur-Marne est toujours gratuit. Nous venons sur place, que vous soyez situé dans le Vieux Champs ou près des Pyramides du Nesles, pour chiffrer précisément les besoins sans aucun engagement de votre part.</p>`,
      category: "Devis",
    },
    {
      question:
        "Avez-vous l'habitude de travailler avec les systèmes d'accès des grandes résidences (Vigik) ?",
      answer:
        `<p>C'est notre quotidien. Nous collaborons étroitement avec les gestionnaires d'immeubles pour la gestion des pass et badges Vigik. Nos équipes sont autonomes pour accéder aux parties communes et aux locaux techniques, ce qui simplifie la logistique pour le conseil syndical et évite d'avoir à mobiliser un gardien à chaque passage.</p>`,
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
        "1. Connaissance pointue des résidences étudiantes de la Cité Descartes et des grands ensembles du Nesles.",
        "2. Matériel d'injection-extraction industriel capable de traiter de grandes surfaces de couloirs rapidement.",
        "3. Planification flexible pour s'adapter aux périodes de vacance scolaire ou aux horaires de bureau.",
        "4. Compte-rendu détaillé après intervention pour faciliter le suivi technique du gestionnaire.",
      ],

      uniqueIntro: `<p>
Les résidences de Champs-sur-Marne, qu'il s'agisse des ensembles familiaux du quartier du Nesles ou des logements étudiants de la Cité Descartes, sont soumises à un trafic piétonnier dense. Les moquettes des couloirs, halls et escaliers accumulent rapidement la poussière, les traces de boue provenant des espaces verts (Bois de Grâce) et les taches accidentelles (boissons, gommes).
</p>
<p class="mt-4">
Visuellement, cela se traduit par des "chemins" grisâtres au centre des circulations et un ternissement général qui donne une impression de vétusté prématurée. Pour les gestionnaires et les syndics, cette dégradation impacte l'attractivité de l'immeuble et peut générer des plaintes concernant l'hygiène ou les odeurs. Une maintenance technique par injection-extraction permet de désincruster ces polluants en profondeur, prolongeant la durée de vie du revêtement et restaurant un cadre de vie agréable.
</p>`,

      uniqueDeepDive: `<p>
Notre prestation débute par une analyse technique sur site pour déterminer la composition de la fibre (souvent synthétique dans les constructions des années 80 ou les bureaux) et repérer les zones critiques. Nous procédons ensuite à la protection systématique des plinthes et des bas de portes pour éviter toute dégradation par l'humidité. La méthode employée est l'injection-extraction à haute pression : une solution détergente est injectée pour dissoudre les salissures, puis immédiatement aspirée. Nous insistons particulièrement sur les zones de piétinement intense, comme les sorties d'ascenseurs et les entrées d'immeubles, en multipliant les passes pour redresser la fibre.
</p>
<p class="mt-4">
Nous adaptons notre logistique à la configuration des bâtiments campésiens : gestion des longs linéaires de couloirs dans les résidences type "Pyramides", et utilisation de matériel silencieux pour ne pas perturber les résidents ou les étudiants. Le séchage est optimisé par une aspiration puissante (laissant une humidité résiduelle minime) et une ventilation naturelle lorsque c'est possible. Pour maintenir ce niveau de propreté, nous conseillons aux copropriétés une intervention de fond tous les 12 à 18 mois, fréquence à ajuster selon l'intensité des emménagements.
</p>`,

      specificChallenges: [
        "Le fort turnover dans les résidences étudiantes de la Cité Descartes entraîne des taches fréquentes (alimentaires, boissons) et des traces de valises nécessitant un détachage ciblé.",
        "La proximité des zones boisées (Bois de la Grange, Bois de Grâce) favorise l'apport de terre et d'humus dans les halls, incrustant les fibres des tapis d'entrée.",
        "Les longs couloirs des immeubles des années 70-80 (quartier Pablo Picasso) exigent une logistique spécifique pour l'alimentation en eau et l'électricité sur de grandes distances.",
      ],

      faqAdditions: [
        {
          question:
            "Comment gérez-vous les taches spécifiques liées aux résidences étudiantes (chewing-gums, boissons sucrées) ?",
          answer:
            `<p>Les résidences étudiantes à Champs-sur-Marne subissent des salissures particulières. Pour les chewing-gums, nous utilisons un traitement cryogénique ou un solvant spécifique qui durcit la gomme pour la décoller sans arracher la fibre. Pour les taches de boissons sucrées qui créent des zones collantes et noircies, notre méthode d'injection-extraction à l'eau chaude permet de dissoudre les sucres et de rincer la fibre en profondeur, supprimant l'aspect poisseux et l'auréole visuelle.</p>`,
        },
        {
          question:
            "Intervenez-vous aussi dans les locaux d'entreprises et les bureaux du campus ?",
          answer:
            `<p>Oui, nous assurons l'entretien des moquettes pour les professionnels, les écoles et les entreprises de la zone Descartes. Nous savons que la disponibilité des locaux est une contrainte majeure. C'est pourquoi nous pouvons programmer nos interventions tôt le matin, en soirée ou le week-end, afin que le nettoyage et le séchage n'impactent pas l'activité des bureaux ou l'accès aux salles de cours.</p>`,
        },
        {
          question:
            "Le nettoyage peut-il raviver une moquette installée il y a plus de 10 ans dans une copropriété ?",
          answer:
            `<p>Une moquette ancienne a souvent ses fibres écrasées et ternies par la poussière incrustée. Si l'usure mécanique (fibre limée jusqu'à la trame) est irréversible, le nettoyage par injection-extraction retire le voile gris de pollution et les taches. Cela redonne de la couleur et un aspect "propre" immédiat, prolongeant la durée de vie du revêtement de quelques années avant son remplacement nécessaire, ce qui est économiquement pertinent pour la copropriété.</p>`,
        },
        {
          question:
            "Avez-vous besoin d'un accès à l'eau dans les étages pour nettoyer les couloirs ?",
          answer:
            `<p>Idéalement, oui. L'accès à un point d'eau (local ménage, robinet de service) à chaque étage ou tous les deux étages facilite grandement l'intervention et réduit la longueur des tuyaux qui courent au sol, limitant la gêne pour les résidents. Si les points d'eau sont rares, comme c'est parfois le cas dans certaines résidences anciennes, nous adaptons notre équipement avec des machines à grands réservoirs pour travailler en autonomie plus longtemps.</p>`,
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
        "1. Expertise des grands volumes de stationnement, des parkings bureaux de Descartes aux sous-sols résidentiels du Nesles.",
        "2. Parc matériel complet incluant des autolaveuses performantes pour un rendement élevé et un séchage rapide.",
        "3. Coordination avec les syndics et gestionnaires pour gérer la rotation des véhicules sans bloquer les accès.",
        "4. Rapport de fin de chantier avec photos pour attester de la qualité du décrassage et du respect des normes.",
      ],

      uniqueIntro: `<p>
Au sein des grands ensembles résidentiels du Val-Maubuée ou des parcs d'activités de la Cité Descartes, les parkings subissent une sollicitation intense. La proximité de l'autoroute A4 et de la A199 génère un dépôt continu de particules fines et de résidus de gomme qui noircissent les sols et les murs. Dans les copropriétés denses comme celles du quartier Pablo Picasso ou du Nesles, les fuites d'huile et les traces de pneumatiques s'accumulent, rendant les surfaces glissantes et les marquages au sol illisibles.
</p>
<p class="mt-4">
Cet encrassement progressif nuit non seulement à l'esthétique, donnant une impression de sous-sol abandonné, mais compromet surtout la sécurité des usagers (risque de chute, mauvaise visibilité). Pour les gestionnaires de bureaux et les syndics, un entretien mécanisé régulier est indispensable pour préserver la structure des sols (béton, résine) et maintenir un niveau de standing cohérent avec le dynamisme de la ville.
</p>`,

      uniqueDeepDive: `<p>
Nous débutons chaque mission par un audit complet de la configuration des lieux : nature du revêtement, état des siphons de sol, hauteur sous poutre et ventilation. La préparation est une étape clé durant laquelle nous procédons au balayage mécanique des allées pour retirer les déchets volatils et les sables abrasifs. Afin de ne pas paralyser le stationnement, notamment dans les zones résidentielles denses, nous organisons l'intervention par secteurs balisés, permettant une rotation fluide des véhicules.
</p>
<p class="mt-4">
Le nettoyage de fond est réalisé à l'aide d'autolaveuses industrielles (autoportées pour les grandes surfaces type Cité Descartes) qui brossent le sol avec une solution dégraissante et aspirent instantanément les résidus. Les zones critiques comme les rampes d'accès, souvent très grasses, ainsi que les angles et les piliers, sont traitées à la haute pression eau chaude pour un décapage ciblé. Nous portons une attention rigoureuse à la gestion des effluents : les eaux de lavage chargées d'hydrocarbures sont récupérées par nos machines et ne sont jamais rejetées dans le réseau pluvial, conformément aux réglementations environnementales. Nous préconisons un à deux passages annuels pour garantir la pérennité des installations.
</p>`,

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
            `<p>La proximité de l'A4 et de la A199, ainsi que le trafic dense de la Cité Descartes, favorisent effectivement le dépôt de particules fines. Cependant, notre nettoyage mécanique extrait la crasse incrustée dans les pores du béton, ce que le balayage seul ne peut faire. Cela retarde considérablement le noircissement visible et maintient les sols moins glissants et plus sains pour une période plus longue (6 à 12 mois).</p>`,
        },
        {
          question:
            "Comment organisez-vous le nettoyage si le parking est plein en journée ?",
          answer:
            `<p>Dans les zones résidentielles où les voitures restent stationnées en journée, ou sur le campus où elles le sont aussi, nous procédons par phasage. Nous découpons le plateau en plusieurs zones de travail. Nous traitons une zone libérée et balisée pendant que les véhicules stationnent ailleurs, puis nous inversons. Cette méthode permet de maintenir l'activité et le stationnement opérationnels durant toute la durée du chantier.</p>`,
        },
        {
          question:
            "Pouvez-vous nettoyer les rampes d'accès très pentues et glissantes ?",
          answer:
            `<p>Oui, c'est même une priorité de sécurité. Les rampes accumulent les résidus de freinage et les huiles, devenant dangereuses par temps humide. Nous utilisons un traitement haute pression spécifique couplé à un dégraissant puissant pour décaper le revêtement antidérapant (souvent en chevrons) sans l'abîmer, redonnant ainsi toute son adhérence à la rampe d'accès.</p>`,
        },
        {
          question:
            "Est-ce que le lavage à grande eau risque d'inonder les sous-sols ?",
          answer:
            `<p>Nous ne pratiquons pas de "lavage à grande eau" incontrôlé. Nos autolaveuses injectent la solution nettoyante et l'aspirent quasi-simultanément. Le sol est laissé propre et quasiment sec. Pour les phases de rinçage haute pression localisées, nous protégeons les évacuations et nous nous assurons au préalable du bon fonctionnement des pompes de relevage pour éviter toute stagnation d'eau.</p>`,
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
        "1. Maîtrise des contraintes liées à la proximité des bois et de la Marne à Champs-sur-Marne.",
        "2. Utilisation de nettoyeurs haute pression réglables pour préserver l'intégrité des carrelages et bétons.",
        "3. Gestion stricte des eaux de rinçage pour éviter tout conflit de voisinage en résidence collective.",
        "4. Conseils d'entretien pour limiter le retour des mousses et lichens sur vos surfaces extérieures.",
      ],

      uniqueIntro: `<p>
L'exposition aux espaces verts comme le Bois de Grâce ou le Bois de la Grange, combinée à la densité urbaine de Champs-sur-Marne, crée des conditions propices à l'encrassement des extérieurs. Les résidents des quartiers du Nesles ou des Bords de Marne constatent souvent l'apparition rapide de mousses glissantes, de lichens et d'un voile noir lié à la pollution atmosphérique sur leurs balcons.
</p>
<p class="mt-4">
Cet état de saleté, marqué par des joints noircis et des dalles ternies, dissuade l'utilisation de cet espace qui finit souvent par être délaissé. Au-delà de l'aspect visuel, ces dépôts peuvent rendre le sol dangereux. Un simple coup de balai ne suffit pas à déloger ces incrustations. Une remise en état professionnelle permet de décaper les surfaces en profondeur sans risque pour l'étanchéité, redonnant ainsi tout son attrait à votre logement.
</p>`,

      uniqueDeepDive: `<p>
La prestation débute par une mise en sécurité de votre intérieur : nous protégeons soigneusement les baies vitrées, les menuiseries et les zones de passage avec des bâches étanches. Nous déplaçons ou couvrons le mobilier et les végétaux pour éviter toute projection. Une première phase manuelle consiste à retirer les amas de feuilles, la terre et les débris accumulés dans les angles et les gouttières, fréquents dans les zones arborées de la ville. Nous appliquons ensuite un détergent professionnel adapté au matériau (béton, carrelage, bois) pour dissoudre les salissures organiques et atmosphériques.
</p>
<p class="mt-4">
Le nettoyage se poursuit par un brossage mécanique suivi d'un rinçage à la haute pression contrôlée. Nous utilisons des buses spécifiques pour nettoyer efficacement sans agresser les joints ni fragiliser les supports anciens. La maîtrise de l'eau est notre priorité en copropriété : nous canalisons les flux vers les évacuations à l'aide de raclettes et utilisons un aspirateur à eau industriel si nécessaire pour prévenir tout écoulement chez les voisins du dessous ou sur la façade. Nous terminons par un essuyage des garde-corps et des vitres, et vous donnons les consignes pour le séchage.
</p>`,

      specificChallenges: [
        "La proximité immédiate des zones boisées (Bois de la Grange) favorise une accumulation rapide de feuilles et de mousses nécessitant un traitement fongicide.",
        "Les balcons des immeubles construits dans les années 80 (quartier des Pyramides) présentent parfois des bétons devenus poreux qui absorbent la pollution.",
        "L'évacuation des eaux sur les loggias fermées ou mal drainées impose l'usage systématique d'aspirateurs à liquides pour éviter les débordements.",
      ],

      faqAdditions: [
        {
          question:
            "Le passage du nettoyeur haute pression peut-il décoller les joints de mon carrelage ?",
          answer:
            `<p>C'est un risque si le matériel est mal utilisé. Chez Klinova, nous réglons la pression en fonction de l'état de vos joints et de la dureté du carrelage. Nous utilisons des jets plats qui nettoient par balayage plutôt que par impact direct, ce qui permet de désincruster la saleté sans creuser les joints ni soulever les carreaux, même sur des surfaces vieillissantes.</p>`,
        },
        {
          question:
            "Comment faites-vous pour ne pas inonder le balcon du voisin du dessous ?",
          answer:
            `<p>Nous sommes très vigilants sur ce point, crucial dans les résidences de Champs-sur-Marne. Nous n'inondons pas le balcon ; nous utilisons l'eau avec parcimonie pour le rinçage. Nos techniciens dirigent l'eau vers les évacuations pluviales avec des raclettes et aspirent l'excédent immédiatement si l'évacuation est trop lente ou mal placée, garantissant une intervention propre pour tout l'immeuble.</p>`,
        },
        {
          question:
            "Vos produits de nettoyage sont-ils nocifs pour mes plantes de balcon ?",
          answer:
            `<p>Nous privilégions des produits efficaces mais respectueux des matériaux. Avant d'appliquer le détergent, nous déplaçons vos pots ou les protégeons sous des bâches hermétiques. Une fois le rinçage terminé, il ne reste plus de résidus actifs sur le sol. Vos plantes peuvent donc retrouver leur place sans risque dès que le balcon est sec.</p>`,
        },
        {
          question:
            "Quand puis-je réutiliser ma terrasse après votre départ ?",
          answer:
            `<p>Le temps de séchage dépend de l'ensoleillement et du vent. Sur des surfaces non poreuses comme le carrelage, cela peut prendre 1 à 2 heures. Sur du béton ou du bois, comptez plutôt 3 à 4 heures. Nous vous conseillons d'attendre que le sol soit parfaitement sec au toucher avant de remettre les tapis ou le mobilier lourd pour éviter les traces.</p>`,
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
        "1. Connaissance des zones de nidification proches des espaces boisés (Bois de Grâce) et du campus Descartes.",
        "2. Application rigoureuse de produits désinfectants virucides pour éradiquer tout risque bactériologique.",
        "3. Mise en place de protections étanches pour préserver votre intérieur lors du passage des techniciens.",
        "4. Prise en charge totale des déchets contaminés avec évacuation vers les centres de traitement agréés.",
      ],

      uniqueIntro: `<p>
Avec près de 50 % de son territoire couvert d'espaces verts et boisés, comme le Bois de la Grange ou le Parc du Château, Champs-sur-Marne offre un cadre idéal... pour les pigeons. Ces volatiles trouvent refuge sur les corniches et balcons des immeubles, notamment dans les quartiers denses comme le Nesles ou les résidences du Bois de Grâce. L'accumulation rapide de fientes transforme alors les loggias en zones insalubres : l'odeur devient insupportable, le sol glissant, et l'aspect visuel repoussant condamne l'accès à l'extérieur.
</p>
<p class="mt-4">
Au-delà de la gêne olfactive, cette situation pose un grave problème de santé publique. Les déjections séchées se transforment en poussières volatiles chargées de bactéries et de champignons, risquant de contaminer l'air intérieur du logement. Face à ce danger biologique, le nettoyage domestique est inefficace et dangereux. Une intervention spécialisée en bio-nettoyage est impérative pour neutraliser les risques infectieux et assainir durablement les surfaces.
</p>`,

      uniqueDeepDive: `<p>
Notre protocole d'intervention à Champs-sur-Marne est conçu pour garantir une sécurité sanitaire maximale. Nos techniciens interviennent équipés de combinaisons intégrales, de gants et de masques respiratoires FFP2 pour se protéger des agents pathogènes. Nous commençons par confiner la zone de travail pour éviter toute propagation de contaminants vers l'intérieur de l'appartement. Avant toute manipulation, nous humidifions les fientes sèches pour empêcher la formation de poussières nocives. Nous procédons ensuite au grattage manuel et à l'évacuation des déjections et nids dans des sacs hermétiques à double épaisseur, destinés aux déchets à risques.
</p>
<p class="mt-4">
La seconde phase consiste en un nettoyage technique des sols, garde-corps et murs à l'aide de détergents professionnels pour éliminer les résidus organiques incrustés. L'étape clé est la désinfection par pulvérisation d'un produit virucide et bactéricide homologué, avec un temps de pose strict pour assurer la destruction des germes. Enfin, nous rinçons les surfaces à l'eau claire en contrôlant les écoulements. Les déchets sont évacués par nos soins vers une filière de traitement spécialisée. Nous vous conseillons de laisser sécher et d'aérer l'espace pendant 24 heures avant de le réinvestir.
</p>`,

      specificChallenges: [
        "La forte présence de végétation autour des résidences du Luzard et du Bois de la Grange favorise une recolonisation rapide nécessitant une désinfection profonde.",
        "L'acidité des fientes accumulées attaque le béton des balcons des \"Pyramides\" (quartier du Nesles), demandant un nettoyage précautionneux.",
        "L'évacuation des déchets depuis les étages élevés sans ascenseur impose un conditionnement ultra-sécurisé pour traverser les parties communes.",
      ],

      faqAdditions: [
        {
          question:
            "Quels sont les risques si je nettoie mon balcon moi-même ?",
          answer:
            `<p>Le danger principal réside dans l'inhalation de poussières de fientes sèches, vectrices de maladies comme l'ornithose ou la salmonellose. Sans équipement de protection respiratoire professionnel (masque FFP2/FFP3) et sans combinaison, vous vous exposez directement à ces agents pathogènes. De plus, les produits ménagers grand public ne possèdent pas la puissance virucide nécessaire pour assainir une surface poreuse contaminée en profondeur.</p>`,
        },
        {
          question:
            "Vos produits laissent-ils des résidus toxiques pour mes animaux ?",
          answer:
            `<p>Les désinfectants que nous utilisons sont puissants pour tuer les bactéries au moment de l'application, mais ils sont conçus pour ne pas laisser de résidus nocifs après rinçage et séchage. Une fois que le balcon est sec (généralement 24h après l'intervention), il redevient un espace sûr pour vos animaux de compagnie, qui ne risquent plus d'être en contact avec les agents infectieux des pigeons.</p>`,
        },
        {
          question:
            "Est-ce que les fientes peuvent endommager la structure de mon balcon ?",
          answer:
            `<p>Oui, l'acide urique contenu dans les fientes est très corrosif. À long terme, il attaque la peinture des garde-corps métalliques, dégrade les joints de carrelage et peut même rendre le béton poreux et friable. Notre intervention permet de stopper cette corrosion en éliminant la source d'acidité, mais les dégâts structurels déjà présents (trous, rouille perforante) nécessiteront parfois des réparations ultérieures par un maçon ou un peintre.</p>`,
        },
        {
          question:
            "Où jetez-vous les déchets récupérés sur mon balcon ?",
          answer:
            `<p>Nous ne les jetons jamais dans les poubelles de l'immeuble ni dans la nature. Les fientes de pigeons sont classées comme déchets présentant un risque sanitaire. Nous les conditionnons dans des sacs étanches spécifiques et les transportons nous-mêmes vers des sites de traitement habilités à incinérer ou traiter les déchets biologiques contaminés, assurant ainsi une traçabilité et une sécurité totale.</p>`,
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
        "1. Disponibilité adaptée aux rythmes des familles du Bois de Grâce et des étudiants du campus Descartes.",
        "2. Élimination certifiée des acariens et bactéries grâce à une méthode d'extraction puissante et hygiénique.",
        "3. Intervention soignée avec protection des sols environnants pour un chantier propre dans votre salon.",
        "4. Conseils d'experts pour prolonger la durée de vie de vos textiles et éviter l'encrassement prématuré.",
      ],

      uniqueIntro: `<p>
Au cœur des quartiers résidentiels comme le Luzard ou dans les pavillons des Bords de Marne, le mobilier textile subit les assauts du quotidien. Les canapés accueillent les soirées en famille, les animaux de compagnie s'installent sur les tapis, et les matelas emmagasinent chaque nuit transpiration et poussières. Cette accumulation finit par créer des auréoles disgracieuses, ternir les tissus et surtout favoriser le développement d'acariens, sources fréquentes d'allergies respiratoires.
</p>
<p class="mt-4">
Pour les nombreux étudiants de la Cité Descartes, récupérer un clic-clac ou un matelas de seconde main nécessite souvent une remise en état sanitaire. L'aspirateur domestique ne suffit pas à extraire les polluants incrustés dans la mousse. Une intervention professionnelle à domicile permet de désincruster la fibre, de neutraliser les odeurs et de redonner une sensation de fraîcheur et de propre indispensable à votre confort.
</p>`,

      uniqueDeepDive: `<p>
Notre technicien commence par une inspection détaillée de vos textiles à domicile pour identifier la composition des fibres (coton, microfibre, velours) et la nature des taches (café, graisse, sébum). Cette étape détermine le choix des produits et la température de l'eau pour éviter tout risque de décoloration. Nous appliquons ensuite un pré-traitement détachant spécifique sur les zones les plus souillées, notamment les accoudoirs et les assises, pour commencer à dissoudre la crasse. La méthode principale est l'injection-extraction : notre machine propulse une solution nettoyante au cœur du rembourrage et l'aspire immédiatement, emportant avec elle les saletés et les allergènes.
</p>
<p class="mt-4">
Nous modulons notre technique en fonction de la fragilité du support, réduisant la pression pour les tapis anciens ou les tissus délicats. L'extraction de l'eau est maximisée pour laisser le mobilier le moins humide possible, un point essentiel dans les appartements parfois difficiles à aérer en hiver. Nous vous donnons des consignes précises pour la ventilation de la pièce afin d'assurer un séchage complet rapide. Enfin, nous vous prodiguons quelques conseils d'entretien pour traiter les taches accidentelles futures sans fixer la saleté.
</p>`,

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
            `<p>Oui, l'injection-extraction est la méthode la plus radicale contre les acariens. Contrairement à l'aspirateur qui ne retire que la poussière de surface, notre machine lave la fibre et la mousse en profondeur, aspirant les acariens vivants, morts et leurs déjections. Cela assainit considérablement votre literie et procure souvent un soulagement immédiat aux personnes souffrant d'allergies ou d'asthme à Champs-sur-Marne.</p>`,
        },
        {
          question:
            "Est-ce que les mauvaises odeurs de tabac ou de cuisine partent avec le nettoyage ?",
          answer:
            `<p>Les odeurs sont souvent piégées dans les fibres par les graisses et la poussière. En nettoyant le textile en profondeur, nous éliminons la source de l'odeur. De plus, nous utilisons des produits professionnels contenant des neutralisants d'odeurs qui laissent un parfum frais et discret. Pour des odeurs très incrustées comme l'urine d'animal, un traitement enzymatique supplémentaire assure une désodorisation complète.</p>`,
        },
        {
          question:
            "Quand pourrai-je utiliser mon canapé après votre passage ?",
          answer:
            `<p>Le temps de séchage varie en fonction du type de tissu (le synthétique sèche plus vite que le coton ou la laine) et de la ventilation de votre pièce. En moyenne, il faut compter entre 4 et 8 heures de séchage naturel. Nous vous recommandons de ne pas couvrir le meuble et de laisser l'air circuler. Si nous intervenons le matin, votre canapé est généralement prêt pour la soirée télé.</p>`,
        },
        {
          question:
            "Dois-je vider la pièce avant que vous veniez nettoyer le tapis ?",
          answer:
            `<p>Il n'est pas nécessaire de vider la pièce. Nous vous demandons simplement de retirer les petits objets fragiles (vases, lampadaires) et les chaises qui se trouvent sur le tapis. Pour les meubles lourds comme les tables massives ou les canapés, nous pouvons nettoyer autour ou les déplacer légèrement si l'espace le permet, en veillant toujours à protéger le sol et les pieds des meubles de l'humidité.</p>`,
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
