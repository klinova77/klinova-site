// Balises autorisées :
// <p>`, `<h3>`, `<ul>`, `<li>`, `<strong>`, <br>, <p class="mt-4">
// dans hubintro / uniqueintro / uniquedeepdive / faq / faqAddition

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

  // ✅ Correction demandée : rester général sur la propreté / l’entretien,
  // sans donner l’impression que Klinova se limite à une liste de services.
  customDescription:
    "Traversée par la RN3 et proche de l’A104, Claye-Souilly combine zones pavillonnaires, résidences récentes et forte activité commerciale. L’entretien régulier des parties communes, des circulations, des parkings et des extérieurs est essentiel pour préserver la qualité du bâti.",

  // ✅ HubIntro conservé “comme ça” (contenu), formaté en HTML selon ton modèle
  hubIntro: `<p>Pour garantir la propreté des résidences et locaux professionnels à Claye-Souilly, Klinova accompagne syndics et gestionnaires dans l'entretien courant et ponctuel. Nous assurons un suivi rigoureux sur les moquettes, parkings, balcons et textiles, avec un protocole adapté à chaque contexte local.</p><p class="mt-4">Notre approche repose sur la proximité, la planification précise et le reporting systématique. Chaque intervention fait l'objet d'un diagnostic préalable et d'un compte-rendu détaillé transmis au donneur d'ordre, garantissant la traçabilité et la conformité des opérations réalisées.</p><ul><li><strong>Nos prestations à Claye-Souilly :</strong></li><li>Nettoyage de moquettes dans les halls, cages d'escalier et parties communes avec extraction à l'eau et séchage rapide pour limiter la gêne des occupants.</li><li>Nettoyage de parkings souterrains et aériens par autolaveuse ou haute pression, incluant le traitement des taches d'hydrocarbures et la gestion des eaux de lavage.</li><li>Nettoyage de balcons, terrasses et garde-corps avec gestion rigoureuse de l'eau pour éviter les coulures en façade et chez les voisins.</li><li>Nettoyage de canapés, tapis et matelas chez les particuliers par injection-extraction, avec pré-traitement ciblé des taches et séchage accéléré pour une réutilisation rapide.</li></ul>`,

  citySpecificChallenges: [
    "Encrassement rapide des moquettes dans les halls situés près de la zone commerciale et des axes RN3, avec forte circulation de boues et de particules",
    "Taches d'hydrocarbures et résidus de pneus dans les parkings souterrains des copropriétés récentes du quartier Mauperthuis",
    "Dépôts verts et mousses sur les balcons des résidences pavillonnaires de Voisins et Souilly en raison de la proximité de la Beuvronne et du canal de l'Ourcq",
    "Salissures de fientes de pigeons sur les balcons des immeubles proches du centre-ville et des espaces boisés environnants",
  ],

  // ✅ Quartiers : maximum sans inventer (liste officielle/connue : 6 quartiers)
  districts: [
    "Claye",
    "Souilly",
    "Mauperthuis",
    "Voisins",
    "Bois-Fleuri",
    "Zone commerciale",
  ],
  nearbyCities: [
  "villeparisis",
  "lagny-sur-marne",
  "vaires-sur-marne",
  "chelles",
  "torcy",
],

  landmarks: [
    "Mairie de Claye-Souilly",
    "Gare de Mitry-Claye",
    "Centre commercial Les Sentiers de Claye-Souilly",
    "Église Saint-Étienne",
    "Canal de l'Ourcq",
    "RN3 (Route Nationale 3)",
  ],

  // ✅ FAQ conservée “comme ça”, formatée en objets
  faq: [
    {
      question:
        "Intervenez-vous rapidement sur Claye-Souilly et les communes voisines ?",
      answer:
        "Oui. Claye-Souilly fait partie de notre zone d'intervention habituelle en Seine-et-Marne. Nous programmons les interventions sous 5 à 10 jours ouvrés pour les demandes classiques, et sous 48 à 72 heures en cas d'urgence technique ou de sinistre. Notre proximité avec les axes RN3 et A104 facilite les rotations de nos équipes.",
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés et les badges Vigik dans les copropriétés ?",
      answer:
        "Nous travaillons régulièrement avec des syndics et connaissons les systèmes Vigik, digicode et portails automatiques. Si besoin, nous récupérons les badges en amont ou coordonnons avec le gardien pour organiser l'accès le jour J. Chaque remise de clé ou badge fait l'objet d'un bordereau signé pour garantir la traçabilité.",
    },
    {
      question: "Le déplacement pour devis est-il gratuit à Claye-Souilly ?",
      answer:
        "Oui, le déplacement et le devis sont toujours gratuits, quelle que soit la prestation envisagée. Nous venons sur place pour évaluer les surfaces, repérer les contraintes d'accès et définir le protocole adapté. Cela permet de chiffrer précisément l'intervention sans approximation.",
    },
    {
      question:
        "Pouvez-vous intervenir tôt le matin ou en soirée pour limiter la gêne ?",
      answer:
        "Oui, nous adaptons nos horaires selon vos contraintes. Pour les parkings ou les halls d'immeubles très fréquentés, nous privilégions les créneaux matinaux avant 8h ou en fin de journée après 18h. Cette souplesse permet de réduire les nuisances et de sécuriser les zones pendant le séchage ou le balisage.",
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
        "Intervention régulière sur les copropriétés de Mauperthuis et les résidences pavillonnaires de Souilly, avec adaptation aux contraintes architecturales locales.",
        "Matériel d’injection-extraction professionnel assurant une extraction puissante, une humidité maîtrisée et un séchage rapide des fibres textiles.",
        "Organisation par cage ou par étage avec balisage clair et information préalable pour maintenir les circulations pendant l’intervention.",
        "Compte-rendu détaillé transmis au syndic avec surfaces traitées, passages réalisés et observations techniques sur l’état des moquettes.",
      ],

      uniqueIntro: `<p>Les moquettes installées dans les halls d'entrée, les paliers et les cages d'escalier des immeubles de Claye-Souilly subissent un encrassement progressif lié au trafic régulier des résidents, aux apports de boues depuis la RN3 et la zone commerciale, ainsi qu’aux particules fines véhiculées par le vent.</p><p class="mt-4">Les fibres textiles retiennent la poussière, les traces de pas se marquent aux endroits de passage intense et certaines taches restent visibles malgré l’aspirateur. Ce ternissement altère l’apparence des espaces communs et donne une impression de négligence difficile à corriger avec un entretien courant, ce qui pose un véritable enjeu d’image pour les syndics et gestionnaires.</p>`,

      uniqueDeepDive: `<p>Le diagnostic préalable examine le type de moquette, le niveau d'encrassement et les contraintes d'accès propres à chaque immeuble. Dans les copropriétés de Mauperthuis ou de Voisins, les cages d'escalier étroites imposent une organisation précise pour manœuvrer la machine d'injection-extraction sans bloquer la circulation. Un planning par cage ou par étage est défini, les zones sont balisées et les bas de murs protégés afin d’éviter tout contact avec les plinthes peintes.</p><p class="mt-4">La méthode repose sur l’injection d’une solution nettoyante adaptée au type de fibre, suivie d’une extraction immédiate qui retire l’eau sale et les résidus incrustés. Les zones de fort passage, comme les halls ouvrant sur la rue ou les paliers d’étage, font l’objet de passages supplémentaires. La puissance d’aspiration permet, dans la majorité des cas, un séchage en quelques heures selon la ventilation et la configuration des lieux. Pour les immeubles anciens, la pression et la température sont ajustées afin de préserver les fibres. Un contrôle visuel final valide l’homogénéité du résultat et la bonne répartition du séchage.</p>`,

      specificChallenges: [
        "Encrassement rapide des moquettes dans les halls proches de la zone commerciale et de la RN3, avec apports constants de boues, graviers et particules fines.",
        "Contraintes techniques sur les marches d’escalier où la moquette est tendue et collée, nécessitant une extraction progressive pour éviter toute déformation.",
        "Temps de séchage plus long en rez-de-chaussée des immeubles anciens de Claye et Souilly, en raison d’une ventilation naturelle parfois limitée.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des halls proches de la RN3 ou de la zone commerciale nécessitent-elles un entretien plus fréquent ?",
          answer:
            "Oui, les immeubles situés à proximité des axes routiers et des zones à forte fréquentation subissent des apports constants de salissures extérieures. Les semelles transportent boues, graviers et particules fines qui se déposent dans les fibres textiles. Dans ces configurations, un nettoyage professionnel annuel permet de maintenir une propreté satisfaisante, complété par un passage d’aspirateur puissant plusieurs fois par semaine pour limiter l’encrassement en surface.",
        },
        {
          question:
            "Klinova intervient-il sur les petites copropriétés comme sur les grandes résidences de Claye-Souilly ?",
          answer:
            "Nous intervenons aussi bien dans les petites copropriétés de quelques étages que dans les résidences plus importantes composées de plusieurs bâtiments. La méthode reste identique, seule l’organisation diffère. Une petite copropriété peut être traitée en une matinée, tandis qu’un ensemble plus vaste nécessite une planification par cage ou par bâtiment sur plusieurs jours, afin de limiter la gêne pour les occupants.",
        },
        {
          question: "Le nettoyage par injection-extraction peut-il abîmer une moquette ancienne ?",
          answer:
            "Non, à condition d’adapter les réglages. Les moquettes anciennes peuvent présenter des fibres fragilisées ou un support plus sensible. La pression, la température et la quantité de solution injectée sont ajustées pour extraire efficacement les salissures sans saturer le textile. Un test préalable sur une zone discrète permet de valider le protocole avant un traitement complet.",
        },
        {
          question:
            "Comment se déroule l’intervention pour ne pas bloquer les allées et venues des résidents ?",
          answer:
            "L’intervention est organisée par zone ou par étage, avec un balisage clair des surfaces en cours de séchage. Un passage reste toujours accessible pour rejoindre les logements. Les opérations débutent souvent tôt le matin afin de réduire la gêne. Selon les conditions de ventilation, le séchage intervient généralement dans la même journée, avec une signalisation temporaire pour éviter une circulation intensive trop rapide.",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "parkings",

      heroDescription:
        "Un parking propre et entretenu améliore la sécurité de circulation, renforce l'image de la copropriété et limite l'accumulation de salissures qui dégradent progressivement les revêtements et les marquages au sol.",

      whyUsBullets: [
        "Intervention régulière sur les parkings des copropriétés de Mauperthuis et du centre-ville, avec adaptation aux rampes étroites et aux hauteurs sous plafond limitées.",
        "Autolaveuse et haute pression professionnelles permettant un nettoyage homogène des sols tout en préservant marquages et peintures existantes.",
        "Organisation par secteur avec rotation concertée des véhicules afin de limiter l’immobilisation des places et la gêne des résidents.",
      ],

      uniqueIntro: `<p>Les parkings souterrains et aériens des copropriétés de Claye-Souilly accumulent poussières, traces de pneus, taches d'huile et résidus de boue transportés depuis la zone commerciale ou la RN3. Ces dépôts se concentrent sur les rampes d'accès, les places de stationnement fréquemment occupées et les zones de circulation principale.</p><p class="mt-4">Le béton noircit, les marquages deviennent illisibles et certaines taches d'hydrocarbures s'incrustent dans la porosité du revêtement. Pour les syndics et conseils syndicaux, cet état visible pose un problème d'entretien courant et suscite parfois des réclamations lors des assemblées générales. Un nettoyage structuré par autolaveuse ou haute pression retire les salissures tenaces, redonne de la clarté aux sols et préserve la pérennité des surfaces bétonnées ou peintes, à condition d’une coordination précise pour gérer la rotation des véhicules.</p>`,

      uniqueDeepDive: `<p>L'intervention débute par une visite technique pour évaluer le type de revêtement, l'état des peintures de sol, la configuration des accès et la présence d'évacuations d'eau. Dans les parkings des résidences de Mauperthuis ou du centre-ville, nous coordonnons avec le gardien ou le syndic pour organiser la rotation des véhicules par secteur, permettant de libérer progressivement les zones à traiter sans bloquer l'ensemble du parking. Un balayage mécanique ou manuel retire les déchets volumineux, graviers et feuilles avant le passage de l'autolaveuse.</p><p class="mt-4">L’autolaveuse combine brossage rotatif et aspiration immédiate des eaux sales pour assurer un nettoyage homogène des allées, places et rampes. Les taches d'huile et traces de pneus font l’objet d’un pré-traitement par dégraissant professionnel avec temps de contact adapté. La gestion des eaux de lavage respecte les contraintes de chaque site, avec récupération dans les siphons de sol ou évacuation vers le réseau approprié. Les angles, pieds de murs et zones peu accessibles sont traités manuellement ou par haute pression réglée, puis un contrôle final vérifie la propreté des sols et l'absence de flaques résiduelles.</p>`,

      specificChallenges: [
        "Accumulation rapide de taches d'hydrocarbures dans les parkings proches de la zone commerciale, liée au fort trafic quotidien et au stationnement prolongé de véhicules.",
        "Accès contraints dans certains parkings souterrains avec rampes étroites ou hauteurs sous plafond réduites, imposant une organisation minutieuse.",
        "Gestion des eaux de lavage dans les copropriétés anciennes de Claye et Souilly nécessitant une récupération adaptée pour éviter l’engorgement des siphons.",
      ],

      faqAdditions: [
        {
          question:
            "Les parkings des résidences situées près de la RN3 nécessitent-ils un entretien plus fréquent ?",
          answer:
            "Oui, la proximité de la RN3 et de la zone commerciale entraîne un apport constant de poussières, graviers et boues transportés par les véhicules. Ces salissures s’accumulent sur les rampes d’accès et les premières places de stationnement, créant un encrassement visible en quelques mois. Un nettoyage complet une à deux fois par an permet de maintenir la propreté générale, complété par un balayage régulier des zones de circulation principale.",
        },
        {
          question:
            "Klinova intervient-il sur les petits parkings comme sur les grands parkings de copropriété ?",
          answer:
            "Nous intervenons aussi bien sur des parkings d’une quinzaine de places que sur des ensembles de plusieurs centaines d’emplacements répartis sur plusieurs niveaux. La méthode reste identique, seule l’organisation varie. Un petit parking peut être traité en une demi-journée, tandis qu’un grand ensemble nécessite une planification par secteur étalée sur plusieurs jours afin de limiter la gêne pour les résidents.",
        },
        {
          question:
            "Le nettoyage haute pression risque-t-il d'abîmer les marquages au sol ou les peintures murales ?",
          answer:
            "Non, à condition d’adapter correctement la pression et la distance. Les marquages au sol résistent bien lorsque la pression est maîtrisée et l’angle de projection adapté. Pour les peintures murales anciennes ou fragilisées, nous privilégions l’autolaveuse ou un nettoyage manuel afin d’éviter toute dégradation. Un test préalable sur une zone discrète permet de valider les réglages.",
        },
        {
          question:
            "Comment se déroule l’intervention pour ne pas bloquer l’accès des résidents à leurs véhicules ?",
          answer:
            "L’intervention est organisée par secteur, selon un planning validé avec le syndic. Les résidents sont informés en amont des zones concernées et des créneaux prévus. Les accès piétons et les issues de secours restent toujours dégagés, et chaque secteur est rouvert progressivement au fur et à mesure de l’avancement des opérations.",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "balcons",

      heroDescription:
        "Un balcon nettoyé retrouve son aspect d'origine, redevient un espace agréable à vivre au quotidien et prolonge la durée de vie des matériaux exposés aux intempéries et aux salissures extérieures.",

      whyUsBullets: [
        "Interventions régulières sur les balcons d’immeubles du centre-ville, du quartier Victor Hugo et de la ZAC du Bois des Granges.",
        "Adaptation précise des méthodes et produits selon carrelage, béton, dalles ou bois composite, sans dégradation des supports.",
        "Gestion rigoureuse de l’eau pour éviter toute coulure en façade ou chez les voisins, même en configuration sensible.",
      ],

      uniqueIntro: `<p>Les balcons et terrasses des logements de Claye-Souilly accumulent dépôts verts, traces de terre, résidus de feuilles et poussières fines liées aux axes proches comme la RN3 ou l’A104. Ces salissures sont accentuées par la proximité d’espaces végétalisés et par les zones peu exposées au soleil, notamment dans les immeubles du centre-ville ou du quartier Victor Hugo.</p><p class="mt-4">Les dalles se ternissent, les joints noircissent, et des mousses ou algues apparaissent progressivement. Les garde-corps se couvrent de traces de doigts, de coulures calcaires et de dépôts atmosphériques. Cette dégradation décourage l’usage du balcon, alors même qu’il pourrait redevenir un véritable espace de détente. Un nettoyage professionnel permet de retirer les dépôts incrustés, de redonner de la clarté aux surfaces et de réinvestir pleinement cet espace extérieur sans craindre de salir vêtements ou mobilier.</p>`,

      uniqueDeepDive: `<p>L’intervention commence par un repérage précis des éléments à protéger : porte-fenêtre, menuiseries, murs mitoyens et plantes en pot conservées par l’occupant. Le mobilier est déplacé ou protégé, puis les dépôts de feuilles, terre et débris végétaux sont retirés manuellement. Avant toute phase de rinçage, l’état de l’évacuation du balcon est vérifié afin d’adapter le débit d’eau et d’éviter tout débordement.</p><p class="mt-4">Un produit nettoyant adapté au revêtement est ensuite appliqué. Les dalles en carrelage, béton ou grès cérame supportent un nettoyage appuyé mais contrôlé, tandis que le bois composite ou les surfaces mates nécessitent une pression modérée pour éviter rayures ou décoloration. Le brossage permet de décoller mousses et salissures tenaces, suivi d’un rinçage maîtrisé orienté vers l’évacuation. Les garde-corps, vitreries et murs mitoyens sont traités séparément avec des produits spécifiques. Le séchage naturel intervient en quelques heures selon l’exposition et la ventilation. Un nettoyage annuel, idéalement au printemps, permet de conserver un balcon propre et agréable toute l’année.</p>`,

      specificChallenges: [
        "Dépôts verts et mousses sur les balcons peu ensoleillés, notamment dans les immeubles du centre-ville et à proximité des zones végétalisées.",
        "Supports sensibles comme le bois composite ou les carrelages mats nécessitant un réglage précis de la pression pour éviter toute altération.",
        "Gestion délicate de l’eau dans les immeubles anciens où les évacuations de balcon sont parfois partiellement obstruées.",
      ],

      faqAdditions: [
        {
          question:
            "Les balcons situés près des espaces boisés ou des axes routiers de Claye-Souilly nécessitent-ils un entretien plus fréquent ?",
          answer:
            "Oui, la proximité d’espaces végétalisés, du canal de l’Ourcq ou des axes comme la RN3 et l’A104 favorise les dépôts de feuilles, de pollens et de poussières fines. Ces matières retiennent l’humidité et accélèrent l’apparition de mousses sur les surfaces peu exposées au soleil. Un nettoyage annuel permet de retrouver un balcon propre avant la belle saison, complété par un entretien léger après les épisodes venteux ou orageux.",
        },
        {
          question:
            "Klinova intervient-il aussi bien sur les petits balcons d’appartement que sur les grandes terrasses ?",
          answer:
            "Oui, nous intervenons sur tous types de balcons et terrasses, qu’il s’agisse de petits espaces en immeuble collectif ou de surfaces plus importantes. La méthode est systématiquement adaptée à la configuration des lieux, à l’encombrement et aux éléments à protéger. L’objectif reste identique : obtenir un résultat propre et durable sans dégrader les matériaux existants.",
        },
        {
          question:
            "Le nettoyage peut-il abîmer les dalles ou les joints de mon balcon ?",
          answer:
            "Non, lorsque la méthode est correctement adaptée. La pression et les produits sont choisis en fonction du revêtement. Les joints fragilisés ou déjà dégradés sont identifiés lors du diagnostic visuel et signalés, afin d’éviter toute aggravation et de permettre une éventuelle réparation ultérieure.",
        },
        {
          question:
            "Comment gérez-vous l’eau pour éviter de mouiller la façade ou les voisins du dessous ?",
          answer:
            "Le débit est contrôlé en permanence et le rinçage est orienté vers l’évacuation du balcon. Si celle-ci est insuffisante ou partiellement obstruée, des raclettes et chiffons absorbants sont utilisés pour récupérer l’eau sale. Dans les configurations sensibles, la méthode est adaptée en privilégiant un nettoyage plus manuel et moins consommateur d’eau.",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",

      heroDescription:
        "Un balcon contaminé par les fientes de pigeons retrouve propreté et salubrité après nettoyage sécurisé et désinfection complète, permettant aux occupants de réinvestir cet espace extérieur sans risque sanitaire ni odeur persistante.",

      whyUsBullets: [
        "Intervention sur les balcons d’immeubles du centre-ville (Rue Jean Jaurès / Mairie), du quartier Victor Hugo et de la ZAC du Bois des Granges.",
        "Protocole sanitaire strict avec EPI complets, humidification préalable et désinfection virucide homologuée avec respect du temps de contact.",
        "Conditionnement étanche des fientes et nids, évacuation selon la filière adaptée et les consignes locales de gestion des déchets contaminés.",
      ],

      uniqueIntro: `<p>Les balcons des immeubles situés près du canal de l'Ourcq, des espaces boisés ou des corniches du centre-ville de Claye-Souilly deviennent parfois des zones de repos privilégiées pour les pigeons. Dans les secteurs d’immeubles comme le centre-ville (Rue Jean Jaurès / Mairie), le quartier Victor Hugo ou la ZAC du Bois des Granges, la configuration des façades, des garde-corps et des retraits peut favoriser l’installation et l’accumulation progressive des déjections.</p><p class="mt-4">Les fientes s'accumulent sur les dalles, les garde-corps et les murs mitoyens, formant une couche épaisse qui dégage une odeur forte et empêche toute utilisation normale du balcon. Les occupants hésitent à sortir, craignent les risques sanitaires liés aux bactéries et parasites contenus dans les déjections et subissent parfois la gêne des voisins incommodés par l'aspect ou l'odeur. Certains propriétaires ou bailleurs reçoivent des réclamations du conseil syndical ou des résidents voisins exigeant un assainissement rapide. Le nettoyage domestique ne suffit pas à traiter ce type de contamination : les fientes sèches dégagent des poussières infectieuses, et leur manipulation sans équipement adapté expose à des risques respiratoires. Un traitement professionnel sécurisé retire l'ensemble des déjections, désinfecte les surfaces et rend le balcon utilisable en toute sécurité.</p>`,

      uniqueDeepDive: `<p>L'intervention débute par la mise en place des équipements de protection individuelle obligatoires : combinaison jetable, gants épais, masque respiratoire de type FFP3 et lunettes de protection pour éviter tout contact avec les agents pathogènes. Nous installons des bâches de protection devant la porte-fenêtre pour limiter la dispersion des poussières vers l'intérieur du logement, et humidifions légèrement les fientes sèches avant manipulation pour éviter leur volatilisation. Le ramassage manuel des déjections, nids et débris organiques s'effectue avec des outils dédiés, et l'ensemble est conditionné dans des sacs étanches prévus pour les déchets contaminés, en aucun cas jetés dans les ordures ménagères classiques. Les surfaces du balcon, dalles, garde-corps, vitreries et murs mitoyens sont ensuite nettoyées avec un produit adapté qui dissout les résidus organiques incrustés, suivi d'un rinçage contrôlé pour éviter les coulures en façade.</p><p class="mt-4">La désinfection constitue l'étape indispensable après le nettoyage : application d'un produit virucide et bactéricide homologué, avec respect du temps de contact préconisé par le fabricant pour garantir l'élimination des agents pathogènes. Un rinçage final retire les résidus de produit, et le balcon est laissé en aération complète pendant vingt-quatre heures avant toute réutilisation. Nous recommandons de ne pas réinstaller mobilier ou plantes avant ce délai, et de ventiler régulièrement pour évacuer toute humidité résiduelle. Si la présence de pigeons est récurrente, nous installons également des solutions anti-pigeons comme des pics ou des filets afin de limiter les récidives et de préserver durablement la salubrité du balcon.</p>`,

      specificChallenges: [
        "Contamination marquée sur les balcons d’immeubles du centre-ville, du quartier Victor Hugo et des résidences proches du canal de l’Ourcq, avec zones de nidification protégées en corniches et retraits.",
        "Corrosion possible des supports métalliques en cas de dépôts anciens, l’acidité des fientes attaquant garde-corps et peintures.",
        "Gestion rigoureuse des poussières de fientes sèches lors du ramassage initial, nécessitant humidification systématique et port de masque FFP3.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons présentent-elles réellement des risques sanitaires justifiant l'intervention d'un professionnel ?",
          answer:
            "Oui, les fientes de pigeons contiennent des bactéries, champignons et parasites potentiellement dangereux pour la santé humaine, notamment lorsqu'elles sont inhalées sous forme de poussières sèches. Les personnes immunodéprimées, les enfants et les personnes âgées sont particulièrement vulnérables. Le nettoyage sans équipement de protection expose à des risques respiratoires et cutanés. Notre intervention sécurisée avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination des agents pathogènes et permet de retrouver un balcon sain sans danger pour les occupants.",
        },
        {
          question:
            "Les produits désinfectants utilisés sont-ils dangereux pour les habitants ou les animaux domestiques après séchage ?",
          answer:
            "Les produits que nous utilisons sont homologués pour un usage professionnel et respectent les normes en vigueur. Après le temps de contact nécessaire à la désinfection, nous rinçons abondamment les surfaces pour retirer les résidus chimiques. Le balcon doit ensuite être aéré pendant vingt-quatre heures avant toute réutilisation. Passé ce délai et après séchage complet, les surfaces ne présentent plus de danger pour les occupants ni pour les animaux domestiques. Nous transmettons systématiquement les consignes de sécurité au client en fin d'intervention.",
        },
        {
          question:
            "Les fientes de pigeons peuvent-elles endommager durablement mon balcon si je tarde à faire intervenir un professionnel ?",
          answer:
            "Oui, les fientes de pigeons sont acides et attaquent progressivement les matériaux exposés. Les garde-corps métalliques se corrodent, la peinture des menuiseries s'écaille et les joints entre dalles se dégradent sous l'effet combiné de l'acidité et de l'humidité retenue par les déjections. Plus le dépôt reste en place longtemps, plus les dégâts sont profonds et difficiles à réparer. Une intervention rapide limite les dommages matériels et évite des frais de réfection ultérieurs bien supérieurs au coût du nettoyage initial.",
        },
        {
          question:
            "Que deviennent les fientes et les nids ramassés lors de l'intervention ?",
          answer:
            "Les fientes, nids et débris organiques sont conditionnés dans des sacs étanches spécifiques aux déchets contaminés, puis évacués en déchetterie sans risque sanitaire. Nous ne jetons jamais ces déchets dans les ordures ménagères classiques, car ils pourraient contaminer d'autres personnes lors de la collecte ou du traitement. Cette gestion rigoureuse fait partie intégrante de notre protocole et garantit la sécurité de tous, y compris des équipes de collecte et de traitement des déchets.",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",

      heroDescription:
        "Un nettoyage professionnel des canapés, tapis et matelas retire les taches incrustées, réduit les allergènes accumulés et redonne fraîcheur et confort aux textiles du quotidien sans les abîmer ni les déformer.",

      whyUsBullets: [
        "Intervention régulière dans les pavillons de Voisins et Mauperthuis, avec organisation adaptée aux pièces de vie et aux contraintes d’accès.",
        "Injection-extraction réglée selon la fibre, la couleur et le rembourrage, avec test préalable sur zone discrète si nécessaire.",
        "Intervention à domicile discrète et organisée, conseils immédiats pour optimiser le séchage et préserver le résultat.",
      ],

      uniqueIntro: `<p>Les canapés, tapis et matelas des logements de Claye-Souilly sont sollicités au quotidien, particulièrement dans les pavillons avec accès direct au jardin. Les enfants qui jouent, les animaux qui rentrent de l'extérieur; les soirées entre amis, les taches de café, de vin, de nourriture grasse ou d'urine d'animaux marquent progressivement les tissus, tandis que la poussière et les acariens s'accumulent en profondeur malgré l'aspirateur régulier.</p><p class="mt-4">Ces salissures visibles créent un inconfort pour les occupants, génèrent parfois des odeurs tenaces et peuvent aggraver les allergies respiratoires chez les personnes sensibles. Certaines familles hésitent à recevoir des invités par gêne de l'aspect terne ou taché de leur canapé, ou renoncent à utiliser un tapis pourtant central dans le salon. Un nettoyage professionnel par injection-extraction retire les salissures incrustées, traite les taches organiques en profondeur et redonne de la fraîcheur aux fibres textiles sans nécessiter de remplacement coûteux du mobilier.</p>`,

      uniqueDeepDive: `<p>L'intervention débute par un diagnostic visuel et tactile pour identifier le type de textile, coton, laine, synthétique, velours ou cuir, ainsi que la nature des taches présentes. Lorsque le tissu est fragile, ancien ou fortement teinté, un test est réalisé sur une zone discrète afin de valider le réglage et d’éviter toute mauvaise réaction de la fibre. Les taches tenaces font l'objet d'un pré-traitement ciblé : détachant enzymatique pour les taches organiques comme l'urine ou les résidus alimentaires, produit spécifique pour les taches de graisse ou de vin. Il est préférable d’éviter, avant notre passage, les produits ménagers agressifs qui peuvent fixer une tache ou fragiliser la fibre.</p><p class="mt-4">Ce pré-traitement agit pendant quelques minutes avant le passage de la machine d'injection-extraction, qui projette une solution nettoyante adaptée à la fibre puis aspire immédiatement l'eau sale chargée des salissures dissoutes. Les zones très sollicitées, comme les assises de canapé ou les passages sur un tapis, reçoivent plusieurs passes pour garantir un résultat homogène. Pour les textiles fragiles, les couleurs délicates ou les rembourrages épais, nous adaptons la pression, la température et le rythme des passes afin de préserver l'intégrité des fibres et de limiter l'humidité résiduelle. L'extraction puissante de notre équipement retire l'essentiel de l'humidité : le séchage se fait généralement dans la journée selon la ventilation de la pièce et l'épaisseur du textile. Nous recommandons d'ouvrir les fenêtres pour accélérer l'évaporation et, si possible, de ne pas utiliser le canapé ou marcher sur le tapis avant séchage complet pour éviter de marquer à nouveau les fibres humides. Un contrôle visuel final vérifie l'absence de traces résiduelles et la bonne répartition du séchage. Nous conseillons un nettoyage complet tous les douze à dix-huit mois pour les textiles très sollicités, complété par un aspirateur hebdomadaire et un traitement immédiat des taches fraîches avec un chiffon humide pour limiter leur incrustation.</p>`,

      specificChallenges: [
        "Vie de famille et animaux fréquents dans les secteurs pavillonnaires de Voisins et Mauperthuis, générant taches organiques répétées et poils incrustés.",
        "Taches d’urine anciennes pouvant atteindre rembourrage et sous-couches, nécessitant enzymatique + passes d’extraction pour réduire odeurs et résidus.",
        "Séchage plus lent dans certains logements peu ventilés, notamment en rez-de-chaussée, nécessitant des consignes strictes de réutilisation.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage professionnel permet-il de réduire les acariens et les allergènes présents dans les canapés et matelas ?",
          answer:
            "Oui, le nettoyage par injection-extraction retire une grande partie des acariens, de leurs déjections et des allergènes accumulés en profondeur dans les fibres textiles. L'eau chaude et l'aspiration puissante délogent ces particules invisibles que l'aspirateur domestique ne peut pas atteindre. Pour les personnes allergiques, nous recommandons un nettoyage annuel des matelas et canapés complété par l'utilisation de housses anti-acariens et une aération régulière des chambres. Cette combinaison réduit significativement la charge allergénique et améliore le confort respiratoire au quotidien.",
        },
        {
          question:
            "Pouvez-vous traiter efficacement les taches d'urine et les odeurs tenaces laissées par les animaux domestiques ?",
          answer:
            "Oui, nous utilisons un détachant enzymatique spécifique qui décompose les protéines présentes dans l'urine, éliminant ainsi la source de l'odeur plutôt que de simplement la masquer. Le produit agit pendant plusieurs minutes avant l'extraction, et dans les cas de contamination profonde ayant atteint le rembourrage, nous pouvons effectuer plusieurs passes ou recommander un traitement complémentaire. Les odeurs disparaissent généralement après séchage complet, mais certaines taches très anciennes peuvent laisser une légère décoloration du textile même après nettoyage.",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser un canapé ou de marcher sur un tapis après le nettoyage ?",
          answer:
            "Le temps de séchage dépend de l'épaisseur du textile, de la ventilation de la pièce et du taux d'humidité ambiant. Un tissu fin sèche plus rapidement qu'un velours épais, et un tapis posé sur un sol froid peut conserver l'humidité plus longtemps. Nous recommandons d'ouvrir les fenêtres pour accélérer l'évaporation et d’éviter de s'asseoir sur le canapé ou de marcher sur le tapis avant séchage complet, afin de ne pas marquer à nouveau les fibres encore humides.",
        },
        {
          question:
            "Dois-je préparer quelque chose dans mon logement avant votre arrivée pour le nettoyage des canapés et tapis ?",
          answer:
            "Oui, nous vous demandons de retirer les coussins décoratifs, plaids et objets posés sur le canapé, ainsi que les petits meubles ou objets fragiles placés sur ou à proximité du tapis à traiter. Si possible, dégagez un espace de circulation autour des textiles pour faciliter nos déplacements avec la machine. Pour les matelas, retirez draps, couette et protège-matelas avant notre arrivée. Ces préparations simples permettent de démarrer l'intervention immédiatement et de limiter la durée totale de présence à votre domicile.",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
