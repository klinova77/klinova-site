

import type { City } from "~/types/geo";

const city: City = {
  name: "Levallois-Perret",
  slug: "levallois-perret",
  postalCodes: [
    "92300",
  ],

  department: {
    name: "hauts-de-seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, des parkings souterrains et des espaces extérieurs à Levallois-Perret. Une organisation adaptée à la densité urbaine exceptionnelle de la commune et aux contraintes d'accès des immeubles du quartier Trézel comme du centre-ville.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>Entre l'Hôtel de Ville monumental et la concentration de sièges sociaux en bord de Seine, Levallois-Perret cumule des exigences élevées en matière de propreté. Klinova s'y positionne comme partenaire terrain, capable de coordonner des interventions régulières ou ponctuelles selon vos besoins.</p>\
<p class=\"mt-4\">Nos équipes connaissent les spécificités locales : <strong>accès sécurisés systématiques</strong>, des parkings profonds sur plusieurs niveaux, copropriétés de standing. Nous adaptons nos plannings aux contraintes horaires et assurons un suivi documenté pour les gestionnaires qui le souhaitent.</p>\
<ul>\
  <li><strong>Coordination avec gardiens et syndics :</strong> Prise de contact préalable, récupération des badges ou codes, respect des créneaux validés pour limiter la gêne aux occupants.</li>\
  <li><strong>Gestion du stationnement technique :</strong> Anticipation des emplacements (parkings Indigo, So Ouest) pour éviter les retards liés à la densité de circulation en surface.</li>\
  <li><strong>Interventions adaptées au bâti :</strong> Matériel dimensionné pour les escaliers étroits des immeubles anciens comme pour les sous-sols profonds des résidences récentes.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains profonds</strong> (-3/-4 niveaux) nécessitant une ventilation adaptée pendant l'intervention.",
    "Immeubles anciens du centre-ville avec <strong>escaliers étroits</strong> limitant le gabarit du matériel.",
    "Pollution atmosphérique marquée sur les <strong>balcons côté Quai Michelet</strong> et Boulevard Bineau.",
    "Accès systématiquement sécurisés : coordination obligatoire avec gardiens ou syndics.",
    "<strong>Stationnement en surface quasi inexistant</strong> : prévoir parking public pour interventions longues.",
    "Forte présence de pigeons sur les corniches des immeubles haussmanniens du quartier Greffulhe.",
  ],

  // Texte brut uniquement
  districts: [
    "Jean Zay",
    "Front de Seine",
    "Collange",
    "Trézel",
    "Greffulhe",
    "Louise Michel",
    "Alsace",
    "Victor Hugo",
    "Anatole France",
  ],
  nearbyCities: [
        "neuilly-sur-seine",
        "courbevoie",
        "asnieres-sur-seine",
        "colombes",
        "nanterre",
        "boulogne-billancourt",
        "issy-les-moulineaux",
        "vanves",
        "rueil-malmaison",
        "malakoff"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Levallois-Perret",
    "Centre Commercial So Ouest",
    "Gare de Clichy-Levallois",
    "Palais des Sports Marcel-Cerdan",
    "Île de la Jatte",
    "Parc de la Planchette",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous les accès sécurisés dans les copropriétés de Levallois-Perret ?",
      answer: "<p>Nous contactons le gardien ou le syndic en amont pour récupérer les <strong>badges ou codes nécessaires</strong>. Si l'immeuble dispose d'un interphone connecté, nous convenons d'un créneau précis. Cette préparation évite les temps morts le jour de l'intervention et garantit un accès fluide aux parties communes ou aux parkings souterrains.</p>",
    },
    {
      question: "Pouvez-vous intervenir en dehors des horaires de bureau ?",
      answer: "<p>Oui, nous proposons des créneaux en <strong>soirée ou le week-end</strong> pour les locaux professionnels du quartier Trézel ou Front de Seine. Pour le résidentiel, nous respectons les plages calmes (notamment 12h-14h) sauf accord contraire du syndic. Le planning est validé ensemble avant chaque intervention.</p>",
    },
    {
      question: "Quel délai pour obtenir un devis après une demande ?",
      answer: "<p>Nous envoyons généralement un devis sous <strong>24 à 48 heures</strong> après réception des informations (surface, type de prestation, accès). Si une visite technique est nécessaire — parkings profonds ou surfaces importantes — nous la planifions dans la semaine selon vos disponibilités.</p>",
    },
    {
      question: "Comment organisez-vous le stationnement de vos véhicules techniques ?",
      answer: "<p>La densité de Levallois-Perret impose une <strong>anticipation systématique</strong>. Nous utilisons les parkings publics (Indigo, So Ouest) ou sollicitons un emplacement livraison si disponible. Ce point est intégré à notre préparation pour éviter tout retard ou surcoût imprévu.</p>",
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
      heroDescription: "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide selon la configuration des locaux.",
      whyUsBullets: [
        "Connaissance des configurations tertiaires de Levallois-Perret, des dalles textiles de bureaux aux moquettes laine des copropriétés anciennes.",
        "Matériel injection-extraction professionnel adapté aux fibres denses comme aux revêtements fins, avec détachage ciblé intégré.",
        "Interventions planifiées en dehors des heures de bureau ou le week-end, coordination avec gardiens et gestionnaires pour accès fluide.",
      ],
      uniqueIntro: "<p>Dans le quartier Trézel et autour des sièges sociaux de Levallois-Perret, les dalles textiles des open spaces accumulent poussières fines et traces de passage en quelques semaines. Les couloirs de circulation concentrent l'essentiel de l'usure, tandis que les zones sous bureaux restent relativement préservées. Cette répartition inégale des salissures nécessite un diagnostic précis avant toute intervention.</p>\n<p class=\"mt-4\">Les parties communes des immeubles anciens du secteur Greffulhe présentent des contraintes différentes : moquettes laine dans les escaliers étroits, fibres plus denses qui retiennent davantage les particules. Un entretien adapté prolonge la durée de vie du revêtement et maintient une image soignée pour les occupants comme pour les visiteurs.</p>\n<p class=\"mt-4\">Qu'il s'agisse de halls recevant les flux quotidiens depuis les stations de métro ou de salles de réunion sollicitées en continu, chaque configuration appelle une méthode spécifique. Le diagnostic initial identifie les zones prioritaires, les types de fibres et les contraintes d'accès pour planifier une intervention efficace.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\n<p>Les couloirs et halls d'entrée reçoivent le traitement prioritaire. L'aspiration préalable retire les particules libres avant application du procédé injection-extraction. Les passes sont multipliées sur ces surfaces à fort trafic pour déloger les salissures compactées dans les fibres.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les dalles textiles sous postes de travail nécessitent une attention particulière aux roulettes de sièges qui écrasent les fibres. Le détachage ciblé traite les marques de café ou d'encre avant le nettoyage général. Les plinthes et bas de cloisons sont protégés pendant l'opération.</p>\n\n<h3>Escaliers et accès secondaires</h3>\n<p>Dans les cages d'escalier étroites des immeubles anciens, le matériel compact permet d'atteindre chaque marche. L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon la ventilation. Les consignes de non-piétinement sont communiquées pour garantir un résultat durable.</p>",
      specificChallenges: [
        "Dalles textiles bureaux Trézel : passages fréquents et roulettes de sièges qui compactent les fibres.",
        "Escaliers étroits immeubles Greffulhe : accès limité nécessitant matériel compact et manutention adaptée.",
        "Halls proches de la gare de Clichy-Levallois : flux piétons quotidiens apportant poussières et traces humides.",
        "Copropriétés standing : moquettes laine exigeant température et pression contrôlées.",
        "Stationnement technicien : densité urbaine imposant anticipation des accès véhicule.",
      ],
      faqAdditions: [
        {
          question: "Comment transportez-vous le matériel de shampouinage dans les escaliers étroits des immeubles anciens du quartier Greffulhe ?",
          answer: "<p>Nous utilisons des équipements compacts et modulables, conçus pour les cages d'escalier exiguës. Les éléments lourds sont montés progressivement, et nous protégeons les murs et rampes pendant la manutention. La coordination préalable avec le gardien facilite l'organisation.</p>",
        },
        {
          question: "Pouvez-vous éliminer des taches anciennes incrustées sur la moquette d'une copropriété située près de la Gare Clichy-Levallois ?",
          answer: "<p>Les taches anciennes nécessitent un prétraitement spécifique avant l'injection-extraction. Nous analysons la nature de la salissure pour choisir le détachant adapté. Les résultats dépendent de l'ancienneté et du type de fibre, mais une amélioration visible est généralement obtenue.</p>",
        },
        {
          question: "Quelle méthode recommandez-vous pour les moquettes de bureaux dans le quartier Trézel : vapeur ou injection-extraction ?",
          answer: "<p>L'injection-extraction reste la méthode privilégiée pour les dalles textiles de bureaux. Elle extrait les salissures en profondeur sans surchauffer les fibres synthétiques. La vapeur convient davantage aux surfaces dures ou aux désinfections ponctuelles.</p>",
        },
        {
          question: "Combien de temps faut-il attendre avant de remarcher sur les moquettes d'un hall de bureaux après votre intervention ?",
          answer: "<p>Le temps de séchage varie selon l'épaisseur du revêtement et la ventilation du local. En général, comptez entre 4 et 8 heures pour une remise en service. Nous recommandons une intervention en fin de journée pour permettre un séchage nocturne complet.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains avec autolaveuse et traitement dégraissant, gestion stricte des eaux de lavage et balisage sécurisé pour une remise en circulation rapide des places.",
      whyUsBullets: [
        "Connaissance des parkings profonds de Levallois, souvent sur trois ou quatre niveaux avec accès contraints.",
        "Autolaveuse professionnelle et dégraissants adaptés aux sols résine ou béton peint des copropriétés récentes.",
        "Coordination avec gardiens et syndics pour organiser la rotation des véhicules sans bloquer l'accès aux résidents.",
      ],
      uniqueIntro: "<p>Comment maintenir un parking souterrain propre et sécurisé quand la rotation des véhicules ne s'arrête jamais ? À Levallois-Perret, les sous-sols des copropriétés du secteur Front de Seine ou des résidences proches de l'Île de la Jatte accumulent poussières, traces de pneus et coulures d'huile sur plusieurs niveaux. Sans intervention régulière, le sol devient glissant et l'image de la résidence se dégrade.</p>\n<p class=\"mt-4\">Un lavage mécanisé redonne aux dalles béton peintes ou aux revêtements résine leur aspect d'origine. Les rampes d'accès retrouvent leur adhérence, les rigoles d'évacuation fonctionnent à nouveau correctement. Pour les syndics et gestionnaires, c'est aussi un argument concret face aux copropriétaires qui constatent l'encrassement des parties communes souterraines.</p>\n<p class=\"mt-4\">Notre intervention s'organise en coordination avec le gardien ou le gestionnaire : zonage des places, rotation progressive des véhicules, balisage visible. Les eaux de lavage sont récupérées et évacuées dans le respect des règles d'assainissement, sans rejet vers la voirie.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et rampes sécurisées</h3>\n<p>L'objectif est de restituer un revêtement propre, dégraissé, avec une adhérence retrouvée sur les zones de circulation et les rampes. Les traces d'huile anciennes disparaissent, les rigoles sont dégagées.</p>\n\n<h3>Autolaveuse et traitement ciblé</h3>\n<p>Après un balayage préalable pour retirer graviers et débris, l'autolaveuse effectue des passes mécanisées sur l'ensemble de la surface. Un dégraissant adapté au support (béton peint, résine époxy) est appliqué sur les zones critiques : places de stationnement, pieds de murs, angles morts.</p>\n<p class=\"mt-4\">Les rampes inclinées reçoivent un traitement spécifique pour conserver leur caractère antidérapant.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont aspirées au fur et à mesure, sans écoulement vers les évacuations pluviales. Les regards sont vérifiés pour garantir leur bon fonctionnement.</p>\n<p class=\"mt-4\">Si demandé, un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention. Un compte-rendu avec photos avant/après est transmis au syndic.</p>",
      specificChallenges: [
        "Parkings sur 3 ou 4 niveaux avec ventilation limitée et temps de séchage à anticiper.",
        "Sols en résine époxy sensibles aux produits agressifs : dosage et rinçage maîtrisés.",
        "Rotation véhicules élevée dans les résidences proches du Pont de Levallois : balisage indispensable.",
        "Rampes inclinées à traiter sans altérer l'adhérence du revêtement antidérapant.",
        "Évacuation des eaux de lavage conforme aux règles d'assainissement locales.",
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous le lavage d'un parking avec forte rotation de véhicules, comme ceux proches du centre commercial So Ouest ?",
          answer: "<p>Nous intervenons par zones successives, en libérant progressivement les places après séchage. Le balisage est posé en amont et la coordination avec le gardien permet d'informer les résidents. Les créneaux horaires sont choisis pour limiter les conflits d'usage.</p>",
        },
        {
          question: "Vos équipes peuvent-elles éliminer des traces d'huile anciennes sur un sol en résine dans un sous-sol de copropriété ?",
          answer: "<p>Oui, nous appliquons un dégraissant adapté aux revêtements époxy, suivi d'un passage à l'autolaveuse. Les taches incrustées nécessitent parfois un temps de contact plus long. Le résultat dépend de l'ancienneté et de la profondeur de pénétration dans le support.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des eaux de lavage dans un parking à trois niveaux de profondeur ?",
          answer: "<p>L'autolaveuse aspire les eaux au fur et à mesure du passage. Aucun rejet n'est effectué vers les évacuations pluviales. Les regards sont contrôlés avant et après intervention pour vérifier leur bon fonctionnement et éviter tout engorgement.</p>",
        },
        {
          question: "Quelles plages horaires recommandez-vous pour intervenir dans un parking situé à proximité des commerces du centre de Levallois ?",
          answer: "<p>Les créneaux en soirée ou le dimanche matin permettent de limiter la gêne pour les résidents et les usagers des commerces. Nous adaptons le planning selon les contraintes du syndic et les horaires de présence du gardien ou du gestionnaire.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon ou loggia, avec traitement des dépôts, nettoyage du garde-corps et gestion maîtrisée des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions en bord de Seine et des contraintes de pollution sur les balcons du Front de Seine.",
        "Pression ajustée selon le support, produits adaptés au grès cérame comme aux dalles béton ou au bois composite.",
        "Gestion stricte des eaux de rinçage pour respecter le voisinage et le règlement de voirie local.",
      ],
      uniqueIntro: "<p>Les traces noires et les dépôts grisâtres sont visibles sur de nombreux balcons le long du Quai Charles-Pasqua et dans le secteur Front de Seine. La circulation dense sur les axes en bord de fleuve génère un voile de particules qui se dépose sur les sols, les garde-corps et les vitrages. En quelques mois, le carrelage perd son éclat et les joints verdissent dans les zones moins exposées au soleil.</p>\n<p class=\"mt-4\">Retrouver un espace extérieur agréable change le quotidien. Un balcon propre invite à s'y installer, à y prendre un café ou à y faire sécher du linge sans craindre les salissures. Sur les immeubles récents du Front de Seine comme sur les résidences proches du Palais des Sports Marcel-Cerdan, les supports varient : grès cérame, dalles béton, garde-corps en verre ou acier. Chaque matériau réagit différemment et nécessite une approche adaptée.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter l'ensemble du balcon sans risque pour les menuiseries ni désagrément pour les voisins du dessous. Diagnostic du support, protection des plantes, contrôle du rinçage : chaque étape est anticipée.</p>",
      uniqueDeepDive: "<h3>Dépôts incrustés et mousses vertes</h3>\n<p>Les feuilles mortes, la terre et les résidus organiques sont d'abord retirés manuellement. Ensuite, un produit adapté au support est appliqué pour décoller les mousses et les traces tenaces sans attaquer les joints.</p>\n<p class=\"mt-4\">Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries et seuils de porte sont protégés avant tout traitement humide.</p>\n\n<h3>Encrassement du sol et du garde-corps</h3>\n<p>Un brossage mécanique ou manuel déloge les salissures du carrelage et des dalles. Le garde-corps, qu'il soit en verre ou en acier, est nettoyé avec un produit non abrasif.</p>\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée pour éviter d'endommager les joints fragiles. L'eau est récupérée ou dirigée vers l'évacuation du balcon, sans écoulement sur la voie publique.</p>\n\n<h3>Traces résiduelles et finitions</h3>\n<p>Les vitrages et murs mitoyens accessibles sont essuyés. Le sol est séché pour permettre une réutilisation rapide.</p>\n<p class=\"mt-4\">Des conseils d'entretien sont donnés selon l'exposition et le type de support.</p>",
      specificChallenges: [
        "Pollution routière sur les balcons exposés au Quai Charles-Pasqua : dépôts noirs fréquents.",
        "Joints de carrelage sensibles sur les loggias récentes du Front de Seine.",
        "Garde-corps en verre ou acier nécessitant un nettoyage sans traces ni rayures.",
        "Interdiction d'écoulement d'eau sur la voie publique : récupération et évacuation maîtrisées.",
        "Proximité du Square Edith-de-Villepin : mousses et dépôts verts sur balcons ombragés.",
      ],
      faqAdditions: [
        {
          question: "Quel produit utilisez-vous pour nettoyer le carrelage grès cérame et préserver les joints d'un balcon dans le secteur Front de Seine ?",
          answer: "<p>Nous appliquons un détergent neutre qui décolle les salissures sans attaquer les joints. Le produit est choisi en fonction de l'état du support et de la nature des dépôts. Un rinçage à pression modérée évite toute infiltration dans les interstices fragilisés par le temps.</p>",
        },
        {
          question: "Comment traitez-vous les dépôts verts et mousses persistants sur un balcon ombragé en bord de Seine ?",
          answer: "<p>Un traitement anti-mousse est appliqué après le retrait manuel des résidus. Le produit agit sur les micro-organismes responsables du verdissement. Un brossage ciblé complète l'action avant rinçage. Ce protocole limite la réapparition des mousses pendant plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "Faut-il adapter la pression et les produits selon le support : grès cérame ou dalles béton ?",
          answer: "<p>Oui. Le grès cérame supporte une pression plus élevée que les dalles béton poreuses. Nous ajustons le réglage de la lance et sélectionnons un produit compatible avec chaque matériau. Cette adaptation évite les dégradations et garantit un résultat homogène sur l'ensemble du balcon.</p>",
        },
        {
          question: "Comment nettoyez-vous un balcon sans faire couler l'eau sur la voie publique, conformément au règlement local ?",
          answer: "<p>L'eau de rinçage est dirigée vers l'évacuation du balcon ou récupérée à l'aide de raclettes et de serpillières. Nous vérifions l'étanchéité du dispositif avant de commencer. Cette méthode respecte le règlement de voirie de Levallois-Perret et évite tout désagrément pour les passants ou les voisins.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et solutions anti-retour pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des zones à risque de Levallois : proximité des parcs, corniches anciennes du quartier Greffulhe.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfectants virucides homologués.",
        "Évacuation sécurisée des déchets et protection systématique du voisinage pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons des immeubles proches du Square Edith-de-Villepin ou du Parc de la Planchette accumulent des dépôts de fientes tenaces. L'odeur s'installe, le linge étendu s'imprègne, et l'espace devient inutilisable. À Levallois-Perret, la densité de pigeons liée aux espaces verts environnants aggrave ce phénomène sur les étages exposés.</p>\n<p class=\"mt-4\">Les immeubles anciens du quartier Greffulhe présentent des corniches et garde-corps particulièrement vulnérables. Les fientes acides attaquent les joints, ternissent les surfaces et créent des zones de prolifération bactérienne. Sans traitement adapté, les dégâts s'étendent aux revêtements de sol et aux menuiseries.</p>\n<p class=\"mt-4\">Une intervention structurée permet de restaurer l'usage du balcon en toute sécurité. Le protocole inclut confinement de la zone, retrait des déjections, désinfection complète et rinçage contrôlé pour éviter tout écoulement vers les voisins ou la voie publique.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>Le résultat obtenu est un espace extérieur débarrassé de toute trace de fientes, désinfecté en profondeur et prêt à être réutilisé. Les supports retrouvent leur aspect d'origine, l'odeur disparaît et le risque sanitaire est éliminé.</p>\n\n<h3>Retrait sécurisé et traitement des surfaces</h3>\n<p>L'intervention débute par un bâchage de protection et une humidification des dépôts pour neutraliser les poussières contaminées. Le technicien, équipé de combinaison jetable, masque FFP2 et lunettes, procède au ramassage dans des sacs étanches. Sol, garde-corps et vitrages sont ensuite traités avec un produit virucide homologué, temps de contact respecté.</p>\n\n<h3>Rinçage et prévention du retour</h3>\n<p>Un rinçage final élimine les résidus de produit. Selon la configuration, des pics anti-pigeons ou un gel répulsif peuvent être posés sur les rebords exposés. Les déchets conditionnés sont évacués. Un délai d'aération de quelques heures est recommandé avant réutilisation.</p>",
      specificChallenges: [
        "Proximité des espaces verts (Parc de la Planchette, Île de la Jatte) favorisant la présence de pigeons.",
        "Corniches des immeubles anciens du quartier Greffulhe particulièrement exposées aux dépôts.",
        "Règlement de voirie interdisant l'écoulement d'eau sur la voie publique lors du rinçage.",
        "Stationnement très contraint nécessitant une organisation logistique précise pour le matériel.",
        "Balcons filants haussmanniens avec garde-corps ouvragés demandant un nettoyage minutieux.",
      ],
      faqAdditions: [
        {
          question: "Les fientes accumulées sur les corniches près du Square Edith-de-Villepin présentent-elles un risque sanitaire justifiant une intervention rapide ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui se dispersent sous forme de poussières sèches. Sur les corniches exposées de ce secteur, l'accumulation prolongée augmente le risque d'inhalation. Une intervention rapide limite la propagation et protège les occupants.</p>",
        },
        {
          question: "Quel protocole et quels équipements de protection utilisez-vous pour la décontamination après fientes à Levallois-Perret ?",
          answer: "<p>Le technicien porte une combinaison jetable, un masque FFP2, des lunettes et des gants. La zone est confinée par bâchage avant humidification des dépôts. Cette méthode évite la dispersion de particules contaminées et garantit une intervention sécurisée pour l'occupant comme pour le voisinage.</p>",
        },
        {
          question: "Quels produits garantissent une désinfection efficace sans dégrader les corniches anciennes des immeubles de Greffulhe ?",
          answer: "<p>Nous utilisons des désinfectants virucides et bactéricides homologués, formulés pour être efficaces sans agresser les supports fragiles. Le temps de contact est respecté avant rinçage. Sur les matériaux anciens, la pression d'eau est ajustée pour préserver joints et revêtements.</p>",
        },
        {
          question: "Comment procédez-vous à l'évacuation des déchets contaminés après un nettoyage de balcon proche du Parc de la Planchette ?",
          answer: "<p>Les fientes et résidus sont collectés dans des sacs étanches fermés hermétiquement. Ces déchets sont ensuite évacués par nos soins à la fin de l'intervention. Aucun déchet contaminé ne reste sur place, et le balcon est prêt à être réutilisé après le délai d'aération.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un textile propre et agréable au quotidien.",
      whyUsBullets: [
        "Connaissance des intérieurs levalloisiens, du velours ancien aux tissus contemporains des résidences récentes.",
        "Détachage ciblé et extraction textile avec réglages adaptés à chaque matière pour préserver les fibres.",
        "Organisation anticipée du stationnement et intervention rapide pour une remise en service le jour même.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le tissu du canapé : ces marques du quotidien s'accumulent dans les intérieurs levalloisiens. Dans le <strong>quartier Greffulhe</strong> ou le long de la <strong>rue du Président Wilson</strong>, les ménages possèdent souvent des textiles de qualité qui méritent un entretien adapté à leur valeur.</p>\n<p class=\"mt-4\">Un canapé encrassé perd son confort et son aspect d'origine. Les fibres retiennent poussières, acariens et résidus organiques, surtout sur les <strong>velours et tissus haut de gamme</strong> fréquents dans les appartements anciens de la commune. Un détachage ciblé redonne de l'éclat aux couleurs et supprime les odeurs tenaces laissées par les animaux ou les accidents domestiques.</p>\n<p class=\"mt-4\">Nos interventions s'organisent autour d'un diagnostic textile préalable. Chaque support — coton, laine, synthétique ou cuir — reçoit un traitement spécifique. Le <strong>stationnement du véhicule technique</strong> est anticipé pour garantir un accès rapide au matériel d'injection-extraction, même dans les rues les plus denses du centre-ville.</p>",
      uniqueDeepDive: "<h3>Diagnostic et pré-traitement</h3>\n<p>Avant toute action, nous identifions la nature du textile et relevons les taches présentes : café, vin, urine, graisse ou encre. Un test discret sur une zone cachée permet de valider la réaction du tissu aux produits. Les salissures localisées reçoivent un détachant enzymatique adapté pour préparer l'extraction.</p>\n\n<h3>Nettoyage par injection-extraction</h3>\n<p>Le traitement principal utilise une machine qui injecte une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de salissures. La pression et la température sont ajustées selon la fragilité du support. Les velours et laines bénéficient d'un réglage doux pour préserver leur texture.</p>\n\n<h3>Extraction finale et séchage</h3>\n<p>L'aspiration maximale réduit le temps de séchage. Selon l'épaisseur du textile et la ventilation de la pièce, comptez entre 4 et 8 heures avant utilisation. Nous transmettons des conseils d'aération et une fréquence d'entretien adaptée à l'usage du mobilier.</p>",
      specificChallenges: [
        "Velours et tissus nobles fréquents dans les appartements du quartier Greffulhe, sensibles aux produits agressifs.",
        "Taches d'urine et odeurs animales récurrentes dans les foyers avec enfants ou animaux de compagnie.",
        "Stationnement très contraint : le véhicule technique doit souvent utiliser un parking public à proximité.",
        "Tapis d'Orient et fibres naturelles nécessitant un diagnostic préalable pour éviter toute décoloration.",
        "Séchage à anticiper selon la ventilation de l'appartement et la saison d'intervention.",
      ],
      faqAdditions: [
        {
          question: "Quelles précautions prenez-vous pour nettoyer un canapé en velours dans un appartement du quartier Greffulhe ?",
          answer: "<p>Le velours exige un réglage de pression réduit et une température contrôlée. Nous effectuons un test sur une zone discrète avant de traiter l'ensemble du tissu. Cette approche préserve la texture et les reflets caractéristiques de ce type de revêtement fréquent dans les intérieurs anciens de Levallois.</p>",
        },
        {
          question: "Comment éliminez-vous les odeurs d'urine laissées par un animal sur un tapis de salon ?",
          answer: "<p>Un pré-traitement enzymatique cible les composés organiques responsables de l'odeur. L'injection-extraction retire ensuite les résidus en profondeur. Sur les fibres naturelles courantes dans les résidences familiales de la commune, nous adaptons la concentration du produit pour éviter toute altération des couleurs.</p>",
        },
        {
          question: "Faut-il prévoir une place de stationnement pour l'intervention dans le centre de Levallois ?",
          answer: "<p>Dans les rues les plus denses, nous anticipons l'accès au véhicule technique en identifiant un parking public à proximité. Si vous disposez d'un emplacement privé ou d'une autorisation de stationnement, merci de nous le signaler lors de la prise de rendez-vous pour fluidifier l'intervention.</p>",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser le canapé après un traitement anti-acariens ?",
          answer: "<p>L'extraction maximale réduit l'humidité résiduelle. Selon l'épaisseur du textile et l'aération de la pièce, le séchage complet prend entre 4 et 8 heures. Nous vous indiquons les gestes simples — fenêtre entrouverte, ventilateur — pour accélérer la remise en service du mobilier.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Traitement complet de votre terrasse avec adaptation au support — bois, pierre ou composite — et application d'un produit anti-mousse pour retrouver une surface saine et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses levaloisiennes exposées aux conditions humides du bord de Seine et des rooftops en ZAC.",
        "Maîtrise des traitements différenciés selon support — bois, pierre, composite — avec produits anti-mousse adaptés.",
        "Organisation incluant protection du mobilier, gestion des écoulements et coordination avec gardiens si nécessaire.",
      ],
      uniqueIntro: "<p>Sur les <strong>terrasses et rooftops de l'Île de la Jatte</strong> comme dans la ZAC Front de Seine, les surfaces extérieures subissent une exposition variable selon leur orientation. Les zones ombragées accumulent humidité et dépôts organiques, tandis que les espaces dégagés captent poussières et pollens. En quelques saisons, le revêtement perd son aspect d'origine et devient glissant par endroits.</p>\n<p class=\"mt-4\">Les <strong>supports en bois composite, pierre naturelle ou dalles sur plots</strong> réagissent différemment aux intempéries. Le bois noircit, la pierre se couvre de lichens, les joints entre dalles verdissent. Sans intervention adaptée, ces altérations s'incrustent et compliquent tout entretien ultérieur. Un rafraîchissement régulier préserve à la fois l'esthétique et la sécurité d'usage.</p>\n<p class=\"mt-4\">Les <strong>zones ombragées en bord de Seine</strong> favorisent particulièrement la prolifération de mousses. Nous adaptons notre protocole à la saisonnalité et aux caractéristiques de chaque terrasse pour un résultat durable sans agression du matériau.</p>",
      uniqueDeepDive: "<h3>Surface principale</h3>\n<p>Nous commençons par le dégagement du mobilier et la protection des jardinières. Un balayage élimine feuilles, terre et débris accumulés. Le revêtement reçoit ensuite un traitement adapté à sa nature : brossage mécanique sur pierre, nettoyage doux sur bois composite.</p>\n<p class=\"mt-4\">L'application du produit s'effectue par zones pour garantir un temps de contact suffisant avant rinçage.</p>\n\n<h3>Périphérie et éléments verticaux</h3>\n<p>Les garde-corps, murets et escaliers extérieurs sont traités séparément. Ces surfaces verticales retiennent moins l'humidité mais accumulent poussières et traces de ruissellement.</p>\n<p class=\"mt-4\">Nous vérifions l'état des joints et margelles pour adapter la pression de rinçage.</p>\n\n<h3>Finalisation et protection</h3>\n<p>L'évacuation des eaux s'effectue vers les points d'écoulement existants. Sur les terrasses en hauteur, nous contrôlons l'absence de coulures vers les niveaux inférieurs.</p>\n<p class=\"mt-4\">Un traitement anti-mousse préventif peut être appliqué selon l'exposition et la demande, avec conseils d'entretien saisonnier.</p>",
      specificChallenges: [
        "Mousses persistantes sur les terrasses ombragées proches de la Seine, nécessitant un traitement ciblé.",
        "Bois composite noirci sur les rooftops récents de la ZAC Collange, sensible aux produits agressifs.",
        "Dalles sur plots avec joints verdis et accumulation de débris dans les interstices.",
        "Accès restreint pour le matériel dans certaines résidences avec ascenseur limité ou escalier étroit.",
        "Gestion des écoulements sur terrasses en étage pour éviter les coulures vers les balcons inférieurs.",
      ],
      faqAdditions: [
        {
          question: "Quel traitement recommandez-vous pour une terrasse bois composite ayant noirci sur l'Île de la Jatte ?",
          answer: "<p>Nous utilisons un nettoyant spécifique bois composite, sans chlore ni javel, appliqué au pulvérisateur puis brossé mécaniquement. Le rinçage s'effectue à pression modérée pour ne pas altérer les fibres. Ce protocole redonne l'aspect d'origine sans fragiliser le matériau face aux intempéries.</p>",
        },
        {
          question: "Comment enlever les mousses et lichens d'une terrasse ombragée sans endommager les dalles ?",
          answer: "<p>Le traitement commence par un brossage manuel pour décoller les dépôts épais. Un produit anti-mousse biodégradable agit ensuite pendant plusieurs minutes avant rinçage contrôlé. Sur les terrasses en bord de Seine exposées à l'humidité, nous recommandons une application préventive pour espacer les interventions.</p>",
        },
        {
          question: "Quel produit anti-mousse utilise-t-on pour une terrasse en pierre naturelle afin d'éviter réapparition rapide ?",
          answer: "<p>Nous appliquons un traitement filmogène qui pénètre la pierre poreuse et limite la repousse pendant plusieurs mois. Ce produit respecte les caractéristiques du matériau et n'altère pas sa teinte. L'efficacité dépend de l'exposition : les zones très ombragées nécessitent un renouvellement plus fréquent.</p>",
        },
        {
          question: "Combien de temps faut-il attendre pour utiliser une terrasse nettoyée sur un rooftop exposé à la Seine ?",
          answer: "<p>Le séchage complet varie selon la météo et l'exposition au vent. En conditions favorables, comptez quatre à six heures avant de remettre le mobilier. Si un traitement anti-mousse a été appliqué, nous conseillons d'attendre vingt-quatre heures avant une utilisation intensive de l'espace.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement après travaux ou avant état des lieux, avec traitement adapté des parquets anciens et coordination possible avec agences ou artisans.",
      whyUsBullets: [
        "Connaissance des typologies de biens à Levallois-Perret, des appartements anciens du quartier Greffulhe aux résidences récentes du Front de Seine.",
        "Maîtrise des techniques adaptées aux parquets, carrelages et surfaces vitrées sans risque de détérioration.",
        "Réactivité pour caler l'intervention entre fin de chantier et remise des clés, en lien direct avec agences ou artisans.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable quand les délais de remise des clés se comptent en heures et que les traces de chantier persistent sur chaque surface ? Dans les secteurs de fin de bail et rénovations autour de la <strong>rue de Villiers</strong> ou du quartier <strong>So Ouest</strong>, les demandes d'état des lieux s'enchaînent à un rythme soutenu. Poussières de plâtre, résidus de colle, projections de peinture : chaque intervention réclame une organisation sans faille pour respecter les échéances.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite la transition entre locataires et évite les litiges lors de l'inventaire. Les <strong>parquets chêne anciens</strong> et <strong>carrelages grand format</strong> fréquents à Levallois-Perret nécessitent des produits adaptés pour ne pas altérer les finitions. Le résultat : un bien prêt à être visité ou habité, sans retouche de dernière minute.</p>\n<p class=\"mt-4\">Les agences immobilières locales sollicitent régulièrement ce type de prestation pour leurs rotations de biens. Une coordination efficace avec les artisans en fin de chantier permet de libérer le logement dans les temps convenus.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>Avant toute action, un état des lieux initial identifie les zones critiques : traces de peinture sur les plinthes, résidus d'enduit au sol, poussière accumulée dans les placards. Les surfaces fragiles sont repérées pour adapter les produits. Si des gravats ou déchets de chantier subsistent, leur évacuation précède le nettoyage proprement dit.</p>\n\n<h3>Nettoyage complet des espaces</h3>\n<p>Le dépoussiérage débute par les hauteurs : plafonds, luminaires, dessus de meubles. Les sols reçoivent un traitement en deux temps, aspiration puis lavage selon leur nature. Les pièces d'eau font l'objet d'une attention particulière : sanitaires, faïences, joints et robinetterie. La cuisine est traitée intégralement, électroménager compris.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les détails font la différence lors d'un état des lieux : interrupteurs, poignées, intérieurs de placards, radiateurs. Un contrôle visuel valide la conformité avant remise des clés. Le logement est aéré pour éliminer toute odeur résiduelle de produits ou de travaux.</p>",
      specificChallenges: [
        "Délais serrés entre fin de travaux et état des lieux, fréquents sur les biens en rotation rapide.",
        "Parquets chêne anciens sensibles aux produits agressifs, nécessitant un traitement adapté.",
        "Stationnement très contraint en surface, anticipation obligatoire pour le matériel.",
        "Coordination avec plusieurs intervenants (artisans, agences) pour libérer le logement à temps.",
        "Résidus de chantier tenaces sur vitres et menuiseries après rénovation.",
      ],
      faqAdditions: [
        {
          question: "Proposez-vous un nettoyage spécifique pour enlever les traces de peinture et de colle après un chantier rue de Villiers ?",
          answer: "<p>Oui, nous utilisons des solvants doux et des raclettes adaptées pour retirer les projections sans abîmer les supports. Les parquets anciens fréquents dans ce secteur reçoivent un traitement particulier pour préserver leur finition. Le temps d'intervention dépend de l'ampleur des traces laissées par les artisans.</p>",
        },
        {
          question: "Que préconisez-vous pour un nettoyage complet après un dégât des eaux dans un appartement ancien ?",
          answer: "<p>Après séchage complet des surfaces, nous procédons à un nettoyage approfondi des sols et plinthes pour éliminer les dépôts minéraux. Les moisissures éventuelles sont traitées avec des produits adaptés. Un contrôle visuel permet de vérifier qu'aucune zone n'a été oubliée avant la remise en état définitive.</p>",
        },
        {
          question: "Comment coordonnez-vous l'intervention avec les artisans et l'agence pour un état des lieux près de So Ouest ?",
          answer: "<p>Nous calons notre passage une fois les travaux terminés, en lien direct avec le responsable de chantier ou l'agence. Un créneau est réservé en fonction de la date de remise des clés. Cette organisation évite les allers-retours et garantit un logement prêt dans les délais convenus.</p>",
        },
        {
          question: "Quel niveau de propreté garantissez-vous pour un nettoyage d'état des lieux avant remise des clés ?",
          answer: "<p>Le logement est livré dans un état permettant une entrée immédiate : sols propres, sanitaires désinfectés, vitres intérieures nettoyées, placards vidés et essuyés. Si un point ne convient pas lors du contrôle, une repasse ciblée est effectuée sans frais supplémentaires.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;