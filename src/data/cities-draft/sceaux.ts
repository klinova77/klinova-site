import type { City } from "~/types/geo";

const city: City = {
  name: "Sceaux",
  slug: "sceaux",
  postalCodes: ["92330"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Sceaux pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Du centre historique au quartier Robinson, une équipe locale adapte ses méthodes au bâti résidentiel de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>Cité-jardin historique abritant le Lycée Lakanal et le Domaine départemental de Sceaux, cette commune des Hauts-de-Seine conjugue patrimoine architectural et exigences résidentielles élevées. Klinova s'y positionne comme partenaire terrain pour la propreté des immeubles et des espaces collectifs.</p>\
\
<p class=\"mt-4\">Halls d'entrée, parkings en sous-sol, balcons exposés à la végétation du parc : chaque configuration appelle une <strong>réponse technique adaptée</strong>. Notre organisation intègre les contraintes d'accès propres aux résidences de standing et aux copropriétés du centre-ville.</p>\
\
<ul>\
  <li><strong>Coordination locale :</strong> Prise de contact directe avec gardiens et syndics pour planifier les interventions selon les créneaux disponibles et les accès par badge.</li>\
  <li><strong>Adaptation au bâti ancien :</strong> Matériel dimensionné pour les escaliers étroits des immeubles du centre historique, sans dégradation des parties communes.</li>\
  <li><strong>Suivi documenté :</strong> Compte-rendu d'intervention transmis au gestionnaire, avec photos avant/après si demandé.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Immeubles anciens du centre</strong> : escaliers étroits limitant le passage des équipements volumineux.",
    "Proximité du Domaine de Sceaux : <strong>dépôts de pollen et feuilles</strong> sur balcons et terrasses selon la saison.",
    "Parkings souterrains des résidences récentes à Robinson : <strong>traces d'huile et poussière de béton</strong> fréquentes.",
    "Stationnement contraint autour de la <strong>rue Houdan</strong> : anticipation logistique indispensable.",
    "Flux piétons importants aux abords du <strong>Lycée Lakanal</strong> : salissures rapides des halls d'entrée.",
    "Corniches et balcons exposés en centre historique : <strong>accumulation de fientes</strong> sur les façades anciennes.",
  ],

  // Texte brut uniquement
  districts: ["Centre-ville", "Robinson", "Les Blagis", "Le Parc", "Les Musiciens"],
  nearbyCities: ["Antony", "Bourg-la-Reine", "Châtenay-Malabry", "Fontenay-aux-Roses", "Le Plessis-Robinson"],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Sceaux",
    "Domaine départemental de Sceaux",
    "Lycée Lakanal",
    "Rue Houdan",
    "Gare de Robinson",
    "Place du Marché",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous vos interventions dans les résidences avec gardien à Sceaux ?",
      answer: "<p>Nous prenons contact en amont avec le gardien ou le syndic pour <strong>convenir d'un créneau adapté</strong> aux contraintes de la copropriété. Les accès par badge ou digicode sont préparés avant le jour J. Cette coordination évite les allers-retours et garantit une intervention fluide, sans gêne pour les résidents.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur la commune ?",
      answer: "<p>Oui, nous pouvons mobiliser une équipe dans les meilleurs délais selon la nature de la demande et nos disponibilités. Pour les situations nécessitant une réponse rapide — dégât des eaux, salissure accidentelle — nous ajustons notre planning. Le délai exact dépend de la <strong>disponibilité du matériel</strong> et de l'accessibilité du site.</p>",
    },
    {
      question: "Le stationnement en centre-ville complique-t-il vos interventions ?",
      answer: "<p>La zone piétonne autour de la rue Houdan et le stationnement payant et strict imposent une logistique anticipée. Nous identifions les emplacements autorisés ou sollicitons une <strong>autorisation temporaire</strong> auprès de la mairie si nécessaire. Cette préparation évite les retards et les surcoûts liés à l'immobilisation du véhicule.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer: "<p>Chaque demande fait l'objet d'un <strong>chiffrage préalable</strong> basé sur la surface, le type de support et les contraintes d'accès. Pour les prestations récurrentes — entretien de parking ou nettoyage de parties communes — nous établissons un contrat avec fréquence et tarif fixés. Le devis reste gratuit et sans engagement.</p>",
    },
  ],

  testimonial: {
    text: "Cité-jardin historique abritant le Lycée Lakanal et le Domaine départemental de Sceaux",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template injecte uniquement les services présents dans l’entrée.
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec séchage contrôlé permettant une remise en service rapide adaptée aux contraintes d'accès du centre-ville.",
      whyUsBullets: [
        "Connaissance des configurations du centre-ville de Sceaux, immeubles anciens et accès contraints près du Trianon.",
        "Matériel d'injection-extraction professionnel adapté aux fibres délicates, laine ou dalles textiles de bureaux.",
        "Interventions planifiées en horaires décalés pour limiter la gêne des résidents et des activités professionnelles.",
      ],
      uniqueIntro: "<p>Dans le centre-ville de Sceaux, autour du Cinéma Le Trianon, les moquettes des halls d'entrée et des cabinets libéraux accumulent rapidement poussières et traces de passage. Les flux piétons quotidiens ramènent particules fines et résidus depuis les trottoirs, tandis que les fibres textiles retiennent <strong>café renversé, tanins et salissures grasses</strong> difficiles à éliminer par simple aspiration.</p>\
\
<p class=\"mt-4\">Un entretien adapté redonne aux revêtements leur aspect d'origine et supprime les odeurs qui s'installent progressivement. Dans les immeubles anciens et petits collectifs du secteur, où les escaliers étroits compliquent l'accès, un ravivage régulier préserve la qualité visuelle des parties communes et des espaces professionnels. Les résidents comme les visiteurs perçoivent immédiatement la différence.</p>\
\
<p class=\"mt-4\">L'intervention débute par un diagnostic du type de moquette et de l'état des taches. Le protocole intègre les contraintes liées aux dépôts de boue et pollen ramenés depuis le Domaine de Sceaux, particulièrement marqués après les périodes pluvieuses. Chaque étape est planifiée pour limiter la gêne et garantir un séchage maîtrisé.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\
<p>Les halls d'entrée et couloirs concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant application du traitement. Les protections sont posées sur plinthes et bas de murs pour préserver les finitions des immeubles anciens.</p>\
\
<h3>Surfaces à taches localisées</h3>\
<p>Les zones de passage fréquent reçoivent plusieurs passes d'injection-extraction. Le détachage ciblé traite les marques de café, tanins ou graisses selon leur nature. La pression et le débit sont ajustés en fonction de l'épaisseur et du type de fibre, bouclée ou velours.</p>\
\
<h3>Espaces secondaires et finitions</h3>\
<p>Les angles, seuils de portes et zones sous mobilier sont traités avec des embouts adaptés aux recoins. L'extraction finale retire le <strong>maximum d'humidité résiduelle</strong>. Le temps de séchage estimé vous est communiqué, avec les consignes de non-piétinement pour garantir un résultat durable.</p>",
      specificChallenges: [
        "<strong>Escaliers étroits dans les immeubles anciens</strong> du centre-ville, transport de matériel adapté.",
        "Moquettes laine des résidences de standing nécessitant un traitement sans surdosage.",
        "<strong>Dépôts de boue et pollen</strong> ramenés depuis le Domaine après les périodes pluvieuses.",
        "Cabinets libéraux exigeant une intervention discrète et un séchage rapide.",
        "Stationnement contraint en zone rouge, coordination préalable indispensable.",
      ],
      faqAdditions: [
        {
          question: "Avec les cages d'escalier étroites du centre-ville près du Trianon, comment transportez-vous le matériel de nettoyage ?",
          answer: "<p>Nous utilisons des équipements compacts et modulables, conçus pour les accès difficiles. Les flexibles d'injection-extraction permettent d'atteindre les étages sans encombrer les paliers. Le repérage préalable garantit une installation rapide et une intervention fluide malgré les contraintes de passage.</p>",
        },
        {
          question: "Comment éliminez-vous les odeurs persistantes sur une moquette humide ramenant boue et pollen depuis le Domaine ?",
          answer: "<p>L'extraction en profondeur retire les résidus organiques piégés dans les fibres, source principale des odeurs. Un traitement désodorisant peut compléter l'intervention si nécessaire. Le séchage contrôlé évite la stagnation d'humidité qui favorise le développement de mauvaises odeurs.</p>",
        },
        {
          question: "Comment protégez-vous les plinthes et les angles des immeubles anciens lors d'un shampouinage en centre-ville ?",
          answer: "<p><strong>Des protections plastifiées</strong> sont posées avant le traitement sur les plinthes, bas de murs et angles fragiles. Les embouts de travail sont sélectionnés pour éviter tout contact abrasif. Cette précaution préserve les finitions d'origine, fréquentes dans les immeubles du centre de Sceaux.</p>",
        },
        {
          question: "Quelle méthode conseillez-vous pour une moquette de salle culturelle au Trianon : extraction ou shampouinage ?",
          answer: "<p><strong>L'injection-extraction</strong> reste la méthode privilégiée pour les surfaces à fort passage. Elle retire les salissures en profondeur tout en limitant le temps de séchage. Pour les fibres délicates ou les zones à séchage contraint, l'encapsulation peut constituer une alternative adaptée selon le diagnostic initial.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens à Sceaux, avec autolaveuse professionnelle, dégraissage ciblé et gestion stricte des eaux usées pour un sol assaini durablement.",
      whyUsBullets: [
        "Connaissance des copropriétés du secteur des Blagis et de leurs contraintes d'accès souterrain.",
        "Autolaveuse professionnelle et aspiration des eaux usées pour un lavage conforme aux normes.",
        "Coordination avec le syndic, balisage sécurisé et rotation véhicules planifiée pour limiter la gêne.",
      ],
      uniqueIntro: "<p>Les traces d'huile moteur, les coulures noirâtres et les dépôts de poussière s'accumulent sur les sols des parkings du <strong>quartier des Blagis</strong>. Ces marques apparaissent rapidement dans les secteurs densifiés où la rotation des véhicules reste soutenue. Les rampes d'accès et les angles de manœuvre concentrent l'essentiel des salissures, rendant le sol glissant par endroits.</p>\n\n<p class=\"mt-4\">Un parking encrassé dégrade l'image de la copropriété et génère des remarques récurrentes en assemblée générale. Les <strong>parkings souterrains en béton lissé ou résine</strong> des résidences récentes nécessitent un entretien adapté pour conserver leur aspect et éviter que les taches ne s'incrustent définitivement dans le revêtement.</p>\n\n<p class=\"mt-4\">Klinova coordonne chaque intervention avec le syndic ou le gestionnaire : balisage des zones, planification de la rotation des véhicules, et compte-rendu détaillé. Le <strong>trafic quotidien des résidents</strong> impose une organisation rigoureuse pour limiter la gêne tout en garantissant un lavage efficace sur l'ensemble des niveaux.</p>",
      uniqueDeepDive: "<h3>Sol dégraissé et circulation sécurisée</h3>\n<p>L'objectif est d'obtenir un revêtement propre, débarrassé des films gras, avec une adhérence restaurée sur les rampes et zones de passage. Le résultat permet aux résidents de circuler sans risque de glissade et redonne au parking un aspect entretenu.</p>\n\n<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions le type de revêtement et l'état des évacuations. Un balayage préalable élimine les débris. Le balisage sécurise les accès et la rotation des véhicules est planifiée avec le gestionnaire pour libérer les zones par secteur.</p>\n\n<h3>Lavage mécanisé et gestion des eaux</h3>\n<p>L'autolaveuse traite les surfaces planes tandis que les zones critiques (rampes, angles, pieds de murs, rigoles) reçoivent un passage haute pression avec dégraissant adapté. Les eaux de lavage sont aspirées ou dirigées vers les évacuations conformes, sans rejet sauvage. Un dépoussiérage aérien des blocs lumineux peut compléter l'intervention si demandé.</p>",
      specificChallenges: [
        "Parkings souterrains récents aux Blagis avec sols en résine sensibles aux produits agressifs.",
        "Taches d'huile incrustées sur béton nécessitant un dégraissage ciblé sans détériorer le revêtement.",
        "Gestion des eaux de lavage obligatoire pour éviter tout rejet vers la voirie ou les réseaux non conformes.",
        "Rotation des véhicules à organiser avec le syndic pour libérer les zones par secteur.",
        "Rampes d'accès inclinées où l'adhérence doit être restaurée après chaque intervention.",
      ],
      faqAdditions: [
        {
          question: "Comment enlevez-vous les taches d'huile incrustées dans les parkings copropriété des Blagis sans abîmer la résine ?",
          answer: "<p>Nous appliquons un dégraissant adapté au revêtement, laissé en contact quelques minutes avant passage de l'autolaveuse. Sur résine, nous évitons les produits acides et privilégions des solutions neutres qui dissolvent les corps gras sans attaquer la surface. Les résidus sont aspirés immédiatement.</p>",
        },
        {
          question: "Que faites-vous de l'eau de lavage lors d'un décrassage en profondeur dans un parking souterrain à Sceaux ?",
          answer: "<p>Les eaux chargées en graisse et poussière sont aspirées par l'autolaveuse ou récupérées vers les regards d'évacuation conformes. Nous vérifions au préalable l'état des rigoles et évacuations pour éviter tout engorgement. Aucun rejet n'est effectué vers la voirie ou les réseaux pluviaux.</p>",
        },
        {
          question: "Faut-il une méthode différente pour un parking souterrain récent à Sceaux comparé à un parking aérien ?",
          answer: "<p>Oui. Un parking souterrain en béton lissé ou résine nécessite une aspiration systématique des eaux et un dégraissant spécifique. Un parking aérien en bitume supporte davantage la haute pression mais demande une attention particulière aux écoulements vers les espaces verts ou la voirie.</p>",
        },
        {
          question: "Quels horaires recommandez-vous pour intervenir dans un parking copropriété aux Blagis sans gêner les résidents ?",
          answer: "<p>Nous privilégions les créneaux en journée (9h-17h) lorsque la majorité des véhicules sont absents, ou les interventions de nuit pour les parkings à forte occupation. Le planning est validé avec le syndic et communiqué aux résidents pour organiser le déplacement temporaire des véhicules.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au support et gestion maîtrisée des eaux pour un espace extérieur propre et agréable à utiliser.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons ombragés par les arbres ou exposés aux axes routiers de Sceaux.",
        "Pression ajustée selon le support : pierre ancienne, carrelage ou béton, sans risque pour les joints.",
        "Dispositif anti-coulures systématique pour protéger vos voisins et la façade de l'immeuble.",
      ],
      uniqueIntro: "<p>Sur l'avenue de la République et les rues adjacentes du centre-ville, les balcons accumulent rapidement un voile grisâtre. Les particules fines issues des axes routiers se déposent sur les garde-corps, le sol et les murs mitoyens. En quelques semaines, cette couche terne s'incruste dans les joints et les surfaces poreuses, rendant le simple coup de balai inefficace.</p>\n\n<p class=\"mt-4\">Retrouver un balcon utilisable change le quotidien. Vous pouvez à nouveau y installer une table, y faire sécher du linge ou simplement profiter de l'extérieur sans cette sensation de saleté permanente. Sur les immeubles anciens avec balcons en pierre de taille ou béton peint, le contraste entre zones nettoyées et zones négligées devient vite visible depuis la rue.</p>\n\n<p class=\"mt-4\">La proximité des grands arbres du Domaine et des alignements le long des avenues favorise aussi l'apparition de mousses et dépôts verts. Une intervention structurée permet de traiter chaque surface selon sa nature, en protégeant vos voisins du dessous des coulures.</p>",
      uniqueDeepDive: "<h3>Dépôts accumulés et protection préalable</h3>\n<p>Les feuilles mortes, la terre et les débris grossiers sont d'abord retirés manuellement. Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries des portes-fenêtres et les fenêtres adjacentes reçoivent une protection pour éviter les projections.</p>\n\n<h3>Salissures incrustées et traitement adapté</h3>\n<p>Un produit spécifique est appliqué selon le support : pierre, carrelage ou béton peint. Le brossage manuel ou mécanique décolle les dépôts verts et les traces noires. Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles. Les garde-corps et vitrages sont traités dans la foulée.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Des protections sont installées pour empêcher les coulures chez les voisins du dessous. L'eau de rinçage est dirigée vers les évacuations existantes ou récupérée. Après séchage, vous recevez des conseils d'entretien pour espacer les prochaines interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "Dépôts noirs liés à la circulation sur les axes D920 et D60 en bordure de quartier.",
        "Mousses et lichens favorisés par l'ombre des grands arbres à proximité du Domaine.",
        "Balcons en pierre de taille nécessitant une pression douce pour éviter l'érosion.",
        "Interdiction de rejet d'eau sur la voie publique dans les rues commerçantes du centre.",
        "Joints anciens fragilisés sur les immeubles du centre historique.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous un balcon sur l'avenue de la République sans rejeter d'eau sur la voie publique ?",
          answer: "<p>L'eau de rinçage est canalisée vers les évacuations du balcon ou récupérée avec un système d'aspiration. Des bâches protègent le sol en contrebas. Cette méthode respecte les contraintes des rues commerçantes où le rejet direct est interdit par le règlement sanitaire local.</p>",
        },
        {
          question: "Quelle méthode utilisez-vous pour enlever les dépôts verts et la mousse sur les balcons exposés aux arbres du Domaine ?",
          answer: "<p>Un produit anti-mousse adapté au support est appliqué avant brossage. L'action mécanique décolle les végétaux incrustés sans abîmer la surface. Le rinçage à pression modérée élimine les résidus. Cette approche convient aux balcons ombragés où l'humidité favorise la repousse rapide.</p>",
        },
        {
          question: "Quelle différence de traitement appliquez-vous entre un balcon en pierre et un balcon carrelé à Sceaux ?",
          answer: "<p>La pierre ancienne reçoit un produit au pH neutre et un rinçage basse pression pour éviter l'érosion. Le carrelage supporte une pression plus élevée et des détergents plus actifs. Les joints sont inspectés avant intervention pour adapter la technique à leur état.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous le nettoyage d'un balcon très exposé à la pollution routière à Sceaux ?",
          answer: "<p>Pour les balcons donnant sur les axes passants comme la D920, un entretien tous les six à huit mois limite l'incrustation des particules. Les balcons plus abrités ou orientés côté cour peuvent espacer les interventions à une fois par an selon l'accumulation constatée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes, avec désinfection virucide et évacuation sécurisée des déchets pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque du centre-ville de Sceaux, notamment les façades anciennes rue Houdan.",
        "Protocole rigoureux avec EPI complets, confinement systématique et désinfection virucide certifiée.",
        "Gestion discrète de l'évacuation des déchets en zone piétonne, sans nuisance pour le voisinage.",
      ],
      uniqueIntro: "<p>Comment profiter de son balcon quand les fientes s'accumulent sur le sol et le garde-corps ? Dans le centre historique de Sceaux, notamment <strong>rue Houdan</strong>, les corniches et rebords des immeubles anciens attirent les pigeons. Les dépôts s'épaississent, l'odeur s'installe, et l'espace extérieur devient inutilisable. Le linge ne peut plus sécher dehors sans risque de souillure.</p>\n\n<p class=\"mt-4\">Un balcon assaini change le quotidien. Plus de gêne vis-à-vis des voisins, plus d'hésitation à ouvrir les fenêtres. Sur les <strong>immeubles anciens avec corniches et garde-corps ouvragés</strong>, les fientes attaquent aussi les matériaux : la pierre se corrode, la peinture s'écaille. Intervenir permet de préserver le support autant que le confort d'usage.</p>\n\n<p class=\"mt-4\">Notre intervention suit un protocole structuré adapté aux contraintes locales. En <strong>zone piétonne très fréquentée</strong>, nous organisons l'accès et l'évacuation des déchets contaminés sans perturber le voisinage. Chaque étape est planifiée : diagnostic, confinement, traitement, désinfection.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace propre, sans odeur ni risque sanitaire. Les fientes sont intégralement retirées, les supports nettoyés, et une désinfection virucide élimine les agents pathogènes. Le balcon redevient utilisable en toute sécurité.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, nous humidifions les dépôts pour neutraliser les poussières contaminées. La zone est bâchée pour protéger l'intérieur du logement et éviter toute dispersion vers les voisins. Les fientes sont collectées et conditionnées en sacs étanches.</p>\n\n<h3>Traitement des supports et finition</h3>\n<p>Sol, garde-corps, vitrages et murs mitoyens sont nettoyés méthodiquement. Un produit désinfectant homologué est appliqué avec un temps de contact respecté. Après rinçage et aération, nous pouvons proposer la pose de pics ou filets anti-pigeons pour limiter le retour des volatiles.</p>",
      specificChallenges: [
        "Corniches ornementées des immeubles anciens favorisant l'installation des pigeons.",
        "Accumulation de fientes sur garde-corps ouvragés difficiles à nettoyer sans méthode adaptée.",
        "Risque de corrosion sur pierre de taille et peintures anciennes si intervention tardive.",
        "Contrainte d'accès et d'évacuation en zone piétonne nécessitant organisation spécifique.",
        "Odeurs persistantes en cas de dépôts anciens non traités avec désinfectant adapté.",
      ],
      faqAdditions: [
        {
          question: "Les fientes sèches sur les corniches des immeubles anciens rue Houdan présentent-elles un risque sanitaire ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui restent actifs même après séchage. Sur les corniches du centre historique de Sceaux, les dépôts anciens libèrent des poussières contaminées dès qu'ils sont remués. Une intervention avec humidification préalable et équipements de protection est indispensable pour éviter toute inhalation.</p>",
        },
        {
          question: "Quel protocole et quels EPI utilisez-vous pour décontaminer des fientes sur façades anciennes à Sceaux ?",
          answer: "<p>Nos intervenants portent masque FFP2, gants, lunettes et combinaison jetable. Sur les immeubles anciens avec corniches ouvragées, nous humidifions d'abord les dépôts pour neutraliser les particules volatiles. La zone est confinée par bâchage avant collecte et conditionnement en sacs étanches.</p>",
        },
        {
          question: "Quelle désinfection appliquez-vous après avoir retiré les fientes sur un balcon du centre-ville ?",
          answer: "<p>Après le retrait des fientes et le nettoyage des supports, nous appliquons un produit virucide et bactéricide homologué. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes. Un rinçage final et une aération permettent de rendre le balcon utilisable en toute sécurité.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des déchets contaminés lors d'une intervention rue Houdan en zone piétonne ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès la collecte. En zone piétonne comme rue Houdan, nous organisons l'intervention pour limiter l'encombrement et évacuons les déchets sans transit prolongé sur la voie publique. Aucun rejet n'est effectué sur place.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à Sceaux, avec extraction en profondeur des salissures et séchage contrôlé pour une remise en usage rapide.",
      whyUsBullets: [
        "Connaissance des résidences de standing du quartier du Parc et de leurs textiles d'ameublement exigeants.",
        "Détachage enzymatique ciblé et extraction textile adaptée aux fibres délicates comme le velours ou la laine.",
        "Organisation des créneaux selon les contraintes de stationnement et remise en service rapide de vos assises.",
      ],
      uniqueIntro: "<p>Les auréoles sur l'assise du canapé, les zones ternies au centre du tapis, les traces persistantes sur le matelas : ces marques s'accumulent au fil des mois dans les appartements de la <strong>Résidence Le Parc de Sceaux</strong> et des secteurs pavillonnaires environnants. Entre les passages quotidiens, les enfants, parfois un animal de compagnie, les fibres absorbent ce que l'aspirateur ne capte pas.</p>\n\n<p class=\"mt-4\">Un entretien en profondeur redonne de la fraîcheur aux textiles et améliore le confort d'usage. Dans les intérieurs équipés de <strong>velours, tissus fins ou parquets anciens</strong>, le rendu visuel compte autant que l'hygiène. Un canapé détaché retrouve son aspect d'origine, un tapis ravivé valorise la pièce, un matelas assaini contribue à un sommeil plus sain.</p>\n\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des <strong>contraintes de stationnement</strong> propres au quartier et des accès aux résidences. Diagnostic textile préalable, protection des sols adjacents, extraction contrôlée : chaque étape vise un résultat durable sans risque pour vos revêtements.</p>",
      uniqueDeepDive: "<h3>Textile propre et fibres préservées</h3>\n<p>L'objectif est d'obtenir un tissu débarrassé de ses salissures incrustées tout en respectant sa nature. Velours, coton, laine ou synthétique : chaque matière réagit différemment à l'humidité et aux produits. Le résultat attendu est une surface nettoyée, sans auréole résiduelle, avec des couleurs ravivées.</p>\n\n<h3>Diagnostic et pré-traitement adapté</h3>\n<p>Avant toute injection d'eau, un examen du textile identifie les taches (café, vin, urine, graisse) et le type de fibre. Un test discret sur zone cachée valide la compatibilité du traitement. Les taches localisées reçoivent un détachant enzymatique ciblé qui décompose les résidus organiques.</p>\n\n<h3>Injection-extraction et séchage maîtrisé</h3>\n<p>Le nettoyage principal combine injection d'une solution adaptée et aspiration immédiate. La pression et la température sont modulées selon la fragilité du tissu. L'extraction maximale limite le temps de séchage. Selon l'épaisseur du textile et l'aération disponible, comptez quelques heures avant réutilisation. Des consignes précises vous sont transmises pour optimiser le séchage.</p>",
      specificChallenges: [
        "Textiles délicats fréquents dans les intérieurs de standing : velours, soie, tissus fins nécessitant un traitement adapté.",
        "Taches anciennes incrustées (café, vin, encre) sur canapés utilisés quotidiennement par toute la famille.",
        "Odeurs persistantes liées aux animaux de compagnie dans les appartements résidentiels du secteur.",
        "Accès aux résidences avec digicode et stationnement limité en zone pavillonnaire.",
        "Séchage à anticiper selon l'épaisseur des tapis et l'aération disponible dans l'appartement.",
      ],
      faqAdditions: [
        {
          question: "Le nettoyage de tapis permet-il de réduire les acariens dans un appartement de la Résidence Le Parc ?",
          answer: "<p>L'injection-extraction élimine une grande partie des acariens et de leurs déjections logés dans les fibres. Combinée à un séchage complet, cette méthode améliore sensiblement la qualité de l'air intérieur. Pour les personnes sensibles, un entretien régulier limite la recolonisation.</p>",
        },
        {
          question: "Comment procédez-vous sur un canapé en velours sans risquer de l'abîmer ?",
          answer: "<p>Un test préalable sur une zone discrète vérifie la tenue des couleurs et la réaction du tissu à l'humidité. La pression d'injection est réduite, la température contrôlée. L'extraction immédiate évite que le velours ne se déforme. Le sens du poil est respecté lors du passage.</p>",
        },
        {
          question: "Pouvez-vous traiter une tache d'urine ancienne et son odeur sur un tapis résidentiel ?",
          answer: "<p>Les taches organiques comme l'urine nécessitent un détachant enzymatique qui décompose les résidus en profondeur. L'odeur provient souvent de cristaux incrustés dans les fibres : l'extraction les déloge. Selon l'ancienneté, un second passage peut être recommandé pour un résultat complet.</p>",
        },
        {
          question: "Pour un canapé très taché, vaut-il mieux un détachage ciblé ou un nettoyage complet ?",
          answer: "<p>Si les taches sont localisées sur quelques zones, un détachage ciblé suffit et limite le temps de séchage. Lorsque l'ensemble de l'assise présente un voile grisé ou des salissures diffuses, le nettoyage complet par injection-extraction donne un résultat homogène sur toute la surface.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement des mousses et lichens, adaptation au support et séchage contrôlé pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des contraintes liées à l'environnement boisé du Domaine de Sceaux et de ses retombées végétales saisonnières.",
        "Maîtrise des techniques adaptées à chaque support : pression ajustée sur pierre, traitement doux sur bois, produits ciblés anti-mousse.",
        "Organisation soignée avec protection du mobilier et des plantes, gestion de l'écoulement d'eau sans nuisance pour le voisinage.",
      ],
      uniqueIntro: "<p>Après quelques saisons, les terrasses situées à proximité du <strong>Domaine départemental de Sceaux</strong> accumulent dépôts végétaux et mousses tenaces. L'ombre portée des grands arbres favorise l'humidité stagnante, tandis que pollens au printemps et feuilles en automne accélèrent la formation d'un voile verdâtre. Le revêtement devient glissant, moins agréable à utiliser, et perd progressivement son aspect d'origine.</p>\n\n<p class=\"mt-4\">Sur les <strong>supports en pierre naturelle, bois ou dalles sur plots</strong> fréquents dans les maisons du quartier du Parc ou les rez-de-chaussée du secteur Robinson, ce verdissement s'incruste dans les pores du matériau. Un simple jet d'eau ne suffit plus : les fibres du bois se détériorent, la pierre se ternit durablement. Retrouver une terrasse nette, c'est aussi récupérer un espace de vie extérieur utilisable sans appréhension.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet d'adapter le traitement à chaque matériau. Diagnostic du support, choix du produit, pression contrôlée : chaque étape vise un résultat durable sans fragiliser la surface. Le <strong>risque de retombées végétales liées à la proximité du parc</strong> est pris en compte pour proposer un traitement préventif adapté.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et plantes sont déplacés ou bâchés. Les menuiseries (baies vitrées, portes) reçoivent une protection pour éviter projections et coulures.</p>\n\n<p class=\"mt-4\">Un balayage préalable retire feuilles, terre et débris accumulés. Cette étape permet d'évaluer l'état réel du support avant traitement.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au matériau (pierre, bois, composite) est appliqué pour décoller mousses et lichens incrustés. Le brossage manuel ou mécanique complète l'action chimique sur les zones les plus marquées.</p>\n\n<p class=\"mt-4\">La haute pression intervient ensuite à intensité contrôlée selon la porosité du support. Les joints et matériaux fragiles bénéficient d'une attention particulière pour éviter toute dégradation.</p>\n\n<h3>Finition et prévention</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants, en protégeant les plantations environnantes. Un traitement anti-mousse préventif peut être appliqué pour ralentir la réapparition des dépôts verts.</p>\n\n<p class=\"mt-4\">Le séchage naturel précède la remise en place du mobilier. Des conseils d'entretien saisonnier sont transmis selon l'exposition de votre terrasse.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par l'ombre des arbres du Domaine départemental.",
        "Supports variés (pierre, bois, dalles sur plots) nécessitant des traitements différenciés.",
        "Retombées saisonnières de pollen et feuilles accélérant le verdissement des surfaces.",
        "Gestion de l'écoulement d'eau sur terrasses en hauteur sans gêner le voisinage.",
        "Accès parfois contraint dans les résidences du quartier du Parc (digicodes, gardiens).",
      ],
      faqAdditions: [
        {
          question: "Comment retirez-vous les mousses et lichens d'une terrasse proche du Domaine de Sceaux sans abîmer la pierre ?",
          answer: "<p>Nous appliquons un produit désincrustant adapté à la pierre naturelle, suivi d'un brossage mécanique ciblé. La haute pression intervient à intensité modérée pour préserver la surface poreuse. L'ombre du parc favorisant la réapparition, un traitement préventif complète l'intervention pour prolonger le résultat.</p>",
        },
        {
          question: "Quel procédé recommandez-vous pour nettoyer une terrasse en bois sans détériorer le support ?",
          answer: "<p>Le bois exotique ou composite présent sur les terrasses scéennes reçoit un traitement basse pression associé à un produit non agressif. Le brossage manuel complète l'action sur les zones encrassées. Cette approche préserve les fibres et évite le grisaillement prématuré tout en éliminant les dépôts verts.</p>",
        },
        {
          question: "Quel traitement anti-mousse appliquer pour une terrasse ombragée afin d'éviter la réapparition rapide ?",
          answer: "<p>Après nettoyage complet, nous proposons un traitement filmogène ou pénétrant selon le matériau. Sur les terrasses proches du Domaine, exposées à l'humidité et aux retombées végétales, ce produit ralentit significativement la reformation des mousses pendant plusieurs mois.</p>",
        },
        {
          question: "Quelle est la meilleure saison pour faire nettoyer une terrasse proche du Domaine de Sceaux ?",
          answer: "<p>L'intervention idéale se situe en fin de printemps, après les pollens, ou en début d'automne avant l'accumulation des feuilles. Ces périodes permettent un séchage optimal et limitent les retombées immédiates. Nous adaptons le calendrier selon vos contraintes d'utilisation de l'espace extérieur.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux ou avant état des lieux, avec un nettoyage méthodique de chaque pièce et une coordination adaptée à vos contraintes de délai.",
      whyUsBullets: [
        "Connaissance des contraintes locales : stationnement difficile en centre-ville, accès par digicode, coordination avec gardiens.",
        "Polyvalence sur tous types de surfaces : parquets anciens, carrelages modernes, pièces d'eau complètes.",
        "Planning ajusté à vos échéances : intervention calée sur la date d'état des lieux ou de remise de clés.",
      ],
      uniqueIntro: "<p>Comment remettre un appartement en parfait état quand les délais se resserrent entre la fin d'un chantier et la remise des clés ? Autour de la <strong>Place du Marché</strong> et dans le centre-ville de Sceaux, les rotations locatives et les rénovations imposent des interventions rapides, souvent coordonnées avec plusieurs interlocuteurs. Les poussières de chantier, les traces de peinture ou les résidus laissés par les artisans nécessitent un traitement complet avant toute visite ou signature.</p>\n\n<p class=\"mt-4\">Dans les <strong>grands appartements anciens</strong> dotés de parquets point de Hongrie ou de carrelages récents, chaque surface demande une attention particulière. Un nettoyage structuré permet de présenter un logement impeccable, sans mauvaise surprise lors de l'état des lieux. Les propriétaires comme les agences y gagnent en sérénité et en image.</p>\n\n<p class=\"mt-4\">Avec une forte présence d'<strong>étudiants liés à la Faculté Jean Monnet</strong> et des agences immobilières actives localement, les demandes d'états des lieux et de remises en état se concentrent souvent sur des périodes courtes. Une organisation rigoureuse garantit le respect des échéances convenues.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\n<p>Avant toute intervention, nous évaluons l'état du logement : nature des travaux réalisés, type de revêtements, présence de résidus (enduit, colle, poussière fine). Les surfaces fragiles sont protégées si nécessaire.</p>\n\n<p class=\"mt-4\">Les éventuels gravats ou déchets de chantier sont évacués pour libérer l'espace de travail.</p>\n\n<h3>Nettoyage complet des pièces</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes avant de traiter les sols. Chaque pièce d'eau reçoit un traitement adapté : sanitaires, faïences, joints, plans de travail et électroménager en cuisine.</p>\n\n<p class=\"mt-4\">Les vitres intérieures sont nettoyées pour un rendu lumineux. Les interrupteurs, poignées et radiateurs sont essuyés avec soin.</p>\n\n<h3>Contrôle et remise du logement</h3>\n<p>Une vérification finale permet de s'assurer qu'aucune zone n'a été oubliée. Les placards sont inspectés, les dernières traces éliminées.</p>\n\n<p class=\"mt-4\">Le logement est aéré avant la remise des clés ou la visite programmée, prêt pour l'état des lieux.</p>",
      specificChallenges: [
        "Stationnement restreint autour de la Place du Marché les jours de marché (mercredi et samedi matin).",
        "Appartements anciens avec escaliers étroits sans ascenseur en centre-ville.",
        "Coordination fréquente avec agences immobilières pour respecter les délais d'état des lieux.",
        "Parquets point de Hongrie nécessitant un traitement adapté pour éviter toute dégradation.",
        "Pics de demande en fin de bail étudiant (juin-juillet) près de la Faculté Jean Monnet.",
      ],
      faqAdditions: [
        {
          question: "Quelles étapes techniques appliquez-vous pour un nettoyage fin de chantier dans un appartement ancien près de la Place du Marché ?",
          answer: "<p>Nous commençons par l'évacuation des résidus de chantier, puis le dépoussiérage complet des surfaces hautes vers le sol. Les traces de peinture ou d'enduit sont traitées avec des produits adaptés aux parquets anciens et carrelages. Un contrôle final vérifie chaque pièce avant remise.</p>",
        },
        {
          question: "Comment traitez-vous un appartement avec parquet point de Hongrie après un dégât des eaux ?",
          answer: "<p>Après séchage complet du support, nous procédons à un nettoyage en profondeur sans excès d'eau pour préserver le bois. Les zones touchées par l'humidité sont inspectées pour détecter d'éventuelles moisissures. Le traitement est adapté à l'état du parquet et à son niveau de fragilité.</p>",
        },
        {
          question: "Quel délai d'intervention proposez-vous en urgence pour un état des lieux à proximité de la Faculté Jean Monnet ?",
          answer: "<p>Nous pouvons intervenir sous 24 à 48 heures selon la surface et la disponibilité. Les périodes de forte rotation locative (juin-juillet) nécessitent une réservation anticipée. Nous confirmons systématiquement le créneau pour garantir le respect de votre échéance.</p>",
        },
        {
          question: "Comment coordonnez-vous une intervention avec une agence immobilière locale pour une remise en état rapide ?",
          answer: "<p>Nous échangeons directement avec l'agence pour caler l'intervention avant la visite ou l'état des lieux. Les accès (clés, digicode, gardien) sont organisés en amont. Un compte-rendu peut être transmis à l'agence une fois le nettoyage terminé.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;