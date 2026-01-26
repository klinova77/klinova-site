import type { City } from "~/types/geo";

const city: City = {
  name: "Émerainville",
  slug: "emerainville",
  postalCodes: ["77184"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Émerainville pour l'entretien des parties communes, parkings et espaces extérieurs. Une équipe locale, des méthodes adaptées au bâti de la commune, du Bourg historique aux zones d'activités de Malnoue.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  hubIntro: `<p>Partenaire terrain depuis plusieurs années, Klinova comprend les spécificités d'Émerainville : une ville RER E bordée par l'A104 et l'aérodrome de Lognes, où la propreté des entrées d'immeubles, parkings et terrasses subit des dépôts réguliers de suie et poussière. Nous organisons nos interventions en fonction de votre contexte (résidentiel calme ou secteur gare actif) et de vos contraintes d'accès.</p>

<p>Au-delà du nettoyage, nous proposons une maintenance régulière adaptée à chaque surface : moquettes de bureaux, parkings souterrains ou aériens, balcons exposés, terrasses boisées. Reporting disponible pour les syndics et gestionnaires. Nos équipes travaillent avec discrétion, en minimisant la gêne aux occupants.</p>

<ul>
  <li><strong>Expertise locale :</strong> Connaissance du bâti pavillonnaire (Malnoue), des petits collectifs (Emery) et des zones tertiaires. Adaptation aux escaliers étroits du Bourg, digicodes fréquents, stationnement saturé autour de la gare.</li>
  <li><strong>Maîtrise technique :</strong> Matériel adapté (injection-extraction moquettes, autolaveuse parkings, nettoyage haute pression contrôlée). Gestion des eaux usées, protection des façades voisines, respect des supports délicats.</li>
  <li><strong>Organisation rigoureuse :</strong> Horaires décalés en zone résidentielle, coordination avec syndics, balisage des zones en travaux, évacuation des déchets conforme. Devis transparent, pas de surprise facturation.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Dépôts de suie réguliers sur façades et terrasses exposées à l'A104.",
    "Taches d'huile fréquentes dans les parkings (stationnement pendulaire RER intense).",
    "Mousse et humidité sur balcons nord et terrasses proches de l'Étang de Malnoue.",
    "Fientes de pigeons concentrées autour du Parc de la Mairie et de l'Église Saint-Éloi.",
    "Accès restreint aux immeubles (digicodes, badges Vigik) et stationnement saturé secteur gare.",
  ],

  // Texte brut uniquement
  districts: [
    "Le Bourg",
    "Malnoue",
    "Emery / Le Clos d'Emery",
    "Zone d'Activités de la Malnoue",
    "Secteur Gare RER E",
  ],
  nearbyCities: [
        "le-plessis-trevise",
        "pontault-combault",
        "champs-sur-marne",
        "noisy-le-grand",
        "villiers-sur-marne",
        "torcy",
        "gournay-sur-marne",
        "vaires-sur-marne",
        "champigny-sur-marne",
        "neuilly-sur-marne"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Émerainville (Place de l'Europe)",
    "Gare d'Émerainville - Pontault-Combault",
    "Parc de la Mairie",
    "Étang de Malnoue",
    "Aérodrome de Lognes-Émerainville",
    "Zone d'Activités de la Malnoue",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Q1 : Vous intervenez à Émerainville même si mon immeuble est proche de la gare RER E ?",
      answer: `<p><strong>Oui, c'est un secteur où nous intervenons régulièrement. Les stationnements y sont saturés et les horaires sensibles (matin/soir), mais nous gérons ces contraintes : déplacement en dehors des pics, coordination avec le syndic, balisage discret. Nous avons l'habitude des immeubles récents avec digicodes et des parkings souterrains étroits.</strong></p>`,
    },
    {
      question:
        "Q2 : Combien de temps faut-il pour obtenir un devis de nettoyage parking à Émerainville ?",
      answer: `<p><strong>Un devis simple (surface, type de revêtement, état général) se fait en 2-3 jours après visite terrain. Pour les parkings souterrains avec accès restreint, nous coordonnons avec le syndic au préalable. Pas de frais de déplacement pour la visite, tarification transparente sans surprise.</strong></p>`,
    },
    {
      question:
        "Q3 : Mon balcon donne sur le Parc de la Mairie et accumule des fientes de pigeons. Que proposez-vous ?",
      answer: `<p><strong>Nous nettoyons et désinfectons les balcons exposés aux arbres (Parc, Étang de Malnoue). Protocole : confinement de la zone, EPI adaptés, évacuation sécurisée des déchets. Résultat : balcon assaini, sans risque sanitaire. Intervention rapide selon urgence, suivi possible si nidification récurrente.</strong></p>`,
    },
    {
      question:
        "Q4 : Vous faites le nettoyage fin de chantier pour les pavillons neufs de Malnoue ?",
      answer: `<p><strong>Oui, c'est un service courant pour nous. Nettoyage complet après travaux : poussière de plâtre, traces de peinture, sols. Nous adaptons à la configuration des pavillons (escaliers, étages, terrasses). Délai court possible, coordination avec le maître d'ouvrage. Devis sur photos ou visite.</strong></p>`,
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
  // => On inclut uniquement les services fournis dans bundle.contents.services
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Nettoyage en profondeur de vos moquettes par injection-extraction, avec traitement adapté aux poussières fines et remise en service rapide.",
      whyUsBullets: [
        "Expertise des moquettes tertiaires de la ZA Malnoue et des halls pavillonnaires, avec adaptation aux poussières fines locales.",
        "Maîtrise de l'injection-extraction et modulation de pression selon type de fibre (bouclée, velours ras, dalles textiles).",
        "Intervention discrète en horaires décalés, protections plinthes/angles, gestion de l'humidité et reporting disponible.",
      ],
      uniqueIntro: `<p>Dans les bureaux et halls de la Zone d'Activités de la Malnoue, les moquettes accumulent rapidement une fine poussière grise qui s'incruste dans les fibres. Cette salissure provient de la proximité de l'A104 et de l'aérodrome de Lognes-Émerainville : les particules se déposent en continu sur les façades, puis pénètrent par les portes d'entrée et les circulations. Après quelques mois, même un aspiration régulière ne suffit plus à retrouver la teinte d'origine.</p>

<p class="mt-4">Au-delà de l'aspect visuel, cette accumulation affecte le confort des occupants. Les dalles textiles et moquettes en velours ras, fréquentes dans les halls d'immeubles et bureaux locaux, retiennent ces dépôts en profondeur. Les taches de café ou de tanin, combinées à cette poussière fine, créent une impression d'usure prématurée. Une remise en état ciblée redonne non seulement l'aspect initial, mais aussi une hygiène améliorée et une meilleure perception de l'espace.</p>

<p class="mt-4">Notre intervention repose sur un diagnostic préalable du type de moquette et des salissures présentes, suivi d'un protocole d'extraction adapté aux contraintes d'accès des halls et escaliers étroits du secteur. Protections des plinthes, balisage des zones en activité, et gestion de l'humidité résiduelle sont intégrés dès la préparation.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation des surfaces</h3>
<p>Avant toute intervention, nous examinons le type de moquette (bouclée, velours, épaisseur) et identifions les zones de fort trafic où la poussière fine s'accumule davantage. Les plinthes, bas de murs et angles des halls sont protégés par des bandes adhésives. Un balisage temporaire signale les zones en cours de traitement, essentiel dans les espaces partagés.</p>

<h3 class="mt-4">Traitement par zones de trafic</h3>
<p>L'injection-extraction est appliquée en passes multiples sur les secteurs les plus chargés (entrées, couloirs, zones de circulation). Pour les dalles textiles fines, la pression est modulée afin de ne pas endommager les fibres. Les taches anciennes ou incrustées reçoivent un détachage ciblé avant le passage de l'extracteur. Cette approche par zones garantit une efficacité maximale tout en respectant les délais d'intervention.</p>

<h3 class="mt-4">Gestion de l'humidité et finalisation</h3>
<p>L'extraction maximale de l'eau résiduelle réduit le temps de séchage à 12-24 heures selon la ventilation et l'épaisseur de la moquette. Nous conseillons un non-piétinement pendant cette période. Un dernier passage d'aspiration sèche finalise le travail et redonne du volume aux fibres.</p>`,
      specificChallenges: [
        "Poussière fine persistante liée à la proximité de l'A104 et l'aérodrome, nécessitant un entretien plus fréquent.",
        "Escaliers étroits du Bourg historique limitant l'accès du matériel d'extraction et nécessitant des adaptations logistiques.",
        "Moquettes variées (velours ras, bouclée, dalles textiles) exigeant des protocoles différenciés pour éviter l'abrasion.",
        "Taches anciennes incrustées combinées à la salissure fine, demandant un détachage préalable avant extraction.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Dans les escaliers étroits du Bourg historique, comment organisez-vous le passage du matériel pour le nettoyage de moquette ?",
          answer: `<p>Nous utilisons un matériel compact et modulaire adapté aux cages d'escalier resserrées. L'extracteur est positionné au rez-de-chaussée ou à l'étage, avec des tuyaux flexibles qui remontent les étages. Un agent dédié gère la circulation et le balisage pour minimiser la gêne. Cette organisation permet de traiter efficacement sans endommager les murs ni les rampes.</p>`,
        },
        {
          question:
            "Q2 : Avec la poussière fine provenant de l'A104 et l'aérodrome, combien de temps avant que la moquette retrouve un aspect propre et sans odeur ?",
          answer: `<p>Le résultat visuel est immédiat après séchage (12-24 heures selon ventilation). Les odeurs de poussière incrustée disparaissent généralement dans les 48 heures. Nous recommandons un entretien tous les 3-4 mois pour les zones à fort trafic de la ZA Malnoue, afin de prévenir la réaccumulation de particules fines et maintenir l'aspect initial.</p>`,
        },
        {
          question:
            "Q3 : Pour les halls de la ZA Malnoue, comment protégez-vous plinthes et angles lors d'un nettoyage intensif ?",
          answer: `<p>Avant intervention, nous appliquons des bandes adhésives de protection sur les plinthes et les angles. L'extracteur est utilisé avec une buse adaptée qui évite le contact direct avec les bas de murs. Après séchage, les protections sont retirées sans laisser de résidu. Cette méthode préserve la peinture et les finitions des éléments adjacents.</p>`,
        },
        {
          question:
            "Q4 : Comment choisissez-vous la méthode (shampouinage vs extraction vapeur) selon l'épaisseur et le type de moquette en bureaux locaux ?",
          answer: `<p>Pour les dalles textiles fines et velours ras des bureaux, nous privilégions l'injection-extraction à pression modulée, moins agressive que la vapeur. Les moquettes épaisses et bouclées tolèrent mieux une pression plus élevée. Un test préalable sur une zone discrète confirme la compatibilité. Cette approche différenciée garantit un résultat optimal sans risque d'abîmer les fibres.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Un décrassage complet de vos parkings (aériens ou souterrains) éliminant taches d'huile, dépôts de suie et salissures, avec gestion maîtrisée des eaux et remise en service rapide.",
      whyUsBullets: [
        "Expertise des parkings Île-de-France : revêtements variés, flux pendulaires, proximité axes routiers polluants.",
        "Autolaveuse + dégraissant professionnel, gestion stricte des eaux, rampes sécurisées sans glissance.",
        "Rotation véhicules coordonnée, balisage transparent, horaires décalés, reporting syndic systématique.",
      ],
      uniqueIntro: `<p>Les parkings d'Émerainville accumulent rapidement des traces d'huile, des dépôts noirs et des résidus de circulation. Entre la proximité de l'A104 et le flux pendulaire intense autour de la gare d'Émerainville - Pontault-Combault, les surfaces se dégradent vite : taches tenaces, marquages au sol effacés, rigoles encrassées. Les usagers stationnent dans un environnement visiblement négligé, ce qui reflète mal sur la copropriété ou la zone commerciale.</p>

<p class="mt-4">Un parking propre change la perception immédiate. Les revêtements en béton brut ou enrobé retrouvent leur aspect d'origine, les marquages redeviennent lisibles, et la sécurité s'améliore (rampes moins glissantes, visibilité accrue). Pour les syndics et gestionnaires, c'est aussi un signal : l'entretien régulier prévient la dégradation structurelle et prolonge la durée de vie des surfaces.</p>

<p class="mt-4">Klinova intervient avec une approche structurée : diagnostic du revêtement, balisage sécurisé, traitement mécanisé adapté, gestion stricte des eaux de lavage, et recommandations de fréquence. Pas de surprise, pas de gêne prolongée pour les usagers.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Nous évaluons d'abord le type de revêtement (béton brut, résine, peinture), l'état des évacuations (regards, rigoles) et le niveau d'encrassement (huile, graisse, poussière). Ensuite, mise en place du balisage sécurisé et organisation de la rotation des véhicules si nécessaire. Les zones critiques (rampes d'accès, angles morts) sont identifiées pour un traitement ciblé.</p>

<h3 class="mt-4">Traitement mécanisé et dégraissage</h3>
<p>Passage à l'autolaveuse couplée à un dégraissant adapté au revêtement. Les passes mécanisées éliminent les salissures incrustées. Traitement spécifique des zones à forte concentration d'huile (pieds de murs, rigoles). Haute pression contrôlée sur les rampes pour éviter les dégâts tout en retrouvant l'antidérapant.</p>

<h3 class="mt-4">Gestion des eaux et finalisation</h3>
<p>Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Dépoussiérage aérien des blocs lumineux et tuyauteries si demandé. Conseil sur la fréquence d'entretien selon le trafic (mensuel pour zones très fréquentées, trimestriel pour zones modérées).</p>`,
      specificChallenges: [
        "Taches d'huile anciennes : nécessitent dégraissant puissant et passes multiples pour résultat homogène.",
        "Dépôts de suie (A104 proche) : accumulation rapide, exige fréquence régulière pour maintien visuel.",
        "Rampes inclinées striées : antidérapant à préserver, haute pression contrôlée obligatoire.",
        "Gestion eaux en parkings aériens : évacuation vers zones commerciales, respect des normes locales.",
        "Flux pendulaire gare RER : coordination horaires, balisage discret, minimisation gêne usagers.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Avec le flux important de navetteurs autour de la gare d'Émerainville - Pontault-Combault, comment organisez-vous l'intervention sans bloquer les accès ?",
          answer: `<p>Nous proposons des créneaux en fin d'après-midi ou en début de soirée, après le pic de départs. Pour les parkings souterrains résidentiels, intervention de nuit ou très tôt le matin. Balisage clair et signalétique temporaire permettent aux usagers de circuler en toute sécurité. Coordination préalable avec le syndic ou gestionnaire pour identifier les zones à traiter par phases si nécessaire.</p>`,
        },
        {
          question:
            "Q2 : Les taches d'huile sur le Boulevard Olof Palme sont très anciennes. Pouvez-vous les enlever complètement ?",
          answer: `<p>Les taches anciennes demandent un traitement spécifique : dégraissant professionnel appliqué en prétraitement, puis passes multiples à l'autolaveuse. Selon la profondeur d'imprégnation, un résultat quasi-total est possible. Si taches très profondes (années d'accumulation), nous conseillons un décapage léger ou ponçage localisé. Diagnostic sur place détermine la meilleure approche.</p>`,
        },
        {
          question:
            "Q3 : Quel protocole appliquez-vous pour les eaux de lavage en parkings aériens proches des commerces ?",
          answer: `<p>Les eaux sont dirigées vers les rigoles existantes et évacuations officielles, jamais rejet direct au sol. Nous vérifions avant intervention la conformité des évacuations. Filtre temporaire possible si zone sensible. Respect strict des normes locales de gestion des eaux usées. Rapport d'intervention fourni au syndic ou gestionnaire.</p>`,
        },
        {
          question:
            "Q4 : À quelle fréquence faut-il nettoyer un parking très utilisé par les usagers RER ?",
          answer: `<p>Parking très fréquenté (>200 véhicules/jour) : entretien mensuel recommandé pour maintenir l'aspect et prévenir accumulation d'huile. Zones modérées (50-150 véhicules/jour) : nettoyage trimestriel suffisant. Parkings aériens commerces : fréquence ajustée selon météo (pluies, poussière saisonnière). Nous proposons un plan d'entretien adapté après diagnostic initial.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Un balcon retrouve son éclat : joints nettoyés, dépôts verts éliminés, surface protégée contre l'humidité et la pollution locale.",
      whyUsBullets: [
        "Expertise des balcons exposés à la pollution A104 et aux zones boisées d'Émerainville.",
        "Pression contrôlée adaptée à chaque support (béton, carrelage, joints fragiles).",
        "Protection systématique des voisins et gestion anti-coulures sans surcoût.",
      ],
      uniqueIntro: `<p>Comment profiter d'un balcon quand la mousse s'incruste dans les joints, que les feuilles s'accumulent et que la suie de l'A104 noircit le carrelage ? À Émerainville, les balcons ouverts des immeubles résidentiels proches du quartier Emery et du centre-ville subissent cette triple agression : pollution routière, humidité des zones boisées, et dépôts organiques persistants. Le problème s'aggrave chaque saison, transformant un espace de détente en zone négligée.</p>

<p class="mt-4">Un balcon propre change le quotidien. C'est retrouver l'envie de prendre le café dehors, de laisser les enfants jouer sans crainte, de recevoir sans gêne. Sur les supports en béton brut ou carrelage typiques des années 80–90 des immeubles d'Emery, cette remise en état redonne de la valeur à votre bien et prolonge la durée de vie des matériaux. Plus de traces grises, plus de joints verdâtres : juste un espace sain et accueillant.</p>

<p class="mt-4">Notre intervention repose sur un diagnostic précis : identifier le type de salissure (mousse, pollution, dépôts calcaires), adapter la pression et le produit au support, puis protéger les voisins du dessous. Chaque balcon est différent ; nous travaillons en conséquence.</p>`,
      uniqueDeepDive: `<h3>Résultat visé et préparation</h3>
<p>Un balcon sec, sans mousse, joints clarifiés, sans risque de coulures chez le voisin du dessous. Avant toute intervention, nous bâchons les menuiseries (fenêtres, portes), déplaçons le mobilier et les plantes, et vérifions l'état des joints pour adapter la pression.</p>

<h3 class="mt-4">Traitement adapté au support</h3>
<p>Sur béton brut, nous appliquons un produit anti-mousse doux suivi d'un brossage manuel. Sur carrelage, le nettoyage combine un détergent spécifique et une brosse douce pour préserver les joints. La pression, si nécessaire, reste contrôlée (basse pression) pour éviter l'érosion. Rinçage systématique à l'eau claire, avec gestion des eaux de ruissellement vers les canalisations.</p>

<h3 class="mt-4">Finalisation et conseils</h3>
<p>Séchage naturel ou accéléré selon météo. Nous nettoyons aussi les garde-corps et les vitrages si demandé. Vous recevez des conseils d'entretien : fréquence selon exposition (nord = mousse plus rapide), produits recommandés, gestes simples pour prolonger le résultat.</p>`,
      specificChallenges: [
        "Mousse tenace dans les joints des balcons nord exposés à l'ombrage des arbres de Malnoue.",
        "Pollution routière (suie A104) incrustée sur carrelage et béton des années 80–90.",
        "Gestion critique de l'eau : éviter les coulures chez les voisins du dessous en zone dense (Emery).",
        "Joints fragiles sur immeubles anciens du Bourg nécessitant pression douce et produits spécifiques.",
        "Accès étages élevés (R+4) : sécurité et coordination avec syndic ou copropriétaires.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Quel produit et quelle méthode recommandez-vous pour nettoyer un balcon carrelé typique des immeubles d'Emery sans abîmer les joints ?",
          answer: `<p>Sur carrelage années 80–90, nous utilisons un détergent doux adapté aux joints poreux, appliqué au pinceau ou pulvérisateur. Le brossage est manuel pour préserver l'intégrité des joints. Si les joints sont très encrassés, une pression basse (&lt; 100 bar) peut être utilisée, mais jamais directement sur les joints. Rinçage abondant à l'eau claire. Aucun produit agressif n'est nécessaire.</p>`,
        },
        {
          question:
            "Q2 : Comment éliminez-vous la mousse et les dépôts verts sur balcons exposés à l'ombrage et aux feuilles à Malnoue ?",
          answer: `<p>La mousse prospère à l'ombre et l'humidité. Nous appliquons d'abord un anti-mousse spécifique (non toxique pour l'environnement) qui tue les spores, puis brossons doucement après 15–20 minutes. Les feuilles et débris sont enlevés manuellement avant traitement. Un rinçage final élimine les résidus. Pour les balcons très ombragés, nous recommandons un traitement annuel en automne.</p>`,
        },
        {
          question:
            "Q3 : Quelle différence de traitement appliquez-vous entre un balcon en béton brut et un balcon carrelé dans la commune ?",
          answer: `<p>Le béton brut est poreux et absorbe la pollution ; il nécessite un produit pénétrant et un brossage plus vigoureux. Le carrelage, moins poreux, se nettoie plus rapidement mais les joints demandent de l'attention. Sur béton, nous utilisons une brosse dure ; sur carrelage, une brosse douce. La pression, si elle est utilisée, est plus basse sur carrelage pour ne pas endommager les joints.</p>`,
        },
        {
          question:
            "Q4 : Faut-il nettoyer un balcon exposé plein sud plus souvent qu'un balcon au nord dans les quartiers d'Émerainville ?",
          answer: `<p>Oui, mais pour des raisons différentes. Un balcon sud accumule poussière et pollution (suie A104) plus visiblement ; un balcon nord développe mousse et dépôts verts. Un balcon sud peut nécessiter un nettoyage annuel ou bisannuel ; un balcon nord, un traitement anti-mousse chaque automne. Nous vous proposons un calendrier adapté lors de la première intervention.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de balcons et corniches contaminés par fientes de pigeons, avec désinfection virucide et mise en place de solutions anti-retour.",
      whyUsBullets: [
        "Expertise des zones à risque : Parc de la Mairie, Église Saint-Éloi, espaces publics générateurs de populations de pigeons.",
        "Protocole EPI strict et désinfection virucide homologuée, garantissant l'élimination des pathogènes.",
        "Confinement complet et évacuation sécurisée des déchets, minimisant la gêne pour le logement et le voisinage.",
      ],
      uniqueIntro: `<p>À Émerainville, les balcons et corniches situés à proximité du Parc de la Mairie et des espaces verts accumulent progressivement des fientes de pigeons. Après quelques mois, les dépôts s'épaississent, les odeurs deviennent tenaces, et le risque sanitaire augmente. Les occupants hésitent à utiliser leur espace extérieur, frustrés par la gêne et les craintes hygiéniques.</p>

<p class="mt-4">Un assainissement professionnel redonne confiance et confort. Le balcon redevient utilisable, les supports retrouvent leur aspect, et surtout, les agents pathogènes sont éliminés. C'est un gain immédiat pour le quotidien et la sérénité du logement, particulièrement important en zone résidentielle où les familles cherchent à profiter de leurs espaces.</p>

<p class="mt-4">Notre intervention suit un protocole strict : confinement, humidification, ramassage sécurisé, désinfection virucide, et mise en place de dissuasion (pics ou filets). Chaque étape est pensée pour protéger l'intérieur du logement et les voisins, tout en garantissant une élimination complète de la contamination.</p>`,
      uniqueDeepDive: `<h3>Sécurisation et confinement</h3>
<p>Avant toute intervention, nous équipons l'équipe d'EPI complets (masque FFP2, gants, lunettes, combinaison jetable). Le balcon et ses abords sont bâchés pour éviter la dispersion de poussières contaminées vers l'intérieur du logement et les espaces voisins. Cette étape prévient les risques d'inhalation et protège l'environnement immédiat.</p>

<h3 class="mt-4">Humidification, ramassage et nettoyage</h3>
<p>Les fientes séchées sont humidifiées pour neutraliser les particules volatiles avant collecte. Le ramassage s'effectue dans des sacs étanches, éliminant tout risque de projection. Les supports (sol, garde-corps, vitrages, murs mitoyens) sont ensuite nettoyés en profondeur à l'eau et détergent adapté, éliminant résidus et salissures incrustées.</p>

<h3 class="mt-4">Désinfection et prévention</h3>
<p>Un produit virucide et bactéricide homologué est appliqué sur toutes les surfaces, avec temps de contact respecté pour éliminer les agents pathogènes (histoplasmose, cryptococcose). Après rinçage final et aération, nous installons des pics anti-pigeons sur les corniches et rebords pour éviter une réinfestation rapide. L'évacuation des déchets s'effectue en sacs étanches, sécurisée et discrète.</p>`,
      specificChallenges: [
        "Proximité des espaces verts (Parc de la Mairie) crée un habitat favorable aux pigeons et une réinfestation rapide sans prévention.",
        "Supports poreux en pierre ou béton (corniches, rebords) retiennent les fientes et nécessitent une désinfection approfondie.",
        "Risques sanitaires réels (histoplasmose, cryptococcose) exigent un protocole EPI strict et une élimination sécurisée des déchets.",
        "Confinement indispensable pour protéger l'intérieur du logement et les voisins pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Les corniches de l'Église Saint-Éloi sont souillées par des fientes : quels risques sanitaires engendre une intervention tardive ?",
          answer: `<p>Les fientes de pigeons contiennent des champignons pathogènes (histoplasmose, cryptococcose) qui se concentrent en couches épaisses. Plus l'intervention est retardée, plus les spores se multiplient et s'incrustent dans les supports poreux. Une exposition prolongée augmente le risque d'inhalation, particulièrement pour les enfants et personnes immunodéprimées. Un assainissement rapide limite ces risques et prévient la dégradation des matériaux.</p>`,
        },
        {
          question:
            "Q2 : Quel protocole EPI et quelle désinfection appliquez-vous pour un balcon contaminé par fientes près du Parc de la Mairie ?",
          answer: `<p>Nous utilisons un équipement complet : masque FFP2, gants nitrile, lunettes de protection, combinaison jetable. Le balcon est bâché pour confiner les poussières. Après humidification et ramassage en sacs étanches, nous appliquons un produit virucide et bactéricide homologué avec temps de contact respecté. Cette approche élimine les agents pathogènes tout en protégeant votre logement et vos voisins.</p>`,
        },
        {
          question:
            "Q3 : Quels produits garantissent une désinfection efficace des fientes sur supports poreux de loggias en centre-ville ?",
          answer: `<p>Nous utilisons des désinfectants homologués (virucides et bactéricides) adaptés aux surfaces poreuses (béton, pierre). Ces produits pénètrent les micro-fissures où les spores se logent, garantissant une élimination complète. Le temps de contact est respecté selon les recommandations du fabricant. Cette méthode prévient les rechutes et assure une hygiène durable sur vos supports.</p>`,
        },
        {
          question:
            "Q4 : Après nettoyage et désinfection d'un balcon, comment gérez-vous l'évacuation des déchets contaminés en zone résidentielle ?",
          answer: `<p>Les fientes et résidus sont collectés dans des sacs étanches dès le ramassage, évitant toute dispersion. L'évacuation s'effectue discrètement, sans passage par les parties communes du logement. Les sacs sont traités selon les normes de gestion des déchets contaminés. Cette organisation minimise la gêne pour vous et vos voisins, tout en respectant les protocoles sanitaires.</p>`,
        },
      ],
      ctaOverride: "",
    },


    // CITY_CHECK: Émerainville

{
  serviceKey: "canapes-tapis",

  heroDescription:
    "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Émerainville retire allergènes, poussières et salissures incrustées, en tenant compte des expositions locales (flux RER E, axes A104/D471, zones d'activités) et des intérieurs familiaux en pavillons comme en résidences du secteur gare/Emery.",

  whyUsBullets: [
    "Approche “pavillon + animaux + jardin” : Protocole efficace sur poils, boue, odeurs et taches du quotidien, fréquent dans les maisons de Malnoue et du Clos d’Emery (textiles très sollicités, va-et-vient intérieur/extérieur).",
    "Gestion des poussières fines et dépôts urbains : Injection-extraction à eau chaude + détergent adapté pour décrocher particules et grisaillements liés aux axes A104/D471, aux parkings pendulaires et aux zones d’activités (ZA de la Malnoue, Esplanade).",
    "Organisation simple et discrète : Accès facilité en pavillon, mais intervention planifiée autour de la gare RER E (stationnement plus tendu) et des résidences avec digicode/badge dans le secteur Emery.",
  ],

  uniqueIntro: `<p>À Émerainville, les textiles d’ameublement se salissent vite pour des raisons très concrètes : une part importante de pavillons (Malnoue, Clos d’Emery) avec jardins, animaux et entrées/sorties fréquentes, et un secteur gare/Emery plus “pendulaire” autour du RER E. Canapés, tapis et matelas finissent par accumuler des poussières fines, des allergènes et des taches invisibles qui altèrent l’hygiène de l’intérieur, même quand l’aspirateur passe régulièrement.</p>
<p class="mt-4">Dans les maisons, les fibres captent facilement poils, particules ramenées de l’extérieur, traces de chaussures et odeurs de vie quotidienne (repas, humidité, animaux). Dans les résidences proches de la gare, les textiles subissent une recontamination plus rapide : circulation, parkings, déplacements quotidiens, et dépôts fins liés aux axes (A104/D471) qui noircissent progressivement les tissus clairs.</p>
<p class="mt-4">Un nettoyage professionnel à domicile remet les textiles au propre “en profondeur” : on décroche la salissure incrustée, on extrait les allergènes et les particules, et on redonne un rendu net sans détremper les supports. C’est la solution la plus efficace quand on veut retrouver une vraie hygiène textile, que l’on vive en pavillon à Malnoue ou en appartement côté gare/Emery.</p>`,

  uniqueDeepDive: `<h3>1. Diagnostic textile et lecture des causes locales (usage + environnement)</h3>
<p>Le technicien commence par identifier les tissus (microfibre, velours, coton, tissus techniques), l’épaisseur des rembourrages et les zones d’usage intensif (assises, accoudoirs, zones enfants). Il tient compte du contexte : pavillons avec jardin et animaux à Malnoue/Clos d’Emery (poils, boue, odeurs), ou appartements du secteur gare/Emery (poussières fines, grisaillement). Ce diagnostic conditionne le choix des produits et l’intensité d’extraction pour nettoyer efficacement sans fragiliser les fibres.</p>
<h3>2. Pré-traitement ciblé puis injection-extraction à eau chaude</h3>
<p class="mt-4">Les taches et zones chargées reçoivent un pré-traitement adapté (enzymatique pour taches organiques, neutralisant d’odeurs si besoin, détergent dégraissant lorsque des dépôts fins “collants” ternissent le tissu). Ensuite, l’injection-extraction à eau chaude travaille au cœur des fibres pour décoller allergènes et salissures. L’aspiration puissante retire immédiatement l’eau sale, ce qui permet un nettoyage en profondeur sans laisser les rembourrages détrempés.</p>
<h3>3. Extraction finale, séchage maîtrisé et conseils “anti-recontamination”</h3>
<p class="mt-4">Une extraction maximale est réalisée pour limiter l’humidité résiduelle et accélérer le séchage, généralement sous 6 à 10 heures selon la ventilation. Les conseils sont adaptés à Émerainville : routine d’aspiration et brossage doux sur les zones “animaux” en pavillon, protection simple (plaid/housse) sur les assises les plus sollicitées, et nettoyage périodique plus rapproché si le logement est très exposé aux poussières (proximité gare, stationnement pendulaire, axes A104/D471). L’objectif : garder un intérieur sain et un textile qui reste net plus longtemps.</p>`,

  specificChallenges: [
    "Vie en pavillon + jardin : poils, boue, odeurs et taches du quotidien (Malnoue, Clos d’Emery) qui s’incrustent dans les fibres.",
    "Recontamination rapide côté gare : flux RER E et stationnement pendulaire entraînant poussières fines et ternissement des tissus dans le secteur Emery.",
    "Dépôts fins liés aux axes A104/D471 : particules noires/grisaillement progressif, surtout sur textiles clairs.",
    "Accès et logistique contrastés : facile en pavillon, plus contraint autour de la gare et dans les résidences avec digicode/badge.",
  ],

  faqAdditions: [
    {
      question:
        "Le nettoyage est-il adapté aux canapés avec animaux (poils, odeurs) dans les pavillons de Malnoue ?",
      answer: `<p>Oui. Le protocole vise à décrocher ce qui s’accumule dans les fibres (poils, poussières, odeurs) et à extraire en profondeur sans abîmer le tissu. Dans les pavillons avec jardin, c’est souvent la meilleure solution pour retrouver un rendu net et une vraie hygiène sur les assises très sollicitées.</p>`,
    },
    {
      question:
        "Est-ce que ça enlève le ternissement et le grisaillement des textiles près de la gare ?",
      answer: `<p>Oui, dans la plupart des cas. Les dépôts fins et poussières qui “grisent” progressivement les tissus sont décrochés puis extraits avec l’eau sale grâce à l’injection-extraction et au détergent adapté. Le résultat dépend de l’ancienneté de l’encrassement et du type de fibre, mais on retrouve généralement une couleur plus franche et un toucher plus propre.</p>`,
    },
    {
      question:
        "Combien de temps faut-il avant de réutiliser le canapé ou le matelas ?",
      answer: `<p>Le séchage complet est généralement de 6 à 10 heures selon la ventilation et la température. Une utilisation légère est possible plus tôt, mais il est préférable d’attendre le séchage total pour préserver les fibres et le confort. Aérer la pièce accélère nettement le séchage.</p>`,
    },
    {
      question:
        "Intervenez-vous facilement dans le secteur Emery malgré le stationnement autour du RER E ?",
      answer: `<p>Oui. Le matériel est prévu pour une intervention à domicile, et l’organisation tient compte du secteur gare (stationnement plus tendu). Dans les résidences avec digicode/badge, l’accès est géré en amont pour que l’intervention se déroule sans perte de temps et avec une gêne minimale.</p>`,
    },
  ],

  ctaOverride: "",
},

{
  serviceKey: "terrasses",
  heroDescription:
    "Nettoyage et remise en état de terrasses à Émerainville : élimination des mousses, traces noires et salissures extérieures pour redonner aux sols un aspect propre, net et agréable à utiliser.",
  whyUsBullets: [
    "Intervention dans tous les secteurs d’Émerainville : Centre, Malnoue, résidences récentes, quartiers pavillonnaires et ensembles résidentiels.",
    "Expertise des terrasses en copropriété et maisons : sols extérieurs exposés à l’humidité, aux espaces verts et aux usages quotidiens.",
    "Prestation soignée et valorisante : protection du mobilier, respect des façades et nettoyage précis pour un résultat immédiatement visible.",
  ],
  uniqueIntro: `<p><strong>Émerainville</strong>, commune résidentielle de Seine-et-Marne, se distingue par un habitat récent, de nombreuses copropriétés et des espaces verts omniprésents. Les terrasses y sont très présentes, aussi bien en rez-de-jardin qu’en prolongement des logements collectifs.</p>

<p class="mt-4">La configuration des résidences, la végétation dense et l’exposition parfois limitée au soleil favorisent l’apparition de <strong>mousses, algues, traces noires</strong> et salissures incrustées sur les sols extérieurs. Ces phénomènes sont fréquents dans les ensembles résidentiels entourés d’espaces paysagers.</p>

<p class="mt-4">À Émerainville, les terrasses sont majoritairement réalisées en <strong>dalles béton</strong>, <strong>carrelage extérieur</strong>, parfois en <strong>pierre</strong>, <strong>bois</strong> ou <strong>bois composite</strong>. Chaque revêtement nécessite une méthode adaptée pour un nettoyage efficace et une remise en état visuellement nette.</p>`,
  uniqueDeepDive: `<h3>Préparation et sécurisation de l’espace extérieur</h3>
<p>Le mobilier, les pots et les éléments décoratifs sont déplacés ou protégés. Les abords immédiats — façades, garde-corps, menuiseries — sont sécurisés afin de garantir une intervention propre, notamment dans des résidences aux espaces partagés.</p>

<h3>Nettoyage approfondi du revêtement</h3>
<p>La méthode est choisie selon le matériau : solution performante pour dalles béton et carrelages extérieurs, approche spécifique pour pierre, bois ou composite. Un brossage mécanique efficace permet de décoller les salissures incrustées, biofilms et zones noircies. Le rinçage est réalisé de manière contrôlée pour un sol plus clair et plus homogène.</p>

<h3>Mise en valeur et confort d’usage</h3>
<p>Une attention particulière est portée aux zones de passage et aux surfaces les plus exposées à l’humidité. Le nettoyage améliore nettement l’esthétique de la terrasse et le confort d’utilisation au quotidien, en redonnant une impression de propreté durable.</p>`,
  specificChallenges: [
    "Terrasses de copropriétés entourées d’espaces verts : mousses et dépôts organiques fréquents.",
    "Zones peu exposées au soleil : séchage lent et apparition de traces noires.",
    "Dalles béton ternies par l’humidité : aspect foncé et irrégulier.",
    "Terrasses en rez-de-jardin : encrassement lié aux passages et aux projections de terre.",
    "Bois et composite exposés plein air : perte d’éclat et salissures incrustées.",
  ],
  faqAdditions: [
    {
      question:
        "Pourquoi les terrasses d’Émerainville s’encrassent-elles rapidement ?",
      answer:
        "<p>La présence de nombreux <strong>espaces verts</strong>, l’<strong>humidité</strong> et une exposition parfois limitée au soleil favorisent l’apparition de <strong>mousses, algues et traces noires</strong> sur les sols extérieurs.</p>",
    },
    {
      question:
        "Le nettoyage améliore-t-il vraiment l’aspect d’une terrasse en copropriété ?",
      answer:
        "<p>Oui. Un nettoyage en profondeur permet d’<strong>éclaircir les surfaces</strong>, de réduire les zones foncées et de retrouver un sol plus <strong>homogène et agréable</strong> à l’usage.</p>",
    },
    {
      question:
        "Intervenez-vous sur des terrasses très encrassées ou peu entretenues ?",
      answer:
        "<p>Oui. Nous intervenons régulièrement sur des terrasses <strong>fortement encrassées</strong>, parfois négligées pendant plusieurs années, avec une méthode adaptée à leur état réel.</p>",
    },
    {
      question:
        "Nettoyez-vous aussi les terrasses de résidences et petites copropriétés ?",
      answer:
        "<p>Oui. Nous intervenons sur les <strong>terrasses et cours extérieures</strong> de résidences et copropriétés à Émerainville, avec une organisation adaptée aux usages des occupants.</p>",
    },
  ],
  ctaOverride: "",
},




  

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Nettoyage complet d'appartement ou maison à Émerainville : fin de chantier, état des lieux, déménagement, avec remise en propreté garantie et coordination avec vos artisans.",
      whyUsBullets: [
        "Expertise des typologies locales : T2–T4 gare, pavillons Malnoue, délais serrés rotation locative.",
        "Polyvalence surfaces et finitions : carrelage, parquet, moquette, joints sensibles, traces peinture.",
        "Réactivité et coordination : respect délais, horaires flexibles, communication agence/artisans/propriétaire.",
      ],
      uniqueIntro: `<p>Comment maintenir un calendrier serré quand il faut remettre un bien en parfait état avant la visite suivante ? Entre fin de chantier avec poussière incrustée, rotation de locataires proche du RER Émerainville - Pontault-Combault, et délais d'état des lieux, les propriétaires et agences immobilières du secteur font face à une contrainte majeure : disposer d'une intervention fiable et rapide. Les appartements T2–T4 du quartier Emery et les maisons individuelles de Malnoue accumulent rapidement traces de peinture, résidus de travaux ou simplement la saleté du quotidien.</p>

<p class="mt-4">Un nettoyage structuré change tout. Au-delà de l'aspect visuel, c'est la confiance qui se gagne : un bien propre rassure le futur occupant, facilite la signature du bail, et évite les litiges sur l'état des lieux. Nos interventions couvrent dépoussiérage complet, sols adaptés à chaque revêtement (carrelage, parquet flottant, moquette), pièces d'eau désinfectées, et finitions détaillées (interrupteurs, radiateurs, placards). Chaque étape est pensée pour minimiser les délais sans sacrifier la qualité.</p>

<p class="mt-4">Nous coordonnons avec vos artisans, respectons vos horaires, et livrons un bien prêt à l'occupation. Pas de surprise, pas de reprise : une organisation transparente du diagnostic initial jusqu'à la remise des clés.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et protection</h3>
<p>Dès l'arrivée, nous établissons un état des lieux détaillé : type de bien, nature de l'intervention (fin chantier, état des lieux, sinistre), état général (poussière, traces, résidus). Nous identifions les surfaces fragiles (parquet ancien, marbre, joints sensibles) et les protégeons si nécessaire. Cette étape détermine le matériel et les produits à utiliser pour chaque zone.</p>

<h3 class="mt-4">Nettoyage général et pièces d'eau</h3>
<p>Dépoussiérage complet des plafonds, murs, plinthes et radiateurs. Aspiration puis lavage des sols adaptés au revêtement (carrelage, parquet, moquette). Salle de bain : sanitaires, faïence, joints. Cuisine : plans de travail, électroménager, crédence. WC : désinfection complète. Vitres intérieures incluses. Cette phase représente 70 % du travail et garantit une propreté visible.</p>

<h3 class="mt-4">Finitions et contrôle</h3>
<p>Interrupteurs, poignées, radiateurs, placards intérieurs. Enlèvement des traces de peinture ou colle si fin de chantier. Ventilation et aération finale. Contrôle qualité complet avant remise des clés.</p>`,
      specificChallenges: [
        "Délais serrés entre départ locataire et visite suivante : intervention en 24–48h selon urgence.",
        "Traces de peinture et résidus de chantier incrustés : nécessite technique adaptée par surface.",
        "Coordination avec artisans et agences : respect des accès, horaires, communication claire.",
        "Sols fragiles (parquet ancien, marbre) : risque de dégradation si produits ou pression inadaptés.",
        "Dégâts des eaux résiduels : humidité, moisissures légères, nécessitent séchage et désinfection.",
      ],
      faqAdditions: [
        {
          question:
            "Q1 : Pour un pavillon en fin de chantier au Clos d'Emery, que comprend votre nettoyage technique (poussières, traces peinture, débris) ?",
          answer: `<p>Nous couvrons dépoussiérage complet (plafonds, murs, plinthes), enlèvement des traces de peinture et colle, aspiration puis lavage des sols adaptés au revêtement, nettoyage des vitres intérieures, et évacuation des déchets/gravats. Chaque surface est traitée selon son matériau pour éviter dégradation. Délai : 1–2 jours selon surface.</p>`,
        },
        {
          question:
            "Q2 : Après un dégât des eaux dans un appartement proche de la gare, quelles opérations techniques et de séchage réalisez-vous ?",
          answer: `<p>Nous nettoyons et désinfectons les zones affectées, assurons une ventilation complète pour éviter moisissures, et traitons les résidus d'humidité. Si moisissures légères présentes, nous les éliminons. Pour dégâts importants, nous coordonnons avec spécialistes sinistre. Intervention rapide : 24–48h après appel.</p>`,
        },
        {
          question:
            "Q3 : Quel est votre mode de tarification pour un nettoyage état des lieux d'un T2 proche du RER Émerainville - Pontault-Combault ?",
          answer: `<p>Nous proposons tarification au forfait selon surface et nature de l'intervention (état des lieux standard vs fin de chantier). Devis gratuit sur visite ou photos. Pas de surprise : le prix inclut dépoussiérage, sols, pièces d'eau, finitions. Délai de remise en état : 24–48h selon urgence et accès au bien.</p>`,
        },
        {
          question:
            "Q4 : Comment coordonnez-vous votre intervention de nettoyage avec artisans et agences immobilières autour de la gare ?",
          answer: `<p>Nous nous adaptons à votre calendrier : horaires décalés si artisans encore présents, respect des accès (digicode, clés, gardien). Communication directe avec agence ou propriétaire avant/après intervention. Reporting photo disponible si demandé. Pas de gêne pour voisins ou autres intervenants.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;