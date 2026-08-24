import type { City } from "~/types/geo";

const city: City = {
  name: "Antony",
  slug: "antony",
  postalCodes: ["92160"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Antony pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée aux résidences du secteur Croix de Berny comme aux bureaux d'Antonypole, avec une équipe réactive sur l'ensemble de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format imposé : 2 paragraphes puis <ul>
  hubIntro: "<p>Carrefour multimodal RER B et C, pôle d'activités Antonypole : Antony concentre des flux importants qui sollicitent fortement les espaces communs. Klinova accompagne syndics, gestionnaires et particuliers dans la gestion quotidienne de la propreté, avec une présence terrain régulière.</p>\
\
<p class=\"mt-4\">Notre approche repose sur une <strong>coordination étroite avec les donneurs d'ordre</strong>. Planification des passages, adaptation aux contraintes d'accès, suivi des interventions : chaque prestation s'inscrit dans une logique de maintenance durable, pas de coup par coup.</p>\
\
<ul>\
  <li><strong>Réactivité locale :</strong> Équipes basées en Île-de-France, capables d'intervenir sur Antony et les communes voisines selon les urgences signalées.</li>\
  <li><strong>Coordination simplifiée :</strong> Un interlocuteur dédié pour centraliser les demandes, qu'il s'agisse d'un immeuble résidentiel ou d'un site tertiaire.</li>\
  <li><strong>Méthodes adaptées au bâti :</strong> Matériel dimensionné selon la configuration des lieux, des halls étroits du centre-ville aux parkings souterrains des grandes résidences.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution A86 et RD920</strong> : dépôts noirs sur balcons et façades des immeubles exposés.",
    "<strong>Parkings souterrains fréquents</strong> dans les résidences de la Croix de Berny et du secteur Pajeaud.",
    "<strong>Stationnement contraint</strong> en centre-ville : zone bleue et rues étroites autour de la rue Mounié.",
    "Halls d'immeubles anciens avec escaliers étroits, accès limité pour le matériel volumineux.",
    "Flux piétons importants autour des quatre gares RER B, sollicitant les entrées d'immeubles.",
    "Proximité du Parc de Sceaux : mousses et débris végétaux sur terrasses et balcons sud.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "La Croix de Berny",
    "Fontaine Michalon",
    "Les Baconnets",
    "Les Rabats",
    "Le Noyer Doré",
    "Quartier Pajeaud",
    "Antonypole",
  ],
  nearbyCities: [
        "sceaux",
        "massy",
        "rungis",
        "chevilly-larue",
        "fontenay-aux-roses",
        "cachan",
        "bagneux",
        "chatillon",
        "clamart",
        "arcueil"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Antony",
    "Gare d'Antony (RER B / Orlyval)",
    "Gare de la Croix de Berny (RER B / T10)",
    "Antonypole (zone d'activités)",
    "Parc de Sceaux (entrée sud)",
    "Place Firmin Gémier (Marché d'Antony)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les résidences avec digicode ou badge d'accès ?",
      answer: "<p>Nous récupérons les <strong>codes ou badges</strong> en amont auprès du syndic ou du gardien. Pour les résidences d'Antony équipées de systèmes sécurisés, un créneau est validé à l'avance afin que nos équipes accèdent aux parties communes sans solliciter les occupants le jour J.</p>",
    },
    {
      question: "Intervenez-vous en dehors des horaires classiques pour limiter la gêne ?",
      answer: "<p>Oui, nous proposons des <strong>passages en début de matinée ou en soirée</strong> selon les contraintes du site. Pour les bureaux d'Antonypole ou les halls d'immeubles à fort passage, cette flexibilité permet de travailler sans perturber l'activité quotidienne.</p>",
    },
    {
      question: "Quel délai pour obtenir un devis après une demande ?",
      answer: "<p>Nous répondons rapidement à chaque demande. Si une visite technique est nécessaire pour évaluer l'état des surfaces ou les contraintes d'accès, elle est planifiée rapidement. Le devis détaille les prestations, fréquences et modalités d'intervention.</p>",
    },
    {
      question: "Proposez-vous un suivi régulier pour les copropriétés ou entreprises ?",
      answer: "<p>Nous mettons en place un <strong>reporting adapté</strong> à la demande : compte-rendu après chaque passage, bilan périodique, photos avant/après. Ce suivi permet aux gestionnaires de garder une visibilité sur l'état des espaces entretenus à Antony.</p>",
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
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction en profondeur des salissures incrustées dans vos moquettes, avec séchage maîtrisé pour une remise en service rapide de vos locaux professionnels ou espaces de vie.",
      whyUsBullets: [
        "Connaissance des typologies de moquettes présentes à Antonypole et dans les cabinets du secteur hospitalier.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours épais.",
        "Interventions planifiées en dehors des heures d'affluence pour limiter la gêne des occupants.",
      ],
      uniqueIntro: "<p>Dans le secteur d'<strong>Antonypole</strong>, les bureaux accueillent chaque jour un flux dense de collaborateurs et visiteurs. Les moquettes absorbent poussières fines, traces de semelles et résidus de boissons renversées. En quelques mois, les zones de passage perdent leur aspect d'origine et les fibres se ternissent sous l'accumulation de particules grasses. Ce constat s'observe aussi dans les cabinets médicaux proches de l'Hôpital Privé d'Antony, où l'hygiène des sols textiles conditionne l'image perçue par les patients.</p>\
\
<p class=\"mt-4\">Un entretien régulier redonne aux <strong>dalles textiles</strong> et aux velours leur tenue initiale. Les taches de café ou de tanin disparaissent, les couleurs retrouvent de la profondeur, et l'atmosphère générale du local gagne en confort. Pour les résidences du centre-ville équipées de moquettes épaisses dans les parties communes, le ravivage limite aussi les plaintes liées aux odeurs persistantes.</p>\
\
<p class=\"mt-4\">L'intervention s'appuie sur un diagnostic préalable du support et des salissures. Chaque étape est calibrée selon la nature des fibres, le niveau d'encrassement et les contraintes d'accès propres aux immeubles avec digicode ou gardien.</p>",
      uniqueDeepDive: "<h3>Résultat visé</h3>\
<p>L'objectif est de retrouver une moquette propre, sans auréoles ni odeurs résiduelles, avec un séchage suffisamment rapide pour limiter l'immobilisation des espaces. Les fibres retrouvent leur souplesse et les couleurs leur intensité d'origine.</p>\
\
<h3>Méthode d'extraction</h3>\
<p>Le traitement repose sur l'injection-extraction : une solution adaptée au type de textile pénètre les fibres, décolle les salissures, puis l'<strong>aspiration puissante retire l'eau chargée</strong>. Les zones de fort passage reçoivent plusieurs passes. Un détachage ciblé traite les marques tenaces avant l'extraction générale.</p>\
\
<p class=\"mt-4\">Les plinthes et bas de murs sont protégés pour éviter les projections.</p>\
\
<h3>Gestion du séchage</h3>\
<p>L'extraction maximale réduit le temps de séchage à quelques heures selon l'épaisseur du revêtement et la ventilation du local. Des consignes de non-piétinement sont transmises pour préserver le résultat. La fréquence d'entretien recommandée dépend de l'intensité du trafic quotidien.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux Antonypole soumises à un trafic quotidien intense.",
        "Moquettes velours des résidences centre-ville sensibles aux <strong>auréoles de détachage mal maîtrisé</strong>.",
        "Accès sécurisés par digicode et badge nécessitant coordination préalable.",
        "Temps de séchage à anticiper pour maintenir l'activité des cabinets médicaux.",
        "Stationnement contraint en centre-ville imposant une logistique adaptée.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous les moquettes des cabinets proches de l'Hôpital Privé d'Antony sans abîmer les fibres ?",
          answer: "<p>Le diagnostic identifie d'abord la nature du textile. La <strong>pression d'injection et la température</strong> de la solution sont ajustées pour préserver les fibres sensibles. Les passes d'extraction retirent l'humidité sans frotter excessivement, ce qui évite l'effilochage des velours ou le décollement des dalles collées.</p>",
        },
        {
          question: "Après intervention dans les bureaux d'Antonypole, combien de temps faut-il avant de remarcher sur la moquette ?",
          answer: "<p>Le séchage varie selon l'épaisseur du revêtement et la ventilation du local. En général, comptez entre trois et six heures pour une remise en service confortable. L'extraction poussée limite l'humidité résiduelle et accélère ce délai, surtout dans les open spaces bien aérés.</p>",
        },
        {
          question: "Pour les immeubles du centre-ville avec digicode, comment organisez-vous l'accès le jour de l'intervention ?",
          answer: "<p>Un contact préalable avec le syndic ou le gardien permet de récupérer les codes ou badges nécessaires. L'horaire d'intervention est fixé en fonction des disponibilités du bâtiment. Le matériel est acheminé en une seule rotation pour limiter les allers-retours dans les parties communes.</p>",
        },
        {
          question: "Quelle méthode recommandez-vous entre velours ancien en centre-ville et dalles textiles à Antonypole ?",
          answer: "<p>Le velours ancien supporte mieux l'<strong>injection-extraction à basse pression</strong> avec séchage prolongé. Les dalles textiles, plus résistantes, acceptent une extraction plus intensive et sèchent plus vite. Le choix de la méthode dépend aussi de l'état du support et de la nature des taches à traiter.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, balisage sécurisé et gestion stricte des eaux usées pour une remise en circulation rapide.",
      whyUsBullets: [
        "Coordination éprouvée avec les syndics des résidences Croix de Berny et secteur Pajeaud pour planifier les accès.",
        "Autolaveuse professionnelle et système de récupération des eaux conforme aux exigences des copropriétés.",
        "Balisage sécurisé, rotation véhicules par zones et compte-rendu transmis au gestionnaire après chaque passage.",
      ],
      uniqueIntro: "<p>Les traces d'huile et les dépôts de poussière noire sont visibles sur les sols des parkings souterrains autour du <strong>Centre Aquatique Pajeaud</strong>. Ces marques s'accumulent aux places de stationnement, le long des rampes et dans les angles morts où le passage des véhicules concentre les salissures. Les gestionnaires constatent régulièrement ces dégradations lors des visites de copropriété.</p>\n\n<p class=\"mt-4\">Un sol encrassé complique la circulation piétonne et donne une impression de négligence aux résidents. Dans les <strong>parkings souterrains des résidences de Croix de Berny et Pajeaud</strong>, les revêtements béton peint ou résine perdent leur adhérence quand les graisses s'incrustent. Le décrassage régulier préserve la sécurité des usagers et valorise les parties communes auprès des copropriétaires.</p>\n\n<p class=\"mt-4\">La <strong>proximité de la gare RER C Chemin d'Antony</strong> génère une rotation importante de véhicules, accentuant l'usure des sols. Klinova coordonne chaque intervention avec le syndic pour limiter la gêne : balisage par zones, créneaux adaptés, compte-rendu photographique transmis après chantier.</p>",
      uniqueDeepDive: "<h3>Préparation et sécurisation</h3>\n<p>Le chantier débute par un balayage mécanique pour éliminer graviers et débris. L'équipe installe ensuite le balisage de sécurité et définit les zones de rotation avec le gestionnaire.</p>\n\n<p class=\"mt-4\">Les véhicules sont déplacés par secteur pour libérer progressivement les surfaces à traiter.</p>\n\n<h3>Lavage mécanisé et dégraissage</h3>\n<p>L'autolaveuse effectue plusieurs passes sur le revêtement avec un détergent dégraissant adapté au support. Les zones critiques — rampes, angles morts, pieds de murs et rigoles — reçoivent un traitement renforcé à la haute pression.</p>\n\n<p class=\"mt-4\">Les eaux de lavage sont récupérées et dirigées vers les évacuations conformes, sans rejet sauvage.</p>\n\n<h3>Contrôle et remise en service</h3>\n<p>Après séchage, l'équipe vérifie l'état des regards et rigoles. Un dépoussiérage des blocs lumineux et tuyauteries peut être réalisé sur demande.</p>\n\n<p class=\"mt-4\">Le compte-rendu d'intervention précise les zones traitées et la fréquence recommandée selon le trafic observé.</p>",
      specificChallenges: [
        "Rotation véhicules à organiser dans les parkings à forte occupation près de la gare Chemin d'Antony.",
        "Revêtements béton peint ou résine nécessitant un réglage de pression adapté pour éviter les dégradations.",
        "Gestion stricte des eaux de lavage en sous-sol avec récupération vers les évacuations conformes.",
        "Rampes d'accès inclinées demandant un traitement antidérapant renforcé après dégraissage.",
        "Créneaux d'intervention à caler avec le syndic pour limiter la gêne aux résidents.",
      ],
      faqAdditions: [
        {
          question: "Comment planifiez-vous la rotation des véhicules lors du nettoyage d'un parking proche de la gare Chemin d'Antony ?",
          answer: "<p>Nous définissons avec le syndic un zonage par secteur. Les résidents déplacent leurs véhicules progressivement selon un planning affiché à l'avance. Cette organisation permet de traiter l'ensemble du parking sans bloquer totalement l'accès, même aux heures de forte rotation liées aux trajets RER C.</p>",
        },
        {
          question: "Quelle procédure suivez-vous pour la récupération des eaux de lavage dans les parkings souterrains de Croix de Berny ?",
          answer: "<p>L'autolaveuse aspire les eaux usées au fur et à mesure du passage. Les résidus sont ensuite dirigés vers les regards d'évacuation existants. Nous vérifions leur bon écoulement avant intervention et évitons tout rejet vers les parties communes ou la voirie, conformément aux règles de copropriété.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous un décrassage complet pour les parkings d'Antonypole fortement utilisés ?",
          answer: "<p>Pour les parkings d'entreprises à trafic quotidien intense, nous conseillons un lavage mécanisé tous les trois à quatre mois. Cette fréquence limite l'incrustation des graisses et préserve l'adhérence des sols. Un ajustement reste possible selon les observations du gestionnaire après chaque intervention.</p>",
        },
        {
          question: "Quelles différences techniques appliquez-vous entre un parking souterrain et un parking aérien à Antony ?",
          answer: "<p>En souterrain, nous privilégions l'autolaveuse pour maîtriser les projections et récupérer les eaux. En aérien, la haute pression peut être utilisée plus largement avec évacuation naturelle. Le choix du détergent et la pression sont ajustés selon le revêtement — béton brut, résine ou enrobé.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement des dépôts incrustés, nettoyage du garde-corps et gestion maîtrisée des eaux de rinçage pour un espace extérieur de nouveau agréable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux axes RD920 et A86, pollution spécifique à traiter.",
        "Techniques adaptées à chaque support : pression ajustée sur grès cérame, brossage manuel sur béton poreux.",
        "Gestion rigoureuse des eaux de rinçage pour respecter le voisinage et les règles d'évacuation en immeuble.",
      ],
      uniqueIntro: "<p>Le long de l'Avenue de la Division Leclerc et des axes proches de l'A86, les balcons subissent un encrassement régulier. Les particules fines se déposent sur le sol, noircissent les garde-corps et laissent des traces grises sur les vitrages. En quelques mois, un balcon initialement propre devient terne, collant au toucher, peu engageant pour s'y installer.</p>\n\n<p class=\"mt-4\">Sur les résidences des années 70 comme celles du quartier Pajeaud ou du Noyer Doré, les supports en <strong>carrelage grès cérame ou béton brut</strong> retiennent davantage les salissures dans leurs aspérités. Le confort d'usage s'en ressent : on hésite à poser une table, à sortir les plantes, à profiter des beaux jours. L'espace extérieur perd sa fonction première.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable. Nous adaptons le traitement au support, protégeons les menuiseries et gérons l'évacuation des eaux selon les contraintes propres à chaque immeuble, notamment en centre-ville où les règles d'écoulement sont strictes.</p>",
      uniqueDeepDive: "<h3>Dépôts noirs et poussières accumulées</h3>\n<p>Les particules de pollution forment une couche adhérente sur le sol et les parois. Nous commençons par un dépoussiérage complet, puis appliquons un produit désincrustant adapté au carrelage ou au béton. Le brossage manuel déloge les salissures sans agresser les joints.</p>\n\n<h3>Mousses et traces vertes sur surfaces humides</h3>\n<p>Les balcons exposés à l'humidité ou proches d'espaces verts développent des dépôts organiques. Un traitement spécifique élimine ces mousses. Le rinçage s'effectue à pression contrôlée pour préserver l'étanchéité des joints et éviter les projections vers les étages inférieurs.</p>\n\n<h3>Garde-corps, vitrages et évacuation des eaux</h3>\n<p>Le nettoyage des barreaux et des surfaces vitrées complète l'intervention. En centre-ville d'Antony, nous utilisons un système d'aspiration ou de récupération pour éviter tout écoulement sur la voie publique ou chez les voisins. Le balcon sèche rapidement et redevient un espace à vivre.</p>",
      specificChallenges: [
        "Pollution routière : dépôts noirs fréquents sur les balcons exposés à l'A86 et au RD920.",
        "Supports variés : carrelage grès cérame, béton brut ou dalles sur plots selon les résidences.",
        "Évacuation des eaux : contraintes strictes en centre-ville, récupération nécessaire.",
        "Joints fragiles : pression contrôlée indispensable sur les balcons anciens.",
        "Proximité végétale : mousses et dépôts verts près de la Coulée Verte ou du Parc de Sceaux.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyez-vous un balcon fortement encrassé par la pollution le long du RD920 à Antony ?",
          answer: "<p>Nous appliquons un désincrustant spécifique aux dépôts de particules fines, suivi d'un brossage adapté au support. Le rinçage à pression modérée élimine les résidus sans endommager les joints. Cette méthode convient aux balcons exposés aux axes routiers comme l'Avenue de la Division Leclerc.</p>",
        },
        {
          question: "Quelles solutions proposez-vous pour récupérer l'eau de lavage sur un balcon en centre-ville d'Antony ?",
          answer: "<p>Nous utilisons un système d'aspiration ou de bâchage pour éviter tout écoulement vers la voie publique ou les balcons voisins. Cette organisation respecte les contraintes des immeubles du centre-ville où le déversement direct est interdit. Le balcon reste propre sans gêne pour le voisinage.</p>",
        },
        {
          question: "Les balcons proches de la Coulée Verte présentent des dépôts verts : quel traitement recommandez-vous ?",
          answer: "<p>Les mousses et algues se développent sur les surfaces humides ou ombragées. Nous appliquons un traitement anti-mousse avant le nettoyage mécanique. Le rinçage contrôlé évite de disperser les spores. Un entretien annuel limite la réapparition de ces dépôts organiques.</p>",
        },
        {
          question: "Peut-on nettoyer un balcon à Antony sans haute pression pour préserver joints et vitrages ?",
          answer: "<p>Oui, nous proposons un nettoyage manuel ou à basse pression pour les balcons anciens aux joints fragiles. Le brossage et les produits adaptés suffisent à éliminer les salissures courantes. Les vitrages et garde-corps sont traités séparément avec des techniques douces qui préservent les surfaces.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et pose optionnelle de dispositifs anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque à Antony : abords des squares, corniches d'immeubles anciens du centre.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection virucide certifiée.",
        "Intervention discrète, protection du voisinage et évacuation des déchets en sacs étanches.",
      ],
      uniqueIntro: "<p>Comment profiter de son balcon quand les fientes s'accumulent semaine après semaine ? Autour du <strong>Square de l'Hôtel de Ville</strong>, les pigeons trouvent refuges sur corniches et garde-corps, laissant derrière eux des dépôts tenaces. L'odeur s'installe, le sol devient glissant, et l'envie d'ouvrir la baie vitrée disparaît progressivement.</p>\n\n<p class=\"mt-4\">Au-delà de la gêne visuelle, ces déjections attaquent les supports. Les <strong>façades anciennes et corniches autour de l'Église Saint-Saturnin</strong> montrent régulièrement des traces de corrosion sur le béton et les peintures écaillées. Sans traitement adapté, les dégâts s'aggravent et le balcon devient un espace inutilisable, source de frustration quotidienne.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon propre et désinfecté. Diagnostic des zones touchées, protection de l'intérieur du logement, traitement des supports et conseils pour limiter le retour des oiseaux : chaque étape répond à un objectif précis.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace utilisable, débarrassé des agents pathogènes. Le sol, le garde-corps et les vitrages retrouvent un aspect propre. Les odeurs sont neutralisées grâce à un traitement virucide appliqué sur l'ensemble des surfaces concernées.</p>\n\n<h3>Confinement et retrait sécurisé</h3>\n<p>L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n\n<h3>Traitement des supports et prévention</h3>\n<p>Chaque surface reçoit un nettoyage adapté : sol balcon, barreaux, rebords de fenêtre. Le désinfectant homologué agit pendant le temps de contact requis avant rinçage. Si nécessaire, des pics ou filets anti-pigeons peuvent être posés sur les points de pose identifiés pour limiter les récidives.</p>",
      specificChallenges: [
        "Corniches anciennes autour de l'Église Saint-Saturnin régulièrement colonisées par les pigeons.",
        "Dépôts accumulés sur garde-corps et sols de balcons dans les résidences du centre-ville.",
        "Risque de dispersion des poussières contaminées vers l'intérieur du logement sans confinement adapté.",
        "Nécessité de coordonner l'évacuation des eaux usées sans gêner les voisins en étages inférieurs.",
        "Récidive fréquente sans pose de dispositifs dissuasifs après assainissement.",
      ],
      faqAdditions: [
        {
          question: "Les fientes accumulées sur les corniches du Square de l'Hôtel de Ville présentent-elles un risque sanitaire justifiant une intervention rapide ?",
          answer: "<p>Les fientes de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) qui se dispersent en séchant. Sur les corniches exposées du square, l'accumulation augmente ce risque. Une désinfection rapide limite la propagation et permet de retrouver un balcon utilisable sans danger.</p>",
        },
        {
          question: "Quel protocole et quels équipements de protection utilisez-vous pour traiter les fientes près de l'Église Saint-Saturnin ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes de protection. La zone est confinée par bâchage avant humidification des fientes pour éviter l'envol de particules. Ce protocole s'applique sur les balcons des immeubles anciens du secteur, où les corniches favorisent les dépôts.</p>",
        },
        {
          question: "Après le retrait mécanique des fientes, quels produits garantissent l'élimination des agents pathogènes sur mon balcon ?",
          answer: "<p>Un désinfectant virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces nettoyées. Le temps de contact est respecté avant rinçage pour assurer l'efficacité du traitement. Cette étape est indispensable pour éliminer les risques résiduels après décapage.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation des déchets contaminés lors d'une intervention rue Auguste Mounié en zone piétonne ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès le ramassage. L'évacuation se fait en fin d'intervention sans stockage sur la voie publique. En zone piétonne, nous adaptons les horaires pour limiter la gêne et respecter les contraintes de circulation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Un détachage en profondeur de vos canapés, tapis et matelas à domicile, avec extraction des salissures et séchage contrôlé pour retrouver un textile frais et sain.",
      whyUsBullets: [
        "Connaissance des quartiers résidentiels d'Antony, de Fontaine Michalon aux Baconnets, pour anticiper accès et stationnement.",
        "Détachage ciblé selon la nature du textile et extraction contrôlée pour un séchage rapide sans sur-humidification.",
        "Intervention planifiée en journée ou soirée, remise en service du mobilier sous quelques heures après passage.",
      ],
      uniqueIntro: "<p>Après quelques années d'usage quotidien, les canapés et tapis des foyers du <strong>quartier Fontaine Michalon</strong> accumulent poussières, taches alimentaires et résidus d'animaux domestiques. Les fibres se ternissent, les odeurs s'installent, et l'aspiration régulière ne suffit plus à redonner fraîcheur aux textiles. Dans les pavillons comme dans les appartements proches des Baconnets, ce constat revient souvent au moment des changements de saison.</p>\n\n<p class=\"mt-4\">Un entretien approfondi change la perception du salon : couleurs ravivées, sensation de propreté au toucher, air ambiant plus sain. Sur les <strong>tissus synthétiques ou les laines</strong> présents dans les résidences d'Antony, l'extraction mécanique retire ce que l'aspirateur laisse en profondeur. Les familles avec enfants ou animaux constatent la différence dès le séchage terminé.</p>\n\n<p class=\"mt-4\">L'intervention se prépare en amont : repérage des accès, évaluation du <strong>stationnement à proximité des gares locales</strong>, diagnostic textile sur place. Chaque surface reçoit un traitement adapté à sa nature et à son état.</p>",
      uniqueDeepDive: "<h3>Assises et dossiers</h3>\n<p>Le canapé concentre les usages : repas, siestes, animaux. Le technicien identifie d'abord le type de tissu — coton, velours, synthétique ou cuir — puis teste la réaction sur une zone discrète. Le pré-traitement cible les taches visibles avec un détachant adapté avant l'injection-extraction sur l'ensemble des surfaces rembourrées.</p>\n\n<h3>Tapis et moquettes d'appoint</h3>\n<p>Les fibres au sol retiennent poussières fines et allergènes piégés en profondeur. Selon l'épaisseur et la composition — laine, synthétique, poils longs — la pression et la température d'injection varient. L'extraction retire l'eau chargée de résidus, laissant un textile humide mais non détrempé.</p>\n\n<h3>Matelas et coussins</h3>\n<p>Ces surfaces en contact prolongé avec le corps nécessitent un traitement anti-acariens ciblé. Le détachage enzymatique traite les éventuelles traces organiques. L'extraction finale et les consignes de ventilation garantissent un séchage complet sous 4 à 8 heures selon la saison et l'aération disponible.</p>",
      specificChallenges: [
        "Taches d'animaux fréquentes dans les foyers pavillonnaires : traitement enzymatique requis.",
        "Textiles variés (synthétique, laine, velours) : chaque fibre demande une approche différente.",
        "Stationnement contraint près des gares Fontaine Michalon et Baconnets : anticipation logistique.",
        "Séchage à adapter selon la ventilation du logement et la saison d'intervention.",
        "Allergènes et acariens accumulés dans les matelas : extraction en profondeur indispensable.",
      ],
      faqAdditions: [
        {
          question: "Comment réduisez-vous les acariens et allergènes sur les canapés dans le quartier Fontaine Michalon ?",
          answer: "<p>L'injection-extraction retire les particules logées en profondeur dans les fibres. Sur les textiles des pavillons de Fontaine Michalon, souvent exposés aux poussières et pollens, ce procédé élimine une grande partie des allergènes. Le séchage rapide évite toute recolonisation immédiate.</p>",
        },
        {
          question: "Comment traitez-vous les taches d'urine d'animaux sur un canapé tissu dans le quartier des Baconnets ?",
          answer: "<p>Un détachant enzymatique décompose les composés organiques responsables des odeurs persistantes. Sur les canapés des familles des Baconnets, cette étape précède l'extraction complète. Le textile retrouve sa neutralité olfactive après séchage, sans résidu chimique agressif.</p>",
        },
        {
          question: "Quelle méthode choisissez-vous pour un tapis laine versus un canapé tissu synthétique à Antony ?",
          answer: "<p>La laine supporte mal les températures élevées et les pressions fortes : l'injection reste tiède et douce. Le synthétique tolère un traitement plus appuyé pour déloger les salissures incrustées. Chaque textile reçoit un réglage adapté après diagnostic sur place.</p>",
        },
        {
          question: "Pour une tache incrustée en salle d'attente, préconisez-vous détachage local ou nettoyage complet ?",
          answer: "<p>Si la tache est isolée sur un fauteuil en bon état général, un détachage ciblé suffit. En revanche, sur des assises très sollicitées — comme celles proches de l'Hôpital Privé d'Antony — un rafraîchissement complet uniformise l'aspect et prolonge la durée de vie du textile.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et démoussage préventif pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses exposées aux boisements de la Coulée Verte et du Parc de Sceaux, propices aux mousses.",
        "Adaptation du traitement selon le support : pression modulée sur pierre, nettoyage doux sur bois composite.",
        "Protection systématique du mobilier et des plantations, gestion des eaux vers les évacuations existantes.",
      ],
      uniqueIntro: "<p>Les dépôts verts s'installent progressivement sur les terrasses situées à proximité d'espaces boisés comme la <strong>Coulée Verte du Sud Parisien</strong> ou les abords du <strong>Parc de Sceaux</strong>. Lichens, mousses et résidus organiques forment une couche glissante qui altère l'aspect des dalles et rend la surface dangereuse par temps humide. Ces accumulations reviennent chaque saison si aucun traitement n'est appliqué.</p>\n\n<p class=\"mt-4\">Les supports varient selon les quartiers : <strong>pierre naturelle dans les pavillons de Fontaine Michalon</strong>, bois composite sur les résidences récentes de la Croix de Berny, dalles sur plots en toiture-terrasse. Chaque matériau réagit différemment à l'humidité et nécessite une approche spécifique pour éviter toute dégradation lors du nettoyage. Un traitement inadapté peut éclaircir la pierre ou griser le bois prématurément.</p>\n\n<p class=\"mt-4\">L'intervention débute par un diagnostic du revêtement et de son état. Nous adaptons la pression, le produit et la méthode de brossage selon la porosité du support et l'ampleur des dépôts constatés.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries vitrées et les seuils de portes reçoivent une protection pour éviter projections et coulures.</p>\n\n<p class=\"mt-4\">Un balayage élimine les feuilles mortes, la terre accumulée et les débris grossiers avant toute application de produit.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué sur l'ensemble de la surface. Le brossage manuel ou mécanique déloge mousses et lichens incrustés dans les joints et les pores du matériau.</p>\n\n<p class=\"mt-4\">La haute pression intervient uniquement sur les supports qui la tolèrent, avec un réglage contrôlé pour préserver les joints et les matériaux poreux. Un traitement anti-mousse préventif peut être appliqué en fin d'opération.</p>\n\n<h3>Finalisation et évacuation</h3>\n<p>Les eaux de lavage sont dirigées vers les points d'écoulement existants. Les plantations environnantes sont rincées si nécessaire. Nous restituons l'espace après séchage avec des conseils d'entretien saisonnier adaptés à votre revêtement.</p>",
      specificChallenges: [
        "Mousses récurrentes sur terrasses ombragées par les arbres du Parc de Sceaux.",
        "Pierre naturelle poreuse nécessitant un réglage de pression adapté pour éviter l'éclaircissement.",
        "Bois composite sensible aux produits agressifs : détergent neutre obligatoire.",
        "Dalles sur plots avec joints ouverts : risque d'infiltration si haute pression mal orientée.",
        "Gestion des eaux de lavage vers évacuations sans débordement vers le voisinage.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous une terrasse bois noircie située près du Parc de Sceaux à Antony ?",
          answer: "<p>Le bois noirci par l'humidité et les dépôts organiques reçoit un nettoyage doux sans haute pression agressive. Nous appliquons un dégriseur adapté aux essences locales, suivi d'un brossage manuel. Le séchage naturel précède l'application éventuelle d'un saturateur pour protéger les fibres.</p>",
        },
        {
          question: "Quelles solutions proposez-vous contre les mousses et lichens sur les terrasses proches de la Coulée Verte ?",
          answer: "<p>Les terrasses exposées à l'humidité de la Coulée Verte accumulent rapidement mousses et lichens. Nous appliquons un traitement biocide après nettoyage mécanique, puis un produit anti-mousse préventif qui ralentit la recolonisation pendant plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "Quel traitement anti-mousse recommandez-vous pour une terrasse en pierre naturelle à Antony ?",
          answer: "<p>Sur pierre naturelle, nous privilégions un anti-mousse à action lente qui pénètre dans les pores sans altérer la teinte. L'application se fait après séchage complet de la surface. Ce traitement limite la repousse pendant une à deux saisons selon l'ombrage.</p>",
        },
        {
          question: "Faut-il éviter la haute pression sur les margelles et escaliers de terrasse en pierre à Antony ?",
          answer: "<p>La haute pression reste utilisable sur pierre dense, mais avec un réglage modéré et une buse adaptée. Sur margelles poreuses ou escaliers anciens, nous préférons le brossage mécanique combiné à un détergent alcalin pour préserver les arêtes et éviter l'érosion des joints.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux plafonds, pour restituer un bien propre et prêt à accueillir de nouveaux occupants ou valider un état des lieux.",
      whyUsBullets: [
        "Connaissance des typologies locatives d'Antony : studios, appartements anciens et pavillons familiaux.",
        "Polyvalence sur tous les revêtements : parquet, carrelage, faïence, surfaces vitrées.",
        "Réactivité pour respecter les délais d'état des lieux et coordination avec agences ou artisans.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable quand les délais de rotation locative se comptent en jours ? À <strong>Croix de Berny</strong> et dans le secteur de la <strong>rue Mounié</strong>, les petites surfaces changent régulièrement d'occupants. Entre le départ d'un locataire et l'arrivée du suivant, les traces d'usage s'accumulent : résidus de cuisine, dépôts calcaires dans les sanitaires, poussières incrustées sur les plinthes. Sans intervention structurée, l'état des lieux de sortie devient source de litiges.</p>\n\n<p class=\"mt-4\">Un nettoyage approfondi transforme la perception du bien. Les <strong>parquets chêne des appartements anciens</strong> retrouvent leur aspect d'origine, les carrelages des pavillons perdent leur voile terne, les vitres intérieures laissent passer la lumière. Pour les agences immobilières comme pour les propriétaires, c'est la garantie d'une remise de clés sans contestation et d'une relocation facilitée.</p>\n\n<p class=\"mt-4\">Chaque intervention suit un plan adapté au type de bien et au contexte : fin de bail, sortie de chantier ou succession. Le diagnostic initial identifie les zones prioritaires, les surfaces fragiles à protéger et les délais à respecter pour coordonner avec les autres intervenants.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être habité</h3>\n<p>L'objectif est de restituer un bien dans lequel chaque pièce respire la propreté. Sols débarrassés de toute trace, sanitaires désinfectés, placards vidés et essuyés, vitres transparentes. Le résultat doit satisfaire aussi bien un état des lieux qu'une première visite de futurs locataires.</p>\n\n<h3>Traitement méthodique par zones</h3>\n<p>Le travail commence par le dépoussiérage complet des hauteurs : plafonds, luminaires, dessus de meubles. Puis viennent les pièces d'eau avec détartrage des robinetteries et nettoyage des joints. Les sols sont traités en dernier pour éviter de les resalir : aspiration puis lavage adapté au revêtement.</p>\n\n<h3>Finitions et contrôle qualité</h3>\n<p>Les détails font la différence : interrupteurs, poignées de portes, radiateurs, intérieurs de placards. Si le contexte l'exige, les traces de peinture ou d'enduit sont retirées des surfaces vitrées et carrelées. Un passage final vérifie chaque zone avant remise des clés.</p>",
      specificChallenges: [
        "Délais serrés entre deux locataires dans les résidences de Croix de Berny.",
        "Parquets anciens du centre-ville nécessitant un traitement adapté sans excès d'eau.",
        "Résidus de chantier persistants dans les logements neufs de la ZAC Jean Zay.",
        "Stationnement contraint en zone bleue pour les interventions rue Mounié.",
        "Coordination avec gardiens et digicodes dans les résidences sécurisées.",
      ],
      faqAdditions: [
        {
          question: "En cas de départ locataire à Croix de Berny, quel est votre délai d'intervention pour un nettoyage état des lieux ?",
          answer: "<p>Nous intervenons selon la disponibilité. Pour les situations urgentes liées à une date d'état des lieux fixée, nous adaptons notre planning. Un échange préalable permet de confirmer le créneau et d'organiser la remise des clés ou l'accès par badge.</p>",
        },
        {
          question: "Que comprend votre prestation de nettoyage après travaux pour un logement dans la ZAC Jean Zay ?",
          answer: "<p>L'intervention couvre l'évacuation des poussières de chantier, le retrait des traces de peinture et d'enduit sur vitres et carrelages, le nettoyage complet des pièces d'eau et des sols. Les résidus de colle ou de joint sont traités avec des produits adaptés pour ne pas abîmer les surfaces neuves.</p>",
        },
        {
          question: "Quel forfait appliquez-vous pour un studio rue Mounié en sortie d'étudiant ?",
          answer: "<p>Le tarif dépend de l'état constaté lors du diagnostic et non uniquement de la surface. Un studio de 20 m² en bon état nécessite moins de temps qu'un logement avec cuisine encrassée. Nous établissons un devis après échange téléphonique ou envoi de photos pour ajuster la prestation.</p>",
        },
        {
          question: "Comment coordonnez-vous vos passages avec artisans et agences pour une remise en état avant état des lieux ?",
          answer: "<p>Nous intervenons après la fin des travaux pour éviter de repasser. Si des retouches sont prévues, nous planifions notre passage en dernier. La communication avec l'agence ou le propriétaire permet de caler le créneau optimal et de transmettre un compte-rendu à l'issue de l'intervention.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;