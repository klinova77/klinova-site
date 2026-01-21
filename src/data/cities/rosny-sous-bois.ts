
import type { City } from "~/types/geo";

const city: City = {
  name: "Rosny-sous-Bois",
  slug: "rosny-sous-bois",
  postalCodes: ["93110"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Entre la gare RER E, le pôle Rosny–Bois-Perrier et les axes A3/A86, les entrées d’immeubles, circulations et abords se chargent vite en poussières et traces. Avec Rosny 2 et Domus, les zones de passage demandent un entretien régulier pour garder une propreté stable.",

 hubIntro:
  "<p>À Rosny-sous-Bois, Klinova accompagne les syndics de copropriété, gestionnaires et entreprises sur une logique de <strong>gestion globale</strong> : propreté, hygiène, continuité d’usage et interventions qui respectent l’occupation des lieux, notamment autour de <strong>Rosny–Bois-Perrier (RER E)</strong> et du <strong>terminus métro 11</strong>.</p>\n\n" +
  "<p>Notre approche est <strong>protocolisée</strong> : repérage, organisation, exécution et <strong>reporting</strong> clair. L’objectif est simple : limiter les irritants du quotidien (traces, poussières, odeurs, dépôts) tout en maîtrisant les contraintes d’accès, de stationnement et de planning propres à Rosny-sous-Bois.</p>\n\n" +
  "<ul>\n" +
  "  <li><strong>Partenariat terrain avec syndics et gestionnaires :</strong> repérage des zones sensibles, plan d’action réaliste, suivi dans le temps. On s’aligne sur vos priorités (image, sécurité, confort) et sur les contraintes des résidents ou des équipes sur site.</li>\n" +
  "  <li><strong>Maintenance immobilière & propreté :</strong> interventions pensées pour les circulations, halls, sous-sols, locaux techniques et abords. Un cadre de travail clair, des méthodes adaptées aux surfaces, et une attention constante à la gêne minimale.</li>\n" +
  "  <li><strong>Protocole & hygiène :</strong> protection des zones, matériel professionnel, gestion maîtrisée de l’eau et des salissures. On vise un rendu propre, régulier, sans “à-coups”, et un niveau d’hygiène cohérent avec l’usage réel des lieux.</li>\n" +
  "  <li><strong>Reporting utile :</strong> compte-rendu simple, constats observés, points d’attention. Pratique pour piloter la prestation, répondre à un conseil syndical exigeant, ou sécuriser une remise en état après incident.</li>\n" +
  "</ul>",

  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé

  citySpecificChallenges: [
    "Phrase 1: Encrassement rapide des circulations : poussières fines liées aux axes A3/A86, entrées ouvertes, va-et-vient quotidien.",
    "Phrase 2: Sous-sols et parkings : hydrocarbures, poussière noire, traces pneus, zones rampes et angles difficiles.",
    "Phrase 3: Abords et espaces extérieurs : dépôts verts saisonniers près des parcs/squares, boues par temps humide, salissures de façade en rez-de-chaussée.",
    "Phrase 4: Sites à forte fréquentation : marquages et finitions qui se dégradent vite sans entretien structuré (entrées, couloirs, zones communes).",
  ],

  districts: [
    "Centre-ville – Plateau d’Avron – Beauséjour",
    "Rosny-Sud",
    "Boissière",
    "Coteaux Beauclair",
    "Marnaudes – Bois-Perrier",
    "Pré-Gentil",
    "Bois Perrier / Les Marnaudes",
  ],
  nearbyCities: [
        "neuilly-plaisance",
        "fontenay-sous-bois",
        "montreuil",
        "le-raincy",
        "le-perreux-sur-marne",
        "neuilly-sur-marne"
      ],

  landmarks: [
    "Mairie de Rosny-sous-Bois",
    "Gare de Rosny-sous-Bois (RER E)",
    "Gare de Rosny–Bois-Perrier (RER E / Métro 11)",
    "Westfield Rosny 2",
    "Centre commercial Domus",
    "Parc nature du plateau d’Avron",
    "Domus",
    "Échangeur A86 / A3",
    "Golf de Rosny-sous-Bois.",
  ],

  faq: [
    {
      question:
        "Peut-on obtenir une intervention rapide sur Rosny-sous-Bois quand un point devient critique (hall très sale, traces, odeur) ?",
      answer: `<p><strong>Réactivité :</strong> oui, selon la nature du besoin. On commence par qualifier la demande (surface, accès, contraintes) puis on propose un créneau compatible avec l’occupation. Sur Rosny-sous-Bois, on anticipe souvent la circulation autour des pôles gares et centres commerciaux pour tenir les délais.</p>`,
    },
    {
      question:
        "Les déplacements pour un devis sont-ils facturés si le site est “à l’écart” ou difficile d’accès ?",
      answer: `<p><strong>Visite de diagnostic :</strong> elle sert à éviter les erreurs (surface réelle, revêtements, points d’eau, accès sous-sol). Les déplacements pour devis sont en pratique intégrés à notre organisation sur l’Île-de-France : on planifie la visite efficacement, même si l’accès demande un badge ou un RDV gardien.</p>`,
    },
    {
      question:
        "Comment gérez-vous le stationnement et les accès quand c’est compliqué (badge, portail, sous-sol étroit) ?",
      answer: `<p><strong>Organisation :</strong> on valide en amont le mode d’accès (digicode, badge, portail) et le point de déchargement. Si le stationnement est contraint, on prévoit un passage tôt ou sur un créneau calme, et on limite les allers-retours pour ne pas perturber les résidents.</p>`,
    },
    {
      question: "Intervenez-vous en urgence après un sinistre ou une fin de chantier ?",
      answer: `<p><strong>Remise en état :</strong> oui, avec un cadrage strict. On vérifie d’abord ce qui relève du nettoyage (poussières, traces, dépôts) et les contraintes de sécurité/accès. Ensuite, on cale une opération ciblée avec le bon matériel, puis un contrôle final pour valider le niveau de propreté attendu.</p>`,
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
        "Des moquettes de halls, couloirs ou bureaux réellement décrassées, sans auréoles ni sur-humidité, pour retrouver une circulation nette et une image soignée au quotidien.",
      whyUsBullets: [
        "Expertise locale : halls proches RER E, petits collectifs Beauséjour, entrées exposées aux poussières.",
        "Maîtrise technique : injection–extraction, passes renforcées trafic, extraction puissante pour éviter l’auréole.",
        "Organisation : balisage par zones, accès maintenu, consignes simples pour résidents, salariés ou occupants.",
      ],

      uniqueIntro: `<p>Les traces de pas, les zones lustrées et les taches “qui reviennent” finissent par s’installer là où la moquette est la plus sollicitée. Autour de la <strong>gare de Rosny-sous-Bois (RER E)</strong>, on voit souvent des entrées d’immeubles et des petits collectifs du secteur <strong>Centre-ville – Beauséjour</strong> où le passage est constant : chaussures humides, poussières ramenées de l’extérieur, marques sur les nez de marche. Dans les bureaux et locaux recevant du public, la moquette garde aussi les odeurs et ternit l’ambiance, même quand l’entretien courant est sérieux.</p>
<p class="mt-4">Le problème, ce n’est pas “juste une tache” : c’est un encrassement diffus qui dégrade l’aspect général, donne une impression de négligé et crée des remarques récurrentes (résidents, visiteurs, clients, équipes). À domicile, c’est souvent la même histoire dans une chambre ou un escalier moquetté : la fibre se charge, la couleur se ferme, le nettoyage ménager atteint vite ses limites. Une action professionnelle bien menée permet de retrouver une moquette plus nette, plus saine, et surtout plus simple à maintenir ensuite.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>1) Diagnostic & cadrage.</h3>
<p>On identifie le type de moquette (dalles, bouclée, velours), les taches dominantes et les contraintes d’accès (cage étroite, ascenseur, horaires). On repère les zones de fort trafic : entrée, paliers, virages d’escalier.</p>

<h3>2) Préparation & protection.</h3>
<p>Balisage, protections des bas de murs/angles, organisation par étage ou par zone. Dans les immeubles anciens du centre, on sécurise les passages pour maintenir la circulation sans salissures secondaires.</p>

<h3>3) Injection–extraction & séchage maîtrisé.</h3>
<p>Nettoyage à l’eau avec plusieurs passes sur les zones marquées, puis extraction puissante pour limiter l’humidité. Aération et consignes claires : on vise un séchage homogène, sans “retour” d’odeur. Recommandation d’entretien : contrôle régulier et remise en profondeur tous les <strong>12 à 18 mois</strong> selon le passage.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Le flux piéton autour de la gare de Rosny-sous-Bois charge vite les moquettes en particules fines et traces humides.",
        "Dans les cages d’escalier étroites des immeubles anciens, la protection des angles et nez de marche devient déterminante.",
        "Certaines moquettes en rez-de-chaussée marquent plus : poussière de rue, humidité, séchage à surveiller.",
        "En bureaux, l’enjeu est aussi olfactif : fibre encrassée, air “fermé”, besoin d’une extraction réellement efficace.",
      ],

      faqAdditions: [
        {
          question:
            "Dans les immeubles du Centre-ville – Beauséjour, la moquette d’escalier noircit vite : c’est lié à quoi ?",
          answer: `<p>Souvent à un mélange <strong>poussière de rue + humidité</strong> : entrées ouvertes, passage répété, chaussures mouillées. La fibre se charge surtout sur les premières marches et aux paliers. Un diagnostic rapide permet d’adapter les passes et d’éviter que l’encrassement reste “collé” au fond de la moquette.</p>`,
        },
        {
          question:
            "Intervenez-vous aussi dans des bureaux ou des hôtels, pas uniquement en copropriété ?",
          answer: `<p>Oui. On traite la moquette là où elle est utilisée : <strong>bureaux</strong>, locaux d’accueil, circulations, chambres, mais aussi <strong>logements</strong> chez les particuliers. Les contraintes changent (horaires, accès, discrétion, maintien de l’activité), donc on adapte l’organisation et la progression par zones.</p>`,
        },
        {
          question: "L’injection–extraction risque-t-elle d’abîmer une moquette déjà fatiguée ?",
          answer: `<p>La méthode est maîtrisée si elle est <strong>ajustée</strong> : pression, température, nombre de passes, et extraction. Sur une moquette ancienne, on teste une zone, on limite la saturation en eau et on privilégie l’aspiration immédiate. L’objectif est de nettoyer sans déformer la fibre.</p>`,
        },
        {
          question: "Comment évitez-vous de gêner les résidents quand la cage d’escalier est étroite ?",
          answer: `<p>On balise, on travaille par <strong>tranches</strong> (paliers/volées), et on sécurise les passages. Dans certains cas, on cale une intervention tôt ou sur un créneau plus calme. On communique clairement : zones en cours, zones accessibles, et consignes simples pour éviter les traces pendant le séchage.</p>`,
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
        "Un parking plus lisible, moins glissant et visuellement maîtrisé, même avec une forte rotation de véhicules, pour sécuriser les déplacements et l’image du site au quotidien.",
      whyUsBullets: [
        "Expertise locale : sites à forte rotation près Rosny 2/Domus, rampes sollicitées, angles très marqués.",
        "Maîtrise technique : autolaveuse + dégraissage ciblé, respect des marquages, résultat homogène sans flaques.",
        "Organisation : plan par zones, signalisation claire, accès maintenus, coordination simple avec gardiennage ou gestionnaire.",
      ],

      uniqueIntro: `<p>Après quelques mois sans décrassage, un parking commence à “se fermer” : poussière noire, traces de pneus, coulures sur les murs, marquages qui deviennent moins lisibles. Dans le secteur <strong>Westfield Rosny 2</strong> et autour du <strong>centre commercial Domus</strong>, la rotation des véhicules accentue ce phénomène : on retrouve plus vite des zones grasses, des taches d’huile anciennes et des traces sur les rampes. Résultat : un ressenti de saleté permanente, et parfois des inquiétudes côté sécurité (sol glissant, visibilité réduite, cheminements piétons moins clairs).</p>
<p class="mt-4">Pour un syndic, un gestionnaire ou une foncière, l’enjeu n’est pas uniquement esthétique : il faut une opération qui se cale dans la réalité du site. Accès, circulation, présence de véhicules, règles de sécurité, nuisances limitées… Le gain d’un décrassage bien organisé est concret : meilleure lisibilité, propreté stable, zones sensibles assainies, et un parking qui redevient “tenable” sans relancer des plaintes à chaque épisode de pluie ou de fort trafic.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>1) Préparation logistique.</h3>
<p>Visite de diagnostic : revêtement (béton, résine, peinture), état des marquages, évacuation des eaux, rampes, hauteur sous plafond. Puis plan de passage : zones, signalisation, circulation piétonne, rotation éventuelle des véhicules.</p>

<h3>2) Mise en sécurité & nettoyage par zones.</h3>
<p>Balayage mécanique ou manuel, dégagement des déchets, puis autolaveuse (brossage + aspiration). Sur les zones grasses, renfort par haute pression contrôlée (souvent eau chaude) avec dégraissant professionnel, en gardant une progression qui laisse toujours des accès fonctionnels.</p>

<h3>3) Gestion de l’eau & finitions.</h3>
<p>Récupération/aspiration des eaux de lavage et évacuation dans le réseau adapté. Traitement attentif des angles, pieds de murs, rampes, zones de braquage. Recommandation : 1 à 2 opérations complètes/an selon le trafic et l’exposition aux axes routiers.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Autour de Rosny 2 et Domus, la rotation véhicule accélère les dépôts gras et la poussière noire.",
        "Les rampes et zones de braquage concentrent l’encrassement : besoin d’un traitement renforcé et régulier.",
        "Certains sous-sols ont une évacuation d’eau peu tolérante : la récupération/aspiration doit être strictement maîtrisée.",
        "La réussite dépend aussi de la coordination : circulation, zones neutralisées, sécurité piétons et véhicules.",
      ],
      faqAdditions: [
        {
          question:
            "Le parking prend une “poussière noire” tenace près des sorties vers les grands axes : vous traitez ça comment ?",
          answer: `<p>Ce type d’encrassement mélange particules fines et film gras. On commence par un <strong>diagnostic</strong> du revêtement, puis on combine autolaveuse (brossage + aspiration) et renfort dégraissant sur les zones critiques. L’objectif est d’éviter l’effet “étalé” et de retrouver une surface moins glissante.</p>`,
        },
        {
          question:
            "Faut-il vider tout le parking, ou pouvez-vous travailler par zones autour de Rosny 2/Domus ?",
          answer: `<p>On privilégie un <strong>phasage par zones</strong> quand c’est possible : cela limite la gêne et évite un blocage total. On définit un plan (zones A/B/C), une signalisation claire, et une coordination simple avec le gestionnaire. Selon la configuration, une rotation partielle suffit.</p>`,
        },
        {
          question: "Les vieilles taches d’huile au pied des places, c’est rattrapable à 100% ?",
          answer: `<p>On vise un <strong>nettoyage maximal</strong>, mais certaines taches anciennes ont pénétré le béton ou la résine. Le dégraissage et la haute pression contrôlée améliorent fortement l’aspect et réduisent le gras en surface. On annonce ce qui est réaliste après la visite, zone par zone.</p>`,
        },
        {
          question: "Comment gérez-vous les eaux de lavage dans un parking souterrain (réseau, évacuation) ?",
          answer: `<p>C’est un point clé. On organise l’opération pour <strong>récupérer</strong> les eaux (autolaveuse aspirante, zones maîtrisées), puis on évacue dans le réseau adapté selon la configuration constatée au diagnostic. On évite les “coulées” et on sécurise les pentes et rampes pendant l’action.</p>`,
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
        "Un balcon propre et vraiment agréable à Rosny-sous-Bois, sans joints noircis ni dépôts verts, pour se réinstaller dehors et profiter de l’extérieur sans appréhension.",
      whyUsBullets: [
        "Expertise locale : balcons d’immeubles près Coteaux Beauclair, exposition aux dépôts verts et poussières.",
        "Maîtrise technique : produits adaptés aux supports, brossage précis, pression contrôlée sans agresser les joints.",
        "Organisation : protection intérieure, gestion anti-coulures, intervention propre et calme en milieu occupé.",
      ],

      uniqueIntro: `<p>Dans les résidences proches de <strong>Coteaux Beauclair</strong>, beaucoup de balcons finissent par devenir un “coin à éviter” : poussière qui colle, joints qui noircissent, traces d’eau, terre de jardinières qui s’incruste. On repousse, on repousse… et l’espace extérieur perd son intérêt. À Rosny-sous-Bois, la proximité des axes et les variations de saison jouent aussi : pollen au printemps, dépôts verts quand l’humidité s’installe, et une pellicule grise qui revient vite si le sol est poreux.</p>
<p class="mt-4">Le souci, c’est que le ménage classique ne suffit pas toujours : on frotte, mais la crasse reste dans les joints, sur les angles, et le long des garde-corps. Résultat : on n’ose plus poser un tapis, laisser les enfants jouer dehors, ou inviter quelqu’un à s’asseoir. Une remise en état professionnelle change le quotidien : le sol redevient net, les traces disparaissent, les parties verticales retrouvent un aspect propre, et le balcon redevient un endroit où l’on a envie de passer du temps — sans transformer la façade en cascade chez le voisin du dessous.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>1) Protéger et dégager.</h3>
<p>On sécurise la porte-fenêtre, les menuiseries et les murs (bâches/rubans). On déplace ou protège plantes, mobilier, rangements, pour travailler sans salir l’intérieur.</p>

<h3>2) Enlever le “gros” puis traiter le support.</h3>
<p>Dépôts de feuilles, terre, résidus de jardinières : retrait manuel. Ensuite, application d’un nettoyant adapté (carrelage, béton, dalles), brossage, puis rinçage contrôlé. On reprend aussi garde-corps, vitrerie accessible et murs mitoyens marqués.</p>

<h3>3) Maîtriser l’eau et finir proprement.</h3>
<p>On tire l’eau vers l’évacuation, raclettes/chiffons si nécessaire pour éviter les coulures. Pression possible mais <strong>toujours réglée</strong> pour préserver joints et surfaces. Conseils : séchage, aération, et gestes simples pour garder un balcon net plus longtemps.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "La proximité du parc nature du plateau d’Avron favorise pollen et dépôts verts sur certaines terrasses.",
        "Les sols en dalles ou béton poreux gardent les traces : besoin d’un brossage méthodique et d’un rinçage maîtrisé.",
        "Les garde-corps et angles accumulent la crasse : ce sont eux qui “plombent” l’aspect global si on les oublie.",
        "La contrainte la plus sensible reste l’eau : éviter coulures en façade et chez le voisin du dessous.",
      ],
      faqAdditions: [
        {
          question:
            "Sur un balcon en dalles près du plateau d’Avron, est-ce que le nettoyage peut fragiliser les joints ?",
          answer: `<p>Non si la pression est <strong>contrôlée</strong> et si le produit est adapté. On privilégie le brossage et le rinçage maîtrisé plutôt qu’une haute pression agressive. Le but est de décoller la salissure sans “creuser” le joint, et de laisser le support propre et stable.</p>`,
        },
        {
          question: "Mon voisin du dessous craint les coulures : comment vous évitez ça en façade ?",
          answer: `<p>On travaille avec une <strong>gestion d’eau</strong> stricte : protection, tirage vers l’évacuation, raclettes et reprise des zones sensibles. Si besoin, on limite les volumes d’eau et on procède par petites zones. L’objectif est un nettoyage efficace sans transformer le balcon en gouttière.</p>`,
        },
        {
          question: "J’ai des plantes et un petit animal : les produits posent problème ?",
          answer: `<p>On adapte. On protège les pots, on évite les projections, et on choisit un nettoyant compatible avec l’usage domestique. On rince correctement et on vous donne des consignes simples. L’idée n’est pas de “parfumer” : c’est de <strong>retirer</strong> les salissures et de rendre le balcon sain.</p>`,
        },
        {
          question: "Après l’intervention, quand peut-on remettre un tapis ou s’installer dehors ?",
          answer: `<p>Dès que le support est <strong>sec</strong>. En général, une bonne aération et une extraction d’eau efficace permettent de réutiliser le balcon dans la journée, selon la météo et le revêtement. On vous indique sur place les zones qui sèchent plus lentement (joints, angles).</p>`,
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
        "Quand les fientes s’accumulent, le balcon doit redevenir sain : décontaminé, désinfecté et réutilisable en sécurité, avec un protocole sérieux adapté aux contraintes d’un immeuble occupé.",
      whyUsBullets: [
        "Expertise locale : loggias collectives Boissière, balcons exposés aux oiseaux, dépôts récurrents.",
        "Maîtrise technique : humidification anti-poussière, retrait sécurisé, désinfection avec temps de contact respecté.",
        "Organisation : protection voisins/façade, intervention propre, conseils dissuasion et remise en usage sécurisée.",
      ],

      uniqueIntro: `<p>Comment expliquer qu’un balcon devienne inutilisable alors qu’il est “juste dehors” ? Les fientes de pigeons ne se limitent pas à une salissure : elles sèchent, se pulvérisent en poussières, s’incrustent sur les sols et attaquent les supports. Dans les ensembles résidentiels du secteur <strong>Boissière</strong> ou près de zones collectives, on observe parfois des loggias et balcons où l’accumulation s’installe : odeurs, traces blanchâtres, dépôts dans les angles, et un sentiment d’insalubrité qui monte vite.</p>
<p class="mt-4">Avec le temps, le risque n’est pas “spectaculaire”, mais concret : surface glissante, corrosion du métal, encrassement durable, et surtout impossibilité d’ouvrir, d’aérer ou de poser un pied dehors sans crainte. Ce type de situation crée aussi des tensions : voisins qui se plaignent des poussières, copropriété qui s’inquiète, occupant qui n’ose plus intervenir seul. Un traitement professionnel sécurisé permet de stopper l’escalade : retrait maîtrisé, nettoyage, <strong>désinfection</strong> avec temps de contact respecté, puis conseils de dissuasion pour éviter la récidive.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>1) Sécurité et confinement.</h3>
<p>EPI obligatoires : combinaison, gants, lunettes, <strong>masque respiratoire</strong> type FFP3. Mise en protection : bâches côté intérieur, limitation de la dispersion des poussières et projections.</p>

<h3>2) Retrait contrôlé des matières.</h3>
<p>Humidification préalable des fientes sèches pour éviter l’aérosolisation. Ramassage manuel des fientes, nids et débris, conditionnement en sacs étanches. Nettoyage des surfaces (sol, garde-corps, murs mitoyens, vitrerie accessible) avec produit adapté, pression modérée si nécessaire.</p>

<h3>3) Désinfection et remise en usage.</h3>
<p>Application d’un désinfectant virucide/bactéricide homologué avec respect du temps de contact, puis rinçage et aération. Délai avant réutilisation souvent <strong>24h</strong>. Si utile : pose de dispositifs anti-pigeons (pics ou filets) pour limiter la réinstallation.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "La proximité des squares et zones arborées favorise les regroupements d’oiseaux et la récurrence des dépôts.",
        "Les fientes sèches produisent des poussières : sans humidification et EPI, le risque de dispersion augmente fortement.",
        "Certains supports (garde-corps, peintures, béton) se dégradent si l’assainissement tarde : corrosion, traces incrustées.",
        "Le point critique reste la cohabitation : protéger l’intérieur, la façade et les voisins pendant la décontamination.",
      ],
      faqAdditions: [
        {
          question:
            "Si les fientes sont sèches depuis longtemps sur une loggia en étage à Boissière, est-ce dangereux de nettoyer soi-même ?",
          answer: `<p>Le principal risque vient des <strong>poussières</strong> : en grattant à sec, on disperse des particules potentiellement contaminées. Sans masque adapté, lunettes et confinement, on en met partout (balcon, intérieur, façade). Un pro sécurise d’abord, humidifie, retire et désinfecte avec méthode.</p>`,
        },
        {
          question: "Après désinfection, est-ce que le balcon est “sûr” pour un enfant ou un animal ?",
          answer: `<p>Oui, une fois le <strong>temps de contact</strong> respecté, le rinçage fait et le support sec. On vous indique le délai de réutilisation et les précautions simples (aération, éviter de marcher pieds nus tant que c’est humide). L’objectif est un retour à un usage normal, sans résidus gênants.</p>`,
        },
        {
          question: "Est-ce que ça peut abîmer la peinture ou le garde-corps ?",
          answer: `<p>L’accumulation de fientes abîme souvent plus que le nettoyage. On adapte la méthode : pression <strong>modérée</strong>, brossage contrôlé, produit compatible avec le support. Sur une peinture fragile, on teste une zone et on privilégie le retrait progressif plutôt qu’une action agressive.</p>`,
        },
        {
          question: "Que faites-vous des nids et des déchets retirés pendant la décontamination ?",
          answer: `<p>Tout est <strong>conditionné</strong> en sacs étanches pour éviter la dispersion pendant la manutention. On retire l’ensemble du balcon (fientes, nids, débris), puis on termine par la désinfection et un rinçage propre. Vous récupérez un espace assaini, sans résidus laissés sur place.</p>`,
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
        "Un salon et des chambres plus agréables à vivre, avec des textiles rafraîchis, moins d’odeurs et des taches mieux maîtrisées, pour profiter de son canapé, tapis ou matelas sans gêne.",
      whyUsBullets: [
        "Expertise locale : appartements Marnaudes–Bois-Perrier, accès faciles, interventions propres en milieu habité.",
        "Maîtrise technique : pré-traitements adaptés, injection–extraction maîtrisée, résultat sans détrempe excessive.",
        "Organisation : passage discret, bruit contenu, consignes de séchage simples pour reprendre vite l’usage.",
      ],

      uniqueIntro: `<p>Dans la vie réelle, un canapé ou un tapis ne reste pas “nickel” longtemps : enfants qui grignotent, invités, animaux, sieste, boissons renversées… Et quand ça marque, ça devient vite un sujet au quotidien. Dans le secteur <strong>Marnaudes – Bois-Perrier</strong>, beaucoup de logements sont en collectif : on a parfois des pièces qui ventilent moins, et les odeurs de textile se fixent plus facilement. Le ménage enlève la poussière en surface, mais les fibres retiennent les salissures, surtout sur les accoudoirs, les assises et les zones de passage.</p>
<p class="mt-4">Au bout d’un moment, on n’ose plus recevoir, ou on se dit que “c’est foutu” pour certaines taches (urine, gras, boissons). Pareil pour un matelas : on change les draps, mais les auréoles et l’impression de manque d’hygiène restent. Une intervention professionnelle à domicile remet les choses d’aplomb : traitement ciblé des taches, nettoyage en profondeur, extraction immédiate de l’eau sale, et consignes simples pour un séchage propre. Le confort revient, et l’entretien quotidien redevient beaucoup plus facile.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>1) Identifier et préparer.</h3>
<p>Diagnostic du textile (coton, laine, synthétique, velours, cuir) et des taches (gras, boisson, urine). Protection du sol si nécessaire et organisation dans un espace souvent compact, typique des appartements.</p>

<h3>2) Pré-traiter puis nettoyer en profondeur.</h3>
<p>Pré-traitement ciblé : enzymatique pour l’organique, détachant adapté à la fibre. Nettoyage principal par <strong>injection–extraction</strong> avec aspiration immédiate : on retire les salissures sans détremper, en multipliant les passes là où c’est le plus marqué.</p>

<h3>3) Séchage et reprise d’usage.</h3>
<p>Extraction maximale, aération conseillée, et consignes claires : quand s’asseoir à nouveau, comment éviter que l’humidité reste “piégée”. On vous laisse aussi des gestes simples (aspiration, réflexe anti-taches) pour garder le textile propre plus longtemps.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

      specificChallenges: [
        "Dans certains logements collectifs, l’aération est limitée : le séchage doit être piloté avec précision.",
        "Les taches organiques (urine, nourriture) et les odeurs s’ancrent vite si elles restent : pré-traitement indispensable.",
        "Les tissus épais ou fragiles demandent une pression réduite et davantage de passes, sans agresser la fibre.",
        "Le quotidien (enfants, animaux, invités) relance les salissures : l’intérêt est aussi de repartir sur une base plus saine.",
      ],
      faqAdditions: [
        {
          question:
            "Est-ce que le nettoyage aide vraiment pour les allergènes (poussière, acariens) dans un appartement en collectif ?",
          answer: `<p>Oui, parce qu’on retire une partie des <strong>particules</strong> piégées dans les fibres, pas seulement en surface. L’injection–extraction aspire l’eau sale immédiatement, ce qui emporte une quantité importante de salissures. On ne “stérilise” pas une maison, mais on améliore nettement l’hygiène du textile.</p>`,
        },
        {
          question: "Sur une tache d’urine ancienne sur canapé, est-ce que l’odeur peut disparaître ?",
          answer: `<p>On traite d’abord la cause : tache <strong>organique</strong>. Pré-traitement enzymatique, puis extraction en profondeur. Le résultat dépend de l’ancienneté et de la pénétration dans la mousse, mais on améliore très souvent l’odeur et l’aspect. On vous dit sur place ce qui est réaliste après test.</p>`,
        },
        {
          question: "Après le passage, je peux m’asseoir tout de suite sur le canapé ou remettre le tapis ?",
          answer: `<p>L’objectif est un séchage <strong>le jour même</strong> grâce à l’extraction maximale, mais il faut attendre que le support soit sec au toucher. On vous indique les zones qui sèchent plus lentement (coussins épais, coutures). Une bonne aération accélère nettement la reprise d’usage.</p>`,
        },
        {
          question: "Qu’est-ce que je dois préparer avant votre arrivée (meubles, accès, espace) ?",
          answer: `<p>Très simple : libérer l’accès au textile, retirer les objets fragiles autour, et prévoir un petit <strong>espace de travail</strong> pour poser le matériel. Dans un appartement, on s’adapte : on limite les déplacements, on protège si besoin, et on vous guide sur les gestes utiles pour que l’intervention soit fluide.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;

