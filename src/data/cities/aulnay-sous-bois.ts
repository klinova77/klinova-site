import type { City } from "~/types/geo";

const city: City = {
  name: "Aulnay-sous-Bois",
  slug: "aulnay-sous-bois",
  postalCodes: ["93600"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Aulnay-sous-Bois pour l'entretien des parties communes, parkings et espaces extérieurs. Une organisation adaptée aux contraintes du secteur gare et des quartiers résidentiels du sud de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class=\"mt-4\">, <ul>, <li>, <strong>, <br>
  hubIntro: "<p>Au carrefour du RER B et de l'A3, entre le parc du Sausset et la zone O'Parinor, Aulnay-sous-Bois concentre des <strong>typologies de bâti très différentes</strong>. Klinova accompagne syndics, gestionnaires et particuliers avec une approche terrain adaptée à chaque secteur.</p>\n<p class=\"mt-4\">Propreté des communs, entretien des parkings, remise en état d'espaces extérieurs : nous coordonnons les interventions selon vos contraintes d'accès et vos horaires. Un interlocuteur unique, des comptes-rendus si besoin, et une réactivité calibrée sur le rythme de la commune.</p>\n<ul>\n  <li><strong>Connaissance du terrain :</strong> Nous distinguons les spécificités du secteur Rose-des-Vents, du centre-gare dense et des pavillons du sud pour adapter nos plannings et méthodes.</li>\n  <li><strong>Coordination simplifiée :</strong> Un seul contact pour organiser les accès, prévenir les gardiens et caler les créneaux sans perturber les occupants.</li>\n  <li><strong>Matériel adapté :</strong> Autolaveuses pour parkings souterrains, injection-extraction pour moquettes, nettoyeurs pression contrôlée pour extérieurs — selon le support et l'environnement.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution routière A1/A3</strong> : dépôts noirs sur balcons et façades exposées au nord.",
    "Halls ouverts dans les grands ensembles : encrassement rapide, passages fréquents.",
    "<strong>Parkings souterrains</strong> des résidences Centre-Gare souvent mal ventilés, traces d'humidité.",
    "Jours de marché (mardi, jeudi, dimanche) : <strong>stationnement et circulation restreints</strong> secteur gare.",
    "Résidences récentes avec digicodes et badges Vigik : coordination accès indispensable.",
    "Pavillons du sud avec jardins arborés : mousses et feuilles sur terrasses.",
  ],

  // Texte brut uniquement
  districts: [
    "Rose-des-Vents",
    "Vieux-Pays",
    "Centre-Gare",
    "Mitry-Ambourget",
    "Nonneville",
    "Chanteloup",
    "Balagny",
  ],
  nearbyCities: [
        "le-blanc-mesnil",
        "sevran",
        "villepinte",
        "livry-gargan",
        "bondy",
        "tremblay-en-france",
        "bobigny",
        "le-raincy",
        "noisy-le-sec",
        "villemomble"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Aulnay-sous-Bois",
    "Gare d'Aulnay-sous-Bois (RER B / Transilien K / T4)",
    "Centre commercial O'Parinor",
    "Parc du Sausset",
    "Parc Robert Ballanger",
    "Zone logistique Garonor",
  ],

  faq: [
    {
      question:
        "Comment gérez-vous les interventions dans les copropriétés avec gardien à Aulnay-sous-Bois ?",
      answer: "<p>Nous contactons le gardien ou le syndic en amont pour <strong>récupérer les accès</strong> (badges, codes) et convenir d'un créneau adapté. Le jour J, nous signalons notre présence et limitons la gêne dans les parties communes. Un compte-rendu peut être transmis après chaque passage si le gestionnaire le souhaite.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur la commune ?",
      answer: "<p>Oui, nous pouvons mobiliser une équipe selon la nature de la demande et la disponibilité du matériel requis. Pour les situations critiques — dégât des eaux, souillures importantes — nous <strong>priorisons le déplacement</strong> et adaptons le planning en conséquence.</p>",
    },
    {
      question:
        "Le stationnement est compliqué près de la gare d'Aulnay. Comment vous organisez-vous ?",
      answer: "<p>Nous anticipons les contraintes de stationnement en <strong>privilégiant les créneaux calmes</strong> (tôt le matin, début d'après-midi hors marché). Si nécessaire, nous utilisons des véhicules compacts ou organisons un déchargement rapide avant de stationner plus loin. L'objectif : intervenir sans bloquer l'accès aux résidents.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer: "<p>Systématiquement. Après échange téléphonique ou visite si la surface le justifie, nous transmettons un <strong>devis détaillé</strong> précisant le périmètre, les méthodes envisagées et le délai estimé. Aucune intervention ne démarre sans validation écrite de votre part.</p>",
    },
  ],



  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide selon la configuration des locaux.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et horaires des locaux tertiaires du secteur Garonor à Aulnay-sous-Bois.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours ras de bureaux.",
        "Interventions planifiées en dehors des heures de forte activité pour limiter la perturbation des équipes.",
      ],
      uniqueIntro: "<p>Les traces grises le long des circulations, les auréoles sombres devant les postes de travail : dans les bureaux et ateliers de la <strong>zone logistique Garonor</strong>, les moquettes absorbent quotidiennement poussières fines et résidus de semelles. Le trafic intense des équipes et visiteurs concentre l'encrassement sur les mêmes passages, rendant le grisaillement visible en quelques mois seulement.</p>\n<p class=\"mt-4\">Sur les <strong>dalles textiles d'open-spaces</strong> ou les tapis d'accueil en collectifs récents, cette accumulation ternit l'aspect général et peut retenir des odeurs. Un entretien adapté redonne de la netteté aux fibres, améliore le confort visuel des espaces de travail et prolonge la durée de vie du revêtement sans nécessiter de remplacement anticipé.</p>\n<p class=\"mt-4\">Les salissures liées au trafic poids lourds et aux poussières des axes A1/A3 s'infiltrent jusque dans les halls. Notre intervention s'organise en tenant compte des horaires de bureaux pour limiter la gêne, avec un diagnostic préalable du type de fibre et de l'état d'encrassement.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\n<p>Les couloirs et passages entre postes concentrent l'essentiel des dépôts. Après aspiration préalable, nous appliquons l'injection-extraction sur ces bandes de trafic avec plusieurs passes successives pour déloger les particules enfoncées dans les fibres.</p>\n\n<h3>Espaces de travail et postes fixes</h3>\n<p>Les zones <strong>sous bureaux et autour des sièges</strong> reçoivent un traitement ciblé. Les taches localisées (café, encre, traces alimentaires) font l'objet d'un détachage adapté au type de fibre avant le passage général.</p>\n<p class=\"mt-4\">Protection des plinthes et pieds de mobilier pendant l'opération.</p>\n\n<h3>Halls et entrées</h3>\n<p>Ces surfaces exposées aux apports extérieurs nécessitent une extraction renforcée. Nous contrôlons le taux d'humidité résiduelle et estimons le temps de séchage selon la ventilation disponible.</p>\n<p class=\"mt-4\">Consignes de non-piétinement transmises pour garantir un rendu homogène à la reprise d'activité.</p>",
      specificChallenges: [
        "<strong>Poussières noires des axes A1/A3</strong> incrustées dans les fibres des halls d'entrée.",
        "Dalles textiles de bureaux soumises à un <strong>passage quotidien intense</strong> dans la zone Garonor.",
        "Taches anciennes sur moquettes de couloirs nécessitant un détachage préalable ciblé.",
        "Séchage à coordonner avec les horaires d'occupation des open-spaces.",
        "Escaliers étroits dans certains immeubles du Centre-Gare compliquant l'acheminement du matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les bureaux de la zone Garonor, quelle méthode privilégier pour une moquette très encrassée : shampouinage classique ou injection-extraction ?",
          answer: "<p>L'injection-extraction convient mieux aux dalles textiles fortement sollicitées. Elle projette une solution nettoyante puis aspire immédiatement l'eau chargée de salissures. Le shampouinage laisse davantage de résidus et allonge le séchage, ce qui complique la reprise rapide dans des locaux à forte activité.</p>",
        },
        {
          question:
            "Sur les moquettes de couloirs proches de la gare d'Aulnay, comment traiter des taches anciennes sans risquer de décoller les bandes ?",
          answer: "<p>Nous identifions d'abord <strong>la nature de la tache</strong> et le type de colle utilisé. Un détachage localisé avec un produit adapté précède le nettoyage général. La pression et la température sont ajustées pour éviter toute infiltration sous les dalles, préservant ainsi la fixation au sol.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention quand l'accès se fait par des escaliers étroits d'immeubles du Centre-Gare sans monte-charge ?",
          answer: "<p>Le matériel est sélectionné en fonction de la configuration : machines compactes et flexibles d'aspiration portables. Nous prévoyons un temps de manutention supplémentaire et protégeons les marches pendant le passage. Le planning intègre cette contrainte pour respecter le délai annoncé.</p>",
        },
        {
          question:
            "Après un nettoyage de moquette en open-space à Garonor, combien de temps avant de pouvoir remarcher dessus ?",
          answer: "<p>Le séchage dépend de <strong>l'épaisseur des fibres</strong> et de la ventilation du local. En général, comptez entre 4 et 8 heures pour une moquette standard bien aérée. Nous pouvons intervenir en fin de journée afin que les bureaux soient praticables dès le lendemain matin.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et balisage sécurisé pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains de Rose-des-Vents et des contraintes d'accès propres aux grands ensembles.",
        "Autolaveuse professionnelle et dégraissants adaptés au béton brut comme aux revêtements résine.",
        "Rotation des véhicules planifiée avec le syndic, balisage sécurisé et reporting photographique transmis après chaque passage.",
      ],
      uniqueIntro: "<p>Dans les parkings souterrains du quartier Rose-des-Vents, les traces de pneus, les coulures d'huile et la poussière accumulée finissent par recouvrir l'ensemble des surfaces. Les <strong>rampes d'accès deviennent glissantes</strong>, les rigoles se bouchent progressivement, et l'aspect général du sous-sol se dégrade mois après mois. Les gestionnaires constatent des plaintes récurrentes liées à l'odeur de renfermé et aux taches persistantes sur les places de stationnement.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux sols béton brut ou enrobé une propreté visible dès la fin du chantier. Les résidences équipées de revêtements résine retrouvent leur aspect d'origine. Les copropriétaires et locataires circulent dans un espace assaini, ce qui réduit les réclamations auprès du syndic et valorise les parties communes.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec le gestionnaire pour tenir compte du trafic automobile local et des contraintes d'accès. Un balisage adapté sécurise chaque zone traitée, tandis que la collecte des eaux de lavage respecte les évacuations existantes.</p>",
      uniqueDeepDive: "<h3>Sol décrassé et rampes sécurisées</h3>\n<p>Le résultat attendu : un revêtement débarrassé des graisses incrustées, des rampes redevenues antidérapantes et des rigoles dégagées. Pour y parvenir, l'équipe commence par un balayage préalable afin d'éliminer les débris et poussières libres.</p>\n\n<h3>Traitement mécanisé et dégraissage ciblé</h3>\n<p>L'autolaveuse effectue plusieurs passes sur l'ensemble des surfaces. Un dégraissant adapté au type de revêtement — béton brut, enrobé ou résine — est appliqué sur les zones critiques : pieds de murs, angles morts et emplacements marqués par des coulures anciennes. Les rampes inclinées reçoivent un traitement spécifique pour restaurer leur adhérence.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont collectées et dirigées vers les évacuations prévues, sans rejet sauvage. Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé. Le gestionnaire reçoit un compte-rendu avec recommandations de fréquence selon le trafic observé.</p>",
      specificChallenges: [
        "<strong>Rampes d'accès glissantes</strong> dans les sous-sols de la Cité des 3000, nécessitant un traitement antidérapant.",
        "Rigoles d'évacuation souvent <strong>obstruées par les résidus de pneus</strong> et la poussière accumulée.",
        "Coordination avec les résidents pour organiser la rotation des véhicules sans bloquer l'accès.",
        "Gestion stricte des eaux de lavage pour respecter les évacuations existantes en sous-sol.",
        "Taches d'huile anciennes incrustées sur béton brut, demandant un dégraissage ciblé.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un parking souterrain à Rose-des-Vents, quelle méthode privilégiez-vous entre lavage haute pression et décrassage chimique ?",
          answer: "<p>Dans les sous-sols de la Cité des 3000, nous combinons généralement les deux approches. L'autolaveuse traite les grandes surfaces tandis qu'un <strong>dégraissant ciblé agit</strong> sur les zones encrassées. La haute pression reste limitée aux rampes et rigoles pour éviter les projections excessives en espace confiné.</p>",
        },
        {
          question:
            "Comment retirez-vous les taches d'huile anciennes sur les rampes d'accès des parkings résidentiels ?",
          answer: "<p>Les coulures incrustées reçoivent un dégraissant professionnel appliqué en temps de pause suffisant. L'autolaveuse passe ensuite pour extraire les résidus dissous. Sur les rampes inclinées, nous insistons sur le rinçage pour restaurer l'adhérence du revêtement et limiter tout risque de glissance.</p>",
        },
        {
          question:
            "Quelle est votre procédure pour la collecte des eaux de lavage dans un parking souterrain ?",
          answer: "<p>Les eaux usées sont dirigées vers les regards et rigoles existants. Nous vérifions leur bon écoulement avant de commencer et adaptons le débit de l'autolaveuse pour éviter toute stagnation. Aucun rejet sauvage n'est effectué, conformément aux règles d'évacuation en copropriété.</p>",
        },
        {
          question:
            "Quels horaires proposez-vous pour intervenir sans gêner la rotation des véhicules en résidence dense ?",
          answer: "<p>Nous privilégions les créneaux en journée creuse ou en soirée, selon les habitudes des résidents. Le syndic reçoit un planning prévisionnel pour informer les occupants. Un <strong>balisage sécurisé délimite les zones</strong> en cours de traitement afin de maintenir la circulation sur les emplacements disponibles.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Aulnay-sous-Bois, avec traitement adapté au support, protection des voisins contre les coulures et séchage contrôlé pour profiter rapidement de votre extérieur.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons orientés vers les axes routiers ou proches des espaces verts du secteur.",
        "Pression ajustée selon le support, produits adaptés au béton comme au carrelage pour préserver joints et revêtements.",
        "Protection systématique des étages inférieurs et des façades, gestion de l'eau maîtrisée du début à la fin.",
      ],
      uniqueIntro: "<p>Le long de la Route de Bondy, les balcons accumulent une couche de suie et de poussières routières qui ternit les surfaces en quelques semaines. Ce voile grisâtre <strong>s'incruste dans les joints</strong>, colle aux garde-corps et finit par rendre l'espace inutilisable. On repousse le moment d'y poser une table ou d'y installer quelques plantes, faute de pouvoir s'y sentir à l'aise.</p>\n<p class=\"mt-4\">Retrouver un balcon propre change la perception du logement. Sur les supports en béton des grands ensembles comme sur le carrelage des résidences plus récentes, un nettoyage adapté redonne de la clarté aux surfaces et supprime cette sensation de négligence. L'espace redevient un prolongement du salon, utilisable pour prendre l'air ou recevoir.</p>\n<p class=\"mt-4\">L'intervention tient compte des contraintes d'accès en hauteur et de la gestion des eaux de lavage. Nous protégeons les façades et les balcons voisins avant de commencer, pour éviter toute coulure indésirable vers les étages inférieurs.</p>",
      uniqueDeepDive: "<h3>Dépôts noirs et poussières incrustées</h3>\n<p>Les particules routières adhèrent aux surfaces poreuses et aux joints. Nous commençons par retirer les gros débris, puis appliquons un produit désincrustant adapté au béton ou au carrelage. Le brossage manuel déloge les salissures sans agresser le support.</p>\n\n<h3>Traces vertes et résidus organiques</h3>\n<p>Les mousses et dépôts végétaux s'installent dans les zones ombragées ou humides. Un traitement ciblé les élimine avant rinçage. La pression reste contrôlée pour préserver l'étanchéité des joints, surtout sur les balcons anciens.</p>\n\n<h3>Garde-corps, vitrages et finitions</h3>\n<p>Les <strong>éléments métalliques et les vitres</strong> reçoivent un nettoyage séparé pour éviter les traces. Nous vérifions l'évacuation de l'eau, protégeons les plantes et le mobilier déplacés, puis laissons sécher naturellement. Vous récupérez un espace prêt à l'usage, avec quelques conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "<strong>Suie routière déposée par le trafic</strong> de la D115 qui noircit les surfaces en quelques semaines.",
        "Joints poreux sur balcons béton des grands ensembles, sensibles aux produits trop agressifs.",
        "Gestion des eaux de rinçage pour éviter <strong>les coulures vers les balcons</strong> des voisins du dessous.",
        "Mobilier et plantes à déplacer ou protéger avant toute intervention.",
        "Accès parfois limité dans les immeubles anciens sans monte-charge pour le matériel.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les balcons en béton très noircis le long de la Route de Bondy, quelles méthodes utilisez-vous pour nettoyer sans abîmer les joints ?",
          answer: "<p>Nous appliquons un produit désincrustant adapté aux surfaces poreuses, suivi d'un brossage manuel. Le rinçage s'effectue à <strong>pression modérée</strong> pour ne pas creuser les joints fragilisés par la pollution. Cette approche retire la suie sans endommager l'étanchéité du support.</p>",
        },
        {
          question:
            "Comment éliminez-vous les dépôts verts et la mousse sur les balcons proches du Parc Ballanger sans détériorer le revêtement ?",
          answer: "<p>Un traitement anti-mousse est appliqué sur les zones concernées avant brossage. Le produit agit sur les végétaux sans attaquer le béton ni le carrelage. Le rinçage contrôlé évacue les résidus, et nous conseillons un traitement préventif si l'exposition reste humide.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des eaux de lavage pour éviter les coulures vers les étages inférieurs ?",
          answer: "<p>Nous installons des protections sur les rebords et orientons l'écoulement vers les évacuations existantes. En l'absence de siphon, nous aspirons l'excédent au fur et à mesure. Cette organisation évite les traces sur les façades et les réclamations du voisinage.</p>",
        },
        {
          question:
            "Pour un balcon carrelé en résidence récente, quelles précautions prenez-vous concernant la pression de nettoyage ?",
          answer: "<p>La pression est réglée en fonction de <strong>la largeur des joints</strong> et de l'état du carrelage. Sur les poses récentes, nous privilégions un jet diffus qui nettoie sans déchausser les joints. Les plinthes et seuils de porte sont protégés pour éviter toute infiltration.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour limiter le retour des oiseaux.",
      whyUsBullets: [
        "Connaissance des zones à risque autour du Parc du Sausset et des immeubles exposés aux colonies de pigeons.",
        "Protocole complet avec EPI adaptés, confinement de la zone et désinfection virucide après collecte des fientes.",
        "Évacuation des déchets en sacs étanches et coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons situés à proximité du <strong>Parc du Sausset</strong> accumulent des dépôts de fientes qui s'incrustent dans le béton et les joints. L'odeur devient tenace, le linge étendu se salit, et l'espace extérieur perd toute utilité. Les pigeons reviennent aux mêmes endroits, attirés par les corniches et garde-corps qui leur servent de perchoirs réguliers.</p>\n<p class=\"mt-4\">Un assainissement adapté redonne un balcon utilisable : sol débarrassé des croûtes sèches, garde-corps en métal ou béton décontaminés, odeurs neutralisées. Les supports anciens, fréquents dans les immeubles des années 70-80 à Aulnay-sous-Bois, présentent souvent des porosités où les fientes s'accrochent. Sans traitement, la corrosion s'installe et les taches deviennent permanentes.</p>\n<p class=\"mt-4\">Notre intervention structure chaque étape : diagnostic de l'ampleur des dépôts, protection de l'intérieur du logement, humidification préalable pour éviter l'envol de particules, puis désinfection complète. Les déchets sont conditionnés en sacs étanches et évacués. Si nécessaire, nous proposons la pose de dispositifs dissuasifs pour réduire les retours.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est un espace extérieur débarrassé de toute trace organique, avec des supports traités par un produit virucide homologué. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les fientes. Le balcon redevient utilisable après un délai d'aération de quelques heures.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>Avant toute manipulation, la zone est bâchée pour protéger l'intérieur du logement et limiter les nuisances vers le voisinage. Les fientes sont <strong>humidifiées pour neutraliser les poussières</strong> contaminées. L'équipe porte FFP2, gants, lunettes et combinaison jetable. Le ramassage s'effectue méthodiquement : sol, garde-corps, vitrages, murs mitoyens si concernés.</p>\n\n<h3>Rinçage et options de prévention</h3>\n<p>Un rinçage final élimine les résidus de produit. Les déchets sont conditionnés en sacs étanches puis évacués. Selon la configuration du balcon, nous pouvons installer des pics anti-pigeons sur les rebords ou corniches, ou recommander la pose d'un filet de protection pour les espaces les plus exposés.</p>",
      specificChallenges: [
        "Balcons exposés aux oiseaux près du Parc du Sausset : <strong>accumulation rapide de fientes</strong> sur garde-corps et sols.",
        "Supports en béton poreux des immeubles anciens : incrustation profonde nécessitant humidification et brossage.",
        "Corniches et rebords métalliques : <strong>risque de corrosion</strong> si les dépôts restent en place plusieurs semaines.",
        "Odeurs persistantes en période chaude : désinfection indispensable pour neutraliser les résidus organiques.",
        "Coordination voisinage obligatoire : bâchage et gestion des eaux de rinçage pour éviter les projections.",
      ],
      faqAdditions: [
        {
          question:
            "Des fientes fraîches s'accumulent sur mon balcon proche du Parc du Sausset : pouvez-vous intervenir rapidement pour sécuriser la zone ?",
          answer: "<p>Nous organisons des interventions selon la disponibilité. En cas d'accumulation importante ou de présence d'enfants, nous priorisons le dégrossissement et la désinfection des zones de contact direct. Le balcon est ensuite protégé en attendant un traitement complet si nécessaire.</p>",
        },
        {
          question:
            "Quel équipement utilisez-vous pour retirer des fientes séchées sur les corniches en pierre du quartier Vieux-Pays ?",
          answer: "<p>L'équipe porte FFP2, gants nitrile, lunettes de protection et combinaison jetable. Les fientes sèches sont d'abord humidifiées pour éviter l'envol de particules contaminées. Le brossage s'effectue avec des outils adaptés à la pierre, sans abrasion excessive. La désinfection suit immédiatement le ramassage.</p>",
        },
        {
          question:
            "Après le nettoyage des fientes sur mon balcon, combien de temps dois-je attendre avant de réutiliser l'espace ?",
          answer: "<p>Le produit désinfectant nécessite un temps de contact d'environ quinze minutes pour agir. Après rinçage et aération, le balcon est généralement utilisable sous deux à trois heures. Nous vous indiquons le délai exact selon le produit appliqué et les conditions météo du jour.</p>",
        },
        {
          question:
            "Comment procédez-vous pour l'évacuation des déchets issus du nettoyage de fientes de pigeons à Aulnay-sous-Bois ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des <strong>sacs étanches fermés</strong> sur place. Nous les évacuons avec notre matériel sans laisser de déchets dans les parties communes ou sur la voie publique. Le bâchage de protection est également replié et emporté à la fin de l’intervention.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des salissures incrustées et séchage maîtrisé pour retrouver un textile propre et agréable au quotidien.",
      whyUsBullets: [
        "Connaissance des intérieurs résidentiels d'Aulnay-sous-Bois, du pavillonnaire de Nonneville aux appartements proches de la gare.",
        "Détachage enzymatique adapté à chaque fibre, extraction puissante et contrôle du séchage pour éviter les auréoles.",
        "Organisation des créneaux selon vos disponibilités et gestion du stationnement pour une intervention sans contrainte.",
      ],
      uniqueIntro: "<p>Comment préserver la propreté d'un canapé quand les enfants y prennent leur goûter et que le chien s'y installe chaque soir ? Dans les pavillons du quartier Nonneville, les textiles d'assise accumulent rapidement <strong>taches alimentaires, poils et odeurs</strong> tenaces. Les tentatives de détachage maison laissent souvent des auréoles ou repoussent la saleté en profondeur sans vraiment l'éliminer.</p>\n<p class=\"mt-4\">Un nettoyage professionnel change la donne : fibres débarrassées des résidus incrustés, couleurs ravivées, odeurs neutralisées. Sur les canapés tissu non déhoussables ou les tapis en velours ras fréquents dans les intérieurs résidentiels d'Aulnay-sous-Bois, l'injection-extraction retire ce qu'un aspirateur classique ne peut atteindre. Le confort retrouvé se ressent dès les premières heures après séchage.</p>\n<p class=\"mt-4\">Chaque intervention commence par un diagnostic textile pour adapter la méthode au support. La rotation locative importante près de la gare génère aussi des demandes de remise en état rapide entre deux occupants. Nous organisons nos passages en tenant compte des contraintes de stationnement propres au secteur.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus piégés dans les fibres. Les taches de café, d'urine animale ou de graisse disparaissent, les odeurs sont neutralisées. Le textile retrouve souplesse et fraîcheur.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute action, nous identifions le type de tissu : coton, laine, synthétique ou velours. Un test discret sur zone cachée valide la compatibilité du traitement. Les taches tenaces reçoivent un détachant enzymatique adapté qui décolle les résidus sans agresser la fibre.</p>\n\n<h3>Injection-extraction et séchage maîtrisé</h3>\n<p>La solution nettoyante est injectée en profondeur puis immédiatement aspirée avec les salissures dissoutes. La pression et la température sont ajustées selon la fragilité du support. <strong>L'extraction maximale réduit le temps de séchage</strong>. Nous indiquons le délai de remise en service selon l'épaisseur du textile et l'aération disponible, généralement quelques heures en été, davantage en hiver.</p>",
      specificChallenges: [
        "<strong>Taches d'urine animale</strong> fréquentes dans les foyers avec chiens ou chats, nécessitant un traitement enzymatique.",
        "Canapés tissu non déhoussables impossibles à nettoyer en machine, seule l'injection-extraction est efficace.",
        "Stationnement compliqué près de la gare d'Aulnay, anticipation nécessaire pour le matériel.",
        "Tapis laine ou velours ras <strong>sensibles aux excès d'eau</strong>, pression et température à ajuster.",
        "Délais de séchage variables selon la saison et l'aération du logement.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé tissu non déhoussable dans une maison de Nonneville, quelle méthode utilisez-vous ?",
          answer: "<p>Nous procédons par injection-extraction : une solution nettoyante est projetée dans les fibres puis immédiatement aspirée avec les salissures. La pression est adaptée au tissu pour éviter toute déformation. Cette technique retire les résidus profonds qu'un simple shampouinage de surface ne peut atteindre.</p>",
        },
        {
          question:
            "Comment traitez-vous des taches d'urine d'animaux incrustées sur un tapis laine sans risquer de décoloration ?",
          answer: "<p>Un détachant enzymatique est appliqué localement pour décomposer les cristaux d'urine. Nous testons d'abord sur <strong>une zone cachée</strong> pour vérifier la tenue des couleurs. L'extraction qui suit retire le produit et les résidus. Les odeurs sont neutralisées sans recourir à des agents blanchissants agressifs.</p>",
        },
        {
          question:
            "Si le stationnement est difficile près de la gare d'Aulnay-sous-Bois, comment organisez-vous l'intervention ?",
          answer: "<p>Nous convenons d'un créneau où le stationnement est plus accessible ou prévoyons un point de dépose rapide. Le matériel est compact et transportable sur quelques dizaines de mètres. En cas de contrainte forte, nous adaptons l'horaire pour limiter la gêne et garantir une installation rapide.</p>",
        },
        {
          question:
            "Peut-on espérer un ravivage visible des couleurs d'un tapis laine après un nettoyage professionnel ?",
          answer: "<p>Oui, l'extraction des <strong>poussières et résidus gras</strong> redonne de l'éclat aux fibres. Les couleurs ternies par l'accumulation de salissures réapparaissent souvent de façon nette. Le résultat dépend de l'état initial et de l'usure du textile, mais l'amélioration est généralement perceptible dès le séchage terminé.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support — carrelage, dalles ou bois — pour éliminer mousses, dépôts verts et taches tenaces, et retrouver un espace extérieur agréable.",
      whyUsBullets: [
        "Connaissance des terrasses aulnaysiennes exposées aux parcs et à l'humidité du secteur pavillonnaire sud.",
        "Maîtrise des techniques selon le support : pression ajustée, produits compatibles bois, pierre ou carrelage.",
        "Organisation soignée : protection du mobilier, gestion de l'eau, intervention sans gêne pour le voisinage.",
      ],
      uniqueIntro: "<p>Les traces vertes et les dépôts noirâtres s'installent progressivement sur les terrasses du <strong>quartier du Vieux-Pays</strong>, où les maisons anciennes disposent souvent de dalles ou margelles exposées à l'humidité. La mousse gagne du terrain chaque saison, rendant le sol glissant et peu engageant pour profiter de l'extérieur.</p>\n<p class=\"mt-4\">Sur les supports variés que l'on trouve à Aulnay-sous-Bois — carrelage, dalles gravillonnées, terrasses bois — la pollution atmosphérique accentue le noircissement et la décoloration. Sans entretien adapté, les joints se fragilisent et le revêtement perd son aspect d'origine, ce qui limite l'usage de cet espace de vie.</p>\n<p class=\"mt-4\">L'exposition végétale liée à la proximité des parcs favorise l'accumulation de feuilles mortes et le développement des lichens. Nous intervenons avec un diagnostic préalable du support et des contraintes d'accès — rangement du mobilier, protection des plantations — pour un traitement ciblé qui respecte vos matériaux.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous commençons par déplacer ou bâcher le mobilier extérieur et les jardinières. Les menuiseries — baies vitrées, portes — sont protégées pour éviter les projections. Un balayage préalable élimine les gros dépôts : feuilles, terre accumulée, débris végétaux.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Selon la nature de votre terrasse, <strong>nous appliquons un produit spécifique</strong> : détergent doux pour le bois, désincrustant pour les dalles gravillonnées, nettoyant neutre pour le carrelage. Le brossage — manuel ou mécanique — déloge les mousses et lichens incrustés. Si le support le permet, une haute pression contrôlée complète le travail sans fragiliser les joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est évacuée vers les points d'écoulement existants, en préservant vos plantations. Si nécessaire, nous appliquons un traitement anti-mousse préventif pour ralentir la réapparition des dépôts verts. Vous recevez des recommandations d'entretien saisonnier adaptées à votre configuration.</p>",
      specificChallenges: [
        "Mousses et lichens favorisés par <strong>l'ombre des arbres</strong> et l'humidité ambiante du secteur.",
        "Dalles gravillonnées sensibles à la haute pression : traitement adapté pour préserver les joints.",
        "Terrasses bois <strong>noircies par la pollution</strong> des axes routiers proches nécessitant un nettoyage doux.",
        "Accès parfois uniquement par l'intérieur de la maison dans les jardins mitoyens.",
        "Mobilier et plantes à déplacer ou protéger avant toute intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment éliminez-vous la mousse et les lichens sur une terrasse en dalles du quartier du Vieux-Pays sans abîmer la pierre ?",
          answer: "<p>Nous appliquons un produit désincrustant adapté aux dalles poreuses, suivi d'un brossage mécanique. La haute pression n'est utilisée qu'à <strong>faible intensité</strong> pour préserver les joints. Un traitement anti-mousse peut être appliqué en fin d'intervention pour retarder la réapparition des dépôts verts.</p>",
        },
        {
          question:
            "Sur une terrasse bois noircie par la pollution, quels traitements conseillez-vous pour nettoyer et protéger le revêtement ?",
          answer: "<p>Le bois nécessite un nettoyage doux avec un détergent spécifique, sans haute pression agressive qui ouvrirait les fibres. Après séchage, nous pouvons recommander l'application d'un saturateur ou d'une huile protectrice pour limiter le grisaillement et faciliter l'entretien futur.</p>",
        },
        {
          question:
            "Quel produit anti-mousse appliquez-vous sur des dalles gravillonnées exposées aux feuilles et à l'humidité des parcs voisins ?",
          answer: "<p>Nous utilisons un anti-mousse à action progressive, compatible avec les surfaces minérales poreuses. Ce traitement agit sur plusieurs semaines et limite la repousse sans agresser le support. Son efficacité dépend de l'exposition : les zones très ombragées nécessitent un renouvellement plus fréquent.</p>",
        },
        {
          question:
            "Pour une petite terrasse avec margelles, préférez-vous le karcher ou un nettoyage doux pour préserver les joints et la pierre ?",
          answer: "<p>Sur les margelles et pierres naturelles, nous privilégions le <strong>nettoyage doux avec brossage</strong> manuel ou mécanique à basse pression. Le karcher haute pression est réservé aux surfaces béton ou carrelage résistant. Cette approche évite de creuser les joints et de fragiliser les matériaux poreux.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Remise en propreté complète de votre logement à Aulnay-sous-Bois, avec traitement de chaque pièce et coordination adaptée aux délais serrés des états des lieux ou fins de chantier.",
      whyUsBullets: [
        "Connaissance des typologies locatives du secteur Gare et des attentes des agences immobilières d'Aulnay-sous-Bois.",
        "Polyvalence sur tous types de sols et finitions, du parquet ancien aux carrelages récents.",
        "Organisation calée sur vos délais, avec coordination directe auprès des gestionnaires ou propriétaires.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou une location qui s'achève, un logement accumule poussières fines, traces de passage et résidus tenaces. Dans le secteur du <strong>Boulevard de Strasbourg</strong> et autour de la gare, la rotation locative soutenue impose des remises en état rapides entre deux occupants, souvent avec des délais de quelques jours seulement.</p>\n<p class=\"mt-4\">Un appartement correctement préparé facilite l'état des lieux, évite les litiges sur le dépôt de garantie et permet une entrée sereine pour le prochain locataire. Les <strong>T2 et T3 en copropriété</strong>, fréquents dans ce secteur, présentent des sols variés — carrelage, parquet ancien ou lino — qui demandent chacun un traitement adapté pour retrouver un aspect soigné.</p>\n<p class=\"mt-4\">L'intervention s'organise en amont avec les agences immobilières locales ou directement avec le propriétaire. Nous définissons ensemble le périmètre exact : pièces d'eau, vitres intérieures, placards, finitions. Un planning précis permet de respecter la date de remise des clés sans improvisation.</p>",
      uniqueDeepDive: "<h3>Logement prêt à la remise des clés</h3>\n<p>L'objectif est un appartement ou une maison dans lequel chaque surface a été traitée : sols lavés, sanitaires désinfectés, vitres intérieures nettoyées, placards vidés et essuyés. Le résultat attendu correspond aux exigences d'un état des lieux de sortie ou d'une entrée locataire.</p>\n\n<h3>Diagnostic et séquençage des tâches</h3>\n<p>Avant l'intervention, nous identifions les zones prioritaires : <strong>résidus de chantier (enduit, peinture)</strong> ou salissures d'usage courant. Les pièces d'eau et la cuisine sont traitées en premier pour garantir l'hygiène. Les sols sont aspirés puis lavés selon leur nature — carrelage, parquet ou lino.</p>\n\n<h3>Coordination et contrôle final</h3>\n<p>Le planning est calé sur vos contraintes : disponibilité du logement, passage de l'agence, date de signature. Une vérification pièce par pièce clôture l'intervention. En cas de retouche nécessaire, nous intervenons avant la remise effective des clés.</p>",
      specificChallenges: [
        "Délais serrés entre deux locataires dans le secteur Gare, parfois moins de 48 heures.",
        "<strong>Résidus de travaux (enduit, colle)</strong> fréquents dans les pavillons anciens du Vieux-Pays.",
        "Sols variés dans un même logement : carrelage cuisine, parquet séjour, lino chambres.",
        "Coordination avec plusieurs interlocuteurs : agence, propriétaire, artisans en fin de chantier.",
        "Stationnement limité les jours de marché autour du Boulevard de Strasbourg.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans le Vieux-Pays, quels types de traces traitez-vous en priorité ?",
          answer: "<p>Nous ciblons d'abord les résidus d'enduit et de peinture sur les sols et menuiseries, puis les projections de colle ou de joint autour des sanitaires. Les <strong>poussières fines de plâtre</strong>, fréquentes après rénovation de maisons anciennes, sont aspirées avant tout lavage pour éviter de les étaler.</p>",
        },
        {
          question:
            "Quel est le mode de tarification pour un ménage état des lieux d'un T2 proche du Boulevard de Strasbourg ?",
          answer: "<p>Le devis est établi selon la surface, l'état initial du logement et les prestations demandées (vitres, placards, électroménager). Un T2 standard avec sols et pièces d'eau représente une intervention de deux à trois heures. Nous transmettons un chiffrage détaillé avant validation.</p>",
        },
        {
          question:
            "Comment coordonnez-vous les interventions avec les agences immobilières pour les rotations rapides près de la gare ?",
          answer: "<p>Nous calons le planning directement avec le gestionnaire : date de sortie du locataire, créneau disponible, heure de l'état des lieux entrant. Un contact unique côté Klinova facilite les ajustements de dernière minute si le planning se décale de quelques heures.</p>",
        },
        {
          question:
            "En cas  d'urgence après un dégât des eaux à Aulnay-sous-Bois, quel délai d'intervention proposez-vous ?",
          answer: "<p>Selon la disponibilité de nos équipes, nous pouvons intervenir pour un sinistre localisé. Le diagnostic initial permet d'évaluer <strong>l'ampleur des dégâts</strong> et de définir les priorités : extraction de l'eau résiduelle, séchage des sols, nettoyage des surfaces touchées.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;