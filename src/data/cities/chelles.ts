const city: City = {
  name: "Chelles",
  slug: "chelles",
  postalCodes: ["77500"],

  customDescription: "À Chelles, la forte densité résidentielle autour de la gare RER E et l'alternance entre pavillons anciens du centre historique et grandes résidences des Coudreaux facilitent la circulation des nuisibles. Les déplacements pendulaires vers Paris et la proximité des bords de Marne accélèrent la dispersion accidentelle dans les foyers.",

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne"
  },

  districts: ["Centre-ville", "Coudreaux", "Aulnoy", "Chantereine", "Bords de Marne", "Arcades"],
  nearbyCities: ["torcy", "montfermeil", "gagny", "vaires-sur-marne", "courtry", "brou-sur-chantereine"],

  landmarks: [
    "Gare de Chelles - Gournay",
    "Centre commercial Terre-Ciel",
    "Parc du Souvenir Émile-Fouchard",
    "Fort de Chelles",
    "Mairie de Chelles",
    "Bords de Marne"
  ],

  specificChallenges: [
    "L'humidité constante des bords de Marne favorise le développement de mousses et lichens sur les balcons exposés, nécessitant un décrassage régulier des surfaces extérieures.",
    "La densité du quartier gare et l'intense circulation sur la RN34 génèrent des dépôts de pollution atmosphérique qui encrassent rapidement les vitres et noircissent les textiles d'ameublement.",
    "Les résidences des années 1960-70 du quartier Noue-Brossard présentent des moquettes d'escalier vieillissantes où s'incrustent poussières et salissures du passage quotidien.",
    "Les parkings souterrains des copropriétés récentes d'Aulnoy accumulent traces d'huile et résidus de sel hivernal, compliquant l'entretien des sols béton."
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: ''
  },

  services: [
    {
      serviceKey: 'moquettes',
      heroDescription: "À Chelles, les moquettes des halls d'entrée et escaliers des résidences subissent un passage intense lié à la proximité de la gare RER E.",
      whyUsBullets: [
        "Intervention maîtrisée dans les copropriétés denses du centre-ville et des Coudreaux",
        "Matériel injection-extraction adapté aux moquettes d'escalier encrassées par le passage quotidien",
        "Créneaux aménagés en journée pour limiter la gêne des résidents actifs"
      ],
      uniqueIntro: `<p>À Chelles, les copropriétés du centre-ville et des nouveaux quartiers comme Aulnoy présentent des moquettes d'escalier très sollicitées.</p>
<p>Entre les allées et venues vers la gare RER E et l'usure naturelle, ces surfaces textiles accumulent rapidement poussières urbaines et traces de passage.</p>
<p>Un entretien professionnel permet de prolonger leur durée de vie tout en conservant un aspect soigné dans les parties communes.</p>`,
      uniqueDeepDive: `<p>Dans les résidences chelloises, l'entretien des moquettes demande une approche technique adaptée aux contraintes d'accès des immeubles anciens et récents.</p>
<ul>
  <li>Diagnostic préalable pour évaluer l'état des fibres et identifier les zones de forte usure près des boîtes aux lettres</li>
  <li>Protection des surfaces adjacentes et balisage des escaliers pendant l'intervention</li>
  <li>Injection-extraction à haute pression pour désincruster les salissures urbaines et les dépôts liés au passage</li>
  <li>Adaptation du matériel aux contraintes d'accès des résidences du vieux Chelles</li>
</ul>
<p>L'intervention se déroule par paliers successifs, avec un séchage maîtrisé pour permettre une remise en circulation rapide des escaliers.</p>`,
      specificChallenges: [],
      faqAdditions: [
        { 
          question: "La pollution de l'avenue de la Résistance encrasse-t-elle plus vite les moquettes d'entrée ?", 
          answer: "Effectivement, la circulation dense vers la gare génère des particules qui s'incrustent plus rapidement dans les fibres textiles des halls d'entrée. Nos produits professionnels éliminent ces dépôts urbains sans abîmer la moquette."
        },
        { 
          question: "Intervenez-vous dans les grands ensembles du quartier Arcades ?", 
          answer: "Nous traitons régulièrement les parties communes des résidences collectives de tous les quartiers de Chelles, y compris les grands ensembles. Notre matériel s'adapte aux contraintes d'accès de ces bâtiments."
        },
        { 
          question: "Le stationnement est-il possible pour votre camion près des résidences du centre historique ?", 
          answer: "Nous organisons systématiquement une reconnaissance préalable pour identifier les possibilités de stationnement. Dans le centre ancien, nous adaptons notre matériel et privilégions les créneaux de moindre circulation."
        },
        { 
          question: "Vos produits respectent-ils les parquets anciens des maisons chelloises ?", 
          answer: "Nos produits sont sélectionnés pour leur compatibilité avec tous types de revêtements. Pour les parquets d'époque, nous appliquons un protocole spécifique avec protection renforcée des surfaces bois."
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: 'parkings',
      heroDescription: "Dans les parkings souterrains de Chelles, l'accumulation de poussières, traces d'huile et résidus de sel hivernal nécessite un nettoyage professionnel régulier.",
      whyUsBullets: [
        "Expertise des parkings en sous-sol des résidences récentes d'Aulnoy et du quartier gare",
        "Autolaveuse professionnelle pour traiter efficacement les sols béton encrassés",
        "Horaires adaptés aux contraintes d'accès des copropriétés et de circulation des résidents"
      ],
      uniqueIntro: `<p>Les parkings souterrains des copropriétés chelloises sont confrontés à des salissures spécifiques liées à l'usage quotidien.</p>
<p>Entre les traces d'huile des véhicules, les résidus de sel hivernal et l'accumulation de poussières, ces espaces requièrent un entretien technique adapté.</p>
<p>Notre intervention permet de retrouver un parking propre et sécurisé, tout en respectant l'organisation de la copropriété.</p>`,
      uniqueDeepDive: `<p>Dans les parkings chellois, l'intervention combine nettoyage de surface et traitement des salissures incrustées selon un protocole éprouvé.</p>
<ul>
  <li>Inspection préalable pour évaluer l'état du sol béton et localiser les taches d'hydrocarbures</li>
  <li>Balayage mécanique des détritus et débris accumulés dans les angles et caniveaux</li>
  <li>Autolaveuse avec détergent professionnel pour décaper les traces d'huile et résidus de sel</li>
  <li>Gestion des eaux de lavage selon les normes, particulièrement dans les parkings avec évacuation vers le réseau</li>
</ul>
<p>L'organisation tient compte des créneaux d'entrée et sortie des véhicules, avec possibilité d'intervention par zones pour maintenir l'accès.</p>`,
      specificChallenges: [],
      faqAdditions: [
        { 
          question: "L'humidité des bords de Marne pose-t-elle des problèmes spécifiques dans les parkings ?", 
          answer: "La proximité de la Marne peut effectivement créer une humidité résiduelle dans certains parkings. Nos produits et notre protocole de séchage sont adaptés pour traiter ces conditions particulières."
        },
        { 
          question: "Nettoyez-vous les parkings des résidences récentes du quartier Aulnoy ?", 
          answer: "Nous intervenons dans tous types de parkings souterrains à Chelles, des plus récents aux plus anciens. Chaque intervention est adaptée aux spécificités du parking et aux contraintes d'accès."
        },
        { 
          question: "L'accès avec votre matériel est-il possible dans les parkings à hauteur limitée ?", 
          answer: "Nous vérifions systématiquement les contraintes de hauteur lors de notre visite préalable. Notre matériel peut être adapté ou déplacé manuellement si nécessaire pour accéder à tous les parkings."
        },
        { 
          question: "Peut-on programmer l'intervention en soirée pour les copropriétés actives ?", 
          answer: "Nous proposons des créneaux en soirée ou le week-end pour s'adapter aux contraintes de circulation des résidents. Cette flexibilité est particulièrement appréciée dans les résidences proches de la gare."
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: 'balcons',
      heroDescription: "Les balcons des résidences chelloises, exposés aux poussières urbaines et à l'humidité des bords de Marne, nécessitent un décrassage professionnel.",
      whyUsBullets: [
        "Maîtrise des balcons exposés aux conditions spécifiques des bords de Marne et du centre dense",
        "Techniques de nettoyage respectueuses des revêtements et du voisinage immédiat",
        "Intervention programmée selon les contraintes des copropriétés et des horaires de tranquillité"
      ],
      uniqueIntro: `<p>À Chelles, les balcons des résidences sont particulièrement sollicités par l'environnement urbain et la proximité de la Marne.</p>
<p>L'humidité ambiante favorise le développement de mousses sur les garde-corps, tandis que la pollution urbaine laisse des dépôts tenaces sur les sols et mobiliers.</p>
<p>Un entretien professionnel redonne un aspect soigné à ces espaces extérieurs sans gêner le voisinage.</p>`,
      uniqueDeepDive: `<p>L'entretien des balcons chellois nécessite une approche technique adaptée aux différents revêtements et à l'exposition aux éléments.</p>
<ul>
  <li>Diagnostic des surfaces pour identifier mousses, lichens et dépôts selon l'exposition aux vents dominants</li>
  <li>Protection des biens mobiliers et des appartements adjacents pendant l'intervention</li>
  <li>Décrassage par monobrosse et produits adaptés aux carrelages, dalles ou revêtements spécifiques</li>
  <li>Traitement spécifique des garde-corps métalliques exposés à l'humidité des bords de Marne</li>
</ul>
<p>L'intervention respecte les horaires de tranquillité et les règles de copropriété, avec évacuation contrôlée des eaux de lavage.</p>`,
      specificChallenges: [],
      faqAdditions: [
        { 
          question: "L'humidité des bords de Marne accélère-t-elle l'encrassement des balcons ?", 
          answer: "L'humidité favorise effectivement le développement de mousses et lichens sur les surfaces exposées. Notre protocole inclut un traitement préventif adapté à ces conditions spécifiques aux abords de la Marne."
        },
        { 
          question: "Intervenez-vous dans les maisons individuelles du quartier des Coudreaux ?", 
          answer: "Nous traitons les balcons et terrasses de tous types d'habitations à Chelles, des maisons individuelles aux résidences collectives. Chaque intervention est adaptée au contexte du logement."
        },
        { 
          question: "Comment gérez-vous l'accès aux balcons des étages élevés ?", 
          answer: "L'accès se fait exclusivement par l'intérieur de l'appartement, avec protection complète des sols et mobiliers. Notre matériel portable permet d'intervenir à tous les étages sans contrainte particulière."
        },
        { 
          question: "Les horaires d'intervention respectent-ils la tranquillité des résidents ?", 
          answer: "Nous programmons systématiquement nos interventions aux heures autorisées par la copropriété, généralement en journée en semaine. Des créneaux weekend peuvent être aménagés selon les besoins."
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: 'balcons-fientes',
      heroDescription: "À Chelles, la prolifération de pigeons près des espaces verts et des bords de Marne génère des souillures importantes sur les balcons exposés.",
      whyUsBullets: [
        "Intervention ciblée dans les résidences exposées aux nuisances aviaires près du parc du Souvenir et des bords de Marne",
        "Protocole de désinfection complet respectant les normes sanitaires en milieu résidentiel",
        "Planification discrète pour préserver la tranquillité des occupants et du voisinage"
      ],
      uniqueIntro: `<p>Les balcons chellois sont régulièrement confrontés aux souillures de pigeons, particulièrement dans les secteurs proches des espaces verts.</p>
<p>Ces déjections créent non seulement un problème esthétique mais aussi sanitaire, nécessitant un traitement spécialisé.</p>
<p>Notre intervention combine nettoyage en profondeur et désinfection pour retrouver un balcon sain et utilisable.</p>`,
      uniqueDeepDive: `<p>Le traitement des souillures aviaires sur les balcons chellois suit un protocole sanitaire strict adapté au milieu résidentiel.</p>
<ul>
  <li>Évaluation de l'étendue des souillures et identification des zones de nidification potentielles</li>
  <li>Équipements de protection renforcés pour l'intervenant et protection hermétique des espaces intérieurs</li>
  <li>Décapage mécanique des fientes incrustées puis désinfection avec produits bactéricides et virucides</li>
  <li>Rinçage contrôlé avec récupération des eaux souillées selon les normes environnementales</li>
</ul>
<p>L'intervention se termine par des conseils de prévention adaptés à la configuration du balcon et à son exposition aux passages d'oiseaux.</p>`,
      specificChallenges: [],
      faqAdditions: [
        { 
          question: "La proximité du parc du Souvenir aggrave-t-elle les problèmes de fientes sur les balcons ?", 
          answer: "Les espaces verts attirent effectivement les pigeons qui peuvent ensuite se poser sur les balcons environnants. Notre protocole de désinfection est spécialement conçu pour ces situations récurrentes."
        },
        { 
          question: "Traitez-vous les balcons des résidences du centre-ville exposées aux nuisances aviaires ?", 
          answer: "Nous intervenons sur tous types de balcons souillés par les fientes d'oiseaux, dans tous les quartiers de Chelles. Chaque situation est évaluée pour adapter le protocole de désinfection."
        },
        { 
          question: "L'intervention nécessite-t-elle l'évacuation temporaire de l'appartement ?", 
          answer: "L'évacuation n'est généralement pas nécessaire. Nous protégeons hermétiquement l'accès intérieur et travaillons exclusivement sur l'espace extérieur avec des équipements adaptés."
        },
        { 
          question: "Proposez-vous des conseils pour limiter le retour des pigeons après nettoyage ?", 
          answer: "Après désinfection, nous fournissons des recommandations pratiques sur l'aménagement du balcon pour décourager la nidification, adaptées à la configuration de chaque espace."
        }
      ],
      ctaOverride: ""
    },
    {
      serviceKey: 'canapes-tapis',
      heroDescription: "Dans les logements chellois, l'entretien des canapés et tapis permet d'éliminer poussières urbaines, odeurs et taches du quotidien familial.",
      whyUsBullets: [
        "Intervention à domicile dans tous les quartiers de Chelles, des pavillons du centre aux appartements récents",
        "Matériel d'injection-extraction portable adapté aux textiles d'ameublement délicats",
        "Créneaux flexibles en journée, soirée ou week-end selon les disponibilités des occupants"
      ],
      uniqueIntro: `<p>Les textiles d'ameublement des foyers chellois sont exposés quotidiennement aux poussières urbaines et à l'usage familial.</p>
<p>Entre les traces de vie quotidienne et l'accumulation de particules liées à la circulation proche, canapés et tapis perdent progressivement leur aspect d'origine.</p>
<p>Un nettoyage professionnel à domicile permet de retrouver fraîcheur et propreté sans contrainte de transport.</p>`,
      uniqueDeepDive: `<p>L'entretien des textiles d'ameublement à domicile à Chelles combine expertise technique et respect de l'environnement familial.</p>
<ul>
  <li>Diagnostic des textiles pour identifier la nature des fibres et adapter les produits de traitement</li>
  <li>Protection soignée du mobilier adjacent et des sols pendant toute l'intervention</li>
  <li>Injection-extraction avec aspiration puissante pour éliminer salissures incrustées et résidus de produits</li>
  <li>Séchage accéléré pour permettre une réutilisation rapide des textiles traités</li>
</ul>
<p>L'intervention se déroule entièrement au domicile, avec des créneaux adaptés aux contraintes familiales et professionnelles des occupants.</p>`,
      specificChallenges: [],
      faqAdditions: [
        { 
          question: "La pollution urbaine de Chelles encrasse-t-elle plus vite les textiles d'intérieur ?", 
          answer: "La circulation dense et la proximité de axes routiers génèrent effectivement des particules fines qui s'incrustent dans les fibres. Nos produits professionnels éliminent ces dépôts sans abîmer les textiles."
        },
        { 
          question: "Intervenez-vous dans les maisons du quartier Chantereine ?", 
          answer: "Nous nous déplaçons dans tous les quartiers de Chelles pour traiter vos textiles d'ameublement à domicile. Notre matériel portable s'adapte à tous types de logements."
        },
        { 
          question: "Le stationnement est-il facile pour votre technicien dans les rues résidentielles ?", 
          answer: "Notre technicien se déplace avec un véhicule compact pour faciliter le stationnement dans les quartiers résidentiels. Nous organisons toujours l'intervention pour minimiser les contraintes."
        },
        { 
          question: "Vos produits conviennent-ils aux textiles délicats des canapés récents ?", 
          answer: "Nous adaptons systématiquement nos produits et techniques au type de textile traité. Un test préalable sur zone non visible garantit la compatibilité avec les tissus les plus délicats."
        }
      ],
      ctaOverride: ""
    }
  ]
};

export default city;