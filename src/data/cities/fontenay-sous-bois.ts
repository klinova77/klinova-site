import type { City } from "~/types/geo";

const city: City = {
  name: "Fontenay-sous-Bois",
  slug: "fontenay-sous-bois",
  postalCodes: ["94120"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription: `Commune contrastée entre le Haut-Fontenay résidentiel de standing bordant le Bois de Vincennes et le Val de Fontenay, pôle économique dense. La végétation du Bois, la pollution de l'A86 et l'humidité des quartiers ombragés imposent un entretien spécialisé des surfaces pour préserver les villas bourgeoises, meulières de prestige et copropriétés modernes.`,

  hubIntro: `<p>Fontenay-sous-Bois présente un parc immobilier diversifié nécessitant des protocoles différenciés selon les quartiers, du Village historique aux copropriétés denses du Val de Fontenay. <strong>Klinova intervient en partenariat avec les propriétaires de villas, les syndics et les gestionnaires</strong> pour assurer l'entretien des surfaces intérieures et extérieures, en tenant compte de la fracture urbaine créée par l'A86 et des facteurs de salissure spécifiques à chaque secteur.</p>
<p>Nos équipes connaissent les spécificités locales : <strong>pollens collants et feuilles mortes massives</strong> du Bois de Vincennes dans le Haut-Fontenay, <strong>pollution noire</strong> de l'A86 au Val de Fontenay, <strong>humidité</strong> favorisant mousses et lichens dans le quartier des Voisins du Bois. Nous déployons des protocoles adaptés aux matériaux (meulières et pierres de taille anciennes nécessitant basse pression, surfaces vitrées modernes des copropriétés récentes) avec une organisation logistique tenant compte des contraintes d'accès variées.</p>
<ul>
  <li><strong>Adaptation aux deux pôles urbains :</strong> Protocoles basse pression et vapeur pour les villas et meulières du Haut-Fontenay (Village, Plateau, Voisins du Bois), méthodes pour copropriétés modernes du Val de Fontenay avec halls à fort passage et balcons exposés à la pollution urbaine.</li>
  <li><strong>Maîtrise des facteurs de salissure contrastés :</strong> Traitement anti-mousse pour l'humidité du Plateau, élimination des pollens collants et feuilles massives du Bois, dégraissant renforcé pour la pollution noire de l'A86 au Val de Fontenay.</li>
  <li><strong>Organisation logistique différenciée :</strong> Véhicules adaptés aux rues anciennes étroites du Village, vigilance pour les branches basses du Plateau, accès aux parkings privés des résidences du Val de Fontenay, planification tenant compte de la fracture urbaine A86/voies ferrées.</li>
</ul>`,

  citySpecificChallenges: [
    "Végétation du Bois de Vincennes générant pollens collants, sève des platanes et tilleuls, accumulation massive de feuilles mortes en automne dans le Haut-Fontenay (Village, Plateau, Voisins du Bois)",
    "Pollution atmosphérique de l'A86 et du pôle RER Val de Fontenay déposant suie noire grasse sur vitrages et balcons des copropriétés du Bas-Fontenay et des Rigollots",
    "Fracture urbaine A86/voies ferrées imposant des temps de trajet variables entre quartiers et une organisation logistique différenciée selon le secteur d'intervention",
    "Matériaux contrastés nécessitant double expertise : meulières et pierres anciennes du Haut-Fontenay exigeant basse pression, copropriétés modernes du Val de Fontenay avec grandes surfaces vitrées et balcons en béton lasuré",
  ],

districts: [
  // Quartiers (carte des quartiers 2023)
  "Alouettes",
  "Bois Cadet, Montesquieu, Terroir",
  "Bois Clos d'Orléans",
  "Hôtel de Ville, Village",
  "Jean Zay",
  "Larris",
  "Parapluies",
  "Pasteur, Rousseau",
  "Plateau, Victor Hugo",
  "Rigollots, Roublot, Carrières",
  "La Redoute",

  // Appellations d’usage (SEO / maillage, si tu veux les garder)
  "Haut-Fontenay",
  "Bas-Fontenay",
  "Val de Fontenay",
  "Voisins du Bois"
],

nearbyCities: [
      "nogent-sur-marne",
      "montreuil",
      "le-perreux-sur-marne",
      "vincennes",
      "rosny-sous-bois",
      "neuilly-plaisance"
    ],


  landmarks: [
    "Mairie de Fontenay-sous-Bois",
    
    "Gare Val de Fontenay (RER A & E)",
    "Gare Fontenay-sous-Bois (RER A)",
    "Parc des Beaumonts",
    "Centre Commercial Val de Fontenay (Aushopping)",
    "Bois de Vincennes (limitrophe)",
  ],

  faq: [
    {
      question:
        "Intervenez-vous dans les deux zones contrastées de Fontenay (Haut et Bas) ?",
      answer: `<p><strong>Oui, nous adaptons nos protocoles selon le secteur</strong>. Pour le Haut-Fontenay (Village, Plateau, Voisins du Bois), nous utilisons des méthodes basse pression et vapeur préservant les meulières, pierres de taille et ferronneries des villas bourgeoises. Pour le Val de Fontenay et les Rigollots, nous déployons des protocoles pour copropriétés modernes avec dégraissant renforcé contre la pollution de l'A86. Cette double expertise est indispensable dans une commune aussi contrastée que Fontenay.</p>`,
    },
    {
      question:
        "Le diagnostic sur site est-il gratuit dans tous les quartiers de Fontenay ?",
      answer: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Village, Plateau/Voisins du Bois, Val de Fontenay, Rigollots, Parapluies, La Redoute/Jean Zay). Le technicien évalue les surfaces, identifie les contraintes spécifiques (végétation du Bois, pollution A86, humidité, matériaux anciens ou modernes) et remet un chiffrage détaillé sous 48h adapté à votre villa, copropriété ou résidence.</p>`,
    },
    {
      question:
        "Comment gérez-vous les contraintes d'accès différentes entre le Village et le Val de Fontenay ?",
      answer: `<p><strong>Nous adaptons notre organisation logistique selon le secteur</strong>. Pour le Village, nous utilisons des véhicules compacts adaptés aux rues anciennes étroites et bordées de végétation dense. Pour le Plateau, nous restons vigilants aux branches basses. Pour le Val de Fontenay ultra-réglementé, nous utilisons les parkings privés des résidences et planifions en dehors des heures de pointe du pôle tertiaire. Cette organisation différenciée tient compte de la fracture urbaine créée par l'A86 et les voies ferrées.</p>`,
    },
    {
      question:
        "Vos méthodes sont-elles adaptées aux villas historiques du Haut-Fontenay ?",
      answer: `<p><strong>Oui, nous utilisons exclusivement des protocoles basse pression et vapeur</strong> pour les meulières, pierres de taille, joints anciens et ferronneries des villas bourgeoises du Village, du Plateau et des Voisins du Bois. Ces matériaux patrimoniaux ne tolèrent aucune haute pression agressive qui déchausserait les pierres ou dégraderait les joints à la chaux. Cette expertise spécifique est indispensable pour préserver la valeur architecturale exceptionnelle du Haut-Fontenay.</p>`,
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
        "Le nettoyage professionnel des moquettes à Fontenay-sous-Bois préserve l'élégance des halls de villas et copropriétés tout en éliminant les salissures contrastées du Bois de Vincennes et de la pollution de l'A86.",

      whyUsBullets: [
        "Double expertise Haut et Bas-Fontenay : Maîtrise des détergents spécifiques pour dépôts végétaux du Bois dans le Haut-Fontenay, dégraissants renforcés pour pollution de l'A86 dans le Val de Fontenay et les Rigollots.",
        "Extraction adaptée aux supports contrastés : Méthodes soignées pour tapis d'escalier en laine des villas anciennes du Village, techniques robustes pour moquettes synthétiques des copropriétés modernes, séchage surveillé dans l'humidité des Voisins du Bois.",
        "Organisation logistique différenciée : Véhicules compacts pour rues étroites du Village, accès aux parkings privés du Val de Fontenay, planification tenant compte de la fracture urbaine A86/voies ferrées entre les deux pôles.",
      ],

      uniqueIntro: `<p>Les copropriétés fontenaysiennes subissent un encrassement différencié selon leur localisation dans cette commune contrastée. <strong>Les immeubles du Haut-Fontenay (Village, Plateau, Voisins du Bois)</strong> accumulent les pollens collants et la sève des platanes et tilleuls au printemps, puis les feuilles mortes massives en automne transportées par les semelles depuis le Bois de Vincennes. L'humidité élevée du quartier des Voisins du Bois favorise l'incrustation profonde de ces particules végétales dans les fibres. À l'inverse, <strong>les copropriétés du Val de Fontenay et des Rigollots proches de l'A86</strong> accumulent une poussière noire grasse liée aux échappements et au freinage des véhicules, formant des traînées sombres tenaces sur les seuils et les zones de passage.</p>
<p class="mt-4">Les copropriétaires constatent cette dégradation spécifique : dans les villas bourgeoises du Village, les tapis d'escalier en laine perdent leur aspect soigné sous l'effet des dépôts végétaux, les halls des immeubles du Plateau présentent des traces brunâtres liées aux feuilles décomposées, tandis que les parties communes des résidences du Val de Fontenay noircissent rapidement avec des dépôts gras difficiles à éliminer. Les conseils syndicaux reçoivent des remarques, conscients que cet aspect négligé contraste avec le standing architectural des résidences, qu'elles soient historiques ou modernes.</p>
<p class="mt-4">Un nettoyage professionnel adapté à chaque environnement inverse cette dynamique. Il extrait les particules végétales incrustées dans le Haut-Fontenay avec des détergents spécifiques, dissout les dépôts gras de pollution dans le Bas-Fontenay avec des dégraissants renforcés, et ravive les couleurs d'origine partout. L'intervention devient un acte de maintenance préventive différencié, indispensable pour maintenir le niveau de standing attendu dans les deux pôles contrastés de Fontenay-sous-Bois.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic différencié selon le secteur</h3>
<p>Le technicien examine l'état de la moquette (fibres synthétiques robustes des copropriétés modernes, tapis d'escalier en laine des villas du Village, bouclées épaisses des halls de standing) et identifie les salissures typiques selon la localisation : particules végétales collantes, résidus de feuilles mortes et traces d'humidité pour le Haut-Fontenay (Village, Plateau, Voisins du Bois), poussière noire grasse de l'A86 pour le Val de Fontenay et les Rigollots. Il repère les zones critiques (seuils exposés à la végétation dense ou à la pollution urbaine, paliers devant les ascenseurs des halls à fort passage) et note les contraintes d'accès (rues anciennes étroites du Village, parkings privés du Val de Fontenay). Cette analyse détermine le choix du détergent : spécifique pour dépôts végétaux ou dégraissant pour pollution atmosphérique.</p>
<h3>2. Injection-extraction adaptée au type de salissure</h3>
<p class="mt-4">La machine pulvérise un mélange d'eau chaude (65-70°C) et de détergent sélectionné selon l'encrassement. Pour les moquettes du Haut-Fontenay, un détergent formulé pour dissoudre les résines végétales et les pollens collants est appliqué. Pour les copropriétés du Val de Fontenay exposées à l'A86, un dégraissant professionnel émulsionne les particules noires grasses. L'aspiration immédiate et puissante retire l'eau sale chargée de particules avant saturation du support. Sur les zones très encrassées (entrées des villas du Village exposées aux accumulations de feuilles, halls des résidences du Val de Fontenay proches du pôle RER), plusieurs passages successifs extraient les salissures les plus tenaces. L'extraction maximale limite l'humidité résiduelle, point particulièrement critique pour les tapis d'escalier en laine des villas anciennes sensibles à l'eau.</p>
<h3>3. Séchage surveillé et recommandations par secteur</h3>
<p class="mt-4">Le séchage complet intervient sous 6 à 10 heures selon la ventilation et l'humidité ambiante (plus élevée dans le quartier des Voisins du Bois). Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés du Haut-Fontenay exposées à la végétation intensive du Bois, un nettoyage annuel au printemps après la chute des pollens et un traitement en automne après les feuilles mortes maintiennent la propreté. Pour les résidences du Val de Fontenay et des Rigollots exposées à la pollution de l'A86, un nettoyage semestriel compense l'encrassement rapide. Les immeubles des secteurs intermédiaires (Parapluies, La Redoute) peuvent espacer à un rythme annuel.</p>`,

      specificChallenges: [
        "Dépôts végétaux massifs du Bois de Vincennes : Les copropriétés du Haut-Fontenay (Village, Plateau, Voisins du Bois) accumulent pollens collants, sève et feuilles mortes nécessitant un détergent spécifique et plusieurs passes d'extraction.",
        "Pollution noire grasse de l'A86 : Les résidences du Val de Fontenay et des Rigollots proches de l'autoroute accumulent des particules d'échappement et de freinage nécessitant un dégraissant renforcé et de l'eau chaude émulsionnante.",
        "Humidité élevée dans le quartier des Voisins du Bois : La végétation dense du Plateau génère une hygrométrie favorisant l'incrustation des salissures et ralentissant le séchage, exigeant une extraction maximale et une aération prolongée.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles proches du Bois nécessitent-elles un entretien différent de celles du Val de Fontenay ?",
          answer: `<p>Oui, absolument. Les copropriétés du Haut-Fontenay (Village, Plateau, Voisins du Bois) accumulent principalement des dépôts végétaux : pollens collants au printemps, sève des platanes et tilleuls, feuilles mortes massives en automne. Nous utilisons un détergent spécifique pour dissoudre ces résines végétales. À l'inverse, les résidences du Val de Fontenay et des Rigollots proches de l'A86 accumulent une pollution noire grasse nécessitant un dégraissant renforcé. <strong>Cette double expertise est indispensable</strong> dans une commune aussi contrastée que Fontenay-sous-Bois.</p>`,
        },
        {
          question:
            "Intervenez-vous dans les villas anciennes du Village avec leurs tapis d'escalier fragiles ?",
          answer: `<p>Absolument. Les tapis d'escalier en laine des villas bourgeoises du Village nécessitent une attention particulière : <strong>extraction maximale pour séchage rapide</strong> (la laine est sensible à l'humidité prolongée), détergent doux pour préserver les fibres naturelles, température contrôlée pour éviter le feutrage. Nos véhicules compacts s'adaptent aux rues anciennes étroites du Village bordées de végétation dense. Cette expertise des matériaux anciens est essentielle pour préserver le patrimoine résidentiel de standing du Haut-Fontenay.</p>`,
        },
        {
          question:
            "Les feuilles mortes du Bois peuvent-elles endommager définitivement les moquettes ?",
          answer: `<p>Les feuilles mortes transportées par les semelles se décomposent dans les halls et libèrent des tanins qui créent des taches brunâtres permanentes s'ils ne sont pas traités rapidement. Un nettoyage professionnel en novembre, juste après la chute massive des feuilles, extrait ces particules végétales avant qu'elles ne s'oxydent et ne marquent définitivement les fibres. C'est particulièrement important pour les copropriétés du Plateau et des Voisins du Bois directement exposées à la végétation intensive du Bois de Vincennes.</p>`,
        },
        {
          question:
            "Comment organisez-vous l'accès entre le Haut et le Bas-Fontenay malgré la fracture urbaine ?",
          answer: `<p>Nous planifions chaque intervention en tenant compte des temps de trajet variables imposés par l'A86 et les voies ferrées qui traversent la commune. Pour le Village, nous utilisons des véhicules compacts adaptés aux rues étroites. Pour le Val de Fontenay, nous accédons aux parkings privés des résidences et évitons les heures de pointe du pôle tertiaire. Cette organisation logistique différenciée est indispensable dans une commune où les deux pôles urbains présentent des contraintes d'accès totalement différentes.</p>`,
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
        "Le nettoyage professionnel des parkings fontenaysiens élimine les dépôts végétaux du Bois dans le Haut-Fontenay et la pollution noire de l'A86 dans le Val de Fontenay, tout en gérant les contraintes techniques spécifiques à chaque secteur.",

      whyUsBullets: [
        "Double expertise végétale et pollution : Traitement anti-mousse et dégagement des débris végétaux massifs pour parkings du Haut-Fontenay, dégraissant renforcé et eau chaude pour pollution de l'A86 dans le Val de Fontenay.",
        "Méthodes adaptées aux environnements contrastés : Brossage vigoureux pour mousses et dépôts organiques du Plateau, émulsion thermique pour graisses atmosphériques du Val de Fontenay, gestion des siphons obstrués par feuilles ou hydrocarbures.",
        "Organisation logistique par secteur : Accès aux rues étroites du Village, utilisation des parkings privés du Val de Fontenay, planification tenant compte de la fracture urbaine A86/voies ferrées entre les deux pôles.",
      ],

      uniqueIntro: `<p>Les parkings souterrains de Fontenay-sous-Bois présentent des profils d'encrassement radicalement différents selon leur localisation dans cette commune contrastée. Les parkings des villas et copropriétés du Haut-Fontenay (Village, Plateau, Voisins du Bois) accumulent principalement des débris végétaux : feuilles mortes massives transportées par les pneus depuis le Bois de Vincennes, qui se décomposent en boue noirâtre dans les angles et sur les rampes. L'humidité élevée du quartier des Voisins du Bois favorise le développement rapide de mousses vertes sur les sols en béton poreux des parkings mal ventilés. À l'inverse, les parkings des copropriétés modernes du Val de Fontenay et des Rigollots, proches de l'A86 et du pôle RER, accumulent une poussière noire grasse liée aux échappements et au freinage des véhicules circulant sur l'autoroute et les grands axes.</p>
<p class="mt-4">Les copropriétaires constatent cette dégradation différenciée : dans les parkings du Plateau, les rampes deviennent glissantes avec des dépôts verdâtres et des accumulations de feuilles décomposées, tandis que dans les sous-sols du Val de Fontenay, les marquages au sol se ternissent rapidement sous l'effet de la pollution atmosphérique, les taches d'huile s'étendent dans le béton poreux et une pellicule noire grasse recouvre les surfaces. Les conseils syndicaux reçoivent des demandes d'intervention, mais la coordination semble complexe dans des environnements aussi différents nécessitant des traitements spécifiques.</p>
<p class="mt-4">Un décrassage technique structuré et adapté résout ces problématiques contrastées. Il élimine les dépôts biologiques favorisés par l'humidité et la végétation dans le Haut-Fontenay, dissout les graisses atmosphériques tenaces dans le Bas-Fontenay, et restaure la propreté des sols partout. L'intervention devient un acte de maintenance préventive différencié, indispensable pour préserver la sécurité et le standing des copropriétés dans les deux pôles urbains fontenaysiens.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique différencié par secteur</h3>
<p>Le technicien visite le parking pour identifier le type de revêtement (béton brut poreux dans les parkings anciens du Village, peinture de sol ou résine dans les parkings récents du Val de Fontenay), évaluer le niveau d'humidité ambiante (particulièrement élevé dans le quartier des Voisins du Bois), vérifier l'état des siphons souvent obstrués par les débris végétaux, et repérer les zones problématiques selon la localisation. Pour le Haut-Fontenay : mousses vertes sur rampes, boue de feuilles décomposées dans les angles, dépôts organiques. Pour le Val de Fontenay : pollution noire grasse sur zones de circulation, taches d'huile concentrées. Cette analyse détermine le choix du traitement : anti-mousse curatif et dégagement des débris végétaux pour le Haut, dégraissant renforcé à l'eau chaude pour le Bas.</p>
<h3>2. Décrassage par autolaveuse et traitement adapté à l'encrassement</h3>
<p class="mt-4">Pour les parkings du Haut-Fontenay, le balayage mécanique élimine d'abord les feuilles mortes, débris végétaux et dépôts organiques massifs. Un traitement anti-mousse professionnel est appliqué sur les zones humides présentant des dépôts biologiques, avec un temps de contact de 20 à 30 minutes pour tuer les organismes en profondeur. L'autolaveuse brosse ensuite vigoureusement le sol pour éliminer mousses et résidus végétaux. Pour les parkings du Val de Fontenay et des Rigollots, le dégraissant professionnel est mélangé à de l'eau chaude (60-70°C) pour émulsionner les particules noires grasses de l'A86. Les taches d'huile sont traitées localement avec un détergent spécifique et de la haute pression contrôlée. Les rampes, pieds de poteaux et angles sont nettoyés manuellement partout. L'eau de lavage est collectée et évacuée conformément aux normes.</p>
<h3>3. Recommandations de fréquence par environnement</h3>
<p class="mt-4">L'extraction puissante limite l'eau résiduelle, mais le séchage reste plus long dans les parkings humides du Plateau. Le technicien recommande d'aérer pendant 24 heures après l'intervention dans les zones mal ventilées. Pour les parkings du Haut-Fontenay exposés à la végétation intensive, un décrassage annuel en novembre après la chute massive des feuilles maintient la propreté et prévient l'obstruction des siphons. Un traitement anti-mousse préventif peut être appliqué après séchage dans les parkings humides des Voisins du Bois. Pour les parkings du Val de Fontenay et des Rigollots exposés à la pollution de l'A86, un décrassage annuel avec dégraissant renforcé suffit. Cette fréquence différenciée compense les facteurs de salissure contrastés des deux pôles urbains.</p>`,

      specificChallenges: [
        "Débris végétaux massifs du Bois de Vincennes : Les parkings du Haut-Fontenay (Village, Plateau, Voisins du Bois) accumulent des feuilles mortes qui se décomposent en boue noirâtre et obstruent les siphons, nécessitant un balayage intensif et un dégagement manuel.",
        "Mousses favorisées par l'humidité du Plateau : Les parkings du quartier des Voisins du Bois développent rapidement des dépôts biologiques glissants en raison de l'hygrométrie élevée, exigeant un traitement anti-mousse curatif et préventif.",
        "Pollution noire grasse de l'A86 : Les parkings du Val de Fontenay et des Rigollots accumulent des particules d'échappement et de freinage formant une pellicule tenace nécessitant un dégraissant renforcé et de l'eau chaude.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings du Plateau développent-ils autant de mousses ?",
          answer: `<p>L'humidité élevée du quartier des Voisins du Bois, liée à la végétation dense bordant le Bois de Vincennes, génère un environnement idéal pour le développement biologique rapide. Les parkings mal ventilés ou en rez-de-jardin présentent des sols en béton poreux qui retiennent l'humidité et favorisent la prolifération de mousses vertes glissantes sur les rampes. Nous appliquons un traitement anti-mousse curatif avec temps de contact prolongé, puis un brossage vigoureux pour éliminer les organismes. Un traitement préventif après séchage ralentit la recolonisation pendant 12 à 18 mois.</p>`,
        },
        {
          question:
            "Les feuilles mortes du Bois peuvent-elles vraiment endommager les parkings ?",
          answer: `<p>Oui, les feuilles mortes transportées par les pneus se décomposent et forment une boue organique qui obstrue progressivement les siphons et caniveaux. Cette accumulation peut provoquer des refoulements et des stagnations d'eau lors des lavages ou des pluies. Les résidus végétaux créent aussi un environnement propice au développement de mousses. Un décrassage annuel en novembre, après la chute massive des feuilles, élimine ces accumulations avant qu'elles ne causent des problèmes d'évacuation. C'est particulièrement important pour les parkings du Plateau et des Voisins du Bois directement exposés au Bois.</p>`,
        },
        {
          question:
            "Les parkings du Val de Fontenay nécessitent-ils un traitement différent de ceux du Village ?",
          answer: `<p>Oui, absolument. Les parkings du Val de Fontenay et des Rigollots proches de l'A86 accumulent principalement une pollution noire grasse (particules d'échappement, résidus de freinage) nécessitant un dégraissant renforcé et de l'eau chaude (60-70°C) pour émulsionner ces dépôts tenaces. À l'inverse, les parkings du Haut-Fontenay (Village, Plateau, Voisins du Bois) nécessitent surtout un traitement anti-mousse, un dégagement des débris végétaux massifs et un brossage vigoureux. Cette double expertise est indispensable dans une commune aux environnements aussi contrastés.</p>`,
        },
        {
          question:
            "Comment organisez-vous l'accès aux parkings malgré la fracture urbaine de Fontenay ?",
          answer: `<p>Nous planifions chaque intervention en tenant compte des temps de trajet variables imposés par l'A86 et les voies ferrées qui divisent la commune. Pour les parkings du Village aux rues anciennes étroites, nous utilisons des véhicules compacts et restons vigilants aux branches basses. Pour les parkings du Val de Fontenay, nous accédons via les parkings privés des résidences et évitons les heures de pointe du pôle tertiaire. Cette organisation logistique différenciée est essentielle dans une commune où les deux pôles urbains imposent des contraintes d'accès totalement différentes.</p>`,
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
        "Le nettoyage professionnel des balcons et terrasses à Fontenay-sous-Bois redonne un espace extérieur utilisable et propre, libéré des dépôts végétaux du Bois dans le Haut-Fontenay et de la pollution noire de l'A86 dans le Val de Fontenay.",

      whyUsBullets: [
        "Double expertise végétale et pollution : Traitement anti-mousse et détergent spécifique pour dépôts végétaux du Bois dans le Haut-Fontenay, dégraissant alcalin pour pollution noire de l'A86 dans le Val de Fontenay.",
        "Méthodes adaptées aux matériaux contrastés : Pression modérée et produits neutres pour pierres de taille des villas anciennes du Village, techniques standard pour carrelages et béton lasuré des copropriétés modernes du Val de Fontenay.",
        "Organisation logistique par secteur : Véhicules compacts pour rues étroites bordées de végétation du Village, accès standard pour les copropriétés modernes du Val de Fontenay, planification tenant compte de la fracture urbaine.",
      ],

      uniqueIntro: `<p>Les propriétaires fontenaysiens finissent par renoncer à utiliser leur balcon ou terrasse, découragés par un encrassement qui varie radicalement selon le quartier. Dans le Haut-Fontenay (Village, Plateau, Voisins du Bois), les balcons des villas bourgeoises et des copropriétés bordant le Bois de Vincennes accumulent les pollens collants au printemps, la sève des platanes et tilleuls qui marque les dalles de taches brunâtres tenaces, puis les feuilles mortes massives en automne qui se décomposent dans les angles. L'humidité élevée du quartier des Voisins du Bois favorise le développement de mousses vertes sur les pierres de taille et les murets, rendant les surfaces glissantes. À l'inverse, dans le Val de Fontenay et les Rigollots, les balcons des copropriétés modernes proches de l'A86 accumulent une poussière noire grasse qui colle aux dalles et aux garde-corps en quelques semaines, formant une pellicule tenace difficile à éliminer.</p>
<p class="mt-4">Après une saison, les balcons deviennent des espaces négligés : dans le Plateau, les joints noircissent et les surfaces se couvrent de dépôts verdâtres, les feuilles s'accumulent dans les angles, le garde-corps se ternit sous l'effet de l'humidité. Au Val de Fontenay, le sol carrelé prend une teinte grisâtre uniforme, les garde-corps métalliques sont couverts d'une patine noire, l'eau de pluie forme des traînées sombres sur les façades. On hésite à y installer une chaise ou à y prendre un café le matin. Les tentatives de nettoyage avec un balai-brosse et un seau donnent des résultats décevants : la poussière grasse résiste dans le Bas-Fontenay, les dépôts végétaux s'incrustent dans le Haut-Fontenay.</p>
<p class="mt-4">Un nettoyage professionnel adapté à chaque environnement change complètement la donne. Il élimine les dépôts végétaux et les mousses dans le Haut-Fontenay, dissout la pollution atmosphérique dans le Bas-Fontenay, et restitue l'aspect d'origine des surfaces partout. Les habitants redécouvrent le plaisir d'utiliser cet espace extérieur, d'y prendre l'air ou d'y installer quelques plantes. Cette remise en état valorise aussi le logement en cas de mise en location ou de vente, que ce soit une villa historique du Village ou un appartement moderne du Val de Fontenay.</p>`,

      uniqueDeepDive: `<h3>1. Préparation et identification des salissures par secteur</h3>
<p>Le technicien commence par protéger la porte-fenêtre, les menuiseries et les murs intérieurs avec des bâches étanches fixées au ruban adhésif. Les meubles de balcon, plantes en pot et objets sont déplacés ou protégés individuellement. Les gros débris sont ramassés manuellement : feuilles mortes massives, résidus végétaux et terre pour le Haut-Fontenay, poussières accumulées pour le Val de Fontenay. Le technicien identifie ensuite le type d'encrassement selon la localisation : dépôts végétaux, mousses et traces d'humidité pour les balcons du Village, du Plateau et des Voisins du Bois ; pollution noire grasse pour ceux du Val de Fontenay et des Rigollots proches de l'A86.</p>
<h3>2. Nettoyage adapté au type de pollution</h3>
<p class="mt-4">Pour les balcons du Haut-Fontenay exposés à la végétation intensive, un traitement anti-mousse est appliqué sur les zones présentant des dépôts biologiques, puis un détergent spécifique dissout les résines végétales et les pollens collants. Les joints sont brossés manuellement pour déloger les particules incrustées. Les pierres de taille des villas anciennes du Village nécessitent une pression modérée et un produit neutre pour préserver le matériau. Pour les balcons du Val de Fontenay et des Rigollots exposés à la pollution de l'A86, un dégraissant alcalin puissant dissout la pellicule noire grasse. Le rinçage s'effectue à pression contrôlée selon le support. Les garde-corps, vitreries et murs mitoyens sont lavés à l'éponge ou au chiffon microfibre.</p>
<h3>3. Gestion de l'eau et conseils d'entretien différenciés</h3>
<p class="mt-4">L'eau de rinçage est dirigée vers l'évacuation du balcon à l'aide d'une raclette et de chiffons absorbants, évitant toute coulure sur les façades de prestige du Village ou les façades modernes du Val de Fontenay. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition, durée rallongée dans l'humidité du Plateau. Le technicien conseille un balayage hebdomadaire pour éliminer les feuilles avant qu'elles ne se décomposent (Haut-Fontenay) ou la pollution avant qu'elle ne s'incruste (Bas-Fontenay). Un nettoyage professionnel annuel en novembre après la chute des feuilles maintient la propreté dans le Haut-Fontenay, tandis qu'un nettoyage annuel au printemps suffit pour le Val de Fontenay moins exposé aux débris végétaux.</p>`,

      specificChallenges: [
        "Dépôts végétaux massifs du Bois de Vincennes : Les balcons du Haut-Fontenay (Village, Plateau, Voisins du Bois) accumulent pollens collants, sève et feuilles mortes qui se décomposent, nécessitant détergent spécifique et brossage méticuleux.",
        "Mousses favorisées par l'humidité du Plateau : Les balcons du quartier des Voisins du Bois développent rapidement des dépôts verts glissants sur les surfaces poreuses en raison de l'hygrométrie élevée, exigeant traitement anti-mousse curatif.",
        "Pollution noire grasse de l'A86 : Les balcons du Val de Fontenay et des Rigollots accumulent une pellicule noire tenace d'échappements et de freinage nécessitant un dégraissant puissant et un brossage énergique.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager les pierres de taille de ma villa du Village ?",
          answer: `<p>Non, si la pression est correctement ajustée. Pour les pierres de taille des villas bourgeoises du Village et du Plateau, nous utilisons une pression modérée (80-100 bars) après application d'un anti-mousse ou d'un détergent qui fait le travail de dissolution. Un produit neutre (pH 7) évite toute altération. Cette méthode douce préserve l'intégrité des matériaux patrimoniaux tout en éliminant efficacement les dépôts végétaux et les mousses typiques du Haut-Fontenay exposé à la végétation intensive du Bois.</p>`,
        },
        {
          question:
            "Mon balcon au Val de Fontenay noircit en quelques semaines, comment limiter l'encrassement ?",
          answer: `<p>La pollution atmosphérique de l'A86 dépose quotidiennement des particules grasses impossibles à éviter dans le Bas-Fontenay. Nous recommandons un balayage hebdomadaire pour éliminer les dépôts avant qu'ils ne s'incrustent et ne deviennent une pellicule collante, et un rinçage mensuel léger avec un jet d'eau. Un nettoyage professionnel annuel avec dégraissant permet de traiter les salissures tenaces. C'est la réalité de vivre dans le Val de Fontenay proche de l'A86, environnement très différent du Haut-Fontenay où la pollution urbaine est absente.</p>`,
        },
        {
          question:
            "Les feuilles mortes du Bois peuvent-elles abîmer définitivement mon balcon du Plateau ?",
          answer: `<p>Les feuilles mortes qui s'accumulent se décomposent et libèrent des tanins qui créent des taches brunâtres permanentes sur les dalles poreuses s'ils ne sont pas traités rapidement. Un nettoyage professionnel en novembre, juste après la chute massive des feuilles, élimine ces accumulations avant qu'elles ne marquent définitivement les surfaces. Un balayage régulier en automne limite aussi les dégâts. C'est particulièrement important pour les balcons du Plateau et des Voisins du Bois directement exposés à la végétation dense bordant le Bois de Vincennes.</p>`,
        },
        {
          question:
            "Combien de temps avant de pouvoir réinstaller mes meubles et profiter du balcon ?",
          answer: `<p>Le séchage complet intervient sous 2 à 4 heures selon l'exposition au soleil et la ventilation, durée légèrement rallongée dans l'humidité du quartier des Voisins du Bois. Vous pouvez marcher sur le balcon dès que les surfaces sont sèches au toucher, généralement en milieu d'après-midi si l'intervention a lieu le matin. Pour réinstaller mobilier et plantes, attendez le séchage total des joints et des angles, soit environ une demi-journée. Les balcons exposés sud du Val de Fontenay sèchent plus rapidement que ceux orientés nord du Plateau ombragé par la végétation.</p>`,
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
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par les fientes de pigeons à Fontenay-sous-Bois éliminent les risques sanitaires selon un protocole strict tout en préservant les matériaux contrastés des villas anciennes et des copropriétés modernes.",

      whyUsBullets: [
        "Double expertise sanitaire et patrimoniale : Protocole EPI complet pour sécurité sanitaire, maîtrise des méthodes basse pression pour villas anciennes du Haut-Fontenay, techniques standard pour copropriétés modernes du Val de Fontenay.",
        "Désinfection compatible avec matériaux contrastés : Sélection rigoureuse de produits virucides/bactéricides homologués compatibles avec pierres anciennes, ferronneries d'art du Village ou bétons lasurés, finitions modernes du Val de Fontenay.",
        "Organisation logistique différenciée : Véhicules compacts pour accès aux villas du Village, intervention standard dans les copropriétés du Val de Fontenay, proposition de solutions anti-pigeons adaptées à chaque type d'architecture.",
      ],

      uniqueIntro: `<p>Les propriétaires fontenaysiens découvrent parfois avec stupeur l'ampleur de la contamination de leur balcon ou terrasse après une absence prolongée ou une période d'inutilisation. Les pigeons, attirés par la proximité du Bois de Vincennes qui offre une source alimentaire abondante et des sites de repos, colonisent rapidement les balcons tranquilles de toute la commune. Dans le Haut-Fontenay (Village, Plateau, Voisins du Bois), les villas bourgeoises avec leurs avancées de toit, corniches travaillées et ferronneries d'art offrent de nombreux points de nidification attractifs. Dans le Val de Fontenay, les copropriétés modernes avec leurs balcons filants et leurs structures en béton préfabriqué présentent également des espaces propices à la colonisation. Les fientes s'accumulent en couches épaisses sur les dalles, les pierres de taille, les garde-corps et les murs, formant une croûte durcie qui dégage une odeur insupportable.</p>
<p class="mt-4">Sans intervention rapide, la situation se dégrade dangereusement sur plusieurs plans. L'acidité des fientes corrode les ferronneries d'art des villas anciennes du Village, attaque les joints à la chaux des pierres de taille, crée des taches brunâtres permanentes sur les matériaux clairs, et érode les finitions des balcons en béton lasuré des copropriétés modernes. L'humidité élevée du quartier des Voisins du Bois maintient les fientes humides plus longtemps, accélérant leur action corrosive sur tous les matériaux. Les fientes sèches se transforment en poussière volatile qui pénètre l'intérieur par les portes-fenêtres, contaminant les espaces de vie. Les occupants redoutent les risques sanitaires graves (cryptococcose, histoplasmose, salmonellose), certains développent des symptômes respiratoires sans comprendre l'origine.</p>
<p class="mt-4">Les tentatives de nettoyage domestique aggravent doublement le problème : balayer à sec disperse les poussières pathogènes dans l'air et l'habitation, utiliser une pression inadaptée endommage les matériaux de standing (pierres anciennes du Haut-Fontenay) ou les finitions récentes (béton lasuré du Val de Fontenay). Ce type de contamination nécessite un protocole professionnel strict doublement exigeant : équipements de protection intégrale pour la sécurité sanitaire, méthodes adaptées aux matériaux contrastés selon le secteur, désinfection homologuée compatible avec les supports anciens ou modernes. Seule cette double expertise garantit la récupération d'un balcon propre, désinfecté et préservé dans sa valeur patrimoniale.</p>`,

      uniqueDeepDive: `<h3>1. Protection intégrale et confinement du chantier</h3>
<p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de protection étanches. Ces équipements de protection individuelle sont obligatoires face aux pathogènes présents dans les fientes (salmonelles, cryptocoques, histoplasma, chlamydia psittaci). Des bâches étanches protègent les portes-fenêtres, baies vitrées et murs intérieurs, créant un confinement strict qui empêche toute dispersion vers l'intérieur du logement, qu'il s'agisse d'une villa de prestige du Village ou d'un appartement moderne du Val de Fontenay. Les fientes sèches sont ensuite humidifiées abondamment au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules contaminées lors du ramassage manuel.</p>
<h3>2. Ramassage méthodique et nettoyage adapté aux matériaux</h3>
<p class="mt-4">Les fientes, nids, plumes et débris organiques sont ramassés manuellement zone par zone à l'aide de pelles et racloirs, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour les déchets contaminés. Cette phase s'effectue méthodiquement pour éviter toute dispersion. Les surfaces sont ensuite nettoyées selon le type de support et le secteur : pour les villas anciennes du Village et du Plateau, nettoyage à pression modérée (80-100 bars) avec produit neutre pour les pierres de taille et méthode manuelle pour les ferronneries d'art déjà corrodées ; pour les copropriétés modernes du Val de Fontenay, pression standard avec détergent adapté aux bétons lasurés et pierres préfabriquées. Le brossage manuel élimine la couche organique résiduelle avant rinçage contrôlé, point critique pour préserver l'intégrité des matériaux qu'ils soient anciens ou récents.</p>
<h3>3. Désinfection virucide et recommandations préventives</h3>
<p class="mt-4">Un produit désinfectant virucide et bactéricide homologué, sélectionné pour sa compatibilité avec les matériaux de standing du Haut-Fontenay (pierres anciennes, ferronneries) ou modernes du Val de Fontenay (béton lasuré, surfaces traitées), est appliqué sur l'ensemble du balcon : sol, garde-corps, angles, murs. Le temps de contact réglementaire (10 à 15 minutes) est strictement respecté pour garantir la neutralisation des agents pathogènes. Après rinçage final à pression adaptée selon le support, le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité. Le technicien conseille d'inspecter régulièrement les points de nidification (corniches des villas anciennes, structures en béton des copropriétés modernes) et peut proposer la pose de solutions anti-pigeons (pics discrets, filets) adaptées à l'architecture pour prévenir une recolonisation qui endommagerait de nouveau les matériaux.</p>`,

      specificChallenges: [
        "Proximité du Bois de Vincennes attirant les pigeons : La végétation dense du Bois offre une source alimentaire et des sites de repos qui attirent les pigeons vers les balcons du Haut-Fontenay (Village, Plateau, Voisins du Bois), accélérant la colonisation.",
        "Corrosion accélérée des ferronneries anciennes : L'acidité des fientes attaque rapidement les ferronneries d'art et les garde-corps métalliques anciens des villas du Village et du Plateau, nécessitant une intervention urgente pour limiter les dégâts patrimoniaux irréversibles.",
        "Humidité du Plateau aggravant la dégradation : L'environnement humide du quartier des Voisins du Bois maintient les fientes humides plus longtemps, accélérant leur action corrosive sur tous les matériaux, anciens ou modernes.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un danger sanitaire réel dans une villa de prestige ou un appartement moderne ?",
          answer: `<p>Oui, le type de logement ne change rien aux risques sanitaires. Les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer des infections respiratoires graves, des mycoses pulmonaires ou des troubles gastro-intestinaux. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées dans les espaces confinés des logements. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires.</p>`,
        },
        {
          question:
            "Le nettoyage peut-il endommager les matériaux anciens de ma villa du Village ou les finitions modernes de mon appartement du Val de Fontenay ?",
          answer: `<p>Non, si le protocole est rigoureusement adapté. Pour les villas anciennes du Village et du Plateau, nous utilisons une pression modérée (80-100 bars) avec produit neutre pour les pierres de taille et un nettoyage manuel pour les ferronneries d'art déjà corrodées par l'acidité des fientes. Pour les copropriétés modernes du Val de Fontenay, nous ajustons la pression selon les finitions (béton lasuré, pierres préfabriquées) et sélectionnons des produits désinfectants compatibles. Cette double expertise technique est indispensable dans une commune aux typologies immobilières aussi contrastées.</p>`,
        },
        {
          question:
            "Les fientes ont-elles déjà causé des dégâts irréversibles sur mon balcon ?",
          answer: `<p>Cela dépend de l'ancienneté de la contamination. Sur les ferronneries d'art des villas du Village, l'acidité provoque une corrosion profonde qui altère définitivement les finitions anciennes et nécessite souvent une restauration par un ferronnier spécialisé. Sur les pierres de taille, elle crée des taches brunâtres qui pénètrent profondément. Sur les bétons lasurés des copropriétés modernes du Val de Fontenay, elle érode les finitions de surface. L'humidité du quartier des Voisins du Bois aggrave tous ces processus. Une intervention rapide (premières semaines) limite considérablement les dégâts, mais les contaminations anciennes (plusieurs mois) laissent souvent des dommages permanents nécessitant des réparations complémentaires coûteuses.</p>`,
        },
        {
          question: "Comment éviter que les pigeons ne reviennent coloniser mon balcon ?",
          answer: `<p>Nous proposons la pose de solutions anti-pigeons adaptées à l'architecture : pics discrets en acier inoxydable sur les corniches et garde-corps des villas anciennes du Village, filets transparents pour les balcons des copropriétés modernes du Val de Fontenay, répulsifs visuels pour les avancées de toit. Ces dispositifs sont installés en respectant l'esthétique des bâtiments anciens ou modernes. L'inspection régulière des points de nidification et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive. Cette prévention est particulièrement importante à Fontenay où la proximité du Bois de Vincennes attire constamment les pigeons vers les zones résidentielles.</p>`,
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS, TAPIS & MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Fontenay-sous-Bois élimine acariens et allergènes favorisés par l'humidité du Plateau et la pollution de l'A86, restaurant l'hygiène des intérieurs contrastés.",

      whyUsBullets: [
        "Double expertise humidité et pollution : Protocole anti-acariens renforcé pour l'environnement humide du Haut-Fontenay (Village, Plateau, Voisins du Bois), détergent dégraissant pour pollution de l'A86 dans le Val de Fontenay et les Rigollots.",
        "Extraction maximale adaptée aux environnements contrastés : Injection-extraction à eau chaude (65-70°C) tuant les acariens, extraction renforcée critique dans l'humidité du Plateau, traitement des allergènes végétaux du Bois et des particules de pollution atmosphérique.",
        "Organisation différenciée par secteur : Véhicules compacts pour rues étroites du Village, intervention en journée ou week-end, respect du standing attendu dans les villas du Haut-Fontenay et les copropriétés modernes du Val de Fontenay.",
      ],

      uniqueIntro: `<p>Dans les villas et appartements fontenaysiens, les textiles d'ameublement accumulent silencieusement des salissures invisibles aggravées par des facteurs environnementaux qui varient radicalement selon le quartier. Dans le Haut-Fontenay (Village, Plateau, Voisins du Bois), l'humidité élevée liée à la végétation dense bordant le Bois de Vincennes crée un environnement particulièrement propice à la prolifération rapide des acariens dans les matelas, canapés et tapis. Ces organismes microscopiques se multiplient intensément dans cet air saturé d'humidité, se nourrissant de squames humaines et déposant leurs déjections allergisantes. Les pollens collants du Bois pénètrent au printemps par les fenêtres ouvertes et s'incrustent dans les fibres, ajoutant une charge allergénique supplémentaire. Dans le Val de Fontenay et les Rigollots, la pollution de l'A86 pénètre par les fenêtres et se loge dans les fibres des canapés et tapis, formant un dépôt noir microscopique qui s'accumule jour après jour.</p>
<p class="mt-4">Les familles constatent des symptômes sans en identifier les causes environnementales multiples qui varient selon leur localisation : dans le Haut-Fontenay, rhinites matinales persistantes aggravées par l'humidité ambiante et les acariens, éternuements répétés au réveil, crises allergiques au printemps lors des pics de pollinisation du Bois ; dans le Val de Fontenay, irritations respiratoires liées aux particules de pollution incrustées, asthme qui s'intensifie pendant les pics de trafic sur l'A86. Les enfants développent des réactions allergiques, les personnes sensibles respirent difficilement la nuit. Les tentatives de nettoyage domestique restent superficielles et inefficaces face à cette contamination différenciée : l'aspirateur n'extrait pas les acariens logés en profondeur dans les rembourrages humides du Plateau, les particules de pollution restent incrustées dans les textiles du Val de Fontenay.</p>
<p class="mt-4">Sans intervention professionnelle, la situation sanitaire se dégrade inexorablement dans les deux secteurs. Les acariens prolifèrent dans l'humidité constante du Haut-Fontenay, leurs déjections deviennent la principale source d'allergies respiratoires. Les particules de pollution s'oxydent et créent une coloration grisâtre des textiles dans le Bas-Fontenay. Les pollens incrustés déclenchent des crises allergiques saisonnières dans tout le Haut-Fontenay. Un nettoyage professionnel à domicile change radicalement cette situation sanitaire contrastée. L'injection-extraction à eau chaude tue les acariens qui prolifèrent dans l'humidité du Plateau, extrait leurs déjections et les allergènes multiples (pollens du Bois dans le Haut, particules de pollution dans le Bas), dissout les dépôts invisibles. L'intervention devient un acte de prévention sanitaire indispensable, particulièrement important dans les environnements contrastés de Fontenay où la qualité de l'air intérieur est menacée par des facteurs différents selon le secteur : humidité et allergènes végétaux dans le Haut, pollution atmosphérique dans le Bas.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic textile et identification des contaminations par secteur</h3>
<p>Le technicien examine chaque élément à traiter : type de tissu (lin et cotons naturels dans les villas de standing du Village, tissus techniques dans les appartements modernes du Val de Fontenay), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles et interroge les occupants sur les problèmes rencontrés et leur localisation : allergies respiratoires aggravées et sensation d'humidité persistante pour le Haut-Fontenay (Village, Plateau, Voisins du Bois), irritations liées à la pollution et proximité de l'A86 pour le Val de Fontenay et les Rigollots, exposition aux pollens pour les logements proches du Bois. Cette analyse permet de sélectionner le protocole adapté : température élevée (65-70°C) obligatoire pour tuer les acariens qui prolifèrent dans l'humidité du Plateau, extraction maximale critique pour éliminer l'eau résiduelle dans cet environnement déjà humide, détergent dégraissant pour dissoudre les particules de pollution dans le Val de Fontenay, traitement spécifique pour pollens collants dans le Haut-Fontenay.</p>
<h3>2. Pré-traitement ciblé et injection-extraction thermique différenciée</h3>
<p class="mt-4">Les taches tenaces et zones contaminées reçoivent un pré-traitement spécifique selon le secteur : détachant enzymatique pour matières organiques, dégraissant pour particules de pollution atmosphérique dans le Val de Fontenay, neutralisant d'odeurs pour zones imprégnées par l'humidité ambiante du Plateau, traitement anti-acariens préalable pour textiles très contaminés du quartier des Voisins du Bois. Après un temps de pose, la machine d'injection-extraction pulvérise un mélange d'eau chaude (65-70°C) et de détergent hypoallergénique au cœur des fibres. Cette température élevée est absolument indispensable pour tuer les acariens adultes, larves et œufs qui prolifèrent particulièrement dans l'environnement humide du Haut-Fontenay. L'aspiration immédiate et puissante retire l'eau sale chargée de particules de pollution (Val de Fontenay), d'acariens morts, de leurs déjections allergisantes et des pollens incrustés (Haut-Fontenay). Le technicien effectue plusieurs passages sur les zones très sollicitées et sur les textiles exposés aux multi-facteurs de contamination.</p>
<h3>3. Extraction maximale et conseils anti-contamination par environnement</h3>
<p class="mt-4">L'extraction puissante est absolument critique pour limiter l'humidité résiduelle dans les rembourrages, point particulièrement essentiel dans le Haut-Fontenay déjà saturé par l'humidité du Bois. Le séchage complet intervient sous 6 à 10 heures selon la ventilation et l'exposition : durée rallongée dans le quartier des Voisins du Bois, plus rapide dans le Val de Fontenay. Le technicien conseille impérativement d'aérer la pièce en ouvrant largement les fenêtres pour évacuer l'humidité (Haut-Fontenay) mais en évitant les heures de pointe de l'A86 (Val de Fontenay). Il recommande un aspirateur hebdomadaire avec filtre HEPA capturant acariens et pollens (Haut), particules de pollution (Bas), l'utilisation de housses anti-acariens sur les matelas (indispensable dans l'humidité du Plateau), la fermeture des fenêtres pendant les pics de pollution A86 (Val de Fontenay) et les périodes de pollinisation du Bois (Haut-Fontenay), et un nettoyage professionnel annuel pour les foyers exposés aux multi-facteurs de contamination ou avec personnes allergiques.</p>`,

      specificChallenges: [
        "Prolifération d'acariens favorisée par l'humidité du Plateau : L'environnement humide constant du Haut-Fontenay lié à la végétation dense bordant le Bois accélère la multiplication des acariens dans les matelas et canapés, nécessitant un traitement thermique rigoureux et une extraction maximale.",
        "Pollution atmosphérique incrustée dans les fibres : Les appartements du Val de Fontenay et des Rigollots proches de l'A86 accumulent des particules noires qui pénètrent les textiles et s'incrustent profondément, aggravant les problèmes respiratoires et nécessitant un détergent dégraissant spécifique.",
        "Pollens collants du Bois de Vincennes : Les logements du Haut-Fontenay (Village, Plateau, Voisins du Bois) bordant le Bois accumulent au printemps des pollens allergisants qui s'incrustent dans les canapés et tapis, nécessitant une extraction renforcée et un traitement spécifique.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il les acariens qui prolifèrent dans l'humidité du Plateau ?",
          answer: `<p>Oui, l'injection-extraction à eau chaude (65-70°C) tue les acariens adultes, larves et œufs par choc thermique. Cette température est particulièrement importante dans le Haut-Fontenay (Village, Plateau, Voisins du Bois) où l'humidité constante liée à la végétation dense du Bois favorise leur prolifération rapide, bien supérieure au Val de Fontenay plus sec. L'aspiration puissante retire ensuite les acariens morts et leurs déjections allergisantes. Les familles du quartier des Voisins du Bois particulièrement exposées à l'humidité constatent généralement une amélioration notable des symptômes (rhinites, éternuements, irritations) sous 48 à 72h. Pour maintenir ce résultat dans l'environnement humide du Haut-Fontenay, nous recommandons impérativement un nettoyage annuel et l'utilisation de housses anti-acariens.</p>`,
        },
        {
          question:
            "Le nettoyage élimine-t-il aussi les particules de pollution de l'A86 incrustées dans mes textiles du Val de Fontenay ?",
          answer: `<p>Oui, l'injection-extraction avec détergent dégraissant dissout et extrait les particules noires de pollution atmosphérique qui se sont incrustées dans les fibres depuis des mois. Ces particules microscopiques, invisibles à l'œil nu mais responsables de la coloration grisâtre progressive des textiles, sont extraites avec l'eau sale. Les habitants du Val de Fontenay et des Rigollots particulièrement exposés à l'A86 constatent une amélioration de la qualité de l'air intérieur et une réduction des symptômes respiratoires. Pour limiter la recontamination rapide, fermez les fenêtres pendant les heures de pointe et renouvelez le nettoyage annuellement.</p>`,
        },
        {
          question:
            "Combien de temps avant de pouvoir réutiliser mon canapé dans l'environnement humide du Plateau ?",
          answer: `<p>Le séchage complet intervient sous 6 à 10 heures à Fontenay, durée variable selon le secteur : plus longue dans le Haut-Fontenay (Village, Plateau, Voisins du Bois) en raison de l'humidité ambiante constante liée au Bois, plus rapide dans le Val de Fontenay où l'air est plus sec. Vous pouvez vous asseoir légèrement sur les accoudoirs dès 3 à 4h, mais évitez de vous installer complètement avant séchage total pour ne pas écraser les fibres humides. Aérez impérativement la pièce en ouvrant largement les fenêtres, mais privilégiez les heures où la pollution extérieure est moindre si vous êtes au Val de Fontenay. Pour les logements du quartier des Voisins du Bois particulièrement humides, privilégiez une intervention par temps sec et venteux.</p>`,
        },
        {
          question:
            "Le nettoyage élimine-t-il aussi les pollens du Bois de Vincennes incrustés dans mes textiles ?",
          answer: `<p>Oui, l'injection-extraction avec détergent spécifique dissout et extrait les pollens collants qui se sont incrustés dans les fibres des canapés et tapis près des fenêtres. Ces pollens, particulièrement abondants au printemps dans le Haut-Fontenay (Village, Plateau, Voisins du Bois) bordant le Bois, sont une source importante d'allergies respiratoires absente dans le Val de Fontenay. L'aspiration puissante retire ces particules allergisantes ainsi que les acariens qui prolifèrent dans l'humidité. Pour limiter la recontamination multiple, fermez les fenêtres pendant les pics de pollinisation (avril-mai) et effectuez un nettoyage professionnel annuel après cette période si vous habitez le Haut-Fontenay.</p>`,
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
