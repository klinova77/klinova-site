import type { City } from "~/types/geo";

const city: City = {
  name: "Colombes",
  slug: "colombes",
  postalCodes: ["92700"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Colombes pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Du quartier des Vallées aux abords du Stade Yves-du-Manoir, une équipe locale adaptée aux configurations variées de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Ville du Stade Yves-du-Manoir et de l'Hôpital Louis-Mourier, Colombes concentre des besoins d'entretien très différents selon les secteurs. Klinova s'organise pour répondre à cette diversité avec des équipes qui connaissent <strong>le terrain et ses contraintes d'accès</strong>.</p>\
<p class=\"mt-4\">Halls d'immeubles, parkings souterrains, balcons exposés aux retombées de l'A86 : chaque intervention suit un protocole adapté au support et à l'usage du lieu. Nous assurons un suivi régulier et des comptes rendus sur demande pour les gestionnaires.</p>\
<ul>\
  <li><strong>Coordination locale :</strong> Nos équipes interviennent depuis le secteur, avec une connaissance des accès et des contraintes de stationnement propres à chaque quartier.</li>\
  <li><strong>Adaptation au bâti :</strong> Du pavillon de la Petite Garenne aux résidences récentes de la ZAC de la Marine, les méthodes varient selon les matériaux et configurations.</li>\
  <li><strong>Reporting disponible :</strong> Pour les syndics et gestionnaires, un suivi des interventions peut être mis en place selon vos besoins de traçabilité.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Retombées de l'A86</strong> : suies noires sur balcons et garde-corps des immeubles exposés au nord.",
    "Parkings souterrains des résidences récentes avec <strong>ventilation encrassée</strong> par la pollution routière.",
    "Halls d'immeubles anciens du Centre avec <strong>escaliers étroits</strong> limitant le passage du matériel.",
    "Mousses et verdissement sur terrasses proches du <strong>Parc Pierre Lagravère</strong> (ombre et humidité).",
    "Stationnement contraint en <strong>zone bleue</strong> autour des gares et du centre-ville.",
    "Digicodes et badges généralisés nécessitant une <strong>coordination préalable</strong> avec gardiens ou syndics.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Les Vallées",
    "Petite Garenne",
    "Fossés-Jean",
    "Le Plateau",
    "Europe",
    "Agent Sarre",
    "Quartier du Stade",
    "La Marine",
  ],
  nearbyCities: [
        "courbevoie",
        "argenteuil",
        "gennevilliers",
        "asnieres-sur-seine",
        "neuilly-sur-seine",
        "levallois-perret",
        "nanterre",
        "puteaux",
        "houilles",
        "clichy"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Colombes",
    "Stade Yves-du-Manoir",
    "Hôpital Louis-Mourier",
    "Parc Pierre Lagravère",
    "Viaduc de l'A86",
    "Gare de Colombes",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Intervenez-vous rapidement sur Colombes en cas de besoin urgent ?",
      answer: "<p>Nous disposons d'équipes basées à proximité, ce qui permet une <strong>réactivité sous 24 à 48 heures</strong> selon la nature de la demande. Pour les situations nécessitant une prise en charge rapide (dégât, remise en état avant visite), nous ajustons notre planning en conséquence.</p>",
    },
    {
      question: "Comment se passe la prise de rendez-vous pour un devis sur place ?",
      answer: "<p>Nous proposons un passage gratuit pour évaluer les surfaces et contraintes d'accès. À Colombes, cela permet notamment de vérifier les conditions de <strong>stationnement</strong> et les modalités d'entrée dans l'immeuble (badge, gardien). Le devis détaillé suit sous 48 heures.</p>",
    },
    {
      question: "Travaillez-vous avec les syndics et gestionnaires de copropriétés ?",
      answer: "<p>Oui, nous intervenons régulièrement pour des syndics sur Colombes, que ce soit pour des <strong>prestations ponctuelles</strong> ou un entretien récurrent. Nous adaptons les horaires aux contraintes des résidents et fournissons les justificatifs d'intervention demandés.</p>",
    },
    {
      question: "Quels types de surfaces ou d'espaces pouvez-vous traiter ?",
      answer: "<p>Nous couvrons l'entretien des <strong>parties communes</strong> (halls, escaliers, locaux), des parkings souterrains, des balcons et terrasses, ainsi que des revêtements textiles (moquettes, canapés). Chaque prestation mobilise un matériel spécifique adapté au support concerné.</p>",
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
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou halls d'immeubles, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des configurations tertiaires colombiennes, des halls d'immeubles anciens aux plateaux de bureaux récents.",
        "Matériel d'injection-extraction professionnel, réglages adaptés aux dalles textiles comme aux moquettes épaisses.",
        "Interventions planifiées en dehors des heures d'affluence pour limiter la gêne des occupants et usagers.",
      ],
      uniqueIntro: "<p>Les traces grises le long des circulations, les auréoles de café près des postes de travail, les zones ternies aux entrées : ces marques s'accumulent sur les <strong>moquettes des cabinets médicaux et bureaux autour de l'Hôpital Louis-Mourier</strong>. Le passage quotidien des patients, visiteurs et salariés imprime dans les fibres des salissures que l'aspiration seule ne décroche plus.</p>\n<p class=\"mt-4\">Un revêtement textile encrassé modifie l'image d'un espace professionnel. Dans les <strong>halls équipés de dalles textiles</strong>, fréquents dans les établissements de santé et immeubles tertiaires de Colombes, le grisaillement progressif donne une impression de vétusté. Retrouver une surface propre améliore le confort visuel et prolonge la durée de vie du support.</p>\n<p class=\"mt-4\">L'intervention repose sur un diagnostic préalable : identification du type de moquette, repérage des taches spécifiques, évaluation des <strong>contraintes d'accès liées aux flux tertiaires de la zone Kléber</strong>. Ce cadrage permet d'adapter le matériel et d'organiser le chantier pour une remise en service dans les meilleurs délais.</p>",
      uniqueDeepDive: "<h3>Fibres débarrassées des résidus incrustés</h3>\
<p>L'injection-extraction projette une solution nettoyante dans l'épaisseur du textile, puis aspire immédiatement l'eau chargée de salissures. Les zones de fort passage reçoivent plusieurs passes pour <strong>déloger les particules compactées</strong>.</p>\
<p class=\"mt-4\">Les taches localisées — tanin, graisse, encre — font l'objet d'un détachage ciblé avant le traitement général.</p>\
\
<h3>Méthode adaptée au support et à l'usage</h3>\
<p>Le diagnostic initial identifie la structure de la moquette : bouclée, velours, dalle collée ou tendue. Cette analyse oriente le réglage de pression et le choix du produit.</p>\
\
<h3>Séchage contrôlé et remise en service</h3>\
<p>L'extraction maximale limite le taux d'humidité résiduelle. Selon l'épaisseur du revêtement et la ventilation du local, le séchage complet intervient généralement sous 4 à 8 heures.</p>\
<p class=\"mt-4\">Des consignes de non-piétinement sont transmises pour <strong>préserver le résultat</strong>.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux près de l'A86 : <strong>poussières fines incrustées</strong> par la ventilation.",
        "Halls d'immeubles anciens du centre avec <strong>escaliers étroits</strong> compliquant l'acheminement du matériel.",
        "Cabinets médicaux exigeant une remise en service rapide entre deux journées de consultation.",
        "Moquettes bouclées des copropriétés du Plateau présentant un grisaillement prononcé aux zones de passage.",
        "Accès sécurisés par badge dans les immeubles tertiaires nécessitant une coordination préalable.",
      ],
      faqAdditions: [
        {
          question:
            "Les cabinets près de l'Hôpital Louis-Mourier ont des halls étroits. Comment vous organisez-vous pour intervenir efficacement ?",
          answer: "<p>Nous utilisons du matériel compact adapté aux passages resserrés. Le diagnostic préalable identifie <strong>les contraintes d'accès</strong> pour prévoir le bon équipement. Les flexibles et buses permettent d'atteindre les angles sans déplacer l'ensemble de l'installation. L'intervention est planifiée hors heures de consultation pour éviter toute gêne aux patients.</p>",
        },
        {
          question:
            "Après un traitement dans la zone Kléber, combien de temps avant de pouvoir réutiliser les bureaux ?",
          answer: "<p>L'extraction intensive réduit fortement l'humidité résiduelle. Dans un local correctement ventilé, le séchage complet prend généralement 4 à 6 heures. Pour les plateaux de bureaux, nous recommandons une intervention en fin de journée : les équipes retrouvent une moquette sèche le lendemain matin, sans interruption d'activité.</p>",
        },
        {
          question:
            "Comment protégez-vous plinthes et angles lors d'un traitement intensif sur moquette dans un cabinet médical ?",
          answer: "<p>Avant toute projection, nous posons <strong>des protections le long des plinthes</strong> et bas de murs. Le mobilier fixe est bâché si nécessaire. La buse d'injection est orientée pour éviter les éclaboussures sur les surfaces adjacentes. Cette préparation préserve les finitions et évite les traces d'humidité sur les revêtements muraux.</p>",
        },
        {
          question:
            "Quelle méthode privilégiez-vous pour les moquettes épaisses des halls du centre-ville : injection-extraction ou autre technique ?",
          answer: "<p>L'injection-extraction reste la méthode de référence pour les moquettes épaisses. Elle pénètre en profondeur et extrait les salissures logées à la base des fibres. L'encapsulation peut compléter le traitement pour un entretien régulier, mais ne remplace pas un nettoyage en profondeur sur des revêtements fortement encrassés.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec autolaveuse et dégraissage ciblé des zones de circulation, pour un sol assaini et sécurisé.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès spécifiques aux parkings colombiens, notamment ceux situés sous les axes routiers majeurs.",
        "Autolaveuses professionnelles et protocole de gestion des eaux conforme aux exigences des copropriétés.",
        "Planification en coordination avec le syndic : rotation véhicules par zone, balisage sécurisé, intervention en horaires adaptés.",
      ],
      uniqueIntro: "<p>Comment maintenir des conditions de propreté acceptables dans un parking quand le <strong>trafic quotidien</strong> dépose continuellement poussières, huiles et résidus ? Dans les sous-sols bordant le viaduc de l'A86 au nord de Colombes, les véhicules ramènent suies et particules fines qui s'accumulent sur les sols et les rampes d'accès, créant un encrassement persistant difficile à éliminer avec un simple balayage.</p>\n<p class=\"mt-4\">Les revêtements varient selon l'ancienneté des résidences : <strong>béton brut</strong> dans les parkings des années 70-80, résine époxy dans les programmes récents. Chaque support réagit différemment aux salissures grasses et nécessite une approche adaptée. Un sol négligé devient glissant, ternit l'image de la copropriété et complique la gestion locative pour les syndics.</p>\n<p class=\"mt-4\">Face au trafic élevé généré par les axes A86 et D986, une intervention structurée s'impose : diagnostic du revêtement, coordination avec les résidents pour la rotation des véhicules, et gestion rigoureuse des eaux de lavage pour respecter les évacuations existantes.</p>",
      uniqueDeepDive: "<h3>Préparation et sécurisation</h3>\n<p>Avant toute intervention, nous réalisons un diagnostic du revêtement et de l'état des évacuations. Le balisage est installé pour sécuriser les zones de travail.</p>\n<p class=\"mt-4\">La coordination avec le syndic permet d'organiser la rotation des véhicules par secteur, limitant la gêne pour les résidents tout en garantissant l'accès à chaque zone.</p>\n\n<h3>Traitement mécanisé</h3>\n<p>L'autolaveuse effectue plusieurs passes sur les allées de circulation. Un dégraissant adapté au support traite les taches d'huile incrustées.</p>\n<p class=\"mt-4\">Les zones critiques reçoivent une attention particulière : rampes d'accès pour préserver l'adhérence, angles morts, pieds de murs et rigoles où s'accumulent les dépôts.</p>\n\n<h3>Finalisation et contrôle</h3>\n<p>La gestion des eaux de lavage respecte strictement les évacuations existantes, sans rejet vers l'extérieur. Les regards sont vérifiés pour éviter tout engorgement.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé. Nous transmettons nos recommandations de fréquence selon le niveau de trafic constaté.</p>",
      specificChallenges: [
        "Suies et particules fines infiltrées depuis l'A86 dans les ventilations des parkings souterrains.",
        "Revêtements mixtes (béton brut ancien, résine récente) nécessitant des produits et pressions différenciés.",
        "Rotation véhicules à organiser avec le syndic pour libérer chaque secteur sans bloquer les résidents.",
        "Rampes d'accès à traiter avec précaution pour conserver leurs propriétés antidérapantes.",
        "Gestion stricte des eaux de lavage dans les sous-sols où les évacuations sont parfois sous-dimensionnées.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les parkings situés sous le viaduc de l'A86, comment traitez-vous les taches d'huile anciennes et les dépôts de suies ?",
          answer: "<p>Les taches d'huile incrustées reçoivent un dégraissant professionnel avant le passage de l'autolaveuse. Pour les suies liées à la proximité de l'A86, nous adaptons la concentration du produit et multiplions les passes sur les zones les plus exposées, notamment près des entrées de ventilation.</p>",
        },
        {
          question:
            "Quelle gestion des eaux de lavage préconisez-vous pour un parking souterrain proche du viaduc de l'A86 ?",
          answer: "<p>Nous vérifions l'état des regards et rigoles avant intervention. Les eaux chargées sont dirigées vers les évacuations prévues, jamais rejetées à l'extérieur. Si le réseau semble fragile ou sous-dimensionné, nous adaptons le débit et procédons par zones réduites pour éviter tout engorgement.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous l'entretien d'un parking à fort trafic comme ceux du boulevard Charles de Gaulle ?",
          answer: "<p>Pour un parking exposé à un trafic dense, nous conseillons un lavage complet tous les deux à trois mois. Entre deux interventions, un balayage mensuel limite l'accumulation de poussières et préserve l'efficacité du traitement mécanisé suivant.</p>",
        },
        {
          question:
            "Quelles différences techniques entre parking souterrain et aérien pour une zone d'activités comme Kléber à Colombes ?",
          answer: "<p>En souterrain, l'humidité et le confinement favorisent les dépôts gras persistants : l'autolaveuse et le dégraissage sont systématiques. En aérien, les intempéries lessivent partiellement les sols mais créent des traces minérales. Le protocole s'adapte au support et à l'exposition réelle du site.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Colombes : traitement des dépôts, nettoyage des garde-corps et gestion maîtrisée des eaux pour un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des balcons exposés à la pollution de l'A86 et des contraintes du centre-ville colombien.",
        "Pression ajustée selon le support : carrelage grès-cérame, béton peint ou joints anciens fragilisés.",
        "Protection systématique du voisinage avec bâchage et gestion des eaux de rinçage sans coulures.",
      ],
      uniqueIntro: "<p>Dans le secteur de la <strong>rue Saint-Denis</strong>, les balcons filants des immeubles anciens accumulent rapidement poussières et dépôts noirâtres. L'exposition aux flux piétons et à l'activité commerciale du centre-ville accélère l'encrassement des sols et garde-corps. Les résidents constatent souvent un voile gris persistant, même après un simple coup de balai.</p>\n<p class=\"mt-4\">Sur les <strong>supports en carrelage grès-cérame ou béton peint</strong>, les salissures s'incrustent dans les joints sensibles à l'humidité. Le balcon perd son aspect accueillant et devient un espace qu'on évite d'utiliser. Les traces noires sur les garde-corps donnent une impression de négligence visible depuis la rue.</p>\n<p class=\"mt-4\">La <strong>pollution routière liée à la proximité de l'A86</strong> dépose des suies tenaces sur les surfaces extérieures. Les évacuations d'eau parfois bouchées dans l'ancien compliquent l'entretien régulier. Une intervention structurée permet de traiter chaque zone du balcon en protégeant le voisinage des coulures.</p>",
      uniqueDeepDive: "<h3>Sol et joints</h3>\n<p>Le carrelage ou béton reçoit un traitement adapté à sa porosité. Les gros dépôts sont retirés manuellement avant application d'un produit désincrustant. Le brossage cible particulièrement les joints où l'humidité favorise le verdissement.</p>\n<p class=\"mt-4\">Le rinçage s'effectue avec une pression contrôlée pour préserver l'étanchéité des joints fragiles.</p>\n\n<h3>Garde-corps et vitrages</h3>\n<p>Les barreaux métalliques et surfaces vitrées sont dégraissés pour éliminer les traces de pollution. Un essuyage soigné évite les coulures sur la façade et chez les voisins du dessous.</p>\n<p class=\"mt-4\">Les fixations et angles sont traités manuellement pour un résultat homogène.</p>\n\n<h3>Murs et évacuations</h3>\n<p>Les murs mitoyens accessibles sont nettoyés si nécessaire. L'évacuation d'eau est vérifiée et dégagée pour assurer un écoulement correct.</p>\n<p class=\"mt-4\">Le mobilier et les plantes sont replacés après séchage complet de la surface.</p>",
      specificChallenges: [
        "Suies noires déposées par la pollution de l'A86 sur les balcons orientés nord.",
        "Joints de carrelage sensibles à l'humidité dans les immeubles anciens du centre.",
        "Évacuations d'eau parfois bouchées ou absentes nécessitant une gestion spécifique.",
        "Garde-corps métalliques exposés aux intempéries avec traces de rouille superficielle.",
        "Balcons filants visibles depuis la rue : aspect soigné attendu par les occupants.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons filants de la rue Saint-Denis, comment évitez-vous d'endommager le carrelage et les joints ?",
          answer: "<p>La pression est adaptée à chaque support. Sur les carrelages grès-cérame du centre-ville, nous utilisons une pression modérée et un brossage manuel sur les joints fragilisés par l'humidité. Cette approche préserve l'étanchéité tout en retirant efficacement les dépôts incrustés.</p>",
        },
        {
          question:
            "Comment retirez-vous la mousse verte sur les balcons exposés à l'humidité près du parc Lagravère ?",
          answer: "<p>Un produit anti-mousse est appliqué avant le brossage mécanique. L'humidité ambiante liée à la végétation du parc favorise le verdissement rapide. Le traitement agit en profondeur pour ralentir la réapparition des dépôts verts sur plusieurs mois.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage pour un balcon sans évacuation en centre-ville ?",
          answer: "<p>Nous utilisons un système d'aspiration et de bâchage pour récupérer les eaux de rinçage. Les voisins du dessous sont protégés par des protections installées avant l'intervention. Cette méthode évite toute coulure sur les balcons inférieurs ou la façade.</p>",
        },
        {
          question:
            "Proposez-vous un nettoyage spécifique des garde-corps et vitrages des balcons orientés nord à Colombes ?",
          answer: "<p>Les garde-corps métalliques et vitrages sont traités avec un dégraissant adapté aux traces de pollution. L'exposition nord favorise l'accumulation de suies et d'humidité. Nous essuyons chaque élément pour un rendu homogène sans traces résiduelles.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et pose de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque du centre-ville de Colombes et des abords des gares où les pigeons se concentrent.",
        "Protocole de décontamination avec EPI complets, confinement strict et produits virucides homologués.",
        "Organisation discrète avec bâchage, évacuation sécurisée des déchets et coordination avec le voisinage si nécessaire.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons du centre ancien de Colombes, notamment autour de l'église Saint-Pierre-Saint-Paul où les pigeons nichent en nombre. L'odeur s'installe, le sol devient glissant, et l'usage de l'espace extérieur se réduit progressivement. Les occupants finissent par éviter leur propre balcon.</p>\n<p class=\"mt-4\">Les corniches en pierre et les garde-corps en acier subissent une attaque acide permanente qui dégrade les matériaux. Les traces blanchâtres s'incrustent, la peinture s'écaille, et le nettoyage superficiel ne suffit plus. Un traitement en profondeur restaure l'aspect du balcon et supprime les agents pathogènes présents dans les déjections séchées.</p>\n<p class=\"mt-4\">La proximité des gares de Colombes et du Stade amplifie le phénomène : les structures métalliques attirent les volatiles qui colonisent ensuite les immeubles voisins. Une intervention structurée comprend le diagnostic des zones touchées, le confinement de l'espace, la décontamination complète et la mise en place de protections durables.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes de protection. Le balcon est isolé par bâchage pour éviter toute dispersion de particules vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées.</p>\n\n<h3>Nettoyage et désinfection</h3>\n<p>Le ramassage des déjections s'effectue manuellement, avec conditionnement en sacs étanches. Sol, garde-corps, vitrages et murs mitoyens sont traités successivement.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes. Un rinçage final prépare le balcon à sa réutilisation.</p>\n\n<h3>Prévention et évacuation</h3>\n<p>Des pics anti-pigeons ou un filet de protection peuvent être installés sur les rebords et corniches pour empêcher le retour des volatiles.</p>\n<p class=\"mt-4\">Les déchets conditionnés sont évacués de manière sécurisée. Un délai d'aération est conseillé avant de réinvestir l'espace.</p>",
      specificChallenges: [
        "Corniches du centre ancien difficiles d'accès et fortement colonisées par les pigeons.",
        "Dépôts acides attaquant les garde-corps en acier et les pierres des façades.",
        "Proximité des gares favorisant la prolifération et les retours rapides sans protection.",
        "Balcons en étage nécessitant un confinement rigoureux pour protéger les voisins.",
        "Odeurs persistantes si la désinfection n'est pas complète après le simple nettoyage.",
      ],
      faqAdditions: [
        {
          question:
            "Quels risques sanitaires présentent les fientes de pigeons accumulées près de l'église Saint-Pierre-Saint-Paul à Colombes ?",
          answer: "<p>Les déjections de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent provoquer des troubles respiratoires ou des allergies. Dans les zones où les volatiles nichent en nombre, comme autour de l'église, la concentration de fientes amplifie ces risques, surtout sur les balcons peu ventilés.</p>",
        },
        {
          question:
            "Quel équipement de protection utilisez-vous pour traiter les corniches et zones hautes du centre-ville de Colombes ?",
          answer: "<p>Nos intervenants portent systématiquement un masque FFP2, des gants résistants, des lunettes de protection et une combinaison jetable. Ce protocole évite l'inhalation de poussières contaminées lors du grattage ou du ramassage, particulièrement sur les corniches où les dépôts sont anciens et secs.</p>",
        },
        {
          question:
            "La désinfection est-elle systématique après le nettoyage de fientes autour des gares de Colombes et du Stade ?",
          answer: "<p>Oui, chaque intervention inclut l'application d'un produit virucide et bactéricide homologué après le retrait des déjections. Cette étape élimine les agents pathogènes invisibles qui persistent sur les surfaces, même après un nettoyage visuel complet. Le temps de contact du produit est respecté avant rinçage.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets contaminés après le nettoyage d'un balcon au centre-ville ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès leur collecte. Ces sacs sont fermés hermétiquement sur place puis évacués par nos équipes. Aucun déchet contaminé ne reste sur site, et le matériel utilisé est nettoyé ou éliminé selon le protocole.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchissement complet de vos canapés, tapis et matelas à Colombes, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile sain et agréable au quotidien.",
      whyUsBullets: [
        "Connaissance des intérieurs colombiens, du pavillon de la Petite Garenne aux appartements proches des gares.",
        "Détachage ciblé selon nature des taches et type de fibre, séchage accéléré par extraction renforcée.",
        "Organisation des créneaux avec gestion du stationnement en centre-ville pour intervention fluide.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur les coussins, la poussière accumulée dans les fibres du tapis : ces marques du quotidien s'installent progressivement dans les intérieurs colombiens. <strong>Autour de la gare de Colombes</strong> comme dans les quartiers pavillonnaires, les textiles d'ameublement subissent l'usure des passages répétés, des animaux de compagnie et des accidents domestiques.</p>\n<p class=\"mt-4\">Un canapé encrassé ou un tapis terni modifie l'atmosphère d'un salon. Les fibres retiennent allergènes et acariens, sources d'inconfort pour les occupants. Dans les <strong>maisons avec textiles variés — synthétiques, laine ou microfibre</strong> —, chaque matière réagit différemment aux salissures et nécessite une approche adaptée pour retrouver souplesse et fraîcheur.</p>\n<p class=\"mt-4\">Notre intervention structure le travail selon l'état réel de chaque pièce textile. Diagnostic préalable, choix des produits compatibles, extraction contrôlée : nous organisons le passage en tenant compte des <strong>contraintes d'accès en centre-ville</strong> et du temps de séchage nécessaire avant remise en usage.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches traitées</h3>\n<p>L'objectif est d'obtenir un textile débarrassé des salissures visibles et des résidus incrustés. Pour y parvenir, nous identifions d'abord la nature du tissu — coton, laine, synthétique, velours ou microfibre — et le type de taches présentes : café, vin, urine, graisse ou encre.</p>\n<p class=\"mt-4\">Un test discret sur une zone cachée valide la compatibilité du traitement avec les fibres fragiles.</p>\n\n<h3>Détachage ciblé puis injection-extraction</h3>\n<p>Les taches identifiées reçoivent un pré-traitement adapté, enzymatique si nécessaire pour les souillures organiques. L'injection-extraction textile permet ensuite de nettoyer en profondeur sans détremper le rembourrage.</p>\n<p class=\"mt-4\">La pression et la température sont ajustées selon la sensibilité du matériau pour préserver couleurs et texture.</p>\n\n<h3>Séchage et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage. Nous indiquons le délai de remise en service selon l'épaisseur du textile et l'aération disponible — généralement quelques heures en conditions normales.</p>\n<p class=\"mt-4\">Des conseils d'entretien prolongent la durée entre deux interventions.</p>",
      specificChallenges: [
        "Taches d'animaux fréquentes dans les pavillons de la Petite Garenne et des Vallées.",
        "Textiles variés (laine, microfibre, velours) nécessitant des réglages de pression différents.",
        "Stationnement contraint en centre-ville pour acheminer le matériel d'extraction.",
        "Temps de séchage à anticiper selon l'aération du logement et l'épaisseur du rembourrage.",
        "Allergènes et acariens accumulés dans les fibres des canapés familiaux.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé tissu à Colombes près de la gare, quelles techniques éliminent les acariens et allergènes en profondeur ?",
          answer: "<p>L'injection-extraction atteint les couches profondes du rembourrage où se logent acariens et poussières. La température de l'eau et l'aspiration puissante délogent ces résidus sans utiliser de produits agressifs. Après séchage, le textile retrouve une hygiène améliorée, appréciable pour les occupants sensibles.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'urine d'animaux sur un canapé dans une maison de la Petite Garenne ?",
          answer: "<p>Un pré-traitement enzymatique cible les composants organiques de l'urine avant l'extraction. Cette approche neutralise les odeurs à la source plutôt que de les masquer. Sur les tissus fragiles, nous testons d'abord sur une zone discrète pour éviter toute décoloration ou altération des fibres.</p>",
        },
        {
          question:
            "Comment adaptez-vous la méthode selon le textile — laine ou microfibre — pour un tapis haut de gamme à Colombes ?",
          answer: "<p>La laine supporte mal les températures élevées et l'excès d'humidité : nous réduisons pression et chaleur pour préserver sa texture. La microfibre tolère un traitement plus appuyé. Ce diagnostic textile initial évite les mauvaises surprises et garantit un rendu cohérent avec la qualité du tapis.</p>",
        },
        {
          question:
            "Pouvez-vous éliminer des taches très anciennes sur un tapis de salon dans une maison à Colombes ?",
          answer: "<p>Les taches anciennes — café, vin, encre — ont souvent pénétré les fibres en profondeur. Un détachage ciblé répété avant l'extraction améliore significativement le résultat. Certaines marques peuvent s'atténuer sans disparaître totalement selon l'ancienneté et la nature du textile.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement adapté au support et démoussage ciblé pour retrouver un extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses colombiennes exposées à l'ombre et à l'humidité du secteur Lagravère.",
        "Traitement différencié selon le support : bois, pierre, composite, avec produits et pression adaptés.",
        "Protection systématique du mobilier, des plantes et gestion de l'évacuation d'eau vers les écoulements.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect de sa terrasse quand l'ombre portée des arbres du <strong>Parc Pierre Lagravère</strong> favorise l'apparition de mousses et de dépôts verts ? Les surfaces exposées à l'humidité et aux feuilles mortes se couvrent progressivement d'un voile glissant qui rend l'espace peu engageant. Ce verdissement s'installe chaque année un peu plus, surtout sur les zones peu ensoleillées.</p>\n<p class=\"mt-4\">Les <strong>supports varient selon les secteurs</strong> : bois composite dans les résidences récentes, dalles sur plots en ZAC, pierre naturelle dans les pavillons de Petite Garenne ou des Vallées. Chaque matériau réagit différemment aux traitements et nécessite une approche spécifique pour éviter toute dégradation. Un entretien adapté redonne à la terrasse son rôle d'espace de vie extérieur, agréable et sécurisé.</p>\n<p class=\"mt-4\">Les <strong>feuilles, pollens et remontées humides</strong> liées à la végétation environnante imposent un démoussage régulier. Une intervention structurée permet d'identifier les zones critiques, de protéger le mobilier et les plantations, puis de traiter efficacement sans endommager les joints ni les surfaces poreuses.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries et baies vitrées sont protégées pour éviter les projections. Un balayage préalable élimine les gros dépôts : feuilles accumulées, terre, débris végétaux.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour bois composite, pierre naturelle ou dalles céramiques. Le brossage manuel ou mécanique décolle les mousses et lichens incrustés. Sur les surfaces compatibles, une haute pression contrôlée complète le travail en respectant les joints et matériaux poreux.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est évacuée vers les points d'écoulement existants. Les plantations sont rincées si nécessaire. Un traitement anti-mousse préventif peut être appliqué selon l'exposition de la terrasse. Des conseils d'entretien saisonnier sont transmis pour limiter le retour des dépôts verts et prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'ombre des arbres du Parc Pierre Lagravère.",
        "Supports variés selon les quartiers : bois composite en ZAC, pierre naturelle en pavillon.",
        "Accumulation de feuilles et pollens nécessitant un balayage préalable soigné.",
        "Joints fragiles sur dalles sur plots demandant une pression contrôlée.",
        "Gestion de l'évacuation d'eau sur terrasses d'appartement en RDC.",
      ],
      faqAdditions: [
        {
          question:
            "Comment retirer les mousses et lichens tenaces sur une terrasse ombragée près du Parc Pierre Lagravère ?",
          answer: "<p>Les terrasses proches du parc subissent une humidité persistante qui favorise le verdissement. Un brossage mécanique combiné à un produit anti-mousse adapté au support permet de décoller les dépôts sans abîmer la surface. Le traitement préventif limite la réapparition pendant plusieurs mois.</p>",
        },
        {
          question:
            "Le nettoyage haute pression risque-t-il d'endommager une terrasse en bois composite à Colombes ?",
          answer: "<p>Le bois composite, fréquent dans les résidences récentes de Colombes, supporte mal une pression trop forte. Nous utilisons une pression modérée et un angle adapté pour éviter de marquer les lames ou de soulever les fibres. Un nettoyage doux avec produit spécifique est privilégié si nécessaire.</p>",
        },
        {
          question:
            "Faut-il éviter la haute pression sur les margelles et escaliers extérieurs d'une terrasse d'appartement ?",
          answer: "<p>Les margelles et escaliers présentent souvent des joints ou des arêtes sensibles. Une pression contrôlée et un travail manuel sur les zones fragiles permettent de nettoyer efficacement sans dégrader les finitions. Nous adaptons la technique selon l'état et le matériau constatés sur place.</p>",
        },
        {
          question:
            "Quelle est la meilleure saison pour planifier un nettoyage de terrasse à Colombes ?",
          answer: "<p>Le printemps et l'automne sont les périodes idéales : après l'hiver pour éliminer les dépôts accumulés, ou avant l'hiver pour préparer la surface. Sur les terrasses ombragées du secteur Lagravère, un passage en fin de printemps limite le développement des mousses pendant l'été.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, avec traitement adapté à chaque surface et coordination optimisée pour respecter vos délais de remise de clés ou de livraison.",
      whyUsBullets: [
        "Connaissance des contraintes locales à Colombes : accès sécurisés, stationnement restreint en centre-ville, coordination avec gardiens.",
        "Protocoles ajustés selon le type de sol et la nature de l'intervention — fin de chantier ou état des lieux.",
        "Planning calé avec agences et artisans pour respecter les délais de remise sans décaler les autres intervenants.",
      ],
      uniqueIntro: "<p>Dans le secteur de la <strong>gare du Stade</strong> comme dans les quartiers résidentiels de Colombes, les demandes de remise en état de logements se multiplient au fil des rotations locatives et des livraisons de programmes neufs. Entre les fins de bail qui s'enchaînent et les chantiers qui se terminent, les propriétaires et agences doivent souvent récupérer un bien propre dans des délais serrés, parfois à quelques jours d'un état des lieux.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite la transition entre occupants et évite les litiges sur le dépôt de garantie. Dans les immeubles anciens du Centre-ville aux escaliers étroits ou les résidences récentes de la <strong>ZAC de l'Arc Sportif</strong>, chaque configuration demande une organisation adaptée. Les sols varient du parquet chêne au carrelage en passant par le lino, ce qui impose des protocoles distincts selon le contexte.</p>\n<p class=\"mt-4\">Notre intervention s'organise en amont avec les parties concernées — agence, artisan, propriétaire — pour caler le créneau au bon moment dans le planning de remise ou de livraison.</p>",
      uniqueDeepDive: "<h3>Pièces de vie et chambres</h3>\n<p>Le dépoussiérage débute par les hauteurs : plafonds, luminaires, plinthes. Les sols reçoivent ensuite un traitement adapté à leur nature — aspiration puis lavage pour le parquet, décapage léger si résidus de chantier sur carrelage.</p>\n<p class=\"mt-4\">Les interrupteurs, poignées et radiateurs sont nettoyés un par un. Les placards sont vidés de toute poussière résiduelle.</p>\n\n<h3>Cuisine et sanitaires</h3>\n<p>Plans de travail, crédence et électroménager font l'objet d'un dégraissage complet. La faïence et les joints de salle de bain sont traités pour éliminer traces de calcaire et moisissures éventuelles.</p>\n<p class=\"mt-4\">Les WC et lavabos sont désinfectés. Les évacuations sont vérifiées pour garantir un écoulement correct.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les vitres intérieures sont nettoyées, encadrements compris. Un passage final permet de repérer toute trace oubliée — colle, peinture, poussière de plâtre.</p>\n<p class=\"mt-4\">L'aération du logement précède la remise des clés ou le compte-rendu au donneur d'ordre.</p>",
      specificChallenges: [
        "Rotations locatives fréquentes près des gares : délais courts entre deux occupants.",
        "Résidus de chantier dans les programmes neufs de la ZAC de l'Arc Sportif : poussière fine, traces de colle.",
        "Accès par digicode et badge généralisés : coordination préalable indispensable.",
        "Stationnement compliqué en centre-ville : anticipation du créneau d'intervention.",
        "Sols variés selon les quartiers : parquet ancien aux Vallées, carrelage dans le neuf, lino en logement social.",
      ],
      faqAdditions: [
        {
          question:
            "En cas d'urgence état des lieux près de la gare du Stade, quel délai d'intervention proposez-vous ?",
          answer: "<p>Nous pouvons généralement intervenir sous 24 à 48 heures selon la surface et la disponibilité. Pour les demandes urgentes dans ce secteur, un créneau en fin de journée ou le samedi matin reste souvent possible après échange téléphonique pour confirmer l'accès au logement.</p>",
        },
        {
          question:
            "Pour un nettoyage fin de chantier dans la ZAC de la Marine, quelles différences de protocole appliquez-vous ?",
          answer: "<p>Le protocole fin de chantier inclut l'évacuation des résidus grossiers, le décapage des traces de colle ou d'enduit sur les sols, et un dépoussiérage renforcé des plafonds et murs. Les vitres reçoivent un traitement spécifique pour retirer les projections de peinture, ce qui n'est pas nécessaire lors d'un simple état des lieux.</p>",
        },
        {
          question:
            "Après un dégât des eaux dans un appartement du quartier Les Vallées, comment traitez-vous les traces d'humidité ?",
          answer: "<p>Nous commençons par évaluer l'étendue des zones touchées. Le nettoyage cible les surfaces atteintes avec des produits adaptés aux moisissures naissantes. Le séchage est favorisé par une ventilation prolongée. Si les dégâts dépassent le cadre d'un nettoyage, nous orientons vers un professionnel du traitement de l'humidité.</p>",
        },
        {
          question:
            "Comment coordonnez-vous l'intervention avec les artisans et l'agence lors d'un ménage fin de chantier à Colombes ?",
          answer: "<p>Nous calons le créneau après confirmation que les travaux sont terminés, en lien direct avec l'agence ou le maître d'œuvre. Un point téléphonique permet de vérifier l'état du logement et les accès. Le compte-rendu d'intervention peut être transmis à l'agence pour faciliter la remise des clés.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;