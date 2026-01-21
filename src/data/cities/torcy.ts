import type { City } from "~/types/geo";

const city: City = {
  name: "Torcy",
  slug: "torcy",
  postalCodes: ["77200"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  customDescription:
    "Ville dynamique de Seine-et-Marne desservie par le RER A, Torcy concentre immeubles récents et zones d'activités autour de la gare et du secteur Bay. L'entretien des moquettes dans les copropriétés, des parkings souterrains et des balcons nécessite une approche adaptée aux contraintes urbaines locales.",

  hubIntro: `<p>KLINOVA accompagne les syndics et gestionnaires de Torcy dans leur gestion quotidienne de la propreté immobilière. Notre proximité géographique et notre connaissance du tissu urbain local nous permettent d'intervenir rapidement sur vos copropriétés et zones d'activités.</p>
<p class="mt-4">Nous proposons une approche globale de la maintenance technique : du nettoyage des moquettes de halls aux parkings souterrains, en passant par l'entretien des balcons et terrasses. Chaque intervention fait l'objet d'un protocole rigoureux et d'un reporting détaillé pour vos conseils syndicaux.</p>
<ul>
  <li><strong>Interventions programmées</strong> sur les copropriétés du secteur Arche-Guédon et centre-ville.</li>
  <li><strong>Gestion des accès sécurisés</strong> Vigik et coordination avec les gardiens d'immeubles.</li>
  <li><strong>Protocoles adaptés</strong> aux contraintes de stationnement près de la gare RER.</li>
  <li><strong>Reporting détaillé</strong> pour assemblées générales et suivi budgétaire.</li>
</ul>`,

  citySpecificChallenges: [
    "Encrassement accéléré des moquettes de halls par le passage intensif lié à la desserte RER A.",
    "Accumulation de particules fines et résidus urbains sur les balcons exposés aux axes routiers A4 et A104.",
    "Traces de boue et salissures dans les parkings souterrains des résidences récentes du secteur ville nouvelle.",
    "Dépôts de mousses et algues sur les terrasses des étangs de Maubuée en période humide."
  ],

  districts: [
    "Vieux Torcy",
    "Le Mail",
    "Victor-Hugo",
    "Les Lacs",
    "Arche-Guédon",
    "Beauregard",
    "Les Gradins",
    "Bel Air",
    "Le Belvédère",
    "Le Carré Fleuri",
    "Ville nouvelle (secteur gare / Bay / zone industrielle)"
  ],

nearbyCities: [
  "bussy-saint-georges",
  "champs-sur-marne",
  "lagny-sur-marne",
  "noisy-le-grand",
  "serris",
  "vaires-sur-marne",
],

  landmarks: [
    "Mairie de Torcy",
    "Gare RER A de Torcy",
    "Centre commercial Bay 1",
    "Centre commercial Bay 2",
    "Zone industrielle de Torcy",
    "Étangs de Torcy (Maubuée)",
    "Base de loisirs de Vaires-Torcy",
    "Église Saint-Barthélemy"
  ],

  faq: [
    {
      question: "Intervenez-vous rapidement sur le secteur de Torcy ?",
      answer:
        "<strong>Notre équipe intervient sous 48 heures en semaine</strong> sur Torcy et environs. Pour les urgences, sinistre ou fin de chantier, nous mobilisons nos techniciens dans la journée. La proximité de notre base logistique nous permet cette réactivité."
    },
    {
      question: "Comment gérez-vous les accès aux immeubles sécurisés ?",
      answer:
        "Nos techniciens sont équipés pour intervenir sur les <strong>accès sécurisés</strong> et se coordonnent systématiquement avec les gardiens ou syndics. Nous récupérons les clés en amont et les restituons selon vos procédures internes, avec une traçabilité complète des accès."
    },
    {
      question: "Les déplacements pour devis sont-ils gratuits ?",
      answer:
        "<strong>Tous nos déplacements pour établir un devis sont gratuits</strong> sur Torcy et la communauté d'agglomération Paris-Vallée de la Marne. Notre technicien évalue précisément les surfaces et contraintes pour un chiffrage exact sans mauvaise surprise."
    },
    {
      question: "Pouvez-vous intervenir malgré les contraintes de stationnement près de la gare ?",
      answer:
        "Nos équipes connaissent bien les <strong>créneaux et zones de livraison autorisées</strong> à Torcy. Nous planifions nos interventions aux heures optimales et disposons de matériel compact pour gérer les accès difficiles du centre-ville et du secteur gare."
    }
  ],

  testimonial: {
    text:
      "Klinova a rapidement remis en état les moquettes et le parking de notre résidence à Torcy, avec un suivi clair pour le conseil syndical.",
    author: "S. Martin",
    role: "Syndic bénévole",
    building: "Résidence du secteur Arche-Guédon"
  },

  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Redonnez de l'éclat aux halls et cages d'escaliers de vos copropriétés à Torcy grâce à un nettoyage professionnel qui restaure l'aspect d'origine des moquettes.",
      whyUsBullets: [
        "Connaissance approfondie des contraintes spécifiques aux copropriétés du secteur Arche-Guédon et de la ville nouvelle.",
        "Matériel professionnel d'injection-extraction adapté aux différents types de fibres et niveaux d'encrassement.",
        "Organisation flexible respectant les horaires de passage et contraintes d'accès près de la gare RER.",
        "Compte-rendu détaillé d'intervention avec recommandations d'entretien pour le syndic."
      ],

      uniqueIntro: `<p>Les moquettes des halls d'entrée et cages d'escaliers à Torcy subissent un <strong>encrassement constant</strong> lié au passage intensif des résidents et visiteurs. Entre les salissures rapportées depuis les axes routiers A4 et A104, les traces de boue des journées pluvieuses et l'usure naturelle dans les zones de fort trafic, ces revêtements perdent rapidement leur aspect d'origine.</p>
<p class="mt-4">Les copropriétés du secteur Arche-Guédon et les résidences récentes de la ville nouvelle présentent souvent des moquettes ternes dans les parties communes, créant une première impression défavorable pour les visiteurs et les futurs acquéreurs. Cette dégradation visuelle nuit à l'image générale de l'immeuble et peut générer des tensions lors des assemblées générales. Un <strong>nettoyage professionnel structuré</strong> permet de retrouver l'aspect d'origine des moquettes et de prolonger significativement leur durée de vie.</p>`,

      uniqueDeepDive: `<h3>Diagnostic approfondi et préparation sur mesure</h3>
<p>Notre intervention débute par un diagnostic approfondi de l'état des moquettes : type de fibres, niveau d'encrassement, identification des taches spécifiques et évaluation des contraintes d'accès typiques des immeubles de Torcy. Nous prenons en compte la configuration des halls souvent ouverts sur rue, la proximité de la gare RER générant un flux piétonnier important et les spécificités architecturales des résidences de la ville nouvelle. La phase de préparation inclut la protection des bas de murs, le balisage des zones d'intervention et l'organisation par cage d'escalier pour limiter la gêne des résidents.</p>

<h3>Nettoyage par injection-extraction en profondeur</h3>
<p class="mt-4">Le nettoyage s'effectue par <strong>injection-extraction à l'eau</strong>, méthode qui permet d'éliminer les salissures incrustées sans abîmer les fibres. Nos techniciens effectuent plusieurs passes sur les zones de fort passage comme les seuils d'entrée et les paliers principaux. L'extraction puissante des eaux de lavage assure un séchage optimal même dans les halls exposés à l'humidité hivernale.</p>

<h3>Entretien programmé et conseils de suivi</h3>
<p class="mt-4">Nous recommandons un <strong>nettoyage complet tous les 12 à 18 mois</strong> pour les copropriétés à fort passage, complété par un entretien régulier par aspiration et détachage ponctuel.</p>`,

      specificChallenges: [
        "Encrassement accéléré des moquettes dans les halls proches de la gare RER A, avec des zones de passage à traiter de façon renforcée.",
        "Incrustation profonde de particules fines issues du trafic des axes A4 et A104, nécessitant un pré-traitement et plusieurs passes d'injection-extraction.",
        "Ralentissement possible du séchage dans les rez-de-chaussée exposés à l'humidité hivernale, demandant une extraction particulièrement efficace.",
        "Usure différenciée des moquettes d'escaliers selon les paliers, nécessitant une approche par zones pour homogénéiser le rendu."
      ],

      faqAdditions: [
        {
          question: "Quelles sont les particularités des interventions dans les copropriétés de Torcy ?",
          answer:
            "Nous tenons compte du <strong>flux piétonnier important</strong> lié à la desserte RER et adaptons nos horaires d'intervention en conséquence. Les halls des résidences récentes du secteur ville nouvelle présentent souvent des moquettes de qualité qui nécessitent un traitement délicat. Nous coordonnons systématiquement avec les gardiens pour optimiser l'organisation et limiter la gêne des résidents."
        },
        {
          question: "Intervenez-vous sur tous types de copropriétés à Torcy ?",
          answer:
            "Nous travaillons aussi bien sur les petites copropriétés du vieux Torcy que sur les grandes résidences contemporaines de l'Arche-Guédon. Nos équipes sont habituées aux <strong>configurations variées</strong> et adaptent matériel et méthode à chaque architecture pour un résultat optimal."
        },
        {
          question: "Le nettoyage par injection-extraction risque-t-il d'abîmer les moquettes ?",
          answer:
            "Notre méthode respecte les fibres en ajustant la pression et la température selon le type de moquette identifié lors du diagnostic initial. L'injection d'eau savonneuse suivie d'une <strong>extraction immédiate</strong> évite la sur-humidification et permet aux moquettes de retrouver leur souplesse d'origine."
        },
        {
          question: "Comment organisez-vous les interventions pour limiter la gêne des résidents ?",
          answer:
            "Nous planifions nos passages en dehors des heures de forte affluence et informons préalablement les résidents via le syndic ou les panneaux d'affichage. Le <strong>balisage temporaire</strong> permet de maintenir un accès sécurisé aux étages, et nos équipes travaillent par zones successives pour éviter de bloquer complètement la circulation."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",
      heroDescription:
        "Transformez vos parkings souterrains de Torcy en espaces propres et sécurisés grâce à un décrassage professionnel qui élimine huile, poussière et traces d'usure.",
      whyUsBullets: [
        "Expérience des parkings souterrains des copropriétés récentes et contraintes d'accès propres au secteur de Torcy.",
        "Matériel adapté, autolaveuse et haute pression, pour un traitement efficace des surfaces béton et des rampes.",
        "Planification flexible respectant les heures creuses et rotation par zones sans blocage total du parking.",
        "Gestion conforme des eaux usées et rapport d'intervention détaillé pour le syndic."
      ],

      uniqueIntro: `<p>Les parkings souterrains des copropriétés de Torcy accumulent rapidement salissures et dépôts gras liés au <strong>trafic intense des axes A4 et A104.</strong> Entre les traces d'hydrocarbures, la poussière noire qui se dépose sur les sols et les murs, et l'encrassement des rampes d'accès, ces espaces perdent leur aspect d'origine et peuvent devenir glissants.</p>
<p class="mt-4">Les résidences du secteur Arche-Guédon et les programmes récents de la ville nouvelle présentent souvent des parkings dont les marquages au sol deviennent illisibles et les surfaces béton ternies par l'accumulation de résidus automobiles. Cette dégradation nuit à l'image de la copropriété et peut créer des conditions d'insécurité pour les résidents. Un <strong>décrassage professionnel</strong> redonne lisibilité aux marquages, améliore l'adhérence des sols et restaure la propreté générale.</p>`,

      uniqueDeepDive: `<h3>Évaluation technique et organisation par zones</h3>
<p>Notre intervention commence par une évaluation complète du parking : type de revêtement, système d'évacuation des eaux, contraintes d'accès et hauteur sous plafond. Nous analysons l'état des marquages, l'importance des taches d'huile et la configuration des rampes typiques des constructions récentes de Torcy. La préparation inclut un balayage mécanique des débris, le dégagement des zones de stockage sauvage et la mise en place d'une signalisation adaptée pour informer les résidents.</p>

<h3>Décrassage et dégraissage professionnel</h3>
<p class="mt-4">Le nettoyage s'effectue avec <strong>autolaveuse</strong> pour les surfaces planes et haute pression contrôlée pour les rampes et angles difficiles d'accès. Nous appliquons des dégraissants professionnels sur les taches d'hydrocarbures anciennes et gérons rigoureusement les eaux de lavage selon la réglementation. L'intervention est organisée par zones successives pour maintenir un accès permanent aux véhicules, généralement programmée en matinée pour limiter la gêne.</p>

<h3>Planification et entretien préventif</h3>
<p class="mt-4">Nous recommandons un <strong>décrassage complet une à deux fois par an</strong> selon l'intensité d'usage pour maintenir un niveau de propreté constant et préserver les revêtements.</p>`,

      specificChallenges: [
        "Encrassement accéléré des parkings situés près des grands axes routiers A4 et A104, avec particules de combustion et résidus d'hydrocarbures fortement adhérents.",
        "Rampes d'accès étroites et contraintes de hauteur dans les résidences contemporaines, nécessitant un matériel compact et maniable.",
        "Faible ventilation de certains parkings souterrains du secteur ville nouvelle, qui peut prolonger les temps de séchage et demande une organisation adaptée.",
        "Sols en pente douce vers des évacuations centrales imposant une gestion précise du ruissellement des eaux de lavage pour éviter les débordements."
      ],

      faqAdditions: [
        {
          question: "Pourquoi les parkings de Torcy s'encrassent-ils si rapidement ?",
          answer:
            "La proximité des <strong>axes A4 et A104</strong> génère des retombées importantes de particules de combustion qui se mélangent aux résidus d'huile moteur. Le trafic quotidien intensif lié à la desserte RER accentue l'usure des revêtements, et les parkings fermés retiennent ces polluants qui se déposent progressivement sur toutes les surfaces."
        },
        {
          question: "Faut-il vider complètement le parking pendant l'intervention ?",
          answer:
            "Nous organisons le nettoyage par <strong>zones successives</strong> pour maintenir l'accès aux véhicules des résidents. Une rotation simple permet de traiter la moitié du parking puis l'autre, sur des créneaux définis avec le syndic."
        },
        {
          question: "Pouvez-vous éliminer les taches d'huile anciennes et incrustées ?",
          answer:
            "Notre méthode permet d'atténuer significativement la plupart des taches d'hydrocarbures grâce à des <strong>dégraissants professionnels</strong> et un temps de contact adapté. Les taches très anciennes peuvent laisser une légère trace résiduelle selon la porosité du béton, mais l'aspect général est nettement amélioré."
        },
        {
          question: "Comment gérez-vous l'évacuation des eaux de lavage ?",
          answer:
            "Nous vérifions la conformité du système d'évacuation et respectons la réglementation sur les eaux usées chargées en hydrocarbures. Les eaux de lavage sont dirigées vers les siphons existants ou récupérées par aspiration. Un <strong>certificat de conformité</strong> peut être fourni sur demande."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS 
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Retrouvez le plaisir d'utiliser votre balcon à Torcy grâce à un nettoyage professionnel qui élimine mousses, dépôts et salissures accumulées.",
      whyUsBullets: [
        "Connaissance des typologies de balcons des résidences récentes et immeubles anciens de Torcy.",
        "Techniques adaptées aux différents revêtements et aux contraintes d'exposition aux étangs environnants.",
        "Intervention discrète respectant le voisinage et planifiée selon vos disponibilités personnelles.",
        "Conseils d'entretien personnalisés pour préserver durablement la propreté de votre espace extérieur."
      ],

      uniqueIntro: `<p>Les balcons des appartements de Torcy subissent un <strong>encrassement constant</strong> lié à l'exposition aux particules issues du trafic des axes A4 et A104, ainsi qu'aux dépôts organiques favorisés par l'humidité des étangs de Maubuée. Entre les joints noircis, les traces verdâtres de mousses et d'algues et l'accumulation de poussière urbaine, ces espaces extérieurs perdent rapidement leur attrait.</p>
<p class="mt-4">Les résidents des copropriétés récentes du secteur Arche-Guédon comme ceux du vieux Torcy se retrouvent avec des balcons qu'ils évitent d'utiliser, devenus peu accueillants et donnant une impression de négligence. Un <strong>nettoyage professionnel</strong> redonne vie à ces espaces extérieurs et permet de les réinvestir pleinement pour les moments de détente.</p>`,

      uniqueDeepDive: `<h3>Protection et préparation minutieuse</h3>
<p>L'intervention commence par la protection soigneuse de la porte-fenêtre, des menuiseries et des éventuels murs adjacents à l'aide de bâches adaptées. Nous déplaçons ou protégeons le mobilier, les plantes en pot et tous les objets présents pour accéder à l'ensemble des surfaces à traiter. Un enlèvement manuel préalable élimine les gros dépôts : feuilles mortes, terre accumulée dans les coins, résidus de jardinières et déchets divers.</p>

<h3>Nettoyage adapté et traitement complet</h3>
<p class="mt-4">Le nettoyage proprement dit s'adapte au type de revêtement identifié avec application de produits spécifiques, <strong>brossage manuel des zones encrassées</strong> et rinçage contrôlé. Nous nettoyons également le garde-corps, les vitreries de protection et les murs mitoyens. La gestion de l'eau est rigoureuse, avec orientation du ruissellement vers l'évacuation prévue et utilisation de raclettes et chiffons absorbants pour éviter toute coulure le long de la façade ou chez les voisins du dessous.</p>

<h3>Séchage et conseils d'entretien</h3>
<p class="mt-4">Le délai de séchage varie entre 4 et 6 heures selon les conditions météorologiques. Nous recommandons ensuite un entretien simple pour maintenir la propreté de votre balcon au fil des saisons.</p>`,

      specificChallenges: [
        "Exposition aux embruns humides des étangs de Maubuée qui favorise le développement rapide de mousses et d'algues sur les surfaces carrelées et dans les joints.",
        "Mélange de particules fines issues du trafic routier des grands axes avec cette humidité, créant des dépôts adhérents difficiles à éliminer.",
        "Configuration en étages des résidences imposant une gestion précise de l'écoulement des eaux de lavage pour éviter les nuisances aux voisins inférieurs.",
        "Garde-corps à barreaudage complexe des programmes récents nécessitant un nettoyage minutieux des dépôts accumulés dans les interstices."
      ],

      faqAdditions: [
        {
          question: "Le nettoyage à haute pression risque-t-il d'endommager mon carrelage ou mes joints ?",
          answer:
            "Nous adaptons systématiquement la pression selon le type de revêtement et l'état des joints. Sur les surfaces fragiles, nous privilégions le <strong>brossage manuel avec produits adaptés.</strong> Un diagnostic préalable nous permet d'identifier les zones sensibles et d'ajuster notre méthode pour garantir un nettoyage efficace sans dégradation."
        },
        {
          question: "Comment évitez-vous que l'eau coule chez les voisins du dessous ?",
          answer:
            "Nous dirigeons systématiquement l'eau vers l'évacuation prévue et utilisons des raclettes pour contrôler le ruissellement. Des <strong>chiffons absorbants</strong> sont disposés en périphérie pour intercepter toute coulure potentielle le long de la façade. Nous travaillons par petites zones pour maîtriser le volume d'eau utilisé."
        },
        {
          question: "Les produits utilisés sont-ils dangereux pour mes plantes ou animaux domestiques ?",
          answer:
            "Nous utilisons des produits de nettoyage professionnels <strong>biodégradables</strong>, sans danger pour la végétation une fois dilués et rincés. Vos plantes sont protégées pendant l'intervention, et pour les animaux domestiques nous recommandons de les maintenir à l'intérieur pendant le traitement et le séchage."
        },
        {
          question: "Combien de temps faut-il attendre avant de pouvoir réutiliser le balcon ?",
          answer:
            "Le délai de séchage varie entre <strong>4 et 6 heures</strong> selon les conditions météorologiques et le type de revêtement. Nous intervenons de préférence le matin pour que vous puissiez profiter de votre balcon dès l'après-midi et vous donnons une estimation en fin d'intervention."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Retrouvez un balcon sain et désinfecté à Torcy grâce à un traitement professionnel sécurisé qui élimine fientes, odeurs et risques sanitaires liés aux pigeons.",
      whyUsBullets: [
        "Certification Certibiocide et connaissance des zones à risque pigeons du secteur de Torcy.",
        "Protocole de décontamination conforme avec équipements de protection individuelle professionnels.",
        "Intervention discrète respectant les horaires et la sensibilité du voisinage aux nuisances olfactives.",
        "Traçabilité complète de l'élimination des déchets biologiques et possibilité de certificat de décontamination."
      ],

      uniqueIntro: `<p>Les balcons des appartements de Torcy subissent fréquemment des invasions de pigeons attirés par la proximité des <strong>étangs de Maubuée</strong> et les nombreux espaces verts de la ville nouvelle. Les fientes s'accumulent rapidement sur le carrelage, les garde-corps et les murs, dégageant des odeurs nauséabondes et rendant l'espace totalement inutilisable.</p>
<p class="mt-4">Cette situation génère un inconfort majeur pour les résidents, des inquiétudes concernant les <strong>risques sanitaires</strong> et parfois des tensions avec le voisinage ou la copropriété. Les immeubles du secteur Arche-Guédon et les résidences récentes offrent de nombreux recoins propices à la nidification des pigeons. Un traitement professionnel sécurisé s'impose pour décontaminer efficacement l'espace et permettre aux occupants de retrouver l'usage de leur balcon en toute sécurité.</p>`,

      uniqueDeepDive: `<h3>Protocole strict et équipements professionnels</h3>
<p>Notre intervention respecte un protocole strict de décontamination biologique. Nos techniciens s'équipent d'EPI complets : combinaison étanche, gants renforcés, masque respiratoire FFP2 et lunettes de protection. L'espace est sécurisé par des bâches pour éviter la dispersion des contaminants vers l'intérieur du logement et les balcons adjacents. Une humidification préalable des fientes sèches empêche la formation de poussières potentiellement dangereuses lors du ramassage.</p>

<h3>Nettoyage et désinfection homologuée</h3>
<p class="mt-4">Les fientes, nids et débris organiques sont collectés manuellement et conditionnés dans des sacs étanches spécialement conçus pour les déchets biologiques contaminés. Le nettoyage complet des surfaces s'effectue avec des produits adaptés, suivi d'une <strong>désinfection obligatoire avec un virucide et bactéricide homologué.</strong> Le temps de contact du désinfectant est scrupuleusement respecté avant rinçage final, puis les déchets sont évacués par nos équipes.</p>

<h3>Aération et conseils de prévention</h3>
<p class="mt-4">Après intervention, une aération complète est nécessaire. Le balcon peut être réutilisé en toute sécurité après séchage, généralement sous 2 à 4 heures. Si besoin, nous conseillons des solutions anti-intrusion simples pour limiter le retour des pigeons.</p>`,

      specificChallenges: [
        "Balcons des étages supérieurs du secteur étangs particulièrement exposés en raison de la proximité des zones humides attractives pour les pigeons.",
        "Accès en hauteur pour le nettoyage des garde-corps et façades souillées nécessitant des équipements de protection contre les chutes et une coordination précise.",
        "Fientes anciennes pouvant avoir corrodé certains supports métalliques et joints, imposant un traitement adapté pour éviter l'aggravation des dégâts.",
        "Gestion des déchets contaminés imposant un conditionnement étanche et une évacuation par nos équipes."
      ],

      faqAdditions: [
        {
          question: "Puis-je nettoyer moi-même les fientes de pigeons sur mon balcon ?",
          answer:
            "Le nettoyage des fientes de pigeons présente des <strong>risques sanitaires réels</strong> qui nécessitent des précautions professionnelles. La manipulation sans équipement adapté peut disperser des micro-organismes pathogènes par voie respiratoire ou cutanée. Notre certification Certibiocide garantit le respect des protocoles de sécurité et l'utilisation de produits homologués."
        },
        {
          question: "Les produits de désinfection sont-ils dangereux après séchage ?",
          answer:
            "Les produits virucides et bactéricides que nous utilisons sont homologués pour un usage en habitat une fois correctement rincés et séchés. Le <strong>délai de quelques heures</strong> que nous recommandons permet l'évaporation complète des résidus et garantit une réutilisation sans risque, y compris pour les enfants et les animaux domestiques."
        },
        {
          question: "Les fientes peuvent-elles avoir abîmé mon balcon de façon irréversible ?",
          answer:
            "L'acidité des fientes de pigeons peut attaquer certains supports lors d'une exposition prolongée. Notre diagnostic initial évalue l'étendue des dégâts et nous adaptons notre traitement pour limiter l'aggravation. Dans la plupart des cas, un <strong>nettoyage professionnel</strong> redonne un aspect satisfaisant même si quelques traces peuvent subsister sur les zones les plus dégradées."
        },
        {
          question: "Que deviennent les fientes et nids collectés ?",
          answer:
            "Les déchets sont conditionnés sur place dans des <strong>sacs étanches et sécurisés.</strong> Ils sont intégralement emportés par nos techniciens pour ne laisser aucune souillure dans les parties communes de la résidence."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5– CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Redonnez vie à vos canapés, tapis et matelas à Torcy grâce à un nettoyage à domicile qui élimine taches, acariens et odeurs tenaces.",
      whyUsBullets: [
        "Connaissance des contraintes domestiques des logements familiaux du secteur de Torcy.",
        "Matériel portable adapté aux textiles fragiles et techniques d'extraction efficaces contre les allergènes.",
        "Intervention sur rendez-vous à votre domicile, avec ponctualité rigoureuse et respect des lieux.",
        "Conseils personnalisés d'entretien pour préserver durablement la propreté de vos textiles."
      ],

      uniqueIntro: `<p>Dans les logements de Torcy, canapés et tapis subissent quotidiennement les aléas de la vie familiale : enfants qui jouent, animaux de compagnie, repas devant la télévision et réceptions entre amis. Les taches s'accumulent progressivement, les fibres se chargent de <strong>poussière et d'allergènes</strong>, tandis que des odeurs persistantes s'installent malgré l'entretien régulier.</p>
<p class="mt-4">Les matelas ne sont pas épargnés avec la transpiration nocturne, les acariens et les incidents du quotidien. Cette situation génère un inconfort croissant, des allergies possibles pour les personnes sensibles et une impression de saleté persistante malgré les efforts d'entretien. Un <strong>nettoyage professionnel à domicile</strong> restaure l'hygiène et l'aspect d'origine de ces éléments centraux du mobilier.</p>`,

      uniqueDeepDive: `<h3>Diagnostic et prétraitement ciblé</h3>
<p>Notre intervention à domicile débute par un diagnostic précis du type de textile et l'identification des taches présentes. Nous adaptons notre méthode selon la fragilité du support et procédons à un pré-traitement ciblé des taches tenaces avec des <strong>produits enzymatiques</strong> pour les souillures organiques et des détachants spécialisés selon la nature des salissures.</p>

<h3>Injection-extraction et extraction maximale</h3>
<p class="mt-4">Le nettoyage principal s'effectue par <strong>injection-extraction à l'eau</strong> avec aspiration immédiate des eaux sales, technique qui préserve les fibres tout en éliminant les salissures incrustées. L'intervention respecte les contraintes de votre logement : accès facilité, niveau sonore raisonnable et organisation pour limiter la perturbation de votre quotidien.</p>

<h3>Séchage et recommandations d'entretien</h3>
<p class="mt-4">Nous gérons attentivement le séchage par extraction maximale de l'humidité et prodiguons des conseils d'aération selon la configuration de vos pièces. Les textiles retrouvent leur souplesse d'origine et leur confort, avec des recommandations d'entretien pour prolonger le résultat.</p>`,

      specificChallenges: [
        "Mode de vie familial des résidences de Torcy générant un encrassement diversifié, avec de nombreuses taches organiques et allergènes domestiques.",
        "Humidité hivernale des logements parfois peu ventilés favorisant le développement d'acariens dans les textiles épais et ralentissant le séchage.",
        "Odeurs d'animaux domestiques très répandus dans les pavillons et appartements familiaux, s'incrustant profondément dans les fibres.",
        "Tissus délicats des canapés contemporains nécessitant une maîtrise technique pointue pour éviter toute décoloration ou rétrécissement."
      ],

      faqAdditions: [
        {
          question: "Votre nettoyage élimine-t-il efficacement les acariens et allergènes ?",
          answer:
            "Notre méthode d'<strong>injection-extraction à eau chaude</strong> élimine la très grande majorité des acariens, de leurs déjections et des allergènes accumulés dans les fibres. Cette action mécanique combinée aux produits utilisés réduit significativement la charge allergénique de vos textiles, avec une efficacité renforcée par un entretien préventif régulier."
        },
        {
          question: "Pouvez-vous traiter les taches d'urine et les odeurs tenaces d'animaux ?",
          answer:
            "Nous utilisons des <strong>produits enzymatiques</strong> spécialement formulés pour décomposer les protéines de l'urine et éliminer durablement les odeurs organiques. Ces enzymes agissent en profondeur même sur les taches anciennes. Selon l'ancienneté et la nature du tissu, une légère trace visuelle peut persister, mais le confort olfactif est fortement amélioré."
        },
        {
          question: "Quand pourrai-je m'asseoir sur mon canapé ?",
          answer:
            "Comptez environ une demi-journée. L'humidité résiduelle s'évapore en <strong>4 à 6 heures</strong> si la pièce est bien ventilée (fenêtres ouvertes). Nous vous conseillons de ne pas remettre les coussins immédiatement."
        },
        {
          question: "Que dois-je préparer avant votre intervention à domicile ?",
          answer:
            "Libérez l'accès aux textiles à traiter en déplaçant les objets posés dessus et en dégageant un passage pour notre matériel. Pour les tapis, un <strong>passage d'aspirateur préalable</strong> est idéal. Nous nous occupons de la protection des sols et meubles environnants et nous adaptons à la configuration de votre logement."
        }
      ],
      ctaOverride: ""
    },

    {
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "À Torcy, remise en état adaptée à une ville de flux : logements collectifs, pavillons et secteurs proches du RER, avec une organisation pensée pour stationnement et délais serrés.",

  whyUsBullets: [
    "Approche “ville de flux” : intervention efficace et cadrée pour états des lieux, relogement, visites d’agence, sans sacrifier les finitions.",
    "Connaissance des typologies locales : collectifs denses (Mail/Gradins), petits immeubles (Le Clos), pavillons (Bel-Air, Beauregard) et centre ancien (Le Village).",
    "Logistique maîtrisée : accès Vigik/digicode, parkings et zones bleues, organisation pour limiter les allers-retours et la gêne en copropriété.",
  ],

  uniqueIntro: `<p>À Torcy, le nettoyage d’un logement est souvent lié à un moment précis : état des lieux, remise en état avant relocation, grand ménage après une période chargée, ou nettoyage après travaux. La gare RER A concentre une partie de la rotation (secteurs Le Mail / Les Gradins / Val de Torcy), tandis que les quartiers pavillonnaires (Bel-Air, Beauregard) génèrent des demandes plus “maison” : plusieurs niveaux, véranda, garage, pièces annexes.</p>
<p class="mt-4">Le terrain impose aussi sa méthode : accès sécurisés dans beaucoup de résidences (badges, interphones), stationnement plus délicat autour de la gare et des zones commerciales, et créneaux à éviter quand la ville se “sature” (8h–9h, 17h–19h, samedi près de Bay 2). Une intervention bien préparée commence donc par le cadrage : surface, priorités, contraintes d’accès et niveau de finition attendu.</p>
<p class="mt-4">Côté résultats, Torcy présente des surfaces très courantes en ville nouvelle : sols PVC/lino dans certains collectifs, carrelage dans les pièces d’eau, parquet stratifié dans de nombreux pavillons et résidences récentes. Le bon rendu tient à une progression simple et propre : dégrossir, traiter cuisine/salle d’eau, uniformiser les sols, puis passer au contrôle final sur les détails visibles (plinthes, interrupteurs, poignées, bas de portes).</p>`,

  uniqueDeepDive: `<h3>T1 : Gare RER A / Le Mail / Les Gradins — états des lieux et “remise à niveau” rapide</h3>
<p>Autour du pôle gare, les demandes sont souvent orientées sortie/entrée de location : cuisine et salle d’eau d’abord (dégraissage, calcaire), puis sols et finitions. Dans ces résidences, l’enjeu est autant l’efficacité que la logistique : badge Vigik, ascenseurs, règles de copro, et stationnement plus contraint.</p>

<h3>T2 : Bel-Air / Beauregard — maisons familiales et volumes sur plusieurs niveaux</h3>
<p>En pavillonnaire, on rencontre des configurations plus larges : escaliers, chambres, bureau, pièces de rangement. Le nettoyage se joue sur l’homogénéité : sols sans traces, poussière correctement extraite des angles, et pièces d’eau remises “à blanc” sans attaquer les joints ou les surfaces fragiles.</p>

<h3>T3 : Le Village / centre ancien — accès serrés et finitions visibles</h3>
<p>Le Village apporte un autre contexte : rues plus étroites, stationnement parfois plus délicat, escaliers resserrés dans certains immeubles. Ici, on privilégie une intervention compacte : matériel adapté, passages optimisés, et contrôle final des zones qui marquent vite (entrées, poignées, encadrements, rebords).</p>`,

  specificChallenges: [
    "Ville de flux : demandes fréquentes liées aux états des lieux et aux relogements autour de la gare RER A.",
    "Stationnement et circulation : contraintes plus fortes près de la gare et le samedi vers Bay 1/Bay 2.",
    "Accès sécurisés : digicodes, Vigik, interphones, consignes d’immeuble dans la majorité des collectifs.",
    "Typologies contrastées : collectifs denses (Mail/Gradins) vs pavillons (Bel-Air/Beauregard) avec plusieurs niveaux.",
    "Calcaire en pièces d’eau : dépôts rapides, parois et robinetterie à traiter sans abîmer.",
    "Sols très variés : PVC/lino, carrelage, stratifié — risque de traces si la méthode n’est pas adaptée.",
  ],

  faqAdditions: [
    {
      question: "Intervenez-vous pour un nettoyage d’état des lieux à Torcy (77200) ?",
      answer: `<p>Oui. On suit une logique état des lieux : cuisine et salle d’eau en priorité, puis sols, puis finitions (plinthes, poignées, interrupteurs, bas de portes). C’est particulièrement demandé autour de la gare RER A et des quartiers Le Mail / Les Gradins.</p>`,
    },
    {
      question: "Pouvez-vous faire un nettoyage après travaux (poussières fines) à Torcy ?",
      answer: `<p>Oui. Après travaux, on procède en plusieurs passes pour éviter que la poussière revienne : surfaces/menusieries, puis sols, puis contrôle des rebords et angles. L’objectif est un rendu net et uniforme, sans voile sur les sols ni traces sur les vitres accessibles.</p>`,
    },
    {
      question: "Comment gérez-vous le stationnement près de la gare ou des zones commerciales ?",
      answer: `<p>On anticipe le point de déchargement et le créneau. Autour de la gare et le week-end vers Bay 1/Bay 2, certains horaires sont plus compliqués ; on privilégie des créneaux plus calmes quand c’est possible et on organise l’intervention pour limiter les allers-retours.</p>`,
    },
    {
      question: "Nettoyez-vous aussi des maisons (Bel-Air, Beauregard) avec plusieurs étages ?",
      answer: `<p>Oui. Sur maison, on structure l’intervention par niveaux et par usages (pièces d’eau/cuisine, chambres, escaliers). L’enjeu est l’homogénéité : sols sans traces, poussière bien extraite, et finitions propres sur les zones de contact et de passage.</p>`,
    },
  ],

  ctaOverride: "",
},

  ]
};

export default city;
