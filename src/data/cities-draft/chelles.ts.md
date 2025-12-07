import type { City } from "~/types/geo";

const city: City = {
  name: "Chelles",
  slug: "chelles",
  postalCodes: ["77500"],
  customDescription:
    "Deuxième ville de Seine-et-Marne, Chelles allie une desserte RER/Transilien performante à une forte activité commerciale. L'entretien des moquettes dans les halls de copropriété, des parkings des résidences et des balcons des particuliers y est une demande constante pour maintenir le cadre de vie.",


 hubIntro: `<p>Acteur reconnu pour la maintenance et l'hygiène immobilière à <strong>Chelles</strong>, Klinova accompagne les syndics de copropriété et les gestionnaires de biens exigeants. Notre approche dépasse le nettoyage classique : nous déployons des protocoles industriels stricts pour garantir la valorisation de votre patrimoine immobilier, qu'il s'agisse de résidences neuves ou d'immeubles anciens au cœur de <strong>Chelles</strong>.</p>

<p>Nous savons que la traçabilité est la clé de la confiance. C'est pourquoi nos équipes d'intervention utilisent un matériel de pointe et fournissent un reporting précis après chaque passage. Voici nos domaines d'expertise prioritaires sur le secteur :</p>

<ul>
  <li><strong>Copropriétés et Résidences :</strong> Entretien complet des parties communes, gestion des containers et nettoyage de la vitrerie des halls.</li>
  <li><strong>Parkings et Sous-sols :</strong> Décapage mécanique des sols, nettoyage haute pression et dépoussiérage des box.</li>
  <li><strong>Locaux Professionnels :</strong> Maintien de l'hygiène pour les bureaux de proximité et cabinets libéraux.</li>
</ul>`,

  
  localStats: {
    clientsDepartment: 80,  
    satisfaction: "4,9/5",
  },

 citySpecificChallenges: [
        "test test testLa proximité de la RN34 et de la gare apporte une poussière fine qui encrasse rapidement les moquettes des halls d'entrée.",
        "Les marches d'escalier dans les immeubles sans ascenseur sont des zones d'usure intense nécessitant un traitement spécifique.",
        "La remontée d'humidité dans les rez-de-chaussée de certains immeubles anciens peut compliquer le séchage et nécessite une vigilance accrue."
      ],


  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: [
    "Centre-ville",
    "Chantereine",
    "Les Arcades",
    "La Grande Prairie",
    "Les Coudreaux",
    "Monts-Chalats",
    "Cengtre-ville",
    "Channtereine",
    "Les Ar,cades",
    "La Gr,ande Prairie",
    "Les Coudreaux",
    "Monts,-Chalats",
    "Centr,e-ville",
    "Chantdfgsereine",
    "Les Agfdrcades",
    "La Gradfgnde Prairie",
    "Les Coudgfdreaux",
    "Monts-Cdfghalats",
    "Centre-vigfdlle",
    "Chantereine",
    "Les Arcades",
    "La Grande Prairie",
    "Les Coudreaux",
    "Monts-Chalats"
  ],
  nearbyCities: [
    "vaires-sur-marne",
    "brou-sur-chantereine",
    "gournay-sur-marne",
    "noisiel",
    "torcy",
    "montfermeil"
  ],

  landmarks: [
    "Mairie de Chelles",
    "Gare de Chelles–Gournay (RER E / Transilien P)",
    "Centre commercial Terre Ciel",
    "Bois des Coudreaux",
    "Fort de Chelles"
  ],

  faq: [
    {
      question: "Les halls d’immeuble à Chelles, souvent ouverts sur la rue, sont très salissants. Votre méthode est-elle efficace sur ce type de moquette très exposée ?",
      answer: "Absolument. Les moquettes d’entrée, constamment soumises aux intempéries, à la boue et aux fines particules, nécessitent un nettoyage puissant. Notre méthode par injection-extraction à l’eau chaude est particulièrement adaptée à ce contexte. Elle permet d’éliminer en profondeur les saletés incrustées et le sable qui coupe les fibres, tout en assainissant la surface. Le résultat redonne non seulement un aspect visuel propre mais aussi une texture plus agréable sous le pied."
    },
    {
      question: "Intervenez-vous aussi bien dans les petites copropriétés que dans les grandes résidences avec plusieurs bâtiments ?",
      answer: "Oui, notre organisation est modulable. Que ce soit pour un bâtiment unique d’une dizaine de lots dans le Vieux Chelles ou pour une grande résidence avec plusieurs halls et cages d’escalier dans le quartier de l’Aulnoy, nous adaptons notre planning et nos équipes. Nous établissons un devis précis qui détaille les surfaces à traiter par bâtiment, permettant d’organiser les interventions de manière logique et efficace pour le syndic."
    },
    {
      question: "Le nettoyage à l’eau risque-t-il d’abîmer la moquette ou de la laisser humide trop longtemps ?",
      answer: "Notre procédé n’est pas un simple shampouinage. La machine d’extraction professionnelle que nous utilisons injecte une solution nettoyante et aspire immédiatement l’eau sale avec la majeure partie de l’humidité. La moquette est ainsi rincée et laissée seulement légèrement humide, pour un séchage rapide en quelques heures, surtout avec une bonne ventilation. Cette méthode préserve la colle et les fibres, et ne laisse pas de résidus qui attirent la saleté."
    },
    {
      question: "Comment gérez-vous la présence des résidents pendant l’intervention dans les cages d’escalier ?",
      answer: "La communication est clé. Nous convenons avec le syndic des dates et créneaux d’intervention, et nous l’incitons à informer les résidents en amont, par note dans les boîtes aux lettres par exemple. Sur place, notre technicien travaille par tronçons, balise éventuellement la zone en cours de nettoyage et laisse toujours un accès libre et sécurisé aux logements. L’intervention sur un palier est rapide, limitant la gêne à quelques dizaines de minutes par étage."
    }
  ],
  

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: ""
  },
  ctaOverride: "",

  services: [
    // =========================
    // SERVICE 1 – MOQUETTES
    // =========================
    {
      serviceKey: "moquettes",
      heroDescription:
        "Redonnez de la clarté et une bonne image aux halls et escaliers des copropriétés et bureaux de Chelles.",
      whyUsBullets: [
        "Notre équipe intervient régulièrement dans les copropriétés et immeubles de bureaux de Chelles. Nous connaissons les caractéristiques des différents quartiers et les types de résidences, ce qui nous permet d’anticiper les contraintes logistiques et de proposer une organisation adaptée dès le premier diagnostic.",
        "Nous maîtrisons les techniques de nettoyage profond adaptées aux moquettes de forte densité typiques des parties communes. Notre matériel professionnel permet d’obtenir un résultat visible et durable, enlevant les taches incrustées et redonnant aux couleurs leur éclat initial sans abîmer les fibres.",
        "L’organisation de nos interventions est conçue pour limiter au maximum la gêne pour les résidents. Nous planifions les horaires en concertation avec le syndic, nous informons les occupants en amont et travaillons de manière efficace pour réduire le temps d’intervention sur chaque palier ou espace commun.",
        "À l’issue de la prestation, nous pouvons fournir un compte-rendu succinct au gestionnaire ou au syndic, mentionnant les observations faites sur l’état général de la moquette et, si besoin, des recommandations pour en prolonger la durée de vie."
      ],
      uniqueIntro: `<p>À Chelles, les moquettes des parties communes sont présentes dans de nombreux types d'habitat, des résidences des années 70-80 du quartier Grande Prairie ou des Coudreaux aux immeubles plus récents de l'Aulnoy ou des Bords de Marne. Les halls d'entrée, les cages d'escalier et les paliers, soumis à un trafic régulier des résidents et des livreurs, subissent l'accumulation de poussières, de traces de pas et de salissures diverses. Cette usure est accentuée par la proximité de la gare de Chelles-Gournay, générant un flux de passage important. Pour les syndics et gestionnaires de copropriétés, comme pour les chefs d'entreprise du secteur de la Trentaine, l'état de ces revêtements influence directement l'image et le sentiment de bien-être dans l'immeuble ou les locaux.</p>
<p>Dans les copropriétés et immeubles de bureaux de Chelles, la moquette des parties communes est un élément de confort qui s'use discrètement mais sûrement. Chaque jour, les allers-retours des résidents des quartiers de la Grande Prairie ou des Arcades, les passages des livreurs et les intempéries ramenées de l'extérieur laissent leurs traces sur les revêtements des halls, des cages d'escalier et des paliers. Peu à peu, les couleurs s’assombrissent, des zones de passage apparaissent et des taches diverses s’incrustent, donnant une impression de laisser-aller préjudiciable à l’image de la résidence.</p>
<p>Pour un syndic ou un gestionnaire de copropriété, cette dégradation visuelle peut devenir une source de réclamations de la part des occupants et complique l’entretien courant. Une moquette terne ou tachée dans un hall d’immeuble près de la gare ou du centre-ville envoie un mauvais signal aux visiteurs et aux potentiels acquéreurs. Heureusement, cette dégradation n’est pas une fatalité. Un nettoyage professionnel approfondi, réalisé avec une méthode adaptée, permet de redonner son éclat d’origine à la moquette, d’assainir les espaces de vie collective et de préserver durablement ce patrimoine commun.</p>`,
      uniqueDeepDive: `<p>Notre intervention sur les moquettes à Chelles commence systématiquement par un diagnostic précis sur site. Notre technicien évalue l’état des fibres, identifie la nature des taches (boue, traces noires, éventuelles moisissures en pied de mur) et prend en compte les contraintes d’accès propres à votre immeuble – étroitesse des escaliers, accès à l’ascenseur, nécessité de préserver la circulation des résidents.</p>
<p>Avant toute opération, nous protégeons les zones adjacentes (murs, boiseries) et balisons si nécessaire. La méthode principale que nous employons est l’injection-extraction à l’eau chaude (ou nettoyage par extraction). Cette technique, utilisée avec une machine professionnelle, permet de rincer et d’aspirer en profondeur les salissures incrustées dans la moquette, sans la détremper excessivement. Nous portons une attention particulière aux zones de fort trafic : entrées d’immeuble, paliers, couloirs menant aux ascenseurs.</p>
<p>Connaissant la diversité des bâtiments chellois, des anciennes résidences aux constructions récentes, nous adaptons notre organisation pour minimiser la gêne, souvent en intervenant par étages. Après le nettoyage, la moquette sèche en quelques heures, grâce à une extraction puissante de l’humidité. Pour maintenir un bon état dans le temps, nous conseillons généralement un nettoyage professionnel tous les 12 à 18 mois pour les parties communes très fréquentées.</p>`,
      specificChallenges: [
        "testLa proximité de la RN34 et de la gare apporte une poussière fine qui encrasse rapidement les moquettes des halls d'entrée.",
        "Les marches d'escalier dans les immeubles sans ascenseur sont des zones d'usure intense nécessitant un traitement spécifique.",
        "La remontée d'humidité dans les rez-de-chaussée de certains immeubles anciens peut compliquer le séchage et nécessite une vigilance accrue."
      ],
      faqAdditions: [
        {
          question: "Les halls d’immeuble à Chelles, souvent ouverts sur la rue, sont très salissants. Votre méthode est-elle efficace sur ce type de moquette très exposée ?",
          answer: "Absolument. Les moquettes d’entrée, constamment soumises aux intempéries, à la boue et aux fines particules, nécessitent un nettoyage puissant. Notre méthode par injection-extraction à l’eau chaude est particulièrement adaptée à ce contexte. Elle permet d’éliminer en profondeur les saletés incrustées et le sable qui coupe les fibres, tout en assainissant la surface. Le résultat redonne non seulement un aspect visuel propre mais aussi une texture plus agréable sous le pied."
        },
        {
          question: "Intervenez-vous aussi bien dans les petites copropriétés que dans les grandes résidences avec plusieurs bâtiments ?",
          answer: "Oui, notre organisation est modulable. Que ce soit pour un bâtiment unique d’une dizaine de lots dans le Vieux Chelles ou pour une grande résidence avec plusieurs halls et cages d’escalier dans le quartier de l’Aulnoy, nous adaptons notre planning et nos équipes. Nous établissons un devis précis qui détaille les surfaces à traiter par bâtiment, permettant d’organiser les interventions de manière logique et efficace pour le syndic."
        },
        {
          question: "Le nettoyage à l’eau risque-t-il d’abîmer la moquette ou de la laisser humide trop longtemps ?",
          answer: "Notre procédé n’est pas un simple shampouinage. La machine d’extraction professionnelle que nous utilisons injecte une solution nettoyante et aspire immédiatement l’eau sale avec la majeure partie de l’humidité. La moquette est ainsi rincée et laissée seulement légèrement humide, pour un séchage rapide en quelques heures, surtout avec une bonne ventilation. Cette méthode préserve la colle et les fibres, et ne laisse pas de résidus qui attirent la saleté."
        },
        {
          question: "Comment gérez-vous la présence des résidents pendant l’intervention dans les cages d’escalier ?",
          answer: "La communication est clé. Nous convenons avec le syndic des dates et créneaux d’intervention, et nous l’incitons à informer les résidents en amont, par note dans les boîtes aux lettres par exemple. Sur place, notre technicien travaille par tronçons, balise éventuellement la zone en cours de nettoyage et laisse toujours un accès libre et sécurisé aux logements. L’intervention sur un palier est rapide, limitant la gêne à quelques dizaines de minutes par étage."
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
        "Retrouvez un parking propre, non glissant et sécurisé pour les résidents et visiteurs de votre immeuble ou entreprise à Chelles.",
      whyUsBullets: [
        "Notre expérience sur Chelles nous a familiarisés avec les spécificités des parkings locaux, qu’il s’agisse des sous-sols des grandes résidences des années 70 ou des parkings aériens des zones d’activité. Nous connaissons les défis posés par la poussière noire issue du trafic routier intense et adaptons notre protocole en conséquence.",
        "Nous disposons d’un parc matériel adapté aux différentes configurations : autolaveuses compactes pour les rampes étroites et les bas plafonds, kits de haute pression mobiles pour les angles difficiles d’accès. Nos produits dégraissants sont puissants mais respectueux des revêtements et de l’environnement.",
        "L’organisation est notre point fort. Nous planifions les interventions en horaires décalés (tôt le matin ou en soirée) ou par zones pour limiter au maximum la gêne pour les utilisateurs. Nous travaillons en étroite collaboration avec le gestionnaire pour informer les résidents ou les salariés et organiser le déplacement temporaire des véhicules si besoin.",
        "La sécurité et la conformité environnementale sont intégrées à notre démarche. Nous veillons à ce que les sols ne restent pas glissants après notre passage et nous gérons l’évacuation des eaux usées de nettoyage dans le respect des règles locales, sans risque de contamination des réseaux."
      ],
      uniqueIntro: `<p>À Chelles, les parkings souterrains des copropriétés des quartiers comme les Arcades ou l'Aulnoy, ainsi que les parkings aériens des zones commerciales de la Trentaine ou près de la gare, sont soumis à une forte pression. La proximité d'axes majeurs comme la RN34 et la Francilienne génère un important dépôt de poussière noire, mélange de particules de pollution et d'abrasion des pneus. Dans les parkings plus anciens sous résidences, les rampes étroites, les places exiguës et les sols en béton brut accumulent taches d'huile, marquages effacés et salissures sur les murs, créant une atmosphère viciée et peu rassurante pour les résidents.</p>
<p>Le parking, qu’il soit souterrain ou aérien, est l’espace de transition entre la rue et le domicile ou le bureau. À Chelles, cet espace est souvent le premier impact visuel pour les résidents et visiteurs en rentrant dans une résidence. Sous l'effet du trafic quotidien et de la proximité des grands axes routiers, une pellicule de poussière noire, grasse et tenace se dépose inlassablement sur les sols, les murs et les plafonds. Les taches d’huile et de liquides de refroidissement s’accumulent sur les places de stationnement, tandis que les marquages au sol s’effacent peu à peu, créant une confusion pour le stationnement.</p>
<p>Cet encrassement progressif n’est pas qu’un problème esthétique. Il génère une sensation d’insécurité et de négligence, peut réduire l’efficacité de l’éclairage et, en cas de présence d’huile, augmente les risques de glissade. Pour un syndic ou un gestionnaire immobilier, l’état du parking influence directement la perception de la qualité de la copropriété ou de l’immeuble d’entreprise. Un nettoyage professionnel complet et périodique permet de restaurer la sécurité, la lisibilité et l’image de ces espaces, enlevant les dépôts incrustés et redonnant de la clarté aux lieux de passage.</p>`,
      uniqueDeepDive: `<p>Notre intervention sur les parkings de Chelles est structurée pour être efficace tout en minimisant les perturbations. Elle débute par une visite de diagnostic pour évaluer le revêtement (béton brut, peinture époxy), l’état des marquages, la configuration des accès (rampes, hauteurs sous plafond) et le système d’évacuation des eaux. Cette étape est cruciale pour choisir la méthode et les produits adaptés, notamment pour les parkings anciens où les siphons peuvent être inefficaces.</p>
<p>Nous organisons ensuite l’intervention par zones, en coordination étroite avec le gestionnaire, pour permettre une rotation des véhicules si nécessaire sans vider l’intégralité du parking. La première étape opérationnelle est un balayage mécanique puissant pour éliminer les graviers et la poussière lâche. Ensuite, selon les surfaces et les salissures, nous utilisons une autolaveuse industrielle équipée de brosses et d’un système de récupération des eaux, ou une unité de haute pression à eau chaude associée à des dégraissants biodégradables professionnels pour traiter les taches d’huile et la poussière noire incrustée.</p>
<p>Nous portons une attention particulière aux zones critiques : bordures, angles morts, pieds de mur et rampes. L’eau de lavage est récupérée et évacuée conformément à la réglementation, via le réseau d’eaux usées lorsque cela est autorisé. Pour maintenir un bon niveau de propreté et de sécurité, nous recommandons un nettoyage approfondi des parkings très fréquentés au moins une à deux fois par an.</p>`,
      specificChallenges: [
        "Les parkings des immeubles proches des axes routiers comme l'avenue de la Résistance ou l'avenue de Claye captent davantage de poussières de frein et de pollution.",
        "Les rampes d'accès, souvent étroites dans les constructions anciennes, sont des zones critiques où la saleté et l'huile s'accumulent, nécessitant un travail manuel précis.",
        "La gestion des eaux de lavage dans les parkings souterrains mal équipés en siphons ou bouches d'évacuation demande une préparation et un matériel de pompage adapté."
      ],
      faqAdditions: [
        {
          question: "La poussière noire revient très vite dans notre parking souterrain à Chelles, surtout ceux proches de la RN34. Votre nettoyage est-il efficace contre cela ?",
          answer: "Oui, cette poussière noire, très grasse, est caractéristique des zones à fort trafic. Un simple balayage ne fait que la déplacer. Notre méthode combine un prétraitement avec des produits dégraissants spécifiques et un lavage à l’eau chaude sous pression ou à l’autolaveuse, qui décroche et élimine la couche adhérente en profondeur. Le résultat est bien plus propre et durable qu’un simple nettoyage à l’eau, même si un entretien régulier reste nécessaire pour lutter contre ce phénomène récurrent."
        },
        {
          question: "Faut-il complètement vider le parking pour que vous interveniez ? Cela semble très contraignant.",
          answer: "Pas nécessairement. Dans la grande majorité des cas, nous organisons un nettoyage par secteurs successifs. Après accord avec le syndic, une information est diffusée aux occupants pour qu’ils libèrent une zone à une date/heure précise. Une fois cette zone traitée et sèche, les véhicules peuvent y revenir et nous passons à la suivante. Cette méthode évite de paralyser l’ensemble du parking et rend l’opération réalisable même dans les grandes résidences."
        },
        {
          question: "Pouvez-vous vraiment enlever les vieilles taches d’huile incrustées dans le béton de notre parking ?",
          answer: "Nous pouvons considérablement les atténuer, voire les éliminer si elles ne sont pas trop anciennes et profondément absorbées. Nous appliquons un dégraissant professionnel à temps de pose adapté qui pénètre et émulsionne les hydrocarbures, avant de les éliminer par lavage haute pression. Pour les taches très anciennes, une disparition complète n’est parfois pas possible, mais l’amélioration est toujours très nette et l’aspect général du sol est grandement amélioré."
        },
        {
          question: "Que faites-vous des eaux de lavage, souvent chargées d’huile et de graisse ? Est-ce conforme à la réglementation ?",
          answer: "La gestion des eaux usées est un point crucial. Notre processus intègre une récupération des eaux de lavage via les bacs de récupération de nos machines ou l’utilisation de bâches et de barrages absorbants. Ces eaux contaminées sont ensuite traitées par un prestataire spécialisé agréé, qui les élimine selon la réglementation en vigueur. Nous ne les rejetons jamais directement dans le réseau pluvial ou dans le milieu naturel, garantissant une intervention propre et responsable."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 3 – BALCONS / TERRASSES
    // =========================
    {
      serviceKey: "balcons",
      heroDescription:
        "Profitez à nouveau d'un balcon ou d'une terrasse propre, sain et agréable à vivre dans votre appartement à Chelles.",
      whyUsBullets: [
        "Nous intervenons régulièrement sur les différents types de balcons et terrasses de Chelles, des loggias vitrées des immeubles récents aux balcons en béton des résidences des années 80. Cette expérience nous permet de connaître les spécificités de chaque construction et d’adapter notre méthode en conséquence, pour un résultat optimal et sans dommage.",
        "Notre approche technique privilégie le respect du support. Nous sélectionnons avec soin les produits de nettoyage et réglons précisément la pression de notre matériel en fonction de la surface traitée. L’objectif est d’éliminer les salissures tenaces tout en préservant l’intégrité du carrelage, des joints et des finitions.",
        "L’organisation est simple et pratique pour vous. Nous convenons d’un créneau horaire précis, nous nous adaptons à votre présence et travaillons rapidement, généralement en 1 à 2 heures pour un balcon standard. Nous protégeons vos biens (meubles, plantes) et veillons à votre intimité pendant l’intervention, en limitant au maximum les projections et les éclaboussures."
      ],
      uniqueIntro: `<p>À Chelles, les balcons, loggias et terrasses d'appartements sont nombreux, qu'il s'agisse des résidences récentes de l'Aulnoy ou des Bords de Marne, ou des immeubles plus anciens du centre-ville. Ces espaces extérieurs sont exposés aux intempéries, à la pollution routière liée à la RN34 toute proche, et aux poussières des axes fréquentés. La végétation dense des bords de Marne et du bois des Coudreaux apporte aussi son lot de pollens, de feuilles et favorise le développement de mousses vertes sur les sols et les joints. Pour les résidents, ce qui devait être un espace de détente devient rapidement un lieu négligé à cause de cet encrassement constant et difficile à traiter seul.</p>
<p>Votre balcon ou terrasse à Chelles devait être un prolongement de votre salon, un coin de verdure ou un espace pour prendre l’air. Pourtant, au fil des saisons, cet espace précieux se transforme : les joints entre les carreaux noircissent, une pellonne grasse et tenace (mélange de pollution routière et de poussières) s’installe sur le sol et le garde-corps, et des traces vertes de mousse ou d’algues apparaissent, surtout si l’orientation est ombragée. Les résidus de feuilles des arbres voisins, les traces de pluie et, pour ceux qui l’utilisent, les projections d’un barbecue complètent le tableau.</p>
<p>Résultat, on ouvre de moins en moins la porte-fenêtre sur cet espace, qui finit par servir de débarras ou est tout simplement évité. Cette salissure permanente est décourageante et donne l’impression que le balcon est “perdu”. Pourtant, avec une intervention professionnelle adaptée, il est possible de repartir sur une base propre et saine. Redonner de la clarté et de la propreté à votre balcon, c’est retrouver des mètres carrés utiles et agréables, surtout dans une ville où les espaces extérieurs privatifs sont une véritable chance.</p>`,
      uniqueDeepDive: `<p>Notre intervention pour le nettoyage de balcon ou terrasse à Chelles est méticuleuse et respectueuse de votre intérieur. Elle commence par une protection systématique de la porte-fenêtre et des menuiseries avec des bâches, et par le déplacement délicat de vos meubles, pots de fleurs et objets personnels dans un coin protégé ou à l’intérieur, selon vos souhaits.</p>
<p>Nous procédons d’abord à un enlèvement manuel des gros dépôts : feuilles, terre, débris. Ensuite, selon la nature de votre sol (carrelage, béton, dalles bois composite, résine), nous appliquons un produit nettoyant adapté qui dissout les graisses urbaines et les salissures incrustées sans attaquer le support. Le nettoyage proprement dit est réalisé avec une machine à pression adaptée, réglée sur un niveau suffisant pour décoller la saleté mais sans risque pour les joints ou l’étanchéité.</p>
<p>Une attention particulière est portée aux joints (que nous brossons spécifiquement), aux angles et au garde-corps (métal, verre ou PVC), qui accumulent souvent le plus de saleté. Tout au long du processus, nous veillons à la gestion de l’eau et des résidus pour éviter tout écoulement gênant chez les voisins du dessous ou le long de la façade. Après rinçage, nous laissons l’espace propre et nettoyé. Le sol met quelques heures à sécher complètement. Nous vous donnerons ensuite quelques conseils simples pour entretenir cet état de propreté plus longtemps.</p>`,
      specificChallenges: [
        "La pollution liée au trafic de la RN34 et de l'autoroute A4 à proximité dépose un film grisâtre tenace sur les balcons des immeubles en bordure de voie.",
        "L'ombre portée des grands immeubles dans certains quartiers comme Les Arcades favorise le développement de mousses et de lichens sur les sols et les garde-corps.",
        "Les balcons équipés de claustras ou de garde-corps en fer forgé nécessitent un nettoyage minutieux et manuel pour atteindre toutes les parties."
      ],
      faqAdditions: [
        {
          question: "Le nettoyage à haute pression ne risque-t-il pas d’abîmer le carrelage ou d’arracher les joints de mon balcon ?",
          answer: "C’est une préoccupation légitime. C’est pourquoi nous n’utilisons pas de nettoyeur haute pression grand public sur puissance maximale. Notre matériel professionnel permet un réglage précis de la pression et du débit d’eau. Nous utilisons une pression douce à moyenne, combinée à des produits adaptés qui dissolvent la saleté, pour un nettoyage en profondeur sans agression mécanique. Les joints sont traités avec une brosse spécifique, sans risque de les dégrader."
        },
        {
          question: "Comment gérez-vous l’écoulement de l’eau et des produits pour ne pas inonder mon voisin du dessous ou salir la façade ?",
          answer: "La gestion de l’eau est une partie cruciale de notre protocole. Nous travaillons toujours du fond du balcon vers l’extérieur, en dirigeant le flux d’eau et de saleté vers la gouttière ou le système d’évacuation prévu. Si nécessaire, nous utilisons des chiffons absorbants ou des raclettes pour limiter l’excédent d’eau. De plus, nous bâchons souvent la base du garde-corps pour éviter les coulures sur la façade. Ces précautions permettent un nettoyage propre et sans nuisance pour les autres."
        },
        {
          question: "Les produits que vous utilisez sont-ils nocifs pour mes plantes d’ornement ou pour mon chien/chat ?",
          answer: "Nous privilégions l’utilisation de produits biodégradables et non toxiques pour l’environnement, surtout dans des espaces aussi proches du lieu de vie. Avant l’intervention, nous vous invitons à rentrer vos plantes délicates ou à les protéger. Les produits sont rincés abondamment à l’eau claire, il ne reste donc aucun résidu actif après notre passage. Une fois le sol sec (quelques heures après), votre animal pourra à nouveau accéder à l’espace en toute sécurité."
        },
        {
          question: "Combien de temps faut-il attendre pour pouvoir remettre les meubles et réutiliser le balcon après votre passage ?",
          answer: "Le temps de séchage complet dépend de la météo (ensoleillement, vent) et de la porosité du sol. En général, un carrelage standard est praticable et sec en 2 à 4 heures. Nous vous conseillons d’attendre ce délai avant de remettre vos meubles en place pour éviter les traces d’humidité. Pour une utilisation complète (mettre un tapis, s’allonger), il est préférable d’attendre le lendemain pour être certain que les joints également soient bien secs."
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
        "Reprenez possession de votre balcon souillé par les pigeons avec notre protocole de nettoyage et de désinfection complet et sécurisé à Chelles.",
      whyUsBullets: [
        "Nous intervenons régulièrement sur ce problème spécifique à Chelles, connaissant bien les immeubles et quartiers où les nuisances aviaires sont les plus présentes. Cette expérience nous permet d'agir avec méthode et efficacité, en comprenant les contraintes d'accès et les configurations des balcons.",
        "Notre priorité absolue est la sécurité, tant pour nos techniciens que pour les occupants. Notre protocole rigoureux, de l'équipement de protection à l'utilisation de désinfectants homologués, est conçu pour éliminer les risques sanitaires liés à la manipulation des fientes de pigeons.",
        "Nous veillons à ce que l'intervention soit la plus discrète et propre possible. Nous informons si besoin les voisins immédiats pour éviter les inquiétudes et prenons toutes les dispositions pour qu'aucune projection ou écoulement ne vienne salir les façades ou les balcons inférieurs.",
        "Nous assurons une prise en charge complète et responsable des déchets contaminés, depuis leur conditionnement sur place jusqu'à leur évacuation vers les filières de traitement adaptées, conformément à la réglementation en vigueur sur les déchets biologiques."
      ],
      uniqueIntro: `<p>À Chelles, la présence de nombreux espaces verts comme les bords de Marne, le bois des Coudreaux ou les parcs urbains, combinée aux nombreux immeubles d'habitation, offre un habitat idéal pour les pigeons. Les balcons, surtout ceux situés en étage dans les quartiers comme le Mont Chalâts, les Arcades ou près du centre-ville, sont souvent utilisés comme perchoirs ou sites de nidification par ces oiseaux. Les fientes s'accumulent alors rapidement, créant des plaques dures et acides, des odeurs tenaces et un risque sanitaire palpable. Cette situation peut générer des conflits au sein des copropriétés et rend le balcon totalement inutilisable pour le résident.</p>
<p>Un balcon souillé par des fientes de pigeons n'est pas qu'un désagrément visuel, c'est une situation contraignante et potentiellement dangereuse. À Chelles, où les pigeons sont nombreux, votre espace extérieur peut rapidement se transformer en zone d'accumulation : les déjections forment des couches dures et blanchâtres, corrosives pour le carrelage et le métal du garde-corps. Une odeur âcre et persistante se dégage, empêchant d'ouvrir la porte-fenêtre.</p>
<p>Au-delà de la gêne olfactive et de l'impossibilité d'utiliser le balcon, cette situation soulève de réelles préoccupations sanitaires. Les fientes de pigeons peuvent abriter des bactéries, des champignons et des parasites. Le simple fait de vouloir nettoyer soi-même expose à l'inhalation de poussières contaminées. Pour les bailleurs ou les syndics, ces situations dégradées sont aussi sources de tensions entre voisins. Face à ce type de souillure spécifique, un nettoyage superficiel est insuffisant et risqué. Une intervention professionnelle, sécurisée et suivie d'une désinfection approfondie, est la seule solution pour assainir durablement l'espace et le rendre à nouveau sain et utilisable.</p>`,
      uniqueDeepDive: `<p>Notre intervention pour un balcon contaminé par des fientes de pigeons suit un protocole strict de sécurité et d'efficacité. Avant toute action, nos techniciens se équipent d'Équipements de Protection Individuelle (EPI) adaptés : combinaison intégrale, gants, masque respiratoire FFP2 et lunettes de protection. Nous installons également des bâches de protection pour isoler la zone de travail et éviter toute projection ou contamination de votre intérieur.</p>
<p>La première étape consiste à humidifier soigneusement les déjections sèches afin de supprimer les poussières volatiles. Ensuite, nous procédons au ramassage manuel et mécanique des fientes, ainsi qu'à l'enlèvement des éventuels nids ou débris. Ces déchets biologiques sont conditionnés dans des sacs étanches et résistants pour l'évacuation. Une fois les surfaces dégagées, nous appliquons un nettoyant spécifique haute pression pour éliminer les traces incrustées et l'acidité.</p>
<p>L'étape cruciale est la désinfection. Nous appliquons un produit virucide et bactéricide homologué, en respectant scrupuleusement son temps de contact nécessaire pour éliminer les pathogènes. Après rinçage, l'espace est assaini. Nous vous conseillons ensuite une aération prolongée et de patienter 24 heures avant de réutiliser pleinement le balcon. Nous pouvons également vous orienter vers des solutions de dissuasion des pigeons pour prévenir une récurrence rapide du problème.</p>`,
      specificChallenges: [
        "Les immeubles de Chelles situés à proximité du Bois des Coudreaux ou des grands parcs sont plus exposés aux pigeons nicheurs, nécessitant des interventions régulières.",
        "Les fientes accumulées depuis longtemps sur du béton ou du carrelage poreux peuvent avoir causé des taches permanentes ou une légère corrosion, que nous signalons avant intervention.",
        "La gestion des relations de voisinage est cruciale lors de ce type d'intervention sensible ; nous veillons à prévenir les résidents immédiats et à travailler de manière discrète et propre."
      ],
      faqAdditions: [
        {
          question: "Quels sont les risques sanitaires réels et pourquoi ne pas nettoyer moi-même ?",
          answer: "Les fientes de pigeons sèches peuvent libérer des poussières contenant des agents pathogènes, comme des bactéries (ex : Chlamydia psittaci) ou des champignons (ex : responsable de la cryptococcose). Les inhaler présente un risque. De plus, les déjections sont corrosives et acides. Un nettoyage professionnel avec EPI et désinfection est indispensable pour éliminer ces dangers biologiques et assurer un assainissement complet, pas seulement un nettoyage de surface."
        },
        {
          question: "Les produits de désinfection que vous utilisez sont-ils dangereux pour ma famille ou mes animaux après séchage ?",
          answer: "Les produits désinfectants que nous employons sont des biocides homologues pour cet usage. Ils sont appliqués, puis rincés abondamment à l'eau claire selon le protocole du fabricant. Une fois l'intervention terminée et après le temps de séchage conseillé (environ 24 heures), il ne reste aucun résidu actif ou dangereux sur les surfaces. Votre balcon est alors sanitairement sûr pour un usage normal."
        },
        {
          question: "Les fientes peuvent-elles avoir abîmé définitivement mon carrelage ou la peinture du garde-corps ?",
          answer: "L'acidité des fientes est effectivement corrosive. Sur de la peinture métallique, elle peut provoquer des écaillages et de la rouille. Sur du carrelage non émaillé ou du béton, elle peut causer des taches permanentes ou une altération de la surface. Notre intervention permet d'éliminer toute matière active et de stopper le processus de corrosion. Nous pouvons atténuer les traces, mais si la dégradation est ancienne et profonde, une restauration (ponçage, peinture) pourra être nécessaire après notre nettoyage et désinfection."
        },
        {
          question: "Que deviennent les déchets (fientes, nids) que vous enlevez ?",
          answer: "Ces déchets sont considérés comme des déchets contaminés. Ils sont immédiatement placés dans des sacs étanches et résistants, spécifiquement identifiés, sur le lieu d'intervention. Ils sont ensuite évacués par nos soins vers des filières d'élimination agréées pour les déchets d'activités de soins à risques infectieux (DASRI) ou assimilés, garantissant une destruction conforme et sécurisée, sans risque pour l'environnement."
        }
      ],
      ctaOverride: ""
    },

    // =========================
    // SERVICE 5 – CANAPÉS / TAPIS / MATELAS
    // =========================
    {
      serviceKey: "canapes-tapis",
      heroDescription:
        "Redonnez fraîcheur, confort et propreté à vos canapés, tapis et matelas directement chez vous à Chelles.",
      whyUsBullets: [
        "Nous intervenons chez les particuliers de Chelles, que ce soit dans un appartement du centre-ville ou une maison du quartier Chantereine. Notre équipe est habituée à s'adapter aux contraintes de chaque logement (accès, encombrement) pour travailler efficacement et discrètement, avec le moins de gêne possible pour votre famille.",
        "Notre technicien possède une connaissance pratique des différents textiles et des protocoles de nettoyage adaptés. Nous n'utilisons pas la même méthode sur un canapé en velours, un tapis en laine ou un matelas. Cette expertise permet de traiter efficacement les salissures tout en préservant l'intégrité et la couleur des tissus.",
        "Nous croyons en la transparence. Avant toute intervention, nous vous expliquons clairement ce qui est réalisable et les résultats que vous pouvez attendre, sans promettre l'impossible. Après le nettoyage, nous vous donnons des conseils pratiques pour entretenir le résultat et identifier l'origine de certaines taches récurrentes."
      ],
      uniqueIntro: `<p>À Chelles, que vous habitiez un pavillon avec jardin dans les Coudreaux ou un appartement en centre-ville, les textiles de la maison sont au cœur de la vie de famille. Canapés, tapis et matelas accumulent au quotidien les traces d'une vie active : miettes, taches de boissons, poils d'animaux, poussière et humidité apportée de l'extérieur. Dans un environnement familial ou avec des animaux de compagnie, ces éléments deviennent des nids à allergènes, acariens et odeurs discrètes que le nettoyage courant ne suffit pas à éliminer, laissant une impression de saleté persistante.</p>
<p>Votre canapé, votre tapis ou votre matelas sont des éléments de confort qui s'usent avec le temps, souvent sans que l'on s'en rende compte. À Chelles, entre les sorties au parc des Coudreaux, les retours de l'école ou les soirées entre amis, ces textiles absorbent les résidus du quotidien : taches alimentaires, transpiration, poils d'animaux, poussière fine et acariens. Peu à peu, les couleurs ternissent, des odeurs tenaces s'installent et le tissu perd de sa douceur.</p>
<p>Cet encrassement invisible a un impact direct sur votre confort et votre environnement intérieur. Un canapé taché peut gêner lorsque vous recevez, un tapis souillé devient un nid à poussière et un matelas non entretenu peut aggraver des allergies ou troubles du sommeil. Passer l'aspirateur ou utiliser des produits ménagers grand public offre une solution de surface, temporaire. Un nettoyage professionnel en profondeur permet, lui, de redonner à vos textiles leur aspect d'origine, d'éliminer les allergènes et les odeurs incrustées, pour retrouver un intérieur sain et confortable.</p>`,
      uniqueDeepDive: `<p>Notre intervention à votre domicile à Chelles commence par un examen des textiles à traiter. Notre technicien identifie la nature des tissus (coton, laine, synthétique, cuir) et le type de taches présentes (graisse, vin, urine d'animal, etc.) pour choisir la méthode et les produits adaptés, garantissant ainsi le respect de vos biens.</p>
<p>Nous procédons d'abord à un pré-traitement manuel des taches les plus tenaces avec des agents spécifiques. Ensuite, la méthode principale est le nettoyage par injection-extraction à l'eau chaude. Cette technique professionnelle injecte une solution nettoyante en profondeur dans les fibres et aspire immédiatement l'eau sale, emportant avec elle la saleté, les acariens et les allergènes. Pour les tapis délicats ou les matelas, nous adaptons la pression et la méthode.</p>
<p>Nous accordons une attention particulière au séchage, clé de voûte d'un bon nettoyage. Nous utilisons des extracteurs puissants pour retirer un maximum d'humidité et vous donnons des conseils pour aérer efficacement la pièce (ouvrir les fenêtres, utiliser un ventilateur). Le séchage complet est généralement rapide. Nous vous conseillons également sur quelques gestes simples pour prolonger la propreté de vos textiles entre deux interventions professionnelles.</p>`,
      specificChallenges: [
        "Dans les pavillons avec jardin des quartiers comme Chantereine, les tapis d'entrée et les canapés sont plus exposés aux salissures de terre et de sable.",
        "Les familles avec de jeunes enfants ou des animaux de compagnie à Chelles font face à des taches organiques (lait, urine) nécessitant un traitement enzymatique spécifique pour éliminer les odeurs.",
        "Les appartements parfois moins aérés, notamment en rez-de-chaussée, peuvent présenter des problèmes d'humidité favorisant acariens et odeurs de moisi dans les textiles épais."
      ],
      faqAdditions: [
        {
          question: "Le nettoyage est-il efficace contre les acariens et les allergènes qui provoquent des allergies ?",
          answer: "Oui, la méthode par injection-extraction que nous employons est reconnue pour son efficacité contre les allergènes. En injectant la solution en profondeur et en aspirant immédiatement, nous délogeons et évacuons une grande partie des acariens, de leurs déjections (principaux allergènes) et des poussières fines incrustées. C'est une nette amélioration par rapport à l'aspiration classique. Pour un résultat optimal contre les allergies, un nettoyage régulier des textiles est recommandé."
        },
        {
          question: "Pouvez-vous vraiment enlever les vieilles taches d'urine de chien ou de chat et l'odeur associée ?",
          answer: "Nous obtenons des résultats très satisfaisants sur les taches d'urine, à condition qu'elles n'aient pas été préalablement traitées avec des produits inadaptés (type eau de javel, qui fixe l'odeur). Nous utilisons des enzymes spécifiques qui \"digèrent\" les composants urinaires responsables des taches et des odeurs. L'extraction permet ensuite de tout évacuer. Pour les taches très anciennes et profondes (dans la mousse du canapé ou du matelas), une élimination à 100% n'est pas toujours garantie, mais l'amélioration est toujours très significative."
        },
        {
          question: "Combien de temps faut-il avant de pouvoir réutiliser mon canapé ou marcher sur mon tapis ?",
          answer: "Grâce à notre extraction puissante, les textiles sont laissés seulement légèrement humides. En conditions normales d'aération (fenêtre ouverte, circulation d'air), un canapé ou un tapis est généralement sec au toucher en 4 à 6 heures, et complètement sec en profondeur en 6 à 12 heures. Nous vous conseillons d'attendre au moins 12 heures avant d'utiliser normalement le canapé pour la nuit ou de remettre des meubles lourds sur le tapis."
        },
        {
          question: "Que dois-je faire pour préparer mon logement avant votre arrivée ?",
          answer: "Peu de préparation est nécessaire, nous nous adaptons à vous. Idéalement, libérez l'accès aux éléments à nettoyer (dégagez le tour du canapé, enlevez les objets sur le tapis). Pour un canapé, retirez les coussins amovibles. Pour un matelas, retirez la literie. Pensez également à mettre à l'abri les objets fragiles ou électroniques à proximité. Enfin, prévoyez une prise électrique accessible à proximité. Nous nous chargeons du reste."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;