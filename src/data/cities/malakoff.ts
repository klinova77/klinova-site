import type { City } from "~/types/geo";

const city: City = {
  name: "Malakoff",
  slug: "malakoff",
  postalCodes: ["92240"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Malakoff. Une équipe structurée, des interventions coordonnées avec syndics et gestionnaires, du quartier Val de Seine jusqu'aux résidences du Clos Montholon.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 <p> puis <ul>
  hubIntro: "<p>À Malakoff, ville du Fort de Vanves au carrefour de la ligne 13 et de la Coulée Verte, Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de leurs locaux. Notre implantation en petite couronne permet une <strong>réactivité adaptée aux contraintes urbaines</strong> de la commune.</p>\
<p class=\"mt-4\">Nous organisons les prestations selon vos besoins : fréquence d'intervention, horaires décalés pour limiter la gêne, reporting si nécessaire. Chaque site fait l'objet d'un diagnostic préalable pour adapter nos méthodes au bâti et aux accès.</p>\
<ul>\
  <li><strong>Coordination terrain :</strong> Prise de contact avec gardiens ou gestionnaires avant chaque intervention, gestion des accès par digicode ou badge, adaptation aux contraintes de stationnement.</li>\
  <li><strong>Méthodes adaptées au bâti :</strong> Immeubles anciens du centre, grands ensembles de la Pierre Plate ou résidences récentes : nous ajustons équipements et protocoles selon la configuration.</li>\
  <li><strong>Suivi et transparence :</strong> Compte-rendu d'intervention disponible sur demande, interlocuteur dédié pour les copropriétés et entreprises du secteur Val de Seine.</li>\
</ul>",

  citySpecificChallenges: [
    "<strong>Pollution du Périphérique</strong> : dépôts noirs sur balcons et façades des immeubles côté nord.",
    "Parkings souterrains des résidences années 70-80 : béton brut encrassé, gaines poussiéreuses.",
    "Halls d'entrée à fort passage près des stations de la <strong>ligne 13</strong> : encrassement rapide.",
    "Stationnement difficile en centre-ville : coordination nécessaire pour le matériel.",
    "Immeubles anciens avec escaliers étroits : adaptation des équipements indispensable.",
    "Terrasses et balcons exposés aux poussières de la <strong>D906</strong> (avenue Pierre Brossolette).",
  ],

  districts: [
    "Quartier Nord",
    "Quartier Centre",
    "Quartier Sud",
    "Quartier Est (Barbusse)",
    "Quartier Ouest (Val de Seine)",
  ],

  nearbyCities: [
        "vanves",
        "chatillon",
        "montrouge",
        "bagneux",
        "issy-les-moulineaux",
        "fontenay-aux-roses",
        "arcueil",
        "gentilly",
        "clamart",
        "cachan"
      ],

  landmarks: [
    "Mairie de Malakoff",
    "Parc Salagnac",
    "Fort de Vanves",
    "Coulée Verte du Sud Parisien",
    "Théâtre 71",
    "Zone d'activités Val de Seine",
  ],

  faq: [
    {
      question: "Comment gérez-vous les interventions dans les rues étroites du centre de Malakoff ?",
      answer: "<p>Nous anticipons les contraintes de stationnement en privilégiant des <strong>créneaux horaires adaptés</strong> (tôt le matin ou en dehors des jours de marché). Nos véhicules sont dimensionnés pour accéder aux rues les plus étroites. Si nécessaire, nous coordonnons avec le gardien ou le syndic pour un accès facilité.</p>",
    },
    {
      question: "Proposez-vous un interlocuteur unique pour les copropriétés ?",
      answer: "<p>Oui. Chaque copropriété dispose d'un <strong>référent Klinova</strong> qui centralise les demandes, planifie les interventions et assure le suivi. Ce fonctionnement simplifie les échanges avec le conseil syndical et permet d'ajuster rapidement les prestations si besoin.</p>",
    },
    {
      question: "Quels délais pour une intervention urgente à Malakoff ?",
      answer: "<p>Selon la nature de la demande et notre planning, nous intervenons <strong>dès que possible</strong> pour les situations prioritaires (dégât, salissure importante). Pour les prestations régulières, un calendrier est établi en amont avec le gestionnaire.</p>",
    },
    {
      question: "Comment adaptez-vous vos horaires aux immeubles de bureaux du quartier Val de Seine ?",
      answer: "<p>Les interventions en locaux tertiaires sont généralement programmées <strong>en dehors des heures d'activité</strong> : tôt le matin, en soirée ou le week-end selon les accès autorisés. Nous validons systématiquement le créneau avec le gestionnaire du site.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: n'inclure que les services demandés
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en service rapide de vos espaces professionnels ou parties communes.",
      whyUsBullets: [
        "Connaissance des configurations de bureaux et copropriétés du secteur Val de Seine à Malakoff.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées épaisses.",
        "Interventions planifiées en dehors des heures de bureau ou en coordination avec les occupants.",
      ],
      uniqueIntro: "<p>Dans la <strong>zone d'activités Val de Seine</strong>, les dalles de moquette des open spaces et couloirs de bureaux accumulent poussières fines et traces de passage en quelques semaines. Les fibres textiles retiennent particules, résidus de semelles et taches de café, formant un voile grisâtre qui ternit l'ensemble du revêtement. Ce phénomène touche aussi les parties communes des copropriétés voisines, où les escaliers moquettés subissent un trafic quotidien soutenu.</p>\
<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur aspect d'origine et améliore la qualité de l'air intérieur. Dans les <strong>immeubles de bureaux récents</strong> comme dans les résidences équipées de moquette bouclée, le détachage ciblé élimine les auréoles tenaces tandis que l'extraction en profondeur retire les salissures piégées à la base des fibres. Le rendu visuel s'en trouve nettement amélioré, avec un toucher plus agréable au quotidien.</p>\
<p class=\"mt-4\">L'intervention s'organise selon les flux professionnels et les contraintes de livraison propres au secteur. Diagnostic préalable, protection des éléments fixes et planification horaire permettent de limiter toute perturbation des activités en cours.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\
<p>Les couloirs et espaces de passage concentrent l'essentiel des salissures. Après aspiration préalable, l'injection-extraction cible ces surfaces à fort trafic avec plusieurs passes successives. Les fibres compactées retrouvent leur gonflant, les traces de semelles disparaissent.</p>\
\
<h3>Postes de travail et espaces cloisonnés</h3>\
<p>Sous les bureaux et autour du mobilier, la moquette piège poussières et miettes. Le traitement s'effectue par sections, en déplaçant les éléments mobiles. Les plinthes et pieds de cloisons sont protégés avant toute application de solution nettoyante.</p>\
\
<h3>Halls et parties communes</h3>\
<p>Les entrées d'immeubles et paliers reçoivent un <strong>traitement renforcé sur les zones d'usure</strong> visible. Le détachage préalable traite les taches anciennes avant extraction. Le temps de séchage varie selon l'épaisseur du revêtement et la ventilation disponible, généralement entre 4 et 8 heures pour une remise en service complète.</p>",
      specificChallenges: [
        "<strong>Dalles textiles des bureaux Val de Seine</strong> encrassées par le passage quotidien des équipes.",
        "Moquettes bouclées des halls de copropriétés marquées par les traces de semelles humides.",
        "Escaliers étroits des immeubles anciens du centre compliquant l'acheminement du matériel.",
        "Stationnement limité en zone dense nécessitant une organisation logistique anticipée.",
        "<strong>Taches de café et auréoles anciennes</strong> incrustées dans les fibres des espaces de réunion.",
      ],
      faqAdditions: [
        {
          question: "Dans les immeubles du centre de Malakoff avec escaliers étroits, comment organisez-vous la montée du matériel pour le nettoyage de moquette ?",
          answer: "<p>Le matériel d'injection-extraction se compose d'<strong>éléments modulables, transportables à la main</strong> dans les cages d'escalier réduites. Nous repérons les accès avant intervention pour adapter le conditionnement. Si nécessaire, les flexibles sont prolongés depuis un point de stationnement proche pour limiter les allers-retours.</p>",
        },
        {
          question: "Après shampouinage des moquettes dans les bureaux du Val de Seine, quel délai avant remise en service des locaux ?",
          answer: "<p>Le temps de séchage dépend de <strong>l'épaisseur des dalles textiles et de la ventilation</strong>. En conditions normales, comptez 4 à 6 heures pour un passage piéton léger, 8 heures pour une utilisation complète. Nous pouvons intervenir en fin de journée pour une reprise d'activité le lendemain matin.</p>",
        },
        {
          question: "Comment protégez-vous plinthes et angles sensibles dans les halls lors du ravivage intensif de moquette ?",
          answer: "<p>Des protections plastifiées sont posées le long des plinthes et bas de murs avant toute application de solution. Les angles et pieds de mobilier fixe reçoivent une protection spécifique. Cette précaution évite les projections et préserve les finitions murales pendant l'extraction.</p>",
        },
        {
          question: "Avec le stationnement limité près de la mairie de Malakoff, comment planifiez-vous l'intervention avec un équipement lourd ?",
          answer: "<p>Nous identifions les créneaux de stationnement autorisé ou les emplacements de dépose-minute à proximité. Le matériel est déchargé rapidement puis acheminé à pied. Pour les interventions longues, une coordination préalable avec le gardien ou le gestionnaire permet de sécuriser un accès adapté.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec traitement des taches d'huile, gestion maîtrisée des eaux usées et balisage sécurisé pour les résidents.",
      whyUsBullets: [
        "Connaissance des accès et contraintes de stationnement dans les résidences de Malakoff, notamment autour de la Pierre Plate.",
        "Autolaveuse professionnelle et gestion stricte des eaux usées pour respecter les évacuations existantes.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la gêne des résidents.",
      ],
      uniqueIntro: "<p>Comment maintenir un parking souterrain propre quand les véhicules y circulent quotidiennement et que les traces d'huile s'accumulent sur le béton ? Dans les résidences de la <strong>Cité de la Pierre Plate</strong>, les sous-sols subissent un encrassement progressif qui finit par ternir l'image de la copropriété et compliquer l'entretien courant.</p>\n<p class=\"mt-4\">Un sol dégraissé régulièrement conserve son adhérence, limite les odeurs stagnantes et rassure les copropriétaires sur la tenue générale des parties communes. Les <strong>parkings des immeubles années 70-80</strong>, souvent en béton brut ou résine, nécessitent un lavage mécanisé adapté pour éviter toute dégradation du revêtement tout en éliminant les dépôts gras.</p>\n<p class=\"mt-4\">La proximité du <strong>périphérique et de la D906</strong> accentue l'apport de suies et d'hydrocarbures dans les sous-sols ventilés. Une intervention structurée intègre le diagnostic des évacuations, la coordination avec le syndic pour la rotation des véhicules, et un compte-rendu détaillé après chaque passage.</p>",
      uniqueDeepDive: "<h3>Sol dégraissé et circulation sécurisée</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des taches d'huile, des traces de pneus et des poussières accumulées. Le balisage permet aux résidents de stationner temporairement ailleurs pendant le traitement de leur zone.</p>\n<p class=\"mt-4\">Pour y parvenir, nous procédons d'abord à un balayage mécanique, puis à l'application d'un dégraissant adapté au support identifié lors du diagnostic initial.</p>\n\n<h3>Lavage mécanisé et zones critiques</h3>\n<p>L'autolaveuse effectue plusieurs passes sur les allées de circulation. Les rampes d'accès, les angles morts et les pieds de murs reçoivent un traitement ciblé à la haute pression.</p>\n<p class=\"mt-4\">Les rigoles et regards sont vérifiés pour garantir l'écoulement correct des eaux de lavage, sans rejet vers l'extérieur.</p>\n\n<h3>Finitions et recommandations</h3>\n<p>Le dépoussiérage des blocs lumineux et des tuyauteries apparentes complète l'intervention si le syndic le demande. Un compte-rendu avec photos avant/après est transmis, accompagné d'une préconisation de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Sous-sols des copropriétés années 70-80 : béton parfois fissuré, évacuations à vérifier avant intervention.",
        "Apport de suies et hydrocarbures lié à la proximité du périphérique et de la D906.",
        "Rotation des véhicules à organiser avec le syndic pour traiter chaque zone sans bloquer les résidents.",
        "Rampes d'accès inclinées nécessitant un traitement antidérapant après lavage.",
        "Gestion des eaux de lavage en sous-sol : respect des regards et interdiction de rejet sauvage.",
      ],
      faqAdditions: [
        {
          question: "Comment enlevez-vous les taches d'huile anciennes dans le parking souterrain de la Cité de la Pierre Plate ?",
          answer: "<p>Nous appliquons un dégraissant professionnel sur les zones concernées, puis effectuons un passage à l'autolaveuse pour décoller les résidus incrustés. Les taches anciennes peuvent nécessiter plusieurs applications selon leur épaisseur et l'état du béton.</p>",
        },
        {
          question: "Quelle méthode utilisez-vous pour gérer les eaux de lavage dans un parking en sous-sol à Malakoff ?",
          answer: "<p>Avant chaque intervention, nous vérifions l'état des regards et rigoles. Les eaux chargées sont dirigées vers les évacuations existantes, jamais rejetées vers l'extérieur. Si le réseau est obstrué, nous le signalons au syndic avant de poursuivre.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous le nettoyage d'un parking très utilisé près du Val de Seine ?",
          answer: "<p>Pour un parking à fort trafic, un décrassage trimestriel permet de maintenir le sol en bon état. Si des véhicules de livraison circulent régulièrement, un passage tous les deux mois limite l'accumulation de traces grasses et de poussières.</p>",
        },
        {
          question: "Quelle différence de protocole appliquez-vous entre parkings souterrains et parkings aériens à Malakoff ?",
          answer: "<p>En souterrain, nous insistons sur la ventilation pendant le séchage et la vérification des évacuations. En aérien, le lavage haute pression est privilégié, avec une attention particulière aux zones exposées aux intempéries et aux feuilles mortes.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Malakoff, avec traitement des dépôts noirs et gestion maîtrisée des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des balcons exposés à la pollution urbaine sur les axes majeurs de Malakoff.",
        "Pression ajustée selon le support — carrelage, béton peint ou joints anciens — pour éviter toute dégradation.",
        "Gestion anti-coulures systématique et coordination avec vous pour intervenir sans gêner le voisinage.",
      ],
      uniqueIntro: "<p>Les traces noires et les voiles grisâtres sont visibles sur de nombreux balcons le long de l'Avenue Pierre Brossolette. La circulation dense sur cet axe dépose un film de particules fines qui s'incruste dans les joints et ternit les surfaces en quelques semaines. Ce dépôt collant retient l'humidité et favorise l'apparition de mousses dès les premiers redoux.</p>\n<p class=\"mt-4\">Sur les carrelages grès cérame et bétons peints fréquents dans les immeubles de Malakoff, cette couche encrassée donne une impression de négligence alors même que l'intérieur est impeccable. Le balcon devient un espace qu'on évite d'utiliser, faute de pouvoir s'y installer sans salir vêtements ou mobilier. Le confort extérieur disparaît progressivement.</p>\n<p class=\"mt-4\">L'exposition aux particules liées au Périphérique et à la D906 impose une intervention adaptée. Nous établissons un diagnostic du support, protégeons les menuiseries et le mobilier, puis procédons au traitement avec une gestion rigoureuse des eaux pour éviter toute coulure chez vos voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous déplaçons le mobilier et bâchons les plantes pour les préserver des produits. Les menuiseries, fenêtres et portes reçoivent une protection adhésive. Les gros dépôts — feuilles mortes, terre accumulée, débris divers — sont retirés manuellement avant tout mouillage.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour joints fragiles, dégraissant sur béton peint. Le brossage manuel ou mécanique décolle les salissures incrustées. Le garde-corps, les vitrages et les murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Rinçage et séchage</h3>\n<p>Le rinçage s'effectue à pression contrôlée pour préserver les joints. L'eau est dirigée vers l'évacuation existante ou aspirée pour éviter les coulures sur la façade et chez les voisins. Après séchage, nous remettons le mobilier en place et vous transmettons nos conseils d'entretien pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "Dépôts noirs liés au trafic de l'Avenue Pierre Brossolette, incrustés dans les joints.",
        "Carrelage grès cérame sensible aux produits trop acides ou aux pressions excessives.",
        "Gestion des eaux de rinçage indispensable en immeuble collectif pour éviter les litiges.",
        "Mousses et dépôts verts récurrents après chaque hiver sur balcons orientés nord.",
        "Accès parfois contraint par digicode et absence de gardien en journée.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous sans abîmer le carrelage et les joints des balcons exposés sur l'Avenue Pierre Brossolette ?",
          answer: "<p>Nous adaptons la pression et le produit au support. Sur les carrelages grès cérame fréquents avenue Brossolette, nous utilisons une pression modérée et un détergent neutre. Les joints reçoivent un brossage manuel ciblé pour déloger les particules sans creuser le matériau.</p>",
        },
        {
          question: "Sur les balcons en centre-ville de Malakoff, comment gérez-vous les eaux de rinçage pour éviter les coulures chez les voisins ?",
          answer: "<p>L'eau est orientée vers l'évacuation existante ou aspirée au fur et à mesure. Nous installons une protection en bas du garde-corps si nécessaire. Cette méthode évite les traces sur la façade et les réclamations des occupants des étages inférieurs.</p>",
        },
        {
          question: "Après l'hiver, comment traitez-vous les dépôts verts et mousses sur les balcons proches du Périphérique ?",
          answer: "<p>Un produit anti-mousse est appliqué avant le brossage pour décoller les végétaux incrustés. Le rinçage contrôlé élimine les résidus sans projections. Sur les surfaces très encrassées par la pollution du Périphérique, nous répétons l'opération si nécessaire.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous le nettoyage des balcons très exposés avenue Pierre Brossolette ?",
          answer: "<p>Un entretien annuel suffit généralement pour les balcons peu utilisés. Sur l'avenue Brossolette, l'exposition au trafic justifie souvent deux passages par an — au printemps et à l'automne — pour maintenir un aspect propre et limiter l'incrustation des particules.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de prévention pour éviter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Malakoff, notamment les abords du Parc Salagnac et les façades anciennes du centre.",
        "Protocole strict avec EPI complets, confinement de la zone et désinfection homologuée après chaque décapage.",
        "Organisation pensée pour limiter les nuisances : bâchage, évacuation sécurisée des déchets, coordination avec les occupants.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons et corniches des immeubles situés à proximité du <strong>Parc Salagnac</strong>. Les pigeons trouvent refuge sur les modénatures des façades, et leurs déjections forment rapidement une couche compacte, difficile à retirer sans équipement adapté. L'odeur devient perceptible, le linge ne peut plus sécher dehors, et l'espace extérieur perd toute utilité.</p>\n<p class=\"mt-4\">Sur les <strong>immeubles anciens du centre de Malakoff</strong>, les corniches et rebords en pierre ou béton peint subissent une dégradation accélérée. L'acidité des fientes attaque les revêtements, laisse des traces durables et fragilise les joints. Un balcon régulièrement souillé devient une source de gêne pour les occupants et leurs voisins, sans compter les risques liés aux agents pathogènes présents dans les déjections sèches.</p>\n<p class=\"mt-4\">La présence d'espaces verts et de cours intérieures dans plusieurs résidences crée des conditions favorables à la nidification. Une décontamination structurée, suivie de mesures dissuasives, permet de retrouver un usage normal de l'espace extérieur.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées et limiter leur envol.</p>\n\n<h3>Décapage et traitement des supports</h3>\n<p>Les dépôts sont collectés manuellement puis conditionnés en sacs étanches. Le sol du balcon, le garde-corps, les vitrages et les murs mitoyens sont nettoyés avec un produit adapté au support.</p>\n<p class=\"mt-4\">Une désinfection virucide et bactéricide est appliquée sur l'ensemble des surfaces, avec respect du temps de contact nécessaire à l'élimination des agents pathogènes.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation rapide. L'installation de pics anti-pigeons sur les rebords ou d'un filet de protection peut être proposée pour limiter le retour des oiseaux.</p>\n<p class=\"mt-4\">Les déchets sont évacués dans des sacs étanches, sans stockage sur place.</p>",
      specificChallenges: [
        "Corniches fragiles sur immeubles anciens du centre, nécessitant un décapage sans pression excessive.",
        "Proximité du Parc Salagnac : présence régulière de pigeons sur les balcons des résidences voisines.",
        "Cours intérieures propices à la nidification, avec accumulation rapide de fientes sur plusieurs niveaux.",
        "Évacuation des déchets contaminés à organiser dans des rues étroites et à stationnement limité.",
        "Désinfection obligatoire pour éliminer les agents pathogènes avant réutilisation du balcon.",
      ],
      faqAdditions: [
        {
          question: "Les fientes s'accumulent sur les corniches proches du Parc Salagnac : quels risques sanitaires cela représente-t-il ?",
          answer: "<p>Les déjections de pigeons contiennent des agents pathogènes qui, une fois secs, peuvent se disperser dans l'air. Sur les corniches des immeubles proches du parc, l'exposition est fréquente. Une décontamination rapide limite les risques respiratoires pour les occupants et évite la dégradation des supports.</p>",
        },
        {
          question: "Quel protocole et quels EPI utilisez-vous pour traiter des corniches souillées sur les façades anciennes de Malakoff ?",
          answer: "<p>L'intervenant porte masque FFP2, lunettes, gants et combinaison jetable. La zone est confinée par bâchage, les fientes humidifiées avant collecte. Le décapage est adapté aux supports fragiles comme la pierre ou le béton peint, fréquents sur les immeubles du centre.</p>",
        },
        {
          question: "Après enlèvement des fientes, quelle méthode de désinfection appliquez-vous pour garantir la sécurité sanitaire ?",
          answer: "<p>Un produit virucide et bactéricide homologué est pulvérisé sur l'ensemble des surfaces traitées. Le temps de contact est respecté pour assurer l'élimination des agents pathogènes. Cette étape est systématique, quelle que soit la quantité de fientes retirée.</p>",
        },
        {
          question: "Comment organisez-vous l'évacuation des déchets contaminés lors d'un assainissement en copropriété à Malakoff ?",
          answer: "<p>Les fientes et résidus sont conditionnés en sacs étanches dès la collecte. L'évacuation est prévue en fin d'intervention pour éviter tout stockage dans les parties communes. Dans les rues étroites du centre, le stationnement du véhicule est anticipé avec le gardien ou le syndic.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Un détachage en profondeur de vos canapés, tapis et matelas à domicile, avec extraction des salissures et séchage maîtrisé pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Connaissance des logements malakoffiots et des contraintes d'accès en zone résidentielle dense.",
        "Détachage ciblé selon la nature du textile et extraction puissante pour un séchage accéléré.",
        "Intervention planifiée selon vos disponibilités, remise en service rapide pour limiter la gêne.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes sur le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans les quartiers résidentiels autour de la <strong>Rue de la Tour</strong>, les foyers avec enfants ou animaux constatent souvent que l'aspirateur seul ne suffit plus à redonner fraîcheur aux textiles.</p>\n<p class=\"mt-4\">Un canapé rafraîchi change l'atmosphère d'une pièce. Les fibres retrouvent leur souplesse, les couleurs leur éclat, et l'odeur de propre remplace celle des accidents domestiques. Que vos assises soient en <strong>synthétique, laine ou velours</strong>, chaque textile réagit différemment aux taches et nécessite une approche adaptée pour éviter les dégradations.</p>\n<p class=\"mt-4\">Notre intervention commence par un diagnostic précis du tissu et de la nature des salissures. Nous identifions les zones critiques, testons les réactions sur une partie cachée si nécessaire, puis établissons un plan de traitement adapté à votre mobilier et à vos contraintes de remise en service.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>Le résultat visé : des fibres débarrassées des salissures incrustées, des odeurs neutralisées et un aspect ravivé. Pour y parvenir, nous commençons par identifier le type de tissu et la nature des taches présentes. Un pré-traitement enzymatique cible les résidus organiques tenaces comme l'urine ou les traces alimentaires.</p>\n\n<h3>Injection-extraction en profondeur</h3>\n<p>Notre méthode repose sur l'injection d'une solution adaptée au textile, suivie d'une extraction immédiate qui emporte salissures et humidité. La pression et la température sont ajustées selon la sensibilité des fibres : plus douces pour la laine ou le velours, plus soutenues pour les synthétiques résistants.</p>\n\n<h3>Séchage maîtrisé et conseils d'usage</h3>\n<p>L'extraction maximale limite le temps de séchage à quelques heures selon l'épaisseur du textile et l'aération de la pièce. Nous vous indiquons le délai avant réutilisation et partageons des conseils pour espacer les prochaines interventions selon l'intensité d'usage familial.</p>",
      specificChallenges: [
        "Taches d'urine animales fréquentes dans les foyers avec chiens ou chats, nécessitant un traitement enzymatique.",
        "Textiles variés (velours, laine, synthétique) demandant une adaptation de pression et température.",
        "Stationnement compliqué en centre-ville pour décharger le matériel d'injection-extraction.",
        "Séchage à anticiper selon la saison et l'aération du logement pour une remise en service rapide.",
        "Taches anciennes (café, vin) incrustées depuis plusieurs mois demandant un pré-traitement renforcé.",
      ],
      faqAdditions: [
        {
          question: "Pour les foyers du quartier Rue de la Tour, éliminez-vous efficacement acariens et allergènes lors du nettoyage canapé ?",
          answer: "<p>L'injection-extraction déloge les acariens nichés dans les fibres et extrait les allergènes accumulés. Le traitement en profondeur assainit le textile sans laisser de résidus chimiques, ce qui convient aux familles sensibles ou avec jeunes enfants dans ce secteur résidentiel.</p>",
        },
        {
          question: "Face à des taches d'urine d'animaux sur un canapé, quelle méthode garantissez-vous pour neutraliser odeurs et salissures incrustées ?",
          answer: "<p>Nous appliquons un pré-traitement enzymatique qui décompose les composés organiques responsables des odeurs. L'extraction qui suit emporte les résidus en profondeur. Cette approche fonctionne sur les accidents récents comme sur les imprégnations plus anciennes fréquentes en habitat familial.</p>",
        },
        {
          question: "Combien de temps de séchage prévoyez-vous après shampouinage d'un canapé chez une famille avec enfants à Malakoff ?",
          answer: "<p>Le séchage varie de deux à six heures selon l'épaisseur du tissu et la ventilation de la pièce. Nous maximisons l'extraction pour réduire ce délai. En été ou avec fenêtres ouvertes, la remise en service intervient souvent dans l'après-midi même.</p>",
        },
        {
          question: "Comment adaptez-vous la méthode en fonction du textile (synthétique, laine, velours) pour nettoyer un canapé ?",
          answer: "<p>Chaque fibre réagit différemment à la chaleur et à la pression. Sur la laine ou le velours, nous réduisons la température et travaillons avec une aspiration plus douce. Les synthétiques supportent un traitement plus soutenu, permettant une extraction plus rapide des salissures tenaces.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Traitement complet de votre terrasse avec adaptation au support — bois, pierre ou composite — pour éliminer mousses, dépôts verts et taches tenaces sans altérer les matériaux.",
      whyUsBullets: [
        "Connaissance des terrasses du Clos Montholon et des toits-terrasses récents, avec leurs contraintes d'exposition et d'accès.",
        "Méthodes différenciées selon le support — pression contrôlée sur pierre, traitement doux sur bois composite, anti-mousse ciblé.",
        "Protection systématique du mobilier et des plantations, gestion de l'écoulement pour éviter tout désagrément au voisinage.",
      ],
      uniqueIntro: "<p>Dans le <strong>quartier du Clos Montholon</strong>, les terrasses des pavillons accumulent mousses et dépôts verts dès les premiers mois d'automne. L'ombre portée par les arbres et l'humidité persistante créent un environnement propice aux lichens qui s'incrustent entre les lames ou dans les joints. Le bois composite verdit, les dalles sur plots deviennent glissantes, et chaque saison aggrave l'aspect général de l'espace extérieur.</p>\n<p class=\"mt-4\">Une terrasse encrassée perd son attrait et limite l'usage quotidien. Les <strong>supports variés présents à Malakoff</strong> — bois composite, dalles sur plots, pierre naturelle — exigent chacun une approche différente pour éviter rayures ou décoloration. Un traitement adapté redonne une surface saine, antidérapante, et prolonge la durée de vie des matériaux sans recourir à des produits agressifs.</p>\n<p class=\"mt-4\">Les <strong>zones ombragées favorisent la repousse rapide</strong> des végétaux si le traitement reste superficiel. Une intervention structurée intègre diagnostic du support, nettoyage mécanique ou chimique selon les cas, et application préventive pour espacer les prochaines interventions.</p>",
      uniqueDeepDive: "<h3>Préparation et diagnostic</h3>\n<p>Le mobilier extérieur, jardinières et plantes sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes — reçoivent une protection contre les projections. Un examen du support identifie le matériau (bois, composite, pierre, béton) et l'état des joints pour adapter la méthode.</p>\n\n<h3>Nettoyage et traitement</h3>\n<p>Les gros dépôts — feuilles, terre, mousse épaisse — sont retirés manuellement. Un produit spécifique au support est appliqué, suivi d'un brossage mécanique ou manuel selon la porosité. La haute pression intervient uniquement sur les matériaux résistants, avec réglage adapté pour préserver joints et surfaces fragiles.</p>\n<p class=\"mt-4\">Le traitement anti-mousse est pulvérisé sur les zones à risque.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont rincées si nécessaire. Après séchage, le mobilier est remis en place. Des recommandations d'entretien saisonnier sont transmises pour limiter la réapparition des dépôts verts.</p>",
      specificChallenges: [
        "Bois composite qui verdit rapidement sous les arbres du Clos Montholon.",
        "Dalles sur plots avec joints encrassés nécessitant un nettoyage sans déplacement des éléments.",
        "Pierre naturelle poreuse sensible aux traitements trop agressifs.",
        "Zones ombragées où mousses et lichens réapparaissent en quelques mois sans traitement préventif.",
        "Gestion de l'eau sur terrasses en hauteur pour éviter coulures chez les voisins.",
      ],
      faqAdditions: [
        {
          question: "Pour les terrasses en bois composite du Clos Montholon, quelle méthode évite le noircissement et préserve le support ?",
          answer: "<p>Le bois composite ne supporte pas la haute pression forte. Nous utilisons un nettoyage basse pression combiné à un produit désincrustant adapté aux lames rainurées. Le brossage suit le sens des fibres pour éviter rayures et décoloration, puis un rinçage abondant élimine tout résidu.</p>",
        },
        {
          question: "Comment traitez-vous les mousses et lichens sur dalles ombragées pour éviter une reprise rapide de végétation ?",
          answer: "<p>Après retrait mécanique des dépôts épais, un traitement anti-mousse à action prolongée est appliqué. Ce produit agit sur plusieurs semaines et limite la réimplantation des spores. Sur les zones très exposées à l'humidité, nous recommandons une application préventive en fin d'automne.</p>",
        },
        {
          question: "Quels traitements anti-mousse appliquez-vous sur terrasse en pierre sans endommager la surface ?",
          answer: "<p>Les pierres naturelles poreuses reçoivent un produit à pH neutre qui pénètre sans attaquer le matériau. Le temps de pose est ajusté selon la densité de la pierre. Aucun acide ni chlore concentré n'est utilisé pour préserver la teinte d'origine et éviter les taches blanchâtres.</p>",
        },
        {
          question: "Quelle est la meilleure saison pour un nettoyage complet des terrasses au Clos Montholon ?",
          answer: "<p>Le printemps reste la période idéale : les mousses hivernales sont encore humides et se décollent facilement. Une intervention en avril-mai permet de profiter de la terrasse tout l'été. Un second passage préventif en octobre prépare le support avant l'hiver et limite l'accumulation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux plafonds, avec traitement adapté à chaque surface pour une restitution impeccable ou une entrée sereine.",
      whyUsBullets: [
        "Connaissance des logements malakoffiots, de leurs parquets anciens aux résidences récentes du quartier Nord.",
        "Méthodes adaptées à chaque revêtement : aspiration douce, décapage manuel, produits neutres sur surfaces fragiles.",
        "Coordination directe avec agences et artisans pour respecter vos délais d'état des lieux ou de livraison.",
      ],
      uniqueIntro: "<p>Comment remettre un appartement en ordre quand les délais se resserrent entre deux locataires ou après des travaux de rénovation ? Autour de la <strong>Place du 11 Novembre</strong>, la rotation locative impose des interventions rapides et complètes. Les agences immobilières du secteur sollicitent régulièrement des prestations capables de s'adapter aux plannings serrés des états des lieux.</p>\n<p class=\"mt-4\">Dans les <strong>logements anciens avec parquets chêne ou carrelages d'époque</strong>, les résidus de chantier, les traces de colle et la poussière fine s'accumulent dans les moindres recoins. Un nettoyage adapté redonne aux surfaces leur aspect d'origine et facilite la signature du bail ou la remise des clés sans réserve.</p>\n<p class=\"mt-4\">La proximité des commerces et des transports génère un besoin constant d'interventions structurées. Nous organisons chaque passage en coordination avec les artisans présents ou les gestionnaires, pour limiter les allers-retours et respecter les échéances fixées.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>Avant toute action, nous évaluons l'état du logement : nature des salissures, type de sols, présence de résidus de chantier. Cette étape permet d'adapter les produits et le matériel aux surfaces fragiles comme les parquets anciens ou les carrelages poreux.</p>\n<p class=\"mt-4\">Les gravats et déchets volumineux sont évacués pour dégager l'espace de travail.</p>\n\n<h3>Traitement pièce par pièce</h3>\n<p>Les pièces d'eau reçoivent un décrassage complet : sanitaires, faïences, joints et robinetterie. La cuisine fait l'objet d'un dégraissage des plans de travail et de la crédence.</p>\n<p class=\"mt-4\">Les sols sont aspirés puis lavés selon leur revêtement. Les traces de peinture ou d'enduit sont retirées manuellement sans abîmer les supports.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Interrupteurs, poignées, plinthes et intérieurs de placards sont nettoyés. Les vitres intérieures sont essuyées pour éliminer les voiles de poussière.</p>\n<p class=\"mt-4\">Un contrôle final vérifie chaque zone avant la remise des clés ou l'arrivée du nouveau locataire.</p>",
      specificChallenges: [
        "Rotation locative soutenue autour de la Mairie : délais courts entre deux occupants.",
        "Parquets chêne et carrelages anciens exigeant des produits non agressifs.",
        "Résidus de chantier fréquents dans les appartements en cours de rénovation.",
        "Stationnement limité en centre-ville : organisation du matériel en amont.",
        "Coordination avec artisans et agences pour éviter les retards de remise de clés.",
      ],
      faqAdditions: [
        {
          question: "Pour un état des lieux près de la Mairie, quel délai d'intervention garantissez-vous pour un nettoyage complet ?",
          answer: "<p>Nous intervenons selon la surface et la disponibilité du logement. Pour les demandes urgentes autour de la Place du 11 Novembre, un créneau prioritaire peut être proposé après échange téléphonique afin de respecter la date de remise des clés.</p>",
        },
        {
          question: "Pour un nettoyage post-chantier dans un appartement ancien, quelles méthodes employez-vous pour les traces de colle et de peinture ?",
          answer: "<p>Nous utilisons un décapage manuel avec des spatules adaptées et des solvants doux compatibles avec les parquets chêne ou les carrelages poreux. Cette approche évite les rayures et préserve l'aspect d'origine des revêtements présents dans les immeubles anciens du centre.</p>",
        },
        {
          question: "Après un dégât des eaux dans un logement de Malakoff, quelles étapes garantissent un assainissement complet ?",
          answer: "<p>Nous commençons par l'extraction de l'humidité résiduelle, puis nous traitons les surfaces touchées avec des produits antifongiques. Les plinthes, sols et bas de murs sont nettoyés en profondeur pour limiter le développement de moisissures et retrouver un environnement sain.</p>",
        },
        {
          question: "Comment coordonnez-vous le nettoyage avec artisans et agences lors d'une remise en état sur l'avenue Pierre Brossolette ?",
          answer: "<p>Nous échangeons directement avec les interlocuteurs concernés pour caler notre passage après la fin des travaux. Cette organisation évite les interventions redondantes et garantit un logement prêt à la date convenue, sans retard pour la signature du bail.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;