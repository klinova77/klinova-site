import type { City } from "~/types/geo";

const city: City = {
  name: "Neuilly-sur-Seine",
  slug: "neuilly-sur-seine",
  postalCodes: ["92200"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings souterrains et espaces extérieurs à Neuilly-sur-Seine. Une organisation adaptée aux copropriétés de standing et aux immeubles de bureaux de l'Avenue Charles de Gaulle.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Sur cet axe majeur entre la Porte Maillot et La Défense, bordé par l'Île de la Jatte, Klinova accompagne syndics et gestionnaires dans le maintien d'un niveau de propreté conforme aux exigences locales. <strong>Coordination avec les gardiens</strong>, planification précise, interventions discrètes.</p>\
<p class=\"mt-4\">Nos équipes prennent en charge l'entretien régulier comme les remises en état ponctuelles. Chaque intervention fait l'objet d'un compte rendu transmis au donneur d'ordre, avec photos avant/après si demandé.</p>\
<ul>\
  <li><strong>Coordination gardiens :</strong> Prise de contact systématique avant intervention pour organiser l'accès aux locaux techniques, parkings et parties communes sans perturber les résidents.</li>\
  <li><strong>Horaires adaptés :</strong> Interventions programmées en dehors des heures de bureau pour les immeubles tertiaires, ou tôt le matin pour les copropriétés résidentielles selon les règlements intérieurs.</li>\
  <li><strong>Stationnement anticipé :</strong> Repérage préalable des zones de livraison et créneaux autorisés pour éviter tout blocage du véhicule technique pendant l'intervention.</li>\
</ul>",

  citySpecificChallenges: [
    "<strong>Dépôts de suies</strong> sur les balcons et façades exposés à la N13 et au périphérique.",
    "Parkings souterrains profonds nécessitant une <strong>gestion spécifique des eaux de lavage</strong>.",
    "Halls d'immeubles anciens avec escaliers étroits et <strong>revêtements fragiles</strong> à protéger.",
    "Copropriétés avec gardiens : coordination obligatoire pour <strong>accès aux locaux techniques</strong>.",
    "Stationnement très contraint sur l'ensemble de la commune, créneaux de livraison limités.",
  ],

  districts: [
    "Bagatelle",
    "Saint-James",
    "Madrid",
    "Parc de Neuilly",
    "Plaine-des-Sablons",
    "Charles de Gaulle",
    "Île de la Jatte",
  ],

  nearbyCities: [
        "courbevoie",
        "levallois-perret",
        "puteaux",
        "clichy",
        "suresnes",
        "asnieres-sur-seine",
        "colombes",
        "nanterre",
        "gennevilliers",
        "boulogne-billancourt"
      ],

  landmarks: [
    "Mairie de Neuilly-sur-Seine",
    "Hôpital Américain de Paris",
    "Île de la Jatte",
    "Avenue Charles de Gaulle (N13)",
    "Théâtre des Sablons",
    "Parc de la Folie Saint-James",
  ],

  faq: [
    {
      question: "Comment organisez-vous l'accès aux immeubles sécurisés avec digicode et gardien ?",
      answer: "<p>Nous contactons le gardien ou le syndic en amont pour obtenir les <strong>codes d'accès</strong> et convenir d'un créneau. Le jour de l'intervention, notre technicien se présente à l'heure convenue. En cas d'absence du gardien, nous utilisons les accès transmis et laissons un compte rendu dans la loge.</p>",
    },
    {
      question: "Comment gérez-vous le stationnement sur les zones à forte contrainte ?",
      answer: "<p>Nous identifions les <strong>emplacements livraison</strong> et les créneaux horaires autorisés avant chaque intervention. Sur l'Avenue Charles de Gaulle ou les rues étroites du quartier Madrid, nous privilégions les passages tôt le matin pour éviter les verbalisations et ne pas bloquer la circulation.</p>",
    },
    {
      question: "Transmettez-vous un rapport après chaque passage ?",
      answer: "<p>Oui, chaque intervention donne lieu à un <strong>compte rendu écrit</strong> envoyé au donneur d'ordre. Il précise les zones traitées, les éventuelles anomalies constatées et inclut des photos avant/après sur demande. Ce suivi facilite les échanges avec les conseils syndicaux ou les locataires.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // SERVICES (uniquement ceux demandés)
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et horaires des immeubles tertiaires du secteur Pont de Neuilly.",
        "Matériel d'injection-extraction adapté aux moquettes laine comme aux dalles plombantes de bureaux.",
        "Interventions planifiées en dehors des heures d'activité pour limiter la gêne des occupants.",
      ],
      uniqueIntro: "<p>Dans les bureaux proches du <strong>Pont de Neuilly</strong>, les moquettes encaissent un passage quotidien soutenu. Les sièges sociaux et cabinets installés sur cet axe tertiaire génèrent une circulation dense qui marque rapidement les fibres. Les zones de réception, couloirs et salles de réunion accumulent poussières fines et traces de semelles en quelques semaines seulement.</p>\
<p class=\"mt-4\">Sur les moquettes laine des copropriétés de standing ou les <strong>dalles plombantes</strong> des plateaux de bureaux, le grisaillement progressif altère l'image des lieux. Les taches de café, les auréoles et les résidus de pollution atmosphérique s'incrustent dans la trame. Un entretien adapté au support redonne un aspect soigné et prolonge la durée de vie du revêtement.</p>\
<p class=\"mt-4\">L'usure liée au flux pendulaire sur l'axe tertiaire nécessite une intervention structurée. Un diagnostic préalable identifie la nature des fibres et l'état des salissures avant de définir le protocole de traitement approprié.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intense</h3>\
<p>Les couloirs et halls d'entrée concentrent l'essentiel des dépôts. L'aspiration préalable retire les particules libres avant le traitement humide. Les plinthes et bas de murs reçoivent une protection pour éviter les projections.</p>\
\
<h3>Surfaces de travail et réunion</h3>\
<p>Les open spaces et salles de réunion présentent souvent des taches localisées. L'injection-extraction cible ces zones avec plusieurs passes sur les secteurs marqués. Le détachage préalable traite les auréoles tenaces avant le nettoyage général.</p>\
\
<h3>Espaces secondaires et finitions</h3>\
<p>Les bureaux individuels et dégagements bénéficient d'un traitement uniforme. <strong>L'extraction maximale de l'humidité</strong> raccourcit le temps de séchage. Selon l'épaisseur du revêtement et la ventilation disponible, comptez entre quatre et huit heures avant la remise en service complète des locaux.</p>",
      specificChallenges: [
        "Moquettes laine des copropriétés de standing : <strong>traitement sans risque de feutrage</strong>.",
        "Dalles plombantes en bureaux : extraction complète sans décollement des joints.",
        "Flux tertiaire quotidien sur l'axe Charles de Gaulle : <strong>usure accélérée des zones de passage</strong>.",
        "Stationnement réglementé : coordination avec gardiens pour accès véhicule technique.",
        "Horaires décalés obligatoires dans les sièges sociaux pour éviter toute perturbation.",
      ],
      faqAdditions: [
        {
          question: "Dans les escaliers étroits du secteur Sablons, comment faites-vous passer vos machines sans abîmer plinthes et murs ?",
          answer: "<p>Nous utilisons du matériel compact conçu pour les passages resserrés. Les plinthes et angles reçoivent une protection avant intervention. Les flexibles souples permettent de travailler sans cogner les murs, même dans les cages d'escalier anciennes où l'espace de manœuvre reste limité.</p>",
        },
        {
          question: "Après un shampoing en bureaux proches du Pont de Neuilly, combien de temps avant la disparition complète des odeurs ?",
          answer: "<p>L'extraction poussée retire la majorité de l'humidité résiduelle. <strong>Les odeurs de produit s'estompent</strong> généralement sous deux à quatre heures avec une ventilation correcte. En cas de traitement sur moquette épaisse ou local peu aéré, prévoir une demi-journée pour un retour à la normale.</p>",
        },
        {
          question: "Pour les moquettes des bureaux du secteur tertiaire, quelle méthode offre les résultats les plus durables ?",
          answer: "<p>L'injection-extraction reste la technique de référence pour les plateaux à fort passage. Elle déloge les salissures en profondeur sans laisser de résidus collants. L'encapsulation peut compléter en entretien courant, mais ne remplace pas un nettoyage complet régulier sur les zones de circulation intense.</p>",
        },
        {
          question: "Intervenez-vous différemment sur moquettes laine et dalles plombantes en copropriétés autour de Sablons ?",
          answer: "<p>Oui, le diagnostic préalable détermine la nature des fibres et leur tolérance à l'humidité. La laine nécessite une température et un pH contrôlés pour éviter le feutrage. Les dalles plombantes supportent un traitement plus appuyé, mais l'extraction doit rester rigoureuse pour ne pas fragiliser les joints.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et balisage sécurisé pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains profonds de Neuilly et de leurs contraintes d'accès spécifiques.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées conformément aux exigences locales.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation véhicules et limiter la gêne.",
      ],
      uniqueIntro: "<p>Les traces de graisse et les coulures d'huile marquent progressivement les sols des parkings souterrains autour de la <strong>Rue du Faubourg de l'Arche</strong>. Ces dépôts s'accumulent sur les places de stationnement, les rampes d'accès et les allées de circulation. Les revêtements perdent leur aspect d'origine, et les rigoles d'évacuation se colmatent peu à peu.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux sols leur propreté et facilite l'entretien courant. Les copropriétaires constatent une amélioration visible dès la première intervention. Les <strong>revêtements en béton quartzé ou résine époxy</strong>, fréquents dans les résidences de Neuilly-sur-Seine, retrouvent leur finition d'origine et résistent mieux aux passages répétés.</p>\n<p class=\"mt-4\">L'intervention se coordonne avec le syndic ou le gestionnaire pour organiser la rotation des véhicules. Les contraintes de stationnement propres à la commune imposent une planification rigoureuse : créneaux horaires adaptés, signalétique temporaire et communication préalable auprès des occupants.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions le type de revêtement et l'état des évacuations. Le niveau d'encrassement détermine le choix du dégraissant et la méthode de lavage.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les débris grossiers. La signalétique de balisage est mise en place pour sécuriser les zones de travail et orienter les usagers vers les accès libres.</p>\n\n<h3>Lavage mécanisé et traitement des zones critiques</h3>\n<p>L'autolaveuse effectue des passes successives sur l'ensemble des surfaces. Les rampes d'accès, les angles morts et les pieds de murs reçoivent un traitement ciblé à la haute pression avec dégraissant adapté.</p>\n<p class=\"mt-4\">Les rigoles et regards sont dégagés pour garantir l'écoulement correct des eaux de lavage.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux usées sont aspirées ou dirigées vers les évacuations conformes. Aucun rejet sauvage n'est toléré.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention selon la demande. Nous transmettons une recommandation de fréquence adaptée au trafic du parking.</p>",
      specificChallenges: [
        "Rampes étroites en sous-sol nécessitant un matériel adapté aux passages restreints.",
        "Revêtements résine époxy sensibles aux produits agressifs : sélection de dégraissants compatibles.",
        "Gestion des eaux de lavage obligatoire pour respecter les évacuations et la voirie.",
        "Coordination avec le gardien ou syndic pour planifier les créneaux d'intervention.",
        "Stationnement du véhicule technique soumis aux contraintes de zone rouge à Neuilly.",
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous la rotation des véhicules dans les parkings souterrains de la Rue du Faubourg de l'Arche ?",
          answer: "<p>Nous définissons avec le syndic un planning par zones. Les résidents sont informés en amont pour libérer les places concernées. Le balisage temporaire guide les usagers vers les emplacements disponibles pendant l'intervention, limitant ainsi les désagréments.</p>",
        },
        {
          question: "Les taches d'huile anciennes sur béton quartzé peuvent-elles être éliminées efficacement ?",
          answer: "<p>Un dégraissant adapté est appliqué avant le passage de l'autolaveuse. Les taches incrustées nécessitent parfois un traitement localisé à la haute pression. Le résultat dépend de l'ancienneté des dépôts, mais une amélioration visible est obtenue dès la première intervention.</p>",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans les parkings souterrains à drains restreints ?",
          answer: "<p>Les eaux usées sont aspirées au fur et à mesure ou dirigées vers les évacuations conformes. Nous vérifions l'état des regards avant intervention. Aucun rejet n'est effectué vers la voirie ou les espaces communs, conformément aux exigences de la copropriété.</p>",
        },
        {
          question: "Quelle différence de protocole appliquez-vous entre parkings souterrains et parkings aériens près du Pont de Neuilly ?",
          answer: "<p>En souterrain, la ventilation limitée impose un séchage plus long et une gestion stricte des eaux. En extérieur, les dépôts atmosphériques et les feuilles mortes s'ajoutent aux salissures classiques. Le choix du matériel et la durée d'intervention s'adaptent à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Neuilly-sur-Seine, avec traitement adapté aux supports nobles et gestion rigoureuse des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Balcons exposés à la pollution du Boulevard Bineau : nous adaptons le traitement à chaque niveau de dépôt.",
        "Pression ajustée selon le support — pierre de taille, grès cérame ou dalles — pour préserver joints et revêtements.",
        "Aspiration des eaux de rinçage et protection des voisins du dessous, conformément aux règles de copropriété neuilléennes.",
      ],
      uniqueIntro: "<p>Sur le <strong>Boulevard Bineau</strong> et les axes proches de la N13, les balcons accumulent rapidement un voile grisâtre. Suies, particules fines, poussières urbaines : ces dépôts s'incrustent dans les joints et ternissent les surfaces en quelques mois. Le carrelage perd son éclat, la pierre se voile, et l'espace extérieur devient moins agréable à utiliser.</p>\n<p class=\"mt-4\">Un balcon propre change la perception de votre logement. Les <strong>supports en pierre de taille ou en grès cérame</strong>, fréquents dans les résidences neuilléennes, retrouvent leur aspect d'origine. Les garde-corps redeviennent nets, les joints clairs. Vous profitez à nouveau de cet espace sans gêne visuelle, que ce soit pour un café matinal ou une soirée d'été.</p>\n<p class=\"mt-4\">L'intervention prend en compte les contraintes d'évacuation des eaux propres aux copropriétés de Neuilly-sur-Seine. Aucun rejet sur la voirie ni écoulement chez les voisins du dessous : nous aspirons et contrôlons chaque litre utilisé, du diagnostic initial jusqu'au séchage final.</p>",
      uniqueDeepDive: "<h3>Dépôts incrustés et débris accumulés</h3>\n<p>Les feuilles, la terre et les résidus divers sont retirés manuellement. Le mobilier et les plantes sont déplacés ou protégés par bâchage. Les menuiseries reçoivent une protection pour éviter toute projection.</p>\n\n<h3>Voile gris et salissures tenaces</h3>\n<p>Un produit adapté au support — pierre, grès cérame ou dalles sur plots — est appliqué. Le brossage manuel ou mécanique décolle les particules sans agresser les joints. Le rinçage s'effectue à pression contrôlée, avec aspiration simultanée pour éviter tout écoulement vers le voisinage ou la voie publique.</p>\n\n<h3>Garde-corps, vitrages et finitions</h3>\n<p>Les éléments annexes sont traités : barreaux, vitres latérales, murs mitoyens accessibles. Si des mousses persistent dans les zones ombragées, un traitement ciblé complète le nettoyage. Le séchage est accéléré, et nous partageons quelques conseils pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Pollution N13 : suies noires sur balcons du Boulevard Bineau nécessitant un détachage ciblé.",
        "Joints fragiles sur carrelage grès cérame : pression contrôlée indispensable.",
        "Interdiction de rejet d'eau sur voirie : aspiration systématique pendant le rinçage.",
        "Loggias haussmanniennes avec garde-corps ouvragés : nettoyage manuel des détails.",
        "Zones ombragées propices aux dépôts verts : traitement anti-mousse adapté.",
      ],
      faqAdditions: [
        {
          question: "Sur un balcon en pierre du Boulevard Bineau, comment évitez-vous les coulures chez les voisins du dessous ?",
          answer: "<p>Nous utilisons un système d'aspiration en continu pendant le rinçage. L'eau ne s'écoule ni sur les balcons inférieurs ni sur la voirie. Cette méthode respecte les règlements de copropriété stricts à Neuilly-sur-Seine et évite toute réclamation de voisinage après notre passage.</p>",
        },
        {
          question: "Les dépôts verts sur balcons ombragés s'enlèvent-ils sans abîmer la pierre de taille ?",
          answer: "<p>Oui. Nous appliquons un produit anti-mousse à pH neutre, suivi d'un brossage doux. La pierre de taille, fréquente sur les immeubles anciens du secteur, conserve sa patine naturelle. Les joints ne sont pas creusés, et le résultat reste visible plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "Faut-il privilégier une méthode douce pour le carrelage grès cérame afin de préserver les joints ?",
          answer: "<p>Absolument. Le grès cérame résiste bien, mais les joints d'étanchéité sont plus sensibles. Nous réglons la pression au minimum efficace et travaillons avec une buse adaptée. Cette approche évite de déchausser les joints tout en éliminant les salissures incrustées sur les dalles.</p>",
        },
        {
          question: "Sur loggias haussmanniennes, pouvez-vous nettoyer sans haute pression pour préserver garde-corps et vitrages ?",
          answer: "<p>Oui, nous intervenons manuellement sur les éléments fragiles : garde-corps en fer forgé, vitrages anciens, moulures. Le nettoyage combine brossage, produit adapté et rinçage contrôlé. Les détails ouvragés sont traités un à un pour éviter toute dégradation des finitions d'origine.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide des supports et solutions anti-retour pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des zones à risque à Neuilly-sur-Seine, notamment les secteurs proches de l'Île de la Jatte et des parcs arborés.",
        "Protocole rigoureux avec EPI complets, confinement systématique et désinfection virucide certifiée sur tous les supports.",
        "Organisation adaptée aux contraintes d'accès et de stationnement, évacuation des déchets en sacs étanches sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Comment profiter de son balcon quand les fientes s'accumulent semaine après semaine ? Sur l'Île de la Jatte et les secteurs proches des espaces verts, la proximité des arbres et des points d'eau attire les pigeons qui colonisent corniches et garde-corps. L'odeur persiste, le linge ne peut plus sécher dehors, et chaque tentative de nettoyage à l'eau semble insuffisante face à des dépôts qui reviennent sans cesse.</p>\n<p class=\"mt-4\">Au-delà de la gêne quotidienne, les fientes attaquent progressivement les supports. Sur les corniches en pierre des immeubles haussmanniens, l'acidité dégrade les matériaux et laisse des traces durables. Les balcons des résidences plus récentes subissent le même sort : carrelage taché, joints noircis, garde-corps métalliques corrodés.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter le problème en profondeur. Diagnostic des zones touchées, confinement pour éviter la dispersion des particules, désinfection adaptée aux supports, puis mise en place de dispositifs dissuasifs pour limiter le retour des oiseaux.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de retrouver un espace utilisable, débarrassé des dépôts et des agents pathogènes. Les supports sont traités avec un produit virucide et bactéricide homologué, le temps de contact respecté, garantissent l'élimination des risques sanitaires.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute action, la zone est bâchée pour protéger l'intérieur du logement et éviter les projections vers les voisins. L'équipe intervient en combinaison jetable, masque FFP2, gants et lunettes. Les fientes sont humidifiées pour neutraliser les poussières avant ramassage et conditionnement en sacs étanches.</p>\n\n<h3>Traitement des supports et rinçage</h3>\n<p>Sol, garde-corps, vitrages et murs mitoyens sont nettoyés méthodiquement. La désinfection est appliquée sur l'ensemble des surfaces. Un rinçage contrôlé finalise l'intervention, avec un délai d'aération avant réutilisation du balcon. Des pics ou filets anti-pigeons peuvent être posés sur les rebords exposés.</p>",
      specificChallenges: [
        "Proximité des espaces verts favorisant la présence permanente de pigeons sur les balcons exposés.",
        "Corniches en pierre des immeubles anciens particulièrement vulnérables à l'acidité des fientes.",
        "Stationnement réglementé compliquant l'approche du véhicule technique pour l'évacuation des déchets.",
        "Exigence de discrétion et de protection des voisins lors du confinement et du rinçage.",
        "Risque de réinfestation rapide sans mise en place de dispositifs dissuasifs adaptés.",
      ],
      faqAdditions: [
        {
          question: "Après accumulation de fientes sur un balcon proche de l'Île de la Jatte, quels risques sanitaires justifient une intervention rapide ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les balcons exposés aux oiseaux des zones arborées, l'accumulation crée un environnement propice aux bactéries et champignons. Une décontamination avec désinfectant virucide élimine ces risques et permet de réutiliser l'espace en toute sécurité.</p>",
        },
        {
          question: "Pour le traitement de corniches d'immeubles anciens à Neuilly-sur-Seine, quels équipements de protection utilisez-vous ?",
          answer: "<p>L'équipe intervient systématiquement en combinaison jetable, masque FFP2, gants étanches et lunettes de protection. Le bâchage préalable confine la zone pour éviter toute dispersion de particules vers l'intérieur du logement ou les balcons voisins. Ces précautions sont indispensables sur les immeubles haussmanniens où les corniches en pierre accumulent des dépôts importants.</p>",
        },
        {
          question: "Sur un balcon régulièrement souillé près du Parc de la Folie Saint-James, quelle désinfection garantit l'élimination des bactéries ?",
          answer: "<p>Nous appliquons un produit virucide et bactéricide homologué sur l'ensemble des surfaces après nettoyage. Le temps de contact est respecté avant rinçage pour assurer l'efficacité du traitement. Cette désinfection complète élimine les agents pathogènes présents dans les fientes et sur les supports contaminés.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des déchets contaminés dans les rues à stationnement réglementé de Neuilly-sur-Seine ?",
          answer: "<p>Les fientes collectées sont conditionnées en sacs étanches directement sur place. L'équipe organise l'intervention en tenant compte des contraintes de stationnement, avec un véhicule positionné au plus près pour limiter les déplacements. L'évacuation est effectuée sans laisser de traces ni gêner le voisinage ou la circulation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un mobilier sain.",
      whyUsBullets: [
        "Connaissance des intérieurs de standing à Neuilly : mobilier de valeur, textiles délicats, exigence de discrétion.",
        "Détachage ciblé selon la nature des fibres et séchage maîtrisé pour limiter le temps d'immobilisation du mobilier.",
        "Stationnement anticipé à proximité immédiate et protection des sols avant chaque passage d'équipement.",
      ],
      uniqueIntro: "<p>Après plusieurs années d'usage quotidien, les canapés et tapis des logements de l'<strong>avenue de Madrid</strong> accumulent poussières fines, résidus corporels et taches diverses. Les fibres absorbent ce que l'aspirateur ne capte pas : allergènes, odeurs persistantes, traces de café ou de vin oubliées. Dans ces intérieurs où le mobilier de designer côtoie les tapis d'Orient, le nettoyage de surface ne suffit plus à préserver l'aspect d'origine.</p>\n<p class=\"mt-4\">Un entretien en profondeur redonne aux textiles leur souplesse et leurs couleurs. Les <strong>tissus fragiles comme le velours ou la soie</strong>, fréquents dans les résidences de standing, retrouvent un toucher agréable. Les occupants respirent un air plus sain, les acariens sont éliminés, et le mobilier conserve sa valeur plus longtemps.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic précis du textile et des taches présentes. Nos équipes protègent systématiquement les parquets massifs avant d'installer le matériel, puis adaptent pression et produits selon chaque support pour un résultat durable.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'extraire les salissures incrustées tout en préservant les fibres. Le résultat attendu : un canapé ou tapis débarrassé des allergènes, des odeurs et des traces visibles, avec des couleurs ravivées.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Chaque textile est identifié : coton, laine, synthétique, velours ou soie. Un test discret sur zone cachée valide la compatibilité des produits. Les taches sont traitées individuellement avec un détachant adapté, enzymatique si nécessaire pour les résidus organiques.</p>\n\n<h3>Injection-extraction et séchage contrôlé</h3>\n<p>Le nettoyage principal utilise la technique d'injection-extraction. La pression et la température sont ajustées selon la fragilité du support. L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et l'aération de la pièce, comptez entre 4 et 8 heures avant remise en service. Des consignes précises vous sont transmises pour optimiser le séchage.</p>",
      specificChallenges: [
        "Tapis d'Orient et textiles précieux nécessitant un diagnostic fibre par fibre avant intervention.",
        "Canapés en velours ou soie demandant une pression réduite et des produits neutres.",
        "Parquets massifs à protéger systématiquement lors de l'installation du matériel d'extraction.",
        "Stationnement contraint imposant une organisation logistique anticipée pour le véhicule technique.",
        "Séchage à adapter selon l'aération des appartements et la saison d'intervention.",
      ],
      faqAdditions: [
        {
          question: "Un nettoyage professionnel peut-il éliminer les acariens sur les canapés des appartements de l'avenue de Madrid et améliorer la qualité de l'air intérieur ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur et déloge les acariens, leurs déjections et les allergènes accumulés. Après séchage complet, l'air intérieur est plus sain et les occupants sensibles constatent souvent une amélioration du confort respiratoire dans les jours qui suivent.</p>",
        },
        {
          question: "Comment adaptez-vous votre méthode pour des canapés en velours ou soie, fréquents dans les résidences de l'avenue de Madrid ?",
          answer: "<p>Un test préalable sur zone cachée confirme la tenue du textile. La pression d'injection est réduite, la température abaissée, et les produits utilisés sont neutres. Le velours retrouve son aspect velouté sans écrasement des fibres, la soie conserve son éclat sans auréole.</p>",
        },
        {
          question: "En cas d'urine d'animal sur un tapis précieux dans le secteur Bagatelle, quel traitement élimine odeur et tache incrustée ?",
          answer: "<p>Un détachant enzymatique décompose les composés organiques responsables de l'odeur. L'injection-extraction retire ensuite les résidus en profondeur. Sur un tapis de valeur, nous ajustons la concentration et le temps de pose pour préserver les teintures d'origine tout en neutralisant la source olfactive.</p>",
        },
        {
          question: "Quel est le temps de séchage attendu après le nettoyage d'un canapé dans un intérieur de standing avec parquets fragiles ?",
          answer: "<p>Comptez entre 4 et 8 heures selon l'épaisseur du textile et l'aération de la pièce. Nous conseillons d'ouvrir les fenêtres si possible et d'éviter de s'asseoir avant séchage complet. Les parquets sont protégés pendant toute l'intervention pour éviter toute trace d'humidité.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse à Neuilly-sur-Seine : traitement des mousses, nettoyage adapté au support et protection durable pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses ombragées proches du Parc de la Folie Saint-James et des contraintes d'humidité locales.",
        "Protocoles différenciés selon le support : pierre naturelle, bois exotique, composite, avec produits et pression adaptés.",
        "Protection systématique du mobilier et des plantations, gestion maîtrisée des eaux de rinçage vers les évacuations.",
      ],
      uniqueIntro: "<p>Les traces vertes et les dépôts noirâtres sont visibles dès les premiers mois sur les terrasses situées autour du <strong>Parc de la Folie Saint-James</strong>. L'ombre portée par les arbres et l'humidité ambiante favorisent l'apparition rapide de mousses et de lichens, particulièrement sur les dalles exposées nord ou protégées par des murets. Ces formations s'incrustent dans les joints et rendent le sol glissant après chaque épisode pluvieux.</p>\n<p class=\"mt-4\">Sur les résidences de Neuilly, les terrasses présentent souvent des supports en pierre naturelle, bois exotique ou composite qui réagissent différemment aux traitements. Un nettoyage inadapté peut ternir la pierre calcaire, griser prématurément le bois ou décoller les lames composites. L'enjeu consiste à retrouver l'aspect d'origine sans fragiliser les matériaux.</p>\n<p class=\"mt-4\">La proximité du Bois de Boulogne accentue les dépôts organiques : feuilles, pollens, résidus végétaux s'accumulent et nourrissent les mousses. Une intervention structurée permet d'éliminer ces salissures et de limiter leur réapparition sur plusieurs saisons.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries et baies vitrées reçoivent une protection pour éviter les projections. Un balayage préalable retire les gros débris : feuilles mortes, terre accumulée, fragments de mousse.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour pierre calcaire, bois ou composite. Le brossage manuel ou mécanique décolle les dépôts incrustés. Sur les zones envahies, un traitement anti-mousse agit en profondeur avant rinçage. La haute pression contrôlée intervient uniquement sur les matériaux qui la supportent, en préservant les joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les eaux de rinçage sont dirigées vers les points d'évacuation existants. Les plantations sont rincées si nécessaire. Après séchage, nous formulons des recommandations d'entretien saisonnier adaptées à l'exposition de votre terrasse pour espacer les interventions futures.</p>",
      specificChallenges: [
        "Mousses persistantes sur terrasses ombragées par les arbres du secteur Bagatelle et Saint-James.",
        "Pierre calcaire poreuse nécessitant un nettoyage basse pression pour éviter l'effritement.",
        "Bois exotique grisé par l'exposition aux intempéries, demandant un traitement de ravivage spécifique.",
        "Dépôts organiques récurrents liés à la proximité du Bois de Boulogne et des espaces verts.",
        "Gestion des eaux sur terrasses en attique pour éviter écoulements vers les voisins ou la voirie.",
      ],
      faqAdditions: [
        {
          question: "Pour une terrasse en bois près du Parc de la Folie Saint-James, quelle méthode évite décoloration et soulèvement des lames ?",
          answer: "<p>Nous utilisons un nettoyage basse pression combiné à un détergent adapté aux bois exotiques. Le jet reste tangentiel pour ne pas soulever les fibres ni déloger les fixations. Un rinçage abondant élimine tout résidu de produit. Cette approche préserve la teinte naturelle et la stabilité des lames.</p>",
        },
        {
          question: "Comment éliminez-vous les mousses tenaces sur terrasses ombragées proches du Bois de Boulogne sans abîmer la pierre ?",
          answer: "<p>Un traitement anti-mousse biodégradable est appliqué puis laissé agir avant brossage manuel. Sur pierre calcaire, nous évitons la haute pression directe qui éroderait la surface. Le rinçage contrôlé évacue les résidus sans saturer les joints. Cette méthode retire les mousses en profondeur tout en respectant la porosité du matériau.</p>",
        },
        {
          question: "Quel traitement anti-mousse préconisez-vous pour une terrasse en pierre calcaire afin de limiter la réapparition annuelle ?",
          answer: "<p>Après nettoyage, nous appliquons un produit préventif qui freine la repousse pendant plusieurs mois. Ce traitement pénètre dans les pores de la pierre sans former de film glissant. Un entretien léger en fin d'automne prolonge l'efficacité. Selon l'exposition, un passage annuel suffit généralement à maintenir la terrasse propre.</p>",
        },
        {
          question: "Quelle est la meilleure saison pour traiter une terrasse exposée plein nord sur l'Île de la Jatte afin d'assurer un séchage rapide ?",
          answer: "<p>Le printemps tardif ou le début d'automne offrent des conditions idéales : températures douces et journées suffisamment longues pour un séchage complet. En hiver, l'humidité persistante ralentit l'évaporation. Nous planifions l'intervention sur une journée sans pluie annoncée pour garantir un résultat optimal sous 24 à 48 heures.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre appartement ou maison, avec traitement adapté des parquets, marbres et surfaces nobles pour un logement prêt à vivre ou à remettre.",
      whyUsBullets: [
        "Connaissance des typologies de logements neuilléens : grands volumes, matériaux nobles, exigences de discrétion.",
        "Maîtrise des techniques adaptées aux parquets massifs, marbres et pierres calcaires sans risque de dégradation.",
        "Coordination avec agences et syndics pour respecter les délais d'état des lieux et limiter toute gêne.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable quand les travaux viennent de s'achever ou qu'un locataire libère les lieux ? <strong>Autour du Lycée Pasteur</strong> et dans les secteurs résidentiels de Neuilly-sur-Seine, les demandes de remise en état se multiplient entre deux baux ou après une rénovation. Poussières de chantier, traces sur les vitres, résidus sur les sols : le nettoyage dépasse largement le simple coup de balai.</p>\n<p class=\"mt-4\">Les <strong>grands appartements et hôtels particuliers</strong> de la commune présentent des parquets massifs point de Hongrie, des marbres ou des pierres naturelles. Ces matériaux nobles exigent des produits et des gestes spécifiques pour éviter toute dégradation. Un protocole inadapté risque de ternir un parquet ciré ou de laisser des auréoles sur une pierre calcaire.</p>\n<p class=\"mt-4\">Klinova coordonne chaque intervention avec les agences immobilières locales et les particuliers pour respecter les délais d'état des lieux. Diagnostic préalable, protection des surfaces fragiles, contrôle final : l'organisation garantit un logement livré dans les temps, sans mauvaise surprise à la remise des clés.</p>",
      uniqueDeepDive: "<h3>Poussières et résidus de chantier</h3>\n<p>Le dépoussiérage commence par les plafonds, les murs et les plinthes avant de traiter les sols. Les traces de peinture, d'enduit ou de colle sont retirées manuellement avec des outils adaptés au support.</p>\n<p class=\"mt-4\">Sur les parquets massifs, un nettoyage à sec précède tout passage humide pour éviter de faire pénétrer les particules fines dans le bois.</p>\n\n<h3>Pièces d'eau et surfaces techniques</h3>\n<p>Cuisine et salle de bain reçoivent un traitement ciblé : plans de travail, faïences, joints et sanitaires sont dégraissés et désinfectés. Les électroménagers encastrés sont nettoyés intérieurement et extérieurement.</p>\n<p class=\"mt-4\">Les produits utilisés respectent les marbres et pierres naturelles fréquents dans les appartements de standing.</p>\n\n<h3>Finitions et contrôle qualité</h3>\n<p>Interrupteurs, poignées, radiateurs et intérieurs de placards sont passés en revue. Les vitres intérieures sont nettoyées pour une luminosité optimale.</p>\n<p class=\"mt-4\">Un contrôle final vérifie chaque pièce avant aération et remise des clés au propriétaire ou à l'agence.</p>",
      specificChallenges: [
        "Parquets point de Hongrie sensibles aux excès d'eau : nettoyage à sec puis passage humide contrôlé.",
        "Marbres et pierres naturelles réactifs aux produits acides : sélection de détergents neutres.",
        "Stationnement restreint : coordination préalable pour accès véhicule technique à proximité.",
        "Délais serrés entre deux locataires : planification rigoureuse pour remise des clés à l'heure.",
        "Gardiens et digicodes systématiques : prise de contact anticipée pour fluidifier l'accès.",
      ],
      faqAdditions: [
        {
          question: "En cas d'état des lieux urgent près du Lycée Pasteur, quel délai proposez-vous pour une remise en état complète ?",
          answer: "<p>Nous intervenons selon la superficie et l'état du logement. Pour les situations pressantes, un diagnostic rapide par téléphone permet d'évaluer la faisabilité d'une intervention plus courte et de mobiliser une équipe disponible.</p>",
        },
        {
          question: "Pour un grand appartement de plus de 100 m² avec parquet massif, quelle différence entre nettoyage standard et fin de chantier ?",
          answer: "<p>Le nettoyage fin de chantier inclut le retrait des résidus de travaux (enduit, peinture, colle) et un dépoussiérage complet des surfaces verticales. Le protocole standard se concentre sur l'entretien courant. Sur parquet massif, la fin de chantier exige un passage à sec préalable pour protéger le bois.</p>",
        },
        {
          question: "Comment évaluez-vous le nettoyage d'un hôtel particulier dans le secteur Saint-James selon les surfaces et matériaux ?",
          answer: "<p>Un diagnostic sur place identifie les matériaux (marbre, pierre, boiseries) et la superficie à traiter. Le devis détaille chaque zone et les produits adaptés. Les hôtels particuliers nécessitent souvent des interventions par étapes pour respecter les contraintes d'accès et de discrétion.</p>",
        },
        {
          question: "Après un dégât des eaux ayant touché un parquet point de Hongrie, quelles interventions de nettoyage et séchage proposez-vous ?",
          answer: "<p>L'intervention débute par l'extraction de l'eau résiduelle et un séchage contrôlé pour limiter le gondolement du bois. Le nettoyage suit avec des produits neutres adaptés au parquet. Si des moisissures apparaissent, un traitement complémentaire est proposé après évaluation de l'étendue des dégâts.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;