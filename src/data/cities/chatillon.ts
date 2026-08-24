import type { City } from "~/types/geo";

const city: City = {
  name: "Châtillon",
  slug: "chatillon",
  postalCodes: ["92320"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Châtillon pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée au tissu mixte de la ville, entre résidences des Sablons et immeubles tertiaires proches du métro.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Terminus du Métro 13 et siège de l'ONERA, sur l'axe de la Coulée Verte : Châtillon concentre des <strong>flux quotidiens importants</strong> entre habitat collectif et pôles d'activité. Klinova s'appuie sur cette connaissance du terrain pour coordonner les interventions selon les contraintes de chaque secteur.</p>\n<p class=\"mt-4\">Nos équipes assurent la propreté des halls, le décrassage des parkings et l'entretien des espaces extérieurs. Un interlocuteur unique centralise les demandes, planifie les passages et transmet les comptes-rendus aux gestionnaires qui le souhaitent.</p>\n<ul>\n  <li><strong>Planification adaptée aux accès :</strong> Coordination avec gardiens et syndics pour les résidences équipées Vigik, créneaux définis selon les contraintes de stationnement en zone rouge.</li>\n  <li><strong>Matériel dimensionné au site :</strong> Autolaveuses compactes pour parkings étroits, équipements portables pour les cages d'escalier des immeubles anciens du centre.</li>\n  <li><strong>Suivi centralisé :</strong> Un référent unique pour les copropriétés et entreprises, reporting disponible après chaque intervention si demandé.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Flux piétons intenses</strong> autour du terminus Métro 13 : halls et parties communes sollicités matin et soir.",
    "Parkings souterrains fréquents dans les résidences des Sablons et de Vauban, souvent encrassés par les hydrocarbures.",
    "<strong>Stationnement contraint</strong> en zone rouge/orange : coordination nécessaire pour les interventions en journée.",
    "Immeubles anciens du Vieux Châtillon avec escaliers étroits et accès limités pour le matériel.",
    "Pollution noire sur les façades et balcons exposés à l'axe D906 (Avenue de Verdun).",
    "Résidences récentes de la <strong>ZAC des Arues</strong> avec exigences de finition élevées."
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Vieux Châtillon",
    "Les Sablons",
    "Les Roissys",
    "Vauban",
    "Aérospatiale",
    "ZAC des Arues",
  ],
  nearbyCities: [
        "fontenay-aux-roses",
        "malakoff",
        "bagneux",
        "vanves",
        "montrouge",
        "clamart",
        "issy-les-moulineaux",
        "sceaux",
        "arcueil",
        "cachan"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Châtillon",
    "Métro Châtillon-Montrouge (Ligne 13)",
    "Orange Gardens",
    "ONERA (Avenue de la Division Leclerc)",
    "Parc des Sarments",
    "ZAC des Arues",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment organisez-vous les interventions dans les résidences avec accès badge Vigik ?",
      answer: "<p>Nous récupérons les <strong>autorisations d'accès</strong> en amont auprès du syndic ou du gardien. Les créneaux sont calés pour éviter les heures de passage des résidents. À Châtillon, la plupart des immeubles des Sablons et du centre fonctionnent avec ce système : nous adaptons notre planning en conséquence.</p>",
    },
    {
      question: "Intervenez-vous en urgence sur la commune ?",
      answer: "<p>Oui, nous pouvons mobiliser une équipe selon la nature de la demande. Pour les situations nécessitant une <strong>réponse rapide</strong> (dégât des eaux, souillure accidentelle), nous priorisons les créneaux disponibles et confirmons le délai dès réception de la demande.</p>",
    },
    {
      question: "Le stationnement est compliqué près du métro, comment gérez-vous ça ?",
      answer: "<p>Nous repérons les <strong>zones de dépose</strong> autorisées avant chaque intervention. Près du terminus Châtillon-Montrouge, nos véhicules utilisent les emplacements livraison ou les accès parkings souterrains quand c'est possible. Les équipes arrivent équipées pour limiter les allers-retours.</p>",
    },
    {
      question: "Proposez-vous un contrat d'entretien régulier pour les copropriétés ?",
      answer: "<p>Oui, nous établissons des <strong>programmes d'entretien périodique</strong> adaptés à la fréquentation et au type de bâti. La fréquence (hebdomadaire, mensuelle, trimestrielle) est définie avec le syndic ou le conseil syndical selon les besoins constatés sur le terrain.</p>",
    },
  ],

 

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans les fibres textiles, traitement des zones de passage et séchage contrôlé pour une remise en service rapide de vos espaces professionnels ou résidentiels.",
      whyUsBullets: [
        "Connaissance des configurations tertiaires autour du pôle Orange Gardens et des résidences du secteur Sablons.",
        "Matériel d'injection-extraction adapté aux dalles textiles comme aux moquettes velours épaisses.",
        "Interventions planifiées en dehors des heures de bureau ou en coordination avec les occupants.",
      ],
      uniqueIntro: "<p>Les traces grises sur les dalles textiles des bureaux proches d'<strong>Orange Gardens</strong> apparaissent souvent dès les premiers mois d'exploitation. Dans les couloirs à fort passage, les fibres retiennent poussières fines et résidus de semelles, créant un voile terne difficile à éliminer par simple aspiration. Les halls d'accueil et salles de réunion perdent progressivement leur aspect initial sans intervention adaptée.</p>\n<p class=\"mt-4\">Un ravivage régulier redonne de la tenue aux revêtements et prolonge leur durée de vie. Sur les <strong>dalles textiles et moquettes velours</strong> présentes dans les petits collectifs ou locaux tertiaires, le détachage ciblé élimine les marques de café, tanin ou graisses avant qu'elles ne s'incrustent définitivement. L'image des espaces s'améliore, les occupants retrouvent un environnement plus agréable.</p>\n<p class=\"mt-4\">Le trafic quotidien lié aux axes D906 et aux flux tertiaires ramène des particules fines à l'intérieur des bâtiments. Une intervention structurée permet d'adapter la fréquence d'entretien au niveau réel de sollicitation des surfaces.</p>",
      uniqueDeepDive: "<h3>Zones de circulation intensive</h3>\n<p>Les couloirs et halls d'entrée concentrent l'essentiel des salissures. L'aspiration préalable retire les particules libres avant injection d'une solution adaptée au type de fibre. Les passes d'extraction se multiplient sur ces surfaces très sollicitées.</p>\n\n<h3>Espaces de travail et réunion</h3>\n<p>Les dalles textiles sous les bureaux et autour des tables reçoivent un <strong>traitement ciblé</strong>. Les taches localisées font l'objet d'un détachage spécifique avant le passage en injection-extraction. Les plinthes et bas de cloisons sont protégés pendant toute l'opération.</p>\n\n<h3>Finitions et temps de séchage</h3>\n<p>L'extraction maximale de l'humidité réduit le délai avant remise en service. Selon l'épaisseur du revêtement et la ventilation disponible, le séchage complet intervient généralement sous 4 à 8 heures. Une consigne de non-piétinement est transmise pour les premières heures suivant l'intervention.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux tertiaires marquées par le passage quotidien des collaborateurs.",
        "<strong>Poussières fines</strong> ramenées depuis l'avenue de Verdun et les axes à fort trafic.",
        "Escaliers étroits dans le Vieux Châtillon compliquant le passage du matériel.",
        "Moquettes velours des parties communes nécessitant un <strong>séchage rapide</strong> pour limiter la gêne.",
        "Stationnement contraint près du métro terminus imposant une logistique anticipée.",
      ],
      faqAdditions: [
        {
          question: "Avec les escaliers étroits du Vieux Châtillon, comment gérez-vous le passage du matériel pour un shampouinage ?",
          answer: "<p>Le matériel d'injection-extraction se décline en <strong>modules transportables</strong>. Dans les cages d'escalier anciennes, nous utilisons des équipements compacts montés à la main. Le flexible permet d'atteindre chaque palier sans encombrer les passages ni bloquer l'accès aux résidents.</p>",
        },
        {
          question: "Après un nettoyage en entreprise à Orange Gardens, quel est le temps de séchage moyen avant réutilisation des locaux ?",
          answer: "<p>Sur des dalles textiles standard avec une ventilation correcte, <strong>le séchage complet</strong> intervient sous 4 à 6 heures. Une extraction renforcée limite l'humidité résiduelle. Les collaborateurs peuvent généralement réintégrer les espaces en fin de journée ou le lendemain matin.</p>",
        },
        {
          question: "Comment protégez-vous plinthes et angles des parties communes des Sablons lors d'un nettoyage intensif de moquette ?",
          answer: "<p>Des protections plastifiées sont posées le long des plinthes et bas de murs avant toute injection. Les angles reçoivent une attention particulière pour éviter les projections. Cette précaution préserve les finitions murales et limite les retouches après intervention.</p>",
        },
        {
          question: "Si le stationnement est compliqué près du terminus du métro, comment organisez-vous la livraison et le matériel ?",
          answer: "<p>Nous identifions en amont les créneaux de stationnement autorisé ou les accès livraison disponibles. Le matériel est déchargé rapidement puis le véhicule repositionné. Cette anticipation évite les contraventions et garantit une intervention sans interruption.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parkings souterrains avec autolaveuse et dégraissant professionnel, gestion rigoureuse des eaux usées et coordination d'accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains des résidences des Sablons et de leurs contraintes d'accès spécifiques.",
        "Autolaveuse professionnelle et dégraissants adaptés aux sols béton, avec aspiration des eaux usées.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et le balisage pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après plusieurs mois d'utilisation intensive, les parkings souterrains du <strong>quartier des Sablons</strong> accumulent des dépôts tenaces sur leurs dalles de circulation. Les traces d'huile moteur, les résidus de pneus et la poussière fine forment une couche grasse qui rend les sols glissants et dégrade l'image de la copropriété. Ce phénomène s'accentue dans les résidences à fort taux de rotation véhicules.</p>\n<p class=\"mt-4\">Les <strong>sols en béton brut</strong> des constructions post-1970, fréquents à Châtillon, absorbent particulièrement les hydrocarbures. Sans lavage mécanisé régulier, l'encrassement s'incruste et devient difficile à éliminer. Les box fermés et les angles morts concentrent également poussières et salissures que le simple balayage ne suffit pas à traiter.</p>\n<p class=\"mt-4\">La <strong>densité automobile</strong> sur les axes environnants génère un apport constant de particules fines. Une intervention structurée permet de restaurer l'aspect du parking tout en respectant les contraintes d'accès propres aux résidences : balisage sécurisé, rotation par zones et créneaux horaires adaptés aux usages des copropriétaires.</p>",
      uniqueDeepDive: "<h3>Sol dégraissé et circulation sécurisée</h3>\n<p>L'objectif est d'obtenir un revêtement propre, non glissant, avec des marquages au sol visibles. Le traitement élimine les dépôts gras accumulés sur le béton brut et redonne une surface homogène aux zones de circulation comme aux emplacements de stationnement.</p>\n\n<h3>Lavage mécanisé et traitement ciblé</h3>\n<p>L'autolaveuse effectue plusieurs passes sur les allées principales. Un dégraissant professionnel est appliqué sur les zones critiques : pieds de murs, rigoles d'évacuation et rampes d'accès. Les angles morts et les abords des box reçoivent un traitement haute pression adapté au support.</p>\n\n<h3>Gestion des eaux et remise en service</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes sans rejet sauvage. Le balisage reste en place jusqu'au séchage complet des zones traitées. Un compte-rendu précise les surfaces nettoyées et la fréquence recommandée selon le trafic constaté dans le parking.</p>",
      specificChallenges: [
        "Sols béton brut des résidences post-1970 : porosité élevée, hydrocarbures incrustés.",
        "Rampes d'accès inclinées nécessitant un traitement antidérapant après lavage.",
        "Stationnement difficile en surface : logistique véhicule d'intervention à anticiper.",
        "Box fermés et angles morts concentrant poussières et salissures difficiles d'accès.",
        "Gestion stricte des eaux de lavage pour respecter les évacuations existantes.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les taches d'huile anciennes dans les parkings souterrains du quartier des Sablons ?",
          answer: "<p>Les taches d'huile incrustées dans le béton brut reçoivent un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Le produit agit plusieurs minutes pour décoller les résidus gras. Une seconde passe mécanisée permet d'extraire les dépôts ramollis et de retrouver un sol homogène.</p>",
        },
        {
          question: "Quelle est votre procédure pour la gestion des eaux de lavage dans un parking souterrain à Châtillon ?",
          answer: "<p>Les eaux chargées sont dirigées vers les regards et rigoles existants du parking. L'autolaveuse aspire une partie des effluents pendant le lavage. Nous vérifions l'état des évacuations avant intervention pour éviter tout refoulement et garantir un rejet conforme sans stagnation résiduelle.</p>",
        },
        {
          question: "Quelle fréquence de nettoyage recommandez-vous pour un parking fréquenté par les salariés d'Orange Gardens ?",
          answer: "<p>Un parking à fort trafic quotidien nécessite généralement un décrassage complet tous les trois à quatre mois. Entre deux interventions, un balayage mécanisé mensuel limite l'accumulation de poussières fines. La fréquence exacte dépend du nombre de véhicules et de l'état des évacuations.</p>",
        },
        {
          question: "Quels horaires d'intervention proposez-vous pour le lavage de parking sans gêner la copropriété à Châtillon ?",
          answer: "<p>Nous intervenons de préférence en journée creuse ou en soirée, selon les usages de la résidence. Le syndic nous communique les plages où le parking est le moins occupé. Un balisage par zones permet de libérer progressivement les emplacements traités sans bloquer l'accès aux résidents.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement des dépôts incrustés, brossage adapté au support et rinçage contrôlé pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Balcons exposés à la pollution de l'Avenue de Verdun : nous adaptons le traitement à ce contexte urbain dense.",
        "Brossage manuel ou mécanique selon le support, pression ajustée pour préserver joints et revêtements.",
        "Gestion stricte de l'écoulement d'eau pour éviter toute coulure chez vos voisins du dessous.",
      ],
      uniqueIntro: "<p>Le long de l'Avenue de Verdun, les balcons encaissent au quotidien les particules fines du trafic. Une couche grise s'installe sur le sol, les garde-corps noircissent, et le mobilier laissé dehors se couvre d'un film collant. Après quelques mois sans intervention, le carrelage ou le béton prend une teinte terne qui résiste au simple jet d'eau.</p>\n<p class=\"mt-4\">Sur les immeubles construits entre 1970 et 1990, les dalles béton présentent souvent des joints poreux où la crasse s'accumule. Les loggias des résidences plus récentes captent moins de poussière mais retiennent l'humidité, favorisant l'apparition de traces verdâtres. Récupérer un balcon propre, c'est retrouver un espace où poser une table, faire sécher du linge ou simplement profiter de l'air libre sans regarder des taches.</p>\n<p class=\"mt-4\">Le passage du Tram T6 génère aussi des micro-particules de freinage qui se déposent sur les surfaces extérieures. Une intervention structurée permet de traiter chaque zone, du sol aux vitrages, en maîtrisant l'écoulement de l'eau pour éviter tout désagrément chez les voisins du dessous.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries, fenêtres et seuils de porte reçoivent une protection pour éviter les projections. Les gros débris, feuilles mortes et terre accumulée sont retirés manuellement avant tout traitement humide.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formule douce pour carrelage, dégraissant pour béton encrassé. Le brossage s'effectue manuellement ou avec une brosse mécanique selon l'état des joints. Les garde-corps et murs mitoyens accessibles sont traités dans la foulée. Si nécessaire, une pression contrôlée complète le travail sans risquer d'endommager les joints fragiles.</p>\n\n<h3>Rinçage et finalisation</h3>\n<p>L'eau de rinçage est dirigée vers l'évacuation du balcon, jamais vers les étages inférieurs. Les vitrages attenants sont essuyés pour retirer les éclaboussures. Une fois le séchage amorcé, des conseils d'entretien sont partagés pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Pollution noire sur les balcons exposés à l'Avenue de Verdun, nécessitant un dégraissage ciblé.",
        "Joints poreux sur les dalles béton des immeubles années 70-80, sensibles à la pression excessive.",
        "Poussières de freinage du Tram T6 qui se déposent sur les surfaces extérieures proches du tracé.",
        "Évacuation d'eau à maîtriser pour respecter le règlement de copropriété et le voisinage.",
        "Loggias fermées retenant l'humidité, propices aux dépôts verts et mousses tenaces.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyer un balcon en béton noirci par la pollution sur l'Avenue de Verdun sans abîmer le support ?",
          answer: "<p>Nous appliquons un dégraissant adapté au béton, suivi d'un brossage manuel qui déloge les particules incrustées. La pression reste modérée pour préserver la surface. Le rinçage dirigé évite les coulures et le résultat redonne au sol sa teinte d'origine.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation d'eau et la coordination avec les voisins pour un nettoyage de balcon en centre-ville ?",
          answer: "<p>L'eau est systématiquement orientée vers le siphon du balcon. Nous utilisons des raclettes et des bâches de rétention si nécessaire. Aucune projection n'atteint les étages inférieurs. En copropriété, nous pouvons prévenir le gardien ou afficher une information temporaire.</p>",
        },
        {
          question: "Quelle méthode utilisez-vous pour enlever les dépôts verts et mousses sur les loggias exposées au tracé du T6 ?",
          answer: "<p>Un traitement anti-mousse est appliqué puis laissé agir avant brossage. Les zones humides sont traitées en insistant sur les angles et les joints. Le rinçage élimine les résidus et freine la repousse pendant plusieurs mois selon l'exposition.</p>",
        },
        {
          question: "Faut-il appliquer une méthode différente pour un balcon carrelé versus un balcon en béton dans les résidences Sablons ?",
          answer: "<p>Le carrelage supporte un nettoyage plus direct avec des produits légèrement acides si les joints sont en bon état. Le béton brut demande un dégraissant neutre et un brossage plus appuyé. Nous adaptons la pression et le produit au revêtement constaté sur place.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des zones à risque à Châtillon : proximité des parcs, corniches d'immeubles anciens, derniers étages exposés.",
        "Protocole complet avec EPI adaptés, confinement de la zone et désinfection par produit virucide homologué.",
        "Évacuation des déchets en sacs étanches, coordination discrète pour limiter la gêne auprès du voisinage.",
      ],
      uniqueIntro: "<p>Après quelques mois sans intervention, les dépôts s'accumulent sur les garde-corps et le sol. Les derniers étages proches du Parc des Sarments concentrent particulièrement ces nuisances : les pigeons trouvent refuge sur les corniches et reviennent chaque jour. L'odeur devient tenace, le linge étendu se tache, et l'espace extérieur finit par être délaissé.</p>\n<p class=\"mt-4\">Sur les immeubles anciens du Vieux Châtillon, les corniches et toitures exposées favorisent ces accumulations. Le béton se dégrade sous l'acidité des fientes, la peinture des garde-corps s'écaille. Au-delà de l'aspect visuel, ce sont des agents pathogènes qui persistent sur les surfaces tant qu'aucune désinfection n'est réalisée.</p>\n<p class=\"mt-4\">La proximité des espaces verts et des clochers entretient cette présence aviaire. Une intervention structurée permet de retrouver un balcon utilisable : décontamination des supports, traitement virucide adapté, et évacuation des déchets dans des conditions sécurisées. Des solutions de dissuasion peuvent compléter le travail pour limiter le retour des oiseaux.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur sain, débarrassé des agents pathogènes et des résidus organiques. Les supports retrouvent leur aspect d'origine, l'odeur disparaît, et vous pouvez réutiliser votre balcon sans risque.</p>\n\n<h3>Confinement et traitement sécurisé</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour protéger l'intérieur du logement et éviter toute dispersion vers les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final élimine les résidus de produit. Le balcon reste en aération avant réutilisation. Si nécessaire, des pics anti-pigeons ou filets de protection sont proposés pour les rebords et corniches exposés.</p>",
      specificChallenges: [
        "Accumulations importantes sur les derniers étages proches du Parc des Sarments.",
        "Corniches et toitures des immeubles anciens du Vieux Châtillon particulièrement exposées.",
        "Nécessité de confiner la zone pour protéger l'intérieur et les logements voisins.",
        "Supports en béton dégradés par l'acidité des fientes : traitement adapté requis.",
        "Proximité des espaces verts et clochers favorisant le retour des pigeons sans prévention.",
      ],
      faqAdditions: [
        {
          question: "Quels sont les risques sanitaires réels des fientes accumulées sur les corniches proches de l'église Saint-Philippe à Châtillon ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes qui restent actifs plusieurs semaines sur les supports. Sur les corniches en pierre des bâtiments anciens, l'humidité favorise leur persistance. Une désinfection avec un produit virucide est indispensable pour éliminer ces risques avant de réutiliser l'espace.</p>",
        },
        {
          question: "Quels EPI et protocole appliquez-vous pour désinfecter un balcon souillé près du Parc des Sarments ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes de protection. La zone est confinée par bâchage. Les fientes sont humidifiées pour éviter l'envol de particules, puis collectées en sacs étanches. Le traitement désinfectant est appliqué sur l'ensemble des surfaces avec un temps de contact respecté.</p>",
        },
        {
          question: "Quels produits utilisez-vous pour désinfecter les fientes sur un balcon en béton dans les immeubles anciens de Châtillon ?",
          answer: "<p>Nous utilisons un produit virucide et bactéricide homologué, adapté aux supports poreux comme le béton. L'application respecte un temps de contact précis pour garantir l'élimination des agents pathogènes. Un rinçage final permet d'évacuer les résidus avant la remise en service du balcon.</p>",
        },
        {
          question: "Comment procédez-vous pour l'évacuation des déchets contaminés après nettoyage de fientes en immeuble ancien à Châtillon ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès le ramassage. L'évacuation s'effectue de manière sécurisée, en limitant les passages dans les parties communes. Dans les immeubles avec escaliers étroits du Vieux Châtillon, nous coordonnons l'intervention pour réduire la gêne auprès des autres occupants.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction en profondeur des salissures et séchage optimisé pour une utilisation rapide.",
      whyUsBullets: [
        "Connaissance des logements familiaux du Roissys et des contraintes d'accès en pavillon ou petit collectif.",
        "Détachage adapté à chaque fibre, extraction puissante et séchage accéléré pour limiter l'immobilisation du mobilier.",
        "Intervention planifiée selon vos disponibilités, matériel acheminé sans encombrer les parties communes.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect et l'hygiène d'un canapé quand la vie de famille s'y installe chaque jour ? Dans le <strong>quartier des Roissys</strong>, les foyers pavillonnaires cumulent repas devant la télé, enfants qui jouent au sol et animaux de compagnie sur les coussins. Les fibres absorbent tout : miettes, boissons renversées, poils, sueur. Au fil des mois, le tissu se ternit et les odeurs s'installent.</p>\n<p class=\"mt-4\">Un entretien régulier change la donne. Les <strong>T2/T3 et maisons</strong> de Châtillon abritent souvent des canapés en tissu non déhoussable, des tapis de salon épais et des matelas sollicités quotidiennement. Après intervention, les couleurs retrouvent leur éclat, les allergènes diminuent et l'assise redevient agréable. Les occupants sensibles aux acariens ou aux poils d'animaux constatent une différence nette.</p>\n<p class=\"mt-4\">Notre intervention s'adapte aux <strong>contraintes d'accès</strong> fréquentes en zone dense : stationnement limité, escaliers étroits, digicodes. Nous organisons le passage en amont pour limiter la gêne et garantir un travail complet sans précipitation.</p>",
      uniqueDeepDive: "<h3>Diagnostic textile et pré-traitement</h3>\n<p>Chaque surface est examinée : type de tissu (coton, synthétique, velours), nature des taches (café, urine, graisse) et usure générale. Un test discret sur zone cachée valide la compatibilité du traitement. Les salissures localisées reçoivent un détachage ciblé avant le passage général.</p>\n\n<h3>Traitement par zone</h3>\n<p>L'assise, le dossier et les accoudoirs du canapé sont traités séparément pour adapter la pression et le temps de contact. Les tapis bénéficient d'un passage méthodique bande par bande. Les matelas sont travaillés face par face, avec attention particulière aux coutures et bordures où s'accumulent acariens et poussières.</p>\n\n<h3>Extraction et séchage</h3>\n<p>L'injection-extraction retire l'eau chargée de salissures en profondeur. Nous maximisons l'aspiration pour réduire le temps de séchage. Selon l'épaisseur du textile et la ventilation du logement, le canapé ou le tapis est utilisable sous quelques heures. Des conseils d'aération et de fréquence d'entretien sont transmis en fin d'intervention.</p>",
      specificChallenges: [
        "Taches alimentaires incrustées sur canapés familiaux sollicités quotidiennement.",
        "Poils d'animaux et allergènes accumulés dans les fibres des tapis de salon.",
        "Tissus non déhoussables nécessitant un traitement sur place sans démontage.",
        "Stationnement restreint et escaliers étroits compliquant l'acheminement du matériel.",
        "Séchage à optimiser pour permettre une utilisation rapide du mobilier.",
      ],
      faqAdditions: [
        {
          question: "Quelle méthode utilisez-vous pour un canapé tissu non déhoussable dans une maison du quartier des Roissys ?",
          answer: "<p>Nous procédons par injection-extraction directement sur le textile. Un diagnostic préalable identifie la fibre et les taches présentes. Le détachage ciblé précède le passage général, puis l'aspiration retire l'eau chargée de salissures. Cette technique convient aux canapés fixes fréquents dans les pavillons de ce secteur.</p>",
        },
        {
          question: "Le nettoyage réduit-il efficacement les acariens et allergènes sur un canapé à Châtillon ?",
          answer: "<p>L'extraction en profondeur déloge une grande partie des acariens, poussières et poils d'animaux piégés dans les fibres. Les occupants sensibles constatent souvent une amélioration du confort respiratoire après intervention. Un entretien régulier prolonge cet effet, surtout dans les logements où vivent enfants ou animaux domestiques.</p>",
        },
        {
          question: "Quel est le temps de séchage après shampouinage d'un canapé en appartement T2/T3 près du métro ?",
          answer: "<p>Le séchage varie selon l'épaisseur du tissu et la ventilation du logement. En général, comptez entre trois et six heures pour une assise standard. Nous maximisons l'extraction pour limiter l'humidité résiduelle et vous conseillons d'aérer la pièce pour accélérer le processus.</p>",
        },
        {
          question: "Comment préparer le logement et gérer l'accès pour un nettoyage canapé à domicile à Châtillon ?",
          answer: "<p>Dégagez l'espace autour du mobilier à traiter et prévoyez un accès libre depuis l'entrée. Signalez-nous les contraintes : digicode, étage sans ascenseur, stationnement difficile. Nous organisons le créneau en fonction de ces éléments pour intervenir sans précipitation et sans gêner les voisins.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse avec traitement adapté au support — dalles, bois ou composite — et application anti-mousse pour un résultat durable.",
      whyUsBullets: [
        "Connaissance des contraintes locales : humidité de la Coulée Verte et exposition aux dépôts de pollution sur les axes proches.",
        "Adaptation technique à chaque support : pression ajustée pour le bois, traitement ciblé pour dalles gravillonnées ou carrelage.",
        "Protection de vos plantations et mobilier, gestion maîtrisée des eaux de ruissellement vers les évacuations existantes.",
      ],
      uniqueIntro: "<p>Les dépôts verts et traces noires sont visibles sur de nombreuses terrasses à Châtillon, qu'il s'agisse des <strong>attiques récents en ZAC des Arues</strong> ou des espaces extérieurs des pavillons du quartier des Roissys. L'humidité ambiante, combinée aux particules de pollution, favorise l'apparition de mousses et de lichens qui rendent les surfaces glissantes et ternes.</p>\n<p class=\"mt-4\">Les <strong>supports varient selon les constructions</strong> : dalles sur plots dans les résidences neuves, bois composite sur les terrasses contemporaines, carrelage dans les maisons plus anciennes. Chaque matériau réagit différemment aux intempéries et nécessite une méthode de nettoyage spécifique pour éviter toute dégradation des joints ou de la surface.</p>\n<p class=\"mt-4\">La proximité de la <strong>Coulée Verte</strong> génère une humidité persistante qui accélère le développement des mousses, tandis que les axes routiers voisins déposent un film gras sur les revêtements exposés. Une intervention structurée permet de traiter ces deux problématiques et de prolonger la durée de vie de votre terrasse.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries — baies vitrées et portes — reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les feuilles mortes, la terre et les débris accumulés.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formule douce pour le bois composite, dégraissant pour le carrelage, solution anti-mousse pour les dalles poreuses. Le brossage s'effectue manuellement ou mécaniquement selon l'état de la surface.</p>\n<p class=\"mt-4\">La haute pression intervient uniquement sur les matériaux qui la supportent, avec réglage contrôlé pour préserver les joints.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les eaux de rinçage sont dirigées vers les points d'évacuation existants. Les garde-corps et murets adjacents sont nettoyés si nécessaire.</p>\n<p class=\"mt-4\">Un temps de séchage est respecté avant la remise en place du mobilier. Des recommandations d'entretien saisonnier vous sont transmises pour limiter le retour des mousses.</p>",
      specificChallenges: [
        "Mousses tenaces sur dalles exposées à l'humidité de la Coulée Verte.",
        "Bois composite des attiques ZAC des Arues : pression contrôlée pour éviter les rayures.",
        "Dépôts gras et pollution noire sur terrasses proches des axes routiers.",
        "Joints poreux sur carrelage ancien : nettoyage doux pour préserver l'étanchéité.",
        "Gestion de l'eau de rinçage sans impact sur les plantations ou le voisinage.",
      ],
      faqAdditions: [
        {
          question: "Quelles précautions prenez-vous pour nettoyer une terrasse en bois composite dans les résidences de la ZAC des Arues ?",
          answer: "<p>Le bois composite est sensible aux rayures et à la pression excessive. Nous utilisons une buse à jet large et une pression réduite, combinées à un produit neutre. Le brossage manuel complète l'intervention sur les zones encrassées sans altérer la surface ni les fixations.</p>",
        },
        {
          question: "Comment traitez-vous les mousses et lichens sur une terrasse exposée à l'humidité de la Coulée Verte ?",
          answer: "<p>Un produit anti-mousse biodégradable est appliqué après le nettoyage initial. Il agit en profondeur pour détruire les racines des végétaux. Un second passage peut être programmé quelques semaines plus tard si la colonisation était importante, afin de garantir un résultat durable.</p>",
        },
        {
          question: "Quel protocole appliquez-vous pour démousser des dalles gravillonnées à Châtillon ?",
          answer: "<p>Les dalles gravillonnées retiennent l'humidité dans leurs aspérités. Nous procédons par brossage mécanique doux suivi d'un traitement anti-mousse liquide qui pénètre les pores. La haute pression est évitée pour ne pas déchausser les gravillons ni fragiliser le support.</p>",
        },
        {
          question: "Faut-il privilégier la haute pression ou une méthode douce pour une terrasse carrelée ?",
          answer: "<p>Cela dépend de l'état des joints et de la porosité du carrelage. Si les joints sont fragilisés, nous optons pour un nettoyage basse pression avec brossage et produit dégraissant. Sur un carrelage récent aux joints sains, la haute pression contrôlée permet un décrassage efficace sans risque.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, coordonnée avec vos contraintes de délai et d'accès, pour une restitution propre et conforme aux attentes du prochain occupant.",
      whyUsBullets: [
        "Connaissance du parc locatif châtillonnais, des T2/T3 proches du métro aux pavillons du quartier des Roissys.",
        "Polyvalence sur tous types de sols et finitions, du parquet flottant au carrelage ancien.",
        "Coordination directe avec agences et artisans pour respecter vos délais de restitution.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable quand l'état des lieux approche et que les travaux viennent à peine de s'achever ? À proximité du <strong>métro Châtillon-Montrouge</strong>, la rotation locative impose des délais serrés. Les agences attendent un logement prêt à visiter, sans traces de chantier ni poussière résiduelle sur les plinthes ou dans les placards.</p>\n<p class=\"mt-4\">Un nettoyage structuré change la donne pour les propriétaires bailleurs comme pour les locataires sortants. Dans les <strong>T2 et T3</strong> qui composent l'essentiel du parc châtillonnais, les sols varient entre parquet flottant, carrelage et parfois moquette en chambre. Chaque surface demande un traitement adapté pour éviter les remarques lors de la remise des clés.</p>\n<p class=\"mt-4\">Nous organisons l'intervention en coordination avec les artisans ou l'agence immobilière concernée. Le planning s'ajuste aux contraintes d'accès — digicode, gardien, créneau imposé — pour une mise en propreté finalisée dans les temps, sans allers-retours inutiles.</p>",
      uniqueDeepDive: "<h3>Résidus de chantier et poussières fines</h3>\n<p>Les travaux laissent des dépôts sur toutes les surfaces : enduit séché, projections de peinture, film gris sur les vitres intérieures. Nous commençons par un dépoussiérage complet des plafonds aux plinthes, puis nous traitons les traces tenaces sur les menuiseries et interrupteurs.</p>\n<p class=\"mt-4\">L'aspiration précède systématiquement le lavage pour éviter de fixer la poussière au sol.</p>\n\n<h3>Pièces d'eau et équipements</h3>\n<p>Cuisine et salle de bain concentrent les attentes lors d'un état des lieux. Nous décrassons les plans de travail, la faïence, les joints et les sanitaires. L'électroménager intégré est nettoyé intérieur et extérieur.</p>\n<p class=\"mt-4\">Les robinetteries et évacuations sont vérifiées pour éliminer tout dépôt calcaire visible.</p>\n\n<h3>Sols et finitions avant remise des clés</h3>\n<p>Le traitement des sols s'adapte au revêtement : lavage doux sur parquet, dégraissage sur carrelage, shampouinage si moquette présente. Les placards sont vidés et essuyés. Une aération finale prépare le logement à la visite.</p>",
      specificChallenges: [
        "Délais serrés entre fin de travaux et état des lieux dans les zones à forte rotation locative.",
        "Accès par digicode et badge Vigik quasi systématique dans les résidences châtillonnaises.",
        "Stationnement contraint autour du centre-ville et de l'avenue de Verdun pour décharger le matériel.",
        "Coordination nécessaire avec artisans encore présents sur certains chantiers de la ZAC des Arues.",
        "Sols variés dans un même logement : parquet, carrelage, moquette en chambre.",
      ],
      faqAdditions: [
        {
          question: "Quel est votre délai d'intervention pour un ménage avant état des lieux près du métro Châtillon-Montrouge ?",
          answer: "<p>Nous intervenons selon la taille du logement et la disponibilité des accès. Pour les situations urgentes en zone tendue proche du terminus de la ligne 13, un créneau prioritaire peut être proposé après échange téléphonique.</p>",
        },
        {
          question: "Quelle différence de protocole appliquez-vous pour un nettoyage fin de chantier dans la ZAC des Arues ?",
          answer: "<p>Un chantier récent génère davantage de poussières fines et de résidus (enduit, colle, peinture). Nous ajoutons une phase de dépoussiérage renforcé et un traitement spécifique des menuiseries et vitres intérieures avant le lavage des sols.</p>",
        },
        {
          question: "Comment tarifez-vous un nettoyage complet pour un T2/T3 avant relocation à Châtillon ?",
          answer: "<p>Le devis dépend de la surface, de l'état initial et du type d'intervention (ménage classique ou fin de chantier). Nous établissons une estimation après description du bien ou visite rapide si nécessaire, sans engagement.</p>",
        },
        {
          question: "Comment coordonnez-vous le nettoyage avec artisans et agences lors d'une remise en état à Châtillon centre ?",
          answer: "<p>Nous échangeons directement avec vos interlocuteurs pour caler l'intervention après la fin des travaux. Le planning s'ajuste aux contraintes de chacun, et nous confirmons la disponibilité du logement avant déplacement pour éviter tout décalage.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;