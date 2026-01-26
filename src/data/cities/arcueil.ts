import type { City } from "~/types/geo";

const city: City = {
  name: "Arcueil",
  slug: "arcueil",
  postalCodes: ["94110"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Arcueil. Du secteur Vache Noire aux résidences du Chaperon Vert, une équipe locale organise chaque intervention selon les contraintes d'accès et de stationnement de la commune.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // doit être : 2 <p> puis <ul>
  hubIntro: `<p>Au pied des Aqueducs et du centre commercial de la Vache Noire, Arcueil concentre bureaux tertiaires, grands ensembles et quartiers pavillonnaires. Klinova s'y positionne comme partenaire de proximité pour syndics, gestionnaires et entreprises locales.</p>

<p class="mt-4">Notre organisation couvre la propreté des communs, l'entretien des sols techniques et la remise en état des espaces extérieurs. Chaque prestation fait l'objet d'un suivi terrain, avec reporting disponible sur demande pour les donneurs d'ordre professionnels.</p>

<ul>
  <li><strong>Coordination locale :</strong> Nos équipes connaissent les contraintes de stationnement en zone verte et les accès par digicode ou badge Vigik fréquents dans les résidences récentes.</li>
  <li><strong>Interventions adaptées :</strong> Horaires décalés possibles pour limiter la gêne dans les immeubles à forte densité ou les locaux tertiaires du secteur Joliot-Curie.</li>
  <li><strong>Suivi structuré :</strong> Un interlocuteur dédié centralise les demandes et transmet les comptes-rendus d'intervention aux syndics et gestionnaires.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution noire</strong> sur les façades et balcons exposés à l'axe D920 et à l'A6.",
    "Parkings souterrains anciens du <strong>Chaperon Vert</strong> nécessitant un décapage régulier.",
    "Halls à fort passage dans les résidences proches de la <strong>gare RER Laplace</strong>.",
    "Digicodes et badges Vigik généralisés dans le résidentiel récent du secteur Vache Noire.",
    "Stationnement contraint en zone verte, saturation aux heures de pointe RER.",
  ],

  // Texte brut uniquement
  districts: [
    "Quartier Barbusse",
    "Quartier Jules Ferry",
    "Quartier Joliot-Curie",
    "Quartier Jean Macé",
    "Quartier Kergomard",
    "Cité du Chaperon Vert",
  ],
  nearbyCities: [
        "gentilly",
        "cachan",
        "montrouge",
        "ivry-sur-seine",
        "charenton-le-pont",
        "alfortville",
        "saint-mande",
        "maisons-alfort",
        "vincennes",
        "creteil"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Arcueil",
    "Maison des Examens (SIEC)",
    "Centre Commercial La Vache Noire",
    "Aqueducs d'Arcueil et de Cachan",
    "Gare RER Laplace",
    "Parc du Coteau de Bièvre",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
faq: [
  {
    question:
      "Comment organisez-vous vos interventions dans les copropriétés d'Arcueil où le stationnement est difficile ?",
    answer: `<p>Nous repérons en amont les possibilités de stationnement (parkings, zones réglementées, accès de service) et, si besoin, nous coordonnons avec le gardien ou le syndic. Le matériel est préparé pour limiter les allers-retours et respecter les contraintes locales, avec une <strong>dépose rapide</strong> si nécessaire.</p>`,
  },
  {
    question:
      "Pouvez-vous intervenir en urgence sur une dégradation dans un hall ou un parking ?",
    answer: `<p>Oui, selon la nature du problème et notre planning, nous pouvons intervenir sous <strong>24 à 48 heures</strong>. Le syndic ou le gestionnaire reçoit un retour rapide sur le diagnostic et les délais de remise en état envisageables.</p>`,
  },
  {
    question: "Comment se passe la coordination avec le gardien ou le conseil syndical ?",
    answer: `<p>Nous prenons contact avant chaque intervention pour confirmer les accès, les horaires et les éventuelles contraintes (travaux en cours, zones sensibles). Un <strong>compte-rendu</strong> peut être transmis après passage si demandé.</p>`,
  },
  {
    question: "Proposez-vous un devis avant intervention à Arcueil ?",
    answer: `<p>Chaque demande fait l'objet d'un échange préalable pour évaluer la surface, l'état des lieux et les contraintes d'accès. Le devis détaille le périmètre et la méthode, avec une <strong>estimation claire</strong> avant validation.</p>`,
  },
],


  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services
  services: [
    // 1) moquettes
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes de bureaux ou de copropriété, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des configurations tertiaires du secteur Vache Noire et des copropriétés avenue Laplace.",
        "Matériel d'injection-extraction adapté aux dalles textiles et velours ras des bureaux.",
        "Planification en horaires décalés pour limiter l'impact sur l'activité des locaux.",
      ],
      uniqueIntro: `<p>Dans le secteur tertiaire autour du <strong>Siège Orange</strong> et des immeubles de bureaux de la Vache Noire, les moquettes subissent un passage quotidien soutenu. Les fibres accumulent poussières fines, traces de semelles et résidus de café qui ternissent progressivement l'aspect des couloirs et open-spaces. Sans entretien adapté, ces dépôts s'incrustent et deviennent difficiles à éliminer par simple aspiration.</p>

<p class="mt-4">Sur les <strong>dalles textiles</strong> et velours ras fréquents dans ces configurations, un détachage régulier préserve la tenue des fibres et l'image professionnelle des locaux. Les copropriétés récentes avenue Laplace présentent des revêtements similaires dans leurs parties communes, où le trafic résidentiel génère des salissures comparables. Un ravivage périodique évite le grisaillement et prolonge la durée de vie du textile.</p>

<p class="mt-4">L'intervention s'organise en tenant compte du <strong>flux tertiaire et de la proximité de l'axe D920</strong>, source de poussières grasses. Diagnostic préalable, protection des plinthes et planification en horaires décalés permettent de limiter la gêne pour les occupants.</p>`,
      uniqueDeepDive: `<h3>Zones de circulation intense</h3>
<p>Les couloirs et accès principaux concentrent l'essentiel des salissures. Après aspiration préalable, ces surfaces reçoivent plusieurs passes d'injection-extraction pour déloger les particules enfoncées dans les fibres.</p>
<p class="mt-4">Les angles et seuils de portes font l'objet d'un détachage ciblé lorsque des taches de tanin ou de graisse persistent.</p>

<h3>Espaces de travail et salles de réunion</h3>
<p>Les open-spaces et bureaux cloisonnés présentent des zones de piétinement localisées autour des postes. Le traitement cible ces emplacements sans mouiller excessivement les surfaces adjacentes.</p>
<p class="mt-4">Les protections sont posées le long des cloisons et du mobilier fixe pour éviter les projections.</p>

<h3>Extraction et temps de séchage</h3>
<p>L'aspiration finale retire le maximum d'humidité résiduelle. Selon l'épaisseur du textile et la ventilation disponible, le séchage complet intervient généralement sous 4 à 8 heures.</p>
<p class="mt-4">Une consigne de non-piétinement est transmise pour garantir un rendu homogène à la reprise d'activité.</p>`,
      specificChallenges: [
        "Poussières grasses liées au trafic de l'axe D920 qui s'incrustent dans les fibres.",
        "Open-spaces de grande surface nécessitant une organisation par zones pour éviter l'interruption totale.",
        "Dalles textiles collées dans les bureaux récents : séchage rapide exigé pour reprise d'activité.",
        "Couloirs de copropriétés avec passage résidentiel quotidien et contraintes d'horaires.",
        "Escaliers étroits dans le centre historique limitant l'accès du matériel volumineux.",
      ],
      faqAdditions: [
        {
          question:
            "Comment organisez-vous l'intervention dans les escaliers étroits des immeubles anciens du centre historique d'Arcueil ?",
          answer: `<p>Nous utilisons du matériel compact transportable à la main. L'équipe fractionne l'intervention par palier pour éviter d'encombrer les passages. Les protections sont posées au fur et à mesure de la progression, et le temps de séchage est anticipé pour libérer rapidement la circulation.</p>`,
        },
        {
          question:
            "Quelle méthode recommandez-vous pour des taches anciennes incrustées dans les moquettes des couloirs de bureaux du secteur Siège Orange ?",
          answer: `<p>Un pré-détachage localisé précède l'injection-extraction. Les résidus de café ou de tanin nécessitent parfois plusieurs passes avec un produit adapté au type de fibre. Le résultat dépend de l'ancienneté de la tache, mais l'aspect général est nettement amélioré.</p>`,
        },
        {
          question:
            "Sur un open-space tertiaire proche de la Vache Noire, préférez-vous le shampouinage ou l'injection-extraction ?",
          answer: `<p>L'injection-extraction reste la méthode privilégiée : elle extrait davantage de salissures et réduit le temps de séchage. Le shampouinage peut convenir pour un entretien léger, mais laisse plus d'humidité résiduelle, ce qui retarde la reprise d'activité dans des locaux à fort passage.</p>`,
        },
        {
          question:
            "Quel délai de séchage prévoir après un nettoyage de moquette en copropriété sur l'avenue Laplace ?",
          answer: `<p>Selon l'épaisseur du textile et la ventilation du couloir, comptez entre 4 et 8 heures avant de pouvoir circuler normalement. Nous conseillons d'intervenir en fin de journée ou le week-end pour que le séchage s'effectue hors des heures de passage principal.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // 2) parkings
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion rigoureuse des eaux usées et balisage sécurisé pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des parkings arcueillais : accès étroits du Chaperon Vert, sous-sols commerciaux de la Vache Noire.",
        "Autolaveuse professionnelle et dégraissants adaptés aux sols béton ou résine, avec récupération des eaux conforme.",
        "Coordination avec syndics et gestionnaires pour planifier l'intervention sans bloquer l'accès aux résidents.",
      ],
      uniqueIntro: `<p>Les traces noires s'accumulent sur les sols des parkings souterrains du <strong>Centre Commercial La Vache Noire</strong> et des résidences alentour. Suie, projections d'huile moteur, poussières grasses : le trafic quotidien laisse des dépôts tenaces sur le béton et la résine. Ces salissures s'incrustent dans les pores du revêtement et résistent au simple balayage.</p>

<p class="mt-4">Un sol encrassé dégrade l'image de la copropriété ou du site commercial. Les résidents signalent des odeurs persistantes, les gestionnaires reçoivent des plaintes. Sur les parkings anciens comme ceux du <strong>Chaperon Vert</strong>, les rampes étroites et les angles morts concentrent les dépôts les plus résistants. Sans intervention adaptée, le revêtement se détériore et les marquages au sol deviennent illisibles.</p>

<p class="mt-4">Une intervention programmée permet de coordonner le lavage mécanisé avec la rotation des véhicules. Le balisage sécurise les zones traitées pendant que l'autolaveuse progresse par passes successives, en respectant les contraintes d'évacuation propres aux sous-sols à fort trafic.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation du site</h3>
<p>Avant toute intervention, nous identifions le type de revêtement — béton brut, résine ou peinture — et vérifions l'état des évacuations. Un balayage préalable retire les débris grossiers.</p>
<p class="mt-4">Le balisage est installé pour sécuriser les usagers. Si nécessaire, un zonage permet la rotation des véhicules sans fermeture totale du parking.</p>

<h3>Lavage mécanisé et dégraissage</h3>
<p>L'autolaveuse effectue des passes régulières sur l'ensemble de la surface. Un dégraissant adapté traite les zones critiques : rampes d'accès, pieds de murs, rigoles et angles morts où s'accumulent les résidus d'hydrocarbures.</p>
<p class="mt-4">La pression et les produits sont ajustés selon le support pour préserver l'adhérence des sols et les marquages existants.</p>

<h3>Gestion des eaux et finalisation</h3>
<p>Les eaux de lavage sont récupérées et dirigées vers les évacuations conformes. Aucun rejet sauvage n'est toléré.</p>
<p class="mt-4">Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention. Nous transmettons une recommandation de fréquence adaptée au trafic constaté.</p>`,
      specificChallenges: [
        "Suie et poussières grasses liées à la proximité de l'A6 et de la D920.",
        "Rampes d'accès étroites dans les parkings anciens du Chaperon Vert.",
        "Rotation des véhicules à organiser sans fermeture totale du parking.",
        "Évacuations parfois vétustes nécessitant une gestion rigoureuse des eaux.",
        "Marquages au sol à préserver lors du lavage mécanisé.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes dans les parkings souterrains du Chaperon Vert ?",
          answer: `<p>Les dépôts d'hydrocarbures incrustés sont traités avec un dégraissant professionnel appliqué avant le passage de l'autolaveuse. Plusieurs passes peuvent être nécessaires sur les zones les plus marquées. Le résultat dépend de l'ancienneté des taches et de la porosité du béton.</p>`,
        },
        {
          question:
            "Quelle gestion des eaux de lavage appliquez-vous pour un sous-sol du centre commercial Vache Noire ?",
          answer: `<p>Les eaux chargées sont aspirées par l'autolaveuse et dirigées vers les évacuations prévues à cet effet. Nous vérifions au préalable l'état des regards et rigoles. Aucun rejet n'est effectué en dehors des circuits conformes, conformément aux exigences des gestionnaires de site.</p>`,
        },
        {
          question:
            "Pour intervenir dans le parking Vache Noire, proposez-vous une fermeture partielle hors heures d'affluence ?",
          answer: `<p>Oui, nous planifions l'intervention en coordination avec le gestionnaire pour limiter la gêne. Un zonage par niveaux ou par travées permet de maintenir l'accès aux usagers. Les horaires décalés — tôt le matin ou en soirée — réduisent l'impact sur le flux de véhicules.</p>`,
        },
        {
          question:
            "Quelle différence de technique entre un parking souterrain et un parking aérien à Arcueil ?",
          answer: `<p>En souterrain, la ventilation réduite impose un séchage plus long et une attention particulière aux évacuations. En extérieur, les mousses et dépôts végétaux s'ajoutent aux salissures classiques. Nous adaptons le matériel et les produits selon la configuration et l'exposition du site.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // 3) balcons
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Arcueil : sols, garde-corps et vitrages traités avec gestion rigoureuse des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux Aqueducs, loggias en retrait ou façades sur axes passants.",
        "Pression ajustée selon le support : béton ancien, dalles sur plots ou carrelage, chaque revêtement reçoit le traitement adapté.",
        "Protection systématique du voisinage : bâchage, contrôle du débit d'eau et vérification avant départ.",
      ],
      uniqueIntro: `<p>Dans le secteur des balcons donnant sur les Aqueducs d'Arcueil, on constate une accumulation rapide de dépôts noirs et de traces grasses. L'exposition aux flux de circulation depuis la D920 et l'A6 laisse un film sombre sur les sols et garde-corps. Les corniches attirent également les pigeons, dont les fientes s'incrustent dans les joints. Résultat : un espace extérieur qu'on hésite à utiliser, même aux beaux jours.</p>

<p class="mt-4">Retrouver un balcon propre change le quotidien. Sur les balcons filants en béton des immeubles années 60-70 comme sur les loggias récentes avec dalles sur plots, le confort visuel revient dès que les surfaces sont débarrassées de leur couche grisâtre. Les plantes reprennent leur place, le mobilier peut ressortir. L'impression de vivre dans un logement soigné se ressent immédiatement.</p>

<p class="mt-4">Une intervention structurée permet d'obtenir ce résultat sans risque pour les supports ni gêne pour les voisins du dessous. Diagnostic préalable, protection des menuiseries, traitement adapté au revêtement et contrôle de l'évacuation des eaux : chaque étape est pensée pour votre configuration.</p>`,
      uniqueDeepDive: `<h3>Un sol débarrassé de ses dépôts incrustés</h3>
<p>Le résultat visé : des dalles ou un béton retrouvant leur teinte d'origine, sans traces noires ni résidus verts. Pour y parvenir, les gros débris sont d'abord retirés manuellement. Un produit adapté au support est ensuite appliqué, suivi d'un brossage ciblé sur les zones encrassées.</p>

<h3>Garde-corps et vitrages sans coulures</h3>
<p>L'objectif est un ensemble homogène, sans démarcation entre sol propre et éléments périphériques ternes. Les barreaux métalliques ou les parois vitrées sont traités avec des solutions non agressives. Le rinçage est contrôlé pour éviter les projections vers les étages inférieurs.</p>

<h3>Un espace prêt à être réutilisé</h3>
<p>Le balcon doit pouvoir accueillir à nouveau mobilier et plantes rapidement. Le séchage est accéléré si nécessaire. Avant de partir, des conseils d'entretien sont transmis pour espacer les prochaines interventions selon l'exposition de votre balcon à la pollution ou aux feuillages environnants.</p>`,
      specificChallenges: [
        "Pollution noire depuis la D920 et l'A6 formant un voile gras sur les garde-corps.",
        "Dépôts verts et mousses sur les balcons exposés nord dans le Bas d'Arcueil.",
        "Évacuation d'eau parfois complexe sur les balcons filants des immeubles anciens.",
        "Vis-à-vis important nécessitant discrétion et protection anti-coulures.",
        "Fientes de pigeons incrustées près des corniches donnant sur les Aqueducs.",
      ],
      faqAdditions: [
        {
          question:
            "Comment adaptez-vous le nettoyage aux balcons béton filant des immeubles années 60 à Arcueil ?",
          answer: `<p>Sur ces supports poreux, nous évitons la haute pression agressive. Un brossage mécanique doux combiné à un produit désincrustant permet de retirer les dépôts sans fragiliser les joints ni créer de micro-fissures. Le rinçage reste modéré pour préserver l'étanchéité d'origine.</p>`,
        },
        {
          question:
            "Sur un balcon donnant sur les Aqueducs, comment gérez-vous l'évacuation des eaux ?",
          answer: `<p>Nous installons des bâches de protection en périphérie et contrôlons le débit lors du rinçage. L'eau est dirigée vers les évacuations existantes. Si le balcon n'en dispose pas, nous utilisons un aspirateur à eau pour limiter tout écoulement vers les étages inférieurs.</p>`,
        },
        {
          question:
            "Comment éliminer les mousses et dépôts verts sur les balcons exposés nord dans le Bas d'Arcueil ?",
          answer: `<p>Ces zones ombragées favorisent la prolifération végétale. Nous appliquons un traitement anti-mousse avant brossage, puis rinçons à pression contrôlée. Un produit préventif peut être proposé pour ralentir la réapparition, selon l'humidité ambiante de votre exposition.</p>`,
        },
        {
          question:
            "Quelles solutions proposez-vous pour les balcons proches de la D920 sans recourir à la haute pression ?",
          answer: `<p>La pollution grasse de cet axe nécessite un dégraissant adapté plutôt qu'une pression élevée. Nous travaillons au brossage manuel ou mécanique doux après application du produit. Cette méthode préserve les joints fragiles tout en éliminant efficacement le film noir accumulé.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // 4) balcons-fientes
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes, avec désinfection virucide des supports et mise en place de solutions anti-retour pour retrouver un espace sain.",
      whyUsBullets: [
        "Connaissance des zones à risque à Arcueil : proximité parcs, corniches d'immeubles anciens, derniers étages des grands ensembles.",
        "Protocole EPI complet avec confinement systématique et désinfection virucide validée pour éliminer les agents pathogènes.",
        "Évacuation en sacs étanches et coordination avec le voisinage pour limiter les nuisances pendant l'intervention.",
      ],
      uniqueIntro: `<p>Après plusieurs mois d'accumulation, les fientes de pigeons transforment un balcon en zone inutilisable. À Arcueil, les secteurs proches du <strong>Parc du Coteau de Bièvre</strong> et des espaces arborés concentrent les nidifications. Les déjections s'accumulent sur le sol, le garde-corps, parfois jusqu'aux vitrages. L'odeur persiste, le linge ne peut plus sécher dehors, et l'espace reste condamné.</p>

<p class="mt-4">Les supports en béton brut des balcons filants années 60-70 ou les corniches des immeubles anciens du quartier Jules Ferry absorbent l'acidité des fientes. Sans traitement, la peinture s'écaille, le métal rouille, le béton se dégrade. Un assainissement adapté permet de récupérer l'usage du balcon, d'éliminer les agents pathogènes et de stopper la dégradation des matériaux.</p>

<p class="mt-4">L'intervention comprend un diagnostic de l'état des surfaces, la mise en place d'un confinement pour protéger l'intérieur du logement et le voisinage, puis un protocole complet jusqu'à la désinfection finale.</p>`,
      uniqueDeepDive: `<h3>Balcon assaini et désinfecté</h3>
<p>L'objectif est de restituer un espace propre, sans odeur, avec des surfaces décontaminées. Les agents pathogènes présents dans les fientes sont neutralisés par un produit virucide homologué appliqué après le nettoyage mécanique.</p>

<h3>Confinement et collecte sécurisée</h3>
<p>Avant toute manipulation, la zone est bâchée pour éviter la dispersion des poussières contaminées. L'intervenant porte combinaison jetable, masque FFP2, lunettes et gants. Les fientes sont humidifiées puis collectées dans des sacs étanches. Sol, garde-corps et vitrages sont traités successivement.</p>

<h3>Rinçage et options anti-retour</h3>
<p>Après application du désinfectant et respect du temps de contact, un rinçage complet est effectué. Le balcon reste inaccessible le temps du séchage. Si souhaité, des pics anti-pigeons ou un filet de protection peuvent être posés sur les rebords et corniches pour limiter le retour des volatiles.</p>`,
      specificChallenges: [
        "Secteurs arborés proches du Parc du Coteau : nidification fréquente sur balcons exposés.",
        "Corniches et garde-corps des immeubles anciens attaqués par l'acidité des fientes.",
        "Grands ensembles du Chaperon Vert : coordination nécessaire avec voisins pour éviter nuisances.",
        "Vis-à-vis important en zone dense : confinement obligatoire pour protéger les logements mitoyens.",
        "Balcons béton brut années 60-70 : absorption des salissures nécessitant traitement adapté.",
      ],
      faqAdditions: [
        {
          question:
            "Mon balcon côté Parc du Coteau de Bièvre est envahi de fientes : quelle intervention urgente proposez-vous ?",
          answer: `<p>Nous intervenons sous 48 à 72 heures selon disponibilité. Le protocole inclut confinement de la zone, collecte sécurisée des déjections, nettoyage des supports et désinfection virucide. L'espace redevient utilisable après séchage complet, généralement sous 24 heures.</p>`,
        },
        {
          question:
            "Quel protocole EPI et quel produit de désinfection utilisez-vous pour un balcon souillé à Arcueil ?",
          answer: `<p>L'intervenant porte masque FFP2, combinaison jetable, lunettes et gants. Les fientes sont humidifiées avant manipulation pour éviter l'envol de particules. Le désinfectant utilisé est un produit virucide et bactéricide homologué, appliqué avec un temps de contact respecté avant rinçage.</p>`,
        },
        {
          question:
            "Après le nettoyage de fientes dans un immeuble du Chaperon Vert, comment évacuez-vous les déchets ?",
          answer: `<p>Les déjections et résidus sont conditionnés dans des sacs étanches fermés sur place. L'évacuation se fait sans transit par les parties communes ouvertes. En grand ensemble, nous coordonnons l'intervention pour limiter les nuisances olfactives vis-à-vis du voisinage direct.</p>`,
        },
        {
          question:
            "Les fientes ont attaqué la corniche d'un immeuble ancien à Jules Ferry : peut-on restaurer sans décapage lourd ?",
          answer: `<p>Si la dégradation reste superficielle, un nettoyage adapté au support suivi d'une désinfection permet de stopper la détérioration. En cas d'écaillage avancé ou de corrosion profonde, nous signalons les zones nécessitant une reprise par un professionnel du bâtiment.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // 5) canapes-tapis
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures en profondeur et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance du parc locatif dense autour de Laplace et des contraintes d'accès en centre ancien.",
        "Détachage ciblé selon la nature des fibres, extraction textile sans excès d'humidité.",
        "Intervention planifiée selon vos disponibilités, matériel compact adapté aux escaliers étroits.",
      ],
      uniqueIntro: `<p>Comment préserver l'état d'un canapé quand les enfants y prennent leur goûter, que le chat s'y installe chaque soir, ou qu'un locataire vient de quitter les lieux ? Dans le <strong>secteur autour de la gare RER Laplace</strong>, où studios et appartements familiaux se côtoient, les textiles d'ameublement encaissent un usage quotidien intensif. Taches de café, auréoles d'humidité, odeurs persistantes : les fibres absorbent tout ce que la vie leur impose.</p>

<p class="mt-4">Un entretien régulier change la donne. Un canapé détaché retrouve son aspect d'origine, un tapis ravivé redonne de la clarté à une pièce, un matelas assaini améliore le confort de sommeil. Dans les <strong>immeubles anciens du centre-ville avec escaliers étroits</strong>, ces interventions évitent aussi le remplacement prématuré de mobilier difficile à déplacer.</p>

<p class="mt-4">Notre intervention s'adapte à chaque configuration. Diagnostic textile préalable, choix des produits selon la nature des fibres, extraction contrôlée. Pour les <strong>familles comme pour les locataires en rotation fréquente</strong>, nous organisons le passage en tenant compte des contraintes de stationnement et d'accès propres à Arcueil.</p>`,
      uniqueDeepDive: `<h3>Textile propre et fibres préservées</h3>
<p>Le résultat visé : des couleurs ravivées, des taches éliminées, une odeur neutre. Pour y parvenir, chaque textile fait l'objet d'un diagnostic initial. Type de tissu — coton, velours, synthétique, laine — et nature des salissures orientent le choix de la méthode.</p>
<p class="mt-4">Un test discret sur zone cachée valide la compatibilité du traitement avec les fibres fragiles.</p>

<h3>Détachage ciblé puis injection-extraction</h3>
<p>Les taches identifiées reçoivent un pré-traitement adapté : enzymatique pour les traces organiques, dégraissant pour les auréoles grasses. L'injection-extraction textile déloge ensuite les résidus en profondeur sans détremper le support.</p>
<p class="mt-4">La pression et la température sont ajustées selon l'épaisseur et la sensibilité du revêtement.</p>

<h3>Séchage et conseils d'usage</h3>
<p>L'extraction maximale réduit le temps de séchage. Selon la saison et l'aération du logement, comptez quelques heures avant de réutiliser le mobilier.</p>
<p class="mt-4">Nous transmettons des conseils d'entretien pour espacer les interventions suivantes.</p>`,
      specificChallenges: [
        "Studios meublés près du RER Laplace avec rotation locative fréquente et taches accumulées.",
        "Canapés volumineux dans des appartements sans ascenseur du centre historique.",
        "Tapis familiaux sollicités quotidiennement par enfants et animaux dans le quartier Kergomard.",
        "Stationnement limité en zone verte nécessitant une organisation logistique adaptée.",
        "Matelas à assainir entre deux locataires avec délai court avant nouvel état des lieux.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé tissu non déhoussable dans un studio proche du RER Laplace, quelle méthode utilisez-vous ?",
          answer: `<p>Nous procédons par injection-extraction directement sur le tissu en place. Un pré-traitement cible les taches visibles, puis la machine injecte une solution nettoyante et aspire immédiatement les résidus. Cette technique convient aux canapés fixes des petits logements sans nécessiter de démontage.</p>`,
        },
        {
          question:
            "Pour réduire les acariens sur un canapé chez une famille du quartier Kergomard, quel résultat puis-je attendre ?",
          answer: `<p>L'extraction en profondeur déloge une grande partie des allergènes logés dans les fibres. Le textile ressort assaini, avec une charge en acariens nettement diminuée. Pour les foyers sensibles, nous recommandons un entretien régulier afin de maintenir ce niveau d'hygiène dans la durée.</p>`,
        },
        {
          question:
            "Dans un appartement sans ascenseur du centre-ville, quel temps de séchage pour un détachage canapé ?",
          answer: `<p>Comptez généralement trois à six heures selon l'épaisseur du tissu et la ventilation du logement. Notre extraction poussée limite l'humidité résiduelle. En été ou avec fenêtres ouvertes, le séchage s'accélère. Nous vous indiquons le délai estimé avant de quitter les lieux.</p>`,
        },
        {
          question:
            "Comment dois-je préparer l'appartement et le stationnement pour une intervention près de Laplace ?",
          answer: `<p>Dégagez l'accès au mobilier concerné et prévoyez si possible un emplacement de stationnement à proximité, la zone étant souvent saturée. Nous pouvons convenir d'un créneau horaire où le stationnement est plus accessible. Aucune autre préparation particulière n'est nécessaire de votre côté.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // 6) terrasses
    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse avec traitement adapté au support, élimination des mousses et dépôts tenaces, pour retrouver un espace extérieur propre et sécurisé.",
      whyUsBullets: [
        "Connaissance des terrasses du Bas d'Arcueil et des attiques récents, expositions variées et supports différents selon les quartiers.",
        "Traitement différencié selon le matériau : pression ajustée pour le bois, brossage adapté pour la pierre, produit anti-mousse ciblé.",
        "Protection du mobilier extérieur et des plantations, gestion de l'évacuation d'eau sans nuisance pour le voisinage.",
      ],
      uniqueIntro: `<p>Les traces vertes et le noircissement progressif sont visibles sur de nombreuses terrasses du <strong>quartier Jules Ferry</strong> et du secteur <strong>Kergomard</strong>. Les dalles perdent leur teinte d'origine, les joints se couvrent de mousse, et certaines zones deviennent glissantes après la pluie. Ces dégradations s'installent saison après saison, rendant l'espace moins accueillant et parfois risqué.</p>

<p class="mt-4">Sur les <strong>carrelages des pavillons</strong> comme sur les <strong>dalles sur plots ou bois composite des attiques récents</strong>, le résultat d'un entretien adapté change l'usage quotidien. Une terrasse propre redevient un prolongement naturel du logement, utilisable sans hésitation pour les repas ou la détente. Les taches grasses de barbecue, les dépôts de feuilles et les lichens incrustés disparaissent.</p>

<p class="mt-4">L'intervention prend en compte le <strong>noircissement lié à la pollution atmosphérique</strong> et les <strong>mousses sur zones ombragées</strong>. Lorsque l'accès matériel passe par l'intérieur du logement, nous organisons le cheminement pour protéger vos sols et limiter toute gêne.</p>`,
      uniqueDeepDive: `<h3>Dépôts et mousses accumulés</h3>
<p>Les feuilles mortes, la terre et les débris sont retirés manuellement. Le balayage préalable dégage la surface pour évaluer l'état réel du support et repérer les zones où la mousse s'est enracinée dans les joints.</p>

<h3>Encrassement et taches tenaces</h3>
<p>Un produit adapté au matériau est appliqué : formulation spécifique pour pierre, bois ou composite. Le brossage mécanique ou manuel déloge les salissures incrustées. La haute pression contrôlée intervient sur les supports qui la tolèrent, en évitant les joints fragiles et les matériaux poreux.</p>

<h3>Retour de la mousse et prévention</h3>
<p>Un traitement anti-mousse est appliqué sur les zones exposées à l'humidité et à l'ombre. Les eaux de rinçage sont dirigées vers les points d'écoulement existants. Le mobilier et les plantes, déplacés ou bâchés en début d'intervention, retrouvent leur place une fois le séchage suffisant.</p>`,
      specificChallenges: [
        "Mousses tenaces sur dalles ombragées des pavillons du quartier Kergomard.",
        "Noircissement accéléré par la pollution de l'axe D920 sur les terrasses exposées.",
        "Bois composite des attiques récents nécessitant une pression contrôlée pour éviter les marques.",
        "Accès matériel parfois uniquement par l'intérieur du logement sur les toitures-terrasses.",
        "Joints poreux sur carrelages anciens demandant un traitement anti-mousse préventif.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les terrasses en bois composite des attiques autour de la Vache Noire, quelles précautions techniques appliquez-vous ?",
          answer: `<p>Le bois composite ne supporte pas les pressions élevées qui marquent la surface. Nous utilisons une buse à jet large et une pression réduite, combinées à un produit nettoyant sans chlore. Le brossage manuel complète le travail sur les zones encrassées sans altérer les lames.</p>`,
        },
        {
          question:
            "Comment éliminer les mousses et lichens sur les dalles de terrasse d'un pavillon dans le Bas d'Arcueil ?",
          answer: `<p>Le brossage mécanique décolle les mousses superficielles. Pour les lichens incrustés dans les joints, un produit biocide agit en profondeur avant rinçage. Un traitement préventif est ensuite appliqué pour ralentir la repousse, particulièrement efficace sur les zones ombragées par la végétation.</p>`,
        },
        {
          question:
            "Pour une terrasse en pierre ancienne dans le quartier Jules Ferry, dois-je privilégier haute pression ou nettoyage doux ?",
          answer: `<p>La pierre ancienne, souvent poreuse, risque de s'effriter sous une pression trop forte. Nous privilégions un nettoyage doux avec brossage et produit adapté. La haute pression n'intervient qu'à faible intensité sur les zones les plus résistantes, après test sur une partie discrète.</p>`,
        },
        {
          question:
            "Quelle est la meilleure période à Arcueil pour appliquer un traitement anti-mousse sur ma terrasse ?",
          answer: `<p>L'application idéale se situe en fin d'été ou début d'automne, avant les pluies prolongées. Le produit a le temps de pénétrer et d'agir avant la saison humide. Une seconde application au printemps prolonge la protection sur les terrasses particulièrement exposées à l'ombre.</p>`,
        },
      ],
      ctaOverride: "",
    },

    // 7) nettoyage-appartement-maison
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux plafonds, avec traitement adapté à chaque surface pour une restitution impeccable avant état des lieux ou après travaux.",
      whyUsBullets: [
        "Connaissance du parc locatif arcueillais : studios proches du RER, T3 familiaux, logements sociaux rénovés.",
        "Polyvalence sur tous types de sols et finitions : parquet, carrelage, lino, faïence, surfaces vitrées.",
        "Réactivité sous 24-48h et coordination directe avec agences ou bailleurs pour respecter vos délais de rotation.",
      ],
      uniqueIntro: `<p>Comment rendre un appartement prêt à la location quand le précédent occupant vient de partir et que le prochain arrive sous 48 heures ? Autour de la <strong>gare RER Arcueil-Cachan</strong>, la rotation locative impose des délais serrés. Les studios et T2 se libèrent, se relouent, et entre les deux, il faut effacer toute trace du passage précédent : poussière accumulée, traces sur les murs, résidus dans les placards.</p>

<p class="mt-4">Un logement correctement préparé évite les litiges lors de l'état des lieux sortant. Sur les <strong>parquets flottants des résidences récentes</strong> comme sur le <strong>carrelage des immeubles anciens</strong>, chaque surface demande un traitement spécifique. Les pièces d'eau concentrent souvent les points de friction : joints noircis, calcaire sur la robinetterie, traces dans les sanitaires.</p>

<p class="mt-4">Les <strong>agences de l'avenue Laplace</strong> et les <strong>bailleurs sociaux comme Opaly</strong> gèrent des volumes importants. Une intervention structurée — diagnostic initial, nettoyage méthodique, contrôle final — permet de respecter les créneaux imposés sans compromettre la qualité du rendu.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute intervention, nous évaluons l'état du logement : nature des sols, niveau d'encrassement, présence éventuelle de résidus de chantier. Cette étape permet d'adapter le matériel et les produits.</p>
<p class="mt-4">Les surfaces fragiles sont protégées si nécessaire. En cas de fin de chantier, les gravats et déchets sont évacués avant le nettoyage proprement dit.</p>

<h3>Nettoyage complet par zones</h3>
<p>Le travail progresse du haut vers le bas : dépoussiérage des plafonds et murs, puis traitement des menuiseries, interrupteurs et radiateurs. Les sols sont aspirés puis lavés selon leur nature.</p>
<p class="mt-4">Les pièces d'eau reçoivent une attention particulière : détartrage des sanitaires, nettoyage de la faïence et des joints, remise en état des plans de travail en cuisine.</p>

<h3>Finitions et contrôle</h3>
<p>Les placards sont nettoyés intérieurement. Les vitres côté intérieur sont traitées. Un contrôle visuel systématique permet de vérifier chaque point avant la remise des clés ou le passage de l'agence.</p>`,
      specificChallenges: [
        "Délais courts entre deux locataires dans les zones à forte rotation près du RER.",
        "Sols variés selon l'âge du bâti : parquet flottant, lino, carrelage ancien à traiter différemment.",
        "Accès contraints : digicodes, badges Vigik, coordination avec gardiens dans les grands ensembles.",
        "Résidus de travaux fréquents dans les logements rénovés avant relocation.",
        "Pièces d'eau souvent encrassées : joints, calcaire, traces persistantes sur sanitaires.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un ménage de fin de bail d'un studio proche de la gare RER Arcueil-Cachan, quelles tâches techniques sont incluses ?",
          answer: `<p>L'intervention couvre le dépoussiérage complet, le lavage des sols adaptés au revêtement, le nettoyage approfondi des sanitaires et de la cuisine, le traitement des vitres intérieures et des placards. Les traces sur les murs et les interrupteurs sont également traitées pour un rendu conforme aux attentes d'un état des lieux.</p>`,
        },
        {
          question:
            "Comment coordonnez-vous le nettoyage avant état des lieux avec les agences avenue Laplace ?",
          answer: `<p>Nous échangeons directement avec l'agence pour caler le créneau d'intervention selon la date de l'état des lieux. Les accès sont transmis en amont. Un compte-rendu peut être fourni si demandé. Cette organisation évite les allers-retours et garantit que le logement soit prêt au moment convenu.</p>`,
        },
        {
          question:
            "Quel niveau de propreté garantissez-vous pour un nettoyage complet avant remise des clés à Arcueil ?",
          answer: `<p>L'objectif est un logement visuellement propre et fonctionnel : sols sans traces, sanitaires détartrés, cuisine dégraissée, vitres nettes. Si un point ne convient pas lors du contrôle, nous intervenons à nouveau sur la zone concernée sans frais supplémentaires dans un délai raisonnable.</p>`,
        },
        {
          question:
            "Si l'immeuble dispose d'un digicode ou d'un gardien comme au Chaperon Vert, quelles informations devez-vous recevoir avant l'intervention ?",
          answer: `<p>Nous avons besoin du code d'accès, des éventuels badges ou clés, et des coordonnées du gardien si une remise de clés est prévue. Ces éléments sont confirmés la veille de l'intervention. En cas de difficulté d'accès, nous vous contactons immédiatement pour éviter tout retard.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;