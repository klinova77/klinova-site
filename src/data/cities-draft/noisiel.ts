import type { City } from "~/types/geo";

const city: City = {
  name: "Noisiel",
  slug: "noisiel",
  postalCodes: ["77186"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Noisiel pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux contraintes du Luzard comme aux ruelles de la Cité Menier.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: `<p>Ville nouvelle sur le RER A, abritant la cité historique Menier, Noisiel présente des configurations variées qui demandent une lecture terrain précise. Klinova s'appuie sur cette connaissance locale pour coordonner les interventions avec les syndics, gestionnaires et occupants.</p>
<p class="mt-4">Propreté des halls, entretien des parkings en sous-sol, remise en état des balcons ou terrasses : chaque prestation s'organise en tenant compte des accès, des horaires adaptés et du suivi attendu par les donneurs d'ordre.</p>
<ul>
  <li><strong>Coordination avec les gestionnaires :</strong> Planification concertée pour limiter la gêne dans les résidences denses du Luzard et respecter les contraintes d'accès badge ou digicode.</li>
  <li><strong>Adaptation au bâti :</strong> Matériel dimensionné selon les configurations, des parkings souterrains aux cours intérieures de la Cité Menier.</li>
  <li><strong>Suivi et reporting :</strong> Compte-rendu d'intervention disponible pour les syndics et gestionnaires qui souhaitent tracer les prestations réalisées.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Parkings souterrains des années 70-80 au Luzard : <strong>béton encrassé</strong> et ventilation limitée.",
    "Accès piéton uniquement sur certaines dalles : portage matériel obligatoire.",
    "Ruelles étroites de la Cité Menier : <strong>stationnement contraint</strong> et sens uniques.",
    "Loggias béton exposées à la pollution de l'A4 : dépôts gris récurrents.",
    "Résidences sécurisées avec badges Vigik : coordination préalable indispensable.",
    "Proximité du Parc de Noisiel : <strong>feuilles mortes et mousses</strong> sur terrasses ombragées."
  ],

  // Texte brut uniquement
  districts: [
    "Le Luzard",
    "Cité Menier",
    "La Ferme du Buisson",
    "Les Deux-Parcs",
    "La Pièce-aux-Chats",
    "Le Potager"
  ],
  nearbyCities: [
    "Champs-sur-Marne",
    "Torcy",
    "Lognes",
    "Vaires-sur-Marne",
    "Chelles"
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Noisiel",
    "Ancienne Chocolaterie Menier",
    "La Ferme du Buisson",
    "Gare de Noisiel (RER A)",
    "Parc de Noisiel",
    "Cité Menier"
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les résidences avec accès sur dalle au Luzard ?",
      answer: `<p>Les immeubles sur dalle nécessitent un <strong>portage du matériel</strong> depuis les zones de stationnement autorisées. Nous repérons les accès en amont et adaptons l'équipement pour limiter les allers-retours. Le planning tient compte des horaires de moindre passage dans les parties communes.</p>`
    },
    {
      question: "Intervenez-vous en urgence sur Noisiel ?",
      answer: "<p>Selon la nature de la demande et notre planning, une intervention rapide peut être organisée. Pour les situations nécessitant une <strong>réactivité immédiate</strong> (dégât des eaux, souillure importante), nous évaluons la faisabilité dès le premier contact téléphonique.</p>"
    },
    {
      question: "Le stationnement est compliqué dans certains quartiers, comment gérez-vous cela ?",
      answer: `<p>Dans la Cité Menier notamment, les rues étroites et le patrimoine protégé limitent les possibilités. Nous identifions les <strong>emplacements autorisés</strong> avant chaque intervention et prévoyons le temps de portage nécessaire. Les jours de marché au Luzard, nous décalons les horaires si besoin.</p>`
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer: `<p>Oui, chaque demande fait l'objet d'un <strong>devis détaillé</strong> après échange sur la surface, le type de prestation et les contraintes d'accès. Pour les copropriétés ou les interventions récurrentes, nous pouvons proposer un cadre contractuel adapté aux besoins du gestionnaire.</p>`
    }
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans les fibres textiles, avec séchage contrôlé pour une remise en service rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des configurations de la Cité Menier et des résidences sur dalle du Luzard, accès parfois exclusivement piéton.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours ras des années 80.",
        "Interventions planifiées en horaires décalés pour les bureaux, avec coordination préalable pour les accès sécurisés."
      ],
      uniqueIntro: `<p>Dans le secteur de la <strong>Cité Menier</strong>, les moquettes des locaux patrimoniaux et des maisons ouvrières accumulent poussières et traces de passage au fil des mois. Les fibres retiennent les particules fines, les résidus de semelles et les taches anciennes qui ternissent progressivement l'aspect général des sols textiles.</p>
<p class="mt-4">Un entretien adapté redonne aux <strong>dalles textiles et velours ras</strong> des résidences années 70-80 leur aspect d'origine. Les couloirs retrouvent une apparence soignée, les odeurs de renfermé disparaissent, et les occupants constatent un confort visuel immédiat dans les parties communes comme dans les espaces privatifs.</p>
<p class="mt-4">L'intervention s'organise en tenant compte des contraintes horaires propres aux <strong>bureaux de la ZA de la Mare Blanche</strong> et aux salles de la Ferme du Buisson. Un diagnostic préalable identifie les zones de trafic intense, la nature des fibres et les taches à traiter en priorité avant le passage du matériel d'injection-extraction.</p>`,
      uniqueDeepDive: `<h3>Zones de circulation principale</h3>
<p>Les couloirs et entrées concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant l'application du produit de traitement. Les plinthes et bas de murs reçoivent une protection pour éviter les projections.</p>

<h3>Surfaces à trafic modéré</h3>
<p>Les bureaux individuels et salles de réunion nécessitent un détachage ciblé sur les zones de fauteuils et passages fréquents. L'injection-extraction s'effectue en passes croisées pour atteindre la base des fibres sans saturer le support.</p>

<h3>Espaces sensibles et finitions</h3>
<p>Les moquettes épaisses ou velours demandent une extraction renforcée pour limiter le temps de séchage. La ventilation naturelle ou assistée accélère le retour à un taux d'humidité normal. Les consignes de non-piétinement sont communiquées selon l'épaisseur du revêtement traité.</p>`,
      specificChallenges: [
        "Moquettes velours ras des résidences années 80 : fibres denses retenant poussières et allergènes.",
        "Accès piéton uniquement sur certaines dalles du Luzard : portage du matériel nécessaire.",
        "Escaliers étroits dans les maisons ouvrières de la Cité Menier : manœuvre limitée.",
        "Bureaux de la ZA de la Mare Blanche : horaires d'intervention contraints par l'activité.",
        "Taches anciennes incrustées dans les parties communes : traitement renforcé requis."
      ],
      faqAdditions: [
        {
          question: "Les escaliers étroits de la Cité Menier compliquent l'accès : comment organisez-vous l'intervention ?",
          answer: `<p>Le matériel est sélectionné en fonction des passages disponibles. Pour les maisons ouvrières aux cages réduites, nous utilisons des équipements compacts et prévoyons un temps de mise en place adapté. La coordination avec les occupants permet de dégager les accès avant notre arrivée.</p>`
        },
        {
          question: "Après un nettoyage dans les bureaux de la ZA de la Mare Blanche, quel délai avant de remarcher sur la moquette ?",
          answer: `<p>Le séchage varie selon l'épaisseur du revêtement et la ventilation des locaux. Sur des dalles textiles standard, comptez généralement quatre à six heures avant une circulation légère. Nous précisons les consignes de remise en service à la fin de chaque intervention.</p>`
        },
        {
          question: "Quelle méthode privilégiez-vous pour les moquettes velours ras typiques des résidences années 80 de Noisiel ?",
          answer: `<p>L'injection-extraction reste la technique de référence pour ces fibres denses. Elle permet d'atteindre la base du velours sans l'écraser. Sur les taches tenaces, un prétraitement localisé précède le passage de la machine pour améliorer le résultat final.</p>`
        },
        {
          question: "Comment adaptez-vous le traitement selon l'épaisseur des moquettes dans les salles de la Ferme du Buisson ?",
          answer: `<p>Un diagnostic visuel et tactile détermine la densité des fibres avant intervention. Les moquettes épaisses reçoivent plusieurs passes d'extraction pour éviter toute humidité résiduelle. Les revêtements fins sont traités avec une pression ajustée pour préserver leur structure.</p>`
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parkings souterrains et aériens, avec gestion stricte des eaux de lavage et coordination d'accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains du Luzard et des accès en rampe du secteur Cours des Roches.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux de lavage vers les évacuations conformes.",
        "Coordination avec le syndic pour la rotation des véhicules et balisage adapté aux horaires de la résidence."
      ],
      uniqueIntro: `<p>Les traces de graisse, les coulures d'huile et les dépôts de poussière de béton marquent visiblement les sols des parkings souterrains du secteur Cours des Roches et des résidences alentour. Ces salissures s'accumulent au fil des mois, rendant les surfaces glissantes sur les rampes d'accès et ternissant l'aspect général des parties communes. Les gestionnaires constatent régulièrement des plaintes de copropriétaires concernant l'état des box et des allées de circulation.</p>
<p class="mt-4">Un lavage mécanisé régulier redonne aux sols béton brut ou enrobé une propreté visible, améliore la sécurité des usagers et valorise le patrimoine immobilier. Les syndics disposent ainsi d'un argument concret lors des assemblées générales, et les résidents retrouvent un espace de stationnement entretenu, sans odeurs persistantes ni zones d'accumulation de déchets.</p>
<p class="mt-4">L'intervention s'organise en coordination avec le gestionnaire : balisage des zones, rotation des véhicules par secteur, horaires adaptés aux flux quotidiens liés aux déplacements vers la gare RER A. Un compte-rendu photographique peut accompagner chaque passage pour documenter l'état avant et après traitement.</p>`,
      uniqueDeepDive: `<h3>Préparation et sécurisation</h3>
<p>Le technicien effectue un diagnostic du revêtement et repère l'état des évacuations. Un balayage préalable élimine les débris grossiers. La signalétique de balisage est mise en place pour sécuriser les zones de travail et orienter les usagers vers les emplacements libres.</p>

<h3>Traitement mécanisé</h3>
<p>L'autolaveuse ou le nettoyeur haute pression avec dégraissant adapté traite les allées de circulation et les places de stationnement. Les zones critiques — rampes inclinées, pieds de murs, angles morts et rigoles — font l'objet de passes supplémentaires. Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage.</p>

<h3>Contrôle et restitution</h3>
<p>Une vérification visuelle confirme l'élimination des taches tenaces. Le dépoussiérage des blocs lumineux ou tuyauteries apparentes peut être réalisé sur demande. Le gestionnaire reçoit une recommandation de fréquence adaptée au trafic constaté et un compte-rendu d'intervention si souhaité.</p>`,
      specificChallenges: [
        "Rampes d'accès souvent encrassées par les coulures d'huile et les traces de pneus.",
        "Sols béton brut des années 70-80 poreux et difficiles à dégraisser sans matériel adapté.",
        "Coordination nécessaire avec les copropriétaires pour libérer les places par secteur.",
        "Évacuations parfois obstruées par des dépôts de poussière et de débris.",
        "Horaires d'intervention à caler en dehors des flux pendulaires vers la gare RER."
      ],
      faqAdditions: [
        {
          question: "Comment gérez-vous les eaux de lavage dans les parkings souterrains du Luzard ?",
          answer: `<p>Les eaux chargées sont systématiquement dirigées vers les regards et rigoles existants. Nous vérifions au préalable que les évacuations ne sont pas obstruées. Aucun rejet n'est effectué vers la voirie ou les espaces verts. Cette gestion respecte les contraintes des sous-sols de la Ville Nouvelle.</p>`
        },
        {
          question: "À quelle fréquence recommandez-vous un décrassage pour les parkings collectifs du secteur Cours des Roches ?",
          answer: `<p>Pour des parkings à rotation moyenne, un passage semestriel maintient un niveau de propreté correct. Si le trafic est plus intense ou si des taches d'huile apparaissent régulièrement, un rythme trimestriel limite l'incrustation des salissures et facilite chaque intervention suivante.</p>`
        },
        {
          question: "Quelle méthode privilégiez-vous pour un parking aérien fréquenté comme celui du Super U ?",
          answer: `<p>Sur enrobé ou béton lissé en extérieur, le lavage haute pression avec dégraissant biodégradable convient bien. L'intervention se cale en dehors des heures d'affluence commerciale. Le balisage oriente les clients vers les zones déjà traitées et sèches.</p>`
        },
        {
          question: "Comment traitez-vous les taches d'huile anciennes incrustées sur les rampes d'accès ?",
          answer: `<p>Un dégraissant concentré est appliqué en pré-traitement sur les zones marquées. Après un temps de contact, le passage de l'autolaveuse ou du nettoyeur haute pression déloge les résidus. Certaines taches très anciennes s'atténuent sans disparaître totalement si le béton est poreux.</p>`
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon ou loggia, avec traitement des dépôts incrustés, protection des menuiseries et gestion anti-coulures pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : pollution A4, humidité liée à la Marne, vis-à-vis dense des résidences du Luzard.",
        "Pression contrôlée selon le support : béton brut, carrelage, joints fragiles ou bois composite traités différemment.",
        "Protection systématique du voisinage : bâchage, gestion des écoulements, intervention discrète en journée."
      ],
      uniqueIntro: `<p>Après quelques saisons d'exposition aux intempéries et à la pollution urbaine, les balcons et loggias autour de la <strong>Place Émile-Menier</strong> et des axes proches de la gare accumulent poussières grasses, traces noires et dépôts verts dans les joints. Ce qui était un espace agréable devient une surface qu'on évite d'utiliser, où le mobilier reste rangé faute de pouvoir s'y installer confortablement.</p>
<p class="mt-4">Sur les <strong>supports béton brut ou carrelage</strong> fréquents dans les résidences récentes, et particulièrement sur les loggias sur dalle du Luzard, l'encrassement s'incruste en profondeur. Le sol devient glissant par temps humide, les garde-corps ternissent, et l'impression générale de négligence s'installe malgré des tentatives de nettoyage au jet ou à la serpillière.</p>
<p class="mt-4">Une intervention structurée permet de retrouver un extérieur propre et fonctionnel. Nous adaptons le traitement à chaque support, en tenant compte de l'<strong>exposition urbaine liée à la proximité de l'A4 et du RER</strong>, des contraintes d'évacuation d'eau sur loggias, et du vis-à-vis important dans ces quartiers denses.</p>`,
      uniqueDeepDive: `<h3>Un sol débarrassé des salissures incrustées</h3>
<p>Le résultat visé : un carrelage ou un béton débarrassé des traces noires, des dépôts verts et des résidus graisseux. Pour y parvenir, nous commençons par évacuer les gros débris, feuilles et terre accumulés. Un produit adapté au support est appliqué, suivi d'un brossage manuel ou mécanique selon l'état des joints.</p>

<h3>Des éléments annexes traités dans la foulée</h3>
<p>Garde-corps, vitrages et murs mitoyens accessibles sont nettoyés pour un rendu homogène sur l'ensemble de l'espace. Le rinçage est contrôlé, avec une pression adaptée aux joints fragiles. Sur les loggias fermées, nous privilégions des méthodes douces évitant les projections excessives.</p>

<h3>Une gestion rigoureuse de l'eau et du voisinage</h3>
<p>Avant toute intervention, menuiseries et mobilier sont protégés ou déplacés. L'évacuation d'eau est maîtrisée pour éviter les coulures chez les voisins du dessous. Le séchage est accéléré si nécessaire, et nous vous transmettons des conseils d'entretien pour espacer les prochaines interventions.</p>`,
      specificChallenges: [
        "Loggias sur dalle au Luzard : évacuation d'eau limitée, intervention adaptée.",
        "Dépôts verts et mousses fréquents à proximité du Parc de Noisiel.",
        "Vis-à-vis important dans les quartiers denses : discrétion et protection anti-coulures.",
        "Supports variés selon les résidences : béton brut, carrelage, bois composite.",
        "Exposition urbaine marquée : particules fines liées à l'A4 et au trafic RER."
      ],
      faqAdditions: [
        {
          question: "Quel produit et quelle méthode utilisez-vous pour le carrelage et les joints des balcons Place Émile-Menier ?",
          answer: `<p>Nous sélectionnons un détergent adapté au type de carrelage, souvent légèrement alcalin pour dissoudre les dépôts urbains sans attaquer les joints. Le brossage est manuel sur les joints fragiles, mécanique sur les surfaces résistantes. Le rinçage reste contrôlé pour éviter toute infiltration.</p>`
        },
        {
          question: "Comment éliminer les dépôts verts et mousses sur les loggias proches du Parc de Noisiel sans abîmer le support ?",
          answer: `<p>Ces dépôts organiques nécessitent un traitement spécifique : application d'un produit anti-mousse, temps de pose adapté, puis brossage doux. Sur béton brut, nous évitons la haute pression directe qui peut creuser la surface. Le rinçage est effectué à pression modérée.</p>`
        },
        {
          question: "Comment gérez-vous l'évacuation d'eau et les coulures lors d'un nettoyage de loggia sur dalle au Luzard ?",
          answer: `<p>Avant intervention, nous vérifions les évacuations existantes et installons des protections en périphérie. L'eau est dirigée vers les points d'écoulement, et nous utilisons des quantités maîtrisées pour limiter les projections. Les voisins du dessous sont prévenus si nécessaire.</p>`
        },
        {
          question: "Quelles méthodes non haute-pression recommandez-vous pour une loggia fermée afin d'éviter les dégâts ?",
          answer: `<p>Sur loggia fermée, nous privilégions le brossage manuel avec produit adapté, suivi d'un rinçage à basse pression ou à l'eau claire. Cette approche évite les projections sur les vitrages et menuiseries, tout en garantissant un résultat propre sur le sol et les garde-corps.</p>`
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des zones à risque à Noisiel : corniches du Luzard, abords du Parc, secteur Cours des Roches.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide homologuée.",
        "Organisation coordonnée avec les occupants pour accès aux étages et évacuation discrète des déchets."
      ],
      uniqueIntro: `<p>Après quelques semaines sans intervention, les balcons exposés aux abords du <strong>Parc de Noisiel</strong> accumulent des dépôts de fientes qui s'incrustent sur les rebords et le sol. L'odeur persiste, le linge ne peut plus sécher dehors, et l'espace devient inutilisable. Les étages élevés du quartier Gare et du Luzard sont particulièrement concernés par ces accumulations récurrentes.</p>
<p class="mt-4">Sur les loggias béton et les garde-corps métalliques fréquents dans les résidences des années 70-80, les fientes provoquent des taches tenaces et attaquent progressivement les surfaces. Le confort quotidien s'en trouve dégradé, sans compter la gêne vis-à-vis du voisinage quand l'odeur se diffuse par temps chaud.</p>
<p class="mt-4">Une intervention structurée permet de retrouver un balcon sain et utilisable. Le traitement inclut le retrait mécanique des dépôts, la désinfection des supports et l'évacuation en sacs étanches. La coordination avec les occupants facilite l'accès aux étages concernés et limite les nuisances pendant le chantier.</p>`,
      uniqueDeepDive: `<h3>Balcon assaini et désinfecté</h3>
<p>L'objectif est de restituer un espace propre, sans odeur ni risque de contamination. Les supports béton, carrelage et éléments métalliques retrouvent leur aspect d'origine. Le balcon redevient utilisable pour sécher du linge ou profiter de l'extérieur.</p>

<h3>Confinement et retrait sécurisé</h3>
<p>L'intervention débute par la protection de l'intérieur du logement et le bâchage de la zone. L'équipe porte combinaison, masque FFP2, gants et lunettes. Les fientes sont humidifiées pour éviter l'envol de particules, puis collectées manuellement et conditionnées en sacs étanches.</p>

<h3>Désinfection et rinçage</h3>
<p>Une fois les dépôts retirés, un produit virucide et bactéricide est appliqué sur l'ensemble des surfaces : sol, garde-corps, vitrages et murs mitoyens si nécessaire. Le temps de contact est respecté avant rinçage. L'aération du balcon permet une remise en service rapide. Des solutions de dissuasion peuvent être proposées pour limiter le retour des pigeons.</p>`,
      specificChallenges: [
        "Étages élevés du Luzard : loggias béton exposées aux dépôts récurrents de fientes.",
        "Proximité du Parc de Noisiel : réservoir de pigeons générant des accumulations sur corniches.",
        "Garde-corps métalliques des résidences années 80 : risque de corrosion si fientes non traitées.",
        "Accès parfois complexe sur la dalle du Luzard : portage du matériel de désinfection nécessaire.",
        "Coordination occupants indispensable pour intervention rapide et gêne limitée."
      ],
      faqAdditions: [
        {
          question: "Les corniches proches du Parc de Noisiel sont couvertes de fientes : quels risques sanitaires immédiats faut-il craindre ?",
          answer: `<p>Les fientes de pigeons contiennent des agents pathogènes qui peuvent provoquer des infections respiratoires ou cutanées. Sur les corniches exposées près du Parc, l'accumulation favorise la prolifération de bactéries et champignons. Une intervention rapide avec désinfection limite ces risques pour les occupants.</p>`
        },
        {
          question: "Quel protocole EPI et quel désinfectant utilisez-vous pour fientes séchées sur balcon béton au Luzard ?",
          answer: `<p>L'équipe intervient avec masque FFP2, combinaison jetable, gants et lunettes de protection. Les fientes séchées sont humidifiées avant retrait pour neutraliser les poussières. Un désinfectant virucide et bactéricide homologué est ensuite appliqué sur le béton avec un temps de contact respecté avant rinçage.</p>`
        },
        {
          question: "Après l'enlèvement mécanique des fientes sur rebords métalliques, quelle désinfection garantissez-vous ?",
          answer: `<p>Une fois les dépôts retirés, un produit désinfectant à spectre large est pulvérisé sur les garde-corps et rebords métalliques. Ce traitement élimine les agents pathogènes résiduels et prévient la corrosion liée à l'acidité des fientes. Le rinçage final assure un rendu propre et sécurisé.</p>`
        },
        {
          question: "Comment organisez-vous l'évacuation et le tri des déchets contaminés après nettoyage balcon sur le Boulevard Salvador Allende ?",
          answer: `<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès leur collecte. L'évacuation se fait de manière discrète pour limiter la gêne dans les résidences du Boulevard Salvador Allende. Les déchets sont ensuite acheminés vers notre véhicule pour élimination conforme aux normes sanitaires.</p>`
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage ciblé et extraction en profondeur de vos canapés, tapis et matelas, avec séchage optimisé pour retrouver un textile frais et sain en quelques heures.",
      whyUsBullets: [
        "Connaissance des typologies résidentielles de Noisiel, du pavillon ancien aux appartements sur dalle du Luzard.",
        "Matériel d'injection-extraction adapté aux textiles non déhoussables, avec détachage enzymatique ciblé selon la nature des taches.",
        "Organisation pensée pour les contraintes d'accès : portage prévu, stationnement anticipé, intervention rapide sans encombrer votre logement."
      ],
      uniqueIntro: `<p>Comment préserver la fraîcheur d'un canapé quand les enfants y passent leurs après-midis, que le chat s'y installe chaque soir, ou qu'un verre de café renversé laisse une trace tenace ? Dans les quartiers familiaux du Luzard et des Deux-Parcs, ces situations font partie du quotidien. Les textiles absorbent tout : poussières, odeurs, taches accidentelles. Et plus le temps passe, plus ces salissures s'incrustent dans les fibres.</p>
<p class="mt-4">Un canapé encrassé ou un tapis taché change l'atmosphère d'une pièce. L'odeur persiste, les couleurs ternissent, et l'envie de s'y installer diminue. Dans les appartements et pavillons où les textiles non déhoussables dominent, un simple passage d'aspirateur ne suffit plus. Il faut aller chercher ce qui s'est logé en profondeur pour retrouver un confort réel.</p>
<p class="mt-4">Notre intervention commence par un diagnostic textile précis : nature du tissu, type de taches, état général. Nous adaptons ensuite le traitement selon que vous habitiez un pavillon de la Pièce-aux-Chats ou un appartement sur dalle, où le portage du matériel demande une organisation spécifique.</p>`,
      uniqueDeepDive: `<h3>Taches incrustées et odeurs persistantes</h3>
<p>Les auréoles de café, traces d'urine animale ou marques grasses ne partent pas avec un chiffon humide. Nous appliquons un pré-traitement enzymatique ciblé sur chaque zone identifiée. Un test discret sur une partie cachée du textile garantit l'absence de réaction avant de poursuivre.</p>

<h3>Fibres encrassées en profondeur</h3>
<p>L'injection-extraction pénètre au cœur du tissu pour déloger poussières, acariens et résidus. La pression et la température sont ajustées selon la matière : velours, coton, synthétique ou laine. Les textiles fragiles reçoivent un traitement adapté pour éviter toute déformation.</p>

<h3>Séchage et remise en service</h3>
<p>L'extraction maximale réduit le temps de séchage à quelques heures dans la plupart des cas. Nous vous indiquons le délai précis selon l'épaisseur du textile et la ventilation de la pièce. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>`,
      specificChallenges: [
        "Canapés non déhoussables fréquents dans les appartements du Luzard : extraction en profondeur indispensable.",
        "Taches d'origine animale ou alimentaire sur tapis grand format : pré-traitement enzymatique adapté.",
        "Immeubles sur dalle aux Totems : portage du matériel organisé en amont pour éviter tout retard.",
        "Textiles sensibles (velours, laine) dans les pavillons rénovés : pression et température ajustées.",
        "Séchage variable selon ventilation et saison : délai communiqué avant intervention."
      ],
      faqAdditions: [
        {
          question: "Pour les foyers avec enfants dans les résidences du Luzard, comment éliminez-vous acariens et allergènes sur canapés et tapis ?",
          answer: `<p>L'injection-extraction atteint les fibres en profondeur où se logent acariens et poussières allergènes. La chaleur et l'aspiration combinées réduisent significativement leur présence. Après séchage, le textile retrouve une hygiène améliorée, particulièrement appréciable dans les chambres d'enfants ou les pièces de vie très utilisées.</p>`
        },
        {
          question: "Quelle méthode utilisez-vous pour un canapé tissu non déhoussable dans un appartement sur dalle ?",
          answer: `<p>Nous procédons par injection d'eau tiède et produit adapté, puis extraction immédiate. Cette technique évite de détremper le textile tout en délogeant les salissures incrustées. La pression est modulée selon la densité du tissu. Le séchage reste rapide grâce à l'extraction poussée, même sans ventilation optimale.</p>`
        },
        {
          question: "Comment traitez-vous des taches anciennes et auréoles sur un tapis dans une maison de la Pièce-aux-Chats ?",
          answer: `<p>Les taches anciennes nécessitent un pré-traitement ciblé avant le passage en injection-extraction. Nous identifions l'origine probable (café, vin, graisse) pour choisir le produit adapté. Certaines auréoles très anciennes peuvent s'atténuer sans disparaître totalement : nous vous informons du résultat attendu avant de commencer.</p>`
        },
        {
          question: "Avec les contraintes d'accès aux Totems, comment organisez-vous une intervention nettoyage canapé à domicile ?",
          answer: `<p>Nous anticipons le stationnement et prévoyons le portage du matériel si l'accès véhicule est limité. Un repérage préalable permet d'estimer le temps de mise en place. L'intervention elle-même reste identique : diagnostic, traitement, extraction. Seule la logistique d'arrivée s'adapte aux spécificités de l'immeuble.</p>`
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse à Noisiel, avec traitement adapté au support et application anti-mousse pour retrouver une surface saine et praticable.",
      whyUsBullets: [
        "Connaissance des terrasses ombragées et humides des quartiers proches de la Marne, où mousses et lichens s'installent rapidement.",
        "Adaptation des techniques selon le support : pression contrôlée sur pierre, traitement doux sur brique, produits spécifiques bois et composite.",
        "Protection systématique du mobilier et des plantations, gestion de l'évacuation d'eau vers les écoulements existants du jardin."
      ],
      uniqueIntro: `<p>Les dépôts verts et traces noirâtres s'installent progressivement sur les terrasses-jardins de la <strong>Cité Menier</strong> et du secteur <strong>Pièce-aux-Chats</strong>. L'exposition ombragée, combinée à la proximité de la Marne, favorise l'apparition de mousses et lichens sur les pavés, briques anciennes ou dalles gravillonnées. Ces surfaces deviennent glissantes dès les premières pluies, limitant l'usage de l'espace extérieur.</p>
<p class="mt-4">Un traitement adapté redonne à la terrasse son aspect d'origine et sa fonction première : un prolongement du logement utilisable en toute saison. Les supports patrimoniaux en brique ou pierre nécessitent une approche différente des terrasses bois ou composite installées lors de rénovations récentes. Chaque matériau réagit différemment à l'humidité et aux méthodes de nettoyage.</p>
<p class="mt-4">L'intervention intègre un diagnostic préalable du revêtement, le choix de la technique appropriée et l'application d'un traitement préventif. L'accès parfois uniquement par le jardin privatif dans les secteurs arborés impose une organisation spécifique du chantier et de l'évacuation des eaux.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Le mobilier extérieur, jardinières et plantes sont déplacés ou bâchés. Les menuiseries, baies vitrées et seuils de porte reçoivent une protection adaptée. Un balayage préalable élimine feuilles mortes, terre et débris accumulés.</p>

<h3>Traitement et nettoyage</h3>
<p>Un produit spécifique au support est appliqué : formulation douce pour briques et pierres anciennes, dégraissant pour dalles béton, nettoyant bois pour terrasses composite. Le brossage manuel ou mécanique décolle mousses et salissures incrustées. La haute pression intervient uniquement sur les matériaux compatibles, avec réglage adapté pour préserver joints et surfaces poreuses.</p>

<h3>Rinçage et finition</h3>
<p>L'eau de rinçage est dirigée vers les points d'écoulement existants. Un traitement anti-mousse préventif prolonge la durée du résultat. Les garde-corps, murets et escaliers extérieurs sont traités dans la même intervention. Le mobilier est remis en place après séchage de la surface.</p>`,
      specificChallenges: [
        "Mousses et lichens favorisés par l'humidité de la Marne et l'ombre des arbres dans les jardins.",
        "Supports patrimoniaux en brique ou pavés anciens nécessitant un traitement sans haute pression agressive.",
        "Accès parfois uniquement par l'intérieur du logement dans les maisons mitoyennes de la Cité Menier.",
        "Terrasses bois ou composite récentes demandant des produits adaptés pour éviter le grisaillement.",
        "Évacuation d'eau à organiser dans les jardins clos sans regard direct sur la voirie."
      ],
      faqAdditions: [
        {
          question: "Comment éliminez-vous mousses et lichens sur les terrasses-jardins patrimoniales de la Cité Menier sans abîmer la pierre ?",
          answer: `<p>Un produit anti-mousse biodégradable est appliqué et laissé agir avant brossage manuel. La haute pression n'intervient qu'à faible intensité sur les pierres et briques anciennes. Cette méthode préserve les joints et la patine du matériau tout en éliminant les végétaux incrustés.</p>`
        },
        {
          question: "Quel risque pour les dalles sur plots et quelle méthode privilégiez-vous dans le secteur Ferme du Buisson ?",
          answer: `<p>Les dalles sur plots supportent mal une pression trop forte qui peut les déplacer ou endommager les joints. Nous utilisons un nettoyage basse pression combiné à un brossage mécanique. L'eau s'évacue naturellement entre les plots sans stagner sous le revêtement.</p>`
        },
        {
          question: "Quel traitement anti-mousse appliquez-vous sur les pavés et briques des terrasses à Noisiel ?",
          answer: `<p>Après nettoyage, un produit préventif à action lente est pulvérisé sur l'ensemble de la surface. Il empêche la repousse des mousses pendant plusieurs mois. La formulation respecte les matériaux poreux et ne modifie pas l'aspect naturel de la brique ou de la pierre.</p>`
        },
        {
          question: "Quelle saison recommandez-vous pour un décrassage complet de terrasse proche de la Marne ?",
          answer: `<p>Le printemps et le début d'automne offrent les meilleures conditions : températures douces pour le séchage et humidité modérée. Éviter les périodes de gel ou de forte chaleur qui compliquent l'action des produits. Un nettoyage avant l'été permet de profiter pleinement de l'espace extérieur.</p>`
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, des sols aux vitres, avec traitement des résidus de chantier ou préparation soignée avant état des lieux.",
      whyUsBullets: [
        "Connaissance des logements locatifs proches du RER et des maisons rénovées de la Cité Menier.",
        "Équipement polyvalent pour traiter parquet ancien, carrelage, PVC et vitres intérieures.",
        "Coordination anticipée avec agences et propriétaires pour respecter les délais d'état des lieux."
      ],
      uniqueIntro: `<p>Comment rendre un appartement impeccable quand les travaux viennent de s'achever ou qu'un locataire libère les lieux sous quelques jours ? Au Luzard comme dans la Cité Menier, les rotations locatives et les chantiers de rénovation laissent derrière eux poussière fine, traces de peinture et résidus tenaces sur toutes les surfaces. Sans intervention structurée, ces dépôts s'incrustent et compliquent la remise en location ou la vente.</p>
<p class="mt-4">Un nettoyage complet transforme concrètement l'état du bien : sols débarrassés des voiles de ciment, vitres intérieures sans coulures, sanitaires désinfectés. Pour les appartements sur dalle des années 80 ou les maisons en brique à parquet ancien, chaque revêtement reçoit un traitement adapté. Le logement retrouve une propreté visible qui rassure agences, propriétaires et futurs occupants.</p>
<p class="mt-4">À Noisiel, les contraintes d'accès — digicodes, stationnement limité près de la gare RER, ruelles étroites de la cité historique — imposent une organisation anticipée. Nous coordonnons horaires, matériel et accès avant chaque intervention pour respecter vos délais de remise des clés.</p>`,
      uniqueDeepDive: `<h3>Un logement prêt à habiter ou à visiter</h3>
<p>L'objectif est de livrer un bien où chaque surface a été traitée : sols propres, vitres transparentes, pièces d'eau désinfectées. Ce résultat permet une remise de clés sereine, que ce soit pour un état des lieux sortant ou une entrée locataire.</p>

<h3>Diagnostic et traitement ciblé par zone</h3>
<p>Nous commençons par identifier la nature de l'intervention : fin de chantier, déménagement, sinistre léger. Chaque pièce est ensuite traitée selon ses spécificités. Les résidus de peinture ou d'enduit sont retirés des menuiseries. Les sols — parquet, carrelage, PVC — reçoivent un nettoyage adapté à leur matériau.</p>

<h3>Finitions et contrôle avant remise</h3>
<p>Les pièces d'eau sont décrassées en profondeur : faïence, robinetterie, joints. Les détails souvent oubliés — interrupteurs, plinthes, intérieurs de placards — sont essuyés. Un contrôle final vérifie l'ensemble avant aération du logement et restitution des clés.</p>`,
      specificChallenges: [
        "Rotation locative soutenue près de la gare RER, délais serrés avant remise des clés.",
        "Rénovations fréquentes dans la Cité Menier : résidus de peinture sur parquets anciens.",
        "Stationnement limité et digicodes au Luzard : portage du matériel à anticiper.",
        "Appartements sur dalle avec accès piéton uniquement : organisation logistique spécifique.",
        "Sols variés selon les quartiers : PVC locatif, carrelage récent ou parquet d'époque."
      ],
      faqAdditions: [
        {
          question: "Pour un nettoyage de fin de chantier dans la Cité Menier, quelles traces de peinture et colle traitez-vous en priorité ?",
          answer: `<p>Nous retirons les projections de peinture sur les menuiseries, les coulures sur les vitres et les résidus de colle sur les parquets anciens. Les voiles de plâtre ou de ciment sur les sols sont décapés sans abîmer le revêtement d'origine, fréquent dans ce quartier patrimonial.</p>`
        },
        {
          question: "Combien de temps avant l'état des lieux intervenez-vous pour un ménage complet d'un appartement proche gare Noisiel ?",
          answer: `<p>Nous intervenons généralement 24 à 48 heures avant la date prévue. Ce délai permet un séchage complet des sols et une aération suffisante. Pour les logements à forte rotation près du RER, nous ajustons nos créneaux selon vos contraintes de remise des clés.</p>`
        },
        {
          question: "Quel niveau de propreté garantissez-vous pour remise en location d'un T2 près du Lycée Gérard de Nerval ?",
          answer: `<p>Le logement est livré avec sols lavés, vitres intérieures nettoyées, sanitaires désinfectés et placards essuyés. Ce niveau correspond aux attentes des agences pour un état des lieux entrant sans réserve. Si un point nécessite une repasse, nous revenons sans frais supplémentaires.</p>`
        },
        {
          question: "Avec digicodes et stationnement limité au Luzard, comment planifiez-vous l'accès et le matériel pour un ménage professionnel ?",
          answer: `<p>Nous récupérons les codes d'accès et badges en amont. Le matériel est conditionné pour un portage à pied si le stationnement reste éloigné. Nous privilégions les créneaux hors marché pour éviter les restrictions de circulation et garantir une intervention fluide.</p>`
        }
      ],
      ctaOverride: ""
    }
  ],
};

export default city;