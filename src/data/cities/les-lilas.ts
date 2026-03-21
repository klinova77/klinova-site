import type { City } from "~/types/geo";

const city: City = {
  name: "Les Lilas",
  slug: "les-lilas",
  postalCodes: ["93260"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient aux Lilas pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une équipe habituée aux contraintes de la petite couronne, des méthodes adaptées au bâti dense de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro: "<p>Au terminus historique de la ligne 11, entre le Parc Lucie-Aubrac et la Porte des Lilas, Klinova accompagne syndics, gestionnaires et occupants dans l'entretien courant de leurs locaux. Notre connaissance du terrain permet une coordination efficace malgré la densité urbaine.</p>\n<p class=\"mt-4\">Halls d'immeubles, parkings en sous-sol, balcons exposés à la pollution de l'axe N3 : chaque intervention s'organise selon les accès, les horaires de passage et les contraintes de stationnement propres à la commune.</p>\n<ul>\n  <li><strong>Planification adaptée :</strong> Interventions calées en dehors des heures de pointe, coordination avec gardiens et syndics pour limiter la gêne aux résidents.</li>\n  <li><strong>Matériel dimensionné :</strong> Équipements compacts pour les escaliers étroits des immeubles faubouriens, autolaveuses pour les parkings souterrains des résidences années 70-90.</li>\n  <li>Suivi terrain : <strong>Compte-rendu d'intervention</strong> disponible, ajustements possibles selon les retours des donneurs d'ordre.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Stationnement très contraint</strong> : voirie étroite, zones payantes courte durée en centre-ville.",
    "<strong>Pollution façades et balcons</strong> : proximité de la N3 (Rue de Paris) et de l'A3 via Porte de Bagnolet.",
    "Immeubles faubouriens avec <strong>escaliers étroits</strong> et halls sans local technique dédié.",
    "Parkings souterrains des résidences années 70-90 : <strong>humidité</strong> et poussière noire accumulée.",
    "Forte densité de voisinage : <strong>tolérance au bruit limitée</strong>, horaires d'intervention à adapter.",
    "Digicodes et badges Vigik quasi systématiques : coordination préalable indispensable."
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville / Mairie",
    "Quartier des Sentes",
    "Quartier de l'Avenir",
    "Quartier des Bruyères",
    "Secteur Serge Gainsbourg",
    "Quartier Victor Hugo",
  ],
  nearbyCities: [
        "romainville",
        "bagnolet",
        "pantin",
        "montreuil",
        "noisy-le-sec",
        "bobigny",
        "vincennes",
        "aubervilliers",
        "saint-mande",
        "rosny-sous-bois"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie des Lilas",
    "Parc Lucie-Aubrac",
    "Station Serge Gainsbourg",
    "Rue de Paris (N3)",
    "Théâtre du Garde-Chasse",
    "Marché des Lilas (halle)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous vos interventions dans un secteur où le stationnement est aussi tendu ?",
      answer: "<p>Nos équipes repèrent les créneaux et emplacements disponibles avant chaque passage. Aux Lilas, nous privilégions les <strong>horaires décalés</strong> (tôt le matin ou en milieu de journée) et coordonnons avec les gardiens pour accéder aux cours intérieures quand c'est possible. Le matériel reste compact pour limiter l'encombrement sur voirie.</p>",
    },
    {
      question: "Pouvez-vous intervenir rapidement en cas de besoin urgent ?",
      answer: "<p>Oui, nous maintenons une <strong>réactivité sous 48 à 72 heures</strong> pour les demandes urgentes en petite couronne. La proximité avec nos équipes basées en Île-de-France permet de mobiliser rapidement du personnel et du matériel adapté à la situation signalée.</p>",
    },
    {
      question: "Comment se passe la coordination avec le syndic ou le gestionnaire ?",
      answer: "<p>Un interlocuteur dédié centralise les échanges : <strong>planning prévisionnel</strong>, accès aux parties communes, récupération des badges Vigik si nécessaire. Après chaque intervention, un compte-rendu peut être transmis pour assurer le suivi auprès du conseil syndical ou du bailleur.</p>",
    },
    {
      question: "Intervenez-vous aussi bien dans les immeubles anciens que dans les résidences récentes ?",
      answer: "<p>Nous adaptons nos méthodes aux deux configurations. Les <strong>immeubles faubouriens</strong> du centre demandent du matériel léger pour les escaliers étroits. Les résidences récentes, notamment autour de la station Serge Gainsbourg, disposent souvent de parkings souterrains nécessitant des équipements mécanisés.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et tapis, avec séchage maîtrisé pour une remise en service rapide de vos espaces professionnels ou privatifs.",
      whyUsBullets: [
        "Connaissance des configurations locales : halls faubouriens, cabinets médicaux et escaliers étroits du centre des Lilas.",
        "Matériel injection-extraction professionnel adapté aux moquettes bouclées, velours ras et dalles textiles de bureaux.",
        "Interventions planifiées en dehors des heures de consultation ou d'affluence, coordination préalable avec gestionnaires.",
      ],
      uniqueIntro: "<p>Le long de la <strong>Rue de Paris</strong>, les cabinets médicaux et bureaux accueillent un flux régulier de visiteurs. Les fibres textiles des halls et salles d'attente captent poussières urbaines, traces de semelles et résidus organiques. Ces dépôts s'accumulent dans l'épaisseur du revêtement, au-delà de ce qu'un aspirateur standard peut extraire. Le grisaillement progressif des zones de passage témoigne de cette saturation invisible.</p>\n<p class=\"mt-4\">Dans les <strong>immeubles faubouriens du centre</strong> et les petits collectifs environnants, les moquettes des parties communes subissent un encrassement similaire. Un entretien adapté redonne aux fibres leur aspect d'origine et supprime les odeurs piégées. Pour les professionnels de santé, cette hygiène textile contribue à l'image du cabinet et au confort des patients en salle d'attente.</p>\n<p class=\"mt-4\">L'intervention débute par un diagnostic du support : type de moquette, nature des taches, contraintes d'accès. Cette évaluation permet d'adapter le protocole aux besoins spécifiques des cabinets paramédicaux et des copropriétés, avec une planification respectant les horaires d'activité.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\n<p>Les espaces à fort passage reçoivent un traitement prioritaire. Après aspiration préalable, l'injection-extraction décolle les salissures compactées dans les fibres. Plusieurs passes successives garantissent une extraction complète sur ces surfaces sollicitées quotidiennement.</p>\n\n<h3>Surfaces périphériques et angles</h3>\n<p>Les abords de murs, plinthes et recoins nécessitent une attention particulière. Des protections sont posées sur les éléments fixes avant intervention. Le <strong>détachage ciblé</strong> traite les marques localisées : café, tanin, résidus gras identifiés lors du diagnostic initial.</p>\n\n<h3>Gestion du séchage par zone</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage. Selon l'épaisseur du revêtement et la ventilation disponible, comptez entre 4 et 8 heures avant circulation normale. Les zones traitées en premier sèchent pendant le travail sur les suivantes, optimisant la remise en service progressive des espaces.</p>",
      specificChallenges: [
        "Moquettes de cabinets médicaux soumises à un <strong>passage patient régulier</strong> et exigeant une hygiène irréprochable.",
        "Halls d'immeubles anciens avec escaliers étroits compliquant l'acheminement du matériel d'extraction.",
        "Taches de tanin et café <strong>incrustées dans les fibres</strong> des salles d'attente depuis plusieurs mois.",
        "Stationnement camionnette difficile sur la Rue de Paris aux heures de forte affluence commerciale.",
        "Séchage à coordonner avec les horaires d'ouverture des cabinets et bureaux.",
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous le passage du matériel dans les escaliers étroits des immeubles du Centre-Ville ?",
          answer: "<p>Le matériel d'injection-extraction se démonte en éléments transportables manuellement. Pour les immeubles faubouriens sans ascenseur, nous prévoyons un temps de mise en place adapté. Les flexibles permettent de travailler depuis un palier sans encombrer les passages communs pendant l'intervention.</p>",
        },
        {
          question: "Pouvez-vous traiter des taches anciennes sur la moquette d'une salle d'attente proche de la Maternité des Lilas ?",
          answer: "<p>Les taches incrustées depuis plusieurs mois nécessitent un pré-traitement ciblé avant extraction. Nous identifions la nature du dépôt pour appliquer le détachant approprié. Les fibres retrouvent un aspect homogène, même sur des marques que les entretiens courants n'ont pas pu éliminer.</p>",
        },
        {
          question: "Quelles méthodes utilisez-vous pour une moquette très encrassée par le trafic piéton de la Rue de Paris ?",
          answer: "<p><strong>L'injection-extraction</strong> reste la méthode principale pour ce niveau d'encrassement. Elle projette une solution nettoyante dans les fibres puis aspire immédiatement salissures et humidité. Sur les zones les plus sollicitées, des passes supplémentaires complètent le traitement jusqu'à obtention d'un résultat satisfaisant.</p>",
        },
        {
          question: "Comment gérez-vous le stationnement du véhicule près de la Mairie des Lilas pour une intervention ?",
          answer: "<p>Nous repérons les <strong>créneaux de livraison</strong> et les emplacements disponibles avant le jour prévu. Le matériel est déchargé rapidement puis le véhicule stationné en zone autorisée. Cette organisation évite les contraventions et limite la gêne sur une voirie déjà sollicitée par le trafic local.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains du secteur Pasteur et des contraintes d'accès liées à la densité urbaine.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées, adaptées aux revêtements béton des résidences locales.",
        "Coordination avec le syndic pour planifier les rotations véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: "<p>Les traces noires sur le béton, les coulures d'huile près des places de stationnement, la poussière accumulée le long des rampes : ces marques visibles dans les parkings souterrains du secteur <strong>Avenue Pasteur</strong> témoignent d'un encrassement progressif. La proximité de l'A3 et des axes passants accentue les dépôts de particules fines sur les revêtements.</p>\n<p class=\"mt-4\">Un sol de parking régulièrement entretenu facilite la circulation des véhicules, réduit les risques de glissade sur les rampes et améliore la perception générale de la copropriété. Dans les <strong>résidences années 70-90</strong>, les dalles béton et les rampes étroites nécessitent une attention particulière pour éviter l'accumulation de graisse et de poussière noire.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le syndic : diagnostic du revêtement, planification des rotations véhicules, balisage sécurisé. La gestion des eaux de lavage respecte les évacuations existantes, sans rejet sauvage. Un compte-rendu détaillé accompagne chaque passage.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et rampes sécurisées</h3>\n<p>L'objectif est d'obtenir un revêtement propre, débarrassé des taches d'huile et de la poussière noire, avec des rampes traitées pour conserver leur adhérence. Les zones critiques — angles morts, pieds de murs, rigoles — retrouvent un aspect net.</p>\n\n<h3>Autolaveuse et dégraissant adapté au support</h3>\n<p>Après un balayage préalable, l'autolaveuse effectue des passes mécanisées sur l'ensemble de la surface. Un dégraissant professionnel traite les zones les plus encrassées. La haute pression intervient sur les rampes et les recoins inaccessibles à la machine.</p>\n\n<h3>Gestion des eaux et coordination accès</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans débordement ni rejet sauvage. Le balisage signalétique sécurise les usagers pendant l'intervention. La rotation des véhicules s'organise par zones pour maintenir un accès partiel au parking.</p>",
      specificChallenges: [
        "Poussière noire liée à la proximité de l'A3 et du périphérique, dépôts réguliers sur les sols.",
        "Rampes étroites dans les résidences 70-90, accès limité pour les équipements mécanisés.",
        "Humidité en niveaux bas, favorisant l'encrassement et les traces persistantes.",
        "Stationnement tendu en surface, coordination nécessaire pour le véhicule d'intervention.",
        "Rotation véhicules à organiser avec le syndic pour maintenir un accès partiel.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les taches d'huile et la poussière noire fréquentes dans les parkings proches de l'A3 ?",
          answer: "<p>Les dépôts de particules fines et les coulures d'huile sont traités avec un dégraissant professionnel avant le passage de l'autolaveuse. Les zones les plus encrassées reçoivent un traitement ciblé. La poussière noire typique du secteur nécessite souvent plusieurs passes pour un résultat durable.</p>",
        },
        {
          question: "Quelle gestion des eaux de lavage prévoyez-vous pour un parking souterrain d'une résidence années 70-90 aux Lilas ?",
          answer: "<p>Les eaux usées sont systématiquement dirigées vers les regards et rigoles existants. Nous vérifions l'état des évacuations avant l'intervention pour éviter tout débordement. Aucun rejet sauvage n'est effectué, conformément aux obligations réglementaires applicables aux copropriétés.</p>",
        },
        {
          question: "Quelles adaptations techniques appliquez-vous entre un parking souterrain et un parking aérien sur le secteur Pasteur ?",
          answer: "<p>En souterrain, l'humidité et le manque de ventilation imposent un séchage plus long et une attention particulière aux rampes. En aérien, l'exposition aux intempéries génère des salissures différentes. La pression et les produits sont ajustés selon le revêtement et l'environnement du parking.</p>",
        },
        {
          question: "Quels horaires d'intervention recommandez-vous pour un parking proche du marché de la Rue de Paris ?",
          answer: "<p>Les jours de marché, nous privilégions les créneaux après 14h pour éviter les difficultés de stationnement et de circulation. En semaine, les interventions tôt le matin ou en soirée limitent la gêne pour les résidents. Le syndic valide le créneau en amont.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion maîtrisée des eaux de rinçage pour éviter toute gêne aux voisins du dessous.",
      whyUsBullets: [
        "Nous connaissons les expositions variées des balcons lilasiens, entre ombrage dense et façades sur axe passant.",
        "Notre matériel permet d'ajuster la pression selon le support : béton, carrelage, zinc ou bois composite.",
        "Nous organisons l'évacuation des eaux pour préserver vos relations de voisinage et la propreté des façades.",
      ],
      uniqueIntro: "<p>Dans les zones résidentielles proches du <strong>Parc Lucie-Aubrac</strong>, les balcons accumulent rapidement un voile grisâtre. Les particules fines venues de la circulation sur la N3 se déposent sur les sols et les garde-corps. Les feuilles mortes s'agglutinent dans les angles, l'humidité favorise l'apparition de mousses le long des joints. Au fil des mois, l'espace extérieur perd de son attrait et reste inutilisé.</p>\n<p class=\"mt-4\">Sur les balcons filants des immeubles années 60-70, le béton brut absorbe les salissures en profondeur. Les petits balcons en zinc du centre ancien présentent des traces de ruissellement tenaces. Retrouver un sol propre et des surfaces dégagées change l'usage quotidien : on ressort les chaises, on profite d'un café dehors, on redécouvre quelques mètres carrés longtemps délaissés.</p>\n<p class=\"mt-4\">Notre intervention commence par un diagnostic visuel pour adapter le traitement au support. Nous protégeons vos plantes et votre mobilier, puis nous travaillons méthodiquement en contrôlant l'évacuation des eaux vers l'intérieur du balcon plutôt que chez vos voisins.</p>",
      uniqueDeepDive: "<h3>Dépôts accumulés et préparation</h3>\n<p>Les feuilles, la terre et les débris divers sont retirés manuellement avant tout mouillage. Nous déplaçons ou bâchons le mobilier et les jardinières. Les menuiseries et seuils de porte reçoivent une protection pour éviter les infiltrations pendant le lavage.</p>\n\n<h3>Salissures incrustées et traitement adapté</h3>\n<p>Un produit spécifique au support est appliqué : formule douce pour les joints fragiles du carrelage, dégraissant pour le béton brut, solution adaptée au bois composite. Le brossage manuel ou mécanique déloge les traces grasses et les dépôts verts. Le rinçage s'effectue à pression contrôlée, orienté vers l'intérieur du balcon.</p>\n\n<h3>Éléments annexes et finition</h3>\n<p>Les garde-corps sont nettoyés sur toute leur hauteur. Les vitrages attenants et les murs mitoyens accessibles sont traités si nécessaire. Nous vérifions l'absence de coulures vers l'étage inférieur avant de laisser sécher. Vous recevez quelques conseils pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Dépôts noirs liés à la circulation sur la Rue de Paris et ses abords.",
        "Mousses et traces vertes sur les balcons ombragés par les immeubles voisins.",
        "Joints de carrelage fragilisés sur les balcons filants des années 60-70.",
        "Gestion des eaux de rinçage en immeuble dense avec voisins directs en dessous.",
        "Accès parfois limité aux étages élevés sans ascenseur dans le bâti ancien.",
      ],
      faqAdditions: [
        {
          question: "Quel produit utilisez-vous sur les balcons filants en béton des immeubles 60-70 aux Lilas ?",
          answer: "<p>Nous appliquons un dégraissant alcalin adapté au béton brut, qui déloge les salissures sans attaquer la surface. Le brossage mécanique complète l'action du produit. Le rinçage à pression modérée évite d'endommager les joints et les arêtes du sol.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation d'eau lors du nettoyage d'un balcon donnant sur la Rue de Paris ?",
          answer: "<p>Nous orientons le rinçage vers l'intérieur du balcon et utilisons des raclettes pour diriger l'eau vers l'évacuation existante. Si nécessaire, nous posons des bâches de protection sur le garde-corps pour éviter les projections vers la voirie ou les passants en contrebas.</p>",
        },
        {
          question: "Comment éliminez-vous les dépôts verts et mousses sur un balcon ombragé proche du Parc Lucie-Aubrac ?",
          answer: "<p>Un traitement anti-mousse est appliqué avant le brossage pour décoller les végétaux incrustés. Nous insistons sur les joints et les angles où l'humidité stagne. Le rinçage emporte les résidus et laisse une surface nette, moins propice à la repousse rapide.</p>",
        },
        {
          question: "Quelle méthode sans haute pression recommandez-vous pour une loggia en centre-ville dense ?",
          answer: "<p>Sur une loggia fermée, nous privilégions le brossage manuel avec produit adapté au support, suivi d'un rinçage à basse pression ou à l'eau claire. Cette approche préserve les joints fragiles et limite les projections dans un espace confiné où les murs sont proches.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des volatiles.",
      whyUsBullets: [
        "Connaissance des zones à risque aux Lilas, notamment les abords de l'église et les immeubles proches des espaces verts.",
        "Protocole EPI complet avec confinement, désinfection virucide et temps de contact contrôlé sur chaque support.",
        "Organisation adaptée à la densité urbaine : bâchage discret, évacuation des déchets en sacs étanches, intervention possible en semaine.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les rebords et le sol du balcon. Aux abords de l'Église Notre-Dame du Rosaire, les corniches et parvis attirent les pigeons qui colonisent ensuite les balcons voisins. L'odeur devient perceptible, le linge étendu se tache, et l'espace extérieur perd toute utilité quotidienne.</p>\n<p class=\"mt-4\">Sur les derniers étages des immeubles anciens du centre des Lilas, les corniches fragiles et les garde-corps en ferronnerie retiennent les déjections. Le béton se dégrade sous l'acidité, la peinture s'écaille, et les traces persistent même après un rinçage sommaire. Retrouver un balcon utilisable suppose un traitement en profondeur qui élimine les agents pathogènes.</p>\n<p class=\"mt-4\">La proximité du Parc Lucie-Aubrac et des squares favorise la présence régulière des volatiles. Une intervention structurée inclut le confinement de la zone, le ramassage sécurisé, la désinfection virucide et l'évacuation des déchets en sacs étanches. Des solutions de dissuasion peuvent compléter le traitement pour limiter les récidives.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace propre, sans odeur ni risque sanitaire. Les supports retrouvent leur aspect d'origine, les traces acides sont traitées, et l'air ambiant redevient sain après aération.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour protéger l'intérieur du logement et éviter la dispersion des poussières. Les fientes sont humidifiées avant ramassage pour neutraliser les particules volatiles, puis conditionnées en sacs étanches.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final élimine les résidus de produit. Le balcon reste aéré avant réutilisation. Selon la configuration, des pics anti-pigeons ou un gel répulsif peuvent être posés sur les rebords pour décourager le retour des volatiles.</p>",
      specificChallenges: [
        "Corniches anciennes en centre-ville : supports fragiles nécessitant un nettoyage sans pression excessive.",
        "Proximité du Parc Lucie-Aubrac : présence régulière de pigeons sur les balcons des résidences voisines.",
        "Immeubles à vis-à-vis serré : confinement obligatoire pour éviter les nuisances vers les voisins.",
        "Évacuation des déchets contaminés en zone dense, avec stationnement limité rue de Paris.",
        "Garde-corps en ferronnerie ou zinc : désinfection adaptée pour préserver les finitions.",
      ],
      faqAdditions: [
        {
          question: "Les corniches de l'Église Notre-Dame du Rosaire attirent les pigeons : quels risques sanitaires pour les balcons voisins ?",
          answer: "<p>Les fientes contiennent des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les balcons proches des corniches de l'église, l'accumulation peut provoquer des irritations respiratoires. Un assainissement avec désinfection virucide élimine ces risques et permet de réutiliser l'espace en toute sécurité.</p>",
        },
        {
          question: "Quel protocole EPI appliquez-vous sur les balcons des immeubles anciens du centre des Lilas ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes de protection. La zone est confinée par bâchage pour éviter la dispersion des particules vers l'intérieur du logement. Les fientes sont humidifiées avant collecte, ce qui neutralise les poussières contaminées avant tout ramassage.</p>",
        },
        {
          question: "Pourquoi la désinfection est-elle indispensable après le retrait des fientes sur un balcon résidentiel ?",
          answer: "<p>Le simple rinçage n'élimine pas les bactéries et virus présents dans les déjections. Un produit virucide et bactéricide homologué est appliqué sur le sol, le garde-corps et les vitrages. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes avant le rinçage final.</p>",
        },
        {
          question: "Comment organisez-vous l'évacuation des déchets quand l'intervention a lieu près du marché de la Rue de Paris ?",
          answer: "<p>Les fientes et résidus sont conditionnés en sacs étanches dès la collecte. Le véhicule stationne en zone autorisée, hors des jours de marché si possible. L'évacuation se fait en fin d'intervention pour limiter le temps de présence sur la voie publique et éviter toute gêne pour les riverains.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Interventions régulières aux Lilas, dans les appartements du centre comme dans les résidences proches du Triton.",
        "Matériel d'injection-extraction compact, adapté aux textiles délicats et aux espaces restreints des logements.",
        "Organisation souple : créneaux en journée ou en soirée, coordination avec vos contraintes d'accès et de stationnement.",
      ],
      uniqueIntro: "<p>Comment préserver la propreté d'un canapé quand les enfants y prennent leur goûter, que le chat s'y installe chaque soir, ou que les invités s'y succèdent ? Aux Lilas, dans les appartements proches du <strong>Triton</strong> ou des résidences du centre, les textiles d'ameublement absorbent le quotidien : taches de café renversé, auréoles d'humidité, odeurs qui s'installent sans qu'on s'en aperçoive.</p>\n<p class=\"mt-4\">Dans les <strong>T2 et T3</strong> qui composent l'essentiel du parc immobilier, canapés et tapis occupent souvent l'espace principal. Une fibre encrassée change l'atmosphère d'une pièce : couleurs ternes, sensation de lourdeur, inconfort pour les personnes sensibles aux acariens. Après intervention, le tissu retrouve sa souplesse, les teintes se ravivent, et l'air ambiant gagne en fraîcheur.</p>\n<p class=\"mt-4\">Avec un <strong>marché locatif actif</strong> et des rotations fréquentes, beaucoup de propriétaires font appel à un rafraîchissement textile avant ou après un changement de locataire. L'intervention s'organise selon vos contraintes d'accès et de planning, pour une remise en service rapide du mobilier.</p>",
      uniqueDeepDive: "<h3>Textile assaini et fibres débarrassées des résidus</h3>\n<p>L'objectif est d'extraire ce qui s'accumule dans l'épaisseur du tissu : poussières, allergènes, particules organiques. Le diagnostic préalable identifie la nature des fibres — coton, microfibre, velours ou cuir — et le type de taches présentes.</p>\n<p class=\"mt-4\">Un test discret sur une zone cachée confirme la compatibilité du traitement avec le textile.</p>\n\n<h3>Détachage ciblé puis injection-extraction</h3>\n<p>Les taches identifiées reçoivent un pré-traitement adapté : enzymatique pour les souillures organiques, dégraissant pour les traces alimentaires. L'injection-extraction projette ensuite une solution nettoyante dans la fibre avant de l'aspirer immédiatement avec les salissures dissoutes.</p>\n\n<h3>Séchage contrôlé et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et la ventilation du logement, comptez quelques heures avant utilisation. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Ascenseurs étroits dans les immeubles anciens : matériel compact indispensable.",
        "Taches d'origine variée sur canapés familiaux : café, jus, traces d'animaux.",
        "Rotation locative fréquente : interventions à planifier entre deux occupants.",
        "Stationnement difficile en centre-ville : anticipation du créneau horaire.",
        "Textiles fragiles (velours, lin) nécessitant un réglage de pression adapté.",
      ],
      faqAdditions: [
        {
          question: "Quelle méthode utilisez-vous pour un canapé en microfibre dans un T2 des Lilas, sans housse amovible ?",
          answer: "<p>Nous procédons par injection-extraction directement sur le tissu. La solution nettoyante pénètre la fibre puis est aspirée avec les salissures. La pression reste modérée pour préserver la microfibre. Le séchage prend généralement trois à cinq heures selon la ventilation du logement.</p>",
        },
        {
          question: "Comment éliminez-vous les acariens sur un canapé familial proche du Parc Lucie-Aubrac ?",
          answer: "<p>L'extraction en profondeur déloge les acariens et leurs déjections logés dans le rembourrage. La chaleur de la solution contribue à neutraliser les allergènes. Après séchage, le textile est plus sain pour les occupants sensibles, notamment les enfants ou personnes allergiques.</p>",
        },
        {
          question: "Pour des taches anciennes sur un tapis de salle d'attente près du Triton, privilégiez-vous un détachage ciblé ou un shampouinage complet ?",
          answer: "<p>Nous combinons les deux approches. Les taches anciennes reçoivent d'abord un pré-traitement localisé pour ramollir les résidus incrustés. Le shampouinage complet uniformise ensuite le rendu et évite les différences de teinte entre zones traitées et non traitées.</p>",
        },
        {
          question: "Si l'ascenseur est étroit et le stationnement difficile aux Lilas, quelles consignes logistiques demandez-vous avant l'intervention ?",
          answer: "<p>Nous vous demandons de confirmer l'accessibilité de l'immeuble et de prévoir un créneau où le stationnement est moins tendu. Le matériel reste compact et transportable à pied si nécessaire. Un échange préalable permet d'anticiper ces contraintes et d'éviter toute perte de temps.</p>",
        },
      ],
      ctaOverride: "",
    },

   
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux plafonds, pour un rendu impeccable avant état des lieux ou après travaux de rénovation.",
      whyUsBullets: [
        "Connaissance du parc locatif lilasien et des attentes des agences immobilières du secteur Mairie des Lilas.",
        "Polyvalence sur tous types de sols et de surfaces, du parquet ancien aux sanitaires récents.",
        "Réactivité pour tenir les délais entre deux locataires, coordination possible avec artisans ou gestionnaires.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement présentable en quelques jours quand les travaux viennent de s'achever ou que le locataire précédent a rendu les clés ? Dans le <strong>Quartier de l'Avenir</strong> comme dans le centre-ville des Lilas, la rotation locative impose des délais serrés. Les traces de peinture sur les plinthes, la poussière de plâtre dans les placards ou les résidus de colle au sol ne disparaissent pas avec un simple coup de balai.</p>\n<p class=\"mt-4\">Un logement propre facilite la signature du bail suivant et évite les litiges lors de l'état des lieux. Dans les <strong>immeubles anciens et petits collectifs</strong> qui composent l'essentiel du parc lilasien, chaque recoin compte : joints de salle de bain, interrupteurs, radiateurs. Un ménage bâclé se voit immédiatement et retarde la remise des clés.</p>\n<p class=\"mt-4\">Les <strong>agences immobilières locales</strong> et propriétaires bailleurs attendent une prestation complète, réalisée dans des délais courts. Une intervention structurée permet de traiter l'ensemble des surfaces sans oubli, du dépoussiérage initial jusqu'au contrôle final.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à habiter</h3>\n<p>L'objectif est de livrer un appartement ou une maison dans un état permettant une entrée immédiate. Sols propres, sanitaires désinfectés, vitres transparentes, placards vidés et essuyés. Le résultat doit satisfaire les exigences d'un état des lieux professionnel.</p>\n\n<h3>Traitement méthodique des surfaces</h3>\n<p>Le travail commence par le haut : dépoussiérage des plafonds, luminaires et murs. Les pièces d'eau reçoivent un traitement spécifique avec détartrage et désinfection. Les sols sont aspirés puis lavés selon leur nature, parquet ancien ou carrelage. Les traces de chantier, peinture ou enduit, sont traitées avec des produits adaptés pour ne pas abîmer les supports.</p>\n\n<h3>Vérification et remise des clés</h3>\n<p>Chaque pièce fait l'objet d'un contrôle visuel avant validation. Poignées, interrupteurs et plinthes sont vérifiés. Le logement est aéré pour éliminer les odeurs résiduelles. Un compte-rendu peut être transmis au donneur d'ordre si nécessaire.</p>",
      specificChallenges: [
        "Délais courts entre deux états des lieux dans un marché locatif tendu.",
        "Traces de peinture et enduit à retirer sans abîmer les parquets anciens.",
        "Accès parfois complexe dans les escaliers étroits des immeubles faubouriens.",
        "Stationnement difficile en centre-ville pour le matériel d'intervention.",
        "Coordination nécessaire avec les agences locales pour la remise des clés.",
      ],
      faqAdditions: [
        {
          question: "Pour un nettoyage fin de chantier dans le Quartier de l'Avenir, quels types de traces traitez-vous ?",
          answer: "<p>Nous intervenons sur les résidus courants de chantier : projections de peinture, traces de colle, poussière de plâtre ou d'enduit. Chaque support reçoit un traitement adapté pour éviter les rayures sur les parquets anciens ou les carrelages fragiles présents dans ce secteur.</p>",
        },
        {
          question: "Avec des délais serrés entre deux états des lieux sur la Rue de Paris, sous quel délai pouvez-vous intervenir ?",
          answer: "<p>Nous proposons des interventions sous 48 à 72 heures selon la surface et le niveau de salissure. Pour les situations urgentes liées à une rotation locative rapide, nous adaptons notre planning afin de respecter la date de remise des clés prévue avec l'agence ou le propriétaire.</p>",
        },
        {
          question: "Quel niveau de propreté garantissez-vous pour un ménage avant état des lieux demandé par une agence locale ?",
          answer: "<p>Le logement est livré dans un état conforme aux attentes d'un état des lieux professionnel : sols lavés, sanitaires désinfectés, vitres intérieures propres, placards essuyés. Si un point ne convient pas lors du contrôle, nous effectuons une repasse sur la zone concernée.</p>",
        },
        {
          question: "Comment vous coordonnez-vous avec les artisans pour une intervention après travaux aux Lilas ?",
          answer: "<p>Nous intervenons une fois les travaux terminés, après évacuation des gravats par l'entreprise de rénovation. La coordination se fait directement avec le maître d'ouvrage ou l'agence pour caler la date d'intervention et garantir un logement prêt à la date convenue.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;