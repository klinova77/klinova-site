import type { City } from "~/types/geo";

const city: City = {
  name: "Clichy",
  slug: "clichy",
  postalCodes: ["92110"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Clichy pour l'entretien des parties communes, parkings et espaces extérieurs. Nos équipes connaissent les contraintes du secteur, entre immeubles anciens du Centre-ville et résidences récentes des Berges de Seine-Beaujon.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Commune de la Métropole du Grand Paris desservie par la ligne 13 du métro et le Transilien L à la gare Clichy-Levallois, Clichy cumule flux quotidiens et densité résidentielle. Klinova s'y positionne comme partenaire terrain pour syndics, gestionnaires et occupants.</p>\n<p class=\"mt-4\">Notre organisation repose sur une coordination directe avec vos interlocuteurs : <strong>planification adaptée aux contraintes d'accès</strong>, interventions calées sur vos disponibilités, reporting transmis sur demande. Chaque prestation s'ajuste au bâti et aux usages réels.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Équipes basées en Île-de-France, déplacements rapides sur Clichy et communes limitrophes. Prise en charge sous 48 à 72h selon disponibilité.</li>\n  <li><strong>Adaptation au bâti :</strong> Immeubles anciens avec cages étroites, résidences récentes avec digicodes — nos méthodes s'ajustent aux configurations rencontrées boulevard Jean-Jaurès ou quartier Bac d'Asnières.</li>\n  <li><strong>Coordination simplifiée :</strong> Un interlocuteur unique pour le suivi, transmission des accès, gestion des créneaux horaires et retour d'intervention.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Densité urbaine élevée</strong> : stationnement contraint et accès immeubles par digicode fréquent.",
    "Immeubles anciens du Centre-ville avec <strong>cages d'escalier étroites</strong> limitant le passage de matériel.",
    "Proximité du boulevard Périphérique : <strong>dépôts de poussières</strong> accélérés sur balcons et parties communes.",
    "Flux piétons importants autour de la <strong>Mairie de Clichy</strong> (Ligne 13) : halls sollicités quotidiennement.",
    "Résidences récentes des Berges de Seine-Beaujon avec <strong>terrasses sur toit</strong> nécessitant accès spécifique.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Bac d'Asnières",
    "Berges de Seine-Beaujon",
    "Victor Hugo-République",
    "Entrée de ville",
  ],
  nearbyCities: [
    "Levallois-Perret",
    "Asnières-sur-Seine",
    "Saint-Ouen-sur-Seine",
    "Paris 17e",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Clichy",
    "Parc Roger Salengro",
    "Gare Clichy-Levallois",
    "Métro 13 - Mairie de Clichy",
    "Hôpital Beaujon",
    "Boulevard Jean-Jaurès",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les immeubles avec digicode à Clichy ?",
      answer: "<p>Nous récupérons les <strong>codes d'accès ou badges</strong> en amont auprès du syndic ou du gardien. Le jour de l'intervention, notre équipe arrive équipée et autonome. Si un accès pose problème, nous contactons directement votre gestionnaire pour débloquer la situation sans retarder le chantier.</p>",
    },
    {
      question: "Quel délai prévoir pour une première intervention sur le secteur ?",
      answer: "<p>En fonction de la nature de la prestation et de notre planning, comptez généralement <strong>48 à 72 heures</strong> après validation du devis. Pour les demandes urgentes — dégât des eaux, souillures importantes — nous étudions une prise en charge accélérée selon disponibilité des équipes.</p>",
    },
    {
      question:
        "Le stationnement est compliqué près du Centre-ville, comment gérez-vous cela ?",
      answer: "<p>Nos véhicules utilitaires sont équipés pour des <strong>arrêts courts en zone dense</strong>. Nous privilégions les créneaux horaires où le stationnement est moins contraint, et nous coordonnons avec le gardien ou le syndic si un emplacement réservé peut être libéré temporairement.</p>",
    },
    {
      question:
        "Proposez-vous un suivi après intervention pour les gestionnaires d'immeubles ?",
      answer: "<p>Oui. Sur demande, nous transmettons un <strong>compte-rendu d'intervention</strong> détaillant les zones traitées, les éventuelles observations terrain et les recommandations d'entretien. Ce reporting facilite le suivi pour les syndics gérant plusieurs résidences sur Clichy.</p>",
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
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec un séchage maîtrisé pour limiter l'interruption d'activité dans vos locaux ou parties communes.",
      whyUsBullets: [
        "Connaissance des typologies de bâti à Clichy, des immeubles anciens aux résidences récentes du quartier Entrée de ville.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux moquettes bouclées épaisses.",
        "Intervention planifiable en horaires décalés pour limiter la gêne dans les bureaux ou parties communes.",
      ],
      uniqueIntro: "<p>Dans le secteur d'Entrée de ville à Clichy, les bureaux et halls d'immeubles accueillent chaque jour un trafic soutenu. Les dalles textiles des open spaces accumulent poussières fines et traces de semelles, tandis que les moquettes bouclées des copropriétés retiennent particules et résidus apportés depuis les transports. Ces fibres, sollicitées en continu, perdent leur aspect d'origine et deviennent ternes au fil des passages.</p>\n<p class=\"mt-4\">Un entretien régulier redonne aux revêtements leur tenue visuelle et contribue à un environnement plus sain. Dans les immeubles anciens ou les petits collectifs du centre-ville, les résidents constatent rapidement la différence après une intervention : <strong>couleurs ravivées, texture plus agréable</strong> au toucher, sensation de propreté durable. Pour les locaux professionnels, c'est aussi une question d'image auprès des visiteurs et collaborateurs.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des contraintes d'accès par digicode et du stationnement souvent limité. Un diagnostic préalable permet d'adapter le protocole aux fibres présentes et aux zones les plus sollicitées.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\n<p>Les couloirs, entrées et espaces de circulation concentrent l'essentiel des salissures. Après une aspiration préalable, le traitement par injection-extraction cible ces surfaces en priorité. <strong>Plusieurs passes successives</strong> délogent les particules enfoncées dans les fibres.</p>\n\n<h3>Surfaces de travail et espaces communs</h3>\n<p>Les open spaces, salles de réunion ou halls de copropriété reçoivent un détachage ciblé sur les taches visibles. <strong>Le réglage de pression s'adapte</strong> selon qu'il s'agit de dalles textiles fines ou de moquettes bouclées plus épaisses. Les plinthes et bas de murs sont protégés pendant l'opération.</p>\n\n<h3>Finitions et gestion du séchage</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon la ventilation du local. Une consigne de non-piétinement est communiquée pour préserver le résultat. La fréquence d'entretien recommandée dépend du trafic observé dans chaque zone.</p>",
      specificChallenges: [
        "<strong>Dalles textiles des bureaux</strong> proches de la gare Clichy-Levallois soumises à un trafic quotidien dense.",
        "Moquettes bouclées en copropriété retenant poussières et résidus malgré l'aspirateur.",
        "Accès par digicode et stationnement contraint dans les rues du centre-ville.",
        "Taches anciennes de café ou tanin <strong>incrustées dans les fibres</strong> des salles de réunion.",
        "Séchage à coordonner avec les horaires d'occupation des locaux professionnels.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les immeubles du centre-ville de Clichy, comment gérez-vous l'accès par digicode pour intervenir sur une moquette en copropriété ?",
          answer: "<p>Nous coordonnons avec le syndic ou le gardien pour obtenir les codes d'accès avant l'intervention. Le matériel est acheminé en une seule rotation pour limiter les allers-retours. Si le stationnement est compliqué, nous privilégions un créneau tôt le matin pour faciliter le déchargement.</p>",
        },
        {
          question:
            "Dans les bureaux proches de l'entrée de ville à Clichy, pouvez-vous traiter des taches anciennes incrustées dans la moquette ?",
          answer: "<p>Les taches de café, tanin ou résidus gras anciens nécessitent un <strong>détachage ciblé</strong> avant le passage en injection-extraction. Nous testons d'abord sur une zone peu visible pour vérifier la réaction des fibres. Le résultat dépend de l'ancienneté et de la nature de la tache, mais une nette amélioration est généralement obtenue.</p>",
        },
        {
          question:
            "Autour de la gare Clichy-Levallois, adaptez-vous le nettoyage moquette selon qu'il s'agit d'une copropriété ou d'un bureau ?",
          answer: "<p>En copropriété, l'intervention porte souvent sur les escaliers et halls communs, avec une attention à la gêne pour les résidents. En bureau, nous ciblons <strong>les zones de passage</strong> et les espaces de réunion, en planifiant si possible hors heures d'activité pour ne pas perturber le travail des équipes.</p>",
        },
        {
          question:
            "À Clichy, comment organisez-vous le matériel et le stationnement quand l'accès pour une moquette est compliqué ?",
          answer: "<p>Nous repérons les possibilités de stationnement en amont et prévoyons un équipement compact si les escaliers sont étroits. Dans les rues à forte densité, un créneau matinal permet souvent de trouver une place temporaire. Le matériel est monté en une seule fois pour éviter les déplacements répétés.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec traitement des sols encrassés, gestion maîtrisée des eaux usées et coordination adaptée aux contraintes d'accès des résidences.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès propres aux parkings souterrains du secteur Jean-Jaurès et des Berges de Seine.",
        "Autolaveuse professionnelle et gestion stricte des eaux de lavage conformément aux exigences des copropriétés.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: "<p>Les traces d'huile, les coulures de graisse et les dépôts de poussière s'accumulent sur les sols des parkings le long du <strong>boulevard Jean-Jaurès</strong>. Ces salissures, souvent négligées, finissent par former une couche compacte qui rend les surfaces glissantes et dégrade l'image des parties communes. Les syndics et gestionnaires constatent régulièrement des plaintes liées à l'aspect général de ces espaces.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier transforme ces sous-sols en zones propres et sécurisées. Les revêtements en <strong>béton brut ou béton peint</strong>, fréquents dans les copropriétés de Clichy, retrouvent un aspect net. Les résidents circulent sans crainte de glissade, et les remarques négatives diminuent lors des assemblées générales.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte du <strong>stationnement difficile</strong> et de la densité urbaine. Chaque chantier fait l'objet d'un diagnostic préalable, d'un balisage adapté et d'une rotation planifiée des véhicules pour limiter la gêne aux occupants.</p>",
      uniqueDeepDive: "<h3>Encrassement persistant — diagnostic et préparation</h3>\n<p>Le revêtement est inspecté pour identifier les zones critiques : taches d'hydrocarbures, rigoles obstruées, angles morts. Un balayage préalable élimine les débris grossiers.</p>\n<p class=\"mt-4\">Le balisage sécurisé est installé et la rotation des véhicules organisée avec le syndic pour libérer les zones par secteur.</p>\n\n<h3>Sols glissants et graisseux — traitement mécanisé</h3>\n<p>L'autolaveuse associée à un dégraissant adapté traite les surfaces en passes successives. Les rampes d'accès reçoivent une attention particulière pour préserver leur adhérence.</p>\n<p class=\"mt-4\">Les pieds de murs et les rigoles sont nettoyés manuellement si nécessaire.</p>\n\n<h3>Eaux de lavage — gestion et finalisation</h3>\n<p>Les eaux usées sont dirigées vers les évacuations existantes, sans rejet sauvage. Les regards sont vérifiés pour garantir un écoulement correct.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention. Une fréquence d'entretien est recommandée selon le trafic constaté.</p>",
      specificChallenges: [
        "Sols béton encrassés par les hydrocarbures dans les sous-sols des immeubles du boulevard Jean-Jaurès.",
        "Rampes d'accès glissantes nécessitant un traitement antidérapant adapté.",
        "Gestion des eaux usées dans des parkings à évacuations parfois anciennes.",
        "Organisation de la rotation véhicules dans un contexte de stationnement difficile à Clichy.",
        "Balisage sécurisé pour maintenir la circulation des résidents pendant le chantier.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les parkings sous immeubles du boulevard Jean-Jaurès à Clichy, traitez-vous les taches d'huile anciennes en profondeur ?",
          answer: "<p>Les taches d'hydrocarbures incrustées sont traitées avec un dégraissant professionnel avant le passage de l'autolaveuse. Plusieurs passes peuvent être nécessaires selon l'ancienneté des dépôts. Le résultat dépend de l'état du revêtement, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question:
            "Dans un parking souterrain en béton à Clichy, comment gérez-vous les eaux de lavage sans gêner l'exploitation ?",
          answer: "<p>Les eaux sont dirigées vers les évacuations existantes après vérification de leur bon fonctionnement. Aucun rejet n'est effectué hors des circuits prévus. L'intervention est planifiée pour que les zones traitées sèchent avant le retour des véhicules sur les emplacements concernés.</p>",
        },
        {
          question:
            "À Clichy, comment sécurisez-vous un parking pendant le nettoyage pour préserver la circulation des usagers ?",
          answer: "<p>Un balisage visible délimite les zones en cours de traitement. La signalétique indique les passages autorisés et les secteurs temporairement inaccessibles. Les résidents sont informés en amont par le syndic pour anticiper leurs déplacements et limiter les désagréments.</p>",
        },
        {
          question:
            "Dans les parkings de copropriété à Clichy, pouvez-vous intervenir avec une fermeture partielle seulement ?",
          answer: "<p>Le chantier s'organise par secteurs successifs pour éviter une fermeture totale. Les véhicules sont déplacés progressivement selon un planning établi avec le gestionnaire. Cette méthode permet de maintenir l'accès à une partie des places pendant toute la durée de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au support, rinçage maîtrisé et protection du voisinage pour un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Interventions adaptées aux balcons exposés à la pollution urbaine du secteur Bac d'Asnières et des rues adjacentes.",
        "Pression ajustée selon le support, brossage ciblé sur les joints fragiles, traitement du garde-corps et des vitrages inclus.",
        "Organisation pensée pour limiter la gêne : protection anti-coulures, horaires convenus, accès étage géré avec le gardien ou le digicode.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement d'un balcon quand les dépôts gris s'accumulent sur le carrelage et que les joints noircissent mois après mois ? Dans le quartier <strong>Bac d'Asnières</strong>, les balcons des immeubles collectifs subissent les retombées de pollution urbaine, les feuilles portées par le vent et parfois les traces laissées par les oiseaux. Le sol devient terne, le garde-corps se couvre d'une pellicule grasse, et l'envie de s'installer dehors diminue.</p>\n<p class=\"mt-4\">Un balcon entretenu change la perception du logement. Les surfaces en <strong>carrelage grès ou béton peint</strong>, fréquentes dans les petits collectifs de Clichy, retrouvent leur aspect d'origine après un traitement adapté. Les joints redeviennent clairs, le mobilier peut reprendre sa place sans crainte de salir les pieds de chaise. C'est un espace récupéré, utilisable dès le lendemain.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte du <strong>voisinage proche et des accès par étage</strong>. Protection des menuiseries, gestion de l'eau pour éviter les coulures chez les voisins du dessous, déplacement soigneux des plantes : chaque détail compte dans une ville dense comme Clichy.</p>",
      uniqueDeepDive: "<h3>Un sol débarrassé des dépôts et des traces tenaces</h3>\n<p>Le carrelage ou le béton retrouve sa teinte initiale grâce à un produit choisi selon le support. Les joints sont brossés pour éliminer le noircissement accumulé. Le garde-corps et les vitrages sont traités dans la foulée.</p>\n<p class=\"mt-4\">Le résultat : une surface homogène, sans zones grises ni résidus collants.</p>\n\n<h3>Comment on y arrive</h3>\n<p>Les gros débris sont d'abord retirés manuellement. Les menuiseries et le mobilier sont protégés ou déplacés. Un brossage mécanique ou manuel est appliqué selon l'état des joints.</p>\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée pour ne pas fragiliser les joints ni projeter d'eau chez les voisins du dessous. Les murs mitoyens accessibles sont également traités.</p>\n\n<h3>Séchage et conseils pour la suite</h3>\n<p>L'eau résiduelle est évacuée, le balcon sèche naturellement en quelques heures selon la saison. Avant de partir, nous indiquons les gestes simples pour espacer les prochaines interventions : balayage régulier, rinçage occasionnel après les épisodes de pollution.</p>",
      specificChallenges: [
        "Pollution urbaine : les balcons proches du boulevard Jean-Jaurès accumulent poussières et dépôts gras.",
        "Joints fragiles : le carrelage grès des immeubles anciens nécessite une pression maîtrisée.",
        "Voisinage proche : gestion stricte de l'eau pour éviter les coulures sur les balcons inférieurs.",
        "Accès contraint : digicodes et étages élevés imposent une coordination préalable.",
        "Mobilier et plantes : déplacement ou bâchage avant intervention pour protéger vos affaires.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons des immeubles collectifs de Clichy, comment évitez-vous d'abîmer les joints et le carrelage ?",
          answer: "<p>Le réglage de pression s'adapte au support constaté sur place. Sur un carrelage grès avec joints anciens, nous privilégions un brossage manuel ou mécanique doux, complété par un rinçage à faible débit. Les joints fragiles sont traités sans projection directe pour éviter tout déchaussement.</p>",
        },
        {
          question:
            "Dans un quartier résidentiel comme Bac d'Asnières à Clichy, comment limitez-vous les coulures lors du nettoyage de balcon ?",
          answer: "<p>Nous installons des protections en bas de balcon et contrôlons le débit d'eau à chaque étape. Le rinçage s'effectue par zones, en évacuant l'eau vers l'intérieur du balcon avant qu'elle n'atteigne le bord. Les voisins du dessous sont prévenus si nécessaire.</p>",
        },
        {
          question:
            "À Clichy, adaptez-vous le nettoyage balcon selon un support en béton peint ou en carrelage grès ?",
          answer: "<p>Oui, le produit et la méthode changent. Le béton peint supporte un brossage plus appuyé mais craint certains détergents acides. Le carrelage grès demande un traitement neutre et un rinçage abondant pour éviter les traces de séchage. Nous vérifions le support avant de commencer.</p>",
        },
        {
          question:
            "À Clichy, comment organisez-vous le nettoyage d'un balcon en étage quand l'accès est contraint ?",
          answer: "<p>Nous convenons d'un créneau avec vous et récupérons les codes ou badges nécessaires. Le matériel est monté en une seule fois pour limiter les allers-retours. Si un gardien est présent, nous coordonnons avec lui pour éviter toute gêne dans les parties communes.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et traitement préventif pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des secteurs résidentiels de Clichy où les balcons sont régulièrement exposés aux fientes.",
        "Protocole complet avec EPI adaptés, confinement de la zone et désinfection virucide des supports.",
        "Organisation respectueuse du voisinage avec bâchage, gestion des odeurs et évacuation sécurisée des déchets.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons du <strong>quartier Victor Hugo-République</strong>. Les garde-corps se couvrent de traces blanchâtres, le sol devient collant, et une odeur désagréable s'installe. Ce qui semblait être un problème passager devient une gêne quotidienne qui empêche d'utiliser l'espace extérieur.</p>\n<p class=\"mt-4\">Dans les <strong>immeubles collectifs et résidences récentes de Clichy</strong>, les balcons et loggias exposés subissent ces salissures de manière récurrente. Les fientes attaquent les revêtements, laissent des auréoles sur le carrelage et fragilisent les peintures des garde-corps. Au-delà de l'aspect visuel, c'est l'hygiène de votre espace de vie qui se dégrade progressivement.</p>\n<p class=\"mt-4\">Notre intervention combine <strong>décontamination, désinfection et traitement des supports</strong> pour éliminer les souillures et les agents pathogènes présents. Nous évaluons l'état de chaque surface avant d'adapter notre protocole, en respectant les précautions sanitaires nécessaires et les contraintes de voisinage propres aux copropriétés de Clichy.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>L'intervenant équipé (masque FFP2, gants, combinaison jetable, lunettes) installe un bâchage pour confiner la zone de travail. Cette protection évite la dispersion des particules contaminées vers l'intérieur du logement et les balcons voisins.</p>\n<p class=\"mt-4\">L'humidification préalable des fientes neutralise les poussières avant toute manipulation.</p>\n\n<h3>Ramassage et traitement des surfaces</h3>\n<p>Les dépôts sont collectés et conditionnés dans des sacs étanches. Le sol, les garde-corps et les vitrages font ensuite l'objet d'un nettoyage adapté à chaque support.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces avec un temps de contact respecté pour éliminer les agents pathogènes.</p>\n\n<h3>Rinçage et recommandations</h3>\n<p>Un rinçage final permet d'évacuer les résidus de produit. Le balcon nécessite une aération avant réutilisation.</p>\n<p class=\"mt-4\">Selon la configuration, nous proposons l'installation de pics anti-pigeons sur les rebords ou de filets de protection pour limiter le retour des oiseaux. Les déchets sont évacués dans leurs contenants étanches.</p>",
      specificChallenges: [
        "Balcons exposés dans le secteur Victor Hugo-République avec dépôts récurrents liés aux oiseaux.",
        "Garde-corps et carrelages attaqués par l'acidité des fientes sur les résidences de Clichy.",
        "Contraintes de voisinage en copropriété nécessitant un confinement soigné pendant l'intervention.",
        "Odeurs persistantes à traiter dans un environnement urbain dense.",
        "Nécessité d'une désinfection complète avant réutilisation de l'espace extérieur.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons exposés du quartier Victor Hugo-République à Clichy, quels sont les risques sanitaires liés aux fientes de pigeons ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les voies respiratoires lors de leur manipulation. Sur les balcons exposés de ce secteur résidentiel, l'accumulation crée un risque supplémentaire lié aux poussières sèches. Notre protocole avec EPI et humidification préalable limite ces risques.</p>",
        },
        {
          question:
            "À Clichy, quel protocole EPI appliquez-vous pour nettoyer des fientes de pigeons sur un balcon en copropriété ?",
          answer: "<p>L'intervenant porte un masque FFP2, des gants, une combinaison jetable et des lunettes de protection. Un bâchage confine la zone pour protéger l'intérieur du logement et éviter toute gêne pour les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les particules volatiles.</p>",
        },
        {
          question:
            "Après des fientes de pigeons sur un balcon à Clichy, comment assurez-vous la désinfection des supports ?",
          answer: "<p>Après le ramassage des dépôts, nous appliquons un produit virucide et bactéricide homologué sur le sol, les garde-corps et les vitrages. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes. Un rinçage final et une aération complètent le traitement avant réutilisation.</p>",
        },
        {
          question:
            "Dans les balcons de Clichy, comment éliminez-vous les odeurs persistantes après un nettoyage de fientes de pigeons ?",
          answer: "<p>Les odeurs proviennent des résidus organiques incrustés dans les supports poreux. Notre traitement combine un nettoyage mécanique approfondi et une désinfection qui neutralise les composés odorants. L'aération du balcon après intervention permet d'évacuer les dernières traces. En cas de persistance, un second passage peut être envisagé.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage optimisé pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux du secteur Berges de Seine-Beaujon et de leurs contraintes d'accès.",
        "Détachage ciblé selon la nature des taches et extraction textile adaptée à chaque fibre.",
        "Intervention planifiée pour limiter la gêne, avec consignes de séchage claires avant remise en service.",
      ],
      uniqueIntro: "<p>Dans le secteur Berges de Seine-Beaujon, les canapés et tapis des logements familiaux accumulent au fil des mois poussières, taches de café, traces laissées par les enfants ou les animaux. Ces salissures s'incrustent dans les fibres sans qu'un simple passage d'aspirateur suffise à les déloger. Les odeurs persistent, les couleurs ternissent, et le confort quotidien s'en ressent.</p>\n<p class=\"mt-4\">Un entretien en profondeur change la donne : textiles assainis, aspect ravivé, sensation de fraîcheur retrouvée dès que l'on s'installe. Dans les résidences récentes comme dans les immeubles anciens du quartier Entrée de ville, les occupants apprécient de récupérer un mobilier agréable au toucher et visuellement propre, sans devoir remplacer des pièces encore en bon état.</p>\n<p class=\"mt-4\">L'intervention se prépare en amont pour limiter la gêne : protection des sols environnants, gestion des accès en logement occupé, consignes claires sur le temps de séchage selon l'épaisseur des textiles et la ventilation disponible.</p>",
      uniqueDeepDive: "<h3>Taches incrustées et odeurs persistantes</h3>\n<p>Le diagnostic textile identifie la nature des fibres et le type de salissures présentes. Un pré-traitement enzymatique cible les zones marquées par l'urine, le vin ou la graisse. Un test discret sur une partie cachée vérifie la réaction du tissu avant de poursuivre.</p>\n\n<h3>Fibres encrassées en profondeur</h3>\n<p>L'injection-extraction textile déloge les particules piégées dans l'épaisseur du canapé, du tapis ou du matelas. La pression et la température s'adaptent aux textiles fragiles comme le velours ou la laine pour préserver leur tenue.</p>\n\n<h3>Humidité résiduelle et remise en service</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et l'aération du logement, comptez quelques heures avant de réutiliser le mobilier. Des conseils d'usage et une fréquence d'entretien adaptée à votre quotidien complètent l'intervention.</p>",
      specificChallenges: [
        "Taches anciennes de café ou de vin incrustées dans les fibres des canapés.",
        "Odeurs persistantes liées aux animaux domestiques dans les logements familiaux.",
        "Accès en étage sans ascenseur dans certains immeubles anciens du centre-ville.",
        "Stationnement compliqué à proximité du boulevard Jean-Jaurès pour le matériel.",
        "Séchage à anticiper selon la ventilation disponible dans les appartements occupés.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les logements familiaux des Berges de Seine-Beaujon à Clichy, le nettoyage canapé-tapis réduit-il vraiment les allergènes ?",
          answer: "<p>L'injection-extraction déloge les acariens et poussières piégés dans les fibres. Après séchage, le textile assaini limite les sources d'irritation pour les occupants sensibles. L'effet dure plusieurs mois avec un entretien courant régulier.</p>",
        },
        {
          question:
            "À Clichy, combien de temps faut-il prévoir pour le séchage après un nettoyage de canapé ou tapis à domicile ?",
          answer: "<p>Comptez généralement quelques heures selon l'épaisseur du textile et l'aération du logement. Un canapé fin sèche plus vite qu'un tapis épais. Nous vous indiquons le délai estimé avant de quitter les lieux.</p>",
        },
        {
          question:
            "À Clichy, comment adaptez-vous le nettoyage selon un canapé tissu, un tapis épais ou un textile plus fragile ?",
          answer: "<p>Le diagnostic initial identifie la fibre : coton, laine, synthétique ou velours. La pression d'injection et la température s'ajustent pour éviter toute déformation. Les textiles délicats bénéficient d'un test préalable sur zone cachée.</p>",
        },
        {
          question:
            "Dans un appartement occupé à Clichy, quelles contraintes d'accès faut-il anticiper pour nettoyer canapé et tapis ?",
          answer: "<p>Prévoyez un espace dégagé autour du mobilier à traiter. Si l'immeuble dispose d'un digicode ou d'un accès étroit, transmettez-nous les informations en amont. Le stationnement sur le boulevard Victor Hugo peut nécessiter une coordination.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse à Clichy : traitement des mousses, nettoyage adapté au support et protection du mobilier pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : terrasses ombragées ou proches des arbres du Parc Roger Salengro traitées selon leur environnement.",
        "Adaptation technique au support : pression et produits ajustés pour pierre naturelle, bois ou composite sans risque de détérioration.",
        "Organisation soignée : mobilier déplacé, plantes protégées, écoulement maîtrisé pour limiter la gêne et préserver le voisinage.",
      ],
      uniqueIntro: "<p>Les dépôts verts sont visibles dès les premiers mois sur les terrasses du secteur des <strong>Berges de Seine</strong>. L'humidité ambiante, les feuilles accumulées et l'ombre partielle favorisent l'apparition de mousses et de lichens qui rendent le sol glissant. Ces traces s'étendent progressivement sur les joints et les bordures, donnant à l'espace un aspect négligé malgré un entretien régulier.</p>\n<p class=\"mt-4\">Une terrasse encrassée perd son attrait : on hésite à y installer le mobilier, à recevoir ou simplement à profiter des beaux jours. Sur les <strong>dalles sur plots ou le bois composite</strong> fréquents dans les résidences récentes de Clichy, les salissures s'incrustent dans les rainures et les interstices. Le rendu visuel se dégrade, et le revêtement peut se fragiliser si le traitement tarde.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver une surface saine. Le diagnostic préalable identifie le type de support et l'ampleur des dépôts. La protection du mobilier et des plantations est organisée avant le traitement, et le temps de séchage est anticipé pour une remise en service rapide.</p>",
      uniqueDeepDive: "<h3>Surface principale</h3>\n<p>Le revêtement est d'abord débarrassé des débris, feuilles et terre accumulés. Un produit adapté au support — pierre, bois ou composite — est appliqué pour décoller les mousses et les taches incrustées. Le brossage mécanique ou manuel cible les zones les plus marquées sans agresser les joints.</p>\n\n<h3>Éléments périphériques</h3>\n<p>Les garde-corps, murets et escaliers extérieurs reçoivent le même traitement. Ces surfaces verticales accumulent souvent des coulures et des dépôts verts moins visibles mais tout aussi tenaces. La pression est contrôlée pour préserver les finitions et éviter les projections vers le voisinage.</p>\n\n<h3>Finalisation et évacuation</h3>\n<p>L'eau de rinçage est dirigée vers les points d'écoulement existants. Les plantations et jardinières sont protégées pendant toute l'intervention. Un traitement anti-mousse préventif peut être appliqué selon l'exposition de la terrasse. Le mobilier est remis en place après séchage complet de la surface.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'humidité des Berges de Seine et l'ombre des arbres proches.",
        "Dalles sur plots ou bois composite nécessitant un traitement adapté pour éviter les infiltrations.",
        "Mobilier extérieur et jardinières à déplacer ou protéger avant chaque intervention.",
        "Gestion de l'écoulement d'eau en milieu dense pour préserver le voisinage.",
        "Stationnement compliqué imposant une organisation logistique anticipée.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les terrasses des Berges de Seine à Clichy, comment nettoyez-vous sans fragiliser la pierre, le bois ou le composite ?",
          answer: "<p>Chaque support reçoit un traitement spécifique. La pression est réduite sur le bois et le composite pour éviter l'éclatement des fibres. Sur la pierre, un produit désincrustant est appliqué avant rinçage contrôlé. Les joints sont préservés grâce à un brossage ciblé plutôt qu'un passage intensif.</p>",
        },
        {
          question:
            "À Clichy, comment traitez-vous les mousses et lichens sur une terrasse exposée aux salissures extérieures ?",
          answer: "<p>Un produit anti-mousse est appliqué après le nettoyage mécanique. Il agit sur les racines des végétaux pour limiter la repousse. Sur les terrasses proches des arbres ou en zone ombragée, un traitement préventif peut être proposé pour espacer les interventions suivantes.</p>",
        },
        {
          question:
            "À Clichy, utilisez-vous un traitement anti-mousse spécifique selon le support de terrasse ?",
          answer: "<p>Oui, la formulation varie selon le matériau. Le bois composite reçoit un produit non agressif pour préserver sa teinte. La pierre naturelle supporte des solutions plus concentrées. Le dosage et le temps de pose sont ajustés pour chaque configuration rencontrée.</p>",
        },
        {
          question:
            "À Clichy, choisissez-vous un nettoyage doux plutôt qu'une haute pression pour les terrasses fragiles ?",
          answer: "<p>Sur les supports sensibles — bois, composite ou pierre poreuse — le nettoyage doux est privilégié. Un brossage manuel ou mécanique à basse pression évite les dégradations. La haute pression reste réservée aux surfaces béton ou carrelage grès capables de la supporter sans dommage.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux finitions, pour un rendu impeccable avant état des lieux ou après travaux.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Clichy, du collectif ancien aux résidences récentes du secteur Entrée de ville.",
        "Polyvalence sur tous types de sols et surfaces, avec produits adaptés au parquet, carrelage ou revêtements fragiles.",
        "Organisation calée sur vos délais : coordination avec agences, artisans ou propriétaires, accès par digicode géré en amont.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou une location de longue durée, un appartement accumule poussières, traces et résidus qui ne partent pas avec un simple coup de balai. Dans le <strong>quartier Entrée de ville</strong> à Clichy, les rotations locatives fréquentes imposent des délais serrés pour remettre un logement en état avant la prochaine occupation ou la restitution des clés.</p>\n<p class=\"mt-4\">Un nettoyage complet permet de retrouver des surfaces propres et un intérieur prêt à accueillir de nouveaux occupants. Dans les <strong>immeubles anciens comme dans les résidences récentes</strong>, les sols en parquet ou carrelage nécessitent un traitement adapté pour éliminer les voiles de chantier ou les salissures incrustées sans abîmer les revêtements.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec les contraintes d'accès — digicodes, badges, disponibilité des clés — et les délais imposés par les agences ou les propriétaires. Une préparation rigoureuse garantit une remise en état efficace, même lorsque le planning est serré.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être occupé ou restitué</h3>\n<p>L'objectif est de livrer un intérieur propre sur l'ensemble des surfaces : sols, murs, menuiseries, pièces d'eau et rangements. Le niveau de finition correspond aux exigences d'un état des lieux ou d'une remise de clés.</p>\n\n<h3>Diagnostic et traitement adapté aux surfaces</h3>\n<p>Chaque intervention débute par une évaluation de l'état général et du type de salissures présentes. Les sols en parquet reçoivent un dépoussiérage puis un lavage avec produit adapté. Le carrelage est traité pour éliminer voiles de ciment ou traces tenaces. Vitres intérieures, interrupteurs et poignées sont nettoyés en détail.</p>\n\n<h3>Pièces d'eau et finitions</h3>\n<p>Cuisine et salle de bain font l'objet d'un traitement spécifique : plans de travail, faïences, sanitaires, robinetterie. Les placards sont vidés de leurs poussières. Un contrôle final vérifie chaque zone avant ventilation et remise des clés si nécessaire.</p>",
      specificChallenges: [
        "Délais serrés entre deux locations dans les immeubles du quartier Entrée de ville.",
        "Voiles de chantier et résidus de peinture sur parquet ou carrelage après travaux.",
        "Accès par digicode ou badge à coordonner avec propriétaires ou agences.",
        "Pièces d'eau à remettre en état complet avant état des lieux de sortie.",
        "Stationnement compliqué à proximité du boulevard Jean-Jaurès pour le matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Dans le secteur Entrée de ville à Clichy, pouvez-vous intervenir rapidement pour un nettoyage d'appartement entre deux locations ?",
          answer: "<p>Nous adaptons notre planning aux contraintes de rotation locative. Après échange sur les accès et l'état du logement, nous proposons un créneau sous 48 à 72 heures selon la disponibilité. La coordination avec l'agence ou le propriétaire est assurée pour respecter les délais de remise des clés.</p>",
        },
        {
          question:
            "À Clichy, quelle différence faites-vous entre un ménage standard et un nettoyage fin de chantier selon le type de logement ?",
          answer: "<p>Un ménage standard traite les salissures courantes. Le nettoyage fin de chantier cible les résidus spécifiques : voiles de ciment sur carrelage, traces de peinture sur parquet, poussières de plâtre dans les placards. Les produits et techniques varient selon le revêtement pour éviter toute dégradation.</p>",
        },
        {
          question:
            "Dans un appartement de Clichy avec parquet ou carrelage, comment gérez-vous un nettoyage après dégât des eaux ?",
          answer: "<p>Après un dégât des eaux, nous évaluons l'étendue des traces d'humidité et des dépôts résiduels. Le parquet est traité avec précaution pour limiter les risques de gonflement. Le carrelage et les joints sont nettoyés en profondeur. Si des moisissures apparaissent, un traitement adapté est appliqué.</p>",
        },
        {
          question:
            "À Clichy, comment coordonnez-vous le nettoyage d'un logement avec une agence immobilière ou des artisans ?",
          answer: "<p>Nous échangeons directement avec vos interlocuteurs pour caler l'intervention au bon moment : après le départ des artisans, avant l'état des lieux. Les accès par digicode ou badge sont récupérés en amont. Un compte-rendu peut être transmis à l'agence si nécessaire.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;