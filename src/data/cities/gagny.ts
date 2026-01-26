
import type { City } from "~/types/geo";

const city: City = {
  name: "Gagny",
  slug: "gagny",
  postalCodes: ["93220"],

  customDescription:
    "Entre les coteaux pavillonnaires de l'Époque et les grandes copropriétés de l'est de la ville, Gagny présente une diversité de surfaces à entretenir. La proximité des carrières et des nombreux espaces boisés (Arboretum, Bois de l'Étoile) accentue l'exposition des immeubles aux poussières de terre, aux mousses et à l'humidité, exigeant une maintenance technique régulière.",

  hubIntro: `<p>Gagny se distingue par une topographie vallonnée et une mixité urbaine forte, alternant zones pavillonnaires calmes (Maison Blanche, Franceville) et ensembles collectifs denses (Jean Moulin, les Peupliers). Pour les syndics et gestionnaires, cela implique de gérer des problématiques variées : l'humidité des sous-sols en pied de coteau, l'encrassement des halls par la végétation environnante ou l'entretien des parkings vieillissants.</p>
<p class="mt-4">Klinova intervient comme un partenaire de proximité, capable d'adapter ses protocoles à cette réalité locale. Nous déployons des solutions techniques pour rénover les sols encrassés, assainir les moquettes des parties communes et sécuriser les accès véhicules, tout en respectant la tranquillité des zones résidentielles.</p>
<ul>
  <li><strong>Maîtrise des terrains en pente :</strong> gestion logistique adaptée pour les résidences situées sur les coteaux ou disposant de rampes de parking difficiles.</li>
  <li><strong>Traitements anti-mousse et humidité :</strong> expertise spécifique pour les balcons et terrasses exposés au nord ou proches des étangs.</li>
  <li><strong>Suivi rigoureux :</strong> rapports d'intervention avec photos pour justifier les prestations auprès des copropriétaires exigeants.</li>
</ul>`,

  citySpecificChallenges: [
    "Apport constant de débris végétaux et de terre dans les halls d'entrée dû à la proximité immédiate des grands parcs (Courbet, Arboretum, Bois de l'Étoile).",
    "Gestion de l'humidité remontante dans les parkings semi-enterrés ou les caves, fréquente dans les quartiers situés en bas des coteaux (proche canal).",
    "Encrassement spécifique des façades et balcons des résidences des années 70/80 (Jean Moulin, Carette) par la pollution atmosphérique et les lichens.",
    "Accessibilité parfois complexe pour les engins de nettoyage dans les petites rues pavillonnaires du quartier des Abbesses ou de Franceville.",
  ],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  districts: [
    "Centre-ville",
    "Maison Blanche",
    "L'Époque",
    "Parc Carette",
    "Le Chénay",
    "Pointe de Gournay",
    "Les Abbesses",
    "Plateau de Franceville",
    "Jean Moulin",
    "Les Peupliers",
  ],

nearbyCities: [
        "neuilly-sur-marne",
        "montfermeil",
        "le-raincy",
        "neuilly-plaisance",
        "gournay-sur-marne",
        "chelles",
        "livry-gargan",
        "rosny-sous-bois",
        "champs-sur-marne",
        "le-perreux-sur-marne"
      ],

  landmarks: [
    "Hôtel de Ville (Place Foch)",
    "Théâtre André Malraux",
    "Château de Maison-Blanche",
    "Parc Forestier du Bois de l'Étoile",
    "Arboretum de Gagny",
    "Lac de Maison-Blanche",
    "Gare de Gagny (RER E)",
    "Gare du Chénay-Gagny (RER E)",
    "Parc Courbet",
    "Jean Bouin",
  ],

  faq: [
    {
      question:
        "Vos équipes interviennent-elles dans les quartiers résidentiels excentrés comme Franceville ?",
      answer:
        "<p><strong>Absolument, notre rayon d'action couvre l'intégralité de Gagny,</strong> du centre-ville historique aux quartiers limitrophes de Montfermeil ou Villemomble. Nous sommes équipés pour intervenir aussi bien dans les grandes copropriétés que dans les zones pavillonnaires plus difficiles d'accès.</p>",
    },
    {
      question:
        "Comment traitez-vous les problèmes de mousse sur les parkings extérieurs ?",
      answer:
        "<p><strong>À Gagny, l'humidité et la végétation favorisent les dépôts verts.</strong> Nous utilisons des traitements fongicides professionnels suivis d'un nettoyage haute pression maîtrisé (avec cloche de lavage pour éviter les projections) afin de décaper les sols sans abîmer l'enrobé ou le béton.</p>",
    },
    {
      question: "Le déplacement pour un devis est-il facturé ?",
      answer:
        "<p><strong>Non, c'est gratuit.</strong> Que vous soyez syndic bénévole à l'Époque ou gestionnaire d'un grand ensemble au Chénay, nous venons sur place évaluer les surfaces et les contraintes techniques avant de vous remettre une proposition chiffrée.</p>",
    },
    {
      question: "Proposez-vous des contrats d'entretien annuel ?",
      answer:
        "<p><strong>Oui, nous mettons en place des plannings de maintenance</strong> (1 à 2 passages par an pour les parkings et moquettes) adaptés au budget de la copropriété. Cela permet de maintenir un niveau de propreté constant et d'éviter une dégradation irréversible des supports.</p>",
    },
  ],

  testimonial: {
    text:
      "Notre copropriété près du Parc Carette avait des problèmes récurrents de taches sur les moquettes des couloirs. L'intervention de Klinova a permis de ravoir des zones qu'on pensait irrécupérables. L'équipe a été discrète et très pro.",
    author: "Mme Vasseur",
    role: "Présidente du Conseil Syndical",
    building: "Résidence Les Érables",
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Rénovation en profondeur des moquettes de copropriété à Gagny : élimination des taches, odeurs et acariens pour des parties communes saines et accueillantes.",

      whyUsBullets: [
        "Expertise sur les fibres synthétiques des résidences années 70-80.",
        "Traitement puissant par injection-extraction pour les zones de fort trafic.",
        "Détachage spécifique (graisses, tanins, gommes) avant lavage global.",
        "Séchage optimisé pour une remise en service rapide des couloirs.",
      ],

      uniqueIntro: `<p>Dans les immeubles de Gagny, notamment les grandes résidences du secteur Jean Moulin ou du Chénay, les moquettes des parties communes sont soumises à rude épreuve. Le passage intensif, combiné aux apports de terre des espaces verts environnants (Parc Courbet, Bois de l'Étoile), crée des zones d'usure prématurée et un grisaillement général qui donne une impression de négligence. Les halls d'entrée, particulièrement dans les immeubles proches des gares RER E, accumulent boues, poussières et taches que l'aspirateur ne parvient pas à déloger.</p>
<p class="mt-4">Pour les gestionnaires et syndics, laisser les moquettes s'encrasser dévalorise le patrimoine et génère des réclamations lors des AG. Les résidents se plaignent de l'aspect terne, des odeurs d'humidité et de la saleté visible. Certains locataires potentiels sont même rebutés par l'état des parties communes lors des visites. <strong>Une intervention technique approfondie désincruste la fibre en profondeur,</strong> redonne luminosité et hygiène aux halls et circulations, et valorise immédiatement l'image de la résidence sans nécessiter un remplacement coûteux du revêtement.</p>`,

      uniqueDeepDive: `<h3>1. Analyse technique et protection</h3>
<p>Identification de la fibre (bouclé, velours, aiguilleté) pour adapter la pression et la température de l'eau. <strong>Protection soigneuse des bas de murs et des portes palières.</strong> Les taches tenaces (chewing-gum, café, traces de semelles) font l'objet d'un pré-traitement manuel avec des agents détachants spécifiques selon leur nature.</p>

<h3>2. Nettoyage par injection-extraction</h3>
<p>La machine propulse une solution nettoyante au cœur de la moquette et l'aspire instantanément avec les salissures. Cette méthode permet de rincer la fibre sans détremper la sous-couche. <strong>À Gagny, où l'humidité peut être un facteur,</strong> nous veillons particulièrement à l'aspiration finale pour garantir un séchage rapide (4 à 6 heures selon ventilation) et éviter toute odeur d'humidité.</p>

<h3>3. Contrôle final et recommandations</h3>
<p>Vérification de l'homogénéité du résultat et de la bonne répartition du séchage. Les zones de fort passage sont inspectées visuellement pour s'assurer de l'élimination complète des traces. <strong>Fréquence recommandée : nettoyage professionnel tous les 12 à 18 mois</strong> pour les halls et couloirs à fort trafic, notamment dans les résidences proches des gares.</p>`,

      specificChallenges: [
        "Halls d'entrée souvent carrelés mais tapis d'escaliers et couloirs en moquette nécessitant une transition de nettoyage propre.",
        "Remontée de taches anciennes sur les dalles textiles des bureaux ou copropriétés tertiaires.",
        "Nécessité de traiter de grands linéaires de couloirs dans les ensembles collectifs sans bloquer la circulation des résidents.",
      ],

      faqAdditions: [
        {
          question:
            "La méthode d'injection-extraction est-elle adaptée aux vieilles moquettes ?",
          answer:
            "<p><strong>Oui, c'est souvent la meilleure solution pour rénover sans remplacer.</strong> Si la fibre n'est pas limée jusqu'à la trame, le nettoyage va retirer le voile gris et redresser le poil. Cela permet souvent de prolonger la durée de vie du revêtement de plusieurs années.</p>",
        },
        {
          question:
            "Intervenez-vous le samedi pour ne pas gêner les professions libérales ?",
          answer:
            "<p><strong>Nous savons que de nombreux cabinets médicaux ou bureaux sont installés dans les résidences du centre de Gagny.</strong> Nous pouvons planifier l'intervention sur des créneaux horaires adaptés (tôt le matin, fin de journée ou samedi) pour ne pas perturber votre activité.</p>",
        },
        {
          question:
            "Comment gérez-vous l'humidité dans les halls d'entrée situés en bas des coteaux ?",
          answer:
            "<p><strong>Nous adaptons notre méthode aux conditions locales.</strong> Dans les zones humides, nous réduisons la quantité d'eau injectée et augmentons la puissance d'extraction. Nous recommandons également une ventilation forcée pendant le séchage pour éviter toute réapparition d'odeurs.</p>",
        },
        {
          question:
            "Traitez-vous aussi les moquettes des escaliers dans les immeubles anciens ?",
          answer:
            "<p><strong>Oui, c'est même l'une de nos spécialités.</strong> Les escaliers nécessitent une technique adaptée car la moquette y est souvent tendue et collée. Nous utilisons des buses spéciales et procédons marche par marche pour éviter toute déformation ou décollement du revêtement.</p>",
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
        "Nettoyage industriel de parkings à Gagny : décapage des sols, rampes et boxes pour éliminer suies, huiles et poussières nocives.",

      whyUsBullets: [
        "Parc machine adapté aux parkings souterrains bas de plafond.",
        "Utilisation de dégraissants puissants conformes aux normes environnementales.",
        "Nettoyage haute pression des rampes d'accès glissantes.",
        "Planification par zones pour maintenir le stationnement résidentiel.",
      ],

      uniqueIntro: `<p>Les parkings des résidences de Gagny, qu'ils soient situés sous les immeubles du centre-ville ou dans les complexes de la Pointe de Gournay, accumulent une pollution spécifique. Poussières de freinage, suies d'échappement et fuites d'huile encrassent les bétons et les résines, rendant les surfaces glissantes et les marquages invisibles. Dans les parkings semi-enterrés des quartiers en bas des coteaux, l'humidité aggrave la situation en favorisant l'apparition de mousses et de taches verdâtres sur les sols et les murs.</p>
<p class="mt-4">Au-delà de l'aspect visuel dégradé, un parking sale génère un sentiment d'insécurité chez les résidents et peut provoquer des chutes, particulièrement sur les rampes glissantes. Les copropriétaires se plaignent de salir leurs chaussures, de l'odeur d'hydrocarbures et du manque de clarté. Certains syndics reçoivent des réclamations régulières en AG. <strong>L'entretien mécanique régulier est indispensable</strong> pour préserver la qualité de l'air (en limitant les poussières volatiles), assurer la pérennité des revêtements de sol face à l'acidité des hydrocarbures, et maintenir une image soignée de la résidence.</p>`,

      uniqueDeepDive: `<h3>1. Dépoussiérage et traitement préalable</h3>
<p>Balayage mécanique complet pour retirer les gros déchets, graviers et feuilles. <strong>Application ciblée de dégraissant professionnel</strong> sur les taches d'huile incrustées avec temps de contact adapté (10 à 15 minutes) pour dissoudre les résidus huileux en profondeur.</p>

<h3>2. Lavage mécanique des surfaces</h3>
<p>Traitement des sols à l'aide d'autolaveuses portées ou accompagnées selon la surface, qui brossent et aspirent simultanément. Les rampes d'accès, souvent critiques en hiver ou par temps de pluie, sont décapées à la haute pression pour restaurer leur adhérence. <strong>Les zones de stationnement fréquent</strong> et les virages reçoivent plusieurs passes pour un résultat homogène.</p>

<h3>3. Gestion des eaux et finitions</h3>
<p>La gestion des eaux de lavage est stricte : récupération via l'autolaveuse et évacuation dans les réseaux appropriés, un point crucial pour les copropriétés soucieuses de l'environnement. <strong>Contrôle final de la propreté</strong> et vérification de l'absence de flaques résiduelles. Fréquence recommandée : 1 à 2 décrassages annuels selon le trafic et l'exposition à l'humidité.</p>`,

      specificChallenges: [
        "Parkings sur plusieurs niveaux avec rampes hélicoïdales nécessitant des machines maniables.",
        "Sols en béton brut très poreux dans les résidences anciennes, retenant les taches d'huile en profondeur.",
        "Ventilation parfois insuffisante dans les boxes fermés, demandant une gestion rigoureuse des poussières lors du balayage.",
      ],

      faqAdditions: [
        {
          question: "Est-il nécessaire de vider totalement le parking ?",
          answer:
            "<p><strong>L'idéal est un parking vide, mais c'est rarement possible à Gagny.</strong> Nous procédons donc par phasage (niveau par niveau ou zone par zone). Nous balisons la zone de travail le temps du nettoyage et du séchage, permettant aux résidents de déplacer leurs véhicules sans devoir les sortir.</p>",
        },
        {
          question:
            "Nettoyez-vous aussi les portes de garage et les tuyauteries ?",
          answer:
            "<p><strong>Le décrassage standard concerne les sols et les rampes.</strong> Cependant, sur devis complémentaire, nous pouvons effectuer le dépoussiérage des tuyauteries aériennes, des luminaires et le nettoyage des portes de boxes, ce qui améliore considérablement la luminosité du sous-sol.</p>",
        },
        {
          question:
            "Comment traitez-vous l'humidité et les mousses dans les parkings semi-enterrés ?",
          answer:
            "<p><strong>Nous appliquons un traitement fongicide professionnel</strong> sur les zones verdâtres avant le lavage mécanique. Cela permet d'éliminer les mousses et micro-algues qui rendent les sols glissants. Nous recommandons ensuite une ventilation améliorée et un nettoyage plus fréquent dans ces zones sensibles.</p>",
        },
        {
          question:
            "Les rampes en pente des coteaux de Gagny sont-elles difficiles à nettoyer ?",
          answer:
            "<p><strong>Nous avons l'habitude des configurations complexes.</strong> Les rampes pentues nécessitent une technique spécifique avec haute pression orientée et contrôle du débit pour éviter les éclaboussures. Nos équipes sont formées pour travailler en toute sécurité sur ce type de configuration.</p>",
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
        "Remise en état de vos balcons à Gagny : élimination des mousses, lichens et pollution pour des extérieurs propres et sûrs.",

      whyUsBullets: [
        "Technique douce respectueuse des étanchéités et des joints.",
        "Protection intégrale des baies vitrées et de l'intérieur du logement.",
        "Gestion des écoulements d'eau pour éviter les conflits de voisinage.",
        "Intervention efficace sur carrelage, béton, dalles sur plots ou bois.",
      ],

      uniqueIntro: `<p>L'environnement verdoyant de Gagny a un revers : la prolifération rapide de mousses et d'algues sur les balcons, en particulier ceux exposés au nord ou situés près des parcs comme le Bois de l'Étoile ou l'Arboretum. Dans les quartiers de Maison Blanche ou des Abbesses, l'humidité ambiante et la proximité des arbres accélèrent l'apparition de dépôts verts glissants. Couplés à la pollution urbaine, ces dépôts rendent les sols noirs, inesthétiques et dangereux.</p>
<p class="mt-4">Beaucoup de résidents n'osent plus utiliser leur balcon par crainte de glisser ou par gêne de l'aspect sale. D'autres tentent un nettoyage domestique qui risque d'abîmer le revêtement ou de créer des coulures chez les voisins du dessous. Vous finissez par ne plus profiter de cet espace extérieur qui pourrait être un véritable atout de votre logement. <strong>Notre service professionnel permet de décaper les surfaces en profondeur</strong> sans risque pour l'étanchéité, les joints ou le voisinage, redonnant ainsi une véritable pièce supplémentaire à votre appartement et valorisant votre bien immobilier.</p>`,

      uniqueDeepDive: `<h3>1. Préparation et sécurisation</h3>
<p>Protection de votre intérieur (baies vitrées, seuils) et déplacement du mobilier et des plantes. <strong>Retrait manuel des débris accumulés</strong> (feuilles mortes, terre, déchets végétaux). Inspection de l'évacuation du balcon pour adapter le débit d'eau et éviter tout débordement.</p>

<h3>2. Application et décapage</h3>
<p>Application d'un nettoyant professionnel adapté au support (fongicide pour les mousses, dégraissant pour les traces de barbecue). Le nettoyage s'effectue par action mécanique (brossage) ou haute pression maîtrisée, pour ne pas dégrader les joints de carrelage ni rendre le béton poreux. <strong>Les garde-corps (verre, aluminium, acier) sont traités séparément</strong> avec des produits spécifiques non abrasifs.</p>

<h3>3. Rinçage maîtrisé et finitions</h3>
<p>Le rinçage est orienté systématiquement vers l'évacuation du balcon. Nous utilisons des aspirateurs à eau ou des systèmes de barrage (raclettes, chiffons absorbants) pour canaliser les flux, évitant ainsi les coulures disgracieuses sur la façade ou chez les voisins du dessous. <strong>Les vitres et garde-corps sont essuyés en fin de chantier.</strong> Séchage naturel en quelques heures selon exposition et ventilation.</p>`,

      specificChallenges: [
        "Balcons 'casquette' ou loggias nécessitant une vigilance accrue sur les évacuations d'eau.",
        "Forte présence de lichens incrustés sur les bétons gravillonnés des années 70.",
        "Nécessité de protéger les plantes et aménagements personnels des résidents durant l'intervention.",
      ],

      faqAdditions: [
        {
          question: "Utilisez-vous de l'eau de Javel ?",
          answer:
            "<p><strong>Non, nous évitons l'eau de Javel</strong> qui est corrosive pour les bétons, toxique pour l'environnement et risque de décolorer les façades en cas de coulure. Nous privilégions des détergents professionnels spécifiques et biodégradables, beaucoup plus sûrs pour votre bâtiment et vos plantations.</p>",
        },
        {
          question: "Pouvez-vous nettoyer les stores bannes en même temps ?",
          answer:
            "<p><strong>Le nettoyage du tissu des stores demande une intervention spécifique différente du sol.</strong> Nous pouvons cependant nettoyer les armatures métalliques et le coffre du store lors du nettoyage du balcon pour une finition impeccable.</p>",
        },
        {
          question:
            "Les balcons exposés au nord près du Bois de l'Étoile nécessitent-ils un entretien plus fréquent ?",
          answer:
            "<p><strong>Oui, nettement.</strong> L'absence d'ensoleillement direct et la proximité de la végétation favorisent l'apparition rapide de mousses et d'algues. Pour ces balcons, nous recommandons un nettoyage annuel au printemps, parfois complété par un traitement anti-mousse préventif en automne.</p>",
        },
        {
          question:
            "Comment gérez-vous l'eau pour éviter de mouiller les voisins du dessous ?",
          answer:
            "<p><strong>C'est notre priorité absolue en immeuble.</strong> Nous contrôlons le débit en permanence, orientons le rinçage vers l'évacuation et utilisons des raclettes et chiffons absorbants pour récupérer l'eau. Dans les configurations sensibles (évacuation bouchée, balcon sans pente), nous adaptons la méthode en privilégiant un nettoyage plus manuel.</p>",
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
        "Décontamination spécialisée des balcons touchés par les pigeons à Gagny : nettoyage, désinfection et évacuation des déchets en toute sécurité.",

      whyUsBullets: [
        "Protocole sanitaire strict (EPI, confinement, désinfection).",
        "Produits virucides et bactéricides homologués.",
        "Nettoyage des traces acides corrosives sur les garde-corps et sols.",
      ],

      uniqueIntro: `<p>Certains quartiers de Gagny, proches des gares RER E (Gagny, Chénay-Gagny) ou des zones pavillonnaires anciennes comme les Abbesses, sont particulièrement touchés par les nuisances de pigeons. Les immeubles offrant des corniches, des retraits ou des balcons abrités deviennent rapidement des zones de repos et de nidification privilégiées. Lorsqu'un balcon est colonisé, l'accumulation de fientes le rend non seulement impraticable à cause de l'odeur forte et de la saleté repoussante, mais présente surtout un risque sanitaire réel : les déjections contiennent des bactéries, champignons et parasites nocifs pour la santé humaine.</p>
<p class="mt-4">Les occupants n'osent plus ouvrir leur porte-fenêtre, craignent pour leur santé et celle de leurs enfants, et subissent parfois la gêne des voisins incommodés par l'aspect ou l'odeur. Certains propriétaires ou bailleurs reçoivent des réclamations du conseil syndical exigeant un assainissement rapide. Face à une telle situation, un simple nettoyage domestique est non seulement inefficace mais dangereusement déconseillé sans équipement adapté : les fientes sèches dégagent des poussières infectieuses dont l'inhalation expose à des risques respiratoires. <strong>Klinova intervient pour remettre le logement en état de salubrité,</strong> en garantissant la sécurité de l'intervenant et des occupants grâce à un protocole professionnel strict.</p>`,

      uniqueDeepDive: `<h3>1. Confinement et protection</h3>
<p>Nos techniciens interviennent en tenue de protection complète : combinaison jetable, gants épais, masque respiratoire de type <strong>FFP3</strong> et lunettes de protection. Installation de bâches de protection devant la porte-fenêtre pour limiter la dispersion des poussières vers l'intérieur du logement. <strong>Humidification légère des zones souillées</strong> pour éviter la dispersion de poussières contaminées lors de la manipulation.</p>

<h3>2. Ramassage et nettoyage des surfaces</h3>
<p>Grattage et ensachage manuel des fientes et nids avec des outils dédiés. Les déchets sont conditionnés dans des sacs étanches prévus pour les matières dangereuses, en aucun cas jetés dans les ordures ménagères classiques. <strong>Lavage des sols et parois</strong> (dalles, garde-corps, vitreries, murs mitoyens) avec des produits biocides puissants qui dissolvent les résidus organiques incrustés.</p>

<h3>3. Désinfection virucide et aération</h3>
<p>Application d'un produit virucide et bactéricide homologué avec respect strict du temps de contact préconisé pour garantir l'élimination des agents pathogènes. Rinçage final pour retirer les résidus chimiques. <strong>Le balcon est laissé en aération complète pendant 24 heures</strong> avant toute réutilisation. Installation possible de pics ou de filets anti-pigeons pour prévenir une récidive et préserver durablement la salubrité du balcon.</p>`,

      specificChallenges: [
        "Accès parfois difficile aux balcons via l'appartement, obligeant à un confinement strict du passage.",
        "Corrosion des garde-corps métalliques par l'acidité des fientes, nécessitant un nettoyage délicat.",
        "Logements vacants ou en succession où l'infestation est ancienne et massive.",
      ],

      faqAdditions: [
        {
          question:
            "Les produits de désinfection sont-ils dangereux pour mes animaux ?",
          answer:
            "<p><strong>Pendant l'application, l'accès au balcon doit être interdit aux animaux.</strong> Une fois le protocole terminé, les surfaces rincées et sèches (généralement après 24h), il n'y a plus aucun danger pour vos animaux de compagnie. Le balcon est redevenu sain.</p>",
        },
        {
          question:
            "Installez-vous des pics anti-pigeons après le nettoyage ?",
          answer:
            "<p><strong>Oui, absolument. Le nettoyage est le moment idéal pour sécuriser la zone.</strong> Nous pouvons installer des pics sur les garde-corps ou les appuis de fenêtre pour empêcher les pigeons de se poser à nouveau. Nous proposons également des filets de protection pour les balcons particulièrement exposés.</p>",
        },
        {
          question:
            "Les fientes peuvent-elles avoir endommagé mon balcon de manière irréversible ?",
answer:
"<p><strong>L'acidité des fientes attaque progressivement les matériaux.</strong> Les garde-corps métalliques peuvent se corroder, la peinture s'écaille et les joints se dégradent. Notre intervention stoppe ce processus et nettoie en profondeur, mais certains dégâts structurels avancés peuvent nécessiter des réparations complémentaires par un maçon.</p>",
},
{
question:
"Que deviennent les fientes et les nids ramassés lors de l'intervention ?",
answer:
"<p><strong>Les fientes, nids et débris organiques sont conditionnés dans des sacs étanches,</strong> puis évacués en déchetterie selon les normes sanitaires. Nous ne jetons jamais ces déchets dans les ordures ménagères classiques car ils pourraient contaminer d'autres personnes lors de la collecte.</p>",
},
],  ctaOverride: "",
},

// =========================
// SERVICE 5 – CANAPÉS / TAPIS / MATELAS
// =========================


{
  serviceKey: "canapes-tapis",
  heroDescription:
    "Nettoyage à domicile de canapés, tapis et matelas à Gagny : une solution radicale contre les taches et les acariens.",  whyUsBullets: [
    "Intervention rapide à domicile sur rendez-vous.",
    "Détachage précis respectant la nature des fibres (tissu, velours, laine).",
    "Élimination des odeurs et des allergènes en profondeur.",
    "Séchage accéléré grâce à une aspiration haute performance.",
  ],  uniqueIntro: `<p>Dans les foyers de Gagny, que ce soit dans les pavillons de Maison Blanche ou les appartements du Chénay, le mobilier textile est au cœur de la vie de famille. Les canapés accueillent les soirées télé, les goûters d'anniversaire et les siestes du dimanche. Les tapis supportent les jeux des enfants et les allers-retours quotidiens. Les matelas emmagasinent chaque nuit transpiration et poussières. Résultat : taches de nourriture, de boissons, poils d'animaux, traces de semelles et poussières s'accumulent au fil du temps dans les fibres.</p>
<p class="mt-4">L'aspirateur ne traite que la surface, laissant les allergènes et la saleté profondément incrustés dans le rembourrage. Les odeurs persistent (transpiration, urine d'animaux, humidité), les couleurs ternissent et certaines familles hésitent à recevoir des invités par gêne de l'aspect taché de leur canapé. Les personnes allergiques souffrent davantage car les acariens prolifèrent dans ces environnements. <strong>Notre service de nettoyage à domicile permet de redonner fraîcheur et hygiène</strong> à votre intérieur sans avoir à remplacer votre mobilier, une solution économique et écologique qui prolonge la durée de vie de vos textiles de plusieurs années.</p>`,  uniqueDeepDive: `<h3>1. Diagnostic textile et pré-traitement</h3>
<p>Analyse du type de textile pour choisir les produits adaptés (coton, laine, synthétique, velours, microfibre). <strong>Test préalable sur zone discrète</strong> pour les tissus fragiles ou fortement teintés. Application ciblée d'une solution détachante et nettoyante sur les zones très souillées (accoudoirs, assises, passages de tapis). Temps d'action pour dissoudre les salissures avant extraction.</p><h3>2. Injection-extraction professionnelle</h3>
<p>La machine injecte une solution nettoyante adaptée à la fibre puis aspire immédiatement l'eau sale chargée d'impuretés, d'acariens et de leurs déjections. <strong>Plusieurs passes sur les zones critiques</strong> pour garantir un résultat homogène. Ce procédé élimine non seulement les taches visibles mais aussi les allergènes responsables d'allergies respiratoires. Pour les matelas, c'est une véritable cure de jouvence hygiénique.</p><h3>3. Extraction maximale et conseils</h3>
<p>L'aspiration puissante de notre équipement retire l'essentiel de l'humidité : le mobilier reste légèrement humide mais non trempé. <strong>Séchage naturel en quelques heures</strong> (4 à 8h selon épaisseur du textile et ventilation de la pièce). Nous recommandons d'ouvrir les fenêtres pour accélérer l'évaporation et de ne pas utiliser le canapé avant séchage complet. Conseils d'entretien pour prolonger le résultat.</p>`,  specificChallenges: [
    "Traitement des odeurs d'urine d'animaux sur les tapis ou canapés, fréquent en pavillon.",
    "Nettoyage de grands canapés d'angle ou panoramiques nécessitant de l'espace pour travailler.",
    "Gestion des tissus délicats (viscose, soie) demandant une expertise technique pour éviter les auréoles.",
  ],  faqAdditions: [
    {
      question: "Combien de temps dure l'intervention pour un canapé ?",
      answer:
        "<p><strong>Pour un canapé 3 places standard, comptez environ 1h30 à 2h d'intervention.</strong> Cela inclut la préparation, le détachage, le nettoyage par extraction et le nettoyage de la zone de travail. C'est rapide et efficace.</p>",
    },
    {
      question:
        "Pouvez-vous éliminer les odeurs d'urine de chat ou de chien ?",
      answer:
        "<p><strong>Oui, nous utilisons des produits enzymatiques spécifiques</strong> qui décomposent les protéines responsables de l'odeur à la source, plutôt que de la masquer. Pour les contaminations profondes ayant atteint le rembourrage, nous pouvons effectuer plusieurs passes d'extraction pour éliminer complètement les résidus.</p>",
    },
    {
      question:
        "Le nettoyage est-il efficace contre les acariens pour les personnes allergiques ?",
      answer:
        "<p><strong>Oui, c'est l'une des principales raisons de faire appel à nous.</strong> L'injection-extraction retire une grande partie des acariens, de leurs déjections et des allergènes accumulés en profondeur. Les personnes allergiques constatent souvent une amélioration rapide de leur confort respiratoire après notre passage.</p>",
    },
    {
      question:
        "Dois-je préparer quelque chose avant votre arrivée ?",
      answer:
        "<p><strong>Oui, quelques préparations simples facilitent notre travail.</strong> Retirez les coussins décoratifs, plaids et objets posés sur le canapé. Dégagez un espace de circulation autour des textiles. Pour les matelas, retirez draps, couette et protège-matelas. Cela nous permet de démarrer immédiatement.</p>",
    },
  ],  ctaOverride: "",
},

{
  serviceKey: "terrasses",
  heroDescription:
    "Nettoyage et remise en état de terrasses à Gagny : élimination des mousses, traces noires et salissures incrustées pour redonner aux sols extérieurs un aspect propre, clair et agréable à vivre.",
  whyUsBullets: [
    "Intervention dans tous les quartiers de Gagny : Centre-ville, Les Abbesses, Le Chénay, Jean-Jaurès, zones pavillonnaires et résidentielles.",
    "Expertise des terrasses de maisons individuelles : sols exposés à la végétation, à l’humidité et aux usages extérieurs fréquents.",
    "Prestation soignée et valorisante : protection du mobilier, respect des façades et nettoyage précis pour un rendu visuel immédiatement perceptible.",
  ],
  uniqueIntro: `<p><strong>Gagny</strong>, commune résidentielle de Seine-Saint-Denis, est reconnue pour ses quartiers pavillonnaires verdoyants et ses nombreux jardins privés. Les terrasses y sont largement utilisées comme espaces de détente et de vie extérieure.</p>

<p class="mt-4">La présence d’arbres, de haies et de zones ombragées favorise toutefois l’apparition de <strong>mousses, algues, traces noires</strong> et dépôts organiques sur les sols extérieurs. Ces salissures s’installent progressivement, en particulier sur les terrasses peu exposées au soleil.</p>

<p class="mt-4">À Gagny, les terrasses sont principalement réalisées en <strong>dalles béton</strong>, <strong>carrelage extérieur</strong>, parfois en <strong>pierre</strong>, <strong>bois</strong> ou <strong>bois composite</strong>. Chaque revêtement nécessite une méthode adaptée pour obtenir un nettoyage efficace et une remise en état visuellement nette.</p>`,
  uniqueDeepDive: `<h3>Préparation et protection de la zone</h3>
<p>Le mobilier, les pots et les éléments décoratifs sont déplacés ou protégés. Les abords immédiats — façades, garde-corps, menuiseries — sont sécurisés afin de garantir une intervention propre, même dans des jardins arborés.</p>

<h3>Nettoyage en profondeur du sol extérieur</h3>
<p>La méthode est choisie selon le matériau : solution performante pour dalles béton et carrelages extérieurs, approche spécifique pour pierre, bois ou composite. Un brossage mécanique efficace permet de décoller les salissures incrustées, biofilms et zones noircies. Le rinçage est réalisé de manière contrôlée pour un sol plus clair et plus homogène.</p>

<h3>Mise en valeur et confort d’usage</h3>
<p>Une attention particulière est portée aux zones de passage et aux surfaces les plus exposées. Le nettoyage améliore nettement l’aspect visuel de la terrasse et le confort d’utilisation au quotidien.</p>`,
  specificChallenges: [
    "Terrasses entourées de jardins arborés : dépôts végétaux et mousses persistantes.",
    "Zones pavillonnaires ombragées : séchage lent et traces noires récurrentes.",
    "Dalles béton ternies par le temps et l’humidité : aspect foncé et irrégulier.",
    "Terrasses partiellement couvertes : encrassement accéléré dans les zones peu ventilées.",
    "Bois et composite exposés plein air : perte d’éclat et salissures incrustées.",
  ],
  faqAdditions: [
    {
      question:
        "Pourquoi les terrasses de Gagny se salissent-elles rapidement ?",
      answer:
        "<p>La <strong>végétation dense</strong>, l’<strong>humidité</strong> et une exposition parfois limitée au soleil favorisent l’apparition de <strong>mousses, algues et traces noires</strong> sur les sols extérieurs, notamment dans les quartiers pavillonnaires.</p>",
    },
    {
      question:
        "Le nettoyage améliore-t-il réellement l’aspect d’une terrasse ancienne ?",
      answer:
        "<p>Oui. Un nettoyage en profondeur permet d’<strong>éclaircir les surfaces</strong>, d’atténuer fortement les zones foncées et de retrouver un sol plus <strong>homogène et agréable</strong> à l’usage.</p>",
    },
    {
      question:
        "Intervenez-vous sur des terrasses très encrassées ou peu entretenues ?",
      answer:
        "<p>Oui. Nous intervenons régulièrement sur des terrasses <strong>fortement encrassées</strong>, parfois laissées sans entretien pendant plusieurs années, avec une méthode adaptée à leur état réel.</p>",
    },
    {
      question:
        "Nettoyez-vous aussi les terrasses de petites copropriétés à Gagny ?",
      answer:
        "<p>Oui. Nous intervenons également sur les <strong>terrasses et cours extérieures</strong> de petites copropriétés à Gagny, avec une organisation adaptée aux usages des résidents.</p>",
    },
  ],
  ctaOverride: "",
},



{
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "Remise en état d’appartements et de maisons à Gagny, avant remise des clés ou après déménagement, avec une méthode par zones et des produits adaptés aux revêtements (parquet, carrelage, PVC).",

  whyUsBullets: [
    "Adaptation aux typologies de Gagny : meulières du Plateau/France-Amériques, collectifs du Chenay, petits immeubles du centre.",
    "Gestion des contraintes locales : accès Vigik/digicodes, étages sans ascenseur, stationnement tendu près des gares RER E.",
    "Finitions utiles pour l’état des lieux : cuisine et salle de bain traitées en priorité, points de contact, vitres accessibles.",
  ],

  uniqueIntro: `<p>À Gagny, la préparation d’un logement se joue souvent entre deux temps : départ d’un occupant, arrivée du suivant, ou remise des clés dans un délai court. Entre les deux gares du RER E (Gagny et Le Chenay-Gagny), les quartiers pavillonnaires du Plateau et les immeubles du centre, les situations varient : logement vidé après déménagement, maison familiale à remettre au propre, ou appartement à présenter pour un état des lieux.</p>
<p class="mt-4">Un <strong>nettoyage appartement maison Gagny</strong> ne consiste pas à “faire du ménage”, mais à remettre de l’ordre dans les détails qui comptent : sols et plinthes marqués par le passage, cuisine avec graisses sur les zones accessibles, salle de bain où le calcaire ressort vite, vitrages bas exposés à la poussière de voirie. Selon le bâti (meulière avec parquet ancien, résidence récente au Chenay, petit collectif), les méthodes doivent rester maîtrisées pour éviter traces, voile ou excès d’humidité.</p>
<p class="mt-4">Klinova intervient avec un cadre simple : <strong>le périmètre de l’intervention est toujours défini avant l’intervention.</strong> Nous calons l’accès (digicode, badge, gardien si besoin), organisons l’ordre des pièces, puis effectuons une remise en état structurée avec un contrôle visuel final, pour livrer un logement propre et cohérent.</p>`,

  uniqueDeepDive: `<h3>Repérage et organisation</h3>
<p>Nous identifions le contexte (logement vide, préparation de remise des clés, remise en état du logement après période d’inoccupation) et les surfaces : parquet ancien fréquent dans les meulières, carrelage et PVC en collectifs, vitrages variés (petits carreaux, baies plus récentes). Nous anticipons aussi les contraintes de Gagny : relief du Plateau, escaliers étroits en centre-ville, stationnement autour des gares.</p>

<h3>Traitement par pièces, priorité aux zones sensibles</h3>
<p>Nous procédons par zones : dépoussiérage et essuyage des surfaces accessibles, puis sols et plinthes avec une technique adaptée au revêtement. En cuisine, <strong>dégraissage cuisine</strong> sur les éléments accessibles (plans, crédences, façades selon l’état). En salle de bain, <strong>détartrage sanitaires</strong> ciblé sur robinetterie, parois et joints. Les points de contact (poignées, interrupteurs) et les vitres accessibles sont intégrés pour un rendu homogène. Un <strong>débarras léger si nécessaire</strong> peut être prévu pour libérer les zones à traiter.</p>

<h3>Contrôle final et conseils d’aération</h3>
<p>Nous terminons par un contrôle visuel pièce par pièce et une aération du logement. L’objectif est de sécuriser un <strong>nettoyage avant état des lieux</strong> ou un <strong>nettoyage après déménagement</strong> avec un résultat propre, sans promesse absolue : si un point doit être repris, il est traité immédiatement sur place quand c’est possible.</p>`,

  specificChallenges: [
    "Bâti hétérogène : meulières avec parquet ancien (Plateau/France-Amériques) et collectifs (Chenay/Jean-Moulin) demandent des méthodes différentes.",
    "Deux gares RER E (Gagny et Chenay-Gagny) : stationnement et accès plus tendus sur ces secteurs, surtout aux heures de pointe.",
    "Relief et escaliers étroits : logistique à anticiper pour le matériel et l’ordre d’intervention.",
    "Vitrages et rebords plus marqués près des axes (D111/D10) : besoin d’un passage soigné sur les vitres accessibles.",
  ],

  faqAdditions: [
    {
      question:
        "Dans quels cas recommandez-vous une remise en état plutôt qu’un nettoyage classique à Gagny ?",
      answer: `<p>Quand il y a un enjeu de remise des clés : logement vidé, changement d’occupant, vente/location, ou surfaces marquées (sols, cuisine, salle de bain). La remise en état du logement est plus complète et suit un ordre d’intervention précis, alors qu’un nettoyage standard reste plus léger.</p>`,
    },
    {
      question:
        "Pouvez-vous intervenir rapidement entre deux rendez-vous d’état des lieux (secteur Chenay-Gagny) ?",
      answer: `<p>Oui, si l’accès est simple (clé disponible, digicode/badge transmis) et le périmètre validé. Nous calons un créneau compatible avec les contraintes de stationnement près de la gare du Chenay-Gagny et organisons l’intervention par zones pour aller à l’essentiel.</p>`,
    },
    {
      question:
        "Comment traitez-vous le parquet ancien dans une meulière du Plateau ou des France-Amériques ?",
      answer: `<p>Nous adaptons la méthode au parquet : pas d’excès d’eau, pas d’abrasion, et des produits compatibles. L’objectif est d’obtenir une propreté nette sans voile ni gonflement du bois, avec une aération conseillée en fin d’intervention.</p>`,
    },
    {
      question:
        "Que couvre exactement l’intervention côté cuisine et salle de bain ?",
      answer: `<p>Nous ciblons les zones utiles : <strong>dégraissage cuisine</strong> sur les surfaces accessibles (plans, crédences, façades selon l’état) et <strong>détartrage sanitaires</strong> sur robinetterie, parois et joints, avec un nettoyage des points de contact. Le périmètre est défini avant l’intervention pour éviter toute ambiguïté.</p>`,
    },
  ],

  ctaOverride: "",
},


],
};export default city;