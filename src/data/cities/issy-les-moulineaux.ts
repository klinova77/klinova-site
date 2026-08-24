import type { City } from "~/types/geo";

const city: City = {
  name: "Issy-les-Moulineaux",
  slug: "issy-les-moulineaux",
  postalCodes: ["92130"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Issy-les-Moulineaux pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Du quartier Val de Seine aux résidences du Fort, une équipe locale adaptée aux exigences du bâti récent comme ancien.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Pôle économique majeur du Val de Seine, desservi par le RER C et le Tramway T2, Issy-les-Moulineaux concentre des <strong>flux importants</strong> entre zones d'activités et secteurs résidentiels. Klinova s'y positionne comme partenaire terrain pour les syndics, gestionnaires et occupants exigeants.</p>\n<p class=\"mt-4\">Notre organisation repose sur une coordination étroite avec les gardiens et services généraux. Chaque intervention fait l'objet d'un planning adapté aux contraintes horaires, avec reporting disponible sur demande pour les donneurs d'ordre professionnels.</p>\n<ul>\n  <li><strong>Réactivité secteur :</strong> Équipes basées en proche couronne, mobilisables sur l'ensemble des quartiers, du Centre-Ville aux Épinettes.</li>\n  <li><strong>Gestion des accès :</strong> Badges Vigik, coordination gardiens, créneaux décalés pour limiter la gêne dans les halls et parkings à fort passage.</li>\n  <li><strong>Suivi transparent :</strong> Compte-rendu d'intervention transmis aux syndics et gestionnaires, traçabilité des prestations réalisées.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains</strong> fréquents dans les résidences récentes : sols résine ou béton peint à entretenir régulièrement.",
    "Halls d'immeubles tertiaires soumis à un <strong>flux pendulaire intense</strong> entre gare RER C et bureaux.",
    "Balcons exposés à la <strong>pollution du périphérique</strong> et des axes en bord de Seine.",
    "Copropriétés de l'écoquartier du Fort avec <strong>règlements stricts</strong> sur les nuisances et écoulements.",
    "Stationnement voirie quasi impossible : <strong>anticipation logistique</strong> indispensable pour chaque intervention.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-Ville",
    "Corentin Celton",
    "Val de Seine",
    "Les Épinettes",
    "Le Fort",
    "Les Îles",
    "La Ferme",
  ],
  nearbyCities: [
        "vanves",
        "boulogne-billancourt",
        "malakoff",
        "chatillon",
        "clamart",
        "montrouge",
        "sevres",
        "fontenay-aux-roses",
        "bagneux",
        "saint-cloud"
      ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Issy-les-Moulineaux",
    "Parc de l'Île Saint-Germain",
    "Musée Français de la Carte à Jouer",
    "Gare Issy-Val de Seine",
    "Écoquartier du Fort d'Issy",
    "Quartier Val de Seine",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question:
        "Comment organisez-vous les interventions dans les immeubles avec accès sécurisé ?",
      answer: "<p>Nous travaillons avec les <strong>badges Vigik</strong> fournis par les syndics ou gestionnaires. En amont, nous coordonnons avec le gardien ou le référent copropriété pour définir les créneaux adaptés. À Issy-les-Moulineaux, cette organisation est systématique compte tenu de la généralisation des accès contrôlés.</p>",
    },
    {
      question:
        "Intervenez-vous en dehors des horaires de bureau pour les locaux professionnels ?",
      answer: "<p>Oui, les interventions en <strong>soirée ou tôt le matin</strong> sont courantes pour les immeubles tertiaires du quartier Val de Seine. Nous adaptons nos plannings aux contraintes d'occupation, en accord avec les services généraux ou le facility manager.</p>",
    },
    {
      question: "Le stationnement est compliqué à Issy-les-Moulineaux, comment gérez-vous ce point ?",
      answer: "<p>Nos équipes privilégient les <strong>parkings souterrains publics</strong> (Hôtel de Ville, Corentin Celton) pour les interventions longues. Pour les prestations courtes, nous anticipons les créneaux de livraison ou utilisons les emplacements autorisés à proximité immédiate du site.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer: "<p>Chaque demande fait l'objet d'un <strong>échange préalable</strong> pour évaluer la surface, l'état des lieux et les contraintes d'accès. Le devis est transmis rapidement, détaillant les prestations prévues et les modalités d'intervention.</p>",
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
        "Extraction en profondeur des salissures incrustées dans vos moquettes de bureaux ou parties communes, avec séchage maîtrisé pour une reprise d'activité rapide.",
      whyUsBullets: [
        "Connaissance des immeubles tertiaires du Val de Seine et de leurs contraintes d'accès sécurisé.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et velours ras des bureaux modernes.",
        "Interventions planifiées en soirée ou week-end pour respecter le rythme des entreprises.",
      ],
      uniqueIntro: "<p>Dans le <strong>quartier Val de Seine</strong>, les sièges sociaux et immeubles tertiaires concentrent un trafic piéton soutenu. Les halls d'accueil, couloirs et salles de réunion voient défiler chaque jour des centaines de collaborateurs et visiteurs. Les fibres textiles absorbent progressivement poussières fines, résidus de semelles et projections de boissons, jusqu'à former un voile grisâtre qui ternit l'ensemble du revêtement.</p>\n<p class=\"mt-4\">Sur les <strong>dalles textiles et moquettes velours ras</strong> des open-spaces récents, cet encrassement altère l'image des locaux. Les zones de passage intensif — devant ascenseurs, accueils, photocopieurs — marquent plus vite que le reste de la surface. Un entretien adapté redonne de l'homogénéité au sol et prolonge la durée de vie du textile, tout en améliorant la qualité de l'air intérieur.</p>\n<p class=\"mt-4\">Compte tenu des flux pendulaires intenses liés aux grandes entreprises implantées à Issy-les-Moulineaux, l'intervention se planifie en dehors des heures de bureau. Diagnostic préalable, protection du mobilier, extraction contrôlée : chaque étape s'organise pour limiter l'interruption d'activité.</p>",
      uniqueDeepDive: "<h3>1. Zones de circulation principale</h3>\n<p>Les couloirs et halls d'entrée reçoivent le plus fort piétinement. L'intervention débute par une aspiration minutieuse, puis un détachage ciblé sur les traces de café ou de tanin. L'injection-extraction s'effectue en <strong>passes croisées</strong> pour déloger les salissures enfoncées dans la fibre.</p>\n\n<h3>2. Espaces de travail et salles de réunion</h3>\n<p>Les open-spaces et salles de réunion présentent souvent des taches localisées autour des postes ou des tables. Les plinthes et bas de cloisons sont protégés avant traitement. Le matériel d'injection-extraction travaille à <strong>pression modérée</strong> pour préserver les dalles textiles collées.</p>\n\n<h3>3. Séchage et remise en service</h3>\n<p>L'extraction maximale de l'humidité réduit le temps de séchage à quelques heures selon la ventilation du local. Un balisage temporaire signale les zones encore humides. Les consignes de non-piétinement sont transmises au gestionnaire pour garantir un <strong>rendu uniforme</strong> dès la reprise d'activité.</p>",
      specificChallenges: [
        "Halls d'accueil à <strong>fort passage quotidien</strong>, fibres encrassées en quelques semaines.",
        "Dalles textiles collées nécessitant une <strong>extraction contrôlée</strong> pour éviter le décollement.",
        "Stationnement restreint imposant une logistique anticipée pour le matériel lourd.",
        "Horaires décalés obligatoires pour ne pas perturber l'activité des open-spaces.",
        "Plinthes et mobilier fixe à protéger avant chaque traitement.",
      ],
      faqAdditions: [
        {
          question:
            "Dans les halls d'accueil du Val de Seine, comment organisez-vous l'accès et les horaires pour nettoyer les moquettes ?",
          answer: "<p>L'intervention se cale en soirée ou le week-end, après validation avec le gestionnaire. Nous récupérons les badges ou codes Vigik en amont, et le matériel est acheminé par le <strong>parking souterrain</strong> si le stationnement en surface est impossible. Un planning précis évite toute gêne pour les collaborateurs.</p>",
        },
        {
          question:
            "Après un shampouinage dans les open-spaces très fréquentés, combien de temps avant la remise en service ?",
          answer: "<p>Le séchage dure généralement entre quatre et huit heures selon l'épaisseur du textile et la ventilation du local. L'extraction poussée limite l'humidité résiduelle. Un balisage temporaire signale les zones encore humides, et la reprise d'activité peut avoir lieu dès le lendemain matin.</p>",
        },
        {
          question:
            "Comment protégez-vous les plinthes et angles des bureaux modernes lors du nettoyage en profondeur des moquettes ?",
          answer: "<p>Des protections adhésives ou des bâches légères sont posées le long des plinthes et du mobilier fixe avant le traitement. La buse d'injection reste à distance des angles pour éviter les projections. Cette précaution préserve les <strong>finitions</strong> et simplifie la remise en ordre après l'intervention.</p>",
        },
        {
          question:
            "Avec le stationnement restreint près des immeubles tertiaires, comment gérez-vous l'acheminement du matériel lourd ?",
          answer: "<p>Nous privilégions les parkings souterrains des résidences ou bureaux, accessibles avec un badge prestataire. Le matériel — extracteur, réservoir, rallonges — est transporté sur chariot jusqu'à l'étage concerné. Cette organisation évite les allers-retours en surface et respecte les contraintes de la zone.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des parkings souterrains avec autolaveuse et traitement dégraissant, gestion rigoureuse des eaux usées et coordination avec syndics pour limiter la gêne aux résidents.",
      whyUsBullets: [
        "Connaissance des parkings souterrains du Fort d'Issy et des résidences récentes des Bords de Seine.",
        "Autolaveuse professionnelle et dégraissants adaptés aux sols résine ou béton peint.",
        "Coordination avec syndics et gardiens pour planifier créneaux, rotation véhicules et balisage.",
      ],
      uniqueIntro: "<p>Les traces noires laissées par les pneus, les coulures d'huile près des places de stationnement et la poussière accumulée sur les rampes d'accès marquent progressivement les <strong>parkings souterrains des résidences et entreprises du Fort d'Issy et des Bords de Seine</strong>. Ces dépôts, souvent négligés, finissent par ternir l'ensemble du niveau et compliquer l'entretien courant.</p>\n<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux sols leur aspect d'origine et facilite le repérage des marquages au sol. Dans les constructions récentes où les <strong>revêtements en béton peint ou résine</strong> dominent, l'encrassement se voit d'autant plus vite. Les copropriétaires comme les gestionnaires d'immeubles de bureaux apprécient un parking propre, reflet d'une gestion soignée.</p>\n<p class=\"mt-4\">L'intervention se prépare en amont avec le syndic ou le gardien pour définir les créneaux, organiser la rotation des véhicules et baliser les zones concernées. Cette coordination préalable garantit un chantier fluide, sans blocage ni réclamation.</p>",
      uniqueDeepDive: "<h3>1. Sol décrassé et dégraissé</h3>\n<p>Le résultat attendu : un revêtement débarrassé des traces de pneus, des taches d'huile et de la poussière incrustée. L'autolaveuse combinée à un dégraissant adapté au support traite l'ensemble de la surface en passes régulières.</p>\n<p class=\"mt-4\">Les rampes, angles morts et pieds de murs reçoivent une attention particulière car ils concentrent les salissures les plus tenaces.</p>\n\n<h3>2. Gestion maîtrisée des eaux</h3>\n<p>Les eaux de lavage sont dirigées vers les évacuations existantes sans rejet sauvage. Avant le démarrage, nous vérifions l'état des regards et rigoles pour éviter tout engorgement.</p>\n<p class=\"mt-4\">Sur les sols en résine fréquents dans les parkings récents, la pression et les produits sont ajustés pour préserver le revêtement.</p>\n\n<h3>3. Chantier organisé, gêne limitée</h3>\n<p>Le balisage sécurise les usagers pendant l'intervention. La rotation des véhicules s'effectue par zones successives, en accord avec le gardien ou le gestionnaire.</p>\n<p class=\"mt-4\">Un compte-rendu avec photos avant/après peut être transmis au syndic, accompagné d'une recommandation de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "Sols en résine sensibles aux produits agressifs : dosage et pression ajustés.",
        "Rampes hélicoïdales étroites nécessitant un passage manuel complémentaire.",
        "Fuites d'huile anciennes incrustées dans le béton des places de stationnement.",
        "Créneaux d'accès limités par les gardiens dans les résidences standing.",
        "Évacuations parfois encombrées, à vérifier avant mise en eau.",
      ],
      faqAdditions: [
        {
          question:
            "Comment traitez-vous les taches d'huile anciennes dans un parking souterrain des Bords de Seine ?",
          answer: "<p>Nous appliquons un dégraissant concentré sur les zones marquées, laissons agir puis passons l'autolaveuse pour décoller les résidus. Sur les taches très incrustées, un brossage mécanique préalable renforce l'efficacité. Le résultat dépend de l'ancienneté et de la porosité du béton.</p>",
        },
        {
          question:
            "Comment gérez-vous les eaux de lavage lors d'un décrassage haute pression en sous-sol à Issy-les-Moulineaux ?",
          answer: "<p>Avant l'intervention, nous contrôlons l'état des regards et rigoles pour éviter tout refoulement. Les eaux sont dirigées vers les évacuations existantes, sans rejet vers la voirie. Si le réseau est fragile, nous adaptons le débit et procédons par zones successives.</p>",
        },
        {
          question:
            "Quels horaires conseillez-vous quand un gardien impose des créneaux stricts dans une résidence récente ?",
          answer: "<p>Nous privilégions les matinées tôt ou les fins de journée, selon les contraintes du gardien. Un planning partagé à l'avance permet de réserver les places concernées et d'informer les résidents. Cette organisation évite les blocages et limite les réclamations.</p>",
        },
        {
          question:
            "Sur un sol en résine fréquent dans les parkings récents, quelle adaptation machine et produit utilisez-vous ?",
          answer: "<p>L'autolaveuse est réglée à basse pression pour ne pas endommager le revêtement. Nous utilisons un dégraissant neutre compatible résine, testé sur une zone discrète avant généralisation. Cette précaution préserve l'aspect brillant du sol tout en éliminant les salissures.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Remise en état complète de votre balcon à Issy-les-Moulineaux, avec traitement adapté au support et gestion maîtrisée des écoulements pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : vent de Seine, pollution des axes, proximité des espaces verts isséens.",
        "Pression ajustée selon le support — dalles, béton, composite — pour un résultat net sans détérioration.",
        "Organisation anti-coulures et coordination avec le voisinage pour une intervention discrète en immeuble.",
      ],
      uniqueIntro: "<p>Dans les résidences récentes des Bords de Seine ou les loggias du Val de Seine, les balcons accumulent rapidement un voile grisâtre. Poussières fines portées par le vent, dépôts verts dans les angles, traces noires le long des garde-corps : l'espace extérieur perd son attrait en quelques saisons. On repousse l'apéritif dehors, on hésite à y installer les plantes.</p>\n<p class=\"mt-4\">Un balcon propre change la perception du logement. La lumière entre mieux, l'envie de profiter de l'extérieur revient. Dans les immeubles aux supports variés — dalles sur plots, béton brut ou bois composite selon les secteurs — chaque matériau demande une approche spécifique pour retrouver son aspect d'origine sans risquer d'abîmer les joints ou le revêtement.</p>\n<p class=\"mt-4\">La pollution provenant des axes proches et les résidus végétaux des parcs voisins influencent la fréquence d'entretien nécessaire. Une intervention structurée permet de traiter l'ensemble — sol, garde-corps, vitrages — en une seule session, avec protection des éléments sensibles et contrôle des écoulements vers les étages inférieurs.</p>",
      uniqueDeepDive: "<h3>1. Dépôts accumulés et préparation</h3>\n<p>Les feuilles mortes, la terre séchée et les débris coincés dans les angles sont d'abord retirés manuellement. Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries reçoivent une protection pour éviter les projections.</p>\n\n<h3>2. Encrassement des surfaces</h3>\n<p>Un produit adapté au support est appliqué : formule douce pour le bois composite, désincrustant pour le béton, nettoyant neutre pour les dalles sur plots. Le brossage — manuel ou mécanique selon l'état — décolle les salissures tenaces. Le rinçage s'effectue à pression contrôlée, en orientant le jet pour limiter les écoulements chez les voisins du dessous.</p>\n\n<h3>3. Garde-corps et finitions</h3>\n<p>Les barreaux, vitrages et murs mitoyens accessibles sont traités dans la foulée. Les joints sont vérifiés pour éviter toute infiltration. Le séchage naturel est favorisé ; des conseils d'entretien courant vous sont transmis pour espacer les prochaines interventions.</p>",
      specificChallenges: [
        "Dalles sur plots aux Bords de Seine : nettoyage sans déplacer les éléments ni abîmer les joints.",
        "Loggias semi-fermées du Val de Seine accumulant poussières fines et traces de pluie sur les vitrages.",
        "Règlements de copropriété stricts sur l'écoulement des eaux vers les étages inférieurs.",
        "Balcons en étage élevé nécessitant une logistique adaptée pour le matériel.",
        "Dépôts verts persistants liés à la proximité du Parc de l'Île Saint-Germain.",
      ],
      faqAdditions: [
        {
          question:
            "Pour des dalles sur plots aux Bords de Seine, quelle méthode utilisez-vous pour préserver les joints ?",
          answer: "<p>Nous travaillons à basse pression avec un jet orienté à plat, ce qui évite de soulever les dalles ou d'infiltrer l'eau sous le revêtement. Un brossage manuel complète l'action sur les zones encrassées entre les plots, sans forcer sur les espacements.</p>",
        },
        {
          question:
            "Comment gérez-vous le nettoyage quand le règlement de copropriété du Fort d'Issy limite l'écoulement des eaux ?",
          answer: "<p>Nous utilisons une aspiration au sol et des bâches de rétention pour canaliser l'eau vers un point de collecte. Le rinçage est fractionné en petites quantités, ce qui permet de contrôler chaque écoulement et d'éviter tout désagrément pour les voisins du dessous.</p>",
        },
        {
          question:
            "Sur un balcon exposé au vent depuis la Seine, quelles précautions prenez-vous ?",
          answer: "<p>Le matériel léger est sécurisé et les produits appliqués par temps calme pour éviter les projections. Le séchage est généralement rapide grâce à la ventilation naturelle, mais nous vérifions l'absence de traces résiduelles avant de remettre le mobilier en place.</p>",
        },
        {
          question:
            "Pour un balcon en étage élevé dans une tour isséenne, comment organisez-vous l'accès ?",
          answer: "<p>Nous montons le matériel en plusieurs rotations si l'ascenseur est de taille réduite, et protégeons les parties communes lors du passage. L'intervention reste concentrée sur une demi-journée pour limiter les allers-retours et la gêne dans les couloirs.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et évacuation sécurisée des déchets contaminés.",
      whyUsBullets: [
        "Connaissance des zones à risque isséennes, notamment les abords des parcs et les immeubles anciens du centre-ville.",
        "Protocole complet avec EPI adaptés, confinement de la zone et désinfection par produit homologué.",
        "Organisation de l'évacuation des déchets en coordination avec le voisinage, y compris en secteur piétonnier.",
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les balcons situés à proximité du Parc de l'Île Saint-Germain ou du Parc Jean-Paul II accumulent des dépôts de fientes qui s'incrustent sur le sol et les garde-corps. L'odeur devient gênante, le linge ne peut plus sécher dehors, et l'espace extérieur perd son utilité quotidienne.</p>\n<p class=\"mt-4\">Les corniches et garde-corps anciens du centre-ville retiennent particulièrement ces salissures, tout comme les toits-terrasses du Fort d'Issy où les pigeons trouvent refuge. Au fil du temps, l'acide contenu dans les déjections attaque le béton, la peinture et les éléments métalliques. Sans traitement, la dégradation s'accélère et le balcon devient un espace que l'on évite.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un extérieur sain. Le protocole inclut la désinfection des surfaces, la gestion des déchets contaminés et une coordination avec le voisinage pour limiter les nuisances pendant l'évacuation. Chaque étape vise à éliminer les risques sanitaires tout en préservant vos supports.</p>",
      uniqueDeepDive: "<h3>1. Balcon assaini et désinfecté</h3>\n<p>L'objectif est de restituer un espace extérieur utilisable, débarrassé des agents pathogènes et des odeurs persistantes. Les surfaces retrouvent leur aspect d'origine, sans résidu visible ni risque de contamination au contact.</p>\n\n<h3>2. Confinement et collecte sécurisée</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières, puis conditionnées en sacs étanches.</p>\n\n<h3>3. Traitement des supports et évacuation</h3>\n<p>Sol, garde-corps, vitrages et murs mitoyens reçoivent un produit virucide et bactéricide avec temps de contact respecté. Un rinçage final précède l'aération du balcon. Les déchets sont évacués dans des conditions sécurisées. Si nécessaire, des dispositifs anti-retour comme des pics ou filets peuvent être posés sur les rebords exposés.</p>",
      specificChallenges: [
        "Proximité des parcs favorisant la présence régulière de pigeons sur les balcons exposés.",
        "Garde-corps métalliques anciens au centre-ville, sensibles à la corrosion par les fientes acides.",
        "Toits-terrasses du Fort d'Issy offrant des zones de nidification aux oiseaux.",
        "Accès en zone piétonne près de l'Hôtel de Ville compliquant l'évacuation des déchets.",
        "Règlements de copropriété stricts sur l'écoulement des eaux lors du rinçage.",
      ],
      faqAdditions: [
        {
          question:
            "Mon balcon proche de l'Île Saint-Germain est couvert de fientes depuis plusieurs semaines. Quels risques sanitaires et sous quel délai pouvez-vous intervenir ?",
          answer: "<p>Les fientes de pigeons peuvent contenir des agents pathogènes transmissibles par inhalation de poussières sèches. Sur un balcon exposé aux oiseaux du parc, le risque augmente avec l'accumulation. Nous intervenons généralement sous quelques jours pour sécuriser et assainir l'espace.</p>",
        },
        {
          question:
            "Quel protocole de protection et quel type de désinfectant utilisez-vous pour traiter un balcon contaminé dans le centre-ville d'Issy ?",
          answer: "<p>L'intervenant porte masque FFP2, combinaison jetable, gants et lunettes. La zone est confinée par bâchage. Après collecte des fientes humidifiées, un produit virucide et bactéricide homologué est appliqué sur toutes les surfaces avec un temps de contact suffisant avant rinçage.</p>",
        },
        {
          question:
            "La désinfection permet-elle d'éliminer les risques sur un garde-corps métallique attaqué par les fientes ?",
          answer: "<p>Le traitement désinfectant neutralise les agents pathogènes présents sur le métal. En revanche, si la corrosion a déjà endommagé la peinture ou le revêtement, une remise en état complémentaire peut être nécessaire. Nous signalons systématiquement les dégradations constatées.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation des déchets contaminés quand le balcon donne sur la zone piétonne près de l'Hôtel de Ville ?",
          answer: "<p>Les déchets sont conditionnés en sacs étanches dès la collecte. En secteur piétonnier, nous organisons l'évacuation en début de matinée ou en fin de journée pour limiter la gêne. Le stationnement temporaire est coordonné avec les contraintes locales d'accès.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Détachage et rafraîchissement de vos canapés, tapis et matelas à domicile, avec extraction des salissures incrustées et séchage maîtrisé pour une remise en service rapide.",
      whyUsBullets: [
        "Connaissance des intérieurs isséens, du boulevard Rodin aux résidences des Épinettes, pour anticiper les contraintes d'accès.",
        "Détachage enzymatique adapté à chaque fibre, extraction puissante et séchage maîtrisé selon l'épaisseur du textile.",
        "Créneaux souples, matériel monté à l'étage malgré les ascenseurs protégés, remise en service sous 24 heures selon ventilation.",
      ],
      uniqueIntro: "<p>Comment préserver l'aspect d'un canapé quand les enfants y prennent leur goûter et que le chien s'y installe chaque soir ? Dans les quartiers résidentiels comme <strong>Les Épinettes</strong> ou <strong>La Ferme</strong>, les textiles d'ameublement accumulent taches alimentaires, poils d'animaux et poussières fines bien plus vite qu'on ne l'imagine. Les fibres se ternissent, les odeurs s'installent, et le simple passage d'aspirateur ne suffit plus.</p>\n<p class=\"mt-4\">Un entretien régulier redonne du confort au quotidien. Dans les <strong>appartements T2 à T4</strong> récents d'Issy-les-Moulineaux, les canapés d'angle en microfibre ou les tapis en laine synthétique retrouvent leurs couleurs d'origine après une intervention adaptée. Les acariens sont éliminés, les auréoles disparaissent, et l'ensemble redevient agréable au toucher comme à l'œil.</p>\n<p class=\"mt-4\">Nous organisons chaque prestation en tenant compte des contraintes d'accès : stationnement limité, ascenseurs parfois protégés, horaires compatibles avec la vie de famille. Le diagnostic textile précède toute action pour adapter la méthode au revêtement.</p>",
      uniqueDeepDive: "<h3>1. Textile assaini et odeurs neutralisées</h3>\n<p>Le résultat visé : des fibres débarrassées des salissures incrustées, des taches estompées ou supprimées, et une fraîcheur retrouvée. Sur un canapé sollicité par des enfants ou des animaux, cela signifie aussi l'élimination des allergènes et des résidus organiques responsables des mauvaises odeurs.</p>\n\n<h3>2. Diagnostic et pré-traitement ciblé</h3>\n<p>Avant toute injection, nous identifions le type de tissu (coton, velours, synthétique, laine) et la nature des taches. Un test discret sur zone cachée valide la compatibilité du produit. Les salissures tenaces reçoivent un détachant enzymatique appliqué localement.</p>\n\n<h3>3. Injection-extraction et séchage contrôlé</h3>\n<p>La machine injecte une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de résidus. La pression et la température sont ajustées selon la fragilité du textile. Nous indiquons ensuite le temps de séchage nécessaire — généralement quelques heures avec une bonne aération — et les précautions d'usage avant remise en service complète.</p>",
      specificChallenges: [
        "Taches récurrentes liées aux enfants et animaux dans les foyers des Épinettes et de La Ferme.",
        "Canapés d'angle volumineux difficiles à déplacer dans les T3 et T4 récents.",
        "Stationnement payant quasi partout : organisation du matériel en amont indispensable.",
        "Ascenseurs parfois protégés dans les résidences neuves du Fort ou des Bords de Seine.",
        "Textiles variés (microfibre, velours, laine) nécessitant un diagnostic préalable.",
      ],
      faqAdditions: [
        {
          question:
            "Chez des familles aux Épinettes, comment éliminez-vous acariens et allergènes d'un canapé tissu trois places ?",
          answer: "<p>L'injection-extraction atteint les fibres en profondeur, là où les acariens et leurs déjections s'accumulent. La solution nettoyante déloge ces résidus, puis l'aspiration les évacue avec l'eau. Après séchage complet, le textile est assaini et plus sain pour les enfants sensibles aux allergies.</p>",
        },
        {
          question:
            "Pour une tache d'urine ancienne sur un canapé tissu, quelle méthode garantit neutralisation d'odeur et disparition de la marque ?",
          answer: "<p>Nous appliquons un détachant enzymatique qui décompose les composés organiques responsables de l'odeur. L'injection-extraction retire ensuite les résidus en profondeur. Sur les taches anciennes, un second passage peut être nécessaire. Le textile retrouve un aspect uniforme et une odeur neutre.</p>",
        },
        {
          question:
            "Avec ascenseurs protégés et stationnement limité à Issy-les-Moulineaux, comment organisez-vous la prestation de shampouinage à domicile ?",
          answer: "<p>Nous repérons en amont les possibilités de stationnement courte durée et les accès immeuble. Le matériel est compact et transportable à l'étage sans abîmer les parois. Nous convenons d'un créneau adapté à vos contraintes pour limiter les allers-retours et intervenir efficacement.</p>",
        },
        {
          question:
            "Quel procédé technique utilisez-vous pour un canapé en microfibre versus un canapé en laine dans un appartement récent ?",
          answer: "<p>La microfibre supporte une pression d'injection plus élevée et sèche rapidement. La laine exige une température modérée et un temps de séchage plus long pour éviter le feutrage. Dans les deux cas, un test préalable sur zone cachée valide la compatibilité avant de traiter l'ensemble du textile.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Remise en état complète de votre terrasse à Issy-les-Moulineaux : traitement adapté au support, élimination des mousses et dépôts verts, protection du mobilier et séchage contrôlé.",
      whyUsBullets: [
        "Connaissance des contraintes locales : humidité liée à la Seine, exposition aux vents sur les hauteurs du Fort d'Issy.",
        "Maîtrise des supports variés : bois, composite, dalles gravillonnées, avec traitement anti-mousse adapté à chaque matériau.",
        "Organisation respectueuse de votre intérieur : bâchage des sols, gestion de l'écoulement, intervention planifiée selon vos disponibilités.",
      ],
      uniqueIntro: "<p>Les traces vertes et les dépôts noirâtres s'installent progressivement sur les terrasses des penthouses du Val de Seine comme sur les toits-terrasses du Fort d'Issy. L'exposition au vent d'ouest, combinée à la proximité de la Seine, accélère l'apparition de mousses et de lichens qui rendent les surfaces glissantes et peu engageantes. Ces salissures persistent malgré les balayages réguliers.</p>\n<p class=\"mt-4\">Sur les lames bois, les dalles gravillonnées ou les dalles sur plots, chaque support réagit différemment à l'humidité ambiante. Un entretien inadapté risque d'endommager les joints, de griser le bois prématurément ou de décoller les revêtements. Le choix de la méthode conditionne directement la durabilité du résultat et l'aspect final de votre espace extérieur.</p>\n<p class=\"mt-4\">L'accès à certaines terrasses s'effectue uniquement par l'appartement, ce qui impose une protection rigoureuse des sols intérieurs. Notre intervention intègre cette contrainte dès le diagnostic, avec un plan de circulation et des bâchages adaptés à la configuration de votre logement.</p>",
      uniqueDeepDive: "<h3>1. Préparation et protection</h3>\n<p>Le mobilier extérieur, les jardinières et les plantes sont déplacés ou bâchés. Les baies vitrées et menuiseries reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage préalable élimine les feuilles mortes, la terre accumulée et les débris végétaux avant tout traitement humide.</p>\n\n<h3>2. Traitement adapté au support</h3>\n<p>Un produit spécifique est appliqué selon la nature du revêtement : dégraissant pour le bois composite, anti-mousse pour la pierre naturelle, nettoyant neutre pour les dalles sur plots.</p>\n<p class=\"mt-4\">Le brossage manuel ou mécanique décolle les salissures incrustées. La haute pression intervient uniquement sur les supports qui la tolèrent, avec une pression contrôlée pour préserver les joints.</p>\n\n<h3>3. Rinçage et finalisation</h3>\n<p>L'eau de rinçage est dirigée vers les points d'écoulement existants. Les plantations proches sont protégées des projections de produit.</p>\n<p class=\"mt-4\">Après séchage, nous vérifions l'ensemble de la surface et formulons des conseils d'entretien saisonnier adaptés à votre exposition.</p>",
      specificChallenges: [
        "Mousses tenaces favorisées par l'humidité proche de la Seine et l'ombre des bâtiments voisins.",
        "Supports variés selon les résidences : lames bois au Fort, dalles sur plots dans les rez-de-jardin.",
        "Accès par l'appartement fréquent, nécessitant protection des sols intérieurs et organisation du passage.",
        "Vent d'ouest sur les terrasses en hauteur, accélérant le noircissement des surfaces exposées.",
        "Règlements de copropriété stricts sur l'écoulement des eaux dans les résidences récentes.",
      ],
      faqAdditions: [
        {
          question:
            "Sur une terrasse bois d'un penthouse du Val de Seine, quelle méthode utilisez-vous pour ne pas abîmer le revêtement ?",
          answer: "<p>Nous privilégions un nettoyage basse pression associé à un produit spécifique bois. Cette approche préserve les fibres et évite le grisaillement prématuré. Le brossage manuel complète l'action sur les zones encrassées sans agresser la surface.</p>",
        },
        {
          question:
            "Ma terrasse proche de la Seine est couverte de mousse verte : un simple karcher suffit-il ou faut-il un traitement spécifique ?",
          answer: "<p>La haute pression seule décolle la mousse en surface mais ne traite pas les spores. Nous appliquons un anti-mousse professionnel qui agit en profondeur et retarde la réapparition. Le résultat reste visible plusieurs mois selon l'exposition.</p>",
        },
        {
          question:
            "Pour des dalles gravillonnées, préférez-vous la haute pression ou une méthode plus douce ?",
          answer: "<p>Les dalles gravillonnées supportent mal une pression trop forte qui déchausse les gravillons. Nous utilisons une pression modérée combinée à un brossage adapté. Cette technique nettoie efficacement sans dégrader la structure du revêtement.</p>",
        },
        {
          question:
            "Quel traitement anti-mousse appliquez-vous sur des dalles sur plots en rez-de-jardin à Issy ?",
          answer: "<p>Un produit anti-mousse biodégradable est pulvérisé après le nettoyage. Il pénètre dans les joints et les micro-porosités pour freiner la repousse. L'application respecte les plantations environnantes et les écoulements vers le jardin.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement après travaux, déménagement ou rotation locative, avec nettoyage minutieux de chaque pièce et respect des délais convenus avec l'agence ou le propriétaire.",
      whyUsBullets: [
        "Connaissance des résidences récentes du Fort d'Issy et des Épinettes, où les états des lieux s'enchaînent régulièrement.",
        "Polyvalence sur tous types de sols et de finitions, du parquet flottant au carrelage grand format des pièces humides.",
        "Coordination directe avec les agences et les artisans pour respecter les créneaux de remise de clés sans retard.",
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou quelques années d'occupation, un appartement accumule des traces que le ménage courant ne suffit pas à éliminer. Dans les secteurs résidentiels des Hauts d'Issy et du Fort, où les rotations locatives restent fréquentes, cette situation se répète à chaque changement de locataire ou livraison de programme neuf. Les agences immobilières connaissent bien cette contrainte de calendrier.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite l'état des lieux et évite les litiges sur le dépôt de garantie. Dans les appartements récents équipés de parquet flottant ou stratifié et de carrelage en pièces humides, les résidus de chantier ou les traces d'usage quotidien nécessitent un traitement adapté à chaque revêtement. Le résultat conditionne la première impression du futur occupant.</p>\n<p class=\"mt-4\">Nous organisons chaque intervention en fonction des délais imposés par les agences, les artisans ou les propriétaires. Le planning intègre les contraintes d'accès aux résidences sécurisées et la coordination avec les autres intervenants présents sur site.</p>",
      uniqueDeepDive: "<h3>1. Logement prêt à remettre les clés</h3>\n<p>L'objectif est un appartement propre dans chaque recoin, des plafonds aux plinthes. Nous traitons les sols selon leur nature, les pièces d'eau en profondeur et les finitions souvent négligées comme les interrupteurs ou l'intérieur des placards.</p>\n\n<h3>2. Diagnostic et préparation ciblée</h3>\n<p>Avant de commencer, nous identifions le type d'intervention requis : fin de chantier avec résidus de peinture, état des lieux standard ou grand ménage après déménagement. Cette évaluation détermine les produits et le temps nécessaire. Les surfaces fragiles sont protégées si des travaux sont encore en cours à proximité.</p>\n\n<h3>3. Exécution méthodique par zone</h3>\n<p>Le dépoussiérage complet précède le lavage des sols. Les sanitaires, la cuisine et les vitres intérieures sont traités séparément avec des produits adaptés. Un contrôle final vérifie chaque pièce avant aération et remise des clés selon le planning convenu.</p>",
      specificChallenges: [
        "Délais serrés entre deux locataires dans les résidences à forte rotation du Fort d'Issy.",
        "Résidus de peinture et d'enduit sur les sols après livraison de programmes neufs.",
        "Accès par badge Vigik et coordination avec le gardien pour les créneaux d'intervention.",
        "Parquets flottants sensibles nécessitant un nettoyage sans excès d'eau.",
        "Stationnement difficile imposant une organisation logistique anticipée.",
      ],
      faqAdditions: [
        {
          question:
            "Pour un nettoyage fin de chantier dans le quartier des Épinettes, quelles étapes techniques garantissent un état des lieux sans réserve ?",
          answer: "<p>Nous commençons par l'élimination des résidus de chantier : poussières de plâtre, traces de peinture, films protecteurs oubliés. Les sols sont ensuite traités selon leur nature, puis les vitres intérieures et les sanitaires sont nettoyés en profondeur. Un contrôle pièce par pièce clôture l'intervention.</p>",
        },
        {
          question:
            "Quel est le délai d'intervention pour une remise en état avant état des lieux à Issy-les-Moulineaux ?",
          answer: "<p>Nous intervenons selon la taille du logement et la période. En cas d'urgence liée à une date d'état des lieux imminente, nous adaptons notre planning pour proposer un créneau adapté, y compris en soirée ou le samedi matin.</p>",
        },
        {
          question:
            "Comment coordonnez-vous le nettoyage avec les artisans et l'agence immobilière pour une remise rapide ?",
          answer: "<p>Nous échangeons directement avec l'agence ou le propriétaire pour caler notre passage après les derniers travaux. Si des artisans sont encore présents, nous protégeons les zones nettoyées et ajustons notre progression pour éviter les allers-retours inutiles.</p>",
        },
        {
          question:
            "Sur un parquet flottant récent, quelles précautions prenez-vous pour nettoyer sans abîmer la finition ?",
          answer: "<p>Nous utilisons des microfibres légèrement humides et des produits neutres adaptés aux sols stratifiés. L'aspiration préalable élimine les particules abrasives. Le séchage est rapide, ce qui évite toute infiltration d'eau dans les joints du revêtement.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;