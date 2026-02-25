import type { City } from "~/types/geo";

const city: City = {
  name: "Courbevoie",
  slug: "courbevoie",
  postalCodes: ["92400"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings et espaces extérieurs à Courbevoie. Du quartier Bécon aux immeubles proches de La Défense, une organisation adaptée aux contraintes d'accès et aux exigences locales.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Format : 2 <p> puis <ul>
  hubIntro: "<p>Entre le quartier d'affaires de La Défense et les rives de Seine du Parc de Bécon, Courbevoie concentre des typologies de bâtiments variées. Klinova s'y positionne comme partenaire terrain pour les syndics, gestionnaires et occupants qui recherchent un interlocuteur réactif et structuré.</p>\n<p class=\"mt-4\">Notre équipe coordonne les interventions de propreté et de remise en état selon les contraintes propres à chaque site : accès badge, horaires décalés, stationnement limité. Un suivi clair est proposé aux donneurs d'ordre qui le souhaitent.</p>\n<ul>\n  <li><strong>Coordination avec gardiens et gestionnaires :</strong> Prise de contact préalable, transmission des consignes d'accès, intervention calée sur les disponibilités du site.</li>\n  <li><strong>Adaptation aux configurations locales :</strong> Parkings multi-niveaux sous dalle, halls sécurisés, balcons exposés à la pollution du Boulevard Circulaire.</li>\n  <li><strong>Matériel acheminé sur place :</strong> Véhicule équipé, autonomie en eau et électricité pour les sites sans branchement accessible.</li>\n</ul>",


  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains multi-niveaux</strong> sous la dalle : accès restreint, ventilation à prendre en compte.",
    "Balcons exposés aux <strong>particules fines</strong> du Boulevard Circulaire et de l'A14.",
    "Halls d'immeubles anciens à Bécon : <strong>escaliers étroits</strong>, manœuvre du matériel délicate.",
    "Copropriétés de standing avec <strong>gardien et badge obligatoire</strong> : coordination préalable indispensable.",
    "Proximité du Parc de Bécon : <strong>fientes d'oiseaux</strong> sur corniches et terrasses.",
    "Stationnement très contraint : nécessité d'anticiper l'<strong>acheminement du matériel</strong>.",
  ],

  // Texte brut uniquement
  districts: ["Bécon", "Faubourg de l'Arche", "Cœur de Ville", "Gambetta"],
  nearbyCities: ["Nanterre", "Puteaux", "Neuilly-sur-Seine", "Levallois-Perret", "Asnières-sur-Seine", "La Garenne-Colombes"],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Courbevoie",
    "Tour First",
    "Parc de Bécon",
    "Gare de Bécon-les-Bruyères",
    "Pont de Courbevoie",
    "Tour TotalEnergies",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment se déroule la prise de rendez-vous pour une copropriété à Courbevoie ?",
      answer: "<p>Nous contactons le syndic ou le gardien pour récupérer les <strong>consignes d'accès</strong> (badge, digicode, horaires autorisés). L'intervention est planifiée en fonction des contraintes du site. Un créneau est confirmé par écrit, avec rappel la veille si nécessaire.</p>",
    },
    {
      question: "Intervenez-vous en horaires décalés pour les bureaux ?",
      answer: "<p>Oui. Pour les locaux professionnels, nous proposons des créneaux <strong>tôt le matin, en soirée ou le week-end</strong>. Cela permet d'éviter toute gêne pour les occupants et de travailler sur des surfaces libérées.</p>",
    },
    {
      question: "Le stationnement est compliqué dans certains secteurs. Comment gérez-vous cela ?",
      answer: "<p>Nous anticipons ce point lors de la préparation. Selon le quartier, nous utilisons les <strong>parkings publics à proximité</strong> ou sollicitons une autorisation temporaire auprès du gestionnaire. Le matériel est acheminé sur chariot si besoin.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention à Courbevoie ?",
      answer: "<p>Oui. Après échange téléphonique ou visite si nécessaire, nous transmettons un <strong>devis détaillé</strong> précisant le périmètre, les méthodes envisagées et le délai. Aucune intervention n'est engagée sans validation préalable.</p>",
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
      heroDescription: "Extraction en profondeur des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en service rapide de vos espaces professionnels ou résidentiels.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et des exigences des immeubles tertiaires du secteur La Défense à Courbevoie.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et aux moquettes velours des espaces de bureaux.",
        "Interventions planifiées en soirée ou le week-end pour limiter la gêne et permettre un séchage complet avant reprise d'activité.",
      ],
      uniqueIntro: "<p>Les traces grises sur les zones de passage, les auréoles autour des postes de travail et le ternissement général des fibres sont visibles dans de nombreux <strong>open spaces des tours de La Défense</strong>. Ces marques s'accumulent rapidement sous l'effet du piétinement quotidien et des particules fines transportées depuis l'extérieur. Dans les bureaux proches de la Tour TotalEnergies ou des sièges sociaux du secteur, les dalles textiles perdent leur aspect d'origine en quelques mois seulement.</p>\n<p class=\"mt-4\">Un entretien régulier redonne aux fibres leur tenue et leur couleur initiale. Les <strong>dalles textiles et moquettes techniques en grand open-space</strong> retrouvent un aspect homogène, sans zones marquées ni différences de teinte entre les passages fréquentés et les espaces moins sollicités. L'environnement de travail gagne en propreté visible, ce qui contribue à l'image professionnelle des locaux.</p>\n<p class=\"mt-4\">Le <strong>flux intense de salariés transitant par le métro Ligne 1 et le RER A</strong> génère un encrassement continu. Une intervention structurée, avec diagnostic préalable et protections adaptées, permet de traiter efficacement ces surfaces sans perturber l'activité des équipes.</p>",
      uniqueDeepDive: "<h3>Zones de circulation principale</h3>\
<p>Les couloirs, halls d'accueil et espaces entre les postes concentrent l'essentiel des salissures. Nous identifions d'abord le type de fibre et relevons les taches spécifiques. <strong>L'aspiration préalable retire les particules libres</strong> avant le traitement humide.</p>\
<p class=\"mt-4\">Les protections sont posées sur les plinthes et le mobilier fixe pour éviter tout contact avec l'humidité.</p>\
\
<h3>Espaces de travail et postes individuels</h3>\
<p>Sous les bureaux et autour des sièges, les fibres subissent un frottement différent. <strong>L'injection-extraction cible ces zones</strong> avec des passes adaptées à la densité du trafic. Le détachage ponctuel traite les marques de café ou d'encre identifiées lors du diagnostic.</p>\
<p class=\"mt-4\">Les dalles amovibles peuvent être traitées individuellement si leur état le justifie.</p>\
\
<h3>Périphérie et zones moins sollicitées</h3>\
<p>Les abords de fenêtres et les recoins reçoivent un passage d'homogénéisation. L'extraction finale retire le maximum d'humidité résiduelle. Le temps de séchage varie selon l'épaisseur des fibres et la ventilation disponible dans les locaux.</p>",
      specificChallenges: [
        "Dalles textiles des open spaces soumises à un piétinement intensif quotidien.",
        "Accès sécurisé par badges nécessitant une coordination préalable avec les gestionnaires.",
        "<strong>Séchage à anticiper</strong> selon la ventilation des plateaux et les horaires de reprise d'activité.",
        "<strong>Particules fines et poussières urbaines</strong> transportées depuis les transports en commun proches.",
        "Contraintes horaires strictes imposant des interventions en dehors des heures de bureau.",
      ],
      faqAdditions: [
        {
          question: "Comment gérez-vous l'accès et le matériel pour les dalles textiles dans les tours de La Défense à Courbevoie ?",
          answer: "<p>Nous coordonnons <strong>l'intervention avec le gestionnaire</strong> ou le responsable des locaux pour obtenir les badges nécessaires. Le matériel est acheminé par les accès de service prévus dans les immeubles tertiaires. Les horaires sont calés sur les créneaux autorisés, généralement en soirée ou le weekend, pour éviter toute perturbation des équipes présentes.</p>",
        },
        {
          question: "Quel est le temps de séchage après traitement pour les moquettes de bureaux très sollicités à La Défense ?",
          answer: "<p><strong>Le séchage varie entre 4 et 8 heures</strong> selon l'épaisseur des fibres et la ventilation des locaux. L'extraction poussée limite l'humidité résiduelle. Pour les plateaux climatisés, le temps peut être réduit. Nous recommandons de planifier l'intervention en fin de semaine pour une remise en service complète le lundi matin.</p>",
        },
        {
          question: "Quelle méthode recommandez-vous pour une moquette dalle en open space : injection-extraction ou encapsulation ?",
          answer: "<p>L'injection-extraction reste la méthode la plus efficace pour un nettoyage en profondeur des dalles textiles. Elle retire les salissures incrustées dans les fibres. L'encapsulation convient davantage à un entretien intermédiaire entre deux interventions complètes. Le choix dépend de l'état initial et de la fréquence d'entretien souhaitée.</p>",
        },
        {
          question: "Comment adaptez-vous le protocole selon l'épaisseur et le type de moquette à Courbevoie ?",
          answer: "<p>Le diagnostic initial identifie la nature des fibres : velours ras, bouclé, dalle technique. Les réglages de pression et le nombre de passes varient en fonction de l'épaisseur. Une moquette fine supporte moins d'humidité qu'une dalle épaisse. Le temps de séchage et les protections sont ajustés pour chaque configuration rencontrée.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec traitement des taches d'huile, gestion sécurisée des eaux de lavage et balisage adapté aux contraintes d'accès de votre copropriété ou entreprise.",
      whyUsBullets: [
        "Connaissance des parkings sous dalle et des contraintes d'accès spécifiques aux copropriétés de Courbevoie.",
        "Autolaveuses professionnelles et gestion stricte des eaux de lavage pour respecter vos évacuations.",
        "Coordination préalable avec syndics et gestionnaires, balisage sécurisé et rotation véhicules organisée.",
      ],
      uniqueIntro: "<p>Comment maintenir des sols de parking propres et sécurisés quand le trafic quotidien ne faiblit jamais ? Les parkings proches du Centre Événementiel de Courbevoie ou situés sous la dalle subissent un passage constant de véhicules, générant une accumulation de poussières de carbone, traces de pneus et coulures d'huile sur les allées de circulation.</p>\n<p class=\"mt-4\">Un sol encrassé devient glissant, surtout sur les revêtements en béton peint ou résine époxy fréquents dans les parkings souterrains multi-niveaux. Les résidents se plaignent, les gestionnaires reçoivent des signalements, et l'image de la copropriété ou de l'entreprise se dégrade. Un lavage mécanisé régulier restaure l'adhérence des sols et améliore la perception générale des espaces communs.</p>\n<p class=\"mt-4\">Face au trafic important lié aux commerces et aux bureaux de La Défense, une intervention structurée s'impose : diagnostic du revêtement, coordination avec le syndic ou le gestionnaire, balisage sécurisé et gestion rigoureuse des eaux usées pour respecter les évacuations existantes.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation du chantier</h3>\n<p>Avant toute intervention, nous identifions le type de revêtement (béton brut, peinture, résine) et vérifions l'état des regards et rigoles d'évacuation. Un balayage préalable élimine les débris grossiers.</p>\n<p class=\"mt-4\">Le balisage est installé pour sécuriser les zones de travail. Si nécessaire, une rotation des véhicules est organisée avec le gestionnaire pour libérer les allées par secteur.</p>\n\n<h3>Traitement mécanisé et dégraissage</h3>\n<p>L'autolaveuse effectue des passes sur les surfaces principales. Un dégraissant adapté est appliqué sur les zones critiques : emplacements de stationnement tachés, rampes d'accès, pieds de murs et angles morts.</p>\n<p class=\"mt-4\">Les rigoles et regards sont nettoyés pour garantir un écoulement correct des eaux de lavage.</p>\n\n<h3>Contrôle et finalisation</h3>\n<p>Les eaux usées sont aspirées ou dirigées vers les évacuations conformes. Un dépoussiérage des blocs lumineux et tuyauteries peut être réalisé sur demande.</p>\n<p class=\"mt-4\">Nous transmettons un compte-rendu au syndic ou gestionnaire, avec recommandations sur la fréquence d'entretien adaptée au trafic constaté.</p>",
      specificChallenges: [
        "Parkings multi-niveaux sous la dalle : accès restreints et ventilation à prendre en compte.",
        "Sols en résine époxy sensibles aux produits agressifs : choix du détergent adapté.",
        "Trafic quotidien intense lié aux bureaux de La Défense : intervention en horaires décalés.",
        "Gestion des eaux de lavage obligatoire pour éviter tout rejet non conforme.",
        "Rampes d'accès inclinées : traitement antidérapant et séchage contrôlé.",
      ],
      faqAdditions: [
        {
          question: "Faut-il prévoir une signalisation et fermeture partielle pour nettoyer un parking souterrain sous la dalle de La Défense ?",
          answer: "<p>Oui, nous installons un balisage visible avant chaque intervention. Selon la configuration, une fermeture partielle par niveau ou par allée permet de travailler en sécurité tout en maintenant l'accès aux autres emplacements. La coordination avec votre gestionnaire est assurée en amont.</p>",
        },
        {
          question: "Comment gérez-vous les eaux de lavage et les détergents dans un parking en résine époxy à Courbevoie ?",
          answer: "<p>Nous utilisons des dégraissants compatibles avec les revêtements en résine pour éviter toute dégradation. Les eaux de lavage sont aspirées ou dirigées vers les regards conformes. Aucun rejet sauvage n'est effectué, et nous vérifions l'état des évacuations avant de commencer.</p>",
        },
        {
          question: "Quelles différences de protocole appliquez-vous entre parkings souterrains et parkings aériens à Courbevoie ?",
          answer: "<p>En souterrain, la ventilation et l'éclairage conditionnent le choix des horaires et du matériel. Les parkings aériens nécessitent une attention particulière aux conditions météo et au séchage. Dans les deux cas, le diagnostic initial adapte le traitement au revêtement et au niveau d'encrassement.</p>",
        },
        {
          question: "Quels sont les horaires recommandés pour intervenir en sécurité dans un parking public proche du Centre Événementiel ?",
          answer: "<p>Les interventions en soirée ou tôt le matin limitent la gêne pour les usagers. Pour les parkings à forte rotation, nous proposons des créneaux en semaine hors heures de pointe. Le planning est validé avec le gestionnaire pour garantir un accès fluide pendant les travaux.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Courbevoie : traitement des dépôts, brossage adapté au support et rinçage contrôlé pour un espace extérieur propre et agréable à utiliser.",
      whyUsBullets: [
        "Connaissance des expositions urbaines à Courbevoie : pollution routière, ombrage des tours, proximité de la Seine.",
        "Pression ajustée selon le support et l'état des joints, brossage adapté aux garde-corps verre ou acier.",
        "Protection systématique des voisins du dessous et gestion rigoureuse des eaux de rinçage.",
      ],
      uniqueIntro: "<p>Dans le secteur du <strong>Faubourg de l'Arche</strong>, les balcons et loggias des résidences récentes accumulent rapidement une pellicule grise. La proximité du boulevard circulaire et des axes routiers génère un dépôt constant de particules fines qui s'incrustent dans les joints et ternissent les surfaces. Même un balcon peu utilisé finit par afficher des traces noires le long des garde-corps et dans les angles.</p>\n<p class=\"mt-4\">Sur les supports en <strong>carrelage grès cérame ou dalles béton</strong>, ces salissures deviennent tenaces si elles ne sont pas traitées régulièrement. Le résultat : un espace extérieur qu'on hésite à investir, des meubles de jardin qu'on préfère rentrer, et une impression générale de négligence qui ne reflète pas l'entretien du logement. Un rafraîchissement adapté redonne envie de profiter de ces mètres carrés supplémentaires.</p>\n<p class=\"mt-4\">L'intervention que nous proposons tient compte de l'<strong>exposition urbaine</strong> propre à Courbevoie. Diagnostic du support, protection des menuiseries, gestion de l'eau pour éviter les coulures chez les voisins : chaque étape est pensée pour un résultat durable sans créer de nuisances.</p>",
      uniqueDeepDive: "<h3>Surface débarrassée et prête à traiter</h3>\n<p>Le balcon retrouve d'abord un état de travail correct. Mobilier et plantes sont déplacés ou protégés par bâchage. Les gros dépôts — feuilles mortes, terre accumulée, débris divers — sont évacués manuellement avant toute application de produit.</p>\n\n<h3>Traitement ciblé selon le revêtement</h3>\n<p>Un produit adapté au grès cérame ou au béton est appliqué sur l'ensemble de la surface. Le brossage, manuel ou mécanique selon l'encrassement, déloge les salissures incrustées dans les joints. Les garde-corps en verre ou acier reçoivent un traitement spécifique pour éliminer traces grasses et dépôts atmosphériques.</p>\n<p class=\"mt-4\">Les garde-corps en verre ou acier reçoivent un traitement spécifique pour éliminer traces grasses et dépôts atmosphériques.</p>\n\n<h3>Rinçage maîtrisé et séchage</h3>\n<p>L'eau de rinçage est contrôlée pour éviter tout écoulement en façade ou chez les voisins du dessous. Si les joints sont fragiles, nous privilégions une pression douce ou un essuyage. Une fois le balcon sec, vous pouvez réinstaller votre mobilier et profiter de l'espace.</p>",
      specificChallenges: [
        "Pollution atmosphérique liée au boulevard circulaire : dépôts gras récurrents sur les surfaces.",
        "Balcons ombragés du Faubourg de l'Arche propices aux mousses et dépôts verts.",
        "Garde-corps en verre nécessitant un traitement sans traces ni rayures.",
        "Gestion de l'eau de rinçage pour éviter les coulures sur les balcons inférieurs.",
        "Joints de carrelage sensibles à la haute pression sur certaines résidences récentes.",
      ],
      faqAdditions: [
        {
          question: "Comment évitez-vous les coulures en façade lors du nettoyage d'un balcon exposé au boulevard de Verdun à Courbevoie ?",
          answer: "<p>Nous utilisons des quantités d'eau limitées et contrôlons le rinçage en temps réel. Sur les balcons donnant sur des axes passants comme le boulevard de Verdun, nous privilégions l'aspiration ou le bâchage du garde-corps pour empêcher tout écoulement visible en façade ou chez les voisins du dessous.</p>",
        },
        {
          question: "Comment éliminez-vous les mousses et dépôts verts sur balcons ombragés du Faubourg de l'Arche sans endommager le carrelage ?",
          answer: "<p>Un produit anti-mousse adapté au grès cérame est appliqué avant brossage. Le temps de pose permet de décoller les végétaux sans forcer mécaniquement. Le rinçage se fait à pression modérée pour préserver les joints, particulièrement sur les résidences récentes du Faubourg de l'Arche.</p>",
        },
        {
          question: "Quelle méthode privilégiez-vous selon le support — grès cérame ou dalle béton — pour un balcon à Courbevoie ?",
          answer: "<p>Le grès cérame supporte un brossage mécanique doux et un rinçage à pression contrôlée. Le béton brut nécessite parfois un traitement dégraissant préalable. Dans les deux cas, nous adaptons le produit et l'intensité du brossage à l'état réel du revêtement constaté sur place.</p>",
        },
        {
          question: "Nettoyez-vous aussi les vitrages et garde-corps des balcons récents ? Quelles précautions prenez-vous à Courbevoie ?",
          answer: "<p>Oui, le traitement inclut les garde-corps en verre ou acier fréquents sur les résidences récentes. Nous utilisons des produits sans résidu pour éviter les traces, et un essuyage manuel sur les surfaces vitrées. Les fixations métalliques sont rincées pour éliminer les dépôts de pollution sans risque de corrosion.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des surfaces et solutions anti-retour pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des zones à risque autour du Parc de Bécon et des façades exposées aux pigeons à Courbevoie.",
        "Protocole complet avec EPI adaptés, confinement strict et désinfection homologuée sur tous types de supports.",
        "Évacuation sécurisée des déchets contaminés et coordination discrète avec le voisinage pendant l'intervention.",
      ],
      uniqueIntro: "<p>Après plusieurs mois d'accumulation, les fientes de pigeons finissent par recouvrir entièrement certains balcons. À proximité du <strong>Parc de Bécon</strong> et des rives de Seine, les volatiles trouvent des points de repos idéaux sur les corniches et garde-corps des immeubles voisins. Le balcon devient alors inutilisable : odeur persistante, sol glissant, linge impossible à étendre dehors.</p>\n<p class=\"mt-4\">Sur les <strong>immeubles anciens du quartier Bécon</strong>, les appuis en pierre et les corniches en béton subissent une attaque acide progressive. Les fientes rongent les joints, décolorent les surfaces et fragilisent les revêtements. Sans traitement, les dégâts deviennent irréversibles et la nuisance s'installe durablement pour les occupants.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon propre et désinfecté. Le protocole inclut le confinement de la zone, le retrait sécurisé des déjections, la décontamination des supports et l'<strong>évacuation des déchets en sacs étanches</strong>. Des dispositifs de dissuasion peuvent compléter le traitement pour limiter le retour des pigeons.</p>",
      uniqueDeepDive: "<h3>Sécurisation et confinement</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, lunettes, gants et combinaison jetable. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins.</p>\n<p class=\"mt-4\">Les fientes sèches sont humidifiées avant manipulation pour neutraliser les poussières contaminées et éviter leur envol.</p>\n\n<h3>Retrait et décontamination</h3>\n<p>Les déjections sont collectées manuellement puis conditionnées en sacs étanches. Le sol, le garde-corps et les parois sont nettoyés à l'aide d'un produit adapté au support.</p>\n<p class=\"mt-4\">Une désinfection virucide et bactéricide est appliquée sur l'ensemble des surfaces. Le temps de contact est respecté pour éliminer les agents pathogènes présents dans les résidus organiques.</p>\n\n<h3>Rinçage et prévention</h3>\n<p>Un rinçage final permet d'évacuer les résidus de produit. Le balcon reste en aération le temps du séchage complet.</p>\n<p class=\"mt-4\">Si nécessaire, des pics anti-pigeons ou un filet de protection sont posés sur les rebords et corniches pour limiter le retour des volatiles.</p>",
      specificChallenges: [
        "Corniches anciennes du quartier Bécon fragilisées par l'acidité des fientes accumulées.",
        "Proximité du Parc de Bécon et des rives de Seine favorisant la présence permanente de pigeons.",
        "Balcons inutilisables depuis plusieurs mois avec odeurs persistantes et sol devenu glissant.",
        "Nécessité de protéger le logement et les voisins pendant le retrait des déjections contaminées.",
        "Supports variés (pierre, béton, carrelage) nécessitant des produits de décontamination adaptés.",
      ],
      faqAdditions: [
        {
          question: "Les fientes accumulées sur les corniches proches du Parc de Bécon présentent-elles un risque sanitaire justifiant une intervention rapide ?",
          answer: "<p>Les fientes de pigeons contiennent des agents pathogènes (bactéries, champignons) qui peuvent affecter les voies respiratoires. En zone résidentielle dense comme Bécon, le risque augmente avec l'accumulation. Un assainissement rapide limite l'exposition et évite la dégradation des supports.</p>",
        },
        {
          question: "Quels équipements de protection utilisez-vous pour traiter les fientes sur les façades anciennes du quartier Bécon ?",
          answer: "<p>Nos intervenants portent systématiquement un masque FFP2, des lunettes de protection, des gants et une combinaison jetable. Ce protocole évite tout contact avec les particules contaminées et protège également les occupants du logement pendant toute la durée du traitement.</p>",
        },
        {
          question: "La désinfection est-elle systématique après le retrait des fientes sur les balcons très exposés à Courbevoie ?",
          answer: "<p>La désinfection fait partie intégrante du protocole. Un produit virucide et bactéricide homologué est appliqué sur toutes les surfaces nettoyées. Le temps de contact est respecté pour garantir l'élimination des agents pathogènes avant le rinçage final.</p>",
        },
        {
          question: "Comment procédez-vous à l'évacuation des déchets contaminés après un nettoyage de fientes dans le secteur résidentiel de Bécon ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès leur collecte. Ces sacs sont fermés hermétiquement et évacués du site sans contact avec les parties communes. Cette méthode évite toute dispersion et limite les nuisances pour le voisinage.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Détachage ciblé et extraction en profondeur de vos canapés, tapis et matelas, avec séchage optimisé pour retrouver un mobilier propre et utilisable rapidement.",
      whyUsBullets: [
        "Connaissance des typologies résidentielles de Courbevoie, du Cœur de Ville aux résidences du Faubourg de l'Arche.",
        "Détachage ciblé selon la nature des fibres et extraction textile haute performance pour un séchage accéléré.",
        "Organisation souple avec prise de rendez-vous adaptée et gestion du stationnement en zone urbaine dense.",
      ],
      uniqueIntro: "<p>Les auréoles de café sur l'accoudoir, les traces grises au centre du tapis, l'odeur persistante sur le matelas : ces marques du quotidien s'accumulent sur les textiles d'ameublement. <strong>Rue de Bezons</strong> comme dans le <strong>Cœur de Ville</strong>, les canapés des logements et des cabinets de professions libérales subissent un usage régulier qui finit par altérer leur aspect et leur fraîcheur.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur souplesse et leur couleur d'origine. Les velours ras des appartements anciens du quartier Bécon, les mélanges synthétiques des résidences récentes du Faubourg de l'Arche : chaque textile réagit différemment aux salissures et nécessite un protocole ajusté. Le résultat se voit immédiatement sur le rendu visuel et se ressent dans le confort d'assise.</p>\n<p class=\"mt-4\">Notre intervention s'organise en tenant compte des contraintes propres à Courbevoie : stationnement limité en zone dense, coordination avec gardiens ou occupants, créneaux adaptés à votre disponibilité. Le diagnostic préalable permet d'anticiper les besoins spécifiques de chaque pièce textile.</p>",
      uniqueDeepDive: "<h3>Assises et accoudoirs</h3>\n<p>Le diagnostic identifie d'abord les zones de contact fréquent : assises centrales, accoudoirs, têtières. Ces surfaces concentrent les taches de transpiration, les résidus alimentaires et les traces de frottement.</p>\n<p class=\"mt-4\">Un pré-traitement enzymatique cible les salissures organiques avant l'injection-extraction. La pression et la température sont ajustées selon la nature du tissu.</p>\n\n<h3>Surfaces étendues (tapis, matelas)</h3>\n<p>Les tapis reçoivent un traitement par passes successives, en insistant sur les zones de passage. Pour les matelas, l'intervention couvre les deux faces lorsque l'accès le permet.</p>\n<p class=\"mt-4\">Le détachage localisé précède toujours le lavage général pour éviter la diffusion des pigments.</p>\n\n<h3>Extraction et séchage</h3>\n<p>L'aspiration puissante retire l'eau chargée de salissures et raccourcit le temps de séchage. En appartement, nous conseillons une aération croisée pendant quelques heures.</p>\n<p class=\"mt-4\">Selon l'épaisseur du textile et la ventilation disponible, comptez généralement entre 4 et 8 heures avant réutilisation complète.</p>",
      specificChallenges: [
        "Velours ras des appartements anciens de Bécon : fibres délicates nécessitant pression contrôlée.",
        "Taches d'origine animale fréquentes en logements familiaux : traitement enzymatique indispensable.",
        "Stationnement du véhicule technique à organiser en amont dans les rues du Cœur de Ville.",
        "Séchage à adapter selon l'aération disponible dans les appartements sans balcon traversant.",
        "Coordination avec gardiens ou concierges pour accès aux résidences sécurisées.",
      ],
      faqAdditions: [
        {
          question: "Le nettoyage professionnel élimine-t-il les acariens et allergènes sur un canapé dans un logement rue de Bezons à Courbevoie ?",
          answer: "<p>L'injection-extraction à haute température déloge les acariens et leurs déjections incrustés dans les fibres. Combinée à l'aspiration puissante, cette méthode réduit significativement la charge allergène. Les résultats sont particulièrement appréciés dans les logements où vivent des personnes sensibles aux poussières domestiques.</p>",
        },
        {
          question: "Comment traitez-vous les taches et odeurs d'urine d'animaux sur tapis et canapés dans le secteur résidentiel de Courbevoie ?",
          answer: "<p>Un pré-traitement enzymatique décompose les composés organiques responsables des odeurs persistantes. L'injection-extraction retire ensuite les résidus en profondeur. Cette approche fonctionne sur les accidents récents comme sur les imprégnations plus anciennes, à condition que le textile n'ait pas été endommagé par des tentatives de nettoyage inadaptées.</p>",
        },
        {
          question: "Comment adaptez-vous le protocole selon le textile pour les canapés et tapis des logements de Courbevoie ?",
          answer: "<p>Chaque intervention débute par un diagnostic du tissu : microfibre, velours, laine, mélange synthétique. Un test discret sur zone cachée confirme la tolérance aux produits. La pression d'injection et la température sont ensuite calibrées pour préserver les fibres tout en assurant un détachage efficace.</p>",
        },
        {
          question: "Quel est le temps de séchage estimé pour un canapé traité à domicile dans un appartement du centre de Courbevoie ?",
          answer: "<p>Comptez généralement entre 4 et 8 heures selon l'épaisseur du rembourrage et la ventilation de la pièce. En appartement sans balcon traversant, nous recommandons d'ouvrir les fenêtres et d'activer un ventilateur si disponible. Les coussins déhoussables sèchent plus rapidement posés à plat.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Traitement adapté de votre terrasse selon son support — bois, pierre ou dalles sur plots — avec élimination des mousses et dépôts verts pour retrouver un espace extérieur propre et utilisable.",
      whyUsBullets: [
        "Connaissance des contraintes locales : terrasses ombragées par les tours, expositions variables selon les secteurs de Courbevoie.",
        "Adaptation technique à chaque support — bois composite, pierre naturelle, dalles sur plots — avec produits et pression ajustés.",
        "Organisation soignée : protection du mobilier et des plantes, gestion de l'écoulement sans nuisance pour le voisinage.",
      ],
      uniqueIntro: "<p>Dans le secteur proche du <strong>Pont de Courbevoie</strong>, les terrasses exposées aux embruns de la Seine accumulent rapidement mousses et dépôts verdâtres. L'humidité ambiante favorise leur développement, rendant les surfaces glissantes et peu engageantes dès les premiers mois sans entretien. Les résidences riveraines constatent ce phénomène chaque année, amplifié par l'ombre portée des constructions environnantes.</p>\n<p class=\"mt-4\">Sur les <strong>supports bois composite, dalles sur plots ou pierres naturelles</strong> présents selon les secteurs, ces salissures s'incrustent différemment. Le bois grise et perd son aspect d'origine, la pierre se ternit, les joints entre dalles deviennent des réservoirs de végétation. Une terrasse entretenue retrouve son confort d'usage et son aspect initial, sans risque de glissade ni dégradation prématurée du revêtement.</p>\n<p class=\"mt-4\">L'intervention débute par un diagnostic du support et de son état. Nous adaptons ensuite la méthode — pression contrôlée ou traitement doux — selon la porosité du matériau et l'ampleur des dépôts. Les <strong>zones ombragées par les tours</strong> nécessitent souvent un traitement anti-mousse préventif pour espacer les interventions.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Nous déplaçons ou bâchons le mobilier extérieur et les jardinières. Les menuiseries — baies vitrées, portes — sont protégées contre les projections. Un balayage préalable élimine feuilles, terre et débris accumulés.</p>\n\n<h3>Traitement adapté au support</h3>\n<p>Le produit est sélectionné selon le matériau : formulation douce pour le bois composite, désincrustant pour la pierre, nettoyant neutre pour les dalles sur plots. Un brossage manuel ou mécanique décolle les mousses et lichens. La haute pression intervient uniquement sur les supports qui la tolèrent, avec réglage adapté pour préserver joints et finitions.</p>\n<p class=\"mt-4\">La haute pression intervient uniquement sur les supports qui la tolèrent, avec réglage adapté pour préserver joints et finitions.</p>\n\n<h3>Rinçage et conseils</h3>\n<p>L'eau est dirigée vers les points d'écoulement existants. Les plantations proches sont préservées par rinçage immédiat. Nous vous indiquons la fréquence d'entretien recommandée selon l'exposition de votre terrasse et la possibilité d'un traitement anti-mousse préventif pour limiter la repousse.</p>",
      specificChallenges: [
        "Mousses persistantes sur les terrasses ombragées par les tours du secteur Faubourg de l'Arche.",
        "Supports variés — bois composite, dalles sur plots, pierre — nécessitant des méthodes distinctes.",
        "Humidité liée à la proximité de la Seine accélérant le verdissement des surfaces.",
        "Gestion de l'écoulement d'eau sur terrasses en étage sans gêne pour les voisins.",
        "Accès parfois restreint dans les résidences avec digicode et gardien.",
      ],
      faqAdditions: [
        {
          question: "Comment nettoyer une terrasse en bois composite au Faubourg de l'Arche sans risquer de l'abîmer ?",
          answer: "<p>Le bois composite ne supporte pas la haute pression forte qui peut délaminer les fibres. Nous utilisons un nettoyage basse pression combiné à un produit adapté, suivi d'un brossage doux. Cette méthode préserve l'aspect et la durabilité du revêtement tout en éliminant mousses et salissures incrustées.</p>",
        },
        {
          question: "Quelle solution pour éliminer les mousses tenaces sur une terrasse proche du Pont de Courbevoie exposée à l'humidité de la Seine ?",
          answer: "<p>L'humidité favorise une repousse rapide. Après un décapage mécanique des mousses et lichens, nous appliquons un traitement anti-mousse qui agit en profondeur. Ce produit limite la réapparition pendant plusieurs mois, particulièrement utile sur les terrasses exposées aux embruns et à l'ombre.</p>",
        },
        {
          question: "Quand privilégier la haute pression ou un nettoyage doux pour des dalles sur plots à Courbevoie ?",
          answer: "<p>Les dalles sur plots tolèrent généralement une pression modérée, mais les joints et le système de pose peuvent être fragilisés par un jet trop puissant. Nous évaluons l'état du support avant intervention : si les dalles sont poreuses ou les joints dégradés, un nettoyage doux avec brossage sera préféré.</p>",
        },
        {
          question: "À quelle fréquence recommandez-vous un entretien pour une terrasse ombragée entourée de tours à Courbevoie ?",
          answer: "<p>Les terrasses peu ensoleillées accumulent mousses et dépôts verts plus rapidement. Un nettoyage annuel au printemps, avant la saison d'usage, est conseillé. Un traitement préventif anti-mousse peut espacer les interventions à 18 mois selon l'exposition et le type de support.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre logement, avec traitement de chaque pièce et coordination adaptée aux délais d'état des lieux ou de fin de chantier.",
      whyUsBullets: [
        "Connaissance des typologies de logements à Courbevoie, du studio étudiant aux appartements familiaux du quartier Bécon.",
        "Polyvalence sur tous les revêtements : parquet, carrelage, faïence, surfaces vitrées, équipements sanitaires.",
        "Intervention calée sur vos délais, avec accès coordonné via gardien ou agence et compte-rendu transmis après passage.",
      ],
      uniqueIntro: "<p>Comment rendre un appartement impeccable quand le locataire précédent vient de partir et que le suivant arrive dans trois jours ? Autour de l'<strong>Avenue de la Liberté</strong> et dans le quartier Bécon, cette situation se répète chaque mois. Les agences immobilières gèrent des rotations fréquentes, et le moindre retard dans la mise en propreté décale toute la chaîne : signature, remise des clés, emménagement.</p>\n<p class=\"mt-4\">Un logement correctement préparé facilite l'état des lieux. Les <strong>copropriétés avec halls sécurisés et digicodes</strong>, typiques des immeubles de Courbevoie, imposent une coordination précise pour accéder au bien. Les studios comme les T3 ou T4 nécessitent un traitement adapté : sols, vitres intérieures, sanitaires, placards. Chaque surface retrouve un aspect propre, sans traces ni résidus.</p>\n<p class=\"mt-4\">La <strong>rotation locative importante</strong> dans ce secteur demande une organisation rigoureuse. Nous planifions l'intervention en fonction des contraintes de l'agence ou du propriétaire, avec un créneau défini et un compte-rendu à l'issue du passage.</p>",
      uniqueDeepDive: "<h3>Logement prêt pour visite ou remise de clés</h3>\n<p>À l'issue de l'intervention, chaque pièce présente un niveau de propreté compatible avec un état des lieux. Sols lavés, vitres sans traces, sanitaires désinfectés, placards vidés et essuyés. Le bien peut être présenté ou occupé immédiatement.</p>\n\n<h3>Traitement méthodique par zone</h3>\n<p>Nous commençons par les pièces d'eau : salle de bain, WC, cuisine. Détartrage des robinetteries, nettoyage des faïences, dégraissage des plans de travail. Ensuite, les pièces de vie : dépoussiérage des plinthes, aspiration et lavage des sols selon le revêtement, essuyage des interrupteurs et poignées.</p>\n\n<h3>Adaptation au contexte d'intervention</h3>\n<p>Pour une fin de chantier, nous retirons les résidus de peinture, les traces d'enduit et la poussière de plâtre. Pour un état des lieux, l'accent porte sur les finitions visibles. Le temps d'intervention varie selon la surface et l'état initial du logement.</p>",
      specificChallenges: [
        "Délais serrés entre deux locataires : intervention sous 48h possible selon planning.",
        "Accès par digicode ou badge : coordination préalable avec agence ou propriétaire.",
        "Résidus de chantier (peinture, plâtre) : traitement spécifique sans abîmer les supports.",
        "Stationnement difficile en zone dense : véhicule technique positionné au plus proche.",
        "Studios étudiants ou T4 familiaux : protocole adapté à la surface et au niveau d'encrassement.",
      ],
      faqAdditions: [
        {
          question: "Quelle différence entre un nettoyage fin de chantier et un nettoyage état des lieux pour un appartement près de la mairie de Courbevoie ?",
          answer: "<p>Le nettoyage fin de chantier inclut le retrait des résidus de travaux : poussière de plâtre, traces de peinture, films protecteurs. L'état des lieux se concentre sur les finitions visibles et les surfaces d'usage quotidien. Nous adaptons le protocole selon la nature de l'intervention demandée.</p>",
        },
        {
          question: "Comment traitez-vous un appartement après un dégât des eaux dans le centre de Courbevoie ?",
          answer: "<p>Nous intervenons après séchage complet des surfaces. Le protocole comprend l'aspiration des résidus, le lavage des sols et murs touchés, le traitement des traces d'humidité et la désodorisation si nécessaire. Les matériaux poreux fortement dégradés peuvent nécessiter une évaluation préalable.</p>",
        },
        {
          question: "Comment coordonnez-vous l'intervention avec les agences immobilières ou artisans rue de Bezons ?",
          answer: "<p>Nous calons le créneau en fonction des contraintes de chacun : fin de travaux, disponibilité des clés, date d'état des lieux. Un contact direct avec l'agence ou le propriétaire permet d'ajuster le planning. Nous transmettons un compte-rendu une fois l'intervention terminée.</p>",
        },
        {
          question: "Quel délai proposez-vous pour une intervention urgente après départ locataire près de la gare de Bécon-les-Bruyères ?",
          answer: "<p>Selon notre planning, une intervention sous 24 à 48h est envisageable pour les demandes urgentes. Nous confirmons la disponibilité dès réception de la demande. La durée sur place dépend de la surface et de l'état du logement à traiter.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;