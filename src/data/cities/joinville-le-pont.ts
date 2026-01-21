import type { City } from "~/types/geo";

const city: City = {
  name: "Joinville-le-Pont",
  slug: "joinville-le-pont",
  postalCodes: ["94340"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription:
    "Commune du Val-de-Marne de 20 000 habitants desservie par le RER A, Joinville-le-Pont se structure autour des rives de la Marne et du canal. Les quartiers résidentiels comme Polangis et l'habitat collectif du secteur Paris génèrent des besoins réguliers d'entretien des surfaces, accentués par l'humidité fluviale et la proximité de la Nationale 4.",

  hubIntro:
    '<p>Klinova intervient à Joinville-le-Pont auprès des copropriétés, des particuliers et des gestionnaires immobiliers pour l\'entretien des surfaces et la maintenance des équipements collectifs. Nous connaissons les spécificités locales : l\'humidité des bords de Marne qui favorise les dépôts verts sur les balcons, les flux autour de la gare RER A, et les contraintes d\'accès dans les quartiers pavillonnaires comme Polangis ou l\'Île Fanac.</p>\n' +
    '\n' +
    '<p>Nos équipes adaptent leurs méthodes aux différentes typologies de bâti, des immeubles collectifs de Vautier-Leclerc aux maisons des bords de Marne, en passant par les copropriétés de l\'axe rue de Paris. Chaque intervention est organisée en fonction des contraintes de stationnement autour de la N4 et de l\'Avenue des Canadiens, et documentée par un compte-rendu détaillé transmis au syndic ou au propriétaire.</p>\n' +
    '\n' +
    '<ul>\n' +
    '  <li><strong>Domaines d\'intervention à Joinville-le-Pont :</strong></li>\n' +
    '  <li><strong>Entretien des surfaces textiles en copropriété</strong> : nettoyage des moquettes dans les halls, escaliers et paliers des immeubles du quartier Paris et de Vautier-Leclerc, avec machines d\'injection-extraction adaptées aux volumes de passage quotidiens et aux contraintes d\'accès.</li>\n' +
    '  <li><strong>Décrassage des parkings souterrains</strong> : traitement des sols béton et résine, élimination des taches d\'hydrocarbures et remise en lisibilité des marquages dans les parkings des copropriétés du quartier Paris et de Vautier-Leclerc, avec gestion rigoureuse des eaux de lavage.</li>\n' +
    '  <li><strong>Remise en état des balcons et terrasses</strong> : nettoyage professionnel pour les particuliers de Polangis, des bords de Marne et de l\'Île Fanac, avec traitement adapté aux dépôts verts liés à l\'humidité fluviale et maîtrise de l\'écoulement des eaux.</li>\n' +
    '  <li><strong>Rafraîchissement des textiles domestiques</strong> : intervention à domicile pour canapés, tapis et matelas dans les quartiers résidentiels, avec protocoles d\'injection-extraction et conseils d\'entretien adaptés aux familles.</li>\n' +
    '</ul>',

  citySpecificChallenges: [
    "Humidité persistante et dépôts verts sur les balcons et terrasses des quartiers Polangis, Marne et Île Fanac en raison de la proximité immédiate des bords de Marne et du canal, générant mousses et traces verdâtres sur les supports poreux.",
    "Accumulation de feuilles, boues et pollens sur les surfaces extérieures le long des quais de la Marne et du quartier Europe (canal, écluse, bassins), nécessitant un nettoyage saisonnier régulier.",
    "Encrassement accéléré des halls et parkings des copropriétés du quartier Paris et de l'axe Avenue des Canadiens en raison de la proximité de la Nationale 4 et des axes A86-A4, générant des particules fines et des poussières routières.",
    "Contraintes de circulation et de stationnement autour de la gare RER A et de l'Avenue des Canadiens imposant une planification précise des interventions pour limiter la gêne et optimiser les temps d'accès.",
  ],

  districts: ["Polangis", "Palissy", "Île Fanac", "Marne", "Paris", "Vautier-Leclerc", "Europe"],
  
nearbyCities: [
        "nogent-sur-marne",
        "saint-maur-des-fosses",
        "maisons-alfort",
        "fontenay-sous-bois",
        "le-perreux-sur-marne",
        "vincennes"
      ],


  landmarks: [
    "Mairie de Joinville-le-Pont",
    "Gare RER A Joinville-le-Pont",
    "Bords de Marne",
    "Canal et écluse de Joinville (quartier Europe)",
    "Avenue des Canadiens (N4)",
    "Parc du Parangon",
  ],

  faq: [
    {
      question:
        "Comment gérez-vous les interventions dans les secteurs où l'accès est difficile, comme autour de la gare RER A ou le long de l'Avenue des Canadiens ?",
      answer:
        '<p>Les abords de la gare RER A de Joinville-le-Pont et l\'axe de la Nationale 4 (Avenue des Canadiens) présentent des <strong>contraintes de stationnement</strong> et de <strong>circulation dense</strong> aux heures de pointe. Nous planifions nos interventions en tenant compte de ces paramètres : passages matinaux avant 8h ou en milieu de journée après le pic de flux, repérage préalable des zones de déchargement et validation des accès avec le syndic ou le propriétaire. Pour les quartiers pavillonnaires comme Polangis ou l\'Île Fanac, nous adaptons notre matériel aux contraintes d\'accès spécifiques.</p>',
    },
    {
      question: "Vous déplacez-vous gratuitement pour établir un devis à Joinville-le-Pont ?",
      answer:
        "<p>Oui. Nous nous déplaçons <strong>sans frais</strong> dans tous les quartiers de Joinville-le-Pont, de Polangis au quartier Europe, pour établir un diagnostic précis. Cette visite permet d'évaluer la surface à traiter, le type de revêtement, les contraintes d'accès (badges, digicodes, accès pavillonnaire) et les éventuelles spécificités techniques liées à l'humidité des bords de Marne. Vous recevez ensuite une <strong>proposition détaillée</strong>, sans engagement, tenant compte de la configuration réelle du site.</p>",
    },
    {
      question: "Intervenez-vous rapidement en cas d'urgence (sinistre, fin de chantier) ?",
      answer:
        "<p>Oui. Nous mobilisons nos équipes pour des <strong>interventions urgentes</strong> à Joinville-le-Pont, notamment après un dégât des eaux, une pollution accidentelle ou une livraison de chantier nécessitant une remise en état rapide. Nous établissons un diagnostic par téléphone, confirmons la faisabilité technique et planifions le passage sous 24 à 48 heures selon disponibilité. Le matériel déployé (autolaveuse, injection-extraction, haute pression) est adapté à la nature de l'urgence et aux surfaces concernées.</p>",
    },
    {
      question: "Proposez-vous des contrats d'entretien régulier pour les copropriétés ?",
      answer:
        "<p>Oui. Nous mettons en place des <strong>contrats d'entretien annuels</strong> pour les syndics et gestionnaires souhaitant planifier les interventions de manière préventive (nettoyage de moquettes tous les 12 à 18 mois, décrassage de parkings semestriel ou annuel). Chaque passage fait l'objet d'un <strong>compte-rendu écrit</strong> transmis au syndic, détaillant les surfaces traitées, les produits utilisés et les éventuelles observations techniques. Cette approche facilite la gestion budgétaire et évite l'accumulation de salissures.</p>",
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
        "Le nettoyage professionnel des moquettes redonne aux parties communes une propreté visible, améliore le confort quotidien des résidents et valorise l'image des copropriétés de Joinville-le-Pont.",
      whyUsBullets: [
        "Connaissance des typologies de Joinville-le-Pont : immeubles du quartier Paris, collectifs de Vautier-Leclerc, copropriétés proches de la gare RER A.",
        "Matériel d'injection-extraction adapté aux moquettes de parties communes avec extraction puissante pour séchage rapide et remise en circulation.",
        "Organisation coordonnée avec gardiens et syndics pour interventions matinales ou en journée calme, sans perturber la vie de l'immeuble.",
      ],

      uniqueIntro:
        "<p>Dans les halls des immeubles du quartier Paris ou des copropriétés de Vautier-Leclerc, les moquettes accumulent jour après jour les traces du passage : semelles boueuses après la pluie, poussières fines remontées depuis l'Avenue des Canadiens, marques grises devant les ascenseurs et les boîtes aux lettres. Les résidents qui empruntent quotidiennement le RER A à la gare de Joinville-le-Pont ramènent avec eux un flux de salissures qui s'incruste progressivement dans les fibres.</p>\n" +
        '\n' +
        '<p class="mt-4">Au bout de quelques mois, les moquettes perdent leur éclat d\'origine. Les zones de passage deviennent ternes, les taches résistent à l\'aspirateur, et une impression générale de négligence s\'installe malgré les efforts du gardien ou du personnel d\'entretien. Les copropriétaires posent des questions lors des assemblées générales, les visiteurs remarquent immédiatement l\'état des parties communes, et le syndic cherche des solutions pour éviter un remplacement prématuré qui pèserait lourdement sur le budget.</p>\n' +
        '\n' +
        '<p class="mt-4">Un nettoyage professionnel par injection-extraction élimine les salissures incrustées, ravive les couleurs et redonne aux halls et escaliers un aspect accueillant qui rassure les occupants et valorise le patrimoine immobilier.</p>',

      uniqueDeepDive:
        "<h3>Diagnostic et préparation adaptée au bâti</h3>\n" +
        "<p>Le technicien examine la nature de la moquette (bouclée, velours, synthétique), repère les zones de fort trafic (entrées principales, paliers, marches d'escalier) et identifie les taches spécifiques. Dans les immeubles de Vautier-Leclerc ou du quartier Paris, il évalue les contraintes d'accès (badges, digicodes, présence d'un gardien) et organise le passage par cage d'escalier ou par étage pour limiter la gêne des résidents.</p>\n" +
        "\n" +
        "<h3>Nettoyage par injection-extraction en profondeur</h3>\n" +
        "<p>La machine projette une solution nettoyante chauffée qui décolle les salissures incrustées, puis aspire immédiatement l'eau chargée de résidus. Les zones de fort passage (devant les ascenseurs, les entrées, les marches) reçoivent plusieurs passes successives pour garantir un résultat homogène. Les angles, bas de murs et contremarches sont traités manuellement pour éviter toute zone oubliée. L'extraction puissante limite l'humidité résiduelle et réduit les délais de séchage à quelques heures selon la ventilation naturelle des halls.</p>\n" +
        "\n" +
        "<h3>Recommandations pour maintenir la propreté</h3>\n" +
        "<p>Après vérification du résultat, le technicien transmet au syndic un compte-rendu précisant les surfaces traitées et recommandant une fréquence d'entretien adaptée. Pour les copropriétés proches de la gare RER A ou des axes routiers, un nettoyage tous les 12 à 18 mois évite l'accumulation excessive et préserve l'apparence des parties communes. Un simple aspirateur régulier entre deux passages professionnels prolonge significativement la durée de vie du revêtement.</p>",

      specificChallenges: [
        "Les moquettes des halls situés près de la gare RER A de Joinville-le-Pont subissent un encrassement accéléré lié aux flux piétons quotidiens massifs.",
        "Les particules fines remontées depuis la Nationale 4 et l'Avenue des Canadiens s'incrustent dans les fibres et nécessitent une extraction puissante pour un résultat durable.",
        "Les marches d'escalier dans les immeubles du quartier Paris présentent des usures localisées demandant un traitement ciblé et plusieurs passes successives.",
      ],

      faqAdditions: [
        {
          question: "Les moquettes des copropriétés proches de la gare RER A nécessitent-elles un entretien plus fréquent ?",
          answer:
            "<p>Les copropriétés situées à proximité immédiate de la gare RER A de Joinville-le-Pont subissent effectivement un flux piéton quotidien important qui accélère l'encrassement des halls et des paliers. Nous recommandons généralement un nettoyage tous les 12 mois au lieu de 18 pour ces immeubles, et nous adaptons le nombre de passes d'extraction sur les zones de passage intense pour compenser cette usure accrue.</p>",
        },
        {
          question:
            "Travaillez-vous dans les petites copropriétés du quartier Palissy comme dans les immeubles plus denses de Vautier-Leclerc ?",
          answer:
            "<p>Oui. Nous intervenons aussi bien dans les cages d'escalier de petites copropriétés que dans les halls vitrés des immeubles collectifs. Le matériel est dimensionné selon la surface et les contraintes d'accès (escaliers étroits, absence d'ascenseur, badges). Chaque intervention fait l'objet d'un diagnostic préalable pour adapter la méthode et le temps nécessaire à la configuration réelle du bâtiment.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant que les résidents puissent circuler normalement dans les parties communes ?",
          answer:
            "<p>La circulation peut généralement reprendre dans les 2 à 4 heures selon la ventilation naturelle des halls et l'humidité ambiante. Nous balisons les zones traitées pendant le séchage et communiquons les délais précis au gardien ou au syndic. Dans les immeubles bien ventilés du quartier Paris ou de Vautier-Leclerc, le séchage est souvent plus rapide grâce aux courants d'air naturels.</p>",
        },
        {
          question: "Utilisez-vous des produits qui pourraient gêner les résidents allergiques ou sensibles aux odeurs ?",
          answer:
            "<p>Nous utilisons des produits nettoyants professionnels à faible émission de composés organiques volatils, conçus pour les espaces collectifs fréquentés. Après rinçage complet par extraction, les résidus chimiques sont évacués avec l'eau sale. Une légère odeur neutre peut persister pendant quelques heures, le temps du séchage complet, mais elle disparaît naturellement avec la ventilation sans nécessiter d'aération forcée prolongée.</p>",
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
        "Le décrassage des parkings souterrains améliore la sécurité des circulations, limite l'encrassement lié aux axes routiers et redonne une image soignée aux copropriétés de Joinville-le-Pont.",
      whyUsBullets: [
        "Connaissance des parkings de Joinville-le-Pont : quartier Paris, Vautier-Leclerc avec encrassement lié à la proximité de la N4.",
        "Autolaveuse professionnelle et haute pression adaptées aux sols béton et résine, avec gestion rigoureuse des eaux de lavage.",
        "Organisation par zones et coordination avec le syndic pour limiter la gêne des résidents et gérer les rotations de stationnement.",
      ],

      uniqueIntro:
        "<p>Les traces d'huile, les dépôts noirâtres et les murs salis s'accumulent dans les parkings souterrains du quartier Paris ou de Vautier-Leclerc, sous l'effet du va-et-vient quotidien des véhicules et des poussières venues de la Nationale 4 et de l'Avenue des Canadiens. La rotation autour de la gare RER A accentue la fréquence de passage et accélère l'encrassement des zones d'entrée, des rampes et des places proches des circulations principales.</p>\n" +
        '\n' +
        '<p class="mt-4">Les tentatives de nettoyage avec des moyens domestiques déplacent temporairement la crasse sans traiter l\'encrassement en profondeur. Les taches d\'hydrocarbures résistent, les sols deviennent glissants par temps humide, et la lisibilité des marquages se dégrade, ce qui alimente les remarques en assemblée générale et les inquiétudes sur la sécurité des circulations.</p>\n' +
        '\n' +
        '<p class="mt-4">Un décrassage structuré par autolaveuse et haute pression contrôlée élimine les dépôts incrustés, ravive les revêtements et rétablit un environnement propre et rassurant pour les usagers.</p>',

      uniqueDeepDive:
        "<h3>Coordination préalable et organisation par secteurs</h3>\n" +
        "<p>Avant toute intervention, nous validons avec le syndic ou le gestionnaire les modalités d'accès (badge, horaires, présence de véhicules à déplacer) et établissons un planning de passage par zones. Pour les parkings de grande capacité du quartier Paris ou de Vautier-Leclerc, nous organisons le travail par secteurs successifs pour permettre aux résidents de stationner temporairement dans les zones non traitées. Les occupants sont informés des créneaux d'intervention par affichage ou message du syndic.</p>\n" +
        "\n" +
        "<h3>Décrassage mécanique et traitement ciblé des taches</h3>\n" +
        "<p>Nous débutons par un balayage mécanique, puis l'autolaveuse brosse le sol béton ou résine tout en aspirant les eaux sales. Les taches d'huile anciennes reçoivent un dégraissant professionnel appliqué localement, laissé agir, puis rincé à la haute pression réglée. Les rampes, pieds de murs, angles et zones de fort passage sont traités manuellement en complément. La rotation des véhicules se fait progressivement, zone par zone, pour minimiser la gêne.</p>\n" +
        "\n" +
        "<h3>Compte-rendu et recommandations d'entretien</h3>\n" +
        "<p>À l'issue du passage, le gestionnaire reçoit un compte-rendu précisant les surfaces traitées, les éventuelles anomalies constatées et la fréquence recommandée pour maintenir la propreté (généralement un à deux décrassages complets par an selon l'intensité d'usage et la proximité des axes routiers).</p>",

      specificChallenges: [
        "Les parkings situés à proximité de l'Avenue des Canadiens et de la Nationale 4 subissent un encrassement rapide par poussières noires grasses nécessitant des dégraissants renforcés.",
        "L'organisation par zones successives impose une coordination précise avec le syndic pour informer les résidents et gérer les rotations de stationnement.",
        "L'absence de siphons fonctionnels ou d'évacuation efficace dans certains parkings anciens nécessite une récupération manuelle des eaux de lavage pour évacuation conforme.",
      ],

      faqAdditions: [
        {
          question: "Comment organisez-vous le nettoyage pour que les résidents puissent continuer à stationner ?",
          answer:
            "<p>Nous travaillons par zones successives : pendant que nous traitons le fond du parking, les résidents peuvent stationner près de l'entrée, puis nous inversons. Pour les petits parkings (moins de 30 places), il est parfois plus simple d'organiser une rotation complète en une seule matinée. Nous validons l'organisation la plus adaptée avec le syndic lors de la visite préalable et communiquons le planning aux résidents par affichage dans les parties communes.</p>",
        },
        {
          question:
            "Les parkings proches de la gare RER A et de l'Avenue des Canadiens nécessitent-ils un entretien particulier ?",
          answer:
            "<p>Oui. La proximité de la Nationale 4 et de la gare génère des poussières routières et un flux de véhicules quotidien qui accélère l'encrassement. Nous adaptons les produits dégraissants et recommandons généralement une fréquence d'entretien légèrement plus élevée (tous les 6 à 12 mois au lieu d'une fois par an) pour éviter que les salissures ne s'incrustent durablement dans les pores du béton.</p>",
        },
        {
          question: "Les taches d'huile très anciennes peuvent-elles être complètement éliminées ?",
          answer:
            "<p>Les taches anciennes très incrustées dans le béton poreux peuvent laisser une trace résiduelle malgré le dégraissant professionnel et la haute pression. Nous obtenons généralement une amélioration nette (80 à 90 % d'élimination visuelle), mais ne garantissons pas une disparition totale si l'huile a pénétré profondément. L'objectif est de retrouver un sol propre, non glissant et visuellement acceptable pour les copropriétaires.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux de lavage dans les parkings du quartier Paris ou de Vautier-Leclerc ?",
          answer:
            "<p>Nous aspirons les eaux sales avec l'autolaveuse ou les dirigeons vers les siphons existants lorsque le réseau le permet. Si les évacuations sont absentes ou obstruées, nous utilisons une cuve de récupération pour évacuer les effluents de manière conforme. Cette contrainte technique est systématiquement identifiée lors du diagnostic préalable et intégrée dans le devis et l'organisation de l'intervention.</p>",
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
        "Le nettoyage professionnel des balcons élimine les dépôts verts liés à l'humidité fluviale, préserve les supports et redonne un espace extérieur propre et fonctionnel à Joinville-le-Pont.",
      whyUsBullets: [
        "Interventions maîtrisées sur balcons et terrasses dans les quartiers Polangis, Marne et Île Fanac exposés à l'humidité des bords de Marne.",
        "Produits et méthodes adaptés aux supports (carrelage, béton, dalle composite) avec pression modérée pour préserver les joints.",
        "Gestion rigoureuse de l'eau pour éviter les écoulements chez les voisins et le long des façades.",
      ],

      uniqueIntro:
        "<p>Après un hiver humide au bord de la Marne, le balcon de la maison de Polangis ou de la résidence du quartier Marne devient une zone délaissée : dépôts verts dans les angles, joints noircis, traces de pluie séchée, feuilles accumulées le long du garde-corps. L'humidité fluviale favorise le développement de mousses sur les dalles exposées à l'ombre, et la terre remontée des berges se mélange aux pollens pour former une croûte grisâtre difficile à éliminer.</p>\n" +
        '\n' +
        '<p class="mt-4">Les tentatives de nettoyage au seau et à la brosse donnent un résultat provisoire, mais les joints restent gris, les taches tenaces résistent, et l\'eau coule parfois chez le voisin du dessous ou le long de la façade, créant des tensions dans la copropriété ou avec le voisinage pavillonnaire.</p>\n' +
        '\n' +
        '<p class="mt-4">Une intervention professionnelle élimine les salissures incrustées, ravive les supports et rend l\'espace de nouveau utilisable.</p>',

      uniqueDeepDive:
        "<h3>Préparation et protection des abords</h3>\n" +
        "<p>Nous protégeons la porte-fenêtre et les menuiseries avec des bâches pour éviter les projections. Les plantes, le mobilier et les objets sont déplacés ou couverts selon les indications du client. Les gros dépôts sont enlevés manuellement avant tout traitement liquide pour ne pas surcharger l'évacuation.</p>\n" +
        "\n" +
        "<h3>Nettoyage adapté aux supports et à l'humidité locale</h3>\n" +
        "<p>Un produit spécifique au matériau est appliqué, laissé agir, puis brossé selon la rugosité. Les dépôts verts reçoivent un traitement anti-mousse adapté. Les joints, les angles, le garde-corps et les murs mitoyens sont traités au détail. Le rinçage se fait à pression modérée et l'eau est dirigée vers l'évacuation du balcon à l'aide de raclettes ou de chiffons absorbants.</p>\n" +
        "\n" +
        "<h3>Conseils pour limiter les réaccumulations</h3>\n" +
        "<p>Après séchage naturel, nous recommandons un balayage régulier et un nettoyage léger au moins deux fois par an (printemps et automne) pour maintenir la propreté.</p>",

      specificChallenges: [
        "La proximité immédiate des bords de Marne dans les quartiers Polangis, Marne et Île Fanac génère des dépôts verts, des mousses et une humidité persistante sur les balcons exposés au nord ou à l'ombre.",
        "Les joints de carrelage fragilisés par l'humidité fluviale nécessitent un brossage manuel précis et une pression réduite pour éviter tout arrachement.",
        "La gestion de l'eau doit être rigoureuse pour éviter les écoulements vers les étages inférieurs ou le long des façades, source potentielle de conflits de voisinage.",
      ],

      faqAdditions: [
        {
          question:
            "Les balcons proches des bords de Marne nécessitent-ils un traitement particulier contre les dépôts verts ?",
          answer:
            "<p>Oui. L'humidité fluviale et l'ombre favorisent le développement de mousses et de dépôts verts sur les supports poreux. Nous utilisons un produit anti-mousse adapté, laissé agir suffisamment longtemps pour décoller les dépôts, puis rincé à pression modérée. Les balcons exposés au nord dans les quartiers Polangis ou Marne peuvent nécessiter un traitement deux fois par an (printemps et automne) pour éviter les réaccumulations rapides.</p>",
        },
        {
          question: "Comment évitez-vous que l'eau de rinçage ne coule chez mes voisins ou le long de la façade ?",
          answer:
            "<p>Nous dirigeons systématiquement l'eau vers l'évacuation du balcon à l'aide de raclettes et de chiffons absorbants. Si le balcon n'a pas d'évacuation fonctionnelle ou si la pente est mal orientée, nous récupérons l'eau manuellement pour éviter tout écoulement.</p>",
        },
        {
          question: "Les produits utilisés sont-ils compatibles avec mes plantes installées sur le balcon ?",
          answer:
            "<p>Nous utilisons des produits nettoyants et anti-mousses biodégradables, sans danger après rinçage complet. Les plantes sont déplacées temporairement ou protégées pendant le traitement. Après séchage, le balcon est réutilisable.</p>",
        },
        {
          question: "Combien de temps dois-je attendre avant de réinstaller mes meubles et de profiter du balcon ?",
          answer:
            "<p>Le séchage complet prend entre 2 et 6 heures selon l'ensoleillement, la ventilation et la porosité du revêtement. Vous pouvez généralement réinstaller votre mobilier et utiliser le balcon le jour même de l'intervention.</p>",
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
        "L'assainissement sécurisé des balcons souillés par des fientes de pigeons élimine les risques sanitaires, neutralise les odeurs et rétablit un espace utilisable à Joinville-le-Pont.",
      whyUsBullets: [
        "Protocole sécurisé avec EPI complets, humidification préalable et confinement pour éviter la dispersion de poussières contaminées.",
        "Désinfection virucide et bactéricide homologuée après nettoyage, avec temps de contact respecté.",
        "Évacuation sécurisée des déchets contaminés et conseils de prévention (picots, filets).",
      ],

      uniqueIntro:
        "<p>Les fientes s'accumulent jour après jour sur le balcon : couches séchées qui blanchissent les dalles, nids dissimulés derrière le garde-corps, odeur âcre qui pénètre dans le logement dès qu'on entrouvre la fenêtre. La présence de volatiles près du canal, des quais de la Marne ou des toits des immeubles collectifs devient vite une nuisance chronique que l'occupant n'ose pas toujours évoquer avec le syndic par peur du jugement.</p>\n" +
        '\n' +
        '<p class="mt-4">Si rien n\'est fait, les conséquences s\'aggravent. Les fientes contiennent des agents pathogènes (bactéries, champignons, parasites) qui se dispersent en poussière fine lorsqu\'elles sèchent. Un simple balayage à sec aggrave la situation en libérant ces particules contaminées dans l\'air. L\'odeur imprègne les textiles intérieurs (rideaux, canapé), les supports métalliques du garde-corps commencent à rouiller sous l\'effet acide des fientes, et le balcon devient une zone interdite qui pèse sur le confort quotidien et la valeur du logement.</p>\n' +
        '\n' +
        '<p class="mt-4">Un traitement professionnel sécurisé avec équipements de protection individuelle et désinfection virucide élimine les fientes, neutralise les agents pathogènes et permet de retrouver un balcon utilisable sans risque pour la santé des occupants.</p>',

      uniqueDeepDive:
        "<h3>Sécurité sanitaire et confinement du chantier</h3>\n" +
        "<p>Le technicien équipe une combinaison jetable, des gants épais, un masque respiratoire FFP2 et des lunettes de protection avant toute approche du balcon souillé. L'intérieur du logement est isolé par des bâches fixées au niveau de la porte-fenêtre pour éviter toute dispersion de poussières contaminées vers les pièces habitées. Les fientes sèches sont humidifiées avant ramassage pour limiter la mise en suspension des particules pathogènes dans l'air.</p>\n" +
        "\n" +
        "<h3>Ramassage sécurisé et désinfection virucide</h3>\n" +
        "<p>Les fientes, nids et débris sont ramassés manuellement et conditionnés dans des sacs étanches résistants adaptés aux déchets biologiques contaminés. Les surfaces (sol, garde-corps, murs mitoyens, vitrerie) sont nettoyées avec un produit détergent, puis rincées à pression modérée. Une désinfection complète est ensuite appliquée avec un produit virucide et bactéricide homologué, laissé agir selon le temps de contact recommandé par le fabricant. Cette étape est indispensable pour neutraliser les agents pathogènes résiduels (salmonelles, cryptococcose, histoplasmose).</p>\n" +
        "\n" +
        "<h3>Aération et conseils de prévention</h3>\n" +
        "<p>Après rinçage final et évacuation des eaux, le balcon est aéré pendant plusieurs heures. Un délai de 24 heures avant réutilisation est généralement recommandé pour garantir un séchage complet et une dissipation totale des produits désinfectants. Les sacs de déchets contaminés sont évacués immédiatement par nos équipes. Nous informons l'occupant sur les solutions de dissuasion possibles (picots anti-pigeons, filets) pour limiter le retour des volatiles.</p>",

      specificChallenges: [
        "Les secteurs proches des bords de Marne et du canal subissent une pression aviaire liée à la présence d'eau et de végétation, nécessitant parfois des interventions régulières.",
        "L'accès aux balcons en étage dans les immeubles collectifs impose une organisation précise (ascenseurs, badges) et un conditionnement étanche des déchets pour éviter toute contamination des circulations communes.",
        "Les fientes anciennes peuvent corroder les peintures, enduits et garde-corps métalliques, nécessitant un signalement au propriétaire pour éventuelles réparations ultérieures.",
      ],

      faqAdditions: [
        {
          question: "Les fientes de pigeons représentent-elles vraiment un danger sanitaire justifiant une intervention professionnelle ?",
          answer:
            "<p>Oui. Les fientes contiennent des bactéries, des champignons et des parasites susceptibles de provoquer infections respiratoires, allergies sévères et maladies digestives. Le simple fait de balayer à sec disperse ces agents pathogènes en poussière fine inhalable. Un nettoyage professionnel avec désinfection virucide est indispensable pour neutraliser ces risques sanitaires.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des fientes et des nids récupérés ?",
          answer:
            "<p>Les déchets contaminés sont conditionnés dans des sacs étanches résistants à double paroi et évacués immédiatement par nos équipes à l'issue de l'intervention. Nous ne les déposons jamais dans les locaux poubelles de la copropriété pour éviter toute contamination des espaces communs. Cette évacuation sécurisée est incluse dans notre prestation.</p>",
        },
        {
          question: "Le nettoyage peut-il endommager mon balcon (peinture du garde-corps, revêtement de sol) ?",
          answer:
            "<p>Les fientes acides peuvent avoir déjà corrodé certaines surfaces (peinture écaillée du garde-corps métallique, rouille, altération des enduits). Nous signalons ces dégradations préexistantes avant traitement. Le nettoyage lui-même, réalisé à pression modérée avec des produits adaptés, n'aggrave pas l'état des supports.</p>",
        },
        {
          question: "Les produits désinfectants utilisés sont-ils dangereux pour mes enfants ou mes animaux domestiques après séchage ?",
          answer:
            "<p>Les produits virucides et bactéricides sont appliqués selon les dosages réglementaires et rincés après le temps de contact nécessaire. Après séchage complet (24 heures recommandées), le balcon est totalement sûr pour tous les occupants, y compris enfants et animaux domestiques.</p>",
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
        "Le nettoyage professionnel des canapés, tapis et matelas élimine les allergènes et les odeurs incrustées, ravive les textiles et améliore le confort des logements à Joinville-le-Pont.",
      whyUsBullets: [
        "Intervention à domicile dans tous les quartiers de Joinville-le-Pont, avec protection des sols et organisation adaptée.",
        "Injection-extraction avec réglage de température et de pression selon les fibres, pour une extraction maximale des résidus.",
        "Conseils d'hygiène et d'entretien pour limiter les réaccumulations entre deux passages.",
      ],

      uniqueIntro:
        "<p>Dans les logements de Joinville-le-Pont, le canapé, le tapis et le matelas accumulent les traces du quotidien : poussières, miettes, taches, poils d'animaux, et parfois des odeurs tenaces liées à l'humidité. Les textiles retiennent aussi les pollens venus des bords de Marne et de la végétation environnante, ce qui peut accentuer les gênes respiratoires et les allergies.</p>\n" +
        '\n' +
        '<p class="mt-4">Les aspirations régulières éliminent les saletés visibles, mais ne suffisent pas à extraire les allergènes et les résidus incrustés en profondeur dans les fibres. Les produits ménagers classiques déplacent temporairement les salissures sans traiter réellement le problème, et les odeurs reviennent dès que l\'humidité augmente.</p>\n' +
        '\n' +
        '<p class="mt-4">Un nettoyage professionnel par injection-extraction élimine les salissures en profondeur, neutralise les odeurs et améliore significativement le confort d\'usage des textiles.</p>',

      uniqueDeepDive:
        "<h3>Diagnostic textile et identification des taches</h3>\n" +
        "<p>Le technicien examine la nature du tissu, identifie les taches visibles et teste la solidité des couleurs sur une zone discrète avant tout traitement. Les taches organiques nécessitent un pré-traitement spécifique laissé agir quelques minutes avant le nettoyage général.</p>\n" +
        "\n" +
        "<h3>Injection-extraction pour extraction maximale des résidus</h3>\n" +
        "<p>La machine projette une solution nettoyante chauffée à température adaptée au textile, puis aspire immédiatement l'eau chargée de salissures. Les passes successives sur les zones très sollicitées permettent d'extraire un maximum de résidus. L'aspiration puissante limite l'humidité résiduelle et accélère le séchage.</p>\n" +
        "\n" +
        "<h3>Conseils d'entretien pour limiter les réaccumulations</h3>\n" +
        "<p>Le séchage se fait naturellement selon la ventilation et l'épaisseur du textile. Nous conseillons d'aérer le logement, d'éviter de s'asseoir immédiatement sur les surfaces traitées et de maintenir un aspirateur régulier pour limiter les réaccumulations.</p>",

      specificChallenges: [
        "Les taches organiques et les odeurs tenaces nécessitent un pré-traitement ciblé avant injection-extraction.",
        "Les allergènes et acariens s'accumulent dans les textiles et imposent une extraction puissante et un rinçage complet.",
        "Le séchage peut être ralenti dans les pièces humides proches de la Marne ou du canal, nécessitant des consignes précises.",
      ],

      faqAdditions: [
        {
          question: "Le nettoyage par injection-extraction élimine-t-il vraiment les acariens responsables des allergies ?",
          answer:
            "<p>L'injection d'eau chauffée et l'aspiration puissante éliminent une grande partie des acariens, des déjections et des allergènes présents dans les fibres. Le rinçage complet évacue les résidus organiques. Ce nettoyage réduit significativement les irritations respiratoires, mais ne remplace pas un entretien régulier par aspiration et aération.</p>",
        },
        {
          question: "Les odeurs tenaces (urine d'animal, humidité) peuvent-elles être totalement neutralisées ?",
          answer:
            "<p>Les odeurs récentes partent généralement très bien avec un détachant adapté. Les odeurs anciennes très incrustées peuvent laisser une trace résiduelle légère selon la profondeur de pénétration. L'extraction complète des résidus organiques et le rinçage neutralisent la majorité des odeurs. Dans les cas extrêmes, une seconde intervention ciblée peut être nécessaire.</p>",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser les textiles nettoyés ?",
          answer:
            "<p>Le séchage prend généralement entre 4 et 8 heures selon la ventilation et l'humidité ambiante. Nous recommandons d'attendre 6 heures minimum avant de s'asseoir sur le canapé ou de marcher sur le tapis. Pour un matelas, il est préférable d'attendre une nuit complète avant de remettre les draps et de dormir dessus.</p>",
        },
        {
          question: "Que dois-je préparer avant votre arrivée pour le nettoyage à domicile ?",
          answer:
            "<p>Dégagez l'accès au canapé, roulez ou déplacez les petits tapis, retirez draps et protège-matelas. Si vous avez des animaux domestiques, isolez-les temporairement. Nous nous occupons du reste : protection des sols si nécessaire, aspiration préalable, pré-traitement des taches, nettoyage complet et conseils post-intervention.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
