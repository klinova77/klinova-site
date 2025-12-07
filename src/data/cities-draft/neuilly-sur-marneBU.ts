import type { City } from "~/types/geo";

const city: City = {
  name: "Neuilly-sur-Marne",
  slug: "neuilly-sur-marne",
  postalCodes: ["93330"],

  customDescription:
    "Neuilly-sur-Marne, desservie par les axes RN34 et RN370 et proche de la gare RER A (Neuilly-Plaisance), concentre une forte densité de copropriétés et de résidences. L’entretien des moquettes dans les halls, des parkings souterrains ou aériens, et des balcons exposés aux intempéries ou aux fientes de pigeons y est une priorité pour préserver la qualité des espaces partagés et privés.",

  hubIntro: `<p>À Neuilly-sur-Marne, Klinova accompagne les syndics de copropriété, gestionnaires d’immeubles et professionnels dans la maintenance globale de leurs espaces. Notre approche repose sur une connaissance fine des contraintes locales : densité des résidences, circulation intense près des axes routiers, et exigences accrues en matière d’hygiène et de propreté.</p>
<p>Nous intervenons avec des protocoles éprouvés, adaptés aux spécificités de la ville, pour garantir un cadre de vie irréprochable. Notre partenariat s’appuie sur une réactivité optimisée, un reporting transparent et une gestion rigoureuse des accès sécurisés (Vigik, badges).</p>
<ul>
  <li>Gestion globale : moquettes, parkings, balcons et textiles, avec des méthodes adaptées à chaque surface et typologie de bâtiment.</li>
  <li>Proximité opérationnelle : équipes basées en Île-de-France pour des interventions rapides, même en urgence (sinistres, fins de chantier).</li>
  <li>Respect des contraintes locales : stationnement maîtrisé, horaires adaptés aux résidents et gestion des déchets conformément aux réglementations.</li>
  <li>Partenariat durable : suivi personnalisé pour les syndics et gestionnaires, avec des conseils d’entretien préventif.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement accéléré des parkings souterrains et aériens, notamment près des axes RN34/RN370, dû aux dépôts d’hydrocarbures, poussières fines et feuilles mortes accumulées par le vent et la circulation intense.",
    "Balcons et terrasses exposés aux fientes de pigeons, surtout dans les quartiers densément bâtis près de la Marne ou des parcs (Haute-Île, Croissant-Vert), nécessitant des protocoles de désinfection rigoureux et une gestion des déchets contaminés.",
    "Moquettes des halls d’immeubles et couloirs des copropriétés soumises à un fort passage, avec des taches récurrentes (boues, traces de chaussures) et un besoin de séchage rapide pour éviter les odeurs ou moisissures.",
    "Contraintes logistiques pour les interventions : stationnement limité en centre-ville, horaires d’accès restreints pour les résidences sécurisées, et coordination avec les gestionnaires pour les immeubles équipés de systèmes Vigik."
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis"
  },

  nearbyCities: [
    "gagny",
    "gournay-sur-marne",
    "neuilly-plaisance",
    "noisy-le-grand",
    "bry-sur-marne",
    "villemomble"
  ],

  districts: [
    "Centre-ville",
    "Quartier de la Haute-Île",
    "Quartier du Croissant-Vert",
    "Quartier de l’Avenir",
    "Quartier des 24 Arpents",
    "Quartier de la Maltournée",
    "Quartier des Fauvettes",
    "Quartier de Ville-Évrard",
    "Quartier de Maison-Blanche"
  ],

  landmarks: [
    "Mairie de Neuilly-sur-Marne",
    "Parc départemental de la Haute-Île",
    "Église Saint-Baudile",
    "Centre commercial du Baobab",
    "Château de Ville-Évrard",
    "Bords de Marne et canal de Chelles"
  ],

  faq: [
    {
      question:
        "Quels sont vos délais d’intervention pour un devis ou une urgence à Neuilly-sur-Marne ?",
      answer:
        "Nous garantissons un déplacement sous 48h pour un devis gratuit, et une intervention en urgence sous 24h pour les sinistres (inondations, salissures majeures). Nos techniciens sont basés en Île-de-France et connaissent les axes RN34/RN370 pour limiter les retards liés au trafic."
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
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Des halls et escaliers de copropriété impeccables, sans traces ni odeurs, pour une image valorisante de votre immeuble à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Expertise locale : connaissance des copropriétés de Neuilly-sur-Marne, des quartiers densément fréquentés et des contraintes liées aux axes routiers.",
        "Maîtrise technique : matériel professionnel d’injection-extraction et produits adaptés pour un résultat durable sans résidus.",
        "Organisation optimisée : interventions planifiées pour limiter la gêne, avec gestion des accès sécurisés (Vigik, badges).",
        "Suivi transparent : compte-rendu détaillé pour le syndic, incluant photos avant/après et recommandations d’entretien."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les moquettes des halls, cages d’escalier et couloirs subissent un encrassement quotidien : traces de chaussures, poussières fines, taches tenaces et ternissement progressif. Les résidents et visiteurs perçoivent rapidement ces signes de négligence, ce qui impacte l’image de l’immeuble et le confort des occupants.</p>
<p>Les syndics et gestionnaires savent que des moquettes mal entretenues donnent une impression de laisser-aller, surtout dans les quartiers densément fréquentés comme ceux près des gares RER A (Neuilly-Plaisance) ou des axes RN34/RN370.</p>
<p>Les copropriétés anciennes, avec leurs escaliers étroits et leurs halls ouverts sur rue, accumulent davantage de saletés, tandis que les résidences récentes, souvent équipées de moquettes claires, révèlent plus rapidement les salissures. Un nettoyage professionnel régulier permet de restaurer l’aspect d’origine, d’éliminer les allergènes et de prolonger la durée de vie des revêtements.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic précis : état général de la moquette, nature des taches (graisse, boue, traces organiques) et contraintes d’accès (escaliers étroits, ascenseurs, horaires d’occupation). Nous protégeons systématiquement les bas de murs, les plinthes et les angles avec des films et rubans adaptés, et organisons le balisage pour limiter la gêne des résidents.</p>
<p>La méthode principale repose sur le nettoyage par injection-extraction à l’eau, avec des passes multiples sur les zones de fort passage (devant les boîtes aux lettres, les portes d’entrée, les paliers). Nous utilisons des produits adaptés aux fibres et aux types de salissures, et veillons à une extraction maximale de l’humidité pour un séchage rapide, généralement en 2 à 4 heures.</p>
<p>À Neuilly-sur-Marne, nous adaptons nos protocoles aux immeubles anciens, souvent dotés de moquettes épaisses ou fragiles, et aux résidences récentes, où les revêtements synthétiques nécessitent une attention particulière. Après l’intervention, nous fournissons des conseils d’entretien pour préserver la propreté entre deux nettoyages, avec une fréquence recommandée de 12 à 18 mois selon le trafic.</p>`,
      specificChallenges: [
        "Halls et cages d’escalier des immeubles près des gares RER A et des axes RN34/RN370 soumis à un fort passage, accélérant l’encrassement des moquettes.",
        "Escaliers étroits et paliers nécessitant un matériel compact et une méthode précise pour éviter les coulures ou les zones mal séchées.",
        "Moquettes anciennes, souvent épaisses et fragiles, nécessitant des réglages spécifiques pour éviter tout dommage lors du nettoyage.",
        "Proximité de la Marne et des parcs (Haute-Île) exposant les moquettes à des dépôts de boue et d’humidité, surtout en rez-de-chaussée."
      ],
      faqAdditions: [
        {
          question:
            "Comment gérez-vous les moquettes dans les immeubles avec un fort passage, comme ceux près de la gare RER A ?",
          answer:
            "Nous adaptons notre méthode aux zones de fort trafic en effectuant des passes supplémentaires sur les paliers et les couloirs menant aux entrées. Nos techniciens utilisent des produits anti-traces pour limiter les salissures récurrentes, et nous programmons des interventions en dehors des heures de pointe pour éviter les perturbations."
        },
        {
          question:
            "Intervenez-vous dans les petites copropriétés comme dans les grandes résidences ?",
          answer:
            "Oui, nous intervenons dans tous les types de bâtiments, des petites copropriétés de 10 lots aux grandes résidences de 100 logements. Notre matériel est adapté aux escaliers étroits comme aux larges halls, et nous ajustons nos protocoles en fonction de la taille et de la configuration des espaces."
        },
        {
          question:
            "Est-ce que votre méthode de nettoyage abîme les moquettes anciennes ou fragiles ?",
          answer:
            "Non, nous utilisons des buses et des pressions adaptées pour préserver les fibres, même sur les moquettes anciennes ou épaisses. Nos techniciens testent toujours une zone discrète avant l’intervention et ajustent les paramètres (température, débit) pour éviter tout dommage."
        },
        {
          question:
            "Comment informez-vous les résidents avant une intervention dans les parties communes ?",
          answer:
            "Nous travaillons en coordination avec le syndic pour afficher des avis dans les halls et, si nécessaire, relayer l’information auprès des résidents. Nos équipes interviennent aux horaires les moins gênants et veillent à laisser les accès libres pendant les plages horaires critiques."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking propre, sécurisé et sans traces d’huile ou de poussière, pour un accès fluide et une image irréprochable de votre résidence ou entreprise à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Expertise locale : connaissance des parkings de Neuilly-sur-Marne, des contraintes liées aux axes routiers et aux résidences denses.",
        "Maîtrise technique : autolaveuse et haute pression professionnelle, produits dégraissants adaptés aux revêtements locaux.",
        "Organisation optimisée : intervention par zones, horaires adaptés pour limiter les perturbations et rotation des véhicules.",
        "Suivi transparent : rapport détaillé avec photos avant/après et recommandations pour le syndic ou gestionnaire."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les parkings souterrains et aériens subissent un encrassement constant : poussière noire collante, taches d’huile, marquages au sol effacés, et murs salis par les dépôts de boue et les frottements. Les résidents et visiteurs perçoivent rapidement cette négligence, ce qui génère une impression d’insécurité (risque de glissade, manque de visibilité) et de laisser-aller.</p>
<p>Les parkings situés près des axes RN34 et RN370, ou à proximité des zones commerciales comme le centre du Baobab, sont particulièrement exposés en raison du trafic intense et des dépôts de particules fines.</p>
<p>Les syndics et gestionnaires savent que ces espaces, souvent mal éclairés et peu aérés, nécessitent un entretien rigoureux pour préserver leur fonctionnalité et leur image. Un nettoyage professionnel permet de restaurer la lisibilité des marquages, d’éliminer les risques de glissade et de redonner une impression de propreté et de sécurité aux usagers.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic complet : état du revêtement (béton, peinture, résine), efficacité des siphons, hauteur sous plafond et accès pour les véhicules de nettoyage. Nous préparons le parking en dégageant les déchets grossiers, en balayant mécaniquement les zones accessibles et en organisant une signalisation claire pour sécuriser l’intervention.</p>
<p>Si nécessaire, nous travaillons par zones pour permettre une rotation des véhicules sans bloquer l’accès. La méthode principale combine l’utilisation d’une autolaveuse pour les grandes surfaces et d’un nettoyeur haute pression (eau chaude et dégraissant professionnel) pour les taches tenaces d’huile ou de graisse.</p>
<p>Nous insistons sur les rampes, les pieds de murs et les angles, souvent négligés mais critiques pour l’image globale. La gestion des eaux de lavage est stricte : récupération des eaux usées, évacuation dans les filières adaptées et respect des réglementations locales.</p>
<p>À Neuilly-sur-Marne, nous adaptons nos horaires pour intervenir tôt le matin ou en journée creuse, limitant ainsi la gêne pour les résidents ou les employés. Après l’intervention, nous recommandons un décrassage annuel pour les parkings très exposés, et un entretien intermédiaire par balayage mécanique tous les six mois.</p>`,
      specificChallenges: [
        "Parkings proches des axes RN34 et RN370 accumulant une poussière noire grasse, difficile à éliminer sans matériel adapté.",
        "Rampes étroites et bas plafonds compliquant l’accès des machines, nécessitant un matériel compact et une organisation rigoureuse.",
        "Taches d’huile anciennes, souvent incrustées dans le béton, demandant des produits spécifiques et un temps de contact suffisant.",
        "Ventilation limitée des parkings souterrains imposant une gestion stricte des eaux de lavage pour éviter les odeurs ou l’humidité résiduelle."
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi la poussière noire revient-elle si vite dans les parkings près des axes routiers ?",
          answer:
            "Cette poussière, composée de particules fines et de résidus de pneus, est transportée par les véhicules et se dépose sur les sols. À Neuilly-sur-Marne, la proximité des axes RN34 et RN370 accentue ce phénomène. Un nettoyage régulier avec des produits adaptés limite son accumulation et préserve la propreté plus longtemps."
        },
        {
          question:
            "Faut-il vider entièrement le parking pour le nettoyer ?",
          answer:
            "Non, nous organisons l’intervention par zones pour permettre une rotation des véhicules. Nous travaillons en coordination avec le syndic ou le gestionnaire pour minimiser la gêne, souvent tôt le matin ou en journée calme."
        },
        {
          question:
            "Peut-on vraiment enlever les taches d’huile anciennes incrustées dans le béton ?",
          answer:
            "Les taches récentes s’éliminent facilement, mais les plus anciennes nécessitent un traitement spécifique associant dégraissant puissant et brossage mécanique. Nous restaurons l’aspect du sol autant que possible, même si certaines traces peuvent subsister après des années d’exposition."
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage pour respecter la réglementation ?",
          answer:
            "Nous récupérons les eaux usées grâce à des systèmes adaptés puis les évacuons vers des filières agréées. À Neuilly-sur-Marne, nous respectons scrupuleusement les normes locales pour éviter toute pollution des réseaux."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Un balcon ou une terrasse impeccable, sans traces de poussière, de mousse ou de graisse, pour profiter pleinement de votre extérieur à Neuilly-sur-Marne.",
      whyUsBullets: [
        "Expertise locale : connaissance des balcons à Neuilly-sur-Marne, exposés à la pollution, aux pigeons et aux intempéries.",
        "Maîtrise technique : produits adaptés à chaque support, pression contrôlée pour préserver joints et carrelage.",
        "Organisation optimisée : protection des accès, gestion de l’eau et intervention aux horaires les moins gênants.",
        "Suivi personnalisé : conseils d’entretien post-nettoyage pour préserver la propreté plus longtemps."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les balcons subissent les agressions quotidiennes de la pollution, des dépôts verts (mousses, lichens), des poussières fines et des résidus de terre apportés par le vent ou les plantes. Les occupants constatent souvent des joints noircis, des traces d’eau stagnante, des dépôts de graisse après un barbecue ou une couche de poussière collante qui rend l’espace peu accueillant.</p>
<p>Les balcons orientés vers les axes RN34 ou RN370, ou situés près du parc de la Haute-Île, sont particulièrement exposés aux saletés et aux feuilles mortes.</p>
<p>Résultat : un espace extérieur abandonné, difficile à nettoyer soi-même, et qui donne une impression de négligence. Pourtant, un nettoyage professionnel permet de retrouver un balcon propre, sécurisé et agréable, où l’on a envie de passer du temps, que ce soit pour un café le matin ou un dîner en soirée.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par la protection de votre porte-fenêtre, des menuiseries et des murs mitoyens avec des bâches et des rubans adhésifs. Nous déplaçons ou protégeons les meubles, les plantes et les objets fragiles avant d’enlever manuellement les gros dépôts (feuilles, terre, résidus de jardinières).</p>
<p>Nous appliquons ensuite un produit nettoyant adapté au support (carrelage, béton, bois composite ou dalles) et brossons méthodiquement les surfaces, en insistant sur les joints, les angles et les garde-corps souvent négligés.</p>
<p>Pour les sols très encrassés, nous utilisons une pression contrôlée, jamais agressive pour les joints, et veillons à diriger l’eau vers les évacuations pour éviter les coulures chez les voisins du dessous. À Neuilly-sur-Marne, nous adaptons nos méthodes aux balcons des résidences anciennes comme aux terrasses des immeubles récents, en respectant les contraintes d’accès et les horaires pour limiter les nuisances sonores.</p>
<p>Après l’intervention, nous conseillons un séchage de 2 à 4 heures avant de réutiliser l’espace, et fournissons des astuces pour un entretien simple (balayage régulier, produits doux).</p>`,
      specificChallenges: [
        "Balcons proches des axes RN34/RN370 ou du parc de la Haute-Île accumulant poussière fine et dépôts verts, nécessitant un nettoyage plus fréquent.",
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
    // SERVICE 4 – BALCONS FIENTES
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
<p>À Neuilly-sur-Marne, nous recommandons un délai de 24 heures avant réutilisation et pouvons conseiller des solutions de dissuasion (picots, fils tendus) pour limiter les retours de pigeons. Les déchets sont évacués vers une filière spécialisée, conformément à la réglementation.</p>`,
      specificChallenges: [
        "Balcons situés près du parc de la Haute-Île ou des grands arbres particulièrement exposés aux fientes de pigeons.",
        "Fientes sèches et nids en hauteur nécessitant un accès sécurisé et une manipulation prudente pour éviter les poussières contaminées.",
        "Supports corrodés (peinture écaillée, béton poreux) demandant un traitement spécifique pour éviter d’aggraver les dégâts.",
        "Évacuation des déchets contaminés devant respecter une filière dédiée, distincte des ordures ménagères classiques."
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
            "Les déchets sont conditionnés dans des sacs étanches et évacués vers une filière spécialisée pour les déchets contaminés, conformément à la réglementation. Ils ne sont jamais jetés avec les ordures ménagères."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
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
        "Tissus fragiles (velours, soie) ou épais (tapis à poils longs) exigeant des réglages précis pour un résultat optimal."
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
            "Le séchage prend généralement entre 4 et 8 heures, selon le tissu et l’aération de la pièce. Nous vous conseillons d’attendre ce délai avant de réutiliser le meuble ou de marcher sur le tapis."
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



import type { City } from "~/types/geo";

const city: City = {
  name: "Neuilly-sur-Marne",
  slug: "neuilly-sur-marne",
  postalCodes: ["93330"],

  customDescription:
    "À Neuilly-sur-Marne, la propreté des copropriétés et des locaux professionnels exige une réponse technique. Avec ses grands axes (RN 34, RN 370) et sa proximité avec la Marne, la ville connaît un fort encrassement des moquettes de halls, des parkings souterrains par les hydrocarbures et des balcons par les fientes de pigeons. KLINOVA assure la maintenance et l’assainissement de ces surfaces.",

  hubIntro: `<p>En tant que gestionnaire immobilier ou syndic de copropriété à Neuilly-sur-Marne, vous recherchez un partenaire de propreté capable de garantir l’hygiène et la valorisation de votre patrimoine. KLINOVA apporte une expertise technique éprouvée dans la maintenance immobilière, assurant des interventions ponctuelles ou planifiées. Notre objectif est de maintenir un niveau de propreté irréprochable dans les parties communes, les parkings et les logements de la ville.</p>
<p>Notre approche repose sur un partenariat transparent avec les syndics de copropriété et les entreprises nocéennes. Nous garantissons une mise en œuvre rigoureuse de chaque prestation, de l’état des lieux initial au rapport de fin de chantier, assurant ainsi une gestion globale et simplifiée de vos besoins en propreté spécialisée.</p>
<ul>
  <li><strong>Protocoles d’hygiène certifiés :</strong> méthodes d’injection-extraction, désinfection virucide et équipements professionnels pour une propreté en profondeur et durable, notamment dans les zones à forte densité d’habitation.</li>
  <li><strong>Maîtrise des accès sécurisés :</strong> gestion sécurisée des clés, badges (Vigik) et codes d’accès, avec une communication claire et rapide auprès des gardiens ou du conseil syndical.</li>
  <li><strong>Intervention adaptée au contexte local :</strong> organisation des équipes pour minimiser l’impact des travaux (bruit, circulation) sur les zones résidentielles denses et à proximité des grands axes de Neuilly-sur-Marne.</li>
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
    "gagny",
    "gournay-sur-marne",
    "neuilly-plaisance",
    "noisy-le-grand",
    "bry-sur-marne",
    "villemomble"
  ],

  districts: [
    "Les 24-Arpents",
    "La Maltournée",
    "L’Épi d’or",
    "Le Pré fleuri",
    "Les Verdoyants",
    "La Guette",
    "Les Fauvettes",
    "Les Enfers",
    "L’Avenir"
  ],

  landmarks: [
    "Mairie de Neuilly-sur-Marne",
    "Parc départemental de la Haute-Île",
    "Canal de Chelles et bords de Marne",
    "Axes RN 34 et RN 370",
    "Hôpitaux psychiatriques de Ville-Évrard et Maison Blanche",
    "Parc du Croissant-Vert"
  ],

  faq: [
    {
      question:
        "Quelle est votre réactivité pour une intervention urgente, par exemple un dégât des eaux ou une forte contamination par des fientes à Neuilly-sur-Marne ?",
      answer:
        "Grâce à notre organisation en Île-de-France, nous priorisons les demandes urgentes (sinistres, risques sanitaires). Après un diagnostic téléphonique rapide, nous pouvons dépêcher une équipe à Neuilly-sur-Marne sous 24 à 48 heures pour sécuriser la zone et commencer l’assainissement ou le nettoyage en profondeur."
    },
    {
      question:
        "Comment gérez-vous les contraintes de stationnement de votre matériel professionnel dans les quartiers centraux ou près des gares ?",
      answer:
        "Nous intégrons les contraintes de logistique dès la planification du chantier. Nos chefs d’équipe organisent l’acheminement et le stationnement de nos machines (autolaveuses, injecteurs-extracteurs) en minimisant l’impact sur la circulation locale et en assurant le balisage nécessaire en accord avec les règles de la copropriété ou de la ville."
    },
    {
      question:
        "Est-ce qu’un devis pour le nettoyage d’une moquette ou d’un parking souterrain est payant, compte tenu de la distance depuis votre siège ?",
      answer:
        "Non, les déplacements pour l’établissement d’un devis sont entièrement gratuits, qu’il s’agisse de la rénovation d’un parking ou du nettoyage de moquettes de hall dans les résidences de Neuilly-sur-Marne. Nous effectuons toujours une visite de diagnostic sur place pour fournir une évaluation technique précise et sans engagement."
    },
    {
      question:
        "Comment garantissez-vous que le nettoyage de mon canapé ou de mon matelas à domicile n’aura pas d’impact sur ma santé ou celle de ma famille ?",
      answer:
        "Nous utilisons des produits de nettoyage professionnels et biodégradables et, en particulier pour les matelas, des solutions anti-acariens et bactéricides douces. La méthode par injection-extraction garantit l’aspiration maximale de l’eau sale et des résidus, assurant un séchage rapide et un environnement sain après notre départ."
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
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Nettoyage par injection-extraction des moquettes de halls, paliers et bureaux à Neuilly-sur-Marne, pour les copropriétés, les entreprises et les syndics.",
      whyUsBullets: [
        "Expertise technique de la fibre : diagnostic précis pour choisir la méthode la plus sûre tout en éliminant les salissures profondément incrustées.",
        "Matériel haute performance : injecteurs-extracteurs professionnels pour un taux d’humidité résiduelle faible et un séchage accéléré.",
        "Intervention discrète et organisée : planification avec le syndic pour limiter les perturbations dans l’habitat collectif nocéen.",
        "Hygiène et santé : élimination des taches, des acariens, de la poussière et des odeurs incrustées, contribuant à la qualité de l’air intérieur."
      ],
      uniqueIntro: `<p>À Neuilly-sur-Marne, les moquettes des parties communes sont constamment mises à rude épreuve. Le trafic piéton en provenance de gares de proximité de Neuilly-Plaisance ou des grands axes de circulation (RN 34) dépose quotidiennement boue, poussières fines et polluants.</p>
<p>Cet encrassement nuit à l’esthétique du hall, première image de la résidence, et retient allergènes, poussière et bactéries, impactant l’hygiène globale du bâtiment. Un nettoyage régulier est indispensable pour prolonger la durée de vie de la moquette et garantir un air sain aux habitants des logements collectifs.</p>`,
      uniqueDeepDive: `<p><strong>Diagnostic sur place :</strong> examen du type de moquette (aiguilletée, velours, dalles, etc.), évaluation du niveau d’encrassement général, identification des taches (graisse, café, urine, etc.) et prise en compte des contraintes d’accès (ascenseur, escaliers, halls ouverts sur rue).</p>
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
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens à Neuilly-sur-Marne : élimination des taches d’huile, traces de pneumatiques et salissures accumulées pour copropriétés et entreprises.",
      whyUsBullets: [
        "Maîtrise environnementale : gestion rigoureuse des eaux souillées, essentielle près de la Marne et du canal de Chelles.",
        "Sécurité accrue : élimination des dépôts de graisse et d’huile qui rendent les sols glissants et augmentent le risque d’accidents.",
        "Matériel adapté : autolaveuses industrielles et haute pression à eau chaude pour traiter rapidement les grandes surfaces.",
        "Intervention planifiée : chantier organisé avec les syndics ou gestionnaires pour minimiser la gêne liée au déplacement des véhicules."
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
    // SERVICE 3 – BALCONS (HORS FIENTES)
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état et entretien des balcons et terrasses chez les particuliers et en copropriété à Neuilly-sur-Marne : élimination des mousses, dépôts verts et pollution.",
      whyUsBullets: [
        "Résultat sans dommage : maîtrise de la pression et usage de produits non agressifs pour les joints, façades et menuiseries.",
        "Respect de la mitoyenneté : gestion des eaux usées pour éviter de salir les balcons ou fenêtres des voisins.",
        "Expertise polyvalente : traitement de tous types de revêtements (carrelage, bois, béton, pierre, composite).",
        "Intervention chez le particulier et en copropriété : adaptation aux campagnes globales ou aux demandes unitaires."
      ],
      uniqueIntro: `<p>Les balcons et terrasses sont des prolongements essentiels du logement, mais ils sont constamment exposés aux éléments : pluie, pollution atmosphérique liée aux grands axes (RN 34), mousses et dépôts de pollen.</p>
<p>À Neuilly-sur-Marne, les résidences proches du parc départemental de la Haute-Île ou du Croissant-Vert sont particulièrement touchées par les salissures organiques (mousses, lichens), qui rendent les surfaces glissantes et peu accueillantes.</p>
<p>Qu’il s’agisse d’un carrelage, de dalles en béton ou de bois composite, l’accumulation de ces dépôts ternit l’esthétique et peut endommager le revêtement à long terme. Un nettoyage professionnel permet de restaurer la propreté de vos espaces extérieurs privatifs ou collectifs.</p>`,
      uniqueDeepDive: `<p><strong>Protection initiale :</strong> mise en place de bâches pour protéger la porte-fenêtre, les menuiseries, les murs et, si nécessaire, les balcons voisins pour éviter projections et coulures.</p>
<p><strong>Gestion des meubles et objets :</strong> déplacement ou mise en sécurité des jardinières, plantes, mobilier et autres éléments présents sur la terrasse, avec remise en place après intervention.</p>
<p><strong>Enlèvement manuel des gros dépôts :</strong> retrait des feuilles mortes, terre, résidus de jardinières et gros déchets avant tout traitement à l’eau.</p>
<p><strong>Méthode principale :</strong> application d’un produit nettoyant adapté au support (souvent à faible impact environnemental), brossage mécanique ou manuel pour désincruster dépôts verts et pollution, puis rinçage contrôlé. L’utilisation d’un nettoyeur haute pression reste possible, mais toujours à puissance douce pour ne pas agresser joints et revêtements.</p>
<p><strong>Gestion de l’eau :</strong> évacuation strictement dirigée vers les évacuations prévues, ou récupération lorsque celles-ci sont défaillantes, afin d’éviter les coulures sur la façade ou chez les voisins du dessous. Des consignes de séchage et d’aération sont données en fin de prestation.</p>`,
      specificChallenges: [
        "Salissures organiques accrues sur les balcons exposés au nord ou situés près des zones boisées (parc de la Haute-Île).",
        "Revêtements fragiles (supports anciens ou matériaux composites) nécessitant une pression très faible et des produits neutres.",
        "Évacuations d’eau défaillantes provoquant des stagnations et imposant une récupération manuelle ou par aspiration.",
        "Logistique parfois complexe pour le déplacement et la protection de mobilier volumineux et de grandes jardinières."
      ],
      faqAdditions: [
        {
          question:
            "Peut-on utiliser la haute pression sur mon carrelage de balcon sans abîmer les joints ?",
          answer:
            "Oui, mais tout est dans le réglage. Nous utilisons un nettoyeur haute pression de manière très contrôlée, à basse pression et avec des buses adaptées. L’objectif est de décaper la saleté sans dégrader les joints, en particulier sur les terrasses anciennes."
        },
        {
          question:
            "J’ai des meubles de jardin encombrants, devez-vous les déplacer ?",
          answer:
            "Idéalement, nous demandons de libérer autant que possible la zone de travail. Si ce n’est pas possible, nos équipes déplacent et protègent votre mobilier avec soin, puis le remettent en place après le nettoyage."
        },
        {
          question:
            "Le produit anti-mousse que vous utilisez risque-t-il d’endommager mes plantes sur le balcon ?",
          answer:
            "Nous utilisons des produits rincés après leur temps de contact, limitant leur impact. Avant toute application, nous déplaçons ou protégeons les plantes et jardinières avec des bâches pour éviter tout contact direct."
        },
        {
          question:
            "Que faites-vous pour éviter les coulures d’eau sale chez mes voisins du dessous ?",
          answer:
            "Nous dirigeons systématiquement l’eau de lavage et de rinçage vers l’évacuation principale à l’aide de raclettes et de chiffons absorbants. En l’absence d’évacuation fonctionnelle, nous procédons à une récupération manuelle ou par aspiration."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement et nettoyage spécialisé des balcons et terrasses contaminés par les fientes de pigeons à Neuilly-sur-Marne, pour syndics et particuliers.",
      whyUsBullets: [
        "Biosécurité et expertise : protocole complet de gestion des déchets biologiques et de désinfection avec produits homologués.",
        "Neutralisation du risque : traitement ciblé de l’acide urique pour protéger durablement revêtements et structures.",
        "Sécurité des résidents : confinement strict de la zone, limitation des poussières et des coulures pendant l’intervention.",
        "Traçabilité : compte-rendu technique détaillé, utile pour les syndics et les assurances."
      ],
      uniqueIntro: `<p>Les fientes de pigeons ne sont pas qu’un problème esthétique : elles représentent un risque sanitaire sérieux (bactéries, virus, champignons) et sont fortement corrosives pour les carrelages, le bois et les ferronneries des balcons de Neuilly-sur-Marne.</p>
<p>Dans les secteurs proches de la Marne ou des zones de nidification (comme le parc de la Haute-Île), l’accumulation est rapide et dangereuse. Les syndics et les particuliers ont besoin d’une solution qui va au-delà du simple lavage. Un bio-nettoyage professionnel est indispensable pour éliminer ces salissures biologiques, neutraliser les agents pathogènes et restaurer la sécurité et l’hygiène des espaces extérieurs.</p>`,
      uniqueDeepDive: `<p><strong>Sécurisation et équipements de protection :</strong> nos techniciens s’équipent d’EPI complets (masques, gants, combinaisons) et la zone d’intervention est balisée pour prévenir tout risque microbiologique.</p>
<p><strong>Retrait et évacuation :</strong> retrait sécurisé des grosses déjections par raclage et aspiration, conditionnement en double ensachage et évacuation vers une filière de traitement agréée pour les déchets biologiques.</p>
<p><strong>Neutralisation et nettoyage :</strong> application d’un produit neutralisant l’acidité des fientes, puis bio-nettoyage en profondeur des surfaces (sols, rebords, garde-corps) avec un détergent désinfectant professionnel.</p>
<p><strong>Désinfection finale :</strong> désinfection virucide et bactéricide pour neutraliser toute trace résiduelle de germes et restaurer l’hygiène complète de la terrasse ou du balcon.</p>
<p><strong>Gestion de l’eau :</strong> évacuation des eaux usées de manière confinée et contrôlée (aspiration ou récupération), afin d’éviter toute contamination des balcons voisins ou le salissement de la façade.</p>`,
      specificChallenges: [
        "Fientes très acides ayant déjà endommagé ferronneries et joints de carrelage, nécessitant une neutralisation chimique rapide.",
        "Volumes de déjections importants sur les balcons proches de la Marne et des parcs, imposant une filière spécifique pour les déchets contaminés.",
        "Risque de contamination de l’air par les particules sèches lors du nettoyage, imposant le travail en brossage humide et le port d’EPI adaptés.",
        "Accès parfois difficile aux rebords et dessous de garde-corps, zones d’accumulation maximale, demandant un brossage manuel minutieux et une désinfection localisée."
      ],
      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un réel danger pour la santé ?",
          answer:
            "Oui. Les fientes sèches peuvent libérer des spores et des bactéries dangereuses par inhalation. C’est pourquoi nous intervenons toujours avec des équipements de protection individuelle et appliquons un protocole complet de désinfection virucide et bactéricide."
        },
        {
          question:
            "Les odeurs et les taches vont-elles disparaître complètement après l’intervention ?",
          answer:
            "L’odeur est liée à l’acide urique et aux matières organiques. Notre protocole de nettoyage en profondeur, de neutralisation et de désinfection permet d’éliminer les taches et d’assainir la zone, faisant disparaître les odeurs persistantes."
        },
        {
          question:
            "Comment protégez-vous la façade et les balcons voisins pendant le nettoyage ?",
          answer:
            "Nous travaillons en confinement, avec bâchage adapté, et contrôlons rigoureusement le rinçage afin que l’eau sale ne s’écoule ni sur la façade ni sur le balcon inférieur. L’eau contaminée est récupérée par aspiration avant évacuation."
        },
        {
          question:
            "Proposez-vous des solutions pour empêcher les pigeons de revenir sur mon balcon à Neuilly-sur-Marne ?",
          answer:
            "Nous sommes spécialisés dans le nettoyage et l’assainissement. Une fois le balcon propre et désinfecté, nous pouvons vous orienter vers des partenaires experts en installation de systèmes anti-pigeons (pics, filets, câbles tendus)."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Nettoyage et assainissement en profondeur de canapés, tapis et matelas chez les particuliers à Neuilly-sur-Marne : élimination des taches, odeurs, acariens et allergènes.",
      whyUsBullets: [
        "Expertise textile à domicile : maîtrise des différents types de fibres et des réactions aux produits, pour ne pas décolorer ou endommager le mobilier.",
        "Hygiène renforcée : traitement anti-acarien et bactéricide en profondeur pour les matelas, réduisant les sources d’allergies.",
        "Discrétion et rapidité : intervention rapide dans les différents quartiers (Pré fleuri, Épi d’or, etc.) avec un équipement professionnel optimisant le temps de séchage.",
        "Résultat visible et olfactif : élimination des sources d’odeurs et traitement des taches tenaces pour un rendu esthétique maximal."
      ],
      uniqueIntro: `<p>Votre mobilier textile (canapés, tapis, matelas) est un véritable piège à saletés dans votre logement à Neuilly-sur-Marne. Il accumule peaux mortes, poussière, taches accidentelles (nourriture, boissons, encre) et, surtout, des millions d’acariens et de bactéries qui se développent dans les fibres.</p>
<p>Les familles vivant dans des appartements ou près des axes très fréquentés (RN 34) sont particulièrement exposées aux problèmes d’allergies et de mauvaises odeurs liés à cet encrassement invisible. Un simple nettoyage de surface ne suffit pas : un traitement professionnel par injection-extraction est nécessaire pour assainir durablement vos textiles d’ameublement.</p>`,
      uniqueDeepDive: `<p><strong>Diagnostic sur place :</strong> examen minutieux du type de textile (coton, velours, lin, cuir, fibres synthétiques), identification de la nature et de l’ancienneté des taches (graisse, vin, urine, sang, etc.) et évaluation de l’état général du meuble.</p>
<p><strong>Pré-traitement ciblé :</strong> application locale de détachants professionnels sur les taches tenaces. Pour les matelas ou canapés souillés par des fluides corporels, utilisation de détachants enzymatiques pour décomposer la matière organique et neutraliser les odeurs.</p>
<p><strong>Méthode principale – injection-extraction :</strong> injection d’une solution nettoyante tiède, adaptée à la fibre, au cœur du textile, suivie d’une aspiration puissante qui retire l’eau sale, les salissures décollées, les acariens et les résidus de produits.</p>
<p><strong>Adaptation à la fragilité du textile :</strong> réglage spécifique de la pression et du débit d’eau pour les tissus délicats (soie, velours) ou très épais (tapis à poils longs), avec passes supplémentaires d’aspiration si nécessaire.</p>
<p><strong>Gestion du séchage :</strong> extraction maximale de l’humidité et consignes claires données au client (aération, délai avant réutilisation). Dans la plupart des cas, le mobilier est utilisable le soir même.</p>`,
      specificChallenges: [
        "Présence de fibres fragiles (velours, textiles délicats) dans les appartements récents, nécessitant des tests de résistance et des réglages très précis.",
        "Demandes fréquentes d’assainissement de matelas (enfants, animaux), imposant l’usage de détachants enzymatiques et d’une aspiration profonde pour éliminer l’odeur d’urine.",
        "Contraintes d’accès aux logements en étage avec un matériel professionnel parfois volumineux.",
        "Optimisation du temps de séchage dans des logements collectifs où l’aération peut être limitée, notamment en hiver."
      ],
      faqAdditions: [
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir réutiliser mon canapé ou mon matelas après le nettoyage ?",
          answer:
            "Grâce à notre extraction puissante, le séchage est généralement rapide. Votre canapé ou matelas est en général sec en surface en 3 à 6 heures. Nous recommandons de laisser sécher complètement dans la journée, avec une bonne aération, et il est le plus souvent utilisable le soir même."
        },
        {
          question:
            "Le nettoyage par injection-extraction est-il efficace contre les acariens et les allergènes ?",
          answer:
            "Oui, c’est l’une des méthodes les plus efficaces. L’injection d’eau chaude et de produit nettoyant combinée à l’aspiration puissante retire physiquement les acariens, leurs déjections et de nombreux allergènes présents dans le textile."
        },
        {
          question:
            "Puis-je rester dans le logement pendant votre intervention à Neuilly-sur-Marne ?",
          answer:
            "Oui. Nos produits sont non toxiques et adaptés à l’environnement intérieur. L’intervention génère peu de bruit et vous pouvez rester sur place pendant que nous traitons votre canapé ou votre tapis."
        },
        {
          question:
            "Que se passe-t-il si une tache ne part pas après le nettoyage ?",
          answer:
            "Nous garantissons l’élimination ou l’atténuation maximale des taches, à condition que la fibre n’ait pas été irréversiblement altérée (suite à l’usage de produits ménagers inadaptés, par exemple). Si une tache résiste à notre pré-traitement, nous en informons le client avant la fin de l’intervention."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;



