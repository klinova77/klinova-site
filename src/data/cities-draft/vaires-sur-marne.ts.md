import type { City } from "~/types/geo";  gemini

const city: City = {
  name: "Vaires-sur-Marne",
  slug: "vaires-sur-marne",
  postalCodes: ["77360"],

  customDescription:
    "Située entre le canal de Chelles et la Marne, Vaires-sur-Marne combine une forte hygrométrie et un trafic dense lié à la gare et à la D934. L’entretien des moquettes de copropriété, le dégraissage des parkings et le nettoyage des balcons exposés aux mousses sont des demandes constantes pour préserver le bâti face à ces contraintes locales.",

  hubIntro: `<p>Pour les syndics de copropriété et les gestionnaires de patrimoine à Vaires-sur-Marne, la préservation des immeubles face à l\'humidité des bords de Marne et à l\'activité urbaine est un enjeu technique quotidien. Klinova se positionne comme votre partenaire de maintenance immobilière, assurant une gestion globale de la propreté, des parkings souterrains aux parties communes, en passant par les extérieurs privatifs.</p>
<p class="mt-4">Nous intervenons avec une rigueur opérationnelle adaptée aux spécificités locales, garantissant un reporting précis après chaque prestation. Notre structure nous permet de répondre aux exigences des conseils syndicaux avec des solutions éprouvées pour l\'hygiène et la rénovation des surfaces.</p>
<ul>
  <li>Mise en place de protocoles stricts contre les encrassements spécifiques (mousses, pollution routière).</li>
  <li>Gestion sécurisée des clés et badges Vigik pour une autonomie totale d\'intervention.</li>
  <li>Réactivité immédiate sur le secteur pour les remises en état ou les urgences.</li>
</ul>`,

  citySpecificChallenges: [
    "Développement accéléré de mousses et lichens sur les façades et balcons dû à la forte hygrométrie des bords de Marne et du canal de Chelles.",
    "Encrassement spécifique des moquettes et sols de halls par les poussières noires et grasses liées à la proximité du site ferroviaire et de la D934.",
    "Risque sanitaire élevé de fientes de pigeons sur les balcons des résidences situées près des zones arborées comme le Bois de Vaires ou l\'Île de Loisirs.",
    "Gestion des eaux de lavage en parkings souterrains nécessitant une vigilance accrue pour éviter la saturation des pompes de relevage en zone inondable."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: [
    "Centre-Ville",
    "Cité EDF",
    "Quartier des Pêcheurs",
    "Bois de Vaires",
    "Parc de l'Aulnay",
    "Quartier du Canal"
  ],

  nearbyCities: [
    "chelles",
    "brou-sur-chantereine",
    "torcy",
    "noisiel",
    "lognes"
  ],

  landmarks: [
    "Mairie de Vaires-sur-Marne",
    "Gare de Vaires - Torcy",
    "Stade Nautique Olympique d'Île-de-France",
    "Canal de Chelles",
    "Église Sainte-Jeanne d'Arc",
    "Île de loisirs de Vaires-Torcy"
  ],

  faq: [
    {
      question:
        "Quelle est votre réactivité pour une intervention urgente à Vaires-sur-Marne ?",
      answer:
        "Grâce à notre maillage en Île-de-France, nous pouvons intervenir très rapidement sur le secteur de Vaires-sur-Marne. Pour des situations critiques comme un dégât des eaux ou une remise en état après sinistre, nous sommes capables de mobiliser une équipe technique et le matériel adéquat sous 24 à 48 heures pour sécuriser et assainir les lieux."
    },
    {
      question:
        "Comment gérez-vous l'accès aux résidences sécurisées lors de vos passages ?",
      answer:
        "Nous avons l'habitude de collaborer avec les syndics et les conseils syndicaux. Nos chefs d'équipe gèrent les badges Vigik et les clés de manière sécurisée et tracée. Cela nous permet d'intervenir en toute autonomie pour l'entretien des parties communes ou des parkings, sans nécessiter la présence systématique d'un gardien ou d'un gestionnaire sur place."
    },
    {
      question:
        "Le déplacement pour effectuer un devis est-il facturé ?",
      answer:
        "Non, tous nos déplacements pour l'établissement d'un devis sont entièrement gratuits. Que votre demande concerne une copropriété près de la gare de Vaires - Torcy ou un pavillon au Bois de Vaires, nous venons sur place évaluer les surfaces et les contraintes techniques sans aucun engagement financier de votre part."
    },
    {
      question:
        "Pouvez-vous intervenir dans les zones où le stationnement est difficile, comme près de la gare ?",
      answer:
        "Oui, nous adaptons notre logistique aux contraintes de stationnement. Nos véhicules sont équipés pour des déchargements rapides et nous planifions les interventions, notamment pour le matériel lourd comme les autolaveuses, sur des créneaux horaires où la circulation est plus fluide afin de minimiser la gêne pour les résidents et les usagers de la voirie."
    }
  ],

  testimonial: {
    text:
      "Klinova a pris en charge le nettoyage des moquettes et du parking d\'une grande résidence à Vaires-sur-Marne avec un suivi clair et des résultats visibles dès le premier passage.",
    author: "F. Martin",
    role: "Gestionnaire de copropriété",
    building: "Résidence Parc de l'Aulnay"
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Des parties communes transformées, avec des moquettes désincrustées et des fibres redressées, pour valoriser instantanément l\'image et l\'hygiène de vos immeubles à Vaires-sur-Marne.",
      whyUsBullets: [
        "Connaissance des spécificités des résidences de Vaires, de la Cité EDF aux immeubles du Centre-Ville.",
        "Maîtrise de l\'injection-extraction pour éliminer la poussière noire ferroviaire sans détremper les sols.",
        "Intervention flexible organisée pour respecter la tranquillité des résidents et les horaires d\'accès.",
        "Compte-rendu d\'intervention précis permettant au syndic de justifier la prestation auprès du conseil syndical."
      ],

      uniqueIntro: `<p>À Vaires-sur-Marne, les moquettes des halls d’entrée, des couloirs et des cages d’escalier subissent une double agression : l\'humidité constante liée à la proximité de la Marne et du canal, et l\'encrassement urbain généré par la gare et les axes passants. Dans les grandes résidences comme la Cité EDF ou le Parc de l\'Aulnay, le fort passage des résidents crée des zones d\'usure visibles et des chemins grisâtres. Cette accumulation de salissures, combinée parfois à une poussière noire et grasse typique des zones proches des voies ferrées, ternit considérablement l\'aspect des lieux.</p>
<p class="mt-4">Pour les copropriétaires et les visiteurs, des moquettes tachées ou dégageant une odeur de renfermé renvoient une image de négligence et d\'inconfort. Les syndics savent que l\'aspirateur ne suffit pas à extraire ces polluants incrustés. Une intervention professionnelle périodique par injection-extraction permet de désincruster la fibre en profondeur, d\'éliminer les mauvaises odeurs et de redonner un aspect soigné et accueillant à l\'immeuble.</p>`,

      uniqueDeepDive: `<p>Notre intervention débute par un diagnostic technique sur place : nous analysons la nature de la fibre, souvent synthétique dans les résidences des années 70-80 de Vaires, le type de pose et l\'origine des taches. Avant toute opération, nos techniciens protègent les plinthes et les bas de murs et mettent en place un balisage clair pour sécuriser les zones de circulation. La méthode privilégiée est le nettoyage par injection-extraction : nous projetons une solution nettoyante adaptée au cœur de la fibre pour décoller la crasse, puis l\'aspirons immédiatement.</p>
<p class="mt-4">Nous insistons par passes croisées sur les zones de fort trafic, notamment devant les ascenseurs et les boîtes aux lettres. Nous adaptons notre logistique aux contraintes de Vaires-sur-Marne : gestion rigoureuse de l\'humidité pour garantir un séchage efficace malgré l\'hygrométrie locale, et utilisation de matériel portatif pour les petits immeubles du Centre-Ville sans ascenseur. Dans les longs couloirs des résidences du quartier des Pêcheurs, nous procédons par tronçons pour ne jamais bloquer l\'accès aux logements. Nous terminons par une vérification visuelle et recommandons aux gestionnaires une fréquence de nettoyage tous les 12 à 18 mois pour maintenir un niveau de propreté optimal.</p>`,

      specificChallenges: [
        "L\'humidité ambiante des bords de Marne et du canal impose une aspiration haute performance pour éviter tout risque de moisissure ou d\'odeur après nettoyage.",
        "La poussière noire et grasse liée à la proximité du site ferroviaire et de la gare de triage nécessite des détergents spécifiques pour un dégraissage efficace des fibres.",
        "Les grands couloirs des ensembles résidentiels type Parc de l\'Aulnay demandent une organisation logistique rigoureuse, notamment sur la longueur de câbles et la gestion des points d\'eau."
      ],

      faqAdditions: [
        {
          question:
            "La méthode d'injection-extraction est-elle efficace contre la poussière noire typique du secteur gare ?",
          answer:
            "Oui, c'est la méthode la plus adaptée. Cette poussière est souvent grasse et colle aux fibres, ce qu'un aspirateur classique ne peut pas retirer. L'injection d'eau chaude mélangée à un détergent professionnel permet de dissoudre ce film gras, tandis que l'aspiration puissante extrait la matière noire hors de la moquette. Le résultat est visible immédiatement : la fibre retrouve sa couleur et son volume, débarrassée de ce voile grisâtre."
        },
        {
          question:
            "Intervenez-vous dans les bureaux d'entreprises aussi bien que dans les copropriétés ?",
          answer:
            "Tout à fait. Nous traitons régulièrement les moquettes de bureaux, de salles de réunion ou de cabinets libéraux à Vaires-sur-Marne. Pour ces clients professionnels, nous proposons des interventions en horaires décalés, tôt le matin, en fin de journée ou le week-end, afin de ne pas perturber l'activité économique et la circulation des collaborateurs ou des clients."
        },
        {
          question:
            "Est-ce que le nettoyage va laisser une odeur d'humidité dans le hall ?",
          answer:
            "C'est une préoccupation légitime à Vaires-sur-Marne. Notre protocole inclut une extraction maximale de l'eau injectée, avec environ 90 % récupérée immédiatement. La moquette reste humide au toucher quelques heures sans être détrempée. Si les locaux sont correctement ventilés pendant et après notre passage, il n'y a aucune odeur d'humidité résiduelle, au contraire l'air paraît plus frais et sain."
        },
        {
          question:
            "Comment gérez-vous la circulation des résidents pendant le nettoyage des couloirs ?",
          answer:
            "Nous ne condamnons jamais totalement l'accès aux logements. Dans les couloirs larges, nous traitons une moitié de la largeur puis l'autre. Dans les zones plus étroites, nous travaillons par petites sections balisées. Nos techniciens sont formés pour s'interrompre et sécuriser le passage lorsqu'un résident a besoin de passer, garantissant ainsi la continuité de la vie de l'immeuble sans gêne majeure."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Des parkings souterrains et aériens impeccables, débarrassés des poussières ferroviaires et des taches d\'huile, pour assurer sécurité, adhérence et clarté à vos résidents et usagers à Vaires-sur-Marne.",
      whyUsBullets: [
        "Expertise des parkings de Vaires-sur-Marne, des résidences du Centre-Ville aux ensembles de la Cité EDF.",
        "Élimination efficace de la poussière noire ferroviaire grâce à des dégraissants professionnels et un brossage mécanique.",
        "Intervention par zones balisées permettant aux résidents de conserver des places de stationnement pendant les travaux.",
        "Rapport détaillé avec photos avant/après pour le suivi de maintenance du syndic ou du conseil syndical."
      ],

      uniqueIntro: `<p>Dans les copropriétés de Vaires-sur-Marne, notamment près de la gare ou le long de la D934, les parkings s\'encrassent rapidement. Une poussière noire et grasse, typique de la proximité des voies ferrées et du trafic routier, recouvre les sols, masquant les marquages et assombrissant l\'espace. À cela s\'ajoutent les taches d\'huile et traces de pneumatiques qui rendent les surfaces bétonnées ou résinées particulièrement glissantes et inesthétiques.</p>
<p class="mt-4">Cette accumulation de saletés génère un sentiment d\'insécurité pour les usagers, qui évoluent dans un environnement sombre et négligé. Pour les gestionnaires immobiliers, l\'entretien mécanisé est crucial : il ne s\'agit pas seulement d\'esthétique, mais de prévenir les chutes, de préserver la qualité des revêtements face à l\'acidité des huiles et de maintenir une signalisation visible pour la sécurité de tous.</p>`,

      uniqueDeepDive: `<p>Une intervention efficace commence par un diagnostic technique précis de votre parking à Vaires-sur-Marne : nous évaluons la nature du sol, béton brut, quartz ou enrobé, l\'état des puisards et des pompes de relevage, ainsi que les contraintes d\'accès comme la hauteur sous poutre et la largeur des rampes. Avant le lavage, nos équipes effectuent un balayage mécanique complet pour éliminer mégots, canettes et sables abrasifs. Nous organisons le chantier par zones successives, en coordination avec le syndic, pour permettre une rotation des véhicules sans bloquer totalement l\'accès au stationnement.</p>
<p class="mt-4">Le cœur de l\'intervention repose sur l\'utilisation d\'autolaveuses industrielles adaptées à la superficie. Ces machines brossent le sol avec un détergent dégraissant puissant tout en aspirant immédiatement les eaux sales. Pour les zones critiques comme les rampes d\'accès, les pieds de poteaux et les taches d\'huile incrustées, nous utilisons la haute pression à eau chaude de manière ciblée. La gestion de l\'eau est rigoureuse : toutes les eaux de lavage chargées d\'hydrocarbures sont récupérées par la machine et évacuées vers les filières de traitement appropriées, garantissant le respect des normes environnementales strictes des bords de Marne. Nous conseillons un à deux décrassages complets par an.</p>`,

      specificChallenges: [
        "Proximité immédiate du site ferroviaire générant une poussière métallique et grasse très spécifique qui nécessite un dégraissage chimique puissant.",
        "Sous-sols situés près de la Marne ou du canal exigeant une gestion parfaite des eaux pour ne pas saturer des puisards parfois sensibles aux remontées de nappe.",
        "Rampes d\'accès des immeubles anciens du Centre-Ville souvent étroites et pentues, demandant une grande maîtrise du nettoyage haute pression pour garantir l\'adhérence sans décaper le béton."
      ],

      faqAdditions: [
        {
          question:
            "La poussière noire revient très vite dans notre parking, est-ce normal ?",
          answer:
            "À Vaires-sur-Marne, l'environnement ferroviaire et routier génère effectivement beaucoup de particules fines et grasses. Cependant, un nettoyage professionnel en profondeur permet d'extraire la crasse incrustée dans les pores du béton, ce qu'un simple balayage ne fait pas. Cela retarde l'encrassement visible et réduit l'effet glissant. Une fréquence de deux passages par an permet de maîtriser ce phénomène durablement."
        },
        {
          question:
            "Est-il obligatoire que le parking soit totalement vide pour intervenir ?",
          answer:
            "Non, ce n'est pas obligatoire, même si cela facilite le travail. Nous savons qu'il est difficile de vider un parking résidentiel. Nous procédons donc par phasage : nous traitons une zone balisée pendant que les voitures stationnent dans l'autre. Une fois la première partie propre et sèche, nous inversons. Cela demande simplement une bonne communication en amont avec les résidents."
        },
        {
          question:
            "Pouvez-vous retirer des taches d'huile moteur présentes depuis des années ?",
          answer:
            "Nous obtenons d'excellents résultats sur les taches récentes. Pour les taches très anciennes sur du béton brut, l'huile a souvent pénétré la matière en profondeur. Notre traitement à l'eau chaude et au dégraissant va éliminer toute la partie superficielle et collante, supprimant le danger de glissade et atténuant la tache visuelle, mais une auréole peut subsister dans la masse du béton."
        },
        {
          question:
            "Où évacuez-vous l'eau sale utilisée pour le nettoyage ?",
          answer:
            "C'est un point crucial, surtout à proximité de la Marne. Nos autolaveuses récupèrent l'eau souillée dans un réservoir dédié. Nous ne la rejetons jamais dans les grilles d'eaux pluviales du parking ou de la rue. Si le parking n'est pas équipé d'un séparateur d'hydrocarbures relié aux eaux usées, nous évacuons ces effluents via une filière de traitement agréée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Retrouvez un balcon impeccable et accueillant à Vaires-sur-Marne, débarrassé des mousses liées à l\'humidité et de la pollution, pour profiter pleinement de votre extérieur dès les premiers beaux jours.",
      whyUsBullets: [
        "Expertise face à l\'humidité des bords de Marne et aux poussières ferroviaires du centre de Vaires-sur-Marne.",
        "Utilisation de la haute pression contrôlée pour respecter l\'intégrité des carrelages et des joints anciens.",
        "Gestion rigoureuse des eaux de lavage pour garantir une intervention sans nuisance pour le voisinage.",
        "Conseils personnalisés pour ralentir la réapparition des mousses et l\'entretien de vos extérieurs."
      ],

      uniqueIntro: `<p>À Vaires-sur-Marne, l\'exposition des balcons et terrasses est particulière : la forte hygrométrie générée par la Marne et le canal favorise l\'apparition rapide de dépôts verts et de mousses, rendant les sols glissants. S\'ajoute à cela la poussière noire et grasse typique de la proximité des voies ferrées et de la route D934, qui s\'incruste dans les joints de carrelage et ternit les garde-corps.</p>
<p class="mt-4">Face à ces salissures tenaces, les occupants finissent souvent par délaisser leur extérieur. Le balcon devient une zone de stockage poussiéreuse plutôt qu\'un lieu de détente, donnant une impression de négligence qui assombrit le logement. Un simple nettoyage à l\'eau ne suffit généralement pas à désincruster ces polluants. Une intervention professionnelle permet de décaper les surfaces en profondeur sans les abîmer, vous permettant de réinvestir immédiatement votre terrasse.</p>`,

      uniqueDeepDive: `<p>Notre intervention débute par une préparation minutieuse pour protéger votre logement et vos biens. Nous installons des protections sur les menuiseries et les seuils de portes-fenêtres pour éviter toute éclaboussure vers l\'intérieur. Nous déplaçons ou protégeons le mobilier de jardin et les plantes, puis procédons au retrait manuel des gros déchets, feuilles mortes, terre et résidus de jardinières qui s\'accumulent souvent dans les angles et les évacuations d\'eau. Ensuite, nous appliquons un produit nettoyant professionnel adapté à la nature de votre sol, béton, carrelage ou dalles sur plots, pour dissoudre les graisses et les mousses, suivi d\'un brossage mécanique soigné.</p>
<p class="mt-4">Le rinçage s\'effectue à l\'aide d\'un nettoyeur haute pression réglé sur une puissance modérée, afin de nettoyer efficacement sans risquer de décoller les joints ou d\'abîmer l\'émail. Nous portons une attention particulière au nettoyage des garde-corps et des vitres extérieures accessibles. La gestion de l\'eau est cruciale en copropriété : nous canalisons les écoulements vers les évacuations pluviales à l\'aide de raclettes et utilisons si nécessaire un aspirateur à eau pour empêcher toute coulure sur la façade ou chez vos voisins du dessous. Nous terminons par des conseils de séchage, généralement quelques heures, et d\'entretien courant.</p>`,

      specificChallenges: [
        "Humidité constante provenant du canal et de la Marne accélérant le verdissement des sols et nécessitant l\'usage de produits fongicides adaptés.",
        "Poussière noire ferroviaire et routière incrustée dans les aspérités des bétons et garde-corps, demandant un dégraissage spécifique.",
        "Balcons des immeubles anciens du Centre-Ville disposant parfois d\'évacuations étroites, obligeant à une aspiration des eaux pour éviter tout débordement."
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage haute pression risque-t-il d'abîmer mes joints de carrelage ?",
          answer:
            "Non, car nous adaptons la puissance du jet. Nous n'utilisons pas de pression industrielle brute sur des balcons résidentiels. Des buses spécifiques élargissent le jet pour une action nettoyante mécanique sans agresser la structure. Cela permet de retirer la crasse incrustée sur les joints et le carrelage sans les creuser ni les fragiliser."
        },
        {
          question:
            "Comment évitez-vous que l'eau sale coule chez mon voisin du dessous ?",
          answer:
            "C'est notre priorité lors des interventions en immeuble à Vaires-sur-Marne. Nos techniciens contrôlent le flux d'eau en permanence, utilisent des raclettes pour diriger l'eau vers les évacuations et, si besoin, un aspirateur à liquides pour laisser le sol uniquement humide, sans ruissellement excessif."
        },
        {
          question:
            "Les produits utilisés sont-ils dangereux pour mes plantes ou mon animal de compagnie ?",
          answer:
            "Nous prenons toutes les précautions nécessaires. Les plantes sont déplacées ou bâchées pour éviter le contact direct avec le détergent. Nous vous demandons de garder vos animaux à l'intérieur pendant l'opération. Une fois le rinçage effectué et le balcon sec, il n'y a plus aucun risque. Nous privilégions des produits respectueux des surfaces et de l'environnement."
        },
        {
          question:
            "Quand pourrai-je remettre ma table et mes chaises sur le balcon ?",
          answer:
            "Le temps de séchage varie selon la météo et l'exposition de votre terrasse. En général, sur une surface carrelée ou bétonnée, il faut compter entre 2 et 4 heures pour un séchage complet à l'air libre. Nous vous conseillons d'attendre que le sol soit parfaitement sec au toucher avant de réinstaller du mobilier lourd ou des tapis d'extérieur."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Retrouvez un balcon sain et décontaminé à Vaires-sur-Marne, débarrassé des risques infectieux et des mauvaises odeurs, pour profiter à nouveau de votre extérieur en toute sécurité sanitaire.",
      whyUsBullets: [
        "Connaissance des zones à forte densité de pigeons près de l\'Île de Loisirs et du Centre-Ville de Vaires.",
        "Protocole strict incluant EPI complets et produits virucides homologués pour une décontamination certifiée.",
        "Intervention discrète et respectueuse du voisinage, avec gestion maîtrisée des écoulements en copropriété.",
        "Évacuation tracée des déchets contaminés vers des filières de traitement agréées, sans passer par les poubelles de l\'immeuble."
      ],

      uniqueIntro: `<p>À Vaires-sur-Marne, la présence de nombreux espaces naturels comme le Bois de Vaires et l\'Île de Loisirs, combinée aux plans d\'eau, favorise une forte population de pigeons. Ces volatiles colonisent fréquemment les balcons, loggias et corniches des immeubles, notamment dans le Centre-Ville ou près de la gare. L\'accumulation rapide de fientes rend ces espaces extérieurs totalement impraticables : odeurs nauséabondes, sol glissant et aspect repoussant.</p>
<p class="mt-4">Au-delà de la nuisance esthétique, cette situation présente un risque sanitaire sérieux pour les occupants. Les fientes sèches, en se transformant en poussière, peuvent véhiculer des bactéries et des maladies respiratoires graves. Face à ce danger biologique, un nettoyage domestique est insuffisant et risqué ; seule une intervention professionnelle avec protocole de désinfection garantit la salubrité des lieux.</p>`,

      uniqueDeepDive: `<p>Notre intervention à Vaires-sur-Marne suit un protocole de sécurité biologique rigoureux pour protéger votre santé et celle de nos techniciens. Avant toute action, notre équipe s\'équipe d\'EPI complets, combinaisons étanches, masques FFP2 ou FFP3, lunettes et gants, et installe un confinement pour isoler le balcon de l\'intérieur du logement. La première étape consiste à humidifier les fientes sèches et les nids afin d\'empêcher la volatilisation de particules contaminées lors du retrait. Nous procédons ensuite au grattage et au ramassage manuel de tous les déchets organiques, immédiatement conditionnés dans des sacs étanches double épaisseur classés comme déchets à risques.</p>
<p class="mt-4">Une fois la zone débarrassée des encombrants biologiques, nous réalisons un nettoyage approfondi des sols, garde-corps, appuis de fenêtre et murs à l\'aide de détergents professionnels pour éliminer les traces incrustées. L\'étape finale est la désinfection : nous pulvérisons un produit virucide et bactéricide homologué sur l\'ensemble des surfaces traitées, en respectant scrupuleusement le temps de contact nécessaire pour éradiquer les pathogènes. Les surfaces sont ensuite rincées avec une gestion maîtrisée des écoulements pour ne pas contaminer les étages inférieurs. Nous terminons par l\'évacuation sécurisée des déchets vers une filière spécialisée et recommandons d\'aérer l\'espace en attendant environ 24 heures avant de réutiliser le balcon.</p>`,

      specificChallenges: [
        "Proximité des grands arbres du Bois de Vaires et des points d\'eau attirant les pigeons et augmentant le risque de recolonisation rapide sans protection physique ultérieure.",
        "Acidité de l\'acide urique des fientes corrodant rapidement les garde-corps métalliques et les joints de carrelage, nécessitant un nettoyage délicat.",
        "Accès aux balcons par l\'intérieur des appartements imposant un confinement strict pour éviter toute contamination croisée lors du passage des déchets."
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi est-il dangereux de nettoyer soi-même un balcon très souillé ?",
          answer:
            "Les fientes de pigeons, surtout lorsqu'elles sont sèches, libèrent des poussières microscopiques contenant des agents pathogènes. Sans protection respiratoire adaptée et sans protocole de désinfection, vous risquez d'inhaler ces particules et de contracter des infections pulmonaires. De plus, les produits ménagers classiques ne suffisent pas à décontaminer des surfaces poreuses comme le béton."
        },
        {
          question:
            "Mon chat ou mon chien pourra-t-il retourner sur le balcon sans risque ?",
          answer:
            "Oui, mais seulement après le délai de sécurité. Nous utilisons des biocides puissants pour la désinfection initiale. Une fois le temps d'action passé, les surfaces rincées et le balcon séché à l'air libre, en général sous 24 heures, il n'y a plus de risque chimique ou bactériologique pour vos animaux de compagnie."
        },
        {
          question:
            "Les fientes ont-elles abîmé mon sol de façon irréversible ?",
          answer:
            "Les fientes sont très acides. Si elles sont restées longtemps en contact avec le sol, elles peuvent avoir attaqué le vernis du carrelage, terni la pierre ou corrodé le métal des garde-corps. Notre nettoyage élimine la souillure et stoppe le processus de corrosion, mais certaines marques profondes peuvent rester visibles."
        },
        {
          question:
            "Que faites-vous des sacs remplis de fientes et de nids ?",
          answer:
            "Ces résidus sont considérés comme des déchets présentant un risque infectieux et ne peuvent pas être jetés dans les containers classiques. Nous les emportons à la fin de l'intervention, conditionnés dans des emballages étanches spécifiques, pour les acheminer vers une filière de traitement et d'incinération agréée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Redonnez vie à vos canapés, tapis et matelas à Vaires-sur-Marne avec un nettoyage en profondeur qui élimine taches et acariens, pour un intérieur sain et un confort retrouvé au quotidien.",
      whyUsBullets: [
        "Intervention adaptée aux pavillons familiaux du Bois de Vaires comme aux appartements du Centre-Ville.",
        "Maîtrise de l\'injection-extraction pour éliminer acariens et allergènes sans détremper les mousses.",
        "Service à domicile discret et organisé, permettant un séchage et une réutilisation rapide du mobilier.",
        "Conseils personnalisés pour l\'entretien courant et la préservation de vos textiles d\'ameublement."
      ],

      uniqueIntro: `<p>Dans les pavillons du Bois de Vaires comme dans les appartements du Centre-Ville, les textiles d\'ameublement sont au cœur de la vie quotidienne. Sollicités par les enfants, les animaux de compagnie et les réceptions, ils accumulent poussière, miettes et salissures diverses. Les taches de nourriture, de boissons ou les traces laissées par un animal finissent par marquer le tissu, tandis que les acariens et les bactéries prolifèrent dans l\'épaisseur des mousses, invisibles mais sources d\'allergies et d\'odeurs de renfermé.</p>
<p class="mt-4">Cet encrassement progressif crée un sentiment d\'inconfort et une gêne vis-à-vis des invités, donnant une impression de maison mal entretenue malgré vos efforts de ménage. L\'aspirateur ne traite que la surface et ne peut pas extraire les polluants incrustés. Une intervention professionnelle à domicile est la seule solution pour assainir véritablement vos meubles, raviver les couleurs et garantir une hygiène irréprochable à votre foyer.</p>`,

      uniqueDeepDive: `<p>Notre prestation à domicile commence par un diagnostic technique précis de vos textiles, coton, velours, lin ou synthétique, pour déterminer la méthode de nettoyage la plus sûre et éviter tout risque de dégorgement. Nous repérons les taches spécifiques, graisse, urine, feutre ou café, pour appliquer un pré-traitement ciblé à l\'aide de détachants professionnels ou de solutions enzymatiques qui dissolvent la saleté incrustée. Nous protégeons les sols environnants et préparons notre matériel pour intervenir proprement, même dans les espaces restreints des appartements.</p>
<p class="mt-4">La phase principale de nettoyage repose sur l\'injection-extraction : notre machine injecte une solution nettoyante au cœur des fibres et l\'aspire instantanément à haute puissance. Ce procédé permet de rincer le tissu en profondeur, en extrayant l\'eau sale chargée d\'acariens et de poussières. Nous portons une attention particulière à la gestion du séchage, un point crucial à Vaires-sur-Marne où l\'humidité ambiante peut être élevée. Grâce à la puissance d\'aspiration de nos machines, nous laissons le textile seulement humide en surface et vous conseillons sur la ventilation optimale de la pièce pour accélérer le processus. Avant de partir, nous partageons des astuces d\'entretien simples pour traiter les petits accidents du quotidien et préserver l\'éclat de votre canapé ou de votre tapis plus longtemps.</p>`,

      specificChallenges: [
        "Présence fréquente de jardins et d\'animaux domestiques dans les pavillons, favorisant l\'apport de terre et de taches organiques nécessitant un traitement enzymatique.",
        "Humidité naturelle liée à la Marne pouvant ralentir le séchage dans les pièces mal ventilées et imposant une extraction mécanique maximale de l\'eau.",
        "Textiles d\'ameublement anciens ou fragiles demandant un réglage précis de la pression pour nettoyer sans feutrer ni déformer la fibre."
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage est-il vraiment efficace pour les personnes allergiques aux acariens ?",
          answer:
            "Oui, c'est une solution radicale. L'injection-extraction élimine physiquement les acariens vivants, leurs larves et surtout leurs déjections, qui sont la principale cause des réactions allergiques. Contrairement à un simple spray, notre méthode lave la fibre et extrait les allergènes hors de votre domicile, ce qui améliore nettement le confort des personnes sensibles."
        },
        {
          question:
            "Pouvez-vous récupérer un matelas taché par de l'urine ou de la transpiration ?",
          answer:
            "Les taches d'origine organique nécessitent un traitement spécifique. Nous utilisons des produits à base d'enzymes qui décomposent les molécules responsables des mauvaises odeurs et des auréoles. Si nous intervenons assez tôt, nous parvenons souvent à éliminer totalement les odeurs et à faire disparaître ou atténuer très fortement les taches. Sur une tache ancienne, une trace visuelle peut parfois persister malgré une hygiène retrouvée."
        },
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir dormir sur le matelas ou s'asseoir sur le canapé ?",
          answer:
            "Le temps de séchage dépend de la température de votre logement et de l'aération. En moyenne, comptez entre 4 et 8 heures. Notre matériel professionnel aspire environ 90 % de l'eau utilisée, laissant le textile simplement humide au toucher. Nous recommandons de planifier l'intervention le matin pour que le mobilier soit sec et utilisable en soirée."
        },
        {
          question:
            "Dois-je déplacer les meubles ou préparer la pièce avant votre arrivée ?",
          answer:
            "Pour que nos techniciens puissent travailler efficacement, nous vous suggérons de retirer les petits objets fragiles situés à proximité immédiate du meuble à nettoyer. Si possible, passez un coup d'aspirateur rapide sur le canapé ou le tapis pour enlever les miettes et les poils d'animaux en surface. Il n'est généralement pas nécessaire de déplacer les meubles lourds, nous sommes équipés pour protéger vos sols et intervenir tout autour."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;



import type { City } from "~/types/geo";    gpt4

const city: City = {
  name: "Vaires-sur-Marne",
  slug: "vaires-sur-marne",
  postalCodes: ["77360"],

  customDescription:
    "Située entre le canal de Chelles et la Marne, Vaires-sur-Marne combine une forte hygrométrie et un trafic dense lié à la gare et à la D934. L’entretien des moquettes de copropriété, le dégraissage des parkings et le nettoyage des balcons exposés aux mousses sont des demandes constantes pour préserver le bâti face à ces contraintes locales.",

  hubIntro:
    "<p>Pour les syndics de copropriété et les gestionnaires de patrimoine à Vaires-sur-Marne, la préservation des immeubles face à l’humidité des bords de Marne et à l’activité urbaine est un enjeu technique quotidien. Klinova se positionne comme votre partenaire de maintenance immobilière, assurant une gestion globale de la propreté, des parkings souterrains aux parties communes, en passant par les extérieurs privatifs.</p><p class=\"mt-4\">Nous intervenons avec une rigueur opérationnelle adaptée aux spécificités locales, garantissant un reporting précis après chaque prestation. Notre structure nous permet de répondre aux exigences des conseils syndicaux avec des solutions éprouvées pour l’hygiène et la rénovation des surfaces.</p><ul><li>Mise en place de protocoles stricts contre les encrassements récurrents (mousses, hydrocarbures, fientes).</li><li>Interventions planifiées ou ponctuelles, selon les contraintes horaires des résidences.</li><li>Équipe formée pour les milieux résidentiels et zones sensibles (hall, cage, balcon, parking).</li><li>Suivi administratif clair, devis rapide et reporting après prestation.</li></ul>",

  citySpecificChallenges: [
    "Mousses et dépôts verts fréquents sur les balcons exposés aux bords de Marne.",
    "Particules fines et poussières ferroviaires autour de la gare de Vaires-Torcy.",
    "Parkings souterrains avec humidité persistante et zones mal ventilées.",
    "Fort passage dans les halls des résidences proches de la D934 et des écoles."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: [
    "Centre-ville",
    "Square Paul-Algis",
    "Les Pêcheurs",
    "ZAC des Pêcheurs",
    "Cité EDF",
    "Bois de Vaires",
    "Cité de la Gare",
    "Parc de l'Aulnay",
    "République",
    "Quartier du Canal"
  ],

  nearbyCities: ["chelles", "brou-sur-chantereine", "torcy", "noisiel", "lognes"],

  landmarks: [
    "Mairie de Vaires-sur-Marne",
    "Gare de Vaires – Torcy",
    "Île de loisirs de Vaires-Torcy",
    "D934 (axe routier majeur)",
    "Parc de l’Aulnay",
    "Église Sainte-Jeanne-d’Arc de Vaires-sur-Marne"
  ],

  faq: [
    {
      question: "Pouvez-vous intervenir rapidement à Vaires-sur-Marne en cas d'urgence ?",
      answer:
        "Oui. Nous sommes organisés pour répondre sous 24 à 48 h en cas de sinistre ou de fin de chantier. Nos équipes peuvent mobiliser du matériel professionnel en urgence à Vaires-sur-Marne selon les disponibilités."
    },
    {
      question: "La gestion des accès Vigik ou des clés est-elle bien encadrée ?",
      answer:
        "Tous nos intervenants suivent un protocole strict pour la gestion sécurisée des accès. Une fiche d’entrée/sortie est systématiquement utilisée pour les badges, Vigik ou jeux de clés confiés."
    },
    {
      question: "Est-ce que le déplacement pour un devis est payant ?",
      answer:
        "Non. Même à Vaires-sur-Marne, tous nos déplacements pour devis sont gratuits, qu’il s’agisse d’un hall de copropriété ou d’un balcon à traiter chez un particulier."
    },
    {
      question:
        "Vos équipes s’adaptent-elles aux contraintes locales comme le stationnement difficile ?",
      answer:
        "Oui. Vaires présente parfois des contraintes de stationnement. Nous anticipons cela en repérant les accès à l’avance et en adaptant nos horaires si nécessaire, par exemple avec des interventions tôt le matin."
    }
  ],

  testimonial: {
    text:
      "Klinova a remis à niveau les moquettes et le parking d’une copropriété à Vaires-sur-Marne, avec un chantier bien organisé et un retour très positif des résidents.",
    author: "S. Dupont",
    role: "Gestionnaire de copropriété",
    building: "Résidence Parc de l'Aulnay"
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Des moquettes propres et bien entretenues dans les halls, escaliers et paliers renforcent l’image des copropriétés à Vaires-sur-Marne, face à l’humidité et au passage fréquent des résidents.",
      whyUsBullets: [
        "Connaissance des contraintes propres aux résidences de la ZAC des Pêcheurs ou du Parc de l’Aulnay.",
        "Méthode professionnelle par injection-extraction, adaptée à la fibre et au niveau d’encrassement.",
        "Interventions planifiées tôt le matin ou sur créneaux sans passage pour limiter la gêne.",
        "Compte-rendu de fin d’intervention pour le syndic ou le gestionnaire, avec retour visuel possible."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, de nombreux halls d’immeubles sont recouverts de moquettes soumises à une forte sollicitation quotidienne : passages répétés, poussières extérieures, traces de chaussures, taches d’usage. C’est aussi le cas des paliers, escaliers et couloirs dans les cages d’escalier, notamment dans les résidences des quartiers comme le Parc de l’Aulnay, les Pêcheurs ou la cité de la Gare.</p><p class=\"mt-4\">Avec le temps, les fibres ternissent, les taches s’installent et les moquettes perdent leur fonction d’accueil visuel. Cela peut générer un inconfort pour les résidents et nuire à l’image du syndic ou du bailleur. Un nettoyage professionnel bien structuré, avec du matériel adapté et une méthode rigoureuse, permet de redonner une propreté visible dès les premières marches.</p>",
      uniqueDeepDive:
        "<p>Chaque intervention débute par un diagnostic complet de l’état des moquettes : type de fibre, niveau d’encrassement, nature des taches, circulation dans les cages, contraintes d’accès ou d’ascenseur. Nos équipes adaptent leur protocole à la configuration locale, qu’il s’agisse de cages étroites dans les résidences anciennes ou de halls ouverts sur rue dans les constructions plus récentes.</p><p class=\"mt-4\">La préparation inclut la protection des plinthes et des bas de murs, la sécurisation des zones de travail, le balisage des escaliers et la coordination avec les résidents ou gardiens si besoin. Le nettoyage se fait par injection-extraction à l’eau chaude, avec plusieurs passes sur les zones les plus sollicitées (accès d’entrée, devant les boîtes aux lettres, paliers intermédiaires). Le séchage est optimisé par extraction puissante et aération. Nous conseillons une fréquence d’entretien tous les 12 à 18 mois selon la fréquentation.</p>",
      specificChallenges: [
        "Moquettes régulièrement exposées aux salissures extérieures dans les halls ouverts sur la D934.",
        "Présence de poussières fines en provenance de la gare de Vaires-Torcy et des axes routiers proches.",
        "Nombreux escaliers en moquette dans les résidences sans ascenseur, rendant le nettoyage plus complexe.",
        "Humidité fréquente en rez-de-chaussée, avec des délais de séchage à anticiper."
      ],
      faqAdditions: [
        {
          question:
            "Nos halls sont ouverts sur la rue, est-ce vraiment utile de nettoyer la moquette ?",
          answer:
            "Oui, les halls ouverts comme on en trouve sur l’avenue Jean Jaurès ou près du canal sont exposés à un encrassement rapide. Un nettoyage professionnel restaure l’apparence des moquettes et permet un entretien plus simple ensuite. Nous intervenons avec des machines puissantes même dans les halls très exposés."
        },
        {
          question:
            "Vous intervenez aussi dans les petites copropriétés ou les immeubles avec peu de lots ?",
          answer:
            "Bien sûr. À Vaires-sur-Marne, nous travaillons aussi bien dans de grandes résidences comme celles du quartier du Parc de l’Aulnay que dans des immeubles plus modestes de 6 à 12 logements. Le protocole est toujours adapté à la configuration des lieux, quelle que soit leur taille."
        },
        {
          question:
            "Est-ce que votre méthode peut abîmer la moquette ou accélérer son usure ?",
          answer:
            "Non, nous utilisons une méthode par injection-extraction à eau chaude, respectueuse des fibres. Le réglage de la pression et de la température est adapté selon le type de moquette. Ce procédé nettoie en profondeur sans altérer la trame. Le temps de séchage varie entre 4 et 8 heures selon la ventilation."
        },
        {
          question:
            "Comment organisez-vous l’intervention pour limiter la gêne dans l’immeuble ?",
          answer:
            "Nous planifions l’intervention avec le syndic ou le gardien en tenant compte des horaires de passage. Les cages sont nettoyées cage par cage, et nous informons les résidents si nécessaire. Le balisage est systématique pour éviter les glissades, et nous respectons les règles de bon voisinage."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un parking propre et bien entretenu à Vaires-sur-Marne rassure les usagers, limite les glissades et valorise immédiatement l’image de l’immeuble ou de l’entreprise.",
      whyUsBullets: [
        "Connaissance du contexte local (D934, ZAC, parkings près de la gare).",
        "Autolaveuses professionnelles et dégraissants adaptés aux revêtements de sol et taches tenaces.",
        "Travail par zones, tôt le matin ou en faible affluence pour limiter l’impact.",
        "Remise d’un compte-rendu avec photos avant/après sur demande du syndic ou du gestionnaire."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, les parkings souterrains et aériens subissent un encrassement rapide lié au passage intensif, à la proximité de la D934 et aux va-et-vient quotidiens vers la gare de Vaires-Torcy. Poussière noire, traces de pneus, taches d’huile, marquages à peine visibles, murs salis… Ces dégradations génèrent une impression de négligence et peuvent être source d’inconfort ou d’insécurité, en particulier en période humide ou dans les zones peu éclairées.</p><p class=\"mt-4\">Dans les copropriétés, les commerces ou les parkings d’entreprises, un entretien professionnel permet d’assainir l’ensemble des surfaces, de sécuriser les déplacements, de restaurer la lisibilité des circulations et de redonner une image maîtrisée de la gestion du site. Klinova assure des prestations techniques adaptées aux contraintes du terrain.</p>",
      uniqueDeepDive:
        "<p>Chaque intervention débute par un diagnostic approfondi : état des sols (béton brut, peinture ou résine), niveau d’encrassement, efficacité de l’évacuation des eaux, configuration des rampes et hauteur sous plafond. Nous évaluons aussi les contraintes de rotation des véhicules et les éventuelles coupures d’accès. Cette phase permet de planifier l’intervention par zones pour limiter la gêne.</p><p class=\"mt-4\">Après un balayage mécanique ou manuel selon les cas, les zones sont dégagées et balisées. Le nettoyage est réalisé à l’autolaveuse pour les grandes surfaces planes, avec application de dégraissant si nécessaire. Pour les zones complexes (coins, pieds de murs, rampes), nous utilisons une méthode à haute pression contrôlée. Les eaux de lavage sont strictement récupérées ou dirigées vers les réseaux adaptés. En zone humide ou peu ventilée, le séchage est anticipé. Nous recommandons un nettoyage approfondi une à deux fois par an, selon l’usage.</p>",
      specificChallenges: [
        "Circulation dense liée à la gare de Vaires-Torcy, générant poussières et hydrocarbures dans les zones d’entrée.",
        "Taches grasses et noires persistantes dans les rampes souterraines exposées au trafic quotidien.",
        "Parkings avec rampes étroites et peu ventilés, rendant la gestion des fumées et du séchage plus complexe.",
        "Besoin fréquent de travailler en rotation pour ne pas bloquer les accès aux résidents ou aux usagers."
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi nos parkings sont-ils en permanence recouverts de poussière noire ?",
          answer:
            "La proximité immédiate de la D934, des axes de bus et de la gare de Vaires-Torcy expose les parkings à un encrassement régulier par des particules fines, issues à la fois des pneus, des moteurs et de l’environnement routier. Ces poussières se déposent en continu sur les sols, les murs et les équipements. Un nettoyage technique permet de restaurer une propreté visible."
        },
        {
          question:
            "Est-ce qu’il faut entièrement vider le parking pour intervenir ?",
          answer:
            "Non, nous pouvons intervenir par zones en organisant une rotation des véhicules. Cela permet de limiter les désagréments pour les résidents ou les utilisateurs. Lors du diagnostic, nous déterminons les zones à nettoyer en priorité et nous balisons chaque phase d’intervention pour garantir la sécurité et l’efficacité du chantier."
        },
        {
          question:
            "Pouvez-vous enlever les anciennes taches d’huile incrustées ?",
          answer:
            "Nous utilisons des dégraissants professionnels performants, mais certaines taches très anciennes, notamment sur béton poreux, peuvent laisser une trace visuelle même après traitement. Dans la plupart des cas, nous parvenons à atténuer fortement les taches et à restaurer une propreté générale satisfaisante. Le diagnostic permet d’évaluer cela en amont."
        },
        {
          question: "Que faites-vous des eaux de lavage ?",
          answer:
            "Les eaux issues du nettoyage sont gérées selon les règles en vigueur. Soit elles sont dirigées vers le réseau des eaux usées si un raccordement est présent, soit elles sont récupérées par l’autolaveuse ou évacuées via une filière spécialisée en cas de pollution. Aucun rejet sauvage n’est effectué. Nous sommes très stricts sur la conformité environnementale."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Retrouver un balcon propre, sec et agréable à utiliser à Vaires-sur-Marne transforme instantanément la perception de son logement.",
      whyUsBullets: [
        "Bonne connaissance des résidences exposées à la Marne ou au bois de Vaires.",
        "Méthode adaptée à chaque sol, sans agression des joints ni des surfaces fragiles.",
        "Travail en journée ou sur créneau calme pour limiter toute gêne aux voisins.",
        "Compte-rendu d’intervention possible avec recommandations d’entretien en fin de chantier."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, les balcons sont souvent exposés aux dépôts verts, à la poussière urbaine, aux traces d’eau stagnante ou encore aux résidus de terre et de végétation. L’environnement local — humidité liée à la Marne, pollen, proximité de la voie ferrée ou du bois de Vaires — accentue ces encrassements.</p><p class=\"mt-4\">Peu à peu, l’espace perd son usage : le sol devient glissant, les joints noircissent, et la saleté semble s’incruster durablement. Résultat : le balcon reste inutilisé, comme à l’abandon. Un nettoyage professionnel complet permet de remettre les surfaces en état et de rendre au balcon sa fonction de lieu de vie extérieur.</p>",
      uniqueDeepDive:
        "<p>L’intervention commence par une préparation soignée : protection de la porte-fenêtre et des encadrements, déplacement ou bâchage du mobilier, des bacs de plantes et des objets personnels. Nous procédons ensuite à l’enlèvement manuel des résidus visibles : feuilles mortes, terre, résidus de jardinière, traces de graisse ou d’eau stagnante.</p><p class=\"mt-4\">Le nettoyage est réalisé avec des produits adaptés au type de sol (carrelage, dalle béton, bois composite) pour respecter les surfaces. Nous insistons sur les joints, les angles, les pieds de murs, ainsi que les garde-corps et vitres. La gestion de l’eau est maîtrisée pour éviter les coulures : raclette, aspiration manuelle ou chiffon absorbant selon la configuration. Le client reçoit des conseils simples pour maintenir l’entretien : balayage régulier, nettoyage léger en fin d’hiver, et aération après pluie.</p>",
      specificChallenges: [
        "Les balcons proches de la Marne ou de la D934 accumulent poussières, humidité et mousses vertes.",
        "Sols poreux dans certaines résidences des années 70, nécessitant des rinçages contrôlés.",
        "Garde-corps complexes en verre ou métal peint à nettoyer sans altération.",
        "Coulures à éviter systématiquement vers les balcons du dessous, avec gestion par raclette et bâchage."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage peut endommager le carrelage ou les joints ?",
          answer:
            "Non, nos produits sont choisis pour respecter les surfaces. Nous adaptons la pression et le dosage selon le type de sol. Le nettoyage ne fragilise ni les joints ni les carrelages s’ils sont déjà en bon état. En cas de fissure ou de fragilité, nous vous alertons en amont et adaptons la méthode."
        },
        {
          question: "Et si l’eau coule chez le voisin du dessous ?",
          answer:
            "C’est justement ce que nous évitons. Lors de l’intervention, l’eau est canalisée vers l’intérieur du balcon ou absorbée. Si nécessaire, nous utilisons raclette, serpillière ou aspiration pour éviter toute coulure vers les niveaux inférieurs. Notre protocole est prévu pour les configurations en étage."
        },
        {
          question:
            "Utilisez-vous des produits dangereux pour les plantes ou les animaux ?",
          answer:
            "Non. Nous utilisons des nettoyants dilués et rincés soigneusement, sans substances nocives pour les plantes ou les animaux domestiques. Si vous avez des bacs potagers ou des herbes aromatiques, il suffit de nous le signaler : nous les protégerons ou les déplacerons pendant le nettoyage."
        },
        {
          question: "Quand peut-on réutiliser le balcon après votre passage ?",
          answer:
            "En général, le sol est sec et praticable dans les 2 à 4 heures après notre passage, selon l’ensoleillement et le type de surface. Nous vous signalons les zones encore humides et vous donnons les consignes nécessaires. Il est tout à fait possible de réinstaller votre mobilier dans la journée."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Après intervention, le balcon redevient sain, désinfecté et sûr à utiliser à Vaires-sur-Marne, même après une accumulation importante de fientes et de débris.",
      whyUsBullets: [
        "Bonne connaissance des résidences proches du bois de Vaires ou des zones arborées sensibles.",
        "Protocole strict avec EPI, désinfection homologuée et gestion sanitaire sécurisée.",
        "Organisation discrète, créneaux adaptés et intervention en étage sans gêne pour les voisins.",
        "Compte-rendu possible incluant photos et recommandations de prévention."
      ],
      uniqueIntro:
        "<p>À Vaires-sur-Marne, de nombreux balcons sont exposés aux passages réguliers des pigeons attirés par les grands arbres, les toitures accessibles et les zones calmes en hauteur. Les fientes s’accumulent rapidement : odeurs fortes, salissures épaisses, traces corrosives, poussières sèches et parfois présence de nids. Le balcon devient inutilisable et source d’inquiétude pour l’occupant, notamment en raison des risques sanitaires liés aux micro-organismes contenus dans les déjections.</p><p class=\"mt-4\">Ces situations peuvent aussi créer des tensions au sein de la copropriété, surtout lorsque les nuisances touchent plusieurs logements. Un traitement professionnel, sécurisé et complet est indispensable pour remettre les surfaces en état et garantir une désinfection conforme.</p>",
      uniqueDeepDive:
        "<p>L’intervention débute par la mise en place d’équipements de protection individuelle : combinaison, gants, masque respiratoire et lunettes. Nous protégeons l’intérieur du logement avec des bâches afin d’éviter toute dispersion de poussières. Avant toute manipulation, les fientes sèches sont légèrement humidifiées pour limiter la remise en suspension des particules. Les déchets (fientes, plumes, nids) sont ensuite retirés manuellement et conditionnés dans des sacs spécifiques destinés aux déchets contaminés.</p><p class=\"mt-4\">Le nettoyage du sol, des murs, du garde-corps et des vitres se fait avec des produits adaptés, parfois associés à une pression modérée selon le support. Une désinfection complète est appliquée avec un virucide/bactéricide homologué, en respectant rigoureusement le temps de contact. Une fois l’intervention terminée, nous recommandons d’aérer quelques heures et d’attendre 24 h avant de réutiliser le balcon. Des solutions de dissuasion peuvent être proposées selon la configuration.</p>",
      specificChallenges: [
        "Fientes plus fréquentes autour des résidences proches du bois de Vaires et des couloirs de vol.",
        "Accès en étage parfois complexe, nécessitant une sécurisation complète et un confinement des poussières.",
        "Présence de dépôts corrosifs sur garde-corps métalliques nécessitant un nettoyage prudent.",
        "Déchets contaminés soumis à filière contrôlée, nécessitant une évacuation stricte et traçable."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce vraiment nécessaire de faire intervenir un professionnel pour des fientes de pigeons ?",
          answer:
            "Oui, car les fientes peuvent contenir des micro-organismes potentiellement dangereux lorsqu’elles sont sèches et remises en suspension. Un professionnel utilise des protections adaptées, maîtrise l’humidification préalable et applique une désinfection homologuée. Cela garantit la sécurité des occupants et évite toute exposition inutile."
        },
        {
          question:
            "Les produits de désinfection sont-ils sûrs pour les habitants et les animaux une fois secs ?",
          answer:
            "Oui. Les produits que nous utilisons sont homologués pour un usage en milieu résidentiel. Ils nécessitent simplement un temps de contact puis un séchage complet. Une fois la surface sèche, il n’y a plus de risque pour les adultes, enfants ou animaux. Nous recommandons d’aérer quelques heures après l’intervention."
        },
        {
          question:
            "Les fientes peuvent-elles endommager durablement le sol ou les garde-corps ?",
          answer:
            "Les fientes sont corrosives et peuvent provoquer des traces ou une dégradation légère lorsqu’elles stagnent longtemps. Le nettoyage et la désinfection stoppent cette action. Nous évaluons toujours l’état des supports avant d’intervenir et adaptons le nettoyage pour éviter d’aggraver une fragilité préexistante."
        },
        {
          question: "Que deviennent les déchets retirés du balcon ?",
          answer:
            "Ils sont conditionnés dans des sacs adaptés aux déchets potentiellement contaminés, puis évacués via une filière sécurisée. Ils ne sont jamais jetés dans les ordures classiques. Ce traitement spécifique garantit la sécurité sanitaire et respecte les obligations réglementaires."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "À Vaires-sur-Marne, retrouver des canapés, tapis et matelas propres et désodorisés change immédiatement l’ambiance du logement et le confort du quotidien.",
      whyUsBullets: [
        "Interventions à domicile fréquentes dans les pavillons de la cité EDF ou du centre-ville.",
        "Méthode douce mais efficace, adaptée aux tissus fragiles ou encrassés.",
        "Horaires souples, passage rapide et intervention en toute discrétion à domicile.",
        "Suivi possible après traitement si une reprise partielle est nécessaire."
      ],
      uniqueIntro:
        "<p>Dans les appartements et pavillons de Vaires-sur-Marne, les canapés, tapis et matelas sont soumis à rude épreuve : enfants, animaux, petits accidents, va-et-vient quotidien. Rapidement, les textiles accumulent poussières, poils, taches de nourriture ou de boisson, parfois des odeurs persistantes ou des traces d’urine.</p><p class=\"mt-4\">Même dans un logement bien tenu, ces éléments donnent une impression de saleté permanente et peuvent provoquer des gênes vis-à-vis des invités ou des réactions allergiques. Un nettoyage professionnel permet de retirer les allergènes, de détacher les textiles en profondeur et de rendre les surfaces saines et agréables à utiliser à nouveau.</p>",
      uniqueDeepDive:
        "<p>L’intervention débute par un diagnostic du mobilier ou des tapis à nettoyer : nature du textile (synthétique, laine, velours, microfibre…), état général, type et origine des taches. Nous appliquons ensuite des produits ciblés sur les zones problématiques : dégraissant textile, enzymatique pour urine ou produits spécifiques selon la fibre.</p><p class=\"mt-4\">Le nettoyage principal se fait par injection-extraction à l’eau tiède ou chaude, avec aspiration immédiate de l’eau sale. Le processus respecte les textiles fragiles et permet un séchage rapide. L’intervention est discrète, avec un matériel adapté aux contraintes du domicile (bruit modéré, travail en étage ou sans ascenseur). Nous conseillons d’aérer la pièce ensuite et de limiter l’usage des surfaces pendant quelques heures. Des gestes simples d’entretien peuvent prolonger les effets : aspirateur régulier, plaid de protection, aération des matelas.</p>",
      specificChallenges: [
        "Canapés et tapis souvent exposés aux poils et salissures dans les logements avec animaux.",
        "Tissus sensibles ou anciens nécessitant une méthode douce et un prétraitement ciblé.",
        "Odeurs persistantes dans les chambres mal ventilées ou les rez-de-chaussée humides.",
        "Séchage parfois plus lent en hiver dans les logements peu aérés ou peu exposés."
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que votre nettoyage élimine les acariens et les allergènes ?",
          answer:
            "Oui. Le nettoyage par injection-extraction combiné à l’aspiration permet de retirer une grande partie des poussières fines, des squames et des acariens. Cela assainit les matelas, les canapés et les tapis. Nous recommandons de répéter ce type de nettoyage au moins une fois par an pour les personnes allergiques."
        },
        {
          question:
            "Peut-on vraiment retirer les taches d’urine ou les odeurs persistantes ?",
          answer:
            "Nous utilisons un prétraitement enzymatique spécifique pour les taches organiques (urine, vomi, graisse). Dans la majorité des cas, les odeurs sont fortement réduites, voire supprimées. Certaines anciennes taches peuvent laisser une trace visuelle, mais l’hygiène est restaurée. Le diagnostic initial permet de fixer des attentes réalistes."
        },
        {
          question:
            "Combien de temps faut-il attendre avant de réutiliser le canapé ou le tapis ?",
          answer:
            "Le temps de séchage moyen est de 4 à 8 heures, selon l’aération et le type de tissu. Pour un canapé ou un matelas, il est recommandé d’attendre une nuit complète avant de l’utiliser de nouveau. Nous vous donnons les consignes exactes à la fin de l’intervention."
        },
        {
          question:
            "Faut-il préparer quelque chose avant votre venue ?",
          answer:
            "Il suffit de dégager l’accès à la pièce et de retirer les objets personnels sur le canapé ou autour du tapis. Si possible, prévoyez une aération de la pièce pendant et après l’intervention. Nous apportons tout le matériel nécessaire et protégeons les zones proches si besoin."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;
