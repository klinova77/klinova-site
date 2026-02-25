import type { City } from "~/types/geo";

const city: City = {
  name: "Asnières-sur-Seine",
  slug: "asnieres-sur-seine",
  postalCodes: ["92600"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Asnières-sur-Seine. De Bécon-les-Bruyères aux Grésillons, une équipe locale intervient avec des méthodes adaptées au bâti dense de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Entre le Château du XVIIIe siècle et les trois stations de la ligne 13, Asnières-sur-Seine concentre un parc immobilier varié qui demande une <strong>gestion rigoureuse</strong>. Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de leurs espaces.</p>\
<p class=\"mt-4\">Halls d'immeubles anciens, parkings souterrains de copropriétés, balcons exposés aux quais de Seine : chaque configuration appelle une organisation précise. Nous adaptons nos plannings aux contraintes d'accès et proposons un suivi clair des interventions réalisées.</p>\
<ul>\
  <li><strong>Coordination terrain :</strong> Prise de contact avec gardiens et syndics pour définir créneaux et accès, en tenant compte des digicodes et badges généralisés dans la commune.</li>\
  <li><strong>Méthodes adaptées au bâti :</strong> Escaliers étroits des immeubles 1930, sous-sols de résidences récentes ou halls ouverts : le matériel et les techniques varient selon la configuration.</li>\
  <li><strong>Suivi et reporting :</strong> Compte-rendu d'intervention transmis aux gestionnaires, photos avant/après disponibles sur demande pour les copropriétés.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Escaliers étroits</strong> dans les immeubles anciens du centre-ville : matériel compact obligatoire.",
    "Parkings souterrains omniprésents en zone dense : rotation des véhicules à anticiper.",
    "Balcons exposés aux <strong>quais de Seine</strong> : dépôts d'humidité et moucherons fréquents.",
    "Flux piétons intenses autour des stations de la ligne 13 : halls rapidement encrassés.",
    "Stationnement saturé secteur Gare et Mairie : créneaux d'intervention à adapter.",
  ],

  // Texte brut uniquement
  districts: [
    "Bécon-les-Bruyères",
    "Flachat",
    "Mairie / Centre-ville",
    "Les Grésillons",
    "Renoir-Métro",
    "Quartiers Nord / Hauts d'Asnières",
    "Les Philosophes",
  ],
  nearbyCities: [
    "Gennevilliers",
    "Colombes",
    "Bois-Colombes",
    "Courbevoie",
    "Clichy",
    "Levallois-Perret",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Asnières-sur-Seine",
    "Château d'Asnières",
    "Cimetière des Chiens",
    "Gare d'Asnières-sur-Seine",
    "Parc Robinson",
    "Quais de Seine",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les secteurs où le stationnement est compliqué ?",
      answer: "<p>Le centre-ville et le secteur Gare d'Asnières-sur-Seine présentent une <strong>densité de stationnement élevée</strong>. Nous privilégions les créneaux matinaux ou les horaires décalés. Pour les interventions longues, nous coordonnons avec le gardien ou le syndic afin de sécuriser un emplacement temporaire à proximité de l'immeuble.</p>",
    },
    {
      question: "Quel délai prévoir pour obtenir un devis après une demande ?",
      answer: "<p>Nous répondons généralement sous 24 à 48 heures. Si une visite technique s'impose — notamment pour les <strong>parkings souterrains</strong> ou les parties communes étendues — nous la planifions dans la semaine selon vos disponibilités. Le devis détaille surfaces, méthodes et planning prévisionnel.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur Asnières-sur-Seine ?",
      answer: "<p>Oui, pour les situations qui nécessitent une réponse rapide : dégât des eaux dans un hall, souillures accidentelles en parking ou incident locatif. Nous évaluons la faisabilité selon nos équipes disponibles et pouvons généralement <strong>intervenir sous 24 à 72 heures</strong> selon l'ampleur du chantier.</p>",
    },
    {
      question: "Comment se passe la coordination avec un syndic ou un gestionnaire d'immeuble ?",
      answer: "<p>Nous établissons un <strong>interlocuteur dédié</strong> côté Klinova. Le syndic transmet les accès (codes, badges, contact gardien) et valide le planning. Après chaque passage, un compte-rendu est envoyé par mail. Pour les contrats récurrents, un bilan trimestriel peut être organisé si souhaité.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template doit rester avec services: [].
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage contrôlé pour une remise en service rapide des espaces de travail ou parties communes.",
      whyUsBullets: [
        "Connaissance des typologies de revêtements présents dans les bureaux et copropriétés du secteur Bécon.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles comme aux moquettes velours épaisses.",
        "Interventions planifiées en dehors des heures de bureau ou en soirée selon vos impératifs d'activité.",
      ],
      uniqueIntro: "<p>Dans le secteur de Bécon-les-Bruyères, les bureaux et halls d'immeubles accumulent rapidement poussières et traces de passage. La proximité de la gare génère un flux quotidien important : chaussures humides en hiver, résidus de bitume en été, particules fines toute l'année. Les dalles textiles des open spaces et les moquettes velours des parties communes perdent leur aspect d'origine en quelques mois sans <strong>entretien adapté</strong>.</p>\
<p class=\"mt-4\">Un ravivage régulier redonne aux fibres leur tenue et leur couleur. Les taches de café, les auréoles grises dans les zones de circulation, les marques près des ascenseurs : ces dégradations visibles affectent l'image des locaux professionnels comme le confort des résidents. Dans les immeubles haussmanniens du centre-ville, les escaliers moquettés méritent une attention particulière pour préserver leur caractère.</p>\
<p class=\"mt-4\">L'intervention s'organise selon vos contraintes horaires. Diagnostic préalable du support, protection des plinthes et bas de murs, puis traitement par injection-extraction. Le planning s'adapte aux flux pendulaires pour limiter la gêne dans les espaces partagés.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\
<p>Les couloirs, halls d'entrée et paliers concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le traitement humide. Sur les dalles textiles des bureaux proches de la gare de Bécon, plusieurs passes d'injection-extraction éliminent les <strong>résidus incrustés</strong> dans la trame.</p>\
\
<h3>Surfaces secondaires et angles</h3>\
<p>Les espaces sous les bureaux, les contours de mobilier et les angles reçoivent un <strong>détachage ciblé</strong>. Les plinthes et bas de murs sont protégés par un film avant intervention. Dans les immeubles anciens, les raccords moquette-boiserie demandent une manipulation soignée pour éviter tout débordement.</p>\
\
<h3>Contrôle du séchage</h3>\
<p>L'extraction maximale de l'eau limite le temps d'indisponibilité des locaux. Selon l'épaisseur du revêtement et la ventilation naturelle, le <strong>séchage complet</strong> intervient sous 4 à 8 heures. Une consigne de non-piétinement est transmise pour les premières heures suivant l'intervention.</p>",
      specificChallenges: [
        "<strong>Dalles textiles bureaux</strong> : encrassement rapide lié au flux quotidien vers les transports.",
        "<strong>Moquettes velours halls</strong> : taches de tanin et auréoles grises dans les zones d'attente.",
        "<strong>Escaliers étroits centre-ville</strong> : acheminement du matériel dans les immeubles anciens.",
        "<strong>Séchage contraint</strong> : remise en service rapide exigée dans les locaux professionnels.",
        "<strong>Plinthes et boiseries</strong> : protection indispensable dans le bâti haussmannien.",
      ],
      faqAdditions: [
        {
          question: "Comment gérez-vous l'acheminement du matériel dans les escaliers étroits des immeubles anciens du centre-ville d'Asnières ?",
          answer: "<p>Le matériel d'injection-extraction se compose d'éléments modulaires transportables à la main. Dans les cages d'escalier sans ascenseur, nous montons l'équipement par étapes. Les flexibles permettent d'atteindre les étages depuis un point central sans encombrer les paliers pendant toute la durée de l'intervention.</p>",
        },
        {
          question: "Après le nettoyage des moquettes dans les bureaux proches de la gare de Bécon, combien de temps avant de pouvoir réutiliser les locaux ?",
          answer: "<p>L'extraction intensive retire la majeure partie de l'humidité dès la fin du passage. En conditions normales de ventilation, les <strong>dalles textiles sont praticables</strong> sous 3 à 4 heures. Pour les moquettes plus épaisses, prévoir 6 à 8 heures. Nous pouvons intervenir en fin de journée pour une reprise d'activité le lendemain matin.</p>",
        },
        {
          question: "Quelle protection appliquez-vous aux plinthes et angles fragiles des immeubles haussmanniens lors du détachage ?",
          answer: "<p>Un film adhésif basse adhérence protège les boiseries et plinthes avant tout traitement humide. Les buses d'injection sont orientées vers le centre de la surface pour éviter les projections latérales. En fin d'intervention, nous vérifions l'absence de traces sur les éléments périphériques avant retrait des protections.</p>",
        },
        {
          question: "Comment choisissez-vous la méthode selon le type de dalles textiles présentes dans les bureaux d'Asnières ?",
          answer: "<p>Le diagnostic initial identifie la composition des fibres et la <strong>densité du tissage</strong>. Les dalles bouclées supportent une pression d'injection plus forte que les velours ras. Pour les revêtements mixtes fréquents dans les open spaces, nous adaptons les réglages zone par zone afin d'obtenir un résultat homogène sans risque pour les fibres.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains avec autolaveuse et gestion stricte des eaux usées, pour des sols dégraissés et une circulation sécurisée dès la fin d'intervention.",
      whyUsBullets: [
        "Connaissance des parkings souterrains autour de la gare d'Asnières et des contraintes d'accès en zone dense.",
        "Autolaveuse professionnelle et dégraissants adaptés aux revêtements béton, résine ou peinture.",
        "Coordination avec le syndic pour la rotation des véhicules et balisage sécurisé pendant toute l'intervention.",
      ],
      uniqueIntro: "<p>Comment maintenir un parking souterrain propre quand le trafic quotidien y dépose huiles, poussières de pneus et résidus de freinage ? Autour de la <strong>gare d'Asnières-sur-Seine</strong>, les copropriétés font face à un encrassement accéléré par les allers-retours permanents des résidents et visiteurs. Les traces s'accumulent sur les rampes, dans les angles morts, le long des rigoles.</p>\n<p class=\"mt-4\">Un sol de parking négligé perd en adhérence et dégrade l'image de la résidence. Les revêtements varient selon l'âge des immeubles : <strong>béton brut dans les parkings anciens</strong>, résine ou peinture dans les constructions récentes. Chaque support réagit différemment aux graisses et nécessite un traitement adapté pour retrouver un aspect net sans altérer la surface.</p>\n<p class=\"mt-4\">Les véhicules utilitaires circulant vers la <strong>zone d'activités des Grésillons</strong> amplifient les dépôts de suies et d'hydrocarbures. Une intervention structurée permet de coordonner le lavage mécanisé avec la rotation des véhicules, en limitant la gêne pour les usagers et en respectant les contraintes d'évacuation propres aux sous-sols.</p>",
      uniqueDeepDive: "<h3>Sol dégraissé et circulation rétablie</h3>\n<p>L'objectif est d'éliminer les dépôts gras incrustés et de restituer un revêtement antidérapant sur l'ensemble du parking. Les rampes d'accès et zones de manœuvre retrouvent leur adhérence, les rigoles leur capacité d'écoulement.</p>\n\n<h3>Lavage mécanisé et traitement ciblé</h3>\n<p>Après un balayage préalable, l'autolaveuse effectue des passes sur les surfaces planes. Les zones critiques — pieds de murs, angles morts, regards — reçoivent un dégraissage haute pression. Le type de revêtement (béton brut, résine, peinture) détermine la pression et le produit utilisés.</p>\n\n<h3>Gestion des eaux et balisage sécurisé</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Un balisage signalétique sécurise chaque zone traitée pendant le séchage. La rotation des véhicules est coordonnée en amont avec le syndic pour libérer progressivement les emplacements sans bloquer l'accès au parking.</p>",
      specificChallenges: [
        "<strong>Parkings souterrains</strong> de copropriétés avec accès restreint et places occupées en journée.",
        "Revêtements variés selon l'âge des immeubles : béton brut, résine, peinture.",
        "Dépôts d'huile et de suies amplifiés par le <strong>trafic pendulaire</strong> vers la gare.",
        "Rampes inclinées nécessitant un traitement antidérapant renforcé.",
        "Évacuations parfois obstruées dans les parkings anciens du centre-ville.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les taches d'huile anciennes dans les parkings souterrains de copropriétés à Asnières-sur-Seine ?",
          answer: "<p>Les taches d'huile incrustées sont prétraitées avec un dégraissant professionnel avant le passage de l'autolaveuse. Sur béton brut, nous insistons avec une haute pression ciblée. Le résultat dépend de l'ancienneté des dépôts, mais l'aspect général s'améliore nettement dès la première intervention.</p>",
        },
        {
          question: "Quelle gestion des eaux de lavage appliquez-vous pour un parking souterrain proche de la gare d'Asnières ?",
          answer: "<p>Les eaux chargées sont dirigées vers les regards et rigoles existants, jamais rejetées en surface ou vers la voirie. Nous vérifions l'état des évacuations avant de commencer. Si un regard est obstrué, nous le signalons au syndic pour éviter tout refoulement pendant le lavage.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous le nettoyage des parkings selon le trafic pendulaire local ?",
          answer: "<p>Pour les parkings proches de la gare ou de la zone d'activités des Grésillons, un décrassage trimestriel permet de contenir l'accumulation de graisses et poussières. En cas de trafic très intense ou de véhicules utilitaires fréquents, un passage tous les deux mois peut s'avérer nécessaire.</p>",
        },
        {
          question: "Peut-on intervenir dans un parking de copropriété près de la gare sans bloquer l'accès aux résidents ?",
          answer: "<p>Nous organisons l'intervention par zones, en coordination avec le syndic. Les résidents sont prévenus à l'avance pour déplacer leur véhicule. Le balisage sécurise chaque secteur traité pendant le séchage, et l'accès au parking reste partiellement ouvert tout au long du chantier.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Asnières-sur-Seine : traitement des dépôts, brossage adapté au support et rinçage contrôlé pour un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons ombragés du Flachat, façades sud sur les quais, loggias des Quartiers Nord.",
        "Pression ajustée selon le support et l'état des joints, produits sélectionnés pour carrelage, béton ou bois composite.",
        "Gestion rigoureuse de l'eau et protection des voisins du dessous pendant toute l'intervention.",
      ],
      uniqueIntro: "<p>Du côté du <strong>Parc Robinson</strong> et des quais de Seine, les balcons accumulent rapidement des traces tenaces. L'humidité remontant du fleuve, combinée aux particules de pollution, laisse un voile grisâtre sur les sols et garde-corps. Les feuilles mortes s'agglutinent dans les angles, les mousses s'installent là où l'ombre persiste. Résultat : un espace extérieur qu'on hésite à utiliser, même aux beaux jours.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change la perception de votre logement. Vous pouvez à nouveau y installer une table, des plantes, profiter d'un café dehors sans regarder le sol avec gêne. Sur les <strong>balcons filants haussmanniens</strong> du centre-ville ou les dalles sur plots des résidences récentes, chaque support mérite un traitement adapté pour éviter les dégradations et obtenir un rendu durable.</p>\n<p class=\"mt-4\">Notre intervention prend en compte les contraintes propres à Asnières : <strong>pollution routière de la D909</strong>, dépôts organiques liés à la végétation environnante, et gestion de l'eau pour éviter les coulures chez vos voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous déplaçons le mobilier et les plantes vers l'intérieur ou les bâchons sur place. Les menuiseries, fenêtres et seuils de porte sont protégés pour éviter les projections. Les gros dépôts — feuilles, terre, débris — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour carrelage grès, traitement anti-mousse pour béton brut, solution neutre pour dalles sur plots. Le brossage — manuel ou mécanique selon l'état — désincruste les salissures sans agresser les joints. Garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>Le rinçage s'effectue à pression contrôlée, orientée vers l'évacuation pour limiter les coulures en façade et chez les voisins. Nous vérifions l'état des joints après intervention. Avant de partir, nous vous transmettons quelques conseils d'entretien pour espacer les prochains nettoyages.</p>",
      specificChallenges: [
        "<strong>Humidité des quais de Seine</strong> favorisant mousses et dépôts verts sur les balcons exposés nord.",
        "Suies et particules fines de la <strong>D909</strong> noircissant garde-corps et vitrages.",
        "Joints fragiles sur balcons anciens du secteur Mairie nécessitant une pression maîtrisée.",
        "Gestion des coulures d'eau en immeuble dense pour éviter les plaintes de voisinage.",
        "Accès parfois contraint dans les résidences avec digicode et gardien.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous un balcon en carrelage sans abîmer les joints sur les immeubles proches du Parc Robinson ?",
          answer: "<p>Nous adaptons la pression de rinçage et utilisons une brosse souple pour les joints. Sur les balcons en bord de Seine, l'humidité fragilise parfois les jointures : nous vérifions leur état avant intervention et ajustons le traitement pour éviter toute dégradation.</p>",
        },
        {
          question: "Comment éliminer les mousses et dépôts verts sur un balcon ombragé du secteur Flachat ?",
          answer: "<p>Un traitement anti-mousse est appliqué avant le brossage mécanique. Les zones ombragées du quartier Flachat retiennent l'humidité plus longtemps : nous insistons sur ces surfaces et conseillons une fréquence d'entretien adaptée pour limiter la repousse.</p>",
        },
        {
          question: "Traitez-vous différemment une loggia fermée et un balcon ouvert en centre-ville d'Asnières ?",
          answer: "<p>Oui. Une loggia fermée accumule moins de pollution mais davantage de poussières intérieures. Un balcon ouvert subit les dépôts atmosphériques et nécessite souvent un traitement plus appuyé. Nous adaptons produits et méthode selon la configuration.</p>",
        },
        {
          question: "Quel procédé utilisez-vous pour nettoyer garde-corps et vitrages noircis par la pollution de la D909 ?",
          answer: "<p>Nous appliquons un dégraissant adapté aux surfaces métalliques et vitrées, suivi d'un rinçage ciblé. Les suies de la D909 adhèrent fortement : un brossage doux précède le rinçage pour décoller les particules sans rayer le support.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de protection pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque le long des quais et aux abords des ponts sur la commune.",
        "Protocole complet avec EPI adaptés, confinement systématique et désinfection virucide certifiée.",
        "Gestion discrète des accès en immeuble à digicode et évacuation sécurisée des déchets contaminés.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons exposés aux passages d'oiseaux. Dans les secteurs proches du Pont d'Asnières et des quais de Seine, les pigeons trouvent des points de repos sur les garde-corps et corniches. L'odeur s'installe, les taches s'incrustent, et l'espace extérieur devient inutilisable.</p>\n<p class=\"mt-4\">Les immeubles anciens du centre-ville, avec leurs rebords sculptés et leurs corniches saillantes, offrent des perchoirs idéaux. Ces supports poreux absorbent l'acidité des déjections, ce qui fragilise le béton et la peinture au fil des mois. Retrouver un balcon sain permet de réutiliser cet espace sans gêne ni inquiétude pour la santé.</p>\n<p class=\"mt-4\">La proximité d'arbres matures comme ceux du Square Maréchal Joffre ou des bords de Seine favorise la présence régulière des volatiles. Une intervention structurée comprend le diagnostic des zones touchées, le confinement de l'espace, le traitement des surfaces et la mise en place de solutions dissuasives adaptées à votre configuration.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace propre, sans odeur ni risque de contamination. Les surfaces sont traitées en profondeur pour éliminer les agents pathogènes présents dans les fientes séchées.</p>\n<p>Le résultat attendu : un sol, un garde-corps et des vitrages débarrassés de tout dépôt, avec un temps d'aération respecté avant réutilisation.</p>\n\n<h3>Sécurisation et traitement ciblé</h3>\n<p>L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour confiner les poussières. Les fientes sont humidifiées avant ramassage pour neutraliser les particules volatiles.</p>\n<p>Chaque support reçoit un nettoyage adapté : sol, murs mitoyens si concernés, barreaux métalliques. Un produit virucide homologué est appliqué avec temps de contact respecté.</p>\n\n<h3>Évacuation et prévention</h3>\n<p>Les déchets sont conditionnés en sacs étanches et évacués. Un rinçage final prépare le balcon à une réutilisation sous 24 à 48 heures selon ventilation.</p>\n<p>Des dispositifs anti-retour peuvent être posés : pics sur corniches, filets de protection ou gel répulsif selon la configuration.</p>",
      specificChallenges: [
        "<strong>Corniches d'immeubles anciens</strong> propices aux nidifications près du centre-ville.",
        "Accumulation rapide de fientes sur balcons exposés aux quais de Seine.",
        "Supports poreux (béton, pierre) fragilisés par l'acidité des déjections.",
        "Coordination nécessaire avec gardiens pour accès aux parties communes.",
        "Risque de réinfestation sans dispositif dissuasif adapté à la configuration.",
      ],
      faqAdditions: [
        {
          question: "Les fientes sur mon balcon en bord de Seine représentent-elles un risque sanitaire à traiter rapidement ?",
          answer: "<p>Les déjections de pigeons contiennent des agents pathogènes qui se dispersent en séchant. Sur les balcons proches des quais, l'exposition régulière aux volatiles accélère l'accumulation. Un assainissement avec désinfection limite les risques respiratoires et cutanés pour les occupants.</p>",
        },
        {
          question: "Quel protocole et quels équipements utilisez-vous pour traiter les corniches d'immeubles anciens ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes de protection. La zone est confinée par bâchage. Les fientes sont humidifiées avant collecte pour éviter la dispersion de poussières contaminées, puis les surfaces reçoivent un traitement désinfectant adapté aux supports poreux.</p>",
        },
        {
          question: "Quels produits de désinfection appliquez-vous après le nettoyage de fientes près du Parc Robinson ?",
          answer: "<p>Nous utilisons des solutions virucides et bactéricides homologuées, appliquées avec un temps de contact suffisant pour neutraliser les agents pathogènes. Le rinçage final et l'aération permettent une réutilisation du balcon sous 24 à 48 heures selon la ventilation naturelle.</p>",
        },
        {
          question: "Comment organisez-vous l'évacuation des déchets contaminés dans un immeuble à digicode ?",
          answer: "<p>Les fientes et matériaux souillés sont conditionnés en sacs étanches dès la collecte. L'accès est coordonné avec le gardien ou le résident pour limiter les allers-retours. L'évacuation se fait en fin d'intervention sans transit par les parties communes sensibles.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Rafraîchissement complet de vos canapés, tapis et matelas à domicile, avec extraction des salissures et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux du Quartier des Philosophes et de Flachat, avec leurs textiles variés.",
        "Détachage enzymatique ciblé et injection-extraction adaptée à chaque type de fibre, du velours au cuir.",
        "Organisation calibrée pour les accès difficiles et le stationnement contraint en centre d'Asnières-sur-Seine.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on les remarque vraiment. Dans le <strong>Quartier des Philosophes</strong> comme dans le secteur Flachat, les logements familiaux concentrent ces usages intensifs. Enfants, animaux, repas pris sur le canapé — chaque passage laisse une empreinte sur les fibres.</p>\n<p class=\"mt-4\">Un textile encrassé modifie l'atmosphère d'une pièce. L'aspect terne d'un canapé, les taches visibles sur un tapis en laine ou en synthétique donnent une impression de négligence, même dans un intérieur bien tenu. Les appartements anciens avec parquets fragiles et mobilier textile demandent une attention particulière pour préserver à la fois le confort et l'hygiène au quotidien.</p>\n<p class=\"mt-4\">Notre intervention s'adapte à ces contraintes résidentielles. Diagnostic textile préalable, détachage ciblé, extraction en profondeur : chaque étape tient compte de la densité urbaine d'Asnières-sur-Seine et des difficultés d'accès propres aux immeubles de ville.</p>",
      uniqueDeepDive: "<h3>Taches incrustées et odeurs tenaces</h3>\n<p>Les salissures anciennes — café, vin, urine animale — pénètrent les fibres en profondeur. Nous identifions d'abord la nature du textile (coton, laine, synthétique, velours, cuir) et le type de tache pour choisir le pré-traitement adapté. Un test discret sur zone cachée valide la compatibilité avant toute action.</p>\n\n<h3>Encrassement général des fibres</h3>\n<p>Le détachage enzymatique cible les zones critiques. Puis l'injection-extraction textile déloge les résidus piégés dans l'épaisseur du tissu. La pression et la température sont ajustées selon la fragilité du support pour éviter toute déformation ou décoloration.</p>\n\n<h3>Humidité résiduelle et remise en usage</h3>\n<p>L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et la ventilation du logement, comptez quelques heures avant de réutiliser votre canapé ou tapis. Nous vous transmettons les consignes d'aération et la fréquence d'entretien recommandée pour prolonger la propreté obtenue.</p>",
      specificChallenges: [
        "<strong>Textiles variés</strong> dans les appartements : synthétique, laine, velours, cuir demandent des réglages distincts.",
        "Taches d'urine et odeurs animales fréquentes dans les logements familiaux de Bécon et Flachat.",
        "Stationnement difficile en zone dense : coordination préalable pour le matériel d'intervention.",
        "Parquets anciens fragiles à protéger pendant l'extraction et le séchage.",
        "Temps de séchage variable selon l'épaisseur du textile et la ventilation du logement.",
      ],
      faqAdditions: [
        {
          question: "Quelle méthode utilisez-vous pour un canapé en tissu synthétique dans le Quartier des Philosophes ?",
          answer: "<p>Nous adaptons la température et la pression d'injection selon la densité du synthétique. Un diagnostic préalable identifie les zones fragiles. L'extraction se fait en profondeur sans risque de déformation, avec un séchage rapide compatible avec les contraintes des appartements de ville.</p>",
        },
        {
          question: "Comment traitez-vous les taches d'urine et odeurs d'animaux sur un tapis dans un logement familial ?",
          answer: "<p>Un pré-traitement enzymatique neutralise les composés organiques responsables des odeurs. L'injection-extraction déloge ensuite les résidus piégés dans les fibres. Cette méthode fonctionne sur laine comme sur synthétique, avec un résultat durable si l'entretien régulier est maintenu.</p>",
        },
        {
          question: "Faut-il privilégier le détachage ciblé ou un nettoyage complet pour un tapis en laine secteur Flachat ?",
          answer: "<p>Cela dépend de l'état général. Si seules quelques zones sont tachées, le détachage ciblé suffit et préserve les fibres. En cas d'encrassement diffus ou d'odeurs persistantes, le nettoyage complet par injection-extraction reste plus efficace pour retrouver un textile homogène.</p>",
        },
        {
          question: "Vos produits sont-ils sans risque pour les enfants et animaux dans les appartements densément peuplés ?",
          answer: "<p>Les solutions utilisées sont conçues pour un usage domestique. Après séchage complet, aucun résidu actif ne subsiste sur les fibres. Nous recommandons simplement d'aérer le logement et d'attendre la fin du séchage avant de laisser enfants ou animaux en contact avec le textile traité.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des configurations locales : terrasses en attique sur la ZAC, jardins de ville ombragés à Flachat.",
        "Adaptation technique aux supports présents à Asnières : bois composite, pierre naturelle, dalles sur plots.",
        "Organisation soignée : protection du mobilier, gestion des eaux, intervention sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect et la sécurité d'une terrasse quand l'environnement urbain accélère son encrassement ? Sur les attiques de la <strong>ZAC Parc d'Affaires</strong> comme sur les terrasses de maisons du secteur Flachat, les dépôts verts s'installent dès que l'ombre et l'humidité s'en mêlent. Les lames de bois composite perdent leur teinte, les dalles deviennent glissantes après quelques pluies.</p>\n<p class=\"mt-4\">Un entretien régulier redonne à cet espace toute sa fonction : repas en extérieur, détente, réception. Les supports varient selon les constructions — <strong>bois composite</strong> sur les résidences récentes, <strong>dalles sur plots ou pierre naturelle</strong> dans les pavillons. Chaque matériau réagit différemment aux traitements et nécessite une approche calibrée pour éviter toute dégradation.</p>\n<p class=\"mt-4\">L'ombrage local et la pollution urbaine favorisent la prolifération de mousses et lichens, particulièrement sur les zones peu ensoleillées. Une intervention structurée permet d'éliminer ces dépôts tenaces tout en préservant l'intégrité du revêtement.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection pour éviter les projections.</p>\n<p>Un balayage préalable élimine feuilles mortes, terre accumulée et débris végétaux avant toute application de produit.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Le produit est sélectionné selon la nature du support : formulation douce pour le bois composite, dégraissant adapté pour la pierre. Un brossage manuel ou mécanique déloge les mousses incrustées.</p>\n<p>Sur les surfaces qui le permettent, une pression contrôlée complète le travail en respectant les joints et matériaux poreux.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les eaux de rinçage sont dirigées vers les points d'écoulement existants. Les plantations proches sont préservées tout au long de l'intervention.</p>\n<p>Avant de partir, nous vérifions le séchage et partageons quelques recommandations pour espacer les prochains entretiens selon l'exposition de votre terrasse.</p>",
      specificChallenges: [
        "<strong>Bois composite</strong> sensible aux produits agressifs sur les terrasses récentes de la ZAC.",
        "Mousses et lichens persistants sur les zones ombragées du secteur Flachat.",
        "Dalles sur plots nécessitant un rinçage maîtrisé pour éviter infiltrations.",
        "Pierre naturelle poreuse demandant un traitement sans haute pression excessive.",
        "Gestion des eaux de ruissellement sur terrasses en étage avec voisins en dessous.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous une terrasse en bois composite dans la ZAC Parc d'Affaires sans l'abîmer ?",
          answer: "<p>Le bois composite des résidences récentes de la ZAC supporte mal les pressions élevées et les produits chlorés. Nous utilisons une formulation neutre appliquée au pulvérisateur, suivie d'un brossage doux et d'un rinçage à pression modérée. Les lames retrouvent leur teinte sans risque de délaminage ni de blanchiment.</p>",
        },
        {
          question: "Quelle solution proposez-vous pour éliminer mousses et lichens sur les terrasses ombragées à Flachat ?",
          answer: "<p>Les jardins de ville du quartier Flachat restent souvent à l'ombre une partie de la journée, ce qui favorise les dépôts verts. Nous appliquons un traitement anti-mousse biodégradable qui agit en profondeur, puis un brossage mécanique décolle les résidus. Un passage préventif peut être envisagé pour ralentir la repousse.</p>",
        },
        {
          question: "Quel traitement anti-mousse choisissez-vous pour dalles et bois en bord de Seine ?",
          answer: "<p>L'humidité ambiante près des quais accélère la formation de mousses. Nous sélectionnons un produit à action prolongée, compatible avec les dalles minérales comme avec le bois. L'application se fait après nettoyage complet, et le produit continue d'agir plusieurs semaines pour limiter la réapparition.</p>",
        },
        {
          question: "Peut-on utiliser la haute pression sur une terrasse en pierre sans risque de détérioration ?",
          answer: "<p>La pierre naturelle présente dans certains pavillons d'Asnières tolère la haute pression à condition de régler le jet correctement. Nous adaptons la distance et l'intensité selon la porosité du matériau. Sur les pierres tendres ou les joints fragiles, un nettoyage basse pression avec brossage reste préférable.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol au plafond, pour une restitution impeccable lors d'un état des lieux ou après des travaux de rénovation.",
      whyUsBullets: [
        "Connaissance du parc locatif d'Asnières et des attentes des agences immobilières locales.",
        "Polyvalence sur parquet ancien, carrelage récent et revêtements souples sans risque de dégradation.",
        "Planification calée sur vos délais de remise de clés et coordination directe avec vos interlocuteurs.",
      ],
      uniqueIntro: "<p>Après plusieurs mois d'occupation ou à la suite d'un chantier de rénovation, un appartement accumule des traces que le ménage courant ne suffit pas à éliminer. À Asnières-sur-Seine, la proximité des stations de la ligne 13 comme Gabriel Péri ou Les Agnettes génère un turn-over locatif soutenu. Les agences immobilières locales font régulièrement appel à des interventions de mise en propreté avant remise des clés ou signature de bail.</p>\n<p class=\"mt-4\">Le parc immobilier mêle parquet chêne dans les immeubles anciens du centre-ville et carrelage ou PVC dans les résidences plus récentes. Chaque surface demande un traitement adapté pour retrouver un aspect soigné. Un logement correctement préparé facilite la validation de l'état des lieux et évite les litiges sur le dépôt de garantie.</p>\n<p class=\"mt-4\">L'intervention se planifie en coordination avec le propriétaire, l'agence ou l'entreprise de travaux. Nous adaptons les horaires aux contraintes de remise de clés et assurons un contrôle final avant votre rendez-vous.</p>",
      uniqueDeepDive: "<h3>Résidus de chantier et poussières généralisées</h3>\n<p>Les travaux laissent des dépôts de plâtre, des traces de peinture et une fine couche de poussière sur toutes les surfaces. Nous commençons par l'évacuation des déchets résiduels, puis réalisons un dépoussiérage complet des plafonds aux plinthes.</p>\n\n<h3>Pièces d'eau encrassées et sols ternis</h3>\n<p>Cuisine et salle de bain concentrent les salissures tenaces : calcaire, graisses, joints noircis. Nous traitons chaque élément avec des produits adaptés. Les sols reçoivent ensuite une aspiration suivie d'un lavage selon leur nature : parquet, carrelage ou revêtement souple.</p>\n\n<h3>Finitions et contrôle avant remise</h3>\n<p>Les interrupteurs, poignées, radiateurs et intérieurs de placards sont nettoyés. Les vitres intérieures sont essuyées pour un rendu lumineux. Un passage final permet de vérifier chaque pièce avant la remise des clés ou la signature de l'état des lieux.</p>",
      specificChallenges: [
        "<strong>Rotation locative élevée</strong> près des stations Ligne 13, nécessitant des interventions rapides.",
        "Parquets chêne anciens sensibles aux excès d'eau dans les immeubles du centre-ville.",
        "Stationnement difficile en zone Mairie et Gare, imposant une logistique anticipée.",
        "Coordination fréquente avec agences immobilières pour respecter les créneaux d'état des lieux.",
        "Résidus de chantier variés selon les travaux : plâtre, peinture, colle ou enduit.",
      ],
      faqAdditions: [
        {
          question: "Quel est votre délai d'intervention pour un nettoyage avant état des lieux près d'une station de la ligne 13 à Asnières ?",
          answer: "<p>Nous intervenons généralement sous 48 à 72 heures selon la disponibilité. Pour les secteurs proches de Gabriel Péri ou Les Agnettes, nous adaptons nos créneaux aux contraintes de remise de clés et pouvons proposer des passages en fin de journée si nécessaire.</p>",
        },
        {
          question: "Quelle différence de protocole appliquez-vous entre un nettoyage standard et une remise en état fin de chantier sur parquet chêne ancien ?",
          answer: "<p>Un nettoyage standard se concentre sur les salissures d'usage courant. Après travaux, nous ajoutons l'évacuation des résidus de chantier, le retrait des traces de peinture ou de colle, et un traitement adapté au parquet pour éviter toute rayure ou excès d'humidité.</p>",
        },
        {
          question: "Proposez-vous des prestations spécifiques pour les appartements touchés par un dégât des eaux à Asnières ?",
          answer: "<p>Oui, nous intervenons après sinistre pour nettoyer les surfaces affectées par l'humidité. Nous traitons les sols, les plinthes et les zones touchées par les moisissures superficielles. Une ventilation est assurée en fin d'intervention pour accélérer le séchage.</p>",
        },
        {
          question: "Pouvez-vous coordonner l'intervention de nettoyage avec l'agence immobilière pour un état des lieux à Asnières-sur-Seine ?",
          answer: "<p>Nous travaillons régulièrement avec les agences locales. Nous pouvons récupérer les clés, intervenir selon le planning convenu et restituer le logement prêt pour le rendez-vous. Un compte-rendu peut être transmis si l'agence le souhaite.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;