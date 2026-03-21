import type { City } from "~/types/geo";

const city: City = {
  name: "Herblay-sur-Seine",
  slug: "herblay-sur-seine",
  postalCodes: ["95220"],

  department: {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Herblay-sur-Seine pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Nos équipes connaissent les contraintes du secteur, de la gare Transilien aux résidences des Naquettes et du Val d'Herblay.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // pattern : 2 <p> then <ul>
  hubIntro: "<p>Herblay-sur-Seine, desservie par la ligne J du Transilien et proche de la zone commerciale de la Patte d'Oie, concentre un parc immobilier varié. Klinova accompagne syndics, gestionnaires et particuliers dans l'entretien régulier de leurs espaces.</p>\n<p class=\"mt-4\">Notre approche repose sur une organisation adaptée aux réalités du terrain : coordination avec les occupants, interventions planifiées selon les contraintes d'accès, et suivi des prestations réalisées. Un interlocuteur dédié assure la liaison pour chaque site.</p>\n<ul>\n  <li><strong>Réactivité locale :</strong> Équipe basée en Île-de-France, capable d'intervenir rapidement sur Herblay et les communes voisines selon les urgences signalées.</li>\n  <li><strong>Adaptation au bâti :</strong> Méthodes ajustées aux petits collectifs, résidences récentes ou pavillons, avec prise en compte des digicodes et accès restreints.</li>\n  <li>Suivi transparent : Compte-rendu d'intervention disponible, échanges réguliers avec le donneur d'ordre pour ajuster les fréquences si nécessaire.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Halls d'immeubles exposés aux <strong>flux quotidiens</strong> liés à la gare Transilien ligne J.",
    "Parkings souterrains fréquents dans les résidences récentes du Val d'Herblay et des Naquettes.",
    "Balcons et terrasses soumis aux <strong>retombées de poussières</strong> provenant de l'A15.",
    "Digicodes et badges généralisés : coordination préalable indispensable.",
    "Rues étroites en centre-ville compliquant le stationnement des véhicules d'intervention.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Les Naquettes",
    "Les Cailloux Gris",
    "Les Chênes",
    "Le Val d'Herblay",
  ],
  nearbyCities: [
        "franconville",
        "cergy",
        "houilles",
        "saint-germain-en-laye",
        "argenteuil",
        "colombes",
        "nanterre",
        "gennevilliers",
        "asnieres-sur-seine",
        "courbevoie"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Herblay-sur-Seine",
    "Gare d'Herblay",
    "Zone commerciale Patte d'Oie",
    "Théâtre Roger-Barat",
    "Église Saint-Martin",
    "Parc des Femmes Savantes",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous vos interventions dans les résidences proches de la gare d'Herblay ?",
      answer: "<p>Les immeubles situés près de la gare subissent un <strong>trafic piétonnier soutenu</strong>. Nous planifions les passages en dehors des heures de pointe pour limiter la gêne. L'accès par digicode est coordonné en amont avec le syndic ou le gardien, et le stationnement du véhicule est anticipé selon les disponibilités du secteur.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer: "<p>Oui, chaque demande fait l'objet d'une <strong>évaluation préalable</strong>. Nous recueillons les informations sur la surface, le type de revêtement et les contraintes d'accès. Le devis est transmis sous 48 heures, sans engagement. Pour les sites complexes, une visite technique peut être programmée.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur Herblay-sur-Seine ?",
      answer: "<p>Nous traitons les demandes urgentes selon la disponibilité de nos équipes. En cas de <strong>sinistre ou de dégradation importante</strong>, un premier passage peut être organisé sous 24 à 72 heures. Le délai exact dépend de la nature de l'intervention et de l'accessibilité du site.</p>",
    },
    {
      question: "Comment se passe la coordination avec un syndic ou un gestionnaire ?",
      answer: "<p>Un interlocuteur unique centralise les échanges : <strong>planification des interventions</strong>, transmission des comptes-rendus, ajustements de fréquence. Les accès sont préparés en amont pour éviter les allers-retours inutiles. Cette organisation limite les pertes de temps et garantit un suivi régulier.</p>",
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
        "Extraction des salissures incrustées dans vos moquettes, avec un séchage maîtrisé pour limiter l'immobilisation des espaces et retrouver un revêtement propre sous 24 à 48 heures.",
      whyUsBullets: [
        "Connaissance des typologies de bâti à Herblay-sur-Seine, des pavillons aux petits collectifs du Centre-ville.",
        "Matériel d'injection-extraction professionnel, adapté aux moquettes bouclées comme aux velours épais.",
        "Interventions planifiées en dehors des heures de forte affluence pour limiter la gêne des occupants.",
      ],
      uniqueIntro: "<p>Dans le secteur du <strong>Théâtre Roger-Barat</strong>, les halls d'immeubles et les bureaux locaux accumulent poussières et traces de passage au fil des semaines. Les fibres textiles retiennent les particules fines, les résidus de semelles et les taches de boissons renversées. Sans entretien adapté, le revêtement perd son aspect d'origine et dégage parfois des odeurs persistantes.</p>\n<p class=\"mt-4\">Un détachage en profondeur redonne de la tenue aux fibres et améliore l'hygiène globale des espaces. Dans les <strong>petits collectifs et résidences récentes</strong> d'Herblay-sur-Seine, les occupants constatent rapidement la différence : couleurs ravivées, texture plus agréable au toucher, sensation de fraîcheur retrouvée. Les plaintes liées à l'aspect négligé des parties communes diminuent.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des trajets pendulaires vers la ligne J qui génèrent un trafic régulier dans les halls. Un diagnostic préalable identifie les zones les plus sollicitées, les types de taches présentes et les contraintes d'accès pour planifier chaque étape.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\n<p>Les entrées et couloirs principaux concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le traitement humide. Les plinthes et bas de murs reçoivent une protection pour éviter les projections.</p>\n\n<h3>Surfaces intermédiaires et angles</h3>\n<p>Les espaces sous mobilier et les recoins accumulent des dépôts moins visibles mais tenaces. L'injection-extraction permet de déloger ces résidus en profondeur. Les passes sont adaptées selon l'épaisseur du textile, bouclé ou velours.</p>\n\n<h3>Finitions et séchage contrôlé</h3>\n<p>Les taches résiduelles font l'objet d'un détachage ciblé avec des produits adaptés à la nature du support. L'extraction maximale de l'humidité réduit le temps de séchage à 12-24 heures selon la ventilation. Une consigne de non-piétinement est communiquée pour garantir un résultat durable.</p>",
      specificChallenges: [
        "Halls de petits collectifs avec digicodes : <strong>coordination nécessaire</strong> pour l'accès du matériel.",
        "Moquettes bouclées sensibles aux <strong>fibres écrasées</strong> par le trafic quotidien vers la gare.",
        "Taches de tanin et café fréquentes dans les bureaux locaux du Centre-ville.",
        "Séchage à maîtriser dans les résidences récentes avec ventilation variable.",
        "Stationnement du véhicule d'intervention parfois contraint près de la Mairie.",
      ],
      faqAdditions: [
        {
          question: "Dans les petits collectifs du Centre-ville, comment gérez-vous l'accès aux halls et le passage du matériel pour une moquette ?",
          answer: "<p>Nous coordonnons l'intervention avec le gardien ou le syndic pour obtenir les codes d'accès. Le matériel compact passe par les escaliers si nécessaire. Les protections sont installées sur les plinthes et seuils avant de commencer le traitement.</p>",
        },
        {
          question: "Après des passages répétés vers la gare d'Herblay, comment traitez-vous les taches anciennes et incrustées sur une moquette ?",
          answer: "<p>Les taches anciennes nécessitent un pré-traitement ciblé avant l'injection-extraction. Nous appliquons un détachant adapté à la nature du dépôt, puis réalisons plusieurs passes sur les zones concernées. Le résultat dépend de l'ancienneté et du type de salissure.</p>",
        },
        {
          question: "Pour les halls de copropriété et les bureaux d'Herblay-sur-Seine, quelle méthode de nettoyage de moquette est la plus adaptée ?",
          answer: "<p>L'injection-extraction convient aux deux contextes car elle retire les salissures en profondeur tout en limitant le temps de séchage. Pour les bureaux avec mobilier fixe, nous adaptons les passes. Les halls bénéficient d'un balisage temporaire pendant l'intervention.</p>",
        },
        {
          question: "Sur une moquette bouclée de logement résidentiel à Herblay-sur-Seine, comment adaptez-vous la méthode sans abîmer les fibres ?",
          answer: "<p>La pression d'injection est réduite pour préserver la structure bouclée. Les brosses rotatives sont évitées au profit d'un travail manuel sur les zones fragiles. L'extraction reste complète pour garantir un séchage rapide sans déformation des fibres.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec traitement des traces d'hydrocarbures, lavage mécanisé et gestion rigoureuse des eaux usées.",
      whyUsBullets: [
        "Connaissance des configurations locales, des accès contraints et des parkings souterrains fréquents à Herblay-sur-Seine.",
        "Autolaveuse professionnelle et dégraissants adaptés au béton brut comme au béton peint, avec gestion stricte des eaux.",
        "Coordination avec le syndic pour le balisage, la rotation des véhicules et le compte-rendu d'intervention.",
      ],
      uniqueIntro: "<p>Comment préserver un sol de parking propre et sécurisé quand le trafic quotidien dépose huile, poussières et résidus de pneus ? À proximité de l'Église Saint-Martin, les résidences du centre-ville concentrent des parkings souterrains soumis à une circulation régulière. Les traces s'accumulent sur le béton, <strong>les rigoles se bouchent</strong>, et l'aspect général se dégrade rapidement sans intervention adaptée.</p>\n<p class=\"mt-4\">Un lavage structuré redonne aux sols leur adhérence et leur propreté. Les copropriétés équipées de sous-sols en béton brut ou béton peint constatent une amélioration visible dès la première intervention : moins de poussière en suspension, surfaces dégraissées, évacuations fonctionnelles. L'image de la résidence s'en trouve renforcée auprès des occupants et visiteurs.</p>\n<p class=\"mt-4\">Le flux généré par la zone commerciale Patte d'Oie et la proximité de l'A15 accentuent l'encrassement des parkings alentour. Une intervention planifiée, avec diagnostic préalable et coordination des accès, permet de traiter l'ensemble des zones critiques sans perturber la rotation des véhicules.</p>",
      uniqueDeepDive: "<h3>Encrassement et obstruction des évacuations</h3>\n<p>Le diagnostic identifie le type de revêtement, l'état des regards et rigoles, ainsi que le niveau de salissure. Un balayage préalable élimine les débris grossiers avant toute action humide.</p>\n<p class=\"mt-4\">Le balisage sécurise les zones de passage et organise la rotation des véhicules stationnés.</p>\n\n<h3>Traces d'hydrocarbures et dépôts tenaces</h3>\n<p>L'autolaveuse combinée à un dégraissant adapté traite les surfaces en passes mécanisées. Les zones critiques reçoivent une attention particulière : rampes d'accès, angles morts, pieds de murs.</p>\n<p class=\"mt-4\">La haute pression intervient sur les taches anciennes ou les revêtements texturés nécessitant un décrassage renforcé.</p>\n\n<h3>Gestion des eaux et finitions</h3>\n<p>Les eaux de lavage sont canalisées vers les évacuations existantes, sans rejet sauvage. Les rigoles sont dégagées pour garantir un écoulement correct.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention sur demande. Une recommandation de fréquence est transmise au gestionnaire selon le trafic observé.</p>",
      specificChallenges: [
        "Parkings souterrains avec ventilation limitée et sols en béton brut encrassés par les hydrocarbures.",
        "Traces de pneus et dépôts graisseux concentrés sur les <strong>rampes d'accès</strong> et zones de manœuvre.",
        "Rigoles et regards <strong>obstrués</strong> par les poussières liées au trafic de la zone Patte d'Oie.",
        "Coordination nécessaire pour maintenir l'accès aux résidents pendant l'intervention.",
        "Revêtements variés (béton peint, béton brut) nécessitant un ajustement du matériel.",
      ],
      faqAdditions: [
        {
          question: "Dans les parkings souterrains proches du centre-ville, comment éliminez-vous les taches d'huile anciennes sur le béton peint ?",
          answer: "<p>Un dégraissant professionnel est appliqué sur les zones concernées avant le passage de l'autolaveuse. Les taches anciennes nécessitent parfois plusieurs passes ou un traitement localisé à la haute pression. Le béton peint supporte bien cette méthode sans dégradation du revêtement.</p>",
        },
        {
          question: "Près de la zone commerciale Patte d'Oie, comment gérez-vous les eaux de lavage lors du nettoyage d'un parking ?",
          answer: "<p>Les eaux chargées sont dirigées vers les évacuations existantes après vérification de leur bon fonctionnement. Aucun rejet sauvage n'est effectué. Les rigoles sont dégagées en amont pour garantir un écoulement correct tout au long de l'intervention.</p>",
        },
        {
          question: "Avec les flux liés à la gare d'Herblay, comment organisez-vous le balisage et la sécurité des usagers dans un parking souterrain ?",
          answer: "<p>Un balisage signalétique délimite les zones en cours de traitement. La rotation des véhicules est coordonnée avec le gestionnaire pour maintenir un accès partiel aux résidents. Les horaires d'intervention peuvent être adaptés aux périodes de moindre affluence.</p>",
        },
        {
          question: "À Herblay-sur-Seine, quelle différence de méthode appliquez-vous entre un parking souterrain et un parking aérien de résidence ?",
          answer: "<p>En souterrain, la ventilation limitée impose un séchage plus long et une attention particulière aux évacuations. En aérien, l'exposition aux intempéries génère davantage de mousses et salissures organiques, traitées avec des produits adaptés. Le matériel reste identique, seul le protocole s'ajuste.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon : traitement des dépôts, nettoyage du sol et des garde-corps, gestion contrôlée de l'eau pour éviter les coulures chez vos voisins.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux retombées de l'A15 et des quartiers résidentiels comme Les Naquettes.",
        "Pression ajustée selon le support, carrelage ou béton, pour préserver joints et revêtement.",
        "Protection systématique contre les coulures vers les étages inférieurs et coordination discrète avec les occupants.",
      ],
      uniqueIntro: "<p>Les traces grises et les dépôts noirâtres sont visibles sur de nombreux balcons à Herblay-sur-Seine, particulièrement dans les secteurs exposés aux retombées de l'autoroute A15. Poussières fines, particules de pollution et résidus de pluie s'accumulent sur le carrelage, les joints et les garde-corps. En quelques mois, la surface perd son aspect d'origine et <strong>devient glissante</strong> par temps humide.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change l'usage quotidien de cet espace. Dans les petits collectifs et résidences récentes de la commune, le balcon sert souvent d'extension du séjour aux beaux jours. Un sol encrassé ou des garde-corps ternes découragent d'y installer table et chaises. Après intervention, vous récupérez un espace agréable, plus sûr et visuellement net.</p>\n<p class=\"mt-4\">Notre intervention s'adapte au tissu résidentiel d'Herblay-sur-Seine. Nous évaluons l'état du support, identifions les zones les plus marquées et protégeons le mobilier ou les plantes présentes avant de commencer le travail.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous déplaçons ou bâchons le mobilier et les plantes pour dégager l'espace de travail. Les menuiseries, fenêtres et seuils sont protégés contre les projections d'eau et de produit.</p>\n<p class=\"mt-4\">Les gros débris, feuilles mortes et terre accumulée sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Nettoyage et traitement du support</h3>\n<p>Un produit adapté au carrelage grès ou au béton brut est appliqué sur l'ensemble de la surface. Le brossage, manuel ou mécanique selon l'encrassement, décolle les salissures incrustées dans les joints et les pores du matériau.</p>\n<p class=\"mt-4\">Les garde-corps et murs mitoyens accessibles sont traités dans la foulée. Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles.</p>\n\n<h3>Gestion de l'eau et finalisation</h3>\n<p>L'écoulement est maîtrisé pour éviter les coulures chez les voisins du dessous. Nous vérifions l'absence de traces résiduelles et laissons sécher naturellement. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Pollution routière A15 : <strong>dépôts gras</strong> et poussières fines sur les balcons exposés côté voie rapide.",
        "Joints de carrelage poreux qui retiennent les salissures malgré un balayage régulier.",
        "Gestion de l'eau délicate en copropriété pour éviter les <strong>coulures chez les voisins</strong> du dessous.",
        "Balcons ouverts soumis aux intempéries avec accumulation rapide de mousses et dépôts verts.",
        "Accès par digicodes et badges dans les résidences récentes du quartier des Naquettes.",
      ],
      faqAdditions: [
        {
          question: "Sur les balcons exposés côté A15 à Herblay-sur-Seine, comment nettoyez-vous sans fragiliser le carrelage et les joints ?",
          answer: "<p>Nous utilisons une pression contrôlée et un produit adapté au carrelage grès. Le brossage cible les zones encrassées sans attaquer les joints. Cette approche retire les dépôts de pollution sans créer de fissures ni décoller le revêtement, même sur des surfaces exposées aux retombées routières.</p>",
        },
        {
          question: "Dans les résidences du Val d'Herblay, comment gérez-vous l'eau et les coulures pendant un nettoyage de balcon ?",
          answer: "<p>L'écoulement est orienté vers les évacuations existantes. Nous limitons le volume d'eau utilisé et contrôlons le rinçage pour éviter les projections vers les balcons inférieurs. Si nécessaire, des protections sont posées en bordure pour contenir les ruissellements pendant l'intervention.</p>",
        },
        {
          question: "Près des zones arborées d'Herblay-sur-Seine, comment retirez-vous les dépôts verts et les mousses sur un balcon ?",
          answer: "<p>Un traitement spécifique est appliqué sur les zones colonisées par les mousses. Le brossage mécanique décolle les dépôts verts sans rayer le support. Le rinçage élimine les résidus et freine la repousse. Sur les balcons ombragés, nous conseillons un entretien plus fréquent pour limiter le retour des mousses.</p>",
        },
        {
          question: "Sur un balcon ouvert d'Herblay-sur-Seine, pourquoi privilégier un nettoyage sans haute pression pour préserver le support ?",
          answer: "<p>La haute pression peut dégrader les joints anciens ou fragiliser un carrelage poreux. Nous adaptons la pression au support constaté lors du diagnostic. Sur les balcons ouverts des petits collectifs, cette précaution évite les infiltrations et prolonge la durée de vie du revêtement existant.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et mise en place de solutions pour limiter le retour des volatiles.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Herblay-sur-Seine, notamment les zones proches des bords de Seine et des parcs arborés.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide systématique après chaque intervention.",
        "Coordination avec les occupants pour l'accès aux immeubles et protection du voisinage pendant le traitement.",
      ],
      uniqueIntro: "<p>Après quelques semaines d'accumulation, les fientes de pigeons transforment un balcon en espace inutilisable. Dans le quartier du Val d'Herblay comme aux abords des bords de Seine, les résidents constatent souvent des dépôts épais sur le sol, les garde-corps et les rebords de fenêtres. <strong>L'odeur s'installe</strong>, le linge ne peut plus sécher dehors, et la gêne devient quotidienne.</p>\n<p class=\"mt-4\">Au-delà de l'aspect visuel, ces déjections attaquent progressivement les supports. Sur les petits collectifs et résidences récentes d'Herblay-sur-Seine, le carrelage grès ou le béton brut des balcons se dégrade sous l'acidité des fientes. Les traces persistent même après un simple rinçage, et les risques sanitaires liés aux agents pathogènes présents dans ces déjections justifient une intervention structurée.</p>\n<p class=\"mt-4\">Notre traitement combine nettoyage mécanique, désinfection virucide et conseils de prévention. Nous intervenons en tenant compte des contraintes d'accès aux immeubles équipés de digicodes, avec une attention particulière à la protection du voisinage pendant l'opération.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement de la zone</h3>\n<p>L'intervention débute par l'équipement de nos techniciens : masque FFP2, gants, lunettes et combinaison jetable. Le balcon est isolé par bâchage pour éviter toute dispersion de particules vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées.</p>\n\n<h3>Nettoyage et désinfection des supports</h3>\n<p>Le ramassage des déjections s'effectue manuellement, avec conditionnement en sacs étanches. Sol, garde-corps, vitrages et murs mitoyens sont ensuite traités.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces, avec respect du temps de contact nécessaire à l'élimination des agents pathogènes.</p>\n\n<h3>Rinçage et recommandations anti-retour</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation sous 24 à 48 heures selon les conditions de séchage. Les déchets sont évacués en sacs étanches.</p>\n<p class=\"mt-4\">Nous proposons si besoin la pose de pics anti-pigeons sur les corniches ou rebords pour réduire les risques de réinfestation.</p>",
      specificChallenges: [
        "Proximité des bords de Seine : secteur propice à la présence de pigeons toute l'année.",
        "Balcons exposés aux arbres du Parc des Femmes Savantes, accumulation rapide de fientes.",
        "Carrelage grès et béton brut <strong>attaqués par l'acidité</strong> des déjections sur les résidences récentes.",
        "Accès aux immeubles par digicode nécessitant une coordination préalable avec les occupants.",
        "Odeurs persistantes si le traitement ne comprend pas de désinfection complète.",
      ],
      faqAdditions: [
        {
          question: "Quels risques sanitaires justifient une intervention rapide sur des fientes de pigeons près du Parc des Femmes Savantes à Herblay-sur-Seine ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent provoquer des troubles respiratoires. Dans les secteurs arborés comme autour du parc, l'accumulation est souvent plus rapide. Une intervention permet de supprimer ces risques et de retrouver un balcon utilisable.</p>",
        },
        {
          question: "Sur les corniches et façades des résidences d'Herblay-sur-Seine, quel protocole de sécurité appliquez-vous pour traiter les fientes ?",
          answer: "<p>Nos techniciens portent systématiquement masque FFP2, gants, lunettes et combinaison jetable. La zone est confinée par bâchage avant toute manipulation. Les fientes sont humidifiées pour éviter l'envol de particules contaminées, puis collectées et conditionnées en sacs étanches.</p>",
        },
        {
          question: "Après le nettoyage de fientes sur un balcon à Herblay-sur-Seine, quelle désinfection appliquez-vous ?",
          answer: "<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué sur toutes les surfaces traitées. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes. Cette étape est indispensable pour sécuriser durablement l'espace avant sa réutilisation.</p>",
        },
        {
          question: "Près des bords de Seine à Herblay-sur-Seine, quelles zones de balcons sont les plus exposées aux fientes de pigeons ?",
          answer: "<p>Les balcons orientés vers les espaces verts et les bords de Seine subissent une pression plus forte. Les corniches, rebords de fenêtres et garde-corps constituent des points de repos pour les volatiles. Après nettoyage, nous pouvons installer des dispositifs dissuasifs pour limiter leur retour.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Vos canapés, tapis et matelas retrouvent fraîcheur et propreté grâce à un détachage ciblé et une extraction en profondeur, avec séchage rapide pour une utilisation dès le lendemain.",
      whyUsBullets: [
        "Connaissance des logements familiaux d'Herblay-sur-Seine, du Val d'Herblay aux Cailloux Gris.",
        "Détachage enzymatique ciblé et extraction textile sans excès d'humidité pour un séchage rapide.",
        "Organisation souple : créneau adapté à vos disponibilités, gestion autonome de l'accès et du matériel.",
      ],
      uniqueIntro: "<p>Dans le secteur proche du Centre aquatique intercommunal et jusqu'aux Cailloux Gris, les canapés des foyers herblaysiens accumulent au fil des mois taches de café, traces laissées par les enfants ou salissures liées aux animaux de compagnie. Ces marques <strong>s'incrustent dans les fibres</strong> et deviennent difficiles à éliminer avec un simple aspirateur ou un produit du commerce.</p>\n<p class=\"mt-4\">Un nettoyage en profondeur change concrètement le quotidien : les odeurs persistantes disparaissent, les couleurs du tissu ou du cuir retrouvent leur éclat, et l'ensemble du salon gagne en confort. Dans les petits collectifs et résidences récentes d'Herblay-sur-Seine, où les pièces de vie sont souvent ouvertes, un mobilier propre contribue directement à l'atmosphère du logement.</p>\n<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic textile préalable, suivi d'un traitement adapté à chaque support. Les contraintes d'accès aux étages et le stationnement du matériel dans les quartiers résidentiels sont anticipés pour limiter toute gêne.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'obtenir un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus incrustés. Pour y parvenir, nous identifions d'abord le type de tissu (coton, synthétique, velours, cuir) et la nature des taches présentes.</p>\n<p class=\"mt-4\">Un test discret sur une zone cachée permet de valider la compatibilité du traitement avec les fibres fragiles.</p>\n\n<h3>Détachage ciblé et injection-extraction</h3>\n<p>Les taches tenaces (café, vin, urine, graisse) reçoivent un pré-traitement enzymatique adapté. L'injection-extraction textile déloge ensuite les salissures en profondeur sans détremper le support.</p>\n<p class=\"mt-4\">La pression et la température sont ajustées selon l'épaisseur et la sensibilité du revêtement.</p>\n\n<h3>Séchage et remise en service</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon la saison et l'aération du logement, le mobilier est utilisable sous 12 à 24 heures.</p>\n<p class=\"mt-4\">Nous transmettons des conseils d'usage et une fréquence d'entretien adaptée à votre situation (présence d'enfants, animaux).</p>",
      specificChallenges: [
        "Taches d'enfants et d'animaux <strong>fréquentes</strong> dans les foyers des quartiers pavillonnaires.",
        "Textiles variés (tissu, cuir, velours) nécessitant une adaptation du traitement.",
        "Accès aux étages dans les petits collectifs avec digicodes et escaliers étroits.",
        "Stationnement du matériel parfois contraint dans les rues résidentielles du centre.",
        "Séchage à anticiper selon <strong>l'aération</strong> et la saison pour une remise en service rapide.",
      ],
      faqAdditions: [
        {
          question: "Dans les logements familiaux d'Herblay-sur-Seine, comment le nettoyage de canapé et tapis réduit-il acariens et allergènes ?",
          answer: "<p>L'injection-extraction déloge les acariens, poussières et allergènes piégés dans les fibres. Le traitement en profondeur assainit le textile sans laisser de résidus chimiques, ce qui améliore la qualité de l'air intérieur pour les occupants sensibles ou les jeunes enfants.</p>",
        },
        {
          question: "À Herblay-sur-Seine, comment traitez-vous les odeurs d'animaux et l'urine sur un canapé en tissu ou un tapis ?",
          answer: "<p>Un pré-traitement enzymatique cible les molécules responsables des odeurs. L'extraction élimine ensuite les résidus en profondeur. Cette méthode neutralise durablement les traces d'urine ou de marquage, même anciennes, sans abîmer les fibres du textile.</p>",
        },
        {
          question: "Pour un canapé en tissu ou en cuir dans le quartier des Cailloux Gris, comment adaptez-vous la méthode au textile ?",
          answer: "<p>Chaque matière reçoit un traitement spécifique : pression réduite et produits doux pour le cuir, extraction textile classique pour le coton ou le synthétique. Un test préalable sur zone cachée garantit l'absence de décoloration ou de déformation.</p>",
        },
        {
          question: "Dans les quartiers résidentiels d'Herblay-sur-Seine, comment gérez-vous l'accès et le stationnement du matériel pour intervenir sur un canapé ou un tapis ?",
          answer: "<p>Nous anticipons les contraintes d'accès (digicodes, escaliers, étages sans ascenseur) et identifions un point de stationnement adapté. Le matériel est transportable et l'intervention s'organise pour limiter les allers-retours et la gêne dans les parties communes.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses, pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des expositions locales : zones ombragées, proximité d'arbres et humidité fréquente dans les secteurs pavillonnaires.",
        "Adaptation du traitement selon le support : pierre naturelle, bois, composite ou dalles, avec application anti-mousse ciblée.",
        "Protection systématique du mobilier et des plantes, gestion maîtrisée de l'écoulement d'eau vers les évacuations.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect et la sécurité d'une terrasse quand les mousses s'installent saison après saison ? Dans le <strong>quartier des Cailloux Gris</strong>, les surfaces extérieures des pavillons subissent l'accumulation de dépôts verts, de feuilles et de salissures liées à l'humidité ambiante. Le sol devient glissant, les joints verdissent, et l'espace perd progressivement son attrait.</p>\n<p class=\"mt-4\">Un entretien adapté redonne à la terrasse sa fonction première : un prolongement agréable du logement. Les dalles sur plots, le bois ou le carrelage présents sur les résidences récentes et les pavillons nécessitent chacun une approche spécifique pour éviter toute dégradation. Un traitement bien conduit élimine les dépôts tenaces et limite leur retour pendant plusieurs mois.</p>\n<p class=\"mt-4\">L'intervention prend en compte les contraintes propres aux zones résidentielles : protection du mobilier extérieur, gestion de l'écoulement d'eau, respect du voisinage. Chaque étape suit un ordre précis, du diagnostic initial jusqu'aux conseils d'entretien saisonnier.</p>",
      uniqueDeepDive: "<h3>Préparation et dégagement</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou protégés par bâchage. Les menuiseries et baies vitrées reçoivent une protection adaptée pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage préalable retire les feuilles, débris et gros dépôts de terre accumulés sur la surface.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour pierre, bois composite ou carrelage. Le brossage manuel ou mécanique décolle les mousses et lichens incrustés.</p>\n<p class=\"mt-4\">La haute pression intervient uniquement sur les matériaux qui la supportent, avec une intensité contrôlée pour préserver les joints et les surfaces poreuses.</p>\n\n<h3>Finalisation et séchage</h3>\n<p>Les garde-corps, murets et escaliers extérieurs sont traités si nécessaire. L'eau est dirigée vers les points d'écoulement, en veillant à protéger les plantations environnantes.</p>\n<p class=\"mt-4\">Un temps de séchage est respecté avant la remise en place du mobilier. Des conseils d'entretien saisonnier sont transmis pour prolonger le résultat.</p>",
      specificChallenges: [
        "Mousses et lichens qui <strong>s'étendent chaque année</strong> sur les terrasses exposées à l'humidité.",
        "Supports variés (dalles, bois, pierre) nécessitant des méthodes de nettoyage différenciées.",
        "Gestion de <strong>l'écoulement d'eau</strong> sans affecter les plantations ni le voisinage en zone pavillonnaire.",
        "Feuilles et débris végétaux accumulés dans les secteurs proches des espaces verts.",
        "Surfaces devenues glissantes représentant un risque au quotidien.",
      ],
      faqAdditions: [
        {
          question: "Dans les pavillons du quartier des Cailloux Gris, comment nettoyez-vous une terrasse en pierre ou en bois sans abîmer le support ?",
          answer: "<p>Chaque matériau reçoit un traitement adapté. La pierre naturelle supporte un brossage mécanique avec produit alcalin doux, tandis que le bois nécessite une pression réduite et un nettoyant spécifique pour préserver les fibres. Nous vérifions systématiquement la réaction du support avant d'intervenir sur l'ensemble de la surface.</p>",
        },
        {
          question: "En secteur résidentiel à Herblay-sur-Seine, comment éliminez-vous les mousses et lichens sur une terrasse exposée à l'humidité ?",
          answer: "<p>Le traitement combine un brossage pour décoller les dépôts verts et l'application d'un produit anti-mousse adapté au support. Sur les zones très envahies, une seconde passe peut être nécessaire. Le produit agit également en prévention pour ralentir la réapparition des mousses pendant plusieurs mois.</p>",
        },
        {
          question: "À Herblay-sur-Seine, quelle différence faites-vous entre le nettoyage de dalles sur plots et celui d'une terrasse en bois ?",
          answer: "<p>Les dalles sur plots permettent un nettoyage plus intensif avec accès aux joints et évacuation facilitée de l'eau. Le bois demande une approche plus douce : pression contrôlée, sens des fibres respecté, et séchage surveillé pour éviter le grisaillement. Les produits utilisés diffèrent également selon la nature du matériau.</p>",
        },
        {
          question: "Sur une terrasse de pavillon à Herblay-sur-Seine, pourquoi privilégier un nettoyage doux plutôt que la haute pression systématique ?",
          answer: "<p>La haute pression peut endommager les joints, creuser les matériaux poreux ou dégrader les surfaces en bois. Un nettoyage adapté combine brossage mécanique et pression ajustée selon le support. Cette méthode préserve l'intégrité de la terrasse tout en obtenant un résultat durable, particulièrement sur les revêtements des résidences récentes.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux ou avant état des lieux, avec nettoyage minutieux de chaque pièce et coordination adaptée à vos délais.",
      whyUsBullets: [
        "Connaissance des typologies résidentielles d'Herblay-sur-Seine, des pavillons aux petits collectifs récents.",
        "Polyvalence sur les différents revêtements : parquet, carrelage, lino, avec produits adaptés à chaque support.",
        "Coordination avec agences et artisans, respect des délais serrés et gestion des accès par digicode.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'une remise de clés, les logements du quartier des Naquettes présentent souvent un état qui complique la suite des opérations. Poussières de plâtre sur les plinthes, résidus de joint dans la salle de bain, traces de pas sur le parquet : ces détails retardent la signature d'un état des lieux ou l'installation des nouveaux occupants. La pression des délais s'ajoute à la difficulté de tout remettre en ordre soi-même.</p>\n<p class=\"mt-4\">Un logement propre facilite la transition entre deux locataires et évite les litiges sur l'état du bien. Dans les petits collectifs et résidences récentes d'Herblay-sur-Seine, les sols en parquet, carrelage ou lino demandent un traitement adapté pour retrouver leur aspect d'origine. Les pièces d'eau nécessitent une attention particulière sur les joints et la robinetterie.</p>\n<p class=\"mt-4\">Notre intervention s'organise en coordination avec les particuliers, agences immobilières ou artisans présents sur le chantier. Le planning tient compte des contraintes d'accès aux immeubles équipés de digicodes et du stationnement en zone résidentielle.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être occupé ou restitué</h3>\n<p>L'objectif est de rendre chaque pièce dans un état permettant une remise de clés sans réserve. Sols débarrassés de toute trace, vitres intérieures transparentes, sanitaires désinfectés. Le résultat correspond aux attentes d'un propriétaire, d'une agence ou d'un nouveau locataire.</p>\n\n<h3>Diagnostic et organisation de l'intervention</h3>\n<p>Avant de commencer, nous évaluons l'état général du bien : nature des salissures, type de sols, présence de résidus de chantier. Cette étape permet d'adapter le matériel et de définir l'ordre des pièces à traiter. La coordination avec les autres intervenants est calée à ce moment.</p>\n\n<h3>Nettoyage complet et finitions</h3>\n<p>Le dépoussiérage débute par les hauteurs puis descend vers les sols. Les pièces d'eau reçoivent un traitement détartrant sur la faïence et les équipements. Les interrupteurs, poignées et placards sont essuyés. Une ventilation clôture l'intervention pour un séchage rapide des surfaces.</p>",
      specificChallenges: [
        "Résidus de plâtre et enduit persistants après travaux dans les logements du Val d'Herblay.",
        "Coordination avec les agences immobilières pour respecter les délais d'état des lieux.",
        "Accès aux immeubles par digicode nécessitant une organisation préalable.",
        "Stationnement du matériel en zone résidentielle parfois contraint.",
        "Sols variés (parquet, carrelage, lino) demandant des méthodes différenciées.",
      ],
      faqAdditions: [
        {
          question: "Dans le quartier des Naquettes, comment organisez-vous une intervention rapide de nettoyage avant un état des lieux ?",
          answer: "<p>Nous planifions l'intervention dès réception de votre demande, en tenant compte des contraintes d'accès aux immeubles équipés de digicodes. La coordination avec l'agence ou le propriétaire permet de caler un créneau adapté au planning de remise des clés, même sous quelques jours.</p>",
        },
        {
          question: "À Herblay-sur-Seine, quelle différence faites-vous entre un ménage standard et un nettoyage de fin de chantier ?",
          answer: "<p>Un ménage standard porte sur l'entretien courant des surfaces. Le nettoyage fin de chantier inclut l'élimination des poussières de plâtre, des traces de peinture ou de colle, et un traitement approfondi des sols parquet, carrelage ou lino présents dans les logements de la commune.</p>",
        },
        {
          question: "Dans le Val d'Herblay, comment retirez-vous les traces de peinture ou de colle après travaux dans un appartement ?",
          answer: "<p>Nous utilisons des produits adaptés au type de support pour ramollir les résidus sans abîmer la surface. Un grattage manuel précède le nettoyage humide. Sur parquet ou carrelage, cette méthode évite les rayures tout en éliminant les dépôts tenaces laissés par les artisans.</p>",
        },
        {
          question: "En zone résidentielle à Herblay-sur-Seine, comment gérez-vous l'accès au logement et le stationnement du matériel de nettoyage ?",
          answer: "<p>Nous récupérons les codes d'accès ou badges en amont auprès du donneur d'ordre. Le stationnement est anticipé selon la configuration du quartier, avec repérage préalable si nécessaire. Cette organisation limite les allers-retours et garantit une intervention fluide malgré les contraintes locales.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;