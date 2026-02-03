import type { City } from "~/types/geo";

const city: City = {
  name: "Neuilly-sur-Marne",
  slug: "neuilly-sur-marne",
  postalCodes: ["93330"],

  customDescription:
    "À Neuilly-sur-Marne, la propreté des copropriétés et des locaux professionnels exige une réponse technique. Avec ses grands axes (RN 34, RN 370) et sa proximité avec la Marne, la ville connaît un fort encrassement des moquettes de halls, des parkings souterrains par les hydrocarbures et des balcons par les fientes de pigeons. Klinova assure la maintenance et l'assainissement de ces surfaces.",

  hubIntro:
    "<p>En tant que gestionnaire immobilier ou syndic de copropriété à Neuilly-sur-Marne, vous recherchez un partenaire de propreté capable de garantir l'hygiène et la valorisation de votre patrimoine. KLINOVA apporte une expertise technique éprouvée dans la maintenance immobilière, assurant des interventions ponctuelles ou régulières. Notre objectif est de maintenir un niveau de propreté irréprochable dans les parties communes, les parkings et les logements de la ville.</p>\n<p class=\"mt-4\">Notre approche repose sur un partenariat transparent avec les syndics de copropriété et les entreprises de Neuilly-sur-Marne. Nous garantissons une mise en œuvre rigoureuse de chaque prestation, de l'état des lieux initial au rapport de fin de chantier, assurant ainsi une gestion globale et simplifiée de vos besoins en propreté spécialisée.</p>\n<ul>\n  <li><strong>Protocoles d'hygiène certifiés :</strong> méthodes d'injection-extraction, désinfection virucide et équipements professionnels pour une propreté en profondeur et durable, notamment dans les zones à forte densité d'habitation.</li>\n  <li><strong>Maîtrise des accès sécurisés :</strong> gestion sécurisée des clés, badges (Vigik) et codes d'accès, avec une communication claire et rapide auprès des gardiens ou du conseil syndical.</li>\n  <li><strong>Intervention adaptée au contexte local :</strong> organisation des équipes pour minimiser l'impact des travaux (bruit, circulation) sur les zones résidentielles denses et à proximité des grands axes de Neuilly-sur-Marne.</li>\n  <li><strong>Reporting transparent :</strong> comptes rendus illustrés et recommandations d'entretien pour les syndics et gestionnaires.</li>\n</ul>",

  citySpecificChallenges: [
    "Encrassement rapide des halls et moquettes par les particules fines et la boue en provenance des axes (RN 34) et des zones de fort passage (proximité RER).",
    "Fort dépôt d'hydrocarbures, de suie et d'huiles sur les sols en béton des parkings souterrains des grands ensembles résidentiels (par exemple Les 24-Arpents), exigeant l'usage d'autolaveuses performantes.",
    "Risque sanitaire élevé sur les balcons exposés aux fientes de pigeons, particulièrement dans les immeubles proches de la Marne et des zones arborées (Haute-Île, Croissant-Vert), nécessitant une désinfection virucide.",
    "Contraintes logistiques pour l'installation d'équipements lourds dans les rues denses et les immeubles anciens du centre-ville (rue Marx Dormoy, rue du Jeu-de-Paume).",
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  nearbyCities: [
        "gagny",
        "neuilly-plaisance",
        "gournay-sur-marne",
        "villemomble",
        "le-perreux-sur-marne",
        "noisy-le-grand",
        "le-raincy",
        "villiers-sur-marne",
        "montfermeil",
        "rosny-sous-bois"
      ],

  districts: [
    "Centre-ville",
    "Vieux Neuilly-sur-Marne",
    "Haute-Île",
    "Croissant-Vert",
    "Avenir",
    "24 Arpents",
    "Maltournée",
    "Fauvettes",
    "Ville-Évrard",
    "Maison-Blanche",
    "Carnot–République",
    "Bords de Marne",
    "L'Épi d'or",
    "Le Pré fleuri",
    "Les Verdoyants",
    "La Guette",
    "Les Enfers",
  ],

  landmarks: [
    "Mairie de Neuilly-sur-Marne",
    "Parc départemental de la Haute-Île",
    "Canal de Chelles et bords de Marne",
    "Axes RN 34 et RN 370",
    "Hôpitaux psychiatriques de Ville-Évrard et Maison Blanche",
    "Parc du Croissant-Vert",
  ],

  faq: [
    {
      question:
        "Quels sont vos délais d'intervention pour un devis ou une urgence à Neuilly-sur-Marne ?",
      answer:
        "<p><strong>Nous proposons un déplacement sous 48h pour un devis gratuit,</strong> et une intervention en urgence sous 24h pour les sinistres (inondations, salissures majeures). Nos techniciens sont basés en Île-de-France et connaissent les axes RN 34/RN370 pour limiter les retards liés au trafic.</p>",
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés (Vigik, badges) dans les copropriétés ?",
      answer:
        "<p><strong>Nos équipes sont formées à la gestion des systèmes Vigik</strong> et des badges d'accès. Nous signons des conventions avec les syndics pour une organisation fluide, et nos techniciens arrivent avec le matériel nécessaire pour respecter les protocoles de sécurité des résidences.</p>",
    },
    {
      question:
        "Proposez-vous des solutions pour les contraintes de stationnement à Neuilly-sur-Marne ?",
      answer:
        "<p><strong>Oui, nous adaptons nos interventions aux zones à stationnement difficile</strong> (centre-ville, proximité des gares et axes principaux). Nos véhicules sont équipés pour des arrêts courts, et nous coordonnons avec les gestionnaires pour utiliser, si besoin, des espaces réservés ou des créneaux horaires adaptés.</p>",
    },
    {
      question:
        "Vos interventions sont-elles adaptées aux immeubles anciens et aux résidences récentes ?",
      answer:
        "<p><strong>Absolument, nos protocoles tiennent compte des spécificités des bâtiments</strong> : moquettes anciennes nécessitant un nettoyage doux, parkings souterrains avec revêtements sensibles, ou balcons en bois composite. Nous utilisons des produits et méthodes adaptés pour préserver les surfaces sans compromettre l'efficacité.</p>",
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
        "Nettoyage par injection-extraction des moquettes de halls, paliers et bureaux à Neuilly-sur-Marne, pour les copropriétés, les entreprises et les particuliers.",
      whyUsBullets: [
        "Diagnostic précis pour choisir la méthode la plus sûre et éliminer les salissures incrustées.",
        "Injecteurs-extracteurs professionnels pour un taux d'humidité faible et un séchage accéléré.",
        "Planification avec le syndic pour limiter les perturbations dans les immeubles collectifs.",
        "Élimination des taches, acariens, poussière et odeurs pour améliorer la qualité de l'air.",
      ],

      uniqueIntro:
        "<p>À Neuilly-sur-Marne, les moquettes des parties communes sont constamment mises à rude épreuve. Le trafic piéton en provenance des gares de proximité (RER A de Neuilly-Plaisance, RER E de Chelles-Gagny) ou des grands axes de circulation (RN 34, RN 370) dépose quotidiennement boue, poussières fines et polluants. Les fibres ternissent rapidement, les joints noircissent et certaines zones deviennent carrément grises malgré l'aspirateur quotidien.</p>\n<p class=\"mt-4\">Cet encrassement nuit à l'esthétique du hall, première image de la résidence, et retient allergènes, poussière et bactéries, impactant l'hygiène globale du bâtiment. Les conseils syndicaux reçoivent des remarques lors des AG, certains résidents se plaignent de l'aspect négligé. <strong>Un nettoyage régulier est indispensable</strong> pour prolonger la durée de vie de la moquette, garantir un air sain aux habitants et valoriser l'image de la copropriété sans nécessiter un remplacement coûteux des revêtements.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic et préparation</h3>\n<p>Examen du type de moquette (aiguilletée, velours, dalles), évaluation du niveau d'encrassement général, identification des taches (graisse, café, urine) et prise en compte des contraintes d'accès (ascenseur, escaliers, halls donnant sur rue). <strong>Balisage systématique de la zone d'intervention,</strong> protection des bas de murs, plinthes et angles avec des bâches, organisation par cage d'escalier ou par étage pour minimiser la gêne.</p>\n\n<h3>2. Injection-extraction professionnelle</h3>\n<p>Application d'une solution nettoyante professionnelle adaptée à la fibre. <strong>Le matériel injecte une eau chaude et un produit détergent,</strong> puis aspire immédiatement l'eau sale en profondeur. Plusieurs passes sur les zones les plus sollicitées (halls de copropriétés, abords d'ascenseurs, boîtes aux lettres) pour un résultat homogène.</p>\n\n<h3>3. Extraction et séchage optimisé</h3>\n<p>Extraction maximisée pour laisser la moquette la moins humide possible, aération des espaces et indication d'un délai typique de séchage de 2 à 5 heures avant rétablissement complet des circulations. <strong>Adaptation des horaires pour les halls très fréquentés</strong> (centre commercial du Baobab, centre-ville). Recommandations de fréquence : tous les 12 à 18 mois pour les résidences très fréquentées.</p>",

      specificChallenges: [
        "Gestion de l'entrée permanente de salissures dans les halls situés à proximité des grands axes routiers (RN 34) ou des arrêts de bus.",
        "Nécessité de séchage rapide dans les immeubles de forte densité près du centre-ville pour ne pas bloquer les résidents.",
        "Traitement spécifique des taches organiques (boissons, graisses) et des résidus tenaces fréquents dans les parties communes.",
        "Organisation des interventions dans des cages d'escalier parfois étroites ou uniques, imposant un phasage précis.",
      ],

      faqAdditions: [
        {
          question:
            "La méthode d'injection-extraction est-elle adaptée à toutes les moquettes des copropriétés de Neuilly-sur-Marne ?",
          answer:
            "<p><strong>Oui, elle convient à la majorité des moquettes et tapis</strong> utilisés en parties communes ou en bureaux. Pour les fibres délicates ou anciennes, nous ajustons la pression et la température de l'eau après un test de résistance initial afin de garantir la sécurité et le résultat.</p>",
        },
        {
          question:
            "Combien de temps la moquette est-elle inutilisable après votre nettoyage ?",
          answer:
            "<p><strong>Grâce à la puissance de nos aspirateurs d'extraction,</strong> le temps de séchage est réduit. En fonction de l'aération et de l'humidité du bâtiment, la moquette est généralement sèche et réutilisable dans un délai de 2 à 5 heures, ce que nous confirmons au syndic en fin de chantier.</p>",
        },
        {
          question:
            "Peut-on enlever les taches anciennes ou très incrustées sur les moquettes des paliers ?",
          answer:
            "<p><strong>Notre protocole inclut un pré-traitement ciblé des taches tenaces</strong> avec des détachants professionnels. Si une tache est vraiment ancienne et a altéré la fibre, nous maximisons la réduction, mais dans la grande majorité des cas l'amélioration est très nette.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention pour ne pas bloquer l'accès des résidents de la copropriété ?",
          answer:
            "<p><strong>Nous travaillons en coordination avec le syndic ou le gardien</strong> et mettons en place un balisage visible. Lorsque c'est possible, nous intervenons par demi-étages ou par paliers successifs, ou durant les heures de moindre affluence, pour maintenir en permanence une voie de circulation sécurisée.</p>",
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
        "Décrassage complet des parkings souterrains et aériens à Neuilly-sur-Marne : élimination des taches d'huile, traces de pneumatiques et salissures accumulées pour copropriétés et entreprises.",
      whyUsBullets: [
        "Gestion rigoureuse des eaux souillées, essentielle près de la Marne et du canal de Chelles.",
        "Élimination des dépôts de graisse et d'huile pour réduire les risques de glissades.",
        "Autolaveuses industrielles et haute pression à eau chaude pour traiter rapidement les grandes surfaces.",
        "Chantier organisé avec les syndics pour minimiser la gêne liée au déplacement des véhicules.",
      ],

      uniqueIntro:
        "<p>Les parkings, qu'ils soient souterrains ou aériens, sont des espaces essentiels pour l'hygiène et la sécurité des résidences et des entreprises à Neuilly-sur-Marne. L'accumulation d'huiles, de graisses, d'hydrocarbures et de poussières fines, notamment près des axes RN 34 et RN 370, rend les sols glissants, dégage de mauvaises odeurs et détériore les revêtements. Le béton noircit, les marquages deviennent illisibles et l'odeur d'hydrocarbures devient persistante.</p>\n<p class=\"mt-4\">Dans les grands ensembles (par exemple autour de Ville-Évrard ou des 24-Arpents), un manque d'entretien impacte directement la qualité de l'environnement immobilier et la perception des résidents qui se plaignent de salir leurs chaussures. Certains craignent même de glisser sur les rampes. <strong>Un décrassage régulier est essentiel pour l'image,</strong> mais aussi pour prévenir les risques d'incendie (accumulation de débris) et les accidents, tout en restaurant la lisibilité des marquages et la sécurité de circulation.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic et organisation par zones</h3>\n<p>Analyse du revêtement (béton brut, peinture, résine), identification des zones critiques (taches d'huile lourdes, rampes pentues), vérification du système d'évacuation des eaux et évaluation de la logistique (hauteur sous plafond, contraintes horaires, accès véhicules). <strong>Balayage mécanique ou manuel</strong> pour dégager les gros déchets, mise en place d'un balisage clair et organisation du chantier par zones successives pour permettre la rotation des véhicules.</p>\n\n<h3>2. Autolaveuse et haute pression ciblée</h3>\n<p>Autolaveuse professionnelle : brossage intensif des sols avec un détergent dégraissant adapté, aspiration immédiate des eaux usées pour un résultat sans traces. <strong>Haute pression ciblée</strong> pour le traitement des taches tenaces (huile, graisse) et des zones difficiles d'accès (pieds de murs, angles, zones sous les tuyaux) avec de l'eau chaude et des dégraissants puissants.</p>\n\n<h3>3. Gestion des eaux et finitions</h3>\n<p>Récupération stricte des eaux souillées par les hydrocarbures via l'autolaveuse ou des systèmes d'aspiration, évacuation vers le réseau d'eaux usées ou vers une filière dédiée selon le niveau de contamination, en conformité avec la réglementation locale. <strong>Attention particulière aux rampes, aux évacuations et aux marquages au sol.</strong> Recommandations de fréquence : une à deux fois par an pour les parkings très exposés aux axes RN 34/RN370.</p>",

      specificChallenges: [
        "Gestion du volume d'eaux sales et de la présence d'hydrocarbures, imposant parfois une filière de traitement spécifique.",
        "Nettoyage des rampes très encrassées par les résidus de freinage et les graisses, sans abîmer le revêtement.",
        "Organisation du travail en zones occupées, avec rotation des véhicules et interventions en horaires décalés si nécessaire.",
        "Forte présence de poussières fines liée à la proximité des grands axes (RN 34), s'incrustant dans les bétons non peints.",
      ],

      faqAdditions: [
        {
          question:
            "Vos produits dégraissants sont-ils agressifs pour les revêtements en résine ou pour les marquages au sol du parking ?",
          answer:
            "<p><strong>Non, nous utilisons des dégraissants professionnels à pH contrôlé,</strong> conçus pour être efficaces sur les taches d'hydrocarbures tout en préservant les résines, peintures et marquages. Le diagnostic initial nous permet de choisir la chimie la plus adaptée.</p>",
        },
        {
          question:
            "Comment assurez-vous la gestion des véhicules pendant le nettoyage d'un parking complet de copropriété ?",
          answer:
            "<p><strong>Nous travaillons par zones définies.</strong> En amont, le gestionnaire informe les résidents du déplacement des véhicules. Nous nettoyons une zone complète, la balisons et la rendons accessible avant de passer à la suivante, garantissant un accès partiel et continu.</p>",
        },
        {
          question:
            "Le nettoyage par autolaveuse permet-il vraiment d'éliminer les traces d'huile anciennes ?",
          answer:
            "<p><strong>L'autolaveuse, combinée à l'action mécanique des brosses et à nos dégraissants à eau chaude,</strong> élimine la majorité des taches d'huile. Pour les taches très anciennes incrustées dans le béton poreux, nous appliquons un pré-traitement spécifique et un brossage manuel pour maximiser le résultat.</p>",
        },
        {
          question:
            "Quelle est la durée d'une intervention typique pour le nettoyage d'un niveau de parking à Neuilly-sur-Marne ?",
          answer:
            "<p><strong>La durée dépend de la surface et du niveau d'encrassement.</strong> En moyenne, le décrassage complet d'un niveau standard prend entre 4 et 8 heures, incluant balayage, dégraissage et aspiration des eaux usées.</p>",
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
        "Un balcon ou une terrasse impeccable, sans traces de poussière, de mousse ou de graisse, pour profiter pleinement de votre extérieur à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Connaissance des balcons exposés à la pollution, aux arbres et aux intempéries à Neuilly-sur-Marne.",
        "Produits adaptés à chaque support avec pression contrôlée pour préserver joints et carrelage.",
        "Protection des accès, gestion de l'eau et intervention aux horaires les moins gênants.",
        "Conseils d'entretien post-nettoyage pour préserver la propreté plus longtemps.",
      ],

      uniqueIntro:
        "<p>À Neuilly-sur-Marne, les balcons et terrasses subissent les agressions quotidiennes de la pollution des grands axes (RN 34, RN 370), des dépôts verts (mousses, lichens) favorisés par la proximité du parc de la Haute-Île et des bords de Marne, des poussières fines et des résidus de terre apportés par le vent ou les plantes. Les occupants constatent souvent des joints noircis, des traces d'eau stagnante, des dépôts de graisse après un barbecue ou une couche de poussière collante qui rend l'espace peu accueillant.</p>\n<p class=\"mt-4\">Les balcons orientés vers les axes routiers sont particulièrement exposés aux saletés, tandis que ceux situés près des parcs accumulent les feuilles mortes. Résultat : un espace extérieur abandonné, difficile à nettoyer soi-même. Vous finissez par ne plus y sortir prendre votre café du matin, votre mobilier reste bâché et cet espace qui devrait être agréable devient inutilisable. <strong>Un nettoyage professionnel permet de retrouver un balcon propre, sécurisé et agréable,</strong> où l'on a vraiment envie de passer du temps, que ce soit pour un café le matin ou un dîner en soirée, redonnant ainsi une véritable pièce de vie supplémentaire à votre logement.</p>",

      uniqueDeepDive:
        "<h3>1. Protection et enlèvement des dépôts</h3>\n<p>Protection de votre porte-fenêtre, des menuiseries et des murs mitoyens avec des bâches et des rubans adhésifs. <strong>Déplacement ou protection des meubles, des plantes et des objets fragiles</strong> avant d'enlever manuellement les gros dépôts (feuilles mortes, terre, résidus de jardinières).</p>\n\n<h3>2. Application de produits et brossage méthodique</h3>\n<p>Application d'un produit nettoyant adapté au support (carrelage, béton, bois composite ou dalles). <strong>Brossage méthodique des surfaces</strong> en insistant sur les joints, les angles et les garde-corps souvent négligés. Pour les sols très encrassés, utilisation d'une pression contrôlée, jamais agressive pour les joints.</p>\n\n<h3>3. Rinçage maîtrisé et conseils</h3>\n<p>L'eau est dirigée vers les évacuations pour éviter les coulures chez les voisins du dessous. À Neuilly-sur-Marne, nous adaptons nos méthodes aux balcons des résidences anciennes comme aux terrasses des immeubles récents. <strong>Séchage de 2 à 4 heures avant de réutiliser l'espace.</strong> Conseils pour un entretien simple : balayage régulier, produits doux, nettoyage complet annuel au printemps.</p>",

      specificChallenges: [
        "Balcons proches des axes RN 34/RN370 ou du parc de la Haute-Île accumulant poussière fine et dépôts verts, nécessitant un nettoyage plus fréquent.",
        "Joints très encrassés et garde-corps en métal ou en verre demandant des produits spécifiques et un brossage minutieux.",
        "Gestion de l'eau cruciale pour éviter les coulures sur les façades ou chez les voisins du dessous.",
        "Créneaux d'intervention à adapter aux horaires de présence des résidents et aux règles de copropriété.",
      ],

      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage haute pression abîme le carrelage ou les joints de mon balcon ?",
          answer:
            "<p><strong>Non, nous utilisons une pression douce et adaptée</strong> à la nature de votre sol (carrelage, béton, bois). Nos techniciens testent toujours la pression sur une zone discrète avant de traiter l'ensemble, pour éviter tout dommage aux joints ou aux dalles.</p>",
        },
        {
          question:
            "Comment évitez-vous que l'eau ne coule chez mes voisins ou sur la façade ?",
          answer:
            "<p><strong>Nous dirigeons systématiquement le rinçage vers les évacuations prévues</strong> et utilisons des raclettes ou des chiffons pour récupérer l'excédent d'eau. Si nécessaire, nous installons des bâches de protection sur les parties sensibles.</p>",
        },
        {
          question:
            "Les produits utilisés sont-ils sans danger pour mes plantes ou mes animaux ?",
          answer:
            "<p><strong>Oui, nous privilégions des produits biodégradables</strong> et sans toxiques persistants. Nous rinçons abondamment après application et pouvons adapter les produits si vous avez des plantes ou des animaux sensibles.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que mon balcon soit sec et réutilisable ?",
          answer:
            "<p><strong>Le séchage complet prend généralement 2 à 4 heures,</strong> selon l'ensoleillement et la ventilation. Nous vous conseillons d'attendre ce délai avant de replacer vos meubles ou de marcher sur les surfaces nettoyées.</p>",
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
        "Un balcon entièrement désinfecté, sans trace de fientes ni odeur, sécurisé et de nouveau utilisable en toute tranquillité à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Connaissance des zones à risque (parcs, immeubles anciens, balcons en étage) à Neuilly-sur-Marne.",
        "Protocole sécurisé avec produits désinfectants homologués et matériel adapté aux surfaces contaminées.",
        "Intervention discrète avec respect des voisins et gestion sécurisée des accès en étage.",
        "Conseils post-intervention pour éviter les récidives et maintenir un balcon sain.",
      ],

      uniqueIntro:
        "<p>À Neuilly-sur-Marne, les balcons et loggias exposés aux pigeons se retrouvent rapidement recouverts de fientes, générant des odeurs persistantes et écœurantes, des risques sanitaires importants et une impossibilité totale d'utiliser l'espace extérieur. Les dalles deviennent glissantes, les garde-corps sont recouverts d'une couche épaisse et l'odeur pénètre même dans le logement. Les occupants subissent cette nuisance au quotidien, avec des tensions possibles avec les voisins ou la copropriété, surtout dans les quartiers proches des parcs comme la Haute-Île ou des immeubles à corniches propices aux nids.</p>\n<p class=\"mt-4\">Les fientes sèches, en plus d'être inesthétiques et repoussantes, peuvent transmettre des maladies graves et corroder les supports (peinture, béton, métal). La présence importante de pigeons dans la ville, attirés par les arbres du parc du Croissant-Vert et les toits plats, aggrave le problème. Vous n'osez plus ouvrir votre porte-fenêtre, vous craignez pour la santé de vos enfants et vous subissez parfois des réclamations du conseil syndical. <strong>Un nettoyage et une désinfection professionnels sont indispensables</strong> pour éliminer les risques sanitaires, restaurer l'hygiène avec des produits virucides adaptés et retrouver un balcon sain et utilisable en toute sécurité pour toute la famille.</p>",

      uniqueDeepDive:
        "<h3>1. Mise en sécurité et confinement</h3>\n<p>Mise en place d'équipements de protection individuelle (combinaison, gants, masque <strong>FFP3</strong>, lunettes) et confinement de la zone avec des bâches pour éviter toute dispersion de poussières contaminées vers l'intérieur du logement. <strong>Humidification des fientes sèches</strong> pour limiter les particules en suspension et éviter la dispersion dans l'air.</p>\n\n<h3>2. Ramassage et nettoyage des surfaces</h3>\n<p>Ramassage manuel des déjections et des nids avec des outils dédiés, conditionnés dans des sacs étanches spécialement prévus pour les déchets contaminés. <strong>Nettoyage des surfaces</strong> (sol, garde-corps, appuis de fenêtre, murs) avec un produit détergent adapté qui dissout les résidus organiques incrustés.</p>\n\n<h3>3. Désinfection virucide et aération</h3>\n<p>Désinfection complète à l'aide d'un virucide/bactéricide homologué, avec respect strict du temps de contact (15 à 20 minutes) pour une efficacité maximale contre tous les agents pathogènes. <strong>Rinçage des surfaces et aération du balcon.</strong> À Neuilly-sur-Marne, nous recommandons un délai de 24 heures avant réutilisation. Installation possible de solutions de dissuasion (picots, fils tendus) pour limiter les retours de pigeons.</p>",

      specificChallenges: [
        "Balcons situés près du parc de la Haute-Île ou des grands arbres particulièrement exposés aux fientes de pigeons.",
        "Fientes sèches et nids en hauteur nécessitant un accès sécurisé et une manipulation prudente pour éviter les poussières contaminées.",
        "Supports corrodés (peinture écaillée, béton poreux) demandant un traitement spécifique pour éviter d'aggraver les dégâts.",
        "Évacuation des déchets contaminés gérée par nos équipes, afin de garantir un haut niveau de sécurité sanitaire.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi est-il dangereux de nettoyer soi-même un balcon souillé par des fientes de pigeons ?",
          answer:
            "<p><strong>Les fientes sèches libèrent des poussières contaminées</strong> par des bactéries et champignons potentiellement dangereux pour les voies respiratoires. Nos techniciens sont équipés d'EPI et formés pour intervenir sans risque, avec des produits désinfectants adaptés.</p>",
        },
        {
          question:
            "Les produits utilisés sont-ils sans danger pour les habitants et les animaux après séchage ?",
          answer:
            "<p><strong>Oui, nous utilisons des désinfectants homologués,</strong> sans résidus toxiques après séchage. Nous rinçons abondamment les surfaces et aérons le balcon pour garantir un environnement sain.</p>",
        },
        {
          question:
            "Les fientes peuvent-elles abîmer durablement mon balcon (peinture, béton) ?",
          answer:
            "<p><strong>Oui, l'acidité des fientes corrode les peintures, le métal et fragilise le béton</strong> à long terme. Notre intervention inclut un nettoyage et une désinfection qui limitent ces dégâts, et nous pouvons conseiller des protections supplémentaires si nécessaire.</p>",
        },
        {
          question:
            "Que deviennent les fientes et les nids après l'intervention ?",
          answer:
            "<p><strong>Nous ne laissons rien sur place.</strong> Les déchets sont conditionnés dans des sacs hermétiques et emportés par nos équipes, garantissant une hygiène totale pour votre résidence.</p>",
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
        "Des canapés, tapis et matelas profondément nettoyés, sans taches ni odeurs, pour un intérieur sain et agréable à vivre à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Connaissance des logements à Neuilly-sur-Marne, souvent occupés par des familles avec des animaux.",
        "Méthode d'injection-extraction et produits adaptés à chaque type de textile et de tache.",
        "Interventions aux horaires qui vous conviennent, avec un matériel silencieux et peu encombrant.",
        "Conseils pour entretenir vos textiles et éviter les salissures récurrentes.",
      ],

      uniqueIntro:
        "<p>À Neuilly-sur-Marne, les canapés, tapis et matelas subissent les aléas du quotidien : taches de nourriture et de boissons renversées, poils d'animaux incrustés, poussière accumulée venue des axes routiers proches et acariens invisibles mais bien présents. Les familles avec enfants ou animaux savent à quel point ces textiles se salissent rapidement, malgré un entretien régulier à l'aspirateur. Les couleurs ternissent, certaines taches semblent indélébiles et les odeurs persistent.</p>\n<p class=\"mt-4\">Les taches tenaces, les odeurs persistantes (transpiration, urine d'animaux, humidité) et les allergènes invisibles rendent ces espaces moins accueillants et peuvent même provoquer des gênes respiratoires chez les personnes sensibles. Vous finissez par éviter de vous asseoir sur certaines parties du canapé, vous hésitez à recevoir des invités par gêne de l'aspect taché et vous vous réveillez parfois avec le nez qui coule à cause des acariens. <strong>Un nettoyage professionnel permet d'éliminer en profondeur les salissures, les allergènes et les bactéries,</strong> redonnant fraîcheur et confort à votre intérieur. Que ce soit pour un salon souvent utilisé, une chambre ou une salle d'attente, un traitement adapté restaure l'hygiène et prolonge la durée de vie de vos textiles sans nécessiter leur remplacement.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic des textiles et pré-traitement</h3>\n<p>Diagnostic précis du textile (coton, laine, synthétique, velours, cuir) et des taches (graisse, vin, urine, boue). <strong>Application d'un pré-traitement ciblé</strong> sur les zones les plus touchées (accoudoirs, assises, passages de tapis), avec des produits enzymatiques pour les taches organiques ou des détachants adaptés aux fibres délicates.</p>\n\n<h3>2. Injection-extraction professionnelle</h3>\n<p>Le nettoyage s'effectue par injection-extraction à l'eau : une solution nettoyante est injectée en profondeur dans les fibres puis immédiatement aspirée avec les salissures dissoutes, les acariens et leurs déjections. <strong>Cette méthode pénètre en profondeur</strong> pour extraire saletés et humidité, sans agresser le tissu ni détremper les rembourrages.</p>\n\n<h3>3. Aération et conseils d'entretien</h3>\n<p>À Neuilly-sur-Marne, nous adaptons notre matériel aux contraintes de votre logement : espace réduit, accès difficile ou besoin de discrétion. <strong>Aération de la pièce et utilisation d'extracteurs</strong> pour limiter l'humidité résiduelle et accélérer le séchage (4 à 6 heures en moyenne). Conseils sur l'entretien quotidien : aspirateur régulier, aération, protection contre les taches pour préserver la propreté plus longtemps.</p>",

      specificChallenges: [
        "Logements avec enfants ou animaux à Neuilly-sur-Marne nécessitant un nettoyage régulier pour éliminer poils, taches et acariens.",
        "Taches organiques (urine, nourriture) et odeurs tenaces demandant des produits spécifiques et un temps de pose adapté.",
        "Pièces peu ventilées ou humides prolongeant le séchage, nécessitant une attention particulière pour éviter les moisissures.",
        "Tissus fragiles (velours, soie) ou épais (tapis à poils longs) exigeant un nettoyage délicat pour un résultat optimal.",
      ],

      faqAdditions: [
        {
          question:
            "Votre nettoyage est-il efficace contre les acariens et les allergènes ?",
          answer:
            "<p><strong>Oui, notre méthode d'injection-extraction permet de réduire fortement la présence d'acariens</strong> et d'allergènes présents dans les tissus. Nous utilisons des produits adaptés et un rinçage approfondi pour un résultat durable, idéal pour les personnes sensibles.</p>",
        },
        {
          question:
            "Peut-on vraiment enlever les taches et odeurs d'urine sur un matelas ou un canapé ?",
          answer:
            "<p><strong>Oui, grâce à des produits enzymatiques</strong> qui décomposent les résidus organiques. Nous traitons la tache en profondeur et neutralisons les odeurs, même anciennes, pour retrouver un textile plus sain et agréable.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que mon canapé ou tapis soit sec après l'intervention ?",
          answer:
            "<p><strong>Comptez 4 à 6 heures en moyenne.</strong> L'extraction mécanique retire le plus gros de l'eau, mais une ventilation naturelle reste indispensable pour sécher les fibres à cœur en quelques heures.</p>",
        },
        {
          question: "Dois-je préparer quelque chose avant votre passage ?",
          answer:
            "<p><strong>Il suffit de dégager les objets fragiles ou encombrants</strong> autour du canapé ou du tapis. Nous nous chargeons du reste : protection des sols, déplacement des petits meubles si nécessaire et remise en place après nettoyage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage et remise en état de terrasses à Neuilly-sur-Marne : suppression des mousses, traces noires et salissures extérieures pour retrouver un sol propre, net et agréable à utiliser.",
      whyUsBullets: [
        "Intervention dans tous les quartiers de Neuilly-sur-Marne : bords de Marne, Centre, L’Écluse, Les 24 Arpents, zones pavillonnaires et résidentielles.",
        "Expertise des terrasses exposées à l’humidité et à la végétation : sols extérieurs soumis aux dépôts organiques et à l’encrassement progressif.",
        "Prestation soignée et valorisante : protection du mobilier, respect des façades et nettoyage précis pour un rendu visuel immédiatement perceptible.",
      ],
      uniqueIntro:
        '<p><strong>Neuilly-sur-Marne</strong>, commune de Seine-Saint-Denis bordée par la <strong>Marne</strong>, présente un habitat varié mêlant maisons individuelles, résidences et quartiers pavillonnaires. Les terrasses y sont très présentes, aussi bien dans les jardins privés que dans les ensembles résidentiels.</p>\n\n<p class="mt-4">La proximité du fleuve, les alignements d’arbres et les zones ombragées favorisent l’apparition de <strong>mousses, algues, traces noires</strong> et salissures incrustées sur les sols extérieurs. Ces phénomènes sont particulièrement visibles sur les terrasses peu exposées au soleil ou proches des berges.</p>\n\n<p class="mt-4">À Neuilly-sur-Marne, les terrasses sont réalisées en <strong>dalles béton</strong>, <strong>carrelage extérieur</strong>, <strong>pierre</strong>, <strong>bois</strong> ou <strong>bois composite</strong>. Chaque revêtement nécessite une méthode spécifique pour un nettoyage efficace et une remise en état visuellement satisfaisante.</p>',
      uniqueDeepDive:
        "<h3>Préparation et protection de l’environnement</h3>\n<p>Le mobilier de terrasse, les pots et éléments décoratifs sont déplacés ou protégés. Les abords immédiats — façades, garde-corps, menuiseries — sont sécurisés afin de garantir une intervention propre, notamment dans les configurations proches de la Marne.</p>\n\n<h3>Nettoyage approfondi du sol extérieur</h3>\n<p>La méthode est adaptée au matériau : solution performante pour béton et carrelage extérieur, approche spécifique pour pierre, bois ou composite. Un brossage mécanique efficace permet de décoller les salissures incrustées, les biofilms et les zones noircies. Le rinçage est réalisé de manière contrôlée pour un sol plus clair et plus homogène.</p>\n\n<h3>Mise en valeur et confort d’usage</h3>\n<p>Une attention particulière est portée aux zones de passage et aux surfaces les plus exposées à l’humidité. Le nettoyage améliore nettement l’aspect visuel de la terrasse et le confort d’utilisation au quotidien.</p>",
      specificChallenges: [
        "Terrasses situées près des bords de Marne : humidité régulière favorisant mousses et traces verdâtres.",
        "Zones arborées et jardins privatifs : dépôts végétaux et encrassement biologique rapide.",
        "Dalles béton et carrelages extérieurs ternis par le temps et la pollution.",
        "Terrasses partiellement ombragées : séchage lent et apparition de surfaces glissantes.",
        "Bois et composite exposés aux intempéries : perte d’éclat et salissures incrustées.",
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi les terrasses de Neuilly-sur-Marne s’encrassent-elles rapidement ?",
          answer:
            "<p>La <strong>proximité de la Marne</strong>, combinée à l’humidité et à la végétation environnante, favorise l’apparition de <strong>mousses, algues et traces noires</strong>. Ces salissures s’installent progressivement sur les sols extérieurs si aucun nettoyage adapté n’est réalisé.</p>",
        },
        {
          question:
            "Le nettoyage améliore-t-il réellement l’aspect visuel d’une terrasse ?",
          answer:
            "<p>Oui. Un nettoyage en profondeur permet de <strong>clarifier les surfaces</strong>, d’atténuer fortement les zones foncées et de retrouver un sol plus <strong>homogène et agréable</strong> à l’usage.</p>",
        },
        {
          question:
            "Intervenez-vous sur des terrasses très encrassées ou peu entretenues ?",
          answer:
            "<p>Oui. Nous intervenons régulièrement sur des terrasses <strong>fortement encrassées</strong>, parfois laissées sans entretien pendant plusieurs années, avec une méthode adaptée à l’état réel du support.</p>",
        },
        {
          question:
            "Nettoyez-vous aussi les terrasses de résidences ou de copropriétés ?",
          answer:
            "<p>Oui. Nous intervenons également sur les <strong>terrasses communes et cours extérieures</strong> de résidences et petites copropriétés à Neuilly-sur-Marne, avec une organisation adaptée aux usages des occupants.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Remise en état soignée à Neuilly-sur-Marne : logements familiaux, pavillons et résidences collectives. Intervention adaptée aux états des lieux, retours de location et nettoyages après travaux.",

      whyUsBullets: [
        "Approche “double ville” : centre ancien et bords de Marne (accès plus contraints) vs résidences neuves de Maison Blanche (rotation locative + poussière de chantier).",
        "Plan anti-poussière pour zones en travaux : dépoussiérage méthodique, contrôle des retombées, puis finitions propres (plinthes, menuiseries, interrupteurs).",
        "Organisation sans gare : créneaux et itinéraires calés sur les pics RN34 et les contraintes de stationnement en zone bleue au centre.",
      ],

      uniqueIntro:
        '<p>Neuilly-sur-Marne a une configuration particulière : <strong>aucune gare ferroviaire dans la commune</strong>, mais une ville très connectée par les bus et les grands axes, avec une colonne vertébrale routière (la <strong>RN34</strong>) et une vie locale structurée autour du centre et des bords de Marne. Pour un nettoyage d’appartement ou de maison, l’enjeu n’est pas seulement le résultat : c’est aussi la <strong>logistique</strong> (arrivée, stationnement, accès immeuble) et le bon ordre d’exécution.</p>\n<p class="mt-4">La ville se lit en contraste. D’un côté, le <strong>centre ancien</strong> et certains secteurs proches de la Marne : rues plus étroites, accès parfois plus délicats, et une humidité qui marque davantage cuisines, salles d’eau et bas de vitrages. De l’autre, la <strong>ZAC Maison Blanche</strong>, avec du neuf livré par phases : rotation locative, finitions à sécuriser, et surtout une réalité très concrète — <strong>poussières de chantier</strong> (plâtre/terre) qui reviennent vite si on ne nettoie pas dans le bon sens.</p>\n<p class="mt-4">Enfin, Neuilly-sur-Marne a ses repères : le <strong>Parc de la Haute-Île</strong> et le <strong>canal de Chelles</strong> structurent des zones résidentielles, tandis que l’emprise de <strong>Ville-Évrard</strong> et l’écoquartier modifient les flux. Résultat : les demandes typiques tournent autour des fins de bail, des remises en état de pavillons (Primevères / 24 Arpents) et des “après travaux” dans la dynamique Maison Blanche.</p>',

      uniqueDeepDive:
        "<h3>ZAC Maison Blanche — neuf, retombées de chantier et états des lieux</h3>\n<p>Sur Maison Blanche, la contrainte n°1 est la poussière fine (plâtre, découpe, va-et-vient de chantier) qui se redépose vite. On privilégie une séquence “anti-retombées” : dépoussiérage minutieux des hauteurs et surfaces planes, nettoyage des menuiseries, puis sols, avant de verrouiller la finition. C’est particulièrement adapté aux états des lieux et aux entrées/sorties rapides de locataires dans le neuf.</p>\n\n<h3>Centre-ville / Place Stalingrad — accès plus serrés et stationnement</h3>\n<p>Le centre concentre davantage de circulation, de stationnement contraint et d’accès par badges/digicodes. L’objectif est d’aller droit au rendu : cuisine/salle d’eau, sols, vitres accessibles, puis détails visibles. On organise aussi l’arrivée pour éviter les fenêtres horaires les plus chargées sur la RN34 et en zone bleue.</p>\n\n<h3>Bords de Marne / canal — humidité, terrasses et surfaces vitrées</h3>\n<p>Près de l’eau, l’humidité marque plus vite certains points : traces minérales, joints, et parfois une sensation de “film” sur les vitrages bas. On adapte les produits et le temps de contact, et on traite les zones de passage (entrée, pièces de vie) en priorité. Dans les pavillons, on sécurise aussi la protection des sols et l’enchaînement des pièces à l’étage pour ne pas re-salir en sortie.</p>",

      specificChallenges: [
        "Absence de gare intra-muros : organisation des trajets et des créneaux calée sur les axes et bus, pas sur un pôle ferroviaire local.",
        "Chantier ZAC Maison Blanche : poussières fines (plâtre/terre) et retombées rapides sur les résidences déjà livrées.",
        "RN34 très circulée : suie/pollution sur vitrages et balcons, surtout en bord d’axe.",
        "Centre-ville : stationnement plus difficile (zone bleue) et accès parfois serrés selon les rues.",
        "Bords de Marne : accès camions plus contraints dans certaines rues, et humidité qui marque cuisines/SDB et bas de vitrages.",
        "Badges/digicodes et gardiens fréquents en collectif (Fauvettes / Maison Blanche) : accès à anticiper.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous à Neuilly-sur-Marne (93330) pour un nettoyage de fin de bail / état des lieux ?",
          answer:
            "<p>Oui. Nous cadrons le nettoyage pour obtenir un rendu net et contrôlable : cuisine, salle d’eau, sols, vitres accessibles, puis finitions (plinthes, portes, interrupteurs). À Neuilly-sur-Marne, on anticipe surtout le stationnement en centre-ville et l’accès en résidence (badges/gardiens).</p>",
        },
        {
          question:
            "Faites-vous des nettoyages après travaux dans la ZAC Maison Blanche ?",
          answer:
            "<p>Oui. Dans le neuf, on traite d’abord la poussière fine (plâtre, découpes, retombées), puis on enchaîne menuiseries, surfaces et sols avant la finition. C’est la meilleure façon d’éviter l’effet “ça re-poussière tout de suite”, fréquent quand le quartier est encore en phase de chantier.</p>",
        },
        {
          question:
            "La commune n’a pas de gare : cela complique-t-il l’intervention ?",
          answer:
            "<p>Non, mais cela change l’organisation : on se cale sur les axes (RN34) et les créneaux de circulation/parking. L’objectif est de sécuriser le temps de travail sur place et de limiter les pertes liées à la logistique.</p>",
        },
        {
          question:
            "Pouvez-vous intervenir sur une maison côté bords de Marne (humidité, terrasses, vitrages) ?",
          answer:
            "<p>Oui. On adapte la méthode aux zones sensibles : dépôts minéraux et humidité en cuisines/salles d’eau, vitrages bas plus marqués, et protection des sols dans les pièces de vie. Pour les accès plus étroits, on prévoit le matériel en conséquence.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
