import type { City } from "~/types/geo";

const city: City = {
  name: "Tremblay-en-France",
  slug: "tremblay-en-france",
  postalCodes: ["93290"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Tremblay-en-France pour l'entretien des parties communes, parkings et espaces extérieurs. Du Vert-Galant aux abords de la zone aéroportuaire, une équipe réactive et des méthodes adaptées aux contraintes locales.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format imposé : 2 paragraphes then a <ul>
  hubIntro: "<p>Au cœur de la plateforme aéroportuaire CDG et bordée par le Canal de l'Ourcq, Tremblay-en-France présente des configurations variées. Klinova accompagne syndics, gestionnaires et particuliers avec une organisation pensée pour chaque secteur de la commune.</p>\n<p class=\"mt-4\">Propreté des halls, entretien des parkings, remise en état des extérieurs : nous adaptons nos interventions aux rythmes de chaque bâtiment. Reporting disponible sur demande, coordination directe avec vos interlocuteurs habituels.</p>\n<ul>\n  <li><strong>Connaissance du terrain :</strong> Nos équipes connaissent les accès du Vert-Galant comme ceux des résidences du Centre-Ville, et ajustent leur organisation en conséquence.</li>\n  <li><strong>Flexibilité horaire :</strong> Interventions possibles en dehors des heures de passage, notamment pour les copropriétés avec gardien ou les sites à forte rotation.</li>\n  <li><strong>Interlocuteur unique :</strong> Un référent dédié assure le suivi de vos demandes et la coordination avec les occupants ou gestionnaires.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Dépôts noirs</strong> sur balcons et façades liés au trafic aérien et autoroutier (A104, A1).",
    "Stationnement contraint dans les rues étroites du <strong>Vert-Galant</strong> et du Vieux-Pays.",
    "Parkings souterrains des résidences du Centre-Ville exposés aux <strong>fuites d'huile</strong> et poussières.",
    "Halls d'immeubles à fort passage nécessitant des <strong>horaires décalés</strong> pour limiter la gêne.",
    "Humidité et mousses sur terrasses des secteurs proches du <strong>Canal de l'Ourcq</strong>.",
    "Accès par digicode ou badge fréquent dans les résidences récentes et zones bureaux.",
  ],

  // Texte brut uniquement
  districts: [
    "Le Vert-Galant",
    "Le Vieux-Pays",
    "Le Centre-Ville",
    "Les Cottages",
    "Le Bois-Saint-Denis",
    "Secteur gare",
  ],
  nearbyCities: [
        "villepinte",
        "sevran",
        "mitry-mory",
        "aulnay-sous-bois",
        "livry-gargan",
        "villeparisis",
        "le-blanc-mesnil",
        "montfermeil",
        "le-raincy",
        "bondy"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Tremblay-en-France",
    "Aéroport Paris-Charles de Gaulle",
    "Gare du Vert-Galant",
    "Canal de l'Ourcq",
    "Circuit Carole",
    "Église Saint-Médard",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Intervenez-vous aussi bien dans les quartiers pavillonnaires que dans les zones proches de l'aéroport ?",
      answer: "<p>Oui, nous couvrons l'ensemble de Tremblay-en-France. Que ce soit pour un pavillon du Vert-Galant ou un immeuble proche de la zone de fret, nous adaptons notre <strong>logistique</strong> et nos horaires aux contraintes d'accès et de stationnement propres à chaque secteur.</p>",
    },
    {
      question: "Comment se passe la prise de rendez-vous pour une première intervention ?",
      answer: "<p>Après votre demande, nous convenons d'un créneau pour évaluer les surfaces et contraintes. Un devis détaillé vous est transmis sous 48 heures. Si validé, l'intervention est planifiée selon vos disponibilités, avec <strong>confirmation la veille</strong>.</p>",
    },
    {
      question: "Proposez-vous des interventions en urgence sur Tremblay-en-France ?",
      answer: "<p>Nous traitons les demandes urgentes dans la mesure de nos disponibilités. Pour les situations critiques — dégât des eaux, souillure importante — nous priorisons un passage rapide. Contactez-nous directement pour évaluer la <strong>faisabilité sous 24 à 48 heures</strong>.</p>",
    },
    {
      question: "Travaillez-vous avec les syndics et gestionnaires de copropriétés ?",
      answer: "<p>Oui, nous collaborons régulièrement avec des syndics et gestionnaires pour l'entretien des parties communes, parkings et espaces extérieurs. Nous fournissons un <strong>reporting d'intervention</strong> et assurons la coordination avec gardiens ou conseils syndicaux si nécessaire.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // Services: include only requested services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction en profondeur des salissures incrustées dans vos moquettes, avec séchage accéléré pour une remise en service rapide adaptée aux contraintes d'exploitation.",
      whyUsBullets: [
        "Connaissance des contraintes hôtelières et tertiaires autour de la plateforme aéroportuaire de Tremblay-en-France.",
        "Matériel d'injection-extraction professionnel adapté aux velours épais et dalles plombantes haute densité.",
        "Interventions planifiées en horaires décalés pour respecter l'exploitation continue des établissements.",
      ],
      uniqueIntro: "<p>Dans les <strong>zones hôtelières et bureaux proches des terminaux de l'aéroport Paris-Charles de Gaulle</strong>, les moquettes subissent un passage continu. Valises à roulettes, chariots de service, flux de voyageurs internationaux : les fibres accumulent poussières fines, traces de semelles et résidus gras en quelques semaines. Les halls d'accueil et couloirs d'étages perdent leur aspect soigné, ce qui impacte directement l'image perçue par les clients.</p>\n<p class=\"mt-4\">Un entretien régulier par injection-extraction redonne aux <strong>moquettes hôtelières en velours et aux dalles plombantes des bureaux</strong> leur tenue d'origine. Les teintes retrouvent de la profondeur, les odeurs de confinement disparaissent, et les réclamations liées à l'hygiène diminuent. Pour les gestionnaires, c'est aussi un moyen de prolonger la durée de vie des revêtements sans remplacement anticipé.</p>\n<p class=\"mt-4\">Face au <strong>passage intensif lié aux activités aéroportuaires</strong>, chaque intervention est planifiée selon vos créneaux d'exploitation. Diagnostic préalable, protection des plinthes et mobilier, balisage si nécessaire : l'organisation s'adapte aux rotations 24/7 des établissements concernés.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\n<p>Les couloirs et halls d'entrée concentrent l'essentiel du trafic. L'aspiration préalable élimine les particules libres avant le traitement humide. L'injection-extraction cible ensuite les fibres en profondeur, avec plusieurs passes sur les axes les plus sollicités.</p>\n\n<h3>Espaces de réception et salles d'attente</h3>\n<p>Ces surfaces reçoivent des taches ponctuelles (café, tanin, traces grasses). Un détachage ciblé précède le lavage général. Les plinthes et bas de murs sont protégés pour éviter les projections.</p>\n\n<h3>Bureaux et zones secondaires</h3>\n<p><strong>Le traitement s'étend aux espaces moins fréquentés</strong> mais exposés à la poussière ambiante. L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du velours et la ventilation disponible, le délai de remise en service varie de quelques heures à une demi-journée. Des consignes de non-piétinement sont transmises pour garantir un résultat homogène.</p>",
      specificChallenges: [
        "Flux voyageurs 24/7 : les moquettes des halls d'hôtels <strong>accumulent traces de valises</strong> et semelles en continu.",
        "Dalles plombantes en bureaux aéroportuaires : fibres denses qui retiennent poussières fines et résidus gras.",
        "Contraintes horaires strictes : interventions à caler <strong>entre les rotations de chambres</strong> ou hors heures de bureau.",
        "Odeurs de confinement dans les couloirs fermés, amplifiées par la climatisation permanente.",
        "Accès véhicule parfois restreint sur les zones sécurisées proches des terminaux.",
      ],
      faqAdditions: [
        {
          question:
            "Avec des escaliers étroits et des halls en Centre-Ville, comment organisez-vous le passage du matériel pour le nettoyage de moquette ?",
          answer: "<p>Le matériel d'injection-extraction se décline en modules transportables. <strong>Pour les accès contraints du Centre-Ville de Tremblay-en-France</strong>, nous utilisons des unités compactes montées à l'étage. Le flexible rejoint la machine restée en bas si nécessaire, limitant l'encombrement dans les cages d'escalier.</p>",
        },
        {
          question:
            "Après un nettoyage professionnel, combien de temps faut-il attendre avant de réutiliser une moquette d'hôtel près de CDG ?",
          answer: "<p>Le séchage dépend de l'épaisseur du velours et de la ventilation. Pour les hôtels proches des terminaux, où la <strong>climatisation fonctionne en continu</strong>, comptez généralement trois à six heures. Nous transmettons des consignes de non-piétinement pour garantir un rendu homogène avant la remise en service des chambres.</p>",
        },
        {
          question:
            "Quelle méthode recommandez-vous pour les moquettes de bureaux et couloirs d'entreprises aéroportuaires ?",
          answer: "<p>L'injection-extraction reste la technique la plus adaptée aux dalles plombantes et velours denses des bureaux de la zone CDG. Elle extrait les salissures en profondeur sans détremper les fibres. Pour les taches localisées, un détachage préalable complète le traitement avant le lavage général.</p>",
        },
        {
          question:
            "Comment procédez-vous pour traiter des taches anciennes et incrustées sur moquette de halls d'immeuble ?",
          answer: "<p>Les taches anciennes nécessitent un pré-traitement ciblé. Nous appliquons un détachant adapté à la nature du dépôt (tanin, graisse, pigment) avant l'injection-extraction. Sur les halls d'immeuble du Centre-Ville, plusieurs passes peuvent être nécessaires selon l'ancienneté et la densité des fibres.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et dégraissant professionnel, gestion stricte des eaux usées et balisage sécurisé pour maintenir l'accès aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès en zone logistique et des parkings souterrains du secteur Centre-Ville de Tremblay.",
        "Autolaveuse professionnelle et dégraissants adaptés aux revêtements béton, enrobé ou résine selon configuration.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation des véhicules et limiter la gêne aux usagers.",
      ],
      uniqueIntro: "<p>Les traces noires s'accumulent sur les dalles béton, les coulures d'huile marquent les emplacements, et la poussière de pneus forme un voile gras sur l'ensemble du revêtement. Dans les parkings de la <strong>zone de fret de Tremblay-en-France</strong>, le passage régulier de poids lourds et de véhicules utilitaires accélère cet encrassement. Les rampes d'accès deviennent glissantes, les rigoles se bouchent, et l'aspect général se dégrade rapidement.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier permet de retrouver un sol propre et sécurisé. Les revêtements en béton brut des sous-sols résidentiels ou en résine des parkings hôteliers retrouvent leur aspect d'origine. Les gestionnaires constatent moins de réclamations, et les usagers circulent sur des surfaces nettes, sans risque de glissade ni d'odeurs persistantes.</p>\n<p class=\"mt-4\">L'intervention s'organise en coordination avec vos contraintes d'exploitation. Rotation des véhicules par zones, balisage visible, horaires adaptés au trafic de la plateforme CDG : chaque chantier fait l'objet d'un plan d'accès validé en amont avec le donneur d'ordre.</p>",
      uniqueDeepDive: "<h3>Sol dégraissé et rampes sécurisées</h3>\n<p>L'objectif est d'obtenir un revêtement débarrassé des dépôts gras et des poussières incrustées. <strong>Les rampes retrouvent leur adhérence</strong>, les rigoles leur capacité d'évacuation. Sur les parkings à fort trafic, le résultat doit tenir plusieurs semaines malgré les passages répétés.</p>\n\n<h3>Lavage mécanisé et traitement ciblé</h3>\n<p>L'autolaveuse effectue des passes sur l'ensemble de la surface après un balayage préalable. Un dégraissant adapté au type de revêtement est appliqué sur les zones critiques : emplacements marqués par des fuites d'huile, pieds de murs, angles morts. Les regards et rigoles sont dégagés pour garantir l'écoulement.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p><strong>Les eaux de lavage sont récupérées</strong> ou dirigées vers les évacuations conformes. Aucun rejet sauvage. Le balisage reste en place jusqu'au séchage complet. Un dépoussiérage des blocs lumineux ou tuyauteries peut être réalisé sur demande. Un compte-rendu avec recommandations de fréquence est transmis au gestionnaire.</p>",
      specificChallenges: [
        "Trafic poids lourds en zone de fret : <strong>encrassement rapide des sols par huile et gomme de pneus</strong>.",
        "Parkings souterrains du Centre-Ville avec rampes inclinées nécessitant un traitement antidérapant.",
        "Gestion des eaux de lavage conforme aux évacuations existantes, sans rejet sauvage.",
        "<strong>Coordination horaire avec les hôtels proches de CDG</strong> pour interventions sans gêne clientèle.",
        "Balisage sécurisé et rotation par zones pour maintenir l'accès pendant le chantier.",
      ],
      faqAdditions: [
        {
          question:
            "Comment organisez-vous le nettoyage d'un parking en zone de fret à Tremblay sans bloquer les livraisons ?",
          answer: "<p>L'intervention se découpe en zones successives. Nous définissons avec le gestionnaire un planning qui libère les accès prioritaires pendant le lavage. Le balisage oriente les véhicules vers les emplacements disponibles. Les horaires sont calés sur les créneaux de moindre activité logistique.</p>",
        },
        {
          question:
            "Quelle méthode utilisez-vous pour traiter les taches d'huile anciennes sur un sol béton de parking industriel ?",
          answer: "<p>Un dégraissant professionnel est appliqué sur les zones marquées avant le passage de l'autolaveuse. Les taches incrustées nécessitent parfois un temps de pose prolongé. Le lavage mécanisé extrait ensuite les résidus. Sur certains revêtements, plusieurs passes peuvent être nécessaires selon l'ancienneté des dépôts.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage dans un parking souterrain à Tremblay-en-France ?",
          answer: "<p>Les eaux chargées sont aspirées par l'autolaveuse ou dirigées vers les regards d'évacuation existants. <strong>Nous vérifions au préalable l'état des rigoles</strong> et leur capacité d'écoulement. Aucun rejet n'est effectué en dehors des points conformes. Un contrôle visuel est réalisé en fin d'intervention.</p>",
        },
        {
          question:
            "Quels créneaux proposez-vous pour nettoyer un parking d'hôtel proche de l'aéroport CDG ?",
          answer: "<p>Les interventions peuvent être programmées en horaires décalés : tôt le matin, en soirée ou la nuit selon les contraintes de l'établissement. L'objectif est d'éviter toute gêne pour la clientèle et le personnel. <strong>Le planning est validé avec le gestionnaire</strong> pour garantir un accès fluide aux véhicules.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Tremblay-en-France, avec traitement adapté au support, protection des voisins contre les coulures et séchage contrôlé pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux axes routiers ou bordant les espaces verts de Tremblay-en-France.",
        "Pression ajustée selon le support et l'état des joints, produits sélectionnés pour chaque revêtement.",
        "Dispositif anti-coulures systématique et coordination avec les occupants pour limiter la gêne.",
      ],
      uniqueIntro: "<p>Le long de l'Avenue du Parc et dans les résidences du Centre-Ville, les balcons <strong>accumulent rapidement un voile grisâtre</strong>. Les suies issues du trafic routier dense et les particules liées à la proximité des axes autoroutiers se déposent sur le sol, les garde-corps et les murs mitoyens. Après quelques mois, le carrelage perd son éclat et les joints noircissent sans que le simple passage du balai n'y change quoi que ce soit.</p>\n<p class=\"mt-4\">Cette couche de salissures empêche de profiter pleinement de l'espace extérieur. Sur les balcons en béton brut des grands ensembles comme sur les dalles sur plots des résidences plus récentes, la crasse incrustée donne une impression de négligence. Sortir une table ou installer quelques plantes devient moins agréable quand le sol colle sous les pieds et que les rebords restent ternes malgré les efforts.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon propre et accueillant. Diagnostic du support, protection des éléments sensibles, traitement adapté : chaque étape vise un résultat durable sans risque pour les voisins du dessous ni pour vos menuiseries.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Avant toute action, le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries (fenêtres, portes-fenêtres) reçoivent une protection pour éviter les projections. Un système anti-coulures est mis en place pour préserver le balcon du voisin situé en dessous.</p>\n\n<h3>Nettoyage et traitement du support</h3>\n<p>Les gros dépôts (feuilles, terre, débris) sont retirés manuellement. <strong>Un produit adapté au revêtement</strong> — carrelage, béton ou dalles — est appliqué puis brossé. Le garde-corps, les vitrages et les murs mitoyens accessibles sont traités dans la foulée. Un rinçage contrôlé évite les éclaboussures sur la façade.</p>\n\n<h3>Finition et séchage</h3>\n<p>Si les joints le permettent, une pression douce complète le rinçage pour déloger les résidus tenaces. <strong>L'eau résiduelle est raclée</strong> vers l'évacuation. Le balcon sèche en quelques heures selon l'exposition. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "<strong>Dépôts de suies liés au trafic routier</strong> et à la proximité des autoroutes A104 et A1.",
        "Mousses et traces vertes sur les balcons <strong>exposés à l'humidité près du Canal de l'Ourcq</strong>.",
        "Joints fragiles sur les balcons anciens du Centre-Ville nécessitant une pression adaptée.",
        "Vis-à-vis important en habitat collectif : gestion stricte des projections d'eau.",
        "Loggias fermées demandant une évacuation d'eau spécifique sans écoulement extérieur.",
      ],
      faqAdditions: [
        {
          question:
            "Quel procédé utilisez-vous pour nettoyer un balcon carrelé très encrassé le long de l'Avenue du Parc ?",
          answer: "<p>Nous appliquons un détergent adapté au carrelage, suivi d'un <strong>brossage mécanique pour décoller les suies routières incrustées</strong>. Le rinçage se fait à pression modérée afin de préserver les joints. Un raclage final accélère le séchage et évite les traces résiduelles sur le revêtement.</p>",
        },
        {
          question:
            "Comment traitez-vous les dépôts verts et la mousse sur un balcon exposé à l'humidité ?",
          answer: "<p>Un produit anti-mousse est appliqué sur les zones concernées avant le nettoyage principal. Le brossage déloge les végétaux incrustés sans abîmer le support. Le rinçage contrôlé élimine les résidus et limite la repousse pendant plusieurs mois, surtout sur les balcons proches des espaces verts.</p>",
        },
        {
          question:
            "Que faut-il déplacer ou protéger avant l'intervention sur un balcon d'appartement ?",
          answer: "<p>Nous vous conseillons de rentrer les objets fragiles et les petites plantes. Le mobilier volumineux est bâché sur place. Les jardinières fixées aux garde-corps sont protégées par nos soins. Cette préparation évite les projections et permet un travail complet sur toute la surface.</p>",
        },
        {
          question:
            "Faut-il adapter la méthode selon qu'il s'agisse d'une loggia ou d'un balcon ouvert en Centre-Ville ?",
          answer: "<p>Oui. Sur une loggia fermée, l'évacuation de l'eau est plus contrainte : nous utilisons un système d'aspiration et de raclage pour éviter toute stagnation. Sur un balcon ouvert, le rinçage classique suffit, avec un dispositif anti-coulures pour protéger l'étage inférieur.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des secteurs à risque comme les abords du clocher Saint-Médard et les toitures du Vieux-Pays.",
        "Protocole strict avec EPI complets, confinement de la zone et désinfection virucide adaptée aux fientes.",
        "Évacuation des déchets en sacs étanches et coordination discrète pour limiter la gêne auprès des voisins.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines sans intervention, les fientes <strong>s'accumulent sur les balcons et corniches</strong> proches de l'église Saint-Médard et du quartier du Vieux-Pays. Les pigeons trouvent refuge sous les toitures anciennes et reviennent chaque jour déposer leurs déjections. L'odeur devient persistante, le sol collant, et l'espace extérieur finit par être délaissé faute de pouvoir y circuler sereinement.</p>\n<p class=\"mt-4\">Les surfaces béton, les garde-corps métalliques et les vitrages subissent une dégradation progressive. L'acidité des fientes attaque les revêtements, laisse des traces durables et favorise la corrosion si rien n'est fait. Le balcon perd son usage quotidien : impossible d'y étendre du linge ou d'y prendre l'air sans gêne.</p>\n<p class=\"mt-4\">Un traitement structuré permet de retrouver un espace sain. Le protocole inclut le retrait des déjections, la désinfection des supports contaminés et l'évacuation sécurisée des déchets. Selon l'ampleur de l'infestation, des dispositifs de dissuasion peuvent compléter l'intervention pour limiter le risque de réinfestation.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de rendre l'espace utilisable sans risque sanitaire. Les supports retrouvent un aspect propre, les odeurs disparaissent et les agents pathogènes sont éliminés grâce à un produit virucide homologué avec temps de contact respecté.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>L'intervention débute par la protection de l'intérieur du logement et du voisinage. L'équipe porte combinaison, masque FFP2, gants et lunettes. Les fientes sont <strong>humidifiées pour éviter l'envol de particules</strong>, puis ramassées et conditionnées en sacs étanches.</p>\n\n<h3>Nettoyage des supports et rinçage</h3>\n<p>Le sol, le garde-corps, les vitrages et les murs mitoyens sont traités selon leur nature. Après application du désinfectant, un rinçage complet est effectué. Un délai d'aération est préconisé avant de réutiliser le balcon. Si nécessaire, des pics ou filets anti-pigeons peuvent être posés sur les rebords exposés.</p>",
      specificChallenges: [
        "Balcons exposés aux nidifications sous toitures anciennes du Vieux-Pays.",
        "Garde-corps métalliques corrodés par l'acidité des fientes non traitées.",
        "Odeurs tenaces qui imprègnent le linge étendu à proximité.",
        "Risque sanitaire nécessitant une désinfection complète avant réutilisation.",
        "Accès parfois contraints dans les maisons mitoyennes du quartier historique.",
      ],
      faqAdditions: [
        {
          question:
            "Mon balcon près de l'église Saint-Médard est entièrement recouvert de fientes : quelle prise en charge d'urgence proposez-vous ?",
          answer: "<p>Nous intervenons rapidement avec un protocole complet. L'équipe confine la zone, humidifie les déjections pour éviter la dispersion de poussières contaminées, puis procède au ramassage et à la désinfection. Les déchets sont évacués en sacs étanches le jour même.</p>",
        },
        {
          question:
            "Quel protocole EPI et quelles étapes de désinfection appliquez-vous pour des fientes sur balcon à Tremblay-en-France ?",
          answer: "<p><strong>Nos intervenants portent combinaison jetable, masque FFP2, gants</strong> et lunettes de protection. Après collecte des fientes, un produit virucide homologué est appliqué sur toutes les surfaces avec un temps de contact respecté. Le rinçage final permet une réutilisation sécurisée du balcon.</p>",
        },
        {
          question:
            "Quels produits garantissent une désinfection efficace sur un balcon souillé dans un secteur urbain comme le Centre-Ville ?",
          answer: "<p>Nous utilisons des désinfectants bactéricides et virucides adaptés aux supports extérieurs. Le temps d'action est calibré selon l'épaisseur des dépôts. Cette étape élimine les agents pathogènes présents dans les fientes et neutralise les odeurs résiduelles.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous un traitement préventif contre la réinfestation par pigeons au Vieux-Pays ?",
          answer: "<p>Sans dispositif de dissuasion, les pigeons reviennent généralement sous quelques semaines. Nous conseillons la pose de pics ou filets sur les rebords exposés. Un contrôle annuel permet de vérifier l'état des protections et d'intervenir avant que les dépôts ne s'accumulent à nouveau.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures incrustées et séchage contrôlé pour retrouver un textile propre et agréable au quotidien.",
      whyUsBullets: [
        "Connaissance des logements pavillonnaires de Tremblay-en-France, des Cottages au Vert-Galant, et de leurs configurations intérieures.",
        "Détachage ciblé selon la nature du textile et séchage optimisé pour une remise en service rapide du mobilier.",
        "Organisation adaptée aux rues étroites : matériel portable, intervention discrète, aucun encombrement prolongé.",
      ],
      uniqueIntro: "<p>Comment préserver la propreté d'un canapé familial quand les enfants y passent leurs après-midi, que le chien s'y installe régulièrement et que les taches de café s'accumulent au fil des mois ? Dans les pavillons du quartier <strong>Les Cottages</strong>, les textiles d'ameublement absorbent le quotidien : poussières, allergènes, traces alimentaires. Le confort visuel se dégrade progressivement, et les odeurs finissent par s'installer dans les fibres.</p>\n<p class=\"mt-4\">Un nettoyage en profondeur redonne aux tissus leur aspect d'origine. Les couleurs retrouvent de l'éclat, les taches anciennes s'estompent, et l'atmosphère du salon redevient agréable. Sur les <strong>canapés tissu ou les tapis laine et synthétique</strong> présents dans ces maisons individuelles, chaque fibre réagit différemment : adapter la méthode au textile garantit un résultat durable sans abîmer le revêtement.</p>\n<p class=\"mt-4\">L'intervention s'organise en tenant compte des contraintes d'accès propres aux rues pavillonnaires : stationnement limité, passage étroit vers le salon. Le matériel portable permet d'intervenir efficacement sans encombrer l'entrée ni mobiliser l'espace trop longtemps.</p>",
      uniqueDeepDive: "<h3>Textile propre et taches effacées</h3>\n<p>Le résultat visé : un canapé débarrassé des auréoles, un tapis sans traces incrustées, un matelas assaini. Les fibres retrouvent leur souplesse et les couleurs leur netteté. L'odeur de propre remplace les relents persistants.</p>\n\n<h3>Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute action, identification du tissu : coton, velours, laine ou synthétique. Test discret sur une zone cachée si textile fragile. Les taches tenaces reçoivent un détachant adapté, enzymatique pour les traces organiques comme l'urine ou les résidus alimentaires.</p>\n\n<h3>Injection-extraction et séchage maîtrisé</h3>\n<p><strong>Le nettoyage principal utilise la technique injection-extraction</strong> : solution nettoyante injectée dans les fibres, puis aspirée avec les salissures. La pression et la température s'ajustent selon la sensibilité du textile. L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du tissu et la ventilation de la pièce, compter quelques heures avant réutilisation. Des conseils d'entretien prolongent la durée du résultat.</p>",
      specificChallenges: [
        "Taches anciennes sur canapés familiaux : <strong>café, vin, traces d'enfants accumulées depuis des mois</strong>.",
        "Odeurs persistantes liées aux animaux domestiques, incrustées dans les fibres des tapis.",
        "Textiles variés dans un même foyer : velours fragile, laine, synthétique demandant des approches distinctes.",
        "Accès contraints dans les pavillons : portes étroites, escaliers, stationnement limité en rue.",
        "Séchage à anticiper <strong>selon la saison et l'aération du logement</strong> pour éviter l'humidité résiduelle.",
      ],
      faqAdditions: [
        {
          question:
            "Après un nettoyage de canapé dans une maison des Cottages, combien de temps avant de pouvoir s'y asseoir à nouveau ?",
          answer: "<p>Le temps de séchage dépend de l'épaisseur du tissu et de la ventilation. En général, comptez entre 4 et 8 heures. Dans un pavillon bien aéré, le canapé est utilisable en fin de journée. Nous conseillons de laisser les fenêtres ouvertes pour accélérer le processus.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'urine anciennes et les odeurs persistantes sur un tapis familial ?",
          answer: "<p>Les traces organiques nécessitent un détachant enzymatique qui décompose les résidus en profondeur. L'injection-extraction retire ensuite les particules dégradées. Pour les odeurs tenaces, un second passage peut être nécessaire. Le résultat dépend de l'ancienneté de la tache et de la densité du tapis.</p>",
        },
        {
          question:
            "Quelle méthode utilisez-vous selon le textile du canapé, tissu coton ou velours par exemple ?",
          answer: "<p>Chaque fibre réagit différemment à l'eau et à la chaleur. Le coton supporte une extraction plus intense, tandis que le velours demande une pression réduite et une température basse. Un test préalable sur zone cachée permet d'ajuster les réglages et d'éviter toute déformation ou décoloration.</p>",
        },
        {
          question:
            "Si la rue est étroite au Vert-Galant, comment organisez-vous l'intervention pour le nettoyage d'un canapé ?",
          answer: "<p>Le matériel utilisé est portable et compact, ce qui évite de bloquer l'entrée ou le trottoir. Le véhicule stationne au plus proche, et l'équipement <strong>rejoint le salon sans encombrer les passages</strong>. L'intervention reste discrète et ne gêne pas les voisins ni la circulation locale.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support — pierre, bois ou composite — pour éliminer mousses, dépôts verts et taches tenaces, et retrouver une surface saine et praticable.",
      whyUsBullets: [
        "Connaissance des terrasses exposées à l'humidité du Canal de l'Ourcq et des zones ombragées du Vert-Galant.",
        "Maîtrise des techniques adaptées à chaque support — pierre, bois, composite — et application de traitements anti-mousse durables.",
        "Protection systématique du mobilier et des plantations, gestion de l'écoulement pour préserver le voisinage.",
      ],
      uniqueIntro: "<p>Les traces verdâtres et les voiles grisés sont visibles sur de nombreuses terrasses du secteur Vert-Galant et des pavillons bordant le <strong>Canal de l'Ourcq</strong>. L'humidité ambiante, combinée à l'ombre des arbres environnants, favorise l'apparition de mousses et de lichens qui s'incrustent progressivement dans les joints et les pores du revêtement. Ces dépôts rendent la surface glissante et ternissent l'aspect général de l'espace extérieur.</p>\n<p class=\"mt-4\">Sur les <strong>dalles en pierre, le bois composite ou le béton</strong> — supports fréquents dans les constructions pavillonnaires de Tremblay — ces salissures s'accrochent différemment selon la porosité du matériau. Sans traitement adapté, elles réapparaissent chaque saison, dégradant peu à peu l'état du sol et limitant l'usage de la terrasse aux beaux jours.</p>\n<p class=\"mt-4\">Une intervention structurée permet de traiter chaque type de support avec les produits et la pression appropriés. La proximité du canal et du parc urbain accentue le retour des algues : un traitement anti-mousse préventif prolonge la durée du résultat obtenu et limite les interventions répétées.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier de jardin, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries — baies vitrées, seuils de porte — sont protégées contre les projections. Un balayage préalable élimine les feuilles mortes, la terre accumulée et les débris végétaux.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation douce pour le bois composite, solution désincrustante pour la pierre ou le béton. Le brossage — manuel ou mécanique selon l'encrassement — décolle mousses et lichens. La haute pression, réglée en fonction du matériau, rince l'ensemble sans endommager les joints ni les surfaces poreuses.</p>\n\n<h3>Finition et conseils</h3>\n<p>Les garde-corps, murets et escaliers extérieurs sont traités dans la même intervention. L'eau est dirigée vers les points d'écoulement pour éviter les stagnations. Un traitement anti-mousse préventif peut être appliqué pour retarder la réapparition des dépôts verts. Des conseils d'entretien saisonnier sont transmis pour prolonger le résultat.</p>",
      specificChallenges: [
        "Humidité persistante près du Canal de l'Ourcq <strong>favorisant mousses et algues sur dalles et bois</strong>.",
        "Terrasses pavillonnaires du Vert-Galant souvent ombragées par la végétation, accélérant l'encrassement.",
        "Supports variés — pierre naturelle, béton, composite — nécessitant pression et produits différenciés.",
        "<strong>Accès jardin parfois uniquement par l'intérieur de la maison</strong>, imposant une organisation logistique adaptée.",
        "Joints poreux sur dalles anciennes retenant les dépôts verts malgré un nettoyage superficiel.",
      ],
      faqAdditions: [
        {
          question:
            "Quel procédé technique conseillez-vous pour nettoyer une terrasse en pierre noircie par l'humidité près du Canal de l'Ourcq ?",
          answer: "<p>Nous appliquons d'abord un produit désincrustant adapté à la pierre, puis un brossage mécanique décolle les dépôts incrustés. La haute pression est réglée pour ne pas fragiliser les joints. Ce protocole élimine le voile noir sans altérer la surface, même sur les dalles poreuses exposées à l'humidité du canal.</p>",
        },
        {
          question:
            "Comment éliminez-vous durablement mousses et lichens sur une terrasse exposée au Canal de l'Ourcq ?",
          answer: "<p>Après le nettoyage, un traitement anti-mousse à action prolongée est appliqué sur l'ensemble de la surface. Ce produit freine la repousse pendant plusieurs mois. Dans les zones particulièrement humides bordant le canal, nous recommandons une application préventive avant chaque saison chaude pour maintenir le résultat.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse appliquez-vous et combien de temps avant la saison chaude faut-il intervenir ?",
          answer: "<p>Nous utilisons un traitement anti-mousse professionnel qui agit en profondeur sur les spores. L'idéal est d'intervenir quatre à six semaines avant les beaux jours : le produit a le temps de pénétrer et d'empêcher la repousse printanière. Sur les terrasses en bois composite ou pierre, l'effet préventif dure généralement toute la saison.</p>",
        },
        {
          question:
            "Faut-il privilégier haute pression ou nettoyage doux sur une terrasse en bois composite versus pierre à Tremblay ?",
          answer: "<p>Le bois composite supporte mal une pression trop forte : nous utilisons un jet modéré associé à un brossage doux pour préserver les fibres. La pierre naturelle tolère une pression plus élevée, surtout si les joints sont en bon état. Nous adaptons systématiquement le réglage au matériau pour éviter toute dégradation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux plafonds, avec gestion coordonnée des accès et respect des délais pour une restitution ou une entrée sans accroc.",
      whyUsBullets: [
        "Connaissance des typologies locales : pavillons anciens du Vert-Galant, appartements fonctionnels du Centre-Ville, studios pour personnel mobile.",
        "Polyvalence sur tous types de sols et finitions : parquet, carrelage, moquette, traces de chantier, résidus de colle.",
        "Organisation calée sur vos contraintes : récupération de clés, coordination agence, intervention rapide pour respecter les délais de relocation.",
      ],
      uniqueIntro: "<p>Après plusieurs mois d'occupation ou à la suite de travaux de rénovation, les appartements du Centre-Ville et les pavillons du Vert-Galant accumulent <strong>poussières fines, traces sur les murs et résidus tenaces</strong> dans les pièces d'eau. La rotation locative importante, notamment liée au personnel aéroportuaire, impose des remises en état fréquentes dans des délais souvent serrés.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite la signature d'un bail, évite les litiges lors de l'état des lieux et permet au prochain occupant de s'installer dans de bonnes conditions. Les biens concernés vont du T3 en collectif au pavillon ancien avec parquet, en passant par les studios fonctionnels — chaque configuration demande une approche adaptée aux revêtements présents.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en tenant compte des contraintes d'accès, des délais imposés par les agences ou propriétaires, et des spécificités du bien. Ménage d'état des lieux, nettoyage fin de chantier ou intervention après sinistre : la coordination avec les différents interlocuteurs fait partie intégrante de notre prestation.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être occupé ou restitué</h3>\n<p>L'objectif est de rendre chaque pièce propre, sans trace ni résidu, avec des surfaces nettoyées en profondeur. <strong>Sols, vitres intérieures, sanitaires et placards</strong> doivent répondre aux attentes d'un état des lieux ou d'une remise de clés.</p>\n\n<h3>Diagnostic et traitement adapté aux surfaces</h3>\n<p><strong>Nous commençons par identifier les zones critiques</strong> : traces de peinture après travaux, calcaire incrusté dans les pièces d'eau, poussière accumulée sur les plinthes et radiateurs. Le traitement varie selon les revêtements — parquet ancien, carrelage, moquette de chambre — pour éviter toute dégradation.</p>\n\n<h3>Coordination et respect des délais</h3>\n<p>L'intervention s'organise en lien avec le propriétaire, l'agence ou l'artisan concerné. Nous récupérons les clés ou accédons via digicode selon les modalités convenues. Un contrôle final permet de valider la conformité avant restitution du logement.</p>",
      specificChallenges: [
        "<strong>Rotation locative soutenue près de la zone aéroportuaire</strong>, avec des délais de remise en état souvent courts.",
        "Pavillons anciens du Vert-Galant avec parquets fragiles nécessitant un traitement adapté.",
        "Appartements en collectif avec accès par digicode et coordination gardien à anticiper.",
        "Résidus de chantier fréquents après rénovation : <strong>plâtre, colle, traces de peinture sur les sols</strong>.",
        "Demandes urgentes après dégât des eaux dans les immeubles du Centre-Ville.",
      ],
      faqAdditions: [
        {
          question:
            "Quel délai d'intervention proposez-vous pour un ménage d'état des lieux sur une location proche de la gare Vert-Galant ?",
          answer: "<p>Nous intervenons généralement sous 48 à 72 heures selon la disponibilité. Pour les demandes urgentes liées à une remise de clés imminente, nous adaptons notre planning. La récupération des clés ou l'accès par digicode est organisé en amont avec vous ou l'agence concernée.</p>",
        },
        {
          question:
            "Quelles techniques employez-vous pour enlever résidus de plâtre et traces de colle après travaux dans une maison du Vert-Galant ?",
          answer: "<p>Nous procédons d'abord à un dépoussiérage complet des surfaces hautes vers le sol. Les résidus de plâtre sont retirés mécaniquement, puis les traces de colle traitées avec des produits adaptés au support — parquet, carrelage ou peinture — pour éviter toute dégradation du revêtement.</p>",
        },
        {
          question:
            "Quel niveau de propreté garantissez-vous pour un nettoyage fin de chantier demandé par une agence locale à Tremblay-en-France ?",
          answer: "<p>Le logement est rendu dans un état conforme aux exigences d'un état des lieux d'entrée : sols sans trace, vitres propres, sanitaires détartrés, placards nettoyés intérieurement. Un contrôle visuel final permet de valider chaque pièce avant la remise des clés.</p>",
        },
        {
          question:
            "Comment procédez-vous pour un nettoyage après dégât des eaux dans un appartement du Centre-Ville ?",
          answer: "<p>Après assèchement du sinistre, nous intervenons pour éliminer les traces d'humidité, nettoyer les surfaces touchées et traiter les éventuelles moisissures superficielles. Les sols et plinthes sont nettoyés en profondeur. Si des travaux de remise en état ont eu lieu, nous assurons également le nettoyage fin de chantier.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;