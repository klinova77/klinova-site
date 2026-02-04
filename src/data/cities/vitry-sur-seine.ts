import type { City } from "~/types/geo";

const city: City = {
  name: "Vitry-sur-Seine",
  slug: "vitry-sur-seine",
  postalCodes: ["94400"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Vitry-sur-Seine pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux contraintes du bâti dense et aux chantiers en cours sur la ZAC Les Ardoines.",

  // hubIntro : HTML autorisé
  hubIntro:
    "<p>Au cœur du Grand Paris, entre la Seine, le RER C et le parc des Lilas, Vitry-sur-Seine concentre des configurations variées : grands ensembles, pavillons du Plateau, résidences neuves. Klinova s'organise pour répondre à cette diversité avec des équipes formées aux spécificités locales.</p>\n<p class=\"mt-4\">Nous assurons l'entretien régulier ou ponctuel des immeubles, parkings et logements. <strong>Chaque intervention fait l'objet d'une coordination préalable</strong> avec le gestionnaire ou l'occupant, pour limiter les perturbations et garantir un suivi clair des prestations réalisées.</p>\n<ul>\n  <li><strong>Coordination terrain :</strong> Prise en compte des accès par badge, des horaires de gardiennage et des contraintes de stationnement en centre-ville ou près des gares RER.</li>\n  <li><strong>Adaptation au bâti :</strong> Protocoles ajustés selon l'époque de construction, la configuration des halls et la présence de sous-sols techniques ou de parkings en étages.</li>\n  <li><strong>Suivi des interventions :</strong> Compte-rendu transmis après chaque passage, avec possibilité de reporting mensuel pour les gestionnaires qui le souhaitent.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls d'immeubles</strong> à fort passage près des arrêts du tramway T9 et des gares RER.",
    "Parkings souterrains anciens avec <strong>rampes étroites</strong> et ventilation limitée dans les grands ensembles.",
    "Poussière de chantier persistante sur les façades et balcons <strong>proches de la ZAC Les Ardoines</strong>.",
    "<strong>Balcons exposés aux retombées de pollution</strong> sur les axes comme l'avenue Rouget de Lisle.",
    "Accès contraints par <strong>digicodes et badges Vigik</strong> dans la majorité des résidences récentes.",
    "Stationnement compliqué en centre-ville, notamment les jours de marché.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Port-à-l'Anglais",
    "Gare - Ardoines",
    "Le Plateau",
    "Moulin Vert",
    "Commune de Paris",
    "Fort",
    "Balzac",
    "Vitry-Sud / Ardoines",
  ],
  nearbyCities: [
        "alfortville",
        "villejuif",
        "ivry-sur-seine",
        "thiais",
        "choisy-le-roi",
        "maisons-alfort",
        "charenton-le-pont",
        "chevilly-larue",
        "creteil",
        "gentilly"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Vitry-sur-Seine",
    "MAC VAL (Musée d'Art Contemporain du Val-de-Marne)",
    "Gare des Ardoines (RER C)",
    "Parc des Lilas",
    "ZAC Les Ardoines",
    "Pont du Port-à-l'Anglais",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les quartiers où le stationnement est difficile ?",
      answer:
        "<p><strong>En centre-ville ou près de la gare de Vitry-sur-Seine</strong>, nous repérons les possibilités de stationnement avant le premier passage. Nos équipes arrivent avec un véhicule adapté et planifient les créneaux en dehors des heures de marché ou de forte affluence pour limiter les contraintes logistiques.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir dans des résidences avec digicode et gardien ?",
      answer:
        "<p><strong>Oui, c'est une situation fréquente à Vitry-sur-Seine.</strong> Nous récupérons les codes d'accès ou badges Vigik en amont et coordonnons avec le gardien si nécessaire. Les horaires d'intervention sont définis pour respecter les règles de la copropriété et éviter toute gêne pour les résidents.</p>",
    },
    {
      question:
        "Quel délai prévoir pour une première intervention sur un immeuble ou un parking ?",
      answer:
        "<p><strong>Après validation du devis</strong>, nous pouvons généralement intervenir sous 5 à 10 jours ouvrés selon la nature de la prestation et la disponibilité des accès. En cas d'urgence signalée, nous étudions la possibilité d'un passage plus rapide en fonction de notre planning.</p>",
    },
    {
      question:
        "Comment gérez-vous les interventions dans les zones en chantier comme les Ardoines ?",
      answer:
        "<p><strong>Les secteurs en mutation génèrent des poussières et salissures spécifiques.</strong> Nous adaptons la fréquence et les méthodes selon l'avancement des travaux environnants. La coordination avec le gestionnaire permet d'ajuster le planning si les conditions d'accès évoluent.</p>",
    },
  ],

  testimonial: {
    text: "Au cœur du Grand Paris, entre la Seine, le RER C et le parc des Lilas",
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
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec traitement adapté aux fibres et séchage contrôlé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des configurations locales : halls rénovés du centre-ville, bureaux ZAC Ardoines, résidences du Port-à-l'Anglais.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles comme aux velours épais des parties communes.",
        "Interventions planifiées hors heures de bureau ou en horaires décalés pour limiter la gêne des occupants.",
      ],
      uniqueIntro:
        "<p>Les traces grises sur les zones de passage, les auréoles près des entrées, les fibres ternies le long des couloirs : ces marques apparaissent rapidement dans les bureaux et halls situés près de la <strong>Gare des Ardoines</strong>. La poussière fine générée par les chantiers environnants s'accumule sur les surfaces textiles, tandis que le piétinement quotidien enfonce les particules dans la trame des moquettes.</p>\n<p class=\"mt-4\">Sur les <strong>dalles textiles des open spaces récents</strong> comme sur les moquettes aiguilletées des parties communes, l'encrassement modifie l'aspect général des espaces. Les fibres perdent leur tenue, les couleurs s'uniformisent vers le gris, et l'impression de propreté s'efface même après un aspirateur régulier. Pour les copropriétés et les locaux professionnels, cette dégradation visuelle affecte l'image perçue par les visiteurs et les occupants.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter ces surfaces en profondeur. Le diagnostic préalable identifie le type de fibre et la nature des taches, avant un protocole adapté aux contraintes d'accès et aux horaires d'activité des locaux concernés.</p>",
      uniqueDeepDive:
        "<h3>Fibres ravivées et taches éliminées</h3>\n<p>L'objectif est de retrouver une moquette aux couleurs homogènes, débarrassée des auréoles et des zones grisées. Les fibres retrouvent leur souplesse d'origine, les passages intensifs ne se distinguent plus du reste de la surface.</p>\n\n<h3>Injection-extraction et détachage ciblé</h3>\n<p>Après aspiration préalable, la solution nettoyante est injectée sous pression contrôlée dans la fibre. L'extraction immédiate retire l'eau chargée de salissures. Sur les taches tenaces — café, tanin, résidus gras — un pré-traitement localisé décolle les pigments avant le passage général.</p>\n<p class=\"mt-4\">Les plinthes et bas de murs sont protégés. Le mobilier accessible est déplacé ou bâché selon la configuration.</p>\n\n<h3>Gestion de l'humidité résiduelle</h3>\n<p>L'extraction maximale limite le temps de séchage à quelques heures selon l'épaisseur du revêtement et la ventilation disponible. Les consignes de non-piétinement sont transmises pour éviter les reprises de salissures pendant cette phase. Un conseil de fréquence d'entretien est fourni en fin d'intervention.</p>",
      specificChallenges: [
        "<strong>Poussières de chantier liées aux travaux</strong> du Grand Paris Express et de la ZAC Les Ardoines.",
        "Dalles textiles en open space nécessitant une extraction sans détrempage des joints.",
        "Halls d'immeubles à fort passage quotidien vers les transports RER C.",
        "Accès contraints dans les <strong>cages d'escalier étroites</strong> des immeubles anciens du centre.",
        "Stationnement limité imposant une organisation logistique anticipée pour le matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les cages d'escalier étroites des immeubles du centre-ville de Vitry-sur-Seine, comment acheminez-vous le matériel et protégez-vous les paliers ?",
          answer:
            "<p>Le matériel est dimensionné pour passer dans les escaliers sans ascenseur. Les paliers sont bâchés avant intervention, les plinthes protégées. L'acheminement se fait par étapes pour éviter d'encombrer les passages et limiter la gêne pour les résidents pendant le transport.</p>",
        },
        {
          question:
            "Après une intervention sur des moquettes de bureaux proches de la Gare des Ardoines, combien de temps avant de pouvoir réutiliser les espaces sans odeur ni humidité ?",
          answer:
            "<p>Le séchage varie de trois à six heures selon l'épaisseur du revêtement et la ventilation des locaux. <strong>L'extraction poussée réduit l'humidité résiduelle</strong> au minimum. Une aération naturelle ou mécanique accélère le processus. Les espaces sont généralement praticables en fin de journée.</p>",
        },
        {
          question:
            "Pour les dalles textiles des open spaces de la ZAC Les Ardoines, quelle méthode offre le meilleur détachage : injection-extraction ou vapeur ?",
          answer:
            "<p><strong>L'injection-extraction reste la méthode la plus efficace</strong> sur dalles textiles. Elle pénètre la fibre, décolle les salissures et les extrait immédiatement. La vapeur seule ne retire pas les résidus, elle les déplace. Sur les taches grasses ou anciennes, un pré-traitement localisé complète l'extraction.</p>",
        },
        {
          question:
            "Si le stationnement est restreint près du hall d'un immeuble rénové à Vitry-sur-Seine, comment organisez-vous le matériel et le temps d'intervention ?",
          answer:
            "<p>Le repérage préalable identifie les possibilités de stationnement temporaire ou de dépose rapide. Le matériel est déchargé en une fois puis le véhicule déplacé. L'intervention est calibrée pour limiter le temps de présence sur site et respecter les contraintes de circulation du quartier.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet de vos parkings souterrains ou aériens, avec traitement des sols encrassés, gestion rigoureuse des eaux et balisage sécurisé pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès sur Vitry-sur-Seine, des sous-sols du Plateau aux parkings aériens des zones d'activités.",
        "Autolaveuse et haute pression adaptées au béton brut comme à l'enrobé, avec gestion stricte des eaux usées.",
        "Coordination directe avec syndics et gestionnaires pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro:
        "<p>Comment maintenir un parking propre et sécurisé quand le trafic quotidien y dépose huile, graisse et poussières noires ? Le long de l'Avenue Rouget de Lisle et dans les secteurs proches des zones d'activités, les sols subissent un encrassement accéléré lié aux véhicules utilitaires et aux flux vers l'A86. <strong>Les traces s'accumulent sur le béton</strong>, les rampes deviennent glissantes, les rigoles se bouchent.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux copropriétés et aux gestionnaires un espace fonctionnel. Les revêtements béton brut des sous-sols anciens ou les enrobés des parkings aériens retrouvent leur aspect d'origine. Les résidences du Plateau comme les immeubles récents de la ZAC bénéficient d'un sol dégraissé, de rampes antidérapantes et d'évacuations dégagées.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic ou le gestionnaire : diagnostic préalable, zonage des places, rotation des véhicules si nécessaire. Un compte-rendu permet de suivre l'état du parking et d'ajuster la fréquence selon l'usage réel.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation du site</h3>\n<p>Le technicien identifie le type de revêtement, l'état des regards et rigoles, ainsi que le niveau d'encrassement. Un balayage préalable élimine les débris grossiers.</p>\n<p class=\"mt-4\">Le balisage est mis en place pour sécuriser les zones de passage. Si des véhicules occupent les emplacements, une rotation par secteur est organisée avec le gestionnaire.</p>\n\n<h3>Traitement mécanisé et dégraissage</h3>\n<p>L'autolaveuse ou la haute pression associée à un dégraissant adapté traite les surfaces en passes successives. Les zones critiques reçoivent une attention particulière : rampes d'accès, angles morts, pieds de murs.</p>\n<p class=\"mt-4\">Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Les rigoles sont dégagées pour rétablir un écoulement correct.</p>\n\n<h3>Finalisation et recommandations</h3>\n<p>Un dépoussiérage des blocs lumineux ou tuyauteries peut compléter l'intervention si demandé. Le compte-rendu transmis au syndic inclut des préconisations sur la fréquence adaptée au trafic constaté.</p>",
      specificChallenges: [
        "<strong>Encrassement accéléré</strong> par le trafic utilitaire lié aux Ardoines et à l'A86.",
        "Rampes d'accès en béton brut rendues glissantes par les dépôts de graisse.",
        "Rigoles obstruées dans les sous-sols anciens des grands ensembles.",
        "Coordination nécessaire avec les syndics pour organiser le déplacement des véhicules.",
        "Horaires d'intervention à caler hors flux domicile-travail sur les axes passants.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes sur les parkings proches de l'Avenue Rouget de Lisle ?",
          answer:
            "<p>Les taches incrustées reçoivent un dégraissant appliqué en pré-traitement avant le passage de l'autolaveuse. Plusieurs passes peuvent être nécessaires sur les dépôts anciens. Le béton retrouve un aspect uniforme sans risque d'altération du revêtement.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux de lavage dans un parking souterrain de copropriété ?",
          answer:
            "<p>Les eaux sont orientées vers les regards et rigoles existants. Nous vérifions leur bon écoulement avant intervention et dégageons les obstructions si besoin. Aucun rejet n'est effectué hors des circuits prévus, conformément aux règles en vigueur.</p>",
        },
        {
          question:
            "Quelles adaptations appliquez-vous entre un parking souterrain et un parking aérien à Vitry-sur-Seine ?",
          answer:
            "<p><strong>En souterrain, l'aération limitée</strong> impose un séchage plus long et une gestion stricte des eaux. À l'air libre, les intempéries et la pollution atmosphérique demandent un dégraissage renforcé. Le matériel et les produits sont ajustés à chaque configuration.</p>",
        },
        {
          question:
            "Quels créneaux proposez-vous pour intervenir sur un parking lié aux zones d'activité des Ardoines ?",
          answer:
            "<p>Les interventions sont programmées en début de matinée ou en soirée, hors pics de circulation. Le balisage sécurise les usagers présents. La coordination avec le gestionnaire permet de fermer partiellement les accès sans bloquer l'activité.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Vitry-sur-Seine, avec traitement adapté au support et gestion anti-coulures pour préserver la tranquillité de vos voisins.",
      whyUsBullets: [
        "Connaissance des balcons exposés à la pollution des axes vitriots et aux dépôts végétaux du Parc des Lilas.",
        "Pression ajustée selon le support : béton poreux, carrelage ancien ou dalles sur plots des constructions récentes.",
        "Organisation pensée pour limiter les nuisances aux voisins du dessous et respecter les horaires de la copropriété.",
      ],
      uniqueIntro:
        "<p>Dans les résidences de la <strong>ZAC Les Ardoines</strong> comme dans les immeubles du Port-à-l'Anglais, les balcons accumulent rapidement poussières fines et dépôts noirâtres. Les particules issues des chantiers voisins se mêlent aux résidus de pollution routière. Résultat : un sol qui colle sous les pieds, des garde-corps ternis, et cette impression de ne jamais pouvoir profiter pleinement de l'espace extérieur.</p>\n<p class=\"mt-4\">Sur les <strong>dalles béton brut des années 60-70</strong> ou les carrelages plus récents posés sur plots, la saleté s'incruste différemment. Les joints poreux retiennent l'humidité, favorisant l'apparition de traces verdâtres. Les vitres de loggia perdent leur transparence. Le mobilier de jardin, même rangé, finit par se couvrir d'un voile grisâtre qui décourage toute envie de s'installer dehors.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable. Diagnostic du support, protection des menuiseries, rinçage contrôlé : chaque étape tient compte des contraintes liées aux axes passants comme l'A86 ou la D152, et de la végétation environnante qui dépose pollens et feuilles mortes.</p>",
      uniqueDeepDive:
        "<h3>Sol et joints</h3>\n<p>Le revêtement est d'abord débarrassé des gros débris : feuilles, terre accumulée, résidus divers. Un produit adapté au support traite ensuite les salissures incrustées. Sur béton brut, le brossage reste manuel pour préserver la surface. Sur carrelage, une action mécanique douce décolle les dépôts sans fragiliser les joints.</p>\n\n<h3>Garde-corps et vitrages</h3>\n<p>Les barreaux métalliques ou les panneaux vitrés reçoivent un nettoyage spécifique. Les traces de pollution et coulures anciennes disparaissent progressivement. Les murs mitoyens accessibles sont également traités pour uniformiser le rendu visuel de l'ensemble.</p>\n\n<h3>Rinçage et protection voisinage</h3>\n<p>L'eau de rinçage est contrôlée pour éviter les écoulements chez les occupants du dessous. Des protections temporaires limitent les projections sur la façade. Le séchage naturel s'effectue en quelques heures selon l'exposition. Avant de partir, nous vérifions l'état général et partageons quelques conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "<strong>Poussière de chantier omniprésente</strong> autour de la ZAC Les Ardoines, déposée en continu sur les surfaces.",
        "Joints poreux sur béton brut années 70 retenant humidité et favorisant les traces vertes.",
        "Balcons en étage élevé dans les tours du centre nécessitant une gestion rigoureuse des écoulements.",
        "Pollution routière des axes D152 et A86 laissant un film gras difficile à éliminer sans produit adapté.",
        "Proximité du Parc des Lilas générant dépôts de pollens et feuilles sur les garde-corps.",
      ],
      faqAdditions: [
        {
          question:
            "Sur un balcon en béton brut dans les résidences des Ardoines, comment évitez-vous d'abîmer la dalle pendant le nettoyage ?",
          answer:
            "<p><strong>Le béton brut reste sensible aux pressions trop fortes.</strong> Nous privilégions un brossage manuel associé à un produit désincrustant doux. Le rinçage s'effectue à basse pression pour ne pas creuser la surface ni déchausser les éventuels joints de dilatation présents sur ces constructions récentes.</p>",
        },
        {
          question:
            "Comment traitez-vous la mousse qui s'installe sur les balcons exposés côté Parc des Lilas ?",
          answer:
            "<p><strong>L'humidité et l'ombre partielle favorisent ces dépôts verts.</strong> Nous appliquons un traitement anti-mousse avant le brossage, puis rinçons abondamment. Sur les supports poreux, un passage supplémentaire permet d'extraire les résidus incrustés dans les micro-cavités du béton ou du carrelage ancien.</p>",
        },
        {
          question:
            "Quelle différence de méthode entre un carrelage ancien et des dalles sur plots dans les immeubles neufs ?",
          answer:
            "<p><strong>Le carrelage ancien présente souvent des joints fragiles</strong> : nous évitons toute pression excessive et travaillons manuellement autour des zones sensibles. Les dalles sur plots, plus stables, supportent un rinçage plus appuyé. Dans les deux cas, le produit utilisé est adapté au matériau pour ne pas ternir la surface.</p>",
        },
        {
          question:
            "Pour un balcon situé au dixième étage dans une tour du centre-ville, comment organisez-vous l'intervention ?",
          answer:
            "<p>Nous montons le matériel nécessaire en plusieurs rotations si l'ascenseur le permet. L'eau de rinçage est récupérée ou dirigée vers l'évacuation du balcon pour éviter tout écoulement chez les voisins. Les horaires sont calés en accord avec le règlement de copropriété, généralement en milieu de matinée.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon contaminé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter leur retour.",
      whyUsBullets: [
        "Connaissance des zones sensibles à Vitry-sur-Seine, notamment les grands ensembles et secteurs proches des parcs arborés.",
        "Protocole EPI complet et désinfection virucide adaptée aux supports béton, métal et carrelage des balcons locaux.",
        "Organisation discrète avec bâchage, évacuation sécurisée des déchets et coordination préalable si voisinage concerné.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les rebords, le sol et les garde-corps. Dans les secteurs comme la <strong>Cité Balzac</strong> ou les abords de la gare, les corniches et cours intérieures offrent des refuges aux pigeons. Les dépôts deviennent épais, l'odeur s'installe, et l'usage du balcon se réduit progressivement.</p>\n<p class=\"mt-4\">Les loggias et façades des grands ensembles présentent des appuis en béton ou métal particulièrement exposés. Ces surfaces poreuses retiennent l'humidité et les résidus organiques, favorisant la corrosion et les taches durables. Sans traitement adapté, les dégradations s'étendent aux joints, aux peintures et aux vitrages adjacents.</p>\n<p class=\"mt-4\">La proximité du <strong>Parc des Lilas</strong> et des espaces arborés du Coteau renforce la pression des volatiles sur les immeubles environnants. Une intervention structurée permet de retrouver un espace utilisable : diagnostic de l'étendue des dépôts, protection du logement, assainissement des supports et désinfection complète avant remise en service.</p>",
      uniqueDeepDive:
        "<h3>Espace assaini et désinfecté</h3>\n<p>L'objectif est de restituer un balcon propre, sans odeur ni risque sanitaire. Les supports retrouvent leur aspect d'origine dans la mesure du possible, et les agents pathogènes sont éliminés par application d'un produit virucide homologué avec temps de contact respecté.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières, puis conditionnées en sacs étanches.</p>\n\n<h3>Traitement des surfaces et rinçage</h3>\n<p>Sol, garde-corps, vitrages et murs mitoyens sont nettoyés méthodiquement. Le produit désinfectant est appliqué sur l'ensemble des supports concernés. Après rinçage final, un délai d'aération est respecté avant réutilisation. Des solutions de dissuasion (pics, filets) peuvent être recommandées selon la configuration.</p>",
      specificChallenges: [
        "Corniches et loggias des grands ensembles offrant des refuges propices aux nids.",
        "Accumulation rapide sur béton poreux et appuis métalliques des façades années 60-70.",
        "Proximité du Parc des Lilas et des espaces verts <strong>augmentant la pression des volatiles</strong>.",
        "Gestion des eaux de rinçage en <strong>étage élevé</strong> pour éviter les nuisances aux voisins du dessous.",
        "Odeurs persistantes nécessitant une désinfection complète avant réutilisation de l'espace.",
      ],
      faqAdditions: [
        {
          question:
            "Face à des fientes abondantes sur une loggia de la Cité Balzac, quelle est votre prise en charge pour sécuriser et désinfecter rapidement ?",
          answer:
            "<p>L'intervention débute par un confinement de la zone pour éviter toute dispersion. Les dépôts sont humidifiés puis collectés en sacs étanches. Un produit désinfectant virucide est ensuite appliqué sur l'ensemble des surfaces contaminées, avec respect du temps de contact avant rinçage et aération.</p>",
        },
        {
          question:
            "Quel protocole EPI et quelles étapes de désinfection appliquez-vous pour un balcon contaminé par fientes de pigeons ?",
          answer:
            "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes de protection. Après bâchage et humidification préalable, les fientes sont ramassées sans envol de poussières. La désinfection couvre sol, garde-corps et vitrages avec un produit homologué bactéricide et virucide.</p>",
        },
        {
          question:
            "En zone humide proche du Coteau, quels produits garantissent une désinfection efficace et limitent les retours après traitement ?",
          answer:
            "<p>Nous utilisons des désinfectants homologués adaptés aux supports exposés à l'humidité. Leur formulation élimine les agents pathogènes présents dans les fientes. Pour limiter les retours, des dispositifs de dissuasion comme les pics ou filets peuvent être installés selon la configuration du balcon.</p>",
        },
        {
          question:
            "Comment organisez-vous l'enlèvement des déchets contaminés après assainissement d'un balcon en copropriété à Vitry-sur-Seine ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès la collecte. L'évacuation se fait de manière sécurisée pour éviter tout contact avec les parties communes. En copropriété, nous coordonnons si nécessaire avec le gardien ou le syndic pour l'accès et le passage dans les espaces partagés.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un intérieur sain dans un délai compatible avec le séchage.",
      whyUsBullets: [
        "Connaissance des quartiers résidentiels de Vitry, du Plateau aux abords du Parc du Coteau, et de leurs typologies de logements.",
        "Détachage ciblé selon la fibre et la nature de la tache, suivi d'une extraction qui limite le temps de séchage.",
        "Organisation souple pour monter le matériel même quand l'ascenseur est indisponible ou le palier étroit.",
      ],
      uniqueIntro:
        "<p>Dans les foyers autour du <strong>Parc du Coteau</strong> et les quartiers résidentiels du Plateau ou du Centre-ville, les canapés et tapis encaissent le quotidien : repas devant la télé, enfants qui jouent au sol, animaux qui s'installent sur les coussins. Les fibres accumulent poussières, miettes, poils et taches diverses sans que l'aspirateur suffise à tout éliminer. Les odeurs finissent par s'incruster, surtout quand un accident d'animal passe inaperçu quelques jours.</p>\n<p class=\"mt-4\">Rafraîchir ces textiles change l'atmosphère d'une pièce : les couleurs retrouvent de l'éclat, l'assise redevient agréable, et les allergènes diminuent sensiblement. Dans les appartements avec sols PVC ou lino fréquents dans le parc social vitriote, le tapis du salon représente souvent le seul élément textile d'envergure — autant qu'il reste accueillant.</p>\n<p class=\"mt-4\">Nous intervenons avec un protocole adapté à chaque fibre et à chaque type de tache. Avant de commencer, nous évaluons l'état du textile, les contraintes d'accès — ascenseur parfois hors service, paliers étroits — et le temps de séchage réaliste selon la saison et l'aération disponible.</p>",
      uniqueDeepDive:
        "<h3>Identifier les taches et la nature du tissu</h3>\n<p>Chaque textile réagit différemment : un velours côtelé ne supporte pas la même pression qu'un coton épais. Nous repérons d'abord les zones marquées — café renversé, auréoles d'urine, traces de graisse — puis testons un coin discret pour vérifier la tenue des couleurs.</p>\n\n<h3>Traiter les salissures tenaces avant le lavage complet</h3>\n<p>Les taches anciennes ou organiques nécessitent un pré-traitement ciblé. Un détachant enzymatique neutralise les résidus d'urine ou de nourriture avant l'injection-extraction. Cette étape évite de fixer définitivement une marque en la diluant trop vite.</p>\n\n<h3>Extraire l'eau et guider le séchage</h3>\n<p>L'injection-extraction retire la quasi-totalité de l'humidité. Nous conseillons ensuite sur l'aération : fenêtre entrouverte, ventilateur d'appoint si besoin. Selon l'épaisseur du tissu et la météo, le canapé ou le tapis redevient utilisable sous 12 à 24 heures. Nous indiquons aussi la fréquence d'entretien adaptée à l'usage du foyer.</p>",
      specificChallenges: [
        "Taches d'urine animale fréquentes dans les pavillons du Plateau, nécessitant un traitement enzymatique.",
        "<strong>Canapés non déhoussables</strong> dans le parc social, où seule l'injection-extraction atteint les fibres en profondeur.",
        "Ascenseurs parfois hors service dans les tours, imposant une montée manuelle du matériel.",
        "<strong>Paliers étroits</strong> compliquant le déplacement de l'équipement jusqu'au logement.",
        "Temps de séchage variable selon l'aération et la saison, à anticiper avant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé dans un foyer proche du Parc du Coteau, quelles méthodes éliminent acariens et allergènes durablement ?",
          answer:
            "<p>L'injection-extraction à l'eau chaude déloge les acariens nichés dans les fibres. Le détachant utilisé ne laisse pas de résidu irritant une fois sec. Pour prolonger l'effet, nous recommandons un entretien tous les douze à dix-huit mois selon la présence d'animaux ou d'enfants en bas âge.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'urine d'animaux sur un tapis dans les pavillons du Plateau sans risquer de décoloration ?",
          answer:
            "<p>Nous appliquons d'abord un détachant enzymatique qui décompose l'acide urique sans attaquer les pigments. Un test préalable sur une zone cachée confirme la tenue des couleurs. L'extraction suit immédiatement pour éviter toute auréole résiduelle et neutraliser l'odeur en profondeur.</p>",
        },
        {
          question:
            "Pour un canapé tissu non déhoussable dans un appartement HLM, quelles techniques garantissent un nettoyage complet ?",
          answer:
            "<p><strong>L'injection-extraction reste la méthode la plus efficace</strong> : l'eau et le produit pénètrent le rembourrage, puis sont aspirés avec les salissures. Aucun démontage n'est nécessaire. Nous adaptons la pression et la température selon l'épaisseur du tissu pour ne pas détériorer la structure du canapé.</p>",
        },
        {
          question:
            "Si l'ascenseur est hors service et le palier étroit, comment planifiez-vous le shampouinage d'un canapé volumineux ?",
          answer:
            "<p>Nous vérifions l'accessibilité avant le rendez-vous : étage, largeur des portes, présence d'escaliers. Le matériel d'injection-extraction est conçu pour être transporté à la main. En cas de contrainte forte, nous prévoyons un créneau plus long pour éviter toute précipitation et protéger les parties communes.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses du Plateau et des résidences RDC exposées à l'humidité et aux arbres proches.",
        "Adaptation du traitement selon le support : pression ajustée sur bois composite, produit ciblé sur carrelage ou béton.",
        "Protection systématique du mobilier et des plantations, gestion de l'évacuation d'eau sans nuisance pour le voisinage.",
      ],
      uniqueIntro:
        "<p>Comment préserver l'aspect d'une terrasse quand l'humidité s'installe et que la mousse gagne du terrain ? Sur le <strong>Quartier du Plateau</strong> comme dans les résidences avec jardins privatifs du secteur Coteau, les surfaces extérieures subissent un encrassement progressif qui rend le sol glissant et peu engageant. Les dépôts verts s'incrustent dans les joints, les feuilles mortes laissent des traces tenaces.</p>\n<p class=\"mt-4\">Qu'il s'agisse de <strong>carrelage, de béton ou de bois composite</strong>, chaque matériau réagit différemment aux intempéries et aux traitements. Une terrasse négligée perd son confort d'usage : on hésite à y installer le mobilier, on repousse les repas en extérieur. La surface devient un espace délaissé plutôt qu'un prolongement du logement.</p>\n<p class=\"mt-4\">L'intervention prend en compte l'exposition de votre terrasse, la nature du revêtement et les contraintes d'accès par le jardin ou la porte-fenêtre. Un diagnostic préalable permet d'adapter la méthode et d'éviter tout risque pour les plantations environnantes.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché. Les jardinières et plantes sont protégées pour éviter tout contact avec les produits de traitement. Les menuiseries et baies vitrées sont couvertes afin de prévenir les projections.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les gros dépôts : feuilles, terre accumulée, débris végétaux.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour carrelage, pierre ou bois composite. Le brossage manuel ou mécanique déloge les salissures incrustées dans les joints et les pores du matériau.</p>\n<p class=\"mt-4\">Si l'état le permet, une haute pression contrôlée complète le travail sur les surfaces résistantes. Les matériaux poreux ou fragiles bénéficient d'un traitement plus doux.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est évacuée vers les points d'écoulement existants. Un traitement anti-mousse préventif peut être appliqué selon la configuration. Vous recevez des recommandations d'entretien saisonnier pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Mousse tenace</strong> sur dalles peu exposées au soleil dans les jardins du Plateau.",
        "Terrasses en bois composite sensibles à la pression excessive et aux produits agressifs.",
        "Accès souvent limité par le passage intérieur ou un portillon étroit côté jardin.",
        "<strong>Joints de carrelage noircis</strong> par l'humidité persistante en zone ombragée.",
        "Mobilier et plantations à déplacer ou protéger avant toute intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Pour une terrasse en bois composite sur le Plateau, quelles méthodes utilisez-vous sans abîmer le matériau ?",
          answer:
            "<p>Le bois composite ne supporte pas la haute pression standard. Nous utilisons une pression réduite combinée à un produit neutre qui préserve la surface et les fixations. Le brossage manuel complète le travail sur les zones encrassées sans altérer l'aspect du revêtement ni fragiliser les lames.</p>",
        },
        {
          question:
            "Comment éliminez-vous la mousse et les lichens incrustés sur des dalles peu exposées au soleil ?",
          answer:
            "<p>Un traitement spécifique est appliqué pour décoller les végétaux sans gratter excessivement. Le brossage mécanique déloge les résidus, puis un rinçage contrôlé évacue les dépôts. Un produit anti-mousse peut être posé en finition pour ralentir la réapparition sur les zones ombragées.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse appliquez-vous sur une terrasse carrelée sans risque pour les joints et plantes voisines ?",
          answer:
            "<p>Nous sélectionnons des formulations biodégradables qui agissent sur la mousse sans attaquer les joints ni contaminer le sol environnant. Les plantations proches sont bâchées pendant l'application. Le produit est rincé après action pour éviter toute accumulation résiduelle sur le carrelage.</p>",
        },
        {
          question:
            "Quand déconseilleriez-vous le karcher haute pression pour une terrasse ancienne ?",
          answer:
            "<p>Sur les supports poreux, fissurés ou dont les joints sont fragilisés, la haute pression risque d'aggraver les dégâts. Nous privilégions alors un nettoyage doux avec brossage et produit adapté. Cette approche préserve l'intégrité du revêtement tout en obtenant un résultat propre et durable.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, avec traitement de chaque pièce et finitions soignées pour une restitution propre dans les délais convenus.",
      whyUsBullets: [
        "Connaissance des typologies locatives à Vitry-sur-Seine, du parc social aux résidences neuves des Ardoines.",
        "Polyvalence sur tous types de sols : PVC, carrelage, parquet flottant, avec produits adaptés à chaque revêtement.",
        "Coordination directe avec agences et bailleurs pour respecter les délais de remise et éviter les allers-retours.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou une période de location, un appartement accumule des traces que le ménage courant ne suffit pas à éliminer. <strong>Le long des Quais de Seine et dans les secteurs proches du centre-ville</strong>, les logements en rotation locative présentent souvent des sols ternis, des vitres voilées et des pièces d'eau entartrées qui compliquent la remise des clés.</p>\n<p class=\"mt-4\">Un nettoyage complet avant état des lieux change la perception du bien : sols sans résidus, sanitaires détartrés, placards vidés de toute poussière. Dans les <strong>T2 à T4 du parc social ou des résidences récentes</strong>, où les revêtements PVC et carrelage dominent, chaque surface retrouve un aspect net qui facilite les démarches avec l'agence ou le bailleur.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec les contraintes de calendrier. <strong>Fin de chantier pour les livraisons de la ZAC Les Ardoines ou états des lieux locatifs</strong> : le planning s'adapte aux impératifs de remise, avec un diagnostic préalable pour anticiper les besoins spécifiques du logement.</p>",
      uniqueDeepDive:
        "<h3>Un logement prêt à la remise</h3>\n<p>Le résultat attendu : des sols propres sur toute la surface, des vitres intérieures transparentes, des sanitaires détartrés et des placards dépoussiérés. L'ensemble permet une restitution sans réserve lors de l'état des lieux.</p>\n\n<h3>Traitement pièce par pièce</h3>\n<p>La cuisine fait l'objet d'un dégraissage des plans de travail, crédence et électroménager. La salle de bain reçoit un détartrage complet des faïences, joints et robinetterie. Les pièces de vie sont dépoussiérées du plafond aux plinthes, puis les sols aspirés et lavés selon leur nature.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les interrupteurs, poignées et radiateurs sont essuyés. Les traces de peinture ou d'enduit résiduelles sont traitées si le contexte est une fin de chantier. Un passage final vérifie chaque zone avant aération du logement et transmission du compte-rendu au donneur d'ordre.</p>",
      specificChallenges: [
        "<strong>Poussières de chantier persistantes</strong> dans les appartements livrés près de la ZAC Les Ardoines.",
        "Délais serrés entre fin de travaux et état des lieux dans le parc locatif dense.",
        "Stationnement difficile en centre-ville pour le matériel d'intervention.",
        "Sols PVC et lino fréquents nécessitant des produits non agressifs.",
        "Coordination avec gardiens et digicodes dans les résidences sécurisées.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans la ZAC Les Ardoines, quelles étapes permettent d'éliminer les poussières de plâtre et traces de colle ?",
          answer:
            "<p>L'intervention débute par un dépoussiérage complet des surfaces hautes et des menuiseries où les résidus fins se déposent. Les sols reçoivent ensuite un lavage adapté pour retirer les voiles de ciment. Les traces de colle sur vitres ou carrelage sont traitées avec des produits spécifiques sans risque pour les supports neufs.</p>",
        },
        {
          question:
            "Quel est votre délai d'intervention pour une remise en état avant état des lieux dans le secteur de la Mairie ?",
          answer:
            "<p><strong>Selon la surface et l'état du logement</strong>, l'intervention peut être planifiée dans des délais courts. Pour les situations urgentes liées à une date d'état des lieux imminente, une organisation en journée ou demi-journée permet de respecter l'échéance convenue avec l'agence ou le propriétaire.</p>",
        },
        {
          question:
            "Comment calculez-vous le coût d'un nettoyage avant état des lieux pour un T3 du parc social à Vitry-sur-Seine ?",
          answer:
            "<p>Le chiffrage prend en compte la surface, le nombre de pièces d'eau et l'état général constaté lors du diagnostic. Un T3 standard avec sols PVC et salle de bain unique représente une base de calcul ; les options comme le nettoyage des vitres ou le traitement de traces spécifiques sont précisées dans le devis.</p>",
        },
        {
          question:
            "Lors d'une remise en état après travaux, comment vous coordonnez-vous avec les artisans et l'agence pour livrer dans les délais ?",
          answer:
            "<p>Un échange préalable avec le maître d'œuvre ou l'agence permet de caler l'intervention après le dernier passage des artisans. Le planning est ajusté si des retouches sont encore en cours. Un compte-rendu est transmis au donneur d'ordre une fois le nettoyage terminé pour valider la mise à disposition du logement.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
