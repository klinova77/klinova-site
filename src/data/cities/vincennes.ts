// src/data/cities/vincennes.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Vincennes",
  slug: "vincennes",
  postalCodes: ["94300"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription:
    "Ville dense à l'est de Paris, Vincennes concentre un bâti ancien de standing et des copropriétés bordant le Bois. La proximité du RER A et du métro ligne 1 génère un flux piéton intense, sollicitant fortement les halls et circulations. Les dépôts végétaux liés au bois et la pollution urbaine imposent un entretien régulier des surfaces extérieures et intérieures.",

  // hubIntro : 2 paragraphes <p>...</p> + liste <ul><li>...</li></ul>
  hubIntro:
    "<p>Vincennes réunit un <strong>centre-ville très fréquenté</strong> et un <strong>parc immobilier exigeant</strong>, mêlant immeubles haussmanniens et résidences récentes. <strong>Klinova intervient en partenariat étroit avec les syndics et gestionnaires</strong> pour assurer la <strong>maintenance courante</strong> et les <strong>décrassages programmés</strong>, en tenant compte des contraintes d'accès et du standing attendu.</p>\n<p>Nos équipes connaissent les <strong>spécificités locales</strong> : rues étroites, stationnement limité, halls de prestige à préserver. Nous déployons un <strong>matériel compact</strong> et des <strong>protocoles adaptés</strong> à chaque site, avec un <strong>reporting systématique</strong> pour garantir le suivi et la traçabilité des interventions.</p>\n<ul>\n  <li><strong>Planification fine</strong> : coordination avec les résidents et rotation des véhicules pour limiter la gêne dans les rues étroites du centre-ville et autour des pôles de transport.</li>\n  <li><strong>Matériel adapté</strong> : équipements compacts et techniques d'injection-extraction ou haute pression modulables selon les surfaces (moquettes, carrelages, béton).</li>\n  <li><strong>Traçabilité complète</strong> : compte-rendu d'intervention remis au syndic avec photos avant/après, produits utilisés et recommandations de fréquence pour les prochaines opérations.</li>\n</ul>",

  citySpecificChallenges: [
    "Encrassement rapide des halls et circulations communes en raison du flux piéton intense lié au RER A et au métro ligne 1",
    "Dépôts végétaux, pollens et traces vertes sur balcons et garde-corps dus à la proximité immédiate du Bois de Vincennes",
    "Stationnement très tendu et rues étroites dans le centre-ville imposant du matériel compact et une planification rigoureuse",
    "Exigence esthétique élevée dans les immeubles anciens de standing nécessitant des protocoles soignés et un séchage maîtrisé",
  ],

  districts: [
    "Saint-Louis / Bérault",
    "Les Vignerons",
    "Daumesnil",
    "Centre ville",
    "Diderot / Domaine du bois",
  ],

  nearbyCities: [
    "saint-mande",
    "montreuil",
    "bagnolet",
    "fontenay-sous-bois",
    "nogent-sur-marne",
    "charenton-le-pont",
    "joinville-le-pont",
    "rosny-sous-bois",
    "le-perreux-sur-marne",
    "maisons-alfort",
  ],

  landmarks: [
    "Mairie de Vincennes",
    "Gare de Vincennes (RER A)",
    "Station Château de Vincennes (Métro ligne 1)",
    "Château de Vincennes",
    "Bois de Vincennes",
  ],

  faq: [
    {
      question:
        "Intervenez-vous rapidement sur Vincennes malgré la densité de circulation ?",
      answer:
        "<p><strong>Oui, nous planifions les interventions</strong> en tenant compte des <strong>créneaux de circulation fluide</strong> (matinée tôt ou après-midi). Nos équipes connaissent les accès depuis le RER A et le métro ligne 1, ainsi que les zones de stationnement temporaire autorisées. Pour une <strong>urgence (sinistre, fuite)</strong>, nous mobilisons un technicien sous <strong>48h</strong> avec du matériel léger adapté aux rues étroites.</p>",
    },
    {
      question: "Le déplacement pour établir un devis est-il facturé ?",
      answer:
        "<p><strong>Non, le déplacement et le diagnostic sur site sont gratuits</strong>, que l'immeuble soit situé près du Château ou dans les quartiers résidentiels bordant le Bois. Le technicien <strong>évalue les surfaces</strong>, identifie les contraintes d'accès (digicode, sous-sol, encombrement) et remet un <strong>chiffrage détaillé sous 48h</strong>.</p>",
    },
    {
      question:
        "Comment gérez-vous les contraintes de stationnement dans le centre-ville ?",
      answer:
        "<p><strong>Nous utilisons des véhicules compacts</strong> et planifions chaque intervention en repérant les emplacements de livraison ou les zones de dépose minute. Pour les <strong>opérations longues</strong> (parking souterrain, décrassage complet de halls), nous coordonnons avec le syndic pour obtenir une autorisation temporaire ou décaler l'intervention en <strong>heures creuses</strong>.</p>",
    },
    {
      question:
        "Proposez-vous un suivi régulier pour les copropriétés exigeantes ?",
      answer:
        "<p><strong>Oui, nous établissons un calendrier annuel ou semestriel</strong> avec le conseil syndical. Chaque passage fait l'objet d'un <strong>compte-rendu</strong> avec photos et observations (usure, taches récurrentes, recommandations). Ce suivi permet d'anticiper les dégradations et de maintenir un <strong>niveau de propreté constant</strong>, apprécié dans les immeubles de standing vincennois.</p>",
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
        "Dans les immeubles vincennois, le nettoyage professionnel des moquettes redonne aux halls et cages d'escalier une propreté immédiatement visible, renforçant l'image de la copropriété et le confort quotidien des résidents.",

      whyUsBullets: [
        "Connaissance des immeubles vincennois : Intervention régulière dans les résidences haussmanniennes du centre et les copropriétés bordant le Bois, avec adaptation aux accès restreints.",
        "Matériel performant et maîtrisé : Machines professionnelles d'injection-extraction garantissant une aspiration maximale de l'eau sale pour un séchage rapide et une propreté durable.",
        "Organisation respectueuse des résidents : Planification en heures creuses, information préalable des occupants, balisage clair des zones traitées pour limiter toute gêne quotidienne.",
      ],

      // 2 à 3 paragraphes <p>...</p> (mt-4 à partir du 2e)
      uniqueIntro:
        "<p>Les moquettes des parties communes à Vincennes subissent un <strong>encrassement progressif</strong> que beaucoup de syndics sous-estiment. Le <strong>flux piéton</strong> généré par le RER A et le métro ligne 1 dépose chaque jour particules fines, poussières et traces de chaussures dans les halls et sur les paliers. Les quartiers denses comme Saint-Louis ou le centre-ville connaissent une <strong>circulation permanente</strong>, accélérant le ternissement des fibres.</p>\n<p class=\"mt-4\">Sans intervention régulière, les taches s'incrustent, les zones de passage forment des traînées grises et l'aspect général se dégrade. Les résidents remarquent l'usure, les visiteurs perçoivent un manque de soin, et le conseil syndical reçoit des remarques. Cette dégradation visuelle nuit à <strong>l'image de l'immeuble</strong> et peut même affecter la <strong>valeur perçue du bien</strong>.</p>\n<p class=\"mt-4\">Un nettoyage professionnel structuré inverse cette dynamique : il élimine les <strong>salissures incrustées</strong>, ravive les couleurs d'origine et prolonge la durée de vie du revêtement. L'intervention devient un <strong>investissement de maintenance préventive</strong>, limitant les coûts de remplacement prématuré et restaurant la qualité d'accueil des espaces communs.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic précis sur site</h3>\n<p>Le technicien examine l'état de la moquette (fibres synthétiques, bouclées ou velours), identifie les taches tenaces (boue, café, graisse) et repère les <strong>zones de fort trafic</strong> (seuils, devant les ascenseurs, marches). Il note les contraintes d'accès : halls ouverts sur rue près du Château, escaliers étroits dans les immeubles haussmanniens, circulation des résidents aux heures de pointe. Cette analyse permet d'adapter la puissance de la machine, le choix du produit et le nombre de passes nécessaires.</p>\n\n<h3>Injection-extraction à l'eau chaude</h3>\n<p>La méthode consiste à injecter un mélange d'eau chaude et de détergent au cœur des fibres, puis à aspirer immédiatement l'eau sale chargée de particules. Sur les zones très encrassées (entrées, paliers du rez-de-chaussée), plusieurs passages sont effectués pour extraire les salissures profondes. Le technicien ajuste la pression selon la fragilité de la moquette, évitant toute détérioration des supports anciens.</p>\n\n<h3>Gestion du séchage et recommandations</h3>\n<p>L'extraction puissante limite l'<strong>humidité résiduelle</strong>. Le séchage complet intervient sous 6 à 12 heures selon la ventilation naturelle. Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat. Pour les copropriétés vincennoises sollicitées toute l'année, une <strong>fréquence de nettoyage</strong> tous les 12 à 18 mois maintient la propreté sans attendre l'encrassement critique.</p>",

      specificChallenges: [
        "Encrassement accéléré lié au flux du RER A et du métro ligne 1 : Les halls proches de la gare de Vincennes accumulent rapidement les particules fines et traces de pas, nécessitant des passages supplémentaires sur les seuils.",
        "Moquettes anciennes dans les immeubles de standing : Les fibres délicates des résidences haussmanniennes exigent une pression modérée et un réglage précis pour éviter l'écrasement ou la décoloration.",
        "Humidité résiduelle dans les rez-de-chaussée : Les halls ouverts sur rue ou les sous-sols mal ventilés ralentissent le séchage, imposant une extraction renforcée et des conseils d'aération adaptés.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles près du RER sont-elles plus difficiles à nettoyer ?",
          answer:
            "<p>Oui, le <strong>flux piéton intense</strong> génère un encrassement rapide et profond. Les particules fines se logent dans les fibres et les zones de seuil noircissent vite. Nous adaptons le <strong>nombre de passes</strong> et la <strong>concentration du détergent</strong> pour extraire ces salissures tenaces sans endommager la moquette, même dans les halls très fréquentés du centre-ville vincennois.</p>",
        },
        {
          question:
            "Intervenez-vous aussi dans les petites copropriétés résidentielles ?",
          answer:
            "<p>Absolument. Nous intervenons autant dans les grandes résidences collectives que dans les petits immeubles de 10 à 20 logements des quartiers Diderot ou Les Vignerons. Le diagnostic et la méthode restent identiques, seule la surface à traiter varie. Le matériel s'adapte aux <strong>escaliers étroits</strong> et aux <strong>halls de petite taille</strong>.</p>",
        },
        {
          question:
            "La méthode injection-extraction risque-t-elle d'abîmer une moquette ancienne ?",
          answer:
            "<p>Non, si elle est correctement réglée. Nous ajustons la <strong>pression</strong> et la <strong>température</strong> selon le type de fibres (laine, synthétique, bouclé). L'extraction puissante limite l'humidité résiduelle, évitant la déformation ou le rétrécissement. Les moquettes des immeubles haussmanniens vincennois, souvent fragiles, sont traitées avec une <strong>attention particulière</strong>.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention pour limiter la gêne des résidents ?",
          answer:
            "<p>Nous planifions le passage en <strong>heures creuses</strong> (matinée ou après-midi hors pointe) et informons les résidents <strong>48h à l'avance</strong> via le syndic. Les zones sont balisées pendant le séchage (6 à 12h). Pour les copropriétés du centre-ville, nous privilégions les créneaux où le stationnement et l'accès sont plus faciles.</p>",
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
        "Le nettoyage professionnel des parkings vincennois restitue des sols antidérapants, des marquages lisibles et une circulation fluide, tout en gérant la rotation des véhicules pour limiter la gêne des copropriétaires.",

      whyUsBullets: [
        "Connaissance des parkings vincennois : Intervention régulière dans les sous-sols des immeubles haussmanniens et des résidences collectives, avec adaptation aux accès étroits du centre-ville.",
        "Équipement professionnel adapté : Autolaveuse compacte et haute pression modulable pour traiter béton, résine ou peinture sans endommager les marquages ou saturer les évacuations.",
        "Coordination fluide avec les copropriétaires : Planification par zones, information préalable et rotation des véhicules pour assurer une intervention sans interruption d'accès ni désorganisation du stationnement.",
      ],

      uniqueIntro:
        "<p>Les parkings souterrains de Vincennes, qu'ils desservent les résidences du centre-ville ou les copropriétés proches du Bois, accumulent rapidement une couche de <strong>poussière noire</strong> mêlée à des traces d'hydrocarbures. La proximité du RER A et du métro ligne 1 génère un <strong>trafic automobile soutenu</strong> : les véhicules entrent et sortent plusieurs fois par jour, déposant particules fines et résidus de freinage sur les sols en béton ou en résine.</p>\n<p class=\"mt-4\">Au fil des mois, les marquages au sol se ternissent, les rampes deviennent glissantes, les angles et pieds de murs noircissent. Les copropriétaires remarquent cet encrassement, le conseil syndical reçoit des demandes d'intervention, mais la coordination d'un décrassage complet semble complexe : faut-il vider le parking ? Comment gérer l'eau de lavage ? Quelle organisation pour limiter la gêne ?</p>\n<p class=\"mt-4\">Un <strong>décrassage structuré</strong> et planifié répond à ces préoccupations. Il restaure la propreté des sols, améliore la visibilité des places et des zones de circulation, et renforce la <strong>sécurité</strong> en réduisant les risques de glissade. L'intervention devient un acte de <strong>gestion préventive</strong>, valorisant le patrimoine immobilier et le confort d'usage.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic technique et planification</h3>\n<p>Le technicien visite le parking pour identifier le type de revêtement (béton brut, peinture de sol, résine époxy), vérifier l'état des siphons et caniveaux, mesurer la hauteur sous plafond et repérer les contraintes d'accès (rampe en colimaçon, portail automatique, bornes de contrôle). Il note les zones de fort passage (emplacements visiteurs, rampes) et les taches d'huile anciennes. Cette analyse permet d'organiser l'intervention par zones successives, en coordonnant avec le syndic pour informer les résidents et planifier la rotation des véhicules.</p>\n\n<h3>Décrassage par autolaveuse et haute pression</h3>\n<p>Le balayage mécanique élimine d'abord les débris et poussières sèches. L'autolaveuse brosse ensuite le sol avec un mélange d'eau chaude et de <strong>dégraissant professionnel</strong>, puis aspire immédiatement les eaux sales. Sur les taches d'huile tenaces, un traitement localisé à la haute pression est appliqué. Les rampes, pieds de poteaux et angles sont nettoyés manuellement pour garantir une propreté homogène. L'eau de lavage est collectée et évacuée selon les normes, sans risque de saturation des siphons.</p>\n\n<h3>Gestion des accès et conseil de fréquence</h3>\n<p>Les zones sont traitées par rotation : moitié A le matin, moitié B l'après-midi, ou par étage selon la configuration. Les copropriétaires sont prévenus <strong>72h à l'avance</strong> et peuvent stationner temporairement dans la zone non traitée. Le parking reste accessible en permanence, seule la zone en cours de lavage est momentanément condamnée. Pour les copropriétés vincennoises à fort usage, un <strong>décrassage annuel ou semestriel</strong> maintient la propreté et évite l'accumulation de salissures grasses difficiles à éliminer.</p>",

      specificChallenges: [
        "Encrassement renforcé par le trafic du RER A et du métro ligne 1 : Les particules fines et résidus de freinage s'accumulent rapidement dans les parkings proches des pôles de transport, nécessitant un décrassage plus fréquent.",
        "Rampes en colimaçon et hauteur limitée : Les accès étroits typiques des immeubles anciens du centre imposent du matériel compact et une progression méthodique pour éviter tout encombrement ou collision.",
        "Évacuation des eaux de lavage délicate : Les siphons souvent sous-dimensionnés ou obstrués exigent une gestion rigoureuse du débit d'eau et une aspiration immédiate pour éviter toute stagnation ou refoulement.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings de Vincennes noircissent-ils aussi vite ?",
          answer:
            "<p>La proximité du RER A et du métro ligne 1 génère un <strong>trafic automobile dense</strong>. Les véhicules transportent particules fines, résidus de freinage et hydrocarbures qui se déposent quotidiennement sur les sols en béton. Les rampes et zones d'entrée concentrent cet encrassement, formant une <strong>couche grasse</strong> qui ternit les marquages et rend les surfaces glissantes.</p>",
        },
        {
          question:
            "Faut-il vider complètement le parking pendant l'intervention ?",
          answer:
            "<p>Non, nous travaillons par <strong>zones successives</strong>. Les copropriétaires stationnent dans la zone non traitée pendant que nous nettoyons l'autre moitié, puis inversement. Cette rotation planifiée avec le syndic garantit un <strong>accès permanent</strong> au parking. Seule la zone en cours de lavage est temporairement condamnée, le temps du <strong>séchage rapide</strong>.</p>",
        },
        {
          question:
            "Les taches d'huile anciennes peuvent-elles être éliminées ?",
          answer:
            "<p>Les taches récentes partent facilement avec un <strong>dégraissant professionnel</strong>. Les taches anciennes, imprégnées dans le béton poreux, s'atténuent fortement mais peuvent laisser une trace résiduelle. Nous appliquons plusieurs passes de <strong>haute pression</strong> et un détergent spécifique pour obtenir le meilleur résultat possible sans endommager le support.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation de l'eau de lavage ?",
          answer:
            "<p>L'autolaveuse aspire immédiatement l'eau sale, limitant le volume à évacuer par les siphons. Nous <strong>vérifions leur état</strong> avant l'intervention et, si nécessaire, nous écopons manuellement les excédents pour éviter toute saturation. L'eau est évacuée dans le réseau d'assainissement collectif, conformément aux normes locales.</p>",
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
        "Le nettoyage professionnel d'un balcon à Vincennes élimine dépôts verts, joints noircis et traces tenaces, restituant un espace extérieur propre et agréable à utiliser toute l'année.",

      whyUsBullets: [
        "Connaissance des supports vincennois : Intervention régulière sur carrelages, dalles béton et bois composite dans les résidences du centre-ville et les immeubles bordant le Bois.",
        "Produits et techniques adaptés : Sélection de détergents selon le matériau, pression réglée pour préserver joints et étanchéité, finitions soignées sur garde-corps et vitreries.",
        "Respect du voisinage : Gestion rigoureuse de l'eau de rinçage, protection des façades, intervention en journée pour limiter toute nuisance sonore dans les immeubles denses.",
      ],

      uniqueIntro:
        "<p>De nombreux habitants de Vincennes laissent leur balcon à l'abandon, rebutés par l'<strong>encrassement progressif</strong> des surfaces. La proximité du Bois de Vincennes favorise les dépôts de pollens, essences végétales et traces vertes qui s'incrustent dans les joints et sur les dalles. La pollution urbaine liée au RER A et au métro ligne 1 ajoute une couche de particules fines qui noircit les carrelages et ternit les garde-corps.</p>\n<p class=\"mt-4\">Après quelques saisons, les joints deviennent gris foncé, des mousses apparaissent dans les angles, les traces d'eau forment des auréoles blanchâtres. Le balcon devient un espace négligé, peu accueillant, que l'on évite d'utiliser. Les tentatives de nettoyage domestique avec un balai et un seau donnent des résultats décevants : les taches résistent, l'eau stagne, le sol reste terne.</p>\n<p class=\"mt-4\">Un nettoyage professionnel change radicalement la situation. Les supports retrouvent leur couleur d'origine, les joints redeviennent nets, les garde-corps et vitreries brillent. L'espace extérieur redevient fonctionnel et valorise le logement, que ce soit pour en profiter soi-même ou pour préparer une mise en location.</p>",

      uniqueDeepDive:
        "<h3>Préparation et protection des supports</h3>\n<p>Le technicien commence par protéger la porte-fenêtre, les menuiseries et les murs intérieurs avec des bâches étanches et du ruban adhésif. Les meubles de jardin, plantes et objets sont déplacés ou protégés individuellement. Les gros débris (feuilles mortes, terre des jardinières, résidus divers) sont ramassés manuellement et conditionnés dans des sacs. Cette phase évite que les salissures ne se dispersent lors du lavage et garantit la protection de l'intérieur.</p>\n\n<h3>Nettoyage adapté au type de support</h3>\n<p>Un produit nettoyant spécifique est appliqué selon le matériau : détergent alcalin pour le carrelage grès cérame, formule neutre pour le bois composite, traitement anti-mousse pour les dalles en béton. Le technicien brosse manuellement les joints, les angles et le pied du garde-corps pour déloger les salissures incrustées. Les surfaces planes sont ensuite rincées à pression contrôlée, jamais agressive, pour préserver l'étanchéité des joints et éviter tout dommage structurel. Le garde-corps, les vitreries et les murs mitoyens sont lavés avec une éponge ou un chiffon microfibre.</p>\n\n<h3>Gestion de l'eau et conseils d'entretien</h3>\n<p>L'eau de rinçage est dirigée vers l'évacuation du balcon à l'aide d'une raclette ou de chiffons absorbants, évitant toute coulure sur la façade ou chez les voisins inférieurs. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition et la ventilation. Le technicien conseille un balayage régulier, un rinçage léger après les périodes de pollen et un détartrage annuel des joints pour maintenir la propreté sans effort important.</p>",

      specificChallenges: [
        "Dépôts végétaux liés au Bois de Vincennes : Les balcons exposés aux essences du Bois accumulent pollens, mousses et traces vertes tenaces, nécessitant un traitement anti-mousse et un brossage méticuleux des joints.",
        "Joints de carrelage très encrassés : Les immeubles anciens du centre-ville présentent souvent des joints poreux qui retiennent particules fines et humidité, exigeant un brossage manuel et un rinçage multiple pour éliminer les résidus incrustés.",
        "Gestion de l'eau en immeuble dense : Les balcons superposés imposent un contrôle strict du ruissellement pour éviter coulures sur les façades haussmanniennes et désagréments chez les voisins inférieurs.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager mon carrelage ou mes joints ?",
          answer:
            "<p>Non, si la pression est correctement réglée. Nous utilisons une <strong>pression modérée (80 à 120 bars)</strong> adaptée au type de support. Les joints anciens ou fragiles sont brossés manuellement avant rinçage. Sur les dalles en grès cérame des immeubles récents, la pression peut être légèrement augmentée sans risque, tandis que les supports poreux ou le bois composite nécessitent un réglage plus doux.</p>",
        },
        {
          question:
            "Comment évitez-vous que l'eau coule chez les voisins du dessous ?",
          answer:
            "<p>Nous dirigeons systématiquement l'eau vers l'évacuation du balcon à l'aide de <strong>raclettes</strong> et de <strong>chiffons absorbants</strong>. Si le balcon n'a pas de siphon ou si l'évacuation est obstruée, nous écopons manuellement l'excédent et limitons le débit de rinçage. Cette gestion maîtrisée évite toute coulure sur la façade ou infiltration chez les voisins.</p>",
        },
        {
          question:
            "Les produits utilisés sont-ils sans danger pour mes plantes et mes animaux ?",
          answer:
            "<p>Oui, nous utilisons des <strong>détergents biodégradables</strong> sans danger après rinçage complet. Les plantes sont protégées ou déplacées pendant l'intervention. Une fois le balcon rincé et séché, vos animaux peuvent circuler librement sans risque. Nous évitons tout produit corrosif ou toxique, privilégiant des formules professionnelles à impact environnemental limité.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser mon balcon ?",
          answer:
            "<p>Le séchage complet intervient sous <strong>2 à 4 heures</strong> selon l'exposition au soleil et la ventilation naturelle. Vous pouvez marcher sur le balcon dès que les surfaces sont sèches au toucher, généralement en fin d'après-midi si l'intervention a lieu le matin. Pour réinstaller mobilier et plantes, nous conseillons d'attendre le séchage total des joints et des angles, soit environ une demi-journée.</p>",
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
        "Le nettoyage et la désinfection professionnels d'un balcon souillé par des fientes de pigeons à Vincennes éliminent les risques sanitaires et restituent un espace extérieur sain, utilisable en toute sécurité.",

      whyUsBullets: [
        "Connaissance des zones à risque vincennoises : Intervention régulière sur balcons des immeubles proches du Bois, du Château et des corniches haussmanniennes fréquentées par les pigeons.",
        "Protocole sanitaire strict et homologué : EPI complets, désinfection virucide/bactéricide, humidification préalable des fientes et évacuation sécurisée des déchets contaminés selon les normes en vigueur.",
        "Discrétion et respect du voisinage : Intervention en journée avec protection intégrale des accès, bâches étanches et gestion des odeurs pour limiter toute gêne aux résidents voisins.",
      ],

      uniqueIntro:
        "<p>Les balcons vincennois, particulièrement ceux des immeubles proches du Bois ou du Château, subissent régulièrement l'installation de <strong>colonies de pigeons</strong>. Les fientes s'accumulent sur le sol, le garde-corps et les murs mitoyens, formant une couche épaisse et durcie qui dégage une odeur âcre. Les occupants renoncent à utiliser leur balcon, ferment portes et fenêtres, et redoutent les <strong>risques sanitaires</strong> associés aux pathogènes présents dans les déjections.</p>\n<p class=\"mt-4\">Sans intervention, la situation empire : les fientes sèches se transforment en poussière volatile lors des courants d'air, les pigeons reviennent nicher, les voisins se plaignent. Certains locataires exigent une intervention rapide, d'autres menacent de quitter le logement. Les tentatives de nettoyage domestique aggravent le problème : balayer à sec disperse les poussières contaminées, rincer à grande eau crée des coulures chargées de bactéries.</p>\n<p class=\"mt-4\">Ce type de contamination nécessite un <strong>protocole professionnel strict</strong>, avec équipements de protection, désinfection homologuée et évacuation sécurisée des déchets. L'intervention permet de récupérer un balcon propre, désinfecté et utilisable, tout en limitant les risques de récidive par la pose éventuelle de solutions anti-pigeons.</p>",

      uniqueDeepDive:
        "<h3>Mise en sécurité et protection intégrale</h3>\n<p>Le technicien revêt une combinaison jetable, des gants épais, un masque respiratoire FFP2 et des lunettes de protection pour éviter tout contact avec les agents pathogènes. Des bâches étanches protègent la porte-fenêtre et l'intérieur du logement, empêchant la dispersion des poussières contaminées. Les fientes sèches sont <strong>humidifiées au préalable</strong> avec un pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules infectieuses. Cette phase prépare le ramassage manuel sans risque pour l'opérateur ni pour les voisins.</p>\n\n<h3>Ramassage, nettoyage et désinfection</h3>\n<p>Les fientes, nids et débris sont ramassés manuellement à l'aide de pelles et racloirs, puis conditionnés dans des sacs étanches à double paroi prévus pour déchets contaminés. Le sol, le garde-corps, les vitreries et les murs mitoyens sont ensuite nettoyés avec un détergent dégraissant pour éliminer les résidus organiques. Une fois les surfaces rincées, un <strong>produit désinfectant virucide et bactéricide homologué</strong> est appliqué sur l'ensemble du balcon. Le <strong>temps de contact réglementaire (10 à 15 minutes)</strong> est strictement respecté avant rinçage final. Cette étape neutralise les agents pathogènes résiduels.</p>\n\n<h3>Évacuation des déchets et conseils post-intervention</h3>\n<p>Les sacs de déchets contaminés sont évacués en toute sécurité, sans les abandonner dans les poubelles communes. Le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant <strong>24 heures minimum</strong>. Le technicien conseille d'inspecter régulièrement les corniches et garde-corps pour détecter tout retour de pigeons. Si nécessaire, des solutions de dissuasion (pics anti-pigeons, filets) peuvent être installées pour prévenir une nouvelle colonisation.</p>",

      specificChallenges: [
        "Colonisation favorisée par le Bois et les corniches du centre-ville : Les immeubles haussmanniens et les résidences bordant le Bois de Vincennes offrent de nombreux points de nidification, accélérant la contamination des balcons exposés.",
        "Poussières de fientes sèches hautement contaminantes : Les déjections anciennes se désagrègent en particules volatiles chargées de pathogènes (cryptococcose, histoplasmose), exigeant une humidification préalable rigoureuse avant tout ramassage.",
        "Évacuation des déchets contaminés : Les sacs étanches doivent être manipulés avec précaution et évacués en toute sécurité, sans transit par les parties communes non protégées ni abandon dans les bacs collectifs.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles vraiment un risque sanitaire ?",
          answer:
            "<p>Oui, les fientes contiennent des bactéries, champignons et parasites pathogènes (salmonelles, cryptocoques, histoplasma) pouvant provoquer infections respiratoires, allergies ou mycoses. Les <strong>poussières de fientes sèches</strong> sont particulièrement dangereuses lorsqu'elles sont inhalées. Un nettoyage domestique sans protection aggrave le risque. L'intervention professionnelle avec EPI, humidification préalable et désinfection homologuée neutralise ces dangers.</p>",
        },
        {
          question:
            "Les produits désinfectants utilisés sont-ils dangereux après séchage ?",
          answer:
            "<p>Non, une fois le balcon rincé et séché (<strong>délai de 24h</strong>), les produits désinfectants ne présentent plus aucun danger pour les habitants ou les animaux. Nous utilisons des virucides/bactéricides homologués, biodégradables et sans résidu toxique après rinçage. Le délai de 24h permet l'évaporation complète des agents actifs et garantit une réutilisation sans risque.</p>",
        },
        {
          question:
            "Les fientes peuvent-elles endommager définitivement mon balcon ?",
          answer:
            "<p>Oui, l'<strong>acidité des fientes</strong> corrode peintures, vernis et joints. Sur le béton, elles provoquent des taches tenaces et fragilisent les surfaces poreuses. Sur les garde-corps métalliques, elles accélèrent l'oxydation. Une intervention rapide limite les dégâts. Les taches anciennes peuvent laisser des marques résiduelles, mais le nettoyage professionnel élimine la couche organique et stoppe la dégradation.</p>",
        },
        {
          question: "Que deviennent les déchets contaminés après ramassage ?",
          answer:
            "<p>Les fientes, nids et débris sont conditionnés dans des <strong>sacs étanches à double paroi</strong>, évacués en toute sécurité par nos équipes. Ils ne transitent jamais par les poubelles communes de la copropriété. Nous respectons les protocoles de gestion des déchets contaminés pour éviter tout risque de dispersion ou de contamination secondaire dans l'immeuble ou le quartier.</p>",
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
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Vincennes élimine taches, acariens et odeurs, restituant des textiles propres et agréables au quotidien pour toute la famille.",

      whyUsBullets: [
        "Intervention régulière dans les foyers vincennois : Connaissance des logements familiaux du centre-ville et des résidences bordant le Bois, avec adaptation aux contraintes d'accès et de stationnement.",
        "Matériel professionnel mobile et discret : Machine d'injection-extraction adaptée aux domiciles, produits détachants sélectionnés selon le textile, extraction maximale pour un séchage rapide et sans résidu.",
        "Souplesse d'organisation et respect de l'intimité : Intervention en journée ou week-end selon vos disponibilités, durée maîtrisée (1h30 à 3h), présence du technicien uniquement dans les pièces concernées.",
      ],

      uniqueIntro:
        "<p>Dans les appartements vincennois, canapés et tapis supportent l'essentiel de la <strong>vie familiale</strong>. Les enfants y jouent, mangent, renversent du sirop ou du chocolat. Les animaux de compagnie laissent poils, traces de pattes boueuses et parfois des accidents. Les invités s'installent sans remarquer les auréoles anciennes sur les coussins ou les zones ternies du tapis devant le canapé.</p>\n<p class=\"mt-4\">Avec le temps, les textiles accumulent poussière, acariens et odeurs que l'aspirateur ne peut éliminer. Les taches récentes s'incrustent, les tentatives de détachage maison laissent des auréoles ou aggravent la situation. Le canapé perd son aspect accueillant, le tapis devient grisâtre, le matelas dégage une odeur de renfermé. Certains habitants développent des réactions allergiques ou ressentent une gêne à recevoir du monde dans un salon qui semble négligé.</p>\n<p class=\"mt-4\">Un <strong>nettoyage professionnel à domicile</strong> transforme cette situation. Les taches disparaissent, les fibres retrouvent leur souplesse, les odeurs s'estompent. L'intervention redonne aux textiles leur confort d'origine et <strong>assainit durablement l'intérieur</strong>, permettant de profiter pleinement de son logement sans craindre le regard des visiteurs.</p>",

      uniqueDeepDive:
        "<h3>Diagnostic textile et identification des taches</h3>\n<p>Le technicien examine chaque élément à traiter : type de tissu (coton, lin, velours, synthétique, cuir), épaisseur, couleur et fragilité. Il repère les taches visibles (vin, café, graisse, urine animale) et interroge les occupants sur l'historique des salissures. Cette analyse permet de choisir le produit adapté et d'ajuster la température de l'eau et la puissance d'aspiration. Les textiles anciens ou délicats nécessitent une méthode plus douce, tandis que les tapis synthétiques supportent un traitement plus intense.</p>\n\n<h3>Pré-traitement et injection-extraction</h3>\n<p>Les taches tenaces reçoivent un <strong>pré-traitement ciblé</strong> : détachant enzymatique pour l'urine, dégraissant pour les résidus alimentaires, neutralisant d'odeurs pour les zones imprégnées. Après un temps de pose de quelques minutes, la machine d'injection-extraction pulvérise un mélange d'eau chaude et de détergent au cœur des fibres, puis aspire immédiatement l'eau sale chargée de particules et d'acariens. Le technicien effectue plusieurs passages sur les zones très sollicitées (accoudoirs, assise centrale, devant du tapis).</p>\n\n<h3>Séchage et conseils d'entretien</h3>\n<p>L'extraction puissante limite l'humidité résiduelle. Le séchage complet intervient sous <strong>4 à 8 heures</strong> selon la ventilation du logement. Le technicien conseille d'aérer la pièce, d'orienter un ventilateur si possible et d'éviter de réutiliser le canapé avant séchage complet. Pour prolonger la propreté, il recommande un aspirateur hebdomadaire, l'utilisation de plaids protecteurs dans les zones de fort usage et un nettoyage professionnel annuel pour les foyers avec enfants ou animaux.</p>",

      specificChallenges: [
        "Vie familiale intense dans les appartements vincennois : Enfants, animaux de compagnie et usage quotidien des canapés génèrent taches organiques, poils et acariens que l'aspirateur domestique ne peut éliminer en profondeur.",
        "Taches d'urine animale et odeurs tenaces : Les accidents de chats ou chiens imprègnent les mousses et nécessitent un traitement enzymatique spécifique pour neutraliser les odeurs résiduelles et éviter les récidives.",
        "Séchage ralenti dans les logements peu ventilés : Les appartements sans balcon ou exposés au nord du centre-ville imposent une extraction renforcée et des conseils d'aération adaptés pour garantir un séchage complet sous 8 heures.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il vraiment les acariens et les allergènes ?",
          answer:
            "<p>Oui, l'<strong>injection-extraction à eau chaude (60-70°C)</strong> tue les acariens et aspire leurs déjections, principale source d'allergies. L'extraction puissante retire également pollens, poussières et particules fines accumulées dans les fibres. Les habitants souffrant d'asthme ou de rhinites constatent souvent une amélioration notable après l'intervention, surtout si le nettoyage est renouvelé annuellement.</p>",
        },
        {
          question:
            "Pouvez-vous traiter les taches d'urine et les odeurs persistantes ?",
          answer:
            "<p>Oui, nous utilisons un <strong>détachant enzymatique</strong> qui décompose les molécules organiques responsables des odeurs. Le produit pénètre en profondeur, même dans les mousses sous le tissu. Après un temps de pose, l'extraction aspire les résidus. Les odeurs disparaissent durablement, à condition que la tache soit traitée rapidement et que le support ne soit pas imprégné depuis plusieurs années.</p>",
        },
        {
          question:
            "Combien de temps avant de pouvoir réutiliser mon canapé ou marcher sur le tapis ?",
          answer:
            "<p>Le séchage complet intervient sous <strong>4 à 8 heures</strong> selon la ventilation. Vous pouvez marcher légèrement sur le tapis dès <strong>2h</strong>, mais évitez de vous installer sur le canapé avant séchage total. Aérez la pièce, orientez un ventilateur si possible. Pour un usage le soir même, planifiez l'intervention le matin.</p>",
        },
        {
          question: "Dois-je préparer quelque chose avant votre intervention ?",
          answer:
            "<p>Oui, retirez les <strong>coussins amovibles</strong> et les objets posés sur le canapé ou le tapis (magazines, télécommandes, jouets). Dégagez l'accès autour des éléments à traiter pour faciliter le passage de la machine. Si vous avez des animaux, placez-les dans une autre pièce le temps de l'intervention. Nous nous occupons du reste : diagnostic, traitement et conseils sur place.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "À Vincennes, approche exigeante pour logements haussmanniens et résidences de standing : parquets anciens, accès contraints et finitions visibles traités avec rigueur et discrétion.",

      whyUsBullets: [
        "Méthode orientée “résultat net” : pièces d’eau et cuisine traitées en profondeur, puis sols, puis finitions (plinthes, interrupteurs, poignées, rebords).",
        "Protection des matériaux de Vincennes : parquets anciens, boiseries et surfaces sensibles, avec un nettoyage précis plutôt que trop agressif.",
        "Logistique réaliste en hyper-centre : accès gardiens/digicodes anticipés, créneaux adaptés aux marchés et aux zones de forte densité piétonne (RER A / métro 1).",
      ],

      uniqueIntro:
        '<p>À Vincennes, la demande de nettoyage “appartement/maison” est rarement une simple question de ménage : on vise un rendu impeccable, discret et cohérent, surtout avant un état des lieux, une mise en vente ou une relocation. La ville est très dense, avec un parc de logements presque entièrement en collectif. Entre les immeubles haussmanniens de l’Avenue de Paris et les rues commerçantes comme la Rue de Fontenay, on rencontre souvent des circulations étroites, des étages sans ascenseur et des accès sécurisés (digicode, gardien).</p>\n<p class="mt-4">Le niveau d’exigence est élevé, particulièrement dans les secteurs Carré Magique et Domaine du Bois : les défauts se voient vite sur un parquet ancien, une fenêtre à grands battants ou une salle de bain entartrée. À l’inverse, côté Saint-Louis, République ou Sorano, les logements peuvent être plus “vivants” (activité, commerces, flux), ce qui impose un nettoyage qui tient dans le temps : dégraissage cuisine, calcaire maîtrisé, et finitions propres sur les points de contact.</p>\n<p class="mt-4">L’objectif de la prestation est simple : un logement qui “se présente bien” dès l’entrée. Pas seulement les surfaces : aussi les détails qui trahissent un nettoyage approximatif (plinthes, interrupteurs, portes, rebords de fenêtres). Et à Vincennes, c’est exactement ce que les propriétaires, locataires et agences regardent en premier.</p>',

      uniqueDeepDive:
        "<h3>Centre / Avenue de Paris — haussmannien, parquet et accès contraints</h3>\n<p>Dans le cœur de Vincennes, on rencontre souvent des parquets anciens (pointe de Hongrie), des boiseries et des cages d’escalier étroites. L’approche est progressive : dépoussiérage complet, cuisine et pièces d’eau en priorité, puis sols avec une finition qui évite le voile et les traces. On protège les zones sensibles et on contrôle les détails visibles (plinthes, encadrements, poignées).</p>\n\n<h3>Carré Magique / Domaine du Bois — standing et finitions “sans compromis”</h3>\n<p>Ces secteurs concentrent une clientèle très exigeante : vitrages plus exposés, entrées soignées, matériaux qualitatifs. On travaille “comme un contrôle qualité” : alignement du rendu sur toutes les pièces, traitement du calcaire sur robinetterie et parois, puis finitions nettes (interrupteurs, façades de cuisine, points de contact). Le but : un résultat homogène, pas juste des zones propres par endroits.</p>\n\n<h3>Rue de Fontenay / Saint-Louis — flux, commerces et organisation jour de marché</h3>\n<p>Autour de l’axe commerçant et des jours de marché, la logistique compte autant que la technique : stationnement, déchargement, circulation piétonne. On structure l’intervention pour limiter les allers-retours et garder du temps utile sur le nettoyage. Sur les logements “en rotation”, l’enjeu est d’obtenir rapidement un niveau de propreté lisible : cuisine dégraissée, salle d’eau sans dépôts, sols uniformes.</p>",

      specificChallenges: [
        "Stationnement très difficile à Vincennes : planifier l’accès et limiter les allers-retours, surtout en hyper-centre.",
        "Bâti ancien fréquent : escaliers étroits, étages sans ascenseur, portes et encadrements à traiter proprement.",
        "Parquets anciens et surfaces sensibles : éviter les traces et le voile, privilégier une méthode précise.",
        "Accès sécurisés (digicode, gardien) : coordination indispensable pour ne pas perdre de temps sur place.",
        "Flux RER A / métro 1 : poussières de voirie et traces sur vitrages bas, surtout près des grands axes.",
        "Jours de marché Rue de Fontenay : secteur à éviter pour l’intervention ou à cadrer sur des créneaux fluides.",
      ],

      faqAdditions: [
        {
          question:
            "Faites-vous des remises en état pour un état des lieux à Vincennes (94300) ?",
          answer:
            "<p>Oui. On suit une logique “état des lieux” : cuisine et salle d’eau en priorité, sols ensuite, puis finitions (plinthes, interrupteurs, poignées, rebords). L’objectif est un rendu homogène, sans traces au sol ni dépôts visibles sur les points sensibles.</p>",
        },
        {
          question:
            "Pouvez-vous intervenir après des travaux (peinture, ponçage léger) ?",
          answer:
            "<p>Oui. Après travaux, on procède en passes pour éviter le retour de poussière : surfaces et menuiseries d’abord, sols ensuite, puis contrôle des rebords et angles. Cela limite le “voile” sur les sols et les reprises visibles.</p>",
        },
        {
          question:
            "Comment protégez-vous les parquets anciens (haussmannien) ?",
          answer:
            "<p>On privilégie une méthode maîtrisée : dépoussiérage complet, nettoyage adapté au support, puis finition qui évite les traces. L’idée est d’obtenir un rendu net sans agresser le bois ni laisser de film.</p>",
        },
        {
          question: "Le stationnement est compliqué : comment ça se passe ?",
          answer:
            "<p>On anticipe avant l’arrivée : créneau, zone de déchargement, accès immeuble (gardien/digicode). Sur Vincennes, cette préparation évite de perdre du temps et sécurise la qualité de l’intervention.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
