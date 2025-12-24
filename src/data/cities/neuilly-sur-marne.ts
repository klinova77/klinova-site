import type { City } from "~/types/geo";

const city: City = {
  name: "Neuilly-sur-Marne",
  slug: "neuilly-sur-marne",
  postalCodes: ["93330"],

  customDescription:
    "À Neuilly-sur-Marne, la propreté des copropriétés et des locaux professionnels exige une réponse technique. Avec ses grands axes (RN 34, RN 370) et sa proximité avec la Marne, la ville connaît un fort encrassement des moquettes de halls, des parkings souterrains par les hydrocarbures et des balcons par les fientes de pigeons. KLINOVA assure la maintenance et l’assainissement de ces surfaces.",

  hubIntro: `<p>En tant que gestionnaire immobilier ou syndic de copropriété à Neuilly-sur-Marne, vous recherchez un partenaire de propreté capable de garantir l’hygiène et la valorisation de votre patrimoine. KLINOVA apporte une expertise technique éprouvée dans la maintenance immobilière, assurant des interventions ponctuelles ou régulières. Notre objectif est de maintenir un niveau de propreté irréprochable dans les parties communes, les parkings et les logements de la ville.</p>
<p>Notre approche repose sur un partenariat transparent avec les syndics de copropriété et les entreprises de Neuilly-sur-Marne. Nous garantissons une mise en œuvre rigoureuse de chaque prestation, de l’état des lieux initial au rapport de fin de chantier, assurant ainsi une gestion globale et simplifiée de vos besoins en propreté spécialisée.</p>
<ul>
  <li><strong>Protocoles d’hygiène certifiés :</strong> méthodes d’injection-extraction, désinfection virucide et équipements professionnels pour une propreté en profondeur et durable, notamment dans les zones à forte densité d’habitation.</li>
  <li><strong>Maîtrise des accès sécurisés :</strong> gestion sécurisée des clés, badges (Vigik) et codes d’accès, avec une communication claire et rapide auprès des gardiens ou du conseil syndical.</li>
  <li><strong>Intervention adaptée au contexte local :</strong> organisation des équipes pour minimiser l’impact des travaux (bruit, circulation) sur les zones résidentielles denses et à proximité des grands axes de Neuilly-sur-Marne.</li>
  <li><strong>Reporting transparent :</strong> comptes rendus illustrés et recommandations d’entretien pour les syndics et gestionnaires.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement rapide des halls et moquettes par les particules fines et la boue en provenance des axes (RN 34) et des zones de fort passage (proximité RER).",
    "Fort dépôt d’hydrocarbures, de suie et d’huiles sur les sols en béton des parkings souterrains des grands ensembles résidentiels (par exemple Les 24-Arpents), exigeant l’usage d’autolaveuses performantes.",
    "Risque sanitaire élevé sur les balcons exposés aux fientes de pigeons, particulièrement dans les immeubles proches de la Marne et des zones arborées (Haute-Île, Croissant-Vert), nécessitant une désinfection virucide.",
    "Contraintes logistiques pour l’installation d’équipements lourds dans les rues denses et les immeubles anciens du centre-ville (rue Marx Dormoy, rue du Jeu-de-Paume)."
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis"
  },

  nearbyCities: [
  "noisy-le-grand",
  "gagny",
  "gournay-sur-marne",
  "chelles",
  "champs-sur-marne",
  "livry-gargan",
  "le-raincy",
],


  // Mistral + Gemini
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
  "L’Épi d’or",
  "Le Pré fleuri",
  "Les Verdoyants",
  "La Guette",
  "Les Enfers"
],



  landmarks: [
    "Mairie de Neuilly-sur-Marne",
    "Parc départemental de la Haute-Île",
    "Canal de Chelles et bords de Marne",
    "Axes RN 34 et RN 370",
    "Hôpitaux psychiatriques de Ville-Évrard et Maison Blanche",
    "Parc du Croissant-Vert"
  ],

  // FAQ racine Mistral (plus B2B)
  faq: [
    {
      question:
        "Quels sont vos délais d’intervention pour un devis ou une urgence à Neuilly-sur-Marne ?",
      answer:
        "Nous garantissons un déplacement sous 48h pour un devis gratuit, et une intervention en urgence sous 24h pour les sinistres (inondations, salissures majeures). Nos techniciens sont basés en Île-de-France et connaissent les axes RN 34/RN370 pour limiter les retards liés au trafic."
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés (Vigik, badges) dans les copropriétés ?",
      answer:
        "Nos équipes sont formées à la gestion des systèmes Vigik et des badges d’accès. Nous signons des conventions avec les syndics pour une organisation fluide, et nos techniciens arrivent avec le matériel nécessaire pour respecter les protocoles de sécurité des résidences."
    },
    {
      question:
        "Proposez-vous des solutions pour les contraintes de stationnement à Neuilly-sur-Marne ?",
      answer:
        "Oui, nous adaptons nos interventions aux zones à stationnement difficile (centre-ville, proximité des gares et axes principaux). Nos véhicules sont équipés pour des arrêts courts, et nous coordonnons avec les gestionnaires pour utiliser, si besoin, des espaces réservés ou des créneaux horaires adaptés."
    },
    {
      question:
        "Vos interventions sont-elles adaptées aux immeubles anciens et aux résidences récentes ?",
      answer:
        "Absolument. Nos protocoles tiennent compte des spécificités des bâtiments : moquettes anciennes nécessitant un nettoyage doux, parkings souterrains avec revêtements sensibles, ou balcons en bois composite. Nous utilisons des produits et méthodes adaptés pour préserver les surfaces sans compromettre l’efficacité."
    }
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: ""
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES (base Gemini + bullet reporting)
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Nettoyage par injection-extraction des moquettes de halls, paliers et bureaux à Neuilly-sur-Marne, pour les copropriétés, les entreprises et les particuliers.",
      whyUsBullets: [
        "Expertise technique de la fibre : diagnostic précis pour choisir la méthode la plus sûre tout en éliminant les salissures profondément incrustées.",
        "Matériel haute performance : injecteurs-extracteurs professionnels pour un taux d’humidité résiduelle faible et un séchage accéléré.",
        "Intervention discrète et organisée : planification avec le syndic pour limiter les perturbations dans les immeubles collectifs.",
        "Hygiène et santé : élimination des taches, des acariens, de la poussière et des odeurs incrustées, contribuant à la qualité de l’air intérieur.",
        "Suivi transparent : comptes rendus et, si souhaité, photos avant/après pour le conseil syndical."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les moquettes des parties communes sont constamment mises à rude épreuve. Le trafic piéton en provenance des gares de proximité (RER A de Neuilly-Plaisance, RER E de Chelles-Gagny) ou des grands axes de circulation (RN 34) dépose quotidiennement boue, poussières fines et polluants.</p>
<p>Cet encrassement nuit à l’esthétique du hall, première image de la résidence, et retient allergènes, poussière et bactéries, impactant l’hygiène globale du bâtiment. Un nettoyage régulier est indispensable pour prolonger la durée de vie de la moquette et garantir un air sain aux habitants des logements collectifs.</p>`,
      uniqueDeepDive: `<p><strong>Diagnostic sur place :</strong> examen du type de moquette (aiguilletée, velours, dalles, etc.), évaluation du niveau d’encrassement général, identification des taches (graisse, café, urine, etc.) et prise en compte des contraintes d’accès (ascenseur, escaliers, halls donnant sur rue).</p>
<p><strong>Préparation et protections :</strong> balisage systématique de la zone d’intervention, protection des bas de murs, plinthes et angles avec des bâches ou rubans, organisation par cage d’escalier ou par étage pour minimiser la gêne.</p>
<p><strong>Méthode principale – injection-extraction :</strong> application d’une solution nettoyante professionnelle adaptée à la fibre. Le matériel injecte une eau souvent chaude et un produit détergent, puis aspire immédiatement l’eau sale en profondeur, avec plusieurs passes sur les zones les plus sollicitées (halls de copropriétés, abords d’ascenseurs).</p>
<p><strong>Gestion de l’humidité et du séchage :</strong> extraction maximisée pour laisser la moquette la moins humide possible, aération des espaces et indication d’un délai typique de séchage de quelques heures avant rétablissement complet des circulations.</p>
<p><strong>Prise en compte des contraintes locales :</strong> adaptation des horaires pour les halls très fréquentés (par exemple autour du centre commercial du Baobab ou du centre-ville) et recommandations de fréquence (tous les 12 à 18 mois pour les résidences très fréquentées).</p>`,
      specificChallenges: [
        "Gestion de l’entrée permanente de salissures dans les halls situés à proximité des grands axes routiers (RN 34) ou des arrêts de bus.",
        "Nécessité de séchage rapide dans les immeubles de forte densité près du centre-ville pour ne pas bloquer les résidents.",
        "Traitement spécifique des taches organiques (boissons, graisses) et des résidus tenaces fréquents dans les parties communes.",
        "Organisation des interventions dans des cages d’escalier parfois étroites ou uniques, imposant un phasage précis."
      ],
      faqAdditions: [
        {
          question:
            "La méthode d’injection-extraction est-elle adaptée à toutes les moquettes des copropriétés de Neuilly-sur-Marne ?",
          answer:
            "Oui, elle convient à la majorité des moquettes et tapis utilisés en parties communes ou en bureaux. Pour les fibres délicates ou anciennes, nous ajustons la pression et la température de l’eau après un test de résistance initial afin de garantir la sécurité et le résultat."
        },
        {
          question:
            "Combien de temps la moquette est-elle inutilisable après votre nettoyage ?",
          answer:
            "Grâce à la puissance de nos aspirateurs d’extraction, le temps de séchage est réduit. En fonction de l’aération et de l’humidité du bâtiment, la moquette est généralement sèche et réutilisable dans un délai de 2 à 5 heures, ce que nous confirmons au syndic en fin de chantier."
        },
        {
          question:
            "Peut-on enlever les taches anciennes ou très incrustées sur les moquettes des paliers ?",
          answer:
            "Notre protocole inclut un pré-traitement ciblé des taches tenaces avec des détachants professionnels. Si une tache est vraiment ancienne et a altéré la fibre, nous maximisons la réduction, mais dans la grande majorité des cas l’amélioration est très nette."
        },
        {
          question:
            "Comment organisez-vous l’intervention pour ne pas bloquer l’accès des résidents de la copropriété ?",
          answer:
            "Nous travaillons en coordination avec le syndic ou le gardien et mettons en place un balisage visible. Lorsque c’est possible, nous intervenons par demi-étages ou par paliers successifs, ou durant les heures de moindre affluence, pour maintenir en permanence une voie de circulation sécurisée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS (base Gemini)
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens à Neuilly-sur-Marne : élimination des taches d’huile, traces de pneumatiques et salissures accumulées pour copropriétés et entreprises.",
      whyUsBullets: [
        "Maîtrise environnementale : gestion rigoureuse des eaux souillées, essentielle près de la Marne et du canal de Chelles.",
        "Sécurité accrue : élimination des dépôts de graisse et d’huile qui rendent les sols glissants et augmentent le risque d’accidents.",
        "Matériel adapté : autolaveuses industrielles et haute pression à eau chaude pour traiter rapidement les grandes surfaces.",
        "Intervention planifiée : chantier organisé avec les syndics ou gestionnaires pour minimiser la gêne liée au déplacement des véhicules.",
        "Visibilité renforcée : marquages et sols plus lisibles pour une meilleure perception de sécurité par les usagers."
      ],
      uniqueIntro: `<p>Les parkings, qu’ils soient souterrains ou aériens, sont des espaces essentiels pour l’hygiène et la sécurité des résidences et des entreprises à Neuilly-sur-Marne. L’accumulation d’huiles, de graisses, d’hydrocarbures et de poussières fines, notamment près des axes RN 34 et RN 370, rend les sols glissants, dégage de mauvaises odeurs et détériore les revêtements.</p>
<p>Dans les grands ensembles (par exemple autour de Ville-Évrard ou des 24-Arpents), un manque d’entretien impacte directement la qualité de l’environnement immobilier et la perception des résidents. Un décrassage régulier est essentiel pour l’image, mais aussi pour prévenir les risques d’incendie (accumulation de débris) et les accidents.</p>`,
      uniqueDeepDive: `<p><strong>Visite de diagnostic :</strong> analyse du revêtement (béton brut, peinture, résine), identification des zones critiques (taches d’huile lourdes, rampes), vérification du système d’évacuation des eaux et évaluation de la logistique (hauteur sous plafond, contraintes horaires, accès véhicules).</p>
<p><strong>Préparation et balisage :</strong> balayage mécanique ou manuel pour dégager les gros déchets, mise en place d’un balisage clair et organisation du chantier par zones successives pour permettre la rotation des véhicules.</p>
<p><strong>Méthode principale :</strong></p>
<ul>
  <li><strong>Autolaveuse professionnelle :</strong> brossage intensif des sols avec un détergent dégraissant adapté, aspiration immédiate des eaux usées pour un résultat sans traces.</li>
  <li><strong>Haute pression ciblée :</strong> traitement des taches tenaces (huile, graisse) et des zones difficiles d’accès (pieds de murs, angles, zones sous les tuyaux) avec de l’eau chaude et des dégraissants puissants.</li>
</ul>
<p><strong>Gestion stricte des eaux de lavage :</strong> récupération des eaux souillées par les hydrocarbures via l’autolaveuse ou des systèmes d’aspiration, évacuation vers le réseau d’eaux usées ou vers une filière dédiée selon le niveau de contamination, en conformité avec la réglementation locale.</p>
<p><strong>Finitions :</strong> attention particulière aux rampes, aux évacuations et aux marquages au sol, avec recommandations de fréquence (une à deux fois par an pour les parkings très exposés).</p>`,
      specificChallenges: [
        "Gestion du volume d’eaux sales et de la présence d’hydrocarbures, imposant parfois une filière de traitement spécifique.",
        "Nettoyage des rampes très encrassées par les résidus de freinage et les graisses, sans abîmer le revêtement.",
        "Organisation du travail en zones occupées, avec rotation des véhicules et interventions en horaires décalés si nécessaire.",
        "Forte présence de poussières fines liée à la proximité des grands axes (RN 34), s’incrustant dans les bétons non peints."
      ],
      faqAdditions: [
        {
          question:
            "Vos produits dégraissants sont-ils agressifs pour les revêtements en résine ou pour les marquages au sol du parking ?",
          answer:
            "Non. Nous utilisons des dégraissants professionnels à pH contrôlé, conçus pour être efficaces sur les taches d’hydrocarbures tout en préservant les résines, peintures et marquages. Le diagnostic initial nous permet de choisir la chimie la plus adaptée."
        },
        {
          question:
            "Comment assurez-vous la gestion des véhicules pendant le nettoyage d’un parking complet de copropriété ?",
          answer:
            "Nous travaillons par zones définies. En amont, le gestionnaire informe les résidents du déplacement des véhicules. Nous nettoyons une zone complète, la balisons et la rendons accessible avant de passer à la suivante, garantissant un accès partiel et continu."
        },
        {
          question:
            "Le nettoyage par autolaveuse permet-il vraiment d’éliminer les traces d’huile anciennes ?",
          answer:
            "L’autolaveuse, combinée à l’action mécanique des brosses et à nos dégraissants à eau chaude, élimine la majorité des taches d’huile. Pour les taches très anciennes incrustées dans le béton poreux, nous appliquons un pré-traitement spécifique et un brossage manuel pour maximiser le résultat."
        },
        {
          question:
            "Quelle est la durée d’une intervention typique pour le nettoyage d’un niveau de parking à Neuilly-sur-Marne ?",
          answer:
            "La durée dépend de la surface et du niveau d’encrassement. En moyenne, le décrassage complet d’un niveau standard prend entre 4 et 8 heures, incluant balayage, dégraissage et aspiration des eaux usées."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS (Hors fientes) – texte Mistral
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Un balcon ou une terrasse impeccable, sans traces de poussière, de mousse ou de graisse, pour profiter pleinement de votre extérieur à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Expertise locale : connaissance des balcons à Neuilly-sur-Marne, exposés à la pollution, aux arbres et aux intempéries.",
        "Maîtrise technique : produits adaptés à chaque support, pression contrôlée pour préserver joints et carrelage.",
        "Organisation optimisée : protection des accès, gestion de l’eau et intervention aux horaires les moins gênants.",
        "Suivi personnalisé : conseils d’entretien post-nettoyage pour préserver la propreté plus longtemps."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les balcons et terrasses subissent les agressions quotidiennes de la pollution, des dépôts verts (mousses, lichens), des poussières fines et des résidus de terre apportés par le vent ou les plantes. Les occupants constatent souvent des joints noircis, des traces d’eau stagnante, des dépôts de graisse après un barbecue ou une couche de poussière collante qui rend l’espace peu accueillant.</p>
<p>Les balcons orientés vers les axes RN 34 ou RN370, ou situés près du parc de la Haute-Île, sont particulièrement exposés aux saletés et aux feuilles mortes.</p>
<p>Résultat : un espace extérieur abandonné, difficile à nettoyer soi-même, et qui donne une impression de négligence. Pourtant, un nettoyage professionnel permet de retrouver un balcon propre, sécurisé et agréable, où l’on a envie de passer du temps, que ce soit pour un café le matin ou un dîner en soirée.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par la protection de votre porte-fenêtre, des menuiseries et des murs mitoyens avec des bâches et des rubans adhésifs. Nous déplaçons ou protégeons les meubles, les plantes et les objets fragiles avant d’enlever manuellement les gros dépôts (feuilles, terre, résidus de jardinières).</p>
<p>Nous appliquons ensuite un produit nettoyant adapté au support (carrelage, béton, bois composite ou dalles) et brossons méthodiquement les surfaces, en insistant sur les joints, les angles et les garde-corps souvent négligés.</p>
<p>Pour les sols très encrassés, nous utilisons une pression contrôlée, jamais agressive pour les joints, et veillons à diriger l’eau vers les évacuations pour éviter les coulures chez les voisins du dessous. À Neuilly-sur-Marne, nous adaptons nos méthodes aux balcons des résidences anciennes comme aux terrasses des immeubles récents, en respectant les contraintes d’accès et les horaires pour limiter les nuisances sonores.</p>
<p>Après l’intervention, nous conseillons un séchage de 2 à 4 heures avant de réutiliser l’espace, et fournissons des astuces pour un entretien simple (balayage régulier, produits doux).</p>`,
      specificChallenges: [
        "Balcons proches des axes RN 34/RN370 ou du parc de la Haute-Île accumulant poussière fine et dépôts verts, nécessitant un nettoyage plus fréquent.",
        "Joints très encrassés et garde-corps en métal ou en verre demandant des produits spécifiques et un brossage minutieux.",
        "Gestion de l’eau cruciale pour éviter les coulures sur les façades ou chez les voisins du dessous.",
        "Créneaux d’intervention à adapter aux horaires de présence des résidents et aux règles de copropriété."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage haute pression abîme le carrelage ou les joints de mon balcon ?",
          answer:
            "Non, nous utilisons une pression douce et adaptée à la nature de votre sol (carrelage, béton, bois). Nos techniciens testent toujours la pression sur une zone discrète avant de traiter l’ensemble, pour éviter tout dommage aux joints ou aux dalles."
        },
        {
          question:
            "Comment évitez-vous que l’eau ne coule chez mes voisins ou sur la façade ?",
          answer:
            "Nous dirigeons systématiquement le rinçage vers les évacuations prévues et utilisons des raclettes ou des chiffons pour récupérer l’excédent d’eau. Si nécessaire, nous installons des bâches de protection sur les parties sensibles."
        },
        {
          question:
            "Les produits utilisés sont-ils sans danger pour mes plantes ou mes animaux ?",
          answer:
            "Oui, nous privilégions des produits biodégradables et sans toxiques persistants. Nous rinçons abondamment après application et pouvons adapter les produits si vous avez des plantes ou des animaux sensibles."
        },
        {
          question:
            "Combien de temps faut-il pour que mon balcon soit sec et réutilisable ?",
          answer:
            "Le séchage complet prend généralement 2 à 4 heures, selon l’ensoleillement et la ventilation. Nous vous conseillons d’attendre ce délai avant de replacer vos meubles ou de marcher sur les surfaces nettoyées."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES – texte Mistral
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Un balcon entièrement désinfecté, sans trace de fientes ni odeur, sécurisé et de nouveau utilisable en toute tranquillité à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Expertise locale : connaissance des zones à risque à Neuilly-sur-Marne (parcs, immeubles anciens, balcons en étage).",
        "Maîtrise technique : protocole sécurisé, produits désinfectants homologués et matériel adapté aux surfaces contaminées.",
        "Organisation rigoureuse : intervention discrète, respect des voisins et gestion des accès en étage.",
        "Suivi transparent : conseils post-intervention pour éviter les récidives et maintenir un balcon sain."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les balcons et loggias exposés aux pigeons se retrouvent rapidement recouverts de fientes, générant des odeurs persistantes, des risques sanitaires et une impossibilité d’utiliser l’espace. Les occupants subissent cette nuisance au quotidien, avec des tensions possibles avec les voisins ou la copropriété, surtout dans les quartiers proches des parcs comme la Haute-Île ou des immeubles à corniches propices aux nids.</p>
<p>Les fientes sèches, en plus d’être inesthétiques, peuvent transmettre des maladies et corroder les supports (peinture, béton, métal). La présence importante de pigeons dans la ville, attirés par les arbres et les toits plats, aggrave le problème. Un nettoyage et une désinfection professionnels sont indispensables pour éliminer les risques, restaurer l’hygiène et retrouver un balcon sain.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par la mise en place d’équipements de protection individuelle (combinaison, gants, masque FFP2, lunettes) et le confinement de la zone avec des bâches pour éviter toute dispersion de poussières contaminées. Nous humidifions d’abord les fientes sèches pour limiter les particules en suspension, puis nous procédons au ramassage manuel des déjections et des nids, conditionnés dans des sacs étanches spécialement prévus pour les déchets contaminés.</p>
<p>Le nettoyage des surfaces (sol, garde-corps, murs) est réalisé avec un produit détergent adapté, suivi d’une désinfection complète à l’aide d’un virucide/bactéricide homologué, avec respect strict du temps de contact pour une efficacité maximale. Nous rinçons ensuite les surfaces et aérons le balcon avant de le rendre accessible.</p>
<p>À Neuilly-sur-Marne, nous recommandons un délai de 24 heures avant réutilisation et pouvons conseiller et installer des solutions de dissuasion (picots, fils tendus) pour limiter les retours de pigeons.</p>`,
      specificChallenges: [
        "Balcons situés près du parc de la Haute-Île ou des grands arbres particulièrement exposés aux fientes de pigeons.",
        "Fientes sèches et nids en hauteur nécessitant un accès sécurisé et une manipulation prudente pour éviter les poussières contaminées.",
        "Supports corrodés (peinture écaillée, béton poreux) demandant un traitement spécifique pour éviter d’aggraver les dégâts.",
        "Évacuation des déchets contaminés gérée par nos équipe, afin de vous garantir un haut niveau de sécurité sanitaire."
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi est-il dangereux de nettoyer soi-même un balcon souillé par des fientes de pigeons ?",
          answer:
            "Les fientes sèches libèrent des poussières contaminées par des bactéries et champignons potentiellement dangereux pour les voies respiratoires. Nos techniciens sont équipés d’EPI et formés pour intervenir sans risque, avec des produits désinfectants adaptés."
        },
        {
          question:
            "Les produits utilisés sont-ils sans danger pour les habitants et les animaux après séchage ?",
          answer:
            "Oui, nous utilisons des désinfectants homologués, sans résidus toxiques après séchage. Nous rinçons abondamment les surfaces et aérons le balcon pour garantir un environnement sain."
        },
        {
          question:
            "Les fientes peuvent-elles abîmer durablement mon balcon (peinture, béton) ?",
          answer:
            "Oui, l’acidité des fientes corrode les peintures, le métal et fragilise le béton à long terme. Notre intervention inclut un nettoyage et une désinfection qui limitent ces dégâts, et nous pouvons conseiller des protections supplémentaires si nécessaire."
        },
        {
          question:
            "Que deviennent les fientes et les nids après l’intervention ?",
          answer:
            "Nous ne laissons rien sur place. Les déchets sont conditionnés dans des sacs hermétiques et emportés par nos équipes, garantissant une hygiène totale pour votre résidence.",
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS – texte Mistral
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Des canapés, tapis et matelas profondément nettoyés, sans taches ni odeurs, pour un intérieur sain et agréable à vivre à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Expertise locale : connaissance des logements à Neuilly-sur-Marne, souvent occupés par des familles avec des animaux.",
        "Maîtrise technique : méthode d’injection-extraction et produits adaptés à chaque type de textile.",
        "Organisation flexible : interventions aux horaires qui vous conviennent, avec un matériel silencieux et peu encombrant.",
        "Suivi personnalisé : conseils pour entretenir vos textiles et éviter les salissures récurrentes."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les canapés, tapis et matelas subissent les aléas du quotidien : taches de nourriture, traces de boissons, poils d’animaux, poussière accumulée et acariens. Les familles avec enfants ou animaux savent à quel point ces textiles se salissent rapidement, malgré un entretien régulier.</p>
<p>Les taches tenaces, les odeurs persistantes et les allergènes invisibles rendent ces espaces moins accueillants et peuvent même provoquer des gênes respiratoires.</p>
<p>Un nettoyage professionnel permet d’éliminer en profondeur les salissures, les allergènes et les bactéries, redonnant fraîcheur et confort à votre intérieur. Que ce soit pour un salon souvent utilisé, une chambre ou une salle d’attente, un traitement adapté restaure l’hygiène et prolonge la durée de vie de vos textiles.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic précis du textile (coton, laine, synthétique, velours, cuir) et des taches (graisse, vin, urine, boue). Nous appliquons un pré-traitement ciblé sur les zones les plus touchées, avec des produits enzymatiques pour les taches organiques ou des détachants adaptés aux fibres.</p>
<p>Le nettoyage s’effectue ensuite par injection-extraction à l’eau, une méthode qui pénètre en profondeur pour extraire saletés et humidité, sans agresser le tissu.</p>
<p>À Neuilly-sur-Marne, nous adaptons notre matériel aux contraintes de votre logement : espace réduit, accès difficile ou besoin de discrétion. Nous veillons à un séchage optimal en aérant la pièce et en utilisant des extracteurs pour limiter l’humidité résiduelle.</p>
<p>Après l’intervention, nous vous conseillons sur l’entretien quotidien (aspirateur régulier, aération, protection contre les taches) pour préserver la propreté plus longtemps.</p>`,
      specificChallenges: [
        "Logements avec enfants ou animaux à Neuilly-sur-Marne nécessitant un nettoyage régulier pour éliminer poils, taches et acariens.",
        "Taches organiques (urine, nourriture) et odeurs tenaces demandant des produits spécifiques et un temps de pose adapté.",
        "Pièces peu ventilées ou humides prolongeant le séchage, nécessitant une attention particulière pour éviter les moisissures.",
        "Tissus fragiles (velours, soie) ou épais (tapis à poils longs) exigeant souvent un nettoyage à sec pour un résultat optimal."
      ],
      faqAdditions: [
        {
          question:
            "Votre nettoyage est-il efficace contre les acariens et les allergènes ?",
          answer:
            "Oui, notre méthode d’injection-extraction permet de réduire fortement la présence d’acariens et d’allergènes présents dans les tissus. Nous utilisons des produits adaptés et un rinçage approfondi pour un résultat durable, idéal pour les personnes sensibles."
        },
        {
          question:
            "Peut-on vraiment enlever les taches et odeurs d’urine sur un matelas ou un canapé ?",
          answer:
            "Oui, grâce à des produits enzymatiques qui décomposent les résidus organiques. Nous traitons la tache en profondeur et neutralisons les odeurs, même anciennes, pour retrouver un textile plus sain et agréable."
        },
        {
          question:
            "Combien de temps faut-il pour que mon canapé ou tapis soit sec après l’intervention ?",
          answer:
            "Comptez une demi-journée en moyenne. L'extraction mécanique retire le plus gros de l'eau, mais une ventilation naturelle reste indispensable pour sécher les fibres à cœur en quelques heures."
        },
        {
          question:
            "Dois-je préparer quelque chose avant votre passage ?",
          answer:
            "Il suffit de dégager les objets fragiles ou encombrants autour du canapé ou du tapis. Nous nous chargeons du reste : protection des sols, déplacement des petits meubles si nécessaire et remise en place après nettoyage."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;
