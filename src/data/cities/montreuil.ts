// src/data/cities/montreuil.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Montreuil",
  slug: "montreuil",
  postalCodes: ["93100"],

  department: {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis",
  },

  customDescription:
    "Ville dense de Seine-Saint-Denis en mutation constante, Montreuil combine anciens ateliers transformés en lofts, grands ensembles résidentiels et pavillonnaire. La pollution du Périphérique, les nombreux chantiers de rénovation et l'encrassement lié aux flux routiers imposent un entretien régulier des surfaces intérieures et extérieures dans un contexte urbain saturé.",

  hubIntro: `<p>Montreuil présente un tissu urbain contrasté, entre Bas-Montreuil gentrifié et Haut-Montreuil résidentiel, avec des copropriétés de toutes tailles et des contraintes d'accès variées. <strong>Klinova intervient auprès des syndics, gestionnaires et propriétaires</strong> pour assurer l'entretien des parties communes, parkings et surfaces privées, en tenant compte des difficultés de circulation et de stationnement typiques de la commune.</p>
<p>Nos équipes connaissent les spécificités locales : pollution atmosphérique intense près du Périphérique, poussières de chantier liées aux nombreuses rénovations, accès complexes dans les anciennes cours et impasses du Bas-Montreuil. Nous déployons du matériel portable et compact adapté aux contraintes logistiques, avec des protocoles ajustés à chaque support (briques poreuses, verrières industrielles, moquettes de grands ensembles).</p>
<ul>
  <li>Adaptation aux contraintes d'accès : Matériel portable pour les cours intérieures et impasses étroites du Bas-Montreuil, véhicules compacts pour circulation dans les secteurs saturés, planification en dehors des heures de pointe à Croix de Chavaux et Porte de Montreuil.</li>
  <li>Maîtrise des salissures urbaines : Protocoles renforcés pour la pollution noire du Périphérique, gestion des poussières fines de rénovation, traitement adapté aux façades en brique poreuse typiques des immeubles faubouriens et HBM.</li>
  <li>Organisation logistique rigoureuse : Coordination avec les syndics pour stationnement temporaire, information préalable des résidents dans les immeubles sans ascenseur, compte-rendu systématique pour garantir traçabilité et suivi de maintenance.</li>
</ul>`,

  citySpecificChallenges: [
    "Pollution atmosphérique intense du Périphérique et des flux routiers générant dépôts noirs et gris sur façades, vitrines et balcons, particulièrement près de la Porte de Montreuil",
    "Poussières fines de chantier liées aux nombreuses rénovations et surélévations en cours, encrassant rapidement les parties communes et surfaces extérieures",
    "Accès complexes dans les anciennes cours et impasses du Bas-Montreuil avec portails étroits nécessitant du matériel portable et une planification logistique fine",
    "Stationnement très difficile dans les secteurs centraux et Bas-Montreuil imposant coordination avec syndics et interventions en heures creuses pour limiter la gêne",
  ],

  districts: [
    "Bas-Montreuil – République",
    "Bel Air – Grands-Pêchers",
    "Bobillot",
    "Branly – Boissière",
    "Centre-Ville",
    "Étienne-Marcel – Chanzy",
    "Jean-Moulin – Beaumonts",
    "La Noue – Clos-Français",
    "Montreau – Le Morillon",
    "Ramenas – Léo-Lagrange",
    "Ruffins – Théophile Sueur",
    "Signac – Murs-à-Pêches",
    "Solidarité-Carnot",
    "Villiers – Barbusse",
  ],

  nearbyCities: [
  "charenton-le-pont",
  "fontenay-sous-bois",
  "le-raincy",
  "neuilly-sur-marne",
  "saint-mande",
  "vincennes",
],

  landmarks: [
    "Mairie de Montreuil",
    "Métro Robespierre (Ligne 9)",
    "Métro Croix de Chavaux (Ligne 9)",
    "Métro Mairie de Montreuil (Ligne 9)",
    "Place de la Croix de Chavaux",
    "Les Murs à Pêches",
    "Parc des Beaumonts",
    "Parc Jean-Moulin – Les Guilands",
    "Centre commercial La Grande Porte",
  ],

  faq: [
    {
      question:
        "Intervenez-vous rapidement malgré les difficultés de circulation à Montreuil ?",
      answer:
        `<p><strong>Oui, nous planifions chaque intervention en tenant compte des goulets d'étranglement</strong> à Croix de Chavaux, Porte de Montreuil et sur les grands axes. Nos techniciens privilégient les créneaux de circulation fluide (milieu de matinée, début d'après-midi) et utilisent des véhicules compacts adaptés aux rues étroites et sens uniques. Pour les interventions urgentes, nous mobilisons un technicien basé localement pour limiter les temps de trajet.</p>`,
    },
    {
      question:
        "Le déplacement pour établir un devis est-il gratuit dans tous les quartiers de Montreuil ?",
      answer:
        `<p><strong>Oui, le diagnostic sur site reste gratuit</strong> quel que soit le quartier (Bas-Montreuil, Croix de Chavaux, Haut-Montreuil, secteur Beaumonts, La Noue, Ruffins). Le technicien évalue les surfaces, identifie les contraintes spécifiques (accès cour intérieure, pollution atmosphérique, poussières de chantier) et remet un chiffrage détaillé sous 48h adapté à votre copropriété ou votre bien.</p>`,
    },
    {
      question:
        "Comment gérez-vous les accès difficiles dans les anciennes cours et impasses du Bas-Montreuil ?",
      answer:
        `<p><strong>Nous utilisons du matériel portable et compact</strong> spécialement conçu pour les accès restreints : machines d'injection-extraction transportables, tuyaux de 50 mètres pour atteindre les cours intérieures, équipements démontables pour passage par portails étroits. Nous effectuons systématiquement une visite préalable pour repérer les contraintes d'accès (largeur de portail, escaliers, distance véhicule-lieu d'intervention) et valider la faisabilité technique.</p>`,
    },
    {
      question:
        "Vos méthodes sont-elles adaptées aux lofts avec verrières et aux façades en brique ?",
      answer:
        `<p><strong>Oui, nous ajustons systématiquement nos protocoles selon le support</strong>. Les verrières industrielles des anciens ateliers du Bas-Montreuil sont nettoyées avec des perches télescopiques ou moyens d'accès adaptés selon la hauteur. Les façades en brique poreuse des immeubles faubouriens reçoivent des produits neutres et une pression modérée pour éviter toute infiltration ou apparition de salpêtre. Ces adaptations techniques sont essentielles dans le parc immobilier diversifié montreuillois.</p>`,
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
        "Le nettoyage professionnel des moquettes à Montreuil redonne aux halls et cages d'escalier des copropriétés une propreté visible, éliminant la pollution noire du Périphérique et les poussières de chantier qui s'incrustent quotidiennement.",

      whyUsBullets: [
        "Connaissance du tissu urbain montreuillois : Intervention régulière dans les copropriétés du Bas-Montreuil, des grands ensembles du Haut-Montreuil et des secteurs Croix de Chavaux et Robespierre, avec maîtrise des salissures urbaines.",
        "Matériel portable pour accès restreints : Équipements compacts et transportables adaptés aux cours intérieures, impasses étroites et immeubles sans ascenseur typiques des quartiers faubouriens montreuillois.",
        "Organisation adaptée à la saturation urbaine : Planification en dehors des heures de pointe, déchargement rapide en double file si nécessaire, coordination avec gardiens pour accès et stationnement temporaire.",
      ],

      uniqueIntro: `<p>Les copropriétés montreuilloise subissent un encrassement rapide de leurs moquettes, phénomène que beaucoup de résidents finissent par considérer comme normal. La pollution du Périphérique dépose une poussière noire grasse dans les halls des immeubles proches de la Porte de Montreuil, tandis que les nombreux chantiers de rénovation génèrent des particules fines de plâtre et de ciment qui pénètrent les fibres. Les flux piétons intenses autour de Croix de Chavaux et des stations de métro ligne 9 transportent ces salissures dans les parties communes.</p>
<p class="mt-4">Les résidents du Bas-Montreuil ou des grands ensembles du Haut-Montreuil constatent cette dégradation progressive : les seuils d'entrée noircissent en quelques semaines, les zones devant les ascenseurs prennent une teinte grisâtre uniforme, les paliers gardent des traces de pas visibles même après le passage du balai. Les conseils syndicaux reçoivent des remarques, les gardiens sont démunis face à un encrassement que le nettoyage quotidien ne parvient pas à contenir. Cette impression de saleté permanente nuit à l'image de l'immeuble et au confort des occupants.</p>
<p class="mt-4">Un nettoyage professionnel change radicalement la situation. Il extrait les particules urbaines incrustées en profondeur, ravive les couleurs d'origine et élimine les traînées grises qui marquent les zones de passage. Les résidents redécouvrent des parties communes accueillantes, les copropriétés retrouvent un aspect entretenu malgré l'environnement urbain exigeant. L'intervention devient un rendez-vous régulier, indispensable pour compenser l'encrassement rapide typique de Montreuil.</p>`,

      uniqueDeepDive: `<h3>Diagnostic adapté à l'environnement urbain dense</h3>
<p>Le technicien examine l'état de la moquette (fibres synthétiques robustes des grands ensembles ou bouclées plus délicates des immeubles faubouriens), identifie les salissures typiques (poussière noire grasse, particules de chantier incrustées, traces de boue séchée) et repère les zones critiques (seuils donnant sur rue, paliers du rez-de-chaussée exposés aux flux). Il note les contraintes d'accès : immeubles HBM sans ascenseur nécessitant le portage du matériel, cours intérieures du Bas-Montreuil avec portails étroits, stationnement impossible imposant un déchargement rapide. Cette analyse détermine la puissance d'extraction et le choix du détergent dégraissant.</p>

<h3>Injection-extraction renforcée pour salissures urbaines</h3>
<p class="mt-4">La machine pulvérise un mélange d'eau chaude et de détergent dégraissant au cœur des fibres, délogeant les particules de pollution et les résidus de chantier qui se sont agrégés avec l'humidité. L'aspiration immédiate retire l'eau sale chargée de particules noires avant saturation du support. Sur les zones très encrassées (entrées des immeubles proches du Périphérique, halls des résidences de Croix de Chavaux exposées aux flux de marché), plusieurs passages successifs extraient les salissures les plus tenaces. Le détergent est sélectionné pour sa capacité à dissoudre les graisses atmosphériques typiques des environnements urbains denses.</p>

<h3>Gestion logistique et conseils de fréquence</h3>
<p class="mt-4">Le séchage complet intervient sous 6 à 10 heures selon la ventilation. Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés montreuilloise exposées à la pollution du Périphérique (Porte de Montreuil, secteur République), un nettoyage annuel maintient la propreté sans attendre l'encrassement critique. Les immeubles situés près de chantiers actifs ou de grands axes nécessitent parfois une fréquence semestrielle sur les seuils d'entrée très sollicités.</p>`,

      specificChallenges: [
        "Pollution noire du Périphérique : Les immeubles proches de la Porte de Montreuil et des grands axes accumulent une poussière grasse chargée d'hydrocarbures qui noircit les seuils et nécessite un détergent dégraissant renforcé.",
        "Poussières fines de chantier : Les nombreuses rénovations et surélévations en cours à Montreuil génèrent des particules de plâtre et ciment qui pénètrent profondément dans les fibres et exigent plusieurs passes d'extraction.",
        "Accès complexes dans le Bas-Montreuil : Les anciennes cours d'ateliers transformées en copropriétés présentent des portails étroits et des distances importantes entre le véhicule et les parties communes, nécessitant du matériel portable.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles proches du Périphérique noircissent-elles plus vite qu'ailleurs ?",
          answer:
            `<p>Oui, la pollution atmosphérique de la Porte de Montreuil et des grands axes dépose quotidiennement une poussière noire grasse qui s'incruste rapidement dans les fibres. Les halls exposés accumulent particules fines et résidus de combustion que l'aspirateur domestique ne peut éliminer. Nous recommandons un nettoyage annuel, voire semestriel pour les seuils d'entrée très sollicités, afin d'éviter l'encrassement irréversible et de maintenir un aspect accueillant malgré l'environnement urbain exigeant.</p>`,
        },
        {
          question:
            "Intervenez-vous dans les immeubles HBM sans ascenseur et les anciennes cours du Bas-Montreuil ?",
          answer:
            `<p>Absolument. Nous utilisons du matériel portable spécialement conçu pour ces configurations : machines d'injection-extraction transportables, tuyaux de 50 mètres pour atteindre les étages ou les cours intérieures. Nos techniciens ont l'habitude de monter le matériel dans les immeubles faubouriens sans ascenseur et de franchir les portails étroits des anciennes impasses montreuilloise. La visite préalable permet de valider la faisabilité technique.</p>`,
        },
        {
          question:
            "Les poussières de chantier peuvent-elles abîmer définitivement les moquettes ?",
          answer:
            `<p>Les particules de plâtre et de ciment sont abrasives et peuvent user prématurément les fibres si elles ne sont pas extraites régulièrement. Elles s'incrustent profondément et forment une couche dure qui ternit l'aspect général. Un nettoyage professionnel après des travaux importants dans l'immeuble ou à proximité extrait ces particules avant qu'elles ne causent des dégâts irréversibles. C'est particulièrement important à Montreuil où les chantiers de rénovation sont nombreux.</p>`,
        },
        {
          question:
            "Comment organisez-vous le stationnement dans les secteurs saturés comme Croix de Chavaux ?",
          answer:
            `<p>Nous planifions chaque intervention en dehors des heures de pointe et des jours de marché à Croix de Chavaux. Nos techniciens repèrent les zones de livraison ou de dépose minute et coordonnent avec le gardien ou le syndic pour obtenir une autorisation temporaire si nécessaire. Le déchargement s'effectue rapidement en double file si aucune place n'est disponible, puis le véhicule est déplacé. Cette organisation logistique fait partie de notre routine dans les secteurs denses de Montreuil.</p>`,
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
        "Le nettoyage professionnel des parkings montreuillois élimine la pollution urbaine tenace et les taches d'hydrocarbures, tout en gérant les contraintes techniques des sous-sols anciens et des accès restreints typiques du tissu urbain dense.",

      whyUsBullets: [
        "Maîtrise des parkings montreuillois : Intervention régulière dans les sous-sols des copropriétés du Bas-Montreuil, des grands ensembles et des immeubles faubouriens, avec adaptation aux accès restreints et configurations anciennes.",
        "Dégraissant renforcé pour pollution urbaine : Produits professionnels spécifiques pour graisses atmosphériques et hydrocarbures, eau chaude émulsionnant les dépôts tenaces, haute pression modulable selon l'état du béton.",
        "Équipement compact et portable : Autolaveuse de faible gabarit pour rampes étroites, matériel transportable pour accès par cours intérieures, tuyaux longue distance pour parkings éloignés des points d'accès véhicule.",
      ],

      uniqueIntro: `<p>Les parkings souterrains de Montreuil, qu'ils desservent les grands ensembles du Haut-Montreuil ou les copropriétés du Bas-Montreuil, présentent un encrassement spécifique lié à l'environnement urbain dense. La proximité du Périphérique et les flux routiers intenses génèrent une poussière noire grasse qui se dépose sur les sols en béton, noircit les marquages au sol et forme une pellicule glissante sur les rampes d'accès. Les taches d'huile se multiplient, conséquence du parc automobile vieillissant et de l'usure mécanique liée aux embouteillages quotidiens.</p>
<p class="mt-4">Les copropriétaires constatent cette dégradation progressive : angles et pieds de poteaux noircis, marquages effacés rendant le stationnement confus, odeur de renfermé dans les parkings mal ventilés des immeubles HBM. Les conseils syndicaux reçoivent des demandes d'intervention, mais la coordination semble complexe dans un contexte où le stationnement est déjà très contraint. Comment organiser un décrassage complet sans priver les résidents de leur place ? Quel matériel utiliser dans les parkings anciens aux rampes étroites et hauteurs limitées ?</p>
<p class="mt-4">Un décrassage technique bien structuré résout ces problématiques. Il restaure la propreté des sols, améliore la visibilité des marquages et réduit les risques de glissade. L'intervention devient un acte de maintenance indispensable pour préserver la sécurité et valoriser le patrimoine immobilier dans un environnement urbain particulièrement exigeant.</p>`,

      uniqueDeepDive: `<h3>Évaluation technique et identification des contraintes</h3>
<p>Le technicien visite le parking pour identifier le type de revêtement (béton brut souvent poreux dans les parkings anciens, peinture de sol, résine dans les parkings rénovés), vérifier l'état des siphons et caniveaux, mesurer les contraintes d'accès (rampes étroites, hauteur sous plafond réduite, portails de sécurité) et repérer les zones critiques. Il évalue l'intensité de l'encrassement : poussière noire grasse typique de la pollution du Périphérique, taches d'huile concentrées sur les emplacements de véhicules anciens, dépôts de boue dans les angles. Cette analyse détermine le choix du matériel (autolaveuse compacte pour espaces restreints, haute pression modulable) et la puissance du dégraissant nécessaire.</p>

<h3>Décrassage par autolaveuse et traitement des hydrocarbures</h3>
<p class="mt-4">Le balayage mécanique élimine d'abord les débris, gravillons et poussières sèches accumulées. L'autolaveuse brosse ensuite le sol avec un mélange d'eau chaude (60-70°C) et de dégraissant professionnel spécialement formulé pour les graisses atmosphériques et les hydrocarbures, puis aspire immédiatement les eaux sales. La température élevée de l'eau émulsionne les graisses tenaces typiques de l'environnement urbain montreuillois. Sur les taches d'huile anciennes imprégnées dans le béton poreux, un détergent spécifique est appliqué, laissé en contact plusieurs minutes, puis rincé à la haute pression en mode contrôlé. Les rampes, pieds de poteaux et angles sont nettoyés manuellement avec des brosses adaptées.</p>

<h3>Gestion des évacuations et recommandations</h3>
<p class="mt-4">L'eau de lavage est collectée en continu pour éviter toute saturation des siphons, souvent sous-dimensionnés dans les parkings anciens. Si leur capacité est limitée, nous écopons manuellement les excédents et réduisons le débit de rinçage. Les zones sont traitées par rotation pour maintenir l'accès permanent : moitié A le matin, moitié B l'après-midi. Pour les parkings montreuillois exposés à la pollution intense du Périphérique et aux flux routiers (Porte de Montreuil, secteur République), un décrassage annuel maintient la propreté. Les parkings des quartiers résidentiels moins exposés peuvent espacer les interventions tous les 18 mois.</p>`,

      specificChallenges: [
        "Pollution grasse du Périphérique : Les parkings proches de la Porte de Montreuil accumulent une poussière noire chargée d'hydrocarbures et de particules de freinage nécessitant un dégraissant renforcé et une température d'eau élevée.",
        "Taches d'huile nombreuses dans le béton poreux : Les parkings anciens des immeubles HBM et faubouriens présentent des sols en béton non traité qui absorbent profondément les hydrocarbures, exigeant un traitement localisé intensif.",
        "Accès complexes dans le Bas-Montreuil : Les parkings des anciennes cours d'ateliers transformées présentent des portails étroits, des distances importantes entre rue et sous-sol, nécessitant du matériel portable et des tuyaux de 50 mètres.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings proches du Périphérique noircissent-ils aussi rapidement à Montreuil ?",
          answer:
            `<p>La proximité de la Porte de Montreuil et des grands axes expose les parkings à une pollution atmosphérique très intense. Les véhicules transportent quotidiennement particules fines, résidus de freinage, suies de combustion et hydrocarbures qui se déposent sur les sols en béton. Cette poussière noire grasse forme une couche tenace qui ternit les marquages, rend les rampes glissantes et génère une odeur caractéristique. Un décrassage annuel avec dégraissant professionnel et eau chaude est indispensable dans cet environnement urbain exigeant.</p>`,
        },
        {
          question:
            "Votre matériel peut-il accéder aux parkings des anciennes cours du Bas-Montreuil ?",
          answer:
            `<p>Oui, nous utilisons du matériel portable et compact spécialement conçu pour les accès restreints : autolaveuse démontable transportable par sections, tuyaux de 50 mètres pour atteindre les parkings éloignés des points d'accès véhicule, monobrosse compacte pour les rampes très étroites. Nous effectuons systématiquement une visite préalable pour mesurer les contraintes (largeur de portail, distance, dénivelé) et valider la faisabilité technique. Si l'accès autolaveuse est impossible, nous intervenons manuellement avec monobrosse et aspirateur eau-poussière.</p>`,
        },
        {
          question:
            "Les taches d'huile anciennes dans le béton poreux peuvent-elles être complètement éliminées ?",
          answer:
            `<p>Les taches récentes partent facilement avec un dégraissant professionnel et de l'eau chaude. Les taches anciennes, imprégnées profondément dans le béton poreux typique des parkings d'immeubles HBM et faubouriens, s'atténuent fortement mais peuvent laisser une trace résiduelle grisâtre. Nous appliquons plusieurs passes avec un détergent spécifique, un temps de contact prolongé et de la haute pression contrôlée pour obtenir le meilleur résultat possible sans altérer le support. L'amélioration reste très visible même si l'élimination totale n'est pas garantie.</p>`,
        },
        {
          question:
            "Comment organisez-vous l'intervention dans les secteurs à stationnement très difficile ?",
          answer:
            `<p>Nous planifions chaque intervention en dehors des heures de pointe et coordonnons avec le syndic pour obtenir une autorisation de stationnement temporaire en zone de livraison ou sur emplacement réservé. Le déchargement s'effectue rapidement, puis le véhicule est déplacé si nécessaire. Pour les parkings traités par rotation (moitié A puis moitié B), les copropriétaires stationnent temporairement dans la zone non traitée. Cette organisation logistique fait partie de notre routine dans les secteurs denses de Montreuil où le stationnement est structurellement difficile.</p>`,
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
        "Le nettoyage professionnel d'un balcon à Montreuil redonne un espace extérieur utilisable et propre, libéré de la pollution noire du Périphérique et des poussières de chantier qui s'accumulent quotidiennement.",

      whyUsBullets: [
        "Connaissance de l'environnement urbain montreuillois : Intervention régulière sur balcons des copropriétés du Bas-Montreuil, des grands ensembles et des secteurs Croix de Chavaux et Robespierre, avec maîtrise des pollutions urbaines.",
        "Produits adaptés aux salissures urbaines : Dégraissants puissants pour pollution du Périphérique, détergents spécifiques pour poussières de chantier, pression réduite pour façades en brique poreuse typiques des immeubles faubouriens.",
        "Organisation discrète : Gestion rigoureuse de l'eau de rinçage pour protéger façades et voisins, intervention en journée, stationnement géré en coordination avec le résident dans les secteurs saturés.",
      ],

      uniqueIntro: `<p>Les habitants de Montreuil finissent par renoncer à utiliser leur balcon, découragés par la saleté qui revient sans cesse. Dans le Bas-Montreuil proche du Périphérique, les balcons accumulent une poussière noire grasse qui colle aux dalles et noircit les joints en quelques semaines. Les nombreux chantiers de rénovation et surélévations génèrent des particules fines de plâtre et de ciment qui se déposent sur les garde-corps et forment une couche blanchâtre tenace. Les flux routiers de Croix de Chavaux et de la Porte de Montreuil transportent des pollutants qui ternissent les surfaces.</p>
<p class="mt-4">Après une saison, le balcon devient un espace négligé : les joints sont gris foncé, le sol carrelé est terne, le garde-corps métallique est couvert de traces. On hésite à y installer une chaise ou à y prendre un café le matin. Les tentatives de nettoyage avec un balai-brosse et un seau donnent des résultats décevants : la poussière grasse résiste, l'eau sale coule sur la façade, le sol reste encrassé. Cette impression de saleté permanente décourage les occupants qui finissent par condamner mentalement cet espace pourtant précieux.</p>
<p class="mt-4">Un nettoyage professionnel change complètement la donne. Il élimine les dépôts urbains incrustés, restitue l'aspect d'origine des surfaces et rend le balcon de nouveau accueillant. Les habitants redécouvrent le plaisir d'utiliser cet espace extérieur, d'y prendre l'air ou d'y installer quelques plantes. Cette remise en état valorise aussi le logement en cas de mise en location ou de vente dans un marché immobilier montreuillois dynamique.</p>`,

      uniqueDeepDive: `<h3>Préparation et protection des accès</h3>
<p>Le technicien commence par protéger la porte-fenêtre, les menuiseries et les murs intérieurs avec des bâches étanches fixées au ruban adhésif. Les meubles de balcon, plantes en pot et objets sont déplacés ou protégés individuellement. Les gros débris (poussières de chantier accumulées, feuilles mortes, terre séchée) sont ramassés manuellement et conditionnés dans des sacs. Cette phase évite que les salissures ne se dispersent lors du lavage et garantit la protection de l'intérieur du logement, particulièrement important dans les lofts avec grandes baies vitrées du Bas-Montreuil.</p>

<h3>Nettoyage adapté au type de pollution</h3>
<p class="mt-4">Le technicien applique un produit nettoyant selon le type d'encrassement : dégraissant alcalin pour la pollution noire du Périphérique, détergent spécifique pour les poussières de plâtre et ciment des chantiers. Les joints sont brossés manuellement pour déloger les particules incrustées. Les surfaces planes sont ensuite rincées à pression contrôlée, jamais excessive, pour préserver l'étanchéité des joints. Les balcons des immeubles en brique nécessitent une attention particulière : pression réduite pour éviter toute infiltration dans ce matériau poreux. Le garde-corps, les vitreries et les murs mitoyens sont lavés à l'éponge ou au chiffon microfibre.</p>

<h3>Gestion de l'eau et conseils d'entretien</h3>
<p class="mt-4">L'eau de rinçage est dirigée vers l'évacuation du balcon à l'aide d'une raclette et de chiffons absorbants, évitant toute coulure sur la façade ou chez les voisins inférieurs. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition et la ventilation. Le technicien conseille un balayage hebdomadaire pour éliminer la pollution avant qu'elle ne s'incruste, un rinçage mensuel léger en période de chantiers actifs à proximité, et un nettoyage professionnel annuel pour les balcons exposés aux grands axes. Cette fréquence permet de compenser l'encrassement rapide typique de l'environnement urbain montreuillois.</p>`,

      specificChallenges: [
        "Pollution noire du Périphérique : Les balcons proches de la Porte de Montreuil et des grands axes accumulent une poussière grasse chargée d'hydrocarbures qui colle aux surfaces et nécessite un dégraissant puissant.",
        "Poussières de chantier omniprésentes : Les nombreuses rénovations et surélévations à Montreuil génèrent des particules fines de plâtre et ciment qui forment une couche blanchâtre tenace sur garde-corps et dalles.",
        "Façades en brique poreuse : Les immeubles faubouriens du Bas-Montreuil présentent des murs en brique sensibles à l'eau et à la pression excessive, imposant une méthode douce pour éviter infiltrations et salpêtre.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'endommager les murs en brique de mon immeuble ?",
          answer:
            `<p>Non, si la pression est correctement ajustée. Pour les balcons des immeubles faubouriens en brique, nous utilisons une pression très modérée (60-80 bars maximum) et un jet large pour éviter toute infiltration dans ce matériau poreux. Les joints de brique sont brossés manuellement plutôt que rincés agressivement. Nous effectuons toujours un test sur une zone discrète avant de traiter l'ensemble, protocole indispensable pour les façades typiques du Bas-Montreuil et des quartiers anciens.</p>`,
        },
        {
          question:
            "Mon balcon près de la Porte de Montreuil noircit en quelques semaines, comment limiter l'encrassement ?",
          answer:
            `<p>La pollution atmosphérique du Périphérique et des flux routiers dépose quotidiennement des particules grasses difficiles à éviter. Nous recommandons un balayage hebdomadaire pour éliminer la poussière avant qu'elle ne s'incruste et ne se transforme en couche grasse collante, et un rinçage mensuel léger avec un jet d'eau. Un nettoyage professionnel annuel avec dégraissant permet de traiter les salissures tenaces et de préserver l'aspect des surfaces. C'est la réalité de vivre dans un environnement urbain dense comme Montreuil.</p>`,
        },
        {
          question:
            "Les poussières de chantier des rénovations voisines peuvent-elles abîmer mon balcon ?",
          answer:
            `<p>Les particules de plâtre et de ciment sont abrasives et peuvent rayer les surfaces fragiles si elles sont frottées à sec. Elles forment aussi une couche blanchâtre qui s'incruste dans les joints et les aspérités. Un nettoyage professionnel après des travaux importants dans l'immeuble ou à proximité élimine ces particules avant qu'elles ne causent des dégâts. C'est particulièrement important à Montreuil où les chantiers de rénovation et surélévations sont nombreux et génèrent une pollution de proximité intense.</p>`,
        },
        {
          question:
            "Combien de temps avant de pouvoir réinstaller mes meubles et profiter du balcon ?",
          answer:
            `<p>Le séchage complet intervient sous 2 à 4 heures selon l'exposition au soleil et la ventilation. Vous pouvez marcher sur le balcon dès que les surfaces sont sèches au toucher, généralement en milieu d'après-midi si l'intervention a lieu le matin. Pour réinstaller mobilier et plantes, attendez le séchage total des joints et des angles, soit environ une demi-journée. Les balcons exposés sud sèchent plus rapidement que ceux orientés nord ou donnant sur des cours intérieures du Bas-Montreuil.</p>`,
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
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par des fientes de pigeons à Montreuil éliminent les risques sanitaires selon un protocole strict, restituant un espace extérieur sain dans un environnement urbain dense.",

      whyUsBullets: [
        "Connaissance des structures montreuilloise à risque : Intervention régulière sur balcons des grands ensembles, immeubles faubouriens et lofts industriels du Bas-Montreuil où les structures offrent de nombreux points de nidification.",
        "Protocole sanitaire homologué et rigoureux : EPI complets, humidification préalable obligatoire, désinfection virucide/bactéricide avec temps de contact respecté, méthodes adaptées aux supports urbains (métal, brique, béton).",
        "Évacuation sécurisée et conseil préventif : Conditionnement étanche des déchets contaminés, évacuation conforme aux normes sans transit par parties communes, proposition de solutions anti-pigeons adaptées à l'environnement urbain dense.",
      ],

      uniqueIntro: `<p>Les balcons montreuillois, particulièrement ceux des étages élevés des grands ensembles du Haut-Montreuil ou des immeubles faubouriens du Bas-Montreuil, subissent régulièrement la colonisation par les pigeons urbains. Les anciennes structures industrielles transformées en lofts offrent de nombreuses avancées et corniches propices à la nidification. Les fientes s'accumulent rapidement en couches épaisses sur les sols, les garde-corps métalliques et les murs, formant une croûte durcie qui dégage une odeur insupportable et corrode les supports.</p>
<p class="mt-4">Les occupants découvrent souvent l'ampleur du problème après une absence ou constatent une dégradation progressive qu'ils n'osent pas traiter eux-mêmes. Les fientes sèches se transforment en poussière volatile qui pénètre l'intérieur par les fenêtres, contaminant les espaces de vie. Les locataires exigent une intervention, les propriétaires redoutent les risques sanitaires (cryptococcose, histoplasmose, salmonellose), certains développent des symptômes respiratoires sans comprendre l'origine. Les garde-corps métalliques des balcons s'oxydent rapidement sous l'effet de l'acidité des fientes.</p>
<p class="mt-4">Les tentatives de nettoyage domestique aggravent dangereusement la situation : balayer à sec disperse les poussières pathogènes dans l'air et l'habitation, rincer sans équipement de protection expose aux projections contaminées, négliger la désinfection laisse des agents infectieux actifs sur les surfaces. Ce type de contamination nécessite un protocole professionnel rigoureux : équipements de protection individuelle complets, méthode d'humidification préalable obligatoire, désinfection homologuée et évacuation sécurisée des déchets. Seule cette approche technique garantit la récupération d'un balcon propre, désinfecté et utilisable en toute sécurité.</p>`,

      uniqueDeepDive: `<h3>Équipements de protection et confinement rigoureux</h3>
<p>Le technicien revêt une combinaison jetable intégrale, des gants épais résistants, un masque respiratoire FFP2 filtrant les particules fines et des lunettes de protection étanches. Ces équipements de protection individuelle sont obligatoires pour éviter tout contact avec les agents pathogènes présents dans les fientes (salmonelles, cryptocoques, histoplasma, chlamydia psittaci). Des bâches étanches protègent la porte-fenêtre, les baies vitrées et les murs intérieurs, créant un confinement strict qui empêche la dispersion des poussières contaminées vers l'intérieur du logement. Cette protection est particulièrement critique dans les lofts du Bas-Montreuil avec grandes verrières. Les fientes sèches sont ensuite humidifiées abondamment au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules infectieuses lors du ramassage.</p>

<h3>Ramassage méthodique et nettoyage des supports urbains</h3>
<p class="mt-4">Les fientes, nids, plumes et débris organiques sont ramassés manuellement zone par zone à l'aide de pelles, racloirs et brosses rigides, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour déchets contaminés. Cette phase s'effectue méthodiquement pour éviter toute dispersion. Les surfaces sont ensuite nettoyées avec un détergent dégraissant pour éliminer la couche organique résiduelle : formule standard pour les carrelages et bétons, produit adapté pour les garde-corps métalliques oxydés typiques des balcons montreuillois, méthode douce pour les murs en brique des immeubles faubouriens. Le brossage manuel élimine les résidus avant rinçage à pression contrôlée selon le support.</p>

<h3>Désinfection virucide et conseils préventifs</h3>
<p class="mt-4">Un produit désinfectant virucide et bactéricide homologué est appliqué sur l'ensemble du balcon : sol, garde-corps, angles, murs, évacuations. Le temps de contact réglementaire (10 à 15 minutes selon le produit) est strictement respecté pour garantir la neutralisation des agents pathogènes. Après rinçage final, le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité, sans transit par les parties communes. Le technicien conseille d'inspecter régulièrement les corniches, avancées de toit et structures industrielles, et peut proposer la pose de solutions anti-pigeons (pics, filets) adaptées à l'architecture urbaine montreuilloise pour prévenir toute recolonisation.</p>`,

      specificChallenges: [
        "Structures industrielles propices à la nidification : Les anciennes usines et ateliers transformés en lofts du Bas-Montreuil offrent charpentes métalliques, avancées de toit et corniches qui attirent les pigeons et accélèrent la contamination.",
        "Corrosion rapide des garde-corps métalliques : L'acidité des fientes attaque rapidement les garde-corps métalliques typiques des balcons montreuillois, nécessitant une intervention rapide pour stopper l'oxydation et préserver les structures.",
        "Confinement complexe dans les lofts avec verrières : Les grandes baies vitrées et verrières zénithales des anciens ateliers multiplient les surfaces à protéger pendant l'intervention, exigeant un confinement méticuleux pour éviter toute contamination intérieure.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons sur mon balcon représentent-elles un danger sanitaire réel ?",
          answer:
            `<p>Oui, les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer infections respiratoires graves, mycoses pulmonaires, troubles gastro-intestinaux ou psittacose. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées dans les espaces confinés des appartements montreuillois. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires.</p>`,
        },
        {
          question:
            "Le nettoyage peut-il endommager les structures métalliques de mon balcon ou les murs en brique ?",
          answer:
            `<p>Non, si le protocole est correctement adapté. Nous ajustons la pression de rinçage selon le support : méthode contrôlée pour les garde-corps métalliques déjà oxydés par l'acidité des fientes, pression réduite (60-80 bars) pour les murs en brique poreuse des immeubles faubouriens. Les produits désinfectants sont sélectionnés pour leur compatibilité avec les supports urbains (pH neutre, pas d'agents chlorés agressifs sur métal). Cette précaution technique préserve les structures typiques du parc immobilier montreuillois.</p>`,
        },
        {
          question:
            "Les fientes ont-elles déjà causé des dégâts irréversibles sur mon balcon ?",
          answer:
            `<p>Cela dépend de l'ancienneté de la contamination. Sur les garde-corps métalliques, l'acidité des fientes provoque une oxydation rapide qui fragilise la structure et nécessite parfois un traitement antirouille après nettoyage. Sur les murs en brique, elle érode la surface et déchausse les joints. Sur les carrelages, elle crée des taches brunâtres qui pénètrent profondément. Une intervention rapide limite les dégâts structurels. Les contaminations anciennes (plusieurs mois) peuvent laisser des marques résiduelles et nécessiter des réparations complémentaires, mais le nettoyage professionnel stoppe la dégradation active.</p>`,
        },
        {
          question:
            "Comment éviter que les pigeons ne reviennent coloniser mon balcon ?",
          answer:
            `<p>Nous proposons la pose de solutions anti-pigeons adaptées à l'environnement urbain montreuillois : pics discrets sur les garde-corps et corniches, filets transparents pour les loggias des grands ensembles, répulsifs visuels pour les structures métalliques des lofts. Ces dispositifs s'intègrent à l'architecture urbaine tout en empêchant durablement la nidification. L'inspection régulière des points d'accès (charpentes, avancées de toit, structures industrielles) et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive et de nouveaux dégâts sur les supports.</p>`,
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
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Montreuil élimine acariens, allergènes et pollution urbaine incrustée, restaurant l'hygiène des intérieurs dans un environnement urbain particulièrement exposé.",

      whyUsBullets: [
        "Connaissance de l'environnement urbain montreuillois : Intervention régulière dans les appartements du Bas-Montreuil, des grands ensembles et des lofts, avec maîtrise des contaminations liées à la pollution du Périphérique et aux poussières de chantier.",
        "Protocole anti-pollution et anti-acariens renforcé : Injection-extraction à eau chaude (65-70°C), détergents adaptés aux particules de pollution urbaine, extraction maximale pour éliminer poussières fines et allergènes, produits hypoallergéniques sans danger.",
        "Organisation souple à domicile : Intervention en journée ou week-end selon vos disponibilités, durée maîtrisée (1h30 à 3h), stationnement géré dans les secteurs saturés, matériel portable pour accès aux cours intérieures.",
      ],

      uniqueIntro: `<p>Dans les appartements et lofts montreuillois, les textiles d'ameublement accumulent silencieusement des salissures invisibles que les occupants ne perçoivent pas immédiatement. La pollution du Périphérique pénètre par les fenêtres et se loge dans les fibres des canapés et tapis, formant un dépôt noir microscopique. Les poussières fines des chantiers de rénovation omniprésents à Montreuil s'infiltrent partout, transportant particules de plâtre et de ciment. Après quelques années sans nettoyage professionnel, les textiles abritent des populations d'acariens qui se nourrissent de squames et déposent leurs déjections allergisantes.</p>
<p class="mt-4">Les familles du Bas-Montreuil ou des grands ensembles constatent des symptômes sans en identifier la cause : rhinites persistantes aggravées par la pollution urbaine, éternuements répétés au réveil, irritations cutanées inexpliquées, asthme qui s'intensifie. Les enfants développent des réactions allergiques, les personnes sensibles respirent difficilement la nuit. Les taches visibles s'ajoutent au problème sanitaire : traces de nourriture sur le canapé, auréoles de boissons renversées, poussière noire incrustée dans le tapis près des fenêtres donnant sur les axes routiers. Les tentatives de nettoyage domestique restent superficielles et inefficaces face à cet encrassement urbain profond.</p>
<p class="mt-4">Un nettoyage professionnel à domicile change radicalement la situation sanitaire. L'injection-extraction à eau chaude tue les acariens, extrait leurs déjections et les particules de pollution urbaine accumulées. Les taches disparaissent, les odeurs s'estompent, les fibres retrouvent leur souplesse. L'intervention devient un acte de prévention sanitaire indispensable, particulièrement important dans l'environnement urbain dense de Montreuil où la qualité de l'air intérieur est directement menacée par les pollutions extérieures.</p>`,

      uniqueDeepDive: `<h3>Diagnostic textile et identification des contaminations urbaines</h3>
<p>Le technicien examine chaque élément à traiter : type de tissu (coton, lin, velours, synthétique), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles (boissons, nourriture, traces d'animaux) et interroge les occupants sur les problèmes rencontrés : allergies respiratoires, proximité des grands axes routiers, exposition aux poussières de chantiers. Cette analyse permet de sélectionner le produit adapté : détergent renforcé pour extraire les particules de pollution urbaine, température ajustée (65-70°C) pour tuer les acariens, puissance d'aspiration maximale pour éliminer les poussières fines de plâtre et ciment incrustées dans les fibres profondes.</p>

<h3>Pré-traitement ciblé et injection-extraction renforcée</h3>
<p class="mt-4">Les taches tenaces reçoivent un pré-traitement spécifique : détachant enzymatique pour les matières organiques, dégraissant pour les résidus alimentaires et les dépôts de pollution grasse, neutralisant d'odeurs pour les zones imprégnées. Après un temps de pose, la machine d'injection-extraction pulvérise un mélange d'eau chaude (65-70°C) et de détergent hypoallergénique au cœur des fibres. Cette température élevée tue les acariens adultes, larves et œufs. L'aspiration immédiate et puissante retire l'eau sale chargée de particules de pollution, d'acariens morts, d'allergènes et de poussières de chantier. Le technicien effectue plusieurs passages sur les zones très sollicitées et sur les textiles proches des fenêtres donnant sur les axes routiers, où la contamination par la pollution urbaine est maximale.</p>

<h3>Extraction maximale et conseils de prévention urbaine</h3>
<p class="mt-4">L'extraction puissante limite l'humidité résiduelle dans les rembourrages. Le séchage complet intervient sous 4 à 8 heures selon la ventilation du logement. Le technicien conseille d'aérer la pièce en privilégiant les heures où la pollution extérieure est moindre (éviter les heures de pointe), d'orienter un ventilateur vers les textiles traités et d'attendre le séchage total avant réutilisation. Pour limiter la recontamination dans l'environnement urbain montreuillois, il recommande un aspirateur hebdomadaire avec filtre HEPA capturant les particules fines, la fermeture des fenêtres pendant les pics de pollution, l'utilisation de housses anti-acariens sur les matelas et un nettoyage professionnel annuel pour les foyers exposés aux grands axes ou avec personnes sensibles.</p>`,

      specificChallenges: [
        "Pollution urbaine incrustée dans les fibres : Les logements proches du Périphérique et des grands axes accumulent des particules de pollution qui pénètrent les canapés et tapis, aggravant les problèmes respiratoires et nécessitant une extraction renforcée.",
        "Poussières de chantier omniprésentes : Les nombreuses rénovations à Montreuil génèrent des particules fines de plâtre et ciment qui s'infiltrent partout et s'incrustent profondément dans les textiles, exigeant plusieurs passes d'extraction pour éliminer.",
        "Acariens dans les logements urbains denses : L'environnement urbain confiné, combiné à une ventilation parfois insuffisante dans les immeubles anciens, favorise la prolifération des acariens nécessitant un traitement thermique rigoureux et des conseils d'entretien adaptés.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il les particules de pollution urbaine incrustées dans mes textiles ?",
          answer:
            `<p>Oui, l'injection-extraction à eau chaude combinée à un détergent spécifique dissout et extrait les particules de pollution (suies, hydrocarbures, particules fines) qui se sont incrustées dans les fibres. L'aspiration puissante retire ces contaminants ainsi que les acariens et leurs déjections. Les habitants des logements proches du Périphérique ou des grands axes constatent une amélioration notable de la qualité de l'air intérieur et une réduction des symptômes respiratoires. Pour maintenir ce résultat dans l'environnement urbain montreuillois, nous recommandons un nettoyage annuel et la fermeture des fenêtres pendant les pics de pollution.</p>`,
        },
        {
          question:
            "Pouvez-vous traiter les poussières de chantier incrustées dans mon canapé après des travaux ?",
          answer:
            `<p>Oui, les poussières de plâtre et de ciment sont particulièrement tenaces car elles pénètrent profondément dans les fibres et les rembourrages. Nous effectuons d'abord un pré-aspirage minutieux pour éliminer les particules superficielles, puis l'injection-extraction dissout et extrait les résidus incrustés. Plusieurs passages sont nécessaires sur les zones très exposées. Un nettoyage professionnel après des travaux importants dans l'immeuble ou à proximité est fortement recommandé à Montreuil où les chantiers de rénovation sont nombreux et génèrent une pollution de proximité intense.</p>`,
        },
        {
          question:
            "Mon canapé près d'une fenêtre donnant sur Croix de Chavaux est très encrassé, est-ce récupérable ?",
          answer:
            `<p>Oui, même fortement encrassé par la pollution urbaine, un canapé peut être restauré. Les textiles proches des fenêtres donnant sur les grands axes accumulent rapidement une couche de particules grises qui ternit les couleurs. L'injection-extraction avec détergent renforcé et eau chaude élimine ces dépôts et ravive l'aspect d'origine. Le résultat est immédiatement visible. Pour limiter l'encrassement rapide dans cet environnement, nous recommandons un aspirateur hebdomadaire et de fermer les fenêtres pendant les heures de forte circulation.</p>`,
        },
        {
          question:
            "Combien de temps avant de pouvoir réutiliser mon canapé après le nettoyage ?",
          answer:
            `<p>Le séchage complet intervient sous 4 à 8 heures selon la ventilation du logement et l'épaisseur des rembourrages. Vous pouvez vous asseoir légèrement sur les accoudoirs dès 2 à 3h, mais évitez de vous installer complètement avant séchage total pour ne pas écraser les fibres humides. Aérez la pièce en privilégiant les périodes de faible pollution (éviter les heures de pointe), orientez un ventilateur vers le canapé. Pour un usage en soirée, planifiez l'intervention le matin ou en début d'après-midi.</p>`,
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
