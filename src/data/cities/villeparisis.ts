// src/data/cities/villeparisis.ts
// Balises autorisées :
// <p>`, `<h3>`, `<ul>`, `<li>`, `<strong>`, <br>, <p class="mt-4">
// dans hubintro / uniqueintro / uniquedeepdive / faq / faqAddition

import type { City } from "~/types/geo";

const city: City = {
  name: "Villeparisis",
  slug: "villeparisis",
  postalCodes: ["77270"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  customDescription:
    "Traversée par l’axe majeur de la RN3 et bordée par le Canal de l’Ourcq, Villeparisis combine zones pavillonnaires denses et activité commerciale soutenue. Ce dynamisme génère un besoin constant en entretien technique : moquettes de halls, parkings autour de la gare et balcons exposés aux particules routières.",

  hubIntro: `<p>Pour les gestionnaires de copropriétés et les entreprises implantées à Villeparisis, la maintenance immobilière exige une réactivité forte face aux contraintes urbaines locales, notamment la poussière liée au trafic routier et l’humidité des zones proches du canal. Klinova intervient comme partenaire technique de proximité, en coordination avec votre syndic de copropriété.</p>
<p class="mt-4">Notre approche repose sur une gestion globale des surfaces, du parking au dernier étage. Nous déployons des protocoles d’hygiène stricts adaptés à la typologie des bâtiments de Villeparisis, des secteurs en rénovation aux zones pavillonnaires, pour préserver l’image et la valeur d’un immeuble sur la durée.</p>
<ul>
  <li><strong>Partenariat syndic rigoureux :</strong> gestion autonome des accès et communication fluide avec le conseil syndical.</li>
  <li><strong>Maintenance immobilière technique :</strong> traitement spécialisé des sols, textiles et surfaces extérieures.</li>
  <li><strong>Protocole et traçabilité :</strong> suivi d’intervention structuré pour maintenir une qualité constante dans le temps.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement noir des façades et balcons lié aux particules fines du trafic dense de la RN3.",
    "Développement accéléré de mousses et lichens sur les terrasses dans les secteurs plus humides proches du Canal de l’Ourcq.",
    "Poussières de chantier dans les secteurs en rénovation du Vieux-Pays qui s'incrustent dans les moquettes d'entrée.",
    "Sols de parkings souterrains marqués par les hydrocarbures et la gomme dans les résidences à forte rotation pendulaire autour des gares.",
  ],

  districts: [
    "Quartier Le Marché",
    "Quartier Boisparisis",
    "Quartier Normandie / Niemen / Poitou",
    "Quartier Renan / Lavoisier / La Poste",
    "Quartier Centre culturel",
    "Quartier Le Parisis",
    "Quartier Vieux Pays",
    "Quartier Bois Fleuri",
  ],

  nearbyCities: [
  "claye-souilly",
  "chelles",
  "gagny",
  "vaires-sur-marne",
  "gournay-sur-marne",
],

  landmarks: [
    "Mairie de Villeparisis",
    "Gare de Villeparisis - Mitry-le-Neuf (RER B)",
    "Canal de l’Ourcq",
    "Église Notre-Dame-de-la-Paix",
    "Centre culturel Jacques-Prévert",
    "ZAC de l’Ambrésis",
  ],

  faq: [
    {
      question:
        "Quelle est votre réactivité pour une intervention dans le secteur de la gare de Villeparisis - Mitry-le-Neuf ?",
      answer:
        "Grâce à notre ancrage local en Seine-et-Marne, nos équipes techniques peuvent intervenir rapidement sur l’ensemble de Villeparisis. Nous avons l’habitude des secteurs plus denses autour de la gare et des zones commerçantes, et nous adaptons nos créneaux pour limiter la gêne et préserver la circulation des résidents.",
    },
    {
      question:
        "Comment gérez-vous l’accès aux copropriétés sécurisées (Vigik, clés) pour l’entretien régulier ?",
      answer:
        "Nous mettons en place un protocole de gestion des accès dès le début : remise et traçabilité des passes Vigik, modalités de restitution, et interlocuteur désigné côté syndic ou gardien. Nos techniciens sont formés à travailler en autonomie dans les parties communes, avec une organisation claire et sécurisée.",
    },
    {
      question:
        "Le déplacement pour un devis est-il payant pour les particuliers à Villeparisis ?",
      answer:
        "Non. Le déplacement pour réaliser un diagnostic technique sur place est gratuit. Cela nous permet de vérifier la configuration (accès, surfaces, état des supports, contraintes de voisinage) et de vous proposer une intervention adaptée, sans engagement.",
    },
    {
      question:
        "Pouvez-vous intervenir tôt le matin pour le nettoyage des parkings afin de ne pas gêner les départs au travail ?",
      answer:
        "Oui. Quand le stationnement est contraint, nous planifions le décrassage sur des créneaux matinaux ou en heures creuses, avec une organisation par zones. L’objectif est de garder une partie des places disponibles pendant l’intervention, tout en sécurisant la zone de travail et les circulations.",
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
        "Assurez la pérennité de vos revêtements de sol et l’hygiène des parties communes à Villeparisis grâce à un protocole de nettoyage qui restaure la fibre et valorise immédiatement l’image de votre copropriété.",

      whyUsBullets: [
        "Maîtrise des typologies locales, du pavillonnaire de Bois Fleuri aux copropriétés denses du centre.",
        "Machines industrielles pour une injection-extraction performante et une extraction maximale des fluides.",
        "Interventions en heures creuses pour limiter la gêne dans les parties communes proches de la gare.",
        "Rapport technique transmis au gestionnaire pour alimenter le suivi du carnet d’entretien.",
      ],

      uniqueIntro: `<p>Les immeubles situés à proximité d’axes passants comme la RN3 ou autour de la gare de Villeparisis - Mitry-le-Neuf subissent un apport constant de polluants extérieurs. Dans les parties communes, les moquettes accumulent poussières fines, hydrocarbures et résidus de terre, créant des “chemins de marche” grisâtres visibles dès le premier regard.</p>
<p class="mt-4">Cet encrassement particulaire ne dégrade pas seulement l’esthétique : il accélère l’abrasion mécanique des fibres à chaque passage. Pour un gestionnaire d’immeuble ou un conseil syndical, laisser ces revêtements s’encrasser revient à accepter une dévalorisation du bâti. Une maintenance technique curative, réalisée avec un équipement industriel, reste indispensable pour extraire ces polluants au cœur de la trame et limiter l’usure prématurée.</p>`,

      uniqueDeepDive: `<p>Chaque intervention débute par un diagnostic technique des fibres (synthétique, laine, dalles de moquette) afin de définir la chimie et la température de chauffe adaptées. Nos techniciens protègent systématiquement les plinthes et les parties basses des murs, puis balisent la zone d’intervention. Dans les résidences du Vieux-Pays comme dans les constructions récentes de Boisparisis, nous adaptons la logistique aux accès parfois étroits et aux escaliers sans ascenseur.</p>
<p class="mt-4">Le traitement s’effectue par injection-extraction à haute performance : une solution nettoyante est propulsée sous pression pour décoller les salissures, puis immédiatement aspirée par une turbine puissante. Nous insistons sur les zones de piétinement intense (devant les ascenseurs, paliers intermédiaires) avec des passes croisées. La maîtrise de l’humidité résiduelle est centrale pour garantir un séchage rapide et éviter toute odeur, notamment dans les immeubles proches du Canal de l’Ourcq où l’hygrométrie peut être plus élevée. Nous préconisons une fréquence de 12 à 18 mois pour maintenir ce niveau de résultat.</p>`,

      specificChallenges: [
        "Les poussières liées aux travaux ponctuels (ravalement, cages d’escalier, voirie) s’incrustent profondément dans les fibres.",
        "L’humidité ambiante près du Canal de l’Ourcq impose une vigilance accrue sur l’extraction pour garantir un séchage sain.",
        "Cages d’escalier étroites dans certains immeubles : matériel portatif nécessaire pour contremarches, angles et paliers.",
      ],

      faqAdditions: [
        {
          question:
            "La méthode d’injection-extraction est-elle adaptée aux parties communes à très fort passage ?",
          answer:
            "Oui. C’est précisément la méthode recommandée pour les parties communes très fréquentées, notamment dans les entrées d’immeubles situées près de la gare. La puissance mécanique permet de désincruster les salissures urbaines (boue, pollution) que l’aspirateur ne peut pas retirer. Pour ces zones, nous recommandons souvent une fréquence plus soutenue afin de préserver l’aspect et la tenue de la fibre.",
        },
        {
          question:
            "Intervenez-vous dans les bureaux et locaux professionnels de la ZAC de l’Ambrésis ?",
          answer:
            "Oui, nous assurons la maintenance des moquettes pour les entreprises et bureaux. Nous adaptons nos horaires d’intervention (tôt le matin ou en fin de journée) pour ne pas perturber l’activité de la zone. Le séchage rapide permet une réutilisation des locaux dès le lendemain matin, sous réserve d’une aération normale et des conditions sur place.",
        },
        {
          question:
            "Le traitement présente-t-il un risque de décoloration ou de dégorgement pour les moquettes ?",
          answer:
            "Non, car le diagnostic initial inclut un contrôle de la stabilité des couleurs et de la nature de la fibre. Nous utilisons des solutions au pH maîtrisé, spécifiquement formulées pour nettoyer sans agresser la teinture ni la colle des dalles ou des lés. L’objectif est d’obtenir un résultat net tout en respectant l’intégrité du revêtement et sa tenue dans le temps.",
        },
        {
          question: "Comment sont informés les résidents avant l’intervention technique ?",
          answer:
            "La communication fait partie du protocole. Nous fournissons des avis de passage à afficher dans les halls (ou via le syndic) avec la date, la durée estimée et les consignes de circulation pendant le séchage. L’objectif est d’assurer la sécurité de tous, de limiter les passages sur les zones humides et de permettre aux techniciens de travailler efficacement, sans perturber l’usage normal des parties communes.",
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
        "Garantissez à vos résidents de Villeparisis un stationnement sécurisé et lisible grâce à un décrassage planifié qui restaure l’adhérence des sols et la clarté des marquages, sans désorganiser le quotidien de la copropriété.",

      whyUsBullets: [
        "Habitués aux plannings contraints autour de la gare et des zones d’activité de Villeparisis.",
        "Matériel industriel adapté aux parkings souterrains, rampes, angles et grandes surfaces.",
        "Phasage par zones et rotation des véhicules pour maintenir une capacité de stationnement.",
        "Suivi technique précis : évacuations, finitions, zones sensibles et remise en service progressive.",
      ],

      uniqueIntro: `<p>Dans les résidences à forte densité situées près de la gare RER ou le long de l’axe RN3, la gestion des parkings est un défi logistique permanent. La rotation quotidienne des véhicules pendulaires génère une accumulation rapide de poussières de freinage et de résidus d’hydrocarbures, rendant les sols glissants et la signalétique illisible.</p>
<p class="mt-4">Pour un gestionnaire d’immeuble, cette dégradation crée un sentiment d’insécurité et complique l’entretien courant. Au-delà de l’aspect esthétique, il s’agit de maintenir la fonctionnalité des lieux. Une remise en état professionnelle, rigoureusement coordonnée pour limiter la gêne des occupants, permet de rétablir la luminosité et la sécurité des circulations, valorisant ainsi la gestion globale de l’immeuble.</p>`,

      uniqueDeepDive: `<p>La réussite d’une intervention à Villeparisis repose avant tout sur la préparation. Nous effectuons une visite technique pour valider les accès (hauteur, rampes), le type de sol (béton, résine) et le bon fonctionnement des évacuations. En amont, nous définissons avec le conseil syndical ou le gardien un plan de communication clair pour organiser la libération des emplacements, souvent par zones successives afin de maintenir une capacité de stationnement. Le jour J, nous sécurisons le périmètre et procédons à un dépoussiérage mécanique complet avant tout lavage.</p>
<p class="mt-4">L’étape de lavage utilise une autolaveuse industrielle, couplée si nécessaire à une haute pression maîtrisée sur les zones très encrassées. Nous appliquons des dégraissants professionnels tout en gérant strictement la récupération des eaux usées, pour éviter la saturation des pompes de relevage et limiter les flaques. Une attention particulière est portée aux rampes d’accès, pieds de murs et angles. Une fois le sol séché et les marquages ravivés, la zone est rouverte aux résidents. Pour éviter un nouvel encrassement critique, nous préconisons une intervention annuelle ou semestrielle planifiée au budget.</p>`,

      specificChallenges: [
        "Rotation intense des véhicules pendulaires (proximité RER B) : phasage strict pour traiter sans libérer totalement les plateaux.",
        "Pollution atmosphérique liée à la RN3 : dépôt constant de particules grasses noires sur sols, murs et zones d’éclairage.",
        "Dans certains parkings plus anciens : ventilation limitée, gestion rigoureuse du séchage et des circulations pendant l’intervention.",
      ],

      faqAdditions: [
        {
          question: "La poussière noire typique du secteur routier revient-elle vite ?",
          answer:
            "Cette poussière fine, liée au trafic dense autour de Villeparisis, est inévitable. Cependant, notre intervention mécanique de fond élimine la couche “grasse” qui la fixe au sol. Avec un décrassage annuel planifié, vous maintenez un niveau de propreté acceptable et évitez que le sol ne redevienne noir et glissant en quelques semaines.",
        },
        {
          question: "Est-il obligatoire de vider entièrement le parking pour nettoyer ?",
          answer:
            "Non, nous savons que le stationnement est tendu à Villeparisis. Nous privilégions une organisation par demi-plateaux ou par zones. Nous coordonnons cela avec vous pour que les résidents puissent déplacer leurs véhicules en interne, sans devoir se garer dans la rue, tout en gardant une zone de travail sécurisée et clairement balisée.",
        },
        {
          question: "Pouvez-vous récupérer les taches d’huile anciennes ?",
          answer:
            "Sur le plan technique, nous éliminons tout résidu gras en surface pour supprimer le risque de glissade. Cependant, si l’huile a pénétré la porosité du béton depuis des années, une auréole visuelle peut persister. Notre priorité est l’hygiène et la sécurité, en stoppant l’extension de la tache et en stabilisant la zone.",
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans le parking ?",
          answer:
            "C’est un point de contrôle majeur. Nous vérifions les pentes, les siphons et les zones où l’eau a tendance à stagner. Pendant le lavage, l’eau chargée est récupérée par nos machines et nous surveillons en continu l’écoulement pour éviter toute flaque durable. L’objectif est de laisser un sol propre, sec et praticable, sans rejets inadaptés ni accumulation d’effluents.",
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
        "Profitez à nouveau de vos extérieurs à Villeparisis avec un balcon impeccable, débarrassé de la pollution et des mousses, prêt à accueillir vos moments de détente dès les premiers rayons de soleil.",

      whyUsBullets: [
        "Habitués aux pavillons de Boisparisis comme aux balcons et loggias d’appartements du centre.",
        "Produits efficaces contre mousses et pollution, adaptés aux supports sans agresser joints ni surfaces.",
        "Intervention discrète et organisée pour préserver la tranquillité du voisinage en copropriété.",
        "Finitions soignées incluant garde-corps, rails et vitres accessibles depuis le balcon.",
      ],

      uniqueIntro: `<p>Avoir un balcon ou une terrasse à Villeparisis, que ce soit au Bois Fleuri ou dans le secteur du Vieux-Pays, devrait être un plaisir. Pourtant, la réalité est souvent différente : au sortir de l’hiver, le sol devient grisâtre, les joints se noircissent sous l’effet de la pollution routière, et des dépôts verts glissants apparaissent dans les zones à l’ombre.</p>
<p class="mt-4">Face à ces salissures tenaces, l’envie de s’installer dehors disparaît. L’espace finit par servir de débarras, les volets restent fermés, et la poussière urbaine combinée aux résidus de jardinières donne une impression de saleté permanente difficile à rattraper seul. Une remise en état professionnelle transforme alors ce balcon délaissé en une véritable pièce extérieure, saine et accueillante pour les repas ou les moments de détente.</p>`,

      uniqueDeepDive: `<p>Notre intervention est conçue pour être simple et sans contrainte pour vous. Nous commençons par protéger le passage dans le logement, puis nous déplaçons avec précaution le mobilier de jardin et les plantes. Avant tout lavage, les feuilles mortes, la terre accumulée et les résidus sont retirés manuellement afin de travailler sur une surface dégagée. Un nettoyant doux, choisi selon le support (carrelage, béton, bois), est ensuite appliqué, avec un brossage soigné des zones encrassées, plinthes et angles compris.</p>
<p class="mt-4">Le rinçage s’effectue à pression maîtrisée, suffisante pour décoller les salissures sans abîmer les joints ni projeter d’eau sur les vitrages. En copropriété, le respect du voisinage reste une priorité absolue : l’eau est guidée à la raclette vers les évacuations et, lorsque celles-ci sont absentes ou sensibles, aspirée au fur et à mesure. Nous terminons par l’essuyage des garde-corps et des surfaces verticales, en laissant un sol propre prêt à sécher naturellement.</p>`,

      specificChallenges: [
        "Proximité de la RN3 : dépôt régulier de pollution noire et grasse sur sols, garde-corps et mobilier extérieur.",
        "Humidité liée au Canal de l’Ourcq favorisant le retour des mousses sur terrasses exposées au nord ou ombragées.",
        "Dans le quartier rénové du Vieux-Pays, évacuations parfois sensibles nécessitant une aspiration systématique des eaux de lavage.",
      ],

      faqAdditions: [
        {
          question:
            "Mon carrelage est ancien, votre méthode ne risque-t-elle pas de faire sauter les joints ?",
          answer:
            "Nous adaptons toujours la méthode à l’état et à l’âge du revêtement. Sur un carrelage ancien ou des dalles plus fragiles, nous privilégions l’action des produits et le brossage manuel plutôt qu’une pression élevée. L’objectif est de nettoyer en profondeur tout en respectant les joints et la structure du sol, sans créer de fragilité supplémentaire.",
        },
        {
          question:
            "J’habite en étage, comment être sûr que l’eau sale ne coulera pas chez le voisin du dessous ?",
          answer:
            "C’est une priorité absolue lors de nos interventions en copropriété. Nous n’inondons jamais un balcon. L’eau est guidée vers les évacuations existantes à l’aide de raclettes et, en l’absence d’écoulement fiable, aspirée au fur et à mesure avec du matériel professionnel. Cette organisation évite toute coulure sur la façade ou chez les voisins.",
        },
        {
          question: "Vos produits de nettoyage sont-ils dangereux pour mes jardinières ou mes animaux ?",
          answer:
            "Non. Les plantes sont déplacées ou protégées avant l’intervention, et les produits utilisés sont rincés abondamment après nettoyage. Ils ne restent pas en contact avec la terre des pots. Une fois le sol rincé et sec, l’environnement est neutre pour les végétaux et sans danger pour les animaux de compagnie.",
        },
        {
          question: "Quand pourrai-je remettre ma table et mes chaises sur le balcon ?",
          answer:
            "Le séchage est généralement rapide. Sur une terrasse carrelée bien exposée, comptez une à deux heures par temps sec. Sur un support plus poreux, comme le béton ou le bois, le délai peut être un peu plus long. Nous vous conseillons simplement d’attendre que le sol soit sec au toucher avant de réinstaller le mobilier.",
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
        "Récupérez un espace extérieur sain à Villeparisis grâce à notre protocole de désinfection totale, éliminant fientes et risques pathogènes pour une réutilisation immédiate et sécurisée de votre balcon.",

      whyUsBullets: [
        "Connaissance des zones à risques : Parc Balzac, loggias du quartier Le Parisis et secteurs du Vieux-Pays.",
        "Protocole sanitaire normé : biocides professionnels et désinfection avec respect strict du temps de contact.",
        "Gestion stricte des déchets : conditionnement étanche immédiat et évacuation sécurisée hors de la résidence.",
        "Prévention : conseils sur les dispositifs d’éloignement adaptés à la configuration de votre balcon.",
      ],

      uniqueIntro: `<p>La présence de pigeons est une réalité à Villeparisis, accentuée par les espaces verts comme le Parc Honoré de Balzac ou les abords du Canal de l’Ourcq. Lorsqu’ils colonisent un balcon ou une loggia, la situation dépasse le simple désagrément visuel : l’accumulation de fientes crée un foyer bactériologique actif. Les déjections acides attaquent les revêtements, tandis que les odeurs rendent l’ouverture des fenêtres difficile.</p>
<p class="mt-4">Le risque sanitaire est réel : les fientes sèches se transforment en poussières fines chargées d’agents pathogènes, inhalables par les occupants. Laisser la situation s’aggraver expose le logement à une contamination durable et alimente les conflits avec le voisinage en raison des nuisances. Seule une décontamination chimique et mécanique permet de stopper ce cycle d’insalubrité.</p>`,

      uniqueDeepDive: `<p>Notre intervention suit une procédure de sécurité biologique stricte, indispensable pour protéger la santé des occupants et du technicien. Avant toute action, la zone est confinée et notre intervenant s’équipe d’EPI complets (combinaison étanche, gants, masque FFP2). L’étape critique est l’humidification préalable des fientes sèches : cela empêche la volatilisation de poussières contaminées. Nous procédons ensuite au grattage manuel et à l’évacuation des nids et débris dans des sacs hermétiques scellés, conditionnés pour une évacuation adaptée.</p>
<p class="mt-4">Une fois le support dégagé, nous nettoyons les sols, murs et garde-corps avec des détergents professionnels pour éliminer les résidus organiques. La phase finale est la désinfection par application d’un virucide/bactéricide homologué, en respectant scrupuleusement le temps de contact pour neutraliser les germes. Nous rinçons en maîtrisant les écoulements pour ne pas souiller la façade, puis nous assurons une ventilation des lieux avant de vous restituer un balcon assaini et réutilisable.</p>`,

      specificChallenges: [
        "Proximité des espaces verts (Parc Balzac, Canal) : recolonisation rapide si aucune mesure dissuasive n’est prise.",
        "Acidité des fientes attaquant la porosité du béton sur certains balcons, nécessitant un nettoyage approfondi.",
        "Milieu dense : conditionnement étanche immédiat des déchets biologiques pour éviter toute dispersion.",
      ],

      faqAdditions: [
        {
          question: "Quels sont les risques si je nettoie moi-même sans protection ?",
          answer:
            "Manipuler des fientes sèches sans masque FFP2 vous expose à l’inhalation de poussières contenant des bactéries ou champignons responsables de maladies comme l’ornithose ou la salmonellose. De plus, un nettoyage domestique disperse souvent les contaminants au lieu de les éliminer. L’intervention professionnelle est une mesure de sécurité sanitaire.",
        },
        {
          question: "Les produits utilisés sont-ils dangereux pour mes animaux de compagnie ?",
          answer:
            "Les produits biocides sont puissants lors de l’application pour détruire les germes. Cependant, après le rinçage complet et la phase de séchage, les surfaces deviennent inertes et sûres. Nous vous indiquerons précisément quand vous pourrez laisser sortir vos animaux sur le balcon sans aucun risque.",
        },
        {
          question: "Les fientes ont-elles endommagé mon balcon de façon irréversible ?",
          answer:
            "L’acide urique contenu dans les fientes est très corrosif. S’il est resté longtemps en contact avec du béton ou de la pierre, il peut avoir créé des micro-fissures ou des taches mates indélébiles. Notre intervention assainit et nettoie, mais ne peut pas toujours réparer l’érosion chimique du matériau.",
        },
        {
          question: "Où jetez-vous les sacs de fientes ?",
          answer:
            "Nous assurons une évacuation totale. Les sacs hermétiques contenant les débris sont chargés directement dans notre véhicule. Rien n'est laissé dans les locaux poubelles de votre immeuble ou de votre pavillon.",
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
        "Retrouvez le plaisir d’un intérieur sain à Villeparisis avec des canapés et matelas nettoyés en profondeur, éliminant la majorité des acariens et allergènes pour le confort de toute la famille.",

      whyUsBullets: [
        "Habitude des intérieurs familiaux de Villeparisis, des pavillons avec jardin aux appartements.",
        "Méthode adaptée à la vie de famille, contribuant à réduire acariens, poussières et salissures incrustées.",
        "Intervention à domicile discrète avec protection soignée des sols, parquets et tapis.",
        "Conseils simples et concrets pour entretenir les textiles entre deux nettoyages professionnels.",
      ],

      uniqueIntro: `<p>Dans les maisons familiales de Boisparisis ou les appartements du centre-ville, le canapé est souvent le véritable QG du foyer. Entre les enfants qui prennent le goûter devant la télévision, le chat qui rentre du jardin et les soirées entre amis, les textiles sont mis à rude épreuve. Au-delà des taches accidentelles de café ou de chocolat, la poussière du quotidien finit par s’incruster et ternir les tissus.</p>
<p class="mt-4">On finit par ne plus voir que cela : accoudoirs grisâtres, odeur de renfermé, impression que le ménage n’est jamais vraiment terminé. Pour les personnes sensibles, les acariens peuvent aussi devenir une source d’inconfort. Faire appel à un professionnel pour désencrasser vos canapés ou vos tapis, c’est la méthode la plus efficace pour retrouver un mobilier propre, frais et agréable à vivre, sans avoir à le remplacer.</p>`,

      uniqueDeepDive: `<p>Lors de notre intervention à domicile, nous commençons toujours par identifier précisément la matière de votre canapé, tapis ou matelas. Cette étape est essentielle pour adapter la méthode aux fibres, qu’elles soient résistantes ou plus délicates. Les sols autour sont protégés, puis un pré-traitement ciblé est appliqué sur les taches visibles, comme les zones de frottement ou les petits accidents du quotidien.</p>
<p class="mt-4">Nous procédons ensuite au nettoyage par injection-extraction. La machine injecte de l’eau propre au cœur des fibres et l’aspire immédiatement avec les salissures. Nous veillons à ne pas détremper les textiles afin de favoriser un séchage rapide. Avant de quitter les lieux, nous vous donnons des conseils simples d’aération pour accélérer le séchage et vous permettre de réutiliser vos assises le plus rapidement possible, souvent en fin de journée.</p>`,

      specificChallenges: [
        "Poussière de chantier du quartier Vieux-Pays qui s’infiltre et grise rapidement les canapés en tissu clair.",
        "Allergènes, pollens et poils ramenés par les animaux de compagnie depuis les jardins ou le Parc Balzac.",
        "Tissus épais ou mousses denses nécessitant une extraction soigneuse pour éviter l’humidité résiduelle.",
      ],

      faqAdditions: [
        {
          question: "Est-ce que le nettoyage est efficace pour les allergies aux acariens ?",
          answer:
            "Oui, c’est généralement très efficace. L’aspirateur domestique n’agit qu’en surface, alors que notre méthode permet d’extraire en profondeur la poussière et les résidus liés aux acariens présents dans les matelas et les canapés. De nombreuses personnes sensibles constatent une amélioration du confort après l’intervention.",
        },
        {
          question: "Mon chat a uriné sur le canapé, l’odeur peut-elle vraiment disparaître ?",
          answer:
            "Nous utilisons des produits spécifiques qui agissent sur les bactéries responsables des odeurs, plutôt que de masquer le problème. Si l’urine n’a pas traversé toute la mousse jusqu’à la structure, les résultats sont généralement très satisfaisants. Une intervention rapide reste toutefois déterminante pour limiter les traces durables.",
        },
        {
          question:
            "Combien de temps faut-il attendre avant de pouvoir s’asseoir à nouveausur le canapé?",
          answer:
            "Le délai dépend des conditions de ventilation et de la température. En règle générale, le tissu reste légèrement humide pendant 4 à 12 heures. Nous extrayons un maximum d’eau avec la machine, mais un séchage à l’air libre est nécessaire. L’idéal est de programmer l’intervention le matin pour profiter du canapé le soir.",
        },
        {
          question: "Dois-je préparer le salon avant votre arrivée ?",
          answer:
            "Non, inutile de tout déplacer. Il suffit de dégager légèrement l’espace autour du canapé, du tapis ou du matelas. Les petits meubles gênants, comme une table basse ou un fauteuil léger, peuvent être déplacés par notre technicien avec précaution puis remis en place après l’intervention.",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
