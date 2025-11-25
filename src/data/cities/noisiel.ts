// noisiel.ts – Ville de Noisiel (77)

import type { City } from '~/types/geo';

const noisiel: City = {
  name: 'Noisiel',
  slug: 'noisiel',
  postalCodes: ['77186'],

  customDescription:
    'Ville de Marne-la-Vallée mêlant habitats collectifs et pavillons, Noisiel génère des besoins réguliers en nettoyage de moquettes, parkings, balcons et textiles d’ameublement.',

  department: {
    name: 'Seine-et-Marne',
    code: '77',
    slug: 'seine-et-marne'
  },

  districts: [
    'Les Deux-Parcs',
    'Le Luzard',
    'La Ferme-du-Buisson',
    'Bois-de-la-Grange',
    'Ville-Nouvelle',
    'Pièce-aux-Chats',
    'Cité ouvrière Menier',
    'Centre-ville'
  ],

  nearbyCities: [
    'torcy',
    'lognes',
    'champs-sur-marne',
    'vaires-sur-marne',
    'pontault-combault',
    'noisy-le-grand'
  ],

  ctaOverride: '',

  landmarks: [
    'Gare RER de Noisiel',
    'Parc de Noisiel',
    'Ferme du Buisson',
    'Ancienne chocolaterie Menier',
    'Bois de la Grange',
    'Hôtel de ville de Noisiel'
  ],

  specificChallenges: [
    'Nombreux immeubles collectifs années 70–90 avec moquettes de parties communes marquées par les passages quotidiens, les poussettes, les chariots de courses et les petits déménagements internes.',
    'Parkings souterrains de résidences avec rampes étroites, poteaux rapprochés et zones sombres qui concentrent les poussières, traces de pneus, huiles et dépôts liés aux circulations quotidiennes.',
    'Balcons donnant sur les cœurs d’îlots ou les espaces verts, avec dépôts de pollution, micro-végétation dans les joints et salissures incrustées sur dalles béton ou carrelages poreux.',
    'Présence de pigeons et d’oiseaux autour de certaines façades et parkings aériens, générant fientes, nids et salissures autour des garde-corps, rebords de fenêtres et équipements techniques.',
    'Appartements familiaux où canapés, tapis et matelas sont sollicités intensément, avec taches alimentaires, poils d’animaux, odeurs de tabac ou d’humidité à traiter sans abîmer les fibres.',
    'Accès parfois complexes : ascenseurs compacts, couloirs coudés, locaux techniques partagés, nécessitant une organisation précise pour acheminer les machines sans gêner les occupants.'
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: ''
  },

faq: [
  {
    question: "Comment se déroule une intervention de nettoyage à Noisiel ?",
    answer: `À Noisiel, nous commençons par repérer les accès (ascenseurs, circulations de la ville nouvelle, locaux techniques) et par valider avec l’occupant ou le gardien les zones exactes à traiter. Nous protégeons ensuite les surfaces sensibles avant d’effectuer le nettoyage prévu. Un contrôle final est réalisé avec le client ou son représentant pour valider le résultat et s’assurer que tout est conforme.`
  },
  {
    question: "Faut-il préparer quelque chose avant votre venue à Noisiel ?",
    answer: `Rien d’obligatoire. Sur un balcon, déplacer quelques objets aide à accéder aux angles et aux garde-corps. Pour les moquettes ou tapis, dégager légèrement le sol facilite le travail. Dans les parkings, prévenir les résidents si une zone doit être libérée est un plus, mais si ce n’est pas possible nous adaptons l’organisation et travaillons par sections.`
  },
  {
    question: "Intervenez-vous en dehors des horaires de bureau à Noisiel ?",
    answer: `Oui. Même si la majorité des interventions se fait en semaine en journée, nous pouvons travailler tôt le matin, en soirée ou le samedi lorsque cela limite la gêne dans les parkings, halls, immeubles ou locaux d’activité. Les horaires sont ajustés selon les contraintes de circulation et de bruit de chaque résidence.`
  }
],


  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `<p>À Noisiel, le nettoyage de moquettes concerne surtout les résidences collectives de la ville nouvelle, les bâtiments proches du RER et les immeubles plus anciens autour de la chocolaterie Menier. Les circulations sont variées : longs couloirs en étage, cages d’escaliers mixtes carrelage/moquette, halls d’entrée avec tapis encastrés.</p>
<p>Les salissures typiques viennent des allers-retours domicile–travail, des enfants, des poussettes et des livraisons. On trouve des taches localisées (boissons, graisse, peinture), des zones ternies aux pieds d’ascenseurs et des bords de plinthes encrassés. L’enjeu est de redonner une moquette propre et saine tout en respectant les contraintes des occupants.</p>`,
      uniqueDeepDive: `<p>Sur Noisiel, une intervention moquette démarre par un repérage précis de chaque niveau : accès ascenseur, cages d’escalier secondaires, locaux techniques. Ce diagnostic permet d’anticiper le déplacement des machines, la longueur de câbles nécessaire et les zones à traiter en priorité (entrées, angles, paliers d’ascenseurs).</p>
<p>Les travaux commencent par un aspirateur à forte dépression, indispensable pour retirer les poussières fines incrustées dans les fibres. On applique ensuite un pré-spray sur les zones les plus marquées, en respectant le type de moquette posée dans l’immeuble (dalles textiles, lé collé, aiguilleté). Les taches sont traitées au détachant adapté, sans saturation.</p>
<p>Selon les contraintes de séchage et de circulation, on choisit ensuite soit une méthode injection-extraction avec rinçage soigné, soit une méthode à faible humidité permettant un retour en service plus rapide. Les finitions portent sur les plinthes, les jonctions avec le carrelage et les marches de départ. Un passage de contrôle avec le gardien ou un représentant du syndic clôture la prestation.</p>`
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `<p>Les parkings de Noisiel sont principalement situés sous les résidences de la ville nouvelle et autour des grands ensembles du Luzard, des Deux-Parcs ou de la Ferme-du-Buisson. On y trouve des dalles béton, des rampes en pente et des zones de manœuvre contraintes par de nombreux poteaux.</p>
<p>Avec les allers-retours quotidiens, les sols accumulent poussières, suies, traces de pneus et petites fuites d’huiles. Les locaux poubelles attenants, les caves et les accès piétons génèrent également des passages marquants. Un nettoyage structuré permet de sécuriser les circulations, d’améliorer l’image de la copropriété et de réduire les dépôts gras.</p>`,
      uniqueDeepDive: `<p>Pour un parking à Noisiel, on commence par segmenter l’espace en zones : rampes d’accès, allées principales, places de stationnement, emplacements techniques. Le plan est validé avec le syndic afin d’organiser le déplacement temporaire des véhicules ou, à défaut, un travail par zones alternées.</p>
<p>Après protection des équipements sensibles (portails automatiques, armoires électriques, locaux techniques ouverts), les déchets volumineux et encombrants sont retirés. Un pré-balayage manuel ou mécanisé permet de concentrer les poussières et graviers avant l’action des produits dégraissants. Le choix des détergents se fait en fonction des traces observées : pneus, huiles, marquages de peinture.</p>
<p>Les grandes surfaces sont traitées à la monobrosse ou à l’autolaveuse, en insistant sur les trajectoires de roues et l’entrée de rampe. Les zones difficiles d’accès (angles, pieds de poteaux, marches, caniveaux) sont réalisées manuellement ou avec du petit matériel motorisé. En fin de chantier, un contrôle visuel est effectué avec le représentant de la copropriété, et des recommandations d’entretien courant peuvent être proposées pour maintenir l’état des lieux dans le temps.</p>`
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `<p>Les balcons de Noisiel surplombent souvent des cœurs d’îlots végétalisés, des parkings aériens ou les espaces piétons de la ville nouvelle. Les revêtements sont variés : dalles béton, carrelages modernes, bois composite, parfois anciens carrelages plus poreux.</p>
<p>Au fil des saisons, les dépôts se cumulent : poussières, pollution, traces de pots de fleurs, micro-végétation dans les joints. Certains balcons servent aussi de zones de rangement, ce qui complique l’accès aux angles et aux gardes-corps. Un nettoyage sérieux remet les surfaces en état sans déranger le voisinage.</p>`,
      uniqueDeepDive: `<p>Une intervention sur balcon à Noisiel démarre par un échange avec l’occupant sur les contraintes d’accès (ascenseur, escaliers, horaires) et les objets présents : mobilier, rangements, jardinières. Lorsque c’est possible, les éléments mobiles sont déplacés pour dégager les sols et les pieds de garde-corps.</p>
<p>On commence par un dégrossissage à sec : balayage minutieux des angles, enlèvement des débris, vidage des bacs et des zones saturées. Les revêtements sont ensuite pré-humidifiés avec un produit adapté au matériau (béton, carrelage, bois composite) afin de décoller les salissures. Une brosse manuelle ou une petite monobrosse est utilisée lorsque la surface le permet.</p>
<p>Les joints et les zones au pied des garde-corps sont travaillés avec des outils plus précis pour enlever dépôts, traces de pots ou coulures. Un rinçage maîtrisé limite les écoulements vers les étages inférieurs, en utilisant si besoin des raclettes pour orienter l’eau vers les évacuations prévues. Les vitres, montants et mains courantes peuvent faire l’objet d’un nettoyage complémentaire, selon le devis initial.</p>`
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `<p>Certains immeubles de Noisiel, notamment près des espaces verts et des grandes façades, sont exposés aux fientes de pigeons sur les balcons, rebords de fenêtres et appuis de climatisation. Ces dépôts s’accumulent autour des garde-corps, au pied des façades et parfois sur les coffres de volets.</p>
<p>Outre l’aspect visuel, les résidus secs, plumes et nids demandent une intervention encadrée, avec protection de l’intervenant et gestion des déchets souillés. L’objectif est de rendre le balcon à la fois propre, désinfecté et de nouveau utilisable.</p>`,
      uniqueDeepDive: `<p>Pour un balcon touché par les fientes à Noisiel, la préparation est essentielle. Les accès sont vérifiés, les voisins prévenus lorsque le risque de coulures existe et les objets sensibles (textiles, jouets, plantes fragiles) mis à l’abri. L’intervenant équipe des protections adaptées afin de manipuler en sécurité les déchets souillés.</p>
<p>Les zones les plus contaminées sont d’abord humidifiées pour limiter les poussières dans l’air. Les fientes, plumes et nids sont retirés avec des outils manuels, puis conditionnés dans des sacs résistants fermés. Les surfaces (sols, garde-corps, appuis, menuiseries) sont ensuite traitées avec un produit nettoyant et désinfectant compatible avec les matériaux présents.</p>
<p>Un brossage méthodique permet de récupérer les reliefs et les joints. Le rinçage se fait de manière contrôlée pour éviter les projections vers le bas ou l’intérieur du logement. En fin d’intervention, une vérification détaillée est réalisée avec l’occupant : état du sol, des garde-corps, des montants, et conseils de prévention éventuelle (limitation des points d’appui, protection de certaines zones sensibles).</p>`
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `<p>À Noisiel, les canapés, tapis et matelas sont très sollicités dans les appartements familiaux, qu’il s’agisse des logements de la ville nouvelle ou d’immeubles plus anciens proches de la chocolaterie Menier. Les textiles d’ameublement concentrent taches du quotidien, poils d’animaux, odeurs de cuisine et traces de boissons.</p>
<p>Les revêtements sont variés : microfibres, velours, cuir, tapis modernes à poils courts ou tapis plus épais. Un nettoyage correct demande d’identifier la fibre, le garnissage et la sensibilité des couleurs pour adapter la méthode sans abîmer le mobilier.</p>`,
      uniqueDeepDive: `<p>Lors d’une intervention sur canapé ou tapis à Noisiel, le technicien commence par un diagnostic visuel et manuel : type de tissu, densité de mousse, présence de taches anciennes, auréoles ou décolorations. Les étiquettes d’entretien sont consultées dès que possible afin de respecter les préconisations du fabricant.</p>
<p>Un aspirateur équipé d’un embout textile permet d’extraire poussières, miettes et poils en profondeur. Les taches ciblées (boissons, graisse, urine d’animaux) sont pré-traitées avec des produits adaptés à la fibre et testés sur une zone discrète. Ensuite, selon le support, on utilise soit une méthode injection-extraction maîtrisée, soit une technique à faible humidité pour limiter les temps de séchage.</p>
<p>Pour les tapis, on travaille par zones, en insistant sur les axes de passage tout en respectant la structure du velours ou des boucles. Les temps de séchage sont expliqués au client, avec des conseils simples : aération, limitation de l’usage pendant quelques heures, protection temporaire éventuelle. L’objectif est d’obtenir des textiles plus propres, plus agréables au quotidien, sans surpromesse et dans le respect des matériaux.</p>`
    }
  ]
};

export default noisiel;
