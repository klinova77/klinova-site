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
        "lagny-sur-marne",
        "torcy",
        "vaires-sur-marne",
        "claye-souilly",
        "emerainville",
        "pontault-combault",
        "champs-sur-marne",
        "chelles",
        "meaux"
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
        "Intervenez-vous rapidement malgré le trafic touristique intense du Val d'Europe ?",
      answer: `<p><strong>Oui, nous planifions chaque intervention en tenant compte des pics de saturation</strong> autour du centre commercial Val d'Europe, de La Vallée Village et de la gare RER A. Nos techniciens privilégient les créneaux en semaine hors vacances scolaires et évitent les week-ends touristiques. Nous utilisons des véhicules utilitaires compacts adaptés aux parkings souterrains à hauteur limitée (1m90) pour accéder directement aux résidences sans saturer la voirie de surface.</p>`,
    },
    {
      question:
        "Le diagnostic sur site est-il gratuit pour toutes les résidences de Serris ?",
      answer: `<p><strong>Oui, le déplacement et le diagnostic restent gratuits</strong> quel que soit le quartier (Centre Urbain, Quartier du Lac, Le Bourg, Serris-Sud, secteur La Vallée). Le technicien évalue les surfaces, identifie les contraintes spécifiques (matériaux de standing, accès sécurisé, flux touristique) et remet un chiffrage détaillé sous 48h adapté à votre copropriété ou résidence de services.</p>`,
    },
    {
      question:
        "Comment gérez-vous les accès dans les résidences sécurisées avec codes et badges ?",
      answer: `<p><strong>Nous coordonnons systématiquement avec la conciergerie ou le syndic</strong> pour obtenir les codes d'accès, badges et autorisations de passage aux barrières automatiques avant chaque intervention. Ces informations sont transmises au technicien 48h à l'avance. Pour les résidences de services et appart-hôtels exigeant discrétion et rapidité, nous adaptons nos horaires et notre organisation pour limiter toute visibilité auprès des résidents ou clients.</p>`,
    },
    {
      question:
        "Vos méthodes sont-elles adaptées aux matériaux de standing des immeubles récents ?",
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
            "Les moquettes des immeubles proches de la gare Val d'Europe nécessitent-elles un entretien plus fréquent ?",
          answer:
            "Oui, le flux piéton quotidien lié aux trajets Paris-Val d'Europe et au tourisme Disney génère une usure et un encrassement bien supérieurs aux copropriétés classiques. Les particules transportées, les traces de valises et l'humidité des jours de pluie s'accumulent rapidement. Nous recommandons un nettoyage semestriel pour les immeubles du Centre Urbain très exposés, et un traitement localisé trimestriel sur les seuils d'entrée pour maintenir l'aspect soigné attendu dans les résidences de standing serrisiennes.",
        },
        {
          question:
            "Intervenez-vous dans les résidences de services et appart-hôtels avec leurs exigences spécifiques ?",
          answer:
            "Absolument. Nous adaptons nos protocoles aux standards hôteliers : intervention en dehors des heures de passage des clients, discrétion maximale, séchage accéléré pour réouverture rapide des zones, coordination avec la conciergerie pour accès et organisation. Notre expérience dans les résidences de services du Val d'Europe nous permet de respecter les exigences de rapidité et d'hygiène propres à ce type d'établissement, tout en maintenant la qualité d'extraction nécessaire.",
        },
        {
          question:
            "Votre matériel peut-il accéder aux parkings souterrains à hauteur limitée de Serris ?",
          answer:
            "Oui, nous utilisons des véhicules utilitaires compacts spécialement sélectionnés pour respecter la hauteur limite stricte de 1m90 typique des parkings souterrains serrisiens. Nous effectuons systématiquement une vérification préalable des contraintes (hauteur, largeur de rampe, codes d'accès) lors du diagnostic. Cette adaptation logistique nous permet d'accéder directement aux résidences sans encombrer la voirie de surface saturée par le trafic touristique.",
        },
        {
          question:
            "Comment organisez-vous l'intervention dans les résidences sécurisées avec codes et badges ?",
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
            "Votre matériel peut-il vraiment accéder aux parkings souterrains avec hauteur limitée à 1m90 ?",
          answer:
            "Oui, nous utilisons une autolaveuse compacte spécialement dimensionnée avec une hauteur totale inférieure à 1m80, conçue précisément pour les parkings souterrains à contraintes strictes comme ceux de Serris. Nous effectuons systématiquement une visite préalable pour mesurer la hauteur exacte sous plafond, repérer les zones à hauteur variable (rampes, poutres) et valider la faisabilité technique. Cette vérification garantit une intervention sans risque pour le matériel et les installations du parking.",
        },
        {
          question:
            "Comment organisez-vous l'intervention sans perturber les résidents qui ont des places nominatives ?",
          answer:
            "Nous travaillons par rotation planifiée : moitié A le matin, moitié B l'après-midi, ou étage par étage selon la configuration. Les résidents stationnent temporairement dans la zone non traitée ou sur les emplacements visiteurs pendant 2 à 3 heures, puis récupèrent leur place dès le séchage terminé. Le syndic ou la conciergerie informe les copropriétaires 72h à l'avance avec un plan précis indiquant les zones et horaires. Cette organisation maintient l'accès permanent au parking, point essentiel dans les résidences serrisiennes où le stationnement est compté.",
        },
        {
          question:
            "Les poussières des chantiers de Serris-Sud nécessitent-elles des interventions plus fréquentes ?",
          answer:
            "Oui, pendant les phases actives de construction dans les secteurs en développement, les poussières fines de chantier et la boue de terrassement s'accumulent rapidement dans les parkings des résidences proches. Nous recommandons un décrassage semestriel au lieu d'annuel pour ces copropriétés, permettant de maintenir la propreté malgré l'environnement de chantier. Une fois les travaux terminés dans le secteur, la fréquence peut être espacée à un rythme annuel classique.",
        },
        {
          question:
            "Intervenez-vous également dans les parkings des résidences de services et appart-hôtels ?",
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
        "Le nettoyage professionnel des balcons à Serris préserve l'aspect soigné des façades néo-haussmanniennes tout en éliminant les poussières de chantier et les dépôts urbains typiques du secteur touristique.",

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
            "Le nettoyage à pression risque-t-il d'endommager les enduits clairs de mon immeuble neuf ?",
          answer:
            "Non, si la pression et les produits sont correctement ajustés. Pour les enduits clairs des façades néo-haussmanniennes, nous utilisons une pression très modérée (60-80 bars maximum), un produit neutre (pH 7) et un jet large pour éviter toute altération. L'eau de rinçage est dirigée vers les évacuations pour éviter coulures et traces sur l'enduit poreux. Nous effectuons toujours un test sur une zone discrète avant de traiter l'ensemble, protocole indispensable pour les façades de prestige typiques de Serris.",
        },
        {
          question:
            "Mon balcon donnant sur Serris-Sud accumule beaucoup de poussière blanche, est-ce normal ?",
          answer:
            "Oui, c'est lié aux chantiers de développement actifs dans ce secteur. Les poussières fines de plâtre, ciment et terrassement se déposent quotidiennement sur les balcons des résidences proches. Nous recommandons un balayage hebdomadaire pour éliminer ces particules avant qu'elles ne s'incrustent dans les joints, et un nettoyage professionnel semestriel pendant les phases actives de construction. Une fois les chantiers terminés dans le secteur, la fréquence pourra être espacée à un rythme annuel.",
        },
        {
          question:
            "Les produits utilisés peuvent-ils tacher les pierres naturelles ou le carrelage grand format ?",
          answer:
            "Non, nous sélectionnons des détergents professionnels testés et compatibles avec les matériaux récents. Pour les pierres naturelles (calcaire, travertin), nous utilisons exclusivement des produits neutres (pH 7) sans acides ni agents chlorés qui pourraient créer des taches ou altérer la surface. Pour les carrelages grand format en grès cérame, les produits sont formulés pour préserver les finitions et les joints calibrés. Cette sélection rigoureuse garantit un nettoyage efficace sans risque pour les supports de standing serrisiens.",
        },
        {
          question:
            "Combien de temps avant de pouvoir profiter de mon balcon après le nettoyage ?",
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
            "Les fientes de pigeons représentent-elles un danger sanitaire réel dans une résidence récente ?",
          answer:
            "Oui, l'ancienneté de la construction ne change rien aux risques sanitaires. Les fientes contiennent des bactéries pathogènes (salmonelles, chlamydia psittaci), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer infections respiratoires graves, mycoses pulmonaires ou troubles gastro-intestinaux. Les poussières de fientes sèches sont particulièrement dangereuses lorsqu'inhalées dans les espaces confinés des appartements. Un nettoyage domestique sans équipements de protection aggrave considérablement le risque d'exposition. Seul un protocole professionnel avec EPI complets, humidification préalable et désinfection virucide garantit l'élimination totale des dangers sanitaires, quel que soit l'âge de l'immeuble.",
        },
        {
          question:
            "Le nettoyage peut-il endommager les matériaux récents de mon balcon neuf ?",
          answer:
            "Non, si le protocole est correctement adapté. Nous ajustons la pression de rinçage selon le support : pression modérée pour les carrelages grand format à joints calibrés, pression réduite (60-80 bars) pour les pierres naturelles et enduits clairs sensibles, méthode manuelle pour les garde-corps métalliques laqués déjà corrodés par l'acidité des fientes. Les produits désinfectants sont sélectionnés pour leur compatibilité avec les matériaux de standing (pH neutre pour pierres et enduits). Cette précaution technique préserve les finitions coûteuses typiques des résidences serrisiennes récentes.",
        },
        {
          question:
            "Les fientes ont-elles déjà causé des dégâts irréversibles sur mon balcon de résidence neuve ?",
          answer:
            "Cela dépend de l'ancienneté de la contamination. Sur les garde-corps métalliques laqués, l'acidité provoque une corrosion rapide qui altère la finition et nécessite parfois un traitement antirouille ou une retouche de peinture après nettoyage. Sur les pierres naturelles claires, elle crée des taches brunâtres qui pénètrent profondément et peuvent laisser des marques résiduelles même après traitement professionnel. Sur les enduits clairs poreux, elle provoque des marques acides définitives. Une intervention rapide (dans les premières semaines) limite considérablement les dégâts, mais les contaminations anciennes (plusieurs mois) peuvent laisser des traces permanentes nécessitant des réparations esthétiques complémentaires.",
        },
        {
          question:
            "Comment éviter que les pigeons ne reviennent sur mon balcon après le nettoyage ?",
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
        "Le nettoyage élimine-t-il les poussières de chantier incrustées dans mon canapé neuf ?",
      answer: `<p>Oui, l'injection-extraction à eau chaude dissout et extrait les particules fines de plâtre et de ciment qui se sont incrustées dans les fibres depuis votre emménagement ou pendant les phases de construction de Serris-Sud. L'aspiration puissante retire ces contaminants invisibles ainsi que les acariens. Même si votre canapé semble propre en surface, ces particules s'accumulent en profondeur et peuvent générer une sensation de poussière persistante. Un nettoyage professionnel après des travaux dans le secteur ou lors de l'installation initiale élimine ces salissures et redonne aux textiles leur fraîcheur d'origine.</p>`,
    },
    {
      question:
        "Mon canapé a seulement deux ans, est-ce vraiment nécessaire de le faire nettoyer ?",
      answer: `<p>Oui, l'ancienneté ne détermine pas le besoin de nettoyage. Un canapé utilisé quotidiennement par une famille avec enfants accumule en deux ans des milliers d'heures d'usage : transpiration, squames, miettes, poussières, acariens qui prolifèrent dans les rembourrages. Les textiles récents de qualité méritent d'être entretenus pour préserver leur aspect et leur durée de vie. Un nettoyage bisannuel pour un usage familial intensif, ou annuel pour un usage modéré, maintient le confort et l'hygiène. C'est particulièrement important à Serris où les familles reçoivent souvent des visiteurs venus pour Disneyland.</p>`,
    },
    {
      question:
        "Combien de temps avant que mes enfants puissent réutiliser le canapé ?",
      answer: `<p>Le séchage complet intervient sous 4 à 6 heures grâce à l'extraction puissante et à la bonne ventilation des logements récents serrisiens. Vos enfants peuvent s'asseoir légèrement sur les accoudoirs dès 2h, mais il vaut mieux éviter qu'ils s'installent complètement avant séchage total pour ne pas écraser les fibres humides. Aérez le séjour en ouvrant les fenêtres, orientez un ventilateur si possible. Pour un usage en soirée, planifiez l'intervention le matin. Cette rapidité permet de minimiser la gêne pour la vie familiale quotidienne.</p>`,
    },
   
  ],

  ctaOverride: "",
    },

    {
      serviceKey: "terrasses",
      heroDescription:
        "Nettoyage approfondi de votre terrasse selon la nature du revêtement, suppression des mousses et dépôts organiques, et application d'un traitement protecteur adapté aux conditions locales.",
      whyUsBullets: [
        "Intervention dans tous les quartiers serrissiens : Centre urbain Val d'Europe, quartier de la Gare, quartier du Parc, quartier du Lac, Pré de Claye, vieux bourg.",
        "Expertise adaptée aux constructions locales : terrasses des immeubles néo-haussmanniens, dallages des maisons de ville récentes, aménagements des résidences contemporaines.",
        "Précautions systématiques pour les extérieurs : protection du mobilier de jardin, bâchage des massifs plantés, gestion maîtrisée des eaux de rinçage.",
      ],
      uniqueIntro: `<p><strong>Serris</strong>, au cœur du <strong>Val d'Europe</strong> en Seine-et-Marne, incarne le développement réussi d'une ville nouvelle intégrée à <strong>Marne-la-Vallée</strong>. Depuis l'ouverture du centre commercial en 2000 et l'arrivée du RER A en 2001, la commune a connu une croissance spectaculaire, passant de quelques centaines d'habitants à près de 10 000 Serrissiens.</p>

<p class="mt-4">Labellisée <strong>Ville Fleurie</strong> (3 fleurs), Serris bénéficie d'un environnement végétal soigné — parc des Communes, parc du Centre Urbain, lac des Gassets, jardin Andalou — qui génère une humidité propice au développement des mousses et algues sur les surfaces extérieures. Les terrasses des résidences bordant ces espaces verts subissent un encrassement accéléré.</p>

<p class="mt-4">L'architecture caractéristique du Val d'Europe — <strong>immeubles néo-haussmanniens</strong> du centre urbain, <strong>maisons de ville</strong> des nouveaux quartiers, <strong>résidences d'inspiration londonienne</strong> du Pré de Claye — présente des terrasses en <strong>dalles béton</strong>, <strong>carrelage grès cérame</strong>, <strong>pierre reconstituée</strong> ou <strong>bois composite</strong> qui nécessitent chacune un traitement adapté.</p>`,
      uniqueDeepDive: `<h3>T1: Diagnostic et sécurisation du chantier</h3>
<p>Mobilier de terrasse, jardinières et éléments décoratifs sont déplacés ou bâchés. Les façades néo-haussmanniennes et menuiseries adjacentes sont protégées des projections. Un balayage préliminaire retire feuilles, pollens et débris végétaux accumulés sur le revêtement.</p>

<h3>T2: Nettoyage adapté au support</h3>
<p>Le produit est sélectionné selon le matériau identifié : formule alcaline pour béton et carrelage minéral, solution neutre pour pierre reconstituée et bois composite. L'action mécanique par brossage approprié déloge les incrustations biologiques. Le rinçage s'effectue à pression calibrée pour préserver les joints et la texture de surface.</p>

<h3>T3: Traitement préventif et conseils</h3>
<p>Une protection anti-mousse est appliquée sur les zones les plus exposées à l'humidité des parcs et lacs environnants. Les eaux de rinçage sont orientées vers les points d'écoulement. Des recommandations d'entretien saisonnier sont transmises pour maintenir le résultat face à l'environnement végétal dense de cette ville fleurie.</p>`,
      specificChallenges: [
        "Immeubles néo-haussmanniens du centre urbain Val d'Europe : terrasses et balcons avec garde-corps ouvragés, accès parfois contraints par les parties communes.",
        "Résidences du quartier du Parc : proximité du parc de 11 hectares favorisant l'humidité et la prolifération rapide des mousses.",
        "Maisons de ville du Pré de Claye : constructions récentes d'inspiration londonienne avec dalles béton ou pierre reconstituée.",
        "Terrasses bordant le lac des Gassets et le jardin des Quais : humidité permanente accélérant l'encrassement biologique.",
        "Carrelage grès cérame des programmes neufs : micro-reliefs antidérapants piégeant les salissures et nécessitant un brossage spécifique.",
      ],
      faqAdditions: [
        {
          question:
            "Comment intervenez-vous sur les terrasses des immeubles néo-haussmanniens du centre urbain Val d'Europe ?",
          answer:
            "<p>Les résidences du centre urbain présentent une architecture soignée avec des terrasses et balcons dotés de garde-corps ouvragés. Notre équipe protège systématiquement ces éléments décoratifs avant intervention. Le matériel portable permet d'accéder aux étages via les parties communes, et nous coordonnons si nécessaire avec le syndic pour les interventions en copropriété.</p>",
        },
        {
          question:
            "Ma terrasse reverdit rapidement car elle borde le parc du Centre Urbain, quelle solution proposez-vous ?",
          answer:
            "<p>La proximité des espaces verts serrissiens — parc des Communes, parc du Centre Urbain de 11 hectares, lac des Gassets — génère une humidité constante propice à la repousse des mousses. Après le nettoyage complet, nous appliquons un traitement préventif ciblé. Un balayage régulier des débris végétaux et une nouvelle application annuelle permettent de maintenir le résultat malgré cet environnement « ville fleurie ».</p>",
        },
        {
          question:
            "Intervenez-vous dans le nouveau quartier du Pré de Claye sur les maisons récentes ?",
          answer:
            "<p>Le quartier du Pré de Claye, avec ses maisons de ville d'inspiration londonienne et ses résidences récentes, fait partie de notre zone d'intervention. Les terrasses de ces constructions présentent généralement des dalles béton, pierre reconstituée ou bois composite. Nos produits et méthodes sont parfaitement adaptés à ces matériaux contemporains pour un résultat optimal sans risque pour les revêtements neufs.</p>",
        },
        {
          question:
            "Quelle différence entre un simple passage haute pression et votre prestation sur une terrasse en dalles béton ?",
          answer:
            "<p>Les dalles béton des résidences serrissiennes présentent une porosité et des joints qui ne supportent pas un jet haute pression standard. Notre protocole associe un produit alcalin adapté au support, un brossage mécanique ciblé et un rinçage à pression calibrée qui nettoie en profondeur sans dégrader la surface ni déchausser les joints.</p>",
        },
      ],
      ctaOverride: "",
    },

    {
  serviceKey: "nettoyage-appartement-maison",

  heroDescription:
    "À Serris et Val d’Europe, intervention orientée rotation rapide : logements récents, locations courte durée et résidences de standing, avec un niveau de propreté attendu type hôtelier.",

  whyUsBullets: [
    "Organisation pensée pour la rotation Serris–Val d’Europe : intervention efficace, checklist de finitions, rendu net “prêt à louer / prêt à visiter”.",
    "Spécificités locales maîtrisées : joints et parois de douche (calcaire), cuisines sollicitées, sols carrelés/parquet stratifié, vitrages et balcons travaillés.",
    "Logistique adaptée au centre urbain : stationnement réglementé, parkings souterrains, accès Vigik/interphone, et intervention discrète en résidences.",
  ],

  uniqueIntro: `<p>À Serris, la demande est souvent liée à Val d’Europe : appartements récents, résidences de tourisme, logements meublés et locations de courte durée. Le point clé n’est pas seulement de “faire propre”, mais d’obtenir un rendu <strong>immédiatement présentable</strong> : salle d’eau sans traces, cuisine dégraissée, sols uniformes, et finitions visibles (plinthes, poignées, interrupteurs, vitrages accessibles).</p>
<p class="mt-4">La ville a deux visages : le centre urbain néo-classique (Place d’Ariane, autour du RER A Val d’Europe) avec ses immeubles sécurisés et ses contraintes de stationnement, et le Bourg / secteurs plus calmes (Faubourg, Gassets) où l’on intervient davantage sur des maisons ou des volumes plus simples. Dans tous les cas, l’accès se prépare : digicode, badge, consignes d’immeuble, créneau horaire compatible avec les arrivées/départs.</p>
<p class="mt-4">Enfin, Serris concentre des surfaces très “vitrées” (baies, balcons, parfois lucarnes décoratives) et des matériaux modernes : carrelage grand format, parquet stratifié, peintures récentes. Le bon résultat vient d’une méthode propre : peu d’eau sur les sols sensibles, produits adaptés, et une dernière passe de contrôle, surtout sur les zones qui se voient dès l’entrée.</p>`,

  uniqueDeepDive: `<h3>T1 : Val d’Europe / Place d’Ariane — résultat “prêt à louer” et accès sécurisés</h3>
<p>Dans le centre urbain, les interventions ressemblent souvent à une remise en état entre deux occupations : état des lieux, relocation, courte durée. On traite en priorité la salle d’eau (calcaire, joints, paroi), la cuisine (gras, crédence, façades), puis sols et finitions. L’accès est une contrainte réelle : badge, interphone, parkings souterrains et règles de copropriété.</p>

<h3>T2 : Secteur RER A Val d’Europe — cadence et vitrages visibles</h3>
<p>Autour de la gare, la rotation est forte. Les entrées d’immeuble et paliers ramènent facilement des traces, surtout par temps humide. On vise donc un rendu homogène : pas de marques sur carrelage, plinthes propres, portes et poignées traitées, et un nettoyage des vitrages accessibles pour retrouver la clarté des pièces (baies et portes-fenêtres).</p>

<h3>T3 : Le Bourg / Faubourg / Gassets — volumes plus variés, fin de chantier et “grand ménage”</h3>
<p>Dans les secteurs plus résidentiels, on rencontre davantage de maisons ou d’anciens bâtiments rénovés. Les demandes portent souvent sur un grand ménage de remise à niveau ou un nettoyage après travaux (poussière fine, traces de peinture). Le déroulé est alors plus “maison” : escaliers, pièces multiples, zones techniques, et contrôle final des rebords, plinthes et bas de murs.</p>`,

  specificChallenges: [
    "Rotation courte durée (Disney / Val d’Europe) : exigence de rendu “hôtelier” et timing serré.",
    "Accès très sécurisés : badges, interphones, consignes de résidence, parkings souterrains.",
    "Stationnement réglementé et déchargement matériel parfois complexe en centre urbain.",
    "Calcaire en pièces d’eau : parois, robinetterie, joints, dépôts rapides avec forte occupation.",
    "Cuisines sollicitées (meublés / locations) : dégraissage crédence, hotte, façades, plinthes.",
    "Vitrages et balcons travaillés (néo-classique) : finitions visibles, rebords et garde-corps.",
  ],

  faqAdditions: [
    {
      question:
        "Faites-vous des nettoyages entre deux locations (type conciergerie / courte durée) à Serris ?",
      answer: `<p>Oui, quand les créneaux sont compatibles. On vise un rendu “prêt à accueillir” : salle d’eau sans traces, cuisine dégraissée, sols uniformes, et finitions visibles (poignées, interrupteurs, plinthes). L’accès (badge, interphone, consignes) est confirmé en amont pour éviter toute perte de temps.</p>`,
    },
    {
      question:
        "Pouvez-vous intervenir pour un état des lieux (entrée/sortie) sur Val d’Europe ?",
      answer: `<p>Oui. On suit une logique état des lieux : pièces d’eau et cuisine en priorité, puis sols, puis finitions. C’est particulièrement adapté aux logements autour de la gare RER A Val d’Europe où la rotation locative est élevée.</p>`,
    },
    {
      question:
        "Proposez-vous un nettoyage après travaux (poussière de plâtre, peinture) à Serris ?",
      answer: `<p>Oui. Après travaux, on procède en plusieurs passes pour éviter la redéposition de poussière fine : surfaces et menuiseries, puis sols, puis contrôle final des rebords, plinthes et zones de passage. Le but est un rendu net, sans voile sur les sols et les vitrages accessibles.</p>`,
    },
    {
      question:
        "Comment gérez-vous le stationnement et les accès en résidence sécurisée ?",
      answer: `<p>On prépare l’intervention : point de dépose, parking possible (souvent souterrain), digicode/badge, et règles de copropriété. Ensuite, on organise le déroulé pour limiter les allers-retours et réduire la gêne, tout en gardant un niveau de finition élevé.</p>`,
    },
  ],

  ctaOverride: "",
},

  ],
};


export default city;
