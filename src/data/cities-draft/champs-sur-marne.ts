import type { City } from '~/types/geo';

const champsSurMarne: City = {
  name: 'Champs-sur-Marne',
  slug: 'champs-sur-marne',
  postalCodes: ['77420'],

  customDescription:
    "À Champs-sur-Marne, nous aidons syndics, étudiants et familles à garder moquettes, balcons, canapés et parkings propres dans les résidences et campus alentour.",

  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne',
  },

  districts: [
    'Centre-ville',
    'Cité Descartes',
    'Le Luzard',
    'Les Deux Parcs',
    'Les Tilleuls',
    'Les Portes de Champs',
  ],

  nearbyCities: [
    'noisiel',
    'torcy',
    'lognes',
    'emerainville',
    'croissy-beaubourg',
    'chelles',
  ],

  ctaOverride: '',

  landmarks: [
    'Château de Champs-sur-Marne',
    'Cité Descartes',
    'Gare RER A Noisy–Champs',
    'Mairie de Champs-sur-Marne',
    'Campus universitaire Paris-Est',
  ],

  specificChallenges: [
    "Forte présence de résidences étudiantes et de logements locatifs, avec un turnover important dans les parties communes (moquettes de paliers, escaliers, couloirs).",
    "Immeubles des années 70–90 avec locaux techniques, caves et parkings à accès parfois étroit, qui imposent un matériel compact et facilement transportable.",
    "Balcons et terrasses exposés aux dépôts de poussière et aux traces de pollution, surtout à proximité des axes routiers et des parkings de résidence.",
    "Parkings souterrains ou aériens partagés entre résidences et bureaux, à nettoyer sans gêner les entrées/sorties des véhicules.",
    "Présence de nombreux bâtiments en cascade et dénivelés autour de la Cité Descartes, avec écoulements d’eau à maîtriser pour éviter les nuisances chez les voisins.",
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  faq: [
    {
      question: "Comment se déroule une intervention de nettoyage à Champs-sur-Marne ?",
      answer: `<p>À Champs-sur-Marne, nous commençons par repérer les accès (parkings, halls, locaux techniques, escaliers) et valider avec le syndic ou l’occupant les zones à traiter. Nous protégeons les surfaces sensibles avant de lancer le nettoyage (paliers, ascenseurs, vitrages).</p>
<p>En fin d’intervention, un contrôle rapide est réalisé avec le référent sur place pour vérifier le résultat et, si besoin, planifier un entretien régulier des zones les plus sollicitées.</p>`,
    },
    {
      question: "Faut-il préparer quelque chose avant votre venue à Champs-sur-Marne ?",
      answer: `<p>Ce n’est pas obligatoire, mais dégager les balcons, libérer quelques places dans les parkings ou signaler les zones prioritaires facilite notre travail. Pour les canapés et tapis, retirer les petits objets au sol ou sur l’assise suffit en général.</p>
<p>Pour les parties communes, il est utile que le gardien ou le syndic ait informé les résidents quand certaines zones doivent être temporairement inaccessibles pendant le nettoyage.</p>`,
    },
    {
      question: "Intervenez-vous le soir ou le week-end à Champs-sur-Marne ?",
      answer: `<p>Oui, lorsque c’est nécessaire. Les copropriétés, résidences étudiantes et parkings partagés préfèrent souvent des horaires décalés (tôt le matin, fin de journée ou samedi) pour limiter la gêne.</p>
<p>Nous définissons les créneaux au cas par cas, en fonction des contraintes de circulation, des entrées de parking et des horaires de vie de l’immeuble.</p>`,
    },
  ],

  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `
<p>À Champs-sur-Marne, les moquettes concernent surtout les paliers et couloirs d’immeubles, les résidences étudiantes et certains bureaux autour de la Cité Descartes. Elles subissent un passage important, des taches de boissons, de nourriture et de boue les jours de pluie.</p>
<p>Sans entretien régulier, les fibres se ternissent, les auréoles se multiplient et les poussières fines se dispersent dans les logements. Un nettoyage professionnel permet de retrouver un sol plus sain et plus homogène.</p>
      `,
      uniqueDeepDive: `
<p>Nous commençons par une aspiration en profondeur avec du matériel professionnel, pour retirer poussières, sables et résidus secs. Ensuite, selon l’état des moquettes et les contraintes horaires, nous utilisons soit une méthode basse humidité, soit une injection–extraction maîtrisée.</p>
<p>Dans les résidences étudiantes, nous planifions souvent les interventions en périodes plus calmes (vacances, matinées) pour limiter la gêne. Les produits sont choisis pour être compatibles avec les environnements occupés et pour éviter les remontées d’odeurs ou les temps de séchage trop longs.</p>
      `,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `
<p>Les parkings de Champs-sur-Marne, qu’ils soient en sous-sol ou à ciel ouvert, accumulent poussières, traces de pneus, petites fuites d’huile et déchets en bordure de murs. C’est le cas des parkings de copropriétés, de résidences étudiantes et des zones proches des bureaux.</p>
<p>Un parking mal entretenu finit par salir les cages d’escalier et les logements, via les chaussures et les poussettes. Un décrassage régulier améliore la propreté générale du site.</p>
      `,
      uniqueDeepDive: `
<p>Nos interventions se déroulent par zones : balayage ou aspiration mécanique, application de dégraissant sur les taches d’huile, puis nettoyage à l’autolaveuse ou à la monobrosse selon l’accessibilité. Les pieds de murs et les zones piétonnes sont repris manuellement.</p>
<p>Nous planifions les créneaux en dehors des heures de forte circulation, avec affichage préalable si nécessaire. L’objectif : un sol plus propre, moins glissant, sans bloquer les entrées de parking plus longtemps que nécessaire.</p>
      `,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `
<p>Les balcons de Champs-sur-Marne servent souvent de petit espace extérieur : plantes, rangements, vélos, petites pauses au soleil. Ils se salissent vite avec les dépôts de poussière, les traces de pots de fleurs et les coulures d’arrosage.</p>
<p>Dans les résidences récentes comme dans les immeubles plus anciens, un nettoyage adapté permet de retrouver un sol propre sans abîmer les joints ni gêner les voisins du dessous.</p>
      `,
      uniqueDeepDive: `
<p>Nous commençons par retirer les salissures sèches (feuilles, terre, poussière), puis appliquons un détergent adapté au revêtement : grès, dalle béton, carrelage, résine. Le brossage se fait manuellement ou avec du petit matériel mécanique, puis un rinçage maîtrisé limite les écoulements.</p>
<p>Les garde-corps, seuils et vitrages sont repris pour éviter les traces. En fin d’intervention, nous vérifions les évacuations et la bonne dispersion des eaux, en particulier sur les balcons en enfilade.</p>
      `,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `
<p>Sur certains immeubles de Champs-sur-Marne, les fientes de pigeons s’accumulent sur les rebords de balcons et les sols, notamment près des toitures et des zones de repos des oiseaux. Ce type de salissure nécessite un traitement spécifique pour des raisons d’hygiène.</p>
<p>Nous intervenons avec un protocole encadré, pour protéger les occupants et éviter la dispersion des poussières contaminées.</p>
      `,
      uniqueDeepDive: `
<p>L’intervention se déroule en plusieurs étapes : sécurisation de la zone, pré-désinfection, enlèvement manuel des fientes et déchets, nettoyage approfondi du sol et des garde-corps, puis désinfection finale. Nous utilisons des équipements de protection individuelle adaptés et des produits désinfectants professionnels.</p>
<p>Les résidents sont informés de quelques précautions (éviter d’utiliser le balcon pendant un certain temps, ne pas balayer à sec avant notre passage). Si besoin, nous pouvons fournir un court rapport photo pour le syndic.</p>
      `,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `
<p>À Champs-sur-Marne, les canapés et tapis des appartements familiaux ou étudiants sont très sollicités : repas devant la télévision, traces de chaussures, animaux, taches de boissons. Les textiles finissent par ternir et retenir les odeurs.</p>
<p>Un nettoyage professionnel permet de prolonger la durée de vie des tissus tout en améliorant le confort au quotidien.</p>
      `,
      uniqueDeepDive: `
<p>Nous commençons par un diagnostic du tissu (microfibre, coton, mélange synthétique, laine…) et des taches présentes. Un pré-traitement ciblé est appliqué sur les zones les plus marquées, puis nous procédons à un nettoyage par injection–extraction ou par basse humidité selon le support.</p>
<p>Le séchage est accéléré par une bonne circulation d’air et, si besoin, des turbines de séchage. En fin d’intervention, nous donnons des conseils pratiques pour limiter le retour rapide des taches et garder les textiles plus propres plus longtemps.</p>
      `,
    },
  ],
};

export default champsSurMarne;
