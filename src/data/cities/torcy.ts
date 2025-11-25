import type { City } from '~/types/geo';

const torcy: City = {
  name: 'Torcy',
  slug: 'torcy',
  postalCodes: ['77200'],

  customDescription:
    'Ville dynamique de l’Est parisien, Torcy mêle immeubles collectifs, bureaux et zones commerciales nécessitant un entretien régulier et adapté.',

  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne',
  },

  districts: [
    "L'Arche Guédon",
    'Bel-Air',
    'Le Clos des Vignes',
    'Les Charmes',
    'Centre-ville historique',
    'Bois de la Fontaine',
  ],

nearbyCities: [
    'vaires-sur-marne',
    'chelles',
    'gournay-sur-marne',
    'noisy-le-grand',
    'lagny-sur-marne'
  ],


  ctaOverride: '',

  landmarks: [
    'Gare RER A Torcy',
    'Centre commercial Bay 2',
    'Base de loisirs de Vaires-Torcy',
    'Hôtel de Ville de Torcy',
    'Cinéma CGR Torcy',
  ],

  specificChallenges: [
    "La proximité immédiate de l'A4 et de la N104 génère un dépôt de particules fines sur les balcons, façades et sols extérieurs exposés.",
    "Les immeubles de l'Arche Guédon et des quartiers denses présentent des revêtements sensibles qui supportent mal les pressions trop élevées.",
    'Les abords du RER et du centre commercial Bay 2 subissent un trafic piéton intense qui encrasse rapidement les sols et moquettes.',
    'Les résidences proches de la base de loisirs de Vaires-Torcy sont exposées aux pollens saisonniers et dépôts végétaux sur les balcons.',
    'La densité de construction dans certains quartiers récents impose du matériel compact et une logistique discrète pour limiter les nuisances.',
  ],

  // Laisser vide : les vrais avis viennent du widget Google Reviews
  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },

faq: [
  {
    question: "Comment se déroule une intervention de nettoyage à Torcy ?",
    answer: `À Torcy, nous commençons par repérer les accès (RER, parkings souterrains, ascenseurs, bâtiments des ZAC) et par valider avec l’occupant ou le gestionnaire les zones à traiter. Les protections sont installées avant de réaliser le nettoyage prévu. Un contrôle final avec le client permet de valider le résultat.`
  },
  {
    question: "Dois-je préparer quelque chose avant votre venue à Torcy ?",
    answer: `Rien d’obligatoire. Sur les balcons, déplacer quelques objets aide à travailler dans les angles. Pour les moquettes ou tapis, dégager légèrement le sol est un plus. Dans les parkings des résidences de Torcy, prévenir les résidents lorsqu’une zone doit être libérée peut aider, mais nous pouvons travailler par sections si nécessaire.`
  },
  {
    question: "Pouvez-vous intervenir en horaires élargis à Torcy ?",
    answer: `Oui. En plus des créneaux habituels en semaine, nous pouvons intervenir en soirée ou le samedi pour les parkings, halls, bureaux ou logements où la gêne doit être limitée. Les horaires sont adaptés aux contraintes du site ou du client.`
  }
],



  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `<h3>Nettoyage de moquettes à Torcy</h3>
<p>À Torcy, de nombreuses moquettes se trouvent dans les bureaux, cabinets médicaux, halls d’immeubles et circulations des résidences proches de Bay 2 ou du RER. Ces surfaces sont soumises à un passage important, aux remontées d’humidité des parkings et aux salissures liées aux trajets quotidiens.</p>
<p>Notre objectif est de désincruster les fibres, réduire les taches visibles et améliorer le confort visuel et sanitaire des occupants. Nous adaptons systématiquement le protocole au type de revêtement et à l’usage des lieux, en tenant compte des contraintes d’accès et des horaires de fréquentation.</p>`,
      uniqueDeepDive: `<p>Sur Torcy, nous commençons toujours par un repérage des zones les plus sollicitées : entrée d’immeuble, sas, couloirs menant aux ascenseurs ou aux bureaux. Une aspiration en profondeur est réalisée avec une brosse mécanique pour extraire les poussières fines, puis nous appliquons un prétraitement ciblé sur les taches (boisson, graisse, empreintes).</p>
<p>Le nettoyage principal se fait soit en injection-extraction, soit en méthode basse humidité lorsque la moquette supporte mal l’eau ou que les délais de séchage doivent être très courts. Nous ajustons les produits utilisés pour limiter les résidus et éviter les re-salissages rapides.</p>
<p>En fin d’intervention, nous vérifions les circulations principales et pouvons, si besoin, accélérer le séchage sur certaines zones à l’aide de turbines. L’ensemble du process est pensé pour que les résidents ou collaborateurs puissent retrouver un sol praticable dans les meilleurs délais.</p>`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `<h3>Entretien des parkings à Torcy</h3>
<p>Les parkings souterrains et aériens des résidences de Torcy, ainsi que ceux des immeubles de bureaux près de l’A4 ou de Bay 2, sont soumis à un encrassement constant : poussières, traces d’huile, gomme de pneus et petits déchets.</p>
<p>Un entretien régulier permet de limiter les sols glissants, de conserver un environnement plus sain et d’améliorer l’image globale de la résidence ou du site professionnel. Nos interventions sont planifiées pour réduire au minimum la gêne pour les usagers tout en assurant un nettoyage efficace des zones de circulation et de stationnement.</p>`,
      uniqueDeepDive: `<p>Nos prestations sur les parkings de Torcy débutent par un balayage manuel ou mécanique afin de retirer les graviers, feuilles et petits déchets. Nous appliquons ensuite un dégraissant adapté sur les emplacements les plus marqués (fuites d’huile, zones de freinage) et laissons agir le temps nécessaire.</p>
<p>Selon la configuration, nous utilisons une autolaveuse, une monobrosse ou un nettoyage haute pression maîtrisé pour décoller les salissures. Les rampes d’accès et zones de manœuvre sont traitées avec une attention particulière pour limiter les risques de glissade.</p>
<p>Le travail est organisé par zones pour maintenir des places disponibles. Lorsque c’est nécessaire, nous pouvons intervenir tôt le matin ou en journée basse fréquentation, en coordination avec le syndic ou le gestionnaire du site.</p>`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `<h3>Nettoyage de balcons et terrasses à Torcy</h3>
<p>Les balcons des appartements de Torcy, qu’ils soient orientés vers les axes routiers, les espaces verts ou la base de loisirs, se salissent vite : poussières, pollens, traces de pots de fleurs, dépôts noirs liés au trafic.</p>
<p>Un nettoyage professionnel permet de remettre ces surfaces en état tout en respectant les revêtements (dalles, carrelage, béton) et les contraintes de voisinage. Nous intervenons aussi bien sur des balcons individuels que sur des terrasses plus larges en étage.</p>`,
      uniqueDeepDive: `<p>Avant toute intervention, nous vérifions le type de sol, l’évacuation de l’eau et la sensibilité des joints. Sur Torcy, les balcons sont souvent entourés d’autres logements : nous privilégions donc des pressions maîtrisées pour éviter les projections chez les voisins ou sur les façades.</p>
<p>Le protocole comprend en général un balayage ou un décapage léger pour retirer les éléments en surface, puis l’application d’un produit nettoyant ou dégraissant selon le type de salissure. Le rinçage se fait de manière contrôlée, en veillant à ce que l’eau ne s’écoule pas de façon anarchique.</p>
<p>Pour les balcons très exposés à la pollution ou aux poussières de circulation, nous pouvons programmer un entretien périodique afin d’éviter que les dépôts ne s’incrustent durablement dans les revêtements.</p>`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `<h3>Décontamination de balcons souillés par les fientes à Torcy</h3>
<p>Certains immeubles de Torcy, notamment ceux proches des espaces verts ou des plans d’eau, sont régulièrement touchés par les fientes de pigeons. Ces dépôts sont à la fois inesthétiques et potentiellement problématiques pour l’hygiène.</p>
<p>Ce type d’intervention nécessite un protocole spécifique pour protéger les occupants et remettre le balcon en état sans détériorer les sols ni les joints.</p>`,
      uniqueDeepDive: `<p>Lors d’une intervention sur des balcons souillés par les fientes, nous commençons par sécuriser la zone et nous équiper de protections adaptées (gants, masque, combinaison selon la situation). Les résidus sont retirés soigneusement pour éviter de les remettre en suspension dans l’air.</p>
<p>Un produit désinfectant est ensuite appliqué sur les surfaces touchées, en respectant le temps de contact recommandé. Nous procédons ensuite à un nettoyage approfondi du sol, des plinthes et, si nécessaire, des garde-corps.</p>
<p>Lorsque c’est pertinent, nous pouvons proposer des solutions préventives (conseils, réflexion sur des dispositifs anti-pigeons) en coordination avec le syndic ou le propriétaire, afin de limiter le retour du problème dans le temps.</p>`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `<h3>Nettoyage de canapés, tapis et matelas à Torcy</h3>
<p>Dans les logements de Torcy, les canapés, tapis et matelas subissent au quotidien les traces de vie : taches, poussières, poils d’animaux, odeurs. Dans les résidences proches des grands axes ou des zones commerciales, les poussières extérieures s’ajoutent aux salissures intérieures.</p>
<p>Un nettoyage professionnel permet de redonner une seconde vie à ces textiles, d’améliorer le confort des occupants et de réduire la charge allergène dans le logement.</p>`,
      uniqueDeepDive: `<p>Nous intervenons directement au domicile, après un échange rapide sur les priorités (tapis du salon, canapé principal, matelas, etc.). Les textiles sont d’abord aspirés avec une machine équipée d’un filtre performant, puis nous traitons les taches avec des produits adaptés au type de fibre et à l’origine de la trace.</p>
<p>Le cœur de l’intervention repose sur un nettoyage par injection-extraction ou une méthode plus sèche lorsque le support l’exige. L’objectif est d’extraire un maximum de salissures sans saturer les mousses ni laisser de résidus de produit.</p>
<p>En fin de prestation, nous donnons quelques conseils simples pour prolonger le résultat (aération, fréquence d’aspiration, gestes à éviter en cas de nouvelle tache). Les temps de séchage sont annoncés clairement pour que vous puissiez organiser la remise en service de votre canapé ou de vos tapis.</p>`,
    },
  ],
};

export default torcy;
