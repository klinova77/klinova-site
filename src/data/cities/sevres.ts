import type { City } from "~/types/geo";

const city: City = {
  name: "Sèvres",
  slug: "sevres",
  postalCodes: ["92310"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Sèvres. Une organisation adaptée aux contraintes du bâti local, entre immeubles anciens du centre-ville et résidences des quartiers résidentiels.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 <p> then <ul>
  hubIntro: "<p>Commune des Hauts-de-Seine desservie par les lignes Transilien N et L, abritant le Musée National de Céramique, Sèvres concentre un parc immobilier varié qui nécessite un suivi régulier. Klinova s'inscrit comme partenaire terrain pour les syndics, gestionnaires et occupants.</p>\n<p class=\"mt-4\">Notre équipe coordonne les interventions de propreté et de maintenance selon les spécificités de chaque site. <strong>Reporting disponible, planification adaptée</strong> aux accès contraints, matériel acheminé sans encombrer les parties communes.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Équipe mobile couvrant Sèvres et communes limitrophes, délais d'intervention courts pour les demandes urgentes ou programmées.</li>\n  <li><strong>Gestion des accès :</strong> Prise en charge des digicodes, badges et créneaux horaires imposés par les copropriétés ou entreprises.</li>\n  <li><strong>Suivi transparent :</strong> Compte-rendu après chaque passage, photos avant/après si demandé, interlocuteur unique pour simplifier les échanges.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Axes RN10 et RN118</strong> : dépôts de poussières et particules sur balcons et façades exposés.",
    "Immeubles anciens du centre-ville avec <strong>escaliers étroits</strong> et accès matériel limité.",
    "Parkings souterrains en copropriété nécessitant une <strong>coordination véhicules</strong> pour le nettoyage.",
    "Proximité du Parc de Saint-Cloud : <strong>débris végétaux</strong> fréquents sur terrasses et balcons.",
    "Stationnement difficile en journée, interventions à planifier sur <strong>créneaux décalés</strong>.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Brancas",
    "Les Bruyères",
    "Cristallerie - Cent Gardes",
    "Croix-Bosset - Monesse",
  ],
  nearbyCities: [
        "saint-cloud",
        "boulogne-billancourt",
        "issy-les-moulineaux",
        "clamart",
        "suresnes",
        "rueil-malmaison",
        "vanves",
        "le-chesnay-rocquencourt",
        "chatillon",
        "malakoff"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Sèvres",
    "Gare Sèvres-Rive-Gauche",
    "Gare Sèvres-Ville-d'Avray",
    "Musée National de Céramique",
    "Parc de Saint-Cloud",
    "Pont de Sèvres",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous le stationnement lors des interventions à Sèvres ?",
      answer: "<p>Le stationnement en centre-ville reste compliqué. Nous repérons les <strong>zones de dépose</strong> autorisées en amont et privilégions les créneaux matinaux pour limiter les contraintes. Si nécessaire, nous sollicitons une autorisation temporaire auprès du syndic ou du gestionnaire.</p>",
    },
    {
      question: "Quel délai prévoir pour une première intervention ?",
      answer: "<p>Après validation du devis, l'intervention est généralement programmée sous <strong>5 à 10 jours ouvrés</strong>. En cas d'urgence (dégât, nuisance), nous pouvons réduire ce délai selon la disponibilité de l'équipe et l'accès au site.</p>",
    },
    {
      question: "Intervenez-vous dans les immeubles avec digicode ou badge ?",
      answer: "<p>Oui, c'est fréquent à Sèvres. Le syndic ou le gardien nous transmet les <strong>codes d'accès</strong> avant le passage. Nous confirmons l'heure d'arrivée pour éviter toute attente et garantir l'ouverture des locaux techniques si besoin.</p>",
    },
    {
      question: "Proposez-vous un suivi après l'intervention ?",
      answer: "<p>Un compte-rendu est transmis après chaque passage : <strong>photos, observations</strong>, points d'attention pour l'entretien courant. Ce suivi permet d'ajuster la fréquence ou le périmètre selon l'évolution des besoins du site.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: n'inclure que les services demandés
  services: [
    // 1) moquettes
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en service rapide adaptée aux contraintes d'accès sévriens.",
      whyUsBullets: [
        "Connaissance des configurations d'immeubles sévriens, du centre-ville aux résidences proches du Musée de Céramique.",
        "Matériel d'injection-extraction professionnel dimensionné pour dalles textiles et moquettes bouclées ou velours.",
        "Organisation calibrée sur les contraintes d'accès locales : horaires adaptés, gestion des digicodes et stationnement anticipé.",
      ],
      uniqueIntro: "<p>Dans le secteur de la <strong>gare Sèvres-Rive-Gauche</strong>, les halls d'immeubles concentrent un passage régulier qui marque durablement les fibres textiles. Les traces de semelles, les résidus de poussière fine liée aux axes routiers proches et les taches de café ou de tanin s'accumulent sur les dalles sans qu'un simple aspirateur suffise à les déloger. Cette usure progressive ternit l'aspect général des parties communes et génère parfois des remarques de copropriétaires.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux moquettes leur tenue d'origine et améliore la perception visuelle dès l'entrée. Les immeubles anciens et petits collectifs du centre présentent souvent des dalles textiles sensibles aux produits inadaptés : le choix de la méthode compte autant que la fréquence d'intervention. Un revêtement propre limite aussi la persistance d'odeurs et contribue à un environnement plus agréable pour les résidents.</p>\n<p class=\"mt-4\">Nous structurons chaque intervention après un diagnostic précis du support et des contraintes d'accès. <strong>Escaliers étroits</strong>, digicodes, stationnement limité en tissu urbain dense : ces paramètres conditionnent l'organisation et le matériel mobilisé.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\n<p>Les seuils d'entrée et couloirs principaux reçoivent un traitement prioritaire. Après aspiration préalable, l'<strong>injection-extraction</strong> décolle les salissures piégées dans les fibres. Les passes sont multipliées sur ces surfaces à fort trafic pour garantir une extraction complète.</p>\n\n<h3>Surfaces périphériques et angles</h3>\n<p>Les zones moins sollicitées bénéficient d'un passage adapté à leur état réel. Les plinthes et bas de murs sont protégés avant intervention. Un détachage ciblé traite les marques localisées sans surcharger l'ensemble du revêtement.</p>\n\n<h3>Gestion du séchage par secteur</h3>\n<p>L'extraction maximale réduit le temps d'humidité résiduelle. Selon l'épaisseur des dalles et la ventilation disponible, le séchage varie de quelques heures à une demi-journée. Des consignes de non-piétinement temporaire sont transmises pour préserver le résultat obtenu sur chaque zone traitée.</p>",
      specificChallenges: [
        "<strong>Escaliers étroits</strong> dans les immeubles anciens du quartier Brancas : matériel compact indispensable.",
        "Dalles textiles sensibles aux produits agressifs : dosage et pH contrôlés systématiquement.",
        "Stationnement contraint en centre-ville : anticipation logistique pour éviter les retards.",
        "Poussières fines liées à la proximité de la RN118 : aspiration renforcée avant extraction.",
        "Halls avec digicode et badge : coordination préalable avec syndic ou gardien.",
      ],
      faqAdditions: [
        {
          question: "Comment intervenez-vous dans les halls d'immeubles autour de la gare Sèvres-Rive-Gauche malgré les escaliers étroits ?",
          answer: "<p>Nous utilisons du <strong>matériel compact transportable</strong> à la main, adapté aux cages d'escalier sans ascenseur. Les flexibles et la machine principale sont dimensionnés pour circuler dans des passages de moins d'un mètre. L'intervention est planifiée en amont avec le syndic pour sécuriser l'accès et limiter la gêne aux résidents.</p>",
        },
        {
          question: "Peut-on rattraper des taches anciennes sur moquette dans un immeuble ancien du centre-ville de Sèvres ?",
          answer: "<p>Les taches installées depuis plusieurs mois nécessitent un détachage préalable avant l'extraction. Selon la nature du dépôt et l'ancienneté, le résultat varie : certaines marques s'atténuent fortement, d'autres laissent une trace résiduelle si les fibres sont altérées. Un diagnostic visuel permet d'estimer le rendu attendu avant intervention.</p>",
        },
        {
          question: "Le nettoyage de moquette change-t-il entre une copropriété et des bureaux proches de la mairie de Sèvres ?",
          answer: "<p>Les parties communes de copropriété subissent un trafic diffus mais régulier, tandis que les bureaux concentrent le passage sur des <strong>plages horaires précises</strong>. Nous adaptons la fréquence et les horaires d'intervention : tôt le matin ou en soirée pour les bureaux, en journée pour les halls résidentiels après concertation avec le syndic.</p>",
        },
        {
          question: "Comment gérez-vous le matériel et le stationnement difficile pour un nettoyage de moquette à Sèvres ?",
          answer: "<p>Le stationnement est repéré en amont via les informations transmises par le client ou le syndic. Si nécessaire, nous sollicitons une autorisation temporaire auprès de la mairie. Le matériel est chargé sur chariot pour réduire les allers-retours entre le véhicule et le site d'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 2) parkings
    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec traitement des zones de circulation, gestion rigoureuse des eaux usées et coordination adaptée aux contraintes d'accès de votre résidence ou site professionnel.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès aux sous-sols sévriens, notamment près des axes RN118 et Pont de Sèvres.",
        "Autolaveuses professionnelles et gestion stricte des eaux de lavage vers les réseaux existants.",
        "Planification par zones avec balisage, rotation véhicules et reporting syndic sur demande.",
      ],
      uniqueIntro: "<p>Les traces d'huile moteur, les coulures de graisse et les dépôts de poussière noire sont visibles sur les sols des parkings proches du <strong>Pont de Sèvres</strong> et des axes à fort trafic automobile. Ces salissures s'accumulent particulièrement dans les zones de manœuvre et aux abords des rampes d'accès, où le passage répété des véhicules accentue l'encrassement. Les gestionnaires constatent une dégradation progressive de l'aspect général des sous-sols.</p>\n<p class=\"mt-4\">Un sol de parking régulièrement entretenu limite les réclamations des copropriétaires et préserve l'image de la résidence. Dans les <strong>sous-sols en béton brut ou peint</strong> présents à Sèvres, les taches incrustées deviennent difficiles à traiter sans intervention mécanisée. Le dégraissage redonne une surface propre et sécurisée, notamment sur les zones inclinées où l'adhérence compte.</p>\n<p class=\"mt-4\">Chaque chantier fait l'objet d'une coordination préalable : <strong>balisage des accès, gestion du stationnement</strong> et planification horaire adaptée aux contraintes du site. Un compte-rendu photographique peut être transmis au syndic ou au gestionnaire à l'issue de l'intervention.</p>",
      uniqueDeepDive: "<h3>Encrassement persistant des sols</h3>\n<p>Les dépôts d'huile et de graisse s'incrustent dans le béton au fil des mois. Un diagnostic préalable identifie le type de revêtement, l'état des évacuations et les zones les plus sollicitées.</p>\n<p class=\"mt-4\">Le balayage mécanique élimine les résidus grossiers avant toute phase de lavage.</p>\n\n<h3>Traitement mécanisé et gestion des eaux</h3>\n<p>L'autolaveuse ou la haute pression associée à un dégraissant adapté traite les surfaces en passes successives. Les rampes d'accès et les angles morts reçoivent une attention particulière pour garantir l'adhérence.</p>\n<p class=\"mt-4\">Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage ni stagnation.</p>\n\n<h3>Coordination et remise en service</h3>\n<p>Le balisage sécurise les usagers pendant l'intervention. La rotation des véhicules s'organise par zones pour limiter l'immobilisation complète du parking.</p>\n<p class=\"mt-4\">Un dépoussiérage des blocs lumineux ou tuyauteries peut compléter le chantier si demandé. Une recommandation de fréquence est transmise selon le trafic constaté.</p>",
      specificChallenges: [
        "Dépôts de pollution liés à la proximité de la RN118 et du trafic dense vers le Pont de Sèvres.",
        "Sous-sols en béton brut ou peint nécessitant un dégraissage adapté au revêtement.",
        "Rampes d'accès inclinées où l'adhérence doit être restaurée après lavage.",
        "Coordination avec les résidents pour organiser la rotation des véhicules sans blocage prolongé.",
        "Stationnement difficile en surface imposant une logistique véhicule-utilitaire anticipée.",
      ],
      faqAdditions: [
        {
          question: "Pouvez-vous traiter des taches d'huile anciennes dans un parking souterrain à Sèvres ?",
          answer: "<p>Les taches d'huile incrustées dans le béton des sous-sols sévriens sont traitées avec un dégraissant professionnel et un passage mécanisé. L'efficacité dépend de l'ancienneté et de la porosité du revêtement. Un diagnostic préalable permet d'évaluer le résultat attendu avant intervention.</p>",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans un parking souterrain sans créer de ruissellement ?",
          answer: "<p>Les eaux usées sont orientées vers les regards et rigoles existants du sous-sol. Nous vérifions l'état des évacuations avant le chantier pour éviter toute stagnation. Aucun rejet n'est effectué en dehors des réseaux prévus, conformément aux pratiques de gestion responsable.</p>",
        },
        {
          question: "Comment organisez-vous le balisage lors d'un nettoyage de parking proche du Pont de Sèvres ?",
          answer: "<p>Une signalétique temporaire délimite les zones en cours de traitement. Les accès piétons et véhicules restent sécurisés pendant toute l'intervention. Le balisage est adapté à la configuration du site et au niveau de fréquentation constaté.</p>",
        },
        {
          question: "Peut-on prévoir une fermeture partielle pour nettoyer un parking résidentiel à Sèvres ?",
          answer: "<p>Une fermeture par zones successives permet de maintenir l'accès à une partie du parking pendant le chantier. La rotation des véhicules s'organise en amont avec le syndic ou le gestionnaire. Cette méthode limite la gêne pour les résidents tout en garantissant un traitement complet.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 3) balcons
    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement adapté au support, protection des voisins contre les coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Connaissance des expositions urbaines à Sèvres, notamment sur les axes proches de la RN10 où les dépôts sont plus marqués.",
        "Maîtrise des pressions de rinçage selon le type de support, carrelage grès, béton ou dalles sur plots.",
        "Organisation pensée pour protéger les voisins du dessous et limiter la gêne pendant l'intervention.",
      ],
      uniqueIntro: "<p>Comment profiter d'un balcon agréable quand les dépôts s'accumulent semaine après semaine ? Dans le <strong>quartier Centre-ville de Sèvres</strong>, l'exposition aux particules fines et aux poussières urbaines laisse rapidement des traces grises sur les sols et garde-corps. Les joints noircissent, le carrelage perd son éclat, et l'envie de s'installer dehors diminue au fil des mois.</p>\n<p class=\"mt-4\">Sur les <strong>immeubles anciens et petits collectifs</strong> de la commune, les balcons en carrelage grès ou béton subissent aussi les projections de pollen au printemps et les résidus de feuilles à l'automne. Ces salissures incrustées donnent une impression de négligence, même sur un logement bien entretenu. Un rafraîchissement régulier redonne un aspect soigné et permet de retrouver un espace extérieur utilisable.</p>\n<p class=\"mt-4\">Notre intervention prend en compte les <strong>accès en étage et la gestion des eaux de rinçage</strong> pour éviter tout désagrément aux voisins du dessous. Chaque balcon fait l'objet d'un diagnostic préalable afin d'adapter les produits et la méthode au support présent.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et seuils de porte reçoivent une protection pour éviter les projections. Un système de récupération d'eau est installé pour limiter les coulures vers les étages inférieurs.</p>\n\n<h3>Traitement des surfaces</h3>\n<p>Les gros dépôts sont retirés manuellement. Un produit adapté au support est appliqué sur le carrelage, le béton ou les dalles. Le brossage permet de désincruster les salissures tenaces dans les joints. Le garde-corps et les murs mitoyens accessibles sont également traités.</p>\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée, suffisante pour éliminer les résidus sans fragiliser les joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau résiduelle est évacuée pour accélérer le séchage. Nous vérifions l'état des vitrages attenants et les nettoyons si nécessaire. Avant de partir, nous vous transmettons quelques recommandations pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Dépôts de pollution accentués par la proximité des axes routiers comme la RN10.",
        "Joints de carrelage noircis sur les balcons exposés plein sud dans le quartier Brancas.",
        "Gestion des coulures d'eau indispensable sur les immeubles à plusieurs étages.",
        "Résidus de pollen et feuilles sur les balcons proches du Parc de Saint-Cloud.",
        "Accès parfois contraints sur les immeubles anciens avec escaliers étroits.",
      ],
      faqAdditions: [
        {
          question: "Comment évitez-vous d'abîmer le carrelage et les joints lors d'un nettoyage de balcon sur les résidences récentes de Sèvres ?",
          answer: "<p>Nous adaptons la pression de rinçage au type de support. Sur les carrelages grès des immeubles récents, un brossage manuel précède le passage à l'eau pour déloger les salissures sans solliciter excessivement les joints. La pression reste modérée pour préserver l'étanchéité.</p>",
        },
        {
          question: "Comment gérez-vous l'eau et les coulures lors d'une intervention en centre-ville de Sèvres ?",
          answer: "<p>Un système de récupération est installé en périphérie du balcon avant le rinçage. L'eau est dirigée vers un point d'évacuation contrôlé. Cette précaution évite les traces sur les façades et les désagréments pour les occupants des étages inférieurs.</p>",
        },
        {
          question: "Les traces grasses sur un balcon de Sèvres partent-elles sans endommager le support ?",
          answer: "<p>Un produit dégraissant adapté au matériau est appliqué localement. Le temps de pose permet de dissoudre les résidus de cuisson ou de barbecue. Le brossage ciblé et le rinçage éliminent ces traces sans altérer le carrelage ou le béton.</p>",
        },
        {
          question: "Proposez-vous un nettoyage sans haute pression pour les balcons ouverts des petits collectifs de Sèvres ?",
          answer: "<p>Oui, sur les balcons avec joints fragiles ou dalles sur plots, nous privilégions un brossage manuel associé à un rinçage basse pression. Cette méthode préserve l'intégrité du support tout en obtenant un résultat propre et durable.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 4) balcons-fientes
    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque autour du Parc de Saint-Cloud et des quartiers résidentiels exposés aux arbres.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide systématique après collecte.",
        "Évacuation des déchets en sacs étanches et coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les dépôts de fientes s'accumulent sur les balcons exposés aux arbres du secteur Les Bruyères ou proches du Parc de Saint-Cloud. L'odeur devient tenace, le sol se couvre d'une couche blanchâtre, et l'envie d'utiliser cet espace extérieur disparaît progressivement. Les occupants renoncent à étendre du linge ou à profiter des beaux jours dehors.</p>\n<p class=\"mt-4\">Sur les petits collectifs et résidences de Sèvres, les balcons ouverts avec garde-corps métalliques ou carrelage grès subissent une dégradation accélérée. L'acidité des fientes attaque les surfaces, laisse des traces durables sur le béton et fragilise les peintures. Un traitement régulier permet de retrouver un espace propre, sans odeur, et de préserver l'état des matériaux.</p>\n<p class=\"mt-4\">L'intervention nécessite une organisation adaptée à l'habitat dense : gestion des déchets contaminés, protection du voisinage pendant le confinement, et aération contrôlée avant réutilisation du balcon. Un diagnostic préalable identifie les zones les plus touchées et les solutions de dissuasion envisageables.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur sans odeur ni risque sanitaire. Les supports retrouvent leur aspect d'origine, les traces acides sont traitées, et l'air ambiant redevient sain après aération complète.</p>\n<p class=\"mt-4\">La désinfection finale élimine les agents pathogènes présents dans les fientes. Un produit virucide homologué est appliqué avec un temps de contact respecté sur l'ensemble des surfaces.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, la zone est bâchée pour éviter la dispersion des poussières contaminées. L'intervenant porte FFP2, gants, lunettes et combinaison jetable.</p>\n<p class=\"mt-4\">Les fientes sont humidifiées pour neutraliser les particules volatiles, puis collectées et conditionnées en sacs étanches. Le garde-corps, le sol et les vitrages sont nettoyés méthodiquement.</p>\n\n<h3>Prévention du retour</h3>\n<p>Après rinçage et séchage, des solutions de dissuasion peuvent être proposées : pics sur les rebords, filets de protection ou gel répulsif selon la configuration du balcon et les habitudes des pigeons observées sur le secteur.</p>",
      specificChallenges: [
        "Proximité du Parc de Saint-Cloud : balcons exposés aux dépôts réguliers de fientes.",
        "Garde-corps métalliques et carrelage grès fragilisés par l'acidité des déjections.",
        "Habitat dense nécessitant une gestion rigoureuse du confinement et de l'aération.",
        "Risque de réinfestation sans mise en place de dispositifs anti-retour adaptés.",
        "Odeurs persistantes si le traitement n'inclut pas une désinfection complète.",
      ],
      faqAdditions: [
        {
          question: "Les fientes de pigeons sur un balcon proche du Parc de Saint-Cloud présentent-elles des risques sanitaires particuliers ?",
          answer: "<p>Les fientes contiennent des agents pathogènes qui peuvent affecter les voies respiratoires si elles sont manipulées sans précaution. Sur les balcons exposés aux arbres du parc, l'accumulation est souvent plus rapide. Un assainissement avec désinfection limite ces risques pour les occupants.</p>",
        },
        {
          question: "Quels équipements de protection utilisez-vous pour intervenir sur un balcon à Sèvres ?",
          answer: "<p>L'intervenant porte un masque FFP2, des gants, des lunettes de protection et une combinaison jetable. Ces EPI sont indispensables pour éviter tout contact avec les particules contaminées. Le bâchage de la zone complète le dispositif de sécurité en habitat dense.</p>",
        },
        {
          question: "La désinfection est-elle systématique après le retrait des fientes sur les balcons sévriens ?",
          answer: "<p>Oui, chaque intervention inclut l'application d'un produit virucide et bactéricide homologué. Le temps de contact est respecté pour éliminer les agents pathogènes. Cette étape garantit un balcon sain, sans risque résiduel sur le carrelage ou le garde-corps.</p>",
        },
        {
          question: "Les balcons situés près des arbres ou sous les corniches à Sèvres sont-ils plus touchés par les fientes ?",
          answer: "<p>Les pigeons nichent volontiers dans les arbres et sur les corniches des immeubles anciens. Les balcons situés en dessous reçoivent davantage de déjections. Dans le quartier Centre-ville ou Les Bruyères, ces configurations sont fréquentes et justifient une intervention régulière.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 5) canapes-tapis
    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à Sèvres, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un mobilier propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux sévriens, des pavillons de Brancas aux appartements du centre-ville.",
        "Détachage enzymatique adapté à chaque textile et séchage contrôlé pour une remise en service rapide.",
        "Organisation souple : créneau selon vos disponibilités, gestion des accès en immeuble ou maison individuelle.",
      ],
      uniqueIntro: "<p>Dans les secteurs résidentiels autour de Brancas, les canapés et tapis accumulent au fil des mois poussières, taches alimentaires et résidus liés à la vie quotidienne. Les familles avec enfants ou animaux constatent souvent des auréoles persistantes, des odeurs diffuses ou un aspect terne qui ne part plus avec un simple aspirateur. Ces textiles sollicités chaque jour finissent par concentrer allergènes et salissures invisibles à l'œil nu.</p>\n<p class=\"mt-4\">Un entretien en profondeur redonne au mobilier son confort d'origine. Les fibres retrouvent leur souplesse, les couleurs se ravivent et l'atmosphère du salon ou de la chambre gagne en fraîcheur. Dans les pavillons et appartements T2-T3 de Sèvres, où le mobilier textile occupe une place centrale, cette remise en état améliore sensiblement le quotidien des occupants.</p>\n<p class=\"mt-4\">Notre intervention s'adapte aux contraintes d'accès en immeuble ou maison : escaliers étroits, stationnement limité, digicodes. Nous organisons le passage pour limiter la gêne et permettre une remise en service rapide du mobilier traité.</p>",
      uniqueDeepDive: "<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Les taches de café, traces grasses ou auréoles d'urine nécessitent chacune une approche différente. Nous identifions le type de textile — coton, synthétique, velours — et la nature des salissures avant toute action. Un détachant adapté est appliqué sur les zones marquées, avec test préalable sur partie cachée pour les fibres fragiles.</p>\n\n<h3>Extraction des salissures incrustées</h3>\n<p>L'injection-extraction pénètre au cœur du rembourrage ou des fibres du tapis. La solution nettoyante décolle les résidus accumulés, puis l'aspiration puissante les évacue avec l'excédent d'eau. La pression et la température sont ajustées selon la sensibilité du textile pour préserver son aspect.</p>\n\n<h3>Séchage et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage à quelques heures selon l'épaisseur et l'aération du logement. Nous indiquons le délai avant réutilisation et partageons des conseils simples pour espacer les prochaines interventions : protection anti-taches, fréquence d'aspiration adaptée à l'usage familial.</p>",
      specificChallenges: [
        "Taches alimentaires et traces d'usage quotidien sur canapés familiaux.",
        "Accumulation d'allergènes et acariens dans les fibres des tapis et matelas.",
        "Odeurs persistantes liées aux animaux domestiques dans les logements.",
        "Accès parfois contraints : escaliers étroits, digicodes, stationnement limité.",
        "Textiles variés nécessitant une adaptation du traitement selon la fibre.",
      ],
      faqAdditions: [
        {
          question: "Le nettoyage de canapé et tapis réduit-il les acariens dans un logement familial du quartier Brancas ?",
          answer: "<p>L'injection-extraction déloge les acariens et leurs déjections nichés dans les fibres. Dans les pavillons et appartements de Brancas, où les textiles sont sollicités au quotidien, cette intervention diminue sensiblement la charge allergénique et améliore le confort respiratoire des occupants.</p>",
        },
        {
          question: "Comment adaptez-vous le nettoyage selon le textile d'un canapé ou tapis dans un appartement de Sèvres ?",
          answer: "<p>Nous identifions d'abord la composition : coton, laine, synthétique ou velours. La pression d'injection, la température et le produit sont ajustés en conséquence. Un test sur zone cachée précède toute action sur les fibres fragiles pour éviter décoloration ou déformation.</p>",
        },
        {
          question: "Que faut-il préparer dans une maison de Sèvres avant un nettoyage de canapé et tapis ?",
          answer: "<p>Dégagez l'accès au mobilier concerné et retirez les objets posés dessus. Prévoyez un espace de stationnement proche si possible. Pour les immeubles avec digicode, transmettez-nous le code ou prévoyez votre présence à l'arrivée de l'équipe.</p>",
        },
        {
          question: "Quels produits utilisez-vous pour nettoyer canapé et tapis dans un foyer avec enfants et animaux à Sèvres ?",
          answer: "<p>Nos solutions sont formulées pour être sans danger après séchage complet. Les résidus de produit sont extraits avec l'eau sale. Une fois le textile sec, enfants et animaux peuvent reprendre leurs habitudes sans précaution particulière.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 6) terrasses
    {
      serviceKey: "terrasses",
      heroDescription: "Traitement adapté de votre terrasse selon le support — carrelage, bois ou pierre — avec élimination des mousses, dépôts verts et taches tenaces pour retrouver un extérieur propre et agréable à utiliser.",
      whyUsBullets: [
        "Connaissance des terrasses exposées aux arbres et à l'humidité dans les quartiers résidentiels de Sèvres.",
        "Méthodes différenciées selon le support — haute pression contrôlée sur carrelage, nettoyage doux sur bois ou pierre fragile.",
        "Protection systématique du mobilier et des plantations, gestion de l'écoulement d'eau vers les évacuations existantes.",
      ],
      uniqueIntro: "<p>Les traces verdâtres sont visibles sur de nombreuses terrasses des secteurs pavillonnaires de Sèvres, notamment dans les quartiers Brancas et Les Bruyères. Mousse incrustée entre les joints, lichens sur les dalles, film glissant après chaque épisode pluvieux : ces dépôts s'installent progressivement et rendent la surface peu engageante, voire dangereuse par temps humide.</p>\n<p class=\"mt-4\">Sur les maisons équipées de terrasses en carrelage grès ou en lames de bois, le revêtement perd son aspect d'origine. Les résidences récentes comme les pavillons plus anciens subissent les mêmes désagréments : un extérieur qu'on hésite à utiliser, du mobilier qu'on ne sort plus, des repas dehors reportés. Le confort de vie s'en trouve réduit alors que cet espace devrait prolonger l'intérieur.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter chaque support selon ses caractéristiques. Diagnostic préalable, protection du mobilier et des plantations, choix de la méthode adaptée : le travail s'organise en tenant compte des contraintes de séchage et de l'exposition de votre terrasse.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur est déplacé ou bâché selon sa nature. Les jardinières et plantes sont protégées ou éloignées de la zone de travail. Les menuiseries — baies vitrées, portes-fenêtres — reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage permet d'éliminer les feuilles mortes, débris et terre accumulés avant le traitement.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Le produit est sélectionné selon le matériau : carrelage, pierre naturelle, bois ou composite. Un brossage manuel ou mécanique déloge les mousses et lichens incrustés.</p>\n<p class=\"mt-4\">La pression est contrôlée pour ne pas endommager les joints ni les surfaces poreuses. Sur les terrasses en bois, un nettoyage doux préserve les fibres du revêtement.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>L'eau est dirigée vers les points d'évacuation existants. Les garde-corps et murets périphériques sont traités dans la foulée.</p>\n<p class=\"mt-4\">Un temps de séchage est respecté avant la remise en place du mobilier. Des conseils d'entretien saisonnier vous sont transmis pour prolonger le résultat.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'exposition aux arbres dans les secteurs pavillonnaires.",
        "Terrasses en bois ou pierre nécessitant un traitement adapté pour éviter les dégradations.",
        "Mobilier extérieur et jardinières à protéger ou déplacer avant intervention.",
        "Gestion de l'écoulement d'eau vers les évacuations sans débordement chez les voisins.",
        "Temps de séchage variable selon l'exposition et la saison.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous une terrasse en pierre ou en bois dans les maisons de Sèvres sans abîmer le support ?",
          answer: "<p>Chaque matériau reçoit un traitement spécifique. Sur la pierre, un brossage avec produit adapté précède un rinçage à pression modérée. Le bois est traité sans haute pression pour préserver les fibres et éviter l'éclatement des lames. Le diagnostic initial détermine la méthode appropriée.</p>",
        },
        {
          question: "Les mousses et lichens sur une terrasse exposée aux arbres dans le quartier Les Bruyères partent-ils complètement ?",
          answer: "<p>Le traitement élimine les dépôts visibles et les racines superficielles. Sur les surfaces très colonisées, un produit anti-mousse peut être appliqué pour freiner la repousse. L'exposition à l'ombre et à l'humidité favorise le retour : un entretien régulier limite ce phénomène.</p>",
        },
        {
          question: "À quelle fréquence faut-il nettoyer une terrasse exposée aux arbres ou à la pluie à Sèvres ?",
          answer: "<p>Une intervention annuelle suffit généralement pour les terrasses bien exposées. Les surfaces ombragées ou proches de végétation dense peuvent nécessiter un passage tous les six à huit mois. L'observation des premiers dépôts verts indique le moment opportun pour intervenir.</p>",
        },
        {
          question: "Utilisez-vous un nettoyage doux ou haute pression pour une terrasse en carrelage grès à Sèvres ?",
          answer: "<p>Le carrelage grès supporte bien la haute pression contrôlée, efficace sur les salissures incrustées. Les joints sont traités avec précaution pour éviter leur détérioration. Sur les carrelages poreux ou anciens, la pression est réduite et complétée par un brossage manuel.</p>",
        },
      ],
      ctaOverride: "",
    },

    // 7) nettoyage-appartement-maison
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux finitions, pour une restitution impeccable après travaux ou un état des lieux sans réserve.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Sèvres, du collectif ancien aux résidences récentes avec accès sécurisé.",
        "Polyvalence sur tous types de surfaces : parquets fragiles, carrelages, faïences, vitres intérieures et finitions murales.",
        "Organisation calée sur vos délais : coordination agence, passage artisans, remise de clés planifiée.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement ou une maison parfaitement propre quand les délais sont serrés et que chaque détail compte ? Entre le <strong>centre-ville</strong> et les secteurs résidentiels de Sèvres, les fins de chantier et les états des lieux s'enchaînent, souvent avec des contraintes de calendrier imposées par les agences ou les nouveaux occupants. Poussières de plâtre, traces de peinture, résidus d'enduit : le nettoyage dépasse largement le simple coup de balai.</p>\n<p class=\"mt-4\">Dans les <strong>appartements T2-T3</strong> comme dans les maisons individuelles, un logement correctement préparé facilite la remise des clés et évite les litiges. Les immeubles anciens aux escaliers étroits ou les résidences récentes avec digicodes demandent une organisation adaptée. Un intérieur soigné rassure le propriétaire, l'agence et le futur locataire.</p>\n<p class=\"mt-4\">Nous structurons chaque intervention selon le contexte : <strong>coordination avec artisans</strong> si le chantier n'est pas terminé, adaptation aux horaires de passage de l'agence, gestion des accès par badge ou gardien. Le planning s'ajuste aux impératifs de rotation locative fréquents dans cette commune des Hauts-de-Seine.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation du logement</h3>\n<p>Avant toute action, nous évaluons l'état général : nature des résidus (poussière de chantier, traces de colle, salissures courantes), surfaces concernées et contraintes d'accès. Si des gravats ou déchets encombrent les pièces, nous procédons à leur évacuation pour libérer l'espace de travail.</p>\n\n<h3>Nettoyage par zones</h3>\n<p>Les pièces d'eau reçoivent une attention particulière : sanitaires, faïences, joints et plans de travail sont traités en profondeur. Les sols sont aspirés puis lavés selon leur revêtement, qu'il s'agisse de parquet, carrelage ancien ou revêtement récent. Les vitres intérieures, plinthes et radiateurs sont également inclus.</p>\n\n<h3>Finitions et contrôle qualité</h3>\n<p>Interrupteurs, poignées, intérieurs de placards : chaque détail visible lors d'un état des lieux fait l'objet d'une vérification. Nous aérons le logement avant de quitter les lieux. Si une coordination avec une agence ou un artisan est prévue, nous ajustons notre passage pour respecter le planning global.</p>",
      specificChallenges: [
        "Stationnement compliqué en centre-ville : nous anticipons les créneaux et zones de dépose.",
        "Immeubles anciens avec escaliers étroits : matériel adapté pour accéder sans encombre.",
        "Digicodes et badges fréquents : coordination préalable avec gardien ou agence pour l'accès.",
        "Délais serrés avant état des lieux : intervention planifiée selon vos contraintes horaires.",
        "Résidus de chantier tenaces (colle, peinture) : traitement ciblé sans abîmer les supports.",
      ],
      faqAdditions: [
        {
          question: "Quelle différence faites-vous entre un nettoyage standard et une remise en état fin de chantier pour un appartement T2-T3 à Sèvres ?",
          answer: "<p>Un nettoyage standard traite les salissures courantes. Après travaux, nous intervenons sur les résidus de plâtre, traces de peinture et poussières fines qui s'infiltrent partout. Les finitions (plinthes, interrupteurs, intérieurs de placards) demandent un traitement minutieux adapté aux logements de la commune.</p>",
        },
        {
          question: "Quel niveau de propreté puis-je attendre avant un état des lieux dans le centre-ville de Sèvres ?",
          answer: "<p>Nous visons un rendu sans réserve : sols impeccables, pièces d'eau désinfectées, vitres propres, détails soignés. Le logement est prêt pour une visite d'agence ou la remise des clés. Si un point nécessite une repasse, nous intervenons dans les délais convenus.</p>",
        },
        {
          question: "Pouvez-vous coordonner le nettoyage d'une maison à Sèvres avec des artisans ou une agence immobilière ?",
          answer: "<p>Oui, nous ajustons notre planning selon les contraintes du chantier ou de l'agence. Si les travaux ne sont pas totalement terminés, nous pouvons intervenir en plusieurs passages. La communication avec vos interlocuteurs est assurée pour éviter tout décalage.</p>",
        },
        {
          question: "Comment gérez-vous l'accès à un appartement à Sèvres quand il faut un digicode et que le stationnement est difficile ?",
          answer: "<p>Nous récupérons les codes ou badges en amont, et coordonnons si besoin avec le gardien. Pour le stationnement, nous repérons les créneaux disponibles ou utilisons les zones de dépose autorisées. L'intervention démarre à l'heure prévue, sans retard lié à ces contraintes.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;