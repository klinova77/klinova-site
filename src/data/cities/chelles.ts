import type { City } from "~/types/geo";

const city: City = {
  name: "Chelles",
  slug: "chelles",
  postalCodes: ["77500"],
  customDescription:
    "À Chelles, ville dynamique de Seine-et-Marne desservie par le RER E, la forte densité résidentielle autour de la gare de Chelles-Gournay et le mélange d'immeubles récents et de pavillons plus anciens rendent l'entretien des copropriétés prioritaire. Les halls d'immeubles du centre-ville, les parkings des résidences récentes de l'Aulnoy et les balcons le long de la Marne ou sur les grands axes comme l'avenue de la Résistance nécessitent un nettoyage régulier et professionnel pour maintenir la qualité de vie et la valeur du patrimoine immobilier.",

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  districts: [
    "Centre-ville / Gare",
    "Chantereine",
    "Aulnoy",
    "Monts-Chalats",
    "Les Coudreaux",
    "Grande Prairie",
    "Bords de Marne",
  ],

  nearbyCities: [
    "torcy",
    "noisy-le-grand",
    "neuilly-sur-marne",
    "gournay-sur-marne",
    "noisiel",
    "champs-sur-marne",
    
  ],

  landmarks: [
    "Mairie de Chelles",
    "Gare de Chelles–Gournay",
    "Gare RER E / Transilien P)",
    "Centre commercial Terre Ciel",
    "Bords de Marne et canal de Chelles",
    "Fort de Chelles",
    "Parc du Souvenir Émile-Fouchard",
    "Zone d'activités de la Trentaine",
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
        "Nettoyage de moquettes à Chelles pour les halls et escaliers de copropriétés, les bureaux, et les logements du centre-ville ou des quartiers résidentiels.",
      whyUsBullets: [
        "Nous intervenons régulièrement pour le nettoyage des moquettes de halls et d'escaliers dans les copropriétés du centre-ville de Chelles.",
        "Utilisation d'injecteur-extracteur professionnel pour un résultat en profondeur, préservant les fibres des moquettes d'immeuble.",
        "Interventions planifiées en accord avec le syndic, aux horaires qui limitent la gêne pour les résidents.",
      ],
      uniqueIntro: `<p>À Chelles, les moquettes des parties communes subissent une forte fréquentation, notamment dans les résidences proches de la gare RER et du pôle commercial Terre Ciel.</p>
<p>Les halls d'entrée, les paliers et les cages d'escaliers accumulent poussières, salissures de chaussures et traces d'humidité, affectant l'image et l'hygiène de l'immeuble.</p>
<p>Un nettoyage professionnel régulier redonne son éclat à la moquette et lui permet de conserver une meilleure durée de vie .</p>`,
      uniqueDeepDive: `<p>Notre intervention pour les moquettes à Chelles commence par un diagnostic des zones les plus passantes, comme les halls des immeubles de l'avenue de la Résistance ou du quartier de la Gare.</p>
<ul>
<li>Préparation et balisage des zones d'intervention pour assurer la sécurité et informer les résidents.</li>
<li>Dépoussiérage mécanique approfondi suivi d'un nettoyage par injection-extraction avec des solutions adaptées au trafic piétonnier local.</li>
<li>Focus sur les zones critiques : marches d'escalier, bas de murs et contours d'ascenseurs, souvent négligés.</li>
<li>Séchage accéléré par ventilation pour permettre une réouverture rapide des circulations, essentielle dans les immeubles denses.</li>
</ul>
<p>Nous conseillons un entretien annuel ou semestriel selon l'exposition et les fréquences de passage.</p>`,
      specificChallenges: [
        "Encrassement lié à la proximité de la RN34 et des grands axes, apportant poussières et particules dans les halls.",
        "Trafic important dans les cages d'escalier des résidences étudiantes ou des immeubles proches du RER.",
        "Variété des types de moquettes posées selon les époques de construction, des années 70 aux résidences récentes.",
      ],
      faqAdditions: [
        {
          question:
            "Les moquettes de Chelles s'encrassent-elles plus vite à cause de la gare ?",
          answer:
            "Oui, la forte fréquentation de la gare de Chelles-Gournay génère un trafic piéton important dans les immeubles adjacents. Les halls et couloirs captent poussières, saletés et humidité, nécessitant un nettoyage plus régulier qu'en zone purement résidentielle.",
        },
        {
          question: "Intervenez-vous dans les petits immeubles du vieux Chelles ?",
          answer:
            "Absolument. Nous intervenons dans tous les types de copropriétés, des petits immeubles du quartier Gambetta aux grandes résidences des Coudreaux. Notre matériel est adapté pour accéder aux parties communes parfois étroites et pour travailler avec les contraintes de stationnement du centre-ville.",
        },
        {
          question: "Quels produits utilisez-vous pour les moquettes d'immeuble ?",
          answer:
            "Nous utilisons des détergents professionnels adaptés aux moquettes de locaux, non moussants et au pH neutre pour préserver les fibres et les coloris. Ils sont efficaces contre les taches courantes (boue, traces de pas) et éliminent les odeurs. Un traitement anti-tâches peut être appliqué en finition sur demande.",
        },
        {
          question: "Comment organisez-vous l'intervention avec les résidents ?",
          answer:
            "Nous coordonnons l'intervention avec le syndic ou le gardien. Les dates et plages horaires sont communiquées à l'avance. Nous travaillons par étages, en balisant clairement les zones. L'objectif est de minimiser la gêne, souvent en travaillant en journée en semaine pour les parties communes.",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "parkings",
      heroDescription:
        "Nettoyage de parkings à Chelles pour les copropriétés et les entreprises.",
      whyUsBullets: [
        "Expérience des parkings souterrains des résidences récentes de l'Aulnoy et des parkings aériens des quartiers pavillonnaires.",
        "Matériel haute pression et balayeuse adaptés aux surfaces de béton, aux rampes et aux marquages au sol.",
        "Organisation des interventions en tenant compte de la circulation et des créneaux de stationnement des occupants.",
      ],
      uniqueIntro: `<p>Les parkings de Chelles, qu'ils soient souterrains sous les nouvelles résidences ou aériens dans les quartiers plus anciens, sont exposés aux poussières de la RN34, aux traces d'huile et aux salissures liées aux intempéries.</p>
<p>Dans les zones denses comme près du centre-ville ou de la gare, l'espace est optimisé, rendant l'entretien technique mais essentiel pour la sécurité et la valorisation des biens.</p>
<p>Un nettoyage professionnel élimine les dépôts gras, ravive les marquages et améliore l'éclairage apparent.</p>`,
      uniqueDeepDive: `<p>Pour les parkings chellois, nous prenons en compte les spécificités d'accès, comme les rampes étroites de certains souterrains du quartier des Arcades, et la gestion des eaux usées vers les réseaux adaptés.</p>
<ul>
<li>Diagnostic complet incluant l'état des sols (béton, peinture), la présence de fuites d'huile et l'accessibilité.</li>
<li>Balayage mécanique initial pour éliminer les graviers et poussières sèches, particulièrement abondants près des axes routiers.</li>
<li>Nettoyage haute pression avec dégraissant biodégradable sur les zones de stationnement, les rampes et les bas de murs.</li>
<li>Évacuation et filtration des eaux de lavage conformément à la réglementation, point crucial pour les parkings en sous-sol.</li>
</ul>
<p>Nous conseillons un nettoyage semestriel ou trimestriel pour les parkings très fréquentés de copropriétés importantes.</p>`,
      specificChallenges: [
        "Poussière noire caractéristique apportée par le trafic de la RN34 et de la Francilienne voisine, se déposant dans les parkings aérés.",
        "Accès parfois restreints dans les parkings souterrains des immeubles des années 80, nécessitant un matériel compact.",
        "Présence de zones humides ou de remontées capillaires dans certains parkings proches des bords de Marne.",
      ],
      faqAdditions: [
        {
          question: "Faut-il vider le parking pour intervenir ?",
          answer:
            "Pas entièrement. Nous organisons un planning par secteurs (niveaux ou rangées) en coordination avec le syndic. Les résidents sont informés des créneaux de stationnement temporairement indisponibles. Pour les petites opérations, une organisation en soirée ou le week-end est possible pour limiter la gêne.",
        },
        {
          question:
            "Nettoyez-vous les parkings d'entreprises sur la zone de la Trentaine ?",
          answer:
            "Oui, nous intervenons pour les petites et moyennes entreprises, les sièges sociaux et les locaux d'activité. Nous adaptons nos horaires en dehors des heures de forte affluence (tôt le matin, soir ou samedi) pour ne pas perturber l'activité commerciale ou industrielle.",
        },
        {
          question: "Comment traitez-vous les taches d'huile tenaces ?",
          answer:
            "Nous appliquons un dégraissant professionnel spécifique aux hydrocarbures, que nous laissons agir. Un brossage mécanique peut être nécessaire sur les taches anciennes avant le rinçage haute pression. Pour les taches très incrustées, un gommage léger de la surface peut être proposé.",
        },
        {
          question: "Proposez-vous le rebalisage au sol ?",
          answer:
            "Le nettoyage ravive souvent les marquages existants. Pour un rebalisage neuf (places numérotées, sens de circulation), nous pouvons vous orienter vers des partenaires spécialisés. Notre prestation de nettoyage prépare idéalement la surface pour une telle intervention.",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons",
      heroDescription:
        "Nettoyage de balcons et terrasses à Chelles pour les particuliers des immeubles du centre-ville et des alentours.",
      whyUsBullets: [
        "Connaissance des nuisances spécifiques à Chelles : pollution routière, humidité de la Marne, dépôts des pigeons près des parcs.",
        "Méthode manuelle et mécanique douce adaptée à tous les revêtements (carrelage, béton, bois composite, dalles).",
        "Respect strict du voisinage et gestion des projections d'eau depuis les étages.",
      ],
      uniqueIntro: `<p>Les balcons chellois, qu'ils donnent sur les rues animées du centre ou sur les espaces verts des Coudreaux, sont des espaces de vie très sollicités.</p>
<p>Ils accumulent rapidement un voile noir de pollution liée aux axes routiers, des traces d'eau et de calcaire, de la terre des jardinières et parfois des dépôts organiques.</p>
<p>Un nettoyage professionnel permet de retrouver un espace extérieur sain et agréable, sans risquer d'endommager le revêtement ou de causer des désagréments aux voisins du dessous.</p>`,
      uniqueDeepDive: `<p>Notre intervention sur les balcons à Chelles est précédée d'une inspection du revêtement et des joints, et de la mise en place de bâches de protection.</p>
<ul>
<li>Enlèvement manuel des gros débris (feuilles, terre) et des éventuels nids ou fientes superficielles.</li>
<li>Application d'un nettoyant adapté au support (dégraissant pour le carrelage, produit spécifique pour le bois) pour décoller les salissures incrustées.</li>
<li>Nettoyage mécanique doux (brosse rotative à basse pression) ou manuel pour préserver l'intégrité du sol et des joints.</li>
<li>Rinçage soigné avec contrôle des écoulements, particulièrement important pour les balcons situés en étage dans les résidences denses.</li>
</ul>
<p>Nous recommandons un entretien annuel, idéalement au printemps, pour profiter pleinement de son balcon la belle saison venue.</p>`,
      specificChallenges: [
        "Pollution grasse et particulaire importante sur les balcons exposés à l'avenue de la Résistance ou au boulevard de la Gare.",
        "Développement de mousses et de lichens sur les balcons orientés au nord ou à l'ombre, fréquents dans les quartiers boisés.",
        "Présence de joints de carrelage fragilisés par les cycles gel/dégel sur les balcons non protégés des immeubles anciens.",
      ],
      faqAdditions: [
        {
          question:
            "Mon balcon donne sur les bords de Marne, est-ce plus humide ?",
          answer:
            "Oui, la proximité de la Marne et du canal peut entraîner une humidité ambiante plus élevée, favorisant les dépôts verdâtres (algues, micro-organismes) et les mousses sur les sols et garde-corps. Notre nettoyage inclut des produits actifs contre ces micro-organismes pour un résultat durable.",
        },
        {
          question:
            "Pouvez-vous nettoyer mon balcon sans mouiller mon voisin du dessous ?",
          answer:
            "C'est une priorité. Nous utilisons un système de rinçage contrôlé avec un débit d'eau minimal et des bâches de protection étanches fixées au garde-corps. Nous communiquons également avec les voisins immédiats si nécessaire pour les prévenir de l'intervention.",
        },
        {
          question: "Qu'en est-il des balcons avec des dalles sur plots ?",
          answer:
            "Ces revêtements techniques, courants dans les constructions récentes, nécessitent une méthode spécifique. Nous nettoyons la surface des dalles et assurons un rinçage dirigé pour évacuer les saletés présentes dans le vide sanitaire, sans forcer sur les plots.",
        },
        {
          question:
            "Faut-il rentrer tous mes meubles et jardinières ?",
          answer:
            "Il est préférable de dégager au maximum la surface à nettoyer. Nous pouvons déplacer les objets légers (pots, petites jardinières). Pour les meubles lourds ou fixes, nous nettoyons autour. Nous vous conseillons sur la préparation optimale avant notre passage.",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "balcons-fientes",
      heroDescription:
        "Nettoyage et désinfection de balcons souillés par les fientes de pigeons à Chelles, particulièrement dans les quartiers arborés ou près du parc du Souvenir.",
      whyUsBullets: [
        "Expérience des situations critiques rencontrées dans les immeubles chellois proches des grands arbres ou des combles infestés.",
        "Protocole strict incluant EPI, désinfection et évacuation sécurisée des déchets contaminés.",
        "Respect des règles sanitaires et de bon voisinage lors d'interventions sensibles en copropriété.",
      ],
      uniqueIntro: `<p>À Chelles, la présence de parcs, de la forêt régionale de Bondy à proximité et de nombreux espaces verts attire une population de pigeons qui peuvent nicher sous les balcons, notamment dans les quartiers comme les Coudreaux ou Monts-Chalât.</p>
<p>Les déjections accumulées sont non seulement inesthétiques et odorantes, mais présentent aussi des risques sanitaires (bactéries, champignons) et peuvent endommager les revêtements (carrelage, bois, métal).</p>
<p>Une intervention professionnelle de nettoyage et de désinfection est nécessaire pour rendre le balcon à un usage serein et sécurisé.</p>`,
      uniqueDeepDive: `<p>Face à une forte contamination sur un balcon chellois, nous mettons en œuvre un protocole rigoureux pour protéger l'intervenant, l'occupant et l'environnement.</p>
<ul>
<li>Mise en place d'une zone de travail sécurisée et port d'équipements de protection individuelle (combinaison, masque, gants, lunettes).</li>
<li>Humidification préalable des dépôts pour éviter la dispersion de poussières potentiellement pathogènes dans l'air.</li>
<li>Décollage manuel et mécanique des fientes incrustées, avec grattage doux si nécessaire pour préserver le support.</li>
<li>Application d'un désinfectant bactéricide et fongicide professionnel sur l'ensemble de la surface traitée, incluant le sol et le garde-corps.</li>
</ul>
<p>Nous vous fournissons ensuite des conseils pour dissuader le retour des pigeons (picots, fils tendus) en concertation avec le syndic si besoin.</p>`,
      specificChallenges: [
        "Accumulation importante sous les balcons protégés par des visières ou des débords de toit, fréquents dans l'architecture des années 70-80 à Chelles.",
        "Risque de corrosion accéléré sur les garde-corps en métal des balcons exposés aux déjections acides.",
        "Difficulté d'accès et de travail sur les balcons en étage élevé nécessitant un matériel adapté et des mesures de sécurité renforcées.",
      ],
      faqAdditions: [
        {
          question:
            "Les fientes de pigeons sont-elles dangereuses à Chelles ?",
          answer:
            "Oui, comme partout, les fientes de pigeons peuvent contenir des agents pathogènes (comme Chlamydia psittaci) et des champignons (Cryptococcus). Leur nettoyage sans précautions expose à des risques d'inhalation. Notre protocole avec désinfection élimine ces risques biologiques.",
        },
        {
          question:
            "Le nettoyage abîmera-t-il mon carrelage ou ma peinture de balcon ?",
          answer:
            "Non, nous utilisons des méthodes et des produits adaptés qui nettoient en profondeur sans être abrasifs. Sur les peintures fragiles, nous privilégions un nettoyage manuel doux. Un test préalable sur une zone discrète est toujours effectué pour s'assurer de la compatibilité.",
        },
        {
          question: "Que faites-vous des déchets contaminés ?",
          answer:
            "Ils sont collectés dans des sacs étanches et résistants, spécifiquement dédiés aux déchets d'activités de soins à risques infectieux (DASRI) ou assimilés, puis évacués selon la réglementation en vigueur vers une filière d'élimination agréée. Ils ne sont pas mélangés aux ordures ménagères classiques.",
        },
        {
          question:
            "Peut-on intervenir si les pigeons nichent encore sur le balcon ?",
          answer:
            "Il est préférable que le nid soit inactif. Nous ne délogeons pas les oiseaux en période de nidification. Nous pouvons intervenir pour nettoyer les déjections accumulées autour, puis planifier un nettoyage complet après le départ des pigeons, éventuellement en lien avec une entreprise de répulsion animale.",
        },
      ],
      ctaOverride: "",
    },
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Nettoyage de canapés, tapis et matelas à domicile à Chelles pour les familles et les professionnels.",
      whyUsBullets: [
        "Intervention à domicile dans tout Chelles, des pavillons de Chantereine aux appartements du centre-ville, avec matériel transportable.",
        "Technique d'injection-extraction profonde éliminant taches, acariens et allergènes, adaptée aux textiles délicats.",
        "Flexibilité horaire pour s'adapter aux emplois du temps des familles et des actifs chellois.",
      ],
      uniqueIntro: `<p>Dans les foyers chellois, des quartiers familiaux comme les Coudreaux aux résidences étudiantes près de la gare, les canapés, tapis et matelas sont au cœur de la vie quotidienne.</p>
<p>Ils subissent taches de nourriture et de boisson, poussières apportées de l'extérieur, poils d'animaux et accumulation de sébum et de peaux mortes, pouvant affecter la qualité de l'air intérieur et le confort.</p>
<p>Un nettoyage professionnel à domicile redonne fraîcheur et hygiène à vos textiles d'ameublement, sans avoir à les déplacer.</p>`,
      uniqueDeepDive: `<p>Notre intervention à votre domicile à Chelles commence par l'identification des types de tissus (velours, lin, coton, synthétique) et des taches présentes.</p>
<ul>
<li>Pré-traitement manuel des taches tenaces (vin, café, encres) avec des produits spécifiques adaptés à leur nature.</li>
<li>Nettoyage par injection-extraction : injection d'une solution nettoyante tiède suivie d'une aspiration immédiate qui extrait saletés et résidus.</li>
<li>Focus sur les zones de fort contact : accoudoirs, dossiers de canapé, centre des tapis de séjour, et tête de lit des matelas.</li>
<li>Ventilation et séchage accéléré de la pièce pour une réutilisation rapide de vos meubles, généralement en quelques heures.</li>
</ul>
<p>Nous vous conseillons un entretien tous les 12 à 18 mois pour maintenir un environnement intérieur sain, notamment en présence d'enfants ou d'animaux.</p>`,
      specificChallenges: [
        "Poussières fines liées au trafic routier pouvant s'infiltrer profondément dans les fibres des tapis des rez-de-chaussée ou des appartements avec balcon rue.",
        "Taches multiples sur les canapés des familles avec jeunes enfants dans les quartiers pavillonnaires très familiaux.",
        "Présence fréquente de tissus délicats (velours, soie) ou de canapés avec médaillon nécessitant une technique douce et précise.",
      ],
      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il les acariens, un problème fréquent à Chelles ?",
          answer:
            "Notre méthode d'injection-extraction à l'eau chaude élimine une très grande majorité des acariens, de leurs déjections (principaux allergènes) et des poussières qui leur servent de nourriture. C'est une solution efficace pour les personnes souffrant d'allergies respiratoires, sans utiliser d'acaricides chimiques agressifs.",
        },
        {
          question: "Pouvez-vous enlever toutes les taches de mon canapé ?",
          answer:
            "Nous pouvons enlever la grande majorité des taches courantes (nourriture, boissons, boue, graisse). Certaines taches anciennes, de colorants ou ayant décoloré le tissu peuvent être atténuées mais pas toujours totalement effacées. Un diagnostic sur place nous permet de vous donner un avis réaliste sur le résultat attendu.",
        },
        {
          question:
            "Faut-il préparer la pièce avant votre venue ?",
          answer:
            "Il est idéal de pouvoir dégager l'accès au meuble et l'espace autour. Pour un canapé, retirer les coussins amovibles. Pour un tapis, le laisser en place si possible. Nous apportons des protections pour le sol. Vous n'avez pas à démonter ou déplacer les meubles lourds.",
        },
        {
          question:
            "Le séchage est-il long dans un appartement chellois ?",
          answer:
            "Grâce à l'aspiration puissante, nos machines extraient la majeure partie de l'humidité. Le séchage complet varie de 4 à 12 heures selon l'épaisseur du textile, la ventilation de la pièce et la température ambiante. Nous vous conseillons d'aérer largement après notre passage pour l'accélérer.",
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;
