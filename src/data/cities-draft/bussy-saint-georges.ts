import type { City } from '~/types/geo';

const bussySaintGeorges: City = {
  name: 'Bussy-Saint-Georges',
  slug: 'bussy-saint-georges',
  postalCodes: ['77600'],

  customDescription:
    "À Bussy-Saint-Georges, nous aidons les familles et copropriétés à garder moquettes, balcons, parkings et canapés propres et faciles à vivre au quotidien.",

  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne',
  },

  districts: [
    'Centre-ville',
    'Les Hauts de Bussy',
    'Le Clos de la Montagne',
    'Les Terrasses de Bussy',
    'La Ferme de Montargis',
  ],

  nearbyCities: [
    'torcy',
    'noisiel',
    'guermantes',
    'chessy',
    'pontault-combault',
  ],

  ctaOverride: '',

  landmarks: [
    'Gare RER A de Bussy-Saint-Georges',
    'Parc du Génitoy',
    'Lac de Bussy',
    'Mairie de Bussy-Saint-Georges',
  ],

  specificChallenges: [
    "Nombreuses résidences récentes avec parkings souterrains et halls moquettés, soumis à un trafic important matin et soir.",
    "Balcons et terrasses de taille moyenne, souvent très utilisés (plantes, rangements, tables) et exposés aux dépôts de poussière et aux traces d’arrosage.",
    "Présence de box fermés et de rampes de parkings en pente, qui imposent un matériel compact et une gestion attentive des eaux de lavage.",
    "Tissus d’ameublement très sollicités dans les logements familiaux (canapés, tapis) avec taches alimentaires, traces de chaussures et poils d’animaux.",
    "Contraintes horaires des résidences et de la gare RER à proximité, qui nécessitent de programmer les interventions aux bons créneaux pour limiter la gêne.",
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },

  faq: [
    {
      question: 'Comment se déroule une intervention de nettoyage à Bussy-Saint-Georges ?',
      answer: `<p>À Bussy-Saint-Georges, nous commençons toujours par un repérage des accès (parkings, halls, escaliers, balcons) et un échange rapide avec le client ou le syndic pour valider les zones à traiter.</p>
<p>Nous protégeons ensuite les surfaces sensibles avant le nettoyage (angles de murs, portes, vitres). En fin d’intervention, un contrôle est réalisé avec l’occupant ou le référent pour vérifier le résultat et, si besoin, prévoir un entretien régulier des zones les plus exposées.</p>`,
    },
    {
      question: 'Faut-il préparer quelque chose avant votre venue à Bussy-Saint-Georges ?',
      answer: `<p>Ce n’est pas obligatoire. Pour les balcons, libérer un peu d’espace (pots, petits meubles) nous permet d’accéder correctement aux angles et aux garde-corps. Pour les moquettes, tapis et canapés, retirer les objets fragiles au sol ou sur l’assise est suffisant.</p>
<p>Dans les parkings, prévenir les résidents ou libérer quelques places est un plus, mais nous savons aussi nous organiser en travaillant par zones lorsqu’il est difficile de tout dégager.</p>`,
    },
    {
      question: 'Intervenez-vous plutôt en journée, le soir ou le week-end à Bussy-Saint-Georges ?',
      answer: `<p>La majorité de nos interventions se fait en semaine en journée, mais nous pouvons aussi intervenir tôt le matin, en fin de journée ou le samedi lorsque c’est nécessaire (parkings, halls d’immeuble, locaux proches de la gare).</p>
<p>Les horaires sont définis au cas par cas, en tenant compte du voisinage et des habitudes de la résidence pour limiter au maximum la gêne.</p>`,
    },
  ],

  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `<p>À Bussy-Saint-Georges, les moquettes se trouvent surtout dans les halls d’immeubles récents, les paliers et certains bureaux. Ces zones de passage voient défiler poussettes, chaussures mouillées, sacs de courses… Les fibres se ternissent vite et retiennent les poussières fines.</p>
<p>Un nettoyage professionnel régulier permet de retrouver un sol plus propre, plus homogène et plus agréable à l’œil pour les résidents et visiteurs.</p>`,
      uniqueDeepDive: `<p>Nous commençons par une aspiration en profondeur avec du matériel professionnel pour retirer poussières, sables et débris secs. Ensuite, selon l’état des moquettes et les contraintes du site, nous utilisons soit une méthode basse humidité, soit une injection–extraction maîtrisée.</p>
<p>Les zones de fort passage (entrée, sas, pieds d’ascenseurs) reçoivent un traitement plus intensif. Les produits sont choisis pour ne pas laisser de résidus collants et pour permettre un séchage rapide, de façon à rouvrir les circulations dans des délais raisonnables.</p>`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `<p>Les parkings souterrains et les rampes d’accès de Bussy-Saint-Georges accumulent poussières, traces de pneus, petites fuites d’huile et déchets en bord de murs. À terme, ces salissures se retrouvent dans les halls et les logements.</p>
<p>Un décrassage régulier améliore le confort des résidents, limite les sols glissants et donne une meilleure image des parties communes.</p>`,
      uniqueDeepDive: `<p>Nos interventions se déroulent zone par zone : balayage ou aspiration des poussières, application d’un dégraissant sur les taches marquées, puis nettoyage mécanisé ou manuel selon la configuration (autolaveuse, monobrosse, raclette).</p>
<p>Nous prêtons une attention particulière aux pieds de murs, aux zones de stationnement habituelles et aux accès piétons. Les créneaux sont planifiés en dehors des moments de forte circulation pour limiter l’impact sur les résidents.</p>`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `<p>Les balcons des immeubles de Bussy-Saint-Georges sont souvent utilisés comme petites terrasses : plantes, rangements, vélo d’enfant… Ils se salissent vite avec les dépôts de poussière, les traces d’arrosage et les taches du quotidien.</p>
<p>Un nettoyage adapté permet de retrouver un sol propre et des garde-corps nets, sans projections gênantes pour les voisins du dessous.</p>`,
      uniqueDeepDive: `<p>Nous commençons par retirer les salissures sèches (poussières, feuilles, petits débris), puis appliquons un détergent adapté au revêtement (dalles béton, carrelage, grès…). Le brossage se fait à la main ou avec du petit matériel mécanique, suivi d’un rinçage maîtrisé.</p>
<p>Les garde-corps et seuils de porte-fenêtre sont repris pour éviter les coulures et les traces visibles depuis la façade. Nous veillons à canaliser les eaux de lavage vers les évacuations prévues, sans les laisser ruisseler chez les voisins.</p>`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `<p>Sur certains immeubles de Bussy-Saint-Georges, les fientes de pigeons finissent par s’accumuler sur les rebords et les sols des balcons. Au-delà de l’aspect visuel, cela pose une question d’hygiène pour les occupants.</p>
<p>Ce type de salissure nécessite un protocole spécifique avec désinfection et protections adaptées.</p>`,
      uniqueDeepDive: `<p>Nous sécurisons d’abord la zone et portons des équipements de protection individuelle adaptés. Une phase de pré-désinfection est réalisée avant l’enlèvement des fientes et déchets. Les surfaces sont ensuite nettoyées en profondeur, puis traitées avec un désinfectant professionnel.</p>
<p>Nous donnons ensuite quelques consignes simples (ne pas balayer à sec, éviter de manipuler les résidus sans protection) et, si besoin, pouvons fournir un petit récapitulatif pour le syndic ou le propriétaire.</p>`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `<p>Dans les appartements de Bussy-Saint-Georges, les canapés et tapis sont très sollicités : vie de famille, enfants, animaux, repas dans le salon… Les taches et les odeurs s’installent progressivement, même lorsque le textile paraît encore “correct” visuellement.</p>
<p>Un nettoyage professionnel permet de repartir sur une base saine, en prolongeant la durée de vie des tissus.</p>`,
      uniqueDeepDive: `<p>L’intervention commence par un diagnostic du tissu (microfibre, coton, mélange synthétique, laine…) et des taches à traiter. Nous appliquons un pré-spray ciblé sur les zones les plus marquées, puis nettoyons par injection–extraction ou méthode basse humidité selon le support.</p>
<p>Le séchage est facilité par l’aération des pièces et, si nécessaire, par des ventilateurs. Nous laissons le mobilier en place, protégé, et donnons des conseils simples pour limiter le retour rapide des taches et garder un bon niveau d’hygiène au quotidien.</p>`,
    },
  ],
};

export default bussySaintGeorges;
