import type { City } from "~/types/geo";

const city: City = {
  name: "Bussy-Saint-Georges",
  slug: "bussy-saint-georges",
  postalCodes: ["77600"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  customDescription:
    "Intégrée à la ville nouvelle de Marne-la-Vallée, Bussy-Saint-Georges combine une forte densité résidentielle autour de la gare RER A et des zones pavillonnaires comme le Sycomore. L'entretien régulier des moquettes, parkings et balcons y préserve directement la valeur patrimoniale des copropriétés face aux flux des axes A4 et A104.",

  hubIntro: `<p>À Bussy-Saint-Georges, Klinova accompagne syndics, bailleurs et occupants dans une <strong>gestion structurée de la propreté et de la maintenance des immeubles</strong>. Notre approche protocolisée et notre lecture des contraintes locales (accès, stationnement, horaires, circulation) permettent des interventions nettes, maîtrisées et adaptées au rythme des résidences.</p>
<p class="mt-4">Nous intervenons aussi bien dans les ensembles collectifs proches de la gare RER A que dans les secteurs résidentiels (Sycomore, Vieux Village) et les zones d'activité. <strong>Chaque intervention suit un protocole documenté, avec compte-rendu photographique et recommandations d’entretien</strong>, pour simplifier le suivi côté gestion et sécuriser les décisions en AG.</p>
<ul>
  <li><strong>Proximité opérationnelle :</strong> équipes en Île-de-France, réactivité renforcée sur Marne-la-Vallée.</li>
  <li><strong>Protocoles adaptés :</strong> halls, circulations, balcons et parkings traités selon les supports.</li>
  <li><strong>Coordination :</strong> intervention par zones, gestion des accès et rotations de véhicules.</li>
  <li><strong>Suivi qualité :</strong> compte-rendu, photos, recommandations d’entretien après intervention.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement rapide des moquettes dans les halls d'immeubles proches de la gare RER A, lié au fort passage et aux particules fines.",
    "Accumulation de fientes de pigeons sur les balcons et terrasses, notamment dans les quartiers du Sycomore et du Vieux Village.",
    "Traces d'hydrocarbures et dépôts de boues dans les parkings souterrains, aggravés par l'humidité et le trafic.",
    "Dépôts verts et salissures organiques sur les balcons exposés aux espaces verts (parc du Génitoy, secteur du golf).",
  ],

  districts: [
    "Vieux Village",
    "Centre-Ville (autour de la gare RER A)",
    "Sycomore",
    "Scientifiques",
    "Clos, Tillet, Génitoy et Golf",
  ],

nearbyCities: [
        "lagny-sur-marne",
        "torcy",
        "serris",
        "vaires-sur-marne",
        "pontault-combault",
        "champs-sur-marne"
      ],

  landmarks: [
    "Mairie de Bussy-Saint-Georges",
    "Gare RER A de Bussy-Saint-Georges",
    "Parc d'activités Gustave-Eiffel",
    "Golf de Bussy-Guermantes",
    "Église Saint-Georges (Vieux Village)",
    "Église Notre-Dame-du-Val (centre-ville)",
  ],

  faq: [
    {
      question:
        "Comment Klinova gère-t-elle les interventions urgentes à Bussy-Saint-Georges ?",
      answer:
        "<p><strong>En cas de sinistre ou de salissures importantes,</strong> nous réalisons un diagnostic rapide sur site, une mise en sécurité immédiate, puis une intervention ciblée avec du matériel adapté aux contraintes locales (parkings souterrains, balcons en étage, accès étroits).</p>",
    },
    {
      question:
        "Le déplacement pour un devis à Bussy-Saint-Georges est-il facturé, même pour les quartiers éloignés du centre ?",
      answer:
        "<p><strong>Non, jamais.</strong> Que vous soyez situés au Sycomore, au Vieux Village ou près du golf de Bussy-Guermantes, nous nous déplaçons gratuitement pour réaliser un diagnostic sur site. Cela nous permet d'évaluer les surfaces, les contraintes d'accès et de vous remettre un chiffrage précis sous 48 heures, sans engagement.</p>",
    },
    {
      question:
        "Comment gérez-vous les contraintes de stationnement autour des résidences ?",
      answer:
        "<p><strong>Les interventions sont planifiées par zones,</strong> avec des créneaux adaptés et une signalisation temporaire si nécessaire. Cette organisation limite la gêne pour les résidents et sécurise les accès pendant le chantier.</p>",
    },
    {
      question: "Comment maintenir la qualité dans les halls très fréquentés ?",
      answer:
        "<p><strong>Les zones à fort passage bénéficient d'un protocole renforcé,</strong> adapté au revêtement, et d'interventions positionnées hors pics d'affluence. Un reporting photo est transmis après chaque passage.</p>",
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
        "À Bussy-Saint-Georges, redonnez aux moquettes de halls et d'escaliers leur aspect d'origine : fibres relevées, circulation plus agréable et image de l'immeuble valorisée auprès des résidents et visiteurs.",

      whyUsBullets: [
        "Habitude des halls à fort passage : gare RER A, commerces, entrées ouvertes sur rue.",
        "Injection-extraction maîtrisée : produits sans résidu, passes ciblées, extraction efficace en profondeur.",
        "Organisation en parties communes : balisage, travail par paliers, gêne limitée et accès sécurisés.",
      ],

      uniqueIntro: `<p>À Bussy-Saint-Georges, les moquettes des halls, cages d'escalier et paliers s'encrassent vite : poussières fines, traces de chaussures, taches ponctuelles et fibres qui se ternissent sous le passage. Le résultat se voit immédiatement et donne une impression de laisser-aller, même dans des résidences récentes.</p>
<p class="mt-4">Les immeubles proches de la gare RER A et des axes A4/A104 sont particulièrement exposés, avec des entrées de boue, d'humidité au rez-de-chaussée et une sollicitation continue. Un nettoyage professionnel structuré permet d'assainir le revêtement, de récupérer un rendu plus uniforme et de prolonger la durée de vie de la moquette.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique sur place</h3>
<p>Nous évaluons la moquette (type de fibre, épaisseur, sens de pose), le niveau d'encrassement et les taches à traiter. Nous repérons les contraintes d'accès (escaliers, ascenseurs étroits, paliers) et la ventilation disponible.</p>
<h3>2. Préparation et protection des circulations</h3>
<p>Les zones sont balisées, les angles et plinthes protégés et le travail est organisé par paliers/étages pour maintenir un passage sécurisé. La coordination avec le syndic permet d'informer les occupants et de choisir un créneau qui limite les perturbations.</p>
<h3>3. Injection-extraction + finitions</h3>
<p>Pré-traitement des zones marquées, agitation/brossage contrôlé, puis injection-extraction avec aspiration puissante pour retirer l'eau chargée. Les zones de fort trafic (entrées, devant les ascenseurs) reçoivent des passes supplémentaires. En fin d'intervention, une ventilation ciblée est recommandée.</p>`,

      specificChallenges: [
        "Autour de la gare RER A, le passage et les particules fines accélèrent le ternissement des fibres et l'encrassement en surface.",
        "En rez-de-chaussée, l'humidité et les entrées de boue imposent une extraction rigoureuse pour éviter les résidus d'eau.",
        "Dans les escaliers étroits, l'organisation par paliers et la gestion du balisage conditionnent la qualité et la sécurité.",
        "Dans les résidences avec accès jardin, des dépôts terreux et organiques s'incrustent plus vite dans les zones d'entrée.",
      ],

      faqAdditions: [
        {
          question:
            "Comment traitez-vous les moquettes très sollicitées dans les halls proches de la gare ?",
          answer:
            "<p>Nous renforçons le protocole sur les zones d’entrée et de circulation : pré-traitement ciblé, passes supplémentaires en injection-extraction et contrôle de l’extraction pour retirer les particules fines. L’objectif est d’obtenir un rendu plus uniforme et une propreté visible, sans saturer la moquette d’eau.</p>",
        },
        {
          question:
            "Intervenez-vous aussi bien en petite copropriété qu’en grande résidence ?",
          answer:
            "<p>Oui. Nous adaptons l’organisation au volume et aux contraintes d’accès : intervention par paliers, balisage, circulation maintenue quand c’est possible, et planification avec le syndic. Le matériel est dimensionné pour travailler proprement même dans des cages d’escalier étroites.</p>",
        },
        {
          question:
            "Le nettoyage par injection-extraction risque-t-il d’abîmer une moquette ancienne ?",
          answer:
            "<p>Non, car la méthode est réglée selon l’état du revêtement : pression, débit, brossage et produit adaptés. Sur moquettes anciennes, on privilégie des réglages plus doux et un rinçage/extraction soignés pour préserver les fibres et éviter les auréoles.</p>",
        },
        {
          question:
            "Comment limitez-vous la gêne des résidents pendant l’intervention ?",
          answer:
            "<p>Nous intervenons sur des créneaux qui réduisent les pics de passage, balisons clairement les zones et travaillons par paliers pour conserver des accès sécurisés. Le séchage est facilité par une aération/ventilation simple, ce qui limite la durée d’indisponibilité.</p>",
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
        "À Bussy-Saint-Georges, retrouvez un parking plus sûr et plus lisible : sols dégraissés, traces noires et boues réduites, circulation et zones de stationnement visuellement clarifiées.",

      whyUsBullets: [
        "Habitude des parkings à contraintes : rampes, bas plafonds, accès serrés, circulation continue.",
        "Matériel et réglages adaptés : autolaveuse, brossage, dégraissage ciblé selon les zones.",
        "Organisation par zones : rotation véhicules, horaires cadrés, coordination simple avec le syndic.",
      ],

      uniqueIntro: `<p>À Bussy-Saint-Georges, les parkings souterrains et aériens s'encrassent vite : poussière noire, boues, traces de pneus, taches d'huile, murs marqués par les frottements et marquages au sol qui se ternissent. Combiné à un éclairage parfois limité, l’ensemble donne rapidement une impression de négligence, surtout près de la gare RER A et des axes A4/A104.</p>
<p class="mt-4">Résidents, employés et visiteurs perçoivent immédiatement la dégradation : inconfort, salissures sur chaussures, risques de glissade sur zones grasses et perte de lisibilité des circulations. Un décrassage structuré remet le parking "au propre" et améliore la perception de sécurité, sans désorganiser l'usage quotidien.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic et préparation</h3>
<p>Nous évaluons le support (béton, peinture, résine), l'état des zones grasses, la lisibilité des marquages, l'évacuation des eaux et les contraintes d'accès (hauteur, rampes, virages, zones étroites). Le parking est découpé en zones avec une signalisation simple pour organiser la rotation des véhicules et limiter la gêne.</p>
<h3>2. Décrassage mécanique ciblé</h3>
<p>Pré-dégraissage sur les zones marquées, brossage mécanique, puis lavage à l'autolaveuse. Les taches d'huile et dépôts collants sont traités localement avec un produit adapté. Les rampes et zones de freinage sont travaillées en priorité pour retrouver de l'adhérence.</p>
<h3>3. Finitions et contrôle</h3>
<p>Traitement des angles, pieds de murs, virages, zones de passage piéton et emplacements très sollicités. Nous vérifions l'absence de stagnation d'eau et la propreté visuelle globale. En fin d'intervention, nous proposons une fréquence d’entretien réaliste selon le trafic.</p>`,

      specificChallenges: [
        "Près de la gare RER A et des axes A4/A104, les parkings accumulent particules fines, pneus et poussière noire, difficiles à décrocher sans dégraissage.",
        "Les rampes étroites, virages et bas plafonds imposent un matériel compact et une organisation par zones pour garder l'accès aux usagers.",
        "Sur certains parkings, l'évacuation est limitée : la gestion des eaux et des zones de stagnation devient un point clé de la qualité.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi la poussière noire revient-elle si vite dans un parking ?",
          answer:
            "<p><strong>Elle vient surtout des particules liées au trafic</strong> (pneus, freins, poussières extérieures) qui se déposent et se collent sur les zones de freinage. Un décrassage structuré, puis un entretien régulier, limitent l'accumulation et gardent un sol plus adhérent.</p>",
        },
        {
          question: "Faut-il vider entièrement le parking pour intervenir ?",
          answer:
            "<p><strong>Non, nous travaillons par zones,</strong> en accord avec le syndic ou le gestionnaire. Les véhicules sont déplacés progressivement, avec une signalisation claire, pour maintenir un usage raisonnable pendant l'intervention.</p>",
        },
        {
          question: "Peut-on rattraper des taches d'huile anciennes ?",
          answer:
            "<p><strong>Dans la plupart des cas, oui :</strong> un traitement local avec un produit adapté et un brossage mécanique améliore nettement l'aspect et réduit le gras en surface. Le résultat dépend de l'ancienneté, du support et des couches déjà incrustées.</p>",
        },
        {
          question: "Comment évitez-vous l'eau stagnante après lavage ?",
          answer:
            "<p><strong>Nous ajustons la méthode selon l'évacuation existante</strong> et travaillons par zones pour garder la maîtrise des volumes d'eau. L'autolaveuse récupère une grande partie des eaux, et les finitions (raclette/contrôle) évitent les flaques résiduelles.</p>",
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
        "À Bussy-Saint-Georges, retrouvez un balcon propre et agréable : dépôts, traces et verdissures traités, sans éclaboussures ni coulures, pour profiter d'un extérieur net au quotidien.",

      whyUsBullets: [
        "Connaissance des contraintes locales : poussières, pollen, dépôts verts et voisinage en étage.",
        "Méthode adaptée au support : joints, dalles, béton ou carrelage traités sans brutaliser.",
        "Gestion de l'eau maîtrisée : évacuations, raclettes, finitions pour éviter les coulures.",
      ],

      uniqueIntro: `<p>À Bussy-Saint-Georges, les balcons et terrasses s'encrassent vite : joints qui noircissent, dépôts verts (mousses, feuilles), traces de terre, coulures d'eau et parfois graisses liées à l'usage (barbecue, jardinières). L'espace extérieur perd rapidement en confort et en apparence, alors qu'il devrait rester facile à vivre au quotidien.</p>
<p class="mt-4">Entre les zones proches des axes A4/A104, les secteurs plus arborés (parc du Génitoy, golf) et les résidences en étage, les salissures varient mais le constat est le même : un nettoyage structuré redonne un aspect net et limite les traces persistantes, sans risque pour les voisins du dessous.</p>`,

      uniqueDeepDive: `<h3>1. Préparation et protection</h3>
<p>Nous protégeons la porte-fenêtre, les murs adjacents et les zones sensibles. Les objets et plantes sont déplacés ou couverts selon la configuration. Les dépôts (feuilles, terre, déchets) sont retirés avant lavage pour préserver les évacuations et éviter les bouchons.</p>
<h3>2. Nettoyage adapté au support</h3>
<p>Nous appliquons un produit adapté au revêtement (carrelage, béton, dalles) puis travaillons les zones difficiles : joints, angles, seuils, garde-corps. La pression est contrôlée et utilisée uniquement si nécessaire, pour éviter d'ouvrir les joints ou de fragiliser les supports.</p>
<h3>3. Gestion de l'eau et finitions</h3>
<p>La gestion de l'eau est cadrée dès le départ : nous guidons l'écoulement vers les évacuations et réalisons les finitions à la raclette pour éviter les coulures. Le balcon est laissé propre, visuellement net et prêt à être réutilisé dès que la surface est sèche.</p>`,

      specificChallenges: [
        "Près des axes A4/A104, les balcons accumulent poussière fine et traces noires qui se fixent dans les joints.",
        "Dans les secteurs arborés (Génitoy, golf), dépôts verts et salissures organiques reviennent vite sans nettoyage adapté.",
        "En immeuble, la gestion de l'eau est un point sensible : finitions et écoulement doivent éviter toute coulure chez les voisins.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à la pression peut-il abîmer le carrelage ou les joints ?",
          answer:
            "<p><strong>Non, car nous n'utilisons pas une pression forte par défaut.</strong> La méthode est ajustée au support : brossage, produits adaptés, puis rinçage maîtrisé. Sur les joints fragiles, nous privilégions le travail manuel pour éviter toute dégradation.</p>",
        },
        {
          question:
            "Comment évitez-vous que l'eau coule chez les voisins ou sur la façade ?",
          answer:
            "<p><strong>Nous contrôlons le débit, travaillons par zones</strong> et guidons l'écoulement vers les évacuations. Les finitions (raclette, contrôle des bords) limitent les coulures. Avant de démarrer, nous repérons les points sensibles pour éviter les mauvaises surprises.</p>",
        },
        {
          question:
            "Les produits sont-ils compatibles avec les plantes et la vie quotidienne ?",
          answer:
            "<p><strong>Nous utilisons des produits adaptés au contexte résidentiel,</strong> puis nous rinçons soigneusement pour éviter les résidus. Les plantes sont protégées pendant l'intervention, et nous vous indiquons quand remettre les éléments en place selon le temps de séchage.</p>",
        },
        {
          question: "En combien de temps le balcon redevient-il utilisable ?",
          answer:
            "<p><strong>Le délai dépend du revêtement, de l'ensoleillement et de la ventilation.</strong> En général, la surface redevient praticable une fois sèche au toucher, souvent le jour même. Nous vous donnons des consignes simples d'aération pour accélérer le séchage.</p>",
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
        "À Bussy-Saint-Georges, transformez un balcon souillé en espace sain et désinfecté : fientes, odeurs et risques sanitaires éliminés pour retrouver un extérieur de nouveau utilisable par toute la famille.",

      whyUsBullets: [
        "Connaissance des configurations d'immeubles : loggias, étages, voisinage et gestion des accès.",
        "Protocole sécurisé : EPI, désinfection professionnelle, contrôle des poussières et finitions.",
        "Intervention organisée : protection du logement, discrétion, évacuation propre des déchets souillés.",
      ],

      uniqueIntro: `<p>À Bussy-Saint-Georges, certaines loggias et balcons peuvent être fortement souillés par les fientes de pigeons : couches épaisses, odeurs persistantes, traces corrosives sur les garde-corps et les murs. Au-delà de l'aspect visuel, cela rend l'espace inutilisable et augmente le risque sanitaire, notamment lorsque les fientes sèchent et se transforment en poussières.</p>
<p class="mt-4">Dans les secteurs proches des parcs, grands arbres et zones calmes (Vieux Village, Centre-Ville), la présence de pigeons peut s'installer dans le temps. Un nettoyage et une désinfection réalisés avec un protocole strict permettent d'assainir le balcon, de limiter la contamination et de repartir sur une base propre.</p>`,

      uniqueDeepDive: `<h3>1. Protection et sécurisation</h3>
<p>Nous intervenons avec des EPI complets, dont un masque <strong>FFP3</strong>, et protégeons les zones de passage (intérieur, seuils, murs adjacents). Les surfaces sont humidifiées pour éviter la remise en suspension des poussières et limiter la dispersion.</p>
<h3>2. Ramassage et nettoyage</h3>
<p>Les fientes et nids sont retirés manuellement, conditionnés dans des sacs étanches, puis les surfaces (sol, garde-corps, murs) sont nettoyées avec une méthode adaptée. Les zones incrustées sont brossées pour éliminer les résidus et retrouver un support propre.</p>
<h3>3. Désinfection et finitions</h3>
<p>Une désinfection avec un désinfectant professionnel est appliquée en respectant le temps de contact, puis nous réalisons un rinçage/essuyage selon le support. Le balcon est laissé propre, sans résidus, et nous vous indiquons un délai de sécurité avant réutilisation.</p>`,

      specificChallenges: [
        "Dans les secteurs proches des parcs et grands arbres, les fientes et nids peuvent s'accumuler rapidement en étage.",
        "Les fientes sèches génèrent des poussières : l'humidification et la protection respiratoire FFP3 sont indispensables.",
        "Les supports (métal, peinture, joints) peuvent être attaqués : le nettoyage doit enlever les résidus corrosifs sans aggraver l'état.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi faire appel à un professionnel pour ce type de nettoyage ?",
          answer:
            "<p><strong>Les fientes peuvent contenir des agents pathogènes</strong> et, une fois sèches, produire des poussières contaminantes. Un professionnel intervient avec des EPI, une méthode de limitation des poussières, et une désinfection adaptée. Cela sécurise l'intervention pour les occupants et évite une dispersion dans le logement.</p>",
        },
        {
          question:
            "Après intervention, est-ce sans danger pour les habitants et les animaux ?",
          answer:
            "<p><strong>Oui, une fois la désinfection réalisée et la surface sèche,</strong> l'usage redevient normal. Nous vous indiquons un délai de sécurité adapté à la ventilation et au niveau de souillure. L'objectif est d'éviter tout résidu et de rendre l'espace à nouveau sain.</p>",
        },
        {
          question: "Les fientes peuvent-elles abîmer mon balcon ?",
          answer:
            "<p><strong>Oui, elles sont acides</strong> et peuvent attaquer certains supports (peinture, métal, joints) si elles restent longtemps en place. Le nettoyage retire les résidus corrosifs et limite l'aggravation. Si un support est déjà abîmé, nous le signalons pour éviter les mauvaises surprises.</p>",
        },
        {
          question:
            "Que deviennent les fientes et les nids après l'intervention ?",
          answer:
            "<p><strong>Ils sont conditionnés dans des sacs étanches</strong> et évacués proprement pour éviter toute dispersion. Nous laissons la zone de travail nette, sans traces, et nous vous indiquons les gestes simples pour limiter une récidive.</p>",
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
        "À Bussy-Saint-Georges, retrouvez des textiles plus sains et agréables : taches, poussières et odeurs traitées en profondeur, pour un intérieur visuellement net et plus confortable au quotidien.",

      whyUsBullets: [
        "Méthode adaptée aux textiles : pression, produits et passes ajustés selon la matière.",
        "Traitement ciblé des taches : pré-traitement et rinçage-extraction pour limiter les résidus.",
        "Organisation simple à domicile : protection des zones sensibles, intervention propre, conseils de séchage.",
      ],

      uniqueIntro: `<p>À Bussy-Saint-Georges, dans les logements familiaux du Sycomore, du Clos ou du Centre-Ville, le canapé est au cœur de la vie quotidienne : goûters des enfants, siestes du chat, soirées entre amis. Résultat ? <strong>Taches de boissons, traces de nourriture, poils d'animaux et poussières s'accumulent dans les fibres</strong>, même avec un aspirateur régulier.</p>
<p class="mt-4">L'aspect se ternit, les odeurs persistent, et on hésite à inviter. <strong>Un nettoyage en profondeur redonne fraîcheur et confort</strong>, sans avoir à changer de mobilier ni à tout nettoyer soi-même. Vous retrouvez un intérieur accueillant, plus sain et agréable pour toute la famille.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic et préparation</h3>
<p>Nous identifions la matière (coton, laine, synthétique, velours), les zones fragiles et la nature des taches (graisse, boisson, organique). Les zones sensibles sont protégées, et un pré-traitement ciblé est appliqué là où c'est nécessaire.</p>
<h3>2. Nettoyage par injection-extraction (ou méthode adaptée)</h3>
<p>Le nettoyage est réalisé en injectant une solution adaptée dans la fibre, puis en extrayant immédiatement les salissures et l'eau chargée. La pression et le nombre de passes sont ajustés selon le textile pour éviter d'abîmer, tout en obtenant un résultat visuel net et un rinçage propre.</p>
<h3>3. Extraction maximale et conseils de séchage</h3>
<p>Nous extrayons un maximum d'eau pour limiter le temps de séchage. Selon la pièce, une aération ou une ventilation simple suffit. Nous vous donnons des consignes claires pour retrouver un textile sec et agréable le plus vite possible.</p>`,

      specificChallenges: [
        "Dans les foyers avec enfants et animaux, taches organiques et poils s'incrustent et demandent un pré-traitement ciblé.",
        "Les textiles épais (tapis, matelas) retiennent davantage l'humidité : l'extraction et l'aération conditionnent le séchage.",
        "Certains tissus (velours, laine) nécessitent des réglages doux et un rinçage soigneux pour éviter les auréoles.",
      ],

      faqAdditions: [
        {
          question:
            "Votre méthode améliore-t-elle vraiment la poussière et les allergènes ?",
          answer:
            "<p><strong>Oui, nettement.</strong> Notre méthode <strong>injecte de l'eau et un produit nettoyant au cœur du tissu, puis aspire immédiatement les saletés avec l'eau</strong>. Cela retire poussières, acariens et allergènes que l'aspirateur classique ne peut pas atteindre. Vous retrouvez un textile plus sain, plus frais et plus agréable.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'urine ou les odeurs tenaces ?",
          answer:
            "<p><strong>Nous appliquons un pré-traitement adapté aux taches organiques,</strong> puis un rinçage-extraction complet. Sur les odeurs anciennes, plusieurs passes peuvent être nécessaires. L'objectif est de réduire la source de l'odeur dans la fibre, pas de la masquer.</p>",
        },
        {
          question: "Combien de temps faut-il pour que le textile sèche ?",
          answer:
            "<p><strong>Le temps dépend de l'épaisseur, de la ventilation et de la température.</strong> En général, un canapé sèche plus vite qu'un matelas ou un tapis épais. Nous extrayons un maximum d'eau et vous indiquons la meilleure aération pour accélérer, sans risque d'auréoles.</p>",
        },
        {
          question: "Que dois-je préparer avant votre intervention à domicile ?",
          answer:
            "<p><strong>Il suffit de libérer l'accès à la zone</strong> et de nous signaler les taches prioritaires. Nous protégeons les abords, adaptons la méthode au textile et vous expliquons les étapes. L'intervention est organisée pour rester propre et limiter la gêne pendant le passage.</p>",
        },
      ],

      ctaOverride: "",
    },


    {
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "Remise en état soignée d’appartements et de maisons avant état des lieux ou remise des clés, avec diagnostic préalable et méthodes adaptées à chaque surface.",

  whyUsBullets: [
    "Connaissance des logements locaux : pavillons familiaux et résidences récentes de Bussy-Saint-Georges.",
    "Traitement cohérent de l’ensemble du logement : sols, cuisines, sanitaires, vitrages accessibles et finitions.",
    "Organisation fiable pour délais courts : intervention calée sur les contraintes d’état des lieux et de remise des clés.",
  ],

  uniqueIntro: `<p>Organiser un <strong>nettoyage appartement maison Bussy-Saint-Georges</strong> intervient souvent à un moment clé : départ d’un locataire, emménagement, ou préparation d’un état des lieux. Dans une ville structurée par le RER A et des quartiers résidentiels comme le Sycomore ou le Golf, les logements connaissent des rotations régulières qui laissent peu de place à l’approximation.</p>
<p class="mt-4">Sols marqués par l’usage, dépôts de calcaire dans les pièces d’eau, cuisine encrassée, vitrages ternis ou détails oubliés : un logement peut sembler propre à première vue tout en restant insuffisant pour une restitution sans réserve. Pavillons et appartements récents présentent en outre des matériaux variés qui exigent une approche maîtrisée.</p>
<p class="mt-4">Klinova intervient avec une méthode claire : diagnostic du logement, choix des techniques selon les surfaces, gestion des accès (digicodes, badges) et contrôle final avant restitution. <strong>Le périmètre de l’intervention est toujours défini avant l’intervention.</strong> L’objectif est de rendre un logement propre, lisible et prêt à être présenté.</p>`,

  uniqueDeepDive: `<h3>T1 : Diagnostic et préparation</h3>
<p>Chaque intervention débute par une évaluation précise : type de logement, nature des salissures (usage courant, logement inoccupé, résidus légers après intervention technique), surfaces sensibles et contraintes d’accès propres aux résidences de Bussy-Saint-Georges. Les éléments fragiles sont protégés et l’ordre de traitement est planifié.</p>

<h3>T2 : Nettoyage par zones</h3>
<p>La <strong>remise en état du logement</strong> s’effectue pièce par pièce. Les sols sont nettoyés selon leur revêtement, les plinthes et points de contact sont traités, la cuisine fait l’objet d’un <strong>dégraissage cuisine</strong> ciblé, et la salle de bain d’un <strong>détartrage sanitaires</strong> adapté. Les vitres accessibles et finitions visuelles complètent l’intervention, qu’il s’agisse d’un <strong>nettoyage avant état des lieux</strong> ou d’un <strong>nettoyage après déménagement</strong>.</p>

<h3>T3 : Contrôle et restitution</h3>
<p>Un contrôle visuel est réalisé dans chaque pièce, suivi d’une aération du logement. L’intervention se conclut par une restitution claire, permettant une réoccupation immédiate ou une présentation sereine lors de l’état des lieux.</p>`,

  specificChallenges: [
    "Rotations locatives fréquentes autour de la gare RER A, avec délais d’intervention réduits.",
    "Présence majoritaire de logements récents aux surfaces sensibles nécessitant des méthodes adaptées.",
    "Accès sécurisés par badges et digicodes dans la plupart des résidences.",
    "Exigence élevée sur les finitions visuelles lors des états des lieux sortants.",
  ],

  faqAdditions: [
    {
      question:
        "Dans quels cas recommandez-vous une remise en état complète plutôt qu’un simple passage de ménage ?",
      answer: `<p>Une remise en état est pertinente lorsque le logement doit être restitué ou réoccupé rapidement : état des lieux, mise en location, logement resté inoccupé. Elle permet de traiter les zones souvent négligées lors d’un entretien courant, comme les plinthes, points de contact et finitions visibles.</p>`,
    },
    {
      question:
        "Intervenez-vous pour un état des lieux sortant dans les logements proches du RER A ?",
      answer: `<p>Oui. Les secteurs proches de la gare connaissent des rotations fréquentes. L’intervention est organisée en tenant compte des contraintes d’accès et de stationnement afin de respecter les délais imposés par l’agence ou le propriétaire.</p>`,
    },
    {
      question:
        "Comment adaptez-vous vos méthodes aux parquets et sols récents des résidences de Bussy-Saint-Georges ?",
      answer: `<p>Lors du diagnostic, chaque sol est identifié. Les parquets sont nettoyés sans excès d’humidité, et les carrelages récents avec des produits compatibles afin de préserver leur aspect et éviter toute trace ou altération.</p>`,
    },
    {
      question:
        "Le logement peut-il être utilisé immédiatement après votre intervention ?",
      answer: `<p>Dans la majorité des situations, oui. Les méthodes employées limitent l’humidité résiduelle et une aération est prévue en fin d’intervention, permettant une réutilisation rapide du logement.</p>`,
    },
  ],

  ctaOverride: "",
},







  ],
};

export default city;
