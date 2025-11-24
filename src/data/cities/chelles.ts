import type { City } from '~/types/geo';

const TEMPLATE_CITY: City = {
  name: 'Chelles',
  slug: 'chelles',
  postalCodes: ['77500'],

  customDescription: "À Chelles, nous aidons les familles à garder moquettes, balcons, canapés et tapis sains et propres dans les maisons et résidences familiales.",

  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne'
  },

  districts: [
    'Centre-ville – Résistance',
    'Bords de Marne',
    'Grande Prairie',
    'Abbesses',
    'Les Coudreaux',
    'Aulnoy',
    'Monts-Chalats'
  ],

  nearbyCities: [
    'vaires-sur-marne',
    'brou-sur-chantereine',
    'gournay-sur-marne',
    'noisy-le-grand',
    'courtry'
  ],

  ctaOverride: '',

  landmarks: [
    'Gare de Chelles-Gournay',
    'Centre commercial Terre-Ciel',
    'Parc du Souvenir Émile-Fouchard',
    'Canal de Chelles',
    'Île de loisirs de Vaires-Torcy'
  ],

  specificChallenges: [
    "Dans les pavillons proches des Coudreaux, les escaliers moquettés accumulent rapidement des poussières et traces de jardin, surtout en période humide.",
    "Autour du canal ou des Bords de Marne, l’humidité ambiante favorise les odeurs persistantes dans les textiles d’ameublement et les moquettes.",
    "Dans les résidences récentes de l’Aulnoy, les balcons sont très utilisés et souvent tachés par les arrosages, les jeux d’enfants ou les pots de fleurs.",
    "Les box privatifs du quartier Grande Prairie présentent souvent des traces d’huile ou des résidus poussiéreux, difficiles à entretenir sans matériel pro.",
    "Autour de la gare et du centre-ville, les canapés des familles avec enfants ou animaux sont souvent marqués par des taches et des poils incrustés."
  ],

  testimonial: {
    text: "Nous habitons près de la Marne, dans un pavillon des années 90. Les moquettes de l’étage étaient ternies par le temps et les escaliers prenaient la poussière à chaque passage. L’équipe a travaillé efficacement, sans odeur forte ni humidité excessive. On sent vraiment la différence au quotidien.",
    author: 'Sophie B.',
    role: 'Propriétaire',
    building: 'Maison individuelle, quartier Bords de Marne'
  },

  faq: [
    {
      question: "À quelle fréquence faut-il nettoyer les moquettes ou les tapis dans une maison à Chelles ?",
      answer: "À Chelles, nous recommandons un nettoyage en profondeur des moquettes et tapis tous les 12 à 18 mois, surtout dans les maisons avec enfants ou animaux. Dans les quartiers pavillonnaires comme les Coudreaux ou les Abbesses, les moquettes des chambres ou escaliers sont souvent soumises à un encrassement progressif (poussières, humidité, traces de jardin). Ce rythme permet de conserver une bonne hygiène, limiter les allergènes, et prolonger la durée de vie des fibres."
    },
    {
      question: "Comment se déroule une intervention typique dans une maison ou un appartement à Chelles ?",
      answer: "Après une première évaluation, nous intervenons avec un matériel silencieux et compact, adapté aux habitats chellois. Pour les moquettes ou canapés, le protocole comprend un prétraitement ciblé des taches, un nettoyage en profondeur maîtrisé en eau, puis un séchage naturel ou assisté si besoin. La durée varie de 1h30 à 3h selon les surfaces. À Chelles, de nombreuses interventions se font dans des résidences avec accès limité : nous nous adaptons à chaque configuration."
    },
    {
      question: "Faut-il préparer quelque chose avant notre venue ?",
      answer: "À Chelles comme ailleurs, un accès dégagé à la zone d’intervention facilite notre travail. Pour les balcons, il est utile de retirer les plantes ou objets fragiles. Pour les moquettes et tapis, un passage d’aspirateur est un plus, mais pas obligatoire. Nous protégeons les zones non traitées et intervenons avec des équipements propres. En cas de doute (présence d’animaux, taches anciennes), un simple échange en amont permet de mieux préparer l’intervention."
    }
  ],

  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `<p>À Chelles, les moquettes couvrent souvent les chambres à l’étage, les paliers ou les escaliers des maisons familiales. Ces surfaces sont particulièrement sensibles aux poussières fines et aux salissures liées aux allées et venues quotidiennes.</p><p>Dans les résidences modernes ou rénovées, les moquettes de halls ou de paliers ont besoin d’un entretien régulier pour éviter les taches incrustées ou les odeurs liées à l’humidité. Un nettoyage professionnel permet de retrouver un confort au sol, sans humidité résiduelle ni résidus irritants.</p><p>Nous intervenons dans tous les quartiers de Chelles, en nous adaptant aux contraintes d’accès ou de copropriété.</p>`,
      uniqueDeepDive: `<h3>Un protocole adapté aux moquettes du quotidien</h3><p>Nous commençons par une inspection rapide des surfaces à traiter, pour identifier les zones les plus encrassées, les taches visibles ou les éventuels risques (dégâts des eaux, moisissures anciennes).</p><p>Le nettoyage s’effectue par injection-extraction maîtrisée ou par méthode basse humidité selon les cas. Nous utilisons des produits non allergènes, efficaces contre les acariens et adaptés aux environnements familiaux.</p><p>Dans les escaliers ou paliers, nos outils compacts permettent un nettoyage soigné sans abîmer les angles ou les plinthes. En fin d’intervention, nous vérifions avec vous la qualité du résultat et vous donnons des conseils d’entretien adaptés à votre usage quotidien.</p>`
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `<p>À Chelles, de nombreux logements récents disposent de parkings en sous-sol ou de box individuels. Ces espaces, bien que peu visibles, accumulent souvent poussières, traces d’huile ou déchets en bord de murs.</p><p>Nous intervenons sur ces petites surfaces, avec un matériel professionnel capable de décoller les salissures sans endommager les revêtements. L’objectif : retrouver un sol propre, plus sain, et moins glissant.</p><p>Nos prestations s’adressent aussi bien aux particuliers qu’aux petits ensembles résidentiels.</p>`,
      uniqueDeepDive: `<h3>Intervention rapide sur parkings privés ou copro</h3><p>Un parking propre limite la propagation de poussières vers l’intérieur du logement. C’est aussi une sécurité en cas de sol glissant ou de fuite oubliée.</p><ul><li>Balayage mécanique ou manuel selon l’accessibilité</li><li>Dégraissage ciblé des zones tachées</li><li>Évacuation des résidus si besoin</li></ul><p>Nous intervenons souvent à Chelles dans les box de la Grande Prairie ou les petites résidences autour du centre-ville. Chaque prestation inclut un repérage préalable et des conseils d’entretien à long terme.</p>`
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `<p>À Chelles, les balcons sont souvent utilisés comme de véritables extensions de la maison : repas, plantes, vélos, jeux d’enfants. Mais ils se salissent vite à cause de l’arrosage, des dépôts de poussière ou des micro-végétations entre les dalles.</p><p>Nos interventions permettent de remettre en état ces espaces de vie sans détériorer les joints ni les sols fragiles. Nous adaptons nos méthodes selon les revêtements et la configuration (garde-corps, évacuation, étanchéité).</p><p>Dans chaque quartier, nous proposons un nettoyage respectueux de votre logement… et de vos voisins du dessous.</p>`,
      uniqueDeepDive: `<h3>Une remise en état soignée et discrète</h3><p>Nous utilisons des équipements basse pression ou vapeur, sans projections vers l’extérieur. Nos produits sont biodégradables et sans rinçage obligatoire.</p><p>Le protocole comprend :</p><ul><li>Protection des zones sensibles (portes-fenêtres, garde-corps)</li><li>Nettoyage du sol, des joints, et des bordures</li><li>Élimination des mousses, poussières ou taches organiques</li></ul><p>En fin d’intervention, les eaux sont évacuées de manière contrôlée, pour éviter tout écoulement chez les voisins. Un espace de vie sain, sans odeurs ni traces au sol.</p>`
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `<p>À Chelles, les balcons souillés par des fientes de pigeons posent des risques sanitaires importants. Ce type de salissure nécessite une intervention spécifique pour protéger les habitants, en particulier les jeunes enfants.</p><p>Nous intervenons dans tous les quartiers touchés, avec un protocole strict incluant désinfection, nettoyage en profondeur et précautions de sécurité. Le but : remettre en état sans risque pour votre santé ni pour le bâti.</p>`,
      uniqueDeepDive: `<h3>Un protocole rigoureux en 4 étapes</h3><ul><li>Préparation du chantier avec protection respiratoire, signalisation et équipement adapté</li><li>Enlèvement manuel des fientes et résidus solides</li><li>Nettoyage approfondi à l’eau chaude ou vapeur selon le sol</li><li>Désinfection fongicide/bactéricide et contrôle final visuel</li></ul><p>Ce type d’intervention est fréquent à Chelles, notamment autour du canal ou dans les résidences bordant les axes arborés. Un rapport photo peut être fourni à la demande pour vos assurances ou syndics.</p>`
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `<p>À Chelles, les canapés et tapis sont souvent soumis à rude épreuve : goûters, animaux, taches de boisson ou poussières fines. Ces textiles accumulent vite les salissures même quand ils paraissent propres en surface.</p><p>Notre protocole de nettoyage permet de restaurer un bon niveau d’hygiène, sans déformation ni détrempage des fibres. Nous intervenons aussi sur les matelas ou fauteuils en tissu.</p>`,
      uniqueDeepDive: `<h3>Nettoyage complet, du diagnostic au séchage</h3><p>Chaque intervention commence par un diagnostic rapide : tissu, taches, risques de décoloration. Nous appliquons ensuite un prétraitement localisé avant un nettoyage par injection/extraction ou méthode sèche.</p><p>Les produits utilisés à Chelles sont choisis pour leur compatibilité avec les environnements familiaux. Aucun parfum artificiel, pas de résidus gras.</p><ul><li>Nettoyage sur place, sans démontage</li><li>Temps de séchage rapide (souvent 4–6 h)</li><li>Conseils d’entretien après notre passage</li></ul><p>Idéal pour retrouver un canapé agréable et sans allergènes dans votre salon.</p>`
    }
  ]
};

export default TEMPLATE_CITY;
