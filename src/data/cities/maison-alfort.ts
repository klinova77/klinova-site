import type { City } from "~/types/geo";

const city: City = {
  name: "Maisons-Alfort",
  slug: "maisons-alfort",
  postalCodes: ["94700"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription:
    "Commune du Val-de-Marne de 57 000 habitants desservie par le métro ligne 8 et le RER D, Maisons-Alfort mêle quartiers historiques, grands ensembles comme Les Juilliottes et secteurs pavillonnaires du Charentonneau. Les flux de transports intenses et la proximité des axes A4 et A86 génèrent des besoins réguliers d'entretien des surfaces dans l'habitat collectif et les espaces privatifs.",

  hubIntro:
    "<p>Klinova accompagne les copropriétés, les gestionnaires immobiliers et les particuliers de Maisons-Alfort dans l'entretien des surfaces et la maintenance des équipements collectifs. Nous intervenons dans tous les secteurs, des résidences du Charentonneau aux collectifs des Juilliottes, en passant par les immeubles du Centre-ville et les copropriétés proches des gares RER D.</p>\n<p class=\"mt-4\">Nous adaptons nos protocoles aux contraintes d'accès liées aux badges et aux gardiens, coordonnons nos passages avec les flux des stations de métro ligne 8 (École Vétérinaire, Stade, Les Juilliottes) et tenons compte des spécificités du bâti local pour garantir un résultat cohérent avec les attentes des syndics et des occupants.</p>\n<ul>\n  <li><strong>Entretien des surfaces textiles</strong> : nettoyage professionnel des moquettes dans les halls d'entrée, les paliers et les escaliers des copropriétés du Centre-ville, d'Alfort et des Juilliottes, avec machines d'injection-extraction adaptées aux contraintes d'accès et aux volumes de passage quotidiens.</li>\n  <li><strong>Assainissement des parkings souterrains</strong> : décrassage des sols béton et résine, élimination des taches d'hydrocarbures et remise en lisibilité des marquages dans les parkings des résidences de Liberté-Vert-de-Maisons, des Juilliottes et du secteur Hector Berlioz.</li>\n  <li><strong>Remise en état des espaces extérieurs</strong> : nettoyage de balcons et terrasses pour les particuliers du Charentonneau, des Planètes et d'Alfort, avec gestion maîtrisée de l'eau pour éviter les écoulements vers les étages inférieurs ou les façades.</li>\n  <li><strong>Rafraîchissement des textiles domestiques</strong> : intervention à domicile pour canapés, tapis et matelas dans les quartiers résidentiels, avec protocoles d'injection-extraction et conseils d'entretien adaptés aux familles.</li>\n</ul>",

  citySpecificChallenges: [
    "Encrassement rapide des halls et parkings sous influence des axes A4, A86 et routes départementales (RD6, RD19, RD148), générant des particules fines et des poussières grasses sur les surfaces vitrées et les sols béton.",
    "Flux piétons quotidiens massifs autour des trois stations de métro ligne 8 (École Vétérinaire de Maisons-Alfort, Maisons-Alfort – Stade, Maisons-Alfort – Les Juilliottes) et des gares RER D (Maisons-Alfort – Alfortville, Le Vert-de-Maisons), accentuant l'usure des moquettes de parties communes.",
    "Accumulation de feuilles, boues et dépôts verts sur les balcons et terrasses des quartiers proches des bords de Marne (Charentonneau, Les Planètes, Alfort) en raison de la végétation dense et de l'humidité fluviale.",
    "Coordination nécessaire avec les bailleurs et syndics des grands ensembles (Juilliottes, Hector Berlioz, Liberté-Vert-de-Maisons) pour limiter la gêne des résidents lors des interventions dans les parties communes étendues.",
  ],

  districts: [
    "Centre-ville",
    "Alfort",
    "Charentonneau",
    "Les Planètes",
    "Les Juilliottes",
    "Liberté – Vert-de-Maisons",
    "Hector Berlioz",
  ],
  nearbyCities: [
    "alfortville",
    "creteil",
    "joinville-le-pont",
    "charenton-le-pont",
    "saint-maur-des-fosses",
    "ivry-sur-seine",
    "saint-mande",
    "nogent-sur-marne",
    "vincennes",
    "fontenay-sous-bois",
  ],

  landmarks: [
    "Mairie de Maisons-Alfort",
    "École nationale vétérinaire d'Alfort (EnvA)",
    "Station de métro Maisons-Alfort – Les Juilliottes (ligne 8)",
    "Gare RER D Maisons-Alfort – Alfortville",
    "Gare RER D Le Vert-de-Maisons",
    "Bords de Marne",
  ],

  faq: [
    {
      question:
        "Comment gérez-vous les interventions dans les secteurs où le stationnement est difficile, comme autour de la gare Maisons-Alfort – Alfortville ou le long des axes RD ?",
      answer:
        "<p>Les abords des gares RER D et les axes comme la RD19 présentent effectivement des <strong>contraintes de stationnement</strong> et de <strong>circulation dense</strong> aux heures de pointe. Nous planifions nos interventions en tenant compte de ces paramètres : passages matinaux avant 8h ou en milieu de journée après le pic de flux, repérage préalable des zones de déchargement et validation des accès véhicule avec le syndic. Pour les parkings sous-sol, nous vérifions systématiquement la hauteur libre et la largeur des rampes avant toute intervention.</p>",
    },
    {
      question:
        "Proposez-vous des devis gratuits pour les copropriétés de Maisons-Alfort ?",
      answer:
        "<p>Oui. Nous nous déplaçons <strong>sans frais</strong> dans tous les quartiers de Maisons-Alfort, du Charentonneau à Liberté-Vert-de-Maisons, pour établir un diagnostic précis. Cette visite permet d'évaluer la surface à traiter, le type de revêtement, les contraintes d'accès (badges, ascenseurs, présence d'un gardien) et les éventuelles spécificités techniques. Vous recevez ensuite une <strong>proposition détaillée</strong>, sans engagement, tenant compte de la configuration réelle du site.</p>",
    },
    {
      question:
        "Intervenez-vous en urgence en cas de sinistre ou de fin de chantier ?",
      answer:
        "<p>Oui. Nous mobilisons nos équipes pour des <strong>interventions urgentes</strong> à Maisons-Alfort, notamment après un dégât des eaux, une pollution accidentelle ou une livraison de chantier nécessitant une remise en état rapide. Nous établissons un diagnostic par téléphone, confirmons la faisabilité technique et planifions le passage sous 24 à 48 heures selon disponibilité. Le matériel déployé (autolaveuse, injection-extraction, haute pression) est adapté à la nature de l'urgence et aux surfaces concernées.</p>",
    },
    {
      question:
        "Comment assurez-vous le suivi des interventions pour les syndics de copropriété ?",
      answer:
        "<p>Chaque passage fait l'objet d'un <strong>compte-rendu écrit</strong> transmis au syndic ou au gestionnaire, précisant les surfaces traitées, les produits utilisés, les éventuelles observations techniques (siphon bouché, fissure, marquage effacé) et les recommandations de fréquence pour maintenir la propreté. Nous mettons également en place des <strong>contrats d'entretien annuels</strong> pour les copropriétés souhaitant planifier les interventions de manière préventive (nettoyage de moquettes tous les 12 à 18 mois, décrassage de parkings semestriel ou annuel).</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "L'entretien régulier des moquettes préserve l'apparence des parties communes, ralentit l'usure prématurée des fibres et maintient un environnement accueillant pour les résidents de Maisons-Alfort.",
      whyUsBullets: [
        "Connaissance des typologies de Maisons-Alfort : immeubles du Centre-ville, collectifs des Juilliottes, résidences proches des gares RER D.",
        "Équipement d'injection-extraction haute performance pour traiter l'encrassement lié aux flux métro ligne 8 et à la proximité des axes routiers.",
        "Coordination avec gardiens et syndics pour interventions matinales ou en journée calme, sans perturber les circulations quotidiennes.",
      ],

      uniqueIntro:
        "<p>Après quelques mois sans intervention professionnelle, les moquettes des halls du Centre-ville et des paliers d'Alfort accumulent des salissures qui s'incrustent progressivement dans les fibres. Les zones proches des stations de métro ligne 8 comme École Vétérinaire ou Stade reçoivent un flux piéton quotidien intense qui accélère le ternissement. Les teintes d'origine s'estompent, les taches de boue séchée résistent aux aspirations, et une impression générale de négligence s'installe dans les parties communes.</p>\n<p class=\"mt-4\">Si rien n'est fait, l'encrassement progresse en profondeur. Les fibres se chargent de poussières fines venues des axes A4 et A86, les salissures se transforment en dépôts collants qui attirent davantage de saletés, et les zones de passage intense devant les ascenseurs ou les entrées principales deviennent grisâtres et usées. Les conseils syndicaux reçoivent des remarques, les copropriétaires questionnent la qualité de l'entretien, et le coût d'un remplacement anticipé des moquettes devient une menace budgétaire.</p>\n<p class=\"mt-4\">Un nettoyage professionnel par injection-extraction stoppe cette dégradation, élimine les salissures incrustées et prolonge significativement la durée de vie du revêtement. Les parties communes retrouvent leur aspect d'origine et l'image de l'immeuble s'en trouve immédiatement valorisée.</p>",

      uniqueDeepDive:
        "<h3>Évaluation de l'état d'usure et des zones critiques</h3>\n<p>Le technicien commence par identifier les zones de fort passage (entrées principales, devant ascenseurs, marches d'escalier) et repère les taches spécifiques (boue, traces de semelles, auréoles). Dans les copropriétés proches des gares RER D comme Maisons-Alfort – Alfortville ou Le Vert-de-Maisons, l'encrassement est souvent plus marqué en raison des flux quotidiens. Cette analyse permet d'adapter le nombre de passes nécessaires et d'anticiper les difficultés d'accès (badges, horaires de gardiennage).</p>\n\n<h3>Extraction en profondeur pour stopper la dégradation</h3>\n<p class=\"mt-4\">La machine d'injection-extraction projette une solution nettoyante chauffée qui décolle les salissures incrustées, puis aspire immédiatement l'eau chargée de résidus. Les zones identifiées comme critiques reçoivent des passes supplémentaires jusqu'à obtention d'un résultat satisfaisant. Les angles, bas de murs et contremarches sont traités manuellement pour éviter toute zone oubliée. L'extraction puissante limite l'humidité résiduelle et accélère le séchage, permettant une remise en circulation rapide des halls et paliers.</p>\n\n<h3>Programmation d'un entretien préventif</h3>\n<p class=\"mt-4\">Après vérification du résultat, le technicien transmet au syndic un rapport détaillant les surfaces traitées et recommandant une fréquence d'entretien adaptée. Pour les copropriétés du Centre-ville ou des Juilliottes soumises à un passage quotidien soutenu, un nettoyage tous les 12 à 18 mois évite l'accumulation excessive de salissures et préserve l'investissement initial dans le revêtement.</p>",

      specificChallenges: [
        "Les moquettes des halls situés près des stations métro ligne 8 (École Vétérinaire, Stade, Les Juilliottes) subissent un encrassement accéléré lié aux flux piétons quotidiens massifs.",
        "Les particules fines générées par la proximité des axes A4 et A86 s'incrustent dans les fibres et nécessitent une extraction puissante pour un résultat durable.",
        "Les marches d'escalier dans les immeubles anciens du Centre-ville et d'Alfort présentent des usures localisées demandant un traitement ciblé et plusieurs passes successives.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des copropriétés proches de la gare Maisons-Alfort – Alfortville s'encrassent-elles plus vite ?",
          answer:
            "<p>Les copropriétés situées à proximité immédiate des gares RER D comme Maisons-Alfort – Alfortville ou Le Vert-de-Maisons subissent effectivement un flux piéton quotidien important qui accélère l'encrassement des halls et des paliers. Nous adaptons la fréquence de nettoyage recommandée (souvent 12 mois au lieu de 18) et le nombre de passes d'extraction pour compenser cette usure accrue.</p>",
        },
        {
          question:
            "Travaillez-vous dans les petites copropriétés du Centre-ville comme dans les grands ensembles ?",
          answer:
            "<p>Nous intervenons aussi bien dans les cages d'escalier des petites copropriétés du Centre-ville que dans les halls vitrés des grands ensembles des Juilliottes ou de Liberté-Vert-de-Maisons. Le matériel est dimensionné selon la surface et les contraintes d'accès (escaliers étroits, absence d'ascenseur, badges). Chaque intervention fait l'objet d'un diagnostic préalable pour adapter la méthode et le temps nécessaire.</p>",
        },
        {
          question:
            "L'injection-extraction risque-t-elle d'endommager les moquettes anciennes du Centre-ville ?",
          answer:
            "<p>Non, à condition d'adapter la pression, la température et le pH des produits à la nature de la fibre. Nous testons systématiquement une zone discrète avant le traitement complet. Les moquettes anciennes supportent parfaitement cette méthode si elle est correctement paramétrée, et l'extraction puissante évite la sur-humidification qui pourrait fragiliser le support ou les colles.</p>",
        },
        {
          question:
            "Dois-je informer les résidents avant votre passage dans les parties communes ?",
          answer:
            "<p>C'est recommandé, surtout dans les copropriétés denses des Juilliottes ou d'Hector Berlioz. Nous vous fournissons un modèle d'affichage simple indiquant la date, les zones concernées et les délais de séchage. Les zones traitées sont balisées pendant l'intervention et la circulation peut généralement reprendre dans les 2 à 4 heures selon la ventilation naturelle des halls.</p>",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Le décrassage technique des parkings rétablit la lisibilité des marquages au sol, améliore la sécurité des circulations et redonne un aspect professionnel aux espaces souterrains de Maisons-Alfort.",
      whyUsBullets: [
        "Maîtrise des parkings de Maisons-Alfort : Juilliottes, Liberté-Vert-de-Maisons, Hector Berlioz avec encrassement lié aux axes A4 et A86.",
        "Autolaveuse industrielle et haute pression thermique pour sols béton, résine et peinture, avec dégraissants professionnels homologués.",
        "Planification technique adaptée aux contraintes d'accès (rampes, hauteur) et de rotation véhicules, interventions matinales privilégiées.",
      ],

      uniqueIntro:
        "<p>Les traces d'huile s'accumulent sur les sols béton des parkings des Juilliottes, la poussière noire grasse venue des axes A4 et A86 se dépose sur les rampes et les pieds de murs, les marquages au sol s'effacent progressivement sous le va-et-vient quotidien des véhicules. Dans les parkings sous-sol des résidences de Liberté-Vert-de-Maisons ou d'Hector Berlioz, le manque de lumière naturelle accentue la perception de saleté et donne une impression d'abandon qui nuit à l'image de la copropriété.</p>\n<p class=\"mt-4\">Les gestionnaires constatent que les tentatives de nettoyage avec des moyens domestiques (balai-brosse, jet d'eau classique) déplacent temporairement la crasse sans traiter réellement l'encrassement en profondeur. Les taches d'hydrocarbures résistent, les sols restent glissants par temps humide, et les résidents expriment des inquiétudes sur la sécurité et l'hygiène de ces espaces quotidiennement fréquentés.</p>\n<p class=\"mt-4\">Un décrassage structuré par autolaveuse professionnelle et haute pression contrôlée élimine les dépôts incrustés, ravive les revêtements et permet aux usagers de circuler dans un environnement propre et rassurant.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic technique des revêtements et des évacuations</h3>\n<p>Le technicien inspecte le type de sol (béton brut, peinture, résine), l'état des marquages, la présence et le fonctionnement des siphons et des caniveaux d'évacuation. Dans les parkings des résidences proches des axes routiers, l'encrassement lié aux particules fines nécessite souvent un dégraissant spécifique plus puissant. Les contraintes de hauteur sous plafond, de largeur de rampe et d'accès véhicule sont validées pour garantir la faisabilité technique.</p>\n\n<h3>Décrassage mécanique par autolaveuse et haute pression</h3>\n<p class=\"mt-4\">L'autolaveuse brosse le sol tout en aspirant les eaux chargées de salissures, traitant rapidement les surfaces planes et les zones de circulation. Les taches d'huile anciennes reçoivent un dégraissant professionnel appliqué localement, laissé agir quelques minutes, puis rincé à la haute pression réglée pour ne pas endommager les revêtements fragiles ou les peintures de marquage. Les rampes, les angles, les pieds de murs et les zones de fort passage (entrées, proximité des ascenseurs) sont traités manuellement en complément.</p>\n\n<h3>Gestion des effluents et recommandations d'entretien</h3>\n<p class=\"mt-4\">Les eaux de lavage sont aspirées par l'autolaveuse ou dirigées vers les siphons existants. En l'absence d'évacuation fonctionnelle, les effluents sont récupérés pour évacuation conforme. Le gestionnaire reçoit un rapport technique précisant les surfaces décrassées, les anomalies constatées (siphon obstrué, fissure, peinture dégradée) et la fréquence recommandée (généralement un à deux décrassages complets par an selon l'intensité d'usage et l'exposition aux axes routiers).</p>",

      specificChallenges: [
        "Les parkings situés à proximité des axes A4, A86 et des routes départementales (RD6, RD19) subissent un encrassement rapide par poussières noires grasses nécessitant des dégraissants renforcés.",
        "Les rampes étroites et les hauteurs sous plafond réduites dans certains parkings sous-sol des Juilliottes ou d'Hector Berlioz imposent un matériel compact et une organisation rigoureuse.",
        "L'absence de siphons fonctionnels ou d'évacuation efficace dans les parkings anciens du Centre-ville nécessite une récupération manuelle des eaux de lavage.",
      ],

      faqAdditions: [
        {
          question:
            "Les parkings proches des axes A4 et A86 sont-ils plus difficiles à nettoyer en raison de la pollution routière ?",
          answer:
            "<p>Oui. La proximité des axes autoroutiers et des routes départementales génère des poussières noires grasses plus tenaces que dans les zones résidentielles classiques. Nous adaptons le dégraissant professionnel et le temps de contact avant rinçage. Le résultat reste optimal, mais peut nécessiter un passage supplémentaire sur les zones les plus encrassées comme les rampes d'accès et les premiers emplacements.</p>",
        },
        {
          question:
            "Faut-il organiser une rotation complète des véhicules pour permettre le nettoyage ?",
          answer:
            "<p>Non, nous travaillons par zones successives, ce qui permet aux résidents de stationner temporairement dans les secteurs non traités. Pour les petits parkings (moins de 30 places), il est parfois plus simple d'organiser une rotation complète en une seule journée. Nous validons l'organisation la plus adaptée lors de la visite technique préalable.</p>",
        },
        {
          question:
            "Les taches d'huile très anciennes peuvent-elles être totalement supprimées ?",
          answer:
            "<p>Les taches anciennes très incrustées dans le béton poreux peuvent laisser une trace résiduelle malgré le dégraissant et la haute pression thermique. Nous obtenons généralement une amélioration nette (80 à 90 % d'élimination visuelle), mais ne garantissons pas une disparition totale si l'huile a pénétré profondément. L'objectif est de retrouver un sol propre, non glissant et visuellement acceptable, pas nécessairement un aspect neuf.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux de lavage dans les parkings des Juilliottes ou de Liberté-Vert-de-Maisons ?",
          answer:
            "<p>Nous aspirons les eaux sales avec l'autolaveuse ou les dirigeons vers les siphons et caniveaux existants lorsque le réseau le permet. Si les évacuations sont absentes ou obstruées, nous utilisons une cuve de récupération pour évacuer les effluents de manière conforme. Cette contrainte technique est systématiquement identifiée lors du diagnostic préalable et intégrée dans l'organisation de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "La remise en état technique d'un balcon encrassé préserve l'intégrité des supports, protège les joints d'étanchéité et redonne un espace extérieur propre et fonctionnel dans les quartiers de Maisons-Alfort.",
      whyUsBullets: [
        "Connaissance des quartiers de Maisons-Alfort : Charentonneau avec balcons pavillonnaires, Alfort et Les Planètes proches des bords de Marne.",
        "Produits adaptés aux supports courants (carrelage, béton, dalle composite) et maîtrise des pressions pour préserver les joints d'étanchéité fragiles.",
        "Gestion rigoureuse de l'eau pour éviter coulures vers étages inférieurs et infiltrations le long des façades mitoyennes.",
      ],

      uniqueIntro:
        "<p>Les traces de pluie séchée marquent le carrelage, les joints noircis laissent transparaître des infiltrations potentielles, les dalles en béton du Charentonneau ou des Planètes accumulent des dépôts verts dans les angles exposés à l'ombre. La proximité des bords de Marne génère une humidité persistante qui favorise le développement de mousses et de salissures organiques sur les supports poreux.</p>\n<p class=\"mt-4\">Les occupants des résidences d'Alfort ou de Liberté-Vert-de-Maisons constatent que le balayage régulier ne suffit pas à éliminer les traces incrustées. Les tentatives de nettoyage à grande eau sans maîtrise de la pression abîment parfois les joints fragilisés, et l'eau s'écoule de manière incontrôlée vers les balcons inférieurs ou le long de la façade, créant des tensions avec les voisins et risquant d'aggraver les problèmes d'étanchéité.</p>\n<p class=\"mt-4\">Une intervention professionnelle adaptée aux matériaux préserve les supports, nettoie en profondeur sans endommager les joints et gère rigoureusement l'évacuation des eaux pour éviter tout désordre collatéral.</p>",

      uniqueDeepDive:
        "<h3>Identification des supports et protection des menuiseries</h3>\n<p>Le technicien examine la nature des revêtements (carrelage grès cérame, béton brut, dalle composite, pierre naturelle) et l'état des joints d'étanchéité. Les supports poreux du Charentonneau nécessitent des produits adaptés pour ne pas saturer le matériau. Les menuiseries (porte-fenêtre, châssis) sont protégées par des bâches pour éviter les projections. Les plantes et le mobilier sont déplacés ou couverts selon les indications du client.</p>\n\n<h3>Nettoyage différencié selon la porosité des matériaux</h3>\n<p class=\"mt-4\">Un produit nettoyant spécifique au support est appliqué sur l'ensemble de la surface, laissé agir le temps nécessaire, puis brossé manuellement ou mécaniquement selon la rugosité. Les joints reçoivent un traitement au détail pour éliminer les dépôts noirs sans arrachement. Le rinçage se fait à pression modérée, réglée en fonction de la résistance du support : pression réduite pour les joints anciens ou les dalles poreuses, pression standard pour les carrelages récents. L'eau est systématiquement dirigée vers l'évacuation du balcon à l'aide de raclettes ou de chiffons absorbants pour éviter les coulures.</p>\n\n<h3>Conseils de préservation et fréquence d'entretien</h3>\n<p class=\"mt-4\">Après séchage naturel (2 à 6 heures selon l'exposition et la porosité), le technicien remet au client des recommandations d'entretien : balayage régulier pour éviter l'accumulation de feuilles venues des bords de Marne, nettoyage léger semestriel pour maintenir la propreté sans nécessiter systématiquement un passage professionnel, surveillance des joints pour anticiper les éventuelles réfections.</p>",

      specificChallenges: [
        "La proximité des bords de Marne dans les quartiers Charentonneau, Les Planètes et Alfort génère une humidité persistante favorisant mousses et dépôts verts sur les balcons exposés au nord.",
        "Les joints de carrelage fragilisés par le temps dans les résidences anciennes du Centre-ville nécessitent un brossage manuel précis et une pression réduite pour éviter tout arrachement.",
        "La gestion de l'eau doit être rigoureuse dans les immeubles collectifs pour éviter les écoulements sur les balcons inférieurs ou les façades, source potentielle de conflits de voisinage.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager les joints de mon carrelage ?",
          answer:
            "<p>Nous réglons systématiquement la pression en fonction de la résistance des supports et de l'état des joints. Les carrelages récents et les dalles en béton supportent une pression modérée sans problème. Les joints anciens ou friables sont traités avec une pression réduite et un brossage manuel pour éviter tout arrachement. Si un joint est déjà dégradé, nous le signalons avant intervention pour que vous puissiez anticiper une réfection éventuelle.</p>",
        },
        {
          question:
            "Comment évitez-vous que l'eau de rinçage ne coule chez mes voisins du dessous ?",
          answer:
            "<p>Nous dirigeons systématiquement l'eau vers l'évacuation du balcon à l'aide de raclettes et de chiffons absorbants. Si le balcon n'a pas d'évacuation fonctionnelle ou si la pente est mal orientée, nous récupérons l'eau manuellement pour éviter tout écoulement sur la façade ou vers les balcons inférieurs. Cette contrainte technique est anticipée lors de la prise de rendez-vous et intégrée dans l'organisation de l'intervention.</p>",
        },
        {
          question:
            "Les produits utilisés sont-ils compatibles avec les supports en béton poreux du Charentonneau ?",
          answer:
            "<p>Oui. Nous adaptons le pH et la concentration des produits à la porosité des supports. Les dalles en béton brut ou les pierres naturelles poreuses reçoivent des produits biodégradables à rinçage complet pour éviter toute saturation ou altération du matériau. Le temps de contact est ajusté pour garantir un nettoyage efficace sans fragiliser la structure du support.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser le balcon après le nettoyage ?",
          answer:
            "<p>Le séchage complet prend entre 2 et 6 heures selon l'ensoleillement, la ventilation et la porosité du revêtement. Les supports peu poreux (carrelage grès cérame) sèchent rapidement (2 à 3 heures), tandis que les dalles en béton poreux peuvent nécessiter 4 à 6 heures. Vous pouvez généralement réinstaller votre mobilier et utiliser le balcon le jour même de l'intervention. Nous vous précisons le délai exact en fonction de l'exposition et des conditions météo.</p>",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "L'assainissement sécurisé d'un balcon souillé par des fientes de pigeons rétablit un espace propre, désinfecté et utilisable sans risque sanitaire dans les résidences de Maisons-Alfort.",
      whyUsBullets: [
        "Connaissance des secteurs à forte présence aviaire : Juilliottes, Centre-ville, bords de Marne avec balcons exposés aux volatiles.",
        "Protocole sécurisé avec EPI complets (combinaison, FFP2, gants), humidification préalable et désinfection virucide/bactéricide homologuée.",
        "Évacuation sécurisée des déchets contaminés et conseils de prévention (picots, filets) pour limiter récurrence.",
      ],

      uniqueIntro:
        "<p>Les fientes de pigeons s'accumulent sur le balcon, nids dissimulés derrière le garde-corps, odeur acide qui pénètre dans le logement dès qu'on entrouvre la fenêtre. Dans les résidences proches des bords de Marne ou des grands ensembles des Juilliottes, la présence aviaire devient vite une nuisance chronique que les occupants n'osent pas toujours évoquer avec le syndic par peur du jugement ou de complications administratives.</p>\n<p class=\"mt-4\">Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons, parasites) qui se dispersent en poussière fine lorsqu'elles sèchent. Un simple balayage à sec aggrave la situation en libérant ces particules contaminées dans l'air. Les tentatives de nettoyage domestique échouent face à la quantité, à la corrosion des supports métalliques et à l'odeur persistante qui imprègne les textiles intérieurs.</p>\n<p class=\"mt-4\">Une intervention professionnelle avec équipements de protection individuelle et protocole de désinfection virucide élimine les fientes, neutralise les agents pathogènes et permet de retrouver un balcon utilisable sans risque pour la santé des occupants.</p>",

      uniqueDeepDive:
        '<h3>Équipements de protection et confinement du chantier</h3>\n<p>Le technicien revêt une combinaison jetable intégrale, des gants résistants, un masque respiratoire FFP2 et des lunettes de protection avant toute approche du balcon souillé. L\'intérieur du logement est isolé par des bâches fixées au niveau de la porte-fenêtre pour éviter toute dispersion de poussières contaminées vers les pièces habitées. Les fientes sèches sont humidifiées avant tout contact pour limiter la mise en suspension des particules pathogènes dans l\'air.</p>\n\n<h3>Ramassage sécurisé et désinfection virucide</h3>\n<p class="mt-4">Les fientes, nids et débris sont ramassés manuellement et conditionnés dans des sacs étanches résistants adaptés aux déchets biologiques contaminés. Les surfaces (sol, garde-corps métallique, murs mitoyens, vitrerie) sont nettoyées avec un produit détergent, puis rincées à pression modérée. Une désinfection complète est ensuite appliquée avec un produit virucide et bactéricide homologué, laissé agir selon le temps de contact recommandé par le fabricant. Cette étape est indispensable pour neutraliser les agents pathogènes résiduels (salmonelles, cryptococcose, histoplasmose).</p>\n\n<h3>Aération et consignes de réintégration</h3>\n<p class="mt-4">Après rinçage final et évacuation des eaux, le balcon est aéré pendant plusieurs heures. Un délai de 24 heures avant réutilisation est généralement recommandé pour garantir un séchage complet et une dissipation totale des produits désinfectants. Les sacs de déchets contaminés sont évacués de manière sécurisée par nos équipes. Nous informons l\'occupant sur les solutions de dissuasion possibles (picots anti-pigeons, filets) pour limiter le retour des volatiles, notamment dans les secteurs des Juilliottes ou du Centre-ville où la pression aviaire est récurrente.</p>',

      specificChallenges: [
        "Les secteurs proches des bords de Marne (Charentonneau, Les Planètes, Alfort) et les grands ensembles des Juilliottes subissent une pression aviaire récurrente nécessitant parfois des interventions régulières.",
        "L'accès aux balcons en étage dans les collectifs des Juilliottes ou d'Hector Berlioz impose une organisation précise (ascenseurs, badges, coordination avec gardien) et un conditionnement étanche des déchets pour éviter toute contamination des circulations communes.",
        "Les fientes anciennes peuvent corroder les peintures, enduits et garde-corps métalliques, nécessitant un signalement au propriétaire pour éventuelles réparations ultérieures (peinture, traitement antirouille).",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles vraiment un danger sanitaire justifiant une intervention professionnelle ?",
          answer:
            "<p>Oui. Les fientes contiennent des bactéries (salmonelles, E. coli, Chlamydophila psittaci), des champignons (cryptococcose, histoplasmose) et des parasites susceptibles de provoquer infections respiratoires, allergies sévères et maladies digestives. Le simple fait de balayer à sec disperse ces agents pathogènes en poussière fine inhalable. Un nettoyage professionnel avec désinfection virucide est indispensable pour neutraliser ces risques sanitaires et garantir un espace réellement assaini.</p>",
        },
        {
          question:
            "Les produits désinfectants utilisés sont-ils dangereux pour mes enfants ou mes animaux domestiques après séchage ?",
          answer:
            "<p>Les produits virucides et bactéricides sont appliqués selon les dosages réglementaires et rincés après le temps de contact nécessaire (généralement 10 à 15 minutes). Après séchage complet (24 heures recommandées), le balcon est totalement sûr pour tous les occupants, y compris enfants et animaux domestiques. Nous vous communiquons les délais exacts de réintégration et les éventuelles précautions à respecter lors de l'intervention.</p>",
        },
        {
          question:
            "Le nettoyage peut-il endommager mon balcon (peinture du garde-corps, revêtement de sol) ?",
          answer:
            "<p>Les fientes acides peuvent avoir déjà corrodé certaines surfaces (peinture écaillée du garde-corps métallique, rouille, altération des enduits). Nous signalons ces dégradations préexistantes avant traitement. Le nettoyage lui-même, réalisé à pression modérée avec des produits adaptés, n'aggrave pas l'état des supports. En revanche, les dommages causés par les fientes nécessitent parfois des réparations ultérieures (peinture antirouille, reprise d'enduit).</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des fientes et des nids récupérés ?",
          answer:
            "<p>Les déchets contaminés sont conditionnés dans des sacs étanches résistants à double paroi et évacués immédiatement par nos équipes à l'issue de l'intervention. Nous ne les déposons pas dans les locaux poubelles de la copropriété pour éviter toute contamination des espaces communs. Cette évacuation sécurisée est incluse dans notre prestation et respecte les précautions sanitaires nécessaires au transport de déchets biologiques.</p>",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Le rafraîchissement professionnel de canapés, tapis et matelas redonne confort et hygiène aux espaces de vie, élimine les odeurs persistantes et améliore le bien-être quotidien des familles de Maisons-Alfort.",
      whyUsBullets: [
        "Intervention à domicile dans tous les quartiers de Maisons-Alfort : Charentonneau, Centre-ville, Les Planètes, secteurs résidentiels.",
        "Matériel d'injection-extraction adapté aux textiles domestiques avec réglage précis de pression et température selon les fibres.",
        "Conseils personnalisés pour entretien courant et gestes simples limitant salissures entre deux passages professionnels.",
      ],

      uniqueIntro:
        "<p>Dans les logements du Charentonneau ou des appartements du Centre-ville, le canapé du salon accumule les traces du quotidien : miettes coincées entre les coussins, taches de café ou de chocolat, traces de doigts sur les accoudoirs, poils d'animaux incrustés dans les fibres. Le tapis du séjour ternit malgré les aspirations régulières, le matelas de la chambre des enfants garde une odeur tenace malgré les draps changés chaque semaine.</p>\n<p class=\"mt-4\">Les occupants passent l'aspirateur deux fois par semaine, frottent les taches avec des produits ménagers trouvés en supermarché, aèrent les pièces dès que le temps le permet, mais les salissures incrustées restent visibles et les odeurs reviennent dès que l'humidité augmente. Les invités s'installent sur un canapé qui n'a plus l'air neuf, les enfants jouent sur un tapis qui garde des zones grisâtres près du passage, et les nuits deviennent moins confortables à cause d'allergies liées aux acariens accumulés dans le matelas.</p>\n<p class=\"mt-4\">Un nettoyage professionnel par injection-extraction élimine les salissures en profondeur, ravive les couleurs d'origine, neutralise les odeurs et réduit significativement la présence d'acariens et d'allergènes. Les textiles retrouvent un aspect proche du neuf et redeviennent agréables à utiliser au quotidien.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic textile et identification des taches</h3>\n<p>Le technicien examine la nature du tissu (coton, laine, synthétique, velours, microfibre), identifie les taches visibles (vin, café, graisse, urine d'animal, encre) et teste la solidité des couleurs sur une zone discrète avant tout traitement. Les familles du Charentonneau avec enfants et animaux domestiques présentent souvent des taches organiques nécessitant un détachant enzymatique spécifique. Ce pré-traitement est laissé agir quelques minutes avant le nettoyage général.</p>\n\n<h3>Injection-extraction pour extraction maximale des résidus</h3>\n<p class=\"mt-4\">La machine projette une solution nettoyante chauffée à température adaptée au textile (tiède pour les fibres naturelles, chaude pour les synthétiques), puis aspire immédiatement l'eau chargée de salissures. Les passes successives sur les zones très sollicitées (assises de canapé, centre du tapis, zones de couchage du matelas) permettent d'extraire un maximum de résidus. L'aspiration puissante limite l'humidité résiduelle et accélère le séchage, permettant une réutilisation rapide des textiles dans la journée.</p>\n\n<h3>Conseils d'entretien pour limiter les réaccumulations</h3>\n<p class=\"mt-4\">Le canapé, le tapis ou le matelas sèche naturellement en 4 à 8 heures selon la ventilation de la pièce et l'épaisseur du textile. Nous conseillons d'aérer le logement, d'éviter de s'asseoir immédiatement sur les surfaces traitées et de maintenir un aspirateur régulier pour limiter les réaccumulations. Pour les familles avec enfants ou animaux des quartiers Charentonneau, Les Planètes ou Centre-ville, un nettoyage annuel ou bisannuel suffit généralement à maintenir un niveau d'hygiène correct.</p>",

      specificChallenges: [
        "Les familles avec enfants et animaux dans les quartiers Charentonneau et Centre-ville génèrent des taches organiques (urine, nourriture, lait) nécessitant un pré-traitement enzymatique ciblé.",
        "Les acariens et allergènes s'accumulent dans les matelas et les tapis des logements peu ventilés, imposant une extraction puissante et un rinçage complet pour réduire les irritations respiratoires.",
        "Le séchage peut être ralenti dans les pièces humides ou mal aérées des Planètes ou d'Alfort, nécessitant des consignes précises (fenêtres ouvertes, chauffage modéré) pour éviter toute réhumidification prématurée.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage par injection-extraction élimine-t-il vraiment les acariens et les allergènes présents dans les matelas ?",
          answer:
            "<p>L'injection d'eau chaude (60 à 70°C selon le textile) et l'aspiration puissante éliminent une grande partie des acariens vivants, des déjections et des allergènes présents dans les fibres. Le rinçage complet évacue les résidus organiques qui nourrissent les acariens. Ce nettoyage réduit significativement les irritations respiratoires et améliore la qualité de l'air intérieur, mais ne remplace pas un entretien régulier par aspiration hebdomadaire et aération quotidienne.</p>",
        },
        {
          question:
            "Les taches d'urine d'animal anciennes et les odeurs tenaces peuvent-elles disparaître totalement ?",
          answer:
            "<p>Les taches d'urine récentes partent généralement très bien avec un détachant enzymatique adapté aux protéines animales. Les taches anciennes très incrustées peuvent laisser une trace résiduelle légère selon la profondeur de pénétration dans la mousse du canapé ou du matelas. Les odeurs sont neutralisées par l'extraction complète des résidus organiques et le rinçage. Dans les cas extrêmes (urine très ancienne), une seconde intervention ciblée peut être nécessaire.</p>",
        },
        {
          question:
            "Combien de temps dois-je attendre avant de réutiliser mon canapé ou de marcher sur mon tapis ?",
          answer:
            "<p>Le séchage prend généralement entre 4 et 8 heures selon la ventilation, l'épaisseur du textile et l'humidité ambiante. Nous vous recommandons d'attendre 6 heures minimum avant de vous asseoir sur le canapé ou de marcher sur le tapis. Pour un matelas, il est préférable d'attendre une nuit complète (12 à 16 heures) avant de remettre les draps et de dormir dessus, surtout dans les logements du Charentonneau ou des Planètes où l'humidité peut ralentir le séchage.</p>",
        },
        {
          question:
            "Que dois-je préparer avant votre arrivée pour le nettoyage à domicile ?",
          answer:
            "<p>Dégagez l'accès au canapé (éloignez tables basses, lampes et objets encombrants), roulez ou déplacez les petits tapis vers une zone dégagée du logement, retirez draps, couvertures et protège-matelas des lits concernés. Si vous avez des animaux domestiques, isolez-les temporairement dans une autre pièce pour faciliter notre travail. Nous nous occupons du reste : protection des sols si nécessaire, aspiration préalable, pré-traitement des taches, nettoyage complet et conseils post-intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Fin de bail, remise en état après travaux ou déménagement. Intervention pensée pour une ville avec des réalités terrain distinctes entre Charentonneau (pavillons/parquets), Les Juilliottes (grands collectifs) et le secteur Alfort/École Vétérinaire.",

      whyUsBullets: [
        "Approche “ville multi-niveaux” : pavillons à étages et parquets à Charentonneau, dalles/parties communes en grands ensembles aux Juilliottes.",
        "Gestion des accès et du timing : digicodes/Vigik fréquents, stationnement tendu autour du Métro 8 et de l’Avenue de la République.",
        "Focus finitions visibles : cuisine/SDB (calcaire), plinthes et menuiseries, vitrages exposés A4/A86 selon secteurs.",
      ],

      uniqueIntro:
        '<p>Maisons-Alfort a une signature très différente des communes “bord de Marne” voisines : ici, le quotidien est rythmé par le <strong>Métro 8</strong> (École Vétérinaire, Stade, Juilliottes) et le <strong>RER D</strong>, avec un bâti qui alterne grands collectifs (Les Juilliottes, Vert-de-Maisons) et zones pavillonnaires plus calmes (Charentonneau, Planètes). Pour un nettoyage d’appartement ou de maison, ça change tout : on ne prépare pas une remise en état de pavillon à étages comme un T3 dans une résidence sur dalle.</p>\n<p class="mt-4">Le secteur <strong>Alfort / ENVA</strong> apporte aussi un contexte très concret : rotation de logements (étudiants, jeunes actifs), passages fréquents, et un standard d’hygiène élevé autour des entrées, sols et pièces d’eau. En parallèle, Charentonneau concentre des maisons avec <strong>parquet chêne</strong>, menuiseries anciennes et parfois des vérandas côté Marne : l’enjeu n’est pas la “force” mais la précision et la protection des matériaux.</p>\n<p class="mt-4">Klinova intervient à Maisons-Alfort avec une méthode orientée résultat : cadrage du périmètre, traitement des zones critiques (cuisine, SDB, sols), puis finitions. L’objectif est simple : un rendu net et cohérent, adapté aux contraintes locales (stationnement, accès, ascenseurs exigus) et aux attentes souvent élevées des quartiers résidentiels.</p>',

      uniqueDeepDive:
        "<h3>Secteur Métro 8 / Avenue de la République — logistique et fin de bail</h3>\n<p>Autour des stations et de l’axe central, le point dur est rarement “le nettoyage” mais l’organisation : stationnement, accès, créneaux. Nous structurons l’intervention pour limiter les allers-retours (matériel en une montée), en priorisant les zones contrôlées à l’état des lieux : cuisine, salle d’eau, sols et finitions (plinthes, interrupteurs, poignées).</p>\n\n<h3>Charentonneau et bords de Marne — parquets, menuiseries et maisons à étages</h3>\n<p>Dans ce secteur, la qualité se joue sur la protection des sols et la régularité du rendu : parquets à traiter sans excès d’eau, reprises des plinthes et des marches, et contrôle des points “poussière” (escaliers, angles, radiateurs). Les maisons à étages demandent une progression par zones pour éviter de re-salir ce qui est déjà fait.</p>\n\n<h3>Juilliottes / Vert-de-Maisons — grands collectifs, accès et surfaces vastes</h3>\n<p>Ici, les volumes et les circulations internes comptent : ascenseurs parfois exigus, couloirs, dalles, accès Vigik. Nous adaptons l’ordre des tâches pour garder des sols propres jusqu’à la sortie, et nous insistons sur les pièces d’eau (calcaire/joints) et les vitrages/baies des logements récents, qui révèlent vite les traces.</p>",

      specificChallenges: [
        "Ville “transport” : flux Métro 8 / RER D, rotation locative et contraintes de timing (fin de bail, créneaux serrés).",
        "Stationnement tendu autour de l’ENVA, des stations de métro et de l’Avenue de la République.",
        "Charentonneau : maisons à étages, parquets et menuiseries anciennes nécessitant une approche douce et précise.",
        "Juilliottes / Vert-de-Maisons : grands collectifs, accès Vigik et ascenseurs exigus, avec volumes à gérer sans re-salissure.",
        "Exposition A4/A86 selon secteurs : vitrages et balcons pouvant marquer plus vite (poussières urbaines).",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous à Maisons-Alfort (94700) pour un nettoyage avant état des lieux ?",
          answer:
            "<p>Oui. Nous cadrons le périmètre puis nous traitons les zones qui comptent le plus lors d’un contrôle : cuisine, salle d’eau, sols et finitions visibles (plinthes, poignées, interrupteurs, encadrements). La planification tient compte des accès (digicode/Vigik) et des contraintes de stationnement autour des stations.</p>",
        },
        {
          question:
            "Pouvez-vous faire un nettoyage après travaux (plâtre/peinture) dans une maison à Charentonneau ?",
          answer:
            "<p>Oui. Après rénovation, l’enjeu est la poussière fine et les traces sur menuiseries, plinthes et escaliers. Nous organisons un dépoussiérage structuré, puis la remise en état des surfaces et des sols, avec une attention particulière aux parquets et aux marches pour éviter toute marque.</p>",
        },
        {
          question:
            "Le logement est dans un grand collectif (Juilliottes / Vert-de-Maisons) : est-ce plus compliqué ?",
          answer:
            "<p>Pas si l’accès est anticipé. Nous prévoyons le Vigik, l’ascenseur et le cheminement pour monter le matériel en une fois, puis nous travaillons de façon à conserver les sols propres jusqu’à la sortie. Les pièces d’eau (calcaire/joints) et les baies vitrées sont traitées en priorité selon le besoin.</p>",
        },
        {
          question: "Faites-vous aussi les vitres et baies vitrées ?",
          answer:
            "<p>Sur demande, oui pour les vitrages accessibles et les encadrements. À Maisons-Alfort, c’est utile sur les logements exposés aux axes (A4/A86) ou avec grandes baies (logements récents), car les traces se voient vite au soleil.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
