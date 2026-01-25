import type { City } from "~/types/geo";

const city: City = {
  name: "Bagnolet",
  slug: "bagnolet",
  postalCodes: ["93170"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Bagnolet pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée à la densité urbaine de la commune, entre tours de bureaux et résidences des quartiers La Noue ou Malassis.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class=\"mt-4\">, <ul>, <li>, <strong>, <br>
  hubIntro: `<p>Au pied des tours Mercuriales et du terminus Gallieni, Bagnolet concentre bureaux, commerces et logements sur un territoire compact. Klinova s'y positionne comme partenaire terrain pour les gestionnaires et occupants confrontés à des besoins réguliers de propreté.</p>
<p class="mt-4">Notre équipe coordonne les interventions selon les contraintes d'accès propres à chaque site : horaires décalés pour les immeubles de bureaux, créneaux adaptés aux copropriétés résidentielles. Un interlocuteur unique assure le suivi et transmet les comptes-rendus si nécessaire.</p>
<ul>
  <li><strong>Réactivité locale :</strong> Équipe basée en Île-de-France, déplacements rapides vers Bagnolet. Prise en charge possible sous 48 à 72 heures selon disponibilité.</li>
  <li><strong>Coordination sur mesure :</strong> Échange préalable avec syndic, gardien ou gestionnaire pour caler les créneaux et éviter toute gêne aux occupants ou usagers.</li>
  <li><strong>Méthodes adaptées au bâti :</strong> Matériel dimensionné selon la configuration — parkings souterrains des grands ensembles, halls d'immeubles anciens ou espaces extérieurs.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> des grands ensembles souvent vastes, avec rampes hélicoïdales et ventilation limitée.",
    "Pollution atmosphérique marquée à proximité de l'<strong>échangeur A3</strong> : dépôts noirs sur balcons et façades.",
    "Accès aux tours de bureaux soumis à <strong>contrôle sécurité</strong> et horaires restreints.",
    "Stationnement très contraint dans l'ensemble de la commune, zones bleues étendues.",
    "Halls et parties communes des résidences années 70 avec <strong>escaliers étroits</strong> et revêtements d'origine.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Le Plateau",
    "La Dhuys",
    "Les Malassis",
    "La Noue",
    "Les Coutures",
    "La Capsulerie",
  ],
  nearbyCities: [
        "montreuil",
        "vincennes",
        "saint-mande",
        "pantin",
        "fontenay-sous-bois",
        "rosny-sous-bois",
        "bobigny",
        "charenton-le-pont",
        "nogent-sur-marne",
        "joinville-le-pont"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Bagnolet",
    "Tours Mercuriales",
    "Gare routière internationale de Paris-Gallieni",
    "Centre Commercial Bel Est",
    "Parc Jean-Moulin - Les Guilands",
    "Château de l'Étang",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
faq: [
  {
    question: "Quel délai pour une première intervention à Bagnolet ?",
    answer:
      "<p>Nous pouvons généralement intervenir sous <strong>48 à 72 heures</strong> après validation du devis. Pour les demandes <strong>urgentes</strong> (souillure importante, incident), un créneau prioritaire peut être proposé selon la charge en cours. Contactez-nous pour évaluer la faisabilité.</p>",
  },
  {
    question: "Comment se passe la coordination avec le syndic ou le gardien ?",
    answer:
      "<p>Avant chaque intervention, nous échangeons avec votre interlocuteur pour définir les <strong>accès</strong>, les <strong>horaires</strong> et les contraintes éventuelles. À Bagnolet, où les <strong>digicodes</strong> et <strong>badges</strong> sont fréquents, cette étape garantit un déroulement fluide sans solliciter les résidents.</p>",
  },
  {
    question: "Le stationnement est compliqué dans la commune, comment gérez-vous cela ?",
    answer:
      "<p>Nous anticipons les contraintes de stationnement en identifiant en amont les options possibles (parking visiteur, <strong>zone de livraison</strong> autorisée) et en adaptant les horaires pour limiter l'impact du trafic. Le matériel est dimensionné pour réduire le temps de déchargement.</p>",
  },
  {
    question: "Proposez-vous un suivi ou un compte-rendu après intervention ?",
    answer:
      "<p>Oui, un <strong>rapport d'intervention</strong> peut être transmis sur demande, notamment pour les gestionnaires ou syndics. Il précise les zones traitées, les observations éventuelles et les recommandations pour l'entretien courant.</p>",
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
  // => Le template injecte uniquement les services présents dans l’entrée.
  services: [
    {
      serviceKey: "moquettes",
      // texte brut
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec séchage maîtrisé pour une remise en circulation rapide des espaces traités.",
      // texte brut (3 lignes)
      whyUsBullets: [
        "Connaissance des configurations tertiaires et commerciales du secteur Gallieni, avec adaptation aux contraintes d'accès des tours et centres commerciaux.",
        "Matériel d'injection-extraction professionnel calibré selon la densité des fibres et le niveau d'encrassement constaté.",
        "Interventions planifiées en dehors des heures d'affluence pour limiter la gêne et permettre un séchage complet avant réouverture.",
      ],
      // HTML autorisé (2-3 <p>)
      uniqueIntro: `<p>Les traces de passage répété sont visibles sur les dalles textiles des boutiques et espaces d'accueil du <strong>Centre Commercial Bel Est</strong>. Zones de caisse, allées principales, entrées : les fibres accumulent poussières fines, résidus alimentaires et marques de semelles. Ce grisaillement progressif altère l'aspect général sans qu'un simple aspirateur suffise à restaurer la netteté d'origine.</p>
<p class="mt-4">Dans les <strong>bâtiments tertiaires et commerces</strong> de Bagnolet, les moquettes bouclées ou velours ras subissent un encrassement accéléré par le trafic piéton dense. Les halls des tours, couloirs de bureaux et salles d'attente présentent souvent des zones de circulation marquées, contrastant avec les parties moins fréquentées. Un entretien adapté redonne une homogénéité visuelle et prolonge la durée de vie du revêtement.</p>
<p class="mt-4">L'intervention s'organise autour d'un diagnostic préalable : nature des fibres, ancienneté des taches, contraintes d'accès. Le traitement par injection-extraction cible les salissures en profondeur, tandis que la gestion du séchage permet une reprise d'activité sans délai excessif.</p>`,
      // HTML autorisé (<h3> + <p>...)
      uniqueDeepDive: `<h3>T1: Zones de fort passage</h3>
<p>Les allées principales et entrées concentrent l'essentiel de l'encrassement. Après aspiration préalable, le traitement par injection-extraction s'effectue en passes croisées sur ces surfaces. Les fibres compactées par le piétinement reçoivent un détachage ciblé si nécessaire.</p>

<h3>T2: Espaces intermédiaires et angles</h3>
<p>Les zones de circulation secondaire et les raccords avec le mobilier fixe accumulent poussières et résidus moins visibles. Le nettoyage couvre ces surfaces en adaptant la pression d'injection selon l'épaisseur du revêtement. Les plinthes et bas de murs sont protégés pendant l'opération.</p>

<h3>T3: Séchage et remise en service</h3>
<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon la ventilation disponible. Un balisage temporaire limite le piétinement immédiat. Les consignes de non-circulation sont transmises pour garantir un résultat homogène sur l'ensemble de la surface traitée.</p>`,
      // texte brut (strip <strong> tags from specificChallenges)
      specificChallenges: [
        "Dalles textiles en zones commerciales : taches alimentaires et traces de semelles concentrées aux entrées.",
        "Moquettes bouclées en halls de bureaux : grisaillement rapide sur les axes de circulation.",
        "Accès monte-charges et horaires décalés : coordination nécessaire avec la sécurité des tours.",
        "Stationnement véhicule utilitaire : zones de livraison à réserver pour déchargement du matériel.",
        "Séchage en espace clos : ventilation à anticiper pour éviter l'humidité résiduelle.",
      ],
      // faqAdditions: HTML answers allowed
      faqAdditions: [
        {
          question:
            "Les cages d'escalier étroites du quartier des Coutures compliquent l'accès. Comment organisez-vous la manutention du matériel pour le nettoyage de moquette ?",
          answer:
            "<p>Le matériel d'injection-extraction se compose d'éléments modulaires transportables à la main. Dans les immeubles anciens aux escaliers étroits, nous montons les équipements en plusieurs rotations. Le flexible de raccordement permet de positionner la machine sur un palier tout en traitant les étages adjacents.</p>",
        },
        {
          question:
            "Pour des taches anciennes sur moquette en boutique au Centre Commercial Bel Est, quel résultat peut-on attendre ?",
          answer:
            "<p>Les taches incrustées depuis plusieurs mois nécessitent un pré-traitement ciblé avant extraction. Le résultat dépend de la nature de la salissure et de l'ancienneté : les traces alimentaires récentes disparaissent généralement, tandis que certaines marques très anciennes peuvent laisser une légère ombre résiduelle après traitement.</p>",
        },
        {
          question:
            "Quelle différence entre injection-extraction et encapsulation pour les dalles textiles des espaces tertiaires ?",
          answer:
            "<p>L'injection-extraction projette une solution nettoyante puis aspire immédiatement l'eau chargée de salissures. L'encapsulation utilise un polymère qui cristallise autour des particules, éliminées ensuite par aspiration. Pour les dalles textiles à fort passage, l'injection-extraction offre un décrassage plus profond, tandis que l'encapsulation convient à un entretien régulier entre deux nettoyages complets.</p>",
        },
        {
          question:
            "Comment adaptez-vous la méthode selon l'épaisseur et le type de moquette dans les halls d'immeubles récents à Bagnolet ?",
          answer:
            "<p>Le diagnostic préalable identifie la structure du revêtement : moquette fine collée, dalles amovibles ou velours épais. La pression d'injection et le débit d'extraction sont ajustés pour éviter de détremper les fibres ou de décoller les supports. Les moquettes épaisses nécessitent des passes supplémentaires et un temps de séchage allongé.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec gestion des eaux de lavage conforme et coordination des accès pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des parkings bagnoletais : accès complexes près de Gallieni, rampes des tours, souterrains des résidences.",
        "Matériel adapté aux grandes surfaces : autolaveuse, haute pression, dégraissants professionnels et gestion stricte des effluents.",
        "Coordination avec syndics et gestionnaires : balisage, rotation véhicules par zone, créneaux hors pointe pour limiter la gêne.",
      ],
      uniqueIntro: `<p>Dans les parkings situés à proximité de l'échangeur A3, les dépôts de suie grasse et de poussière noire s'accumulent rapidement sur les sols. Les rampes d'accès, les allées de circulation et les pieds de murs concentrent des résidus d'hydrocarbures que le passage quotidien des véhicules étale sans jamais éliminer. Cette couche tenace dégrade l'aspect général et complique l'entretien courant.</p>
<p class="mt-4">Les parkings souterrains des grands ensembles et centres commerciaux présentent des configurations spécifiques : rampes hélicoïdales, box fermés, regards d'évacuation parfois obstrués. Un lavage régulier permet de maintenir des conditions de circulation correctes, de limiter les risques de glissade et de préserver l'image des résidences auprès des copropriétaires et visiteurs.</p>
<p class="mt-4">L'intervention s'organise en coordination avec le syndic ou le gestionnaire. Balisage des zones, rotation des véhicules par secteur, créneaux adaptés aux flux : chaque étape vise à réduire la gêne tout en garantissant un résultat visible dès la fin du chantier.</p>`,
      uniqueDeepDive: `<h3>T1: Sol décrassé et circulation sécurisée</h3>
<p>Le résultat attendu : un revêtement débarrassé des traces d'huile, de la poussière incrustée et des dépôts noirâtres. Les rampes retrouvent leur adhérence, les allées leur clarté. L'ensemble du parking gagne en lisibilité et en propreté.</p>

<h3>T2: Autolaveuse et traitement ciblé</h3>
<p>Le passage mécanisé couvre les grandes surfaces en béton ou résine. Un dégraissant adapté traite les zones critiques : emplacements marqués par des fuites, angles morts, rigoles. La haute pression intervient sur les rampes inclinées pour éliminer les résidus tenaces sans endommager le revêtement.</p>

<h3>T3: Gestion des eaux et finalisation</h3>
<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Les regards sont vérifiés avant et après intervention. Un dépoussiérage des blocs lumineux ou tuyauteries peut compléter le chantier si demandé. Le compte-rendu transmis au gestionnaire précise les zones traitées et la fréquence recommandée.</p>`,
      specificChallenges: [
        "Dépôts de suie liés à la proximité de l'A3 : encrassement rapide des sols et rampes.",
        "Rampes hélicoïdales dans les tours : traitement antidérapant indispensable après lavage.",
        "Parkings souterrains anciens avec évacuations parfois obstruées : vérification préalable nécessaire.",
        "Rotation des véhicules à organiser avec le syndic pour libérer les zones par secteur.",
        "Horaires d'intervention à caler hors flux matin/soir vers Gallieni.",
      ],
      faqAdditions: [
        {
          question:
            "Comment gérez-vous les eaux de lavage dans un parking exposé aux résidus d'hydrocarbures près de l'échangeur A3 ?",
          answer:
            "<p>Les eaux chargées en suie et dégraissant sont canalisées vers les évacuations existantes. Nous vérifions l'état des regards avant intervention pour éviter tout refoulement. Aucun rejet sauvage : le protocole respecte les contraintes réglementaires des parkings souterrains à Bagnolet.</p>",
        },
        {
          question:
            "Quelles techniques utilisez-vous pour des taches d'huile anciennes dans les parkings souterrains des grandes résidences ?",
          answer:
            "<p>Un dégraissant professionnel est appliqué sur les zones marquées, suivi d'un passage mécanisé à l'autolaveuse. Pour les taches incrustées depuis plusieurs mois, une action prolongée et un rinçage haute pression permettent d'atténuer significativement les traces sans garantir une disparition totale.</p>",
        },
        {
          question:
            "Quels créneaux proposez-vous pour intervenir sans perturber les flux vers Gallieni ?",
          answer:
            "<p>Les interventions sont programmées en milieu de matinée ou début d'après-midi, hors heures de pointe. Pour les parkings à fort trafic, un découpage par zones avec rotation des véhicules permet de maintenir l'accès partiel pendant le chantier.</p>",
        },
        {
          question:
            "Quelle différence de méthode entre un parking souterrain des tours et un parking aérien du Centre Bel Est ?",
          answer:
            "<p>En souterrain, l'autolaveuse domine pour gérer les poussières fines et l'humidité résiduelle. En aérien, la haute pression s'impose davantage pour éliminer les salissures exposées aux intempéries. Le revêtement — béton brut, résine ou enrobé — détermine aussi le réglage de pression et le choix du détergent.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion contrôlée de l'eau pour éviter toute coulure chez vos voisins.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux axes passants de Bagnolet, entre pollution routière et environnement urbain dense.",
        "Pression ajustée selon le support, brossage manuel sur joints fragiles, produits compatibles carrelage et béton.",
        "Protection systématique des voisins du dessous, gestion de l'eau maîtrisée, intervention discrète en journée.",
      ],
      uniqueIntro: `<p>Après quelques saisons, les balcons des secteurs résidentiels proches du Château de l'Étang accumulent une couche grisâtre difficile à déloger. Les dépôts verts s'incrustent dans les joints, la poussière noire se fixe sur les garde-corps, et l'espace extérieur perd son attrait. On repousse le moment d'y installer une table ou des plantes, faute d'un sol vraiment propre.</p>
<p class="mt-4">Sur les supports majoritairement carrelage ou béton des balcons filants et loggias récentes, cette accumulation devient tenace. Le rinçage au jet classique ne suffit plus, l'eau ruisselle sans emporter les salissures incrustées. Le balcon reste terne, les joints gardent leurs traces verdâtres, et l'envie de profiter de cet espace s'estompe au fil des mois.</p>
<p class="mt-4">Une intervention structurée permet de retrouver un sol net et des surfaces agréables. Nous adaptons le traitement à chaque matériau, en tenant compte de l'exposition à la pollution urbaine liée aux échangeurs proches et en prévoyant une gestion rigoureuse de l'eau pour protéger vos voisins du dessous.</p>`,
      uniqueDeepDive: `<h3>T1: Préparation et protection</h3>
<p>Nous déplaçons le mobilier et les plantes vers un coin abrité ou les bâchons sur place. Les menuiseries, fenêtres et seuils de porte reçoivent une protection pour éviter les projections. Un dispositif anti-coulures est installé en périphérie du balcon avant tout apport d'eau.</p>

<h3>T2: Traitement des surfaces</h3>
<p>Les gros dépôts, feuilles et débris sont retirés manuellement. Un produit adapté au support est appliqué sur le carrelage ou le béton, puis brossé pour décoller les salissures incrustées. Les garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée. Le rinçage s'effectue à pression contrôlée, dosée selon l'état des joints.</p>

<h3>T3: Finalisation et conseils</h3>
<p>L'eau résiduelle est raclée vers les évacuations, le sol sèche rapidement. Nous vérifions l'absence de traces sur les surfaces traitées et vous transmettons quelques recommandations pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>`,
      specificChallenges: [
        "Dépôts noirs liés à la proximité des axes routiers, fixés sur garde-corps et sols.",
        "Joints de carrelage envahis par des traces verdâtres tenaces après l'hiver.",
        "Gestion de l'eau délicate sur balcons en étage pour éviter les coulures chez les voisins.",
        "Loggias fermées où l'humidité stagne et favorise l'encrassement accéléré.",
        "Mobilier et plantes à déplacer ou protéger avant toute intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment gérez-vous l'évacuation d'eau sur les balcons de pavillons près du Château de l'Étang ?",
          answer:
            "<p>Nous installons des protections en périphérie du balcon et contrôlons le débit lors du rinçage. L'eau est dirigée vers les évacuations existantes ou raclée progressivement. Cette méthode évite les coulures sur les façades et protège les espaces situés en contrebas.</p>",
        },
        {
          question:
            "Quelle méthode utilisez-vous pour nettoyer carrelage et joints sur les balcons récents du Plateau ?",
          answer:
            "<p>Un produit adapté au grès cérame ou au carrelage standard est appliqué, suivi d'un brossage ciblé sur les joints. Le rinçage s'effectue à pression modérée pour ne pas déchausser les joints neufs. Cette approche préserve l'étanchéité tout en éliminant les salissures incrustées.</p>",
        },
        {
          question:
            "Les balcons exposés à l'A3 noircissent vite : quel entretien limite cet encrassement ?",
          answer:
            "<p>La pollution routière dépose une couche grasse qui s'accumule rapidement. Un traitement régulier, une à deux fois par an, empêche les dépôts de s'incruster durablement. Nous utilisons un dégraissant doux qui retire le film noir sans agresser les surfaces ni les joints.</p>",
        },
        {
          question:
            "Sur des balcons de façades anciennes, quelles méthodes sans haute pression proposez-vous ?",
          answer:
            "<p>Nous privilégions le brossage manuel avec un produit adapté, suivi d'un rinçage à basse pression ou au jet classique. Cette technique respecte les supports fragiles, les joints anciens et les éléments décoratifs. Le résultat reste efficace sans risque d'endommagement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour limiter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Bagnolet, notamment les immeubles proches des espaces verts et les façades anciennes des Coutures.",
        "Protocole complet avec EPI adaptés, confinement de la zone et désinfection virucide après chaque intervention.",
        "Organisation discrète, protection du voisinage pendant le traitement et évacuation sécurisée des déchets souillés.",
      ],
      uniqueIntro: `<p>Les traces blanchâtres et les dépôts croûtés sur le sol, les garde-corps ou les rebords de fenêtres signalent une présence régulière de pigeons. Dans le quartier des Coutures, où les corniches et appuis de façades offrent des perchoirs accessibles, ces accumulations deviennent vite problématiques. L'odeur s'installe, le balcon reste inutilisé, et le nettoyage classique ne suffit plus à éliminer ce qui s'est incrusté.</p>
<p class="mt-4">Au-delà de l'aspect visuel, les fientes attaquent progressivement les matériaux. Sur les immeubles anciens de Bagnolet, les appuis en pierre, les joints et les peintures subissent une dégradation accélérée par l'acidité des déjections. Un traitement adapté permet de retrouver un espace extérieur sain, sans résidus ni odeurs persistantes, et de préserver l'état des supports.</p>
<p class="mt-4">L'intervention combine ramassage sécurisé, désinfection des surfaces et rinçage complet. La proximité du parc Jean-Moulin - Les Guilands favorise la présence d'oiseaux dans certains secteurs : un diagnostic préalable permet d'évaluer l'ampleur du dépôt et de proposer des solutions de dissuasion adaptées.</p>`,
      uniqueDeepDive: `<h3>T1: Sécurisation et confinement</h3>
<p>L'intervenant porte un équipement de protection complet : masque FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>
<p class="mt-4">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières potentiellement contaminées.</p>

<h3>T2: Collecte et désinfection</h3>
<p>Le ramassage s'effectue manuellement, avec conditionnement en sacs étanches. Le sol du balcon, le garde-corps, les vitrages et les murs mitoyens sont ensuite traités.</p>
<p class="mt-4">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes.</p>

<h3>T3: Rinçage et prévention</h3>
<p>Un rinçage final permet d'évacuer les résidus de produit. Le balcon reste inaccessible le temps de l'aération complète.</p>
<p class="mt-4">Si nécessaire, des dispositifs anti-retour sont proposés : pics sur les rebords, filets de protection ou gel répulsif selon la configuration. Les déchets sont évacués en sacs étanches.</p>`,
      specificChallenges: [
        "Corniches anciennes dans le quartier des Coutures offrant des perchoirs réguliers aux pigeons.",
        "Accumulations importantes sur balcons en étage, nécessitant un confinement rigoureux avant intervention.",
        "Dégradation des appuis en pierre et des joints par l'acidité des fientes non traitées.",
        "Proximité du parc Jean-Moulin - Les Guilands favorisant la présence d'oiseaux sur certains immeubles.",
        "Évacuation des déchets contaminés depuis les étages sans gêne pour les occupants ni le voisinage.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes de pigeons accumulées près du parc des Guilands présentent-elles un risque sanitaire justifiant une intervention rapide ?",
          answer:
            "<p>Les déjections de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) qui se dispersent sous forme de poussières une fois sèches. Dans les secteurs proches d'espaces verts où les oiseaux se concentrent, l'accumulation régulière justifie un traitement sans attendre que les dépôts s'incrustent davantage dans les supports.</p>",
        },
        {
          question:
            "Quelle efficacité attendre d'une désinfection après enlèvement des fientes sur les corniches et appuis anciens ?",
          answer:
            "<p>Le produit virucide et bactéricide utilisé élimine les agents pathogènes présents sur les surfaces traitées. Sur les matériaux poreux comme la pierre ou les joints anciens, le temps de contact est adapté pour garantir une action en profondeur. Le résultat dépend aussi de l'état initial : certaines taches anciennes peuvent laisser des marques résiduelles.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets souillés depuis un balcon en étage dans le quartier des Coutures ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches directement sur place. L'intervenant descend les déchets sans les faire transiter par les parties communes ouvertes. Cette organisation limite les nuisances pour les voisins et évite toute dispersion lors du transport vers le véhicule.</p>",
        },
        {
          question:
            "Quelles dégradations observe-t-on sur les appuis en pierre après des contaminations répétées par les fientes ?",
          answer:
            "<p>L'acidité des déjections attaque progressivement la surface des matériaux poreux. Sur les appuis en pierre et les joints, cela se traduit par des taches persistantes, une érosion superficielle et parfois un écaillage. Un traitement régulier limite ces dégâts ; les supports très abîmés peuvent nécessiter une reprise par un professionnel du bâtiment.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à Bagnolet, avec extraction des salissures en profondeur et séchage adapté pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des logements bagnoletais, de leurs configurations variées et des textiles courants dans les appartements familiaux.",
        "Détachage ciblé selon la nature des taches et extraction calibrée pour préserver les fibres tout en réduisant le temps de séchage.",
        "Organisation adaptée aux contraintes locales : stationnement anticipé, coordination avec les occupants, intervention en journée ou en soirée.",
      ],
      uniqueIntro: `<p>Comment préserver l'aspect et l'hygiène d'un canapé quand il absorbe les traces du quotidien ? Dans les appartements familiaux du centre de Bagnolet, notamment autour de la <strong>rue Sadi Carnot</strong>, les textiles d'ameublement accumulent taches alimentaires, poils d'animaux et poussières fines. Les fibres retiennent ces résidus bien au-delà de ce qu'un aspirateur peut extraire.</p>
<p class="mt-4">Un entretien en profondeur redonne au tissu sa fraîcheur d'origine et limite la présence d'acariens. Dans les logements où le sol alterne entre <strong>parquet, lino et moquette</strong>, le canapé reste souvent le mobilier le plus sollicité. Taches de café, auréoles d'humidité ou odeurs persistantes finissent par s'installer si rien n'est fait régulièrement.</p>
<p class="mt-4">Notre intervention s'adapte aux contraintes d'accès propres aux immeubles bagnoletais : <strong>stationnement limité</strong>, ascenseurs parfois étroits, coordination avec les occupants. Chaque textile fait l'objet d'un diagnostic préalable pour ajuster la méthode et garantir un séchage compatible avec votre emploi du temps.</p>`,
      uniqueDeepDive: `<h3>T1: Textile propre et assaini</h3>
<p>L'objectif est d'obtenir un tissu débarrassé des salissures visibles et des résidus invisibles (acariens, allergènes). Le rendu final dépend de l'état initial et du type de fibre, mais l'amélioration est perceptible dès le séchage terminé.</p>

<h3>T2: Diagnostic et pré-traitement ciblé</h3>
<p>Avant toute injection, nous identifions la nature du textile (coton, synthétique, velours) et repérons les taches spécifiques. Un test discret sur zone cachée valide la compatibilité du produit. Les zones marquées reçoivent un détachant enzymatique adapté.</p>

<h3>T3: Injection-extraction et séchage maîtrisé</h3>
<p>Le nettoyage s'effectue par injection d'une solution nettoyante suivie d'une extraction immédiate. La pression et la température sont ajustées selon la fragilité du tissu. Nous optimisons l'extraction pour réduire le temps de séchage, généralement compris entre 4 et 8 heures selon l'épaisseur et l'aération disponible.</p>`,
      specificChallenges: [
        "Taches alimentaires et traces d'usage fréquentes dans les appartements familiaux du centre.",
        "Textiles variés (velours, coton, synthétique) nécessitant un diagnostic préalable.",
        "Stationnement difficile pour décharger le matériel d'injection-extraction.",
        "Séchage à anticiper dans les logements sans balcon ni aération directe.",
        "Présence d'animaux domestiques générant poils et odeurs incrustés dans les fibres.",
      ],
      faqAdditions: [
        {
          question:
            "Comment adaptez-vous la méthode pour un canapé non déhoussable dans un appartement rue Sadi Carnot ?",
          answer:
            "<p>Nous réalisons d'abord un test sur une zone discrète pour vérifier la réaction du tissu. La pression d'injection et la température sont ensuite ajustées selon que le textile soit en coton, synthétique ou velours. Cette approche évite tout risque de décoloration ou de déformation des fibres.</p>",
        },
        {
          question:
            "Le nettoyage réduit-il vraiment les allergènes et acariens présents dans un canapé ?",
          answer:
            "<p>L'extraction en profondeur retire une grande partie des acariens, de leurs déjections et des poussières fines piégées dans les fibres. Le résultat dépend de l'état initial, mais l'amélioration est sensible dès le séchage terminé, notamment pour les personnes sensibles vivant dans des logements familiaux.</p>",
        },
        {
          question:
            "Quel délai de séchage prévoir pour un canapé dans un appartement sans balcon à Bagnolet ?",
          answer:
            "<p>Comptez généralement entre 6 et 10 heures selon l'épaisseur du tissu et la ventilation disponible. Nous maximisons l'extraction pour limiter l'humidité résiduelle. Si possible, ouvrir les fenêtres ou utiliser un ventilateur accélère le processus.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention avec les contraintes de stationnement du centre de Bagnolet ?",
          answer:
            "<p>Nous anticipons le stationnement en identifiant les emplacements disponibles ou en convenant d'un créneau adapté. Le matériel est compact et transportable à pied sur courte distance. La coordination avec vous permet de limiter la durée d'occupation de la place.</p>",
        },
      ],
      ctaOverride: "",
    },

  

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Remise en état complète de votre appartement ou maison à Bagnolet : sols, pièces d'eau, vitres intérieures et finitions soignées pour une restitution ou une entrée dans les lieux sans mauvaise surprise.",
      whyUsBullets: [
        "Connaissance des typologies locales : du studio proche Gallieni aux grands appartements des tours résidentielles.",
        "Polyvalence sur tous les revêtements — parquet, carrelage, lino — et finitions minutieuses sur les détails souvent oubliés.",
        "Créneaux ajustés aux contraintes de remise de clés, coordination directe avec agences ou artisans si nécessaire.",
      ],
      uniqueIntro: `<p>Après plusieurs mois d'occupation ou quelques semaines de travaux, un logement accumule des traces que le ménage courant ne suffit plus à effacer. Autour de l'Avenue du Général de Gaulle et dans les secteurs où la rotation locative reste soutenue, les demandes de remise en état se multiplient à chaque changement de locataire ou livraison de chantier.</p>
<p class="mt-4">Un nettoyage complet redonne au bien une présentation soignée : sols débarrassés des résidus, sanitaires détartrés, vitres sans voile. Pour les propriétaires comme pour les agences, c'est la garantie d'un état des lieux fluide et d'une image préservée auprès des futurs occupants. Les biens varient — studios étudiants, T2-T4 en copropriétés anciennes, grands appartements en tours — et chaque configuration appelle une organisation adaptée.</p>
<p class="mt-4">Nous intervenons régulièrement en coordination avec agences et bailleurs sociaux, sur des créneaux calés selon vos contraintes de remise de clés. Le planning est défini en amont pour éviter tout décalage le jour J.</p>`,
      uniqueDeepDive: `<h3>T1: Pièces de vie et circulations</h3>
<p>Le dépoussiérage commence par les plafonds, murs et plinthes avant de passer aux sols. Parquet, carrelage ou lino : chaque revêtement reçoit un traitement adapté. Les interrupteurs, poignées et radiateurs sont essuyés, les placards vidés sont nettoyés à l'intérieur.</p>

<h3>T2: Cuisine et salle de bain</h3>
<p>Plans de travail, crédence et électroménager sont dégraissés. Faïences, joints et robinetterie passent au détartrage. Les sanitaires — WC, lavabo, douche ou baignoire — sont désinfectés et rincés.</p>

<h3>T3: Finitions et contrôle</h3>
<p>Les vitres intérieures sont lavées pour laisser entrer la lumière. En cas de fin de chantier, les traces de peinture ou de colle sur les surfaces dures sont retirées. Un contrôle pièce par pièce clôture l'intervention avant ventilation du logement et remise des clés si prévue.</p>`,
      specificChallenges: [
        "Rotation locative soutenue dans le centre-ville : délais serrés entre deux occupants.",
        "Traces de colle et enduit fréquentes après rénovation dans les copropriétés anciennes.",
        "Stationnement tendu autour de l'Avenue du Général de Gaulle : anticipation du créneau indispensable.",
        "Coordination avec bailleurs sociaux ou agences pour caler l'intervention avant l'état des lieux.",
        "Logements en étage élevé dans les tours : gestion du matériel et des accès ascenseur.",
      ],
      faqAdditions: [
        {
          question:
            "Que comprend un nettoyage de fin de chantier pour retirer colle et traces de peinture dans un appartement rénové à Bagnolet ?",
          answer:
            "<p>L'intervention inclut le retrait des résidus de colle, d'enduit et de peinture sur les surfaces dures — carrelage, vitres, menuiseries. Les sols sont aspirés puis lavés, les poussières fines éliminées des plinthes et radiateurs. Le logement est prêt à être meublé ou visité.</p>",
        },
        {
          question:
            "Quel est le délai moyen d'intervention pour un nettoyage avant état des lieux demandé par une agence du centre-ville ?",
          answer:
            "<p>Nous intervenons généralement sous 48 à 72 heures après confirmation du créneau. En cas d'urgence — remise de clés imminente — un passage sous 24 heures peut être organisé selon disponibilité. Le planning est validé directement avec l'agence ou le propriétaire.</p>",
        },
        {
          question:
            "Quel niveau de propreté garantissez-vous pour une remise en état exigée par un bailleur social à Bagnolet ?",
          answer:
            "<p>Nous visons un résultat conforme aux grilles d'état des lieux : sols sans trace, sanitaires détartrés, vitres propres, placards nettoyés. Un contrôle pièce par pièce est effectué avant départ. Si un point reste insatisfaisant, une repasse ciblée est possible.</p>",
        },
        {
          question:
            "Comment coordonnez-vous votre intervention avec artisans et agences lors d'un nettoyage post-travaux ?",
          answer:
            "<p>Nous calons le créneau après validation de la fin des travaux par l'artisan ou le maître d'œuvre. Un contact direct avec l'agence permet d'ajuster l'horaire si le chantier prend du retard. Les clés peuvent être récupérées sur place ou en agence selon l'organisation convenue.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;