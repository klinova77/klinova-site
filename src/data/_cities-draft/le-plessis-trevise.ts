import type { City } from "~/types/geo";

const city: City = {
  name: "Le Plessis-Trévise",
  slug: "le-plessis-trevise",
  postalCodes: ["94420"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient au Plessis-Trévise pour l'entretien des parties communes, parkings et espaces extérieurs. Une équipe locale, des méthodes adaptées au bâti résidentiel et aux contraintes de cette commune résidentielle, très verte, à l’est du Val-de-Marne.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro: `<p><strong>Partenaire terrain</strong> de vos immeubles et résidences, Klinova organise la propreté et la maintenance technique au Plessis-Trévise. Nous connaissons les quartiers pavillonnaires, les résidences denses comme Val Roger, et les équipements publics. Ville parc au cœur du Plateau Briard, à proximité du Bois Saint-Martin, la commune demande une gestion rigoureuse des accès, des horaires discrets et une sensibilité aux nuisances sonores.</p>
<p class="mt-4">Propreté visible, maintenance préventive, <strong>reporting transparent</strong> : nous structurons l'intervention selon votre bâti et vos contraintes. Pas de "black box" — vous savez comment nous travaillons, quand nous intervenons, et ce que nous avons fait. Coordination avec syndics, bailleurs et gestionnaires, adaptation aux digicodes et gardiens, respect des zones bleues et marchés.</p>
<ul>
  <li>Expertise locale : Halls résidentiels, parkings souterrains (Cité de la Joie, Val Roger), balcons exposés aux axes routiers. Nous adaptons le protocole à chaque typologie.</li>
  <li>Gêne minimale : Horaires décalés, discrétion sonore, protection des voisins. Ville résidentielle = vigilance constante sur les nuisances.</li>
  <li>Organisation terrain : Stationnement coordonné (zone bleue centre), accès digicodes/badges, rotation équipes selon secteurs. Aucun blocage logistique.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Résidences denses (Val Roger, Cité de la Joie) : parkings souterrains, digicodes, gestion syndic.",
    "Ville très verte : proximité Bois Saint-Martin, parcs (Mairie, Mansart), feuilles/mousse sur balcons et terrasses.",
    "Axes routiers (Avenue du Général Leclerc, D4, D111) : pollution fine, dépôts noirs sur façades et balcons exposés.",
    "Marché couvert Avenue Ardouin : trafic piéton intense mercredi/samedi, déchets alimentaires, zone bleue saturée.",
    "Population résidentielle sensible : vigilance sur nuisances sonores, horaires discrets, protection voisins.",
    "Pavillons anciens (cité-jardin) : accès latéraux, jardins, terrasses bois/pierre nécessitant démoussage régulier."
  ],

  // Texte brut uniquement
  districts: [
    "Le Centre",
    "Val Roger",
    "Parc de la Lande",
    "Marbeau",
    "Coeuilly",
    "Saint-Antoine",
    "Saint-Martin",
    "Saint-Pierre"
  ],
  nearbyCities: [],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Le Plessis-Trévise",
    "Avenue Ardouin",
    "Château des Tourelles",
    "Espace Paul Valéry",
    "Parc de la Mairie (Parc d'Ourém)",
    "Résidence Val Roger"
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
  {
    question: "Vous intervenez dans tous les quartiers du Plessis-Trévise ?",
    answer: `<p><strong>Oui.</strong> Nous couvrons l'ensemble de la commune : Centre, Val Roger, Parc de la Lande, Marbeau, Coeuilly, Saint-Antoine, Saint-Martin, Saint-Pierre. Chaque secteur a ses spécificités (pavillons anciens, résidences récentes, proximité axes). Nous adaptons <strong>le matériel, les horaires et l'équipe</strong> selon la zone.</p>`,
  },
  {
    question:
      "Comment vous gérez le stationnement et les horaires sensibles (marché, écoles) ?",
    answer: `<p>Nous repérons les contraintes avant intervention : <strong>zone bleue Avenue Ardouin, marchés mercredi et samedi matin, départs écoles 8h-9h</strong>. Nos équipes arrivent en dehors de ces créneaux ou coordonnent avec la mairie. <strong>Stationnement matériel prévu à l'avance</strong>, pas d'improvisation.</p>`,
  },
  {
    question:
      "Vous avez l'expérience des résidences denses comme Val Roger ou Cité de la Joie ?",
    answer: `<p><strong>Oui.</strong> Parkings souterrains, digicodes, gardiens, parties communes étroites : nous maîtrisons ces environnements. Cité de la Joie (histoire Abbé Pierre) et Val Roger (immeubles années 70-80) demandent une organisation précise. Nous coordonnons avec les syndics et <strong>respectons les horaires d'accès</strong>.</p>`,
  },
  {
    question:
      "Quel est votre délai d'intervention en cas d'urgence (fientes pigeons, dégât) ?",
    answer: `<p>Selon la nature : <strong>assainissement balcon (24-48h)</strong>, <strong>nettoyage après sinistre (devis rapide, intervention 48-72h)</strong>. Nous évaluons d'abord la situation, proposons un protocole clair et un délai réaliste. Pas de promesse "immédiate", mais réactivité adaptée au contexte.</p>`,
  },
],


  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Nettoyage en profondeur des moquettes par injection-extraction, adapté aux petits collectifs et bureaux du centre-ville, avec séchage optimisé et remise en service rapide.",
      whyUsBullets: [
        "Expertise des petits collectifs et bureaux du centre-ville, avec connaissance des contraintes d'accès et horaires sensibles.",
        "Maîtrise de l'injection-extraction et adaptation aux moquettes dalles et velours fragiles des espaces administratifs.",
        "Interventions discrètes hors heures de bureau, avec reporting d'intervention et conseils d'entretien régulier.",
      ],
      uniqueIntro: `<p>Dans les bureaux administratifs et salles culturelles du centre-ville, les moquettes accumulent rapidement poussière, traces de passage et résidus organiques. Entre le trafic quotidien des usagers, les allées et venues des agents, et les événements ponctuels (réunions, spectacles), les fibres se chargent en salissures visibles et odeurs persistantes. Ce phénomène s'accentue dans les petits collectifs où la circulation concentrée dans les escaliers et couloirs crée des zones d'usure prématurée.</p>
<p class="mt-4">Un nettoyage régulier transforme l'image des espaces : moquette ravivée, odeurs éliminées, confort retrouvé pour les occupants et visiteurs. Au-delà de l'aspect visuel, l'entretien professionnel prolonge la durée de vie des fibres et maintient l'hygiène des parties communes. Pour les bureaux et salles de réception, c'est un élément clé de l'image professionnelle.</p>
<p class="mt-4">Notre approche repose sur un diagnostic préalable du type de moquette (dalles, velours, bouclée), de la nature des taches et des contraintes d'accès propres à chaque bâti. Nous adaptons la méthode et le planning pour intervenir avec discrétion, sans perturber l'activité.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Nous commençons par identifier le type de moquette (dalles textiles, velours ras, bouclée) et évaluer l'état des salissures : taches localisées, encrassement général, odeurs. Nous protégeons les plinthes, bas de murs et mobilier fixe. Un balisage temporaire signale les zones en traitement si l'espace reste accessible.</p>

<h3>Injection-extraction par zones</h3>
<p>Le nettoyage s'effectue zone par zone : escaliers et couloirs d'abord (trafic maximal), puis bureaux et salles. Nous injectons une solution détergente adaptée à la fibre, puis extrayons l'humidité et les salissures par aspiration puissante. Les zones très sales reçoivent plusieurs passes pour un résultat optimal.</p>

<h3>Séchage et finalisation</h3>
<p>Nous optimisons l'extraction pour réduire le temps de séchage (généralement 4 à 8 heures selon épaisseur et ventilation). Nous conseillons sur la fréquence d'entretien (trimestrielle pour bureaux, semestrielle pour parties communes) et les gestes simples de maintenance quotidienne.</p>`,
      specificChallenges: [
        "Escaliers étroits des petits collectifs : passage du matériel d'extraction limité, nécessite démontage partiel.",
        "Taches anciennes incrustées sur moquette de bureau : nécessite détachage ciblé avant injection-extraction.",
        "Horaires d'intervention : bureaux fermés le soir/weekend, coordination avec gardiens et clés d'accès obligatoire.",
        "Moquettes dalles en résidences récentes : risque de décollement si humidité excessive, extraction maximale requise.",
        "Gestion de l'eau de rinçage : évacuation par escaliers étroits, balisage anti-glisse indispensable."
      ],
      faqAdditions: [
        {
          question:
            "Avec les escaliers étroits des petits collectifs du centre-ville, comment passez-vous le matériel pour le nettoyage ?",
          answer: `<p>Nous utilisons un injecteur-extracteur compact et un aspirateur eau/poussières adaptés aux accès réduits. Le réservoir d'eau se remplit étage par étage, et l'extraction se fait en continu. Pour les escaliers très étroits, nous optons pour le nettoyage manuel avec pulvérisateur et aspirateur portatif, tout aussi efficace sur les marches.</p>`,
        },
        {
          question:
            "Quelle méthode recommandez-vous entre injection-extraction et nettoyage vapeur pour les moquettes des salles de l'Espace Paul Valéry ?",
          answer: `<p>L'injection-extraction est plus adaptée aux moquettes épaisses et aux taches tenaces des salles de spectacle. La vapeur convient mieux aux moquettes fines et aux zones sensibles. Pour l'Espace Paul Valéry, nous préconisons l'injection-extraction avec détachage préalable, car les taches de boissons et popcorn sont fréquentes et nécessitent une extraction puissante.</p>`,
        },
        {
          question:
            "Pour des taches anciennes et incrustées sur la moquette d'un bureau municipal, quelles solutions efficaces proposez-vous ?",
          answer: `<p>Nous appliquons d'abord un détachant spécialisé selon la nature de la tache (tanin, café, graisse), laissons agir 15 à 30 minutes, puis procédons à l'injection-extraction. Les taches très anciennes peuvent nécessiter plusieurs passages. Si la fibre est endommagée, nous proposons un remplacement localisé de dalles textiles.</p>`,
        },
        {
          question:
            "À quelle fréquence recommandez-vous un entretien professionnel des moquettes dans les parties communes du Val Roger ?",
          answer: `<p>Pour une résidence comme Val Roger avec trafic quotidien important, nous recommandons un nettoyage trimestriel des escaliers et couloirs, et un entretien semestriel des halls. Un brossage régulier (hebdomadaire) et un aspirage (2× par semaine) complètent le protocole pour maintenir la moquette en bon état entre les interventions.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Un décrassage complet de vos parkings (souterrains ou aériens), avec traitement des taches d'huile et gestion maîtrisée des eaux, pour une remise en service sécurisée.",
      whyUsBullets: [
        "Expertise des parkings souterrains et aériens du Plessis-Trévise, avec maîtrise des contraintes d'accès (Val Roger, résidences denses).",
        "Autolaveuse + dégraissant sélectif, gestion stricte des eaux de lavage et respect des revêtements (béton, enrobé, résine).",
        "Coordination horaires avec syndics, balisage sécurisé, reporting avant/après et conseils d'entretien régulier.",
      ],
      uniqueIntro: `<p>Les parkings du Plessis-Trévise — qu'ils soient souterrains dans les résidences Val Roger ou aériens autour du marché et de la Mairie — accumulent rapidement des traces d'huile, des graviers et des dépôts gris qui ternissent l'image de l'immeuble. Les jours de marché (mercredi et samedi), le trafic intensifie cette salissure, avec des résidus alimentaires et des poussières qui s'incrustent dans les joints et les rigoles.</p>
<p class="mt-4">Un parking propre rassure les résidents et les visiteurs, améliore la sécurité (meilleure visibilité, moins de glissance) et prolonge la durée de vie du revêtement. Pour les copropriétés et les gestionnaires, c'est aussi un argument de confort auprès des locataires et une réduction des plaintes liées à l'hygiène des parties communes.</p>
<p class="mt-4">Notre intervention repose sur un diagnostic préalable du revêtement (béton brut, enrobé, résine), un balisage sécurisé pendant les travaux, et une gestion stricte des eaux de lavage — point critique dans les souterrains où les évacuations doivent être respectées. Nous coordonnons les horaires avec les syndics pour minimiser la gêne aux usagers.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation sécurisée</h3>
<p>Le relevé du type de revêtement (béton, enrobé, résine) et de l'état des évacuations (regards, rigoles) détermine la méthode. Nous balisageons les zones avec signalétique claire et, si nécessaire, organisons la rotation des véhicules en accord avec le syndic pour maintenir l'accès.</p>

<h3>Décrassage mécanisé et traitement des taches</h3>
<p>Autolaveuse combinée à haute pression et dégraissant adapté au revêtement. Les zones critiques (rampes d'accès, pieds de murs, angles morts) reçoivent un traitement renforcé. Les taches d'huile anciennes sont traitées par passes successives pour éviter les résidus.</p>

<h3>Gestion des eaux et finalisation</h3>
<p>Les eaux de lavage sont dirigées vers les évacuations existantes sans débordement. Dépoussiérage aérien des blocs lumineux et tuyauteries si demandé. Rapport d'intervention et recommandations de fréquence (selon trafic : 2 à 4 fois par an pour parkings actifs).</p>`,
      specificChallenges: [
        "Trafic intense les jours de marché (mercredi et samedi) : coordination d'accès et horaires décalés nécessaires.",
        "Souterrains Val Roger : gestion critique des eaux de lavage et respect des évacuations existantes.",
        "Taches d'huile anciennes sur enrobé : nécessite plusieurs passes et dégraissant adapté.",
        "Sensibilité résidentielle forte : minimiser les nuisances sonores et la gêne aux usagers pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Quelles différences de méthode appliquez-vous entre un parking souterrain du Val Roger et un parking aérien du marché ?",
          answer: `<p>Les souterrains (Val Roger) exigent une gestion stricte des eaux de lavage via les évacuations existantes, sans débordement. Les aériens (marché) permettent plus de flexibilité, mais nécessitent un balisage renforcé car le trafic y est plus intense les jours de marché. Le revêtement diffère aussi : béton brut en souterrain, enrobé en aérien, ce qui change le choix du dégraissant et la pression appliquée.</p>`,
        },
        {
          question:
            "Comment procédez-vous pour éliminer des taches d'huile anciennes dans un parking proche de l'Avenue du Général Leclerc ?",
          answer: `<p>Les taches anciennes incrustées nécessitent un pré-traitement avec dégraissant spécifique, suivi de passes multiples à haute pression. Nous adaptons la pression selon le revêtement pour éviter d'endommager l'enrobé ou le béton. Un diagnostic initial détermine si une seule intervention suffit ou si un suivi est recommandé quelques semaines après.</p>`,
        },
        {
          question:
            "Pour intervenir sur le parking du marché, quels créneaux horaires recommandez-vous afin de limiter l'impact sur les usagers ?",
          answer: `<p>Les jours de marché (mercredi et samedi matin) sont à éviter. Nous privilégions les fins d'après-midi en semaine ou le dimanche matin. Avec le syndic, nous définissons un créneau où le parking est partiellement ou totalement fermé selon la taille et l'importance du trafic. Un balisage clair informe les résidents à l'avance.</p>`,
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage et l'évacuation en intervention dans un parking souterrain du Plessis-Trévise ?",
          answer: `<p>Les eaux sont dirigées vers les regards et rigoles existantes. Nous vérifions avant intervention que les évacuations ne sont pas obstruées. En cas de débit important, nous utilisons des bacs de rétention temporaires pour éviter tout débordement. Les eaux sont dirigées vers les regards et rigoles existantes après vérification des évacuations. Si des zones très chargées en hydrocarbures sont présentes, nous adaptons le protocole (pré-traitement, passes supplémentaires) et pouvons mettre en rétention temporaire pour éviter tout débordement. Aucun rejet n’est effectué sur la voirie.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Un nettoyage complet de vos balcons avec traitement adapté au support, gestion anti-coulures et respect du voisinage pour une remise en état durable.",
      whyUsBullets: [
        "Expertise des balcons exposés nord/est du Val Roger et secteurs pavillonnaires, avec traitement mousses et algues adapté au climat local.",
        "Pression contrôlée, produits sélectionnés par support (béton, carrelage, dalles), sans risque d'endommagement des joints fragiles.",
        "Protection stricte des voisins du dessous, gestion anti-coulures, horaires discrets, respect du calme résidentiel.",
      ],
      uniqueIntro: `<p>Sur les balcons du Val Roger et des secteurs Centre, Avenue Maurice Berteaux, on observe rapidement l'accumulation de dépôts verts, traces grises et salissures incrustées dans les joints. L'exposition aux axes locaux, la proximité des parcs municipaux et l'humidité naturelle du Plateau Briard favorisent la formation de mousses et algues, particulièrement sur les faces nord et est. Ces dégradations s'aggravent d'année en année, rendant l'espace extérieur peu accueillant et glissant par temps humide.</p>
<p class="mt-4">Un balcon propre change le quotidien : retrouver une surface claire, saine et agréable à utiliser, sans crainte de glissade. Pour les résidents du Val Roger ou des résidences récentes, c'est aussi préserver l'aspect des façades et maintenir la valeur du bien. Un entretien régulier évite que les dépôts ne s'incrustent définitivement dans le béton ou le carrelage.</p>
<p class="mt-4">Notre intervention repose sur un diagnostic précis du support (béton peint, carrelage, dalles sur plots) et des protections strictes pour les voisins du dessous. Nous adaptons pression, produits et timing selon l'exposition et l'état réel du balcon, en minimisant les gênes sonores et les coulures.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute intervention, nous évaluons le support (béton, carrelage, dalles, bois composite) et l'état des joints. Nous protégeons les menuiseries (fenêtres, portes) avec des bâches, déplaçons le mobilier et les plantes, et mettons en place des protections anti-coulures pour les balcons du dessous. Cette étape est cruciale en résidentiel dense, où le respect du voisinage prime.</p>

<h3>Enlèvement des dépôts et traitement ciblé</h3>
<p>Nous commençons par enlever les gros débris (feuilles, terre, dépôts secs) à la brosse manuelle. Ensuite, nous appliquons un produit adapté au support et au type de salissure (mousses, algues, traces grasses). Le brossage manuel ou mécanique douce suit, selon la fragilité des joints. Un rinçage contrôlé élimine résidus et produit sans projections chez les voisins.</p>

<h3>Finitions et conseils</h3>
<p>Après séchage, nous nettoyons les garde-corps et vitrages si nécessaire. Nous vous conseillons sur la fréquence d'entretien selon l'exposition (avenue très passante = 1–2 fois par an) et les gestes simples pour maintenir le résultat.</p>`,
      specificChallenges: [
        "Mousses et dépôts verts tenaces sur expositions nord/est proches des parcs municipaux.",
        "Joints fragiles en résidences anciennes : risque d'endommagement à haute pression.",
        "Coulures vers les voisins du dessous : gestion stricte de l'eau et bâchage obligatoire.",
        "Accès depuis paliers étroits ou loggias fermées : coordination logistique nécessaire.",
        "Fréquence d'entretien variable selon Avenue Maurice Berteaux (pollution) vs secteurs calmes.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les dépôts verts et mousses sur les balcons exposés nord/est proches des parcs du Plessis-Trévise ?",
          answer: `<p>Nous appliquons un traitement biocide adapté aux mousses et algues, suivi d'un brossage doux pour préserver les joints. Le rinçage contrôlé élimine tous résidus sans agresser le support. Pour les balcons très exposés (Parc de la Mairie, Parc Mansart), nous recommandons un entretien annuel pour éviter la réinfestation rapide.</p>`,
        },
        {
          question:
            "Quel produit et quelle méthode utilisez-vous pour nettoyer un balcon carrelé sans abîmer les joints à Le Plessis-Trévise ?",
          answer: `<p>Les balcons carrelés des résidences récentes (Val Roger notamment) reçoivent un nettoyage à pression douce (&lt; 100 bar) avec produit neutre. Nous brossons manuellement les joints pour éviter l'érosion, puis rinçons à l'eau claire. Cette méthode préserve l'étanchéité et la durabilité du carrelage sur le long terme.</p>`,
        },
        {
          question:
            "Comment évitez-vous les coulures et gênes pour le voisinage lors d'un nettoyage de balcon en centre-ville ?",
          answer: `<p>Nous mettons en place des bâches de protection sous le balcon dès le départ, canalisons l'eau vers les gouttières existantes, et utilisons des produits biodégradables. Le timing est choisi en accord avec les voisins (pas de week-end, horaires discrets). Cette organisation minimise les réclamations et respecte la tranquillité résidentielle.</p>`,
        },
        {
          question:
            "Quelle fréquence d'entretien conseillez-vous pour un balcon sur avenue très exposée comme Maurice Berteaux ?",
          answer: `<p>Les balcons sur Avenue Maurice Berteaux, exposés à la circulation et à la pollution, bénéficient d'un nettoyage 1 à 2 fois par an (printemps et automne). Les secteurs plus calmes (Val Roger, quartiers pavillonnaires) peuvent espacer à 1 fois par an. Un entretien régulier coûte moins cher qu'un décapage en profondeur après années de négligence.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de balcons et corniches contaminés par fientes pigeons : enlèvement, désinfection virucide et prévention anti-retour.",
      whyUsBullets: [
        "Expertise des zones à risque sanitaire : parcs, marchés, corniches du Plessis-Trévise.",
        "Protocole EPI strict (FFP2, combinaison) et confinement obligatoire pour chaque intervention.",
        "Gestion complète évacuation déchets contaminés et coordination discrète avec voisinage sensible.",
      ],
      uniqueIntro: `<p>Comment utiliser sereinement votre balcon quand les fientes de pigeons s'y accumulent ? À Le Plessis-Trévise, les balcons et corniches proches des parcs (Parc de la Mairie, Parc François Mansart) et du marché du centre-ville subissent régulièrement cette contamination. Les pigeons, attirés par les espaces verts et les zones alimentaires, reviennent inlassablement. Le problème ne se limite pas à l'aspect visuel : les fientes contiennent des agents pathogènes (histoplasmose, cryptococcose) qui posent des risques sanitaires réels, surtout pour les enfants et personnes fragiles.</p>
<p class="mt-4">Au-delà de la gêne et des odeurs tenaces, cette accumulation corrode les supports. Les derniers étages et corniches de petits collectifs et résidences anciennes — pierre, béton, garde-corps métalliques — se dégradent progressivement. L'intervention ne peut donc pas être un simple nettoyage : elle exige confinement, désinfection rigoureuse et élimination sécurisée des déchets contaminés. C'est un enjeu de santé publique autant que de préservation du bâti.</p>
<p class="mt-4">Notre approche combine enlèvement méthodique, protocole de désinfection homologué et mesures anti-retour (pics, filets) pour retrouver un balcon sain et utilisable. Zones à risque identifiées autour des parcs et marchés, nous adaptons chaque intervention aux contraintes locales et à la sensibilité du voisinage.</p>`,
      uniqueDeepDive: `<h3>Confinement et protection</h3>
<p>Avant toute action, nous établissons un périmètre sécurisé : bâchage de la zone, protection des intérieurs (fenêtres, portes) et des balcons adjacents. Chaque intervenant porte FFP2, gants, lunettes et combinaison jetable. Cette étape neutralise les risques d'envol de poussières contaminées et protège voisins et occupants.</p>

<h3>Enlèvement et désinfection</h3>
<p>Après humidification préalable pour éviter la dispersion de particules, nous procédons au ramassage des fientes dans des sacs étanches. Nettoyage complet du sol, garde-corps, vitrages et murs mitoyens. Application d'un produit virucide/bactéricide homologué avec temps de contact respecté, suivi d'un rinçage final. Délai d'aération avant réutilisation : 24h minimum selon conditions météo.</p>

<h3>Prévention et évacuation</h3>
<p>Installation de pics anti-pigeons sur corniches et rebords, ou filets de protection si pertinent. Évacuation sécurisée des déchets contaminés en sacs étanches, conformément aux protocoles sanitaires. Reporting d'intervention remis au client.</p>`,
      specificChallenges: [
        "Proximité parcs et marché : réinfestation rapide sans mesures anti-retour durables.",
        "Derniers étages et corniches : accès difficile, risques chute, nécessité d'équipement sécurité.",
        "Risques sanitaires réels : histoplasmose, cryptococcose, agents pathogènes viables sur supports.",
        "Voisinage résidentiel sensible : intervention discrète, gestion odeurs et nuisances sonores minimale.",
        "Dégradation progressive béton/pierre : corrosion accélérée si pas de traitement régulier.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes sur mon balcon proche du Parc de la Mairie semblent infectieuses. Quels sont les risques sanitaires réels et comment agir rapidement ?",
          answer: `<p>Oui, les fientes contiennent des agents pathogènes (histoplasmose, cryptococcose) dangereux surtout pour enfants et immunodéprimés. Risques : infections respiratoires, allergies. Action rapide : confinement de la zone, port EPI, nettoyage + désinfection virucide. Délai avant réutilisation : 24h. Contactez-nous pour diagnostic et devis sans délai.</p>`,
        },
        {
          question:
            "Quel protocole et quels EPI appliquez-vous pour nettoyer des fientes sur une corniche au dernier étage ?",
          answer: `<p>Protocole strict : FFP2 obligatoire, gants nitrile, lunettes, combinaison jetable. Bâchage périmètre, protection intérieurs et voisins. Humidification préalable, ramassage en sacs étanches, nettoyage supports (béton, pierre, métal), désinfection virucide homologuée, rinçage. Équipement sécurité chute si accès en hauteur. Reporting remis au client.</p>`,
        },
        {
          question:
            "Après enlèvement des fientes sur une loggia, quelle désinfection garantira l'absence de risques résiduels ?",
          answer: `<p>Nous appliquons un produit virucide/bactéricide homologué avec temps de contact respecté (selon produit, 10-15 min). Cela élimine 99,9% des agents pathogènes. Rinçage final à l'eau claire, puis aération 24h avant réutilisation. Aucune garantie "100%" en absolu, mais protocole éprouvé réduit drastiquement risques résiduels. Pics anti-pigeons préviennent réinfestation.</p>`,
        },
        {
          question:
            "Comment organisez-vous l'évacuation et l'élimination des déchets contaminés près du marché du centre ?",
          answer: `<p>Collecte en sacs étanches double-paroi, étiquetage, transport sécurisé. Évacuation conforme protocoles sanitaires (pas de détails filière spécialisée, mais traitement adapté déchets contaminés). Coordination horaires pour minimiser gêne marché. Reporting d'intervention documenté. Nettoyage zone après enlèvement pour éviter odeurs résiduelles.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage en profondeur de terrasses et dallages : enlèvement mousse, lichens et dépôts verts, avec traitement adapté au support et gestion complète de l'eau.",
      whyUsBullets: [
        "Expertise locale : Connaissance des terrasses pavillonnaires du secteur et des contraintes liées à la proximité du Bois Saint-Martin.",
        "Maîtrise technique : Adaptation précise du traitement selon support (pierre, bois, composite, dalles) et haute pression contrôlée sans endommager.",
        "Organisation : Protection mobilier et plantes, gestion eau vers voisinage, horaires discrets pour minimiser la gêne en zone résidentielle.",
      ],
      uniqueIntro: `<p>Les terrasses des pavillons et rez-de-jardin du Plessis-Trévise, particulièrement celles proches du Bois Saint-Martin et du Parc de Burladingen, subissent rapidement l'accumulation de mousse, lichens et dépôts verts. L'environnement arboré, l'humidité persistante et les zones ombragées favorisent cette dégradation visible : surfaces glissantes, noircissement progressif, perte d'aspect.</p>
<p class="mt-4">Au-delà de l'esthétique, ces dépôts créent un risque réel de glissance et accélèrent l'usure des matériaux (pierre, bois, composite, dalles gravillonnées). Un nettoyage régulier retrouve non seulement l'aspect d'origine, mais prolonge la durée de vie de votre terrasse et redonne confiance pour l'utiliser au quotidien ou recevoir.</p>
<p class="mt-4">Notre intervention débute par un diagnostic du support et de l'état des salissures, suivi d'un protocole adapté : enlèvement des gros dépôts, traitement chimique ciblé, brossage ou haute pression contrôlée selon le matériau, et gestion rigoureuse de l'eau pour éviter les débordements vers les voisins ou les plantations.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Avant toute intervention, nous bâchons les menuiseries (baies vitrées, portes) et déplaçons le mobilier extérieur (chaises, tables, parasols). Les plantes et jardinières sont regroupées ou protégées. Cette étape garantit l'absence de projections et facilite l'accès à l'ensemble de la surface.</p>

<h3>Enlèvement et traitement</h3>
<p>Nous commençons par un balayage et enlèvement des gros dépôts (feuilles, terre, débris). Un produit anti-mousse adapté au support est appliqué et laissé agir le temps nécessaire. Le brossage manuel ou mécanique suit, ciblant les zones tenaces. Pour les dallages en pierre naturelle ou bois, nous privilégions le brossage ; pour le béton ou composite, une haute pression contrôlée complète le traitement.</p>

<h3>Finition et conseils</h3>
<p>L'eau d'évacuation est dirigée vers les points d'écoulement existants, avec attention particulière aux voisins du dessous et aux plantations. Après séchage, nous conseillons une fréquence d'entretien saisonnier (automne/printemps) pour limiter la réapparition de mousse.</p>`,
      specificChallenges: [
        "Environnement très arboré (Bois Saint-Martin, parcs) générant feuilles, mousse et humidité persistante.",
        "Risque de glissance sur surfaces traitées : nécessité d'un traitement anti-mousse efficace et durable.",
        "Matériaux variés (pierre, bois, composite, dalles gravillonnées) exigeant des protocoles différenciés.",
        "Gestion de l'eau d'évacuation vers les voisins du dessous et protection des plantations du jardin.",
        "Mobilier extérieur et barbecue fréquents : coordination nécessaire avant intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Comment éliminez-vous efficacement les mousses et lichens sur une terrasse exposée à l'ombre, notamment près du Bois Saint-Martin où l'humidité est constante ?",
          answer: `<p>Nous appliquons un produit anti-mousse adapté à la surface (pierre, bois ou composite), laissé agir 24–48h selon les conditions. Le brossage manuel ciblé élimine les dépôts tenaces sans agresser le matériau. Pour les zones très ombragées, un traitement préventif saisonnier (automne/printemps) limite la réapparition.</p>`,
        },
        {
          question:
            "Peut-on utiliser la haute pression sur une terrasse en bois composite rénovée, ou faut-il une méthode plus douce ?",
          answer: `<p>Le bois composite demande une haute pression très contrôlée (basse pression, distance respectée) ou un brossage préférentiel. Nous testons toujours sur une petite zone avant de généraliser. Le brossage doux est souvent plus adapté pour préserver la surface et éviter les micro-rayures.</p>`,
        },
        {
          question:
            "Quel traitement anti-mousse préconisez-vous pour une terrasse en dalles gravillonnées d'un pavillon local, et combien de temps dure l'effet ?",
          answer: `<p>Les dalles gravillonnées reçoivent un produit spécifique qui pénètre sans laisser de film glissant. L'effet dure généralement 6–12 mois selon l'exposition et l'humidité locale. Un renouvellement annuel en automne (avant les pluies) est recommandé pour les zones très ombragées du Plessis-Trévise.</p>`,
        },
        {
          question:
            "Que doit préparer le propriétaire (mobilier, plantes) avant un démoussage ou entretien de terrasse à Saint-Antoine ou ailleurs ?",
          answer: `<p>Déplacez chaises, tables, parasols et pots de fleurs vers un espace protégé. Les plantes en pots peuvent rester à proximité, bâchées si nécessaire. Fermez les portes-fenêtres et baies vitrées. Nous nous chargeons de la protection supplémentaire ; votre préparation minimale accélère simplement l'intervention.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux ou avant changement de locataire, avec diagnostic initial et protocole adapté à chaque surface.",
      whyUsBullets: [
        "Expertise des typologies locales : pavillons rénovés et résidences T3/T4 du secteur.",
        "Polyvalence surfaces : carrelage, parquet, moquette, finitions délicates sans dégât.",
        "Respect délais serrés et coordination agences : remise en état rapide, reporting transparent.",
      ],
      uniqueIntro: `<p>Comment assurer qu'un appartement ou une maison soit impeccable avant un état des lieux, ou après des travaux de rénovation ? À Le Plessis-Trévise, les agences immobilières et bailleurs de la région (Avenue Ardouin notamment) font face à des délais serrés pour préparer les biens en rotation locative. Poussières de chantier, traces de peinture, résidus de colle, salissures accumulées : chaque élément compte pour la remise de clés.</p>
<p class="mt-4">Un logement bien préparé change la première impression et évite les litiges d'état des lieux. Pour les pavillons rénovés comme pour les appartements T3/T4 des résidences (Val Roger, Cité de la Joie), la propreté finale doit être irréprochable. Sols carrelés ou parquet, salle de bain, cuisine, placards intérieurs : chaque pièce doit être traitée selon sa nature et son usage.</p>
<p class="mt-4">Klinova propose une intervention structurée : diagnostic initial, plan d'action adapté au contexte (fin de chantier, état des lieux, déménagement), protections si nécessaire, et contrôle qualité avant remise des clés. Pas de surprise, une coordination claire avec votre agenda.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute intervention, nous établissons l'état réel du bien : type de salissures (poussière de chantier, traces de peinture, résidus), surfaces fragiles (parquet ancien, carrelage délicat), accès (étages, ascenseur étroit). Nous protégeons les éléments sensibles et planifions l'ordre des pièces pour une efficacité maximale.</p>

<h3>Nettoyage par zones</h3>
<p>Dépoussiérage complet des plafonds, murs et plinthes. Sols : aspiration puis lavage adapté au revêtement (carrelage, parquet, moquette). Pièces d'eau : sanitaires, faïence, joints, plans de travail cuisine. Détails critiques : interrupteurs, poignées, radiateurs, traces de peinture ou colle si fin de chantier. Placards intérieurs et finitions.</p>

<h3>Contrôle et remise</h3>
<p>Vérification complète pièce par pièce. Aération du logement. Remise des clés avec rapport d'intervention si demandé. En cas de point non conforme, reprise immédiate sans surcoût.</p>`,
      specificChallenges: [
        "Délais d'état des lieux souvent comprimés : coordination requise avec agences avenue Ardouin.",
        "Traces de chantier (peinture, colle, enduit) nécessitent protocole spécifique par surface.",
        "Accès étages et ascenseurs parfois petits dans les résidences anciennes : organisation logistique critique.",
        "Sols fragiles (parquet flottant, carrelage ancien) demandent techniques adaptées sans risque d'abrasion.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle est la différence opérationnelle entre un nettoyage standard et un nettoyage fin de chantier pour un pavillon rénové de Val Roger ?",
          answer: `<p>Un nettoyage fin de chantier traite les résidus spécifiques : poussière de ponçage, traces de peinture, colle de revêtement, enduit. Nous utilisons des techniques ciblées par surface (décapage doux parquet, détachage chimique carrelage) et des protections pour ne pas endommager les finitions neuves. Un nettoyage standard ne suffit pas après travaux.</p>`,
        },
        {
          question:
            "Comment calculez-vous le prix pour un nettoyage avant état des lieux d'un appartement T3/T4 au Plessis-Trévise ?",
          answer: `<p>La tarification repose sur la surface, le type de salissures et les accès. Un T3/T4 standard (70–90 m²) en résidence avec ascenseur coûte moins cher qu'un pavillon isolé. Nous proposons un devis sur site après diagnostic. Les agences avenue Ardouin bénéficient de tarifs partenaires pour rotations régulières.</p>`,
        },
        {
          question:
            "En cas d'urgence avant état des lieux, quels délais d'intervention garantissez-vous pour un appartement du centre ?",
          answer: `<p>Pour un bien accessible (digicode, clés disponibles), nous intervenons sous 48 heures en semaine. Centre-ville et Val Roger : délais réduits grâce à la proximité. Coordination directe avec l'agence ou le syndic pour accès et horaires. Remise de clés le jour même si intervention matinale.</p>`,
        },
        {
          question:
            "Proposez-vous une garantie satisfaction ou une reprise si le niveau propreté après nettoyage fin de chantier n'est pas atteint ?",
          answer: `<p>Oui. Contrôle qualité systématique avant remise. Si un point ne satisfait pas (trace résiduelle, zone mal traitée), nous repassons sans surcoût. Objectif : état des lieux sans contestation. Rapport d'intervention fourni sur demande pour justifier le niveau atteint.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;