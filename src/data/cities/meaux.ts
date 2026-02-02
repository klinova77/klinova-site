// src/data/cities/meaux.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Meaux",
  slug: "meaux",
  postalCodes: ["77100"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  customDescription:
    "Commune la plus peuplée de Seine-et-Marne, Meaux combine un centre historique médiéval protégé aux rues étroites, des grands ensembles en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) et des zones pavillonnaires le long de la Marne. Les poussières de chantiers, l'humidité fluviale et la forte présence de pigeons imposent un entretien spécialisé des surfaces diversifiées.",

  hubIntro:
    "<p>Meaux présente un parc immobilier contrasté nécessitant des protocoles différenciés selon les secteurs, du bâti ancien protégé du centre historique aux copropriétés récemment rénovées des grands ensembles. <strong>Klinova intervient en partenariat avec les syndics, les gestionnaires et les propriétaires</strong> pour assurer l'entretien des surfaces intérieures et extérieures, en tenant compte des contraintes d'accès du centre médiéval, des chantiers de rénovation urbaine et de la proximité de la Marne.</p>\n<p>Nos équipes connaissent les spécificités locales : poussières de chantiers (béton, ciment, plâtre) générées par les programmes de rénovation urbaine, humidité de la Marne favorisant mousses et micro-algues sur les berges et dans les quartiers sud, forte concentration de pigeons dans le secteur cathédrale et marché. Nous déployons des protocoles adaptés aux matériaux (méthodes douces pour le bâti ancien en pierre et pans de bois, techniques pour les copropriétés rénovées avec sols techniques) avec une organisation logistique tenant compte des rues étroites du centre et des ponts sur la Marne.</p>\n<ul>\n  <li>Adaptation au patrimoine historique protégé : Méthodes douces et pressions contrôlées pour le bâti ancien du centre-ville (Site Patrimonial Remarquable), immeubles en pierre et pans de bois, escaliers anciens nécessitant une expertise spécifique.</li>\n  <li>Maîtrise des facteurs de salissure multiples : Élimination des poussières de chantiers des zones en rénovation urbaine, traitement anti-mousse pour l'humidité fluviale de la Marne, désinfection et nettoyage des balcons souillés par les pigeons concentrés dans le centre ancien.</li>\n  <li>Organisation logistique pour ville complexe : Portage de matériel dans les rues étroites du centre historique, planification tenant compte de la congestion aux ponts sur la Marne, adaptation aux accès évolutifs dans les zones en chantiers de rénovation.</li>\n</ul>",

  citySpecificChallenges: [
    "Poussières de chantiers des programmes de rénovation urbaine générant dépôts minéraux (béton, ciment, plâtre) sur vitres, balcons et garde-corps des quartiers Beauval, Dunant et La Pierre Collinet",
    "Humidité fluviale de la Marne favorisant verdissement rapide des soubassements, murets et zones ombragées par mousses et micro-algues, particulièrement sur les berges et dans les quartiers sud près du Parc du Pâtis",
    "Forte concentration de pigeons dans le centre ancien (secteur cathédrale et marché) entraînant salissures importantes sur balcons, rebords de fenêtres et façades du bâti historique",
    "Contraintes d'accès du centre médiéval avec rues très étroites, parfois piétonnes ou à accès limité, imposant portage de matériel et organisation fine dans le Site Patrimonial Remarquable",
  ],

  districts: [
    // Cœur Historique et Standing
    "Centre-Ville (Secteur Cathédrale)",
    "Quartier du Marché / Grande Île",
    "Quartier du Luxembourg",
    "La Corniche (Bords de Marne)",

    // Quartiers Résidentiels Nord & Ouest
    "Frot / Clemenceau / Saint-Faron",
    "La Grosse Pierre / Croix Saint Loup",
    "Les Hauts de Chantereine",
    "Cité Administrative",

    // Pôles Urbains en Mutation (Beauval / Dunant)
    "Beauval (Secteurs Aragon & Colbert)",
    "Dunant / Guynemer",
    "La Pierre Collinet",
    "Le Pâtis / Bords de Marne",
  ],

  nearbyCities: [
    "serris",
    "claye-souilly",
    "lagny-sur-marne",
    "bussy-saint-georges",
    "villeparisis",
    "torcy",
    "vaires-sur-marne",
    "chelles",
    "montfermeil",
    "champs-sur-marne",
  ],

  landmarks: [
    "Mairie de Meaux",
    "Cathédrale Saint-Étienne de Meaux",
    "Musée de la Grande Guerre",
    "Gare de Meaux (ligne P)",
    "Jardin des Trinitaires",

    "Parc du Pâtis",
    "Bords de la Marne",
  ],

  faq: [
    {
      question:
        "Intervenez-vous dans le centre historique malgré les rues étroites et l'accès limité ?",
      answer:
        "<p><strong>Oui, nous adaptons notre organisation aux contraintes du Site Patrimonial Remarquable</strong>. Pour le secteur cathédrale et le centre ancien aux rues pavées étroites, parfois piétonnes ou à accès limité, nous utilisons du matériel portable et organisons le portage sur certaines portions. Nos techniciens connaissent les créneaux de stationnement temporaire et coordonnent avec les syndics pour optimiser l'accès. Cette expertise logistique est indispensable pour intervenir dans le cœur médiéval de Meaux.</p>",
    },
    {
      question:
        "Le diagnostic sur site est-il gratuit dans tous les quartiers de Meaux ?",
      answer:
        "<p><strong>Oui, le déplacement et le diagnostic sont gratuits</strong> quel que soit le quartier (Centre-Ville/Cathédrale, Marché, Beauval, La Pierre Collinet, Dunant, Saint-Faron, La Grosse Pierre, Luxembourg, Corniche de Meaux). Le technicien évalue les surfaces, identifie les contraintes spécifiques (bâti ancien protégé, poussières de chantiers, humidité de la Marne, présence de pigeons) et remet un chiffrage détaillé sous 48h adapté à votre immeuble, copropriété ou pavillon.</p>",
    },
    {
      question:
        "Vos méthodes sont-elles adaptées au bâti ancien du centre historique ?",
      answer:
        "<p><strong>Oui, nous utilisons exclusivement des méthodes douces et des pressions contrôlées</strong> pour les immeubles en pierre et pans de bois du centre-ville classé en Site Patrimonial Remarquable. Ces matériaux anciens ne tolèrent aucune haute pression agressive. Les escaliers anciens nécessitent également une expertise spécifique pour préserver leur intégrité. Cette maîtrise des techniques patrimoniales est essentielle pour intervenir dans le centre médiéval de Meaux sans endommager les matériaux protégés.</p>",
    },
    {
      question:
        "Comment gérez-vous les interventions malgré les ponts sur la Marne et les chantiers de rénovation ?",
      answer:
        "<p><strong>Nous planifions chaque intervention en tenant compte de ces contraintes structurelles</strong>. Les points de congestion récurrents aux ponts du Marché et de la République sont anticipés dans nos horaires. Pour les quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) où les accès évoluent régulièrement, nous effectuons systématiquement une visite préalable pour valider les itinéraires et coordonner avec les gestionnaires de chantiers. Cette organisation adaptative est indispensable dans la commune la plus peuplée de Seine-et-Marne.</p>",
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
        "Le nettoyage professionnel des moquettes à Meaux préserve l'élégance des parties communes tout en éliminant les poussières de chantiers des zones en rénovation et l'humidité de la Marne qui accélère l'encrassement.",

      whyUsBullets: [
        "Expertise des environnements meldois contrastés : Maîtrise des détergents pour poussières minérales de chantiers dans les quartiers en rénovation, extraction maximale pour humidité fluviale de la Marne, méthodes douces pour le bâti ancien protégé.",
        "Extraction adaptée aux matériaux et supports variés : Techniques soignées pour tapis d'escalier des immeubles anciens du centre historique, méthodes robustes pour moquettes synthétiques des copropriétés rénovées, séchage renforcé dans les secteurs humides.",
        "Organisation logistique pour ville complexe : Portage de matériel dans les rues étroites du centre médiéval, planification tenant compte des ponts sur la Marne, adaptation aux accès évolutifs des zones en chantiers de rénovation urbaine.",
      ],

      uniqueIntro:
        "<p>Les copropriétés meldoises subissent un encrassement différencié selon leur localisation dans cette commune la plus peuplée de Seine-et-Marne. Les immeubles des quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) accumulent quotidiennement des poussières minérales de chantiers : particules fines de béton, ciment et plâtre générées par les opérations de déconstruction et reconstruction qui se déposent dans les halls et cages d'escalier, transportées par les semelles des résidents et des ouvriers. Ces dépôts blanchâtres s'incrustent profondément dans les fibres des moquettes, formant une couche tenace sur les seuils et les zones de passage. Les copropriétés du bâti ancien du centre historique autour de la cathédrale accumulent principalement les salissures liées au flux piéton intense des rues commerçantes, tandis que les résidences de la Corniche de Meaux et des quartiers sud près du Parc du Pâtis subissent l'humidité fluviale de la Marne qui favorise l'incrustation des salissures dans les fibres.</p>\n<p class=\"mt-4\">Les copropriétaires des immeubles récemment réhabilités de Beauval ou des bâtiments anciens du secteur cathédrale constatent cette dégradation différenciée : dans les zones en chantiers, les tapis d'escalier prennent une teinte blanchâtre uniforme malgré l'entretien quotidien, les paliers devant les ascenseurs accumulent des dépôts minéraux persistants, les seuils d'entrée gardent des traces de pas poussiéreux. Dans les quartiers proches de la Marne, l'humidité ralentit le séchage naturel des moquettes et aggrave l'incrustation des salissures ordinaires. Les conseils syndicaux reçoivent des observations répétées, conscients que cet aspect négligé contraste avec les investissements réalisés dans la rénovation urbaine ou le prestige du centre historique protégé.</p>\n<p class=\"mt-4\">Un nettoyage professionnel adapté à chaque environnement inverse cette dynamique. Il extrait les poussières minérales de chantiers avec des détergents spécifiques dans les quartiers en rénovation, élimine les salissures aggravées par l'humidité fluviale avec une extraction maximale dans les secteurs proches de la Marne, et ravive les couleurs d'origine des moquettes du bâti ancien du centre-ville. L'intervention devient un acte de maintenance préventive différencié, indispensable pour maintenir le niveau de standing attendu dans les copropriétés de la commune la plus peuplée de Seine-et-Marne.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic différencié selon le secteur et l'exposition</h3>\n<p>Le technicien examine l'état de la moquette (fibres synthétiques robustes des copropriétés rénovées de Beauval, tapis d'escalier des immeubles anciens du centre historique, bouclées épaisses des halls de standing de la Corniche) et identifie les salissures typiques selon la localisation : poussières minérales blanchâtres de chantiers pour les quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet), salissures aggravées par l'humidité fluviale pour les résidences proches de la Marne et du Parc du Pâtis, dépôts organiques liés au flux piéton pour le centre ancien. Il repère les zones critiques (seuils exposés aux chantiers, paliers devant les ascenseurs des halls à fort passage, escaliers anciens sensibles à l'humidité) et note les contraintes d'accès (portage de matériel dans les rues étroites du centre historique, accès évolutifs dans les zones en chantiers). Cette analyse détermine le choix du détergent et de la méthode d'extraction.</p>\n\n<h3>2. Injection-extraction adaptée au type de contamination</h3>\n<p class=\"mt-4\">La machine pulvérise un mélange d'eau chaude (65-70°C) et de détergent sélectionné selon l'encrassement. Pour les moquettes des quartiers en rénovation urbaine, un détergent formulé pour dissoudre et capter les particules minérales (béton, ciment, plâtre) est appliqué, évitant leur remise en suspension. Pour les copropriétés des secteurs proches de la Marne (Corniche, quartiers sud), l'extraction est renforcée pour compenser l'humidité ambiante qui ralentit le séchage. Pour les immeubles anciens du centre historique, la méthode est adaptée aux fibres délicates et aux supports sensibles à l'eau. L'aspiration immédiate et puissante retire l'eau sale chargée de particules avant saturation du support. Sur les zones très encrassées (entrées des immeubles de Beauval exposées aux flux de chantiers, halls du secteur cathédrale à fort passage piéton), plusieurs passages successifs extraient les salissures les plus tenaces.</p>\n\n<h3>3. Séchage surveillé et recommandations par environnement</h3>\n<p class=\"mt-4\">Le séchage complet intervient sous 6 à 10 heures selon la ventilation et l'humidité ambiante (plus longue dans les secteurs proches de la Marne et du Parc du Pâtis). Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés des quartiers en rénovation urbaine exposées aux poussières de chantiers, un nettoyage trimestriel pendant les phases actives de travaux maintient la propreté sans attendre l'encrassement critique, puis un rythme annuel une fois les chantiers terminés. Pour les résidences de la Corniche et des quartiers sud exposées à l'humidité fluviale, un nettoyage annuel avec extraction maximale compense le ralentissement du séchage naturel. Les immeubles du centre historique peuvent espacer à un rythme annuel standard.</p>",

      specificChallenges: [
        "Poussières de chantiers des rénovations urbaines : Les copropriétés des quartiers Beauval, Dunant et La Pierre Collinet accumulent des particules minérales (béton, ciment, plâtre) générant des dépôts blanchâtres tenaces nécessitant un détergent spécifique et plusieurs passes d'extraction.",
        "Humidité fluviale de la Marne : Les résidences de la Corniche et des quartiers sud près du Parc du Pâtis subissent une hygrométrie élevée qui ralentit le séchage et aggrave l'incrustation des salissures, exigeant une extraction maximale.",
        "Contraintes d'accès du centre historique : Les immeubles du secteur cathédrale situés dans les rues étroites, parfois piétonnes ou à accès limité du Site Patrimonial Remarquable, nécessitent du matériel portable et une organisation fine avec portage.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles proches des chantiers de rénovation nécessitent-elles un entretien plus fréquent ?",
          answer:
            "<p>Oui, les poussières minérales de chantiers (béton, ciment, plâtre) générées par les programmes de rénovation urbaine de Beauval, Dunant et La Pierre Collinet se déposent quotidiennement dans les halls et cages d'escalier. Ces particules fines s'incrustent rapidement dans les fibres et forment une couche blanchâtre tenace que l'aspirateur domestique ne peut éliminer. Nous recommandons un nettoyage trimestriel pendant les phases actives de travaux pour maintenir l'aspect soigné des copropriétés récemment rénovées, puis un rythme annuel une fois les chantiers terminés dans le quartier.</p>",
        },
        {
          question:
            "Intervenez-vous dans le centre historique malgré les rues étroites et l'accès limité ?",
          answer:
            "<p>Absolument. Pour le secteur cathédrale et le centre ancien classé en Site Patrimonial Remarquable, nous utilisons du matériel portable adapté aux rues pavées étroites, parfois piétonnes ou à accès limité par des bornes. Le portage s'effectue sur les portions inaccessibles aux véhicules. Nos techniciens connaissent les créneaux de stationnement temporaire et coordonnent avec les syndics pour optimiser l'accès. Cette organisation logistique spécifique fait partie de notre routine dans le cœur médiéval de Meaux.</p>",
        },
        {
          question:
            "L'humidité de la Marne aggrave-t-elle l'encrassement des moquettes ?",
          answer:
            "<p>Oui, l'hygrométrie élevée liée à la proximité de la Marne et des berges fait gonfler les particules de salissures et ralentit le séchage naturel des fibres. Les moquettes des résidences de la Corniche et des quartiers sud près du Parc du Pâtis restent humides plus longtemps, favorisant l'incrustation profonde des salissures ordinaires. Nous adaptons notre protocole : extraction maximale pour limiter l'humidité résiduelle, détergent captant les particules, et conseillons d'aérer impérativement pendant le séchage pour évacuer l'humidité ambiante.</p>",
        },
        {
          question:
            "Comment organisez-vous les interventions malgré les ponts sur la Marne et les chantiers ?",
          answer:
            "<p>Nous planifions chaque intervention en tenant compte des points de congestion récurrents aux ponts du Marché et de la République qui scindent la ville. Les horaires sont ajustés pour éviter les heures de pointe. Pour les quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) où les accès évoluent régulièrement, nous effectuons une visite préalable pour valider les itinéraires et coordonner avec les gestionnaires de chantiers. Cette organisation adaptative est indispensable dans la commune la plus peuplée de Seine-et-Marne avec ses contraintes structurelles multiples.</p>",
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
        "Le nettoyage professionnel des parkings meldois restaure la propreté des sols tout en gérant les poussières de chantiers des zones en rénovation et l'humidité fluviale de la Marne selon la localisation.",

      whyUsBullets: [
        "Double expertise chantiers et humidité : Détergent captant les poussières minérales pour parkings des zones en rénovation urbaine, traitement anti-mousse pour humidité fluviale de la Marne, brossage adapté aux environnements contrastés.",
        "Méthodes différenciées par secteur : Balayage intensif et captation des particules pour les quartiers Beauval/Dunant/La Pierre Collinet, traitement biologique pour secteurs proches de la Marne et du Parc du Pâtis, organisation fine pour le centre historique.",
        "Coordination avec rénovation urbaine : Adaptation aux accès évolutifs des zones en chantiers, planification tenant compte des ponts sur la Marne, compte-rendu systématique conforme aux standards de gestion des copropriétés rénovées.",
      ],

      uniqueIntro:
        "<p>Les parkings souterrains de Meaux présentent des profils d'encrassement radicalement différents selon leur localisation dans cette commune la plus peuplée de Seine-et-Marne. Les parkings des copropriétés des quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) accumulent massivement des poussières minérales de chantiers : particules fines de béton, ciment et plâtre générées par les opérations de déconstruction et reconstruction qui se déposent sur les sols, les rampes et dans les angles. Ces dépôts blanchâtres recouvrent les marquages au sol, créent une pellicule poussiéreuse persistante et saturent parfois les siphons. Les parkings des résidences de la Corniche de Meaux et des quartiers sud proches du Parc du Pâtis subissent principalement l'humidité fluviale de la Marne qui favorise le développement rapide de mousses vertes et de micro-algues sur les sols en béton poreux, particulièrement dans les zones mal ventilées ou semi-enterrées. Les parkings du centre historique autour de la cathédrale, souvent anciens et de petite capacité, présentent un encrassement classique aggravé par le flux piéton intense des rues commerçantes.</p>\n<p class=\"mt-4\">Les copropriétaires et gestionnaires des immeubles rénovés de Beauval ou des résidences de standing de la Corniche constatent cette dégradation différenciée : dans les zones en chantiers, les parkings se couvrent d'une couche blanchâtre uniforme nécessitant des balayages répétés, les rampes d'accès accumulent des dépôts minéraux qui blanchissent le béton, les véhicules transportent ces poussières à l'extérieur. Dans les secteurs proches de la Marne, les rampes deviennent glissantes avec des dépôts verdâtres, les angles se couvrent de mousses, l'odeur d'humidité s'installe. Les conseils syndicaux reçoivent des demandes d'intervention, mais l'organisation semble complexe dans une ville où les accès aux résidences évoluent régulièrement en raison des chantiers de rénovation et où la circulation est impactée par les ponts sur la Marne.</p>\n<p class=\"mt-4\">Un décrassage structuré et coordonné répond à ces préoccupations variées. Il élimine les dépôts minéraux de chantiers dans les quartiers en rénovation urbaine, traite les mousses favorisées par l'humidité fluviale dans les secteurs proches de la Marne, et restaure la propreté des sols partout. L'intervention devient un acte de gestion préventive, valorisant les investissements de la rénovation urbaine et maintenant le niveau de confort attendu dans les copropriétés de la commune la plus peuplée de Seine-et-Marne.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic technique et planification urbaine</h3>\n<p>Le technicien visite le parking pour identifier le type de revêtement (béton brut dans les parkings anciens du centre historique, peinture de sol ou résine dans les parkings rénovés de Beauval), évaluer le niveau d'humidité ambiante (particulièrement élevé dans les secteurs proches de la Marne et du Parc du Pâtis), vérifier l'état des siphons souvent saturés par les poussières de chantiers, et repérer les zones problématiques selon la localisation. Pour les parkings des quartiers en rénovation urbaine : dépôts blanchâtres massifs de particules minérales sur toutes les surfaces. Pour les parkings des secteurs fluviaux : mousses vertes et micro-algues sur rampes et zones humides. Il note la configuration et les contraintes d'accès évolutifs liés aux chantiers. Cette analyse permet d'organiser l'intervention en coordonnant avec le syndic ou les gestionnaires pour informer les copropriétaires et minimiser la gêne.</p>\n\n<h3>2. Décrassage par autolaveuse et traitement adapté à l'encrassement</h3>\n<p class=\"mt-4\">Pour les parkings des quartiers en rénovation urbaine, le balayage mécanique élimine d'abord les volumes importants de poussières minérales accumulées. L'autolaveuse brosse ensuite le sol avec un mélange d'eau et de détergent formulé pour capter et dissoudre les particules de béton, ciment et plâtre sans les remettre en suspension, puis aspire immédiatement les eaux sales chargées de dépôts blanchâtres. Le brossage vigoureux est nécessaire pour déloger ces particules incrustées. Pour les parkings des secteurs proches de la Marne, un traitement anti-mousse professionnel est appliqué sur les zones humides présentant des dépôts biologiques, avec un temps de contact de 20 à 30 minutes, puis l'autolaveuse brosse vigoureusement pour éliminer mousses et micro-algues. Les rampes, pieds de poteaux et angles sont nettoyés manuellement partout. L'eau de lavage est collectée avec attention particulière aux siphons souvent obstrués par les poussières de chantiers.</p>\n\n<h3>3. Rotation coordonnée et suivi en contexte urbain évolutif</h3>\n<p class=\"mt-4\">L'intervention est organisée par zones successives si nécessaire : moitié A le matin, moitié B l'après-midi, permettant aux résidents de stationner temporairement dans la zone non traitée. Le parking reste accessible en permanence, seule la zone en cours de lavage est momentanément condamnée le temps du séchage (2-3h). Un compte-rendu détaillé avec photos avant/après est remis au gestionnaire, pratique particulièrement appréciée dans les copropriétés rénovées où la traçabilité des prestations est systématique. Pour les parkings des quartiers en rénovation urbaine, un décrassage trimestriel pendant les phases actives de travaux maintient la propreté, puis un rythme annuel une fois les chantiers terminés. Pour les parkings des secteurs fluviaux, un décrassage annuel avec traitement anti-mousse préventif compense l'humidité de la Marne. Cette fréquence différenciée tient compte des facteurs de salissure variés dans la ville.</p>",

      specificChallenges: [
        "Poussières massives de chantiers de rénovation : Les parkings des quartiers Beauval, Dunant et La Pierre Collinet accumulent des volumes importants de particules minérales (béton, ciment, plâtre) nécessitant un balayage intensif et un détergent captant pour éviter la remise en suspension.",
        "Mousses favorisées par l'humidité de la Marne : Les parkings de la Corniche et des quartiers sud proches du Parc du Pâtis développent rapidement des dépôts verts glissants en raison de l'hygrométrie élevée, exigeant un traitement anti-mousse curatif et préventif.",
        "Accès évolutifs dans les zones en chantiers : Les parkings des quartiers en rénovation urbaine présentent des accès qui changent régulièrement en fonction de l'avancement des travaux, nécessitant une visite préalable systématique pour valider les itinéraires.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings des quartiers en rénovation accumulent-ils autant de poussières ?",
          answer:
            "<p>Les programmes de rénovation urbaine de Beauval, Dunant et La Pierre Collinet génèrent quotidiennement des volumes importants de poussières minérales (béton, ciment, plâtre) lors des opérations de déconstruction et reconstruction. Ces particules fines pénètrent les parkings souterrains via les rampes d'accès, les aérations et les véhicules des ouvriers. Elles se déposent sur toutes les surfaces et créent une couche blanchâtre persistante. Un décrassage trimestriel pendant les phases actives de travaux maintient la propreté et évite l'accumulation excessive qui saturerait les siphons, puis un rythme annuel suffit une fois les chantiers terminés.</p>",
        },
        {
          question:
            "Les parkings proches de la Marne développent-ils vraiment plus de mousses ?",
          answer:
            "<p>Oui, l'humidité fluviale de la Marne génère une hygrométrie élevée dans les parkings de la Corniche et des quartiers sud proches du Parc du Pâtis. Les parkings semi-enterrés ou mal ventilés présentent des sols en béton poreux qui retiennent cette humidité et favorisent la prolifération rapide de mousses vertes et de micro-algues sur les rampes. Nous appliquons un traitement anti-mousse curatif avec temps de contact prolongé, puis un brossage vigoureux pour éliminer les organismes. Un traitement préventif après séchage ralentit la recolonisation pendant 12 à 18 mois.</p>",
        },
        {
          question:
            "Comment organisez-vous l'accès aux parkings malgré les chantiers de rénovation ?",
          answer:
            "<p>Nous effectuons systématiquement une visite préalable pour valider les itinéraires d'accès qui évoluent régulièrement dans les quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet). Nous coordonnons avec les gestionnaires de chantiers et les syndics pour connaître les zones en travaux, les déviations temporaires et les créneaux d'accès possibles. Cette organisation adaptative est indispensable dans une ville où de nombreuses zones sont en déconstruction ou reconstruction simultanément, modifiant constamment la configuration urbaine.</p>",
        },
        {
          question:
            "Comment gérez-vous les interventions malgré les ponts sur la Marne ?",
          answer:
            "<p>Nous planifions chaque intervention en tenant compte des points de congestion récurrents aux ponts du Marché et de la République qui scindent la ville. Les horaires sont ajustés pour éviter les heures de pointe et minimiser l'impact de ces goulets d'étranglement sur nos trajets. Pour les parkings situés de part et d'autre de la Marne, nous organisons les tournées en regroupant les interventions par secteur géographique. Cette organisation logistique tient compte de la configuration fluviale spécifique de Meaux, commune la plus peuplée de Seine-et-Marne traversée par la Marne.</p>",
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
        "Le nettoyage professionnel des balcons à Meaux redonne un espace extérieur utilisable et propre, libéré des poussières de chantiers, du verdissement de la Marne et des fientes de pigeons du centre ancien.",

      whyUsBullets: [
        "Triple expertise chantiers, pigeons et humidité : Détergent captant pour poussières minérales des zones en rénovation, protocole sanitaire pour fientes de pigeons du centre ancien, traitement anti-mousse pour humidité de la Marne.",
        "Méthodes différenciées par environnement : Captation sans remise en suspension pour quartiers en chantiers, désinfection virucide pour secteur cathédrale, traitement biologique pour bords de Marne et secteurs sud, respect du bâti ancien protégé.",
        "Organisation pour ville complexe : Portage de matériel dans les rues étroites du centre historique, adaptation aux accès évolutifs des zones en chantiers, planification tenant compte des ponts sur la Marne.",
      ],

      uniqueIntro:
        "<p>Les propriétaires meldois finissent par renoncer à utiliser leur balcon, découragés par un encrassement qui varie radicalement selon le quartier dans cette commune la plus peuplée de Seine-et-Marne. Dans les quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet), les balcons des copropriétés rénovées accumulent quotidiennement une couche blanchâtre de poussières minérales : particules fines de béton, ciment et plâtre générées par les chantiers de déconstruction et reconstruction qui se déposent sur les dalles, les garde-corps et les baies vitrées. Cette pellicule poussiéreuse résiste aux tentatives de nettoyage domestique et revient en quelques jours. Dans le centre historique autour de la cathédrale, les balcons des immeubles anciens subissent les salissures massives des pigeons concentrés dans ce secteur : fientes sur les rebords de fenêtres, garde-corps et sols. Sur la Corniche de Meaux et dans les quartiers sud proches du Parc du Pâtis, les balcons se couvrent rapidement de mousses vertes et de micro-algues favorisées par l'humidité fluviale de la Marne, rendant les surfaces glissantes.</p>\n<p class=\"mt-4\">Après une saison, les espaces extérieurs deviennent négligés : dans les quartiers en chantiers, les balcons présentent un dépôt blanchâtre uniforme qui ternit les dalles et opacifie les garde-corps, l'eau de pluie forme des coulures grises. Dans le centre ancien, les fientes de pigeons forment des croûtes malodorantes, les rebords noircissent, l'acidité corrode les matériaux. Sur les bords de Marne, les murs se couvrent de dépôts verdâtres glissants, les joints noircissent. On hésite à y installer une chaise ou à profiter de la vue sur la Marne ou la cathédrale. Les tentatives de nettoyage avec un balai-brosse et un seau donnent des résultats décevants : les poussières minérales s'étalent sans partir, les mousses reviennent rapidement, les fientes résistent.</p>\n<p class=\"mt-4\">Un nettoyage professionnel adapté à chaque environnement change complètement la donne. Il élimine les poussières de chantiers avec des techniques de captation dans les quartiers en rénovation, désinfecte et nettoie les balcons souillés par les pigeons dans le centre historique, traite les mousses liées à l'humidité de la Marne sur les berges, et restitue l'aspect d'origine des surfaces partout. Les habitants redécouvrent le plaisir d'utiliser leur balcon, d'y prendre l'air avec vue sur le patrimoine meldois ou les bords de Marne. Cette remise en état valorise aussi le logement dans une ville où les programmes de rénovation urbaine attirent de nouveaux résidents.</p>",

      uniqueDeepDive:
        "<h3>1. Préparation et identification des salissures par secteur</h3>\n<p>Le technicien commence par protéger les portes-fenêtres, menuiseries et murs intérieurs avec des bâches étanches fixées au ruban adhésif. Les meubles de balcon, plantes en pot et objets sont déplacés ou protégés individuellement. Les gros débris sont ramassés manuellement : poussières minérales accumulées pour les quartiers en chantiers (Beauval, Dunant, La Pierre Collinet), fientes séchées pour le centre ancien autour de la cathédrale, dépôts organiques pour les secteurs proches de la Marne. Le technicien identifie ensuite le type d'encrassement selon la localisation : dépôts blanchâtres de particules minérales, contamination par fientes de pigeons nécessitant désinfection, ou verdissement par mousses et micro-algues.</p>\n\n<h3>2. Nettoyage adapté au type de pollution</h3>\n<p class=\"mt-4\">Pour les balcons des quartiers en rénovation urbaine exposés aux poussières de chantiers, un détergent formulé pour capter et dissoudre les particules minérales est appliqué, puis le brossage manuel décolle les dépôts incrustés sans les remettre en suspension. Le rinçage s'effectue à pression contrôlée avec collecte de l'eau chargée de particules. Pour les balcons du centre historique souillés par les fientes de pigeons, un protocole sanitaire strict est appliqué : humidification préalable des fientes, ramassage dans des sacs étanches, nettoyage avec produit adapté, puis désinfection virucide avec temps de contact respecté. Pour les balcons de la Corniche et des quartiers sud proches de la Marne, un traitement anti-mousse est appliqué sur les surfaces colonisées, suivi d'un brossage vigoureux et d'un rinçage à pression modérée. Les garde-corps, vitreries et murs sont lavés à l'éponge ou au chiffon microfibre.</p>\n\n<h3>3. Gestion de l'eau et conseils d'entretien différenciés</h3>\n<p class=\"mt-4\">L'eau de rinçage est dirigée vers les évacuations à l'aide d'une raclette et de chiffons absorbants, évitant toute coulure sur les façades anciennes du centre historique ou les façades rénovées des copropriétés. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition, durée rallongée dans les secteurs humides proches de la Marne. Le technicien conseille un balayage régulier pour éliminer les poussières avant qu'elles ne s'incrustent (quartiers en chantiers), une inspection des points de nidification des pigeons (centre ancien), un traitement préventif anti-mousse pour les secteurs fluviaux. Un nettoyage professionnel trimestriel pendant les phases actives de chantiers maintient la propreté à Beauval, Dunant et La Pierre Collinet, puis annuel une fois les travaux terminés. Un nettoyage annuel suffit pour les autres secteurs, avec désinfection systématique dans le centre ancien et traitement anti-mousse préventif sur les bords de Marne.</p>",

      specificChallenges: [
        "Poussières massives de chantiers de rénovation : Les balcons des quartiers Beauval, Dunant et La Pierre Collinet accumulent quotidiennement des particules minérales (béton, ciment, plâtre) formant une couche blanchâtre tenace nécessitant un détergent captant et un brossage méticuleux.",
        "Forte concentration de pigeons dans le centre ancien : Les balcons du secteur cathédrale et du marché subissent des salissures massives de fientes nécessitant un protocole sanitaire strict avec désinfection virucide pour éliminer les risques sanitaires.",
        "Verdissement rapide lié à l'humidité de la Marne : Les balcons de la Corniche et des quartiers sud près du Parc du Pâtis se couvrent rapidement de mousses et micro-algues favorisées par l'humidité fluviale, nécessitant traitement anti-mousse curatif et préventif.",
      ],

      faqAdditions: [
        {
          question:
            "Mon balcon à Beauval se couvre de poussière blanche en quelques jours, est-ce normal ?",
          answer:
            "<p>Oui, c'est lié aux programmes de rénovation urbaine qui génèrent quotidiennement des volumes importants de poussières minérales (béton, ciment, plâtre) lors des opérations de déconstruction et reconstruction. Ces particules fines se déposent sur tous les balcons du quartier. Nous recommandons un balayage régulier pour éliminer les dépôts avant qu'ils ne s'incrustent, et un nettoyage professionnel trimestriel pendant les phases actives de chantiers avec un détergent captant qui évite de remettre les particules en suspension. Une fois les travaux terminés dans votre secteur, un rythme annuel suffira.</p>",
        },
        {
          question:
            "Mon balcon dans le centre-ville est régulièrement souillé par les pigeons, que faire ?",
          answer:
            "<p>La forte concentration de pigeons dans le secteur cathédrale et marché est un problème récurrent du centre ancien. Nous appliquons un protocole sanitaire strict : humidification préalable des fientes pour éviter la dispersion de poussières pathogènes, ramassage dans des sacs étanches, nettoyage avec produit adapté, puis désinfection virucide avec temps de contact respecté pour éliminer les risques sanitaires (salmonelles, cryptocoques). Nous pouvons également proposer la pose de solutions anti-pigeons (pics discrets, filets) adaptées à l'architecture du bâti ancien protégé pour prévenir la recolonisation.</p>",
        },

        {
          question:
            "Combien de temps avant de pouvoir réinstaller mes meubles et profiter de mon balcon ?",
          answer:
            "<p>Le séchage complet intervient sous 2 à 4 heures selon l'exposition au soleil et la ventilation, durée légèrement rallongée dans les secteurs proches de la Marne en raison de l'humidité ambiante. Vous pouvez marcher sur le balcon dès que les surfaces sont sèches au toucher, généralement en milieu d'après-midi si l'intervention a lieu le matin. Pour réinstaller le mobilier, attendez le séchage total des joints et des angles, soit environ une demi-journée. Cette rapidité permet de profiter rapidement de la vue sur la cathédrale, les bords de Marne ou le cadre rénové des nouveaux quartiers.</p>",
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
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par les fientes de pigeons à Meaux éliminent les risques sanitaires selon un protocole strict tout en préservant les matériaux du bâti ancien du centre historique.",

      whyUsBullets: [
        "Triple expertise sanitaire, patrimoniale et logistique : Protocole EPI complet pour sécurité sanitaire, maîtrise exclusive des méthodes basse pression et vapeur pour bâti ancien du Site Patrimonial Remarquable, portage dans les rues étroites du centre.",
        "Désinfection compatible avec matériaux anciens : Sélection rigoureuse de produits virucides/bactéricides homologués à pH neutre, compatibles avec pierres anciennes, joints à la chaux, pans de bois et ferronneries historiques, préservant l'intégrité patrimoniale.",
        "Préservation du patrimoine meldois : Humidification préalable obligatoire, ramassage méthodique, nettoyage adapté à chaque support ancien (pierre, bois, métal), proposition de solutions anti-pigeons discrètes respectant l'architecture médiévale protégée.",
      ],

      uniqueIntro:
        "<p>Les propriétaires meldois découvrent parfois avec stupeur l'ampleur de la contamination de leur balcon après une absence prolongée ou une période d'inutilisation. Les pigeons, particulièrement concentrés dans le centre ancien autour de la cathédrale et du secteur du marché, colonisent massivement les balcons des immeubles historiques. L'architecture médiévale du Site Patrimonial Remarquable avec ses corniches, rebords de fenêtres, toitures en tuiles et structures en pierre offre de nombreux points de nidification attractifs à l'abri des prédateurs. Les rues étroites et les espaces confinés du centre historique créent un environnement favorable à la concentration de ces oiseaux qui trouvent une source alimentaire abondante dans les rues commerçantes et sur le marché. Les fientes s'accumulent en couches épaisses sur les balcons, rebords de fenêtres, garde-corps et façades en pierre, formant une croûte durcie qui dégage une odeur insupportable et corrode progressivement les matériaux anciens.</p>\n<p class=\"mt-4\">Sans intervention rapide, la situation se dégrade dangereusement sur plusieurs plans dans ce centre historique protégé. L'acidité des fientes attaque les pierres de taille anciennes des façades, érode les joints à la chaux fragiles des immeubles médiévaux, corrode les ferronneries historiques des garde-corps, et crée des taches brunâtres permanentes sur les matériaux clairs. Les pans de bois typiques du bâti meldois ancien sont particulièrement vulnérables à l'humidité et à l'acidité combinées des fientes. L'humidité fluviale de la Marne maintient les fientes humides plus longtemps dans certains secteurs, accélérant leur action corrosive sur tous les matériaux du patrimoine protégé. Les fientes sèches se transforment en poussière volatile qui pénètre l'intérieur par les fenêtres anciennes souvent mal isolées, contaminant les espaces de vie des appartements historiques.</p>\n<p class=\"mt-4\">Les occupants redoutent les risques sanitaires graves (cryptococcose, histoplasmose, salmonellose), certains développent des symptômes respiratoires sans comprendre l'origine, les propriétaires s'inquiètent pour la préservation du patrimoine bâti. Les tentatives de nettoyage domestique aggravent triplement le problème : balayer à sec disperse les poussières pathogènes dans l'air et dans les logements du centre ancien, utiliser une haute pression classique endommage irrémédiablement les pierres anciennes, les joints à la chaux et les pans de bois du bâti médiéval protégé, négliger la désinfection laisse des agents infectieux actifs. Ce type de contamination dans le centre historique nécessite un protocole professionnel strict triplement exigeant : équipements de protection intégrale pour la sécurité sanitaire, méthodes basse pression et vapeur pour préserver les matériaux anciens du Site Patrimonial Remarquable, désinfection homologuée compatible avec le patrimoine. Seule cette triple expertise garantit la récupération d'un balcon propre, désinfecté et préservé dans sa valeur patrimoniale exceptionnelle.</p>",

      uniqueDeepDive:
        "<h3>1. Protection intégrale et confinement dans le bâti ancien</h3>\n<p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de protection étanches. Ces équipements de protection individuelle sont obligatoires face aux pathogènes présents dans les fientes (salmonelles, cryptocoques, histoplasma, chlamydia psittaci). Des bâches étanches protègent les fenêtres anciennes, portes-fenêtres et murs intérieurs, créant un confinement strict qui empêche toute dispersion vers l'intérieur des logements du centre historique. Cette protection est particulièrement critique dans les immeubles médiévaux où les fenêtres anciennes sont souvent mal isolées. Les fientes sèches sont ensuite humidifiées abondamment au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules contaminées lors du ramassage manuel, point essentiel dans les rues étroites et confinées du secteur cathédrale.</p>\n\n<h3>2. Ramassage méthodique et nettoyage adapté aux matériaux patrimoniaux</h3>\n<p class=\"mt-4\">Les fientes, nids, plumes et débris organiques sont ramassés manuellement zone par zone à l'aide de pelles et racloirs, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour les déchets contaminés. Cette phase s'effectue méthodiquement pour éviter toute dispersion. Les surfaces sont ensuite nettoyées selon le type de support ancien : pour les pierres de taille des façades médiévales, nettoyage à la vapeur ou très basse pression (30-50 bars maximum) avec produit neutre (pH 7) pour préserver les joints à la chaux fragiles déjà fragilisés par l'acidité des fientes ; pour les pans de bois typiques du bâti meldois ancien, méthode exclusivement manuelle à l'éponge pour éviter toute pénétration d'eau dans ce matériau vulnérable ; pour les ferronneries historiques des garde-corps, nettoyage manuel pour préserver les finitions anciennes déjà corrodées. Le brossage manuel élimine la couche organique résiduelle avant rinçage contrôlé, point absolument critique pour préserver l'intégrité des matériaux anciens du Site Patrimonial Remarquable.</p>\n\n<h3>3. Désinfection virucide compatible avec le patrimoine</h3>\n<p class=\"mt-4\">Un produit désinfectant virucide et bactéricide homologué, rigoureusement sélectionné pour sa compatibilité avec les matériaux anciens (pH neutre, pas d'agents chlorés agressifs sur pierre ou métal ancien), est appliqué sur l'ensemble du balcon : sol, rebords, garde-corps, angles, façade. Le temps de contact réglementaire (10 à 15 minutes) est strictement respecté pour garantir la neutralisation des agents pathogènes. Après rinçage final à très basse pression ou manuel selon le support pour protéger les matériaux fragiles, le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité via les rues étroites du centre ancien, parfois par portage. Le technicien conseille d'inspecter régulièrement les points de nidification typiques du centre historique (corniches médiévales, toitures en tuiles, structures en pierre) et peut proposer la pose de solutions anti-pigeons (pics discrets, filets) adaptées à l'architecture protégée du Site Patrimonial Remarquable pour prévenir une recolonisation qui endommagerait de nouveau le patrimoine bâti.</p>",

      specificChallenges: [
        "Forte concentration de pigeons dans le centre ancien : Le secteur cathédrale et marché du centre historique présente une densité exceptionnelle de pigeons attirés par l'architecture médiévale propice à la nidification et la présence alimentaire des rues commerçantes.",
        "Corrosion accélérée des matériaux patrimoniaux : L'acidité des fientes attaque rapidement les pierres de taille anciennes, érode les joints à la chaux fragiles, corrode les ferronneries historiques et endommage les pans de bois, nécessitant une intervention urgente pour limiter les dégâts irréversibles.",
        "Matériaux anciens exigeant méthodes douces : Les pierres de taille, joints à la chaux, pans de bois et ferronneries du bâti médiéval du Site Patrimonial Remarquable ne tolèrent aucune haute pression, imposant vapeur, basse pression ou nettoyage manuel exclusif.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons représentent-elles un danger sanitaire réel dans un immeuble ancien du centre-ville ?",
          answer:
            "<p>Oui, l'ancienneté du bâti ne change rien aux risques sanitaires, au contraire. Les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer des infections respiratoires graves, des mycoses pulmonaires ou des troubles gastro-intestinaux. Les poussières de fientes sèches sont particulièrement dangereuses dans les immeubles anciens du centre historique où les fenêtres mal isolées facilitent la pénétration dans les logements. La concentration exceptionnelle de pigeons dans le secteur cathédrale aggrave considérablement le risque d'exposition. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires.</p>",
        },
        {
          question:
            "Le nettoyage peut-il endommager les pierres anciennes et les pans de bois de mon immeuble médiéval ?",
          answer:
            "<p>Non, si le protocole est rigoureusement adapté aux matériaux patrimoniaux. Nous n'utilisons jamais de haute pression sur le bâti ancien du Site Patrimonial Remarquable. Pour les pierres de taille et joints à la chaux, nous travaillons exclusivement à la vapeur ou très basse pression (30-50 bars maximum) après humidification qui fait le travail de dissolution. Pour les pans de bois typiques du bâti meldois ancien, nous utilisons exclusivement un nettoyage manuel à l'éponge pour éviter toute pénétration d'eau. Pour les ferronneries historiques, nettoyage manuel pour préserver les finitions anciennes. Les produits désinfectants sont sélectionnés pour leur pH neutre. Cette triple expertise sanitaire, technique et patrimoniale est absolument indispensable dans le centre historique protégé de Meaux.</p>",
        },
        {
          question:
            "Les fientes ont-elles déjà causé des dégâts irréversibles sur mon balcon d'immeuble ancien ?",
          answer:
            "<p>Cela dépend de l'ancienneté de la contamination. Sur les pierres de taille des façades médiévales, l'acidité crée des taches brunâtres qui pénètrent profondément et peuvent rester visibles même après traitement professionnel. Sur les joints à la chaux fragiles, elle provoque une érosion qui fragilise structurellement les façades. Sur les ferronneries historiques, elle génère une corrosion profonde qui altère définitivement les finitions anciennes et nécessite souvent une restauration par un ferronnier spécialisé. Sur les pans de bois, elle crée des dommages combinés d'acidité et d'humidité particulièrement graves. Une intervention rapide (premières semaines) limite considérablement les dégâts patrimoniaux, mais les contaminations anciennes (plusieurs mois) laissent souvent des dommages permanents nécessitant une restauration patrimoniale coûteuse.</p>",
        },
        {
          question:
            "Comment éviter que les pigeons ne reviennent coloniser mon balcon dans le centre ancien ?",
          answer:
            "<p>Nous proposons la pose de solutions anti-pigeons adaptées à l'architecture médiévale protégée du Site Patrimonial Remarquable : pics discrets en acier inoxydable sur les rebords et corniches, filets quasi-invisibles pour les balcons, répulsifs visuels pour les structures en pierre. Ces dispositifs sont installés en respectant scrupuleusement l'intégrité esthétique et architecturale du patrimoine protégé, parfois après validation par l'Architecte des Bâtiments de France. L'inspection régulière des points de nidification typiques du centre historique (corniches médiévales, toitures en tuiles, structures en pierre) et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive. Cette prévention est particulièrement importante dans le secteur cathédrale et marché où la concentration exceptionnelle de pigeons menace constamment le patrimoine bâti ancien de Meaux.</p>",
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
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Meaux élimine acariens et poussières de chantiers, restaurant l'hygiène des intérieurs dans la commune la plus peuplée de Seine-et-Marne.",

      whyUsBullets: [
        "Double expertise chantiers et humidité : Détergent captant pour poussières minérales des quartiers en rénovation urbaine, protocole anti-acariens renforcé pour humidité fluviale de la Marne, extraction maximale pour environnements contrastés.",
        "Injection-extraction thermique différenciée : Température élevée (65-70°C) tuant les acariens des secteurs humides, captation des poussières abrasives de chantiers, extraction maximale critique dans l'humidité des bords de Marne, produits hypoallergéniques.",
        "Organisation pour ville complexe : Portage dans les rues étroites du centre historique si nécessaire, intervention en journée ou week-end, planification tenant compte des ponts sur la Marne, respect du cadre résidentiel diversifié.",
      ],

      uniqueIntro:
        "<p>Dans les appartements et maisons meldois, les textiles d'ameublement accumulent silencieusement des salissures invisibles aggravées par l'environnement urbain spécifique de cette commune la plus peuplée de Seine-et-Marne. Les logements des quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet) voient leurs textiles envahis par les poussières minérales de chantiers : particules fines de béton, ciment et plâtre qui pénètrent par les fenêtres et se logent dans les fibres des canapés, tapis et matelas, formant un dépôt blanchâtre microscopique qui s'accumule jour après jour. Ces poussières abrasives s'incrustent profondément dans les rembourrages, transportées également par les vêtements des résidents rentrant chez eux. L'humidité fluviale de la Marne crée un environnement propice à la prolifération rapide des acariens dans les logements de la Corniche et des quartiers sud près du Parc du Pâtis, ces organismes microscopiques se multipliant intensément dans cet air saturé d'humidité.</p>\n<p class=\"mt-4\">Les familles des copropriétés rénovées de Beauval ou des immeubles anciens du centre historique constatent des symptômes sans en identifier les causes environnementales multiples : irritations respiratoires aggravées par l'inhalation des poussières minérales de chantiers, rhinites matinales persistantes liées aux acariens proliférant dans l'humidité de la Marne, éternuements répétés au réveil, toux sèche inexpliquée. Les enfants développent des réactions allergiques, les personnes sensibles respirent difficilement la nuit dans les chambres dont les fenêtres donnent sur les chantiers ou les bords de Marne. Les taches visibles s'ajoutent au problème sanitaire invisible : traces de vie quotidienne, auréoles d'humidité dans les logements proches de la rivière, dépôts blanchâtres sur les textiles foncés dans les quartiers en travaux.</p>\n<p class=\"mt-4\">Sans intervention professionnelle, la situation sanitaire se dégrade inexorablement dans les deux types d'environnements. Les poussières minérales de chantiers s'accumulent et deviennent une source d'irritation respiratoire permanente dans les quartiers en rénovation. Les acariens prolifèrent dans l'humidité constante des bords de Marne, leurs déjections deviennent la principale source d'allergies respiratoires. Les particules abrasives usent prématurément les fibres des textiles de qualité. Un nettoyage professionnel à domicile change radicalement cette situation sanitaire contrastée. L'injection-extraction à eau chaude tue les acariens qui prolifèrent dans l'humidité meldoise, extrait les poussières minérales incrustées et les déjections allergisantes, dissout les dépôts invisibles. L'intervention devient un acte de prévention sanitaire indispensable, particulièrement important dans l'environnement de Meaux où la qualité de l'air intérieur est directement menacée par les conditions extérieures : chantiers massifs de rénovation urbaine d'un côté, humidité fluviale de l'autre.</p>",

      uniqueDeepDive:
        "<h3>1. Diagnostic textile et identification des contaminations environnementales</h3>\n<p>Le technicien examine chaque élément à traiter : type de tissu (textiles techniques dans les copropriétés rénovées, tissus plus anciens dans le centre historique), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles et interroge les occupants sur les problèmes rencontrés et leur localisation : irritations respiratoires et présence de poussière blanchâtre pour les quartiers en rénovation urbaine (Beauval, Dunant, La Pierre Collinet), allergies respiratoires aggravées et sensation d'humidité pour les secteurs proches de la Marne (Corniche, quartiers sud près du Parc du Pâtis), symptômes mixtes pour le centre-ville. Cette analyse permet de sélectionner le protocole adapté : détergent captant pour poussières minérales de chantiers, température élevée (65-70°C) obligatoire pour tuer les acariens proliférant dans l'humidité fluviale, extraction maximale critique pour limiter l'eau résiduelle dans les environnements déjà humides.</p>\n\n<h3>2. Pré-traitement ciblé et injection-extraction thermique différenciée</h3>\n<p class=\"mt-4\">Les zones contaminées reçoivent un pré-traitement spécifique selon le secteur : détergent captant pour poussières minérales dans les logements des quartiers en chantiers, neutralisant d'odeurs pour zones imprégnées par l'humidité de la Marne, traitement anti-acariens préalable pour textiles très contaminés des bords de Marne, détachant enzymatique pour matières organiques. Après un temps de pose, la machine d'injection-extraction pulvérise un mélange d'eau chaude (65-70°C) et de détergent hypoallergénique au cœur des fibres. Cette température élevée est absolument indispensable pour tuer les acariens adultes, larves et œufs qui prolifèrent dans l'environnement humide des secteurs proches de la Marne. L'aspiration immédiate et puissante retire l'eau sale chargée de poussières minérales de chantiers, d'acariens morts, de leurs déjections allergisantes et de particules abrasives. Le technicien effectue plusieurs passages sur les zones très sollicitées et sur les textiles des logements exposés aux multi-facteurs de contamination.</p>\n\n<h3>3. Extraction maximale et conseils anti-contamination par environnement</h3>\n<p class=\"mt-4\">L'extraction puissante est absolument critique pour limiter l'humidité résiduelle dans les rembourrages, point particulièrement essentiel dans les secteurs proches de la Marne déjà saturés d'humidité fluviale. Le séchage complet intervient sous 6 à 10 heures selon la ventilation et l'exposition : durée rallongée dans les quartiers humides de la Corniche et du Parc du Pâtis, plus rapide dans les logements bien ventilés du centre. Le technicien conseille impérativement d'aérer la pièce en ouvrant largement les fenêtres pour évacuer l'humidité, mais en évitant les heures d'activité intense des chantiers pour les logements de Beauval, Dunant et La Pierre Collinet afin de limiter l'entrée de nouvelles poussières minérales. Il recommande un aspirateur hebdomadaire avec filtre HEPA capturant acariens et poussières fines, la fermeture des fenêtres pendant les phases de déconstruction/reconstruction dans les quartiers en chantiers, l'utilisation de housses anti-acariens sur les matelas (indispensable dans l'humidité des bords de Marne), et un nettoyage professionnel annuel pour les foyers exposés aux multi-facteurs de contamination ou avec personnes allergiques.</p>",

      specificChallenges: [
        "Poussières minérales de chantiers incrustées : Les textiles des logements de Beauval, Dunant et La Pierre Collinet accumulent des particules abrasives (béton, ciment, plâtre) qui s'incrustent profondément, irritent les voies respiratoires et nécessitent un détergent captant spécifique.",
        "Prolifération d'acariens favorisée par l'humidité de la Marne : Les logements de la Corniche et des quartiers sud près du Parc du Pâtis subissent une hygrométrie élevée accélérant la multiplication des acariens, nécessitant un traitement thermique rigoureux et une extraction maximale.",
        "Contamination mixte dans certains secteurs : Les logements du centre-ville peuvent cumuler poussières urbaines, humidité fluviale et passage piéton intense, nécessitant un protocole combiné pour traiter efficacement les multi-sources de contamination.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il les poussières de chantiers qui irritent mes voies respiratoires ?",
          answer:
            "<p>Oui, l'injection-extraction avec détergent captant spécifique dissout et extrait les particules minérales (béton, ciment, plâtre) qui se sont incrustées dans les fibres depuis le début des travaux de rénovation urbaine. Ces poussières abrasives microscopiques, responsables des irritations respiratoires et de la toux sèche, sont extraites avec l'eau sale. Les habitants des quartiers Beauval, Dunant et La Pierre Collinet particulièrement exposés aux chantiers constatent une amélioration notable des symptômes respiratoires sous 48 à 72h. Pour limiter la recontamination rapide, fermez les fenêtres pendant les phases de déconstruction/reconstruction et renouvelez le nettoyage trimestriellement pendant les travaux actifs.</p>",
        },
        {
          question:
            "Le nettoyage élimine-t-il les acariens qui prolifèrent dans l'humidité de la Marne ?",
          answer:
            "<p>Oui, l'injection-extraction à eau chaude (65-70°C) tue les acariens adultes, larves et œufs par choc thermique. Cette température est particulièrement importante dans les secteurs proches de la Marne (Corniche, quartiers sud près du Parc du Pâtis) où l'humidité fluviale favorise leur prolifération rapide, bien supérieure aux zones urbaines sèches. L'aspiration puissante retire ensuite les acariens morts et leurs déjections allergisantes. Les familles exposées à l'humidité fluviale constatent généralement une amélioration notable des symptômes (rhinites, éternuements, irritations) sous 48 à 72h. Pour maintenir ce résultat, nous recommandons impérativement un nettoyage annuel et l'utilisation de housses anti-acariens.</p>",
        },
        {
          question:
            "Combien de temps avant de pouvoir réutiliser mon canapé dans un logement proche de la Marne ?",
          answer:
            "<p>Le séchage complet intervient sous 6 à 10 heures à Meaux, durée variable selon le secteur : plus longue dans les quartiers proches de la Marne (Corniche, secteurs sud près du Parc du Pâtis) en raison de l'humidité fluviale ambiante, plus rapide dans les logements bien ventilés du centre ou des quartiers rénovés. Vous pouvez vous asseoir légèrement sur les accoudoirs dès 3 à 4h, mais évitez de vous installer complètement avant séchage total pour ne pas écraser les fibres humides. Aérez impérativement la pièce en ouvrant largement les fenêtres, sauf pendant les phases actives de chantiers si vous êtes à Beauval, Dunant ou La Pierre Collinet.</p>",
        },
        {
          question:
            "Mon matelas dans un appartement de Beauval accumule-t-il vraiment les poussières de chantiers ?",
          answer:
            "<p>Oui, les poussières minérales générées par les programmes de rénovation urbaine sont si fines qu'elles pénètrent partout, y compris dans les chambres et les matelas. Même fenêtres fermées, elles s'infiltrent par les aérations et se déposent sur toutes les surfaces. Ces particules abrasives s'incrustent dans les fibres et peuvent irriter les voies respiratoires pendant le sommeil, générant toux nocturne et inconfort respiratoire au réveil. Un nettoyage professionnel trimestriel pendant les phases actives de travaux extrait ces poussières avant qu'elles ne causent des irritations chroniques. Une fois les chantiers terminés dans votre secteur, un rythme annuel suffira pour maintenir l'hygiène du matelas.</p>",
        },
      ],

      ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage complet de votre terrasse selon le matériau, élimination des mousses et salissures accumulées, et application d'un traitement préventif pour limiter la repousse.",
      whyUsBullets: [
        "Intervention sur les secteurs pavillonnaires de Meaux : proximité du parc du Pâtis.",
        "Adaptation du protocole aux matériaux rencontrés : pierre naturelle des maisons bourgeoises, béton des constructions années 60-80, grès cérame des aménagements récents.",
        "Respect des abords : protection des plantations, mobilier et menuiseries, évacuation maîtrisée des eaux de rinçage.",
      ],
      uniqueIntro:
        "<p>À Meaux, les terrasses des maisons individuelles font face à des conditions particulières. La proximité de la Marne et du <strong>parc du Pâtis</strong> génère un taux d'humidité favorable au développement des mousses et algues. Les secteurs résidentiels concentrent un habitat varié, des villas bourgeoises aux pavillons plus modestes, avec des terrasses de natures très différentes.</p>\n\n<p class=\"mt-4\">Sur les <strong>dalles en pierre naturelle</strong> des propriétés anciennes du centre ou sur les <strong>revêtements béton</strong> des quartiers construits après-guerre, les dépôts biologiques s'accumulent au fil des saisons. Les joints se verdissent, la surface devient glissante après la pluie, et l'aspect général de l'espace extérieur se dégrade progressivement.</p>\n\n<p class=\"mt-4\">Chaque support nécessite une approche spécifique. L'évaluation préalable détermine la méthode adaptée au matériau, à son état et aux contraintes d'accès propres à chaque configuration.</p>",
      uniqueDeepDive:
        "<h3>État des lieux et préparation</h3>\n<p>Le mobilier extérieur et les jardinières sont mis à l'abri ou protégés par bâchage. Les huisseries et seuils de portes reçoivent une protection contre les projections. Un dégagement des débris, feuilles mortes et résidus végétaux précède tout traitement.</p>\n\n<h3>Décrassage adapté au support</h3>\n<p>Le produit de nettoyage est sélectionné en fonction du matériau identifié : formulation alcaline pour les surfaces minérales, solution neutre pour les bois et composites. L'action mécanique par brossage ou monobrosse décolle les dépôts incrustés. La pression de rinçage est calibrée pour éliminer les résidus sans fragiliser les joints ou le revêtement.</p>\n\n<h3>Traitement préventif et conseils</h3>\n<p>Les zones les plus exposées à l'ombre ou à l'humidité reçoivent un traitement anti-mousse qui ralentit la réapparition des dépôts. L'eau de rinçage est orientée vers les évacuations existantes. Des recommandations d'entretien saisonnier sont transmises pour maintenir le résultat dans la durée.</p>",
      specificChallenges: [
        "Pierre naturelle poreuse des villas anciennes de République-Gambetta : risque de taches si produit inadapté.",
        "Dalles béton vieillissantes des pavillons années 60-80 : joints fragilisés nécessitant une pression contrôlée.",
        "Carrelage grès cérame texturé : encrassement dans les micro-reliefs difficile à atteindre.",
        "Terrasses bois ou composite des rénovations récentes : sensibilité aux produits chlorés et à la haute pression.",
        "Humidité persistante liée à la proximité de la Marne et des espaces boisés du parc du Pâtis.",
      ],
      faqAdditions: [
        {
          question:
            "Comment nettoyez-vous une terrasse en pierre naturelle sans risquer de l'abîmer ?",
          answer:
            "<p>La pierre naturelle, fréquente sur les propriétés anciennes de Meaux, reçoit un traitement à pH neutre ou légèrement alcalin, jamais acide. Le brossage reste manuel sur les pierres tendres comme le calcaire. Le rinçage s'effectue à basse pression pour préserver la patine et éviter toute infiltration dans les pores du matériau.</p>",
        },
        {
          question:
            "Ma terrasse béton présente des traces noires le long des murs, est-ce traitable ?",
          answer:
            "<p>Ces traces noires correspondent généralement à des coulures de pollution ou à des développements d'algues liés au ruissellement. Un produit désincrustant adapté aux supports minéraux permet de les atténuer significativement. Le traitement préventif appliqué ensuite limite leur réapparition.</p>",
        },
        {
          question:
            "Quelle différence entre un nettoyage haute pression et votre méthode pour le bois composite ?",
          answer:
            "<p>La haute pression standard peut marquer durablement le bois composite et détériorer sa finition. Notre intervention privilégie un produit spécifique à pH neutre combiné à un brossage adapté, suivi d'un rinçage à pression très modérée qui préserve l'intégrité des lames et leur teinte d'origine.</p>",
        },
        {
          question:
            "Combien de temps dure l'effet du traitement anti-mousse sur une terrasse ombragée ?",
          answer:
            "<p>Sur les terrasses fortement ombragées, l'efficacité du traitement préventif varie selon l'exposition et les conditions météo. En moyenne, le ralentissement de la repousse se constate sur plusieurs mois. Un entretien régulier, notamment un balayage des débris végétaux, prolonge ce résultat.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
      serviceKey: "nettoyage-appartement-maison",

      heroDescription:
        "Spécialiste fin de bail, remise en état après travaux, grand ménage ou logement très encrassé.",

      whyUsBullets: [
        "Organisation pensée pour Meaux : accès centre piéton/rues médiévales, stationnement réglementé, et volumes plus importants dans les quartiers denses (Beauval).",
        "Rendu orienté état des lieux : cuisine/SDB (calcaire), sols et finitions visibles (plinthes, portes, interrupteurs), plus vitrages quand l’exposition route/ville marque rapidement.",
        "Capacité à gérer des configurations très différentes : appartements de rotation (Beauval/Dunant), bâtis atypiques du centre, maisons familiales avec étages et extérieurs.",
      ],

      uniqueIntro:
        '<p>À Meaux, un nettoyage d’appartement ou de maison ne se résume pas à “faire propre” : la ville mélange un <strong>centre ancien</strong> avec accès parfois contraints (rues étroites, stationnement réglementé) et des secteurs plus “grands volumes” comme <strong>Beauval</strong>, où la rotation de logements et la densité imposent une intervention structurée. C’est aussi une commune qui vit au rythme de la <strong>gare de Meaux (ligne P)</strong> et des pôles administratifs, ce qui crée des besoins récurrents de remise en état (déménagements, états des lieux, fin de chantier).</p>\n<p class="mt-4">Le centre-ville autour de la <strong>Cathédrale Saint-Étienne</strong> et du Marché offre souvent des surfaces atypiques : parquets anciens, escaliers étroits, pièces en enfilade, lucarnes ou petites menuiseries. À l’inverse, les zones plus récentes (secteur <strong>Foch</strong> / opérations neuves) demandent surtout des finitions nettes sur baies vitrées, sols modernes et salles d’eau où le calcaire se voit vite.</p>\n<p class="mt-4">Klinova intervient à Meaux avec une méthode “résultat + logistique” : cadrer le périmètre (pièces, niveau d’encrassement, accès), traiter les zones à impact (cuisine/SDB, sols), puis sécuriser les finitions. Objectif : un rendu cohérent, compatible avec une visite d’état des lieux ou une remise en état avant location/vente, sans perdre de temps sur une organisation mal anticipée.</p>',

      uniqueDeepDive:
        "<h3>Centre-ville / Cathédrale / Marché — accès contraints et finitions minutieuses</h3>\n<p>Dans le cœur historique, l’enjeu principal est le couple “accès + précision”. On planifie l’arrivée, le déchargement et l’ordre des pièces pour éviter de re-salir. Les parquets anciens et les escaliers demandent une approche mesurée, et les détails (plinthes, moulures, portes, joints) font la différence sur le rendu final.</p>\n\n<h3>Beauval / Dunant — rotation locative et volumes collectifs</h3>\n<p>Sur les secteurs denses, on travaille en séquence : cuisine et salle d’eau d’abord (zones qui “vendent” le résultat), puis sols et finitions, en gardant une logique de sortie propre. Les accès (digicodes, gardiens) et les ascenseurs influencent le tempo : tout est prévu pour limiter les allers-retours et tenir un créneau réaliste.</p>\n\n<h3>Saint-Faron / pavillonnaire — maisons, étages et extérieurs</h3>\n<p>Les maisons demandent une progression par zones (haut/bas) et une attention particulière aux traces de circulation (escaliers, entrées, couloirs). Les vérandas, Velux et baies vitrées sont fréquents, tout comme les petites terrasses ou abords de jardin : on adapte le périmètre selon l’objectif (grand ménage, déménagement, remise en état avant vente).</p>",

      specificChallenges: [
        "Centre historique : rues étroites, stationnement réglementé, escaliers sans ascenseur et surfaces atypiques à traiter avec précision.",
        "Beauval : volumes collectifs et rotation de logements, avec accès digicode/gardien et contraintes d’ascenseurs.",
        "Ville pendulaire (gare Ligne P) : demandes fréquentes en fin de bail et délais parfois courts.",
        "Eau calcaire (77) : salles d’eau et robinetteries qui marquent vite, surtout sur logements de rotation.",
        "Vitrages variés : lucarnes/bois ancien en centre, grandes baies dans le récent (Foch), nécessitant une approche différente.",
        "Zones Marché / samedi matin : créneaux à éviter pour l’accès et le stationnement.",
      ],

      faqAdditions: [
        {
          question:
            "Intervenez-vous à Meaux (77100) pour un nettoyage avant état des lieux ?",
          answer:
            "<p>Oui. Nous cadrons le périmètre puis nous priorisons ce qui est le plus contrôlé : cuisine, salle d’eau, sols et finitions visibles (plinthes, interrupteurs, portes, encadrements). En centre-ville, on anticipe aussi l’accès et le déchargement pour éviter les retards liés au stationnement.</p>",
        },
        {
          question:
            "Pouvez-vous faire un nettoyage après travaux (plâtre/peinture) à Meaux ?",
          answer:
            "<p>Oui. Après travaux, la difficulté vient de la poussière fine et des traces sur menuiseries, plinthes et sols. Nous organisons un dépoussiérage structuré, puis la remise en état des surfaces, avec une attention particulière aux parquets anciens du centre et aux baies vitrées des logements récents.</p>",
        },
        {
          question:
            "Nettoyez-vous les vitrages (baies, Velux, petites fenêtres du centre) ?",
          answer:
            "<p>Sur demande, oui pour les vitrages accessibles et les encadrements. À Meaux, c’est souvent pertinent : petites menuiseries en centre ancien (traces et poussières) ou grandes baies dans les résidences récentes, où le rendu se joue sur la transparence et l’absence de traces.</p>",
        },
        {
          question:
            "Le logement est à Beauval : est-ce différent d’un nettoyage en centre-ville ?",
          answer:
            "<p>Oui, surtout côté organisation. À Beauval, on anticipe les accès (digicode, gardien, ascenseur) et on travaille en séquence pour conserver des sols propres jusqu’à la sortie. En centre-ville, l’enjeu est davantage l’accès, les escaliers et la finesse sur les surfaces anciennes.</p>",
        },
      ],

      ctaOverride: "",
    },
  ],
};

export default city;
