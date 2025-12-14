// src/data/services/canapes-tapis.config.ts
import type { ServiceConfig } from "~/types/geo";

const canapesTapis: ServiceConfig = {
  key: "canapes-tapis",
  name: "Nettoyage de canapés, tapis et matelas",

  urls: {
    parent: "/nettoyage-canapes-tapis-matelas",
  },

  defaultDescription:
    "Nettoyage professionnel des textiles d’ameublement à domicile : détachage ciblé, neutralisation des odeurs, hygiène renforcée et séchage maîtrisé. Méthode adaptée à chaque tissu.",

  ctaOverride: "Réserver une intervention",

  benefits: [
    "Faible humidité",
    "Additifs neutralisants d’odeurs (technologie O.N.T)",
    "Compatibilité animaux/enfants",
    "Conseils d’entretien",
  ],

  process: [
    {
      step: "Diagnostic textile",
      description:
        "Test de solidité des couleurs et analyse des fibres pour adapter le traitement.",
    },
    {
      step: "Pré-traitement ciblé",
      description:
        "Application d'un détergent enzymatique ou alcalin sur les taches, brossage souple pour préparation.",
    },
    {
      step: "Nettoyage (méthode adaptée)",
      description:
        "Injection-extraction à pression maîtrisée ou méthode alternative selon le tissu (risque de dégorgement / textile délicat).",
    },
    {
      step: "Finitions et conseils",
      description:
        "Neutralisation d'odeurs, séchage optimisé et recommandations d’entretien.",
    },
  ],

  // ✅ NOUVEAU : tiers (pour OfferCatalog + pricingHintEntries + PricingTextiles)
  pricingTiers: [
    { name: "Fauteuil", priceType: "from", from: 80, vatIncluded: true, currency: "EUR" },
    { name: "Canapé 2 places", priceType: "from", from: 110, vatIncluded: true, currency: "EUR" },
    { name: "Canapé 3 places", priceType: "from", from: 130, vatIncluded: true, currency: "EUR" },
    { name: "Canapé d’angle", priceType: "from", from: 160, vatIncluded: true, currency: "EUR" },
    { name: "Matelas 1 place", priceType: "from", from: 70, vatIncluded: true, currency: "EUR" },
    { name: "Matelas 2 places", priceType: "from", from: 100, vatIncluded: true, currency: "EUR" },
    { name: "Tapis (< 4 m²)", priceType: "from", from: 80, vatIncluded: true, currency: "EUR" },
   {
  name: "Tapis (> 4 m²)",
  description: "Tarif au m² (tapis standard).",
  priceType: "from",
  from: 20,
  unitCode: "MTK",
  unitLabel: "/m²",
  vatIncluded: true,
  currency: "EUR",
},

    {
      name: "Textiles délicats (velours, viscose, lin, soie, fibres végétales…)",
      description:
        "Sur devis après diagnostic : méthode adaptée (sec, mousse, vapeur contrôlée, micro-extraction).",
      priceType: "quote",
      currency: "EUR",
    },
  ],

  // (optionnel) tu peux garder pricing legacy si tu veux, mais inutile si tu passes aux tiers
  // pricing: { from: "80 €", unit: "fauteuil" },

  faq: [
    {
      question: "Intervenez-vous le soir ou le week-end si je ne suis pas disponible en journée ?",
      answer:
        "Oui. Nous pouvons intervenir tôt le matin, en soirée ou le week-end selon vos contraintes. Les créneaux sont organisés avec vous à l’avance pour limiter toute gêne et garantir des conditions de travail adaptées.",
    },
    {
      question: "Les taches anciennes ou les mauvaises odeurs peuvent-elles être éliminées ?",
      answer:
        "Nous traitons les taches avec des détachants professionnels et des techniques adaptées à chaque fibre. La majorité des taches récentes partent très bien. Les taches anciennes peuvent laisser une marque. Pour les odeurs (urine, tabac, humidité), le nettoyage en profondeur et nos neutralisateurs améliorent nettement la situation, mais certaines odeurs très incrustées peuvent nécessiter plusieurs passages.",
    },
    {
      question: "Faut-il préparer quelque chose avant votre intervention sur le canapé ou le tapis ?",
      answer:
        "Il suffit de dégager légèrement l’espace autour du canapé ou du tapis. Si des objets sont fragiles ou sensibles à l’humidité, il est préférable de les déplacer. Nous protégeons le sol si nécessaire.",
    },
    {
      question: "Combien de temps faut-il pour que le canapé ou le tapis sèche après le nettoyage ?",
      answer:
        "Le séchage complet prend généralement entre 4 et 8 heures selon la fibre, l’aération du logement et l’humidité ambiante.",
    },
    {
      question: "Le nettoyage est-il sans danger pour les tissus délicats ou les couleurs ?",
      answer:
        "Oui. Nous réalisons systématiquement un test sur une zone discrète pour vérifier la tenue des couleurs et la réaction du tissu. La méthode est ajustée selon la fibre, avec un minimum d’humidité lorsque c’est nécessaire.",
    },
    {
      question: "Puis-je utiliser mon canapé ou marcher sur le tapis juste après le nettoyage ?",
      answer:
        "Vous pouvez circuler brièvement si nécessaire, mais il est recommandé d’attendre la fin du séchage pour un confort optimal et éviter de réencrasser la fibre. Pour les matelas, attendez environ 6 heures avant de remettre les draps.",
    },
  ],
};

export default canapesTapis;
