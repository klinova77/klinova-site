import type { City } from "~/types/geo";

const city: City = {
  name: "Montrouge",
  slug: "montrouge",
  postalCodes: [
    "92120",
  ],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova intervient à Montrouge pour l'entretien des parties communes, parkings souterrains et espaces privatifs. Une organisation adaptée à la densité urbaine de la commune, avec des équipes réactives et un accès Vigik pour les résidences sécurisées.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // hubIntro : DOIT suivre ce format :
  // - 2 paragraphes <p>...</p>
  // - puis une liste à puces <ul><li>...</li></ul>
  // - HTML autorisé : <p>, <p class="mt-4">, <ul>, <li>, <strong>, <br>
  hubIntro: `<p>Montrouge concentre sur un territoire restreint une densité exceptionnelle de logements et de bureaux. Klinova s'y positionne comme partenaire terrain, capable de coordonner des interventions régulières ou ponctuelles sans perturber le quotidien des occupants ni l'activité des entreprises.</p>
<p class="mt-4">Notre approche repose sur une planification rigoureuse et une connaissance des contraintes locales : accès sécurisés, stationnement limité, horaires décalés. Chaque prestation fait l'objet d'un suivi clair, avec reporting disponible pour les gestionnaires qui le souhaitent.</p>
<ul>
  <li><strong>Coordination accès :</strong> Badges Vigik, contact gardiens, créneaux validés en amont pour éviter les allers-retours inutiles et garantir l'accès aux parties communes ou parkings.</li>
  <li><strong>Intervention discrète :</strong> Horaires adaptés aux contraintes des résidences et bureaux, matériel silencieux privilégié en journée, balisage systématique des zones traitées.</li>
  <li><strong>Suivi transparent :</strong> Compte-rendu d'intervention transmis aux syndics ou gestionnaires, photos avant/après sur demande, interlocuteur unique pour le suivi des prestations.</li>
</ul>`,

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Densité urbaine extrême</strong> : accès aux immeubles souvent contraints par digicodes, badges et gardiens.",
    "<strong>Parkings souterrains omniprésents</strong> : rampes étroites, ventilation limitée, sols encrassés par le trafic quotidien.",
    "<strong>Pollution routière marquée</strong> : dépôts noirs sur balcons et façades le long de la N20 et des axes secondaires.",
    "<strong>Stationnement très limité</strong> : planification indispensable pour le positionnement des véhicules d'intervention.",
    "<strong>Mixité bureaux/logements</strong> : horaires d'intervention à adapter selon les occupants et l'activité tertiaire.",
    "<strong>Bâti hétérogène</strong> : immeubles anciens sans ascenseur côtoyant des résidences récentes avec accès sécurisés.",
  ],

  // Texte brut uniquement
  districts: [
    "Le Vieux Montrouge",
    "Ferry-Buffalo",
    "Les Portes de Montrouge",
    "Montrouge Est",
    "Jean Jaurès",
    "Plein Sud",
  ],
  nearbyCities: [
    "Arcueil",
    "Bagneux",
    "Paris 14e",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Montrouge",
    "Le Beffroi",
    "Station Mairie de Montrouge (M4)",
    "Station Barbara (M4)",
    "Allées Jean Jaurès",
    "Place Émile Cresp",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
faq: [
  {
    question: "Comment organisez-vous l'accès aux résidences sécurisées de Montrouge ?",
    answer: `<p>Nos équipes peuvent intervenir avec <strong>accès Vigik</strong> et coordonnent systématiquement avec le gardien ou le syndic avant le passage. Le créneau est validé en amont pour éviter l'attente sur place. En l'absence de gardien, nous utilisons les codes ou modalités transmis par le gestionnaire.</p>`,
  },
  {
    question: "Pouvez-vous intervenir en dehors des heures de bureau pour limiter la gêne ?",
    answer: `<p>Oui, nous proposons des créneaux tôt le matin ou en fin de journée selon les besoins. Pour les parkings ou parties communes, un horaire décalé peut être envisagé après validation avec le syndic. Cette flexibilité permet de préserver le quotidien des résidents et l'activité des entreprises.</p>`,
  },
  {
    question: "Quel délai pour obtenir un devis après une demande à Montrouge ?",
    answer: `<p>Le devis est généralement transmis sous <strong>24 à 48 heures</strong> après réception des informations nécessaires. Si une visite technique s'impose, elle est planifiée rapidement compte tenu de nos passages réguliers dans le secteur. Le chiffrage précise les prestations, surfaces et conditions d'accès.</p>`,
  },
  {
    question: "Comment gérez-vous le stationnement lors des interventions ?",
    answer: `<p>Nous anticipons la contrainte en identifiant les solutions de stationnement à proximité (parkings accessibles, créneaux de livraison autorisés). Pour les interventions longues, nous privilégions un parking public proche quand c'est pertinent. Le matériel est organisé pour être acheminé en <strong>une seule rotation</strong> autant que possible.</p>`,
  },
],


  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => The format injects only services present in the request.
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction en profondeur des salissures incrustées dans vos moquettes, avec séchage maîtrisé pour une remise en service rapide adaptée aux contraintes de vos locaux.",
      whyUsBullets: [
        "Connaissance des configurations tertiaires montrougiennes, des sièges sociaux aux salles du Beffroi.",
        "Matériel injection-extraction professionnel adapté aux dalles textiles comme au velours résidentiel.",
        "Interventions planifiées en soirée ou tôt le matin pour limiter la gêne dans vos locaux.",
      ],
      uniqueIntro: `<p>Après quelques mois d'usage intensif, les moquettes des bureaux situés autour du <strong>Campus Evergreen</strong> accumulent poussières fines et traces de passage. Les fibres textiles retiennent particules urbaines et résidus de semelles, créant un voile grisâtre qui ternit l'ensemble des surfaces. Dans les open spaces comme dans les couloirs de circulation, ce phénomène s'accentue avec le trafic quotidien des collaborateurs.</p>
<p class="mt-4">Un entretien adapté redonne aux <strong>dalles textiles</strong> leur aspect d'origine et améliore la qualité de l'air intérieur. Les copropriétés des immeubles années 70-90, équipées d'aiguilleté dans les parties communes, bénéficient également d'un ravivage qui valorise les espaces partagés. Pour les résidences de standing, le velours ras retrouve sa densité et son confort au toucher.</p>
<p class="mt-4">L'intervention s'organise selon vos contraintes horaires, avec diagnostic préalable du type de fibre et repérage des zones les plus sollicitées. Protection des plinthes et du mobilier, puis traitement méthodique section par section.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Identification du type de moquette : bouclée, velours, épaisse ou fine. Repérage des taches spécifiques (café, tanin, graisses) et des zones de fort passage. Installation des protections sur les plinthes, bas de murs et pieds de mobilier.</p>
<p class="mt-4">Aspiration préalable pour éliminer les particules libres avant le traitement humide.</p>

<h3>Traitement par injection-extraction</h3>
<p>Application de la solution nettoyante adaptée au support, puis extraction immédiate par aspiration puissante. Les zones de trafic reçoivent plusieurs passes pour déloger les salissures incrustées en profondeur.</p>
<p class="mt-4">Détachage ciblé sur les marques anciennes identifiées lors du diagnostic.</p>

<h3>Gestion du séchage</h3>
<p>Extraction maximale de l'humidité résiduelle pour réduire le temps de séchage. Selon l'épaisseur de la moquette et la ventilation des locaux, comptez entre 4 et 8 heures avant circulation normale.</p>
<p class="mt-4">Consignes de non-piétinement transmises, avec recommandation de fréquence d'entretien selon l'intensité d'usage.</p>`,
      specificChallenges: [
        "Dalles textiles des open spaces : passages répétés et poussière urbaine incrustée.",
        "Moquettes des parties communes années 70-90 : fibres compactées par le trafic quotidien.",
        "Accès aux locaux tertiaires soumis à badge et PC sécurité : coordination préalable indispensable.",
        "Séchage à maîtriser pour remise en service rapide des espaces de travail.",
        "Stationnement matériel contraint : intervention organisée avec les parkings souterrains disponibles.",
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous l'accès aux bureaux sécurisés comme ceux du Campus Evergreen à Montrouge ?",
          answer: `<p>Nous coordonnons en amont avec votre PC sécurité ou facility manager. Badge temporaire, créneau validé, zones à traiter identifiées : l'intervention se déroule sans perturber l'activité des collaborateurs ni les protocoles d'accès en vigueur.</p>`,
        },
        {
          question: "Les taches anciennes sur les moquettes des copropriétés Ferry-Buffalo peuvent-elles être atténuées ?",
          answer: `<p>Les marques incrustées depuis plusieurs années répondent au détachage ciblé, avec des résultats variables selon l'ancienneté et la nature de la tache. Nous évaluons le potentiel de récupération lors du diagnostic et vous informons des limites prévisibles.</p>`,
        },
        {
          question: "Quel délai avant de pouvoir remarcher sur la moquette après votre passage ?",
          answer: `<p>Le temps de séchage dépend de l'épaisseur du textile et de la ventilation des locaux. Comptez généralement entre 4 et 8 heures. Nous maximisons l'extraction pour réduire ce délai et vous transmettons les consignes adaptées à votre configuration.</p>`,
        },
        {
          question: "Votre méthode convient-elle aux moquettes velours des résidences de standing près des Allées Jean Jaurès ?",
          answer: `<p>L'injection-extraction s'adapte aux fibres délicates du velours ras. La pression et le dosage sont ajustés pour préserver la densité du textile tout en éliminant les salissures. Le rendu retrouve souplesse et uniformité de teinte.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et coordination des accès pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains montrougiens, souvent anciens avec rampes hélicoïdales serrées et accès contraints.",
        "Autolaveuse professionnelle et dégraissants adaptés aux revêtements béton ou résine, avec gestion rigoureuse des eaux usées.",
        "Coordination préalable avec syndic ou gestionnaire pour planifier la rotation des véhicules et limiter la fermeture d'accès.",
      ],
      uniqueIntro: `<p>Les traces noires s'accumulent sur les sols des parkings souterrains du <strong>quartier Ferry-Buffalo</strong>, là où le trafic quotidien dépose huile, graisse et poussières urbaines. Dans les résidences construites entre les années 60 et 80, les revêtements béton brut absorbent ces salissures jusqu'à former un film gras difficile à éliminer sans équipement adapté.</p>
<p class="mt-4">Un sol de parking encrassé génère des remontées de plaintes en assemblée générale : odeurs persistantes, aspect négligé, glissance sur les rampes d'accès. Le dégraissage régulier permet de maintenir un niveau de propreté acceptable et de préserver la durabilité du revêtement, notamment dans les copropriétés où le stationnement souterrain reste la seule option face à la saturation de la voirie.</p>
<p class="mt-4">L'intervention s'organise en coordination avec le syndic ou le gestionnaire pour définir les créneaux adaptés, le balisage des zones et la rotation éventuelle des véhicules. Un compte-rendu avec photos documente l'état avant et après traitement.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute intervention, nous identifions le type de revêtement présent : béton brut, résine ou peinture. L'état des évacuations est vérifié pour garantir l'écoulement correct des eaux de lavage. Un balayage préalable élimine les débris grossiers, puis la signalétique de balisage est mise en place pour sécuriser les accès.</p>

<h3>Traitement mécanisé</h3>
<p>L'autolaveuse effectue plusieurs passes sur les allées de circulation. Un dégraissant adapté au support est appliqué sur les zones critiques : emplacements marqués par des fuites d'huile, pieds de murs, angles morts et rigoles. Les rampes d'accès reçoivent un traitement spécifique pour conserver leur adhérence.</p>

<h3>Gestion des eaux et finalisation</h3>
<p>Les eaux de lavage sont dirigées vers les évacuations existantes dans le respect des contraintes réglementaires. Un dépoussiérage des blocs lumineux et tuyauteries apparentes peut compléter l'intervention si demandé. Une recommandation de fréquence est transmise au gestionnaire selon le niveau de trafic constaté.</p>`,
      specificChallenges: [
        "Rampes hélicoïdales étroites dans les résidences denses : manœuvre autolaveuse adaptée.",
        "Revêtements béton brut des années 70 nécessitant un dégraissage en profondeur.",
        "Stationnement de surface saturé : intervention à planifier pour limiter les blocages.",
        "Rigoles et regards parfois obstrués par des dépôts anciens à dégager avant lavage.",
        "Coordination avec gardiens ou PC sécurité pour accès badges et balisage.",
      ],
      faqAdditions: [
        {
          question: "Comment gérez-vous les eaux de lavage dans les parkings souterrains des résidences de Montrouge ?",
          answer: `<p>Les eaux chargées sont dirigées vers les évacuations existantes après vérification de leur bon fonctionnement. Nous n'effectuons aucun rejet sauvage. Si les regards sont partiellement obstrués, un dégagement préalable est réalisé pour garantir l'écoulement correct pendant toute l'intervention.</p>`,
        },
        {
          question: "Comment organisez-vous le balisage et la sécurité des usagers pendant le nettoyage ?",
          answer: `<p>Une signalétique visible est installée aux entrées et sorties du parking avant le démarrage. Les zones en cours de traitement sont délimitées pour éviter tout passage. Si le parking dessert un immeuble à forte rotation, nous procédons par secteurs successifs pour maintenir un accès partiel.</p>`,
        },
        {
          question: "Quelle fréquence de décrassage recommandez-vous pour un parking à fort trafic comme ceux proches du stade Maurice Arnoux ?",
          answer: `<p>Un parking à usage intensif accumule rapidement huile et poussières. Nous conseillons généralement une intervention tous les quatre à six mois pour maintenir un niveau de propreté correct et prévenir l'incrustation des salissures dans le revêtement.</p>`,
        },
        {
          question: "Adaptez-vous le traitement selon le type de revêtement présent dans les parkings montrougiens ?",
          answer: `<p>Oui, le protocole varie selon le support. Un béton brut supporte un dégraissant alcalin et une pression plus élevée. Une résine ou une peinture de sol nécessite des produits neutres et une action mécanique modérée pour éviter toute dégradation du film protecteur.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Montrouge : traitement des dépôts, brossage adapté au support et gestion des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions montrougiennes : balcons sur axes passants, cours intérieures ombragées, attiques en plein soleil.",
        "Pression ajustée selon le revêtement : béton brut, carrelage ancien, dalles sur plots ou bois composite traités différemment.",
        "Protection systématique du voisinage : bâches, raclage dirigé et contrôle visuel avant départ pour éviter toute coulure.",
      ],
      uniqueIntro: `<p>Les traces noires sur le carrelage, les joints verdis par l'humidité, la fine pellicule grasse qui recouvre le garde-corps : sur les balcons donnant sur l'avenue de la République ou les résidences bordant les Allées Jean Jaurès, ces marques s'accumulent mois après mois. Le trafic dense de la N20 toute proche dépose une poussière chargée de particules qui adhère aux surfaces et résiste au simple jet d'eau.</p>
<p class="mt-4">Un balcon encrassé, c'est un espace qu'on délaisse. Les plantes restent à l'intérieur, le mobilier prend la poussière, et l'envie de profiter des beaux jours s'estompe. Dans les immeubles années 60-80 de Montrouge, où les balcons en béton brut ou carrelés sont courants, le noircissement devient visible en quelques saisons seulement. Retrouver une surface propre change l'usage quotidien de cet espace.</p>
<p class="mt-4">Notre intervention commence par un diagnostic du support et de l'exposition. Nous identifions les zones sensibles, protégeons vos menuiseries et plantes, puis adaptons la méthode au revêtement pour un résultat durable sans risque pour les joints.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Nous déplaçons le mobilier et bâchons les plantes. Les menuiseries, fenêtres et seuils sont protégés avec un film adhésif. Les gros débris — feuilles mortes, terre accumulée, résidus divers — sont retirés manuellement avant tout traitement humide.</p>

<h3>Traitement et brossage</h3>
<p>Un produit adapté au support est appliqué : formule douce pour carrelage et joints fragiles, dégraissant pour béton brut. Le brossage mécanique ou manuel déloge les dépôts verts et les traces grasses. Le garde-corps et les murs mitoyens accessibles sont traités dans la foulée.</p>
<p class="mt-4">Le rinçage s'effectue à pression contrôlée, suffisante pour évacuer les résidus sans fragiliser les joints ni projeter d'eau chez les voisins du dessous.</p>

<h3>Finalisation</h3>
<p>L'eau résiduelle est raclée vers les évacuations. Nous vérifions l'absence de coulures sur la façade et le balcon inférieur. Avant de partir, nous repositionnons votre mobilier et vous transmettons quelques conseils d'entretien pour espacer les prochaines interventions.</p>`,
      specificChallenges: [
        "Balcons exposés à la pollution de la N20 : dépôts noirs tenaces sur garde-corps et sols.",
        "Immeubles années 60-80 avec joints de carrelage poreux nécessitant une pression maîtrisée.",
        "Étages élevés fréquents : intervention sans accès extérieur, uniquement depuis l'appartement.",
        "Densité urbaine forte : gestion stricte des eaux pour préserver les voisins du dessous.",
        "Loggias des résidences récentes : surfaces vitrées à protéger pendant le traitement.",
      ],
      faqAdditions: [
        {
          question: "Comment évitez-vous les coulures chez mes voisins du dessous dans les résidences denses de Montrouge ?",
          answer: `<p>Nous posons des bâches de rétention sur les bords du balcon et raclons l'eau vers vos évacuations. Avant de quitter les lieux, nous vérifions visuellement l'étage inférieur et la façade pour nous assurer qu'aucune trace n'a été projetée.</p>`,
        },
        {
          question: "Les dépôts verts sur mon balcon exposé nord, côté Allées Jean Jaurès, peuvent-ils être éliminés durablement ?",
          answer: `<p>Nous appliquons un traitement anti-mousse après le brossage. L'exposition ombragée favorise la repousse, mais ce traitement ralentit significativement le retour des dépôts. Un entretien annuel suffit généralement à maintenir la surface propre.</p>`,
        },
        {
          question: "Mon balcon est en béton brut avec des dalles sur plots : adaptez-vous la méthode ?",
          answer: `<p>Oui. Le béton brut supporte un brossage plus appuyé et un rinçage à pression modérée. Les dalles sur plots sont soulevées si nécessaire pour nettoyer en dessous, puis repositionnées. Chaque support reçoit un traitement spécifique.</p>`,
        },
        {
          question: "À quelle fréquence recommandez-vous un nettoyage pour un balcon donnant sur l'avenue de la République ?",
          answer: `<p>L'exposition au trafic dense accélère l'encrassement. Nous conseillons une intervention tous les douze à dix-huit mois pour maintenir un aspect propre. Un rinçage léger entre deux passages peut prolonger le résultat.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes, avec désinfection des supports et conseils de protection pour éviter le retour des pigeons.",
      whyUsBullets: [
        "Connaissance des zones à risque à Montrouge : proximité des marchés, squares et corniches d'immeubles anciens.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection homologuée sur chaque intervention.",
        "Organisation discrète : bâchage soigné, évacuation des déchets en sacs étanches, coordination possible avec vos voisins.",
      ],
      uniqueIntro: `<p>Les traces blanchâtres et les amas secs sont visibles sur les garde-corps, le sol et parfois les vitrages. Autour du <strong>Square Renaudel</strong> ou des immeubles proches du <strong>Marché Victor Hugo</strong>, les balcons exposés aux passages de pigeons accumulent rapidement des dépôts tenaces. L'odeur s'installe, le linge ne peut plus sécher dehors, et l'espace devient inutilisable.</p>
<p class="mt-4">Dans les immeubles anciens du Vieux Montrouge, les corniches et les cours intérieures offrent des abris discrets aux oiseaux. Les balcons situés sous les toits ou face à des façades en brique reçoivent des fientes qui attaquent le béton et ternissent les peintures. Retrouver un balcon propre, c'est aussi retrouver un espace de vie quotidien sans gêne vis-à-vis des voisins.</p>
<p class="mt-4">L'intervention suit un protocole structuré : diagnostic de l'ampleur des souillures, protection de votre intérieur, traitement des surfaces et désinfection. Un échange préalable permet d'évaluer si des dispositifs anti-retour sont pertinents pour votre configuration.</p>`,
      uniqueDeepDive: `<h3>Sécurisation et confinement</h3>
<p>L'intervenant porte un équipement de protection complet : masque FFP2, gants, lunettes et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins du dessous.</p>
<p class="mt-4">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières potentiellement contaminées.</p>

<h3>Collecte et nettoyage des supports</h3>
<p>Les dépôts sont ramassés et conditionnés dans des sacs étanches. Le sol du balcon, le garde-corps, les vitrages et les éventuels murs mitoyens sont nettoyés méthodiquement.</p>
<p class="mt-4">Un produit désinfectant virucide et bactéricide est appliqué sur l'ensemble des surfaces, avec un temps de contact respecté pour éliminer les agents pathogènes.</p>

<h3>Rinçage et recommandations</h3>
<p>Un rinçage final prépare le balcon à une réutilisation rapide. Les déchets sont évacués de manière sécurisée.</p>
<p class="mt-4">Si votre configuration le justifie, des solutions de dissuasion sont proposées : pics sur les rebords, filets de protection ou gel répulsif pour limiter le risque de réinfestation.</p>`,
      specificChallenges: [
        "Balcons sous toits dans le Vieux Montrouge : niches à pigeons fréquentes.",
        "Proximité du Marché Victor Hugo : attractivité alimentaire pour les oiseaux.",
        "Immeubles en brique avec corniches : accumulation de fientes sur les rebords.",
        "Cours intérieures calmes : zones de nidification discrètes.",
        "Densité urbaine forte : sensibilité des voisins pendant l'intervention.",
      ],
      faqAdditions: [
        {
          question: "Les fientes de pigeons sur mon balcon près du Square Renaudel présentent-elles un risque sanitaire réel ?",
          answer: `<p>Les fientes sèches peuvent libérer des particules porteuses de bactéries ou de champignons. Le risque existe surtout lors du balayage à sec ou en cas d'accumulation prolongée. Une intervention avec humidification préalable et désinfection limite ces dangers pour vous et votre entourage.</p>`,
        },
        {
          question: "Comment fonctionne la désinfection après le retrait des fientes dans un immeuble ancien de Montrouge ?",
          answer: `<p>Après le nettoyage des surfaces, un produit virucide et bactéricide homologué est appliqué sur le sol, le garde-corps et les vitrages. Le temps de contact est respecté avant rinçage. Cette étape élimine les agents pathogènes résiduels présents dans les micro-porosités du béton ou de la peinture.</p>`,
        },
        {
          question: "Proposez-vous des solutions pour éviter le retour des pigeons sur un balcon proche de l'Église Saint-Jacques ?",
          answer: `<p>Selon la configuration de votre balcon, des dispositifs peuvent être installés après le nettoyage : pics anti-pigeons sur les rebords ou corniches, filets de protection pour les loggias, ou gel répulsif. Ces solutions sont proposées en fonction de l'exposition et du niveau d'infestation constaté.</p>`,
        },
        {
          question: "Comment gérez-vous les nuisances pour les voisins pendant l'intervention dans un immeuble dense de Montrouge ?",
          answer: `<p>La zone est confinée par bâchage pour éviter les projections vers les balcons inférieurs. L'humidification des fientes limite les poussières et les odeurs. Si nécessaire, nous pouvons prévenir les occupants concernés avant l'intervention pour limiter toute gêne.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage et rafraîchissement de vos canapés, tapis et matelas à Montrouge, avec extraction des salissures en profondeur et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Interventions régulières dans les résidences de Montrouge, du Vieux Montrouge aux immeubles récents des Portes de Montrouge.",
        "Détachage adapté à chaque fibre avec extraction textile professionnelle et contrôle du taux d'humidité résiduel.",
        "Créneaux souples en journée ou soirée, stationnement anticipé pour limiter la durée d'occupation dans votre logement.",
      ],
      uniqueIntro: `<p>Les traces sur l'assise du canapé, les auréoles au centre du tapis, les odeurs persistantes dans le matelas : ces marques du quotidien s'accumulent sans qu'on s'en rende compte. Dans les appartements proches des <strong>Allées Jean Jaurès</strong>, où les familles vivent avec enfants et animaux, les textiles d'ameublement absorbent café renversé, traces de pattes humides et poussière urbaine qui s'incruste fibre après fibre.</p>
<p class="mt-4">Un canapé taché ou un matelas imprégné d'odeurs change l'atmosphère d'un logement. Dans les <strong>immeubles années 70-80 du quartier Ferry-Buffalo</strong>, les appartements bien entretenus méritent des textiles à la hauteur. Un nettoyage adapté redonne aux tissus leur aspect d'origine, élimine les allergènes accumulés et neutralise les odeurs que l'aération seule ne suffit pas à dissiper.</p>
<p class="mt-4">Chaque intervention commence par un diagnostic du textile : nature des fibres, type de taches, état général. Cette évaluation permet d'adapter la méthode et d'anticiper le temps de séchage selon l'épaisseur du tissu et la ventilation du logement.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et pré-traitement</h3>
<p>Avant toute intervention, le textile est examiné : coton, velours, synthétique ou laine réagissent différemment. Un test discret sur une zone cachée valide la compatibilité du treatment. Les taches identifiées (café, urine, graisse) reçoivent un détachage ciblé avec des produits enzymatiques si nécessaire.</p>

<h3>Nettoyage par injection-extraction</h3>
<p>La méthode injecte une solution adaptée au cœur des fibres, puis aspire immédiatement l'eau chargée de salissures. La pression et la température sont ajustées selon la fragilité du tissu. Cette technique déloge les résidus incrustés sans détremper excessivement le textile.</p>

<h3>Extraction renforcée et consignes de séchage</h3>
<p>Plusieurs passages d'extraction retirent le maximum d'humidité. Le temps de séchage varie selon l'épaisseur : comptez 4 à 8 heures pour un canapé standard, davantage pour un matelas épais. Une bonne aération accélère le processus. Des conseils d'entretien vous sont transmis pour espacer les prochaines interventions.</p>`,
      specificChallenges: [
        "Taches anciennes incrustées dans les fibres après plusieurs mois sans traitement.",
        "Odeurs d'animaux persistantes malgré les produits ménagers classiques.",
        "Stationnement contraint en voirie : intervention planifiée pour limiter les allers-retours.",
        "Séchage à adapter selon la ventilation des appartements en étage élevé.",
        "Textiles fragiles (velours, laine) nécessitant un réglage de pression spécifique.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les odeurs d'urine animale sur un canapé dans un appartement du quartier Ferry-Buffalo ?",
          answer: `<p>Les odeurs d'urine nécessitent un traitement enzymatique qui décompose les molécules responsables, pas seulement un masquage. Le produit agit en profondeur dans les fibres avant l'extraction. Selon l'ancienneté de la tache, un second passage peut être nécessaire pour une neutralisation complète.</p>`,
        },
        {
          question: "Combien de temps avant de pouvoir réutiliser mon canapé après l'intervention à Montrouge ?",
          answer: `<p>Le séchage prend généralement 4 à 8 heures pour un canapé standard. Dans les appartements bien ventilés proches des Allées Jean Jaurès, ce délai peut être réduit. Nous conseillons d'ouvrir les fenêtres et d'éviter de s'asseoir tant que le tissu reste humide au toucher.</p>`,
        },
        {
          question: "Faut-il déplacer les meubles avant votre arrivée dans mon appartement à Montrouge ?",
          answer: `<p>Dégager l'accès au canapé ou au tapis facilite l'intervention et réduit la durée sur place. Si des objets fragiles se trouvent à proximité, les éloigner évite tout risque. Pour un matelas, retirer la literie suffit. Nous gérons le reste une fois sur place.</p>`,
        },
        {
          question: "À quelle fréquence faire nettoyer un canapé utilisé quotidiennement par une famille avec enfants ?",
          answer: `<p>Un entretien annuel convient pour un usage familial classique. Avec des enfants en bas âge ou des animaux, un passage tous les 6 à 8 mois limite l'accumulation de taches et d'allergènes. Entre deux interventions, aspirer régulièrement les coussins prolonge la propreté obtenue.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Remise en état complète de votre terrasse, avec traitement adapté au support et élimination des dépôts verts pour retrouver un espace extérieur agréable et sécurisé.",
      whyUsBullets: [
        "Connaissance des configurations montrougiennes : toits-terrasses en attique, expositions ombragées entre immeubles, vis-à-vis rapprochés.",
        "Maîtrise des supports variés — dalles sur plots, bois composite, béton — avec dosage de pression adapté à chaque matériau.",
        "Organisation respectueuse du voisinage : protection des plantations, gestion des écoulements, intervention en journée aux horaires convenus.",
      ],
      uniqueIntro: `<p>Après quelques saisons, les terrasses des attiques et derniers étages de Montrouge perdent leur aspect d'origine. Autour de la <strong>Place Émile Cresp</strong> comme dans les résidences du centre-ville, les dalles sur plots et surfaces en bois composite accumulent une pellicule grise tenace. La pollution urbaine, combinée à l'humidité des façades voisines, favorise l'apparition de mousses et de dépôts glissants qui rendent l'espace moins accueillant.</p>
<p class="mt-4">Une terrasse encrassée, c'est un prolongement du logement qu'on délaisse. Les repas en extérieur se font rares, le mobilier reste rangé, et cette surface payée au prix fort devient inutilisée plusieurs mois par an. Dans les <strong>immeubles récents de la ZAC des Portes de Montrouge</strong>, où les toits-terrasses privatifs sont fréquents, ce constat revient souvent chez les propriétaires.</p>
<p class="mt-4">Notre intervention redonne à votre terrasse son usage quotidien. Nous adaptons le traitement selon le revêtement — béton, bois, composite ou pierre — et gérons l'évacuation des eaux sans gêner le voisinage en contrebas.</p>`,
      uniqueDeepDive: `<h3>Préparation et protection</h3>
<p>Nous déplaçons le mobilier extérieur et bâchons les jardinières pour les préserver des projections. Les menuiseries — baies vitrées, portes-fenêtres — sont protégées avant toute manipulation d'eau ou de produit.</p>
<p class="mt-4">Un balayage soigneux élimine les feuilles mortes, la terre accumulée et les débris organiques qui encombrent la surface.</p>

<h3>Traitement adapté au support</h3>
<p>Le produit de nettoyage est sélectionné selon votre revêtement : dégraissant doux pour le bois composite, détergent alcalin pour le béton, solution neutre pour la pierre naturelle. Un brossage manuel ou mécanique décolle les salissures incrustées.</p>
<p class="mt-4">Si nécessaire, un traitement anti-mousse préventif est appliqué pour ralentir la réapparition des dépôts verts.</p>

<h3>Rinçage et finalisation</h3>
<p>Le rinçage s'effectue à pression contrôlée, adaptée à la porosité du matériau. L'eau est dirigée vers les points d'évacuation existants, en veillant à ne pas créer de ruissellement vers les étages inférieurs.</p>
<p class="mt-4">Nous remettons le mobilier en place et vous transmettons nos conseils d'entretien saisonnier.</p>`,
      specificChallenges: [
        "Noircissement accéléré par la pollution des axes proches et la densité urbaine de Montrouge.",
        "Mousses et lichens fréquents sur les terrasses exposées nord, à l'ombre des immeubles voisins.",
        "Dalles sur plots nécessitant un rinçage maîtrisé pour éviter les infiltrations.",
        "Accès souvent limité à l'appartement : protection des sols intérieurs indispensable.",
        "Gestion des écoulements vers les balcons ou terrasses des étages inférieurs.",
      ],
      faqAdditions: [
        {
          question: "Comment traitez-vous les mousses tenaces sur les terrasses ombragées des immeubles du centre de Montrouge ?",
          answer: `<p>Nous appliquons un produit anti-mousse adapté au support après le nettoyage principal. Ce treatment agit en profondeur pour décoller les dépôts verts existants et ralentir leur réapparition. Sur les terrasses exposées nord, entre immeubles rapprochés, nous recommandons un passage préventif annuel.</p>`,
        },
        {
          question: "Quelle différence de traitement entre une terrasse en bois composite et une en dalles béton dans les résidences de la ZAC des Portes de Montrouge ?",
          answer: `<p>Le bois composite supporte mal les pressions élevées et les produits agressifs : nous utilisons une brosse souple et un nettoyant neutre. Le béton tolère un brossage plus appuyé et un détergent alcalin pour éliminer les traces grasses. Chaque surface reçoit un traitement calibré à sa résistance.</p>`,
        },
        {
          question: "À quelle fréquence faut-il faire nettoyer une terrasse exposée à la pollution de l'avenue Aristide Briand ?",
          answer: `<p>Les terrasses proches des axes à fort trafic accumulent plus vite les particules fines et le noircissement. Un nettoyage annuel, idéalement au printemps avant la saison d'usage, suffit généralement. Si votre terrasse est également ombragée, un second passage à l'automne limite le développement des mousses.</p>`,
        },
        {
          question: "Utilisez-vous systématiquement la haute pression sur les terrasses des attiques montrougiens ?",
          answer: `<p>Non, la haute pression n'est pas adaptée à tous les supports. Sur le bois et les joints fragiles, nous privilégions un nettoyage basse pression ou manuel. Le béton et le carrelage résistant peuvent recevoir un rinçage plus puissant, toujours avec une buse adaptée pour éviter les dégradations.</p>`,
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre appartement après travaux, avant état des lieux ou lors d'un déménagement, avec un nettoyage minutieux de chaque pièce et surface.",
      whyUsBullets: [
        "Connaissance des typologies de logements montrougiens, du studio locatif aux appartements familiaux du Vieux Montrouge.",
        "Polyvalence sur tous les revêtements : parquet ancien, carrelage, PVC, avec produits adaptés à chaque support.",
        "Réactivité pour respecter vos délais d'état des lieux, coordination possible avec agences et artisans.",
      ],
      uniqueIntro: `<p>Après plusieurs semaines de travaux ou à l'approche d'un état des lieux, un appartement accumule poussières de chantier, traces de peinture et résidus divers. Dans les immeubles proches de la <strong>station Mairie de Montrouge</strong> ou du secteur <strong>Barbara</strong>, la rotation locative soutenue impose des délais serrés pour rendre un logement impeccable avant remise des clés.</p>
<p class="mt-4">Un nettoyage complet change la perception du bien : sols débarrassés des voiles de plâtre, vitres intérieures transparentes, sanitaires désinfectés. Dans les <strong>immeubles années 60-80 du quartier Ferry-Buffalo</strong>, les parquets anciens et carrelages d'époque demandent une attention particulière pour éviter les rayures lors du décrassage. Le résultat facilite la récupération du dépôt de garantie ou valorise le logement pour les nouveaux occupants.</p>
<p class="mt-4">L'intervention s'organise en coordination avec les agences immobilières, les artisans ou directement avec les particuliers. Le <strong>stationnement contraint</strong> sur la voirie montrougienne impose une logistique anticipée pour le matériel, souvent via les parkings souterrains du centre-ville.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Le technicien évalue l'état du logement : nature des résidus (poussière de chantier, traces de colle, salissures courantes), type de sols et surfaces fragiles à protéger. Les gravats ou déchets volumineux sont évacués si nécessaire. Cette étape permet d'adapter les produits et le temps d'intervention.</p>

<h3>Nettoyage pièce par pièce</h3>
<p>Le travail progresse méthodiquement : dépoussiérage des plafonds, murs et plinthes, puis aspiration et lavage des sols selon leur revêtement. Les pièces d'eau reçoivent un traitement spécifique : détartrage des sanitaires, dégraissage des plans de travail, nettoyage de la faïence et des joints. Les vitres intérieures sont incluses.</p>

<h3>Finitions et contrôle</h3>
<p>Les détails font la différence : interrupteurs, poignées, radiateurs, intérieurs de placards. Les éventuelles traces de peinture ou d'enduit sont traitées avec précaution. Un contrôle final vérifie chaque zone avant aération du logement et remise des clés si applicable.</p>`,
      specificChallenges: [
        "Rotation locative élevée près des stations de métro, délais souvent contraints.",
        "Parquets anciens dans le Vieux Montrouge nécessitant un nettoyage sans risque de rayure.",
        "Livraisons de programmes neufs en ZAC des Portes de Montrouge générant des fins de chantier régulières.",
        "Stationnement très limité imposant une organisation logistique anticipée.",
        "Immeubles sans ascenseur dans l'ancien, montée du matériel à prévoir.",
      ],
      faqAdditions: [
        {
          question: "Quel délai pour une intervention avant état des lieux près de la station Barbara ?",
          answer: `<p>Nous intervenons généralement sous 48 à 72 heures selon la taille du logement. Pour les situations urgentes liées à une remise de clés imminente, contactez-nous directement : nous adaptons notre planning quand c'est possible, en tenant compte des contraintes d'accès aux immeubles du secteur.</p>`,
        },
        {
          question: "Comment se coordonner avec mon agence immobilière pour un nettoyage à Montrouge ?",
          answer: `<p>Nous travaillons régulièrement avec les agences locales. La coordination peut inclure la récupération des clés, un créneau calé sur le planning de l'agent, et un compte-rendu après intervention. Nous nous adaptons aux procédures de chaque agence pour fluidifier la remise du logement.</p>`,
        },
        {
          question: "Quel niveau de propreté attendre pour récupérer mon dépôt de garantie ?",
          answer: `<p>L'objectif est un logement rendu dans un état comparable à l'entrée : sols propres, sanitaires détartrés, vitres nettoyées, placards vidés et essuyés. Si des points restent insatisfaisants après notre passage, nous revenons corriger sans frais supplémentaires.</p>`,
        },
        {
          question: "Comment traitez-vous les parquets anciens dans les immeubles du quartier Ferry-Buffalo ?",
          answer: `<p>Les parquets massifs ou vitrifiés sont aspirés puis nettoyés avec un produit adapté au bois, sans excès d'eau. Nous évitons les détergents agressifs qui ternissent le vernis. Pour les parquets huilés, nous utilisons un savon spécifique qui nourrit le bois tout en éliminant les salissures.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;