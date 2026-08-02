import type { City } from "~/types/geo";

const city: City = {
  name: "Houilles",
  slug: "houilles",
  postalCodes: ["78800"],

  department: {
    name: "Yvelines",
    code: "78",
    slug: "yvelines",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Houilles pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Du quartier de la Gare au secteur Belles-vues, une équipe locale et des méthodes adaptées au tissu pavillonnaire et aux petits collectifs de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 <p> then <ul>
  hubIntro: "<p>À Houilles, commune desservie par le RER A et le Transilien, Klinova accompagne syndics, gestionnaires et particuliers dans l'entretien régulier de leurs locaux. Notre équipe connaît les contraintes d'accès et de stationnement propres à cette ville résidentielle dense.</p>\n<p class=\"mt-4\">Nous assurons la propreté des halls, parkings et extérieurs avec une organisation pensée pour limiter la gêne des occupants. Reporting disponible, interventions planifiées selon vos créneaux, suivi terrain régulier.</p>\n<ul>\n  <li><strong>Proximité terrain :</strong> Nos techniciens interviennent rapidement sur Houilles, avec une connaissance des accès digicodes et des contraintes de stationnement du centre-ville.</li>\n  <li><strong>Coordination syndic :</strong> Planification en amont, créneaux adaptés aux copropriétés, communication fluide avec les gestionnaires pour chaque intervention.</li>\n  <li>Polyvalence : Entretien intérieur et extérieur, du hall d'immeuble au parking souterrain, en passant par les balcons et terrasses des pavillons.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Flux pendulaire RER A</strong> : halls d'immeubles sollicités matin et soir près de la gare.",
    "Parkings souterrains des petits collectifs souvent étroits, accès limité pour matériel encombrant.",
    "<strong>Pavillons avec terrasses bois exposées aux mousses</strong> et salissures saisonnières.",
    "Digicodes et badges fréquents : coordination préalable indispensable avec gardiens ou syndics.",
    "Stationnement contraint en centre-ville, créneaux d'intervention à adapter.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Quartier de la Gare",
    "Belles-vues",
    "Blanches",
    "Main de fer",
    "Pierrats",
    "Réveil-Matin",
    "Tonkin",
  ],
  nearbyCities: [
        "nanterre",
        "colombes",
        "argenteuil",
        "saint-germain-en-laye",
        "courbevoie",
        "rueil-malmaison",
        "puteaux",
        "suresnes",
        "neuilly-sur-seine",
        "franconville"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Houilles",
    "Gare de Houilles - Carrières-sur-Seine",
    "Parc Charles-de-Gaulle",
    "Centre Commandant-Millé",
    "Quartier Centre-ville",
    "Quartier de la Gare",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les copropriétés de Houilles ?",
      answer: "<p>Nous contactons le syndic ou le gardien pour définir un créneau adapté. L'accès par <strong>digicode ou badge</strong> est anticipé, et nous intervenons généralement en matinée ou en journée pour limiter la gêne. Un compte-rendu peut être transmis après chaque passage si demandé.</p>",
    },
    {
      question: "Pouvez-vous intervenir rapidement en cas de besoin urgent ?",
      answer: "<p>Oui, selon la nature de la demande et notre planning, nous pouvons organiser une intervention dans les meilleurs délais sur Houilles. Pour les situations critiques (dégât, salissure importante), nous priorisons le déplacement et adaptons nos ressources.</p>",
    },
    {
      question: "Le stationnement est compliqué près de la gare, comment gérez-vous cela ?",
      answer: "<p>Nos équipes anticipent les <strong>contraintes de stationnement</strong> du quartier de la Gare et du centre-ville. Nous privilégions les créneaux où le stationnement est plus accessible, et nos véhicules utilitaires sont équipés pour des interventions rapides sans encombrer les accès.</p>",
    },
    {
      question: "Proposez-vous un suivi régulier pour les immeubles et résidences ?",
      answer: "<p>Oui, nous mettons en place des <strong>contrats d'entretien</strong> avec fréquence définie selon vos besoins : hebdomadaire, bimensuel ou mensuel. Un interlocuteur dédié assure le suivi et ajuste les interventions si nécessaire.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },


  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le FORMAT ONLY injecte uniquement les services présents dans l’entrée (bundle/plan/servicesRequested).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées et détachage ciblé pour redonner propreté et tenue à vos moquettes, avec un séchage maîtrisé permettant une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des configurations locales à Houilles, des petits collectifs aux halls de copropriétés du Centre-ville.",
        "Matériel injection-extraction adapté aux moquettes bouclées, velours ou dalles textiles présentes dans les immeubles.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des occupants et respecter les contraintes d'accès.",
      ],
      uniqueIntro: "<p>Dans le secteur Centre-ville de Houilles, les halls d'immeubles et locaux professionnels accueillent un passage régulier. Les fibres textiles captent poussières, traces de semelles et résidus divers qui s'accumulent semaine après semaine. Sans entretien adapté, le revêtement perd son aspect d'origine et les taches deviennent difficiles à éliminer avec un simple aspirateur.</p>\n<p class=\"mt-4\">Le tissu urbain résidentiel de Houilles comprend pavillons et petits collectifs où les moquettes équipent souvent parties communes ou espaces tertiaires. Un <strong>ravivage régulier</strong> préserve la tenue des fibres, limite les odeurs persistantes et améliore l'image des lieux. Les occupants comme les visiteurs perçoivent immédiatement la différence après une intervention en profondeur.</p>\n<p class=\"mt-4\">La proximité de la gare de Houilles - Carrières-sur-Seine génère des déplacements quotidiens importants. Cette fréquentation accentue l'usure des zones de passage. Une intervention structurée, précédée d'un diagnostic des supports et des contraintes d'accès, permet d'adapter le traitement à chaque configuration.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intense</h3>\n<p>Les entrées et couloirs concentrent l'essentiel des salissures. Après aspiration préalable, le traitement par injection-extraction cible ces surfaces à fort trafic. Les passes successives délogent les particules enfoncées dans les fibres bouclées ou velours.</p>\n\n<h3>Surfaces périphériques et angles</h3>\n<p>Les abords de plinthes et recoins accumulent poussières et résidus moins visibles. Une attention particulière est portée aux jonctions avec le mobilier fixe. Les protections posées sur les bas de murs évitent toute projection lors du détachage.</p>\n\n<h3>Contrôle du séchage et remise en service</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage selon l'épaisseur du revêtement et la ventilation disponible. Des <strong>consignes de non-piétinement</strong> sont communiquées pour préserver le résultat. La fréquence d'entretien recommandée dépend de l'usage et du passage constaté.</p>",
      specificChallenges: [
        "Halls de petits collectifs avec digicodes et accès restreints nécessitant coordination préalable.",
        "Moquettes bouclées ou velours dans les parties communes demandant un <strong>réglage adapté de l'extraction</strong>.",
        "Taches anciennes incrustées par le <strong>passage quotidien vers la gare</strong> de Houilles - Carrières-sur-Seine.",
        "Stationnement compliqué en zone résidentielle dense imposant une organisation logistique anticipée.",
        "Séchage à maîtriser selon la ventilation des cages d'escalier ou des locaux professionnels.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les petits collectifs du Centre-ville de Houilles, comment organisez-vous l'accès avec digicode pour le passage du matériel ?",
          answer: "<p>Nous convenons en amont des horaires et <strong>codes d'accès</strong> avec le syndic ou le gardien. Le matériel est acheminé en une seule rotation pour limiter les allers-retours. Cette coordination évite toute attente et permet de démarrer l'intervention sans retard.</p>",
        },
        {
          question:
            "Près de la gare de Houilles - Carrières-sur-Seine, comment traitez-vous les taches anciennes incrustées sur moquette de hall ?",
          answer: "<p>Un pré-détachage cible les zones marquées avant le passage en injection-extraction. Les fibres sont travaillées avec plusieurs passes pour déloger les résidus enfoncés. Le résultat dépend de l'ancienneté des taches, mais l'amélioration visuelle est généralement nette.</p>",
        },
        {
          question:
            "À Houilles, adaptez-vous le nettoyage de moquette différemment selon qu'il s'agit d'une copropriété, d'un bureau ou d'un domicile ?",
          answer: "<p>Le <strong>diagnostic initial</strong> identifie le type de fibre, l'usage et les contraintes horaires. En copropriété, l'intervention se cale sur les heures creuses. En bureau, nous privilégions le soir ou le week-end. À domicile, le planning s'adapte à la vie familiale.</p>",
        },
        {
          question:
            "Comment gérez-vous le stationnement compliqué autour des quartiers résidentiels de Houilles pour intervenir sur une moquette ?",
          answer: "<p>Nous repérons les possibilités de stationnement avant le jour J et prévoyons si nécessaire un créneau tôt le matin. Le matériel est regroupé pour limiter les trajets. Cette anticipation évite les retards et garantit le respect du planning convenu.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec traitement des taches d'huile, gestion maîtrisée des eaux usées et coordination adaptée aux contraintes d'accès en copropriété.",
      whyUsBullets: [
        "Connaissance des copropriétés du quartier de la Gare et du centre-ville, avec leurs contraintes d'accès spécifiques.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées, sans rejet vers la voirie.",
        "Coordination avec le syndic, rotation véhicules par zones et balisage sécurisé pendant toute l'intervention.",
      ],
      uniqueIntro: "<p>Les traces de graisse et les dépôts noirâtres s'accumulent sur les sols des parkings souterrains, particulièrement dans le <strong>quartier de la Gare</strong> où le trafic quotidien vers le RER A génère un encrassement accéléré. Les rampes d'accès présentent souvent des coulures d'huile, tandis que les rigoles se bouchent progressivement sous l'effet des poussières et résidus de pneus.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier modifie sensiblement l'aspect général du sous-sol. Les copropriétés équipées de <strong>béton brut ou béton peint</strong> retrouvent un sol uniforme, les zones de circulation redeviennent lisibles, et les remarques des résidents diminuent. L'image de la résidence s'améliore dès les premiers passages.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte du <strong>stationnement compliqué</strong> propre aux secteurs denses de Houilles. Rotation des véhicules par zones, balisage visible, horaires adaptés : chaque chantier fait l'objet d'une coordination préalable avec le syndic pour limiter la gêne et garantir un accès fluide aux résidents.</p>",
      uniqueDeepDive: "<h3>Encrassement et revêtement</h3>\n<p>Le diagnostic identifie la nature du sol — béton brut, résine ou peinture — et l'état des évacuations. Les zones critiques sont repérées : taches d'huile anciennes, angles morts, pieds de murs encrassés.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les débris avant toute intervention humide.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>L'autolaveuse ou la haute pression associée à un dégraissant professionnel traite les surfaces en passes successives. Les rampes font l'objet d'une attention particulière pour préserver leur adhérence.</p>\n<p class=\"mt-4\">Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage ni stagnation.</p>\n\n<h3>Finalisation et recommandations</h3>\n<p>Les rigoles et regards sont vérifiés pour garantir un écoulement correct. Un dépoussiérage des blocs lumineux ou tuyauteries peut compléter l'intervention si demandé.</p>\n<p class=\"mt-4\">Un compte-rendu précise les zones traitées et la fréquence conseillée selon le trafic observé.</p>",
      specificChallenges: [
        "Parkings souterrains des copropriétés proches de la gare : encrassement accéléré par le trafic quotidien.",
        "Sols en béton brut ou peint nécessitant un réglage adapté de la pression et du dégraissant.",
        "Stationnement compliqué en zone dense : rotation des véhicules à organiser avec le syndic.",
        "Rampes d'accès exposées aux coulures d'huile et aux risques de glissance.",
        "Rigoles et regards à vérifier pour éviter les stagnations après lavage.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un parking souterrain près de la gare de Houilles, comment traitez-vous les taches d'huile anciennes sur béton ?",
          answer: "<p>Les taches d'huile anciennes sont prétraitées avec un dégraissant professionnel avant le passage de l'autolaveuse. Plusieurs passes peuvent être nécessaires selon l'ancienneté et l'épaisseur du dépôt. Le résultat dépend aussi de la porosité du béton, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question:
            "Pour les parkings souterrains de Houilles, comment gérez-vous les eaux de lavage sans gêner les accès en copropriété ?",
          answer: "<p>Les eaux sont dirigées vers les évacuations existantes — rigoles et regards — que nous vérifions avant et après intervention. Aucun rejet vers la voirie ou les parties communes. Le balisage oriente les résidents vers les zones sèches pendant le séchage.</p>",
        },
        {
          question:
            "Dans les copropriétés du centre-ville de Houilles, comment sécurisez-vous le balisage pendant le nettoyage du parking ?",
          answer: "<p>Des cônes et rubalises délimitent les zones en cours de traitement. La signalétique est visible dès l'entrée du parking. Nous intervenons par secteurs pour maintenir un accès partiel aux véhicules et piétons tout au long du chantier.</p>",
        },
        {
          question:
            "À Houilles, peut-on organiser une fermeture partielle d'un parking souterrain sans bloquer les résidents ?",
          answer: "<p>Oui, l'intervention se planifie par zones successives. Le syndic informe les résidents en amont, et nous adaptons les horaires — souvent en journée creuse ou le week-end — pour limiter l'impact sur les déplacements quotidiens.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, du sol aux garde-corps, avec gestion des coulures et protection du voisinage pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions et environnements végétaux propres aux quartiers résidentiels de Houilles.",
        "Pression ajustée selon le support, brossage adapté aux joints et carrelages grès.",
        "Protection systématique des voisins du dessous et gestion complète des eaux de rinçage.",
      ],
      uniqueIntro: "<p>Comment profiter d'un balcon quand les dépôts verts s'accumulent dans les joints et que la surface devient glissante après chaque pluie ? Dans le secteur Belles-vues, les balcons des résidences sont exposés aux poussières urbaines et aux traces laissées par la végétation environnante. Les feuilles mortes, la pollution et l'humidité forment une couche tenace qui résiste au simple coup de balai.</p>\n<p class=\"mt-4\">Un balcon propre change l'usage quotidien de cet espace. Sur les petits collectifs et résidences récentes de Houilles, les occupants retrouvent un sol net, des garde-corps sans traces, et l'envie de sortir table et chaises. Les voisins du dessous ne reçoivent plus de coulures lors de vos tentatives de lavage improvisées.</p>\n<p class=\"mt-4\">Notre intervention prend en compte les contraintes d'accès en immeuble et la circulation des occupants. Nous adaptons le matériel au support présent, qu'il s'agisse de carrelage grès ou de béton brut, pour un traitement efficace sans dégradation.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries reçoivent une protection pour éviter les projections. Nous installons également un dispositif de récupération d'eau pour préserver les balcons situés en dessous.</p>\n\n<h3>Traitement des surfaces</h3>\n<p>Les gros dépôts sont retirés manuellement : feuilles, terre accumulée, débris divers. Un produit adapté au support est appliqué, suivi d'un brossage manuel ou mécanique selon l'encrassement. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée.</p>\n<p class=\"mt-4\">Sur les joints fragiles, nous privilégions un rinçage contrôlé plutôt qu'une pression excessive.</p>\n\n<h3>Rinçage et séchage</h3>\n<p>L'ensemble est rincé avec une pression maîtrisée, en veillant à diriger l'eau vers notre système de récupération. Les vitrages attenants sont essuyés si nécessaire. Avant de partir, nous vous indiquons le temps de séchage recommandé et quelques conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts verts incrustés dans les joints des balcons exposés à la végétation du Parc Charles-de-Gaulle.",
        "Carrelage grès ou béton brut nécessitant un traitement différencié selon la porosité.",
        "Gestion des coulures vers les étages inférieurs dans les petits collectifs.",
        "Accès en immeuble avec digicodes et coordination avec les occupants.",
        "Garde-corps et vitrages à traiter sans projections sur les façades.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons des petits collectifs de Houilles, comment nettoyez-vous sans fragiliser le carrelage et les joints ?",
          answer: "<p>Nous identifions d'abord le type de support présent. Sur un carrelage grès, le brossage mécanique reste doux pour préserver les joints. Sur béton brut, nous adaptons la pression et le produit. Chaque surface reçoit un traitement calibré pour retirer les salissures sans creuser ni décoller les éléments fragiles.</p>",
        },
        {
          question:
            "Dans le quartier Belles-vues à Houilles, comment gérez-vous l'eau et les coulures lors du nettoyage d'un balcon ?",
          answer: "<p>Avant de commencer, nous installons un système de récupération qui empêche l'eau de ruisseler chez vos voisins du dessous. Le rinçage est orienté vers ce dispositif. Cette précaution évite les tensions de voisinage et les traces sur les façades ou les balcons situés aux étages inférieurs.</p>",
        },
        {
          question:
            "À Houilles, intervenez-vous différemment sur une loggia ou sur un balcon ouvert selon le support ?",
          answer: "<p>Une loggia fermée retient davantage l'humidité et favorise les moisissures sur les murs. Nous traitons ces parois en plus du sol. Sur un balcon ouvert, l'exposition au vent et à la pluie génère plutôt des dépôts de pollution. Le protocole s'adapte à chaque configuration pour un résultat homogène.</p>",
        },
        {
          question:
            "Dans les immeubles d'habitation de Houilles, nettoyez-vous les balcons sans haute pression pour protéger les façades ?",
          answer: "<p>Quand les joints sont fragiles ou que la façade présente un revêtement sensible, nous privilégions un brossage manuel suivi d'un rinçage à pression modérée. Cette approche préserve l'étanchéité des joints et évite les projections sur les murs extérieurs ou les fenêtres des voisins.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des surfaces et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Houilles, notamment les abords du Parc Charles-de-Gaulle et les quartiers arborés.",
        "Protocole strict avec EPI complets, confinement systématique et désinfection virucide après chaque collecte.",
        "Coordination avec le voisinage, bâchage des zones mitoyennes et évacuation des déchets en sacs étanches.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans entretien, les dépôts s'accumulent sur le sol et les garde-corps. <strong>Autour du Parc Charles-de-Gaulle</strong>, les zones arborées attirent les pigeons qui élisent domicile sur les corniches et rebords des immeubles voisins. L'odeur s'installe, le carrelage se tache, et l'envie d'utiliser cet espace extérieur disparaît progressivement.</p>\n<p class=\"mt-4\">Les balcons en <strong>habitat collectif</strong> subissent une exposition particulière : surfaces horizontales accessibles, recoins protégés du vent, proximité des toitures. Les fientes attaquent le béton, ternissent les revêtements et créent un environnement peu engageant. Sans traitement adapté, les souillures s'incrustent et les risques sanitaires augmentent avec le temps.</p>\n<p class=\"mt-4\">Une décontamination structurée permet de retrouver un balcon utilisable. <strong>La proximité d'espaces verts et les accès en immeuble</strong> nécessitent une intervention maîtrisée : confinement de la zone, protection du logement, évacuation sécurisée des déchets. Chaque étape vise à éliminer les agents pathogènes tout en préservant vos relations de voisinage.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace propre, sans odeur ni résidu contaminant. Les surfaces retrouvent leur aspect d'origine, le sol redevient praticable, et les garde-corps peuvent être touchés sans risque.</p>\n<p class=\"mt-4\">La désinfection avec un produit virucide homologué élimine les agents pathogènes présents dans les fientes séchées.</p>\n\n<h3>Collecte sécurisée et traitement des supports</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sont humidifiées avant ramassage pour neutraliser les poussières. Le sol, les vitrages et le garde-corps sont ensuite nettoyés méthodiquement.</p>\n\n<h3>Prévention et évacuation</h3>\n<p>Après rinçage et temps de séchage, des solutions de dissuasion peuvent être installées : pics sur les rebords, filets de protection selon la configuration.</p>\n<p class=\"mt-4\">Les déchets conditionnés en sacs étanches sont évacués. Le balcon reste inaccessible le temps que les surfaces sèchent complètement.</p>",
      specificChallenges: [
        "Proximité du Parc Charles-de-Gaulle : les arbres attirent les pigeons vers les balcons environnants.",
        "Balcons en étage avec accès restreint : matériel adapté et coordination avec le gardien.",
        "Fientes séchées incrustées sur carrelage grès : humidification préalable indispensable.",
        "Risque de dispersion vers les logements voisins : bâchage et confinement obligatoires.",
        "Odeurs persistantes après nettoyage superficiel : désinfection en profondeur nécessaire.",
      ],
      faqAdditions: [
        {
          question:
            "Près du Parc Charles-de-Gaulle à Houilles, quels risques sanitaires représente un balcon couvert de fientes de pigeons ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes transmissibles par inhalation de poussières sèches. Dans les secteurs arborés proches du parc, l'accumulation est souvent plus rapide. Une décontamination professionnelle élimine ces risques et permet de réutiliser l'espace en toute sécurité.</p>",
        },
        {
          question:
            "Dans un immeuble de Houilles, quels EPI et quel protocole utilisez-vous pour assainir des fientes sur balcon ?",
          answer: "<p>L'intervenant porte masque FFP2, gants, lunettes et combinaison jetable. La zone est confinée par bâchage pour protéger l'intérieur du logement et les balcons mitoyens. Les fientes sont humidifiées avant collecte pour éviter la dispersion de particules contaminées dans l'air.</p>",
        },
        {
          question:
            "À Houilles, quelle désinfection appliquez-vous après l'enlèvement des fientes sur un balcon résidentiel ?",
          answer: "<p>Après le ramassage, un produit virucide et bactéricide homologué est appliqué sur toutes les surfaces : sol, garde-corps, vitrages. Le temps de contact est respecté avant rinçage. Cette étape garantit l'élimination des agents pathogènes présents dans les résidus organiques.</p>",
        },
        {
          question:
            "Autour des zones arborées de Houilles, quelles solutions anti-retour proposez-vous après un assainissement de balcon ?",
          answer: "<p>Selon la configuration, nous pouvons installer des pics anti-pigeons sur les rebords et corniches, ou recommander la pose de filets de protection. Ces dispositifs dissuadent les oiseaux de se poser à nouveau et prolongent l'efficacité du nettoyage réalisé.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas à domicile, avec extraction des salissures et séchage maîtrisé pour retrouver un mobilier frais et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Houilles, du quartier Tonkin aux résidences du centre-ville.",
        "Détachage ciblé selon le textile et séchage contrôlé pour une remise en service rapide.",
        "Organisation souple avec gestion des accès par badge et stationnement adapté à la densité urbaine.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en aperçoive. Dans le quartier Réveil-Matin, où les familles occupent des pavillons et petits collectifs, les textiles d'ameublement absorbent poussières, allergènes et taches liées à la vie de tous les jours.</p>\n<p class=\"mt-4\">Un canapé rafraîchi retrouve son confort d'origine et son aspect visuel. Les tapis redeviennent agréables au toucher, sans cette sensation de fibres alourdies. Dans les résidences récentes comme dans les logements plus anciens, l'entretien régulier des textiles améliore l'hygiène intérieure et prolonge la durée de vie du mobilier.</p>\n<p class=\"mt-4\">L'intervention s'organise selon vos contraintes d'accès. Digicode, badge, stationnement limité : nous adaptons notre venue pour limiter la gêne. Un diagnostic textile précède chaque traitement afin d'ajuster les produits et la méthode au type de tissu présent chez vous.</p>",
      uniqueDeepDive: "<h3>Taches incrustées et odeurs tenaces</h3>\n<p>Les salissures anciennes résistent aux produits ménagers classiques. Nous identifions d'abord la nature de chaque tache (café, vin, urine, graisse) et le type de textile (coton, synthétique, velours). Un test discret sur zone cachée valide la compatibilité du traitement avant toute application.</p>\n\n<h3>Détachage ciblé et traitement adapté</h3>\n<p>Un pré-traitement enzymatique cible les taches organiques. L'injection-extraction textile déloge ensuite les résidus en profondeur. La pression et la température sont ajustées selon la fragilité des fibres pour préserver l'aspect du tissu.</p>\n\n<h3>Extraction et remise en usage</h3>\n<p>L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et l'aération du logement, comptez quelques heures avant de réutiliser votre canapé ou tapis. Nous vous transmettons des conseils d'usage et une fréquence d'entretien adaptée à votre mode de vie.</p>",
      specificChallenges: [
        "Taches alimentaires sur canapés familiaux : café, jus, traces de repas accumulées.",
        "Tapis exposés aux passages fréquents dans les logements avec enfants ou animaux.",
        "Matelas absorbant humidité et allergènes dans les chambres peu ventilées.",
        "Accès par digicode et stationnement limité dans les quartiers résidentiels denses.",
        "Textiles variés (velours, coton, synthétique) nécessitant des réglages spécifiques.",
      ],
      faqAdditions: [
        {
          question:
            "Dans le quartier Réveil-Matin à Houilles, le nettoyage de canapé et tapis réduit-il vraiment les acariens et allergènes ?",
          answer: "<p>L'injection-extraction déloge les acariens, poussières et allergènes piégés dans les fibres. Dans les logements familiaux où les textiles sont sollicités au quotidien, cette méthode améliore sensiblement la qualité de l'air intérieur et le confort des occupants sensibles.</p>",
        },
        {
          question:
            "À Houilles, combien de temps faut-il prévoir pour le séchage d'un canapé ou d'un tapis après intervention ?",
          answer: "<p>Le séchage varie selon l'épaisseur du textile et l'aération du logement. En général, comptez entre deux et six heures. Nous optimisons l'extraction pour réduire ce délai et vous permettre de réutiliser votre mobilier dans la journée.</p>",
        },
        {
          question:
            "Dans les logements de Houilles avec parquet ou carrelage, comment adaptez-vous le nettoyage du canapé et des tapis ?",
          answer: "<p>Nous protégeons les sols environnants et ajustons la quantité d'eau utilisée. Les tapis posés sur parquet bénéficient d'une extraction renforcée pour éviter toute humidité résiduelle susceptible d'endommager le revêtement en dessous.</p>",
        },
        {
          question:
            "À Houilles, quelle fréquence recommandez-vous pour entretenir canapé et tapis dans une maison familiale ?",
          answer: "<p>Pour un foyer avec enfants ou animaux, un rafraîchissement annuel maintient l'hygiène et l'aspect des textiles. En cas d'usage intensif ou d'allergies, deux interventions par an permettent de limiter l'accumulation de salissures et d'allergènes.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des dépôts verts pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires de Houilles, souvent ombragées par la végétation environnante et sujettes aux mousses.",
        "Maîtrise des techniques adaptées à chaque support : bois, carrelage, pierre naturelle ou dalles composites, avec traitement anti-mousse ciblé.",
        "Organisation souple tenant compte du stationnement parfois contraint et protection systématique de vos plantations et mobilier extérieur.",
      ],
      uniqueIntro: "<p>Dans les secteurs pavillonnaires proches de la <strong>Mairie de Houilles</strong>, les terrasses accumulent au fil des saisons feuilles mortes, terre et dépôts organiques. L'humidité persistante favorise l'apparition de mousses qui rendent le sol glissant et ternissent l'aspect général. Ces surfaces extérieures, exposées aux intempéries, perdent progressivement leur éclat sans entretien adapté.</p>\n<p class=\"mt-4\">Une terrasse encrassée limite l'envie d'utiliser cet espace de vie. Les revêtements en <strong>carrelage, bois ou dalles sur plots</strong> réagissent différemment aux salissures et nécessitent chacun une approche spécifique. Un traitement inadapté risque d'endommager les joints ou d'altérer la teinte du matériau, tandis qu'un nettoyage ciblé redonne à la surface son aspect d'origine.</p>\n<p class=\"mt-4\">L'intervention débute par un diagnostic du support et de son état. Nous identifions les zones critiques, protégeons le mobilier extérieur et les plantations, puis appliquons un protocole calibré selon la nature du revêtement et l'exposition de votre terrasse.</p>",
      uniqueDeepDive: "<h3>Surface débarrassée des dépôts et mousses</h3>\n<p>Le résultat visé est une terrasse désencombrée et assainie. Pour y parvenir, nous retirons d'abord les débris végétaux, feuilles et terre accumulés. Un brossage manuel ou mécanique élimine ensuite les mousses et lichens incrustés dans les joints et aspérités du support.</p>\n\n<h3>Revêtement traité selon sa nature</h3>\n<p>Chaque matériau reçoit un traitement adapté : produit désincrustant pour le carrelage, nettoyant doux pour le bois, rinçage contrôlé pour les dalles sur plots. La pression est ajustée pour préserver les joints et éviter toute dégradation. Un traitement anti-mousse préventif peut être appliqué selon l'exposition.</p>\n\n<h3>Espace prêt à être réutilisé</h3>\n<p>Les eaux de rinçage sont dirigées vers les points d'écoulement existants. Le mobilier et les jardinières sont remis en place après séchage. Nous vous transmettons des conseils d'entretien saisonnier pour prolonger la propreté obtenue et limiter la réapparition des dépôts verts.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'humidité et la proximité d'arbres dans les jardins pavillonnaires.",
        "Supports variés (bois, carrelage, dalles sur plots) nécessitant chacun une méthode de nettoyage spécifique.",
        "Joints fragilisés par les intempéries, à traiter avec une pression contrôlée pour éviter les infiltrations.",
        "Stationnement contraint dans certains secteurs résidentiels, impliquant une logistique adaptée.",
        "Protection des plantations et du mobilier extérieur pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "À Houilles, comment nettoyez-vous une terrasse en pierre, bois ou dalles sur plots sans abîmer le support ?",
          answer: "<p>Nous adaptons la méthode au matériau : pression réduite et produit spécifique bois pour les lames, désincrustant doux pour la pierre naturelle, rinçage contrôlé pour les dalles sur plots afin de préserver les joints et la structure porteuse sans provoquer d'infiltration.</p>",
        },
        {
          question:
            "Près du Parc Charles-de-Gaulle à Houilles, comment traitez-vous les mousses et lichens sur une terrasse de maison ?",
          answer: "<p>La proximité d'espaces verts favorise l'humidité et les dépôts organiques. Nous procédons à un brossage mécanique pour retirer les mousses incrustées, puis appliquons un produit biocide adapté au support. Le traitement agit en profondeur pour ralentir la repousse.</p>",
        },
        {
          question:
            "À Houilles, quel traitement anti-mousse appliquez-vous sur une terrasse exposée en carrelage ou en bois ?",
          answer: "<p>Après le nettoyage, nous appliquons un traitement préventif filmogène ou pénétrant selon le support. Sur carrelage, il limite l'accroche des spores. Sur bois, il nourrit la fibre tout en créant une barrière contre l'humidité et les micro-organismes.</p>",
        },
        {
          question:
            "Dans les secteurs pavillonnaires de Houilles, privilégiez-vous un nettoyage doux ou une haute pression pour les terrasses ?",
          answer: "<p>Cela dépend du revêtement et de son état. Le bois et les dalles sur plots supportent mal la haute pression, nous optons alors pour un nettoyage doux avec brossage. Le carrelage grès cérame tolère une pression modérée qui accélère le décrassage sans risque.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux, déménagement ou avant état des lieux, avec un nettoyage méthodique de chaque pièce et surface.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Houilles, du pavillon aux petits collectifs du quartier de la Gare.",
        "Polyvalence sur tous types de sols et surfaces, du parquet ancien au carrelage récent.",
        "Coordination avec agences et artisans, respect des délais d'état des lieux et gestion des accès par badge.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou un déménagement, les logements du quartier Réveil-Matin et des secteurs résidentiels de Houilles accumulent poussières fines, traces de peinture et résidus divers. Les sols, les vitres intérieures et les pièces d'eau nécessitent alors une intervention approfondie que le ménage courant ne suffit pas à couvrir. Entre les délais serrés d'un état des lieux et la coordination avec artisans ou agences, le temps manque souvent pour remettre le logement en ordre.</p>\n<p class=\"mt-4\">Dans les pavillons comme dans les petits collectifs, les surfaces varient : parquet dans les pièces de vie, carrelage en cuisine et salle de bain, moquette parfois dans les chambres. Chaque revêtement demande un traitement adapté pour retrouver un aspect propre et accueillant. Un logement correctement préparé facilite la remise des clés et évite les litiges lors des états des lieux.</p>\n<p class=\"mt-4\">Notre organisation prend en compte les contraintes d'accès par digicode ou badge, fréquentes dans les résidences de Houilles, ainsi que la rotation locative qui impose des délais courts et une coordination précise avec les différents intervenants.</p>",
      uniqueDeepDive: "<h3>Pièces de vie et chambres</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes pour éliminer les particules fines laissées par les travaux. Les sols sont ensuite aspirés puis lavés selon leur nature : parquet traité avec précaution, carrelage dégraissé en profondeur.</p>\n<p class=\"mt-4\">Les interrupteurs, poignées et radiateurs sont nettoyés. Les placards intérieurs sont vidés de leurs résidus et essuyés.</p>\n\n<h3>Cuisine et salle de bain</h3>\n<p>Les plans de travail, crédences et électroménager sont dégraissés. La faïence et les joints de la salle de bain sont traités pour retirer les traces de calcaire ou de moisissure.</p>\n<p class=\"mt-4\">Les sanitaires et WC sont désinfectés. Les évacuations sont vérifiées pour garantir un écoulement correct.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les vitres intérieures sont nettoyées pour laisser entrer la lumière. Les éventuelles traces de peinture ou de colle sur les sols et menuiseries sont retirées avec des produits adaptés.</p>\n<p class=\"mt-4\">Un contrôle final vérifie chaque pièce avant aération du logement.</p>",
      specificChallenges: [
        "Résidus de travaux (poussière de plâtre, traces de peinture) sur sols et menuiseries.",
        "Accès par digicode ou badge nécessitant une coordination préalable.",
        "Délais serrés entre fin de chantier et remise des clés.",
        "Surfaces variées (parquet, carrelage) demandant des traitements différenciés.",
        "Coordination avec artisans ou agences pour caler l'intervention au bon moment.",
      ],
      faqAdditions: [
        {
          question:
            "Dans le quartier Réveil-Matin à Houilles, sous quel délai pouvez-vous intervenir pour un nettoyage d'appartement urgent ?",
          answer: "<p>Nous organisons nos interventions pour répondre aux demandes urgentes dans les secteurs résidentiels de Houilles. Selon la disponibilité et la surface du logement, une intervention peut être planifiée dans les meilleurs délais. Contactez-nous pour préciser vos contraintes de délai.</p>",
        },
        {
          question:
            "À Houilles, quelle différence faites-vous entre un ménage standard et un nettoyage de fin de chantier après travaux ?",
          answer: "<p>Un ménage standard concerne l'entretien courant. Le nettoyage fin de chantier traite les résidus spécifiques aux travaux : poussière de plâtre incrustée, traces de peinture ou de colle, joints encrassés. Les méthodes et le temps d'intervention diffèrent pour obtenir un logement prêt à habiter.</p>",
        },
        {
          question:
            "Dans un appartement de Houilles avec parquet ou carrelage, intervenez-vous aussi après un dégât des eaux ?",
          answer: "<p>Oui, nous intervenons après dégât des eaux pour nettoyer et assainir les surfaces touchées. Le parquet nécessite un séchage contrôlé et un traitement adapté, le carrelage un nettoyage des joints pour éviter les moisissures. Nous évaluons l'état avant de proposer un protocole.</p>",
        },
        {
          question:
            "À Houilles, comment coordonnez-vous le nettoyage d'un appartement avec des artisans ou une agence immobilière ?",
          answer: "<p>Nous calons notre intervention après la fin des travaux ou selon le planning de l'agence. Un échange préalable permet de fixer la date et les modalités d'accès. Nous nous adaptons aux contraintes de chacun pour respecter les délais de remise du logement.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;