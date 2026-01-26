import type { City } from "~/types/geo";

const city: City = {
  name: "Chelles",
  slug: "chelles",
  postalCodes: ["77500"],

  customDescription:
    "Ville majeure de Seine-et-Marne, Chelles bénéficie d'une desserte RER E et d'un important axe routier comme la RN34. L'activité commerciale et résidentielle génère des besoins constants en entretien : nettoyage des moquettes d'immeubles, des parkings souterrains et des balcons exposés aux intempéries, essentiels pour la valeur patrimoniale.",

  hubIntro: `<p>À Chelles, la maintenance immobilière requiert un partenaire de proximité fiable et réactif. Klinova s'impose comme un intervenant rigoureux pour les syndics de copropriété et gestionnaires, assurant une propreté durable des parties communes et espaces privés grâce à des méthodes éprouvées.</p>
<p class="mt-4">Notre partenariat repose sur une gestion globale et protocolée, avec un reporting systématique pour une traçabilité complète des interventions. Nous nous adaptons aux exigences spécifiques de chaque résidence et bâtiment professionnel à Chelles.</p>
<ul>
  <li><strong>Maintenance préventive et curative des surfaces</strong> (sols durs, moquettes, revêtements) pour maintenir l'hygiène et la sécurité des circulations.</li>
  <li><strong>Nettoyage technique des parkings souterrains et des cages d'escalier,</strong> confrontés à l'encrassement et aux dépôts divers.</li>
  <li><strong>Entretien régulier des balcons, loggias et façades légères,</strong> soumis aux aléas climatiques et aux pollutions environnementales.</li>
  <li><strong>Protocole d'intervention flexible pour les urgences</strong> (dégâts des eaux) et les chantiers de fin de travaux, en coordination avec les syndics.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement accru des façades et balcons dû au trafic de la RN34 et de la RN3, associé aux intempéries.",
    "Développement de mousses et dépôts verts sur les sols des terrasses et parkings aériens, favorisé par la proximité du canal et de la Marne.",
    "Fort passage dans les halls d'entrée des résidences près de la gare RER E, nécessitant un entretien très fréquent des moquettes et sols.",
    "Salissures tenaces (hydrocarbures, poussières de frein) dans les parkings souterrains des ensembles immobiliers récents.",
    "Remontées d'humidité et odeurs de renfermé dans les rez-de-chaussée des quartiers Bords de Marne et Abbesses, accentuées lors des épisodes de crues hivernales.",
  ],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

nearbyCities: [
        "montfermeil",
        "gournay-sur-marne",
        "vaires-sur-marne",
        "gagny",
        "champs-sur-marne",
        "neuilly-sur-marne",
        "torcy",
        "le-raincy",
        "livry-gargan",
        "noisy-le-grand"
      ],
  districts: [
    "Bords de Marne",
    
    "Les Coudreaux",
    "La Tuilerie",
    "Les Hauts de Chelles",
    "La Prairie",
    "Le Pont de Chelles",
    
    "Résistance",
    "Maréchal Foch",
    "Grande Prairie",
   
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
    
  ],

  landmarks: [
    "Mairie de Chelles",
    "Gare de Chelles - Gournay (RER E)",
    "Parc du Souvenir Émile-Fouchard",
    "Centre commercial Terre Ciel",
    "Église Saint-André",
    "Canal de Chelles",
  ],

  faq: [
    {
      question: "Quelle est votre réactivité pour une intervention à Chelles ?",
      answer:
        "<p><strong>Nous intervenons sous 24 à 48h pour une demande urgente.</strong> Une équipe dédiée sur le secteur Seine-et-Marne Est garantit cette réactivité à Chelles et dans ses alentours.</p>",
    },
    {
      question:
        "Comment gérez-vous les accès sécurisés (Vigik, digicodes) aux immeubles ?",
      answer:
        "<p><strong>Nos techniciens sont formés et équipés</strong> pour respecter strictement vos protocoles d'accès. La gestion des badges ou clés remises est sécurisée et documentée, une procédure standard avec les syndics de Chelles.</p>",
    },
    {
      question:
        "Comment gérez-vous la présence des résidents pendant l'intervention dans les cages d'escalier ?",
      answer:
        "<p><strong>La communication est clé.</strong> Nous convenons avec le syndic des dates et créneaux d'intervention, et nous l'incitons à informer les résidents en amont. Sur place, notre technicien travaille par tronçons, balise la zone en cours de nettoyage et laisse toujours un accès libre et sécurisé aux logements.</p>",
    },
    {
      question: "Les déplacements pour devis sont-ils payants ?",
      answer:
        "<p><strong>Non, l'établissement d'un devis détaillé est gratuit,</strong> y compris pour l'ensemble de la commune de Chelles. Cela nous permet d'évaluer précisément vos besoins sur site.</p>",
    },
    {
      question:
        "Proposez-vous des interventions en urgence, comme après un dégât des eaux ?",
      answer:
        "<p><strong>Absolument.</strong> Nous disposons de matériels d'aspiration et de déshumidification puissants pour ce type de sinistre. Une équipe peut se déployer rapidement à Chelles pour limiter les dommages et préparer la remise en état.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
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
        "Connaissance des copropriétés de Chelles, des Bords de Marne au centre-ville.",
        "Matériel professionnel d'injection-extraction garantissant un nettoyage en profondeur sans abîmer les fibres.",
        "Organisation des interventions en dehors des heures de pointe pour limiter toute gêne.",
      ],

      uniqueIntro: `<p>À Chelles, les moquettes des halls d'entrée, cages d'escalier et paliers des copropriétés subissent une usure constante. Le passage quotidien des résidents, les intempéries et la proximité d'axes très fréquentés comme la RN34 laissent des traces visibles : poussières incrustées, taches localisées et ternissement général. Pour un syndic, cet état donne une impression de négligence qui peut affecter la valeur de l'immeuble et générer des réclamations.</p>
<p class="mt-4">Dans les bureaux ou les parties communes de résidences, une moquette sale devient un sujet récurrent de mécontentement. <strong>Un nettoyage technique approfondi et planifié</strong> est la seule réponse durable pour restaurer un cadre de vie sain et soigné, valorisant immédiatement l'image de la copropriété et le bien-être des occupants.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic et préparation sur mesure</h3>
<p>Nous évaluons l'état des moquettes et les types de salissures (boues, taches organiques, traces grasses). Nous identifions les zones de fort trafic, souvent situées près des entrées et des ascenseurs. <strong>Protection des surfaces adjacentes, balisage sécurisé</strong> et organisation du chantier en concertation avec le syndic pour minimiser la gêne.</p>

<h3>2. Injection-extraction à l'eau chaude</h3>
<p>Cette technique permet d'extraire en profondeur les salissures sans détremper le support. Nous portons une attention particulière aux marches d'escalier, aux bordures et aux zones de pivotement devant les portes. <strong>Passages multiples sur les zones critiques</strong> pour un résultat optimal.</p>

<h3>3. Séchage rapide et recommandations</h3>
<p>Le séchage est accéléré par une ventilation appropriée, permettant une remise en service des espaces sous quelques heures. <strong>Fréquence recommandée : 12 à 18 mois</strong> dans les zones de passage intensif, comme celles des immeubles proches de la gare RER E.</p>`,

      specificChallenges: [
        "Encroûtement des fibres par les poussières fines et résidus d'hydrocarbures issus du trafic routier dense (RN34, RN3).",
        "Humidité et boues régulières dans les halls d'entrée des résidences, nécessitant un nettoyage fréquent pour éviter les moisissures.",
        "Usure accentuée des moquettes sur les marches d'escalier des cages étroites, difficiles d'accès pour le matériel standard.",
        "Taches tenaces (chewing-gums, traces de canettes) dans les halls des immeubles à forte rotation locative près du centre commercial.",
      ],

      faqAdditions: [
        {
          question:
            "Les halls d'immeubles près de la gare RER de Chelles sont très passants. Comment traitez-vous cet encrassement accéléré ?",
          answer:
            "<p><strong>Nous adaptons notre protocole à ces zones de fort passage.</strong> Un prétraitement spécifique des taches localisées et un temps d'action prolongé des solutions nettoyantes sont systématiques. L'injection-extraction à eau chaude élimine efficacement les salissures incrustées.</p>",
        },
        {
          question:
            "Intervenez-vous dans tous les types de résidences à Chelles, des petites copropriétés aux grands ensembles ?",
          answer:
            "<p><strong>Oui, notre matériel s'adapte à toutes configurations.</strong> Petites copropriétés du centre-ville avec escaliers étroits ou grandes résidences des Coudreaux avec vastes halls, nous ajustons notre équipement et méthode selon vos contraintes.</p>",
        },
        {
          question:
            "Le nettoyage à l'eau chaude risque-t-il d'abîmer les moquettes anciennes ou de laisser de l'humidité ?",
          answer:
            "<p><strong>Notre procédé d'injection-extraction n'imbibe pas la moquette.</strong> Il injecte la solution nettoyante et l'extrait immédiatement avec les salissures. Le taux d'humidité résiduel est faible, permettant un séchage en quelques heures. Nous adaptons pression et température selon la fragilité de la fibre.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention pour déranger le moins possible les résidents ?",
          answer:
            "<p><strong>Nous planifions le chantier en coordination étroite avec le syndic.</strong> Les parties traitées sont balisées et séchées rapidement pour être rendues accessibles. Nous travaillons généralement en semaine et pouvons intervenir par étages si besoin, avec une information préalable des résidents.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Un nettoyage professionnel rend votre parking à Chelles propre, non glissant et sécurisé, redonnant de la clarté aux marquages et une image soignée à votre résidence ou entreprise.",
      whyUsBullets: [
        "Expérience des parkings de Chelles avec anticipation des contraintes d'accès et de revêtement.",
        "Matériel professionnel adapté (autolaveuses, pompes) et produits puissants pour éliminer la poussière noire grasse.",
        "Organisation par zones avec communication en amont pour planifier la rotation des véhicules.",
      ],

      uniqueIntro: `<p>Les parkings souterrains et aériens de Chelles accumulent rapidement les salissures. La poussière noire issue du trafic de la RN34 et de la RN3, les taches d'huile et de fluides automobiles, ainsi que les marquages au sol effacés créent un environnement peu accueillant. Dans les copropriétés proches de la gare ou du centre commercial, le va-et-vient quotidien accentue ces problèmes.</p>
<p class="mt-4">Cet état génère une sensation d'inconfort et d'insécurité pour les résidents et utilisateurs, avec des risques de glissade et une luminosité réduite par la saleté sur les murs et plafonds. <strong>Un décrassage technique complet améliore la sécurité, la lisibilité de la circulation</strong> et revalorise l'image globale de l'immeuble, créant un espace souterrain plus rassurant au quotidien.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic du parking et préparation</h3>
<p>Évaluation du revêtement (béton brut, peinture epoxy), état du réseau d'évacuation des eaux, hauteur sous plafond et configuration des accès. <strong>Balayage mécanique des gros débris, signalisation appropriée</strong> et organisation par zones pour gérer la rotation des véhicules sans vider l'intégralité du parking.</p>

<h3>2. Nettoyage mécanique combiné</h3>
<p>Utilisation d'une autolaveuse industrielle pour les grandes surfaces et nettoyage haute pression contrôlé pour les angles, piliers et zones très encrassées. <strong>Application de dégraissants professionnels</strong> sur les taches d'huile persistantes pour un traitement en profondeur.</p>

<h3>3. Gestion des eaux et finitions</h3>
<p>La gestion des eaux de lavage est primordiale, notamment dans les parkings anciens où les siphons sont souvent inefficaces. <strong>Utilisation de pompes d'évacuation et de bacs de rétention</strong> si nécessaire. Interventions privilégiées en début de semaine ou tôt le matin pour limiter la gêne.</p>`,

      specificChallenges: [
        "Poussière noire abrasive et tenace, mélange de particules fines issues du trafic routier dense et des résidus de pneus.",
        "Taches d'huile et de carburant fréquentes dans les places de stationnement attitrées des parkings de copropriétés résidentielles.",
        "Configuration avec rampes d'accès en pente prononcée et virages serrés, compliquant le passage des machines dans les parkings souterrains anciens.",
        "Gestion complexe des eaux usées dans les ouvrages où les pentes et les siphons sont mal dimensionnés, nécessitant un pompage.",
      ],

      faqAdditions: [
        {
          question:
            "La poussière noire revient très vite dans notre parking de Chelles, surtout près des entrées. Que proposez-vous ?",
          answer:
            "<p><strong>Cette poussière grasse est caractéristique des zones proches des axes routiers.</strong> Notre protocole inclut un dégraissage préalable et un nettoyage à l'eau chaude sous pression pour décoller ces particules qui adhèrent au béton. Un nettoyage annuel l'élimine en profondeur et ralentit son ré-encrassement.</p>",
        },
        {
          question:
            "Faut-il impérativement vider tout le parking de la copropriété pour votre intervention ?",
          answer:
            "<p><strong>Non, une organisation par zones est notre mode opératoire standard.</strong> En coordination avec le syndic, nous établissons un planning de rotation des véhicules. Cela permet de maintenir une partie des places disponibles pendant l'intervention.</p>",
        },
        {
          question:
            "Pouvez-vous vraiment faire disparaître les vieilles taches d'huile incrustées dans le sol du parking ?",
          answer:
            "<p><strong>Nous parvenons à les atténuer significativement.</strong> L'application d'un dégraissant professionnel à longue durée d'action, suivi d'un nettoyage haute pression, permet de les faire remonter et de les éliminer en grande partie. Certaines taches très anciennes peuvent cependant rester partiellement visibles.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage, surtout si les canalisations ou le siphon du parking sont peu efficaces ?",
          answer:
            "<p><strong>Nous nous adaptons à l'infrastructure existante.</strong> Si l'évacuation est fonctionnelle, nous dirigeons les eaux vers les bouches prévues. Dans le cas contraire, nous déployons des pompes d'évacuation et des bacs de rétention pour collecter les eaux usées et les évacuer conformément à la réglementation.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Redonnez vie à votre balcon à Chelles : un nettoyage professionnel élimine les dépôts tenaces pour vous offrir un espace extérieur propre, accueillant et qui valorise votre logement.",
      whyUsBullets: [
        "Connaissance des balcons à Chelles, exposés aux poussières des axes routiers ou à l'humidité des bords de Marne.",
        "Méthodes et produits adaptés à chaque support pour un résultat profond sans altération des matériaux.",
        "Adaptation à votre emploi du temps et intervention discrète avec gestion propre des eaux usées.",
      ],

      uniqueIntro: `<p>À Chelles, les balcons et loggias sont soumis à des agressions constantes. La poussière noire du trafic de la RN34, les dépôts verts d'humidité favorisés par la proximité du canal et de la Marne, les pollens et les fientes d'oiseaux encrassent rapidement les sols, les joints et les garde-corps. Ajoutez les traces de barbecue, la terre des jardinières et les résidus d'intempéries, et cet espace de vie potentiel devient un lieu abandonné, peu engageant.</p>
<p class="mt-4">Cette saleté incrustée donne une impression de négligence et décourage toute utilisation. Vous finissez par ne plus sortir, votre mobilier reste bâché et votre balcon sert de débarras. <strong>Un nettoyage technique approfondi</strong> est la clé pour réinvestir pleinement ce précieux mètre carré extérieur, retrouver le plaisir de prendre un café au soleil et valoriser votre bien immobilier.</p>`,

      uniqueDeepDive: `<h3>1. Évaluation et protection</h3>
<p>Évaluation des surfaces (carrelage, béton, bois composite) et état des lieux des salissures. <strong>Protection systématique de la porte-fenêtre</strong> et déplacement ou bâchage des meubles et plantations. Retrait manuel des gros débris (feuilles, terre, déchets).</p>

<h3>2. Nettoyage adapté au support</h3>
<p>Traitement des surfaces avec des nettoyeurs haute pression à basse pression ou des méthodes manuelles adaptées pour ne pas endommager les joints ou le revêtement. <strong>Soin particulier aux joints de carrelage,</strong> souvent noircis par les moisissures et les dépôts. Les garde-corps (verre, aluminium, acier) sont nettoyés séparément.</p>

<h3>3. Gestion de l'eau et finitions</h3>
<p>Nous dirigeons systématiquement le ruissellement vers l'évacuation prévue et utilisons des techniques d'absorption pour éviter toute coulure chez le voisin du dessous ou sur la façade. <strong>Accélération du séchage après rinçage.</strong> Conseils d'entretien simple : balayage régulier et nettoyage complet tous les 12 à 24 mois selon l'exposition.</p>`,

      specificChallenges: [
        "Dépôts noirs gras et tenaces sur les garde-corps et sols, provenant des particules fines du trafic routier.",
        "Développement rapide de mousses et micro-algues vertes sur les joints et surfaces ombragées, dû à l'humidité ambiante.",
        "Nettoyage délicat des loggias fermées, où les salissures sont mêlées à des poussières domestiques, nécessitant une méthode sèche/humide.",
        "Impératif de maîtriser l'écoulement de l'eau pour prévenir les conflits de voisinage dans les immeubles collectifs.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyeur haute pression peut-il endommager mon carrelage ou faire sauter les joints ?",
          answer:
            "<p><strong>Nous adaptons la pression selon l'état de votre support.</strong> Sur les joints fragiles ou les carrelages anciens, nous privilégions une méthode manuelle avec brossage et produits adaptés. Notre objectif est de nettoyer en profondeur sans fragiliser votre balcon.</p>",
        },
        {
          question:
            "Comment garantissez-vous que l'eau de nettoyage ne coulera pas chez mon voisin du dessous ou ne salira pas la façade ?",
          answer:
            "<p><strong>Avant de commencer, nous identifions et dégageons la bonde d'évacuation.</strong> Nous travaillons en dirigeant l'eau vers cette évacuation et utilisons des raclettes et des chiffons absorbants pour contenir l'excédent. Nous ne laissons jamais l'eau s'écouler librement.</p>",
        },
        {
          question:
            "Les produits que vous utilisez sont-ils sans danger pour mes plantes en pots ou pour un animal de compagnie ?",
          answer:
            "<p><strong>Nous utilisons principalement des détergents neutres ou biodégradables.</strong> Nous vous conseillons de protéger ou de rentrer les plantes. Les produits sont abondamment rincés. Sur demande, nous pouvons utiliser exclusivement des produits écologiques certifiés.</p>",
        },
        {
          question:
            "Combien de temps faut-il attendre pour pouvoir remettre les meubles et utiliser le balcon après votre passage ?",
          answer:
            "<p><strong>Sous des conditions normales de ventilation et de temps sec,</strong> le carrelage est praticable en 1 à 2 heures. Pour un séchage complet, notamment des joints, nous recommandons d'attendre 3 à 4 heures avant de remettre les meubles en place.</p>",
        },
      ],

      ctaOverride: "",
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Nous éliminons les fientes de pigeons et désinfectons votre balcon à Chelles, pour vous rendre un espace extérieur sain, sécurisé et de nouveau agréable à vivre.",
      whyUsBullets: [
        "Connaissance des immeubles de Chelles, notamment ceux situés près des espaces arborés et du canal.",
        "Protocole sanitaire rigoureux avec produits biocides puissants et conditionnement sécurisé des déchets contaminés.",
        "Intervention rapide sur ce type d'urgence sanitaire, en coordonnant nos horaires avec les occupants.",
      ],

      uniqueIntro: `<p>À Chelles, la présence de nombreux espaces verts et de grands arbres offre un habitat propice aux pigeons, dont les colonies souillent massivement les balcons et loggias. L'accumulation de fientes crée une situation insalubre : odeurs persistantes, surfaces impraticables et risques sanitaires réels. Pour les résidents, cet espace devient une source de gêne permanente et de conflits potentiels au sein de la copropriété.</p>
<p class="mt-4">Vous n'osez plus ouvrir votre porte-fenêtre, l'odeur est insupportable et vous craignez pour votre santé et celle de vos enfants. La simple tentative de nettoyage est insuffisante et dangereuse sans protections adaptées. <strong>Seul un traitement professionnel complet</strong> —ramassage des déchets, nettoyage en profondeur et désinfection certifiée— permet de restaurer un environnement sain et de retrouver l'usage de votre balcon en toute sécurité.</p>`,

      uniqueDeepDive: `<h3>1. Mise en sécurité et protection</h3>
<p>Nos techniciens équipés d'EPI (combinaison, masque <strong>FFP2</strong>, gants, lunettes) installent des bâches de protection. <strong>Humidification des déchets secs</strong> pour éviter la dispersion de poussières potentiellement pathogènes.</p>

<h3>2. Ramassage et nettoyage technique</h3>
<p>Les fientes et les débris de nids sont ramassés manuellement, conditionnés dans des sacs étanches et évacués par nos soins. Nettoyage avec des détergents spécifiques et techniques adaptées au support (carrelage, béton, métal) pour décrocher les salissures incrustées.</p>

<h3>3. Désinfection virucide complète</h3>
<p>Désinfection minutieuse à l'aide de produits virucides et bactéricides agréés, en respectant scrupuleusement leur temps de contact pour une efficacité maximale. <strong>Gestion stricte des eaux usées</strong> pour ne pas contaminer les canalisations communes. Aération prolongée du logement conseillée après notre passage.</p>`,

      specificChallenges: [
        "Problématique accrue dans les quartiers arborés et sur les immeubles offrant des corniches ou des recoins abrités.",
        "Nettoyage délicat des fientes sèches devenues poussiéreuses, générant un aérosol contaminant nécessitant une humidification préalable et des EPI stricts.",
        "Corrosion active des garde-corps en métal et dégradation des joints de carrelage provoquées par l'acidité des déjections accumulées.",
        "Gestion réglementaire stricte de l'évacuation des déchets biologiques, nécessitant un circuit d'élimination spécifique.",
      ],

      faqAdditions: [
        {
          question:
            "Quels sont les risques sanitaires réels et pourquoi ne pas nettoyer moi-même ?",
          answer:
            "<p><strong>Les fientes de pigeons peuvent transmettre des maladies</strong> via l'inhalation de poussières contaminées. Leurs nids abritent aussi des acariens et des puces. Un nettoyage sans équipement de protection adapté expose à ces pathogènes. Notre protocole, avec EPI et désinfection adaptée, élimine ces risques.</p>",
        },
        {
          question:
            "Les produits de désinfection que vous utilisez sont-ils sans danger après séchage pour mes enfants ou mes animaux domestiques ?",
          answer:
            "<p><strong>Nous utilisons des désinfectants professionnels autorisés pour les surfaces de contact.</strong> Ils sont appliqués selon un dosage précis et rincés après le temps de contact recommandé. Une fois les surfaces sèches, il ne reste pas de résidu actif ou toxique.</p>",
        },
        {
          question:
            "Les fientes peuvent-elles avoir endommagé de manière irréversible le carrelage ou la peinture de mon balcon ?",
          answer:
            "<p><strong>L'acidité des déjections peut corroder certains matériaux.</strong> Sur la peinture métallique, elle peut provoquer cloques et rouille, et sur le carrelage, dégrader les joints. Notre intervention permet de stopper ce processus et de nettoyer en profondeur. Nous vous signalons les éventuels travaux de réparation à prévoir.</p>",
        },
        {
          question:
            "Que faites-vous des déchets (fientes, nids) que vous ramassez ?",
          answer:
            "<p><strong>L'évacuation est strictement encadrée :</strong> nous ne laissons aucun déchet sur place. Les résidus sont emballés hermétiquement et transportés en déchetterie selon les normes sanitaires en vigueur.</p>",
},
],
  ctaOverride: "",
},

// =========================
// SERVICE 5 – CANAPÉS / TAPIS / MATELAS
// =========================
{
  serviceKey: "canapes-tapis",
  heroDescription:
    "Redonnez confort et hygiène à votre intérieur à Chelles : un nettoyage professionnel à domicile élimine en profondeur taches, acariens et odeurs de vos canapés, tapis et matelas.",
  whyUsBullets: [
    "Connaissance des intérieurs à Chelles, des appartements du centre aux pavillons avec jardin.",
    "Injecteurs-extracteurs professionnels et produits spécifiques pour chaque type de tache et de textile.",
    "Organisation selon vos disponibilités avec intervention discrète et protection de vos sols.",
  ],

  uniqueIntro: `<p>Au quotidien à Chelles, canapés, tapis et matelas accumulent les salissures invisibles et visibles. Entre les repas en famille, les jeux d'enfants, la présence d'animaux domestiques et le va-et-vient quotidien, les taches de nourriture, les traces de boue, les poils et les poussières s'incrustent. Votre canapé a perdu ses couleurs, le tapis sent mauvais et vous vous réveillez avec le nez qui coule.</p>
<p class="mt-4">Ces textiles deviennent des nids à acariens et à allergènes, pouvant affecter le confort respiratoire. Les odeurs tenaces (transpiration, urine, renfermé) s'ajoutent à l'inconfort, rendant l'espace de vie moins agréable malgré un ménage régulier. <strong>Un nettoyage professionnel spécifique</strong> élimine ces nuisances en profondeur, assainit votre habitat et vous permet de retrouver le plaisir d'un intérieur frais, sain et accueillant pour toute la famille.</p>`,
  uniqueDeepDive: `<h3>1. Diagnostic et pré-traitement</h3>
<p>Diagnostic précis du textile (coton, laine, synthétique, cuir) et identification des types de taches (graisse, protéine, tanin). <strong>Application manuelle de produits de prétraitement</strong> adaptés sur les souillures tenaces comme le vin, le café ou les traces organiques.</p>
<h3>2. Injection-extraction professionnelle</h3>
<p>Nettoyage principal grâce à une machine à injection-extraction à eau chaude. Cette méthode injecte une solution nettoyante et l'extrait immédiatement avec les salissures, sans détremper le rembourrage. <strong>Matériel compact conçu pour les interventions à domicile,</strong> s'adaptant aux contraintes d'accès des appartements ou des pavillons de Chelles.</p>
<h3>3. Séchage optimisé et conseils</h3>
<p>Le séchage est accéléré par notre procédé, mais nous vous donnons des conseils pour l'optimiser (aération, chauffage modéré). <strong>Pour un entretien durable, nettoyage professionnel tous les 12 à 18 mois</strong> pour les canapés très utilisés et dépoussiérage régulier des tapis.</p>`,
  specificChallenges: [
    "Présence importante d'acariens et de poussières domestiques aggravée par une humidité relative élevée.",
    "Taches complexes mélangeant terre des jardins ou balcons, graisses alimentaires et résidus organiques liées à la vie de famille.",
    "Nettoyage délicat des tissus d'ameublement clairs ou des tapis anciens, nécessitant une méthode douce.",
    "Séchage parfois ralenti dans les pièces peu ensoleillées ou les logements moins ventilés, nécessitant des conseils adaptés.",
  ],

  faqAdditions: [
    {
      question:
        "Votre nettoyage est-il efficace contre les acariens et les allergènes pour une personne asthmatique ?",
      answer:
        "<p><strong>Oui, notre méthode est très efficace</strong> pour réduire la population d'acariens et éliminer leurs déjections, principaux allergènes. L'injection-extraction à eau chaude lessive en profondeur les fibres où ils prolifèrent et l'extraction retire une grande partie des particules allergisantes.</p>",
    },
    {
      question:
        "Pouvez-vous venir à bout des odeurs d'urine de chien ou de chat incrustées dans un canapé ou un matelas ?",
      answer:
        "<p><strong>C'est une demande fréquente.</strong> Notre protocole inclut l'application d'un enzymeur spécifique qui décompose les cristaux responsables de l'odeur, même ancienne, puis un nettoyage par injection-extraction pour éliminer les résidus. Le résultat est généralement radical.</p>",
    },
    {
      question:
        "Combien de temps faut-il attendre avant de pouvoir réutiliser son canapé ou remettre le tapis en place ?",
      answer:
        "<p><strong>En conditions normales (pièce aérée, chauffage modéré),</strong> un canapé est utilisable en 4 à 6 heures. Un tapis peut être reposé et marcher dessus en 1 à 2 heures, même si un séchage complet peut prendre 12 à 24 heures selon l'épaisseur.</p>",
    },
    {
      question:
        "Que devons-nous faire pour préparer la pièce avant votre arrivée ?",
      answer:
        "<p><strong>Libérez l'accès au meuble</strong> (déplacer les petites tables, les objets fragiles) et retirez les coussins et plaids si possible. Aucune autre préparation n'est nécessaire, nos techniciens apportent toutes les protections pour vos sols et meubles.</p>",
    },
  ],

  ctaOverride: "",
},

// =========================
// SERVICE – TERRASSES
// =========================
{
      serviceKey: "terrasses",
      heroDescription:
        "Traitement complet de votre terrasse avec adaptation au support, élimination des mousses et dépôts verts, et application d'un produit préventif pour prolonger la propreté obtenue.",
      whyUsBullets: [
        "Connaissance des quartiers pavillonnaires des Coudreaux et de Chantereine, avec leurs terrasses exposées à l'humidité des jardins arborés.",
        "Maîtrise des traitements différenciés selon les supports : dalles béton des pavillons années 70, carrelage grès cérame ou bois composite des rénovations récentes.",
        "Protection systématique du mobilier et des plantations, gestion de l'évacuation d'eau vers le jardin ou les points d'écoulement existants.",
      ],
      uniqueIntro: `<p>Dans les <strong>quartiers pavillonnaires des Coudreaux et de Chantereine</strong>, les terrasses subissent une dégradation progressive liée à l'environnement végétal dense. L'ombre portée par les arbres des jardins, combinée à l'humidité persistante propre à cette zone proche du bois des Coudreaux et des bords de Marne, favorise l'apparition de mousses et de lichens sur les surfaces exposées. Ces dépôts verdâtres s'installent d'abord dans les joints, puis colonisent progressivement l'ensemble du revêtement.</p>

<p class="mt-4">Sur les <strong>dalles béton</strong> caractéristiques des pavillons construits dans les années 70-80, ou sur les <strong>terrasses grès cérame et bois composite</strong> des rénovations récentes, cette prolifération rend le sol glissant et visuellement dégradé. L'espace extérieur perd son attrait, les repas dehors deviennent moins fréquents, et la terrasse finit par servir uniquement de passage vers le jardin.</p>

<p class="mt-4">Une intervention adaptée au matériau permet de retrouver une surface saine et praticable. Le diagnostic préalable identifie le type de support, l'étendue des dépôts et les zones à protéger avant tout traitement mécanique ou chimique.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Le mobilier de jardin, les jardinières et les plantes en pot sont déplacés ou bâchés. Les menuiseries des baies vitrées et portes-fenêtres reçoivent une protection contre les projections. Un balayage élimine les feuilles mortes, la terre accumulée et les débris végétaux avant le traitement.</p>

<h3>Nettoyage et traitement adapté</h3>
<p>Un produit spécifique au support est appliqué : formulation à pH neutre pour le bois composite, solution alcaline désincrustante pour les dalles minérales ou le grès cérame. Le brossage manuel ou mécanique décolle les mousses et lichens installés. La pression de rinçage est ajustée selon la porosité du matériau pour préserver les joints et la surface.</p>

<h3>Finition et prévention</h3>
<p>L'eau de rinçage est dirigée vers les points d'écoulement existants ou vers le jardin. Un traitement anti-mousse préventif est appliqué sur les zones les plus exposées à l'ombre et à l'humidité. Le séchage naturel s'effectue en quelques heures selon les conditions météo, avec des conseils d'entretien saisonnier transmis en fin d'intervention.</p>`,
      specificChallenges: [
        "Dalles béton des pavillons années 70-80 : joints poreux favorisant l'enracinement des mousses.",
        "Terrasses bois composite sensibles à la pression excessive et aux produits chlorés ou acides.",
        "Carrelage grès cérame avec relief : encrassement dans les micro-aspérités difficile à déloger.",
        "Zones ombragées par les arbres des jardins arborés des Coudreaux et Chantereine : humidité persistante.",
        "Accès par l'intérieur de la maison pour certaines terrasses arrière de pavillons mitoyens.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les dalles béton des pavillons des Coudreaux sans endommager les joints ?",
          answer:
            "<p>Les dalles béton nécessitent un traitement en deux temps. D'abord un produit désincrustant alcalin adapté aux supports minéraux poreux, laissé agir pour décoller les mousses. Puis un rinçage à pression modérée qui élimine les résidus végétaux tout en préservant l'intégrité des joints.</p>",
        },
        {
          question:
            "Ma terrasse est couverte de traces noires et vertes depuis plusieurs années, est-ce récupérable ?",
          answer:
            "<p>Les dépôts anciens de mousses, algues et lichens laissent parfois des traces résiduelles sur les supports poreux, mais l'essentiel de la coloration disparaît après traitement. Un brossage mécanique combiné au produit adapté retire la couche organique. L'application d'un anti-mousse préventif ralentit significativement la réapparition.</p>",
        },
        {
          question:
            "Quel produit utilisez-vous sur une terrasse bois composite pour ne pas altérer sa teinte d'origine ?",
          answer:
            "<p>Le bois composite reçoit un traitement à pH neutre, sans chlore ni acide, qui préserve les pigments du matériau. Le produit agit sur les micro-organismes sans attaquer les fibres synthétiques. Le rinçage s'effectue à basse pression pour éviter tout marquage de la surface.</p>",
        },
        {
          question:
            "Faut-il éviter le nettoyeur haute pression sur certaines terrasses et comment décidez-vous de la méthode ?",
          answer:
            "<p>Le diagnostic initial détermine la résistance du support. Les dalles béton ou le carrelage grès cérame supportent une pression contrôlée. Le bois, le composite et les joints fragiles imposent un nettoyage doux ou une pression très réduite. La méthode est systématiquement adaptée au matériau identifié lors de l'évaluation préalable.</p>",
        },
      ],
      ctaOverride: "",
    },



// =========================
// SERVICE – NETTOYAGE APPARTEMENT / MAISON (remise en état)
// =========================
{
  serviceKey: "nettoyage-appartement-maison",
  heroDescription:
    "Remise en état d’appartement ou de maison à Chelles : nettoyage complet, finitions soignées et protocole structuré pour retrouver un logement propre, sain et présentable, sans improvisation.",
  whyUsBullets: [
    "Approche “remise en état” : priorisation des zones, méthode structurée, contrôle qualité en fin d’intervention.",
    "Intervention adaptée au contexte (emménagement/déménagement, état d’usage, logement resté fermé, location).",
    "Devis clair : périmètre, contraintes, et niveau d’encrassement pris en compte avant le démarrage.",
  ],

  uniqueIntro: `<p>Le “nettoyage appartement” est souvent mal compris : entre un ménage d’entretien et une remise en état, l’écart est énorme. À Chelles, on nous appelle surtout quand il faut repartir propre : logement avant état des lieux, remise en état après location, maison restée fermée, ou nettoyage approfondi après une période d’usage intensif. Dans ces cas, un simple passage rapide ne suffit pas : les détails (graisses, sanitaires, vitres, plinthes, angles) font toute la différence.</p>
<p class="mt-4">Notre objectif est simple : rendre le logement <strong>net, sain et présentable</strong>, avec une méthode structurée. On traite en priorité les zones critiques (cuisine, salle de bain, sols), puis on déroule un plan de finitions pour éviter les oublis et livrer un résultat cohérent, sans “zones laissées de côté”.</p>`,

  uniqueDeepDive: `<h3>1. Cadrage et priorisation avant intervention</h3>
<p>Nous définissons le périmètre (pièces, vitres, cuisine, sanitaires, éléments spécifiques) et évaluons le niveau d’encrassement. Nous priorisons les zones qui concentrent l’hygiène et la perception : cuisine, salle de bain, sols, points de contact. <strong>Le plan d’action est clair</strong> avant de démarrer, pour éviter l’improvisation.</p>

<h3>2. Nettoyage en profondeur des zones critiques</h3>
<p>Décrassage ciblé (graisses, traces, dépôts calcaires), nettoyage des sanitaires, traitement des surfaces en cuisine et sur les points de contact. Les produits et accessoires sont adaptés aux matériaux pour éviter rayures ou dégradations. <strong>La logique est “propre visuel + hygiène réelle”</strong>.</p>

<h3>3. Finitions et contrôle qualité</h3>
<p>Une fois les zones critiques stabilisées, nous passons aux finitions : plinthes, interrupteurs, poignées, angles, vitrages accessibles, et uniformisation du rendu. <strong>Contrôle final</strong> pour vérifier la cohérence et pointer les éventuelles limites (taches anciennes, matériaux marqués, peinture fatiguée).</p>`,

  specificChallenges: [
    "Écart de perception entre “ménage” et “remise en état” : nécessité de cadrer un périmètre clair et un niveau de finition attendu.",
    "Graisses et dépôts incrustés en cuisine (crédence, hotte, zones autour des plaques) demandant un décrassage ciblé.",
    "Calcaire et traces tenaces dans les sanitaires, nécessitant une méthode progressive pour éviter d’endommager les surfaces.",
    "Gestion du temps : prioriser les zones à fort impact (hygiène + visuel) pour livrer un résultat homogène.",
  ],

  faqAdditions: [
    {
      question:
        "Quelle différence entre un ménage classique et votre prestation “nettoyage appartement / maison” ?",
      answer:
        "<p><strong>Nous faisons une remise en état, pas un ménage d’entretien.</strong> L’objectif est de retrouver un logement net et présentable : décrassage des zones critiques, finitions (plinthes, détails), et contrôle final. Le périmètre est cadré avant intervention pour éviter les malentendus.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir pour un état des lieux ou un départ de locataire ?",
      answer:
        "<p><strong>Oui, c’est un cas fréquent.</strong> Nous priorisons les zones qui comptent le plus lors d’un état des lieux (sanitaires, cuisine, sols, vitres accessibles) et nous avançons avec une logique de finitions pour rendre un logement propre et cohérent.</p>",
    },
    {
      question:
        "Faites-vous les vitres et les traces sur les murs ?",
      answer:
        "<p><strong>Les vitrages accessibles peuvent être inclus</strong> selon le périmètre convenu. Pour les murs, nous pouvons traiter les traces courantes et les marques superficielles, mais certaines salissures ou peintures fragiles peuvent limiter le rendu : on le précise avant ou pendant l’intervention.</p>",
    },
    {
      question:
        "Comment fixez-vous le prix si l’état du logement est très variable ?",
      answer:
        "<p><strong>Le tarif dépend surtout du niveau d’encrassement et du périmètre.</strong> Nous cadrons les pièces concernées, les options (vitres, intérieur placards, électroménager accessible) et les contraintes d’accès. L’objectif est un devis clair et réaliste avant de démarrer.</p>",
    },
  ],

  ctaOverride: "",
},



],
};
export default city;