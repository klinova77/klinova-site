// Balises autorisées :
// <p>, <h3>, <ul>, <li>, <strong>, <br>, <p class="mt-4">
// dans hubIntro / uniqueIntro / uniqueDeepDive / faq / faqAdditions

import type { City } from "~/types/geo";

const city: City = {
  name: "Claye-Souilly",
  slug: "claye-souilly",
  postalCodes: ["77410"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  customDescription:
    "Traversée par la RN3 et proche de l'A104, Claye-Souilly combine zones pavillonnaires, résidences récentes et forte activité commerciale. L'entretien régulier des parties communes, des circulations, des parkings et des extérieurs est essentiel pour préserver la qualité du bâti.",

  hubIntro:
    "<p>Pour garantir la propreté des résidences et locaux professionnels à Claye-Souilly, Klinova accompagne syndics et gestionnaires dans l'entretien courant et ponctuel. <strong>Nous assurons un suivi rigoureux</strong> avec un protocole adapté à chaque contexte local, de la zone commerciale aux quartiers résidentiels de Mauperthuis et Voisins.</p>\n<p class=\"mt-4\">Notre approche repose sur la proximité, la planification précise et le reporting systématique. Chaque intervention fait l'objet d'un diagnostic préalable et d'un compte-rendu détaillé transmis au donneur d'ordre, garantissant la traçabilité et la conformité des opérations réalisées.</p>\n<ul>\n  <li><strong>Maintenance préventive et curative</strong> des parties communes pour maintenir l'hygiène et la sécurité.</li>\n  <li><strong>Nettoyage technique des parkings et circulations</strong> avec gestion des eaux et coordination des accès.</li>\n  <li><strong>Entretien des extérieurs</strong> (balcons, terrasses) avec maîtrise stricte de l'eau pour le voisinage.</li>\n  <li><strong>Intervention à domicile</strong> pour les textiles avec séchage accéléré et conseils d'entretien.</li>\n</ul>",

  citySpecificChallenges: [
    "Encrassement rapide des moquettes dans les halls situés près de la zone commerciale et des axes RN3, avec forte circulation de boues et de particules.",
    "Taches d'hydrocarbures et résidus de pneus dans les parkings souterrains des copropriétés récentes du quartier Mauperthuis.",
    "Dépôts verts et mousses sur les balcons des résidences pavillonnaires de Voisins et Souilly en raison de la proximité de la Beuvronne et du canal de l'Ourcq.",
    "Salissures de fientes de pigeons sur les balcons des immeubles proches du centre-ville et des espaces boisés environnants.",
  ],

  districts: [
    "Claye",
    "Souilly",
    "Mauperthuis",
    "Voisins",
    "Bois-Fleuri",
    "Zone commerciale",
    "Victor Hugo",
  ],

  nearbyCities: [
        "villeparisis",
        "lagny-sur-marne",
        "vaires-sur-marne",
        "chelles",
        "montfermeil",
        "torcy",
        "livry-gargan",
        "villepinte",
        "noisiel",
        "gournay-sur-marne"
      ],

  landmarks: [
    "Mairie de Claye-Souilly",
    "Gare de Mitry-Claye",
    "Centre commercial Les Sentiers de Claye-Souilly",
    "Église Saint-Étienne",
    "Canal de l'Ourcq",
    "RN3 (Route Nationale 3)",
  ],

  faq: [
    {
      question:
        "Intervenez-vous rapidement sur Claye-Souilly et les communes voisines ?",
      answer:
        "<p><strong>Oui, Claye-Souilly fait partie de notre zone d'intervention habituelle.</strong> Nous programmons les interventions sous 5 à 10 jours ouvrés pour les demandes classiques, et sous 48 à 72 heures en cas d'urgence technique ou de sinistre, selon disponibilité. Notre proximité avec les axes RN3 et A104 facilite les rotations.</p>",
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés et les badges Vigik dans les copropriétés ?",
      answer:
        "<p><strong>Nous connaissons les systèmes Vigik, digicode et portails automatiques.</strong> Si besoin, nous récupérons les badges en amont ou coordonnons avec le gardien pour organiser l'accès le jour J. Chaque remise de clé ou badge fait l'objet d'un bordereau signé pour garantir la traçabilité.</p>",
    },
    {
      question: "Le déplacement pour devis est-il gratuit à Claye-Souilly ?",
      answer:
        "<p><strong>Oui, le déplacement et le devis sont gratuits,</strong> quelle que soit la prestation envisagée. Nous venons sur place pour évaluer les surfaces, repérer les contraintes d'accès et définir le protocole adapté. Cela permet de chiffrer précisément l'intervention sans approximation.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir tôt le matin ou en soirée pour limiter la gêne ?",
      answer:
        "<p><strong>Oui, nous adaptons nos horaires selon vos contraintes.</strong> Pour les parkings ou les halls d'immeubles très fréquentés, nous privilégions les créneaux matinaux avant 8h ou en fin de journée après 18h. Cette souplesse permet de réduire les nuisances et de sécuriser les zones pendant le séchage.</p>",
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
        "Un nettoyage en profondeur des moquettes redonne clarté et hygiène aux parties communes, valorise l'image de la copropriété et prolonge la durée de vie des revêtements textiles exposés au passage quotidien.",

      whyUsBullets: [
        "Intervention régulière sur les copropriétés de Mauperthuis et les résidences de Souilly.",
        "Matériel d'injection-extraction professionnel assurant une extraction puissante et un séchage rapide.",
        "Organisation par cage ou par étage avec balisage clair pour maintenir les circulations.",
      ],

      uniqueIntro:
        "<p>Les moquettes installées dans les halls d'entrée, les paliers et les cages d'escalier des immeubles de Claye-Souilly subissent un encrassement progressif lié au trafic régulier des résidents, aux apports de boues depuis la RN3 et la zone commerciale, ainsi qu'aux particules fines véhiculées par le vent. Les fibres textiles retiennent la poussière, les traces de pas se marquent aux endroits de passage intense et certaines taches restent visibles malgré l'aspirateur.</p>\n<p class=\"mt-4\">Ce ternissement altère l'apparence des espaces communs et donne une impression de négligence difficile à corriger avec un entretien courant. Pour les syndics et gestionnaires, cet état pose un véritable enjeu d'image lors des AG et peut générer des réclamations. <strong>Un nettoyage technique approfondi restaure la clarté des fibres,</strong> améliore l'hygiène des circulations et valorise immédiatement l'immeuble auprès des résidents et visiteurs.</p>",

      uniqueDeepDive:
        "<h3>1. Repérage et protection des zones</h3>\n<p>Évaluation du type de moquette, du niveau d'encrassement et des contraintes d'accès propres à chaque immeuble. Dans les copropriétés de Mauperthuis ou de Voisins, les cages d'escalier étroites imposent une organisation précise. <strong>Planning par cage ou par étage défini, zones balisées</strong> et bas de murs protégés pour éviter tout contact avec les plinthes peintes.</p>\n\n<h3>2. Injection-extraction ciblée</h3>\n<p>Injection d'une solution nettoyante adaptée au type de fibre, suivie d'une extraction immédiate qui retire l'eau sale et les résidus incrustés. <strong>Les zones de fort passage</strong> (halls ouvrant sur la rue, paliers d'étage) font l'objet de passages supplémentaires. La puissance d'aspiration permet un séchage en quelques heures selon la ventilation.</p>\n\n<h3>3. Contrôle final et recommandations</h3>\n<p>Pour les immeubles anciens, la pression et la température sont ajustées afin de préserver les fibres. Un contrôle visuel final valide l'homogénéité du résultat et la bonne répartition du séchage. <strong>Fréquence recommandée : nettoyage professionnel annuel</strong> pour les zones à fort trafic.</p>",

      specificChallenges: [
        "Encrassement rapide des moquettes dans les halls proches de la zone commerciale et de la RN3, avec apports constants de boues, graviers et particules fines.",
        "Contraintes techniques sur les marches d'escalier où la moquette est tendue et collée, nécessitant une extraction progressive pour éviter toute déformation.",
        "Temps de séchage plus long en rez-de-chaussée des immeubles anciens de Claye et Souilly, en raison d'une ventilation naturelle parfois limitée.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des halls proches de la RN3 ou de la zone commerciale nécessitent-elles un entretien plus fréquent ?",
          answer:
            "<p><strong>Oui, les immeubles situés à proximité des axes routiers subissent des apports constants de salissures.</strong> Les semelles transportent boues, graviers et particules fines. Un nettoyage professionnel annuel maintient une propreté satisfaisante, complété par un aspirateur puissant plusieurs fois par semaine.</p>",
        },
        {
          question:
            "Klinova intervient-il sur les petites copropriétés comme sur les grandes résidences ?",
          answer:
            "<p><strong>Nous intervenons dans les petites copropriétés comme dans les grandes résidences.</strong> La méthode reste identique, seule l'organisation diffère. Une petite copropriété peut être traitée en une matinée, tandis qu'un ensemble plus vaste nécessite une planification par cage sur plusieurs jours.</p>",
        },
        {
          question:
            "Le nettoyage par injection-extraction peut-il abîmer une moquette ancienne ?",
          answer:
            "<p><strong>Non, à condition d'adapter les réglages.</strong> Les moquettes anciennes peuvent présenter des fibres fragilisées. La pression, la température et la quantité de solution sont ajustées pour extraire efficacement sans saturer le textile. Un test préalable sur une zone discrète valide le protocole.</p>",
        },
        {
          question:
            "Comment se déroule l'intervention pour ne pas bloquer les allées et venues des résidents ?",
          answer:
            "<p><strong>L'intervention est organisée par zone ou par étage,</strong> avec un balisage clair des surfaces en cours de séchage. Un passage reste toujours accessible pour rejoindre les logements. Les opérations débutent souvent tôt le matin pour réduire la gêne, avec séchage dans la même journée selon les conditions.</p>",
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
        "Un parking propre et entretenu améliore la sécurité de circulation, renforce l'image de la copropriété et limite l'accumulation de salissures qui dégradent progressivement les revêtements et les marquages au sol.",

      whyUsBullets: [
        "Intervention régulière sur les parkings de Mauperthuis et du centre-ville avec adaptation aux contraintes.",
        "Autolaveuse et haute pression professionnelles pour un nettoyage homogène préservant marquages et peintures.",
        "Organisation par secteur avec rotation concertée pour limiter l'immobilisation des places.",
      ],

      uniqueIntro:
        "<p>Les parkings souterrains et aériens des copropriétés de Claye-Souilly accumulent poussières, traces de pneus, taches d'huile et résidus de boue transportés depuis la zone commerciale ou la RN3. Ces dépôts se concentrent sur les rampes d'accès, les places de stationnement fréquemment occupées et les zones de circulation principale. Le béton noircit, les marquages deviennent illisibles et certaines taches d'hydrocarbures s'incrustent dans la porosité du revêtement.</p>\n<p class=\"mt-4\">Pour les syndics et conseils syndicaux, cet état visible pose un problème d'entretien courant et suscite parfois des réclamations lors des AG. Les résidents se plaignent de salir leurs chaussures, de l'odeur et du manque de clarté. <strong>Un nettoyage structuré par autolaveuse ou haute pression</strong> retire les salissures tenaces, redonne de la clarté aux sols et préserve la pérennité des surfaces, à condition d'une coordination précise pour gérer la rotation des véhicules.</p>",

      uniqueDeepDive:
        "<h3>1. Visite technique et organisation</h3>\n<p>Évaluation du type de revêtement, de l'état des peintures de sol, de la configuration des accès et de la présence d'évacuations d'eau. Nous coordonnons avec le gardien ou le syndic pour organiser la rotation des véhicules par secteur, permettant de libérer progressivement les zones à traiter. <strong>Balayage mécanique ou manuel</strong> pour retirer les déchets volumineux, graviers et feuilles.</p>\n\n<h3>2. Nettoyage mécanique combiné</h3>\n<p>L'autolaveuse combine brossage rotatif et aspiration immédiate des eaux sales pour assurer un nettoyage homogène. Les taches d'huile et traces de pneus font l'objet d'un pré-traitement par dégraissant professionnel avec temps de contact adapté. <strong>Les angles, pieds de murs et zones peu accessibles</strong> sont traités manuellement ou par haute pression réglée.</p>\n\n<h3>3. Gestion des eaux et contrôle</h3>\n<p>La gestion des eaux de lavage respecte les contraintes de chaque site, avec récupération dans les siphons de sol ou évacuation vers le réseau approprié. Un contrôle final vérifie la propreté des sols et l'absence de flaques résiduelles. <strong>Fréquence recommandée : 1 à 2 décrassages annuels</strong> selon le trafic.</p>",

      specificChallenges: [
        "Accumulation rapide de taches d'hydrocarbures dans les parkings proches de la zone commerciale, liée au fort trafic quotidien et au stationnement prolongé.",
        "Accès contraints dans certains parkings souterrains avec rampes étroites ou hauteurs sous plafond réduites, imposant une organisation minutieuse.",
        "Gestion des eaux de lavage dans les copropriétés anciennes nécessitant une récupération adaptée pour éviter l'engorgement des siphons.",
      ],

      faqAdditions: [
        {
          question:
            "Les parkings des résidences situées près de la RN3 nécessitent-ils un entretien plus fréquent ?",
          answer:
            "<p><strong>Oui, la proximité de la RN3 et de la zone commerciale entraîne un apport constant de salissures.</strong> Ces salissures s'accumulent sur les rampes d'accès et les premières places, créant un encrassement visible en quelques mois. Un nettoyage complet une à deux fois par an maintient la propreté générale.</p>",
        },
        {
          question:
            "Klinova intervient-il sur les petits parkings comme sur les grands parkings de copropriété ?",
          answer:
            "<p><strong>Nous intervenons sur des parkings d'une quinzaine de places comme sur des ensembles de plusieurs centaines d'emplacements.</strong> La méthode reste identique, seule l'organisation varie. Un petit parking peut être traité en une demi-journée, tandis qu'un grand ensemble nécessite une planification par secteur sur plusieurs jours.</p>",
        },
        {
          question:
            "Le nettoyage haute pression risque-t-il d'abîmer les marquages au sol ou les peintures murales ?",
          answer:
            "<p><strong>Non, à condition d'adapter correctement la pression et la distance.</strong> Les marquages résistent bien lorsque la pression est maîtrisée. Pour les peintures murales anciennes ou fragilisées, nous privilégions l'autolaveuse ou un nettoyage manuel. Un test préalable sur une zone discrète valide les réglages.</p>",
        },
        {
          question:
            "Comment se déroule l'intervention pour ne pas bloquer l'accès des résidents à leurs véhicules ?",
          answer:
            "<p><strong>L'intervention est organisée par secteur,</strong> selon un planning validé avec le syndic. Les résidents sont informés en amont des zones concernées et des créneaux prévus. Les accès piétons et les issues de secours restent toujours dégagés, et chaque secteur est rouvert progressivement.</p>",
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
        "Un balcon nettoyé retrouve son aspect d'origine, redevient un espace agréable à vivre au quotidien et prolonge la durée de vie des matériaux exposés aux intempéries et aux salissures extérieures.",

      whyUsBullets: [
        "Interventions régulières sur les balcons du centre-ville, du quartier Victor Hugo et de Mauperthuis.",
        "Adaptation précise des méthodes selon carrelage, béton, dalles ou bois composite sans dégradation.",
        "Gestion rigoureuse de l'eau pour éviter toute coulure en façade ou chez les voisins.",
      ],

      uniqueIntro:
        "<p>Les balcons des logements de Claye-Souilly accumulent dépôts verts, traces de terre, résidus de feuilles et poussières fines liées aux axes proches comme la RN3 ou l'A104. Ces salissures sont accentuées par la proximité d'espaces végétalisés et par les zones peu exposées au soleil, notamment dans les immeubles du centre-ville ou du quartier Victor Hugo. Les dalles se ternissent, les joints noircissent, et des mousses ou algues apparaissent progressivement.</p>\n<p class=\"mt-4\">Les garde-corps se couvrent de traces de doigts, de coulures calcaires et de dépôts atmosphériques. Cette dégradation décourage l'usage du balcon, qui pourrait redevenir un véritable espace de détente. Vous finissez par ne plus sortir, votre mobilier reste bâché et votre balcon sert de débarras. <strong>Un nettoyage professionnel permet de retirer les dépôts incrustés,</strong> de redonner de la clarté aux surfaces et de réinvestir pleinement cet espace extérieur sans craindre de salir vêtements ou mobilier.</p>",

      uniqueDeepDive:
        "<h3>1. Repérage et protection</h3>\n<p>Repérage précis des éléments à protéger : porte-fenêtre, menuiseries, murs mitoyens et plantes en pot. Le mobilier est déplacé ou protégé, puis les dépôts de feuilles, terre et débris végétaux sont retirés manuellement. <strong>L'état de l'évacuation du balcon est vérifié</strong> afin d'adapter le débit d'eau et d'éviter tout débordement.</p>\n\n<h3>2. Nettoyage adapté au revêtement</h3>\n<p>Un produit nettoyant adapté au revêtement est appliqué. Les dalles en carrelage, béton ou grès cérame supportent un nettoyage appuyé mais contrôlé, tandis que le bois composite ou les surfaces mates nécessitent une pression modérée. <strong>Le brossage permet de décoller mousses et salissures tenaces,</strong> suivi d'un rinçage maîtrisé orienté vers l'évacuation.</p>\n\n<h3>3. Finitions et conseils</h3>\n<p>Les garde-corps, vitreries et murs mitoyens sont traités séparément avec des produits spécifiques. Le séchage naturel intervient en quelques heures selon l'exposition et la ventilation. <strong>Un nettoyage annuel, idéalement au printemps,</strong> permet de conserver un balcon propre et agréable toute l'année.</p>",

      specificChallenges: [
        "Dépôts verts et mousses sur les balcons peu ensoleillés, notamment dans les immeubles du centre-ville et à proximité des zones végétalisées.",
        "Supports sensibles comme le bois composite ou les carrelages mats nécessitant un réglage précis de la pression pour éviter toute altération.",
        "Gestion délicate de l'eau dans les immeubles anciens où les évacuations de balcon sont parfois partiellement obstruées.",
      ],

      faqAdditions: [
        {
          question:
            "Les balcons situés près des espaces boisés ou des axes routiers nécessitent-ils un entretien plus fréquent ?",
          answer:
            "<p><strong>Oui, la proximité d'espaces végétalisés, du canal de l'Ourcq ou des axes comme la RN3 favorise les dépôts.</strong> Ces matières retiennent l'humidité et accélèrent l'apparition de mousses sur les surfaces peu exposées au soleil. Un nettoyage annuel permet de retrouver un balcon propre avant la belle saison.</p>",
        },
        {
          question:
            "Klinova intervient-il aussi bien sur tous types de balcons ?",
          answer:
            "<p><strong>Oui, nous intervenons sur tous types de balcons</strong> qu'il s'agisse de petits espaces en immeuble collectif ou de surfaces plus importantes. La méthode est systématiquement adaptée à la configuration des lieux, à l'encombrement et aux éléments à protéger.</p>",
        },
        {
          question:
            "Le nettoyage peut-il abîmer les dalles ou les joints de mon balcon ?",
          answer:
            "<p><strong>Non, lorsque la méthode est correctement adaptée.</strong> La pression et les produits sont choisis en fonction du revêtement. Les joints fragilisés ou déjà dégradés sont identifiés lors du diagnostic visuel et signalés, afin d'éviter toute aggravation et de permettre une éventuelle réparation ultérieure.</p>",
        },
        {
          question:
            "Comment gérez-vous l'eau pour éviter de mouiller la façade ou les voisins du dessous ?",
          answer:
            "<p><strong>Le débit est contrôlé en permanence et le rinçage est orienté vers l'évacuation du balcon.</strong> Si celle-ci est insuffisante ou partiellement obstruée, des raclettes et chiffons absorbants sont utilisés pour récupérer l'eau sale. Dans les configurations sensibles, la méthode est adaptée en privilégiant un nettoyage plus manuel.</p>",
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
        "Un balcon contaminé par les fientes de pigeons retrouve propreté et salubrité après nettoyage sécurisé et désinfection complète, permettant aux occupants de réinvestir cet espace extérieur sans risque sanitaire ni odeur persistante.",

      whyUsBullets: [
        "Intervention sur les balcons du centre-ville, du quartier Victor Hugo et de la ZAC du Bois des Granges.",
        "Protocole sanitaire strict avec EPI complets, humidification préalable et désinfection virucide homologuée.",
        "Conditionnement étanche des fientes et nids, évacuation selon la filière adaptée.",
      ],

      uniqueIntro:
        "<p>Les balcons des immeubles situés près du canal de l'Ourcq, des espaces boisés ou des corniches du centre-ville de Claye-Souilly deviennent parfois des zones de repos privilégiées pour les pigeons. Dans les secteurs comme le quartier Victor Hugo ou la ZAC du Bois des Granges, la configuration des façades, des garde-corps et des retraits peut favoriser l'installation et l'accumulation progressive des déjections.</p>\n<p class=\"mt-4\">Les fientes s'accumulent sur les dalles, les garde-corps et les murs mitoyens, formant une couche épaisse qui dégage une odeur forte et empêche toute utilisation normale du balcon. Les occupants hésitent à sortir, craignent les risques sanitaires et subissent parfois la gêne des voisins. Certains propriétaires reçoivent des réclamations du conseil syndical exigeant un assainissement rapide. Le nettoyage domestique ne suffit pas : les fientes sèches dégagent des poussières infectieuses, et leur manipulation sans équipement expose à des risques respiratoires. <strong>Un traitement professionnel sécurisé retire l'ensemble des déjections,</strong> désinfecte les surfaces et rend le balcon utilisable en toute sécurité.</p>",

      uniqueDeepDive:
        "<h3>1. Protection et mise en sécurité</h3>\n<p>Mise en place des équipements de protection individuelle obligatoires : combinaison jetable, gants épais, masque respiratoire de type <strong>FFP3</strong> et lunettes de protection. Installation de bâches de protection devant la porte-fenêtre pour limiter la dispersion des poussières vers l'intérieur. <strong>Humidification légère des fientes sèches</strong> avant manipulation pour éviter leur volatilisation.</p>\n\n<h3>2. Ramassage et nettoyage</h3>\n<p>Le ramassage manuel des déjections, nids et débris organiques s'effectue avec des outils dédiés. L'ensemble est conditionné dans des sacs étanches prévus pour les déchets contaminés, en aucun cas jetés dans les ordures ménagères classiques. <strong>Les surfaces du balcon</strong> (dalles, garde-corps, vitreries, murs mitoyens) sont ensuite nettoyées avec un produit adapté qui dissout les résidus organiques.</p>\n\n<h3>3. Désinfection virucide complète</h3>\n<p>Application d'un produit virucide et bactéricide homologué, avec respect du temps de contact préconisé pour garantir l'élimination des agents pathogènes. Un rinçage final retire les résidus de produit, et le balcon est laissé en aération complète pendant vingt-quatre heures. <strong>Installation possible de pics ou de filets anti-pigeons</strong> pour limiter les récidives.</p>",

      specificChallenges: [
        "Contamination marquée sur les balcons du centre-ville, du quartier Victor Hugo et des résidences proches du canal de l'Ourcq, avec zones de nidification en corniches.",
        "Corrosion possible des supports métalliques en cas de dépôts anciens, l'acidité des fientes attaquant garde-corps et peintures.",
        "Gestion rigoureuse des poussières de fientes sèches lors du ramassage initial, nécessitant humidification systématique et port de masque FFP3.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons présentent-elles réellement des risques sanitaires justifiant l'intervention d'un professionnel ?",
          answer:
            "<p><strong>Oui, les fientes contiennent des bactéries, champignons et parasites potentiellement dangereux,</strong> notamment lorsqu'elles sont inhalées sous forme de poussières sèches. Les personnes immunodéprimées, les enfants et les personnes âgées sont particulièrement vulnérables. Notre intervention sécurisée avec EPI garantit l'élimination des agents pathogènes.</p>",
        },
        {
          question:
            "Les produits désinfectants utilisés sont-ils dangereux pour les habitants ou les animaux domestiques après séchage ?",
          answer:
            "<p><strong>Les produits que nous utilisons sont homologués pour un usage professionnel</strong> et respectent les normes en vigueur. Après le temps de contact nécessaire, nous rinçons abondamment les surfaces. Le balcon doit ensuite être aéré pendant vingt-quatre heures. Passé ce délai, les surfaces ne présentent plus de danger.</p>",
        },
        {
          question:
            "Les fientes de pigeons peuvent-elles endommager durablement mon balcon si je tarde à faire intervenir un professionnel ?",
          answer:
            "<p><strong>Oui, les fientes sont acides et attaquent progressivement les matériaux exposés.</strong> Les garde-corps métalliques se corrodent, la peinture s'écaille et les joints se dégradent. Plus le dépôt reste en place longtemps, plus les dégâts sont profonds. Une intervention rapide limite les dommages.</p>",
        },
        {
          question:
            "Que deviennent les fientes et les nids ramassés lors de l'intervention ?",
          answer:
            "<p><strong>Les fientes, nids et débris organiques sont conditionnés dans des sacs étanches,</strong> puis évacués en déchetterie sans risque sanitaire. Nous ne jetons jamais ces déchets dans les ordures ménagères classiques, car ils pourraient contaminer d'autres personnes lors de la collecte ou du traitement.</p>",
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
        "Un nettoyage professionnel des canapés, tapis et matelas retire les taches incrustées, réduit les allergènes accumulés et redonne fraîcheur et confort aux textiles du quotidien sans les abîmer ni les déformer.",
      whyUsBullets: [
        "Intervention régulière dans les pavillons de Voisins et Mauperthuis avec organisation adaptée aux pièces de vie.",
        "Injection-extraction réglée selon la fibre, la couleur et le rembourrage avec test préalable si nécessaire.",
        "Intervention à domicile discrète et organisée avec conseils immédiats pour optimiser le séchage.",
      ],

      uniqueIntro:
        "<p>Les canapés, tapis et matelas des logements de Claye-Souilly sont sollicités au quotidien, particulièrement dans les pavillons avec accès direct au jardin. Les enfants qui jouent, les animaux qui rentrent de l'extérieur, les soirées entre amis : les taches de café, de vin, de nourriture grasse ou d'urine d'animaux marquent progressivement les tissus, tandis que la poussière et les acariens s'accumulent en profondeur malgré l'aspirateur régulier.</p>\n<p class=\"mt-4\">Ces salissures visibles créent un inconfort pour les occupants, génèrent parfois des odeurs tenaces et peuvent aggraver les allergies respiratoires. Certaines familles hésitent à recevoir des invités par gêne de l'aspect terne ou taché de leur canapé, ou renoncent à utiliser un tapis pourtant central dans le salon. <strong>Un nettoyage professionnel par injection-extraction</strong> retire les salissures incrustées, traite les taches organiques en profondeur et redonne de la fraîcheur aux fibres textiles sans nécessiter de remplacement coûteux du mobilier.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic et pré-traitement</h3>\n<p>Diagnostic visuel et tactile pour identifier le type de textile (coton, laine, synthétique, velours ou cuir) ainsi que la nature des taches présentes. Lorsque le tissu est fragile, ancien ou fortement teinté, un test est réalisé sur une zone discrète. <strong>Les taches tenaces font l'objet d'un pré-traitement ciblé</strong> : détachant enzymatique pour les taches organiques, produit spécifique pour les taches de graisse ou de vin.</p>\n\n<h3>2. Injection-extraction professionnelle</h3>\n<p class=\"mt-4\">La machine projette une solution nettoyante adaptée à la fibre puis aspire immédiatement l'eau sale chargée des salissures dissoutes. Les zones très sollicitées (assises de canapé, passages sur un tapis) reçoivent plusieurs passes pour garantir un résultat homogène. <strong>Pour les textiles fragiles,</strong> nous adaptons la pression, la température et le rythme des passes pour préserver l'intégrité des fibres.</p>\n\n<h3>3. Séchage et recommandations</h3>\n<p class=\"mt-4\">L'extraction puissante de notre équipement retire l'essentiel de l'humidité : le séchage se fait généralement dans la journée selon la ventilation de la pièce. Nous recommandons d'ouvrir les fenêtres pour accélérer l'évaporation et de ne pas utiliser le canapé avant séchage complet. <strong>Fréquence recommandée : nettoyage tous les 12 à 18 mois</strong> pour les textiles très sollicités, complété par un aspirateur hebdomadaire.</p>",

      faqAdditions: [
        {
          question:
            "Le nettoyage professionnel permet-il de réduire les acariens et les allergènes présents dans les canapés et matelas ?",
          answer:
            "<p><strong>Oui, le nettoyage par injection-extraction retire une grande partie des acariens et allergènes accumulés.</strong> L'eau chaude et l'aspiration puissante délogent ces particules invisibles que l'aspirateur domestique ne peut pas atteindre. Pour les personnes allergiques, nous recommandons un nettoyage annuel complété par des housses anti-acariens.</p>",
        },
        {
          question:
            "Pouvez-vous traiter efficacement les taches d'urine et les odeurs tenaces laissées par les animaux domestiques ?",
          answer:
            "<p><strong>Oui, nous utilisons un détachant enzymatique spécifique</strong> qui décompose les protéines présentes dans l'urine, éliminant ainsi la source de l'odeur. Le produit agit plusieurs minutes avant l'extraction. Dans les cas de contamination profonde ayant atteint le rembourrage, nous pouvons effectuer plusieurs passes.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser un canapé ou de marcher sur un tapis après le nettoyage ?",
          answer:
            "<p><strong>Le temps de séchage dépend de l'épaisseur du textile et de la ventilation de la pièce.</strong> Un tissu fin sèche plus rapidement qu'un velours épais. Nous recommandons d'ouvrir les fenêtres pour accélérer l'évaporation et d'éviter de s'asseoir sur le canapé avant séchage complet, afin de ne pas marquer les fibres encore humides.</p>",
        },
        {
          question:
            "Dois-je préparer quelque chose dans mon logement avant votre arrivée pour le nettoyage des canapés et tapis ?",
          answer:
            "<p><strong>Oui, nous vous demandons de retirer les coussins décoratifs, plaids et objets posés sur le canapé,</strong> ainsi que les petits meubles ou objets fragiles placés sur ou à proximité du tapis. Si possible, dégagez un espace de circulation autour des textiles. Pour les matelas, retirez draps, couette et protège-matelas.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Remise en état complète d’appartements et de maisons à Claye-Souilly, avec un périmètre défini en amont et des méthodes adaptées aux sols, cuisines, sanitaires et vitrages.",

      whyUsBullets: [
        "Connaissance des typologies locales : pavillons de Bois-Fleuri et logements récents de Mauperthuis.",
        "Traitement soigné des zones critiques : cuisine, salle de bain, sols et points de contact, sans abîmer les finitions.",
        "Organisation efficace malgré les contraintes : accès badges en résidences et circulation dense autour de la N3.",
      ],

      uniqueIntro:
        '<p>À Claye-Souilly, les demandes de remise en état se concentrent souvent autour des moments charnières : déménagement, logement resté inoccupé, mise en location ou préparation d’un état des lieux. Entre les pavillons de Bois-Fleuri et les résidences plus récentes de Mauperthuis, les matériaux varient, et le rendu attendu est le même : un logement propre, homogène, prêt à être présenté ou réoccupé.</p>\n<p class="mt-4">La commune est aussi marquée par deux réalités très concrètes : la proximité de la N3, qui favorise les dépôts de poussière sur les vitres et les entrées, et une eau souvent calcaire en Seine-et-Marne, qui laisse rapidement des traces dans la salle de bain. Sur les maisons avec véranda ou grandes baies vitrées, comme sur les appartements du centre, la remise en état demande une méthode régulière et des produits compatibles avec chaque surface.</p>\n<p class="mt-4">Pour un <strong>nettoyage appartement maison Claye-Souilly</strong>, Klinova intervient avec une approche claire : <strong>le périmètre de l’intervention est toujours défini avant l’intervention.</strong> Puis nous déroulons un protocole par zones, en tenant compte des accès (digicodes, badges) et des contraintes de circulation, notamment près du pôle Shopping Promenade et des axes vers Mitry-Claye.</p>',

      uniqueDeepDive:
        "<h3>Diagnostic et cadrage</h3>\n<p>Nous évaluons l’état réel du logement et ses contraintes : niveau de salissures, pièces prioritaires, revêtements (carrelage, parquet stratifié), vitrages (baies, véranda) et accès. En résidence, nous anticipons les badges/interphones ; en pavillon, nous planifions l’itinéraire d’intervention pour limiter les déplacements et gagner en efficacité.</p>\n\n<h3>Nettoyage structuré par zones</h3>\n<p>Nous commençons par un dépoussiérage complet (plinthes, menuiseries, surfaces hautes accessibles), puis nous traitons les sols avec une méthode adaptée au revêtement. La cuisine fait l’objet d’un <strong>dégraissage cuisine</strong> sur les surfaces accessibles (plans, crédences, façades selon l’état). Salle de bain et sanitaires : <strong>détartrage sanitaires</strong> adapté, robinetterie et joints selon tolérance des matériaux. Les points de contact (interrupteurs, poignées) et les vitres accessibles complètent la remise en état pour un rendu net et cohérent.</p>\n\n<h3>Contrôle final et conseils de restitution</h3>\n<p>Nous terminons par un contrôle visuel pièce par pièce, puis une aération du logement. L’objectif est de sécuriser un <strong>nettoyage avant état des lieux</strong> ou un <strong>grand ménage maison Claye-Souilly</strong> sans zones “à reprendre”, avec un rendu lisible pour une visite, une remise des clés ou une réinstallation rapide.</p>",

      specificChallenges: [
        "Dépôts liés aux axes routiers (N3, proximité A104) : finitions sur vitres, entrées et plinthes à soigner.",
        "Eau calcaire en Seine-et-Marne : traces rapides sur robinetterie, parois et sanitaires.",
        "Grandes surfaces vitrées (vérandas, baies) fréquentes en pavillons : méthode anti-traces indispensable.",
        "Accès en résidences récentes (Mauperthuis) : digicodes/badges et stationnement parfois contraint en centre.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous pour une remise en état avant état des lieux dans le centre de Claye-Souilly (77410) ?",
          answer:
            "<p>Oui. Nous planifions l’intervention en fonction de la date de remise des clés et des contraintes d’accès (digicode, clés, horaires). Le stationnement en centre-ville peut être plus serré : on l’anticipe pour tenir le créneau et livrer un logement prêt à être présenté.</p>",
        },
        {
          question:
            "Que change une remise en état dans un logement récent de Mauperthuis par rapport à un pavillon de Bois-Fleuri ?",
          answer:
            "<p>En logement récent, on porte une attention particulière aux finitions (parquet stratifié, surfaces modernes, baies vitrées) et aux accès (badge/interphone). En pavillon, le volume et les vitrages (véranda, grandes ouvertures) comptent davantage : on structure le passage pièce par pièce pour garder un rendu homogène.</p>",
        },
        {
          question:
            "Comment évitez-vous les traces de calcaire dans la salle de bain après intervention ?",
          answer:
            "<p>Nous utilisons un détartrage adapté aux matériaux (robinetterie, parois, joints) et nous rinçons correctement pour limiter les résidus. Nous pouvons aussi laisser des conseils simples d’aération et d’essuyage sur les zones qui marquent vite, surtout dans le 77.</p>",
        },
        {
          question:
            "Est-ce que vous proposez aussi un nettoyage des vitres et baies vitrées d’une maison ?",
          answer:
            "<p>Oui, sur les vitrages accessibles. C’est fréquent à Claye-Souilly, notamment sur les pavillons avec véranda ou grandes baies. Nous intégrons cette partie au périmètre défini avant intervention pour garantir un rendu propre et cohérent.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};
export default city;
