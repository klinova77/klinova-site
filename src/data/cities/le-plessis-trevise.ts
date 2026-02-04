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
  hubIntro:
    '<p><strong>Partenaire terrain</strong> de vos immeubles et résidences, Klinova organise la propreté et la maintenance technique au Plessis-Trévise. Nous connaissons les quartiers pavillonnaires, les résidences denses comme Val Roger, et les équipements publics. Ville parc au cœur du Plateau Briard, à proximité du Bois Saint-Martin, la commune demande une gestion rigoureuse des accès, des horaires discrets et une sensibilité aux nuisances sonores.</p>\n<p class="mt-4">Propreté visible, maintenance préventive, <strong>reporting transparent</strong> : nous structurons l\'intervention selon votre bâti et vos contraintes. Pas de "black box" — vous savez comment nous travaillons, quand nous intervenons, et ce que nous avons fait. Coordination avec syndics, bailleurs et gestionnaires, adaptation aux digicodes et gardiens, respect des zones bleues et marchés.</p>\n<ul>\n  <li>Expertise locale : Halls résidentiels, parkings souterrains (Cité de la Joie, Val Roger), balcons exposés aux axes routiers. Nous adaptons le protocole à chaque typologie.</li>\n  <li>Gêne minimale : Horaires décalés, discrétion sonore, protection des voisins. Ville résidentielle = vigilance constante sur les nuisances.</li>\n  <li>Organisation terrain : Stationnement coordonné (zone bleue centre), accès digicodes/badges, rotation équipes selon secteurs. Aucun blocage logistique.</li>\n</ul>',

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Résidences denses (Val Roger, Cité de la Joie) : <strong>parkings souterrains, digicodes</strong>, gestion syndic.",
    "Ville très verte : proximité Bois Saint-Martin, parcs (Mairie, Mansart), <strong>feuilles/mousse sur balcons</strong> et terrasses.",
    "Axes routiers (Avenue du Général Leclerc, D4, D111) : <strong>pollution fine, dépôts noirs</strong> sur façades et balcons exposés.",
    "Marché couvert Avenue Ardouin : trafic piéton intense mercredi/samedi, déchets alimentaires, zone bleue saturée.",
    "Population résidentielle sensible : <strong>vigilance sur nuisances sonores</strong>, horaires discrets, protection voisins.",
    "Pavillons anciens (cité-jardin) : <strong>accès latéraux, jardins</strong>, terrasses bois/pierre nécessitant démoussage régulier.",
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
    "Saint-Pierre",
  ],
  nearbyCities: [
        "emerainville",
        "villiers-sur-marne",
        "noisy-le-grand",
        "pontault-combault",
        "champigny-sur-marne",
        "champs-sur-marne",
        "noisiel",
        "gournay-sur-marne",
        "saint-maur-des-fosses",
        "le-perreux-sur-marne"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Le Plessis-Trévise",
    "Avenue Ardouin",
    "Château des Tourelles",
    "Espace Paul Valéry",
    "Parc de la Mairie (Parc d'Ourém)",
    "Résidence Val Roger",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Vous intervenez dans tous les quartiers du Plessis-Trévise ?",
      answer:
        "<p><strong>Oui.</strong> Nous couvrons l'ensemble de la commune : Centre, Val Roger, Parc de la Lande, Marbeau, Coeuilly, Saint-Antoine, Saint-Martin, Saint-Pierre. Chaque secteur a ses spécificités (pavillons anciens, résidences récentes, proximité axes). Nous adaptons <strong>le matériel, les horaires et l'équipe</strong> selon la zone.</p>",
    },
    {
      question:
        "Comment vous gérez le stationnement et les horaires sensibles (marché, écoles) ?",
      answer:
        "<p>Nous repérons les contraintes avant intervention : <strong>zone bleue Avenue Ardouin, marchés mercredi et samedi matin, départs écoles 8h-9h</strong>. Nos équipes arrivent en dehors de ces créneaux ou coordonnent avec la mairie. <strong>Stationnement matériel prévu à l'avance</strong>, pas d'improvisation.</p>",
    },
    {
      question:
        "Vous avez l'expérience des résidences denses comme Val Roger ou Cité de la Joie ?",
      answer:
        "<p><strong>Oui.</strong> Parkings souterrains, digicodes, gardiens, parties communes étroites : nous maîtrisons ces environnements. Cité de la Joie (histoire Abbé Pierre) et Val Roger (immeubles années 70-80) demandent une organisation précise. Nous coordonnons avec les syndics et <strong>respectons les horaires d'accès</strong>.</p>",
    },
    {
      question:
        "Quel est votre délai d'intervention en cas d'urgence (fientes pigeons, dégât) ?",
      answer:
        "<p>Selon la nature : assainissement balcon (24-48h), nettoyage après sinistre (devis rapide, intervention 48-72h). Nous évaluons d'abord la situation, proposons un protocole clair et un délai réaliste. Pas de promesse \"immédiate\", mais réactivité adaptée au contexte.</p>",
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
      uniqueIntro:
        "<p>Dans les bureaux administratifs et salles culturelles du centre-ville, les moquettes accumulent rapidement <strong>poussière, traces de passage</strong> et résidus organiques. Entre le trafic quotidien des usagers, les allées et venues des agents, et les événements ponctuels (réunions, spectacles), les fibres se chargent en salissures visibles et odeurs persistantes. Ce phénomène s'accentue dans les petits collectifs où la circulation concentrée dans les escaliers et couloirs crée des zones d'usure prématurée.</p>\n<p class=\"mt-4\">Un nettoyage régulier transforme l'image des espaces : moquette ravivée, odeurs éliminées, confort retrouvé pour les occupants et visiteurs. Au-delà de l'aspect visuel, l'entretien professionnel prolonge la durée de vie des fibres et maintient l'hygiène des parties communes. Pour les bureaux et salles de réception, c'est un élément clé de l'image professionnelle.</p>\n<p class=\"mt-4\">Notre approche repose sur un diagnostic préalable du type de moquette (dalles, velours, bouclée), de la nature des taches et des contraintes d'accès propres à chaque bâti. Nous adaptons la méthode et le planning pour intervenir avec discrétion, sans perturber l'activité.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation</h3>\n<p>Nous commençons par identifier le type de moquette (dalles textiles, velours ras, bouclée) et évaluer l'état des salissures : taches localisées, encrassement général, odeurs. Nous protégeons <strong>les plinthes, bas de murs</strong> et mobilier fixe. Un balisage temporaire signale les zones en traitement si l'espace reste accessible.</p>\n\n<h3>Injection-extraction par zones</h3>\n<p>Le nettoyage s'effectue zone par zone : escaliers et couloirs d'abord (trafic maximal), puis bureaux et salles. Nous injectons une solution détergente adaptée à la fibre, puis extrayons l'humidité et les salissures par aspiration puissante. Les zones très sales reçoivent plusieurs passes pour un <strong>résultat optimal</strong>.</p>\n\n<h3>Séchage et finalisation</h3>\n<p>Nous optimisons l'extraction pour réduire le temps de séchage (généralement 4 à 8 heures selon épaisseur et ventilation). Nous conseillons sur la fréquence d'entretien (trimestrielle pour bureaux, semestrielle pour parties communes) et les gestes simples de maintenance quotidienne.</p>",
      specificChallenges: [
        "Escaliers étroits des petits collectifs : passage du matériel d'extraction limité, nécessite démontage partiel.",
        "Taches anciennes incrustées sur moquette de bureau : nécessite détachage ciblé avant injection-extraction.",
        "Horaires d'intervention : bureaux fermés le soir/weekend, <strong>coordination avec gardiens</strong> et clés d'accès obligatoire.",
        "Moquettes dalles en résidences récentes : <strong>risque de décollement</strong> si humidité excessive, extraction maximale requise.",
        "Gestion de l'eau de rinçage : évacuation par escaliers étroits, balisage anti-glisse indispensable.",
      ],
      faqAdditions: [
        {
          question:
            "Avec les escaliers étroits des petits collectifs du centre-ville, comment passez-vous le matériel pour le nettoyage ?",
          answer:
            "<p>Nous utilisons un <strong>injecteur-extracteur compact</strong> et un aspirateur eau/poussières adaptés aux accès réduits. Le réservoir d'eau se remplit étage par étage, et l'extraction se fait en continu. Pour les escaliers très étroits, nous optons pour le nettoyage manuel avec pulvérisateur et aspirateur portatif, tout aussi efficace sur les marches.</p>",
        },
        {
          question:
            "Quelle méthode recommandez-vous entre injection-extraction et nettoyage vapeur pour les moquettes des salles de l'Espace Paul Valéry ?",
          answer:
            "<p>L'injection-extraction est plus adaptée aux moquettes épaisses et aux taches tenaces des salles de spectacle. La vapeur convient mieux aux moquettes fines et aux zones sensibles. Pour l'Espace Paul Valéry, nous préconisons <strong>l'injection-extraction avec détachage préalable</strong>, car les taches de boissons et popcorn sont fréquentes et nécessitent une extraction puissante.</p>",
        },
        {
          question:
            "Pour des taches anciennes et incrustées sur la moquette d'un bureau municipal, quelles solutions efficaces proposez-vous ?",
          answer:
            "<p>Nous appliquons d'abord un détachant spécialisé selon la nature de la tache (tanin, café, graisse), laissons agir 15 à 30 minutes, puis procédons à l'injection-extraction. Les taches très anciennes peuvent nécessiter plusieurs passages. Si la fibre est endommagée, nous proposons un remplacement localisé de dalles textiles.</p>",
        },
        {
          question:
            "À quelle fréquence recommandez-vous un entretien professionnel des moquettes dans les parties communes du Val Roger ?",
          answer:
            "<p>Pour une résidence comme Val Roger avec trafic quotidien important, nous recommandons un nettoyage trimestriel des escaliers et couloirs, et un entretien semestriel des halls. Un brossage régulier (hebdomadaire) et un aspirage (2× par semaine) complètent le protocole pour maintenir la moquette en bon état entre les interventions.</p>",
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
      uniqueIntro:
        "<p>Les parkings du Plessis-Trévise — qu'ils soient souterrains dans les résidences Val Roger ou aériens autour du marché et de la Mairie — accumulent rapidement <strong>des traces d'huile, des graviers</strong> et des dépôts gris qui ternissent l'image de l'immeuble. Les jours de marché (mercredi et samedi), le trafic intensifie cette salissure, avec des résidus alimentaires et des poussières qui s'incrustent dans les joints et les rigoles.</p>\n<p class=\"mt-4\">Un parking propre rassure les résidents et les visiteurs, améliore la sécurité (meilleure visibilité, moins de glissance) et prolonge la durée de vie du revêtement. Pour les copropriétés et les gestionnaires, c'est aussi un argument de confort auprès des locataires et une réduction des plaintes liées à l'hygiène des parties communes.</p>\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic préalable du revêtement (béton brut, enrobé, résine), un balisage sécurisé pendant les travaux, et une gestion stricte des eaux de lavage — point critique dans les souterrains où les évacuations doivent être respectées. Nous coordonnons les horaires avec les syndics pour minimiser la gêne aux usagers.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation sécurisée</h3>\n<p>Le relevé du type de revêtement (béton, enrobé, résine) et de l'état des évacuations (regards, rigoles) détermine la méthode. Nous balisageons les zones avec <strong>signalétique claire</strong> et, si nécessaire, organisons la rotation des véhicules en accord avec le syndic pour maintenir l'accès.</p>\n\n<h3>Décrassage mécanisé et traitement des taches</h3>\n<p>Autolaveuse combinée à haute pression et dégraissant adapté au revêtement. Les zones critiques (rampes d'accès, pieds de murs, angles morts) reçoivent un <strong>traitement renforcé</strong>. Les taches d'huile anciennes sont traitées par passes successives pour éviter les résidus.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes sans débordement. Dépoussiérage aérien des blocs lumineux et tuyauteries si demandé. Rapport d'intervention et recommandations de fréquence (selon trafic : 2 à 4 fois par an pour parkings actifs).</p>",
      specificChallenges: [
        "Trafic intense les jours de marché (mercredi et samedi) : <strong>coordination d'accès</strong> et horaires décalés nécessaires.",
        "Souterrains Val Roger : gestion critique des eaux de lavage et respect des évacuations existantes.",
        "Taches d'huile anciennes sur enrobé : nécessite plusieurs passes et dégraissant adapté.",
        "Sensibilité résidentielle forte : minimiser <strong>les nuisances sonores</strong> et la gêne aux usagers pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Quelles différences de méthode appliquez-vous entre un parking souterrain du Val Roger et un parking aérien du marché ?",
          answer:
            "<p>Les souterrains (Val Roger) exigent une <strong>gestion stricte des eaux de lavage</strong> via les évacuations existantes, sans débordement. Les aériens (marché) permettent plus de flexibilité, mais nécessitent un balisage renforcé car le trafic y est plus intense les jours de marché. Le revêtement diffère aussi : béton brut en souterrain, enrobé en aérien, ce qui change le choix du dégraissant et la pression appliquée.</p>",
        },
        {
          question:
            "Comment procédez-vous pour éliminer des taches d'huile anciennes dans un parking proche de l'Avenue du Général Leclerc ?",
          answer:
            "<p>Les taches anciennes incrustées nécessitent un pré-traitement avec dégraissant spécifique, suivi de passes multiples à haute pression. Nous adaptons la pression selon le revêtement pour éviter d'endommager l'enrobé ou le béton. Un diagnostic initial détermine si une seule intervention suffit ou si un suivi est recommandé quelques semaines après.</p>",
        },
        {
          question:
            "Pour intervenir sur le parking du marché, quels créneaux horaires recommandez-vous afin de limiter l'impact sur les usagers ?",
          answer:
            "<p>Les jours de marché (mercredi et samedi matin) sont à éviter. Nous privilégions les fins d'après-midi en semaine ou le dimanche matin. Avec le syndic, nous définissons un créneau où le parking est partiellement ou totalement fermé selon la taille et l'importance du trafic. Un balisage clair informe les résidents à l'avance.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage et l'évacuation en intervention dans un parking souterrain du Plessis-Trévise ?",
          answer:
            "<p>Les eaux sont dirigées vers les regards et rigoles existantes. Nous vérifions avant intervention que <strong>les évacuations ne sont pas obstruées</strong>. En cas de débit important, nous utilisons des bacs de rétention temporaires pour éviter tout débordement. Si des zones très chargées en hydrocarbures sont présentes, nous adaptons le protocole (pré-traitement, passes supplémentaires) et pouvons mettre en rétention temporaire pour éviter tout débordement. Aucun rejet n’est effectué sur la voirie.</p>",
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
      uniqueIntro:
        "<p>Sur les balcons du Val Roger et des secteurs Centre, Avenue Maurice Berteaux, on observe rapidement l'accumulation de <strong>dépôts verts, traces grises</strong> et salissures incrustées dans les joints. L'exposition aux axes locaux, la proximité des parcs municipaux et l'humidité naturelle du Plateau Briard favorisent la formation de mousses et algues, particulièrement sur les faces nord et est. Ces dégradations s'aggravent d'année en année, rendant l'espace extérieur peu accueillant et glissant par temps humide.</p>\n<p class=\"mt-4\">Un balcon propre change le quotidien : retrouver une surface claire, saine et agréable à utiliser, sans crainte de glissade. Pour les résidents du Val Roger ou des résidences récentes, c'est aussi préserver l'aspect des façades et maintenir la valeur du bien. Un entretien régulier évite que les dépôts ne s'incrustent définitivement dans le béton ou le carrelage.</p>\n<p class=\"mt-4\">Notre intervention repose sur un diagnostic précis du support (béton peint, carrelage, dalles sur plots) et des protections strictes pour les voisins du dessous. Nous adaptons pression, produits et timing selon l'exposition et l'état réel du balcon, en minimisant les gênes sonores et les coulures.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation</h3>\n<p>Avant toute intervention, nous évaluons le support (béton, carrelage, dalles, bois composite) et l'état des joints. Nous protégeons les menuiseries (fenêtres, portes) avec des bâches, déplaçons le mobilier et les plantes, et mettons en place des <strong>protections anti-coulures</strong> pour les balcons du dessous. Cette étape est cruciale en résidentiel dense, où le respect du voisinage prime.</p>\n\n<h3>Enlèvement des dépôts et traitement ciblé</h3>\n<p>Nous commençons par enlever les gros débris (feuilles, terre, dépôts secs) à la brosse manuelle. Ensuite, nous appliquons un produit adapté au support et au type de salissure (mousses, algues, traces grasses). Le <strong>brossage manuel</strong> ou mécanique douce suit, selon la fragilité des joints. Un rinçage contrôlé élimine résidus et produit sans projections chez les voisins.</p>\n\n<h3>Finitions et conseils</h3>\n<p>Après séchage, nous nettoyons les garde-corps et vitrages si nécessaire. Nous vous conseillons sur la fréquence d'entretien selon l'exposition (avenue très passante = 1–2 fois par an) et les gestes simples pour maintenir le résultat.</p>",
      specificChallenges: [
        "Mousses et dépôts verts tenaces sur <strong>expositions nord/est</strong> proches des parcs municipaux.",
        "Joints fragiles en résidences anciennes : risque d'endommagement à haute pression.",
        "Coulures vers les voisins du dessous : <strong>gestion stricte de l'eau</strong> et bâchage obligatoire.",
        "Accès depuis paliers étroits ou loggias fermées : coordination logistique nécessaire.",
        "Fréquence d'entretien variable selon Avenue Maurice Berteaux (pollution) vs secteurs calmes.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les dépôts verts et mousses sur les balcons exposés nord/est proches des parcs du Plessis-Trévise ?",
          answer:
            "<p>Nous appliquons un traitement biocide adapté aux mousses et algues, suivi d'un <strong>brossage doux</strong> pour préserver les joints. Le rinçage contrôlé élimine tous résidus sans agresser le support. Pour les balcons très exposés (Parc de la Mairie, Parc Mansart), nous recommandons un entretien annuel pour éviter la réinfestation rapide.</p>",
        },
        {
          question:
            "Quel produit et quelle méthode utilisez-vous pour nettoyer un balcon carrelé sans abîmer les joints à Le Plessis-Trévise ?",
          answer:
            "<p>Les balcons carrelés des résidences récentes (Val Roger notamment) reçoivent un nettoyage à pression douce (&lt; 100 bar) avec produit neutre. Nous brossons manuellement les joints pour éviter l'érosion, puis rinçons à l'eau claire. Cette méthode préserve l'étanchéité et la durabilité du carrelage sur le long terme.</p>",
        },
        {
          question:
            "Comment évitez-vous les coulures et gênes pour le voisinage lors d'un nettoyage de balcon en centre-ville ?",
          answer:
            "<p>Nous mettons en place des bâches de protection sous le balcon dès le départ, canalisons l'eau vers les gouttières existantes, et utilisons des produits biodégradables. Le timing est choisi en accord avec les voisins (pas de week-end, horaires discrets). Cette organisation minimise les réclamations et respecte la tranquillité résidentielle.</p>",
        },
        {
          question:
            "Quelle fréquence d'entretien conseillez-vous pour un balcon sur avenue très exposée comme Maurice Berteaux ?",
          answer:
            "<p>Les balcons sur Avenue Maurice Berteaux, exposés à la circulation et à la pollution, bénéficient d'un nettoyage 1 à 2 fois par an (printemps et automne). Les secteurs plus calmes (Val Roger, quartiers pavillonnaires) peuvent espacer à 1 fois par an. Un entretien régulier coûte moins cher qu'un décapage en profondeur après années de négligence.</p>",
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
      uniqueIntro:
        "<p>Comment utiliser sereinement votre balcon quand les fientes de pigeons s'y accumulent ? À Le Plessis-Trévise, les balcons et corniches proches des parcs (Parc de la Mairie, Parc François Mansart) et du marché du centre-ville subissent régulièrement cette contamination. Les pigeons, attirés par les espaces verts et les zones alimentaires, reviennent inlassablement. Le problème ne se limite pas à l'aspect visuel : les fientes contiennent des <strong>agents pathogènes</strong> (histoplasmose, cryptococcose) qui posent des risques sanitaires réels, surtout pour les enfants et personnes fragiles.</p>\n<p class=\"mt-4\">Au-delà de la gêne et des odeurs tenaces, cette accumulation corrode les supports. Les derniers étages et corniches de petits collectifs et résidences anciennes — pierre, béton, garde-corps métalliques — se dégradent progressivement. L'intervention ne peut donc pas être un simple nettoyage : elle exige confinement, désinfection rigoureuse et élimination sécurisée des déchets contaminés. C'est un enjeu de santé publique autant que de préservation du bâti.</p>\n<p class=\"mt-4\">Notre approche combine enlèvement méthodique, protocole de désinfection homologué et <strong>mesures anti-retour</strong> (pics, filets) pour retrouver un balcon sain et utilisable. Zones à risque identifiées autour des parcs et marchés, nous adaptons chaque intervention aux contraintes locales et à la sensibilité du voisinage.</p>",
      uniqueDeepDive:
        "<h3>Confinement et protection</h3>\n<p>Avant toute action, nous établissons un périmètre sécurisé : <strong>bâchage de la zone</strong>, protection des intérieurs (fenêtres, portes) et des balcons adjacents. Chaque intervenant porte FFP2, gants, lunettes et combinaison jetable. Cette étape neutralise les risques d'envol de poussières contaminées et protège voisins et occupants.</p>\n\n<h3>Enlèvement et désinfection</h3>\n<p>Après humidification préalable pour éviter la dispersion de particules, nous procédons au ramassage des fientes dans des sacs étanches. Nettoyage complet du sol, garde-corps, vitrages et murs mitoyens. Application d'un <strong>produit virucide/bactéricide</strong> homologué avec temps de contact respecté, suivi d'un rinçage final. Délai d'aération avant réutilisation : 24h minimum selon conditions météo.</p>\n\n<h3>Prévention et évacuation</h3>\n<p>Installation de <strong>pics anti-pigeons</strong> sur corniches et rebords, ou filets de protection si pertinent. Évacuation sécurisée des déchets contaminés en sacs étanches, conformément aux protocoles sanitaires. Reporting d'intervention remis au client.</p>",
      specificChallenges: [
        "Proximité parcs et marché : réinfestation rapide sans mesures anti-retour durables.",
        "Derniers étages et corniches : <strong>accès difficile, risques chute</strong>, nécessité d'équipement sécurité.",
        "Risques sanitaires réels : histoplasmose, cryptococcose, agents pathogènes viables sur supports.",
        "Voisinage résidentiel sensible : intervention discrète, gestion odeurs et nuisances sonores minimale.",
        "Dégradation progressive béton/pierre : corrosion accélérée si pas de traitement régulier.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes sur mon balcon proche du Parc de la Mairie semblent infectieuses. Quels sont les risques sanitaires réels et comment agir rapidement ?",
          answer:
            "<p>Oui, les fientes contiennent des <strong>agents pathogènes</strong> (histoplasmose, cryptococcose) dangereux surtout pour enfants et immunodéprimés. Risques : infections respiratoires, allergies. Action rapide : confinement de la zone, port EPI, nettoyage + désinfection virucide. Délai avant réutilisation : 24h. Contactez-nous pour diagnostic et devis sans délai.</p>",
        },
        {
          question:
            "Quel protocole et quels EPI appliquez-vous pour nettoyer des fientes sur une corniche au dernier étage ?",
          answer:
            "<p>Protocole strict : FFP2 obligatoire, gants nitrile, lunettes, combinaison jetable. Bâchage périmètre, protection intérieurs et voisins. Humidification préalable, ramassage en sacs étanches, nettoyage supports (béton, pierre, métal), désinfection virucide homologuée, rinçage. Équipement sécurité chute si accès en hauteur. Reporting remis au client.</p>",
        },
        {
          question:
            "Après enlèvement des fientes sur une loggia, quelle désinfection garantira l'absence de risques résiduels ?",
          answer:
            "<p>Nous appliquons un produit virucide/bactéricide homologué avec <strong>temps de contact respecté</strong> (selon produit, 10-15 min). Cela élimine 99,9% des agents pathogènes. Rinçage final à l'eau claire, puis aération 24h avant réutilisation. Aucune garantie \"100%\" en absolu, mais protocole éprouvé réduit drastiquement risques résiduels. Pics anti-pigeons préviennent réinfestation.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation et l'élimination des déchets contaminés près du marché du centre ?",
          answer:
            "<p>Collecte en sacs étanches double-paroi, étiquetage, transport sécurisé. Évacuation conforme protocoles sanitaires (pas de détails filière spécialisée, mais traitement adapté déchets contaminés). Coordination horaires pour minimiser gêne marché. Reporting d'intervention documenté. Nettoyage zone après enlèvement pour éviter odeurs résiduelles.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",

      heroDescription:
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Le Plessis-Trévise (94420) enlève salissures incrustées, allergènes et odeurs du quotidien, en s’adaptant aux intérieurs familiaux (pavillons “cité-jardin”) comme aux grands ensembles et résidences (Val Roger, Cité de la Joie), avec une organisation discrète dans une ville très résidentielle.",

      whyUsBullets: [
        "Textiles “vie de famille” : traitement efficace des assises très sollicitées (tissu, microfibre, velours) et des tapis de salon, fréquents dans les pavillons et grands appartements du Plessis-Trévise.",
        "Gestion des taches réalistes : pré-traitement ciblé (boissons, gras, animaux) puis injection-extraction à eau chaude pour décrocher la salissure au cœur des fibres et l’extraire immédiatement.",
        "Intervention soignée en environnement calme : planification autour des contraintes locales (zone bleue et marché en centre-ville, accès résidences avec digicode/badge, sensibilité “gêne minimale”).",
      ],

      uniqueIntro:
        "<p>À Le Plessis-Trévise, la demande “canapés-tapis” est typiquement liée à des intérieurs soignés, souvent familiaux : pavillons dans l’esprit cité-jardin, mais aussi résidences et grands ensembles (Val Roger, Cité de la Joie). Dans ces logements, les textiles d’ameublement se chargent vite : <strong>poussières fines, allergènes</strong>, taches du quotidien et odeurs qui s’installent progressivement, même avec un entretien régulier.</p>\n<p class=\"mt-4\">Les canapés en tissu ou microfibre, très utilisés, finissent par se ternir sur les zones de contact (assises, accoudoirs). Les tapis retiennent poussières et particules, surtout quand il y a des enfants, des animaux, ou des allées et venues fréquentes. Dans les immeubles, les textiles peuvent aussi se recharger rapidement à cause des circulations et de la vie collective.</p>\n<p class=\"mt-4\">Un nettoyage professionnel à domicile remet les tissus au propre “en profondeur” : on décroche la salissure, on extrait ce qui est incrusté, et on retrouve un rendu net <strong>sans détremper les supports</strong>. C’est la bonne option quand l’objectif est l’hygiène, le confort, et une finition propre adaptée à une ville résidentielle attentive aux nuisances.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic textile et repérage des zones à traiter en priorité</h3>\n<p>On commence par identifier les matières (tissu, microfibre, velours, laine/synthétique), la sensibilité des couleurs et l’état réel des fibres. Le diagnostic cible les zones “chargées” (accoudoirs, têtières, assises, bords de tapis, coins) et les taches spécifiques (boissons, gras, traces d’animaux, poussières incrustées). Cette étape évite les erreurs classiques : <strong>trop d’eau sur un textile sensible</strong>, ou un produit inadapté qui fixe la tache.</p>\n<h3>2. Pré-traitement ciblé puis injection-extraction à eau chaude</h3>\n<p class=\"mt-4\">Les taches et odeurs reçoivent un pré-traitement adapté (dégraissant, enzymatique, neutralisant d’odeurs selon le cas). Ensuite, l’injection-extraction à eau chaude travaille au cœur des fibres : on injecte la solution, on brosse si nécessaire, puis on aspire immédiatement l’eau sale. Le principe : décoller et extraire, plutôt que “mouiller et étaler”. Résultat : un rendu plus net et une vraie amélioration de l’hygiène textile.</p>\n<h3>3. Extraction finale, séchage maîtrisé et conseils d’entretien réalistes</h3>\n<p class=\"mt-4\">Une extraction maximale est réalisée pour limiter l’humidité résiduelle et accélérer le séchage (souvent 6 à 10 heures selon la ventilation). On donne ensuite des conseils simples pour garder le résultat : aspiration régulière des tapis, protection des assises les plus sollicitées (plaid/housse), et fréquence adaptée à l’usage (enfants/animaux, vie de famille). L’objectif est de prolonger la propreté sans “sur-traiter” les textiles.</p>",

      specificChallenges: [
        "Textiles très sollicités : <strong>canapés en tissu/microfibre</strong> et tapis de salon typiques des pavillons et grands appartements.",
        "Taches du quotidien : boissons, gras, traces d’animaux et poussières incrustées qui ternissent les couleurs.",
        "Ville résidentielle calme : besoin de discrétion et de “gêne minimale” pendant l’intervention.",
        "Contraintes d’accès variables : <strong>digicode/badge en résidences</strong> (Val Roger, Cité de la Joie) et stationnement plus cadré en centre-ville (zone bleue, marché).",
      ],

      faqAdditions: [
        {
          question:
            "Est-ce que vous intervenez à domicile pour un canapé en tissu non déhoussable au Plessis-Trévise ?",
          answer:
            "<p>Oui. Le protocole est justement conçu pour les canapés non déhoussables : diagnostic, pré-traitement des zones chargées, puis injection-extraction à eau chaude avec aspiration puissante pour nettoyer en profondeur sans détremper les rembourrages.</p>",
        },
        {
          question:
            "Combien de temps faut-il pour que le canapé ou le tapis soit sec ?",
          answer:
            "<p>Le séchage complet est généralement de 6 à 10 heures selon l’épaisseur du tissu, la température et l’aération. On maximise l’extraction en fin d’intervention pour limiter l’humidité et accélérer le séchage.</p>",
        },
        {
          question: "Peut-on enlever les odeurs (animaux, tabac, cuisine) ?",
          answer:
            "<p>Dans la plupart des cas, oui : les odeurs diminuent nettement quand on <strong>extrait la salissure</strong> et les résidus incrustés. Selon la source (ancienneté, imprégnation), un neutralisant d’odeurs peut être ajouté au protocole pour améliorer le résultat.</p>",
        },
        {
          question:
            "Comment se passe l’accès et le stationnement en résidence ou en centre-ville ?",
          answer:
            "<p>On s’organise en amont : accès via digicode/badge si nécessaire, et stationnement adapté aux règles locales (zone bleue en centre-ville, périodes de marché). L’objectif est une intervention fluide et discrète.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage et entretien de terrasses au Plessis-Trévise selon le matériau et l’exposition, élimination des mousses, traces noires et salissures organiques, avec des méthodes adaptées à l’environnement boisé et résidentiel de la commune.",
      whyUsBullets: [
        "Intervention dans tous les secteurs plesséens : Centre, Bois Saint-Martin, Les Touleuses, Marbeau, quartiers pavillonnaires et zones résidentielles calmes.",
        "Approche adaptée aux terrasses de maisons individuelles : dalles béton, carrelage extérieur, bois et composite, fréquemment exposés à l’ombre et à l’humidité.",
        "Protection soignée des abords : bâchage du mobilier, respect des jardins et plantations, rinçage maîtrisé sans projections inutiles.",
      ],
      uniqueIntro:
        "<p><strong>Le Plessis-Trévise</strong>, commune résidentielle du Val-de-Marne, se caractérise par un habitat majoritairement pavillonnaire et la proximité immédiate du bois Saint-Martin. Cet environnement verdoyant offre un cadre de vie apprécié mais favorise l’humidité sur les surfaces extérieures.</p>\n\n<p class=\"mt-4\">Les terrasses situées à proximité des zones boisées ou dans des jardins arborés sont particulièrement exposées aux mousses, algues, lichens et aux dépôts organiques. L’ombre prolongée, la rosée matinale et les feuilles mortes accélèrent l’encrassement des sols extérieurs.</p>\n\n<p class=\"mt-4\">Le parc immobilier du Plessis-Trévise est composé en majorité de <strong>maisons individuelles</strong> avec terrasses en dalles béton, carrelage extérieur, bois ou bois composite. Ces supports nécessitent des méthodes de nettoyage spécifiques afin de préserver leur état tout en éliminant efficacement les salissures.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation de la terrasse</h3>\n<p>Le revêtement est identifié et son état contrôlé avant toute intervention. Le mobilier de jardin, les pots et éléments décoratifs sont déplacés ou protégés. Les façades, seuils et menuiseries adjacentes sont bâchés afin d’éviter <strong>toute projection</strong>, notamment dans les jardins clos.</p>\n\n<h3>Nettoyage ciblé selon le support</h3>\n<p>Le protocole est ajusté au matériau : solution alcaline pour béton et carrelage, produit spécifique pour bois et composite, traitement doux pour supports plus sensibles. Un <strong>brossage mécanique contrôlé</strong> permet de décoller les mousses et biofilms. Le rinçage est réalisé à pression maîtrisée pour préserver les joints et la texture de surface.</p>\n\n<h3>Stabilisation du résultat et conseils</h3>\n<p>Sur les terrasses fortement exposées à l’humidité et à l’ombre, un traitement préventif peut être proposé afin de ralentir la réapparition des mousses. Les eaux de rinçage sont orientées vers <strong>les écoulements existants</strong>. Des recommandations d’entretien simple sont fournies pour prolonger le résultat dans le temps.</p>",
      specificChallenges: [
        "Proximité du bois Saint-Martin : <strong>forte humidité ambiante</strong> et retombées végétales favorisant les mousses et lichens.",
        "Terrasses de pavillons ombragées par des arbres : séchage lent après pluie et surfaces rapidement glissantes.",
        "Dalles béton anciennes : porosité marquée nécessitant un nettoyage progressif et non agressif.",
        "Terrasses en bois ou composite : <strong>sensibilité aux rayures</strong> et aux UV, nécessitant un brossage et des produits adaptés.",
        "Accumulation saisonnière de feuilles et tanins végétaux tachant durablement les sols extérieurs.",
      ],
      faqAdditions: [
        {
          question:
            "Ma terrasse devient glissante après la pluie au Plessis-Trévise, est-ce lié à l’environnement ?",
          answer:
            "<p>Oui. La proximité du bois Saint-Martin et la végétation dense favorisent le développement de <strong>biofilms (mousses, algues)</strong> rendant les terrasses glissantes après la pluie. Un nettoyage ciblé permet d’éliminer ces dépôts et d’améliorer le confort d’usage.</p>",
        },
        {
          question: "Nettoyez-vous les terrasses en bois sans les abîmer ?",
          answer:
            "<p>Les terrasses en bois nécessitent une approche spécifique. Nous utilisons des produits adaptés et un brossage contrôlé, sans haute pression agressive, afin de nettoyer le support tout en préservant les fibres et l’aspect du bois.</p>",
        },
        {
          question:
            "À quelle fréquence faut-il nettoyer une terrasse dans un quartier boisé ?",
          answer:
            "<p>Dans un environnement comme Le Plessis-Trévise, un nettoyage complet tous les 12 à 18 mois est généralement recommandé. La fréquence dépend toutefois de <strong>l’exposition à l’ombre</strong>, de la végétation environnante et du matériau de la terrasse.</p>",
        },
        {
          question:
            "Intervenez-vous uniquement chez les particuliers ou aussi en copropriété ?",
          answer:
            "<p>Nous intervenons principalement chez les particuliers, mais également sur les terrasses et cours extérieures de copropriétés de taille résidentielle, après coordination avec le syndic.</p>",
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
      uniqueIntro:
        "<p>Comment assurer qu'un appartement ou une maison soit impeccable avant un état des lieux, ou après des travaux de rénovation ? À Le Plessis-Trévise, les agences immobilières et bailleurs de la région (Avenue Ardouin notamment) font face à des délais serrés pour préparer les biens en rotation locative. <strong>Poussières de chantier, traces de peinture</strong>, résidus de colle, salissures accumulées : chaque élément compte pour la remise de clés.</p>\n<p class=\"mt-4\">Un logement bien préparé change la première impression et évite les litiges d'état des lieux. Pour les pavillons rénovés comme pour les appartements T3/T4 des résidences (Val Roger, Cité de la Joie), la propreté finale doit être irréprochable. Sols carrelés ou parquet, salle de bain, cuisine, placards intérieurs : chaque pièce doit être traitée selon sa nature et son usage.</p>\n<p class=\"mt-4\">Klinova propose une intervention structurée : diagnostic initial, plan d'action adapté au contexte (fin de chantier, état des lieux, déménagement), protections si nécessaire, et contrôle qualité avant remise des clés. Pas de surprise, une coordination claire avec votre agenda.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et préparation</h3>\n<p>Avant toute intervention, nous établissons l'état réel du bien : type de salissures (poussière de chantier, traces de peinture, résidus), surfaces fragiles (parquet ancien, carrelage délicat), accès (étages, ascenseur étroit). Nous protégeons <strong>les éléments sensibles</strong> et planifions l'ordre des pièces pour une efficacité maximale.</p>\n\n<h3>Nettoyage par zones</h3>\n<p>Dépoussiérage complet des plafonds, murs et plinthes. Sols : aspiration puis lavage adapté au revêtement (carrelage, parquet, moquette). Pièces d'eau : sanitaires, faïence, joints, plans de travail cuisine. Détails critiques : <strong>interrupteurs, poignées, radiateurs</strong>, traces de peinture ou colle si fin de chantier. Placards intérieurs et finitions.</p>\n\n<h3>Contrôle et remise</h3>\n<p>Vérification complète pièce par pièce. Aération du logement. Remise des clés avec rapport d'intervention si demandé. En cas de point non conforme, reprise immédiate sans surcoût.</p>",
      specificChallenges: [
        "Délais d'état des lieux souvent comprimés : <strong>coordination requise</strong> avec agences avenue Ardouin.",
        "Traces de chantier (peinture, colle, enduit) nécessitent protocole spécifique par surface.",
        "Accès étages et ascenseurs parfois petits dans les résidences anciennes : <strong>organisation logistique</strong> critique.",
        "Sols fragiles (parquet flottant, carrelage ancien) demandent techniques adaptées sans risque d'abrasion.",
      ],
      faqAdditions: [
        {
          question:
            "Quelle est la différence opérationnelle entre un nettoyage standard et un nettoyage fin de chantier pour un pavillon rénové de Val Roger ?",
          answer:
            "<p>Un nettoyage fin de chantier traite les résidus spécifiques : poussière de ponçage, traces de peinture, colle de revêtement, enduit. Nous utilisons des <strong>techniques ciblées par surface</strong> (décapage doux parquet, détachage chimique carrelage) et des protections pour ne pas endommager les finitions neuves. Un nettoyage standard ne suffit pas après travaux.</p>",
        },
        {
          question:
            "Comment calculez-vous le prix pour un nettoyage avant état des lieux d'un appartement T3/T4 au Plessis-Trévise ?",
          answer:
            "<p>La tarification repose sur la surface, le type de salissures et les accès. Un T3/T4 standard (70–90 m²) en résidence avec ascenseur coûte moins cher qu'un pavillon isolé. Nous proposons un devis sur site après diagnostic. Les agences avenue Ardouin bénéficient de tarifs partenaires pour rotations régulières.</p>",
        },
        {
          question:
            "En cas d'urgence avant état des lieux, quels délais d'intervention garantissez-vous pour un appartement du centre ?",
          answer:
            "<p>Pour un bien accessible (digicode, clés disponibles), nous intervenons sous 48 heures en semaine. Centre-ville et Val Roger : délais réduits grâce à la proximité. Coordination directe avec l'agence ou le syndic pour accès et horaires. Remise de clés le jour même si intervention matinale.</p>",
        },
        {
          question:
            "Proposez-vous une garantie satisfaction ou une reprise si le niveau propreté après nettoyage fin de chantier n'est pas atteint ?",
          answer:
            "<p>Oui. <strong>Contrôle qualité systématique</strong> avant remise. Si un point ne satisfait pas (trace résiduelle, zone mal traitée), nous repassons sans surcoût. Objectif : état des lieux sans contestation. Rapport d'intervention fourni sur demande pour justifier le niveau atteint.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
