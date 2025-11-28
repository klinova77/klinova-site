import type { City } from '~/types/geo';

const chelles: City = {
  name: 'Chelles',
  slug: 'chelles',
  postalCodes: ['77500'],

    customDescription:
  'Commune majeure de Seine-et-Marne, Chelles alterne grands ensembles résidentiels et secteurs pavillonnaires, exigeant une gestion ciblée des infrastructures et services de proximité.',
 
  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne',
  },

  districts: [
    'Centre-ville – Résistance',
    'Bords de Marne',
    'Grande Prairie',
    'Abbesses',
    'Les Coudreaux',
    'Aulnoy',
    'Monts-Chalats',
  ],

  nearbyCities: [
    'neuilly-sur-marne',
    'villepinte',
    'gournay-sur-marne',
    'noisy-le-grand',
    'lagny-sur-marne',
  ],

  ctaOverride: '',

  landmarks: [
    'Gare de Chelles-Gournay',
    'Centre commercial Terre-Ciel',
    'Parc du Souvenir Émile-Fouchard',
    'Canal de Chelles',
    'Île de loisirs de Vaires-Torcy',
  ],

  specificChallenges: [
    'Dans les pavillons proches des Coudreaux, les escaliers moquettés accumulent rapidement des poussières et traces de jardin, surtout en période humide.',
    'Autour du canal ou des Bords de Marne, l’humidité ambiante favorise les odeurs persistantes dans les textiles d’ameublement et les moquettes.',
    'Dans les résidences récentes de l’Aulnoy, les balcons sont très utilisés et souvent tachés par les arrosages, les jeux d’enfants ou les fientes de pigeons.',
    'Les box privatifs du quartier Grande Prairie présentent souvent des traces d’huile ou des résidus poussiéreux, difficiles à entretenir sans matériel pro.',
    'Autour de la gare et du centre-ville, les canapés des familles avec enfants ou animaux sont souvent marqués par des taches et des poils incrustés.',
  ],

  whyUsBullets: [
    'Nous adaptons nos méthodes aux immeubles récents, aux moquettes des copropriétés et aux balcons exposés aux dépôts poussiéreux de Chelles.',
    'Nous intervenons sur des configurations variées : parkings souterrains, pavillons familiaux, résidences denses et espaces communs fortement sollicités.',
    "Nous anticipons les contraintes d'accès (ascenseurs, stationnement, passages étroits) pour planifier une intervention fluide et sans gêne.",
    'Nous appliquons des protocoles spécifiques selon les surfaces : textiles, carrelage, dalles extérieures, rampes de parking ou garde-corps.',
    'Nous proposons des créneaux élargis pour s’adapter au rythme des familles et copropriétés de Chelles.',
  ],

  testimonial: {
    text: "Nous habitons près de la Marne, dans un pavillon des années 90. Les moquettes de l’étage étaient ternies par le temps et les escaliers prenaient la poussière à chaque passage. L’équipe a travaillé efficacement, sans odeur forte ni humidité excessive. On sent vraiment la différence au quotidien.",
    author: 'Sophie B.',
    role: 'Propriétaire',
    building: 'Maison individuelle, quartier Bords de Marne',
  },

  faq: [
    {
      question: 'Comment se déroule une intervention de nettoyage à Chelles ?',
      answer:
        'À Chelles, une intervention commence par un repérage des accès (ascenseurs, stationnement, circulations internes) et un échange rapide avec l’occupant, le gardien ou le syndic pour valider les zones à traiter. Nous protégeons ensuite les surfaces sensibles avant de réaliser le nettoyage. Un contrôle final permet de vérifier le résultat et de répondre aux éventuelles questions du client.',
    },
    {
      question: 'Dois-je préparer quelque chose avant votre venue à Chelles ?',
      answer:
        'Ce n’est pas obligatoire. Par exemple sur un balcon, libérer un peu d’espace aide à accéder aux angles et aux garde-corps. Pour les moquettes ou tapis, retirer les petits objets au sol facilite simplement le passage. Dans les parkings ou parties communes, avertir les occupants lorsqu’une zone doit être libérée est utile, mais nous pouvons nous organiser autrement si ce n’est pas possible.',
    },
    {
      question: 'Quels sont vos horaires d’intervention à Chelles ?',
      answer:
        'La majorité des interventions ont lieu en semaine entre 9 h et 19 h. Toutefois, pour limiter la gêne dans les parkings, halls, locaux professionnels, ou pour nous adapter aux contraintes de nos clients, nous pouvons programmer des interventions tôt le matin, en fin de journée ou le week-end. Nous nous adaptons aux contraintes de la résidence ou du client.',
    },
  ],

  services: [
    {
      serviceKey: 'moquettes',
      heroDescription:
        'À Chelles, nous nettoyons les moquettes des logements et des copropriétés exposées aux poussières fines et passages répétés.',
      uniqueIntro:
        `<p>À Chelles, les moquettes couvrent souvent les chambres des maisons ou des appartements, ainsi que les parties communes de certaines copropriétés. Ces surfaces sont particulièrement sensibles aux poussières fines et aux salissures liées aux allées et venues quotidiennes.</p><p>Dans les résidences modernes ou rénovées, les moquettes de halls ou de paliers ont besoin d’un entretien régulier pour éviter les taches incrustées ou les odeurs liées à l’humidité. Un nettoyage professionnel permet de retrouver un confort au sol, sans humidité résiduelle ni résidus irritants.</p><p>Nous intervenons dans tous les quartiers de Chelles, en nous adaptant aux contraintes d’accès ou liées à la configuration de la copropriété.</p>`,
      uniqueDeepDive:
        `<h3>Notre protocole pour le nettoyage de moquette à domicile, en copropriété, ou en entreprise</h3><p>Nous commençons par une inspection rapide des surfaces à traiter, pour identifier les zones les plus encrassées, les taches visibles ou les éventuels risques (dégâts des eaux, moisissures anciennes).</p><p>Le nettoyage s’effectue par injection-extraction maîtrisée ou par méthode basse humidité selon les cas. Nous utilisons des produits non allergènes, efficaces contre les acariens et adaptés aux environnements familiaux ou à un trafic plus intensif.</p><p>Dans les escaliers ou paliers, nos outils permettent un nettoyage soigné sans abîmer les angles ou les plinthes. En fin d’intervention, nous vérifions avec vous la qualité du résultat et vous donnons des conseils d’entretien adaptés à votre usage quotidien.</p>`,
    },
    {
      serviceKey: 'parkings',
      heroDescription:
        'À Chelles, nous entretenons les parkings souterrains des immeubles récents ou plus anciens de la ville.',
      uniqueIntro:
        `<p>À Chelles, de nombreux logements récents disposent de parkings en sous-sol ou de box individuels. Ces espaces, bien que peu visibles, accumulent souvent poussières, traces d’huile ou déchets.</p><p>Nous intervenons sur ces petites surfaces, avec un matériel professionnel capable de nettoyer les salissures sans endommager les revêtements. L’objectif : retrouver un sol propre, plus sain, et moins glissant.</p><p>Nos prestations s’adressent aussi bien aux particuliers qu’aux copropriétés et aux entreprises.</p>`,
      uniqueDeepDive:
        `<h3>Intervention rapide sur parkings privés ou copro</h3><p>Un parking propre limite la propagation de poussières vers l’intérieur de la copropriété. C’est aussi une sécurité pour éviter que le sol ne devienne glissant.</p><ul><li>Balayage mécanique ou manuel selon l’accessibilité</li><li>Dégraissage ciblé des zones tachées</li><li>Évacuation des résidus si besoin</li></ul><p>Nous intervenons souvent à Chelles dans les box de la Grande Prairie ou les petites résidences autour du centre-ville. Chaque prestation inclut un repérage préalable et des conseils d’entretien à long terme.</p>`,
    },
    {
      serviceKey: 'balcons',
      heroDescription:
        'À Chelles, nous remettons en état les balcons encrassés par poussières, usage intensif et dépôts extérieurs.',
      uniqueIntro:
        `<p>À Chelles, les balcons sont souvent utilisés comme de véritables extensions de l'appartement : repas, plantes, vélos, jeux d’enfants. Mais ils se salissent vite à cause des dépôts de poussière ou des micro-végétations qui s'y développent.</p><p>Nos interventions permettent de remettre en état ces espaces de vie sans détériorer les joints ni les sols fragiles. Nous adaptons nos méthodes selon les revêtements et la configuration (garde-corps, évacuation, étanchéité...).</p><p>Dans chaque quartier, nous proposons un nettoyage respectueux de votre logement… et de vos voisins du dessous.</p>`,
      uniqueDeepDive:
        `<h3>Une remise en état soignée et discrète de votre balcon</h3><p>Nous utilisons des équipements basse pression ou vapeur, sans projections vers l’extérieur. Nos produits sont biodégradables et sans rinçage obligatoire.</p><p>Le protocole comprend :</p><ul><li>Protection des zones sensibles (portes-fenêtres, garde-corps)</li><li>Nettoyage du sol, des joints, et des bordures</li><li>Élimination des mousses, poussières ou taches organiques</li></ul><p>En fin d’intervention, les eaux sont évacuées de manière contrôlée, pour éviter tout écoulement chez les voisins. Un espace de vie sain, sans odeurs ni traces au sol.</p>`,
    },
    {
      serviceKey: 'balcons-fientes',
      heroDescription:
        'À Chelles, nous désinfectons les balcons souillés par les fientes de pigeons pour limiter les risques sanitaires.',
      uniqueIntro:
        `<p>À Chelles, comme dans le reste de l'Île-de-France, les balcons souillés par des fientes de pigeons posent des risques sanitaires importants. Ce type de salissure nécessite une intervention spécifique pour protéger les habitants, en particulier les jeunes enfants ou les personnes fragiles.</p><p>Nous intervenons dans tous les quartiers touchés, avec un protocole strict incluant nettoyage en profondeur, désinfection, et précautions de sécurité. Le but : remettre en état sans risque pour votre santé ni pour le bâti, et éviter le retour des pigeons.</p>`,
      uniqueDeepDive:
        `<h3>Un protocole rigoureux en 5 étapes</h3><ul><li>Préparation du chantier avec protection respiratoire, signalisation et équipement adapté</li><li>Enlèvement manuel des fientes et résidus solides</li><li>Nettoyage approfondi à l’eau chaude ou vapeur selon le sol</li><li>Désinfection fongicide/bactéricide et contrôle final visuel</li><li>Installation de dispositifs anti-pigeons</li></ul><p>Ce type d’intervention est fréquent à Chelles, notamment autour du canal ou dans les résidences bordant les axes arborés. Un rapport photo peut être fourni à la demande pour vos assurances ou syndics.</p>`,
    },
    {
      serviceKey: 'canapes-tapis',
      heroDescription:
        'À Chelles, nous nettoyons canapés, tapis et matelas marqués par les taches, poils d’animaux et poussières fines.',
      uniqueIntro:
        `<p>À Chelles, les canapés, tapis et matelas sont souvent soumis à rude épreuve : goûters, animaux, taches de boisson, transpiration, ou poussières fines. Ces textiles accumulent vite les salissures même quand ils paraissent propres en surface.</p><p>Notre protocole de nettoyage permet de restaurer un bon niveau d’hygiène, sans déformation ni détrempage des fibres.</p>`,
      uniqueDeepDive:
        `<h3>Un nettoyage complet de vos textiles d'ameublement</h3><p>Chaque intervention commence par un diagnostic rapide : tissu, taches, risques de décoloration. Nous appliquons ensuite un prétraitement localisé avant un nettoyage par injection/extraction ou méthode sèche.</p><p>Les produits utilisés sont choisis pour leur compatibilité avec les environnements familiaux.</p><ul><li>Nettoyage sur place, sans démontage</li><li>Temps de séchage rapide (souvent 4–6 h)</li><li>Conseils d’entretien après notre passage</li></ul><p>Idéal pour retrouver un canapé agréable et sans allergènes dans votre salon.</p>`,
    },
  ],
};

export default chelles;
