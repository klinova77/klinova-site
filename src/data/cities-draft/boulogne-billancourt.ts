// CITY_CHECK: Boulogne-Billancourt

import type { City } from "~/types/geo";

const city: City = {
  name: "Boulogne-Billancourt",
  slug: "boulogne-billancourt",
  postalCodes: ["92100"],

  department: {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Klinova assure l'entretien des parties communes, parkings souterrains et espaces extérieurs à Boulogne-Billancourt. Du quartier du Trapèze aux immeubles Art Déco du centre, une équipe locale adaptée aux exigences du bâti boulonnais.",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "<p>Cité de l'image et du tertiaire, entre le Jardin Albert-Kahn et l'Île Seguin, Boulogne-Billancourt concentre des typologies de bâti variées. Klinova s'y positionne comme <strong>partenaire terrain</strong> pour les syndics, gestionnaires et occupants qui recherchent un interlocuteur réactif et structuré.</p>\
<p class=\"mt-4\">Nos interventions couvrent la propreté des espaces collectifs et la maintenance des surfaces techniques. Chaque prestation fait l'objet d'un suivi organisé, avec reporting disponible pour les donneurs d'ordre qui le souhaitent.</p>\
<ul>\
  <li><strong>Coordination accès :</strong> Prise en compte des digicodes, badges et présence fréquente de gardiens pour planifier les interventions sans friction avec les occupants.</li>\
  <li><strong>Adaptation au stationnement :</strong> Anticipation des contraintes de zone rouge et des créneaux marchés pour positionner nos véhicules sans bloquer les accès.</li>\
  <li><strong>Méthodes ajustées au bâti :</strong> Protocoles différenciés selon les supports rencontrés, des escaliers étroits des immeubles années 30 aux parkings profonds des résidences récentes.</li>\
</ul>",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "<strong>Parkings souterrains profonds</strong> en zone inondable, nécessitant parfois pompage après épisodes pluvieux.",
    "Immeubles Art Déco avec <strong>escaliers étroits</strong> et halls à entretenir sans endommager les revêtements d'origine.",
    "Stationnement très contraint en centre-ville, créneaux d'intervention à caler hors jours de marché.",
    "Balcons exposés aux <strong>retombées de pollution</strong> de l'A13 et des quais de Seine.",
    "Accès quasi-systématiques par digicode ou badge, coordination préalable indispensable."
  ],

  // Texte brut uniquement
  districts: [
    "Parchamp-Albert Kahn",
    "Silly-Gallieni",
    "Billancourt-Rives de Seine",
    "République-Point du Jour",
    "Centre-ville",
    "Les Princes-Marmottan"
  ],
  nearbyCities: [
    "Paris (16e)",
    "Issy-les-Moulineaux",
    "Saint-Cloud",
    "Meudon",
    "Sèvres"
  ],

  // Texte brut uniquement
  landmarks: [
    "Mairie de Boulogne-Billancourt",
    "La Seine Musicale (Île Seguin)",
    "Jardin Albert-Kahn",
    "Quartier du Trapèze",
    "Pont de Sèvres",
    "Centre Commercial Les Passages"
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [
    {
      question: "Comment gérez-vous les accès sécurisés dans les immeubles de Boulogne-Billancourt ?",
      answer: "<p>Nous récupérons les <strong>codes et badges</strong> en amont auprès du syndic ou du gardien. Pour les résidences avec interphonie connectée, nous convenons d'un créneau précis. Cette coordination évite les allers-retours et garantit une intervention fluide dès notre arrivée sur site.</p>"
    },
    {
      question: "Intervenez-vous en urgence sur la commune ?",
      answer: "<p>Oui, nous disposons d'équipes mobilisables dans les meilleurs délais selon la nature de la demande. Pour les situations critiques — dégât des eaux en parking, souillure importante en hall — nous priorisons le déplacement. Un premier diagnostic téléphonique permet d'évaluer le <strong>matériel nécessaire</strong> avant intervention.</p>"
    },
    {
      question: "Comment se déroule une demande de devis pour un immeuble ou un local professionnel ?",
      answer: "<p>Après un premier échange, nous organisons une visite technique si la configuration l'exige. Le devis détaille les surfaces, les <strong>méthodes retenues</strong> et les délais prévisionnels. Pour les copropriétés, nous transmettons un document exploitable directement en assemblée générale.</p>"
    },
    {
      question: "Proposez-vous un suivi régulier pour les gestionnaires de patrimoine ?",
      answer: "<p>Nous établissons des <strong>plannings récurrents</strong> adaptés à chaque site : fréquence mensuelle, trimestrielle ou ponctuelle selon l'usage. Un reporting synthétique peut être transmis après chaque passage pour les donneurs d'ordre qui souhaitent tracer les interventions réalisées.</p>"
    }
  ],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  // => Le template doit rester avec services: [].
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Extraction des salissures incrustées dans vos moquettes et dalles textiles, avec séchage maîtrisé pour une remise en circulation rapide des espaces traités.",
      whyUsBullets: [
        "Connaissance des configurations Art Déco du centre de Boulogne-Billancourt et de leurs contraintes d'accès spécifiques.",
        "Matériel d'injection-extraction professionnel adapté aux moquettes épaisses comme aux dalles textiles fines.",
        "Interventions planifiées en horaires décalés pour limiter la gêne dans les espaces tertiaires ou résidentiels occupés."
      ],
      uniqueIntro: "<p>Dans le secteur du <strong>Musée des Années 30</strong>, les revêtements textiles des halls d'entrée et des parties communes accumulent rapidement poussières et traces de passage. Les fibres absorbent les particules fines transportées depuis la rue, tandis que les zones de circulation concentrent des taches de café, de terre humide ou de semelles encrassées. Sans intervention régulière, le textile perd son éclat et retient les odeurs.</p>\
<p class=\"mt-4\">Les immeubles années 30 avec leurs <strong>escaliers étroits</strong> présentent des configurations où la moquette subit un frottement constant contre les plinthes et les angles. Le ravivage des fibres redonne une apparence soignée aux espaces communs, améliore le confort des occupants et valorise l'image du bâtiment auprès des visiteurs ou locataires potentiels.</p>\
<p class=\"mt-4\">Les bureaux et parties communes du Trapèze génèrent un trafic quotidien important qui use prématurément les dalles textiles. Une intervention structurée permet d'identifier les zones critiques, de protéger les éléments fragiles et de planifier le traitement selon les contraintes d'occupation.</p>",
      uniqueDeepDive: "<h3>Zones de passage intensif</h3>\
<p>Les couloirs et entrées principales reçoivent un diagnostic préalable pour identifier le type de fibre et la nature des salissures. L'<strong>aspiration préparatoire</strong> retire les particules libres avant injection du produit adapté.</p>\
<p class=\"mt-4\">L'extraction par injection-extraction déloge les résidus incrustés en profondeur. Plusieurs passes sont effectuées sur les axes de circulation les plus sollicités.</p>\
\
<h3>Surfaces périphériques et angles</h3>\
<p>Les abords de plinthes et les recoins bénéficient d'une attention particulière. Des protections sont posées sur les boiseries et bas de murs pour éviter toute projection.</p>\
<p class=\"mt-4\">Le <strong>détachage ciblé</strong> traite les marques localisées : taches de tanin, traces grasses ou auréoles anciennes.</p>\
\
<h3>Séchage et remise en service</h3>\
<p>L'extraction maximale de l'humidité réduit le temps de séchage. Selon l'épaisseur du textile et la ventilation disponible, comptez entre 4 et 12 heures avant circulation normale.</p>\
<p class=\"mt-4\">Des <strong>consignes de non-piétinement</strong> sont transmises pour préserver le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Escaliers étroits</strong> des immeubles années 30 : passage du matériel sans abîmer les plinthes.",
        "Dalles textiles des <strong>bureaux du Trapèze</strong> soumises à un trafic quotidien soutenu.",
        "Halls Art Déco avec <strong>boiseries fragiles</strong> nécessitant des protections avant traitement.",
        "Stationnement très contraint autour de <strong>Marcel Sembat</strong> : coordination logistique indispensable.",
        "Séchage à adapter selon la ventilation limitée des cages d'escalier anciennes."
      ],
      faqAdditions: [
        {
          question: "Comment organisez-vous le passage du matériel dans les escaliers étroits des immeubles années 30 près du Musée des Années 30 ?",
          answer: "<p>Nous utilisons des équipements compacts et des <strong>flexibles de longueur adaptée</strong> pour atteindre chaque palier sans encombrer les marches. Les plinthes et angles sont protégés par des housses avant toute manipulation. Le gardien ou le syndic est prévenu pour faciliter l'accès et éviter les croisements avec les résidents.</p>"
        },
        {
          question: "Après un entretien intensif, en combien de temps la moquette des bureaux du Trapèze redevient-elle praticable ?",
          answer: "<p>Le temps de séchage dépend de l'épaisseur du textile et de la <strong>ventilation des locaux</strong>. En général, comptez entre 4 et 8 heures pour une dalle textile standard. Nous effectuons plusieurs passes d'extraction pour réduire l'humidité résiduelle et permettre une reprise d'activité rapide, souvent dès le lendemain matin.</p>"
        },
        {
          question: "Quelles protections appliquez-vous sur les plinthes et angles fragiles des halls Art Déco avant traitement ?",
          answer: "<p>Des films adhésifs ou des housses amovibles sont posés sur les boiseries, moulures et bas de murs avant le début de l'intervention. Cette précaution évite les projections d'eau ou de produit sur les surfaces sensibles. Les protections sont retirées une fois le séchage amorcé.</p>"
        },
        {
          question: "Préférez-vous l'injection-extraction ou la vapeur pour les dalles textiles des espaces événementiels comme La Seine Musicale ?",
          answer: "<p>L'injection-extraction reste la méthode privilégiée pour les dalles textiles à fort passage : elle déloge les salissures en profondeur et extrait immédiatement l'humidité. La vapeur convient davantage aux retouches légères ou aux fibres très fines. Le choix final dépend du diagnostic réalisé sur place.</p>"
        }
      ],
      ctaOverride: ""
    },

    {
      serviceKey: "parkings",
      heroDescription: "Décrassage complet des parkings souterrains et aériens, avec gestion stricte des eaux de lavage et coordination des accès pour limiter la gêne aux usagers.",
      whyUsBullets: [
        "Connaissance des contraintes d'accès et de stationnement propres aux parkings souterrains du Trapèze et des copropriétés voisines.",
        "Autolaveuse professionnelle et gestion rigoureuse des eaux de lavage pour préserver les revêtements en résine ou béton quartzé.",
        "Coordination avec le syndic pour organiser la rotation des véhicules et limiter la fermeture des accès au strict nécessaire."
      ],
      uniqueIntro: "<p>Les traces d'huile, les coulures grasses et les dépôts de poussière s'accumulent sur les sols des parkings du <strong>quartier du Trapèze</strong>, où la densité de véhicules génère un encrassement rapide. Ces salissures persistent sur les rampes d'accès, dans les angles morts et autour des places les plus sollicitées, rendant les surfaces glissantes et ternissant l'image de la résidence ou de l'immeuble de bureaux.</p>\
<p class=\"mt-4\">Un lavage mécanisé régulier redonne aux sols leur aspect d'origine et limite les risques de chute. Dans les sous-sols récents en <strong>béton quartzé ou résine époxy</strong>, le dégraissage ciblé préserve le revêtement tout en éliminant les taches incrustées. Les syndics et gestionnaires constatent une meilleure perception des parties communes par les occupants et une réduction des réclamations.</p>\
<p class=\"mt-4\">L'intervention s'organise en tenant compte du trafic véhicule intense le long des axes A13 et D910. Balisage, rotation par zones et horaires adaptés permettent de maintenir l'accès aux places pendant le chantier, sans bloquer la circulation ni perturber les usagers.</p>",
      uniqueDeepDive: "<h3>Diagnostic et préparation</h3>\
<p>Avant toute intervention, nous identifions le type de revêtement — béton brut, résine ou peinture — et vérifions l'état des évacuations. Un <strong>balayage préalable</strong> retire les débris grossiers.</p>\
<p class=\"mt-4\">Le balisage sécurisé est installé et les véhicules sont déplacés par zones pour permettre un accès progressif aux surfaces à traiter.</p>\
\
<h3>Traitement mécanisé</h3>\
<p>L'autolaveuse ou la haute pression, associée à un dégraissant adapté, élimine les taches d'huile et les salissures incrustées. Les passes mécanisées couvrent l'ensemble du sol, avec une attention particulière aux rampes, angles morts et pieds de murs.</p>\
<p class=\"mt-4\">Les <strong>rigoles et regards</strong> sont dégagés pour garantir un écoulement correct des eaux.</p>\
\
<h3>Gestion des eaux et finalisation</h3>\
<p>Les eaux de lavage sont récupérées ou dirigées vers les évacuations prévues, sans rejet sauvage. Un dépoussiérage des blocs lumineux et tuyauteries peut compléter l'intervention si demandé.</p>\
<p class=\"mt-4\">Un <strong>compte-rendu</strong> est transmis au syndic ou gestionnaire, avec recommandations de fréquence selon le trafic constaté.</p>",
      specificChallenges: [
        "<strong>Parkings enterrés profonds</strong> en zone inondable près de la Seine, nécessitant une gestion stricte des eaux.",
        "Revêtements variés — <strong>résine époxy, béton quartzé</strong> — exigeant des produits et pressions adaptés.",
        "Rotation de véhicules élevée dans le secteur tertiaire du Trapèze, imposant un balisage précis.",
        "Rampes d'accès inclinées à traiter sans créer de surface glissante après séchage.",
        "Accès par badge et présence de gardiens : coordination indispensable pour chaque intervention."
      ],
      faqAdditions: [
        {
          question: "Comment planifiez-vous le nettoyage des parkings souterrains du Trapèze avec une rotation continue de véhicules ?",
          answer: "<p>Nous intervenons par <strong>zones successives</strong>, en déplaçant les véhicules au fur et à mesure. Le balisage sécurisé permet aux usagers de circuler pendant le chantier. Les horaires sont définis avec le syndic ou le gestionnaire pour limiter la gêne aux heures de pointe.</p>"
        },
        {
          question: "Pouvez-vous retirer les taches d'huile anciennes dans les parkings du Trapèze sans abîmer la résine époxy ?",
          answer: "<p>Oui, nous utilisons un dégraissant adapté aux revêtements en résine, appliqué avant le passage de l'autolaveuse. La pression et la température sont ajustées pour désincruster la graisse sans altérer le sol. Les taches les plus anciennes peuvent nécessiter un second passage ciblé.</p>"
        },
        {
          question: "Quelle méthode employez-vous pour gérer les eaux de lavage en sous-sol près du Pont de Sèvres sans polluer les réseaux ?",
          answer: "<p>Les eaux sont dirigées vers les évacuations prévues ou récupérées par aspiration. Nous vérifions l'état des regards et rigoles avant l'intervention. Aucun rejet sauvage n'est effectué, conformément aux exigences des syndics et aux règles locales d'assainissement.</p>"
        },
        {
          question: "Quelles différences de process appliquez-vous entre parking souterrain et parking aérien dans le quartier du Trapèze ?",
          answer: "<p>En souterrain, la <strong>gestion des eaux</strong> et la ventilation imposent un protocole plus strict. En extérieur, l'évacuation est facilitée mais les salissures liées aux intempéries sont plus fréquentes. Le choix du matériel — autolaveuse ou haute pression — dépend du revêtement et de la configuration.</p>"
        }
      ],
      ctaOverride: ""
    },

    {
      serviceKey: "balcons",
      heroDescription: "Remise en état complète de votre balcon à Boulogne-Billancourt, avec traitement adapté au support et gestion des eaux pour préserver le voisinage.",
      whyUsBullets: [
        "Connaissance des expositions locales : balcons côté quais, façades sud soumises aux retombées de l'A13.",
        "Pression ajustée selon le support — carrelage, pierre ou béton peint — pour un résultat sans dégradation.",
        "Gestion stricte des eaux de rinçage pour éviter toute nuisance aux voisins du dessous."
      ],
      uniqueIntro: "<p>Le long de l'<strong>Avenue Jean-Jaurès</strong>, les balcons filants et loggias accumulent rapidement un voile grisâtre. Les particules fines issues du trafic routier se déposent sur les garde-corps, s'infiltrent dans les joints et ternissent les surfaces en quelques semaines. Ce phénomène touche autant les résidences récentes que les immeubles Art Déco du secteur.</p>\
<p class=\"mt-4\">Retrouver un balcon propre, c'est récupérer un espace de vie extérieur réellement utilisable. Les <strong>supports carrelés, en pierre agrafée ou béton peint</strong> réagissent différemment aux salissures : certains retiennent les dépôts dans leurs aspérités, d'autres se marquent de traces tenaces. Un entretien adapté préserve l'aspect des matériaux et évite leur dégradation prématurée.</p>\
<p class=\"mt-4\">L'exposition aux émissions routières de l'A13 et des quais accentue l'encrassement sur les façades orientées sud et ouest. Notre intervention prend en compte ces contraintes spécifiques pour proposer un traitement efficace sans risque pour les éléments fragiles ni gêne pour les occupants voisins.</p>",
      uniqueDeepDive: "<h3>Protection et préparation</h3>\n<p>Les menuiseries et vitrages sont protégés avant toute action. Le mobilier et les plantes sont déplacés ou bâchés. Cette étape évite les projections sur les éléments sensibles et facilite l'accès à l'ensemble de la surface.</p>\n\n<h3>Traitement des salissures incrustées</h3>\n<p>Les gros dépôts — feuilles, terre, débris — sont retirés manuellement. Un produit adapté au support est appliqué : formule douce pour les joints fragiles, dégraissant pour les traces de suie. Le brossage cible les zones encrassées, suivi d'un rinçage contrôlé qui limite les coulures vers les balcons inférieurs.</p>\n\n<h3>Finitions et conseils</h3>\n<p>Les garde-corps, vitrages et murs mitoyens accessibles sont traités. Si une pression douce est nécessaire, elle reste calibrée pour préserver les joints et revêtements. Après séchage, nous partageons quelques recommandations d'entretien courant pour espacer les interventions selon l'exposition de votre balcon.</p>",
      specificChallenges: [
        "<strong>Dépôts de suie</strong> liés à la proximité de l'A13 et des axes passants du centre-ville.",
        "Joints de carrelage poreux qui retiennent les salissures grasses sur les balcons anciens.",
        "Règlements de copropriété limitant le <strong>rejet d'eau</strong> sur la voie publique ou les balcons inférieurs.",
        "Balcons filants étroits nécessitant un matériel compact et une intervention méthodique.",
        "Mousses et dépôts verts sur les loggias orientées nord, proches des quais de Seine."
      ],
      faqAdditions: [
        {
          question: "Comment évitez-vous les coulures d'eau sur la voie publique lors du nettoyage des balcons avenue Jean-Jaurès ?",
          answer: "<p>Nous utilisons des quantités d'eau maîtrisées et des <strong>raclettes</strong> pour diriger l'écoulement vers les évacuations existantes. Sur les balcons filants de l'avenue Jean-Jaurès, un bâchage temporaire protège les éléments inférieurs. Le rinçage s'effectue par sections pour contrôler chaque flux.</p>"
        },
        {
          question: "Quelles actions recommandez-vous pour traiter les dépôts de mousse sur les balcons proches des quais de Seine à Boulogne ?",
          answer: "<p>Un brossage manuel retire d'abord la couche superficielle. Un produit anti-mousse adapté au support est ensuite appliqué, laissé en contact puis rincé. Pour les balcons exposés à l'humidité des quais, nous conseillons un traitement préventif une à deux fois par an.</p>"
        },
        {
          question: "Quelle méthode privilégiez-vous pour un balcon carrelé versus un balcon en béton peint dans le centre-ville ?",
          answer: "<p>Le carrelage supporte un <strong>brossage appuyé</strong> et un rinçage plus généreux. Le béton peint demande une pression réduite pour ne pas écailler le revêtement. Nous adaptons le produit et l'outil à chaque surface afin d'obtenir un résultat homogène sans risque de dégradation.</p>"
        },
        {
          question: "Quand évitez-vous la haute pression sur les balcons haussmanniens de Boulogne et quelles alternatives proposez-vous ?",
          answer: "<p>Lorsque les joints sont anciens ou les pierres poreuses, la haute pression risque de creuser les surfaces. Nous optons alors pour un brossage manuel combiné à un nettoyant doux. Cette méthode préserve l'intégrité des matériaux tout en éliminant efficacement les salissures incrustées.</p>"
        }
      ],
      ctaOverride: ""
    },

    {
      serviceKey: "balcons-fientes",
      heroDescription: "Assainissement complet de votre balcon souillé par les fientes de pigeons, avec désinfection des supports et conseils de prévention pour éviter le retour des nuisibles.",
      whyUsBullets: [
        "Connaissance des zones à risque de Boulogne-Billancourt, notamment les secteurs riverains où les pigeons prolifèrent.",
        "Protocole rigoureux avec EPI complets, confinement de la zone et désinfection virucide homologuée.",
        "Gestion discrète des déchets contaminés et coordination avec le voisinage pour limiter les nuisances pendant l'intervention."
      ],
      uniqueIntro: "<p>Après quelques semaines sans intervention, les fientes s'accumulent sur les balcons du <strong>Boulevard de la République</strong> et des secteurs proches des quais. La proximité de la Seine et des parcs attire les pigeons qui élisent domicile sur les corniches et garde-corps. L'odeur devient tenace, le linge ne peut plus sécher dehors, et l'espace extérieur reste inutilisé malgré les beaux jours.</p>\n<p class=\"mt-4\">Les dépôts acides attaquent progressivement les supports. Sur les immeubles anciens de Boulogne-Billancourt, les <strong>appuis en pierre ou béton</strong> subissent des corrosions visibles. Les garde-corps métalliques se piquent, la peinture s'écaille. Au-delà de l'aspect esthétique, les agents pathogènes présents dans les fientes représentent un risque sanitaire réel pour les occupants.</p>\n<p class=\"mt-4\">Une intervention structurée permet de retrouver un balcon sain et utilisable. Le traitement inclut le retrait des déjections, la désinfection des surfaces et, si nécessaire, la pose de dispositifs dissuasifs pour limiter le retour des volatiles.</p>",
      uniqueDeepDive: "<h3>Balcon assaini et désinfecté</h3>\
<p>L'objectif est de restituer un espace extérieur propre, sans odeur ni risque sanitaire. Les surfaces retrouvent leur aspect d'origine, débarrassées des <strong>dépôts acides</strong> qui les dégradaient.</p>\
<p class=\"mt-4\">La désinfection élimine les agents pathogènes présents dans les fientes séchées. Le temps de contact du produit virucide est respecté avant rinçage.</p>\
\
<h3>Retrait sécurisé et traitement des supports</h3>\
<p>L'intervention débute par la pose d'équipements de protection : masque FFP2, gants, combinaison jetable. La zone est confinée pour éviter toute dispersion de particules.</p>\
<p class=\"mt-4\">Les fientes sont <strong>humidifiées avant ramassage</strong> pour neutraliser les poussières contaminées. Sol, garde-corps, vitrages et murs mitoyens sont ensuite traités selon leur nature.</p>\
\
<h3>Conditionnement et prévention</h3>\
<p>Les déchets sont placés dans des sacs étanches pour une évacuation sécurisée. Après rinçage final, un délai d'aération est préconisé avant réutilisation du balcon.</p>\
<p class=\"mt-4\">Des <strong>solutions anti-retour</strong> peuvent être proposées : pics sur les rebords, filets de protection ou gel répulsif selon la configuration.</p>",
      specificChallenges: [
        "<strong>Proximité des quais</strong> et du Parc de Billancourt favorisant la présence de colonies de pigeons.",
        "Corniches et appuis en pierre des immeubles Art Déco particulièrement exposés aux corrosions acides.",
        "Balcons filants avec garde-corps métalliques nécessitant un traitement adapté pour éviter la rouille.",
        "Règlements de copropriété stricts sur le <strong>rejet d'eau</strong> imposant des méthodes de rinçage contrôlées.",
        "Accès sécurisés par digicode et présence fréquente de gardiens à coordonner pour l'intervention."
      ],
      faqAdditions: [
        {
          question: "Quel est votre délai d'intervention en cas d'accumulation importante de fientes sur un balcon du Boulevard de la République ?",
          answer: "<p>Nous intervenons généralement dans les meilleurs délais selon la charge de travail. Pour les situations présentant un <strong>risque sanitaire avéré</strong> ou une gêne importante, un passage prioritaire peut être organisé. Contactez-nous pour évaluer l'urgence de votre situation.</p>"
        },
        {
          question: "Quels équipements de protection utilisez-vous pour traiter les corniches et appuis fortement souillés près des parcs ?",
          answer: "<p>Nos techniciens portent systématiquement un masque FFP2, des gants résistants, des lunettes de protection et une combinaison jetable. La zone est bâchée pour éviter toute dispersion de particules contaminées vers l'intérieur du logement ou chez les voisins.</p>"
        },
        {
          question: "Quelle désinfection appliquez-vous après le retrait des fientes sur les balcons côté quais de Seine ?",
          answer: "<p>Nous utilisons un produit virucide et bactéricide homologué, appliqué après le nettoyage des surfaces. Le temps de contact recommandé par le fabricant est respecté avant rinçage. Cette étape élimine les agents pathogènes présents dans les résidus organiques.</p>"
        },
        {
          question: "Comment gérez-vous l'évacuation des déchets contaminés dans les rues proches du centre commercial Les Passages ?",
          answer: "<p>Les fientes et résidus sont conditionnés dans des <strong>sacs étanches</strong> dès le ramassage. Nous les évacuons dans notre véhicule sans transit par les parties communes. Le stationnement est anticipé pour limiter la durée d'intervention en zone à forte affluence.</p>"
        }
      ],
      ctaOverride: ""
    },

    {
      serviceKey: "canapes-tapis",
      heroDescription: "Un détachage en profondeur de vos canapés, tapis et matelas, avec extraction des résidus incrustés et séchage maîtrisé pour retrouver un textile propre et sain.",
      whyUsBullets: [
        "Connaissance des intérieurs boulonnais et de leurs textiles exigeants, du secteur Silly aux résidences nord.",
        "Détachage enzymatique ciblé et extraction textile adaptée aux fibres naturelles comme aux synthétiques.",
        "Organisation souple malgré le stationnement difficile : coordination avec gardiens et créneaux ajustés."
      ],
      uniqueIntro: "<p>Comment préserver l'aspect et l'hygiène d'un canapé en laine ou d'un tapis en velours quand les sollicitations quotidiennes laissent des traces tenaces ? Dans le secteur de la <strong>rue de Silly</strong> et les quartiers résidentiels nord de Boulogne-Billancourt, les intérieurs accueillent souvent des textiles délicats qui absorbent poussières, taches alimentaires et résidus d'animaux domestiques. Ces salissures s'accumulent dans les fibres sans toujours se voir immédiatement.</p>\
<p class=\"mt-4\">Un entretien adapté redonne du confort au quotidien : couleurs ravivées, odeurs neutralisées, sensation agréable au toucher. Dans les appartements de standing équipés de tissus haut de gamme — laine, velours, parfois soie — un traitement inadapté risque d'abîmer les fibres ou de fixer définitivement certaines taches. L'enjeu est d'obtenir un résultat visible sans compromettre la longévité du textile.</p>\
<p class=\"mt-4\">Notre intervention s'organise autour d'un diagnostic précis et d'un protocole ajusté à chaque support. Malgré les <strong>contraintes de stationnement</strong> en centre-ville et les accès parfois restreints, nous coordonnons l'intervention pour limiter la gêne et assurer une remise en service rapide de vos assises et sols textiles.</p>",
      uniqueDeepDive: "<h3>Textile assaini et taches éliminées</h3>\n<p>L'objectif est de retrouver un canapé, tapis ou matelas débarrassé des salissures visibles et des résidus invisibles (acariens, poussières profondes). Pour y parvenir, nous réalisons d'abord un diagnostic du tissu : identification de la composition (coton, laine, synthétique, velours) et repérage des zones à traiter en priorité.</p>\n<p class=\"mt-4\">Un test discret sur une partie cachée permet de valider la compatibilité des produits avec les fibres fragiles.</p>\n\n<h3>Détachage ciblé et injection-extraction</h3>\n<p>Les taches identifiées (café, vin, urine, graisse) reçoivent un pré-traitement enzymatique adapté. Ensuite, la technique d'injection-extraction projette une solution nettoyante dans les fibres puis aspire immédiatement l'eau chargée de résidus.</p>\n<p class=\"mt-4\">La pression et la température sont modulées selon la sensibilité du textile pour éviter toute dégradation.</p>\n\n<h3>Extraction renforcée et séchage maîtrisé</h3>\n<p>Nous procédons à plusieurs passages d'extraction pour retirer un maximum d'humidité. Le temps de séchage varie selon l'épaisseur du textile et la ventilation du logement — généralement quelques heures avec une bonne aération.</p>\n<p class=\"mt-4\">Des conseils d'entretien vous sont transmis pour espacer les interventions futures.</p>",
      specificChallenges: [
        "<strong>Textiles haut de gamme</strong> (laine, velours, soie) nécessitant un diagnostic avant traitement.",
        "Taches anciennes de café, vin ou urine animale incrustées dans les fibres profondes.",
        "<strong>Stationnement très contraint</strong> en centre-ville et accès par digicode fréquent.",
        "Temps de séchage variable selon épaisseur du textile et aération du logement.",
        "Coordination nécessaire avec gardiens pour accéder aux immeubles sécurisés."
      ],
      faqAdditions: [
        {
          question: "Un nettoyage de canapé en laine dans un appartement rue de Silly permet-il d'éliminer efficacement acariens et allergènes ?",
          answer: "<p>L'injection-extraction retire une grande partie des acariens et allergènes logés dans les fibres. Sur un canapé en laine, nous adaptons la température et les produits pour préserver le textile tout en assurant une hygiène améliorée. Le résultat dépend aussi de l'état initial et de l'aération après intervention.</p>"
        },
        {
          question: "Comment traitez-vous les taches d'urine anciennes sur tapis ou canapé dans un appartement familial du centre-ville ?",
          answer: "<p>Les taches d'urine nécessitent un pré-traitement enzymatique qui décompose les résidus organiques avant extraction. Sur un tapis ou canapé sollicité par des animaux, plusieurs passages peuvent être requis. Nous évaluons l'ancienneté de la tache pour ajuster le protocole et limiter les auréoles résiduelles.</p>"
        },
        {
          question: "Comment adaptez-vous vos produits selon le textile — soie, laine ou synthétique — pour les canapés à Boulogne-Billancourt ?",
          answer: "<p>Chaque tissu réagit différemment : la soie exige une pression minimale et des solutions neutres, la laine supporte un traitement enzymatique doux, le synthétique tolère des cycles plus appuyés. Un test préalable sur zone cachée nous permet de valider la compatibilité avant de traiter l'ensemble.</p>"
        },
        {
          question: "Quand recommandez-vous un détachage ciblé plutôt qu'un nettoyage complet pour un canapé taché dans un appartement de standing ?",
          answer: "<p>Le détachage ciblé convient lorsque seules quelques zones présentent des taches localisées sur un textile globalement propre. Si l'ensemble du canapé montre un encrassement diffus ou des odeurs persistantes, un nettoyage complet par injection-extraction sera plus adapté pour un résultat homogène.</p>"
        }
      ],
      ctaOverride: ""
    },

    {
      serviceKey: "terrasses",
      heroDescription: "Une remise en état complète de votre terrasse, avec traitement adapté au support et élimination des mousses pour retrouver une surface saine et agréable à utiliser.",
      whyUsBullets: [
        "Connaissance des terrasses exposées à l'humidité des quais de Seine et des contraintes spécifiques aux attiques boulonnais.",
        "Maîtrise des traitements anti-mousse sur bois exotique, composite et dalles sur plots sans altération des supports.",
        "Organisation soignée pour protéger mobilier et plantations, avec gestion des eaux vers les évacuations existantes."
      ],
      uniqueIntro: "<p>Les traces verdâtres et les dépôts noirâtres sont visibles sur de nombreuses terrasses le long du <strong>Quai Alphonse Le Gallo</strong> et dans le secteur des Rives de Seine. L'humidité ambiante liée à la proximité de l'eau favorise l'apparition rapide de mousses et de lichens, rendant les surfaces glissantes et peu engageantes dès les premiers mois suivant l'installation.</p>\
<p class=\"mt-4\">Sur les <strong>terrasses en attique</strong> équipées de bois exotique, de composite ou de dalles sur plots, ces dépôts biologiques s'incrustent dans les rainures et les joints. Le revêtement perd son aspect d'origine, et l'espace extérieur devient moins utilisé malgré son potentiel. Les tentatives de brossage à l'eau claire ne suffisent généralement pas à éliminer ces salissures tenaces.</p>\
<p class=\"mt-4\">Une intervention structurée permet de traiter chaque type de support avec les produits et la pression adaptés. Le diagnostic préalable identifie les zones les plus touchées par l'hygrométrie des quais et les dépôts biologiques, afin d'ajuster le protocole aux conditions réelles de votre terrasse.</p>",
      uniqueDeepDive: "<h3>Préparation et protection</h3>\n<p>Le mobilier extérieur et les jardinières sont déplacés ou bâchés. Les menuiseries, baies vitrées et seuils de porte reçoivent une protection pour éviter les projections.</p>\n<p class=\"mt-4\">Un balayage élimine les feuilles mortes, la terre accumulée et les débris végétaux avant le traitement.</p>\n\n<h3>Traitement et nettoyage</h3>\n<p>Un produit adapté au support est appliqué : formulation spécifique pour le teck, le composite ou les dalles en pierre reconstituée. Le brossage manuel ou mécanique décolle les mousses et lichens incrustés.</p>\n<p class=\"mt-4\">La haute pression contrôlée intervient uniquement sur les matériaux qui la supportent, en préservant les joints et les surfaces poreuses.</p>\n\n<h3>Finalisation et conseils</h3>\n<p>Les eaux de rinçage sont dirigées vers les points d'évacuation existants. Les plantations proches sont protégées pendant cette phase.</p>\n<p class=\"mt-4\">Un temps de séchage est respecté avant la remise en place du mobilier. Des recommandations d'entretien saisonnier vous sont transmises pour prolonger le résultat obtenu.</p>",
      specificChallenges: [
        "<strong>Mousses et lichens</strong> favorisés par l'hygrométrie élevée des terrasses proches des quais de Seine.",
        "Supports variés en attique : <strong>teck, composite, dalles sur plots</strong> nécessitant des traitements différenciés.",
        "Rainures et joints qui retiennent les dépôts biologiques et compliquent le nettoyage superficiel.",
        "Gestion des eaux de rinçage sur terrasses en hauteur pour éviter les désagréments au voisinage.",
        "Accès aux immeubles récents des Rives de Seine soumis à <strong>badge et interphone</strong>."
      ],
      faqAdditions: [
        {
          question: "Quelles précautions prenez-vous pour nettoyer une terrasse en teck sur un attique des Rives de Seine exposé aux embruns ?",
          answer: "<p>Le teck reçoit un traitement spécifique <strong>basse pression</strong> pour ne pas ouvrir les fibres du bois. Les baies vitrées et le mobilier sont protégés avant intervention. Le produit utilisé respecte les caractéristiques du bois exotique tout en éliminant les dépôts liés à l'humidité ambiante des quais.</p>"
        },
        {
          question: "Quel traitement conseillez-vous pour éliminer mousses et lichens sur une terrasse proche du Quai Alphonse Le Gallo sans abîmer le bois ?",
          answer: "<p>Un produit anti-mousse adapté aux bois extérieurs est appliqué puis rincé après temps de pose. Le brossage mécanique décolle les lichens incrustés sans agresser la surface. Cette méthode convient aux terrasses exposées à l'hygrométrie des bords de Seine où les dépôts biologiques reviennent rapidement.</p>"
        },
        {
          question: "Peut-on appliquer un traitement anti-mousse sur une terrasse en composite des Rives de Seine sans risque pour le support ?",
          answer: "<p>Le composite supporte les traitements anti-mousse à condition d'utiliser des formulations sans chlore ni acide. Le produit est appliqué sur surface humide puis rincé à pression modérée. Les lames composites des terrasses en attique retrouvent leur aspect uniforme sans altération de la teinte d'origine.</p>"
        },
        {
          question: "Quelle est la meilleure saison pour intervenir sur une terrasse en bois exposée nord proche des quais ?",
          answer: "<p>Le printemps et le début d'automne offrent des conditions optimales : températures douces et <strong>séchage correct</strong>. Éviter les périodes de gel ou de forte chaleur qui perturbent l'action des produits. Sur les terrasses exposées nord des quais, une intervention avant l'hiver limite la prolifération des mousses pendant la saison humide.</p>"
        }
      ],
      ctaOverride: ""
    },

    {
      serviceKey: "nettoyage-appartement-maison",
      heroDescription: "Une remise en état complète de votre appartement ou maison, du sol aux finitions, pour une restitution impeccable lors d'un état des lieux ou après travaux de rénovation.",
      whyUsBullets: [
        "Connaissance des typologies boulonnaises, de l'Art Déco aux résidences récentes du Trapèze, et de leurs exigences spécifiques.",
        "Maîtrise des techniques adaptées au parquet massif, au marbre et aux carrelages grand format sans risque de rayure.",
        "Organisation calée sur vos contraintes : coordination agence, accès par gardien, intervention en journée ou en soirée."
      ],
      uniqueIntro: "<p>Après plusieurs semaines de travaux ou à l'approche d'une remise de clés, un logement accumule poussières fines, traces de peinture et résidus divers sur chaque surface. Autour de la <strong>Place Marcel Sembat</strong>, où la rotation locative reste soutenue, les demandes de nettoyage complet se multiplient entre deux locataires ou en fin de chantier. Le délai disponible est souvent court, et l'exigence de propreté élevée.</p>\n<p class=\"mt-4\">Dans les <strong>appartements de standing</strong> équipés de parquet massif, marbre ou carrelage grand format, chaque matériau réclame un traitement adapté pour éviter rayures ou voiles persistants. Un nettoyage approximatif laisse des traces visibles qui compliquent la signature d'un bail ou retardent la livraison d'un chantier. Le résultat attendu dépasse le simple ménage : il s'agit de rendre le bien prêt à être habité.</p>\n<p class=\"mt-4\">La coordination avec les agences immobilières et les artisans présents sur place conditionne souvent le calendrier. Une intervention structurée, calée sur les contraintes d'accès et les délais imposés, permet de finaliser la mise en propreté sans perturber les autres intervenants.</p>",
      uniqueDeepDive: "<h3>Un logement prêt à être occupé ou restitué</h3>\
<p>L'objectif est de livrer un appartement où chaque pièce peut être utilisée immédiatement. Sols propres, sanitaires désinfectés, vitres intérieures transparentes, placards vidés de toute poussière. Pour y parvenir, nous procédons d'abord à un <strong>diagnostic rapide</strong> qui identifie les zones critiques et les matériaux présents.</p>\
\
<h3>Traitement différencié des surfaces</h3>\
<p>Le <strong>dépoussiérage</strong> commence par les points hauts — plafonds, luminaires, dessus de meubles — avant de descendre vers les plinthes et les sols. Les pièces d'eau reçoivent un détartrage et une désinfection complète. En cas de fin de chantier, les résidus de peinture, enduit ou colle sont retirés manuellement sur les menuiseries et les vitrages.</p>\
\
<h3>Contrôle et remise des clés</h3>\
<p>Avant de quitter le logement, un passage en revue vérifie l'absence de traces oubliées. Interrupteurs, poignées et radiateurs sont essuyés. Le bien est aéré pour éliminer les odeurs résiduelles, puis les clés peuvent être transmises au propriétaire ou à l'agence.</p>",
      specificChallenges: [
        "<strong>Délais serrés</strong> entre la fin des travaux et l'état des lieux, fréquents autour de Marcel Sembat.",
        "Parquets anciens et marbres sensibles nécessitant des produits et outils non abrasifs.",
        "Stationnement très contraint en centre-ville, anticipation du créneau de livraison du matériel.",
        "Coordination avec artisans encore présents sur le chantier pour éviter les <strong>allers-retours inutiles</strong>.",
        "Accès sécurisés par digicode et gardien, planification des horaires d'intervention en amont."
      ],
      faqAdditions: [
        {
          question: "Quel est votre délai d'intervention pour un nettoyage urgent d'appartement autour de la Place Marcel Sembat en cas d'état des lieux imminent ?",
          answer: "<p>Nous pouvons généralement intervenir sous 48 à 72 heures selon la taille du logement et la disponibilité des accès. Pour les situations très urgentes, un créneau prioritaire peut être proposé après échange téléphonique afin de valider les contraintes de planning et de stationnement.</p>"
        },
        {
          question: "Quelle différence de process appliquez-vous entre un nettoyage standard et un nettoyage après chantier dans un appartement rénové à Boulogne ?",
          answer: "<p>Un nettoyage fin de chantier inclut le retrait des résidus de peinture, d'enduit et de colle sur les menuiseries et vitrages, ainsi qu'un <strong>dépoussiérage renforcé</strong> des plafonds et des gaines techniques. Le temps d'intervention est plus long et les produits utilisés sont adaptés aux salissures de construction.</p>"
        },
        {
          question: "Comment intervenez-vous après un dégât des eaux pour traiter traces et humidité dans un appartement proche des quais de Seine ?",
          answer: "<p>Après assèchement du logement, nous procédons au nettoyage des surfaces touchées et au traitement des traces d'humidité visibles. Si des moisissures superficielles sont présentes, un protocole de désinfection ciblé est appliqué. Nous recommandons toutefois un diagnostic préalable pour évaluer l'étendue des dégâts.</p>"
        },
        {
          question: "Comment coordonnez-vous le ménage final avec les artisans et l'agence immobilière pour un état des lieux près du centre commercial Les Passages ?",
          answer: "<p>Nous fixons un créneau d'intervention en accord avec l'agence et les artisans afin de passer en dernier, une fois les travaux terminés. Un <strong>contact direct</strong> avec le gardien ou le gestionnaire facilite l'accès au logement et évite les décalages de planning le jour de la remise des clés.</p>"
        }
      ],
      ctaOverride: ""
    }
  ],
};

export default city;