import type { City } from '~/types/geo';

const neuillySurMarne: City = {
  name: 'Neuilly-sur-Marne',
  slug: 'neuilly-sur-marne',
  postalCodes: ['93330'],

  customDescription:
    'Ville résidentielle de Seine-Saint-Denis nécessitant un entretien régulier de ses copropriétés et espaces collectifs.',

  department: {
    name: 'Seine-Saint-Denis',
    code: '93',
    slug: 'seine-saint-denis',
  },

  districts: [
    'Centre-ville',
    'Les Fauvettes',
    'Plaisance',
    'Bords de Marne',
    'Plateau',
    'Mairie',
  ],

  nearbyCities: [
    'torcy',
    'chelles',
    'noisy-le-grand',
    'gournay-sur-marne',
    'bry-sur-marne',
    'montfermeil',
  ],

  ctaOverride: '',

  landmarks: [
    'Mairie de Neuilly-sur-Marne',
    'Gare RER A Neuilly-Plaisance',
    'Parc du Croissant Vert',
    'EPS Ville-Evrard',
    'Hôtel de Ville',
    'Bords de Marne',
  ],

  specificChallenges: [
    'Copropriétés récentes avec revêtements techniques à préserver lors des nettoyages.',
    'Parkings souterrains où la ventilation et les réseaux apparents doivent être protégés.',
    'Balcons exposés aux dépôts naturels des espaces verts proches des Bords de Marne ou aux fientes de pigeons.',
    'Immeubles familiaux avec de la moquette dans les parties communes et qui sont très fréquentés.',
    'Résidences pavillonnaires avec terrasses sujettes aux salissures liées aux intempéries.',
  ],

  whyUsBullets: [
    "Nous adaptons nos interventions aux maisons familiales et aux immeubles récents du centre et des bords de Marne, où les conditions de circulation sont souvent difficiles.",
    "Nous maîtrisons le nettoyage des balcons exposés aux poussières et aux salissures provenant des axes passants ou des espaces arborés de Neuilly-sur-Marne.",
    "Nous intervenons efficacement dans les parkings collectifs et boxes privatifs, avec un matériel adapté à ce genre de chantier.",
    "Nous tenons compte des contraintes d’accès fréquentes dans les résidences neuves : ascenseurs compacts, rampes serrées, zones de stationnement limitées.",
    "Nous proposons des créneaux flexibles pour s’adapter au rythme des familles, des gardiens et des gestionnaires de copropriétés de Neuilly-sur-Marne.",
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },

  faq: [
    {
      question: 'Comment se déroule une intervention de nettoyage à Neuilly-sur-Marne ?',
      answer:
        'Nous commençons par un état des lieux pour identifier les accès et les zones sensibles. Une fois les horaires validés avec vous ou avec le syndic, nos équipes interviennent avec du matériel adapté aux copropriétés de Neuilly-sur-Marne. Les protocoles visent à limiter les nuisances, notamment dans les halls, couloirs ou parkings. À la fin, un retour de prestation ou un simple compte rendu peut être transmis selon vos besoins.',
    },
    {
  question: 'Faut-il préparer quelque chose avant votre venue à Neuilly-sur-Marne ?',
  answer:
    'Ce n’est pas indispensable, mais quelques gestes simples peuvent faciliter notre intervention. Par exemple, libérer un peu l’espace autour des zones à traiter, vérifier les accès (codes, clés, interphone), ou informer les résidents concernés si besoin. Si une préparation spécifique est nécessaire, nous vous l’indiquons toujours en amont.',
},
    {
      question: 'Intervenez-vous plutôt en journée, le soir ou le week-end à Neuilly-sur-Marne ?',
      answer:
        'Nous adaptons nos horaires aux contraintes des copropriétés de Neuilly-sur-Marne. Les interventions se font principalement en journée, mais nous pouvons aussi intervenir en soirée ou le week-end lorsque cela facilite l’accès ou réduit la gêne pour les occupants. Chaque prestation est programmée selon le type de nettoyage et votre disponibilité.',
    },
    {
  question: 'Comment vous contacter après l’intervention si j’ai une question ou un besoin complémentaire ?',
  answer:
    'Vous pouvez nous joindre facilement par téléphone ou par e-mail. Nous assurons un suivi après chaque intervention, et restons disponibles pour répondre à vos questions, ajuster une prestation si besoin, ou planifier une nouvelle intervention. Chez nous, le contact ne s’arrête pas une fois le chantier terminé.',
},

  ],

  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `<p>Certaines copropriétés de Neuilly-sur-Marne ont des parties communes moquettées, que ce soient les immeubles récents du centre-ville et des Fauvettes ou les résidences familiales plus anciennes. Ces zones de passage requièrent un entretien régulier pour préserver l’hygiène et leur aspect d’origine.</p><ul><li>Halls d’entrée et paliers très fréquentés</li><li>Couloirs des résidences familiales</li><li>Escaliers moquettés dans les immeubles récents</li><li>Bureaux et petites structures tertiaires locales</li></ul><p>Les interventions sont discrètes et organisées pour limiter les dérangements aux résidents.</p>`,
      uniqueDeepDive: `<p>L’accès aux immeubles se fait généralement via digicode ou badge, nécessitant une organisation en amont avec le syndic. Notre matériel compact passe dans tous les ascenseurs standard des copropriétés de Neuilly-sur-Marne.</p><p><strong>Protocole d'intervention :</strong></p><ul><li>Protection des plinthes et surfaces sensibles</li><li>Nettoyage par injection-extraction à pression contrôlée</li><li>Produits neutres adaptés aux zones partagées</li><li>Séchage accéléré via ventilation mobile</li></ul><p>Les interventions sont souvent planifiées en matinée pour garantir un séchage optimal avant les retours des occupants.</p>`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `<p>Neuilly-sur-Marne compte de nombreux parkings souterrains appartenant à des résidences récentes ou plus anciennes. Ces espaces accumulent poussières, traces de pneus et taches d'huile qu'il faut traiter régulièrement pour maintenir un environnement sain et sécurisant.</p><ul><li>Sous-sols résidentiels</li><li>Rampes d’accès à revêtement sensible</li><li>Zones piétonnes et accès aux ascenseurs</li><li>Locaux techniques adjacents</li></ul>`,
      uniqueDeepDive: `<p>Avant l’intervention, nous vérifions la configuration du parking, la circulation d’air et les contraintes de voisinage. Les opérations se font par zones pour maintenir l’accès aux véhicules.</p><p><strong>Équipements et méthodes :</strong></p><ul><li>Balayage mécanique des poussières</li><li>Traitement ciblé des taches d’hydrocarbures</li><li>Lavage à l'autolaveuse</li><li>Aspiration des eaux résiduelles pour limiter l’humidité</li></ul><p>Nous privilégions les créneaux où les places sont moins occupées afin de fluidifier l’intervention.</p>`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `<p>Les appartements de Neuilly-sur-Marne disposent souvent de balcons avec des revêtements variés. L’exposition aux intempéries et la proximité d’espaces verts entraînent des dépôts naturels qu’il faut retirer régulièrement.</p><ul><li>Carrelage et dalles extérieures</li><li>Garde-corps aluminium ou PVC</li><li>Balcons étroits des immeubles récents</li></ul><p>Les interventions visent à nettoyer sans altérer les matériaux ni gêner les voisins immédiats.</p>`,
      uniqueDeepDive: `<p>L’accès se fait exclusivement via l’appartement, avec protections adaptées pour les sols intérieurs. Nous évacuons les eaux usées de façon maîtrisée.</p><p><strong>Méthode de nettoyage :</strong></p><ul><li>Dépoussiérage manuel ou mécanique et enlèvement des encombrants</li><li>Nettoyage doux des sols et joints</li><li>Lavage des garde-corps</li><li>Débouchage des évacuations pluviales si nécessaire</li></ul><p>Les créneaux sont souvent planifiés selon la météo et la disponibilité des occupants.</p>`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `<p>La proximité des Bords de Marne favorise la présence d’oiseaux, entraînant des dépôts de fientes sur les balcons, rebords ou petites corniches. Ces salissures nécessitent un nettoyage précis et une désinfection adaptée.</p><ul><li>Balcons en étages élevés</li><li>Rebords de fenêtres</li><li>Petits auvents et avancées</li><li>Zones exposées aux dépôts organiques</li></ul>`,
      uniqueDeepDive: `<p>Le nettoyage se déroule selon un protocole sanitaire strict, avec équipements individuels adaptés et produits homologués.</p><p><strong>Étapes d’intervention :</strong></p><ul><li>Humidification préalable pour limiter les poussières</li><li>Retrait manuel des dépôts et nettoyage de toutes les surfaces avec un détergent adapté</li><li>Désinfection complète des surfaces</li><li>Rinçage maîtrisé et gestion des effluents</li></ul><p>L’intervention est coordonnée avec les résidents pour limiter les nuisances ponctuelles.</p>`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `<p>Les logements de Neuilly-sur-Marne comportent souvent des canapés et tapis de qualité nécessitant un entretien régulier. Les textiles accumulent rapidement poussières, allergènes et taches du quotidien.</p><ul><li>Canapés en tissu ou microfibre</li><li>Tapis de salon en fibres délicates</li><li>Textiles d’ameublement variés</li><li>Mobilier exposé aux allergènes domestiques</li></ul>`,
      uniqueDeepDive: `<p>Nous intervenons directement à domicile avec un matériel portable et discret. Les sols sont protégés et l’aération naturelle est privilégiée pour accélérer le séchage.</p><p><strong>Techniques utilisées :</strong></p><ul><li>Injection-extraction basse pression</li><li>Nettoyage doux pour textiles sensibles</li><li>Aspiration HEPA pour allergènes</li><li>Traitement ciblé des taches tenaces</li></ul><p>L’utilisation normale du mobilier peut reprendre après un temps de séchage raisonnable.</p>`,
    },
  ],
};

export default neuillySurMarne;
