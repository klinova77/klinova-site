import type { City } from "~/types/geo";

const city: City = {
  name: "Créteil",
  slug: "creteil",
  postalCodes: ["94000"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription:
    "Préfecture du Val-de-Marne, Créteil concentre 90 000 habitants autour de pôles structurants : métro ligne 8, Préfecture, CHU Henri-Mondor, UPEC et centre commercial Créteil Soleil. Ce tissu urbain dense, mêlant grands ensembles, résidences récentes et immeubles anciens, génère des besoins constants en maintenance et propreté des surfaces collectives et privées.",

  hubIntro:
    "<p>Klinova intervient à Créteil pour accompagner syndics de copropriété, gestionnaires immobiliers et bailleurs dans la maintenance des surfaces et l'entretien des équipements collectifs. Nous connaissons les contraintes d'accès autour de la Préfecture, les flux intenses du secteur Créteil Soleil et les spécificités des tours de Mont-Mesly comme des résidences de la Pointe du Lac.</p>\n<p>Notre approche repose sur une <strong>organisation rigoureuse</strong>, un matériel adapté aux différentes typologies de bâti et un suivi précis de chaque intervention. Nous coordonnons nos passages avec les gardiens, adaptons nos horaires aux contraintes de circulation et documentons systématiquement les opérations réalisées.</p>\n<ul>\n  <li><strong>Parties communes et surfaces textiles</strong> : moquettes de halls, escaliers et paliers dans les copropriétés du Centre ancien, de la Préfecture et du Front de Lac, avec gestion des contraintes d'accès et adaptation aux flux piétons importants.</li>\n  <li><strong>Parkings souterrains et aériens</strong> : décrassage des sols béton et résine, traitement des taches d'hydrocarbures, remise en état des marquages dans les parkings de résidences, de Créteil Soleil et du secteur Pompadour.</li>\n  <li><strong>Espaces extérieurs privatifs</strong> : remise en état de balcons et terrasses pour les particuliers des quartiers Halage, Chenevier et bords de Marne, avec gestion adaptée des supports (carrelage, béton, dalles) et maîtrise de l'évacuation des eaux.</li>\n  <li><strong>Textiles à domicile</strong> : rafraîchissement de canapés, tapis et matelas chez les particuliers des secteurs pavillonnaires et résidentiels, avec protocoles d'injection-extraction et conseils d'entretien.</li>\n</ul>",

  citySpecificChallenges: [
    "Encrassement accéléré des halls et parkings autour des stations de métro ligne 8 (Créteil-Préfecture, Créteil-Université, Créteil-L'Échat, Créteil-Pointe du Lac) et de la gare RER D Créteil-Pompadour en raison des <strong>flux piétons quotidiens massifs</strong>.",
    "<strong>Particules fines et poussières urbaines</strong> générées par l'A86 et l'échangeur Pompadour, impactant les balcons, vitres et surfaces extérieures des résidences situées en proximité des grands axes.",
    "Accumulation de <strong>feuilles et boues</strong> sur les balcons et terrasses des quartiers Halage, bords de Marne et Front de Lac en raison de la végétation dense et de la proximité du lac.",
    "Parties communes étendues dans les tours et grands ensembles de Mont-Mesly nécessitant une <strong>coordination précise avec les bailleurs</strong> et syndics pour limiter la gêne des résidents lors des interventions.",
  ],

  districts: [
    "Buttes",
    "Halage",
    "Bleuets",
    "Bordières",
    "Pinsons",
    "Échat",
    "Champeval",
    "Chenevier",
    "Déménitroux",
    "Centre ancien",
    "Brèche",
    "Préfecture",
    "Croix des Mèches",
    "Lévrière",
    "Haye aux Moines",
    "Front de Lac",
    "Ormetteau",
    "Port",
    "La Source",
    "Pointe du Lac",
    "Mont-Mesly",
    "La Habette",
    "Côte d'Or",
    "Sarrazins",
    "Coteaux du Sud",
    "Montaigut",
  ],

  nearbyCities: [
        "maisons-alfort",
        "alfortville",
        "choisy-le-roi",
        "saint-maur-des-fosses",
        "joinville-le-pont",
        "vitry-sur-seine",
        "thiais",
        "charenton-le-pont",
        "ivry-sur-seine",
        "orly"
      ],

  landmarks: [
    "Mairie de Créteil",
    "Préfecture du Val-de-Marne",
    "Centre commercial Créteil Soleil",
    "CHU Henri-Mondor",
    "Université Paris-Est Créteil (UPEC)",
    "Métro Créteil-Pointe du Lac (ligne 8)",
  ],

  faq: [
    {
      question:
        "Intervenez-vous rapidement sur Créteil en cas d'urgence (sinistre, fin de chantier) ?",
      answer:
        "<p>Nous mobilisons nos équipes locales pour des interventions urgentes à Créteil, notamment autour de la Préfecture, du CHU Henri-Mondor ou dans les copropriétés de Mont-Mesly. En cas de <strong>sinistre</strong> (dégât des eaux, pollution accidentelle) ou de <strong>livraison de chantier</strong> nécessitant une remise en état rapide, nous établissons un diagnostic par téléphone, confirmons la faisabilité technique et planifions le passage selon disponibilité. Le matériel est adapté à la surface et à la contrainte (autolaveuse, injection-extraction, haute pression contrôlée).</p>",
    },
    {
      question:
        "Le déplacement pour établir un devis à Créteil est-il facturé ?",
      answer:
        "<p>Non. Nous nous déplaçons <strong>gratuitement</strong> pour établir un devis détaillé dans tous les secteurs de Créteil, du Centre ancien à la Pointe du Lac. Cette visite permet d'évaluer précisément la surface, le type de revêtement, les contraintes d'accès (ascenseur, parking sous-sol, badge) et les éventuelles spécificités techniques. Vous recevez ensuite une <strong>proposition chiffrée claire</strong>, sans engagement, tenant compte de la configuration réelle du site.</p>",
    },
    {
      question:
        "Comment gérez-vous les contraintes de stationnement et d'accès autour de la Préfecture et de Créteil Soleil ?",
      answer:
        "<p>Les secteurs Préfecture et Créteil Soleil présentent des <strong>contraintes de circulation</strong> et de <strong>stationnement payant</strong> aux heures de pointe. Nous planifions nos interventions en tenant compte de ces paramètres : passages matinaux avant 8h ou en fin de matinée après le pic de flux, repérage préalable des accès véhicule et des zones de déchargement. Pour les parkings sous-sol, nous validons systématiquement la <strong>hauteur libre</strong>, la <strong>largeur des rampes</strong> et les conditions <strong>d'évacuation des eaux</strong> avant toute intervention.</p>",
    },
    {
      question:
        "Proposez-vous un suivi régulier pour les copropriétés de Créteil ?",
      answer:
        "<p>Oui. Nous mettons en place des <strong>contrats d'entretien annuels</strong> pour les syndics et gestionnaires souhaitant planifier les interventions (nettoyage de moquettes tous les 12 à 18 mois, décrassage de parkings semestriel ou annuel). Chaque passage fait l'objet d'un <strong>compte-rendu</strong> transmis au syndic, détaillant les surfaces traitées, les produits utilisés et les éventuelles observations techniques. Cette approche préventive évite l'accumulation de salissures et facilite la gestion budgétaire des copropriétés.</p>",
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
        "Le nettoyage professionnel des moquettes redonne aux parties communes de Créteil une propreté structurée, prolonge la durée de vie des revêtements et améliore l'image des copropriétés auprès des résidents et visiteurs.",
      whyUsBullets: [
        "Connaissance précise des typologies de Créteil : tours de Mont-Mesly, résidences du Front de Lac, immeubles anciens du Centre.",
        "Matériel d'injection-extraction professionnel adapté aux surfaces étendues et aux contraintes techniques des parties communes cristoliennes.",
        "Organisation coordonnée avec gardiens et syndics pour interventions tôt le matin ou en journée calme, sans bloquer les accès.",
      ],

      uniqueIntro:
        "<p>Les traces de pas s'accumulent dans les halls vitrés de la Préfecture, les paliers des tours de Mont-Mesly et les escaliers des résidences du Centre ancien. Le passage quotidien des habitants empruntant le métro ligne 8 ou le RER D marque les fibres, ternit les couleurs et <strong>incruste les salissures</strong> jusqu'à créer des zones grisâtres difficilement récupérables par un simple aspirateur.</p>\n<p class=\"mt-4\">Dans les copropriétés proches des stations Créteil-Université ou Créteil-L'Échat, les flux piétons intenses amplifient l'encrassement. Les moquettes perdent leur aspect d'origine en quelques mois, donnant une <strong>impression de négligence</strong> qui impacte la valeur perçue du bâtiment. Les syndics reçoivent des remarques, les conseils syndicaux cherchent des solutions économiques, et les tentatives avec des appareils domestiques échouent face à l'ampleur des surfaces et à la profondeur des salissures.</p>\n<p class=\"mt-4\">Un nettoyage par injection-extraction élimine les dépôts incrustés, ravive les teintes et assainit les fibres en profondeur. Les parties communes retrouvent une propreté visible qui rassure les occupants et valorise le patrimoine immobilier.</p>",

      uniqueDeepDive:
        "<h3>Analyse technique préalable</h3>\n<p>Le technicien examine la nature de la moquette (bouclée, velours, synthétique, laine), repère les zones de <strong>fort trafic</strong> (entrées de halls, paliers d'ascenseurs, marches d'escalier) et identifie les taches spécifiques (boue séchée, graisse, traces de semelles). Dans les immeubles de la Préfecture ou du Front de Lac, il évalue les contraintes d'accès (ascenseurs, badges, présence d'un gardien) et vérifie la compatibilité du revêtement avec l'injection d'eau chaude.</p>\n\n<h3>Extraction haute performance</h3>\n<p class=\"mt-4\">La machine d'injection-extraction projette une solution nettoyante chauffée sous <strong>pression contrôlée</strong>, puis aspire instantanément l'eau chargée de salissures. Les zones à fort passage reçoivent plusieurs passes successives pour garantir un détachage complet. Les angles, bas de murs et contremarches sont traités au détail pour éviter toute zone oubliée. L'extraction puissante limite l'humidité résiduelle et réduit les délais de séchage à quelques heures selon la ventilation naturelle.</p>\n\n<h3>Suivi et recommandations d'entretien</h3>\n<p class=\"mt-4\">Après séchage, le technicien vérifie l'absence de traces résiduelles et remet au syndic ou au gestionnaire un <strong>rapport</strong> détaillant les surfaces traitées. Pour les copropriétés du Centre ancien ou de Mont-Mesly, une fréquence de 12 à 18 mois est généralement recommandée selon l'intensité du passage et la qualité de l'entretien courant (aspirations régulières, tapis d'entrée).</p>",

      specificChallenges: [
        "Les flux piétons massifs autour des stations de métro ligne 8 (Créteil-Préfecture, Créteil-Université) génèrent un <strong>encrassement rapide des moquettes</strong> de halls et d'escaliers.",
        "Les marches d'escalier dans les immeubles anciens du Centre ancien présentent des <strong>usures localisées</strong> nécessitant un traitement ciblé et plusieurs passes.",
        "Les moquettes posées sur dalle béton dans les résidences récentes du Front de Lac sèchent rapidement grâce à l'extraction puissante et à la ventilation naturelle des halls vitrés.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des halls de la Préfecture ou de Mont-Mesly nécessitent-elles un traitement particulier ?",
          answer:
            "<p>Les grands halls et les parties communes étendues de ces secteurs reçoivent un flux piéton soutenu. Nous adaptons le <strong>nombre de passes d'extraction</strong> aux zones de passage intense (entrées, devant ascenseurs) et utilisons des produits adaptés aux fibres synthétiques ou aux mélanges laine/synthétique. Le séchage est optimisé par <strong>extraction maximale</strong> pour limiter l'indisponibilité à quelques heures.</p>",
        },
        {
          question:
            "Intervenez-vous dans les petites copropriétés du Centre ancien comme dans les grandes résidences ?",
          answer:
            "<p>Oui. Nous traitons aussi bien les cages d'escalier de <strong>petites copropriétés anciennes</strong> que les halls vitrés des <strong>résidences récentes</strong>. Le matériel est dimensionné en fonction de la surface et des contraintes d'accès (escalier étroit, absence d'ascenseur). Chaque intervention fait l'objet d'un <strong>diagnostic préalable</strong> pour adapter la méthode et le temps nécessaire.</p>",
        },
        {
          question:
            "Le nettoyage par injection-extraction risque-t-il d'abîmer les moquettes anciennes ?",
          answer:
            "<p>Non, à condition d'adapter la pression, la température et le pH des produits à la nature de la fibre. Nous testons systématiquement une <strong>zone discrète</strong> avant traitement complet. Les moquettes anciennes supportent parfaitement cette méthode si elle est correctement paramétrée. L'extraction puissante évite la <strong>sur-humidification</strong> qui pourrait endommager le support.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention pour limiter la gêne des résidents ?",
          answer:
            "<p>Nous planifions les passages en coordination avec le gardien ou le syndic, privilégiant les <strong>créneaux matinaux</strong> ou en milieu de journée lorsque les flux sont réduits. Les zones traitées sont balisées et les délais de séchage communiqués aux occupants. En général, la circulation peut reprendre dans les <strong>2 à 4 heures</strong> selon la ventilation et l'humidité ambiante.</p>",
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
        "Le décrassage professionnel des parkings rétablit la lisibilité des marquages, améliore la sécurité des circulations et redonne une image soignée aux espaces souterrains de Créteil.",
      whyUsBullets: [
        "Expérience des parkings cristoliens : secteur Pompadour avec flux routier intense, Pointe du Lac, résidences de la Préfecture.",
        "Autolaveuse professionnelle et haute pression contrôlée pour traiter sols béton, résine et marquages sans détérioration des supports.",
        "Planification adaptée aux contraintes de rotation véhicules et d'accès, interventions matinales ou en journée calme selon disponibilité.",
      ],

      uniqueIntro:
        "<p>Comment expliquer que certains parkings de la Pointe du Lac ou du secteur Pompadour accumulent des traces d'huile, des dépôts noirâtres et des murs salis au point de rendre les <strong>marquages au sol presque invisibles</strong> ? Le va-et-vient quotidien des véhicules, l'impact des axes comme l'<strong>A86</strong> et l'échangeur Pompadour, les rotations de livraison autour de <strong>Créteil Soleil</strong> génèrent une accumulation progressive de poussières grasses, de résidus de pneus et de <strong>taches d'hydrocarbures</strong>.</p>\n<p class=\"mt-4\">Les copropriétaires constatent une dégradation de l'esthétique, les syndics reçoivent des demandes de remise en état, les gestionnaires de parkings d'entreprise cherchent à maintenir un niveau de propreté compatible avec l'image de leurs bâtiments tertiaires. Un parking encrassé donne une impression d'abandon, réduit la visibilité des places et peut même poser des questions de <strong>sécurité</strong> (sols glissants, éclairage insuffisant accentué par la saleté).</p>\n<p class=\"mt-4\">Un décrassage structuré par <strong>autolaveuse</strong> et <strong>haute pression</strong> redonne clarté aux sols, facilite la circulation et rassure les utilisateurs sur la qualité de l'entretien général de la résidence.</p>",

      uniqueDeepDive:
        "<h3>Coordination préalable et organisation par zones</h3>\n<p>Avant toute intervention, nous validons avec le syndic ou le gestionnaire les modalités d'accès (badge, horaires, présence de véhicules à déplacer). Pour les parkings de grande capacité (Préfecture, Créteil Soleil, tours de Mont-Mesly), nous organisons le travail par <strong>zones successives</strong> pour éviter de bloquer l'ensemble des places. Les résidents sont informés des créneaux d'intervention et des éventuelles rotations de stationnement nécessaires.</p>\n\n<h3>Décrassage mécanique et chimique</h3>\n<p class=\"mt-4\">Nous débutons par un balayage mécanique ou manuel pour éliminer gravillons, feuilles et débris. L'autolaveuse brosse le sol béton ou résine tout en aspirant les eaux sales, traitant rapidement les surfaces planes. Les taches d'huile anciennes reçoivent un <strong>dégraissant professionnel</strong> appliqué localement, puis sont rincées à la haute pression réglée pour ne pas endommager les revêtements fragiles. Les rampes, pieds de murs, angles et zones de fort passage (entrées, proximité des ascenseurs) font l'objet d'un <strong>traitement manuel</strong> complémentaire.</p>\n\n<h3>Gestion des eaux et reporting</h3>\n<p class=\"mt-4\">Les eaux de lavage sont aspirées par l'autolaveuse ou dirigées vers les siphons et caniveaux existants. En l'absence d'évacuation adaptée, nous récupérons les effluents pour <strong>évacuation conforme</strong>. À l'issue du passage, le gestionnaire reçoit un <strong>compte-rendu</strong> précisant les surfaces traitées, les éventuelles anomalies constatées (siphon bouché, fissure, marquage effacé) et les recommandations de fréquence pour maintenir la propreté (généralement <strong>un à deux décrassages complets par an</strong> selon l'intensité d'usage).</p>",

      specificChallenges: [
        "Les parkings du secteur Pompadour et de l'A86 subissent un encrassement rapide lié aux particules fines et aux hydrocarbures des axes à fort trafic.",
        "Les rampes étroites et les hauteurs sous plafond réduites dans certaines résidences de Mont-Mesly imposent un matériel compact et une organisation précise.",
        "L'absence de siphons efficaces ou d'évacuation fonctionnelle dans les parkings anciens du Centre ancien nécessite une récupération manuelle des eaux de lavage.",
      ],

      faqAdditions: [
        {
          question:
            "Les parkings situés près de l'échangeur Pompadour sont-ils plus difficiles à nettoyer ?",
          answer:
            "<p>La proximité de l'A86 et de la RN6 génère effectivement des <strong>poussières noires grasses</strong> plus tenaces. Nous adaptons les produits dégraissants et le <strong>temps de contact</strong> avant rinçage. Le résultat reste optimal, mais peut nécessiter un passage supplémentaire sur les zones les plus encrassées. La fréquence d'entretien recommandée est légèrement plus élevée qu'en zone résidentielle classique.</p>",
        },
        {
          question:
            "Faut-il vider entièrement le parking pour permettre le nettoyage ?",
          answer:
            "<p>Non. Nous travaillons par <strong>zones successives</strong>, ce qui permet aux résidents de stationner temporairement dans les secteurs non traités. Pour les petits parkings (moins de 30 places), il est parfois plus simple d'organiser une rotation complète en une seule journée. Nous validons l'organisation la plus adaptée lors de la visite préalable.</p>",
        },
        {
          question:
            "Les taches d'huile anciennes peuvent-elles être totalement éliminées ?",
          answer:
            "<p>Les taches anciennes très incrustées dans le béton poreux peuvent laisser une trace résiduelle malgré le dégraissant et la haute pression. Nous obtenons une <strong>amélioration nette</strong> (80 à 90 % d'élimination visuelle), mais ne garantissons pas une disparition totale si l'huile a pénétré profondément. L'objectif est de retrouver un sol propre et <strong>non glissant</strong>, pas nécessairement un aspect neuf.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des eaux de lavage ?",
          answer:
            "<p>Nous aspirons les eaux sales avec l'autolaveuse ou les dirigeons vers les siphons existants lorsque le réseau le permet. En cas d'absence d'évacuation fonctionnelle, nous utilisons une <strong>cuve de récupération</strong> pour évacuer les effluents de manière conforme. Cette contrainte est identifiée lors du diagnostic préalable et intégrée dans l'organisation de l'intervention.</p>",
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
        "La remise en état d'un balcon encrassé redonne envie de profiter de cet espace extérieur, améliore le confort quotidien et valorise le logement dans les quartiers résidentiels de Créteil.",
      whyUsBullets: [
        "Connaissance des quartiers résidentiels de Créteil : Halage, bords de Marne, Chenevier avec balcons exposés à la végétation.",
        "Produits adaptés aux supports courants (carrelage, béton, dalle) et maîtrise de la pression pour préserver les joints fragiles.",
        "Intervention à domicile organisée avec soin, gestion soigneuse de l'eau pour éviter coulures chez les voisins et respect des plantations existantes.",
      ],

      uniqueIntro:
        '<p>Après quelques mois sans entretien, le balcon devient une zone délaissée : terre séchée dans les angles, joints noircis, traces de pluie, dépôts verts sur les dalles exposées à l\'ombre, feuilles accumulées près du garde-corps. Dans les résidences de Halage, du Chenevier ou des bords de Marne, la proximité de la végétation et du lac amplifie ces salissures. Les occupants renoncent à installer une table, à sortir le matin, à profiter de cet espace qui pourrait pourtant prolonger le salon.</p>\n<p class="mt-4">Les tentatives de nettoyage au seau et à la serpillière donnent un résultat provisoire, mais les joints restent gris, les taches tenaces résistent et l\'eau coule parfois chez le voisin du dessous, créant des tensions dans la copropriété. Le balcon reste un problème reporté, une <strong>gêne permanente</strong> qui pèse sur le quotidien.</p>\n<p class="mt-4">Une intervention professionnelle élimine les <strong>salissures incrustées</strong>, ravive les supports et rend l\'espace de nouveau utilisable. Les habitants retrouvent un balcon propre où poser une chaise, installer des plantes, prendre un café le matin sans marcher dans la saleté.</p>',

      uniqueDeepDive:
        "<h3>Préparation et protection des ouvertures</h3>\n<p>Nous protégeons la porte-fenêtre et les menuiseries avec des bâches pour éviter les projections. Les plantes, le mobilier et les objets sont déplacés ou couverts selon les indications du client. Les gros dépôts (terre, feuilles, résidus de jardinières) sont enlevés manuellement avant tout traitement liquide pour ne pas surcharger l'évacuation et éviter l'obstruction des grilles.</p>\n\n<h3>Nettoyage adapté au support</h3>\n<p class=\"mt-4\">Un produit spécifique au matériau (carrelage, béton, dalle, bois composite) est appliqué sur l'ensemble de la surface, laissé agir quelques minutes, puis brossé manuellement ou mécaniquement selon la rugosité et l'état d'encrassement. Les joints, les angles, le garde-corps et les murs mitoyens reçoivent un traitement au détail. Le rinçage se fait à <strong>pression modérée</strong> pour ne pas endommager les joints ni projeter l'eau sur les façades ou chez les voisins. L'eau est dirigée vers l'évacuation du balcon à l'aide de raclettes ou de chiffons absorbants.</p>\n\n<h3>Séchage et conseils d'entretien</h3>\n<p class=\"mt-4\">Après rinçage, le balcon sèche naturellement en quelques heures selon l'exposition et la météo. Nous recommandons un <strong>balayage régulier</strong> pour éviter l'accumulation de feuilles et de poussières, et un nettoyage léger au moins <strong>deux fois par an</strong> pour maintenir la propreté sans devoir recourir systématiquement à un passage professionnel. Les occupants des quartiers Halage ou Chenevier peuvent ainsi profiter de leur espace extérieur toute l'année sans contrainte.</p>",

      specificChallenges: [
        "La proximité du lac et des bords de Marne dans les quartiers Halage et Chenevier génère des dépôts verts, des boues et une humidité persistante sur les balcons exposés au nord.",
        "Les joints de carrelage très encrassés dans les résidences anciennes du Centre ancien nécessitent un brossage manuel précis et plusieurs rinçages pour retrouver une teinte acceptable.",
        "La gestion de l'eau doit être rigoureuse dans les immeubles collectifs pour éviter les coulures sur les façades ou les balcons inférieurs, source de conflits de voisinage.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à haute pression risque-t-il d'abîmer mon carrelage ou mes joints ?",
          answer:
            "<p>Nous réglons la pression en fonction de la résistance du support. Les carrelages récents et les dalles en béton supportent une <strong>pression modérée</strong> sans problème. Les joints anciens ou friables sont traités avec une pression réduite et un brossage manuel pour éviter tout arrachement. Si un joint est déjà dégradé, nous le signalons avant intervention pour que vous puissiez anticiper une réfection éventuelle.</p>",
        },
        {
          question:
            "L'eau de rinçage va-t-elle couler chez mes voisins du dessous ?",
          answer:
            "<p>Nous dirigeons systématiquement l'eau vers l'évacuation du balcon à l'aide de raclettes et de chiffons absorbants. Si le balcon n'a pas d'évacuation fonctionnelle ou si la pente est mal orientée, nous <strong>récupérons l'eau manuellement</strong> pour éviter tout écoulement sur la façade ou chez les voisins. Cette contrainte est anticipée lors de la prise de rendez-vous.</p>",
        },
        {
          question:
            "Les produits utilisés sont-ils compatibles avec mes plantes et mes animaux ?",
          answer:
            "<p>Nous utilisons des produits nettoyants biodégradables et sans danger après rinçage complet. Les plantes sont déplacées temporairement ou protégées pendant le traitement. Après séchage (généralement <strong>2 à 4 heures</strong> selon l'exposition), le balcon est réutilisable sans risque pour les animaux domestiques. Nous vous précisons les délais exacts lors de l'intervention.</p>",
        },
        {
          question:
            "Combien de temps dois-je attendre avant de remettre mes meubles et de profiter du balcon ?",
          answer:
            "<p>Le séchage complet prend entre <strong>2 et 6 heures</strong> selon l'ensoleillement, la ventilation et la porosité du revêtement. Vous pouvez généralement réinstaller votre mobilier et utiliser le balcon le jour même de l'intervention. Nous vous indiquons le délai précis en fonction des conditions météo et de l'exposition de votre balcon.</p>",
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
        "L'assainissement complet d'un balcon souillé par des fientes de pigeons rétablit un espace sain, désinfecté et utilisable en toute sécurité dans les résidences de Créteil.",
      whyUsBullets: [
        "Connaissance des zones à forte présence aviaire : Pointe du Lac, Mont-Mesly, secteurs verts de Créteil proches du lac.",
        "Protocole rigoureux avec EPI complets, humidification préalable et désinfection virucide/bactéricide selon normes sanitaires strictes.",
        "Évacuation sécurisée des déchets contaminés et conseils de prévention pour limiter le retour des volatiles.",
      ],

      uniqueIntro:
        "<p>Les traces de pas s'accumulent jour après jour sur le balcon : <strong>fientes séchées</strong>, nids dissimulés derrière le garde-corps, odeur âcre qui pénètre dans le logement dès qu'on ouvre la fenêtre. Dans les résidences de la Pointe du Lac ou de Mont-Mesly, proches des espaces verts et du lac, la présence de pigeons devient vite une nuisance chronique. L'occupant n'ose plus sortir, craint les <strong>risques sanitaires</strong>, hésite à évoquer le problème avec le syndic par peur du jugement.</p>\n<p class=\"mt-4\">Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons, parasites) qui se dispersent en poussière fine lorsqu'elles sèchent. Un simple <strong>balayage à sec</strong> aggrave la situation en libérant ces particules dans l'air. Les tentatives de nettoyage domestique échouent face à la quantité, à la corrosion des supports et à l'odeur persistante. Le balcon devient une zone interdite, un problème qui s'aggrave avec le temps.</p>\n<p class=\"mt-4\">Un traitement professionnel sécurisé élimine les fientes, <strong>désinfecte les surfaces en profondeur</strong> et permet de retrouver un balcon utilisable sans risque pour la santé des occupants.</p>",

      uniqueDeepDive:
        '<h3>Sécurité et confinement du chantier</h3>\n<p>Le technicien équipe une <strong>combinaison jetable</strong>, des <strong>gants épais</strong>, un masque respiratoire <strong>FFP2</strong> et des lunettes de protection avant toute intervention. L\'intérieur du logement est isolé par des bâches pour éviter toute dispersion de poussières contaminées. Les fientes sèches sont humidifiées avant ramassage pour limiter la mise en suspension des particules pathogènes dans l\'air.</p>\n\n<h3>Ramassage, nettoyage et désinfection</h3>\n<p class="mt-4">Les fientes, nids et débris sont ramassés manuellement et conditionnés dans des sacs étanches résistants, adaptés aux déchets contaminés. Les surfaces (sol, garde-corps, murs mitoyens, vitrerie) sont nettoyées avec un produit détergent, puis rincées à pression modérée pour éliminer les résidus organiques. Une <strong>désinfection complète</strong> est ensuite appliquée avec un produit <strong>virucide et bactéricide</strong> homologué, laissé agir selon le temps de contact recommandé par le fabricant. Cette étape est indispensable pour <strong>neutraliser les agents pathogènes</strong> résiduels.</p>\n\n<h3>Aération et conseils de prévention</h3>\n<p class="mt-4">Après rinçage final et évacuation des eaux, le balcon est aéré pendant plusieurs heures. Un délai de <strong>24 heures</strong> avant réutilisation est généralement recommandé pour garantir un séchage complet et une dissipation totale des produits. Nous informons l\'occupant sur les solutions de dissuasion possibles (picots, filets) pour limiter le retour des pigeons, notamment dans les secteurs de la Pointe du Lac ou de Mont-Mesly où la pression aviaire est élevée. Les sacs de déchets contaminés sont évacués de manière sécurisée.</p>',

      specificChallenges: [
        "Les secteurs Pointe du Lac et Mont-Mesly, proches du lac et des espaces verts, subissent une pression aviaire récurrente nécessitant des interventions régulières.",
        "L'accès aux balcons en étage dans les tours de Mont-Mesly impose une organisation précise (ascenseurs, badges) et un conditionnement étanche des déchets pour éviter toute contamination des circulations communes.",
        "Les fientes anciennes peuvent corroder peintures, enduits et garde-corps métalliques, nécessitant un signalement au propriétaire pour éventuelles réparations ultérieures.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles vraiment un risque sanitaire ?",
          answer:
            "<p>Oui. Les fientes contiennent des bactéries (salmonelles, E. coli), des champignons (histoplasmose, cryptococcose) et des parasites susceptibles de provoquer infections respiratoires, allergies et maladies digestives. Le simple fait de <strong>balayer à sec</strong> disperse ces agents pathogènes en poussière fine inhalable. C'est pourquoi un nettoyage professionnel avec <strong>désinfection virucide</strong> est indispensable pour neutraliser les risques sanitaires.</p>",
        },
        {
          question:
            "Les produits désinfectants sont-ils dangereux pour mes enfants ou mes animaux après séchage ?",
          answer:
            "<p>Les produits virucides et bactéricides sont appliqués selon les dosages réglementaires et rincés après le temps de contact nécessaire. Après <strong>séchage complet</strong> (généralement 24 heures), le balcon est totalement sûr pour tous les occupants, y compris enfants et animaux domestiques. Nous vous communiquons les délais exacts de réintégration et les éventuelles précautions à respecter.</p>",
        },
        {
          question:
            "Le nettoyage peut-il endommager mon balcon (peinture, béton, garde-corps) ?",
          answer:
            "<p>Les fientes acides peuvent avoir déjà corrodé certaines surfaces (peinture écaillée, rouille sur garde-corps métallique). Nous signalons ces dégradations avant traitement. Le nettoyage lui-même, réalisé à pression modérée avec des produits adaptés, n'aggrave pas l'état des supports. En revanche, les dommages préexistants causés par les fientes nécessitent parfois des réparations ultérieures (peinture, traitement antirouille).</p>",
        },
        {
          question: "Que faites-vous des fientes et des nids récupérés ?",
          answer:
            "<p>Les déchets contaminés sont conditionnés dans des sacs <strong>étanches</strong> résistants et évacués de manière sécurisée. Nous les emportons avec nous à l'issue de l'intervention pour éviter toute contamination des locaux poubelles de la copropriété. Cette évacuation est incluse dans notre prestation et respecte les précautions sanitaires nécessaires.</p>",
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
        "Le rafraîchissement de canapés, tapis et matelas redonne confort et hygiène aux espaces de vie, élimine les odeurs tenaces et améliore le bien-être quotidien des familles cristoliennes.",
      whyUsBullets: [
        "Intervention à domicile dans les quartiers résidentiels de Créteil : Chenevier, bords de Marne, secteurs pavillonnaires et résidences familiales.",
        "Matériel d'injection-extraction adapté aux textiles domestiques (canapés, tapis, matelas) avec réglage précis de pression et température.",
        "Conseils personnalisés pour entretien courant et gestes simples limitant les salissures entre deux passages professionnels.",
      ],

      uniqueIntro:
        "<p>Dans les pavillons de Chenevier ou les appartements des bords de Marne, le canapé du salon accumule les traces du quotidien : miettes, taches de boissons, traces de doigts, poils d'animaux, auréoles d'usage. Le tapis du séjour ternit malgré les aspirations régulières, le matelas de la chambre des enfants garde une odeur persistante malgré les draps changés chaque semaine.</p>\n<p class=\"mt-4\">Les occupants passent l'aspirateur, frottent les taches avec des produits ménagers, aèrent les pièces, mais les salissures incrustées restent visibles et les odeurs reviennent dès que l'humidité augmente. Les invités s'installent sur un canapé grisâtre, les enfants jouent sur un tapis qui ne retrouve jamais sa couleur d'origine, les nuits deviennent moins confortables à cause d'allergies liées aux <strong>acariens</strong> accumulés dans le matelas.</p>\n<p class=\"mt-4\">Un nettoyage professionnel par <strong>injection-extraction</strong> élimine les salissures en profondeur, ravive les couleurs, <strong>neutralise les odeurs</strong> et réduit significativement la présence d'acariens et d'allergènes. Les textiles retrouvent un aspect proche du neuf et redeviennent agréables à utiliser au quotidien.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic textile et pré-traitement ciblé</h3>\n<p>Le technicien examine la nature du tissu (coton, laine, synthétique, velours, microfibre), identifie les taches visibles (vin, café, graisse, urine, encre) et teste la solidité des couleurs sur une <strong>zone discrète</strong>. Les taches tenaces reçoivent un <strong>détachant enzymatique</strong> pour les matières organiques (urine, sang, lait) ou un solvant adapté pour les graisses. Ce pré-traitement est laissé agir quelques minutes avant le nettoyage général.</p>\n\n<h3>Injection-extraction et rinçage</h3>\n<p class=\"mt-4\">La machine projette une solution nettoyante chauffée à température adaptée au textile, puis aspire immédiatement l'eau chargée de salissures. Les passes successives sur les zones très encrassées (assises de canapé, centre du tapis, zones de couchage du matelas) permettent d'extraire un maximum de résidus. L'aspiration puissante limite l'<strong>humidité résiduelle</strong> et accélère le séchage. Les textiles fragiles ou épais (velours, laine épaisse) reçoivent une pression réduite et des passes supplémentaires pour garantir un <strong>rinçage complet</strong> sans saturation.</p>\n\n<h3>Séchage et conseils d'entretien</h3>\n<p class=\"mt-4\">Le canapé, le tapis ou le matelas sèche naturellement en <strong>4 à 8 heures</strong> selon la ventilation de la pièce et l'épaisseur du textile. Nous conseillons d'aérer le logement, d'éviter de réutiliser immédiatement les surfaces traitées et de maintenir un <strong>aspirateur régulier</strong> pour limiter les réaccumulations. Pour les familles avec enfants ou animaux des quartiers pavillonnaires de Chenevier, un nettoyage annuel ou bisannuel suffit généralement à maintenir un niveau d'hygiène correct.</p>",

      specificChallenges: [
        "Les familles avec enfants et animaux dans les pavillons de Chenevier et des bords de Marne génèrent des taches organiques (urine, nourriture) nécessitant un pré-traitement enzymatique ciblé.",
        "Les acariens et allergènes s'accumulent dans les matelas et les tapis des logements peu ventilés, imposant une extraction puissante et un rinçage complet pour réduire les irritations respiratoires.",
        "Le séchage peut être ralenti dans les pièces humides ou mal aérées, nécessitant des consignes précises (fenêtres ouvertes, chauffage modéré) pour éviter toute réhumidification prématurée.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage par injection-extraction élimine-t-il vraiment les acariens et les allergènes ?",
          answer:
            "<p>L'injection d'eau chaude et l'aspiration puissante éliminent une grande partie des acariens vivants, des déjections et des allergènes présents dans les fibres. Le rinçage complet évacue les résidus organiques qui nourrissent les acariens. Ce nettoyage réduit significativement les irritations respiratoires et améliore la qualité de l'air intérieur, mais ne remplace pas un entretien régulier par aspiration et aération.</p>",
        },
        {
          question:
            "Les taches d'urine anciennes et les odeurs tenaces peuvent-elles disparaître totalement ?",
          answer:
            "<p>Les taches d'urine récentes partent généralement très bien avec un détachant enzymatique. Les taches anciennes très incrustées peuvent laisser une trace résiduelle légère selon la profondeur de pénétration dans la mousse du matelas ou du canapé. Les odeurs sont neutralisées par l'extraction complète des résidus organiques et le rinçage. Dans les cas extrêmes, une seconde intervention ciblée peut être nécessaire.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser mon canapé ou mon tapis ?",
          answer:
            "<p>Le séchage prend généralement entre <strong>4 et 8 heures</strong> selon la ventilation, l'épaisseur du textile et l'humidité ambiante. Nous vous recommandons d'attendre 6 heures minimum avant de vous asseoir sur le canapé ou de marcher sur le tapis. Pour un matelas, il est préférable d'attendre une nuit complète avant de remettre les draps et de dormir dessus.</p>",
        },
        {
          question:
            "Que dois-je préparer avant votre arrivée pour le nettoyage à domicile ?",
          answer:
            "<p>Dégagez l'accès au canapé (éloignez tables basses et objets encombrants), roulez ou déplacez les petits tapis vers une zone dégagée, retirez draps et couvertures des matelas. Si vous avez des animaux, isolez-les temporairement dans une autre pièce. Nous nous occupons du reste : protection des sols, aspiration préalable, pré-traitement, nettoyage et conseils post-intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Remise en état complète d’appartements et de maisons à Créteil, avant état des lieux ou après déménagement, avec un périmètre défini en amont et des méthodes adaptées à chaque surface.",

      whyUsBullets: [
        "Maîtrise des typologies cristoliennes : tours et collectifs (Mont-Mesly, Front de Lac), pavillons du Port/Ormetteau.",
        "Méthode par zones : sols, cuisine, salle de bain, points de contact et vitrages accessibles, finitions soignées.",
        "Organisation terrain en zone dense : gestion digicodes/gardiens, stationnement et créneaux compatibles copropriétés.",
      ],

      uniqueIntro:
        '<p>À Créteil, la densité et la diversité du bâti imposent une remise en état rigoureuse : appartements des secteurs Front de Lac, L’Échat ou Les Choux, pavillons plus calmes vers le Port/Ormetteau, logements récents côté Pointe du Lac. Dans ces configurations, un déménagement, une mise en location ou une restitution de clés exige une propreté homogène, sans zone « oubliée ».</p>\n<p class="mt-4">La ville vit au rythme de ses pôles et de ses transports : métro ligne 8, TVM, université (UPEC), Préfecture et Créteil Soleil. Cette intensité se retrouve dans les logements : poussière de voirie, traces sur les sols d’entrée, cuisine sollicitée, et pièces d’eau où le calcaire marque vite. L’objectif n’est pas d’en faire trop, mais de traiter ce qui compte vraiment pour un rendu net et présentable.</p>\n<p class="mt-4">Pour un <strong>nettoyage appartement maison Créteil</strong>, Klinova intervient avec un protocole clair : <strong>le périmètre de l’intervention est toujours défini avant l’intervention.</strong> Nous organisons l’accès (digicodes, gardiens, ascenseurs), puis nous déroulons une remise en état par zones, avec un contrôle final avant remise des clés ou réoccupation.</p>',

      uniqueDeepDive:
        "<h3>Diagnostic et préparation</h3>\n<p>Nous évaluons l’état réel du logement (logement vide, traces d’usage, remise en état du logement avant restitution), les revêtements (PVC/lino fréquent, carrelage, parquet stratifié), et les contraintes d’immeuble : étages, ascenseur, règles de copropriété, accès Vigik et créneaux. Cette étape permet d’établir un ordre d’intervention efficace, sans perte de temps sur site.</p>\n\n<h3>Grand ménage structuré</h3>\n<p>Nous réalisons un dépoussiérage complet (plinthes, menuiseries, surfaces accessibles), puis nous traitons les sols selon leur nature. En cuisine : <strong>dégraissage cuisine</strong> des surfaces accessibles (plans, crédences, façades selon l’état). En salle de bain : <strong>détartrage sanitaires</strong> adapté (robinetterie, parois, zones critiques), puis finitions sur les joints et les surfaces. Les points de contact (poignées, interrupteurs) et les vitrages accessibles sont intégrés pour un rendu cohérent, pièce par pièce.</p>\n\n<h3>Contrôle final et restitution</h3>\n<p>Nous terminons par un contrôle visuel, une aération du logement et, si besoin, un retour rapide sur un détail. L’objectif est de sécuriser un <strong>nettoyage après déménagement</strong> ou un <strong>nettoyage avant état des lieux</strong> dans des délais réalistes, avec un rendu propre et lisible pour le bailleur, l’agence ou l’occupant.</p>",

      specificChallenges: [
        "Stationnement souvent saturé (Préfecture, Université, Créteil Soleil) : logistique à anticiper pour tenir le créneau.",
        "Accès encadrés en copropriétés : digicodes, Vigik, gardiens, horaires et ascenseurs parfois contraints.",
        "Bâti très varié : PVC/lino en collectifs, carrelage et parquet stratifié en récent, méthodes à adapter sans excès d’eau.",
        "Vitrages importants sur certains immeubles (Front de Lac) : traitement des vitres accessibles pour un rendu net.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous rapidement pour une remise en état avant état des lieux à Créteil (94000) ?",
          answer:
            "<p>Oui, selon la disponibilité et l’accessibilité du logement. Créteil étant une zone dense, nous calons le créneau en fonction des contraintes d’accès (Vigik, gardien, ascenseur) et du stationnement pour livrer un logement prêt à être présenté sans stress inutile.</p>",
        },
        {
          question:
            "Quelle différence entre un nettoyage standard et une remise en état du logement avant remise des clés ?",
          answer:
            "<p>Une remise en état vise un rendu homogène : finitions visibles, cuisine et sanitaires traités en priorité, sols et plinthes repris, points de contact et vitrages accessibles inclus. C’est une intervention plus structurée qu’un simple entretien, pensée pour une présentation ou une réinstallation.</p>",
        },
        {
          question:
            "Comment traitez-vous les cuisines très sollicitées en appartement (graisses, traces) ?",
          answer:
            "<p>Nous procédons par étapes : dépoussiérage, puis <strong>dégraissage cuisine</strong> ciblé sur les surfaces accessibles, avec des produits compatibles. L’objectif est d’obtenir un rendu propre et uniforme sans abîmer les façades, plans ou crédences.</p>",
        },
        {
          question:
            "Proposez-vous des produits plus doux ou éco-responsables si on le souhaite ?",
          answer:
            "<p>Oui, sur demande. Nous pouvons privilégier des produits plus doux ou biodégradables lorsque cela est compatible avec les surfaces et l’état du logement, tout en conservant une efficacité suffisante pour une remise en état.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
