import type { City } from "~/types/geo";

const city: City = {
  name: "Sevran",
  slug: "sevran",
  postalCodes: ["93270"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Sevran pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Entre les gares RER B et les quartiers résidentiels denses, une équipe locale assure des prestations adaptées aux contraintes du bâti sevranais.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Au cœur du parc de la Poudrerie et traversée par le canal de l'Ourcq, Sevran présente des configurations variées qui demandent une <strong>organisation rigoureuse</strong>. Klinova accompagne syndics, gestionnaires et particuliers avec des interventions planifiées selon les réalités de chaque secteur.</p>\n<p class=\"mt-4\">Halls d'immeubles, sous-sols, balcons ou espaces privatifs : chaque prestation s'appuie sur un diagnostic terrain préalable. L'équipe coordonne les accès, adapte les horaires et transmet un compte-rendu si demandé.</p>\n<ul>\n  <li><strong>Coordination locale :</strong> Prise en compte des contraintes de stationnement autour des gares Beaudottes et Sevran-Livry, planification en amont avec gardiens ou syndics.</li>\n  <li><strong>Interventions adaptées au bâti :</strong> Grands ensembles des années 70, pavillons anciens ou résidences récentes — chaque configuration fait l'objet d'un repérage avant intervention.</li>\n  <li><strong>Suivi et transparence</strong> : Reporting disponible pour les gestionnaires, photos avant/après sur demande, facturation détaillée sans surprise.</li>\n</ul>",


  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> des grands ensembles : béton brut, rampes étroites, ventilation limitée.",
    "Halls ouverts dans les cités anciennes : <strong>exposition aux poussières</strong> et passages fréquents.",
    "Balcons exposés aux fientes de pigeons, notamment à proximité du <strong>parc de la Poudrerie</strong>.",
    "Stationnement contraint autour des <strong>gares RER B</strong> : planification des accès indispensable.",
    "Pavillons anciens à Freinville et Sablons : <strong>escaliers étroits</strong>, accès jardin par l'intérieur.",
  ],

  // Texte brut uniquement
  districts: [
    "Les Beaudottes",
    "Montceleux / Pont-Blanc",
    "Rougemont",
    "Freinville",
    "Les Trèfles",
    "Les Sablons",
    "Centre-ville / Perrin",
    "Primevères / Savigny",
  ],

  // Voisinage (plain strings)
  nearbyCities: [
        "villepinte",
        "livry-gargan",
        "aulnay-sous-bois",
        "tremblay-en-france",
        "le-raincy",
        "bondy",
        "montfermeil",
        "le-blanc-mesnil",
        "villemomble",
        "gagny"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Sevran",
    "Gare de Sevran-Beaudottes",
    "Gare de Sevran-Livry",
    "Parc de la Poudrerie",
    "Centre Commercial BeauSevran",
    "Canal de l'Ourcq",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les quartiers denses comme les Beaudottes ?",
      answer: "<p>Nous contactons le gardien ou le syndic en amont pour <strong>valider les accès</strong> et définir un créneau adapté. Le matériel est acheminé tôt le matin ou en milieu de journée pour limiter la gêne. Un balisage temporaire sécurise la zone pendant l'intervention.</p>",
    },
    {
      question: "Pouvez-vous intervenir rapidement en cas de dégradation urgente ?",
      answer: "<p>Oui, nous proposons des créneaux sous 48 à 72 heures selon la nature de la demande. Pour les situations critiques à Sevran — fuite ayant souillé un parking, accumulation de déjections — nous <strong>priorisons le déplacement</strong> après échange téléphonique.</p>",
    },
    {
      question: "Le stationnement est compliqué près des gares RER. Comment gérez-vous cela ?",
      answer: "<p>L'équipe repère les possibilités de stationnement avant chaque intervention. Nous privilégions les <strong>horaires décalés</strong> ou utilisons les parkings relais quand c'est possible. Le véhicule reste sur place uniquement le temps nécessaire au déchargement du matériel.</p>",
    },
    {
      question: "Travaillez-vous avec les bailleurs sociaux présents sur la commune ?",
      answer: "<p>Nous intervenons régulièrement pour des gestionnaires de patrimoine social. Les modalités — <strong>bons de commande, reporting mensuel, accès Vigik</strong> — sont intégrées à notre organisation. Chaque intervention est tracée et peut faire l'objet d'un compte-rendu.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // SERVICES demandés : ne pas inclure les services absents
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes par injection-extraction, avec séchage contrôlé pour une remise en service rapide adaptée à vos contraintes d'accès.",
      whyUsBullets: [
        "Connaissance des configurations locales : cabinets médicaux, halls de résidences récentes et bâtiments administratifs du secteur René-Muret.",
        "Matériel injection-extraction professionnel adapté aux velours ras comme aux dalles textiles épaisses des espaces tertiaires.",
        "Interventions planifiées hors heures d'affluence pour limiter la gêne des occupants et patients.",
      ],
      uniqueIntro: "<p>Dans le secteur proche de l'Hôpital René-Muret, les cabinets médicaux et bureaux administratifs reçoivent un flux régulier de visiteurs. Les fibres textiles accumulent poussières fines, traces de semelles et résidus organiques qui ternissent progressivement l'aspect des sols. Sans entretien adapté, ces dépôts s'incrustent et deviennent difficiles à éliminer par simple aspiration.</p>\n<p class=\"mt-4\">Les halls de petits collectifs et résidences récentes présentent souvent des revêtements velours ras ou dalles textiles. Ces supports captent rapidement les particules transportées depuis l'extérieur. Un <strong>détachage régulier</strong> préserve leur tenue et évite le grisaillement prématuré des zones de passage intensif.</p>\n<p class=\"mt-4\">Le trafic quotidien lié aux gares RER génère un apport constant de boue et poussière dans les espaces d'accueil. Une intervention structurée permet d'extraire ces salissures en profondeur, de traiter les taches localisées et de restituer un rendu visuel satisfaisant sans perturber l'activité des occupants.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\n<p>Les couloirs et entrées concentrent l'essentiel des dépôts. Après diagnostic du type de fibre, une aspiration préalable retire les particules libres. Le traitement par injection-extraction cible ensuite ces surfaces à fort piétinement avec plusieurs passes successives.</p>\n\n<h3>Espaces d'accueil et salles d'attente</h3>\n<p>Les revêtements des zones où les visiteurs patientent présentent souvent des taches localisées. Un détachage ciblé précède le nettoyage général. Les plinthes et bas de murs reçoivent une protection avant intervention pour éviter les projections.</p>\n\n<h3>Bureaux et pièces secondaires</h3>\n<p>Ces surfaces moins sollicitées bénéficient d'un traitement adapté à leur niveau d'encrassement. L'extraction maximale de l'humidité réduit le <strong>temps de séchage</strong>. Selon l'épaisseur du revêtement et la ventilation disponible, comptez généralement quatre à huit heures avant remise en service complète.</p>",
      specificChallenges: [
        "Cabinets médicaux nécessitant une remise en service rapide entre deux journées de consultation.",
        "Halls de résidences récentes avec revêtements velours ras sensibles au feutrage.",
        "Apport constant de <strong>boue et poussière</strong> depuis les gares RER vers les espaces d'accueil.",
        "Escaliers étroits dans certains collectifs compliquant l'acheminement du matériel d'extraction.",
        "Taches anciennes incrustées après plusieurs saisons sans entretien professionnel.",
      ],
      faqAdditions: [
        {
          question: "Comment acheminez-vous le matériel d'extraction dans les escaliers étroits du quartier des Beaudottes ?",
          answer: "<p>Notre équipement se démonte en modules transportables. Dans les cages d'escalier sans ascenseur ou avec des passages réduits, nous procédons par étapes successives. Le balisage temporaire sécurise le cheminement et limite la gêne pour les résidents pendant l'installation.</p>",
        },
        {
          question: "Combien de temps faut-il attendre avant de réutiliser les moquettes d'un cabinet médical proche de l'Hôpital René-Muret ?",
          answer: "<p>Après extraction maximale de l'humidité, le séchage varie selon l'épaisseur du revêtement et la ventilation du local. Pour un cabinet bien aéré avec moquette fine, comptez quatre à six heures. Nous pouvons intervenir en fin de journée pour une remise en service dès le lendemain matin.</p>",
        },
        {
          question: "Quelle méthode privilégiez-vous pour les moquettes velours ras des résidences récentes sans risquer le feutrage ?",
          answer: "<p>L'injection-extraction à basse pression convient aux fibres courtes et denses. Nous ajustons le débit d'eau et la puissance d'aspiration pour éviter d'écraser les poils. Un <strong>brossage doux</strong> en fin d'intervention redresse les fibres et préserve l'aspect uniforme du revêtement.</p>",
        },
        {
          question: "Parvenez-vous à traiter les taches anciennes incrustées par la boue transportée depuis les gares RER après l'hiver ?",
          answer: "<p>Les dépôts minéraux et organiques accumulés sur plusieurs mois nécessitent un prétraitement ciblé avant extraction. Nous appliquons un détachant adapté au type de salissure, laissons agir puis procédons à plusieurs passes d'injection-extraction. Le résultat dépend de l'ancienneté et de la nature des taches.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et balisage sécurisé pour maintenir l'accès aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et de flux propres aux parkings du secteur BeauSevran et des résidences environnantes.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées pour un résultat conforme aux exigences des gestionnaires.",
        "Coordination avec le syndic ou l'exploitant pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: "<p>Les traces noires s'accumulent sur les allées de circulation, les coulures d'huile marquent les places de stationnement, et les rigoles d'évacuation se bouchent progressivement. Sur les parkings aériens et silos du Centre Commercial BeauSevran, le passage quotidien des véhicules et les livraisons régulières laissent des dépôts tenaces que le simple balayage ne suffit pas à éliminer.</p>\n<p class=\"mt-4\">Un sol de parking encrassé génère des plaintes récurrentes : glissance sur les rampes, odeurs persistantes en sous-sol, image dégradée pour les visiteurs. Les revêtements béton brut en souterrain et enrobé en aérien réagissent différemment aux salissures, mais tous deux nécessitent un traitement adapté pour retrouver un aspect propre et sécurisé.</p>\n<p class=\"mt-4\">L'usage intense lié aux clients et aux livraisons impose une organisation rigoureuse : diagnostic préalable du revêtement, coordination avec le gestionnaire pour limiter la gêne, et intervention par zones successives. Le résultat attendu : des sols assainis, des évacuations fonctionnelles, et une remise en service rapide.</p>",
      uniqueDeepDive: "<h3>Sol assaini et circulation sécurisée</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des graisses, huiles et poussières incrustées, avec des rigoles dégagées et des rampes antidérapantes. Le gestionnaire reçoit un compte-rendu photographique avant/après.</p>\n<p class=\"mt-4\">Pour y parvenir, nous démarrons par un diagnostic du type de sol et de l'état des évacuations, puis un balayage mécanique prépare la surface au traitement.</p>\n\n<h3>Lavage mécanisé et dégraissage ciblé</h3>\n<p>L'autolaveuse effectue des passes successives avec un dégraissant adapté au béton ou à l'enrobé. Les zones critiques — pieds de murs, angles morts, rampes — reçoivent un traitement renforcé à la haute pression.</p>\n<p class=\"mt-4\">Les eaux de lavage sont récupérées et dirigées vers les évacuations conformément aux règles en vigueur, sans rejet sauvage.</p>\n\n<h3>Rotation des véhicules et balisage</h3>\n<p>Le chantier avance par secteurs pour permettre aux usagers de stationner sur les zones libérées. Une signalétique temporaire sécurise les passages et informe des délais de séchage avant remise en circulation complète.</p>",
      specificChallenges: [
        "Taches d'huile anciennes sur les places de stationnement du silo BeauSevran.",
        "Rampes inclinées nécessitant un traitement antidérapant après lavage.",
        "Rigoles obstruées par les dépôts de poussière et résidus de pneus.",
        "Flux clients continu imposant une intervention par zones successives.",
        "Sous-sols mal ventilés où les odeurs de graisse persistent sans décrassage régulier.",
      ],
      faqAdditions: [
        {
          question: "Pouvez-vous éliminer les taches d'huile anciennes sur le parking silo de BeauSevran sans abîmer le béton ?",
          answer: "<p>Les taches d'huile incrustées sont traitées avec un dégraissant alcalin appliqué avant le passage de l'autolaveuse. Le produit agit sur la graisse sans attaquer le béton. Plusieurs passes peuvent être nécessaires sur les zones les plus marquées, mais le résultat reste visible dès la première intervention.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des eaux de lavage dans un parking souterrain à Sevran ?",
          answer: "<p>Les eaux chargées sont dirigées vers les regards existants après vérification de leur bon fonctionnement. Si les évacuations sont partiellement obstruées, nous les dégageons avant le lavage. Aucun rejet n'est effectué vers l'extérieur ou les espaces verts. Le gestionnaire est informé si une anomalie est constatée.</p>",
        },
        {
          question: "Quelles plages horaires proposez-vous pour intervenir sans gêner la clientèle du centre BeauSevran ?",
          answer: "<p>Les interventions sont généralement programmées en dehors des heures d'affluence : tôt le matin avant ouverture, en soirée après fermeture, ou la nuit selon l'accord du gestionnaire. Le planning est validé en amont pour éviter tout conflit avec les livraisons ou les pics de fréquentation.</p>",
        },
        {
          question: "Quelle différence d'approche technique appliquez-vous entre un parking aérien et un souterrain à Sevran ?",
          answer: "<p>En aérien, l'enrobé supporte mieux la haute pression et sèche rapidement grâce à la ventilation naturelle. En souterrain, le béton brut demande un dégraissant adapté et un temps de séchage plus long. La gestion des eaux diffère également : évacuation directe en surface, récupération contrôlée en sous-sol.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Sevran : sols, garde-corps et vitrages traités avec une pression adaptée, sans coulures chez vos voisins du dessous.",
      whyUsBullets: [
        "Connaissance des balcons exposés aux axes routiers et à l'humidité du canal, fréquents à Sevran.",
        "Pression ajustée au support : béton, carrelage ou dalles sur plots, sans risque pour les joints.",
        "Protection systématique des voisins du dessous et gestion rigoureuse de l'écoulement des eaux.",
      ],
      uniqueIntro: "<p>Dans le secteur pavillonnaire de Freinville et sur les loggias des résidences alentour, les balcons accumulent rapidement un voile grisâtre. Poussières fines ramenées par le vent, traces de pollution, dépôts verts qui s'installent dans les joints : au bout de quelques saisons, l'espace extérieur perd son attrait. On repousse l'apéro dehors, on hésite à sortir les plantes.</p>\n<p class=\"mt-4\">Un balcon propre, c'est un espace qu'on utilise vraiment. Les supports varient selon l'âge du bâti — béton brut sur les immeubles anciens, carrelage ou dalles sur plots dans les constructions récentes. Chaque matériau réagit différemment au brossage et au rinçage. Un traitement adapté redonne de la clarté au sol, fait ressortir les couleurs d'origine et supprime cette sensation de surface collante sous les pieds.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic visuel : état des joints, fragilité éventuelle du garde-corps, présence de mobilier ou de jardinières à protéger. Cette étape permet de calibrer la pression, de choisir le bon produit et d'organiser l'évacuation de l'eau sans gêner les voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Dépôts incrustés et mousses tenaces</h3>\n<p>Les feuilles mortes, la terre accumulée et les résidus verts sont retirés manuellement. Les zones où la mousse s'est installée reçoivent un produit adapté qui décolle les salissures sans attaquer les joints.</p>\n\n<h3>Surfaces encrassées et traces grises</h3>\n<p>Le sol est brossé mécaniquement ou à la main selon la fragilité du support. Le rinçage s'effectue à pression contrôlée pour ne pas projeter d'eau sur la façade ni chez les voisins. Les garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Mobilier exposé et séchage</h3>\n<p>Les jardinières et le mobilier sont déplacés ou bâchés avant le début du travail. Une fois le rinçage terminé, l'eau résiduelle est raclée vers l'évacuation. Le balcon sèche en quelques heures selon l'exposition. Des conseils d'entretien sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Mousses et dépôts verts favorisés par la proximité du Canal de l'Ourcq et des espaces boisés.",
        "Pollution fine liée aux axes A104 et RN2, qui ternit les surfaces en quelques mois.",
        "Joints fragiles sur les loggias des résidences années 60-70, nécessitant une pression douce.",
        "Accès en étage élevé sans monte-charge dans certaines cités, imposant un matériel léger et autonome.",
        "Règlements de copropriété stricts chez les bailleurs sociaux, avec horaires d'intervention encadrés.",
      ],
      faqAdditions: [
        {
          question: "Comment éliminez-vous les dépôts verts et mousses sur les balcons exposés à l'humidité du Canal de l'Ourcq ?",
          answer: "<p>Un produit désincrustant est appliqué sur les zones vertes, puis laissé agir quelques minutes. Le brossage décolle la mousse sans gratter le support. Le rinçage à pression modérée évacue les résidus. Sur les balcons proches du canal, ce traitement limite la repousse pendant plusieurs mois.</p>",
        },
        {
          question: "Quelle méthode douce recommandez-vous pour nettoyer carrelage et joints des loggias de Freinville sans abîmer les carreaux ?",
          answer: "<p>Le brossage manuel ou mécanique à faible vitesse préserve l'émail du carrelage. La pression de rinçage est réduite pour ne pas creuser les joints. Si des fissures sont visibles, nous adaptons le débit et signalons les zones à surveiller. Le résultat reste homogène sans fragiliser le revêtement.</p>",
        },
        {
          question: "Comment évitez-vous les coulures sur façades lors du nettoyage d'un balcon en centre-ville ?",
          answer: "<p>L'eau est dirigée vers l'intérieur du balcon et raclée vers l'évacuation existante. Une bâche ou un absorbant protège le garde-corps côté rue. Le rinçage s'effectue par petites quantités pour contrôler le débit. Les voisins du dessous sont prévenus si nécessaire.</p>",
        },
        {
          question: "Si le balcon est au cinquième étage sans monte-charge, comment organisez-vous l'accès et la protection du mobilier ?",
          answer: "<p>Le matériel utilisé est compact et transportable à la main. Les jardinières et chaises sont déplacées ou recouvertes sur place. L'intervention est planifiée pour limiter les allers-retours dans les parties communes. Un balisage temporaire sécurise le palier pendant le passage du technicien.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et protection contre le retour des volatiles.",
      whyUsBullets: [
        "Connaissance des zones à risque autour du Parc de la Poudrerie et des quartiers exposés aux colonies de pigeons.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide après chaque intervention.",
        "Évacuation sécurisée des déchets en sacs étanches et coordination avec le voisinage pour limiter les nuisances.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons exposés près du <strong>Parc de la Poudrerie</strong> et du <strong>Canal de l'Ourcq</strong> accumulent des dépôts de fientes qui s'incrustent dans les joints et les garde-corps. L'odeur devient gênante, le linge étendu s'imprègne, et l'espace extérieur perd toute utilité. Cette situation concerne particulièrement les logements orientés vers les zones arborées où la présence d'oiseaux reste importante toute l'année.</p>\n<p class=\"mt-4\">Les corniches et balcons ouverts des grands ensembles sevranais présentent des recoins qui favorisent l'accumulation. Les fientes attaquent progressivement le béton, la peinture des rambardes et les revêtements de sol. Sans traitement, les dégâts s'aggravent et les risques sanitaires augmentent pour les occupants qui respirent les poussières contaminées lors de l'aération du logement.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon sain et utilisable. Le protocole inclut le confinement de la zone, le retrait sécurisé des déchets, la désinfection des surfaces et la pose éventuelle de dispositifs anti-retour pour éviter une nouvelle colonisation.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur propre, sans odeur ni risque sanitaire. Les supports retrouvent leur aspect d'origine après élimination des dépôts acides qui dégradent béton et peintures. La désinfection neutralise les agents pathogènes présents dans les fientes séchées.</p>\n\n<h3>Sécurisation et retrait des déchets</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour protéger l'intérieur du logement et limiter la dispersion vers les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n\n<h3>Traitement des surfaces et prévention</h3>\n<p>Sol, garde-corps, vitrages et murs mitoyens sont nettoyés puis traités avec un produit virucide homologué. Après rinçage et temps d'aération, le balcon peut être réutilisé. Des pics ou filets anti-pigeons peuvent être posés sur les rebords et corniches pour empêcher le retour des volatiles.</p>",
      specificChallenges: [
        "Proximité du Parc de la Poudrerie : colonies de pigeons installées dans les arbres centenaires.",
        "Balcons des grands ensembles avec recoins et corniches favorisant l'accumulation de fientes.",
        "Odeurs persistantes après plusieurs semaines sans intervention sur les logements exposés.",
        "Risques sanitaires liés aux poussières contaminées lors de l'aération des appartements.",
        "Coordination nécessaire avec les voisins pour éviter les nuisances pendant le traitement.",
      ],
      faqAdditions: [
        {
          question: "Quels risques sanitaires présentent les fientes accumulées sur un balcon exposé vers le Parc de la Poudrerie ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui se dispersent sous forme de poussières sèches. L'inhalation régulière peut provoquer des troubles respiratoires. Les balcons orientés vers les zones arborées du parc sont particulièrement exposés en raison de la densité de volatiles présents toute l'année.</p>",
        },
        {
          question: "Quels équipements de protection utilisez-vous pour intervenir sur un balcon en hauteur à Sevran ?",
          answer: "<p>L'intervenant porte un masque FFP2, des lunettes de protection, une combinaison jetable et des gants. La zone est confinée par bâchage pour protéger l'intérieur du logement. Cette procédure s'applique quel que soit l'étage, avec une attention particulière aux balcons des grands ensembles où l'accès peut être contraint.</p>",
        },
        {
          question: "Quels produits désinfectants appliquez-vous après le retrait des fientes à Sevran ?",
          answer: "<p>Nous utilisons des produits virucides et bactéricides homologués, appliqués sur l'ensemble des surfaces après nettoyage. Le temps de contact est respecté avant rinçage. Cette désinfection élimine les agents pathogènes résiduels et neutralise les odeurs persistantes sur le béton et les garde-corps.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des déchets dans une copropriété du quartier des Beaudottes ?",
          answer: "<p>Les fientes et résidus sont conditionnés en sacs étanches dès le ramassage. L'évacuation se fait sans transit par les parties communes sensibles. Nous coordonnons l'intervention avec le gardien ou le syndic pour utiliser les accès adaptés et limiter les nuisances pour les autres résidents de l'immeuble.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Extraction en profondeur des salissures incrustées dans vos canapés, tapis et matelas, avec détachage ciblé et séchage maîtrisé pour retrouver un textile frais et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Sevran, du centre-ville aux quartiers pavillonnaires comme Freinville ou Les Sablons.",
        "Détachage ciblé selon la nature des taches et injection-extraction adaptée à chaque type de fibre textile.",
        "Organisation souple pour gérer les contraintes de stationnement et d'accès aux étages sans ascenseur.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans le <strong>centre-ville de Sevran</strong> comme autour de l'ancienne Mairie, les logements familiaux concentrent ces usages intensifs sur des textiles sollicités chaque jour.</p>\n<p class=\"mt-4\">Un canapé détaché retrouve son aspect d'origine et redevient accueillant. Un tapis débarrassé de ses poussières profondes change l'atmosphère d'une pièce. Un matelas assaini offre un confort de sommeil différent. Dans les pavillons et appartements équipés de tissus variés — velours ras, microfibre, coton épais —, l'entretien régulier préserve la durée de vie des textiles et limite les allergènes.</p>\n<p class=\"mt-4\">L'intervention s'organise autour de vos contraintes : <strong>stationnement parfois difficile</strong> en centre-ville, ascenseurs pas toujours disponibles dans certaines résidences. Nous adaptons notre logistique pour intervenir efficacement, même quand l'accès au logement demande un peu d'anticipation.</p>",
      uniqueDeepDive: "<h3>Textile propre et odeurs neutralisées</h3>\n<p>L'objectif est de restituer un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus invisibles. Les fibres retrouvent leur souplesse, les couleurs leur éclat, et les odeurs disparaissent durablement.</p>\n\n<h3>Diagnostic et détachage adapté</h3>\n<p>Chaque textile fait l'objet d'une identification préalable : nature de la fibre, type de taches, zones d'usure. Un test discret sur une partie cachée valide la méthode. Le pré-traitement cible les salissures tenaces — café, vin, urine, graisse — avec des produits enzymatiques si nécessaire.</p>\n\n<h3>Injection-extraction et séchage</h3>\n<p>Le traitement principal repose sur l'injection-extraction textile : l'eau et le produit pénètrent la fibre, puis sont aspirés avec les salissures. La pression et la température s'ajustent selon la fragilité du support. L'extraction maximale réduit le temps de séchage. Nous indiquons le délai de remise en service selon l'épaisseur du textile et l'aération disponible.</p>",
      specificChallenges: [
        "Taches d'animaux fréquentes dans les pavillons avec jardin autour de Freinville.",
        "Textiles familiaux sollicités quotidiennement : canapés, tapis de salon, matelas enfants.",
        "Stationnement contraint en centre-ville pour décharger le matériel d'intervention.",
        "Ascenseurs parfois en panne dans les résidences des grands ensembles.",
        "Fibres variées nécessitant une adaptation de la méthode : velours, microfibre, coton épais.",
      ],
      faqAdditions: [
        {
          question: "Proposez-vous un traitement anti-acariens pour les canapés des foyers de Montceleux où des allergies apparaissent ?",
          answer: "<p>L'extraction en profondeur élimine une grande partie des acariens et de leurs déjections logés dans les fibres. Le résultat améliore sensiblement le confort des personnes sensibles. Pour les foyers de Montceleux confrontés à des allergies récurrentes, nous recommandons un entretien régulier, deux à trois fois par an selon l'usage du canapé.</p>",
        },
        {
          question: "Comment traitez-vous les taches et odeurs d'urine d'animaux sur un tapis dans un pavillon de Freinville ?",
          answer: "<p>Les taches d'urine nécessitent un pré-traitement enzymatique qui décompose les résidus organiques avant extraction. Cette méthode neutralise les odeurs à la source plutôt que de les masquer. Sur les tapis épais des pavillons de Freinville, nous insistons sur l'extraction pour éviter que l'humidité ne stagne dans les fibres profondes.</p>",
        },
        {
          question: "Comment adaptez-vous la méthode selon le textile d'un canapé du centre-ville de Sevran ?",
          answer: "<p>Chaque fibre réagit différemment : le velours demande une pression réduite, la microfibre supporte une extraction plus intense, le coton épais nécessite un temps de séchage plus long. Nous identifions le textile avant intervention et réalisons un test sur zone cachée. Cette adaptation évite les auréoles et préserve l'aspect du revêtement.</p>",
        },
        {
          question: "Quelles solutions proposez-vous si le stationnement est impossible et l'ascenseur en panne pour un nettoyage de canapé ?",
          answer: "<p>Nous anticipons ces contraintes lors de la prise de rendez-vous. Si le stationnement est difficile en centre-ville, nous identifions un créneau adapté ou une zone de dépose temporaire. Pour les étages sans ascenseur, notre matériel portable permet d'intervenir sans monte-charge. L'organisation se cale sur vos disponibilités et les accès réels du logement.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse à Sevran, avec traitement adapté au support et application anti-mousse pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses sevranaises exposées à l'humidité du canal et à l'ombre des parcs environnants.",
        "Adaptation du traitement selon le support : pression contrôlée sur bois composite, désincrustant sur béton ou carrelage.",
        "Protection systématique du mobilier et des plantations, gestion de l'évacuation d'eau vers les écoulements existants.",
      ],
      uniqueIntro: "<p>Comment profiter d'une terrasse quand la mousse s'étend un peu plus chaque saison ? Dans les quartiers pavillonnaires autour du <strong>Parc des Sœurs</strong>, sur l'ancien site Kodak, les espaces extérieurs subissent l'humidité ambiante. Les dalles deviennent glissantes, le carrelage verdit par endroits, et l'envie de s'installer dehors diminue progressivement.</p>\n<p class=\"mt-4\">Sur les terrasses en béton ou carrelage, fréquentes à Sevran, les dépôts verts s'incrustent dans les joints et les micro-aspérités. Le bois composite, présent sur les rénovations récentes, accumule une pellicule terne qui altère son aspect. Sans intervention adaptée, ces surfaces perdent leur attrait et nécessitent un entretien plus lourd chaque année.</p>\n<p class=\"mt-4\">L'exposition variable des terrasses sevranaises — ombre des arbres ou plein sud — influence directement la vitesse d'encrassement. La proximité du Canal de l'Ourcq accentue l'humidité sur certains secteurs. Un diagnostic préalable permet d'adapter le traitement au support et aux conditions locales.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché. Les jardinières et plantes sont écartées de la zone de travail. Les menuiseries — baies vitrées, portes — reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage élimine les gros dépôts : feuilles mortes, terre accumulée, débris végétaux.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour le bois composite, désincrustant pour le carrelage ou le béton. Le brossage — manuel ou mécanique selon la surface — décolle les salissures tenaces.</p>\n<p class=\"mt-4\">La haute pression intervient si le matériau le permet, avec réglage contrôlé pour préserver les joints. Les garde-corps et murets sont traités dans la foulée.</p>\n\n<h3>Finition et conseils</h3>\n<p>L'eau est évacuée vers les points d'écoulement existants. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts.</p>\n<p class=\"mt-4\">Des conseils d'entretien saisonnier vous sont transmis pour espacer les interventions.</p>",
      specificChallenges: [
        "Mousse persistante sur les terrasses ombragées proches du Parc des Sœurs.",
        "Joints de carrelage encrassés par l'humidité liée à la proximité du Canal de l'Ourcq.",
        "Bois composite terni sur les pavillons rénovés des quartiers Freinville et Sablons.",
        "Accès parfois contraint par le passage obligé à travers la maison dans le pavillonnaire ancien.",
        "Dépôts verts récurrents sur les expositions nord ou sous couvert végétal.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous la mousse et les lichens sur une terrasse exposée depuis plusieurs années près de l'ancien site Kodak ?",
          answer: "<p>Nous appliquons un produit désincrustant adapté au support, suivi d'un brossage mécanique pour décoller les dépôts verts incrustés. Sur les terrasses du secteur Parc des Sœurs, l'humidité favorise ces formations : un traitement préventif peut être appliqué pour ralentir leur retour.</p>",
        },
        {
          question: "Quelle méthode douce utilisez-vous pour nettoyer une terrasse en bois composite sans abîmer les lames ?",
          answer: "<p>Le bois composite des rénovations récentes à Sevran nécessite une pression modérée et un produit non agressif. Nous évitons le jet haute pression direct sur les lames et privilégions un brossage doux combiné à un rinçage contrôlé pour préserver l'aspect et la durabilité du matériau.</p>",
        },
        {
          question: "Proposez-vous un traitement anti-mousse durable pour les terrasses situées à proximité du Canal de l'Ourcq ?",
          answer: "<p>Oui, après le nettoyage, nous pouvons appliquer un traitement préventif qui freine la réapparition des mousses. Sur les secteurs humides proches du canal, ce traitement prolonge la durée entre deux interventions, surtout sur les expositions nord ou ombragées.</p>",
        },
        {
          question: "À quelle fréquence faut-il nettoyer une terrasse ombragée par rapport à une exposition plein sud près du Parc de la Poudrerie ?",
          answer: "<p>Une terrasse ombragée accumule davantage d'humidité et de dépôts verts : un entretien annuel est souvent nécessaire. En exposition plein sud, le séchage naturel ralentit l'encrassement et permet d'espacer les interventions tous les dix-huit mois à deux ans selon l'usage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement à Sevran, sols, vitres et pièces d'eau inclus, pour une restitution propre dans les délais convenus avec votre agence ou bailleur.",
      whyUsBullets: [
        "Connaissance des typologies locales, du collectif social au pavillon, pour adapter chaque intervention au contexte du bien.",
        "Polyvalence sur tous les revêtements courants à Sevran : lino, carrelage, parquet flottant, faïence et vitres intérieures.",
        "Coordination directe avec agences et bailleurs pour caler l'intervention sur vos contraintes de remise de clés.",
      ],
      uniqueIntro: "<p>Après plusieurs années d'occupation ou à la suite de travaux de rénovation, un appartement accumule des traces tenaces sur les sols, les plinthes et les menuiseries. Dans les quartiers comme Montceleux ou les grands ensembles de Sevran, la rotation locative impose des remises en état rapides entre deux locataires, souvent sous contrainte de délai fixé par le bailleur.</p>\n<p class=\"mt-4\">Un logement restitué propre facilite la validation de l'état des lieux et évite les litiges sur le dépôt de garantie. Pour les propriétaires et gestionnaires, c'est aussi la certitude de pouvoir relouer sans retard. Les biens majoritaires à Sevran, T3-T4 en collectifs ou maisons individuelles en pavillonnaire, présentent des surfaces variées qui demandent une intervention adaptée à chaque revêtement.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en coordination directe avec les agences immobilières et bailleurs sociaux locaux. Le planning est calé sur vos contraintes de remise de clés, avec un diagnostic préalable pour anticiper les points sensibles et éviter les mauvaises surprises le jour J.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à relouer</h3>\n<p>L'objectif est de remettre chaque pièce dans un état permettant une validation immédiate de l'état des lieux. Sols débarrassés des traces, vitres intérieures transparentes, sanitaires détartrés et placards vidés de toute poussière.</p>\n\n<h3>Diagnostic et organisation</h3>\n<p>Avant l'intervention, nous identifions les zones critiques : résidus de chantier, traces de meubles, joints noircis. Le matériel est sélectionné selon les revêtements présents, lino, carrelage ou parquet flottant, pour éviter toute dégradation.</p>\n\n<h3>Déroulement de l'intervention</h3>\n<p>Le travail commence par le dépoussiérage complet des hauteurs vers le sol. Les pièces d'eau sont traitées en profondeur, faïence et robinetterie comprises. Les sols sont aspirés puis lavés, les interrupteurs et poignées essuyés. Une ventilation finale assure un logement sec et aéré à la remise des clés.</p>",
      specificChallenges: [
        "Rotation locative rapide dans le parc social : délais courts entre deux locataires.",
        "Résidus de chantier après rénovations ANRU : poussière fine, traces de peinture, joints à nettoyer.",
        "Accès aux immeubles avec digicode et gardien : coordination préalable indispensable.",
        "Stationnement difficile autour des gares RER : organisation du matériel à anticiper.",
        "Surfaces variées dans un même logement : lino, carrelage, parquet demandent des produits adaptés.",
      ],
      faqAdditions: [
        {
          question: "Quelle prise en charge proposez-vous pour un nettoyage fin de chantier dans un appartement rénové à Montceleux ?",
          answer: "<p>Nous intervenons après les travaux pour éliminer poussières de plâtre, traces de peinture et résidus sur les sols. Le diagnostic préalable identifie les zones sensibles. L'intervention couvre l'ensemble du logement, vitres intérieures comprises, pour une remise en état complète avant emménagement.</p>",
        },
        {
          question: "Quel est votre délai d'intervention pour un nettoyage avant état des lieux dans une location sociale à Sevran ?",
          answer: "<p>Nous pouvons généralement intervenir sous 48 à 72 heures selon la disponibilité. Pour les rotations locatives urgentes, un créneau prioritaire peut être organisé en coordination avec le bailleur. Le planning est calé sur la date de remise des clés communiquée.</p>",
        },
        {
          question: "Pouvez-vous traiter traces et odeurs après dégât des eaux dans un appartement d'un collectif ancien ?",
          answer: "<p>Oui, nous prenons en charge le nettoyage des surfaces touchées par l'humidité : sols, plinthes, bas de murs si accessibles. Les zones présentant des moisissures superficielles sont traitées. Pour les dégâts structurels importants, nous vous orientons vers un spécialiste.</p>",
        },
        {
          question: "Comment coordonnez-vous interventions et remises de clés avec agences et bailleurs pour états des lieux ?",
          answer: "<p>Nous échangeons directement avec votre interlocuteur, agence ou gestionnaire, pour caler la date et l'heure d'intervention. Les accès sont organisés en amont, digicode ou remise de clés temporaire. Un compte-rendu peut être transmis si nécessaire pour le dossier locatif.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;