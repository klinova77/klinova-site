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




import type { City } from "~/types/geo";

const city: City = {
  name: "Torcy",
  slug: "torcy",
  postalCodes: ["77200"],

  customDescription: "Torcy, sous-préfecture et cœur du Val Maubuée, bénéficie d'une desserte RER A performante et d'un accès direct aux autoroutes A4 et A104. L'entretien des halls d'immeuble, des parkings de résidence et des balcons dans les quartiers comme l'Arche-Guédon ou le Vieux Torcy est essentiel pour préserver la qualité de vie de ses habitants et professionnels.",

  hubIntro: `<p>À Torcy, la gestion de la propreté des immeubles et espaces professionnels est un enjeu quotidien pour les syndics et gestionnaires. KLINOVA s’impose comme votre partenaire de proximité, grâce à une connaissance fine des typologies immobilières locales et des contraintes d’accès spécifiques à la commune.</p>
<p>Notre approche se base sur un diagnostic terrain et des protocoles adaptés, assurant une maintenance rigoureuse et prévisible. Nous vous accompagnons sur la durée pour maintenir la valeur et l'hygiène de votre patrimoine immobilier.</p>
<ul>
  <li>Audit et conseil technique : analyse gratuite sur site de vos moquettes, parkings ou balcons, avec préconisations d'entretien adaptées aux contraintes locales (accès, horaires, type de fréquentation).</li>
  <li>Méthodes protocolisées : application stricte de nos procédures d'intervention, du balisage à la gestion des déchets, garantissant traçabilité et résultats durables pour chaque prestation.</li>
  <li>Reporting et flexibilité : remise systématique d'un compte-rendu d'intervention et organisation sur mesure pour s'adapter aux plannings des résidents et des conseils syndicaux.</li>
  <li>Expertise multi-services : une équipe formée intervient aussi bien sur les parties communes que chez les particuliers, offrant une solution globale et cohérente pour l'ensemble d'une résidence.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrasement accéléré des halls et moquettes d'immeubles dû à la forte densité de population et à la proximité de la gare RER de Torcy, point de passage quotidien majeur.",
    "Accumulation de fientes de pigeons et de dépôts verts (mousses, lichens) sur les balcons et terrasses, notamment dans les quartiers arborés et près des nombreux plans d'eau de la commune.",
    "Nettoyage complexe des parkings souterrains des résidences récentes, confrontés aux taches d'hydrocarbures et aux poussières, avec des contraintes strictes d'évacuation des eaux usées.",
    "Entretien des façades et balcons souillés par les pollutions routières (proximité A4, A104) et nécessitant des méthodes contrôlées pour éviter les coulures sur les logements voisins."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: [
    "Vieux Torcy (Le Mail, L'Église)",
    "Arche-Guédon",
    "Beauregard",
    "Les Gradins",
    "Bel Air",
    "Le Belvédère",
    "Le Carré Fleuri",
    "La Ville Nouvelle (secteur gare, Bay 1)",
    "Zone Industrielle"
  ],

  nearbyCities: [
    "noisiel",
    "lognes",
    "champs-sur-marne",
    "saint-thibault-des-vignes",
    "bussy-saint-georges",
    "collegien"
  ],

  landmarks: [
    "Mairie de Torcy",
    "Gare RER A de Torcy",
    "Centre commercial Bay 1",
    "Centre commercial Bay 2",
    "Base de loisirs de Torcy - Île de loisirs de Vaires-Torcy",
    "Église Saint-Barthélémy",
    "Autoroute A104 (Francilienne) - Échangeurs de Torcy"
  ],

  faq: [
    {
      question: "Quelle est votre réactivité pour intervenir sur une copropriété à Torcy ?",
      answer: "Notre équipe basée en Île-de-France intervient généralement sous 48 à 72 heures après la demande, diagnostics compris. Pour les urgences (dégâts des eaux sur moquette, sinistre), nous mobilisons une équipe le jour même sur Torcy et ses environs."
    },
    {
      question: "Comment gérez-vous les accès sécurisés (Vigik, digicodes) dans les résidences ?",
      answer: "Nos techniciens sont habitués aux systèmes d’accès complexes. Nous coordonnons avec le gardien ou le syndic pour obtenir un badge temporaire ou une procédure d’entrée validée, toujours en respectant le cahier des charges de sécurité de votre résidence."
    },
    {
      question: "Le déplacement pour un devis est-il payant sur Torcy ?",
      answer: "Non, le diagnostic et le devis sont entièrement gratuits à Torcy, quel que soit le quartier. Nous considérons cette visite préalable comme indispensable pour évaluer les surfaces, les types de sols et les contraintes d’accès propres à votre immeuble."
    },
    {
      question: "Pouvez-vous intervenir tôt le matin dans les halls d’immeuble près de la gare RER de Torcy, où le passage est intense ?",
      answer: "Absolument. Nous organisons nos plannings pour intervenir aux heures les moins gênantes, souvent dès 6 heures, en protégeant la zone de travail. Nous gérons également le stationnement de nos véhicules utilitaires dans ces secteurs denses, en accord avec la réglementation locale."
    }
  ],

  testimonial: {
    text: "Klinova a remis en état les moquettes et le parking de notre résidence à Torcy avec une organisation très fluide et un résultat visible dès le lendemain.",
    author: "S. Martin",
    role: "Syndic bénévole",
    building: "Résidence proche de la gare RER de Torcy"
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription: "Redonnez fraîcheur et propreté aux halls et cages d’escalier de votre résidence à Torcy, pour une image soignée de l’immeuble et le confort quotidien de tous ses occupants.",
      whyUsBullets: [
        "Expertise locale : connaissance des immeubles du Vieux Torcy aux résidences récentes, et de leurs contraintes d’accès.",
        "Maîtrise technique : matériel professionnel d’injection-extraction pour un résultat en profondeur et un séchage rapide.",
        "Organisation adaptée : interventions planifiées en matinée pour limiter la gêne, adaptées aux flux des résidents.",
        "Compte-rendu systématique : information claire remise au syndic ou au particulier après l’intervention."
      ],

      uniqueIntro: `<p>Dans les copropriétés de Torcy, des quartiers résidentiels de Beauregard aux résidences modernes près de la gare RER, les moquettes des halls et paliers subissent un trafic intense. Poussières de la ville, traces de pas, taches accidentelles ou ternissement progressif finissent par donner une impression de négligence, préjudiciable à l’image de l’immeuble et au sentiment de bien-être des résidents.</p>
<p>Pour un syndic, cette dégradation visuelle peut devenir une source de réclamations récurrentes. Un nettoyage professionnel et méthodique n’est pas seulement une question d’esthétique ; c’est un investissement dans la préservation du patrimoine commun et dans la qualité de vie, permettant de retrouver des couleurs vives et un tissu assaini.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence systématiquement par un diagnostic sur place à Torcy. Nous identifions le type de moquette, son niveau d’encrassement et la nature des taches, tout en prenant en compte les contraintes d’accès spécifiques à votre bâtiment (escaliers étroits, halls de taille réduite, présence d’un gardien). Cette visite nous permet de vous proposer un protocole adapté. Avant toute opération, nous protégeons les bas de murs et les angles avec des bâches, et nous organisons le chantier par cage d’escalier ou étage pour limiter la gêne.</p>
<p>La méthode principale est le nettoyage par injection-extraction à l’eau, réalisée avec des machines professionnelles. Nous effectuons plusieurs passes sur les zones de fort trafic, comme les entrées d’immeuble ou les paliers desservant les ascenseurs. L’extraction puissante retire l’eau sale et les résidus, limitant considérablement le temps de séchage à quelques heures seulement.</p>
<p>Nous tenons compte du contexte local : aération des halls ouverts sur rue près de la gare RER, gestion des horaires dans les immeubles très denses de l’Arche-Guédon. Pour un entretien durable, nous recommandons généralement une fréquence de 12 à 18 mois dans les parties communes très fréquentées.</p>`,

      specificChallenges: [
        "Encrasement accéléré par la pollution routière et les poussières fines, notamment pour les immeubles situés à proximité des axes A104 et A4.",
        "Usure marquée dans les halls d’entrée des résidences à très forte densité, soumis à un passage continu de résidents.",
        "Difficulté d’accès et de manipulation du matériel dans les cages d’escalier étroites des immeubles des années 1970-80.",
        "Gestion optimisée du séchage nécessaire dans les halls de plain-pied, souvent moins ventilés, pour une remise en service rapide."
      ],

      faqAdditions: [
        {
          question: "Les moquettes des halls près de la gare RER de Torcy semblent toujours sales très vite. Votre nettoyage est-il efficace durablement ?",
          answer: "Oui, car nous traitons spécifiquement ce problème. L’encrassement rapide près des gares est dû aux poussières fines et au trafic intense. Notre méthode d’injection-extraction nettoie en profondeur la fibre, éliminant les particules incrustées. Un prétraitement des taches tenaces et plusieurs passes sur les zones de passage assurent un résultat durable. Nous conseillons ensuite une fréquence d’entretien adaptée à cette exposition particulière pour maintenir la propreté dans le temps."
        },
        {
          question: "Intervenez-vous aussi bien dans les petites copropriétés du Vieux Torcy que dans les grandes résidences de l’Arche-Guédon ?",
          answer: "Absolument. Notre matériel est adapté à différentes configurations. Pour les petites copropriétés avec des escaliers étroits, nous utilisons des machines compactes. Pour les grandes résidences avec de vastes halls, nous déployons des équipes coordonnées pour traiter efficacement les grandes surfaces. Le principe reste le même : un diagnostic personnalisé et un protocole rigoureux, quelle que soit la taille de l’immeuble."
        },
        {
          question: "La méthode à l’eau abîme-t-elle les moquettes ou laisse-t-elle de l’humidité ?",
          answer: "Non, lorsqu’elle est bien maîtrisée. Notre procédé professionnel injecte une solution nettoyante et l’aspire immédiatement avec une forte puissance d’extraction. Cela retire l’eau sale et limite l’humidité résiduelle. La moquette est propre et presque sèche en sortie de machine, avec un séchage complet en quelques heures avec une bonne aération. Nous adaptons la température de l’eau et la pression à chaque type de textile."
        },
        {
          question: "Comment organisez-vous l’intervention pour minimiser la gêne pour les résidents ?",
          answer: "Nous planifions l’intervention en étroite coordination avec le syndic ou le gardien. Nous travaillons typiquement par cage d’escalier, en balisant la zone et en informant les résidents par affichage préalable. Les horaires sont choisis pour éviter les pics de fréquentation, souvent en début de journée. Notre équipe est formée à une intervention rapide et discrète, garantissant un accès toujours possible aux logements."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription: "Redonnez sécurité et clarté à votre parking à Torcy : des sols dégraissés, des marquages visibles et une ambiance générale rassurante pour les résidents et visiteurs.",
      whyUsBullets: [
        "Expertise locale : connaissance des contraintes des parkings souterrains des résidences récentes et des immeubles plus anciens du Vieux Torcy.",
        "Maîtrise technique : matériel professionnel (autolaveuse, haute pression) et protocole adapté à chaque type de salissure et de revêtement.",
        "Organisation adaptée : intervention planifiée par zones pour maintenir l’accès, coordination avec les gardiens et syndics.",
        "Suivi concret : compte-rendu d’intervention détaillé et conseils pour l’entretien courant remis au gestionnaire."
      ],

      uniqueIntro: `<p>Les parkings, souterrains ou aériens, des résidences et entreprises de Torcy sont soumis à un fort encrassement. La proximité des autoroutes A4 et A104, le trafic dense vers les centres commerciaux Bay 1 et Bay 2, et le va-et-vient quotidien des véhicules laissent des traces tenaces : poussière noire grasse, taches d’huile et de carburant, marquages au sol effacés.</p>
<p>Cet état crée une impression d’insécurité et de négligence, peut masquer les repères de circulation et présenter des risques de glissade. Pour un syndic ou un gestionnaire, un parking mal entretenu devient une source de préoccupation constante pour les occupants. Un décrassage complet et professionnel n’est pas qu’une question d’image ; il restaure la sécurité, la lisibilité des voies de circulation et la valeur du patrimoine immobilier.</p>`,

      uniqueDeepDive: `<p>Notre intervention débute par un diagnostic précis sur site à Torcy. Nous examinons le revêtement (béton nu, peinture, résine), l’état des marquages, la configuration des évacuations d’eau et les contraintes d’accès (hauteur sous plafond, largeur des rampes). Cette visite nous permet de définir le protocole optimal et de sélectionner les produits adaptés. Nous préparons ensuite le chantier : balayage mécanique ou manuel pour éliminer les gros déchets, dégagement des zones à traiter et mise en place d’une signalisation temporaire. En accord avec le gestionnaire, nous organisons souvent une rotation des véhicules par secteurs pour ne pas bloquer l’intégralité du parking.</p>
<p>La méthode principale combine l’utilisation de l’autolaveuse, qui brosse et aspire les eaux sales en une seule passe, et le recours à la haute pression à eau (souvent chaude) avec un dégraissant professionnel pour attaquer les taches d’hydrocarbures incrustées. Une attention particulière est portée aux rampes, aux pieds de murs et aux angles, zones où les dépôts s’accumulent. La gestion des eaux de lavage est stricte : elles sont récupérées et évacuées via la filière adaptée, en respectant la réglementation.</p>
<p>Nous adaptons notre planning aux contraintes locales, par exemple en intervenant tôt le matin dans les parkings souterrains très fréquentés des résidences près de la gare RER. Pour un entretien durable, nous recommandons un à deux décrassages complets par an pour les parkings les plus exposés.</p>`,

      specificChallenges: [
        "Encrasement rapide par les poussières noires grasses issues du trafic important des autoroutes A4 et A104 à proximité.",
        "Taches d’hydrocarbures persistantes dans les places de stationnement des parkings d’immeubles à forte densité.",
        "Gestion complexe de l’évacuation des eaux usées dans les parkings souterrains anciens aux systèmes parfois vétustes.",
        "Nettoyage des rampes et angles étroits dans les parkings conçus lors du développement initial de Marne-la-Vallée."
      ],

      faqAdditions: [
        {
          question: "Pourquoi la poussière dans notre parking de Torcy est-elle toujours noire et grasse, revenant si vite après un simple balayage ?",
          answer: "Cette poussière noire caractéristique est un mélange de résidus de pneus, de gaz d’échappement et de particules fines issues du trafic routier dense (A4, A104, D199). Elle est grasse et adhère fortement aux sols. Un simple balayage ne fait que la déplacer. Notre méthode, combinant un dégraissant spécifique et un lavage à haute pression ou à l’autolaveuse, dissout et élimine cette couche grasse en profondeur, pour un résultat propre et durable."
        },
        {
          question: "Comment organisez-vous le travail dans un parking souterrain occupé d’une grande résidence ?",
          answer: "Nous travaillons systématiquement par zones. En coordination avec le gardien ou le syndic, nous définissons un plan de rotation des véhicules. Nous traitons une zone à la fois, en demandant aux résidents de déplacer temporairement leur véhicule vers une zone déjà nettoyée ou libre. Cette organisation permet de maintenir l’usage du parking tout au long de l’intervention, avec une gêne minimale."
        },
        {
          question: "Est-il possible de vraiment faire disparaître les vieilles taches d’huile sur le béton ?",
          answer: "Une tache d’huile très ancienne et profondément imprégnée peut laisser une ombre résiduelle, mais notre traitement permet d’en éliminer la quasi-totalité de la substance grasse. Nous appliquons un dégraissant professionnel adapté au béton, laissons agir, puis utilisons la haute pression à eau chaude. Ce procédé retire l’huile activée, rendant la surface propre, non glissante et nettement améliorée."
        },
        {
          question: "Que faites-vous des eaux sales générées par le lavage haute pression ?",
          answer: "La gestion de ces eaux usées est une étape réglementée et cruciale. Nos autolaveuses sont équipées de réservoirs de récupération intégrés. Pour le lavage haute pression, nous utilisons des boudins absorbants et dirigeons les eaux vers les bouches d’évacuation prévues à cet effet, après accord sur leur bon fonctionnement. Nous ne laissons pas les eaux sales s’écouler dans le réseau des eaux pluviales ou usées domestiques sans traitement préalable."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS / TERRASSES
    // =========================
    {
      serviceKey: "balcons",
      heroDescription: "Redécouvrez votre espace extérieur à Torcy : un balcon ou une terrasse nettoyé en profondeur, prêt à accueillir vos moments de détente et à valoriser votre logement.",
      whyUsBullets: [
        "Expertise locale : compréhension des types de salissures spécifiques à Torcy, entre pollution routière et dépôts verts des nombreux plans d’eau.",
        "Maîtrise technique : utilisation de produits adaptés et de pression contrôlée pour un nettoyage efficace sans abîmer les supports.",
        "Organisation pratique : intervention sur rendez-vous, respect de votre intimité et nettoyage minutieux pour une remise en état complète.",
        "Conseils personnalisés : recommandations d’entretien simple pour prolonger la propreté de votre balcon après notre passage."
      ],

      uniqueIntro: `<p>À Torcy, les balcons et terrasses des appartements, qu’ils donnent sur les espaces verts des lacs ou sur les axes de circulation, sont soumis à de nombreuses agressions. Entre les poussières noires des autoroutes A4 et A104, les dépôts verts de mousse et de pollen liés à la végétation abondante, les taches de pluie et les résidus des jardinières, cet espace précieux se transforme vite en un lieu négligé.</p>
<p>Cette salissure permanente décourage d’y passer du temps et peut même donner une impression de manque d’entretien du logement. Pourtant, cet espace extérieur mérite d’être pleinement investi. Un nettoyage professionnel complet permet d’effacer ces traces tenaces et de retrouver un balcon agréable, propre et accueillant.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence par la protection de votre logement. Nous couvrons soigneusement la porte-fenêtre et les menuiseries avec des bâches et du ruban adhésif de masquage. Nous vous aidons à déplacer les meubles légers ou nous les protégeons sur place ; les plantes et les objets personnels sont mis à l’abri. Nous procédons ensuite à l’enlèvement manuel des gros dépôts : feuilles mortes, terre des jardinières, et tous les déchets accumulés dans les angles.</p>
<p>Le nettoyage proprement dit s’effectue avec des produits adaptés au support de votre balcon (carrelage, béton, dalles, bois composite). Après application, nous brossons les surfaces pour décoller les saletés incrustées, en portant une attention particulière aux joints noircis, aux angles et au garde-corps. Le rinçage est effectué avec une pression d’eau douce et contrôlée, jamais agressive, pour préserver l’étanchéité.</p>
<p>Nous veillons rigoureusement à diriger l’eau vers l’évacuation prévue pour éviter toute coulure sur la façade ou chez vos voisins du dessous, en utilisant au besoin des chiffons et des raclettes. Cette vigilance garantit un nettoyage propre, respectueux de votre immeuble et de votre voisinage.</p>`,

      specificChallenges: [
        "Encrasement rapide par les poussières grasses et les particules fines issues de la proximité des autoroutes A4 et A104.",
        "Développement important de mousses et lichens sur les sols et garde-corps, favorisé par l’humidité des nombreux lacs et étangs de la commune.",
        "Nettoyage délicat des joints de carrelage souvent très noircis dans les résidences des années 1980-90.",
        "Gestion impérative de l’écoulement de l’eau pour éviter les conflits de voisinage dans les immeubles collectifs à étages."
      ],

      faqAdditions: [
        {
          question: "Le nettoyage haute pression risque-t-il d’endommager mon carrelage ou d’arracher les joints ?",
          answer: "Non, car nous n’utilisons pas de haute pression agressive. Nous réglons notre matériel sur une pression douce et contrôlée, adaptée au nettoyage des balcons. Cette méthode permet de décoller les saletés et les mousses sans fragiliser les joints ni endommager la surface. Pour les joints très noircis, un brossage manuel ou un traitement spécifique complète l’action de l’eau."
        },
        {
          question: "Comment assurez-vous que l’eau de nettoyage ne coulera pas chez mon voisin du dessous ou ne tâchera pas la façade ?",
          answer: "La gestion de l’eau est une étape clé de notre protocole. Avant de rincer, nous vérifions et désobstruons si besoin la bouche d’évacuation. Durant le rinçage, nous dirigeons systématiquement le flux d’eau vers cette évacuation à l’aide de raclette et de chiffons absorbants. Cette vigilance nous permet de garantir un nettoyage propre et sans nuisance pour l’étage inférieur."
        },
        {
          question: "Les produits que vous utilisez sont-ils dangereux pour mes plantes de balcon ou pour mon animal de compagnie ?",
          answer: "Nous utilisons des nettoyants professionnels biodégradables et adaptés aux surfaces extérieures. Ils sont efficaces contre les salissures mais ne présentent pas de danger pour les plantes une fois rincés. Nous vous conseillons de rentrer vos plantes pendant l’intervention pour les protéger des projections. Pour les animaux, il suffit d’attendre le séchage complet du balcon avant de les laisser y accéder."
        },
        {
          question: "Combien de temps faut-il attendre avant de pouvoir remettre les meubles et réutiliser le balcon ?",
          answer: "Le temps de séchage dépend des conditions météo. Grâce à notre rinçage contrôlé qui ne laisse pas d’excès d’eau, le séchage est généralement rapide. Dans de bonnes conditions, le balcon est utilisable quelques heures après notre passage. Nous vous conseillons d’attendre que le sol soit visuellement sec avant d’y remettre vos meubles et vos plantes."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Reprenez possession de votre balcon à Torcy après un nettoyage et une désinfection complète, garantissant un espace sain, sécurisé et de nouveau agréable à vivre.",
      whyUsBullets: [
        "Expertise locale : intervention habituée aux problématiques de pigeons sur les balcons des immeubles torcéens, des centres anciens aux résidences récentes.",
        "Maîtrise technique : protocole sanitaire strict, avec EPI et produits de désinfection homologués pour un résultat garanti.",
        "Organisation sécurisée : gestion des déchets contaminés via une filière dédiée, respect total des consignes de sécurité.",
        "Tranquillité offerte : remise d’un compte-rendu et conseils pour dissuader le retour des pigeons (picots, etc.)."
      ],

      uniqueIntro: `<p>À Torcy, la présence de nombreux espaces verts, de plans d’eau et de combles d’immeubles offre un habitat propice aux pigeons. Leurs colonies peuvent rapidement souiller les balcons et loggias des étages, particulièrement dans les quartiers arborés ou près des grands ensembles.</p>
<p>L’accumulation de fientes crée une situation insalubre : odeurs tenaces, surfaces gluantes, risques sanitaires réels dus aux bactéries et aux champignons présents dans les déjections. Cet état rend le balcon inutilisable, génère une gêne quotidienne pour l’occupant et peut être source de tension au sein de la copropriété. Seul un traitement professionnel, mené avec des équipements de protection et des produits adaptés, permet d’éliminer en toute sécurité cette contamination et de restaurer un environnement sain.</p>`,

      uniqueDeepDive: `<p>Notre intervention suit un protocole strict, priorisant la sécurité des habitants et de nos techniciens. Dès notre arrivée, nous nous équipons d’EPI obligatoires : combinaison intégrale, gants, masque respiratoire FFP2 et lunettes de protection. Nous installons des bâches de confinement pour protéger l’intérieur du logement et limiter la dispersion des poussières. Une humidification préalable des fientes sèches est systématiquement effectuée pour neutraliser les poussières potentiellement contaminées avant tout ramassage.</p>
<p>Le cœur de l’intervention consiste en un ramassage manuel méticuleux de toutes les fientes, nids et débris organiques. Ces déchets contaminés sont conditionnés dans des sacs étanches prévus à cet effet. Une fois les surfaces dégagées, nous procédons au nettoyage approfondi du sol, du garde-corps et des murs mitoyens avec des détergents adaptés. L’étape indispensable est la désinfection avec un produit virucide et bactéricide homologué, que nous appliquons en respectant scrupuleusement son temps de contact pour une action optimale.</p>
<p>Après rinçage, nous aérons la zone. Les déchets sont évacués via une filière spécialisée, conforme à la réglementation. Nous vous conseillons un délai d’environ 24 heures avant réutilisation complète du balcon afin de garantir un séchage et une aération suffisants.</p>`,

      specificChallenges: [
        "Infestation récurrente sur les balcons des immeubles de moyenne hauteur entourant les parcs et les nombreux étangs de la commune.",
        "Ramassage complexe des fientes accumulées dans les angles étroits des loggias et sous les garde-corps pleins.",
        "Nécessité impérative de gérer les poussières de fientes sèches, potentiellement pathogènes, lors du premier contact.",
        "Évacuation réglementée des déchets contaminés, ne pouvant en aucun cas rejoindre les ordures ménagères classiques."
      ],

      faqAdditions: [
        {
          question: "Pourquoi est-il risqué de nettoyer soi-même un balcon couvert de fientes de pigeons ?",
          answer: "Les fientes de pigeons sont porteuses de bactéries, de champignons et d’acariens. En séchant, elles se transforment en poussières fines qui, inhalées, présentent un risque sanitaire réel. Notre équipe intervient avec un équipement de protection individuelle complet et un protocole conçu pour éliminer ces dangers, ce qu’un nettoyage domestique ne peut assurer."
        },
        {
          question: "Les produits de désinfection que vous utilisez sont-ils sans danger une fois secs ?",
          answer: "Oui. Nous utilisons des désinfectants virucides et bactéricides professionnels, homologués pour cet usage. Ils sont appliqués selon des dosages stricts et doivent agir pendant un temps de contact précis pour être efficaces. Après cette phase et un rinçage complet, il ne reste pas de résidu actif ou toxique sur les surfaces. Une fois le balcon sec, il est sûr pour les habitants, les enfants et les animaux domestiques."
        },
        {
          question: "Le nettoyage peut-il endommager mon carrelage de balcon ou la peinture du garde-corps ?",
          answer: "Nous évitons les techniques abrasives ou les pressions trop fortes. Le nettoyage mécanique initial est manuel et doux. Les produits de nettoyage et de désinfection sont sélectionnés pour leur efficacité sans agressivité sur les matériaux courants. Notre objectif est de restaurer la propreté sans altérer l’état de vos surfaces."
        },
        {
          question: "Que deviennent les fientes et les nids que vous ramassez ?",
          answer: "Ces déchets sont considérés comme des déchets contaminés. Ils sont immédiatement placés dans des sacs étanches et résistants, puis évacués via une filière de traitement agréée, conforme à la réglementation en vigueur. Ils ne sont pas jetés dans les poubelles d’ordures ménagères de la résidence."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Offrez une seconde jeunesse à vos textiles d'intérieur à Torcy : canapés, tapis et matelas nettoyés en profondeur pour un intérieur plus sain et confortable.",
      whyUsBullets: [
        "Expertise locale : compréhension des besoins des foyers torcéens, en appartement ou maison, avec enfants ou animaux.",
        "Maîtrise technique : méthode d'injection-extraction professionnelle pour un nettoyage en profondeur sans abîmer les fibres.",
        "Organisation pratique : intervention sur rendez-vous à votre domicile, avec ponctualité rigoureuse et respect des lieux.",
        "Conseils personnalisés : recommandations d'entretien pour prolonger la propreté de vos textiles après notre passage."
      ],

      uniqueIntro: `<p>Dans les foyers de Torcy, des appartements dynamiques près de la gare aux pavillons du Vieux Torcy, les canapés, tapis et matelas sont au cœur de la vie quotidienne. Ils accumulent invisiblement poussières, acariens, squames d'animaux domestiques, mais aussi des taches visibles de nourriture, de boissons ou d'urine.</p>
<p>Avec le temps, ces salissures altèrent l'apparence des textiles, peuvent générer des odeurs désagréables et contribuer aux allergies. Un nettoyage professionnel spécialisé redonne non seulement de l'éclat à vos tissus, mais améliore aussi significativement l'hygiène et le confort de votre intérieur.</p>`,

      uniqueDeepDive: `<p>Notre intervention à domicile commence par un diagnostic approfondi. Nous identifions le type de textile (coton, laine, synthétique, velours, cuir) et la nature des taches (graisse, vin, urine, etc.) pour adapter notre protocole. Nous procédons ensuite à un pré-traitement ciblé des taches tenaces, en utilisant par exemple des solutions enzymatiques pour les taches organiques comme l'urine. Cette étape prépare le tissu pour un nettoyage optimal et évite la fixation définitive des salissures.</p>
<p>La méthode principale est le nettoyage par injection-extraction à l'eau, réalisée avec une machine professionnelle portative. Elle injecte une solution nettoyante à température adaptée et aspire immédiatement l'eau sale, emportant saletés et allergènes. Pour les textiles fragiles ou épais, nous ajustons la pression et multiplions les passes si nécessaire.</p>
<p>Immédiatement après le nettoyage, nous procédons à une extraction maximale de l'humidité. Nous vous donnons des consignes claires pour le séchage : aérer la pièce, laisser le meuble ou le matelas en place si possible. Dans de bonnes conditions, l'utilisation est souvent possible le jour même.</p>`,

      specificChallenges: [
        "Taches récurrentes de terre et de boue liées à la proximité des espaces verts et de la base de loisirs pour les familles actives.",
        "Présence importante d'acariens et d'allergènes dans les textiles due à l'humidité relative des logements près des plans d'eau.",
        "Odeurs tenaces (nourriture, animaux) nécessitant un traitement enzymatique spécifique dans les intérieurs confinés des appartements.",
        "Séchage à optimiser dans les pièces peu ensoleillées ou mal ventilées de certains logements, nécessitant des conseils adaptés."
      ],

      faqAdditions: [
        {
          question: "Le nettoyage est-il efficace contre les acariens et les allergènes responsables d’allergies ?",
          answer: "Oui, notre méthode est très efficace. L’injection-extraction à l’eau chaude, à température adaptée au tissu, élimine une grande partie des acariens, de leurs déjections et des autres allergènes incrustés dans les fibres en profondeur. Elle réduit significativement leur population et les agents irritants, améliorant ainsi la qualité de l’air intérieur."
        },
        {
          question: "Pouvez-vous vraiment éliminer les taches d’urine anciennes et leur odeur sur un canapé ou un matelas ?",
          answer: "Pour les taches d’urine, nous utilisons un pré-traitement enzymatique spécifique. Les enzymes dégradent les composés organiques de l’urine qui sont à l’origine de l’odeur et de la coloration. Ensuite, notre injection-extraction retire ces résidus traités. Pour les taches très anciennes et profondes, une légère ombre peut parfois persister, mais l’odeur est généralement éliminée."
        },
        {
          question: "Combien de temps faut-il attendre avant de pouvoir se resservir de son canapé ou remettre le tapis en place ?",
          answer: "Grâce à notre extraction puissante, les textiles sont presque secs après notre passage. Le séchage complet dépend de l’épaisseur du tissu, de l’aération et de l’humidité ambiante. En général, un canapé ou un tapis est utilisable en 4 à 6 heures, et un matelas en 6 à 8 heures. Nous conseillons d’aérer la pièce et, si possible, d’utiliser un ventilateur pour accélérer le processus."
        },
        {
          question: "Que dois-je préparer chez moi avant votre arrivée pour l’intervention ?",
          answer: "Pour gagner du temps et nous permettre de travailler efficacement, nous recommandons de libérer l’accès au meuble à nettoyer et de retirer les coussins amovibles si possible. Pour un tapis, il est idéal de le rouler sur un côté. Pensez aussi à mettre à l’abri les objets fragiles ou électroniques à proximité. Nous apportons toute la protection nécessaire pour préserver vos sols et vos autres meubles."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;



import type { City } from "~/types/geo";

const city: City = {
  name: "Torcy",
  slug: "torcy",
  postalCodes: ["77200"],

  customDescription: "Ville nouvelle dynamique de Seine-et-Marne desservie par le RER A, Torcy concentre immeubles récents et zones d'activités autour de la gare et du secteur Bay. L'entretien des moquettes dans les copropriétés, des parkings souterrains et des balcons nécessite une approche adaptée aux contraintes urbaines locales.",

  hubIntro: `<p>KLINOVA accompagne les syndics et gestionnaires de Torcy dans leur gestion quotidienne de la propreté immobilière. Notre proximité géographique et notre connaissance du tissu urbain local nous permettent d'intervenir rapidement sur vos copropriétés et zones d'activités.</p>
<p>Nous proposons une approche globale de la maintenance technique : du nettoyage des moquettes de halls aux parkings souterrains, en passant par l'entretien des balcons et terrasses. Chaque intervention fait l'objet d'un protocole rigoureux et d'un reporting détaillé pour vos conseils syndicaux.</p>
<ul>
  <li>Interventions programmées sur les copropriétés du secteur Arche-Guédon et centre-ville.</li>
  <li>Gestion des accès sécurisés Vigik et coordination avec les gardiens d'immeubles.</li>
  <li>Protocoles adaptés aux contraintes de stationnement près de la gare RER.</li>
  <li>Reporting détaillé pour assemblées générales et suivi budgétaire.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement accéléré des moquettes de halls par le passage intensif lié à la desserte RER A.",
    "Accumulation de particules fines et résidus urbains sur les balcons exposés aux axes routiers A4 et A104.",
    "Traces de boue et salissures dans les parkings souterrains des résidences récentes du secteur ville nouvelle.",
    "Dépôts de mousses et algues sur les terrasses des étangs de Maubuée en période humide."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: [
    "Vieux Torcy (secteur nord-ouest avec quartiers du Mail et de l'Église).",
    "Arche-Guédon (secteur nord-est avec quartiers Beauregard, Gradins, Bel Air).",
    "Ville Nouvelle (secteur sud avec gare RER, Bay 1, zone industrielle, lycée Jean-Moulin, quartier Belvédère, résidence Carré Fleuri)."
  ],

  nearbyCities: [
    "noisiel",
    "lognes",
    "champs-sur-marne",
    "saint-thibault-des-vignes",
    "bussy-saint-georges",
    "collegien"
  ],

  landmarks: [
    "Mairie de Torcy",
    "Gare RER A de Torcy",
    "Centre commercial Bay 1",
    "Zone industrielle de Torcy",
    "Étangs de Torcy (Maubuée)",
    "Église Saint-Barthélemy"
  ],

  faq: [
    {
      question: "Intervenez-vous rapidement sur le secteur de Torcy ?",
      answer: "Notre équipe intervient sous 48 heures en semaine sur Torcy et environs. Pour les urgences, sinistre ou fin de chantier, nous mobilisons nos techniciens dans la journée. La proximité de notre base logistique nous permet cette réactivité."
    },
    {
      question: "Comment gérez-vous les accès aux immeubles sécurisés ?",
      answer: "Nos techniciens sont équipés pour intervenir sur les accès sécurisés et coordonnent systématiquement avec les gardiens ou syndics. Nous récupérons les clés en amont et les restituons selon vos procédures internes, avec une traçabilité complète des accès."
    },
    {
      question: "Les déplacements pour devis sont-ils gratuits ?",
      answer: "Tous nos déplacements pour établir un devis sont gratuits sur Torcy et la communauté d'agglomération Paris-Vallée de la Marne. Notre technicien évalue précisément les surfaces et contraintes pour un chiffrage exact sans mauvaise surprise."
    },
    {
      question: "Pouvez-vous intervenir malgré les contraintes de stationnement près de la gare ?",
      answer: "Nos équipes connaissent bien les créneaux et zones de livraison autorisées à Torcy. Nous planifions nos interventions aux heures optimales et disposons de matériel compact pour gérer les accès difficiles du centre-ville et du secteur gare."
    }
  ],

  testimonial: {
    text: "Klinova a rapidement remis en état les moquettes et le parking de notre résidence à Torcy, avec un suivi clair pour le conseil syndical.",
    author: "S. Martin",
    role: "Syndic bénévole",
    building: "Résidence du secteur Arche-Guédon"
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription: "Redonnez de l'éclat aux halls et cages d'escaliers de vos copropriétés à Torcy grâce à un nettoyage professionnel qui restaure l'aspect d'origine des moquettes.",
      whyUsBullets: [
        "Connaissance approfondie des contraintes spécifiques aux copropriétés du secteur Arche-Guédon et de la ville nouvelle.",
        "Matériel professionnel d'injection-extraction adapté aux différents types de fibres et niveaux d'encrassement.",
        "Organisation flexible respectant les horaires de passage et contraintes d'accès près de la gare RER.",
        "Compte-rendu détaillé d'intervention avec recommandations d'entretien pour le syndic."
      ],

      uniqueIntro: `<p>Les moquettes des halls d'entrée et cages d'escaliers à Torcy subissent un encrassement constant lié au passage intensif des résidents et visiteurs. Entre les salissures rapportées depuis les axes routiers A4 et A104, les traces de boue des journées pluvieuses et l'usure naturelle dans les zones de fort trafic, ces revêtements perdent rapidement leur aspect d'origine.</p>
<p>Les copropriétés du secteur Arche-Guédon et les résidences récentes de la ville nouvelle présentent souvent des moquettes ternes dans les parties communes, créant une première impression défavorable pour les visiteurs et les futurs acquéreurs. Cette dégradation visuelle nuit à l'image générale de l'immeuble et peut générer des tensions lors des assemblées générales. Un nettoyage professionnel structuré permet de retrouver l'aspect d'origine des moquettes et de prolonger significativement leur durée de vie.</p>`,

      uniqueDeepDive: `<p>Notre intervention débute par un diagnostic approfondi de l'état des moquettes : type de fibres, niveau d'encrassement, identification des taches spécifiques et évaluation des contraintes d'accès typiques des immeubles de Torcy. Nous prenons en compte la configuration des halls souvent ouverts sur rue, la proximité de la gare RER générant un flux piétonnier important et les spécificités architecturales des résidences de la ville nouvelle. La phase de préparation inclut la protection des bas de murs, le balisage des zones d'intervention et l'organisation par cage d'escalier pour limiter la gêne des résidents.</p>
<p>Le nettoyage s'effectue par injection-extraction à l'eau, méthode qui permet d'éliminer les salissures incrustées sans abîmer les fibres. Nos techniciens effectuent plusieurs passes sur les zones de fort passage comme les seuils d'entrée et les paliers principaux. L'extraction puissante des eaux de lavage assure un séchage optimal même dans les halls exposés à l'humidité hivernale. Nous recommandons un nettoyage complet tous les 12 à 18 mois pour les copropriétés à fort passage, complété par un entretien régulier par aspiration et détachage ponctuel.</p>`,

      specificChallenges: [
        "Encrassement accéléré des moquettes dans les halls proches de la gare RER A, avec des zones de passage à traiter de façon renforcée.",
        "Incrustation profonde de particules fines issues du trafic des axes A4 et A104, nécessitant un pré-traitement et plusieurs passes d'injection-extraction.",
        "Ralentissement possible du séchage dans les rez-de-chaussée exposés à l'humidité hivernale, demandant une extraction particulièrement efficace.",
        "Usure différenciée des moquettes d'escaliers selon les paliers, nécessitant une approche par zones pour homogénéiser le rendu."
      ],

      faqAdditions: [
        {
          question: "Quelles sont les particularités des interventions dans les copropriétés de Torcy ?",
          answer: "Nous tenons compte du flux piétonnier important lié à la desserte RER et adaptons nos horaires d'intervention en conséquence. Les halls des résidences récentes du secteur ville nouvelle présentent souvent des moquettes de qualité qui nécessitent un traitement délicat. Nous coordonnons systématiquement avec les gardiens pour optimiser l'organisation et limiter la gêne des résidents."
        },
        {
          question: "Intervenez-vous sur tous types de copropriétés à Torcy ?",
          answer: "Nous travaillons aussi bien sur les petites copropriétés du vieux Torcy que sur les grandes résidences contemporaines de l'Arche-Guédon. Nos équipes sont habituées aux configurations variées et adaptent matériel et méthode à chaque architecture pour un résultat optimal."
        },
        {
          question: "Le nettoyage par injection-extraction risque-t-il d'abîmer les moquettes ?",
          answer: "Notre méthode respecte les fibres en ajustant la pression et la température selon le type de moquette identifié lors du diagnostic initial. L'injection d'eau savonneuse suivie d'une extraction immédiate évite la sur-humidification et permet aux moquettes de retrouver leur souplesse d'origine."
        },
        {
          question: "Comment organisez-vous les interventions pour limiter la gêne des résidents ?",
          answer: "Nous planifions nos passages en dehors des heures de forte affluence et informons préalablement les résidents via le syndic ou les panneaux d'affichage. Le balisage temporaire permet de maintenir un accès sécurisé aux étages, et nos équipes travaillent par zones successives pour éviter de bloquer complètement la circulation."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription: "Transformez vos parkings souterrains de Torcy en espaces propres et sécurisés grâce à un décrassage professionnel qui élimine huile, poussière et traces d'usure.",
      whyUsBullets: [
        "Expérience des parkings souterrains des copropriétés récentes et contraintes d'accès propres au secteur de Torcy.",
        "Matériel adapté, autolaveuse et haute pression, pour un traitement efficace des surfaces béton et des rampes.",
        "Planification flexible respectant les heures creuses et rotation par zones sans blocage total du parking.",
        "Gestion conforme des eaux usées et rapport d'intervention détaillé pour le syndic."
      ],

      uniqueIntro: `<p>Les parkings souterrains des copropriétés de Torcy accumulent rapidement salissures et dépôts gras liés au trafic intense des axes A4 et A104. Entre les traces d'hydrocarbures, la poussière noire qui se dépose sur les sols et les murs, et l'encrassement des rampes d'accès, ces espaces perdent leur aspect d'origine et peuvent devenir glissants.</p>
<p>Les résidences du secteur Arche-Guédon et les programmes récents de la ville nouvelle présentent souvent des parkings dont les marquages au sol deviennent illisibles et les surfaces béton ternies par l'accumulation de résidus automobiles. Cette dégradation nuit à l'image de la copropriété et peut créer des conditions d'insécurité pour les résidents. Un décrassage professionnel redonne lisibilité aux marquages, améliore l'adhérence des sols et restaure la propreté générale.</p>`,

      uniqueDeepDive: `<p>Notre intervention commence par une évaluation complète du parking : type de revêtement, système d'évacuation des eaux, contraintes d'accès et hauteur sous plafond. Nous analysons l'état des marquages, l'importance des taches d'huile et la configuration des rampes typiques des constructions récentes de Torcy. La préparation inclut un balayage mécanique des débris, le dégagement des zones de stockage sauvage et la mise en place d'une signalisation adaptée pour informer les résidents.</p>
<p>Le nettoyage s'effectue avec autolaveuse pour les surfaces planes et haute pression contrôlée pour les rampes et angles difficiles d'accès. Nous appliquons des dégraissants professionnels sur les taches d'hydrocarbures anciennes et gérons rigoureusement les eaux de lavage selon la réglementation. L'intervention est organisée par zones successives pour maintenir un accès permanent aux véhicules, généralement programmée en matinée pour limiter la gêne. Nous recommandons un décrassage complet une à deux fois par an selon l'intensité d'usage.</p>`,

      specificChallenges: [
        "Encrassement accéléré des parkings situés près des grands axes routiers A4 et A104, avec particules de combustion et résidus d'hydrocarbures fortement adhérents.",
        "Rampes d'accès étroites et contraintes de hauteur dans les résidences contemporaines, nécessitant un matériel compact et maniable.",
        "Faible ventilation de certains parkings souterrains du secteur ville nouvelle, qui peut prolonger les temps de séchage et demande une organisation adaptée.",
        "Sols en pente douce vers des évacuations centrales imposant une gestion précise du ruissellement des eaux de lavage pour éviter les débordements."
      ],

      faqAdditions: [
        {
          question: "Pourquoi les parkings de Torcy s'encrassent-ils si rapidement ?",
          answer: "La proximité des axes A4 et A104 génère des retombées importantes de particules de combustion qui se mélangent aux résidus d'huile moteur. Le trafic quotidien intensif lié à la desserte RER accentue l'usure des revêtements, et les parkings fermés retiennent ces polluants qui se déposent progressivement sur toutes les surfaces."
        },
        {
          question: "Faut-il vider complètement le parking pendant l'intervention ?",
          answer: "Nous organisons le nettoyage par zones successives pour maintenir l'accès aux véhicules des résidents. Une rotation simple permet de traiter la moitié du parking puis l'autre, sur des créneaux définis avec le syndic. Seuls quelques emplacements périmétriques sont temporairement inaccessibles."
        },
        {
          question: "Pouvez-vous éliminer les taches d'huile anciennes et incrustées ?",
          answer: "Notre méthode permet d'atténuer significativement la plupart des taches d'hydrocarbures grâce à des dégraissants professionnels et un temps de contact adapté. Les taches très anciennes peuvent laisser une légère trace résiduelle selon la porosité du béton, mais l'aspect général est nettement amélioré."
        },
        {
          question: "Comment gérez-vous l'évacuation des eaux de lavage ?",
          answer: "Nous vérifions la conformité du système d'évacuation et respectons la réglementation sur les eaux usées chargées en hydrocarbures. Les eaux de lavage sont dirigées vers les siphons existants ou récupérées par aspiration, avec des produits biodégradables agréés. Un certificat de conformité peut être fourni sur demande."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS / TERRASSES
    // =========================
    {
      serviceKey: "balcons",
      heroDescription: "Retrouvez le plaisir d'utiliser votre balcon ou terrasse à Torcy grâce à un nettoyage professionnel qui élimine mousses, dépôts et salissures accumulées.",
      whyUsBullets: [
        "Connaissance des typologies de balcons des résidences récentes et immeubles anciens de Torcy.",
        "Techniques adaptées aux différents revêtements et aux contraintes d'exposition aux étangs environnants.",
        "Intervention discrète respectant le voisinage et planifiée selon vos disponibilités personnelles.",
        "Conseils d'entretien personnalisés pour préserver durablement la propreté de votre espace extérieur."
      ],

      uniqueIntro: `<p>Les balcons et terrasses des appartements de Torcy subissent un encrassement constant lié à l'exposition aux particules issues du trafic des axes A4 et A104, ainsi qu'aux dépôts organiques favorisés par l'humidité des étangs de Maubuée. Entre les joints noircis, les traces verdâtres de mousses et d'algues, les résidus de barbecue et l'accumulation de poussière urbaine, ces espaces extérieurs perdent rapidement leur attrait.</p>
<p>Les résidents des copropriétés récentes du secteur Arche-Guédon comme ceux du vieux Torcy se retrouvent avec des balcons qu'ils évitent d'utiliser, devenus peu accueillants et donnant une impression de négligence. Un nettoyage professionnel redonne vie à ces espaces extérieurs et permet de les réinvestir pleinement pour les moments de détente.</p>`,

      uniqueDeepDive: `<p>L'intervention commence par la protection soigneuse de la porte-fenêtre, des menuiseries et des éventuels murs adjacents à l'aide de bâches adaptées. Nous déplaçons ou protégeons le mobilier, les plantes en pot et tous les objets présents pour accéder à l'ensemble des surfaces à traiter. Un enlèvement manuel préalable élimine les gros dépôts : feuilles mortes, terre accumulée dans les coins, résidus de jardinières et déchets divers.</p>
<p>Le nettoyage proprement dit s'adapte au type de revêtement identifié avec application de produits spécifiques, brossage manuel des zones encrassées et rinçage contrôlé. Nous nettoyons également le garde-corps, les vitreries de protection et les murs mitoyens. La gestion de l'eau est rigoureuse, avec orientation du ruissellement vers l'évacuation prévue et utilisation de raclettes et chiffons absorbants pour éviter toute coulure le long de la façade ou chez les voisins du dessous.</p>`,

      specificChallenges: [
        "Exposition aux embruns humides des étangs de Maubuée qui favorise le développement rapide de mousses et d'algues sur les surfaces carrelées et dans les joints.",
        "Mélange de particules fines issues du trafic routier des grands axes avec cette humidité, créant des dépôts adhérents difficiles à éliminer.",
        "Configuration en étages des résidences imposant une gestion précise de l'écoulement des eaux de lavage pour éviter les nuisances aux voisins inférieurs.",
        "Garde-corps à barreaudage complexe des programmes récents nécessitant un nettoyage minutieux des dépôts accumulés dans les interstices."
      ],

      faqAdditions: [
        {
          question: "Le nettoyage à haute pression risque-t-il d'endommager mon carrelage ou mes joints ?",
          answer: "Nous adaptons systématiquement la pression selon le type de revêtement et l'état des joints. Sur les surfaces fragiles, nous privilégions le brossage manuel avec produits adaptés. Un diagnostic préalable nous permet d'identifier les zones sensibles et d'ajuster notre méthode pour garantir un nettoyage efficace sans dégradation."
        },
        {
          question: "Comment évitez-vous que l'eau coule chez les voisins du dessous ?",
          answer: "Nous dirigeons systématiquement l'eau vers l'évacuation prévue et utilisons des raclettes pour contrôler le ruissellement. Des chiffons absorbants sont disposés en périphérie pour intercepter toute coulure potentielle le long de la façade. Nous travaillons par petites zones pour maîtriser le volume d'eau utilisé."
        },
        {
          question: "Les produits utilisés sont-ils dangereux pour mes plantes ou animaux domestiques ?",
          answer: "Nous utilisons des produits de nettoyage professionnels biodégradables, sans danger pour la végétation une fois dilués et rincés. Vos plantes sont protégées pendant l'intervention, et pour les animaux domestiques nous recommandons de les maintenir à l'intérieur pendant le traitement et le séchage."
        },
        {
          question: "Combien de temps faut-il attendre avant de pouvoir réutiliser le balcon ?",
          answer: "Le délai de séchage varie entre 4 et 6 heures selon les conditions météorologiques et le type de revêtement. Nous intervenons de préférence le matin pour que vous puissiez profiter de votre balcon dès l'après-midi et vous donnons une estimation en fin d'intervention."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Retrouvez un balcon sain et désinfecté à Torcy grâce à un traitement professionnel sécurisé qui élimine fientes, odeurs et risques sanitaires liés aux pigeons.",
      whyUsBullets: [
        "Certification Certibiocide et connaissance des zones à risque pigeons du secteur de Torcy.",
        "Protocole de décontamination conforme avec équipements de protection individuelle professionnels.",
        "Intervention discrète respectant les horaires et la sensibilité du voisinage aux nuisances olfactives.",
        "Traçabilité complète de l'élimination des déchets biologiques et possibilité de certificat de décontamination."
      ],

      uniqueIntro: `<p>Les balcons des appartements de Torcy subissent fréquemment des invasions de pigeons attirés par la proximité des étangs de Maubuée et les nombreux espaces verts de la ville nouvelle. Les fientes s'accumulent rapidement sur le carrelage, les garde-corps et les murs, dégageant des odeurs nauséabondes et rendant l'espace totalement inutilisable.</p>
<p>Cette situation génère un inconfort majeur pour les résidents, des inquiétudes concernant les risques sanitaires et parfois des tensions avec le voisinage ou la copropriété. Les immeubles du secteur Arche-Guédon et les résidences récentes offrent de nombreux recoins propices à la nidification des pigeons. Un traitement professionnel sécurisé s'impose pour décontaminer efficacement l'espace et permettre aux occupants de retrouver l'usage de leur balcon en toute sécurité.</p>`,

      uniqueDeepDive: `<p>Notre intervention respecte un protocole strict de décontamination biologique. Nos techniciens s'équipent d'EPI complets : combinaison étanche, gants renforcés, masque respiratoire FFP2 et lunettes de protection. L'espace est sécurisé par des bâches pour éviter la dispersion des contaminants vers l'intérieur du logement et les balcons adjacents. Une humidification préalable des fientes sèches empêche la formation de poussières potentiellement dangereuses lors du ramassage.</p>
<p>Les fientes, nids et débris organiques sont collectés manuellement et conditionnés dans des sacs étanches spécialement conçus pour les déchets biologiques contaminés. Le nettoyage complet des surfaces s'effectue avec des produits adaptés, suivi d'une désinfection obligatoire avec un virucide et bactéricide homologué. Le temps de contact du désinfectant est scrupuleusement respecté avant rinçage final, puis les déchets sont évacués via une filière spécialisée agréée.</p>`,

      specificChallenges: [
        "Balcons des étages supérieurs du secteur étangs particulièrement exposés en raison de la proximité des zones humides attractives pour les pigeons.",
        "Accès en hauteur pour le nettoyage des garde-corps et façades souillées nécessitant des équipements de protection contre les chutes et une coordination précise.",
        "Fientes anciennes pouvant avoir corrodé certains supports métalliques et joints, imposant un traitement adapté pour éviter l'aggravation des dégâts.",
        "Gestion des déchets contaminés imposant un conditionnement étanche et une évacuation par filière spécialisée, sans mélange avec les déchets ménagers classiques."
      ],

      faqAdditions: [
        {
          question: "Puis-je nettoyer moi-même les fientes de pigeons sur mon balcon ?",
          answer: "Le nettoyage des fientes de pigeons présente des risques sanitaires réels qui nécessitent des précautions professionnelles. La manipulation sans équipement adapté peut disperser des micro-organismes pathogènes par voie respiratoire ou cutanée. Notre certification Certibiocide garantit le respect des protocoles de sécurité et l'utilisation de produits homologués."
        },
        {
          question: "Les produits de désinfection sont-ils dangereux après séchage ?",
          answer: "Les produits virucides et bactéricides que nous utilisons sont homologués pour un usage en habitat une fois correctement rincés et séchés. Le délai de 24 heures que nous recommandons permet l'évaporation complète des résidus et garantit une réutilisation sans risque, y compris pour les enfants et les animaux domestiques."
        },
        {
          question: "Les fientes peuvent-elles avoir abîmé mon balcon de façon irréversible ?",
          answer: "L'acidité des fientes de pigeons peut attaquer certains supports lors d'une exposition prolongée. Notre diagnostic initial évalue l'étendue des dégâts et nous adaptons notre traitement pour limiter l'aggravation. Dans la plupart des cas, un nettoyage professionnel redonne un aspect satisfaisant même si quelques traces peuvent subsister sur les zones les plus dégradées."
        },
        {
          question: "Que deviennent les fientes et nids collectés ?",
          answer: "Tous les déchets biologiques contaminés sont conditionnés dans des sacs étanches spéciaux et évacués via une filière d'élimination agréée. Ils sont traités par incinération haute température qui détruit totalement les agents pathogènes, sans passage par les ordures ménagères classiques."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Redonnez vie à vos canapés, tapis et matelas à Torcy grâce à un nettoyage à domicile qui élimine taches, acariens et odeurs tenaces.",
      whyUsBullets: [
        "Connaissance des contraintes domestiques des logements familiaux du secteur de Torcy.",
        "Matériel portable adapté aux textiles fragiles et techniques d'extraction efficaces contre les allergènes.",
        "Intervention flexible en journée selon vos disponibilités avec organisation respectueuse du foyer.",
        "Conseils personnalisés d'entretien pour préserver durablement la propreté de vos textiles."
      ],

      uniqueIntro: `<p>Dans les logements de Torcy, canapés et tapis subissent quotidiennement les aléas de la vie familiale : enfants qui jouent, animaux de compagnie, repas devant la télévision et réceptions entre amis. Les taches s'accumulent progressivement, les fibres se chargent de poussière et d'allergènes, tandis que des odeurs persistantes s'installent malgré l'entretien régulier.</p>
<p>Les matelas ne sont pas épargnés avec la transpiration nocturne, les acariens et les incidents du quotidien. Cette situation génère un inconfort croissant, des allergies possibles pour les personnes sensibles et une impression de saleté persistante malgré les efforts d'entretien. Un nettoyage professionnel à domicile restaure l'hygiène et l'aspect d'origine de ces éléments centraux du mobilier.</p>`,

      uniqueDeepDive: `<p>Notre intervention à domicile débute par un diagnostic précis du type de textile et l'identification des taches présentes. Nous adaptons notre méthode selon la fragilité du support et procédons à un pré-traitement ciblé des taches tenaces avec des produits enzymatiques pour les souillures organiques et des détachants spécialisés selon la nature des salissures. Le nettoyage principal s'effectue par injection-extraction à l'eau avec aspiration immédiate des eaux sales, technique qui préserve les fibres tout en éliminant les salissures incrustées.</p>
<p>L'intervention respecte les contraintes de votre logement : accès facilité, niveau sonore raisonnable et organisation pour limiter la perturbation de votre quotidien. Nous gérons attentivement le séchage par extraction maximale de l'humidité et prodiguons des conseils d'aération selon la configuration de vos pièces. Les textiles retrouvent leur souplesse d'origine et leur confort, avec des recommandations d'entretien pour prolonger le résultat.</p>`,

      specificChallenges: [
        "Mode de vie familial des résidences de Torcy générant un encrassement diversifié, avec de nombreuses taches organiques et allergènes domestiques.",
        "Humidité hivernale des logements parfois peu ventilés favorisant le développement d'acariens dans les textiles épais et ralentissant le séchage.",
        "Odeurs d'animaux domestiques très répandus dans les pavillons et appartements familiaux, s'incrustant profondément dans les fibres.",
        "Tissus délicats des canapés contemporains nécessitant une maîtrise technique pointue pour éviter toute décoloration ou rétrécissement."
      ],

      faqAdditions: [
        {
          question: "Votre nettoyage élimine-t-il efficacement les acariens et allergènes ?",
          answer: "Notre méthode d'injection-extraction à eau chaude élimine la très grande majorité des acariens, de leurs déjections et des allergènes accumulés dans les fibres. Cette action mécanique combinée aux produits utilisés réduit significativement la charge allergénique de vos textiles, avec une efficacité renforcée par un entretien préventif régulier."
        },
        {
          question: "Pouvez-vous traiter les taches d'urine et les odeurs tenaces d'animaux ?",
          answer: "Nous utilisons des produits enzymatiques spécialement formulés pour décomposer les protéines de l'urine et éliminer durablement les odeurs organiques. Ces enzymes agissent en profondeur même sur les taches anciennes. Selon l'ancienneté et la nature du tissu, une légère trace visuelle peut persister, mais le confort olfactif est fortement amélioré."
        },
        {
          question: "Combien de temps faut-il pour que canapés et tapis sèchent complètement ?",
          answer: "Le séchage varie entre 4 et 8 heures selon l'épaisseur du textile, l'humidité ambiante et l'aération de la pièce. Nous extrayons un maximum d'humidité pendant l'intervention et vous donnons des conseils précis d'aération. En pratique, vos canapés et tapis sont généralement utilisables dès le lendemain matin."
        },
        {
          question: "Que dois-je préparer avant votre intervention à domicile ?",
          answer: "Libérez l'accès aux textiles à traiter en déplaçant les objets posés dessus et en dégageant un passage pour notre matériel. Pour les tapis, un passage d'aspirateur préalable est idéal. Nous nous occupons de la protection des sols et meubles environnants et nous adaptons à la configuration de votre logement."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;
