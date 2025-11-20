import type { City } from '~/types/geo';

const villepinte: City = {
  name: 'Villepinte',
  slug: 'villepinte',
  postalCodes: ['93420'],
  department: { name: 'Seine-Saint-Denis', code: '93', slug: 'seine-saint-denis' },
  districts: ['Parc des Expositions', 'Vert-Galant', 'Pasteur', 'Marie-Laurencin'],
  nearbyCities: ['sevran', 'tremblay-en-france', 'aulnay-sous-bois'],
  services: [
    {
      serviceKey: 'moquettes',
      uniqueIntro:
        `Le flux événementiel du Parc des Expositions impose des fenêtres serrées (tôt matin/soirée). Circulations et salles polyvalentes : remise en service rapide et contrôle des odeurs.`,
      uniqueDeepDive:
        `Cartographie zones, pré-traitement (boissons/graisses), brossage mécanique, encapsulation (retour 1–2 h) ou extraction contrôlée. Post-dégât des eaux : mesures humidité + reprise auréoles. Conseils : programme autour des salons, tapis de propreté, aspirateur pro régulier.`,
    },
    {
      serviceKey: 'parkings',
      uniqueIntro:
        `Parkings proches du Parc Expo : fréquentation à pics. On segmente par travées/niveaux, balisage et réouverture progressive.`,
      uniqueDeepDive:
        `Balayage → dégraissant → autolaveuse → reprises pointuelles → rinçage → siphons. Affichage 72 h, coordination gardiennage. À éviter : lavage pendant pics événementiels, HP sur zones sensibles. Option turbines si réouverture immédiate. Fréquence : 2–3/an selon calendrier.`,
    },
    {
      serviceKey: 'balcons',
      uniqueIntro:
        `Dans les quartiers résidentiels (Vert-Galant, Pasteur), balcons exposés à poussières de voirie et ruissellements. Produits compatibles supports et écoulements maîtrisés.`,
      uniqueDeepDive:
        `Dépoussiérage → détergent pH contrôlé → brossage → rinçage → vitres/garde-corps. Composite/bois : pas de décapants agressifs. Conseils : entretien trimestriel rapide, éviter javel/acides. Gestion eaux : serpillières de rétention, aspiration si besoin.`,
    },
    {
      serviceKey: 'balcons-fientes',
      uniqueIntro:
        `Récurrence de fientes sur certaines résidences proches de toitures techniques. Protocole sanitaire strict et dispositifs anti-perchoir discrets.`,
      uniqueDeepDive:
        `EPI + pré-désinfection (contact) → retrait/aspiration HEPA → nettoyage → désinfection finale. Recoins (sous lisses, coffres) traités. Prévention : pics inox posés proprement, effaroucheurs si validés copro. Conseils : ne pas balayer à sec, ne pas mouiller avant notre venue.`,
    },
    {
      serviceKey: 'canapes-tapis',
      uniqueIntro:
        `Beaucoup de canapés tissus et tapis synthétiques avec exigence de séchage rapide. Produits faible odeur et contrôle précis de l’humidité.`,
      uniqueDeepDive:
        `Canapés : test couleurs, pré-spray enzymatique, brossage souple, extraction faible humidité, neutralisation d’odeurs si animaux. Tapis : fibres naturelles → très basse humidité (prévenir déformations). Conseils : aérer 2–4 h, éviter sprays ménagers agressifs, protéger 24 h contre re-salissures.`,
    },
  ],
};

export default villepinte;
