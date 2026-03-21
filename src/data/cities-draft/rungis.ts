import type { City } from "~/types/geo";

const city: City = {
  name: "Rungis",
  slug: "rungis",
  postalCodes: ["94150"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Rungis. Une organisation adaptée aux contraintes du secteur, entre résidences pavillonnaires et zones d'activités proches du MIN.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>À Rungis, commune abritant le Marché International et desservie par le RER C et le tramway T7, Klinova accompagne syndics, gestionnaires et particuliers dans <strong>l'entretien régulier de leurs locaux</strong>. Notre équipe connaît les spécificités du territoire et s'adapte aux rythmes d'activité.</p>\n\n<p class=\"mt-4\">Nous assurons la propreté des halls, parkings souterrains, balcons et espaces privatifs. Chaque intervention fait l'objet d'une coordination précise pour limiter les perturbations. Un reporting peut être mis en place selon vos besoins de suivi.</p>\n\n<ul>\n  <li><strong>Réactivité locale :</strong> Nos équipes interviennent rapidement sur Rungis et ses environs, avec un matériel adapté aux configurations rencontrées sur place.</li>\n  <li><strong>Coordination avec les gestionnaires :</strong> Planification des passages en fonction des contraintes d'accès, horaires décalés si nécessaire pour les zones à forte activité.</li>\n  <li><strong>Transparence des méthodes :</strong> Protocoles explicites communiqués avant chaque intervention, sans surprise sur les étapes ou les délais annoncés.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Proximité de l'A86</strong> : dépôts de particules fines sur balcons et façades exposées.",
    "Trafic poids lourds lié au MIN générant des <strong>salissures industrielles</strong> sur les parkings.",
    "Résidences récentes avec <strong>digicodes et badges</strong> nécessitant une coordination préalable.",
    "Stationnement complexe en zone d'activités Silic pour le positionnement du matériel.",
    "Halls ouverts dans les petits collectifs exposés aux <strong>poussières extérieures</strong>.",
    "Parkings souterrains avec <strong>traces d'huile</strong> liées à l'activité logistique environnante.",
  ],

  // Texte brut uniquement
  districts: ["Rungis Ville", "Le Sud", "Les Antes", "Centre-ville", "Secteur gare"],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Rungis",
    "Marché International de Rungis (MIN)",
    "Gare de Rungis - La Fraternelle",
    "Tramway T7",
    "Zone d'activités Silic",
    "Aéroport d'Orly (proximité)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Quel délai pour une première intervention sur Rungis ?",
      answer: "<p>Nous organisons généralement un premier passage sous <strong>48 à 72 heures</strong> après validation du devis. Ce délai peut varier selon la nature de la prestation et les contraintes d'accès au site. Pour les demandes urgentes, nous étudions la faisabilité d'une intervention plus rapide.</p>",
    },
    {
      question: "Comment se déroule la prise de contact pour un devis ?",
      answer: "<p>Vous pouvez nous joindre par téléphone ou par mail. Nous recueillons les informations essentielles : <strong>type de surface</strong>, localisation, contraintes d'accès. Un devis détaillé vous est transmis sous 24 à 48 heures, sans engagement de votre part.</p>",
    },
    {
      question: "Intervenez-vous en dehors des horaires classiques ?",
      answer: "<p>Oui, nous proposons des <strong>créneaux en soirée ou tôt le matin</strong> pour les copropriétés ou locaux professionnels nécessitant une discrétion maximale. Cette flexibilité permet de limiter la gêne pour les occupants ou les salariés présents en journée.</p>",
    },
    {
      question: "Pouvez-vous coordonner plusieurs prestations sur un même site à Rungis ?",
      answer: "<p>Nous regroupons régulièrement plusieurs interventions pour <strong>optimiser les déplacements</strong> et réduire les perturbations. Par exemple, entretien des parties communes et nettoyage de parking peuvent être planifiés le même jour selon la configuration du bâtiment.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride:
    "Commune abritant le Marché International de Rungis et Ville desservie par le RER C et le tramway T7",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template doit rester avec services: [].
  // => Le FORMAT ONLY injecte uniquement les services présents dans l’entrée (bundle/plan/servicesRequested).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes de bureaux ou halls d'immeubles, avec un séchage maîtrisé pour limiter l'interruption d'activité.",
      whyUsBullets: [
        "Connaissance des typologies de bureaux et halls présents dans le secteur Silic et les résidences récentes de Rungis.",
        "Matériel d'injection-extraction professionnel, adapté aux dalles textiles comme aux moquettes bouclées épaisses.",
        "Interventions planifiées en dehors des heures de forte activité, avec coordination préalable pour l'accès aux locaux.",
      ],
      uniqueIntro: "<p>Les traces de passage sont visibles sur les dalles textiles dès les premières semaines d'utilisation intensive. Dans la <strong>zone d'activités Silic</strong>, les couloirs de bureaux et les espaces d'accueil accumulent poussières fines, résidus de semelles et taches de café. Le trafic quotidien lié aux activités logistiques environnantes accélère ce grisaillement, surtout aux abords des entrées et des zones de circulation principale.</p>\n\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur aspect d'origine et prolonge la durée de vie du revêtement. Dans les <strong>bureaux et halls de résidences récentes</strong>, où les moquettes bouclées ou en dalles modulaires dominent, le détachage ciblé permet d'éliminer les auréoles sans fragiliser le support. L'image des locaux s'en trouve améliorée, tout comme le confort des occupants.</p>\n\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des contraintes d'accès : digicodes, badges et stationnement parfois délicat en zone d'activités. Un diagnostic préalable identifie les surfaces prioritaires, les types de fibres et les horaires les moins perturbants pour l'activité.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intense</h3>\n<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant le passage de l'injecteur-extracteur. Les fibres bouclées ou les dalles textiles reçoivent un traitement adapté à leur densité.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les bureaux et open spaces présentent souvent des <strong>taches localisées</strong> : café, encre, traces de roulettes. Un détachage ciblé précède l'injection-extraction sur l'ensemble de la surface. Les plinthes et bas de murs sont protégés pendant l'opération.</p>\n\n<h3>Séchage et remise en service</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon la ventilation des locaux. Les zones traitées restent balisées jusqu'à séchage complet. Une fréquence d'entretien est conseillée en fonction du trafic constaté.</p>",
      specificChallenges: [
        "<strong>Dalles textiles de bureaux</strong> marquées par le passage quotidien des équipes et visiteurs.",
        "Taches de café et résidus de semelles incrustés dans les fibres bouclées des halls.",
        "Accès aux locaux soumis à <strong>digicodes et badges</strong>, nécessitant une coordination préalable.",
        "Stationnement du véhicule d'intervention parfois contraint en zone d'activités.",
        "Séchage à adapter selon la ventilation et l'occupation des espaces de travail.",
      ],
      faqAdditions: [
        {
          question:
            "Dans la zone Silic à Rungis, comment intervenez-vous quand l'accès aux bureaux impose digicodes, badges et créneaux précis ?",
          answer: "<p>Nous organisons <strong>l'intervention en amont</strong> avec le gestionnaire ou l'occupant pour obtenir les accès nécessaires. Le matériel est préparé pour limiter les allers-retours. Les horaires sont ajustés selon les contraintes d'activité des locaux concernés.</p>",
        },
        {
          question:
            "Les dalles textiles de bureaux à Rungis, marquées par les flux liés au MIN et à l'A86, peuvent-elles être rattrapées ?",
          answer: "<p>Les salissures incrustées par le trafic quotidien répondent bien à l'injection-extraction. Les fibres retrouvent leur aspect d'origine dans la majorité des cas. Seules les taches très anciennes ou les dégradations mécaniques peuvent limiter le résultat.</p>",
        },
        {
          question:
            "Dans les halls de résidences récentes à Rungis, quelle différence faites-vous entre copropriété, bureau et logement ?",
          answer: "<p><strong>Le protocole reste identique</strong>, mais l'organisation diffère. En copropriété, nous coordonnons avec le syndic et informons les résidents. En bureau, l'intervention se cale sur les horaires d'activité. À domicile, nous adaptons le planning aux contraintes familiales.</p>",
        },
        {
          question:
            "À Rungis, quand le stationnement est difficile près de Silic, comment organisez-vous le matériel pour une moquette de bureau ?",
          answer: "<p>Nous repérons les possibilités de stationnement avant l'intervention et privilégions les créneaux où l'accès est plus simple. Le matériel est regroupé pour limiter les trajets. Si nécessaire, un chariot facilite le transport jusqu'aux locaux.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec autolaveuse et dégraissant adapté au béton, pour des sols assainis et une circulation sécurisée.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès spécifiques aux parkings proches du MIN et de la zone Silic.",
        "Autolaveuse professionnelle et dégraissants adaptés au béton brut comme au béton peint.",
        "Coordination avec syndics et gestionnaires pour un balisage efficace et une rotation fluide des véhicules.",
      ],
      uniqueIntro: "<p>Dans le secteur du MIN de Rungis, les parkings d'entreprises et de copropriétés subissent <strong>un encrassement accéléré</strong>. Le trafic poids lourds génère des dépôts de graisse, des traces d'huile et des poussières industrielles qui s'accumulent sur les dalles. Les gestionnaires constatent rapidement une dégradation visible des sols, particulièrement aux abords des rampes d'accès et dans les angles peu ventilés.</p>\n\n<p class=\"mt-4\">Un lavage mécanisé régulier permet de maintenir un niveau de propreté compatible avec les exigences des copropriétaires et des locataires professionnels. Les parkings souterrains en béton brut ou béton peint, fréquents dans les ensembles récents, nécessitent un traitement adapté pour éviter l'incrustation définitive des salissures et préserver l'adhérence des revêtements.</p>\n\n<p class=\"mt-4\">L'intervention s'organise en coordination avec les syndics ou responsables de site. Un diagnostic préalable identifie les zones critiques, le type de revêtement et l'état des évacuations. Le planning tient compte des contraintes de circulation dense et du stationnement plus complexe en zone d'activités.</p>",
      uniqueDeepDive: "<h3>Encrassement et huile incrustée</h3>\n<p>Les taches d'huile anciennes et les dépôts graisseux constituent <strong>la difficulté principale</strong>. Un balayage préalable élimine les débris grossiers. Le dégraissant est appliqué sur les zones critiques avant passage de l'autolaveuse, avec un temps de contact adapté au niveau d'encrassement.</p>\n\n<h3>Gestion des eaux et évacuations</h3>\n<p>Le lavage mécanisé produit des eaux chargées qui doivent être canalisées vers les regards existants. Avant intervention, l'état des rigoles et des évacuations est vérifié. Les eaux sont dirigées sans rejet sauvage, conformément aux contraintes du site.</p>\n\n<h3>Sécurisation et remise en circulation</h3>\n<p>Un balisage signalétique délimite les zones en cours de traitement. La rotation des véhicules s'organise par secteur pour limiter l'immobilisation. Les rampes d'accès reçoivent une attention particulière pour maintenir leur caractère antidérapant. Les pieds de murs et angles morts sont traités manuellement si nécessaire.</p>",
      specificChallenges: [
        "<strong>Dépôts d'huile</strong> liés au trafic poids lourds du MIN, incrustés dans le béton.",
        "Parkings souterrains avec <strong>ventilation limitée</strong> et séchage plus long.",
        "Stationnement complexe en zone d'activités, nécessitant une <strong>rotation par secteur</strong>.",
        "Rampes d'accès exposées aux salissures et à la perte d'adhérence.",
        "Évacuations parfois encombrées par les résidus industriels.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un parking proche du MIN de Rungis, comment traitez-vous les taches d'huile anciennes et les dépôts industriels ?",
          answer: "<p>Les taches d'huile anciennes reçoivent un dégraissant professionnel avec temps de contact prolongé. L'autolaveuse effectue ensuite plusieurs passes sur les zones concernées. Pour les dépôts industriels tenaces, un traitement manuel complémentaire peut être nécessaire avant le lavage mécanisé final.</p>",
        },
        {
          question:
            "Sur un parking souterrain en béton brut à Rungis, comment gérez-vous les eaux de lavage sans dégrader le support ?",
          answer: "<p>Les eaux de lavage sont <strong>canalisées vers les évacuations existantes</strong> après vérification de leur bon état. Le débit et la pression sont adaptés au béton brut pour éviter toute dégradation. Les produits utilisés sont compatibles avec ce type de revêtement et ne laissent pas de résidu agressif.</p>",
        },
        {
          question:
            "Autour du MIN de Rungis, comment sécurisez-vous un parking pendant le nettoyage sans gêner les usagers ?",
          answer: "<p>Un balisage signalétique délimite clairement les zones en cours de traitement. L'intervention progresse par secteur pour permettre aux véhicules de circuler et stationner dans les parties non concernées. Les horaires peuvent être adaptés aux périodes de moindre affluence.</p>",
        },
        {
          question:
            "Dans les parkings de Rungis, préférez-vous une fermeture totale ou partielle quand le stationnement est déjà compliqué ?",
          answer: "<p><strong>La fermeture partielle par secteur</strong> est privilégiée pour limiter la gêne. Chaque zone est libérée après séchage avant de passer à la suivante. Une fermeture totale reste possible si le gestionnaire le souhaite, notamment pour un décrassage complet en une seule intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au support et gestion anti-coulures pour un espace extérieur propre et utilisable dès le lendemain.",
      whyUsBullets: [
        "Balcons exposés aux dépôts de l'A86 : nous adaptons le traitement à ce contexte de pollution routière.",
        "Pression ajustée selon le support, brossage ciblé sur les joints fragiles, produits compatibles carrelage et béton.",
        "Organisation pensée pour limiter les coulures chez vos voisins et coordonner l'accès en petit collectif.",
      ],
      uniqueIntro: "<p>Comment profiter pleinement de son balcon quand les dépôts de particules liés à la proximité de l'A86 s'accumulent semaine après semaine ? À Rungis, les balcons exposés côté axe routier récupèrent <strong>une couche grisâtre tenace</strong>, mêlée aux pollens et aux traces d'humidité. Le carrelage perd son aspect d'origine, les joints noircissent, et l'envie de s'installer dehors diminue.</p>\n\n<p class=\"mt-4\">Dans les résidences récentes du quartier Les Antes ou du secteur Sud, les balcons en carrelage grès ou béton brut subissent ces salissures sans que le simple coup de balai suffise. Le garde-corps se ternit, les angles accumulent la crasse, et l'espace devient un prolongement oublié du logement plutôt qu'un lieu de détente.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon agréable. Diagnostic du support, protection des menuiseries et des plantes, traitement adapté : chaque étape vise un résultat visible sans risque pour les voisins du dessous ni pour les matériaux.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et seuils de porte reçoivent une protection pour éviter les projections. Les gros dépôts — feuilles, terre, débris — sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement du sol et des surfaces</h3>\n<p>Un produit adapté au support est appliqué : formule douce pour le carrelage grès, dégraissant pour le béton brut. Le brossage manuel ou mécanique décolle <strong>les salissures incrustées</strong> dans les joints. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée. Si nécessaire, une pression contrôlée complète le travail sans fragiliser les joints.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>Le rinçage s'effectue avec gestion anti-coulures pour préserver les balcons voisins et la façade. L'eau est dirigée vers l'évacuation existante. Après séchage, des conseils d'entretien vous permettent de prolonger la propreté obtenue entre deux interventions.</p>",
      specificChallenges: [
        "<strong>Dépôts grisâtres</strong> liés au trafic de l'A86, incrustés dans les joints du carrelage.",
        "Balcons en <strong>béton brut</strong> poreux qui retiennent la pollution et les traces d'humidité.",
        "Gestion des <strong>coulures</strong> indispensable en petit collectif pour préserver les voisins du dessous.",
        "Garde-corps et vitrages ternis par les particules fines et les intempéries.",
        "Accès parfois contraint par <strong>digicode</strong> et stationnement limité en zone résidentielle.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons carrelés des résidences récentes à Rungis, comment évitez-vous d'abîmer les joints ?",
          answer: "<p>Nous utilisons une pression modérée et un brossage manuel sur les zones fragiles. Le produit appliqué est choisi pour décoller les salissures sans attaquer le mortier des joints. Sur le carrelage grès fréquent dans les résidences du secteur Sud, cette méthode préserve l'étanchéité tout en retirant les dépôts grisâtres.</p>",
        },
        {
          question:
            "À Rungis, comment gérez-vous l'eau et les coulures lors du nettoyage d'un balcon en petit collectif ?",
          answer: "<p><strong>L'eau de rinçage est dirigée vers l'évacuation existante</strong> du balcon. Nous limitons le débit et protégeons les rebords pour éviter les projections vers les balcons inférieurs. En cas de balcon sans évacuation directe, nous utilisons une aspiration pour récupérer l'excédent avant qu'il ne coule chez vos voisins.</p>",
        },
        {
          question:
            "Selon le support, béton brut ou carrelage grès, comment adaptez-vous le nettoyage de balcon à Rungis ?",
          answer: "<p>Le béton brut, plus poreux, nécessite un temps de pose du produit plus long et un brossage appuyé pour extraire les salissures en profondeur. Le carrelage grès supporte un rinçage plus direct mais demande une attention particulière aux joints. Nous ajustons la pression et le produit à chaque configuration rencontrée.</p>",
        },
        {
          question:
            "Pour un balcon exposé à l'A86 à Rungis, comment nettoyez-vous sans haute pression tout en retirant les dépôts ?",
          answer: "<p>Le brossage manuel combiné à un produit désincrustant suffit dans la plupart des cas. Pour les dépôts tenaces liés à la pollution routière, nous utilisons <strong>une pression douce</strong>, inférieure à celle d'un nettoyeur haute pression classique. Cette approche retire la couche grisâtre sans fragiliser les joints ni projeter d'eau chez les voisins.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des secteurs exposés à Rungis, notamment autour des espaces verts et des cours intérieures.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide systématique.",
        "Évacuation des déchets en sacs étanches, avec respect des délais d'aération avant remise en service.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les garde-corps et le sol. À proximité du <strong>parc de la colline Cacao</strong>, le contexte arboré favorise la présence régulière de pigeons sur les balcons des résidences voisines. L'odeur devient gênante, le linge étendu absorbe les particules, et l'espace extérieur perd toute utilité au quotidien.</p>\n\n<p class=\"mt-4\">Dans les <strong>résidences récentes de Rungis</strong>, les balcons présentent souvent des supports carrelés ou en béton brut. Ces matériaux retiennent les salissures acides des fientes, qui attaquent progressivement les joints et les surfaces. Un traitement adapté permet de retrouver un espace sain, sans traces ni odeurs persistantes, et de limiter les dégradations futures.</p>\n\n<p class=\"mt-4\">La proximité de cours intérieures et de zones arborées impose une organisation rigoureuse : confinement de la zone, protection du logement, évacuation sécurisée des déchets. Chaque intervention inclut un diagnostic visuel pour évaluer l'étendue des dépôts et proposer des solutions de dissuasion si nécessaire.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur propre, sans odeur ni agent pathogène. Les supports — sol, garde-corps, vitrages — sont traités avec un produit virucide homologué, appliqué après nettoyage complet. Le temps de contact est respecté avant rinçage final.</p>\n\n<h3>Sécurisation et retrait des dépôts</h3>\n<p>L'intervenant porte <strong>un équipement de protection complet</strong> : masque FFP2, gants, lunettes, combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur ou chez les voisins. Les fientes sont humidifiées pour neutraliser les poussières, puis ramassées et conditionnées en sacs étanches.</p>\n\n<h3>Rinçage et recommandations</h3>\n<p>Après désinfection, un rinçage à pression contrôlée élimine les résidus. Un délai d'aération est conseillé avant de réutiliser le balcon. Si le contexte le justifie, des dispositifs anti-retour peuvent être proposés : pics sur les rebords, filets de protection ou gel répulsif.</p>",
      specificChallenges: [
        "<strong>Proximité d'espaces arborés</strong> favorisant la présence régulière de pigeons sur les balcons.",
        "Supports carrelés ou béton brut nécessitant une <strong>désinfection adaptée</strong> aux matériaux.",
        "Risque de dispersion des particules vers l'intérieur du logement sans confinement préalable.",
        "Odeurs persistantes si le traitement ne couvre pas l'ensemble des surfaces souillées.",
        "Besoin de solutions anti-retour dans les secteurs avec <strong>cours intérieures</strong> et végétation proche.",
      ],
      faqAdditions: [
        {
          question:
            "Sur un balcon proche d'une zone arborée à Rungis, quels sont les risques sanitaires liés aux fientes de pigeons ?",
          answer: "<p>Les fientes contiennent <strong>des agents pathogènes</strong> (bactéries, champignons) qui peuvent se disperser sous forme de poussières sèches. Sans protection adaptée, le contact ou l'inhalation présente un risque réel. Un assainissement professionnel avec désinfection limite ces dangers avant toute réutilisation de l'espace.</p>",
        },
        {
          question:
            "Dans une résidence récente à Rungis, quel protocole de sécurité appliquez-vous pour retirer les fientes de pigeons ?",
          answer: "<p>L'intervenant porte un équipement complet : masque FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour protéger l'intérieur et le voisinage. Les dépôts sont humidifiés avant ramassage pour éviter toute dispersion de particules contaminées dans l'air.</p>",
        },
        {
          question:
            "Après un nettoyage de fientes de pigeons à Rungis, pourquoi la désinfection du balcon est-elle indispensable ?",
          answer: "<p>Le simple retrait des dépôts ne suffit pas à éliminer <strong>les agents pathogènes</strong> incrustés dans les supports. Un produit virucide homologué est appliqué sur le sol, les garde-corps et les vitrages. Le temps de contact garantit l'élimination des bactéries avant rinçage et remise en service.</p>",
        },
        {
          question:
            "Autour des cours intérieures et des zones arborées de Rungis, quelles solutions anti-retour conseillez-vous après nettoyage ?",
          answer: "<p>Selon la configuration du balcon, plusieurs dispositifs peuvent être envisagés : pics anti-pigeons sur les rebords et corniches, filets de protection pour les loggias, ou gel répulsif sur les surfaces planes. Ces solutions réduisent significativement le risque de réinfestation dans les secteurs exposés.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des logements familiaux de Rungis Ville et des textiles courants en pavillon ou petit collectif.",
        "Détachage ciblé selon la nature des taches et séchage contrôlé pour une remise en service rapide.",
        "Coordination d'accès avec les résidences à badges et intervention en horaires adaptés à votre quotidien.",
      ],
      uniqueIntro: "<p>Les traces de café sur l'accoudoir, les auréoles sur le tapis du salon ou les taches d'origine inconnue sur le matelas sont visibles dans de nombreux foyers du quartier Rungis Ville. Ces marques s'accumulent avec le temps, surtout dans les logements où vivent enfants ou animaux. Le textile absorbe <strong>poussières, allergènes et résidus quotidiens</strong> sans qu'un simple aspirateur puisse tout éliminer.</p>\n\n<p class=\"mt-4\">Un canapé rafraîchi retrouve ses couleurs d'origine et offre un confort d'assise agréable. Un tapis détaché ne dégage plus d'odeurs persistantes. Un matelas traité réduit la présence d'acariens et améliore la qualité du sommeil. Dans les pavillons et petits collectifs de Rungis, ces textiles subissent un usage familial intensif qui justifie une remise en état régulière.</p>\n\n<p class=\"mt-4\">L'intervention débute par un diagnostic précis du tissu et des taches présentes. Dans les résidences récentes équipées de digicodes ou badges, nous coordonnons l'accès pour intervenir sans contrainte et remettre vos textiles en service rapidement.</p>",
      uniqueDeepDive: "<h3>Identification des taches et du textile</h3>\n<p><strong>Chaque tissu réagit différemment</strong> au traitement. Nous identifions la nature des fibres (coton, synthétique, velours, laine) et le type de salissures présentes. Un test discret sur une zone cachée permet de valider la méthode adaptée aux textiles fragiles.</p>\n\n<p class=\"mt-4\">Les taches organiques, grasses ou anciennes nécessitent un pré-traitement enzymatique ciblé avant le nettoyage principal.</p>\n\n<h3>Extraction en profondeur</h3>\n<p>La technique d'injection-extraction projette une solution adaptée dans les fibres puis aspire immédiatement les résidus dissous. La pression et la température sont ajustées selon l'épaisseur et la sensibilité du textile.</p>\n\n<p class=\"mt-4\">Cette méthode déloge les salissures incrustées sans détremper le support ni abîmer les couleurs.</p>\n\n<h3>Séchage et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et l'aération du logement, comptez quelques heures avant réutilisation.</p>\n\n<p class=\"mt-4\">Nous transmettons des conseils d'entretien pour espacer les interventions et préserver la propreté obtenue.</p>",
      specificChallenges: [
        "<strong>Taches anciennes</strong> incrustées dans les fibres depuis plusieurs mois ou années.",
        "Textiles fragiles (velours, laine) nécessitant une <strong>pression adaptée</strong>.",
        "Odeurs persistantes liées aux <strong>animaux domestiques</strong> ou à l'humidité.",
        "Séchage à anticiper selon <strong>l'épaisseur du textile</strong> et la ventilation du logement.",
        "Accès en résidence récente avec <strong>digicode ou badge</strong> à coordonner.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un logement familial de Rungis Ville, comment traitez-vous les acariens et allergènes d'un canapé ou d'un tapis ?",
          answer: "<p>L'injection-extraction déloge les acariens, poussières et allergènes piégés dans les fibres. La solution utilisée est adaptée aux foyers avec enfants ou animaux. Après séchage, le textile présente une charge allergène réduite et un confort d'usage amélioré pour toute la famille.</p>",
        },
        {
          question:
            "En pavillon ou petit collectif à Rungis, combien de temps faut-il pour sécher un canapé ou un tapis nettoyé ?",
          answer: "<p>Le temps de séchage dépend <strong>de l'épaisseur du textile</strong> et de l'aération du logement. En général, comptez entre deux et six heures. L'extraction maximale pendant l'intervention limite l'humidité résiduelle et accélère la remise en service de votre canapé ou tapis.</p>",
        },
        {
          question:
            "À Rungis, comment adaptez-vous le nettoyage d'un canapé tissu ou d'un tapis selon le textile et l'usage du logement ?",
          answer: "<p>Nous identifions d'abord <strong>la nature des fibres</strong> et le type de taches. Un test sur zone cachée valide la méthode. La pression et la température sont ajustées pour les textiles fragiles. Cette approche préserve les couleurs et la tenue du tissu après intervention.</p>",
        },
        {
          question:
            "Dans les résidences récentes de Rungis, à quelle fréquence recommandez-vous l'entretien d'un canapé ou d'un tapis familial ?",
          answer: "<p>Pour un usage familial avec enfants ou animaux, un rafraîchissement annuel maintient l'hygiène et l'aspect du textile. En cas de taches fréquentes ou d'allergies, une intervention tous les six mois peut être envisagée selon l'intensité d'utilisation quotidienne.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation aux supports bois, pierre ou carrelage, élimination des mousses et dépôts verts, et conseils d'entretien pour prolonger le résultat.",
      whyUsBullets: [
        "Connaissance des expositions locales, entre zones ombragées proches du parc de la colline Cacao et terrasses plein sud.",
        "Adaptation technique à chaque support : pression modulée sur bois, traitement spécifique sur pierre naturelle, anti-mousse ciblé.",
        "Protection systématique du mobilier et des plantations, gestion de l'eau pour éviter tout désagrément au voisinage.",
      ],
      uniqueIntro: "<p>Dans le secteur de la <strong>Plaine de Montjean</strong>, les terrasses de pavillons accumulent rapidement feuilles mortes, terre et dépôts organiques. L'humidité persistante favorise l'apparition de mousses qui s'étendent saison après saison, rendant les surfaces glissantes et peu engageantes. Les propriétaires constatent souvent que le simple balayage ne suffit plus à retrouver l'aspect d'origine.</p>\n\n<p class=\"mt-4\">Les <strong>dalles sur plots, lames de bois ou carrelages</strong> présents sur les terrasses des résidences récentes et pavillons réagissent différemment aux intempéries. Sans entretien adapté, les joints se verdissent, le bois grise et les dalles perdent leur éclat. Un rafraîchissement régulier redonne à l'espace extérieur son rôle de prolongement du logement, utilisable dès les beaux jours.</p>\n\n<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic préalable du support et de son exposition. Protection du mobilier, traitement ciblé selon les matériaux, gestion de l'écoulement des eaux : chaque étape vise un résultat durable sans risque pour les plantations ou le voisinage.</p>",
      uniqueDeepDive: "<h3>Surface principale</h3>\n<p>Après déplacement ou bâchage du mobilier et des jardinières, nous procédons au balayage des gros dépôts : feuilles, terre, débris végétaux. Le produit de traitement est sélectionné selon <strong>le support identifié</strong> lors du diagnostic.</p>\n\n<p class=\"mt-4\">Un brossage manuel ou mécanique déloge les salissures incrustées. Sur les surfaces poreuses, un traitement anti-mousse préventif limite la réapparition des dépôts verts.</p>\n\n<h3>Éléments périphériques</h3>\n<p>Les garde-corps, murets et escaliers extérieurs reçoivent le même soin que la surface principale. Les margelles, si présentes, sont traitées avec une pression adaptée pour préserver les joints.</p>\n\n<p class=\"mt-4\">La haute pression contrôlée intervient uniquement sur les matériaux qui la supportent. Le bois composite ou les pierres fragiles bénéficient d'un nettoyage doux.</p>\n\n<h3>Finalisation et écoulement</h3>\n<p>L'eau de rinçage est dirigée vers les points d'évacuation existants. Les plantations proches sont protégées pendant l'intervention.</p>\n\n<p class=\"mt-4\">Après séchage, nous partageons des conseils d'entretien saisonnier pour maintenir le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Mousses tenaces</strong> sur dalles exposées à l'ombre des arbres environnants.",
        "Terrasses bois qui grisent rapidement sans traitement adapté.",
        "Joints de carrelage verdis par l'humidité persistante.",
        "Gestion de l'écoulement d'eau sur terrasses en étage ou RDC surélevé.",
        "Protection des plantations et jardinières pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Sur une terrasse de pavillon à Rungis en pierre, bois ou carrelage, comment évitez-vous d'abîmer le support ?",
          answer: "<p><strong>Chaque matériau reçoit un traitement distinct</strong>. La pierre naturelle supporte une pression modérée, le bois composite exige un nettoyage doux sans jet direct, le carrelage grès tolère davantage d'intensité. Nous adaptons systématiquement la technique au diagnostic initial pour préserver l'intégrité du revêtement.</p>",
        },
        {
          question:
            "À Rungis, comment éliminez-vous les mousses et lichens sur une terrasse après l'hiver sans fragiliser la surface ?",
          answer: "<p>Le brossage mécanique retire la couche végétale visible. Un <strong>produit anti-mousse adapté</strong> au support agit ensuite en profondeur. Sur les dalles sur plots ou le bois des pavillons du secteur, nous évitons les acides agressifs qui fragiliseraient les fibres ou les joints.</p>",
        },
        {
          question:
            "Pour les terrasses avec escaliers ou margelles à Rungis, quelle méthode utilisez-vous pour garder un nettoyage homogène ?",
          answer: "<p>Les escaliers extérieurs et margelles sont traités avec le même produit et la même pression que la surface principale. Nous ajustons l'angle du jet sur les arêtes et les joints pour obtenir un rendu uniforme sans marques de reprise visibles.</p>",
        },
        {
          question:
            "Dans les terrasses de pavillons à Rungis, pourquoi privilégier un nettoyage doux plutôt qu'un nettoyage haute pression ?",
          answer: "<p>Le bois et certaines pierres poreuses se dégradent sous une pression trop forte : fibres soulevées, joints creusés, surface rugueuse. Un nettoyage doux associé à un traitement chimique adapté retire les salissures sans endommager le revêtement, prolongeant ainsi sa durée de vie.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux, déménagement ou avant état des lieux, avec un résultat propre et prêt à vivre.",
      whyUsBullets: [
        "Connaissance des logements de Rungis Ville et des Antes, pavillons comme petits collectifs récents.",
        "Polyvalence sur parquet, carrelage, faïence et surfaces vitrées, avec produits adaptés à chaque support.",
        "Coordination possible avec agences ou artisans, accès par badge ou digicode, respect strict des délais convenus.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou un déménagement, les appartements et maisons du quartier <strong>Rungis Ville</strong> présentent souvent des traces tenaces : poussière de plâtre sur les plinthes, résidus de colle au sol, vitres voilées par les projections. Ces dépôts s'accumulent dans chaque pièce et compliquent la remise des clés ou l'installation dans un logement censé être prêt.</p>\n\n<p class=\"mt-4\">Un grand ménage structuré redonne un intérieur agréable dès l'entrée. Dans les pavillons comme dans les petits collectifs récents, les sols en parquet ou carrelage retrouvent leur aspect d'origine. Les pièces d'eau redeviennent fonctionnelles, les placards sont vidés de toute poussière résiduelle. Le logement peut alors accueillir ses occupants ou satisfaire aux exigences d'un état des lieux sortant.</p>\n\n<p class=\"mt-4\">L'intervention s'organise en fonction de vos contraintes : accès par digicode, coordination avec une agence immobilière ou un artisan encore présent. Chaque étape est planifiée pour respecter vos délais, qu'il s'agisse d'une rotation locative rapide ou d'une livraison de chantier.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>L'intervention débute par <strong>un tour complet du logement</strong> pour identifier les zones les plus chargées : résidus de chantier, traces sur les menuiseries, état des pièces d'eau. Les surfaces fragiles sont protégées si nécessaire.</p>\n\n<p class=\"mt-4\">Les éventuels gravats ou déchets laissés par les artisans sont évacués avant le début du nettoyage proprement dit.</p>\n\n<h3>Nettoyage pièce par pièce</h3>\n<p>Le dépoussiérage commence par les points hauts : plafonds, luminaires, dessus de meubles. Les murs et plinthes sont essuyés, puis les sols aspirés et lavés selon leur nature.</p>\n\n<p class=\"mt-4\">Cuisine et salle de bain font l'objet d'un traitement spécifique : plans de travail, faïences, sanitaires, robinetterie. Les vitres intérieures sont nettoyées pour laisser entrer la lumière.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les détails sont vérifiés : interrupteurs, poignées, intérieurs de placards, radiateurs. Un passage final assure l'homogénéité du résultat.</p>\n\n<p class=\"mt-4\">Le logement est aéré avant remise des clés ou visite de contrôle.</p>",
      specificChallenges: [
        "<strong>Poussière de chantier</strong> incrustée sur plinthes et menuiseries après travaux de rénovation.",
        "Traces de <strong>peinture ou colle</strong> sur parquet et carrelage nécessitant un retrait minutieux.",
        "Coordination avec <strong>agences immobilières</strong> pour respecter les délais d'état des lieux.",
        "Accès par <strong>digicode ou badge</strong> dans les résidences récentes du secteur.",
        "Pièces d'eau à remettre en état complet avant remise des clés.",
      ],
      faqAdditions: [
        {
          question:
            "À Rungis Ville, pouvez-vous intervenir rapidement pour un nettoyage avant état des lieux ou après déménagement ?",
          answer: "<p>Nous organisons des interventions sous 48 à 72 heures selon la disponibilité. Pour les états des lieux urgents dans le secteur de Rungis Ville, contactez-nous dès que la date est confirmée afin de caler un créneau compatible avec votre planning et celui de l'agence.</p>",
        },
        {
          question:
            "Dans un appartement ou une maison à Rungis, quelle différence faites-vous entre ménage standard et nettoyage de fin de chantier ?",
          answer: "<p>Un ménage standard porte sur l'entretien courant. Le nettoyage fin de chantier inclut <strong>le retrait des poussières fines</strong>, des résidus de colle ou peinture, et un passage approfondi sur les menuiseries et vitres. Les temps d'intervention et les méthodes diffèrent sensiblement.</p>",
        },
        {
          question:
            "Après travaux à Rungis, comment retirez-vous les traces de peinture ou de colle sans abîmer les sols fragiles ?",
          answer: "<p>Nous utilisons des spatules plastique et des solvants doux adaptés au support : parquet, carrelage ou pierre. Chaque produit est testé sur une zone discrète avant application. Les finitions délicates sont traitées manuellement pour éviter toute rayure.</p>",
        },
        {
          question:
            "Dans les résidences récentes de Rungis, comment organisez-vous l'accès au logement quand il faut un digicode ou un badge ?",
          answer: "<p>Vous nous transmettez les codes ou un badge temporaire avant l'intervention. Si un gardien ou une agence doit nous ouvrir, nous convenons ensemble de l'heure précise. Cette organisation évite tout retard et garantit le respect du créneau prévu.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;