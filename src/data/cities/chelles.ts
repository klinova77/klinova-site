import type { City } from "~/types/geo";

const city: City = {
  name: "Chelles",
  slug: "chelles",
  postalCodes: ["77500"],

  customDescription:
    "Ville majeure de Seine-et-Marne, Chelles bénéficie d'une desserte RER E et d'un important axe routier comme la RN34. L'activité commerciale et résidentielle génère des besoins constants en entretien : nettoyage des moquettes d'immeubles, des parkings souterrains et des balcons exposés aux intempéries, essentiels pour la valeur patrimoniale.",

  hubIntro: `<p>À Chelles, la maintenance immobilière requiert un partenaire de proximité fiable et réactif. Klinova s'impose comme un intervenant rigoureux pour les syndics de copropriété et gestionnaires, assurant une propreté durable des parties communes et espaces privés grâce à des méthodes éprouvées.</p>
<p>Notre partenariat repose sur une gestion globale et protocolée, avec un reporting systématique pour une traçabilité complète des interventions. Nous nous adaptons aux exigences spécifiques de chaque résidence et bâtiment professionnel à Chelles.</p>
<ul>
  <li>Maintenance préventive et curative des surfaces (sols durs, moquettes, revêtements) pour maintenir l'hygiène et la sécurité des circulations.</li>
  <li>Nettoyage technique des parkings souterrains et des cages d'escalier, confrontés à l'encrassement et aux dépôts divers.</li>
  <li>Entretien régulier des balcons, loggias et façades légères, soumis aux aléas climatiques et aux pollutions environnementales.</li>
  <li>Protocole d'intervention flexible pour les urgences (dégâts des eaux) et les chantiers de fin de travaux, en coordination avec les syndics.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement accru des façades et balcons dû au trafic de la RN34 et de la RN3, associé aux intempéries.",
    "Développement de mousses et dépôts verts sur les sols des terrasses et parkings aériens, favorisé par la proximité du canal et de la Marne.",
    "Fort passage dans les halls d'entrée des résidences près de la gare RER E, nécessitant un entretien très fréquent des moquettes et sols.",
    "Salissures tenaces (hydrocarbures, poussières de frein) dans les parkings souterrains des ensembles immobiliers récents."
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

   nearbyCities: [
  "vaires-sur-marne",
  "lagny-sur-marne",
  "champs-sur-marne",
  "gagny",
  "noisy-le-grand",
],


  districts: [
    "Bords de Marne",
    "Le Village",
    "Le Bois de la Villedieu",
    "Montjay",
    "Les Coudreaux",
    "La Tuilerie",
    "Les Hauts de Chelles",
    "La Prairie",
    "Le Pont de Chelles",
    "Les Godets",
    "Résistance",
    "Maréchal Foch",
    "Grande Prairie",
    "Trentaine",
    "Abbesses",
    "Noue-Brossard",
    "Périchelles",
    "Bel Air",
    "Clos Roger",
    "Les Arcades fleuries",
    "Castermant",
    "Gambetta",
    "Tournelles",
    "Château Gaillard",
    "Aulnoy",
    "Monts-Chalats",
    "Chantereine",
    "Madeleine",
    "La Villeneuve"
  ],

  

  landmarks: [
    "Mairie de Chelles",
    "Gare de Chelles - Gournay (RER E)",
   "Parc du Souvenir Émile-Fouchard",
"Centre commercial Terre Ciel",
    "Église Saint-André",
    "Canal de Chelles"
  ],

  faq: [
    {
      question: "Quelle est votre réactivité pour une intervention à Chelles ?",
      answer:
        "Nous intervenons à Chelles et dans ses alentours sous 24 à 48h pour une demande urgente. Une équipe dédiée sur le secteur Seine-et-Marne Est garantit cette réactivité."
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés (Vigik, digicodes) aux immeubles ?",
      answer:
        "Nos techniciens sont formés et équipés pour respecter strictement vos protocoles d'accès. La gestion des badges ou clés remises est sécurisée et documentée, une procédure standard avec les syndics de Chelles."
    },
     {
      question: "Comment gérez-vous la présence des résidents pendant l’intervention dans les cages d’escalier ?",
      answer: "La communication est clé. Nous convenons avec le syndic des dates et créneaux d’intervention, et nous l’incitons à informer les résidents en amont, par note dans les boîtes aux lettres par exemple. Sur place, notre technicien travaille par tronçons, balise éventuellement la zone en cours de nettoyage et laisse toujours un accès libre et sécurisé aux logements. L’intervention sur un palier est rapide, limitant la gêne à quelques dizaines de minutes par étage."
    },
    {
      question: "Les déplacements pour devis sont-ils payants ?",
      answer:
        "Non. L'établissement d'un devis détaillé et gratuit est notre standard, y compris pour l'ensemble de la commune de Chelles. Cela nous permet d'évaluer précisément vos besoins sur site."
    },
    
    {
      question:
        "Proposez-vous des interventions en urgence, comme après un dégât des eaux ?",
      answer:
        "Absolument. Nous disposons de matériels d'aspiration et de déshumidification puissants pour ce type de sinistre. Une équipe peut se déployer rapidement à Chelles pour limiter les dommages et préparer la remise en état."
    }
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: ""
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Un nettoyage professionnel redonne éclat et hygiène aux moquettes de votre immeuble à Chelles, renforçant l'image de la copropriété et le confort des résidents dès l'entrée dans le hall.",
      whyUsBullets: [
        "Notre connaissance des copropriétés de Chelles, des Bords de Marne au centre-ville, nous permet d'anticiper les contraintes d'accès et les typologies de moquettes rencontrées.",
        "Nous utilisons un matériel professionnel d'injection-extraction qui garantit un nettoyage en profondeur sans abîmer les fibres, pour un résultat pérenne et visible.",
        "Nous organisons les interventions en dehors des heures de pointe si nécessaire et assurons une communication transparente avec le syndic pour limiter toute gêne pour les résidents.",
        "Chaque intervention fait l'objet d'un compte-rendu succinct à l'attention du conseil syndical, attestant des zones traitées et des recommandations d'entretien."
      ],
      uniqueIntro: `<p>À Chelles, les moquettes des halls d'entrée, cages d'escalier et paliers des copropriétés subissent une usure constante. Le passage des résidents, les intempéries suivies depuis l'extérieur, et la proximité d'axes très fréquentés comme la RN34 laissent des traces visibles : poussières incrustées, taches localisées et ternissement général.</p>
<p>Pour un syndic, cet état donne une impression de négligence qui peut affecter la valeur de l'immeuble et générer des réclamations. Dans les bureaux ou les parties communes de résidences, une moquette sale devient un sujet récurrent de mécontentement. Face à ce constat, un nettoyage technique approfondi et planifié est la seule réponse durable pour restaurer un cadre de vie sain et soigné.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic précis de l'état des moquettes et des types de salissures (boues, taches organiques, traces grasses). Nous identifions les zones de fort trafic, souvent situées près des entrées et des ascenseurs. Cette analyse guide notre préparation : protection des surfaces adjacentes, balisage sécurisé et organisation du chantier en concertation avec le syndic pour minimiser la gêne, notamment dans les escaliers étroits des immeubles chellois des années 70-80 ou les halls ouverts des résidences récentes.</p>
<p>La méthode centrale est l'injection-extraction à l'eau chaude, réalisée avec des machines professionnelles. Cette technique permet d'extraire en profondeur les salissures sans détremper le support. Nous portons une attention particulière aux marches d'escalier, aux bordures et aux zones de pivotement devant les portes.</p>
<p>Un séchage rapide, accéléré par une ventilation appropriée, permet une remise en service des espaces sous quelques heures. Pour maintenir le résultat, nous conseillons un nettoyage professionnel tous les 12 à 18 mois dans les zones de passage intensif, comme celles des immeubles proches de la gare RER E.</p>`,
      specificChallenges: [
        "Encroûtement des fibres par les poussières fines et résidus d'hydrocarbures issus du trafic routier dense (RN34, RN3).",
        "Humidité et boues régulières dans les halls d'entrée des résidences, nécessitant un nettoyage fréquent pour éviter les moisissures.",
        "Usure accentuée des moquettes sur les marches d'escalier des cages étroites, difficiles d'accès pour le matériel standard.",
        "Taches tenaces (chewing-gums, traces de canettes) dans les halls des immeubles à forte rotation locative près du centre commercial."
      ],
      faqAdditions: [
        {
          question:
            "Les halls d'immeubles près de la gare RER de Chelles sont très passants. Comment traitez-vous cet encrassement accéléré ?",
          answer:
            "Nous adaptons notre protocole à ces zones de fort passage. Un prétraitement spécifique des taches localisées et un temps d'action prolongé des solutions nettoyantes sont systématiques. La méthode d'injection-extraction à eau chaude est particulièrement efficace pour éliminer les salissures incrustées caractéristiques de ces entrées."
        },
        {
          question:
            "Intervenez-vous dans tous les types de résidences à Chelles, des petites copropriétés aux grands ensembles ?",
          answer:
            "Oui, notre matériel est adapté à différentes configurations. Nous intervenons aussi bien dans les petites copropriétés du centre-ville avec escaliers étroits que dans les grandes résidences des Coudreaux ou des Godets avec de vastes halls. Pour les bureaux ou les locaux commerciaux, la méthode est identique et nous tenons compte des contraintes horaires."
        },
        {
          question:
            "Le nettoyage à l'eau chaude risque-t-il d'abîmer les moquettes anciennes ou de laisser de l'humidité ?",
          answer:
            "Notre procédé d'injection-extraction n'imbibe pas la moquette. Il injecte la solution nettoyante et l'extrait immédiatement avec les salissures. Le taux d'humidité résiduel est faible et permet un séchage en quelques heures. Nous adaptons pression et température selon l'âge et la fragilité de la fibre."
        },
        {
          question:
            "Comment organisez-vous l'intervention pour déranger le moins possible les résidents ?",
          answer:
            "Nous planifions le chantier en étroite coordination avec le syndic. Les parties traitées sont balisées et séchées rapidement pour être rendues accessibles. Nous travaillons généralement en semaine et pouvons intervenir par étages si besoin. Une information préalable des résidents sur les plages horaires et les accès alternatifs est recommandée et nous nous y conformons."
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
        "Un nettoyage professionnel rend votre parking à Chelles propre, non glissant et sécurisé, redonnant de la clarté aux marquages et une image soignée à votre résidence ou entreprise.",
      whyUsBullets: [
        "Notre expérience des parkings de Chelles nous permet d'anticiper les contraintes d'accès et de revêtement.",
        "Nous utilisons un matériel professionnel adapté (autolaveuses, pompes) et des produits puissants pour éliminer la poussière noire grasse spécifique au secteur.",
        "Nous organisons l'intervention par zones et communiquons en amont avec le syndic pour planifier la rotation des véhicules, minimisant ainsi la gêne pour les résidents.",
        "Un compte-rendu post-intervention peut être transmis au gestionnaire, mentionnant les zones traitées et les observations éventuelles sur l'état des structures."
      ],
      uniqueIntro: `<p>Les parkings souterrains et aériens de Chelles sont soumis à un encrassement rapide. La poussière noire issue du trafic de la RN34 et de la RN3, les taches d'huile et de fluides automobiles, ainsi que les marquages au sol effacés deviennent rapidement la norme.</p>
<p>Dans les copropriétés proches de la gare ou du centre commercial, le va-et-vient quotidien accentue ces salissures. Cet état génère une sensation d'inconfort et d'insécurité pour les résidents et utilisateurs, avec des risques de glissade et une luminosité réduite par la saleté sur les murs et plafonds.</p>
<p>Un décrassage technique complet n'est pas qu'une question d'esthétique ; il améliore la sécurité, la lisibilité de la circulation et revalorise l'image globale de l'immeuble.</p>`,
      uniqueDeepDive: `<p>Notre intervention débute par un diagnostic du parking : type de revêtement (béton brut, peinture epoxy), état du réseau d'évacuation des eaux, hauteur sous plafond et configuration des accès. Cette analyse détermine notre méthode.</p>
<p>Nous préparons ensuite le chantier par un balayage mécanique des gros débris, une signalisation appropriée et, en accord avec le syndic, une organisation par zones pour gérer la rotation des véhicules sans vider l'intégralité du parking.</p>
<p>La méthode combine l'utilisation d'une autolaveuse industrielle pour les grandes surfaces et le nettoyage haute pression contrôlé pour les angles, les piliers et les zones très encrassées. Nous appliquons des dégraissants professionnels sur les taches d'huile persistantes.</p>
<p>La gestion des eaux de lavage est primordiale, notamment dans les parkings anciens où les siphons sont souvent inefficaces ; nous utilisons des pompes d'évacuation et des bacs de rétention si nécessaire. Nous privilégions les créneaux en début de semaine ou tôt le matin pour limiter la gêne. Une fréquence de nettoyage annuelle à biannuelle est recommandée pour maintenir un niveau de propreté et de sécurité optimal.</p>`,
      specificChallenges: [
        "Poussière noire abrasive et tenace, mélange de particules fines issues du trafic routier dense et des résidus de pneus.",
        "Taches d'huile et de carburant fréquentes dans les places de stationnement attitrées des parkings de copropriétés résidentielles.",
        "Configuration avec rampes d'accès en pente prononcée et virages serrés, compliquant le passage des machines dans les parkings souterrains anciens.",
        "Gestion complexe des eaux usées dans les ouvrages où les pentes et les siphons sont mal dimensionnés, nécessitant un pompage."
      ],
      faqAdditions: [
        {
          question:
            "La poussière noire revient très vite dans notre parking de Chelles, surtout près des entrées. Que proposez-vous ?",
          answer:
            "Cette poussière grasse est caractéristique des zones proches des axes routiers. Notre protocole inclut un dégraissage préalable et un nettoyage à l'eau chaude sous pression pour décoller ces particules qui adhèrent au béton. Un nettoyage professionnel annuel l'élimine en profondeur et ralentit son ré-encrassement."
        },
        {
          question:
            "Faut-il impérativement vider tout le parking de la copropriété pour votre intervention ?",
          answer:
            "Non, une organisation par zones est notre mode opératoire standard. En coordination avec le syndic, nous établissons un planning de rotation des véhicules. Cela permet de maintenir une partie des places disponibles pendant l'intervention."
        },
        {
          question:
            "Pouvez-vous vraiment faire disparaître les vieilles taches d'huile incrustées dans le sol du parking ?",
          answer:
            "Nous parvenons à les atténuer significativement. L'application d'un dégraissant professionnel à longue durée d'action, suivi d'un nettoyage haute pression, permet de les faire remonter et de les éliminer en grande partie. Certaines taches très anciennes peuvent cependant rester partiellement visibles."
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage, surtout si les canalisations ou le siphon du parking sont peu efficaces ?",
          answer:
            "Nous nous adaptons à l'infrastructure existante. Si l'évacuation est fonctionnelle, nous dirigeons les eaux vers les bouches prévues. Dans le cas contraire, nous déployons des pompes d'évacuation et des bacs de rétention pour collecter les eaux usées et les évacuer conformément à la réglementation."
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
        "Redonnez vie à votre balcon à Chelles : un nettoyage professionnel élimine les dépôts tenaces pour vous offrir un espace extérieur propre, accueillant et qui valorise votre logement.",
      whyUsBullets: [
        "Nous connaissons les spécificités des balcons à Chelles, exposés aux poussières des axes routiers ou à l'humidité des bords de Marne.",
        "Nos techniciens utilisent des méthodes et produits adaptés à chaque support pour un résultat profond sans altération des matériaux.",
        "Nous nous adaptons à votre emploi du temps et intervenons avec discrétion, en gérant proprement les eaux usées pour le voisinage.",
        "Un résultat immédiatement visible vous permet de profiter à nouveau de votre espace extérieur sans délai inutile."
      ],
      uniqueIntro: `<p>À Chelles, les balcons et loggias sont soumis à des agressions constantes. La poussière noire du trafic de la RN34, les dépôts verts d'humidité favorisés par la proximité du canal et de la Marne, les pollens et les fientes d'oiseaux encrassent rapidement les sols, les joints et les garde-corps.</p>
<p>Ajoutez à cela les traces de barbecue, la terre des jardinières et les résidus d'intempéries, et cet espace de vie potentiel devient un lieu abandonné, peu engageant. Cette saleté incrustée donne une impression de négligence et décourage toute utilisation.</p>
<p>Pour les propriétaires et locataires, un nettoyage technique approfondi est la clé pour réinvestir pleinement ce précieux mètre carré extérieur et en tirer à nouveau profit.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par une évaluation des surfaces (carrelage, béton, bois composite) et un état des lieux des salissures. Nous protégeons systématiquement la porte-fenêtre d'accès et proposons de déplacer ou de bâcher les meubles et plantations.</p>
<p>L'étape préparatoire consiste à retirer manuellement les gros débris (feuilles, terre, déchets). Nous traitons ensuite les surfaces avec des nettoyeurs haute pression à basse pression ou des méthodes manuelles adaptées pour ne pas endommager les joints ou le revêtement.</p>
<p>Un soin particulier est apporté aux joints de carrelage, souvent noircis par les moisissures et les dépôts, que nous traitons avec des produits adaptés. Les garde-corps (verre, aluminium, acier) sont nettoyés séparément.</p>
<p>La gestion de l'eau est cruciale : nous dirigeons systématiquement le ruissellement vers l'évacuation prévue et utilisons des techniques d'absorption pour éviter toute coulure chez le voisin du dessous ou sur la façade. Après rinçage, nous accélérons le séchage. Nous conseillons un entretien simple par balayage régulier et un nettoyage complet tous les 12 à 24 mois selon l'exposition.</p>`,
      specificChallenges: [
        "Dépôts noirs gras et tenaces sur les garde-corps et sols, provenant des particules fines du trafic routier.",
        "Développement rapide de mousses et micro-algues vertes sur les joints et surfaces ombragées, dû à l'humidité ambiante.",
        "Nettoyage délicat des loggias fermées, où les salissures sont mêlées à des poussières domestiques, nécessitant une méthode sèche/humide.",
        "Impératif de maîtriser l'écoulement de l'eau pour prévenir les conflits de voisinage dans les immeubles collectifs."
      ],
      faqAdditions: [
      
        {
          question:
            "Comment garantissez-vous que l’eau de nettoyage ne coulera pas chez mon voisin du dessous ou ne salira pas la façade ?",
          answer:
            "Avant de commencer, nous identifions et dégageons la bonde d'évacuation. Nous travaillons toujours en dirigeant l'eau vers cette évacuation et utilisons des raclettes et des chiffons absorbants pour contenir l'excédent d'eau. Nous ne laissons jamais l'eau s'écouler librement par-dessus la bordure."
        },
        {
          question:
            "Les produits que vous utilisez sont-ils sans danger pour mes plantes en pots ou pour un animal de compagnie ?",
          answer:
            "Nous utilisons principalement des détergents neutres ou biodégradables spécifiques au nettoyage des surfaces extérieures. Nous vous conseillons de protéger ou de rentrer les plantes. Les produits sont abondamment rincés. Sur demande, nous pouvons utiliser exclusivement des produits écologiques certifiés."
        },
        {
          question:
            "Combien de temps faut-il attendre pour pouvoir remettre les meubles et utiliser le balcon après votre passage ?",
          answer:
            "Sous des conditions normales de ventilation et de temps sec, le carrelage est praticable en 1 à 2 heures. Pour un séchage complet, notamment des joints, nous recommandons d'attendre 3 à 4 heures avant de remettre les meubles en place."
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
        "Nous éliminons les fientes de pigeons et désinfectons votre balcon à Chelles, pour vous rendre un espace extérieur sain, sécurisé et de nouveau agréable à vivre.",
      whyUsBullets: [
        "Notre connaissance des immeubles de Chelles, notamment ceux situés près des parcs et zones arborées, nous permet d'intervenir avec pertinence.",
        "Nous appliquons un protocole sanitaire rigoureux avec des produits biocides puissants et un conditionnement sécurisé des déchets contaminés.",
        "Nous intervenons rapidement sur ce type d'urgence sanitaire, en coordonnant nos horaires avec les occupants pour une gêne minimale.",
        "Une attestation d'intervention peut être remise pour informer le syndic ou justifier de la remise en état auprès d'un bailleur."
      ],
      uniqueIntro: `<p>À Chelles, la présence de nombreux parcs, de grands arbres et de combles d'immeubles offre un habitat propice aux pigeons, dont les colonies souillent massivement les balcons et loggias. L'accumulation de fientes crée une situation insalubre : odeurs persistantes, surfaces impraticables et risques sanitaires réels.</p>
<p>Pour les résidents, cet espace devient une source de gêne permanente et de conflits potentiels au sein de la copropriété. La simple tentative de nettoyage est insuffisante et dangereuse sans protections adaptées. Seul un traitement professionnel complet, incluant le ramassage des déchets, le nettoyage en profondeur et une désinfection certifiée, permet de restaurer un environnement sain.</p>`,
      uniqueDeepDive: `<p>Notre intervention suit un protocole strict de sécurité et d'hygiène. Après une évaluation des lieux, nos techniciens équipés d'EPI (combinaison, masque FFP2, gants, lunettes) installent des bâches de protection. La première étape consiste à humidifier les déchets secs pour éviter la dispersion de poussières potentiellement pathogènes.</p>
<p>Les fientes et les débris de nids sont ensuite ramassés manuellement, conditionnés dans des sacs étanches et évacués via une filière adaptée. Le nettoyage proprement dit s'effectue avec des détergents spécifiques et des techniques adaptées au support (carrelage, béton, métal) pour décrocher les salissures incrustées.</p>
<p>Ensuite, une désinfection minutieuse est réalisée à l'aide de produits virucides et bactéricides agréés, en respectant scrupuleusement leur temps de contact pour une efficacité maximale. Nous veillons à une gestion stricte des eaux usées pour ne pas contaminer les canalisations communes.</p>
<p>Nous conseillons une aération prolongée du logement après notre passage et pouvons suggérer des solutions de dissuasion (picots, fils tendus) pour prévenir une ré-infestation.</p>`,
      specificChallenges: [
        "Problématique accrue dans les quartiers arborés et sur les immeubles offrant des corniches ou des recoins abrités.",
        "Nettoyage délicat des fientes sèches devenues poussiéreuses, générant un aérosol contaminant nécessitant une humidification préalable et des EPI stricts.",
        "Corrosion active des garde-corps en métal et dégradation des joints de carrelage provoquées par l'acidité des déjections accumulées.",
        "Gestion réglementaire stricte de l'évacuation des déchets biologiques, nécessitant un circuit d'élimination spécifique."
      ],
      faqAdditions: [
        {
          question:
            "Quels sont les risques sanitaires réels et pourquoi ne pas nettoyer moi-même ?",
          answer:
            "Les fientes de pigeons peuvent transmettre des maladies via l'inhalation de poussières contaminées. Leurs nids abritent aussi des acariens et des puces. Un nettoyage sans équipement de protection adapté expose à ces pathogènes. Notre protocole, avec EPI et désinfection adaptée, élimine ces risques pour vous et vos voisins."
        },
        {
          question:
            "Les produits de désinfection que vous utilisez sont-ils sans danger après séchage pour mes enfants ou mes animaux domestiques ?",
          answer:
            "Nous utilisons des désinfectants professionnels autorisés pour les surfaces de contact. Ils sont appliqués selon un dosage précis et rincés après le temps de contact recommandé. Une fois les surfaces sèches, il ne reste pas de résidu actif ou toxique."
        },
        {
          question:
            "Les fientes peuvent-elles avoir endommagé de manière irréversible le carrelage ou la peinture de mon balcon ?",
          answer:
            "L'acidité des déjections peut corroder certains matériaux. Sur la peinture métallique, elle peut provoquer cloques et rouille, et sur le carrelage, dégrader les joints. Notre intervention permet de stopper ce processus et de nettoyer en profondeur. Nous vous signalons ensuite les éventuels travaux de réparation à prévoir."
        },
        {
          question:
            "Que faites-vous des déchets (fientes, nids) que vous ramassez ?",
          answer:
            "Ces déchets biologiques sont conditionnés dans des sacs étanches et évacués via une filière spécialisée, distincte des ordures ménagères. Ils sont pris en charge par un organisme habilité afin de garantir leur élimination sans risque pour l'environnement ou la santé publique."
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
        "Redonnez confort et hygiène à votre intérieur à Chelles : un nettoyage professionnel à domicile élimine en profondeur taches, acariens et odeurs de vos canapés, tapis et matelas.",
      whyUsBullets: [
        "Notre connaissance des intérieurs à Chelles, des appartements du centre aux pavillons avec jardin, nous permet d'anticiper les contraintes d'accès et les types de salissures courantes.",
        "Nous utilisons des injecteurs-extracteurs professionnels et des produits spécifiques pour chaque type de tache et de textile, garantissant un résultat hygiénique.",
        "Nous nous organisons selon vos disponibilités et intervenons avec discrétion, en protégeant vos sols et en limitant au maximum le temps d'immobilisation de votre mobilier.",
        "Le résultat est immédiatement visible : des textiles assainis, une absence d'odeur et un confort retrouvé pour toute la famille."
      ],
      uniqueIntro: `<p>Au quotidien à Chelles, canapés, tapis et matelas accumulent les salissures invisibles et visibles. Entre les repas en famille, les jeux d'enfants, la présence d'animaux domestiques et le va-et-vient quotidien, les taches de nourriture, les traces de boue, les poils et les poussières s'incrustent.</p>
<p>Ces textiles deviennent des nids à acariens et à allergènes, pouvant affecter le confort respiratoire. Les odeurs tenaces (transpiration, urine, renfermé) s'ajoutent à l'inconfort, rendant l'espace de vie moins agréable malgré un ménage régulier.</p>
<p>Un nettoyage professionnel spécifique est la solution pour éliminer ces nuisances en profondeur, assainir votre habitat et retrouver le plaisir d'un mobilier propre et sain.</p>`,
      uniqueDeepDive: `<p>Notre intervention commence par un diagnostic précis du textile (coton, laine, synthétique, cuir) et une identification des types de taches (graisse, protéine, tanin). Cette analyse détermine les produits de prétraitement adaptés, appliqués manuellement sur les souillures tenaces comme le vin, le café ou les traces organiques.</p>
<p>Nous procédons ensuite au nettoyage principal grâce à une machine à injection-extraction à eau chaude. Cette méthode injecte une solution nettoyante et l'extrait immédiatement avec les salissures, sans détremper le rembourrage.</p>
<p>Notre matériel compact est conçu pour les interventions à domicile, s'adaptant aux contraintes d'accès des appartements ou des pavillons de Chelles. Une attention particulière est portée au rinçage neutre pour éviter tout résidu.</p>
<p>Le séchage est accéléré par notre procédé, mais nous vous donnerons des conseils pour l'optimiser (aération, chauffage modéré). Pour un entretien durable, nous recommandons un nettoyage professionnel tous les 12 à 18 mois pour les canapés très utilisés et un dépoussiérage régulier des tapis.</p>`,
      specificChallenges: [
        "Présence importante d'acariens et de poussières domestiques aggravée par une humidité relative élevée.",
        "Taches complexes mélangeant terre des jardins ou balcons, graisses alimentaires et résidus organiques liées à la vie de famille.",
        "Nettoyage délicat des tissus d'ameublement clairs ou des tapis anciens, nécessitant une méthode douce.",
        "Séchage parfois ralenti dans les pièces peu ensoleillées ou les logements moins ventilés, nécessitant des conseils adaptés."
      ],
      faqAdditions: [
        {
          question:
            "Votre nettoyage est-il efficace contre les acariens et les allergènes pour une personne asthmatique ?",
          answer:
            "Oui, notre méthode est très efficace pour réduire la population d'acariens et éliminer leurs déjections, principaux allergènes. L'injection-extraction à eau chaude lessive en profondeur les fibres où ils prolifèrent et l'extraction retire une grande partie des particules allergisantes."
        },
        {
          question:
            "Pouvez-vous venir à bout des odeurs d'urine de chien ou de chat incrustées dans un canapé ou un matelas ?",
          answer:
            "C'est une demande fréquente. Notre protocole inclut l'application d'un enzymeur spécifique qui décompose les cristaux responsables de l'odeur, même ancienne, puis un nettoyage par injection-extraction pour éliminer les résidus."
        },
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir réutiliser son canapé ou remettre le tapis en place ?",
          answer:
            "En conditions normales (pièce aérée, chauffage modéré), un canapé est utilisable en 4 à 6 heures. Un tapis peut être reposé et marcher dessus en 1 à 2 heures, même si un séchage complet peut prendre 12 à 24 heures selon l'épaisseur."
        },
        {
          question:
            "Que devons-nous faire pour préparer la pièce avant votre arrivée ?",
          answer:
            "Nous vous recommandons de libérer au maximum l'accès au meuble (déplacer les petites tables, les objets fragiles) et de retirer les coussins et plaids si possible. Aucune autre préparation n'est nécessaire, nos techniciens apportent toutes les protections pour vos sols et meubles."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;
