import type { City } from "~/types/geo";

const city: City = {
  name: "Ivry-sur-Seine",
  slug: "ivry-sur-seine",
  postalCodes: ["94200"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription:
    "Klinova intervient à Ivry-sur-Seine pour l'entretien des parties communes, parkings souterrains et espaces extérieurs. Une organisation adaptée au bâti dense du centre-ville comme aux résidences récentes des bords de Seine.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  // Pattern : 2 <p> then <ul>
  hubIntro:
    "<p>Au cœur de la ZAC Confluences et à deux pas de la gare RER C, Klinova accompagne syndics, gestionnaires et occupants dans l'entretien régulier de leurs locaux. Notre équipe connaît les contraintes d'accès et de stationnement propres à cette commune dense, limitrophe de Paris.</p>\n<p class=\"mt-4\">Nous assurons le nettoyage des parties communes, l'entretien des parkings et la remise en état des espaces extérieurs. Chaque intervention fait l'objet d'une coordination préalable pour limiter la gêne et respecter les horaires convenus.</p>\n<ul>\n  <li><strong>Coordination terrain :</strong> Prise de contact avec gardiens ou gestionnaires avant chaque passage, adaptation aux créneaux disponibles selon l'activité du bâtiment.</li>\n  <li><strong>Matériel adapté :</strong> Équipements dimensionnés pour les accès étroits des immeubles anciens comme pour les parkings souterrains des résidences récentes.</li>\n  <li>Suivi des interventions : Compte-rendu transmis après chaque passage, possibilité de reporting régulier pour les gestionnaires qui le souhaitent.</li>\n</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Pollution atmosphérique</strong> marquée liée à la proximité du périphérique et des quais de Seine.",
    "Parkings souterrains fréquents dans les résidences récentes, avec <strong>rampes d'accès parfois étroites</strong>.",
    "Immeubles à <strong>digicodes et badges Vigik</strong> quasi systématiques, coordination gardien nécessaire.",
    "Stationnement très contraint au centre-ville et sur le secteur Ivry-Port.",
    "Balcons aux <strong>formes géométriques complexes</strong> sur les bâtiments Renaudie (Étoiles d'Ivry).",
    "Poussières de chantier liées aux livraisons en cours sur la ZAC Confluences.",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Petit-Ivry",
    "Ivry-Port",
    "Marat-Parmentier",
    "Monmousseau-Vérollot",
    "Louis-Bertrand",
  ],
  nearbyCities: [
    "charenton-le-pont",
    "alfortville",
    "gentilly",
    "saint-mande",
    "maisons-alfort",
    "arcueil",
    "cachan",
    "montrouge",
    "vincennes",
    "creteil",
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie d'Ivry-sur-Seine",
    "Parc des Cormailles",
    "Manufacture des Œillets",
    "Gare d'Ivry-sur-Seine (RER C)",
    "ZAC Ivry Confluences",
    "Les Étoiles d'Ivry (Jean Renaudie)",
  ],

  faq: [
    {
      question:
        "Comment organisez-vous vos interventions dans les immeubles avec gardien ?",
      answer:
        "<p>Nous prenons contact avec le gardien ou le gestionnaire en amont pour convenir d'un créneau adapté. <strong>Les clés ou badges sont récupérés selon les modalités définies, et nous signalons notre présence à l'arrivée.</strong> Cette coordination évite les blocages d'accès et permet un déroulement fluide.</p>",
    },
    {
      question:
        "Pouvez-vous intervenir rapidement en cas de besoin urgent à Ivry-sur-Seine ?",
      answer:
        "<p>Notre équipe intervient régulièrement sur le secteur, ce qui nous permet de réagir <strong>dans un délai de 24 à 48 heures selon la nature de la demande</strong>. Pour les urgences sanitaires ou les dégradations importantes, nous priorisons le passage et confirmons le créneau dès validation.</p>",
    },
    {
      question:
        "Le stationnement est compliqué près du centre-ville, comment gérez-vous ce point ?",
      answer:
        "<p>Nous anticipons les contraintes de stationnement en identifiant les zones de dépose autorisées ou les accès livraison. <strong>Pour les interventions longues, nous sollicitons si besoin une autorisation temporaire auprès du syndic ou du gestionnaire</strong> afin d'éviter tout retard.</p>",
    },
    {
      question: "Proposez-vous un devis avant intervention ?",
      answer:
        "<p><strong>Oui, chaque demande fait l'objet d'un échange préalable</strong> pour évaluer la surface, l'état des lieux et les contraintes d'accès. Le devis est transmis par écrit avant toute intervention, sans engagement tant qu'il n'est pas validé.</p>",
    },
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // Services — inclure uniquement les services présents dans l'entrée (bundle.contents.services)
  services: [
    {
      serviceKey: "moquettes",
      heroDescription:
        "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec un séchage maîtrisé pour une reprise d'activité rapide dans vos locaux.",
      whyUsBullets: [
        "Connaissance des immeubles de bureaux et copropriétés d'Ivry, du centre-ville à la ZAC Confluences.",
        "Matériel d'injection-extraction professionnel adapté aux dalles textiles et moquettes bouclées ou velours.",
        "Interventions planifiées en dehors des heures de pointe pour limiter la gêne aux occupants et aux visiteurs.",
      ],
      uniqueIntro:
        "<p>Dans la <strong>ZAC Ivry Confluences</strong>, les open-spaces et salles de réunion accumulent rapidement poussières fines et traces de passage. Les dalles textiles, sollicitées quotidiennement par des dizaines de collaborateurs, perdent leur aspect d'origine en quelques mois. Les zones de circulation intense — entrées, couloirs, espaces café — concentrent l'essentiel de l'encrassement visible.</p>\n<p class=\"mt-4\">Un entretien adapté redonne aux fibres leur tenue et leur couleur. Les <strong>copropriétés années 70-80</strong> du centre-ville présentent souvent des moquettes aiguilletées dans les parties communes, où le piétinement quotidien laisse des sillons grisâtres. Traiter ces surfaces améliore l'image des halls et réduit les réclamations des résidents auprès du syndic.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic des supports et des taches. Nous identifions les zones prioritaires, adaptons la méthode au type de fibre, et planifions le passage en tenant compte des flux liés au RER C et aux lignes de métro pour limiter la gêne aux heures de pointe.</p>",
      uniqueDeepDive:
        "<h3>Zones de circulation intense</h3>\n<p>Les entrées, couloirs et espaces d'accueil reçoivent un traitement prioritaire. Après aspiration, nous appliquons un pré-détachant sur les traces de semelles et les auréoles de café. L'injection-extraction élimine les résidus en profondeur sans détremper le support.</p>\n\n<h3>Espaces de travail et salles de réunion</h3>\n<p>Les dalles textiles sous les bureaux et autour des tables de réunion sont traitées par passes croisées. Nous protégeons les plinthes et les pieds de mobilier avant chaque passage. Le détachage ciblé intervient sur les taches grasses ou anciennes repérées lors du diagnostic.</p>\n\n<h3>Gestion du séchage et remise en service</h3>\n<p>L'extraction maximale réduit le temps de séchage à quelques heures selon la ventilation du local. Nous conseillons d'éviter le piétinement pendant deux à quatre heures. Un balisage temporaire peut être posé pour orienter les occupants vers les zones sèches.</p>",
      specificChallenges: [
        "Open-spaces ZAC Confluences : dalles textiles sollicitées par un flux quotidien important.",
        "Parties communes années 70-80 : moquettes aiguilletées marquées par des décennies de passage.",
        "Stationnement tendu à proximité des bureaux, coordination nécessaire pour le matériel.",
        "Horaires d'intervention à caler entre les arrivées RER et les réunions du matin.",
        "Taches de café et traces de semelles fréquentes dans les espaces de pause.",
      ],
      faqAdditions: [
        {
          question:
            "Les cages d'escalier étroites du centre-ville d'Ivry compliquent-elles la montée du matériel ?",
          answer:
            "<p>Nous utilisons des injecteurs-extracteurs compacts, conçus pour passer dans les escaliers de moins d'un mètre de large. Le flexible permet de traiter plusieurs paliers depuis un seul point de stationnement de la machine, sans bloquer la circulation des résidents.</p>",
        },
        {
          question:
            "Pour les open-spaces de la ZAC Ivry Confluences, quelle méthode privilégiez-vous face aux salissures incrustées ?",
          answer:
            "<p>L'injection-extraction reste la référence pour les dalles textiles de bureaux. Elle décolle les particules en profondeur et les aspire immédiatement. Sur des taches tenaces, nous ajoutons un pré-traitement enzymatique avant le passage de la machine.</p>",
        },
        {
          question:
            "Comment traitez-vous des taches anciennes sur les moquettes de parties communes années 70-80 à Ivry ?",
          answer:
            "<p>Un détachage ciblé précède le nettoyage global. Nous appliquons un produit adapté à la nature de la tache — tanin, graisse ou encre — puis laissons agir avant l'extraction. Les fibres retrouvent une teinte plus homogène sans risque de décoloration.</p>",
        },
        {
          question:
            "Après un nettoyage en bureaux près de la gare d'Ivry, combien de temps avant de remarcher sur la moquette ?",
          answer:
            "<p>Le séchage prend généralement deux à quatre heures selon l'épaisseur du revêtement et la ventilation du local. Nous conseillons de ne pas piétiner les zones traitées pendant ce délai. Un balisage peut être posé pour orienter les collaborateurs.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "parkings",
      heroDescription:
        "Décrassage complet des sols de parking avec autolaveuse et traitement dégraissant, gestion stricte des eaux usées et coordination des accès pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès spécifiques aux parkings souterrains de la ZAC et des résidences ivryennes.",
        "Autolaveuse professionnelle et dégraissants adaptés aux sols béton poreux comme aux résines récentes.",
        "Organisation par zones avec balisage, rotation véhicules et compte-rendu transmis au syndic ou gestionnaire.",
      ],
      uniqueIntro:
        "<p>Les traces noires s'accumulent sur les sols béton des parkings souterrains autour de l'<strong>Hôpital Charles-Foix</strong> et dans les résidences de la ZAC Ivry Confluences. Huile de vidange, graisse de freinage, poussières de pneus : ces dépôts forment une couche grasse qui s'incruste dans le revêtement et rend les rampes glissantes. Les gestionnaires constatent une dégradation visible dès les premiers mois sans entretien régulier.</p>\n<p class=\"mt-4\">Un sol encrassé génère des plaintes de copropriétaires, complique la lecture du marquage au sol et accélère l'usure des revêtements. Dans les constructions récentes avec résine, les taches d'hydrocarbures laissent des auréoles persistantes. Sur béton brut, la porosité du matériau absorbe les salissures en profondeur, rendant le simple balayage inefficace.</p>\n<p class=\"mt-4\">L'accumulation de suie liée au trafic poids lourds sur les quais et le périphérique aggrave l'encrassement des parkings proches de ces axes. Une intervention structurée permet de restaurer l'aspect du sol, de sécuriser les zones de circulation et de fournir un compte-rendu exploitable pour le suivi de la copropriété.</p>",
      uniqueDeepDive:
        "<h3>Sol décrassé et sécurisé</h3>\n<p>Le résultat attendu : un revêtement débarrassé des dépôts gras, des rampes antidérapantes et des rigoles dégagées. Les zones critiques — angles morts, pieds de murs, regards d'évacuation — retrouvent un état permettant une circulation sécurisée et un marquage lisible.</p>\n\n<h3>Traitement mécanisé adapté au revêtement</h3>\n<p>Le diagnostic initial identifie le type de sol (béton brut, résine, peinture) et l'état des évacuations. L'autolaveuse associée à un dégraissant professionnel traite les surfaces en passes successives. Sur les rampes inclinées, une haute pression contrôlée complète le lavage mécanisé pour éliminer les incrustations tenaces.</p>\n\n<h3>Coordination accès et gestion des eaux</h3>\n<p>Le balisage sécurise les zones en cours de traitement. La rotation des véhicules s'organise par secteur pour maintenir un accès partiel. Les eaux de lavage sont dirigées vers les évacuations existantes, sans rejet sauvage. Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention sur demande.</p>",
      specificChallenges: [
        "Rampes étroites dans les résidences anciennes : manœuvre autolaveuse adaptée.",
        "Dépôts d'hydrocarbures incrustés sur béton brut poreux nécessitant un dégraissage renforcé.",
        "Coordination avec les copropriétaires pour organiser la rotation des véhicules par secteur.",
        "Gestion stricte des eaux de lavage vers les regards existants, sans rejet sur voirie.",
        "Stationnement camionnette difficile : intervention planifiée en créneau faible affluence.",
      ],
      faqAdditions: [
        {
          question:
            "Comment éliminez-vous les taches d'huile anciennes sur les sols béton des rampes souterraines des Étoiles d'Ivry ?",
          answer:
            "<p>Les taches d'huile incrustées sur béton brut nécessitent un dégraissant alcalin appliqué avant le passage de l'autolaveuse. Sur les rampes des Étoiles, la porosité du revêtement impose parfois deux passes successives. Le résultat dépend de l'ancienneté des dépôts, mais l'aspect général s'améliore nettement.</p>",
        },
        {
          question:
            "Quelle différence de protocole appliquez-vous entre parkings souterrains et parkings aériens dans la ZAC Ivry Confluences ?",
          answer:
            "<p>En souterrain, la ventilation limitée impose un séchage plus long et une gestion rigoureuse des eaux vers les évacuations internes. En aérien, l'exposition aux intempéries génère des salissures différentes (mousses, feuilles). Le matériel reste identique, mais les temps de séchage et le traitement des dépôts varient.</p>",
        },
        {
          question:
            "Sur les parkings proches des quais très circulés, comment gérez-vous les eaux de lavage et rejets au sol ?",
          answer:
            "<p>Les eaux chargées en dégraissant et salissures sont dirigées exclusivement vers les regards et rigoles existants. Aucun rejet n'est effectué sur la voirie ou vers les réseaux pluviaux. Nous vérifions l'état des évacuations avant intervention pour éviter tout engorgement pendant le lavage.</p>",
        },
        {
          question:
            "Pour un nettoyage de parking proche de l'hôpital Charles-Foix, quels créneaux horaires recommandez-vous pour limiter la gêne ?",
          answer:
            "<p>Les interventions en début de matinée ou en soirée réduisent les conflits avec les flux de visiteurs et personnel soignant. Nous adaptons le planning selon les contraintes du gestionnaire. Un balisage clair et une rotation par zones permettent de maintenir un accès partiel pendant toute la durée du chantier.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons",
      heroDescription:
        "Une remise en état complète de votre balcon, avec traitement adapté au support et gestion soignée des écoulements pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons face aux quais, loggias abritées, etc.",
        "Pression adaptée à chaque support, du béton anguleux des Étoiles aux dalles sur plots des résidences récentes.",
        "Organisation anti-coulures systématique et créneaux compatibles avec la vie en immeuble dense.",
      ],
      uniqueIntro:
        "<p>Comment profiter d'un espace extérieur quand les dépôts noirs s'accumulent semaine après semaine ? Entre le boulevard Paul Vaillant-Couturier et les quais, les balcons du centre-ville et de Petit-Ivry reçoivent en continu particules fines et résidus de circulation. Le carrelage se ternit, les joints noircissent, et l'envie de s'installer dehors diminue au fil des mois.</p>\n<p class=\"mt-4\">Sur les balcons en béton brut des immeubles Renaudie ou les loggias vitrées des résidences récentes, le nettoyage régulier change l'usage quotidien. Un sol propre, des garde-corps débarrassés de leur voile gris, des vitres dégagées : l'espace redevient un prolongement du logement, pas une zone qu'on évite. Les voisins du dessous apprécient aussi l'attention portée aux écoulements.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic du support et de l'exposition. Produits adaptés, pression contrôlée si nécessaire, protection des plantes et du mobilier : chaque étape tient compte des contraintes liées aux chantiers de la ZAC et à la pollution urbaine ambiante.</p>",
      uniqueDeepDive:
        "<h3>Préparation et protection</h3>\n<p>Le mobilier et les plantes sont déplacés ou bâchés. Les menuiseries reçoivent une protection pour éviter les projections. On retire ensuite les gros dépôts : feuilles mortes, terre accumulée, débris divers.</p>\n\n<h3>Traitement et brossage</h3>\n<p>Un produit adapté au support est appliqué : formulation différente selon qu'il s'agisse de béton brut, de carrelage ou de dalles sur plots. Le brossage manuel ou mécanique décolle les salissures incrustées. Les garde-corps, vitrages et murs mitoyens accessibles sont traités dans la foulée.</p>\n<p class=\"mt-4\">Le rinçage s'effectue à pression contrôlée, en préservant les joints fragiles.</p>\n\n<h3>Gestion des eaux et finalisation</h3>\n<p>L'écoulement est maîtrisé pour éviter les coulures chez les voisins du dessous. La façade reste protégée des projections. Après séchage, des conseils d'entretien sont transmis pour espacer les interventions suivantes et maintenir le résultat obtenu.</p>",
      specificChallenges: [
        "Formes géométriques complexes sur les balcons Renaudie : angles aigus, recoins difficiles d'accès.",
        "Noircissement accéléré par la proximité du périphérique et des axes à fort trafic.",
        "Joints de carrelage fragilisés par les variations thermiques et l'humidité de la Seine.",
        "Gestion des écoulements délicate dans les immeubles à étages multiples.",
        "Dépôts de poussières de chantier liés aux travaux en cours sur la ZAC Confluences.",
      ],
      faqAdditions: [
        {
          question:
            "Pour les balcons en béton des Étoiles d'Ivry, quelle méthode évite d'abîmer le support lors du nettoyage ?",
          answer:
            "<p>Le béton brut des constructions Renaudie supporte mal la haute pression directe. On privilégie un brossage mécanique avec produit alcalin, suivi d'un rinçage à pression modérée. Les arêtes vives et les angles sont traités manuellement pour ne pas éroder la surface ni déloger les joints d'étanchéité.</p>",
        },
        {
          question:
            "Comment gérez-vous l'eau sur les balcons très encrassés du boulevard Paul Vaillant-Couturier ?",
          answer:
            "<p>Les balcons exposés à cet axe accumulent une couche grasse de suie. Le rinçage génère donc une eau chargée. On installe des protections en partie basse et on contrôle le débit pour que l'écoulement reste dans les évacuations prévues, sans déborder chez les voisins du dessous.</p>",
        },
        {
          question:
            "Comment traitez-vous les dépôts verts et mousses sur les balcons des immeubles en bord de Seine ?",
          answer:
            "<p>L'humidité favorise la prolifération de mousses dans les joints et sur les surfaces poreuses. Un traitement anti-mousse est appliqué après le nettoyage principal. Il agit sur plusieurs semaines et ralentit la repousse. Sur dalles sur plots, on vérifie aussi l'évacuation sous le revêtement.</p>",
        },
        {
          question:
            "Faut-il éviter la haute pression sur les loggias vitrées des résidences récentes à Ivry ?",
          answer:
            "<p>Sur une loggia fermée, la haute pression risque de projeter de l'eau sur les menuiseries et à l'intérieur. On utilise plutôt un nettoyage manuel ou basse pression, avec raclette pour les vitrages. Le sol est traité au balai-brosse et rincé de façon contrôlée vers l'évacuation.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection virucide et conseils de protection pour retrouver un espace extérieur sain.",
      whyUsBullets: [
        "Connaissance des zones à risque à Ivry : proximité du Parc des Cormailles, corniches anciennes, toits-terrasses exposés.",
        "Protocole sanitaire strict avec EPI complets, confinement systématique et désinfection virucide certifiée.",
        "Organisation adaptée au centre dense : bâchage discret, coordination voisinage, évacuation sécurisée des déchets.",
      ],
      uniqueIntro:
        "<p>Après quelques semaines sans intervention, les dépôts s'accumulent sur les garde-corps et le sol du balcon. Aux abords du <strong>Parc des Cormailles</strong> et du <strong>Cimetière Parisien</strong>, la présence importante de pigeons accélère ce phénomène. L'odeur s'installe, le linge étendu absorbe les particules, et l'espace devient inutilisable. Cette situation génère une gêne quotidienne difficile à ignorer.</p>\n<p class=\"mt-4\">Sur les immeubles anciens en briques rouges ou les façades des grands ensembles, les corniches et rebords offrent des surfaces propices aux dépôts répétés. Les fientes attaquent progressivement les matériaux : le béton se dégrade, la peinture s'écaille, les joints s'effritent. Un traitement adapté permet de stopper cette détérioration et de retrouver un balcon utilisable sans risque pour la santé.</p>\n<p class=\"mt-4\">L'intervention commence par un diagnostic visuel pour évaluer l'ampleur des souillures et les zones à protéger. En centre-ville dense, la coordination avec le voisinage limite les nuisances pendant le chantier. Chaque étape suit un protocole précis, de la sécurisation à l'évacuation des déchets contaminés.</p>",
      uniqueDeepDive:
        "<h3>Balcon assaini et désinfecté</h3>\n<p>Le résultat visé : un sol propre, des garde-corps débarrassés de toute trace, une odeur neutralisée. La désinfection virucide élimine les agents pathogènes présents dans les fientes séchées.</p>\n\n<h3>Confinement et retrait sécurisé</h3>\n<p>L'intervenant porte un équipement complet : masque FFP2, combinaison jetable, gants et lunettes. La zone est bâchée pour éviter toute dispersion vers l'intérieur du logement ou chez les voisins. Les fientes sont humidifiées avant ramassage pour neutraliser les poussières contaminées, puis conditionnées en sacs étanches.</p>\n<p class=\"mt-4\">Le nettoyage couvre le sol, les vitrages et les murs mitoyens si nécessaire.</p>\n\n<h3>Désinfection et évacuation</h3>\n<p>Un produit bactéricide homologué est appliqué sur l'ensemble des surfaces avec un temps de contact respecté. Après rinçage, le balcon nécessite une aération avant réutilisation. Les déchets sont évacués dans des sacs étanches. Des solutions de dissuasion peuvent être proposées : pics sur les rebords ou filets de protection.</p>",
      specificChallenges: [
        "Proximité du Parc des Cormailles : concentration de pigeons et dépôts fréquents sur les balcons alentour.",
        "Corniches en briques anciennes offrant des rebords propices à l'installation des oiseaux.",
        "Densité urbaine du centre-ville nécessitant une coordination avec le voisinage pendant l'intervention.",
        "Fientes acides attaquant le béton des balcons dans les résidences années 70-80.",
        "Évacuation des déchets contaminés en sacs étanches, stationnement contraint à proximité.",
      ],
      faqAdditions: [
        {
          question:
            "Des fientes abondantes sur mon balcon près du Parc des Cormailles : intervention d'urgence possible et délai ?",
          answer:
            "<p>Nous intervenons sous 48 à 72 heures selon la disponibilité. La proximité du parc favorise les rassemblements de pigeons, ce qui explique l'accumulation rapide. Le diagnostic initial permet d'évaluer l'ampleur et de planifier le confinement adapté à votre configuration de balcon.</p>",
        },
        {
          question:
            "Après retrait des fientes sur corniches en briques, quel protocole de désinfection appliquez-vous à Ivry ?",
          answer:
            "<p>Une fois les dépôts retirés et les surfaces nettoyées, nous appliquons un produit virucide et bactéricide homologué. Le temps de contact est respecté avant rinçage. Sur les briques anciennes, nous adaptons la pression pour préserver le matériau tout en garantissant l'élimination des agents pathogènes.</p>",
        },
        {
          question:
            "Comment organisez-vous l'évacuation des déchets contaminés après nettoyage de fientes en centre-ville dense ?",
          answer:
            "<p>Les fientes et résidus sont conditionnés dans des sacs étanches dès le ramassage. En centre-ville, nous stationnons au plus près pour limiter les manipulations. L'évacuation se fait en fin d'intervention, sans stockage sur place. Le bâchage protège les parties communes pendant le transport.</p>",
        },
        {
          question:
            "Les fientes ont détérioré les rebords près du Cimetière Parisien : proposez-vous des solutions après le nettoyage ?",
          answer:
            "<p>Nous constatons régulièrement des dégradations sur les rebords exposés dans ce secteur. Après assainissement, nous pouvons recommander la pose de pics anti-pigeons ou de filets de protection pour éviter le retour des oiseaux. Ces dispositifs limitent les dépôts futurs et préservent vos surfaces.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "canapes-tapis",

      heroDescription:
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Ivry-sur-Seine élimine allergènes, acariens et particules urbaines incrustées par le trafic, restaurant une hygiène saine dans les logements denses et les lofts industriels.",

      whyUsBullets: [
        "Adaptation aux logements ivryens variés : Protocoles ajustés aux appartements familiaux du Petit-Ivry, aux grands ensembles (Cité Pierre et Marie Curie) et aux lofts issus d'anciennes usines autour d'Ivry-Port.",
        "Traitement anti-allergènes en environnement urbain dense : Injection-extraction à eau chaude pour éliminer acariens, poussières fines et particules de suie liées au périphérique, aux quais de Seine et aux axes très circulés.",
        "Organisation fluide malgré les contraintes locales : Gestion du stationnement tendu, accès digicode et étages sans ascenseur fréquents dans l'ancien, interventions planifiées pour limiter la gêne en habitat dense.",
      ],

      uniqueIntro:
        '<p>Dans les appartements et lofts d’Ivry-sur-Seine, les canapés, tapis et matelas sont soumis à une accumulation progressive de salissures invisibles, amplifiée par la densité urbaine et la variété des usages. Dans les logements familiaux du Petit-Ivry ou du Centre-ville, la vie quotidienne, les enfants et parfois les animaux favorisent l’apparition de taches organiques, d’odeurs persistantes et de concentrations élevées d’acariens dans les rembourrages. Dans les grands ensembles comme la Cité Pierre et Marie Curie ou les résidences récentes d’Ivry Confluences, les textiles captent aussi les poussières fines issues des circulations intenses, des chantiers et des axes routiers proches.</p>\n<p class="mt-4">Avec le temps, ces contaminants s’incrustent profondément dans les fibres. Les occupants constatent des symptômes diffus mais récurrents : éternuements au réveil, inconfort respiratoire nocturne, odeurs qui persistent malgré l’aération ou ternissement visible des tissus clairs. Les tentatives d’entretien domestique restent superficielles : l’aspirateur ne retire ni les allergènes incrustés ni les particules de pollution liées aux quais de Seine, au boulevard Paul Vaillant-Couturier ou à la proximité du périphérique. Dans les salles d’attente de cabinets médicaux ou à l’Hôpital Charles-Foix, l’exigence d’hygiène et d’image rend ces limites encore plus visibles.</p>\n<p class="mt-4">Un nettoyage professionnel à domicile permet de rétablir une hygiène textile durable, adaptée aux contraintes urbaines d’Ivry. En traitant en profondeur les fibres, il améliore la qualité de l’air intérieur, ravive l’aspect des tissus et prolonge la durée de vie du mobilier, aussi bien dans les logements résidentiels que dans les espaces recevant du public.</p>',

      uniqueDeepDive:
        '<h3>1. Diagnostic textile et repérage des zones contaminées</h3>\n<p>Chaque prestation débute par l’analyse précise des textiles : type de tissu, densité des rembourrages, ancienneté, fragilité et nature des taches. Le technicien identifie les zones les plus exposées selon le contexte ivryen : canapés fortement sollicités dans les appartements familiaux du Petit-Ivry, tapis grand format dans les lofts proches de la Manufacture des Œillets, fauteuils d’accueil ou de salles d’attente autour de l’Hôpital Charles-Foix. Cette étape permet d’adapter température, produits et puissance d’extraction aux contraintes réelles du logement ou du local.</p>\n<h3>2. Pré-traitement ciblé et injection-extraction en profondeur</h3>\n<p class="mt-4">Les taches et zones fortement chargées reçoivent un pré-traitement spécifique : enzymatique pour les matières organiques, neutralisant d’odeurs pour les textiles imprégnés, dégraissant léger pour les dépôts urbains. L’injection-extraction diffuse ensuite de l’eau chaude au cœur des fibres, désagrégeant acariens, allergènes et particules fines. L’aspiration immédiate et puissante extrait l’eau chargée d’impuretés, sans détremper inutilement les supports, un point clé dans les immeubles à accès contraint ou sans ascenseur.</p>\n<h3>3. Extraction maximale, séchage maîtrisé et conseils d’entretien</h3>\n<p class="mt-4">Une attention particulière est portée à l’extraction finale afin de limiter l’humidité résiduelle et d’accélérer le séchage, généralement compris entre 6 et 10 heures selon la ventilation du logement. Le technicien fournit des recommandations adaptées à Ivry-sur-Seine : aération aux heures creuses de circulation, entretien régulier des textiles exposés à la pollution urbaine, fréquence de nettoyage conseillée pour les foyers sensibles ou les espaces accueillant du public.</p>',

      specificChallenges: [
        "Accumulation d’acariens dans les logements familiaux denses : usage quotidien intensif des canapés et matelas favorisant allergènes et inconfort respiratoire.",
        "Particules urbaines incrustées : suie et poussières fines liées aux quais de Seine, au périphérique et aux axes très circulés.",
        "Accès contraints aux logements : étages sans ascenseur et digicodes fréquents dans l’ancien ivryen.",
        "Textiles de grands volumes : tapis et canapés surdimensionnés dans les lofts issus d’anciennes usines réhabilitées.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage est-il efficace contre les acariens dans les appartements familiaux du Petit-Ivry ?",
          answer:
            "<p>Oui. L’injection-extraction à eau chaude permet de désagréger et d’extraire les acariens ainsi que leurs allergènes, souvent concentrés dans les canapés et matelas très utilisés. Dans les logements familiaux du Petit-Ivry ou du Centre-ville, les occupants constatent généralement une amélioration du confort respiratoire et une réduction des symptômes allergiques quelques jours après l’intervention.</p>",
        },
        {
          question:
            "Les particules de pollution liées aux quais de Seine et aux grands axes sont-elles réellement éliminées ?",
          answer:
            "<p>Oui. Les poussières fines et particules de suie issues du trafic urbain s’incrustent profondément dans les fibres textiles. Le nettoyage par injection-extraction dissout ces dépôts invisibles et les extrait avec l’eau sale. Les logements proches du boulevard Paul Vaillant-Couturier ou des quais d’Ivry bénéficient ainsi d’un air intérieur plus sain et de textiles visiblement ravivés.</p>",
        },
        {
          question:
            "Combien de temps faut-il avant de réutiliser un canapé après nettoyage à Ivry-sur-Seine ?",
          answer:
            "<p>Le séchage complet intervient en général entre 6 et 10 heures, selon la ventilation et la saison. Dans les immeubles denses d’Ivry avec peu de courants d’air, une aération régulière est recommandée. Une utilisation légère est possible plus tôt, mais il est préférable d’attendre le séchage total pour préserver les fibres et le confort.</p>",
        },
        {
          question:
            "Intervenez-vous aussi dans les salles d’attente ou cabinets proches de l’Hôpital Charles-Foix ?",
          answer:
            "<p>Oui. Nous réalisons régulièrement le nettoyage de fauteuils, chaises et tapis dans les salles d’attente et cabinets médicaux du secteur. L’intervention est organisée pour limiter l’impact sur l’activité, avec une attention particulière portée à l’hygiène, à la discrétion et au séchage rapide des textiles.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Intervention adaptée à chaque revêtement de terrasse, suppression des mousses, lichens et salissures urbaines, et application d'un traitement protecteur convenant à l'environnement fluvial et végétalisé de cette commune aux portes de Paris.",
      whyUsBullets: [
        "Déplacement dans tous les quartiers ivryens : Petit-Ivry, Centre-ville Gagarine, Marat-Parmentier, Monmousseau-Vérollot, Ivry-Port, Louis Bertrand-Mirabeau-Semard.",
        "Expertise adaptée à la diversité architecturale locale : terrasses des ensembles brutalistes Renaudie-Gailhoustet, dallages des pavillons anciens, aménagements des résidences contemporaines de la ZAC Confluences.",
        "Protection soignée des abords : bâchage du mobilier, préservation des jardins partagés et végétations en cascade, maîtrise des eaux de rinçage vers les écoulements existants.",
      ],
      uniqueIntro:
        "<p><strong>Ivry-sur-Seine</strong>, commune de plus de 60 000 habitants située à la confluence de la Seine et de la Marne, conjugue un passé industriel marqué et une transformation urbaine d'envergure. Historiquement cité ouvrière aux portes du 13e arrondissement de Paris, elle abrite un patrimoine architectural singulier, notamment les célèbres <strong>Étoiles d'Ivry</strong> conçues par les architectes Renée Gailhoustet et Jean Renaudie — ensembles brutalistes aux terrasses végétalisées en cascade, classés monuments historiques.</p>\n\n<p class=\"mt-4\">La ville compte de nombreux espaces verts, dont le <strong>parc des Cormailles</strong> (près de 8 hectares, Grand Prix National du Paysage 2007), les jardins partagés et les 250 jardins ouvriers autour du fort d'Ivry. Cette végétation abondante, combinée à la proximité de la Seine, génère une humidité favorable à l'apparition de mousses et algues sur les surfaces extérieures.</p>\n\n<p class=\"mt-4\">La diversité du bâti ivryen — <strong>ensembles brutalistes</strong> aux formes étoilées, <strong>pavillons anciens</strong> du quartier Parmentier, <strong>résidences contemporaines</strong> de la ZAC Ivry Confluences — implique des terrasses aux configurations variées : <strong>dalles béton</strong>, <strong>carrelage</strong>, <strong>pierre</strong>, <strong>bois</strong> ou <strong>composite</strong>, chacun requérant un protocole de nettoyage spécifique.</p>",
      uniqueDeepDive:
        "<h3>Diagnostic et mise en sécurité du chantier</h3>\n<p>Mobilier de terrasse, jardinières et éléments décoratifs sont déplacés ou protégés. Les façades béton brut, garde-corps et menuiseries adjacentes sont bâchés. Un balayage préliminaire élimine feuilles, débris végétaux et poussières accumulés sur le revêtement.</p>\n\n<h3>Nettoyage adapté au support identifié</h3>\n<p>Le produit est choisi selon la nature du revêtement : formule neutre pour les dalles béton des constructions brutalistes, solution adaptée pour carrelage minéral ou pierre, traitement spécifique pour bois et composite. L'action mécanique par brossage ciblé déloge les incrustations biologiques et les dépôts urbains. Le rinçage s'effectue à pression modérée pour préserver les joints et la texture de surface.</p>\n\n<h3>Traitement protecteur et conseils personnalisés</h3>\n<p>Un traitement préventif est appliqué sur les zones les plus exposées à l'humidité ambiante. Les eaux de rinçage sont orientées vers les points d'écoulement existants. Des conseils d'entretien saisonnier sont transmis pour maintenir le résultat face à l'environnement fluvial et végétalisé d'Ivry.</p>",
      specificChallenges: [
        "Terrasses en cascade des ensembles Renaudie-Gailhoustet : formes triangulaires, béton brut parfois dégradé, accès contraints entre niveaux décalés.",
        "Proximité de la Seine et de la Marne : humidité ambiante favorisant la prolifération rapide des mousses et algues vertes.",
        "Pavillons anciens du quartier Marat-Parmentier : dalles et matériaux d'époque nécessitant un traitement à pH contrôlé.",
        "Résidences contemporaines de la ZAC Ivry Confluences : grès cérame micro-reliefs, terrasses végétalisées avec contraintes de protection des plantations.",
        "Jardins partagés et cours végétalisées des ensembles collectifs : gestion rigoureuse des eaux de rinçage pour préserver les plantations adjacentes.",
      ],
      faqAdditions: [
        {
          question:
            "Intervenez-vous sur les terrasses des immeubles Renaudie-Gailhoustet du centre-ville d'Ivry ?",
          answer:
            "<p>Les ensembles brutalistes des Étoiles d'Ivry — conçus par Renée Gailhoustet et Jean Renaudie dans les années 1960-70 — présentent des terrasses triangulaires en cascade, souvent végétalisées. Nous adaptons notre intervention à ces configurations atypiques : accès par les niveaux décalés, protection rigoureuse des plantations, utilisation de produits compatibles avec le béton brut parfois fragilisé. Une coordination préalable avec le syndic ou le bailleur est recommandée pour ces ensembles classés.</p>",
        },
        {
          question:
            "Ma terrasse reverdit rapidement car j'habite près de la Seine, quelle solution proposez-vous ?",
          answer:
            "<p>La proximité de la confluence Seine-Marne génère une humidité constante propice à la repousse rapide des mousses et algues. Après le nettoyage complet, nous appliquons un traitement préventif renforcé sur les zones les plus exposées. Un balayage régulier des débris végétaux et une nouvelle application préventive annuelle permettent de maintenir le résultat malgré cet environnement fluvial.</p>",
        },
        {
          question:
            "Travaillez-vous sur les terrasses des nouvelles résidences de la ZAC Ivry Confluences ?",
          answer:
            "<p>Les programmes immobiliers récents de la ZAC Ivry Confluences — construits sur d'anciennes friches industrielles — présentent souvent des terrasses contemporaines en grès cérame ou dalles béton, parfois avec jardins suspendus. Notre diagnostic préalable identifie la nature exacte du revêtement et nous adaptons le traitement en conséquence, en protégeant soigneusement les végétalisations intégrées à ces aménagements.</p>",
        },
        {
          question:
            "Quelle différence entre un simple passage haute pression et votre prestation sur une terrasse de pavillon ivryen ?",
          answer:
            "<p>Les pavillons anciens d'Ivry — notamment dans les quartiers Marat-Parmentier ou Petit-Ivry — présentent souvent des terrasses en dalles béton ou matériaux d'époque qui ne supportent pas un jet haute pression standard. Notre protocole associe un produit adapté au support, un brossage mécanique ciblé et un rinçage à pression calibrée qui nettoie en profondeur sans dégrader la surface ni déchausser les joints fragilisés par le temps.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription:
        "Une remise en état complète de votre logement, du sol aux finitions, pour une restitution impeccable lors d'un état des lieux ou après travaux.",
      whyUsBullets: [
        "Connaissance des typologies locatives ivryennes, du studio étudiant au loft atypique près de la Cité Pierre et Marie Curie.",
        "Polyvalence sur tous types de sols et finitions : parquet, béton ciré, carrelage ancien, lino.",
        "Réactivité sous 48 à 72h et coordination possible avec agences ou artisans pour respecter vos délais.",
      ],
      uniqueIntro:
        "<p>Après plusieurs mois d'occupation ou à la suite d'un chantier de rénovation, un appartement accumule des traces que le ménage courant ne suffit pas à éliminer. <strong>Autour de la gare RER C et du centre-ville</strong>, la rotation locative impose des délais serrés entre deux locataires. Les agences et propriétaires doivent remettre le bien en état rapidement, sans compromettre la qualité du rendu final.</p>\n<p class=\"mt-4\">Un logement propre facilite la validation de l'état des lieux et évite les litiges sur le dépôt de garantie. Dans les <strong>T2/T3, studios ou lofts issus de réhabilitations d'anciennes usines</strong>, chaque surface demande une attention particulière : parquet ancien, béton ciré, carrelage, sanitaires. Le résultat visuel conditionne la première impression du futur occupant ou de l'agence mandatée.</p>\n<p class=\"mt-4\">Face aux demandes fréquentes pour états des lieux et ménages fin de chantier, nous organisons chaque intervention selon vos contraintes horaires et d'accès. Diagnostic préalable, coordination avec les artisans si nécessaire, et contrôle qualité avant remise des clés.</p>",
      uniqueDeepDive:
        "<h3>Un logement prêt à être restitué ou occupé</h3>\n<p>L'objectif est un bien propre dans ses moindres recoins : sols sans traces, vitres intérieures nettes, sanitaires désinfectés, placards vidés et essuyés. Pour y parvenir, nous établissons un diagnostic initial qui identifie les zones critiques selon le contexte — fin de chantier, sortie locataire ou sinistre léger.</p>\n\n<h3>Traitement méthodique de chaque pièce</h3>\n<p>Nous procédons par zones : pièces d'eau d'abord (cuisine, salle de bain, WC), puis pièces de vie. Les plafonds, murs et plinthes sont dépoussiérés avant le lavage des sols, adapté au revêtement. Les résidus de peinture ou d'enduit sont retirés manuellement sur les surfaces fragiles.</p>\n\n<h3>Contrôle et remise en conditions</h3>\n<p>Avant de quitter le logement, nous vérifions chaque point : interrupteurs, poignées, radiateurs, intérieurs de placards. Une aération complète est assurée. Si vous le souhaitez, nous pouvons coordonner notre passage avec l'agence ou le propriétaire pour la remise des clés.</p>",
      specificChallenges: [
        "Rotation locative rapide autour de la gare RER C : délais souvent inférieurs à une semaine entre deux locataires.",
        "Livraisons de programmes neufs en ZAC Ivry Confluences générant des demandes de ménage fin de chantier régulières.",
        "Lofts et ateliers réhabilités avec surfaces atypiques (béton ciré, grandes hauteurs) nécessitant un protocole adapté.",
        "Stationnement contraint au centre-ville imposant une organisation logistique anticipée pour le matériel.",
        "Coordination fréquente avec agences immobilières pour remise des clés le jour même.",
      ],
      faqAdditions: [
        {
          question:
            "Quels standards techniques appliquez-vous pour un nettoyage fin de chantier sur un programme de la ZAC Ivry Confluences ?",
          answer:
            "<p>Nous retirons les résidus de chantier (poussières fines, traces de peinture, joints) avec des techniques adaptées aux matériaux neufs. Les sols sont aspirés puis lavés selon leur nature, les vitres intérieures nettoyées, et les sanitaires désinfectés avant livraison au promoteur ou à l'acquéreur.</p>",
        },
        {
          question:
            "Quel est votre délai moyen d'intervention pour un nettoyage état des lieux près de la gare d'Ivry-sur-Seine ?",
          answer:
            "<p>Nous intervenons généralement sous 48 à 72 heures selon la disponibilité. Pour les demandes urgentes liées à une restitution imminente, nous pouvons ajuster notre planning. Contactez-nous avec la date de l'état des lieux pour confirmer notre disponibilité.</p>",
        },
        {
          question:
            "Comment coordonnez-vous le ménage avec les artisans lors d'une remise en état après travaux à Ivry ?",
          answer:
            "<p>Nous intervenons une fois les travaux terminés, après évacuation des gravats. Si des finitions sont encore en cours, nous planifions notre passage en accord avec le maître d'œuvre ou le propriétaire pour éviter de repasser sur des zones salies par les derniers travaux.</p>",
        },
        {
          question:
            "Avec le stationnement limité au centre-ville d'Ivry, comment organisez-vous l'arrivée du matériel pour un nettoyage complet ?",
          answer:
            "<p>Nous anticipons les contraintes de stationnement en identifiant les zones de dépose autorisées ou en convenant d'un créneau avec le gardien. Notre matériel est conditionné pour être transporté rapidement jusqu'au logement, même en étage sans ascenseur.</p>",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
