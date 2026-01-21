import type { City } from "~/types/geo";

const city: City = {
  name: "Noisy-le-Grand",
  slug: "noisy-le-grand",
  postalCodes: ["93160"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Desservie par trois gares RER (A et E) et traversée par l'autoroute A4, Noisy-le-Grand concentre de nombreux défis d'entretien. Entre immeubles anciens, copropriétés denses et zones pavillonnaires bordant la Marne, la propreté des parkings, moquettes de halls et balcons reste un enjeu constant.",

  hubIntro: `<p>Acteur spécialisé de la propreté et de la maintenance courante à <strong>Noisy-le-Grand</strong>, Klinova accompagne les syndics de copropriété, bailleurs et entreprises dans la gestion quotidienne de leurs immeubles. Nos équipes interviennent régulièrement autour de Mont-d'Est, des Richardets, d'Yvris ou du centre-ville, avec une organisation pensée pour limiter les nuisances et sécuriser les accès.</p>
<p class="mt-4">Au-delà du simple « coup de propre », nous mettons en place des protocoles planifiés qui s'intègrent à la vie de la copropriété : planning annuel, reporting après chaque passage, coordination avec les gardiens et conseils syndicaux. L'objectif est de préserver la valeur du patrimoine tout en améliorant concrètement le confort des occupants.</p>
<ul>
  <li><strong>Interventions protocolisées :</strong> moquettes, parkings, balcons, textiles d'ameublement.</li>
  <li><strong>Techniciens formés</strong> aux accès sécurisés (badges Vigik, codes, parkings souterrains).</li>
  <li><strong>Créneaux adaptés</strong> aux contraintes locales : tôt le matin, en journée ou en période creuse.</li>
  <li><strong>Reporting synthétique</strong> et photos sur demande pour les gestionnaires à distance.</li>
</ul>`,

  citySpecificChallenges: [
    "Moquettes de halls très fréquentées autour des gares RER (Mont d'Est, Noisy–Champs).",
    "Fientes sur balcons exposés côté Marne ou zones boisées (Yvris, Richardets).",
    "Encrassement des parkings souterrains à cause des résidus d'hydrocarbures et poussières urbaines.",
    "Débordement végétal et mousses sur terrasses dans les quartiers pavillonnaires du sud.",
  ],

  districts: [
    "Mont-d'Est",
    "Butte-Verte",
    "Pavé Neuf",
    "Centre-ville",
    "Maille-Horizon",
    "Buttes-Halage",
    "Champy",
    "Clos aux Biches",
    "Cormiers",
    "Coteaux",
    "Grenouillère",
    "Hauts-Bâtons",
    "La Varenne",
    "Marnois",
    "Montfort",
    "Abraxas",
    "Le Palacio",
    "Les Hêtres",
    "Richardets",
    "Rive-Charmante",
    "Villeflix",
    "Yvris",
    "Les Épinettes",
    "Clos d'Ambert",
    "Île de la Marne",
    "Bas Heurts",
  ],

 nearbyCities: [
        "le-plessis-trevise",
        "champs-sur-marne",
        "gournay-sur-marne",
        "neuilly-sur-marne",
        "le-perreux-sur-marne",
        "neuilly-plaisance"
      ],

  landmarks: [
    "Mairie de Noisy-le-Grand",
    "Centre commercial Westfield Les Arcades",
    "Gare RER A – Noisy-le-Grand Mont d'Est",
    "Gare RER A – Noisy–Champs",
    "Gare RER E – Les Yvris–Noisy-le-Grand",
    "Autoroute A4 (sorties 8, 9 et 10)",
    "Bois Saint-Martin",
    "Fort de Villiers",
  ],

  faq: [
    {
      question: "Pouvez-vous intervenir rapidement à Noisy-le-Grand ?",
      answer:
        "<strong>Oui.</strong> Nos équipes couvrent régulièrement Noisy-le-Grand. Un rendez-vous peut être fixé sous 48 à 72 h selon la zone (Mont d'Est, Yvris, Richardets, etc.).",
    },
    {
      question: "Est-ce que vous gérez les accès sécurisés comme les badges Vigik ?",
      answer:
        "<strong>Bien sûr.</strong> Nos techniciens sont formés à la gestion des Vigik, codes d'accès et interphones. Une procédure stricte garantit la sécurité des lieux.",
    },
    {
      question: "Les devis sont-ils payants si nous sommes éloignés ?",
      answer:
        "<strong>Non.</strong> Le déplacement est toujours gratuit, même pour une simple évaluation. Nos devis sont réalisés sur site, sans engagement.",
    },
    {
      question: "Comment gérez-vous les contraintes locales (stationnement ou horaires) ?",
      answer:
        "Nous adaptons nos interventions aux contraintes de chaque copropriété : <strong>stationnement limité, horaires tôt le matin, créneaux hors présence des occupants.</strong>",
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
        "Nettoyage professionnel de moquettes à Noisy-le-Grand : élimination des taches incrustées et entretien en profondeur pour des halls d'entrée et cages d'escalier propres et accueillants.",
      whyUsBullets: [
        "Bonne connaissance des résidences autour du Mont d'Est, du Champy et des Richardets.",
        "Méthode d'injection–extraction maîtrisée, résultats visibles dès le premier passage.",
        "Interventions tôt le matin ou en journée selon les contraintes des copropriétés.",
        "Compte-rendu d'intervention disponible sur demande avec photos et remarques techniques.",
      ],

      uniqueIntro: `<p>À Noisy-le-Grand, les moquettes sont encore présentes dans de nombreux halls d'entrée, cages d'escalier et couloirs, notamment dans les résidences construites entre les années 1970 et 2000. Ces zones sont soumises à un <strong>passage intensif</strong> : résidents, livreurs, visiteurs. Résultat : taches incrustées, ternissement général, poussières accumulées dans les angles. Dans les immeubles les plus exposés (proximité des gares, rues passantes), l'effet est rapide.</p>
<p class="mt-4">Ce manque d'entretien donne une impression d'abandon, même quand le reste de l'immeuble est bien tenu. Pour les résidents, c'est inconfortable ; pour les gestionnaires, difficile à justifier. Un <strong>nettoyage professionnel méthodique</strong>, adapté à la configuration du bâtiment, permet de restaurer un aspect net et accueillant en quelques heures seulement.</p>`,

      uniqueDeepDive: `<h3>Diagnostic et préparation sur mesure</h3>
<p>Avant toute intervention, un diagnostic est réalisé sur place : type de moquette, niveau d'encrassement, présence de taches spécifiques (graisse, boisson, humidité), accessibilité, ascenseurs, horaires d'accès. À Noisy-le-Grand, certains halls sont ouverts sur rue, exposés aux poussières extérieures ; d'autres sont étroits, avec des accès contraints. Klinova adapte le protocole en fonction de ces données.</p>

<h3>Nettoyage par injection-extraction en profondeur</h3>
<p class="mt-4">Les zones sont protégées : bas de murs, pieds de portes, balisage pour éviter toute gêne aux occupants. Le nettoyage s'effectue par <strong>injection–extraction à l'eau</strong>, avec une solution adaptée au type de fibre. Nos techniciens insistent sur les marches, les paliers de cage d'escalier et les bords de plinthes, souvent oubliés mais très marqués. Les zones de fort passage (proximité de l'ascenseur, entrée principale) reçoivent plusieurs passes.</p>

<h3>Séchage rapide et conseils d'entretien</h3>
<p class="mt-4">L'extraction puissante limite le temps de séchage, tout en évacuant un maximum de salissures. Une aération est recommandée pendant quelques heures après l'intervention. En copropriété, un <strong>nettoyage annuel ou semestriel</strong> est conseillé pour maintenir l'image globale de l'immeuble et prolonger la durée de vie des revêtements textiles.</p>`,

      specificChallenges: [
        "Moquettes très sollicitées dans les halls proches de la gare de Noisy–Mont d'Est.",
        "Présence d'humidité résiduelle en rez-de-chaussée dans les bâtiments anciens.",
        "Difficultés d'accès dans certains bâtiments sans ascenseur (quartiers pavillonnaires ou mixtes).",
      ],

      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage est vraiment utile dans les cages d'escaliers très fréquentées ?",
          answer:
            "<strong>Oui.</strong> Dans les cages d'escalier de Noisy-le-Grand, le passage fréquent entraîne une accumulation rapide de salissures. Même sans taches visibles, la moquette se ternit et retient les poussières. Le nettoyage régulier améliore l'aspect général, réduit les odeurs et prolonge la durée de vie des matériaux.",
        },
        {
          question:
            "Vous intervenez aussi dans les petites copropriétés ou uniquement les grandes résidences ?",
          answer:
            "Klinova s'adapte à toutes les configurations. Que ce soit un petit immeuble de six logements ou une résidence de plusieurs cages, l'approche reste la même : <strong>diagnostic, méthode adaptée, passage précis.</strong> Nous intervenons aussi dans des bureaux, crèches ou cabinets médicaux équipés de moquette.",
        },
        {
          question: "Est-ce que le nettoyage par injection abîme la moquette ?",
          answer:
            "<strong>Non.</strong> Le matériel utilisé est professionnel et conçu pour respecter les fibres textiles. L'eau est injectée sous pression contrôlée, puis immédiatement aspirée. Le séchage prend généralement entre 2 et 6 heures selon la ventilation et l'exposition. La moquette retrouve sa texture sans être fragilisée.",
        },
        {
          question: "Comment se passe l'organisation dans un immeuble occupé ?",
          answer:
            "Nous convenons à l'avance des horaires avec le syndic ou le conseil syndical. Les zones à traiter sont balisées. Les techniciens préviennent les occupants le jour même. L'intervention est rapide, <strong>sans nuisance sonore majeure</strong>, et chaque passage est optimisé pour limiter la gêne dans les escaliers ou halls.",
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
        "À Noisy-le-Grand, un parking propre, sec et lisible améliore la sécurité des usagers tout en valorisant l'image de la copropriété ou de l'entreprise.",
      whyUsBullets: [
        "Connaissance du tissu local : résidences autour de Mont d'Est, quartiers pavillonnaires, zones mixtes.",
        "Matériel pro : autolaveuse, dégraissant, pression maîtrisée selon revêtement.",
        "Interventions tôt le matin ou par zones, gêne minimale pour les occupants.",
        "Compte-rendu disponible sur demande pour syndics ou gestionnaires.",
      ],

      uniqueIntro: `<p>À Noisy-le-Grand, les parkings souterrains sous les résidences ou en pied d'immeuble sont soumis à un <strong>encrassement rapide</strong>. Entre les remontées d'humidité, les poussières fines liées à l'autoroute A4 toute proche et les traces laissées par les véhicules, les sols se salissent vite. Les taches d'huile, les poussières grasses ou les salissures en pied de murs donnent rapidement une impression de négligé.</p>
<p class="mt-4">Dans certaines zones comme Mont d'Est ou les Richardets, le trafic quotidien lié aux gares, commerces ou entreprises renforce cette usure. Sans nettoyage structuré, les usagers se plaignent de glissades, de traces persistantes ou d'un manque d'hygiène. Un <strong>décrassage professionnel</strong>, planifié et maîtrisé, permet de sécuriser les circulations, de redonner de la lisibilité au marquage et d'améliorer l'image de l'ensemble immobilier.</p>`,

      uniqueDeepDive: `<h3>Diagnostic technique et préparation du site</h3>
<p>Chaque intervention débute par un <strong>diagnostic technique précis</strong> : type de revêtement (béton brut, résine, peinture), état des pentes et des siphons, accès pour le matériel, hauteur sous plafond. À Noisy-le-Grand, certains parkings présentent des rampes étroites ou des niveaux complexes, que nous intégrons dès le départ dans l'organisation pour éviter tout blocage.</p>

<h3>Décrassage en profondeur et dégraissage ciblé</h3>
<p class="mt-4">La première phase consiste à dégager la zone, signaler clairement l'intervention et réaliser un <strong>balayage mécanique ou manuel</strong> des déchets (feuilles, papiers, sable). Le nettoyage est ensuite effectué à l'<strong>autolaveuse</strong>, ou en haute pression avec un dégraissant adapté pour les taches d'huile anciennes. Nous traitons systématiquement les pieds de murs, les angles et les rampes d'accès. Les eaux usées sont récupérées ou orientées vers les évacuations existantes, en conformité avec la réglementation.</p>

<h3>Organisation par zones et entretien programmé</h3>
<p class="mt-4">Lorsque le parking est trop grand pour être vidé, l'intervention est découpée par zones, avec rotation des véhicules et créneaux définis en amont. Les créneaux matinaux sont souvent privilégiés pour limiter les gênes. Pour les copropriétés les plus exposées (forte circulation ou résidus fréquents), un <strong>entretien programmé tous les 6 à 12 mois</strong> est recommandé pour conserver un niveau de propreté constant et rassurant pour les usagers.</p>`,

      specificChallenges: [
        "Proximité de l'A4 et du centre commercial : dépôts fréquents de poussières grasses dans les parkings souterrains.",
        "Taches d'huile persistantes sur les rampes en pente ou au niveau des places les plus utilisées.",
        "Rotation des véhicules indispensable dans les copropriétés sans zones de dégagement.",
        "Évacuation parfois complexe dans les vieux parkings sans siphons efficaces.",
      ],

      faqAdditions: [
        {
          question: "Pourquoi les parkings de Noisy-le-Grand s'encrassent-ils aussi vite ?",
          answer:
            "La ville est traversée par l'A4 et compte plusieurs gares très fréquentées. Ces axes amènent beaucoup de circulation, donc de <strong>poussières noires, résidus de plaquettes, huiles, sable.</strong> Sans nettoyage structuré, les revêtements s'encrassent rapidement et donnent une impression de saleté persistante, même avec un balayage régulier.",
        },
        {
          question: "Est-ce qu'il faut vider tout le parking pour pouvoir nettoyer ?",
          answer:
            "<strong>Pas forcément.</strong> Dans la majorité des cas, nous organisons une rotation par zones : les copropriétaires déplacent leurs véhicules d'une partie à l'autre. Cela permet de nettoyer sans immobiliser tout le parking. Si besoin, nous intervenons tôt le matin ou en journée creuse pour limiter les désagréments.",
        },
        {
          question: "Est-ce que vous arrivez à enlever toutes les taches d'huile ?",
          answer:
            "Les taches récentes partent bien avec nos produits dégraissants. Pour les taches anciennes ou incrustées dans du béton poreux, une <strong>atténuation est possible mais sans garantie d'effacement total.</strong> Nous expliquons toujours en amont ce qu'on peut attendre comme résultat selon l'état du sol.",
        },
        {
          question: "Que faites-vous des eaux de lavage ?",
          answer:
            "Elles sont systématiquement récupérées ou dirigées vers les évacuations prévues du parking. Nos produits sont conformes à la réglementation. S'il n'y a pas de siphon efficace, nous mettons en place des <strong>solutions de confinement localisées.</strong> Le respect des normes reste une priorité sur chaque intervention.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 3 – BALCONS / TERRASSES
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "À Noisy-le-Grand, un balcon propre et désencombré devient à nouveau un espace de détente agréable et valorisant pour votre logement.",
      whyUsBullets: [
        "Intervention fréquente dans les résidences autour de Mont d'Est, Richardets, Yvris ou Champy.",
        "Méthode douce mais efficace, adaptée aux balcons exposés ou très encrassés.",
        "Créneaux flexibles selon disponibilité, gêne minimale pour l'occupant et les voisins.",
        "Photos avant/après sur demande pour les propriétaires bailleurs ou à distance.",
      ],

      uniqueIntro: `<p>Dans de nombreuses résidences de <strong>Noisy-le-Grand</strong>, les balcons sont peu utilisés faute d'entretien. Poussière noire, dépôts verts sur les dalles, joints noircis, traces de terre ou de pots renversés s'accumulent au fil du temps. L'humidité, les particules fines venues de l'A4 et les feuillages du Bois Saint-Martin renforcent cette sensation de saleté permanente.</p>
<p class="mt-4">Progressivement, le balcon devient un débarras ou un espace dont on se détourne, alors qu'il pourrait être un vrai prolongement du logement. Un <strong>nettoyage professionnel en profondeur</strong> permet de retrouver un sol propre, des gardes-corps nets, et de réinvestir pleinement cet espace extérieur, sans effort ni risque pour les matériaux.</p>`,

      uniqueDeepDive: `<h3>Protection des accès et préparation de la zone</h3>
<p>Chaque intervention commence par la <strong>protection de la zone intérieure</strong> : bâche devant la porte-fenêtre, ruban sur les menuiseries, protection des prises ou éclairages si besoin. Les meubles, pots et jardinières sont déplacés ou bâchés selon leur poids et leur fragilité. Tous les dépôts sont d'abord évacués manuellement : feuilles, terre sèche, poussières accumulées, résidus de fumée ou de barbecue.</p>

<h3>Nettoyage adapté aux supports et traitement complet</h3>
<p class="mt-4">Le nettoyage se fait ensuite avec un produit spécifique au support (carrelage, dalle béton, bois composite). Un <strong>brossage manuel ou mécanique</strong> est réalisé, avec une attention particulière portée aux joints, aux recoins, aux garde-corps et au pied des murs mitoyens. La pression est ajustée pour éviter d'abîmer les matériaux. L'eau est tirée vers l'extérieur ou récupérée, afin d'éviter toute coulure chez les voisins du dessous.</p>

<h3>Séchage et conseils d'entretien régulier</h3>
<p class="mt-4">Après l'intervention, un séchage naturel est suffisant en quelques heures, selon l'ensoleillement. Nous recommandons ensuite un simple <strong>balayage régulier</strong> et un nettoyage doux tous les deux à trois mois pour maintenir le résultat et conserver un balcon agréable au quotidien.</p>`,

      specificChallenges: [
        "Poussières grasses fréquentes côté A4 et autour de la gare de Noisy–Mont d'Est.",
        "Dépôts verts sur dalles exposées à l'ombre, proches des arbres (Yvris, Bois Saint-Martin).",
        "Garde-corps complexes ou anciens, difficiles à nettoyer sans matériel adapté.",
        "Gestion de l'écoulement impérative pour éviter les coulures sur les balcons inférieurs.",
      ],

      faqAdditions: [
        {
          question: "Est-ce que le nettoyage peut endommager les carrelages ou les joints ?",
          answer:
            "<strong>Non</strong>, nous utilisons des produits professionnels non corrosifs et une pression contrôlée. Le matériel est adapté aux balcons résidentiels. Les joints sont nettoyés mais jamais agressés. S'il y a une fragilité visible (joints très anciens ou décollés), nous adaptons la méthode pour préserver la structure.",
        },
        {
          question: "Que se passe-t-il si l'eau coule chez le voisin du dessous ?",
          answer:
            "C'est justement pour éviter ça que nous tirons systématiquement l'eau vers les évacuations ou utilisons des raclettes manuelles. Lorsqu'il n'y a pas d'évacuation prévue, nous <strong>limitons la quantité d'eau et la récupérons si besoin.</strong> Le but est de ne laisser aucune coulure visible ni aucune gêne.",
        },
        {
          question: "Est-ce que vos produits sont dangereux pour les plantes ou les animaux ?",
          answer:
            "<strong>Non</strong>, nous utilisons des nettoyants neutres ou biodégradables compatibles avec les espaces résidentiels. En cas de doute, les plantes sont bâchées ou déplacées temporairement. Une fois le balcon rincé, il peut être réutilisé sans danger pour les animaux de compagnie ou les enfants.",
        },
        {
          question: "Combien de temps faut-il avant de pouvoir réutiliser son balcon ?",
          answer:
            "En général, le balcon est sec et praticable en <strong>1 à 3 heures</strong> selon l'exposition. En été ou par temps sec, l'eau s'évapore rapidement. En période plus fraîche ou à l'ombre, il suffit de patienter un peu plus. Nous vous indiquons toujours la durée à prévoir à la fin de l'intervention.",
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
        "À Noisy-le-Grand, nous remettons en état des balcons souillés en profondeur : désinfectés, assainis et de nouveau sûrs à utiliser.",
      whyUsBullets: [
        "Connaissance du terrain : secteurs touchés comme le Pavé Neuf, les Richardets, Yvris ou la Butte Verte.",
        "Protocole strict avec équipements professionnels et désinfection complète en toute sécurité.",
        "Intervention rapide avec créneaux adaptés, sans nuisance pour les voisins.",
        "Compte-rendu et photos avant/après possibles sur demande du client ou du syndic.",
      ],

      uniqueIntro: `<p>Dans plusieurs quartiers de <strong>Noisy-le-Grand</strong>, notamment à proximité du parc de la Butte Verte ou autour de la gare RER, les pigeons prolifèrent sur les toitures, corniches ou combles ouverts. Résultat : des balcons entiers se retrouvent recouverts de fientes, parfois sur plusieurs semaines. L'odeur devient forte, l'espace inutilisable, et le <strong>risque sanitaire</strong> inquiète les occupants. Les tensions avec les voisins ou la copropriété sont fréquentes lorsque rien n'est fait.</p>
<p class="mt-4">Dans ce contexte, une simple serpillière ne suffit pas. Seule une <strong>intervention professionnelle, sécurisée et respectueuse du voisinage</strong> permet de rendre le balcon à nouveau sain, propre et utilisable, tout en éliminant les sources de contamination.</p>`,

      uniqueDeepDive: `<h3>Équipement complet et mise en sécurité sanitaire</h3>
<p>Nos techniciens interviennent avec un <strong>protocole strict</strong> et un équipement complet : combinaison, gants nitrile, masque à filtres, chaussures étanches. Le sol est protégé à l'intérieur du logement, les accès sécurisés. Le premier geste consiste à humidifier les fientes afin d'éviter leur dispersion sous forme de poussière infectieuse. Les déjections, nids éventuels, plumes ou détritus sont ramassés à la main, puis conditionnés dans des sacs à déchets adaptés, fermés hermétiquement.</p>

<h3>Nettoyage et désinfection virucide homologuée</h3>
<p class="mt-4">Les surfaces sont ensuite nettoyées : sol, plinthes, garde-corps, murs latéraux. Nous appliquons un <strong>désinfectant virucide et bactéricide</strong> conforme à la norme EN 14476, avec respect strict du temps de contact. Enfin, nous évacuons tous les déchets et la zone est aérée. Le balcon peut être réutilisé en toute sécurité après séchage complet, généralement sous 2 à 4 heures.</p>

<h3>Conseils de prévention et solutions anti-pigeons</h3>
<p class="mt-4">Si besoin, nous conseillons des solutions anti-intrusion simples pour limiter le retour des pigeons : pose de pics, filets ou autres systèmes dissuasifs adaptés à la configuration du balcon.</p>`,

      specificChallenges: [
        "Certains quartiers de Noisy-le-Grand sont plus exposés aux pigeons à cause des parcs et grands arbres.",
        "Les balcons en hauteur rendent le nettoyage plus complexe, surtout avec garde-corps rouillés ou poreux.",
        "Les poussières de fientes sèches présentent un risque infectieux si elles ne sont pas humidifiées.",
        "Les déchets doivent être manipulés avec précaution et évacués dans des sacs fermés, à part.",
      ],

      faqAdditions: [
        {
          question: "Est-ce dangereux de laisser les fientes trop longtemps sans nettoyage ?",
          answer:
            "<strong>Oui.</strong> Les fientes de pigeons peuvent contenir des agents pathogènes (bactéries, champignons) dangereux pour la santé, notamment par inhalation. Une exposition prolongée augmente les risques pour les personnes fragiles (enfants, personnes âgées, immunodéprimés). Un nettoyage professionnel permet de traiter ces risques en toute sécurité.",
        },
        {
          question: "Vos produits sont-ils sûrs une fois le balcon sec ?",
          answer:
            "<strong>Oui.</strong> Nous utilisons des désinfectants professionnels conformes aux normes sanitaires en vigueur. Une fois les surfaces sèches et aérées, il n'y a aucun risque pour les habitants, les enfants ou les animaux domestiques. Nous vous informons toujours du <strong>délai de réutilisation conseillé</strong> à la fin de l'intervention.",
        },
        {
          question: "Est-ce que le nettoyage peut abîmer les murs ou le sol du balcon ?",
          answer:
            "<strong>Non.</strong> Nous adaptons notre méthode aux matériaux : béton, carrelage, métal, peinture. Si les supports sont déjà altérés par l'acidité des fientes, nous nettoyons sans aggraver les dégâts. En cas de fragilité importante, nous vous alertons avant intervention.",
        },
        {
          question: "Que faites-vous des fientes et déchets ramassés ?",
          answer:
            "Tous les déchets sont conditionnés dans des <strong>sacs étanches et hermétiques</strong>, séparés des déchets ménagers. Ils sont ensuite évacués en toute sécurité. Nous assurons un traitement respectueux des règles d'hygiène et de salubrité, sans jamais laisser de traces sur place.",
        },
      ],
      ctaOverride: "",
    },

    // =========================
    // SERVICE 5 – CANAPÉS/ TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "À Noisy-le-Grand, vos canapés, tapis et matelas retrouvent fraîcheur, propreté et confort grâce à notre intervention à domicile.",
      whyUsBullets: [
        "Connaissance des logements de Noisy-le-Grand : pavillons, appartements récents, familles avec animaux.",
        "Méthodes et produits adaptés aux textiles délicats, aux taches et aux problématiques d'acariens.",
        "Intervention à domicile rapide, avec gêne minimale et respect des contraintes de chaque pièce.",
        "Possibilité de compte-rendu ou de passage récurrent sur demande (professionnels ou familles sensibles).",
      ],

      uniqueIntro: `<p>Dans les logements de <strong>Noisy-le-Grand</strong>, les textiles d'ameublement sont soumis à rude épreuve : enfants qui jouent, animaux de compagnie, passages fréquents. Résultat : les canapés s'imprègnent de taches de nourriture ou de boisson, les tapis captent la poussière ambiante, et les matelas deviennent peu à peu un refuge pour les acariens. Les odeurs s'installent, les tissus ternissent, et même en nettoyant régulièrement, une sensation d'inconfort ou de saleté peut persister.</p>
<p class="mt-4">Au-delà de l'apparence, c'est aussi une question d'<strong>hygiène et de qualité de vie.</strong> Un nettoyage professionnel permet de retirer les taches incrustées, les allergènes et les salissures invisibles, pour retrouver un intérieur plus sain et agréable à vivre.</p>`,

      uniqueDeepDive: `<h3>Inspection et prétraitement ciblé des taches</h3>
<p>Nous intervenons à domicile sur rendez-vous, avec un matériel adapté et une <strong>méthode rigoureuse</strong>. Après une inspection des textiles (nature, tissage, état), nous ciblons les taches les plus marquées à l'aide de prétraitements spécifiques : urine, graisses, taches alimentaires. Chaque produit est choisi en fonction du textile, sans agressivité inutile.</p>

<h3>Nettoyage en profondeur par injection-extraction</h3>
<p class="mt-4">Le nettoyage se fait ensuite par <strong>injection-extraction ou à la mousse sèche</strong> selon le support, afin de décoller les salissures en profondeur tout en respectant les fibres. Nous accordons une attention particulière au séchage. Nous conseillons une bonne aération de la pièce et, si nécessaire, nous déplaçons certains objets pour garantir une évaporation optimale. Nous intervenons en limitant les nuisances (bruit, humidité) et en respectant les contraintes du logement.</p>

<h3>Conseils d'entretien pour un résultat durable</h3>
<p class="mt-4">En fin d'intervention, nous vous donnons des <strong>conseils simples d'entretien</strong> pour préserver les résultats dans la durée : aspiration régulière, taches à traiter rapidement, protection des zones sensibles les plus exposées aux accidents du quotidien.</p>`,

      specificChallenges: [
        "À Noisy-le-Grand, de nombreux foyers accueillent enfants et animaux : les tissus sont vite sollicités.",
        "Les acariens, taches organiques et odeurs sont fréquents, notamment dans les chambres peu aérées.",
        "Certains logements manquent de ventilation naturelle, ce qui peut ralentir le séchage.",
        "Nos interventions prennent en compte ces contraintes pour un résultat sûr et durable.",
      ],

      faqAdditions: [
        {
          question: "Est-ce efficace contre les acariens et allergènes ?",
          answer:
            "<strong>Oui.</strong> Le nettoyage par injection-extraction ou mousse sèche permet d'éliminer une grande partie des allergènes, acariens et poussières incrustées. Nous utilisons des produits adaptés aux textiles et sans résidus nocifs. Le résultat est un textile plus sain, particulièrement utile pour les <strong>personnes allergiques ou les enfants sensibles.</strong>",
        },
        {
          question: "Pouvez-vous traiter les taches d'urine ou les mauvaises odeurs ?",
          answer:
            "<strong>Oui.</strong> Nous appliquons un prétraitement spécifique sur les zones concernées, puis procédons à un nettoyage profond. Cela permet d'éliminer les taches organiques et de réduire fortement les odeurs. Dans les cas plus anciens ou imprégnés, un deuxième passage peut être conseillé pour un résultat optimal.",
        },
        {
          question: "Combien de temps faut-il pour que les tissus sèchent complètement ?",
          answer:
            "Cela dépend du textile, de l'humidité ambiante et de l'aération. En général, un canapé ou un matelas met entre <strong>4 et 8 heures</strong> à sécher. Nous vous indiquons les précautions à prendre pour faciliter le séchage et éviter toute gêne dans votre quotidien.",
        },
        {
          question: "Dois-je préparer quelque chose avant votre venue ?",
          answer:
            "Oui, dans la mesure du possible, nous vous demandons de <strong>libérer l'espace autour du textile à traiter</strong> (canapé, tapis, matelas). Un accès facile permet un travail plus efficace. Nous vous rappelons également de prévoir une bonne aération pendant et après l'intervention. Rien d'autre n'est nécessaire, nous apportons tout le matériel.",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
