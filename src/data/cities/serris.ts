// src/data/cities/serris.ts
import type { City } from "~/types/geo";

const city: City = {
  name: "Serris",
  slug: "serris",
  postalCodes: ["77700"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  customDescription:
    "Ville phare du Val d'Europe au style néo-haussmannien soigné, Serris combine copropriétés de haut standing, résidences de tourisme et flux piétons massifs liés à Disneyland Paris. La proximité du RER A et du pôle commercial génère un encrassement accéléré des parties communes, tandis que les chantiers de développement urbain imposent un entretien régulier des surfaces intérieures et extérieures.",

  hubIntro: `<p>Serris présente un parc immobilier récent et exigeant, avec des copropriétés de haut standing, des résidences de services et des appart-hôtels nécessitant des protocoles adaptés aux standards hôteliers. <strong>Klinova intervient en partenariat avec les syndics, conciergeries et gestionnaires</strong> pour assurer l'entretien des parties communes, parkings souterrains et surfaces privées, en tenant compte des contraintes d'accès sécurisées et du trafic touristique intense.</p>
<p>Nos équipes connaissent les spécificités locales : flux piétons massifs liés à Disneyland Paris et au RER A Val d'Europe, parkings souterrains aux hauteurs limitées (1m90), poussières de chantiers des secteurs en développement. Nous déployons des véhicules utilitaires compacts et des protocoles ajustés aux matériaux de standing (pierres naturelles, carrelages grand format, parquets stratifiés) avec une traçabilité complète pour répondre aux exigences des résidences sécurisées.</p>
<ul>
  <li>Adaptation aux résidences sécurisées : Coordination avec conciergeries et syndics pour codes d'accès, badges et barrières automatiques, protocoles discrets conformes aux standards hôteliers des résidences de services et appart-hôtels.</li>
  <li>Maîtrise des contraintes logistiques : Véhicules utilitaires compacts adaptés aux parkings souterrains à hauteur limitée (1m90), planification en dehors des pics de saturation touristique week-ends et vacances, stationnement géré en sous-sols privés.</li>
  <li>Protocoles adaptés aux matériaux de standing : Méthodes soignées pour pierres de taille et enduits clairs sensibles aux coulures, carrelages grand format et pierres naturelles des halls, parquets stratifiés haute résistance typiques du parc immobilier serrisien récent.</li>
</ul>`,

  citySpecificChallenges: [
    "Flux piétons massifs liés à Disneyland Paris et au RER A Val d'Europe générant une usure accélérée des moquettes et sols des halls d'immeubles, particulièrement près de la gare",
    "Parkings souterrains à hauteur limitée stricte (1m90) imposant des véhicules utilitaires compacts et une planification logistique précise pour accéder aux résidences",
    "Poussières de construction des secteurs en développement encrassant rapidement les surfaces extérieures et les parkings des résidences récentes",
    "Résidences sécurisées à codes, badges et barrières automatiques nécessitant une coordination parfaite avec syndics et conciergeries pour chaque intervention",
  ],

  districts: [
    "Le Centre Urbain (Place d'Ariane)",
    "Le Quartier du Lac",
    "Le Bourg",
    "Serris-Sud (Quartier des Studios)",
    "La Vallée (Zone commerciale)",
  ],

  nearbyCities: [
  "bussy-saint-georges",
  "champs-sur-marne",
  "lagny-sur-marne",
  "meaux",
  "torcy",
  "vaires-sur-marne",
],

  landmarks: [
    "Mairie de Serris",
    "Gare du Val d'Europe (RER A)",
    "Centre Commercial Val d'Europe",
    "La Vallée Village",
    "Lac de Serris",
    "Place d'Ariane",
    "Place de Toscane",
    "Parc des Communes",
  ],

  faq: [
    {
      question:
        "Q1 : Intervenez-vous rapidement malgré le trafic touristique intense du Val d'Europe ?",
      answer: `<p><strong>Oui, nous planifions chaque intervention en tenant compte des pics de saturation</strong> autour du centre commercial Val d'Europe, de La Vallée Village et de la gare RER A. Nos techniciens privilégient les créneaux en semaine hors vacances scolaires et évitent les week-ends touristiques. Nous utilisons des véhicules utilitaires compacts adaptés aux parkings souterrains à hauteur limitée (1m90) pour accéder directement aux résidences sans saturer la voirie de surface.</p>`,
    },
    {
      question:
        "Q2 : Le diagnostic sur site est-il gratuit pour toutes les résidences de Serris ?",
      answer: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Centre Urbain, Quartier du Lac, Le Bourg, Serris-Sud, secteur La Vallée). Le technicien évalue les surfaces, identifie les contraintes spécifiques (matériaux de standing, accès sécurisé, flux touristique) et remet un chiffrage détaillé sous 48h adapté à votre copropriété ou résidence de services.</p>`,
    },
    {
      question:
        "Q3 : Comment gérez-vous les accès dans les résidences sécurisées avec codes et badges ?",
      answer: `<p><strong>Nous coordonnons systématiquement avec la conciergerie ou le syndic</strong> pour obtenir les codes d'accès, badges et autorisations de passage aux barrières automatiques avant chaque intervention. Ces informations sont transmises au technicien 48h à l'avance. Pour les résidences de services et appart-hôtels exigeant discrétion et rapidité, nous adaptons nos horaires et notre organisation pour limiter toute visibilité auprès des résidents ou clients.</p>`,
    },
    {
      question:
        "Q4 : Vos méthodes sont-elles adaptées aux matériaux de standing des immeubles récents ?",
      answer: `<p><strong>Oui, nous ajustons systématiquement nos protocoles selon les supports</strong>. Les pierres de taille et enduits clairs des façades néo-haussmanniennes reçoivent des produits neutres et une pression modérée pour éviter coulures et traces. Les carrelages grand format et pierres naturelles des halls sont traités avec des détergents adaptés préservant les joints. Les parquets stratifiés haute résistance nécessitent une extraction maximale pour limiter l'humidité résiduelle. Ces adaptations techniques sont essentielles dans le parc immobilier serrisien récent et exigeant.</p>`,
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
        "Le nettoyage professionnel des moquettes à Serris préserve l'aspect soigné des halls d'immeubles de standing tout en gérant l'usure accélérée liée aux flux piétons massifs du Val d'Europe.",

      whyUsBullets: [
        "Connaissance de l'environnement serrisien spécifique : Intervention régulière dans les copropriétés du Centre Urbain, du Quartier du Lac et de Serris-Sud, avec maîtrise des contraintes liées aux flux touristiques et aux résidences sécurisées.",
        "Matériel adapté aux parkings souterrains : Véhicules utilitaires compacts conformes aux hauteurs limitées (1m90), machines d'injection-extraction haute performance pour traiter l'usure accélérée, extraction maximale pour séchage rapide.",
        "Coordination avec conciergeries et syndics : Gestion des codes d'accès et badges, planification en dehors des pics touristiques, protocoles discrets conformes aux standards des résidences de services et appart-hôtels.",
      ],

      uniqueIntro: `<p>Les copropriétés serrisiennes subissent un encrassement particulier lié à leur environnement touristique exceptionnel. Les immeubles proches de la gare RER A Val d'Europe et du centre commercial accueillent quotidiennement des flux piétons importants : résidents travaillant à Paris, touristes en transit vers Disneyland, visiteurs du pôle commercial. Les moquettes des halls et cages d'escalier accumulent rapidement particules fines, poussières de valises, traces de pas mouillées et salissures transportées depuis les parkings souterrains.</p>
<p class="mt-4">Les copropriétaires du Centre Urbain ou du Quartier du Lac constatent cette usure accélérée : les seuils d'entrée ternissent en quelques mois malgré l'entretien quotidien, les zones devant les ascenseurs forment des traînées grises, les paliers du rez-de-chaussée gardent des traces visibles. Les poussières des chantiers de développement de Serris-Sud ajoutent une couche supplémentaire d'encrassement. Cette dégradation rapide contraste avec l'architecture néo-haussmannienne soignée et le standing attendu des résidences. Les conseils syndicaux et conciergeries reçoivent des observations, conscients que l'image des parties communes impacte directement la valeur perçue des biens.</p>
<p class="mt-4">Un nettoyage professionnel structuré répond à ces exigences. Il extrait les salissures profondes accumulées par le flux touristique, ravive les couleurs d'origine et prolonge la durée de vie du revêtement. L'intervention devient un acte de maintenance préventive indispensable pour maintenir le niveau de standing des copropriétés serrisiennes face à une sollicitation quotidienne bien supérieure aux résidences classiques.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique adapté aux flux intenses</h3>
<p>Le technicien identifie le type de moquette (fibres synthétiques haute résistance typiques des immeubles récents, bouclées épaisses pour zones de fort trafic), évalue le niveau d'encrassement (particules fines, traces de valises, boue de parkings) et repère les zones critiques (seuils donnant sur l'extérieur, devant les ascenseurs, paliers du rez-de-chaussée exposés au flux touristique). Il note les contraintes d'accès : parkings souterrains à hauteur limitée (1m90) nécessitant un véhicule compact, codes et badges pour accéder aux résidences sécurisées, horaires à privilégier pour limiter la gêne dans les résidences de services. Cette analyse détermine la puissance d'injection, le nombre de passes nécessaires et le temps d'intervention optimal.</p>
<h3>2. Injection-extraction avec passes multiples sur zones de trafic</h3>
<p class="mt-4">La machine pulvérise un mélange d'eau chaude (65-70°C) et de détergent professionnel au cœur des fibres, délogeant les particules accumulées par le flux piéton quotidien. L'aspiration immédiate retire l'eau sale avant saturation du support, point critique pour maintenir un séchage rapide compatible avec l'occupation permanente des immeubles. Sur les zones de fort trafic (seuils, devant les ascenseurs, zones de passage vers parkings), plusieurs passages successifs extraient les salissures les plus tenaces. Les fibres synthétiques haute résistance des moquettes récentes tolèrent ce traitement intensif sans dégradation. L'extraction puissante garantit un taux d'humidité résiduelle minimal, essentiel pour une réouverture rapide des zones traitées.</p>
<h3>3. Séchage accéléré et recommandations de fréquence adaptée</h3>
<p class="mt-4">Le séchage complet intervient sous 6 à 8 heures grâce à l'extraction maximale. Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés serrisiennes exposées aux flux touristiques massifs (immeubles du Centre Urbain, résidences proches de la gare Val d'Europe), un nettoyage semestriel maintient le niveau de propreté attendu. Les résidences du Quartier du Lac, moins exposées au trafic, peuvent espacer les interventions à un rythme annuel. Les seuils d'entrée très sollicités nécessitent parfois un traitement localisé trimestriel pour compenser l'usure accélérée.</p>`,

      specificChallenges: [
        "Usure accélérée par les flux touristiques : Les immeubles proches de la gare Val d'Europe et du centre commercial subissent un passage piéton quotidien intense avec valises et bagages, accélérant l'encrassement et nécessitant une fréquence d'intervention renforcée.",
        "Poussières de chantiers de développement : Les secteurs en extension de Serris-Sud génèrent des particules fines qui pénètrent les halls d'immeubles et s'incrustent dans les fibres, exigeant un détergent adapté et plusieurs passes d'extraction.",
        "Contraintes logistiques des parkings souterrains : Les hauteurs limitées strictes (1m90) imposent des véhicules compacts et une planification précise, tandis que les accès sécurisés nécessitent une coordination parfaite avec les gestionnaires.",
      ],

      faqAdditions: [
        {
          question:
            "Q1 : Les moquettes des immeubles proches de la gare Val d'Europe nécessitent-elles un entretien plus fréquent ?",
          answer:
            "Oui, le flux piéton quotidien lié aux trajets Paris-Val d'Europe et au tourisme Disney génère une usure et un encrassement bien supérieurs aux copropriétés classiques. Les particules transportées, les traces de valises et l'humidité des jours de pluie s'accumulent rapidement. Nous recommandons un nettoyage semestriel pour les immeubles du Centre Urbain très exposés, et un traitement localisé trimestriel sur les seuils d'entrée pour maintenir l'aspect soigné attendu dans les résidences de standing serrisiennes.",
        },
        {
          question:
            "Q2 : Intervenez-vous dans les résidences de services et appart-hôtels avec leurs exigences spécifiques ?",
          answer:
            "Absolument. Nous adaptons nos protocoles aux standards hôteliers : intervention en dehors des heures de passage des clients, discrétion maximale, séchage accéléré pour réouverture rapide des zones, coordination avec la conciergerie pour accès et organisation. Notre expérience dans les résidences de services du Val d'Europe nous permet de respecter les exigences de rapidité et d'hygiène propres à ce type d'établissement, tout en maintenant la qualité d'extraction nécessaire.",
        },
        {
          question:
            "Q3 : Votre matériel peut-il accéder aux parkings souterrains à hauteur limitée de Serris ?",
          answer:
            "Oui, nous utilisons des véhicules utilitaires compacts spécialement sélectionnés pour respecter la hauteur limite stricte de 1m90 typique des parkings souterrains serrisiens. Nous effectuons systématiquement une vérification préalable des contraintes (hauteur, largeur de rampe, codes d'accès) lors du diagnostic. Cette adaptation logistique nous permet d'accéder directement aux résidences sans encombrer la voirie de surface saturée par le trafic touristique.",
        },
        {
          question:
            "Q4 : Comment organisez-vous l'intervention dans les résidences sécurisées avec codes et badges ?",
          answer:
            "Nous coordonnons avec le syndic ou la conciergerie 72h à l'avance pour obtenir tous les codes d'accès, badges temporaires et autorisations de passage aux barrières automatiques. Ces informations sont transmises au technicien avant son départ. Pour les résidences du Centre Urbain et du Quartier du Lac hautement sécurisées, nous signons parfois des protocoles spécifiques et respectons des créneaux horaires définis. Cette rigueur organisationnelle est indispensable dans l'environnement serrisien où la sécurité des résidences est une priorité.",
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
        "Le nettoyage professionnel des parkings souterrains serrisiens restaure la propreté des sols tout en gérant les contraintes de hauteur limitée et l'organisation par rotation pour préserver le confort des résidents et clients des résidences de services.",

      whyUsBullets: [
        "Maîtrise des parkings souterrains serrisiens : Intervention régulière dans les sous-sols des résidences du Centre Urbain, du Quartier du Lac et de Serris-Sud, avec adaptation aux hauteurs limitées strictes et aux accès sécurisés.",
        "Équipement compact certifié hauteur 1m90 : Autolaveuse de faible gabarit (< 1m80) spécialement sélectionnée pour les parkings serrisiens, techniques adaptées aux sols récents en résine ou béton lissé, séchage rapide pour réouverture accélérée.",
        "Coordination fluide avec conciergeries et syndics : Planification par rotation respectant les places nominatives, information préalable détaillée, intervention en semaine hors pics touristiques, compte-rendu systématique conforme aux standards de gestion des résidences de standing.",
      ],

      uniqueIntro: `<p>Les parkings souterrains des copropriétés serrisiennes présentent une configuration particulière liée à l'architecture récente et soignée de la ville. La quasi-totalité des résidences du Centre Urbain, du Quartier du Lac et de Serris-Sud disposent de parkings souterrains privés avec des hauteurs sous plafond strictement limitées (souvent 1m90), imposant une sélection rigoureuse du matériel d'intervention. L'encrassement provient de sources multiples : poussières fines des chantiers de développement urbain, boue de terrassement transportée par les pneus, particules de pollution liées à la forte fréquentation automobile du secteur touristique.</p>
<p class="mt-4">Les copropriétaires et gestionnaires de résidences de services constatent cette dégradation progressive : marquages au sol qui se ternissent rapidement, taches d'huile qui s'étendent, dépôts de poussière blanchâtre liés aux chantiers, sensation de négligence qui contraste avec le standing des halls d'entrée. Les conseils syndicaux et conciergeries reçoivent des demandes d'intervention, mais l'organisation semble complexe : comment gérer le stationnement pendant les travaux dans des résidences où chaque place est comptée et souvent attribuée nominativement ? Quel créneau choisir pour limiter la gêne des résidents travaillant à Paris ou des clients d'appart-hôtels ? Quel matériel utiliser avec une hauteur limitée stricte ?</p>
<p class="mt-4">Un décrassage structuré et coordonné répond à ces préoccupations. Il restaure la propreté des sols, améliore la visibilité des marquages et renforce la sécurité en éliminant les zones glissantes. L'intervention devient un acte de gestion préventive, valorisant le patrimoine immobilier récent et maintenant le niveau de standing attendu dans les résidences serrisiennes.</p>`,

      uniqueDeepDive: `<h3>1. Diagnostic technique et planification résidentielle</h3>
<p>Le technicien visite le parking pour vérifier la hauteur sous plafond exacte (souvent 1m90, parfois moins dans certaines zones), identifier le type de revêtement (béton lissé, résine époxy ou peinture de sol typiques des parkings récents), tester l'état des siphons et caniveaux, et repérer les zones problématiques (rampes d'accès, emplacements visiteurs, zones de fort passage). Il note la configuration typique des résidences serrisiennes : 30 à 80 places selon la taille de la copropriété, souvent avec places nominatives et résidents attachés à leur emplacement. Cette analyse permet d'organiser l'intervention par rotation (moitié A puis moitié B, ou étage par étage) en coordonnant avec le syndic ou la conciergerie pour informer les résidents et minimiser la gêne.</p>
<h3>2. Décrassage par autolaveuse compacte et traitement adapté</h3>
<p class="mt-4">Le balayage mécanique élimine d'abord les poussières de chantier, gravillons et débris accumulés. L'autolaveuse compacte (hauteur &lt; 1m80) brosse ensuite le sol avec un mélange d'eau chaude et de produit nettoyant, puis aspire immédiatement les eaux sales. Les sols en résine époxy ou béton lissé typiques des parkings récents nécessitent un détergent adapté préservant les finitions. Les taches d'huile sont traitées localement avec un dégraissant professionnel. Les dépôts de poussière blanchâtre des chantiers de Serris-Sud sont éliminés par brossage et rinçage. Les rampes, pieds de poteaux et angles sont nettoyés manuellement pour garantir une propreté homogène. L'eau de lavage est collectée et évacuée conformément aux normes.</p>
<h3>3. Rotation coordonnée et suivi de gestion</h3>
<p class="mt-4">L'intervention est organisée par zones successives : moitié ouest le matin, moitié est l'après-midi, ou par niveau selon la configuration. Les résidents et clients sont informés 72h à l'avance par le syndic ou la conciergerie et peuvent stationner temporairement dans la zone non traitée ou sur les emplacements visiteurs. Le parking reste accessible en permanence, seule la zone en cours de lavage est momentanément condamnée le temps du séchage rapide (2-3h). Un compte-rendu avec photos avant/après est remis au gestionnaire, pratique appréciée dans les résidences de standing et résidences de services où la traçabilité des prestations est systématique.</p>`,

      specificChallenges: [
        "Hauteur limitée stricte de 1m90 : Les parkings souterrains serrisiens imposent une contrainte de hauteur stricte nécessitant du matériel spécialement dimensionné et une vérification systématique avant chaque intervention.",
        "Poussières de chantiers de développement : Les secteurs en extension de Serris-Sud génèrent des particules fines et de la boue de terrassement qui encrassent rapidement les parkings récents, nécessitant un nettoyage plus fréquent pendant les phases de construction.",
        "Organisation du stationnement dans les résidences de services : Les appart-hôtels et résidences avec rotation de clients exigent une coordination fine pour organiser l'intervention sans perturber les arrivées et départs, tout en maintenant l'accès permanent au parking.",
      ],

      faqAdditions: [
        {
          question:
            "Q1 : Votre matériel peut-il vraiment accéder aux parkings souterrains avec hauteur limitée à 1m90 ?",
          answer:
            "Oui, nous utilisons une autolaveuse compacte spécialement dimensionnée avec une hauteur totale inférieure à 1m80, conçue précisément pour les parkings souterrains à contraintes strictes comme ceux de Serris. Nous effectuons systématiquement une visite préalable pour mesurer la hauteur exacte sous plafond, repérer les zones à hauteur variable (rampes, poutres) et valider la faisabilité technique. Cette vérification garantit une intervention sans risque pour le matériel et les installations du parking.",
        },
        {
          question:
            "Q2 : Comment organisez-vous l'intervention sans perturber les résidents qui ont des places nominatives ?",
          answer:
            "Nous travaillons par rotation planifiée : moitié A le matin, moitié B l'après-midi, ou étage par étage selon la configuration. Les résidents stationnent temporairement dans la zone non traitée ou sur les emplacements visiteurs pendant 2 à 3 heures, puis récupèrent leur place dès le séchage terminé. Le syndic ou la conciergerie informe les copropriétaires 72h à l'avance avec un plan précis indiquant les zones et horaires. Cette organisation maintient l'accès permanent au parking, point essentiel dans les résidences serrisiennes où le stationnement est compté.",
        },
        {
          question:
            "Q3 : Les poussières des chantiers de Serris-Sud nécessitent-elles des interventions plus fréquentes ?",
          answer:
            "Oui, pendant les phases actives de construction dans les secteurs en développement, les poussières fines de chantier et la boue de terrassement s'accumulent rapidement dans les parkings des résidences proches. Nous recommandons un décrassage semestriel au lieu d'annuel pour ces copropriétés, permettant de maintenir la propreté malgré l'environnement de chantier. Une fois les travaux terminés dans le secteur, la fréquence peut être espacée à un rythme annuel classique.",
        },
        {
          question:
            "Q4 : Intervenez-vous également dans les parkings des résidences de services et appart-hôtels ?",
          answer:
            "Absolument. Nous adaptons notre organisation aux contraintes spécifiques de ces établissements : intervention en semaine plutôt que week-end pour éviter les pics d'arrivées/départs, coordination avec la conciergerie pour gérer les flux de clients, séchage accéléré pour réouverture rapide, discrétion maximale. Nous comprenons que ces résidences exigent des standards hôteliers et une gêne minimale pour la clientèle. Notre expérience dans les résidences de services du Val d'Europe nous permet de respecter ces exigences tout en maintenant la qualité du décrassage.",
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
        "Le nettoyage professionnel des balcons et terrasses à Serris préserve l'aspect soigné des façades néo-haussmanniennes tout en éliminant les poussières de chantier et les dépôts urbains typiques du secteur touristique.",

      whyUsBullets: [
        "Maîtrise des matériaux récents serrisiens : Intervention régulière sur carrelages grand format, pierres naturelles et enduits clairs des copropriétés du Centre Urbain, du Quartier du Lac et de Serris-Sud, avec protocoles adaptés.",
        "Produits et pressions ajustés par support : Détergents neutres (pH 7) pour pierres et enduits sensibles, pression réduite (60-100 bars) pour préserver joints et finitions, méthodes manuelles pour garde-corps métalliques laqués.",
        "Protection rigoureuse des façades de prestige : Gestion stricte de l'eau de rinçage pour éviter coulures sur façades néo-haussmanniennes claires, coordination avec conciergeries pour accès sécurisés, finitions soignées conformes au standing attendu.",
      ],

      uniqueIntro: `<p>Les propriétaires des copropriétés serrisiennes négligent parfois l'entretien de leurs balcons, convaincus que la construction récente des immeubles les dispense d'interventions régulières. Pourtant, l'environnement urbain du Val d'Europe génère un encrassement spécifique. Les poussières fines des chantiers de développement de Serris-Sud se déposent sur les dalles et garde-corps, formant une couche blanchâtre tenace. La pollution automobile liée au trafic touristique intense autour du centre commercial et de la gare RER A dépose des particules grises sur les surfaces. Les systèmes de climatisation et ventilation massifs du secteur génèrent des dépôts atmosphériques particuliers.</p>
<p class="mt-4">Après une ou deux saisons, les balcons des immeubles du Centre Urbain ou du Quartier du Lac présentent une dégradation visible : carrelages grand format ternis, joints qui grisaillent, garde-corps métalliques couverts de traces, pierres naturelles marquées par des auréoles d'eau de pluie. Cette dégradation contraste fortement avec l'architecture néo-haussmannienne soignée et le standing attendu des résidences récentes. Les copropriétaires hésitent à intervenir : incertitude sur les produits adaptés aux matériaux récents, crainte d'endommager les façades claires en pierre de taille ou enduits poreux, inquiétude face à la gestion de l'eau de rinçage sur les façades de prestige.</p>
<p class="mt-4">Un nettoyage professionnel avec protocole technique adapté résout ces problématiques. Il élimine les salissures urbaines sans altérer les supports récents, applique les produits spécifiques selon le matériau (détergent neutre pour pierres, formule adaptée pour carrelages grand format, traitement doux pour enduits clairs) et restitue l'aspect d'origine. L'intervention devient un acte de maintenance préventive, indispensable pour préserver la valeur patrimoniale des biens serrisiens dans un environnement urbain exigeant.</p>`,

      uniqueDeepDive: `<h3>1. Identification des supports récents et diagnostic</h3>
<p>Le technicien identifie précisément les matériaux présents : carrelages grand format en grès cérame, pierres naturelles (calcaire, travertin), garde-corps métalliques (aluminium, acier laqué), enduits clairs des façades néo-haussmanniennes. Il repère les zones problématiques (poussières de chantier en exposition sud vers Serris-Sud, dépôts de pollution automobile sur les balcons donnant vers le centre commercial, traces d'eau de pluie sur les enduits clairs poreux) et évalue les contraintes d'accès (résidences sécurisées nécessitant codes et badges, coordination avec conciergerie). Cette analyse détermine le choix du produit (détergent neutre pour pierres et enduits sensibles, formule standard pour carrelages résistants) et le réglage de la pression de rinçage.</p>
<h3>2. Traitement adapté par matériau avec protection des façades</h3>
<p class="mt-4">Pour les carrelages grand format en grès cérame, un détergent professionnel est appliqué sur l'ensemble de la surface, laissé en contact 10 à 15 minutes, puis brossé pour déloger les particules de chantier incrustées dans les joints. Le rinçage s'effectue à pression modérée (80-100 bars) pour préserver les joints calibrés. Pour les pierres naturelles et enduits clairs des façades, un produit neutre (pH 7) est appliqué pour éviter toute altération ou apparition de traces blanchâtres. La pression est réduite (60-80 bars maximum) pour ne pas endommager les enduits poreux sensibles aux coulures d'eau. Les garde-corps métalliques sont nettoyés à l'éponge ou au chiffon microfibre pour préserver les finitions laquées. Les vitreries et murs mitoyens sont traités manuellement.</p>
<h3>3. Gestion de l'eau et recommandations d'entretien</h3>
<p class="mt-4">L'eau de rinçage est dirigée vers les évacuations du balcon à l'aide d'une raclette et de chiffons absorbants, point critique pour éviter toute coulure sur les façades claires en pierre de taille ou enduits qui marquent facilement. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition. Le technicien conseille un balayage régulier pour éliminer les poussières de chantier avant qu'elles ne s'incrustent (particulièrement important pendant les phases de développement de Serris-Sud), un rinçage léger trimestriel pour les balcons exposés au trafic automobile, et un nettoyage professionnel annuel ou bisannuel pour maintenir l'aspect impeccable attendu dans les résidences de standing serrisiennes.</p>`,

      specificChallenges: [
        "Poussières de chantier de Serris-Sud : Les secteurs en développement génèrent des particules fines de plâtre et ciment qui se déposent sur les balcons des résidences récentes et s'incrustent dans les joints, nécessitant un brossage méticuleux.",
        "Enduits clairs sensibles aux coulures : Les façades néo-haussmanniennes en enduits poreux des immeubles du Centre Urbain marquent facilement lors du rinçage, imposant une gestion stricte de l'eau et une pression modérée.",
        "Carrelages grand format à joints calibrés : Les sols techniques récents présentent des joints fins et réguliers qu'il faut préserver lors du nettoyage, exigeant une pression ajustée et un brossage manuel des zones encrassées.",
      ],

      faqAdditions: [
        {
          question:
            "Q1 : Le nettoyage à pression risque-t-il d'endommager les enduits clairs de mon immeuble neuf ?",
          answer:
            "Non, si la pression et les produits sont correctement ajustés. Pour les enduits clairs des façades néo-haussmanniennes, nous utilisons une pression très modérée (60-80 bars maximum), un produit neutre (pH 7) et un jet large pour éviter toute altération. L'eau de rinçage est dirigée vers les évacuations pour éviter coulures et traces sur l'enduit poreux. Nous effectuons toujours un test sur une zone discrète avant de traiter l'ensemble, protocole indispensable pour les façades de prestige typiques de Serris.",
        },
        {
          question:
            "Q2 : Mon balcon donnant sur Serris-Sud accumule beaucoup de poussière blanche, est-ce normal ?",
          answer:
            "Oui, c'est lié aux chantiers de développement actifs dans ce secteur. Les poussières fines de plâtre, ciment et terrassement se déposent quotidiennement sur les balcons des résidences proches. Nous recommandons un balayage hebdomadaire pour éliminer ces particules avant qu'elles ne s'incrustent dans les joints, et un nettoyage professionnel semestriel pendant les phases actives de construction. Une fois les chantiers terminés dans le secteur, la fréquence pourra être espacée à un rythme annuel.",
        },
        {
          question:
            "Q3 : Les produits utilisés peuvent-ils tacher les pierres naturelles ou le carrelage grand format ?",
          answer:
            "Non, nous sélectionnons des détergents professionnels testés et compatibles avec les matériaux récents. Pour les pierres naturelles (calcaire, travertin), nous utilisons exclusivement des produits neutres (pH 7) sans acides ni agents chlorés qui pourraient créer des taches ou altérer la surface. Pour les carrelages grand format en grès cérame, les produits sont formulés pour préserver les finitions et les joints calibrés. Cette sélection rigoureuse garantit un nettoyage efficace sans risque pour les supports de standing serrisiens.",
        },
        {
          question:
            "Q4 : Combien de temps avant de pouvoir profiter de mon balcon après le nettoyage ?",
          answer:
            "Le séchage complet intervient sous 2 à 4 heures selon l'exposition au soleil et la ventilation. Les balcons exposés sud du Quartier du Lac sèchent plus rapidement que ceux orientés nord du Centre Urbain. Vous pouvez marcher sur le balcon dès que les surfaces sont sèches au toucher, généralement en milieu d'après-midi si l'intervention a lieu le matin. Pour réinstaller mobilier et plantes, attendez le séchage total des joints et des angles, soit environ une demi-journée. Cette rapidité permet de profiter rapidement de votre espace extérieur.",
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
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par des fientes de pigeons à Serris éliminent les risques sanitaires et préservent les matériaux de standing typiques des résidences récentes du Val d'Europe.",

      whyUsBullets: [
        "Connaissance des résidences serrisiennes à risque : Intervention régulière sur balcons des copropriétés du Centre Urbain, du Quartier du Lac et des résidences de services où l'architecture néo-haussmannienne attire les pigeons.",
        "Protocole sanitaire strict et adapté aux matériaux récents : EPI complets, humidification préalable obligatoire, désinfection homologuée, méthodes douces pour préserver carrelages grand format, pierres naturelles, enduits clairs et garde-corps laqués typiques du parc immobilier serrisien.",
        "Coordination avec conciergeries et syndics : Gestion des codes d'accès et badges pour résidences sécurisées, intervention discrète pour résidences de services, proposition de solutions anti-pigeons adaptées à l'architecture de prestige.",
      ],

      uniqueIntro: `<p>Les propriétaires serrisiens découvrent parfois avec stupeur l'ampleur de la contamination de leur balcon après une absence prolongée ou une période d'inutilisation. Les pigeons, attirés par l'architecture néo-haussmannienne avec ses corniches, avancées de toit et structures décoratives, colonisent rapidement les balcons tranquilles des étages élevés. Les résidences de services et appart-hôtels, souvent inoccupés pendant les périodes creuses touristiques, présentent des espaces extérieurs particulièrement vulnérables. Les fientes s'accumulent en couches épaisses sur les carrelages grand format, les pierres naturelles et les garde-corps métalliques, formant une croûte durcie qui dégage une odeur insupportable.</p>
<p class="mt-4">Sans intervention rapide, la situation se dégrade dangereusement. L'acidité des fientes corrode les finitions des garde-corps en aluminium ou acier laqué typiques des immeubles récents, attaque les joints calibrés des carrelages grand format, crée des taches brunâtres permanentes sur les pierres naturelles claires, et érode les enduits poreux des façades néo-haussmanniennes. Les fientes sèches se transforment en poussière volatile qui pénètre l'intérieur par les baies vitrées, contaminant les espaces de vie. Les occupants redoutent les risques sanitaires (cryptococcose, histoplasmose, salmonellose), certains développent des symptômes respiratoires, les gestionnaires de résidences de services reçoivent des plaintes de clients inquiets.</p>
<p class="mt-4">Les tentatives de nettoyage domestique aggravent dangereusement le problème : balayer à sec disperse les poussières pathogènes dans l'air et l'habitation, rincer sans protection expose aux projections contaminées, utiliser des produits inadaptés peut endommager définitivement les matériaux récents et coûteux. Ce type de contamination nécessite un protocole professionnel strict : équipements de protection intégrale, humidification préalable obligatoire, désinfection homologuée, méthodes adaptées aux supports de standing serrisiens. Seule cette approche technique garantit la récupération d'un balcon propre, désinfecté et préservé dans sa valeur patrimoniale.</p>`,

      uniqueDeepDive: `<h3>1. Protection intégrale et confinement du chantier</h3>
<p>Le technicien revêt une combinaison jetable intégrale, des gants épais, un masque respiratoire FFP2 filtrant les particules infectieuses et des lunettes de protection étanches. Ces équipements de protection individuelle sont obligatoires face aux pathogènes présents dans les fientes (salmonelles, cryptocoques, histoplasma, chlamydia psittaci). Des bâches étanches protègent les baies vitrées, portes-fenêtres et murs intérieurs, créant un confinement strict qui empêche toute dispersion vers l'intérieur du logement ou de la résidence de services. Les fientes sèches sont ensuite humidifiées abondamment au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules contaminées lors du ramassage manuel. Cette humidification préalable est particulièrement critique dans l'environnement urbain serrisien où les balcons sont souvent exposés au vent.</p>
<h3>2. Ramassage méthodique et nettoyage adapté aux supports récents</h3>
<p class="mt-4">Les fientes, nids, plumes et débris organiques sont ramassés manuellement zone par zone à l'aide de pelles, racloirs et brosses rigides, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour déchets contaminés. Cette phase s'effectue méthodiquement pour éviter toute dispersion. Les surfaces sont ensuite nettoyées avec un détergent adapté au support : produit neutre (pH 7) pour les pierres naturelles et enduits clairs afin de ne pas aggraver les taches acides causées par les fientes, formule standard pour les carrelages grand format en grès cérame résistant, méthode douce pour les garde-corps métalliques laqués déjà corrodés. Le brossage manuel élimine la couche organique résiduelle avant rinçage à pression contrôlée selon le matériau, point critique pour préserver les finitions de standing.</p>
<h3>3. Désinfection virucide et protection du patrimoine</h3>
<p class="mt-4">Un produit désinfectant virucide et bactéricide homologué, compatible avec les matériaux récents serrisiens, est appliqué sur l'ensemble du balcon : sol, garde-corps, angles, murs, évacuations. Le temps de contact réglementaire (10 à 15 minutes selon le produit) est strictement respecté pour garantir la neutralisation des agents pathogènes. Après rinçage final à pression modérée pour protéger les enduits et pierres sensibles, le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité, sans transit par les parties communes des résidences. Le technicien conseille d'inspecter régulièrement les corniches et avancées néo-haussmanniennes, et peut proposer la pose de solutions anti-pigeons (pics discrets, filets transparents) adaptées à l'architecture de prestige pour prévenir une recolonisation qui endommagerait de nouveau les supports coûteux.</p>`,

      specificChallenges: [
        "Architecture néo-haussmannienne propice à la nidification : Les corniches, avancées de toit et éléments décoratifs des immeubles récents du Centre Urbain offrent de nombreux points de nidification, accélérant la colonisation des balcons exposés.",
        "Corrosion accélérée des matériaux récents : L'acidité des fientes attaque rapidement les garde-corps métalliques laqués, érode les joints calibrés des carrelages grand format et crée des taches permanentes sur les pierres naturelles claires, nécessitant une intervention rapide pour limiter les dégâts patrimoniaux.",
        "Enduits clairs sensibles aux taches acides : Les façades néo-haussmanniennes en enduits poreux marquent définitivement sous l'effet de l'acidité des fientes, exigeant un nettoyage urgent et des produits neutres pour éviter l'aggravation des dommages.",
      ],

      faqAdditions: [
        {
          question:
            "Q1 : Les fientes de pigeons représentent-elles un danger sanitaire réel dans une résidence récente ?",
          answer:
            "Oui, l'ancienneté de la construction ne change rien aux risques sanitaires. Les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer infections respiratoires graves, mycoses pulmonaires ou troubles gastro-intestinaux. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées dans les espaces confinés des appartements. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires, quel que soit l'âge de l'immeuble.",
        },
        {
          question:
            "Q2 : Le nettoyage peut-il endommager les matériaux récents de mon balcon neuf ?",
          answer:
            "Non, si le protocole est correctement adapté. Nous ajustons la pression de rinçage selon le support : pression modérée pour les carrelages grand format à joints calibrés, pression réduite (60-80 bars) pour les pierres naturelles et enduits clairs sensibles, méthode manuelle pour les garde-corps métalliques laqués déjà corrodés par l'acidité des fientes. Les produits désinfectants sont sélectionnés pour leur compatibilité avec les matériaux de standing (pH neutre pour pierres et enduits). Cette précaution technique préserve les finitions coûteuses typiques des résidences serrisiennes récentes.",
        },
        {
          question:
            "Q3 : Les fientes ont-elles déjà causé des dégâts irréversibles sur mon balcon de résidence neuve ?",
          answer:
            "Cela dépend de l'ancienneté de la contamination. Sur les garde-corps métalliques laqués, l'acidité provoque une corrosion rapide qui altère la finition et nécessite parfois un traitement antirouille ou une retouche de peinture après nettoyage. Sur les pierres naturelles claires, elle crée des taches brunâtres qui pénètrent profondément et peuvent laisser des marques résiduelles même après traitement professionnel. Sur les enduits clairs poreux, elle provoque des marques acides définitives. Une intervention rapide (dans les premières semaines) limite considérablement les dégâts, mais les contaminations anciennes (plusieurs mois) peuvent laisser des traces permanentes nécessitant des réparations esthétiques complémentaires.",
        },
        {
          question:
            "Q4 : Comment éviter que les pigeons ne reviennent sur mon balcon après le nettoyage ?",
          answer:
            "Nous proposons la pose de solutions anti-pigeons adaptées à l'architecture néo-haussmannienne de Serris : pics discrets en acier inoxydable sur les garde-corps et corniches, filets transparents pour les loggias, répulsifs visuels pour les avancées de toit. Ces dispositifs préservent l'esthétique de prestige des résidences tout en empêchant durablement la nidification. L'inspection régulière des points d'accès (corniches, éléments décoratifs, structures architecturales) et l'intervention rapide dès les premiers signes de retour limitent également le risque de recolonisation massive et de nouveaux dégâts coûteux sur les matériaux récents.",
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
    "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Serris redonne confort et fraîcheur aux intérieurs familiaux, éliminant les salissures accumulées dans les résidences récentes du Val d'Europe.",

  whyUsBullets: [
    "Connaissance de l'environnement résidentiel serrisien : Intervention régulière dans les appartements du Centre Urbain, du Quartier du Lac et de Serris-Sud, avec maîtrise des contraintes d'accès sécurisés et des standards de standing.",
    "Protocole adapté aux textiles récents : Injection-extraction à température ajustée pour préserver les fibres de qualité, produits hypoallergéniques sans danger pour enfants et animaux, extraction maximale pour séchage rapide compatible avec la vie familiale.",
    "Organisation souple à domicile : Intervention en journée ou week-end selon vos disponibilités, durée maîtrisée (1h30 à 3h), coordination avec conciergerie pour accès aux résidences sécurisées, stationnement en parkings souterrains avec véhicules compacts.",
  ],

  uniqueIntro: `<p>Dans les appartements et résidences serrisiennes, les textiles d'ameublement font partie intégrante du quotidien familial. Les enfants s'installent sur le canapé pour regarder la télévision après l'école, les familles reçoivent régulièrement des proches venus visiter Disneyland, les animaux de compagnie circulent librement entre les pièces. Le tapis du séjour accumule les miettes des goûters, les traces de pas des visiteurs, la poussière transportée depuis les parkings souterrains. Les résidences du Centre Urbain et du Quartier du Lac, malgré leur construction récente, n'échappent pas à cet encrassement progressif.</p>
<p class="mt-4">Avec le temps, les textiles perdent leur aspect neuf. Les canapés présentent des auréoles sur les accoudoirs, les tapis ternissent dans les zones de passage, les matelas accumulent transpiration et squames. Les poussières fines des chantiers de Serris-Sud pénètrent par les fenêtres et se logent dans les fibres. Les familles constatent parfois des symptômes légers : éternuements matinaux, léger inconfort respiratoire, impression de poussière persistante malgré l'aspirateur hebdomadaire. Les taches visibles s'ajoutent au problème : traces de boissons renversées lors des soirées entre amis, auréoles de nourriture, marques laissées par les enfants.</p>
<p class="mt-4">Un nettoyage professionnel à domicile transforme cette situation. Il extrait les salissures invisibles accumulées depuis l'emménagement, élimine les acariens qui se sont installés, ravive les couleurs d'origine et redonne aux textiles leur confort initial. Les familles retrouvent le plaisir de profiter pleinement de leur intérieur, sans gêne pour recevoir des invités ou inquiétude pour la santé des enfants. Cette remise en état préserve aussi l'investissement réalisé dans un mobilier de qualité, prolongeant sa durée de vie dans les logements récents serrisiens.</p>`,

  uniqueDeepDive: `<h3>1. Diagnostic des textiles et identification des usages</h3>
<p>Le technicien examine chaque élément à traiter : type de tissu (coton, lin, velours, synthétique haute résistance), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles (boissons, nourriture, traces d'animaux) et interroge les occupants sur l'usage quotidien : présence d'enfants, fréquence de réception d'invités, animaux de compagnie, proximité des chantiers de Serris-Sud générant des poussières. Cette analyse permet de sélectionner le produit adapté et d'ajuster la température de l'eau (60-65°C pour un nettoyage efficace sans agresser les fibres récentes) et la puissance d'aspiration. Les textiles des résidences récentes, souvent de qualité supérieure, nécessitent une attention particulière pour préserver leurs caractéristiques d'origine.</p>

<h3>2. Pré-traitement ciblé et injection-extraction</h3>
<p class="mt-4">Les taches tenaces reçoivent un pré-traitement spécifique avant le nettoyage complet : détachant enzymatique pour les accidents d'enfants ou d'animaux, dégraissant pour les résidus alimentaires des goûters et repas, neutralisant d'odeurs pour les zones imprégnées. Après un temps de pose, la machine d'injection-extraction pulvérise un mélange d'eau chaude et de détergent hypoallergénique au cœur des fibres, délogeant particules de poussière, acariens et salissures incrustées. L'aspiration immédiate retire l'eau sale avant saturation du support. Le technicien effectue plusieurs passages sur les zones très sollicitées : accoudoirs du canapé où s'appuient quotidiennement les membres de la famille, devant du tapis dans les zones de circulation, zones centrales du matelas.</p>

<h3>3. Séchage accéléré et conseils d'entretien familial</h3>
<p class="mt-4">L'extraction puissante limite l'humidité résiduelle dans les rembourrages. Le séchage complet intervient sous 4 à 6 heures grâce à la ventilation naturelle des logements récents bien conçus. Le technicien conseille d'aérer la pièce en ouvrant les fenêtres, d'orienter un ventilateur vers les textiles traités si possible et d'attendre le séchage total avant réutilisation. Pour limiter l'encrassement rapide dans l'environnement serrisien, il recommande un aspirateur hebdomadaire pour éliminer les poussières avant qu'elles ne s'incrustent, l'utilisation de plaids protecteurs sur les zones de fort usage du canapé, et un nettoyage professionnel annuel ou bisannuel selon l'intensité d'usage et la présence d'enfants ou d'animaux.</p>`,

  specificChallenges: [
    "Poussières de chantier pénétrant les textiles : Les secteurs en développement de Serris-Sud génèrent des particules fines qui s'infiltrent dans les appartements et s'incrustent dans les canapés et tapis, nécessitant une extraction renforcée pour éliminer ces salissures invisibles.",
    "Usage familial intensif : Les logements du Val d'Europe accueillent souvent des familles avec enfants et visiteurs réguliers venus pour Disneyland, générant des taches et un encrassement plus rapide que dans les résidences classiques.",
    "Textiles de qualité dans les résidences récentes : Les canapés et tapis des appartements de standing nécessitent des protocoles ajustés pour préserver leurs caractéristiques d'origine (couleurs vives, fibres délicates, finitions soignées) tout en assurant un nettoyage efficace.",
  ],

  faqAdditions: [
    {
      question:
        "Q1 : Le nettoyage élimine-t-il les poussières de chantier incrustées dans mon canapé neuf ?",
      answer: `<p>Oui, l'injection-extraction à eau chaude dissout et extrait les particules fines de plâtre et de ciment qui se sont incrustées dans les fibres depuis votre emménagement ou pendant les phases de construction de Serris-Sud. L'aspiration puissante retire ces contaminants invisibles ainsi que les acariens. Même si votre canapé semble propre en surface, ces particules s'accumulent en profondeur et peuvent générer une sensation de poussière persistante. Un nettoyage professionnel après des travaux dans le secteur ou lors de l'installation initiale élimine ces salissures et redonne aux textiles leur fraîcheur d'origine.</p>`,
    },
    {
      question:
        "Q2 : Mon canapé a seulement deux ans, est-ce vraiment nécessaire de le faire nettoyer ?",
      answer: `<p>Oui, l'ancienneté ne détermine pas le besoin de nettoyage. Un canapé utilisé quotidiennement par une famille avec enfants accumule en deux ans des milliers d'heures d'usage : transpiration, squames, miettes, poussières, acariens qui prolifèrent dans les rembourrages. Les textiles récents de qualité méritent d'être entretenus pour préserver leur aspect et leur durée de vie. Un nettoyage bisannuel pour un usage familial intensif, ou annuel pour un usage modéré, maintient le confort et l'hygiène. C'est particulièrement important à Serris où les familles reçoivent souvent des visiteurs venus pour Disneyland.</p>`,
    },
    {
      question:
        "Q3 : Combien de temps avant que mes enfants puissent réutiliser le canapé ?",
      answer: `<p>Le séchage complet intervient sous 4 à 6 heures grâce à l'extraction puissante et à la bonne ventilation des logements récents serrisiens. Vos enfants peuvent s'asseoir légèrement sur les accoudoirs dès 2h, mais il vaut mieux éviter qu'ils s'installent complètement avant séchage total pour ne pas écraser les fibres humides. Aérez le séjour en ouvrant les fenêtres, orientez un ventilateur si possible. Pour un usage en soirée, planifiez l'intervention le matin. Cette rapidité permet de minimiser la gêne pour la vie familiale quotidienne.</p>`,
    },
   
  ],

  ctaOverride: "",
    },
  ],
};


export default city;
