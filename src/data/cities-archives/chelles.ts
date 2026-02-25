import type { City } from "~/types/geo";

const city: City = {
  name: "Chelles",
  slug: "chelles",
  postalCodes: ["77500"],

  department: {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne",
  },

  // customDescription : STRICTEMENT SANS BALISES (texte brut)
  customDescription: "Pôle multimodal RER E et Transilien P, au pied de la Montagne de Chelles",

  // hubIntro : HTML autorisé (voir règles ci-dessous)
  hubIntro: "",

  // HTML autorisé (sans <h3>)
  citySpecificChallenges: [
    "Stationnement compliqué autour de la gare et en hyper-centre limitant l'usage de matériel volumineux.",
    "Escaliers étroits et halls anciens dans le centre-ville contraignant le passage des machines standards.",
    "Horaires d'intervention sensibles pour les bureaux de la ZAE et les commerces (nécessité d'intervenir hors heures de travail).",
  ],

  // Texte brut uniquement
  districts: [
    "Centre-ville",
    "Les Coudreaux",
    "Les Abbesses",
    "Gambetta",
    "Grande Prairie",
    "Mont Chalats",
    "La Noue Brossard",
    "Chantereine",
  ],
  nearbyCities: [
    "Gournay-sur-Marne",
    "Champs-sur-Marne",
    "Vaires-sur-Marne",
    "Montfermeil",
    "Brou-sur-Chantereine",
  ],

  // Texte brut uniquement
  landmarks: [
    "Gare de Chelles-Gournay",
    "Centre Commercial Terre Ciel",
    "ZAE La Trentaine",
    "Montagne de Chelles",
    "Parc du Souvenir",
  ],

  // faq[].answer : HTML autorisé (sans <h3>)
  faq: [],

  testimonial: {
    text: "",
    author: "",
    role: "",
    building: "",
  },

  ctaOverride: "",

  // IMPORTANT: Services absents : ne pas les inclure dans services (ne pas générer l’objet).
  services: [
    {
      serviceKey: "moquettes",
      heroDescription: "Un nettoyage en profondeur des moquettes et dalles textiles par injection-extraction, adapté aux contraintes d'accès des bureaux et commerces de Chelles, avec séchage optimisé et remise en service rapide.",
      whyUsBullets: [
        "Expertise des bureaux et commerces de la ZAE La Trentaine et zones tertiaires de Chelles, avec maîtrise des typologies de moquettes récentes et anciennes.",
        "Injection-extraction professionnelle avec extraction maximale d'humidité, adaptée aux dalles textiles et moquettes bouclées des espaces tertiaires.",
        "Intervention en horaires décalés pour minimiser la gêne, gestion du stationnement matériel en zones saturées, coordination avec syndics et gestionnaires.",
      ],
      uniqueIntro: `<p>Dans les zones tertiaires de Chelles — bureaux de la ZAE La Trentaine, commerces du Centre Terre Ciel, cabinets libéraux du centre-ville — les moquettes et dalles textiles accumulent rapidement poussières, traces de chaussures et salissures liées au trafic quotidien. Après quelques mois, même un entretien régulier à l'aspirateur ne suffit plus : les fibres restent ternes, les taches s'incrustent, et les odeurs persistent.</p>

<p class="mt-4">Un nettoyage professionnel <strong>redonne aux sols textiles leur aspect d'origine</strong>, améliore l'hygiène perçue et prolonge la durée de vie des moquettes. Pour les bureaux, c'est aussi un signal de professionnalisme auprès des clients et collaborateurs. Pour les commerces comme ceux autour de Terre Ciel, c'est une question de confort client et d'image de marque.</p>

<p class="mt-4">Notre approche repose sur un diagnostic préalable du type de moquette, de la nature des taches et des contraintes d'accès propres à chaque bâtiment — escaliers étroits du centre-ville, halls d'immeubles anciens, ou plateaux ouverts de la ZAE. Nous adaptons le matériel et les horaires pour <strong>minimiser la gêne</strong>.</p>`,
      uniqueDeepDive: `<h3>Diagnostic et préparation</h3>
<p>Avant toute intervention, nous inspectons le type de moquette (bouclée, velours, dalles textiles), identifions les taches (café, tanin, graisses, anciennes) et évaluons les contraintes d'accès spécifiques au site — escaliers étroits, halls sécurisés, zones de stationnement limitées. Nous protégeons les plinthes, bas de murs et mobilier fixe. Un balisage est mis en place si nécessaire dans les parties communes.</p>

<h3>Traitement par zones</h3>
<p><strong>L'injection-extraction</strong> est appliquée zone par zone : bureaux ouverts, couloirs, escaliers, salles de réunion. Les passages intensifs (entrées, circulations) reçoivent plusieurs passes pour éliminer les salissures incrustées. Un détachage ciblé complète le traitement sur les taches persistantes, selon le type de fibre.</p>

<h3>Séchage et finalisation</h3>
<p>Après extraction maximale de l'humidité, nous ventilons les espaces et estimons le temps de séchage selon l'épaisseur de la moquette et la ventilation disponible (généralement 4 à 8 heures pour une remise en service rapide).</p>
<p class="mt-4">Nous communiquons les consignes de non-piétinement et recommandons une fréquence d'entretien adaptée au trafic local.</p>`,
      specificChallenges: [
        "Escaliers étroits et halls anciens du centre-ville limitent le passage du matériel injection-extraction.",
        "Stationnement difficile autour de la gare et zones commerciales complique la logistique de livraison.",
        "Moquettes bouclées des bureaux retiennent les salissures fines liées au trafic RER E et Transilien P.",
        "Horaires d'intervention doivent s'adapter aux activités commerciales et bureaux (hors heures de travail).",
        "Dalles textiles de la ZAE La Trentaine nécessitent un détachage ciblé sans risque d'abîmer les fibres.",
      ],
      faqAdditions: [
        {
          question: "Les cages d'escalier étroites du centre-ville de Chelles permettent-elles le passage d'une shampouineuse industrielle pour nettoyer la moquette ?",
          answer: `<p>Non, les escaliers étroits du centre-ville historique ne permettent pas le passage d'une shampouineuse standard. Nous utilisons alors une méthode alternative : <strong>injection-extraction manuelle</strong> avec équipement portatif, ou nettoyage par sections détachables. Nous évaluons l'accès lors du diagnostic et proposons la solution la plus adaptée sans forcer le passage.</p>`,
        },
        {
          question: "Combien de temps faut-il pour que la moquette d'un commerce près du Centre Commercial Terre Ciel sèche après un shampouinage professionnel ?",
          answer: `<p>Le séchage dépend de l'épaisseur de la moquette et de la ventilation disponible. Pour les commerces de Terre Ciel, comptez généralement <strong>4 à 8 heures</strong> avant remise en service complète. Nous optimisons l'extraction d'humidité et recommandons une ventilation active (portes ouvertes, ventilateurs) pour accélérer le processus et minimiser la fermeture du commerce.</p>`,
        },
        {
          question: "Quelle méthode, injection-extraction ou shampoing, est recommandée pour les dalles textiles des bureaux de la ZAE La Trentaine ?",
          answer: `<p>L'injection-extraction est la méthode privilégiée pour les dalles textiles des bureaux tertiaires : elle pénètre en profondeur, élimine les salissures incrustées et sèche rapidement. Le shampoing traditionnel laisse des résidus. Pour les dalles très fines ou sensibles, nous adaptons la pression et testons d'abord une zone discrète pour garantir l'absence de dommage aux fibres.</p>`,
        },
        {
          question: "Comment gérez-vous le stationnement et la logistique pour un nettoyage de moquettes dans des bureaux proches de la gare de Chelles-Gournay ?",
          answer: `<p>Le stationnement est limité autour de la gare. Nous <strong>coordonnons à l'avance</strong> avec le gestionnaire ou syndic pour identifier une zone de livraison temporaire, ou nous stationnons dans les secteurs moins saturés (Coudreaux, Mont Chalats) et transportons le matériel à pied. Nous planifions aussi l'intervention en horaires creux (tôt le matin ou fin d'après-midi) pour réduire la congestion.</p>`,
        },
      ],
      ctaOverride: "",
    },
  ],
};

export default city;