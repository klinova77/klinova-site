import type { City } from "~/types/geo";

const city: City = {
  name: "Pontault-Combault",
  slug: "pontault-combault",
  postalCodes: ["77340"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  customDescription:
    "Quatrième ville de Seine-et-Marne à urbanisme pavillonnaire horizontal, Pontault-Combault combine maisons individuelles, meulières anciennes près de la gare et collectifs denses à l'Ocil. La pollution de la Francilienne et de la RN4, la végétation de la Forêt de Notre-Dame et l'étalement urbain imposent un entretien adapté des surfaces résidentielles diversifiées.",

  hubIntro: `<p>Pontault-Combault présente un parc immobilier majoritairement pavillonnaire nécessitant des protocoles adaptés aux maisons individuelles, meulières anciennes et collectifs. <strong>Klinova intervient en partenariat avec les propriétaires de pavillons, les syndics de copropriétés et les gestionnaires</strong> pour assurer l'entretien des surfaces intérieures et extérieures, en tenant compte de l'étalement urbain important et des facteurs de salissure variés selon la proximité des axes routiers ou de la forêt.</p>
<p>Nos équipes connaissent les spécificités locales : pollution routière de la Francilienne et de la RN4 déposant micro-particules et suies sur les résidences bordant ces axes, pollens massifs et verdissement rapide dus à la proximité de la Forêt de Notre-Dame, poussière commerciale dans les secteurs proches de la zone Carrefour. Nous déployons des protocoles adaptés aux matériaux (meulières anciennes nécessitant basse pression, terrasses en béton des pavillons, vérandas fréquentes) avec une organisation logistique tenant compte des distances entre quartiers.</p>
<ul>
  <li><strong>Adaptation au tissu pavillonnaire horizontal :</strong> Protocoles pour maisons individuelles avec terrasses, murets et vérandas typiques du Bouquet et de l'Ermitage, méthodes basse pression pour meulières du quartier de la Gare, traitements pour parties communes des collectifs de l'Ocil.</li>
  <li><strong>Maîtrise des facteurs de salissure variés :</strong> Dégraissant renforcé pour pollution de la Francilienne et de la RN4, traitement anti-mousse pour verdissement lié à la Forêt de Notre-Dame, élimination des pollens massifs du printemps, gestion de la poussière commerciale.</li>
  <li><strong>Organisation logistique pour ville étalée :</strong> Planification tenant compte des distances importantes entre le Bouquet (Nord) et la Grenouillère (Sud), stationnement aisé en zone pavillonnaire, accès adapté aux secteurs denses de la Gare et de l'Ocil.</li>
</ul>`,

  citySpecificChallenges: [
    "Pollution routière de la Francilienne et de la RN4 générant micro-particules de pneus et suies d'échappement déposant des salissures grisâtres sur vitres et façades des résidences bordant ces axes",
    "Végétation de la Forêt de Notre-Dame produisant pollens massifs au printemps et verdissement rapide des toitures et murets par mousses favorisées par l'ombre et l'humidité forestière",
    "Étalement urbain important créant des distances d'intervention longues entre le Bouquet (Nord) et la Grenouillère (Sud), avec la Francilienne formant une barrière physique",
    "Typologie résidentielle diversifiée nécessitant double expertise : meulières anciennes à joints poreux du quartier de la Gare exigeant basse pression, pavillons avec terrasses et vérandas typiques de l'urbanisme horizontal",
  ],

  districts: [
  "Quartier Le Bouquet",
  "Quartier Le Val du Muguet",
  "Quartier Combault",
  "Quartier Le Village Anglais",
  "Quartier Bois la Croix",
  "Quartier Les Berchères",
  "Quartier Pontillault",
  "Quartier Les Tourelles",
  "Quartier L’Ocil",
  "Quartier Les Hantes",
  "Quartier Le Bourg de Pontault",
  "Quartier Clos du Village",
  "Quartier Clos Dame Gille",
  "Quartier Pavé de Pontault",
],


nearbyCities: [
  "bussy-saint-georges",
  "noisy-le-grand",
  "saint-maur-des-fosses",
  "torcy",
],

  landmarks: [
    "Mairie de Pontault-Combault",
    "Gare de Pontault-Combault (RER E)",
    "Hôtel de Ville (Château de Pontault)",
    "Les Passerelles (Médiathèque)",
    "Centre Commercial Carrefour Pontault",
    "Parc de l'Hôtel de Ville",
    "La Francilienne (N104)",
    "Forêt de Notre-Dame (proximité)",
  ],

  faq: [
    {
      question:
        "Intervenez-vous dans tous les secteurs de Pontault malgré l'étalement urbain ?",
      answer: `<p><strong>Oui, nous couvrons l'ensemble des quartiers</strong> du Bouquet au nord jusqu'à la Grenouillère et les Pince-Vents au sud. Nous planifions les interventions en tenant compte des distances importantes typiques de cet urbanisme horizontal. Le stationnement est généralement aisé dans les zones pavillonnaires (propriétés privées), et nous adaptons notre organisation pour les secteurs plus denses de la Gare et de l'Ocil où le stationnement est plus contraint.</p>`,
    },
    {
      question:
        "Le diagnostic sur site est-il gratuit dans tous les quartiers de Pontault-Combault ?",
      answer: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Bouquet, Ermitage, Centre-Ville, Gare, Ocil, Village, Berchères, Grenouillère, Pince-Vents). Le technicien évalue les surfaces, identifie les contraintes spécifiques (pollution routière, végétation forestière, type de résidence pavillonnaire ou collective) et remet un chiffrage détaillé sous 48h adapté à votre maison ou copropriété.</p>`,
    },
    {
      question:
        "Vos méthodes sont-elles adaptées aux meulières anciennes du quartier de la Gare ?",
      answer: `<p><strong>Oui, nous utilisons exclusivement des protocoles basse pression et vapeur</strong> pour les meulières du quartier historique de Pontault près de la gare. Ces matériaux anciens avec joints poreux ne tolèrent aucune haute pression agressive qui déchausserait les pierres. Cette expertise spécifique préserve le bâti ancien tout en éliminant efficacement les mousses favorisées par la proximité de la Forêt de Notre-Dame.</p>`,
    },
    {
      question:
        "Comment gérez-vous les interventions malgré la coupure créée par la Francilienne ?",
      answer: `<p><strong>Nous planifions chaque intervention en tenant compte de cette barrière physique</strong> qui scinde la ville. Nos techniciens connaissent les temps de trajet entre les secteurs nord (Bouquet, Ermitage) et sud (Grenouillère, Pince-Vents) séparés par la N104. Cette organisation logistique fait partie de notre routine dans les villes à fort étalement urbain comme Pontault-Combault, quatrième ville de Seine-et-Marne par sa population.</p>`,
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
        "Le nettoyage professionnel des moquettes à Pontault-Combault élimine la pollution de la Francilienne et les dépôts végétaux de la Forêt de Notre-Dame, tout en préservant la propreté des parties communes pavillonnaires et collectives.",

      whyUsBullets: [
        "Double expertise pollution routière et végétation : Dégraissant renforcé pour micro-particules de la Francilienne et de la RN4, détergent spécifique pour pollens et dépôts végétaux de la Forêt de Notre-Dame affectant les quartiers résidentiels.",
        "Extraction adaptée aux matériaux variés : Méthodes soignées pour tapis d'escalier des immeubles anciens du quartier de la Gare, techniques robustes pour moquettes synthétiques des collectifs de l'Ocil, séchage rapide pour tous les types.",
        "Organisation logistique pour ville étalée : Planification tenant compte des distances importantes entre le Bouquet (Nord) et la Grenouillère (Sud), stationnement aisé en zone pavillonnaire, adaptation aux secteurs denses de la Gare et de l'Ocil.",
      ],

      uniqueIntro: `<p>Les copropriétés de Pontault-Combault subissent un encrassement différencié selon leur localisation dans cette ville étalée à urbanisme horizontal. Les résidences bordant la Francilienne et la RN4 accumulent quotidiennement des micro-particules de pneus et des suies d'échappement qui se déposent dans les halls et cages d'escalier, transportées par les semelles des résidents. Ces particules grisâtres s'incrustent profondément dans les fibres des moquettes, formant des traînées sombres persistantes sur les seuils et les zones de passage. À l'inverse, les copropriétés et pavillons des quartiers résidentiels verdoyants (Bouquet, Ermitage) proches de la Forêt de Notre-Dame accumulent des pollens massifs au printemps, transportés par le vent et les chaussures, qui s'incrustent dans les fibres et forment une couche jaunâtre tenace.</p>
<p class="mt-4">Les copropriétaires des collectifs de l'Ocil ou des petits immeubles du quartier de la Gare constatent cette dégradation progressive : les seuils d'entrée ternissent rapidement malgré l'entretien quotidien, les zones devant les ascenseurs accumulent des dépôts gris ou jaunâtres selon l'exposition, les paliers du rez-de-chaussée gardent des traces visibles. La poussière commerciale générée par le brassage d'air autour de la zone Carrefour ajoute une couche supplémentaire d'encrassement pour les résidences de la Grenouillère et des Pince-Vents. Les conseils syndicaux reçoivent des remarques répétées, conscients que cet aspect négligé contraste avec le cadre résidentiel recherché de Pontault-Combault.</p>
<p class="mt-4">Sans nettoyage professionnel structuré, la situation empire inexorablement. Les micro-particules de la Francilienne s'incrustent et créent une coloration grisâtre permanente, les pollens de la forêt s'oxydent et forment des taches jaunâtres difficiles à éliminer, les poussières commerciales s'agglomèrent avec l'humidité. Un nettoyage professionnel adapté à chaque environnement inverse cette dynamique. Il extrait les particules routières avec des dégraissants spécifiques, élimine les pollens forestiers avec des détergents adaptés, ravive les couleurs d'origine et préserve la propreté des parties communes. L'intervention devient un acte de maintenance préventive indispensable pour maintenir le standing résidentiel dans cette quatrième ville de Seine-et-Marne.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic adapté à la localisation dans la ville</h3>
<p>Le technicien examine l'état de la moquette (fibres synthétiques robustes des collectifs de l'Ocil, tapis d'escalier des petits immeubles du quartier de la Gare, bouclées épaisses des halls de standing) et identifie les salissures typiques selon la proximité des axes ou de la forêt : micro-particules grises de la Francilienne et de la RN4 pour les résidences bordant ces axes, pollens jaunâtres et dépôts végétaux pour les quartiers proches de la Forêt de Notre-Dame (Bouquet, Ermitage), poussière commerciale pour les secteurs de la Grenouillère et des Pince-Vents. Il repère les zones critiques (seuils exposés à la pollution routière ou aux pollens, paliers devant les ascenseurs) et note les contraintes d'accès (stationnement aisé en zone pavillonnaire, plus tendu autour de la Gare RER E). Cette analyse détermine le choix du détergent : dégraissant pour pollution routière ou spécifique pour dépôts végétaux.</p>
<h3>2. Injection-extraction différenciée selon le type de salissure</h3>
<p class="mt-4">La machine pulvérise un mélange d'eau chaude (65-70°C) et de détergent sélectionné selon l'encrassement. Pour les moquettes des résidences bordant la Francilienne et la RN4, un <strong>dégraissant professionnel</strong> émulsionne les micro-particules de pneus et les suies d'échappement. Pour les copropriétés des quartiers résidentiels proches de la Forêt de Notre-Dame (Bouquet, Ermitage), un détergent formulé pour dissoudre les pollens et les résines végétales est appliqué. L'aspiration immédiate et puissante retire l'eau sale chargée de particules avant saturation du support. Sur les zones très encrassées (entrées des immeubles proches de la Francilienne, halls des résidences du Bouquet exposées aux pollens massifs du printemps), plusieurs passages successifs extraient les salissures les plus tenaces. L'extraction maximale garantit un séchage rapide compatible avec l'occupation permanente des immeubles.</p>
<h3>3. Séchage surveillé et recommandations par secteur</h3>
<p class="mt-4">Le séchage complet intervient sous 6 à 8 heures grâce à l'extraction maximale. Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés bordant la Francilienne et la RN4 exposées à la pollution routière intense, un nettoyage semestriel maintient la propreté sans attendre l'encrassement critique. Pour les résidences des quartiers résidentiels proches de la forêt, un nettoyage annuel au printemps après les pics de pollinisation élimine les dépôts végétaux avant qu'ils ne s'incrustent définitivement. Les copropriétés du Centre-Ville et de la Gare peuvent espacer à un rythme annuel standard. Cette fréquence différenciée compense les facteurs de salissure variés de l'urbanisme étalé pontellois-combalusien.</p>`,

      specificChallenges: [
        "Pollution routière de la Francilienne et de la RN4 : Les résidences bordant ces axes accumulent des micro-particules de pneus et des suies d'échappement formant des dépôts grisâtres tenaces nécessitant un dégraissant renforcé et plusieurs passes d'extraction.",
        "Pollens massifs de la Forêt de Notre-Dame : Les copropriétés des quartiers résidentiels verdoyants (Bouquet, Ermitage) accumulent au printemps des pollens qui s'incrustent dans les fibres et forment des taches jaunâtres nécessitant un détergent spécifique.",
        "Poussière commerciale de la zone Carrefour : Les résidences de la Grenouillère et des Pince-Vents proches du pôle commercial subissent un brassage d'air générant des dépôts de poussière supplémentaires qui s'agglomèrent avec l'humidité.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles proches de la Francilienne nécessitent-elles un entretien plus fréquent ?",
          answer: `<p>Oui, la pollution routière de la Francilienne et de la RN4 dépose quotidiennement des micro-particules de pneus et des suies d'échappement qui s'incrustent rapidement dans les fibres. Ces particules grisâtres forment des dépôts tenaces que l'aspirateur domestique ne peut éliminer. Nous recommandons un nettoyage semestriel pour les copropriétés très exposées bordant ces axes, permettant de maintenir l'aspect soigné sans attendre l'encrassement critique. Cette fréquence renforcée compense l'exposition à la pollution routière intense typique des résidences situées le long de ces voies de transit massif.</p>`,
        },
        {
          question:
            "Intervenez-vous dans les pavillons avec leurs halls d'entrée privés ?",
          answer: `<p>Absolument. Bien que Pontault-Combault soit majoritairement pavillonnaire (plus de 50% de maisons individuelles), de nombreux pavillons des quartiers du Bouquet et de l'Ermitage disposent de halls d'entrée avec moquette ou tapis. Nous intervenons également dans les petites copropriétés de meulières du quartier de la Gare et dans les grands ensembles collectifs de l'Ocil. Le stationnement est généralement aisé en zone pavillonnaire (propriétés privées), facilitant nos interventions dans cet urbanisme horizontal typique de Pontault.</p>`,
        },
        {
          question:
            "Les pollens de la Forêt de Notre-Dame peuvent-ils endommager définitivement les moquettes ?",
          answer: `<p>Les pollens massifs du printemps s'incrustent rapidement dans les fibres et peuvent former des taches jaunâtres permanentes s'ils ne sont pas traités dans les premiers mois. Un nettoyage professionnel en mai-juin, juste après les pics de pollinisation, extrait ces particules végétales avant qu'elles ne s'oxydent et ne marquent définitivement les fibres. C'est particulièrement important pour les copropriétés des quartiers résidentiels verdoyants (Bouquet, Ermitage) directement exposées à la végétation intensive de la forêt toute proche.</p>`,
        },
        {
          question:
            "Comment organisez-vous les interventions malgré l'étalement urbain de Pontault ?",
          answer: `<p>Nous planifions chaque intervention en tenant compte des distances importantes typiques de cette ville horizontale, quatrième de Seine-et-Marne par sa population. Les trajets entre le Bouquet au nord et la Grenouillère au sud sont anticipés dans notre organisation. La Francilienne forme une barrière physique que nos techniciens connaissent et intègrent dans leurs déplacements. Cette organisation logistique adaptée fait partie de notre routine dans les villes à fort étalement urbain comme Pontault-Combault.</p>`,
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
        "Le nettoyage professionnel des parkings pontellois-combalusiens restaure la propreté des sols tout en gérant les salissures variées de la pollution routière et de la végétation forestière selon la localisation dans la ville.",

      whyUsBullets: [
        "Double expertise pollution et végétation : Dégraissant renforcé pour pollution routière de la Francilienne et de la RN4, traitement anti-mousse et dégagement des débris végétaux pour parkings proches de la Forêt de Notre-Dame.",
        "Méthodes adaptées aux environnements contrastés : Émulsion thermique pour graisses atmosphériques des parkings bordant les axes, brossage vigoureux pour mousses et dépôts organiques des secteurs forestiers, gestion des siphons obstrués.",
        "Organisation pour ville pavillonnaire étalée : Planification tenant compte des distances importantes entre quartiers, stationnement aisé en zone pavillonnaire facilitant les interventions, adaptation aux petites copropriétés typiques de l'urbanisme horizontal.",
      ],

      uniqueIntro: `<p>Les parkings souterrains et semi-enterrés de Pontault-Combault présentent des profils d'encrassement différents selon leur localisation dans cette ville à urbanisme pavillonnaire étalé. Les parkings des copropriétés bordant la Francilienne et la RN4 accumulent principalement des dépôts liés à la pollution routière : micro-particules de pneus, suies d'échappement et résidus de freinage transportés par les véhicules qui forment une pellicule grisâtre tenace sur les sols en béton. Les marquages au sol se ternissent rapidement sous l'effet de cette pollution atmosphérique intense. À l'inverse, les parkings des résidences des quartiers résidentiels verdoyants (Bouquet, Ermitage) proches de la Forêt de Notre-Dame accumulent des débris végétaux : feuilles mortes, brindilles et pollens transportés par les pneus, qui se décomposent en boue noirâtre dans les angles. L'ombre et l'humidité forestière favorisent également le développement rapide de mousses vertes sur les sols poreux.</p>
<p class="mt-4">Les copropriétaires des collectifs de l'Ocil ou des petits immeubles du quartier de la Gare constatent cette dégradation différenciée : dans les parkings proches des axes routiers, les zones de circulation noircissent avec des taches d'huile qui s'étendent, tandis que dans les parkings des secteurs forestiers, les rampes deviennent glissantes avec des dépôts verdâtres et des accumulations de feuilles décomposées. Les conseils syndicaux et gestionnaires reçoivent des demandes d'intervention, mais l'organisation semble complexe dans une ville aussi étalée où les distances entre le Bouquet au nord et la Grenouillère au sud imposent une planification logistique rigoureuse.</p>
<p class="mt-4">Un décrassage structuré et coordonné répond à ces préoccupations variées. Il dissout les graisses atmosphériques dans les parkings exposés à la pollution routière, élimine les dépôts biologiques favorisés par la végétation forestière, et restaure la propreté des sols partout. L'intervention devient un acte de gestion préventive, valorisant le patrimoine immobilier résidentiel et maintenant le niveau de confort attendu dans cette quatrième ville de Seine-et-Marne malgré des facteurs de salissure contrastés.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique et planification résidentielle</h3>
<p>Le technicien visite le parking pour identifier le type de revêtement (béton brut dans les parkings anciens des meulières de la Gare, peinture de sol ou résine dans les parkings récents des collectifs de l'Ocil), repérer les zones problématiques selon la localisation, et vérifier l'état des siphons. Pour les parkings proches de la Francilienne et de la RN4 : pollution grisâtre sur zones de circulation, taches d'huile concentrées. Pour les parkings des quartiers résidentiels forestiers (Bouquet, Ermitage) : mousses vertes sur rampes, boue de feuilles décomposées dans les angles, dépôts organiques. Il note la configuration typique : parkings de petites copropriétés ou semi-enterrés de pavillons avec 10 à 30 places selon la taille. Cette analyse permet d'organiser l'intervention en coordonnant avec le syndic ou les propriétaires pour informer les résidents et minimiser la gêne, le stationnement étant généralement aisé en zone pavillonnaire.</p>
<h3>2. Décrassage par autolaveuse et traitement adapté à l'encrassement</h3>
<p class="mt-4">Pour les parkings des secteurs forestiers, le balayage mécanique élimine d'abord les feuilles mortes, brindilles et débris végétaux massifs. Un traitement anti-mousse professionnel est appliqué sur les zones humides présentant des dépôts biologiques, avec un temps de contact de 20 à 30 minutes. L'autolaveuse brosse ensuite vigoureusement pour éliminer mousses et résidus végétaux. Pour les parkings proches de la Francilienne et de la RN4, le dégraissant professionnel est mélangé à de l'eau chaude (60-70°C) pour émulsionner les micro-particules de pneus et les suies d'échappement. Les taches d'huile sont traitées localement avec un détergent spécifique et de la haute pression contrôlée. Les rampes, pieds de poteaux et angles sont nettoyés manuellement partout. L'eau de lavage est collectée et évacuée conformément aux normes.</p>
<h3>3. Rotation coordonnée et suivi résidentiel</h3>
<p class="mt-4">L'intervention est organisée par zones successives si nécessaire : moitié A le matin, moitié B l'après-midi, permettant aux résidents de stationner temporairement dans la zone non traitée. Le parking reste accessible en permanence, seule la zone en cours de lavage est momentanément condamnée le temps du séchage rapide (2-3h). Un compte-rendu avec photos avant/après est remis au gestionnaire ou au syndic, pratique appréciée dans les copropriétés résidentielles où la traçabilité des prestations est importante. Pour les parkings des quartiers résidentiels proches de la forêt, un décrassage annuel en automne après la chute des feuilles maintient la propreté. Pour les parkings bordant les axes routiers, un décrassage annuel avec dégraissant renforcé suffit. Cette fréquence différenciée tient compte des facteurs de salissure variés selon la localisation dans la ville étalée.</p>`,

      specificChallenges: [
        "Pollution routière de la Francilienne et de la RN4 : Les parkings des copropriétés bordant ces axes accumulent micro-particules de pneus et suies formant une pellicule grisâtre tenace nécessitant un dégraissant renforcé et de l'eau chaude.",
        "Débris végétaux de la Forêt de Notre-Dame : Les parkings des quartiers résidentiels (Bouquet, Ermitage) accumulent des feuilles mortes qui se décomposent en boue et obstruent les siphons, nécessitant un balayage intensif et un dégagement manuel.",
        "Mousses favorisées par l'ombre forestière : Les parkings des secteurs proches de la forêt développent rapidement des dépôts verts glissants en raison de l'ombre et de l'humidité, exigeant un traitement anti-mousse curatif et préventif.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings proches de la forêt développent-ils autant de mousses ?",
          answer: `<p>L'ombre et l'humidité générées par la proximité de la Forêt de Notre-Dame créent un environnement idéal pour le développement biologique rapide. Les parkings semi-enterrés ou mal ventilés des quartiers résidentiels (Bouquet, Ermitage) présentent des sols en béton poreux qui retiennent l'humidité et favorisent la prolifération de mousses vertes glissantes sur les rampes. Nous appliquons un traitement anti-mousse curatif avec temps de contact prolongé, puis un brossage vigoureux pour éliminer les organismes. Un traitement préventif après séchage ralentit la recolonisation pendant 12 à 18 mois.</p>`,
        },
        {
          question:
            "Les parkings des immeubles proches de la Francilienne nécessitent-ils un traitement différent ?",
          answer: `<p>Oui, absolument. Les parkings des copropriétés bordant la Francilienne et la RN4 accumulent principalement une pollution routière (micro-particules de pneus, suies d'échappement, résidus de freinage) nécessitant un dégraissant renforcé et de l'eau chaude (60-70°C) pour émulsionner ces dépôts grisâtres tenaces. À l'inverse, les parkings des quartiers résidentiels forestiers (Bouquet, Ermitage) nécessitent surtout un traitement anti-mousse, un dégagement des débris végétaux massifs et un brossage vigoureux. Cette double expertise est indispensable dans une ville aux environnements aussi variés.</p>`,
        },
        {
          question:
            "Les feuilles mortes de la forêt peuvent-elles vraiment endommager les parkings ?",
          answer: `<p>Oui, les feuilles mortes transportées par les pneus se décomposent et forment une boue organique qui obstrue progressivement les siphons et caniveaux. Cette accumulation peut provoquer des refoulements et des stagnations d'eau lors des lavages ou des pluies. Les résidus végétaux créent aussi un environnement propice au développement de mousses. Un décrassage annuel en automne, après la chute massive des feuilles, élimine ces accumulations avant qu'elles ne causent des problèmes d'évacuation. C'est particulièrement important pour les parkings des quartiers résidentiels (Bouquet, Ermitage) directement exposés à la Forêt de Notre-Dame.</p>`,
        },
        {
          question:
            "Comment organisez-vous les interventions malgré l'étalement urbain de Pontault ?",
          answer: `<p>Nous planifions chaque intervention en tenant compte des distances importantes entre les quartiers, typiques de cet urbanisme pavillonnaire horizontal qui fait de Pontault-Combault la quatrième ville de Seine-et-Marne. Les trajets entre le Bouquet au nord et la Grenouillère au sud sont anticipés, et la barrière formée par la Francilienne est intégrée dans notre organisation. Le stationnement aisé en zone pavillonnaire (propriétés privées) facilite nos interventions, contrairement aux secteurs plus denses de la Gare et de l'Ocil où nous adaptons notre logistique.</p>`,
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
        "Le nettoyage professionnel des balcons et terrasses à Pontault-Combault redonne un espace extérieur utilisable et propre, libéré des salissures routières de la Francilienne et du verdissement lié à la Forêt de Notre-Dame.",

      whyUsBullets: [
        "Double expertise pollution routière et végétation : Dégraissant alcalin pour pollution de la Francilienne et de la RN4, traitement anti-mousse et détergent spécifique pour verdissement et dépôts végétaux de la Forêt de Notre-Dame.",
        "Méthodes adaptées aux typologies variées : Pression modérée pour meulières anciennes du quartier de la Gare, techniques standard pour terrasses en béton des pavillons, nettoyage des vérandas fréquentes dans les quartiers résidentiels.",
        "Organisation logistique pour urbanisme horizontal : Stationnement aisé en zone pavillonnaire (propriétés privées), planification tenant compte des distances importantes entre quartiers, adaptation aux petites copropriétés et maisons individuelles.",
      ],

      uniqueIntro: `<p>Les propriétaires pontellois-combalusiens finissent par renoncer à utiliser leur balcon ou terrasse, découragés par un encrassement qui varie radicalement selon le quartier dans cette ville pavillonnaire étalée. Les résidences bordant la Francilienne et la RN4 accumulent une poussière grisâtre tenace composée de micro-particules de pneus et de suies d'échappement qui se dépose sur les dalles, les garde-corps et les murets. Cette pellicule grasse colle aux surfaces en quelques semaines et résiste aux tentatives de nettoyage domestique. À l'inverse, dans les quartiers résidentiels verdoyants (Bouquet, Ermitage) proches de la Forêt de Notre-Dame, les terrasses et balcons subissent un verdissement rapide : mousses vertes qui colonisent les murets d'enceinte en béton, pollens massifs au printemps qui laissent une couche jaunâtre collante, feuilles mortes qui s'accumulent dans les angles en automne.</p>
<p class="mt-4">Après une saison, les espaces extérieurs deviennent négligés : dans les secteurs proches de la Francilienne, les terrasses des pavillons de la Grenouillère et des Pince-Vents présentent un sol terne uniformément gris, les garde-corps métalliques sont couverts d'une patine noire, l'eau de pluie forme des traînées sombres. Dans les quartiers forestiers comme le Bouquet et l'Ermitage, les murets se couvrent de mousses vertes glissantes, les joints noircissent, les dalles gardent des traces brunâtres de feuilles décomposées. On hésite à y installer une chaise ou à profiter de cet espace pourtant recherché dans l'habitat pavillonnaire. Les tentatives de nettoyage avec un balai-brosse et un seau donnent des résultats décevants : la poussière grasse de la pollution résiste, les mousses reviennent rapidement.</p>
<p class="mt-4">Un nettoyage professionnel adapté à chaque environnement change complètement la donne. Il dissout la pollution atmosphérique dans les secteurs exposés aux axes routiers, élimine les mousses et les dépôts végétaux dans les quartiers forestiers, et restitue l'aspect d'origine des surfaces partout. Les habitants des pavillons redécouvrent le plaisir d'utiliser leur terrasse, d'y prendre l'air ou d'y installer un salon de jardin. Cette remise en état valorise aussi la propriété en cas de mise en vente, critère important dans cette ville résidentielle recherchée de Seine-et-Marne.</p>`,

      uniqueDeepDive: `<h3>1. Préparation et identification des salissures par secteur</h3>
<p>Le technicien commence par protéger les portes-fenêtres, menuiseries et murs intérieurs avec des bâches étanches fixées au ruban adhésif. Les meubles de jardin, plantes en pot et objets sont déplacés ou protégés individuellement. Les gros débris sont ramassés manuellement : feuilles mortes massives et brindilles pour les quartiers résidentiels forestiers (Bouquet, Ermitage), poussières accumulées pour les secteurs proches de la Francilienne et de la RN4. Le technicien identifie ensuite le type d'encrassement selon la localisation : pollution grisâtre grasse pour les résidences bordant les axes routiers, mousses vertes et dépôts végétaux pour les propriétés proches de la Forêt de Notre-Dame.</p>
<h3>2. Nettoyage adapté au type de pollution</h3>
<p class="mt-4">Pour les balcons et terrasses des secteurs exposés à la pollution routière (Grenouillère, Pince-Vents, résidences bordant la Francilienne et la RN4), un dégraissant alcalin puissant dissout la pellicule grisâtre de micro-particules et de suies. Le brossage manuel décolle les dépôts incrustés dans les joints. Pour les terrasses des quartiers résidentiels forestiers (Bouquet, Ermitage), un traitement anti-mousse est appliqué sur les murets d'enceinte et les surfaces colonisées, suivi d'un détergent spécifique pour dissoudre les pollens collants et les résidus végétaux. Les surfaces sont ensuite rincées à pression contrôlée selon le support : pression modérée pour les meulières anciennes du quartier de la Gare, pression standard pour les terrasses en béton ou carrelage des pavillons. Les garde-corps, vitreries des vérandas fréquentes et murs mitoyens sont lavés à l'éponge ou au chiffon microfibre.</p>
<h3>3. Gestion de l'eau et conseils d'entretien différenciés</h3>
<p class="mt-4">L'eau de rinçage est dirigée vers les évacuations à l'aide d'une raclette et de chiffons absorbants, évitant toute coulure sur les façades des pavillons ou des petits immeubles. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition. Le technicien conseille un balayage hebdomadaire pour éliminer les feuilles avant qu'elles ne se décomposent (quartiers forestiers) ou la pollution avant qu'elle ne s'incruste (secteurs routiers). Un nettoyage professionnel annuel en automne après la chute des feuilles maintient la propreté dans les quartiers du Bouquet et de l'Ermitage, tandis qu'un nettoyage annuel au printemps suffit pour les secteurs exposés à la pollution routière. Un traitement anti-mousse préventif peut être appliqué après séchage sur les murets des zones forestières pour ralentir le verdissement pendant 12 à 18 mois.</p>`,

      specificChallenges: [
        "Pollution routière de la Francilienne et de la RN4 : Les balcons et terrasses bordant ces axes accumulent une pellicule grisâtre de micro-particules et de suies nécessitant un dégraissant puissant et un brossage énergique.",
        "Verdissement rapide lié à la Forêt de Notre-Dame : Les murets et terrasses des quartiers résidentiels (Bouquet, Ermitage) se couvrent rapidement de mousses favorisées par l'ombre et l'humidité forestière, nécessitant traitement anti-mousse curatif et préventif.",
        "Pollens massifs du printemps : Les terrasses des secteurs proches de la forêt accumulent des pollens qui forment une couche jaunâtre collante nécessitant un détergent spécifique et un rinçage méticuleux.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager les meulières anciennes du quartier de la Gare ?",
          answer: `<p>Non, si la pression est correctement ajustée. Pour les meulières du quartier historique de Pontault près de la gare, nous utilisons une pression modérée (80-100 bars) après application d'un anti-mousse ou d'un détergent qui fait le travail de dissolution. Un produit neutre (pH 7) évite toute altération. Cette méthode douce préserve l'intégrité des matériaux anciens avec joints poreux tout en éliminant efficacement les mousses favorisées par la proximité de la Forêt de Notre-Dame.</p>`,
        },
        {
          question:
            "Ma terrasse dans le Bouquet verdit en quelques mois, est-ce normal ?",
          answer: `<p>Oui, c'est lié à la proximité de la Forêt de Notre-Dame. L'ombre et l'humidité générées par la végétation dense créent un environnement idéal pour le développement rapide de mousses vertes sur les murets d'enceinte en béton et les surfaces poreuses. C'est un phénomène très courant dans les quartiers résidentiels verdoyants (Bouquet, Ermitage). Nous appliquons un traitement anti-mousse curatif lors du nettoyage, puis un traitement préventif après séchage qui ralentit le verdissement pendant 12 à 18 mois. Un balayage régulier limite aussi l'accumulation de débris organiques qui favorisent les mousses.</p>`,
        },
        {
          question:
            "Ma terrasse près de la Francilienne noircit en quelques semaines, comment limiter l'encrassement ?",
          answer: `<p>La pollution routière de la Francilienne et de la RN4 dépose quotidiennement des micro-particules de pneus et des suies d'échappement impossibles à éviter pour les résidences bordant ces axes. Nous recommandons un balayage hebdomadaire pour éliminer les dépôts avant qu'ils ne s'incrustent et ne deviennent une pellicule grasse collante, et un rinçage mensuel léger avec un jet d'eau. Un nettoyage professionnel annuel avec dégraissant permet de traiter les salissures tenaces. C'est la réalité de vivre près de ces voies de transit massif qui scindent la ville.</p>`,
        },
        {
          question:
            "Combien de temps avant de pouvoir réinstaller mes meubles de jardin et profiter de ma terrasse ?",
          answer: `<p>Le séchage complet intervient sous 2 à 4 heures selon l'exposition au soleil et la ventilation. Vous pouvez marcher sur la terrasse dès que les surfaces sont sèches au toucher, généralement en milieu d'après-midi si l'intervention a lieu le matin. Pour réinstaller le mobilier de jardin, attendez le séchage total des joints et des angles, soit environ une demi-journée. Cette rapidité permet de profiter rapidement de cet espace extérieur particulièrement recherché dans l'habitat pavillonnaire typique de Pontault-Combault, quatrième ville de Seine-et-Marne.</p>`,
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
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par les fientes de pigeons à Pontault-Combault éliminent les risques sanitaires et préservent les matériaux des pavillons et copropriétés dans un environnement résidentiel recherché.",

      whyUsBullets: [
        "Triple expertise sanitaire, matériaux et résidentielle : Protocole EPI complet pour sécurité des familles, maîtrise des méthodes pour meulières anciennes, terrasses de pavillons, vérandas fréquentes, murets d'enceinte typiques de l'habitat horizontal.",
        "Désinfection compatible avec environnement familial : Sélection rigoureuse de produits virucides/bactéricides homologués sans danger pour les enfants, compatibles avec les matériaux variés de l'habitat pavillonnaire, préservant l'intégrité après désinfection.",
        "Organisation pour ville pavillonnaire étalée : Stationnement aisé en zone pavillonnaire (propriétés privées), planification tenant compte des distances importantes entre quartiers, intervention discrète respectant le cadre résidentiel recherché.",
      ],

      uniqueIntro: `<p>Les propriétaires pontellois-combalusiens découvrent parfois avec stupeur l'ampleur de la contamination de leur balcon ou terrasse après une absence prolongée ou une période d'inutilisation. Les pigeons, attirés par la proximité de la Forêt de Notre-Dame qui offre une source alimentaire abondante, et par les nombreuses structures des pavillons (avancées de toit, corniches, vérandas fréquentes), colonisent rapidement les espaces extérieurs tranquilles de cette ville à urbanisme horizontal. Les quartiers résidentiels verdoyants (Bouquet, Ermitage) avec leur végétation dense offrent des sites de nidification attractifs, tandis que les collectifs de l'Ocil et les petits immeubles du quartier de la Gare présentent également des balcons propices à l'installation. Les fientes s'accumulent en couches épaisses sur les terrasses en béton ou carrelage, les murets d'enceinte, les garde-corps et les vérandas, formant une croûte durcie qui dégage une odeur insupportable.</p>
<p class="mt-4">Sans intervention rapide, la situation se dégrade dangereusement sur plusieurs plans dans cet environnement pavillonnaire recherché. L'acidité des fientes corrode les garde-corps métalliques des terrasses, attaque les joints des murets d'enceinte en béton qui bordent les propriétés, crée des taches brunâtres permanentes sur les carrelages et les pierres, et érode les structures des vérandas typiques des pavillons du Bouquet et de l'Ermitage. Pour les résidences proches de la forêt, l'humidité de l'ombre forestière maintient les fientes humides plus longtemps, accélérant leur action corrosive sur tous les matériaux. Les fientes sèches se transforment en poussière volatile qui pénètre l'intérieur par les baies vitrées des pavillons, contaminant les espaces de vie des maisons familiales.</p>
<p class="mt-4">Les occupants redoutent les risques sanitaires graves (cryptococcose, histoplasmose, salmonellose), particulièrement préoccupants dans cet environnement résidentiel où vivent de nombreuses familles avec enfants. Certains développent des symptômes respiratoires sans comprendre l'origine, les propriétaires s'inquiètent pour la santé de leurs proches. Les tentatives de nettoyage domestique aggravent triplement le problème : balayer à sec disperse les poussières pathogènes dans l'air et à l'intérieur des pavillons, utiliser une pression inadaptée endommage les matériaux (meulières anciennes du quartier de la Gare, terrasses en béton des pavillons), négliger la désinfection laisse des agents infectieux actifs qui menacent la santé familiale. Ce type de contamination nécessite un protocole professionnel strict triplement exigeant : équipements de protection intégrale pour la sécurité sanitaire, méthodes adaptées aux matériaux variés de l'habitat pavillonnaire, désinfection homologuée compatible avec les supports. Seule cette triple expertise garantit la récupération d'un balcon ou d'une terrasse propre, désinfecté et préservé, permettant aux familles de profiter à nouveau sereinement de leur espace extérieur dans cette quatrième ville résidentielle de Seine-et-Marne.</p>`,

      uniqueDeepDive: `<h3>1. Protection intégrale et confinement du chantier résidentiel</h3>
<p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de protection étanches. Ces équipements de protection individuelle sont obligatoires face aux pathogènes présents dans les fientes (salmonelles, cryptocoques, histoplasma, chlamydia psittaci). Des bâches étanches protègent les portes-fenêtres, baies vitrées, vérandas fréquentes et murs intérieurs, créant un confinement strict qui empêche toute dispersion vers l'intérieur du pavillon ou de l'appartement familial. Cette protection est particulièrement critique dans l'habitat pavillonnaire où les terrasses communiquent directement avec les espaces de vie. Les fientes sèches sont ensuite humidifiées abondamment au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules contaminées lors du ramassage manuel, point essentiel pour protéger les enfants et les familles résidant dans ces propriétés.</p>
<h3>2. Ramassage méthodique et nettoyage adapté aux supports pavillonnaires</h3>
<p class="mt-4">Les fientes, nids, plumes et débris organiques sont ramassés manuellement zone par zone à l'aide de pelles et racloirs, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour les déchets contaminés. Cette phase s'effectue méthodiquement pour éviter toute dispersion. Les surfaces sont ensuite nettoyées selon le type de support : pour les meulières anciennes du quartier de la Gare, nettoyage à pression modérée (80-100 bars) avec produit neutre pour préserver les joints poreux ; pour les terrasses en béton ou carrelage des pavillons, pression standard avec détergent adapté ; pour les murets d'enceinte colonisés par les mousses dans les secteurs forestiers, traitement combiné anti-mousse et désinfection ; pour les structures des vérandas fréquentes, méthode manuelle pour préserver les vitrages et les finitions. Le brossage manuel élimine la couche organique résiduelle avant rinçage contrôlé, point critique pour préserver l'intégrité des matériaux variés de l'habitat pavillonnaire.</p>
<h3>3. Désinfection virucide et recommandations préventives familiales</h3>
<p class="mt-4">Un produit désinfectant virucide et bactéricide homologué, sélectionné pour sa compatibilité avec les matériaux des pavillons (béton, carrelage, métal) et sans danger pour les familles, est appliqué sur l'ensemble de la terrasse ou du balcon : sol, murets d'enceinte, garde-corps, angles, murs, structures de vérandas. Le temps de contact réglementaire (10 à 15 minutes) est strictement respecté pour garantir la neutralisation des agents pathogènes. Après rinçage final à pression adaptée selon le support, l'espace extérieur est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité. Le technicien conseille d'inspecter régulièrement les points de nidification (avancées de toit des pavillons, corniches, structures de vérandas) et peut proposer la pose de solutions anti-pigeons (pics discrets, filets) adaptées à l'architecture pavillonnaire pour prévenir une recolonisation qui endommagerait de nouveau les matériaux et menacerait la santé des familles résidentes.</p>`,

      specificChallenges: [
        "Proximité de la Forêt de Notre-Dame attirant les pigeons : La végétation dense de la forêt offre une source alimentaire qui attire les pigeons vers les terrasses et balcons des quartiers résidentiels verdoyants (Bouquet, Ermitage), accélérant la colonisation.",
        "Structures pavillonnaires propices à la nidification : Les avancées de toit, corniches et vérandas fréquentes des pavillons offrent de nombreux points de nidification attractifs, facilitant l'installation des pigeons dans l'habitat horizontal typique de Pontault.",
        "Humidité forestière aggravant la corrosion : L'ombre et l'humidité des secteurs proches de la forêt maintiennent les fientes humides plus longtemps, accélérant leur action corrosive sur les murets d'enceinte, garde-corps et structures de vérandas.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un danger sanitaire réel dans un pavillon avec des enfants ?",
          answer: `<p>Oui, le danger est particulièrement préoccupant dans l'environnement familial. Les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer des infections respiratoires graves, des mycoses pulmonaires ou des troubles gastro-intestinaux, particulièrement dangereux pour les enfants dont le système immunitaire est en développement. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées dans les espaces de vie des pavillons où les terrasses communiquent directement avec l'intérieur. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition pour toute la famille. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires.</p>`,
        },
        {
          question:
            "Le nettoyage peut-il endommager les matériaux de ma terrasse ou de ma véranda ?",
          answer: `<p>Non, si le protocole est rigoureusement adapté aux supports. Pour les meulières anciennes du quartier de la Gare, nous utilisons une pression modérée (80-100 bars) avec produit neutre pour préserver les joints poreux déjà fragilisés par l'acidité des fientes. Pour les terrasses en béton ou carrelage des pavillons, nous ajustons la pression selon l'état du support. Pour les structures des vérandas fréquentes dans les quartiers du Bouquet et de l'Ermitage, nous utilisons des méthodes manuelles pour préserver les vitrages et les finitions. Les produits désinfectants sont sélectionnés pour leur compatibilité avec tous ces matériaux. Cette expertise technique est indispensable pour l'habitat pavillonnaire varié de Pontault.</p>`,
        },
        {
          question:
            "Les fientes ont-elles déjà causé des dégâts irréversibles sur ma terrasse ou mes murets ?",
          answer: `<p>Cela dépend de l'ancienneté de la contamination. Sur les garde-corps métalliques des terrasses, l'acidité provoque une corrosion profonde qui altère les finitions et nécessite souvent un traitement antirouille ou un remplacement. Sur les murets d'enceinte en béton typiques des pavillons, elle érode la surface et fragilise les joints. Sur les carrelages des terrasses, elle crée des taches brunâtres qui pénètrent profondément. Sur les structures des vérandas, elle attaque les finitions métalliques et peut endommager les joints d'étanchéité. L'humidité des secteurs forestiers (Bouquet, Ermitage) aggrave tous ces processus. Une intervention rapide (premières semaines) limite considérablement les dégâts, mais les contaminations anciennes (plusieurs mois) laissent souvent des dommages permanents nécessitant des réparations coûteuses.</p>`,
        },
        {
          question:
            "Comment éviter que les pigeons ne reviennent coloniser ma terrasse ou mon balcon ?",
          answer: `<p>Nous proposons la pose de solutions anti-pigeons adaptées à l'architecture pavillonnaire : pics discrets en acier inoxydable sur les avancées de toit et les corniches des pavillons, filets transparents pour les vérandas fréquentes dans les quartiers résidentiels, répulsifs visuels pour les murets d'enceinte. Ces dispositifs sont installés en respectant l'esthétique des maisons individuelles et le cadre résidentiel recherché de Pontault. L'inspection régulière des points de nidification et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive. Cette prévention est particulièrement importante dans cette ville pavillonnaire où la proximité de la Forêt de Notre-Dame attire constamment les pigeons vers les zones résidentielles, menaçant la santé des familles et l'intégrité des propriétés.</p>`,
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
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Pontault-Combault redonne confort et fraîcheur aux intérieurs familiaux, éliminant les salissures accumulées dans l'habitat pavillonnaire typique de cette ville résidentielle.",

      whyUsBullets: [
        "Connaissance de l'environnement pavillonnaire familial : Intervention régulière dans les maisons individuelles du Bouquet, de l'Ermitage et des autres quartiers résidentiels, avec compréhension des contraintes d'usage familial et des facteurs de salissure variés.",
        "Protocole adapté à l'usage familial intensif : Injection-extraction à température ajustée pour textiles sollicités quotidiennement, produits hypoallergéniques sans danger pour enfants et animaux de compagnie, extraction maximale pour séchage rapide compatible avec la vie familiale.",
        "Organisation souple à domicile : Intervention en journée ou week-end selon les disponibilités des familles, durée maîtrisée (1h30 à 3h), stationnement aisé en zone pavillonnaire (propriétés privées), respect du cadre résidentiel calme.",
      ],

      uniqueIntro: `<p>Dans les pavillons et appartements pontellois-combalusiens, les textiles d'ameublement font partie intégrante du quotidien des familles qui ont choisi cette quatrième ville de Seine-et-Marne pour sa qualité de vie résidentielle. Les enfants s'installent sur le canapé pour regarder la télévision après l'école, les familles reçoivent régulièrement des proches dans les salons spacieux des maisons individuelles, les animaux de compagnie circulent librement entre les pièces. Le tapis du séjour accumule les miettes des goûters, les traces de pas des visiteurs, la poussière transportée depuis les terrasses et les jardins. Les résidences des quartiers verdoyants (Bouquet, Ermitage) proches de la Forêt de Notre-Dame, malgré leur cadre recherché, n'échappent pas à cet encrassement progressif aggravé par les pollens massifs du printemps qui pénètrent par les fenêtres ouvertes.</p>
<p class="mt-4">Avec le temps, les textiles perdent leur aspect d'origine dans ces intérieurs familiaux actifs. Les canapés présentent des auréoles sur les accoudoirs où toute la famille s'appuie quotidiennement, les tapis ternissent dans les zones de passage entre le salon et la terrasse, les matelas accumulent transpiration et squames. Les pavillons des secteurs proches de la Francilienne et de la RN4 voient leurs textiles se colorer progressivement d'une teinte grisâtre due aux micro-particules de pollution qui pénètrent par les fenêtres. Les familles constatent parfois des symptômes légers sans en comprendre l'origine : éternuements matinaux, léger inconfort respiratoire, impression de poussière persistante malgré l'aspirateur hebdomadaire. Les taches visibles s'ajoutent au problème invisible : traces de boissons renversées lors des dîners entre amis, auréoles de nourriture, marques laissées par les enfants ou les animaux de compagnie.</p>
<p class="mt-4">Un nettoyage professionnel à domicile transforme cette situation quotidienne. Il extrait les salissures invisibles accumulées depuis l'emménagement dans le pavillon, élimine les acariens qui se sont installés, ravive les couleurs d'origine et redonne aux textiles leur confort initial. Les familles retrouvent le plaisir de profiter pleinement de leur intérieur, sans gêne pour recevoir des invités ou inquiétude pour la santé des enfants. Cette remise en état préserve aussi l'investissement réalisé dans un mobilier de qualité, prolongeant sa durée de vie dans les maisons familiales de cette ville résidentielle recherchée.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic des textiles et identification de l'usage familial</h3>
<p>Le technicien examine chaque élément à traiter : type de tissu (coton et lin dans les pavillons de standing du Bouquet, tissus résistants dans les maisons familiales actives), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles (boissons, nourriture, traces d'animaux de compagnie) et interroge les occupants sur l'usage quotidien : présence d'enfants typique de cette ville résidentielle familiale, fréquence de réception d'invités dans les salons spacieux des pavillons, animaux de compagnie, proximité de la Forêt de Notre-Dame générant des pollens ou exposition à la pollution de la Francilienne. Cette analyse permet de sélectionner le produit adapté et d'ajuster la température de l'eau (60-65°C pour un nettoyage efficace sans agresser les fibres) et la puissance d'aspiration. Les textiles des pavillons, souvent de qualité supérieure en raison du standing résidentiel, nécessitent une attention particulière pour préserver leurs caractéristiques d'origine.</p>
<h3>2. Pré-traitement ciblé et injection-extraction adaptée</h3>
<p class="mt-4">Les taches tenaces reçoivent un pré-traitement spécifique avant le nettoyage complet : détachant enzymatique pour les accidents d'enfants ou d'animaux de compagnie fréquents dans les maisons familiales, dégraissant pour les résidus alimentaires des repas et goûters, neutralisant d'odeurs pour les zones imprégnées. Après un temps de pose, la machine d'injection-extraction pulvérise un mélange d'eau chaude et de détergent hypoallergénique au cœur des fibres, délogeant particules de poussière, acariens et salissures incrustées. L'aspiration immédiate retire l'eau sale avant saturation du support. Le technicien effectue plusieurs passages sur les zones très sollicitées dans l'usage familial quotidien : accoudoirs du canapé où s'appuient parents et enfants, devant du tapis dans les zones de circulation entre le salon et la terrasse du pavillon, zones centrales du matelas.</p>
<h3>3. Séchage accéléré et conseils d'entretien familial pratique</h3>
<p class="mt-4">L'extraction puissante limite l'humidité résiduelle dans les rembourrages. Le séchage complet intervient sous 4 à 6 heures grâce à la bonne ventilation naturelle des pavillons bien conçus. Le technicien conseille d'aérer la pièce en ouvrant les fenêtres, mais en évitant les heures de forte pollution pour les maisons proches de la Francilienne, ou les périodes de pollinisation massive pour celles du Bouquet et de l'Ermitage proches de la forêt. Il recommande d'orienter un ventilateur vers les textiles traités si possible et d'attendre le séchage total avant réutilisation. Pour limiter l'encrassement rapide dans l'environnement familial actif, il conseille un aspirateur hebdomadaire pour éliminer les poussières avant qu'elles ne s'incrustent, l'utilisation de plaids protecteurs sur les zones de fort usage du canapé, et un nettoyage professionnel annuel ou bisannuel selon l'intensité d'usage et la présence d'enfants ou d'animaux de compagnie typiques de cette ville résidentielle.</p>`,

      specificChallenges: [
        "Usage familial intensif dans l'habitat pavillonnaire : Les textiles des maisons individuelles subissent une sollicitation quotidienne importante avec enfants et animaux de compagnie, générant taches et encrassement plus rapide nécessitant extraction renforcée.",
        "Pollens de la Forêt de Notre-Dame : Les logements des quartiers résidentiels (Bouquet, Ermitage) proches de la forêt accumulent au printemps des pollens massifs qui s'incrustent dans les canapés et tapis, nécessitant détergent spécifique et extraction renforcée.",
        "Pollution de la Francilienne dans certains secteurs : Les pavillons proches de la Francilienne et de la RN4 voient leurs textiles se colorer progressivement par les micro-particules de pollution qui pénètrent par les fenêtres, nécessitant dégraissant adapté.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il les taches courantes de la vie familiale avec enfants ?",
          answer: `<p>Oui, nous traitons quotidiennement les taches typiques des maisons familiales : boissons renversées, traces de nourriture, accidents d'enfants, marques d'animaux de compagnie. Le pré-traitement enzymatique dissout les matières organiques avant l'injection-extraction qui extrait les résidus en profondeur. Même les taches anciennes incrustées s'atténuent fortement, et les taches récentes disparaissent complètement dans la plupart des cas. Cette expertise des contraintes familiales est essentielle dans une ville résidentielle comme Pontault-Combault où les pavillons accueillent de nombreuses familles actives avec enfants.</p>`,
        },
        {
          question:
            "Mon canapé a seulement trois ans mais semble déjà usé avec deux enfants, est-ce normal ?",
          answer: `<p>Oui, absolument. Un canapé utilisé quotidiennement par une famille active avec enfants accumule en trois ans des milliers d'heures d'usage intensif : transpiration, squames, miettes, poussières, traces de jeux, acariens qui prolifèrent dans les rembourrages. Les textiles de qualité des pavillons méritent d'être entretenus pour préserver leur aspect et leur durée de vie. Un nettoyage bisannuel pour un usage familial très intensif, ou annuel pour un usage modéré, maintient le confort et l'hygiène. C'est particulièrement important dans l'habitat pavillonnaire de Pontault où les familles investissent dans un mobilier de qualité adapté aux grands espaces des maisons individuelles.</p>`,
        },
        {
          question:
            "Combien de temps avant que mes enfants puissent réutiliser le canapé après le nettoyage ?",
          answer: `<p>Le séchage complet intervient sous 4 à 6 heures grâce à l'extraction puissante et à la bonne ventilation des pavillons. Vos enfants peuvent s'asseoir légèrement sur les accoudoirs dès 2h, mais il vaut mieux éviter qu'ils s'installent complètement avant séchage total pour ne pas écraser les fibres humides. Aérez le séjour en ouvrant les fenêtres, orientez un ventilateur si possible. Pour un usage en soirée, planifiez l'intervention le matin. Cette rapidité permet de minimiser la gêne pour la vie familiale quotidienne dans les maisons actives de cette ville résidentielle.</p>`,
        },
        {
          question:
            "Dois-je préparer quelque chose avant votre arrivée dans mon pavillon ?",
          answer: `<p>Oui, retirez les coussins amovibles du canapé, dégagez les objets posés sur le tapis (jouets des enfants, magazines, télécommandes, plantes en pot) et si vous avez des animaux de compagnie, placez-les dans une autre pièce pendant l'intervention. Le stationnement est aisé en zone pavillonnaire (propriétés privées), facilitant notre accès. Les meubles légers seront déplacés par le technicien si nécessaire. Cette simplicité de préparation est appréciée dans les familles actives qui jonglent entre vie professionnelle, enfants et activités dans cette quatrième ville résidentielle de Seine-et-Marne.</p>`,
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
