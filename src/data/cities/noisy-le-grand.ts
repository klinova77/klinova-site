import type { City } from '~/types/geo';

const noisyLeGrand: City = {
  name: 'Noisy-le-Grand',
  slug: 'noisy-le-grand',
  postalCodes: ['93160'],
  department: { name: 'Seine-Saint-Denis', code: '93', slug: 'seine-saint-denis' },
  districts: ['Mont d’Est', 'Pavé Neuf', 'Centre-Ville', 'Maille-Horizon', 'Buttes-Halage'],
  nearbyCities: ['gournay-sur-marne', 'bry-sur-marne', 'neuilly-sur-marne'],
  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro:
        `À Noisy-le-Grand, beaucoup de moquettes en bureaux autour du Mont d’Est et circulations d’immeubles récents. Problèmes : taches de café, marques de trafic, auréoles après petits dégâts des eaux. Interventions avant 9 h / après 19 h.`,
      uniqueDeepDive:
        `Repérage : ascenseurs, open-spaces, type de fibre. Méthodes : pré-traitement, brossage mécanique, encapsulation (séchage 1–2 h) ou extraction contrôlée si salissures profondes. Post-inondation : contrôle humidité, reprise des auréoles. Conseils : tapis de propreté aux accès, aspiration 2x/semaine. Éviter sur-mouillage au spray ménager.`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro:
        `Les parkings proches des Arcades et du RER A demandent une coordination fine : horaires décalés, gestion des allées piétonnes, information en amont.`,
      uniqueDeepDive:
        `Process : balayage → dégraissant ciblé → autolaveuse → reprises huiles → rinçage → siphons. Séquencé par zones (A/B/C) avec rubalise. Affichage 72 h, rappel J-1. À éviter : jet haute pression sur murs peints, flaques persistantes. Options : turbines de séchage, reprise marquage si besoin. Fréquence : 2/an si forte fréquentation.`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro:
        `Noisy-le-Grand combine terrasses très exposées (Maille-Horizon) et loggias abritées (Pavé Neuf). On ajuste produits/outil pour préserver supports et limiter écoulements.`,
      uniqueDeepDive:
        `Préparation : retirer objets/textiles. Méthode : dépoussiérage → détergent pH adapté → brossage → rinçage maîtrisé → vitres/garde-corps anti-traces. Algues/lichens : biocide pro. Grès clair : éviter acides, privilégier pH doux + brossage. Entretien mensuel : eau tiède + microfibre.`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro:
        `Autour des grands ensembles, les fientes s’accumulent vite. On suit un protocole désinfection → retrait → nettoyage → désinfection avec EPI et gestion des déchets.`,
      uniqueDeepDive:
        `Traitement des garde-corps (dessus/dessous), seuils, coffres. Pré-désinfection (temps de contact), raclage/aspiration HEPA, nettoyage compatible support, désinfection finale. Prévention : pics inox / effaroucheurs si autorisés. Conseils : 48–72 h sans textiles dehors, ne pas balayer à sec, ne pas arroser avant notre venue.`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro:
        `Demandes : canapés tissus quotidiens (boissons, auréoles) et tapis modernes en fibres synthétiques. Retour d’usage le jour même visé.`,
      uniqueDeepDive:
        `Canapés : test couleurs, pré-spray ciblé, brossage doux, extraction maîtrisée. Microfibres : éviter auréoles via passes croisées. Tapis : attention fibres naturelles (laine/jute) → très basse humidité. Conseils : aspiration régulière, éviter “détachants miracles”, surélever l’assise 2–3 h après.`,
    },
  ],
};

export default noisyLeGrand;
