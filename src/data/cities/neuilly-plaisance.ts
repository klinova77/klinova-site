import type { City } from "~/types/geo";

const city: City = {
  name: "Neuilly-Plaisance",
  slug: "neuilly-plaisance",
  postalCodes: ["93360"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "À Neuilly-Plaisance, la propreté des parties communes et des accès se joue souvent entre les abords du RER A et les rues résidentielles : Klinova intervient avec une organisation claire et des méthodes adaptées au bâti.",

  hubIntro: `<p>Pour les immeubles et sites professionnels, Klinova agit comme un partenaire de proximité à Neuilly-Plaisance, <strong>entre Bords de Marne et Plateau d’Avron</strong>, avec une logique simple : diagnostiquer, planifier, puis exécuter proprement sans perturber l’usage.</p>
<p class="mt-4">Notre approche combine propreté et maintenance au quotidien : choix des bons procédés, gestion des accès, protection des zones sensibles, et compte-rendu si besoin. L’objectif est d’obtenir un rendu net, durable, et compatible avec les contraintes réelles des copropriétés et des établissements.</p>
<ul>
  <li><strong>Organisation avant tout :</strong> repérage des contraintes (stationnement, horaires, accès) et plan d’action lisible, pour éviter les improvisations sur place.</li>
  <li><strong>Méthodes adaptées au support :</strong> on privilégie les procédés qui respectent les matériaux (béton, résine, sols textiles, carrelage) et limitent l’humidité quand c’est nécessaire.</li>
  <li><strong>Gêne minimale :</strong> zonage, protections, circulation maintenue quand c’est possible, et coordination avec les occupants ou les équipes sur site.</li>
  <li><strong>Suivi simple :</strong> photos, constats et recommandations d’entretien quand la situation le justifie (notamment en copropriété et sur sites pros).</li>
</ul>`,
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé

  citySpecificChallenges: [
    "Stationnement souvent contraint près du RER A et en centre-ville (zones réglementées).",
    "Présence de pentes et d’accès parfois difficiles vers le Plateau d’Avron.",
    "Poussières fines et salissures plus grasses à proximité de la N34.",
    "Humidité vers les bords de Marne : dépôts verts qui reviennent plus vite en extérieur.",
    "Sous-sols et parkings profonds dans certaines résidences récentes : logistique à cadrer.",
    "Bâti ancien par endroits : escaliers et passages étroits à prendre en compte.",
  ],

  districts: [
    "Centre-ville",
    "Secteur gare / RER A",
    "Plateau d’Avron",
    "Bel-Air",
    "Renardières",
    "Voie Lambert",
  ],
  nearbyCities: [
  "neuilly-sur-marne",
  "rosny-sous-bois",
  "fontenay-sous-bois",
  "le-perreux-sur-marne",
  "villemomble",
  "gagny",
],

  landmarks: [
    "Mairie de Neuilly-Plaisance",
    "Gare RER A Neuilly-Plaisance",
    "Axe N34",
    "Parc des Côteaux d’Avron",
    "Promenade des Bords de Marne",
    "Avenue du Maréchal Joffre",
    "Château d'Eau du Plateau d'Avron.",
  ],

  faq: [
    {
      question:
        "Intervenez-vous aussi en horaires décalés pour limiter la gêne près du RER A ?",
      answer: `<p><strong>Oui, quand le contexte l’impose.</strong> Dans les secteurs où les entrées sont très sollicitées, on peut planifier tôt le matin ou sur des créneaux plus calmes. L’idée est de préserver la circulation, sécuriser les zones traitées et laisser un séchage compatible avec l’usage normal des lieux.</p>`,
    },
    {
      question:
        "Comment se passe la coordination avec une copropriété quand l’accès est contrôlé ?",
      answer: `<p><strong>On anticipe les accès au lieu de les subir.</strong> Digicodes, badges, portes de sous-sol, zones à baliser : on clarifie en amont ce qui doit être ouvert, quand, et par qui. Sur place, on travaille par zones pour éviter de bloquer inutilement les halls, couloirs ou rampes.</p>`,
    },
    {
      question:
        "Peut-on attendre un rendu plus net sur les zones noircies par la poussière le long des axes passants ?",
      answer: `<p><strong>Oui, avec une méthode adaptée et un vrai travail de détail.</strong> Les salissures grasses et fines demandent souvent une phase de dégraissage ciblé, puis une extraction ou un lavage mécanisé. On privilégie un rendu visuel propre, sans promettre de “comme neuf” : l’état initial et le support restent déterminants.</p>`,
    },
    {
      question:
        "En cas d’urgence (dégât, salissure importante), pouvez-vous intervenir rapidement ?",
      answer: `<p><strong>Souvent oui, selon disponibilité et accès.</strong> Le plus important est d’avoir les informations utiles : surface, support, contraintes d’eau/évacuation, et conditions d’accès. Cela permet de choisir le bon procédé et de sécuriser la zone, plutôt que de “foncer” avec une solution inadaptée.</p>`,
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
        "Raviver une moquette marquée par le passage, en limitant l’humidité et en gardant des circulations propres et sûres.",
      whyUsBullets: [
        "Habitués aux halls et bureaux autour de l’Avenue du Maréchal Foch.",
        "Injection-extraction et options basse humidité selon fibre et contrainte.",
        "Passage organisé malgré escaliers étroits, circulation maintenue quand possible.",
      ],

      uniqueIntro: `<p>Quand une moquette commence à ternir, ce n’est pas “juste de la poussière” : les zones de passage se chargent en particules fines, les taches s’incrustent (café, tanins, gras), et les odeurs peuvent rester dans la fibre. À Neuilly-Plaisance, on le voit souvent dans les halls et couloirs des immeubles proches du centre, mais aussi dans les bureaux le long de l’<strong>Avenue du Maréchal Foch</strong> où le trafic est continu. Dans certains immeubles anciens, les <strong>escaliers étroits</strong> et les paliers compliquent le passage du matériel : il faut une approche organisée, pas un “coup de shampouineuse” improvisé.</p>
<p class="mt-4">Klinova intervient avec une logique d’entretien et de détachage adaptée : injection-extraction pour un nettoyage profond, ou encapsulation/bonnet quand l’objectif est une remise en service plus rapide selon contexte. On traite les zones les plus sollicitées en priorité, et on adapte le séchage pour que les accès restent praticables, notamment autour des flux quotidiens liés au <strong>RER A</strong>. L’objectif : un rendu visuel propre, une fibre assainie, et des usages qui reprennent sans surprise.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<p>1) <strong>Diagnostic & protections.</strong> On identifie le type de moquette (fine/épaisse, bouclée, velours), les taches (café, gras, tanins) et les zones de trafic. Protections des bas de murs, balisage si circulation, et plan de passage adapté aux cages d’escalier et paliers.</p>
<p class="mt-4">2) <strong>Nettoyage profond / basse humidité.</strong> Selon le contexte, injection-extraction (pré-traitement + passes renforcées sur zones de passage, aspiration eau sale) ou encapsulation/bonnet pour limiter l’humidité et accélérer la remise en service selon l’aération et l’épaisseur.</p>
<p class="mt-4">3) <strong>Gestion humidité, séchage & conseils.</strong> Extraction maximale, contrôle des zones sensibles, et consignes d’aération. On valide l’état final et on conseille une fréquence réaliste selon usage (copropriété, bureaux, ou domicile).</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Trafic soutenu sur l’Avenue du Maréchal Foch : zones de passage vite ternies.",
        "Immeubles anciens : escaliers étroits et paliers compliquent la logistique.",
        "Flux liés au RER A : besoin de séchage maîtrisé pour garder les accès praticables.",
        "Taches café/tanins et salissures grasses : détachage ciblé avant extraction.",
        "Moquettes épaisses ou bouclées : méthode à ajuster pour éviter sur-humidification.",
        "Odeurs persistantes : désodorisation des fibres selon état et ventilation.",
      ],

      faqAdditions: [
        {
          question:
            "Près du RER A, combien de temps faut-il prévoir avant de réutiliser un couloir moquetté ?",
          answer: `<p>Le séchage dépend de l’épaisseur, de la ventilation et de la méthode. En zone très passante (accès RER), on privilégie une extraction puissante et, si pertinent, une approche basse humidité. L’objectif est de retrouver un passage praticable rapidement, sans promettre un délai identique dans tous les bâtiments.</p>`,
        },
        {
          question:
            "Dans les immeubles proches du centre, à quelle fréquence faut-il entretenir les moquettes de hall ?",
          answer: `<p>Quand l’entrée est sollicitée quotidiennement, un entretien régulier évite l’encrassement profond. On ajuste selon la salissure réelle : zones d’entrée, paliers, angles. Autour des axes et commerces, la poussière fine se fixe plus vite : une fréquence plus rapprochée peut être utile pour garder un rendu constant.</p>`,
        },
        {
          question:
            "Comment coordonnez-vous un nettoyage quand le hall est étroit et que les occupants passent en continu ?",
          answer: `<p>On travaille par zones et on sécurise les portions en cours de traitement, plutôt que de bloquer tout l’accès. Dans les halls étroits, on planifie les étapes (pré-traitement, extraction, séchage) pour limiter la gêne, et on s’adapte aux horaires où la circulation est la plus faible.</p>`,
        },
        {
          question:
            "Une moquette épaisse ou bouclée se traite-t-elle différemment dans les résidences près de la gare ?",
          answer: `<p>Oui. Les fibres épaisses retiennent davantage l’humidité, donc on ajuste : pré-traitement ciblé, quantité d’eau, puissance d’extraction, et ventilation. L’objectif est d’éviter un séchage trop long dans des parties communes très utilisées, en gardant un nettoyage efficace sur les taches et le ternissement.</p>`,
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
        "Retrouver un sol lisible et plus sûr dans un parking, avec balisage, zonage et gestion stricte des eaux de lavage.",
      whyUsBullets: [
        "Habitués aux parkings profonds et accès contrôlés de la ZAC des Renardières.",
        "Autolaveuse + dégraissage ciblé, adaptés au béton/résine et aux rampes.",
        "Zoning, rotation véhicules, balisage clair pour maintenir une exploitation fluide.",
      ],

      uniqueIntro: `<p>Un parking qui s’encrasse finit par cumuler plusieurs problèmes : poussière noire grasse, traces d’huile, zones glissantes sur les rampes, et pieds de murs marqués. Sur Neuilly-Plaisance, ces situations se renforcent souvent au contact des axes comme la <strong>N34</strong>, où les particules se déposent plus vite et noircissent les circulations. Dans des ensembles comme les parkings souterrains de la <strong>ZAC des Renardières</strong>, la profondeur des sous-sols et les accès contrôlés imposent une organisation millimétrée : sans zonage, on gêne les usagers et on perd du temps.</p>
<p class="mt-4">Klinova réalise le <strong>nettoyage parking Neuilly-Plaisance</strong> avec une logique B2B : diagnostic du revêtement (béton, résine, peinture), plan de circulation, balisage, puis lavage mécanisé à l’autolaveuse et dégraissages ciblés sur les zones critiques. On vise un rendu plus propre et plus lisible, en limitant les reprises, et en gardant une traçabilité simple pour les gestionnaires qui le demandent.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<p><strong>Objectif visé :</strong> un sol décrassé, plus lisible, avec zones critiques traitées et remise en circulation progressive. On commence par le diagnostic (revêtement, pentes, évacuations) et un balayage préparatoire.</p>
<p class="mt-4"><strong>Méthode :</strong> zonage du parking et <strong>balisage sécurisé</strong>, organisation de la rotation des véhicules si nécessaire. Lavage à l’<strong>autolaveuse</strong> (brossage + aspiration simultanés) et, selon l’état, haute pression contrôlée + dégraissant professionnel sur taches d’huile/essence, rampes, angles, rigoles.</p>
<p class="mt-4"><strong>Contrôles & eaux de lavage :</strong> gestion stricte des eaux (collecte/évacuation selon configuration), finitions sur pieds de murs et zones d’accès. On clôture par une vérification des zones glissantes et des recommandations de fréquence selon trafic.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Poussière noire plus marquée près de la N34 : encrassement rapide des circulations.",
        "Parkings profonds : logistique et temps de séchage à cadrer par zones.",
        "Rampes et zones inclinées : risque de glissance, traitement méthodique obligatoire.",
        "Traces d’huile anciennes : dégraissage ciblé avant lavage mécanisé.",
        "Accès contrôlés : coordination badges/digicodes pour éviter les ruptures de chantier.",
        "Gestion des eaux : évacuation adaptée à la configuration du sous-sol.",
      ],
      faqAdditions: [
        {
          question:
            "Dans la ZAC des Renardières, comment organisez-vous la rotation des véhicules pendant le chantier ?",
          answer: `<p>On découpe le parking en zones et on définit une séquence d’ouverture/fermeture partielle. Les consignes sont claires avant le démarrage : emplacements à libérer, horaires, circulation maintenue. Cette approche évite les blocages et permet d’avancer régulièrement, même en sous-sol profond.</p>`,
        },
        {
          question:
            "Quel niveau de balisage mettez-vous en place pour sécuriser les usagers ?",
          answer: `<p>Le balisage sert à protéger les piétons, éviter les traversées de zone humide et sécuriser les rampes. On positionne une signalétique visible aux entrées et sur les changements de zone. L’objectif est d’éviter les surprises et de maintenir une circulation maîtrisée pendant l’opération.</p>`,
        },
        {
          question:
            "Y a-t-il une différence de méthode entre un parking souterrain et un parking aérien dans le secteur N34 ?",
          answer: `<p>Oui, surtout sur la gestion des eaux, l’aération et le séchage. En souterrain, on privilégie le lavage mécanisé à l’autolaveuse et des dégraissages ciblés, avec une organisation par zones. En aérien, la haute pression contrôlée peut être plus simple selon les évacuations et la configuration.</p>`,
        },
        {
          question:
            "Le nettoyage parking Neuilly-Plaisance nécessite-t-il une fermeture totale ?",
          answer: `<p>Pas forcément. Quand le plan de circulation le permet, on travaille par secteurs avec des fermetures partielles et une remise en service progressive. En revanche, sur certaines rampes ou zones critiques, une neutralisation temporaire est nécessaire pour traiter correctement et laisser le sol reprendre une adhérence normale.</p>`,
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
        "Un balcon plus net et plus agréable, avec pression contrôlée, joints respectés et gestion de l’eau pensée pour le voisinage.",
      whyUsBullets: [
        "Habitués aux terrasses du Plateau d’Avron et à l’humidité des bords de Marne.",
        "Produits adaptés support + pression contrôlée pour préserver joints et carrelages.",
        "Gestion anti-coulures et organisation discrète, surtout en environnement résidentiel calme.",
      ],

      uniqueIntro: `<p>Après quelques mois sans entretien, un balcon change vite : dépôts verts dans les joints, traces noires de pollution, salissures grasses (barbecue, cuisine), et un sol qui “accroche” sous les pieds. À Neuilly-Plaisance, l’effet est souvent plus visible vers la <strong>Promenade des Bords de Marne</strong>, où l’humidité favorise mousses et encrassement, et sur les terrasses exposées du <strong>Plateau d’Avron</strong>. Selon le bâti, on rencontre des supports variés : carrelage grès cérame, dalles, béton, avec parfois des garde-corps en métal qui marquent et retiennent les coulures.</p>
<p class="mt-4">Le <strong>nettoyage balcon Neuilly-Plaisance</strong> doit donc être précis : choisir un produit adapté au support, doser la pression, et organiser l’eau pour éviter les ruissellements chez les voisins du dessous. Klinova procède par zones (sol, joints, angles, plinthes, garde-corps), avec brossage manuel là où c’est sensible. L’objectif est de retrouver un espace utilisable, visuellement propre, et plus simple à entretenir ensuite.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<p><strong>Zone 1 — Préparation & protections.</strong> Protection des menuiseries, bâchage si nécessaire, mise à l’abri du mobilier et des plantes. Retrait des gros dépôts (terre, feuilles) et repérage des zones fragiles (joints, angles, supports sensibles).</p>
<p class="mt-4"><strong>Zone 2 — Sols & joints.</strong> Application d’un produit adapté (carrelage, béton, dalles sur plots), brossage contrôlé et rinçage. Pression ajustée si haute pression utilisée, sinon brossage renforcé en manuel pour préserver les joints.</p>
<p class="mt-4"><strong>Zone 3 — Garde-corps & finitions.</strong> Traitement des coulures, nettoyage des murs mitoyens si concernés, puis gestion de l’eau anti-coulures (récupération, rinçage maîtrisé). Séchage et conseils d’entretien selon l’exposition et l’humidité locale.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Humidité vers les Bords de Marne : mousses et dépôts verts plus tenaces.",
        "Terrasses exposées du Plateau d’Avron : traces de pollution plus visibles.",
        "Joints fragiles : pression à ajuster, brossage manuel souvent nécessaire.",
        "Coulures chez voisins : gestion de l’eau à prévoir dès la préparation.",
        "Salissures grasses (barbecue) : pré-traitement ciblé avant rinçage.",
        "Garde-corps et angles : finitions indispensables pour un rendu propre.",
      ],
      faqAdditions: [
        {
          question:
            "Près des Bords de Marne, comment traitez-vous les mousses et dépôts verts avant le nettoyage ?",
          answer: `<p>On commence par un retrait des gros dépôts, puis un produit adapté au support avec un temps d’action suffisant. Le brossage permet de décoller ce qui est incrusté dans les joints. Ensuite, on rince de façon maîtrisée pour éviter de disperser la saleté, surtout quand l’humidité favorise un retour rapide.</p>`,
        },
        {
          question:
            "Sur un sol en grès cérame ou béton, adaptez-vous la méthode pour éviter d’abîmer joints et surfaces ?",
          answer: `<p>Oui. On ajuste la chimie et l’action mécanique : brossage manuel sur zones sensibles, pression contrôlée si haute pression utilisée, et rinçage raisonné. L’objectif est d’enlever les salissures sans ouvrir les joints ni fragiliser les supports, ce qui ferait revenir l’encrassement plus vite.</p>`,
        },
        {
          question:
            "Sur le Plateau d’Avron, à quelle fréquence faut-il prévoir un entretien pour garder un rendu stable ?",
          answer: `<p>La fréquence dépend de l’exposition, de la végétation et des usages (barbecue, plantes). Sur une terrasse exposée, les traces de pollution et le noircissement des joints apparaissent plus vite. Un entretien régulier, plus léger, évite d’attendre que les dépôts se fixent profondément et simplifie la remise en état.</p>`,
        },
        {
          question:
            "Dans un immeuble ancien avec accès étroit, comment intervenez-vous sans compliquer la circulation ?",
          answer: `<p>On prépare un passage compact et on limite le matériel au strict nécessaire, avec une intervention par zones. Dans les accès étroits, la gestion de l’eau et du rinçage est essentielle : on protège, on contrôle les écoulements et on laisse un séchage compatible avec le retour à l’usage du balcon.</p>`,
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
        "Assainir un balcon souillé sans dispersion, avec EPI, humidification, nettoyage et désinfection virucide/bactéricide.",
      whyUsBullets: [
        "Connaissance des zones plus exposées près du Parc des Côteaux d’Avron.",
        "Confinement + désinfection virucide/bactéricide, avec humidification préalable maîtrisée.",
        "Évacuation en sacs étanches et finitions soignées, sans dispersion dans l’immeuble.",
      ],

      uniqueIntro: `<p>On reconnaît tout de suite un balcon touché par les pigeons : fientes accumulées, odeur tenace, traces qui “mordent” le support, et une appréhension à rouvrir la porte-fenêtre. À Neuilly-Plaisance, certaines zones proches du <strong>Parc des Côteaux d’Avron</strong> concentrent davantage de présence d’oiseaux, et les points d’appui en hauteur aggravent le phénomène. Sur des immeubles avec corniches et rebords, comme sur le secteur de la <strong>Voie Lambert</strong>, les dépôts peuvent se fixer durablement si rien n’est fait.</p>
<p class="mt-4">La priorité n’est pas seulement de “retirer” : il faut éviter la dispersion de poussières, protéger l’intérieur et le voisinage, puis <strong>désinfecter</strong> correctement. Klinova intervient avec EPI, confinement, humidification préalable, évacuation en sacs étanches, nettoyage des supports et finitions (garde-corps, murs mitoyens si concernés). Le <strong>nettoyage fientes pigeons Neuilly-Plaisance</strong> vise un balcon de nouveau utilisable, avec un assainissement sérieux et un rendu cohérent avec l’état du support.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<p><strong>Problème : dispersion & risques.</strong> Mise en place des EPI (FFP2 minimum, gants, lunettes, combinaison) et <strong>confinement</strong> de la zone (bâchage, protections) pour éviter la propagation vers l’intérieur et les voisins.</p>
<p class="mt-4"><strong>Solution : retrait + nettoyage maîtrisé.</strong> Humidification préalable pour neutraliser les poussières, ramassage et conditionnement en sacs étanches. Nettoyage des supports (sol, rebords, angles) et des éléments associés (garde-corps, surfaces verticales) avec une action mécanique contrôlée.</p>
<p class="mt-4"><strong>Final : désinfection & remise en usage.</strong> Application d’un désinfectant virucide/bactéricide avec temps de contact, rinçage si nécessaire, aération et consignes avant réutilisation. Optionnel : recommandations de dissuasion (pics/filets) selon configuration.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Secteurs proches du Parc des Côteaux d’Avron : retours possibles sans prévention.",
        "Corniches et rebords (ex. Voie Lambert) : dépôts fixés et accès délicat.",
        "Humidité : odeurs plus persistantes et supports plus sensibles.",
        "Confinement nécessaire : éviter la dispersion vers l’intérieur et le voisinage.",
        "Désinfection : respect du temps de contact pour un assainissement sérieux.",
        "Supports marqués : rendu dépendant de l’état initial (béton, métal, peinture).",
      ],
      faqAdditions: [
        {
          question:
            "Sur la Voie Lambert, quelles étapes suivez-vous pour éviter la dispersion lors du nettoyage ?",
          answer: `<p>On commence par les EPI et le confinement, puis on humidifie avant tout retrait. Cette étape limite l’envol de particules. Ensuite seulement, on retire et on nettoie les supports, en gardant une zone contrôlée. Le but est de protéger l’intérieur du logement et l’environnement immédiat.</p>`,
        },
        {
          question:
            "Dans un quartier résidentiel calme, comment gérez-vous le bâchage et la gêne pour les voisins ?",
          answer: `<p>Le bâchage sert à contenir, pas à “encombrer”. On protège les zones à risque, on travaille par séquences courtes et on évite les ruissellements. La communication est simple : durée, zones concernées, aération. L’objectif est d’assainir sans créer de nuisances inutiles.</p>`,
        },
        {
          question:
            "Près des bords plus humides, comment traitez-vous les odeurs et les traces sur le support ?",
          answer: `<p>Après le retrait et le nettoyage, la désinfection est indispensable. Elle aide à neutraliser une partie des odeurs et à assainir les surfaces. Sur les supports poreux, certaines traces peuvent rester visibles selon l’ancienneté : on vise une propreté obtenue cohérente avec l’état initial, avec finitions sur rebords et garde-corps.</p>`,
        },
        {
          question:
            "Si le balcon est inutilisable, sous quels délais peut-on retrouver un usage normal près du Parc des Côteaux d’Avron ?",
          answer: `<p>On peut souvent rétablir un usage rapidement, mais le délai dépend de la quantité de dépôts, du support et de l’aération. Le plus important est de respecter la phase de désinfection (temps de contact) puis l’aération. On donne des consignes simples pour revenir à un usage confortable sans précipiter les étapes.</p>`,
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
        "Rafraîchir les textiles du quotidien, réduire taches et odeurs, et retrouver un mobilier plus sain sans sur-mouiller.",
      whyUsBullets: [
        "Habitués aux intérieurs familiaux de Bel-Air et aux textiles du quotidien.",
        "Pré-traitement ciblé + injection-extraction, avec aspiration puissante et séchage maîtrisé.",
        "Organisation compacte, adaptée aux accès et rues en pente vers Avron.",
      ],

      uniqueIntro: `<p>Un canapé ou un tapis peut sembler “propre” à l’œil, tout en gardant une réalité moins agréable : poussières incrustées, acariens, odeurs (cuisine, animaux), et taches qui réapparaissent dès que la lumière rase le textile. Dans un habitat familial comme le <strong>quartier Bel-Air</strong>, ces effets s’installent vite : vie quotidienne, enfants, allées et venues, et tissus sollicités. À l’inverse, près des commerces et passages autour de l’<strong>Avenue du Maréchal Joffre</strong>, les tapis et entrées se marquent davantage, et certaines taches (café, encre, gras) s’incrustent dans la fibre.</p>
<p class="mt-4">Klinova réalise le <strong>nettoyage canapé Neuilly-Plaisance</strong> (et tapis/matelas) avec une méthode structurée : diagnostic du textile, pré-traitement ciblé, puis injection-extraction avec aspiration puissante. On cherche un rendu net et une hygiène améliorée, tout en maîtrisant le séchage. Dans les résidences récentes vers la gare et certains secteurs en pente, l’organisation compte aussi : accès, installation, et consignes d’aération pour une remise en usage rapide selon contexte.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<p>1) <strong>Diagnostic textile & taches.</strong> Identification du tissu (coton, synthétique, velours, laine) et des risques (dégorgement, fragilité), repérage des taches (café, vin, encre, sébum, urine) et des odeurs.</p>
<p class="mt-4">2) <strong>Pré-traitement ciblé.</strong> Détachage enzymatique ou adapté selon la nature de la tache, travail localisé avant le nettoyage complet, pour éviter d’étaler la salissure et améliorer le rendu final.</p>
<p class="mt-4">3) <strong>Injection-extraction & séchage.</strong> Nettoyage profond par injection-extraction, aspiration maximale et contrôle des zones sensibles. Consignes simples de séchage (aération, usage progressif) et recommandations de fréquence selon vie de famille et présence d’animaux.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Vie de famille à Bel-Air : taches récurrentes et poussières incrustées dans les fibres.",
        "Autour de l’Avenue du Maréchal Joffre : tapis d’entrée vite marqués par les passages.",
        "Acariens/allergènes : besoin d’un nettoyage profond et d’une aspiration efficace.",
        "Odeurs (animaux, cuisine) : neutralisation selon textile et état d’imprégnation.",
        "Taches anciennes (café, encre, gras) : pré-traitement indispensable avant extraction.",
        "Accès / rues en pente : installation à organiser pour limiter la gêne.",
      ],
      faqAdditions: [
        {
          question:
            "Dans un logement familial à Bel-Air, le nettoyage aide-t-il vraiment sur les allergènes et acariens ?",
          answer: `<p>Oui, surtout quand on réalise un nettoyage profond avec aspiration puissante. L’injection-extraction retire une partie importante des poussières et salissures incrustées qui nourrissent les allergènes. On complète avec des consignes de séchage et, selon le contexte (enfants, asthme), on adapte la méthode pour un usage plus confortable.</p>`,
        },
        {
          question:
            "Sur un canapé en velours ou un tissu délicat, comment évitez-vous d’abîmer le textile ?",
          answer: `<p>Tout part du diagnostic : type de fibre, tenue des couleurs, sensibilité à l’eau. On ajuste le pré-traitement, l’humidité, et l’action mécanique. L’objectif est d’assainir sans sur-mouiller ni “tirer” la fibre, et de garder un séchage compatible avec la vie du logement.</p>`,
        },
        {
          question:
            "Près de l’Avenue du Maréchal Joffre, comment traitez-vous des taches incrustées sur un tapis ?",
          answer: `<p>On ne se contente pas d’un passage global : on réalise un détachage ciblé adapté à la tache (tanins, gras, encre), puis on nettoie l’ensemble pour éviter les auréoles. L’aspiration industrielle est essentielle pour extraire au maximum et limiter les reprises, surtout sur tapis très sollicités.</p>`,
        },
        {
          question:
            "Avec des rues en pente vers Avron, comment organisez-vous l’intervention et le séchage sans gêner l’accès ?",
          answer: `<p>On vient avec un dispositif compact et on sécurise l’installation dès l’arrivée. Sur place, on limite les allers-retours, on protège les zones de passage, puis on donne des consignes d’aération simples. Le temps de remise en usage dépend du textile et de l’épaisseur, mais on vise toujours un séchage maîtrisé.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
