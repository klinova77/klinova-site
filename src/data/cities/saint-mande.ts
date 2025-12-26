import type { City } from "~/types/geo";

const city: City = {
  name: "Saint-Mandé",
  slug: "saint-mande",
  postalCodes: ["94160"],

  department: {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne",
  },
nearbyCities: [
  "charenton-le-pont",
  "fontenay-sous-bois",
  "montreuil",
  "nogent-sur-marne",
  "saint-maur-des-fosses",
  "vincennes",
],

  customDescription:
    "Commune de très haut standing à la lisière du Bois de Vincennes, Saint-Mandé combine un bâti haussmannien prestigieux et des résidences de luxe des années 1930-1970. La double exposition — pollution du Périphérique à l'ouest, humidité du Bois au sud — impose un entretien rigoureux des surfaces intérieures et extérieures pour préserver la qualité des lieux.",

  hubIntro: `<p>Saint-Mandé réunit un parc immobilier d'exception et des exigences de propreté élevées, portées par des copropriétés avec gardiens et des conseils syndicaux attentifs aux détails. <strong>Klinova répond à ces attentes par des interventions protocolisées</strong>, adaptées aux supports anciens (<strong>parquets</strong>, <strong>pierres de taille</strong>, <strong>moquettes délicates</strong>) et aux contraintes d'accès typiques des immeubles de standing.</p>

<p>Nos équipes connaissent les spécificités locales : <strong>stationnement très restreint</strong>, <strong>parkings souterrains</strong> aux <strong>rampes étroites</strong>, halls de prestige nécessitant <strong>discrétion</strong> et <strong>finitions irréprochables</strong>. Nous déployons un <strong>matériel compact</strong> et des méthodes ajustées à chaque site, avec un <strong>reporting systématique</strong> pour garantir <strong>traçabilité</strong> et <strong>suivi de maintenance</strong>.</p>

<p><strong>Points clés de notre intervention :</strong></p>

<ul>
  <li><strong>Adaptation aux immeubles de standing</strong> : Protocoles soignés pour <strong>parquets anciens fragiles à l'humidité</strong>, <strong>pierres de taille sensibles aux produits agressifs</strong>, et <strong>moquettes de prestige</strong> nécessitant <strong>extraction maximale</strong> pour un <strong>séchage rapide</strong>.</li>
  <li><strong>Maîtrise logistique</strong> : Coordination avec les <strong>gardiens</strong> et <strong>conseils syndicaux</strong> pour <strong>accès</strong>, <strong>stationnement temporaire</strong> en <strong>zones bleues/rouges</strong>, et intervention par <strong>véhicules compacts</strong> dans les <strong>parkings souterrains</strong> aux rampes exiguës.</li>
  <li><strong>Traçabilité complète</strong> : <strong>Compte-rendu d'intervention</strong> remis au syndic avec <strong>photos avant/après</strong>, détail des <strong>produits utilisés</strong> et recommandations de <strong>fréquence</strong> pour maintenir le niveau de propreté attendu dans les copropriétés saint-mandéennes.</li>
</ul>`,

  faq: [
    {
      question:
        "Intervenez-vous rapidement malgré les difficultés de stationnement à Saint-Mandé ?",
      answer:
        "<p><strong>Oui, nous planifions chaque intervention en tenant compte des zones bleues et rouges</strong>. Nos techniciens repèrent les créneaux de stationnement temporaire (<strong>dépose minute</strong>, <strong>emplacements livraison</strong>) et coordonnent avec le <strong>gardien</strong> ou le <strong>syndic</strong> pour obtenir une <strong>autorisation d'accès ponctuelle</strong>. Pour les opérations longues, nous décalons l'intervention en <strong>heures creuses</strong> ou fractionnons le passage en <strong>deux créneaux distincts</strong>.</p>",
    },
    {
      question: "Le déplacement pour établir un devis est-il gratuit ?",
      answer:
        "<p><strong>Oui, le diagnostic sur site et le chiffrage sont gratuits</strong>, que l'immeuble soit situé près du <strong>Lac</strong>, de l'<strong>avenue de Paris</strong> ou dans les quartiers résidentiels bordant le <strong>Bois</strong>. Le technicien évalue les surfaces, identifie les contraintes (<strong>parquets anciens</strong>, <strong>accès parking</strong>, <strong>niveau d'exigence</strong>) et remet un <strong>devis détaillé</strong> sous <strong>48h</strong>, adapté aux spécificités de votre copropriété.</p>",
    },
    {
      question:
        "Comment gérez-vous les interventions dans des immeubles avec gardien et résidents exigeants ?",
      answer:
        "<p><strong>Nous coordonnons systématiquement avec le gardien et le conseil syndical</strong> pour valider <strong>horaires</strong>, <strong>accès</strong> et <strong>organisation</strong>. Les résidents sont informés <strong>72h</strong> à l'avance, les zones traitées sont <strong>balisées discrètement</strong>, et les finitions sont <strong>soignées</strong> (<strong>protection des seuils</strong>, <strong>nettoyage des traces de passage</strong>). Chaque intervention fait l'objet d'un <strong>compte-rendu</strong> avec <strong>photos</strong>, remis au <strong>gardien</strong> ou au <strong>syndic</strong>.</p>",
    },
    {
      question:
        "Vos méthodes sont-elles adaptées aux supports anciens et fragiles ?",
      answer:
        "<p><strong>Oui, nous ajustons pression, température et produits selon le support</strong>. Les <strong>parquets anciens</strong> sensibles à l'humidité sont traités avec une <strong>extraction renforcée</strong> et un <strong>séchage accéléré</strong>. Les <strong>pierres de taille</strong> des balcons reçoivent des <strong>produits neutres</strong> pour éviter toute altération. Les <strong>moquettes de prestige</strong> sont nettoyées avec une attention particulière aux <strong>fibres délicates</strong>, fréquentes dans les immeubles haussmanniens saint-mandéens.</p>",
    },
  ],

  citySpecificChallenges: [
    "Double exposition contrastée : pollution noire grasse du Périphérique à l'ouest, humidité et mousses du Bois de Vincennes au sud nécessitant des protocoles différenciés",
    "Stationnement très difficile et rues à sens unique étroites imposant une planification fine et des véhicules compacts pour chaque intervention",
    "Parkings souterrains anciens aux rampes étroites et hauteur limitée exigeant du matériel adapté et une progression méthodique",
    "Exigences élevées des copropriétés de standing avec gardiens et conseils syndicaux attentifs aux finitions et à la discrétion des interventions",
  ],

  districts: [
    "Centre-Ville / Mairie",
    "Quartier des Tourelles",
    "Quartier de l'Église / Cochereaux",
    "Quartier du Bois / Lac",
    "Avenue de Paris",
  ],

  landmarks: [
    "Mairie de Saint-Mandé",
    "Station de métro Saint-Mandé (Ligne 1)",
    "Lac de Saint-Mandé",
    "Hôpital d'Instruction des Armées Bégin",
    "Institut Géographique National (Le Géographe)",
    "Bois de Vincennes",
  ],

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",

      heroDescription:
        "Le nettoyage professionnel des moquettes à Saint-Mandé préserve les fibres délicates des immeubles de standing tout en éliminant l'encrassement lié au Périphérique et à l'humidité du Bois.",

      uniqueIntro: `<p>Les moquettes des copropriétés saint-mandéennes subissent une usure particulière. À l'ouest, près de la <strong>Porte de Saint-Mandé</strong>, la pollution du <strong>Périphérique</strong> dépose quotidiennement une <strong>poussière noire grasse</strong> dans les halls et cages d'escalier. Au sud, vers le <strong>Lac</strong> et le <strong>Bois</strong>, l'<strong>humidité</strong> ambiante favorise l'incrustation de particules végétales et le développement de légères odeurs de renfermé dans les zones mal ventilées.</p>
<p class="mt-4">Les immeubles haussmanniens et les résidences de luxe des années 1930-1970 sont équipés de moquettes de qualité, souvent en <strong>laine</strong> ou en <strong>fibres bouclées épaisses</strong>. Avec le passage quotidien, les seuils d'entrée noircissent, les paliers devant les ascenseurs se ternissent, les zones de fort trafic forment des traînées grises. Les <strong>gardiens</strong> remarquent cette dégradation, les <strong>conseils syndicaux</strong> reçoivent des observations des résidents, et l'image de prestige de l'immeuble se trouve affectée.</p>
<p class="mt-4">Un nettoyage professionnel rigoureux inverse cette dynamique. Il extrait les salissures incrustées sans saturer les fibres, ravive les couleurs d'origine et maintient la durabilité du revêtement. L'intervention devient un acte de <strong>maintenance préventive</strong>, indispensable pour préserver la valeur patrimoniale des copropriétés saint-mandéennes.</p>`,

      uniqueDeepDive: `<h3>Diagnostic technique des supports</h3>
<p>Le technicien identifie le type de moquette (laine naturelle, bouclée synthétique, velours ras), teste la résistance des fibres et repère les zones critiques (seuils, devant les ascenseurs, paliers du rez-de-chaussée exposés au flux). Il note les taches spécifiques (boue séchée, traces de chaussures, auréoles d'eau) et évalue les contraintes d'accès : cages d'escalier étroites, halls ouverts sur rue, présence d'un gardien exigeant sur les finitions. Cette analyse détermine la puissance d'injection, le choix du détergent et le nombre de passes nécessaires pour chaque zone.</p>

<h3>Injection-extraction contrôlée et extraction maximale</h3>
<p>La machine pulvérise un mélange d'eau chaude (60-70°C) et de détergent professionnel au cœur des fibres, délogeant particules grasses et poussières incrustées. L'aspiration immédiate retire l'eau sale avant qu'elle ne sature le support. Sur les moquettes en laine des immeubles anciens, la température et la pression sont réduites pour éviter le feutrage ou la déformation. Les zones de fort trafic reçoivent plusieurs passages successifs pour extraire les salissures les plus tenaces. L'extraction puissante limite l'humidité résiduelle, point critique dans les halls exposés à l'humidité du Bois.</p>

<h3>Séchage accéléré et recommandations de fréquence</h3>
<p>Le séchage complet intervient sous 6 à 10 heures selon la ventilation naturelle. Le technicien conseille d'aérer les cages d'escalier et de limiter le passage immédiat dans les zones traitées. Pour les copropriétés saint-mandéennes exposées à la pollution du Périphérique, un nettoyage annuel maintient la propreté sans attendre l'encrassement critique. Les résidences bordant le Bois nécessitent une attention particulière aux zones humides (rez-de-chaussée, sous-sols) pour éviter le développement d'odeurs.</p>`,

      whyUsBullets: [
        "<strong>Connaissance des immeubles de standing saint-mandéens</strong> : Intervention régulière dans les résidences haussmanniennes de l'avenue de Paris et les copropriétés de luxe du quartier du Lac, avec maîtrise des fibres délicates.",
        "<strong>Matériel adapté aux supports anciens</strong> : Machines d'injection-extraction à pression modulable, extraction renforcée pour limiter l'humidité résiduelle, produits sélectionnés selon le type de fibre et la fragilité du support.",
        "<strong>Coordination avec les gardiens</strong> : Planification concertée, information préalable des résidents, balisage discret des zones traitées et finitions soignées pour respecter le niveau d'exigence des copropriétés saint-mandéennes.",
      ],

      specificChallenges: [
        "<strong>Pollution grasse du Périphérique à l'ouest</strong> : Les immeubles proches de la Porte de Saint-Mandé accumulent rapidement une poussière noire chargée d'hydrocarbures, nécessitant un détergent dégraissant et plusieurs passes sur les seuils d'entrée.",
        "<strong>Humidité persistante côté Bois</strong> : Les halls et cages d'escalier orientés sud retiennent l'humidité ambiante, ralentissant le séchage et favorisant les odeurs de renfermé si l'extraction n'est pas suffisamment puissante.",
        "<strong>Moquettes en laine dans les immeubles haussmanniens</strong> : Les fibres naturelles anciennes exigent une température et une pression réduites pour éviter le feutrage, la décoloration ou la déformation du tissage d'origine.",
      ],

      faqAdditions: [
        {
          question:
            "Les moquettes des immeubles proches du Périphérique nécessitent-elles un entretien plus fréquent ?",
          answer:
            "<p>Oui, la pollution atmosphérique dépose une poussière grasse qui s'incruste rapidement dans les fibres. Les halls exposés à l'ouest accumulent particules fines et résidus de combustion que l'aspirateur domestique ne peut éliminer. Nous recommandons un nettoyage annuel, voire semestriel pour les seuils d'entrée très sollicités, afin d'éviter l'encrassement irréversible et de préserver l'aspect de prestige attendu.</p>",
        },
        {
          question:
            "Intervenez-vous dans les petites copropriétés résidentielles du quartier du Lac ?",
          answer:
            "<p>Absolument. Nous travaillons autant dans les grandes résidences de l'avenue de Paris que dans les immeubles de 15 à 25 logements du quartier du Bois. Le diagnostic et la méthode restent identiques, seule la surface à traiter varie. Nos véhicules compacts s'adaptent aux contraintes de stationnement et aux accès étroits typiques des rues saint-mandéennes.</p>",
        },
        {
          question:
            "La méthode injection-extraction risque-t-elle d'endommager les moquettes en laine ancienne ?",
          answer:
            "<p>Non, si les paramètres sont correctement ajustés. Nous réduisons la température de l'eau (50-60°C au lieu de 70°C) et la pression d'injection pour respecter les fibres naturelles. L'extraction puissante limite l'humidité résiduelle, évitant la déformation ou le rétrécissement. Les moquettes des immeubles haussmanniens saint-mandéens, souvent fragiles et précieuses, sont traitées avec une attention particulière et des tests préalables.</p>",
        },
        {
          question:
            "Comment organisez-vous l'intervention pour respecter les exigences des gardiens ?",
          answer:
            "<p>Nous planifions le passage en concertation avec le gardien ou le conseil syndical, en privilégiant les créneaux de faible circulation (matinée ou début d'après-midi). Les résidents sont informés 72h à l'avance. Les zones sont balisées discrètement pendant le séchage. Nous nettoyons systématiquement les traces de passage et remettons un compte-rendu avec photos au gardien, pratique courante dans les copropriétés de standing.</p>",
        },
      ],
    },

    // =========================
    // SERVICE 2 – PARKINGS
    // =========================
    {
      serviceKey: "parkings",

      heroDescription:
        "Le nettoyage professionnel des parkings saint-mandéens élimine la poussière grasse du Périphérique et les taches d'huile anciennes, tout en gérant les contraintes techniques des rampes étroites et des hauteurs limitées.",

      uniqueIntro: `<p>Les parkings souterrains de Saint-Mandé, souvent construits dans les années 1930-1970, présentent des configurations exigeantes : rampes en colimaçon étroites, hauteur sous plafond réduite, siphons d'époque parfois obstrués. La proximité du Périphérique génère un encrassement rapide, avec une poussière noire grasse qui se dépose sur les sols en béton, noircit les marquages au sol et rend les rampes glissantes.</p>
<p class="mt-4">Les copropriétaires constatent cette dégradation progressive : taches d'huile qui s'étendent, angles et pieds de poteaux noircis, sensation de saleté permanente malgré le balayage régulier. Les conseils syndicaux reçoivent des demandes d'intervention, mais la coordination semble complexe : comment faire entrer un véhicule d'entretien dans ces rampes étroites ? Comment gérer l'eau de lavage sans saturer des siphons anciens ? Quelle organisation pour limiter la gêne dans des copropriétés où le stationnement est déjà très contraint ?</p>
<p class="mt-4">Un décrassage technique bien structuré résout ces problématiques. Il restaure la propreté des sols, améliore la visibilité des marquages et réduit les risques de glissade. L'intervention devient un acte de maintenance indispensable pour préserver la sécurité et valoriser le patrimoine immobilier des copropriétés saint-mandéennes.</p>`,

      uniqueDeepDive: `<h3>Diagnostic technique et évaluation des contraintes</h3>
<p>Le technicien visite le parking pour mesurer la hauteur sous plafond (souvent 1,90 m à 2,10 m dans les parkings anciens), vérifier le diamètre des rampes en colimaçon, tester l'état des siphons et caniveaux, et identifier le type de revêtement (béton brut, peinture époxy, résine). Il repère les zones de fort passage (places visiteurs, rampes d'accès) et les taches d'huile anciennes imprégnées dans le béton poreux. Cette analyse détermine le choix du matériel : autolaveuse compacte pour les espaces confinés, ou haute pression modulable pour les zones plus dégagées.</p>

<h3>Décrassage par autolaveuse compacte et traitement localisé</h3>
<p>Le balayage mécanique élimine d'abord les débris secs et poussières accumulées. L'autolaveuse compacte brosse ensuite le sol avec un mélange d'eau chaude et de dégraissant professionnel, puis aspire immédiatement les eaux sales. Sur les taches d'huile tenaces, un détergent spécifique est appliqué, laissé en contact plusieurs minutes, puis rincé à la haute pression en mode contrôlé. Les rampes, pieds de poteaux et angles sont nettoyés manuellement avec des brosses adaptées. L'eau de lavage est collectée en continu pour éviter toute saturation des siphons anciens.</p>

<h3>Gestion des évacuations et recommandations de fréquence</h3>
<p>Les siphons sont vérifiés avant intervention. Si leur capacité est limitée, nous écopons manuellement les excédents et réduisons le débit de rinçage. Les zones sont traitées par rotation pour maintenir l'accès au parking en permanence. Pour les copropriétés saint-mandéennes exposées à la pollution du Périphérique, un décrassage annuel maintient la propreté. Les parkings proches du Bois, moins exposés à la poussière grasse, peuvent espacer les interventions tous les 18 mois.</p>`,

      whyUsBullets: [
        "<strong>Maîtrise des parkings anciens saint-mandéens</strong> : Intervention régulière dans les sous-sols des immeubles haussmanniens et résidences de luxe, avec adaptation aux rampes étroites et hauteurs limitées typiques du bâti ancien.",
        "<strong>Équipement compact et performant</strong> : Autolaveuse de faible gabarit (hauteur < 1,80 m), haute pression à débit modulable pour traiter béton et résine sans endommager les marquages ni saturer les évacuations.",
        "<strong>Coordination technique avec les gardiens</strong> : Planification concertée pour accès, rotation des véhicules par zones, information préalable des copropriétaires et compte-rendu détaillé remis au syndic après intervention.",
      ],

      specificChallenges: [
        "<strong>Pollution grasse du Périphérique</strong> : Les parkings situés à l'ouest de Saint-Mandé accumulent une poussière noire chargée d'hydrocarbures et de particules de freinage, nécessitant un dégraissant renforcé et plusieurs passes sur les rampes d'accès.",
        "<strong>Rampes en colimaçon et hauteur sous plafond limitée</strong> : Les parkings anciens des immeubles 1930-1970 imposent du matériel compact (hauteur < 1,80 m) et une progression méthodique pour éviter tout blocage ou collision dans les virages serrés.",
        "<strong>Siphons d'époque sous-dimensionnés</strong> : Les évacuations anciennes, souvent obstruées ou de faible capacité, exigent une gestion rigoureuse du débit d'eau et une aspiration immédiate pour éviter stagnation ou refoulement.",
      ],

      faqAdditions: [
        {
          question:
            "Pourquoi les parkings proches du Périphérique noircissent-ils aussi rapidement ?",
          answer:
            "<p>La proximité de la Porte de Saint-Mandé expose les parkings à une pollution atmosphérique intense. Les véhicules transportent particules fines, résidus de freinage et hydrocarbures qui se déposent quotidiennement sur les sols en béton. Cette poussière grasse forme une couche tenace qui ternit les marquages et rend les rampes glissantes, nécessitant un décrassage annuel pour maintenir sécurité et visibilité.</p>",
        },
        {
          question:
            "Votre matériel peut-il accéder aux parkings anciens aux rampes très étroites ?",
          answer:
            "<p>Oui, nous utilisons une autolaveuse compacte de moins de 1,80 m de hauteur et 1,20 m de largeur, spécialement conçue pour les parkings anciens. Nous effectuons systématiquement une visite préalable pour mesurer les contraintes (hauteur sous plafond, diamètre des virages, pente des rampes) et valider la faisabilité technique. Si l'accès est impossible en autolaveuse, nous intervenons manuellement avec une monobrosse et un aspirateur eau-poussière.</p>",
        },
        {
          question:
            "Les taches d'huile anciennes dans le béton poreux peuvent-elles être éliminées ?",
          answer:
            "<p>Les taches récentes partent facilement avec un dégraissant professionnel et de la haute pression. Les taches anciennes, imprégnées profondément dans le béton poreux typique des parkings d'époque, s'atténuent fortement mais peuvent laisser une trace résiduelle. Nous appliquons plusieurs passes avec un détergent spécifique et un temps de contact prolongé pour obtenir le meilleur résultat possible sans altérer le support.</p>",
        },
        {
          question:
            "Comment gérez-vous l'évacuation de l'eau dans les parkings aux siphons anciens ?",
          answer:
            "<p>Nous vérifions systématiquement l'état des siphons avant intervention. Si leur capacité est limitée ou s'ils sont partiellement obstrués, nous réduisons le débit de rinçage et l'autolaveuse aspire immédiatement l'eau sale. En cas de saturation, nous écopons manuellement les excédents dans des seaux et les évacuons par un autre réseau. Cette gestion technique évite tout refoulement ou stagnation, problème fréquent dans les parkings saint-mandéens d'époque.</p>",
        },
      ],
    },

    // =========================
    // SERVICE 3 – BALCONS
    // =========================
    {
      serviceKey: "balcons",

      heroDescription:
        "Le nettoyage professionnel d'un balcon à Saint-Mandé redonne un espace extérieur propre et accueillant, libéré des traces de pollution du Périphérique et des dépôts verts du Bois.",

      uniqueIntro: `<p>Les habitants de Saint-Mandé vivent avec un balcon qu'ils finissent par délaisser. Côté Périphérique, vers la Porte de Saint-Mandé, les balcons accumulent une poussière noire grasse qui colle aux dalles et noircit les joints en quelques semaines. Côté Bois, vers le Lac et les quartiers résidentiels, l'humidité favorise l'apparition de mousses, de lichens et de traces vertes tenaces sur les pierres de taille et le carrelage ancien.</p>
<p class="mt-4">Après une saison, le balcon devient un espace négligé : les joints sont gris foncé, le garde-corps en fer forgé est terni, des auréoles d'eau marquent les dalles. On hésite à y installer une table ou des chaises, on évite d'y recevoir des amis. Les tentatives de nettoyage avec un balai-brosse et un seau donnent des résultats décevants : l'eau sale coule sur la façade, les taches résistent, le sol reste terne.</p>
<p class="mt-4">Un nettoyage professionnel transforme complètement l'usage du balcon. Les surfaces retrouvent leur couleur d'origine, les joints redeviennent nets, le garde-corps brille. L'espace extérieur redevient un prolongement agréable du logement, utilisable pour prendre un café le matin ou profiter des beaux jours. Cette remise en état valorise aussi le bien en cas de mise en location ou de vente.</p>`,

      uniqueDeepDive: `<h3>Préparation et protection des accès</h3>
<p>Le technicien commence par protéger la porte-fenêtre, les menuiseries et les murs intérieurs avec des bâches étanches fixées au ruban adhésif. Les meubles de jardin, plantes en pot et objets décoratifs sont déplacés ou protégés individuellement. Les gros débris (feuilles mortes du Bois, terre séchée des jardinières, poussière accumulée) sont ramassés manuellement et conditionnés dans des sacs. Cette phase évite que les salissures ne se dispersent lors du lavage et garantit la protection de l'intérieur du logement.</p>

<h3>Nettoyage adapté au type de salissure</h3>
<p>Le technicien applique un produit nettoyant selon le type d'encrassement : dégraissant alcalin pour la pollution noire du Périphérique, traitement anti-mousse pour les dépôts verts côté Bois. Les pierres de taille anciennes des immeubles haussmanniens reçoivent une formule neutre pour préserver leur surface. Les joints sont brossés manuellement pour déloger les salissures incrustées. Les surfaces planes sont ensuite rincées à pression contrôlée, jamais agressive, pour ne pas endommager les joints ou l'étanchéité. Le garde-corps, les vitreries et les murs mitoyens sont lavés à l'éponge ou au chiffon microfibre.</p>

<h3>Gestion de l'eau et conseils d'usage</h3>
<p>L'eau de rinçage est dirigée vers l'évacuation du balcon à l'aide d'une raclette et de chiffons absorbants, évitant toute coulure sur les façades haussmanniennes ou chez les voisins inférieurs. Le séchage naturel intervient sous 2 à 4 heures selon l'exposition et la ventilation. Le technicien conseille un balayage hebdomadaire, un rinçage léger après les périodes de pollen du Bois et un nettoyage complet annuel pour les balcons exposés au Périphérique, où la pollution s'accumule plus rapidement.</p>`,

      whyUsBullets: [
        "<strong>Connaissance des deux expositions saint-mandéennes</strong> : Intervention régulière sur balcons des immeubles de l'avenue de Paris (pollution) et des résidences du quartier du Lac (humidité), avec produits adaptés à chaque contexte.",
        "<strong>Respect des supports anciens</strong> : Produits neutres pour pierres de taille, pression réglée pour préserver joints et étanchéité, finitions soignées sur garde-corps en fer forgé typiques des immeubles haussmanniens.",
        "<strong>Organisation discrète</strong> : Gestion rigoureuse de l'eau de rinçage pour protéger les façades de prestige, intervention en journée pour limiter toute nuisance sonore dans les immeubles denses.",
      ],

      specificChallenges: [
        "<strong>Double exposition contrastée</strong> : Les balcons côté Périphérique accumulent une pollution noire grasse nécessitant un dégraissant puissant, tandis que ceux côté Bois développent mousses et lichens exigeant un traitement anti-mousse et un brossage minutieux.",
        "<strong>Pierres de taille anciennes sensibles</strong> : Les balcons des immeubles haussmanniens présentent des supports en pierre naturelle qui ne tolèrent ni produits acides ni pression excessive, imposant une méthode douce et des tests préalables.",
        "<strong>Gestion de l'eau en façade de prestige</strong> : Les balcons superposés des immeubles de standing exigent un contrôle strict du ruissellement pour éviter coulures sur les façades et désagréments chez les voisins inférieurs.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage à pression risque-t-il d'abîmer les pierres de taille de mon balcon haussmannien ?",
          answer:
            "<p>Non, si la pression est correctement ajustée. Nous utilisons une pression modérée (80 à 100 bars maximum) et un jet large pour éviter toute érosion de la pierre. Les pierres de taille anciennes sont d'abord brossées manuellement avec un produit neutre, puis rincées en douceur. Sur les balcons des immeubles du centre-ville, nous effectuons toujours un test sur une zone discrète avant de traiter l'ensemble.</p>",
        },
        {
          question:
            "Mon balcon côté Périphérique noircit en quelques semaines, comment limiter l'encrassement ?",
          answer:
            "<p>La pollution atmosphérique de la Porte de Saint-Mandé dépose quotidiennement des particules grasses difficiles à éviter. Nous recommandons un balayage hebdomadaire pour éliminer la poussière avant qu'elle ne s'incruste, et un rinçage léger mensuel avec un jet d'eau. Un nettoyage professionnel annuel avec dégraissant permet de traiter les salissures tenaces et de préserver l'aspect des surfaces sur le long terme.</p>",
        },
        {
          question:
            "Les produits utilisés présentent-ils un risque pour mes plantes ou mes animaux ?",
          answer:
            "<p>Non, nous utilisons des détergents biodégradables sans danger après rinçage complet. Les plantes sont protégées ou déplacées pendant l'intervention. Une fois le balcon rincé et séché, vos animaux peuvent circuler librement. Nous évitons tout produit corrosif, privilégiant des formules professionnelles adaptées aux balcons d'habitation et respectueuses de l'environnement.</p>",
        },
        {
          question:
            "Combien de temps avant de pouvoir réinstaller mes meubles et profiter du balcon ?",
          answer:
            "<p>Le séchage complet intervient sous 2 à 4 heures selon l'exposition au soleil et la ventilation. Vous pouvez marcher sur le balcon dès que les surfaces sont sèches au toucher, généralement en milieu d'après-midi si l'intervention a lieu le matin. Pour réinstaller mobilier et plantes, attendez le séchage total des joints et des angles, soit environ une demi-journée. Les balcons exposés sud côté Bois sèchent plus rapidement que ceux orientés nord.</p>",
        },
      ],
    },

    // =========================
    // SERVICE 4 – BALCONS FIENTES
    // =========================
    {
      serviceKey: "balcons-fientes",

      heroDescription:
        "Le nettoyage et la désinfection professionnels d'un balcon contaminé par des fientes de pigeons à Saint-Mandé éliminent les risques sanitaires selon un protocole strict, restituant un espace extérieur sain et utilisable.",

      uniqueIntro: `<p>Les balcons des immeubles saint-mandéens, particulièrement ceux équipés de corniches en pierre de taille ou de loggias profondes typiques des années 1930-1970, offrent des sites de nidification privilégiés pour les pigeons. La proximité du Bois de Vincennes et du Lac attire ces oiseaux qui colonisent rapidement les balcons tranquilles des étages supérieurs. Les fientes s'accumulent en couches épaisses sur les pierres de taille anciennes, les dalles et les garde-corps en fer forgé.</p>
<p class="mt-4">Les occupants constatent une dégradation rapide : odeur forte persistante même fenêtres fermées, corrosion visible des supports métalliques, impossibilité d'utiliser le balcon. Les fientes sèches contiennent des agents pathogènes qui se dispersent en poussière lors des courants d'air. Les propriétaires redoutent les risques sanitaires, certains locataires exigent une intervention immédiate, les copropriétés reçoivent des plaintes de voisinage.</p>
<p class="mt-4">Les tentatives de nettoyage domestique aggravent le problème : balayer à sec disperse les poussières contaminées dans l'air et l'intérieur du logement, rincer sans protection expose aux projections chargées de bactéries. Ce type de contamination nécessite un protocole professionnel rigoureux : équipements de protection individuelle, méthode d'humidification préalable, désinfection homologuée et évacuation sécurisée des déchets. Seule cette approche technique permet de récupérer un balcon propre, désinfecté et utilisable en toute sécurité.</p>`,

      uniqueDeepDive: `<h3>Équipements de protection et confinement du chantier</h3>
<p>Le technicien revêt une combinaison jetable intégrale, des gants épais résistants, un masque respiratoire FFP2 filtrant les particules fines et des lunettes de protection étanches. Ces équipements de protection individuelle (EPI) sont obligatoires pour éviter tout contact avec les agents pathogènes présents dans les fientes. Des bâches étanches protègent la porte-fenêtre, les murs intérieurs et le sol du logement, créant un confinement qui empêche la dispersion des poussières contaminées vers l'intérieur. Les fientes sèches sont ensuite humidifiées au pulvérisateur d'eau, technique indispensable pour éviter la mise en suspension de particules infectieuses lors du ramassage.</p>

<h3>Ramassage manuel et nettoyage des supports</h3>
<p>Les fientes, nids, plumes et débris organiques sont ramassés manuellement à l'aide de pelles, racloirs et brosses rigides, puis conditionnés immédiatement dans des sacs étanches à double paroi prévus pour déchets contaminés. Cette phase s'effectue méthodiquement, zone par zone, pour éviter toute dispersion. Le sol, le garde-corps en fer forgé, les vitreries et les murs mitoyens sont ensuite nettoyés avec un détergent dégraissant pour éliminer la couche organique résiduelle. Les pierres de taille anciennes des balcons haussmanniens reçoivent un traitement adapté pour ne pas altérer leur surface. Une fois les supports rincés, ils sont prêts pour la désinfection.</p>

<h3>Désinfection virucide et conseils post-intervention</h3>
<p>Un produit désinfectant virucide et bactéricide homologué est appliqué sur l'ensemble du balcon : sol, garde-corps, angles, murs. Le temps de contact réglementaire (10 à 15 minutes selon le produit) est strictement respecté pour garantir la neutralisation des agents pathogènes (salmonelles, cryptocoques, histoplasma). Après rinçage final, le balcon est aéré pendant plusieurs heures et ne doit pas être réutilisé avant 24 heures minimum. Les sacs de déchets contaminés sont évacués en toute sécurité. Le technicien conseille d'inspecter régulièrement les corniches et peut proposer la pose de solutions anti-pigeons (pics, filets) pour prévenir toute recolonisation.</p>`,

      whyUsBullets: [
        "<strong>Connaissance des immeubles saint-mandéens à risque</strong> : Intervention régulière sur balcons des résidences haussmanniennes et immeubles 1930-1970 dont les corniches en pierre attirent les pigeons venus du Bois et du Lac.",
        "<strong>Protocole sanitaire homologué et rigoureux</strong> : EPI complets, humidification préalable obligatoire, désinfection virucide/bactéricide avec temps de contact respecté, évacuation sécurisée des déchets selon normes en vigueur.",
        "<strong>Respect des supports anciens et du voisinage</strong> : Méthode adaptée aux pierres de taille et garde-corps en fer forgé, bâches étanches limitant odeurs et dispersion, intervention discrète en journée.",
      ],

      specificChallenges: [
        "<strong>Corniches en pierre de taille propices à la nidification</strong> : Les immeubles haussmanniens du centre-ville et les résidences de luxe présentent des avancées architecturales qui offrent abri et points de nidification aux pigeons, accélérant la contamination des balcons.",
        "<strong>Corrosion des garde-corps en fer forgé</strong> : L'acidité des fientes attaque rapidement les garde-corps métalliques anciens typiques des immeubles saint-mandéens, nécessitant une intervention rapide pour stopper la dégradation et préserver le patrimoine.",
        "<strong>Poussières volatiles en étages élevés</strong> : Les balcons des derniers étages exposés au vent subissent une dispersion importante des fientes sèches en particules contaminantes, exigeant une humidification préalable méthodique avant tout ramassage.",
      ],

      faqAdditions: [
        {
          question:
            "Les fientes de pigeons sur mon balcon haussmannien représentent-elles un danger réel ?",
          answer:
            "<p>Oui, les fientes contiennent des bactéries pathogènes (salmonelles), des champignons (cryptocoques, histoplasma) et des parasites pouvant provoquer infections respiratoires, mycoses ou troubles gastro-intestinaux. Les poussières de fientes sèches, particulièrement dangereuses lorsqu'inhalées, se dispersent facilement dans les balcons exposés au vent. Un nettoyage domestique sans EPI aggrave le risque d'exposition. Seul un protocole professionnel avec équipements de protection et désinfection homologuée garantit l'élimination des dangers sanitaires.</p>",
        },
        {
          question:
            "Les produits désinfectants utilisés peuvent-ils endommager mes pierres de taille anciennes ?",
          answer:
            "<p>Non, nous sélectionnons des désinfectants virucides/bactéricides à pH neutre compatibles avec les pierres naturelles. Les produits acides ou chlorés, qui pourraient altérer les pierres de taille des balcons haussmanniens, sont systématiquement écartés. Nous effectuons un test préalable sur une zone discrète pour valider la compatibilité. Après le temps de contact réglementaire, le rinçage complet élimine tout résidu sans laisser de trace ni altérer la surface.</p>",
        },
        {
          question:
            "Les fientes ont-elles déjà endommagé mon balcon de façon irréversible ?",
          answer:
            "<p>L'acidité des fientes corrode peintures, vernis et métaux. Sur les garde-corps en fer forgé typiques des immeubles saint-mandéens, elles accélèrent l'oxydation et fragilisent les soudures. Sur les pierres de taille, elles provoquent des taches tenaces et une érosion superficielle. Une intervention rapide limite les dégâts structurels. Les taches anciennes peuvent laisser des marques résiduelles, mais le nettoyage professionnel élimine la couche organique active et stoppe la dégradation en cours.</p>",
        },
        {
          question:
            "Comment sont évacués les déchets contaminés après le nettoyage ?",
          answer:
            "<p>Les fientes, nids, plumes et débris sont conditionnés dans des sacs étanches à double paroi conformes aux normes de gestion des déchets contaminés. Ils sont évacués directement par nos équipes, sans transit par les parties communes de la copropriété ni abandon dans les bacs collectifs de la résidence. Cette procédure sécurisée évite tout risque de contamination secondaire dans l'immeuble ou le quartier, point particulièrement important dans les copropriétés de standing saint-mandéennes.</p>",
        },
      ],
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",

      heroDescription:
        "Le nettoyage professionnel à domicile de canapés, tapis et matelas à Saint-Mandé élimine acariens, allergènes et taches incrustées, restaurant l'hygiène et le confort des intérieurs familiaux.",

      uniqueIntro: `<p>Dans les appartements saint-mandéens, canapés et tapis accumulent silencieusement des salissures que les occupants ne perçoivent pas immédiatement. La poussière fine du Périphérique pénètre par les fenêtres et se loge dans les fibres textiles. L'humidité ambiante du Bois favorise le développement d'acariens dans les matelas et coussins. Après quelques années sans nettoyage professionnel, les textiles abritent des populations d'acariens qui se nourrissent de squames humaines et déposent leurs déjections allergisantes.</p>
<p class="mt-4">Les familles constatent des symptômes sans en identifier la cause : rhinites matinales, éternuements répétés, irritations cutanées inexpliquées, asthme qui s'aggrave. Les enfants développent des réactions allergiques, les personnes sensibles respirent difficilement la nuit. Les taches visibles s'ajoutent au problème : traces de nourriture sur le canapé, auréoles d'urine animale sur le tapis, sueur accumulée dans le matelas. Les tentatives de nettoyage domestique restent superficielles : l'aspirateur n'extrait pas les acariens logés en profondeur, les détachants ménagers laissent des auréoles.</p>
<p class="mt-4">Un nettoyage professionnel à domicile change radicalement la situation sanitaire. L'injection-extraction à eau chaude tue les acariens, extrait leurs déjections et les allergènes accumulés. Les taches organiques disparaissent, les odeurs s'estompent, les fibres retrouvent leur souplesse. L'intervention devient un acte de prévention sanitaire, particulièrement important pour les foyers avec enfants, personnes allergiques ou animaux de compagnie.</p>`,

      uniqueDeepDive: `<h3>Diagnostic textile et identification des contaminations</h3>
<p>Le technicien examine chaque élément à traiter : type de tissu (coton, lin, velours, synthétique, laine), épaisseur des rembourrages, couleur et fragilité. Il repère les taches visibles (boissons renversées, graisse alimentaire, urine animale, sueur) et interroge les occupants sur les problèmes allergiques ou respiratoires rencontrés. Cette analyse permet de sélectionner le produit adapté et d'ajuster la température de l'eau (60-70°C pour tuer les acariens) et la puissance d'aspiration. Les textiles anciens des appartements haussmanniens nécessitent une méthode plus douce pour préserver les fibres délicates.</p>

<h3>Pré-traitement ciblé et injection-extraction à eau chaude</h3>
<p>Les taches tenaces reçoivent un pré-traitement spécifique : détachant enzymatique pour l'urine et les matières organiques, dégraissant pour les résidus alimentaires, neutralisant d'odeurs pour les zones imprégnées par la transpiration ou les animaux. Après un temps de pose de 5 à 10 minutes, la machine d'injection-extraction pulvérise un mélange d'eau chaude (65-70°C) et de détergent hypoallergénique au cœur des fibres. Cette température élevée tue les acariens adultes, larves et œufs. L'aspiration immédiate retire l'eau sale chargée de particules, d'acariens morts et d'allergènes dissous. Le technicien effectue plusieurs passages sur les zones de fort usage.</p>

<h3>Extraction maximale et conseils de prévention</h3>
<p>L'extraction puissante limite l'humidité résiduelle dans les rembourrages, point critique pour éviter le développement de moisissures dans les logements saint-mandéens exposés à l'humidité du Bois. Le séchage complet intervient sous 4 à 8 heures selon la ventilation. Le technicien conseille d'aérer la pièce, d'orienter un ventilateur si possible et d'attendre le séchage total avant réutilisation. Pour limiter la recontamination, il recommande un aspirateur hebdomadaire avec filtre HEPA, l'utilisation de housses anti-acariens sur les matelas et un nettoyage professionnel annuel pour les foyers allergiques.</p>`,

      whyUsBullets: [
        "<strong>Connaissance des problématiques saint-mandéennes</strong> : Intervention régulière dans les appartements familiaux du centre-ville et des quartiers résidentiels, avec maîtrise des contaminations liées à la pollution atmosphérique et à l'humidité du Bois.",
        "<strong>Protocole anti-acariens validé</strong> : Injection-extraction à eau chaude (65-70°C) tuant les acariens, extraction puissante des allergènes, produits hypoallergéniques adaptés aux personnes sensibles et aux enfants.",
        "<strong>Organisation souple et discrète</strong> : Intervention en journée ou week-end selon vos disponibilités, durée maîtrisée (1h30 à 3h), stationnement géré en zones bleues/rouges avec autorisation temporaire.",
      ],

      specificChallenges: [
        "<strong>Acariens favorisés par l'humidité du Bois</strong> : Les logements orientés sud vers le Lac de Saint-Mandé présentent une humidité ambiante qui accélère la prolifération des acariens dans les textiles, nécessitant un traitement thermique rigoureux et une extraction maximale.",
        "<strong>Poussière fine du Périphérique dans les fibres</strong> : Les appartements proches de la Porte de Saint-Mandé accumulent des particules atmosphériques qui pénètrent les canapés et tapis, aggravant les problèmes respiratoires et nécessitant plusieurs passes d'extraction pour éliminer les salissures profondes.",
        "<strong>Séchage dans les appartements peu ventilés</strong> : Les logements sans balcon ou exposés au nord du centre-ville imposent une extraction renforcée et des conseils d'aération adaptés pour garantir un séchage complet sans risque de moisissures dans les rembourrages épais.",
      ],

      faqAdditions: [
        {
          question:
            "Le nettoyage élimine-t-il réellement les acariens responsables de mes allergies ?",
          answer:
            "<p>Oui, l'injection-extraction à eau chaude (65-70°C) tue les acariens adultes, larves et œufs par choc thermique. L'aspiration puissante retire ensuite les acariens morts et leurs déjections, principale source d'allergènes. Les habitants souffrant de rhinites, asthme ou eczéma constatent généralement une amélioration notable sous 48h à 72h. Pour maintenir ce résultat, nous recommandons un nettoyage professionnel annuel et l'utilisation d'housses anti-acariens sur les matelas, particulièrement dans les logements saint-mandéens exposés à l'humidité du Bois.</p>",
        },
        {
          question:
            "Pouvez-vous traiter les taches d'urine de chat et les odeurs persistantes ?",
          answer:
            "<p>Oui, nous utilisons un détachant enzymatique qui décompose les cristaux d'acide urique responsables des odeurs tenaces. Le produit pénètre dans les mousses sous le tissu, zone où l'urine s'accumule. Après un temps de pose de 10 minutes, l'injection-extraction aspire les résidus dissous. Les odeurs disparaissent durablement si la tache est traitée dans les premiers mois. Les contaminations anciennes de plusieurs années, ayant imprégné profondément les structures en bois, peuvent laisser une légère odeur résiduelle.</p>",
        },
        {
          question:
            "Mon canapé en velours ancien d'un immeuble haussmannien peut-il supporter ce traitement ?",
          answer:
            "<p>Oui, si les paramètres sont adaptés. Nous réduisons la température (50-55°C au lieu de 70°C), diminuons la pression d'injection et augmentons le nombre de passes d'aspiration pour compenser. Les velours anciens, cotonnades délicates et soieries sont testés sur une zone discrète avant traitement complet. L'extraction maximale évite toute saturation en eau qui déformerait les fibres. Les canapés de famille des appartements saint-mandéens, souvent précieux, sont traités avec une attention particulière.</p>",
        },
        {
          question:
            "Combien de temps avant de pouvoir réutiliser mon canapé après le nettoyage ?",
          answer:
            "<p>Le séchage complet intervient sous 4 à 8 heures selon la ventilation du logement et l'épaisseur des rembourrages. Vous pouvez vous asseoir légèrement sur les accoudoirs dès 2h, mais évitez de vous installer complètement avant séchage total pour ne pas écraser les fibres humides. Aérez la pièce, ouvrez les fenêtres si possible côté Bois (moins pollué), orientez un ventilateur vers le canapé. Pour un usage en soirée, planifiez l'intervention le matin ou en début d'après-midi.</p>",
        },
      ],
    },
  ],
};

export default city;
