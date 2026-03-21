import type { City } from "~/types/geo";

const city: City = {
  name: "Le Blanc-Mesnil",
  slug: "le-blanc-mesnil",
  postalCodes: ["93150"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs au Blanc-Mesnil. Entre la gare RER B et les zones d'activités, nos équipes s'adaptent aux contraintes de chaque secteur avec méthode et réactivité.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro: "<p>Au cœur du pôle logistique nord, entre le Parc Anne-de-Kiev et la gare RER B, Klinova accompagne syndics, gestionnaires et entreprises dans la gestion quotidienne de la propreté. Une présence régulière, des interlocuteurs identifiés, une coordination pensée pour le terrain.</p>\n\n<p class=\"mt-4\">Halls, escaliers, parkings souterrains, balcons ou locaux professionnels : chaque intervention suit un protocole adapté au bâti et aux usages. Le suivi peut être formalisé selon vos besoins, avec reporting ou points réguliers.</p>\n\n<ul>\n  <li><strong>Planification adaptée :</strong> Horaires calés sur les flux de la gare RER et les rotations des zones d'activités pour limiter la gêne aux occupants.</li>\n  <li><strong>Matériel dédié :</strong> Équipements dimensionnés selon les surfaces, des halls de résidences aux parkings des zones logistiques.</li>\n  <li><strong>Interlocuteur unique :</strong> Un référent suit vos sites et centralise les demandes, qu'il s'agisse d'interventions ponctuelles ou de contrats récurrents.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Dépôts noirs sur balcons</strong> liés à la proximité des autoroutes A1 et A3.",
    "Parkings souterrains des résidences neuves exposés aux <strong>poussières de chantier</strong>.",
    "Halls des grands ensembles soumis à un <strong>trafic piéton soutenu</strong> matin et soir.",
    "Stationnement contraint en centre-ville et aux abords de la gare RER B.",
    "Accès sécurisés (badges, digicodes) fréquents dans les <strong>copropriétés récentes</strong>.",
    "Zones logistiques actives nécessitant des interventions en <strong>horaires décalés</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Quartier Nord",
    "Quartier Sud",
    "Les Tilleuls",
    "Cité 212 / Germain Dorel",
    "Cité Pierre Sémard / La Pièce Pointue",
    "Quartier du Parc",
  ],
  nearbyCities: [
        "aulnay-sous-bois",
        "bobigny",
        "bondy",
        "noisy-le-sec",
        "sevran",
        "pantin",
        "aubervilliers",
        "villepinte",
        "romainville",
        "livry-gargan"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie du Blanc-Mesnil",
    "Gare du Blanc-Mesnil (RER B)",
    "Parc Anne-de-Kiev",
    "Centre Commercial Plein Air",
    "Zone d'Activités de la Molette",
    "Cité 212 (Cité Germain Dorel)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les résidences proches de la gare du Blanc-Mesnil ?",
      answer: "<p>Les créneaux sont définis en tenant compte des <strong>flux pendulaires</strong> du matin et du soir. Nous privilégions les plages de milieu de matinée ou début d'après-midi pour éviter les encombrements dans les halls et faciliter l'accès au matériel. Le gardien ou le syndic est prévenu en amont.</p>",
    },
    {
      question:
        "Intervenez-vous aussi dans les zones d'activités comme la Molette ou Garonor ?",
      answer: "<p>Oui, nous travaillons régulièrement avec des entreprises implantées sur ces zones. Les interventions sont planifiées selon les <strong>horaires d'exploitation</strong> : tôt le matin, en soirée ou le week-end pour les parkings et parties communes sans perturber l'activité.</p>",
    },
    {
      question: "Quel délai pour une intervention urgente au Blanc-Mesnil ?",
      answer: "<p>En cas de besoin urgent — dégât des eaux, salissure importante après incident — nous pouvons généralement intervenir sous <strong>24 à 48 heures</strong> selon la disponibilité des équipes. Un premier échange téléphonique permet d'évaluer la situation et de confirmer le créneau.</p>",
    },
    {
      question:
        "Comment se passe la coordination avec un syndic pour plusieurs immeubles ?",
      answer: "<p>Un référent Klinova centralise les échanges et assure le suivi de chaque site. Les <strong>plannings sont mutualisés</strong> quand c'est pertinent, et un compte-rendu peut être transmis après chaque passage si le gestionnaire le souhaite.</p>",
    },
  ],

  

  ctaOverride: "",

  // SERVICES (seulement ceux demandés)
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage contrôlé pour une remise en circulation rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et des typologies de bâti sur la Zone d'Activités de la Molette et ses environs.",
        "Matériel d'injection-extraction professionnel avec réglage de pression adapté aux dalles textiles et velours ras.",
        "Interventions planifiées en dehors des heures de bureau ou en soirée pour limiter la gêne des occupants.",
      ],
      uniqueIntro: "<p>Dans la <strong>Zone d'Activités de la Molette</strong>, les bureaux et open spaces accumulent rapidement poussières fines et particules liées au trafic logistique environnant. Les dalles textiles des couloirs de circulation perdent leur aspect d'origine en quelques mois, tandis que les taches de café ou de semelles marquent durablement les zones de passage intensif.</p>\n\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur tenue et leur couleur. Les <strong>moquettes aiguillées des halls d'immeubles récents</strong> et les revêtements bouclés des salles de réunion retrouvent un aspect homogène, sans auréoles ni zones grisées. Les collaborateurs et visiteurs perçoivent immédiatement la différence au quotidien.</p>\n\n<p class=\"mt-4\">Face au flux piétons important et aux poussières générées par les camions sur ce secteur logistique, nous proposons un diagnostic précis du type de fibre et de l'encrassement constaté. Chaque intervention est planifiée pour limiter la gêne, avec un protocole ajusté aux contraintes d'accès et aux horaires d'activité.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\n<p>Les couloirs et espaces d'accueil concentrent l'essentiel des salissures. Après aspiration approfondie, nous appliquons un pré-détachant sur les traces de semelles et taches grasses avant le passage en injection-extraction.</p>\n\n<h3>Espaces cloisonnés et bureaux</h3>\n<p>Les dalles textiles sous les postes de travail reçoivent un traitement ciblé. La buse est adaptée à l'épaisseur du revêtement pour extraire les particules sans détremper le support. Les plinthes et bas de cloisons sont protégés.</p>\n\n<h3>Halls et parties communes</h3>\n<p>Les moquettes aiguillées des entrées d'immeubles subissent plusieurs passes croisées. <strong>L'extraction maximale de l'humidité</strong> permet un séchage en quelques heures selon la ventilation disponible. Nous conseillons un délai de non-piétinement adapté au type de fibre et à la saison.</p>",
      specificChallenges: [
        "Poussières logistiques : les bureaux proches des zones d'activités s'encrassent plus vite qu'ailleurs.",
        "Dalles textiles en open space : passages répétés et chaises à roulettes marquent rapidement les fibres.",
        "Halls d'immeubles récents avec accès sécurisé : coordination préalable avec le gestionnaire indispensable.",
        "Temps de séchage à anticiper selon la ventilation et l'épaisseur du revêtement.",
        "Taches anciennes de café ou de semelles : pré-traitement ciblé nécessaire avant extraction.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les petits immeubles du centre-ville aux escaliers étroits, comment faites-vous passer le matériel de nettoyage ?",
          answer: "<p>Nous utilisons des équipements compacts et modulables, conçus pour les accès difficiles. Les flexibles d'injection-extraction se déploient sur plusieurs étages depuis un point central, évitant de monter l'ensemble du matériel. Cette organisation permet d'intervenir même dans les cages d'escalier les plus exiguës.</p>",
        },
        {
          question:
            "Pour des taches anciennes très incrustées dans les halls proches de la Place Gabriel Péri, quelle méthode donne le meilleur résultat ?",
          answer: "<p>Les taches installées depuis plusieurs mois nécessitent un <strong>pré-détachage ciblé</strong> avant le passage en injection-extraction. Nous appliquons un produit adapté à la nature de la salissure, puis effectuons plusieurs passes croisées. Le résultat dépend de l'ancienneté et du type de fibre, mais l'amélioration visuelle est généralement nette.</p>",
        },
        {
          question:
            "Pour les bureaux en dalles textiles à la Zone d'Activités de la Molette, quels sont les avantages du shampouinage par injection-extraction ?",
          answer: "<p>L'injection-extraction permet d'extraire les <strong>salissures en profondeur</strong> sans détremper le support. Contrairement à l'encapsulation, cette méthode évacue réellement les particules au lieu de les figer. Le séchage reste rapide sur les dalles fines, et les résidus de produit sont aspirés plutôt que laissés dans la fibre.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous un entretien professionnel des moquettes dans les parties communes des résidences récentes ?",
          answer: "<p>Pour des halls à passage modéré, un nettoyage professionnel tous les six à douze mois suffit généralement. Dans les immeubles à fort trafic ou proches d'axes routiers, un rythme trimestriel préserve mieux l'aspect des fibres. Nous ajustons la fréquence après évaluation du niveau d'encrassement constaté.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec traitement des taches d'huile, gestion stricte des eaux de lavage et coordination adaptée aux contraintes d'accès.",
      whyUsBullets: [
        "Connaissance des parkings aériens et souterrains du secteur Plein Air, avec adaptation aux flux commerciaux.",
        "Autolaveuse et haute pression combinées, gestion stricte des eaux vers les évacuations existantes.",
        "Rotation véhicules par zones, balisage visible, intervention possible en horaires décalés ou nocturnes.",
      ],
      uniqueIntro: "<p>Les traces noires s'accumulent sur les sols des parkings du <strong>Centre Commercial Plein Air</strong>, là où le passage des véhicules dépose chaque jour poussière de pneus et résidus d'huile. Les zones de circulation, les rampes d'accès et les angles morts concentrent un encrassement visible qui ternit l'image de la résidence ou du commerce.</p>\n\n<p class=\"mt-4\">Un sol de parking propre change la perception des usagers dès leur arrivée. Pour les copropriétés récentes équipées de parkings souterrains en <strong>béton brut</strong>, comme pour les surfaces aériennes en enrobé, l'entretien régulier limite les plaintes et préserve les revêtements. Les gestionnaires évitent ainsi les dégradations prématurées et les réclamations répétées.</p>\n\n<p class=\"mt-4\">L'intervention s'organise autour des contraintes réelles du site : rotation des véhicules, balisage sécurisé, horaires adaptés. La proximité des <strong>axes A1 et A3</strong> génère des retombées de particules qui justifient un lavage mécanisé régulier, avec gestion rigoureuse des eaux pour respecter les évacuations existantes.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et rampes sécurisées</h3>\n<p>Le résultat attendu : un revêtement débarrassé des taches d'huile, des traces de pneus et de la poussière accumulée. Les rampes retrouvent leur adhérence, les rigoles leur fonction d'évacuation.</p>\n<p class=\"mt-4\">L'autolaveuse ou la haute pression avec dégraissant adapté traite l'ensemble des surfaces. Les zones critiques — pieds de murs, angles morts, abords des places PMR — reçoivent une attention particulière.</p>\n\n<h3>Gestion des eaux maîtrisée</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations prévues, sans rejet sauvage ni stagnation. Le diagnostic préalable identifie l'état des regards et rigoles pour adapter le débit et éviter tout débordement.</p>\n\n<h3>Coordination et accès fluides</h3>\n<p>Le balisage sécurise les usagers pendant l'intervention. La rotation des véhicules s'organise par zones pour maintenir l'accès au parking. Un compte-rendu avec photos avant/après peut être transmis au syndic ou au gestionnaire selon la demande.</p>",
      specificChallenges: [
        "Taches d'huile anciennes sur enrobé des parkings aériens du Centre Commercial Plein Air.",
        "Retombées de particules noires liées à la proximité des axes A1 et A3.",
        "Coordination avec les flux clients pour limiter la gêne pendant les heures d'ouverture.",
        "Gestion des eaux de lavage vers les rigoles sans débordement ni rejet sauvage.",
        "Rampes d'accès à traiter pour maintenir l'adhérence et éviter les glissades.",
      ],
      faqAdditions: [
        {
          question:
            "Comment adaptez-vous le lavage entre parkings souterrains de copropriétés récentes et parkings aériens au Blanc-Mesnil ?",
          answer: "<p>Le diagnostic identifie le revêtement — béton brut en souterrain, enrobé en aérien — et l'état des évacuations. L'autolaveuse convient aux surfaces lisses des sous-sols, tandis que la haute pression avec dégraissant traite les zones extérieures plus encrassées. Le protocole s'ajuste à chaque configuration.</p>",
        },
        {
          question:
            "Au Centre Commercial Plein Air, quelles solutions retirent efficacement les taches d'huile anciennes sur l'enrobé ?",
          answer: "<p>Un dégraissant professionnel est appliqué avant le passage de l'autolaveuse ou de la haute pression. Les taches anciennes nécessitent parfois plusieurs passes ciblées. Le temps de contact du produit est adapté à l'ancienneté de la salissure pour obtenir un résultat visible sans abîmer le revêtement.</p>",
        },
        {
          question:
            "Pour un parking aérien proche des axes routiers, comment gérez-vous les eaux de lavage ?",
          answer: "<p>Les eaux sont dirigées vers les rigoles et regards existants, jamais vers la voirie ou les espaces verts. Le débit est contrôlé pour éviter les débordements. En cas de doute sur l'état des évacuations, un test préalable permet d'ajuster la méthode avant le lavage complet.</p>",
        },
        {
          question:
            "Quelles plages horaires proposez-vous pour décaper le parking sans gêner les clients du centre commercial ?",
          answer: "<p>L'intervention peut se dérouler tôt le matin avant l'ouverture des commerces, en soirée après fermeture, ou la nuit selon les autorisations. Le balisage sécurise les zones en cours de traitement si une partie du parking reste accessible pendant l'opération.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au support, protection des menuiseries et gestion maîtrisée de l'évacuation d'eau pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux retombées des axes A1/A3 et des chantiers du Blanc-Mesnil.",
        "Pression ajustée selon le support — béton ancien, carrelage récent ou dalles sur plots.",
        "Gestion stricte de l'évacuation d'eau pour éviter toute nuisance aux voisins du dessous.",
      ],
      uniqueIntro: "<p>Dans le secteur de la <strong>Cité 212</strong>, les balcons filants et loggias accumulent rapidement un voile grisâtre. Les retombées des axes routiers proches se déposent sur les garde-corps, s'incrustent dans les joints et ternissent le carrelage. Après quelques mois sans entretien, la surface devient collante au toucher, les coins restent humides plus longtemps, et les traces noires marquent durablement le sol.</p>\n\n<p class=\"mt-4\">Sur les immeubles anciens en <strong>béton brut</strong> comme sur les résidences récentes avec carrelage ou dalles sur plots, le résultat est le même : un espace extérieur qu'on hésite à utiliser. Les plantes jaunissent sous la poussière, le mobilier se salit dès qu'on le sort, et l'envie de profiter du balcon disparaît. Retrouver une surface propre change l'usage quotidien de cet espace.</p>\n\n<p class=\"mt-4\">Face à la <strong>pollution atmosphérique liée aux axes A1 et A3</strong> et aux poussières de chantiers fréquents dans la commune, une intervention structurée permet de traiter chaque zone sans risquer de coulures chez les voisins du dessous. Le diagnostic préalable identifie les supports et adapte la méthode.</p>",
      uniqueDeepDive: "<h3>Dépôts incrustés et surfaces encrassées</h3>\n<p>Les feuilles mortes, la terre accumulée et les débris sont d'abord retirés manuellement. Le mobilier et les plantes sont déplacés ou protégés par bâchage. Les menuiseries reçoivent une protection pour éviter toute projection.</p>\n\n<h3>Traces noires et joints ternis</h3>\n<p>Un produit adapté au support — béton, carrelage ou dalles — est appliqué puis brossé. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée. La pression reste contrôlée pour préserver les joints fragiles, avec rinçage maîtrisé.</p>\n\n<h3>Risque de coulures et séchage</h3>\n<p>L'évacuation de l'eau est canalisée pour protéger la façade et les balcons inférieurs. Un contrôle visuel vérifie l'absence de traces résiduelles. Le séchage naturel permet une réutilisation rapide, accompagné de conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Pollution noire des axes A1/A3 incrustée sur garde-corps et sols.",
        "Joints fragiles sur balcons béton années 30 de la Cité 212.",
        "Évacuation d'eau à maîtriser pour protéger les voisins du dessous.",
        "Loggias fermées nécessitant une ventilation adaptée pendant le séchage.",
        "Poussières de chantiers fréquentes liées aux projets urbains en cours.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons en béton de la Cité 212, quelles méthodes préservent les joints tout en éliminant la pollution ?",
          answer: "<p>Le béton ancien de la Cité 212 présente des joints sensibles à la pression. Nous utilisons un brossage manuel combiné à un produit désincrustant doux, suivi d'un rinçage basse pression. Cette approche retire les dépôts noirs sans fragiliser les jointures ni créer de fissures.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation de l'eau pour éviter les coulures chez les voisins en centre-ville ?",
          answer: "<p>Avant le rinçage, nous installons des protections en bas de balcon et canalisons l'écoulement vers les évacuations existantes. Le débit reste contrôlé pour limiter les projections. En cas de balcon sans évacuation directe, l'eau est aspirée progressivement pour éviter tout débordement.</p>",
        },
        {
          question:
            "Face aux dépôts noirs dus aux axes A1 et A3, quelle préparation spécifique appliquez-vous sur les garde-corps et sols ?",
          answer: "<p>Les particules de pollution routière adhèrent fortement aux surfaces. Nous appliquons un dégraissant adapté au métal des garde-corps et un détergent alcalin sur les sols. Le temps de pose permet de décoller les résidus avant brossage, évitant ainsi de frotter excessivement les revêtements.</p>",
        },
        {
          question:
            "Quelle différence de protocole appliquez-vous entre loggias et balcons ouverts dans les résidences du centre ?",
          answer: "<p>Les loggias fermées retiennent davantage l'humidité après intervention. Nous réduisons la quantité d'eau utilisée et privilégions le séchage assisté par ventilation. Sur les balcons ouverts, le rinçage peut être plus généreux car l'évaporation naturelle accélère le séchage sans risque de stagnation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des immeubles à corniches et loggias exposées, comme ceux de la Cité Pierre Sémard.",
        "Protocole strict avec EPI complets, confinement systématique et désinfection virucide certifiée.",
        "Évacuation des déchets en sacs étanches, sans nuisance pour le voisinage ni stockage sur place.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les rebords et le sol du balcon. À la <strong>Cité Pierre Sémard</strong>, les loggias et corniches de l'architecture atypique offrent des recoins propices aux pigeons. L'odeur s'installe, le linge étendu absorbe les particules, et l'espace extérieur devient inutilisable. Ce n'est plus un simple désagrément visuel : c'est une gêne quotidienne qui s'amplifie.</p>\n\n<p class=\"mt-4\">Un traitement adapté redonne un balcon sain et utilisable. Les <strong>corniches et rebords en béton</strong>, typiques des immeubles du secteur, retiennent les dépôts et nécessitent un décrassage méthodique. Après assainissement, vous retrouvez un espace aéré, sans odeur persistante, où étendre du linge ou prendre l'air redevient possible sans appréhension.</p>\n\n<p class=\"mt-4\">La <strong>proximité des espaces verts</strong> favorise la présence régulière de volatiles. Notre intervention inclut diagnostic des zones d'accumulation, confinement de l'espace, désinfection complète et conseils pour limiter le retour des oiseaux.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace propre, sans trace ni odeur résiduelle. Le sol, le garde-corps et les parois mitoyennes sont traités. Un produit virucide homologué élimine les agents pathogènes présents dans les déjections.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, l'équipe installe un bâchage pour isoler la zone et protéger l'intérieur du logement. Les fientes sont humidifiées pour neutraliser l'envol de poussières contaminées. La collecte s'effectue manuellement, avec conditionnement en sacs étanches.</p>\n<p class=\"mt-4\">Le technicien porte combinaison jetable, masque FFP2, lunettes et gants. Cette protection évite tout contact direct avec les matières organiques.</p>\n\n<h3>Rinçage et recommandations anti-retour</h3>\n<p>Après désinfection, un rinçage final prépare le balcon à une réutilisation sous 24 à 48 heures selon ventilation. Nous proposons, si souhaité, la pose de pics ou filets sur les rebords pour dissuader une nouvelle installation des pigeons.</p>",
      specificChallenges: [
        "Corniches architecturales de la Cité Pierre Sémard : recoins difficiles d'accès où les fientes s'accumulent.",
        "Loggias semi-fermées retenant l'humidité et amplifiant les odeurs après plusieurs jours sans traitement.",
        "Proximité du Parc Anne-de-Kiev : zone de nidification favorisant le retour régulier des pigeons.",
        "Béton poreux sur certains balcons anciens : risque de taches persistantes si intervention tardive.",
        "Coordination avec les voisins pour éviter les nuisances lors du rinçage et de l'évacuation.",
      ],
      faqAdditions: [
        {
          question:
            "Les corniches de la Cité Pierre Sémard sont couvertes de fientes : quels risques sanitaires faut-il craindre ?",
          answer: "<p>Les déjections de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) susceptibles de provoquer des troubles respiratoires ou des allergies. Sur les corniches exposées, l'accumulation favorise la prolifération. Une désinfection après retrait des dépôts neutralise ces risques et rend l'espace à nouveau sain.</p>",
        },
        {
          question:
            "Quel protocole EPI et quelles étapes de désinfection appliquez-vous sur des balcons fortement salis ?",
          answer: "<p>Le technicien intervient avec masque FFP2, combinaison jetable, lunettes et gants. Après confinement de la zone et humidification des fientes, la collecte s'effectue manuellement. Un produit virucide est ensuite appliqué sur toutes les surfaces — sol, garde-corps, parois — avec respect du temps de contact avant rinçage.</p>",
        },
        {
          question:
            "Après retrait des fientes près du Parc Anne-de-Kiev, la désinfection est-elle systématique ?",
          answer: "<p>Oui. La proximité d'espaces verts augmente la fréquence de présence des pigeons et donc la charge organique des dépôts. Chaque intervention inclut une désinfection complète avec un produit homologué, quel que soit le volume de fientes constaté. C'est une étape non négociable du protocole.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets contaminés lors d'un chantier en copropriété ?",
          answer: "<p>Les fientes collectées sont conditionnées dans des sacs étanches fermés sur place. L'équipe les emporte directement sans stockage dans les parties communes. En immeuble, nous coordonnons l'accès avec le gardien ou le syndic pour limiter la gêne et garantir une évacuation discrète et rapide.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un intérieur sain.",
      whyUsBullets: [
        "Interventions régulières dans les pavillons et appartements familiaux du Blanc-Mesnil, avec connaissance des accès parfois contraints.",
        "Détachage adapté à chaque fibre et extraction contrôlée pour un séchage rapide sans risque de décoloration.",
        "Organisation souple pour intervenir en journée ou en fin d'après-midi, remise en service du mobilier sous 24 à 48 heures.",
      ],
      uniqueIntro: "<p>Comment préserver la propreté d'un canapé familial quand les enfants y prennent leur goûter ou que le chien s'y installe chaque soir ? Dans le <strong>quartier des Tilleuls</strong> comme dans les zones pavillonnaires Nord et Sud du Blanc-Mesnil, les textiles d'ameublement accumulent taches de café, traces de gras et poussières incrustées au fil des mois. Les odeurs s'installent, les fibres perdent leur éclat, et un simple aspirateur ne suffit plus.</p>\n\n<p class=\"mt-4\">Un entretien en profondeur redonne au tissu sa fraîcheur d'origine. Les couleurs retrouvent leur intensité, les odeurs désagréables disparaissent, et l'assise redevient agréable. Dans les <strong>petits collectifs sans ascenseur</strong> ou les pavillons aux escaliers étroits, nous adaptons notre intervention pour accéder à chaque pièce sans difficulté, matériel compact à l'appui.</p>\n\n<p class=\"mt-4\">Que vous soyez locataire préparant un état des lieux ou propriétaire souhaitant prolonger la durée de vie de votre mobilier, notre protocole s'ajuste à vos contraintes. La <strong>rotation locative fréquente</strong> dans certains secteurs impose des interventions rapides et efficaces, avec remise en service du mobilier sous 24 à 48 heures selon l'épaisseur des textiles.</p>",
      uniqueDeepDive: "<h3>Textile assaini et fibres ravivées</h3>\n<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus invisibles. Les couleurs reprennent de l'éclat, les odeurs sont neutralisées, et le toucher redevient agréable.</p>\n<p class=\"mt-4\">Pour y parvenir, nous commençons par identifier le type de tissu : coton, synthétique, velours ou laine. Chaque matière réagit différemment aux produits et à la température.</p>\n\n<h3>Détachage ciblé et injection-extraction</h3>\n<p>Les taches tenaces — café, vin, urine, graisse — reçoivent un pré-traitement enzymatique adapté. Un test discret sur zone cachée garantit l'absence de réaction indésirable sur les textiles fragiles.</p>\n<p class=\"mt-4\">L'injection-extraction permet ensuite de nettoyer en profondeur sans détremper le tissu. La pression et la température sont ajustées selon la résistance des fibres.</p>\n\n<h3>Extraction maximale et consignes de séchage</h3>\n<p>L'eau résiduelle est aspirée au maximum pour accélérer le séchage. Selon l'épaisseur du textile et la ventilation de la pièce, comptez entre 4 et 12 heures avant utilisation. Nous vous indiquons la fréquence d'entretien recommandée pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Taches d'enfants et d'animaux fréquentes dans les foyers pavillonnaires du quartier Nord.",
        "Accès matériel parfois difficile dans les petits collectifs sans ascenseur du centre.",
        "Stationnement limité en zone pavillonnaire : intervention organisée pour limiter la gêne.",
        "Textiles variés selon les intérieurs : velours, coton, synthétique, chacun nécessite un réglage adapté.",
        "Rotation locative importante : nettoyage rapide avant état des lieux dans le secteur des Tilleuls.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé en tissu synthétique dans un pavillon du quartier Nord, quelle méthode privilégiez-vous entre vapeur et shampouinage ?",
          answer: "<p>Le choix dépend de la nature du tissu et de son état. Sur un synthétique résistant, l'injection-extraction offre un nettoyage en profondeur efficace. Si le textile est fragile ou déjà usé, nous optons pour une approche plus douce avec température réduite. Un test préalable sur zone cachée permet de valider la méthode sans risque.</p>",
        },
        {
          question:
            "Un locataire allergique souhaite réduire les acariens dans son appartement : quel résultat attendre d'un nettoyage canapé et tapis ?",
          answer: "<p>L'extraction en profondeur déloge une grande partie des acariens, poussières et allergènes accumulés dans les fibres. Le résultat est une amélioration notable de la qualité de l'air intérieur et du confort respiratoire. Pour maintenir cet effet, nous recommandons un entretien régulier, surtout dans les logements avec animaux ou enfants.</p>",
        },
        {
          question:
            "Dans un petit immeuble sans ascenseur au centre du Blanc-Mesnil, combien de temps de séchage prévoir après nettoyage d'un canapé ?",
          answer: "<p>Le temps de séchage varie entre 4 et 12 heures selon l'épaisseur du tissu et la ventilation de la pièce. Notre extraction maximale réduit l'humidité résiduelle au minimum. Nous vous conseillons d'aérer et d'éviter de vous asseoir sur le canapé pendant les premières heures pour un séchage optimal.</p>",
        },
        {
          question:
            "En zone pavillonnaire où le stationnement est limité, comment organisez-vous l'intervention pour récupérer un tapis lourd ?",
          answer: "<p>Nous convenons d'un créneau horaire adapté et identifions à l'avance les possibilités de stationnement proche de votre domicile. Pour les tapis volumineux, nous prévoyons le matériel de manutention nécessaire. L'intervention reste rapide : comptez entre 30 minutes et une heure sur place selon la surface à traiter.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts noirs, pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires du Blanc-Mesnil, souvent ombragées et exposées aux retombées végétales du parc.",
        "Adaptation du traitement selon le support : pression modulée sur dalles gravillonnées, produit spécifique sur carrelage ou béton.",
        "Protection systématique du mobilier et des plantes, gestion de l'évacuation d'eau sans impact sur les voisins.",
      ],
      uniqueIntro: "<p>Les traces verdâtres et les dépôts sombres sont visibles sur de nombreuses terrasses du Blanc-Mesnil, notamment dans les zones pavillonnaires proches du <strong>Parc Anne-de-Kiev</strong>. L'ombre des arbres, combinée à l'humidité persistante, favorise l'apparition de mousse et de lichens qui s'étendent progressivement sur le carrelage ou les dalles. Ces surfaces deviennent glissantes après la pluie et perdent leur aspect d'origine.</p>\n\n<p class=\"mt-4\">Sur les supports courants — <strong>carrelage, dalles gravillonnées ou béton</strong> — les salissures s'incrustent dans les joints et les aspérités. Le mobilier de jardin laisse des marques, les jardinières créent des auréoles. La terrasse, censée prolonger l'espace de vie, devient un endroit qu'on évite d'utiliser ou qu'on hésite à montrer.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de traiter chaque type de support avec la méthode appropriée. Nous adaptons la pression et les produits selon les matériaux présents, en tenant compte des <strong>retombées de pollution des axes routiers</strong> qui noircissent les surfaces exposées.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur et les plantes sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les feuilles mortes, la terre accumulée et les débris végétaux avant tout traitement humide.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour carrelage, pierre naturelle ou dalles gravillonnées. Le brossage — manuel ou mécanique selon la surface — décolle les mousses et les salissures incrustées.</p>\n<p class=\"mt-4\">La haute pression intervient ensuite avec un réglage contrôlé pour préserver les joints et les matériaux poreux. Les garde-corps et murets périphériques sont traités dans la même séquence.</p>\n\n<h3>Finalisation et évacuation</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont rincées si nécessaire.</p>\n<p class=\"mt-4\">Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts. Le mobilier est remis en place une fois le séchage suffisant.</p>",
      specificChallenges: [
        "Mousse persistante sur les terrasses ombragées proches du Parc Anne-de-Kiev.",
        "Dalles gravillonnées sensibles à la haute pression : réglage adapté pour préserver le revêtement.",
        "Dépôts noirs liés aux retombées de pollution des axes A1 et A3.",
        "Passage du matériel par l'intérieur dans les maisons mitoyennes du quartier pavillonnaire.",
        "Joints de carrelage encrassés nécessitant un brossage ciblé avant rinçage.",
      ],
      faqAdditions: [
        {
          question:
            "Ma terrasse près du Parc Anne-de-Kiev présente de la mousse chaque année : quel traitement proposez-vous ?",
          answer: "<p>Nous appliquons un traitement anti-mousse adapté au support après le nettoyage principal. Sur les terrasses ombragées proches du parc, l'humidité favorise la repousse rapide. Le produit préventif ralentit cette réapparition pendant plusieurs mois, selon l'exposition et les conditions météo.</p>",
        },
        {
          question:
            "Pour des dalles gravillonnées, comment évitez-vous d'endommager la surface avec la haute pression ?",
          answer: "<p>La pression est réglée en fonction du matériau : les dalles gravillonnées supportent mal un jet trop puissant qui déchausse les gravillons. Nous utilisons une buse adaptée et maintenons une distance suffisante. Le brossage préalable réduit le besoin de pression intense sur ce type de revêtement.</p>",
        },
        {
          question:
            "Sur ma terrasse carrelée de pavillon, vaut-il mieux éviter le Karcher ?",
          answer: "<p>Le carrelage supporte généralement bien la haute pression, mais les joints peuvent se dégrader si le jet est trop concentré. Nous adaptons le réglage et l'angle d'attaque pour traiter efficacement sans fragiliser les joints. Un brossage complémentaire permet de limiter la pression nécessaire.</p>",
        },
        {
          question:
            "Faut-il déplacer les plantes et le mobilier avant votre intervention ?",
          answer: "<p>Nous pouvons nous en charger si vous le souhaitez. Le mobilier est déplacé ou bâché, les jardinières éloignées de la zone de travail. Les plantes sensibles sont protégées des projections et rincées en fin d'intervention si nécessaire. Tout est remis en place après séchage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Remise en état complète de votre logement au Blanc-Mesnil, avec traitement de chaque pièce et coordination adaptée aux délais d'état des lieux ou de fin de chantier.",
      whyUsBullets: [
        "Connaissance des typologies locales : pavillons, appartements en résidences récentes et logements locatifs du centre-ville.",
        "Polyvalence sur les surfaces rencontrées : carrelage, parquet, faïence, équipements sanitaires et vitres intérieures.",
        "Organisation calée sur vos contraintes : récupération des clés, respect du créneau imposé, restitution rapide après intervention.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou une rotation de locataires, un appartement accumule poussières, traces et résidus sur l'ensemble des surfaces. Dans le <strong>centre-ville du Blanc-Mesnil</strong>, autour de la Place Gabriel Péri, les logements livrés en ZAC ou remis entre deux baux nécessitent une mise en propreté rapide avant contrôle ou emménagement.</p>\n\n<p class=\"mt-4\">Un nettoyage complet transforme l'état général du bien : sols débarrassés des voiles de chantier, sanitaires désinfectés, vitres intérieures transparentes. Pour les <strong>pavillons avec étages</strong> comme pour les appartements en collectifs récents, chaque pièce retrouve un aspect soigné qui facilite la validation de l'état des lieux ou l'installation du nouveau résident.</p>\n\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des <strong>délais courts imposés par les agences</strong> et des contraintes de gestion des clés. Le planning s'adapte aux disponibilités du bien, avec un diagnostic préalable pour calibrer les moyens nécessaires selon la surface et le niveau d'encrassement constaté.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être validé</h3>\n<p>L'objectif est de rendre chaque pièce conforme aux attentes d'un état des lieux ou d'une remise de clés. Sols sans traces, surfaces dépoussiérées, équipements sanitaires désinfectés : le bien présente un aspect propre et neutre.</p>\n\n<h3>Traitement méthodique par zone</h3>\n<p>Le travail commence par les pièces d'eau — salle de bain, cuisine, WC — où calcaire et résidus s'accumulent. Les sols sont ensuite aspirés puis lavés selon leur nature : carrelage, parquet flottant ou revêtement souple. Vitres intérieures, interrupteurs et placards complètent le passage.</p>\n\n<h3>Coordination et accès facilités</h3>\n<p>Nous récupérons les clés auprès de l'agence ou du propriétaire selon les modalités convenues. L'intervention se cale sur le créneau disponible entre deux occupants, avec restitution des accès dès la fin du nettoyage. Un compte-rendu peut être transmis si demandé.</p>",
      specificChallenges: [
        "Délais serrés entre deux locataires pour les appartements gérés par agences locales.",
        "Résidus de chantier persistants dans les logements neufs livrés en ZAC Centre-Ville.",
        "Coordination des accès avec gardiens ou agences pour les résidences sécurisées.",
        "Surfaces variées à traiter : carrelage, parquet flottant, lino selon les biens.",
        "Stationnement limité en centre-ville nécessitant une organisation logistique adaptée.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier d'un appartement livré en ZAC Centre-Ville, quelles étapes techniques assurent un résultat conforme à l'état des lieux ?",
          answer: "<p>Nous commençons par l'élimination des voiles de plâtre et poussières fines sur toutes les surfaces. Les sols sont aspirés puis lavés selon leur revêtement. Sanitaires, vitres intérieures et placards sont traités pour un rendu neutre et validable lors du contrôle.</p>",
        },
        {
          question:
            "En cas d'état des lieux sortant aux Tilleuls, quels sont vos délais d'intervention pour un nettoyage complet avant remise des clefs ?",
          answer: "<p>Selon la surface et l'état du logement, nous intervenons généralement sous 48 à 72 heures après confirmation. Pour les situations urgentes, un créneau peut être avancé si notre planning le permet. Le délai exact est confirmé après échange sur les contraintes du bien.</p>",
        },
        {
          question:
            "Comment établissez-vous un devis pour le nettoyage d'un appartement 3 pièces près de la Mairie, Place Gabriel Péri ?",
          answer: "<p>Le devis tient compte de la surface totale, du nombre de pièces d'eau et du niveau d'encrassement constaté. Un échange préalable — photos ou visite rapide — permet de calibrer les moyens nécessaires et de proposer un chiffrage adapté au contexte du bien.</p>",
        },
        {
          question:
            "Travaillez-vous en coordination avec les agences locales pour la gestion des clés et l'organisation du nettoyage fin de chantier ?",
          answer: "<p>Oui, nous récupérons les clés directement auprès de l'agence ou du propriétaire selon les modalités convenues. L'intervention se cale sur le créneau disponible, et les accès sont restitués dès la fin du passage. Un compte-rendu peut être transmis si l'agence le demande.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;