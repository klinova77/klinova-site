// src/data/services/terrasses.config.ts
import type { ServiceConfig } from "~/types/geo";

const terrasses: ServiceConfig = {
  key: "terrasses",
  name: "Nettoyage de terrasses",
  defaultDescription:
    "Remise en état de terrasses : dépôts noirs, traces de pollution, mousses et salissures incrustées. Méthode adaptée au support (pierre, dalle, bois, composite), avec rinçage maîtrisé et finitions soignées.",

  benefits: [
    "Méthodes adaptées aux matériaux (dalles, pierre naturelle, béton, bois, composite)",
    "Prétraitement ciblé pour décoller les salissures sans abîmer le support",
    "Rinçage maîtrisé pour éviter projections et coulures",
    "Résultat homogène avec finitions (joints, bords, zones de passage)",
  ],

  process: [
    {
      step: "Diagnostic & protection",
      description:
        "Identification du support (poreux, fragile, traité), repérage des joints et zones sensibles, protection des façades, menuiseries et zones adjacentes.",
    },
    {
      step: "Pré-nettoyage",
      description:
        "Balayage, retrait des déchets et éléments gênants, pré-humidification si nécessaire pour limiter la dispersion des poussières.",
    },
    {
      step: "Nettoyage en profondeur",
      description:
        "Application d'un détergent adapté, brossage manuel ou mécanique selon le support, action sur les zones noircies et salissures incrustées.",
    },
    {
      step: "Rinçage contrôlé & finitions",
      description:
        "Rinçage avec débit maîtrisé, reprise des joints et bordures, contrôle visuel final et conseils d'entretien pour préserver le rendu.",
    },
  ],

  /**
   * PRICING TIERS (nouveau modèle)
   * - Sert au JSON-LD OfferCatalog via buildPricingOffers
   * - Et peut servir à un mini composant "À partir de"
   */
  pricingTiers: [
    {
      name: "Terrasse standard (entretien / remise en état)",
      description:
        "À partir de 240€ TTC. Tarif indicatif selon surface, état, accès et évacuation.",
      priceType: "from",
      from: 240,
      vatIncluded: true,
      currency: "EUR",
    },
    {
      name: "Terrasse très encrassée / support fragile",
      description:
        "Sur devis après diagnostic (dépôts noirs marqués, mousses épaisses, support poreux ou ancien, zones difficiles).",
      priceType: "quote",
      currency: "EUR",
    },
  ],

  faq: [
    {
      question: "Intervenez-vous sur tous types de terrasses ?",
      answer:
        "Oui. Nous adaptons la méthode au matériau : dalles béton, pierre naturelle, travertin, carrelage extérieur, bois ou composite. Un test discret permet d'ajuster produit, brossage et rinçage pour éviter tout risque sur les supports sensibles.",
    },
    {
      question: "Pouvez-vous enlever les dépôts noirs, mousses et traces de pollution ?",
      answer:
        "Oui. Nous combinons un prétraitement adapté et un brossage ciblé pour décoller dépôts noirs, micro-végétation et salissures incrustées. Le protocole dépend du support (poreux ou non) et de l'ancienneté des traces.",
    },
    {
      question: "Utilisez-vous un nettoyeur haute pression ?",
      answer:
        "Nous privilégions une approche contrôlée et adaptée au support. Sur certains matériaux, une pression trop forte peut abîmer les joints, délaver la pierre ou relever les fibres du bois. Nous choisissons l'outil et le réglage en fonction du matériau et du niveau d'encrassement.",
    },
    {
      question: "Comment évitez-vous les projections et les coulures sur la façade ?",
      answer:
        "Nous protégeons les zones sensibles (façade, menuiseries, seuils) et travaillons avec un rinçage maîtrisé. L'objectif est un chantier propre, sans nuisance pour les surfaces adjacentes.",
    },
    {
      question: "Faut-il vider la terrasse avant votre venue ?",
      answer:
        "Il est recommandé de dégager au maximum les zones à traiter : mobilier, pots, rangements légers. Cela permet un nettoyage homogène et plus rapide. Si certains éléments sont lourds, nous pouvons organiser l'intervention par zones.",
    },
    {
      question: "Proposez-vous un traitement anti-mousse durable ?",
      answer:
        "Selon le support et l'exposition (ombre, humidité), un traitement préventif peut être proposé après nettoyage. Le choix dépend du matériau et des contraintes (plantes, animaux, ruissellement).",
    },
  ],

  urls: {
    parent: "/nettoyage-terrasses",
  },
};

export default terrasses;
