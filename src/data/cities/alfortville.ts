import type { City } from "~/types/geo";

const city: City = {
  name: "Alfortville",
  slug: "alfortville",
  postalCodes: ["94140"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Alfortville. Une équipe organisée pour répondre aux contraintes d'une ville dense, entre gare RER D et quartiers résidentiels du bord de Seine.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Must follow pattern: 2 paragraphs then a list
  hubIntro: `<p>Au confluent de la Seine et de la Marne, desservie par la gare RER D Maisons-Alfort - Alfortville, la commune concentre un bâti varié et des flux quotidiens importants. Klinova y intervient comme partenaire de proximité pour les syndics, gestionnaires et occupants.</p>

<p class="mt-4">Nos équipes assurent la propreté des halls, escaliers, parkings souterrains et espaces extérieurs. L'organisation s'adapte aux contraintes locales : stationnement difficile, voiries étroites, coordination avec gardiens ou concierges selon les résidences.</p>

<ul>
  <li><strong>Planification adaptée :</strong> Horaires calés sur les flux pendulaires vers la gare, interventions tôt le matin ou en journée selon l'occupation des immeubles.</li>
  <li><strong>Coordination terrain :</strong> Contact préalable avec gardiens et syndics pour accès badges, digicodes et gestion du stationnement véhicule.</li>
  <li><strong>Suivi régulier :</strong> Reporting disponible sur demande, ajustements possibles selon retours des gestionnaires ou copropriétaires.</li>
</ul>`,


  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Halls d'immeubles anciens avec <strong>escaliers étroits</strong> et absence d'ascenseur dans le centre-ville.",
    "Parkings souterrains des résidences récentes exposés aux <strong>suies urbaines</strong> liées à la proximité de l'A86.",
    "Balcons des grands ensembles de Chantereine soumis aux <strong>poussières de chantier</strong> (rénovation ANRU).",
    "Stationnement compliqué sur voirie : <strong>rues en sens unique</strong> et places payantes étendues.",
    "Flux piétons importants vers la gare RER D générant des <strong>salissures récurrentes</strong> dans les parties communes.",
    "Digicodes et badges Vigik quasi systématiques : <strong>coordination préalable indispensable</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville / Mairie",
    "Quartier Chantereine",
    "Val-de-Seine",
    "Confluence / Chinagora",
    "Le Pôle",
    "Quartier des Fleurs",
  ],
  nearbyCities: [
        "maisons-alfort",
        "creteil",
        "ivry-sur-seine",
        "charenton-le-pont",
        "joinville-le-pont",
        "saint-mande",
        "saint-maur-des-fosses",
        "vincennes",
        "gentilly",
        "nogent-sur-marne"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Alfortville (Place François Mitterrand)",
    "Gare de Maisons-Alfort - Alfortville",
    "Complexe Chinagora (Confluence)",
    "Quai Blanqui (bord de Seine)",
    "ZAC Val-de-Seine",
    "Marché Rue de Rome",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
faq: [
  {
    question:
      "Q1 : Comment organisez-vous les interventions dans les rues étroites du centre d'Alfortville ?",
    answer: `<p>Nous repérons les <strong>créneaux de stationnement autorisé</strong> et privilégions les <strong>horaires creux</strong>. Pour les secteurs proches du marché, nous évitons les <strong>jours de forte affluence</strong>. Le matériel est adapté pour limiter les allers-retours depuis le véhicule.</p>`,
  },
  {
    question:
      "Q2 : Pouvez-vous intervenir rapidement en cas de dégradation imprévue dans un hall ?",
    answer: `<p>Oui, nous proposons des <strong>interventions ponctuelles</strong> sous <strong>24 à 48 heures</strong> selon disponibilité. Le syndic ou le gardien nous transmet les accès, et nous confirmons le créneau par retour. Un <strong>compte-rendu</strong> peut être fourni après passage.</p>`,
  },
  {
    question: "Q3 : Comment se passe la coordination avec les gardiens des résidences ?",
    answer: `<p>Nous prenons contact <strong>en amont</strong> pour récupérer <strong>badges</strong> et consignes spécifiques. Le gardien est informé du <strong>planning</strong> prévu. En cas d'imprévu (panne ascenseur, travaux), il nous alerte pour <strong>adapter l'intervention</strong> sans gêner les résidents.</p>`,
  },
  {
    question: "Q4 : Proposez-vous un devis avant intervention à Alfortville ?",
    answer: `<p>Oui, chaque demande fait l'objet d'un <strong>devis</strong> après échange sur les surfaces, la fréquence souhaitée et les contraintes d'accès. Le devis est transmis sous <strong>48 heures</strong>, sans engagement. Un <strong>passage sur site</strong> peut être organisé si nécessaire.</p>`,
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
  // Services demandés in PLAN_JSON.servicesRequested.services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des configurations bureaux et halls standing du secteur Val-de-Seine à Alfortville.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et velours ras.",
        "Interventions planifiées en dehors des heures de bureau pour limiter la gêne des occupants.",
      ],
      uniqueIntro: `<p>Dans les bureaux de la <strong>ZAC Val-de-Seine</strong>, les dalles textiles des open spaces et couloirs accumulent poussières fines et traces de passage en quelques semaines. Les halls d'immeubles récents du secteur subissent le même phénomène : le flux quotidien de salariés et visiteurs dépose une couche grise qui ternit les fibres et retient les odeurs.</p>

<p class="mt-4">Les <strong>moquettes en velours ras</strong> des parties communes standing perdent leur aspect soigné lorsque l'entretien courant ne suffit plus. Dans les immeubles anciens du centre, les revêtements textiles des escaliers présentent souvent des zones de trafic marquées, avec des taches de tanin ou de boue séchée difficiles à éliminer sans traitement adapté.</p>

<p class="mt-4">Le <strong>trafic piéton important</strong> lié aux flux de salariés et à la clientèle hôtelière du secteur Chinagora accélère cet encrassement. Une intervention structurée permet de restaurer l'aspect des fibres tout en respectant les contraintes d'accès propres à chaque configuration.</p>`,
      uniqueDeepDive: `<h3>Zones de circulation intensive</h3>
<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le traitement humide. Les protections sont posées sur les plinthes et bas de murs pour éviter les projections.</p>

<h3>Surfaces textiles des espaces de travail</h3>
<p>Les dalles textiles des bureaux et salles de réunion reçoivent un traitement par injection-extraction. La solution nettoyante pénètre les fibres puis est aspirée avec les résidus dissous. Les zones de trafic marquées bénéficient de passes supplémentaires.</p>

<h3>Points de détachage et séchage</h3>
<p>Les taches localisées (café, tanin, graisses) font l'objet d'un pré-traitement ciblé avant le passage général. L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon l'épaisseur du revêtement et la ventilation du local. Une consigne de non-piétinement est transmise pour les premières heures.</p>`,
      specificChallenges: [
        "Dalles textiles des open spaces encrassées par le passage quotidien des salariés.",
        "Halls d'immeubles récents avec velours ras marqué aux zones de trafic.",
        "Escaliers étroits du centre-ville compliquant l'accès du matériel d'extraction.",
        "Séchage à coordonner avec les horaires d'activité des bureaux et hôtels.",
        "Stationnement difficile pour le véhicule d'intervention dans les rues étroites.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Les cages d'escalier étroites du centre-ville d'Alfortville empêchent le passage d'une shampouineuse classique : comment procédez-vous ?",
          answer: `<p>Nous utilisons un matériel compact adapté aux passages réduits. L'appareil d'injection-extraction portable permet de traiter les marches et paliers sans forcer l'accès. Les protections sont posées sur les murs avant intervention pour éviter les traces.</p>`,
        },
        {
          question: "Q2 : Faut-il privilégier shampouineuse ou injection-extraction pour les moquettes des bureaux de la ZAC Val-de-Seine ?",
          answer: `<p>L'injection-extraction convient mieux aux dalles textiles des espaces tertiaires. Cette méthode extrait les résidus en profondeur sans laisser d'excès d'humidité. Le séchage est plus rapide qu'avec un shampooing classique, ce qui facilite la reprise d'activité.</p>`,
        },
        {
          question: "Q3 : Comment enlever des taches incrustées sur la moquette des halls anciens de la rue Paul Vaillant Couturier ?",
          answer: `<p>Un pré-traitement ciblé est appliqué sur chaque tache avant le passage général. Les produits sont choisis selon la nature de la salissure (tanin, graisse, boue séchée). Plusieurs passes d'extraction permettent de déloger les résidus sans abîmer les fibres.</p>`,
        },
        {
          question: "Q4 : Quel est le temps de séchage estimé après traitement d'une moquette d'hôtel proche de Chinagora ?",
          answer: `<p>Le séchage varie de trois à six heures selon l'épaisseur du revêtement et la ventilation du local. L'extraction maximale de l'humidité en fin d'intervention réduit ce délai. Une consigne de non-piétinement est donnée pour les premières heures.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parkings souterrains et aériens, avec gestion stricte des eaux usées et balisage sécurisé pour limiter la gêne aux résidents et usagers.",
      whyUsBullets: [
        "Connaissance des parkings souterrains d'Alfortville, de leurs rampes étroites et de leurs contraintes d'accès spécifiques.",
        "Autolaveuse adaptée aux surfaces béton et résine, gestion stricte des eaux usées vers les évacuations existantes.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: `<p>Les traces noires sur les sols de parkings souterrains se repèrent rapidement : coulures d'huile près des places de stationnement, dépôts de suie le long des rampes d'accès, poussière accumulée dans les angles. Dans les copropriétés situées rue Étienne Dolet ou sur les axes à forte circulation, ces salissures s'installent en quelques mois et ternissent l'ensemble du sous-sol.</p>

<p class="mt-4">Un parking encrassé renvoie une image négative aux copropriétaires et visiteurs. Les revêtements béton brut ou résine, fréquents dans les résidences récentes comme dans le bâti ancien réhabilité, perdent leur aspect d'origine. Les rampes étroites deviennent glissantes, les rigoles s'obstruent, et les réclamations auprès du syndic se multiplient.</p>

<p class="mt-4">Une intervention coordonnée permet de traiter l'ensemble des surfaces sans bloquer l'accès aux véhicules pendant plusieurs jours. Le lavage mécanisé s'adapte aux contraintes horaires et à la rotation des résidents, avec un balisage clair et une gestion rigoureuse des eaux de lavage pour respecter les évacuations existantes.</p>`,
      uniqueDeepDive: `<h3>Encrassement généralisé et évacuations bouchées</h3>
<p>Le diagnostic initial identifie le type de revêtement, l'état des regards et rigoles, ainsi que les zones les plus marquées par les huiles et graisses. Un balayage préalable élimine les débris avant toute intervention humide.</p>

<p class="mt-4">Le balisage est posé pour sécuriser les passages piétons et organiser la rotation des véhicules par zones successives.</p>

<h3>Traitement mécanisé et dégraissage ciblé</h3>
<p>L'autolaveuse ou la haute pression avec dégraissant traite les surfaces en passes régulières. Les zones critiques reçoivent une attention particulière : rampes d'accès pour préserver l'adhérence, angles morts, pieds de murs et rigoles souvent négligées.</p>

<p class="mt-4">Les eaux de lavage sont dirigées vers les évacuations prévues, sans rejet sauvage ni stagnation.</p>

<h3>Remise en service et recommandations</h3>
<p>Le dépoussiérage des blocs lumineux et tuyauteries complète l'intervention si nécessaire. Un compte-rendu précise les zones traitées et propose une fréquence d'entretien adaptée au trafic constaté.</p>`,
      specificChallenges: [
        "Rampes étroites dans le bâti ancien réhabilité, nécessitant un matériel adapté aux passages resserrés.",
        "Sols encrassés par les suies urbaines liées à la proximité de l'A86 et des quais de Seine.",
        "Rotation des véhicules à organiser avec le syndic pour éviter le blocage complet du parking.",
        "Rigoles et regards parfois obstrués, imposant une vérification des évacuations avant lavage.",
        "Horaires d'intervention à caler en dehors des jours de marché rue de Rome pour faciliter l'accès.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Comment gérez-vous les eaux de lavage dans un parking souterrain à Alfortville ?",
          answer: `<p>Les eaux chargées en huile et dégraissant sont dirigées vers les regards et rigoles existants. Nous vérifions leur bon écoulement avant intervention pour éviter toute stagnation. Aucun rejet sauvage n'est effectué, conformément aux règles en vigueur pour les copropriétés du Val-de-Marne.</p>`,
        },
        {
          question: "Q2 : Comment traitez-vous les taches d'huile anciennes sur une rampe d'accès rue Étienne Dolet ?",
          answer: `<p>Un dégraissant adapté est appliqué sur les zones marquées avant le passage de l'autolaveuse. Les taches incrustées nécessitent parfois plusieurs passes. Le traitement préserve l'adhérence du revêtement pour limiter les risques de glissade sur les rampes inclinées.</p>`,
        },
        {
          question: "Q3 : Quelles précautions prenez-vous pour les rampes glissantes des parkings du centre ancien ?",
          answer: `<p>Le lavage haute pression est réglé pour ne pas altérer la surface antidérapante. Nous évitons les produits qui laissent un film glissant après séchage. Si le revêtement est trop lisse, nous signalons au syndic la nécessité d'un traitement complémentaire.</p>`,
        },
        {
          question: "Q4 : Quels horaires recommandez-vous pour intervenir près du marché rue de Rome ?",
          answer: `<p>Les jours de marché, l'accès aux parkings proches est compliqué par la circulation et le stationnement. Nous privilégions les interventions en début de semaine ou en soirée pour éviter les créneaux de forte affluence et faciliter le balisage des zones traitées.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon ou loggia, avec traitement adapté au support, gestion maîtrisée de l'eau et protection des éléments adjacents pour un espace extérieur à nouveau agréable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons orientés vers les axes passants ou en cœur d'îlot, chaque configuration est évaluée.",
        "Pression ajustée selon le support : béton ancien, carrelage récent ou dalles sur plots, le réglage évite tout dommage aux joints.",
        "Protection systématique du voisinage : bâches, raclettes et évacuation contrôlée pour intervenir sans créer de nuisance en dessous.",
      ],
      uniqueIntro: `<p>Comment profiter pleinement d'un balcon quand les dépôts gris s'accumulent sur le sol et que les joints verdissent au fil des mois ? Dans le secteur dense autour de la <strong>Place François Mitterrand</strong>, les balcons et loggias subissent les retombées de la circulation proche et l'humidité ambiante liée aux deux cours d'eau. Les traces s'incrustent, le carrelage perd son éclat, et l'envie de s'installer dehors diminue.</p>

<p class="mt-4">Un balcon propre, c'est un espace récupéré. Les supports en <strong>béton des immeubles anciens</strong> ou le carrelage des résidences plus récentes retrouvent leur aspect d'origine. Les garde-corps redeviennent nets, les joints cessent de noircir. L'espace extérieur redevient un prolongement du logement, pas une zone qu'on évite du regard.</p>

<p class="mt-4">L'intervention tient compte du <strong>vis-à-vis important</strong> et de la gestion des eaux de rinçage. Chaque étape est pensée pour limiter les nuisances aux voisins du dessous et préserver les menuiseries. Un diagnostic préalable permet d'adapter la méthode au type de support et à l'exposition du balcon.</p>`,
      uniqueDeepDive: `<h3>Sol et joints assainis</h3>
<p>Le carrelage ou le béton retrouve sa teinte initiale, débarrassé des voiles gris et des mousses incrustées. Pour y parvenir, les gros dépôts sont d'abord retirés manuellement. Un produit adapté au support est appliqué, suivi d'un brossage ciblé sur les zones encrassées et les joints.</p>

<p class="mt-4">Le rinçage s'effectue à pression contrôlée, suffisante pour éliminer les résidus sans fragiliser les joints existants.</p>

<h3>Garde-corps et vitrages nets</h3>
<p>Les barreaux, rambardes et éventuels vitrages sont traités pour supprimer les traces de pollution et les coulures. Le mobilier et les plantes sont préalablement déplacés ou protégés par bâchage.</p>

<p class="mt-4">Les menuiseries de fenêtres et portes-fenêtres sont également préservées pendant toute l'opération.</p>

<h3>Évacuation maîtrisée</h3>
<p>L'eau de rinçage est canalisée pour éviter les coulures chez les voisins du dessous. Les murs mitoyens accessibles sont essuyés si nécessaire.</p>

<p class="mt-4">Le séchage naturel permet une réutilisation du balcon sous quelques heures selon les conditions météo.</p>`,
      specificChallenges: [
        "Dépôts de pollution liés à la proximité des axes routiers et de l'A86.",
        "Joints de carrelage qui verdissent rapidement avec l'humidité ambiante des bords de fleuve.",
        "Vis-à-vis serré dans le centre-ville imposant discrétion et gestion rigoureuse de l'eau.",
        "Loggias fermées nécessitant une ventilation adaptée pendant le séchage.",
        "Mobilier et jardinières à déplacer dans des espaces souvent restreints.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Le nettoyage risque-t-il d'abîmer le carrelage ou les joints sur un balcony en béton comme on en trouve souvent dans le centre d'Alfortville ?",
          answer: `<p>La pression et les produits sont adaptés au support identifié lors du diagnostic. Sur les balcons en béton brut ou carrelés des immeubles anciens du centre-ville, le brossage reste manuel sur les joints fragiles. Le rinçage s'effectue à pression modérée pour éviter toute dégradation des matériaux d'origine.</p>`,
        },
        {
          question: "Q2 : Comment gérez-vous l'évacuation de l'eau depuis un balcon donnant sur un axe passant comme la rue Paul Vaillant Couturier ?",
          answer: `<p>L'eau est raclée et canalisée vers les évacuations existantes du balcon. Des bâches protègent les garde-corps côté rue pour éviter les projections. En cas de balcon sans évacuation, l'eau est aspirée ou épongée progressivement. Les voisins du dessous et la façade restent préservés de toute coulure.</p>`,
        },
        {
          question: "Q3 : Les dépôts verts et mousses qui apparaissent sur les balcons proches de la Place François Mitterrand peuvent-ils être éliminés durablement ?",
          answer: `<p>Ces dépôts sont retirés par brossage et traitement adapté. L'humidité locale favorise leur retour, mais un entretien régulier limite la recolonisation. Nous pouvons recommander une fréquence d'intervention selon l'exposition et l'environnement immédiat de votre balcon pour maintenir un résultat satisfaisant.</p>`,
        },
        {
          question: "Q4 : Peut-on intervenir sans haute pression sur une loggia du centre-ville si les joints sont fragiles ?",
          answer: `<p>Oui, l'intervention peut se faire entièrement en brossage manuel avec rinçage doux. Cette méthode convient aux loggias fermées où la projection d'eau doit rester limitée. Le temps de travail est légèrement plus long, mais le résultat reste équivalent sur les salissures courantes sans risque pour les joints anciens.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et pose de dispositifs anti-retour pour retrouver un espace sain et utilisable.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Alfortville, notamment les balcons proches des berges et espaces verts.",
        "Protocole sanitaire complet avec EPI adaptés, confinement rigoureux et désinfection virucide systématique.",
        "Gestion autonome de l'évacuation des déchets contaminés et coordination discrète avec le voisinage.",
      ],
      uniqueIntro: `<p>Après quelques semaines sans intervention, les fientes s'accumulent sur le sol, les garde-corps et les rebords de fenêtre. À proximité du Parc de l'Ile au Cointre et des berges, les balcons d'Alfortville attirent pigeons et oiseaux d'eau qui s'installent durablement. L'odeur devient tenace, le linge étendu se tache, et l'espace extérieur reste inutilisé faute de pouvoir s'y installer sereinement.</p>

<p class="mt-4">Sur les immeubles anciens du centre-ville comme sur les loggias des résidences récentes, les dépôts attaquent progressivement le béton et la peinture. Les corniches et rebords exposés concentrent les souillures, créant des zones où la dégradation s'accélère. Sans traitement adapté, le problème s'aggrave et les supports se détériorent de manière visible.</p>

<p class="mt-4">Notre intervention combine retrait mécanique des déjections, désinfection des surfaces et installation de protections dissuasives. Chaque étape respecte un protocole sanitaire strict pour éliminer les agents pathogènes et prévenir toute réinfestation.</p>`,
      uniqueDeepDive: `<h3>Préparation et sécurisation</h3>
<p>L'intervenant revêt l'équipement de protection individuelle complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est confinée par bâchage pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>

<p class="mt-4">Les fientes sont humidifiées avant manipulation pour neutraliser les poussières contaminées et empêcher leur envol.</p>

<h3>Retrait et traitement des surfaces</h3>
<p>Les déjections sont collectées manuellement puis conditionnées dans des sacs étanches. Le sol du balcon, les garde-corps, les vitrages et les murs mitoyens sont nettoyés méthodiquement.</p>

<p class="mt-4">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des supports. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes.</p>

<h3>Finition et prévention</h3>
<p>Un rinçage complet termine le traitement. Selon la configuration, des pics anti-pigeons ou un filet de protection peuvent être posés sur les corniches et rebords pour empêcher le retour des volatiles.</p>

<p class="mt-4">Les déchets sont évacués de manière sécurisée dans leurs contenants étanches.</p>`,
      specificChallenges: [
        "Proximité des berges et du Parc de l'Ile au Cointre : présence régulière de pigeons et oiseaux d'eau.",
        "Corniches et rebords des immeubles anciens du centre particulièrement exposés aux accumulations.",
        "Loggias des résidences récentes avec vis-à-vis important nécessitant discrétion pendant l'intervention.",
        "Dégradation accélérée des supports béton et peinture par l'acidité des fientes non traitées.",
        "Coordination avec le voisinage pour limiter les nuisances olfactives durant le traitement.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Les fientes accumulées sur les corniches des immeubles anciens du centre-ville présentent-elles un risque sanitaire justifiant une intervention rapide ?",
          answer: `<p>Les déjections de pigeons contiennent des agents pathogènes qui peuvent affecter les voies respiratoires. Sur les corniches exposées du centre d'Alfortville, l'accumulation crée un environnement propice à leur développement. Une intervention permet d'éliminer ce risque et de stopper la dégradation des supports.</p>`,
        },
        {
          question: "Q2 : Quel protocole et quels équipements utilisez-vous pour traiter une loggia infestée près du Parc de l'Ile au Cointre ?",
          answer: `<p>L'intervenant porte masque FFP2, lunettes, gants et combinaison jetable. La zone est confinée par bâchage avant humidification des fientes. Après retrait mécanique et conditionnement étanche, un produit virucide homologué est appliqué sur toutes les surfaces avec respect du temps de contact requis.</p>`,
        },
        {
          question: "Q3 : La désinfection est-elle systématique après le retrait des fientes sur un balcon à Alfortville ?",
          answer: `<p>Oui, chaque intervention inclut une phase de désinfection obligatoire. Le produit utilisé élimine bactéries et virus présents dans les résidus organiques. Cette étape garantit que l'espace redevient sain et utilisable sans risque pour les occupants du logement.</p>`,
        },
        {
          question: "Q4 : Comment gérez-vous l'évacuation des déchets contaminés depuis une cour intérieure ou un balcon difficile d'accès ?",
          answer: `<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès leur collecte. L'évacuation s'effectue de manière autonome par nos équipes, sans laisser de déchets sur place. Dans les configurations avec accès restreint, nous adaptons notre logistique pour limiter les passages dans les parties communes.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Rafraîchissement complet de vos canapés, tapis et matelas avec extraction des salissures incrustées, traitement des taches tenaces et séchage optimisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux d'Alfortville et des contraintes d'accès dans le bâti ancien du centre.",
        "Détachage ciblé selon la nature des taches et séchage optimisé pour une remise en service rapide du mobilier.",
        "Organisation souple avec créneaux adaptés aux disponibilités des occupants et intervention discrète en immeuble.",
      ],
      uniqueIntro: `<p>Le long de la <strong>Rue Paul Vaillant Couturier</strong>, dans les appartements familiaux qui bordent cet axe central, les canapés et tapis encaissent le quotidien. Enfants qui jouent, animaux qui s'installent, repas pris devant l'écran : les fibres absorbent tout. Les taches de café s'incrustent, les odeurs persistent malgré les tentatives de nettoyage maison, et le tissu perd progressivement son aspect d'origine.</p>

<p class="mt-4">Dans les <strong>logements T2 et T3</strong> qui composent une grande partie du parc immobilier local, l'espace limité concentre l'usage sur quelques pièces de mobilier. Un canapé taché ou un matelas qui sent le renfermé affecte directement le confort au quotidien. Pour les locataires en rotation fréquente, rendre un bien avec des textiles impeccables évite les retenues sur caution et facilite les états des lieux.</p>

<p class="mt-4">Notre intervention s'adapte à ces contraintes concrètes : diagnostic textile préalable, détachage ciblé selon la nature des salissures, et consignes de séchage adaptées à la configuration de chaque logement.</p>`,
      uniqueDeepDive: `<h3>Textile assaini et fibres débarrassées des résidus</h3>
<p>L'objectif est de restituer un canapé, tapis ou matelas débarrassé des acariens, poussières et particules accumulées. L'injection-extraction permet de retirer ce que l'aspirateur classique ne capte pas, jusqu'au cœur des fibres.</p>

<p class="mt-4">Les taches anciennes — café, vin, urine animale — sont traitées pour atténuer leur visibilité et neutraliser les odeurs associées.</p>

<h3>Diagnostic et pré-traitement adapté</h3>
<p>Avant toute action, nous identifions le type de tissu : coton, synthétique, velours ou cuir. Un test discret sur zone cachée valide la compatibilité du traitement.</p>

<p class="mt-4">Le détachage enzymatique cible les salissures organiques. Les textiles fragiles bénéficient d'une pression et température ajustées pour préserver leur tenue.</p>

<h3>Extraction et remise en service</h3>
<p>L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et l'aération du logement, comptez quelques heures avant réutilisation.</p>

<p class="mt-4">Nous transmettons des conseils d'entretien pour espacer les interventions futures, notamment en présence d'animaux ou d'enfants en bas âge.</p>`,
      specificChallenges: [
        "Escaliers étroits dans le bâti ancien du centre compliquant l'accès avec le matériel.",
        "Taches d'urine et odeurs persistantes liées à la présence d'animaux domestiques dans les foyers.",
        "Rotation locative fréquente nécessitant des remises en état rapides avant état des lieux.",
        "Textiles variés (velours, synthétique, cuir) demandant une adaptation du traitement à chaque support.",
        "Séchage à anticiper selon la ventilation limitée de certains appartements en cœur d'îlot.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Le nettoyage professionnel élimine-t-il efficacement acariens et allergènes d'un canapé dans un appartement proche de la Rue Paul Vaillant Couturier ?",
          answer: `<p>L'injection-extraction atteint les fibres en profondeur et déloge les acariens, poussières et allergènes que l'aspirateur classique ne capte pas. Dans les appartements familiaux d'Alfortville où le mobilier est sollicité quotidiennement, cette méthode améliore sensiblement la qualité de l'air intérieur et le confort des occupants sensibles.</p>`,
        },
        {
          question: "Q2 : Comment traitez-vous les odeurs d'urine d'animaux sur un canapé dans un logement familial d'Alfortville ?",
          answer: `<p>Nous appliquons un pré-traitement enzymatique qui décompose les composés organiques responsables des odeurs. L'extraction retire ensuite les résidus en profondeur. Cette approche neutralise les effluves persistants plutôt que de les masquer, même sur des taches anciennes incrustées dans les fibres du tissu.</p>`,
        },
        {
          question: "Q3 : Quelles méthodes privilégiez-vous selon le textile pour un canapé d'appartement sur l'axe central d'Alfortville ?",
          answer: `<p>Chaque tissu reçoit un traitement adapté : pression réduite et température modérée pour le velours ou la laine, nettoyage spécifique pour le cuir. Un test préalable sur zone cachée valide la compatibilité. Cette précaution évite toute décoloration ou déformation du revêtement.</p>`,
        },
        {
          question: "Q4 : Comment préparer mon logement si les escaliers étroits du centre-ville compliquent l'accès ?",
          answer: `<p>Nous intervenons directement sur place sans déplacer le mobilier hors du logement. Dégagez simplement l'espace autour du canapé ou du tapis pour faciliter notre travail. Prévoyez un accès libre depuis l'entrée et signalez-nous tout digicode ou contrainte de stationnement lors de la prise de rendez-vous.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Traitement complet de votre terrasse avec adaptation au support, élimination des dépôts verts et application d'un produit anti-mousse pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Terrasses exposées à l'humidité des bords de Seine : nous adaptons le traitement à cette contrainte locale.",
        "Produits et techniques ajustés selon le support — dalles sur plots, carrelage ou pierre naturelle — pour éviter toute dégradation.",
        "Protection du mobilier extérieur et des jardinières, gestion de l'écoulement d'eau vers les évacuations existantes.",
      ],
      uniqueIntro: `<p>Les traces verdâtres et les zones noircies sont visibles sur de nombreuses terrasses le long du <strong>Quai Blanqui</strong> et dans les résidences en bord de Seine. L'humidité ambiante liée à la proximité des cours d'eau favorise l'apparition rapide de mousses et de lichens, rendant les surfaces glissantes et peu engageantes dès les premiers mois sans entretien.</p>

<p class="mt-4">Sur les <strong>dalles sur plots des attiques récents</strong> comme sur le carrelage des maisons de ville, ces dépôts s'incrustent dans les joints et les aspérités du revêtement. Le résultat : une terrasse qui perd son aspect d'origine et un espace extérieur qu'on hésite à utiliser, surtout après une période pluvieuse ou à la sortie de l'hiver.</p>

<p class="mt-4">La <strong>pollution atmosphérique</strong> accentue l'encrassement et accélère le retour des dépôts verts si aucun traitement préventif n'est appliqué. Une intervention structurée permet de traiter chaque zone selon son exposition et d'appliquer une protection adaptée au support.</p>`,
      uniqueDeepDive: `<h3>Surface principale et joints</h3>
<p>Le revêtement est d'abord débarrassé des débris, feuilles et terre accumulés. Un produit adapté au support — pierre, carrelage ou composite — est appliqué puis brossé mécaniquement pour déloger mousses et salissures incrustées dans les joints.</p>

<h3>Périphérie et éléments verticaux</h3>
<p>Les murets, garde-corps et marches d'escalier extérieur reçoivent un traitement spécifique. Le brossage manuel permet d'atteindre les angles et les zones où l'humidité stagne, souvent les plus touchées par les dépôts verts.</p>

<h3>Rinçage et protection</h3>
<p>Un rinçage contrôlé évacue les résidus vers les points d'écoulement sans affecter les plantations environnantes. Un traitement anti-mousse est ensuite appliqué sur l'ensemble de la surface pour ralentir la réapparition des lichens et prolonger la propreté obtenue.</p>`,
      specificChallenges: [
        "Dalles sur plots des attiques : nettoyage sans déplacer les éléments ni endommager les joints.",
        "Mousses et lichens récurrents liés à l'humidité des bords de Seine.",
        "Carrelage ancien avec joints poreux nécessitant un brossage adapté.",
        "Gestion de l'eau de rinçage pour éviter les coulures vers les voisins ou les plantations.",
        "Application d'un traitement anti-mousse efficace malgré l'exposition humide.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Quels risques pour les dalles sur plots des terrasses d'attiques dans la ZAC Val-de-Seine lors d'un décapage ?",
          answer: `<p>Les dalles sur plots sont nettoyées sans pression excessive pour préserver leur stabilité. Nous utilisons un brossage mécanique et des produits non agressifs qui éliminent les dépôts sans fragiliser les joints ni déplacer les éléments. Le rinçage est contrôlé pour éviter toute infiltration sous les plots.</p>`,
        },
        {
          question: "Q2 : Comment éliminer mousses et lichens qui noircissent les terrasses exposées au bord de Seine, quai Blanqui ?",
          answer: `<p>Un traitement en deux temps est appliqué : d'abord un produit qui décolle les dépôts verts incrustés, puis un brossage adapté au revêtement. L'humidité ambiante favorisant leur retour, nous appliquons ensuite un anti-mousse préventif qui ralentit la réapparition pendant plusieurs mois.</p>`,
        },
        {
          question: "Q3 : Quel produit anti-mousse utilisez-vous pour protéger les dalles sur plots des terrasses exposées au quai Blanqui ?",
          answer: `<p>Nous appliquons un traitement filmogène adapté aux supports poreux et aux environnements humides. Ce produit crée une barrière qui limite l'accroche des spores de mousse et des lichens, prolongeant la propreté de la terrasse même en exposition défavorable près des cours d'eau.</p>`,
        },
        {
          question: "Q4 : Quelle est la meilleure saison pour effectuer un nettoyage en profondeur d'une terrasse exposée au bord de Seine à Alfortville ?",
          answer: `<p>Le printemps et le début d'automne sont les périodes les plus adaptées. Après l'hiver, les dépôts accumulés sont visibles et le traitement anti-mousse appliqué protège la surface pour la belle saison. À l'automne, l'intervention prépare la terrasse avant les mois humides.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, adaptée aux contraintes d'accès et aux délais serrés des états des lieux ou fins de chantier à Alfortville.",
      whyUsBullets: [
        "Connaissance des typologies locatives d'Alfortville, du parc ancien aux résidences récentes de Val-de-Seine.",
        "Polyvalence sur tous types de sols : parquet, carrelage, lino, avec produits adaptés à chaque support.",
        "Coordination fluide avec agences et propriétaires, respect des délais serrés avant état des lieux.",
      ],
      uniqueIntro: `<p>Comment rendre un appartement impeccable quand l'état des lieux approche et que le logement vient d'être libéré ? Dans les secteurs à forte rotation locative comme <strong>Chantereine</strong> ou les abords de la gare RER, les agences et propriétaires font face à des délais courts. Poussières accumulées, traces sur les sols, sanitaires à décaper : chaque pièce réclame une attention méthodique pour éviter les retenues sur caution ou les remarques au procès-verbal.</p>

<p class="mt-4">Les appartements T2 et T3, majoritaires à Alfortville, présentent des sols variés : parquet ancien dans le centre-ville, lino ou PVC en locatif social, carrelage dans les résidences récentes. Cette diversité impose d'adapter les produits et les techniques à chaque revêtement. Un nettoyage bien conduit redonne au logement une propreté visible, facilite la relocation et évite les litiges entre parties.</p>

<p class="mt-4">L'accès aux immeubles passe souvent par digicode ou badge Vigik. Nous coordonnons en amont avec l'agence, le gardien ou le propriétaire pour récupérer les accès et intervenir sans perte de temps, même sur des créneaux contraints.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation du logement</h3>
<p>Avant toute action, nous évaluons l'état général : nature des sols, niveau d'encrassement, présence de résidus de chantier ou de traces d'usage. Les surfaces fragiles sont protégées si nécessaire.</p>

<p class="mt-4">Si l'intervention suit des travaux, nous commençons par évacuer les gravats légers et dépoussiérer les plafonds, murs et plinthes.</p>

<h3>Nettoyage pièce par pièce</h3>
<p>Les pièces d'eau reçoivent un traitement approfondi : détartrage des sanitaires, décrassage de la faïence et des joints, dégraissage des plans de travail et de l'électroménager. Les sols sont aspirés puis lavés selon leur nature.</p>

<p class="mt-4">Les vitres intérieures, les interrupteurs, les poignées et l'intérieur des placards sont traités pour un rendu homogène.</p>

<h3>Contrôle et remise des clés</h3>
<p>Un passage final permet de vérifier chaque zone. Le logement est aéré, les accès sécurisés. Les clés peuvent être restituées à l'agence ou au propriétaire selon l'organisation convenue.</p>`,
      specificChallenges: [
        "Rotation locative élevée près de la gare RER : délais courts entre deux locataires.",
        "Sols variés selon les quartiers : parquet ancien au centre, carrelage dans le neuf.",
        "Accès par digicode et badge Vigik quasi systématiques dans les résidences.",
        "Stationnement compliqué dans les rues étroites du centre-ville.",
        "Résidus de chantier fréquents dans les programmes neufs de Val-de-Seine.",
        "Coordination nécessaire avec gardiens dans les grands ensembles de Chantereine.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Quelle est votre réactivité pour une remise en état urgente avant état des lieux près de la gare Maisons-Alfort - Alfortville ?",
          answer: `<p>Nous intervenons sous 24 à 48 heures selon la surface et la disponibilité. Pour les logements proches de la gare, nous organisons la récupération des clés en amont avec l'agence ou le propriétaire afin de respecter le créneau imposé par l'état des lieux.</p>`,
        },
        {
          question: "Q2 : Quelle différence entre un nettoyage standard et une intervention fin de chantier dans le quartier Chantereine ?",
          answer: `<p>Un ménage fin de chantier inclut l'évacuation des résidus, le dépoussiérage complet des surfaces verticales et le retrait des traces de peinture ou d'enduit. Le protocole standard se concentre sur les sols, sanitaires et vitres sans cette phase préparatoire liée aux travaux.</p>`,
        },
        {
          question: "Q3 : Intervenez-vous après un dégât des eaux dans un appartement rue Paul Vaillant Couturier ?",
          answer: `<p>Oui, nous traitons les logements touchés par l'humidité : aspiration des résidus, nettoyage des surfaces atteintes, traitement des traces de moisissure si elles sont superficielles. Pour les dégâts structurels, nous vous orientons vers un spécialiste avant notre passage.</p>`,
        },
        {
          question: "Q4 : Comment établissez-vous le tarif pour un T2 ou T3 typique d'Alfortville ?",
          answer: `<p>Le tarif dépend de la surface, de l'état initial et du type d'intervention (standard, fin de chantier, post-sinistre). Nous réalisons un diagnostic rapide, sur place ou par photos, pour vous transmettre un devis adapté sans surprise à la facturation.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;