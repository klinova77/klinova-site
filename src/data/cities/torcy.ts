import type { City } from '~/types/geo';

const torcy: City = {
  name: 'Torcy',
  slug: 'torcy',
  postalCodes: ['77200'],
  customDescription:
    'Située à l’est de Paris, Torcy est une ville dynamique où se côtoient habitats collectifs, espaces professionnels et zones commerciales. Ces environnements, souvent très fréquentés, nécessitent un entretien régulier et adapté pour préserver leur propreté et leur fonctionnalité.',
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
    'neuilly-sur-marne',
    'chelles',
    'gournay-sur-marne',
    'noisy-le-grand',
    'lagny-sur-marne',
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
    'La proximité des axes routiers (A4, N104) expose les façades, balcons et sols extérieurs à un dépôt régulier de particules fines, nécessitant un nettoyage adapté.',
    'Les immeubles de l’Arche Guédon et des quartiers denses abritent des revêtements sensibles, qui demandent des méthodes de nettoyage à basse pression pour éviter toute détérioration.',
    'Les abords de la gare RER et du centre commercial Bay 2, très fréquentés, voient leurs sols et moquettes s’encrasser rapidement, ce qui impose un entretien régulier.',
    'Les résidences proches de la base de loisirs de Vaires-Torcy sont régulièrement exposées aux pollens et dépôts végétaux, notamment sur les balcons et terrasses.',
    'La densité urbaine de certains quartiers récents nécessite l’utilisation de matériel compact et une organisation discrète, afin de limiter les nuisances pour les résidents et les usagers.',
  ],
  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },


 faq: [
  {
    question: 'Comment se déroule une intervention de nettoyage à Torcy ?',
    answer:
      'Chaque intervention commence par une reconnaissance des accès (parkings, ascenseurs, organisation des ZAC…) afin de planifier l’intervention de façon optimale. Nous validons ensuite les zones à traiter avec l’occupant ou le gestionnaire, installons les protections nécessaires, puis appliquons un protocole adapté. Un contrôle final permet de s’assurer que tout est conforme.',
  },
  {
    question: 'Dois-je préparer quelque chose avant votre venue à Torcy ?',
    answer:
      'Aucune préparation n’est indispensable. Si possible, il est utile de dégager les accès, nous transmettre les consignes d’entrée, ou prévenir les résidents concernés. Nous nous adaptons aux configurations sur place.',
  },
  {
    question: 'Pouvez-vous intervenir en horaires élargis à Torcy ?',
    answer:
      'Oui. Nous proposons des créneaux tôt le matin, en soirée ou le week-end, en particulier lorsque cela facilite la circulation ou réduit les nuisances. Les horaires sont définis en fonction des contraintes du site et de vos disponibilités.',
  },
],




  services: [
    {
      serviceKey: 'moquettes',
      heroDescription:
        'À Torcy, nous nettoyons les moquettes des logements, bureaux, halls et parties communes pour éliminer les taches incrustées et les salissures.',
      uniqueIntro: `<h3>Nettoyage de moquettes à Torcy</h3>
<p>À Torcy, les moquettes équipent de nombreux bureaux, cabinets médicaux, halls d’immeubles et parties communes de copropriété, notamment autour de Bay 2 et de la gare RER. Ces surfaces, soumises à un passage intensif, accumulent poussières, taches et salissures diverses.</p>
<p>Notre intervention vise à désincruster les fibres, réduire les traces visibles et améliorer le confort des occupants. Chaque protocole est adapté au type de revêtement et à l’usage des lieux, en tenant compte des contraintes d’accès et des plannings de fréquentation.</p>`,
      uniqueDeepDive: `<p>Sur Torcy, nous commençons par repérer les zones les plus sollicitées : entrées d’immeuble, sas, couloirs menant aux ascenseurs ou aux bureaux. Une aspiration en profondeur, réalisée avec une brosse mécanique, permet d’extraire les poussières fines. Nous appliquons ensuite un prétraitement ciblé sur les taches (boissons, graisses, empreintes).</p>
<p>Le nettoyage principal s’effectue soit par injection-extraction, soit par une méthode basse humidité, selon la sensibilité de la moquette et les délais de séchage imposés. Les produits utilisés sont choisis pour limiter les résidus et éviter un re-salissage rapide.</p>
<p>En fin d’intervention, nous vérifions les voies de circulation principales et pouvons accélérer le séchage sur certaines zones à l’aide de turbines, afin que les résidents ou collaborateurs retrouvent un sol praticable dans les meilleurs délais.</p>`,
    },
    {
      serviceKey: 'parkings',
      heroDescription:
        'À Torcy, nous entretenons les parkings souterrains et aériens pour éliminer poussières, traces d’huile et sols glissants, dans les résidences et les immeubles de bureaux.',
      uniqueIntro: `<h3>Entretien des parkings à Torcy</h3>
<p>Les parkings souterrains et aériens des résidences de Torcy, ainsi que ceux des immeubles de bureaux situés près de l’A4 ou de Bay 2, sont constamment exposés à l’encrassement : poussières, traces d’huile, gomme de pneus et petits déchets s’y accumulent.</p>
<p>Un entretien régulier permet de réduire les risques de glissade, de maintenir un environnement sain et de préserver l’image de la résidence ou du site professionnel. Nos interventions sont organisées pour minimiser la gêne pour les usagers, tout en garantissant un nettoyage efficace des zones de circulation et de stationnement.</p>`,
      uniqueDeepDive: `<p>Nos prestations dans les parkings de Torcy débutent par un balayage manuel ou mécanique, afin d’éliminer graviers, feuilles et petits déchets. Nous appliquons ensuite un dégraissant adapté sur les emplacements les plus marqués (fuites d’huile, zones de freinage), en respectant le temps de contact nécessaire.</p>
<p>Selon la configuration, nous utilisons une autolaveuse, une monobrosse ou un nettoyage haute pression maîtrisé pour décoller les salissures. Les rampes d’accès et les zones de manœuvre font l’objet d’une attention particulière pour limiter les risques de glissade.</p>
<p>Le travail est organisé par sections pour maintenir des places disponibles. Si besoin, nous intervenons tôt le matin ou en période de faible fréquentation, en coordination avec le syndic ou le gestionnaire du site.</p>`,
    },
    {
      serviceKey: 'balcons',
      heroDescription:
        'À Torcy, nous nettoyons balcons et terrasses encrassés par la pollution, les dépôts verts et les salissures quotidiennes, pour leur redonner un aspect propre et soigné.',
      uniqueIntro: `<h3>Nettoyage de balcons et terrasses à Torcy</h3>
<p>Les balcons des logements de Torcy, qu’ils donnent sur les axes routiers, les espaces verts ou la base de loisirs, s’encrassent rapidement : poussières, pollens, traces de pots de fleurs et dépôts noirs liés à la circulation s’y accumulent.</p>
<p>Un nettoyage professionnel permet de restaurer ces surfaces tout en respectant les revêtements (dalles, carrelage, béton) et les contraintes de voisinage. Nous intervenons aussi bien sur des balcons individuels que sur des terrasses plus larges en étage.</p>`,
      uniqueDeepDive: `<p>Avant toute intervention, nous vérifions la nature du sol, l’évacuation de l’eau et la sensibilité des joints. À Torcy, où les balcons sont souvent mitoyens, nous privilégions des pressions maîtrisées pour éviter les projections chez les voisins ou sur les façades.</p>
<p>Le protocole comprend généralement un balayage ou un décapage léger pour retirer les éléments en surface, suivi de l’application d’un produit nettoyant ou dégraissant adapté au type de salissure. Le rinçage est réalisé de manière contrôlée, en veillant à ce que l’eau ne s’écoule pas de façon anarchique.</p>
<p>Pour les balcons très exposés à la pollution ou aux poussières de circulation, nous pouvons proposer un entretien périodique afin d’éviter que les dépôts ne s’incrustent durablement dans les revêtements.</p>`,
    },
    {
      serviceKey: 'balcons-fientes',
      heroDescription:
        'À Torcy, nous décontaminons les balcons souillés par les fientes d’oiseaux, en appliquant un protocole de nettoyage et de désinfection rigoureux.',
      uniqueIntro: `<h3>Décontamination de balcons souillés par les fientes à Torcy</h3>
<p>Certains immeubles de Torcy, notamment ceux situés à proximité des espaces verts ou des plans d’eau, sont régulièrement touchés par les fientes de pigeons. Ces dépôts, en plus d’être inesthétiques, peuvent poser des problèmes d’hygiène.</p>
<p>Ce type d’intervention exige un protocole spécifique pour protéger les occupants et restaurer le balcon dans les règles de l’art, sans altérer les sols ni les joints.</p>`,
      uniqueDeepDive: `<p>Lors d’une intervention sur des balcons souillés par les fientes, nous commençons par sécuriser la zone et nous équipons de protections adaptées (gants, masque, combinaison si nécessaire). Les résidus sont retirés avec soin pour éviter toute remise en suspension dans l’air.</p>
<p>Un produit désinfectant est ensuite appliqué sur les surfaces touchées, en respectant le temps de contact recommandé. Nous procédons alors à un nettoyage approfondi du sol, des plinthes et, si besoin, des garde-corps.</p>
<p>Lorsque cela est pertinent, nous pouvons suggérer des solutions préventives (conseils, réflexion sur des dispositifs anti-pigeons) en coordination avec le syndic ou le propriétaire, afin de limiter la récidive du problème.</p>`,
    },
    {
      serviceKey: 'canapes-tapis',
      heroDescription:
        'À Torcy, nous nettoyons canapés, tapis et matelas à domicile pour éliminer taches, odeurs et allergènes, et redonner une seconde vie à vos textiles.',
      uniqueIntro: `<h3>Nettoyage de canapés, tapis et matelas à Torcy</h3>
<p>Dans les logements de Torcy, canapés, tapis et matelas subissent quotidiennement les traces de la vie courante : taches, poussières, poils d’animaux, odeurs. Dans les résidences proches des grands axes ou des zones commerciales, les poussières extérieures s’ajoutent aux salissures intérieures.</p>
<p>Un nettoyage professionnel permet de redonner une seconde vie à ces textiles, d’améliorer le confort des occupants et de réduire la présence d’allergènes dans le logement.</p>`,
      uniqueDeepDive: `<p>Nous intervenons directement à votre domicile, après un échange rapide sur les priorités (tapis du salon, canapé principal, matelas, etc.). Les textiles sont d’abord aspirés avec une machine équipée d’un filtre performant, puis nous traitons les taches avec des produits adaptés au type de fibre et à l’origine de la salissure.</p>
<p>Le cœur de l’intervention repose sur un nettoyage par injection-extraction ou une méthode plus sèche, selon les caractéristiques du support. L’objectif est d’extraire un maximum de salissures sans saturer les mousses ni laisser de résidus de produit.</p>
<p>En fin de prestation, nous vous donnons quelques conseils simples pour prolonger le résultat (aération, fréquence d’aspiration, gestes à éviter en cas de nouvelle tache). Les temps de séchage vous sont clairement indiqués pour que vous puissiez organiser la remise en service de votre canapé ou de vos tapis.</p>`,
    },
  ],
};

export default torcy;
