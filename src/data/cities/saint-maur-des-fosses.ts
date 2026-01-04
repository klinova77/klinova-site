import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Maur-des-Fossés",
  slug: "saint-maur-des-fosses",
  postalCodes: ["94100", "94210"], // Indispensable pour capter La Varenne

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // OPTIMISATION SEO : Plus court, plus incitatif au clic (CTR), mots-clés placés au début.
  customDescription:
    "Expert du nettoyage à Saint-Maur-des-Fossés (94). Entretien de standing pour pavillons et copropriétés : moquettes, terrasses, parkings et canapés. Protocoles spécialisés meulières et bois exotique. Devis gratuit sous 48h.",

  // OPTIMISATION CONVERSION : Mise en avant de l'autorité et de la rassurance immédiate.
  hubIntro: `<p>Saint-Maur-des-Fossés exige un entretien à la hauteur de son patrimoine immobilier. Dans cette "ville-jardin", la propreté est un marqueur de standing. <strong>Klinova est le partenaire de confiance des propriétaires exigeants, des syndics de La Varenne et des gestionnaires immobiliers</strong>. Nous comprenons que votre bien n'est pas juste un bâtiment, mais un investissement patrimonial.</p>
<p>Notre expertise locale est technique : nous savons que le <strong>microclimat de la boucle de la Marne</strong> accélère l'apparition de mousses, et que les façades en meulière demandent une délicatesse absolue. Nos équipes naviguent quotidiennement entre les zones bleues et les ponts saturés pour garantir une ponctualité sans faille.</p>
<ul>
  <li><strong>Expertise matériaux nobles</strong> : Nettoyage haute précision des pierres meulières (joints fragiles), rénovation des terrasses en Ipe/Teck et traitement des verrières d'atelier.</li>
  <li><strong>Logistique locale maîtrisée</strong> : Planification tactique pour éviter les bouchons des ponts de Créteil/Chennevières, véhicules compacts pour les impasses privées et respect total de la tranquillité résidentielle.</li>
  <li><strong>Lutte contre l'encrassement biologique</strong> : Stratégies curatives et préventives contre les lichens fluviaux et les pollens collants printaniers qui étouffent vos extérieurs.</li>
</ul>`,

  citySpecificChallenges: [
    "Hygrométrie élevée liée à la boucle de la Marne : prolifération rapide de dépôts verts sur les expositions Nord/Est",
    "Pollution végétale intense : pollens gluants des tilleuls au printemps et saturation des évacuations par les feuilles en automne",
    "Accessibilité contrainte (Presqu'île) : nécessité d'une logistique anticipant les flux pendulaires des ponts",
    "Fragilité du bâti ancien : interdiction de la haute pression agressive sur les joints de meulière et les parements historiques",
  ],

  districts: [
    "Le Parc Saint-Maur",
    "La Varenne Saint-Hilaire (94210)",
    "Adamville",
    "Champignol",
    "Vieux Saint-Maur",
    "La Pie",
    "Les Mûriers",
    "Saint-Maur–Créteil",
  ],

nearbyCities: [
  "joinville-le-pont",
  "creteil",
  "maisons-alfort",
  "nogent-sur-marne",
  "charenton-le-pont",
  "fontenay-sous-bois",
],


  landmarks: [
    "Mairie de Saint-Maur-des-Fossés",
    "Gare Saint-Maur – Créteil (RER A)",
    "Gare Le Parc de Saint-Maur (RER A)",
    "Gare Champigny (RER A)",
    "Gare La Varenne – Chennevières (RER A)",
    "Lycée Marcelin Berthelot",
    "Place des Marronniers (Marché de La Varenne)", // Précision utile
    "Place d'Armes / Église Saint-Nicolas",
    "Promenade des Bords de Marne",
  ],

  faq: [
    {
      question:
        "Intervenez-vous dans toute la presqu'île malgré les difficultés de circulation ?",
      answer: `<p><strong>Absolument. La logistique est notre métier.</strong> Nous savons que traverser le pont de Créteil à 8h30 est impossible. C'est pourquoi nos plannings sont optimisés : interventions décalées, techniciens sectorisés par quartier (Varenne vs Parc), et connaissance parfaite des raccourcis. Votre localisation n'est jamais un frein, c'est notre terrain de jeu.</p>`,
    },
    {
      question:
        "Le devis est-il gratuit pour une maison à La Varenne ou au Parc ?",
      answer: `<p><strong>Oui, déplacement et chiffrage sont 100% offerts.</strong> Que vous soyez avenue du Bac ou boulevard de Créteil, un expert se déplace pour analyser la nature de vos supports (pierre, bois, textile). Ce diagnostic technique est indispensable pour garantir un prix ferme et un résultat parfait, sans surprise.</p>`,
    },
    {
      question:
        "Comment gérez-vous le stationnement (Zones Bleues) ?",
      answer: `<p><strong>Nous sommes autonomes.</strong> Nos véhicules sont équipés pour des interventions rapides. Pour les chantiers longs (nettoyage complet de terrasse, shampouinage moquette immeuble), nous gérons les autorisations ou nous organisons en "dépose minute" pour le matériel lourd. Vous n'avez pas à vous soucier de notre logistique.</p>`,
    },
    {
      question:
        "Vos produits sont-ils sûrs pour mes pierres anciennes (Meulière) ?",
      answer: `<p><strong>C'est notre spécialité.</strong> Saint-Maur regorge de meulières magnifiques mais fragiles. Nous proscrivons le Kärcher violent. Nous utilisons la basse pression, la vapeur ou le nettoyage chimique doux (biodégradable) pour décoller la saleté sans jamais entamer le joint à la chaux ou la patine de la pierre.</p>`,
    },
  ],

  testimonial: {
    text: "Nous pensions devoir changer la terrasse en Ipe de notre pavillon à La Varenne qui était devenue grise et glissante. L'équipe a réussi à lui redonner sa couleur teck d'origine sans abîmer nos plantations. Un travail d'orfèvre.",
    author: "Jean-Marc L.",
    role: "Propriétaire",
    building: "Pavillon 94210",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Redonnez le standing d'origine aux parties communes de votre copropriété saint-maurienne. Un nettoyage technique qui élimine pollens incrustés et traces d'humidité pour un hall impeccable.",

      whyUsBullets: [
        "Expertise 'Presqu'île' : Nous savons traiter les taches spécifiques liées aux pollens collants des platanes et à l'humidité des bords de Marne.",
        "Séchage optimisé : Utilisation de turbines industrielles pour contrer l'hygrométrie locale et éviter les odeurs de 'chien mouillé'.",
        "Discrétion assurée : Interventions silencieuses et rapides, respectant la tranquillité des résidences de standing du Parc et de La Varenne.",
      ],

      uniqueIntro: `<p>À Saint-Maur, la moquette des parties communes n'est pas seulement sale, elle est "contaminée" par l'environnement extérieur. Au printemps, ce sont les pollens gras des tilleuls ; en automne, la boue des feuilles mortes ; et toute l'année, une humidité latente qui fixe les odeurs. Résultat : <strong>votre entrée perd de sa superbe et votre immeuble semble moins bien entretenu qu'il ne l'est réellement.</strong></p>
<p class="mt-4">Pour les copropriétaires soucieux de leur patrimoine, changer la moquette tous les 5 ans est un gouffre financier. La solution n'est pas le remplacement, mais la <strong>rénovation par injection-extraction</strong>. En profondeur, nous retirons non seulement la tache visible, mais aussi le "liant" (sucre des sèves, graisses) qui retient la saleté.</p>
<p class="mt-4"><strong>Le résultat ?</strong> Une fibre redressée, des couleurs ravivées et une odeur de propre qui valorise immédiatement l'entrée de votre résidence, que ce soit un petit collectif d'Adamville ou une résidence de luxe avenue Foch.</p>`,

      uniqueDeepDive: `<h3>1. Audit des fibres et des contraintes</h3>
<p>Laine vierge dans les immeubles anciens ou synthétique grand passage ? Le technicien adapte la température et le pH. Il repère les "chemins de marche" usés et les zones de stagnation d'humidité (souvent au RDC). À Saint-Maur, nous vérifions systématiquement la présence de tanins (taches brunes) remontés par l'humidité du sous-sol.</p>

<h3>2. La puissance industrielle au service du détail</h3>
<p class="mt-4">Nos machines injectent une solution active à haute température pour dissoudre les graisses et pollens, puis l'aspirent quasi-instantanément. Ce cycle ultra-rapide est crucial : <strong>il empêche de détremper la sous-couche</strong>, évitant ainsi les moisissures et le décollement, risques majeurs dans notre zone humide.</p>

<h3>3. Finitions "Gant Blanc"</h3>
<p class="mt-4">Nous ne laissons rien au hasard : les plinthes sont essuyées, les seuils de porte détachés manuellement. Nous laissons souvent une protection temporaire sur les zones de passage intense le temps du séchage complet (8 à 12h). Un rapport photo est envoyé au Conseil Syndical pour valider la qualité de la prestation.</p>`,

      specificChallenges: [
        "Pollens printaniers gluants : Une spécificité locale qui demande une chimie dégraissante particulière avant le shampouinage.",
        "Séchage en milieu humide : La proximité de la Marne impose une puissance d'extraction supérieure pour garantir un sol sec le soir même.",
        "Taches tanniques : Les feuilles mortes automnales laissent des marques brunes tenaces que seul un traitement acide ciblé peut effacer.",
      ],
      
      // ... (FAQ Additions gardées telles quelles, elles sont bonnes)
      faqAdditions: [
         // ... (Garder l'existant)
         {
          question:
            "Les moquettes des immeubles proches de la Marne nécessitent-elles un entretien particulier ?",
          answer:
            `<p>Oui, l'humidité constante de la presqu'île ralentit le séchage et favorise le développement d'odeurs de moisi si l'extraction n'est pas suffisamment puissante. <strong>Nous adaptons notre protocole</strong> : extraction maximale, aération recommandée sur 12 heures, et conseillons un nettoyage annuel pour les copropriétés riveraines. Les immeubles des bords de Marne, du Vieux Saint-Maur ou de La Pie bénéficient particulièrement de cette attention renforcée.</p>`,
        },
        {
          question:
            "Intervenez-vous dans les pavillons convertis en petites copropriétés ?",
          answer:
            `<p>Absolument. Nous travaillons autant dans les immeubles R+3/R+4 de La Varenne que dans les anciennes meulières transformées en 4 à 8 logements. Le diagnostic et la méthode restent identiques, seule la surface varie. Nos véhicules compacts s'adaptent aux rues résidentielles bordées d'arbres et aux branches basses qui caractérisent le tissu urbain saint-maurien.</p>`,
        },
        {
          question: "Les pollens du printemps abîment-ils définitivement les moquettes ?",
          answer:
            `<p>Les pollens collants des platanes et tilleuls s'incrustent rapidement dans les fibres et peuvent former des taches jaunâtres permanentes s'ils ne sont pas traités dans les premiers mois. <strong>Un nettoyage professionnel au printemps</strong>, juste après la période de pollinisation (avril-mai), extrait ces particules avant qu'elles ne s'oxydent et ne marquent définitivement les fibres. C'est la période idéale pour les copropriétés saint-mauriennes.</p>`,
        },
        {
          question: "Comment organisez-vous l'accès malgré les embouteillages aux ponts ?",
          answer:
            `<p>Nous planifions chaque intervention en dehors des heures de pointe (avant 8h30 ou après 10h le matin, entre 14h et 16h l'après-midi) pour éviter les goulets d'étranglement aux ponts de Créteil et Chennevières. Nos techniciens repèrent les zones de stationnement temporaire près des quatre gares RER A et coordonnent avec le syndic pour valider l'horaire optimal selon la configuration de l'immeuble.</p>`,
        },
         
      ],
      ctaOverride: "Demander un devis moquette copropriété",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Éliminez la boue, les feuilles et la poussière noire de vos parkings. Un nettoyage mécanisé pour sécuriser les sols et valoriser votre copropriété, sans bloquer les résidents.",

      whyUsBullets: [
        "Gestion des rotations : Nous savons orchestrer le nettoyage par demi-niveaux pour ne jamais priver les résidents de stationnement.",
        "Lutte anti-mousse souterraine : Traitement spécifique des rampes d'accès et zones humides fréquentes dans les sous-sols saint-mauriens.",
        "Nettoyage des évacuations : Débouchage systématique des regards souvent saturés par les feuilles des rues arborées.",
      ],

      uniqueIntro: `<p>Un parking mal entretenu est le premier signal de dévalorisation d'un immeuble. À Saint-Maur, les parkings souffrent de deux maux : l'apport massif de <strong>débris végétaux</strong> (feuilles, bogues) collés aux pneus, et le développement de <strong>mousses glissantes</strong> dû à l'humidité des nappes phréatiques proches. Ce n'est pas juste sale, c'est dangereux (risque de chute) et anxiogène.</p>
<p class="mt-4">Oubliez le simple coup de balai du gardien qui ne fait que déplacer la poussière. Klinova déploie de véritables <strong>autolaveuses industrielles</strong>. Nous décrassons, nous dégraissons les taches d'huile moteur, et nous aspirons les boues liquides.</p>
<p class="mt-4"><strong>L'impact est immédiat :</strong> un sol clair, des marquages visibles, une atmosphère saine et une plus-value maintenue pour chaque appartement. C'est une intervention technique qui redonne le sourire aux copropriétaires lors de l'assemblée générale.</p>`,

      uniqueDeepDive: `<h3>1. Préparation et Communication (La clé du succès)</h3>
<p>Le nettoyage technique est inutile si les voitures sont là. Notre force, c'est l'organisation. Nous définissons avec le syndic un plan de "Chaises Musicales" : zone A le matin, zone B l'après-midi. Nous fournissons les affichages pour le hall. Résultat : 100% de la surface est traitée.</p>

<h3>2. Le process "Double Action"</h3>
<p class="mt-4">D'abord, un balayage-aspiration pour retirer les solides (feuilles, mégots, gravats). Ensuite, le lavage haute pression rotatif couplé à une aspiration. Nous insistons particulièrement sur les <strong>rampes d'accès</strong> (souvent verglacées par la mousse) et les angles morts où s'accumulent les déchets.</p>

<h3>3. Finitions techniques</h3>
<p class="mt-4">Nous ne partons pas avant d'avoir curé les caniveaux et siphons de sol. À Saint-Maur, ces derniers sont souvent obstrués par une "purée" de feuilles décomposées qui risque de provoquer des inondations lors des orages. Nous traitons aussi les taches d'huile rebelles avec des solvants spécifiques.</p>`,
      
      specificChallenges: [
        "Glissance des rampes : L'humidité riveraine rend le béton lisse extrêmement glissant. Nous appliquons des traitements antidérapants si nécessaire.",
        "Saturation des siphons : Les feuilles des platanes finissent toujours dans les regards. Notre curage prévient les dégâts des eaux.",
        "Logistique nominative : Respect absolu des places privatives grâce à une communication rigoureuse en amont.",
      ],

     faqAdditions: [
        {
          question: "Pourquoi les parkings proches des berges développent-ils autant de mousses ?",
          answer:
            `<p>L'humidité constante de la Marne génère un taux d'humidité ambiante élevé dans les parkings souterrains ou en rez-de-jardin. Les sols en béton poreux retiennent cette humidité et favorisent le développement rapide de mousses et lichens, surtout dans les zones mal ventilées ou peu exposées à la lumière. <strong>Nous appliquons un traitement anti-mousse spécifique</strong> avant le nettoyage pour éliminer durablement ces dépôts verts glissants.</p>`,
        },
        {
          question: "Comment organisez-vous l'intervention sans que je perde mon emplacement attitré ?",
          answer:
            `<p>Nous travaillons par rotation : moitié A le matin, moitié B l'après-midi, ou étage par étage selon la configuration. Vous stationnez temporairement dans la zone non traitée ou sur un emplacement visiteur pendant 2 à 3 heures, puis vous récupérez votre place dès le séchage terminé. Le syndic informe les copropriétaires 72h à l'avance avec un plan précis indiquant les zones et horaires. Cette organisation maintient l'accès au parking en permanence.</p>`,
        },
        {
          question: "Les feuilles mortes des platanes peuvent-elles obstruer les siphons d'évacuation ?",
          answer:
            `<p>Oui, c'est un problème fréquent à Saint-Maur en automne. Les feuilles mortes transportées par les pneus se décomposent et forment une boue qui obstrue progressivement les siphons et caniveaux. <strong>Nous effectuons systématiquement un dégagement manuel des évacuations</strong> avant le lavage pour garantir que l'eau s'évacue correctement. Cette vérification préalable évite toute stagnation ou refoulement pendant l'intervention.</p>`,
        },
        {
          question: "Faut-il prévoir un nettoyage plus fréquent pour les parkings saint-mauriens ?",
          answer:
            `<p>Cela dépend de l'exposition. Les parkings proches de la Marne ou bordés d'arbres anciens nécessitent souvent un décrassage annuel, voire semestriel pour les zones très humides ou exposées aux chutes massives de feuilles. Les parkings des quartiers plus secs comme Champignol peuvent espacer les interventions tous les 18 mois. Nous adaptons nos recommandations de fréquence selon la configuration de votre copropriété et les observations du premier passage.</p>`,
        },
      ],

      ctaOverride: "Obtenir un chiffrage nettoyage parking",
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Votre terrasse est une pièce à vivre : ne la laissez pas griser. Nettoyage expert des bois exotiques (Ipe/Teck) et pierres naturelles, respectueux des jardins et façades.",

      whyUsBullets: [
        "Spécialiste Bois Exotique : Rénovation par dégriseur + saturateur (option) pour retrouver la teinte 'miel' de votre Ipe ou Teck.",
        "Douceur sur la Pierre : Nettoyage vapeur ou basse pression pour ne jamais agresser les joints de vos meulières ou dalles anciennes.",
        "Protection Végétale : Produits bio-sourcés garantis sans danger pour vos hortensias, pelouses et plantations en contrebas.",
      ],

      uniqueIntro: `<p>Avoir une terrasse ou un balcon à Saint-Maur est un privilège. Mais entre la pollution urbaine, les lichens verts qui s'installent l'hiver et le grisaillement des bois sous les UV, cet espace devient vite une zone négligée. <strong>Votre terrasse en Ipe ressemble à du bois de palette ? Vos dalles en pierre sont devenues noires et glissantes ?</strong></p>
<p class="mt-4">Attention aux fausses bonnes idées : passer un nettoyeur haute pression standard sur une terrasse en bois peut <strong>détruire la fibre</strong> irrémédiablement ("effet peluche"). Sur une pierre tendre ou une meulière, cela fait sauter les joints.</p>
<p class="mt-4">Chez Klinova, nous sommes des "rénovateurs de surface". Nous utilisons la chimie douce et l'action mécanique contrôlée. Nous rendons à votre extérieur sa fonction première : être un lieu de détente propre, sain et esthétique, prêt pour les beaux jours.</p>`,

      uniqueDeepDive: `<h3>1. Le diagnostic matériau</h3>
<p>On ne nettoie pas du Travertin comme du Béton lavé. Le technicien identifie la pierre ou l'essence de bois. À Saint-Maur, nous rencontrons beaucoup de terrasses anciennes sur étanchéité fragile : nous adaptons la pression pour ne créer aucune infiltration.</p>

<h3>2. Le protocole "Rénovation Bois" (Spécialité locale)</h3>
<p class="mt-4">Pour les bois grisés : 1. Application d'un dégriseur gélifié (qui ne coule pas). 2. Brossage mécanique avec une brosse spéciale (poils carbures) pour désincruster sans rayer. 3. Rinçage abondant à basse pression. 4. (Optionnel) Application d'huile saturatrice pour fixer la couleur.</p>

<h3>3. Le protocole "Pierre & Meulière"</h3>
<p class="mt-4">Pour les minéraux : Application d'un produit algicide et fongicide à action lente ou rapide selon l'état. Nettoyage à la rotabuse basse pression ou à la vapeur sèche (150°C) pour les supports les plus fragiles. Le résultat est spectaculaire : la pierre retrouve sa luminosité sans être "blanchie" artificiellement.</p>`,

      specificChallenges: [
        "Le 'Verdissement' rapide : L'exposition à l'humidité de la Marne impose l'utilisation d'algicides à rémanence (action longue durée).",
        "Sensibilité des Ipe/Teck : Ces bois coûteux demandent un savoir-faire manuel pour ne pas lever la fibre.",
        "Protection des baies vitrées : Nous protégeons systématiquement vos menuiseries avant toute pulvérisation.",
      ],

       faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager ma terrasse en Ipe ou mes murets en meulière ?",
          answer:
            `<p>Non, si les paramètres sont correctement ajustés. Pour les terrasses en bois exotique, nous utilisons une pression très faible (30-50 bars) après application d'un dégriseur, et brossons manuellement dans le sens des fibres. Pour les meulières à joints friables, la pression est limitée à 50-80 bars maximum avec un jet large. <strong>Nous effectuons toujours un test sur une zone discrète</strong> avant de traiter l'ensemble, protocole indispensable pour les supports nobles typiques de Saint-Maur.</p>`,
        },
        {
          question: "Pourquoi ma terrasse côté jardin développe-t-elle autant de mousses ?",
          answer:
            `<p>L'humidité constante de la Marne, l'ombre portée des arbres anciens et l'exposition nord créent un environnement idéal pour les mousses et lichens. Les terrasses situées près des berges ou dans les propriétés boisées du Parc Saint-Maur sont particulièrement exposées. Nous appliquons un anti-mousse curatif puis préventif qui ralentit la recolonisation pendant 12 à 18 mois. Un nettoyage annuel maintient la propreté et la sécurité des surfaces.</p>`,
        },
        {
          question: "Les produits utilisés présentent-ils un risque pour mes plantations et mon jardin paysager ?",
          answer:
            `<p>Non, nous utilisons des produits biodégradables sans danger pour la végétation après dilution et rinçage. L'eau de rinçage est dirigée vers les zones non plantées ou les évacuations. Les dégriseurs pour bois exotique et anti-mousses sont formulés pour un usage résidentiel et ne nuisent pas aux arbres, pelouses ou massifs environnants. Cette précaution est essentielle dans les jardins soignés typiques de la presqu'île.</p>`,
        },
        {
          question: "Ma terrasse en Teck peut-elle retrouver sa teinte dorée d'origine ?",
          answer:
            `<p>Oui, le dégriseur professionnel élimine la couche grise oxydée en surface et révèle la teinte naturelle du bois. Le résultat est immédiatement visible après traitement et séchage. Pour maintenir cette teinte dorée durablement, nous recommandons l'application d'une huile de protection (saturateur) 48h après le nettoyage. Sans cette protection, le bois grisaillera de nouveau sous l'effet des UV et de l'humidité en 6 à 12 mois. Cette finition est courante dans les propriétés de standing saint-mauriennes.</p>`,
        },
      ],
      ctaOverride: "Devis rénovation terrasse & balcon",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Urgence sanitaire : Décontamination intégrale de balcons squattés par les pigeons: nettoyage, désinfection, évacuation sécurisée.",

      whyUsBullets: [
        "Sécurité Biologique : Techniciens équipés (combinaisons, masques FFP2) pour manipuler des déchets classés 'dangereux'.",
        "Sauvetage des supports : L'acidité des fientes ronge la pierre et le métal. Nous stoppons la corrosion immédiatement.",
        "Discrétion absolue : Intervention rapide, sans alerter tout le voisinage, avec évacuation des déchets en sacs hermétiques.",
      ],

      uniqueIntro: `<p>Ce n'est pas juste "sale", c'est <strong>dangereux</strong>. Les fientes de pigeons, très fréquentes à Saint-Maur à cause des nombreux arbres et points d'eau, sont un vecteur de maladies graves (salmonellose, chlamydiose) et d'allergènes puissants. Une fois sèches, elles deviennent poussière et entrent dans vos poumons dès que vous ouvrez la fenêtre.</p>
<p class="mt-4"><strong>N'essayez surtout pas de nettoyer cela vous-même.</strong> Un coup de balai ou d'aspirateur ne fait que disperser les bactéries dans l'air de votre logement. De plus, l'acidité urique des fientes attaque irréversiblement les gardes-corps en fer forgé et les pierres de façade.</p>
<p class="mt-4">Klinova intervient en mode "Expert Propreté". Nous récupérons votre balcon. Nous grattons, nous lavons, nous désinfectons chimiquement. Vous retrouvez une surface saine sur laquelle vous pouvez à nouveau marcher sans crainte.</p>`,

      uniqueDeepDive: `<h3>1. Confinement et Protection (Priorité Santé)</h3>
<p>Avant de toucher à quoi que ce soit, nous protégeons votre intérieur. Le technicien s'équipe comme pour un chantier amiante : combinaison, gants, masque respiratoire. Nous humidifions la zone pour empêcher les poussières de voler.</p>

<h3>2. Curage et Évacuation</h3>
<p class="mt-4">Nous retirons manuellement le "gros" (fientes, nids, cadavres parfois). Tout est mis en double ensachage étanche pour être évacué vers une filière de déchets spécialisée. Rien n'est jeté dans votre poubelle domestique.</p>

<h3>3. Désinfection et Remise à neuf</h3>
<p class="mt-4">Une fois le support nu, nous appliquons un bactéricide/fongicide puissant aux normes hospitalières. Nous nettoyons ensuite le sol et les garde-corps pour retirer les traces acides. Si nécessaire, nous pouvons vous orienter vers des solutions de pics ou filets pour éviter la récidive.</p>`,

      specificChallenges: [
        "Risque inhalatoire : La poussière de fiente sèche est toxique. L'humidification contrôlée est obligatoire.",
        "Corrosion acide : Les fientes brûlent les vernis et la pierre. Une intervention rapide sauve vos matériaux.",
        "Accès difficile : Nous intervenons même sur des balcons encombrés ou difficiles d'accès via les parties communes.",
      ],

       faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un risque sanitaire réel pour ma famille ?",
          answer:
            `<p>Oui, les fientes contiennent des bactéries pathogènes (salmonelles), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer infections respiratoires graves, mycoses pulmonaires ou troubles gastro-intestinaux. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées, surtout pour les enfants, personnes âgées ou immunodéprimées. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition. <strong>Seul un protocole professionnel</strong> avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires.</p>`,
        },
        {
          question: "Le nettoyage peut-il endommager ma terrasse en Teck ou mes murets en meulière ?",
          answer:
            `<p>Non, si le protocole est correctement adapté. Nous ajustons la pression de rinçage selon le support : 30-50 bars maximum pour les bois exotiques, 50-80 bars pour les meulières à joints friables, méthode manuelle pour les pierres naturelles très sensibles. Les produits désinfectants sont sélectionnés pour leur compatibilité avec les supports nobles (pH neutre, pas d'agents chlorés agressifs). Cette précaution technique est indispensable pour préserver la valeur patrimoniale des propriétés saint-mauriennes.</p>`,
        },
        {
          question: "Les fientes ont-elles déjà causé des dégâts irréversibles sur ma terrasse ?",
          answer:
            `<p>Cela dépend de l'ancienneté de la contamination. Sur les terrasses en bois exotique, l'acidité des fientes érode la finition et crée des taches brunâtres qui peuvent pénétrer profondément dans les fibres. Sur les meulières, elle déchausse les joints à la chaux et provoque une érosion superficielle de la pierre. Sur les garde-corps métalliques, elle accélère l'oxydation et fragilise la structure. Une intervention rapide limite les dégâts. Les contaminations anciennes (plusieurs mois) peuvent laisser des marques résiduelles, mais le nettoyage professionnel stoppe la dégradation active et préserve le reste du support.</p>`,
        },
        {
          question: "Comment éviter que les pigeons ne reviennent après le nettoyage ?",
          answer:
            `<p>Nous proposons la pose de solutions anti-pigeons adaptées à l'architecture résidentielle de Saint-Maur : pics discrets sur les corniches et avancées de toit, filets transparents pour les loggias, répulsifs visuels pour les garde-corps. Ces dispositifs préservent l'esthétique des pavillons de prestige tout en empêchant durablement la nidification. L'inspection régulière des points d'accès et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive et de nouveaux dégâts sur les supports nobles.</p>`,
        },
      ],
      ctaOverride: "Demander une désinfection urgente",
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Nettoyage haute performance à domicile : sauvez vos canapés et matelas des taches, des acariens et des odeurs. Une injection-extraction qui purifie votre intérieur.",

      whyUsBullets: [
        "Anti-Acariens Naturel : La chaleur de notre injection (60°C+) élimine les allergènes sans chimie lourde.",
        "Détachage Expert : Vin, café, feutre, traces d'animaux... Nous avons les solvants spécifiques pour chaque catastrophe.",
        "Confort immédiat : Grâce à notre aspiration surpuissante, vos meubles sont secs et réutilisables en quelques heures.",
      ],

      uniqueIntro: `<p>Votre canapé est le centre de votre vie de famille à Saint-Maur. Il voit passer les enfants, les amis, le chien qui rentre du jardin... et les accidents du quotidien. Au-delà des taches visibles qui font "négligé", vos tissus emmagasinent des kilos de poussière, de peaux mortes et d'acariens, surtout avec l'humidité ambiante de notre région.</p>
<p class="mt-4">Pourtant, jeter un canapé de qualité ou un tapis d'Orient est un gâchis. <strong>Ne changez pas, rénovez !</strong> Pour une fraction du prix du neuf, nous offrons une seconde jeunesse à votre mobilier.</p>
<p class="mt-4">Notre technique ne se contente pas de "laver en surface". Nous injectons une solution nettoyante au cœur de la fibre et l'extrayons immédiatement. L'eau ressort noire, preuve de l'efficacité. <strong>Les couleurs claquent à nouveau, le volume de l'assise remonte, et l'odeur de frais assainit toute la pièce.</strong></p>`,

      uniqueDeepDive: `<h3>1. Analyse des fibres</h3>
<p>Coton, lin, microfibre, velours ou soie ? Chaque tissu a sa tolérance. Nous testons la stabilité des couleurs. À Saint-Maur, nous traitons souvent des pièces de mobilier haut de gamme ou anciens : nous savons adapter notre puissance pour ne pas fragiliser les trames.</p>

<h3>2. Le Shampooing en profondeur</h3>
<p class="mt-4">Nous appliquons d'abord des détachants ciblés sur les zones critiques (accoudoirs, têtières). Ensuite, la machine entre en action. C'est un lavage "à cœur". Nous insistons jusqu'à ce que l'eau extraite soit claire. C'est la seule garantie d'une hygiène totale.</p>

<h3>3. Séchage et Finition</h3>
<p class="mt-4">L'ennemi du textile, c'est l'humidité stagnante. Notre matériel industriel possède une dépression d'air bien supérieure aux machines de location. Nous aspirons 90% de l'eau. En aérant bien, votre canapé est sec le soir même, sans risque de moisissure.</p>`,

      specificChallenges: [
        "Allergies aux acariens : L'humidité locale favorise leur développement. Notre traitement thermique est la solution radicale.",
'Taches organiques : Urine de chat, transpiration, nourriture... Nous utilisons des enzymes pour \'manger\' l\'odeur à la source.',
        "Tissus délicats : Respect total des velours et lins fragiles grâce à des buses d'injection spécifiques.",
      ],

       faqAdditions: [
        {
          question: "Le nettoyage élimine-t-il les acariens qui prolifèrent dans l'humidité de Saint-Maur ?",
          answer:
            `<p>Oui, l'injection-extraction à eau chaude (65-70°C) tue les acariens adultes, larves et œufs par choc thermique. Cette température est particulièrement importante à Saint-Maur où l'humidité de la Marne favorise leur prolifération rapide. L'aspiration puissante retire ensuite les acariens morts et leurs déjections allergisantes. Les familles constatent généralement une amélioration des symptômes (rhinites, éternuements, irritations) sous 48 à 72h. Pour maintenir ce résultat dans l'environnement humide de la presqu'île, nous recommandons un nettoyage annuel.</p>`,
        },
        {
          question: "Pouvez-vous traiter les taches de boue et les traces de pattes d'animaux sur mon tapis ?",
          answer:
            `<p>Oui, nous utilisons un détachant adapté aux salissures organiques et minérales. La boue transportée depuis les jardins ou les promenades en bords de Marne est d'abord brossée à sec une fois sèche, puis traitée avec un produit spécifique avant l'injection-extraction. Les traces de pattes grasses reçoivent un pré-traitement dégraissant. L'eau chaude et l'aspiration puissante éliminent ensuite les résidus incrustés dans les fibres. Les taches récentes partent complètement, les anciennes s'atténuent fortement.</p>`,
        },
        {
          question: "Combien de temps avant de pouvoir réutiliser mon canapé dans un environnement humide ?",
          answer:
            `<p>Le séchage complet intervient sous 6 à 10 heures à Saint-Maur, durée supérieure aux zones urbaines sèches en raison de l'humidité ambiante de la Marne. Vous pouvez vous asseoir légèrement sur les accoudoirs dès 3h, mais évitez de vous installer complètement avant séchage total pour ne pas écraser les fibres humides. Aérez la pièce en ouvrant les fenêtres, orientez un ventilateur vers le canapé. Pour un usage en soirée, planifiez l'intervention tôt le matin.</p>`,
        },
        {
          question: "Dois-je ranger mes meubles de jardin avant votre intervention ?",
          answer:
            `<p>Non, concentrez-vous uniquement sur les textiles à traiter : retirez les coussins amovibles du canapé, dégagez les objets posés sur le tapis (magazines, jouets, plantes en pot), et si vous avez des animaux, placez-les dans une autre pièce ou le jardin pendant l'intervention. Les meubles légers seront déplacés par le technicien si nécessaire. Cette simplicité de préparation est appréciée dans les pavillons saint-mauriens où les espaces de vie s'ouvrent souvent sur les jardins et vérandas.</p>`,
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
