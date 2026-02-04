import type { City } from "~/types/geo";

const city: City = {
  name: "Villiers-sur-Marne",
  slug: "villiers-sur-marne",
  postalCodes: ["94350"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Villiers-sur-Marne pour l'entretien des parties communes, parkings et espaces extérieurs. Entre la gare RER E et les quartiers pavillonnaires du Bois de Gaumont, une équipe locale adapte ses méthodes au bâti de la commune.",

  // hubIntro : HTML autorisé
  hubIntro:
    "<p>Desservie par le RER E et par la gare du Grand Paris Express « Villiers – Champigny – Bry » (ligne 15), aux portes de la ZAC des Boutareines, Villiers-sur-Marne concentre des typologies de bâti variées. Klinova y assure un accompagnement régulier, avec une organisation calibrée sur les contraintes locales.</p>\n\n<p>Halls, sous-sols, extérieurs : chaque intervention s'appuie sur un <strong>diagnostic préalable</strong> et un suivi terrain. Reporting disponible pour les gestionnaires, coordination simplifiée pour les copropriétés comme pour les entreprises.</p>\n\n<ul>\n  <li><strong>Connaissance du terrain :</strong> Interventions régulières entre le centre-ville, les Hautes Noues et le secteur gare, avec adaptation aux accès et aux horaires sensibles.</li>\n  <li><strong>Matériel adapté :</strong> Équipements dimensionnés selon les surfaces, des parkings souterrains aux halls d'entrée des résidences récentes.</li>\n  <li><strong>Coordination fluide :</strong> Échanges directs avec syndics, gardiens ou responsables de site pour limiter la gêne et respecter les plannings.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> fréquents dans les résidences récentes et aux Hautes Noues : rampes étroites, ventilation limitée.",
    "Quartiers pavillonnaires du <strong>Bois de Gaumont</strong> : accès parfois contraints, passages par l'intérieur pour certaines terrasses.",
    "Flux pendulaire important autour de la <strong>gare RER E</strong> : halls et abords sollicités quotidiennement.",
    "<strong>ZAC des Boutareines</strong> : trafic véhicules dense, salissures huiles et poussières sur les parkings aériens.",
    "Proximité de l'<strong>A4</strong> : dépôts de particules sur balcons et surfaces extérieures exposées.",
    "Chantiers liés au <strong>Grand Paris Express</strong> : poussières et salissures supplémentaires sur certains secteurs.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Les Hautes Noues",
    "Le Bois de Gaumont",
    "Les Luats",
    "Les Boutareines",
    "Les Perroquets",
    "Les Ponceaux",
  ],
  nearbyCities: [
        "noisy-le-grand",
        "champigny-sur-marne",
        "le-plessis-trevise",
        "le-perreux-sur-marne",
        "champs-sur-marne",
        "neuilly-sur-marne",
        "gournay-sur-marne",
        "emerainville",
        "neuilly-plaisance",
        "nogent-sur-marne"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Villiers-sur-Marne",
    "Gare de Villiers-sur-Marne - Le Plessis-Trévise",
    "ZAC des Boutareines",
    "Parc du Bois-Saint-Denis",
    "Espace Jean-Moulin",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les quartiers où le stationnement est compliqué ?",
      answer:
        "<p><strong>Autour de la gare et en centre-ville</strong>, nous repérons à l’avance les zones de dépose et les créneaux possibles. Le matériel est préparé pour limiter les allers-retours. Si besoin, nous proposons un passage tôt le matin ou en fin de journée pour éviter les périodes de saturation.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer:
        "<p><strong>Oui, systématiquement.</strong> Nous validons d’abord les surfaces, les accès et les contraintes (horaires, parking, parties communes). Le devis est ensuite transmis rapidement et sans engagement. Pour une copropriété ou un site complexe, une visite technique peut être proposée.</p>",
    },
    {
      question: "Pouvez-vous intervenir en urgence sur Villiers-sur-Marne ?",
      answer:
        "<p><strong>Selon nos disponibilités</strong>, nous pouvons traiter les demandes urgentes. Un premier échange permet d’évaluer la situation et de confirmer un créneau rapide. En cas de dégradation importante ou de besoin de remise en propreté prioritaire, nous faisons le maximum pour intervenir dans les meilleurs délais.</p>",
    },
    {
      question:
        "Comment se passe la coordination avec un syndic ou un gestionnaire de site ?",
      answer:
        "<p><strong>Un interlocuteur unique</strong> suit le dossier. Avant intervention, nous calons les accès (digicode, clés, gardien), les horaires et le besoin de balisage. Après passage, un compte-rendu peut être transmis sur demande, notamment pour les résidences des Hautes Noues et du secteur gare.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Only include requested services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en service rapide adaptée à vos contraintes d'occupation.",
      whyUsBullets: [
        "Connaissance des dalles textiles et moquettes velours présentes dans les locaux du centre-ville de Villiers-sur-Marne.",
        "Matériel d'injection-extraction professionnel avec réglage de pression adapté à chaque type de fibre.",
        "Interventions planifiées en dehors des créneaux d'occupation pour limiter la gêne et accélérer la remise en service.",
      ],
      uniqueIntro:
        "<p>Dans le secteur de l'<strong>Espace Jean-Moulin</strong> et des locaux tertiaires du centre-ville, les moquettes accumulent poussières et traces de passage bien avant que l'encrassement devienne visible. Les fibres retiennent particules fines, résidus de semelles et taches de boissons renversées lors d'événements ou de réunions. Sans traitement adapté, le textile se ternit et les odeurs s'installent durablement dans la trame.</p>\n\n<p class=\"mt-4\">Sur les dalles textiles des salles municipales comme dans les bureaux équipés de velours ras, un entretien en profondeur redonne du relief aux fibres et supprime les auréoles incrustées. Les occupants retrouvent un sol propre, sans sensation collante sous les pieds, et l'aspect général du local s'améliore nettement dès la fin de l'intervention.</p>\n\n<p class=\"mt-4\">Face au <strong>fort trafic événementiel</strong> que connaît le centre-ville, nous adaptons notre intervention aux créneaux disponibles. Diagnostic préalable du support, protection des plinthes et mobilier, puis traitement par injection-extraction : chaque étape est planifiée pour limiter l'immobilisation de vos espaces.</p>",
      uniqueDeepDive:
        "<h3>Fibres assainies et taches éliminées</h3>\n<p>L'objectif est d'obtenir une moquette débarrassée des salissures profondes, avec des fibres redressées et un rendu homogène. Les zones de passage intensif retrouvent leur aspect d'origine, sans auréoles ni résidus collants.</p>\n\n<h3>Injection-extraction et détachage ciblé</h3>\n<p>Après aspiration préalable des particules libres, nous appliquons une solution adaptée au type de fibre. La machine injecte le produit puis aspire immédiatement l'eau chargée de salissures. Les taches tenaces reçoivent un traitement localisé avant le passage général.</p>\n\n<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions la <strong>nature du textile</strong> : bouclée, velours, épaisse ou fine. Les plinthes et bas de murs sont protégés. En salle municipale ou bureau, le mobilier léger est déplacé et un balisage temporaire signale la zone en cours de séchage. Le temps d'immobilisation estimé vous est communiqué dès le départ.</p>",
      specificChallenges: [
        "<strong>Dalles textiles en salles municipales</strong> soumises à un piétinement intense lors d'événements.",
        "<strong>Moquettes velours ras</strong> dans les bureaux tertiaires du centre-ville, sensibles aux traces de roulettes.",
        "<strong>Escaliers étroits</strong> dans les immeubles anciens compliquant l'acheminement du matériel.",
        "<strong>Stationnement limité près de la gare</strong> imposant une logistique adaptée pour les interventions.",
        "<strong>Poussières urbaines liées au trafic</strong> sur les axes structurants qui s'incrustent rapidement dans les fibres.",
      ],
      faqAdditions: [
        {
          question:
            "Comment transportez-vous la shampouineuse dans les cages d'escalier étroites des immeubles du centre-ville ?",
          answer:
            "<p>Notre matériel est conçu pour passer dans des <strong>accès réduits sans démontage</strong>. Les flexibles rallongés permettent de laisser l'unité principale au rez-de-chaussée et d'intervenir aux étages. Nous repérons l'accès en amont pour éviter toute perte de temps le jour de l'intervention.</p>",
        },
        {
          question:
            "Après un entretien de moquette à l'Espace Jean-Moulin, combien de temps avant de réutiliser la salle ?",
          answer:
            "<p>Le séchage dépend de l'épaisseur du textile et de la ventilation disponible. En général, comptez entre quatre et huit heures pour une salle bien aérée. Nous pouvons intervenir en fin de journée afin que l'espace soit opérationnel dès le lendemain matin.</p>",
        },
        {
          question:
            "Comment protégez-vous les plinthes et les angles lors d'un détachage dans un appartement ancien ?",
          answer:
            "<p>Nous posons des <strong>protections adhésives le long des plinthes</strong> et des bas de murs avant de commencer. Le réglage de pression est adapté pour éviter les projections. Les angles sont traités manuellement avec une buse réduite qui limite tout risque d'éclaboussure sur les surfaces adjacentes.</p>",
        },
        {
          question:
            "Avec le stationnement difficile près de la gare, comment organisez-vous une intervention au dernier étage ?",
          answer:
            "<p>Nous identifions à l'avance un emplacement de dépose rapide ou un créneau de livraison autorisé. Le matériel est monté en une seule rotation grâce à un chariot adapté. Cette organisation évite les allers-retours et réduit la durée d'occupation de la voie publique.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains et aériens, avec gestion coordonnée des accès véhicules et traitement des sols encrassés par les huiles et poussières de circulation.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès locales, notamment sur les axes desservant les copropriétés et zones commerciales de Villiers-sur-Marne.",
        "Autolaveuses professionnelles et gestion rigoureuse des eaux de lavage, adaptées aux sous-sols comme aux parkings aériens.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation véhicules et limiter la gêne aux résidents.",
      ],
      uniqueIntro:
        "<p>Les traces noires sur les sols, les coulures d'huile aux emplacements et les dépôts gras le long des rampes sont visibles dans de nombreux parkings le long du <strong>boulevard de Friedberg</strong>. Ces marques s'accumulent avec le passage quotidien des véhicules, particulièrement dans les résidences qui accueillent un trafic régulier vers les zones commerciales ou les axes routiers proches.</p>\n\n<p class=\"mt-4\">Un sol de parking dégradé renvoie une image négative aux copropriétaires et aux visiteurs. Dans les <strong>parkings souterrains en béton brut</strong> comme dans les aires aériennes en enrobé, l'encrassement persistant peut aussi compliquer le repérage des marquages au sol et rendre certaines zones glissantes. Les syndics reçoivent alors des signalements récurrents.</p>\n\n<p class=\"mt-4\">Une intervention planifiée permet de traiter l'ensemble des surfaces sans perturber l'usage quotidien. Le trafic pendulaire lié à la ZAC des Boutareines et à l'autoroute A4 impose une coordination précise : balisage, rotation des véhicules par zones, et créneaux adaptés aux heures creuses.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions le type de revêtement (béton brut, résine ou enrobé) et vérifions <strong>l'état des évacuations</strong>. Un balayage préalable élimine les débris grossiers.</p>\n<p class=\"mt-4\">Le balisage est mis en place pour sécuriser les zones de travail. La rotation des véhicules est organisée par secteur afin de maintenir l'accès aux résidents pendant le chantier.</p>\n\n<h3>Lavage mécanisé et dégraissage</h3>\n<p>L'autolaveuse ou la haute pression avec dégraissant adapté traite les surfaces par passes successives. Les zones critiques reçoivent une attention particulière : <strong>rampes d'accès, angles morts, pieds de murs</strong> et rigoles.</p>\n<p class=\"mt-4\">Les eaux de lavage sont récupérées et dirigées vers les évacuations existantes, sans rejet sauvage. Le protocole respecte les contraintes réglementaires des parkings souterrains.</p>\n\n<h3>Contrôle et recommandations</h3>\n<p>Une vérification finale confirme l'élimination des taches et dépôts. Si demandé, un dépoussiérage des blocs lumineux et tuyauteries complète l'intervention.</p>\n<p class=\"mt-4\">Un conseil de fréquence est transmis au gestionnaire selon le niveau de trafic constaté.</p>",
      specificChallenges: [
        "<strong>Taches d'huile anciennes</strong> incrustées dans le béton brut des sous-sols de copropriétés.",
        "Rampes d'accès étroites nécessitant un traitement antidérapant après lavage.",
        "<strong>Coordination des créneaux d'intervention</strong> avec le flux pendulaire vers la ZAC des Boutareines.",
        "Gestion des eaux de lavage dans les parkings souterrains sans évacuation directe.",
        "Balisage sécurisé pour maintenir l'accès partiel aux résidents pendant le chantier.",
      ],
      faqAdditions: [
        {
          question:
            "Comment organisez-vous la rotation des véhicules lors d'un décrassage de parking près de la ZAC des Boutareines ?",
          answer:
            "<p>Nous découpons le parking en <strong>zones traitées successivement</strong>. Les résidents déplacent leurs véhicules d'un secteur à l'autre selon un planning communiqué à l'avance. Cette méthode permet de maintenir l'accès tout en assurant un lavage complet, même sur les parkings à fort trafic pendulaire.</p>",
        },
        {
          question:
            "Quel protocole appliquez-vous pour éliminer les taches d'huile anciennes dans un parking souterrain de copropriété ?",
          answer:
            "<p>Nous appliquons un dégraissant adapté au béton brut, laissé en contact avant passage de l'autolaveuse. Les taches incrustées nécessitent parfois plusieurs passes. Ce traitement redonne un aspect uniforme au sol et facilite le repérage des marquages au sol.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage dans les parkings souterrains des résidences récentes ou des Hautes Noues ?",
          answer:
            "<p>Les eaux chargées sont dirigées vers les regards existants après vérification de leur état. En l'absence d'évacuation directe, nous utilisons un système d'aspiration pour éviter tout rejet sauvage. Le protocole respecte les contraintes réglementaires des sous-sols.</p>",
        },
        {
          question:
            "Quelles différences techniques appliquez-vous entre un parking souterrain et un parking aérien dans la zone commerciale ?",
          answer:
            "<p>En souterrain, la <strong>ventilation limitée</strong> impose des produits à faible émission et une gestion stricte des eaux. En aérien, l'enrobé supporte mieux la haute pression mais nécessite un traitement des joints et fissures. Le matériel et les temps de séchage sont adaptés à chaque configuration.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Villiers-sur-Marne, avec traitement adapté au support et gestion maîtrisée des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales et des dépôts liés à la pollution des axes proches du centre-ville.",
        "Pression ajustée selon le support — béton, carrelage ou joints fragiles — pour un résultat sans dégradation.",
        "Organisation anti-coulures et protection systématique des voisins du dessous pendant toute l'intervention.",
      ],
      uniqueIntro:
        "<p>Après quelques saisons d'exposition aux particules fines et aux poussières urbaines, les balcons du <strong>centre-ville</strong> et de la rue du Général Leclerc accumulent un voile grisâtre tenace. Les dépôts se logent dans les joints, noircissent les garde-corps et rendent l'espace peu engageant. Difficile alors de profiter pleinement de ces mètres carrés extérieurs, surtout quand le vis-à-vis rappelle que l'état du balcon se voit depuis la rue.</p>\n\n<p class=\"mt-4\">Retrouver un sol propre et des surfaces claires change l'usage quotidien : on ressort les plantes, on installe une chaise, on ouvre plus volontiers les fenêtres. Sur les balcons en béton brut des immeubles anciens comme sur le <strong>carrelage des résidences récentes</strong>, le résultat visuel redonne envie d'occuper cet espace. Les traces de pollution disparaissent, les joints retrouvent leur teinte d'origine.</p>\n\n<p class=\"mt-4\">Notre intervention prend en compte la proximité des axes passants et le trafic quotidien qui génère ces salissures. Chaque balcon fait l'objet d'un diagnostic rapide pour adapter le traitement au support et limiter les désagréments pour les occupants voisins.</p>",
      uniqueDeepDive:
        "<h3>Sol et revêtement principal</h3>\n<p>Le mobilier et les plantes sont déplacés ou protégés sous bâche. Les gros débris — feuilles mortes, terre accumulée — sont retirés manuellement. Le sol reçoit ensuite un produit adapté selon qu'il s'agisse de béton, carrelage ou dalles. Un brossage ciblé déloge les salissures incrustées dans les joints avant rinçage contrôlé.</p>\n\n<h3>Garde-corps et parois verticales</h3>\n<p>Les barreaux métalliques ou vitrés sont traités avec une solution dégraissante douce. Les murs mitoyens accessibles bénéficient du même soin. La pression reste modérée pour éviter les projections vers les étages inférieurs et préserver les finitions.</p>\n\n<h3>Évacuation et séchage</h3>\n<p>L'eau de rinçage est dirigée vers les évacuations existantes. Des protections temporaires empêchent les coulures sur les balcons du dessous. Une fois le nettoyage terminé, le séchage naturel s'effectue en quelques heures. Nous transmettons des conseils d'entretien pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "<strong>Dépôts gris liés au trafic</strong> sur les axes proches du centre-ville.",
        "Joints de carrelage noircis sur les balcons des résidences récentes.",
        "Vis-à-vis important imposant une intervention soignée et discrète.",
        "<strong>Gestion de l'eau</strong> pour éviter les coulures chez les voisins du dessous.",
        "Supports variés — béton brut ou carrelage — nécessitant des produits distincts.",
      ],
      faqAdditions: [
        {
          question:
            "Quel produit utilisez-vous pour nettoyer le carrelage sans abîmer les joints sur un balcon du centre-ville ?",
          answer:
            "<p>Nous appliquons un détergent neutre adapté aux carrelages extérieurs. <strong>Le brossage reste manuel sur les joints</strong> pour éviter toute érosion. Le rinçage s'effectue à basse pression, ce qui préserve l'étanchéité et la teinte d'origine des jointures.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation de l'eau pour éviter les coulures chez mes voisins en copropriété ?",
          answer:
            "<p>Avant le rinçage, nous installons des protections temporaires sur le pourtour du balcon. L'eau est dirigée vers les évacuations existantes. Si nécessaire, nous utilisons un aspirateur à eau pour limiter tout écoulement vers les étages inférieurs.</p>",
        },
        {
          question:
            "Mon balcon présente des dépôts verts tenaces dans une zone ombragée, quelle méthode proposez-vous ?",
          answer:
            "<p>Les mousses et dépôts verts sont traités avec un produit anti-végétal doux, laissé agir avant brossage. Le rinçage contrôlé élimine les résidus sans disperser les spores. Cette approche convient aux supports carrelés comme au béton brut.</p>",
        },
        {
          question:
            "Pouvez-vous intervenir sur un balcon ancien sans utiliser de haute pression ?",
          answer:
            "<p>Oui, nous privilégions le <strong>brossage manuel</strong> et le rinçage à faible débit sur les balcons dont les joints ou le revêtement sont fragiles. Cette méthode évite les infiltrations et préserve l'intégrité du support tout en obtenant un résultat propre.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et mise en place de solutions anti-retour adaptées à votre configuration.",
      whyUsBullets: [
        "Connaissance des zones exposées à Villiers-sur-Marne, notamment les immeubles proches des espaces verts et du centre ancien.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection systématique après retrait des déjections.",
        "Évacuation sécurisée des déchets et coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
      ],
      uniqueIntro:
        "<p>Les traces blanchâtres et les dépôts croûteux s'accumulent sur les garde-corps et le sol du balcon. <strong>Aux abords du Parc du Bois-Saint-Denis</strong>, la présence d'oiseaux favorise ces salissures répétées qui finissent par imprégner le béton et dégager une odeur tenace. L'espace extérieur devient inutilisable, le linge ne peut plus y sécher, et la gêne vis-à-vis du voisinage s'installe.</p>\n\n<p class=\"mt-4\">Sur les <strong>corniches et derniers étages d'immeubles anciens du centre-ville</strong>, l'exposition aux fientes fragilise aussi les revêtements. L'acidité des déjections attaque progressivement les peintures et le métal des rambardes. Sans traitement, les dégâts s'étendent et le balcon perd son usage quotidien — un espace pourtant précieux dans un appartement.</p>\n\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon sain. Le protocole inclut le retrait sécurisé des déjections, la désinfection obligatoire des surfaces contaminées, et l'évacuation des déchets dans des conditions adaptées. Des dispositifs de dissuasion peuvent compléter le nettoyage pour limiter le retour des volatiles.</p>",
      uniqueDeepDive:
        "<h3>Sécurisation et confinement</h3>\n<p>Les fientes sèches libèrent des particules potentiellement pathogènes. L'intervenant porte un équipement complet : <strong>masque FFP2, lunettes, gants</strong> et combinaison jetable. La zone est bâchée pour protéger l'intérieur du logement et éviter toute dispersion vers les balcons voisins.</p>\n<p class=\"mt-4\">Une humidification préalable neutralise les poussières avant manipulation.</p>\n\n<h3>Retrait et désinfection</h3>\n<p>Les déjections sont collectées manuellement puis conditionnées en sacs étanches. Le sol, les garde-corps et les vitrages reçoivent un nettoyage adapté à chaque support.</p>\n<p class=\"mt-4\">Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces. <strong>Le temps de contact est respecté</strong> pour éliminer les agents pathogènes résiduels.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final prépare le balcon à une réutilisation rapide après aération. Les déchets contaminés sont évacués dans leurs contenants étanches.</p>\n<p class=\"mt-4\">Si la configuration le permet, <strong>des pics anti-pigeons ou un filet</strong> de protection peuvent être installés sur les rebords et corniches pour réduire le risque de réinfestation.</p>",
      specificChallenges: [
        "Proximité du Parc du Bois-Saint-Denis : <strong>présence régulière de pigeons</strong> sur les balcons orientés vers les arbres.",
        "Corniches des immeubles anciens du centre-ville souvent colonisées, avec dépôts épais sur les rebords.",
        "Balcons béton aux Hautes Noues exposés aux salissures récurrentes sans dispositif de dissuasion.",
        "Évacuation des déchets contaminés à organiser en copropriété pour respecter les règles d'hygiène.",
        "<strong>Odeurs persistantes</strong> si le traitement désinfectant n'est pas appliqué après le retrait des fientes.",
      ],
      faqAdditions: [
        {
          question:
            "Des fientes fraîches s'accumulent sur mon balcon donnant sur le Parc du Bois-Saint-Denis, quelles mesures d'urgence appliquez-vous ?",
          answer:
            "<p>L'intervention débute par le <strong>confinement de la zone</strong> et le port d'équipements de protection. Les déjections sont humidifiées pour éviter la dispersion de particules, puis collectées et conditionnées. Une désinfection immédiate des surfaces limite les risques sanitaires liés aux agents pathogènes présents dans les fientes fraîches.</p>",
        },
        {
          question:
            "Quel équipement de protection et quel protocole utilisez-vous pour un assainissement de fientes en immeuble résidentiel ?",
          answer:
            "<p>L'intervenant porte masque FFP2, lunettes de protection, gants et combinaison jetable. La zone est bâchée pour protéger l'intérieur et les espaces voisins. Chaque étape — humidification, retrait, désinfection — suit un ordre précis pour garantir la sécurité de l'occupant et des intervenants.</p>",
        },
        {
          question:
            "Après élimination des fientes, quelle désinfection réalisez-vous pour supprimer les odeurs et assurer la salubrité du balcon ?",
          answer:
            "<p>Un produit virucide et bactéricide homologué est appliqué sur toutes les surfaces nettoyées. Le temps de contact recommandé est respecté avant rinçage. Ce traitement élimine les agents pathogènes résiduels et neutralise les odeurs imprégnées dans le béton ou le carrelage du balcon.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets contaminés après un nettoyage de fientes en copropriété à Villiers-sur-Marne ?",
          answer:
            "<p>Les déjections et matériaux souillés sont placés dans des <strong>sacs étanches</strong> dès leur collecte. L'évacuation se fait en fin d'intervention pour limiter la gêne dans les parties communes. Le conditionnement sécurisé évite tout contact ou dispersion lors du transport hors de l'immeuble.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchissement complet de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un mobilier sain.",
      whyUsBullets: [
        "Connaissance des typologies résidentielles de Villiers-sur-Marne, des pavillons du Bois de Gaumont aux appartements des Luats.",
        "Matériel d'injection-extraction portable adapté aux textiles délicats, avec détachants enzymatiques ciblés selon chaque tache.",
        "Intervention planifiée selon vos contraintes d'accès et de stationnement, remise en service rapide du mobilier traité.",
      ],
      uniqueIntro:
        "<p>Comment préserver la propreté d'un canapé quand les enfants y passent leurs après-midi, que le chat s'y installe chaque soir, ou que les repas se prennent parfois devant l'écran ? Dans le <strong>quartier Les Luats</strong>, où les résidences accueillent de nombreuses familles et locataires, les textiles d'ameublement accumulent rapidement taches alimentaires, poussières et odeurs tenaces.</p>\n\n<p class=\"mt-4\">Un entretien régulier change la perception de votre intérieur. Les fibres retrouvent leur souplesse, les couleurs leur éclat, et l'air ambiant gagne en fraîcheur. Dans les appartements équipés de <strong>canapés tissu non déhoussables</strong>, fréquents à Villiers-sur-Marne, le nettoyage professionnel évite le remplacement prématuré du mobilier tout en éliminant allergènes et résidus incrustés.</p>\n\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des contraintes de stationnement près de la gare et des accès parfois limités. Diagnostic textile préalable, protection des sols environnants, planning adapté à vos disponibilités : chaque détail est anticipé pour une remise en état efficace sans perturber votre quotidien.</p>",
      uniqueDeepDive:
        "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus invisibles. Nous identifions d'abord la nature du tissu — coton, synthétique, velours — et le type de taches présentes : café, vin, urine ou graisse ancienne.</p>\n<p class=\"mt-4\">Un test discret sur zone cachée valide la compatibilité du traitement avec vos textiles fragiles.</p>\n\n<h3>Détachage ciblé puis injection-extraction</h3>\n<p>Les zones marquées reçoivent un pré-traitement enzymatique adapté. L'injection-extraction textile projette ensuite une solution nettoyante en profondeur avant d'aspirer immédiatement l'eau chargée de salissures.</p>\n<p class=\"mt-4\">La pression et la température sont ajustées selon l'épaisseur et la sensibilité du revêtement pour éviter toute déformation.</p>\n\n<h3>Extraction maximale et conseils séchage</h3>\n<p>Nous procédons à plusieurs passages d'extraction pour réduire <strong>l'humidité résiduelle</strong> au minimum. Selon la saison et l'aération disponible, le séchage complet intervient généralement sous 4 à 8 heures.</p>\n<p class=\"mt-4\">Vous recevez des conseils d'usage et une fréquence d'entretien recommandée selon votre mode de vie.</p>",
      specificChallenges: [
        "<strong>Canapés non déhoussables</strong> fréquents dans les appartements locatifs près de la gare.",
        "<strong>Taches anciennes incrustées</strong> dans les fibres après plusieurs années d'usage familial.",
        "Stationnement contraint en centre-ville nécessitant une organisation préalable.",
        "Temps de séchage variable selon la ventilation et la saison, à anticiper.",
        "Allergènes et acariens accumulés dans les matelas des chambres d'enfants.",
      ],
      faqAdditions: [
        {
          question:
            "Mon canapé non déhoussable dans le quartier Les Luats peut-il être traité sans risque pour le textile ?",
          answer:
            "<p>Nous réalisons systématiquement un <strong>diagnostic du tissu</strong> avant intervention. Un test sur zone discrète confirme la compatibilité du traitement. Selon que votre canapé soit en coton, synthétique ou velours, nous adaptons la pression et la température pour préserver les fibres tout en éliminant les salissures incrustées.</p>",
        },
        {
          question:
            "Le traitement anti-acariens est-il inclus pour un appartement proche de la gare de Villiers-sur-Marne ?",
          answer:
            "<p>L'extraction en profondeur élimine naturellement une grande partie des acariens et allergènes présents dans les fibres. Pour les matelas et canapés très exposés, nous pouvons appliquer un traitement complémentaire. Comptez quelques heures de séchage avant de réutiliser le mobilier dans des conditions optimales.</p>",
        },
        {
          question:
            "Quel délai de séchage prévoir en hiver avec une ventilation limitée dans mon appartement ?",
          answer:
            "<p>En période froide avec peu d'aération, le séchage complet d'un canapé 3 places prend généralement 6 à 8 heures. Nous maximisons l'extraction pour réduire <strong>l'humidité résiduelle</strong>. Ouvrir les fenêtres quelques minutes ou utiliser un ventilateur accélère le processus sans risque pour le textile.</p>",
        },
        {
          question:
            "Pour des taches anciennes sur tapis et canapé au Bois de Gaumont, détachage localisé ou shampouinage complet ?",
          answer:
            "<p>Cela dépend de l'étendue des salissures. Des taches isolées de café ou vin bénéficient d'un détachage ciblé avec pré-traitement enzymatique. Si l'ensemble du textile présente un encrassement général, le shampouinage complet par injection-extraction offre un résultat plus homogène et durable.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support, élimination des mousses et dépôts verts, et application d'un produit préventif pour prolonger la propreté obtenue.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires du Bois de Gaumont et de leurs expositions ombragées propices aux mousses.",
        "Maîtrise des traitements différenciés selon les supports : dalles gravillonnées, pierre naturelle ou bois composite.",
        "Protection systématique du mobilier et des plantations, gestion de l'évacuation d'eau vers le jardin.",
      ],
      uniqueIntro:
        "<p>Dans le secteur du <strong>Bois de Gaumont</strong>, les terrasses des pavillons subissent une dégradation progressive liée à l'environnement immédiat. L'ombre portée par les arbres des jardins, combinée à l'humidité persistante proche des espaces verts, favorise l'apparition de mousses et de lichens sur les surfaces exposées. Ces dépôts verdâtres s'installent d'abord dans les joints, puis colonisent progressivement l'ensemble du revêtement.</p>\n\n<p class=\"mt-4\">Sur les <strong>dalles gravillonnées</strong> caractéristiques des constructions années 70, ou sur les terrasses bois composite des rénovations récentes, cette prolifération rend le sol glissant et visuellement dégradé. L'espace extérieur perd son attrait, les repas dehors deviennent moins fréquents, et la terrasse finit par servir uniquement de passage vers le jardin.</p>\n\n<p class=\"mt-4\">Une intervention adaptée au matériau permet de retrouver une surface saine et praticable. Le diagnostic préalable identifie le type de support, l'étendue des dépôts et les zones à protéger avant tout traitement mécanique ou chimique.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier de jardin, les jardinières et les plantes en pot sont déplacés ou bâchés. Les menuiseries des baies vitrées et portes-fenêtres reçoivent <strong>une protection contre les projections</strong>. Un balayage élimine les feuilles mortes, la terre accumulée et les débris végétaux avant le traitement.</p>\n\n<h3>Nettoyage et traitement adapté</h3>\n<p>Un produit spécifique au support est appliqué : formulation douce pour le bois composite, solution désincrustante pour les dalles minérales. Le brossage manuel ou mécanique décolle les mousses et lichens installés. <strong>La pression de rinçage est ajustée</strong> selon la porosité du matériau pour préserver les joints et la surface.</p>\n\n<h3>Finition et prévention</h3>\n<p>L'eau de rinçage est dirigée vers les points d'écoulement existants. <strong>Un traitement anti-mousse préventif</strong> est appliqué sur les zones les plus exposées à l'ombre et à l'humidité. Le séchage naturel s'effectue en quelques heures selon les conditions météo, avec des conseils d'entretien saisonnier transmis en fin d'intervention.</p>",
      specificChallenges: [
        "Dalles gravillonnées des pavillons années 70 : <strong>joints poreux</strong> favorisant l'enracinement des mousses.",
        "Terrasses bois composite sensibles à la pression excessive et aux produits agressifs.",
        "Zones ombragées par les arbres des jardins du Bois de Gaumont : <strong>humidité persistante</strong>.",
        "Accès par l'intérieur de la maison pour certaines terrasses mitoyennes.",
        "Protection des plantations et jardinières pendant le traitement.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les dalles gravillonnées des pavillons du Bois de Gaumont sans endommager leur surface poreuse ?",
          answer:
            "<p>Les dalles gravillonnées nécessitent un <strong>traitement en deux temps</strong>. D'abord un produit désincrustant adapté aux supports minéraux poreux, laissé agir pour décoller les mousses. Puis un rinçage à pression modérée qui préserve les gravillons incrustés tout en éliminant les résidus végétaux.</p>",
        },
        {
          question:
            "Ma terrasse est noircie par des lichens installés depuis plusieurs années, est-ce récupérable ?",
          answer:
            "<p>Les lichens anciens laissent parfois des traces résiduelles sur les supports poreux, mais l'essentiel de la coloration disparaît après traitement. Un brossage mécanique combiné au produit adapté retire la couche organique. L'application d'un anti-mousse préventif ralentit significativement la réapparition.</p>",
        },
        {
          question:
            "Quel produit anti-mousse utilisez-vous sur une terrasse bois composite sans altérer sa teinte d'origine ?",
          answer:
            "<p>Le bois composite reçoit un <strong>traitement à pH neutre</strong>, sans chlore ni acide, qui préserve les pigments du matériau. Le produit agit sur les micro-organismes sans attaquer les fibres synthétiques. Le rinçage s'effectue à basse pression pour éviter tout marquage de la surface.</p>",
        },
        {
          question:
            "Faut-il éviter le nettoyeur haute pression sur certaines terrasses et comment décidez-vous du mode de nettoyage ?",
          answer:
            "<p>Le diagnostic initial détermine la résistance du support. Les dalles béton ou carrelage supportent une pression standard. Le bois, le composite et les joints fragiles imposent un nettoyage doux ou une pression très réduite. Nous adaptons systématiquement la méthode au matériau identifié.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement à Villiers-sur-Marne, avec nettoyage méthodique de chaque pièce et coordination adaptée aux délais d'état des lieux ou de fin de chantier.",
      whyUsBullets: [
        "Connaissance des typologies locatives du secteur Hautes Noues et des contraintes d'accès en collectif.",
        "Polyvalence sur tous types de sols et surfaces, du parquet flottant au carrelage ancien.",
        "Coordination directe avec agences et propriétaires pour respecter les créneaux d'état des lieux.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou à l'approche d'un changement de locataire, un logement accumule poussières, traces et résidus sur toutes les surfaces. Dans le <strong>quartier des Hautes Noues</strong>, où la rotation locative reste soutenue, les propriétaires et agences font face à des délais serrés entre deux occupants. Le nettoyage doit alors couvrir l'ensemble du bien sans retarder la remise des clés.</p>\n\n<p class=\"mt-4\">Un logement propre facilite l'état des lieux et évite les litiges sur le dépôt de garantie. Dans les <strong>appartements T2/T3 en collectifs</strong>, souvent desservis par des escaliers étroits, chaque recoin compte : plinthes, interrupteurs, placards intérieurs. Une mise en propreté soignée valorise le bien et rassure le prochain occupant dès la première visite.</p>\n\n<p class=\"mt-4\">Pour répondre aux demandes fréquentes d'états des lieux, nous organisons chaque intervention en amont avec les agences locales. Diagnostic du bien, planification du créneau, vérification des accès : tout est calé pour respecter vos contraintes de calendrier.</p>",
      uniqueDeepDive:
        "<h3>Un logement prêt à remettre</h3>\n<p>L'objectif est un bien propre sur l'ensemble des surfaces, sans trace de chantier ni résidu d'occupation. <strong>Sols lavés, vitres intérieures nettoyées</strong>, sanitaires désinfectés, placards vidés et essuyés.</p>\n<p class=\"mt-4\">Pour y parvenir, nous commençons par un diagnostic rapide : nature de l'intervention, état général, surfaces concernées.</p>\n\n<h3>Nettoyage pièce par pièce</h3>\n<p>Chaque zone reçoit un traitement adapté. Cuisine : plans de travail, crédence, électroménager. Salle de bain : faïence, joints, robinetterie. Pièces de vie : dépoussiérage complet, aspiration puis lavage des sols selon le revêtement.</p>\n<p class=\"mt-4\">Les finitions incluent interrupteurs, poignées, radiateurs et traces éventuelles de peinture ou colle si fin de chantier.</p>\n\n<h3>Contrôle et remise</h3>\n<p>Avant de quitter le logement, nous vérifions chaque pièce. Aération finale, vérification des oublis, remise des clés si convenu. Un compte-rendu peut être transmis à l'agence ou au propriétaire sur demande.</p>",
      specificChallenges: [
        "<strong>Délais serrés entre deux locataires</strong> dans les résidences à forte rotation.",
        "<strong>Escaliers étroits et absence d'ascenseur</strong> dans certains immeubles du centre-ville.",
        "Coordination nécessaire avec digicode et gardien pour accéder au logement.",
        "Traces de peinture ou enduit à traiter après travaux de rénovation.",
        "Stationnement difficile en centre-ville, anticipation du créneau d'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Quel protocole appliquez-vous pour un nettoyage fin de chantier dans un appartement avant état des lieux à Villiers-sur-Marne ?",
          answer:
            "<p>Nous commençons par évacuer les résidus de chantier, puis dépoussiérons plafonds, murs et plinthes. Les sols sont aspirés et lavés selon leur nature. Les traces de peinture ou colle sont traitées manuellement. Vitres intérieures et sanitaires sont nettoyés en dernier pour un rendu complet.</p>",
        },
        {
          question:
            "Pour un T2 proche de la rue du Général Leclerc, quelle surface moyenne couvrez-vous lors d'un ménage état des lieux ?",
          answer:
            "<p>Un T2 représente généralement 35 à 50 m². <strong>L'intervention couvre l'ensemble du logement</strong> : pièces de vie, cuisine, salle de bain, WC et placards. Le temps nécessaire dépend de l'état initial et des finitions demandées. Un devis précis est établi après échange sur vos besoins.</p>",
        },
        {
          question:
            "Comment coordonnez-vous l'intervention avec une agence immobilière locale pour respecter le créneau d'état des lieux ?",
          answer:
            "<p>Nous échangeons directement avec l'agence pour caler la date et l'heure. Les informations d'accès sont confirmées en amont. Si le créneau est contraint, nous adaptons notre organisation pour libérer le logement à temps. Un contact est maintenu jusqu'à la remise effective.</p>",
        },
        {
          question:
            "Si l'immeuble dispose d'un digicode ou d'un gardien, quelles informations demandez-vous pour garantir l'accès le jour J ?",
          answer:
            "<p>Nous demandons le <strong>code d'entrée</strong>, les éventuels badges nécessaires et les coordonnées du gardien si présent. En cas de remise de clés préalable, nous convenons d'un point de dépôt sécurisé. Ces éléments sont vérifiés 24 à 48 heures avant l'intervention pour éviter tout retard.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
