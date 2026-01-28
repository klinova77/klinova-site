import type { City } from "~/types/geo";

const city: City = {
  name: "Champigny-sur-Marne",
  slug: "champigny-sur-marne",
  postalCodes: ["94500"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Champigny-sur-Marne pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux contraintes du Plateau comme aux résidences des bords de Marne.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 <p> then <ul>
  hubIntro: `<p>Sur les hauteurs du Plateau et le long des boucles de la Marne, Champigny-sur-Marne présente des configurations variées qui demandent une connaissance fine du terrain. Klinova s'appuie sur cette proximité pour coordonner ses interventions avec réactivité.</p>
<p class="mt-4">Halls d'immeubles, parkings en sous-sol, balcons exposés aux intempéries : chaque prestation s'organise selon les accès, les horaires acceptables et les attentes du donneur d'ordre. Un interlocuteur dédié assure le suivi et transmet un compte-rendu si nécessaire.</p>
<ul>
  <li><strong>Planification selon vos contraintes :</strong> Horaires décalés possibles pour limiter la gêne des occupants, coordination avec gardiens ou gestionnaires avant chaque passage.</li>
  <li><strong>Matériel adapté au site :</strong> Équipements dimensionnés selon la surface et la configuration — sous-sols étroits, escaliers sans ascenseur, accès par badge.</li>
  <li><strong>Suivi transparent :</strong> Reporting disponible sur demande, photos avant/après transmises au gestionnaire pour les interventions ponctuelles ou récurrentes.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Topographie marquée</strong> entre le Plateau et les bords de Marne, véhicules chargés à adapter.",
    "Grands ensembles avec <strong>parkings souterrains souvent encrassés</strong> par le trafic quotidien.",
    "Poussières de chantier liées aux <strong>travaux du Grand Paris Express</strong> sur certains secteurs.",
    "Résidences pavillonnaires avec <strong>accès par rues étroites</strong> et stationnement limité.",
    "Proximité de l'A4 générant des <strong>dépôts de suies grasses</strong> sur les façades et balcons.",
    "Halls ouverts dans les cités nécessitant des <strong>interventions rapides et discrètes</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville / Musselburgh",
    "Cœuilly",
    "Le Plant",
    "Le Bois l'Abbé",
    "Les Mordacs",
    "Le Tremblay",
    "Polangis",
    "Le Maroc",
    "Les Boullereaux",
    "Village Parisien",
  ],
  nearbyCities: [
        "villiers-sur-marne",
        "saint-maur-des-fosses",
        "noisy-le-grand",
        "le-perreux-sur-marne",
        "nogent-sur-marne",
        "joinville-le-pont",
        "le-plessis-trevise",
        "fontenay-sous-bois",
        "neuilly-plaisance",
        "neuilly-sur-marne"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Champigny-sur-Marne",
    "Parc du Plateau",
    "Gare RER E Les Boullereaux-Champigny",
    "Parc du Tremblay",
    "Musée de la Résistance Nationale",
    "Pont de Champigny",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
faq: [
  {
    question:
      "Comment organisez-vous vos interventions dans les quartiers où le stationnement est compliqué ?",
    answer:
      "<p><strong>Autour de la gare et en centre-ville</strong>, nous repérons à l’avance les zones de dépose et les créneaux possibles. <strong>Le matériel est préparé</strong> pour limiter les allers-retours. Si besoin, nous proposons un passage <strong>tôt le matin</strong> ou <strong>en fin de journée</strong> pour éviter les périodes de saturation.</p>",
  },
  {
    question: "Proposez-vous un devis avant intervention ?",
    answer:
      "<p><strong>Oui, systématiquement.</strong> Nous validons d’abord <strong>les surfaces</strong>, <strong>les accès</strong> et <strong>les contraintes</strong> (horaires, parking, parties communes). Le devis est ensuite transmis <strong>rapidement</strong> et <strong>sans engagement</strong>. Pour une copropriété ou un site complexe, une <strong>visite technique</strong> peut être proposée.</p>",
  },
  {
    question: "Pouvez-vous intervenir en urgence à Champigny-sur-Marne ?",
    answer:
      "<p><strong>Selon nos disponibilités</strong>, nous pouvons traiter les demandes urgentes. Un premier échange permet d’évaluer la situation et de confirmer un <strong>créneau rapide</strong>. En cas de <strong>dégradation importante</strong> ou de besoin de remise en propreté prioritaire, nous faisons le maximum pour intervenir <strong>dans les meilleurs délais</strong>.</p>",
  },
  {
    question:
      "Comment se passe la coordination avec un syndic ou un gestionnaire de site ?",
    answer:
      "<p><strong>Un interlocuteur unique</strong> suit le dossier. Avant intervention, nous calons <strong>les accès</strong> (digicode, clés, gardien), <strong>les horaires</strong> et le besoin de <strong>balisage</strong>. Après passage, un <strong>compte-rendu</strong> peut être transmis sur demande, notamment pour les résidences des <strong>Hautes Noues</strong> et du <strong>secteur gare</strong>.</p>",
  },
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
      heroDescription: "Extraction des salissures incrustées dans vos moquettes par injection-extraction, avec séchage maîtrisé pour une remise en usage rapide de vos espaces.",
      whyUsBullets: [
        "Connaissance du bâti campinois, des pavillons de Cœuilly aux immeubles collectifs du centre-ville.",
        "Matériel d'injection-extraction professionnel adapté aux moquettes épaisses comme aux dalles textiles de bureaux.",
        "Interventions planifiées en horaires décalés pour limiter la gêne dans les copropriétés et locaux professionnels.",
      ],
      uniqueIntro: `<p>Après quelques années d'usage, les moquettes des pavillons du quartier Cœuilly ou des bureaux installés sur la Zone Industrielle du Plateau finissent par accumuler des traces que l'aspirateur ne déloge plus. Café renversé dans un open space, passages répétés dans un couloir de copropriété, poussières fines ramenées depuis les axes routiers proches : les fibres se ternissent et retiennent des résidus tenaces.</p>
<p class="mt-4">Un revêtement textile encrassé modifie l'atmosphère d'un lieu. Dans les immeubles collectifs des années 70-80, les halls moquettés perdent leur aspect d'origine et peuvent générer des remarques de copropriétaires. À domicile, un salon dont le sol paraît grisâtre donne une impression de négligence malgré un entretien régulier. Redonner de la fraîcheur aux fibres change la perception immédiate de l'espace.</p>
<p class="mt-4">Une intervention structurée permet d'adapter le traitement au type de moquette et aux contraintes d'accès. Que ce soit dans un escalier étroit ou un plateau de bureaux, le diagnostic préalable oriente le choix des passes et la gestion du séchage.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute action, nous identifions la nature de la moquette : bouclée, velours, épaisse ou fine. Les taches sont repérées selon leur origine — tanin, graisse, traces anciennes — pour adapter le pré-traitement.</p>
<p class="mt-4">Les plinthes et bas de murs sont protégés. Dans les parties communes, un balisage signale l'intervention aux résidents. Une aspiration préalable retire les particules libres.</p>

<h3>Traitement par injection-extraction</h3>
<p>La machine injecte une solution adaptée dans les fibres puis aspire immédiatement l'eau chargée de salissures. Les zones de fort passage reçoivent plusieurs passes pour déloger les résidus incrustés.</p>
<p class="mt-4">Un détachage ciblé complète le travail sur les marques persistantes, notamment les auréoles de café ou les traces grasses.</p>

<h3>Séchage et remise en service</h3>
<p>L'extraction maximale limite l'humidité résiduelle. Le temps de séchage varie selon l'épaisseur du revêtement et la ventilation du local — généralement quelques heures en conditions normales.</p>
<p class="mt-4">Des consignes de non-piétinement sont transmises pour préserver le résultat. La fréquence d'entretien recommandée dépend de l'intensité d'usage.</p>`,
      specificChallenges: [
        "Halls moquettés des années 70-80 avec fibres compactées par des décennies de passage.",
        "Bureaux de la ZI du Plateau où les dalles textiles accumulent poussières et traces de semelles.",
        "Stationnement contraint en centre-ville nécessitant une organisation logistique anticipée.",
        "Pavillons de Cœuilly avec escaliers intérieurs moquettés et accès parfois étroits.",
        "Séchage à adapter selon la ventilation variable des locaux, du sous-sol au dernier étage.",
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous l'intervention dans les copropriétés du centre-ville de Champigny où le stationnement est difficile ?",
          answer: `<p>Nous repérons les possibilités de stationnement en amont et convenons d'un créneau avec le syndic ou le gardien. Le matériel est acheminé rapidement depuis le véhicule. Un balisage informe les résidents pendant l'intervention pour éviter les passages sur les zones humides.</p>`,
        },
        {
          question: "Les taches anciennes sur une moquette de salon à Cœuilly peuvent-elles vraiment s'atténuer ?",
          answer: `<p>Les marques incrustées depuis plusieurs mois répondent généralement bien à l'injection-extraction combinée à un pré-traitement adapté. Le résultat dépend de la nature de la tache et de l'état des fibres, mais une amélioration visible est obtenue dans la grande majorité des cas.</p>`,
        },
        {
          question: "Combien de temps faut-il attendre avant de remarcher sur la moquette après votre passage ?",
          answer: `<p>Le séchage prend généralement entre trois et six heures selon l'épaisseur du revêtement et l'aération du local. Nous conseillons d'éviter le piétinement pendant ce délai pour ne pas marquer les fibres encore humides et préserver la propreté obtenue.</p>`,
        },
        {
          question: "Votre méthode convient-elle aux dalles textiles des bureaux sur le Plateau ?",
          answer: `<p>L'injection-extraction s'adapte parfaitement aux dalles textiles courantes dans les locaux professionnels. La technique permet de traiter les zones de circulation intense sans détremper le support, avec un séchage rapide compatible avec la reprise d'activité.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec autolaveuse et gestion stricte des eaux de lavage pour des sols assainis et sécurisés.",
      whyUsBullets: [
        "Connaissance des parkings souterrains des résidences et des aires extérieures de la ZI du Plateau à Champigny.",
        "Autolaveuses professionnelles et gestion conforme des eaux de lavage, adaptées aux revêtements béton ou résine.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: `<p>Les traces d'huile, les coulures grasses et la poussière accumulée sont visibles sur de nombreux sols de parkings à Champigny-sur-Marne. Dans les souterrains des résidences du <strong>Bois l'Abbé</strong> ou les aires de stationnement de la <strong>Zone Industrielle du Plateau</strong>, le béton noircit progressivement sous l'effet du trafic quotidien et des véhicules stationnés longtemps.</p>
<p class="mt-4">Un sol encrassé génère des plaintes de copropriétaires, dégrade l'image des locaux professionnels et pose des questions de sécurité sur les rampes d'accès. Les parkings des <strong>grands ensembles années 60-70</strong> présentent souvent des revêtements béton brut particulièrement poreux, où les taches s'incrustent rapidement si aucun entretien régulier n'est programmé.</p>
<p class="mt-4">L'intervention s'organise en coordination avec le syndic ou le gestionnaire : balisage des zones, rotation des véhicules par secteur, et passage mécanisé adapté au revêtement. La topographie vallonnée de la ville, notamment sur le Plateau, impose une attention particulière aux rampes et aux systèmes d'évacuation.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation du chantier</h3>
<p>Repérage du revêtement (béton brut, résine, peinture) et vérification de l'état des évacuations. Le niveau d'encrassement détermine le choix entre haute pression et autolaveuse.</p>
<p class="mt-4">Balayage préalable des débris et mise en place du balisage. La signalétique sécurise les accès piétons et véhicules pendant toute la durée des travaux.</p>

<h3>Lavage mécanisé et traitement des zones critiques</h3>
<p>Passage de l'autolaveuse avec dégraissant adapté sur les surfaces planes. Les rampes d'accès reçoivent un traitement spécifique pour conserver leur adhérence.</p>
<p class="mt-4">Angles morts, pieds de murs et rigoles font l'objet d'un nettoyage ciblé à la lance ou à la brosse rotative.</p>

<h3>Gestion des eaux et finalisation</h3>
<p>Récupération stricte des eaux de lavage vers les évacuations existantes, sans rejet sauvage. Contrôle du bon écoulement dans les regards.</p>
<p class="mt-4">Dépoussiérage des blocs lumineux et tuyauteries si demandé. Recommandations de fréquence transmises au gestionnaire selon le trafic constaté.</p>`,
      specificChallenges: [
        "Rampes d'accès pentues sur le Plateau : traitement antidérapant indispensable après lavage.",
        "Parkings souterrains des grands ensembles souvent dépourvus de ventilation efficace.",
        "Taches d'huile anciennes incrustées dans le béton brut des résidences années 70.",
        "Coordination nécessaire avec les gardiens pour organiser le déplacement des véhicules.",
        "Évacuations parfois obstruées dans les parkings peu entretenus.",
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous la rotation des véhicules dans les parkings des résidences du Bois l'Abbé ?",
          answer: `<p>Le chantier se découpe en zones successives. Les résidents sont prévenus à l'avance pour libérer leur emplacement selon un planning établi avec le syndic. Le balisage sécurise chaque secteur pendant le passage de l'autolaveuse, puis les véhicules peuvent regagner leur place une fois le sol sec.</p>`,
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans les parkings souterrains de Champigny ?",
          answer: `<p>Les eaux chargées sont dirigées vers les évacuations existantes après vérification de leur bon fonctionnement. Aucun rejet sauvage n'est effectué. Si les regards sont partiellement obstrués, un débouchage préalable peut être proposé pour garantir l'écoulement correct pendant et après l'intervention.</p>`,
        },
        {
          question: "Quelle fréquence recommandez-vous pour les parkings de la Zone Industrielle du Plateau ?",
          answer: `<p>Le trafic poids lourds et la poussière industrielle justifient généralement un décrassage trimestriel. Pour les parkings à usage intensif avec véhicules de livraison, un passage bimestriel limite l'accumulation de graisse et préserve l'état du revêtement sur le long terme.</p>`,
        },
        {
          question: "Adaptez-vous le lavage selon le revêtement des parkings à Champigny ?",
          answer: `<p>Oui, le diagnostic initial identifie le type de sol : béton brut, résine ou peinture. La pression et les produits sont ajustés en conséquence. Les revêtements résine des résidences récentes nécessitent une approche plus douce que le béton poreux des constructions anciennes.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion maîtrisée des eaux de rinçage pour préserver votre voisinage.",
      whyUsBullets: [
        "Connaissance des contraintes locales : humidité des bords de Marne, pollution des axes routiers, balcons ombragés par la végétation.",
        "Pression ajustée selon le support et l'état des joints, sans risque pour le carrelage ou les dalles sur plots.",
        "Protection systématique du voisinage avec récupération des eaux et intervention aux horaires convenus avec vous.",
      ],
      uniqueIntro: `<p>Les traces vertes s'installent progressivement sur les dalles, les joints noircissent, et le carrelage perd son aspect d'origine. Dans le quartier Polangis, où l'humidité remonte des boucles de la Marne, ces dépôts apparaissent souvent dès les premiers mois suivant un nettoyage superficiel. Les balcons exposés plein nord ou ombragés par la végétation environnante accumulent mousses et salissures tenaces que le balai seul ne délogera pas.</p>
<p class="mt-4">Retrouver un espace extérieur agréable change le quotidien : on ressort les chaises, on profite des matinées ensoleillées, on reçoit sans gêne. Sur les immeubles collectifs des années 60-70, les balcons filants en béton brut demandent un traitement adapté pour éviter d'abîmer les joints ou de laisser des traces de pression mal dosée. Les loggias des grands ensembles présentent des contraintes similaires, avec parfois un accès restreint pour le matériel.</p>
<p class="mt-4">Notre intervention suit un protocole structuré : diagnostic du support, protection des éléments sensibles, traitement ciblé et rinçage contrôlé. Nous adaptons la méthode selon l'exposition et la configuration, notamment pour les résidences proches des axes passants comme l'avenue du Général de Gaulle où la pollution atmosphérique accentue l'encrassement.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Nous commençons par déplacer ou bâcher le mobilier et les plantes présents sur le balcon. Les menuiseries, fenêtres et portes sont protégées pour éviter toute projection. Les gros dépôts visibles — feuilles mortes, terre accumulée, débris divers — sont retirés manuellement avant le traitement.</p>

<h3>Traitement adapté au support</h3>
<p>Le produit appliqué dépend du revêtement : carrelage, béton brut, dalles sur plots ou bois composite. Un brossage manuel ou mécanique déloge les salissures incrustées dans les joints. Si l'état le justifie, une pression douce et contrôlée complète le travail sans risquer d'endommager les surfaces fragiles.</p>

<h3>Rinçage et finitions</h3>
<p>Le rinçage s'effectue avec une gestion stricte des eaux pour éviter les coulures chez les voisins du dessous. Garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée. Nous vérifions le séchage et vous transmettons des conseils d'entretien pour prolonger le résultat obtenu.</p>`,
      specificChallenges: [
        "Mousses tenaces sur les balcons exposés nord, fréquents dans les secteurs proches de la Marne.",
        "Joints fragilisés sur les balcons béton des années 60-70 nécessitant une pression maîtrisée.",
        "Gestion des eaux de rinçage en immeuble collectif pour éviter les coulures chez les voisins.",
        "Dépôts de pollution atmosphérique accentués à proximité de l'avenue du Général de Gaulle.",
        "Accès parfois restreint dans les loggias des grands ensembles pour le passage du matériel.",
      ],
      faqAdditions: [
        {
          question: "Comment gérez-vous l'évacuation de l'eau sur un balcon d'immeuble collectif à Champigny-sur-Marne ?",
          answer: `<p>Nous utilisons des techniques de rinçage contrôlé avec aspiration ou récupération des eaux excédentaires. Sur les résidences du quartier Polangis ou des grands ensembles, nous vérifions l'absence de coulures vers les balcons inférieurs avant de quitter les lieux.</p>`,
        },
        {
          question: "Pouvez-vous traiter les dépôts verts incrustés sur un balcon exposé à l'humidité des bords de Marne ?",
          answer: `<p>Les mousses et dépôts verts liés à l'humidité ambiante répondent bien à un traitement combinant produit adapté et brossage mécanique. Nous ajustons l'intensité selon l'épaisseur des dépôts et l'état du support pour un résultat durable sans abîmer les joints.</p>`,
        },
        {
          question: "Quelle différence de traitement entre un balcon carrelé et des dalles sur plots dans une résidence récente ?",
          answer: `<p>Les dalles sur plots demandent une attention particulière aux interstices où s'accumulent débris et eau stagnante. Nous adaptons la pression et le rinçage pour nettoyer efficacement sans déplacer les dalles ni endommager le système de pose.</p>`,
        },
        {
          question: "À quelle fréquence recommandez-vous un nettoyage pour un balcon exposé à la pollution de l'avenue du Général de Gaulle ?",
          answer: `<p>Les balcons situés près des axes passants accumulent plus rapidement suies et particules grasses. Un entretien annuel, idéalement au printemps, permet de maintenir un aspect propre et d'éviter que les dépôts ne s'incrustent durablement dans le revêtement.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des volatiles.",
      whyUsBullets: [
        "Connaissance des zones exposées à Champigny, notamment les secteurs proches du Parc du Tremblay et des bords de Marne.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection homologuée sur tous les supports.",
        "Organisation pensée pour limiter les nuisances : bâchage discret, évacuation sécurisée, coordination possible avec le voisinage.",
      ],
      uniqueIntro: `<p>Les traces blanchâtres et les amas de fientes sont visibles sur de nombreux balcons à Champigny-sur-Marne, particulièrement dans les secteurs proches du <strong>Parc du Plateau</strong> et des grands espaces verts qui attirent les colonies de pigeons. Ces dépôts s'accumulent sur le sol, les garde-corps et les rebords de fenêtres, créant une situation difficile à gérer sans équipement adapté.</p>
<p class="mt-4">Au-delà de l'aspect visuel dégradé, ces souillures rendent l'espace inutilisable : odeur persistante qui imprègne le linge étendu, surface glissante après la pluie, hésitation à ouvrir les fenêtres. Dans les <strong>immeubles collectifs des années 60-70</strong> comme ceux du Bois l'Abbé ou des Mordacs, les balcons filants et loggias exposés deviennent des zones délaissées faute de solution efficace.</p>
<p class="mt-4">Un traitement structuré permet de retrouver un balcon sain : diagnostic de l'ampleur des dépôts, protocole de décontamination adapté aux supports présents, et recommandations pour limiter le retour des volatiles.</p>`,
      uniqueDeepDive: `<h3>Sécurisation et confinement</h3>
<p>L'intervenant porte un équipement de protection complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>
<p class="mt-4">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières potentiellement contaminées.</p>

<h3>Collecte et traitement des supports</h3>
<p>Les dépôts sont ramassés et conditionnés dans des sacs étanches. Le sol du balcon, les garde-corps, les vitrages et les murs mitoyens sont nettoyés méthodiquement.</p>
<p class="mt-4">Un produit désinfectant virucide et bactéricide est appliqué sur l'ensemble des surfaces avec un temps de contact respecté pour éliminer les agents pathogènes.</p>

<h3>Rinçage et prévention</h3>
<p>Un rinçage final prépare le balcon à une réutilisation après un court délai d'aération. Selon la configuration, des solutions de dissuasion peuvent être proposées : pics sur les corniches, filets de protection ou gel répulsif sur les rebords.</p>
<p class="mt-4">Les déchets sont évacués dans leurs contenants étanches.</p>`,
      specificChallenges: [
        "Proximité des parcs : les espaces verts du Plateau et du Tremblay favorisent la présence de colonies.",
        "Balcons filants des grands ensembles souvent exposés aux dépôts sur plusieurs mètres linéaires.",
        "Loggias semi-fermées où les fientes s'accumulent à l'abri, rendant le nettoyage plus complexe.",
        "Corniches des immeubles anciens du centre-ville propices à la nidification.",
        "Accès parfois contraint dans les résidences sans ascenseur fonctionnel pour le matériel.",
      ],
      faqAdditions: [
        {
          question: "Les fientes de pigeons sur mon balcon près du Parc du Plateau présentent-elles un risque réel pour ma santé ?",
          answer: `<p>Les déjections de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Le risque augmente avec l'accumulation et le confinement. Un assainissement avec désinfection élimine ces agents et permet de réutiliser l'espace sans inquiétude.</p>`,
        },
        {
          question: "Comment la désinfection agit-elle sur les supports de mon balcon à Champigny ?",
          answer: `<p>Le produit utilisé est homologué virucide et bactéricide. Il est appliqué après le nettoyage mécanique et laissé en contact le temps nécessaire pour neutraliser les micro-organismes. Cette étape est indispensable pour un résultat sanitaire complet, pas seulement visuel.</p>`,
        },
        {
          question: "Quelles solutions anti-retour proposez-vous après le traitement dans les immeubles des Mordacs ou du Bois l'Abbé ?",
          answer: `<p>Selon la configuration du balcon, nous pouvons recommander des pics anti-pigeons sur les rebords et corniches, des filets de protection pour les loggias ouvertes, ou un gel répulsif. Ces dispositifs réduisent significativement les risques de nouvelle colonisation.</p>`,
        },
        {
          question: "Comment gérez-vous les nuisances pour mes voisins pendant l'intervention dans un immeuble collectif ?",
          answer: `<p>La zone est confinée par bâchage pour éviter les projections et les odeurs. L'intervention reste discrète et les déchets sont évacués dans des sacs étanches. Si nécessaire, nous pouvons coordonner les horaires avec le voisinage direct pour limiter la gêne.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance du tissu résidentiel campinois, des pavillons familiaux aux appartements en copropriété.",
        "Détachage ciblé selon la nature des taches et injection-extraction adaptée à chaque fibre textile.",
        "Intervention planifiée selon vos disponibilités, avec consignes de séchage personnalisées.",
      ],
      uniqueIntro: `<p>Après quelques années d'usage quotidien, les textiles d'ameublement accumulent ce que l'aspirateur ne capte pas : poussières fines, résidus alimentaires, traces d'animaux. Dans les pavillons du quartier Cœuilly comme dans les appartements du centre-ville, canapés et tapis finissent par ternir, retenir les odeurs, perdre leur confort d'origine. Les familles avec enfants ou animaux domestiques constatent souvent des auréoles tenaces sur les assises et des fibres écrasées sur les tapis de salon.</p>
<p class="mt-4">Un rafraîchissement adapté redonne aux textiles leur aspect et leur fraîcheur. Les couleurs retrouvent de l'éclat, les odeurs incrustées disparaissent, l'assise redevient agréable. Dans les résidences récentes des Boullereaux ou les maisons anciennes de Polangis, cette remise en état améliore le confort quotidien et prolonge la durée de vie du mobilier.</p>
<p class="mt-4">L'intervention commence par un diagnostic textile pour identifier les fibres et adapter le traitement. Chaque support — coton, velours, synthétique — reçoit une méthode spécifique, avec des consignes de séchage claires selon l'épaisseur et la ventilation du logement.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et pré-traitement</h3>
<p>Avant toute intervention, nous identifions le type de tissu et la nature des taches présentes. Un test discret sur une zone cachée permet de valider la compatibilité du traitement avec les fibres fragiles.</p>
<p class="mt-4">Les taches localisées — café, vin, urine, graisse — reçoivent un détachage ciblé avec des produits enzymatiques adaptés. Cette étape prépare le textile au nettoyage principal.</p>

<h3>Injection-extraction textile</h3>
<p>Le traitement principal utilise la technique d'injection-extraction : une solution nettoyante pénètre les fibres en profondeur, puis l'aspiration puissante retire l'eau chargée de salissures.</p>
<p class="mt-4">La pression et la température sont ajustées selon le support. Un velours ou une laine demande plus de précautions qu'un tissu synthétique résistant.</p>

<h3>Extraction finale et séchage</h3>
<p>L'extraction maximale limite le temps de séchage. Nous indiquons le délai de remise en service selon l'épaisseur du textile et la ventilation disponible — généralement quelques heures en été, davantage en période humide.</p>
<p class="mt-4">Des conseils d'entretien accompagnent chaque intervention pour espacer les prochains nettoyages.</p>`,
      specificChallenges: [
        "Taches d'animaux fréquentes dans les pavillons avec jardin du quartier Cœuilly.",
        "Textiles épais (velours, laine) nécessitant un séchage prolongé en période humide.",
        "Accès parfois contraint dans les résidences sécurisées du centre-ville.",
        "Canapés volumineux difficiles à déplacer dans les escaliers étroits des immeubles anciens.",
        "Auréoles anciennes sur textiles clairs demandant un pré-traitement enzymatique spécifique.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les taches d'urine animale sur un canapé dans les pavillons de Cœuilly ?",
          answer: `<p>Les taches d'urine nécessitent un détachage enzymatique qui décompose les résidus organiques en profondeur. Nous appliquons ce traitement avant l'injection-extraction pour neutraliser les odeurs à la source. Le textile retrouve sa fraîcheur sans résidu chimique agressif, compatible avec la présence d'animaux après séchage complet.</p>`,
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser un canapé nettoyé à Champigny-sur-Marne ?",
          answer: `<p>Le délai dépend de l'épaisseur du textile et de la ventilation du logement. En été avec fenêtres ouvertes, comptez généralement quatre à six heures. En période humide ou pour un velours épais, prévoyez une demi-journée. Nous vous indiquons le délai précis en fin d'intervention selon votre situation.</p>`,
        },
        {
          question: "Faut-il préparer le logement avant votre passage dans le quartier des Boullereaux ?",
          answer: `<p>Dégagez l'accès autour du canapé ou du tapis concerné pour faciliter notre travail. Retirez les coussins amovibles et les objets posés sur les surfaces à traiter. Si le stationnement est difficile près de la gare RER E, prévenez-nous pour que nous anticipions le temps de déchargement du matériel.</p>`,
        },
        {
          question: "À quelle fréquence recommandez-vous un nettoyage pour une famille avec enfants à Champigny ?",
          answer: `<p>Pour un usage familial intensif avec enfants ou animaux, un entretien annuel maintient les textiles en bon état. Si des taches apparaissent régulièrement, un passage tous les six à huit mois évite l'incrustation définitive. Les canapés clairs ou les tapis à poils longs demandent une attention plus fréquente.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement des mousses et dépôts verts, adapté au carrelage, aux dalles ou au bois composite pour retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des configurations pavillonnaires de Champigny, entre quartiers ombragés et expositions variables selon les secteurs.",
        "Maîtrise des traitements selon le support : carrelage, dalles gravillonnées, pierre naturelle ou bois composite avec anti-mousse adapté.",
        "Organisation soignée du passage intérieur et protection systématique du mobilier, des plantes et du voisinage.",
      ],
      uniqueIntro: `<p>Après quelques saisons, les terrasses des pavillons du <strong>quartier Cœuilly</strong> perdent leur aspect d'origine. Les dalles se couvrent de dépôts verdâtres, le carrelage devient glissant par temps humide, et le bois composite prend une teinte grisée. L'accumulation de feuilles mortes, la proximité des arbres et l'exposition variable accélèrent cette dégradation progressive.</p>
<p class="mt-4">Une terrasse encrassée, c'est un espace extérieur qu'on utilise moins. Les repas dehors deviennent rares, le mobilier reste rangé, et cette surface qui devrait prolonger le séjour se transforme en zone délaissée. Dans les maisons mitoyennes ou les résidences avec rez-de-jardin, le contraste avec les espaces intérieurs bien entretenus devient vite visible.</p>
<p class="mt-4">Notre intervention redonne à votre terrasse son aspect initial. Nous adaptons le traitement selon le support — carrelage, pierre, dalles gravillonnées ou bois — et prenons en charge la protection du mobilier et des plantations. Le passage par l'intérieur, fréquent dans les configurations de Champigny-sur-Marne, est organisé avec soin pour limiter toute gêne.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Avant toute intervention, nous déplaçons ou bâchons le mobilier extérieur, les jardinières et les plantes. Les menuiseries — baies vitrées, portes-fenêtres — sont protégées contre les projections. Un balayage préalable élimine les gros débris : feuilles accumulées, terre, résidus végétaux.</p>

<h3>Traitement adapté au support</h3>
<p>Le produit utilisé dépend du matériau : dégraissant pour carrelage, traitement doux pour pierre naturelle, nettoyant spécifique pour bois composite. Un brossage manuel ou mécanique décolle les mousses et lichens incrustés. La haute pression intervient uniquement sur les supports qui la tolèrent, avec une puissance contrôlée pour préserver les joints.</p>

<h3>Rinçage et séchage</h3>
<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont protégées pendant cette phase. Nous vérifions l'ensemble de la surface — y compris les escaliers extérieurs et murets si présents — avant de remettre le mobilier en place. Des conseils d'entretien saisonnier vous sont transmis pour prolonger le résultat.</p>`,
      specificChallenges: [
        "Mousses persistantes sur les terrasses ombragées des quartiers proches des bords de Marne.",
        "Dalles gravillonnées encrassées nécessitant un traitement sans haute pression agressive.",
        "Bois composite grisé par l'exposition et les intempéries dans les pavillons récents.",
        "Passage obligatoire par l'intérieur pour les maisons mitoyennes du secteur Polangis.",
        "Protection des plantations et gestion de l'écoulement vers les jardins voisins.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les mousses et lichens tenaces sur les terrasses ombragées du quartier Cœuilly ?",
          answer: `<p>Nous appliquons un traitement anti-mousse adapté au support, suivi d'un brossage mécanique pour décoller les dépôts incrustés. Sur les zones très ombragées, un produit préventif peut être proposé pour ralentir la réapparition. Le résultat est visible immédiatement, avec une efficacité prolongée sur plusieurs mois.</p>`,
        },
        {
          question: "Quelle différence de traitement entre une terrasse en carrelage et une en bois composite à Champigny-sur-Marne ?",
          answer: `<p>Le carrelage supporte un nettoyage plus appuyé avec dégraissant et haute pression modérée. Le bois composite nécessite un produit spécifique et une pression réduite pour éviter d'abîmer les fibres. Nous adaptons systématiquement la méthode au matériau identifié lors du diagnostic préalable.</p>`,
        },
        {
          question: "À quelle fréquence recommandez-vous un nettoyage pour les terrasses exposées aux arbres dans le secteur Polangis ?",
          answer: `<p>Dans les zones ombragées et proches de la végétation, un entretien annuel — idéalement au printemps — permet de limiter l'accumulation de mousses et de dépôts organiques. Pour les terrasses très exposées, un passage supplémentaire à l'automne après la chute des feuilles peut être pertinent.</p>`,
        },
        {
          question: "Quelle est la meilleure période pour faire nettoyer une terrasse à Champigny-sur-Marne ?",
          answer: `<p>Le printemps reste la période idéale : les températures permettent un séchage rapide et vous profitez de votre terrasse dès les beaux jours. L'automne convient aussi pour éliminer les résidus de l'été avant l'hiver. Nous intervenons toute l'année, hors gel ou pluie continue.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol au plafond, avec coordination des accès et respect des délais pour une restitution sans accroc.",
      whyUsBullets: [
        "Connaissance du parc locatif campinois, des résidences neuves aux pavillons de la Cité-jardin.",
        "Polyvalence sur tous types de sols : parquet ancien, carrelage, lino, surfaces vitrées.",
        "Coordination directe avec agences et bailleurs pour respecter les créneaux d'état des lieux.",
      ],
      uniqueIntro: `<p>Après plusieurs mois d'occupation ou à la suite de travaux de rénovation, un appartement accumule des traces que le ménage courant ne suffit plus à éliminer. Dans le secteur des Boullereaux, où la rotation locative reste soutenue autour de la gare RER E, les délais entre deux locataires laissent rarement le temps d'une remise en état approfondie sans organisation préalable.</p>
<p class="mt-4">Un logement rendu propre facilite la validation de l'état des lieux et évite les retenues sur caution. Dans les immeubles des années 60-70 du quartier du Maroc ou les résidences plus récentes, les sols mixtes — carrelage en pièces de vie, parquet dans les chambres — demandent un traitement adapté à chaque revêtement pour un rendu homogène.</p>
<p class="mt-4">L'intervention se structure autour d'un diagnostic initial, d'un planning calé sur vos contraintes et d'une coordination avec l'agence ou le propriétaire si nécessaire. Chaque pièce est traitée méthodiquement, des plafonds aux plinthes, pour une restitution conforme aux attentes.</p>`,
      uniqueDeepDive: `<h3>Évaluation et préparation</h3>
<p>Le technicien identifie la nature de l'intervention : fin de chantier, état des lieux sortant ou grand ménage ponctuel. Il repère les résidus à traiter — poussière de plâtre, traces de peinture, calcaire incrusté — et protège les surfaces fragiles avant de commencer.</p>

<h3>Traitement pièce par pièce</h3>
<p>Le dépoussiérage débute par les hauteurs : plafonds, luminaires, dessus de placards. Les pièces d'eau reçoivent un détartrage des sanitaires et un dégraissage des plans de travail. Les sols sont aspirés puis lavés selon leur nature, avec un passage spécifique sur les joints et les plinthes.</p>

<h3>Contrôle et remise des clés</h3>
<p>Un tour complet du logement permet de vérifier chaque zone : interrupteurs, poignées, intérieurs de placards. Les fenêtres intérieures sont essuyées, l'aération assurée. Le logement est prêt pour la visite ou la remise des clés, dans les délais convenus.</p>`,
      specificChallenges: [
        "Délais serrés entre deux locataires dans les résidences proches du RER E.",
        "Résidus de chantier persistants dans les programmes neufs en cours de livraison.",
        "Sols mixtes fréquents : carrelage, parquet et lino dans le même logement.",
        "Accès par digicode et badge Vigik à coordonner avec le gardien ou l'agence.",
        "Stationnement contraint en centre-ville pour le matériel d'intervention.",
      ],
      faqAdditions: [
        {
          question: "Quel délai prévoir pour une remise en état avant état des lieux dans le quartier des Boullereaux ?",
          answer: `<p>Nous intervenons généralement sous 48 à 72 heures après votre demande. Pour les rotations rapides près de la gare RER E, un créneau prioritaire peut être organisé en coordination avec votre agence, selon la surface et l'état du logement.</p>`,
        },
        {
          question: "Pouvez-vous vous coordonner avec mon agence immobilière pour un appartement situé dans le quartier du Maroc ?",
          answer: `<p>Oui, nous travaillons régulièrement avec les agences locales et les bailleurs sociaux de Champigny. Nous pouvons récupérer les clés, réaliser l'intervention et les restituer directement, en transmettant un compte-rendu si demandé.</p>`,
        },
        {
          question: "Intervenez-vous après un dégât des eaux dans les immeubles anciens du centre-ville ?",
          answer: `<p>Nous traitons les logements après sinistre une fois l'assèchement terminé. L'intervention couvre le nettoyage des traces d'humidité, le dépoussiérage complet et le lavage des sols, en adaptant les produits aux revêtements fragilisés.</p>`,
        },
        {
          question: "Comment se passe l'accès au logement si je ne peux pas être présent à Champigny ?",
          answer: `<p>Plusieurs options existent : remise des clés au gardien, dépôt en agence ou récupération via boîte à clés sécurisée. Nous confirmons l'accès la veille et vous informons dès la fin de l'intervention par message ou appel.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;