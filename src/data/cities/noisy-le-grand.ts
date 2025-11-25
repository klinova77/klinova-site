import type { City } from '~/types/geo';

const noisyLeGrand: City = {
  name: 'Noisy-le-Grand',
  slug: 'noisy-le-grand',
  postalCodes: ['93160'],

  customDescription:
    'À Noisy-le-Grand, nous intervenons dans les immeubles récents, parkings et logements pour entretenir moquettes, balcons et textiles en respectant les usages de chaque site.',

  department: {
    name: 'Seine-Saint-Denis',
    code: '93',
    slug: 'seine-saint-denis',
  },

  districts: [
    'Mont d’Est',
    'Pavé Neuf',
    'Centre-Ville',
    'Maille-Horizon',
    'Buttes-Halage',
  ],

  nearbyCities: [
    'vaires-sur-marne',
    'torcy',
    'gournay-sur-marne',
    'noisy-le-grand',
    'lagny-sur-marne'
  ],

  ctaOverride: '',

  landmarks: [
    'Centre commercial Les Arcades',
    'Gare RER A Noisy-le-Grand Mont d’Est',
    'Hôtel de Ville de Noisy-le-Grand',
    'Maille-Horizon Nord',
    'Esplanade du Mont d’Est',
  ],

  specificChallenges: [
    'Présence de nombreux immeubles récents avec moquettes en circulations et bureaux autour du Mont d’Est, soumis à un fort trafic quotidien.',
    'Parkings souterrains et aériens liés aux Arcades et au RER A, nécessitant une organisation précise des flux véhicules et piétons.',
    'Terrasses exposées au vent et à la pluie sur Maille-Horizon, avec écoulements à maîtriser pour ne pas gêner les voisins.',
    'Loggias plus abritées dans certains quartiers, avec dépôts fins (poussières, pollens) qui s’incrustent dans les joints et les angles.',
    'Contraintes horaires importantes pour limiter la gêne dans les parkings, halls et commerces (interventions tôt le matin ou en soirée).',
  ],

  testimonial: {
    text: '',
    author: '',
    role: '',
    building: '',
  },

  faq: [
    {
      question:
        'Comment se déroule une intervention de nettoyage à Noisy-le-Grand ?',
      answer: `<p>À Noisy-le-Grand, nous commençons par identifier les accès (esplanades, ascenseurs, galeries commerçantes, coursives) et échangeons avec l’occupant ou le syndic pour définir précisément les zones à traiter.</p>
<p>Les protections nécessaires sont installées avant le nettoyage. En fin d’intervention, un contrôle commun permet de valider le résultat et les éventuelles recommandations d’entretien.</p>`,
    },
    {
      question:
        'Faut-il prévoir quelque chose avant l’intervention à Noisy-le-Grand ?',
      answer: `<p>Pour les balcons ou terrasses, dégager un peu l’espace facilite l’accès aux gardes-corps et aux évacuations. Pour les moquettes et tapis, aucune préparation obligatoire.</p>
<p>Dans les parkings souterrains, il peut être utile de libérer une zone ou de prévenir les résidents. Si ce n’est pas faisable, nous adaptons la méthode en travaillant par segments.</p>`,
    },
    {
      question:
        'Intervenez-vous le soir ou le week-end à Noisy-le-Grand ?',
      answer: `<p>Oui. Même si la majorité des interventions se fait en semaine, nous proposons des créneaux en soirée ou le samedi, notamment pour les parkings, halls, commerces ou locaux professionnels.</p>
<p>Les horaires sont définis avec vous pour limiter la gêne et respecter les contraintes des immeubles du centre et des quartiers pavillonnaires.</p>`,
    },
  ],

  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro: `À Noisy-le-Grand, beaucoup de moquettes en bureaux autour du Mont d’Est et circulations d’immeubles récents. Problèmes : taches de café, marques de trafic, auréoles après petits dégâts des eaux. Interventions avant 9 h / après 19 h.`,
      uniqueDeepDive: `Repérage : ascenseurs, open-spaces, type de fibre. Méthodes : pré-traitement, brossage mécanique, encapsulation (séchage 1–2 h) ou extraction contrôlée si salissures profondes. Post-inondation : contrôle humidité, reprise des auréoles. Conseils : tapis de propreté aux accès, aspiration 2x/semaine. Éviter sur-mouillage au spray ménager.`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro: `Les parkings proches des Arcades et du RER A demandent une coordination fine : horaires décalés, gestion des allées piétonnes, information en amont.`,
      uniqueDeepDive: `Process : balayage → dégraissant ciblé → autolaveuse → reprises huiles → rinçage → siphons. Séquencé par zones (A/B/C) avec rubalise. Affichage 72 h, rappel J-1. À éviter : jet haute pression sur murs peints, flaques persistantes. Options : turbines de séchage, reprise marquage si besoin. Fréquence : 2/an si forte fréquentation.`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro: `Noisy-le-Grand combine terrasses très exposées (Maille-Horizon) et loggias abritées (Pavé Neuf). On ajuste produits/outil pour préserver supports et limiter écoulements.`,
      uniqueDeepDive: `Préparation : retirer objets/textiles. Méthode : dépoussiérage → détergent pH adapté → brossage → rinçage maîtrisé → vitres/garde-corps anti-traces. Algues/lichens : biocide pro. Grès clair : éviter acides, privilégier pH doux + brossage. Entretien mensuel : eau tiède + microfibre.`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro: `Autour des grands ensembles, les fientes s’accumulent vite. On suit un protocole désinfection → retrait → nettoyage → désinfection avec EPI et gestion des déchets.`,
      uniqueDeepDive: `Traitement des garde-corps (dessus/dessous), seuils, coffres. Pré-désinfection (temps de contact), raclage/aspiration HEPA, nettoyage compatible support, désinfection finale. Prévention : pics inox / effaroucheurs si autorisés. Conseils : 48–72 h sans textiles dehors, ne pas balayer à sec, ne pas arroser avant notre venue.`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro: `Demandes : canapés tissus quotidiens (boissons, auréoles) et tapis modernes en fibres synthétiques. Retour d’usage le jour même visé.`,
      uniqueDeepDive: `Canapés : test couleurs, pré-spray ciblé, brossage doux, extraction maîtrisée. Microfibres : éviter auréoles via passes croisées. Tapis : attention fibres naturelles (laine/jute) → très basse humidité. Conseils : aspiration régulière, éviter “détachants miracles”, surélever l’assise 2–3 h après.`,
    },
  ],
};

export default noisyLeGrand;
