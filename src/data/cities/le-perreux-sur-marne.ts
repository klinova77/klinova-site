import type { City } from "~/types/geo";

const city: City = {
  name: "Le Perreux-sur-Marne",
  slug: "le-perreux-sur-marne",
  postalCodes: ["94170"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  customDescription:
    "Au Perreux-sur-Marne (94170), Klinova accompagne copropriétés et sites professionnels avec une approche terrain, notamment autour de la Mairie du Perreux-sur-Marne, où l’organisation et les accès conditionnent souvent la qualité du rendu.",

  hubIntro: `<p>Entre <strong>Bords de Marne</strong> et <strong>pavillons meulières</strong>, la demande en propreté est souvent liée au confort quotidien, mais aussi aux contraintes d’accès et de stationnement. Klinova intervient au Perreux-sur-Marne avec une logique simple : bien préparer, bien exécuter, et laisser un état final lisible.</p>
<p class="mt-4">Nous travaillons avec des méthodes explicites, adaptées au bâti local (digicodes, sous-sols, escaliers étroits) et aux usages réels. Sur demande, un compte-rendu peut être fourni pour faciliter le suivi côté gestion. L’objectif reste le même : une remise en ordre propre, sans perturber inutilement les occupants ou l’activité.</p>
<ul>
  <li><strong>Repérage & cadrage :</strong> on confirme supports, accès, zones sensibles et contraintes horaires avant de lancer l’action, pour éviter les “surprises” le jour J.</li>
  <li><strong>Logistique maîtrisée :</strong> stationnement anticipé, protections, circulation sécurisée et déroulé clair, afin de travailler proprement même dans des rues étroites ou en sens unique.</li>
  <li><strong>Rendu contrôlé :</strong> on vise un aspect net et cohérent (zones de passage, angles, bas de murs), avec des conseils simples pour tenir la propreté dans le temps.</li>
  <li><strong>Coordination facilitée :</strong> interlocuteur unique, créneaux adaptés quand c’est possible, et communication simple avant/pendant/après la prestation.</li>
</ul>`,
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé

citySpecificChallenges: [
  "Zones bleues étendues en centre-ville : stationnement à sécuriser en amont, surtout près de la gare.",
  "Digicodes et badges fréquents : accès à cadrer pour éviter les blocages le jour J.",
  "Sous-sols parfois profonds : traitement par zones avec attention aux rampes et aux angles.",
  "Proximité de la Marne : humidité et dépôts verts à intégrer dans le choix des méthodes.",
],


  districts: [
    "Centre-Ville",
    "Les Joncs-Marins",
    "La Prairie des Presles",
    "La Maltournée",    
    "Secteur Val de Fontenay",
    "pont de bry ",
    "Les Parclairs",
  ],
 nearbyCities: [
        "nogent-sur-marne",
        "neuilly-plaisance",
        "fontenay-sous-bois",
        "neuilly-sur-marne",
        "rosny-sous-bois",
        "joinville-le-pont"
      ],

  landmarks: [
    "Mairie du Perreux-sur-Marne",
    "Gare RER E Nogent–Le Perreux",
    "Promenade des Bords de Marne",
    "Passerelle de Bry",
    "L’Île des Loups",
    "Avenue du Maréchal Joffre",
    "Centre des Bords de Marne (CdB)",
  ],

  faq: [
    {
      question:
        "En centre-ville, comment faites-vous quand le stationnement est limité et que l’accès est sécurisé ?",
      answer: `<p><strong>On anticipe la logistique avant de venir.</strong> Dans les secteurs où zones bleues et accès par badges/digicodes se cumulent, on cadre le point de dépose, l’itinéraire matériel et les créneaux possibles. Cela évite de bloquer un hall ou une entrée, et permet de tenir un déroulé propre, sans allers-retours inutiles.</p>`,
    },
    {
      question:
        "Travaillez-vous aussi sur des sites professionnels proches de la limite Val de Fontenay ?",
      answer: `<p><strong>Oui, dès qu’il y a un besoin concret de propreté ou de remise en état.</strong> Sur les zones à usage bureaux/entreprises en limite nord, on adapte surtout la discrétion et le timing : passages en horaires creux, zones traitées par séquences, et remise en circulation rapide selon le support et le niveau d’encrassement.</p>`,
    },
    {
      question:
        "En cas de salissures qui se sont accumulées plusieurs mois, est-ce que vous intervenez “en rattrapage” ?",
      answer: `<p><strong>Oui, avec un cadrage réaliste sur l’état initial.</strong> Quand la dégradation s’installe (poussière noire, traces grasses, ternissement), on fait un diagnostic court, puis on priorise les zones critiques : entrées, circulations, rampes, pieds de murs. L’objectif est un rendu visuel net et une hygiène améliorée, sans promesse absolue.</p>`,
    },
    {
      question:
        "Peut-on caler une intervention tôt le matin ou en fin de journée pour limiter la gêne ?",
      answer: `<p><strong>C’est souvent la meilleure option sur des secteurs actifs.</strong> Autour des axes passants et des accès fréquentés, travailler en horaires décalés réduit les croisements et facilite les protections. On prévoit alors un déroulé clair (zonage, balisage si besoin) et on confirme les temps de séchage ou de remise en service selon la méthode retenue.</p>`,
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
        "Des sols textiles entretenus, c’est moins de traces aux zones de passage, moins d’odeurs incrustées, et des circulations qui restent présentables au quotidien, même quand l’immeuble ou le site est très fréquenté.",
      whyUsBullets: [
        "Lecture du Centre-Ville : halls standing, trafic réel, fibres vite marquées.",
        "Injection-extraction et détachage ciblé, avec options basse humidité si besoin.",
        "Accès étroits gérés, protections posées, séchage annoncé de façon réaliste.",
      ],

      uniqueIntro: `<p>Au Perreux-sur-Marne, les <strong>halls d’entrée standing du Centre-Ville</strong> et leurs tapis d’escalier finissent vite par marquer : zones de passage ternies, taches de boisson, poussière qui s’incruste dans les fibres. Dans le même temps, côté <strong>secteur Val de Fontenay</strong>, les moquettes de bureaux et de couloirs demandent surtout une approche compatible avec l’activité : limiter l’humidité, maîtriser les odeurs, et planifier un séchage cohérent.</p>
<p class="mt-4">Selon les immeubles, on retrouve aussi des <strong>bâtisses anciennes divisées avec escaliers étroits</strong> et halls ouverts sur rue : l’accès et la protection des abords font partie du travail, pas un détail. Enfin, près de la gare Nogent–Le Perreux (côté Le Perreux / limite), les allées et venues quotidiennes accélèrent l’usure visuelle : un détachage ciblé et un entretien structuré permettent de retrouver un rendu net, sans promettre l’impossible sur une tache ancienne.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>1) Diagnostic et préparation.</h3>
<p> On identifie le type de moquette (dalles, bouclée, velours), les taches (café, tanin, gras) et les contraintes d’accès. Mise en place de protections, balisage si circulation, et sécurisation des plinthes/angles quand le support est fragile.</p>

<h3>2) Nettoyage et détachage.</h3>
<p> Selon le contexte, on privilégie l’<strong>injection-extraction</strong> pour un nettoyage profond (passes renforcées sur zones de trafic) ou une approche <strong>basse humidité</strong> (encapsulation/bonnet) quand une remise en service rapide est nécessaire. Les taches sont pré-traitées de façon ciblée, sans “surmouiller” les fibres.</p>

<h3>3) Gestion de l’humidité et recommandations.</h3>
<p> Extraction maximale, contrôle du séchage (aération, circulation), puis vérification du rendu. On conseille une fréquence d’entretien adaptée : parties communes, bureaux, ou domicile (salon, chambres, escaliers intérieurs) n’ont pas les mêmes rythmes d’encrassement.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

    specificChallenges: [
  "Dans le Centre-Ville, les tapis d’escalier se ternissent vite sur les marches centrales.",
  "Les escaliers étroits imposent de limiter l’encombrement et de protéger les bas de murs.",
  "Sur la limite Val de Fontenay, le séchage doit rester compatible avec l’activité.",
  "Les taches grasses et odeurs persistantes demandent un pré-traitement propre, pas une solution “miracle”.",
],

      faqAdditions: [
        {
          question:
            "En Centre-Ville, avec escaliers étroits et halls ouverts sur rue, comment passez-vous le matériel ?",
          answer: `<p>On prévoit un acheminement compact et des protections dès l’entrée. Dans les bâtisses anciennes divisées, on limite les allers-retours, on sécurise les angles/plinthes, puis on travaille par zones (paliers, volées). Le but est d’éviter les traces d’eau et de conserver une circulation possible pendant l’opération.</p>`,
        },
        {
          question:
            "Près du secteur Val de Fontenay, privilégiez-vous basse humidité ou injection-extraction pour des moquettes de bureaux ?",
          answer: `<p>On choisit selon l’objectif : profondeur vs rapidité. Si l’encrassement est incrusté (taches, odeurs), l’injection-extraction est pertinente. Si la priorité est la remise en service rapide, une méthode basse humidité peut suffire, avec un rendu visuel amélioré et un séchage plus court.</p>`,
        },
        {
          question:
            "Autour de la gare Nogent–Le Perreux (côté Le Perreux), comment traitez-vous les zones de passage qui ternissent vite ?",
          answer: `<p>On renforce le traitement sur les bandes de trafic : pré-traitement, passes supplémentaires, puis extraction soignée. Sur ces zones, l’objectif est de réduire les traces grasses, raviver l’aspect et limiter les odeurs. On explique aussi ce qui relève d’une usure des fibres, surtout sur moquettes anciennes.</p>`,
        },
        {
          question:
            "Dans les résidences sécurisées, quel délai de séchage annoncez-vous pour rouvrir les circulations ?",
          answer: `<p>Le délai dépend de la méthode et de l’aération possible. En injection-extraction, on vise une humidité résiduelle faible grâce à l’aspiration, puis on recommande aération et limitation du passage. En basse humidité, la remise en circulation est souvent plus rapide. On annonce toujours une fourchette réaliste, selon saison et épaisseur.</p>`,
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
        "Un parking assaini, c’est un sol moins gras, des circulations plus lisibles, et des zones critiques (rampes, angles, rigoles) traitées pour limiter l’encrassement qui revient trop vite.",
      whyUsBullets: [
        "Joncs-Marins : sous-sols récents, accès sécurisés, organisation indispensable dès l’arrivée.",
        "Autolaveuse + dégraissage ciblé, avec gestion précise des eaux de lavage.",
        "Zonage et rotation véhicules pour réduire la gêne et sécuriser les circulations.",
      ],

      uniqueIntro: `<p>Quand un parking commence à “noircir”, le constat est généralement immédiat : poussière grasse, traces d’hydrocarbures, marquages qui se lisent moins, et zones glissantes sur les passages. Au Perreux-sur-Marne, on retrouve ce scénario dans les sous-sols de <strong>résidences récentes des Joncs-Marins</strong>, mais aussi sur des niveaux plus profonds où l’air circule peu et où les dépôts s’installent plus durablement.</p>
<p class="mt-4">La proximité de l’<strong>A86</strong> accentue souvent la présence de particules noires et grasses : un simple lavage ne suffit pas si le dégraissage n’est pas cadré et si la gestion des eaux n’est pas maîtrisée. L’accès est aussi un sujet : digicodes, sas, circulation interne, et parfois stationnement contraint en surface pour la logistique. Un <strong>nettoyage parking Le Perreux-sur-Marne</strong> efficace se joue surtout sur l’organisation : zonage, rotation des véhicules, et traitement rigoureux des rampes, pieds de murs et angles morts.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Zone A — Préparation et sécurité.</h3>
<p> Diagnostic du revêtement (béton lissé, résine, peinture) et repérage des évacuations. Balayage/ramassage, puis balisage et zonage pour maintenir une circulation contrôlée et organiser la rotation des véhicules.</p>

<h3>Zone B — Lavage mécanisé et dégraissage.</h3>
<p> Passage à l’<strong>autolaveuse</strong> (brossage + aspiration simultanés) pour décoller et récupérer les salissures. Sur taches d’huile/essence, <strong>dégraissage ciblé</strong> avec produit adapté, et si besoin haute pression contrôlée sur zones très encrassées (sans détériorer le support).</p>

<h3>Zone C — Finitions et gestion des eaux.</h3>
<p> Traitement des zones critiques : rampes, angles, rigoles, pieds de murs. Gestion stricte des eaux de lavage selon les contraintes du site, puis contrôle du rendu et conseils de fréquence en fonction du trafic et de l’exposition aux dépôts.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

    specificChallenges: [
  "Les dépôts gras liés à l’A86 se fixent vite sur béton lissé, surtout en sous-sol.",
  "Les accès par digicodes/sas imposent une coordination stricte dès la préparation.",
  "Les rampes et angles morts concentrent l’encrassement et demandent un traitement dédié.",
  "Sans plan de rotation véhicules, le lavage mécanisé perd en efficacité et en sécurité.",
],

      faqAdditions: [
        {
          question:
            "Sur les parkings souterrains des Joncs-Marins, utilisez-vous plutôt autolaveuse ou haute pression ?",
          answer: `<p>Le plus souvent, l’autolaveuse est la base : elle brosse et récupère l’eau sale en continu, ce qui limite les flaques. La haute pression intervient en complément sur zones très marquées ou reliefs spécifiques, avec une pression contrôlée. Le choix dépend du revêtement et du niveau d’hydrocarbures, pas d’une règle unique.</p>`,
        },
        {
          question:
            "Avec les dépôts noirs liés à l’A86, comment traitez-vous les traces grasses qui reviennent vite ?",
          answer: `<p>On combine dégraissage ciblé et lavage mécanisé, puis on insiste sur les zones de trafic et les virages. Les dépôts “noirs” sont souvent un mélange poussière + gras : sans produit adapté et sans récupération efficace, ils s’étalent. On explique aussi une fréquence d’entretien réaliste selon l’exposition et le trafic.</p>`,
        },
        {
          question:
            "Quand l’accès est sécurisé (digicodes/sas) et que la logistique est compliquée, comment organisez-vous la gestion des eaux ?",
          answer: `<p>On repère les évacuations et on planifie le chantier par secteurs, avec un balisage clair. L’objectif est de contrôler les volumes d’eau, éviter les ruissellements hors zone et récupérer au maximum via l’autolaveuse. Les contraintes d’accès sont intégrées au déroulé : timing, point de dépose, et circulation interne.</p>`,
        },
        {
          question:
            "Dans des sous-sols profonds, comment traitez-vous rampes, angles, pieds de murs et rigoles ?",
          answer: `<p>Ces zones sont traitées comme des “points durs” : passages supplémentaires, brossage renforcé, et dégraissage local si nécessaire. Les pieds de murs et angles retiennent la poussière grasse, tandis que les rigoles concentrent les résidus. On finit par un contrôle du rendu et de l’adhérence, sans promesse absolue.</p>`,
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
        "Un balcon remis en état, c’est un sol plus clair, des joints moins noircis, et un espace qu’on réutilise sans traîner des salissures à l’intérieur, même après une période humide.",
      whyUsBullets: [
        "Bords de Marne : humidité et verdissement récurrents, approche adaptée au support.",
        "Pression contrôlée, brossage manuel, produits choisis selon carrelage/béton.",
        "Gestion de l’eau pensée pour éviter les coulures et protéger les voisins.",
      ],

      uniqueIntro: `<p>Après quelques mois sans entretien, un balcon change vite d’aspect : dépôts verts qui s’installent, traces grasses (barbecue, cuisine), joints qui noircissent et surface qui devient moins agréable au quotidien. Au Perreux-sur-Marne, l’environnement de la <strong>Promenade des Bords de Marne</strong> amène souvent plus d’humidité et de végétation : le verdissement revient facilement si le support n’est pas traité correctement.</p>
<p class="mt-4">Sur beaucoup d’immeubles, on rencontre des <strong>balcons en carrelage</strong> (et parfois béton sur résidences plus récentes) : la pression et les produits doivent être adaptés pour ne pas fragiliser joints et revêtements. Enfin, l’accès compte : quais parfois encombrés le week-end, rues étroites, et voisinage en dessous. Un <strong>nettoyage balcon Le Perreux-sur-Marne</strong> se prépare autant qu’il se réalise, surtout pour maîtriser l’eau et éviter les coulures.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Problème : salissures incrustées + joints fragiles.</h3>
<p> On commence par protéger menuiseries, bas de façade et éléments sensibles. Mobilier et plantes sont déplacés/isolés, puis les gros dépôts (terre, feuilles, résidus) sont retirés avant tout lavage.</p>

<h3>Solution : traitement adapté au support.</h3>
<p> Application d’un produit compatible (carrelage, béton, dalles sur plots, bois composite), brossage manuel sur zones délicates, puis rinçage maîtrisé. Si une haute pression est utile, elle reste <strong>contrôlée</strong> : l’objectif est l’efficacité sans abîmer les joints.</p>

<h3>Point clé : gestion anti-ruissellement et finitions.</h3>
<p> On limite l’eau, on canalise les écoulements et on protège le voisinage du dessous. Nettoyage des garde-corps, vitres accessibles et murs mitoyens si concernés, puis séchage et conseils simples pour espacer le retour des dépôts verts.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>
specificChallenges: [
  "Proche des Bords de Marne, les dépôts verts reviennent vite sur sols humides et ombragés.",
  "Les joints noircis exigent un brossage précis plus qu’un lavage “fort”.",
  "Les quais peuvent compliquer l’accès le week-end : logistique à caler.",
  "Le voisinage impose une gestion anti-coulures stricte, surtout en étage.",
],

      faqAdditions: [
        {
          question:
            "Aux Bords de Marne, l’humidité favorise la mousse : comment traitez-vous sans abîmer les joints ?",
          answer: `<p>On évite la sur-pression et on privilégie un produit adapté + brossage, puis un rinçage maîtrisé. Sur joints fragiles, la clé est d’agir progressivement plutôt que “d’attaquer” le support. On explique aussi les limites : un joint déjà détérioré ne redevient pas neuf, mais l’aspect et la propreté obtenue s’améliorent nettement.</p>`,
        },
        {
          question:
            "Quand un balcon est en carrelage (ou béton en résidence récente), comment adaptez-vous méthode et pression ?",
          answer: `<p>On commence par identifier le support et l’état des joints. Sur carrelage, on vise l’efficacité sans décoller les joints ; sur béton, on contrôle l’agressivité pour éviter d’ouvrir la surface. Si une haute pression est utile, elle reste réglée, et certaines zones se font au brossage manuel pour garder le contrôle.</p>`,
        },
        {
          question:
            "Sur les quais de Marne souvent fréquentés le week-end, comment limitez-vous ruissellements et nuisances ?",
          answer: `<p>On prépare le chantier : protections, choix du point de rinçage, volumes d’eau limités. L’objectif est de maîtriser l’écoulement et d’éviter les coulures chez les voisins du dessous. Quand l’accès est plus contraint, on privilégie des séquences courtes, avec un nettoyage plus “piloté” que massivement arrosé.</p>`,
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
        "Assainir un balcon souillé par des fientes, c’est retrouver un espace utilisable, avec un nettoyage contrôlé et une désinfection appliquée dans les règles, sans dispersion inutile de poussières.",
      whyUsBullets: [
        "Secteur Pont de Bry : passages d’oiseaux, retours possibles, assainissement cadré.",
        "EPI, confinement, humidification et désinfection virucide/bactéricide appliquée au bon temps.",
        "Déchets sécurisés, aération expliquée, reprise d’usage planifiée sans précipitation.",
      ],

      uniqueIntro: `<p>Que faire quand un balcon devient inutilisable à cause des pigeons ? Au Perreux-sur-Marne, certaines zones concentrent davantage de passages d’oiseaux, notamment autour du <strong>Pont de Bry</strong>. Les conséquences sont souvent les mêmes : odeurs tenaces, traces incrustées, dépôts qui collent au sol et aux garde-corps, et inconfort pour les occupants.</p>
<p class="mt-4">Le sujet n’est pas seulement “visuel”. Les fientes sèchent, se fragmentent, et la poussière peut irriter : c’est pour cela qu’on travaille avec un <strong>protocole de sécurité</strong> et une <strong>désinfection</strong> systématique. Le bâti local joue aussi : sur des <strong>corniches et toitures de villas Art Nouveau</strong>, les perchoirs sont fréquents, et la contamination peut revenir si l’environnement reste favorable. Enfin, la proximité de la Marne apporte parfois plus d’humidité, ce qui fixe les salissures et rend le traitement plus long si on ne prépare pas correctement. Un <strong>nettoyage fientes pigeons Le Perreux-sur-Marne</strong> sérieux commence par la protection, puis l’assainissement, puis la remise en état.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Objectif : assainir sans dispersion.</h3>
<p> On démarre par les EPI (FFP2 minimum, gants, lunettes, combinaison) et un confinement/bâchage pour protéger l’intérieur et limiter les projections vers le voisinage.</p>

<h3>Méthode : humidifier, retirer, nettoyer.</h3>
<p> Humidification préalable pour éviter l’envol de particules, puis ramassage et conditionnement en sacs étanches. Nettoyage des supports (sol, rebords, garde-corps, vitrages accessibles, murs mitoyens si concernés), avec produits adaptés pour décoller sans détériorer le support.</p>

<h3>Désinfection : étape obligatoire.</h3>
<p> Application d’un désinfectant virucide/bactéricide avec respect du temps de contact, puis rinçage si nécessaire. Aération et délai avant réutilisation expliqués clairement. En option, on peut discuter de solutions de dissuasion (pics/filets) selon la configuration.</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

   specificChallenges: [
  "Autour du Pont de Bry, la présence d’oiseaux peut rendre les souillures récurrentes.",
  "Les supports anciens (corniches, ferronneries) demandent une action contrôlée pour ne pas abîmer.",
  "L’humidité proche de la Marne fixe les dépôts et renforce les odeurs.",
  "Sans confinement, la poussière se disperse : la préparation est déterminante.",
],

      faqAdditions: [
        {
          question:
            "Sur un balcon proche des Bords de Marne, comment protégez-vous l’intérieur et limitez-vous les projections vers les voisins ?",
          answer: `<p>On met en place un bâchage et on travaille “humide” dès le départ pour éviter l’envol de particules. Les zones de passage (seuil, baie vitrée) sont protégées, et le ramassage se fait avant tout brossage. Le but est de contenir, puis d’assainir, plutôt que de disperser la salissure en voulant aller trop vite.</p>`,
        },
        {
          question:
            "Autour du Pont de Bry, quelles protections et quelles étapes d’humidification appliquez-vous avant d’enlever les fientes ?",
          answer: `<p>EPI complets (FFP2 minimum, gants, lunettes, combinaison), puis humidification préalable des dépôts. Cette étape réduit fortement la poussière. Ensuite seulement : retrait en sacs étanches, nettoyage des supports et désinfection. On explique le déroulé et les délais d’aération pour que l’occupant sache quand réutiliser l’espace.</p>`,
        },
        {
          question:
            "Pour une désinfection à réaliser rapidement en Centre-Ville, quelles étapes suivez-vous et quel temps de contact respectez-vous ?",
          answer: `<p>On ne “saute” pas les étapes : confinement, humidification, retrait, nettoyage, puis désinfection virucide/bactéricide avec temps de contact respecté. Le temps exact dépend du produit utilisé, mais l’idée reste la même : laisser agir suffisamment longtemps avant rinçage/aération. C’est ce qui conditionne l’hygiène obtenue, pas la vitesse d’application.</p>`,
        },
        {
          question:
            "Sur des corniches de villas Art Nouveau, comment intervenez-vous sans abîmer les supports tout en retirant fientes et salissures ?",
          answer: `<p>On privilégie des gestes contrôlés : humidification, retrait progressif, puis nettoyage avec produits compatibles. Sur supports anciens, on évite les actions agressives. Si la zone est difficile d’accès, on cadre aussi la sécurité et la faisabilité. L’objectif est un assainissement sérieux, sans détérioration du relief ou des matériaux.</p>`,
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
        "Un textile d’ameublement bien entretenu retient moins les odeurs, marque moins au toucher, et limite l’accumulation d’allergènes, tout en gardant un aspect plus homogène sur les zones d’assise.",
      whyUsBullets: [
        "Île des Loups : confort résidentiel, prestations à domicile adaptées aux accès.",
        "Détachage ciblé + injection-extraction, extraction forte pour limiter l’humidité.",
        "Créneaux calés, passage discret, remise en usage rapide selon textile et aération.",
      ],

      uniqueIntro: `<p>On le voit tout de suite : un canapé qui a vécu, un tapis terni, ou un matelas marqué par un accident du quotidien change l’ambiance d’une pièce. Au Perreux-sur-Marne, l’habitat est souvent résidentiel, avec <strong>pavillons et meulières</strong> mais aussi des appartements où la vie de famille (enfants, animaux) laisse des traces : taches de boisson, sébum, odeurs, poussières et allergènes qui se fixent dans les fibres.</p>
<p class="mt-4">Dans des secteurs calmes comme <strong>l’Île des Loups</strong>, l’enjeu est surtout le confort : retrouver un textile plus sain, sans détremper, et avec un séchage cohérent selon l’épaisseur. Sur l’<strong>Avenue du Maréchal Joffre</strong>, on rencontre aussi des petites structures (cabinets, salles d’attente) qui veulent un rendu propre et discret, sans immobiliser les lieux trop longtemps. Un <strong>nettoyage canapé Le Perreux-sur-Marne</strong> efficace repose sur un diagnostic du tissu, un détachage ciblé quand il le faut, et une extraction sérieuse pour limiter l’humidité résiduelle.</p>`,
      // - 2 à 3 paragraphes <p>...</p>
      // - HTML autorisé
      // - ajouter <p class="mt-4"> à partir du 2ᵉ paragraphe pour l’espacement

      uniqueDeepDive: `<h3>Zone 1 — Diagnostic et pré-traitement.</h3>
<p> On identifie le textile (coton, laine, synthétique, velours, cuir/simili), l’origine des taches (café, vin, encre, urine, gras) et les zones sensibles. Pré-traitement ciblé, notamment sur taches anciennes et odeurs.</p>

<h3>Zone 2 — Nettoyage profond par support.</h3>
<p> Sur canapé/fauteuil et matelas, <strong>injection-extraction</strong> avec réglages adaptés, puis passes renforcées sur zones d’assise ou marques localisées. Sur tapis, on travaille par bandes pour contrôler le mouillage et récupérer efficacement les salissures.</p>

<h3>Zone 3 — Extraction maximale et consignes de séchage.</h3>
<p> Aspiration puissante pour limiter l’humidité, puis recommandations simples : aération, chauffage modéré si possible, et délai avant réutilisation selon saison/épaisseur. On termine par un contrôle du rendu et des conseils de fréquence (famille, animaux, allergies).</p>`,
      // - Sections structurées en <h3> + <p>
      // - Après chaque <h3> : au moins un <p>
      // - <p class="mt-4"> uniquement à partir du 2e paragraphe d’un même bloc
      // - Listes <ul><li> autorisées, mais jamais directement après <h3>

     specificChallenges: [
  "L’accès peut être plus contraint sur l’Île des Loups : logistique à anticiper pour le matériel.",
  "Les taches “mixtes” (gras + poussière) demandent un pré-traitement précis.",
  "Les odeurs d’animaux s’incrustent dans les fibres si l’extraction est trop faible.",
  "Sur l’avenue du Maréchal Joffre, la discrétion et le timing comptent pour ne pas perturber l’accueil.",
],

      faqAdditions: [
        {
          question:
            "Dans des maisons de type meulière, comment diagnostiquez-vous un canapé tissu avant de choisir la méthode ?",
          answer: `<p>On vérifie la nature du tissu, la tenue des couleurs et les zones fragiles, puis on identifie les taches (café, tanin, gras, urine). Ensuite, on choisit l’approche : injection-extraction pour un nettoyage profond, ou détachage ciblé renforcé si l’objectif est de traiter des marques localisées avec un mouillage maîtrisé.</p>`,
        },
        {
          question:
            "Si l’accès est plus restreint à l’Île des Loups, comment anticipez-vous stationnement et acheminement du matériel ?",
          answer: `<p>On cale le point de dépose et l’itinéraire avant de venir, pour éviter des allers-retours inutiles. Le matériel est organisé “compact”, et on protège les zones de passage dans le logement. Cette préparation permet de garder un déroulé propre et d’avancer sans gêner l’occupant plus que nécessaire.</p>`,
        },
        {
          question:
            "En cas d’urgence sur un matelas (accident enfant), comment planifiez-vous une venue rapide quand le stationnement est compliqué ?",
          answer: `<p>On demande quelques infos simples (nature de la tache, ancienneté, accès), puis on propose un créneau réaliste. Sur les secteurs où le stationnement est contraint, on anticipe la logistique pour arriver prêt à travailler. L’objectif est de traiter vite, mais correctement : pré-traitement, extraction et séchage expliqué.</p>`,
        },
        {
          question:
            "Pour des odeurs incrustées (animaux, humidité), comment les neutralisez-vous sur canapé ou tapis ?",
          answer: `<p>On combine un pré-traitement ciblé et une extraction sérieuse, car l’odeur est souvent “dans” la fibre, pas seulement en surface. Selon le cas, on insiste sur les zones imprégnées (assise, entrée, bords de tapis) et on donne des consignes d’aération. On annonce aussi les limites possibles si l’imprégnation est ancienne.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "Remise en état avant état des lieux, après travaux ou déménagement, avec une attention particulière aux finitions et aux matériaux des pavillons comme aux résidences de standing du centre.",

  whyUsBullets: [
    "Approche “pavillon & standing” : finitions soignées pour parquet véritable, escaliers étroits, et pièces lumineuses où la moindre trace se voit.",
    "Organisation terrain : créneaux et accès anticipés (digicode, gardien, stationnement), notamment côté Centre-Ville et Gare Nogent–Le Perreux.",
    "Focus vitrages : traitement des vitres accessibles, rebords et encadrements, utile avec la suie/poussière liée à l’A4 et aux axes (D86).",
  ],

  uniqueIntro: `<p>Au Perreux-sur-Marne, une remise en état réussie dépend souvent des détails : parquet véritable dans les villas, surfaces vitrées plus complexes (vérandas, bow-windows), et finitions visibles dès l’entrée. Entre les rues commerçantes du Centre-Ville (Avenue Ledru-Rollin) et les secteurs plus résidentiels vers le <strong>Pont de Bry</strong> ou les bords de Marne, les attentes restent élevées : un logement propre “au premier regard”, sans zones oubliées.</p>
<p class="mt-4">Le tissu local est très majoritairement pavillonnaire, avec des demeures de caractère et des maisons rénovées. Cela implique de travailler proprement, sans “décaler” le résultat : on évite l’excès d’eau sur les bois, on traite les joints et le calcaire de façon contrôlée, et on finit par un contrôle visuel des points qui comptent en état des lieux (cuisine, salle d’eau, sols, vitrages accessibles).</p>
<p class="mt-4">Pour un <strong>nettoyage appartement maison Le Perreux-sur-Marne</strong>, Klinova procède avec un déroulé clair : repérage rapide (surfaces, matériaux, priorités), remise en état pièce par pièce, puis finitions. <strong>Le périmètre de l’intervention est toujours défini avant l’intervention.</strong> C’est particulièrement utile dans les résidences de standing (gardien, badge) et quand l’accès est plus contraint autour de la gare Nogent–Le Perreux.</p>`,

  uniqueDeepDive: `<h3>T1 : Accès, organisation et protection des matériaux</h3>
<p>Le Perreux combine centre-ville dense et quartiers pavillonnaires calmes. Nous cadrons l’accès (clé, digicode, présence d’un gardien) et l’organisation (étage, escaliers, zones à prioriser) avant de démarrer. Dans les pavillons, l’objectif est aussi de protéger les matériaux : parquets, plinthes, menuiseries, et zones fragiles autour des vitrages.</p>

<h3>T2 : Remise en état cuisine / salle de bain avec gestion du calcaire</h3>
<p>La cuisine et la salle d’eau concentrent la majorité des points de contrôle en état des lieux. Nous réalisons un <strong>dégraissage cuisine</strong> ciblé (plans, crédences, façades accessibles selon l’état) et un <strong>détartrage sanitaires</strong> adapté au calcaire du 94 (robinetterie, parois, zones d’écoulement, joints si nécessaire). Les sols sont traités selon leur nature : parquet, carrelage, revêtements plus récents en résidence.</p>

<h3>T3 : Vitrages accessibles, finitions et contrôle final “état des lieux”</h3>
<p>Les logements perreuxiens sont souvent lumineux : une finition imparfaite se remarque vite. Nous terminons par les vitrages accessibles (vitres, rebords, encadrements), puis un contrôle des points visibles : traces au sol, marques sur portes et interrupteurs, bords de plinthes, et zones de passage. En fin d’intervention, une aération est recommandée pour retrouver rapidement un logement confortable.</p>`,

  specificChallenges: [
    "Bâti pavillonnaire de standing : parquet véritable, escaliers étroits, finitions très visibles (attentes élevées).",
    "Vitrages complexes : vérandas et bow-windows, rebords à reprendre pour un rendu homogène.",
    "Accès centre-ville : stationnement plus compliqué autour de la mairie et d’Avenue Ledru-Rollin, horaires sensibles (écoles/marché).",
    "Suie et poussières : influence de l’A4 et des axes (D86) sur vitrages et rebords bas.",
  ],

  faqAdditions: [
    {
      question:
        "Faites-vous des remises en état avant état des lieux au Perreux-sur-Marne (94170) ?",
      answer: `<p>Oui. Nous intervenons régulièrement avant restitution : nettoyage complet, focus cuisine/salle d’eau, sols et finitions visibles. Le périmètre est défini en amont (accès, étage, vitrages accessibles) pour éviter les surprises le jour J.</p>`,
    },
    {
      question:
        "Pouvez-vous intervenir dans une maison avec parquet et pièces vitrées (véranda, bow-window) ?",
      answer: `<p>Oui. Nous adaptons les gestes et l’humidité pour préserver le parquet et obtenir un rendu propre sur les vitrages accessibles, encadrements et rebords. C’est souvent ce qui “fait” la différence dans les villas et demeures de caractère.</p>`,
    },
    {
      question:
        "Proposez-vous un nettoyage après travaux au Perreux-sur-Marne ?",
      answer: `<p>Oui. Après travaux, l’enjeu principal est la poussière fine : nous structurons le dépoussiérage, traitons les surfaces et finissons par les détails. Le but est un logement utilisable rapidement, sans traces résiduelles visibles.</p>`,
    },
    {
      question:
        "Le stationnement est-il un problème pour une intervention ?",
      answer: `<p>Le centre-ville peut être plus contraint. Nous anticipons le créneau et l’accès (badge, gardien), et nous privilégions une organisation simple pour limiter la gêne, surtout autour de la mairie et des axes les plus fréquentés.</p>`,
    },
  ],

  ctaOverride: "",
},

  ],
};

export default city;
