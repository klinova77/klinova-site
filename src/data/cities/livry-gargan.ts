import type { City } from "~/types/geo";

const city: City = {
  name: "Livry-Gargan",
  slug: "livry-gargan",
  postalCodes: ["93190"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Traversée par l'axe majeur de la RN3 et desservie par le tramway T4, Livry-Gargan conjugue zones pavillonnaires denses et résidences collectives. L'entretien régulier des surfaces communes et des extérieurs est indispensable pour préserver ce cadre de vie résidentiel face aux retombées de la circulation et à l'usure naturelle.",

  hubIntro:
    "<p>Dans une commune résidentielle comme Livry-Gargan, l'image des copropriétés dépend directement de <strong>la propreté des espaces partagés</strong> et des extérieurs. KLINOVA se positionne comme le partenaire technique des syndics et gestionnaires, assurant une maintenance immobilière rigoureuse, des halls d'entrée aux parkings souterrains.</p>\n<p class=\"mt-4\">Notre approche repose sur une gestion globale de l'hygiène, adaptée aux spécificités locales, du quartier de Gargan aux abords du parc de la Poudrerie. Nous garantissons une continuité de service et une <strong>traçabilité complète</strong> pour chaque intervention, qu'il s'agisse d'entretien courant ou de remises en état techniques.</p>\n<ul>\n  <li><strong>Protocoles sur-mesure :</strong> diagnostic préalable des surfaces et adaptation aux contraintes d'accès des résidences livryennes.</li>\n  <li><strong>Coordination syndic :</strong> planification transparente, gestion des clés/Vigik et reporting photographique après passage.</li>\n  <li><strong>Technicité locale :</strong> équipes formées aux spécificités des bâtiments anciens comme aux nouvelles livraisons immobilières.</li>\n</ul>",

  citySpecificChallenges: [
    "Encrassement rapide des façades et balcons exposés aux flux routiers de la RN3 et du boulevard Chanzy.",
    "Accumulation de dépôts verts et mousses sur les terrasses proches des nombreux espaces boisés (Parc Lefèvre, Poudrerie).",
    "<strong>Poussières fines et noircissement</strong> des circulations dans les copropriétés denses du secteur Gargan.",
    "Sols de parkings anciens <strong>souvent poreux</strong> nécessitant un dégraissage en profondeur.",
  ],

  // Ajout de "Chanzy" (très connu pour le marché/axe) et "Sévigné" (quartier résidentiel prisé)
  districts: [
    "Centre",
    "Danton",
    "Gargan",
    "Jacob",
    "Poudrerie",
    "Chanzy",
    "Sévigné",
  ],

  nearbyCities: [
        "sevran",
        "le-raincy",
        "montfermeil",
        "bondy",
        "gagny",
        "villemomble",
        "villepinte",
        "aulnay-sous-bois",
        "chelles",
        "neuilly-sur-marne"
      ],
  landmarks: [
    "Mairie de Livry-Gargan",
    "Parc Lefèvre",
    "Gare de Gargan (Tramway T4)",
    "Château de la Forêt",
    "Lac de Sévigné",
    "Avenue Aristide-Briand (RN3)",
  ],

  faq: [
    {
      question:
        "Intervenez-vous facilement dans les résidences situées le long de la RN3 à Livry-Gargan ?",
      answer:
        "<p><strong>Oui, notre logistique est adaptée.</strong> Nous connaissons les contraintes de stationnement et de circulation sur l'avenue Aristide-Briand (ex-RN3). Nos équipes planifient les interventions en dehors des heures de pointe pour garantir ponctualité et efficacité, sans gêner l'accès aux immeubles.</p>",
    },
    {
      question:
        "Le déplacement pour un devis est-il facturé pour une copropriété à Livry-Gargan ?",
      answer:
        "<p><strong>Non, le diagnostic est gratuit.</strong> Que vous soyez situés quartier Danton ou près de la station Gargan (T4), nous nous déplaçons systématiquement pour évaluer les surfaces et les accès. Cela nous permet de fournir un chiffrage précis et définitif, sans engagement.</p>",
    },
    {
      question:
        "Comment gérez-vous l'accès aux immeubles sécurisés en l'absence de gardien ?",
      answer:
        "<p><strong>Nous sommes autonomes et sécurisés.</strong> Pour les copropriétés équipées, nous utilisons des badges Vigik professionnels ou organisons une remise de clés protocolisée avec le conseil syndical. Chaque passage est tracé, et nos techniciens veillent à la refermeture systématique des accès après intervention.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir en urgence après un dégât des eaux dans un hall ?",
      answer:
        "<p><strong>Oui, c'est notre métier.</strong> En cas de sinistre ou de souillure accidentelle, nous mobilisons une équipe technique pour l'aspiration, le séchage et la désinfection des zones touchées, limitant ainsi la dégradation des matériaux et la gêne des résidents.</p>",
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
        "Redonnez éclat et hygiène aux halls et circulations de vos immeubles à Livry-Gargan grâce à une injection-extraction professionnelle qui élimine durablement les taches et la poussière incrustée.",
      whyUsBullets: [
        "Intervention maîtrisée dans les immeubles denses du quartier Gargan et le long de la RN3.",
        "Matériel professionnel double moteur garantissant un taux d'extraction optimal des salissures.",
        "Planification rigoureuse pour maintenir l'accès aux cages d'escalier durant l'opération.",
      ],

      uniqueIntro:
        "<p>Les moquettes des parties communes, soumises au trafic quotidien, accumulent poussières fines et salissures de passage. À Livry-Gargan, cette usure mécanique est accentuée par les apports extérieurs provenant des zones pavillonnaires ou des axes passants comme l'avenue Aristide-Briand. Les halls d'immeubles du secteur Danton ou du quartier Gargan présentent rapidement des zones de piétinement grisées et des taches incrustées.</p>\n<p class=\"mt-4\">Au-delà de l'aspect esthétique terni, une fibre encrassée se tasse et retient les allergènes. <strong>Un nettoyage technique par injection-extraction</strong> désincruste la fibre en profondeur, restaure la colorimétrie d'origine et garantit une hygiène durable dans les circulations, sans saturer les supports ni nécessiter d'immobilisation prolongée.</p>",

      uniqueDeepDive:
        "<p><strong>Diagnostic fibre et taches :</strong> Nos techniciens identifient la nature de la moquette (bouclée, velours, aiguilletée) et le type de salissures. Ce repérage permet d'ajuster la chimie et la pression pour ne pas détremper les sous-couches. Nous repérons les zones critiques (paliers d'ascenseur, nez de marche) pour adapter l'intensité du traitement.</p>\n<p>Injection-Extraction haute performance : Une solution nettoyante activée est pulvérisée puis immédiatement aspirée par turbine puissante. Les passes croisées sur les zones de piétinement intense relèvent la fibre et éliminent les zones grisées. L'extraction maximale limite l'humidité résiduelle et accélère le séchage (4 à 6 heures).</p>\n<p>Séchage et recommandations : Les zones traitées restent accessibles avec précaution durant le séchage. Nous conseillons une fréquence d'entretien adaptée (12 à 18 mois pour les halls à fort trafic) pour pérenniser le résultat et éviter l'usure prématurée de la fibre.</p>",

      specificChallenges: [
        "Apports constants de poussières noires et grasses liés à la circulation dense sur l'ex-RN3.",
        "<strong>Escaliers étroits sans ascenseur</strong> dans le centre-ville nécessitant un matériel portatif et maniable.",
        "Moquettes anciennes <strong>parfois fragiles</strong> demandant un dosage précis de l'eau pour éviter le décollement.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des halls proches de la station Gargan s'encrassent-elles plus vite ?",
          answer:
            "<p><strong>Oui, nettement.</strong> La proximité du T4 et le flux piétonnier augmentent l'apport de poussières minérales et de boue. Pour ces zones à fort trafic, nous recommandons une fréquence de nettoyage annuelle pour éviter l'usure irrémédiable de la fibre.</p>",
        },
        {
          question:
            "Intervenez-vous pour un seul palier ou un bureau professionnel ?",
          answer:
            "<p><strong>Absolument.</strong> Nous adaptons notre matériel à la surface. Cabinet libéral avenue du Consul-Général-Nordling ou étage résidentiel taché, nous déployons des machines compactes offrant la même puissance d'extraction que nos équipements industriels.</p>",
        },
        {
          question:
            "Le temps de séchage bloque-t-il l'accès aux appartements ?",
          answer:
            "<p><strong>Non, l'accès reste possible.</strong> La moquette reste humide au toucher pendant 4 à 6 heures, mais on peut marcher dessus avec précaution. Nous balisons les zones traitées pour avertir les résidents sans condamner totalement l'accès.</p>",
        },
        {
          question:
            "Votre méthode permet-elle de traiter des taches de café ou de graisse anciennes ?",
          answer:
            "<p><strong>Le résultat dépend de l'ancienneté.</strong> L'injection-extraction est efficace sur les salissures solubles. Pour les taches grasses ou tanniques anciennes (café, vin), nous appliquons des détachants spécifiques avant le passage machine, permettant souvent de les estomper significativement.</p>",
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
        "Assurez la sécurité et la valorisation de vos résidences à Livry-Gargan avec un parking souterrain impeccablement entretenu, offrant des sols propres, des marquages visibles et une circulation rassurante pour tous les copropriétaires.",
      whyUsBullets: [
        "Connaissance fine des résidences le long du T4 et des contraintes de l'avenue Aristide-Briand.",
        "Équipement adapté aux rampes d'accès parfois étroites des sous-sols livryens.",
        "Coordination fluide avec les conseils syndicaux pour une intervention balisée par secteurs.",
      ],

      uniqueIntro:
        "<p>Les parkings souterrains de Livry-Gargan, situés souvent à proximité d'axes fréquentés comme l'avenue Aristide-Briand ou le boulevard Chanzy, accumulent rapidement poussières de freinage, suies noires et fuites d'hydrocarbures. Cet encrassement rend les sols glissants, masque la signalisation au sol et dégrade le sentiment de sécurité des résidents. Les copropriétés du secteur Poudrerie ou du quartier Gargan présentent fréquemment des revêtements béton poreux très encrassés.</p>\n<p class=\"mt-4\">Pour le syndic et le conseil syndical, l'enjeu est double : <strong>maintenir la valeur patrimoniale</strong> de l'immeuble et prévenir les accidents. Une intervention professionnelle planifiée permet de décaper les sols en profondeur, de rétablir une luminosité optimale et d'assurer une circulation fluide, avec une coordination logistique rigoureuse pour minimiser la gêne.</p>",

      uniqueDeepDive:
        "<p><strong>Audit et Planification :</strong> Nous validons le type de revêtement (béton, résine), l'emplacement des évacuations et les contraintes de hauteur. En lien avec le gestionnaire, nous définissons un plan de rotation des véhicules par zones pour intervenir sans bloquer totalement le stationnement. Le planning est communiqué aux résidents une semaine avant.</p>\n<p>Traitement Mécanisé : Après dépoussiérage initial, nos équipes traitent les taches d'huile avec un dégraissant professionnel. Le nettoyage s'effectue à l'autolaveuse industrielle pour brosser et laver les circulations, couplée à une haute pression maîtrisée pour les rampes d'accès et les angles encrassés. Les pieds de murs et marquages au sol sont traités avec attention.</p>\n<p>Gestion des Fluides et Suivi : Les eaux de lavage sont aspirées en continu pour éviter stagnation ou rejet non conforme. Nous vérifions la clarté des siphons et livrons un parking sec et sain. Fréquence recommandée : 1 à 2 décrassages annuels selon l'intensité du trafic et la proximité des axes routiers.</p>",

      specificChallenges: [
        "Trafic dense sur la RN3 générant une infiltration constante de particules noires dans les ventilations.",
        "<strong>Taches d'huile incrustées</strong> dans le béton poreux des résidences des années 70-80 (secteur Poudrerie).",
        "Gestion délicate de la rotation des véhicules dans les quartiers où le stationnement extérieur est saturé.",
      ],

      faqAdditions: [
        {
          question:
            "La poussière noire revient très vite dans notre parking, est-ce normal ?",
          answer:
            "<p><strong>C'est lié à l'environnement urbain.</strong> À Livry-Gargan, la proximité des grands axes charge l'air en particules fines qui se déposent au sol. Un nettoyage mécanisé régulier (semestriel ou annuel) empêche cette couche de devenir grasse et glissante.</p>",
        },
        {
          question:
            "Doit-on demander à tous les résidents de sortir leur voiture le même jour ?",
          answer:
            "<p><strong>Non, nous procédons par zones.</strong> Nous divisons le parking en secteurs et demandons aux résidents de libérer uniquement la zone traitée le jour J. Cela nécessite une communication claire que nous préparons avec le syndic (affichage, emailing).</p>",
        },
        {
          question:
            "Les taches d'huile anciennes sur le béton vont-elles disparaître ?",
          answer:
            "<p><strong>Elles seront atténuées mais pas invisibles.</strong> Si l'huile a pénétré le béton brut depuis des années, une ombre restera visible. Le nettoyage supprime néanmoins la viscosité et le risque de glissade, stoppant la dégradation du sol.</p>",
        },
        {
          question: "Comment gérez-vous l'évacuation de l'eau de lavage ?",
          answer:
            "<p><strong>Nous respectons strictement les normes.</strong> Nos autolaveuses aspirent l'eau sale immédiatement. Si le parking ne dispose pas de séparateur d'hydrocarbures ou de siphons adéquats, nous récupérons les effluents pour les évacuer dans un point conforme.</p>",
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
        "Retrouvez le plaisir de profiter de votre extérieur à Livry-Gargan grâce à un nettoyage méticuleux qui transforme un balcon gris et encrassé en un véritable espace de détente sain et accueillant.",
      whyUsBullets: [
        "Habitués aux balcons de l'avenue Aristide-Briand exposés à la pollution routière et aux poussières noires.",
        "Techniques douces préservant les carrelages anciens et les joints des résidences du centre-ville.",
        "Intervention discrète en journée avec une gestion stricte de l'eau pour la tranquillité du voisinage.",
      ],

      uniqueIntro:
        "<p>À Livry-Gargan, disposer d'un balcon ou d'une terrasse est un véritable atout, que l'on réside quartier Jacob ou près du parc Lefèvre. Mais au fil des saisons, la réalité est souvent moins agréable : les dalles verdissent à l'ombre des arbres, les joints noircissent à cause de la circulation de la RN3, et la poussière s'accumule. Le mobilier de jardin reste bâché et cet espace extérieur finit par servir de débarras.</p>\n<p class=\"mt-4\">Vous n'osez plus sortir pieds nus et l'impression de négligence s'installe. <strong>Ce n'est pas une fatalité.</strong> Une remise en état professionnelle élimine cette saleté incrustée pour que vous puissiez enfin réinstaller votre table, vos plantes et profiter des beaux jours dans un cadre propre et accueillant.</p>",

      uniqueDeepDive:
        "<p><strong>Préparation et protection :</strong> Nous commençons par protéger votre intérieur en bâchant la porte-fenêtre. Vos jardinières et votre mobilier sont déplacés soigneusement pour dégager l'espace. Nous retirons manuellement les feuilles mortes, la terre et les débris accumulés dans les angles et les rails d'évacuation.</p>\n<p>Décapage respectueux : Nous appliquons un nettoyant professionnel adapté à votre revêtement (carrelage, béton, bois composite). Par une action mécanique (brossage manuel ou machine douce), nous désincrustons la crasse des joints et des reliefs sans risquer d'abîmer l'étanchéité. Les garde-corps et séparations sont nettoyés simultanément.</p>\n<p>Rinçage et finitions : Étape critique pour le voisinage. Nous rinçons à pression maîtrisée en dirigeant systématiquement les flux vers l'évacuation pour éviter toute coulure chez le voisin du dessous. Le sol est laissé propre, et nous vous conseillons sur l'entretien courant (balayage régulier, nettoyage léger trimestriel).</p>",

      specificChallenges: [
        "Proximité des zones boisées (Poudrerie, parc Lefèvre) favorisant l'apparition rapide de mousses et lichens tenaces.",
        "<strong>Encrassement gras et noir</strong> des garde-corps et sols dû au trafic dense sur les axes Chanzy et RN3.",
        "Configuration fréquente de balcons superposés nécessitant une vigilance absolue sur les écoulements d'eau.",
      ],

      faqAdditions: [
        {
          question:
            "Utilisez-vous un nettoyeur haute pression qui pourrait décoller mes joints ?",
          answer:
            "<p><strong>Jamais de pression agressive.</strong> Sur un balcon, c'est trop risqué pour l'étanchéité. Nous privilégions l'action chimique d'un produit professionnel combinée à un brossage mécanique. Le rinçage se fait à pression douce, suffisante pour nettoyer sans détériorer le bâti.</p>",
        },
        {
          question:
            "J'ai peur que l'eau sale coule chez mon voisin du dessous, comment faites-vous ?",
          answer:
            "<p><strong>C'est notre priorité absolue.</strong> Nous repérons l'évacuation. Si elle est absente ou bouchée, nous aspirons l'eau de lavage avec un aspirateur industriel au fur et à mesure. Nous utilisons aussi des boudins absorbants pour garantir zéro débordement.</p>",
        },
        {
          question:
            "Mes plantes et mon chat craignent-ils les produits utilisés ?",
          answer:
            "<p><strong>Aucun risque après rinçage.</strong> Nous utilisons des produits biodégradables. Pendant l'intervention, nous demandons de rentrer les animaux et nous protégeons les plantes. Une fois le balcon rincé et séché, l'espace est parfaitement sain pour toute la famille.</p>",
        },
        {
          question:
            "Combien de temps après votre départ puis-je remettre ma table de jardin ?",
          answer:
            "<p><strong>Dès que le sol est sec.</strong> En été ou avec du vent, cela prend 1 à 2 heures. En mi-saison, comptez une demi-journée. Nous conseillons d'attendre que les joints soient bien secs avant de reposer des objets lourds ou des tapis d'extérieur.</p>",
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
        "Après notre protocole de décontamination, votre balcon à Livry-Gargan est assaini, intégralement désinfecté et redevient un espace sain et utilisable en toute sécurité.",
      whyUsBullets: [
        "Expérience des immeubles proches des parcs de Livry-Gargan (Sévigné, Poudrerie) exposés aux pigeons.",
        "Rigueur sanitaire avec port d'EPI complets et utilisation de désinfectants à large spectre.",
        "Évacuation stricte des déchets contaminés sans contact avec les parties communes de l'immeuble.",
      ],

      uniqueIntro:
        "<p>À Livry-Gargan, la présence de nombreux espaces verts comme le parc Lefèvre, la Poudrerie ou les abords du lac de Sévigné favorise la prolifération des pigeons. Ces volatiles colonisent fréquemment les balcons d'étages ou les loggias calmes, transformant rapidement un espace extérieur en zone insalubre. Les immeubles du secteur Gargan ou du quartier Jacob sont particulièrement exposés.</p>\n<p class=\"mt-4\">L'accumulation de fientes n'est pas qu'un problème esthétique : c'est un <strong>risque sanitaire sérieux</strong>. Les déjections sèches libèrent des poussières chargées de pathogènes (bactéries, champignons) nocifs pour les voies respiratoires. L'acidité extrême attaque irréversiblement les revêtements et les garde-corps métalliques. Face à cette contamination, seule une intervention professionnelle peut assainir les lieux sans exposer les occupants.</p>",

      uniqueDeepDive:
        "<p><strong>Confinement et Protection :</strong> La priorité est d'éviter la contamination croisée. Notre technicien s'équipe d'une combinaison intégrale et d'un masque respiratoire haute filtration (FFP2/FFP3). Nous installons des protections hermétiques sur vos portes-fenêtres pour empêcher toute intrusion de particules contaminées à l'intérieur du logement.</p>\n<p>Élimination et Nettoyage : Nous procédons à une humidification des zones souillées pour fixer les poussières volatiles. Les matières organiques (nids, fientes épaisses) sont retirées manuellement, conditionnées en sacs étanches, puis évacuées immédiatement. Les sols et surfaces verticales sont ensuite décapés pour éliminer les résidus incrustés dans le béton ou le carrelage.</p>\n<p>Désinfection Virucide : Sur les surfaces brutes et propres, nous pulvérisons un produit désinfectant bactéricide et virucide homologué. Après avoir respecté le temps de contact nécessaire à l'élimination des agents pathogènes (10 à 15 minutes), nous rinçons abondamment. Une aération de 24 heures est recommandée avant de réinvestir les lieux en toute sécurité.</p>",

      specificChallenges: [
        "<strong>Forte densité de pigeons</strong> autour des zones d'eau (Lac de Sévigné) cherchant des nichoirs en hauteur.",
        "Risque de corrosion acide des garde-corps métalliques typiques des résidences des années 70.",
        "Gestion délicate des poussières contaminées pour ne pas impacter le voisinage lors du décroûtage.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi ne puis-je pas nettoyer les fientes moi-même avec de l'eau de Javel ?",
          answer:
            "<p><strong>C'est fortement déconseillé.</strong> Gratter des fientes sèches libère des spores responsables de maladies (ornithose, salmonellose). Sans masque FFP2 et combinaison, vous inhalez ces pathogènes. De plus, la Javel ne pénètre pas toujours la croûte organique. Seul un protocole professionnel garantit votre sécurité.</p>",
        },
        {
          question:
            "Est-ce que mes enfants pourront retourner sur le balcon sans risque ?",
          answer:
            "<p><strong>Oui, après le délai de sécurité.</strong> Une fois le balcon désinfecté, rincé et séché, il est biologiquement neutre. Nous recommandons d'attendre 24 heures d'aération pour dissiper les vapeurs du produit virucide. L'espace est ensuite parfaitement sain pour les enfants et animaux.</p>",
        },
        {
          question: "Les fientes ont-elles abîmé mon carrelage ou mon béton ?",
          answer:
            "<p><strong>L'acidité laisse souvent des traces.</strong> L'acide urique des fientes attaque le vernis des carrelages et rend le béton poreux. Le nettoyage stoppe cette corrosion, mais des taches mates ou une rugosité peuvent persister sur les matériaux restés longtemps au contact des déjections.</p>",
        },
        {
          question: "Que faites-vous des sacs de fientes sales ?",
          answer:
            "<p><strong>Nous les emportons systématiquement.</strong> Ces déchets sont considérés comme contaminants. Ils sont conditionnés dans des sacs résistants, fermés hermétiquement sur le balcon même, et évacués par nos soins. Nous ne jetons rien dans les poubelles communes de votre résidence.</p>",
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
        "Offrez une seconde jeunesse à vos canapés et matelas à Livry-Gargan grâce à un nettoyage en profondeur qui élimine taches et allergènes pour le bien-être de toute la famille.",
      whyUsBullets: [
        "Habitués aux maisons familiales de Livry-Gargan avec enfants et animaux de compagnie.",
        "Produits nettoyants doux et sûrs pour les bébés et vos compagnons à quatre pattes.",
        "Service à domicile discret et efficace, sans avoir à déplacer vos meubles lourds.",
      ],

      uniqueIntro:
        "<p>Dans les pavillons du quartier de la Poudrerie comme dans les appartements du centre de Livry-Gargan, le canapé est au cœur de la vie familiale. C'est là que les enfants goûtent, que le chat s'installe et qu'on reçoit les amis. Résultat : taches de chocolat, auréoles de transpiration sur les matelas et poussière s'installent insidieusement. Les familles du secteur Gargan ou du quartier Jacob connaissent bien ces désagréments du quotidien.</p>\n<p class=\"mt-4\">Au fil du temps, cette saleté visible et invisible (acariens) crée un inconfort. On hésite à s'asseoir, les allergies se réveillent. <strong>Retrouver de la fraîcheur est simple.</strong> Notre intervention à domicile désincruste les fibres en profondeur pour que vous puissiez à nouveau profiter d'un intérieur sain et accueillant sans changer de mobilier.</p>",

      uniqueDeepDive:
        "<p><strong>Repérage des taches :</strong> À notre arrivée, nous faisons le tour avec vous. Nous identifions la matière (tissu, velours, microfibre) et traitons manuellement les taches tenaces (feutre, café, graisse) avec des détachants spécifiques pour les dissoudre avant le grand nettoyage. Cette étape ciblée maximise l'efficacité du traitement.</p>\n<p>Injection-Extraction en profondeur : Nous utilisons une machine professionnelle d'injection-extraction. Elle envoie de l'eau tiède et du nettoyant au cœur du tissu et l'aspire aussitôt avec la saleté. C'est comme un shampoing en profondeur qui retire la grisaille et les allergènes sans saturer votre salon. Les coussins sont traités individuellement pour un résultat homogène.</p>\n<p>Séchage optimisé : Grâce à une aspiration puissante, nous retirons le maximum d'eau. Nous vous conseillons sur la ventilation de la pièce pour que vous puissiez vous réinstaller confortablement sur votre canapé ou dormir sur votre matelas le plus vite possible (généralement 4 à 8 heures selon épaisseur et aération).</p>",

      specificChallenges: [
        "Traces de boue et poils d'animaux fréquents dans les zones pavillonnaires avec jardin (Gargan).",
        "Matelas <strong>tachés par la transpiration</strong> ou l'humidité dans les chambres mal ventilées.",
        "Taches alimentaires complexes (gras + sucre) sur les canapés des familles nombreuses.",
      ],

      faqAdditions: [
        {
          question:
            "Mon enfant est allergique aux acariens, est-ce que ça va l'aider ?",
          answer:
            "<p><strong>Oui, significativement.</strong> L'aspirateur ne retire que la surface. Notre méthode extrait les acariens et leurs déjections logés au fond des mousses du matelas ou du canapé. L'air de la chambre devient plus sain, et les nuits sont souvent plus paisibles après notre passage.</p>",
        },
        {
          question:
            "Mon chat a fait ses besoins sur le canapé, l'odeur va-t-elle partir ?",
          answer:
            "<p><strong>Nous traitons la source du problème.</strong> Nous utilisons des produits enzymatiques qui décomposent les résidus d'urine responsables de l'odeur. Si l'urine n'a pas imprégné la mousse trop profondément, l'odeur disparaît et votre salon redevient respirable.</p>",
        },
        {
          question: "Quand pourrons-nous nous réinstaller sur le canapé ?",
          answer:
            "<p><strong>Comptez quelques heures.</strong> Le tissu reste humide au toucher après le nettoyage. En été, fenêtres ouvertes, ça sèche en 4 à 6 heures. En hiver avec le chauffage, c'est un peu plus long. L'idéal est de nous faire venir le matin pour en profiter le soir.</p>",
        },
        {
          question: "Dois-je tout déménager avant votre arrivée ?",
          answer:
            "<p><strong>Non, une préparation minimale suffit.</strong> Retirez les plaids, les coussins décoratifs et les objets fragiles autour. Nous avons besoin d'un peu d'espace pour tourner autour du canapé ou du lit, d'une prise électrique et d'un point d'eau. Nous nous occupons du reste.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage et remise en état de terrasses à Livry-Gargan : élimination des mousses, traces noires et salissures incrustées pour redonner aux sols extérieurs un aspect propre, net et agréable au quotidien.",
      whyUsBullets: [
        "Intervention dans tous les quartiers de Livry-Gargan : Jacob, Danton, Vauban, Chanzy, Gargan, zones pavillonnaires et résidentielles.",
        "Spécialiste des terrasses de maisons et petits immeubles : sols extérieurs très sollicités, encrassés par l’usage quotidien et la végétation.",
        "Prestation soignée et valorisante : protection du mobilier, respect des façades et nettoyage précis pour un rendu visuel immédiatement visible.",
      ],
      uniqueIntro:
        "<p>Livry-Gargan, commune résidentielle de Seine-Saint-Denis, se caractérise par un tissu urbain dense mêlant maisons individuelles, petits immeubles et jardins privatifs. Les terrasses y sont très utilisées et exposées aux salissures liées à la vie quotidienne.</p>\n\n<p class=\"mt-4\">Dans de nombreux quartiers pavillonnaires, les sols extérieurs subissent l’encrassement progressif lié aux <strong>mousses, algues, traces noires</strong>, dépôts végétaux et passages répétés. Les terrasses peu entretenues perdent rapidement leur aspect d’origine et deviennent visuellement ternes.</p>\n\n<p class=\"mt-4\">À Livry-Gargan, les terrasses sont majoritairement réalisées en <strong>dalles béton</strong>, carrelage extérieur, parfois en pierre, bois ou bois composite. Chaque revêtement nécessite une méthode spécifique pour un nettoyage efficace et une remise en état visible.</p>",
      uniqueDeepDive:
        "<h3>Préparation et organisation de l’intervention</h3>\n<p>Le mobilier, les pots et les éléments décoratifs sont déplacés ou protégés. Les abords immédiats — murs, façades, menuiseries — sont sécurisés afin de garantir une intervention propre, même dans des espaces extérieurs contraints.</p>\n\n<h3>Nettoyage approfondi du sol extérieur</h3>\n<p>La méthode est choisie selon le matériau : traitement adapté pour dalles béton et carrelage, approche spécifique pour pierre, bois ou composite. Un brossage mécanique efficace permet de décoller <strong>les salissures incrustées</strong>, les biofilms et les zones noircies. Le rinçage est réalisé de façon contrôlée pour un sol nettement plus propre et homogène.</p>\n\n<h3>Finition et valorisation de la terrasse</h3>\n<p>Une attention particulière est portée aux zones de passage et aux parties les plus exposées. Le nettoyage améliore visiblement la clarté du sol et le confort d’usage, redonnant à la terrasse une apparence plus nette et plus agréable au quotidien.</p>",
      specificChallenges: [
        "Terrasses très sollicitées : <strong>passages fréquents</strong>, mobilier déplacé régulièrement, encrassement accéléré.",
        "Quartiers pavillonnaires arborés : dépôts végétaux, feuilles et mousses persistantes.",
        "Dalles béton foncées par le temps et l’humidité : aspect terne et zones marquées.",
        "Terrasses partiellement couvertes : séchage lent et traces noires récurrentes.",
        "Bois et composite exposés plein air : perte d’éclat et salissures incrustées.",
      ],
      faqAdditions: [
        {
          question:
            "Pourquoi ma terrasse noircit-elle avec le temps à Livry-Gargan ?",
          answer:
            "<p>L’humidité, la pollution urbaine et les passages répétés favorisent l’apparition de traces noires et de biofilms sur les sols extérieurs. Sans nettoyage adapté, ces salissures s’installent durablement.</p>",
        },
        {
          question:
            "Le nettoyage améliore-t-il réellement l’aspect d’une terrasse ancienne ?",
          answer:
            "<p>Oui. Un nettoyage en profondeur permet d’éclaircir les surfaces, de réduire fortement les zones foncées et de retrouver un sol visuellement plus homogène et plus propre.</p>",
        },
        {
          question:
            "Intervenez-vous sur des terrasses très encrassées ou peu entretenues ?",
          answer:
            "<p>Oui. Nous intervenons régulièrement sur des terrasses fortement encrassées, parfois négligées pendant plusieurs années, avec une méthode adaptée à leur état réel.</p>",
        },
        {
          question:
            "Nettoyez-vous aussi les terrasses de petits immeubles ou copropriétés ?",
          answer:
            "<p>Oui. Nous intervenons également sur les terrasses et cours extérieures de petites copropriétés à Livry-Gargan, avec une organisation adaptée aux usages des résidents.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Remise en état avant état des lieux, après travaux ou déménagement. Méthode adaptée au pavillonnaire (Jacob, Sully, Plateau) comme aux collectifs (Danton, Gargan).",

      whyUsBullets: [
        "Logique “axe RN3” : traitement prioritaire des traces grasses et poussières sur vitrages bas, encadrements et sols d’entrée.",
        "Ville très pavillonnaire : organisation par zones (séjour/escaliers/chambres) et finitions soignées sur parquets et plinthes.",
        "Accès transport T4 : interventions calées sur les secteurs Gargan / L’Abbaye, avec anticipation des stationnements et des badges.",
      ],

      uniqueIntro:
        "<p>À Livry-Gargan, on change vite de configuration en quelques rues : maisons avec jardin côté Jacob ou Sully-Fragonard, collectifs autour de Danton, et zones plus denses le long de l’Avenue Aristide-Briand (RN3). Cette diversité impose un nettoyage “sur mesure” : dans un pavillon, on gère les étages, les escaliers et les pièces en enfilade ; dans un collectif, on anticipe les accès (digicode, gardien) et on optimise l’ordre des tâches pour éviter de re-salir les circulations.</p>\n<p class=\"mt-4\">La RN3 donne un marqueur très concret sur le résultat : les vitrages et rebords proches de l’axe prennent plus vite une <strong>pellicule grasse</strong> (poussières + trafic), surtout en façade basse. C’est souvent ce qui fait la différence lors d’un état des lieux ou avant une visite : vitres, encadrements, plinthes et sols d’entrée doivent être homogènes, sans traces de reprise.</p>\n<p class=\"mt-4\">Klinova intervient à Livry-Gargan pour des remises en état ponctuelles (fin de bail, déménagement, retour de chantier) avec une méthode simple : cadrage du périmètre, traitement des zones qui “se voient” (pièces d’eau, cuisine, sols), puis finitions. L’objectif est un rendu net, sans abîmer les matériaux et en restant discret — surtout dans les secteurs pavillonnaires où le voisinage est attentif au bruit et aux allées/venues.</p>",

      uniqueDeepDive:
        "<h3>RN3 et poussières urbaines — vitrages, rebords et entrées</h3>\n<p>Sur les logements proches de l’Avenue Aristide Briand, les salissures reviennent vite sur les vitres, appuis et encadrements. Nous traitons ces zones en fin de prestation pour éviter les re-traces, en reprenant aussi <strong>les points “main”</strong> (poignées, interrupteurs) et les sols d’entrée, souvent les premiers contrôlés en fin de bail.</p>\n\n<h3>Pavillons et circulations — escaliers, parquets et plinthes</h3>\n<p>Dans les quartiers pavillonnaires (Jacob, Sully, Plateau), la difficulté n’est pas la surface brute mais la circulation : <strong>escaliers, paliers, pièces multiples</strong> et parfois une véranda ou une baie donnant sur jardin. Nous travaillons par étages, avec une attention sur les parquets (humidification maîtrisée) et les plinthes, qui font “sale” même quand le sol paraît propre.</p>\n\n<h3>Cuisine et salle d’eau — calcaire, joints et finitions visibles</h3>\n<p>Le calcaire et les dépôts sur robinetterie, parois et sanitaires donnent vite un aspect terne. Nous priorisons un détartrage adapté (sans agresser chrome et surfaces) et un dégraissage cuisine ciblé, puis un contrôle final des zones de projection : <strong>crédence, angles, contours d’évier</strong>, bas de meubles accessibles. Le but : un rendu propre et stable, sans odeur ni traces persistantes.</p>",

      specificChallenges: [
        "RN3 : <strong>suie/pellicule grasse</strong> sur vitrages et façades basses, nécessitant une vraie reprise des encadrements et rebords.",
        "Mix pavillons / collectifs : <strong>organisation différente</strong> (étages/escaliers vs digicodes/gardiens) pour éviter les allers-retours inutiles.",
        "Stationnement variable : <strong>compliqué en centre</strong> et le long de la RN3, plus simple en pavillonnaire avec accès privés.",
        "Zones denses (Danton/Gargan) : <strong>accès badges</strong>, circulation en parties communes, et finitions indispensables pour un rendu homogène.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous à Livry-Gargan pour un nettoyage avant état des lieux (93190) ?",
          answer:
            "<p>Oui. Nous définissons le périmètre puis nous traitons les postes qui comptent le plus en fin de bail : cuisine, salle d’eau, sols et finitions visibles (plinthes, poignées, encadrements). Sur les logements proches de la RN3, les vitrages et rebords font aussi partie des points sensibles.</p>",
        },
        {
          question:
            "Pouvez-vous faire un nettoyage après travaux (plâtre/peinture) dans un pavillon ?",
          answer:
            "<p>Oui. Après rénovation, l’enjeu est la poussière fine et les traces de chantier. Nous structurons le dépoussiérage, puis la remise en état des surfaces et des sols, avec une attention particulière aux escaliers, plinthes et menuiseries qui retiennent souvent les résidus.</p>",
        },
        {
          question:
            "Le logement est en collectif (digicode/gardien) : comment ça se passe ?",
          answer:
            "<p>Nous anticipons l’accès (digicode, badge, horaires de gardien) et nous organisons l’intervention pour limiter les passages en parties communes. Cela réduit les risques de re-salissure et permet d’optimiser le temps sur place.</p>",
        },
        {
          question: "Faites-vous aussi les vitres, volets et encadrements ?",
          answer:
            "<p>Sur demande, oui pour les vitrages accessibles et les encadrements. À Livry-Gargan, c’est particulièrement utile près de la RN3 où les dépôts reviennent vite. Le périmètre exact est cadré avant l’intervention pour éviter toute ambiguïté.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
