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

  hubIntro: `<p>Dans une commune résidentielle comme Livry-Gargan, l'image des copropriétés dépend directement de la propreté des espaces partagés et des extérieurs. KLINOVA se positionne comme le partenaire technique des syndics et gestionnaires, assurant une maintenance immobilière rigoureuse, des halls d'entrée aux parkings souterrains.</p>
<p class="mt-4">Notre approche repose sur une gestion globale de l'hygiène, adaptée aux spécificités locales, du quartier de Gargan aux abords du parc de la Poudrerie. Nous garantissons une continuité de service et une traçabilité complète pour chaque intervention, qu'il s'agisse d'entretien courant ou de remises en état techniques.</p>
<ul>
  <li><strong>Protocoles sur-mesure :</strong> diagnostic préalable des surfaces et adaptation aux contraintes d'accès des résidences livryennes.</li>
  <li><strong>Coordination syndic :</strong> planification transparente, gestion des clés/Vigik et reporting photographique après passage.</li>
  <li><strong>Technicité locale :</strong> équipes formées aux spécificités des bâtiments anciens comme aux nouvelles livraisons immobilières.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement rapide des façades et balcons exposés aux flux routiers de la RN3 et du boulevard Chanzy.",
    "Accumulation de dépôts verts et mousses sur les terrasses proches des nombreux espaces boisés (Parc Lefèvre, Poudrerie).",
    "Poussières fines et noircissement des circulations dans les copropriétés denses du secteur Gargan.",
    "Sols de parkings anciens souvent poreux nécessitant un dégraissage en profondeur.",
  ],

  // Ajout de "Chanzy" (très connu pour le marché/axe) et "Sévigné" (quartier résidentiel prisé)
districts: ["Centre", "Danton", "Gargan", "Jacob", "Poudrerie", "Chanzy", "Sévigné"],
   
nearbyCities: [
      "le-raincy",
      "montfermeil",
      "gagny",
      "chelles",
      "rosny-sous-bois",
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
        "<p><strong>Non, le diagnostic est gratuit.</strong> Que vous soyez situés quartier Danton ou près de la station Gargan (T4), nous nous déplaçons systématiquement pour évaluer les surfaces et les accès. Cela nous permet de fournir un chiffrage précis et définitif sous 48 heures, sans engagement.</p>",
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
        "<p><strong>Oui, c'est notre métier.</strong> En cas de sinistre ou de souillure accidentelle, nous mobilisons une équipe technique sous 24 à 48 heures pour l'aspiration, le séchage et la désinfection des zones touchées, limitant ainsi la dégradation des matériaux et la gêne des résidents.</p>",
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

      uniqueIntro: `<p>Les moquettes des parties communes, soumises au trafic quotidien, accumulent poussières fines et salissures de passage. À Livry-Gargan, cette usure mécanique est accentuée par les apports extérieurs provenant des zones pavillonnaires ou des axes passants comme l'avenue Aristide-Briand. Les halls d'immeubles du secteur Danton ou du quartier Gargan présentent rapidement des zones de piétinement grisées et des taches incrustées.</p>
<p class="mt-4">Au-delà de l'aspect esthétique terni, une fibre encrassée se tasse et retient les allergènes. <strong>Un nettoyage technique par injection-extraction</strong> désincruste la fibre en profondeur, restaure la colorimétrie d'origine et garantit une hygiène durable dans les circulations, sans saturer les supports ni nécessiter d'immobilisation prolongée.</p>`,

      uniqueDeepDive: `<p><strong>Diagnostic fibre et taches :</strong> Nos techniciens identifient la nature de la moquette (bouclée, velours, aiguilletée) et le type de salissures. Ce repérage permet d'ajuster la chimie et la pression pour ne pas détremper les sous-couches. Nous repérons les zones critiques (paliers d'ascenseur, nez de marche) pour adapter l'intensité du traitement.</p>
<p><strong>Injection-Extraction haute performance :</strong> Une solution nettoyante activée est pulvérisée puis immédiatement aspirée par turbine puissante. Les passes croisées sur les zones de piétinement intense relèvent la fibre et éliminent les zones grisées. L'extraction maximale limite l'humidité résiduelle et accélère le séchage (4 à 6 heures).</p>
<p><strong>Séchage et recommandations :</strong> Les zones traitées restent accessibles avec précaution durant le séchage. Nous conseillons une fréquence d'entretien adaptée (12 à 18 mois pour les halls à fort trafic) pour pérenniser le résultat et éviter l'usure prématurée de la fibre.</p>`,

      specificChallenges: [
        "Apports constants de poussières noires et grasses liés à la circulation dense sur l'ex-RN3.",
        "Escaliers étroits sans ascenseur dans le centre-ville nécessitant un matériel portatif et maniable.",
        "Moquettes anciennes parfois fragiles demandant un dosage précis de l'eau pour éviter le décollement.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des halls proches de la station Gargan s'encrassent-elles plus vite ?",
          answer:
            "<p><strong>Oui, nettement.</strong> La proximité du T4 et le flux piétonnier augmentent l'apport de poussières minérales et de boue. Pour ces zones à fort trafic, nous recommandons une fréquence de nettoyage annuelle pour éviter l'usure irrémédiable de la fibre.</p>",
        },
        {
          question: "Intervenez-vous pour un seul palier ou un bureau professionnel ?",
          answer:
            "<p><strong>Absolument.</strong> Nous adaptons notre matériel à la surface. Cabinet libéral avenue du Consul-Général-Nordling ou étage résidentiel taché, nous déployons des machines compactes offrant la même puissance d'extraction que nos équipements industriels.</p>",
        },
        {
          question: "Le temps de séchage bloque-t-il l'accès aux appartements ?",
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

      uniqueIntro: `<p>Les parkings souterrains de Livry-Gargan, situés souvent à proximité d'axes fréquentés comme l'avenue Aristide-Briand ou le boulevard Chanzy, accumulent rapidement poussières de freinage, suies noires et fuites d'hydrocarbures. Cet encrassement rend les sols glissants, masque la signalisation au sol et dégrade le sentiment de sécurité des résidents. Les copropriétés du secteur Poudrerie ou du quartier Gargan présentent fréquemment des revêtements béton poreux très encrassés.</p>
<p class="mt-4">Pour le syndic et le conseil syndical, l'enjeu est double : <strong>maintenir la valeur patrimoniale</strong> de l'immeuble et prévenir les accidents. Une intervention professionnelle planifiée permet de décaper les sols en profondeur, de rétablir une luminosité optimale et d'assurer une circulation fluide, avec une coordination logistique rigoureuse pour minimiser la gêne.</p>`,

      uniqueDeepDive: `<p><strong>Audit et Planification :</strong> Nous validons le type de revêtement (béton, résine), l'emplacement des évacuations et les contraintes de hauteur. En lien avec le gestionnaire, nous définissons un plan de rotation des véhicules par zones pour <strong>intervenir sans bloquer totalement le stationnement</strong>. Le planning est communiqué aux résidents une semaine avant.</p>
<p><strong>Traitement Mécanisé :</strong> Après dépoussiérage initial, nos équipes traitent les taches d'huile avec un dégraissant professionnel. Le nettoyage s'effectue à l'autolaveuse industrielle pour brosser et laver les circulations, couplée à une <strong>haute pression maîtrisée</strong> pour les rampes d'accès et les angles encrassés. Les pieds de murs et marquages au sol sont traités avec attention.</p>
<p><strong>Gestion des Fluides et Suivi :</strong> Les eaux de lavage sont aspirées en continu pour éviter stagnation ou rejet non conforme. Nous vérifions la clarté des siphons et livrons un parking sec et sain. <strong>Fréquence recommandée : 1 à 2 décrassages annuels</strong> selon l'intensité du trafic et la proximité des axes routiers.</p>`,

      specificChallenges: [
        "Trafic dense sur la RN3 générant une infiltration constante de particules noires dans les ventilations.",
        "Taches d'huile incrustées dans le béton poreux des résidences des années 70-80 (secteur Poudrerie).",
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
          question: "Les taches d'huile anciennes sur le béton vont-elles disparaître ?",
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

      uniqueIntro: `<p>À Livry-Gargan, disposer d'un balcon ou d'une terrasse est un véritable atout, que l'on réside quartier Jacob ou près du parc Lefèvre. Mais au fil des saisons, la réalité est souvent moins agréable : les dalles verdissent à l'ombre des arbres, les joints noircissent à cause de la circulation de la RN3, et la poussière s'accumule. Le mobilier de jardin reste bâché et cet espace extérieur finit par servir de débarras.</p>
<p class="mt-4">Vous n'osez plus sortir pieds nus et l'impression de négligence s'installe. <strong>Ce n'est pas une fatalité.</strong> Une remise en état professionnelle élimine cette saleté incrustée pour que vous puissiez enfin réinstaller votre table, vos plantes et profiter des beaux jours dans un cadre propre et accueillant.</p>`,

      uniqueDeepDive: `<p><strong>Préparation et protection :</strong> Nous commençons par protéger votre intérieur en bâchant la porte-fenêtre. Vos jardinières et votre mobilier sont déplacés soigneusement pour dégager l'espace. Nous retirons manuellement les feuilles mortes, la terre et les débris accumulés dans les angles et les rails d'évacuation.</p>
<p><strong>Décapage respectueux :</strong> Nous appliquons un nettoyant professionnel adapté à votre revêtement (carrelage, béton, bois composite). Par une action mécanique (brossage manuel ou machine douce), nous désincrustons la crasse des joints et des reliefs <strong>sans risquer d'abîmer l'étanchéité</strong>. Les garde-corps et séparations sont nettoyés simultanément.</p>
<p><strong>Rinçage et finitions :</strong> Étape critique pour le voisinage. Nous rinçons à pression maîtrisée en dirigeant systématiquement les flux vers l'évacuation pour <strong>éviter toute coulure chez le voisin du dessous</strong>. Le sol est laissé propre, et nous vous conseillons sur l'entretien courant (balayage régulier, nettoyage léger trimestriel).</p>`,

      specificChallenges: [
        "Proximité des zones boisées (Poudrerie, parc Lefèvre) favorisant l'apparition rapide de mousses et lichens tenaces.",
        "Encrassement gras et noir des garde-corps et sols dû au trafic dense sur les axes Chanzy et RN3.",
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
          question: "Mes plantes et mon chat craignent-ils les produits utilisés ?",
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

      uniqueIntro: `<p>À Livry-Gargan, la présence de nombreux espaces verts comme le parc Lefèvre, la Poudrerie ou les abords du lac de Sévigné favorise la prolifération des pigeons. Ces volatiles colonisent fréquemment les balcons d'étages ou les loggias calmes, transformant rapidement un espace extérieur en zone insalubre. Les immeubles du secteur Gargan ou du quartier Jacob sont particulièrement exposés.</p>
<p class="mt-4">L'accumulation de fientes n'est pas qu'un problème esthétique : c'est un <strong>risque sanitaire sérieux</strong>. Les déjections sèches libèrent des poussières chargées de pathogènes (bactéries, champignons) nocifs pour les voies respiratoires. L'acidité extrême attaque irréversiblement les revêtements et les garde-corps métalliques. Face à cette contamination, seule une intervention professionnelle peut assainir les lieux sans exposer les occupants.</p>`,

      uniqueDeepDive: `<p><strong>Confinement et Protection :</strong> La priorité est d'éviter la contamination croisée. Notre technicien s'équipe d'une combinaison intégrale et d'un masque respiratoire haute filtration (FFP2/FFP3). Nous installons des <strong>protections hermétiques sur vos portes-fenêtres</strong> pour empêcher toute intrusion de particules contaminées à l'intérieur du logement.</p>
<p><strong>Élimination et Nettoyage :</strong> Nous procédons à une humidification des zones souillées pour fixer les poussières volatiles. Les matières organiques (nids, fientes épaisses) sont retirées manuellement, conditionnées en sacs étanches, puis évacuées immédiatement. Les sols et surfaces verticales sont ensuite décapés pour éliminer les résidus incrustés dans le béton ou le carrelage.</p>
<p><strong>Désinfection Virucide :</strong> Sur les surfaces brutes et propres, nous pulvérisons un produit désinfectant bactéricide et virucide homologué. Après avoir respecté le <strong>temps de contact nécessaire à l'élimination des agents pathogènes</strong> (10 à 15 minutes), nous rinçons abondamment. Une aération de 24 heures est recommandée avant de réinvestir les lieux en toute sécurité.</p>`,

      specificChallenges: [
        "Forte densité de pigeons autour des zones d'eau (Lac de Sévigné) cherchant des nichoirs en hauteur.",
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
          question: "Est-ce que mes enfants pourront retourner sur le balcon sans risque ?",
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

      uniqueIntro: `<p>Dans les pavillons du quartier de la Poudrerie comme dans les appartements du centre de Livry-Gargan, le canapé est au cœur de la vie familiale. C'est là que les enfants goûtent, que le chat s'installe et qu'on reçoit les amis. Résultat : taches de chocolat, auréoles de transpiration sur les matelas et poussière s'installent insidieusement. Les familles du secteur Gargan ou du quartier Jacob connaissent bien ces désagréments du quotidien.</p>
<p class="mt-4">Au fil du temps, cette saleté visible et invisible (acariens) crée un inconfort. On hésite à s'asseoir, les allergies se réveillent. <strong>Retrouver de la fraîcheur est simple.</strong> Notre intervention à domicile désincruste les fibres en profondeur pour que vous puissiez à nouveau profiter d'un intérieur sain et accueillant sans changer de mobilier.</p>`,

      uniqueDeepDive: `<p><strong>Repérage des taches :</strong> À notre arrivée, nous faisons le tour avec vous. Nous identifions la matière (tissu, velours, microfibre) et traitons manuellement les taches tenaces (feutre, café, graisse) avec des <strong>détachants spécifiques</strong> pour les dissoudre avant le grand nettoyage. Cette étape ciblée maximise l'efficacité du traitement.</p>
<p><strong>Injection-Extraction en profondeur :</strong> Nous utilisons une machine professionnelle d'injection-extraction. Elle envoie de l'eau tiède et du nettoyant au cœur du tissu et l'aspire aussitôt avec la saleté. C'est comme un shampoing en profondeur qui retire la grisaille et les allergènes <strong>sans saturer votre salon</strong>. Les coussins sont traités individuellement pour un résultat homogène.</p>
<p><strong>Séchage optimisé :</strong> Grâce à une aspiration puissante, nous retirons le maximum d'eau. Nous vous conseillons sur la ventilation de la pièce pour que vous puissiez vous réinstaller confortablement sur votre canapé ou dormir sur votre matelas le plus vite possible (généralement 4 à 8 heures selon épaisseur et aération).</p>`,

      specificChallenges: [
        "Traces de boue et poils d'animaux fréquents dans les zones pavillonnaires avec jardin (Gargan).",
        "Matelas tachés par la transpiration ou l'humidité dans les chambres mal ventilées.",
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
  ],
};

export default city;
