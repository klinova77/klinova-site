import type { City } from "~/types/geo";

const city: City = {
  name: "Pantin",
  slug: "pantin",
  postalCodes: ["93500"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Pantin pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Entre le Canal de l'Ourcq et les résidences des Courtillières, une équipe locale adaptée aux configurations variées de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 <p> puis <ul>
  hubIntro: `<p>Au bord du Canal de l'Ourcq, entre les Magasins Généraux et le quartier des Courtillières, Klinova accompagne syndics, gestionnaires et entreprises dans l'entretien régulier de leurs locaux. Une présence terrain qui s'adapte aux contraintes d'accès et aux exigences de chaque site.</p>
<p class="mt-4">Propreté des communs, remise en état des sols, assainissement des espaces extérieurs : nous organisons chaque intervention en fonction du bâti, des horaires sensibles et des attentes des occupants. Reporting disponible sur demande pour les donneurs d'ordre professionnels.</p>
<ul>
  <li><strong>Coordination locale :</strong> Planification adaptée aux marchés (Olympe de Gouges, Église), aux flux de bureaux et aux contraintes de stationnement en zone rouge.</li>
  <li><strong>Polyvalence des interventions :</strong> Halls, parkings, balcons, espaces verts — une équipe formée aux différentes typologies présentes sur la commune.</li>
  <li><strong>Discrétion et gêne minimale :</strong> Horaires décalés pour les sièges sociaux, balisage adapté dans les résidences à forte densité.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Halls ouverts</strong> dans certains ensembles anciens : poussières et salissures accumulées rapidement.",
    "<strong>Parkings souterrains</strong> des résidences récentes et bureaux : sols encrassés par suies et infiltrations possibles.",
    "<strong>Balcons exposés</strong> à la pollution de la N3 et du périphérique : dépôts noirs sur garde-corps et dalles.",
    "<strong>Stationnement très contraint</strong> en zone rouge : organisation logistique à anticiper pour chaque intervention.",
    "<strong>Immeubles de faubourg</strong> avec escaliers étroits et sans ascenseur : accès matériel à adapter.",
  ],

  // Texte brut uniquement
  districts: [
    "Mairie-Hoche",
    "Église",
    "Quatre-Chemins",
    "Petit-Pantin / Les Limites",
    "Les Courtillières",
    "Sept Arpents - Stalingrad",
  ],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Pantin",
    "Canal de l'Ourcq",
    "Magasins Généraux",
    "Grands Moulins de Pantin",
    "Centre National de la Danse (CN D)",
    "Gare de Pantin (RER E)",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
faq: [
  {
    question: "Q1 : Comment organisez-vous vos interventions avec les contraintes de stationnement à Pantin ?",
    answer: `<p>Le stationnement peut être contraint selon les secteurs. Nous anticipons en repérant les solutions à proximité (parkings publics, accès de service, zones de dépose) et en planifiant des créneaux adaptés. Pour les interventions longues, nous coordonnons avec le gardien ou le gestionnaire afin de sécuriser un <strong>accès véhicule ponctuel</strong> pour le déchargement.</p>`,
  },
  {
    question: "Q2 : Intervenez-vous dans les immeubles avec badge ou digicode ?",
    answer: `<p>Oui, c'est fréquent à Pantin, notamment dans les résidences récentes et les copropriétés réhabilitées. Nous récupérons les <strong>accès</strong> en amont auprès du syndic ou du gardien. Pour les bureaux sécurisés, nous nous adaptons aux protocoles d'entrée en vigueur.</p>`,
  },
  {
    question: "Q3 : Quel délai pour une intervention urgente sur la commune ?",
    answer: `<p>Selon la nature de la demande et notre planning, nous pouvons intervenir sous <strong>24 à 48 heures</strong> pour les situations prioritaires. Un premier échange permet d'évaluer le contexte et de confirmer la disponibilité d'une équipe sur le secteur.</p>`,
  },
  {
    question: "Q4 : Proposez-vous un suivi régulier pour les copropriétés ou entreprises ?",
    answer: `<p>Nous mettons en place des contrats d'entretien avec une fréquence adaptée : hebdomadaire, mensuelle ou trimestrielle selon les besoins. Un <strong>reporting</strong> peut être transmis au syndic ou au responsable des services généraux pour assurer le suivi des prestations réalisées.</p>`,
  },
],


  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: n'inclure que les services présents dans la demande
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide selon la configuration des locaux.",
      whyUsBullets: [
        "Connaissance des configurations de bureaux à Pantin, des Grands Moulins aux immeubles rénovés du quartier Église.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles comme aux velours épais des espaces tertiaires.",
        "Interventions planifiées en dehors des heures de bureau pour limiter la gêne et permettre un séchage avant reprise d'activité.",
      ],
      uniqueIntro: `<p>Dans le secteur des <strong>Grands Moulins de Pantin</strong>, les moquettes des sièges sociaux et bureaux tertiaires accumulent poussières fines et traces de passage au fil des semaines. Les fibres textiles retiennent particules, résidus de semelles et taches de café, surtout dans les zones de circulation intense comme les couloirs d'accès et les espaces d'accueil. Un aspirateur seul ne suffit plus à redonner un aspect net aux revêtements.</p>
<p class="mt-4">Les <strong>immeubles industriels rénovés</strong> de Pantin, avec leurs halls ouverts et façades en briques, abritent souvent des dalles textiles ou velours ras dans les open-spaces. Ces supports encaissent un piétinement quotidien qui ternit les couleurs et incruste les salissures en profondeur. Un entretien adapté permet de prolonger la durée de vie du revêtement tout en améliorant le confort visuel des collaborateurs.</p>
<p class="mt-4">Le <strong>trafic urbain sur l'avenue Jean Lolive</strong> génère des dépôts de suies qui pénètrent dans les locaux par les entrées et systèmes de ventilation. Une intervention structurée, avec diagnostic préalable et protections adaptées, traite ces problématiques sans perturber l'activité des équipes.</p>`,
      uniqueDeepDive: `<h3>T1: Zones de circulation principale</h3>
<p>Les couloirs, halls d'entrée et espaces d'accueil concentrent l'essentiel du piétinement. Nous identifions le type de fibre et l'état d'encrassement avant toute action. Les plinthes et bas de murs sont protégés pour éviter les projections.</p>
<p class="mt-4">L'aspiration préalable retire les particules libres avant le traitement humide.</p>

<h3>T2: Espaces de travail et open-spaces</h3>
<p>Les dalles textiles des bureaux reçoivent un passage en injection-extraction. Cette méthode projette une solution nettoyante puis aspire immédiatement l'eau chargée de salissures. Les zones de trafic intense bénéficient de passes supplémentaires.</p>
<p class="mt-4">Le détachage ciblé traite les marques de café ou tanin sans saturer le support.</p>

<h3>T3: Finalisation et séchage</h3>
<p>L'extraction maximale limite le temps d'humidité résiduelle. Selon l'épaisseur du revêtement et la ventilation des locaux, le séchage complet intervient sous 4 à 8 heures. Nous indiquons les zones à ne pas piétiner pendant cette période et conseillons une fréquence d'entretien adaptée au flux quotidien.</p>`,
      specificChallenges: [
        "Suies et poussières urbaines pénétrant par les entrées des bureaux proches de la N3.",
        "Dalles textiles en open-space nécessitant une extraction puissante sans détremper le support.",
        "Halls ouverts des Grands Moulins avec accès sécurisé par badge à coordonner.",
        "Moquettes velours des salles de réunion sensibles aux auréoles si séchage mal maîtrisé.",
        "Horaires d'intervention à caler avec les équipes de sécurité et services généraux.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Les halls des Grands Moulins présentent des escaliers étroits : comment acheminez-vous le matériel de nettoyage sur site ?",
          answer: `<p>Nous utilisons des équipements compacts et modulables, transportables par escalier sans difficulté. Le repérage préalable permet d'identifier les accès les plus pratiques. Si un monte-charge existe, nous coordonnons avec le gestionnaire pour optimiser les allers-retours et limiter l'encombrement des parties communes.</p>`,
        },
        {
          question: "Q2 : Après un shampouinage en profondeur, combien de temps faut-il avant de réutiliser une moquette de bureau proche de l'avenue Jean Lolive ?",
          answer: `<p>Le temps de séchage varie selon l'épaisseur du revêtement et la ventilation du local. En général, comptez 4 à 8 heures pour une remise en service. Nous conseillons d'intervenir en fin de journée afin que les moquettes soient praticables dès le lendemain matin, sans résidu d'humidité.</p>`,
        },
        {
          question: "Q3 : Quelle méthode recommandez-vous pour les moquettes épaisses des open-spaces afin d'éviter l'affaissement des fibres ?",
          answer: `<p>L'injection-extraction reste la technique la plus adaptée : elle nettoie en profondeur sans saturer le support. Nous ajustons la pression et le débit selon la densité des fibres. Un brossage doux en fin d'intervention redresse les poils et préserve l'aspect d'origine du revêtement.</p>`,
        },
        {
          question: "Q4 : Avec le stationnement limité autour des Grands Moulins, comment organisez-vous la livraison et la collecte du matériel ?",
          answer: `<p>Nous repérons les emplacements de dépose-minute ou les accès de service avant l'intervention. Le matériel est déchargé rapidement puis le véhicule stationné en zone autorisée. Cette organisation évite les contraventions et garantit une présence discrète sur site pendant toute la durée du chantier.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et dégraissant professionnel, gestion stricte des eaux usées et balisage sécurisé pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès spécifiques aux parkings souterrains et publics de Pantin, notamment en ZAC.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux usées, sans rejet vers la voirie.",
        "Coordination avec syndics et gestionnaires pour organiser la rotation des véhicules et limiter la fermeture des accès.",
      ],
      uniqueIntro: `<p>Comment maintenir un parking souterrain propre quand les véhicules y circulent quotidiennement et que les traces d'huile s'accumulent sur le béton ? <strong>Le long de l'avenue Jean Lolive</strong>, les accès livraison et les places publiques génèrent un trafic soutenu qui laisse des dépôts tenaces sur les revêtements. Sans intervention régulière, la graisse s'incruste et les rigoles se bouchent progressivement.</p>
<p class="mt-4">Un lavage mécanisé redonne aux sols leur aspect d'origine et facilite la circulation des résidents ou des salariés. Dans les <strong>parkings souterrains des résidences récentes en ZAC</strong>, les revêtements résine ou béton lissé supportent bien le passage de l'autolaveuse, à condition d'adapter la pression et le détergent. Le résultat : moins de poussière en suspension, moins de plaintes liées aux odeurs, et une image soignée pour la copropriété ou l'entreprise.</p>
<p class="mt-4">L'intervention se planifie en tenant compte des contraintes d'accès. <strong>Stationnement compliqué aux abords des parkings Hoche et Église</strong>, créneaux horaires à respecter, rotation des véhicules à organiser : chaque chantier fait l'objet d'un diagnostic préalable pour limiter la gêne et garantir un assainissement complet.</p>`,
      uniqueDeepDive: `<h3>T1: Diagnostic et préparation</h3>
<p>Avant toute intervention, nous inspectons le revêtement (béton brut, résine, peinture) et l'état des évacuations. Le niveau d'encrassement détermine le choix du dégraissant et le nombre de passes nécessaires.</p>
<p class="mt-4">Un balayage préalable élimine les débris grossiers. Le balisage est installé pour sécuriser les zones de travail et orienter les usagers vers les places disponibles.</p>

<h3>T2: Traitement mécanisé</h3>
<p>L'autolaveuse effectue des passes régulières sur l'ensemble de la surface. Les zones critiques — rampes d'accès, angles morts, pieds de murs — reçoivent un traitement renforcé à la haute pression avec dégraissant adapté.</p>
<p class="mt-4">Les rigoles et regards sont dégagés pour assurer l'écoulement correct des eaux de lavage. Aucun rejet sauvage : les effluents sont dirigés vers les évacuations conformes.</p>

<h3>T3: Finalisation et recommandations</h3>
<p>Un dépoussiérage aérien des blocs lumineux et tuyauteries peut compléter l'intervention si demandé. Nous transmettons un compte-rendu avec photos et conseillons une fréquence d'entretien adaptée au trafic constaté.</p>`,
      specificChallenges: [
        "Suies et poussières noires liées à la proximité du périphérique et de la N3.",
        "Rampes d'accès étroites dans les résidences anciennes, nécessitant un matériel adapté.",
        "Rigoles parfois obstruées par les dépôts de graisse accumulés sur plusieurs mois.",
        "Créneaux d'intervention limités par les horaires de bureaux et les flux de livraison.",
        "Coordination indispensable avec les gardiens pour gérer l'accès aux sous-sols sécurisés.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Comment organisez-vous la rotation des véhicules dans un parking le long de l'avenue Jean Lolive ?",
          answer: `<p>Nous définissons un zonage par secteur avec le gestionnaire. Les véhicules sont déplacés progressivement vers les zones déjà traitées. Un balisage clair guide les usagers et évite toute confusion pendant l'intervention. La circulation reste possible sur les parties non concernées.</p>`,
        },
        {
          question: "Q2 : Quelle solution technique utilisez-vous pour évacuer les eaux de lavage dans un parking souterrain de résidence récente ?",
          answer: `<p>Les eaux chargées sont dirigées vers les regards existants après vérification de leur bon fonctionnement. Si nécessaire, nous aspirons les effluents pour éviter tout débordement. Aucun rejet n'est effectué vers la voirie ou les espaces communs extérieurs.</p>`,
        },
        {
          question: "Q3 : Comment traitez-vous les rampes glissantes pour garantir l'adhérence après le lavage ?",
          answer: `<p>Nous appliquons un dégraissant adapté qui élimine les résidus huileux sans laisser de film glissant. Un rinçage soigné complète le traitement. Sur les revêtements peints ou résine, la pression est ajustée pour préserver l'état de surface antidérapant.</p>`,
        },
        {
          question: "Q4 : Quels créneaux privilégiez-vous pour intervenir dans les parkings publics Hoche ou Église ?",
          answer: `<p>Les interventions sont programmées en dehors des heures de pointe, généralement tôt le matin ou en soirée. Nous évitons les jours de marché et les périodes d'affluence commerciale. Le planning est validé avec le gestionnaire pour minimiser l'impact sur les usagers.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement adapté au support, protection des menuiseries et gestion anti-coulures pour préserver vos relations de voisinage.",
      whyUsBullets: [
        "Nous connaissons les expositions et environnements des balcons pantinois, entre axes passants et proximité d'espaces verts.",
        "Notre matériel permet un nettoyage efficace sur béton, dalles ou carrelage, avec pression ajustée pour préserver joints et revêtements.",
        "Chaque intervention inclut une protection anti-coulures et une coordination préalable si l'accès nécessite passage par les parties communes.",
      ],
      uniqueIntro: `<p>Autour de la <strong>Place Olympe de Gouges</strong>, les loggias et balcons des immeubles voisins accumulent rapidement poussières grises et dépôts tenaces. Les particules fines remontent des axes passants, se mêlent aux pollens printaniers et forment une couche collante sur les dalles comme sur les garde-corps. Difficile alors de profiter de cet espace extérieur sans avoir l'impression de marcher sur un trottoir.</p>
<p class="mt-4">Un balcon propre change la perception du logement. Les traces noires sur le <strong>béton brut</strong> ou les joints verdis des <strong>dalles sur plots</strong> donnent une impression de négligence, même quand l'intérieur est impeccable. Après intervention, la surface retrouve son aspect d'origine, le mobilier peut ressortir, et l'espace redevient un prolongement agréable de votre pièce de vie.</p>
<p class="mt-4">La <strong>pollution liée aux axes proches</strong> et la présence de platanes dans plusieurs rues accentuent l'encrassement saisonnier. Une intervention structurée permet de traiter chaque élément — sol, vitrages, garde-corps — tout en protégeant vos voisins du dessous des écoulements.</p>`,
      uniqueDeepDive: `<h3>T1: Surface décrassée et joints préservés</h3>
<p>Le sol retrouve sa teinte d'origine grâce à un brossage adapté au support. Sur béton brut, un produit alcalin décolle les dépôts gras sans attaquer la matière. Sur dalles ou carrelage, le traitement cible les joints pour éliminer mousses et noircissures sans les fragiliser.</p>

<h3>T2: Menuiseries et garde-corps protégés</h3>
<p>Avant toute action, fenêtres et portes sont bâchées. Le mobilier et les plantes sont déplacés ou couverts. Le garde-corps reçoit un nettoyage manuel pour retirer les coulures et traces de pollution. Les vitrages attenants sont essuyés en fin d'intervention.</p>

<h3>T3: Rinçage contrôlé et séchage</h3>
<p>L'eau de rinçage est dirigée vers l'évacuation existante. Un système de récupération ou de bâchage évite tout écoulement chez le voisin du dessous. Le séchage naturel prend quelques heures selon l'exposition. Nous vous laissons des conseils simples pour espacer les prochains entretiens.</p>`,
      specificChallenges: [
        "Dépôts noirs liés à la circulation sur l'avenue Jean Lolive et aux abords du périphérique.",
        "Mousses et taches vertes fréquentes sur les balcons proches du Parc Diderot.",
        "Loggias semi-fermées du quartier Mairie-Hoche nécessitant un rinçage maîtrisé.",
        "Étages élevés dans les résidences récentes de la ZAC du Port avec accès parfois restreint.",
        "Sensibilité forte au voisinage dans les immeubles denses du secteur Église.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Comment nettoyer un balcon en béton très encrassé près de la Place Olympe de Gouges sans abîmer les joints ?",
          answer: `<p>Nous appliquons un produit désincrustant adapté au béton, suivi d'un brossage mécanique doux. Les joints sont traités séparément avec une brosse fine pour retirer mousses et noircissures sans creuser la matière. Le rinçage à pression modérée évite toute dégradation.</p>`,
        },
        {
          question: "Q2 : Les balcons proches du Parc Diderot présentent mousse et taches vertes : quelle méthode utilisez-vous ?",
          answer: `<p>La végétation environnante favorise ces dépôts organiques. Nous utilisons un traitement anti-mousse appliqué avant brossage, qui décolle les couches vertes sans recourir à une pression excessive. Le résultat est visible dès le séchage, et l'effet dure plusieurs mois.</p>`,
        },
        {
          question: "Q3 : Quelle différence de traitement entre une loggia et un balcon ouvert dans le secteur Mairie-Hoche ?",
          answer: `<p>Une loggia semi-fermée retient davantage l'humidité et les poussières. Le rinçage y est plus délicat car l'évacuation naturelle est limitée. Nous adaptons le volume d'eau et utilisons une aspiration si nécessaire pour éviter les flaques résiduelles.</p>`,
        },
        {
          question: "Q4 : En cas d'accès difficile en étage élevé, comment organisez-vous l'intervention pour limiter la gêne ?",
          answer: `<p>Nous convenons d'un créneau avec vous et, si besoin, prévenons le gardien ou le syndic. Le matériel est monté en une seule fois. L'intervention reste concentrée sur quelques heures pour réduire les allers-retours dans les parties communes.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes, avec désinfection virucide des surfaces et pose optionnelle de dispositifs anti-retour pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des secteurs à risque à Pantin, notamment les abords du Canal et les grands ensembles exposés aux colonies de pigeons.",
        "Protocole complet avec EPI adaptés, confinement systématique et produits désinfectants homologués pour éliminer les agents pathogènes.",
        "Organisation discrète en copropriété : bâchage des zones mitoyennes, évacuation sécurisée des déchets en sacs étanches.",
      ],
      uniqueIntro: `<p>Après quelques mois d'accumulation, les fientes de pigeons transforment un balcon en zone inutilisable. <strong>Aux abords du Canal de l'Ourcq et dans la ZAC du Port</strong>, la présence d'eau et de végétation attire une population aviaire importante. Les dépôts s'épaississent, l'odeur s'installe, et l'espace extérieur devient un problème plutôt qu'un agrément.</p>
<p class="mt-4">Les <strong>corniches et garde-corps des immeubles anciens comme des grands ensembles</strong> offrent des perchoirs idéaux. Le béton se dégrade sous l'acidité des déjections, les joints s'effritent, et les taches deviennent permanentes si rien n'est fait. Au-delà de l'aspect visuel, c'est l'usage quotidien du balcon qui disparaît : impossible d'y étendre du linge ou d'y prendre l'air sans gêne.</p>
<p class="mt-4">La <strong>proximité du Parc Diderot et des berges</strong> amplifie le phénomène dans certains secteurs. Une intervention structurée permet de traiter le problème à la source : décontamination des surfaces, élimination des agents pathogènes, et recommandations pour limiter le retour des volatiles.</p>`,
      uniqueDeepDive: `<h3>T1: Surfaces assainies et désinfectées</h3>
<p>L'objectif est de rendre le balcon réutilisable sans risque. Cela passe par l'élimination complète des fientes, la neutralisation des agents pathogènes présents dans les déjections, et le traitement de tous les supports : sol, garde-corps, vitrages, murs mitoyens si concernés.</p>

<h3>T2: Confinement et protection préalables</h3>
<p>Avant toute manipulation, la zone est bâchée pour éviter la dispersion des poussières contaminées. L'intérieur du logement est protégé, tout comme les balcons voisins. L'intervenant porte combinaison jetable, masque FFP2, gants et lunettes. Les fientes sont humidifiėes pour neutraliser les particules volatiles avant ramassage.</p>

<h3>T3: Collecte, désinfection et évacuation</h3>
<p>Les déjections sont collectées et conditionnées en sacs étanches. Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des surfaces avec respect du temps de contact. Après rinçage et aération, le balcon peut être réutilisé. Des dispositifs dissuasifs (pics, filets) peuvent être posés sur demande pour limiter le retour des pigeons.</p>`,
      specificChallenges: [
        "Balcons exposés aux berges du Canal : accumulation rapide de fientes liée à la présence d'eau.",
        "Corniches des immeubles anciens du quartier Église offrant des perchoirs permanents aux pigeons.",
        "Grands ensembles des Courtillières : étages élevés et surfaces béton difficiles à traiter sans confinement.",
        "Proximité du Parc Diderot favorisant la présence aviaire sur les balcons riverains.",
        "Copropriétés denses nécessitant coordination avec voisins pour éviter nuisances pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Les fientes accumulées sur un balcon proche du Canal de l'Ourcq présentent-elles un risque sanitaire réel ?",
          answer: `<p>Les déjections de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les voies respiratoires en cas d'inhalation de poussières sèches. Sur les balcons exposés aux berges, l'accumulation est souvent plus rapide. Une décontamination avec désinfection élimine ces risques et permet de réutiliser l'espace en sécurité.</p>`,
        },
        {
          question: "Q2 : Quel équipement utilisez-vous pour traiter un balcon très souillé dans les immeubles béton des Courtillières ?",
          answer: `<p>L'intervenant porte une combinaison jetable, un masque FFP2, des gants et des lunettes de protection. Les fientes sont humidifiées avant manipulation pour éviter l'envol de particules. Le sol béton et les garde-corps sont ensuite traités avec un produit virucide homologué, appliqué avec temps de contact respecté avant rinçage.</p>`,
        },
        {
          question: "Q3 : Quel traitement garantit une désinfection efficace sur les balcons proches du Parc Diderot ?",
          answer: `<p>Nous appliquons un produit à la fois virucide et bactéricide, homologué pour l'élimination des agents pathogènes présents dans les fientes. Le temps de contact est respecté sur toutes les surfaces (sol, garde-corps, vitrages). Ce traitement neutralise les risques sanitaires et prépare le support pour une éventuelle pose de dispositifs anti-retour.</p>`,
        },
        {
          question: "Q4 : Qui prend en charge l'évacuation des déchets contaminés après nettoyage en copropriété à Quatre-Chemins ?",
          answer: `<p>Klinova assure l'évacuation complète des déchets. Les fientes collectées sont conditionnées dans des sacs étanches et retirées du site par nos équipes. En copropriété, nous coordonnons l'intervention pour limiter la gêne : bâchage des zones mitoyennes, passage discret dans les parties communes, et enlèvement le jour même.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Extraction des salissures incrustées dans vos canapés, tapis et matelas, avec détachage ciblé et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Interventions régulières dans les quartiers résidentiels de Pantin, du Petit-Pantin aux abords du Parc Diderot.",
        "Détachage enzymatique ciblé et extraction textile sans détrempage excessif de la mousse intérieure.",
        "Matériel compact pour accès en étage, intervention rapide même en zone de stationnement contraint.",
      ],
      uniqueIntro: `<p>Les traces grises sur l'assise du canapé, les auréoles sur le tapis du salon, les odeurs persistantes dans le matelas : ces marques d'usure s'accumulent dans les logements des quartiers résidentiels autour de l'Église Saint-Germain et du Petit-Pantin. Familles avec enfants, propriétaires d'animaux, locataires en appartement T2-T3 — le textile absorbe tout, jour après jour, sans qu'un aspirateur suffise à inverser la tendance.</p>
<p class="mt-4">Dans les immeubles anciens avec parquet ou les résidences plus récentes carrelées, le canapé reste souvent le meuble le plus sollicité. Les fibres retiennent poussières, allergènes et taches alimentaires. Un rafraîchissement en profondeur redonne au tissu son aspect d'origine et améliore la qualité de l'air intérieur, notamment pour les foyers sensibles aux acariens.</p>
<p class="mt-4">Klinova intervient à domicile avec un matériel compact adapté aux contraintes d'accès. Diagnostic textile, détachage ciblé, extraction par injection — chaque étape est calibrée selon la nature du tissu et l'état des salissures constatées.</p>`,
      uniqueDeepDive: `<h3>T1: Identification des taches et du textile</h3>
<p>Avant toute action, nous examinons le type de tissu — coton, velours, synthétique, laine — et la nature des salissures présentes. Taches de café, traces d'urine animale, auréoles grasses : chaque problème appelle un traitement adapté. Un test discret sur zone cachée valide la compatibilité du produit avec la fibre.</p>

<h3>T2: Détachage et traitement principal</h3>
<p>Les zones marquées reçoivent un pré-traitement enzymatique si nécessaire. L'injection-extraction textile déloge ensuite les résidus incrustés en profondeur. La pression et la température sont ajustées pour les tissus fragiles afin d'éviter toute déformation ou décoloration.</p>

<h3>T3: Extraction et consignes de séchage</h3>
<p>L'aspiration finale retire le maximum d'humidité. Selon l'épaisseur du textile et la ventilation du logement, le séchage complet prend généralement quelques heures. Nous indiquons les précautions d'usage et la fréquence d'entretien recommandée pour prolonger la propreté obtenue.</p>`,
      specificChallenges: [
        "Taches d'urine animale fréquentes dans les foyers proches des parcs, nécessitant un traitement enzymatique.",
        "Canapés non déhoussables en appartements anciens : extraction sans détremper la structure interne.",
        "Stationnement limité en zone rouge autour de l'Église — matériel portable privilégié.",
        "Allergènes et acariens accumulés dans les textiles de salons familiaux sollicités quotidiennement.",
        "Escaliers étroits dans certains immeubles du quartier Quatre-Chemins, accès à anticiper.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Un nettoyage complet élimine-t-il les allergènes et acariens sur un canapé tissu utilisé quotidiennement par une famille à Pantin ?",
          answer: `<p>L'injection-extraction déloge les acariens et résidus allergènes piégés dans les fibres. Le résultat améliore sensiblement la qualité de l'air intérieur, particulièrement appréciable dans les salons familiaux des quartiers résidentiels autour de l'Église Saint-Germain où le canapé est sollicité chaque jour.</p>`,
        },
        {
          question: "Q2 : Pour des taches d'urine anciennes sur tapis dans un logement proche du Parc Diderot, quelle prise en charge assure un retrait efficace des odeurs ?",
          answer: `<p>Un pré-traitement enzymatique cible les composés organiques responsables de l'odeur. L'extraction en profondeur retire ensuite les résidus incrustés. Sur des taches anciennes, plusieurs passages peuvent être nécessaires pour neutraliser complètement les effluves persistants.</p>`,
        },
        {
          question: "Q3 : Comment traitez-vous un canapé non déhoussable en tissu sans détremper la mousse intérieure dans un appartement ancien du quartier Quatre-Chemins ?",
          answer: `<p>La quantité d'eau injectée est calibrée pour pénétrer la fibre sans saturer la mousse. L'aspiration immédiate limite l'humidité résiduelle. Le séchage complet intervient généralement sous quelques heures avec une aération correcte du logement.</p>`,
        },
        {
          question: "Q4 : En zone rouge avec stationnement limité autour de l'Église, quel matériel privilégiez-vous pour une intervention canapé à domicile ?",
          answer: `<p>Nous utilisons un équipement compact et portable, transportable en étage sans encombrement excessif. Le véhicule peut stationner brièvement le temps du déchargement. Cette organisation permet d'intervenir efficacement malgré les contraintes de stationnement en centre-ville de Pantin.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse à Pantin : traitement des mousses, nettoyage adapté au support et protection du mobilier pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales : terrasses ombragées du centre-ville ou plein sud sur les berges du Canal.",
        "Adaptation technique à chaque support : pression ajustée pour le composite, brossage renforcé sur béton poreux.",
        "Protection systématique du mobilier et des plantes, gestion de l'écoulement pour préserver le voisinage.",
      ],
      uniqueIntro: `<p>Comment préserver une terrasse agréable quand l'humidité du Canal de l'Ourcq favorise l'apparition de dépôts verts dès les premiers mois ? Autour de la <strong>Place de la Pointe</strong> et sur les toits-terrasses de la ZAC du Port, les surfaces extérieures accumulent mousses et lichens bien avant que l'usure normale ne se manifeste. Le problème s'installe progressivement, rendant le sol glissant et peu engageant.</p>
<p class="mt-4">Sur les <strong>supports bois composite</strong> des résidences récentes ou les dalles béton des pavillons du Petit-Pantin, ces salissures biologiques s'incrustent dans les joints et les rainures. Sans intervention adaptée, le revêtement perd son aspect d'origine et devient difficile à entretenir avec des moyens domestiques. Les taches grasses de barbecue ou les résidus de feuilles aggravent la situation.</p>
<p class="mt-4">L'exposition variable selon les quartiers — plein sud côté Canal, ombre dans les cours intérieures — modifie la vitesse d'encrassement et le type de traitement nécessaire. Une intervention structurée permet d'adapter la méthode au matériau et de prolonger la durée entre deux entretiens.</p>`,
      uniqueDeepDive: `<h3>T1: Préparation et protection</h3>
<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les menuiseries — baies vitrées, portes — reçoivent une protection pour éviter les projections. Un balayage préalable élimine feuilles, terre et débris accumulés.</p>

<h3>T2: Traitement et nettoyage</h3>
<p>Un produit adapté au support est appliqué : formulation douce pour le bois composite, dégraissant pour le béton ou la pierre. Le brossage manuel ou mécanique déloge les mousses incrustées. Si le matériau le permet, un passage haute pression contrôlée complète le travail sans endommager les joints.</p>

<h3>T3: Finalisation et conseils</h3>
<p>Les garde-corps, murets et escaliers extérieurs sont traités. L'eau est évacuée vers les points d'écoulement en protégeant les plantations. Un traitement anti-mousse préventif peut être appliqué selon l'exposition. Avant de remettre le mobilier en place, un temps de séchage est respecté. Des conseils d'entretien saisonnier sont transmis pour espacer les interventions.</p>`,
      specificChallenges: [
        "Mousses et lichens favorisés par l'humidité du Canal sur les terrasses bord de l'eau.",
        "Supports variés selon les quartiers : bois composite en ZAC, dalles béton dans le pavillonnaire.",
        "Accès parfois contraint pour les toits-terrasses des résidences récentes du Port.",
        "Gestion de l'écoulement d'eau à prévoir pour les terrasses en étage avec voisins en dessous.",
        "Taches grasses persistantes sur les zones barbecue des maisons du Petit-Pantin.",
      ],
      faqAdditions: [
        {
          question: "Q1 : Quelle méthode utilisez-vous pour les terrasses en bois composite près du Canal sans risquer de décoloration ?",
          answer: `<p>Le bois composite demande une pression modérée et un produit au pH neutre. Nous évitons le jet direct sur les rainures pour ne pas soulever les fibres. Le brossage doux complète le rinçage. Cette approche préserve l'aspect d'origine tout en éliminant les dépôts verts installés par l'humidité des berges.</p>`,
        },
        {
          question: "Q2 : Comment traitez-vous les mousses et lichens tenaces sur une terrasse exposée à l'humidité du Canal de l'Ourcq ?",
          answer: `<p>Un produit anti-mousse est appliqué avant le nettoyage pour décoller les végétaux incrustés. Le brossage mécanique retire la couche superficielle. Un rinçage contrôlé évacue les résidus. Sur les surfaces très colonisées, un second passage peut être nécessaire. Un traitement préventif limite la réapparition pendant plusieurs mois.</p>`,
        },
        {
          question: "Q3 : Proposez-vous un traitement anti-mousse durable pour les dalles béton autour de la Place de la Pointe ?",
          answer: `<p>Après le nettoyage, un produit filmogène peut être appliqué sur les dalles béton pour freiner la repousse. L'efficacité dépend de l'exposition : les zones ombragées nécessitent un renouvellement plus fréquent. Ce traitement n'altère pas l'aspect du béton et reste compatible avec un usage piéton immédiat après séchage.</p>`,
        },
        {
          question: "Q4 : Faut-il éviter la haute pression sur toutes les terrasses en bois composite à Pantin ?",
          answer: `<p>La haute pression n'est pas interdite mais doit être maîtrisée : distance de buse adaptée, angle oblique, pression réduite. Sur les composites de qualité courante, un nettoyage basse pression combiné au brossage donne un résultat équivalent sans risque. Nous évaluons l'état du support avant de choisir la méthode.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux finitions, avec coordination des accès et respect des délais pour état des lieux ou fin de chantier.",
      whyUsBullets: [
        "Connaissance des typologies de logements pantinois, des lofts réhabilités aux appartements des ZAC récentes.",
        "Polyvalence sur tous types de sols et surfaces, du béton ciré au parquet ancien en passant par le carrelage.",
        "Planification ajustée aux délais d'état des lieux et coordination directe avec artisans ou agences immobilières.",
      ],
      uniqueIntro: `<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, un appartement accumule poussières fines, traces de peinture et résidus sur chaque surface. Dans les secteurs en réhabilitation comme la Manufacture des Tabacs ou la ZAC de l'Église, ces situations se multiplient avec le rythme soutenu des chantiers et des rotations locatives. Le logement nécessite alors une intervention structurée pour retrouver un état présentable.</p>
<p class="mt-4">Un nettoyage complet transforme l'espace : sols débarrassés des voiles de plâtre, vitres intérieures dégagées, pièces d'eau désinfectées. Pour les appartements T2-T3 ou les lofts rénovés, cette remise en état permet de valider sereinement une remise de clés ou d'accueillir de nouveaux occupants dans des conditions optimales.</p>
<p class="mt-4">L'organisation de l'intervention tient compte des contraintes de stationnement pour le matériel et de la coordination avec les artisans encore présents. Chaque étape est planifiée pour limiter les allers-retours et respecter les délais convenus avec l'agence ou le propriétaire.</p>`,
      uniqueDeepDive: `<h3>T1: Pièces de vie et circulations</h3>
<p>Le nettoyage débute par les espaces principaux : dépoussiérage des plafonds, murs et plinthes, puis aspiration et lavage des sols adaptés au revêtement. Les parquets anciens du centre-ville reçoivent un traitement spécifique, distinct du carrelage des constructions récentes.</p>
<p class="mt-4">Les interrupteurs, poignées et radiateurs sont nettoyés. Les placards intérieurs sont vidés de leurs résidus.</p>

<h3>T2: Cuisine et salle de bain</h3>
<p>Les pièces d'eau concentrent l'essentiel des traces tenaces. Plans de travail, crédence et électroménager sont dégraissés. Sanitaires, faïences et joints de la salle de bain sont désinfectés et détartrés.</p>
<p class="mt-4">Les aérations sont vérifiées pour garantir une ventilation correcte après l'intervention.</p>

<h3>T3: Finitions et contrôle</h3>
<p>Les vitres intérieures sont nettoyées. Les éventuelles traces de colle ou d'enduit résiduelles sont traitées manuellement.</p>
<p class="mt-4">Un contrôle final valide l'ensemble des surfaces avant remise des clés ou passage de l'agence.</p>`,
      specificChallenges: [
        "Poussières de chantier persistantes sur les surfaces verticales et dans les recoins des lofts rénovés.",
        "Délais serrés pour les états des lieux avec validation agence le jour même.",
        "Stationnement camionnette difficile en zone rouge commerçante autour de l'avenue Jean Lolive.",
        "Coordination nécessaire avec artisans encore présents sur les chantiers des ZAC en cours.",
        "Sols variés dans un même logement : parquet, carrelage, béton ciré nécessitant des traitements distincts.",
      ],
      faqAdditions: [
        {
          question: "Q1 : En cas d'urgence pour un état des lieux près de la station Hoche, sous quel délai pouvez-vous intervenir ?",
          answer: `<p>Nous organisons des interventions sous 24 à 48 heures selon la taille du logement et la disponibilité. Pour les demandes urgentes dans le secteur Hoche ou Mairie, nous ajustons le planning pour respecter la date de remise de clés convenue avec l'agence ou le propriétaire.</p>`,
        },
        {
          question: "Q2 : Quel protocole appliquez-vous pour un nettoyage fin de chantier avec poussières fines et résidus de plâtre dans les ZAC ?",
          answer: `<p>L'intervention commence par un dépoussiérage complet des surfaces hautes vers le sol, puis une aspiration avec filtration adaptée aux particules fines. Les traces d'enduit ou de peinture sont traitées manuellement avant le lavage final des sols et des vitres intérieures.</p>`,
        },
        {
          question: "Q3 : Quel niveau de propreté livrez-vous pour garantir la validation d'un état des lieux par une agence immobilière ?",
          answer: `<p>Nous visons un rendu permettant la validation sans réserve : sols sans traces, vitres propres, sanitaires désinfectés, placards vidés et nettoyés. Un contrôle final vérifie chaque point avant votre passage avec l'agence ou le bailleur.</p>`,
        },
        {
          question: "Q4 : Comment coordonnez-vous l'intervention avec les artisans en cas de travaux encore en cours dans un appartement pantinois ?",
          answer: `<p>Nous échangeons directement avec le chef de chantier ou le maître d'œuvre pour caler notre passage après les dernières finitions. Si des retouches sont prévues, nous adaptons notre intervention pour éviter de repasser sur des zones déjà nettoyées.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;