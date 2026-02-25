import type { City } from "~/types/geo";

const city: City = {
  name: "Villepinte",
  slug: "villepinte",
  postalCodes: ["93420"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Villepinte. Entre le Parc des Expositions et les quartiers résidentiels du Vieux Pays, une équipe réactive et des méthodes adaptées aux contraintes locales.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: `<p>Siège du Parc des Expositions Paris Nord et du Parc d'Affaires Paris Nord 2, Villepinte concentre des besoins variés en propreté. Klinova accompagne syndics, gestionnaires et entreprises avec une présence terrain régulière et une coordination adaptée aux pics d'activité.</p>
<p class="mt-4">Halls d'immeubles, parkings souterrains, espaces extérieurs : chaque intervention suit un protocole défini et un suivi documenté. L'organisation s'ajuste aux contraintes d'accès, aux horaires sensibles et aux exigences de discrétion propres aux sites tertiaires comme résidentiels.</p>
<ul>
  <li><strong>Réactivité secteur :</strong> Équipes positionnées pour couvrir rapidement les quartiers du Parc de la Noue aux zones d'activités de l'Avenue des Nations.</li>
  <li><strong>Coordination accès :</strong> Gestion des badges, digicodes et créneaux horaires en lien direct avec gardiens et gestionnaires de sites.</li>
  <li><strong>Suivi documenté :</strong> Reporting disponible après chaque passage, traçabilité des interventions pour les copropriétés et entreprises.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Flux visiteurs massifs</strong> lors des salons : halls et parkings sollicités en continu.",
    "Poussières noires et suies sur les façades exposées à <strong>l'A104</strong>.",
    "Parkings souterrains des résidences récentes : taches d'huile et traces de pneus fréquentes.",
    "Accès sécurisés à <strong>Paris Nord 2</strong> : badges et horaires stricts à coordonner.",
    "Quartiers pavillonnaires du Clos Montceleux : stationnement limité, voirie étroite.",
    "Proximité du <strong>Parc du Sausset</strong> : dépôts organiques sur balcons et terrasses.",
  ],

  // Texte brut uniquement
  districts: [
    "Vieux Pays",
    "Parc de la Noue",
    "Les Mousseaux",
    "La Haie Bertrand",
    "Le Clos Montceleux",
    "Les Merisiers",
  ],
  nearbyCities: [
    "Tremblay-en-France",
    "Aulnay-sous-Bois",
    "Sevran",
    "Vaujours",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Villepinte",
    "Parc des Expositions Paris Nord Villepinte",
    "Gare RER B Villepinte",
    "Parc d'Affaires Paris Nord 2",
    "Centre Hospitalier Intercommunal Robert Ballanger",
    "Parc du Sausset",
  ],

  faq: [
  {
    question:
      "Comment organisez-vous les interventions lors des grands salons au Parc des Expositions ?",
    answer:
      "<p><strong>Anticipation des pics</strong> : nous planifions les passages en amont des périodes de salons et ajustons les horaires pour éviter les créneaux saturés. <strong>Accès coordonnés</strong> avec le gestionnaire (badges, zones de dépose, consignes). Objectif : <strong>continuité de service</strong> sans perturber l’activité du site.</p>",
  },
  {
    question: "Proposez-vous un devis avant intervention à Villepinte ?",
    answer:
      "<p><strong>Oui, systématiquement.</strong> Nous cadrons la demande (surface, zones, niveau d’encrassement, accès) puis envoyons un <strong>devis clair</strong> avec périmètre et modalités. Pour les sites techniques (parking, grande copro, tertiaire), une <strong>visite</strong> peut être proposée si nécessaire.</p>",
  },
  {
    question:
      "Comment gérez-vous le stationnement dans les quartiers denses comme le Vieux Pays ?",
    answer:
      "<p><strong>Repérage et logistique légère</strong> : nous anticipons les zones autorisées et venons avec un chargement optimisé pour limiter les allers-retours. Si le secteur est tendu, nous privilégions <strong>les créneaux matinaux</strong> ou une <strong>dépose courte</strong> (si autorisée) pour décharger vite et libérer la voie.</p>",
  },
  {
    question: "Pouvez-vous intervenir en urgence sur une copropriété à Villepinte ?",
    answer:
      "<p><strong>Oui, selon disponibilité.</strong> Un premier échange permet de qualifier la situation (zone concernée, risques, accès) et de proposer un <strong>créneau rapide</strong>. En copropriété, on se coordonne avec le syndic/gestionnaire pour <strong>sécuriser l’accès</strong> et intervenir sans désorganiser les résidents.</p>",
  },
],


 

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures piétinées et détachage ciblé sur vos moquettes de bureaux ou d'hôtels, avec séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des configurations bureaux et hôtels du secteur Paris Nord 2 et Parc des Expositions.",
        "Matériel d'injection-extraction professionnel dimensionné pour traiter de grandes surfaces textiles.",
        "Interventions planifiées en soirée ou week-end pour respecter l'activité des locaux.",
      ],
      uniqueIntro: `<p>Les traces grises le long des circulations, les auréoles de café près des postes de travail, les fibres écrasées aux entrées : ces marques s'accumulent vite sur les dalles textiles des bureaux situés autour du <strong>Parc d'Affaires Paris Nord 2</strong>. Le passage quotidien des collaborateurs et visiteurs imprime dans les fibres une couche de poussière et de résidus qui ternit l'aspect général des espaces.</p>
<p class="mt-4">Un revêtement textile encrassé modifie la perception d'un hall ou d'une salle de réunion. Les hôtels proches de la gare RER Parc des Expositions, soumis à des rotations de clientèle soutenues, constatent le même phénomène sur leurs moquettes velours. Redonner de la netteté aux fibres améliore l'image perçue par les clients et limite les remarques des occupants.</p>
<p class="mt-4">Une intervention structurée commence par l'identification du type de textile et la localisation des zones les plus sollicitées. Nous adaptons ensuite le matériel aux contraintes d'accès, notamment dans les immeubles récents équipés de badges, pour limiter la gêne pendant les heures d'activité.</p>`,
      uniqueDeepDive: `<h3>Zones de circulation intense</h3>
<p>Les couloirs et halls d'entrée concentrent l'essentiel du piétinement. Nous commençons par une aspiration approfondie pour retirer les particules libres, puis appliquons l'injection-extraction sur ces surfaces à fort passage. Les fibres compactées retrouvent du gonflant après plusieurs passes croisées.</p>

<h3>Espaces de travail et salles de réunion</h3>
<p>Les dalles textiles sous les bureaux et autour des tables de réunion reçoivent un traitement adapté à leur densité. Le détachage ciblé précède l'extraction lorsque des taches de tanin ou de gras sont repérées. Les plinthes et pieds de mobilier sont protégés avant chaque passage.</p>

<h3>Seuils et jonctions</h3>
<p>Les transitions entre moquette et sol dur accumulent souvent des résidus piégés. Nous insistons sur ces bordures pour éviter un contraste visible après séchage. L'extraction finale retire le maximum d'humidité ; le temps de séchage varie selon l'épaisseur du textile et la ventilation disponible.</p>`,
      specificChallenges: [
        "Dalles textiles des open spaces Paris Nord 2 marquées par le passage quotidien.",
        "Moquettes velours des halls d'hôtels proches du Parc des Expositions soumises à des flux visiteurs variables.",
        "Accès par badge et horaires décalés imposés par les gestionnaires de sites tertiaires.",
        "Taches de café et résidus alimentaires fréquents dans les espaces de pause.",
        "Temps de séchage à anticiper pour éviter toute gêne lors de la reprise d'activité.",
      ],
      faqAdditions: [
        {
          question: "Les cages d'escalier étroites du quartier Vieux Pays empêchent le passage de matériel volumineux : comment procédez-vous ?",
          answer: `<p>Nous utilisons des modules d'injection-extraction compacts, transportables à la main. L'équipe monte le matériel par étapes et protège les marches avant chaque passage. Cette organisation permet d'intervenir même dans les configurations anciennes sans endommager les revêtements adjacents.</p>`,
        },
        {
          question: "Pour les moquettes des halls d'hôtels situés près de la gare RER Parc des Expositions, quelle méthode offre le meilleur rendu ?",
          answer: `<p>L'injection-extraction reste la technique la plus adaptée aux moquettes velours à fort passage. Elle déloge les salissures en profondeur tout en limitant le temps de séchage. Sur des fibres synthétiques denses, nous ajustons la pression pour préserver la texture d'origine.</p>`,
        },
        {
          question: "Comment traiter les taches anciennes incrustées sur les moquettes des couloirs du Parc d'Affaires Paris Nord 2 ?",
          answer: `<p>Un pré-détachage localisé précède le passage en injection-extraction. Nous appliquons un produit adapté à la nature de la tache, puis laissons agir avant d'extraire. Les résidus de tanin ou de graisse s'atténuent nettement, même sur des salissures installées depuis plusieurs mois.</p>`,
        },
        {
          question: "Après entretien d'une moquette en salle de conférence, quel délai prévoir avant de réutiliser l'espace ?",
          answer: `<p>Le séchage varie de quatre à huit heures selon l'épaisseur du textile et la ventilation du local. Nous conseillons une intervention en fin de journée pour permettre un séchage nocturne. La salle peut généralement être utilisée dès le lendemain matin sans risque de marques.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et coordination accès pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès autour de l'Avenue des Nations et des résidences proches du Centre Hospitalier.",
        "Autolaveuse professionnelle et système de récupération des eaux pour un lavage conforme aux exigences des copropriétés.",
        "Planification en lien direct avec le syndic, balisage adapté et créneaux choisis pour limiter la gêne aux résidents.",
      ],
      uniqueIntro: `<p>Sur les axes proches du Centre Hospitalier Robert Ballanger et le long de l'Avenue des Nations, les parkings souterrains et aériens accumulent rapidement poussières noires, traces de pneus et résidus gras. Le trafic quotidien — véhicules de livraison, ambulances, salariés — dépose une couche tenace sur les revêtements béton ou enrobé. Sans intervention régulière, les rampes deviennent glissantes et les rigoles se bouchent.</p>
<p class="mt-4">Un lavage mécanisé redonne aux sols leur aspect d'origine et améliore la sécurité des usagers. Les copropriétés récentes de la ZAC de la Pépinière comme les résidences du Parc de la Noue bénéficient d'un parking propre, sans odeurs stagnantes ni taches visibles. Les gestionnaires reçoivent un compte-rendu précis pour suivre l'état du patrimoine.</p>
<p class="mt-4">L'intervention s'organise en amont avec le syndic ou le responsable technique : balisage, rotation des véhicules si nécessaire, créneaux adaptés aux contraintes de la résidence ou du site tertiaire. Les eaux de lavage sont récupérées et évacuées conformément aux règles en vigueur.</p>`,
      uniqueDeepDive: `<h3>Sol dégraissé et rampes sécurisées</h3>
<p>Le résultat visé : un revêtement débarrassé des traces d'huile, des dépôts noirs et des résidus de pneus. Les rampes retrouvent leur adhérence, les rigoles leur capacité d'écoulement.</p>
<p class="mt-4">Pour y parvenir, l'équipe commence par un balayage mécanique qui retire graviers et poussières. Un dégraissant adapté au support — béton brut, résine ou enrobé — est appliqué sur les zones critiques avant le passage de l'autolaveuse.</p>

<h3>Gestion des eaux et respect des évacuations</h3>
<p>Les eaux chargées sont aspirées au fur et à mesure. Aucun rejet sauvage : le liquide récupéré est dirigé vers les regards prévus à cet effet ou évacué en fin de chantier.</p>

<h3>Coordination et remise en service</h3>
<p>Le balisage sécurise chaque zone en cours de lavage. Si le parking reste partiellement accessible, la rotation des véhicules est planifiée avec le gestionnaire. Un dépoussiérage des blocs lumineux peut compléter l'intervention sur demande.</p>`,
      specificChallenges: [
        "Dépôts de suies liés au trafic A104 sur les parkings aériens exposés.",
        "Taches d'huile récurrentes dans les zones logistiques proches de Paris Nord 2.",
        "Rampes inclinées nécessitant un traitement antidérapant après lavage.",
        "Coordination accès indispensable les jours de salon au Parc des Expositions.",
        "Rigoles souvent obstruées par les résidus de pneus et graviers.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les taches d'huile anciennes sur le béton des parkings proches des zones logistiques de Villepinte ?",
          answer: `<p>Un dégraissant alcalin est appliqué sur les zones imprégnées, puis laissé agir avant le passage de l'autolaveuse. Les taches anciennes nécessitent parfois deux passes successives. Le résultat dépend de l'ancienneté et de la porosité du support, mais l'aspect général s'améliore nettement.</p>`,
        },
        {
          question: "Quel dispositif utilisez-vous pour récupérer les eaux de lavage dans un parking souterrain d'établissement de santé ?",
          answer: `<p>L'autolaveuse aspire les eaux chargées au fur et à mesure du passage. Sur les sites sensibles comme les abords du Centre Hospitalier Robert Ballanger, nous veillons à ne laisser aucune flaque résiduelle et à diriger les effluents vers les regards prévus, sans rejet dans les espaces communs.</p>`,
        },
        {
          question: "Faut-il adapter le procédé selon que le parking est souterrain ou aérien autour de Paris Nord 2 ?",
          answer: `<p>Oui. En souterrain, la ventilation limitée impose un séchage plus long et une gestion stricte des eaux. En aérien, les dépôts de suies et poussières noires sont plus importants, ce qui demande un balayage préalable renforcé et parfois un rinçage haute pression complémentaire.</p>`,
        },
        {
          question: "Quels créneaux recommandez-vous pour un lavage complet les jours de salon au Parc des Expositions ?",
          answer: `<p>Nous privilégions les interventions tôt le matin ou en soirée, avant l'afflux de visiteurs ou après leur départ. La coordination avec le gestionnaire permet de définir un planning qui évite les pics de circulation et garantit un accès sécurisé aux équipes.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Une remise en état complète de votre balcon, avec traitement des dépôts incrustés, protection des menuiseries et gestion maîtrisée de l'eau pour éviter toute gêne aux voisins.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons du Vieux Pays face aux poussières routières, loggias du Parc de la Noue en retrait.",
        "Pression ajustée selon le support — carrelage ancien, béton ou dalles sur plots — pour préserver joints et revêtements.",
        "Organisation anti-coulures systématique et coordination avec les occupants pour limiter la gêne pendant l'intervention.",
      ],
      uniqueIntro: `<p>Dans le quartier du <strong>Vieux Pays</strong> comme autour du <strong>Parc de la Noue</strong>, les balcons accumulent rapidement une couche grisâtre difficile à ignorer. Les particules fines charriées par le trafic de l'A104, combinées aux pollens et aux résidus de pluie, forment un voile tenace sur le carrelage et les garde-corps. Résultat : un espace extérieur qu'on hésite à utiliser, même aux beaux jours.</p>
<p class="mt-4">Retrouver un balcon propre, c'est d'abord récupérer un usage quotidien. Prendre son café dehors, installer quelques plantes, laisser jouer les enfants sans craindre les traces noires sur les vêtements. Sur les <strong>immeubles en béton des années 70-90</strong> ou les résidences récentes avec dalles sur plots, l'encrassement touche aussi les joints et les murs mitoyens, dégradant l'aspect général de la façade.</p>
<p class="mt-4">Une intervention structurée permet de traiter chaque surface sans risque pour les matériaux. Diagnostic préalable, protection des menuiseries et des plantes, puis rinçage contrôlé pour éviter les coulures chez les voisins du dessous : chaque étape est pensée pour un résultat durable et une gêne minimale.</p>`,
      uniqueDeepDive: `<h3>Un balcon débarrassé de ses dépôts, prêt à être réutilisé</h3>
<p>L'objectif est de retrouver un sol propre, des garde-corps nets et des joints dégagés. Le rendu visuel s'améliore dès la fin de l'intervention, avec un séchage rapide selon l'exposition.</p>

<h3>Préparation et protection avant toute action</h3>
<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries (fenêtres, portes) reçoivent une protection pour éviter les projections. Les gros débris — feuilles mortes, terre, résidus divers — sont retirés manuellement.</p>

<h3>Traitement adapté au support et rinçage maîtrisé</h3>
<p>Un produit spécifique est appliqué selon le revêtement : carrelage, béton brut ou dalles sur plots. Le brossage manuel ou mécanique déloge les salissures incrustées. Le rinçage s'effectue à pression contrôlée, en orientant le flux pour éviter les coulures vers les balcons inférieurs. Les garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée.</p>`,
      specificChallenges: [
        "Dépôts noirs liés au trafic de l'A104, tenaces sur les garde-corps et rebords.",
        "Joints de carrelage fragilisés sur les balcons anciens du Vieux Pays, nécessitant une pression adaptée.",
        "Loggias semi-fermées au Parc de la Noue : évacuation d'eau plus complexe à gérer.",
        "Mousses et lichens sur les balcons exposés nord, demandant un traitement spécifique.",
        "Règlements de copropriété stricts sur les façades visibles : intervention discrète et propre exigée.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyer un balcon en carrelage ancien sans abîmer les joints dans le Vieux Pays ?",
          answer: `<p>Les carrelages posés il y a plusieurs décennies présentent souvent des joints poreux ou partiellement descellés. Nous utilisons une pression réduite et un brossage manuel ciblé pour déloger les salissures sans fragiliser davantage les jointures. Le produit appliqué est choisi en fonction de l'état du support constaté sur place.</p>`,
        },
        {
          question: "Comment évitez-vous les coulures et gênes pour les voisins lors du nettoyage d'un balcon en immeuble collectif ?",
          answer: `<p>Le rinçage s'effectue par sections, avec un flux orienté vers l'évacuation existante. Nous contrôlons le débit pour limiter les projections latérales et prévenons les occupants des étages inférieurs si nécessaire. En cas de loggia fermée, l'eau est aspirée ou évacuée manuellement pour éviter toute stagnation.</p>`,
        },
        {
          question: "Que préconisez-vous pour enlever mousse et lichens sur un balcon exposé au nord ?",
          answer: `<p>Ces dépôts verts s'installent sur les surfaces peu ensoleillées et humides. Un traitement adapté est appliqué avant le brossage pour ramollir les végétaux incrustés. Le rinçage final élimine les résidus sans disperser les spores sur les surfaces voisines. Un entretien régulier limite leur réapparition.</p>`,
        },
        {
          question: "Comment nettoyer une loggia sans utiliser de karcher pour préserver les joints ?",
          answer: `<p>Sur les résidences récentes avec dalles sur plots ou joints fragiles, nous privilégions le brossage mécanique doux et un rinçage basse pression. Cette méthode évite les infiltrations sous les dalles et préserve l'étanchéité périphérique. Le séchage est rapide grâce à la ventilation naturelle des loggias semi-ouvertes.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des zones à risque à Villepinte, notamment les balcons exposés aux espaces verts et au Parc du Sausset.",
        "Protocole rigoureux avec EPI complets, confinement systématique et désinfection virucide adaptée aux supports béton.",
        "Évacuation des déchets en sacs étanches et coordination discrète pour limiter la gêne auprès du voisinage.",
      ],
      uniqueIntro: `<p>Après plusieurs mois sans intervention, les balcons situés à proximité du <strong>Parc du Sausset</strong> et des espaces verts limitrophes accumulent des couches de fientes qui finissent par recouvrir sol, garde-corps et rebords de fenêtres. L'odeur s'installe, le linge étendu absorbe les effluves, et l'espace extérieur devient inutilisable au quotidien.</p>
<p class="mt-4">Sur les <strong>corniches et rebords en béton ou maçonnerie ancienne</strong>, les déjections s'incrustent profondément. L'acidité attaque les joints, décolore les surfaces et fragilise les revêtements. Sans traitement adapté, les dégâts s'aggravent à chaque nouvelle accumulation, rendant le nettoyage de plus en plus difficile.</p>
<p class="mt-4">Une intervention structurée permet de retrouver un balcon sain et utilisable. Le protocole inclut le confinement de la zone, le ramassage des déjections, le nettoyage des supports et une <strong>désinfection complète</strong> pour éliminer les agents pathogènes. L'évacuation des déchets contaminés respecte les règles d'hygiène en vigueur.</p>`,
      uniqueDeepDive: `<h3>Sécurisation et préparation</h3>
<p>L'intervenant s'équipe d'EPI complets : masque FFP2, lunettes de protection, gants et combinaison jetable. La zone est bâchée pour confiner les poussières et protéger l'intérieur du logement ainsi que les balcons voisins.</p>
<p class="mt-4">Les fientes sèches sont humidifiées avant toute manipulation pour neutraliser l'envol des particules contaminées.</p>

<h3>Ramassage et nettoyage des supports</h3>
<p>Les déjections sont collectées manuellement puis conditionnées dans des sacs étanches. Le sol du balcon, le garde-corps, les vitrages et les murs mitoyens sont ensuite nettoyés pour éliminer les résidus incrustés.</p>
<p class="mt-4">Un rinçage intermédiaire prépare les surfaces à recevoir le traitement désinfectant.</p>

<h3>Désinfection et finalisation</h3>
<p>Un produit virucide et bactéricide homologué est appliqué sur l'ensemble des supports. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes.</p>
<p class="mt-4">Après rinçage final et aération, les sacs de déchets sont évacués de manière sécurisée. Des solutions de dissuasion (pics, filets) peuvent être proposées pour limiter le retour des pigeons.</p>`,
      specificChallenges: [
        "Proximité du Parc du Sausset : présence régulière de pigeons sur les balcons des derniers étages.",
        "Fientes incrustées sur béton ancien et joints de maçonnerie nécessitant un traitement adapté.",
        "Odeurs persistantes qui imprègnent le linge et rendent l'espace extérieur inutilisable.",
        "Risque de réinfestation sans mise en place de dispositifs de dissuasion après nettoyage.",
        "Coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Les balcons proches du Parc du Sausset sont recouverts de fientes : quels risques sanitaires cela représente-t-il ?",
          answer: `<p>Les fientes de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) susceptibles de provoquer des infections respiratoires. Sur les balcons exposés aux espaces verts de Villepinte, l'accumulation régulière aggrave ce risque. Une désinfection complète après le ramassage permet d'éliminer ces agents et de retrouver un espace sain.</p>`,
        },
        {
          question: "Quels équipements de protection utilisez-vous pour nettoyer un balcon souillé par des fientes à Villepinte ?",
          answer: `<p>Nos intervenants portent systématiquement un masque FFP2, des lunettes de protection, des gants et une combinaison jetable. Cette tenue évite tout contact avec les particules contaminées. La zone est également bâchée pour protéger l'intérieur du logement et confiner les poussières avant humidification.</p>`,
        },
        {
          question: "Quelle désinfection appliquez-vous sur les corniches et supports en béton après le nettoyage des fientes ?",
          answer: `<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué sur l'ensemble des surfaces nettoyées. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes. Cette étape est indispensable sur les supports poreux comme le béton ancien, où les résidus peuvent s'infiltrer.</p>`,
        },
        {
          question: "Comment procédez-vous pour l'évacuation des déchets issus du nettoyage de fientes de pigeons ?",
          answer: `<p>Les déjections et résidus sont conditionnés dans des sacs étanches dès le ramassage. Ces sacs sont ensuite évacués de manière sécurisée à la fin de l'intervention. Cette méthode évite toute dispersion de particules contaminées dans les parties communes ou sur les balcons voisins.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage ciblé et extraction en profondeur de vos canapés, tapis et matelas, avec séchage optimisé pour retrouver un textile propre et sain sous 24 à 48 heures.",
      whyUsBullets: [
        "Connaissance des logements villepintois, des pavillons aux appartements familiaux du secteur Mousseaux.",
        "Détachage ciblé selon la nature des taches et extraction textile sans risque d'auréole ni décoloration.",
        "Intervention planifiée selon vos disponibilités, remise en service rapide pour un usage quotidien retrouvé.",
      ],
      uniqueIntro: `<p>Comment préserver la propreté d'un canapé quand les enfants y prennent leur goûter, que le chien s'y installe après chaque promenade, ou que les taches de café s'accumulent au fil des semaines ? Dans les quartiers résidentiels autour du <strong>Boulevard Robert Ballanger</strong> et aux Mousseaux, ces situations sont le quotidien de nombreux foyers. Les textiles absorbent tout : miettes, poils, liquides renversés, poussières fines.</p>
<p class="mt-4">Un canapé taché ou un tapis grisâtre modifie l'atmosphère d'un salon. L'odeur s'installe, les fibres perdent leur souplesse, et le confort visuel s'érode. Dans les pavillons comme dans les appartements de Villepinte, les textiles non déhoussables posent un défi particulier : impossible de les passer en machine, difficile de les traiter soi-même sans risquer auréoles ou décoloration.</p>
<p class="mt-4">Une intervention structurée permet de traiter chaque textile selon sa nature. Diagnostic préalable, détachage adapté, extraction contrôlée : le protocole s'ajuste aux usages familiaux et aux contraintes de séchage propres à chaque logement.</p>`,
      uniqueDeepDive: `<h3>Textile assaini et fibres ravivées</h3>
<p>L'objectif est de retrouver un canapé, un tapis ou un matelas débarrassé des salissures incrustées, des odeurs persistantes et des allergènes accumulés. Les couleurs retrouvent leur éclat, la texture redevient agréable au toucher.</p>

<h3>Diagnostic et pré-traitement ciblé</h3>
<p>Avant toute action, chaque textile est identifié : coton, synthétique, velours, laine. Les taches sont repérées et traitées individuellement avec des solutions adaptées — enzymatiques pour les traces organiques, dégraissantes pour les résidus alimentaires. Un test discret sur zone cachée sécurise les fibres fragiles.</p>

<h3>Injection-extraction et séchage maîtrisé</h3>
<p>Le nettoyage par injection-extraction pénètre en profondeur sans détremper le textile. La pression et la température sont ajustées selon l'épaisseur et la sensibilité du support. L'extraction maximale réduit le temps de séchage. Des consignes précises sont transmises : aération, délai avant réutilisation, entretien courant recommandé.</p>`,
      specificChallenges: [
        "Canapés tissu non déhoussables : traitement sur place sans démontage ni transport.",
        "Taches anciennes de café, vin ou encre incrustées depuis plusieurs mois dans les fibres.",
        "Matelas familiaux sollicités quotidiennement, accumulation d'acariens et de transpiration.",
        "Tapis grand format difficiles à manipuler, nécessitant une intervention directement au sol.",
        "Odeurs persistantes liées aux animaux de compagnie dans les foyers pavillonnaires.",
      ],
      faqAdditions: [
        {
          question: "Proposez-vous un traitement anti-acariens pour canapé et matelas dans un logement familial à Villepinte ?",
          answer: `<p>Le protocole d'extraction en profondeur élimine une grande partie des acariens et allergènes présents dans les fibres. Pour les foyers avec enfants ou personnes sensibles, un traitement complémentaire peut être appliqué après séchage. L'efficacité dépend de la régularité des interventions et de l'aération du logement.</p>`,
        },
        {
          question: "Comment nettoyez-vous un canapé tissu non déhoussable sans abîmer la mousse intérieure ?",
          answer: `<p>La technique d'injection-extraction contrôle précisément la quantité d'eau injectée et la puissance d'aspiration. Le textile est nettoyé en profondeur sans saturer la mousse. Un test préalable sur zone discrète vérifie la tenue des couleurs et la réaction du tissu avant de traiter l'ensemble de l'assise.</p>`,
        },
        {
          question: "Quel est le temps de séchage après un shampouinage canapé réalisé en appartement au centre de Villepinte ?",
          answer: `<p>Le séchage varie entre 4 et 12 heures selon l'épaisseur du textile, la ventilation de la pièce et la saison. En appartement, une bonne aération accélère le processus. Des consignes précises sont données en fin d'intervention pour éviter toute réutilisation prématurée du mobilier.</p>`,
        },
        {
          question: "Faut-il déplacer les meubles ou préparer le logement avant le nettoyage d'un tapis grand format ?",
          answer: `<p>Idéalement, dégager les petits objets posés sur le tapis facilite l'intervention. Pour les meubles lourds, l'équipe peut les déplacer légèrement si l'accès le permet. En pavillon comme en appartement, prévoir un espace de stationnement proche simplifie le déchargement du matériel d'extraction.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des dépôts verts pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des terrasses villepintaises exposées aux suies de l'A104 et aux mousses en zones pavillonnaires ombragées.",
        "Adaptation du traitement selon le support : pression réduite sur bois composite, brossage renforcé sur dalles gravillonnées.",
        "Protection systématique du mobilier et des plantations, gestion de l'accès par jardin sans passage intérieur.",
      ],
      uniqueIntro: `<p>Dans les quartiers pavillonnaires du <strong>Clos Montceleux</strong> et du <strong>Vieux Pays</strong>, les terrasses accumulent au fil des saisons des dépôts tenaces. Mousses vertes dans les joints, pellicule noire sur les dalles, traces grasses près du barbecue : ces salissures s'installent progressivement et rendent la surface glissante, peu engageante pour les beaux jours.</p>
<p class="mt-4">Les supports varient selon l'époque de construction : <strong>dalles gravillonnées</strong> sur les pavillons anciens, carrelage extérieur classique, ou <strong>bois composite</strong> sur les rénovations récentes. Chaque matériau réagit différemment à l'humidité et aux intempéries. Une terrasse noircie ou envahie de lichens perd son attrait et demande un traitement ciblé pour retrouver son aspect d'origine.</p>
<p class="mt-4">La proximité de l'<strong>A104</strong> génère des dépôts de suies qui se combinent aux mousses en zones ombragées. L'accès se fait parfois uniquement par le jardin privatif, ce qui nécessite une organisation adaptée pour acheminer le matériel sans traverser l'intérieur du logement.</p>`,
      uniqueDeepDive: `<h3>Surface débarrassée et support identifié</h3>
<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les baies vitrées et menuiseries reçoivent une protection pour éviter les projections.</p>
<p class="mt-4">Un balayage élimine les feuilles mortes, terre et débris accumulés. Le type de support est vérifié pour adapter la pression et les produits : bois composite, pierre naturelle ou carrelage ne tolèrent pas les mêmes traitements.</p>

<h3>Traitement et nettoyage en profondeur</h3>
<p>Un produit adapté au matériau est appliqué sur les zones encrassées. Le brossage manuel ou mécanique déloge les mousses incrustées et les dépôts noirs.</p>
<p class="mt-4">Sur les supports résistants, une haute pression contrôlée complète le travail. Les joints et zones poreuses bénéficient d'un traitement anti-mousse préventif pour ralentir la réapparition des végétaux.</p>

<h3>Rinçage et conseils d'entretien</h3>
<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont protégées pendant le rinçage.</p>
<p class="mt-4">Des recommandations d'entretien saisonnier vous sont transmises selon l'exposition de votre terrasse.</p>`,
      specificChallenges: [
        "Mousses et lichens tenaces dans les joints des dalles anciennes en zone ombragée.",
        "Dépôts noirs liés aux suies de l'A104 sur les terrasses exposées côté rue.",
        "Supports variés sur un même pavillon : carrelage, bois composite, béton brut.",
        "Accès parfois limité au passage par le jardin, nécessitant une logistique adaptée.",
        "Risque de glissance sur surfaces encrassées, surtout après les pluies d'automne.",
      ],
      faqAdditions: [
        {
          question: "Comment éliminer les mousses incrustées sur une terrasse pavillonnaire du Clos Montceleux ?",
          answer: `<p>Les mousses installées dans les joints demandent un brossage mécanique suivi d'un traitement anti-mousse. Sur les dalles gravillonnées fréquentes dans ce quartier, nous adaptons la pression pour ne pas déchausser les graviers. Un produit préventif ralentit la repousse pendant plusieurs mois.</p>`,
        },
        {
          question: "Quel procédé utilisez-vous pour nettoyer une terrasse en bois composite sans l'abîmer ?",
          answer: `<p>Le bois composite ne supporte pas la haute pression classique qui peut délaminer les lames. Nous utilisons une pression réduite combinée à un nettoyant spécifique qui décolle les salissures sans agresser la surface. Le séchage est rapide et le rendu uniforme.</p>`,
        },
        {
          question: "Faut-il privilégier haute pression ou nettoyage doux sur une terrasse en dalles anciennes ?",
          answer: `<p>Cela dépend de l'état des joints et de la porosité des dalles. Sur les terrasses anciennes du Vieux Pays, nous testons d'abord sur une zone discrète. Si les joints sont fragilisés, un nettoyage basse pression avec brossage manuel évite de creuser les interstices.</p>`,
        },
        {
          question: "À quelle fréquence nettoyer une terrasse exposée aux dépôts noirs en bordure de l'A104 ?",
          answer: `<p>Les terrasses proches de l'autoroute accumulent plus vite les suies et particules. Un entretien annuel au printemps suffit généralement, mais les expositions nord ou ombragées peuvent nécessiter un passage supplémentaire à l'automne pour éviter l'installation des mousses.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, du sol aux plafonds, avec coordination des accès et respect des délais pour une restitution ou une entrée dans les meilleures conditions.",
      whyUsBullets: [
        "Connaissance des typologies locatives à Villepinte, du collectif récent aux pavillons anciens du Vieux Pays.",
        "Polyvalence sur tous types de sols et finitions, du carrelage au parquet flottant en passant par le lino.",
        "Organisation calée sur vos contraintes : créneaux ajustés, coordination agence, remise des clés planifiée.",
      ],
      uniqueIntro: `<p>Après plusieurs semaines de travaux ou quelques années d'occupation, un appartement accumule des traces que le ménage courant ne suffit plus à effacer. Dans les <strong>logements du Parc de la Noue et de la ZAC de la Pépinière</strong>, la rotation locative soutenue et les livraisons de programmes neufs génèrent des besoins réguliers de remise en état complète avant restitution ou entrée dans les lieux.</p>
<p class="mt-4">Un nettoyage approfondi permet de repartir sur une base saine : sols débarrassés des résidus de chantier, vitres intérieures dégagées, sanitaires détartrés. Pour les <strong>T2 et T3 en collectif comme pour les pavillons</strong> avec sols carrelage ou parquet flottant, chaque surface reçoit un traitement adapté à sa nature et à son état.</p>
<p class="mt-4">Face à la <strong>demande de réactivité des agences et propriétaires</strong> pour les relocations rapides, nous organisons chaque intervention en amont : confirmation des accès, planification des créneaux, coordination avec les artisans si le chantier n'est pas totalement achevé.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute intervention, nous évaluons l'état du logement : nature des sols, présence de résidus de chantier, niveau d'encrassement des pièces d'eau. Les accès sont confirmés avec le donneur d'ordre, qu'il s'agisse d'une agence, d'un propriétaire ou d'un artisan encore présent sur site.</p>
<p class="mt-4">Les surfaces fragiles sont protégées si nécessaire, et les éventuels gravats ou déchets volumineux sont évacués avant le démarrage du nettoyage proprement dit.</p>

<h3>Nettoyage complet par zone</h3>
<p>Le dépoussiérage débute par les hauteurs : plafonds, luminaires, plinthes. Les sols sont aspirés puis lavés selon leur revêtement. Les pièces d'eau reçoivent un traitement spécifique : détartrage des sanitaires, dégraissage des plans de travail, nettoyage de la faïence et des joints.</p>
<p class="mt-4">Les vitres intérieures, interrupteurs, poignées et placards sont traités en finition.</p>

<h3>Contrôle et remise des clés</h3>
<p>Un passage final vérifie chaque pièce. Le logement est aéré, prêt pour l'état des lieux ou l'emménagement. Les clés peuvent être restituées directement à l'agence ou au propriétaire selon l'organisation convenue.</p>`,
      specificChallenges: [
        "Rotation locative soutenue dans les résidences proches des gares RER, avec délais serrés entre deux locataires.",
        "Livraisons de programmes neufs en ZAC nécessitant un nettoyage fin de chantier avant remise des clés.",
        "Accès parfois contraints par les digicodes et badges des résidences récentes du Parc de la Noue.",
        "Coordination avec artisans ou agences pour respecter les plannings de relocation.",
        "Sols variés selon les époques de construction : carrelage, parquet, lino, nécessitant des traitements distincts.",
      ],
      faqAdditions: [
        {
          question: "Que comprend un nettoyage fin de chantier pour un appartement livré en ZAC de la Pépinière ?",
          answer: `<p>L'intervention couvre l'évacuation des poussières de plâtre et résidus de découpe, le lavage complet des sols, le nettoyage des vitres intérieures et le détartrage des sanitaires neufs. Les traces de peinture ou de colle sur les menuiseries sont traitées manuellement pour ne pas abîmer les surfaces.</p>`,
        },
        {
          question: "Quelle est votre capacité d'intervention pour un état des lieux urgent proche de la gare RER Villepinte ?",
          answer: `<p>Nous pouvons généralement intervenir sous 48 à 72 heures selon la surface et la disponibilité des équipes. Pour les relocations très urgentes, un créneau en soirée ou le samedi peut être envisagé après confirmation des accès avec l'agence ou le propriétaire.</p>`,
        },
        {
          question: "Comment évaluez-vous le volume de travail pour un T3 dans le quartier Parc de la Noue ?",
          answer: `<p>L'évaluation tient compte de la surface, de l'état général du logement et du type de prestation demandée. Un T3 en sortie locataire standard représente environ 3 à 4 heures de travail. Une fin de chantier ou un logement très encrassé nécessite un temps plus long, précisé après visite ou photos.</p>`,
        },
        {
          question: "Comment retirez-vous les traces de peinture et colle après rénovation dans un appartement neuf ?",
          answer: `<p>Les projections de peinture sur carrelage ou vitres sont grattées à la lame puis nettoyées au produit adapté. Les résidus de colle sur parquet ou menuiseries sont traités avec un solvant doux pour éviter toute dégradation. Chaque support reçoit un traitement spécifique selon sa sensibilité.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;