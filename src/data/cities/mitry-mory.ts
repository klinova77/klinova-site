import type { City } from "~/types/geo";

const city: City = {
  name: "Mitry-Mory",
  slug: "mitry-mory",
  postalCodes: ["77290"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Mitry-Mory pour l'entretien des parties communes, parkings et espaces extérieurs. Entre le terminus du RER B et la Z.I. Mitry-Compans, une équipe locale adaptée aux contraintes logistiques de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Terminus du RER B et pôle logistique majeur aux portes de Roissy-CDG, Mitry-Mory concentre des flux intenses entre zones résidentielles et activités économiques. Klinova s'y positionne comme partenaire terrain pour accompagner syndics, gestionnaires et entreprises dans leurs besoins de propreté.</p>\n<p class=\"mt-4\">Notre organisation repose sur une <strong>connaissance fine des secteurs</strong> : Mitry-le-Neuf, le Bourg historique, la Villette-aux-Aulnes. Chaque intervention tient compte des accès, des horaires sensibles et des contraintes propres à chaque site. Reporting disponible sur demande.</p>\n<ul>\n  <li><strong>Réactivité locale :</strong> Équipes basées en Île-de-France, capables d'intervenir rapidement sur les résidences proches des gares comme sur les sites de la zone industrielle.</li>\n  <li><strong>Adaptation aux accès :</strong> Gestion des digicodes, coordination avec gardiens dans les grands ensembles, créneaux ajustés pour limiter la gêne aux occupants.</li>\n  <li><strong>Suivi rigoureux :</strong> Planification des passages, traçabilité des interventions, interlocuteur dédié pour les gestionnaires et syndics.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Halls des résidences gare <strong>Mitry-Claye</strong> : piétinement quotidien lié aux flux pendulaires.",
    "Parkings souterrains Mitry-le-Neuf : <strong>traces d'huile</strong> et poussières accumulées.",
    "Balcons exposés aux retombées de la <strong>Francilienne (A104)</strong> et du trafic aérien.",
    "Terrasses pavillonnaires ombragées : <strong>mousse et dépôts végétaux</strong> fréquents.",
    "Bureaux Z.I. Mitry-Compans : <strong>moquettes encrassées</strong> par le passage en chaussures de sécurité.",
  ],

  // Texte brut uniquement
  districts: [
    "Mitry-le-Neuf",
    "Mitry-Bourg",
    "La Villette-aux-Aulnes",
    "Quartier des Acacias",
    "Quartier Cusino",
  ],
  nearbyCities: [
        "villeparisis",
        "tremblay-en-france",
        "villepinte",
        "claye-souilly",
        "sevran",
        "livry-gargan",
        "aulnay-sous-bois",
        "montfermeil",
        "chelles",
        "le-raincy"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Mitry-Mory",
    "Gare de Mitry-Claye",
    "Z.I. Mitry-Compans",
    "Parc des Corbeaux",
    "Cinéma Le Concorde",
    "Médiathèque Georges Brassens",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les résidences proches de la gare de Mitry-Claye ?",
      answer: "<p>Les abords de la gare connaissent une <strong>forte rotation de véhicules</strong> et un stationnement saturé en matinée. Nous planifions nos passages en début d'après-midi ou en soirée, après coordination avec le syndic. Le matériel est acheminé en véhicule utilitaire stationné sur des emplacements identifiés à l'avance.</p>",
    },
    {
      question: "Proposez-vous des devis pour des sites situés en zone industrielle ?",
      answer: "<p>Oui, nous intervenons régulièrement sur la <strong>Z.I. Mitry-Compans</strong> pour des bureaux, entrepôts ou parkings aériens. Le devis est établi après visite technique pour évaluer les surfaces, l'état des sols et les contraintes d'accès liées au trafic poids lourds.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur une copropriété à Mitry-Mory ?",
      answer: "<p>En cas de besoin urgent — dégât des eaux, souillure accidentelle dans un hall — nous mobilisons une équipe selon la disponibilité. Le syndic ou le gardien nous transmet les <strong>accès et consignes</strong>, et nous confirmons le créneau par retour.</p>",
    },
    {
      question: "Comment gérez-vous les interventions dans les quartiers pavillonnaires ?",
      answer: "<p>Les secteurs comme les Acacias ou Mitry-Bourg présentent des rues parfois étroites et des accès individuels. Nous adaptons le <strong>gabarit des véhicules</strong> et convenons d'un créneau avec l'occupant pour éviter toute gêne. Le stationnement est anticipé lors de la prise de rendez-vous.</p>",
    },
  ],



  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template must include only requested services.
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en circulation rapide des espaces professionnels et collectifs.",
      whyUsBullets: [
        "Connaissance des contraintes propres aux locaux tertiaires et logistiques de la zone Mitry-Compans.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées ou velours.",
        "Interventions planifiées en dehors des heures d'activité pour limiter toute perturbation des équipes.",
      ],
      uniqueIntro: "<p>Les traces grises le long des couloirs, les auréoles près des entrées, les fibres tassées aux passages fréquents : dans les <strong>bureaux de la Z.I. Mitry-Compans</strong>, ces marques d'usure apparaissent rapidement. Le trafic quotidien des équipes logistiques, combiné aux poussières fines transportées depuis les quais, accélère l'encrassement des revêtements textiles.</p>\n<p class=\"mt-4\">Sur les <strong>dalles textiles des locaux administratifs</strong> comme dans les salles de réunion des équipements municipaux, un entretien régulier préserve l'aspect professionnel des lieux. Les fibres retrouvent leur tenue, les couleurs leur netteté. Les occupants perçoivent immédiatement la différence : un sol propre modifie l'impression générale d'un espace de travail.</p>\n<p class=\"mt-4\">Face au fort passage généré par les chaussures de sécurité et les allées-venues constantes, une intervention structurée s'impose. Diagnostic préalable du type de moquette, repérage des zones de trafic intense, protection des éléments fixes : chaque étape prépare un traitement adapté aux contraintes réelles du site.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\n<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. Après aspiration approfondie, le traitement par injection-extraction cible ces surfaces en priorité. Plusieurs passes successives délogent les particules incrustées dans les fibres, notamment les résidus abrasifs ramenés des zones de stockage.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les dalles textiles sous les bureaux et autour des tables reçoivent un détachage ciblé sur les taches localisées. La méthode d'extraction limite l'apport d'humidité pour préserver les supports et raccourcir le temps de séchage. Les plinthes et bas de cloisons sont protégés avant chaque passage.</p>\n\n<h3>Finitions et remise en service</h3>\n<p>L'extraction maximale de l'eau résiduelle accélère le séchage. Selon l'épaisseur du revêtement et la ventilation disponible, comptez entre 4 et 8 heures avant circulation normale. Une fiche de préconisation précise la fréquence d'entretien adaptée au niveau de passage constaté.</p>",
      specificChallenges: [
        "Poussières industrielles transportées depuis les quais logistiques vers les bureaux.",
        "Dalles textiles soumises au <strong>passage intensif</strong> des équipes en chaussures de sécurité.",
        "Salles de réunion avec <strong>taches localisées (café, encre)</strong> nécessitant un détachage ciblé.",
        "Contraintes horaires : intervention à organiser hors plages d'activité des sites.",
        "Séchage à maîtriser pour remise en circulation rapide des espaces professionnels.",
      ],
      faqAdditions: [
        {
          question:
            "Quelles précautions prenez-vous pour les moquettes des bureaux logistiques de la Z.I. Mitry-Compans ?",
          answer: "<p>Nous identifions d'abord <strong>le type de fibre</strong> et son état d'usure. Sur les dalles textiles fréquentes dans ces locaux, la pression d'injection est ajustée pour éviter toute détérioration. Les zones de passage intense reçoivent plusieurs passes sans excès d'humidité, préservant ainsi la structure du revêtement.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser les salles du Cinéma Le Concorde après nettoyage ?",
          answer: "<p>Le séchage varie selon <strong>l'épaisseur de la moquette</strong> et la ventilation de la salle. En conditions normales, comptez 4 à 6 heures pour une circulation légère, 8 heures pour un usage intensif. Nous programmons l'intervention pour que les espaces soient opérationnels à l'ouverture suivante.</p>",
        },
        {
          question:
            "Comment gérez-vous l'accès avec du matériel dans les escaliers étroits du centre historique ?",
          answer: "<p>Notre équipement est modulable : les éléments lourds restent au véhicule, seuls les accessoires nécessaires montent à l'étage. Pour les cages d'escalier anciennes de Mitry-Bourg, nous utilisons des rallonges de flexible et des réservoirs de capacité réduite, adaptés aux passages resserrés.</p>",
        },
        {
          question:
            "Injection-extraction ou vapeur : quelle méthode pour les moquettes de bureaux près de la gare Mitry-Claye ?",
          answer: "<p>L'injection-extraction reste la référence pour les dalles textiles de bureaux : elle déloge les salissures en profondeur et extrait l'eau immédiatement. La vapeur convient aux retouches ponctuelles ou aux fibres délicates. Nous recommandons la première méthode pour les locaux à fort trafic quotidien.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Un décrassage complet de vos parkings souterrains ou aériens, avec traitement des taches d'huile, gestion maîtrisée des eaux de lavage et coordination adaptée à la rotation des véhicules.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès autour du pôle gare de Mitry-Claye et des résidences de Mitry-le-Neuf.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux de lavage selon les évacuations présentes.",
        "Coordination avec syndics pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: "<p>Après plusieurs mois d'utilisation intensive, les parkings situés autour de la gare de Mitry-Claye accumulent des dépôts tenaces : traces d'huile sous les places de stationnement, poussières noires sur les rampes d'accès, résidus de boue séchée dans les angles. Les véhicules pendulaires laissent leur empreinte quotidienne, et les sols perdent progressivement leur aspect d'origine.</p>\n<p class=\"mt-4\">Pour les syndics et gestionnaires de résidences à Mitry-le-Neuf, cette dégradation visible affecte l'image des parties communes. Les copropriétaires signalent des sols glissants, des rigoles obstruées, des marquages devenus illisibles. Sur les parkings aériens en enrobé comme dans les sous-sols en béton brut, l'encrassement s'installe durablement sans intervention adaptée.</p>\n<p class=\"mt-4\">Une opération de lavage mécanisé permet de traiter l'ensemble des surfaces en une seule session. Diagnostic préalable du revêtement, balisage sécurisé des zones, rotation organisée des véhicules : chaque étape vise à limiter la gêne pour les usagers tout en restaurant un niveau de propreté satisfaisant.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et rigoles dégagées</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des graisses, huiles et poussières accumulées. Les rigoles d'évacuation retrouvent leur fonction, les marquages redeviennent lisibles. Sur béton brut comme sur enrobé, le résultat visuel traduit un entretien effectif.</p>\n\n<h3>Autolaveuse et traitement ciblé</h3>\n<p>Le passage d'une autolaveuse assure un lavage homogène des surfaces planes. Les zones critiques — rampes inclinées, pieds de murs, angles morts — reçoivent un traitement complémentaire à haute pression avec dégraissant adapté au type de revêtement.</p>\n\n<h3>Gestion des eaux et sécurisation</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes, <strong>sans rejet sauvage</strong>. Un balayage préalable élimine les débris grossiers. Le balisage signalétique reste en place jusqu'au séchage complet, et la rotation des véhicules s'organise par zones pour maintenir l'accès partiel pendant l'intervention.</p>",
      specificChallenges: [
        "Parkings relais gare Mitry-Claye : <strong>trafic quotidien intense</strong> et taches d'huile récurrentes.",
        "Sous-sols des résidences Mitry-le-Neuf avec rigoles parfois obstruées par les dépôts.",
        "Rampes d'accès inclinées nécessitant un traitement antidérapant après lavage.",
        "Coordination indispensable avec les copropriétaires pour libérer les places par rotation.",
        "Poussières industrielles retombant sur les <strong>parkings aériens</strong> proches de la Z.I.",
      ],
      faqAdditions: [
        {
          question:
            "Pour des taches d'huile anciennes sur le parking proche de la gare, quelle méthode conseillez-vous ?",
          answer: "<p>Les taches d'huile incrustées nécessitent <strong>un dégraissant appliqué avant</strong> le passage de l'autolaveuse. Sur béton brut, le produit pénètre dans les pores du revêtement. Plusieurs passes peuvent être nécessaires selon l'ancienneté des dépôts, mais le résultat reste visible dès la première intervention.</p>",
        },
        {
          question:
            "Intervenez-vous différemment sur parking souterrain et parking aérien dans les résidences de Mitry-le-Neuf ?",
          answer: "<p>Le souterrain impose <strong>une ventilation suffisante</strong> et une gestion stricte des eaux vers les regards existants. L'aérien en enrobé supporte mieux la haute pression mais accumule davantage de poussières. Le diagnostic initial détermine le matériel et les produits adaptés à chaque configuration.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous un lavage des parkings utilisés par les camions en Z.I. Mitry-Compans ?",
          answer: "<p>Le trafic poids lourds génère des dépôts de graisse et de suie plus rapides qu'un usage résidentiel. Un décrassage trimestriel maintient un niveau de propreté correct. Pour les zones de manœuvre intensives, un passage bimestriel peut s'avérer pertinent selon l'activité.</p>",
        },
        {
          question:
            "Peut-on planifier un nettoyage partiel hors heures de pointe autour de la gare Mitry-Claye ?",
          answer: "<p>Les interventions peuvent débuter tôt le matin ou en soirée pour éviter les flux pendulaires. Le parking est traité par zones successives, chaque secteur étant libéré avant le suivant. Cette organisation permet de maintenir un accès partiel tout au long de l'opération.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon ou loggia, avec traitement adapté au support, protection des menuiseries et gestion maîtrisée des écoulements pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : retombées routières A104 et proximité aéroportuaire qui accélèrent l'encrassement des balcons.",
        "Pression ajustée selon le support : béton ancien, carrelage récent ou dalles sur plots, chaque matériau reçoit le traitement approprié.",
        "Gestion rigoureuse des écoulements pour éviter toute nuisance aux voisins et intervention planifiée selon vos disponibilités.",
      ],
      uniqueIntro: "<p>Dans les résidences de la <strong>Villette-aux-Aulnes</strong> comme dans les secteurs pavillonnaires de Mitry-Bourg, les balcons accumulent rapidement des dépôts tenaces. Feuilles mortes coincées dans les angles, traces verdâtres sur les dalles, voile grisâtre qui ternit le garde-corps : ces salissures s'installent au fil des mois et rendent l'espace extérieur peu engageant. Difficile alors de profiter des beaux jours ou simplement d'ouvrir les fenêtres sans constater l'encrassement.</p>\n<p class=\"mt-4\">Sur les <strong>supports en béton des immeubles années 70</strong> ou les carrelages des constructions plus récentes, la saleté s'installe différemment. Le béton poreux retient l'humidité et favorise les mousses, tandis que les joints des carrelages noircissent sous l'effet des intempéries. Un balcon propre, c'est un espace récupéré pour installer quelques plantes, prendre un café dehors ou simplement aérer sans gêne visuelle.</p>\n<p class=\"mt-4\">L'exposition aux retombées des axes A104 et N2, combinée aux particules liées au trafic aérien proche, accélère l'encrassement. Une intervention structurée permet de traiter chaque surface selon sa nature et de retrouver un extérieur agréable à utiliser.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés pour éviter tout contact avec les produits. Les menuiseries, fenêtres et seuils reçoivent une protection adaptée. Les gros débris — feuilles, terre accumulée, résidus divers — sont retirés manuellement avant toute application de produit.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour béton poreux ou nettoyant doux pour carrelage et joints. Le brossage, manuel ou mécanique selon l'état, décolle les <strong>dépôts verts</strong> et les traces incrustées. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée.</p>\n\n<h3>Rinçage et finition</h3>\n<p>Le rinçage s'effectue à pression contrôlée pour préserver les joints fragiles. L'eau est dirigée vers les évacuations, avec protection anti-coulures pour les voisins du dessous. Après séchage, vous recevez des conseils d'entretien pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dépôts atmosphériques liés aux axes routiers et au trafic aérien qui <strong>ternissent rapidement les surfaces</strong>.",
        "Béton poreux des immeubles années 70 favorisant <strong>mousses et traces verdâtres</strong> persistantes.",
        "Joints de carrelage noircis nécessitant un brossage ciblé sans détérioration.",
        "Loggias vitrées à la Villette-aux-Aulnes demandant une gestion précise des écoulements.",
        "Étages élevés dans les résidences collectives compliquant parfois l'acheminement du matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyer un balcon en béton vieillissant sans abîmer les joints dans les immeubles années 70 de Mitry-Mory ?",
          answer: "<p>Le béton poreux des constructions anciennes demande une pression modérée et un produit adapté qui pénètre sans éroder. Le brossage cible les zones encrassées tandis que les joints reçoivent un traitement doux. Le rinçage final évacue les résidus sans creuser la surface ni fragiliser les scellements existants.</p>",
        },
        {
          question:
            "Pour une loggia vitrée à la Villette-aux-Aulnes, comment gérez-vous l'évacuation des eaux sales ?",
          answer: "<p>L'eau de rinçage est <strong>canalisée vers les évacuations</strong> existantes. Des protections sont installées au niveau des seuils et des joints de vitrage pour éviter les infiltrations. Si la loggia donne sur un balcon voisin en dessous, nous bâchons et contrôlons le débit pour prévenir toute coulure gênante.</p>",
        },
        {
          question:
            "Les balcons exposés aux retombées routières de l'A104 se salissent vite, quelles solutions proposez-vous ?",
          answer: "<p>Ces dépôts gras et chargés en particules fines nécessitent un dégraissant adapté avant le rinçage. Le traitement élimine le voile terne caractéristique de cette pollution. Nous pouvons recommander une fréquence d'entretien ajustée à cette exposition pour maintenir un résultat durable entre deux interventions.</p>",
        },
        {
          question:
            "Quelle pression et quels produits utilisez-vous pour un balcon carrelé en centre-bourg sans abîmer les joints ?",
          answer: "<p>La pression reste <strong>basse à moyenne</strong> pour préserver l'intégrité des joints. Le produit choisi agit sur les salissures organiques et les traces calcaires sans attaquer le carrelage ni décolorer les joints. Un brossage manuel complète l'action sur les zones les plus marquées avant un rinçage contrôlé.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour limiter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des zones à risque à Mitry-Mory, notamment les secteurs arborés proches du Parc des Corbeaux.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection homologuée sur tous les supports.",
        "Organisation pensée pour limiter les nuisances : bâchage des parties basses, évacuation discrète des déchets contaminés.",
      ],
      uniqueIntro: "<p>Les traces blanchâtres et les dépôts croûtés sont visibles sur de nombreux balcons à Mitry-Mory, particulièrement dans les secteurs proches du <strong>Parc des Corbeaux</strong> et aux abords de l'<strong>église Saint-Martin</strong>. Ces accumulations de fientes s'épaississent au fil des semaines, rendant l'espace inutilisable et dégageant une odeur persistante qui imprègne parfois le linge étendu.</p>\n<p class=\"mt-4\">Sur les corniches et garde-corps en métal ou béton des immeubles années 70-80, l'acidité des déjections attaque progressivement les revêtements. Les peintures s'écaillent, le métal se corrode, et le béton se dégrade par endroits. Retrouver un balcon propre permet de réutiliser cet espace extérieur sans appréhension, que ce soit pour y prendre l'air ou y installer quelques plantes.</p>\n<p class=\"mt-4\">La présence d'arbres et de zones vertes dans plusieurs quartiers favorise la nidification des pigeons et les retombées régulières sur les balcons exposés. Une intervention structurée inclut le diagnostic des points d'accumulation, le traitement des surfaces et des recommandations pour réduire les nuisances futures.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement de la zone</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes de protection. Le balcon est bâché pour éviter toute <strong>dispersion vers l'intérieur du logement</strong> ou chez les voisins du dessous.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières potentiellement contaminées.</p>\n\n<h3>Collecte et traitement des supports</h3>\n<p>Le ramassage des dépôts s'effectue manuellement, avec conditionnement en sacs étanches. Le sol, le garde-corps, les vitrages et les murs mitoyens sont ensuite nettoyés à l'eau sous pression contrôlée.</p>\n<p class=\"mt-4\">Un produit désinfectant virucide et bactéricide est appliqué sur l'ensemble des surfaces, avec respect du temps de contact nécessaire à l'élimination des agents pathogènes.</p>\n\n<h3>Rinçage et prévention du retour</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation sous 24 à 48 heures selon les conditions de séchage. Les déchets sont évacués dans leurs contenants étanches.</p>\n<p class=\"mt-4\">Des solutions de dissuasion peuvent être proposées : pics sur les rebords, filets de protection ou gel répulsif selon la configuration.</p>",
      specificChallenges: [
        "Balcons exposés aux <strong>retombées régulières</strong> près du Parc des Corbeaux et des grands arbres.",
        "Corniches et garde-corps métalliques fragilisés par l'acidité des fientes accumulées.",
        "Immeubles R+4 à R+8 nécessitant une <strong>gestion rigoureuse des écoulements</strong> vers les voisins.",
        "Odeurs tenaces imprégnant le linge et limitant l'usage de l'espace extérieur.",
        "Risque de réinfestation rapide sans mise en place de dispositifs de dissuasion.",
      ],
      faqAdditions: [
        {
          question:
            "Mon balcon proche du Parc des Corbeaux est couvert de fientes, y a-t-il un risque sanitaire réel ?",
          answer: "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Sur les balcons exposés aux zones arborées de Mitry-Mory, l'accumulation régulière justifie un assainissement rapide pour éliminer ces risques et retrouver un espace utilisable en toute sérénité.</p>",
        },
        {
          question:
            "Quel protocole et quels équipements utilisez-vous pour désinfecter un balcon souillé dans le secteur de l'église Saint-Martin ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes. La zone est confinée par bâchage avant humidification des fientes. Après collecte et nettoyage des supports, un désinfectant virucide homologué est appliqué avec respect du temps de contact pour garantir l'élimination des agents pathogènes.</p>",
        },
        {
          question:
            "Combien de temps le produit désinfectant reste-t-il efficace après le traitement ?",
          answer: "<p>Le désinfectant agit <strong>pendant l'intervention</strong> et élimine les bactéries et virus présents au moment de l'application. Son effet ne persiste pas dans le temps : si de nouvelles fientes s'accumulent, une nouvelle contamination est possible. C'est pourquoi nous recommandons des dispositifs anti-retour après le nettoyage.</p>",
        },
        {
          question:
            "Comment évacuez-vous les déchets contaminés d'un balcon situé dans une rue étroite du centre-bourg ?",
          answer: "<p>Les fientes et résidus sont <strong>conditionnés dans des sacs étanches</strong> dès la collecte. L'évacuation s'effectue discrètement via les parties communes, sans laisser de traces ni d'odeurs dans les escaliers. Le stationnement du véhicule est anticipé pour limiter la gêne dans les rues étroites de Mitry-Bourg.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile frais et sain.",
      whyUsBullets: [
        "Connaissance des habitations pavillonnaires de Mitry-le-Neuf et des contraintes d'accès fréquentes en étages.",
        "Détachage enzymatique adapté aux taches d'animaux et extraction textile sans trempage excessif.",
        "Intervention planifiée selon vos disponibilités, remise en service rapide même en configuration escalier.",
      ],
      uniqueIntro: "<p>Après quelques années d'usage quotidien, les textiles d'ameublement accumulent ce que l'œil ne voit plus : poussières fines, résidus alimentaires, traces d'animaux. Dans les pavillons du quartier des Acacias ou de Mitry-le-Neuf, les canapés familiaux encaissent le passage répété des enfants et des chiens. Les tapis de salon retiennent les particules ramenées de l'extérieur, tandis que les matelas absorbent transpiration et allergènes nuit après nuit.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur souplesse et leur fraîcheur. Les couleurs ternes retrouvent de l'éclat, les odeurs persistantes disparaissent, et le <strong>confort d'assise</strong> s'améliore sensiblement. Pour les foyers avec animaux domestiques, fréquents dans les zones pavillonnaires, c'est aussi une question de bien-être respiratoire au quotidien.</p>\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic textile préalable et un traitement par injection-extraction. Chaque support — coton, velours, synthétique — reçoit un soin calibré selon son épaisseur et sa sensibilité. Les consignes de séchage sont adaptées à la configuration du logement, y compris lorsque l'accès se fait par escalier sans ascenseur.</p>",
      uniqueDeepDive: "<h3>Textile assaini et odeurs neutralisées</h3>\n<p>Le résultat visé : des fibres débarrassées des salissures profondes, des taches atténuées ou supprimées, et une fraîcheur retrouvée sans résidu chimique perceptible. Pour y parvenir, chaque textile est d'abord identifié : nature du tissu, type de taches présentes, zones d'usure.</p>\n<p class=\"mt-4\">Un test discret sur une partie cachée permet de valider la méthode avant traitement complet.</p>\n\n<h3>Détachage ciblé puis injection-extraction</h3>\n<p>Les taches identifiées — café, urine, graisse — reçoivent un pré-traitement enzymatique adapté. Le nettoyage principal s'effectue ensuite par injection d'une solution nettoyante suivie d'une extraction immédiate. La pression et la température sont ajustées selon la fragilité du support.</p>\n<p class=\"mt-4\">Les tissus délicats comme le velours ou la laine bénéficient d'un réglage spécifique pour préserver leur texture.</p>\n\n<h3>Extraction maximale et consignes de séchage</h3>\n<p>L'eau résiduelle est extraite au maximum pour accélérer le séchage. Selon l'épaisseur du textile et la ventilation du logement, le délai de remise en service varie de quelques heures à une demi-journée.</p>\n<p class=\"mt-4\">Des conseils d'entretien et une fréquence de rafraîchissement sont communiqués en fin d'intervention.</p>",
      specificChallenges: [
        "Taches d'urine animale <strong>incrustées dans les fibres</strong> des canapés familiaux.",
        "Matelas épais difficiles à sécher dans les <strong>chambres peu ventilées</strong>.",
        "Accès par escalier étroit dans les pavillons anciens de Mitry-Bourg.",
        "Tapis à poils longs retenant poussières et allergènes accumulés.",
        "Textiles non déhoussables nécessitant un traitement sur place sans démontage.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un pavillon du quartier des Acacias, comment éliminez-vous acariens et allergènes d'un canapé en tissu ?",
          answer: "<p>L'injection-extraction déloge les acariens et leurs déjections logés en profondeur dans les fibres. La solution utilisée est ensuite intégralement aspirée, emportant allergènes et poussières fines. Le textile ressort assaini, plus sain pour les occupants sensibles aux allergies respiratoires.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'urine anciennes sur un tapis dans une maison avec chiens à Mitry-le-Neuf ?",
          answer: "<p>Un pré-traitement enzymatique cible les composants organiques de l'urine avant le nettoyage principal. L'extraction retire ensuite les résidus en profondeur. Les odeurs sont neutralisées à la source, pas simplement masquées. Le tapis retrouve une fraîcheur durable même après plusieurs mois de souillures.</p>",
        },
        {
          question:
            "Pour un canapé non déhoussable accessible uniquement par escalier à Mitry-Bourg, quelle méthode appliquez-vous ?",
          answer: "<p>Le matériel d'injection-extraction est conçu pour être transporté en <strong>configuration escalier</strong>. Le traitement s'effectue directement sur place, sans déplacer le canapé hors du logement. La quantité d'eau injectée reste contrôlée pour limiter le temps de séchage dans des pièces parfois peu aérées.</p>",
        },
        {
          question:
            "Combien de temps à l'avance faut-il réserver un rafraîchissement de canapé à Mitry-le-Neuf en fin de semaine ?",
          answer: "<p>Un délai de trois à cinq jours permet généralement de caler <strong>un créneau adapté</strong> à vos contraintes. En période chargée ou pour une intervention le samedi, anticiper d'une semaine facilite l'organisation. Nous confirmons le rendez-vous et la durée estimée après échange sur le type de textile à traiter.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts verts, et conseils d'entretien pour prolonger le résultat obtenu.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires de Mitry-Mory, souvent ombragées et exposées aux retombées de feuilles.",
        "Adaptation du traitement au support : dosage et pression ajustés pour bois, pierre ou carrelage extérieur.",
        "Déplacement du mobilier et protection des plantations inclus, intervention planifiée selon vos disponibilités.",
      ],
      uniqueIntro: "<p>Dans les secteurs pavillonnaires de <strong>Mitry-Bourg</strong> et les rez-de-jardin de la <strong>Villette-aux-Aulnes</strong>, les terrasses accumulent rapidement des dépôts verts dès les premiers mois d'automne. L'humidité ambiante et la proximité d'arbres favorisent l'apparition de mousse sur les joints, tandis que les feuilles mortes laissent des traces tenaces sur le carrelage ou le bois composite.</p>\n<p class=\"mt-4\">Ces surfaces deviennent glissantes après chaque pluie, peu engageantes pour profiter de l'extérieur. Les supports en pierre, bois composite ou carrelage réagissent différemment aux intempéries : certains se tachent en profondeur, d'autres verdissent en surface. Sans intervention adaptée, le revêtement se dégrade et perd son aspect d'origine plus vite que prévu.</p>\n<p class=\"mt-4\">L'usage familial — barbecue, mobilier de jardin, passages fréquents — ajoute des sollicitations que l'entretien courant ne suffit pas à compenser. Une intervention structurée permet de retrouver une terrasse propre et sécurisée, avec un traitement préventif pour espacer les prochains nettoyages.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Avant toute action, nous déplaçons ou bâchons le mobilier extérieur et les jardinières. Les menuiseries — baies vitrées, portes-fenêtres — sont protégées pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les gros dépôts : feuilles, terre, débris végétaux accumulés dans les angles et contre les murets.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Le produit est sélectionné selon le support identifié : dégraissant doux pour le carrelage, solution adaptée au bois composite, traitement spécifique pour la pierre naturelle. Le brossage — manuel ou mécanique — déloge les mousses et lichens incrustés.</p>\n<p class=\"mt-4\">Si le revêtement le permet, un passage <strong>haute pression contrôlée</strong> complète l'action sans endommager les joints ni les matériaux poreux.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau de rinçage est dirigée vers les points d'écoulement existants, en protégeant les plantations adjacentes. Après séchage, nous vous transmettons des recommandations d'entretien saisonnier pour limiter la réapparition des dépôts verts.</p>",
      specificChallenges: [
        "Mousse persistante sur les <strong>joints de carrelage</strong> exposés à l'ombre des arbres.",
        "Bois composite noirci par l'humidité et les dépôts organiques accumulés.",
        "Taches grasses autour des zones barbecue difficiles à éliminer sans produit adapté.",
        "Mobilier de jardin et jardinières à déplacer avant chaque intervention.",
        "Écoulement d'eau à gérer pour éviter les <strong>projections vers les voisins</strong> ou les plantations.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyer une terrasse en bois composite qui a noirci dans le quartier des Acacias ?",
          answer: "<p>Le bois composite noirci nécessite <strong>un produit spécifique</strong> qui décolle les micro-organismes sans attaquer les fibres. Nous appliquons une solution adaptée, suivie d'un brossage doux et d'un rinçage à pression modérée. Le résultat dépend de l'ancienneté des dépôts, mais l'aspect est généralement nettement amélioré dès la première intervention.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse préconisez-vous pour les terrasses ombragées avec lichens persistants ?",
          answer: "<p>Sur les zones ombragées de Mitry-Mory, nous utilisons <strong>un traitement anti-mousse</strong> à action prolongée après le nettoyage. Ce produit freine la réapparition des lichens pendant plusieurs mois. L'efficacité varie selon l'exposition et l'humidité ambiante, mais l'entretien devient moins fréquent qu'avec un simple lavage à l'eau.</p>",
        },
        {
          question:
            "Sur carrelage extérieur, quel produit utilisez-vous pour un démoussage efficace ?",
          answer: "<p>Nous sélectionnons un démoussant compatible avec le type de carrelage — grès cérame, terre cuite ou pierre reconstituée. La dilution est ajustée pour éviter les résidus et préserver les joints. Le rinçage final élimine toute trace de produit, sans nécessiter de passage haute pression agressif sur les surfaces fragiles.</p>",
        },
        {
          question:
            "Faut-il que je retire le mobilier avant votre intervention ou vous vous en chargez ?",
          answer: "<p>Nous déplaçons le mobilier de jardin et les jardinières avant de commencer, puis les remettons en place après séchage. Si certains éléments sont lourds ou fragiles, prévenez-nous à l'avance pour que nous prévoyions le temps nécessaire. Cette prestation est incluse dans l'intervention sur les terrasses pavillonnaires.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux finitions, avec coordination des accès et respect des délais pour une restitution ou une entrée sans accroc.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Mitry-Mory : pavillons rénovés, appartements en rotation locative, résidences récentes.",
        "Polyvalence sur tous types de sols et finitions, du parquet fragile au carrelage encrassé après chantier.",
        "Organisation calée sur vos contraintes : coordination avec agences, artisans ou gardiens, respect strict des délais de restitution.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement ou une maison impeccable quand les délais sont serrés et les contraintes multiples ? Dans les quartiers <strong>Cusino</strong> et <strong>Mitry-le-Neuf</strong>, la rotation locative liée à la proximité de l'aéroport impose souvent des remises en état rapides entre deux occupants. Que ce soit pour un état des lieux sortant ou une entrée dans les lieux, chaque surface doit être traitée sans improvisation.</p>\n<p class=\"mt-4\">Les logements présentent des <strong>sols variés</strong> : carrelage au rez-de-chaussée, parquet flottant aux étages, lino dans le locatif social. Chaque revêtement demande un traitement adapté pour éviter les traces ou les dégradations. Un nettoyage bien mené facilite la validation de l'état des lieux et évite les litiges sur la caution.</p>\n<p class=\"mt-4\">Les demandes concernent aussi les <strong>fins de chantier</strong> après rénovation de pavillons anciens ou les déménagements nécessitant un grand ménage. Dans chaque cas, l'intervention s'organise autour d'un diagnostic préalable, d'un planning clair et d'une coordination avec les autres intervenants si nécessaire.</p>",
      uniqueDeepDive: "<h3>Pièces de vie et chambres</h3>\n<p>Le dépoussiérage commence par les plafonds, murs et plinthes pour éliminer les résidus de travaux ou la poussière accumulée. Les sols sont ensuite aspirés puis lavés selon leur nature : eau tiède et produit neutre sur parquet flottant, détergent adapté sur carrelage.</p>\n<p class=\"mt-4\">Les interrupteurs, poignées et radiateurs sont nettoyés manuellement. Les placards sont vidés de leurs résidus et essuyés intérieurement.</p>\n\n<h3>Cuisine et pièces d'eau</h3>\n<p>Plans de travail, crédence et électroménager sont dégraissés. Les éviers et robinetteries retrouvent leur éclat après détartrage. En salle de bain, sanitaires, faïence et joints sont traités pour éliminer traces de calcaire et moisissures superficielles.</p>\n<p class=\"mt-4\">Les WC font l'objet d'une désinfection complète.</p>\n\n<h3>Finitions et contrôle</h3>\n<p>Les vitres intérieures sont nettoyées. Si des traces de peinture ou de colle subsistent après travaux, elles sont retirées avec précaution selon le support.</p>\n<p class=\"mt-4\">Un contrôle final vérifie <strong>chaque pièce</strong> avant aération du logement et remise éventuelle des clés.</p>",
      specificChallenges: [
        "Rotation locative rapide près des gares : délais courts entre deux occupants.",
        "Sols mixtes dans un même logement : <strong>adapter le traitement</strong> pièce par pièce.",
        "Traces de chantier sur pavillons anciens : peinture, enduit, poussière de plâtre.",
        "Coordination avec artisans encore présents ou agence immobilière pour la remise des clés.",
        "Accès parfois contraint dans les lotissements : stationnement et créneaux horaires à anticiper.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un état des lieux urgent proche de la gare Mitry-Claye, quel est votre délai d'intervention possible ?",
          answer: "<p>Nous intervenons selon la surface et la disponibilité. Pour les situations urgentes liées à une remise de clés imminente dans le secteur de la gare, nous adaptons notre planning pour proposer <strong>un créneau</strong> rapide après échange téléphonique.</p>",
        },
        {
          question:
            "Quel protocole appliquez-vous pour un nettoyage fin de chantier d'un pavillon à Mitry-Bourg ?",
          answer: "<p>Après travaux, nous commençons par <strong>l'évacuation des résidus grossiers</strong> puis le dépoussiérage complet des surfaces hautes. Les sols sont traités selon leur nature, les traces de peinture ou d'enduit retirées avec précaution. Les vitres et sanitaires sont nettoyés en dernier pour un rendu prêt à habiter.</p>",
        },
        {
          question:
            "Pour une remise de clés à une agence, quel niveau de propreté garantissez-vous pour l'appartement ?",
          answer: "<p>L'objectif est un logement validé sans réserve lors de l'état des lieux. Chaque pièce est contrôlée : sols sans traces, sanitaires détartrés, placards essuyés, vitres propres. Si un point pose problème après notre passage, nous intervenons pour une repasse ciblée.</p>",
        },
        {
          question:
            "Comment coordonnez-vous votre intervention avec les artisans présents dans un lotissement à Mitry-Mory ?",
          answer: "<p>Nous échangeons en amont sur le planning des travaux pour intervenir une fois les finitions terminées. Si des artisans sont encore sur place, nous adaptons notre progression pièce par pièce. L'accès au lotissement et le stationnement sont anticipés pour éviter tout blocage.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;