import type { City } from "~/types/geo";

const city: City = {
  name: "Noisy-le-Sec",
  slug: "noisy-le-sec",
  postalCodes: ["93130"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Noisy-le-Sec pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Entre la gare RER E et les quartiers pavillonnaires du Merlan, une équipe réactive et des méthodes adaptées au bâti local.",

  // hubIntro : HTML autorisé
  hubIntro:
    "<p>Pôle multimodal RER E / Tram T1, entre le Canal de l'Ourcq et le quartier de la Boissière : Noisy-le-Sec concentre des <strong>typologies variées</strong> qui demandent un suivi régulier. Klinova s'organise pour répondre aux besoins des copropriétés, gestionnaires et occupants sur l'ensemble de la commune.</p>\n<p class=\"mt-4\">Halls d'immeubles, sous-sols, balcons, espaces verts privatifs : chaque intervention suit un protocole défini selon la configuration du site. Reporting disponible sur demande, coordination avec gardiens ou syndics selon les accès.</p>\n<ul>\n  <li><strong>Planification adaptée aux contraintes d'accès :</strong> Digicodes, badges Vigik, coordination avec les gardiens des résidences sociales ou privées pour éviter les allers-retours inutiles.</li>\n  <li><strong>Matériel dimensionné au site :</strong> Autolaveuses compactes pour parkings étroits, injection-extraction pour moquettes de halls, nettoyeurs haute pression contrôlés pour balcons.</li>\n  <li><strong>Interventions en horaires décalés :</strong> Possibilité d'agir tôt le matin ou en soirée pour limiter la gêne dans les quartiers résidentiels comme le Merlan ou la Renardière.</li>\n</ul>",

  citySpecificChallenges: [
    "Halls des grands ensembles (Boissière, Léo Lagrange) soumis à un <strong>trafic quotidien intense</strong>.",
    "Parkings souterrains des années 70-80 avec <strong>rampes étroites</strong> et ventilation limitée.",
    "Balcons exposés aux suies de la RN3 et des voies ferrées : <strong>dépôts noirs récurrents</strong>.",
    "Stationnement très contraint en centre-ville : <strong>zone bleue et rues étroites</strong>.",
    "Coordination nécessaire avec les gardiens des résidences sociales pour <strong>accès Vigik et horaires</strong>.",
    "Quartiers pavillonnaires (Merlan, Petit-Noisy) avec <strong>accès jardins par l'intérieur</strong> uniquement.",
  ],

  districts: [
    "Centre-ville / Gare",
    "Le Merlan",
    "La Boissière",
    "Le Petit-Noisy",
    "Léo Lagrange",
    "La Renardière",
    "Quartier de la Plaine de l'Ourcq",
    "Haut-Goulet",
  ],

  nearbyCities: [
        "romainville",
        "bobigny",
        "bondy",
        "rosny-sous-bois",
        "montreuil",
        "bagnolet",
        "pantin",
        "villemomble",
        "le-raincy",
        "fontenay-sous-bois"
      ],

  landmarks: [
    "Mairie de Noisy-le-Sec",
    "Gare de Noisy-le-Sec (RER E / Tram T1)",
    "Canal de l'Ourcq",
    "Place des Découvertes (marché)",
    "Rue de Paris (ex-RN3)",
    "Z.I. du Parc",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous une première intervention dans une copropriété de Noisy-le-Sec ?",
      answer:
        "<p>Nous commençons par un échange avec le syndic ou le conseil syndical pour identifier les accès (badges, gardien, horaires sensibles). Un passage sur site permet de <strong>repérer les contraintes</strong> : stationnement, étages, état des sols. Le devis détaille ensuite les prestations, délais et modalités de coordination.</p>",
    },
    {
      question:
        "Intervenez-vous aussi pour les entreprises de la Z.I. du Parc ?",
      answer:
        "<p>Oui, nous travaillons avec des locaux professionnels : bureaux, entrepôts, ateliers. L'intervention peut inclure le <strong>nettoyage des sols</strong>, des sanitaires ou des parkings. Nous adaptons les horaires pour ne pas perturber l'activité, avec un planning validé en amont.</p>",
    },
    {
      question:
        "Que faire en cas de besoin urgent, par exemple après un dégât des eaux ?",
      answer:
        "<p>Contactez-nous par téléphone pour décrire la situation. Selon la disponibilité, une équipe peut intervenir <strong>sous 24 à 48 heures</strong>. Nous évaluons sur place l'ampleur des travaux nécessaires : aspiration, séchage, remise en état des surfaces touchées.</p>",
    },
    {
      question:
        "Le stationnement est compliqué en centre-ville, comment gérez-vous cela ?",
      answer:
        "<p>Nous anticipons ce point dès la préparation : <strong>repérage des zones de dépose</strong>, demande d'autorisation temporaire si nécessaire, intervention en véhicule utilitaire compact. Dans les quartiers denses comme la rue Jean Jaurès, nous privilégions les créneaux matinaux moins encombrés.</p>",
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
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans les fibres textiles, avec diagnostic préalable du support et séchage contrôlé pour une remise en circulation rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des configurations de bureaux et halls d'immeubles présents sur le secteur de Noisy-le-Sec.",
        "Matériel d'injection-extraction professionnel, adapté aux dalles textiles comme aux moquettes épaisses.",
        "Interventions planifiées en dehors des heures de forte activité pour limiter la gêne des occupants.",
      ],
      uniqueIntro:
        "<p>Dans les locaux de la <strong>Z.I. du Parc</strong>, les dalles textiles des open spaces et couloirs accumulent poussières fines, traces de semelles et résidus de café au fil des semaines. Le passage répété des équipes crée des zones de trafic où les fibres s'écrasent et perdent leur aspect d'origine. Sans intervention régulière, le revêtement vieillit prématurément et renvoie une image dégradée aux visiteurs comme aux collaborateurs.</p>\n<p class=\"mt-4\">Un entretien en profondeur redonne aux surfaces leur tenue visuelle et prolonge la durée de vie du textile. Les <strong>parties communes d'immeubles anciens</strong> du centre-ville, souvent équipées de moquette aiguilletée dans les escaliers ou les halls, bénéficient également d'un ravivage qui améliore l'accueil des résidents. Le confort acoustique et l'hygiène générale s'en trouvent renforcés.</p>\n<p class=\"mt-4\">Nous adaptons chaque intervention au rythme d'activité des bureaux et aux contraintes d'accès des copropriétés. Diagnostic du support, protection des plinthes, extraction contrôlée : chaque étape est planifiée pour limiter l'interruption des usages quotidiens.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation intense</h3>\n<p>Les couloirs, halls d'entrée et espaces de passage concentrent l'essentiel des salissures. Nous identifions la nature du textile — bouclé, velours ras ou dalle modulaire — puis appliquons un <strong>pré-traitement sur les traces marquées</strong>. L'aspiration préalable retire les particules libres avant injection.</p>\n\n<h3>Surfaces de travail et espaces cloisonnés</h3>\n<p>Les bureaux individuels, salles de réunion et recoins moins fréquentés reçoivent un traitement adapté à leur niveau d'encrassement. L'injection-extraction permet de retirer les <strong>résidus incrustés</strong> sans saturer le support. Les plinthes et bas de cloisons sont protégés pendant l'opération.</p>\n\n<h3>Finitions et contrôle du séchage</h3>\n<p>Après extraction maximale de l'humidité, nous vérifions l'<strong>homogénéité du rendu</strong> sur l'ensemble de la surface. Le temps de séchage dépend de l'épaisseur du textile et de la ventilation disponible. Des consignes de non-piétinement sont transmises pour garantir un résultat durable.</p>",
      specificChallenges: [
        "Dalles textiles des bureaux de la Z.I. du Parc soumises à un <strong>passage quotidien soutenu</strong>.",
        "Moquettes aiguilletées des escaliers anciens du centre-ville, souvent <strong>étroits et difficiles d'accès</strong>.",
        "Taches de café et <strong>traces de semelles incrustées</strong> dans les zones de trafic des open spaces.",
        "Halls de copropriétés rénovés nécessitant un <strong>entretien régulier</strong> pour conserver leur aspect soigné.",
        "Stationnement du véhicule d'intervention <strong>compliqué en centre-ville</strong> aux heures de pointe.",
      ],
      faqAdditions: [
        {
          question:
            "Avec les escaliers étroits des immeubles du centre-ville, comment organisez-vous le transport du matériel ?",
          answer:
            "<p>Nous utilisons des <strong>équipements compacts et modulables</strong>, conçus pour passer dans les cages d'escalier réduites. Le flexible d'injection-extraction se déploie depuis le palier ou le hall, ce qui évite de monter l'ensemble de la machine à chaque étage. Un repérage préalable permet d'anticiper les passages délicats.</p>",
        },
        {
          question:
            "Pour les bureaux de la Z.I. du Parc, quelles méthodes comparez-vous selon le type de moquette ?",
          answer:
            "<p>L'injection-extraction convient aux dalles textiles classiques et aux velours ras, car elle retire efficacement les salissures profondes. Pour les fibres fragiles ou les supports peu épais, un nettoyage basse humidité limite le risque de déformation. Le choix dépend du diagnostic réalisé avant chaque intervention.</p>",
        },
        {
          question:
            "Comment traitez-vous des taches anciennes sur les moquettes des halls de la Boissière ?",
          answer:
            "<p>Les taches incrustées reçoivent un <strong>détachant ciblé</strong> avant le passage de la machine. Plusieurs passes d'extraction sont effectuées sur les zones marquées pour déloger les résidus en profondeur. Certaines traces très anciennes peuvent s'atténuer sans disparaître totalement, selon la nature du textile et du produit à l'origine de la tache.</p>",
        },
        {
          question:
            "Après une représentation au Théâtre des Bergeries, quel délai prévoir avant de réutiliser la salle ?",
          answer:
            "<p>Le temps de séchage varie selon l'épaisseur de la moquette et la ventilation du lieu. En conditions normales, comptez entre quatre et huit heures pour un textile standard. Nous programmons l'intervention en fin de soirée ou de nuit afin que la salle soit praticable dès le lendemain matin.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et remise en circulation rapide des places.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès en centre-ville dense et coordination avec les syndics locaux pour le balisage.",
        "Autolaveuse professionnelle et équipements de récupération des eaux adaptés aux parkings souterrains.",
        "Intervention planifiée en horaires décalés avec rotation des véhicules par zones pour limiter la gêne.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur les sols des parkings souterrains autour de la <strong>rue Jean Jaurès</strong> : coulures d'huile près des places fixes, dépôts de gomme aux virages, poussières grasses sur les rampes d'accès. Ces marques persistent d'autant plus que le béton brut absorbe les résidus sans possibilité de rinçage superficiel.</p>\n<p class=\"mt-4\">Dans les résidences équipées de <strong>parkings en béton brut des années 70-80</strong> ou d'enrobé en surface, l'encrassement dégrade l'aspect général et complique le marquage au sol. Les copropriétaires constatent des zones glissantes, des rigoles obstruées, une impression de vétusté qui pèse sur l'image de la résidence.</p>\n<p class=\"mt-4\">Un lavage mécanisé adapté au revêtement permet de retrouver un sol propre et sécurisé. L'intervention intègre le <strong>traitement des eaux de lavage</strong> conformément aux exigences d'évacuation, le balisage des zones traitées et la coordination avec le syndic pour la rotation des véhicules.</p>",
      uniqueDeepDive:
        "<h3>Sol décrassé et circulation rétablie</h3>\n<p>Le résultat visé : un revêtement débarrassé des dépôts gras, des rigoles dégagées et des rampes antidérapantes. Pour y parvenir, chaque zone fait l'objet d'un diagnostic préalable : type de sol, état des évacuations, niveau d'encrassement.</p>\n\n<h3>Traitement mécanisé et dégraissage ciblé</h3>\n<p>L'autolaveuse effectue des passes successives avec un détergent adapté au béton ou à la résine. Les zones critiques — angles morts, pieds de murs, rampes inclinées — reçoivent un traitement renforcé. La haute pression intervient sur les taches d'huile anciennes après application d'un dégraissant.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>Les eaux de lavage sont récupérées et orientées vers les évacuations conformes, sans rejet sauvage. Un balayage préalable limite les résidus solides. En fin d'intervention, un dépoussiérage des blocs lumineux ou tuyauteries peut être réalisé sur demande, avec recommandation de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Sols béton brut des parkings années 70-80 : porosité élevée, taches d'huile incrustées.",
        "Rampes d'accès étroites en centre-ville : manœuvre autolaveuse et sécurisation antidérapante.",
        "Gestion des eaux usées : récupération obligatoire, pas de rejet vers la voirie.",
        "Coordination rotation véhicules avec le syndic pour maintenir l'accès aux résidents.",
        "Encrassement accéléré par la proximité de la RN3 et le trafic quotidien.",
      ],
      faqAdditions: [
        {
          question:
            "Comment gérez-vous la récupération des eaux de lavage dans les parkings souterrains à Noisy-le-Sec ?",
          answer:
            "<p>Les eaux chargées sont aspirées au fur et à mesure par l'autolaveuse ou dirigées vers les regards existants. Nous vérifions au préalable l'état des évacuations pour éviter tout refoulement. Aucun rejet n'est effectué vers la voirie ou les espaces communs extérieurs.</p>",
        },
        {
          question:
            "Quelle différence de méthode entre un parking souterrain et un parking aérien rue Jean Jaurès ?",
          answer:
            "<p>En souterrain, le béton brut nécessite un dégraissant renforcé et une gestion stricte des eaux. En aérien, l'enrobé supporte mieux la haute pression et le rinçage s'évacue naturellement. Le balisage reste identique pour sécuriser les usagers pendant l'intervention.</p>",
        },
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes sur les sols béton des copropriétés ?",
          answer:
            "<p>Un dégraissant alcalin est appliqué en pré-traitement sur les zones marquées. Après un temps de contact adapté, l'autolaveuse ou la haute pression décolle les résidus incrustés. Plusieurs passes peuvent être nécessaires selon l'ancienneté des dépôts.</p>",
        },
        {
          question:
            "Quels horaires d'intervention proposez-vous pour limiter la gêne près de la gare RER ?",
          answer:
            "<p>Nous privilégions les créneaux en journée creuse ou en soirée, après les retours domicile. Le planning est validé avec le syndic pour éviter les heures de pointe matin et soir. Un balisage clair permet aux résidents de circuler en toute sécurité.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon, avec traitement adapté au support, brossage des joints et rinçage contrôlé pour un espace extérieur à nouveau utilisable.",
      whyUsBullets: [
        "Connaissance des expositions locales, entre axes pollués et quartiers plus abrités, pour adapter chaque intervention.",
        "Pression ajustée selon le support : béton poreux, carrelage jointoyé ou dalles sur plots sans risque de déplacement.",
        "Organisation pensée pour limiter les nuisances : bâchage, gestion des eaux et coordination avec les occupants voisins.",
      ],
      uniqueIntro:
        "<p>Le long de la <strong>Rue de Paris</strong> et des axes proches de l'A86, les balcons accumulent un voile grisâtre en quelques semaines. Les particules fines se déposent sur le sol, s'incrustent dans les joints et laissent des traces noires sur les garde-corps. Même sans utiliser l'espace, la saleté s'installe et rend le balcon peu engageant.</p>\n<p class=\"mt-4\">Sur les <strong>grands ensembles en béton brut</strong>, la surface poreuse retient davantage les dépôts. Dans les pavillons avec carrelage ou les résidences récentes équipées de dalles sur plots, les joints deviennent le refuge de mousses et résidus organiques. Le balcon perd son attrait, et l'envie d'y installer une table ou quelques plantes disparaît progressivement.</p>\n<p class=\"mt-4\">Une intervention structurée redonne à cet espace son usage quotidien. Diagnostic du support, protection des menuiseries, traitement ciblé et gestion de l'eau vers le bas : chaque étape vise un résultat visible sans créer de désagrément pour le voisinage. Les balcons situés en étages élevés ou exposés aux flux de circulation méritent une attention particulière sur les méthodes employées.</p>",
      uniqueDeepDive:
        "<h3>Dépôts incrustés et joints encrassés</h3>\n<p>Les feuilles mortes, la terre accumulée et les débris sont d'abord retirés manuellement. Le mobilier et les plantes sont déplacés ou bâchés pour éviter les projections.</p>\n<p class=\"mt-4\">Les menuiseries et vitrages reçoivent une protection avant tout traitement humide.</p>\n\n<h3>Surface terne et traces tenaces</h3>\n<p>Un produit adapté au support est appliqué : formulation douce sur carrelage, traitement désincrustant sur béton brut, solution neutre sur dalles composites. Le brossage manuel ou mécanique déloge les salissures sans agresser les joints.</p>\n\n<h3>Risque de coulures et séchage</h3>\n<p>Le rinçage s'effectue avec une pression contrôlée, orientée vers l'évacuation sans débordement vers les balcons voisins. Une attention particulière est portée aux façades et au linge éventuellement étendu en dessous.</p>\n<p class=\"mt-4\">Le séchage naturel permet une réutilisation rapide de l'espace, accompagné de conseils pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Pollution routière : dépôts noirs rapides sur les balcons exposés aux axes RN3 et A86.",
        "Béton brut poreux : surface qui retient les salissures dans les grands ensembles anciens.",
        "Dalles sur plots : nettoyage sans déstabiliser les éléments ni infiltrer les joints.",
        "Étages élevés : accès et sécurisation sur les tours du quartier de la Boissière.",
        "Voisinage sensible : gestion des coulures pour éviter les désagréments aux occupants du dessous.",
      ],
      faqAdditions: [
        {
          question:
            "Sur les dalles sur plots installées dans les résidences récentes de la ZAC Ourcq, comment évitez-vous de décaler les éléments pendant le nettoyage ?",
          answer:
            "<p>La pression est réduite et orientée parallèlement aux dalles, jamais perpendiculairement aux joints. Le brossage manuel complète l'action sur les zones fragiles. Cette méthode préserve l'alignement des plots tout en éliminant les dépôts accumulés entre les éléments.</p>",
        },
        {
          question:
            "Comment traitez-vous la mousse tenace sur les balcons exposés au nord, fréquents sur les barres anciennes ?",
          answer:
            "<p>Un produit désincrustant adapté aux surfaces minérales est appliqué avant brossage. Le temps de pose permet de ramollir la mousse sans recourir à une pression excessive. Le rinçage contrôlé évacue les résidus sans projections vers les façades voisines.</p>",
        },
        {
          question:
            "Comment protégez-vous les façades et évitez-vous les coulures qui gênent les voisins dans les immeubles du centre-ville ?",
          answer:
            "<p>Le rinçage s'effectue par sections, avec une orientation vers l'évacuation du balcon. Des bâches peuvent être posées en contrebas si nécessaire. Nous vérifions l'absence de linge étendu et prévenons les occupants concernés avant de commencer.</p>",
        },
        {
          question:
            "Pour les balcons situés en étage élevé dans les tours de la Boissière, quelles solutions d'accès proposez-vous ?",
          answer:
            "<p>L'intervention se fait depuis l'intérieur du logement, sans nacelle ni échafaudage. Le matériel est acheminé par l'ascenseur ou les escaliers. Les protections sont renforcées pour éviter toute projection vers l'extérieur depuis ces hauteurs.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des zones à risque à Noisy-le-Sec, notamment les balcons exposés aux espaces verts du quartier.",
        "Protocole complet avec EPI adaptés, confinement rigoureux et désinfection virucide homologuée.",
        "Évacuation des déchets en sacs étanches et coordination discrète pour limiter la gêne auprès du voisinage.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans intervention, les balcons donnant sur des espaces végétalisés comme le <strong>Square Stephenson</strong> accumulent des dépôts de fientes qui s'incrustent dans les joints et les garde-corps. L'odeur devient persistante, le sol glissant, et l'usage de cet espace extérieur se réduit progressivement à néant. Les occupants finissent par condamner leur balcon plutôt que d'affronter le problème.</p>\n<p class=\"mt-4\">Dans les immeubles du centre ancien ou les grands ensembles, les <strong>corniches, rebords et loggias</strong> constituent des zones d'accumulation privilégiées. Les fientes attaquent le béton, ternissent les surfaces peintes et laissent des traces acides difficiles à éliminer sans traitement adapté. Le confort de vie s'en trouve affecté, tout comme la relation avec le voisinage quand les odeurs se propagent.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon utilisable. Le protocole inclut la <strong>désinfection complète</strong> et l'évacuation contrôlée des déchets contaminés, pour un résultat durable et un espace assaini.</p>",
      uniqueDeepDive:
        "<h3>Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace propre, débarrassé des agents pathogènes et des résidus acides. La surface retrouve son aspect d'origine, les odeurs disparaissent et le balcon redevient utilisable en toute sécurité.</p>\n<p class=\"mt-4\">Pour y parvenir, l'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes de protection.</p>\n\n<h3>Confinement et collecte sécurisée</h3>\n<p>La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées.</p>\n<p class=\"mt-4\">La collecte s'effectue dans des sacs étanches, conditionnés pour une évacuation sécurisée.</p>\n\n<h3>Traitement des supports et rinçage</h3>\n<p>Le sol, les garde-corps et les vitrages reçoivent un nettoyage approfondi suivi d'une désinfection virucide avec temps de contact respecté. Un rinçage final précède l'aération nécessaire avant réutilisation.</p>\n<p class=\"mt-4\">Des dispositifs anti-retour (pics, filets) peuvent être installés sur les rebords exposés.</p>",
      specificChallenges: [
        "Balcons face aux espaces verts particulièrement exposés aux colonies de pigeons.",
        "Loggias des grands ensembles avec accumulation de fientes sur plusieurs mois.",
        "Rebords et corniches du centre ancien difficiles d'accès pour le nettoyage.",
        "Nécessité de protéger les voisins du dessous pendant l'intervention.",
        "Évacuation des déchets contaminés en immeuble collectif avec contraintes d'accès.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes accumulées sur mon balcon donnant sur le Square Stephenson représentent-elles un risque sanitaire réel ?",
          answer:
            "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les voies respiratoires lorsqu'elles sèchent et se dispersent en poussière. Sur un balcon exposé aux espaces verts, l'accumulation est souvent rapide. Une décontamination professionnelle élimine ces risques et permet de réutiliser l'espace sereinement.</p>",
        },
        {
          question:
            "Quel équipement de protection et quel protocole appliquez-vous pour traiter les fientes sur les rebords anciens du centre-ville ?",
          answer:
            "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes. Sur les rebords du bâti ancien, le confinement est adapté pour protéger les moulures et éviter les projections. L'humidification préalable neutralise les poussières avant collecte. La désinfection utilise un produit virucide homologué avec temps de contact respecté.</p>",
        },
        {
          question:
            "Après désinfection des fientes sur une loggia en centre-ville, combien de temps faut-il attendre avant de réutiliser l'espace ?",
          answer:
            "<p>Le délai dépend de la ventilation et des conditions météo. En général, comptez deux à quatre heures après le rinçage final pour que les surfaces sèchent et que les produits désinfectants aient terminé leur action. L'intervenant vous précise le délai exact selon la configuration de votre loggia.</p>",
        },
        {
          question:
            "Comment procédez-vous à l'évacuation des déchets contaminés après un assainissement en immeuble collectif ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès la collecte. L'évacuation s'effectue de manière discrète, en évitant les parties communes aux heures de passage. Les déchets sont emportés par nos soins pour ne laisser aucune trace ni odeur dans les espaces partagés de la copropriété.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Rafraîchissement en profondeur de vos canapés, tapis et matelas à Noisy-le-Sec, avec extraction des taches et allergènes pour un textile assaini et une remise en usage rapide.",
      whyUsBullets: [
        "Connaissance des logements familiaux autour de la Place des Découvertes et des contraintes d'accès en étage.",
        "Détachage enzymatique adapté aux taches d'urine, café ou graisse, avec extraction textile sans surtrempage.",
        "Intervention planifiée selon vos disponibilités, séchage rapide pour une remise en usage le jour même.",
      ],
      uniqueIntro:
        "<p>Comment préserver la propreté d'un canapé ou d'un tapis quand le quotidien s'accumule ? Autour de la <strong>Place des Découvertes</strong> et dans les secteurs familiaux de Noisy-le-Sec, les textiles d'ameublement subissent les passages répétés, les collations renversées, les traces laissées par les animaux. Les fibres absorbent ces résidus sans qu'un simple passage d'aspirateur suffise à les déloger.</p>\n<p class=\"mt-4\">Dans les appartements T3 et T4 équipés de <strong>canapés tissu non déhoussables</strong> ou de tapis en fibres synthétiques, les taches s'incrustent au fil des semaines. L'aspect terne, les auréoles persistantes et les odeurs sourdes finissent par altérer le confort du salon ou de la chambre. Un entretien adapté redonne de l'éclat aux couleurs et supprime les allergènes piégés dans les fibres.</p>\n<p class=\"mt-4\">Avec une présence fréquente d'enfants et d'animaux dans les logements des grands ensembles, la demande de détachage ciblé et de désinfection textile augmente. Une intervention structurée permet de traiter chaque surface selon sa nature et son état, sans risque pour les occupants.</p>",
      uniqueDeepDive:
        "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est d'obtenir un tissu propre en profondeur, débarrassé des salissures visibles et des résidus organiques. Le diagnostic initial identifie la composition du textile — coton, synthétique, velours — et la nature des taches présentes : café, urine, graisse ou encre.</p>\n<p class=\"mt-4\">Un test discret sur une zone cachée vérifie la tenue des couleurs avant tout traitement.</p>\n\n<h3>Injection-extraction et détachage ciblé</h3>\n<p>Le pré-traitement enzymatique cible les taches organiques tenaces. L'injection-extraction textile projette une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de salissures.</p>\n<p class=\"mt-4\">La pression et la température sont ajustées selon la fragilité du support pour éviter toute déformation ou décoloration.</p>\n\n<h3>Séchage contrôlé et conseils d'usage</h3>\n<p>L'extraction maximale réduit le temps de séchage. Selon l'épaisseur du textile et l'aération du logement, comptez entre quatre et huit heures avant remise en service.</p>\n<p class=\"mt-4\">Des conseils d'entretien régulier prolongent la durée de vie du textile entre deux interventions professionnelles.</p>",
      specificChallenges: [
        "Taches d'enfants et d'animaux fréquentes dans les appartements familiaux du centre-ville.",
        "Canapés non déhoussables difficiles à entretenir sans matériel professionnel d'injection-extraction.",
        "Accès en étage parfois sans ascenseur dans le bâti ancien, nécessitant un équipement portable.",
        "Stationnement limité en voirie autour de la Place des Découvertes pour le véhicule d'intervention.",
        "Temps de séchage variable selon l'humidité ambiante et l'aération du logement.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un canapé tissu non déhoussable dans un appartement familial près de la Place des Découvertes, quelle méthode utilisez-vous ?",
          answer:
            "<p>Nous procédons par injection-extraction textile après un diagnostic du tissu. Cette technique projette une solution nettoyante dans les fibres puis aspire immédiatement l'eau sale. La pression est adaptée aux textiles fragiles pour éviter toute déformation ou auréole résiduelle.</p>",
        },
        {
          question:
            "Le nettoyage professionnel élimine-t-il les acariens et allergènes présents dans les tapis des logements familiaux ?",
          answer:
            "<p>L'extraction en profondeur déloge les acariens, poussières et résidus organiques piégés dans les fibres. Combinée à un pré-traitement adapté, cette méthode réduit significativement la charge allergène du textile et améliore la qualité de l'air intérieur pour les occupants sensibles.</p>",
        },
        {
          question:
            "Quel est le temps de séchage pour un canapé shampouiné dans un appartement proche de la gare par temps humide ?",
          answer:
            "<p>Comptez entre quatre et huit heures selon l'épaisseur du tissu et la ventilation du logement. Nous recommandons d'ouvrir les fenêtres ou d'utiliser un ventilateur pour accélérer le séchage. En période humide, prévoir la partie haute de cette fourchette.</p>",
        },
        {
          question:
            "Pour des taches d'urine anciennes sur un tapis en résidence, vaut-il mieux un détachage local ou un nettoyage complet ?",
          answer:
            "<p>Les taches d'urine anciennes nécessitent généralement un pré-traitement enzymatique ciblé suivi d'un nettoyage complet. Le détachage seul risque de créer des auréoles si le reste du tapis n'est pas traité. L'intervention globale garantit un rendu homogène sans démarcation visible.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "terrasses",
      heroDescription:
        "Une remise en état complète de votre terrasse, avec traitement des mousses, nettoyage adapté au support et protection du mobilier extérieur pour retrouver un espace agréable à vivre.",
      whyUsBullets: [
        "Connaissance des terrasses pavillonnaires du secteur Merlan, souvent ombragées et sujettes aux mousses persistantes.",
        "Adaptation du traitement selon le support — carrelage, pierre, bois composite — et l'état des joints.",
        "Organisation de l'intervention via le jardin, protection des plantations et gestion des eaux de ruissellement.",
      ],
      uniqueIntro:
        "<p>Les traces vertes s'installent progressivement sur les dalles, les joints noircissent, et la terrasse perd son aspect d'origine. Dans le <strong>quartier du Merlan</strong>, où les pavillons disposent souvent d'espaces extérieurs privatifs avec jardin, ce phénomène touche particulièrement les surfaces exposées à l'ombre des arbres ou orientées au nord. Les feuilles mortes s'accumulent, l'humidité stagne, et la mousse gagne du terrain saison après saison.</p>\n<p class=\"mt-4\">Sur les <strong>supports en carrelage, dalles ou bois composite</strong>, la dégradation ne se limite pas à l'aspect visuel. Les revêtements deviennent glissants après la pluie, les joints fragilisés laissent passer l'eau, et l'espace perd son attrait pour les repas en extérieur ou les moments de détente. Une terrasse encrassée, c'est un prolongement de la maison qu'on finit par délaisser.</p>\n<p class=\"mt-4\">Notre intervention redonne à cet espace son usage quotidien. Nous adaptons le traitement selon la nature du sol et l'environnement immédiat, en tenant compte des <strong>accès par jardin privatif</strong> et de la présence éventuelle de plantations à protéger.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Avant toute intervention, nous déplaçons ou bâchons le mobilier extérieur, les jardinières et les plantes sensibles. Les menuiseries — baies vitrées, portes-fenêtres — sont protégées pour éviter les projections. Cette étape garantit que seule la surface à traiter reçoit le nettoyage.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Les gros dépôts — feuilles, terre, débris végétaux — sont d'abord retirés manuellement. Un produit adapté au support est ensuite appliqué : formulation spécifique pour carrelage, pierre naturelle ou bois composite. Le brossage mécanique ou manuel décolle les salissures incrustées. Si l'état le justifie, un passage haute pression contrôlée complète le travail, avec une attention particulière aux joints et matériaux poreux.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>L'eau est évacuée vers les points d'écoulement existants, en protégeant les plantations adjacentes. Selon le diagnostic initial, un traitement anti-mousse préventif peut être appliqué. Nous vous transmettons des recommandations d'entretien saisonnier pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "Mousses et lichens tenaces sur dalles exposées à l'ombre des arbres en zone pavillonnaire.",
        "Joints fragilisés par l'humidité nécessitant un nettoyage adapté sans haute pression excessive.",
        "Accès souvent limité au passage par le jardin privatif, avec mobilier et plantes à déplacer.",
        "Supports variés — carrelage ancien, bois composite récent — demandant des produits spécifiques.",
        "Gestion des eaux de ruissellement pour éviter les coulures vers les plantations ou le voisinage.",
      ],
      faqAdditions: [
        {
          question:
            "Comment éliminez-vous les mousses et lichens sur les terrasses pavillonnaires du Merlan sans abîmer les dalles ?",
          answer:
            "<p>Nous appliquons un traitement anti-mousse adapté au type de dalle, suivi d'un brossage mécanique qui décolle les végétaux sans attaquer le revêtement. La haute pression n'est utilisée qu'en complément, à distance et puissance contrôlées, pour préserver les joints et la surface.</p>",
        },
        {
          question:
            "Sur pierre naturelle ou bois composite, quelle technique privilégiez-vous pour nettoyer sans altérer le support ?",
          answer:
            "<p>Chaque matériau reçoit un produit formulé pour sa porosité et sa sensibilité. Le bois composite supporte mal les pressions élevées : nous travaillons en basse pression avec rinçage doux. La pierre naturelle bénéficie d'un traitement spécifique qui respecte sa texture tout en éliminant les salissures incrustées.</p>",
        },
        {
          question:
            "Peut-on utiliser le nettoyeur haute pression près des margelles et escaliers sans risque d'éclatement des joints ?",
          answer:
            "<p>Oui, à condition d'adapter la distance et l'angle du jet. Nous évitons les passages directs sur les joints fragilisés et privilégions un brossage manuel sur ces zones sensibles. Si des fissures sont visibles, nous vous le signalons avant intervention pour éviter toute aggravation.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse recommandez-vous pour une terrasse souvent humide en Île-de-France ?",
          answer:
            "<p>Un produit préventif à action prolongée, appliqué après le nettoyage complet, ralentit la repousse pendant plusieurs mois. Son efficacité dépend de l'exposition et du drainage existant. Nous conseillons un passage annuel, idéalement au printemps ou à l'automne, pour maintenir le résultat.</p>",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux plafonds, avec coordination des accès et respect des délais pour état des lieux ou fin de travaux.",
      whyUsBullets: [
        "Expérience des logements noiséens, du pavillon meulière aux appartements récents de la ZAC Ourcq.",
        "Polyvalence sur tous types de sols et finitions, y compris parquets fragiles et carrelages anciens.",
        "Coordination directe avec agences, artisans ou gardiens pour respecter vos délais de remise de clés.",
      ],
      uniqueIntro:
        "<p>Après plusieurs semaines de travaux ou quelques années d'occupation, un appartement accumule des traces que le ménage courant ne suffit plus à effacer. Dans la ZAC Plaine de l'Ourcq comme dans les immeubles proches de la gare, les remises en état se multiplient au rythme des rotations locatives et des chantiers de rénovation. Poussières de plâtre, résidus de colle, joints encrassés : le logement nécessite une intervention structurée avant remise des clés.</p>\n<p class=\"mt-4\">Sur les biens T2 à T4 qui composent une large part du parc noiséen, les sols varient du carrelage au parquet ancien, avec parfois du lino dans les logements sociaux. Chaque surface demande un traitement adapté pour retrouver un état propre sans risquer de dégradation. Un nettoyage complet permet de livrer un bien présentable, conforme aux attentes d'une agence ou d'un propriétaire.</p>\n<p class=\"mt-4\">La coordination avec les artisans, les agences immobilières ou les gardiens d'immeuble fait partie intégrante de l'organisation. Accès par digicode, créneaux imposés par l'état des lieux, stationnement contraint en centre-ville : chaque contrainte est anticipée pour respecter les délais convenus.</p>",
      uniqueDeepDive:
        "<h3>Un logement prêt à être occupé ou visité</h3>\n<p>L'objectif est de rendre chaque pièce dans un état de propreté conforme à une remise de clés ou une visite. Sols lavés, vitres intérieures dégagées, sanitaires désinfectés, placards vidés et essuyés.</p>\n\n<h3>Traitement adapté à chaque surface</h3>\n<p>Le carrelage reçoit un lavage dégraissant, le parquet un nettoyage humide contrôlé pour préserver le bois. Les traces de peinture ou d'enduit sur les plinthes et interrupteurs sont retirées manuellement. Les pièces d'eau font l'objet d'un détartrage des robinetteries et d'un récurage des joints.</p>\n\n<h3>Organisation calée sur vos contraintes</h3>\n<p>L'intervention est planifiée en fonction du créneau disponible : après le départ des artisans, avant le passage de l'agence, ou selon les horaires imposés par le gardien. Le matériel et les produits sont apportés par nos équipes. Une ventilation finale permet un séchage rapide avant fermeture du logement.</p>",
      specificChallenges: [
        "Résidus de chantier sur les parquets anciens du centre-ville à traiter sans abîmer le bois.",
        "Délais serrés pour les états des lieux dans le parc locatif proche gare RER E.",
        "Accès par digicode et coordination gardien dans les résidences de La Boissière ou Léo Lagrange.",
        "Stationnement difficile en centre-ville pour le matériel d'intervention.",
        "Sols variés (carrelage, lino, parquet) nécessitant des produits et techniques adaptés.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un ménage de fin de chantier dans la ZAC Plaine de l'Ourcq, quelles tâches techniques sont incluses ?",
          answer:
            "<p>L'intervention couvre le retrait des poussières de plâtre sur toutes les surfaces, le nettoyage des traces de peinture sur menuiseries et sols, le lavage des vitres intérieures et le récurage complet des sanitaires. Les placards sont essuyés, les interrupteurs et poignées dégraissés.</p>",
        },
        {
          question:
            "Comment coordonnez-vous les interventions avec les agences pour une remise en état avant état des lieux à Léo Lagrange ?",
          answer:
            "<p>Nous calons le créneau directement avec l'agence ou le gestionnaire pour intervenir après le départ du locataire et avant la visite. L'accès est organisé via le gardien ou par récupération des clés. Un compte-rendu peut être transmis si nécessaire.</p>",
        },
        {
          question:
            "Comment calculez-vous le coût d'un nettoyage complet selon la surface et l'urgence, notamment proche de la gare RER ?",
          answer:
            "<p>Le devis tient compte de la superficie, du type de bien (appartement ou pavillon), de l'état initial et du délai demandé. Une intervention sous 48 heures reste possible selon notre planning, avec ajustement si contraintes d'accès particulières.</p>",
        },
        {
          question:
            "Quel est votre délai d'intervention pour un nettoyage suite à déménagement dans un pavillon de Noisy-le-Sec ?",
          answer:
            "<p>En fonction de la disponibilité, nous pouvons intervenir sous trois à cinq jours ouvrés. Pour les situations urgentes liées à une vente ou une succession, un créneau prioritaire peut être proposé après échange sur les contraintes d'accès au bien.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
